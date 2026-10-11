#!/usr/bin/env python3
"""Check bounded execution and cancellation under OpenWrt's BusyBox ash."""
from pathlib import Path
import subprocess
import time
import unittest

HELPER = Path(__file__).resolve().parents[1] / 'root/usr/libexec/mclash-timeout'


class TimeoutTest(unittest.TestCase):
    def run_helper(self, *args):
        return subprocess.run(['busybox', 'ash', str(HELPER), *args],
                              capture_output=True, text=True, timeout=5)

    def test_output_and_exit_status_are_preserved(self):
        result = self.run_helper('30', '/bin/sh', '-c', 'printf hello; exit 7')
        self.assertEqual(result.stdout, 'hello')
        self.assertEqual(result.returncode, 7)

    def test_deadline_kills_command_ignoring_term(self):
        start = time.monotonic()
        result = self.run_helper('1', '/bin/sh', '-c', 'trap "" TERM; exec sleep 30')
        self.assertNotEqual(result.returncode, 0)
        self.assertLess(time.monotonic() - start, 4)

    def test_cancellation_reaps_command_watchdog_and_timer(self):
        process = subprocess.Popen(['busybox', 'ash', str(HELPER), '30', 'sleep', '30'],
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        self.addCleanup(lambda: process.kill() if process.poll() is None else None)
        descendants = set()
        def collect(pid):
            children = Path(f'/proc/{pid}/task/{pid}/children')
            if children.exists():
                for child in children.read_text().split():
                    descendants.add(child)
                    collect(child)
        for _ in range(100):
            collect(process.pid)
            if len(descendants) >= 3:
                break
            time.sleep(.01)
        self.assertEqual(len(descendants), 3)
        process.terminate()
        process.communicate(timeout=5)
        self.assertEqual(process.returncode, 143)
        for pid in descendants:
            self.assertFalse(Path(f'/proc/{pid}').exists(), f'Leaked child {pid}')

    def test_invalid_duration_is_rejected(self):
        for value in ['0', '-1', 'invalid']:
            self.assertEqual(self.run_helper(value, 'true').returncode, 2)


if __name__ == '__main__':
    unittest.main()
