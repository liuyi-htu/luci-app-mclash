# 测试与检查

从本项目根目录执行。Python 检查可设置 `PYTHONDONTWRITEBYTECODE=1`，避免产生源码缓存。

| 文件 | 检查内容 |
| --- | --- |
| backend_test.py | 服务状态、配置保护、订阅下载与操作锁 |
| probe_test.py | 路由器连通性检测 |
| browser_probe_test.js | 浏览器检测与部分请求失败 |
| frontend_test.js | 页面交互、配置保护及服务状态 |
| overrides_test.js | 共享覆写逻辑及 OpenWrt 配置生成 |
| log_test.py | 日志大小限制与读取 |
| update_test.py | 内核更新、校验及回滚 |
| timeout_test.py | 无系统 timeout 依赖的超时终止、退出码及取消清理 |
| network_integration.py | 隔离网络命名空间中的真实接管测试 |
| package_check.py | SDK 产物版本、文件、权限、命名与收集 |

`build-openwrt.sh` 执行基础前后端及覆写检查，再检查两种 SDK 产物；真实内核更新及网络集成测试需要额外环境。网络测试所需变量见 [OpenWrt 说明](../../README.md)。

常用检查：

```sh
PYTHONDONTWRITEBYTECODE=1 python3 luci-app-mclash/tests/backend_test.py
node luci-app-mclash/tests/frontend_test.js
node luci-app-mclash/tests/browser_probe_test.js
node luci-app-mclash/tests/overrides_test.js
```

`package_check.py` 由构建脚本传入包源码、SDK 目录和目标类型，并将同名重建旧包归档到 `dist/archive/replaced/<版本-r构建号>/`。
