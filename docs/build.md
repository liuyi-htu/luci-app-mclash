# Build instructions

## Build into firmware

Prepare matching OpenWrt/ImmortalWrt sources and a Linux build environment. From the firmware source directory:

```sh
./scripts/feeds update -a
./scripts/feeds install -a
mclash_source="$(mktemp -d)"
git clone --depth 1 https://github.com/liuyi-htu/luci-app-mclash.git "$mclash_source"
mkdir -p package/luci-app-mclash
cp -a "$mclash_source/luci-app-mclash/." package/luci-app-mclash/
make menuconfig
```

Select **LuCI → Applications → luci-app-mclash** (`<*>` for firmware or `<M>` for a separate package). Select the Simplified Chinese LuCI language to build the optional translation package. Remove duplicate package sources if the feeds already provide a package with the same name.

```sh
make defconfig
make -j"$(nproc)"
# Or build only the application:
make package/luci-app-mclash/compile V=s -j"$(nproc)"
```

Firmware is written to `bin/targets/`, packages to `bin/packages/`. Use `-j1 V=s` to diagnose build failures. See the [OpenWrt build instructions](https://github.com/openwrt/openwrt/blob/main/README.md).

On the first boot of a firmware image, Mclash's defaults script enables the service for automatic startup. If enablement fails, the script remains available for retry. Install the Mihomo core through the plugin before running the proxy.

## Build with SDKs

Install the OpenWrt SDK build dependencies plus Node.js, Python 3, BusyBox, curl, rsync and zstd on Linux x86_64:

```sh
git clone https://github.com/liuyi-htu/luci-app-mclash.git
cd luci-app-mclash
./build-openwrt.sh arm64
./build-openwrt.sh x86_64
# Both SDKs: ./build-openwrt.sh all
```

Both builds also produce a separate `luci-i18n-mclash-zh-cn` package and checksum. Install that package alongside the main package to enable Chinese UI translations.

The pinned arm64 SDK is ImmortalWrt 25.12.1 filogic and produces APK; the x86_64 SDK is ImmortalWrt 24.10.4 and produces IPK. These names describe the SDK, not a bundled Mihomo architecture. Use a matching SDK or firmware source for other firmware releases.

Packages and `.sha256` files are stored in `dist/`, logs in `.build-logs/` and caches in `.build-cache/`.

| Variable | Purpose |
| --- | --- |
| `APP_VERSION`, `BUILD_NUMBER` | Override the version/build in `VERSION` |
| `MCLASH_OPENWRT_CACHE` | SDK and download cache directory |
| `MCLASH_SDK_DIR` | Existing writable SDK matching the firmware |

Compiled configuration JavaScript is included. Dart is only needed after changing `overrides/`: install a compatible Dart SDK and run `./build-overrides.sh` before packaging.
