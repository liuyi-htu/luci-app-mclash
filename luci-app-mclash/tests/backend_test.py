#!/usr/bin/env python3
"""Exercise destructive failure paths with isolated fake core/service commands."""
from pathlib import Path
import os
import subprocess
import tempfile
import unittest
import time

ROOT = Path(__file__).resolve().parents[1]


class BackendTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.config = self.base / 'config.yaml'
        self.upload = self.base / 'config.upload.yaml'
        self.lock = self.base / 'operation.lock'
        self.calls = self.base / 'calls'
        self.config.write_text('valid old config\n')
        core = self.base / 'mihomo'
        core.write_text('''#!/bin/sh
if [ "$1" = -v ]; then echo "Mihomo test"; exit 0; fi
while [ "$#" -gt 0 ]; do
  if [ "$1" = -f ]; then shift; grep -q '^valid' "$1"; exit $?; fi
  shift
done
exit 1
''')
        core.chmod(0o755)
        init = self.base / 'init'
        init.write_text('#!/bin/sh\nprintf "%s\\n" "$1" >> "' + str(self.calls) + '"\n')
        init.chmod(0o755)
        lock_source = (ROOT / 'root/usr/libexec/mclash-lock').read_text().replace('mkdir -p /var/lock', ':')
        (self.base / 'lock-helper').write_text(lock_source)
        source = (ROOT/'root/usr/libexec/mclash-ui').read_text()
        for original, replacement in {
            '/usr/libexec/mclash-lock': str(self.base/'lock-helper'), '/usr/bin/mihomo': str(core),
            '/usr/libexec/mclash-timeout': str(ROOT / 'root/usr/libexec/mclash-timeout'),
            '/etc/init.d/mclash': str(init),
            '/etc/mclash/config.upload.yaml': str(self.upload),
            '/etc/mclash/config.yaml': str(self.config),
            '/etc/mclash/subscription.url': str(self.base/'url'), '/tmp/mclash-subscription.XXXXXX': str(self.base/'fetch.XXXXXX'), '/tmp/mclash-subscription-headers.XXXXXX': str(self.base/'headers.XXXXXX'), '/etc/mclash/api.request.json': str(self.base/'request'), '/usr/bin/curl': str(self.base/'curl'), '/var/lock/mclash-ui.lock': str(self.lock), '/var/log': str(self.base / 'logs'),
            '/usr/libexec/mclash-log': str(self.base / 'log-helper'),
            '/etc/mclash/.config.XXXXXX': str(self.base/'.config.XXXXXX'),
            'mkdir -p /var/lock': ':',
        }.items():
            source = source.replace(original, replacement)
        log_source = (ROOT / 'root/usr/libexec/mclash-log').read_text().replace('/var/log', str(self.base / 'logs')).replace('/var/lock/mclash-log', str(self.base / 'log-lock'))
        (self.base / 'log-helper').write_text(log_source)
        (self.base / 'log-helper').chmod(0o755)
        self.script = self.base / 'ui'
        self.script.write_text(source.replace('"$TIMEOUT" 25','"$TIMEOUT" 2'))
        (self.base/'curl').write_text('#!/bin/sh\n[ ! -f ' + str(self.base/'fail-fetch') + ' ] || exit 28\nwhile [ "$1" != --output ]; do shift; done\nshift; printf "proxies: []\\n" > "$1"\n')
        (self.base/'curl').chmod(0o755)

    def run_command(self, action):
        return subprocess.run(['busybox', 'ash', str(self.script), action],
                              capture_output=True, text=True)

    def test_subscription_usage_uses_final_headers_and_cleans_up(self):
        (self.base/'url').write_text('https://example.org/subscription')
        (self.base/'curl').write_text("""#!/bin/sh
while [ "$#" -gt 0 ]; do
 case "$1" in --dump-header) shift; headers="$1" ;; --output) shift; output="$1" ;; esac
 shift
done
printf 'HTTP/1.1 302 Found\\r\\nsubscription-userinfo: total=999\\r\\n\\r\\nHTTP/1.1 200 OK\\r\\nSubscription-Userinfo: upload=10; download=20; total=100; expire=1893456000\\r\\n\\r\\n' > "$headers"
printf 'proxies: []\\n' > "$output"
""")
        result = self.run_command('fetch-subscription')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout, '# Mclash 订阅用量: upload=10; download=20; total=100; expire=1893456000\nproxies: []\n')
        self.assertFalse(list(self.base.glob('headers.*')))
        self.assertFalse(list(self.base.glob('fetch.*')))

    def test_invalid_save_keeps_existing_config(self):
        self.upload.write_text('invalid profile with secret\n')
        result = self.run_command('save')
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.config.read_text(), 'valid old config\n')
        self.assertNotIn('secret', result.stderr)
        self.assertFalse(self.upload.exists())
        self.assertFalse(self.lock.exists())
        self.assertEqual(list(self.base.glob('.config.*')), [])

    def test_valid_save_is_private_and_does_not_restart(self):
        self.upload.write_text('valid new config\n')
        self.assertEqual(self.run_command('save').returncode, 0)
        self.assertEqual(self.config.read_text(), 'valid new config\n')
        self.assertEqual(self.config.stat().st_mode & 0o777, 0o600)
        self.assertFalse(self.calls.exists())

    def test_restart_with_invalid_config_does_not_stop_service(self):
        self.config.write_text('bad\n')
        self.assertNotEqual(self.run_command('restart').returncode, 0)
        self.assertFalse(self.calls.exists())

    def test_missing_core_preserves_config(self):
        (self.base/'mihomo').unlink()
        self.upload.write_text('valid profile\n')
        self.assertNotEqual(self.run_command('save').returncode, 0)
        self.assertEqual(self.config.read_text(), 'valid old config\n')

    def test_large_profile_and_symlink_rejected(self):
        self.upload.write_text('valid' + 'x' * 1048576)
        self.assertNotEqual(self.run_command('save').returncode, 0)
        self.upload.symlink_to(self.config)
        self.assertNotEqual(self.run_command('save').returncode, 0)
        self.assertEqual(self.config.read_text(), 'valid old config\n')

    def test_logs_only_include_this_service(self):
        directory = self.base / 'logs'; directory.mkdir()
        (directory / 'mihomo.log').write_text('core started\n')
        (directory / 'other-plugin.log').write_text('private other plugin\n')
        self.assertEqual(self.run_command('logs').stdout, 'core started\n')
        self.assertEqual(self.run_command('clear-logs').returncode, 0)
        self.assertEqual(self.run_command('logs').stdout, '')
        self.assertEqual((directory / 'other-plugin.log').read_text(), 'private other plugin\n')
        for kind in ['service', 'update']:
            path = directory / ('mclash.log' if kind == 'service' else 'mclash-update.log')
            path.write_text(f'{kind} event\n')
            self.assertEqual(self.run_command(f'{kind}-logs').stdout, f'{kind} event\n')
            self.assertEqual(self.run_command(f'clear-{kind}-logs').returncode, 0)
            self.assertEqual(path.read_text(), '')
            self.assertEqual((directory / 'other-plugin.log').read_text(), 'private other plugin\n')

    def test_busybox_core_symlink_is_rejected(self):
        core = self.base / 'mihomo'
        core.unlink()
        core.symlink_to('/bin/busybox')
        result = self.run_command('validate')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('核心缺失或无法运行', result.stderr)

    def test_save_rejected_while_service_is_starting(self):
        fakebin = self.base / 'bin'
        fakebin.mkdir()
        for name, body in {
            'ubus': 'printf \'%s\\n\' \'{"mclash":{"instances":{"main":{"running":true}}}}\'\n',
            'jsonfilter': 'cat >/dev/null; printf \'true\\n\'\n',
        }.items():
            executable = fakebin / name
            executable.write_text('#!/bin/sh\n' + body)
            executable.chmod(0o755)
        self.upload.write_text('valid replacement\n')
        result = subprocess.run(['busybox', 'ash', str(self.script), 'save'], capture_output=True, text=True,
                                env=dict(os.environ, PATH=str(fakebin) + ':' + os.environ['PATH']))
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('服务正在启动或退出', result.stderr)
        self.assertEqual(self.config.read_text(), 'valid old config\n')
        self.assertFalse(self.upload.exists())

    def test_subscription_failure_releases_lock_and_allows_retry(self):
        (self.base/'url').write_text('https://example.org/test')
        (self.base/'fail-fetch').touch()
        self.assertNotEqual(self.run_command('fetch-subscription').returncode,0)
        self.assertFalse(self.lock.exists()); self.assertFalse(list(self.base.glob('fetch.*')))
        (self.base/'fail-fetch').unlink(); (self.base/'url').write_text('https://example.org/retry')
        self.assertEqual(self.run_command('fetch-subscription').returncode,0)
        self.assertFalse(self.lock.exists())

    def test_subscription_and_validation_without_system_timeout(self):
        fakebin = self.base / 'minimal-bin'
        fakebin.mkdir()
        for name in ['sleep', 'mkdir', 'rmdir', 'date', 'stat', 'cat', 'wc', 'tr', 'mktemp', 'rm', 'mv', 'awk', 'grep', 'head']:
            (fakebin / name).symlink_to('/usr/bin/busybox')
        env = dict(os.environ, PATH=str(fakebin))
        missing = subprocess.run(['/bin/sh', '-c', 'command -v timeout'], env=env,
                                 capture_output=True, text=True)
        self.assertNotEqual(missing.returncode, 0)
        (self.base / 'url').write_text('https://example.org/test')
        for action in ['fetch-subscription', 'validate']:
            result = subprocess.run(['/bin/sh', str(self.script), action], env=env,
                                    capture_output=True, text=True, timeout=5)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertNotIn('not found', result.stderr)
        self.assertEqual(result.stdout, '配置校验通过\n')

    def test_abandoned_lock_recovers(self):
        self.lock.mkdir(); (self.lock/'owner').write_text('99999999 0 fetch-subscription\n')
        (self.base/'url').write_text('https://example.org/test')
        self.assertEqual(self.run_command('fetch-subscription').returncode,0)
        self.assertFalse(self.lock.exists())

    def test_ownerless_lock_recovers_without_stat(self):
        self.lock.mkdir()
        fakebin = self.base / 'no-stat'
        fakebin.mkdir()
        stat = fakebin / 'stat'
        stat.write_text('#!/bin/sh\nexit 127\n')
        stat.chmod(0o755)
        env = dict(os.environ, PATH=str(fakebin) + ':' + os.environ['PATH'])
        def disable():
            return subprocess.run(['busybox', 'ash', str(self.script), 'disable'], env=env,
                                  capture_output=True, text=True, timeout=5)
        self.assertNotEqual(disable().returncode, 0)
        self.assertFalse(self.calls.exists())
        (self.lock / 'orphan-since').write_text(str(int(time.time()) - 11) + '\n')
        result = disable()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.calls.read_text(), 'disable\n')
        self.assertFalse(self.lock.exists())

    def test_cancel_download_terminates_and_releases_lock(self):
        (self.base/'url').write_text('https://example.org/test')
        (self.base/'curl').write_text('#!/bin/sh\nprintf "%s" "$$" > ' + str(self.base/'curl.pid') + '\nexec sleep 20\n')
        process=subprocess.Popen(['busybox','ash',str(self.script),'fetch-subscription'],stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
        self.addCleanup(lambda: process.kill() if process.poll() is None else None)
        for _ in range(100):
            if (self.base/'curl.pid').exists(): break
            time.sleep(.01)
        self.assertTrue((self.base/'curl.pid').exists())
        self.assertEqual(self.run_command('cancel-fetch').returncode,0)
        process.communicate(timeout=5)
        self.assertFalse(self.lock.exists()); self.assertFalse(list(self.base.glob('fetch.*')))
        self.assertFalse(Path('/proc/'+(self.base/'curl.pid').read_text()).exists())

    def test_cancel_without_download_does_not_emit_shell_errors(self):
        result = self.run_command('cancel-fetch')
        self.assertEqual(result.returncode, 0)
        self.assertEqual(result.stdout, '没有正在拉取的订阅\n')
        self.assertEqual(result.stderr, '')

    def test_subscription_hard_timeout_releases_lock(self):
        (self.base/'url').write_text('https://example.org/test')
        (self.base/'curl').write_text('#!/bin/sh\nexec sleep 20\n')
        result=self.run_command('fetch-subscription')
        self.assertNotEqual(result.returncode,0); self.assertFalse(self.lock.exists())
        self.assertFalse(list(self.base.glob('fetch.*')))

    def test_lock_and_unknown_commands(self):
        self.lock.mkdir()
        self.assertNotEqual(self.run_command('stop').returncode, 0)
        self.assertTrue(self.lock.exists())
        self.assertFalse(self.calls.exists())
        self.assertNotEqual(self.run_command('stop; touch /tmp/unwanted').returncode, 0)


if __name__ == '__main__':
    unittest.main()
