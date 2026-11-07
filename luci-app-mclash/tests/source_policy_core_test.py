#!/usr/bin/env python3
"""Validate source policies with a real core, using loopback HTTP only.

Set MCLASH_TEST_CORE to run. No host firewall, routes or router are changed.
"""
import contextlib
import http.client
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import socket
import subprocess
import tempfile
import threading
import time

ROOT = Path(__file__).resolve().parents[2]
CORE = os.environ.get('MCLASH_TEST_CORE')
if not CORE:
    raise SystemExit('Source-policy core test skipped: set MCLASH_TEST_CORE')

BRIDGE = ROOT / 'luci-app-mclash/htdocs/luci-static/resources/mclash/overrides.js'
JS = """global.self=global;const fs=require('node:fs');
const Module=new Function('baseclass',fs.readFileSync(process.argv[1],'utf8'))({extend:m=>function(){Object.assign(this,m)}});
process.stdout.write(new Module().call('network',process.argv[2],JSON.parse(process.argv[3])));"""


def free_port():
    with socket.socket() as sock:
        sock.bind(('127.0.0.1', 0))
        return sock.getsockname()[1]


class Handler(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'

    def do_CONNECT(self):
        self.send_response(200)
        self.end_headers()
        self.close_connection = False
        self.handle_one_request()
        self.close_connection = True

    def do_GET(self):
        body = self.server.marker.encode()
        self.send_response(200)
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *_args):
        pass


with contextlib.ExitStack() as stack:
    servers = []
    for marker in ['Origin', 'Node A', 'Node B']:
        server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
        server.marker = marker
        stack.callback(server.server_close)
        stack.callback(server.shutdown)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        servers.append(server)
    origin, a, b = [s.server_port for s in servers]
    mixed, controller = free_port(), free_port()
    base = f'''log-level: debug
mode: rule
mixed-port: {mixed}
external-controller: 127.0.0.1:{controller}
proxies:
  - {{name: A, type: http, server: 127.0.0.1, port: {a}}}
  - {{name: B, type: http, server: 127.0.0.1, port: {b}}}
proxy-groups: []
rules: ["MATCH,DIRECT"]
'''
    options = dict(mode='tproxy', interfaces=['br-lan'], lan=False, router=False,
                   ipv6=True, access=['127.0.0.2-127.0.0.3', '127.0.0.5', 'fd00::10'],
                   accessPolicies={'127.0.0.2-127.0.0.3': 'A', '127.0.0.5': 'B', 'fd00::10': 'B'})
    cache = ROOT / '.build-cache'
    cache.mkdir(exist_ok=True)
    work = Path(stack.enter_context(tempfile.TemporaryDirectory(prefix='source-policy-', dir=cache)))
    generated = {}
    for mode in ['tun', 'tproxy']:
        config = subprocess.check_output(['node', '-e', JS, str(BRIDGE), base,
                                          json.dumps({**options, 'mode': mode})], text=True)
        path = work / f'{mode}.yaml'
        path.write_text(config)
        checked = subprocess.run([CORE, '-t', '-d', str(work), '-f', str(path)],
                                 text=True, capture_output=True, timeout=30)
        assert checked.returncode == 0 and 'test is successful' in checked.stdout, checked.stdout + checked.stderr
        generated[mode] = config
    for default in [False, True]:
        config = generated['tproxy']
        if default:
            config = subprocess.check_output(['node', '-e', JS, str(BRIDGE), config,
                                              json.dumps({**options, 'accessPolicies': {}})], text=True)
        # Exercise core rule dispatch without installing capture or routing marks.
        # The unmodified generated configurations were validated above.
        config = config.replace('routing-mark: 359', 'routing-mark: 0').replace('tproxy-port: 7893', 'tproxy-port: 0')
        config = config.replace('bind-address: "*"', 'bind-address: 127.0.0.1')
        config = config.replace('listen: "[::]:1053"', f'listen: 127.0.0.1:{free_port()}')
        path = work / 'runtime.yaml'
        path.write_text(config)
        with (work / 'core.log').open('w') as log:
            process = subprocess.Popen([CORE, '-d', str(work), '-f', str(path)], stdout=log, stderr=log)
            try:
                for _ in range(100):
                    if process.poll() is not None:
                        raise AssertionError('Core exited before becoming ready')
                    try:
                        with socket.create_connection(('127.0.0.1', mixed), timeout=.1):
                            break
                    except OSError:
                        time.sleep(.05)
                else:
                    raise AssertionError('Core did not become ready')
                for source, expected in [('127.0.0.2', 'Node A'), ('127.0.0.3', 'Node A'),
                                         ('127.0.0.4', 'Origin'), ('127.0.0.5', 'Node B')]:
                    connection = http.client.HTTPConnection('127.0.0.1', mixed, timeout=5,
                                                            source_address=(source, 0))
                    try:
                        connection.request('GET', f'http://127.0.0.1:{origin}/')
                        actual = connection.getresponse().read().decode()
                        wanted = 'Origin' if default else expected
                        assert actual == wanted, (source, default, wanted, actual, (work / 'core.log').read_text())
                    finally:
                        connection.close()
            finally:
                process.terminate()
                process.wait(timeout=10)
print('Real core accepted TUN/TProxy policies; exact-range sources used A/B and Default restored original routing')
