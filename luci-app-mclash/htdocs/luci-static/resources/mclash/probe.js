'use strict';
'require baseclass';
var targets = {
 telegram:'https://telegram.org/',
 openai:'https://chatgpt.com/',
 baidu:'https://www.baidu.com/',
 google:'https://www.google.com/generate_204',
 youtube:'https://www.youtube.com/generate_204',
 github:'https://github.com/'
};
return baseclass.extend({
 run: function(kind, source, command) {
  var url = targets[kind];
  if (!url) return Promise.reject(new Error('未知检测站点'));
  if (source !== 'browser') return command('probe-'+kind).then(JSON.parse);
  var result = {ip_supported:false}, started = performance.now(), abort = new AbortController();
  var timer = setTimeout(function() { abort.abort(); },10000);
  return fetch(url,{method:'HEAD',signal:abort.signal,credentials:'omit',cache:'no-store',mode:'no-cors',redirect:'follow'}).then(function() {
   result.latency = Math.round(performance.now()-started); result.ok = true;
  }).catch(function() { result.ok = false; result.latency_error = '连接失败或超时'; }).finally(function() { clearTimeout(timer); }).then(function() { return result; });
 }
});
