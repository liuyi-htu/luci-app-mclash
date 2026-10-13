'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const catalog = new Map();
let id, context;
for (const line of fs.readFileSync(path.join(root, 'po/zh_Hans/mclash.po'), 'utf8').split('\n')) {
 if (line.startsWith('msgctxt ')) context = JSON.parse(line.slice(8));
 if (line.startsWith('msgid ')) id = JSON.parse(line.slice(6));
 if (line.startsWith('msgstr ') && id) {
  assert.equal(context, 'mclash', 'translations use a private context');
  assert.ok(!catalog.has(id), 'duplicate translation: ' + id);
  catalog.set(id, JSON.parse(line.slice(7)));
 }
}
const normalize = text => String(text).trim().replace(/[ \t\n]+/g, ' ');
const translate = (text, chinese) => chinese ? catalog.get(normalize(text)) || text : text;
assert.equal(translate('DNS management', false), 'DNS management');
assert.equal(translate('DNS management', true), 'DNS \u7ba1\u7406');
assert.equal(translate('Save', true), '\u4fdd\u5b58');
assert.equal(translate('Proxy LAN devices', true), '\u4ee3\u7406\u5c40\u57df\u7f51\u8bbe\u5907');
assert.equal(translate('● Running', true), '● \u8fd0\u884c\u4e2d');
for (const file of ['view/mclash/overview.js', 'mclash/management.js', 'mclash/proxy.js', 'mclash/update.js', 'mclash/notify.js']) {
 const source = fs.readFileSync(path.join(root, 'htdocs/luci-static/resources', file), 'utf8');
 assert.doesNotMatch(source, /[\u4e00-\u9fff]/, file + ' uses English source strings');
 for (const match of source.matchAll(/_\('([^'\n]*)'(?:, 'mclash')?\)/g)) {
  const text = match[1];
  assert.ok(match[0].includes(", 'mclash'"), file + ': missing translation context: ' + text);
  if (/^[A-Za-z●]/.test(text)) assert.ok(catalog.has(normalize(text)), file + ': missing Chinese translation: ' + text);
 }
}
assert.equal(translate('Configure ', true), '\u8bbe\u7f6e ');
assert.equal(translate(' · Configured', true), ' · \u5df2\u914d\u7f6e');
assert.equal(translate('Remaining traffic: ', true), '\u5269\u4f59\u6d41\u91cf：');
const I18n = new Function('baseclass', '_', fs.readFileSync(path.join(root,'htdocs/luci-static/resources/mclash/i18n.js'),'utf8'))({extend: members => function(){Object.assign(this,members);}}, (text,context)=>context==='mclash'?translate(text,true):text);
const messages=new I18n();
assert.equal(messages.translate('Mihomo 1.19.32 installed; service remains stopped'),'Mihomo 1.19.32 \u5df2\u5b89\u88c5，\u670d\u52a1\u4fdd\u6301\u505c\u6b62');
assert.ok(messages.translate('SHA256 mismatch; existing core unchanged; Existing core unchanged; uploaded file retained for retry').includes('\u4e0a\u4f20\u6587\u4ef6\u5df2\u4fdd\u7559'));
assert.equal(messages.translate('Unsupported VMess transport type: xhttp'),'\u6682\u4e0d\u652f\u6301 VMess \u4f20\u8f93\u7c7b\u578b：xhttp');
console.log('English fallback and Simplified Chinese translation coverage passed');

// Verify the compiled catalog with the real LuCI lookup algorithm, including whitespace.
if (process.argv[2] && process.argv[3]) {
 const binary=fs.readFileSync(process.argv[2]), index=binary.readUInt32BE(binary.length-4), TR={};
 for(let offset=index;offset<binary.length-4;offset+=16) {
  const hash=binary.readUInt32BE(offset).toString(16).padStart(8,'0'), start=binary.readUInt32BE(offset+8), length=binary.readUInt32BE(offset+12);
  TR[hash]=binary.subarray(start,start+length).toString('utf8');
 }
 const cbi=fs.readFileSync(process.argv[3],'utf8');
 const lookup=new Function('window','TR',cbi.slice(cbi.indexOf('function s8('),cbi.indexOf('function N_('))+';return _;')({TR},TR);
 for(const [id,zh] of catalog) {
  if(/\\[nt]/.test(id))continue;
  assert.equal(lookup(id,'mclash'),zh,'compiled catalog misses '+id);
 }
 assert.equal(lookup('Configure ','mclash'),'\u8bbe\u7f6e ');
 assert.equal(lookup(' · Configured','mclash'),' · \u5df2\u914d\u7f6e');
 assert.equal(lookup('Remaining traffic: ','mclash'),'\u5269\u4f59\u6d41\u91cf：');
 console.log('Compiled LMO lookup passed with the real LuCI hashing and whitespace rules');
}

assert.equal(messages.localizeGroups('rules: [MATCH,🌍 Foreign]'),'rules: [MATCH,🌍 \u56fd\u5916]');
assert.equal(messages.localizeGroups({groups:[{name:'🚀 Domestic'}]}).groups[0].name,'🚀 \u56fd\u5185');
const scopeLine='2026-10-13 10:00:00 Proxy scope: router traffic=Enabled, LAN devices=All devices, IPv6=Disabled; interfaces: br-lan';
const scopeChinese=messages.logText(scopeLine);
assert.ok(scopeChinese.startsWith('2026-10-13 10:00:00 \u4ee3\u7406\u8303\u56f4：\u4ee3\u7406\u672c\u673a='));
assert.ok(scopeChinese.includes('\u4ee3\u7406\u5c40\u57df\u7f51\u8bbe\u5907=\u5168\u90e8\u8bbe\u5907'));
assert.equal(messages.logText('2026-10-13 10:00:01 Startup complete, capture mode: tun'),'2026-10-13 10:00:01 \u542f\u52a8\u5b8c\u6210，\u63a5\u7ba1\u65b9\u5f0f：tun');
assert.equal(messages.logText('------------------------------------------------------------'),'------------------------------------------------------------');

const Override=new Function('baseclass','i18n',fs.readFileSync(path.join(root,'htdocs/luci-static/resources/mclash/overrides.js'),'utf8'))({extend:members=>function(){Object.assign(this,members);}},messages);
const localizedAPI=new Override();
const groupConfig='proxies: [{name: Custom, type: http, server: example.org, port: 80}]\nproxy-groups: [{name: "🚀 Domestic", type: select, proxies: [DIRECT]}, {name: "🌍 Foreign", type: select, proxies: [DIRECT]}]\nrules: ["MATCH,🌍 Foreign"]\n';
assert.equal(localizedAPI.call('summary',groupConfig).groups[0].name,'🚀 \u56fd\u5185');
const edited=localizedAPI.call('group',messages.localizeGroups(groupConfig),{oldName:'🚀 \u56fd\u5185',group:{name:'🚀 \u56fd\u5185',type:'select',proxies:['DIRECT']},filter:'',includeDirect:true});
assert.ok(edited.includes('🌍 \u56fd\u5916'));
assert.equal(localizedAPI.call('summary',edited).groups[0].name,'🚀 \u56fd\u5185');
