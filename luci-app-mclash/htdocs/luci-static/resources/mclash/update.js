'use strict';
'require baseclass';
'require ui';
'require mclash.notify as notifications';
return baseclass.extend({
 render: function(command, version, refreshService) {
  var latest = E('strong', {}, [_('未检查')]);
  var fill = E('div', {'class': 'mclash-update-progress-fill'});
  var progress = E('div', {'class': 'mclash-update-progress', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': 0}, [fill]);
  var message = E('span', {}, [_('尚未开始更新。')]), timer;
  var controls = [];
  function error(err) { notifications.show(err.message || String(err), 'error'); }
  function refresh() {
   window.clearTimeout(timer); timer = null;
   return command('update-status').then(function(output) {
    var fields = output.trim().split('\t'), percent = Math.max(0, Math.min(100, Number(fields[1]) || 0));
    fill.style.width = percent + '%'; progress.setAttribute('aria-valuenow', String(percent));
    message.textContent = percent + '% · ' + (fields[2] || _('尚未开始更新。'));
    message.className = fields[0] === 'error' ? 'mclash-bad' : fields[0] === 'success' ? 'mclash-ok' : '';
    controls.forEach(function(node) { node.disabled = fields[0] === 'running'; });
    if (fields[0] === 'running') timer = window.setTimeout(function() { refresh().catch(error); }, 2000);
    else if (fields[0] === 'success' || fields[0] === 'error') return refreshService();
   });
  }
  function action(label, handler, style) {
   var node = E('button', {type: 'button', 'class': 'btn mclash-button ' + (style || 'cbi-button-action'), click: function() {
    node.disabled = true;
    return Promise.resolve().then(handler).catch(error).finally(function() { if (!timer) node.disabled = false; });
   }}, [label]); controls.push(node); return node;
  }
  var online = action(_('在线更新'), function() { return command('update-online').then(refresh); }, 'cbi-button-apply important');
  var upload = action(_('上传更新'), function() { return ui.uploadFile('/tmp/mclash-mihomo.upload').then(function(reply) { if (reply.size > 134217728) throw new Error(_('上传文件不能超过 128 MiB。')); return command('update-local'); }).then(refresh); });
  return {element: E('div', {}, [
   E('div', {'class':'mclash-update-versions'}, [E('span', {}, [_('当前版本：'), version]), E('span', {}, [_('最新版本：'), latest])]),
   E('div', {'class': 'mclash-update-status'}, [progress, message]),
   E('div', {'class': 'mclash-actions'}, [
    action(_('检查更新'), function() { return command('check-update').then(function(output) { var fields = output.trim().split('\t'); latest.textContent = fields[1] || _('未知'); notifications.show(fields[2] === '1' ? _('发现可安装的新版本。') : _('当前已是最新版本。'), 'info'); }); }),
    online, upload
   ])
   ]), refresh: refresh};
 }
});
