'use strict';
'require baseclass';
var traces = {claude:'https://claude.ai/cdn-cgi/trace',openai:'https://chatgpt.com/cdn-cgi/trace',cloudflare:'https://www.cloudflare.com/cdn-cgi/trace',discord:'https://discord.com/cdn-cgi/trace'};
function validIP(ip) {
 if (typeof ip !== 'string') return false;
 if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) return ip.split('.').every(function(part) { return part.length <= 3 && Number(part) <= 255; });
 if (!ip.includes(':') || !/^[0-9a-f:]+$/i.test(ip)) return false;
 try { new URL('http://['+ip+']/'); return true; } catch (_) { return false; }
}
function jsonpProbe(kind) {
 var started = performance.now(), callback = '__mclash_ip_'+Date.now()+'_'+Math.random().toString(16).slice(2);
 var host = Date.now()+'-'+Math.random().toString(16).slice(2)+'.dns-detect.alicdn.com';
 return new Promise(function(resolve, reject) {
  var script = document.createElement('script'), settled = false;
  var timer = setTimeout(function() { finish(new Error('出口查询超时')); },10000);
  function finish(error, data) {
   if (settled) return; settled = true;
   clearTimeout(timer); script.remove(); delete window[callback];
   if (error) { reject(error); return; }
   var info = kind === 'aliyun' ? data && data.content : data;
   var ip = info && (kind === 'aliyun' ? info.localIp : info.ip);
   if (!data || (kind === 'aliyun' ? data.retCode !== 200 : data.ret !== 0) || !validIP(ip)) { reject(new Error('目标站点未返回有效出口')); return; }
   var country = kind === 'aliyun' ? info.ipCountry : info.country;
   var region = kind === 'aliyun' ? [info.ipProvince,info.ipOperator] : [info.province,info.city];
   resolve({ok:true,ip_supported:true,ip:ip,country:country,region:region.filter(function(value) { return typeof value === 'string' && value; }).join(' '),latency:Math.round(performance.now()-started)});
  }
  window[callback] = function(data) { finish(null, data); };
  script.onerror = function() { finish(new Error('目标站点出口查询失败')); };
  script.src = kind === 'aliyun' ? 'https://'+host+'/api/detect/DescribeDNSLookup?cb='+encodeURIComponent(callback) : 'https://r.inews.qq.com/api/ip2city?otype=jsonp&callback='+encodeURIComponent(callback);
  script.referrerPolicy = 'no-referrer'; document.head.appendChild(script);
 }).catch(function(error) { return {ok:false,ip_supported:true,ip_error:error.message,latency_error:'连接失败或超时'}; });
}
return baseclass.extend({
 run: function(kind, source, command) {
  if (!traces[kind] && kind !== 'aliyun' && kind !== 'tencent') return Promise.reject(new Error('未知检测站点'));
  if (source !== 'browser') return command('probe-'+kind).then(JSON.parse);
  if (kind === 'aliyun' || kind === 'tencent') return jsonpProbe(kind);
  var url = traces[kind], result = {ip_supported:true}, started = performance.now(), abort = new AbortController();
  var timer = setTimeout(function() { abort.abort(); },10000);
  return fetch(url,{signal:abort.signal,credentials:'omit',cache:'no-store',mode:'cors',redirect:'error'}).then(function(reply) {
   result.latency = Math.round(performance.now()-started);
   if (!reply.ok) throw new Error('查询失败');
   return reply.text().then(function(text) {
    if (text.length > 8192) throw new Error('响应过大');
    var data = {};
    text.split(/\r?\n/).forEach(function(line) { var i = line.indexOf('='); if (i > 0) data[line.slice(0,i)] = line.slice(i+1).trim(); });
    if (data.h !== new URL(url).hostname || !validIP(data.ip)) throw new Error('目标站点未返回有效出口');
    result.ip = data.ip; if (/^[A-Z]{2}$/.test(data.loc || '')) result.country = data.loc;
   });
  }).catch(function() { result.ip_error = '目标站点出口查询失败（网络或跨域限制）'; if (typeof result.latency !== 'number') result.latency_error = '连接失败或超时'; }).finally(function() { clearTimeout(timer); }).then(function() { result.ok = !!result.ip && typeof result.latency === 'number'; return result; });
 }
});
