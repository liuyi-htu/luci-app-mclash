# OpenWrt

Mclash 的 LuCI 客户端。使用说明见 [插件说明](luci-app-mclash/README.md)。五个页面为基础设置、节点与规则、运行配置、日志和更新内核；代理面板通过基础设置中的卡片跳转打开，六项机场覆写复用现有客户端的配置处理逻辑。

本目录包含独立 OpenWrt 客户端的全部源码、构建脚本及配置处理依赖。

## 目录结构

```text
luci-app-mclash/
├── README.md               # 客户端结构、构建与验证说明
├── VERSION                 # 默认应用版本与构建号
├── build-overrides.sh      # 编译配置处理模块，生成 JS 与初始 YAML
├── build-openwrt.sh        # SDK 构建、包检查与产物收集入口
├── overrides/              # Dart 配置处理源码与锁定依赖，构建时需要
│   ├── bin/                # 配置桥接与 OpenWrt 网络配置逻辑
│   ├── lib/shared/         # 从 Mclash 迁入的共享 Dart 依赖
│   ├── default-config.yaml # 初始配置模板
│   ├── pubspec.yaml
│   └── pubspec.lock
├── luci-app-mclash/        # 标准 OpenWrt/LuCI 软件包源码
│   ├── Makefile            # 包元数据、依赖与安装规则
│   ├── htdocs/             # LuCI 页面、配置处理 JS、图标与 Zashboard
│   ├── root/               # 安装到路由器的服务、辅助脚本、配置与 ACL
│   └── tests/              # 前后端、覆写、更新、网络与交付包检查
├── dist/                   # 当前交付安装包及同名 SHA256（本地生成）
│   ├── README.md           # 当前包命名、用途和校验说明
│   └── archive/            # 本地历史安装包
│       ├── legacy/<版本-r构建号>/    # 旧命名安装包及同名校验文件
│       └── replaced/<版本-r构建号>/  # 同名重建前的安装包，以摘要区分
└── .build-logs/             # 包元数据与验证结果（本地生成）
```

`dist/` 与 `.build-logs/` 已忽略，不属于交付源码；历史包保留在归档目录中。SDK、下载缓存和 Dart 编译临时副本放在本项目专用的 `.build-cache/`，作为忽略的本地构建缓存。`overrides/` 是源码，`luci-app-mclash/htdocs/luci-static/resources/mclash/overrides.js` 是随包提供的编译结果，两者都需要保留，以支持后续修改及独立项目重建。

## 构建

需要 Linux x86_64、Dart、Node.js、Python 3、BusyBox、curl、rsync、zstd 和 OpenWrt SDK 构建依赖。使用项目的 Flutter 所附 Dart 即可。

在本项目根目录执行：

```sh
./build-overrides.sh
./build-openwrt.sh all
# 也可只构建 arm64 或 x86_64
```

第一步在专用缓存副本中安装 Dart 依赖，将现有 Dart 配置模块编译到插件的 `mclash/overrides.js`，从共享默认配置生成 `mclash/template.js`。修改被复用的模块后需要重新执行。已编译文件随源码提供，SDK 构建本身不需要 Dart。

第二步下载并核对固定 SDK 的 SHA256，更新依赖并构建。ARM64 使用 ImmortalWrt 25.12.1 filogic SDK，生成 APK；x86_64 使用 24.10.4 SDK，生成 IPK。默认缓存位于本项目的 `.build-cache`，产物及 SHA256 位于 `dist/`，检查记录位于 `.build-logs/`。

版本默认读取 `VERSION`；可用 `APP_VERSION` 和 `BUILD_NUMBER` 覆盖。`MCLASH_OPENWRT_CACHE` 指定缓存目录，`MCLASH_SDK_DIR` 指定本客户端专用的可写 SDK，`MCLASH_PACKAGE_ONLY=1` 用于已有完整编译工具但缺少依赖源码的缓存 SDK，仅直接打包插件。安装时仍需由软件源解析依赖。

## 独立项目

OpenWrt 客户端已从 Mclash 仓库迁出。构建所需共享 Dart 文件位于 `overrides/lib/shared/`，默认 YAML 位于 `overrides/default-config.yaml`；不依赖旧 Mclash 源码目录。这里只进行本地构建，原 Mclash 仓库的 OpenWrt Actions 路径不再适用于此目录。

## 接管集成验证

`luci-app-mclash/tests/network_integration.py` 使用 Linux 用户和网络命名空间，创建独立 LAN／WAN veth、TCP／UDP／DNS 测试服务，并启动真实 Mihomo。所有 nftables 和路由操作仅发生在隔离网络命名空间中。需要允许 `unshare -Urn`、`nsenter`，并提供原生 nftables、ip、BusyBox 与 Node.js。

```sh
MCLASH_TEST_CORE=/path/to/verified/mihomo \
MCLASH_TEST_JSHN=/path/to/sdk/staging_dir/host \
python3 luci-app-mclash/tests/network_integration.py
```

`MCLASH_TEST_JSHN` 目录须提供可运行的原生 `bin/jshn` 和 `share/libubox/jshn.sh`。不设置这些变量时跳过真实网络测试。SDK 打包会执行后端、前端和真实编译覆写模块的检查，并验证交付包的全部脚本。

状态卡片点击后查询外部出口 IP、地区及对应站点 HTTPS 请求耗时，检测目标为 Telegram、OpenAI（chatgpt.com）、阿里、谷歌、GitHub 和 YouTube。出口信息分别由国内／国外 IP 查询接口提供，自定义分流规则可能使查询接口与目标站点使用不同出口。检测可选择路由器或浏览器网络，不显式经当前混合端口及路由规则查询；设备自身的透明代理、VPN 或浏览器代理仍可能影响出口；部分失败会保留已成功的 IP 或延迟结果。

安装包采用 OpenWrt 标准文件名：`luci-app-mclash-<版本>-r<构建号>.apk`、`luci-app-mclash_<版本>-r<构建号>_all.ipk`，对应 `.sha256` 文件内记录同名产物。

测试入口与职责见 [测试说明](luci-app-mclash/tests/README.md)，安装包分类和校验见 [产物说明](dist/README.md)。构建入口禁用 Python 字节码缓存写入，源码目录不保存 `__pycache__/`。
