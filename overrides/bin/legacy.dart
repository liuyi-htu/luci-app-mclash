// Legacy markers are accepted only to migrate existing profiles.
String migrateLegacyConfig(String content) {
  content = content.replaceAll("# Mclash OpenWrt \u673a\u573a\u524d\u7f00: ", "# Mclash OpenWrt subscription-prefixes: ");
  content = content.replaceAll("# Mclash OpenWrt \u673a\u573a\u540d\u79f0: ", "# Mclash OpenWrt subscription-names: ");
  content = content.replaceAll("# Mclash OpenWrt \u673a\u573a\u7528\u91cf: ", "# Mclash OpenWrt subscription-usage: ");
  content = content.replaceAll("# Mclash OpenWrt \u8ba2\u9605\u94fe\u63a5: ", "# Mclash OpenWrt subscription-urls: ");
  content = content.replaceAll("# Mclash OpenWrt \u63a5\u7ba1: ", "# Mclash OpenWrt capture: ");
  content = content.replaceAll("# Mclash OpenWrt \u63a7\u5236: true", "# Mclash OpenWrt controller: true");
  content = content.replaceAll("# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ", "# Mclash group-filters: ");
  content = content.replaceAll("# Mclash \u4ee3\u7406\u7ec4 DIRECT: ", "# Mclash group-direct: ");
  content = content.replaceAll("# Mclash \u56fd\u5185\u6b63\u5219: ", "# Mclash domestic-filter: ");
  content = content.replaceAll("# Mclash \u56fd\u5916\u6b63\u5219: ", "# Mclash foreign-filter: ");
  content = content.replaceAll("# Mclash \u5168\u5c40\u94fe\u8def: ", "# Mclash global-chain: ");
  content = content.replaceAll("# Mclash \u524d\u7f6e\u94fe\u8def ", "# Mclash front-chain ");
  content = content.replaceAll("# Mclash \u540e\u7f6e\u94fe\u8def ", "# Mclash back-chain ");
  content = content.replaceAll("# Mclash \u624b\u52a8\u8282\u70b9: ", "# Mclash manual-nodes: ");
  content = content.replaceAll("# Mclash \u8282\u70b9\u94fe\u8def: ", "# Mclash node-chains: ");
  content = content.replaceAll("# Mclash \u8282\u70b9\u94fe\u8def ", "# Mclash node-chain ");
  content = content.replaceAll("# Mclash \u94fe\u5f0f\u8282\u70b9 ", "# Mclash chain ");
  content = content.replaceAll("# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ", "# Mclash chain-groups: ");
  content = content.replaceAll("# Mclash \u94fe\u8def\u8bbe\u7f6e: ", "# Mclash chain-settings: ");
  content = content.replaceAll("# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605", "# Mclash default subscription");
  content = content.replaceAll("# Mclash \u8ba2\u9605\u7528\u91cf: ", "# Mclash subscription-usage: ");
  content = content.replaceAll("# Mclash \u8ba2\u9605\u914d\u7f6e\u6a21\u677f", "# Mclash subscription configuration template");
  content = content.replaceAll("# Mclash \u4ee3\u7406\u7ec4\u300c", "# Mclash proxy group [");
  content = content.replaceAll("\ud83d\ude80 \u56fd\u5185", "\ud83d\ude80 Domestic");
  content = content.replaceAll("\ud83c\udf0d \u56fd\u5916", "\ud83c\udf0d Foreign");
  content = content.replaceAll("\ud83d\udd17 \u540e\u7f6e\u5165\u53e3", "\ud83d\udd17 Back-chain entry");
  content = content.replaceAll("\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9", "\ud83d\udd17 Proxy chain");
  return content;
}
