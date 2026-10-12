'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const Probe=new Function('baseclass',fs.readFileSync(__dirname+'/../htdocs/luci-static/resources/mclash/probe.js','utf8'))({extend:x=>function(){Object.assign(this,x);}});
let fail=false,requests=[];
global.fetch=async(url,options)=>{
 requests.push({url,options});
 assert.equal(options.method,'HEAD');assert.equal(options.mode,'no-cors');assert.equal(options.redirect,'follow');
 assert.equal(options.credentials,'omit');assert.equal(options.cache,'no-store');
 if(fail)throw new Error('network failure');
 return {type:'opaque'};
};
(async()=>{
 const probe=new Probe(),targets={telegram:'https://telegram.org/',openai:'https://chatgpt.com/',baidu:'https://www.baidu.com/',google:'https://www.google.com/generate_204',youtube:'https://www.youtube.com/generate_204',github:'https://github.com/'};
 for(const kind of Object.keys(targets)){
  requests=[];const result=await probe.run(kind,'browser',()=>{throw new Error('must not use router');});
  assert.ok(result.ok);assert.equal(result.ip_supported,false);assert.equal(typeof result.latency,'number');assert.ok(!result.ip);assert.equal(requests.length,1);assert.equal(requests[0].url,targets[kind]);
 }
 for(const kind of Object.keys(targets)){fail=true;const result=await probe.run(kind,'browser');assert.ok(!result.ok);assert.ok(result.latency_error);fail=false;}
 let action;await probe.run('github','router',async value=>{action=value;return '{"ok":true,"ip_supported":false,"latency":125}';});assert.equal(action,'probe-github');
 await assert.rejects(()=>probe.run('not-a-site','browser'));
 console.log('All six latency-only browser probes passed');
})().catch(error=>{console.error(error);process.exitCode=1;});
