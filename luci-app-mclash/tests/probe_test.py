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
import json, os, pathlib, sys, urllib.parse
args=sys.argv[1:]; p=pathlib.Path(os.environ['PROBE_BASE'])
(p/'args').write_text(json.dumps(args))
with (p/'history').open('a') as f: f.write(json.dumps(args)+'\\n')
if '--head' in args and '--max-filesize' in args: sys.exit(63)
if os.environ.get('PROBE_FAIL') or (os.environ.get('PROBE_HEAD_FAIL') and '--head' in args) or (os.environ.get('PROBE_IP_FAIL') and '--fail' in args): sys.exit(28)
body='h='+('other.example' if os.environ.get('PROBE_BAD_HOST') else urllib.parse.urlparse(args[-1]).hostname)+'\\nip=2001:db8::1\\nloc=JP\\n'
if 'dns-detect.alicdn.com' in args[-1]: body='mclashProbe('+json.dumps({'retCode':200,'content':{'localIp':'203.0.113.1','ipCountry':'cn','ipProvince':'henan','ipOperator':'cmcc'}})+')'
if 'r.inews.qq.com' in args[-1]: body='mclashProbe('+json.dumps({'ret':0,'ip':'203.0.113.2','country':'中国','province':'河南','city':'新乡'})+')'
output=args[args.index('--output')+1]
if output != '/dev/null': pathlib.Path(output).write_text(body)
print('0.125',end='')
''')
        (self.base / 'jsonfilter').write_text('''#!/usr/bin/env python3
import json, sys
args=sys.argv[1:]; data=json.load(open(args[args.index('-i')+1])) if '-i' in args else json.load(sys.stdin)
for key in args[args.index('-e')+1][2:].split('.'): data=data.get(key,'') if isinstance(data,dict) else ''
print(data)
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

    def test_trace_targets(self):
        for kind,host in [('claude','claude.ai'),('openai','chatgpt.com'),('cloudflare','www.cloudflare.com'),('discord','discord.com')]:
            result=self.run_probe(kind);self.assertTrue(result['ok']);self.assertEqual(result['ip'],'2001:db8::1');self.assertEqual(result['country'],'JP');self.assertNotIn('region',result)
            args=json.loads((self.base/'args').read_text());self.assertEqual(args[-1],'https://'+host+'/cdn-cgi/trace');self.assertNotIn('--head',args);self.assertNotIn('--proxy',args);self.assertIn('--max-redirs',args)

    def test_bad_target_response(self):
        self.env['PROBE_BAD_HOST']='1';result=self.run_probe('openai');self.assertFalse(result['ok']);self.assertNotIn('ip',result);self.assertEqual(result['latency'],125)

    def test_network_failure(self):
        self.env['PROBE_FAIL']='1'
        for kind in ['claude','openai','cloudflare','aliyun','tencent','discord']:
            result=self.run_probe(kind);self.assertFalse(result['ok']);self.assertNotIn('ip',result);self.assertIn('ip_error',result)

    def test_all_cards_and_route(self):
        for active in ['0','1']:
            self.env['PROBE_ACTIVE']=active
            for kind in ['claude','openai','cloudflare','aliyun','tencent','discord']:
                result=self.run_probe(kind);self.assertTrue(result['ok']);self.assertEqual(result['latency'],125);self.assertTrue(result['ip_supported'])
                args=json.loads((self.base/'args').read_text());self.assertNotIn('--proxy',args);self.assertIn('*',args);self.assertIn('--max-filesize',args);self.assertNotIn('--insecure',args)

    def test_jsonp_targets(self):
        for kind,endpoint,ip in [('aliyun','.dns-detect.alicdn.com/api/detect/DescribeDNSLookup?cb=mclashProbe','203.0.113.1'),('tencent','r.inews.qq.com/api/ip2city?otype=jsonp&callback=mclashProbe','203.0.113.2')]:
            result=self.run_probe(kind);self.assertEqual(result['ip'],ip);self.assertEqual(result['country'],'cn' if kind == 'aliyun' else '中国');self.assertNotIn(result['country'],result['region']);args=json.loads((self.base/'args').read_text());self.assertIn(endpoint,args[-1]);self.assertNotIn('--head',args)

    def test_unknown_target_rejected(self):
        result=subprocess.run(['busybox','ash',str(self.script),'https://example.com'],env=self.env,capture_output=True)
        self.assertNotEqual(result.returncode,0); self.assertFalse((self.base/'args').exists())

if __name__ == '__main__': unittest.main()
