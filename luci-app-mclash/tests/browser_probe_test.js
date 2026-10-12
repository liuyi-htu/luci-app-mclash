'use strict';
const assert = require('node:assert/strict'),fs=require('node:fs');
const Probe=new Function('baseclass',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/probe.js','utf8'))({extend:x=>function(){Object.assign(this,x);}});
let fail=false,bodyOverride=null,invalidJsonp=false,requests=[],removed=0;
global.window=global;
global.document={createElement:()=>({remove(){removed++;}}),head:{appendChild(script){
 const url=new URL(script.src),ali=url.hostname.endsWith('.dns-detect.alicdn.com');
 if(ali){assert.match(url.hostname,/^\d+-[a-f0-9]+\.dns-detect\.alicdn\.com$/);assert.equal(url.pathname,'/api/detect/DescribeDNSLookup');}
 else{assert.equal(url.hostname,'r.inews.qq.com');assert.equal(url.pathname,'/api/ip2city');assert.equal(url.searchParams.get('otype'),'jsonp');}
 requests.push(script.src);queueMicrotask(()=>{if(fail){script.onerror();return;}window[url.searchParams.get(ali?'cb':'callback')](invalidJsonp?{}:ali?{retCode:200,content:{localIp:'198.51.100.2',ipCountry:'cn',ipProvince:'henan',ipOperator:'cmcc'}}:{ret:0,ip:'198.51.100.3',country:'中国',province:'河南',city:'新乡'});});
}}};
global.fetch=async(url,options)=>{requests.push(url);assert.equal(new URL(url).pathname,'/cdn-cgi/trace');assert.equal(options.mode,'cors');assert.equal(options.redirect,'error');assert.equal(options.credentials,'omit');assert.equal(options.cache,'no-store');if(fail)throw new Error('network failure');return {ok:true,text:async()=>bodyOverride??'h='+new URL(url).hostname+'\nip=203.0.113.1\nloc=US\n'};};
(async()=>{
 const probe=new Probe(),hosts={claude:'claude.ai',openai:'chatgpt.com',cloudflare:'www.cloudflare.com',discord:'discord.com'};
 for(const kind of ['claude','openai','cloudflare','aliyun','tencent','discord']){
  requests=[];const result=await probe.run(kind,'browser',()=>{throw new Error('must not use router');});assert.ok(result.ok);assert.equal(result.ip_supported,true);assert.equal(typeof result.latency,'number');assert.equal(requests.length,1);
  if(hosts[kind]){assert.equal(requests[0],'https://'+hosts[kind]+'/cdn-cgi/trace');assert.equal(result.ip,'203.0.113.1');assert.equal(result.country,'US');}
  else{assert.equal(result.ip,kind==='aliyun'?'198.51.100.2':'198.51.100.3');assert.equal(result.country,kind==='aliyun'?'cn':'中国');assert.equal(result.region,kind==='aliyun'?'henan cmcc':'河南 新乡');}
  assert.ok(!requests.some(u=>/ipwho|ipip/.test(u)));
 }
 for(const body of ['h=other.example\nip=203.0.113.1\n','h=chatgpt.com\nip=999.0.0.1\n','x'.repeat(8193)]){bodyOverride=body;requests=[];const result=await probe.run('openai','browser');assert.ok(!result.ok);assert.ok(!result.ip);assert.equal(typeof result.latency,'number');assert.ok(result.ip_error);assert.equal(requests.length,1);}
 bodyOverride='h=chatgpt.com\nip=2001:db8::1\nloc=JP\n';{const result=await probe.run('openai','browser');assert.equal(result.ip,'2001:db8::1');assert.equal(result.country,'JP');}bodyOverride=null;
 for(const kind of ['claude','openai','cloudflare','aliyun','tencent','discord']){fail=true;const result=await probe.run(kind,'browser');assert.ok(!result.ok);assert.ok(!result.ip);assert.ok(result.ip_error);fail=false;}
 invalidJsonp=true;for(const kind of ['aliyun','tencent'])assert.ok(!(await probe.run(kind,'browser')).ok);invalidJsonp=false;
 assert.ok(removed>=6);assert.ok(!Object.keys(global).some(k=>k.startsWith('__mclash_ip_')));
 let action;await probe.run('discord','router',async x=>{action=x;return '{"ok":true,"ip":"203.0.113.1"}';});assert.equal(action,'probe-discord');await assert.rejects(()=>probe.run('not-a-site','browser'));
 console.log('All six direct target probes and failure cleanup passed');
})().catch(e=>{console.error(e);process.exitCode=1;});
