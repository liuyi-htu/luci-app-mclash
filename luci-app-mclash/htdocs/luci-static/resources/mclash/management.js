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
						if (active) throw new Error(_('请先停止代理，再修改配置。'));
						return fn();
					});
				}).catch(notice).finally(function() { button.mclashBusy = false; button.disabled = locked; });
			}}, [label]);
			actionButtons.push(node); node.disabled = locked; return node;
		}
		function change(op, args) {
			return Promise.resolve(getRunning()).then(function(active) {
				if (active) throw new Error(_('请先停止代理，再修改配置。'));
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
			return E('select', {'class': 'cbi-input-select'}, values.map(function(v) { return E('option', {'value': v, 'selected': v === value ? '' : null}, [v]); }));
		}
		function modal(title, fields, save, parent) {
			ui.showModal(title, [E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, fields), E('div', {'class': 'right'}, [
				E('button', {'type': 'button', 'class': 'btn mclash-button', 'click': parent || ui.hideModal}, [_('取消')]), ' ',
				action(_('保存'), function() { return save().then(function() { (parent || ui.hideModal)(); }); }, 'cbi-button-save')
			])]);
		}
		function listRows(items, edit, remove, reorder, label) {
			return E('div', {}, items.map(function(name, index) {
				return E('div', {'class': 'mclash-actions'}, [E('strong', {'style': 'flex:1;overflow-wrap:anywhere'}, [label ? label(name) : name]),
					edit ? action(_('编辑'), function() { return edit(name); }) : '',
					reorder && index > 0 ? action('↑', function() { var order = items.slice(); order[index] = order[index - 1]; order[index - 1] = name; return reorder(order).then(ui.hideModal); }) : '',
					reorder && index < items.length - 1 ? action('↓', function() { var order = items.slice(); order[index] = order[index + 1]; order[index + 1] = name; return reorder(order).then(ui.hideModal); }) : '',
					remove ? action(_('删除'), function() { return remove(name).then(ui.hideModal); }, 'cbi-button-negative') : ''
				]);
			}));
		}
		function openNodes() {
			var s = summary(), link = area('', 4);
			ui.showModal(_('添加节点'), [
				listRows(s.manualNodes, null, function(name) { return change('deleteNode', {name: name}); }, function(names) { return change('reorderNodes', {names: names}); }),
				field(_('节点链接'), link),
				E('p', {}, ['VMess / VLESS / Trojan / SS / Hysteria2 / TUIC / AnyTLS / SOCKS / HTTP']),
				E('div', {'class': 'right'}, [E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('取消')]), ' ',
					action(_('添加'), function() { return change('addNode', {link: link.value.trim()}).then(ui.hideModal); }, 'cbi-button-save')])
			]);
		}
		function openHost() {
			var host = input(summary().host);
			modal(_('修改 Host'), [field(_('VMess HTTP / WS Host'), host)], function() { return change('host', {host: host.value.trim()}); });
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
			modal(_('链路 ') + id, [field(_('前置节点（按连接顺序）'), selected.element), field(_('作用节点'), targets.element)], function() {
				return change('chain', {id: id, selected: selected.value(), targets: targets.value(), prepend: true});
			}, openChains);
		}
		function openChains() {
			var s = summary();
			ui.showModal(_('链式节点'), [E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, [listRows(Object.keys(s.chains), editChain, function(id) { return change('chain', {id: id, selected: [], targets: [], prepend: !s.chains[id].back}); })]),
				E('div', {'class': 'mclash-actions'}, [action(_('新增链路'), function() { editChain(s.nextChainId); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('关闭')])])]);
		}
		function editGroup(oldName) {
			var s = summary(), group = s.groups.find(function(g) { return g.name === oldName; }) || {type: 'select'};
			var name = input(oldName), type = select(['select', 'url-test', 'fallback', 'load-balance'], group.type);
			var filter = input(s.filters[oldName] || '', _('留空匹配全部节点'));
			var direct = E('input', {'type': 'checkbox', 'checked': (s.direct[oldName] != null ? s.direct[oldName] : (group.proxies || []).indexOf('DIRECT') >= 0 || oldName === '🚀 国内') ? '' : null});
			var url = input(group.url || ''), interval = input(group.interval == null ? '' : String(group.interval));
			function fillTestDefaults() {
				if (type.value !== 'select') {
					if (!url.value.trim()) url.value = 'https://www.gstatic.com/generate_204';
					if (!interval.value.trim()) interval.value = '300';
				}
			}
			type.addEventListener('change', fillTestDefaults); fillTestDefaults();
			if (oldName === '🚀 国内' || oldName === '🌍 国外') name.disabled = true;
			modal(_('代理组'), [field(_('名称'), name), field(_('类型'), type), field(_('节点匹配正则'), filter), field(_('包含 DIRECT'), direct), field(_('测速地址'), url), field(_('测速间隔（秒）'), interval)], function() {
				fillTestDefaults();
				var next = Object.assign({}, group, {name: name.value.trim(), type: type.value});
				if (url.value.trim()) next.url = url.value.trim(); else delete next.url;
				if (interval.value.trim()) { var n = Number(interval.value); if (!Number.isInteger(n) || n < 0) throw new Error(_('间隔须为非负整数')); next.interval = n; } else delete next.interval;
				return change('group', {group: next, oldName: oldName || null, filter: filter.value, includeDirect: direct.checked});
			}, openGroups);
		}
		function openGroups() {
			var s = summary(), names = s.groups.map(function(g) { return g.name; });
			ui.showModal(_('代理组管理'), [listRows(names, function(name) {
				if (s.managedGroups.indexOf(name) >= 0) throw new Error(_('链路代理组由链式节点管理'));
				editGroup(name);
			}, function(name) { return change('deleteGroup', {name: name}); }, function(names) { return change('reorderGroups', {names: names}); }),
				E('div', {'class': 'mclash-actions'}, [action(_('新增代理组'), function() { editGroup(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('关闭')])])]);
		}
		function editProvider(oldName) {
			var provider = summary().providers[oldName] || {type: 'http', behavior: 'domain', format: 'yaml', interval: 86400};
			var name = input(oldName), type = select(['http', 'file', 'inline'], provider.type);
			var behavior = select(['domain', 'ipcidr', 'classical'], provider.behavior), format = select(['yaml', 'text', 'mrs'], provider.format || 'yaml');
			var url = input(provider.url), path = input(provider.path), interval = input(provider.interval == null ? '' : String(provider.interval));
			var payload = area((provider.payload || []).join('\n'));
			modal(_('规则集'), [field(_('名称'), name), field(_('来源'), type), field(_('行为'), behavior), field(_('格式'), format), field(_('下载链接'), url), field(_('文件路径'), path), field(_('更新间隔（秒）'), interval), field(_('内嵌规则（每行一条）'), payload)], function() {
				var next = Object.assign({}, provider, {type: type.value, behavior: behavior.value, format: format.value});
				delete next.url; delete next.payload; delete next.interval; delete next.path;
				if (type.value === 'http') {
					next.url = url.value.trim();
					if (interval.value.trim()) { var n = Number(interval.value); if (!Number.isInteger(n) || n < 0) throw new Error(_('间隔须为非负整数')); next.interval = n; }
				}
				if (type.value !== 'inline' && path.value.trim()) next.path = path.value.trim();
				if (type.value === 'inline') next.payload = payload.value.split(/\r?\n/).map(function(line) { return line.trim(); }).filter(Boolean);
				return change('provider', {name: name.value.trim(), oldName: oldName || null, provider: next});
			}, openProviders);
		}
		function openProviders() {
			ui.showModal(_('规则集管理'), [listRows(Object.keys(summary().providers), editProvider, function(name) { return change('deleteProvider', {name: name}); }),
				E('div', {'class': 'mclash-actions'}, [action(_('新增规则集'), function() { editProvider(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('关闭')])])]);
		}
		function editRule(index) {
			var rules = summary().rules.slice(), rule = input(index == null ? '' : rules[index]);
			modal(_('规则'), [field(_('规则'), rule), E('p', {}, [_('可用策略：') + summary().policies.join('、')])], function() {
				var value = rule.value.trim();
				if (!value || /[\r\n]/.test(value)) throw new Error(_('请填写一条规则'));
				if (index == null) rules.push(value); else rules[index] = value;
				return change('rules', {rules: rules});
			}, openRules);
		}
		function openRules() {
			var rules = summary().rules, indices = rules.map(function(rule, index) { return String(index); });
			ui.showModal(_('规则管理'), [listRows(indices, function(index) { editRule(Number(index)); }, function(index) {
				return change('rules', {rules: rules.filter(function(rule, i) { return i !== Number(index); })});
			}, function(order) { return change('rules', {rules: order.map(function(index) { return rules[Number(index)]; })}); }, function(index) { return (Number(index) + 1) + '-' + rules[Number(index)]; }),
				E('div', {'class': 'mclash-actions'}, [action(_('新增规则'), function() { editRule(null); }), E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('关闭')])])]);
		}
		function openDNS() {
			var dns = area(summary().dnsYaml || '{}\n', 16);
			modal(_('DNS 管理'), [field(_('DNS 配置（YAML）'), dns)], function() {
				return change('dns', {yaml: dns.value});
			});
		}
		var actions = {
			addNode: [_('添加节点'), openNodes], host: [_('修改 Host'), openHost], prependProxy: [_('链式节点'), openChains],
			groups: [_('代理组管理'), openGroups], ruleProviders: [_('规则集管理'), openProviders], rules: [_('规则管理'), openRules], dns: [_('DNS 管理'), openDNS]
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
				{key:'nodes',title:_('节点管理'),keys:['addNode','host','prependProxy']},
				{key:'rules',title:_('策略与规则'),keys:['groups','ruleProviders','rules','dns']}
			].forEach(function(group) {
				var tiles = group.keys.filter(function(key) { return order.indexOf(key) >= 0; }).map(function(key) {
					var tile = action(actions[key][0], actions[key][1], 'mclash-rule-tile');
					tile.setAttribute('aria-label', actions[key][0]);
					tile.textContent = '';
					tile.appendChild(E('span', {'class': 'mclash-rule-icon', 'aria-hidden': 'true'}, [icons[key]]));
					tile.appendChild(E('span', {'class': 'mclash-rule-label'}, [actions[key][0]]));
					tile.appendChild(E('span', {'class': 'btn cbi-button cbi-button-action mclash-rule-arrow', 'aria-hidden': 'true'}, ['›']));
					return tile;
				});
				if (tiles.length) menu.appendChild(E('section',{'class':'mclash-settings-card','data-settings-group':group.key},[E('h3',{'class':'mclash-category-title'},[group.title]),E('div',{'class':'mclash-rule-grid'},tiles)]));
			});
		}
		refreshMenu();
		return {element: menu, refresh: refreshMenu, setRunning:setRunning};
	}
});
