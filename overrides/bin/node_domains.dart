import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';
import 'network.dart' show ipv4Number, validIpv6;

bool nodeDomain(String value) => value.length <= 253 &&
    RegExp(r'^[A-Za-z0-9][A-Za-z0-9.-]*$').hasMatch(value) && ipv4Number(value) == null;

List<String> nodeDomains(String content) {
  final root = loadYaml(content);
  if (root is! Map || root['proxies'] is! List) return [];
  return {for (final node in root['proxies'] as List)
    if (node is Map && node['server'] is String && nodeDomain(node['server'] as String)) node['server'] as String}.take(256).toList();
}

List<String> nodeFakeIpRanges(String content) {
  final root = loadYaml(content);
  final dns = root is Map ? root['dns'] : null;
  if (dns is! Map || dns['enhanced-mode'] != 'fake-ip') return [];
  return [
    '${dns['fake-ip-range'] ?? '198.18.0.1/16'}',
    '${dns['fake-ip-range6'] ?? 'fc00::/18'}',
  ];
}

bool nodeAddressInRange(String address, String range) {
  final parts = range.split('/');
  if (parts.length != 2 || address.contains(':') != parts[0].contains(':')) return false;
  final bits = address.contains(':') ? 128 : 32, prefix = int.tryParse(parts[1]);
  if (prefix == null || prefix < 0 || prefix > bits) return false;
  BigInt? number(String value) {
    final v4 = ipv4Number(value);
    if (v4 != null) return BigInt.from(v4);
    if (!validIpv6(value)) return null;
    final sides = value.split('::');
    final left = sides[0].isEmpty ? <String>[] : sides[0].split(':');
    final right = sides.length == 1 || sides[1].isEmpty ? <String>[] : sides[1].split(':');
    return [...left, ...List.filled(8 - left.length - right.length, '0'), ...right]
        .fold<BigInt>(BigInt.zero, (total, part) => (total << 16) + BigInt.parse(part, radix: 16));
  }
  final value = number(address), base = number(parts[0]);
  return value != null && base != null && value >> (bits - prefix) == base >> (bits - prefix);
}

/// Only update a working copy. The caller retains original node data in its cache.
String resolveNodeDomains(String content, Map addresses, {List<String> fakeIpRanges = const []}) {
  final root = loadYaml(content);
  if (root is! Map || root['proxies'] is! List) return content;
  final nodes = root['proxies'] as List, editor = YamlEditor(content);
  for (var i = 0; i < nodes.length; i++) {
    final node = nodes[i];
    if (node is! Map) continue;
    final host = node['server'], address = addresses[host];
    if (host is! String || address is! String ||
        (ipv4Number(address) == null && !validIpv6(address))) continue;
    if (['198.18.0.0/15', ...fakeIpRanges].any((range) => nodeAddressInRange(address, range))) continue;
    final type = node['type']?.toString().toLowerCase();
    if (node['tls'] == true || ['trojan', 'hysteria', 'hysteria2', 'tuic', 'anytls'].contains(type)) {
      final key = ['vmess', 'vless'].contains(type) ? 'servername' : 'sni';
      if (node[key] == null || node[key] == '') editor.update(['proxies', i, key], host);
    }
    if (node['network'] == 'ws') {
      final original = node['ws-opts'];
      final opts = original is Map ? Map<String, dynamic>.from(original) : <String, dynamic>{};
      final headers = opts['headers'] is Map ? Map<String, dynamic>.from(opts['headers'] as Map) : <String, dynamic>{};
      if (!headers.keys.any((key) => key.toLowerCase() == 'host')) headers['Host'] = host;
      opts['headers'] = headers;
      editor.update(['proxies', i, 'ws-opts'], opts);
    }
    editor.update(['proxies', i, 'server'], address);
  }
  return editor.toString();
}
