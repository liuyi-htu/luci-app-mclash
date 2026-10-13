'use strict';
'require baseclass';
return baseclass.extend({
 render: function(getConfig, getRunning) {
  var link = E('a', {'class': 'btn mclash-button cbi-button mclash-panel-button', 'aria-label': _('Open proxy dashboard', 'mclash'), target: '_blank', rel: 'noopener noreferrer', 'aria-disabled': 'true', click: function(ev) { if (!link.hasAttribute('href')) ev.preventDefault(); }}, [_('Open proxy dashboard', 'mclash')]);
  function refresh() {
   link.removeAttribute('href');
   link.setAttribute('aria-disabled', 'true');
   if (!getRunning()) { link.setAttribute('title', _('Start the proxy first.', 'mclash')); return Promise.resolve(); }
   var config = getConfig();
   var match = /^(\[[^\]]+\]|[^:]+):([0-9]+)$/.exec(config.controller || '');
   if (!match || /^(?:127\.|localhost|\[::1\])/.test(config.controller)) {
    link.setAttribute('title', _('The dashboard requires a controller accessible from the LAN.', 'mclash')); return Promise.resolve();
   }
   var params = new URLSearchParams({hostname: /^(?:0\.0\.0\.0|\[::\])$/.test(match[1]) ? location.hostname : match[1].replace(/^\[|\]$/g, ''), port: match[2], secret: config.secret || '', protocol: 'http', disableUpgradeCore: '1', disableTunMode: '1'});
   link.href = '/mclash/zashboard/#/setup?' + params.toString();
   link.setAttribute('aria-disabled', 'false');
   link.setAttribute('title', _('Open the Zashboard proxy dashboard.', 'mclash'));
   return Promise.resolve();
  }
  return {element: link, refresh: refresh};
 }
});
