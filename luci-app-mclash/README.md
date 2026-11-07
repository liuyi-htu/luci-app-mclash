# Mclash user guide

See the [project README](../README.md) for installation and builds. Open **Services → Mclash**. Configuration is stored at `/etc/mclash/config.yaml`, with Mihomo's working directory at `/etc/mclash`.

## Configuration and dashboard

Basic settings provides service controls, dashboard access, browser/router latency probes and capture settings. Probes measure HTTPS request time to Telegram, OpenAI, Baidu, Google, YouTube and GitHub; they do not query exit IPs.

Nodes and rules manages subscriptions, manual nodes, Host overrides, pre-proxy chains, groups, rule providers, rules and DNS. Each subscription has a name and independent update. Configuration and settings can be saved while the service is running; a notification confirms they will apply on the next start. Saves never restart the service. Invalid saves retain the previous saved file, and startup/stop transitions block edits. Runtime configuration is read-only and shows the running snapshot, independently of pending saved changes.

**Add node** accepts share URLs or native Mihomo YAML pasted into the editor or loaded with **Choose file** (UTF-8, up to 8 MiB). YAML can contain a single node, a node list, or a full configuration with `proxies`; multiple documents, anchors, aliases and merge keys are supported. Only nodes are imported, preserving protocol-specific fields and YAML Host settings. Conflicting names are renamed automatically, with references between nodes in the same batch updated. Duplicate names within the input are rejected. The resulting configuration must also fit within 8 MiB and pass the installed core's validation before it replaces the active file.


The default controller is `0.0.0.0:9097`. Change its address and port under Basic settings. No secret is set by default; the service limits controller access to the router and selected LAN interfaces. Zashboard is hosted on the router and opens separately.

## Capture and DNS

Automatic capture is disabled by default. Select TUN or TProxy, LAN interfaces (usually `br-lan`) and proxy scope, then save and start.

- TUN routes selected TCP/UDP traffic through a virtual interface; stacks: mixed, system, gvisor.
- TProxy captures selected TCP/UDP traffic using nftables and policy routing.
- Proxy scope controls LAN devices, router traffic and IPv6. With Proxy LAN devices disabled, only access-control IPs/ranges are captured; other LAN devices connect directly. Access control offers device IP suggestions and custom IP/CIDR/IPv4 ranges. Each entry can follow the default routing rules or send all captured traffic through a selected node. Specific-node policies run before ordinary rules (and put the core in rule mode); they take priority over default entries, and overlapping specific-node entries are evaluated in list order. Remove a node policy before removing its target node. Switching an entry to Default removes its generated rules without changing the original rules.
- Traffic between LAN devices bypasses capture. Core egress bypass prevents routing loops.

Defaults use fake-ip, DoH, sniffing and Domestic/Foreign groups, initially containing DIRECT. DNS listens on `1053`, the mixed port is `7890`. TUN/TProxy sends ordinary DNS requests in the selected scope to Mihomo; LAN-to-LAN DNS remains direct.

DNS management edits resolver settings. `enable`, `listen` and `ipv6` are controlled by capture/proxy-scope settings and are hidden from the DNS editor, then preserved on save.

firewall4/nftables are required. Route table `166`, policy preference `1166`, marks `0x166`/`0x167` and the TUN name `Mclash` are reserved by the application. Conflicts are checked before startup. Rules are applied after core readiness and removed on stop or exit.

Each subscription has a **Resolve node domains to IP** option, off by default. While the service is active, updates use the running controller's real DNS query API, avoiding fake-IP answers from intercepted system DNS. When stopped, updates use system DNS. IPv4 is preferred with IPv6 fallback; failures or unavailable controllers keep the domain without falling back to intercepted DNS. Default and configured fake-IP ranges are rejected before saving. Up to four lookups run concurrently with a ten-second budget per subscription. TLS names and WebSocket Host headers retain the original identity. An embedded node-only cache retains original domains; disabling the option and updating restores them. Independent subscription updates retain peer node addresses.

At startup the validated saved profile is copied to `/var/run/mclash/runtime.yaml`. The core, capture helpers, dashboard and runtime preview use this snapshot. Pending settings remain in `/etc/mclash/config.yaml` until the next start, including after a process respawn. Existing running sessions are snapshotted before their first pending save after an upgrade.

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
