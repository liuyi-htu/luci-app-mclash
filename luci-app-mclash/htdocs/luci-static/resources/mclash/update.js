'use strict';
'require baseclass';
'require mclash.i18n as i18n';
'require ui';
'require mclash.notify as notifications';
return baseclass.extend({
 render: function(command, version, refreshService) {
  var latest = E('strong', {}, [_('Not checked', 'mclash')]);
  var fill = E('div', {'class': 'mclash-update-progress-fill'});
  var progress = E('div', {'class': 'mclash-update-progress', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': 0}, [fill]);
  var message = E('span', {}, [_('No update has started.', 'mclash')]), timer;
  var controls = [];
  function error(err) { notifications.show(err.message || String(err), 'error'); }
  function refresh() {
   window.clearTimeout(timer); timer = null;
   return command('update-status').then(function(output) {
    var fields = output.trim().split('\t'), percent = Math.max(0, Math.min(100, Number(fields[1]) || 0));
    fill.style.width = percent + '%'; progress.setAttribute('aria-valuenow', String(percent));
    message.textContent = percent + '% · ' + i18n.translate(fields[2] || 'No update has started.');
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
  var online = action(_('Online update', 'mclash'), function() { return command('update-online').then(refresh); }, 'cbi-button-apply important');
  var upload = action(_('Upload update', 'mclash'), function() { return ui.uploadFile('/tmp/mclash-mihomo.upload').then(function(reply) { if (reply.size > 134217728) throw new Error(_('The uploaded file must not exceed 128 MiB.', 'mclash')); return command('update-local'); }).then(refresh); });
  return {element: E('div', {}, [
   E('div', {'class':'mclash-update-versions'}, [E('span', {}, [_('Current version: ', 'mclash'), version]), E('span', {}, [_('Latest version: ', 'mclash'), latest])]),
   E('div', {'class': 'mclash-update-status'}, [progress, message]),
   E('div', {'class': 'mclash-actions'}, [
    action(_('Check for updates', 'mclash'), function() { return command('check-update').then(function(output) { var fields = output.trim().split('\t'); latest.textContent = fields[1] || _('Unknown', 'mclash'); notifications.show(fields[2] === '1' ? _('A new version is available.', 'mclash') : _('Already up to date.', 'mclash'), 'info'); }); }),
    online, upload
   ])
   ]), refresh: refresh};
 }
});
