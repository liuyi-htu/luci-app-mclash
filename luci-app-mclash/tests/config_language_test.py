#!/usr/bin/env python3
"""Installed language package changes built-in names and all references."""
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]

class ConfigLanguageTest(unittest.TestCase):
    def test_install_and_remove_chinese_catalog(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = Path(tmp)
            catalog = folder / 'mclash.zh-cn.lmo'
            helper = folder / 'language'
            source = (ROOT / 'root/usr/libexec/mclash-config-language').read_text()
            for path in ['/usr/lib/lua/luci/i18n/mclash.zh-cn.lmo', '/usr/lib/ucode/luci/i18n/mclash.zh-cn.lmo']:
                source = source.replace(path, str(catalog))
            source = source.replace('/usr/share/mclash/legacy-config.sed', str(ROOT / 'root/usr/share/mclash/legacy-config.sed'))
            helper.write_text(source)
            content = 'proxy-groups: [{name: "🚀 Domestic", proxies: [Custom]}, {name: "🌍 Foreign", proxies: ["🚀 Domestic"]}]\nrules: ["MATCH,🌍 Foreign"]\n# Custom name stays unchanged\n'
            def run(text):
                return subprocess.run(['busybox', 'ash', str(helper)], input=text, text=True, capture_output=True, check=True).stdout
            self.assertEqual(run(content), content)
            catalog.write_bytes(b'catalog')
            chinese = run(content)
            self.assertIn('name: "🚀 \u56fd\u5185"', chinese)
            self.assertIn('proxies: ["🚀 \u56fd\u5185"]', chinese)
            self.assertIn('MATCH,🌍 \u56fd\u5916', chinese)
            self.assertIn('Custom', chinese)
            catalog.unlink()
            self.assertEqual(run(chinese), content)

if __name__ == '__main__':
    unittest.main()
