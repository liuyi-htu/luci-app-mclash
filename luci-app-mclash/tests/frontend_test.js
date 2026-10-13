'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
global.i18n = {translate: text => String(text), logText: text => String(text), localizeGroups: value => value};
const source = fs.readFileSync(__dirname + '/../htdocs/luci-static/resources/view/mclash/overview.js', 'utf8');

// LuCI rejects plain objects and strings from module factories. Test every
// helper with the same constructor contract instead of substituting its export.
for (const name of ['proxy', 'management', 'overrides', 'template', 'update', 'notify']) {
 global.self = global;
 const moduleSource = fs.readFileSync(__dirname + '/../htdocs/luci-static/resources/mclash/' + name + '.js', 'utf8');
 const Module = new Function('baseclass', 'ui', 'overrides', moduleSource)(
  {extend: members => function() { Object.assign(this, members); }}, {}, {});
 assert.equal(typeof Module, 'function', name + ' must export a LuCI constructor');
 const instance = new Module();
 assert.ok(name === 'template' ? typeof instance.text === 'string' : typeof instance[name === 'overrides' ? 'call' : name === 'notify' ? 'show' : 'render'] === 'function');
}
// A standalone link must connect with the configured address/port, and cease
// being actionable while the core is stopped or its endpoint is loopback-only.
{
 const nodes = [];
 function E(tag, attrs, children) {
  const node = {tag, attrs: {...attrs}, children, textContent: '',
   removeAttribute(name) { delete this.attrs[name]; if (name === 'href') delete this.href; },
   setAttribute(name, value) { this.attrs[name] = value; },
   hasAttribute(name) { return name === 'href' ? !!this.href : name in this.attrs; }};
  nodes.push(node); return node;
 }
 const Module = new Function('baseclass', 'E', '_', 'location', fs.readFileSync(__dirname + '/../htdocs/luci-static/resources/mclash/proxy.js', 'utf8'))(
  {extend: members => function() {Object.assign(this, members);}}, E, x => x, {hostname: '192.168.10.1'});
 let running = true, config = {controller: '0.0.0.0:9097', secret: 'test-key'};
 const panel = new Module().render(() => config, () => running);
 panel.refresh();
 const link = nodes.find(n => n.tag === 'a');
 assert.equal(link.attrs.target,'_blank','panel opens separately');
 assert.equal(panel.element,link,'panel is a direct toolbar action');
 assert.equal(link.attrs['aria-label'],'Open proxy dashboard');
 assert.ok(link.attrs.rel.includes('noopener'));
 const target = new URL(link.href, 'http://192.168.10.1');
 assert.equal(target.pathname, '/mclash/zashboard/');
 assert.equal(target.search, '', 'controller key belongs only in the URL fragment');
 const params = new URLSearchParams(target.hash.split('?')[1]);
 assert.equal(params.get('hostname'), '192.168.10.1');
 assert.equal(params.get('port'), '9097');
 assert.equal(params.get('secret'), 'test-key');
 delete config.secret; panel.refresh();
 assert.equal(link.attrs['aria-disabled'], 'false');
 assert.equal(new URLSearchParams(new URL(link.href, 'http://192.168.10.1').hash.split('?')[1]).get('secret'), '');
 running = false; panel.refresh(); assert.ok(!link.href);
 running = true; config.controller = '[::1]:9097'; panel.refresh(); assert.ok(!link.href);
 assert.ok(!nodes.some(n => n.tag === 'iframe'));
}
// Toasts treat messages as text, support dismiss and expire after five seconds.
{
 const scheduled=[], cleared=[];
 function E(tag,attrs,children) {
  const node={tag,attrs:attrs||{},children:children||[],parentNode:null,appendChild(child) {this.children.push(child);child.parentNode=this;},removeChild(child) {this.children.splice(this.children.indexOf(child),1);child.parentNode=null;}};
  Object.defineProperty(node,'firstChild',{get() {return this.children[0];}});return node;
 }
 const document={head:E('head'),body:E('body')};
 const window={setTimeout(fn,delay) {scheduled.push({fn,delay});return scheduled.length;},clearTimeout(id) {cleared.push(id);}};
 const Toast=new Function('baseclass','E','_','document','window',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/notify.js','utf8'))({extend:m=>function(){Object.assign(this,m)}},E,x=>x,document,window);
 const notices=new Toast();const first=notices.show('<script>private</script>','error');
 assert.equal(first.attrs.role,'alert');assert.deepEqual(first.children[1].children,['<script>private</script>']);
 assert.equal(scheduled[0].delay,5000);scheduled[0].fn();assert.equal(first.parentNode,null);
 const second=notices.show('saved','success');assert.equal(second.attrs.role,'status');second.children[2].attrs.click();assert.equal(second.parentNode,null);
 for(let i=0;i<4;i++) notices.show(String(i),'info');assert.equal(document.body.children[0].children.length,3);
 assert.equal(document.head.children.length,1);
}
async function main() {
 {
  const buttons=[];
  function E(tag,attrs,children) { const n={tag,attrs:attrs||{},children:children||[],disabled:false,
   setAttribute(k,v){this.attrs[k]=v;},appendChild(c){this.children.push(c);},removeChild(c){this.children.splice(this.children.indexOf(c),1);}};
   Object.defineProperty(n,'firstChild',{get(){return this.children[0];}});
   Object.defineProperty(n,'textContent',{set(v){this.children=[];}});
   if(tag==='button')buttons.push(n); return n;
  }
  let active=false;
  const Module=new Function('baseclass','E','_','ui','overrides','notifications',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/management.js','utf8'))(
   {extend:x=>function(){Object.assign(this,x);}},E,x=>x,{}, {call:()=>({actions:['addNode','host','prependProxy','groups','ruleProviders','rules']})},{show(){}});
  const manager=new Module().render(()=>'',async()=>'',()=>active);
  manager.setRunning(true); assert.equal(buttons.length,7); assert.ok(buttons.every(n=>n.disabled));
  manager.setRunning(false); assert.ok(buttons.every(n=>!n.disabled));
  active=true; await buttons[0].attrs.click({currentTarget:buttons[0]});
  assert.ok(!buttons[0].mclashBusy,'a running core blocks the operation before opening its modal');
 }
 {
  // Chain roles stay disjoint while editing, and only the front chain is ordered.
  let dialog, saved;
  function E(tag,attrs,children) {
   const n={tag,attrs:attrs||{},children:children||[],checked:!!(attrs&&attrs.checked!=null),
    setAttribute(k,v){this.attrs[k]=v;},appendChild(c){this.children.push(c);},removeChild(c){this.children.splice(this.children.indexOf(c),1);}};
   Object.defineProperty(n,'firstChild',{get(){return this.children[0];}});
   Object.defineProperty(n,'textContent',{set(){this.children=[];}});return n;
  }
  const summary={actions:['prependProxy'],nodes:['A','B','C','D'],chains:{'1':{front:['A'],frontTargets:['B']}},nextChainId:'2'};
  const Module=new Function('baseclass','E','_','ui','overrides','notifications',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/management.js','utf8'))(
   {extend:x=>function(){Object.assign(this,x);}},E,x=>x,{showModal(title,content){dialog=E('div',{},content);},hideModal(){}},
   {call(op,content,args){if(op==='summary')return summary;saved=args;return content;}},{show(message){throw new Error(message);}});
  const manager=new Module().render(()=>'',async()=>{},()=>false);
  function all(n){return typeof n==='object'&&n?[n,...(n.children||[]).flatMap(all)]:[];}
  async function click(n){await n.attrs.click({currentTarget:n});}
  await click(all(manager.element).find(n=>n.attrs['aria-label']==='Proxy chains'));
  await click(all(dialog).find(n=>n.tag==='button'&&n.children[0]==='Edit'));
  const front=all(dialog).find(n=>n.attrs['aria-label']==='Pre-proxy nodes (in connection order)');
  const targets=all(dialog).find(n=>n.attrs['aria-label']==='Target nodes');
  const names=n=>n.children.map(row=>row.children[0].children[2]);
  function check(list,name,checked){const row=list.children.find(r=>r.children[0].children[2]===name);const box=row.children[0].children[0];box.checked=checked;box.attrs.change();}
  assert.deepEqual(names(front),['A','C','D']);assert.deepEqual(names(targets),['B','C','D']);
  assert.equal(all(targets).filter(n=>n.tag==='button').length,0);
  check(front,'C',true);assert.deepEqual(names(targets),['B','D']);
  check(front,'C',false);assert.deepEqual(names(targets),['B','C','D']);
  check(targets,'D',true);assert.deepEqual(names(front),['A','C']);
  check(targets,'D',false);assert.deepEqual(names(front),['A','C','D']);
  check(front,'C',true);
  front.children.find(r=>r.children[0].children[2]==='C').children[1].attrs.click();
  await click(all(dialog).find(n=>n.tag==='button'&&n.children[0]==='Save'));
  assert.deepEqual(saved.selected,['C','A']);assert.deepEqual(saved.targets,['B']);
 }
 {
  const nodes=[]; let result='idle\t0\tNo update has started.',serviceRefreshes=0;
  function E(tag,attrs,children){const n={tag,attrs:attrs||{},children:children||[],style:{},disabled:false,setAttribute(k,v){this.attrs[k]=v;}};nodes.push(n);return n;}
  const Module=new Function('baseclass','E','_','ui','notifications','window',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/update.js','utf8'))(
   {extend:x=>function(){Object.assign(this,x);}},E,x=>x,{}, {show(){}},{clearTimeout(){},setTimeout(){return 1;}});
  const update=new Module().render(async()=>result,E('strong',{},['v1.19.32']),async()=>{serviceRefreshes++;});
  const controls=nodes.filter(n=>n.tag==='button');
  assert.deepEqual(controls.map(n=>n.children[0]).sort(),['Upload update','Online update','Check for updates'].sort());
  assert.ok(controls.every(n=>!n.disabled),'core running state never disables updater controls');
  result='running\t80\tReplacing core'; await update.refresh(); assert.ok(controls.every(n=>n.disabled),'only an active update prevents concurrent updates');
  result='error\t100\tPrevious core restored'; await update.refresh(); assert.equal(serviceRefreshes,1); assert.ok(controls.every(n=>!n.disabled));
  assert.ok(!nodes.some(n=>n.attrs.class==='mclash-note'),'static update hints are removed');
 }
 const nodes = [], notifications = [], calls = [];
 let actualRunning = false, rejectSave = false, networkArgs, controllerArgs, subscriptionArgs, modal, managerRunning, savedText = '# Mclash OpenWrt subscription-names: ["Old subscription","Old subscription 2"]\n# Mclash OpenWrt subscription-urls: ["https://example.org/one","https://example.org/two"]\n# Mclash OpenWrt subscription-prefixes: ["1-","2-"]\n# Mclash OpenWrt subscription-usage: [{"total":100},null]\n# Mclash chain-settings: {}\n# Mclash node-chain 1: {}\n# Mclash node-chains: {}\n# other comment\nmixed-port: 7890\n';
 function E(tag, attrs, children) {
  const node = {tag, attrs:attrs || {}, children:children || [], disabled:false, value:(attrs || {}).value || '', checked:false,style:{},
   addEventListener(type,fn) { (this.listeners || (this.listeners={}))[type]=fn; }, setAttribute(key,value) {this.attrs[key]=value;}, appendChild(child) {this.children.push(child);}};
  Object.defineProperty(node,'textContent',{get() {return this.text || '';},set(value) {this.text=value; this.children=[];}});
  if (tag==='textarea') node.value=(children || []).join('');
  nodes.push(node); return node;
 }
 const file = {
  exec:async (path,args) => {
   assert.equal(path,'/usr/libexec/mclash-ui'); calls.push(args[0]);
   if (args[0]==='status') return {code:0,stdout:JSON.stringify({installed:true,running:actualRunning,enabled:false,version:'test'})};
   if (args[0].startsWith('probe-')) return {code:0,stdout:JSON.stringify({ok:true,ip_supported:false,latency:125})};
   if (args[0]==='devices') return {code:0,stdout:'{"devices":["br-lan","br-guest"]}'};
   if (args[0]==='save' && rejectSave) return {code:1,stderr:'Configuration validation failed'};
   if (args[0]==='read-config') return {code:0,stdout:savedText};
   if (args[0]==='fetch-subscription') return {code:0,stdout:'# Mclash subscription-usage: upload=10; download=20; total=100; expire=1893456000\nproxies: []\nrules: [MATCH,DIRECT]\n'};
   return {code:0,stdout:'<script>secret</script>'};
  },
  write:async (path,text,mode) => {
   assert.equal(mode,0o600);
   if (path==='/etc/mclash/config.upload.yaml') {savedText=text; calls.push('write');}
   else {assert.equal(path,'/etc/mclash/subscription.url'); calls.push('url');}
  }
 };
 const ui = {addNotification:(_title,element,type)=>notifications.push({element,type}),showModal:(title,children)=>{modal={title,children};},hideModal:()=>{modal=null;},
  tabs:{initTabGroup(panes) {assert.deepEqual(panes.map(n=>n.attrs['data-tab-title']),['Basic settings','Nodes and rules','Runtime configuration','Logs','Update core']);}}};
 const override = {call:(action,text,args)=>{if(action==='network') {networkArgs=args;return text;} if(action==='controller') {controllerArgs=args;return text;} if(action==='subscriptionSources') return Array.from({length:args.count},(_,i)=>'retained airport '+String.fromCharCode(65+i)); if(action==='subscription') {subscriptionArgs=args;return text;}
  return {controller:'0.0.0.0:9097',groups:[]};}};
 const app = new Function('view','fs','ui','E','_','management','proxy','overrides','template','update','notice','L','probe',source)(
  {extend:x=>x},file,ui,E,(text,context)=>context==='mclash'?text:({Edit:'\u7f16\u8f91',Delete:'\u5220\u9664',Cancel:'\u53d6\u6d88',Save:'\u4fdd\u5b58'}[text]||text),{render:(_content,_save,getRunning)=>{managerRunning=getRunning;return {element:E('div'),refresh() {}};}},
  {render:()=>({element:E('div'),refresh() {}})},override,{text:'rules: [MATCH,DIRECT]'}, {render:()=>({element:E('div'),refresh:async()=>{}})}, {show:(message,type)=>notifications.push({message,type})}, {resource:path=>'/luci-static/resources/'+path}, {run:(_kind,_source,_command)=>_command('probe-'+_kind).then(JSON.parse)});
 await app.load();
 app.render([JSON.stringify({installed:true,running:true,enabled:false}),savedText,'{"devices":["br-lan","br-guest"]}']);
 const click=async label=>{
  const node=nodes.filter(n=>n.tag==='button' && (n.attrs['aria-label']===label || n.children[0]===label)).at(-1);
  assert.ok(node,label+' must exist'); await node.attrs.click({currentTarget:node});
 };
 for (const label of ['Telegram connection','OpenAI connection','Baidu connection','Google connection','YouTube connection','GitHub connection']) {
  await click(label);
  const card=nodes.find(n=>n.attrs['aria-label']===label);
  const value=card.children[1].children[1];
  assert.equal(value.children.length,1);
  assert.equal(value.children[0].children[1],'125 ms');
  assert.equal(card.disabled,false);
 }
 assert.equal(nodes.filter(n=>n.tag==='img' && n.attrs.class==='mclash-brand-icon').length,6);
 assert.ok(!nodes.some(n=>n.attrs.class==='mclash-capture-state'),'running card does not show capture mode');
 assert.ok(nodes.some(n=>n.tag==='style' && String(n.children).includes('.mclash-status-grid>.mclash-status-card{height:98px}')),'status cards use one fixed desktop height');
 assert.ok(nodes.filter(n=>n.attrs.class==='btn cbi-button cbi-button-action mclash-rule-arrow').every(n=>n.attrs['data-prefix']==='Configure '),'every settings tile has an English Configure label');
 const configPane=nodes.find(n=>n.attrs['data-tab']==='config'); assert.ok(configPane.children.includes(nodes.find(n=>n.tag==='pre')));
 assert.doesNotMatch(nodes.find(n=>n.tag==='pre').children[0],/chain-settings|node-chain|subscription-prefixes|subscription-usage/);
 assert.match(nodes.find(n=>n.tag==='pre').children[0],/# Mclash OpenWrt subscription-names: \["1-Old subscription","2-Old subscription 2"\]/);
 assert.match(nodes.find(n=>n.tag==='pre').children[0],/# other comment\nmixed-port: 7890/);
 const originalText=savedText; savedText='# Mclash chain-settings: {}\n# Mclash node-chain 2: {}\nfresh runtime config'; calls.length=0; configPane.listeners['cbi-tab-active']();
 await new Promise(resolve=>setImmediate(resolve)); assert.ok(calls.includes('read-config'));
 assert.equal(nodes.find(n=>n.tag==='pre').textContent,'fresh runtime config'); savedText=originalText;
 configPane.listeners['cbi-tab-active'](); await new Promise(resolve=>setImmediate(resolve));
 assert.ok(!nodes.some(n=>n.tag==='button' && n.children[0]==='Restart service'),'restart control is absent');
 assert.ok(!nodes.some(n=>n.tag==='button' && n.children[0]==='Refresh configuration'),'config refreshes on tab activation');
 assert.deepEqual(nodes.filter(n=>n.tag==='h3').map(n=>n.children[0]),['Capture mode','Subscriptions']);
 const probeSource=nodes.find(n=>n.tag==='button' && n.attrs['aria-label']==='Probe source');
 assert.equal(probeSource.value,'browser');
 const captureSection=nodes.find(n=>n.tag==='section' && n.attrs['data-settings-group']==='capture');
 const rulesPane=nodes.find(n=>n.attrs['data-tab']==='rules'); assert.ok(rulesPane,'nodes and rules have a main page');
 assert.ok(!nodes.some(n=>n.tag==='textarea'),'subscription inputs are created only in the dialog');
 const text=n=>typeof n==='string'?n:(n.children||[]).map(text).join('');
 assert.ok(!text(captureSection).includes('Probe source：'),'capture selector is removed');
 const statusGrid=nodes.find(n=>n.attrs.class==='mclash-status-grid');
 assert.equal(statusGrid.children.at(-1),probeSource);
 assert.deepEqual(statusGrid.children.slice(2,8).map(n=>n.attrs['aria-label']),['Telegram connection','OpenAI connection','Baidu connection','Google connection','YouTube connection','GitHub connection']);
 await click('Probe source'); assert.equal(probeSource.value,'router');
 probeSource.disabled=true; await click('Probe source'); assert.equal(probeSource.value,'router');
 probeSource.disabled=false; await click('Probe source'); assert.equal(probeSource.value,'browser');
 const routerTile=()=>nodes.find(n=>n.tag==='button' && n.attrs['aria-label']==='Proxy scope');
 assert.ok(!nodes.some(n=>n.tag==='button' && ['Proxy LAN devices','Proxy router traffic','Proxy IPv6','Access control'].includes(n.attrs['aria-label'])),'proxy scope has one shared entry');
 assert.ok(text(routerTile()).includes('Configured · Inactive'),'capture disabled must not claim router proxy is active');
 assert.ok(routerTile().className.includes('mclash-inactive'));

 calls.length=0;
 await click('Capture mode');
 assert.equal(modal.title,'Capture mode');
 const mode=nodes.find(n=>n.tag==='select' && n.attrs['aria-label']==='Capture mode'); mode.value='tproxy';
 await click('Save');
 assert.deepEqual(networkArgs,{mode:'tproxy',interfaces:['br-lan'],lan:true,access:[],router:true,ipv6:false,stack:'mixed'});
 assert.ok(calls.indexOf('status')<calls.indexOf('write'),'recheck stale running status before saving');
 assert.ok(calls.includes('save')); assert.ok(!calls.includes('restart'));
 assert.equal(notifications.at(-1).type,'success');
 await click('Proxy scope'); assert.equal(modal.title,'Proxy scope');
 const scopeBox=label=>nodes.filter(n=>n.tag==='input' && n.attrs['aria-label']===label).at(-1);
 assert.equal(scopeBox('Proxy LAN devices').checked,true);
 assert.equal(scopeBox('Proxy router traffic').checked,true);
 assert.equal(scopeBox('Proxy IPv6').checked,false);
 scopeBox('Proxy LAN devices').checked=false; scopeBox('Proxy router traffic').checked=false; scopeBox('Proxy IPv6').checked=true;
 await click('Save'); assert.equal(networkArgs.lan,false); assert.equal(networkArgs.router,false); assert.equal(networkArgs.ipv6,true);
 assert.equal(networkArgs.mode,'tproxy'); assert.deepEqual(networkArgs.interfaces,['br-lan']);
 await click('Proxy scope'); assert.equal(scopeBox('Proxy IPv6').checked,true);
 scopeBox('Proxy router traffic').checked=true; scopeBox('Proxy IPv6').checked=false;
 await click('Save'); assert.equal(networkArgs.router,true); assert.equal(networkArgs.ipv6,false);
 assert.ok(nodes.find(n=>n.attrs['aria-label']==='LAN interfaces').className.includes('mclash-inactive'));
 await click('LAN interfaces');
 const choices=nodes.filter(n=>n.tag==='label'); assert.ok(choices.some(n=>n.children.includes('br-guest')));
 choices.find(n=>n.children.includes('br-guest')).children[0].checked=true;
 await click('Save'); assert.deepEqual(networkArgs.interfaces.slice().sort(),['br-guest','br-lan']);
 rejectSave=true; await click('Capture mode'); await click('Save'); assert.equal(notifications.at(-1).type,'error'); rejectSave=false;
 await click('Manage subscriptions');
 assert.equal(modal.title,'Subscriptions');
 function modalNodes(n) { return n && typeof n==='object' ? [n,...(n.children||[]).flatMap(modalNodes)] : []; }
 function airportInputs(label) { return modal.children.flatMap(modalNodes).filter(n=>n.tag==='input'&&n.attrs['aria-label']===label); }
 function airportRows() { return modal.children.flatMap(modalNodes).filter(n=>n.attrs.class==='mclash-actions mclash-subscription-row'); }
 async function airportClick(index,label) { const n=modalNodes(airportRows()[index]).find(n=>n.tag==='button'&&n.children[0]===label);await n.attrs.click({currentTarget:n}); }
 assert.deepEqual(airportRows().map(n=>n.children[0].children[0]),['1-Old subscription','2-Old subscription 2']);
 assert.ok(text(airportRows()[0]).includes('Remaining traffic: Unknown'));
 assert.deepEqual(airportRows()[0].children.filter(n=>n.tag==='button').map(n=>n.children[0]),['Edit','↓','Update','Delete']);
 await airportClick(0,'Edit');
 assert.deepEqual(modal.children.flatMap(modalNodes).filter(n=>n.tag==='button').map(n=>n.children[0]),['Cancel','Save']);
 const airportName=airportInputs('Subscription name')[0],airportUrl=airportInputs('Subscription URL')[0];
 airportName.value='';calls.length=0;await click('Save');assert.ok(!calls.includes('fetch-subscription'));
 airportName.value='Old subscription 2';await click('Save');assert.ok(!calls.includes('write'));
 airportName.value='Subscription A';calls.length=0;await click('Save');assert.ok(!calls.includes('fetch-subscription'),'renaming does not fetch');
 await airportClick(1,'Edit');airportInputs('Subscription name')[0].value='Subscription B';airportInputs('Subscription URL')[0].value='https://example.org/second';
 calls.length=0;await click('Save');assert.equal(calls.filter(c=>c==='fetch-subscription').length,1);
 assert.match(savedText,/# Mclash OpenWrt subscription-names: \["Subscription A","Subscription B"\]/);
 calls.length=0;await airportClick(0,'Update');assert.equal(calls.filter(c=>c==='fetch-subscription').length,1);
 assert.equal(subscriptionArgs.sources[1],'retained airport B');
 assert.ok(text(airportRows()[0]).includes('Remaining traffic: 70 B'));
 calls.length=0;await airportClick(0,'↓');assert.ok(!calls.includes('fetch-subscription'),'reordering must not fetch');
 assert.deepEqual(subscriptionArgs.prefixes,['2-','1-']);
 assert.deepEqual(airportRows().map(n=>n.children[0].children[0]),['1-Subscription B','2-Subscription A']);
 assert.equal(subscriptionArgs.sources[0],'retained airport B');
 await airportClick(0,'Delete');assert.equal(airportRows().length,1);assert.deepEqual(subscriptionArgs.prefixes,['1-']);
 await click('Add subscription');airportInputs('Subscription name')[0].value='Subscription C';airportInputs('Subscription URL')[0].value='https://example.org/third';
 calls.length=0;await click('Save');assert.equal(calls.filter(c=>c==='fetch-subscription').length,1);assert.equal(airportRows().length,2);
 await click('Listen address and port');
 const endpoint=nodes.filter(n=>n.tag==='input' && n.attrs['aria-label']==='Listen address and port').at(-1);
 endpoint.value='127.0.0.1:9091'; await click('Save');
 assert.deepEqual(controllerArgs,{address:'127.0.0.1',port:'9091'});
 await click('Listen address and port');
 nodes.filter(n=>n.tag==='input' && n.attrs['aria-label']==='Listen address and port').at(-1).value='invalid';
 calls.length=0; await click('Save'); assert.ok(!calls.includes('write')); assert.equal(notifications.at(-1).type,'error');
 await click('Proxy scope');
 const accessInput=nodes.filter(n=>n.tag==='textarea' && n.attrs['aria-label']==='Proxy IPs / ranges (one per line)').at(-1);
 assert.equal(accessInput.attrs.wrap,'off'); accessInput.value='192.168.10.100\n192.168.10.0/24';
 await click('Save'); assert.deepEqual(networkArgs.access,['192.168.10.100','192.168.10.0/24']);
 await click('Proxy scope'); assert.equal(nodes.filter(n=>n.tag==='textarea' && n.attrs['aria-label']==='Proxy IPs / ranges (one per line)').at(-1).value,accessInput.value);
 await click('Save'); assert.deepEqual(networkArgs.access,['192.168.10.100','192.168.10.0/24']);
 actualRunning=true; await nodes.find(n=>n.attrs['data-tab']==='settings').listeners['cbi-tab-active']();
 assert.ok(text(routerTile()).includes('Enabled')); assert.ok(!routerTile().className.includes('mclash-inactive'),'running TProxy restores effective state');
 assert.ok(!nodes.some(n=>n.tag==='button' && n.attrs['aria-label']==='TUN stack'),'stack belongs inside capture dialog');
 calls.length=0; await click('Manage subscriptions');
 assert.ok(!calls.includes('fetch-subscription')); assert.equal(notifications.at(-1).type,'error','actual running service still protects profile');
 assert.ok(nodes.filter(n=>n.mclashConfig).every(n=>n.disabled),'running locks all general configuration tiles');
 assert.ok(!nodes.find(n=>n.tag==='button' && n.attrs['aria-label']==='Start / stop').disabled,'stop remains usable');
 actualRunning=false; assert.equal(await managerRunning(),false,'manager must not treat UI busy as core running');
 await click('Refresh logs'); assert.equal(nodes.filter(n=>n.tag==='pre')[1].textContent,'<script>secret</script>');
 await click('Clear logs'); assert.ok(calls.includes('clear-service-logs'));
 assert.ok(nodes.filter(n=>n.tag==='button' && n.children[0]!=='Cancel fetch').every(n=>!n.disabled));
 calls.length=0; actualRunning=false; await click('Start / stop'); assert.ok(calls.includes('start'),'card starts the stopped service');
 calls.length=0; actualRunning=true; await click('Start / stop'); assert.ok(!calls.includes('stop'),'first click only arms stop confirmation');
 assert.equal(nodes.find(n=>n.attrs['aria-label']==='Start / stop').attrs.title,'Click again to stop the service');
 await click('Start / stop'); assert.equal(calls.filter(c=>c==='stop').length,1,'second click stops the running service');
 console.log('Frontend checks passed: stale status, subscription, selected LAN devices and service protection');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
