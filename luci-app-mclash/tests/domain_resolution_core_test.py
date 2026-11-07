#!/usr/bin/env python3
"""Check node DNS conversion with a real fake-IP core on loopback only.

Set MCLASH_TEST_CORE to enable. No host DNS, routes or firewall are changed.
"""
import ipaddress
import json
import os
from pathlib import Path
import shutil
import socket
import struct
import subprocess
import tempfile
import threading
import time
import unittest

ROOT = Path(__file__).resolve().parents[2]
CORE = os.environ.get('MCLASH_TEST_CORE', '')
HOST = Path(os.environ.get('MCLASH_TEST_JSHN', ROOT / '.build-cache/sdk-x86_64/staging_dir/host'))
BRIDGE = ROOT / 'luci-app-mclash/htdocs/luci-static/resources/mclash/overrides.js'
JS = """global.self=global;const fs=require('node:fs');
const Module=new Function('baseclass',fs.readFileSync(process.argv[1],'utf8'))({extend:m=>function(){Object.assign(this,m)}});
const result=new Module().call(process.argv[2],process.argv[3],JSON.parse(process.argv[4]));
process.stdout.write(typeof result==='string'?result:JSON.stringify(result));"""
AVAILABLE = (CORE and Path(CORE).is_file() and (HOST / 'bin/jshn').is_file()
             and all(shutil.which(command) for command in ['busybox', 'curl', 'node']))


def free_port(kind=socket.SOCK_STREAM):
    with socket.socket(socket.AF_INET, kind) as sock:
        sock.bind(('127.0.0.1', 0))
        return sock.getsockname()[1]


def dns_name(value):
    return b''.join(bytes([len(label)]) + label.encode('ascii') for label in value.split('.')) + b'\0'


@unittest.skipUnless(AVAILABLE, 'Set MCLASH_TEST_CORE and provide native SDK jshn, busybox, curl and node')
class DomainResolutionCoreTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='domain-core-', dir=ROOT / '.build-cache')
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.request = self.base / 'request.json'
        self.system_calls = self.base / 'system-calls'
        self.dns_queries = []
        self.done = threading.Event()
        self.upstream = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.upstream.bind(('127.0.0.1', 0))
        self.upstream.settimeout(.1)
        self.thread = threading.Thread(target=self.serve_dns, daemon=True)
        self.thread.start()
        self.addCleanup(self.stop_dns)
        self.controller, self.listener = free_port(), free_port(socket.SOCK_DGRAM)
        self.config = f'''mode: rule
log-level: error
external-controller: 127.0.0.1:{self.controller}
secret: test-secret
dns:
  enable: true
  ipv6: true
  listen: 127.0.0.1:{self.listener}
  enhanced-mode: fake-ip
  fake-ip-range: 198.51.100.1/24
  fake-ip-range6: fd00:1234::/64
  fake-ip-filter: []
  nameserver: [udp://127.0.0.1:{self.upstream.getsockname()[1]}]
proxies: []
proxy-groups: []
rules: ["MATCH,DIRECT"]
'''
        config_path = self.base / 'config.yaml'
        config_path.write_text(self.config)
        self.log = (self.base / 'core.log').open('w')
        self.addCleanup(self.log.close)
        self.core = subprocess.Popen([CORE, '-d', str(self.base), '-f', str(config_path)],
                                     stdout=self.log, stderr=self.log)
        self.addCleanup(self.stop_core)
        for _ in range(100):
            if self.core.poll() is not None:
                self.fail('Core exited before readiness: ' + (self.base / 'core.log').read_text())
            try:
                with socket.create_connection(('127.0.0.1', self.controller), timeout=.1):
                    break
            except OSError:
                time.sleep(.03)
        else:
            self.fail('Core controller did not become ready')
        resolver = self.base / 'resolveip'
        resolver.write_text(f'''#!/bin/sh
printf 'system resolver was called\\n' >> '{self.system_calls}'
exit 1
''')
        resolver.chmod(0o755)
        source = (ROOT / 'luci-app-mclash/root/usr/libexec/mclash-resolve').read_text()
        for old, new in [('/etc/mclash/domains.request.json', str(self.request)),
                         ('/usr/bin/resolveip', str(resolver)),
                         ('/usr/bin/curl', shutil.which('curl')),
                         ('/usr/share/libubox/jshn.sh', str(HOST / 'share/libubox/jshn.sh')),
                         ('/tmp/mclash-resolve.', str(self.base / 'work.'))]:
            source = source.replace(old, new)
        self.helper = self.base / 'helper'
        self.helper.write_text(source)

    def stop_core(self):
        if self.core.poll() is None:
            self.core.terminate()
        self.core.wait(timeout=5)

    def stop_dns(self):
        self.done.set()
        self.thread.join(timeout=2)
        self.upstream.close()

    def serve_dns(self):
        while not self.done.is_set():
            try:
                packet, address = self.upstream.recvfrom(4096)
            except socket.timeout:
                continue
            labels, offset = [], 12
            while packet[offset]:
                length = packet[offset]
                labels.append(packet[offset + 1:offset + length + 1].decode('ascii'))
                offset += length + 1
            offset += 1
            host = '.'.join(labels).lower()
            qtype = struct.unpack('!H', packet[offset:offset + 2])[0]
            self.dns_queries.append((host, qtype))
            records = []
            if host == 'node.invalid' and qtype == 1:
                cname = dns_name('edge.invalid')
                records.append(b'\xc0\x0c' + struct.pack('!HHIH', 5, 1, 60, len(cname)) + cname)
            if host in ['node.invalid', 'edge.invalid'] and qtype == 1:
                data = socket.inet_pton(socket.AF_INET, '203.0.113.42')
                records.append(dns_name('edge.invalid') + struct.pack('!HHIH', 1, 1, 60, len(data)) + data)
            elif host == 'v6.invalid' and qtype == 28:
                data = socket.inet_pton(socket.AF_INET6, '2001:db8::42')
                records.append(b'\xc0\x0c' + struct.pack('!HHIH', 28, 1, 60, len(data)) + data)
            response = (packet[:2] + struct.pack('!HHHHH', 0x8180, 1, len(records), 0, 0)
                        + packet[12:offset + 4] + b''.join(records))
            self.upstream.sendto(response, address)

    def run_helper(self, domains, **controller):
        self.request.write_text(json.dumps({'domains': domains,
                                           'controller': {'port': self.controller, 'secret': 'test-secret', **controller}}))
        return subprocess.run(['busybox', 'ash', str(self.helper)], text=True, capture_output=True, timeout=16,
                              env=dict(os.environ, PATH=str(HOST / 'bin') + ':' + os.environ['PATH'],
                                       MCLASH_DNS_ACTIVE='1', MCLASH_DNS_HOST='127.0.0.1'))

    def bridge(self, action, content, arguments=None):
        return subprocess.check_output(['node', '-e', JS, str(BRIDGE), action, content,
                                        json.dumps(arguments or {})], text=True, timeout=15)

    def test_fake_listener_and_real_controller_resolution(self):
        query = (struct.pack('!HHHHHH', 12345, 0x100, 1, 0, 0, 0)
                 + dns_name('node.invalid') + struct.pack('!HH', 1, 1))
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as client:
            client.settimeout(.1)
            for _ in range(30):
                client.sendto(query, ('127.0.0.1', self.listener))
                try:
                    response = client.recv(4096)
                    break
                except socket.timeout:
                    pass
            else:
                self.fail('Core DNS listener did not answer: ' + (self.base / 'core.log').read_text())
        self.assertIn(ipaddress.ip_address(response[-4:]), ipaddress.ip_network('198.51.100.0/24'))
        result = self.run_helper(['node.invalid', 'v6.invalid', 'failed.invalid'])
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue(result.stdout.lstrip().startswith('{'), repr(result.stdout) + result.stderr)
        addresses = json.loads(result.stdout)
        self.assertEqual(addresses, {'node.invalid': '203.0.113.42', 'v6.invalid': '2001:db8::42'})
        self.assertFalse(self.system_calls.exists(), 'Active resolution must not fall back to system DNS')
        self.assertIn(('v6.invalid', 1), self.dns_queries)
        self.assertIn(('v6.invalid', 28), self.dns_queries)
        self.assertNotIn(('node.invalid', 28), self.dns_queries, 'A successful IPv4 lookup should not request IPv6')
        summary = json.loads(self.bridge('summary', self.config))
        ranges = summary['fakeIpRanges']
        nodes = '''proxies:
  - {name: Node, type: trojan, server: node.invalid, port: 443, password: local-test}
  - {name: IPv6, type: trojan, server: v6.invalid, port: 443, password: local-test}
  - {name: Fake4, type: trojan, server: fake4.invalid, port: 443, password: local-test}
  - {name: Fake6, type: trojan, server: fake6.invalid, port: 443, password: local-test}
'''
        converted = self.bridge('resolveNodes', nodes, {'addresses': {**addresses, 'fake4.invalid': '198.51.100.99',
                                                                     'fake6.invalid': 'fd00:1234::99'},
                                                       'fakeIpRanges': ranges})
        self.assertRegex(converted, r'server: 203\.0\.113\.42')
        self.assertIn('2001:db8::42', converted)
        self.assertRegex(converted, r'server: fake4\.invalid')
        self.assertRegex(converted, r'server: fake6\.invalid')
        self.assertNotIn('198.51.100.99', converted)
        self.assertNotIn('fd00:1234::99', converted)
        self.assertEqual(list(self.base.glob('work.*')), [])

    def test_controller_failures_never_use_system_dns(self):
        for controller in [{'secret': 'incorrect-secret'}, {'port': free_port()}]:
            with self.subTest(controller=controller):
                result = self.run_helper(['node.invalid'], **controller)
                if result.returncode == 0:
                    self.assertEqual(json.loads(result.stdout), {})
                self.assertFalse(self.system_calls.exists(), 'Controller failure must retain the domain')
                self.assertEqual(list(self.base.glob('work.*')), [])


if __name__ == '__main__':
    unittest.main()
