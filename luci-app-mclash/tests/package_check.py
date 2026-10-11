#!/usr/bin/env python3
"""Validate and move the freshly built OpenWrt package into dist."""
from pathlib import Path
import hashlib
import io
import os
import json
import subprocess
import sys
import tempfile
import tarfile

root, sdk = map(Path, sys.argv[1:3])
arch = sys.argv[3]
if arch == 'arm64':
    package_arch, extension = 'aarch64_cortex-a53', 'apk'
elif arch == 'x86_64':
    package_arch, extension = 'x86_64', 'ipk'
else:
    raise SystemExit('Unsupported architecture: ' + arch)
packages = list((sdk / 'bin/packages' / package_arch / 'base').glob(('luci-app-mclash-' if extension == 'apk' else 'luci-app-mclash_') + '[0-9]*.' + extension))
if len(packages) != 1:
    raise SystemExit('Expected exactly one newly built package, got ' + str(len(packages)))
package = packages[0]
if extension == 'apk':
    metadata = subprocess.check_output([str(sdk / 'staging_dir/host/bin/apk'), 'adbdump', str(package)], text=True)
    assert '  name: luci-app-mclash\n' in metadata
    assert '  arch: noarch\n' in metadata
    version = next(line.strip().split(': ', 1)[1] for line in metadata.splitlines() if line.startswith('  version: '))
else:
    with tarfile.open(package, 'r:gz') as outer:
        member = next(m for m in outer.getmembers() if m.name.lstrip('./') == 'control.tar.gz')
        with tarfile.open(fileobj=io.BytesIO(outer.extractfile(member).read()), mode='r:gz') as control:
            member = next(m for m in control.getmembers() if m.name.lstrip('./') == 'control')
            metadata = control.extractfile(member).read().decode()
    fields = dict(line.split(': ', 1) for line in metadata.splitlines() if ': ' in line and not line.startswith(' '))
    assert fields['Package'] == 'luci-app-mclash'
    assert fields['Architecture'] == 'all'
    version = fields['Version']
makefile = (root/'Makefile').read_text().splitlines()
fields = dict(line.split(':=', 1) for line in makefile if line.startswith(('PKG_VERSION:=', 'PKG_RELEASE:=')))
expected_version = os.environ.get('MCLASH_PACKAGE_VERSION', fields['PKG_VERSION']+'-r'+fields['PKG_RELEASE'])
assert version == expected_version, f'Expected {expected_version}, got {version}'

# Validate the delivered package, not just the working source.
with tempfile.TemporaryDirectory(prefix='mclash-package-') as temporary:
    extracted = Path(temporary)
    if extension == 'apk':
        subprocess.run([str(sdk/'staging_dir/host/bin/apk'), 'extract', '--allow-untrusted', '--destination', str(extracted), str(package)], check=True, stdout=subprocess.DEVNULL)
    else:
        with tarfile.open(package, 'r:gz') as outer:
            member = next(m for m in outer.getmembers() if m.name.lstrip('./') == 'data.tar.gz')
            with tarfile.open(fileobj=io.BytesIO(outer.extractfile(member).read()), mode='r:gz') as data:
                data.extractall(extracted, filter='data')
    for path in (extracted/'usr/share').rglob('*.json'):
        json.loads(path.read_text())
    js=extracted/'www/luci-static/resources/view/mclash/overview.js'
    assert js.is_file()
    for script in (extracted/'www/luci-static/resources').rglob('*.js'):
        subprocess.run(['node', '--check', str(script)], check=True)
    for name in ['overrides', 'management', 'proxy', 'template']:
        assert (extracted/'www/luci-static/resources/mclash'/(name+'.js')).is_file()
    assert (extracted/'usr/share/doc/luci-app-mclash/GPL-3.0.txt').is_file()
    scripts=[extracted/'etc/init.d/mclash', extracted/'etc/uci-defaults/99-luci-app-mclash', *list((extracted/'usr/libexec').glob('mclash-*'))]
    for name in ['mclash-timeout', 'mclash-ui', 'mclash-update']:
        path = Path('usr/libexec') / name
        assert (extracted / path).read_bytes() == (root / 'root' / path).read_bytes(), str(path)
    assert (extracted / 'etc/init.d/mclash').read_bytes() == (root / 'root/etc/init.d/mclash').read_bytes()
    for path in scripts:
        assert path.is_file() and path.stat().st_mode & 0o111, str(path)
        subprocess.run(['busybox','ash','-n',str(path)],check=True)
    assert (extracted/'etc/mclash/config.yaml').is_file()
    assert not (extracted/'usr/bin/mihomo').exists()

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

checksum = digest(package)
output_dir = Path(os.environ.get('MCLASH_OUTPUT_DIR', root/'dist'))
metadata_dir = Path(os.environ.get('MCLASH_METADATA_DIR', root/'.build-logs'))
output_dir.mkdir(parents=True, exist_ok=True)
metadata_dir.mkdir(parents=True, exist_ok=True)
output = output_dir / ('luci-app-mclash-' + version + '.apk' if extension == 'apk' else 'luci-app-mclash_' + version + '_all.ipk')
if output.exists():
    backup = output_dir / 'archive' / 'replaced' / version
    backup.mkdir(parents=True, exist_ok=True)
    previous = backup / (output.name + '.' + digest(output))
    if previous.exists():
        assert digest(previous) == digest(output)
        output.unlink()
    else:
        output.rename(previous)
import shutil
shutil.copy2(package, output)
assert digest(output) == checksum
output.with_name(output.name + '.sha256').write_text(checksum + '  ' + output.name + '\n')
(metadata_dir / ('package-metadata-' + arch + '.txt')).write_text(metadata)
result = {'version': version, 'target': arch, 'format': extension, 'sdk': sdk.name,
          'artifact': str(output), 'sha256': checksum, 'build': 'passed'}
(metadata_dir / ('validation-' + arch + '.json')).write_text(json.dumps(result, ensure_ascii=False, indent=2))
print('Build complete:', output)
print('SHA256:', checksum)
