#!/usr/bin/env python3
"""Exercise init validation without a usable system timeout command."""
from pathlib import Path
import os
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class InitTest(unittest.TestCase):
    def test_defaults_enable_boot_and_retry_failures(self):
        with tempfile.TemporaryDirectory() as tmp:
            base = Path(tmp)
            for directory in ['etc/mclash', 'etc/init.d', 'usr/libexec', 'var/log', 'tmp']:
                (base / directory).mkdir(parents=True)
            config = base / 'etc/mclash/config.yaml'
            config.write_text('external-controller: 127.0.0.1:9090\n')
            helper = base / 'usr/libexec/mclash-config-language'
            helper.write_text('#!/bin/sh\ncat "$1"\n')
            helper.chmod(0o755)
            service = base / 'etc/init.d/mclash'
            actions = base / 'actions'
            service.write_text(f'#!/bin/sh\nprintf "%s\\n" "$*" >> "{actions}"\nexit "${{ENABLE_RESULT:-0}}"\n')
            service.chmod(0o755)
            source = (ROOT / 'root/etc/uci-defaults/99-luci-app-mclash').read_text()
            for prefix in ['/tmp/', '/etc/', '/usr/libexec/', '/var/log/']:
                source = source.replace(prefix, str(base) + prefix)
            script = base / 'defaults'
            script.write_text(source)
            cache = base / 'tmp/luci-indexcache'
            cache.touch()
            result = subprocess.run(['busybox', 'ash', str(script)],
                                    env=dict(os.environ, ENABLE_RESULT='1'), capture_output=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertTrue(cache.exists())
            # Successful first boot and repeated installation both enable only;
            # package setup must not start a proxy before the user configures it.
            for _ in range(2):
                result = subprocess.run(['busybox', 'ash', str(script)],
                                        env=dict(os.environ, ENABLE_RESULT='0'), capture_output=True)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertFalse(cache.exists())
            self.assertEqual(actions.read_text().splitlines(), ['enable'] * 3)
            self.assertIn('external-controller: 0.0.0.0:9090', config.read_text())

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.base = Path(self.tmp.name)
        self.config = self.base / 'config.yaml'
        self.config.write_text('valid\n')
        core = self.base / 'mihomo'
        core.write_text('#!/bin/sh\nwhile [ "$1" != -f ]; do shift; done\nshift\ngrep -q valid "$1"\n')
        core.chmod(0o755)
        log = self.base / 'log'
        log.write_text('#!/bin/sh\nexit 0\n')
        log.chmod(0o755)
        fakebin = self.base / 'bin'
        fakebin.mkdir()
        for name in ['timeout', 'logger']:
            path = fakebin / name
            path.write_text('#!/bin/sh\nexit 127\n' if name == 'timeout' else '#!/bin/sh\nexit 0\n')
            path.chmod(0o755)
        self.env = dict(os.environ, PATH=str(fakebin) + ':' + os.environ['PATH'])
        source = (ROOT / 'root/etc/init.d/mclash').read_text()
        for old, new in {
            '/usr/bin/mihomo': str(core),
            '/usr/libexec/mclash-timeout': str(ROOT / 'root/usr/libexec/mclash-timeout'),
            '/usr/libexec/mclash-log': str(log),
            '/usr/libexec/mclash-config-language': 'cat',
            '/etc/mclash': str(self.base),
        }.items():
            source = source.replace(old, new)
        self.script = self.base / 'init'
        self.script.write_text(source)

    def run_action(self, action):
        return subprocess.run(['busybox', 'ash', '-c', '''
. "$1"
procd_open_instance() { echo instance; }
procd_set_param() { :; }
procd_close_instance() { :; }
stop() { echo stop; }
start() { echo start; }
"$2"
''', 'test', str(self.script), action], env=self.env, capture_output=True, text=True, timeout=5)

    def test_start_works_without_system_timeout(self):
        result = self.run_action('start_service')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('instance', result.stdout)

    def test_invalid_config_never_starts(self):
        self.config.write_text('broken\n')
        result = self.run_action('start_service')
        self.assertNotEqual(result.returncode, 0)
        self.assertNotIn('instance', result.stdout)

    def test_reload_validates_before_restart(self):
        result = self.run_action('reload_service')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout.splitlines(), ['stop', 'start'])
        self.config.write_text('broken\n')
        result = self.run_action('reload_service')
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(result.stdout, '')


if __name__ == '__main__':
    unittest.main()
