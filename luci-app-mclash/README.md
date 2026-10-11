# Mclash OpenWrt 客户端

LuCI 插件包名为 `luci-app-mclash`，界面名称为 **Mclash**，版本与项目保持一致。页面使用 PassWall 式 LuCI 风格，主导航为 **基础设置、节点与规则、运行配置、日志、更新内核**。状态卡片仅在基础设置页显示，点击启停卡片直接控制服务，移除自启和刷新操作。操作结果使用右上角轻提示，5 秒后自动消失，也可手动关闭。

## 功能

- 基础设置：接管方式、局域网设备多选、TUN 协议栈、代理范围（三项开关：代理局域网设备、代理路由器本机、代理 IPv6，以及访问控制 IP／范围），以及监听地址与端口。采用 PassWall 式字段布局，无子标签，接管选项以“接管方式”小标题分组，控制接口保持设置行。关闭局域网代理后，仅代理访问控制指定的 IP／范围；开启后代理所选局域网设备的全部流量。服务运行时配置入口禁用。
- 节点与规则：独立主标签，位于运行配置左侧，包含机场订阅、添加节点、修改 Host、前置链式节点、代理组、规则集和规则管理。运行时配置入口禁用。
- 运行状态：在基础设置页面内直接显示，采用 PassWall 式八卡片布局，第一行为点击启停、代理面板、Telegram、OpenAI，第二行为阿里、谷歌、GitHub、YouTube 连通性检测。点击启停卡片直接启动或停止服务，基础设置激活时自动刷新状态，原顶栏及操作弹窗已移除。出口 IP／地区始终查询外部接口（国内 myip.ipip.net、国外 ipwho.is），不读取控制器 IP；六张查询卡片均显示出口 IP／地区及延迟，配对应本地 SVG 站点图标与结果图标。六张卡片延迟均为对应站点 HTTPS 耗时；站点与查询接口可能被自定义规则分流到不同出口。所有查询手动触发，默认浏览器，可用 OpenAI 卡片右上角按钮切换为路由器或浏览器作为检测来源，不显式经 Mihomo 混合端口，也不改变代理组选择；设备自身的透明代理或浏览器代理仍可能影响出口；停止代理时仍可查询出口及站点连通性；出口相同可能是两类流量使用相同节点或直连。每个请求超时 10 秒（站点卡片含站点与 IP 两个请求），IP 查询响应上限 8 KiB，站点 HEAD 仅取响应头并丢弃输出，不按网页 Content-Length 限制大小。
- 运行配置：仅以只读文本查看已保存 YAML，点击标签时自动刷新，不换行并隐藏滚动条；配置调整通过基础设置和节点与规则进行。
- 更新内核：检查官方稳定版本、在线更新或上传本地 ELF／gzip 核心；显示进度，在线下载核对摘要，校验配置后原子替换，启动失败回滚。
- 日志：沿用 V2bX 的日志类型选择和刷新布局，查看最近 100 行服务日志或内核更新日志，刷新按钮右侧可清空当前所选日志。两类日志各限制 512 KiB，超限时裁掉旧内容，保留最近约 256 KiB；不清空系统或其他插件的日志。

六项覆写直接复用 Mclash 的 Dart 配置处理代码，编译为浏览器模块；订阅更新保留手动节点、Host、链式节点、代理组筛选、规则集和规则。少数混合行内／块式 YAML 触发 yaml_edit 的缩进错误时，会保留配置值和 Mclash 元数据并重新排版。

修改配置前须停止服务。保存前由 Mihomo 校验；失败保留原文件，成功以 `0600` 权限原子替换，不自动启动服务。运行中的模式切换通过控制器 API 生效，重启后使用 YAML 中的 `mode`。

## 安装

包内不包含 Mihomo 核心。架构标签表示构建验证所用 SDK，插件内容为架构无关的 JS 和 shell。按设备包管理器选择 APK 或 IPK，并确保软件源提供依赖。

ImmortalWrt 25.12（APK）：

```sh
apk add --allow-untrusted /tmp/luci-app-mclash-1.0.0-r1.apk
/etc/init.d/rpcd restart
```

OpenWrt／ImmortalWrt 24.10（IPK）：

```sh
opkg update
opkg install /tmp/luci-app-mclash_1.0.0-r1_all.ipk
/etc/init.d/rpcd restart
```

也可在「更新内核」中安装，或从 [Mihomo 官方发布页](https://github.com/MetaCubeX/mihomo/releases) 获取匹配路由器 CPU 的核心，解压到 `/usr/bin/mihomo` 并设置可执行权限。依赖包括 `luci-base`、`rpcd-mod-file`、`jsonfilter`、`jshn`、`coreutils-timeout`、`curl`、`ca-bundle`、`firewall4`、`nftables-json`、`ip-full`、`kmod-tun` 和 `kmod-nft-tproxy`。

打开 **LuCI → 服务 → Mclash**。配置位于 `/etc/mclash/config.yaml`，核心工作目录为 `/etc/mclash`。控制接口默认 `0.0.0.0:9097`，地址与端口可在常规设置中修改。默认不设置控制密钥；服务限制控制端口仅可从本机和指定局域网设备访问。面板在新窗口打开，与路由器同源提供，也兼容用户自行设置的密钥。默认内核日志级别为 `error`。初始配置复用 Mclash 默认模板：fake-ip、按国内外策略分流的 DoH、嗅探、国内／国外代理组与规则；两组初始只有 DIRECT。DNS 监听 1053，混合端口为 7890，混合端口默认仅接收本机连接。默认关闭自动接管，启用 TUN／TProxy 后普通 DNS 请求交给 Mihomo，局域网内 DNS 互访保持直连。订阅仅支持填写 HTTP／HTTPS 链接，移除已下载 YAML 的粘贴入口；订阅及逐行规则输入支持横向滚动。保存前查询实时服务状态，启动／退出期间仍保护配置。添加自己的订阅或节点后保存，再启动服务。

规则／全局／直连是流量出站选择模式，可以与 TUN 或 TProxy 配合使用。规则或地理数据库资源需按自己的配置准备。

## TUN／TProxy

在 **基础设置 → 接管方式** 中选择方式，多选局域网设备（通常为 `br-lan`），选择是否代理路由器本机及 IPv6，保存后启动服务。默认关闭自动接管；修改设置前须先停止服务。

- **TUN**：将所选 TCP／UDP 流量通过策略路由送入 `Mclash` 虚拟网卡；可选 mixed、system、gvisor 栈，默认 mixed。
- **TProxy**：通过 nftables 与策略路由接管所选 TCP／UDP，透明监听端口为 7893。
- 局域网设备间的 IPv4／IPv6 TCP、UDP、DNS 默认绕过 Mihomo，所选 LAN 设备的直连前缀在启动时自动读取。发往路由器和公网的 IPv4 DNS TCP／UDP 53 重定向到 Mihomo 1053；启用 IPv6 时同时处理 IPv6 DNS。关闭 IPv6 时阻止所选接口的公网 IPv6 TCP／UDP，保留局域网、链路本地、组播和 ICMP。
- 开启本机代理后，同时接管路由器本机 TCP／UDP 和 DNS。局域网目的地址直连，核心出站使用独立标记绕过接管，防止回环。
- 接管参数写入 YAML 并保存在 Mclash 元数据中，订阅更新保留这些参数。启用接管后，界面保存配置时统一应用受管理的 TUN、TProxy、DNS、控制器和路由标记字段。
- 核心与监听端口就绪后才安装接管规则。启动失败回滚；停止、核心退出和 procd 重启时清理。TUN 停止后清理虚拟网卡。若核心不能及时退出，监督进程在等待 5 秒后终止它，再清理规则。

目前支持 **firewall4／nftables**。不支持 fw3／iptables。路由表 166、策略路由优先级 1166、流量标记 `0x166`／`0x167` 和 TUN 设备名 `Mclash` 为本客户端保留；启动前检查表、优先级、设备与端口占用，冲突时拒绝接管。接管规则置于独立的 `inet mclash` 表，仅移除本插件的规则与路由。firewall4 的链包含文件指向 `/var/run/mclash`，重载时恢复所需接受规则；重启后的失效链接不会继续加载旧规则。不修改 `/etc/config/firewall` 或 dnsmasq 配置。

实现参考 [Mihomo TUN 配置](https://wiki.metacubex.one/config/inbound/tun/)、[OpenClash 服务脚本](https://github.com/vernesong/OpenClash/blob/master/luci-app-openclash/root/etc/init.d/openclash) 与 [firewall4 包含文件约定](https://git.openwrt.org/project/firewall4/tree/?path=root%2Fusr%2Fshare%2Fnftables.d%2FREADME)。

## 开发验证

在此插件目录执行：

```sh
python3 tests/backend_test.py
node tests/frontend_test.js
node tests/overrides_test.js
```

构建入口和 CI 说明见 [OpenWrt 客户端说明](../README.md)。后端验证使用隔离模拟核心和服务；配置覆写验证使用真实编译模块。构建后解包核对版本、依赖、脚本权限、JSON 与 JS 语法。另有真实 Mihomo 与 nftables 的隔离网络命名空间集成测试，覆盖 IPv4／IPv6 TCP、UDP、DNS、firewall4 重载、启动失败回滚和核心退出清理。这些检查不能替代真实路由器安装及网络实测。

配置编辑使用操作锁。若任务被强制终止，确认没有进行中的操作后可清理 `/var/lock/mclash-ui.lock`，或重启设备。

## 卸载

```sh
/etc/init.d/mclash stop
/etc/init.d/mclash disable
opkg remove luci-app-mclash
# APK 设备使用 apk del luci-app-mclash
/etc/init.d/rpcd restart
```

配置遵循设备的 conffile 保留策略；独立安装的核心和数据资源由用户管理。许可与第三方声明随安装包提供。

内核更新保持原服务状态：运行中先下载并校验，替换阶段停服，成功后恢复运行；停止时更新后保持停止。失败恢复旧内核，并检查服务恢复是否成功。启动／退出过渡状态不进行替换。

运行配置保持 YAML 原始换行，长行不自动折行，支持横向及纵向滚动并隐藏滚动条；可聚焦后用方向键滚动。

日志选择顺序为 `mclash.log`、`mihomo.log`、`update.log`，默认查看服务日志。服务与路由日志合并为 mclash.log，记录配置校验、启停、接管参数、实际策略路由摘要及失败原因，省略完整 nftables 规则及重复步骤。各文件在内存目录 /var/log 中，最大 512 KiB，达到上限保留最近约 256 KiB；可独立清空。内核日志仍遵循 error 等级，更新日志记录内核更新过程。

网页更新日志标签为 update.log，实际存储路径仍为 /var/log/mclash-update.log。

TUN 的 system/mixed 协议栈对 Mclash 网卡进入的 TCP 新连接设置专用 INPUT 放行，避免 firewall4 默认拒绝导致无法联网；规则随停止接管清理。

五页主导航采用当前 LuCI 主题原生标签样式，与 PassWall 一致。运行配置、日志、更新内核页面使用紧凑间距及当前 LuCI 主题原生按钮样式，代理面板卡片在运行时可用。状态卡片电脑四列、手机两列；代理面板卡片停止时禁用。

订阅拉取可取消，连接超时 5 秒，总下载超时 20 秒，外层 25 秒强制结束；失败后释放操作锁，失效锁可自动恢复。订阅元数据先名称后链接，控制标记只保留一行。上传内核校验失败时保留原内核和上传文件，并区分 YAML、资源及超时／内存错误；仅校验通过后替换。
