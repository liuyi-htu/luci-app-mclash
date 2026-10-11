#!/usr/bin/env bash
set -euo pipefail
client_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cache_root="${MCLASH_OPENWRT_CACHE:-$client_root/.build-cache}"
mkdir -p "$cache_root"
work="$(mktemp -d "$cache_root/overrides.XXXXXX")"
trap 'rm -rf "$work"' EXIT
mkdir -p "$work/openwrt"
cp -a "$client_root/overrides" "$work/openwrt/"
(
  cd "$work/openwrt/overrides"
  dart pub get
  dart compile js -O2 bin/main.dart -o "$work/bridge.js"
)
python3 - "$work/bridge.js" "$client_root" <<'PY'
from pathlib import Path
import json,sys
compiled, client = map(Path,sys.argv[1:])
resources = client/'luci-app-mclash/htdocs/luci-static/resources/mclash'
resources.mkdir(parents=True,exist_ok=True)
source=compiled.read_text()
source='\n'.join(line for line in source.splitlines() if not line.startswith('//# sourceMappingURL='))
(resources/'overrides.js').write_text("// Generated from shared Mclash Dart code; rebuild with build-overrides.sh.\n// SPDX-License-Identifier: GPL-3.0-only\n'use strict';\n'require baseclass';\n" + source + '''
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) throw new Error(result.error);
    return result.value;
  }
});
''')
template=(client/'overrides/default-config.yaml').read_text()
template='\n'.join(line for line in template.splitlines() if not line.lstrip().startswith('#') or line.startswith('# Mclash ')) + '\n'
template=template.replace('external-controller: 0.0.0.0:9090','external-controller: 0.0.0.0:9097').replace('allow-lan: true','allow-lan: false').replace('log-level: info','log-level: error')
template=template.replace('dns:\n  enable: true', 'dns:\n  enable: true\n  listen: 0.0.0.0:1053')
template='\n'.join(line for line in template.splitlines() if not line.startswith('external-ui:') and not line.startswith('external-ui-url:')) + '\n'
(resources/'template.js').write_text("'use strict';\n'require baseclass';\nreturn baseclass.extend({text: " + json.dumps(template,ensure_ascii=False) + '});\n')
PY
# Preserve exact dependency resolution for subsequent builds.
cp "$work/openwrt/overrides/pubspec.lock" "$client_root/overrides/pubspec.lock"

# The installed initial profile and subscription profile share the same defaults.
node - "$client_root" <<'JS'
const fs = require('node:fs');
const root = process.argv[2] + '/luci-app-mclash/';
global.self = global;
const baseclass = {extend: members => function() {Object.assign(this, members);}};
const Override = new Function('baseclass', fs.readFileSync(root + 'htdocs/luci-static/resources/mclash/overrides.js', 'utf8'))(baseclass);
const Template = new Function('baseclass', fs.readFileSync(root + 'htdocs/luci-static/resources/mclash/template.js', 'utf8'))(baseclass);
const content = new Override().call('network', new Template().text, {mode:'none', interfaces:['br-lan'], router:true, ipv6:false, stack:'mixed'});
fs.writeFileSync(root + 'root/etc/mclash/config.yaml', content);
JS
