'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
let dialog, saved;
const data = {actions:['groups','rules','prependProxy'],groups:[{name:'test',type:'select',proxies:['DIRECT']}],managedGroups:[],filters:{},direct:{},policies:['DIRECT'],rules:['DOMAIN,one.example,DIRECT','MATCH,DIRECT'],chains:{'1':{front:[],frontTargets:[]}},nodes:['A','B'],nextChainId:'2'};
function E(tag,attrs,children) {
 const n={tag,attrs:attrs||{},children:children||[],value:(attrs||{}).value||'',checked:(attrs||{}).checked!=null,
  setAttribute(k,v){this.attrs[k]=v;},appendChild(c){this.children.push(c);},removeChild(c){this.children.splice(this.children.indexOf(c),1);},addEventListener(k,v){(this.listeners||(this.listeners={}))[k]=v;}};
 if(tag==='select')n.value=(n.children.find(c=>c.attrs.selected!=null)||n.children[0]).attrs.value;
 Object.defineProperty(n,'firstChild',{get(){return this.children[0];}});
 Object.defineProperty(n,'textContent',{set(){this.children=[];}});return n;
}
const Module=new Function('baseclass','E','_','ui','overrides','notifications',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/management.js','utf8'))(
 {extend:x=>function(){Object.assign(this,x);}},E,(text,context)=>context==='mclash'?text:({Edit:'\u7f16\u8f91',Delete:'\u5220\u9664',Cancel:'\u53d6\u6d88',Save:'\u4fdd\u5b58'}[text]||text),{showModal(title,children){dialog=E('div',{},children);},hideModal(){dialog=null;}},
 {call(op,content,args){if(op==='summary')return data;saved=args;if(op==='rules')data.rules=args.rules;return content;}},{show(message,type){if(type==='error')throw new Error(message);}});
const manager=new Module().render(()=>'',async()=>{},()=>false);
const nodes=n=>n&&typeof n==='object'?[n,...(n.children||[]).flatMap(nodes)]:[];
const buttons=n=>nodes(n).filter(n=>n.tag==='button');
async function click(root,label){const n=buttons(root).find(n=>n.attrs['aria-label']===label||n.children[0]===label);assert.ok(n,label);await n.attrs.click({currentTarget:n});}
(async()=>{
 data.dnsYaml='enable: true\nnameserver:\n  - https://dns.example/dns-query\n';
 await click(manager.element,'DNS management');
 assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['Cancel','Save']);
 const dns=nodes(dialog).find(n=>n.attrs['aria-label']==='DNS configuration (YAML)');
 assert.equal(dns.value,data.dnsYaml);
 dns.value='enable: false\n';await click(dialog,'Save');assert.equal(saved.yaml,'enable: false\n');
 await click(manager.element,'Proxy group management');await click(dialog,'Edit');
 await click(dialog,'Cancel');assert.ok(buttons(dialog).some(n=>n.children[0]==='Add proxy group'));
 await click(dialog,'Edit');
 const field=label=>nodes(dialog).find(n=>n.attrs['aria-label']===label);
 const type=field('Type'),url=field('Test URL'),interval=field('Test interval (seconds)');
 type.value='url-test';type.listeners.change();assert.equal(url.value,'https://www.gstatic.com/generate_204');assert.equal(interval.value,'300');
 url.value='https://custom.example/check';interval.value='900';type.value='fallback';type.listeners.change();assert.equal(url.value,'https://custom.example/check');assert.equal(interval.value,'900');
 type.value='load-balance';url.value='';interval.value='';await click(dialog,'Save');assert.equal(saved.group.url,'https://www.gstatic.com/generate_204');assert.equal(saved.group.interval,300);
 await click(manager.element,'Rule management');assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['Edit','↓','Delete','Edit','↑','Delete','Add rule','Close']);
 await click(dialog,'Edit');assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['Cancel','Save']);field('Rule').value='DOMAIN,new.example,DIRECT';await click(dialog,'Save');assert.equal(saved.rules[0],'DOMAIN,new.example,DIRECT');
 await click(manager.element,'Rule management');await click(dialog,'↓');assert.deepEqual(saved.rules,['MATCH,DIRECT','DOMAIN,new.example,DIRECT']);
 await click(manager.element,'Rule management');await click(dialog,'Delete');assert.deepEqual(saved.rules,['DOMAIN,new.example,DIRECT']);
 await click(manager.element,'Rule management');await click(dialog,'Add rule');field('Rule').value='MATCH,DIRECT';await click(dialog,'Save');assert.equal(saved.rules.length,2);
 await click(manager.element,'Proxy chains');assert.ok(nodes(dialog).some(n=>n.attrs.class==='mclash-modal-scroll'));
 await click(dialog,'Edit');assert.ok(nodes(dialog).some(n=>n.attrs.class==='mclash-modal-scroll'));
 console.log('Rule rows, group test defaults and hidden chain scrollbars passed');
})().catch(error=>{console.error(error);process.exitCode=1;});
