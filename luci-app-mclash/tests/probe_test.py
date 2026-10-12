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
        self.env = dict(os.environ, PATH=f'{self.base}:{SDK}/bin:' + os.environ['PATH'], PROBE_BASE=str(self.base))
        (self.base / 'curl').write_text('''#!/usr/bin/env python3
import json, os, pathlib, sys
args=sys.argv[1:]; p=pathlib.Path(os.environ['PROBE_BASE']); (p/'args').write_text(json.dumps(args))
if os.environ.get('PROBE_FAIL'): sys.exit(28)
print('0.125',end='')
''')
        (self.base / 'curl').chmod(0o755)
        source = (ROOT / 'root/usr/libexec/mclash-probe').read_text()
        for old, new in {'/usr/bin/curl':str(self.base/'curl'),'/usr/share/libubox/jshn.sh':str(SDK/'share/libubox/jshn.sh')}.items():
            source=source.replace(old,new)
        self.script=self.base/'probe'; self.script.write_text(source)

    def run_probe(self, kind):
        result=subprocess.run(['busybox','ash',str(self.script),kind],env=self.env,capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stderr)
        return json.loads(result.stdout)

    def test_six_latency_targets(self):
        targets={'telegram':'https://telegram.org/','openai':'https://chatgpt.com/','baidu':'https://www.baidu.com/','google':'https://www.google.com/generate_204','youtube':'https://www.youtube.com/generate_204','github':'https://github.com/'}
        for kind,url in targets.items():
            result=self.run_probe(kind);self.assertTrue(result['ok']);self.assertFalse(result['ip_supported']);self.assertEqual(result['latency'],125);self.assertNotIn('ip',result)
            args=json.loads((self.base/'args').read_text());self.assertEqual(args[-1],url);self.assertIn('--head',args);self.assertIn('--location',args);self.assertNotIn('--proxy',args);self.assertNotIn('--fail',args);self.assertIn('*',args)

    def test_network_failure(self):
        self.env['PROBE_FAIL']='1'
        for kind in ['telegram','openai','baidu','google','youtube','github']:
            result=self.run_probe(kind);self.assertFalse(result['ok']);self.assertIn('latency_error',result);self.assertNotIn('ip',result)

    def test_unknown_target_rejected(self):
        result=subprocess.run(['busybox','ash',str(self.script),'https://example.com'],env=self.env,capture_output=True)
        self.assertNotEqual(result.returncode,0);self.assertFalse((self.base/'args').exists())


if __name__ == '__main__': unittest.main()
