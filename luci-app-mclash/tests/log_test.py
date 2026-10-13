#!/usr/bin/env python3
"""Size bounds, selective clearing and writes during a running stream."""
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]

class LogTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='mclash-log-test-')
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.logs = self.base / 'logs'
        source = (ROOT / 'root/usr/libexec/mclash-log').read_text().replace('/var/log', str(self.logs)).replace('/var/lock/mclash-log', str(self.base / 'lock'))
        self.helper = self.base / 'helper'; self.helper.write_text(source)
    def call(self, op, text=None):
        return subprocess.run(['busybox', 'ash', str(self.helper), op] + ([] if text is None else [text]), capture_output=True, text=True, timeout=15)
    def test_large_stream_is_bounded_and_keeps_recent_lines(self):
        payload = ''.join(str(i) + 'x' * 9000 + '\n' for i in range(90)) + 'recent \u4e2d\u6587\n'
        result = subprocess.run(['busybox', 'ash', str(self.helper), 'stream-core'], input=payload, capture_output=True, text=True, timeout=30)
        self.assertEqual(result.returncode, 0)
        log = self.logs / 'mihomo.log'
        self.assertLessEqual(log.stat().st_size, 524288)
        self.assertIn('recent \u4e2d\u6587', log.read_text())
        self.assertEqual(log.stat().st_mode & 0o777, 0o600)
    def test_all_log_categories_trim_and_clear_independently(self):
        self.logs.mkdir()
        paths = {'core': 'mihomo.log', 'service': 'mclash.log',
                 'update': 'mclash-update.log'}
        for kind, name in paths.items():
            with self.subTest(kind=kind):
                path = self.logs / name
                path.write_text('old\n' + 'x' * 1023 + '\n' + ('y' * 1023 + '\n') * 510)
                self.assertEqual(self.call('append-' + kind, 'z' * 8192).returncode, 0)
                self.assertLessEqual(path.stat().st_size, 524288)
                self.assertNotIn('old\n', path.read_text())
                self.assertEqual(path.stat().st_mode & 0o777, 0o600)
                self.assertEqual(self.call('append-' + kind, 'recent-' + kind).returncode, 0)
                self.assertIn('recent-' + kind, path.read_text())
        for kind, name in paths.items():
            self.assertEqual(self.call('clear-' + kind).returncode, 0)
            self.assertEqual((self.logs / name).stat().st_size, 0)

    def test_clear_only_selected_log_and_stream_keeps_writing(self):
        self.call('append-update', 'update history')
        proc = subprocess.Popen(['busybox', 'ash', str(self.helper), 'stream-core'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
        self.addCleanup(lambda: proc.poll() is not None or proc.kill())
        proc.stdin.write('before clear\n'); proc.stdin.flush()
        self.assertEqual(proc.stdout.readline(), 'before clear\n')
        self.assertEqual(self.call('clear-core').returncode, 0)
        self.assertEqual((self.logs / 'mihomo.log').read_text(), '')
        self.assertIn('update history', (self.logs / 'mclash-update.log').read_text())
        proc.stdin.write('after clear\n'); proc.stdin.flush()
        self.assertEqual(proc.stdout.readline(), 'after clear\n')
        proc.stdin.close(); proc.wait(timeout=5); proc.stdout.close()
        self.assertIn('after clear', (self.logs / 'mihomo.log').read_text())
        self.assertEqual(self.call('clear-update').returncode, 0)
        self.assertIn('after clear', (self.logs / 'mihomo.log').read_text())
    def test_symlink_cannot_clear_another_file(self):
        self.logs.mkdir(); victim = self.base / 'victim'; victim.write_text('keep')
        (self.logs / 'mihomo.log').symlink_to(victim)
        self.assertNotEqual(self.call('clear-core').returncode, 0)
        self.assertEqual(victim.read_text(), 'keep')

    def test_service_separator_is_last_line_and_keeps_history(self):
        self.call('append-service', 'Startup complete')
        self.assertEqual(self.call('separator-service').returncode, 0)
        self.call('append-service', 'Service stopped')
        self.assertEqual(self.call('separator-service').returncode, 0)
        lines = (self.logs / 'mclash.log').read_text().splitlines()
        self.assertIn('Startup complete', lines[0])
        self.assertEqual(lines[1], '-' * 60)
        self.assertIn('Service stopped', lines[2])
        self.assertEqual(lines[-1], '-' * 60)

if __name__ == '__main__': unittest.main()
