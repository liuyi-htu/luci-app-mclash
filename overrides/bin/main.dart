import 'dart:convert';
import 'network.dart';
import 'legacy.dart';
import 'dart:js_interop';
import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';
import '../lib/shared/android/node_link.dart';
import '../lib/shared/android/proxy_chain.dart';
import '../lib/shared/android/config_management.dart';
import '../lib/shared/android/rule_provider_management.dart';
import '../lib/shared/android/subscription_filter.dart';
import '../lib/shared/android/subscription_host.dart';
import '../lib/shared/windows/subscription_config.dart';

@JS('mclashOverrideCall')
external set exportedCall(JSFunction value);

Object? plain(Object? value, [int depth = 0]) {
  if (depth > 64) throw const FormatException('Configuration nesting is too deep');
  if (value is Map) {
    return {for (final entry in value.entries) '${entry.key}': plain(entry.value, depth + 1)};
  }
  if (value is List) return value.map((item) => plain(item, depth + 1)).toList();
  return value;
}

String normalize(String content) {
  final comments = content.split('\n').where((line) => line.startsWith('# Mclash ')).join('\n');
  final editor = YamlEditor('')..update([], plain(loadYaml(content)));
  return '${comments.isEmpty ? '' : '$comments\n'}$editor';
}

String handle(String action, String content, String payload, {bool normalized = false}) {
  try {
    content = migrateLegacyConfig(content);
    final args = jsonDecode(migrateLegacyConfig(payload)) as Map<String, dynamic>;
    if (args['template'] is String) args['template'] = migrateLegacyConfig(args['template'] as String);
    Object? result;
    switch (action) {
      case 'summary':
        final config = loadYaml(content) as Map;
        result = {
          'network': networkOptions(content),
          'dnsYaml': (YamlEditor('')..update([], {if (config['dns'] is Map) for (final entry in (config['dns'] as Map).entries) if (!['enable', 'listen', 'ipv6'].contains(entry.key)) '${entry.key}': plain(entry.value)})).toString(),
          'controller': config['external-controller'] ?? '',
          'secret': config['secret'] ?? '',
          'manualNodes': savedManualNodeNames(content),
          'nodes': savedProxyNodeNames(content),
          'host': readSubscriptionHost(content),
          'chains': readProxyChainSets(content),
          'nextChainId': nextProxyChainSetId(content),
          'groups': configGroups(content),
          'managedGroups': readProxyChainGroups(content).keys.toList(),
          'filters': readSubscriptionFilters(content),
          'direct': readGroupDirectOptions(content),
          'providers': configRuleProviders(content),
          'rules': configRules(content),
          'policies': configPolicies(content),
          'actions': configActionOrder(content),
        };
      case 'controller':
        result = applyController(content, args);
      case 'network':
        result = applyNetwork(content, args);
      case 'dns':
        final dns = loadYaml(args['yaml'] as String);
        if (dns is! Map) {
          throw const FormatException('DNS configuration must be a YAML mapping');
        }
        final previousDns = (loadYaml(content) as Map)['dns'];
        final nextDns = Map<String, dynamic>.from(plain(dns) as Map);
        for (final key in ['enable', 'listen', 'ipv6']) {
          nextDns.remove(key);
          if (previousDns is Map && previousDns.containsKey(key)) nextDns[key] = plain(previousDns[key]);
        }
        final editor = YamlEditor(content);
        editor.update(['dns'], nextDns);
        result = editor.toString();
      case 'addNode':
        result = addNodeLink(content, args['link'] as String);
      case 'deleteNode':
        result = deleteManualNode(content, args['name'] as String);
      case 'reorderNodes':
        result = reorderManualNodes(content, List<String>.from(args['names']));
      case 'host':
        result = editSubscriptionHost(content, args['host'] as String);
      case 'chain':
        result = setProxyChainSet(content, args['id'] as String,
            List<String>.from(args['selected']),
            prepend: args['prepend'] as bool,
            targets: List<String>.from(args['targets']));
      case 'group':
        result = updateConfigGroup(content,
            Map<String, dynamic>.from(args['group']),
            oldName: args['oldName'] as String?,
            filter: args['filter'] as String?,
            includeDirect: args['includeDirect'] as bool?);
      case 'deleteGroup':
        result = deleteConfigGroup(content, args['name'] as String);
      case 'reorderGroups':
        result = reorderConfigGroups(content, List<String>.from(args['names']));
      case 'provider':
        result = updateConfigRuleProvider(content, args['name'] as String,
            Map<String, dynamic>.from(args['provider']),
            oldName: args['oldName'] as String?);
      case 'deleteProvider':
        result = deleteConfigRuleProvider(content, args['name'] as String);
      case 'rules':
        result = updateConfigRules(content, List<String>.from(args['rules']));
      case 'subscription':
        result = buildSubscriptionConfig(args['template'] as String,
            mergeSubscriptionSources(List<String>.from(args['sources']), prefixes: args['prefixes'] == null ? null : List<String>.from(args['prefixes'])),
            previousConfig: args['refresh'] == true ? content : null, allowEmpty: args['allowEmpty'] == true);
        final previous = loadYaml(content);
        if (previous is Map && previous['external-controller'] is String) {
          final editor = YamlEditor(result as String);
          editor.update(['external-controller'], previous['external-controller']);
          result = editor.toString();
        }
        result = canonicalControllerMarker(result as String, force: content.split('\n').any((line) => line.trim() == '# Mclash OpenWrt controller: true'));
        if (content.split('\n').any((line) => line.startsWith(networkPrefix))) {
          result = applyNetwork(result as String, networkOptions(content));
        }
      case 'subscriptionSources':
        result = subscriptionSources(content, args['count'] as int, prefixes: args['prefixes'] == null ? null : List<String>.from(args['prefixes']));
      default:
        throw const FormatException('Unsupported configuration operation');
    }
    return jsonEncode({'ok': true, 'value': result});
  } catch (error) {
    // yaml_edit can mis-indent nested flow maps when replacing mixed-style lists.
    // Retry from the original parsed values rather than the failed intermediate edit.
    if (!normalized && error is AssertionError && error.toString().contains('package:yaml_edit')) {
      try { return handle(action, normalize(content), payload, normalized: true); } catch (_) {}
    }
    return jsonEncode({'ok': false, 'error': error.toString()});
  }
}

void main() {
  exportedCall = ((JSString action, JSString content, JSString payload) =>
      handle(action.toDart, content.toDart, payload.toDart).toJS).toJS;
}
