# Tests

Run checks from the repository root. Set `PYTHONDONTWRITEBYTECODE=1` to avoid Python bytecode artifacts.

| Test | Coverage |
| --- | --- |
| domain_resolution_test.py | Bounded system/core DNS, authenticated queries and safe failure with native SDK jshn |
| domain_resolution_core_test.py | Real-core fake-IP DNS bypass, IPv4/IPv6 conversion and safe controller failure on loopback; requires MCLASH_TEST_CORE |
| backend_test.py | Service state, configuration protection, subscription fetch and locks |
| probe_test.py / browser_probe_test.js | Router/browser latency probes |
| frontend_test.js / management_ui_test.js | UI interaction, configuration protection and dialogs |
| source_policy_core_test.py | Real-core source-policy routing with loopback-only HTTP; requires MCLASH_TEST_CORE |
| overrides_test.js | Shared configuration processing, subscriptions, DNS and capture |
| i18n_test.js / translation_package_check.py | English fallback, Chinese catalog coverage and translation package contents |
| log_test.py | Size bounds, selective clearing and lifecycle separators |
| update_test.py | Core validation, replacement and rollback |
| timeout_test.py | Timeout handling and cancellation without a system timeout command |
| init_test.py | First-boot enablement and retry, startup validation and reload ordering |
| network_integration.py | Real capture behavior in isolated network namespaces |
| package_check.py | SDK artifacts, contents, permissions, versions and naming |

`build-openwrt.sh` runs core frontend/backend checks and validates SDK artifacts. Update and network integration tests need additional environments.

```sh
python3 luci-app-mclash/tests/backend_test.py
node luci-app-mclash/tests/frontend_test.js
node luci-app-mclash/tests/management_ui_test.js
node luci-app-mclash/tests/overrides_test.js
python3 luci-app-mclash/tests/log_test.py
```

`package_check.py` receives the package source, SDK and target from the build script. Replaced same-version packages are archived under `dist/archive/replaced/`.
