'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Probe = new Function('baseclass',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/probe.js','utf8'))({extend:x=>function(){Object.assign(this,x);}});
let headFail=false, ipFail=false, requests=[];
global.fetch=async (url,options)=>{
 requests.push({url,options});
 if (options.method==='HEAD') {assert.equal(options.mode,'no-cors');if (headFail) throw new Error('transport failure');return {type:'opaque',status:0};}
 assert.equal(options.mode,'cors'); if(ipFail)throw new Error('cors failure');
 return {ok:true,text:async()=>JSON.stringify({success:true,ip:'203.0.113.1',country:'Test',city:'City'})};
};
(async()=>{
 const probe=new Probe();
 for(const kind of ['telegram','openai','aliyun','google','github','youtube']) {
  const result=await probe.run(kind,'browser',()=>{throw new Error('must not use router in browser mode');});
  assert.ok(result.ok);assert.equal(result.ip,'203.0.113.1');assert.equal(result.region,'Test City');assert.equal(typeof result.latency,'number');
 }
 assert.ok(requests.every(x=>x.options.credentials==='omit' && x.options.cache==='no-store'));
 headFail=true; let result=await probe.run('telegram','browser');assert.ok(!result.ok);assert.ok(result.ip);assert.ok(result.latency_error);
 headFail=false;ipFail=true;result=await probe.run('openai','browser');assert.ok(!result.ok);assert.equal(typeof result.latency,'number');assert.ok(result.ip_error);
 let action;result=await probe.run('google','router',async x=>{action=x;return '{"ok":true,"latency":5}';});assert.equal(action,'probe-google');assert.equal(result.latency,5);
 await assert.rejects(()=>probe.run('not-a-site','browser'));
 console.log('Browser/router probes and partial failure checks passed');
})().catch(e=>{console.error(e);process.exitCode=1;});
