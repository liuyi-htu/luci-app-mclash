'use strict';
'require baseclass';

var host;
return baseclass.extend({
 show: function(message, type) {
  if (!message) return;
  type = ['success', 'error', 'info'].indexOf(type) >= 0 ? type : 'info';
  if (!host || !host.parentNode) {
   document.head.appendChild(E('style', {}, [
    '.mclash-toast-host{position:fixed;top:16px;right:16px;z-index:2147483646;width:min(360px,calc(100vw - 32px));display:grid;gap:8px;pointer-events:none}',
    '.mclash-toast{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;background:var(--background-color,#fff);color:var(--text-color,#333);border:1px solid #e0e4ea;border-left:4px solid #1677ff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.14);pointer-events:auto;font-size:13px;line-height:1.5;animation:mclash-toast-in .16s ease-out}',
    '.mclash-toast-success{border-left-color:#198754}.mclash-toast-error{border-left-color:#dc3545}.mclash-toast-icon{font-weight:bold;color:#1677ff}.mclash-toast-success .mclash-toast-icon{color:#198754}.mclash-toast-error .mclash-toast-icon{color:#dc3545}.mclash-toast-text{flex:1;min-width:0;overflow-wrap:anywhere;white-space:pre-wrap}.mclash-toast-close{border:0;background:transparent;color:inherit;padding:0 2px;font-size:18px;cursor:pointer;line-height:1.2}@keyframes mclash-toast-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.mclash-toast{animation:none}}'
   ].join('')));
   host = E('div', {'class':'mclash-toast-host'});
   document.body.appendChild(host);
  }
  var timer, toast;
  function dismiss() { window.clearTimeout(timer); if (toast.parentNode) toast.parentNode.removeChild(toast); }
  toast = E('div', {'class':'mclash-toast mclash-toast-' + type, role:type === 'error' ? 'alert' : 'status'}, [
   E('span', {'class':'mclash-toast-icon', 'aria-hidden':'true'}, [type === 'success' ? '✓' : type === 'error' ? '!' : 'i']),
   E('span', {'class':'mclash-toast-text'}, [String(message)]),
   E('button', {type:'button', 'class':'mclash-toast-close', 'aria-label':_('关闭提示'), click:dismiss}, ['×'])
  ]);
  while (host.children.length >= 3) host.removeChild(host.firstChild);
  host.appendChild(toast);
  timer = window.setTimeout(dismiss, 5000);
  return toast;
 }
});
