'use strict';
'require baseclass';
'require ui';
'require mclash.notify as notifications';
'require mclash.overrides as overrides';

return baseclass.extend({
	render: function(getContent, saveContent, getRunning) {
		var self = this, locked = false, actionButtons = [];
		function setRunning(active) { locked = !!active; actionButtons.forEach(function(n) { n.disabled = locked || n.mclashBusy; }); }
		function summary() { return overrides.call('summary', getContent()); }
		function notice(err) { notifications.show(err.message || String(err), 'error'); }
		function action(label, fn, style) {
			var node = E('button', {'type': 'button', 'class': 'btn mclash-button ' + (style || 'cbi-button-action'), 'click': function(ev) {
				var button = ev.currentTarget;
				button.mclashBusy = true; button.disabled = true;
				return Promise.resolve().then(function() {
					return Promise.resolve(getRunning()).then(function(active) {
						if (active) throw new Error(_('Stop the proxy before changing the configuration.', 'mclash'));
						return fn();
					});
				}).catch(notice).finally(function() { button.mclashBusy = false; button.disabled = locked; });
			}}, [label]);
			actionButtons.push(node); node.disabled = locked; return node;
		}
		function change(op, args) {
			return Promise.resolve(getRunning()).then(function(active) {
				if (active) throw new Error(_('Stop the proxy before changing the configuration.', 'mclash'));
				return overrides.call(op, getContent(), args);
			}).then(saveContent).then(function(message) { if (message) notifications.show(message, 'success'); return message; });
		}
		function field(label, input) {
			input.setAttribute('aria-label', label);
			return E('div', {'class': 'mclash-modal-field'}, [E('label', {'class': 'mclash-modal-label'}, [label]), E('div', {'class': 'mclash-modal-control'}, [input])]);
		}
		function input(value, placeholder) { return E('input', {'class': 'cbi-input-text', 'value': value || '', 'placeholder': placeholder || ''}); }
		function area(value, rows) { var n = E('textarea', {'class': 'cbi-input-textarea mclash-lines', 'rows': rows || 8, 'wrap': 'off', 'spellcheck': 'false'}); n.value = value || ''; return n; }
		function select(values, value) {
			return E('select', {'class': 'cbi-input-select'}, values.map(function(v) { return E('option', {'value': v, 'selected': v === value ? '' : null}, [_( {select:'Manual selection','url-test':'Automatic latency test',fallback:'Failover','load-balance':'Load balancing',file:'Local file',inline:'Inline',domain:'Domain',ipcidr:'IP subnet',classical:'Classical'}[v] || v, 'mclash')]); }));
		}
		function modal(title, fields, save, parent) {
			ui.showModal(title, [E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, fields), E('div', {'class': 'right'}, [
				E('button', {'type': 'button', 'class': 'btn mclash-button', 'click': parent || ui.hideModal}, [_('Cancel', 'mclash')]), ' ',
				action(_('Save', 'mclash'), function() { return save().then(function() { (parent || ui.hideModal)(); }); }, 'cbi-button-save')
			])]);
		}
		function listRows(items, edit, remove, reorder, label) {
			return E('div', {}, items.map(function(name, index) {
				return E('div', {'class': 'mclash-actions'}, [E('strong', {'style': 'flex:1;overflow-wrap:anywhere'}, [label ? label(name) : name]),
					edit ? action(_('Edit', 'mclash'), function() { return edit(name); }) : '',
					reorder && index > 0 ? action('↑', function() { var order = items.slice(); order[index] = order[index - 1]; order[index - 1] = name; return reorder(order).then(ui.hideModal); }) : '',
					reorder && index < items.length - 1 ? action('↓', function() { var order = items.slice(); order[index] = order[index + 1]; order[index + 1] = name; return reorder(order).then(ui.hideModal); }) : '',
					remove ? action(_('Delete', 'mclash'), function() { return remove(name).then(ui.hideModal); }, 'cbi-button-negative') : ''
				]);
			}));
		}
		function openNodes() {
			var s = summary(), link = area('', 8), reading = false;
			var add = action(_('Add', 'mclash'), function() {
				if (reading) throw new Error(_('Wait for the node file to finish loading.', 'mclash'));
				return change('addNode', {link: link.value.trim()}).then(ui.hideModal);
			}, 'cbi-button-save');
			var file = E('input', {'type': 'file', 'accept': '.yaml,.yml,.txt,application/yaml,text/yaml,text/plain', 'style': 'display:none', 'change': function() {
				var selected = file.files && file.files[0];
				if (!selected || reading) return;
				if (selected.size > 8 * 1024 * 1024) {
					notice(new Error(_('Node input exceeds 8 MiB', 'mclash'))); file.value = ''; return;
				}
				reading = true; add.mclashBusy = true; add.disabled = true; link.disabled = true; choose.disabled = true;
				return selected.arrayBuffer().then(function(bytes) {
					link.value = new TextDecoder('utf-8', {fatal: true}).decode(bytes);
				}).catch(function() {
					notice(new Error(_('Unable to read node file; select a UTF-8 YAML file.', 'mclash')));
				}).finally(function() {
					reading = false; add.mclashBusy = false; add.disabled = locked; link.disabled = false; choose.disabled = false; file.value = '';
				});
			}});
			var choose = E('button', {'type': 'button', 'class': 'btn mclash-button', 'click': function() { file.click(); }}, [_('Choose file', 'mclash')]);
			ui.showModal(_('Add node', 'mclash'), [
				E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, [
					listRows(s.manualNodes, null, function(name) { return change('deleteNode', {name: name}); }, function(names) { return change('reorderNodes', {names: names}); }),
					field(_('Node URL or Mihomo YAML', 'mclash'), link),
					E('p', {}, [_('Supports a single node, node lists, full configurations and YAML anchors. UTF-8 files up to 8 MiB.', 'mclash')]),
					E('p', {}, ['VMess / VLESS / Trojan / SS / Hysteria2 / TUIC / AnyTLS / SOCKS / HTTP']),
					file, choose
				]),
				E('div', {'class': 'right'}, [E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('Cancel', 'mclash')]), ' ', add])
			]);
		}
		function openHost() {
			var host = input(summary().host);
			modal(_('Edit Host', 'mclash'), [field(_('VMess HTTP / WS Host', 'mclash'), host)], function() { return change('host', {host: host.value.trim()}); });
		}
		function orderedChoices(names, selected, onChange, sortable) {
			var order = selected.concat(names.filter(function(n) { return selected.indexOf(n) < 0; }));
			var picked = new Set(selected), excluded = new Set(), container = E('div');
			function move(name, neighbor) {
				var from = order.indexOf(name), to = order.indexOf(neighbor);
				order[from] = neighbor; order[to] = name; render();
			}
			function render() {
				while (container.firstChild) container.removeChild(container.firstChild);
				var visible = order.filter(function(name) { return !excluded.has(name); });
				visible.forEach(function(name, index) {
					var box = E('input', {'type': 'checkbox', 'checked': picked.has(name) ? '' : null, 'change': function() { if (box.checked) picked.add(name); else picked.delete(name); if (onChange) onChange(); }});
					container.appendChild(E('div', {'class': 'mclash-actions'}, [E('label', {'style': 'flex:1'}, [box, ' ', name]),
						sortable ? E('button', {'type': 'button', 'class': 'btn mclash-button', 'disabled': index === 0 ? '' : null, 'click': function() { if (index > 0) move(name, visible[index - 1]); }}, ['↑']) : '',
						sortable ? E('button', {'type': 'button', 'class': 'btn mclash-button', 'disabled': index === visible.length - 1 ? '' : null, 'click': function() { if (index < visible.length - 1) move(name, visible[index + 1]); }}, ['↓']) : ''
					]));
				});
			}
			render();
			return {element: container, value: function() { return order.filter(function(n) { return picked.has(n); }); }, exclude: function(names) {
				excluded = new Set(names); names.forEach(function(name) { picked.delete(name); }); render();
			}};
		}
		function editChain(id) {
			var s = summary(), roles = s.chains[id] || {};
			var selected = orderedChoices(s.nodes, roles.front || roles.back || [], function() { targets.exclude(selected.value()); }, true);
			var targets = orderedChoices(s.nodes, roles.frontTargets || roles.backTargets || [], function() { selected.exclude(targets.value()); });
			targets.exclude(selected.value());
			selected.exclude(targets.value());
			modal(_('Chain ', 'mclash') + id, [field(_('Pre-proxy nodes (in connection order)', 'mclash'), selected.element), field(_('Target nodes', 'mclash'), targets.element)], function() {
				return change('chain', {id: id, selected: selected.value(), targets: targets.value(), prepend: true});
			}, openChains);
		}
		function openChains() {
			var s = summary();
			ui.showModal(_('Proxy chains', 'mclash'), [E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, [listRows(Object.keys(s.chains), editChain, function(id) { return change('chain', {id: id, selected: [], targets: [], prepend: !s.chains[id].back}); })]),
				E('div', {'class': 'mclash-actions'}, [action(_('Add chain', 'mclash'), function() { editChain(s.nextChainId); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('Close', 'mclash')])])]);
		}
		function editGroup(oldName) {
			var s = summary(), group = s.groups.find(function(g) { return g.name === oldName; }) || {type: 'select'};
			var name = input(oldName), type = select(['select', 'url-test', 'fallback', 'load-balance'], group.type);
			var filter = input(s.filters[oldName] || '', _('Leave empty to match all nodes', 'mclash'));
			var direct = E('input', {'type': 'checkbox', 'checked': (s.direct[oldName] != null ? s.direct[oldName] : (group.proxies || []).indexOf('DIRECT') >= 0 || (oldName === '🚀 Domestic' || oldName === '🚀 ' + _('Domestic', 'mclash'))) ? '' : null});
			var url = input(group.url || ''), interval = input(group.interval == null ? '' : String(group.interval));
			function fillTestDefaults() {
				if (type.value !== 'select') {
					if (!url.value.trim()) url.value = 'https://www.gstatic.com/generate_204';
					if (!interval.value.trim()) interval.value = '300';
				}
			}
			type.addEventListener('change', fillTestDefaults); fillTestDefaults();
			if (oldName === '🚀 Domestic' || oldName === '🌍 Foreign' || oldName === '🚀 ' + _('Domestic', 'mclash') || oldName === '🌍 ' + _('Foreign', 'mclash')) name.disabled = true;
			modal(_('Proxy group', 'mclash'), [field(_('Name', 'mclash'), name), field(_('Type', 'mclash'), type), field(_('Node matching regex', 'mclash'), filter), field(_('Include DIRECT', 'mclash'), direct), field(_('Test URL', 'mclash'), url), field(_('Test interval (seconds)', 'mclash'), interval)], function() {
				fillTestDefaults();
				var next = Object.assign({}, group, {name: name.value.trim(), type: type.value});
				if (url.value.trim()) next.url = url.value.trim(); else delete next.url;
				if (interval.value.trim()) { var n = Number(interval.value); if (!Number.isInteger(n) || n < 0) throw new Error(_('The interval must be a non-negative integer', 'mclash')); next.interval = n; } else delete next.interval;
				return change('group', {group: next, oldName: oldName || null, filter: filter.value, includeDirect: direct.checked});
			}, openGroups);
		}
		function openGroups() {
			var s = summary(), names = s.groups.map(function(g) { return g.name; });
			ui.showModal(_('Proxy group management', 'mclash'), [listRows(names, function(name) {
				if (s.managedGroups.indexOf(name) >= 0) throw new Error(_('Chain groups are managed by Proxy chains', 'mclash'));
				editGroup(name);
			}, function(name) { return change('deleteGroup', {name: name}); }, function(names) { return change('reorderGroups', {names: names}); }, function(name) { return name === '🚀 Domestic' ? '🚀 ' + _('Domestic', 'mclash') : name === '🌍 Foreign' ? '🌍 ' + _('Foreign', 'mclash') : name; }),
				E('div', {'class': 'mclash-actions'}, [action(_('Add proxy group', 'mclash'), function() { editGroup(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('Close', 'mclash')])])]);
		}
		function editProvider(oldName) {
			var provider = summary().providers[oldName] || {type: 'http', behavior: 'domain', format: 'yaml', interval: 86400};
			var name = input(oldName), type = select(['http', 'file', 'inline'], provider.type);
			var behavior = select(['domain', 'ipcidr', 'classical'], provider.behavior), format = select(['yaml', 'text', 'mrs'], provider.format || 'yaml');
			var url = input(provider.url), path = input(provider.path), interval = input(provider.interval == null ? '' : String(provider.interval));
			var payload = area((provider.payload || []).join('\n'));
			modal(_('Rule provider', 'mclash'), [field(_('Name', 'mclash'), name), field(_('Source', 'mclash'), type), field(_('Behavior', 'mclash'), behavior), field(_('Format', 'mclash'), format), field(_('Download URL', 'mclash'), url), field(_('File path', 'mclash'), path), field(_('Update interval (seconds)', 'mclash'), interval), field(_('Inline rules (one per line)', 'mclash'), payload)], function() {
				var next = Object.assign({}, provider, {type: type.value, behavior: behavior.value, format: format.value});
				delete next.url; delete next.payload; delete next.interval; delete next.path;
				if (type.value === 'http') {
					next.url = url.value.trim();
					if (interval.value.trim()) { var n = Number(interval.value); if (!Number.isInteger(n) || n < 0) throw new Error(_('The interval must be a non-negative integer', 'mclash')); next.interval = n; }
				}
				if (type.value !== 'inline' && path.value.trim()) next.path = path.value.trim();
				if (type.value === 'inline') next.payload = payload.value.split(/\r?\n/).map(function(line) { return line.trim(); }).filter(Boolean);
				return change('provider', {name: name.value.trim(), oldName: oldName || null, provider: next});
			}, openProviders);
		}
		function openProviders() {
			ui.showModal(_('Rule provider management', 'mclash'), [listRows(Object.keys(summary().providers), editProvider, function(name) { return change('deleteProvider', {name: name}); }),
				E('div', {'class': 'mclash-actions'}, [action(_('Add rule provider', 'mclash'), function() { editProvider(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('Close', 'mclash')])])]);
		}
		function editRule(index) {
			var rules = summary().rules.slice(), rule = input(index == null ? '' : rules[index]);
			modal(_('Rule', 'mclash'), [field(_('Rule', 'mclash'), rule), E('p', {}, [_('Available policies: ', 'mclash') + summary().policies.join(', ')])], function() {
				var value = rule.value.trim();
				if (!value || /[\r\n]/.test(value)) throw new Error(_('Enter one rule', 'mclash'));
				if (index == null) rules.push(value); else rules[index] = value;
				return change('rules', {rules: rules});
			}, openRules);
		}
		function openRules() {
			var rules = summary().rules, indices = rules.map(function(rule, index) { return String(index); });
			ui.showModal(_('Rule management', 'mclash'), [listRows(indices, function(index) { editRule(Number(index)); }, function(index) {
				return change('rules', {rules: rules.filter(function(rule, i) { return i !== Number(index); })});
			}, function(order) { return change('rules', {rules: order.map(function(index) { return rules[Number(index)]; })}); }, function(index) { return (Number(index) + 1) + '-' + rules[Number(index)]; }),
				E('div', {'class': 'mclash-actions'}, [action(_('Add rule', 'mclash'), function() { editRule(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('Close', 'mclash')])])]);
		}
		function openDNS() {
			var dns = area(summary().dnsYaml || '{}\n', 16);
			modal(_('DNS management', 'mclash'), [field(_('DNS configuration (YAML)', 'mclash'), dns)], function() {
				return change('dns', {yaml: dns.value});
			});
		}
		var actions = {
			addNode: [_('Add node', 'mclash'), openNodes], host: [_('Edit Host', 'mclash'), openHost], prependProxy: [_('Proxy chains', 'mclash'), openChains],
			groups: [_('Proxy group management', 'mclash'), openGroups], ruleProviders: [_('Rule provider management', 'mclash'), openProviders], rules: [_('Rule management', 'mclash'), openRules], dns: [_('DNS management', 'mclash'), openDNS]
		};
		var menu = E('div', {'class': 'mclash-rule-groups'});
		var icons = {addNode: '+', host: '⌘', prependProxy: '⇄', groups: '◈', ruleProviders: '▤', rules: '≡', dns: '⌕'};
		function refreshMenu() {
			while (menu.firstChild) menu.removeChild(menu.firstChild);
			var order;
			try { order = summary().actions; } catch (_) { order = Object.keys(actions); }
			order = order.slice();
			if (order.indexOf('dns') < 0) order.push('dns');
			[
				{key:'nodes',title:_('Node management', 'mclash'),keys:['addNode','host','prependProxy']},
				{key:'rules',title:_('Policies and rules', 'mclash'),keys:['groups','ruleProviders','rules','dns']}
			].forEach(function(group) {
				var tiles = group.keys.filter(function(key) { return order.indexOf(key) >= 0; }).map(function(key) {
					var tile = action(actions[key][0], actions[key][1], 'mclash-rule-tile');
					tile.setAttribute('aria-label', actions[key][0]);
					tile.textContent = '';
					tile.appendChild(E('span', {'class': 'mclash-rule-icon', 'aria-hidden': 'true'}, [icons[key]]));
					tile.appendChild(E('span', {'class': 'mclash-rule-label'}, [actions[key][0]]));
					tile.appendChild(E('span', {'class': 'btn cbi-button cbi-button-action mclash-rule-arrow', 'aria-hidden': 'true', 'data-prefix': _('Configure ', 'mclash')}, ['›']));
					return tile;
				});
				if (tiles.length) menu.appendChild(E('section',{'class':'mclash-settings-card','data-settings-group':group.key},[E('h3',{'class':'mclash-category-title'},[group.title]),E('div',{'class':'mclash-rule-grid'},tiles)]));
			});
		}
		refreshMenu();
		return {element: menu, refresh: refreshMenu, setRunning:setRunning};
	}
});
