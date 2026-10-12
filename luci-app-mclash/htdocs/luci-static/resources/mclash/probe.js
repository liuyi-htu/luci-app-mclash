'use strict';
'require baseclass';
var targets = {telegram:'https://telegram.org',openai:'https://chatgpt.com',baidu:'https://www.baidu.com',google:'https://www.google.com/generate_204',github:'https://github.com',youtube:'https://www.youtube.com/generate_204'};
function request(url, options, parse) {
 var abort = new AbortController(), timer = setTimeout(function() { abort.abort(); },10000);
 return fetch(url,Object.assign({signal:abort.signal,credentials:'omit',cache:'no-store'},options)).then(parse).finally(function() { clearTimeout(timer); });
}
return baseclass.extend({
 run: function(kind, source, command) {
  if (!targets[kind]) return Promise.reject(new Error('未知检测站点'));
  if (source !== 'browser') return command('probe-'+kind).then(JSON.parse);
  var result = {}, started = performance.now();
  var latency = request(targets[kind],{method:'HEAD',mode:'no-cors'},function() { result.latency = Math.round(performance.now()-started); }).catch(function() { result.latency_error = '浏览器连接失败或超时'; });
  var exit = request('https://ipwho.is/',{mode:'cors'},function(reply) {
   if (!reply.ok) throw new Error('查询失败');
   return reply.text().then(function(text) {
    if (text.length > 8192) throw new Error('响应过大');
    var data = JSON.parse(text);
    if (data.success === false || !data.ip || !/^[0-9a-fA-F:.]+$/.test(data.ip)) throw new Error('查询失败');
    result.ip = data.ip; result.region = [data.country,data.city].filter(Boolean).join(' ');
   });
  }).catch(function() { result.ip_error = '浏览器出口查询失败（网络或跨域限制）'; });
  return Promise.all([latency,exit]).then(function() { result.ok = !!result.ip && typeof result.latency === 'number'; return result; });
 }
});
