# Router test record: 2026-10-12

Environment: OpenWrt 25.12.5, arm64, application 1.0.1-r1, Mihomo 1.19.32. Configuration, core and logs were backed up before testing and restored afterward. Startup fixes were retained; autostart remained disabled.

## On-device checks

| Feature | Result |
| --- | --- |
| Start, stop, configuration validation and autostart toggles | Passed; invalid YAML rejected without modifying the original |
| Subscription updates, idle cancellation and device enumeration | Passed; cancellation no longer produces shell errors |
| Manual nodes, Host, groups, providers, rules and chains | Creation, saving, validation and removal passed; referenced groups cannot be deleted |
| TUN mixed/system/gvisor | Started successfully; HTTPS returned 200 |
| TProxy and disabled capture | Started successfully; proxy HTTPS returned 200; stop removed capture rules |
| Six router connectivity probes | All passed |
| Controller configs/proxies/connections and direct/global/rule modes | Passed |
| Core, service and update logs | Reading/clearing passed; logs restored afterward |
| Core release check and online update | Already-up-to-date branch passed |
| Local core update and invalid uploads | Real core validation/replacement passed; invalid ELF rejected without modifying the original |
| Firewall configuration | fw4 check passed |

Three issues were fixed on-device: the init script still used the system timeout command; idle subscription cancellation printed an error when the lock file did not exist; a lock without an owner could not be recovered without stat. Fixes were deployed and included in the local packages.

Repeated WAN disconnections during testing were confirmed by the user as manual actions. Local Wi-Fi and wired IPv4/IPv6 route metrics were set to 50 and 2000 respectively. Internet access continued through Wi-Fi while WAN was online. These local connection settings persist after reconnects and reboots.

## Automated checks

51 Python checks passed: backend 16, timeout 4, init 3, probes 6, update 7, logs 4, network integration 11. Frontend, browser probes and shared configuration JavaScript checks passed. Both SDK builds and package contents, permissions and SHA256 checks passed.

Isolated real-Mihomo integration covered TCP/UDP/DNS, all TUN stacks, TProxy, firewall reload, LAN-local bypass, router/LAN proxy scope, client ACL, disabled IPv6, controller LAN access and secrets, exit cleanup and conflict failures.
