import 'dart:convert';
import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';

const _hostPrefix = '# Mclash HTTP/WS Host: ';

String readSubscriptionHost(String content) {
  for (final line in content.split('\n')) {
    if (line.startsWith(_hostPrefix)) {
      return jsonDecode(line.substring(_hostPrefix.length)) as String;
    }
  }
  return '';
}

/// Updates only VMess HTTP/WS transport headers, preserving server, TLS and routing.
String editSubscriptionHost(String content, String value) {
  final host = value.trim();
  if (host.isEmpty || RegExp(r'[\s/\\?#]').hasMatch(host)) {
    throw const FormatException('Enter a Host domain or IP, optionally with a port; do not enter a URL');
  }
  final config = loadYaml(content) as YamlMap;
  final nodes = config['proxies'];
  if (nodes is! YamlList || nodes.isEmpty) {
    throw const FormatException('Configuration has no embedded nodes; update subscriptions first');
  }
  final editor = YamlEditor(content);
  for (var i = 0; i < nodes.length; i++) {
    final node = nodes[i];
    if (node is! YamlMap || node['type'] != 'vmess') continue;
    final network = node['network'];
    if (network != 'http' && network != 'ws') continue;
    final key = network == 'http' ? 'http-opts' : 'ws-opts';
    final options = Map<dynamic, dynamic>.from(node[key] as Map? ?? {});
    final headers =
        Map<dynamic, dynamic>.from(options['headers'] as Map? ?? {});
    headers.removeWhere((key, _) => key.toString().toLowerCase() == 'host');
    headers['Host'] = network == 'http' ? [host] : host;
    options['headers'] = headers;
    editor.update(['proxies', i, key], options);
  }
  final body = editor
      .toString()
      .split('\n')
      .where((line) => !line.startsWith(_hostPrefix))
      .join('\n');
  return '$_hostPrefix${jsonEncode(host)}\n$body';
}
