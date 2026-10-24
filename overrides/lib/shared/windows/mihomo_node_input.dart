import 'dart:collection';
import 'dart:convert';
import 'package:yaml/yaml.dart';

const maxNodeInputBytes = 8 * 1024 * 1024;

/// Expand YAML merges before editing: package:yaml resolves aliases but leaves <<.
List<Map<String, dynamic>> parseMihomoNodes(String input) {
  if (input.length > maxNodeInputBytes ||
      utf8.encode(input).length > maxNodeInputBytes) {
    throw const FormatException('Node input exceeds 8 MiB');
  }
  final active = HashSet<Object>.identity();
  var expanded = 0;
  dynamic expand(dynamic value, [int depth = 0]) {
    if (++expanded > 200000 || depth > 100) {
      throw const FormatException('Node input is too deeply nested or too large after expansion');
    }
    if (value is! Map && value is! List) return value;
    if (!active.add(value as Object)) {
      throw const FormatException('Node YAML contains a circular reference');
    }
    try {
      if (value is List) {
        return [for (final item in value) expand(item, depth + 1)];
      }
      final map = value as Map;
      final result = <String, dynamic>{};
      if (map.containsKey('<<')) {
        final merged = expand(map['<<'], depth + 1);
        final sources = merged is List ? merged : [merged];
        for (final source in sources) {
          if (source is! Map<String, dynamic>) {
            throw const FormatException('YAML merge key << must reference a map or list of maps');
          }
          for (final entry in source.entries) {
            result.putIfAbsent(entry.key, () => entry.value);
          }
        }
      }
      for (final entry in map.entries) {
        if (entry.key == '<<') continue;
        if (entry.key is! String) {
          throw const FormatException('Node YAML field names must be strings');
        }
        result[entry.key as String] = expand(entry.value, depth + 1);
      }
      return result;
    } finally {
      active.remove(value);
    }
  }

  final nodes = <Map<String, dynamic>>[];
  try {
    for (final document
        in loadYamlDocuments(input.replaceFirst(RegExp(r'^\uFEFF'), ''))) {
      final root = document.contents.value;
      final dynamic source;
      if (root is Map && root.containsKey('proxies')) {
        source = root['proxies'];
        if (source is! List) {
          throw const FormatException('proxies must be a node list');
        }
      } else {
        source = root;
      }
      final resolved = expand(source);
      if (resolved == null) continue;
      for (final item in resolved is List ? resolved : [resolved]) {
        if (item is! Map<String, dynamic> ||
            item['name'] is! String ||
            (item['name'] as String).trim().isEmpty ||
            item['type'] is! String ||
            (item['type'] as String).trim().isEmpty) {
          throw const FormatException('Each Mihomo node requires a nonempty name and type');
        }
        // No protocol whitelist: preserve every protocol-specific field.
        nodes.add(item);
      }
    }
  } on YamlException {
    // YAML diagnostics include source lines, which can contain credentials.
    throw const FormatException('Invalid Mihomo YAML; include anchor definitions when using aliases');
  }
  if (nodes.isEmpty) throw const FormatException('No Mihomo nodes found');
  final names = <String>{};
  for (final node in nodes) {
    if (!names.add(node['name'] as String)) {
      throw const FormatException('Duplicate node names in import; use unique names first');
    }
  }
  return nodes;
}
