import 'dart:convert';
import 'package:yaml/yaml.dart';

const accessRulesPrefix = '# Mclash OpenWrt access-rules: ';

List<String> accessUserRules(String content) {
  final rules = List<String>.from((loadYaml(content) as Map)['rules'] as List? ?? []);
  for (final line in content.split('\n')) {
    if (!line.startsWith(accessRulesPrefix)) continue;
    for (final rule in List<String>.from(jsonDecode(line.substring(accessRulesPrefix.length)) as List)) {
      rules.remove(rule);
    }
    break;
  }
  return rules;
}

/// Cover an inclusive IPv4 interval with aligned CIDR blocks, without widening it.
List<String> accessCidrs(String source) {
  if (!source.contains('-')) return [source.contains('/') ? source : '$source/${source.contains(':') ? 128 : 32}'];
  int number(String ip) => ip.split('.').fold(0, (n, part) => n * 256 + int.parse(part));
  String address(int n) => [n ~/ 16777216, (n ~/ 65536) % 256, (n ~/ 256) % 256, n % 256].join('.');
  final ends = source.split('-');
  var start = number(ends[0]);
  final end = number(ends[1]), result = <String>[];
  while (start <= end) {
    var size = 1, prefix = 32;
    while (prefix > 0 && start % (size * 2) == 0 && size * 2 <= end - start + 1) {
      size *= 2;
      prefix--;
    }
    result.add('${address(start)}/$prefix');
    start += size;
  }
  return result;
}
