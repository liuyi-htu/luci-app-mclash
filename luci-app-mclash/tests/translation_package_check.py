#!/usr/bin/env python3
"""Validate and collect the optional LuCI Simplified Chinese package."""
import hashlib
import io
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tarfile
import tempfile

sdk = Path(sys.argv[1])
arch = sys.argv[2]
apk = arch == 'arm64'
package_arch = 'aarch64_cortex-a53' if apk else 'x86_64'
folder = sdk / 'bin/packages' / package_arch / 'base'
name = 'luci-i18n-mclash-zh-cn'
version = os.environ['MCLASH_PACKAGE_VERSION']
packages = list(folder.glob(name + ('-' + version + '.apk' if apk else '_' + version + '_all.ipk')))
assert len(packages) == 1, packages
package = packages[0]
with tempfile.TemporaryDirectory(prefix='mclash-i18n-') as tmp:
    extracted = Path(tmp)
    if apk:
        metadata = subprocess.check_output([str(sdk / 'staging_dir/host/bin/apk'), 'adbdump', str(package)], text=True)
        assert 'name: ' + name in metadata
        assert 'version: ' + os.environ['MCLASH_PACKAGE_VERSION'] in metadata
        assert 'luci-app-mclash' in metadata
        subprocess.run([str(sdk / 'staging_dir/host/bin/apk'), 'extract', '--allow-untrusted', '--destination', str(extracted), str(package)], check=True, stdout=subprocess.DEVNULL)
    else:
        with tarfile.open(package, 'r:gz') as outer:
            control = next(m for m in outer.getmembers() if m.name.lstrip('./') == 'control.tar.gz')
            with tarfile.open(fileobj=io.BytesIO(outer.extractfile(control).read()), mode='r:gz') as archive:
                member = next(m for m in archive.getmembers() if m.name.lstrip('./') == 'control')
                metadata = archive.extractfile(member).read().decode()
                assert 'Package: ' + name in metadata
                assert 'Version: ' + os.environ['MCLASH_PACKAGE_VERSION'] in metadata
                assert 'luci-app-mclash' in metadata
            data = next(m for m in outer.getmembers() if m.name.lstrip('./') == 'data.tar.gz')
            with tarfile.open(fileobj=io.BytesIO(outer.extractfile(data).read()), mode='r:gz') as archive:
                archive.extractall(extracted, filter='data')
    catalogs = list(extracted.rglob('mclash.zh-cn.lmo'))
    assert len(catalogs) == 1 and catalogs[0].stat().st_size > 0
    subprocess.run(['node', str(Path(__file__).with_name('i18n_test.js')), str(catalogs[0]), str(sdk / 'feeds/luci/modules/luci-base/htdocs/luci-static/resources/cbi.js')], check=True)
    assert not list((extracted / 'www').rglob('*.js'))
    defaults = extracted / ('etc/uci-defaults/' + name)
    assert defaults.is_file() and 'luci.languages.zh_cn' in defaults.read_text()
output = Path(os.environ['MCLASH_OUTPUT_DIR'])
target = output / package.name
if target.exists() and target.read_bytes() != package.read_bytes():
    archive = output / 'archive/replaced/i18n'
    archive.mkdir(parents=True, exist_ok=True)
    shutil.move(target, archive / (target.name + '.' + hashlib.sha256(target.read_bytes()).hexdigest()[:12]))
shutil.copy2(package, target)
digest = hashlib.sha256(target.read_bytes()).hexdigest()
Path(str(target) + '.sha256').write_text(digest + '  ' + target.name + '\n')
print('Translation package checked:', target)
