include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-mclash
PKG_VERSION:=2.0.0
PKG_RELEASE:=1
PKG_PO_VERSION:=$(PKG_VERSION)-r$(PKG_RELEASE)
PKG_LICENSE:=GPL-3.0-only Apache-2.0 MIT

LUCI_TITLE:=Mclash Mihomo manager
LUCI_DEPENDS:=+luci-base +rpcd-mod-file +jsonfilter +jshn +curl +ca-bundle +firewall4 +nftables-json +ip-full +kmod-tun +kmod-nft-tproxy
LUCI_PKGARCH:=all

define Package/luci-app-mclash/conffiles
/etc/mclash/config.yaml
/etc/mclash/GeoIP.dat
/etc/mclash/GeoSite.dat
endef

define Package/luci-app-mclash/prerm
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] && exit 0
/etc/init.d/mclash stop
/etc/init.d/mclash disable
exit 0
endef

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - LuCI package discovery for OpenWrt SDK
