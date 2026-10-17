'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
global.self = global;
const source = fs.readFileSync(__dirname + '/../htdocs/luci-static/resources/mclash/overrides.js', 'utf8');
const CoreClass = new Function('baseclass', source)({extend: members => function() { Object.assign(this, members); }});
assert.equal(typeof CoreClass, 'function', 'LuCI modules must export a constructor');
const api = new CoreClass();
const dnsBase='# keep comment\nmixed-port: 7890\ndns:\n  enable: true\n  nameserver: [1.1.1.1]\nrules: [MATCH,DIRECT]\n';
const dnsChanged=api.call('dns',dnsBase,{yaml:'enable: false\nnameserver: [https://dns.example/dns-query]\nnameserver-policy:\n  "+.example.org": [8.8.8.8]\n'});
assert.match(dnsChanged,/# keep comment/);
assert.match(dnsChanged,/mixed-port: 7890/);
assert.match(api.call('summary',dnsChanged).dnsYaml,/nameserver-policy/);
assert.doesNotMatch(api.call('summary',dnsChanged).dnsYaml,/enable:|listen:|ipv6:/);
assert.match(dnsChanged,/enable: true/);
const protectedDNS=api.call('dns',dnsBase.replace('  enable: true','  enable: true\n  listen: "[::]:1053"\n  ipv6: true'),{yaml:'nameserver: [8.8.8.8]\nenable: false\nlisten: 127.0.0.1:53\nipv6: false\n'});
assert.match(protectedDNS,/enable: true/);
assert.match(protectedDNS,/\[::\]:1053/);
assert.match(protectedDNS,/ipv6: true/);
assert.throws(()=>api.call('dns',dnsBase,{yaml:'[1, 2]'}),/DNS/);
assert.throws(()=>api.call('dns',dnsBase,{yaml:'enable: ['}));
let config = `proxies:
  - {name: Shanghai-ws, type: vmess, server: a.example, port: 443, uuid: 00000000-0000-4000-8000-000000000001, network: ws, ws-opts: {headers: {host: old.example, X-Test: keep}}, tls: true}
  - {name: KR-http, type: vmess, server: b.example, port: 80, uuid: 00000000-0000-4000-8000-000000000002, network: http, http-opts: {headers: {HOST: old.example}}}
  - {name: KR-vless, type: vless, server: c.example, port: 443, uuid: 00000000-0000-4000-8000-000000000003, network: ws, ws-opts: {headers: {Host: unchanged.example}}, tls: true}
proxy-groups:
  - {name: 🚀 Domestic, type: select, proxies: [DIRECT, Shanghai-ws]}
  - {name: 🌍 Foreign, type: select, proxies: [KR-http, KR-vless]}
  - {name: custom, type: select, proxies: [DIRECT]}
rule-providers:
  example: {type: inline, behavior: domain, payload: [+.example.org]}
rules:
  - RULE-SET,example,custom
  - MATCH,DIRECT
sub-rules:
  extra:
    - RULE-SET,example,custom
`;
const base = config;
const call = (op, args) => config = api.call(op, config, args);
call('host', {host: 'override.example:80'});
assert.match(config, /X-Test: keep/);
assert.match(config, /unchanged.example/);
assert.match(config, /server: a.example/);
assert.match(config, /Host: override.example:80/);
assert.throws(() => api.call('host', config, {host: 'https://invalid.example/path'}));
call('group', {oldName: 'custom', group: {name: 'custom-renamed', type: 'select'}, filter: '(?i)kr', includeDirect: false});
assert.ok(api.call('summary', config).groups.find(g => g.name === 'custom-renamed').proxies.length === 2);
assert.equal((config.match(/RULE-SET,example,custom-renamed/g) || []).length, 2);
assert.throws(() => api.call('deleteGroup', config, {name: '🚀 Domestic'}));
assert.throws(() => api.call('deleteGroup', config, {name: 'custom-renamed'}));
assert.throws(() => api.call('group', config, {oldName: 'custom-renamed', group: {name: 'custom-renamed', type: 'select'}, filter: '^absent$', includeDirect: false}));
call('provider', {oldName: 'example', name: 'renamed-set', provider: {type: 'inline', behavior: 'domain', payload: ['+.new.example']}});
assert.equal((config.match(/RULE-SET,renamed-set,custom-renamed/g) || []).length, 2);
assert.throws(() => api.call('deleteProvider', config, {name: 'renamed-set'}));
assert.throws(() => api.call('provider', config, {name: 'bad', provider: {type: 'http', behavior: 'classical', format: 'mrs', url: 'https://example.org/rules'}}));
call('addNode', {link: 'vless://00000000-0000-4000-8000-000000000004@manual.example:443?security=tls&type=ws&host=manual-host.example#manual'});
assert.equal(api.call('summary', config).manualNodes[0], 'manual');
call('chain', {id: '1', prepend: true, selected: ['Shanghai-ws', 'KR-http'], targets: ['KR-vless']});
assert.deepEqual(api.call('summary', config).chains['1'].front, ['Shanghai-ws', 'KR-http']);
assert.match(config, /dialer-proxy: KR-http/);
assert.throws(() => api.call('chain', config, {id: '2', prepend: true, selected: ['KR-vless'], targets: ['KR-vless']}));
call('rules', {rules: ['DOMAIN,example.org,custom-renamed', 'MATCH,DIRECT']});
assert.deepEqual(api.call('summary', config).rules, ['DOMAIN,example.org,custom-renamed', 'MATCH,DIRECT']);
assert.throws(() => api.call('rules', config, {rules: ['MATCH,missing-policy']}));
const subscription = base.replace('a.example', 'updated.example');
call('subscription', {template: base, sources: [subscription], refresh: true});
const s = api.call('summary', config);
assert.ok(s.manualNodes.includes('manual'));
assert.equal(s.host, 'override.example:80');
assert.ok(s.chains['1']);
assert.equal(s.filters['custom-renamed'], '(?i)kr');
assert.ok(s.providers['renamed-set']);
assert.deepEqual(s.rules, ['DOMAIN,example.org,custom-renamed', 'MATCH,DIRECT']);
assert.match(config, /updated.example/);
assert.match(config, /manual-host.example/);
call('deleteNode', {name: 'manual'});
assert.ok(!api.call('summary', config).nodes.includes('manual'));
assert.throws(() => api.call('subscription', config, {template: base, sources: ['proxy-providers: {}'], refresh: true}));
console.log('Six override features and subscription retention checks passed');
const network = {access: [], lan: true, mode: 'tun', interfaces: ['br-lan', 'br-guest'], router: false, ipv6: true, stack: 'gvisor'};
call('network', network);
assert.deepEqual(api.call('summary', config).network, network);
assert.match(config, /auto-route: false/);
assert.match(config, /auto-redirect: false/);
assert.match(config, /routing-mark: 359/);
assert.match(config, /inet6-address/);
assert.match(config, /\[::\]:1053/);
call('subscription', {template: base, sources: [subscription], refresh: true});
assert.deepEqual(api.call('summary', config).network, network);
assert.match(config, /device: Mclash/);
call('network', {...network, mode: 'tproxy', ipv6: false});
assert.match(config, /tproxy-port: 7893/);
assert.match(config, /enable: false/);
assert.throws(() => api.call('network', config, {...network, interfaces: ['br-lan"; drop']}));
assert.throws(() => api.call('network', config, {...network, interfaces: ['lo']}));
assert.throws(() => api.call('network', config, {...network, ipv6: 'true'}));
call('network', {...network, mode: 'none'});
assert.match(config, /tproxy-port: 0/);
assert.doesNotMatch(config, /routing-mark: 359/);
console.log('TUN/TProxy settings and subscription retention checks passed');
const providerConfig = base + 'proxy-providers:\n  remote:\n    type: http\n    url: https://example.org/proxies.yaml\n    override: {skip-cert-verify: true, routing-mark: 123}\n';
const managedProvider = api.call('network', providerConfig, network);
assert.match(managedProvider, /skip-cert-verify: true/);
assert.doesNotMatch(managedProvider, /routing-mark: 123/);
assert.match(managedProvider, /routing-mark: 359/);

const customController = base + 'external-controller: 127.0.0.1:9097\n';
const customManaged = api.call('network', customController, network);
assert.equal(api.call('summary', customManaged).controller, '127.0.0.1:9097');
const customRefreshed = api.call('subscription', customManaged, {template: base, sources: [subscription], refresh: true});
assert.equal(api.call('summary', customRefreshed).controller, '127.0.0.1:9097');

const controlled = api.call('controller', customManaged, {address: '0.0.0.0', port: '9197'});
assert.equal(api.call('summary', controlled).controller, '0.0.0.0:9197');
assert.equal(api.call('summary', api.call('network', controlled, network)).controller, '0.0.0.0:9197');
assert.throws(() => api.call('controller', controlled, {address: '999.1.1.1', port: 9097}));
assert.throws(() => api.call('controller', controlled, {address: '0.0.0.0', port: 65536}));
// Real OpenWrt defaults: shared DNS policies survive both capture modes.
const DefaultTemplate = new Function('baseclass', fs.readFileSync(__dirname + '/../htdocs/luci-static/resources/mclash/template.js', 'utf8'))({extend: members => function() {Object.assign(this, members);}});
const defaultConfig = fs.readFileSync(__dirname + '/../root/etc/mclash/config.yaml', 'utf8');
for (const profile of [defaultConfig, new DefaultTemplate().text]) {
 assert.match(profile, /log-level: error/);
 assert.match(profile, /enhanced-mode: fake-ip/);
 assert.match(profile, /listen: 0\.0\.0\.0:1053/);
 assert.match(profile, /respect-rules: true/);
 assert.match(profile, /proxy-server-nameserver:/);
 assert.match(profile, /nameserver-policy:/);
 assert.doesNotMatch(profile, /^secret:/m);
 const initial = api.call('summary', profile);
 assert.ok(initial.groups.some(g => g.name === '🚀 Domestic'));
 assert.ok(initial.groups.some(g => g.name === '🌍 Foreign'));
 for (const mode of ['tun', 'tproxy']) {
  const captured = api.call('network', profile, {...network, mode, ipv6:false});
  assert.match(captured, /enhanced-mode: fake-ip/);
  assert.match(captured, /proxy-server-nameserver:/);
  assert.match(captured, /nameserver-policy:/);
 }
}
assert.equal(api.call('summary', defaultConfig).network.mode, 'none');
console.log('Shared default DNS and capture retention checks passed');

// Keep existing DNS strings verbatim: yaml_edit's map emitter escapes slash in
// quoted URLs with policy fragments, which Go's YAML parser rejects.
const dnsProfile = `proxies: []
proxy-groups: []
rules: [MATCH,DIRECT]
dns:
  enable: true
  nameserver:
    - https://1.1.1.1/dns-query#🌍 Foreign
  nameserver-policy:
    "geosite:cn": [https://dns.alidns.com/dns-query]
`;
for (const mode of ['tun', 'tproxy']) {
 const result = api.call('network', dnsProfile, {...network,mode});
 assert.ok(result.includes('    - https://1.1.1.1/dns-query#🌍 Foreign'));
 assert.ok(!result.includes(String.raw`\/`), 'DNS URLs must not acquire invalid YAML slash escapes');
}

assert.equal(api.call('summary', dnsProfile).network.lan, true, 'older profiles keep LAN capture enabled');
const lanOff = api.call('network', dnsProfile, {...network, mode:'tproxy',lan:false});
assert.equal(api.call('summary',lanOff).network.lan,false);
assert.throws(()=>api.call('network',dnsProfile,{...network,lan:'false'}));

const access = ['192.168.10.100','192.168.10.0/24','192.168.10.100-192.168.10.150','fd00::/64'];
assert.deepEqual(api.call('summary',api.call('network',dnsProfile,{...network,lan:false,access})).network.access,access);
for (const bad of ['192.168.10.999','192.168.10.0/33','192.168.10.150-192.168.10.100','fd00::/129','1:::2','1.2.3.4; drop']) {
 assert.throws(()=>api.call('network',dnsProfile,{...network,access:[bad]}));
}

const marker = '# Mclash OpenWrt controller: true';
let repeated = marker+'\n'+marker+'\n'+customManaged;
for (let attempt=0; attempt<4; attempt++) {
 repeated=api.call('subscription',repeated,{template:marker+'\n'+base,sources:[subscription],refresh:true});
 assert.equal(repeated.split('\n').filter(line=>line.trim()===marker).length,1,'subscription retains exactly one controller marker');
 repeated=api.call('network',repeated,network);
 assert.equal(repeated.split('\n').filter(line=>line.trim()===marker).length,1);
}

// Extract existing airport nodes for an independent refresh without fetching peers.
const airportOne = 'proxies: [{name: edge, type: http, server: one.example, port: 80}, {name: downstream, type: http, server: down.example, port: 80, dialer-proxy: edge}]';
const airportTwo = 'proxies: [{name: edge, type: http, server: two.example, port: 8080}]';
let airports = api.call('subscription', base, {template: base, sources: [airportOne, airportTwo], refresh: true});
airports = api.call('addNode', airports, {link: 'http://manual.example/#manual-airport'});
const retained = api.call('subscriptionSources', airports, {count: 2});
assert.match(retained[0], /dialer-proxy: edge/);
assert.doesNotMatch(retained.join(''), /manual-airport/);
const refreshedAirports = api.call('subscription', airports, {template: base, sources: [airportOne.replace('one.example','new.example'), retained[1]], refresh: true});
assert.deepEqual(api.call('subscriptionSources', refreshedAirports, {count: 2})[1], retained[1]);
assert.match(refreshedAirports, /new.example/);
assert.ok(api.call('summary', refreshedAirports).manualNodes.includes('manual-airport'));
const singleAirport = api.call('subscription', base, {template: base, sources: [airportOne], refresh: true});
assert.match(api.call('subscriptionSources', singleAirport, {count: 1})[0], /name: edge/);
console.log('Independent airport refresh preserves peer and manual nodes');

const stablePrefixes = ['2-', '1-'];
const reorderedAirports = api.call('subscription', airports, {template: base, sources: [retained[1],retained[0]], prefixes:stablePrefixes, refresh:true});
assert.deepEqual(api.call('subscriptionSources', reorderedAirports, {count:2,prefixes:stablePrefixes}), [retained[1],retained[0]]);
assert.ok(api.call('summary',reorderedAirports).nodes.includes('1-edge'));
const onlySecond = api.call('subscription', airports, {template: base, sources:[retained[1]],prefixes:['2-'],refresh:true});
assert.ok(api.call('summary',onlySecond).nodes.includes('2-edge'));
assert.match(api.call('subscriptionSources', onlySecond, {count:1,prefixes:['2-']})[0],/server: two.example/);
const allRemoved = api.call('subscription', onlySecond, {template:base,sources:[],prefixes:[],allowEmpty:true,refresh:true});
assert.deepEqual(api.call('summary',allRemoved).nodes,['manual-airport']);
console.log('Airport ordering and deletion keep stable node identities');

// Delete the last source without the manual node used by the tests above.
const defaultImported = api.call('subscription', new DefaultTemplate().text, {
 template: new DefaultTemplate().text, sources: [airportOne], refresh: true
});
const emptySubscriptions = api.call('subscription', defaultImported, {
 template: new DefaultTemplate().text, sources: [], prefixes: [], allowEmpty: true, refresh: true
});
assert.deepEqual(api.call('summary', emptySubscriptions).nodes, []);
assert.ok(api.call('summary', emptySubscriptions).groups.every(group => group.proxies.length > 0));
const withHost = api.call('host', defaultImported, {host: 'override.example'});
const removedWithHost = api.call('subscription', withHost, {
 template: new DefaultTemplate().text, sources: [], prefixes: [], allowEmpty: true, refresh: true
});
assert.deepEqual(api.call('summary', removedWithHost).nodes, []);
assert.equal(api.call('summary', removedWithHost).host, 'override.example');
const directlyReferenced = api.call('rules', defaultImported, {rules: ['MATCH,edge']});
assert.throws(() => api.call('subscription', directlyReferenced, {
 template: new DefaultTemplate().text, sources: [], prefixes: [], allowEmpty: true, refresh: true
}), /still referenced by rules/);
const filteredAirports = api.call('group', airports, {
 oldName: 'custom', group: {name: 'custom', type: 'select'}, filter: '^1-', includeDirect: false
});
assert.throws(() => api.call('subscription', filteredAirports, {
 template: base, sources: [retained[1]], prefixes: ['2-'], refresh: true
}), /No nodes match/);
const deletedFilteredAirport = api.call('subscription', filteredAirports, {
 template: base, sources: [retained[1]], prefixes: ['2-'], allowEmpty: true, refresh: true
});
const deletedSummary = api.call('summary', deletedFilteredAirport);
assert.deepEqual(new Set(deletedSummary.nodes), new Set(['2-edge', 'manual-airport']));
assert.deepEqual(deletedSummary.groups.find(group => group.name === 'custom').proxies, ['DIRECT']);
assert.equal(deletedSummary.filters.custom, '^1-');
assert.equal(deletedSummary.direct.custom, false);
const restoredAirports = api.call('subscription', deletedFilteredAirport, {
 template: base, sources: retained, prefixes: ['1-', '2-'], refresh: true
});
assert.deepEqual(api.call('summary', restoredAirports).groups.find(group => group.name === 'custom').proxies, ['1-edge', '1-downstream']);
console.log('Explicit subscription deletion supports empty nodes and filtered groups');

// Import only embedded nodes, even when a subscription supplies dialer groups.
const groupedAirport = `proxies:
  - {name: local, type: http, server: local.example, port: 80, headers: {X-Test: keep}}
  - {name: remote, type: anytls, server: remote.example, port: 443, password: test-only, dialer-proxy: upstream}
  - {name: chained, type: vless, server: chained.example, port: 443, uuid: 00000000-0000-4000-8000-000000000004, dialer-proxy: local}
proxy-groups:
  - {name: upstream, type: select, proxies: [DIRECT, fastest, local]}
  - {name: fastest, type: url-test, proxies: [local], url: 'https://www.gstatic.com/generate_204', interval: 300}
  - {name: unused, type: select, proxies: [remote]}
dns: {nameserver: [unwanted.example]}
rules: [MATCH,upstream]
rule-providers: {unwanted: {type: http, url: 'https://unwanted.example/rules'}}
secret: subscription-secret-test-only
`;
const nodesOnly = api.call('subscription',base,{template:base,sources:[groupedAirport],refresh:true});
assert.doesNotMatch(nodesOnly,/dialer-proxy: upstream|fastest|unused|unwanted.example|subscription-secret-test-only|Mclash dialer:|subscription-groups:/);
assert.match(nodesOnly,/dialer-proxy: local/);
assert.match(nodesOnly,/type: anytls/);
assert.match(nodesOnly,/X-Test: keep/);
assert.deepEqual(api.call('summary',nodesOnly).groups.map(g=>g.name),api.call('summary',base).groups.map(g=>g.name));
assert.deepEqual(api.call('summary',nodesOnly).rules,api.call('summary',base).rules);
assert.equal(api.call('summary',nodesOnly).dnsYaml,api.call('summary',base).dnsYaml);
const grouped = api.call('subscription',base,{template:base,sources:[groupedAirport,groupedAirport],refresh:true});
assert.doesNotMatch(grouped,/dialer-proxy: upstream|fastest|unused|unwanted.example/);
assert.match(grouped,/dialer-proxy: 1-local/);
assert.match(grouped,/dialer-proxy: 2-local/);
const groupedSources=api.call('subscriptionSources',grouped,{count:2});
assert.match(groupedSources[0],/dialer-proxy: local/);
assert.doesNotMatch(groupedSources[0],/proxy-groups:|dns:|rules:|secret:|dialer-proxy: upstream/);
const independentlyUpdated=api.call('subscription',grouped,{template:base,sources:[groupedAirport.replace('remote.example','updated.example'),groupedSources[1]],prefixes:['1-','2-'],refresh:true});
assert.equal(api.call('subscriptionSources',independentlyUpdated,{count:2})[1],groupedSources[1]);
assert.match(independentlyUpdated,/updated.example/);
assert.doesNotMatch(independentlyUpdated,/dialer-proxy: upstream/);
const directDialer=api.call('subscription',base,{template:base,sources:[airportOne.replace('dialer-proxy: edge','dialer-proxy: DIRECT')],refresh:true});
assert.match(directDialer,/dialer-proxy: DIRECT/);
console.log('Node-only subscriptions discard external dialers and preserve node fields and local policies');

// Existing block-style nodes and later edits keep one physical line per node.
const blockNodes = `# keep header
proxies:
  - name: "special: #node"
    type: http
    server: example.org
    port: 80
    headers:
      X-Test: "first\\nsecond"
    alpn: [h2, http/1.1]
  - name: second
    type: http
    server: second.example
    port: 8080
proxy-groups: [{name: local, type: select, proxies: [DIRECT]}]
rules: ["MATCH,DIRECT"]
`;
const compactNodes = api.call('formatNodes',blockNodes);
const nodeLines = compactNodes.split('proxy-groups:')[0].split('\n').filter(line=>line.trim().startsWith('-'));
assert.equal(nodeLines.length,2);
assert.ok(nodeLines.every(line=>/^\s*- \{.*\}$/.test(line)));
assert.match(nodeLines[0],/name: "special: #node"/);
assert.match(nodeLines[0],/headers: \{X-Test: "first\\nsecond"\}/);
assert.match(nodeLines[0],/alpn: \[h2, http\/1.1\]/);
assert.ok(compactNodes.startsWith('# keep header\n'));
assert.equal(compactNodes.slice(compactNodes.indexOf('proxy-groups:')),blockNodes.slice(blockNodes.indexOf('proxy-groups:')));
assert.equal(api.call('formatNodes',compactNodes),compactNodes);
assert.equal(api.call('formatNodes','proxies: []\nrules: ["MATCH,DIRECT"]\n'),'proxies: []\nrules: ["MATCH,DIRECT"]\n');
const importedNodeLines=nodesOnly.split('proxy-groups:')[0].split('\n').filter(line=>line.trim().startsWith('-'));
assert.equal(importedNodeLines.length,3);
assert.ok(importedNodeLines.every(line=>/^\s*- \{.*\}$/.test(line)));
console.log('Proxy nodes use one-line flow maps with nested values and escaped strings intact');

// Existing profiles migrate metadata and built-in references without renaming custom nodes.
const legacyProfile='# Mclash OpenWrt \u63a5\u7ba1: {"mode":"none","interfaces":["br-lan"],"lan":true,"router":true,"ipv6":false,"stack":"mixed"}\n# Mclash OpenWrt \u673a\u573a\u540d\u79f0: ["Custom"]\nproxies: [{name: Custom, type: http, server: example.org, port: 80}]\nproxy-groups: [{name: "🚀 \u56fd\u5185", type: select, proxies: [DIRECT, Custom]}, {name: "🌍 \u56fd\u5916", type: select, proxies: [DIRECT]}]\nrules: ["MATCH,🌍 \u56fd\u5916"]\n';
assert.equal(api.call('summary',legacyProfile).groups[0].name,'🚀 Domestic');
const migrated=api.call('dns',legacyProfile,{yaml:'nameserver: [1.1.1.1]'});
assert.match(migrated,/# Mclash OpenWrt capture:/);
assert.match(migrated,/# Mclash OpenWrt subscription-names: \["Custom"\]/);
assert.match(migrated,/MATCH,🌍 Foreign/);
assert.match(migrated,/name: Custom/);
