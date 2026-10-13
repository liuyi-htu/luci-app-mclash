import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';

Map<String, Map<String, dynamic>> configRuleProviders(String content) {
  final config = loadYaml(content);
  final providers = config is Map ? config['rule-providers'] : null;
  if (providers == null) return {};
  if (providers is! Map) throw const FormatException('Rule provider configuration must be a mapping');
  dynamic plain(dynamic value) {
    if (value is Map) {
      return {
        for (final entry in value.entries) '${entry.key}': plain(entry.value)
      };
    }
    if (value is List) return value.map(plain).toList();
    return value;
  }

  final result = <String, Map<String, dynamic>>{};
  for (final entry in providers.entries) {
    if (entry.key is! String || entry.value is! Map) {
      throw const FormatException('Invalid rule provider name or content');
    }
    result[entry.key as String] =
        Map<String, dynamic>.from(plain(entry.value) as Map);
  }
  return result;
}

RegExp _reference(String name) =>
    RegExp('(^|[,(])\\s*RULE-SET\\s*,\\s*${RegExp.escape(name)}\\s*(?=[,)])');

Iterable<String> _rules(dynamic config) sync* {
  for (final rule in config['rules'] as List? ?? []) {
    if (rule is String) yield rule;
  }
  for (final rules in (config['sub-rules'] as Map? ?? {}).values) {
    for (final rule in rules as List? ?? []) {
      if (rule is String) yield rule;
    }
  }
}

String updateConfigRuleProvider(
    String content, String name, Map<String, dynamic> provider,
    {String? oldName}) {
  name = name.trim();
  if (name.isEmpty || RegExp(r'[,()\r\n]').hasMatch(name)) {
    throw const FormatException('Name must not be empty or contain commas, brackets or newlines');
  }
  final providers = configRuleProviders(content);
  if (oldName != null && !providers.containsKey(oldName)) {
    throw const FormatException('Original rule provider does not exist');
  }
  if (name != oldName && providers.containsKey(name)) {
    throw const FormatException('Rule provider name already exists');
  }
  final type = provider['type'];
  final behavior = provider['behavior'];
  final format = provider['format'] ?? 'yaml';
  if (!['http', 'file', 'inline'].contains(type) ||
      !['domain', 'ipcidr', 'classical'].contains(behavior) ||
      !['yaml', 'text', 'mrs'].contains(format)) {
    throw const FormatException('Select a valid source, behavior and format');
  }
  if (format == 'mrs' && (behavior == 'classical' || type == 'inline')) {
    throw const FormatException('MRS only supports HTTP or file providers with domain / ipcidr behavior');
  }
  if (type == 'http') {
    final url = Uri.tryParse('${provider['url'] ?? ''}');
    if (url == null ||
        !['http', 'https'].contains(url.scheme) ||
        url.host.isEmpty) {
      throw const FormatException('Enter a valid HTTP / HTTPS download URL');
    }
    final interval = provider['interval'];
    if (interval != null && (interval is! int || interval < 0)) {
      throw const FormatException('Update interval must be a non-negative integer');
    }
  }
  final path = '${provider['path'] ?? ''}'.trim();
  if (type == 'file' && path.isEmpty) throw const FormatException('Enter a local file path');
  if (path.isNotEmpty &&
      providers.entries.any(
          (entry) => entry.key != oldName && entry.value['path'] == path)) {
    throw const FormatException('Rule provider path is already in use');
  }
  if (type == 'inline') {
    final payload = provider['payload'];
    if (payload is! List ||
        payload.isEmpty ||
        payload.any((value) => value is! String || value.trim().isEmpty)) {
      throw const FormatException('Enter inline rules, one per line');
    }
  }
  final next = <String, dynamic>{};
  for (final entry in providers.entries) {
    next[entry.key == oldName ? name : entry.key] =
        entry.key == oldName ? provider : entry.value;
  }
  if (oldName == null) next[name] = provider;
  final editor = YamlEditor(content)..update(['rule-providers'], next);
  if (oldName != null && oldName != name) {
    final config = loadYaml(content) as Map;
    String rename(String rule) => rule.replaceAllMapped(
        _reference(oldName), (match) => '${match[1]}RULE-SET,$name');
    if (config['rules'] is List) {
      editor.update(['rules'],
          [for (final rule in config['rules']) rename(rule as String)]);
    }
    final subRules = config['sub-rules'];
    if (subRules is Map) {
      for (final entry in subRules.entries) {
        editor.update(['sub-rules', entry.key],
            [for (final rule in entry.value as List) rename(rule as String)]);
      }
    }
  }
  return editor.toString();
}

String deleteConfigRuleProvider(String content, String name) {
  final config = loadYaml(content) as Map;
  if (_rules(config).any((rule) => _reference(name).hasMatch(rule))) {
    throw const FormatException('This provider is still referenced; edit or delete the corresponding RULE-SET rules first');
  }
  final providers = configRuleProviders(content)..remove(name);
  return (YamlEditor(content)..update(['rule-providers'], providers))
      .toString();
}
