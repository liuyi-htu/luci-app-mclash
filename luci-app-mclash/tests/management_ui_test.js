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
 {extend:x=>function(){Object.assign(this,x);}},E,x=>x,{showModal(title,children){dialog=E('div',{},children);},hideModal(){dialog=null;}},
 {call(op,content,args){if(op==='summary')return data;saved=args;if(op==='rules')data.rules=args.rules;return content;}},{show(message,type){if(type==='error')throw new Error(message);}});
const manager=new Module().render(()=>'',async()=>{},()=>false);
const nodes=n=>n&&typeof n==='object'?[n,...(n.children||[]).flatMap(nodes)]:[];
const buttons=n=>nodes(n).filter(n=>n.tag==='button');
async function click(root,label){const n=buttons(root).find(n=>n.attrs['aria-label']===label||n.children[0]===label);assert.ok(n,label);await n.attrs.click({currentTarget:n});}
(async()=>{
 data.dnsYaml='enable: true\nnameserver:\n  - https://dns.example/dns-query\n';
 await click(manager.element,'DNS 管理');
 assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['取消','保存']);
 const dns=nodes(dialog).find(n=>n.attrs['aria-label']==='DNS 配置（YAML）');
 assert.equal(dns.value,data.dnsYaml);
 dns.value='enable: false\n';await click(dialog,'保存');assert.equal(saved.yaml,'enable: false\n');
 await click(manager.element,'代理组管理');await click(dialog,'编辑');
 const field=label=>nodes(dialog).find(n=>n.attrs['aria-label']===label);
 const type=field('类型'),url=field('测速地址'),interval=field('测速间隔（秒）');
 type.value='url-test';type.listeners.change();assert.equal(url.value,'https://www.gstatic.com/generate_204');assert.equal(interval.value,'300');
 url.value='https://custom.example/check';interval.value='900';type.value='fallback';type.listeners.change();assert.equal(url.value,'https://custom.example/check');assert.equal(interval.value,'900');
 type.value='load-balance';url.value='';interval.value='';await click(dialog,'保存');assert.equal(saved.group.url,'https://www.gstatic.com/generate_204');assert.equal(saved.group.interval,300);
 await click(manager.element,'规则管理');assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['编辑','↓','删除','编辑','↑','删除','新增规则','关闭']);
 await click(dialog,'编辑');assert.deepEqual(buttons(dialog).map(n=>n.children[0]),['取消','保存']);field('规则').value='DOMAIN,new.example,DIRECT';await click(dialog,'保存');assert.equal(saved.rules[0],'DOMAIN,new.example,DIRECT');
 await click(manager.element,'规则管理');await click(dialog,'↓');assert.deepEqual(saved.rules,['MATCH,DIRECT','DOMAIN,new.example,DIRECT']);
 await click(manager.element,'规则管理');await click(dialog,'删除');assert.deepEqual(saved.rules,['DOMAIN,new.example,DIRECT']);
 await click(manager.element,'规则管理');await click(dialog,'新增规则');field('规则').value='MATCH,DIRECT';await click(dialog,'保存');assert.equal(saved.rules.length,2);
 await click(manager.element,'链式节点');assert.ok(nodes(dialog).some(n=>n.attrs.class==='mclash-modal-scroll'));
 await click(dialog,'编辑');assert.ok(nodes(dialog).some(n=>n.attrs.class==='mclash-modal-scroll'));
 console.log('Rule rows, group test defaults and hidden chain scrollbars passed');
})().catch(error=>{console.error(error);process.exitCode=1;});
