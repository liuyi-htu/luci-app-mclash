#!/usr/bin/env bash
set -euo pipefail
export PYTHONDONTWRITEBYTECODE=1
client_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
target="${1:-all}"
if [[ "$target" == all ]]; then
  "$0" arm64
  "$0" x86_64
  exit 0
fi
case "$target" in
  arm64)
    sdk_base=https://downloads.immortalwrt.org/releases/25.12.1/targets/mediatek/filogic
    archive=immortalwrt-sdk-25.12.1-mediatek-filogic_gcc-14.3.0_musl.Linux-x86_64.tar.zst
    sdk_sha=1dede7c6afa3184eda37511e47a628f6674d2da2ce99a65f788f910ec57c9e5a
    ;;
  x86_64)
    sdk_base=https://downloads.immortalwrt.org/releases/24.10.4/targets/x86/64
    archive=immortalwrt-sdk-24.10.4-x86-64_gcc-13.3.0_musl.Linux-x86_64.tar.zst
    sdk_sha=4f5de9da8674d4acdb6bd2afe594ea079c9983690d9e2eb1661a99b8fcd7d270
    ;;
  *) echo 'Usage: build-openwrt.sh [all|arm64|x86_64]' >&2; exit 1 ;;
esac
read -r default_version < "$client_root/VERSION"
app_version="${APP_VERSION:-${default_version%+*}}"
build_number="${BUILD_NUMBER:-${default_version##*+}}"
[[ "$app_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ && "$build_number" =~ ^[1-9][0-9]*$ ]] || {
  echo 'Invalid version or build number' >&2; exit 1;
}
cache_root="${MCLASH_OPENWRT_CACHE:-$client_root/.build-cache}"
mkdir -p "$cache_root" "$client_root/dist" "$client_root/.build-logs"
cache_root="$(realpath "$cache_root")"
sdk="${MCLASH_SDK_DIR:-$cache_root/sdk-$target}"
if [[ ! -f "$sdk/rules.mk" ]]; then
  [[ -z "${MCLASH_SDK_DIR:-}" ]] || { echo 'MCLASH_SDK_DIR does not contain an SDK' >&2; exit 1; }
  curl --fail --location --retry 3 --proto '=https' --proto-redir '=https' "$sdk_base/$archive" -o "$cache_root/$archive.partial"
  printf '%s  %s\n' "$sdk_sha" "$cache_root/$archive.partial" | sha256sum -c -
  mkdir -p "$sdk"
  tar --zstd -xf "$cache_root/$archive.partial" --strip-components=1 -C "$sdk"
  rm -f "$cache_root/$archive.partial"
fi
sdk="$(realpath "$sdk")"
# A supplied SDK is writable build infrastructure. Never point it at a read-only
# checkout or another client's SDK; use a dedicated copy for this client.
package_dir="$sdk/package/luci-app-mclash"
[[ ! -L "$package_dir" ]] || { echo 'Package directory cannot be a symlink' >&2; exit 1; }
mkdir -p "$package_dir"
[[ "$(realpath "$package_dir")" == "$sdk/package/luci-app-mclash" ]] || exit 1
python3 "$client_root/luci-app-mclash/tests/backend_test.py"
python3 "$client_root/luci-app-mclash/tests/timeout_test.py"
python3 "$client_root/luci-app-mclash/tests/init_test.py"
python3 "$client_root/luci-app-mclash/tests/probe_test.py"
node "$client_root/luci-app-mclash/tests/frontend_test.js"
node "$client_root/luci-app-mclash/tests/management_ui_test.js"
node "$client_root/luci-app-mclash/tests/browser_probe_test.js"
node "$client_root/luci-app-mclash/tests/overrides_test.js"
rsync -a --delete --exclude dist --exclude .build-logs --exclude tests --exclude __pycache__ \
  "$client_root/luci-app-mclash/" "$package_dir/"
sed -i "s/^PKG_VERSION:=.*/PKG_VERSION:=$app_version/;s/^PKG_RELEASE:=.*/PKG_RELEASE:=$build_number/" "$package_dir/Makefile"
(
  cd "$sdk"
  config_backup="$(mktemp "$cache_root/config-$target.XXXXXX")"
  had_config=0
  if [[ -f .config ]]; then cp .config "$config_backup"; had_config=1; fi
  restore_config() {
    if [[ "$had_config" == 1 ]]; then cp "$config_backup" .config; else rm -f .config; fi
    rm -f "$config_backup"
  }
  trap restore_config EXIT
  if [[ "${MCLASH_PACKAGE_ONLY:-0}" != 1 ]]; then
    ./scripts/feeds update -a
    ./scripts/feeds install -a
  fi
  [[ -f feeds/luci/luci.mk ]] || { echo 'SDK LuCI feed is missing' >&2; exit 1; }
  touch .config
  sed -i '/^CONFIG_PACKAGE_luci-app-mclash=/d;/^# CONFIG_PACKAGE_luci-app-mclash is not set$/d' .config
  printf '\nCONFIG_PACKAGE_luci-app-mclash=m\n' >> .config
  make defconfig
  make package/luci-app-mclash/clean V=s
  if [[ "${MCLASH_PACKAGE_ONLY:-0}" == 1 ]]; then
    make -C "$package_dir" compile TOPDIR="$sdk" V=s -j"${MCLASH_BUILD_JOBS:-2}"
  else
    make package/luci-app-mclash/compile V=s -j"${MCLASH_BUILD_JOBS:-2}"
  fi
)
export MCLASH_PACKAGE_VERSION="$app_version-r$build_number"
export MCLASH_OUTPUT_DIR="$client_root/dist"
export MCLASH_METADATA_DIR="$client_root/.build-logs"
python3 "$client_root/luci-app-mclash/tests/package_check.py" "$client_root/luci-app-mclash" "$sdk" "$target"
