# 配置处理模块

此目录保存 Dart 配置处理源码及锁定依赖。

- `bin/main.dart`：导出浏览器接口，处理节点、订阅、Host、链式代理、代理组与规则。
- `bin/network.dart`：生成 OpenWrt 的 TUN／TProxy、代理范围、DNS 与路由配置。
- `lib/shared/`：配置解析与覆写逻辑。
- `default-config.yaml`：初始配置模板。
- `pubspec.yaml`、`pubspec.lock`：Dart 依赖声明与版本锁定。

从项目根目录运行 `./build-overrides.sh`，生成软件包中的 `overrides.js`、`template.js` 和 `root/etc/mclash/config.yaml`。编译在 `.build-cache/` 中进行。

源码已包含编译后的 JS，正常 SDK 打包和路由器运行无需 Dart；修改此模块后须重新编译。完整构建步骤见 [项目首页](../README.md)。
