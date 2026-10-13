'use strict';
'require baseclass';

function translate(message) {
 var text = String(message), direct = _(text, 'mclash');
 if (direct !== text) return direct;
 var patterns = [
  [/^Startup complete, capture mode: (.+)$/, 'Startup complete, capture mode: %s'],
  [/^Core exited unexpectedly, exit code=(.+)$/, 'Core exited unexpectedly, exit code=%s'],
  [/^Failed: (.+)$/, 'Failed: %s', true],
  [/^Proxy scope: router traffic=(.+), LAN devices=(.+), IPv6=(.+); interfaces: (.+)$/, 'Proxy scope: router traffic=%s, LAN devices=%s, IPv6=%s; interfaces: %s', true],
  [/^Access control: IPv4=(.*); IPv6=(.*)$/, 'Access control: IPv4=%s; IPv6=%s', true],
  [/^Mihomo (.+) installed; service remains stopped$/, 'Mihomo %s installed; service remains stopped'],
  [/^Mihomo (.+) installed; service is running again$/, 'Mihomo %s installed; service is running again'],
  [/^(.+)[,;] Existing core unchanged; uploaded file retained for retry$/, '%s; Existing core unchanged; uploaded file retained for retry', true],
  [/^(.+); Previous core restored; service is running again$/, '%s; Previous core restored; service is running again', true],
  [/^(.+); Previous core restored, but service restart failed; check the log$/, '%s; Previous core restored, but service restart failed; check the log', true],
  [/^(.+); Failed to restore the previous core; check the log; backup retained$/, '%s; Failed to restore the previous core; check the log; backup retained', true],
  [/^Unsupported VMess transport type: (.+)$/, 'Unsupported VMess transport type: %s'],
  [/^Unsupported VMess TLS type: (.+)$/, 'Unsupported VMess TLS type: %s'],
  [/^Unsupported TCP camouflage type: (.+)$/, 'Unsupported TCP camouflage type: %s'],
  [/^VMess (.+) must be an integer$/, 'VMess %s must be an integer'],
  [/^Proxy group (.+) was not found in the configuration$/, 'Proxy group %s was not found in the configuration'],
  [/^No nodes match (.+); adjust the regex or select DIRECT$/, 'No nodes match %s; adjust the regex or select DIRECT'],
  [/^Node is missing (.+)$/, 'Node is missing %s', true],
  [/^Conflicting node parameter aliases: (.+)$/, 'Conflicting node parameter aliases: %s'],
  [/^Node parameter (.+) must be true\/false or 1\/0$/, 'Node parameter %s must be true/false or 1/0'],
  [/^Subscription (.+) has no embedded proxies$/, 'Subscription %s has no embedded proxies'],
  [/^Subscription (.+) has duplicate node names$/, 'Subscription %s has duplicate node names'],
  [/^Subscription (.+) has a node without a name or type$/, 'Subscription %s has a node without a name or type'],
  [/^Node (.+) was removed from the subscription but is still referenced by rules; update the rules first; original configuration retained$/, 'Node %s was removed from the subscription but is still referenced by rules; update the rules first; original configuration retained'],
  [/^Node (.+) connects to different entries in multiple chains; adjust the selection$/, 'Node %s connects to different entries in multiple chains; adjust the selection']
 ];
 for (var i = 0; i < patterns.length; i++) {
  var match = patterns[i][0].exec(text);
  if (match) {
   var template = _(patterns[i][1], 'mclash');
   if (template === patterns[i][1]) return text;
   var argument = 0;
   return template.replace(/%s/g, function() { argument++; return patterns[i][2] ? translate(match[argument]) : match[argument]; });
  }
 }
 return text;
}
function localizeGroups(value) {
 if (typeof value === 'string') return value.replace(/🚀 Domestic/g, '🚀 ' + _('Domestic', 'mclash')).replace(/🌍 Foreign/g, '🌍 ' + _('Foreign', 'mclash'));
 if (Array.isArray(value)) return value.map(localizeGroups);
 if (value && typeof value === 'object') {
  var result = {};
  Object.keys(value).forEach(function(key) { result[localizeGroups(key)] = localizeGroups(value[key]); });
  return result;
 }
 return value;
}
function logText(text) {
 return String(text).split('\n').map(function(line) {
  var match = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} )(.*)$/.exec(line);
  return match ? match[1] + translate(match[2]) : translate(line);
 }).join('\n');
}
return baseclass.extend({translate: translate, localizeGroups: localizeGroups, logText: logText});
