// Layout and CSS adapted from luci-app-v2bx / liuyi-htu/luci-app-frpc-own (Apache-2.0).
'use strict';
'require view';
'require fs';
'require ui';
'require mclash.overrides as overrides';
'require mclash.management as management';
'require mclash.proxy as proxy';
'require mclash.template as template';
'require mclash.update as update';
'require mclash.notify as notice';
'require mclash.probe as probe';

function command(action) {
	return fs.exec('/usr/libexec/mclash-ui', [action]).then(function(res) {
		if (res.code !== 0)
			throw new Error((res.stderr || _('操作失败')).trim());
		return res.stdout || '';
	});
}

return view.extend({
	handleSave: null,
	handleSaveApply: null,
	handleReset: null,
	load: function() {
		return Promise.all([command('status'), command('read-config'), command('devices').catch(function() { return '{"devices":[]}'; })]);
	},
	render: function(data) {
		var state, busy = false, buttons = [], apiQueue = Promise.resolve();
		var networkOptions, networkTiles = [];
		try { networkOptions = overrides.call('summary', data[1]).network; } catch (_) {}
		networkOptions = networkOptions || {mode: 'none', interfaces: ['br-lan'], lan: true, access: [], router: true, ipv6: false, stack: 'mixed'};
		var running = E('strong'), version = E('strong');
		var editor = {value: data[1]};
		function previewText(text) {
			return text.split('\n').filter(function(line) { return !/^# Mclash (?:链路设置:|节点链路(?::|\s))/.test(line); }).join('\n');
		}
		var preview = E('pre', {'class': 'mclash-log mclash-config-preview', 'tabindex': '0'}, [previewText(data[1])]);
		var logs = E('pre', {'class': 'mclash-log'}, [_('点击“刷新日志”读取日志。')]);
		var logKind = E('select', {'class': 'cbi-input-select', 'change': function() { return refreshLogs(); }}, [E('option', {value: 'service'}, ['mclash.log']), E('option', {value: 'core'}, ['mihomo.log']), E('option', {value: 'update'}, ['update.log'])]);
		logKind.value = 'service';
		function showStatus(raw) {
			state = JSON.parse(raw);
			running.textContent = state.installed ? (state.running ? _('● 运行中') : _('● 未运行')) : _('Mihomo 未安装');
			running.className = state.running ? 'mclash-ok' : 'mclash-bad';
			if (proxyView) proxyView.refresh();
			networkTiles.forEach(function(update) { update(); });
			buttons.forEach(function(n) { n.disabled = busy || (n.mclashConfig && state.running); });
			if (manager && manager.setRunning) manager.setRunning(state.running);
			var coreVersion = /(?:^|\s)v?(\d+\.\d+\.\d+(?:[-+][^\s]+)?)/.exec(state.version || '');
			version.textContent = coreVersion ? 'v' + coreVersion[1] : (state.installed ? _('未知版本') : _('未安装'));
			serviceButton.className = 'mclash-status-card';
			serviceButton.setAttribute('title',state.running ? _('点击停止服务') : _('点击启动服务'));
		}
		function refresh() { return command('status').then(showStatus); }
		function button(label, operation, style) {
			var b = E('button', {'type': 'button', 'class': 'btn mclash-button ' + (style || 'cbi-button-action'), 'click': function() {
				if (busy) return Promise.resolve();
				busy = true;
				buttons.forEach(function(n) { n.disabled = true; });
				return Promise.resolve().then(function() { return b.mclashConfig ? requireStopped().then(operation) : operation(); }).then(function(message) {
					if (message) notice.show(message, 'success');
					return refresh();
				}).catch(function(err) {
					notice.show(err.message, 'error');
					return refresh().catch(function() {});
				}).finally(function() {
					busy = false;
					buttons.forEach(function(n) { n.disabled = !!(n.mclashConfig && state.running); });
				});
			}}, [label]);
			buttons.push(b);
			return b;
		}
		var serviceButton = button(_('点击启停'), function() { return refresh().then(function() { return command(state.running ? 'stop' : 'start'); }); });
		serviceButton.setAttribute('aria-label',_('点击启停'));
		function refreshPreview() {
			return command('read-config').then(function(text) { preview.textContent = previewText(text); });
		}
		function refreshLogs() {
			return command(logKind.value === 'core' ? 'logs' : logKind.value + '-logs').then(function(text) {
				logs.textContent = (text || '').replace(/\n$/, '') || _('暂无日志。');
				logs.scrollTop = logs.scrollHeight;
			});
		}
		function pane(name, title, children) {
			return E('div', {'class': 'cbi-section', 'data-tab': name, 'data-tab-title': title}, children);
		}
		function requireStopped() {
			return refresh().then(function() {
				if (state.running) throw new Error(_('请先停止代理，再修改配置。'));
			});
		}
		function persist(text, nextNetwork) {
			return requireStopped().then(function() {
				if (nextNetwork || networkOptions.mode !== 'none' || text.indexOf('# Mclash OpenWrt 接管: ') >= 0) {
					text = overrides.call('network', text, nextNetwork || networkOptions);
				}
				if (!text.trim()) throw new Error(_('配置不能为空'));
				if (new Blob([text]).size > 1048576) throw new Error(_('配置不能超过 1 MiB'));
				return fs.write('/etc/mclash/config.upload.yaml', text, 384);
			}).then(function() { return command('save'); }).then(function(message) {
				editor.value = text;
				if (nextNetwork) networkOptions = nextNetwork;
				if (manager) manager.refresh();
				return refreshPreview().then(refresh).then(function() { return message; });
			});
		}
		function api(op, params) {
			var pending = apiQueue.catch(function() {}).then(function() {
				return command('read-config');
			}).then(function(content) {
				var meta = overrides.call('summary', content);
				var match = /^(?:127\.0\.0\.1|localhost|0\.0\.0\.0|\[::\]):([0-9]+)$/.exec(meta.controller);
				if (!match) throw new Error(_('请在配置中启用本机 HTTP 控制器。'));
				return fs.write('/etc/mclash/api.request.json', JSON.stringify(Object.assign({}, params, {op: op, port: Number(match[1]), secret: String(meta.secret)})), 384);
			}).then(function() { return command('api'); }).then(function(raw) { return raw.trim() ? JSON.parse(raw) : {}; });
			apiQueue = pending;
			return pending;
		}
		function metadata(prefix, fallback) {
			var line = editor.value.split('\n').find(function(line) { return line.indexOf(prefix) === 0; });
			try { return line ? JSON.parse(line.slice(prefix.length)) : fallback; } catch (_) { return fallback; }
		}
		function subscriptionDialog() {
			var urlPrefix = '# Mclash OpenWrt 订阅链接: ', namePrefix = '# Mclash OpenWrt 机场名称: ';
			var tagPrefix = '# Mclash OpenWrt 机场前缀: ', usagePrefix = '# Mclash OpenWrt 机场用量: ';
			var links = metadata(urlPrefix, []), names = metadata(namePrefix, ''), tags = metadata(tagPrefix, []), usage = metadata(usagePrefix, []);
			if (!Array.isArray(links)) links = [];
			var entries = links.map(function(url, index) { return {
				name: Array.isArray(names) ? names[index] || _('机场 ') + (index + 1) : (names ? names + (index ? ' ' + (index + 1) : '') : _('机场 ') + (index + 1)),
				url: url, prefix: tags.length === links.length ? tags[index] : (links.length === 1 ? '' : (index + 1) + '-'), usage: usage[index] || null
			}; });
			var pulling = false, cancelled = false;
			function retainedSources() { return overrides.call('subscriptionSources', editor.value, {count: entries.length, prefixes: entries.map(function(e) { return e.prefix; })}); }
			function saveAirports(next, sources) {
				var content = sources ? overrides.call('subscription', editor.value, {template: template.text, sources: sources, prefixes: next.map(function(e) { return e.prefix; }), refresh: overrides.call('summary', editor.value).groups.length > 0, allowEmpty: !next.length}) : editor.value;
				content = content.split('\n').filter(function(line) { return ![urlPrefix, namePrefix, tagPrefix, usagePrefix].some(function(prefix) { return line.indexOf(prefix) === 0; }); }).join('\n');
				return persist(namePrefix + JSON.stringify(next.map(function(e) { return e.name; })) + '\n' + urlPrefix + JSON.stringify(next.map(function(e) { return e.url; })) + '\n' + tagPrefix + JSON.stringify(next.map(function(e) { return e.prefix; })) + '\n' + usagePrefix + JSON.stringify(next.map(function(e) { return e.usage; })) + '\n' + content).then(function() { subscriptionDialog(); });
			}
			function readUsage(content) {
				var line = content.split('\n').find(function(line) { return line.indexOf('# Mclash 订阅用量: ') === 0; });
				if (!line) return null;
				var data = {};
				line.slice('# Mclash 订阅用量: '.length).split(';').forEach(function(field) {
					var match = /^\s*(upload|download|total|expire)\s*=\s*(\d+)\s*$/.exec(field);
					if (match && Number.isSafeInteger(Number(match[2]))) data[match[1]] = Number(match[2]);
				});
				return data;
			}
			function fetchAirport(entry) {
				if (cancelled) return Promise.reject(new Error(_('订阅拉取已取消')));
				return fs.write('/etc/mclash/subscription.url', entry.url, 384).then(function() { return command('fetch-subscription'); }).then(function(content) {
					entry.usage = readUsage(content); return content;
				});
			}
			function updateAirport(index) {
				if (pulling) return Promise.resolve();
				pulling = true; cancelled = false;
				return requireStopped().then(function() {
					var next = entries.map(function(e) { return Object.assign({}, e); }), sources = retainedSources();
					return fetchAirport(next[index]).then(function(content) { sources[index] = content; if (cancelled) throw new Error(_('订阅拉取已取消')); return saveAirports(next, sources); });
				}).finally(function() { pulling = false; });
			}
			function editAirport(index) {
				var entry = index == null ? {name: _('机场 ') + (entries.length + 1), url: '', usage: null} : entries[index];
				var name = E('input', {'class': 'cbi-input-text', 'aria-label': _('机场名称'), 'value': entry.name});
				var url = E('input', {'class': 'cbi-input-text', 'aria-label': _('订阅链接'), 'value': entry.url, 'placeholder': 'https://…'});
				ui.showModal(_('编辑机场'), [E('div', {'class': 'mclash-modal-field'}, [E('label', {}, [_('机场名称')]), name, E('label', {}, [_('订阅链接')]), url]),
					E('div', {'class': 'right'}, [E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('取消')]), ' ', button(_('保存'), function() {
						if (pulling) return Promise.resolve();
						var updated = Object.assign({}, entry, {name: name.value.trim(), url: url.value.trim()}), next = entries.slice();
						if (!updated.name || !updated.url) throw new Error(_('请填写机场名称和订阅链接'));
						var parsed = new URL(updated.url); if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error(_('订阅链接须为 HTTP 或 HTTPS'));
						if (entries.some(function(e, i) { return i !== index && (e.name === updated.name || e.url === updated.url); })) throw new Error(_('机场名称和订阅链接不能重复'));
						if (index == null) {
							var max = entries.reduce(function(value, e) { return Math.max(value, parseInt(e.prefix, 10) || 1); }, 0);
							updated.prefix = entries.length ? (max + 1) + '-' : ''; next.push(updated);
						} else next[index] = updated;
						if (index != null && entry.url === updated.url) return saveAirports(next);
						pulling = true; cancelled = false;
						return requireStopped().then(function() { var sources = retainedSources(); return fetchAirport(updated).then(function(content) {
							sources[index == null ? entries.length : index] = content;
							if (cancelled) throw new Error(_('订阅拉取已取消')); return saveAirports(next, sources);
						}); }).finally(function() { pulling = false; });
					}, 'cbi-button-save')])]);
			}
			function moveAirport(index, offset) {
				var next = entries.slice(), sources = retainedSources(), to = index + offset;
				[next[index], next[to]] = [next[to], next[index]]; [sources[index], sources[to]] = [sources[to], sources[index]];
				return saveAirports(next, sources);
			}
			function bytes(value) {
				var units = ['B', 'KiB', 'MiB', 'GiB', 'TiB'], unit = 0;
				while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit++; }
				return value.toFixed(unit ? 2 : 0) + ' ' + units[unit];
			}
			function usageText(entry) {
				var u = entry.usage || {}, remain = [u.total, u.upload, u.download].every(Number.isFinite) ? bytes(Math.max(0, u.total - u.upload - u.download)) : _('未知');
				var expires = u.expire === 0 ? _('不限') : (Number.isFinite(u.expire) ? new Date(u.expire * 1000).toLocaleDateString() : _('未知'));
				return _('剩余流量：') + remain + ' · ' + _('到期时间：') + expires;
			}
			var rows = entries.map(function(entry, index) { return E('div', {'class': 'mclash-actions mclash-subscription-row'}, [
				E('strong', {'class': 'mclash-subscription-name'}, [(index + 1) + '-' + entry.name]), E('span', {'class': 'mclash-subscription-usage'}, [usageText(entry)]),
				button(_('编辑'), function() { editAirport(index); }),
				index ? button('↑', function() { return moveAirport(index, -1); }) : '',
				index < entries.length - 1 ? button('↓', function() { return moveAirport(index, 1); }) : '',
				button(_('更新'), function() { return updateAirport(index); }, 'cbi-button-save'),
				button(_('删除'), function() { var next = entries.slice(), sources = retainedSources(); next.splice(index, 1); sources.splice(index, 1); return saveAirports(next, sources); }, 'cbi-button-negative')
			]); });
			ui.showModal(_('机场订阅'), [E('div', {'class': 'mclash-modal-scroll', 'style': 'max-height:65vh;overflow:auto'}, rows), E('div', {'class': 'mclash-actions'}, [
				button(_('新增机场'), function() { editAirport(null); }),
				E('button', {'class': 'btn mclash-button', 'click': ui.hideModal}, [_('关闭')])])]);
		}
		var manager = management.render(function() { return editor.value; }, persist, function() { return refresh().then(function() { return state.running; }); });
		var proxyView = proxy.render(function() { return overrides.call('summary', editor.value); }, function() { return state.running; });
		function statusCard(title, icon, color, value, activate) {
			return E('button',{'type':'button','class':'mclash-status-card','aria-label':title,'click':activate},[
				E('span',{'class':'mclash-status-icon','style':'background:'+color,'aria-hidden':'true'},[icon]),
				E('span',{'class':'mclash-status-body'},[E('span',{'class':'mclash-status-title'},[title]),value])
			]);
		}
		var runtimeCard = serviceButton;
		runtimeCard.textContent = '';
		runtimeCard.appendChild(E('span',{'class':'mclash-status-icon','style':'background:#19b6c9','aria-hidden':'true'},['⏻']));
		runtimeCard.appendChild(E('span',{'class':'mclash-status-body'},[E('span',{'class':'mclash-status-title'},[_('点击启停')]),E('span',{'class':'mclash-status-value'},[running])]));
		proxyView.element.className = 'mclash-status-card mclash-panel-card';
		proxyView.element.textContent = '';
		proxyView.element.appendChild(E('span',{'class':'mclash-status-icon','style':'background:transparent','aria-hidden':'true'},[E('img',{'src':L.resource('mclash/icons/panel.svg'),'alt':'','class':'mclash-panel-icon'})]));
		proxyView.element.appendChild(E('span',{'class':'mclash-status-body'},[E('span',{'class':'mclash-status-title'},[_('代理面板')]),E('span',{'class':'mclash-status-value'},[_('点击打开')])]));
		var probeSource = E('button',{'type':'button','class':'mclash-probe-source','aria-label':_('检测来源'),'title':_('点击切换浏览器／路由器'),'click':function() {
			if (probeSource.disabled) return;
			probeSource.value = probeSource.value === 'browser' ? 'router' : 'browser';
			probeSource.textContent = (probeSource.value === 'browser' ? _('浏览器') : _('路由器')) + ' ⇄';
		}},[_('浏览器') + ' ⇄']);
		probeSource.value = 'browser';
		var probeCount = 0;
		function probeIcon(kind) {
			return E('img',{'src':L.resource('mclash/icons/'+kind+'.svg'),'alt':'','class':'mclash-brand-icon'});
		}
		function probeCard(title,icon,color,kind) {
			var value = E('span',{'class':'mclash-status-value'},[_('点我检测')]);
			var card = statusCard(title,icon,color,value,function() {
				if (card.disabled) return;
				card.disabled = true; probeCount++; probeSource.disabled = true; value.className = 'mclash-status-value'; value.textContent = _('检测中…');
				return probe.run(kind,probeSource.value,command).then(function(result) {
					value.textContent = '';
					if (result.message) { value.textContent = result.message; }
					else {
						value.appendChild(E('span',{'class':'mclash-probe-line'},[E('span',{'class':'mclash-result-icon','aria-hidden':'true'},['◷']),typeof result.latency === 'number' ? result.latency+' ms' : (result.latency_error || _('检测失败'))]));
					}
					value.className = 'mclash-status-value '+(result.ok ? 'mclash-ok' : 'mclash-bad');
				}).catch(function() { value.textContent = _('检测失败'); value.className = 'mclash-status-value mclash-bad'; }).finally(function() { card.disabled = false; probeCount--; probeSource.disabled = probeCount > 0; });
			});
			card.setAttribute('title',_('从所选设备检测目标网站的 HTTPS 请求耗时。'));
			return card;
		}
		var statusBar = E('div',{'class':'mclash-status-grid'},[
			runtimeCard,proxyView.element,probeCard(_('Telegram 连接'),probeIcon('telegram'),'#26a5e4','telegram'),probeCard(_('OpenAI 连接'),probeIcon('openai'),'#10a37f','openai'),
			probeCard(_('百度连接'),probeIcon('baidu'),'#2932e1','baidu'),probeCard(_('谷歌连接'),probeIcon('google'),'#f1f3f4','google'),probeCard(_('YouTube 连接'),probeIcon('youtube'),'#ff0000','youtube'),probeCard(_('GitHub 连接'),probeIcon('github'),'#24292f','github'),probeSource
		]);
		var configPane = pane('config', _('运行配置'), [
			preview
		]);
		function decorateTile(node, label, icon, value) {
			node.setAttribute('aria-label', label);
			node.textContent = '';
			node.appendChild(E('span', {'class': 'mclash-rule-icon', 'aria-hidden': 'true'}, [icon]));
			node.appendChild(E('span', {'class': 'mclash-rule-label'}, [label, value ? E('small', {'class': 'mclash-rule-value'}, [value]) : '']));
			node.appendChild(E('span', {'class': 'btn cbi-button cbi-button-action mclash-rule-arrow', 'aria-hidden': 'true'}, ['›']));
			return node;
		}
		function tile(label, icon, operation, value) {
			var node = decorateTile(button(label, operation, 'mclash-rule-tile'), label, icon, value);
			node.mclashConfig = true; return node;
		}
		function optionSelect(values, value) {
			var node = E('select', {'class': 'cbi-input-select'}, values.map(function(item) { return E('option', {value:item[0]}, [item[1]]); }));
			node.value = value; return node;
		}
		function editSetting(title, control, save) {
			ui.showModal(title, [E('div', {'class':'mclash-dialog-control'}, [control]), E('div', {'class':'right'}, [
				E('button', {'class':'btn mclash-button', 'click':ui.hideModal}, [_('取消')]), ' ',
				button(_('保存'), function() { return save().then(function(message) { ui.hideModal(); return message; }); }, 'cbi-button-save')
			])]);
		}
		function captureActive(field) {
			return networkOptions.mode !== 'none' && state && state.running && (field !== 'stack' || networkOptions.mode === 'tun') && (field !== 'interfaces' || networkOptions.lan !== false || (networkOptions.access || []).length > 0);
		}
		function configuredValue(value, field) {
			return captureActive(field) ? value : value + _(' · 已配置');
		}
		function scopeTile() {
			var label = _('代理范围');
			var fields = [['lan',_('代理局域网设备')],['router',_('代理路由器本机')],['ipv6',_('代理 IPv6')]];
			function display() {
				var selected = [];
				if (networkOptions.lan !== false) selected.push(_('局域网'));
				else if ((networkOptions.access || []).length) selected.push(networkOptions.access.length + _(' 个 IP／范围'));
				if (networkOptions.router) selected.push(_('本机'));
				if (networkOptions.ipv6) selected.push('IPv6');
				return selected.length ? selected.join('、') + (captureActive('scope') ? _(' · 已启用') : _(' · 已配置 · 未生效')) : _('未启用');
			}
			var node = tile(label,'◎',function() {
				var options = fields.map(function(item) {
					var box = E('input',{'type':'checkbox','aria-label':item[1]});
					box.checked = item[0] === 'lan' ? networkOptions.lan !== false : !!networkOptions[item[0]];
					return {field:item[0],label:item[1],box:box};
				});
				var input = E('textarea',{'class':'cbi-input-textarea mclash-lines',rows:6,wrap:'off',spellcheck:'false','aria-label':_('代理 IP／范围（每行一条）'),placeholder:'192.168.10.100\n192.168.10.0/24\n192.168.10.100-192.168.10.150\nfd00::/64'},[(networkOptions.access || []).join('\n')]);
				editSetting(label,E('div',{},[
					E('div',{'class':'mclash-device-options'},options.map(function(item) { return E('label',{},[item.box,' ',item.label]); })),
					E('h3',{'class':'mclash-category-title','style':'margin-top:18px'},[_('访问控制')]),
					E('p',{},[_('关闭“代理局域网设备”时，仅代理下列 IP／范围；其余设备保持直连。开启时代理所选局域网设备的全部流量。')]),
					E('div',{'class':'mclash-modal-field'},[E('label',{'class':'mclash-modal-label'},[_('代理 IP／范围（每行一条）')]),input])
				]),function() {
					var next = Object.assign({},networkOptions);
					options.forEach(function(item) { next[item.field] = item.box.checked; });
					next.access = input.value.split(/\r?\n/).map(function(line) { return line.trim(); }).filter(Boolean);
					return persist(editor.value,next);
				});
			},display());
			networkTiles.push(function() {
				decorateTile(node,label,'◎',display());
				node.className = 'btn mclash-button mclash-rule-tile' + (!captureActive('scope') ? ' mclash-inactive' : '');
			});
			return node;
		}
		function captureTile() {
			var label = _('接管方式');
			function display() { return networkOptions.mode === 'tun' ? 'TUN · ' + networkOptions.stack : (networkOptions.mode === 'tproxy' ? 'TProxy' : _('关闭自动接管')); }
			var node = tile(label,'⇄',function() {
				var mode = optionSelect([['none',_('关闭自动接管')],['tun','TUN'],['tproxy','TProxy']],networkOptions.mode);
				mode.setAttribute('aria-label',label);
				var stack = optionSelect([['mixed','mixed'],['system','system'],['gvisor','gvisor']],networkOptions.stack);
				stack.setAttribute('aria-label',_('TUN 协议栈'));
				var stackField = E('div',{'class':'mclash-modal-field'},[E('label',{'class':'mclash-modal-label'},[_('TUN 协议栈')]),stack]);
				function toggleStack() { stackField.style.display = mode.value === 'tun' ? '' : 'none'; }
				mode.addEventListener('change',toggleStack); toggleStack();
				editSetting(label,E('div',{},[E('div',{'class':'mclash-modal-field'},[E('label',{'class':'mclash-modal-label'},[label]),mode]),stackField]),function() {
					return persist(editor.value,Object.assign({},networkOptions,{mode:mode.value,stack:stack.value}));
				});
			},display());
			networkTiles.push(function() { decorateTile(node,label,'⇄',display()); });
			return node;
		}
		var devices;
		try { devices = JSON.parse(data[2] || '{}').devices || []; } catch (_) { devices = []; }
		devices = Array.from(new Set(devices.concat(networkOptions.interfaces))).sort();
		var lanButton = tile(_('局域网设备'), '▦', function() {
			var boxes = devices.map(function(name) { var box = E('input',{type:'checkbox'}); box.checked = networkOptions.interfaces.indexOf(name) >= 0; return {name:name,box:box}; });
			var options = E('div',{'class':'mclash-device-options'},boxes.map(function(item) { return E('label',{},[item.box,' ',item.name]); }));
			editSetting(_('局域网设备'), options, function() {
				var picked = boxes.filter(function(item) { return item.box.checked; }).map(function(item) { return item.name; });
				if (!picked.length) return Promise.reject(new Error(_('至少选择一个局域网设备')));
				return persist(editor.value,Object.assign({},networkOptions,{interfaces:picked})).then(function(message) { decorateTile(lanButton,_('局域网设备'),'▦',picked.join('、')); return message; });
			});
		},networkOptions.interfaces.join('、'));
		networkTiles.push(function() {
			decorateTile(lanButton,_('局域网设备'),'▦',configuredValue(networkOptions.interfaces.join('、'),'interfaces'));
			lanButton.className = 'btn mclash-button mclash-rule-tile' + (!captureActive('interfaces') ? ' mclash-inactive' : '');
		});
		var settingsGrid = E('div',{'class':'mclash-rule-grid mclash-config-grid'},[
			captureTile(), lanButton, scopeTile()
		]);
		var settingsLayout = E('div',{'class':'mclash-settings-layout','data-settings-active':'basic'},[]);
		var rulesLayout = E('div',{'class':'mclash-settings-layout','data-settings-active':'rules'},[]);
		var settingsPane = pane('settings', _('基础设置'), [statusBar,settingsLayout]);
		settingsPane.addEventListener('cbi-tab-active',function() { return refresh().catch(function(err) { notice.show(err.message,'error'); }); });
		settingsLayout.appendChild(E('section', {'class':'mclash-settings-card mclash-capture-card','data-settings-group':'capture'}, [E('h3',{'class':'mclash-category-title'},[_('接管方式')]),settingsGrid]));
		function controllerParts() {
			var meta = overrides.call('summary',editor.value).controller || '0.0.0.0:9097';
			var match = /^(\[[^\]]+\]|[^:]+):([0-9]+)$/.exec(meta);
			return {address:match ? match[1].replace(/^\[|\]$/g,'') : '0.0.0.0',port:match ? match[2] : '9097'};
		}
		function controllerTile() {
			var label = _('监听地址与端口');
			function endpoint() { var parts = controllerParts(); return (parts.address.indexOf(':') >= 0 ? '['+parts.address+']' : parts.address) + ':' + parts.port; }
			var node = tile(label,'⌘',function() {
				var control = E('input',{'class':'cbi-input-text',type:'text',value:endpoint(),placeholder:'127.0.0.1:9091','aria-label':label});
				editSetting(label,control,function() {
					var match = /^(\[[^\]]+\]|[^:]+):([0-9]+)$/.exec(control.value.trim());
					if (!match) return Promise.reject(new Error(_('请输入地址:端口，例如 127.0.0.1:9091')));
					return persist(overrides.call('controller',editor.value,{address:match[1].replace(/^\[|\]$/g,''),port:match[2]})).then(function(message) { decorateTile(node,label,'⌘',endpoint()); return message; });
				});
			},endpoint());
			return node;
		}
		settingsLayout.appendChild(E('section',{'class':'mclash-settings-card','data-settings-group':'control'},[E('div',{'class':'mclash-rule-grid mclash-config-grid'},[controllerTile()])]));
		rulesLayout.appendChild(E('section',{'class':'mclash-settings-card','data-settings-group':'nodes'},[E('h3',{'class':'mclash-category-title'},[_('机场订阅')]),E('div',{'class':'mclash-rule-grid mclash-config-grid'},[tile(_('管理订阅'),'↓',subscriptionDialog)])]));
		rulesLayout.appendChild(manager.element);
		var rulesPane = pane('rules', _('节点与规则'), [rulesLayout]);
		configPane.addEventListener('cbi-tab-active', function() { refreshPreview().catch(function(err) { preview.textContent = err.message; }); });

		var updateView = update.render(command, version, refresh);
		var updatePane = pane('update', _('更新内核'), [updateView.element]);
		updatePane.addEventListener('cbi-tab-active', function() { updateView.refresh().catch(function(err) { notice.show(err.message, 'error'); }); });
		var logsPane = pane('logs', _('日志'), [E('div', {'class': 'mclash-actions'}, [logKind, button(_('刷新日志'), refreshLogs), button(_('清空日志'), function() { return command(logKind.value === 'core' ? 'clear-logs' : 'clear-' + logKind.value + '-logs').then(refreshLogs); }, 'cbi-button-negative')]), logs]);
		logsPane.addEventListener('cbi-tab-active', function() { refreshLogs().catch(function(err) { logs.textContent = err.message; }); });
		var group = E('div', {}, [settingsPane, rulesPane, configPane, logsPane, updatePane]);
		var map = E('div', {'class': 'cbi-map mclash-map'}, [E('h2', {}, [_('Mclash')]), group]);
		showStatus(data[0]);
		ui.tabs.initTabGroup([settingsPane, rulesPane, configPane, logsPane, updatePane]);
		return E('div', {}, [
			E('style', {}, '.mclash-status-grid>.mclash-status-card{height:98px}@media(max-width:500px){.mclash-status-grid>.mclash-status-card{height:86px}}'),
			E('style', {}, ".mclash-status-grid{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:18px 0 24px}.mclash-status-card{display:flex;align-items:center;gap:18px;min-height:82px;padding:16px;border:1px solid var(--border-color-low,#f0f0f0);border-radius:6px;background:var(--background-color-high,#fff);box-shadow:0 2px 14px rgba(0,0,0,.045);text-align:left;text-decoration:none;color:inherit;font:inherit;box-sizing:border-box;cursor:pointer;min-width:0}.mclash-status-grid>.mclash-status-card:nth-child(4){padding-top:34px}.mclash-probe-source{position:absolute;grid-column:-2/-1;grid-row:1/2;z-index:1;top:6px;right:6px;display:inline-flex;align-items:center;min-height:22px;padding:2px 7px;border:1px solid var(--border-color-low,#e5e7eb);border-radius:4px;background:var(--background-color-high,#fff);color:var(--text-color-medium,#667085);font:inherit;font-size:11px;line-height:16px;cursor:pointer;box-shadow:none}.mclash-probe-source:disabled{opacity:.55;cursor:wait}.mclash-probe-source:focus-visible{outline:2px solid var(--primary-color-high,#0069d6)}.mclash-status-card:hover{box-shadow:0 3px 16px rgba(0,0,0,.08);text-decoration:none}.mclash-status-icon{display:flex;align-items:center;justify-content:center;width:46px;height:46px;flex:0 0 46px;border-radius:50%;color:#fff;font-size:23px;font-weight:600}.mclash-panel-icon{display:block;width:32px;height:auto}.mclash-brand-icon{display:block;width:26px;height:26px}.mclash-probe-line{display:flex;gap:5px;align-items:baseline}.mclash-result-icon{flex:0 0 13px;text-align:center;opacity:.75}.mclash-status-body{display:flex;flex-direction:column;gap:7px;min-width:0}.mclash-status-title{font-size:13px;color:var(--text-color-medium,#8b98a8);font-weight:600}.mclash-status-value{font-size:13px;color:#df705b;white-space:pre-line;overflow-wrap:anywhere;line-height:1.4}.mclash-status-value.mclash-ok{color:#2e9f79}.mclash-status-value.mclash-bad{color:#d32f2f}.mclash-panel-card[aria-disabled=true]{opacity:.5;cursor:default}.mclash-status-card:focus-visible{outline:2px solid var(--primary-color-high,#0069d6);outline-offset:2px}.mclash-status-card:disabled{cursor:wait}@media(max-width:900px){.mclash-status-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mclash-probe-source{grid-column:2/3;grid-row:1/2;top:6px;right:6px}.mclash-status-grid>.mclash-status-card:nth-child(4){padding-top:16px}.mclash-status-grid>.mclash-status-card:nth-child(2){padding-top:34px}}@media(max-width:500px){.mclash-status-grid>.mclash-status-card:nth-child(4){padding-top:10px}.mclash-status-grid{gap:8px;margin:12px 0 18px}.mclash-status-card{gap:10px;padding:10px;min-height:76px}.mclash-status-icon{width:32px;height:32px;flex-basis:32px;font-size:17px}.mclash-panel-icon{width:24px}.mclash-status-title,.mclash-status-value{font-size:12px}}" + "\n.mclash-status-scroll{margin:10px 0 18px;overflow:hidden}\n.mclash-status-row{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:10px 0}\n.mclash-status-info,.mclash-status-actions{display:flex;align-items:center;gap:16px}\n.mclash-status-actions{margin-left:auto;gap:8px}\n.mclash-status-actions>.btn{white-space:nowrap;margin:0}\n.mclash-panel-button[aria-disabled=true]{opacity:.5;cursor:default}\n.mclash-panel-button[aria-disabled=false]{color:var(--primary-color-high,#0069d6)}\n.mclash-ok{color:#2e7d32}.mclash-bad{color:#d32f2f}\n.mclash-settings-nav{margin-bottom:18px}\n.mclash-settings-nav>li>.mclash-subtab{background:none;border:0;box-shadow:none;color:inherit;line-height:25px;padding:4px 6px;height:auto;min-height:0;border-radius:4px 4px 0 0;font-size:13px;font-weight:400;text-shadow:none}\n.mclash-settings-layout{padding:0;border:0;background:none}\n.mclash-settings-card{display:none;border:0;background:none;padding:0;margin:0 0 18px}\n.mclash-settings-layout[data-settings-active=basic] [data-settings-group=capture],.mclash-settings-layout[data-settings-active=basic] [data-settings-group=control],.mclash-settings-layout[data-settings-active=rules] [data-settings-group=nodes],.mclash-settings-layout[data-settings-active=rules] [data-settings-group=rules]{display:block}\n.mclash-category-title{font-size:14px;margin:0 0 14px;padding:0;font-weight:600}\n.mclash-rule-tile.btn{display:flex;align-items:center;gap:20px;width:auto;max-width:100%;min-height:30px;padding:0;margin:0 0 12px;border:0;border-radius:0;background:none;color:var(--text-color-high,#404040);box-shadow:none;text-shadow:none;text-align:left;font-size:13px;font-weight:400}\n.mclash-rule-tile.btn:hover{background:none;box-shadow:none}\n.mclash-rule-icon{display:none}\n.mclash-rule-label{display:grid;grid-template-columns:180px minmax(120px,220px);align-items:center;gap:20px;text-align:right;font-size:13px;font-weight:400}\n.mclash-rule-value{display:block;text-align:left;font-size:13px;font-weight:400;color:var(--text-color-medium,#777);margin:0;overflow-wrap:anywhere}\n.mclash-rule-arrow{white-space:nowrap;margin:0;font-weight:400;font-size:12px;min-width:46px;text-align:center}\n.mclash-rule-arrow::before{content:\"设置 \";font-size:12px}\n.mclash-rule-tile:disabled{opacity:.5;cursor:default}\n.mclash-note{margin:0 0 12px;padding:8px 12px;border-left:3px solid var(--primary-color-high,#0069d6);background:rgba(0,105,214,.05)}\n.mclash-log{max-height:55vh;min-height:18em;overflow:auto;white-space:pre-wrap;word-break:break-all;padding:12px;background:var(--background-color-low,rgba(0,0,0,.025));border:1px solid var(--border-color-medium,#ddd);font-size:12px}\n.mclash-config-preview{white-space:pre!important;word-break:normal;overflow-wrap:normal;scrollbar-width:none;-ms-overflow-style:none}\n.mclash-config-preview::-webkit-scrollbar{display:none;width:0;height:0}\n.mclash-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 14px}\n.mclash-update-versions{display:flex;align-items:center;gap:36px;flex-wrap:wrap;margin:0 0 18px}\n.mclash-update-versions>span{white-space:nowrap}\n.mclash-update-status{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 18px}\n.mclash-update-progress{width:min(34em,100%);height:12px;overflow:hidden;border:1px solid var(--border-color-medium,#ddd);border-radius:3px;background:var(--background-color-low,#eee)}\n.mclash-update-progress-fill{height:100%;background:var(--primary-color-high,#0069d6);transition:width .3s ease}\n.mclash-lines{width:100%;box-sizing:border-box;white-space:pre!important;overflow-x:auto;overflow-wrap:normal!important;word-break:normal!important}\n.mclash-modal-scroll{scrollbar-width:none;-ms-overflow-style:none}\n.mclash-modal-scroll::-webkit-scrollbar{display:none}\n.mclash-subscription-row.mclash-actions{flex-wrap:nowrap;overflow-x:auto;white-space:nowrap;scrollbar-width:none;-ms-overflow-style:none;padding-bottom:4px}\n.mclash-subscription-row::-webkit-scrollbar{display:none}\n.mclash-subscription-row>*{flex-shrink:0}\n.mclash-subscription-name{min-width:8em}\n.mclash-subscription-usage{margin-right:auto;color:var(--text-color-medium,#777)}\n.mclash-modal-field{display:flex;flex-direction:column;gap:8px;margin:0 0 14px}\n.mclash-modal-label{display:block;float:none;width:auto;margin:0;padding:0}\n.mclash-modal-control{display:block;width:100%;margin:0}\n.mclash-modal-control>input:not([type=checkbox]),.mclash-modal-control>select,.mclash-dialog-control>input:not([type=checkbox]),.mclash-dialog-control>select{width:100%;box-sizing:border-box}\n.mclash-dialog-control{padding:12px 0}\n.mclash-device-options{display:grid;gap:8px;max-height:50vh;overflow:auto}\n.mclash-device-options label{display:flex;align-items:center;gap:8px}\n@media(max-width:700px){.mclash-status-actions{width:100%;margin:0;overflow-x:auto;scrollbar-width:none}.mclash-status-actions::-webkit-scrollbar{display:none}.mclash-status-actions>.btn{flex-shrink:0}.mclash-status-info{font-size:12px;gap:12px}.mclash-rule-tile.btn{width:100%;gap:10px;margin-bottom:14px}.mclash-rule-label{grid-template-columns:minmax(0,1fr);gap:4px;text-align:left;flex:1;min-width:0}.mclash-rule-value{font-size:12px}.mclash-settings-nav{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.mclash-settings-nav::-webkit-scrollbar{display:none}.mclash-settings-nav>li{flex-shrink:0}.mclash-update-versions{gap:18px}}\n"), map
		]);
	}
});
