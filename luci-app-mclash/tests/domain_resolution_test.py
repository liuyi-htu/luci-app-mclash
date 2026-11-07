#!/usr/bin/env python3
"""Exercise system DNS and authenticated core DNS with the SDK's native jshn."""
from pathlib import Path
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
import shutil
import subprocess
import tempfile
import threading
import unittest
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parents[2]
HOST = Path(os.environ.get('MCLASH_TEST_JSHN', ROOT / '.build-cache/sdk-x86_64/staging_dir/host'))


@unittest.skipUnless((HOST / 'bin/jshn').exists(), 'Set MCLASH_TEST_JSHN to a native jshn prefix')
class DomainResolutionTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='dns-test-', dir=ROOT / '.build-cache')
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.request = self.base / 'request.json'
        self.calls = self.base / 'calls'
        resolver = self.base / 'resolveip'
        resolver.write_text(f'''#!/bin/sh
printf '%s %s\\n' "$1" "$4" >> '{self.calls}'
case "$4:$1" in
 shared.example:-4) echo 203.0.113.2 ;;
 ipv6.example:-6) echo 2001:db8::1 ;;
 *) exit 1 ;;
esac
''')
        resolver.chmod(0o755)
        source = (ROOT / 'luci-app-mclash/root/usr/libexec/mclash-resolve').read_text()
        source = source.replace('/etc/mclash/domains.request.json', str(self.request))
        source = source.replace('/usr/bin/resolveip', str(resolver))
        source = source.replace('/usr/share/libubox/jshn.sh', str(HOST / 'share/libubox/jshn.sh'))
        source = source.replace('/tmp/mclash-resolve.', str(self.base / 'work.'))
        self.helper = self.base / 'helper'
        self.helper.write_text(source)

    def run_helper(self, domains, *, active=False, controller=None):
        request = {'domains': domains}
        if controller is not None:
            request['controller'] = controller
        self.request.write_text(json.dumps(request))
        env = dict(os.environ, PATH=str(HOST / 'bin') + ':' + os.environ['PATH'])
        env.pop('MCLASH_DNS_ACTIVE', None)
        env.pop('MCLASH_DNS_HOST', None)
        if active:
            env.update(MCLASH_DNS_ACTIVE='1', MCLASH_DNS_HOST='127.0.0.1')
        return subprocess.run(['busybox', 'ash', str(self.helper)], text=True, capture_output=True,
                              timeout=15, env=env)

    def core_dns_server(self, responses):
        requests = []

        class Handler(BaseHTTPRequestHandler):
            def do_GET(handler):
                url = urlsplit(handler.path)
                query = parse_qs(url.query)
                name = query.get('name', [''])[0]
                family = query.get('type', [''])[0]
                auth = handler.headers.get('Authorization')
                requests.append((url.path, name, family, auth))
                if auth != 'Bearer test-secret':
                    status, body = 401, b'unauthorized'
                elif url.path != '/dns/query':
                    status, body = 404, b'not found'
                else:
                    response = responses.get((name, family), {'Status': 0, 'Answer': []})
                    if isinstance(response, tuple):
                        status, body = response
                    else:
                        status, body = 200, json.dumps(response).encode()
                handler.send_response(status)
                handler.send_header('Content-Type', 'application/json')
                handler.send_header('Content-Length', str(len(body)))
                handler.end_headers()
                handler.wfile.write(body)

            def log_message(handler, *args):
                pass

        server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()

        def cleanup():
            server.shutdown()
            server.server_close()
            thread.join(timeout=2)

        self.addCleanup(cleanup)
        return {'port': server.server_port, 'secret': 'test-secret'}, requests

    def assert_private_result(self, result, expected):
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(result.stdout), expected)
        self.assertNotIn('test-secret', result.stdout + result.stderr)
        self.assertFalse(self.calls.exists(), 'Active DNS must never call system resolveip')
        self.assertEqual(list(self.base.glob('work.*')), [])

    def test_ipv4_preferred_ipv6_fallback_and_failure(self):
        result = self.run_helper(['shared.example', 'ipv6.example', 'failed.example'])
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(result.stdout), {'shared.example': '203.0.113.2', 'ipv6.example': '2001:db8::1'})
        self.assertNotIn('-6 shared.example', self.calls.read_text())
        self.assertEqual(list(self.base.glob('work.*')), [])

    def test_rejects_shell_options_invalid_names_and_large_batches(self):
        for domains in [['--help'], ['node.example;id'], ['a.example'] * 257, [123]]:
            result = self.run_helper(domains)
            self.assertNotEqual(result.returncode, 0)
        self.assertFalse(self.calls.exists())
        self.assertEqual(list(self.base.glob('work.*')), [])

    @unittest.skipUnless(shutil.which('curl'), 'Requires native curl for core DNS integration')
    def test_running_uses_authenticated_core_dns_and_filters_answers(self):
        controller, requests = self.core_dns_server({
            ('shared.example', 'A'): {'Status': 0, 'Answer': [
                {'type': 5, 'data': 'alias.example'},
                {'type': 28, 'data': '2001:db8::99'},
                {'type': 1, 'data': 'not-an-address'},
                {'type': 1, 'data': '203.0.113.51'},
            ]},
            ('ipv6.example', 'A'): {'Status': 0, 'Answer': [
                {'type': 5, 'data': 'alias.example'},
                {'type': 28, 'data': '2001:db8::99'},
            ]},
            ('ipv6.example', 'AAAA'): {'Status': 0, 'Answer': [
                {'type': 1, 'data': '203.0.113.99'},
                {'type': 28, 'data': 'not-an-address'},
                {'type': 28, 'data': '2001:db8::51'},
            ]},
        })
        result = self.run_helper(['shared.example', 'ipv6.example'], active=True, controller=controller)
        self.assert_private_result(result, {'shared.example': '203.0.113.51', 'ipv6.example': '2001:db8::51'})
        self.assertEqual({(name, family) for _, name, family, _ in requests}, {
            ('shared.example', 'A'), ('ipv6.example', 'A'), ('ipv6.example', 'AAAA'),
        })
        self.assertTrue(all(path == '/dns/query' and auth == 'Bearer test-secret'
                            for path, _, _, auth in requests))
        ipv6_queries = [family for _, name, family, _ in requests if name == 'ipv6.example']
        self.assertEqual(ipv6_queries, ['A', 'AAAA'])

    @unittest.skipUnless(shutil.which('curl'), 'Requires native curl for core DNS integration')
    def test_running_failures_keep_domains_without_system_dns_fallback(self):
        controller, requests = self.core_dns_server({
            ('http-error.example', 'A'): (503, b'unavailable'),
            ('http-error.example', 'AAAA'): (503, b'unavailable'),
            ('invalid-json.example', 'A'): (200, b'{invalid json'),
            ('invalid-json.example', 'AAAA'): (200, b'null'),
            ('dns-error.example', 'A'): {'Status': 2, 'Answer': [{'type': 1, 'data': '203.0.113.61'}]},
            ('dns-error.example', 'AAAA'): {'Status': 2, 'Answer': [{'type': 28, 'data': '2001:db8::61'}]},
            ('missing-answer.example', 'A'): {'Status': 0},
            ('missing-answer.example', 'AAAA'): {'Status': 0, 'Answer': None},
        })
        result = self.run_helper(['http-error.example', 'invalid-json.example', 'dns-error.example',
                                  'missing-answer.example', 'empty.example'], active=True, controller=controller)
        self.assert_private_result(result, {})
        self.assertTrue(requests)

    def test_running_without_valid_controller_keeps_domains(self):
        for controller in [None, {}, {'secret': 'test-secret'}, {'port': 0, 'secret': 'test-secret'},
                           {'port': 65536, 'secret': 'test-secret'}]:
            with self.subTest(controller=controller):
                result = self.run_helper(['shared.example'], active=True, controller=controller)
                self.assert_private_result(result, {})

    @unittest.skipUnless(shutil.which('curl'), 'Requires native curl for core DNS integration')
    def test_running_controller_connection_failure_keeps_domains(self):
        server = ThreadingHTTPServer(('127.0.0.1', 0), BaseHTTPRequestHandler)
        port = server.server_port
        server.server_close()
        result = self.run_helper(['shared.example'], active=True,
                                 controller={'port': port, 'secret': 'test-secret'})
        self.assert_private_result(result, {})

    def test_running_rejects_invalid_domains_before_dns(self):
        for domains in [['--help'], ['node.example;id'], ['a.example'] * 257, [123]]:
            with self.subTest(domains=domains[:1]):
                result = self.run_helper(domains, active=True,
                                         controller={'port': 9097, 'secret': 'test-secret'})
                self.assertNotEqual(result.returncode, 0)
                self.assertNotIn('test-secret', result.stdout + result.stderr)
        self.assertFalse(self.calls.exists())
        self.assertEqual(list(self.base.glob('work.*')), [])


if __name__ == '__main__':
    unittest.main()
