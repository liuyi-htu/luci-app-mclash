#!/usr/bin/env python3
"""Exercise core validation, replacement and rollback without router changes."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class CoreUpdateTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.core = self.base / 'mihomo'
        self.core.write_text('#!/bin/sh\necho "Mihomo Meta v0.0.0"\n')
        self.core.chmod(0o755)
        self.original = self.core.read_bytes()
        self.config = self.base / 'config.yaml'
        self.config.write_text('rules:\n  - MATCH,DIRECT\n')
        self.upload = self.base / 'upload'
        self.running = False
        self.calls = self.base / 'calls'
        self.init = self.base / 'init'
        self.init.write_text('#!/bin/sh\necho "$1" >> "' + str(self.calls) + '"\n[ "$1" != start ]\n')
        self.init.chmod(0o755)
        self.ui = self.base / 'ui'
        self.ui.write_text('#!/bin/sh\necho \'{"running":false}\'\n')
        self.ui.chmod(0o755)
        fakebin = self.base / 'bin'
        fakebin.mkdir()
        parser = fakebin / 'jsonfilter'
        parser.write_text('#!/usr/bin/env python3\nimport json,sys\nprint(str(json.load(sys.stdin).get(sys.argv[-1].split(".")[-1], False)).lower())\n')
        parser.chmod(0o755)
        self.env = dict(os.environ, PATH=str(fakebin) + ':' + os.environ['PATH'])
        self.lock = self.base / 'lock'
        self.lock.mkdir()
        lock_source = (ROOT / 'root/usr/libexec/mclash-lock').read_text().replace('mkdir -p /var/lock', ':')
        (self.base / 'lock-helper').write_text(lock_source)
        source = (ROOT / 'root/usr/libexec/mclash-update').read_text()
        replacements = {
            '/usr/libexec/mclash-lock': str(self.base/'lock-helper'), '/usr/bin/mihomo': str(self.core), '/etc/init.d/mclash': str(self.init),
            '/usr/libexec/mclash-ui': str(self.ui), '/usr/libexec/mclash-log': str(self.base / 'log-helper'), '/etc/mclash/config.yaml': str(self.config),
            '/etc/mclash': str(self.base), '/var/lock/mclash-ui.lock': str(self.lock),
            '/var/run/mclash': str(self.base / 'state'), '/var/log': str(self.base / 'log'), '/tmp/mclash-mihomo.upload': str(self.upload),
            '/tmp/mclash-update.XXXXXX': str(self.base / 'work.XXXXXX'),
            '/usr/bin/.mihomo-new.XXXXXX': str(self.base / '.new.XXXXXX'),
            '/usr/bin/.mihomo-backup.XXXXXX': str(self.base / '.backup.XXXXXX'),
        }
        for old, new in replacements.items():
            source = source.replace(old, new)
        log_source = (ROOT / 'root/usr/libexec/mclash-log').read_text().replace('/var/log', str(self.base / 'log')).replace('/var/lock/mclash-log', str(self.base / 'log-lock'))
        (self.base / 'log-helper').write_text(log_source)
        (self.base / 'log-helper').chmod(0o755)
        self.script = self.base / 'update'
        source = source.replace('seq 1 35', 'seq 1 2').replace('sleep 1', 'sleep .05')
        self.script.write_text(source)

    def run_update(self):
        return subprocess.run(['busybox', 'ash', str(self.script), 'worker-local', 'claimed'],
                              env=self.env, capture_output=True, text=True, timeout=45)

    def test_invalid_upload_keeps_old_core(self):
        self.upload.write_text('not a core; private data')
        result = self.run_update()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.core.read_bytes(), self.original)
        self.assertFalse(self.calls.exists())
        self.assertNotIn('private data', result.stderr)

    def test_valid_core_atomic_replace(self):
        candidate = Path(os.environ['MCLASH_TEST_CORE'])
        shutil.copy(candidate, self.upload)
        result = self.run_update()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.core.read_bytes(), candidate.read_bytes())
        self.assertFalse(self.calls.exists(), 'Stopped services must stay stopped')
        self.assertIn('success\t100', (self.base / 'state/update.status').read_text())
        self.assertIn('服务保持停止', (self.base / 'state/update.status').read_text())

    def test_running_update_restores_running_state(self):
        shutil.copy(os.environ['MCLASH_TEST_CORE'], self.upload)
        self.ui.write_text('#!/bin/sh\necho \'{"running":true}\'\n')
        self.init.write_text('#!/bin/sh\necho "$1" >> "' + str(self.calls) + '"\nexit 0\n')
        result = self.run_update()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.calls.read_text().splitlines(), ['stop', 'start'])
        self.assertIn('服务已恢复运行', (self.base / 'state/update.status').read_text())

    def test_validation_failure_keeps_running_service(self):
        shutil.copy(os.environ['MCLASH_TEST_CORE'], self.upload)
        self.ui.write_text('#!/bin/sh\necho \'{"running":true}\'\n')
        self.config.write_text('rules: [')
        result = self.run_update()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.core.read_bytes(), self.original)
        self.assertFalse(self.calls.exists(), 'Validation happens before stopping the running core')
        self.assertTrue(self.upload.exists(),'failed validation retains uploaded core')
        self.assertIn('YAML', result.stderr)

    def test_readiness_failure_rolls_back_and_verifies_old_core(self):
        shutil.copy(os.environ['MCLASH_TEST_CORE'], self.upload)
        self.init.write_text('#!/bin/sh\necho "$1" >> "' + str(self.calls) + '"\nexit 0\n')
        original = self.base / 'original'
        original.write_bytes(self.original)
        self.ui.write_text('#!/bin/sh\nif cmp -s "' + str(self.core) + '" "' + str(original) + '"; then echo \'{"running":true}\'; else echo \'{"running":false}\'; fi\n')
        result = self.run_update()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.core.read_bytes(), self.original)
        self.assertEqual(self.calls.read_text().splitlines(), ['stop', 'start', 'stop', 'start'])
        self.assertIn('旧内核已恢复，服务已恢复运行', (self.base / 'state/update.status').read_text())

    def test_starting_service_is_not_treated_as_stopped(self):
        shutil.copy(os.environ['MCLASH_TEST_CORE'], self.upload)
        self.ui.write_text('#!/bin/sh\necho \'{"running":false,"active":true}\'\n')
        result = self.run_update()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.core.read_bytes(), self.original)
        self.assertFalse(self.calls.exists())
        self.assertIn('服务正在启动或退出', result.stderr)

    def test_failed_restart_restores_old_core(self):
        shutil.copy(os.environ['MCLASH_TEST_CORE'], self.upload)
        self.ui.write_text('#!/bin/sh\necho \'{"running":true}\'\n')
        result = self.run_update()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.core.read_bytes(), self.original)
        self.assertEqual(self.calls.read_text().splitlines(), ['stop', 'start', 'stop', 'start'])
        self.assertIn('error\t100', (self.base / 'state/update.status').read_text())
        self.assertIn('服务恢复失败', (self.base / 'state/update.status').read_text())


if __name__ == '__main__':
    unittest.main()
