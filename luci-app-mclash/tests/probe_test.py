import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
SDK = Path(os.environ.get('MCLASH_TEST_JSHN', str(Path(os.environ.get('MCLASH_OPENWRT_CACHE', ROOT.parent / '.build-cache')) / 'sdk-arm64/staging_dir/host')))

@unittest.skipUnless((SDK / 'bin/jshn').exists(), 'cached OpenWrt host jshn required')
class ProbeTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix='mclash-probe-test-')
        self.addCleanup(self.tmp.cleanup)
        self.base = Path(self.tmp.name)
        self.env = dict(os.environ, PATH=f'{self.base}:{SDK}/bin:' + os.environ['PATH'],
                        PROBE_ACTIVE='1', PROBE_BASE=str(self.base))
        self.config = self.base / 'config.yaml'
        self.config.write_text('mixed-port: 7890\n')
        (self.base / 'init').write_text('#!/bin/sh\n[ "$PROBE_ACTIVE" = 1 ]\n')
        (self.base / 'curl').write_text('''#!/usr/bin/env python3
import json, os, pathlib, sys
args=sys.argv[1:]; p=pathlib.Path(os.environ['PROBE_BASE'])
(p/'args').write_text(json.dumps(args))
with (p/'history').open('a') as f: f.write(json.dumps(args)+'\\n')
if '--head' in args and '--max-filesize' in args: sys.exit(63)
if os.environ.get('PROBE_FAIL') or (os.environ.get('PROBE_HEAD_FAIL') and '--head' in args) or (os.environ.get('PROBE_IP_FAIL') and '--fail' in args): sys.exit(28)
body='当前 IP：203.0.113.1  来自于：中国 测试地区\\n' if 'myip.ipip.net' in args[-1] else '{"ip":"2001:db8::1","country":"Test","city":"City"}'
output=args[args.index('--output')+1]
if output != '/dev/null': pathlib.Path(output).write_text(body)
print('0.125',end='')
''')
        (self.base / 'jsonfilter').write_text('''#!/usr/bin/env python3
import json, sys
args=sys.argv[1:]; data=json.load(open(args[args.index('-i')+1])); print(data.get(args[args.index('-e')+1][2:],''))
''')
        for name in ['init', 'curl', 'jsonfilter']:
            (self.base / name).chmod(0o755)
        source = (ROOT / 'root/usr/libexec/mclash-probe').read_text()
        for old, new in {'/etc/mclash/config.yaml':str(self.config), '/usr/bin/curl':str(self.base/'curl'),
                         '/etc/init.d/mclash':str(self.base/'init'), '/usr/share/libubox/jshn.sh':str(SDK/'share/libubox/jshn.sh'),
                         '/tmp/mclash-probe.XXXXXX':str(self.base/'probe.XXXXXX')}.items():
            source=source.replace(old,new)
        self.script=self.base/'probe'; self.script.write_text(source)

    def run_probe(self, kind):
        result=subprocess.run(['busybox','ash',str(self.script),kind],env=self.env,capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stderr)
        self.assertFalse(list(self.base.glob('probe.*')), 'temporary response must be cleaned')
        return json.loads(result.stdout)

    def test_exit_and_route(self):
        result=self.run_probe('baidu'); self.assertEqual(result['ip'],'203.0.113.1'); self.assertIn('测试地区',result['region'])
        history=[json.loads(line) for line in (self.base/'history').read_text().splitlines()]
        self.assertEqual(history[0][-1], 'https://www.baidu.com')
        args=json.loads((self.base/'args').read_text()); self.assertNotIn('--proxy',args); self.assertIn('*',args)
        self.assertIn('--max-time',args); self.assertIn('--max-filesize',args); self.assertNotIn('--insecure',args)
        self.assertEqual(result['latency'],125)
        self.assertEqual(self.run_probe('openai')['ip'],'2001:db8::1')

    def test_stopped_uses_direct_exit(self):
        self.env['PROBE_ACTIVE']='0'; self.assertTrue(self.run_probe('openai')['ok'])
        args=json.loads((self.base/'args').read_text()); self.assertNotIn('--proxy',args)
        self.run_probe('baidu'); args=json.loads((self.base/'args').read_text()); self.assertNotIn('--proxy',args)

    def test_connectivity_and_failure(self):
        result=self.run_probe('google'); self.assertEqual(result['latency'],125)
        args=json.loads((self.base/'history').read_text().splitlines()[0]); self.assertIn('--head',args); self.assertNotIn('--fail',args); self.assertNotIn('--max-filesize',args); self.assertEqual(args[args.index('--output')+1],'/dev/null')
        self.assertEqual(result['ip'],'2001:db8::1'); self.assertTrue(result['ok'])
        self.env['PROBE_FAIL']='1'; self.assertFalse(self.run_probe('youtube')['ok'])

    def test_partial_results(self):
        self.env['PROBE_HEAD_FAIL']='1'
        result=self.run_probe('github'); self.assertFalse(result['ok']); self.assertIn('ip',result); self.assertNotIn('latency',result)
        del self.env['PROBE_HEAD_FAIL']; self.env['PROBE_IP_FAIL']='1'
        result=self.run_probe('youtube'); self.assertFalse(result['ok']); self.assertEqual(result['latency'],125); self.assertNotIn('ip',result)

    def test_all_cards_and_route(self):
        for active in ['0','1']:
            self.env['PROBE_ACTIVE']=active
            for kind in ['telegram','openai','baidu','google','github','youtube']:
                result=self.run_probe(kind)
                self.assertTrue(result['ok']); self.assertEqual(result['latency'],125)
                self.assertEqual(result['ip'],'203.0.113.1' if kind in ['baidu'] else '2001:db8::1')
                args=json.loads((self.base/'args').read_text()); self.assertNotIn('--proxy',args)

    def test_unknown_target_rejected(self):
        result=subprocess.run(['busybox','ash',str(self.script),'https://example.com'],env=self.env,capture_output=True)
        self.assertNotEqual(result.returncode,0); self.assertFalse((self.base/'args').exists())

if __name__ == '__main__': unittest.main()
