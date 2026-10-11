import 'dart:convert';
import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';

const networkPrefix = '# Mclash OpenWrt 接管: ';

String canonicalControllerMarker(String content, {bool force = false}) {
  const marker = '# Mclash OpenWrt 控制: true';
  var seen = false;
  final lines = content.split('\n').where((line) {
    if (line.trim() != marker) return true;
    if (seen) return false;
    seen = true;
    return true;
  }).toList();
  return force && !seen ? '$marker\n${lines.join('\n')}' : lines.join('\n');
}

Map<String, dynamic> networkOptions(String content) {
  for (final line in content.split('\n')) {
    if (line.startsWith(networkPrefix)) return checkedNetwork(jsonDecode(line.substring(networkPrefix.length)) as Map);
  }
  return checkedNetwork({'mode': 'none', 'interfaces': ['br-lan']});
}

int? ipv4Number(String value) {
  final parts = value.split('.');
  if (parts.length != 4 || parts.any((p) => !RegExp(r'^(0|[1-9][0-9]{0,2})$').hasMatch(p) || int.parse(p) > 255)) return null;
  return parts.fold<int>(0, (n, p) => n * 256 + int.parse(p));
}

bool validIpv6(String value) {
  if (!RegExp(r'^[0-9a-fA-F:]+$').hasMatch(value)) return false;
  final sides = value.split('::');
  if (sides.length > 2) return false;
  final parts = sides.expand((s) => s.isEmpty ? <String>[] : s.split(':')).toList();
  if (parts.any((p) => !RegExp(r'^[0-9a-fA-F]{1,4}$').hasMatch(p))) return false;
  return sides.length == 2 ? parts.length < 8 : parts.length == 8;
}

List<String> checkedAccess(Object? value) {
  final entries = List<String>.from(value as List? ?? []);
  if (entries.length > 64) throw const FormatException('访问控制最多 64 条');
  final result = <String>[];
  for (final entry in entries) {
    final text = entry.trim().toLowerCase();
    final range = text.split('-');
    var valid = false;
    if (range.length == 2) {
      final start = ipv4Number(range[0]), end = ipv4Number(range[1]);
      valid = start != null && end != null && start <= end;
    } else if (range.length == 1) {
      final parts = text.split('/');
      final v4 = ipv4Number(parts[0]) != null;
      final ip = v4 || validIpv6(parts[0]);
      final prefix = parts.length == 2 ? int.tryParse(parts[1]) : null;
      valid = ip && (parts.length == 1 || (parts.length == 2 && RegExp(r'^[0-9]{1,3}$').hasMatch(parts[1]) && prefix != null && prefix >= 0 && prefix <= (v4 ? 32 : 128)));
    }
    if (!valid) throw const FormatException('访问控制格式无效，请填写 IP、CIDR 网段或 IPv4 起止范围');
    if (!result.contains(text)) result.add(text);
  }
  return result;
}

Map<String, dynamic> checkedNetwork(Map args) {
  final mode = args['mode'] ?? 'none';
  final stack = args['stack'] ?? 'mixed';
  final interfaces = List<String>.from(args['interfaces'] ?? ['br-lan']);
  if (!['none', 'tun', 'tproxy'].contains(mode)) throw const FormatException('无效接管方式');
  if (!['system', 'gvisor', 'mixed'].contains(stack)) throw const FormatException('无效 TUN 协议栈');
  if (interfaces.isEmpty || interfaces.length > 16 || interfaces.toSet().length != interfaces.length || interfaces.any((name) => !RegExp(r'^[A-Za-z0-9_.-]{1,15}$').hasMatch(name) || ['lo', 'Mclash'].contains(name))) {
    throw const FormatException('请填写有效的局域网设备名称，不能选择 lo 或 Mclash');
  }
  for (final key in ['lan', 'router', 'ipv6']) {
    if (args[key] != null && args[key] is! bool) throw const FormatException('开关须为布尔值');
  }
  return {'mode': mode, 'interfaces': interfaces, 'lan': args['lan'] ?? true, 'access': checkedAccess(args['access']), 'router': args['router'] ?? true, 'ipv6': args['ipv6'] ?? false, 'stack': stack};
}

String applyNetwork(String content, Map args) {
  final opts = checkedNetwork(args);
  final mode = opts['mode'];
  final active = mode != 'none';
  final editor = YamlEditor(content.split('\n').where((line) => !line.startsWith(networkPrefix)).join('\n'));
  final parsed = loadYaml(content);
  if (parsed is! Map) throw const FormatException('配置须为 YAML 映射');
  final tun = <String, dynamic>{'enable': mode == 'tun'};
  if (mode == 'tun') {
    tun.addAll({'device': 'Mclash', 'stack': opts['stack'], 'auto-route': false, 'auto-redirect': false,
      'auto-detect-interface': true, 'mtu': 1500, 'dns-hijack': ['any:53', 'tcp://any:53']});
    if (opts['ipv6'] == true) tun['inet6-address'] = ['fdfe:dcba:9876::1/126'];
  }
  editor.update(['tun'], tun);
  editor.update(['tproxy-port'], mode == 'tproxy' ? 7893 : 0);
  if (editor.parseAt([]).value is Map && (editor.parseAt([]).value as Map).containsKey('routing-mark')) editor.remove(['routing-mark']);
  if (active) editor.update(['routing-mark'], 359); // 0x167: core egress bypass
  if (active) {
    editor.update(['allow-lan'], true);
    editor.update(['bind-address'], '*');
    editor.update(['ipv6'], opts['ipv6']);
    final oldDns = parsed['dns'];
    if (oldDns is! Map) editor.update(['dns'], <String, dynamic>{});
    editor.update(['dns', 'enable'], true);
    editor.update(['dns', 'listen'], opts['ipv6'] == true ? '[::]:1053' : '0.0.0.0:1053');
    editor.update(['dns', 'ipv6'], opts['ipv6']);
    if (oldDns is! Map || !oldDns.containsKey('default-nameserver')) {
      editor.update(['dns', 'default-nameserver'], ['223.5.5.5', '1.1.1.1']);
    }
    if (oldDns is! Map || !oldDns.containsKey('nameserver')) {
      editor.update(['dns', 'nameserver'], ['https://dns.alidns.com/dns-query', 'https://cloudflare-dns.com/dns-query']);
    }
    final controller = '${parsed['external-controller'] ?? '0.0.0.0:9097'}';
    final portMatch = RegExp(r':([0-9]+)$').firstMatch(controller);
    final port = int.tryParse(portMatch?.group(1) ?? '') ?? 9097;
    if (port < 1 || port > 65535) throw const FormatException('无效控制端口');
    final bind = portMatch == null ? '0.0.0.0' : controller.substring(0, portMatch.start);
    editor.update(['external-controller'], '$bind:$port');
    // Per-node routing marks defeat the core egress bypass and can create loops.
    final proxies = parsed['proxies'];
    if (proxies is List) {
      for (var i = 0; i < proxies.length; i++) {
        if (proxies[i] is Map && (proxies[i] as Map).containsKey('routing-mark')) editor.remove(['proxies', i, 'routing-mark']);
      }
    }
    final providers = parsed['proxy-providers'];
    if (providers is Map) {
      for (final entry in providers.entries) {
        if (entry.value is! Map) continue;
        final original = (entry.value as Map)['override'];
        final override = original is Map
            ? <String, dynamic>{for (final e in original.entries) '${e.key}': e.value}
            : <String, dynamic>{};
        override['routing-mark'] = 359;
        editor.update(['proxy-providers', entry.key, 'override'], override);
      }
    }
  }
  return canonicalControllerMarker('$networkPrefix${jsonEncode(opts)}\n$editor');
}

String applyController(String content, Map args) {
 final address = '${args['address'] ?? '0.0.0.0'}'.trim();
 final port = int.tryParse('${args['port']}');
 final ipv4 = address.split('.');
 final valid4 = ipv4.length == 4 && ipv4.every((part) => RegExp(r'^[0-9]{1,3}$').hasMatch(part) && int.parse(part) <= 255);
 final valid6 = address.contains(':') && RegExp(r'^[0-9a-fA-F:]{2,39}$').hasMatch(address);
 if (!valid4 && !valid6 && address != 'localhost') throw const FormatException('请填写有效的 IP 监听地址');
 if (port == null || port < 1 || port > 65535) throw const FormatException('控制端口须为 1–65535');
 final editor = YamlEditor(content.split('\n').where((line) => line.trim() != '# Mclash OpenWrt 控制: true').join('\n'));
 editor.update(['external-controller'], '${valid6 ? '[$address]' : address}:$port');
 return '# Mclash OpenWrt 控制: true\n$editor';
}
