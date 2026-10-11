#!/usr/bin/env python3
"""Real core + nftables in isolated user/network namespaces; never host routes.
Requires MCLASH_TEST_CORE and MCLASH_TEST_JSHN (native SDK host jshn directory).
"""
import json
import ctypes
import contextlib
import io
import signal
import os
from pathlib import Path
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import unittest

ROOT = Path(__file__).resolve().parents[1]

# Child processes enter namespaces created under the outer test user namespace.
if '--peer' in sys.argv:
    import http.server
    import threading
    from socketserver import ThreadingTCPServer, BaseRequestHandler
    class Handler(http.server.BaseHTTPRequestHandler):
        def do_GET(self):
            body = self.client_address[0].encode()
            self.send_response(200)
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        def log_message(self, *args):
            pass
    class HTTP6(ThreadingTCPServer):
        address_family = socket.AF_INET6
        def server_bind(self):
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 1)
            super().server_bind()
    def serve_http(family):
        cls = HTTP6 if family == 6 else ThreadingTCPServer
        server = cls(('::' if family == 6 else '0.0.0.0', 8080), Handler)
        server.serve_forever()
    class EchoDNS(BaseRequestHandler):
        def handle(self):
            self.request.sendall(self.request.recv(1024))
    def serve_tcp_dns(family):
        cls = HTTP6 if family == 6 else ThreadingTCPServer
        cls(('::' if family == 6 else '0.0.0.0', 53), EchoDNS).serve_forever()
    def serve_udp(family, port):
        sock = socket.socket(socket.AF_INET6 if family == 6 else socket.AF_INET, socket.SOCK_DGRAM)
        if family == 6:
            sock.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 1)
        sock.bind(('::' if family == 6 else '0.0.0.0', port))
        while True:
            data, addr = sock.recvfrom(4096)
            if port == 53:
                sock.sendto(data, addr)
            elif port == 9999:
                sock.sendto(addr[0].encode(), addr)
            else:
                # A deterministic DNS A response with the queried question intact.
                response = data[:2] + b'\x81\x80\x00\x01\x00\x01\x00\x00\x00\x00' + data[12:]
                response += b'\xc0\x0c\x00\x01\x00\x01\x00\x00\x00\x3c\x00\x04\xcb\x00\x71\x02'
                sock.sendto(response, addr)
    # Start servers after parent has configured interfaces; wildcard binds work before.
    for family in [4, 6]:
        threading.Thread(target=serve_http, args=(family,), daemon=True).start()
        threading.Thread(target=serve_tcp_dns, args=(family,), daemon=True).start()
        for port in [9999, 5353, 53]:
            threading.Thread(target=serve_udp, args=(family, port), daemon=True).start()
    while True:
        time.sleep(1)

if '--idle' in sys.argv:
    while True:
        time.sleep(1)

if '--namespace' not in sys.argv:
    if not os.environ.get('MCLASH_TEST_CORE') or not os.environ.get('MCLASH_TEST_JSHN'):
        print('Network integration skipped: set MCLASH_TEST_CORE and MCLASH_TEST_JSHN')
        sys.exit(0)
    # This is the only entry to all commands that can change network state.
    result = subprocess.run(['unshare', '-Urn', sys.executable, str(Path(__file__).resolve()), '--namespace'], env=os.environ)
    sys.exit(result.returncode)


def command(*args, check=True, **kw):
    result = subprocess.run(args, check=False, text=True, capture_output=True, **kw)
    if check and result.returncode:
        print(result.stdout + result.stderr, file=sys.stderr)
        raise subprocess.CalledProcessError(result.returncode, args, result.stdout, result.stderr)
    return result


class NetworkIntegration(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory(prefix='mclash-network-test-')
        cls.base = Path(cls.temp.name)
        cls.host = cls.base / 'bin'
        cls.host.mkdir()
        for name in ['fw4', 'uci', 'logger']:
            p = cls.host / name
            p.write_text('#!/bin/sh\n' + ('echo 1\n' if name == 'uci' else 'exit 0\n'))
            if name == 'logger':
                p.write_text('#!/bin/sh\necho "$*" >&2\n')
            p.chmod(0o755)
        jshn = Path(os.environ['MCLASH_TEST_JSHN'])
        cls.env = dict(os.environ, PATH=f'{cls.host}:{jshn / "bin"}:' + os.environ['PATH'])
        script = (ROOT / 'root/usr/libexec/mclash-network').read_text()
        script = script.replace('id -u dnsmasq 2>/dev/null', "printf '0'")
        cls.config = cls.base / 'config.yaml'
        cls.state = cls.base / 'run'
        cls.includes = cls.base / 'nftables.d/chain-pre'
        replacements = {'/etc/mclash/config.yaml': str(cls.config), '/var/run/mclash': str(cls.state),
                        '/usr/share/nftables.d/chain-pre': str(cls.includes), '/sbin/ip': shutil.which('ip'),
                        '/usr/sbin/nft': shutil.which('nft'), '/usr/libexec/mclash-log': str(cls.base / 'log-helper'),
                        '/var/log': str(cls.base / 'logs'), '/var/lock/mclash-log': str(cls.base / 'log-lock'), '/usr/share/libubox/jshn.sh': str(jshn / 'share/libubox/jshn.sh')}
        for old, new in replacements.items():
            script = script.replace(old, new)
        cls.helper = cls.base / 'network'
        cls.helper.write_text(script.replace('#!/bin/sh', '#!' + shutil.which('busybox') + ' ash', 1))
        cls.helper.chmod(0o755)
        dashboard_source = (ROOT / 'root/usr/libexec/mclash-dashboard').read_text()
        for old, new in replacements.items():
            dashboard_source = dashboard_source.replace(old, new)
        cls.dashboard = cls.base / 'dashboard'
        cls.dashboard.write_text(dashboard_source.replace('#!/bin/sh', '#!' + shutil.which('busybox') + ' ash', 1))
        cls.dashboard.chmod(0o755)
        log_source = (ROOT / 'root/usr/libexec/mclash-log').read_text()
        for old, new in replacements.items(): log_source = log_source.replace(old, new)
        (cls.base / 'log-helper').write_text(log_source)
        (cls.base / 'log-helper').chmod(0o755)
        cls.core = Path(os.environ['MCLASH_TEST_CORE'])
        cls.processes = []
        command('ip', 'link', 'set', 'lo', 'up')
        for key, args in [('lan', ['--peer']), ('lan2', ['--peer']), ('wan', ['--peer'])]:
            peer = subprocess.Popen(['unshare', '-n', sys.executable, str(Path(__file__).resolve()), *args],
                                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, preexec_fn=lambda: ctypes.CDLL(None).prctl(1, signal.SIGTERM))
            cls.processes.append(peer)
            time.sleep(.1)
            name = {'lan': 'br-lan', 'lan2': 'br-lan2', 'wan': 'wan'}[key]
            command('ip', 'link', 'add', name, 'type', 'veth', 'peer', 'name', key + 'peer')
            command('ip', 'link', 'set', key + 'peer', 'netns', str(peer.pid))
            cls.set_peer(peer, 'ip', 'link', 'set', 'lo', 'up')
            cls.set_peer(peer, 'ip', 'link', 'set', key + 'peer', 'up')
            command('ip', 'link', 'set', name, 'up')
            ip4 = {'lan': '192.168.100', 'lan2': '192.168.101', 'wan': '203.0.113'}[key]
            ip6 = {'lan': 'fd00:100', 'lan2': '2001:db8:101', 'wan': '2001:db8:1'}[key]
            command('ip', 'addr', 'add', ip4 + '.1/24', 'dev', name)
            cls.set_peer(peer, 'ip', 'addr', 'add', ip4 + '.2/24', 'dev', key + 'peer')
            command('ip', '-6', 'addr', 'add', ip6 + '::1/64', 'dev', name, 'nodad')
            cls.set_peer(peer, 'ip', '-6', 'addr', 'add', ip6 + '::2/64', 'dev', key + 'peer', 'nodad')
            cls.set_peer(peer, 'ip', 'route', 'add', 'default', 'via', ip4 + '.1')
            cls.set_peer(peer, 'ip', '-6', 'route', 'add', 'default', 'via', ip6 + '::1')
        cls.lan, cls.lan2, cls.wan = cls.processes
        command('ip', 'route', 'add', 'default', 'via', '203.0.113.2')
        command('ip', '-6', 'route', 'add', 'default', 'via', '2001:db8:1::2')
        Path('/proc/sys/net/ipv4/ip_forward').write_text('1')
        Path('/proc/sys/net/ipv6/conf/all/forwarding').write_text('1')
        command('nft', '-f', '-', input='table inet fw4 { chain input { type filter hook input priority 0; policy accept; }\nchain output { type filter hook output priority 0; policy accept; }\nchain forward { type filter hook forward priority 0; policy accept; }\n}\ntable inet unrelated { chain keep {}\n}\n')
        command('ip', 'route', 'add', 'blackhole', '198.51.100.0/24', 'table', '167')

    @classmethod
    def set_peer(cls, peer, *args):
        return command('nsenter', '-t', str(peer.pid), '-n', *args)

    @classmethod
    def tearDownClass(cls):
        for peer in cls.processes:
            peer.terminate()
            peer.wait(timeout=5)
        cls.temp.cleanup()

    def setUp(self):
        command('nft', '-f', '-', input='delete table inet fw4\ntable inet fw4 { chain input { type filter hook input priority 0; policy accept; }\nchain output { type filter hook output priority 0; policy accept; }\nchain forward { type filter hook forward priority 0; policy accept; }\n}')

    def make_config(self, mode, ipv6=True, router=True, lan=True, access=None, stack="mixed"):
        options = {'mode': mode, 'interfaces': ['br-lan', 'br-lan2'], 'access': access or [], 'lan': lan, 'router': router, 'ipv6': ipv6, 'stack': stack}
        source = ROOT / 'htdocs/luci-static/resources/mclash/overrides.js'
        raw = "mixed-port: 7890\nexternal-controller: 127.0.0.1:9090\nmode: rule\nproxies: []\nrules: ['MATCH,DIRECT']\ndns:\n  nameserver: [203.0.113.2:5353]\n  default-nameserver: [203.0.113.2]\n"
        js = "global.self=global;const fs=require('fs');const Module=new Function('baseclass',fs.readFileSync(process.argv[1],'utf8'))({extend:m=>function(){Object.assign(this,m)}});const api=new Module();process.stdout.write(api.call('network',process.argv[2],JSON.parse(process.argv[3])));"
        content = command('node', '-e', js, str(source), raw, json.dumps(options)).stdout
        self.config.write_text(content)
        return content

    def helper_call(self, action, check=True):
        return command('busybox', 'ash', str(self.helper), action, check=check, env=self.env)

    def start_core(self, mode, ipv6=True, router=True, lan=True, access=None, stack="mixed"):
        self.make_config(mode, ipv6, router, lan, access, stack)
        self.helper_call('check')
        check = command(str(self.core), '-t', '-d', str(self.base), '-f', str(self.config))
        self.assertIn('successful', check.stdout.lower())
        log = self.base / 'core.log'
        self.log = log.open('w')
        self.child = subprocess.Popen([str(self.core), '-d', str(self.base), '-f', str(self.config)], stdout=self.log, stderr=self.log, env=self.env)
        self.addCleanup(self.stop_core)
        for _ in range(60):
            self.assertIsNone(self.child.poll(), log.read_text())
            if (mode != 'tun' or command('ip', 'link', 'show', 'dev', 'Mclash', check=False).returncode == 0) and ':041D ' in Path('/proc/net/udp').read_text() + Path('/proc/net/udp6').read_text():
                break
            time.sleep(.1)
        else:
            self.fail('Core readiness timeout: ' + log.read_text())
        self.helper_call('up')

    def stop_core(self):
        if hasattr(self, 'child') and self.child.poll() is None:
            self.child.terminate()
            try:
                self.child.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.child.kill()
                self.child.wait(timeout=5)
        if hasattr(self, 'log'):
            self.log.close()
        self.helper_call('down')

    def probe(self, family=4, dns=False, peer=None):
        ip = '203.0.113.2' if family == 4 else '2001:db8:1::2'
        code = '''import socket,sys
ip=sys.argv[1];family=int(sys.argv[2]);dns=sys.argv[3]=='1'
s=socket.socket(socket.AF_INET6 if family==6 else socket.AF_INET,socket.SOCK_DGRAM);s.settimeout(3)
if dns:
 data=b'\\x12\\x34\\x01\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x07example\\x03org\\x00\\x00\\x01\\x00\\x01'
 target='192.168.100.1' if family==4 else 'fd00:100::1';port=53
else: data=b'Mclash';target=ip;port=9999
s.sendto(data,(target,port));answer=s.recv(4096)
if dns:
 assert answer[:2]==b'\\x12\\x34' and answer[-4:]==bytes([203,0,113,2])
 s=socket.socket(socket.AF_INET6 if family==6 else socket.AF_INET);s.settimeout(3);s.connect((target,53));s.sendall(len(data).to_bytes(2,'big')+data)
 length=int.from_bytes(s.recv(2),'big');answer=b''
 while len(answer)<length:answer+=s.recv(length-len(answer))
 assert answer[:2]==b'\\x12\\x34' and answer[-4:]==bytes([203,0,113,2]);print('DNS OK')
else: print(answer.decode())
if not dns:
 s=socket.socket(socket.AF_INET6 if family==6 else socket.AF_INET);s.settimeout(3);s.connect((ip,8080));s.sendall(b'GET / HTTP/1.0\\r\\nHost: example.org\\r\\n\\r\\n');result=b''
 while True:
  chunk=s.recv(4096)
  if not chunk:break
  result+=chunk
 print(result.split(b'\\r\\n\\r\\n')[1].decode())
'''
        return self.set_peer(peer or self.lan, sys.executable, '-c', code, ip, str(family), '1' if dns else '0').stdout.strip()

    def assert_clean(self):
        self.assertFalse((self.state / 'network.owned').exists())
        self.assertFalse((self.state / 'network.ready').exists())
        self.assertEqual(list(self.includes.rglob('90-mclash.nft')), [])
        self.assertNotEqual(command('nft', 'list', 'table', 'inet', 'mclash', check=False).returncode, 0)
        for family in ['-4', '-6']:
            self.assertNotIn('lookup 166', command('ip', family, 'rule', 'show').stdout)
            self.assertFalse(command('ip', family, 'route', 'show', 'table', '166', check=False).stdout.strip())
        self.assertIn('unrelated', command('nft', 'list', 'tables').stdout)
        self.assertNotEqual(command('ip', 'link', 'show', 'dev', 'Mclash', check=False).returncode, 0)
        self.assertIn('blackhole', command('ip', 'route', 'show', 'table', '167').stdout)

    def test_tproxy_tcp_udp_dns_and_reload(self):
        self.start_core('tproxy')
        log = (self.base / 'logs/mclash.log').read_text()
        self.assertIn('fwmark 0x166 → 路由表 166，pref 1166', log)
        self.assertIn('local default dev lo', log)
        self.assertNotIn('table inet mclash {', log)
        self.assertIn('接管已启用，nftables 规则已应用', log)
        for family, source in [(4, '203.0.113.1'), (6, '2001:db8:1::1')]:
            self.assertEqual(self.probe(family).splitlines(), [source, source])
            self.assertEqual(self.probe(family, True), 'DNS OK')
        # fw4 reload removes only fw4; automatic chain includes restore our accepts.
        snippet = 'delete table inet fw4\ntable inet fw4 { chain input { type filter hook input priority 0; policy drop;\n'
        snippet += (self.includes / 'input/90-mclash.nft').read_text() + '\nct state established,related accept\n}\nchain output { type filter hook output priority 0; policy accept; }\nchain forward { type filter hook forward priority 0; policy drop; }\n}'
        command('nft', '-f', '-', input=snippet)
        self.assertEqual(self.probe(4).splitlines(), ['203.0.113.1'] * 2)
        self.stop_core()
        self.assert_clean()
        command('nft', 'flush', 'chain', 'inet', 'fw4', 'input')
        command('nft', 'add', 'chain', 'inet', 'fw4', 'input', '{ type filter hook input priority 0; policy accept; }')

    def test_tun_tcp_udp_dns(self):
        self.start_core('tun')
        for family, source in [(4, '203.0.113.1'), (6, '2001:db8:1::1')]:
            self.assertEqual(self.probe(family).splitlines(), [source, source])
            self.assertEqual(self.probe(family, True), 'DNS OK')
        self.stop_core()
        self.assert_clean()

    def test_tun_stacks_with_strict_firewall(self):
        for stack in ['gvisor', 'mixed', 'system']:
            with self.subTest(stack=stack):
                self.start_core('tun', stack=stack)
                try:
                    for family, source in [(4, '203.0.113.1'), (6, '2001:db8:1::1')]:
                        self.assertEqual(self.probe(family).splitlines(), [source, source])
                        self.assertEqual(self.probe(family, True), 'DNS OK')
                    snippet = 'delete table inet fw4\ntable inet fw4 { chain input { type filter hook input priority 0; policy drop;\n'
                    snippet += (self.includes / 'input/90-mclash.nft').read_text() + '\niifname "lo" accept\nct state established,related accept\n}\nchain output { type filter hook output priority 0; policy accept; }\nchain forward { type filter hook forward priority 0; policy drop;\n'
                    snippet += (self.includes / 'forward/90-mclash.nft').read_text() + '\nct state established,related accept\n}\n}'
                    command('nft', '-f', '-', input=snippet)
                    code = 'import socket; s=socket.create_connection(("203.0.113.2",8080),3);s.sendall(b"GET / HTTP/1.0\\r\\nHost: example.org\\r\\n\\r\\n"); print(s.recv(4096).decode())'
                    self.assertIn('200 OK', self.set_peer(self.lan, sys.executable, '-c', code).stdout)
                finally:
                    self.stop_core()
                    self.assert_clean()
                    command('nft', 'flush', 'chain', 'inet', 'fw4', 'input')
                    command('nft', 'add', 'chain', 'inet', 'fw4', 'input', '{ type filter hook input priority 0; policy accept; }')
                    command('nft', 'flush', 'chain', 'inet', 'fw4', 'forward')
                    command('nft', 'add', 'chain', 'inet', 'fw4', 'forward', '{ type filter hook forward priority 0; policy accept; }')

    def test_lan_transfers_and_dns_bypass_core(self):
        for mode in ['tun', 'tproxy']:
            for ipv6 in [True, False]:
                with self.subTest(mode=mode, ipv6=ipv6):
                    self.start_core(mode, ipv6=ipv6)
                    script = """import socket,sys
family=int(sys.argv[1]);target=sys.argv[2];af=socket.AF_INET6 if family==6 else socket.AF_INET
s=socket.socket(af,socket.SOCK_DGRAM);s.settimeout(3);s.sendto(b'LAN',(target,9999));print(s.recv(1024).decode())
s=socket.socket(af,socket.SOCK_STREAM);s.settimeout(3);s.connect((target,8080));s.sendall(b'GET / HTTP/1.0\\r\\nHost: lan\\r\\n\\r\\n');result=b''
while True:
 chunk=s.recv(4096)
 if not chunk:break
 result+=chunk
print(result.split(b'\\r\\n\\r\\n')[1].decode())
s=socket.socket(af,socket.SOCK_DGRAM);s.settimeout(3);s.sendto(b'LAN DNS bypass',(target,53));assert s.recv(1024)==b'LAN DNS bypass'
s=socket.socket(af,socket.SOCK_STREAM);s.settimeout(3);s.connect((target,53));s.sendall(b'LAN TCP DNS bypass');assert s.recv(1024)==b'LAN TCP DNS bypass';print('LAN DNS OK')
"""
                    # Across two routed LAN devices: the echo servers must see
                    # the original client address, not a Mihomo outbound socket.
                    self.assertEqual(self.set_peer(self.lan, sys.executable, '-c', script, '4', '192.168.101.2').stdout.splitlines(), ['192.168.100.2', '192.168.100.2', 'LAN DNS OK'])
                    self.assertEqual(self.set_peer(self.lan, sys.executable, '-c', script, '6', '2001:db8:101::2').stdout.splitlines(), ['fd00:100::2', 'fd00:100::2', 'LAN DNS OK'])
                    # Output hooks must also bypass LAN DNS from the router.
                    result = command(sys.executable, '-c', script, '4', '192.168.101.2')
                    self.assertEqual(result.stdout.splitlines(), ['192.168.101.1', '192.168.101.1', 'LAN DNS OK'])
                    self.stop_core()
                    self.assert_clean()

    def test_disable_lan_capture_keeps_router_proxy(self):
        for mode in ['tun', 'tproxy']:
            with self.subTest(mode=mode):
                self.start_core(mode, ipv6=False, lan=False)
                self.assertEqual(self.probe(4).splitlines(), ['192.168.100.2'] * 2)
                self.assertEqual(self.probe(6).splitlines(), ['fd00:100::2'] * 2)
                rules = (self.state / 'network.nft').read_text()
                self.assertIn('chain router', rules)
                self.assertIn('meta mark set 0x166', rules.split('chain router')[1])
                dns = rules.split('chain dns_lan')[1].split('chain router')[0]
                self.assertLess(dns.index('ip saddr != @access4 return'), dns.index('redirect to :1053'))
                self.stop_core()
                self.assert_clean()

    def test_access_control_selects_clients_and_dns(self):
        for mode in ['tun', 'tproxy']:
            with self.subTest(mode=mode):
                self.start_core(mode, lan=False, access=['192.168.100.0/24','192.168.100.2-192.168.100.3','fd00:100::2/128'])
                self.assertEqual(self.probe(4).splitlines(), ['203.0.113.1'] * 2)
                self.assertEqual(self.probe(6).splitlines(), ['2001:db8:1::1'] * 2)
                self.assertEqual(self.probe(4, peer=self.lan2).splitlines(), ['192.168.101.2'] * 2)
                self.assertEqual(self.probe(6, peer=self.lan2).splitlines(), ['2001:db8:101::2'] * 2)
                self.assertEqual(self.probe(4, True), 'DNS OK')
                # The system resolver must retain real DNS for unlisted clients,
                # rather than being redirected to Mihomo fake-IP DNS on output.
                dnsmasq_probe="import socket;s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM);s.settimeout(3);s.sendto(b'system DNS bypass',('203.0.113.2',53));assert s.recv(1024)==b'system DNS bypass'"
                try:
                    command(sys.executable,'-c',dnsmasq_probe)
                except Exception:
                    print(command('nft','list','table','inet','mclash').stdout,file=sys.stderr)
                    self.stop_core()
                    raise
                with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(subprocess.CalledProcessError):
                    self.probe(4, True, peer=self.lan2)
                self.stop_core()
                self.assert_clean()
                self.start_core(mode, lan=True, access=['192.168.100.2/32'])
                self.assertEqual(self.probe(4, peer=self.lan2).splitlines(), ['203.0.113.1'] * 2)
                self.stop_core()
                self.assert_clean()

    def test_disable_ipv6_blocks_public_udp(self):
        self.start_core('tproxy', ipv6=False, router=False)
        self.assertNotIn('chain router', (self.state / 'network.nft').read_text())
        self.assertEqual(self.probe(4).splitlines(), ['203.0.113.1'] * 2)
        with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(subprocess.CalledProcessError):
            self.probe(6)
        self.stop_core()
        self.assert_clean()

    def test_dashboard_lan_guard_and_secret(self):
        self.check_dashboard('test-secret')

    def test_dashboard_lan_guard_without_secret(self):
        self.check_dashboard('')

    def check_dashboard(self, secret):
        metadata = {'mode': 'none', 'interfaces': ['br-lan']}
        self.config.write_text('# Mclash OpenWrt 接管: ' + json.dumps(metadata) + '\nexternal-controller: 0.0.0.0:9097\n' + ('secret: ' + secret + '\n' if secret else '') + 'rules: ["MATCH,DIRECT"]\n')
        command('busybox', 'ash', str(self.dashboard), 'up', env=self.env)
        proc = subprocess.Popen([str(self.core), '-d', str(self.base), '-f', str(self.config)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        try:
            for _ in range(40):
                probe = command('curl', '-fsS', '--max-time', '1', '-H', 'Authorization: Bearer ' + secret, 'http://127.0.0.1:9097/version', check=False)
                if probe.returncode == 0:
                    break
                time.sleep(.1)
            self.assertEqual(probe.returncode, 0)
            lan = self.set_peer(self.lan, 'curl', '-fsS', '--max-time', '2', '-H', 'Authorization: Bearer ' + secret, 'http://192.168.100.1:9097/version')
            self.assertIn('version', lan.stdout)
            denied = command('nsenter', '-t', str(self.wan.pid), '-n', 'curl', '-fsS', '--max-time', '1', '-H', 'Authorization: Bearer ' + secret, 'http://203.0.113.1:9097/version', check=False)
            self.assertNotEqual(denied.returncode, 0)
            no_secret = command('curl', '-fsS', '--max-time', '1', 'http://127.0.0.1:9097/version', check=False)
            self.assertEqual(no_secret.returncode == 0, not bool(secret))
        finally:
            proc.terminate()
            proc.wait(timeout=10)
            command('busybox', 'ash', str(self.dashboard), 'down', env=self.env)
        self.assertNotEqual(command('nft', 'list', 'table', 'inet', 'mclash_dashboard', check=False).returncode, 0)

    def test_supervisor_core_exit_and_stop(self):
        parser = self.host / 'jsonfilter'
        parser.write_text('#!/usr/bin/env python3\nimport json,sys\nprint(json.load(sys.stdin).get("mode", "none"))\n')
        parser.chmod(0o755)
        runner = self.base / 'runner'
        source = (ROOT / 'root/usr/libexec/mclash-run').read_text()
        source = source.replace('/usr/bin/mihomo', str(self.core)).replace('/usr/libexec/mclash-network', str(self.helper)).replace('/usr/libexec/mclash-dashboard', str(self.dashboard)).replace('/usr/libexec/mclash-log', str(self.base / 'log-helper'))
        source = source.replace('/etc/mclash/config.yaml', str(self.config)).replace('/etc/mclash', str(self.base)).replace('/var/run/mclash', str(self.state))
        runner.write_text(source)
        for mode in ['tproxy', 'tun']:
            with self.subTest(mode=mode):
                self.make_config(mode)
                self.config.write_text(self.config.read_text().replace('127.0.0.1:9090', '127.0.0.1:9097'))
                with socket.socket() as listener:
                    listener.bind(('127.0.0.1', 9097))
                    listener.listen()
                    conflict = subprocess.run(['busybox', 'ash', str(runner)], env=self.env, capture_output=True, timeout=10)
                    self.assertNotEqual(conflict.returncode, 0, 'Custom controller conflict must prevent startup')
                    self.assertFalse((self.state / 'core.pid').exists())
                    self.assertEqual(listener.getsockname()[1], 9097)
                runner_log = self.base / ('runner-' + mode + '.log')
                stream = runner_log.open('w')
                proc = subprocess.Popen(['busybox', 'ash', str(runner)], env=self.env, stdout=stream, stderr=stream)
                try:
                    for _ in range(70):
                        self.assertIsNone(proc.poll(), 'Supervisor exited before readiness: ' + runner_log.read_text())
                        if (self.state / 'network.ready').exists():
                            break
                        time.sleep(.1)
                    else:
                        self.fail('Supervisor did not become ready')
                    self.assertEqual(self.probe(4).splitlines(), ['203.0.113.1'] * 2)
                    if mode == 'tproxy':
                        os.kill(int((self.state / 'core.pid').read_text()), signal.SIGKILL)
                    else:
                        proc.terminate()
                    proc.wait(timeout=15)
                    self.assert_clean()
                    self.assertFalse((self.state / 'core.pid').exists())
                finally:
                    if proc.poll() is None:
                        proc.terminate()
                        proc.wait(timeout=15)
                    stream.close()

    def test_conflict_and_apply_failure(self):
        self.make_config('tproxy')
        command('ip', 'route', 'add', 'blackhole', '198.51.100.0/24', 'table', '166')
        result = self.helper_call('check', check=False)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('已被占用', result.stderr)
        self.assertIn('blackhole', command('ip', 'route', 'show', 'table', '166').stdout)
        command('ip', 'route', 'del', 'blackhole', '198.51.100.0/24', 'table', '166')
        nftfail = self.host / 'nftfail'
        nftfail.write_text('#!/bin/sh\nif [ "$1" = -f ]; then exit 1; fi\nexec ' + shutil.which('nft') + ' "$@"\n')
        nftfail.chmod(0o755)
        original = self.helper.read_text()
        self.helper.write_text(original.replace('NFT=' + shutil.which('nft'), 'NFT=' + str(nftfail)))
        result = self.helper_call('up', check=False)
        self.helper.write_text(original)
        self.assertNotEqual(result.returncode, 0)
        self.assert_clean()


unittest.main(argv=[sys.argv[0]], verbosity=2)
