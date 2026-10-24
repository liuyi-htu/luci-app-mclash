// Generated from shared Mclash Dart code; rebuild with build-overrides.sh.
// SPDX-License-Identifier: GPL-3.0-only
'use strict';
'require baseclass';
'require mclash.i18n as i18n';
(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.rR(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.l8(b)
return new s(c,this)}:function(){if(s===null)s=A.l8(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.l8(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
lm(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lf(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lh==null){A.r2()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.m8("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hv
if(o==null)o=$.hv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rc(a)
if(p!=null)return p
if(typeof a=="function")return B.cy
s=Object.getPrototypeOf(a)
if(s==null)return B.ar
if(s===Object.prototype)return B.ar
if(typeof q=="function"){o=$.hv
if(o==null)o=$.hv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.U,enumerable:false,writable:true,configurable:true})
return B.U}return B.U},
lU(a,b){if(a<0||a>4294967295)throw A.a(A.a9(a,0,4294967295,"length",null))
return J.oo(new Array(a),b)},
kB(a,b){if(a<0)throw A.a(A.a3("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("K<0>"))},
kA(a,b){if(a<0)throw A.a(A.a3("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("K<0>"))},
oo(a,b){var s=A.c(a,b.i("K<0>"))
s.$flags=1
return s},
lV(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
op(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.lV(r))break;++b}return b},
lW(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.lV(q))break}return b},
aZ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cU.prototype
return J.ec.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.cV.prototype
if(typeof a=="boolean")return J.eb.prototype
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cX.prototype
return a}if(a instanceof A.v)return a
return J.lf(a)},
E(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cX.prototype
return a}if(a instanceof A.v)return a
return J.lf(a)},
a2(a){if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cZ.prototype
if(typeof a=="bigint")return J.cX.prototype
return a}if(a instanceof A.v)return a
return J.lf(a)},
bA(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bP.prototype
return a},
qT(a){if(a==null)return a
if(!(a instanceof A.v))return J.bP.prototype
return a},
r(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aZ(a).T(a,b)},
l(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.r8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.E(a).h(a,b)},
dU(a,b,c){return J.a2(a).j(a,b,c)},
dV(a,b){return J.a2(a).t(a,b)},
kv(a,b){return J.bA(a).bu(a,b)},
nY(a,b,c){return J.bA(a).bS(a,b,c)},
nZ(a,b){return J.a2(a).R(a,b)},
bo(a,b){return J.E(a).q(a,b)},
kw(a,b){return J.a2(a).U(a,b)},
o_(a,b){return J.a2(a).an(a,b)},
lF(a){return J.a2(a).gS(a)},
ac(a){return J.aZ(a).gY(a)},
c7(a){return J.E(a).gJ(a)},
cI(a){return J.E(a).gaI(a)},
D(a){return J.a2(a).gp(a)},
kx(a){return J.a2(a).gK(a)},
a6(a){return J.E(a).gl(a)},
o0(a){return J.aZ(a).gaN(a)},
o1(a,b){return J.E(a).aq(a,b)},
o2(a,b,c){return J.E(a).af(a,b,c)},
aT(a,b,c){return J.a2(a).ac(a,b,c)},
o3(a,b,c){return J.bA(a).by(a,b,c)},
o4(a,b){return J.qT(a).I(a,b)},
ky(a,b){return J.a2(a).au(a,b)},
o5(a,b){return J.a2(a).ao(a,b)},
o6(a,b){return J.a2(a).c2(a,b)},
kz(a,b){return J.bA(a).bi(a,b)},
lG(a,b){return J.bA(a).u(a,b)},
bD(a,b){return J.bA(a).D(a,b)},
o7(a,b,c){return J.bA(a).v(a,b,c)},
o8(a,b){return J.a2(a).a3(a,b)},
am(a){return J.aZ(a).n(a)},
an(a,b){return J.a2(a).aK(a,b)},
e9:function e9(){},
eb:function eb(){},
cV:function cV(){},
cY:function cY(){},
bs:function bs(){},
en:function en(){},
bP:function bP(){},
br:function br(){},
cX:function cX(){},
cZ:function cZ(){},
K:function K(a){this.$ti=a},
ea:function ea(){},
fG:function fG(a){this.$ti=a},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cW:function cW(){},
cU:function cU(){},
ec:function ec(){},
bq:function bq(){}},A={kD:function kD(){},
lY(a){return new A.d1("Field '"+a+"' has been assigned during initialization.")},
j3(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bv(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kM(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f5(a,b,c){return a},
ll(a){var s,r
for(s=$.aG.length,r=0;r<s;++r)if(a===$.aG[r])return!0
return!1},
aX(a,b,c,d){A.ae(b,"start")
if(c!=null){A.ae(c,"end")
if(b>c)A.F(A.a9(b,0,c,"start",null))}return new A.bN(a,b,c,d.i("bN<0>"))},
fT(a,b,c,d){if(t.W.b(a))return new A.bE(a,b,c.i("@<0>").a8(d).i("bE<1,2>"))
return new A.bc(a,b,c.i("@<0>").a8(d).i("bc<1,2>"))},
oz(a,b,c){var s="count"
if(t.W.b(a)){A.cL(b,s,t.p)
A.ae(b,s)
return new A.cd(a,b,c.i("cd<0>"))}A.cL(b,s,t.p)
A.ae(b,s)
return new A.bg(a,b,c.i("bg<0>"))},
ok(a,b,c){if(t.W.b(a))return new A.cc(a,b,c.i("cc<0>"))
return new A.ba(a,b,c.i("ba<0>"))},
a4(){return new A.cp("No element")},
lT(){return new A.cp("Too few elements")},
es(a,b,c,d,e){if(c-b<=32)A.oB(a,b,c,d,e)
else A.oA(a,b,c,d,e)},
oB(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.E(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aL()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
oA(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.bt(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.bt(a4+a5,2),f=g-j,e=g+j,d=J.E(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.r(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.h(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else for(;;){m=a6.$2(d.h(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
q=l
r=k
break}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
r=k}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)}q=l
break}}a2=r-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=q+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
A.es(a3,a4,r-2,a6,a7)
A.es(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.r(a6.$2(d.h(a3,r),b),0))++r
while(J.r(a6.$2(d.h(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
r=k}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)}q=l
break}}A.es(a3,r,q,a6,a7)}else A.es(a3,r,q,a6,a7)},
d1:function d1(a){this.a=a},
aH:function aH(a){this.a=a},
h2:function h2(){},
w:function w(){},
y:function y(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
q:function q(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bg:function bg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(a){this.$ti=a},
cS:function cS(a){this.$ti=a},
dn:function dn(a,b){this.a=a
this.$ti=b},
dp:function dp(a,b){this.a=a
this.$ti=b},
ba:function ba(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aL:function aL(){},
ax:function ax(){},
cr:function cr(){},
eT:function eT(a){this.a=a},
d2:function d2(a,b){this.a=a
this.$ti=b},
da:function da(a,b){this.a=a
this.$ti=b},
lO(a,b,c){var s,r,q,p,o,n,m,l=A.j(a),k=A.O(new A.ak(a,l.i("ak<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.a_)(k),++i,p=o){r=k[i]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.O(new A.aE(a,l.i("aE<2>")),!0,c)
m=new A.aJ(q,n,b.i("@<0>").a8(c).i("aJ<1,2>"))
m.$keys=k
return m}return new A.cO(A.ah(a,b,c),b.i("@<0>").a8(c).i("cO<1,2>"))},
lP(){throw A.a(A.N("Cannot modify unmodifiable Map"))},
lQ(){throw A.a(A.N("Cannot modify constant Set"))},
nA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
r8(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.am(a)
return s},
ep(a){var s,r=$.m3
if(r==null)r=$.m3=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
aU(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.a(A.a9(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
m4(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.N(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
eq(a){var s,r,q,p
if(a instanceof A.v)return A.au(A.aa(a),null)
s=J.aZ(a)
if(s===B.cw||s===B.cz||t.ak.b(a)){r=B.a5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.au(A.aa(a),null)},
m5(a){var s,r,q
if(a==null||typeof a=="number"||A.f3(a))return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.as)return a.n(0)
if(a instanceof A.az)return a.dK(!0)
s=$.nW()
for(r=0;r<1;++r){q=s[r].hf(a)
if(q!=null)return q}return"Instance of '"+A.eq(a)+"'"},
or(){if(!!self.location)return self.location.href
return null},
m2(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ot(a){var s,r,q,p=A.c([],t.Z)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r){q=a[r]
if(!A.b5(q))throw A.a(A.dM(q))
if(q<=65535)B.b.t(p,q)
else if(q<=1114111){B.b.t(p,55296+(B.d.b3(q-65536,10)&1023))
B.b.t(p,56320+(q&1023))}else throw A.a(A.dM(q))}return A.m2(p)},
os(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.b5(q))throw A.a(A.dM(q))
if(q<0)throw A.a(A.dM(q))
if(q>65535)return A.ot(a)}return A.m2(a)},
ou(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
A(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.b3(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.a9(a,0,1114111,null,null))},
qX(a){throw A.a(A.dM(a))},
b(a,b){if(a==null)J.a6(a)
throw A.a(A.dN(a,b))},
dN(a,b){var s,r="index"
if(!A.b5(b))return new A.b_(!0,b,r,null)
s=J.a6(a)
if(b<0||b>=s)return A.e7(b,s,a,null,r)
return A.fZ(b,r)},
qJ(a,b,c){if(a<0||a>c)return A.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a9(b,a,c,"end",null)
return new A.b_(!0,b,"end",null)},
dM(a){return new A.b_(!0,a,null,null)},
a(a){return A.ag(a,new Error())},
ag(a,b){var s
if(a==null)a=new A.dj()
b.dartException=a
s=A.rS
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
rS(){return J.am(this.dartException)},
F(a,b){throw A.ag(a,b==null?new Error():b)},
W(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.F(A.pC(a,b,c),s)},
pC(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.dl("'"+s+"': Cannot "+o+" "+l+k+n)},
a_(a){throw A.a(A.Q(a))},
bj(a){var s,r,q,p,o,n
a=A.ju(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.h6(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h7(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
m7(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kE(a,b){var s=b==null,r=s?null:b.method
return new A.ed(a,r,s?null:b.receiver)},
bC(a){if(a==null)return new A.ei(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.c5(a,a.dartException)
return A.qf(a)},
c5(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.b3(r,16)&8191)===10)switch(q){case 438:return A.c5(a,A.kE(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.c5(a,new A.d6())}}if(a instanceof TypeError){p=$.nH()
o=$.nI()
n=$.nJ()
m=$.nK()
l=$.nN()
k=$.nO()
j=$.nM()
$.nL()
i=$.nQ()
h=$.nP()
g=p.aM(s)
if(g!=null)return A.c5(a,A.kE(A.e(s),g))
else{g=o.aM(s)
if(g!=null){g.method="call"
return A.c5(a,A.kE(A.e(s),g))}else if(n.aM(s)!=null||m.aM(s)!=null||l.aM(s)!=null||k.aM(s)!=null||j.aM(s)!=null||m.aM(s)!=null||i.aM(s)!=null||h.aM(s)!=null){A.e(s)
return A.c5(a,new A.d6())}}return A.c5(a,new A.eB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.df()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.c5(a,new A.b_(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.df()
return a},
dP(a){if(a==null)return J.ac(a)
if(typeof a=="object")return A.ep(a)
return J.ac(a)},
qQ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qR(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
pN(a,b,c,d,e,f){t._.a(a)
switch(A.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.eO("Unsupported number of arguments for wrapped closure"))},
qs(a,b){var s=a.$identity
if(!!s)return s
s=A.qt(a,b)
a.$identity=s
return s},
qt(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pN)},
of(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ex().constructor.prototype):Object.create(new A.ca(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lN(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ob(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lN(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ob(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.o9)}throw A.a("Error in functionType of tearoff")},
oc(a,b,c,d){var s=A.lM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lN(a,b,c,d){if(c)return A.oe(a,b,d)
return A.oc(b.length,d,a,b)},
od(a,b,c,d){var s=A.lM,r=A.oa
switch(b?-1:a){case 0:throw A.a(new A.er("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
oe(a,b,c){var s,r
if($.lK==null)$.lK=A.lJ("interceptor")
if($.lL==null)$.lL=A.lJ("receiver")
s=b.length
r=A.od(s,c,a,b)
return r},
l8(a){return A.of(a)},
o9(a,b){return A.dH(v.typeUniverse,A.aa(a.a),b)},
lM(a){return a.a},
oa(a){return a.b},
lJ(a){var s,r,q,p=new A.ca("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.a3("Field name "+a+" not found."))},
nj(a){return v.getIsolateTag(a)},
tu(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rc(a){var s,r,q,p,o,n=A.e($.nm.$1(a)),m=$.iQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j7[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.c1($.n9.$2(a,n))
if(q!=null){m=$.iQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j7[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jc(s)
$.iQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j7[n]=s
return s}if(p==="-"){o=A.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nu(a,s)
if(p==="*")throw A.a(A.m8(n))
if(v.leafTags[n]===true){o=A.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nu(a,s)},
nu(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lm(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc(a){return J.lm(a,!1,null,!!a.$ici)},
re(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jc(s)
else return J.lm(s,c,null,null)},
r2(){if(!0===$.lh)return
$.lh=!0
A.r3()},
r3(){var s,r,q,p,o,n,m,l
$.iQ=Object.create(null)
$.j7=Object.create(null)
A.r1()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nv.$1(o)
if(n!=null){m=A.re(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
r1(){var s,r,q,p,o,n,m=B.aK()
m=A.cF(B.aL,A.cF(B.aM,A.cF(B.a6,A.cF(B.a6,A.cF(B.aN,A.cF(B.aO,A.cF(B.aP(B.a5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nm=new A.j4(p)
$.n9=new A.j5(o)
$.nv=new A.j6(n)},
cF(a,b){return a(b)||b},
qC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kC(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.B("Illegal RegExp pattern ("+String(o)+")",a,null))},
rI(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.b0){s=B.a.D(a,c)
return b.b.test(s)}else return!J.kv(b,B.a.D(a,c)).gJ(0)},
lc(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
rM(a,b,c,d){var s=b.ci(a,d)
if(s==null)return a
return A.lv(a,s.b.index,s.gH(),c)},
ju(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
J(a,b,c){var s
if(typeof b=="string")return A.rL(a,b,c)
if(b instanceof A.b0){s=b.gdl()
s.lastIndex=0
return a.replace(s,A.lc(c))}return A.rK(a,b,c)},
rK(a,b,c){var s,r,q,p
for(s=J.kv(b,a),s=s.gp(s),r=0,q="";s.k();){p=s.gm()
q=q+a.substring(r,p.gC())+c
r=p.gH()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
rL(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.ju(b),"g"),A.lc(c))},
n3(a){return a},
rJ(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.bu(0,a),s=new A.dr(s.a,s.b,s.c),r=t.cz,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.m(A.n3(B.a.v(a,q,m)))+A.m(c.$1(o))
q=m+n[0].length}s=p+A.m(A.n3(B.a.D(a,q)))
return s.charCodeAt(0)==0?s:s},
rN(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.lv(a,s,s+b.length,c)}if(b instanceof A.b0)return d===0?a.replace(b.b,A.lc(c)):A.rM(a,b,c,d)
r=J.nY(b,a,d)
q=r.gp(r)
if(!q.k())return a
p=q.gm()
return B.a.aU(a,p.gC(),p.gH(),c)},
lv(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
b4:function b4(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.$ti=b},
cN:function cN(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a,b){this.a=a
this.$ti=b},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cP:function cP(){},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
e8:function e8(){},
cf:function cf(a,b){this.a=a
this.$ti=b},
db:function db(){},
h6:function h6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(){},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a},
ei:function ei(a){this.a=a},
as:function as(){},
dZ:function dZ(){},
e_:function e_(){},
ez:function ez(){},
ex:function ex(){},
ca:function ca(a,b){this.a=a
this.b=b},
er:function er(a){this.a=a},
aC:function aC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fI:function fI(a,b){this.a=a
this.b=b},
fH:function fH(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ak:function ak(a,b){this.a=a
this.$ti=b},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aE:function aE(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
R:function R(a,b){this.a=a
this.$ti=b},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d_:function d_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
az:function az(){},
aY:function aY(){},
cw:function cw(){},
b0:function b0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cv:function cv(a){this.b=a},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cq:function cq(a,b){this.a=a
this.c=b},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
rR(a){throw A.ag(A.lY(a),new Error())},
k6(){throw A.ag(A.lY(""),new Error())},
mg(){var s=new A.hr()
return s.b=s},
hr:function hr(){this.b=null},
pD(a){return a},
m0(a){return new Uint8Array(a)},
i_(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.dN(b,a))},
mP(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.qJ(a,b,c))
return b},
d4:function d4(){},
b2:function b2(){},
bd:function bd(){},
eh:function eh(){},
d5:function d5(){},
bI:function bI(){},
dx:function dx(){},
dy:function dy(){},
kJ(a,b){var s=b.c
return s==null?b.c=A.dF(a,"lS",[b.x]):s},
m6(a){var s=a.w
if(s===6||s===7)return A.m6(a.x)
return s===11||s===12},
oy(a){return a.as},
aS(a){return A.hE(v.typeUniverse,a,!1)},
r5(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.bz(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
bz(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bz(a1,s,a3,a4)
if(r===s)return a2
return A.ms(a1,r,!0)
case 7:s=a2.x
r=A.bz(a1,s,a3,a4)
if(r===s)return a2
return A.mr(a1,r,!0)
case 8:q=a2.y
p=A.cE(a1,q,a3,a4)
if(p===q)return a2
return A.dF(a1,a2.x,p)
case 9:o=a2.x
n=A.bz(a1,o,a3,a4)
m=a2.y
l=A.cE(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.kT(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cE(a1,j,a3,a4)
if(i===j)return a2
return A.mt(a1,k,i)
case 11:h=a2.x
g=A.bz(a1,h,a3,a4)
f=a2.y
e=A.q8(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.mq(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cE(a1,d,a3,a4)
o=a2.x
n=A.bz(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.kU(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.dX("Attempted to substitute unexpected RTI kind "+a0))}},
cE(a,b,c,d){var s,r,q,p,o=b.length,n=A.hL(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bz(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q9(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hL(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bz(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q8(a,b,c,d){var s,r=b.a,q=A.cE(a,r,c,d),p=b.b,o=A.cE(a,p,c,d),n=b.c,m=A.q9(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eP()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
iE(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qV(s)
return a.$S()}return null},
r4(a,b){var s
if(A.m6(b))if(a instanceof A.as){s=A.iE(a)
if(s!=null)return s}return A.aa(a)},
aa(a){if(a instanceof A.v)return A.j(a)
if(Array.isArray(a))return A.u(a)
return A.l0(J.aZ(a))},
u(a){var s=a[v.arrayRti],r=t.J
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.l0(a)},
l0(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pM(a,s)},
pM(a,b){var s=a instanceof A.as?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.pc(v.typeUniverse,s.name)
b.$ccache=r
return r},
qV(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j0(a){return A.b6(A.j(a))},
lg(a){var s=A.iE(a)
return A.b6(s==null?A.aa(a):s)},
l2(a){var s
if(a instanceof A.az)return A.qP(a.$r,a.cj())
s=a instanceof A.as?A.iE(a):null
if(s!=null)return s
if(t.ci.b(a))return J.o0(a).a
if(Array.isArray(a))return A.u(a)
return A.aa(a)},
b6(a){var s=a.r
return s==null?a.r=new A.hD(a):s},
qP(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.b(q,0)
s=A.dH(v.typeUniverse,A.l2(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.mu(v.typeUniverse,s,A.l2(q[r]))}return A.dH(v.typeUniverse,s,a)},
k7(a){return A.b6(A.hE(v.typeUniverse,a,!1))},
pL(a){var s=this
s.b=A.q6(s)
return s.b(a)},
q6(a){var s,r,q,p,o
if(a===t.K)return A.pT
if(A.c4(a))return A.pX
s=a.w
if(s===6)return A.pH
if(s===1)return A.mX
if(s===7)return A.pO
r=A.q5(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.c4)){a.f="$i"+q
if(q==="p")return A.pR
if(a===t.o)return A.pQ
return A.pW}}else if(s===10){p=A.qC(a.x,a.y)
o=p==null?A.mX:p
return o==null?A.f2(o):o}return A.pF},
q5(a){if(a.w===8){if(a===t.p)return A.b5
if(a===t.i||a===t.H)return A.pS
if(a===t.N)return A.pV
if(a===t.y)return A.f3}return null},
pK(a){var s=this,r=A.pE
if(A.c4(s))r=A.pw
else if(s===t.K)r=A.f2
else if(A.cH(s)){r=A.pG
if(s===t.h6)r=A.hZ
else if(s===t.dk)r=A.c1
else if(s===t.fQ)r=A.mM
else if(s===t.cg)r=A.mO
else if(s===t.cD)r=A.pt
else if(s===t.an)r=A.pv}else if(s===t.p)r=A.V
else if(s===t.N)r=A.e
else if(s===t.y)r=A.hY
else if(s===t.H)r=A.mN
else if(s===t.i)r=A.ps
else if(s===t.o)r=A.pu
s.a=r
return s.a(a)},
pF(a){var s=this
if(a==null)return A.cH(s)
return A.nr(v.typeUniverse,A.r4(a,s),s)},
pH(a){if(a==null)return!0
return this.x.b(a)},
pW(a){var s,r=this
if(a==null)return A.cH(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aZ(a)[s]},
pR(a){var s,r=this
if(a==null)return A.cH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aZ(a)[s]},
pQ(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mW(a){if(typeof a=="object"){if(a instanceof A.v)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
pE(a){var s=this
if(a==null){if(A.cH(s))return a}else if(s.b(a))return a
throw A.ag(A.mS(a,s),new Error())},
pG(a){var s=this
if(a==null||s.b(a))return a
throw A.ag(A.mS(a,s),new Error())},
mS(a,b){return new A.cA("TypeError: "+A.mh(a,A.au(b,null)))},
qn(a,b,c,d){if(A.nr(v.typeUniverse,a,b))return a
throw A.ag(A.p4("The type argument '"+A.au(a,null)+"' is not a subtype of the type variable bound '"+A.au(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
mh(a,b){return A.e5(a)+": type '"+A.au(A.l2(a),null)+"' is not a subtype of type '"+b+"'"},
p4(a){return new A.cA("TypeError: "+a)},
aR(a,b){return new A.cA("TypeError: "+A.mh(a,b))},
pO(a){var s=this
return s.x.b(a)||A.kJ(v.typeUniverse,s).b(a)},
pT(a){return a!=null},
f2(a){if(a!=null)return a
throw A.ag(A.aR(a,"Object"),new Error())},
pX(a){return!0},
pw(a){return a},
mX(a){return!1},
f3(a){return!0===a||!1===a},
hY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ag(A.aR(a,"bool"),new Error())},
mM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ag(A.aR(a,"bool?"),new Error())},
ps(a){if(typeof a=="number")return a
throw A.ag(A.aR(a,"double"),new Error())},
pt(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ag(A.aR(a,"double?"),new Error())},
b5(a){return typeof a=="number"&&Math.floor(a)===a},
V(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ag(A.aR(a,"int"),new Error())},
hZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ag(A.aR(a,"int?"),new Error())},
pS(a){return typeof a=="number"},
mN(a){if(typeof a=="number")return a
throw A.ag(A.aR(a,"num"),new Error())},
mO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ag(A.aR(a,"num?"),new Error())},
pV(a){return typeof a=="string"},
e(a){if(typeof a=="string")return a
throw A.ag(A.aR(a,"String"),new Error())},
c1(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ag(A.aR(a,"String?"),new Error())},
pu(a){if(A.mW(a))return a
throw A.ag(A.aR(a,"JSObject"),new Error())},
pv(a){if(a==null)return a
if(A.mW(a))return a
throw A.ag(A.aR(a,"JSObject?"),new Error())},
mZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.au(a[q],b)
return s},
q1(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.au(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mT(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.b.t(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.au(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.au(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.au(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.au(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.au(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
au(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.au(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.au(a.x,b)+">"
if(l===8){p=A.qe(a.x)
o=a.y
return o.length>0?p+("<"+A.mZ(o,b)+">"):p}if(l===10)return A.q1(a,b)
if(l===11)return A.mT(a,b,null)
if(l===12)return A.mT(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
qe(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
pd(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
pc(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dG(a,5,"#")
q=A.hL(s)
for(p=0;p<s;++p)q[p]=r
o=A.dF(a,b,q)
n[b]=o
return o}else return m},
pb(a,b){return A.mI(a.tR,b)},
pa(a,b){return A.mI(a.eT,b)},
hE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.mm(A.mk(a,null,b,!1))
r.set(b,s)
return s},
dH(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.mm(A.mk(a,b,c,!0))
q.set(c,r)
return r},
mu(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.kT(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
by(a,b){b.a=A.pK
b.b=A.pL
return b},
dG(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aV(null,null)
s.w=b
s.as=c
r=A.by(a,s)
a.eC.set(c,r)
return r},
ms(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.p8(a,b,r,c)
a.eC.set(r,s)
return s},
p8(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.c4(b))if(!(b===t.b||b===t.u))if(s!==6)r=s===7&&A.cH(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.aV(null,null)
q.w=6
q.x=b
q.as=c
return A.by(a,q)},
mr(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.p6(a,b,r,c)
a.eC.set(r,s)
return s},
p6(a,b,c,d){var s,r
if(d){s=b.w
if(A.c4(b)||b===t.K)return b
else if(s===1)return A.dF(a,"lS",[b])
else if(b===t.b||b===t.u)return t.eH}r=new A.aV(null,null)
r.w=7
r.x=b
r.as=c
return A.by(a,r)},
p9(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=13
s.x=b
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
dE(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
p5(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dF(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aV(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.by(a,r)
a.eC.set(p,q)
return q},
kT(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aV(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.by(a,o)
a.eC.set(q,n)
return n},
mt(a,b,c){var s,r,q="+"+(b+"("+A.dE(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
mq(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dE(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dE(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.p5(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aV(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.by(a,p)
a.eC.set(r,o)
return o},
kU(a,b,c,d){var s,r=b.as+("<"+A.dE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.p7(a,b,c,r,d)
a.eC.set(r,s)
return s},
p7(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hL(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bz(a,b,r,0)
m=A.cE(a,c,r,0)
return A.kU(a,n,m,c!==m)}}l=new A.aV(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.by(a,l)},
mk(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mm(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.p_(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ml(a,r,l,k,!1)
else if(q===46)r=A.ml(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bY(a.u,a.e,k.pop()))
break
case 94:k.push(A.p9(a.u,k.pop()))
break
case 35:k.push(A.dG(a.u,5,"#"))
break
case 64:k.push(A.dG(a.u,2,"@"))
break
case 126:k.push(A.dG(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.p1(a,k)
break
case 38:A.p0(a,k)
break
case 63:p=a.u
k.push(A.ms(p,A.bY(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.mr(p,A.bY(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oZ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.mn(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.p3(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.bY(a.u,a.e,m)},
p_(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ml(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.pd(s,o.x)[p]
if(n==null)A.F('No "'+p+'" in "'+A.oy(o)+'"')
d.push(A.dH(s,o,n))}else d.push(p)
return m},
p1(a,b){var s,r=a.u,q=A.mj(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dF(r,p,q))
else{s=A.bY(r,a.e,p)
switch(s.w){case 11:b.push(A.kU(r,s,q,a.n))
break
default:b.push(A.kT(r,s,q))
break}}},
oZ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.mj(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bY(p,a.e,o)
q=new A.eP()
q.a=s
q.b=n
q.c=m
b.push(A.mq(p,r,q))
return
case-4:b.push(A.mt(p,b.pop(),s))
return
default:throw A.a(A.dX("Unexpected state under `()`: "+A.m(o)))}},
p0(a,b){var s=b.pop()
if(0===s){b.push(A.dG(a.u,1,"0&"))
return}if(1===s){b.push(A.dG(a.u,4,"1&"))
return}throw A.a(A.dX("Unexpected extended operation "+A.m(s)))},
mj(a,b){var s=b.splice(a.p)
A.mn(a.u,a.e,s)
a.p=b.pop()
return s},
bY(a,b,c){if(typeof c=="string")return A.dF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.p2(a,b,c)}else return c},
mn(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bY(a,b,c[s])},
p3(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bY(a,b,c[s])},
p2(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.dX("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.dX("Bad index "+c+" for "+b.n(0)))},
nr(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ad(a,b,null,c,null)
r.set(c,s)}return s},
ad(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.c4(d))return!0
s=b.w
if(s===4)return!0
if(A.c4(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ad(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.u){if(q===7)return A.ad(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.ad(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ad(a,b.x,c,d,e))return!1
return A.ad(a,A.kJ(a,b),c,d,e)}if(s===6)return A.ad(a,p,c,d,e)&&A.ad(a,b.x,c,d,e)
if(q===7){if(A.ad(a,b,c,d.x,e))return!0
return A.ad(a,b,c,A.kJ(a,d),e)}if(q===6)return A.ad(a,b,c,p,e)||A.ad(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t._)return!0
o=s===10
if(o&&d===t.fl)return!0
if(q===12){if(b===t.cj)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.ad(a,j,c,i,e)||!A.ad(a,i,e,j,c))return!1}return A.mV(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.mV(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pP(a,b,c,d,e)}if(o&&q===10)return A.pU(a,b,c,d,e)
return!1},
mV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ad(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.ad(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ad(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ad(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.ad(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pP(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dH(a,b,r[o])
return A.mL(a,p,null,c,d.y,e)}return A.mL(a,b.y,null,c,d.y,e)},
mL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ad(a,b[s],d,e[s],f))return!1
return!0},
pU(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ad(a,r[s],c,q[s],e))return!1
return!0},
cH(a){var s=a.w,r=!0
if(!(a===t.b||a===t.u))if(!A.c4(a))if(s!==6)r=s===7&&A.cH(a.x)
return r},
c4(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mI(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hL(a){return a>0?new Array(a):v.typeUniverse.sEA},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eP:function eP(){this.c=this.b=this.a=null},
hD:function hD(a){this.a=a},
eN:function eN(){},
cA:function cA(a){this.a=a},
mp(a,b,c){return 0},
dD:function dD(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bx:function bx(a,b){this.a=a
this.$ti=b},
fN(a,b,c,d){if(b==null){if(a==null)return new A.aC(c.i("@<0>").a8(d).i("aC<1,2>"))
b=A.qq()}else{if(A.qy()===b&&A.qx()===a)return new A.d_(c.i("@<0>").a8(d).i("d_<1,2>"))
if(a==null)a=A.qp()}return A.oY(a,b,null,c,d)},
a7(a,b,c){return b.i("@<0>").a8(c).i("fL<1,2>").a(A.qQ(a,new A.aC(b.i("@<0>").a8(c).i("aC<1,2>"))))},
n(a,b){return new A.aC(a.i("@<0>").a8(b).i("aC<1,2>"))},
oY(a,b,c,d,e){return new A.du(a,b,new A.hA(d),d.i("@<0>").a8(e).i("du<1,2>"))},
kQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kG(a){return new A.ay(a.i("ay<0>"))},
aN(a){return new A.ay(a.i("ay<0>"))},
lZ(a,b){return b.i("kF<0>").a(A.qR(a,new A.ay(b.i("ay<0>"))))},
kS(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kR(a,b,c){var s=new A.bX(a,b,c.i("bX<0>"))
s.c=a.e
return s},
pz(a,b){return J.r(a,b)},
pA(a){return J.ac(a)},
ah(a,b,c){var s=A.fN(null,null,b,c)
a.an(0,new A.fO(s,b,c))
return s},
fP(a,b,c){var s=A.fN(null,null,b,c)
s.a9(0,a)
return s},
av(a,b){var s,r,q=A.kG(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r)q.t(0,b.a(a[r]))
return q},
eg(a,b){var s=A.kG(b)
s.a9(0,a)
return s},
kI(a){var s,r
if(A.ll(a))return"{...}"
s=new A.Y("")
try{r={}
B.b.t($.aG,a)
s.a+="{"
r.a=!0
a.an(0,new A.fS(r,s))
s.a+="}"}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
du:function du(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
hA:function hA(a){this.a=a},
bU:function bU(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ct:function ct(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cu:function cu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eS:function eS(a){this.a=a
this.c=this.b=null},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dk:function dk(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
z:function z(){},
fR:function fR(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
cs:function cs(){},
dv:function dv(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
aq:function aq(){},
cj:function cj(){},
b3:function b3(a,b){this.a=a
this.$ti=b},
aW:function aW(){},
dC:function dC(){},
cB:function cB(){},
pZ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bC(r)
q=A.B(String(s),null,null)
throw A.a(q)}q=A.i0(p)
return q},
i0(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.eQ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.i0(a[s])
return a},
po(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.nU()
else s=new Uint8Array(o)
for(r=J.E(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
pn(a,b,c,d){var s=a?$.nT():$.nS()
if(s==null)return null
if(0===c&&d===b.length)return A.mH(s,b)
return A.mH(s,b.subarray(c,d))},
mH(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
lI(a,b,c,d,e,f){if(B.d.c1(f,4)!==0)throw A.a(A.B("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.B("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.B("Invalid base64 padding, more than two '=' characters",a,b))},
oR(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=b.length,r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){if(!(p<s))return A.b(b,p)
n=b[p]
o|=n
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.b(a,l)
q&2&&A.W(f)
k=f.length
if(!(g<k))return A.b(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i>>>12&63
if(!(l<r))return A.b(a,l)
if(!(m<k))return A.b(f,m)
f[m]=a.charCodeAt(l)
m=g+1
l=i>>>6&63
if(!(l<r))return A.b(a,l)
if(!(g<k))return A.b(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i&63
if(!(l<r))return A.b(a,l)
if(!(m<k))return A.b(f,m)
f[m]=a.charCodeAt(l)
i=0
h=3}}if(o>=0&&o<=255){if(h<3){m=g+1
j=m+1
if(3-h===1){s=i>>>2&63
if(!(s<r))return A.b(a,s)
q&2&&A.W(f)
q=f.length
if(!(g<q))return A.b(f,g)
f[g]=a.charCodeAt(s)
s=i<<4&63
if(!(s<r))return A.b(a,s)
if(!(m<q))return A.b(f,m)
f[m]=a.charCodeAt(s)
g=j+1
if(!(j<q))return A.b(f,j)
f[j]=61
if(!(g<q))return A.b(f,g)
f[g]=61}else{s=i>>>10&63
if(!(s<r))return A.b(a,s)
q&2&&A.W(f)
q=f.length
if(!(g<q))return A.b(f,g)
f[g]=a.charCodeAt(s)
s=i>>>4&63
if(!(s<r))return A.b(a,s)
if(!(m<q))return A.b(f,m)
f[m]=a.charCodeAt(s)
g=j+1
s=i<<2&63
if(!(s<r))return A.b(a,s)
if(!(j<q))return A.b(f,j)
f[j]=a.charCodeAt(s)
if(!(g<q))return A.b(f,g)
f[g]=61}return 0}return(i<<2|3-h)>>>0}for(p=c;p<d;){if(!(p<s))return A.b(b,p)
n=b[p]
if(n>255)break;++p}if(!(p<s))return A.b(b,p)
throw A.a(A.lH(b,"Not a byte value at index "+p+": 0x"+B.d.hd(b[p],16),null))},
oQ(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.b3(a1,2),f=a1&3,e=$.lB()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.b(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.b(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.W(d)
m=d.length
if(!(a0<m))return A.b(d,a0)
d[a0]=g>>>16&255
a0=k+1
if(!(k<m))return A.b(d,k)
d[k]=g>>>8&255
k=a0+1
if(!(a0<m))return A.b(d,a0)
d[a0]=g&255
a0=k
g=0}continue}else if(l===-1&&f>1){if(o>127)break
if(f===3){if((g&3)!==0)throw A.a(A.B(i,a,p))
k=a0+1
q&2&&A.W(d)
s=d.length
if(!(a0<s))return A.b(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.b(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.a(A.B(i,a,p))
q&2&&A.W(d)
if(!(a0<d.length))return A.b(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.mf(a,p+1,c,-j-1)}throw A.a(A.B(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.b(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.B(h,a,p))},
oO(a,b,c,d){var s=A.oP(a,b,c),r=(d&3)+(s-b),q=B.d.b3(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.nR()},
oP(a,b,c){var s,r=a.length,q=c,p=q,o=0
for(;;){if(!(p>b&&o<2))break
A:{--p
if(!(p>=0&&p<r))return A.b(a,p)
s=a.charCodeAt(p)
if(s===61){++o
q=p
break A}if((s|32)===100){if(p===b)break;--p
if(!(p>=0&&p<r))return A.b(a,p)
s=a.charCodeAt(p)}if(s===51){if(p===b)break;--p
if(!(p>=0&&p<r))return A.b(a,p)
s=a.charCodeAt(p)}if(s===37){++o
q=p
break A}break}}return q},
mf(a,b,c,d){var s,r,q
if(b===c)return d
s=-d-1
for(r=a.length;s>0;){if(!(b<r))return A.b(a,b)
q=a.charCodeAt(b)
if(s===3){if(q===61){s-=3;++b
break}if(q===37){--s;++b
if(b===c)break
if(!(b<r))return A.b(a,b)
q=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(q!==51)break;++b;--s
if(b===c)break
if(!(b<r))return A.b(a,b)
q=a.charCodeAt(b)}if((q|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.a(A.B("Invalid padding character",a,b))
return-s-1},
lX(a,b,c){return new A.d0(a,b)},
pB(a){return a.hc()},
oW(a,b){return new A.hx(a,[],A.qu())},
oX(a,b,c){var s,r=new A.Y(""),q=A.oW(r,b)
q.c_(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
pp(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
eQ:function eQ(a,b){this.a=a
this.b=b
this.c=null},
hw:function hw(a){this.a=a},
eR:function eR(a){this.a=a},
hJ:function hJ(){},
hI:function hI(){},
c9:function c9(a){this.a=a},
dY:function dY(a){this.a=a},
hq:function hq(a){this.a=0
this.b=a},
ff:function ff(){},
hp:function hp(){this.a=0},
aI:function aI(){},
e1:function e1(){},
e4:function e4(){},
d0:function d0(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
ee:function ee(){},
fK:function fK(a){this.b=a},
fJ:function fJ(a){this.a=a},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.c=a
this.a=b
this.b=c},
eG:function eG(){},
hc:function hc(){},
hK:function hK(a){this.b=0
this.c=a},
hb:function hb(a){this.a=a},
hH:function hH(a){this.a=a
this.b=16
this.c=0},
qZ(a){return A.dP(a)},
cG(a,b,c){var s
A.e(a)
A.hZ(c)
t.ck.a(b)
s=A.aU(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.a(A.B(a,null,null))},
np(a,b){return A.aU(A.e(a),A.hZ(b))},
aO(a,b,c,d){var s,r=c?J.kB(a,d):J.lU(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
O(a,b,c){var s,r=A.c([],c.i("K<0>"))
for(s=J.D(a);s.k();)B.b.t(r,c.a(s.gm()))
if(b)return r
r.$flags=1
return r},
o(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("K<0>"))
s=A.c([],b.i("K<0>"))
for(r=J.D(a);r.k();)B.b.t(s,r.gm())
return s},
kH(a,b){var s=A.O(a,!1,b)
s.$flags=3
return s},
dh(a,b,c){var s,r
A.ae(b,"start")
s=c!=null
if(s){r=c-b
if(r<0)throw A.a(A.a9(c,b,null,"end",null))
if(r===0)return""}if(t.bm.b(a))return A.oF(a,b,c)
if(s)a=A.aX(a,0,A.f5(c,"count",t.p),A.aa(a).i("t.E"))
if(b>0)a=J.o5(a,b)
s=A.o(a,t.p)
return A.os(s)},
oF(a,b,c){var s=a.length
if(b>=s)return""
return A.ou(a,b,c==null||c>s?s:c)},
G(a,b){return new A.b0(a,A.kC(a,!1,b,!1,!1,""))},
qY(a,b){return a==null?b==null:a===b},
kL(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.k())}else{a+=A.m(s.gm())
while(s.k())a=a+c+A.m(s.gm())}return a},
kP(){var s,r,q=A.or()
if(q==null)throw A.a(A.N("'Uri.base' is not supported"))
s=$.mc
if(s!=null&&q===$.mb)return s
r=A.eE(q,0,null)
$.mc=r
$.mb=q
return r},
e5(a){if(typeof a=="number"||A.f3(a)||a==null)return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
return A.m5(a)},
dX(a){return new A.c8(a)},
a3(a){return new A.b_(!1,null,null,a)},
lH(a,b,c){return new A.b_(!0,a,b,c)},
cL(a,b,c){return a},
a8(a){var s=null
return new A.cl(s,s,!1,s,s,a)},
fZ(a,b){return new A.cl(null,null,!0,a,b,"Value not in range")},
a9(a,b,c,d,e){return new A.cl(b,c,!0,a,d,"Invalid value")},
cm(a,b,c,d){if(a<b||a>c)throw A.a(A.a9(a,b,c,d,null))
return a},
bf(a,b,c){if(0>a||a>c)throw A.a(A.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.a9(b,a,c,"end",null))
return b}return c},
ae(a,b){if(a<0)throw A.a(A.a9(a,0,null,b==null?"index":b,null))
return a},
e7(a,b,c,d,e){return new A.e6(b,!0,a,e,"Index out of range")},
N(a){return new A.dl(a)},
m8(a){return new A.eA(a)},
bi(a){return new A.cp(a)},
Q(a){return new A.e0(a)},
B(a,b,c){return new A.i(a,b,c)},
on(a,b,c){var s,r
if(A.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.t($.aG,a)
try{A.pY(a,s)}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=A.kL(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fF(a,b,c){var s,r
if(A.ll(a))return b+"..."+c
s=new A.Y(b)
B.b.t($.aG,a)
try{r=s
r.a=A.kL(r.a,a,", ")}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pY(a,b){var s,r,q,p,o,n,m,l=a.gp(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.m(l.gm())
B.b.t(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){B.b.t(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.b.t(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.t(b,m)
B.b.t(b,q)
B.b.t(b,r)},
ej(a,b,c,d){var s
if(B.n===c){s=J.ac(a)
b=J.ac(b)
return A.kM(A.bv(A.bv($.kt(),s),b))}if(B.n===d){s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
return A.kM(A.bv(A.bv(A.bv($.kt(),s),b),c))}s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
d=J.ac(d)
d=A.kM(A.bv(A.bv(A.bv(A.bv($.kt(),s),b),c),d))
return d},
eE(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
a8=a6.length
s=a7+5
if(a8>=s){r=a7+4
if(!(r<a8))return A.b(a6,r)
if(!(a7<a8))return A.b(a6,a7)
q=a7+1
if(!(q<a8))return A.b(a6,q)
p=a7+2
if(!(p<a8))return A.b(a6,p)
o=a7+3
if(!(o<a8))return A.b(a6,o)
n=((a6.charCodeAt(r)^58)*3|a6.charCodeAt(a7)^100|a6.charCodeAt(q)^97|a6.charCodeAt(p)^116|a6.charCodeAt(o)^97)>>>0
if(n===0)return A.ma(a7>0||a8<a8?B.a.v(a6,a7,a8):a6,5,a5).ged()
else if(n===32)return A.ma(B.a.v(a6,s,a8),0,a5).ged()}m=A.aO(8,0,!1,t.p)
B.b.j(m,0,0)
r=a7-1
B.b.j(m,1,r)
B.b.j(m,2,r)
B.b.j(m,7,r)
B.b.j(m,3,a7)
B.b.j(m,4,a7)
B.b.j(m,5,a8)
B.b.j(m,6,a8)
if(A.n0(a6,a7,a8,0,m)>=14)B.b.j(m,7,a8)
l=m[1]
if(l>=a7)if(A.n0(a6,a7,l,20,m)===20)m[7]=l
k=m[2]+1
j=m[3]
i=m[4]
h=m[5]
g=m[6]
if(g<h)h=g
if(i<k)i=h
else if(i<=l)i=l+1
if(j<k)j=i
f=m[7]<a7
e=a5
if(f){f=!1
if(!(k>l+3)){r=j>a7
d=0
if(!(r&&j+1===i)){if(!B.a.a4(a6,"\\",i))if(k>a7)q=B.a.a4(a6,"\\",k-1)||B.a.a4(a6,"\\",k-2)
else q=!1
else q=!0
if(!q){if(!(h<a8&&h===i+2&&B.a.a4(a6,"..",i)))q=h>i+2&&B.a.a4(a6,"/..",h-3)
else q=!0
if(!q)if(l===a7+4){if(B.a.a4(a6,"file",a7)){if(k<=a7){if(!B.a.a4(a6,"/",i)){c="file:///"
n=3}else{c="file://"
n=2}a6=c+B.a.v(a6,i,a8)
l-=a7
s=n-a7
h+=s
g+=s
a8=a6.length
a7=d
k=7
j=7
i=7}else if(i===h){s=a7===0
s
if(s){a6=B.a.aU(a6,i,h,"/");++h;++g;++a8}else{a6=B.a.v(a6,a7,i)+"/"+B.a.v(a6,h,a8)
l-=a7
k-=a7
j-=a7
i-=a7
s=1-a7
h+=s
g+=s
a8=a6.length
a7=d}}e="file"}else if(B.a.a4(a6,"http",a7)){if(r&&j+3===i&&B.a.a4(a6,"80",j+1)){s=a7===0
s
if(s){a6=B.a.aU(a6,j,i,"")
i-=3
h-=3
g-=3
a8-=3}else{a6=B.a.v(a6,a7,j)+B.a.v(a6,i,a8)
l-=a7
k-=a7
j-=a7
s=3+a7
i-=s
h-=s
g-=s
a8=a6.length
a7=d}}e="http"}}else if(l===s&&B.a.a4(a6,"https",a7)){if(r&&j+4===i&&B.a.a4(a6,"443",j+1)){s=a7===0
s
if(s){a6=B.a.aU(a6,j,i,"")
i-=4
h-=4
g-=4
a8-=3}else{a6=B.a.v(a6,a7,j)+B.a.v(a6,i,a8)
l-=a7
k-=a7
j-=a7
s=4+a7
i-=s
h-=s
g-=s
a8=a6.length
a7=d}}e="https"}f=!q}}}}if(f){if(a7>0||a8<a6.length){a6=B.a.v(a6,a7,a8)
l-=a7
k-=a7
j-=a7
i-=a7
h-=a7
g-=a7}return new A.aQ(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.kW(a6,a7,l)
else{if(l===a7)A.cD(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.mC(a6,a,k-1):""
a1=A.mz(a6,k,j,!1)
s=j+1
if(s<i){a2=A.aU(B.a.v(a6,s,i),a5)
b=A.hF(a2==null?A.F(A.B("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.mA(a6,i,h,a5,e,a1!=null)
a4=h<g?A.mB(a6,h+1,g,a5):a5
return A.dJ(e,a0,a1,b,a3,a4,g<a8?A.my(a6,g+1,a8):a5)},
oL(a){var s,r,q=0,p=null
try{s=A.eE(a,q,p)
return s}catch(r){if(t.d.b(A.bC(r)))return null
else throw r}},
oK(a){A.e(a)
return A.al(a,0,a.length,B.e,!1)},
me(a){var s=t.N
return B.b.bX(A.c(a.split("&"),t.s),A.n(s,s),new A.ha(B.e),t.G)},
eD(a,b,c){throw A.a(A.B("Illegal IPv4 address, "+a,b,c))},
oH(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.eD("each part must be in the range 0..255",a,r)}A.eD("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.eD(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.W(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.eD(j,a,q)
p=l}A.eD("IPv4 address should contain exactly 4 parts",a,q)},
oI(a,b,c){var s
if(b===c)throw A.a(A.B("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.oJ(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.md(a,b,c)
return!0},
oJ(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.i(n,a,q)
r=q
break}return new A.i("Unexpected character",a,q-1)}if(r-1===b)return new A.i(n,a,r)
return new A.i("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.i("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.b(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.i("Invalid IPvFuture address character",a,r)}},
md(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.h9(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.b(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.b(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.b(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.oH(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.b3(l,8)
if(!(o<16))return A.b(s,o)
s[o]=e;++o
if(!(o<16))return A.b(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.ao.al(s,a0,16,s,a)
B.ao.bw(s,a,a0,0)}}return s},
dJ(a,b,c,d,e,f,g){return new A.dI(a,b,c,d,e,f,g)},
mv(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cD(a,b,c){throw A.a(A.B(c,a,b))},
pf(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.q(q,"/")){s=A.N("Illegal path character "+q)
throw A.a(s)}}},
ph(a){var s
if(a.length===0)return B.an
s=A.mG(a)
s.ec(A.nd())
return A.lO(s,t.N,t.a)},
hF(a,b){if(a!=null&&a===A.mv(b))return null
return a},
mz(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.cD(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.pg(a,q,r)
if(o<r){n=o+1
p=A.mF(a,B.a.a4(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.oI(a,q,o)
l=B.a.v(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.af(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.mF(a,B.a.a4(a,"25",n)?o+3:n,c,"%25")}else p=""
A.md(a,b,o)
return"["+B.a.v(a,b,o)+p+"]"}}return A.pl(a,b,c)},
pg(a,b,c){var s=B.a.af(a,"%",b)
return s>=b&&s<c?s:c},
mF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.Y(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kX(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.Y("")
l=h.a+=B.a.v(a,q,r)
if(m)n=B.a.v(a,r,r+3)
else if(n==="%")A.cD(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.Y("")
if(q<r){h.a+=B.a.v(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.v(a,q,r)
if(h==null){h=new A.Y("")
m=h}else m=h
m.a+=i
l=A.kV(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.v(a,b,c)
if(q<c){i=B.a.v(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
pl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kX(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.Y("")
k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.v(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.Y("")
if(q<r){p.a+=B.a.v(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cD(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.Y("")
l=p}else l=p
l.a+=k
j=A.kV(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.v(a,b,c)
if(q<c){k=B.a.v(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
kW(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.mx(a.charCodeAt(b)))A.cD(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.cD(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.v(a,b,c)
return A.pe(q?a.toLowerCase():a)},
pe(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mC(a,b,c){if(a==null)return""
return A.dK(a,b,c,16,!1,!1)},
mA(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dK(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.pk(s,e,f)},
pk(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.kY(a,!s||c)
return A.c0(a)},
mB(a,b,c,d){if(a!=null)return A.dK(a,b,c,256,!0,!1)
return null},
my(a,b,c){if(a==null)return null
return A.dK(a,b,c,256,!0,!1)},
kX(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.j3(r)
o=A.j3(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.A(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.v(a,b,b+3).toUpperCase()
return null},
kV(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.b(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.fz(a,6*p)&63|q
if(!(o<r))return A.b(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.b(k,l)
if(!(m<r))return A.b(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.b(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.dh(s,0,null)},
dK(a,b,c,d,e,f){var s=A.mE(a,b,c,d,e,f)
return s==null?B.a.v(a,b,c):s},
mE(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kX(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cD(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kV(n)}if(o==null){o=new A.Y("")
k=o}else k=o
k.a=(k.a+=B.a.v(a,p,q))+l
if(typeof m!=="number")return A.qX(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.v(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
mD(a){if(B.a.u(a,"."))return!0
return B.a.aq(a,"/.")!==-1},
c0(a){var s,r,q,p,o,n,m
if(!A.mD(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.b.t(s,"")}p=!0}else{p="."===n
if(!p)B.b.t(s,n)}}if(p)B.b.t(s,"")
return B.b.V(s,"/")},
kY(a,b){var s,r,q,p,o,n
if(!A.mD(a))return!b?A.mw(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gK(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.b.t(s,"..")
p=!0}else{p="."===n
if(!p)B.b.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.t(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.b.j(s,0,A.mw(s[0]))}return B.b.V(s,"/")},
mw(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.mx(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.v(a,0,s)+"%3A"+B.a.D(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
pm(a,b){if(a.h0("package")&&a.c==null)return A.n1(b,0,b.length)
return-1},
pi(){return A.c([],t.s)},
mG(a){var s,r,q,p,o,n=A.n(t.N,t.a),m=new A.hG(a,B.e,n)
for(s=a.length,r=0,q=0,p=-1;r<s;){o=a.charCodeAt(r)
if(o===61){if(p<0)p=r}else if(o===38){m.$3(q,p,r)
q=r+1
p=-1}++r}m.$3(q,p,r)
return n},
pj(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p>=0&&p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.a3("Invalid URL encoding"))}}return r},
al(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.e===d)return B.a.v(a,b,c)
else p=new A.aH(B.a.v(a,b,c))
else{p=A.c([],t.Z)
for(n=b;n<c;++n){if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.a3("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.a(A.a3("Truncated URI"))
B.b.t(p,A.pj(a,n+1))
n+=2}else if(e&&r===43)B.b.t(p,32)
else B.b.t(p,r)}}return d.cD(p)},
mx(a){var s=a|32
return 97<=s&&s<=122},
ma(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.Z)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.B(k,a,r))}}if(q<0&&r>b)throw A.a(A.B(k,a,r))
while(p!==44){B.b.t(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.b(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.b.t(j,o)
else{n=B.b.gK(j)
if(p!==44||r!==n+7||!B.a.a4(a,"base64",n+1))throw A.a(A.B("Expecting '='",a,r))
break}}B.b.t(j,r)
m=r+1
if((j.length&1)===1)a=B.v.e3(a,m,s)
else{l=A.mE(a,m,s,256,!0,!1)
if(l!=null)a=B.a.aU(a,m,s,l)}return new A.h8(a,j,c)},
n0(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.j(e,o>>>5,r)}return d},
mo(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.n1(a.a,a.e,a.f)
return-1},
qa(a,b){A.e(a)
return A.kH(t.a.a(b),t.N)},
n1(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
py(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.b(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
ht:function ht(){},
T:function T(){},
c8:function c8(a){this.a=a},
dj:function dj(){},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e6:function e6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dl:function dl(a){this.a=a},
eA:function eA(a){this.a=a},
cp:function cp(a){this.a=a},
e0:function e0(a){this.a=a},
ek:function ek(){},
df:function df(){},
eO:function eO(a){this.a=a},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
be:function be(){},
v:function v(){},
Y:function Y(a){this.a=a},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a},
dI:function dI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
eM:function eM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
e2:function e2(a){this.$ti=a},
ch:function ch(a){this.$ti=a},
cC:function cC(){},
bQ:function bQ(a){this.$ti=a},
ov(a){return 8},
ow(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dz:function dz(){},
m9(){throw A.a(A.N("Cannot modify an unmodifiable Map"))},
aP:function aP(){},
mY(a){return a},
n6(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.Y("")
o=a+"("
p.a=o
n=A.u(b)
m=n.i("bN<1>")
l=new A.bN(b,0,s,m)
l.ev(b,0,s,n.c)
m=o+new A.I(l,m.i("d(y.E)").a(new A.ie()),m.i("I<y.E,d>")).V(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.a3(p.n(0)))}},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
ie:function ie(){},
cg:function cg(){},
el(a,b){var s,r,q,p,o,n,m=b.eg(a)
b.aZ(a)
if(m!=null)a=B.a.D(a,m.length)
s=t.s
r=A.c([],s)
q=A.c([],s)
s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
p=b.aS(a.charCodeAt(0))}else p=!1
if(p){if(0>=s)return A.b(a,0)
B.b.t(q,a[0])
o=1}else{B.b.t(q,"")
o=0}for(n=o;n<s;++n)if(b.aS(a.charCodeAt(n))){B.b.t(r,B.a.v(a,o,n))
B.b.t(q,a[n])
o=n+1}if(o<s){B.b.t(r,B.a.D(a,o))
B.b.t(q,"")}return new A.fU(b,m,r,q)},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
m1(a){return new A.em(a)},
em:function em(a){this.a=a},
oG(){var s,r,q,p,o,n,m,l,k=null
if(A.kP().gak()!=="file")return $.dT()
if(!B.a.aG(A.kP().gar(),"/"))return $.dT()
s=A.mC(k,0,0)
r=A.mz(k,0,0,!1)
q=A.mB(k,0,0,k)
p=A.my(k,0,0)
o=A.hF(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.mA("a/b",0,3,k,"",m)
if(n&&!B.a.u(l,"/"))l=A.kY(l,m)
else l=A.c0(l)
if(A.dJ("",s,n&&B.a.u(l,"//")?"":r,o,l,q,p).cV()==="a\\b")return $.fd()
return $.nG()},
h5:function h5(){},
eo:function eo(a,b,c){this.d=a
this.e=b
this.f=c},
eF:function eF(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
eH:function eH(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
oC(a,b){var s=A.c([0],t.Z)
s=new A.h3(b,s,new Uint32Array(a.length))
s.eu(new A.aH(a),b)
return s},
X(a,b){if(b<0)A.F(A.a8("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.F(A.a8("Offset "+b+u.s+a.gl(0)+"."))
return new A.ce(a,b)},
a0(a,b,c){if(c<b)A.F(A.a3("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)A.F(A.a8("End "+c+u.s+a.gl(0)+"."))
else if(b<0)A.F(A.a8("Start may not be negative, was "+b+"."))
return new A.bl(a,b,c)},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ce:function ce(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
oh(a,b){var s=A.oi(A.c([A.oS(a,!0)],t.v)),r=new A.fD(b).$0(),q=B.d.n(B.b.gK(s).b+1),p=A.oj(s)?0:3,o=A.u(s)
return new A.fj(s,r,null,1+Math.max(q.length,p),new A.I(s,o.i("h(1)").a(new A.fl()),o.i("I<1,h>")).h8(0,B.aH),!A.r6(new A.I(s,o.i("v?(1)").a(new A.fm()),o.i("I<1,v?>"))),new A.Y(""))},
oj(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.r(r.c,q.c))return!1}return!0},
oi(a){var s,r,q=A.qW(a,new A.fo(),t.C,t.K)
for(s=A.j(q),r=new A.aD(q,q.r,q.e,s.i("aD<2>"));r.k();)J.o6(r.d,new A.fp())
s=s.i("R<1,2>")
r=s.i("aB<f.E,aF>")
s=A.o(new A.aB(new A.R(q,s),s.i("f<aF>(f.E)").a(new A.fq()),r),r.i("f.E"))
return s},
oS(a,b){var s=new A.hu(a).$0()
return new A.af(s,!0,null)},
oU(a){var s,r,q,p,o,n,m=a.gai()
if(!B.a.q(m,"\r\n"))return a
s=a.gH().gL()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gC()
p=a.gX()
o=a.gH().ga7()
p=A.bM(s,a.gH().gab(),o,p)
o=A.J(m,"\r\n","\n")
n=a.gaz()
return A.h4(r,p,o,A.J(n,"\r\n","\n"))},
oV(a){var s,r,q,p,o,n,m
if(!B.a.aG(a.gaz(),"\n"))return a
if(B.a.aG(a.gai(),"\n\n"))return a
s=B.a.v(a.gaz(),0,a.gaz().length-1)
r=a.gai()
q=a.gC()
p=a.gH()
if(B.a.aG(a.gai(),"\n")){o=A.iW(a.gaz(),a.gai(),a.gC().gab())
o.toString
o=o+a.gC().gab()+a.gl(a)===a.gaz().length}else o=!1
if(o){r=B.a.v(a.gai(),0,a.gai().length-1)
if(r.length===0)p=q
else{o=a.gH().gL()
n=a.gX()
m=a.gH().ga7()
p=A.bM(o-1,A.mi(s),m-1,n)
q=a.gC().gL()===a.gH().gL()?p:a.gC()}}return A.h4(q,p,r,s)},
oT(a){var s,r,q,p,o
if(a.gH().gab()!==0)return a
if(a.gH().ga7()===a.gC().ga7())return a
s=B.a.v(a.gai(),0,a.gai().length-1)
r=a.gC()
q=a.gH().gL()
p=a.gX()
o=a.gH().ga7()
p=A.bM(q-1,s.length-B.a.bd(s,"\n")-1,o-1,p)
return A.h4(r,p,s,B.a.aG(a.gaz(),"\n")?B.a.v(a.gaz(),0,a.gaz().length-1):a.gaz())},
mi(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.a.ae(a,"\n",r-2)-1
else return r-B.a.bd(a,"\n")-1}},
fj:function fj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fD:function fD(a){this.a=a},
fl:function fl(){},
fk:function fk(){},
fm:function fm(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fn:function fn(a){this.a=a},
fE:function fE(){},
fr:function fr(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fB:function fB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM(a,b,c,d){var s=c==null,r=s?0:c,q=b==null,p=q?a:b
if(a<0)A.F(A.a8("Offset may not be negative, was "+a+"."))
else if(!s&&c<0)A.F(A.a8("Line may not be negative, was "+A.m(c)+"."))
else if(!q&&b<0)A.F(A.a8("Column may not be negative, was "+A.m(b)+"."))
return new A.bL(d,a,r,p)},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(){},
kK(a,b,c){var s=new A.de(a,b,c)
s.cY(a,b,c)
return s},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(){},
ev:function ev(){},
co:function co(){},
h4(a,b,c,d){var s=new A.bh(d,a,b,c)
s.cY(a,b,c)
if(!B.a.q(d,c))A.F(A.a3('The context line "'+d+'" must contain "'+c+'".'))
if(A.iW(d,c,a.gab())==null)A.F(A.a3('The span text "'+c+'" must start at column '+(a.gab()+1)+' in a line within "'+d+'".'))
return s},
bh:function bh(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e3:function e3(a,b,c){var _=this
_.at=_.as=0
_.f=a
_.a=b
_.b=c
_.c=0
_.e=_.d=null},
ap:function ap(a){this.b=a},
oD(a,b,c){return new A.dg(c,a,b)},
dg:function dg(a,b,c){this.c=a
this.a=b
this.b=c},
ew:function ew(){},
ey:function ey(){},
qD(a,b){return new A.hs([],[]).cF(a,b)},
qE(a){return new A.iI(new A.cu(t.cR)).$1(a)},
hs:function hs(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
lR(a,b,c,d){return new A.cR(a,d,c==null?A.c([],t.l):c,b)},
ab:function ab(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
dL:function dL(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b){this.a=a
this.b=b},
m_(a,b,c,d){var s=A.c([],t.aq),r=t.N,q=A.aO(A.ov(null),null,!1,t.fs),p=A.c([B.cJ],t.a2),o=A.c([null],t.g0),n=A.oC(a,d),m=new A.fV(new A.h_(!1,b,new A.e3(n,null,a),new A.d8(q,0,0,t.co),p,o),s,B.aD,A.n(r,t.h7))
return new A.fQ(m,A.n(r,t.T),A.aN(r),m.aT().gA())},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
a1:function a1(a){this.a=a},
h_:function h_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=!1
_.f=d
_.r=0
_.w=!1
_.x=e
_.y=!0
_.z=f},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ds:function ds(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a},
cM:function cM(a){this.a=a},
U:function U(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b){this.a=a
this.b=b},
ks:function ks(){},
dq:function dq(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
H(a,b){return new A.bR(null,a,b)},
bR:function bR(a,b,c){this.c=a
this.a=b
this.b=c},
P:function P(){},
bT:function bT(a,b,c){this.b=a
this.c=b
this.a=c},
hn:function hn(){},
bS:function bS(a,b,c){this.b=a
this.c=b
this.a=c},
ao:function ao(a,b,c){this.b=a
this.c=b
this.a=c},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
S(a){var s=new A.he(A.c([],t.c0),a,A.f8(a,null,!1,null).a,A.aN(t.T))
s.dc()
return s},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hk:function hk(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hi:function hi(a){this.a=a},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ng(a,b){return A.fN(A.qO(),A.iV(),a,b)},
bm(a,b){var s=t.T
if(s.b(a))a=a.ga5()
if(s.b(b))b=b.ga5()
s=t.f
if(s.b(a)&&s.b(b))return A.rf(a,b)
s=t.j
if(s.b(a)&&s.b(b))return A.ra(a,b)
return J.r(a,b)},
ra(a,b){var s,r,q
if(J.a6(a)!==J.a6(b))return!1
s=t.h
if(s.b(a))a=a.gM()
if(s.b(b))b=b.gM()
for(s=J.E(a),r=J.E(b),q=0;q<s.gl(a);++q)if(!A.bm(s.h(a,q),r.h(b,q)))return!1
return!0},
rf(a,b){var s={}
s.a=a
s.b=b
if(a.gl(a)!==b.gl(b))return!1
return a.gF().aR(0,new A.jd(s))},
qF(a){var s
if(t.f.b(a)){s=t.z
return B.a7.b5(a.gF().ac(0,A.iV(),s))^B.a7.b5(a.gag().ac(0,A.iV(),s))}else if(t.R.b(a))return B.aI.b5(J.aT(a,A.iV(),t.z))
else if(t.m.b(a))return J.ac(a.ga5())
return J.ac(a)},
nk(a,b){return t.T.a(a.gM().gF().bW(0,new A.iX(b)))},
nn(a,b){var s,r,q,p,o,n,m,l
for(s=A.ok(a.gM().gO(),0,t.x),r=s.a,r=r.gp(r),q=s.b,s=new A.bG(r,q,A.j(s).i("bG<1>"));s.k();){p=s.c
p=p>=0?new A.b4(q+p,r.gm()):A.F(A.a4())
o=p.a
n=p.b
m=n.a
l=n.b
if(A.bm(m,b))return new A.dB(o,t.T.a(m),l)}throw A.a(A.H(A.m(b)+" not found in map",a.gA()))},
qU(a,b){return a.gF().bW(0,new A.iY(b))},
lb(a,b){var s=a.gF().aK(0,new A.iH(b))
return!s.gJ(s)},
jd:function jd(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iH:function iH(a){this.a=a},
fY(a,b,c){return new A.d7(a,b,c,!0,b,"path",null)},
fe(a,b){return new A.dW("Encountered an alias node along "+A.m(a)+'! Alias nodes are nodes that refer to a previously serialized nodes, and are denoted by either the "*" or the "&" indicators in the original YAML. As the resulting behavior of mutations on these nodes is not well-defined, the operation will not be supported by this library.\n\n'+b.gA().e1("The alias was first defined here."),null,null)},
ne(a,b,c){var s=A.J(b,"\n","\n> ")
return new A.eW("(package:yaml_edit) "+a+"\n\n# YAML before edit:\n> "+s+"\n\n# YAML after edit:\n> "+A.J(c,"\n","\n> ")+"\n\nPlease file an issue at:\nhttps://github.com/dart-lang/yaml_edit/issues/new?labels=bug\n")},
d7:function d7(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.b=e
_.c=f
_.d=g},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
rW(a,b,c,d){var s,r,q,p,o,n,m,l
A.cm(c,0,b.gl(b)-1,null)
s=J.l(b.gM(),c)
r=s.gA().gC().gL()
q=a.b
if(b.ga2()===B.m){p=A.le(q,b)+A.ld(a)
o=A.dO(q)
n=A.dS(A.ar(d,B.j,B.h),p,o)
if(!(t.j.b(d)&&d.gl(d)!==0))m=t.f.b(d)&&d.gF().gaI(0)
else m=!0
if(m)n=B.a.D(n,p)
else if(A.ho(s)===B.m)n+=o
l=A.c3(s)
if(l<=r){++r
n=" "+n
l=r}return A.aw(r,l-r,n)}else{n=A.bn(d)
m=s.gA()
return A.aw(r,m.gl(m),n)}},
ry(a,b,c){var s,r,q,p,o,n=J.l(b.gM(),c)
if(b.ga2()===B.f){A.cm(c,0,b.gl(b)-1,null)
s=n.gA()
r=a.b
q=s.gC().gL()
p=s.gH().gL()
o=q-1
if(c===0){q=B.a.ae(r,"[",o)+1
p=c===b.gl(b)-1?B.a.af(r,"]",p):B.a.af(r,",",p)+1}else q=B.a.ae(r,",",o)
return A.aw(q,p-q,"")}else return A.q2(a,b,n,c)},
q2(a,b,c,d){var s,r,q,p,o,n,m,l=b.gl(b),k=l-1
A.cm(d,0,k,null)
s=a.b
r=c.gA()
q=r.gl(r)===0
p=A.c3(c)
o=A.le(s,b)
n=B.a.ae(s,"-",q?r.gC().gL():r.gC().gL()-1)
m=q?p+1:p
return A.nx(s,b,o,d===0,d>=k,l===1,A.dO(s),new A.i6(b,d,s),new A.cy(m,n))},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
rX(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(!A.lb(b,c)){s=A.ar(c,B.j,B.h)
if(b.ga2()===B.f)return A.pq(a,b,s,a0)
else{r=a.b
q=A.f7(r,b)
p=A.ld(a)
o=A.bn(A.ar(s,B.j,B.h))
n=A.dO(r)
m=B.a.aj(" ",A.f7(r,b))
l=b.gA().gH().gL()
k=A.nl(b,o)
if(b.gF().gaI(0)){j=b.gF()
if(k===j.gl(j)){j=b.gM().gag()
i=B.a.af(r,"\n",A.c3(j.gK(j)))
if(i!==-1)l=i+1
else m=n+m}else{j=b.gM().gF().aV(0)
if(!(k>=0&&k<j.length))return A.b(j,k)
l=B.a.ae(r,"\n",t.T.a(j[k]).gA().gC().gL())+1}}h=A.dS(a0,q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.ho(a0)
q=q!==B.f&&!A.lk(a0)}else q=!1
return A.aw(l,0,q?m+(o+":"+n+h+n):m+(o+": "+h+n))}}else if(b.ga2()===B.f){g=b.gM().h(0,c).gA()
h=A.bn(a0)
return A.aw(g.gC().gL(),g.gl(g),h)}else{r=a.b
n=A.dO(r)
q=A.f7(r,b)
p=A.ld(a)
s=A.nk(b,c)
f=A.dS(A.ar(a0,B.j,B.h),q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.ho(a0)
q=q!==B.f&&!A.lk(a0)}else q=!1
if(q)f=n+f
if(!B.a.u(f,n))f=" "+f
e=s.gA().gH().gL()+1
q=b.gM().h(0,c)
q.toString
d=A.c3(q)
return A.aw(e,(d<e?e:d)-e,f)}},
rz(a,b,c){var s,r,q,p,o,n,m
if(b.ga2()===B.f){s=A.nn(b,c)
r=s.b
q=r.gA().gC().gL()
p=s.c.gA().gH().gL()
o=a.b
n=b.gF()
m=q-1
if(A.bm(r,n.gS(n))){q=B.a.ae(o,"{",m)+1
n=b.gF()
p=A.bm(r,n.gK(n))?B.a.af(o,"}",p):B.a.af(o,",",p)+1}else q=B.a.ae(o,",",m)
return A.aw(q,p-q,"")}else return A.q3(a,b,c)},
pq(a,b,c,d){var s,r=A.bn(c),q=A.bn(d),p=b.gF()
if(p.gJ(p))return A.aw(b.gA().gH().gL()-1,0,r+": "+q)
s=A.nl(b,r)
p=b.gF()
if(s===p.gl(p))return A.aw(b.gA().gH().gL()-1,0,", "+r+": "+q)
p=b.gM().gF().aV(0)
if(!(s>=0&&s<p.length))return A.b(p,s)
return A.aw(t.T.a(p[s]).gA().gC().gL(),0,r+": "+q+", ")},
q3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=A.nn(b,c)
r=i.a=s.a
q=s.c
p=a.b
o=b.gF()
n=o.gl(o)
m=s.b.gA()
o=A.f7(p,b)
l=r===0
k=l?b.gA().gC().gL():m.gC().gL()
j=q.gA()
j=j.gl(j)===0?m.gH().gL()+2:A.c3(q)
return A.nx(p,b,o,l,r>=n-1,n===1,A.dO(p),new A.i7(i,b,p),new A.cy(j,k))},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
aw(a,b,c){A.ae(a,null)
A.ae(b,null)
return new A.dd(a,b,c)},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
l_(a){var s,r=new A.aH(a)
for(s=$.lE(),s=new A.aj(s,s.r,s.e,A.j(s).i("aj<1>"));s.k();)if(r.q(r,s.d))return!0
return!1},
c2(a){var s,r,q,p,o=new A.Y("")
for(s=new A.aH(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E");s.k();){q=s.d
if(q==null)q=r.a(q)
p=$.nX()
if(p.h(0,q)!=null){q=A.m(p.h(0,q))
o.a+=q}else{q=A.A(q)
o.a+=q}}return'"'+o.n(0)+'"'},
n5(a){if(A.l_(a)||B.a.q(a,"\n"))return null
return"'"+A.J(a,"'","''")+"'"},
qc(a,b,c){var s,r,q,p,o=a.length
if(o===0||B.a.N(a).length!==o)return null
if(A.l_(a))return null
s=B.a.aj(" ",b)
r=B.a.he(a)
q=B.a.D(a,r.length)
o=c+s
p=A.c(A.J(r,"\n",o).split(c),t.s)
r=A.om(p,new A.id(p,s,c),t.N)
return">-\n"+s+r+A.J(q,"\n",o)},
qd(a,b,c){var s,r=a.length
if(r===0||B.a.N(a).length!==r)return null
if(A.l_(a))return null
s=B.a.aj(" ",b)
return"|-\n"+s+A.J(a,"\n",c+s)},
qi(a){var s,r=a.ga5(),q=a.ga2()
if(typeof r!="string")return J.am(r)
switch(q){case B.M:return A.c2(r)
case B.B:s=A.n5(r)
return s==null?A.c2(r):s
default:s=A.lj(r)?null:r
return s==null?A.c2(r):s}},
qh(a,b,c){var s,r=a.ga5(),q=a.ga2()
A.l6(r)
if(typeof r!="string")return J.am(r)
switch(q){case B.i:s=A.lj(r)?null:r
return s==null?A.c2(r):s
case B.B:s=A.n5(r)
return s==null?A.c2(r):s
case B.N:s=A.qc(r,b,c)
return s==null?A.c2(r):s
case B.O:s=A.qd(r,b,c)
return s==null?A.c2(r):s
default:s=A.lj(r)?null:r
return s==null?A.c2(r):s}},
bn(a){t.T.a(a)
if(t.h.b(a))return"["+J.aT(a.gM(),A.rO(),t.N).V(0,", ")+"]"
else if(t.S.b(a))return"{"+a.gM().gO().ac(0,new A.kr(),t.N).V(0,", ")+"}"
return A.qi(t.m.a(a))},
dS(a,b,c){var s,r
if(!A.r7(a))return A.bn(a)
s=b+2
if(t.h.b(a)){if(a.gl(a)===0)return B.a.aj(" ",b)+"[]"
return J.aT(a.gM(),new A.kp(s,c,b),t.N).V(0,c)}else if(t.S.b(a)){r=a.gF()
if(r.gJ(r))return B.a.aj(" ",b)+"{}"
return a.gM().gO().ac(0,new A.kq(b,s,c),t.N).V(0,c)}return A.qh(t.m.a(a),s,c)},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(){},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
nC(a,b){var s,r=A.rY(),q=$.ku()
try{$.nE=r
s=a.$0()
return s}finally{$.nE=q}},
mU(a,b){},
lj(a){var s,r,q
try{s=A.nC(new A.ja(a),t.T)
if(!J.r(s.ga5(),a))return!0
r=B.a.q(a,A.G("\\{|\\[|\\]|\\}|,",!0))
return r}catch(q){return!0}},
l6(a){if(typeof a=="number"||typeof a=="string"||A.f3(a)||a==null)return
throw A.a(A.lH(a,"value","Not a valid scalar type!"))},
r7(a){var s
if(t.m.b(a))if(a.ga2()===B.O||a.ga2()===B.N||a.ga2()===B.h)return!0
if(t.h.b(a))s=a.ga2()===B.m||a.ga2()===B.j
else s=!1
if(s)return!0
if(t.S.b(a))s=a.ga2()===B.m||a.ga2()===B.j
else s=!1
if(s)return!0
return!1},
c3(a){var s
if(t.h.b(a))if(a.ga2()===B.f)return a.gA().gH().gL()
else return A.c3(J.kx(a.gM()))
else if(t.S.b(a))if(a.ga2()===B.f)return a.gA().gH().gL()
else{s=a.gM().gag()
return A.c3(s.gK(s))}return a.gA().gH().gL()},
r9(a,b){return A.b5(a)&&a>=0&&a<b},
lk(a){var s
if(t.f.b(a)){s=a.gF()
return s.gJ(s)}if(t.j.b(a))return a.gl(a)===0
return!1},
nl(a,b){var s,r,q,p,o,n=a.gM().gF().ac(0,new A.iZ(),t.N).aV(0)
for(s=n.length,r=1;r<s;++r){q=n[r]
p=n[r-1]
if(q===p)q=0
else q=q<p?-1:1
if(q<0){s=a.gF()
return s.gl(s)}}o=B.b.b6(n,new A.j_(b))
if(o!==-1)return o
s=a.gF()
return s.gl(s)},
ld(a){var s,r,q,p,o,n,m=a.cw([],null),l=t.S
if(l.b(m)&&m.ga2()===B.m)s=m.gM().gag()
else s=t.h.b(m)&&m.ga2()===B.m?m.gM():null
r=2
if(s!=null)for(q=J.D(s),p=t.h;q.k();){o=q.gm()
if(p.b(o))n=A.le(a.b,o)
else n=l.b(o)?A.f7(a.b,o):0
if(n!==0)r=n}return r},
le(a,b){var s
if(b.ga2()===B.f)return 0
if(b.gl(b)===0)throw A.a(A.N("Unable to get indentation for empty block list"))
s=B.a.ae(a,"-",J.kx(b.gM()).gA().gC().gL()-1)
if(s===0)return s
return s-B.a.ae(a,"\n",s-1)-1},
f7(a,b){var s,r,q,p
if(b.ga2()===B.f)return 0
s=b.gF()
if(s.gJ(s))throw A.a(A.N("Unable to get indentation for empty block map"))
s=b.gM().gF()
r=t.T.a(s.gK(s)).gA().gC().gL()
q=B.a.ae(a,"\n",r)
p=B.a.ae(a,"?",r)
if(p===-1){if(q===-1)return r
return r-q-1}if(q===-1)return p
if(p>q)return p-q-1
return r-q-1},
dO(a){var s,r,q,p,o
for(s=a.length,r=-1,q=0,p=0;r=B.a.af(a,"\n",r+1),r!==-1;){if(r!==0){o=r-1
if(!(o>=0&&o<s))return A.b(a,o)
o=a[o]==="\r"}else o=!1
if(o)++p
else ++q}return p>q?"\r\n":"\n"},
r0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
if(g===0||c===-1)return g
s=g-1
r=Math.min(c,s)
if(r>>>0!==r||r>=g)return A.b(a,r)
q=a[r]
if(q!=="\r"&&q!=="\n")return r
A:for(p=r;r<=s;){if(!(r>=0))return A.b(a,r)
switch(a[r]){case"\r":o=1
break
case"\n":o=2
break
case"\t":o=3
break
case"#":o=4
break
default:o=5
break}B:for(;;){n=2
switch(o){case 1:if(r<s){q=r+1
if(!(q>=0))return A.b(a,q)
q=a[q]==="\n"}else q=!1
if(q)++r
o=n
continue B
case 2:m=r+1
if(m>=s){p=s
break A}l=B.a.af(a,A.G("[^ ]",!0),m)
if(l===-1){p=s
break A}if(!(l>=0&&l<g))return A.b(a,l)
k=a[l]
if("\r"===k||"\n"===k){p=r
r=l
continue A}else if(l-m>b)if(k==="\t"){p=r
r=l
o=3
continue B}else if(k==="#"){p=r
r=l
o=4
continue B}p=r
break A
case 3:j=B.a.af(a,$.lC(),r)
if(j===-1)p=s
else{if(!(j>=0&&j<g))return A.b(a,j)
i=a[j]
if("\r"===i||"\n"===i){r=j
continue A}}break A
case 4:h=B.a.af(a,"\n",r)
if(h===-1){p=s
break A}o=n
r=h
continue B
case 5:break A}}}return p},
r_(a,b){var s,r,q=Math.max(0,B.a.ae(a,$.lC(),Math.max(0,b-1)))
if(q>>>0!==q||q>=a.length)return A.b(a,q)
s=a[q]
A:{if("\r"===s||"\n"===s){r=new A.bZ(-1,q)
break A}if("-"===s||"?"===s||":"===s){r=new A.bZ(q,-1)
break A}r=B.cI
break A}return r},
nx(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=i.b,l=a.length,k=Math.min(A.r0(a,c,B.a.af(a,"\n",i.a-1))+1,l)
if(f){if(k<l||B.a.aG(a,"\n"))k-=g==="\r\n"?2:1
l=t.h.b(b)?"[]":"{}"
return A.aw(m,k-m,l)}else if(e){m=B.a.ae(a,"\n",m)+1
return A.aw(m,Math.max(B.a.ae(a,"\n",b.gA().gH().gL())+1,k)-m,"")}s=!1
if(m!==0)if(d){r=A.r_(a,m)
q=r.a
s=q!==-1
m=s?q+2:r.b+1}else m=B.a.ae(a,"\n",m)+1
p=h.$0()
o=p.a
n=p.b
return A.aw(m,(s&&o===k-1?k+n:k)-m,"")},
ho(a){if(t.S.b(a))return a.ga2()
if(t.h.b(a))return a.ga2()
return null},
ja:function ja(a){this.a=a},
iZ:function iZ(){},
j_:function j_(a){this.a=a},
lw(a,b){var s=t.z,r=A.ng(s,s)
r.a9(0,a.gM())
b.$1(r)
return t.S.a(A.ar(r,B.j,B.h))},
ar(a,b,c){var s,r,q
if(t.m.b(a)){A.l6(a.ga5())
return a}else if(t.h.b(a)){for(s=J.D(a.gM());s.k();)A.ar(s.gm(),B.j,B.h)
return a}else if(t.S.b(a)){for(s=a.gM().gO(),s=s.gp(s);s.k();){r=s.gm()
A.ar(r.a,B.j,B.h)
A.ar(r.b,B.j,B.h)}return a}else if(t.f.b(a))return A.oN(a,b,c)
else if(t.j.b(a))return A.oM(a,b,c)
else{A.l6(a)
q=A.bM(0,null,null,null)
return new A.eK(c,A.kK(q,q,""),a)}},
oN(a,b,c){var s,r,q,p=A.ng(t.z,t.T)
for(s=a.gO(),s=s.gp(s);s.k();){r=s.gm()
p.j(0,A.ar(r.a,b,c),A.ar(r.b,b,c))}q=A.bM(0,null,null,null)
s=A.kK(q,q,"")
return new A.eJ(p.a===0?B.f:b,p,s)},
oM(a,b,c){var s,r,q=J.aT(a,new A.hl(b,c),t.T)
q=A.o(q,q.$ti.i("y.E"))
s=A.bM(0,null,null,null)
r=A.kK(s,s,"")
return new A.eI(q.length===0?B.f:b,q,r)},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b){this.a=a
this.b=b},
eX:function eX(){},
eZ:function eZ(){},
f_:function f_(){},
qr(a){var s,r,q,p,o,n,m,l,k=A.C(a),j=A.aN(t.N)
if(t.S.b(k))for(s=k.gF(),s=s.gp(s);s.k();){r=s.gm()
if(B.K.aY(r))j.t(0,A.e(r))}j.a9(0,B.K.gag())
s=t.s
q=A.c([],s)
for(j=A.kR(j,j.r,j.$ti.c),p=j.$ti.c;j.k();){o=j.d
if(o==null)o=p.a(o)
for(n=B.K.gO(),n=n.gp(n);n.k();){m=n.gm()
if(m.b===o){l=A.c([],s)
m=m.a
if(m==="rules")l.push("ruleProviders")
l.push(m)
B.b.a9(q,l)}}}return q},
iF(a){var s=t.S.a(A.C(a)),r=A.o(B.cD,t.N),q=t.g,p=q.a(s.h(0,"proxy-groups"))
p=J.D(p==null?[]:p)
while(p.k())r.push(A.e(J.l(p.gm(),"name")))
q=q.a(s.h(0,"proxies"))
q=J.D(q==null?[]:q)
while(q.k())r.push(A.e(J.l(q.gm(),"name")))
return r},
la(a){var s=t.g.a(t.S.a(A.C(a)).h(0,"rules"))
if(s==null)s=[]
return A.O(s,!0,t.N)},
l1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gp(r);r.k();){q=r.gm()
s.j(0,A.e(q.a),A.l1(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.l1(r.gm()))
return s}return a},
f6(a){var s,r=A.c([],t.t),q=t.g.a(t.S.a(A.C(a)).h(0,"proxy-groups"))
q=J.D(q==null?[]:q)
s=t.P
while(q.k())r.push(s.a(A.l1(q.gm())))
return r},
rB(a,b){var s,r,q,p,o,n,m=A.f6(a),l=A.n(t.N,t.P)
for(s=m.length,r=0;q=m.length,r<q;m.length===s||(0,A.a_)(m),++r){p=m[r]
l.j(0,A.e(p.h(0,"name")),p)}if(b.length!==q||A.av(b,A.u(b).c).a!==b.length||B.b.R(b,new A.k_(l)))throw A.a(B.cs)
s=A.S(a)
q=A.c([],t.t)
for(o=b.length,r=0;r<b.length;b.length===o||(0,A.a_)(b),++r){n=l.h(0,b[r])
n.toString
q.push(n)}s.G(["proxy-groups"],q)
return s.b},
nz(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.q(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
lq(a,b,c){var s,r,q=A.c(a.split(","),t.s)
if(B.a.N(B.b.gS(q))==="SUB-RULE")return a
s=A.nz(q)
if(s>0){if(!(s<q.length))return A.b(q,s)
r=B.a.N(q[s])===b}else r=!1
if(r)B.b.j(q,s,c)
return B.b.V(q,",")},
rV(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=t.s,q=0;q<b.length;b.length===s||(0,A.a_)(b),++q){p=A.c(b[q].split(","),r)
if(p.length<2||B.b.R(p,new A.kh()))throw A.a(B.b9)
if(B.b.gS(p)!=="SUB-RULE"){o=A.iF(a)
n=A.nz(p)
if(!(n>=0&&n<p.length))return A.b(p,n)
n=!B.b.q(o,B.a.N(p[n]))
o=n}else o=!1
if(o)throw A.a(B.bE)}m=A.S(a)
m.G(["rules"],b)
return m.b},
qg(a){var s,r,q,p,o,n,m,l,k,j="dialer-proxy",i=t.S.a(A.C(a)),h=t.N,g=A.n(h,t.a)
for(s=A.f6(a),r=s.length,q=t.g,p=0;p<s.length;s.length===r||(0,A.a_)(s),++p){o=s[p]
n=A.e(o.h(0,"name"))
m=q.a(o.h(0,"proxies"))
g.j(0,n,A.O(m==null?[]:m,!0,h))}s=q.a(i.h(0,"proxies"))
s=J.D(s==null?[]:s)
r=t.s
while(s.k()){l=s.gm()
q=J.E(l)
if(typeof q.h(l,j)=="string")g.j(0,A.e(q.h(l,"name")),A.c([A.e(q.h(l,j))],r))}k=new A.ii(A.aN(h),A.aN(h),g)
for(h=new A.aj(g,g.r,g.e,g.$ti.i("aj<1>"));h.k();)k.$1(h.d)},
rT(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7=B.a.N(A.e(a9.h(0,"name")))
if((b2==="\ud83d\ude80 Domestic"||b2==="\ud83c\udf0d Foreign")&&a7!==b2)throw A.a(B.bh)
if(a7.length===0||B.a.q(a7,",")||B.a.q(a7,"\n"))throw A.a(B.b2)
if(A.b7(a8).E(b2))throw A.a(B.al)
s=A.iF(a8)
r=A.u(s)
if(new A.q(s,r.i("k(1)").a(new A.k8(b2)),r.i("q<1>")).q(0,a7)||a7==="GLOBAL")throw A.a(B.aX)
q=A.f6(a8)
p=B.b.b6(q,new A.k9(b2))
if(p>=0){if(!(p<q.length))return A.b(q,p)
s=t.g.a(q[p].h(0,a6))
if(s==null)s=[]
o=A.O(s,!0,t.N)}else o=A.c6(a8)
if(o.length===0)B.b.t(o,"DIRECT")
s=t.j
if(s.b(a9.h(0,a6))){n=A.O(s.a(a9.h(0,a6)),!0,t.N)
if(n.length!==o.length||new A.d2(n,A.u(n).i("d2<1>")).gO().R(0,new A.ka(o)))throw A.a(B.bV)}if(B.b.q(o,a7)||B.b.q(o,b2)||B.b.R(o,new A.kb(a8)))throw A.a(B.be)
r=b1!=null
if(r){B.b.au(o,new A.kc())
if(b1)B.b.ba(o,0,"DIRECT")
if(o.length===0&&b0==null)throw A.a(B.c6)}m=t.N
l=t.z
k=A.fP(a9,m,l)
k.j(0,"name",a7)
k.j(0,a6,o)
j=p<0
if(j)B.b.t(q,k)
else B.b.j(q,p,k)
i=A.S(a8)
k=b2!=null
if(k&&b2!==a7){for(h=q.length,g=t.R,f=0;f<q.length;q.length===h||(0,A.a_)(q),++f){e=q[f]
if(s.b(e.h(0,a6))){d=[]
for(c=J.D(g.a(e.h(0,a6)));c.k();){b=c.gm()
d.push(J.r(b,b2)?a7:b)}e.j(0,a6,d)}}h=t.s
g=A.c([],h)
for(d=A.la(a8),c=d.length,f=0;f<d.length;d.length===c||(0,A.a_)(d),++f)g.push(A.lq(d[f],b2,a7))
i.G(["rules"],g)
g=t.S
a=t.Y.a(g.a(A.C(a8)).h(0,"sub-rules"))
for(l=(a==null?A.n(l,l):a).gO(),l=l.gp(l);l.k();){d=l.gm()
c=d.a
a0=A.c([],h)
for(d=J.D(s.a(d.b));d.k();)a0.push(A.lq(A.e(d.gm()),b2,a7))
i.G(["sub-rules",c],a0)}a1=t.g.a(g.a(A.C(a8)).h(0,a6))
if(a1==null)a1=[]
for(s=J.E(a1),a2=0;a2<s.gl(a1);++a2)if(J.r(J.l(s.h(a1,a2),"dialer-proxy"),b2))i.G(["proxies",a2,"dialer-proxy"],a7)}i.G(["proxy-groups"],q)
a3=A.fc(a8)
if(k&&b2!==a7&&a3.E(b2)){s=a3.I(0,b2)
s.toString
a3.j(0,a7,s)}if(j)a3.j(0,a7,"")
a4=A.ly(i.b,a3)
a5=A.jw(a8)
if(k&&b2!==a7&&a5.E(b2)){s=a5.I(0,b2)
s.toString
a5.j(0,a7,s)}if(r)a5.j(0,a7,b1)
if(a5.a!==0)a4=A.nD(a4,a5)
if(b0!=null){s=A.fP(A.fc(a4),m,m)
s.j(0,a7,B.a.N(b0))
a4=A.nb(a4,s)}A.qg(a4)
return a4},
qG(a,b){var s,r,q,p,o,n,m,l,k,j
if(b==="\ud83d\ude80 Domestic"||b==="\ud83c\udf0d Foreign")throw A.a(B.bf)
if(A.b7(a).E(b))throw A.a(B.al)
s=t.S.a(A.C(a))
r=A.f6(a)
q=t.Y.a(s.h(0,"sub-rules"))
if(q==null){p=t.z
q=A.n(p,p)}o=!0
if(!B.b.R(r,new A.iJ(b))){p=t.g.a(s.h(0,"proxies"))
if(p==null)p=[]
if(!J.nZ(p,new A.iK(b))){p=t.N
n=A.o(A.la(a),p)
for(m=q.gag(),m=m.gp(m),l=t.j;m.k();)B.b.a9(n,A.O(l.a(m.gm()),!0,p))
p=B.b.R(n,new A.iL(b))
o=p}}if(o)throw A.a(B.bG)
k=A.S(a)
p=A.u(r)
n=p.i("q<1>")
p=A.o(new A.q(r,p.i("k(1)").a(new A.iM(b)),n),n.i("f.E"))
k.G(["proxy-groups"],p)
p=k.b
n=A.fc(a)
n.I(0,b)
j=A.ly(p,n)
if(B.a.q(a,"# Mclash group-direct: ")){p=A.jw(a)
p.I(0,b)
p=A.nD(j,p)}else p=j
return p},
k_:function k_(a){this.a=a},
kh:function kh(){},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(){},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
dQ(a,b){var s,r,q,p
if(b>64)throw A.a(B.b1)
if(t.f.b(a)){s=A.n(t.N,t.X)
for(r=a.gO(),r=r.gp(r),q=b+1;r.k();){p=r.gm()
s.j(0,A.m(p.a),A.dQ(p.b,q))}return s}if(t.j.b(a)){s=J.aT(a,new A.jt(b),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
rk(a){var s,r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jj()),t.U).V(0,"\n"),q=A.S("")
q.G([],A.dQ(A.C(a),0))
s=r.length===0?"":r+"\n"
return s+q.n(0)},
no(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="template",b0="external-controller",b1="name",b2="prefixes"
b4=b4
try{b4=A.ln(b4)
s=t.P.a(B.c.aa(A.ln(b5),a8))
if(typeof J.l(s,a9)=="string")J.dU(s,a9,A.ln(A.e(J.l(s,a9))))
r=null
switch(b3){case"formatNodes":r=b4
break
case"summary":f=t.f
q=f.a(A.C(b4))
e=A.nt(b4)
d=A.S("")
c=t.N
p=A.n(c,t.X)
if(f.b(J.l(q,"dns")))for(f=f.a(J.l(q,"dns")).gO(),f=f.gp(f),b=t.s;f.k();){o=f.gm()
if(!B.b.q(A.c(["enable","listen","ipv6"],b),o.a))J.dU(p,A.m(o.a),A.dQ(o.b,0))}d.G([],p)
p=d.b
f=J.l(q,b0)
if(f==null)f=""
d=J.l(q,"secret")
if(d==null)d=""
b=A.lr(b4)
a=A.c6(b4)
a0=A.nw(b4)
a1=A.fa(b4)
a2=A.rj(b4)
a3=A.f6(b4)
a4=A.b7(b4)
a5=A.j(a4).i("ak<1>")
a4=A.o(new A.ak(a4,a5),a5.i("f.E"))
r=A.a7(["network",e,"dnsYaml",p,"controller",f,"secret",d,"manualNodes",b,"nodes",a,"host",a0,"chains",a1,"nextChainId",a2,"groups",a3,"managedGroups",a4,"filters",A.fc(b4),"direct",A.jw(b4),"providers",A.l9(b4),"rules",A.la(b4),"policies",A.iF(b4),"actions",A.qr(b4)],c,t.z)
break
case"controller":r=A.qk(b4,s)
break
case"network":r=A.na(b4,s)
break
case"dns":n=A.C(A.e(J.l(s,"yaml")))
p=t.f
if(!p.b(n))throw A.a(B.bt)
m=p.a(A.C(b4)).h(0,"dns")
l=A.ah(p.a(A.dQ(n,0)),t.N,t.z)
for(f=["enable","listen","ipv6"],a6=0;a6<3;++a6){k=f[a6]
J.o4(l,k)
if(p.b(m)&&m.E(k))J.dU(l,k,A.dQ(m.h(0,k),0))}j=A.S(b4)
j.G(["dns"],l)
r=j.b
break
case"addNode":r=A.qj(b4,A.e(J.l(s,"link")))
break
case"deleteNode":r=A.qI(b4,A.e(J.l(s,b1)))
break
case"reorderNodes":r=A.rC(b4,A.O(t.R.a(J.l(s,"names")),!0,t.N))
break
case"host":r=A.qK(b4,A.e(J.l(s,"host")))
break
case"chain":p=t.R
f=t.N
r=A.rH(b4,A.e(J.l(s,"id")),A.O(p.a(J.l(s,"selected")),!0,f),A.hY(J.l(s,"prepend")),A.O(p.a(J.l(s,"targets")),!0,f))
break
case"group":p=b4
f=A.ah(t.f.a(J.l(s,"group")),t.N,t.z)
e=A.c1(J.l(s,"oldName"))
r=A.rT(p,f,A.c1(J.l(s,"filter")),A.mM(J.l(s,"includeDirect")),e)
break
case"deleteGroup":r=A.qG(b4,A.e(J.l(s,b1)))
break
case"reorderGroups":r=A.rB(b4,A.O(t.R.a(J.l(s,"names")),!0,t.N))
break
case"provider":r=A.rU(b4,A.e(J.l(s,b1)),A.ah(t.f.a(J.l(s,"provider")),t.N,t.z),A.c1(J.l(s,"oldName")))
break
case"deleteProvider":r=A.qH(b4,A.e(J.l(s,b1)))
break
case"rules":r=A.rV(b4,A.O(t.R.a(J.l(s,"rules")),!0,t.N))
break
case"subscription":p=A.e(J.l(s,a9))
f=t.R
e=t.N
d=A.O(f.a(J.l(s,"sources")),!0,e)
f=A.ri(d,J.l(s,b2)==null?a8:A.O(f.a(J.l(s,b2)),!0,e))
e=J.r(J.l(s,"refresh"),!0)?b4:a8
r=A.qm(p,f,J.r(J.l(s,"allowEmpty"),!0),e)
i=A.C(b4)
if(t.f.b(i)&&typeof i.h(0,b0)=="string"){h=A.S(A.e(r))
h.G([b0],i.h(0,b0))
r=h.b}r=A.nc(A.e(r),B.b.R(J.kz(b4,"\n"),new A.j1()))
if(B.b.R(J.kz(b4,"\n"),new A.j2()))r=A.na(r,A.nt(b4))
break
case"subscriptionSources":p=b4
f=A.V(J.l(s,"count"))
r=A.rP(p,f,J.l(s,b2)==null?a8:A.O(t.R.a(J.l(s,b2)),!0,t.N))
break
default:throw A.a(B.bo)}if(typeof r=="string")r=A.qS(r)
p=B.c.ad(A.a7(["ok",!0,"value",r],t.N,t.K),a8)
return p}catch(a7){g=A.bC(a7)
if(!b6&&g instanceof A.c8&&B.a.q(g.n(0),"package:yaml_edit"))try{p=A.no(b3,A.rk(b4),b5,!0)
return p}catch(a7){}return B.c.ad(A.a7(["ok",!1,"error",J.am(g)],t.N,t.K),a8)}},
rd(){var s,r=new A.jb()
if(typeof r=="function")A.F(A.a3("Attempting to rewrap a JS function."))
s=function(a,b){return function(c,d,e){return a(b,c,d,e,arguments.length)}}(A.px,r)
s[$.lz()]=r
v.G.mclashOverrideCall=s},
jt:function jt(a){this.a=a},
jj:function jj(){},
j1:function j1(){},
j2:function j2(){},
jb:function jb(){},
rl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="name",b={}
if(a.length>8388608||B.a8.aD(a).length>8388608)throw A.a(B.bA)
b.a=0
s=new A.jk(b,new A.ct(t.d_))
r=A.c([],t.t)
try{for(l=A.rb(B.a.cU(a,A.G("^\\uFEFF",!0),"")),k=l.length,j=t.P,i=t.j,h=t.f,g=0;g<l.length;l.length===k||(0,A.a_)(l),++g){q=l[g]
p=q.a.ga5()
o=null
if(h.b(p)&&p.E("proxies")){o=p.h(0,"proxies")
if(!i.b(o))throw A.a(B.by)}else o=p
n=s.$1(o)
if(n==null)continue
f=J.D(i.b(n)?n:[n])
while(f.k()){m=f.gm()
if(!j.b(m)||typeof m.h(0,c)!="string"||B.a.N(A.e(m.h(0,c))).length===0||typeof m.h(0,"type")!="string"||B.a.N(A.e(m.h(0,"type"))).length===0)throw A.a(B.bs)
J.dV(r,m)}}}catch(e){if(A.bC(e) instanceof A.bR)throw A.a(B.bQ)
else throw e}if(J.a6(r)===0)throw A.a(B.bF)
d=A.aN(t.N)
for(l=r,k=l.length,g=0;g<l.length;l.length===k||(0,A.a_)(l),++g)if(!d.t(0,A.e(l[g].h(0,c))))throw A.a(B.bj)
return r},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
nc(a,b){var s={},r=s.a=!1,q=t.U,p=A.o(new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.iC(s)),q),q.i("f.E"))
return(b?!s.a:r)?"# Mclash OpenWrt controller: true\n"+B.b.V(p,"\n"):B.b.V(p,"\n")},
nt(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash OpenWrt capture: "))return A.l7(t.f.a(B.c.aa(B.a.D(p,26),null)))}s=t.z
return A.l7(A.a7(["mode","none","interfaces",A.c(["br-lan"],t.s)],s,s))},
li(a){var s=A.c(a.split("."),t.s)
if(s.length!==4||B.b.R(s,new A.j8()))return null
return B.b.bX(s,0,new A.j9(),t.p)},
rZ(a){var s,r,q,p=A.G("^[0-9a-fA-F:]+$",!0)
if(!p.b.test(a))return!1
s=A.c(a.split("::"),t.s)
if(s.length>2)return!1
p=t.f_
r=A.o(new A.aB(s,t.ah.a(new A.ki()),p),p.i("f.E"))
if(B.b.R(r,new A.kj()))return!1
p=s.length
q=r.length
return p===2?q<8:q===8},
qo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.g.a(a)
s=a==null?[]:a
r=A.O(s,!0,t.N)
s=r.length
if(s>64)throw A.a(B.bU)
q=A.c([],t.s)
for(p=0;p<s;++p){o=B.a.N(r[p]).toLowerCase()
n=o.split("-")
m=n.length
if(m===2){if(0>=m)return A.b(n,0)
l=A.li(n[0])
if(1>=m)return A.b(n,1)
k=A.li(n[1])
j=l!=null&&k!=null&&l<=k}else{j=!1
if(m===1){i=o.split("/")
m=i.length
if(0>=m)return A.b(i,0)
h=i[0]
g=A.li(h)==null
f=!g||A.rZ(h)
h=m===2
if(h){if(1>=m)return A.b(i,1)
e=A.aU(i[1],null)}else e=null
if(f)if(m!==1){if(h){h=A.G("^[0-9]{1,3}$",!0)
if(1>=m)return A.b(i,1)
m=i[1]
if(h.b.test(m))if(e!=null)if(e>=0)m=e<=(!g?32:128)
else m=j
else m=j
else m=j}else m=j
j=m}else j=!0}}if(!j)throw A.a(B.bL)
if(!B.b.q(q,o))B.b.t(q,o)}return q},
l7(a){var s,r,q,p,o,n,m,l,k,j=a.h(0,"mode")
if(j==null)j="none"
s=a.h(0,"stack")
if(s==null)s="mixed"
r=a.h(0,"interfaces")
if(r==null)r=["br-lan"]
q=t.N
p=A.O(t.R.a(r),!0,q)
r=t.s
if(!B.b.q(A.c(["none","tun","tproxy"],r),j))throw A.a(B.bm)
if(!B.b.q(A.c(["system","gvisor","mixed"],r),s))throw A.a(B.bw)
r=p.length
if(r===0||r>16||A.av(p,A.u(p).c).a!==p.length||B.b.R(p,new A.iD()))throw A.a(B.cg)
for(r=["lan","router","ipv6"],o=0;o<3;++o){n=r[o]
if(a.h(0,n)!=null&&!A.f3(a.h(0,n)))throw A.a(B.bg)}r=a.h(0,"lan")
if(r==null)r=!0
m=A.qo(a.h(0,"access"))
l=a.h(0,"router")
if(l==null)l=!0
k=a.h(0,"ipv6")
return A.a7(["mode",j,"interfaces",p,"lan",r,"access",m,"router",l,"ipv6",k==null?!1:k,"stack",s],q,t.z)},
na(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="ipv6",a="routing-mark",a0="default-nameserver",a1="external-controller",a2=A.l7(b1),a3=a2.h(0,"mode"),a4=J.aZ(a3),a5=!a4.T(a3,"none"),a6=t.s,a7=A.S(new A.q(A.c(b0.split("\n"),a6),t.Q.a(new A.is()),t.U).V(0,"\n")),a8=A.C(b0),a9=t.f
if(!a9.b(a8))throw A.a(B.bI)
s=t.N
r=t.z
q=A.a7(["enable",a4.T(a3,"tun")],s,r)
if(a4.T(a3,"tun")){q.a9(0,A.a7(["device","Mclash","stack",a2.h(0,"stack"),"auto-route",!1,"auto-redirect",!1,"auto-detect-interface",!0,"mtu",1500,"dns-hijack",A.c(["any:53","tcp://any:53"],a6)],s,r))
if(J.r(a2.h(0,b),!0))q.j(0,"inet6-address",A.c(["fdfe:dcba:9876::1/126"],a6))}a7.G(["tun"],q)
a4=a4.T(a3,"tproxy")?7893:0
a7.G(["tproxy-port"],a4)
if(a9.b(a7.cw([],c).ga5())&&a9.a(a7.cw([],c).ga5()).E(a))a7.I(0,["routing-mark"])
if(a5)a7.G(["routing-mark"],359)
if(a5){a7.G(["allow-lan"],!0)
a7.G(["bind-address"],"*")
a7.G(["ipv6"],a2.h(0,b))
p=a8.h(0,"dns")
a4=a9.b(p)
if(!a4)a7.G(["dns"],A.n(s,r))
a7.G(["dns","enable"],!0)
o=J.r(a2.h(0,b),!0)?"[::]:1053":"0.0.0.0:1053"
a7.G(["dns","listen"],o)
a7.G(["dns","ipv6"],a2.h(0,b))
if(!a4||!p.E(a0))a7.G(["dns",a0],A.c(["223.5.5.5","1.1.1.1"],a6))
if(!a4||!p.E("nameserver"))a7.G(["dns","nameserver"],A.c(["https://dns.alidns.com/dns-query","https://cloudflare-dns.com/dns-query"],a6))
a4=a8.h(0,a1)
n=A.m(a4==null?"0.0.0.0:9097":a4)
m=A.G(":([0-9]+)$",!0).fX(n)
a4=m==null
if(a4)a6=c
else{a6=m.b
if(1>=a6.length)return A.b(a6,1)
a6=a6[1]}l=A.aU(a6==null?"":a6,c)
if(l==null)l=9097
if(l<1||l>65535)throw A.a(B.c3)
k=a4?"0.0.0.0":B.a.v(n,0,m.b.index)
a7.G([a1],k+":"+l)
j=a8.h(0,"proxies")
if(t.j.b(j))for(a4=J.E(j),i=0;i<a4.gl(j);++i)if(a9.b(a4.h(j,i))&&a9.a(a4.h(j,i)).E(a))a7.I(0,["proxies",i,"routing-mark"])
h=a8.h(0,"proxy-providers")
if(a9.b(h))for(a4=h.gO(),a4=a4.gp(a4);a4.k();){a6=a4.gm()
o=a6.b
if(!a9.b(o))continue
g=o.h(0,"override")
if(a9.b(g)){o=A.n(s,r)
for(f=g.gO(),f=f.gp(f);f.k();){e=f.gm()
o.j(0,A.m(e.a),e.b)}d=o}else d=A.n(s,r)
d.j(0,a,359)
a7.G(["proxy-providers",a6.a,"override"],d)}}return A.nc("# Mclash OpenWrt capture: "+B.c.ad(a2,c)+"\n"+a7.n(0),!1)},
qk(a,b){var s,r,q,p,o,n=b.h(0,"address"),m=B.a.N(A.m(n==null?"0.0.0.0":n)),l=A.aU(A.m(b.h(0,"port")),null)
n=t.s
s=A.c(m.split("."),n)
r=s.length===4&&B.b.aR(s,new A.iq())
if(B.a.q(m,":")){q=A.G("^[0-9a-fA-F:]{2,39}$",!0)
p=q.b.test(m)}else p=!1
if(!r&&!p&&m!=="localhost")throw A.a(B.c9)
if(l==null||l<1||l>65535)throw A.a(B.ci)
o=A.S(new A.q(A.c(a.split("\n"),n),t.Q.a(new A.ir()),t.U).V(0,"\n"))
n=p?"["+m+"]":m
o.G(["external-controller"],n+":"+A.m(l))
return"# Mclash OpenWrt controller: true\n"+o.n(0)},
iC:function iC(a){this.a=a},
j8:function j8(){},
j9:function j9(){},
ki:function ki(){},
kj:function kj(){},
iD:function iD(){},
is:function is(){},
iq:function iq(){},
ir:function ir(){},
lp(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.O(t.j.a(B.c.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
lx(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.km()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.c.ad(b,null)+"\n"+s},
ro(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="alpn",a1="path",a2={},a3=B.a.N(a6),a4=A.G("\\s",!0),a5=A.J(a3,a4,"")
if(!J.lG(a5,"vmess://")||J.a6(a5)>1048576)throw A.a(B.bN)
a2.a=null
try{s=B.b.gS(J.bD(a5,8).split("#"))
a2.a=A.ah(t.f.a(B.c.aa(B.e.cD(B.x.aD(B.v.b_(s))),a)),t.N,t.z)}catch(r){throw A.a(B.bM)}q=new A.js(a2)
p=new A.jr(q)
o=q.$1("add")
n=q.$1("id")
m=p.$1("port")
l=p.$2$fallback("aid",0)
if(o.length===0||n.length===0||m<1||m>65535||l<0)throw A.a(B.bk)
k=q.$2("net","tcp")
if(k.length===0)k="tcp"
j=q.$2("type","none")
if(k==="tcp"&&j==="http")k="http"
a3=t.s
if(!B.b.q(A.c(["tcp","http","ws","h2","grpc"],a3),k))throw A.a(A.B("Unsupported VMess transport type: "+k,a,a))
if(k==="tcp"&&j.length!==0&&j!=="none")throw A.a(A.B("Unsupported TCP camouflage type: "+j,a,a))
i=q.$1("tls")
if(i.length!==0&&i!=="none"&&i!=="tls")throw A.a(A.B("Unsupported VMess TLS type: "+i,a,a))
a4=t.N
h=A.n(a4,t.z)
h.j(0,"name",J.a6(q.$1("ps"))===0?"VMess "+o+":"+A.m(m):q.$1("ps"))
h.j(0,"type","vmess")
h.j(0,"server",o)
h.j(0,"port",m)
h.j(0,"uuid",n)
h.j(0,"alterId",l)
h.j(0,"cipher",J.a6(q.$1("scy"))===0?"auto":q.$1("scy"))
h.j(0,"udp",!0)
h.j(0,"network",k)
h.j(0,"tls",i==="tls")
if(J.a6(q.$1("sni"))!==0)h.j(0,"servername",q.$1("sni"))
if(J.a6(q.$1("fp"))!==0)h.j(0,"client-fingerprint",q.$1("fp"))
if(J.a6(q.$1(a0))!==0){g=J.kz(q.$1(a0),",")
f=A.u(g)
e=f.i("I<1,d>")
e=new A.I(g,f.i("d(1)").a(new A.jm()),e).bj(0,e.i("k(y.E)").a(new A.jn()))
g=A.o(e,e.$ti.i("f.E"))
h.j(0,a0,g)}d=q.$1("host")
c=J.a6(q.$1(a1))===0?"/":q.$1(a1)
g=t.c
f=t.e
e=new A.I(A.c(d.split(","),a3),g.a(new A.jo()),f).bj(0,f.i("k(y.E)").a(new A.jp()))
b=A.o(e,e.$ti.i("f.E"))
switch(k){case"http":e=A.n(a4,t.K)
e.j(0,"method","GET")
a3=A.o(new A.I(A.c(c.split(","),a3),g.a(new A.jq()),f),f.i("y.E"))
e.j(0,a1,a3)
if(b.length!==0)e.j(0,"headers",A.a7(["Host",b],a4,t.a))
h.j(0,"http-opts",e)
break
case"ws":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(d.length!==0)a3.j(0,"headers",A.a7(["Host",d],a4,a4))
h.j(0,"ws-opts",a3)
break
case"h2":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(b.length!==0)a3.j(0,"host",b)
h.j(0,"h2-opts",a3)
break
case"grpc":h.j(0,"grpc-opts",A.a7(["grpc-service-name",q.$1(a1)],a4,a4))
break}return h},
rm(a){var s=B.a.N(a)
if(B.a.u(s,"vmess://"))return A.ro(s)
return A.rn(s)},
qj(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="network",a6="proxies",a7="name",a8="dialer-proxy",a9=B.a.N(b6),b0=A.G("^[a-zA-Z][a-zA-Z0-9+.-]*://",!0),b1=b0.b.test(a9),b2=b1?A.c([A.rm(a9)],t.t):A.rl(a9),b3=B.b.gS(b2),b4=A.nw(b5)
if(b1&&J.r(b3.h(0,"type"),"vmess")&&b4.length!==0&&B.b.q(A.c(["http","ws"],t.s),b3.h(0,a5))){s=B.a.N(b4)
b0=A.G("[\\s/\\\\?#]",!0)
if(b0.b.test(s))throw A.a(B.b6)
r=t.P.a(b3.h(0,J.r(b3.h(0,a5),"http")?"http-opts":"ws-opts"))
if(s.length===0)r.I(0,"headers")
else{if(J.r(b3.h(0,a5),"http")){b0=t.e
b0=new A.I(A.c(s.split(","),t.s),t.c.a(new A.im()),b0).bj(0,b0.i("k(y.E)").a(new A.io()))
b0=A.o(b0,b0.$ti.i("f.E"))}else b0=s
r.j(0,"headers",A.a7(["Host",b0],t.N,t.K))}}q=t.S.a(A.C(b5))
b0=t.g
p=b0.a(q.h(0,a6))
if(p==null)p=[]
o=b0.a(q.h(0,"proxy-groups"))
if(o==null)o=[]
b0=t.N
n=A.lZ(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],b0)
for(m=J.D(p);m.k();)n.t(0,A.e(J.l(m.gm(),a7)))
for(m=J.a2(o),l=m.gp(o);l.k();)n.t(0,A.e(J.l(l.gm(),a7)))
k=A.n(b0,b0)
l=t.s
j=A.c([],l)
for(i=b2.length,h=0;g=b2.length,h<g;b2.length===i||(0,A.a_)(b2),++h){f=b2[h]
e=A.e(f.h(0,a7))
for(g=e+" (",d=e,c=2;n.q(0,d);){d=g+c+")";++c}n.t(0,d)
k.j(0,e,d)
f.j(0,a7,d)
B.b.t(j,d)}for(h=0;h<b2.length;b2.length===g||(0,A.a_)(b2),++h){f=b2[h]
b=f.h(0,a8)
if(k.E(b))f.j(0,a8,k.h(0,b))}a=A.S(b5)
n=t.z
i=A.o(b2,n)
B.b.a9(i,p)
a.G(["proxies"],i)
a0=a.b
a1=A.fc(b5)
if(a1.a!==0)a0=A.nb(a0,a1)
else if(!B.b.R(A.c(b5.split("\n"),l),new A.ip())){for(l=t.j,i=t.R,a2=0;a2<m.gl(o);++a2){a3=m.h(o,a2)
g=J.E(a3)
if(J.r(g.h(a3,"type"),"select")&&l.b(g.h(a3,a6))&&!A.b7(b5).E(g.h(a3,a7))){a4=A.o(j,n)
B.b.a9(a4,i.a(g.h(a3,a6)))
a.G(["proxy-groups",a2,"proxies"],a4)}}a0=a.b}b0=A.o(j,b0)
B.b.a9(b0,A.lp(b5))
return A.l5(A.lx(a0,b0),b5)},
lr(a){var s,r,q=A.c6(a),p=A.av(q,A.u(q).c)
q=A.lp(a)
s=A.u(q)
r=s.i("q<1>")
q=A.o(new A.q(q,s.i("k(1)").a(p.ga6(p)),r),r.i("f.E"))
return q},
rC(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="name",a3=A.lr(a5),a4=A.av(a3,A.u(a3).c)
if(a6.length!==a4.a||A.av(a6,A.u(a6).c).a!==a4.a||!a4.fP(a6))throw A.a(B.c5)
s=t.S.a(A.C(a5))
a3=t.g
r=a3.a(s.h(0,"proxies"))
if(r==null)r=[]
q=t.z
q=A.n(q,q)
for(p=J.a2(r),o=p.gp(r);o.k();){n=o.gm()
m=J.E(n)
if(a4.q(0,m.h(n,a2)))q.j(0,m.h(n,a2),n)}l=A.S(a5)
o=[]
for(p=p.gp(r),k=0;p.k();){n=p.gm()
if(a4.q(0,J.l(n,a2))){j=k+1
if(!(k<a6.length))return A.b(a6,k)
o.push(q.h(0,a6[k]))
k=j}else o.push(n)}l.G(["proxies"],o)
i=a3.a(s.h(0,"proxy-groups"))
if(i==null)i=[]
h=A.b7(a5)
for(a3=J.E(i),q=A.u(a6),p=q.i("k(1)"),q=q.i("q<1>"),o=q.i("f.E"),m=t.j,g=0;g<a3.gl(i);++g){if(h.E(J.l(a3.h(i,g),a2)))continue
f=J.l(a3.h(i,g),"proxies")
if(!m.b(f))continue
e=J.E(f)
d=A.o(new A.q(a6,p.a(e.ga6(f)),q),o)
c=[]
for(e=e.gp(f),b=0;e.k();){a=e.gm()
if(a4.q(0,a)){a0=b+1
if(!(b<d.length))return A.b(d,b)
c.push(d[b])
b=a0}else c.push(a)}l.G(["proxy-groups",g,"proxies"],c)}a1=A.lx(l.b,a6)
A.nB(a1)
return a1},
qI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy"
if(!B.b.q(A.lr(a),b))throw A.a(B.bW)
s=t.S.a(A.C(a))
r=A.c([],t.dm)
for(q=t.j,p=J.D(q.a(s.h(0,"proxies"))),o=t.f,n=t.z;p.k();){m=p.gm()
if(!J.r(J.l(m,"name"),b))r.push(A.ah(o.a(m),n,n))}for(p=r.length,l=0;l<r.length;r.length===p||(0,A.a_)(r),++l){m=r[l]
if(J.r(m.h(0,e),b))m.I(0,e)}k=A.S(a)
k.G(["proxies"],r)
j=t.g.a(s.h(0,"proxy-groups"))
if(j==null)j=[]
for(r=J.E(j),p=t.s,i=0;i<r.gl(j);++i){h=J.l(r.h(j,i),"proxies")
if(q.b(h)&&J.bo(h,b)){o=J.an(h,new A.iO(b))
g=A.o(o,o.$ti.i("f.E"))
o=g.length===0?A.c(["DIRECT"],p):g
k.G(["proxy-groups",i,"proxies"],o)}}r=k.b
q=A.lp(a)
p=A.u(q)
o=p.i("q<1>")
q=A.o(new A.q(q,p.i("k(1)").a(new A.iP(b)),o),o.i("f.E"))
f=A.rA(A.lx(r,q),b)
A.nB(f)
return f},
km:function km(){},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
jD(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.O(t.j.a(B.c.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
rh(a,b){var s,r,q,p,o,n
if(b==null)return a
s=A.jD(b)
r=A.av(s,A.u(s).c)
q=t.g.a(t.S.a(A.C(b)).h(0,"proxies"))
if(q==null)q=[]
s=J.an(q,new A.je(r))
p=A.o(s,s.$ti.i("f.E"))
s=A.u(p)
o=new A.I(p,s.i("@(1)").a(new A.jf()),s.i("I<1,@>")).aF(0)
s=A.o(p,t.z)
n=A.j(a)
B.b.a9(s,new A.q(a,n.i("k(t.E)").a(new A.jg(o)),n.i("q<t.E>")))
return s},
t1(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kl()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.c.ad(b,null)+"\n"+s},
rE(a,b){var s,r,q,p,o,n,m,l,k,j,i="name"
if(b==null)return a
s=A.jD(b)
r=A.av(s,A.u(s).c)
if(r.a===0)return a
s=t.S
q=t.g
p=q.a(s.a(A.C(b)).h(0,"proxies"))
if(p==null)p=[]
o=t.z
o=A.n(o,o)
for(n=J.D(p);n.k();){m=n.gm()
l=J.E(m)
if(r.q(0,l.h(m,i)))o.j(0,l.h(m,i),m)}k=q.a(s.a(A.C(a)).h(0,"proxies"))
if(k==null)k=[]
s=A.S(a)
q=[]
for(n=J.D(k);n.k();){m=n.gm()
l=o.h(0,J.l(m,i))
q.push(l==null?m:l)}s.G(["proxies"],q)
j=s.b
A.t0(j)
return j},
je:function je(a){this.a=a},
jf:function jf(){},
jg:function jg(a){this.a=a},
kl:function kl(){},
c6(a){var s,r=t.g.a(t.S.a(A.C(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aT(r,new A.k1(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
dR(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.ah(t.f.a(B.c.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
b7(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gO(),o=o.gp(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
jv(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gO(),o=o.gp(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
rv(a,b){var s=A.jv(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.c6(a),p=A.u(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jH(s)),o)
if(r!=null){q=J.an(r,n.ga6(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.c7(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mK(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.c6(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga6(c)
b=J.an(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.an(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.u(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hO(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.ak)
o=A.dR(a0)
n=A.b7(a0)
m=t.S.a(A.C(a))
l=A.S(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.E(k),j=0;j<s.gl(k);++j)if(o.E(J.l(s.h(k,j),"name"))&&s.h(k,j).E("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gF().q(0,d)){s=[]
for(b=J.D(b.a(m.h(0,d)));b.k();){i=b.gm()
if(!n.E(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hP()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lu(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.an(s,B.b.ga6(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lu(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.an(b,B.b.ga6(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lu(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.c.ad(a1,null)+"\n"+h},
n8(a){var s=t.N,r=new A.ih(A.aN(s),A.aN(s),a)
for(s=new A.aj(a,a.r,a.e,A.j(a).i("aj<1>"));s.k();)r.$1(s.d)},
ij(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.il()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.c.ad(c,null)+"\n")+s},
l5(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.iw()))return A.kZ(a8,a9,A.fa(a9))
s=A.jv(a9)
if(s.a!==0)return A.mK(a8,a9,s,"")
r=A.dR(a9)
q=A.b7(a9)
p=t.S.a(A.C(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a2(n)
k=l.ac(n,new A.ix(),m).aF(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.D(i==null?[]:i)
while(i.k()){h=i.gm()
if(!q.E(J.l(h,a5)))j.push(h)}for(i=new A.R(q,A.j(q).i("R<1,2>")).gp(0),g=t.K;i.k();){f=i.d
e=f.a
d=f.b
c=J.a2(d)
if(!c.aK(d,k.ga6(k)).gp(0).k())d=A.c(["DIRECT"],a7)
else{d=c.aK(d,k.ga6(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a7(["name",e,"type","select","proxies",d],m,g))}i=A.u(j)
b=new A.I(j,i.i("@(1)").a(new A.iy()),i.i("I<1,@>")).aF(0)
i=A.n(m,t.a)
for(g=l.gp(n);g.k();){a=g.gm()
e=J.E(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a_)(j),++a0){h=j[a0]
e=J.E(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.O(e==null?[]:e,!0,m))}a1=A.S(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gl(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.q(0,a4)||b.q(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.n8(i)
return A.ij(a1.b,r,q)},
lu(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.c6(a),g=A.av(b,A.u(b).c),f=A.av(c,A.u(c).c)
if(g.a===0||f.a===0)throw A.a(B.ag)
s=g.dZ(f)
if(s.gaI(s))throw A.a(B.aj)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aR(r,B.b.ga6(h)))throw A.a(B.J)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.dR(a)
n=A.b7(a)
m=B.b.gS(p)
if(p.length>1){l=t.S.a(A.C(a))
s=A.eg(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.D(r==null?[]:r)
while(r.k())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.q(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.kR(q,q.r,A.j(q).c),r=s.$ti.c;s.k();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.l5(a,A.ij("",o,n))},
nB(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.C(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.D(j==null?[]:j)
s=t.s
while(j.k()){r=j.gm()
q=J.E(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.D(j==null?[]:j)
while(j.k()){p=j.gm()
s=J.E(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.O(s==null?[]:s,!0,m))}A.n8(l)},
rA(a,b){var s,r,q,p,o,n,m=t.s
if(B.b.R(A.c(a.split("\n"),m),new A.jS())){s=A.fa(a)
for(m=new A.aD(s,s.r,s.e,A.j(s).i("aD<2>"));m.k();)for(r=m.d.gag(),r=r.gp(r);r.k();)J.ky(r.gm(),new A.jT(b))
return A.kZ(a,a,s)}q=A.dR(a)
q.au(0,new A.jU(b))
p=A.b7(a)
for(r=new A.aD(p,p.r,p.e,A.j(p).i("aD<2>"));r.k();)J.ky(r.d,new A.jV(b))
o=A.jv(a)
for(r=new A.aD(o,o.r,o.e,A.j(o).i("aD<2>"));r.k();)J.ky(r.d,new A.jW(b))
o.au(0,new A.jX())
if(!B.b.R(A.c6(a),new A.jY(o)))o.bv(0)
n=A.ij(new A.q(A.c(a.split("\n"),m),t.Q.a(new A.jZ()),t.U).V(0,"\n"),q,p)
return o.a===0?n:"# Mclash global-chain: "+B.c.ad(o,null)+"\n"+n},
fa(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jF()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gS(0),25),null)).gO(),q=q.gp(q),p=t.j,o=t.a;q.k();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gp(n);n.k();){k=n.gm()
l.j(0,A.e(k.a),A.O(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.jv(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cI(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a7([f,o,f+"Targets",A.rv(a,g)],s,q))}}return i},
rj(a){var s=A.fa(a),r=A.j(s).i("ak<1>"),q=t.p
return""+(A.fT(new A.ak(s,r),r.i("h(f.E)").a(A.qz()),r.i("f.E"),q).bX(0,0,new A.ji(),q)+1)},
rH(a,b,c,d,e){var s,r,q,p,o,n=B.b.ga6(A.c6(a))
if(!B.b.aR(c,n)||!B.b.aR(e,n))throw A.a(B.J)
if(c.length!==0&&e.length===0)throw A.a(B.cv)
if(B.b.R(e,B.b.ga6(c)))throw A.a(B.aZ)
s=A.fa(a)
n=A.j(s).i("R<1,2>")
r=n.i("q<f.E>")
q=r.i("aB<f.E,d>")
p=A.eg(new A.aB(new A.q(new A.R(s,n),n.i("k(f.E)").a(new A.k2(b)),r),r.i("f<d>(f.E)").a(new A.k3(d)),q),q.i("f.E"))
if(B.b.R(c,p.ga6(p)))throw A.a(B.cf)
o=d?"front":"back"
if(c.length===0)s.I(0,b)
else{n=t.N
r=A.o(c,n)
q=A.av(e,A.u(e).c)
q=A.o(q,A.j(q).c)
s.j(0,b,A.a7([o,r,o+"Targets",q],n,t.a))}return A.kZ(a,a,s)},
kZ(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.C(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a2(b1)
q=r.ac(b1,new A.hU(),s).aF(0)
p=A.dR(b3)
o=A.b7(b3)
n=A.S(b2)
for(m=0;m<r.gl(b1);++m)if(p.E(J.l(r.h(b1,m),"name"))&&r.h(b1,m).E("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gF().q(0,a9)){r=[]
for(l=J.D(t.j.a(b0.h(0,a9)));l.k();){k=l.gm()
if(!o.E(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hV()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.R(b4,A.j(b4).i("R<1,2>")).gp(0),h=t.a;l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gp(e);e.k();){d=e.gm()
c=d.a
d=J.an(d.b,q.ga6(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cI(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cI(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aE<2>")
e=f.i("aB<f.E,d>")
b=A.eg(new A.aB(new A.aE(i,f),f.i("f<d>(f.E)").a(new A.hW()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.R(i,l.i("R<1,2>")).gp(0);l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gp(e);e.k();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.an(d,new A.hX(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mK(j,j,f," (chain "+e+")")
a4=A.b7(a3)
a5=A.dR(a3)
a0.a9(0,a4)
for(f=new A.bb(a5,a5.r,a5.e,A.j(a5).i("bb<1,2>"));f.k();){a6=f.d
d=a6.a
if(a.E(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.l5(j,A.ij("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.R(a1,a1.$ti.i("R<1,2>")).gp(0);l.k();){g=l.d
h=g.a
f=i.h(0,h).E("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.e_(r)+a7},
rr(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
k1:function k1(){},
jH:function jH(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
jS:function jS(){},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(){},
jY:function jY(a){this.a=a},
jZ:function jZ(){},
jF:function jF(){},
ji:function ji(){},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
ls(a){var s,r=t.g.a(t.S.a(A.C(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aT(r,new A.k0(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
fb(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.ah(t.f.a(B.c.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
f9(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gO(),o=o.gp(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
lo(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gO(),o=o.gp(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
ru(a,b){var s=A.lo(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.ls(a),p=A.u(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jG(s)),o)
if(r!=null){q=J.an(r,n.ga6(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.c7(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mJ(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.ls(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga6(c)
b=J.an(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.an(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.u(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hM(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.ak)
o=A.fb(a0)
n=A.f9(a0)
m=t.S.a(A.C(a))
l=A.S(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.E(k),j=0;j<s.gl(k);++j)if(o.E(J.l(s.h(k,j),"name"))&&s.h(k,j).E("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gF().q(0,d)){s=[]
for(b=J.D(b.a(m.h(0,d)));b.k();){i=b.gm()
if(!n.E(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hN()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lt(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.an(s,B.b.ga6(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lt(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.an(b,B.b.ga6(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lt(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.c.ad(a1,null)+"\n"+h},
n7(a){var s=t.N,r=new A.ig(A.aN(s),A.aN(s),a)
for(s=new A.aj(a,a.r,a.e,A.j(a).i("aj<1>"));s.k();)r.$1(s.d)},
l3(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ik()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.c.ad(c,null)+"\n")+s},
l4(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.it()))return A.pr(a8,a9,A.rt(a9))
s=A.lo(a9)
if(s.a!==0)return A.mJ(a8,a9,s,"")
r=A.fb(a9)
q=A.f9(a9)
p=t.S.a(A.C(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a2(n)
k=l.ac(n,new A.iu(),m).aF(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.D(i==null?[]:i)
while(i.k()){h=i.gm()
if(!q.E(J.l(h,a5)))j.push(h)}for(i=new A.R(q,A.j(q).i("R<1,2>")).gp(0),g=t.K;i.k();){f=i.d
e=f.a
d=f.b
c=J.a2(d)
if(!c.aK(d,k.ga6(k)).gp(0).k())d=A.c(["DIRECT"],a7)
else{d=c.aK(d,k.ga6(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a7(["name",e,"type","select","proxies",d],m,g))}i=A.u(j)
b=new A.I(j,i.i("@(1)").a(new A.iv()),i.i("I<1,@>")).aF(0)
i=A.n(m,t.a)
for(g=l.gp(n);g.k();){a=g.gm()
e=J.E(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a_)(j),++a0){h=j[a0]
e=J.E(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.O(e==null?[]:e,!0,m))}a1=A.S(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gl(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.q(0,a4)||b.q(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.n7(i)
return A.l3(a1.b,r,q)},
lt(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.ls(a),g=A.av(b,A.u(b).c),f=A.av(c,A.u(c).c)
if(g.a===0||f.a===0)throw A.a(B.ag)
s=g.dZ(f)
if(s.gaI(s))throw A.a(B.aj)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aR(r,B.b.ga6(h)))throw A.a(B.J)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.fb(a)
n=A.f9(a)
m=B.b.gS(p)
if(p.length>1){l=t.S.a(A.C(a))
s=A.eg(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.D(r==null?[]:r)
while(r.k())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.q(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.kR(q,q.r,A.j(q).c),r=s.$ti.c;s.k();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.l4(a,A.l3("",o,n))},
t0(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.C(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.D(j==null?[]:j)
s=t.s
while(j.k()){r=j.gm()
q=J.E(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.D(j==null?[]:j)
while(j.k()){p=j.gm()
s=J.E(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.O(s==null?[]:s,!0,m))}A.n7(l)},
rt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jE()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gS(0),25),null)).gO(),q=q.gp(q),p=t.j,o=t.a;q.k();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gp(n);n.k();){k=n.gm()
l.j(0,A.e(k.a),A.O(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.lo(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cI(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a7([f,o,f+"Targets",A.ru(a,g)],s,q))}}return i},
pr(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.C(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a2(b1)
q=r.ac(b1,new A.hQ(),s).aF(0)
p=A.fb(b3)
o=A.f9(b3)
n=A.S(b2)
for(m=0;m<r.gl(b1);++m)if(p.E(J.l(r.h(b1,m),"name"))&&r.h(b1,m).E("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gF().q(0,a9)){r=[]
for(l=J.D(t.j.a(b0.h(0,a9)));l.k();){k=l.gm()
if(!o.E(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hR()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.R(b4,A.j(b4).i("R<1,2>")).gp(0),h=t.a;l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gp(e);e.k();){d=e.gm()
c=d.a
d=J.an(d.b,q.ga6(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cI(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cI(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aE<2>")
e=f.i("aB<f.E,d>")
b=A.eg(new A.aB(new A.aE(i,f),f.i("f<d>(f.E)").a(new A.hS()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.R(i,l.i("R<1,2>")).gp(0);l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gp(e);e.k();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.an(d,new A.hT(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mJ(j,j,f," (chain "+e+")")
a4=A.f9(a3)
a5=A.fb(a3)
a0.a9(0,a4)
for(f=new A.bb(a5,a5.r,a5.e,A.j(a5).i("bb<1,2>"));f.k();){a6=f.d
d=a6.a
if(a.E(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.l4(j,A.l3("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.R(a1,a1.$ti.i("R<1,2>")).gp(0);l.k();){g=l.d
h=g.a
f=i.h(0,h).E("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.e_(r)+a7},
rq(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
k0:function k0(){},
jG:function jG(a){this.a=a},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
jE:function jE(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
l9(a){var s,r,q,p,o,n,m,l=A.C(a),k=t.f,j=k.b(l)?l.h(0,"rule-providers"):null
if(j==null)return A.n(t.N,t.P)
if(!k.b(j))throw A.a(B.c4)
s=new A.iG()
r=t.N
q=A.n(r,t.P)
for(p=j.gO(),p=p.gp(p),o=t.z;p.k();){n=p.gm()
m=n.a
if(typeof m!="string"||!k.b(n.b))throw A.a(B.aY)
q.j(0,m,A.ah(k.a(s.$1(n.b)),r,o))}return q},
n_(a){return new A.bx(A.q4(a),t.dj)},
q4(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l
return function $async$n_(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:m=t.g
l=m.a(s.h(0,"rules"))
l=J.D(l==null?[]:l)
case 2:if(!l.k()){r=3
break}o=l.gm()
r=typeof o=="string"?4:5
break
case 4:r=6
return b.b=o,1
case 6:case 5:r=2
break
case 3:l=t.Y.a(s.h(0,"sub-rules"))
if(l==null){l=t.z
l=A.n(l,l)}l=l.gag()
l=l.gp(l)
case 7:if(!l.k()){r=8
break}n=m.a(l.gm())
n=J.D(n==null?[]:n)
case 9:if(!n.k()){r=10
break}o=n.gm()
r=typeof o=="string"?11:12
break
case 11:r=13
return b.b=o,1
case 13:case 12:r=9
break
case 10:r=7
break
case 8:return 0
case 1:return b.c=p.at(-1),3}}}},
rU(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1={}
a1.a=a3
a3=a1.a=B.a.N(a3)
if(a3.length!==0){s=A.G("[,()\\r\\n]",!0)
s=s.b.test(a3)}else s=!0
if(s)throw A.a(B.c7)
r=A.l9(a2)
s=a5==null
q=!s
if(q&&!r.E(a5))throw A.a(B.bO)
if(a3!==a5&&r.E(a3))throw A.a(B.cj)
p=a4.h(0,"type")
o=a4.h(0,"behavior")
n=a4.h(0,"format")
if(n==null)n="yaml"
m=t.s
if(!B.b.q(A.c(["http","file","inline"],m),p)||!B.b.q(A.c(["domain","ipcidr","classical"],m),o)||!B.b.q(A.c(["yaml","text","mrs"],m),n))throw A.a(B.aV)
if(J.r(n,"mrs"))l=J.r(o,"classical")||J.r(p,"inline")
else l=!1
if(l)throw A.a(B.cn)
l=J.aZ(p)
if(l.T(p,"http")){k=a4.h(0,"url")
j=A.oL(A.m(k==null?"":k))
if(j==null||!B.b.q(A.c(["http","https"],m),j.gak())||j.gaH().length===0)throw A.a(B.bx)
i=a4.h(0,"interval")
if(i!=null)k=!A.b5(i)||i<0
else k=!1
if(k)throw A.a(B.cl)}k=a4.h(0,"path")
h=B.a.N(A.m(k==null?"":k))
if(l.T(p,"file")&&h.length===0)throw A.a(B.b4)
if(h.length!==0&&new A.R(r,A.j(r).i("R<1,2>")).R(0,new A.kd(a5,h)))throw A.a(B.br)
if(l.T(p,"inline")){g=a4.h(0,"payload")
if(t.j.b(g)){l=J.E(g)
l=l.gJ(g)||l.R(g,new A.ke())}else l=!0
if(l)throw A.a(B.bB)}f=A.n(t.N,t.z)
for(l=new A.R(r,A.j(r).i("R<1,2>")).gp(0);l.k();){e=l.d
k=e.a
d=k===a5
if(d)k=a1.a
f.j(0,k,d?a4:e.b)}if(s)f.j(0,a1.a,a4)
c=A.S(a2)
c.G(["rule-providers"],f)
if(q&&a5!==a1.a){s=t.f
b=s.a(A.C(a2))
a=new A.kf(a1,a5)
q=t.j
if(q.b(b.h(0,"rules"))){l=A.c([],m)
for(k=J.D(t.R.a(b.h(0,"rules")));k.k();)l.push(a.$1(A.e(k.gm())))
c.G(["rules"],l)}a0=b.h(0,"sub-rules")
if(s.b(a0))for(s=a0.gO(),s=s.gp(s);s.k();){l=s.gm()
k=l.a
d=A.c([],m)
for(l=J.D(q.a(l.b));l.k();)d.push(a.$1(A.e(l.gm())))
c.G(["sub-rules",k],d)}}return c.b},
qH(a,b){var s,r
if(A.n_(t.f.a(A.C(a))).R(0,new A.iN(b)))throw A.a(B.bJ)
s=A.l9(a)
s.I(0,b)
r=A.S(a)
r.G(["rule-providers"],s)
return r.b},
iG:function iG(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(){},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
iN:function iN(a){this.a=a},
mR(a){var s,r
try{s=B.e.cD(B.x.aD(B.v.b_(a)))
return s}catch(r){throw A.a(B.bS)}},
n4(a,b,c,d){var s,r,q,p,o="skip-cert-verify",n="client-fingerprint",m=t.s,l=b.a3(0,A.c(["sni","peer","serverName","servername"],m))
if(l.length!==0)a.j(0,c,l)
s=b.dS(A.c(["insecure","allowInsecure",o],m))
if(s!=null)a.j(0,o,s)
r=b.a3(0,A.c(["alpn"],m))
if(r.length!==0){q=t.e
q=new A.I(A.c(r.split(","),m),t.c.a(new A.ia()),q).bj(0,q.i("k(y.E)").a(new A.ib()))
q=A.o(q,q.$ti.i("f.E"))
a.j(0,"alpn",q)}if(d){p=b.a3(0,A.c(["fp",n],m))
if(p.length!==0)a.j(0,n,p)}},
qb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="path",e=t.s,d=b.aO(0,A.c(["type","network"],e),"tcp")
if(d.length===0)d="tcp"
s=b.aO(0,A.c(["headerType"],e),"none")
if(d==="tcp"&&s==="http"&&J.r(a.h(0,"type"),"vless"))d="http"
else if(s.length!==0&&s!=="none")throw A.a(B.bb)
if(!B.b.q(J.r(a.h(0,"type"),"vless")?A.c(["tcp","ws","http","h2","grpc","xhttp"],e):A.c(["tcp","ws","grpc"],e),d))throw A.a(B.bu)
a.j(0,"network",d)
if(d==="tcp")return
if(d==="grpc"){r=b.a3(0,A.c(["serviceName","service-name","path"],e))
q=b.aO(0,A.c(["mode"],e),"gun")
if(q!=="gun"&&q.length!==0)throw A.a(B.bc)
e=t.N
a.j(0,"grpc-opts",A.a7(["grpc-service-name",r],e,e))
return}p=b.aO(0,A.c(["path"],e),"/")
o=b.a3(0,A.c(["host"],e))
if(d==="xhttp"){q=b.aO(0,A.c(["mode"],e),"auto")
if(!B.b.q(A.c(["auto","stream-one","stream-up","packet-up"],e),q))throw A.a(B.cr)
e=t.N
e=A.n(e,e)
e.j(0,f,p)
e.j(0,"mode",q)
if(o.length!==0)e.j(0,"host",o)
a.j(0,"xhttp-opts",e)}else if(d==="ws"){n=t.N
m=A.n(n,t.z)
m.j(0,f,p)
if(o.length!==0)m.j(0,"headers",A.a7(["Host",o],n,n))
l=b.a3(0,A.c(["ed"],e))
if(l.length!==0){k=A.aU(l,null)
if(k==null||k<0)throw A.a(B.cd)
m.j(0,"max-early-data",k)}j=b.a3(0,A.c(["eh"],e))
if(j.length!==0)m.j(0,"early-data-header-name",j)
a.j(0,"ws-opts",m)}else{n=t.U
i=A.o(new A.q(A.c(o.split(","),e),t.Q.a(new A.ic()),n),n.i("f.E"))
n=d==="h2"
m=n?"h2-opts":"http-opts"
h=t.N
g=t.K
if(n){e=A.n(h,g)
e.j(0,f,p)
if(i.length!==0)e.j(0,"host",i)}else{n=A.n(h,g)
n.j(0,"method","GET")
n.j(0,f,A.c(p.split(","),e))
if(i.length!==0)n.j(0,"headers",A.a7(["Host",i],h,t.a))
e=n}a.j(0,m,e)}},
q0(a,b){var s,r,q,p,o=t.s,n=b.a3(0,A.c(["pbk","public-key"],o))
if(n.length===0)A.F(A.B("Node is missing Reality public key",null,null))
s=n
try{if(B.x.aD(B.v.b_(s)).length!==32)throw A.a(B.bd)}catch(r){throw A.a(B.cc)}q=b.a3(0,A.c(["sid","short-id"],o))
p=A.G("^[0-9a-fA-F]{0,16}$",!0)
if(!p.b.test(q)||(q.length&1)===1)throw A.a(B.bv)
b.a3(0,A.c(["spx"],o))
o=t.B.i("aI.S").a(B.x.aD(B.v.b_(s)))
o=B.a3.gbU().aD(o)
p=t.N
a.j(0,"reality-opts",A.a7(["public-key",A.J(o,"=",""),"short-id",q],p,p))},
q7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="mode"
if(b.length===0)return
s=t.s
r=A.c(b.split(";"),s)
q=B.b.be(r,0)
p=t.N
o=A.n(p,p)
for(n=t.Q.a(new A.i9()),m=B.b.gp(r),n=new A.bk(m,n,t.fj);n.k();){l=m.gm()
k=B.a.aq(l,"=")
j=k<0
i=j?l:B.a.v(l,0,k)
if(o.E(i))throw A.a(B.bi)
o.j(0,i,j?"true":B.a.D(l,k+1))}h=A.n(p,t.z)
if(B.b.q(A.c(["obfs-local","simple-obfs","obfs"],s),q)){p=o.I(0,"obfs")
g=p==null?o.I(0,d):p
if(g==null)g=""
if(!B.b.q(A.c(["http","tls"],s),g))throw A.a(B.bY)
h.j(0,d,g)
f=o.I(0,"obfs-host")
if(f==null)f=o.I(0,"host")
if(f!=null)h.j(0,"host",f)
a.j(0,"plugin","obfs")}else if(q==="v2ray-plugin"){g=o.I(0,d)
if(g==null)g="websocket"
if(g!=="websocket")throw A.a(B.c2)
h.j(0,d,g)
for(p=["host","path"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b!=null)h.j(0,l,b)}for(p=["tls","mux"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b==null)continue
if(!B.b.q(A.c(["true","false","1","0"],s),b))throw A.a(B.b0)
h.j(0,l,b==="true"||b==="1")}a.j(0,"plugin",q)}else throw A.a(B.ct)
if(o.a!==0)throw A.a(B.c0)
a.j(0,"plugin-opts",h)},
rn(a){var s,r,q
try{r=A.q_(a)
return r}catch(q){r=A.bC(q)
if(t.d.b(r)){s=r
throw A.a(A.B(s.ge0(),null,null))}else throw A.a(B.I)}},
q_(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null,c3="password",c4="tls",c5="udp",c6="^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",c7="congestion-controller",c8="Node is missing Password",c9=d1.length,d0=!0
if(c9!==0)if(c9<=1048576){c9=A.G("\\s|%(?![0-9a-fA-F]{2})",!0)
c9=c9.b.test(d1)}else c9=d0
else c9=d0
if(c9)throw A.a(B.bz)
s=d1
if(J.lG(s,"ss://")){q=J.o2(s,A.G("[?#]",!0),5)
c9=q<0
p=c9?J.bD(s,5):J.o7(s,5,q)
if(!B.a.q(p,"@")){o=A.mR(p)
n=B.a.bd(o,"@")
if(n<0)throw A.a(B.bR)
d0=t.B.i("aI.S").a(B.a8.aD(B.a.v(o,0,n)))
m=B.a3.gbU().aD(d0)
d0=B.a.D(o,n)
c9=c9?"":J.bD(s,q)
s="ss://"+m+d0+c9}}l=J.o1(s,"://")
if(l<0)throw A.a(B.I)
k=B.b.gS(B.a.bi(J.bD(s,l+3),A.G("[/?#]",!0)))
j=B.a.D(k,B.a.bd(k,"@")+1)
i=B.a.u(j,"[")?B.a.aq(j,"]")+1:B.a.bd(j,":")
if(i>=0&&i<j.length&&j[i]===":"){h=B.a.D(j,i+1)
g=A.aU(h,c2)
c9=A.G("^\\d+$",!0)
if(!c9.b.test(h)||g==null||g<1||g>65535)throw A.a(B.ae)}else g=c2
r=null
try{r=A.eE(s,0,c2)
c9=r.gaA()
A.al(c9,0,c9.length,B.e,!1)
c9=r.gb4()
A.al(c9,0,c9.length,B.e,!1)}catch(f){throw A.a(B.I)}if(!B.b.q(B.cC,r.gak()))throw A.a(B.ba)
if(r.gaH().length!==0)c9=r.gar().length!==0&&r.gar()!=="/"
else c9=!0
if(c9)throw A.a(B.bT)
e=r.gak()
A:{if("hy2"===e){c9="hysteria2"
break A}if("socks"===e){c9="socks5"
break A}if("https"===e){c9="http"
break A}c9=e
break A}d0=c9==="ss"
if(d0&&g==null)throw A.a(B.bq)
if(g==null)if(c9==="socks5")d=1080
else{c=e==="http"?80:443
d=c}else d=g
if(d<1||d>65535)throw A.a(B.ae)
c=t.N
b=new A.hB(A.fP(r.ge6(),c,c))
if(r.ge7().gag().R(0,new A.i4()))throw A.a(B.c1)
if(r.gb4().length===0)a=e.toUpperCase()+" "+r.gaH()+":"+d
else{a=r.gb4()
a=A.al(a,0,a.length,B.e,!1)}a0=A.a7(["name",a,"type",c9,"server",r.gaH(),"port",d],c,t.z)
c=r.gaA()
a1=A.al(c,0,c.length,B.e,!1)
if(c9==="http"||c9==="socks5"){a2=B.a.aq(r.gaA(),":")
if(a1.length!==0){d0=a2<0?r.gaA():B.a.v(r.gaA(),0,a2)
a0.j(0,"username",A.al(d0,0,d0.length,B.e,!1))
if(a2>=0){d0=B.a.D(r.gaA(),a2+1)
a0.j(0,c3,A.al(d0,0,d0.length,B.e,!1))}}if(e==="https")a0.j(0,c4,!0)
if(c9==="socks5")a0.j(0,c5,!0)
if(r.gbx())throw A.a(B.aW)}else if(d0){m=B.a.q(r.gaA(),":")?a1:A.mR(a1)
a3=B.a.aq(m,":")
if(a3<=0)throw A.a(B.b8)
a4=B.a.v(m,0,a3)
if(!B.cK.q(0,a4))throw A.a(B.b_)
a0.j(0,"cipher",a4)
c9=B.a.D(m,a3+1)
if(c9.length===0)A.F(A.B(c8,c2,c2))
a0.j(0,c3,c9)
a0.j(0,c5,!0)
A.q7(a0,b.a3(0,A.c(["plugin"],t.s)))}else{d0=c9==="vless"
if(d0||c9==="trojan"){a0.j(0,c5,!0)
c=d0?"uuid":c3
if(d0){a=A.G(c6,!0)
if(!a.b.test(a1))A.F(B.af)}else if(a1.length===0)A.F(A.B(c8,c2,c2))
a0.j(0,c,a1)
c=t.s
a=A.c(["security"],c)
a5=b.aO(0,a,d0?"none":c4)
if(B.b.q(A.c(["none","tls","reality"],c),a5))c9=c9==="trojan"&&a5==="none"
else c9=!0
if(c9)throw A.a(B.bH)
if(d0){a6=b.aO(0,A.c(["encryption"],c),"none")
if(a6!=="none"&&a6.length!==0)throw A.a(B.cu)
a0.j(0,c4,a5!=="none")}c9=a5!=="none"
if(c9)A.n4(a0,b,d0?"servername":"sni",!0)
if(a5==="reality")A.q0(a0,b)
A.qb(a0,b)
if(d0){a7=b.a3(0,A.c(["flow"],c))
if(a7.length!==0){if(a7!=="xtls-rprx-vision"||!c9||!J.r(a0.h(0,"network"),"tcp"))throw A.a(B.ce)
a0.j(0,"flow",a7)}a8=b.a3(0,A.c(["packetEncoding","packet-encoding"],c))
if(a8.length!==0){if(!B.b.q(A.c(["xudp","packetaddr"],c),a8))throw A.a(B.bC)
a0.j(0,"packet-encoding",a8)}}}else{a0.j(0,c5,!0)
d0=c9==="anytls"
if(d0){c=t.s
if(b.aO(0,A.c(["security"],c),c4)!=="tls"||b.aO(0,A.c(["type","network"],c),"tcp")!=="tcp")throw A.a(B.cp)}A.n4(a0,b,"sni",d0)
if(c9==="tuic"){a3=B.a.aq(r.gaA(),":")
if(a3<0)throw A.a(B.cb)
c9=B.a.v(r.gaA(),0,a3)
c9=A.al(c9,0,c9.length,B.e,!1)
d0=A.G(c6,!0)
if(!d0.b.test(c9))A.F(B.af)
a0.j(0,"uuid",c9)
c9=B.a.D(r.gaA(),a3+1)
c9=A.al(c9,0,c9.length,B.e,!1)
if(c9.length===0)A.F(A.B(c8,c2,c2))
a0.j(0,c3,c9)
c9=t.s
a9=b.a3(0,A.c(["congestion_control",c7],c9))
if(a9.length!==0){if(!B.b.q(A.c(["bbr","cubic","new_reno"],c9),a9))throw A.a(B.bn)
a0.j(0,c7,a9)}b0=b.a3(0,A.c(["udp_relay_mode","udp-relay-mode"],c9))
if(b0.length!==0){if(!B.b.q(A.c(["native","quic"],c9),b0))throw A.a(B.bZ)
a0.j(0,"udp-relay-mode",b0)}for(c9=[A.c(["disable_sni","disable-sni"],c9),A.c(["reduce_rtt","reduce-rtt"],c9)],b1=0;b1<2;++b1){b2=c9[b1]
s=b.dS(b2)
if(s!=null)a0.j(0,B.b.gK(b2),s)}}else{if(a1.length===0)A.F(A.B(c8,c2,c2))
a0.j(0,c3,a1)
if(c9==="hysteria2"){for(c9=["up","down"],d0=t.s,b1=0;b1<2;++b1){b3=c9[b1]
s=b.a3(0,A.c([b3],d0))
if(s.length!==0){c=A.G("^\\d+(\\.\\d+)?(\\s*[KMG]?bps)?$",!1)
if(!c.b.test(s))throw A.a(B.bD)
a0.j(0,b3,s)}}b4=b.a3(0,A.c(["mport","ports"],d0))
if(b4.length!==0){for(c9=b4.split(","),c=c9.length,a=t.bR,b5=t.bz,b6=b5.i("y.E"),b1=0;b1<c;++b1){b7=A.o(new A.I(A.c(c9[b1].split("-"),d0),a.a(A.qA()),b5),b6)
b8=b7.length
b9=!0
if(b8!==0)if(b8<=2)if(!B.b.R(b7,new A.i5()))if(b7.length===2){b8=B.b.gS(b7)
b8.toString
b9=B.b.gK(b7)
b9.toString
b9=b8>b9
b8=b9}else b8=!1
else b8=b9
else b8=b9
else b8=b9
if(b8)throw A.a(B.ca)}a0.j(0,"ports",b4)}c0=b.a3(0,A.c(["obfs"],d0))
c1=b.a3(0,A.c(["obfs-password","obfsPassword"],d0))
if(c0.length!==0){if(c0!=="salamander")throw A.a(B.co)
a0.j(0,"obfs",c0)
if(c1.length===0)A.F(A.B("Node is missing Obfuscation password",c2,c2))
a0.j(0,"obfs-password",c1)}else if(c1.length!==0)throw A.a(B.c8)}}}}b.fW()
return a0},
hB:function hB(a){this.a=a},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
i9:function i9(){},
i4:function i4(){},
i5:function i5(){},
f4(a){var s,r,q
if(t.f.b(a)){s=A.n(t.z,t.X)
for(r=a.gO(),r=r.gp(r);r.k();){q=r.gm()
s.j(0,q.a,A.f4(q.b))}return s}if(t.j.b(a)){s=J.aT(a,A.rQ(),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
qS(a){var s,r,q,p=A.C(a),o=t.f.b(p)?p.h(0,"proxies"):null
if(!t.j.b(o)||J.c7(o))return a
s=A.S(a)
r=A.c([],t.r)
for(q=J.D(o);q.k();)r.push(A.ar(A.f4(q.gm()),B.f,B.h))
s.G(["proxies"],r)
return s.b},
n2(a,b){var s,r,q,p
if(b==null){s=J.kA(a,t.N)
for(r=a===1,q=0;q<a;++q)s[q]=r?"":""+(q+1)+"-"
p=s}else p=b
if(p.length!==a||A.av(p,A.u(p).c).a!==a||B.b.R(p,new A.i8()))throw A.a(B.b3)
return p},
rP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy",d=A.n2(b,c)
if(b<1)return A.c([],t.s)
s=t.f
r=s.a(A.C(a))
q=A.jD(a)
p=A.av(q,A.u(q).c)
o=J.kA(b,t.D)
for(q=t.t,n=0;n<b;++n)o[n]=A.c([],q)
q=t.g.a(r.h(0,"proxies"))
q=J.D(q==null?[]:q)
m=t.N
l=t.z
while(q.k()){k=A.ah(s.a(A.f4(q.gm())),m,l)
j=A.e(k.h(0,"name"))
if(p.q(0,j))continue
i=B.b.b6(d,new A.k4(j))
if(i<0)i=B.b.aq(d,"")
if(i<0)throw A.a(B.cq)
if(!(i<d.length))return A.b(d,i)
h=d[i]
g=h.length
k.j(0,"name",B.a.D(j,g))
f=k.h(0,e)
if(g!==0&&typeof f=="string"&&B.a.u(f,h))k.j(0,e,B.a.D(f,g))
if(!(i<o.length))return A.b(o,i)
B.b.t(o[i],k)}s=A.u(o)
q=s.i("I<1,d>")
s=A.o(new A.I(o,s.i("d(1)").a(new A.k5()),q),q.i("y.E"))
return s},
ri(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="name",a0="dialer-proxy",a1=A.n2(a2.length,a3)
if(a2.length===0){if(a3!=null)return"proxies: []\n"
throw A.a(B.cm)}s=A.c([],t.gT)
for(r=t.dY,q=t.gh,p=t.f,o=t.N,n=t.z,m=t.t,l=t.j,k=0;k<a2.length;++k){j=A.f8(a2[k],b,!1,b).a.ga5()
i=p.b(j)?j.h(0,"proxies"):b
if(!l.b(i)||J.c7(i))throw A.a(A.B("Subscription "+(k+1)+" has no embedded proxies",b,b))
h=A.c([],m)
for(g=J.D(i);g.k();){f=g.gm()
if(!p.b(f)||typeof f.h(0,a)!="string"||B.a.N(A.e(f.h(0,a))).length===0||typeof f.h(0,"type")!="string")throw A.a(A.B("Subscription "+(k+1)+" has a node without a name or type",b,b))
B.b.t(h,A.ah(p.a(A.f4(f)),o,n))}if(new A.I(h,r.a(new A.jh()),q).aF(0).a!==h.length)throw A.a(A.B("Subscription "+(k+1)+" has duplicate node names",b,b))
B.b.t(s,h)}e=A.c([],m)
for(r=t.s,k=0;k<s.length;++k){q=A.n(o,o)
for(p=s[k],n=p.length,d=0;d<p.length;p.length===n||(0,A.a_)(p),++d){f=p[d]
m=A.e(f.h(0,a))
if(!(k<a1.length))return A.b(a1,k)
q.j(0,m,a1[k]+A.m(f.h(0,a)))}if(!(k<s.length))return A.b(s,k)
p=s[k]
n=p.length
d=0
for(;d<p.length;p.length===n||(0,A.a_)(p),++d){f=p[d]
f.j(0,a,q.h(0,f.h(0,a)))
c=f.h(0,a0)
if(q.E(c))f.j(0,a0,q.h(0,c))
else if(c!=null&&!B.b.q(A.c(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],r),c))f.I(0,a0)}if(!(k<s.length))return A.b(s,k)
B.b.a9(e,s[k])}r=A.S("")
r.G([],A.a7(["proxies",e],o,t.D))
return r.b},
qm(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7="name",a8=A.C(b3),a9=t.S,b0=a9.b(a8)?a8.h(0,a6):null,b1=t.h
if(b1.b(b0))s=b0.gl(b0)===0&&!b4
else s=!0
if(s)throw A.a(B.ck)
r=A.rh(b0,b5)
s=t.s
q=A.c([],s)
for(p=J.a2(r),o=p.gp(r);o.k();){n=o.gm()
if(!a9.b(n)||typeof n.h(0,a7)!="string"||B.a.N(A.e(n.h(0,a7))).length===0||typeof n.h(0,"type")!="string")throw A.a(B.bP)
B.b.t(q,A.e(n.h(0,a7)))}o=t.N
if(A.av(q,o).a!==q.length)throw A.a(B.bX)
m=b5==null
if(!m){l=a9.a(A.C(b5))
k=A.aN(o)
j=t.g
i=j.a(l.h(0,a6))
i=J.D(i==null?[]:i)
while(i.k())k.t(0,A.e(J.l(i.gm(),a7)))
k.ha(q)
h=t.Y.a(l.h(0,"sub-rules"))
if(h==null){i=t.z
h=A.n(i,i)}j=j.a(l.h(0,"rules"))
j=A.o(A.O(j==null?[]:j,!0,o),o)
for(i=h.gag(),i=i.gp(i),g=t.j;i.k();)B.b.a9(j,A.O(g.a(i.gm()),!0,o))
i=j.length
f=0
for(;f<j.length;j.length===i||(0,A.a_)(j),++f){e=A.rF(j[f])
if(k.q(0,e))throw A.a(A.B("Node "+A.m(e)+" was removed from the subscription but is still referenced by rules; update the rules first; original configuration retained",null,null))}}d=m?b2:b5
c=a9.a(A.C(d))
b=b1.a(c.h(0,"proxy-groups"))
b1=A.lZ(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],o)
for(o=A.j(b),k=new A.a5(b,b.gl(b),o.i("a5<t.E>")),o=o.i("t.E");k.k();){a=k.d
b1.t(0,A.e(J.l(a==null?o.a(a):a,a7)))}if(B.b.R(q,b1.ga6(b1)))throw A.a(B.c_)
a0=A.S(d)
if(c.gF().q(0,"proxy-providers"))a0.I(0,["proxy-providers"])
a0.G(["proxies"],r)
for(o=t.g,a1=0;a1<b.gl(b);++a1){a=a9.a(b.h(0,a1))
if(a.gF().q(0,"use"))a0.I(0,["proxy-groups",a1,"use"])
k=o.a(a.h(0,a6))
if(k==null)k=[]
k=J.an(k,new A.iB(q,b1))
a2=A.o(k,k.$ti.i("f.E"))
k=a2.length===0?A.c(["DIRECT"],s):a2
a0.G(["proxy-groups",a1,"proxies"],k)}a3=A.ql(a0.b,A.rw(d),b4)
a4=A.rx(m?b2:b5)
a5=a4.length===0||p.gJ(r)?a3:A.qL(a3,a4)
a9=A.t1(a5,A.jD(m?"":b5))
return A.rE(A.l4(a9,m?"":b5),b5)},
i8:function i8(){},
k4:function k4(a){this.a=a},
k5:function k5(){},
jh:function jh(){},
iB:function iB(a,b){this.a=a
this.b=b},
pJ(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b6(r,new A.i3(b))
if(s>=0)return s}throw A.a(A.B("Proxy group "+b+" was not found in the configuration",null,null))},
fc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.C(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a2(d)
r=s.ac(d,new A.jN(),t.z).aF(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jO()),o)
if(!n.gJ(0)){s=t.N
m=A.ah(t.f.a(B.c.aa(B.a.D(n.gS(0),24),null)),s,s)
m.au(0,new A.jP(r))
for(s=B.q.gO(),s=s.gp(s);s.k();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jQ(l)),o)
j=l.a
if(m.E(j)&&!k.gJ(0)){i=k.gp(0)
if(!i.k())A.F(A.a4())
m.j(0,j,A.e(B.c.aa(J.bD(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gp(d);s.k();){h=s.gm()
l=J.E(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jR(f)),o)
if(!e.gJ(0)){i=e.gp(0)
if(!i.k())A.F(A.a4())
m.j(0,g,A.e(B.c.aa(J.bD(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.am.E(g)){l=A.c1(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
ly(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ko()),t.U).V(0,"\n")
return"# Mclash group-filters: "+B.c.ad(b,null)+"\n"+s},
jw(a){var s,r,q=t.g.a(t.S.a(A.C(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aT(q,new A.jA(),t.z).aF(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jB()),t.U)
if(!r.gp(0).k())return A.n(t.N,t.y)
q=A.ah(t.f.a(B.c.aa(B.a.D(r.gS(0),23),null)),t.N,t.y)
q.au(0,new A.jC(s))
return q},
nD(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kk()),t.U).V(0,"\n")
return"# Mclash group-direct: "+B.c.ad(b,null)+"\n"+s},
nb(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.C(a1)),a0=a.h(0,"proxies")
if(t.h.b(a0))s=a0.gl(a0)===0
else s=!0
if(s)throw A.a(B.A)
s=A.j(a0)
r=s.i("I<t.E,d>")
q=A.o(new A.I(a0,s.i("d(t.E)").a(new A.iA()),r),r.i("y.E"))
p=A.S(a1)
o=A.jw(a1)
for(s=new A.aj(a2,a2.r,a2.e,A.j(a2).i("aj<1>")),r=A.u(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.k();){l=s.d
k=A.pJ(a,l)
j=b.a(J.l(a.h(0,"proxy-groups"),k))
i=a2.h(0,l)
i.toString
h=B.a.u(i,"(?i)")
if(h)g=B.a.D(i,4)
else g=i
f=A.G(g,!h)
i=A.c([],m)
e=o.h(0,l)
if(e==null?l==="\ud83d\ude80 Domestic":e)i.push("DIRECT")
B.b.a9(i,new A.q(q,n.a(f.gdU()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gF().q(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0)e=o.h(0,l)===!1
else e=!1
if(e)throw A.a(A.B("No nodes match "+l+"; adjust the regex or select DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.G(["proxy-groups",k,"proxies"],l)}return A.ly(p.b,a2)},
i3:function i3(a){this.a=a},
jN:function jN(){},
jO:function jO(){},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
ko:function ko(){},
jA:function jA(){},
jB:function jB(){},
jC:function jC(a){this.a=a},
kk:function kk(){},
iA:function iA(){},
pI(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b6(r,new A.i2(b))
if(s>=0)return s}throw A.a(A.B("Proxy group "+b+" was not found in the configuration",null,null))},
rw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.C(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a2(d)
r=s.ac(d,new A.jI(),t.z).aF(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jJ()),o)
if(!n.gJ(0)){s=t.N
m=A.ah(t.f.a(B.c.aa(B.a.D(n.gS(0),24),null)),s,s)
m.au(0,new A.jK(r))
for(s=B.q.gO(),s=s.gp(s);s.k();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jL(l)),o)
j=l.a
if(m.E(j)&&!k.gJ(0)){i=k.gp(0)
if(!i.k())A.F(A.a4())
m.j(0,j,A.e(B.c.aa(J.bD(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gp(d);s.k();){h=s.gm()
l=J.E(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jM(f)),o)
if(!e.gJ(0)){i=e.gp(0)
if(!i.k())A.F(A.a4())
m.j(0,g,A.e(B.c.aa(J.bD(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.am.E(g)){l=A.c1(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
t2(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kn()),t.U).V(0,"\n")
return"# Mclash group-filters: "+B.c.ad(b,null)+"\n"+s},
rs(a){var s,r,q=t.g.a(t.S.a(A.C(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aT(q,new A.jx(),t.z).aF(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jy()),t.U)
if(!r.gp(0).k())return A.n(t.N,t.y)
q=A.ah(t.f.a(B.c.aa(B.a.D(r.gS(0),23),null)),t.N,t.y)
q.au(0,new A.jz(s))
return q},
ql(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=t.S,a0=a.a(A.C(a2)),a1=a0.h(0,"proxies")
if(t.h.b(a1))s=a1.gl(a1)===0&&!a4
else s=!0
if(s)throw A.a(B.A)
s=A.j(a1)
r=s.i("I<t.E,d>")
q=A.o(new A.I(a1,s.i("d(t.E)").a(new A.iz()),r),r.i("y.E"))
p=A.S(a2)
o=A.rs(a2)
for(s=new A.aj(a3,a3.r,a3.e,A.j(a3).i("aj<1>")),r=A.u(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s,l=!a4;s.k();){k=s.d
j=A.pI(a0,k)
i=a.a(J.l(a0.h(0,"proxy-groups"),j))
h=a3.h(0,k)
h.toString
g=B.a.u(h,"(?i)")
if(g)f=B.a.D(h,4)
else f=h
e=A.G(f,!g)
h=A.c([],m)
d=o.h(0,k)
if(d==null?k==="\ud83d\ude80 Domestic":d)h.push("DIRECT")
B.b.a9(h,new A.q(q,n.a(e.gdU()),r))
for(d=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],c=0;c<6;++c){b=d[c]
if(i.gF().q(0,b))p.I(0,["proxy-groups",j,b])}if(h.length===0&&o.h(0,k)===!1&&l)throw A.a(A.B("No nodes match "+k+"; adjust the regex or select DIRECT",null,null))
k=h.length===0?A.c(["DIRECT"],m):h
p.G(["proxy-groups",j,"proxies"],k)}return A.t2(p.b,a3)},
i2:function i2(a){this.a=a},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
kn:function kn(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(a){this.a=a},
iz:function iz(){},
nw(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.G("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ai)
s=t.S
r=s.a(A.C(a)).h(0,"proxies")
if(!t.h.b(r)||r.gl(r)===0)throw A.a(B.A)
q=A.S(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gl(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.r(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aZ(k)
if(!j.T(k,d)&&!j.T(k,"ws"))continue
i=j.T(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.ah(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.ah(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iT())
f.j(0,"Host",j.T(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iU()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iT:function iT(){},
iU:function iU(){},
rx(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.G("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ai)
s=t.S
r=s.a(A.C(a)).h(0,"proxies")
if(!t.h.b(r)||r.gl(r)===0)throw A.a(B.A)
q=A.S(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gl(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.r(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aZ(k)
if(!j.T(k,d)&&!j.T(k,"ws"))continue
i=j.T(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.ah(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.ah(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iR())
f.j(0,"Host",j.T(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iS()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iR:function iR(){},
iS:function iS(){},
rp(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
px(a,b,c,d,e){t._.a(a)
A.V(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
ns(a,b,c){A.qn(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
qW(a,b,c,d){var s,r,q,p,o,n=A.n(d,c.i("p<0>"))
for(s=c.i("K<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.c([],s)
n.j(0,p,o)
p=o}else p=o
J.dV(p,q)}return n},
om(a,b,c){var s,r,q,p,o=A.u(a),n=new J.b8(a,a.length,o.i("b8<1>"))
if(!n.k())throw A.a(A.bi("no elements"))
s=n.d
if(s==null)s=o.c.a(s)
for(o=o.c,r=1;n.k();r=q){q=r+1
p=n.d
s=b.$3(r,s,p==null?o.a(p):p)}return s},
nf(){var s,r,q,p,o=null
try{o=A.kP()}catch(s){if(t.g8.b(A.bC(s))){r=$.i1
if(r!=null)return r
throw s}else throw s}if(J.r(o,$.mQ)){r=$.i1
r.toString
return r}$.mQ=o
if($.lA()===$.dT())r=$.i1=o.eb(".").n(0)
else{q=o.cV()
p=q.length-1
r=$.i1=p===0?q:B.a.v(q,0,p)}return r},
nq(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
ni(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.b(a,b)
if(!A.nq(a.charCodeAt(b)))return q
s=b+1
if(!(s<p))return A.b(a,s)
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.v(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(!(s>=0&&s<p))return A.b(a,s)
if(a.charCodeAt(s)!==47)return q
return b+3},
r6(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gS(0)
for(r=A.aX(a,1,null,a.$ti.i("y.E")),q=r.$ti,r=new A.a5(r,r.gl(0),q.i("a5<y.E>")),q=q.i("y.E");r.k();){p=r.d
if(!J.r(p==null?q.a(p):p,s))return!1}return!0},
rD(a,b,c){var s=B.b.aq(a,null)
if(s<0)throw A.a(A.a3(A.m(a)+" contains no null elements."))
B.b.j(a,s,b)},
ny(a,b,c){var s=B.b.aq(a,b)
if(s<0)throw A.a(A.a3(A.m(a)+" contains no elements matching "+b.n(0)+"."))
B.b.j(a,s,null)},
qB(a,b){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
iW(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.af(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.aq(a,b)
while(r!==-1){q=r===0?0:B.a.ae(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.af(a,b,r+1)}return null},
t_(a,b,c,d){var s=c!=null
if(s)if(c<0)throw A.a(A.a8("position must be greater than or equal to 0."))
else if(c>a.length)throw A.a(A.a8("position must be less than or equal to the string length."))
if(s&&d!=null&&c+d>a.length)throw A.a(A.a8("position plus length must not go beyond the end of the string."))},
C(a){return A.f8(a,null,!1,null).a.ga5()},
f8(a,b,c,d){var s,r,q=A.m_(a,b,!1,d),p=q.bY()
if(p==null){s=q.d
return new A.dq(new A.ao(null,B.h,s),s)}r=q.bY()
if(r!=null)throw A.a(A.H("Only expected one document.",r.b))
return p},
rb(a){var s=A.m_(a,null,!1,null),r=A.c([],t.gw),q=s.bY()
while(q!=null){B.b.t(r,q)
q=s.bY()}return r},
rG(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.q(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
rF(a){var s,r=A.c(a.split(","),t.s)
if(B.a.N(B.b.gS(r))==="SUB-RULE"||r.length<2)return null
s=A.rG(r)
if(!(s>=0&&s<r.length))return A.b(r,s)
return B.a.N(r[s])},
ln(a){a=A.J(a,"# Mclash OpenWrt \u673a\u573a\u524d\u7f00: ","# Mclash OpenWrt subscription-prefixes: ")
a=A.J(a,"# Mclash OpenWrt \u673a\u573a\u540d\u79f0: ","# Mclash OpenWrt subscription-names: ")
a=A.J(a,"# Mclash OpenWrt \u673a\u573a\u7528\u91cf: ","# Mclash OpenWrt subscription-usage: ")
a=A.J(a,"# Mclash OpenWrt \u8ba2\u9605\u94fe\u63a5: ","# Mclash OpenWrt subscription-urls: ")
a=A.J(a,"# Mclash OpenWrt \u63a5\u7ba1: ","# Mclash OpenWrt capture: ")
a=A.J(a,"# Mclash OpenWrt \u63a7\u5236: true","# Mclash OpenWrt controller: true")
a=A.J(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ","# Mclash group-filters: ")
a=A.J(a,"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ","# Mclash group-direct: ")
a=A.J(a,"# Mclash \u56fd\u5185\u6b63\u5219: ","# Mclash domestic-filter: ")
a=A.J(a,"# Mclash \u56fd\u5916\u6b63\u5219: ","# Mclash foreign-filter: ")
a=A.J(a,"# Mclash \u5168\u5c40\u94fe\u8def: ","# Mclash global-chain: ")
a=A.J(a,"# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash front-chain ")
a=A.J(a,"# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash back-chain ")
a=A.J(a,"# Mclash \u624b\u52a8\u8282\u70b9: ","# Mclash manual-nodes: ")
a=A.J(a,"# Mclash \u8282\u70b9\u94fe\u8def: ","# Mclash node-chains: ")
a=A.J(a,"# Mclash \u8282\u70b9\u94fe\u8def ","# Mclash node-chain ")
a=A.J(a,"# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash chain ")
a=A.J(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ","# Mclash chain-groups: ")
a=A.J(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ","# Mclash chain-settings: ")
a=A.J(a,"# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605","# Mclash default subscription")
a=A.J(a,"# Mclash \u8ba2\u9605\u7528\u91cf: ","# Mclash subscription-usage: ")
a=A.J(a,"# Mclash \u8ba2\u9605\u914d\u7f6e\u6a21\u677f","# Mclash subscription configuration template")
a=A.J(a,"# Mclash \u4ee3\u7406\u7ec4\u300c","# Mclash proxy group [")
a=A.J(a,"\ud83d\ude80 \u56fd\u5185","\ud83d\ude80 Domestic")
a=A.J(a,"\ud83c\udf0d \u56fd\u5916","\ud83c\udf0d Foreign")
a=A.J(a,"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3","\ud83d\udd17 Back-chain entry")
return A.J(a,"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9","\ud83d\udd17 Proxy chain")}},B={}
var w=[A,J,B]
var $={}
A.kD.prototype={}
J.e9.prototype={
T(a,b){return a===b},
gY(a){return A.ep(a)},
n(a){return"Instance of '"+A.eq(a)+"'"},
gaN(a){return A.b6(A.l0(this))}}
J.eb.prototype={
n(a){return String(a)},
gY(a){return a?519018:218159},
gaN(a){return A.b6(t.y)},
$iat:1,
$ik:1}
J.cV.prototype={
T(a,b){return null==b},
n(a){return"null"},
gY(a){return 0},
$iat:1,
$ibe:1}
J.cY.prototype={$iaM:1}
J.bs.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.en.prototype={}
J.bP.prototype={}
J.br.prototype={
n(a){var s=a[$.nF()]
if(s==null)s=a[$.lz()]
if(s==null)return this.em(a)
return"JavaScript function for "+J.am(s)},
$ib9:1}
J.cX.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.cZ.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.K.prototype={
t(a,b){A.u(a).c.a(b)
a.$flags&1&&A.W(a,29)
a.push(b)},
be(a,b){A.V(b)
a.$flags&1&&A.W(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.fZ(b,null))
return a.splice(b,1)[0]},
ba(a,b,c){var s
A.u(a).c.a(c)
a.$flags&1&&A.W(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.fZ(b,null))
a.splice(b,0,c)},
cM(a,b,c){var s,r,q
A.u(a).i("f<1>").a(c)
a.$flags&1&&A.W(a,"insertAll",2)
s=a.length
A.cm(b,0,s,"index")
r=c.length
a.length=s+r
q=b+r
this.al(a,q,a.length,a,b)
this.bh(a,b,q,c)},
e8(a){a.$flags&1&&A.W(a,"removeLast",1)
if(a.length===0)throw A.a(A.dN(a,-1))
return a.pop()},
au(a,b){A.u(a).i("k(1)").a(b)
a.$flags&1&&A.W(a,16)
this.dA(a,b,!0)},
dA(a,b,c){var s,r,q,p,o
A.u(a).i("k(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.a(A.Q(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
aK(a,b){var s=A.u(a)
return new A.q(a,s.i("k(1)").a(b),s.i("q<1>"))},
a9(a,b){var s
A.u(a).i("f<1>").a(b)
a.$flags&1&&A.W(a,"addAll",2)
if(Array.isArray(b)){this.ew(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gm())},
ew(a,b){var s,r
t.J.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.Q(a))
for(r=0;r<s;++r)a.push(b[r])},
bv(a){a.$flags&1&&A.W(a,"clear","clear")
a.length=0},
an(a,b){var s,r
A.u(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.Q(a))}},
ac(a,b,c){var s=A.u(a)
return new A.I(a,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("I<1,2>"))},
V(a,b){var s,r=A.aO(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.m(a[s]))
return r.join(b)},
e_(a){return this.V(a,"")},
a3(a,b){return A.aX(a,0,A.f5(b,"count",t.p),A.u(a).c)},
ao(a,b){return A.aX(a,b,null,A.u(a).c)},
bX(a,b,c,d){var s,r,q
d.a(b)
A.u(a).a8(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.Q(a))}return r},
U(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gS(a){if(a.length>0)return a[0]
throw A.a(A.a4())},
gK(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.a4())},
al(a,b,c,d,e){var s,r,q,p
A.u(a).i("f<1>").a(d)
a.$flags&2&&A.W(a,5)
A.bf(b,c,a.length)
s=c-b
if(s===0)return
A.ae(e,"skipCount")
r=d
q=J.E(r)
if(e+s>q.gl(r))throw A.a(A.lT())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,e+p)},
bh(a,b,c,d){return this.al(a,b,c,d,0)},
bw(a,b,c,d){var s
a.$flags&2&&A.W(a,"fillRange")
A.bf(b,c,a.length)
A.u(a).c.a(d)
for(s=b;s<c;++s)a[s]=d},
R(a,b){var s,r
A.u(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.Q(a))}return!1},
aR(a,b){var s,r
A.u(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.Q(a))}return!0},
c2(a,b){var s,r,q,p,o,n=A.u(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.W(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aL()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.qs(b,2))
if(p>0)this.fl(a,p)},
fl(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
aq(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.r(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.r(a[s],b))return!0
return!1},
gJ(a){return a.length===0},
gaI(a){return a.length!==0},
n(a){return A.fF(a,"[","]")},
aW(a,b){var s=A.c(a.slice(0),A.u(a))
return s},
aV(a){return this.aW(a,!0)},
gp(a){return new J.b8(a,a.length,A.u(a).i("b8<1>"))},
gY(a){return A.ep(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.W(a,"set length","change the length of")
if(b>a.length)A.u(a).c.a(null)
a.length=b},
h(a,b){A.V(b)
if(!(b>=0&&b<a.length))throw A.a(A.dN(a,b))
return a[b]},
j(a,b,c){A.u(a).c.a(c)
a.$flags&2&&A.W(a)
if(!(b>=0&&b<a.length))throw A.a(A.dN(a,b))
a[b]=c},
b6(a,b){var s
A.u(a).i("k(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
h2(a,b){var s,r
A.u(a).i("k(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.b(a,r)
if(b.$1(a[r]))return r}return-1},
$iw:1,
$if:1,
$ip:1}
J.ea.prototype={
hf(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eq(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.fG.prototype={}
J.b8.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a_(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iL:1}
J.cW.prototype={
aC(a,b){var s
A.mN(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcO(b)
if(this.gcO(a)===s)return 0
if(this.gcO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcO(a){return a===0?1/a<0:a<0},
hd(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.a9(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.b(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.F(A.N("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.b(p,1)
s=p[1]
if(3>=r)return A.b(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.a.aj("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
c1(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bt(a,b){return(a|0)===a?a/b|0:this.fD(a,b)},
fD(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.N("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
b3(a,b){var s
if(a>0)s=this.dG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fz(a,b){if(0>b)throw A.a(A.dM(b))
return this.dG(a,b)},
dG(a,b){return b>31?0:a>>>b},
gaN(a){return A.b6(t.H)},
$ibB:1}
J.cU.prototype={
gaN(a){return A.b6(t.p)},
$iat:1,
$ih:1}
J.ec.prototype={
gaN(a){return A.b6(t.i)},
$iat:1}
J.bq.prototype={
bS(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.eU(b,a,c)},
bu(a,b){return this.bS(a,b,0)},
by(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.b(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.cq(c,a)},
aG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.D(a,r-s)},
cU(a,b,c){A.cm(0,0,a.length,"startIndex")
return A.rN(a,b,c,0)},
bi(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.b0){s=b.e
s=!(s==null?b.e=b.eC():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.eG(a,b)}},
aU(a,b,c,d){var s=A.bf(b,c,a.length)
return A.lv(a,b,s,d)},
eG(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.kv(b,a),s=s.gp(s),r=0,q=1;s.k();){p=s.gm()
o=p.gC()
n=p.gH()
q=n-o
if(q===0&&r===o)continue
B.b.t(m,this.v(a,r,o))
r=n}if(r<a.length||q>0)B.b.t(m,this.D(a,r))
return m},
a4(a,b,c){var s
t.eh.a(b)
if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.o3(b,a,c)!=null},
u(a,b){return this.a4(a,b,0)},
v(a,b,c){return a.substring(b,A.bf(b,c,a.length))},
D(a,b){return this.v(a,b,null)},
N(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.op(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.lW(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
he(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.b(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.lW(r,s))},
aj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.aQ)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
h4(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aj(" ",s)},
af(a,b,c){var s,r,q,p
if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string")return a.indexOf(b,c)
if(b instanceof A.b0){s=b.ci(a,c)
return s==null?-1:s.b.index}for(r=a.length,q=J.bA(b),p=c;p<=r;++p)if(q.by(b,a,p)!=null)return p
return-1},
aq(a,b){return this.af(a,b,0)},
ae(a,b,c){var s,r,q
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string"){s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)}for(s=J.bA(b),q=c;q>=0;--q)if(s.by(b,a,q)!=null)return q
return-1},
bd(a,b){return this.ae(a,b,null)},
q(a,b){return A.rI(a,b,0)},
aC(a,b){var s
A.e(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gY(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaN(a){return A.b6(t.N)},
gl(a){return a.length},
h(a,b){A.V(b)
if(!(b>=0&&b<a.length))throw A.a(A.dN(a,b))
return a[b]},
$iat:1,
$ick:1,
$id:1}
A.d1.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.aH.prototype={
gl(a){return this.a.length},
h(a,b){var s
A.V(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.h2.prototype={}
A.w.prototype={}
A.y.prototype={
gp(a){var s=this
return new A.a5(s,s.gl(s),A.j(s).i("a5<y.E>"))},
gJ(a){return this.gl(this)===0},
gS(a){if(this.gl(this)===0)throw A.a(A.a4())
return this.U(0,0)},
gK(a){var s=this
if(s.gl(s)===0)throw A.a(A.a4())
return s.U(0,s.gl(s)-1)},
q(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(J.r(r.U(0,s),b))return!0
if(q!==r.gl(r))throw A.a(A.Q(r))}return!1},
aR(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gl(q)
for(r=0;r<s;++r){if(!b.$1(q.U(0,r)))return!1
if(s!==q.gl(q))throw A.a(A.Q(q))}return!0},
R(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gl(q)
for(r=0;r<s;++r){if(b.$1(q.U(0,r)))return!0
if(s!==q.gl(q))throw A.a(A.Q(q))}return!1},
bW(a,b){var s,r,q,p=this
A.j(p).i("k(y.E)").a(b)
s=p.gl(p)
for(r=0;r<s;++r){q=p.U(0,r)
if(b.$1(q))return q
if(s!==p.gl(p))throw A.a(A.Q(p))}throw A.a(A.a4())},
V(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.U(0,0))
if(o!==p.gl(p))throw A.a(A.Q(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.U(0,q))
if(o!==p.gl(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.U(0,q))
if(o!==p.gl(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}},
aK(a,b){return this.bj(0,A.j(this).i("k(y.E)").a(b))},
ac(a,b,c){var s=A.j(this)
return new A.I(this,s.a8(c).i("1(y.E)").a(b),s.i("@<y.E>").a8(c).i("I<1,2>"))},
h8(a,b){var s,r,q,p=this
A.j(p).i("y.E(y.E,y.E)").a(b)
s=p.gl(p)
if(s===0)throw A.a(A.a4())
r=p.U(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.U(0,q))
if(s!==p.gl(p))throw A.a(A.Q(p))}return r},
ao(a,b){return A.aX(this,b,null,A.j(this).i("y.E"))},
aW(a,b){var s=A.o(this,A.j(this).i("y.E"))
return s},
aV(a){return this.aW(0,!0)},
aF(a){var s,r=this,q=A.kG(A.j(r).i("y.E"))
for(s=0;s<r.gl(r);++s)q.t(0,r.U(0,s))
return q}}
A.bN.prototype={
ev(a,b,c,d){var s,r=this.b
A.ae(r,"start")
s=this.c
if(s!=null){A.ae(s,"end")
if(r>s)throw A.a(A.a9(r,0,s,"start",null))}},
geH(){var s=J.a6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfB(){var s=J.a6(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.a6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
U(a,b){var s=this,r=s.gfB()+b
if(b<0||r>=s.geH())throw A.a(A.e7(b,s.gl(0),s,null,"index"))
return J.kw(s.a,r)},
ao(a,b){var s,r,q=this
A.ae(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bF(q.$ti.i("bF<1>"))
return A.aX(q.a,s,r,q.$ti.c)},
a3(a,b){var s,r,q,p=this
A.ae(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.aX(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.aX(p.a,r,q,p.$ti.c)}},
aW(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.E(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.kB(0,n):J.lU(0,n)}r=A.aO(s,m.U(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.b.j(r,q,m.U(n,o+q))
if(m.gl(n)<l)throw A.a(A.Q(p))}return r},
aV(a){return this.aW(0,!0)}}
A.a5.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.E(q),o=p.gl(q)
if(r.b!==o)throw A.a(A.Q(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.U(q,s);++r.c
return!0},
$iL:1}
A.bc.prototype={
gp(a){return new A.d3(J.D(this.a),this.b,A.j(this).i("d3<1,2>"))},
gl(a){return J.a6(this.a)},
gJ(a){return J.c7(this.a)},
gS(a){return this.b.$1(J.lF(this.a))},
gK(a){return this.b.$1(J.kx(this.a))},
U(a,b){return this.b.$1(J.kw(this.a,b))}}
A.bE.prototype={$iw:1}
A.d3.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iL:1}
A.I.prototype={
gl(a){return J.a6(this.a)},
U(a,b){return this.b.$1(J.kw(this.a,b))}}
A.q.prototype={
gp(a){return new A.bk(J.D(this.a),this.b,this.$ti.i("bk<1>"))},
ac(a,b,c){var s=this.$ti
return new A.bc(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bc<1,2>"))}}
A.bk.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iL:1}
A.aB.prototype={
gp(a){return new A.cT(J.D(this.a),this.b,B.a4,this.$ti.i("cT<1,2>"))}}
A.cT.prototype={
gm(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.D(r.$1(s.gm()))
q.c=p}else return!1}q.d=q.c.gm()
return!0},
$iL:1}
A.bg.prototype={
ao(a,b){A.cL(b,"count",t.p)
A.ae(b,"count")
return new A.bg(this.a,this.b+b,A.j(this).i("bg<1>"))},
gp(a){var s=this.a
return new A.dc(s.gp(s),this.b,A.j(this).i("dc<1>"))}}
A.cd.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
ao(a,b){A.cL(b,"count",t.p)
A.ae(b,"count")
return new A.cd(this.a,this.b+b,this.$ti)},
$iw:1}
A.dc.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gm(){return this.a.gm()},
$iL:1}
A.bF.prototype={
gp(a){return B.a4},
gJ(a){return!0},
gl(a){return 0},
gS(a){throw A.a(A.a4())},
gK(a){throw A.a(A.a4())},
U(a,b){throw A.a(A.a9(b,0,0,"index",null))},
q(a,b){return!1},
aR(a,b){this.$ti.i("k(1)").a(b)
return!0},
R(a,b){this.$ti.i("k(1)").a(b)
return!1},
bW(a,b){this.$ti.i("k(1)").a(b)
throw A.a(A.a4())},
V(a,b){return""},
aK(a,b){this.$ti.i("k(1)").a(b)
return this},
ac(a,b,c){this.$ti.a8(c).i("1(2)").a(b)
return new A.bF(c.i("bF<0>"))},
ao(a,b){A.ae(b,"count")
return this},
aW(a,b){var s=J.kB(0,this.$ti.c)
return s},
aV(a){return this.aW(0,!0)}}
A.cS.prototype={
k(){return!1},
gm(){throw A.a(A.a4())},
$iL:1}
A.dn.prototype={
gp(a){return new A.dp(J.D(this.a),this.$ti.i("dp<1>"))}}
A.dp.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gm()))return!0
return!1},
gm(){return this.$ti.c.a(this.a.gm())},
$iL:1}
A.ba.prototype={
gl(a){var s=this.a
return s.gl(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gS(a){var s=this.a
return new A.b4(this.b,s.gS(s))},
U(a,b){return new A.b4(b+this.b,this.a.U(0,b))},
q(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b5(s)){A.V(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.eh()
n=this.a.ao(0,p-this.b)
q=n.gp(n)
return q.k()&&J.r(q.gm(),o)}return!1},
ao(a,b){A.cL(b,"count",t.p)
A.ae(b,"count")
return new A.ba(this.a.ao(0,b),b+this.b,A.j(this).i("ba<1>"))},
gp(a){var s=this.a
return new A.bG(s.gp(s),this.b,A.j(this).i("bG<1>"))}}
A.cc.prototype={
gK(a){var s,r=this.a,q=r.gl(r)
if(q<=0)throw A.a(A.a4())
s=r.gK(r)
if(q!==r.gl(r))throw A.a(A.Q(this))
return new A.b4(q-1+this.b,s)},
q(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b5(s)){A.V(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.eh()
q=p-this.b
n=this.a
return q<n.gl(n)&&J.r(n.U(0,q),o)}return!1},
ao(a,b){A.cL(b,"count",t.p)
A.ae(b,"count")
return new A.cc(this.a.ao(0,b),this.b+b,this.$ti)},
$iw:1}
A.bG.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gm(){var s=this.c
return s>=0?new A.b4(this.b+s,this.a.gm()):A.F(A.a4())},
$iL:1}
A.aL.prototype={
sl(a,b){throw A.a(A.N("Cannot change the length of a fixed-length list"))},
t(a,b){A.aa(a).i("aL.E").a(b)
throw A.a(A.N("Cannot add to a fixed-length list"))},
au(a,b){A.aa(a).i("k(aL.E)").a(b)
throw A.a(A.N("Cannot remove from a fixed-length list"))}}
A.ax.prototype={
j(a,b,c){A.j(this).i("ax.E").a(c)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.a(A.N("Cannot change the length of an unmodifiable list"))},
t(a,b){A.j(this).i("ax.E").a(b)
throw A.a(A.N("Cannot add to an unmodifiable list"))},
au(a,b){A.j(this).i("k(ax.E)").a(b)
throw A.a(A.N("Cannot remove from an unmodifiable list"))},
c2(a,b){A.j(this).i("h(ax.E,ax.E)?").a(b)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
al(a,b,c,d,e){A.j(this).i("f<ax.E>").a(d)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
bh(a,b,c,d){return this.al(0,b,c,d,0)}}
A.cr.prototype={}
A.eT.prototype={
gl(a){return J.a6(this.a)},
U(a,b){var s=J.a6(this.a)
if(0>b||b>=s)A.F(A.e7(b,s,this,null,"index"))
return b}}
A.d2.prototype={
h(a,b){return this.E(b)?J.l(this.a,A.V(b)):null},
gl(a){return J.a6(this.a)},
gag(){return A.aX(this.a,0,null,this.$ti.c)},
gF(){return new A.eT(this.a)},
gJ(a){return J.c7(this.a)},
aY(a){return J.bo(this.a,a)},
E(a){return A.b5(a)&&a>=0&&a<J.a6(this.a)},
an(a,b){var s,r,q,p
this.$ti.i("~(h,1)").a(b)
s=this.a
r=J.E(s)
q=r.gl(s)
for(p=0;p<q;++p){b.$2(p,r.h(s,p))
if(q!==r.gl(s))throw A.a(A.Q(s))}}}
A.da.prototype={
gl(a){return J.a6(this.a)},
U(a,b){var s=this.a,r=J.E(s)
return r.U(s,r.gl(s)-1-b)}}
A.b4.prototype={$r:"+(1,2)",$s:1}
A.cx.prototype={$r:"+column,type(1,2)",$s:2}
A.bZ.prototype={$r:"+compactCharOffset,lineEndingIndex(1,2)",$s:3}
A.cy.prototype={$r:"+end,start(1,2)",$s:4}
A.dA.prototype={$r:"+indent,trailingBreaks(1,2)",$s:5}
A.cz.prototype={$r:"+nearestLineEnding,nextNodeColStart(1,2)",$s:6}
A.dB.prototype={$r:"+index,keyNode,valueNode(1,2,3)",$s:7}
A.cO.prototype={}
A.cN.prototype={
gJ(a){return this.gl(this)===0},
n(a){return A.kI(this)},
j(a,b,c){var s=A.j(this)
s.c.a(b)
s.y[1].a(c)
A.lP()},
I(a,b){A.lP()},
gO(){return new A.bx(this.fU(),A.j(this).i("bx<M<1,2>>"))},
fU(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gF(),o=o.gp(o),n=A.j(s),m=n.y[1],n=n.i("M<1,2>")
case 2:if(!o.k()){r=3
break}l=o.gm()
k=s.h(0,l)
r=4
return a.b=new A.M(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ix:1}
A.aJ.prototype={
gl(a){return this.b.length},
gdj(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aY(a){return B.b.q(this.b,a)},
E(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.E(b))return null
return this.b[this.a[b]]},
an(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gdj()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gF(){return new A.bV(this.gdj(),this.$ti.i("bV<1>"))},
gag(){return new A.bV(this.b,this.$ti.i("bV<2>"))}}
A.bV.prototype={
gl(a){return this.a.length},
gJ(a){return 0===this.a.length},
gp(a){var s=this.a
return new A.bW(s,s.length,this.$ti.i("bW<1>"))}}
A.bW.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iL:1}
A.cP.prototype={
t(a,b){A.j(this).c.a(b)
A.lQ()},
I(a,b){A.lQ()}}
A.cQ.prototype={
gl(a){return this.b},
gJ(a){return this.b===0},
gp(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bW(s,s.length,r.$ti.i("bW<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.e8.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.cf&&this.a.T(0,b.a)&&A.lg(this)===A.lg(b)},
gY(a){return A.ej(this.a,A.lg(this),B.n,B.n)},
n(a){var s=B.b.V([A.b6(this.$ti.c)],", ")
return this.a.n(0)+" with "+("<"+s+">")}}
A.cf.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.r5(A.iE(this.a),this.$ti)}}
A.db.prototype={}
A.h6.prototype={
aM(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.d6.prototype={
n(a){return"Null check operator used on a null value"}}
A.ed.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eB.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ei.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iaA:1}
A.as.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nA(r==null?"unknown":r)+"'"},
$ib9:1,
ghi(){return this},
$C:"$1",
$R:1,
$D:null}
A.dZ.prototype={$C:"$0",$R:0}
A.e_.prototype={$C:"$2",$R:2}
A.ez.prototype={}
A.ex.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nA(s)+"'"}}
A.ca.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ca))return!1
return this.$_target===b.$_target&&this.a===b.a},
gY(a){return(A.dP(this.a)^A.ep(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eq(this.a)+"'")}}
A.er.prototype={
n(a){return"RuntimeError: "+this.a}}
A.aC.prototype={
gl(a){return this.a},
gJ(a){return this.a===0},
gF(){return new A.ak(this,A.j(this).i("ak<1>"))},
gag(){return new A.aE(this,A.j(this).i("aE<2>"))},
gO(){return new A.R(this,A.j(this).i("R<1,2>"))},
E(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.dV(a)},
dV(a){var s=this.d
if(s==null)return!1
return this.bc(s[this.bb(a)],a)>=0},
aY(a){return new A.ak(this,A.j(this).i("ak<1>")).R(0,new A.fI(this,a))},
a9(a,b){A.j(this).i("x<1,2>").a(b).an(0,new A.fH(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.dW(b)},
dW(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bb(a)]
r=this.bc(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.j(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cZ(s==null?q.b=q.cm():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cZ(r==null?q.c=q.cm():r,b,c)}else q.dY(b,c)},
dY(a,b){var s,r,q,p,o=this,n=A.j(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cm()
r=o.bb(a)
q=s[r]
if(q==null)s[r]=[o.cn(a,b)]
else{p=o.bc(q,a)
if(p>=0)q[p].b=b
else q.push(o.cn(a,b))}},
e5(a,b){var s,r,q=this,p=A.j(q)
p.c.a(a)
p.i("2()").a(b)
if(q.E(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
I(a,b){var s=this
if(typeof b=="string")return s.dz(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.dz(s.c,b)
else return s.dX(b)},
dX(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bb(a)
r=n[s]
q=o.bc(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dN(p)
if(r.length===0)delete n[s]
return p.b},
bv(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cl()}},
an(a,b){var s,r,q=this
A.j(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.Q(q))
s=s.c}},
cZ(a,b,c){var s,r=A.j(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cn(b,c)
else s.b=c},
dz(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dN(s)
delete a[b]
return s.b},
cl(){this.r=this.r+1&1073741823},
cn(a,b){var s=this,r=A.j(s),q=new A.fM(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cl()
return q},
dN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cl()},
bb(a){return J.ac(a)&1073741823},
bc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.r(a[r].a,b))return r
return-1},
n(a){return A.kI(this)},
cm(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifL:1}
A.fI.prototype={
$1(a){var s=this.a
return J.r(s.h(0,A.j(s).c.a(a)),this.b)},
$S(){return A.j(this.a).i("k(1)")}}
A.fH.prototype={
$2(a,b){var s=this.a,r=A.j(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.j(this.a).i("~(1,2)")}}
A.fM.prototype={}
A.ak.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gp(a){var s=this.a
return new A.aj(s,s.r,s.e,this.$ti.i("aj<1>"))},
q(a,b){return this.a.E(b)}}
A.aj.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iL:1}
A.aE.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gp(a){var s=this.a
return new A.aD(s,s.r,s.e,this.$ti.i("aD<1>"))}}
A.aD.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iL:1}
A.R.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gp(a){var s=this.a
return new A.bb(s,s.r,s.e,this.$ti.i("bb<1,2>"))}}
A.bb.prototype={
gm(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.M(s.a,s.b,r.$ti.i("M<1,2>"))
r.c=s.c
return!0}},
$iL:1}
A.d_.prototype={
bb(a){return A.dP(a)&1073741823},
bc(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j4.prototype={
$1(a){return this.a(a)},
$S:1}
A.j5.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.j6.prototype={
$1(a){return this.a(A.e(a))},
$S:25}
A.az.prototype={
n(a){return this.dK(!1)},
dK(a){var s,r,q,p,o,n=this.eN(),m=this.cj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.m5(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
eN(){var s,r=this.$s
while($.hC.length<=r)B.b.t($.hC,null)
s=$.hC[r]
if(s==null){s=this.eB()
B.b.j($.hC,r,s)}return s},
eB(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.kA(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.j(j,q,r[s])}}return A.kH(j,k)}}
A.aY.prototype={
cj(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.aY&&this.$s===b.$s&&J.r(this.a,b.a)&&J.r(this.b,b.b)},
gY(a){return A.ej(this.$s,this.a,this.b,B.n)}}
A.cw.prototype={
cj(){return[this.a,this.b,this.c]},
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.cw&&s.$s===b.$s&&J.r(s.a,b.a)&&J.r(s.b,b.b)&&J.r(s.c,b.c)},
gY(a){var s=this
return A.ej(s.$s,s.a,s.b,s.c)}}
A.b0.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdl(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.kC(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gf1(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.kC(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
eC(){var s,r=this.a
if(!B.a.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fX(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cv(s)},
fY(a){A.e(a)
return this.b.test(a)},
bS(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.eL(this,b,c)},
bu(a,b){return this.bS(0,b,0)},
ci(a,b){var s,r=this.gdl()
if(r==null)r=A.f2(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cv(s)},
eI(a,b){var s,r=this.gf1()
if(r==null)r=A.f2(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cv(s)},
by(a,b,c){if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,null,null))
return this.eI(b,c)},
$ick:1,
$iox:1}
A.cv.prototype={
gC(){return this.b.index},
gH(){var s=this.b
return s.index+s[0].length},
h(a,b){var s
A.V(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]},
$ib1:1,
$id9:1}
A.eL.prototype={
gp(a){return new A.dr(this.a,this.b,this.c)}}
A.dr.prototype={
gm(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.ci(l,s)
if(p!=null){m.d=p
o=p.gH()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.b(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.b(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iL:1}
A.cq.prototype={
gH(){return this.a+this.c.length},
h(a,b){A.V(b)
if(b!==0)throw A.a(A.fZ(b,null))
return this.c},
$ib1:1,
gC(){return this.a}}
A.eU.prototype={
gp(a){return new A.eV(this.a,this.b,this.c)},
gS(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.cq(r,s)
throw A.a(A.a4())}}
A.eV.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cq(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iL:1}
A.hr.prototype={
bL(){var s=this.b
if(s===this)throw A.a(new A.d1("Local '' has not been initialized."))
return s}}
A.d4.prototype={
eQ(a,b,c,d){var s=A.a9(b,0,c,d,null)
throw A.a(s)},
d_(a,b,c,d){if(b>>>0!==b||b>c)this.eQ(a,b,c,d)}}
A.b2.prototype={
gl(a){return a.length},
$ici:1}
A.bd.prototype={
j(a,b,c){A.V(c)
a.$flags&2&&A.W(a)
A.i_(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){var s,r,q,p
t.hb.a(d)
a.$flags&2&&A.W(a,5)
if(t.eB.b(d)){s=a.length
this.d_(a,b,s,"start")
this.d_(a,c,s,"end")
if(b>c)A.F(A.a9(b,0,c,null,null))
r=c-b
if(e<0)A.F(A.a3(e))
q=d.length
if(q-e<r)A.F(A.bi("Not enough elements"))
p=e!==0||q!==r?d.subarray(e,e+r):d
a.set(p,b)
return}this.en(a,b,c,d,e)},
bh(a,b,c,d){return this.al(a,b,c,d,0)},
$iw:1,
$if:1,
$ip:1}
A.eh.prototype={
gaN(a){return B.cP},
h(a,b){A.V(b)
A.i_(b,a,a.length)
return a[b]},
$iat:1}
A.d5.prototype={
gaN(a){return B.cR},
h(a,b){A.V(b)
A.i_(b,a,a.length)
return a[b]},
c5(a,b,c){return new Uint32Array(a.subarray(b,A.mP(b,c,a.length)))},
$iat:1,
$ikN:1}
A.bI.prototype={
gaN(a){return B.cS},
gl(a){return a.length},
h(a,b){A.V(b)
A.i_(b,a,a.length)
return a[b]},
$iat:1,
$ibI:1,
$ikO:1}
A.dx.prototype={}
A.dy.prototype={}
A.aV.prototype={
i(a){return A.dH(v.typeUniverse,this,a)},
a8(a){return A.mu(v.typeUniverse,this,a)}}
A.eP.prototype={}
A.hD.prototype={
n(a){return A.au(this.a,null)}}
A.eN.prototype={
n(a){return this.a}}
A.cA.prototype={}
A.dD.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
fm(a,b){var s,r,q
a=A.V(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
k(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.k()){o.b=s.gm()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.fm(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.mp
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.mp
throw n
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.bi("sync*"))}return!1},
hj(a){var s,r,q=this
if(a instanceof A.bx){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.b.t(r,q.a)
q.a=s
return 2}else{q.d=J.D(a)
return 2}},
$iL:1}
A.bx.prototype={
gp(a){return new A.dD(this.a(),this.$ti.i("dD<1>"))}}
A.du.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ej(b)},
j(a,b,c){var s=this.$ti
this.el(s.c.a(b),s.y[1].a(c))},
E(a){if(!this.y.$1(a))return!1
return this.ei(a)},
I(a,b){if(!this.y.$1(b))return null
return this.ek(b)},
bb(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
bc(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(q.$2(r.a(a[p].a),r.a(b)))return p
return-1}}
A.hA.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.bU.prototype={
bK(){return new A.bU(A.j(this).i("bU<1>"))},
gp(a){return new A.dt(this,this.eA(),A.j(this).i("dt<1>"))},
gl(a){return this.a},
gJ(a){return this.a===0},
gaI(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cb(b)},
cb(a){var s=this.d
if(s==null)return!1
return this.aQ(s[this.aP(a)],a)>=0},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bk(s==null?q.b=A.kQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bk(r==null?q.c=A.kQ():r,b)}else return q.c7(b)},
c7(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kQ()
r=p.aP(a)
q=s[r]
if(q==null)s[r]=[a]
else{if(p.aQ(q,a)>=0)return!1
q.push(a)}++p.a
p.e=null
return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bl(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bl(s.c,b)
else return s.cs(b)},
cs(a){var s,r,q,p=this,o=p.d
if(o==null)return!1
s=p.aP(a)
r=o[s]
q=p.aQ(r,a)
if(q<0)return!1;--p.a
p.e=null
r.splice(q,1)
if(0===r.length)delete o[s]
return!0},
eA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aO(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;++j){h[r]=l[j];++r}}}return i.e=h},
bk(a,b){A.j(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
bl(a,b){if(a!=null&&a[b]!=null){delete a[b];--this.a
this.e=null
return!0}else return!1},
aP(a){return J.ac(a)&1073741823},
aQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.r(a[r],b))return r
return-1}}
A.ct.prototype={
bK(){return new A.ct(this.$ti)},
aP(a){return A.dP(a)&1073741823},
aQ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dt.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.Q(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iL:1}
A.ay.prototype={
bK(){return new A.ay(A.j(this).i("ay<1>"))},
gp(a){var s=this,r=new A.bX(s,s.r,A.j(s).i("bX<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gJ(a){return this.a===0},
gaI(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.M.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.M.a(r[b])!=null}else return this.cb(b)},
cb(a){var s=this.d
if(s==null)return!1
return this.aQ(s[this.aP(a)],a)>=0},
gS(a){var s=this.e
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
gK(a){var s=this.f
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bk(s==null?q.b=A.kS():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bk(r==null?q.c=A.kS():r,b)}else return q.c7(b)},
c7(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kS()
r=p.aP(a)
q=s[r]
if(q==null)s[r]=[p.ca(a)]
else{if(p.aQ(q,a)>=0)return!1
q.push(p.ca(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bl(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bl(s.c,b)
else return s.cs(b)},
cs(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aP(a)
r=n[s]
q=o.aQ(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d1(p)
return!0},
bk(a,b){A.j(this).c.a(b)
if(t.M.a(a[b])!=null)return!1
a[b]=this.ca(b)
return!0},
bl(a,b){var s
if(a==null)return!1
s=t.M.a(a[b])
if(s==null)return!1
this.d1(s)
delete a[b]
return!0},
d0(){this.r=this.r+1&1073741823},
ca(a){var s,r=this,q=new A.eS(A.j(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d0()
return q},
d1(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d0()},
aP(a){return J.ac(a)&1073741823},
aQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.r(a[r].a,b))return r
return-1},
$ikF:1}
A.cu.prototype={
bK(){return new A.cu(this.$ti)},
aP(a){return A.dP(a)&1073741823},
aQ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eS.prototype={}
A.bX.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.Q(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iL:1}
A.dk.prototype={
gl(a){return this.a.length},
h(a,b){var s
A.V(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.fO.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:29}
A.t.prototype={
gp(a){return new A.a5(a,this.gl(a),A.aa(a).i("a5<t.E>"))},
U(a,b){return this.h(a,b)},
an(a,b){var s,r
A.aa(a).i("~(t.E)").a(b)
s=this.gl(a)
for(r=0;r<s;++r){b.$1(this.h(a,r))
if(s!==this.gl(a))throw A.a(A.Q(a))}},
gJ(a){return this.gl(a)===0},
gaI(a){return this.gl(a)!==0},
gS(a){if(this.gl(a)===0)throw A.a(A.a4())
return this.h(a,0)},
gK(a){if(this.gl(a)===0)throw A.a(A.a4())
return this.h(a,this.gl(a)-1)},
q(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.r(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.a(A.Q(a))}return!1},
R(a,b){var s,r
A.aa(a).i("k(t.E)").a(b)
s=this.gl(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gl(a))throw A.a(A.Q(a))}return!1},
aK(a,b){var s=A.aa(a)
return new A.q(a,s.i("k(t.E)").a(b),s.i("q<t.E>"))},
ac(a,b,c){var s=A.aa(a)
return new A.I(a,s.a8(c).i("1(t.E)").a(b),s.i("@<t.E>").a8(c).i("I<1,2>"))},
ao(a,b){return A.aX(a,b,null,A.aa(a).i("t.E"))},
t(a,b){var s
A.aa(a).i("t.E").a(b)
s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
au(a,b){this.eP(a,A.aa(a).i("k(t.E)").a(b),!1)},
eP(a,b,c){var s,r,q,p,o=this,n=A.aa(a)
n.i("k(t.E)").a(b)
s=A.c([],n.i("K<t.E>"))
r=o.gl(a)
for(q=0;q<r;++q){p=o.h(a,q)
if(J.r(b.$1(p),!1))B.b.t(s,p)
if(r!==o.gl(a))throw A.a(A.Q(a))}if(s.length!==o.gl(a)){o.bh(a,0,s.length,s)
o.sl(a,s.length)}},
c2(a,b){var s=A.aa(a)
s.i("h(t.E,t.E)?").a(b)
A.es(a,0,this.gl(a)-1,b,s.i("t.E"))},
bw(a,b,c,d){var s
A.aa(a).i("t.E?").a(d)
A.bf(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
al(a,b,c,d,e){var s,r,q
A.aa(a).i("f<t.E>").a(d)
A.bf(b,c,this.gl(a))
s=c-b
if(s===0)return
A.ae(e,"skipCount")
r=J.E(d)
if(e+s>r.gl(d))throw A.a(A.lT())
if(e<b)for(q=s-1;q>=0;--q)this.j(a,b+q,r.h(d,e+q))
else for(q=0;q<s;++q)this.j(a,b+q,r.h(d,e+q))},
bh(a,b,c,d){return this.al(a,b,c,d,0)},
b6(a,b){var s
A.aa(a).i("k(t.E)").a(b)
for(s=0;s<this.gl(a);++s)if(b.$1(this.h(a,s)))return s
return-1},
ba(a,b,c){var s,r=this
A.aa(a).i("t.E").a(c)
A.f5(b,"index",t.p)
s=r.gl(a)
A.cm(b,0,s,"index")
r.t(a,c)
if(b!==s){r.al(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n(a){return A.fF(a,"[","]")},
$iw:1,
$if:1,
$ip:1}
A.z.prototype={
an(a,b){var s,r,q,p=A.j(this)
p.i("~(z.K,z.V)").a(b)
for(s=this.gF(),s=s.gp(s),p=p.i("z.V");s.k();){r=s.gm()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aY(a){var s
for(s=this.gF(),s=s.gp(s);s.k();)if(J.r(this.h(0,s.gm()),a))return!0
return!1},
ec(a){var s,r,q,p=this,o=A.j(p)
o.i("z.V(z.K,z.V)").a(a)
for(s=p.gF(),s=s.gp(s),o=o.i("z.V");s.k();){r=s.gm()
q=p.h(0,r)
p.j(0,r,a.$2(r,q==null?o.a(q):q))}},
gO(){return this.gF().ac(0,new A.fR(this),A.j(this).i("M<z.K,z.V>"))},
au(a,b){var s,r,q,p,o,n=this,m=A.j(n)
m.i("k(z.K,z.V)").a(b)
s=A.c([],m.i("K<z.K>"))
for(r=n.gF(),r=r.gp(r),m=m.i("z.V");r.k();){q=r.gm()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.b.t(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.a_)(s),++o)n.I(0,s[o])},
E(a){return this.gF().q(0,a)},
gl(a){var s=this.gF()
return s.gl(s)},
gJ(a){var s=this.gF()
return s.gJ(s)},
gag(){return new A.dv(this,A.j(this).i("dv<z.K,z.V>"))},
n(a){return A.kI(this)},
$ix:1}
A.fR.prototype={
$1(a){var s=this.a,r=A.j(s)
r.i("z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("z.V").a(s)
return new A.M(a,s,r.i("M<z.K,z.V>"))},
$S(){return A.j(this.a).i("M<z.K,z.V>(z.K)")}}
A.fS.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:18}
A.cs.prototype={}
A.dv.prototype={
gl(a){var s=this.a
return s.gl(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gS(a){var s=this.a,r=s.gF()
r=s.h(0,r.gS(r))
return r==null?this.$ti.y[1].a(r):r},
gK(a){var s=this.a,r=s.gF()
r=s.h(0,r.gK(r))
return r==null?this.$ti.y[1].a(r):r},
gp(a){var s=this.a,r=s.gF()
return new A.dw(r.gp(r),s,this.$ti.i("dw<1,2>"))}}
A.dw.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gm())
return!0}s.c=null
return!1},
gm(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iL:1}
A.aq.prototype={
j(a,b,c){var s=A.j(this)
s.i("aq.K").a(b)
s.i("aq.V").a(c)
throw A.a(A.N("Cannot modify unmodifiable map"))},
I(a,b){throw A.a(A.N("Cannot modify unmodifiable map"))}}
A.cj.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.j(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
E(a){return this.a.E(a)},
aY(a){return this.a.aY(a)},
an(a,b){this.a.an(0,A.j(this).i("~(1,2)").a(b))},
gJ(a){var s=this.a
return s.gJ(s)},
gl(a){var s=this.a
return s.gl(s)},
gF(){return this.a.gF()},
I(a,b){return this.a.I(0,b)},
n(a){return this.a.n(0)},
gag(){return this.a.gag()},
gO(){return this.a.gO()},
$ix:1}
A.b3.prototype={}
A.aW.prototype={
gJ(a){return this.gl(this)===0},
a9(a,b){var s
for(s=J.D(A.j(this).i("f<1>").a(b));s.k();)this.t(0,s.gm())},
ha(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r)this.I(0,a[r])},
fP(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a_)(a),++r)if(!this.q(0,a[r]))return!1
return!0},
ac(a,b,c){var s=A.j(this)
return new A.bE(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bE<1,2>"))},
n(a){return A.fF(this,"{","}")},
gS(a){var s=this.gp(this)
if(!s.k())throw A.a(A.a4())
return s.gm()},
gK(a){var s,r=this.gp(this)
if(!r.k())throw A.a(A.a4())
do s=r.gm()
while(r.k())
return s},
U(a,b){var s,r
A.ae(b,"index")
s=this.gp(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.a(A.e7(b,b-r,this,null,"index"))},
$iw:1,
$if:1,
$ibK:1}
A.dC.prototype={
dZ(a){var s,r,q=this.bK()
for(s=this.gp(this);s.k();){r=s.gm()
if(a.q(0,r))q.t(0,r)}return q}}
A.cB.prototype={}
A.eQ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fk(b):s}},
gl(a){return this.b==null?this.c.a:this.b1().length},
gJ(a){return this.gl(0)===0},
gF(){if(this.b==null){var s=this.c
return new A.ak(s,A.j(s).i("ak<1>"))}return new A.eR(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aE(s,A.j(s).i("aE<2>"))}return A.fT(r.b1(),new A.hw(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.e(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.E(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.dO().j(0,b,c)},
aY(a){var s,r,q=this
if(q.b==null)return q.c.aY(a)
s=q.b1()
for(r=0;r<s.length;++r)if(J.r(q.h(0,s[r]),a))return!0
return!1},
E(a){if(this.b==null)return this.c.E(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
I(a,b){if(this.b!=null&&!this.E(b))return null
return this.dO().I(0,b)},
an(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.an(0,b)
s=o.b1()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.i0(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.Q(o))}},
b1(){var s=t.g.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
dO(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.b1()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.b.t(r,"")
else B.b.bv(r)
n.a=n.b=null
return n.c=s},
fk(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.i0(this.a[a])
return this.b[a]=s}}
A.hw.prototype={
$1(a){return this.a.h(0,A.e(a))},
$S:25}
A.eR.prototype={
gl(a){return this.a.gl(0)},
U(a,b){var s=this.a
if(s.b==null)s=s.gF().U(0,b)
else{s=s.b1()
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]}return s},
gp(a){var s=this.a
if(s.b==null){s=s.gF()
s=s.gp(s)}else{s=s.b1()
s=new J.b8(s,s.length,A.u(s).i("b8<1>"))}return s},
q(a,b){return this.a.E(b)}}
A.hJ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:10}
A.hI.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:10}
A.c9.prototype={
gbU(){return this.a},
e3(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=u.n,a1="Invalid base64 encoding length ",a2=a3.length
a5=A.bf(a4,a5,a2)
s=$.lB()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.j3(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.j3(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.b(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.b(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.Y("")
g=o}else g=o
g.a+=B.a.v(a3,p,q)
c=A.A(j)
g.a+=c
p=k
continue}}throw A.a(A.B("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.v(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.lI(a3,m,a5,n,l,r)
else{b=B.d.c1(r-1,4)+1
if(b===1)throw A.a(A.B(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.aU(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.lI(a3,m,a5,n,l,a)
else{b=B.d.c1(a,4)
if(b===1)throw A.a(A.B(a1,a3,a5))
if(b>1)a3=B.a.aU(a3,a5,a5,b===2?"==":"=")}return a3},
b_(a){return this.e3(a,0,null)}}
A.dY.prototype={
aD(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.hq(this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":u.n).fT(a,0,s,!0)
s.toString
return A.dh(s,0,null)}}
A.hq.prototype={
fT(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.bt(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.oR(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.ff.prototype={
aD(a){var s,r,q,p
A.e(a)
s=A.bf(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.hp()
q=r.fQ(a,0,s)
q.toString
p=r.a
if(p<-1)A.F(A.B("Missing padding character",a,s))
if(p>0)A.F(A.B("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.hp.prototype={
fQ(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.mf(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.oO(a,b,c,q)
r.a=A.oQ(a,b,c,s,0,r.a)
return s}}
A.aI.prototype={}
A.e1.prototype={}
A.e4.prototype={}
A.d0.prototype={
n(a){var s=A.e5(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ef.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.ee.prototype={
aa(a,b){var s=A.pZ(a,this.gfS().a)
return s},
ad(a,b){var s=A.oX(a,this.gbU().b,null)
return s},
gbU(){return B.cB},
gfS(){return B.cA}}
A.fK.prototype={}
A.fJ.prototype={}
A.hy.prototype={
ef(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.A(92)
s.a+=o
o=A.A(117)
s.a+=o
o=A.A(100)
s.a+=o
o=p>>>8&15
o=A.A(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.A(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.A(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.A(92)
s.a+=o
switch(p){case 8:o=A.A(98)
s.a+=o
break
case 9:o=A.A(116)
s.a+=o
break
case 10:o=A.A(110)
s.a+=o
break
case 12:o=A.A(102)
s.a+=o
break
case 13:o=A.A(114)
s.a+=o
break
default:o=A.A(117)
s.a+=o
o=A.A(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.A(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.A(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.A(92)
s.a+=o
o=A.A(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.a.v(a,r,m)},
c9(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.ef(a,null))}B.b.t(s,a)},
c_(a){var s,r,q,p,o=this
if(o.ee(a))return
o.c9(a)
try{s=o.b.$1(a)
if(!o.ee(s)){q=A.lX(a,null,o.gdv())
throw A.a(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.bC(p)
q=A.lX(a,r,o.gdv())
throw A.a(q)}},
ee(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.cx.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ef(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c9(a)
q.hg(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c9(a)
r=q.hh(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
hg(a){var s,r,q=this.c
q.a+="["
s=J.E(a)
if(s.gaI(a)){this.c_(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.a+=","
this.c_(s.h(a,r))}}q.a+="]"},
hh(a){var s,r,q,p,o,n,m=this,l={}
if(a.gJ(a)){m.c.a+="{}"
return!0}s=a.gl(a)*2
r=A.aO(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.an(0,new A.hz(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.ef(A.e(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.c_(r[n])}p.a+="}"
return!0}}
A.hz.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.j(s,r.a++,a)
B.b.j(s,r.a++,b)},
$S:18}
A.hx.prototype={
gdv(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.eG.prototype={
cD(a){t.L.a(a)
return B.cT.aD(a)}}
A.hc.prototype={
aD(a){var s,r,q,p,o,n
A.e(a)
s=a.length
r=A.bf(0,null,s)
if(r===0)return new Uint8Array(0)
q=r*3
p=new Uint8Array(q)
o=new A.hK(p)
if(o.eO(a,0,r)!==r){n=r-1
if(!(n>=0&&n<s))return A.b(a,n)
o.cA()}return new Uint8Array(p.subarray(0,A.mP(0,o.b,q)))}}
A.hK.prototype={
cA(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.W(q)
s=q.length
if(!(p<s))return A.b(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.b(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.b(q,p)
q[p]=189},
fL(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.W(r)
o=r.length
if(!(q<o))return A.b(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.b(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.b(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.b(r,p)
r[p]=s&63|128
return!0}else{n.cA()
return!1}},
eO(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.b(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.b(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.W(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.b(a,m)
if(k.fL(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cA()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.W(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.W(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.b(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.b(s,m)
s[m]=n&63|128}}}return o}}
A.hb.prototype={
aD(a){return new A.hH(this.a).eE(t.L.a(a),0,null,!0)}}
A.hH.prototype={
eE(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bf(b,c,J.a6(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.po(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.pn(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cd(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.pp(o)
l.b=0
throw A.a(A.B(m,a,p+l.c))}return n},
cd(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.bt(b+c,2)
r=q.cd(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cd(a,s,c,d)}return q.fR(a,b,c,d)},
fR(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.Y(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.b(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.b(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.b(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.A(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.A(h)
e.a+=p
break
case 65:p=A.A(h)
e.a+=p;--d
break
default:p=A.A(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.b(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.b(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.b(a,l)
p=A.A(a[l])
e.a+=p}else{p=A.dh(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.A(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ht.prototype={
n(a){return this.bm()}}
A.T.prototype={}
A.c8.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.e5(s)
return"Assertion failed"}}
A.dj.prototype={}
A.b_.prototype={
gcg(){return"Invalid argument"+(!this.a?"(s)":"")},
gcf(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gcg()+q+o
if(!s.a)return n
return n+s.gcf()+": "+A.e5(s.gcN())},
gcN(){return this.b}}
A.cl.prototype={
gcN(){return A.mO(this.b)},
gcg(){return"RangeError"},
gcf(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.e6.prototype={
gcN(){return A.V(this.b)},
gcg(){return"RangeError"},
gcf(){if(A.V(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.dl.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.eA.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.cp.prototype={
n(a){return"Bad state: "+this.a}}
A.e0.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.e5(s)+"."}}
A.ek.prototype={
n(a){return"Out of Memory"},
$iT:1}
A.df.prototype={
n(a){return"Stack Overflow"},
$iT:1}
A.eO.prototype={
n(a){return"Exception: "+this.a},
$iaA:1}
A.i.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.v(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.b(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.b(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.a.v(e,i,j)+k+"\n"+B.a.aj(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.m(f)+")"):g},
$iaA:1,
ge0(){return this.a}}
A.f.prototype={
ac(a,b,c){var s=A.j(this)
return A.fT(this,s.a8(c).i("1(f.E)").a(b),s.i("f.E"),c)},
aK(a,b){var s=A.j(this)
return new A.q(this,s.i("k(f.E)").a(b),s.i("q<f.E>"))},
q(a,b){var s
for(s=this.gp(this);s.k();)if(J.r(s.gm(),b))return!0
return!1},
bX(a,b,c,d){var s,r
d.a(b)
A.j(this).a8(d).i("1(1,f.E)").a(c)
for(s=this.gp(this),r=b;s.k();)r=c.$2(r,s.gm())
return r},
aR(a,b){var s
A.j(this).i("k(f.E)").a(b)
for(s=this.gp(this);s.k();)if(!b.$1(s.gm()))return!1
return!0},
V(a,b){var s,r,q=this.gp(this)
if(!q.k())return""
s=J.am(q.gm())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.am(q.gm())
while(q.k())}else{r=s
do r=r+b+J.am(q.gm())
while(q.k())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.j(this).i("k(f.E)").a(b)
for(s=this.gp(this);s.k();)if(b.$1(s.gm()))return!0
return!1},
aW(a,b){var s=A.o(this,A.j(this).i("f.E"))
return s},
aV(a){return this.aW(0,!0)},
gl(a){var s,r=this.gp(this)
for(s=0;r.k();)++s
return s},
gJ(a){return!this.gp(this).k()},
gaI(a){return!this.gJ(this)},
ao(a,b){return A.oz(this,b,A.j(this).i("f.E"))},
gS(a){var s=this.gp(this)
if(!s.k())throw A.a(A.a4())
return s.gm()},
gK(a){var s,r=this.gp(this)
if(!r.k())throw A.a(A.a4())
do s=r.gm()
while(r.k())
return s},
bW(a,b){var s,r
A.j(this).i("k(f.E)").a(b)
for(s=this.gp(this);s.k();){r=s.gm()
if(b.$1(r))return r}throw A.a(A.a4())},
U(a,b){var s,r
A.ae(b,"index")
s=this.gp(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.a(A.e7(b,b-r,this,null,"index"))},
n(a){return A.on(this,"(",")")}}
A.M.prototype={
n(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.be.prototype={
gY(a){return A.v.prototype.gY.call(this,0)},
n(a){return"null"}}
A.v.prototype={$iv:1,
T(a,b){return this===b},
gY(a){return A.ep(this)},
n(a){return"Instance of '"+A.eq(this)+"'"},
gaN(a){return A.j0(this)},
toString(){return this.n(this)}}
A.Y.prototype={
gl(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ioE:1}
A.ha.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.e(b)
s=B.a.aq(b,"=")
if(s===-1){if(b!=="")a.j(0,A.al(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.v(b,0,s)
q=B.a.D(b,s+1)
p=this.a
a.j(0,A.al(r,0,r.length,p,!0),A.al(q,0,q.length,p,!0))}return a},
$S:27}
A.h9.prototype={
$2(a,b){throw A.a(A.B("Illegal IPv6 address, "+a,this.a,b))},
$S:40}
A.dI.prototype={
gdI(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.m(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gh6(){var s,r,q,p=this,o=p.x
if(o===$){s=p.e
r=s.length
if(r!==0){if(0>=r)return A.b(s,0)
r=s.charCodeAt(0)===47}else r=!1
if(r)s=B.a.D(s,1)
q=s.length===0?B.cE:A.kH(new A.I(A.c(s.split("/"),t.s),t.dO.a(A.qv()),t.do),t.N)
p.x!==$&&A.k6()
o=p.x=q}return o},
gY(a){var s,r=this,q=r.y
if(q===$){s=B.a.gY(r.gdI())
r.y!==$&&A.k6()
r.y=s
q=s}return q},
ge6(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.me(s==null?"":s)
r.z!==$&&A.k6()
q=r.z=new A.b3(s,t.dw)}return q},
ge7(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.ph(s==null?"":s)
q.Q!==$&&A.k6()
q.Q=r
p=r}return p},
gaA(){return this.b},
gaH(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.a4(s,"v",1))return B.a.v(s,1,s.length-1)
return s},
gbB(){var s=this.d
return s==null?A.mv(this.a):s},
gb7(){var s=this.f
return s==null?"":s},
gb4(){var s=this.r
return s==null?"":s},
h0(a){var s=this.a
if(a.length!==s.length)return!1
return A.py(a,s,0)>=0},
ea(a){var s,r,q,p,o,n,m,l=this
a=A.kW(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.hF(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.u(o,"/"))o="/"+o
m=o
return A.dJ(a,r,p,q,m,l.f,l.r)},
dk(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.a.a4(b,"../",r);){r+=3;++s}q=B.a.bd(a,"/")
p=a.length
for(;;){if(!(q>0&&s>0))break
o=B.a.ae(a,"/",q-1)
if(o<0)break
n=q-o
m=n!==2
l=!1
if(!m||n===3){k=o+1
if(!(k<p))return A.b(a,k)
if(a.charCodeAt(k)===46)if(m){m=o+2
if(!(m<p))return A.b(a,m)
m=a.charCodeAt(m)===46}else m=!0
else m=l}else m=l
if(m)break;--s
q=o}return B.a.aU(a,q+1,null,B.a.D(b,r-3*s))},
eb(a){return this.bC(A.eE(a,0,null))},
bC(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gak().length!==0)return a
else{s=h.a
if(a.gcJ()){r=a.ea(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gdT())m=a.gbx()?a.gb7():h.f
else{l=A.pm(h,n)
if(l>0){k=B.a.v(n,0,l)
n=a.gcI()?k+A.c0(a.gar()):k+A.c0(h.dk(B.a.D(n,k.length),a.gar()))}else if(a.gcI())n=A.c0(a.gar())
else if(n.length===0)if(p==null)n=s.length===0?a.gar():A.c0(a.gar())
else n=A.c0("/"+a.gar())
else{j=h.dk(n,a.gar())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.c0(j)
else n=A.kY(j,!r||p!=null)}m=a.gbx()?a.gb7():null}}}i=a.gcK()?a.gb4():null
return A.dJ(s,q,p,o,n,m,i)},
gcJ(){return this.c!=null},
gbx(){return this.f!=null},
gcK(){return this.r!=null},
gdT(){return this.e.length===0},
gcI(){return B.a.u(this.e,"/")},
cV(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.a(A.N("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.a(A.N(u.y))
q=r.r
if((q==null?"":q)!=="")throw A.a(A.N(u.l))
if(r.c!=null&&r.gaH()!=="")A.F(A.N(u.j))
s=r.gh6()
A.pf(s,!1)
q=A.kL(B.a.u(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
n(a){return this.gdI()},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gak())if(p.c!=null===b.gcJ())if(p.b===b.gaA())if(p.gaH()===b.gaH())if(p.gbB()===b.gbB())if(p.e===b.gar()){r=p.f
q=r==null
if(!q===b.gbx()){if(q)r=""
if(r===b.gb7()){r=p.r
q=r==null
if(!q===b.gcK()){s=q?"":r
s=s===b.gb4()}}}}return s},
$ieC:1,
gak(){return this.a},
gar(){return this.e}}
A.hG.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.al(s,a,c,r,!0)
p=""}else{q=A.al(s,a,b,r,!0)
p=A.al(s,b+1,c,r,!0)}J.dV(this.c.e5(q,A.qw()),p)},
$S:42}
A.h8.prototype={
ged(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.af(s,"?",m)
q=s.length
if(r>=0){p=A.dK(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.eM("data","",n,n,A.dK(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.aQ.prototype={
gcJ(){return this.c>0},
gcL(){return this.c>0&&this.d+1<this.e},
gbx(){return this.f<this.r},
gcK(){return this.r<this.a.length},
gcI(){return B.a.a4(this.a,"/",this.e)},
gdT(){return this.e===this.f},
gak(){var s=this.w
return s==null?this.w=this.eD():s},
eD(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.u(r.a,"http"))return"http"
if(q===5&&B.a.u(r.a,"https"))return"https"
if(s&&B.a.u(r.a,"file"))return"file"
if(q===7&&B.a.u(r.a,"package"))return"package"
return B.a.v(r.a,0,q)},
gaA(){var s=this.c,r=this.b+3
return s>r?B.a.v(this.a,r,s-1):""},
gaH(){var s=this.c
return s>0?B.a.v(this.a,s,this.d):""},
gbB(){var s,r=this
if(r.gcL())return A.cG(B.a.v(r.a,r.d+1,r.e),null,null)
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gar(){return B.a.v(this.a,this.e,this.f)},
gb7(){var s=this.f,r=this.r
return s<r?B.a.v(this.a,s+1,r):""},
gb4(){var s=this.r,r=this.a
return s<r.length?B.a.D(r,s+1):""},
ge6(){if(this.f>=this.r)return B.cF
return new A.b3(A.me(this.gb7()),t.dw)},
ge7(){if(this.f>=this.r)return B.an
var s=A.mG(this.gb7())
s.ec(A.nd())
return A.lO(s,t.N,t.a)},
dh(a){var s=this.d+1
return s+a.length===this.e&&B.a.a4(this.a,a,s)},
hb(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.aQ(B.a.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
ea(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.kW(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.v(h.a,h.b+3,q):""
o=h.gcL()?h.gbB():g
if(s)o=A.hF(o,a)
q=h.c
if(q>0)n=B.a.v(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.v(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.u(l,"/"))l="/"+l
k=h.r
j=m<k?B.a.v(q,m+1,k):g
m=h.r
i=m<q.length?B.a.D(q,m+1):g
return A.dJ(a,p,n,o,l,j,i)},
eb(a){return this.bC(A.eE(a,0,null))},
bC(a){if(a instanceof A.aQ)return this.fA(this,a)
return this.dJ().bC(a)},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.u(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.u(a.a,"http"))p=!b.dh("80")
else p=!(r===5&&B.a.u(a.a,"https"))||!b.dh("443")
if(p){o=r+1
return new A.aQ(B.a.v(a.a,0,o)+B.a.D(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.dJ().bC(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.aQ(B.a.v(a.a,0,r)+B.a.D(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.aQ(B.a.v(a.a,0,r)+B.a.D(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.hb()}s=b.a
if(B.a.a4(s,"/",n)){m=a.e
l=A.mo(this)
k=l>0?l:m
o=k-n
return new A.aQ(B.a.v(a.a,0,k)+B.a.D(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a4(s,"../",n))n+=3
o=j-n+1
return new A.aQ(B.a.v(a.a,0,j)+"/"+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.mo(this)
if(l>=0)g=l
else for(g=j;B.a.a4(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a4(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.b(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a4(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.aQ(B.a.v(h,0,i)+d+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
cV(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.u(r.a,"file"))
q=s}else q=!1
if(q)throw A.a(A.N("Cannot extract a file path from a "+r.gak()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.a(A.N(u.y))
throw A.a(A.N(u.l))}if(r.c<r.d)A.F(A.N(u.j))
q=B.a.v(s,r.e,q)
return q},
gY(a){var s=this.x
return s==null?this.x=B.a.gY(this.a):s},
T(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.n(0)},
dJ(){var s=this,r=null,q=s.gak(),p=s.gaA(),o=s.c>0?s.gaH():r,n=s.gcL()?s.gbB():r,m=s.a,l=s.f,k=B.a.v(m,s.e,l),j=s.r
l=l<j?s.gb7():r
return A.dJ(q,p,o,n,k,l,j<m.length?s.gb4():r)},
n(a){return this.a},
$ieC:1}
A.eM.prototype={}
A.e2.prototype={}
A.ch.prototype={
b5(a){var s,r
this.$ti.i("f<1>?").a(a)
for(s=a.gp(a),r=0;s.k();){r=r+J.ac(s.gm())&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cC.prototype={
b5(a){var s,r
this.$ti.i("cC.T?").a(a)
for(s=a.gp(a),r=0;s.k();)r=r+J.ac(s.gm())&2147483647
r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.bQ.prototype={}
A.d8.prototype={
t(a,b){this.aw(this.$ti.c.a(b))},
n(a){return A.fF(this,"{","}")},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
sl(a,b){var s,r,q,p,o=this
if(b<0)throw A.a(A.a8("Length "+b+" may not be negative."))
if(b>o.gl(0)&&!o.$ti.c.b(null))throw A.a(A.N("The length can only be increased when the element type is nullable, but the current element type is `"+A.b6(o.$ti.c).n(0)+"`."))
s=b-o.gl(0)
if(s>=0){if(o.a.length<=b)o.fj(b)
o.c=(o.c+s&o.a.length-1)>>>0
return}r=o.c
q=r+s
p=o.a
if(q>=0)B.b.bw(p,q,r,null)
else{q+=p.length
B.b.bw(p,0,r,null)
r=o.a
B.b.bw(r,q,r.length,null)}o.c=q},
h(a,b){var s,r,q,p=this
A.V(b)
if(b<0||b>=p.gl(0))throw A.a(A.a8("Index "+b+" must be in the range [0.."+p.gl(0)+")."))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
j(a,b,c){var s,r=this
r.$ti.c.a(c)
if(b<0||b>=r.gl(0))throw A.a(A.a8("Index "+b+" must be in the range [0.."+r.gl(0)+")."))
s=r.a
B.b.j(s,(r.b+b&s.length-1)>>>0,c)},
aw(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.b.j(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.aO(r*2,null,!1,n.i("1?"))
n=o.a
s=o.b
p=n.length-s
B.b.al(q,0,p,n,s)
B.b.al(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.a=q}},
fM(a){var s,r,q,p,o,n=this
n.$ti.i("p<1?>").a(a)
s=n.b
r=n.c
q=n.a
if(s<=r){p=r-s
B.b.al(a,0,p,q,s)
return p}else{o=q.length-s
B.b.al(a,0,o,q,s)
B.b.al(a,o,o+n.c,n.a,0)
return n.c+o}},
fj(a){var s=this,r=A.aO(A.ow(a+B.d.b3(a,1)),null,!1,s.$ti.i("1?"))
s.c=s.fM(r)
s.a=r
s.b=0},
$iw:1,
$if:1,
$ip:1}
A.dz.prototype={}
A.aP.prototype={
j(a,b,c){var s=A.j(this)
s.i("aP.K").a(b)
s.i("aP.V").a(c)
return A.m9()},
I(a,b){return A.m9()}}
A.fg.prototype={
fN(a){var s,r,q=t.d4
A.n6("absolute",A.c([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.av(a)>0&&!s.aZ(a)
if(s)return a
s=A.nf()
r=A.c([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.n6("join",r)
return this.h1(new A.dn(r,t.eJ))},
h1(a){var s,r,q,p,o,n,m,l,k,j
t.cs.a(a)
for(s=a.$ti,r=s.i("k(f.E)").a(new A.fh()),q=a.gp(0),s=new A.bk(q,r,s.i("bk<f.E>")),r=this.a,p=!1,o=!1,n="";s.k();){m=q.gm()
if(r.aZ(m)&&o){l=A.el(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.a.v(k,0,r.bf(k,!0))
l.b=n
if(r.bz(n))B.b.j(l.e,0,r.gb8())
n=l.n(0)}else if(r.av(m)>0){o=!r.aZ(m)
n=m}else{j=m.length
if(j!==0){if(0>=j)return A.b(m,0)
j=r.cC(m[0])}else j=!1
if(!j)if(p)n+=r.gb8()
n+=m}p=r.bz(m)}return n.charCodeAt(0)==0?n:n},
bi(a,b){var s=A.el(b,this.a),r=s.d,q=A.u(r),p=q.i("q<1>")
r=A.o(new A.q(r,q.i("k(1)").a(new A.fi()),p),p.i("f.E"))
s.sh5(r)
r=s.b
if(r!=null)B.b.ba(s.d,0,r)
return s.d},
b_(a){var s
if(!this.f2(a))return a
s=A.el(a,this.a)
s.cR()
return s.n(0)},
f2(a){var s,r,q,p,o,n,m,l=this.a,k=l.av(a)
if(k!==0){if(l===$.fd())for(s=a.length,r=0;r<k;++r){if(!(r<s))return A.b(a,r)
if(a.charCodeAt(r)===47)return!0}q=k
p=47}else{q=0
p=null}for(s=a.length,r=q,o=null;r<s;++r,o=p,p=n){if(!(r>=0))return A.b(a,r)
n=a.charCodeAt(r)
if(l.aS(n)){if(l===$.fd()&&n===47)return!0
if(p!=null&&l.aS(p))return!0
if(p===46)m=o==null||o===46||l.aS(o)
else m=!1
if(m)return!0}}if(p==null)return!0
if(l.aS(p))return!0
if(p===46)l=o==null||l.aS(o)||o===46
else l=!1
if(l)return!0
return!1},
h9(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.av(a)
if(i<=0)return l.b_(a)
s=A.nf()
if(j.av(s)<=0&&j.av(a)>0)return l.b_(a)
if(j.av(a)<=0||j.aZ(a))a=l.fN(a)
if(j.av(a)<=0&&j.av(s)>0)throw A.a(A.m1(k+a+'" from "'+s+'".'))
r=A.el(s,j)
r.cR()
q=A.el(a,j)
q.cR()
i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]==="."}else i=!1
if(i)return q.n(0)
i=r.b
p=q.b
if(i!=p)i=i==null||p==null||!j.cT(i,p)
else i=!1
if(i)return q.n(0)
for(;;){i=r.d
p=i.length
o=!1
if(p!==0){n=q.d
m=n.length
if(m!==0){if(0>=p)return A.b(i,0)
i=i[0]
if(0>=m)return A.b(n,0)
n=j.cT(i,n[0])
i=n}else i=o}else i=o
if(!i)break
B.b.be(r.d,0)
B.b.be(r.e,1)
B.b.be(q.d,0)
B.b.be(q.e,1)}i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]===".."}else i=!1
if(i)throw A.a(A.m1(k+a+'" from "'+s+'".'))
i=t.N
B.b.cM(q.d,0,A.aO(p,"..",!1,i))
B.b.j(q.e,0,"")
B.b.cM(q.e,1,A.aO(r.d.length,j.gb8(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&B.b.gK(j)==="."){B.b.e8(q.d)
j=q.e
if(0>=j.length)return A.b(j,-1)
j.pop()
if(0>=j.length)return A.b(j,-1)
j.pop()
B.b.t(j,"")}q.b=""
q.e9()
return q.n(0)},
e4(a){var s,r,q=this,p=A.mY(a)
if(p.gak()==="file"&&q.a===$.dT())return p.n(0)
else if(p.gak()!=="file"&&p.gak()!==""&&q.a!==$.dT())return p.n(0)
s=q.b_(q.a.cS(A.mY(p)))
r=q.h9(s)
return q.bi(0,r).length>q.bi(0,s).length?s:r}}
A.fh.prototype={
$1(a){return A.e(a)!==""},
$S:0}
A.fi.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ie.prototype={
$1(a){A.c1(a)
return a==null?"null":'"'+a+'"'},
$S:36}
A.cg.prototype={
eg(a){var s,r=this.av(a)
if(r>0)return B.a.v(a,0,r)
if(this.aZ(a)){if(0>=a.length)return A.b(a,0)
s=a[0]}else s=null
return s},
cT(a,b){return a===b}}
A.fU.prototype={
e9(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gK(s)===""))break
B.b.e8(q.d)
s=q.e
if(0>=s.length)return A.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.b.j(s,r-1,"")},
cR(){var s,r,q,p,o,n,m=this,l=A.c([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.a_)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o===".."){n=l.length
if(n!==0){if(0>=n)return A.b(l,-1)
l.pop()}else ++q}else B.b.t(l,o)}if(m.b==null)B.b.cM(l,0,A.aO(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.b.t(l,".")
m.d=l
s=m.a
m.e=A.aO(l.length+1,s.gb8(),!0,t.N)
r=m.b
if(r==null||l.length===0||!s.bz(r))B.b.j(m.e,0,"")
r=m.b
if(r!=null&&s===$.fd())m.b=A.J(r,"/","\\")
m.e9()},
n(a){var s,r,q,p,o,n=this.b
n=n!=null?n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.b(q,o)
n=n+q[o]+s[o]}n+=B.b.gK(q)
return n.charCodeAt(0)==0?n:n},
sh5(a){this.d=t.a.a(a)}}
A.em.prototype={
n(a){return"PathException: "+this.a},
$iaA:1}
A.h5.prototype={
n(a){return this.gcQ()}}
A.eo.prototype={
cC(a){return B.a.q(a,"/")},
aS(a){return a===47},
bz(a){var s,r=a.length
if(r!==0){s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)!==47
r=s}else r=!1
return r},
bf(a,b){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
if(s)return 1
return 0},
av(a){return this.bf(a,!1)},
aZ(a){return!1},
cS(a){var s
if(a.gak()===""||a.gak()==="file"){s=a.gar()
return A.al(s,0,s.length,B.e,!1)}throw A.a(A.a3("Uri "+a.n(0)+" must have scheme 'file:'."))},
gcQ(){return"posix"},
gb8(){return"/"}}
A.eF.prototype={
cC(a){return B.a.q(a,"/")},
aS(a){return a===47},
bz(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)!==47)return!0
return B.a.aG(a,"://")&&this.av(a)===r},
bf(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(0>=p)return A.b(a,0)
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.af(a,"/",B.a.a4(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.u(a,"file://"))return q
p=A.ni(a,q+1)
return p==null?q:p}}return 0},
av(a){return this.bf(a,!1)},
aZ(a){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
cS(a){return a.n(0)},
gcQ(){return"url"},
gb8(){return"/"}}
A.eH.prototype={
cC(a){return B.a.q(a,"/")},
aS(a){return a===47||a===92},
bz(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)
return!(s===47||s===92)},
bf(a,b){var s,r,q=a.length
if(q===0)return 0
if(0>=q)return A.b(a,0)
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(q>=2){if(1>=q)return A.b(a,1)
s=a.charCodeAt(1)!==92}else s=!0
if(s)return 1
r=B.a.af(a,"\\",2)
if(r>0){r=B.a.af(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.nq(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
av(a){return this.bf(a,!1)},
aZ(a){return this.av(a)===1},
cS(a){var s,r
if(a.gak()!==""&&a.gak()!=="file")throw A.a(A.a3("Uri "+a.n(0)+" must have scheme 'file:'."))
s=a.gar()
if(a.gaH()===""){if(s.length>=3&&B.a.u(s,"/")&&A.ni(s,1)!=null)s=B.a.cU(s,"/","")}else s="\\\\"+a.gaH()+s
r=A.J(s,"/","\\")
return A.al(r,0,r.length,B.e,!1)},
fO(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
cT(a,b){var s,r,q
if(a===b)return!0
s=a.length
r=b.length
if(s!==r)return!1
for(q=0;q<s;++q){if(!(q<r))return A.b(b,q)
if(!this.fO(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gcQ(){return"windows"},
gb8(){return"\\"}}
A.h3.prototype={
gl(a){return this.c.length},
gh3(){return this.b.length},
eu(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.c,r=s.length,q=a.a,p=q.length,o=s.$flags|0,n=this.b,m=0;m<r;++m){if(!(m<p))return A.b(q,m)
l=q.charCodeAt(m)
o&2&&A.W(s)
s[m]=l
if(l===13){k=m+1
if(k<p){if(!(k<p))return A.b(q,k)
j=q.charCodeAt(k)!==10}else j=!0
if(j)l=10}if(l===10)B.b.t(n,m+1)}},
c3(a,b){return A.a0(this,a,b)},
bg(a){var s,r=this
if(a<0)throw A.a(A.a8("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.a(A.a8("Offset "+a+u.s+r.gl(0)+"."))
s=r.b
if(a<B.b.gS(s))return-1
if(a>=B.b.gK(s))return s.length-1
if(r.eU(a)){s=r.d
s.toString
return s}return r.d=r.ez(a)-1},
eU(a){var s,r,q,p=this.d
if(p==null)return!1
s=this.b
r=s.length
if(p>>>0!==p||p>=r)return A.b(s,p)
if(a<s[p])return!1
if(!(p>=r-1)){q=p+1
if(!(q<r))return A.b(s,q)
q=a<s[q]}else q=!0
if(q)return!0
if(!(p>=r-2)){q=p+2
if(!(q<r))return A.b(s,q)
q=a<s[q]
s=q}else s=!0
if(s){this.d=p+1
return!0}return!1},
ez(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.d.bt(o-s,2)
if(!(r>=0&&r<p))return A.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
c0(a){var s,r,q,p=this
if(a<0)throw A.a(A.a8("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.a(A.a8("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gl(0)+"."))
s=p.bg(a)
r=p.b
if(!(s>=0&&s<r.length))return A.b(r,s)
q=r[s]
if(q>a)throw A.a(A.a8("Line "+s+" comes after offset "+a+"."))
return a-q},
bD(a){var s,r,q,p
if(a<0)throw A.a(A.a8("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.a(A.a8("Line "+a+" must be less than the number of lines in the file, "+this.gh3()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.a(A.a8("Line "+a+" doesn't have 0 columns."))
return q}}
A.ce.prototype={
gX(){return this.a.a},
ga7(){return this.a.bg(this.b)},
gab(){return this.a.c0(this.b)},
cX(a,b){var s,r=this.b
if(r<0)throw A.a(A.a8("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a8("Offset "+r+u.s+s.gl(0)+"."))}},
bA(){var s=this.b
return A.a0(this.a,s,s)},
gL(){return this.b}}
A.bl.prototype={
gX(){return this.a.a},
gl(a){return this.c-this.b},
gC(){return A.X(this.a,this.b)},
gH(){return A.X(this.a,this.c)},
gai(){return A.dh(B.L.c5(this.a.c,this.b,this.c),0,null)},
gaz(){var s=this,r=s.a,q=s.c,p=r.bg(q)
if(r.c0(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dh(B.L.c5(r.c,r.bD(p),r.bD(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.bD(p+1)
return A.dh(B.L.c5(r.c,r.bD(r.bg(s.b)),q),0,null)},
c6(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.a(A.a3("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a8("End "+r+u.s+s.gl(0)+"."))
else if(q<0)throw A.a(A.a8("Start may not be negative, was "+q+"."))}},
aC(a,b){var s
t.I.a(b)
if(!(b instanceof A.bl))return this.ep(0,b)
s=B.d.aC(this.b,b.b)
return s===0?B.d.aC(this.c,b.c):s},
T(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.bl))return s.eo(0,b)
return s.b===b.b&&s.c===b.c&&J.r(s.a.a,b.a.a)},
gY(a){return A.ej(this.b,this.c,this.a.a,B.n)},
ap(a,b){var s,r=this,q=r.a
if(!J.r(q.a,b.a.a))throw A.a(A.a3('Source URLs "'+A.m(r.gX())+'" and  "'+A.m(b.gX())+"\" don't match."))
s=Math.min(r.b,b.b)
return A.a0(q,s,Math.max(r.c,b.c))},
$iog:1,
$ibh:1}
A.fj.prototype={
fZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.dQ(B.b.gS(a0).c)
s=a.e
r=A.aO(s,null,!1,t.gS)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=n.c
if(!J.r(m.c,l)){a.bP("\u2575")
q.a+="\n"
a.dQ(l)}else if(m.b+1!==n.b){a.fK("...")
q.a+="\n"}}for(l=n.d,k=A.u(l).i("da<1>"),j=new A.da(l,k),j=new A.a5(j,j.gl(0),k.i("a5<y.E>")),k=k.i("y.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gC().ga7()!==f.gH().ga7()&&f.gC().ga7()===i&&a.eW(B.a.v(h,0,f.gC().gab()))){e=B.b.aq(r,null)
if(e<0)A.F(A.a3(A.m(r)+" contains no null elements."))
B.b.j(r,e,g)}}a.fJ(i)
q.a+=" "
a.fI(n,r)
if(s)q.a+=" "
d=B.b.b6(l,new A.fE())
if(d===-1)c=null
else{if(!(d>=0&&d<l.length))return A.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gC().ga7()===i?j.gC().gab():0
a.fG(h,g,j.gH().ga7()===i?j.gH().gab():h.length,p)}else a.bR(h)
q.a+="\n"
if(k)a.fH(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.bP("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
dQ(a){var s,r,q=this
if(!q.f||!t.k.b(a))q.bP("\u2577")
else{q.bP("\u250c")
q.aB(new A.fr(q),"\x1b[34m",t.n)
s=q.r
r=" "+$.lD().e4(a)
s.a+=r}q.r.a+="\n"},
bO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
t.E.a(b)
e.a=!1
e.b=null
s=c==null
if(s)r=null
else r=f.b
for(q=b.length,p=t.b,o=f.b,s=!s,n=f.r,m=t.n,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
h=i?null:j.a.gC().ga7()
g=i?null:j.a.gH().ga7()
if(s&&j===c){f.aB(new A.fy(f,h,a),r,p)
l=!0}else if(l)f.aB(new A.fz(f,j),r,p)
else if(i)if(e.a)f.aB(new A.fA(f),e.b,m)
else n.a+=" "
else f.aB(new A.fB(e,f,c,h,a,j,g),o,p)}},
fI(a,b){return this.bO(a,b,null)},
fG(a,b,c,d){var s=this
s.bR(B.a.v(a,0,b))
s.aB(new A.fs(s,a,b,c),d,t.n)
s.bR(B.a.v(a,c,a.length))},
fH(a,b,c){var s,r,q,p=this
t.E.a(c)
s=p.b
r=b.a
if(r.gC().ga7()===r.gH().ga7()){p.cB()
r=p.r
r.a+=" "
p.bO(a,c,b)
if(c.length!==0)r.a+=" "
p.dR(b,c,p.aB(new A.ft(p,a,b),s,t.p))}else{q=a.b
if(r.gC().ga7()===q){if(B.b.q(c,b))return
A.rD(c,b,t.C)
p.cB()
r=p.r
r.a+=" "
p.bO(a,c,b)
p.aB(new A.fu(p,a,b),s,t.n)
r.a+="\n"}else if(r.gH().ga7()===q){r=r.gH().gab()
if(r===a.a.length){A.ny(c,b,t.C)
return}p.cB()
p.r.a+=" "
p.bO(a,c,b)
p.dR(b,c,p.aB(new A.fv(p,!1,a,b),s,t.p))
A.ny(c,b,t.C)}}},
dP(a,b,c){var s=c?0:1,r=this.r
s=B.a.aj("\u2500",1+b+this.cc(B.a.v(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
fF(a,b){return this.dP(a,b,!0)},
dR(a,b,c){t.E.a(b)
this.r.a+="\n"
return},
bR(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),q=this.r,r=r.i("t.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aj(" ",4)
else{p=A.A(p)
q.a+=p}}},
bQ(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.d.n(b+1)
this.aB(new A.fC(s,this,a),"\x1b[34m",t.b)},
bP(a){return this.bQ(a,null,null)},
fK(a){return this.bQ(null,null,a)},
fJ(a){return this.bQ(null,a,null)},
cB(){return this.bQ(null,null,null)},
cc(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
eW(a){var s,r,q
for(s=new A.aH(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
aB(a,b,c){var s,r
c.i("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.fD.prototype={
$0(){return this.a},
$S:52}
A.fl.prototype={
$1(a){var s=t.A.a(a).d,r=A.u(s)
return new A.q(s,r.i("k(1)").a(new A.fk()),r.i("q<1>")).gl(0)},
$S:72}
A.fk.prototype={
$1(a){var s=t.C.a(a).a
return s.gC().ga7()!==s.gH().ga7()},
$S:11}
A.fm.prototype={
$1(a){return t.A.a(a).c},
$S:67}
A.fo.prototype={
$1(a){var s=t.C.a(a).a.gX()
return s==null?new A.v():s},
$S:35}
A.fp.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aC(0,s.a(b).a)},
$S:32}
A.fq.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.aS.a(a0)
s=a0.a
r=a0.b
q=A.c([],t.ef)
for(p=J.a2(r),o=p.gp(r),n=t.v;o.k();){m=o.gm().a
l=m.gaz()
k=A.iW(l,m.gai(),m.gC().gab())
k.toString
j=B.a.bu("\n",B.a.v(l,0,k)).gl(0)
i=m.gC().ga7()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.b.gK(q).b)B.b.t(q,new A.aF(g,i,s,A.c([],n)));++i}}f=A.c([],n)
for(o=q.length,n=t.as,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.a_)(q),++h){g=q[h]
m=n.a(new A.fn(g))
e&1&&A.W(f,16)
B.b.dA(f,m,!0)
c=f.length
for(m=p.ao(r,d),k=m.$ti,m=new A.a5(m,m.gl(0),k.i("a5<y.E>")),b=g.b,k=k.i("y.E");m.k();){a=m.d
if(a==null)a=k.a(a)
if(a.a.gC().ga7()>b)break
B.b.t(f,a)}d+=f.length-c
B.b.a9(g.d,f)}return q},
$S:34}
A.fn.prototype={
$1(a){return t.C.a(a).a.gH().ga7()<this.a.b},
$S:11}
A.fE.prototype={
$1(a){t.C.a(a)
return!0},
$S:11}
A.fr.prototype={
$0(){this.a.r.a+=B.a.aj("\u2500",2)+">"
return null},
$S:8}
A.fy.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:5}
A.fz.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:5}
A.fA.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:8}
A.fB.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aB(new A.fw(p,s),p.b,t.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gH().gab()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aB(new A.fx(r,o),p.b,t.b)}}},
$S:5}
A.fw.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:5}
A.fx.prototype={
$0(){this.a.r.a+=this.b},
$S:5}
A.fs.prototype={
$0(){var s=this
return s.a.bR(B.a.v(s.b,s.c,s.d))},
$S:8}
A.ft.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gC().gab(),l=n.gH().gab()
n=this.b.a
s=q.cc(B.a.v(n,0,m))
r=q.cc(B.a.v(n,m,l))
m+=s*3
n=(p.a+=B.a.aj(" ",m))+B.a.aj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:19}
A.fu.prototype={
$0(){return this.a.fF(this.b,this.c.a.gC().gab())},
$S:8}
A.fv.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aj("\u2500",3)
else r.dP(s.c,Math.max(s.d.a.gH().gab()-1,0),!1)
return q.a.length-p.length},
$S:19}
A.fC.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.h4(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:5}
A.af.prototype={
n(a){var s=this.a
s="primary "+(""+s.gC().ga7()+":"+s.gC().gab()+"-"+s.gH().ga7()+":"+s.gH().gab())
return s.charCodeAt(0)==0?s:s}}
A.hu.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.q.b(o)&&A.iW(o.gaz(),o.gai(),o.gC().gab())!=null)){s=A.bM(o.gC().gL(),0,0,o.gX())
r=o.gH().gL()
q=o.gX()
p=A.qB(o.gai(),10)
o=A.h4(s,A.bM(r,A.mi(o.gai()),p,q),o.gai(),o.gai())}return A.oT(A.oV(A.oU(o)))},
$S:38}
A.aF.prototype={
n(a){return""+this.b+': "'+this.a+'" ('+B.b.V(this.d,", ")+")"}}
A.bL.prototype={
cE(a){var s=this.a
if(!J.r(s,a.gX()))throw A.a(A.a3('Source URLs "'+A.m(s)+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gL())},
aC(a,b){var s
t.F.a(b)
s=this.a
if(!J.r(s,b.gX()))throw A.a(A.a3('Source URLs "'+A.m(s)+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gL()},
T(a,b){if(b==null)return!1
return t.F.b(b)&&J.r(this.a,b.gX())&&this.b===b.gL()},
gY(a){var s=this.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=this,r=A.j0(s).n(0),q=s.a
return"<"+r+": "+s.b+" "+(A.m(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
gX(){return this.a},
gL(){return this.b},
ga7(){return this.c},
gab(){return this.d}}
A.et.prototype={
cE(a){if(!J.r(this.a.a,a.gX()))throw A.a(A.a3('Source URLs "'+A.m(this.gX())+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gL())},
aC(a,b){t.F.a(b)
if(!J.r(this.a.a,b.gX()))throw A.a(A.a3('Source URLs "'+A.m(this.gX())+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gL()},
T(a,b){if(b==null)return!1
return t.F.b(b)&&J.r(this.a.a,b.gX())&&this.b===b.gL()},
gY(a){var s=this.a.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=A.j0(this).n(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.m(p==null?"unknown source":p)+":"+(q.bg(r)+1)+":"+(q.c0(r)+1))+">"},
$ibL:1}
A.de.prototype={
cY(a,b,c){var s,r=this.b,q=this.a
if(!J.r(r.gX(),q.gX()))throw A.a(A.a3('Source URLs "'+A.m(q.gX())+'" and  "'+A.m(r.gX())+"\" don't match."))
else if(r.gL()<q.gL())throw A.a(A.a3("End "+r.n(0)+" must come after start "+q.n(0)+"."))
else{s=this.c
if(s.length!==q.cE(r))throw A.a(A.a3('Text "'+s+'" must be '+q.cE(r)+" characters long."))}},
gC(){return this.a},
gH(){return this.b},
gai(){return this.c}}
A.eu.prototype={
ge0(){return this.a},
n(a){return"Error on "+this.b.e2(this.a,null)},
$iaA:1}
A.ev.prototype={$ii:1}
A.co.prototype={
gX(){return this.gC().gX()},
gl(a){return this.gH().gL()-this.gC().gL()},
aC(a,b){var s
t.I.a(b)
s=this.gC().aC(0,b.gC())
return s===0?this.gH().aC(0,b.gH()):s},
e2(a,b){var s,r,q,p=this,o="line "+(p.gC().ga7()+1)+", column "+(p.gC().gab()+1)
if(p.gX()!=null){s=p.gX()
r=$.lD()
s.toString
s=o+(" of "+r.e4(s))
o=s}o+=": "+a
q=p.h_(b)
if(q.length!==0)o=o+"\n"+q
return o.charCodeAt(0)==0?o:o},
e1(a){return this.e2(a,null)},
h_(a){var s=this
if(!t.q.b(s)&&s.gl(s)===0)return""
return A.oh(s,a).fZ()},
T(a,b){if(b==null)return!1
return b instanceof A.co&&this.gC().T(0,b.gC())&&this.gH().T(0,b.gH())},
gY(a){return A.ej(this.gC(),this.gH(),B.n,B.n)},
n(a){var s=this
return"<"+A.j0(s).n(0)+": from "+s.gC().n(0)+" to "+s.gH().n(0)+' "'+s.gai()+'">'},
$icn:1}
A.bh.prototype={
gaz(){return this.d}}
A.e3.prototype={
a0(a){var s,r=this
if(a!==10)s=a===13&&r.W()!==10
else s=!0
if(s){++r.as
r.at=0}else{s=r.at
r.at=s+(a>=65536&&a<=1114111?2:1)}},
bE(a){var s,r,q,p,o=this
if(!o.er(a))return!1
s=o.gcP()
r=s.c
q=o.f3(r)
s=o.as
p=q.length
o.as=s+p
s=r.length
if(p===0)o.at+=s
else o.at=s-B.b.gK(q).gH()
return!0},
f3(a){var s=$.nV().bu(0,a),r=A.o(s,A.j(s).i("f.E"))
if(this.P(-1)===13&&this.W()===10){if(0<0||0>=r.length)return A.b(r,-1)
r.pop()}return r}}
A.ap.prototype={$ioq:1}
A.dg.prototype={}
A.ew.prototype={
gaE(){var s=A.X(this.f,this.c),r=s.b
return A.a0(s.a,r,r)},
c4(a,b){var s=b==null?this.c:b.b
return this.f.c3(a.b,s)},
am(a){return this.c4(a,null)},
aJ(a){var s,r,q=this
if(!q.eq(a))return!1
s=q.c
r=q.gcP()
q.f.c3(s,r.a+r.c.length)
return!0},
cH(a,b,c){var s,r,q=this,p=q.b
A.t_(p,null,c,b)
s=c==null&&b==null?q.gcP():null
if(c==null)c=s==null?q.c:s.a
if(b==null)if(s==null)b=0
else{r=s.a
b=r+s.c.length-r}throw A.a(A.oD(a,q.f.c3(c,c+b),p))},
cG(a,b){return this.cH(a,b,null)},
fV(a){return this.cH(a,null,null)}}
A.ey.prototype={
gcP(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
h7(){var s,r=this,q=r.b,p=q.length
if(r.c===p)r.d2("more input")
s=r.c++
if(!(s>=0&&s<p))return A.b(q,s)
return q.charCodeAt(s)},
P(a){var s,r
if(a==null)a=0
s=this.c+a
if(s<0||s>=this.b.length)return null
r=this.b
if(!(s>=0&&s<r.length))return A.b(r,s)
return r.charCodeAt(s)},
W(){return this.P(null)},
ah(){var s,r=this,q=r.a_()
r.a0(q)
if((q&4294966272)!==55296)return q
s=r.W()
if(s==null||s>>>10!==55)return q
r.a0(r.a_())
return 65536+((q&1023)<<10|s&1023)},
bE(a){var s,r=this,q=r.aJ(a)
if(q){s=r.d
r.e=r.c=s.a+s.c.length}return q},
bV(a){var s,r
if(this.bE(a))return
s=A.J(a,"\\","\\\\")
r='"'+A.J(s,'"','\\"')+'"'
this.d2(r)},
aJ(a){var s=this,r=B.a.by(a,s.b,s.c)
s.d=r
s.e=s.c
return r!=null},
D(a,b){var s=this.c
return B.a.v(this.b,b,s)},
d2(a){this.cH("expected "+a+".",0,this.c)}}
A.hs.prototype={
cF(a,b){var s,r,q,p,o,n,m,l,k,j=this
a=a
b=b
s=t.m
if(s.b(a))a=a.ga5()
if(s.b(b))b=b.ga5()
for(s=j.a,r=s.length,q=j.b,p=q.length,o=0;o<r;++o){n=a
m=s[o]
l=n==null?m==null:n===m
m=b
if(!(o<p))return A.b(q,o)
n=q[o]
k=m==null?n==null:m===n
if(l&&k)return!0
if(l||k)return!1}B.b.t(s,a)
B.b.t(q,b)
try{r=t.j
if(r.b(a)&&r.b(b)){r=j.eX(a,b)
return r}else{r=t.f
if(r.b(a)&&r.b(b)){r=j.f0(a,b)
return r}else if(typeof a=="number"&&typeof b=="number"){r=j.f4(a,b)
return r}else{r=J.r(a,b)
return r}}}finally{if(0>=s.length)return A.b(s,-1)
s.pop()
if(0>=q.length)return A.b(q,-1)
q.pop()}},
eX(a,b){var s,r=J.E(a),q=J.E(b)
if(r.gl(a)!==q.gl(b))return!1
for(s=0;s<r.gl(a);++s)if(!this.cF(r.h(a,s),q.h(b,s)))return!1
return!0},
f0(a,b){var s,r
if(a.gl(a)!==b.gl(b))return!1
for(s=a.gF(),s=s.gp(s);s.k();){r=s.gm()
if(!b.E(r))return!1
if(!this.cF(a.h(0,r),b.h(0,r)))return!1}return!0},
f4(a,b){if(isNaN(a)&&isNaN(b))return!0
return a===b}}
A.iI.prototype={
$1(a){var s,r,q,p=this
if(!p.a.t(0,a))return-1
try{if(t.f.b(a)){s=B.aR
r=t.X
q=s.b5(a.gF().ac(0,p,r))
r=s.b5(a.gag().ac(0,p,r))
return q^r}else if(t.R.b(a)){r=B.aJ.b5(J.aT(a,p,t.X))
return r}else if(t.m.b(a)){r=J.ac(a.ga5())
return r}else{r=J.ac(a)
return r}}finally{p.a.I(0,a)}},
$S:6}
A.ab.prototype={
n(a){return this.a.bm()},
gB(){return this.a},
gA(){return this.b}}
A.cR.prototype={
gB(){return B.aT},
n(a){return"DOCUMENT_START"},
$iab:1,
gA(){return this.a}}
A.cb.prototype={
gB(){return B.aU},
n(a){return"DOCUMENT_END"},
$iab:1,
gA(){return this.a}}
A.cJ.prototype={
gB(){return B.aa},
n(a){return"ALIAS "+this.b},
$iab:1,
gA(){return this.a}}
A.dL.prototype={
n(a){var s=this,r=s.gB().n(0)
if(s.gbT()!=null)r+=" &"+A.m(s.gbT())
if(s.gbZ()!=null)r+=" "+A.m(s.gbZ())
return r.charCodeAt(0)==0?r:r},
$iab:1}
A.ai.prototype={
gB(){return B.ab},
n(a){return this.es(0)+' "'+this.d+'"'},
gA(){return this.a},
gbT(){return this.b},
gbZ(){return this.c}}
A.bJ.prototype={
gB(){return B.ac},
gA(){return this.a},
gbT(){return this.b},
gbZ(){return this.c}}
A.bH.prototype={
gB(){return B.ad},
gA(){return this.a},
gbT(){return this.b},
gbZ(){return this.c}}
A.aK.prototype={
bm(){return"EventType."+this.b}}
A.fQ.prototype={
bY(){var s,r,q=this,p=q.a
if(p.c===B.a0)return null
s=p.aT()
if(s.gB()===B.a9){q.d=q.d.ap(0,s.gA())
return null}t.dg.a(s)
r=q.bJ(p.aT())
p=s.a.ap(0,t.gR.a(p.aT()).a)
q.d=q.d.ap(0,p)
q.b.bv(0)
return new A.dq(r,p)},
bJ(a){var s,r,q=this,p=a.gB()
A:{if(B.aa===p){s=q.eY(t.a6.a(a))
break A}if(B.ab===p){t.fy.a(a)
s=a.c
if(s==="!")r=new A.ao(a.d,a.e,a.a)
else if(s!=null)r=q.f6(a)
else{r=q.fE(a)
if(r==null)r=new A.ao(a.d,a.e,a.a)}q.cr(a.b,r)
s=r
break A}if(B.ac===p){s=q.f_(t.fP.a(a))
break A}if(B.ad===p){s=q.eZ(t.fY.a(a))
break A}s=A.F(A.bi("Unreachable"))}return s},
cr(a,b){if(a==null)return
this.b.j(0,a,b)},
eY(a){var s=a.b,r=this.b.h(0,s)
if(r!=null){if(this.c.q(0,s))throw A.a(A.H("Self-referential collections are not supported.",a.a))
return r}throw A.a(A.H("Undefined alias.",a.a))},
f_(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c
if(i!=="!"&&i!=null&&i!=="tag:yaml.org,2002:seq")throw A.a(A.H("Invalid tag for sequence.",a.a))
s=A.c([],t.r)
i=a.a
m=new A.bS(new A.dk(s,t.ga),a.d,i)
l=a.b
j.cr(l,m)
r=null
try{q=l
p=null
if(q!=null){p=q
j.c.t(0,p)}k=j.a
r=k.aT()
while(r.gB()!==B.y){J.dV(s,j.bJ(r))
r=k.aT()}}finally{o=l
n=null
if(o!=null){n=o
j.c.I(0,n)}}m.a=i.ap(0,r.gA())
return m},
eZ(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.c
if(g!=="!"&&g!=null&&g!=="tag:yaml.org,2002:map")throw A.a(A.H("Invalid tag for mapping.",a.a))
s=A.fN(A.qM(),A.qN(),t.z,t.T)
g=a.a
k=new A.bT(new A.b3(s,t.gr),a.d,g)
j=a.b
h.cr(j,k)
r=null
try{q=j
p=null
if(q!=null){p=q
h.c.t(0,p)}i=h.a
r=i.aT()
while(r.gB()!==B.z){o=h.bJ(r)
n=h.bJ(i.aT())
if(s.E(o)){i=A.H("Duplicate mapping key.",o.a)
throw A.a(i)}J.dU(s,o,n)
r=i.aT()}}finally{m=j
l=null
if(m!=null){l=m
h.c.I(0,l)}}k.a=g.ap(0,r.gA())
return k},
f6(a){var s,r=this,q=a.c
switch(q){case"tag:yaml.org,2002:null":s=r.dt(a)
if(s!=null)return s
throw A.a(A.H("Invalid null scalar.",a.a))
case"tag:yaml.org,2002:bool":s=r.co(a)
if(s!=null)return s
throw A.a(A.H("Invalid bool scalar.",a.a))
case"tag:yaml.org,2002:int":s=r.fg(a,!1)
if(s!=null)return s
throw A.a(A.H("Invalid int scalar.",a.a))
case"tag:yaml.org,2002:float":s=r.fh(a,!1)
if(s!=null)return s
throw A.a(A.H("Invalid float scalar.",a.a))
case"tag:yaml.org,2002:str":return new A.ao(a.d,a.e,a.a)
default:throw A.a(A.H("Undefined tag: "+A.m(q)+".",a.a))}},
fE(a){var s,r=this,q=null,p=a.d,o=p.length
if(o===0)return new A.ao(q,a.e,a.a)
if(0>=o)return A.b(p,0)
s=p.charCodeAt(0)
A:{if(46===s||43===s||45===s){p=r.du(a)
break A}if(110===s||78===s){p=o===4?r.dt(a):q
break A}if(116===s||84===s){p=o===4?r.co(a):q
break A}if(102===s||70===s){p=o===5?r.co(a):q
break A}if(126===s){p=o===1?new A.ao(q,a.e,a.a):q
break A}p=s>=48&&s<=57?r.du(a):q
break A}return p},
dt(a){var s,r=a.d
A:{if(""===r||"null"===r||"Null"===r||"NULL"===r||"~"===r){s=new A.ao(null,a.e,a.a)
break A}s=null
break A}return s},
co(a){var s,r=a.d
A:{if("true"===r||"True"===r||"TRUE"===r){s=new A.ao(!0,a.e,a.a)
break A}if("false"===r||"False"===r||"FALSE"===r){s=new A.ao(!1,a.e,a.a)
break A}s=null
break A}return s},
cp(a,b,c){var s=this.fi(a.d,b,c)
return s==null?null:new A.ao(s,a.e,a.a)},
du(a){return this.cp(a,!0,!0)},
fg(a,b){return this.cp(a,b,!0)},
fh(a,b){return this.cp(a,!0,b)},
fi(a,b,c){var s,r,q,p,o,n,m=null,l=a.length
if(0>=l)return A.b(a,0)
s=a.charCodeAt(0)
if(c&&l===1){r=s-48
return r>=0&&r<=9?r:m}if(1>=l)return A.b(a,1)
q=a.charCodeAt(1)
if(c&&s===48){if(q===120)return A.aU(a,m)
if(q===111)return A.aU(B.a.D(a,2),8)}if(!(s>=48&&s<=57))p=(s===43||s===45)&&q>=48&&q<=57
else p=!0
if(p){o=c?A.aU(a,10):m
return b?o==null?A.m4(a):o:o}if(!b)return m
p=s===46
if(!(p&&q>=48&&q<=57))n=(s===45||s===43)&&q===46
else n=!0
if(n){if(l===5)switch(a){case"+.inf":case"+.Inf":case"+.INF":return 1/0
case"-.inf":case"-.Inf":case"-.INF":return-1/0}return A.m4(a)}if(l===4&&p)switch(a){case".inf":case".Inf":case".INF":return 1/0
case".nan":case".NaN":case".NAN":return 0/0}return m}}
A.fV.prototype={
aT(){var s,r,q,p
try{if(this.c===B.a0){q=A.bi("No more events.")
throw A.a(q)}s=this.fC()
return s}catch(p){q=A.bC(p)
if(q instanceof A.dg){r=q
throw A.a(A.H(r.a,r.b))}else throw p}},
fC(){var s,r,q,p=this
switch(p.c){case B.aD:s=p.a.Z()
p.c=B.a_
return new A.ab(B.aS,s.gA())
case B.a_:return p.f9()
case B.az:return p.f7()
case B.Z:return p.f8()
case B.ax:return p.bo(!0)
case B.cV:return p.bp(!0,!0)
case B.cU:return p.b2()
case B.ay:p.a.Z()
return p.dn()
case B.F:return p.dn()
case B.H:return p.ff()
case B.aw:p.a.Z()
return p.dm()
case B.D:return p.dm()
case B.E:return p.f5()
case B.aC:return p.ds(!0)
case B.a2:return p.fc()
case B.aE:return p.fd()
case B.X:return p.fe()
case B.Y:p.c=B.a2
r=p.a.a1().gA()
r=A.X(r.a,r.b)
q=r.b
return new A.ab(B.z,A.a0(r.a,q,q))
case B.aB:return p.dq(!0)
case B.G:return p.fa()
case B.a1:return p.fb()
case B.aA:return p.dr(!0)
default:throw A.a(A.bi("Unreachable"))}},
f9(){var s,r,q,p=this,o=p.a,n=o.a1()
n.toString
for(s=n;s.gB()===B.S;s=n){o.Z()
n=o.a1()
n.toString}if(s.gB()!==B.P&&s.gB()!==B.Q&&s.gB()!==B.R&&s.gB()!==B.w){p.dw()
B.b.t(p.b,B.Z)
p.c=B.ax
o=s.gA()
o=A.X(o.a,o.b)
n=o.b
return A.lR(A.a0(o.a,n,n),!0,null,null)}if(s.gB()===B.w){p.c=B.a0
o.Z()
return new A.ab(B.a9,s.gA())}r=s.gA()
q=p.dw()
s=o.a1()
if(s.gB()!==B.R)throw A.a(A.H("Expected document start.",s.gA()))
B.b.t(p.b,B.Z)
p.c=B.az
o.Z()
return A.lR(r.ap(0,s.gA()),!1,q.b,q.a)},
f7(){var s,r,q=this,p=q.a.a1()
switch(p.gB().a){case 2:case 3:case 4:case 5:case 1:s=q.b
if(0>=s.length)return A.b(s,-1)
q.c=s.pop()
s=p.gA()
s=A.X(s.a,s.b)
r=s.b
return new A.ai(A.a0(s.a,r,r),null,null,"",B.i)
default:return q.bo(!0)}},
f8(){var s,r,q
this.d.bv(0)
this.c=B.a_
s=this.a
r=s.a1()
if(r.gB()===B.S){s.Z()
return new A.cb(r.gA(),!1)}else{s=r.gA()
s=A.X(s.a,s.b)
q=s.b
return new A.cb(A.a0(s.a,q,q),!0)}},
bp(a,b){var s,r,q,p,o,n=this,m={},l=n.a,k=l.a1()
k.toString
if(k instanceof A.cK){l.Z()
m=n.b
if(0>=m.length)return A.b(m,-1)
n.c=m.pop()
return new A.cJ(k.a,k.b)}m.a=m.b=null
s=k.gA()
s=A.X(s.a,s.b)
r=s.b
m.c=A.a0(s.a,r,r)
r=new A.fW(m,n)
s=new A.fX(m,n)
if(k instanceof A.bp){q=r.$1(k)
if(q instanceof A.bw)q=s.$1(q)}else if(k instanceof A.bw){q=s.$1(k)
if(q instanceof A.bp)q=r.$1(q)}else q=k
k=m.a
if(k!=null){s=k.b
if(s==null)p=k.c
else{o=n.d.h(0,s)
if(o==null)throw A.a(A.H("Undefined tag handle.",m.a.a))
k=o.b
s=m.a
s=s==null?null:s.c
p=k+(s==null?"":s)}}else p=null
if(b&&q.gB()===B.u){n.c=B.H
return new A.bJ(m.c.ap(0,q.gA()),m.b,p,B.m)}if(q instanceof A.bu){if(p==null&&q.c!==B.i)p="!"
k=n.b
if(0>=k.length)return A.b(k,-1)
n.c=k.pop()
l.Z()
return new A.ai(m.c.ap(0,q.a),m.b,p,q.b,q.c)}if(q.gB()===B.au){n.c=B.aC
return new A.bJ(m.c.ap(0,q.gA()),m.b,p,B.f)}if(q.gB()===B.as){n.c=B.aB
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.f)}if(a&&q.gB()===B.T){n.c=B.ay
return new A.bJ(m.c.ap(0,q.gA()),m.b,p,B.m)}if(a&&q.gB()===B.C){n.c=B.aw
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.m)}if(m.b!=null||p!=null){l=n.b
if(0>=l.length)return A.b(l,-1)
n.c=l.pop()
return new A.ai(m.c,m.b,p,"",B.i)}throw A.a(A.H("Expected node content.",m.c))},
bo(a){return this.bp(a,!1)},
b2(){return this.bp(!1,!1)},
dn(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()===B.u){s=o.gA()
r=A.X(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.p){q.c=B.F
p=r.b
return new A.ai(A.a0(r.a,p,p),null,null,"",B.i)}else{B.b.t(q.b,B.F)
return q.bo(!0)}}if(o.gB()===B.p){p.Z()
p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
return new A.ab(B.y,o.gA())}if(o.gB()===B.k){p.Z()
B.b.t(q.b,B.F)
return q.bo(!0)}throw A.a(A.H("While parsing a block collection, expected '-'.",o.gA().gC().bA()))},
ff(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()!==B.u){p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
p=o.gA()
p=A.X(p.a,p.b)
s=p.b
return new A.ab(B.y,A.a0(p.a,s,s))}s=o.gA()
r=A.X(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.k||o.gB()===B.l||o.gB()===B.p){q.c=B.H
p=r.b
return new A.ai(A.a0(r.a,p,p),null,null,"",B.i)}else{B.b.t(q.b,B.H)
return q.bo(!0)}},
dm(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()===B.k){s=n.gA()
r=A.X(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.E
o=r.b
return new A.ai(A.a0(r.a,o,o),p,p,"",B.i)}else{B.b.t(q.b,B.E)
return q.bp(!0,!0)}}if(n.gB()===B.l){q.c=B.E
o=n.gA()
o=A.X(o.a,o.b)
s=o.b
return new A.ai(A.a0(o.a,s,s),p,p,"",B.i)}if(n.gB()===B.p){o.Z()
o=q.b
if(0>=o.length)return A.b(o,-1)
q.c=o.pop()
return new A.ab(B.z,n.gA())}throw A.a(A.H("Expected a key while parsing a block mapping.",n.gA().gC().bA()))},
f5(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()!==B.l){q.c=B.D
o=n.gA()
o=A.X(o.a,o.b)
s=o.b
return new A.ai(A.a0(o.a,s,s),p,p,"",B.i)}s=n.gA()
r=A.X(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.D
o=r.b
return new A.ai(A.a0(r.a,o,o),p,p,"",B.i)}else{B.b.t(q.b,B.D)
return q.bp(!0,!0)}},
ds(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.r){if(!a){if(r.gB()!==B.o)throw A.a(A.H("While parsing a flow sequence, expected ',' or ']'.",r.gA().gC().bA()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){p.c=B.aE
s.Z()
return new A.bH(r.gA(),null,null,B.f)}else if(r.gB()!==B.r){B.b.t(p.b,B.a2)
return p.b2()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.y,r.gA())},
fc(){return this.ds(!1)},
fd(){var s,r,q=this,p=q.a.a1()
if(p.gB()===B.l||p.gB()===B.o||p.gB()===B.r){s=p.gA()
r=A.X(s.a,s.b)
q.c=B.X
s=r.b
return new A.ai(A.a0(r.a,s,s),null,null,"",B.i)}else{B.b.t(q.b,B.X)
return q.b2()}},
fe(){var s,r=this,q=r.a,p=q.a1()
if(p.gB()===B.l){q.Z()
p=q.a1()
if(p.gB()!==B.o&&p.gB()!==B.r){B.b.t(r.b,B.Y)
return r.b2()}}r.c=B.Y
q=p.gA()
q=A.X(q.a,q.b)
s=q.b
return new A.ai(A.a0(q.a,s,s),null,null,"",B.i)},
dq(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.t){if(!a){if(r.gB()!==B.o)throw A.a(A.H("While parsing a flow mapping, expected ',' or '}'.",r.gA().gC().bA()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){s.Z()
r=s.a1()
if(r.gB()!==B.l&&r.gB()!==B.o&&r.gB()!==B.t){B.b.t(p.b,B.a1)
return p.b2()}else{p.c=B.a1
s=r.gA()
s=A.X(s.a,s.b)
q=s.b
return new A.ai(A.a0(s.a,q,q),null,null,"",B.i)}}else if(r.gB()!==B.t){B.b.t(p.b,B.aA)
return p.b2()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.z,r.gA())},
fa(){return this.dq(!1)},
dr(a){var s,r=this,q=null,p=r.a,o=p.a1()
o.toString
if(a){r.c=B.G
p=o.gA()
p=A.X(p.a,p.b)
o=p.b
return new A.ai(A.a0(p.a,o,o),q,q,"",B.i)}if(o.gB()===B.l){p.Z()
s=p.a1()
if(s.gB()!==B.o&&s.gB()!==B.t){B.b.t(r.b,B.G)
return r.b2()}}else s=o
r.c=B.G
p=s.gA()
p=A.X(p.a,p.b)
o=p.b
return new A.ai(A.a0(p.a,o,o),q,q,"",B.i)},
fb(){return this.dr(!1)},
dw(){var s,r,q,p,o,n=this,m=n.a,l=m.a1()
l.toString
s=A.c([],t.l)
r=l
q=null
for(;;){if(!(r.gB()===B.P||r.gB()===B.Q))break
if(r instanceof A.dm){if(q!=null)throw A.a(A.H("Duplicate %YAML directive.",r.a))
l=r.b
if(l!==1||r.c===0)throw A.a(A.H("Incompatible YAML document. This parser only supports YAML 1.1 and 1.2.",r.a))
else{p=r.c
if(p>2)$.ku().$2("Warning: this parser only supports YAML 1.1 and 1.2.",r.a)}q=new A.hd(l,p)}else if(r instanceof A.di){o=new A.bO(r.b,r.c)
n.ex(o,r.a)
B.b.t(s,o)}m.Z()
l=m.a1()
l.toString
r=l}m=r.gA()
m=A.X(m.a,m.b)
l=m.b
n.c8(new A.bO("!","!"),A.a0(m.a,l,l),!0)
l=r.gA()
l=A.X(l.a,l.b)
m=l.b
n.c8(new A.bO("!!","tag:yaml.org,2002:"),A.a0(l.a,m,m),!0)
return new A.b4(q,s)},
c8(a,b,c){var s=this.d,r=a.a
if(s.E(r)){if(c)return
throw A.a(A.H("Duplicate %TAG directive.",b))}s.j(0,r,a)},
ex(a,b){return this.c8(a,b,!1)}}
A.fW.prototype={
$1(a){var s=this.a
s.b=a.b
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:43}
A.fX.prototype={
$1(a){var s=this.a
s.a=a
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:58}
A.a1.prototype={
n(a){return this.a}}
A.h_.prototype={
gdi(){var s,r=this.c.W()
if(r==null)return!1
switch(r){case 45:case 59:case 47:case 58:case 64:case 38:case 61:case 43:case 36:case 46:case 126:case 63:case 42:case 39:case 40:case 41:case 37:return!0
default:s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=122))s=r>=65&&r<=90
return s}},
geR(){if(!this.gdf())return!1
switch(this.c.W()){case 44:case 91:case 93:case 123:case 125:return!1
default:return!0}},
gde(){var s=this.c.W()
return s!=null&&s>=48&&s<=57},
geT(){var s,r=this.c.W()
if(r==null)return!1
s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))s=r>=65&&r<=70
return s},
geV(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r)break A
if(9===r||133===r){s=!0
break A}s=this.ck(0)
break A}return s},
gdf(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r||32===r)break A
if(133===r){s=!0
break A}s=this.ck(0)
break A}return s},
Z(){var s,r,q,p,o=this
if(o.e)throw A.a(A.bi("Out of tokens."))
if(!o.w)o.d9()
s=o.f
r=s.b
if(r===s.c)A.F(A.bi("No element"))
q=s.a
if(!(r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=s.$ti.c.a(p)
B.b.j(q,r,null)
s.b=(s.b+1&s.a.length-1)>>>0
o.w=!1;++o.r
o.e=p.gB()===B.w
return p},
a1(){var s,r=this
if(r.e)return null
if(!r.w)r.d9()
s=r.f
return s.gS(s)},
d9(){var s,r,q=this
for(s=q.f,r=q.z;;){if(s.gl(0)!==0){q.dH()
if(s.gl(0)===0)A.F(A.a4())
if(s.h(0,s.gl(0)-1).gB()===B.w)break
if(!B.b.R(r,new A.h0(q)))break}q.eM()}q.w=!0},
eM(){var s,r,q,p,o,n,m,l=this
if(!l.d){l.d=!0
s=l.f
r=l.c
r=A.X(r.f,r.c)
q=r.b
s.aw(s.$ti.c.a(new A.U(B.cL,A.a0(r.a,q,q))))
return}l.fw()
l.dH()
s=l.c
l.bN(s.at)
if(s.c===s.b.length){l.bN(-1)
l.aX()
l.y=!1
r=l.f
s=A.X(s.f,s.c)
q=s.b
r.aw(r.$ti.c.a(new A.U(B.w,A.a0(s.a,q,q))))
return}if(s.at===0){if(s.W()===37){l.bN(-1)
l.aX()
l.y=!1
p=l.fp()
if(p!=null){s=l.f
s.aw(s.$ti.c.a(p))}return}if(l.bI(3)){if(s.aJ("---")){l.d5(B.R)
return}if(s.aJ("...")){l.d5(B.S)
return}}}switch(s.W()){case 91:l.d7(B.au)
return
case 123:l.d7(B.as)
return
case 93:l.d6(B.r)
return
case 125:l.d6(B.t)
return
case 44:l.aX()
l.y=!0
l.b0(B.o)
return
case 42:l.d3(!1)
return
case 38:l.eJ()
return
case 33:l.br()
l.y=!1
r=l.f
q=s.c
if(s.P(1)===60){s.a0(s.a_())
s.a0(s.a_())
o=l.dE()
s.bV(">")
n=""}else{n=l.fu()
if(n.length>1&&B.a.u(n,"!")&&B.a.aG(n,"!"))o=l.fv(!1)
else{o=l.cu(!1,n)
if(o.length===0){n=null
o="!"}else n="!"}}r.aw(r.$ti.c.a(new A.bw(s.am(new A.ap(q)),n,o)))
return
case 39:l.d8(!0)
return
case 34:l.eL()
return
case 124:if(l.z.length!==1)l.bH()
l.d4(!0)
return
case 62:if(l.z.length!==1)l.bH()
l.eK()
return
case 37:case 64:case 96:l.bH()
break
case 45:if(l.bn(1))l.bG()
else{if(l.z.length===1){if(!l.y)A.F(A.H("Block sequence entries are not allowed here.",s.gaE()))
l.ct(s.at,B.T,A.X(s.f,s.c))}l.aX()
l.y=!0
l.b0(B.u)}return
case 63:if(l.bn(1))l.bG()
else{r=l.z
if(r.length===1){if(!l.y)A.F(A.H("Mapping keys are not allowed here.",s.gaE()))
l.ct(s.at,B.C,A.X(s.f,s.c))}l.y=r.length===1
l.b0(B.k)}return
case 58:if(l.z.length!==1&&l.f.gl(0)!==0){s=l.f
m=s.gK(s)
s=!0
if(m.gB()!==B.r)if(m.gB()!==B.t)if(m.gB()===B.at){s=t.f2.a(m).c
s=s===B.B||s===B.M}else s=!1
if(s){l.da()
return}}if(l.bn(1))l.bG()
else l.da()
return
default:if(!l.geV())l.bH()
l.bG()
return}},
bH(){return this.c.cG("Unexpected character.",1)},
dH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.z,r=e.c,q=e.f,p=r.f,o=e.x,n=0;m=s.length,n<m;++n){l=s[n]
if(l==null)continue
if(m!==1)continue
if(l.c===r.as)continue
if(l.e){k=B.b.h2(o,new A.h1(l))
if(k>=0){if(!(k<o.length))return A.b(o,k)
j=o[k].b===B.T}else j=!1
m=j?"Expected ':'. If this is a list entry, it must start with '- '.":"Expected ':'."
i=r.c
new A.ce(p,i).cX(p,i)
h=new A.bl(p,i,i)
h.c6(p,i,i)
A.F(new A.bR(null,m.charCodeAt(0)==0?m:m,h))
m=l.a
i=e.r
h=l.b
g=h.a
h=h.b
f=new A.bl(g,h,h)
f.c6(g,h,h)
q.ba(q,m-i,new A.U(B.k,f))}B.b.j(s,n,null)}},
br(){var s,r,q,p,o,n,m=this,l=m.z,k=l.length===1&&B.b.gK(m.x).a===m.c.at
if(!m.y)return
m.aX()
s=l.length
r=m.r
q=m.f.gl(0)
p=m.c
o=p.as
n=p.at
B.b.j(l,s-1,new A.c_(r+q,A.X(p.f,p.c),o,n,k))},
aX(){var s=this.z,r=B.b.gK(s)
if(r!=null&&r.e)throw A.a(A.H("Could not find expected ':' for simple key.",r.b.bA()))
B.b.j(s,s.length-1,null)},
eF(){var s=this.z,r=s.length
if(r===1)return
if(0>=r)return A.b(s,-1)
s.pop()},
dB(a,b,c,d){var s,r,q=this
if(q.z.length!==1)return
s=q.x
if(B.b.gK(s).a!==-1&&B.b.gK(s).a>=a)return
B.b.t(s,new A.cx(a,b))
s=c.b
r=new A.U(b,A.a0(c.a,s,s))
s=q.f
if(d==null)s.aw(s.$ti.c.a(r))
else s.ba(s,d-q.r,r)},
ct(a,b,c){return this.dB(a,b,c,null)},
bN(a){var s,r,q,p,o,n,m,l=this
if(l.z.length!==1)return
for(s=l.x,r=l.f,q=l.c,p=q.f,o=r.$ti.c;B.b.gK(s).a>a;){n=q.c
new A.ce(p,n).cX(p,n)
m=new A.bl(p,n,n)
m.c6(p,n,n)
r.aw(o.a(new A.U(B.p,m)))
if(0>=s.length)return A.b(s,-1)
s.pop()}},
d5(a){var s,r,q,p=this
p.bN(-1)
p.aX()
p.y=!1
s=p.c
r=s.c
s.ah()
s.ah()
s.ah()
q=p.f
q.aw(q.$ti.c.a(new A.U(a,s.am(new A.ap(r)))))},
d7(a){var s=this
s.br()
B.b.t(s.z,null)
s.y=!0
s.b0(a)},
d6(a){var s=this
s.aX()
s.eF()
s.y=!1
s.b0(a)},
da(){var s,r,q,p,o,n=this,m=n.z,l=B.b.gK(m)
if(l!=null){s=n.f
r=l.a
q=n.r
p=l.b
o=p.b
s.ba(s,r-q,new A.U(B.k,A.a0(p.a,o,o)))
n.dB(l.d,B.C,p,r)
B.b.j(m,m.length-1,null)
n.y=!1}else if(m.length===1){if(!n.y)throw A.a(A.H("Mapping values are not allowed here. Did you miss a colon earlier?",n.c.gaE()))
m=n.c
n.ct(m.at,B.C,A.X(m.f,m.c))
n.y=!0}else if(n.y){n.y=!1
n.b0(B.k)}n.b0(B.l)},
b0(a){var s,r=this.c,q=r.c
r.ah()
s=this.f
s.aw(s.$ti.c.a(new A.U(a,r.am(new A.ap(q)))))},
d3(a){var s,r=this
r.br()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fn(a)))},
eJ(){return this.d3(!0)},
d4(a){var s,r=this
r.aX()
r.y=!0
s=r.f
s.aw(s.$ti.c.a(r.fo(a)))},
eK(){return this.d4(!1)},
d8(a){var s,r=this
r.br()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fs(a)))},
eL(){return this.d8(!1)},
bG(){var s,r=this
r.br()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.ft()))},
fw(){var s,r,q,p,o,n,m=this
for(s=m.z,r=m.c,q=!1;;q=!0){if(r.at===0)r.bE("\ufeff")
p=!q
for(;;){if(r.W()!==32)o=(s.length!==1||p)&&r.W()===9
else o=!0
if(!o)break
r.a0(r.a_())}if(r.W()===9)r.cG("Tab characters are not allowed as indentation.",1)
m.cv()
n=r.P(0)
if(n===13||n===10){m.bM()
if(s.length===1)m.y=!0}else break}},
fp(){var s,r,q,p,o,n,m,l,k,j=this,i="Expected whitespace.",h=j.c,g=new A.ap(h.c)
h.a0(h.a_())
s=j.fq()
if(s==="YAML"){j.bs()
r=j.dF()
h.bV(".")
q=j.dF()
p=new A.dm(h.am(g),r,q)}else if(s==="TAG"){j.bs()
o=j.dD(!0)
if(!j.eS(0))A.F(A.H(i,h.gaE()))
j.bs()
n=j.dE()
if(!j.bI(0))A.F(A.H(i,h.gaE()))
p=new A.di(h.am(g),o,n)}else{m=h.am(g)
$.ku().$2("Warning: unknown directive.",m)
m=h.b.length
for(;;){if(h.c!==m){l=h.P(0)
k=l===13||l===10}else k=!0
if(!!k)break
h.ah()}return null}j.bs()
j.cv()
if(!(h.c===h.b.length||j.dd(0)))throw A.a(A.H("Expected comment or line break after directive.",h.am(g)))
j.bM()
return p},
fq(){var s,r=this.c,q=r.c
while(this.gdf())r.ah()
s=r.D(0,q)
if(s.length===0)throw A.a(A.H("Expected directive name.",r.gaE()))
else if(!this.bI(0))throw A.a(A.H("Unexpected character in directive name.",r.gaE()))
return s},
dF(){var s,r,q=this.c,p=q.c
for(;;){s=q.W()
if(!(s!=null&&s>=48&&s<=57))break
q.a0(q.a_())}r=q.D(0,p)
if(r.length===0)throw A.a(A.H("Expected version number.",q.gaE()))
return A.cG(r,null,null)},
fn(a){var s,r,q,p,o=this.c,n=new A.ap(o.c)
o.ah()
s=o.c
while(this.geR())o.ah()
r=o.D(0,s)
q=o.W()
if(r.length!==0)p=!this.bI(0)&&q!==63&&q!==58&&q!==44&&q!==93&&q!==125&&q!==37&&q!==64&&q!==96
else p=!0
if(p)throw A.a(A.H("Expected alphanumeric character.",o.gaE()))
if(a)return new A.bp(o.am(n),r)
else return new A.cK(o.am(n),r)},
dD(a){var s,r,q,p=this.c
p.bV("!")
s=new A.Y("!")
r=p.c
while(this.gdi())p.a0(p.a_())
q=p.D(0,r)
q=s.a+=q
if(p.W()===33)p=s.a=q+A.A(p.ah())
else{if(a&&(q.charCodeAt(0)==0?q:q)!=="!")p.bV("!")
p=q}return p.charCodeAt(0)==0?p:p},
fu(){return this.dD(!1)},
cu(a,b){var s,r,q,p
if((b==null?0:b.length)>1){b.toString
B.a.D(b,1)}s=this.c
r=s.c
q=s.W()
for(;;){if(!this.gdi())if(a)p=q===44||q===91||q===93
else p=!1
else p=!0
if(!p)break
s.a0(s.a_())
q=s.W()}s=s.D(0,r)
return A.al(s,0,s.length,B.e,!1)},
dE(){return this.cu(!0,null)},
fv(a){return this.cu(a,null)},
fo(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="0 may not be used as an indentation indicator.",a2=a0.c,a3=new A.ap(a2.c)
a2.ah()
s=a2.W()
r=s===43
q=0
if(r||s===45){p=r?B.W:B.V
a2.ah()
if(a0.gde()){if(a2.W()===48)throw A.a(A.H(a1,a2.am(a3)))
q=a2.ah()-48}}else if(a0.gde()){if(a2.W()===48)throw A.a(A.H(a1,a2.am(a3)))
q=a2.ah()-48
s=a2.W()
r=s===43
if(r||s===45){p=r?B.W:B.V
a2.ah()}else p=B.av}else p=B.av
a0.bs()
a0.cv()
r=a2.b
o=r.length
if(!(a2.c===o||a0.dd(0)))throw A.a(A.H("Expected comment or line break.",a2.gaE()))
a0.bM()
if(q!==0){n=a0.x
m=B.b.gK(n).a>=0?B.b.gK(n).a+q:q}else m=0
l=a0.dC(m)
m=l.a
k=l.b
j=new A.Y("")
i=new A.ap(a2.c)
n=!a4
h=""
g=!1
f=""
for(;;){e=a2.at
if(!(e===m&&a2.c!==o))break
d=!1
if(e===0){s=a2.P(3)
if(s==null||s===32||s===9||s===13||s===10)e=a2.aJ("---")||a2.aJ("...")
else e=d}else e=d
if(e)break
s=a2.P(0)
c=s===32||s===9
if(n&&h.length!==0&&!g&&!c){if(k.length===0){f+=A.A(32)
j.a=f}}else f=j.a=f+h
j.a=f+k
s=a2.P(0)
g=s===32||s===9
b=a2.c
for(;;){if(a2.c!==o){s=a2.P(0)
f=s===13||s===10}else f=!0
if(!!f)break
a2.ah()}i=a2.c
f=j.a+=B.a.v(r,b,i)
a=new A.ap(i)
h=i!==o?a0.b9():"\n"
l=a0.dC(m)
m=l.a
k=l.b
i=a}if(p!==B.V){r=f+h
j.a=r}else r=f
if(p===B.W)r=j.a=r+k
a2=a2.c4(a3,i)
o=a4?B.O:B.N
return new A.bu(a2,r.charCodeAt(0)==0?r:r,o)},
dC(a){var s,r,q,p,o,n,m,l=new A.Y("")
for(s=this.c,r=a===0,q=!r,p=0;;){for(;;){if(!((!q||s.at<a)&&s.W()===32))break
s.a0(s.a_())}o=s.at
if(o>p)p=o
n=s.P(0)
if(!(n===13||n===10))break
m=this.b9()
l.a+=m}if(r){s=this.x
a=p<B.b.gK(s).a+1?B.b.gK(s).a+1:p}s=l.a
return new A.dA(a,s.charCodeAt(0)==0?s:s)},
fs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.c,b=new A.Y("")
d.a0(d.a_())
for(s=!a,r=d.b.length;;){q=!1
if(d.at===0){p=d.P(3)
if(p==null||p===32||p===9||p===13||p===10)q=d.aJ("---")||d.aJ("...")}if(q)d.fV("Unexpected document indicator.")
if(d.c===r)throw A.a(A.H("Unexpected end of file.",d.gaE()))
for(;;){p=d.P(0)
o=!1
if(!!(p==null||p===32||p===9||p===13||p===10))break
p=d.W()
if(a&&p===39&&d.P(1)===39){d.a0(d.a_())
d.a0(d.a_())
q=A.A(39)
b.a+=q}else if(p===(a?39:34))break
else{q=!1
if(s)if(p===92){n=d.P(1)
q=n===13||n===10}if(q){d.a0(d.a_())
e.bM()
o=!0
break}else if(s&&p===92){m=new A.ap(d.c)
l=null
switch(d.P(1)){case 48:q=A.A(0)
b.a+=q
break
case 97:q=A.A(7)
b.a+=q
break
case 98:q=A.A(8)
b.a+=q
break
case 116:case 9:q=A.A(9)
b.a+=q
break
case 110:q=A.A(10)
b.a+=q
break
case 118:q=A.A(11)
b.a+=q
break
case 102:q=A.A(12)
b.a+=q
break
case 114:q=A.A(13)
b.a+=q
break
case 101:q=A.A(27)
b.a+=q
break
case 32:case 34:case 47:case 92:q=d.P(1)
q.toString
q=A.A(q)
b.a+=q
break
case 78:q=A.A(133)
b.a+=q
break
case 95:q=A.A(160)
b.a+=q
break
case 76:q=A.A(8232)
b.a+=q
break
case 80:q=A.A(8233)
b.a+=q
break
case 120:l=2
break
case 117:l=4
break
case 85:l=8
break
default:throw A.a(A.H("Unknown escape character.",d.am(m)))}d.a0(d.a_())
d.a0(d.a_())
if(l!=null){for(k=0,j=0;j<l;++j){if(!e.geT()){d.a0(d.a_())
throw A.a(A.H("Expected "+A.m(l)+"-digit hexidecimal number.",d.am(m)))}i=d.a_()
d.a0(i)
k=(k<<4>>>0)+e.ey(i)}if(k>=55296&&k<=57343||k>1114111)throw A.a(A.H("Invalid Unicode character escape code.",d.am(m)))
q=A.A(k)
b.a+=q}}else{q=A.A(d.ah())
b.a+=q}}}q=d.W()
if(q===(a?39:34))break
h=new A.Y("")
g=new A.Y("")
f=""
for(;;){p=d.P(0)
if(!(p===32||p===9)){p=d.P(0)
q=p===13||p===10}else q=!0
if(!q)break
p=d.P(0)
if(p===32||p===9)if(!o){i=d.a_()
d.a0(i)
q=A.A(i)
h.a+=q}else d.a0(d.a_())
else if(!o){h.a=""
f=e.b9()
o=!0}else{q=e.b9()
g.a+=q}}if(o)if(f.length!==0&&g.a.length===0){q=A.A(32)
b.a+=q}else b.a+=g.n(0)
else{b.a+=h.n(0)
h.a=""}}d.a0(d.a_())
d=d.am(new A.ap(c))
c=b.a
s=a?B.B:B.M
return new A.bu(d,c.charCodeAt(0)==0?c:c,s)},
ft(){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=j.c,h=new A.ap(i),g=new A.Y(""),f=new A.Y(""),e=B.b.gK(k.x).a+1
for(s=k.z,r="",q="";;){p=""
o=!1
if(j.at===0){n=j.P(3)
if(n==null||n===32||n===9||n===13||n===10)o=j.aJ("---")||j.aJ("...")}if(o)break
if(j.W()===35)break
if(k.dg(0))if(r.length!==0){if(q.length===0){o=A.A(32)
g.a+=o}else g.a+=q
r=p
q=""}else{g.a+=f.n(0)
f.a=""}m=j.c
while(k.dg(0))j.ah()
h=j.c
g.a+=B.a.v(j.b,m,h)
h=new A.ap(h)
n=j.P(0)
if(!(n===32||n===9)){n=j.P(0)
o=!(n===13||n===10)}else o=!1
if(o)break
for(;;){n=j.P(0)
if(!(n===32||n===9)){n=j.P(0)
o=n===13||n===10}else o=!0
if(!o)break
n=j.P(0)
if(n===32||n===9){o=r.length===0
if(!o&&j.at<e&&j.W()===9)j.cG("Expected a space but found a tab.",1)
if(o){l=j.a_()
j.a0(l)
o=A.A(l)
f.a+=o}else j.a0(j.a_())}else if(r.length===0){r=k.b9()
f.a=""}else q=k.b9()}if(s.length===1&&j.at<e)break}if(r.length!==0)k.y=!0
j=j.c4(new A.ap(i),h)
i=g.a
return new A.bu(j,i.charCodeAt(0)==0?i:i,B.i)},
bM(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)return
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())},
b9(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)throw A.a(A.H("Expected newline.",s.gaE()))
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())
return"\n"},
eS(a){var s=this.c.P(a)
return s===32||s===9},
dd(a){var s=this.c.P(a)
return s===13||s===10},
bI(a){var s=this.c.P(a)
return s==null||s===32||s===9||s===13||s===10},
dg(a){var s,r=this.c
switch(r.P(a)){case 58:return this.bn(a+1)
case 35:s=r.P(a-1)
return s!==32&&s!==9
default:return this.bn(a)}},
bn(a){var s,r=this.c.P(a)
A:{s=!1
if(r==null)break A
if(44===r||91===r||93===r||123===r||125===r){s=this.z.length===1
break A}if(32===r||9===r||10===r||13===r||65279===r)break A
if(133===r){s=!0
break A}s=this.ck(a)
break A}return s},
ck(a){var s,r=this.c,q=r.P(a)
if(q==null)return!1
if(q>>>10===54){s=r.P(a+1)
return s!=null&&s>>>10===55}r=!0
if(!(q>=32&&q<=126))if(!(q>=160&&q<=55295))r=q>=57344&&q<=65533
return r},
ey(a){if(a<=57)return a-48
if(a<=70)return 10+a-65
return 10+a-97},
bs(){var s,r=this.c
for(;;){s=r.P(0)
if(!(s===32||s===9))break
r.a0(r.a_())}},
cv(){var s,r,q,p=this.c
if(p.W()!==35)return
s=p.b.length
for(;;){if(p.c!==s){r=p.P(0)
q=r===13||r===10}else q=!0
if(!!q)break
p.a0(p.a_())}}}
A.h0.prototype={
$1(a){t.b2.a(a)
return a!=null&&a.a===this.a.r},
$S:65}
A.h1.prototype={
$1(a){return t.eY.a(a).a===this.a.d},
$S:28}
A.c_.prototype={}
A.ds.prototype={
bm(){return"_Chomping."+this.b}}
A.bt.prototype={
n(a){return this.a}}
A.cM.prototype={
n(a){return this.a}}
A.U.prototype={
n(a){return this.a.bm()},
gB(){return this.a},
gA(){return this.b}}
A.dm.prototype={
gB(){return B.P},
n(a){return"VERSION_DIRECTIVE "+this.b+"."+this.c},
$iU:1,
gA(){return this.a}}
A.di.prototype={
gB(){return B.Q},
n(a){return"TAG_DIRECTIVE "+this.b+" "+this.c},
$iU:1,
gA(){return this.a}}
A.bp.prototype={
gB(){return B.cN},
n(a){return"ANCHOR "+this.b},
$iU:1,
gA(){return this.a}}
A.cK.prototype={
gB(){return B.cM},
n(a){return"ALIAS "+this.b},
$iU:1,
gA(){return this.a}}
A.bw.prototype={
gB(){return B.cO},
n(a){return"TAG "+A.m(this.b)+" "+this.c},
$iU:1,
gA(){return this.a}}
A.bu.prototype={
gB(){return B.at},
n(a){return"SCALAR "+this.c.n(0)+' "'+this.b+'"'},
$iU:1,
gA(){return this.a}}
A.Z.prototype={
bm(){return"TokenType."+this.b}}
A.ks.prototype={
$2(a,b){a=b.e1(a)
A.rp(a)},
$1(a){return this.$2(a,null)},
$S:20}
A.dq.prototype={
n(a){var s=this.a
return s.n(s)}}
A.hd.prototype={
n(a){return"%YAML "+this.a+"."+this.b}}
A.bO.prototype={
n(a){return"%TAG "+this.a+" "+this.b}}
A.bR.prototype={}
A.P.prototype={
gA(){return this.a}}
A.bT.prototype={
ga5(){return this},
gF(){return this.b.a.gF().ac(0,new A.hn(),t.z)},
h(a,b){var s=this.b.a.h(0,b)
return s==null?null:s.ga5()},
$ix:1,
gM(){return this.b},
ga2(){return this.c}}
A.hn.prototype={
$1(a){return t.T.a(a).ga5()},
$S:1}
A.bS.prototype={
ga5(){return this},
gl(a){return this.b.a.length},
sl(a,b){throw A.a(A.N("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.V(b)
s=this.b.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga5()},
j(a,b,c){throw A.a(A.N("Cannot modify an unmodifiable List"))},
$iw:1,
$if:1,
$ip:1,
gM(){return this.b},
ga2(){return this.c}}
A.ao.prototype={
n(a){return J.am(this.b)},
ga5(){return this.b},
ga2(){return this.c}}
A.eY.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.he.prototype={
n(a){return this.b},
dc(){var s=t.T
this.d=A.aN(s)
new A.hg(this,A.aN(s)).$1(this.c)},
G(a,b){var s,r,q,p,o,n,m,l,k=this,j=A.ar(b,B.j,B.h)
if(a.length===0){s=k.c.gA().gC().gL()
return k.bq(A.aw(s,A.c3(k.c)-s,A.dS(j,0,A.dO(k.b))),a,j)}r=A.c(a.slice(0),A.u(a))
q=A.aX(r,0,A.f5(a.length-1,"count",t.p),A.u(r).c)
p=B.b.gK(r)
o=k.dM(q,!0)
if(t.h.b(o)){if(!A.b5(p))throw A.a(A.fY(a,a,o))
n=A.o(o.gM(),t.T)
B.b.j(n,p,j)
m=A.ar(n,B.j,B.h)
return k.bq(A.rW(k,o,p,j),q,m)}if(t.S.b(o)){l=A.lw(o,new A.hk(p,j))
return k.bq(A.rX(k,o,p,j),q,l)}throw A.a(new A.d7(a,a,null,!1,null,null,"Scalar "+o.n(o)+" does not have key "+A.m(p)))},
I(a,b){var s,r,q,p,o,n=this,m=A.mg(),l=A.mg(),k=n.dM(b,!0)
if(b.length===0){m.b=A.aw(0,n.b.length,"")
l.b=A.ar(null,B.j,B.h)
n.bq(m.bL(),b,l.bL())
return k}s=A.c(b.slice(0),A.u(b))
r=A.aX(s,0,A.f5(b.length-1,"count",t.p),A.u(s).c)
q=B.b.gK(s)
p=n.dL(r)
if(t.h.b(p)){A.V(q)
m.b=A.ry(n,p,q)
o=A.o(p.gM(),t.T)
B.b.be(o,q)
l.b=A.ar(o,B.j,B.h)}else if(t.S.b(p)){m.b=A.rz(n,p,q)
l.b=A.lw(p,new A.hj(q))}n.bq(m.bL(),r,l.bL())
return k},
cz(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=J.E(a)
if(j.gJ(a))return k.c
s=k.c
r=j.aV(a)
for(q=t.S,p=t.h,o=0;o<r.length;++o){n=r[o]
if(b&&k.d.q(0,s))throw A.a(A.fe(a,s))
if(p.b(s)){m=s.gl(s)
if(!(A.b5(n)&&n>=0&&n<m))return k.cq(a,j.a3(a,o+1),s,c)
s=J.l(s.gM(),n)}else{if(q.b(s)){if(!A.lb(s,n))return k.cq(a,j.a3(a,o+1),s,c)
l=A.nk(s,n)
if(b)if(k.d.q(0,l))throw A.a(A.fe(a,l))
m=s.gM().h(0,l)
m.toString}else return k.cq(a,j.a3(a,o+1),s,c)
s=m}}if(b)k.bF(a,s)
return s},
dM(a,b){return this.cz(a,b,null)},
dL(a){return this.cz(a,!1,null)},
cw(a,b){return this.cz(a,!1,b)},
cq(a,b,c,d){var s=A.fY(a,b,c)
throw A.a(s)},
bF(a,b){var s,r,q,p,o,n=this
if(b==null)return n.bF(a,n.dL(a))
if(n.d.q(0,b))throw A.a(A.fe(a,b))
if(t.m.b(b))return
if(t.h.b(b))for(s=t.X,r=0;r<b.gl(b);++r){q=A.o(a,s)
q.push(r)
n.bF(q,J.l(b.gM(),r))}if(t.S.b(b)){p=b.gF().aV(0)
for(s=t.z,r=0;q=b.gF(),r<q.gl(q);++r){q=A.o(a,s)
if(!(r<p.length))return A.b(p,r)
q.push(p[r])
o=n.d
if(!(r<p.length))return A.b(p,r)
if(o.q(0,p[r])){if(!(r<p.length))return A.b(p,r)
throw A.a(A.fe(a,t.T.a(p[r])))}o=b.gM()
if(!(r<p.length))return A.b(p,r)
n.bF(q,o.h(0,p[r]))}}},
bq(a,b,c){var s,r=this,q=r.ce(r.c,b,[],c),p=r.b,o=p,n=a.a,m=B.a.aU(p,n,n+a.b,a.c),l=null
try{l=A.nC(new A.hi(m),t.T)}catch(s){if(A.bC(s) instanceof A.bR)throw A.a(A.ne("Failed to produce valid YAML after modification.",o,m))
else throw s}if(!A.bm(l,q))throw A.a(A.ne("Modification did not result in expected result.",o,m))
r.b=m
r.c=l
B.b.t(r.a,a)
r.dc()},
ce(a,b,c,d){var s,r,q=J.E(c),p=J.E(b)
A.cm(q.gl(c),0,p.gl(b),null)
if(p.gl(b)===q.gl(c))return d
s=p.U(b,q.gl(c))
if(t.h.b(a)){if(!A.r9(s,a.gl(a)))throw A.a(A.fY(b,c,a))
r=A.o(a.gM(),t.T)
A.V(s)
B.b.j(r,s,this.ce(J.l(a.gM(),s),b,p.a3(b,q.gl(c)+1),d))
return A.ar(r,B.j,B.h)}if(t.S.b(a))return A.lw(a,new A.hf(this,s,b,c,d))
throw A.a(A.fY(b,c,a))}}
A.hg.prototype={
$1(a){var s=this
t.T.a(a)
if(s.b.t(0,a)){if(t.S.b(a))a.gM().an(0,new A.hh(s))
else if(t.h.b(a))J.o_(a.gM(),s)}else s.a.d.t(0,a)},
$S:30}
A.hh.prototype={
$2(a,b){var s,r=t.T
r.a(b)
s=this.a
s.$1(r.a(a))
s.$1(b)},
$S:31}
A.hk.prototype={
$1(a){var s=this.b
a.j(0,this.a,s)
return s},
$S:21}
A.hj.prototype={
$1(a){return a.I(0,this.a)},
$S:33}
A.hi.prototype={
$0(){return A.f8(this.a,null,!1,null).a},
$S:22}
A.hf.prototype={
$1(a){var s=this,r=s.b,q=s.c
q=s.a.ce(t.T.a(a.h(0,r)),q,J.o8(q,J.a6(s.d)+1),s.e)
a.j(0,r,q)
return q},
$S:21}
A.jd.prototype={
$1(a){var s,r=this.a
if(!A.lb(r.b,a))return!1
s=A.qU(r.b,a)
if(!A.bm(r.a.h(0,a),r.b.h(0,s)))return!1
return!0},
$S:2}
A.iX.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iY.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iH.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.d7.prototype={
n(a){var s,r,q=this,p=q.d
if(p==null){p=q.f
s="Failed to traverse to subpath "+A.m(p)+"!"
r=J.E(p)
if(r.gaI(p))s+=" Parent "+A.m(q.r)+" does not contain key or index "+A.m(r.gK(p))
return"Invalid path: "+A.m(q.e)+". "+s+"."}return"Invalid path: "+A.m(q.e)+". "+A.m(p)}}
A.dW.prototype={}
A.eW.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+s
return"Assertion failed"}}
A.i6.prototype={
$0(){var s=J.l(this.a.gM(),this.b+1).gA(),r=s.gC().gL(),q=this.c,p=B.a.ae(q,"-",s.gl(s)===0?r:r-1),o=B.a.ae(q,"\n",p)
return new A.cz(o,p-(o+1))},
$S:16}
A.i7.prototype={
$0(){var s=t.T.a(this.b.gM().gF().U(0,this.a.a+1)).gA().gC()
return new A.cz(B.a.ae(this.c,"\n",s.gL()),s.gab())},
$S:16}
A.dd.prototype={
T(a,b){if(b==null)return!1
if(b instanceof A.dd)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gY(a){return B.d.gY(this.a)^B.d.gY(this.b)^B.a.gY(this.c)},
hc(){return A.a7(["offset",this.a,"length",this.b,"replacement",this.c],t.N,t.z)},
n(a){return"SourceEdit("+this.a+", "+this.b+', "'+this.c+'")'},
gl(a){return this.b}}
A.id.prototype={
$3(a,b,c){var s,r,q,p=this
A.e(b)
A.e(c)
if(B.a.N(c).length!==0){s=p.a
r=a-1
if(!(r>=0&&r<s.length))return A.b(s,r)
s=B.a.N(s[r]).length!==0&&!B.a.u(B.a.cU(c,p.b,"")," ")}else s=!1
q=s?p.c+c:c
return b+p.c+q},
$S:37}
A.kr.prototype={
$1(a){t.x.a(a)
return A.bn(t.T.a(a.a))+": "+A.bn(a.b)},
$S:23}
A.kp.prototype={
$1(a){var s,r,q
t.T.a(a)
s=this.a
r=A.dS(a,s,this.b)
if(t.f.b(a)||t.j.b(a)){q=A.ho(a)
q=q!==B.f}else q=!1
if(q)r=B.a.D(r,s)
return B.a.aj(" ",this.c)+"- "+r},
$S:24}
A.kq.prototype={
$1(a){var s,r,q,p,o
t.x.a(a)
s=a.b
r=A.bn(t.T.a(a.a))
q=B.a.aj(" ",this.a)+r
p=this.c
o=A.dS(s,this.b,p)
if((t.f.b(s)||t.j.b(s))&&!A.lk(s))return q+":"+p+o
return q+": "+o},
$S:23}
A.ja.prototype={
$0(){return A.f8(this.a,null,!1,null).a},
$S:22}
A.iZ.prototype={
$1(a){return J.am(a)},
$S:3}
A.j_.prototype={
$1(a){return B.a.aC(A.e(a),this.a)>0},
$S:0}
A.eK.prototype={
n(a){return J.am(this.c)},
$iP:1,
$iao:1,
ga2(){return this.a},
gA(){return this.b},
ga5(){return this.c}}
A.eJ.prototype={
h(a,b){var s=this.b.h(0,b)
return s==null?null:s.ga5()},
gF(){var s=this.b,r=A.j(s).i("ak<1>")
return A.fT(new A.ak(s,r),r.i("@(f.E)").a(new A.hm()),r.i("f.E"),t.z)},
ga5(){return this},
$ix:1,
$iP:1,
$ibT:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hm.prototype={
$1(a){return t.T.a(a).ga5()},
$S:1}
A.eI.prototype={
gl(a){return this.b.length},
sl(a,b){throw A.a(A.N("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.V(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga5()},
j(a,b,c){throw A.a(A.N("Cannot modify an unmodifiable List"))},
ga5(){return this},
$iw:1,
$if:1,
$ip:1,
$iP:1,
$ibS:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hl.prototype={
$1(a){return A.ar(a,this.a,this.b)},
$S:41}
A.eX.prototype={}
A.eZ.prototype={}
A.f_.prototype={}
A.k_.prototype={
$1(a){return!this.a.E(A.e(a))},
$S:0}
A.kh.prototype={
$1(a){return B.a.N(A.e(a)).length===0},
$S:0}
A.ii.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.q(0,a))throw A.a(B.b5)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a_)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.k8.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.k9.prototype={
$1(a){return J.r(t.P.a(a).h(0,"name"),this.a)},
$S:13}
A.ka.prototype={
$1(a){var s,r
t.a9.a(a)
s=this.a
r=a.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return a.b!==s[r]},
$S:44}
A.kb.prototype={
$1(a){A.e(a)
return!B.b.q(A.iF(this.a),a)},
$S:0}
A.kc.prototype={
$1(a){return A.e(a)==="DIRECT"},
$S:0}
A.iJ.prototype={
$1(a){var s,r
t.P.a(a)
s=this.a
if(!J.r(a.h(0,"name"),s)){r=t.g.a(a.h(0,"proxies"))
s=J.bo(r==null?[]:r,s)}else s=!1
return s},
$S:13}
A.iK.prototype={
$1(a){return J.r(J.l(a,"dialer-proxy"),this.a)},
$S:2}
A.iL.prototype={
$1(a){A.e(a)
return A.lq(a,this.a,"__deleted__")!==a},
$S:0}
A.iM.prototype={
$1(a){return!J.r(t.P.a(a).h(0,"name"),this.a)},
$S:13}
A.jt.prototype={
$1(a){return A.dQ(a,this.a+1)},
$S:45}
A.jj.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash ")},
$S:0}
A.j1.prototype={
$1(a){return B.a.N(A.e(a))==="# Mclash OpenWrt controller: true"},
$S:0}
A.j2.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt capture: ")},
$S:0}
A.jb.prototype={
$3(a,b,c){return A.no(A.e(a),A.e(b),A.e(c),!1)},
$S:46}
A.jk.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a.a+1
h.a.a=g
if(g>2e5||b>100)throw A.a(B.bl)
j=t.f
if(!j.b(a)&&!t.j.b(a))return a
i=h.b
if(!i.t(0,a==null?A.f2(a):a))throw A.a(B.bK)
try{i=t.j
if(i.b(a)){s=[]
for(j=J.D(a),i=b+1;j.k();){r=j.gm()
J.dV(s,h.$2(r,i))}return s}q=j.a(a)
p=A.n(t.N,t.z)
if(q.E("<<")){o=h.$2(J.l(q,"<<"),b+1)
n=i.b(o)?o:[o]
for(s=J.D(n),j=t.P;s.k();){m=s.gm()
if(!j.b(m))throw A.a(B.bp)
for(i=m.gO(),i=i.gp(i);i.k();){l=i.gm()
p.e5(l.a,new A.jl(l))}}}for(s=q.gO(),s=s.gp(s),j=b+1;s.k();){k=s.gm()
if(J.r(k.a,"<<"))continue
if(typeof k.a!="string")throw A.a(B.ch)
J.dU(p,A.e(k.a),h.$2(k.b,j))}return p}finally{h.b.I(0,a)}},
$1(a){return this.$2(a,0)},
$S:47}
A.jl.prototype={
$0(){return this.a.b},
$S:10}
A.iC.prototype={
$1(a){var s
if(B.a.N(A.e(a))!=="# Mclash OpenWrt controller: true")return!0
s=this.a
if(s.a)return!1
return s.a=!0},
$S:0}
A.j8.prototype={
$1(a){var s
A.e(a)
s=A.G("^(0|[1-9][0-9]{0,2})$",!0)
return!s.b.test(a)||A.cG(a,null,null)>255},
$S:0}
A.j9.prototype={
$2(a,b){return A.V(a)*256+A.cG(A.e(b),null,null)},
$S:73}
A.ki.prototype={
$1(a){var s
A.e(a)
s=t.s
return a.length===0?A.c([],s):A.c(a.split(":"),s)},
$S:49}
A.kj.prototype={
$1(a){var s
A.e(a)
s=A.G("^[0-9a-fA-F]{1,4}$",!0)
return!s.b.test(a)},
$S:0}
A.iD.prototype={
$1(a){var s
A.e(a)
s=A.G("^[A-Za-z0-9_.-]{1,15}$",!0)
return!s.b.test(a)||B.b.q(A.c(["lo","Mclash"],t.s),a)},
$S:0}
A.is.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash OpenWrt capture: ")},
$S:0}
A.iq.prototype={
$1(a){var s
A.e(a)
s=A.G("^[0-9]{1,3}$",!0)
return s.b.test(a)&&A.cG(a,null,null)<=255},
$S:0}
A.ir.prototype={
$1(a){return B.a.N(A.e(a))!=="# Mclash OpenWrt controller: true"},
$S:0}
A.km.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.js.prototype={
$2(a,b){var s=this.a.a.h(0,a)
s=s==null?null:B.a.N(J.am(s))
return s==null?b:s},
$1(a){return this.$2(a,"")},
$S:50}
A.jr.prototype={
$2$fallback(a,b){var s=this.a.$1(a),r=s.length===0?b:A.aU(s,null)
if(r==null)throw A.a(A.B("VMess "+a+" must be an integer",null,null))
return r},
$1(a){return this.$2$fallback(a,null)},
$S:51}
A.jm.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jn.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jo.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jp.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jq.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.im.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.io.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ip.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.iO.prototype={
$1(a){return!J.r(a,this.a)},
$S:2}
A.iP.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.je.prototype={
$1(a){return this.a.q(0,J.l(a,"name"))},
$S:2}
A.jf.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jg.prototype={
$1(a){return!this.a.q(0,J.l(a,"name"))},
$S:2}
A.kl.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.k1.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.jH.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hO.prototype={
$1(a){A.e(a)
return!B.b.q(this.a,a)&&!B.b.q(this.b,a)},
$S:0}
A.hP.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.ih.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.q(0,a))throw A.a(B.ah)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a_)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.il.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")},
$S:0}
A.iw.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.ix.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iy.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jS.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.jT.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jU.prototype={
$2(a,b){var s
A.e(a)
A.e(b)
s=this.a
return a===s||b===s},
$S:14}
A.jV.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jW.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jX.prototype={
$2(a,b){A.e(a)
t.a.a(b)
return!B.a.aG(a,"Targets")&&J.c7(b)},
$S:54}
A.jY.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.jZ.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash global-chain: ")},
$S:0}
A.jF.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.ji.prototype={
$2(a,b){A.V(a)
A.V(b)
return b>a?b:a},
$S:55}
A.k2.prototype={
$1(a){return t.fk.a(a).a!==this.a},
$S:56}
A.k3.prototype={
$1(a){var s
t.fk.a(a)
s=this.a?"back":"front"
s=a.b.h(0,s)
return s==null?A.c([],t.s):s},
$S:57}
A.hU.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hV.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.rr(a)==null},
$S:0}
A.hW.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:26}
A.hX.prototype={
$1(a){return!this.a.q(0,A.e(a))},
$S:0}
A.k0.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.jG.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hM.prototype={
$1(a){A.e(a)
return!B.b.q(this.a,a)&&!B.b.q(this.b,a)},
$S:0}
A.hN.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.ig.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.q(0,a))throw A.a(B.ah)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a_)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.ik.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")},
$S:0}
A.it.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.iu.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iv.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jE.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.hQ.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hR.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.rq(a)==null},
$S:0}
A.hS.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:26}
A.hT.prototype={
$1(a){return!this.a.q(0,A.e(a))},
$S:0}
A.iG.prototype={
$1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gp(r);r.k();){q=r.gm()
s.j(0,A.m(q.a),this.$1(q.b))}return s}if(t.j.b(a)){s=J.aT(a,this,t.z)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
$S:1}
A.kd.prototype={
$1(a){t.aw.a(a)
return a.a!==this.a&&J.r(a.b.h(0,"path"),this.b)},
$S:59}
A.ke.prototype={
$1(a){return typeof a!="string"||B.a.N(a).length===0},
$S:2}
A.kf.prototype={
$1(a){return A.rJ(a,A.G("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.ju(this.b)+"\\s*(?=[,)])",!0),t.ey.a(t.gQ.a(new A.kg(this.a))),null)},
$S:4}
A.kg.prototype={
$1(a){return A.m(a.h(0,1))+"RULE-SET,"+this.a.a},
$S:60}
A.iN.prototype={
$1(a){var s
A.e(a)
s=A.G("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.ju(this.a)+"\\s*(?=[,)])",!0)
return s.b.test(a)},
$S:0}
A.hB.prototype={
aO(a,b,c){var s,r,q,p,o
t.a.a(b)
for(s=J.a2(b),r=s.gp(b),q=this.a,p=null;r.k();){o=q.I(0,r.gm())
if(o==null)continue
if(p!=null&&p!==o)throw A.a(A.B("Conflicting node parameter aliases: "+A.m(s.gS(b)),null,null))
p=o}return p==null?c:p},
a3(a,b){return this.aO(0,b,"")},
dS(a){var s,r
t.a.a(a)
s=this.a3(0,a)
if(s.length===0)return null
r=t.s
if(B.b.q(A.c(["1","true"],r),s.toLowerCase()))return!0
if(B.b.q(A.c(["0","false"],r),s.toLowerCase()))return!1
throw A.a(A.B("Node parameter "+A.m(J.lF(a))+" must be true/false or 1/0",null,null))},
fW(){var s,r,q
for(s=["remarks","group"],r=this.a,q=0;q<2;++q)r.I(0,s[q])
if(r.a!==0)throw A.a(B.b7)}}
A.ia.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.ib.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ic.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i9.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i4.prototype={
$1(a){return J.a6(t.a.a(a))>1},
$S:61}
A.i5.prototype={
$1(a){A.hZ(a)
return a==null||a<1||a>65535},
$S:62}
A.i8.prototype={
$1(a){var s
A.e(a)
if(a.length!==0){s=A.G("^[1-9]\\d*-$",!0)
s=!s.b.test(a)}else s=!1
return s},
$S:0}
A.k4.prototype={
$1(a){A.e(a)
return a.length!==0&&B.a.u(this.a,a)},
$S:0}
A.k5.prototype={
$1(a){var s,r=t.D
r.a(a)
s=A.S("")
s.G([],A.a7(["proxies",a],t.N,r))
return s.b},
$S:63}
A.jh.prototype={
$1(a){return t.P.a(a).h(0,"name")},
$S:64}
A.iB.prototype={
$1(a){return B.b.q(this.a,a)||this.b.q(0,a)},
$S:2}
A.i3.prototype={
$1(a){return t.S.b(a)&&J.r(a.h(0,"name"),this.a)},
$S:2}
A.jN.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jO.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.jP.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.q(0,a)},
$S:14}
A.jQ.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jR.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.ko.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().R(0,B.a.gcW(a))&&a!=="# Mclash default subscription"},
$S:0}
A.jA.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jB.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.jC.prototype={
$2(a,b){A.e(a)
A.hY(b)
return!this.a.q(0,a)},
$S:17}
A.kk.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.iA.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.i2.prototype={
$1(a){return t.S.b(a)&&J.r(a.h(0,"name"),this.a)},
$S:2}
A.jI.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jJ.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.jK.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.q(0,a)},
$S:14}
A.jL.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jM.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kn.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().R(0,B.a.gcW(a))&&a!=="# Mclash default subscription"},
$S:0}
A.jx.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jy.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.jz.prototype={
$2(a,b){A.e(a)
A.hY(b)
return!this.a.q(0,a)},
$S:17}
A.iz.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iT.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:15}
A.iU.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0}
A.iR.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:15}
A.iS.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0};(function aliases(){var s=J.bs.prototype
s.em=s.n
s=A.aC.prototype
s.ei=s.dV
s.ej=s.dW
s.el=s.dY
s.ek=s.dX
s=A.t.prototype
s.en=s.al
s=A.f.prototype
s.bj=s.aK
s=A.co.prototype
s.ep=s.aC
s.eo=s.T
s=A.ey.prototype
s.a_=s.h7
s.er=s.bE
s.eq=s.aJ
s=A.dL.prototype
s.es=s.n})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_2,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._static_0
s(J.K.prototype,"ga6","q",7)
r(J.bq.prototype,"gcW",1,1,null,["$2","$1"],["a4","u"],66,0,0)
q(A.b0.prototype,"gdU","fY",0)
p(A,"qp","pz",9)
o(A,"qq","pA",6)
s(A.ay.prototype,"ga6","q",7)
s(A.t.prototype,"ga6","q",7)
o(A,"qu","pB",1)
o(A,"qy","qZ",6)
n(A,"qz",1,null,["$3$onError$radix","$1"],["cG",function(a){return A.cG(a,null,null)}],68,0)
n(A,"qA",1,null,["$2$radix","$1"],["np",function(a){return A.np(a,null)}],69,0)
p(A,"qx","qY",9)
o(A,"qv","oK",4)
m(A,"qw","pi",70)
p(A,"nd","qa",71)
s(A.f.prototype,"ga6","q",7)
p(A,"qM","qD",9)
o(A,"qN","qE",6)
p(A,"qO","bm",15)
o(A,"iV","qF",6)
o(A,"rO","bn",24)
n(A,"rY",1,null,["$2","$1"],["mU",function(a){return A.mU(a,null)}],20,0)
o(A,"rQ","f4",53)
n(A,"rg",2,null,["$1$2","$2"],["ns",function(a,b){return A.ns(a,b,t.H)}],48,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.kD,J.e9,A.db,J.b8,A.T,A.t,A.h2,A.f,A.a5,A.d3,A.bk,A.cT,A.dc,A.cS,A.dp,A.bG,A.aL,A.ax,A.z,A.az,A.cj,A.cN,A.bW,A.aW,A.as,A.h6,A.ei,A.fM,A.aj,A.aD,A.bb,A.b0,A.cv,A.dr,A.cq,A.eV,A.hr,A.aV,A.eP,A.hD,A.dD,A.dt,A.eS,A.bX,A.dw,A.aq,A.aI,A.e1,A.hq,A.hp,A.hy,A.hK,A.hH,A.ht,A.ek,A.df,A.eO,A.i,A.M,A.be,A.Y,A.dI,A.h8,A.aQ,A.e2,A.ch,A.cC,A.dz,A.aP,A.fg,A.h5,A.fU,A.em,A.h3,A.et,A.co,A.fj,A.af,A.aF,A.bL,A.eu,A.ey,A.ap,A.hs,A.ab,A.cR,A.cb,A.cJ,A.dL,A.fQ,A.fV,A.a1,A.h_,A.c_,A.bt,A.cM,A.U,A.dm,A.di,A.bp,A.cK,A.bw,A.bu,A.dq,A.hd,A.bO,A.P,A.he,A.dd,A.eK,A.eZ,A.eX,A.hB])
q(J.e9,[J.eb,J.cV,J.cY,J.cX,J.cZ,J.cW,J.bq])
q(J.cY,[J.bs,J.K,A.d4])
q(J.bs,[J.en,J.bP,J.br])
r(J.ea,A.db)
r(J.fG,J.K)
q(J.cW,[J.cU,J.ec])
q(A.T,[A.d1,A.dj,A.ed,A.eB,A.er,A.eN,A.d0,A.c8,A.b_,A.dl,A.eA,A.cp,A.e0])
r(A.cr,A.t)
q(A.cr,[A.aH,A.dk])
q(A.f,[A.w,A.bc,A.q,A.aB,A.bg,A.dn,A.ba,A.bV,A.eL,A.eU,A.bx])
q(A.w,[A.y,A.bF,A.ak,A.aE,A.R,A.dv])
q(A.y,[A.bN,A.I,A.eT,A.da,A.eR])
r(A.bE,A.bc)
r(A.cd,A.bg)
r(A.cc,A.ba)
q(A.z,[A.cs,A.aC,A.eQ])
r(A.d2,A.cs)
q(A.az,[A.aY,A.cw])
q(A.aY,[A.b4,A.cx,A.bZ,A.cy,A.dA,A.cz])
r(A.dB,A.cw)
r(A.cB,A.cj)
r(A.b3,A.cB)
r(A.cO,A.b3)
r(A.aJ,A.cN)
q(A.aW,[A.cP,A.dC])
r(A.cQ,A.cP)
q(A.as,[A.e8,A.dZ,A.e_,A.ez,A.fI,A.j4,A.j6,A.hA,A.fR,A.hw,A.hG,A.fh,A.fi,A.ie,A.fl,A.fk,A.fm,A.fo,A.fq,A.fn,A.fE,A.iI,A.fW,A.fX,A.h0,A.h1,A.ks,A.hn,A.hg,A.hk,A.hj,A.hf,A.jd,A.iX,A.iY,A.iH,A.id,A.kr,A.kp,A.kq,A.iZ,A.j_,A.hm,A.hl,A.k_,A.kh,A.ii,A.k8,A.k9,A.ka,A.kb,A.kc,A.iJ,A.iK,A.iL,A.iM,A.jt,A.jj,A.j1,A.j2,A.jb,A.jk,A.iC,A.j8,A.ki,A.kj,A.iD,A.is,A.iq,A.ir,A.km,A.js,A.jr,A.jm,A.jn,A.jo,A.jp,A.jq,A.im,A.io,A.ip,A.iO,A.iP,A.je,A.jf,A.jg,A.kl,A.k1,A.jH,A.hO,A.hP,A.ih,A.il,A.iw,A.ix,A.iy,A.jS,A.jT,A.jV,A.jW,A.jY,A.jZ,A.jF,A.k2,A.k3,A.hU,A.hV,A.hW,A.hX,A.k0,A.jG,A.hM,A.hN,A.ig,A.ik,A.it,A.iu,A.iv,A.jE,A.hQ,A.hR,A.hS,A.hT,A.iG,A.kd,A.ke,A.kf,A.kg,A.iN,A.ia,A.ib,A.ic,A.i9,A.i4,A.i5,A.i8,A.k4,A.k5,A.jh,A.iB,A.i3,A.jN,A.jO,A.jQ,A.jR,A.ko,A.jA,A.jB,A.kk,A.iA,A.i2,A.jI,A.jJ,A.jL,A.jM,A.kn,A.jx,A.jy,A.iz,A.iU,A.iS])
r(A.cf,A.e8)
r(A.d6,A.dj)
q(A.ez,[A.ex,A.ca])
q(A.e_,[A.fH,A.j5,A.fO,A.fS,A.hz,A.ha,A.h9,A.fp,A.hh,A.j9,A.jU,A.jX,A.ji,A.jP,A.jC,A.jK,A.jz,A.iT,A.iR])
q(A.aC,[A.d_,A.du])
r(A.b2,A.d4)
r(A.dx,A.b2)
r(A.dy,A.dx)
r(A.bd,A.dy)
q(A.bd,[A.eh,A.d5,A.bI])
r(A.cA,A.eN)
q(A.dC,[A.bU,A.ay])
r(A.ct,A.bU)
r(A.cu,A.ay)
q(A.dZ,[A.hJ,A.hI,A.fD,A.fr,A.fy,A.fz,A.fA,A.fB,A.fw,A.fx,A.fs,A.ft,A.fu,A.fv,A.fC,A.hu,A.hi,A.i6,A.i7,A.ja,A.jl])
q(A.aI,[A.c9,A.e4,A.ee])
q(A.e1,[A.dY,A.ff,A.fK,A.fJ,A.hc,A.hb])
r(A.ef,A.d0)
r(A.hx,A.hy)
r(A.eG,A.e4)
q(A.b_,[A.cl,A.e6,A.d7])
r(A.eM,A.dI)
r(A.bQ,A.cC)
r(A.d8,A.dz)
r(A.cg,A.h5)
q(A.cg,[A.eo,A.eF,A.eH])
r(A.ce,A.et)
q(A.co,[A.bl,A.de])
r(A.ev,A.eu)
r(A.bh,A.de)
r(A.ew,A.ey)
r(A.e3,A.ew)
q(A.ev,[A.dg,A.bR])
q(A.dL,[A.ai,A.bJ,A.bH])
q(A.ht,[A.aK,A.ds,A.Z])
q(A.P,[A.f0,A.eY,A.ao])
r(A.f1,A.f0)
r(A.bT,A.f1)
r(A.bS,A.eY)
r(A.dW,A.i)
r(A.eW,A.c8)
r(A.f_,A.eZ)
r(A.eJ,A.f_)
r(A.eI,A.eX)
s(A.cr,A.ax)
s(A.dx,A.t)
s(A.dy,A.aL)
s(A.cs,A.aq)
s(A.cB,A.aq)
s(A.dz,A.t)
s(A.eY,A.t)
s(A.f0,A.z)
s(A.f1,A.aP)
s(A.eX,A.t)
s(A.eZ,A.z)
s(A.f_,A.aP)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",nh:"double",bB:"num",d:"String",k:"bool",be:"Null",p:"List",v:"Object",x:"Map",aM:"JSObject"},mangledNames:{},types:["k(d)","@(@)","k(@)","d(@)","d(d)","be()","h(v?)","k(v?)","~()","k(v?,v?)","@()","k(af)","~(d)","k(x<d,@>)","k(d,d)","k(@,@)","+nearestLineEnding,nextNodeColStart(h,h)()","k(d,k)","~(v?,v?)","h()","~(d[cn?])","P(x<@,@>)","P()","d(M<@,P>)","d(P)","@(d)","p<d>(x<d,p<d>>)","x<d,d>(x<d,d>,d)","k(+column,type(h,Z?))","~(@,@)","~(P)","~(@,P)","h(af,af)","@(x<@,@>)","p<aF>(M<v,p<af>>)","v(af)","d(d?)","d(h,d,d)","bh()","@(@,d)","0&(d,h?)","P(@)","~(h,h,h)","U(bp)","k(M<h,d>)","v?(@)","d(d,d,d)","@(@[h])","0^(0^,0^)<bB>","p<d>(d)","d(d[d])","h(d{fallback:h?})","d?()","v?(v?)","k(d,p<d>)","h(h,h)","k(M<d,x<d,p<d>>>)","p<d>(M<d,x<d,p<d>>>)","U(bw)","k(M<d,x<d,@>>)","d(b1)","k(p<d>)","k(h?)","d(p<x<d,@>>)","@(x<d,@>)","k(c_?)","k(ck[h])","v(aF)","h(d{onError:h(d)?,radix:h?})","h?(d{radix:h?})","p<d>()","p<d>(d,p<d>)","h(aF)","h(h,d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b4&&a.b(c.a)&&b.b(c.b),"2;column,type":(a,b)=>c=>c instanceof A.cx&&a.b(c.a)&&b.b(c.b),"2;compactCharOffset,lineEndingIndex":(a,b)=>c=>c instanceof A.bZ&&a.b(c.a)&&b.b(c.b),"2;end,start":(a,b)=>c=>c instanceof A.cy&&a.b(c.a)&&b.b(c.b),"2;indent,trailingBreaks":(a,b)=>c=>c instanceof A.dA&&a.b(c.a)&&b.b(c.b),"2;nearestLineEnding,nextNodeColStart":(a,b)=>c=>c instanceof A.cz&&a.b(c.a)&&b.b(c.b),"3;index,keyNode,valueNode":(a,b,c)=>d=>d instanceof A.dB&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.pb(v.typeUniverse,JSON.parse('{"br":"bs","en":"bs","bP":"bs","eb":{"k":[],"at":[]},"cV":{"be":[],"at":[]},"cY":{"aM":[]},"bs":{"aM":[]},"K":{"p":["1"],"w":["1"],"aM":[],"f":["1"]},"ea":{"db":[]},"fG":{"K":["1"],"p":["1"],"w":["1"],"aM":[],"f":["1"]},"b8":{"L":["1"]},"cW":{"bB":[]},"cU":{"h":[],"bB":[],"at":[]},"ec":{"bB":[],"at":[]},"bq":{"d":[],"ck":[],"at":[]},"d1":{"T":[]},"aH":{"t":["h"],"ax":["h"],"p":["h"],"w":["h"],"f":["h"],"t.E":"h","ax.E":"h"},"w":{"f":["1"]},"y":{"w":["1"],"f":["1"]},"bN":{"y":["1"],"w":["1"],"f":["1"],"f.E":"1","y.E":"1"},"a5":{"L":["1"]},"bc":{"f":["2"],"f.E":"2"},"bE":{"bc":["1","2"],"w":["2"],"f":["2"],"f.E":"2"},"d3":{"L":["2"]},"I":{"y":["2"],"w":["2"],"f":["2"],"f.E":"2","y.E":"2"},"q":{"f":["1"],"f.E":"1"},"bk":{"L":["1"]},"aB":{"f":["2"],"f.E":"2"},"cT":{"L":["2"]},"bg":{"f":["1"],"f.E":"1"},"cd":{"bg":["1"],"w":["1"],"f":["1"],"f.E":"1"},"dc":{"L":["1"]},"bF":{"w":["1"],"f":["1"],"f.E":"1"},"cS":{"L":["1"]},"dn":{"f":["1"],"f.E":"1"},"dp":{"L":["1"]},"ba":{"f":["+(h,1)"],"f.E":"+(h,1)"},"cc":{"ba":["1"],"w":["+(h,1)"],"f":["+(h,1)"],"f.E":"+(h,1)"},"bG":{"L":["+(h,1)"]},"cr":{"t":["1"],"ax":["1"],"p":["1"],"w":["1"],"f":["1"]},"eT":{"y":["h"],"w":["h"],"f":["h"],"f.E":"h","y.E":"h"},"d2":{"z":["h","1"],"aq":["h","1"],"x":["h","1"],"z.K":"h","z.V":"1","aq.K":"h","aq.V":"1"},"da":{"y":["1"],"w":["1"],"f":["1"],"f.E":"1","y.E":"1"},"b4":{"aY":[],"az":[]},"cx":{"aY":[],"az":[]},"bZ":{"aY":[],"az":[]},"cy":{"aY":[],"az":[]},"dA":{"aY":[],"az":[]},"cz":{"aY":[],"az":[]},"dB":{"cw":[],"az":[]},"cO":{"b3":["1","2"],"cB":["1","2"],"cj":["1","2"],"aq":["1","2"],"x":["1","2"],"aq.K":"1","aq.V":"2"},"cN":{"x":["1","2"]},"aJ":{"cN":["1","2"],"x":["1","2"]},"bV":{"f":["1"],"f.E":"1"},"bW":{"L":["1"]},"cP":{"aW":["1"],"bK":["1"],"w":["1"],"f":["1"]},"cQ":{"cP":["1"],"aW":["1"],"bK":["1"],"w":["1"],"f":["1"]},"e8":{"as":[],"b9":[]},"cf":{"as":[],"b9":[]},"d6":{"T":[]},"ed":{"T":[]},"eB":{"T":[]},"ei":{"aA":[]},"as":{"b9":[]},"dZ":{"as":[],"b9":[]},"e_":{"as":[],"b9":[]},"ez":{"as":[],"b9":[]},"ex":{"as":[],"b9":[]},"ca":{"as":[],"b9":[]},"er":{"T":[]},"aC":{"z":["1","2"],"fL":["1","2"],"x":["1","2"],"z.K":"1","z.V":"2"},"ak":{"w":["1"],"f":["1"],"f.E":"1"},"aj":{"L":["1"]},"aE":{"w":["1"],"f":["1"],"f.E":"1"},"aD":{"L":["1"]},"R":{"w":["M<1,2>"],"f":["M<1,2>"],"f.E":"M<1,2>"},"bb":{"L":["M<1,2>"]},"d_":{"aC":["1","2"],"z":["1","2"],"fL":["1","2"],"x":["1","2"],"z.K":"1","z.V":"2"},"aY":{"az":[]},"cw":{"az":[]},"b0":{"ox":[],"ck":[]},"cv":{"d9":[],"b1":[]},"eL":{"f":["d9"],"f.E":"d9"},"dr":{"L":["d9"]},"cq":{"b1":[]},"eU":{"f":["b1"],"f.E":"b1"},"eV":{"L":["b1"]},"d4":{"aM":[]},"b2":{"ci":["1"],"aM":[]},"bd":{"t":["h"],"b2":["h"],"p":["h"],"ci":["h"],"w":["h"],"aM":[],"f":["h"],"aL":["h"]},"eh":{"bd":[],"t":["h"],"b2":["h"],"p":["h"],"ci":["h"],"w":["h"],"aM":[],"f":["h"],"aL":["h"],"at":[],"t.E":"h","aL.E":"h"},"d5":{"bd":[],"kN":[],"t":["h"],"b2":["h"],"p":["h"],"ci":["h"],"w":["h"],"aM":[],"f":["h"],"aL":["h"],"at":[],"t.E":"h","aL.E":"h"},"bI":{"bd":[],"kO":[],"t":["h"],"b2":["h"],"p":["h"],"ci":["h"],"w":["h"],"aM":[],"f":["h"],"aL":["h"],"at":[],"t.E":"h","aL.E":"h"},"eN":{"T":[]},"cA":{"T":[]},"dD":{"L":["1"]},"bx":{"f":["1"],"f.E":"1"},"du":{"aC":["1","2"],"z":["1","2"],"fL":["1","2"],"x":["1","2"],"z.K":"1","z.V":"2"},"bU":{"aW":["1"],"bK":["1"],"w":["1"],"f":["1"]},"ct":{"bU":["1"],"aW":["1"],"bK":["1"],"w":["1"],"f":["1"]},"dt":{"L":["1"]},"ay":{"aW":["1"],"kF":["1"],"bK":["1"],"w":["1"],"f":["1"]},"cu":{"ay":["1"],"aW":["1"],"kF":["1"],"bK":["1"],"w":["1"],"f":["1"]},"bX":{"L":["1"]},"dk":{"t":["1"],"ax":["1"],"p":["1"],"w":["1"],"f":["1"],"t.E":"1","ax.E":"1"},"t":{"p":["1"],"w":["1"],"f":["1"]},"z":{"x":["1","2"]},"cs":{"z":["1","2"],"aq":["1","2"],"x":["1","2"]},"dv":{"w":["2"],"f":["2"],"f.E":"2"},"dw":{"L":["2"]},"cj":{"x":["1","2"]},"b3":{"cB":["1","2"],"cj":["1","2"],"aq":["1","2"],"x":["1","2"],"aq.K":"1","aq.V":"2"},"aW":{"bK":["1"],"w":["1"],"f":["1"]},"dC":{"aW":["1"],"bK":["1"],"w":["1"],"f":["1"]},"eQ":{"z":["d","@"],"x":["d","@"],"z.K":"d","z.V":"@"},"eR":{"y":["d"],"w":["d"],"f":["d"],"f.E":"d","y.E":"d"},"c9":{"aI":["p<h>","d"],"aI.S":"p<h>"},"e4":{"aI":["d","p<h>"]},"d0":{"T":[]},"ef":{"T":[]},"ee":{"aI":["v?","d"],"aI.S":"v?"},"eG":{"aI":["d","p<h>"],"aI.S":"d"},"h":{"bB":[]},"p":{"w":["1"],"f":["1"]},"d9":{"b1":[]},"d":{"ck":[]},"c8":{"T":[]},"dj":{"T":[]},"b_":{"T":[]},"cl":{"T":[]},"e6":{"T":[]},"dl":{"T":[]},"eA":{"T":[]},"cp":{"T":[]},"e0":{"T":[]},"ek":{"T":[]},"df":{"T":[]},"eO":{"aA":[]},"i":{"aA":[]},"Y":{"oE":[]},"dI":{"eC":[]},"aQ":{"eC":[]},"eM":{"eC":[]},"bQ":{"cC":["1","f<1>"],"cC.T":"f<1>"},"d8":{"t":["1"],"p":["1"],"w":["1"],"f":["1"],"t.E":"1"},"em":{"aA":[]},"eo":{"cg":[]},"eF":{"cg":[]},"eH":{"cg":[]},"ce":{"bL":[]},"bl":{"og":[],"bh":[],"cn":[]},"et":{"bL":[]},"de":{"cn":[]},"eu":{"aA":[]},"ev":{"i":[],"aA":[]},"co":{"cn":[]},"bh":{"cn":[]},"e3":{"ew":[]},"ap":{"oq":[]},"dg":{"i":[],"aA":[]},"cR":{"ab":[]},"cb":{"ab":[]},"cJ":{"ab":[]},"dL":{"ab":[]},"ai":{"ab":[]},"bJ":{"ab":[]},"bH":{"ab":[]},"bp":{"U":[]},"bw":{"U":[]},"dm":{"U":[]},"di":{"U":[]},"cK":{"U":[]},"bu":{"U":[]},"bR":{"i":[],"aA":[]},"bT":{"z":["@","@"],"aP":["@","@"],"P":[],"x":["@","@"],"z.K":"@","z.V":"@","aP.K":"@","aP.V":"@"},"bS":{"t":["@"],"p":["@"],"w":["@"],"P":[],"f":["@"],"t.E":"@"},"ao":{"P":[]},"d7":{"T":[]},"dW":{"i":[],"aA":[]},"eW":{"T":[]},"eK":{"ao":[],"P":[]},"eJ":{"bT":[],"z":["@","@"],"aP":["@","@"],"x":["@","@"],"P":[],"z.K":"@","z.V":"@","aP.K":"@","aP.V":"@"},"eI":{"bS":[],"t":["@"],"p":["@"],"w":["@"],"f":["@"],"P":[],"t.E":"@"},"ol":{"p":["h"],"w":["h"],"f":["h"]},"kO":{"p":["h"],"w":["h"],"f":["h"]},"kN":{"p":["h"],"w":["h"],"f":["h"]}}'))
A.pa(v.typeUniverse,JSON.parse('{"w":1,"cr":1,"b2":1,"cs":2,"dC":1,"e1":2,"dz":1}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",o:" connects to different entries in multiple chains; adjust the selection",s:" must not be greater than the number of characters in the file, ",n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority"}
var t=(function rtii(){var s=A.aS
return{a6:s("cJ"),B:s("c9"),V:s("aH"),w:s("aJ<d,d>"),gR:s("cb"),dg:s("cR"),W:s("w<@>"),bU:s("T"),g8:s("aA"),f_:s("aB<d,d>"),d:s("i"),_:s("b9"),cs:s("f<d>"),ah:s("f<d>(d)"),R:s("f<@>"),hb:s("f<h>"),gT:s("K<p<x<d,@>>>"),t:s("K<x<d,@>>"),dm:s("K<x<@,@>>"),a2:s("K<+column,type(h,Z?)>"),c0:s("K<dd>"),s:s("K<d>"),l:s("K<bO>"),gw:s("K<dq>"),r:s("K<P>"),v:s("K<af>"),ef:s("K<aF>"),aq:s("K<a1>"),J:s("K<@>"),Z:s("K<h>"),d4:s("K<d?>"),g0:s("K<c_?>"),u:s("cV"),o:s("aM"),cj:s("br"),aU:s("ci<@>"),D:s("p<x<d,@>>"),a:s("p<d>"),j:s("p<@>"),L:s("p<h>"),E:s("p<af?>"),x:s("M<@,P>"),a9:s("M<h,d>"),aS:s("M<v,p<af>>"),aw:s("M<d,x<d,@>>"),fk:s("M<d,x<d,p<d>>>"),G:s("x<d,d>"),P:s("x<d,@>"),f:s("x<@,@>"),O:s("x<d,p<d>>"),e:s("I<d,d>"),do:s("I<d,@>"),gh:s("I<x<d,@>,@>"),bz:s("I<d,h?>"),fY:s("bH"),eB:s("bd"),bm:s("bI"),b:s("be"),K:s("v"),eh:s("ck"),co:s("d8<U>"),fl:s("t5"),bQ:s("+()"),eY:s("+column,type(h,Z?)"),ei:s("+(v?,v?)"),cz:s("d9"),fy:s("ai"),f2:s("bu"),fP:s("bJ"),F:s("bL"),I:s("cn"),q:s("bh"),N:s("d"),gQ:s("d(b1)"),c:s("d(d)"),h7:s("bO"),ci:s("at"),ak:s("bP"),ga:s("dk<P>"),dw:s("b3<d,d>"),gr:s("b3<@,P>"),k:s("eC"),U:s("q<d>"),fj:s("bk<d>"),eJ:s("dn<d>"),h:s("bS"),S:s("bT"),T:s("P"),m:s("ao"),C:s("af"),d_:s("ct<v>"),A:s("aF"),cR:s("cu<v?>"),dj:s("bx<d>"),y:s("k"),Q:s("k(d)"),as:s("k(af)"),i:s("nh"),z:s("@"),dY:s("@(x<d,@>)"),dO:s("@(d)"),p:s("h"),eH:s("lS<be>?"),an:s("aM?"),g:s("p<@>?"),Y:s("x<@,@>?"),X:s("v?"),dk:s("d?"),ey:s("d(b1)?"),fs:s("U?"),gS:s("af?"),M:s("eS?"),b2:s("c_?"),fQ:s("k?"),cD:s("nh?"),h6:s("h?"),ck:s("h(d)?"),bR:s("h?(d)"),cg:s("bB?"),H:s("bB"),n:s("~"),cA:s("~(d,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cw=J.e9.prototype
B.b=J.K.prototype
B.d=J.cU.prototype
B.cx=J.cW.prototype
B.a=J.bq.prototype
B.cy=J.br.prototype
B.cz=J.cY.prototype
B.L=A.d5.prototype
B.ao=A.bI.prototype
B.ar=J.en.prototype
B.U=J.bP.prototype
B.aF=new A.dY(!1)
B.v=new A.c9(B.aF)
B.aG=new A.dY(!0)
B.a3=new A.c9(B.aG)
B.aH=new A.cf(A.rg(),A.aS("cf<h>"))
B.x=new A.ff()
B.cW=new A.e2(A.aS("e2<0&>"))
B.a4=new A.cS(A.aS("cS<0&>"))
B.aI=new A.ch(A.aS("ch<@>"))
B.aJ=new A.ch(A.aS("ch<v?>"))
B.a5=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aK=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.aP=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aL=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aO=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aN=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aM=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.a6=function(hooks) { return hooks; }

B.c=new A.ee()
B.aQ=new A.ek()
B.n=new A.h2()
B.a7=new A.bQ(A.aS("bQ<@>"))
B.aR=new A.bQ(A.aS("bQ<v?>"))
B.e=new A.eG()
B.a8=new A.hc()
B.j=new A.cM("ANY")
B.m=new A.cM("BLOCK")
B.f=new A.cM("FLOW")
B.aS=new A.aK(0,"streamStart")
B.a9=new A.aK(1,"streamEnd")
B.aT=new A.aK(2,"documentStart")
B.aU=new A.aK(3,"documentEnd")
B.aa=new A.aK(4,"alias")
B.ab=new A.aK(5,"scalar")
B.ac=new A.aK(6,"sequenceStart")
B.y=new A.aK(7,"sequenceEnd")
B.ad=new A.aK(8,"mappingStart")
B.z=new A.aK(9,"mappingEnd")
B.aV=new A.i("Select a valid source, behavior and format",null,null)
B.aW=new A.i("HTTP/SOCKS5 node URLs do not support query parameters",null,null)
B.aX=new A.i("Name conflicts with an existing node or proxy group",null,null)
B.aY=new A.i("Invalid rule provider name or content",null,null)
B.aZ=new A.i("Target nodes must not include front or back nodes",null,null)
B.b_=new A.i("Unsupported SS encryption method",null,null)
B.b0=new A.i("Invalid SS plugin boolean parameter",null,null)
B.b1=new A.i("Configuration nesting is too deep",null,null)
B.ae=new A.i("Node port must be between 1 and 65535",null,null)
B.b2=new A.i("Proxy group name must not be empty or contain commas or newlines",null,null)
B.b3=new A.i("Invalid subscription index",null,null)
B.b4=new A.i("Enter a local file path",null,null)
B.b5=new A.i("Proxy groups or chains form a cycle",null,null)
B.b6=new A.i("Host must not contain a URL, path or whitespace",null,null)
B.b7=new A.i("URL contains unsupported parameters; import YAML configuration instead",null,null)
B.b8=new A.i("Invalid SS authentication",null,null)
B.I=new A.i("Invalid node URL format",null,null)
B.af=new A.i("Invalid node UUID format",null,null)
B.b9=new A.i("Invalid rule format",null,null)
B.ba=new A.i("Supports VMess, VLESS, Trojan, SS, Hysteria2, TUIC, AnyTLS, SOCKS5 and HTTP/HTTPS node URLs",null,null)
B.bb=new A.i("Unsupported transport camouflage type",null,null)
B.bc=new A.i("Unsupported gRPC mode",null,null)
B.bd=new A.i("",null,null)
B.be=new A.i("Invalid proxy group members",null,null)
B.bf=new A.i("Domestic and Foreign proxy groups cannot be deleted",null,null)
B.bg=new A.i("Toggles must be boolean",null,null)
B.bh=new A.i("Domestic and Foreign proxy groups cannot be renamed",null,null)
B.bi=new A.i("Duplicate SS plugin parameter",null,null)
B.bj=new A.i("Duplicate node names in import; use unique names first",null,null)
B.bk=new A.i("Invalid VMess address, user ID, port or alterId",null,null)
B.bl=new A.i("Node input is too deeply nested or too large after expansion",null,null)
B.A=new A.i("Configuration has no embedded nodes; update subscriptions first",null,null)
B.bm=new A.i("Invalid capture mode",null,null)
B.bn=new A.i("Invalid TUIC congestion control type",null,null)
B.bo=new A.i("Unsupported configuration operation",null,null)
B.bp=new A.i("YAML merge key << must reference a map or list of maps",null,null)
B.bq=new A.i("SS node port is missing",null,null)
B.br=new A.i("Rule provider path is already in use",null,null)
B.bs=new A.i("Each Mihomo node requires a nonempty name and type",null,null)
B.bt=new A.i("DNS configuration must be a YAML mapping",null,null)
B.bu=new A.i("Unsupported node transport; import YAML configuration instead",null,null)
B.ag=new A.i("Select at least one node on each side",null,null)
B.bv=new A.i("Invalid Reality short-id format",null,null)
B.bw=new A.i("Invalid TUN stack",null,null)
B.bx=new A.i("Enter a valid HTTP / HTTPS download URL",null,null)
B.by=new A.i("proxies must be a node list",null,null)
B.bz=new A.i("Enter a valid node URL",null,null)
B.bA=new A.i("Node input exceeds 8 MiB",null,null)
B.bB=new A.i("Enter inline rules, one per line",null,null)
B.bC=new A.i("Invalid VLESS UDP encoding",null,null)
B.bD=new A.i("Invalid Hysteria2 bandwidth parameter",null,null)
B.bE=new A.i("Rule target does not exist; select a valid node or proxy group",null,null)
B.bF=new A.i("No Mihomo nodes found",null,null)
B.ah=new A.i("Proxy chain forms a cycle; select other nodes",null,null)
B.ai=new A.i("Enter a Host domain or IP, optionally with a port; do not enter a URL",null,null)
B.bG=new A.i("This group is still referenced by rules, groups or chains; update those references first",null,null)
B.aj=new A.i("Entry and exit nodes must be different",null,null)
B.bH=new A.i("Unsupported node security type",null,null)
B.bI=new A.i("Configuration must be a YAML mapping",null,null)
B.bJ=new A.i("This provider is still referenced; edit or delete the corresponding RULE-SET rules first",null,null)
B.bK=new A.i("Node YAML contains a circular reference",null,null)
B.bL=new A.i("Invalid access control; enter an IP, CIDR subnet, or IPv4 start-end range",null,null)
B.bM=new A.i("Invalid VMess URL Base64 or JSON encoding",null,null)
B.bN=new A.i("Enter a vmess:// node URL",null,null)
B.bO=new A.i("Original rule provider does not exist",null,null)
B.bP=new A.i("Subscription node is missing a name or type",null,null)
B.bQ=new A.i("Invalid Mihomo YAML; include anchor definitions when using aliases",null,null)
B.bR=new A.i("Invalid SS address or authentication",null,null)
B.J=new A.i("Selected node no longer exists; select it again",null,null)
B.bS=new A.i("Invalid node URL Base64 encoding",null,null)
B.bT=new A.i("Invalid node address or path",null,null)
B.bU=new A.i("Access control supports at most 64 entries",null,null)
B.bV=new A.i("Proxy group members can only be changed through the node matching regex",null,null)
B.bW=new A.i("Only manually added nodes can be deleted",null,null)
B.bX=new A.i("Duplicate subscription node name",null,null)
B.bY=new A.i("SS obfs mode must be http or tls",null,null)
B.bZ=new A.i("Invalid TUIC UDP mode",null,null)
B.c_=new A.i("Subscription node name conflicts with a default policy",null,null)
B.c0=new A.i("Unsupported SS plugin parameter",null,null)
B.c1=new A.i("Duplicate node URL parameter",null,null)
B.c2=new A.i("SS plugin only supports WebSocket mode",null,null)
B.c3=new A.i("Invalid controller port",null,null)
B.c4=new A.i("Rule provider configuration must be a mapping",null,null)
B.c5=new A.i("Manual node list has changed; reopen the page",null,null)
B.c6=new A.i("Proxy group has no nodes; adjust the regex or select DIRECT",null,null)
B.c7=new A.i("Name must not be empty or contain commas, brackets or newlines",null,null)
B.c8=new A.i("Hysteria2 obfuscation password requires an obfs parameter",null,null)
B.c9=new A.i("Enter a valid IP listen address",null,null)
B.ca=new A.i("Invalid Hysteria2 port hopping range",null,null)
B.cb=new A.i("TUIC v5 requires a UUID and password",null,null)
B.ak=new A.i("Keep at least one target node",null,null)
B.cc=new A.i("Invalid Reality public key format",null,null)
B.cd=new A.i("Invalid WebSocket early data size",null,null)
B.ce=new A.i("Vision requires TLS/Reality and TCP transport",null,null)
B.cf=new A.i("Front and back nodes must be different",null,null)
B.cg=new A.i("Enter a valid LAN interface name; lo and Mclash cannot be selected",null,null)
B.ch=new A.i("Node YAML field names must be strings",null,null)
B.ci=new A.i("Controller port must be between 1 and 65535",null,null)
B.cj=new A.i("Rule provider name already exists",null,null)
B.ck=new A.i("Subscription has no embedded proxies; use a Mihomo subscription containing nodes",null,null)
B.cl=new A.i("Update interval must be a non-negative integer",null,null)
B.cm=new A.i("Enter a subscription URL",null,null)
B.cn=new A.i("MRS only supports HTTP or file providers with domain / ipcidr behavior",null,null)
B.co=new A.i("Unsupported Hysteria2 obfuscation type",null,null)
B.cp=new A.i("AnyTLS only supports TLS and TCP",null,null)
B.cq=new A.i("Unable to identify subscription node ownership; update all subscriptions first",null,null)
B.cr=new A.i("Invalid XHTTP mode",null,null)
B.cs=new A.i("Proxy group order must contain every existing group exactly once",null,null)
B.ct=new A.i("Unsupported SS plugin; import YAML configuration instead",null,null)
B.cu=new A.i("Unsupported VLESS encryption type",null,null)
B.al=new A.i("Chain groups are managed by Proxy chains",null,null)
B.cv=new A.i("Select at least one target node",null,null)
B.cA=new A.fJ(null)
B.cB=new A.fK(null)
B.cC=s(["vless","trojan","ss","hysteria2","hy2","tuic","anytls","socks","socks5","http","https"],t.s)
B.cD=s(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],t.s)
B.cE=s([],t.s)
B.cG={addNode:0,host:1,prependProxy:2,groups:3,rules:4}
B.K=new A.aJ(B.cG,["proxies","proxies","proxies","proxy-groups","rules"],t.w)
B.ap={"\ud83d\ude80 Domestic":0,"\ud83c\udf0d Foreign":1}
B.q=new A.aJ(B.ap,["# Mclash domestic-filter: ","# Mclash foreign-filter: "],t.w)
B.am=new A.aJ(B.ap,["",""],t.w)
B.aq={}
B.an=new A.aJ(B.aq,[],A.aS("aJ<d,p<d>>"))
B.cF=new A.aJ(B.aq,[],t.w)
B.cI=new A.bZ(-1,-1)
B.cJ=new A.cx(-1,null)
B.h=new A.bt("ANY")
B.M=new A.bt("DOUBLE_QUOTED")
B.N=new A.bt("FOLDED")
B.O=new A.bt("LITERAL")
B.i=new A.bt("PLAIN")
B.B=new A.bt("SINGLE_QUOTED")
B.cH={"aes-128-gcm":0,"aes-192-gcm":1,"aes-256-gcm":2,"chacha20-ietf-poly1305":3,"xchacha20-ietf-poly1305":4,"2022-blake3-aes-128-gcm":5,"2022-blake3-aes-256-gcm":6,"2022-blake3-chacha20-poly1305":7,"aes-128-ctr":8,"aes-192-ctr":9,"aes-256-ctr":10,"aes-128-cfb":11,"aes-192-cfb":12,"aes-256-cfb":13,"chacha20-ietf":14,chacha20:15,xchacha20:16,"rc4-md5":17,none:18,"aes-128-ccm":19,"aes-192-ccm":20,"aes-256-ccm":21,"aes-128-gcm-siv":22,"aes-256-gcm-siv":23,"chacha8-ietf-poly1305":24,"xchacha8-ietf-poly1305":25,"lea-128-gcm":26,"lea-192-gcm":27,"lea-256-gcm":28,"rabbit128-poly1305":29,"aegis-128l":30,"aegis-256":31,"aez-384":32,"deoxys-ii-256-128":33}
B.cK=new A.cQ(B.cH,34,A.aS("cQ<d>"))
B.cL=new A.Z(0,"streamStart")
B.w=new A.Z(1,"streamEnd")
B.r=new A.Z(10,"flowSequenceEnd")
B.as=new A.Z(11,"flowMappingStart")
B.t=new A.Z(12,"flowMappingEnd")
B.u=new A.Z(13,"blockEntry")
B.o=new A.Z(14,"flowEntry")
B.k=new A.Z(15,"key")
B.l=new A.Z(16,"value")
B.cM=new A.Z(17,"alias")
B.cN=new A.Z(18,"anchor")
B.cO=new A.Z(19,"tag")
B.P=new A.Z(2,"versionDirective")
B.at=new A.Z(20,"scalar")
B.Q=new A.Z(3,"tagDirective")
B.R=new A.Z(4,"documentStart")
B.S=new A.Z(5,"documentEnd")
B.T=new A.Z(6,"blockSequenceStart")
B.C=new A.Z(7,"blockMappingStart")
B.p=new A.Z(8,"blockEnd")
B.au=new A.Z(9,"flowSequenceStart")
B.cP=A.k7("ol")
B.cQ=A.k7("v")
B.cR=A.k7("kN")
B.cS=A.k7("kO")
B.cT=new A.hb(!1)
B.V=new A.ds(0,"strip")
B.av=new A.ds(1,"clip")
B.W=new A.ds(2,"keep")
B.X=new A.a1("FLOW_SEQUENCE_ENTRY_MAPPING_VALUE")
B.aw=new A.a1("BLOCK_MAPPING_FIRST_KEY")
B.D=new A.a1("BLOCK_MAPPING_KEY")
B.E=new A.a1("BLOCK_MAPPING_VALUE")
B.ax=new A.a1("BLOCK_NODE")
B.F=new A.a1("BLOCK_SEQUENCE_ENTRY")
B.ay=new A.a1("BLOCK_SEQUENCE_FIRST_ENTRY")
B.Y=new A.a1("FLOW_SEQUENCE_ENTRY_MAPPING_END")
B.az=new A.a1("DOCUMENT_CONTENT")
B.Z=new A.a1("DOCUMENT_END")
B.a_=new A.a1("DOCUMENT_START")
B.a0=new A.a1("END")
B.aA=new A.a1("FLOW_MAPPING_EMPTY_VALUE")
B.aB=new A.a1("FLOW_MAPPING_FIRST_KEY")
B.G=new A.a1("FLOW_MAPPING_KEY")
B.a1=new A.a1("FLOW_MAPPING_VALUE")
B.cU=new A.a1("FLOW_NODE")
B.a2=new A.a1("FLOW_SEQUENCE_ENTRY")
B.aC=new A.a1("FLOW_SEQUENCE_FIRST_ENTRY")
B.H=new A.a1("INDENTLESS_SEQUENCE_ENTRY")
B.aD=new A.a1("STREAM_START")
B.cV=new A.a1("BLOCK_NODE_OR_INDENTLESS_SEQUENCE")
B.aE=new A.a1("FLOW_SEQUENCE_ENTRY_MAPPING_KEY")})();(function staticFields(){$.hv=null
$.aG=A.c([],A.aS("K<v>"))
$.m3=null
$.lL=null
$.lK=null
$.nm=null
$.n9=null
$.nv=null
$.iQ=null
$.j7=null
$.lh=null
$.hC=A.c([],A.aS("K<p<v>?>"))
$.mb=""
$.mc=null
$.mQ=null
$.i1=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"t4","nF",()=>A.nj("_$dart_dartClosure"))
s($,"t3","lz",()=>A.nj("_$dart_dartClosure_dartJSInterop"))
s($,"ts","nW",()=>A.c([new J.ea()],A.aS("K<db>")))
s($,"ta","nH",()=>A.bj(A.h7({
toString:function(){return"$receiver$"}})))
s($,"tb","nI",()=>A.bj(A.h7({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tc","nJ",()=>A.bj(A.h7(null)))
s($,"td","nK",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"tg","nN",()=>A.bj(A.h7(void 0)))
s($,"th","nO",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"tf","nM",()=>A.bj(A.m7(null)))
s($,"te","nL",()=>A.bj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"tj","nQ",()=>A.bj(A.m7(void 0)))
s($,"ti","nP",()=>A.bj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"to","nU",()=>A.m0(4096))
s($,"tm","nS",()=>new A.hJ().$0())
s($,"tn","nT",()=>new A.hI().$0())
s($,"tl","lB",()=>new Int8Array(A.pD(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.Z))))
s($,"tk","nR",()=>A.m0(0))
s($,"tp","kt",()=>A.dP(B.cQ))
s($,"tt","lD",()=>new A.fg($.lA()))
s($,"t7","nG",()=>new A.eo(A.G("/",!0),A.G("[^/]$",!0),A.G("^/",!0)))
s($,"t9","fd",()=>new A.eH(A.G("[/\\\\]",!0),A.G("[^/\\\\]$",!0),A.G("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.G("^[/\\\\](?![/\\\\])",!0)))
s($,"t8","dT",()=>new A.eF(A.G("/",!0),A.G("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.G("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.G("^/",!0)))
s($,"t6","lA",()=>A.oG())
s($,"tq","nV",()=>A.G("\\r\\n?|\\n",!0))
r($,"nE","ku",()=>new A.ks())
s($,"tw","lE",()=>A.a7([0,"\\0",7,"\\a",8,"\\b",11,"\\v",12,"\\f",13,"\\r",27,"\\e",133,"\\N",160,"\\_",8232,"\\L",8233,"\\P"],t.p,t.N))
s($,"tv","nX",()=>{var q=A.fP($.lE(),t.p,t.N)
q.j(0,9,"\\t")
q.j(0,10,"\\n")
q.j(0,34,'\\"')
q.j(0,47,"\\/")
q.j(0,92,"\\\\")
return q})
s($,"tr","lC",()=>A.G("[^ \\t]",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBufferView:A.d4,Int8Array:A.eh,Uint32Array:A.d5,Uint8Array:A.bI})
hunkHelpers.setOrUpdateLeafTags({ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false})
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.dx.$nativeSuperclassTag="ArrayBufferView"
A.dy.$nativeSuperclassTag="ArrayBufferView"
A.bd.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.rd
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) { var message = result.error.replace(/^FormatException: /, ''); throw new Error(typeof i18n !== 'undefined' ? i18n.translate(message) : message); }
    return typeof i18n !== 'undefined' ? i18n.localizeGroups(result.value) : result.value;
  }
});
