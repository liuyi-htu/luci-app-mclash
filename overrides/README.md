# 配置处理源码

此目录是 OpenWrt 客户端的 Dart 配置处理模块，不是缓存。

- `bin/main.dart`：导出浏览器调用接口，复用 Android／Windows 的节点、订阅、Host、链式代理、代理组和规则处理代码。
- `bin/network.dart`：读取和生成 OpenWrt 接管配置，包括 TUN／TProxy、局域网接口、代理范围、DNS 与路由标记。
- `pubspec.yaml`、`pubspec.lock`：声明并锁定 Dart 依赖。

从本项目根目录运行 `./build-overrides.sh`，在本项目专用缓存的临时副本中安装依赖并编译。输出写入 LuCI 包的 `htdocs/luci-static/resources/mclash/overrides.js`、`template.js` 和 `root/etc/mclash/config.yaml`，锁定依赖同步回本目录。

已有 JS 的 SDK 打包和路由器运行不需要 Dart；修改配置逻辑后重新生成 JS，都依赖本目录。请保留源码与编译结果。完整结构与构建说明见 [OpenWrt 说明](../README.md)。

共享依赖已复制到 `lib/shared/android/`、`lib/shared/windows/`；初始模板为 `default-config.yaml`。构建只读取本项目文件。
