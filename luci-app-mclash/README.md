# Mclash user guide

See the [project README](../README.md) for installation and builds. Open **Services → Mclash**. Configuration is stored at `/etc/mclash/config.yaml`, with Mihomo's working directory at `/etc/mclash`.

## Configuration and dashboard

Basic settings provides service controls, dashboard access, browser/router latency probes and capture settings. Probes measure HTTPS request time to Telegram, OpenAI, Baidu, Google, YouTube and GitHub; they do not query exit IPs.

Nodes and rules manages subscriptions, manual nodes, Host overrides, pre-proxy chains, groups, rule providers, rules and DNS. Each subscription has a name and independent update. Stop the service before editing configuration. Invalid saves retain the existing file. Runtime configuration is read-only and refreshes when opened.

The default controller is `0.0.0.0:9097`. Change its address and port under Basic settings. No secret is set by default; the service limits controller access to the router and selected LAN interfaces. Zashboard is hosted on the router and opens separately.

## Capture and DNS

Automatic capture is disabled by default. Select TUN or TProxy, LAN interfaces (usually `br-lan`) and proxy scope, then save and start.

- TUN routes selected TCP/UDP traffic through a virtual interface; stacks: mixed, system, gvisor.
- TProxy captures selected TCP/UDP traffic using nftables and policy routing.
- Proxy scope controls LAN devices, router traffic and IPv6. With Proxy LAN devices disabled, only access-control IPs/ranges are captured; other LAN devices connect directly.
- Traffic between LAN devices bypasses capture. Core egress bypass prevents routing loops.

Defaults use fake-ip, DoH, sniffing and Domestic/Foreign groups, initially containing DIRECT. DNS listens on `1053`, the mixed port is `7890`. TUN/TProxy sends ordinary DNS requests in the selected scope to Mihomo; LAN-to-LAN DNS remains direct.

DNS management edits resolver settings. `enable`, `listen` and `ipv6` are controlled by capture/proxy-scope settings and are hidden from the DNS editor, then preserved on save.

firewall4/nftables are required. Route table `166`, policy preference `1166`, marks `0x166`/`0x167` and the TUN name `Mclash` are reserved by the application. Conflicts are checked before startup. Rules are applied after core readiness and removed on stop or exit.

## Core updates

Check official stable releases, update online, or upload a local ELF/gzip core. Validation precedes replacement. An active service resumes after a successful update; a stopped service remains stopped. Replacement/startup failures restore the previous core. Updates are blocked during service transitions.

## Logs

| UI name | File | Content |
| --- | --- | --- |
| mclash.log | `/var/log/mclash.log` | Lifecycle results, proxy scope, access control, firewall/routes and failures |
| mihomo.log | `/var/log/mihomo.log` | Core logs; default level: error |
| update.log | `/var/log/mclash-update.log` | Core download, validation, replacement and rollback |

Each file is limited to 512 KiB; trimming keeps approximately the newest 256 KiB. The UI shows the last 300 service lines or 100 core/update lines. Startup/stop sections end with a separator. Stored logs use English; the optional Simplified Chinese package translates UI labels and supported service/update log messages in the viewer. Built-in group names and references switch to Chinese when the package is installed; restart the service to refresh the dashboard groups.

## Remove

```sh
/etc/init.d/mclash stop
/etc/init.d/mclash disable
opkg remove luci-app-mclash
# APK firmware: apk del luci-app-mclash
/etc/init.d/rpcd restart
```

Configuration retention follows your package manager. Separately installed Mihomo and resource files remain user-managed.
