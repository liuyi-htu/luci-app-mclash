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
if(a[b]!==s){A.tW(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.lL(b)
return new s(c,this)}:function(){if(s===null)s=A.lL(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.lL(a).prototype
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
lW(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jq(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lS==null){A.t3()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.mK("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hR
if(o==null)o=$.hR=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.td(a)
if(p!=null)return p
if(typeof a=="function")return B.cD
s=Object.getPrototypeOf(a)
if(s==null)return B.at
if(s===Object.prototype)return B.at
if(typeof q=="function"){o=$.hR
if(o==null)o=$.hR=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.W,enumerable:false,writable:true,configurable:true})
return B.W}return B.W},
mw(a,b){if(a<0||a>4294967295)throw A.a(A.a9(a,0,4294967295,"length",null))
return J.pe(new Array(a),b)},
l5(a,b){if(a<0)throw A.a(A.W("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("M<0>"))},
l4(a,b){if(a<0)throw A.a(A.W("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("M<0>"))},
pe(a,b){var s=A.c(a,b.i("M<0>"))
s.$flags=1
return s},
mx(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
pf(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.mx(r))break;++b}return b},
my(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.mx(q))break}return b},
b2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.eq.prototype}if(typeof a=="string")return J.bu.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.ep.prototype
if(Array.isArray(a))return J.M.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
if(typeof a=="symbol")return J.cv.prototype
if(typeof a=="bigint")return J.cu.prototype
return a}if(a instanceof A.w)return a
return J.jq(a)},
F(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(Array.isArray(a))return J.M.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
if(typeof a=="symbol")return J.cv.prototype
if(typeof a=="bigint")return J.cu.prototype
return a}if(a instanceof A.w)return a
return J.jq(a)},
a1(a){if(a==null)return a
if(Array.isArray(a))return J.M.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
if(typeof a=="symbol")return J.cv.prototype
if(typeof a=="bigint")return J.cu.prototype
return a}if(a instanceof A.w)return a
return J.jq(a)},
bD(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof A.w))return J.cE.prototype
return a},
rU(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
if(typeof a=="symbol")return J.cv.prototype
if(typeof a=="bigint")return J.cu.prototype
return a}if(a instanceof A.w)return a
return J.jq(a)},
p(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b2(a).T(a,b)},
k(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.t9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.F(a).h(a,b)},
e6(a,b,c){return J.a1(a).j(a,b,c)},
e7(a,b){return J.a1(a).t(a,b)},
l_(a,b){return J.bD(a).bB(a,b)},
oM(a,b,c){return J.bD(a).c_(a,b,c)},
oN(a,b){return J.a1(a).P(a,b)},
oO(a){return J.rU(a).e2(a)},
bs(a,b){return J.F(a).p(a,b)},
l0(a,b){return J.a1(a).V(a,b)},
oP(a,b){return J.a1(a).ap(a,b)},
mh(a){return J.a1(a).gU(a)},
ae(a){return J.b2(a).gX(a)},
ci(a){return J.F(a).gJ(a)},
cX(a){return J.F(a).gaN(a)},
C(a){return J.a1(a).gq(a)},
l1(a){return J.a1(a).gK(a)},
a6(a){return J.F(a).gl(a)},
oQ(a){return J.b2(a).gaD(a)},
oR(a,b){return J.F(a).au(a,b)},
oS(a,b,c){return J.F(a).af(a,b,c)},
aX(a,b,c){return J.a1(a).ad(a,b,c)},
oT(a,b,c){return J.bD(a).bF(a,b,c)},
oU(a,b){return J.a1(a).I(a,b)},
l2(a,b){return J.a1(a).aw(a,b)},
oV(a,b){return J.a1(a).aq(a,b)},
oW(a,b){return J.a1(a).ca(a,b)},
l3(a,b){return J.bD(a).bp(a,b)},
mi(a,b){return J.bD(a).u(a,b)},
bG(a,b){return J.bD(a).D(a,b)},
oX(a,b,c){return J.bD(a).v(a,b,c)},
oY(a,b){return J.a1(a).a4(a,b)},
am(a){return J.b2(a).n(a)},
aq(a,b){return J.a1(a).aP(a,b)},
en:function en(){},
ep:function ep(){},
d9:function d9(){},
db:function db(){},
bv:function bv(){},
eD:function eD(){},
cE:function cE(){},
bf:function bf(){},
cu:function cu(){},
cv:function cv(){},
M:function M(a){this.$ti=a},
eo:function eo(){},
fZ:function fZ(a){this.$ti=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
da:function da(){},
d8:function d8(){},
eq:function eq(){},
bu:function bu(){}},A={l7:function l7(){},
mA(a){return new A.cw("Field '"+a+"' has been assigned during initialization.")},
jv(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
by(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fo(a,b,c){return a},
lV(a){var s,r
for(s=$.aN.length,r=0;r<s;++r)if(a===$.aN[r])return!0
return!1},
b0(a,b,c,d){A.ag(b,"start")
if(c!=null){A.ag(c,"end")
if(b>c)A.E(A.a9(b,0,c,"start",null))}return new A.bV(a,b,c,d.i("bV<0>"))},
hb(a,b,c,d){if(t.W.b(a))return new A.bI(a,b,c.i("@<0>").a9(d).i("bI<1,2>"))
return new A.bh(a,b,c.i("@<0>").a9(d).i("bh<1,2>"))},
py(a,b,c){var s="takeCount"
A.cj(b,s,t.p)
A.ag(b,s)
if(t.W.b(a))return new A.d5(a,b,c.i("d5<0>"))
return new A.bX(a,b,c.i("bX<0>"))},
pq(a,b,c){var s="count"
if(t.W.b(a)){A.cj(b,s,t.p)
A.ag(b,s)
return new A.cp(a,b,c.i("cp<0>"))}A.cj(b,s,t.p)
A.ag(b,s)
return new A.bk(a,b,c.i("bk<0>"))},
p9(a,b,c){if(t.W.b(a))return new A.co(a,b,c.i("co<0>"))
return new A.be(a,b,c.i("be<0>"))},
a2(){return new A.bU("No element")},
pb(){return new A.bU("Too many elements")},
mv(){return new A.bU("Too few elements")},
eI(a,b,c,d,e){if(c-b<=32)A.ps(a,b,c,d,e)
else A.pr(a,b,c,d,e)},
ps(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.F(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aQ()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
pr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.ai(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.ai(a4+a5,2),f=g-j,e=g+j,d=J.F(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aQ()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.p(a6.$2(b,a0),0)
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
A.eI(a3,a4,r-2,a6,a7)
A.eI(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.p(a6.$2(d.h(a3,r),b),0))++r
while(J.p(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.eI(a3,r,q,a6,a7)}else A.eI(a3,r,q,a6,a7)},
cw:function cw(a){this.a=a},
aO:function aO(a){this.a=a},
hl:function hl(){},
v:function v(){},
z:function z(){},
bV:function bV(a,b,c,d){var _=this
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
bh:function bh(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
r:function r(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(a){this.$ti=a},
d6:function d6(a){this.$ti=a},
dA:function dA(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b){this.a=a
this.$ti=b},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
ay:function ay(){},
aC:function aC(){},
cF:function cF(){},
fa:function fa(a){this.a=a},
de:function de(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b){this.a=a
this.$ti=b},
mq(a,b,c){var s,r,q,p,o,n,m,l=A.j(a),k=A.N(new A.ai(a,l.i("ai<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.Y)(k),++i,p=o){r=k[i]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.N(new A.aK(a,l.i("aK<2>")),!0,c)
m=new A.aQ(q,n,b.i("@<0>").a9(c).i("aQ<1,2>"))
m.$keys=k
return m}return new A.d1(A.af(a,b,c),b.i("@<0>").a9(c).i("d1<1,2>"))},
mr(){throw A.a(A.O("Cannot modify unmodifiable Map"))},
ms(){throw A.a(A.O("Cannot modify constant Set"))},
ol(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
t9(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.am(a)
return s},
eF(a){var s,r=$.mF
if(r==null)r=$.mF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
aS(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
mG(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.O(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
eG(a){var s,r,q,p
if(a instanceof A.w)return A.ax(A.aa(a),null)
s=J.b2(a)
if(s===B.cC||s===B.cE||t.ak.b(a)){r=B.a7(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ax(A.aa(a),null)},
mH(a){var s,r,q
if(a==null||typeof a=="number"||A.fm(a))return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.au)return a.n(0)
if(a instanceof A.aF)return a.dV(!0)
s=$.oK()
for(r=0;r<1;++r){q=s[r].hz(a)
if(q!=null)return q}return"Instance of '"+A.eG(a)+"'"},
pi(){if(!!self.location)return self.location.href
return null},
mE(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
pk(a){var s,r,q,p=A.c([],t.Z)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Y)(a),++r){q=a[r]
if(!A.b9(q))throw A.a(A.cc(q))
if(q<=65535)B.b.t(p,q)
else if(q<=1114111){B.b.t(p,55296+(B.c.aH(q-65536,10)&1023))
B.b.t(p,56320+(q&1023))}else throw A.a(A.cc(q))}return A.mE(p)},
pj(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.b9(q))throw A.a(A.cc(q))
if(q<0)throw A.a(A.cc(q))
if(q>65535)return A.pk(a)}return A.mE(a)},
pl(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
B(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.aH(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.a9(a,0,1114111,null,null))},
rY(a){throw A.a(A.cc(a))},
b(a,b){if(a==null)J.a6(a)
throw A.a(A.dZ(a,b))},
dZ(a,b){var s,r="index"
if(!A.b9(b))return new A.b3(!0,b,r,null)
s=J.a6(a)
if(b<0||b>=s)return A.ek(b,s,a,null,r)
return A.hh(b,r)},
rK(a,b,c){if(a<0||a>c)return A.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a9(b,a,c,"end",null)
return new A.b3(!0,b,"end",null)},
cc(a){return new A.b3(!0,a,null,null)},
a(a){return A.ak(a,new Error())},
ak(a,b){var s
if(a==null)a=new A.dw()
b.dartException=a
s=A.tX
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
tX(){return J.am(this.dartException)},
E(a,b){throw A.ak(a,b==null?new Error():b)},
G(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.E(A.qD(a,b,c),s)},
qD(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.dy("'"+s+"': Cannot "+o+" "+l+k+n)},
Y(a){throw A.a(A.U(a))},
bn(a){var s,r,q,p,o,n
a=A.jY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hq(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mJ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l8(a,b){var s=b==null,r=s?null:b.method
return new A.er(a,r,s?null:b.receiver)},
bF(a){if(a==null)return new A.ey(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cg(a,a.dartException)
return A.rg(a)},
cg(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
rg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.aH(r,16)&8191)===10)switch(q){case 438:return A.cg(a,A.l8(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.cg(a,new A.di())}}if(a instanceof TypeError){p=$.os()
o=$.ot()
n=$.ou()
m=$.ov()
l=$.oy()
k=$.oz()
j=$.ox()
$.ow()
i=$.oB()
h=$.oA()
g=p.aS(s)
if(g!=null)return A.cg(a,A.l8(A.e(s),g))
else{g=o.aS(s)
if(g!=null){g.method="call"
return A.cg(a,A.l8(A.e(s),g))}else if(n.aS(s)!=null||m.aS(s)!=null||l.aS(s)!=null||k.aS(s)!=null||j.aS(s)!=null||m.aS(s)!=null||i.aS(s)!=null||h.aS(s)!=null){A.e(s)
return A.cg(a,new A.di())}}return A.cg(a,new A.eR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dr()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cg(a,new A.b3(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dr()
return a},
e1(a){if(a==null)return J.ae(a)
if(typeof a=="object")return A.eF(a)
return J.ae(a)},
rR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rS(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
qO(a,b,c,d,e,f){t._.a(a)
switch(A.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.f5("Unsupported number of arguments for wrapped closure"))},
rt(a,b){var s=a.$identity
if(!!s)return s
s=A.ru(a,b)
a.$identity=s
return s},
ru(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qO)},
p4(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eN().constructor.prototype):Object.create(new A.cm(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mp(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.p0(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mp(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
p0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.oZ)}throw A.a("Error in functionType of tearoff")},
p1(a,b,c,d){var s=A.mo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mp(a,b,c,d){if(c)return A.p3(a,b,d)
return A.p1(b.length,d,a,b)},
p2(a,b,c,d){var s=A.mo,r=A.p_
switch(b?-1:a){case 0:throw A.a(new A.eH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
p3(a,b,c){var s,r
if($.mm==null)$.mm=A.ml("interceptor")
if($.mn==null)$.mn=A.ml("receiver")
s=b.length
r=A.p2(s,c,a,b)
return r},
lL(a){return A.p4(a)},
oZ(a,b){return A.dU(v.typeUniverse,A.aa(a.a),b)},
mo(a){return a.a},
p_(a){return a.b},
ml(a){var s,r,q,p=new A.cm("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.W("Field name "+a+" not found."))},
o4(a){return v.getIsolateTag(a)},
uI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
td(a){var s,r,q,p,o,n=A.e($.o7.$1(a)),m=$.jf[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ca($.nT.$2(a,n))
if(q!=null){m=$.jf[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jE(s)
$.jf[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jz[n]=s
return s}if(p==="-"){o=A.jE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.of(a,s)
if(p==="*")throw A.a(A.mK(n))
if(v.leafTags[n]===true){o=A.jE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.of(a,s)},
of(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jE(a){return J.lW(a,!1,null,!!a.$ibL)},
tf(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jE(s)
else return J.lW(s,c,null,null)},
t3(){if(!0===$.lS)return
$.lS=!0
A.t4()},
t4(){var s,r,q,p,o,n,m,l
$.jf=Object.create(null)
$.jz=Object.create(null)
A.t2()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.og.$1(o)
if(n!=null){m=A.tf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
t2(){var s,r,q,p,o,n,m=B.aN()
m=A.cT(B.aO,A.cT(B.aP,A.cT(B.a8,A.cT(B.a8,A.cT(B.aQ,A.cT(B.aR,A.cT(B.aS(B.a7),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.o7=new A.jw(p)
$.nT=new A.jx(o)
$.og=new A.jy(n)},
cT(a,b){return a(b)||b},
rD(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
l6(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.D("Illegal RegExp pattern ("+String(o)+")",a,null))},
tN(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.b4){s=B.a.D(a,c)
return b.b.test(s)}else return!J.l_(b,B.a.D(a,c)).gJ(0)},
lO(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
tR(a,b,c,d){var s=b.cr(a,d)
if(s==null)return a
return A.m4(a,s.b.index,s.gH(),c)},
jY(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
K(a,b,c){var s
if(typeof b=="string")return A.tQ(a,b,c)
if(b instanceof A.b4){s=b.gdA()
s.lastIndex=0
return a.replace(s,A.lO(c))}return A.tP(a,b,c)},
tP(a,b,c){var s,r,q,p
for(s=J.l_(b,a),s=s.gq(s),r=0,q="";s.k();){p=s.gm()
q=q+a.substring(r,p.gC())+c
r=p.gH()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
tQ(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.jY(b),"g"),A.lO(c))},
nM(a){return a},
tO(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.bB(0,a),s=new A.dD(s.a,s.b,s.c),r=t.cz,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.m(A.nM(B.a.v(a,q,m)))+A.m(c.$1(o))
q=m+n[0].length}s=p+A.m(A.nM(B.a.D(a,q)))
return s.charCodeAt(0)==0?s:s},
tS(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.m4(a,s,s+b.length,c)}if(b instanceof A.b4)return d===0?a.replace(b.b,A.lO(c)):A.tR(a,b,c,d)
r=J.oM(b,a,d)
q=r.gq(r)
if(!q.k())return a
p=q.gm()
return B.a.aZ(a,p.gC(),p.gH(),c)},
m4(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
b8:function b8(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.$ti=b},
d0:function d0(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b){this.a=a
this.$ti=b},
c4:function c4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d2:function d2(){},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(){},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(a){this.a=a},
ey:function ey(a){this.a=a},
au:function au(){},
eb:function eb(){},
ec:function ec(){},
eP:function eP(){},
eN:function eN(){},
cm:function cm(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h0:function h0(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aK:function aK(a,b){this.a=a
this.$ti=b},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
V:function V(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
aF:function aF(){},
b1:function b1(){},
cK:function cK(){},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(a){this.b=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cD:function cD(a,b){this.a=a
this.c=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
tW(a){throw A.ak(A.mA(a),new Error())},
kC(){throw A.ak(A.mA(""),new Error())},
mZ(){var s=new A.f2("")
return s.b=s},
hN(a){var s=new A.f2(a)
return s.b=s},
f2:function f2(a){this.a=a
this.b=null},
qE(a){return a},
ph(a,b,c){var s=new DataView(a,b)
return s},
ld(a){return new Uint8Array(a)},
fl(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.dZ(b,a))},
nx(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.rK(a,b,c))
return b},
bN:function bN(){},
dg:function dg(){},
i0:function i0(a){this.a=a},
ev:function ev(){},
aY:function aY(){},
b6:function b6(){},
ew:function ew(){},
ex:function ex(){},
dh:function dh(){},
bO:function bO(){},
dK:function dK(){},
dL:function dL(){},
le(a,b){var s=b.c
return s==null?b.c=A.dS(a,"mu",[b.x]):s},
mI(a){var s=a.w
if(s===6||s===7)return A.mI(a.x)
return s===11||s===12},
pp(a){return a.as},
aW(a){return A.i_(v.typeUniverse,a,!1)},
t6(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.bC(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
bC(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bC(a1,s,a3,a4)
if(r===s)return a2
return A.na(a1,r,!0)
case 7:s=a2.x
r=A.bC(a1,s,a3,a4)
if(r===s)return a2
return A.n9(a1,r,!0)
case 8:q=a2.y
p=A.cS(a1,q,a3,a4)
if(p===q)return a2
return A.dS(a1,a2.x,p)
case 9:o=a2.x
n=A.bC(a1,o,a3,a4)
m=a2.y
l=A.cS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.lv(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cS(a1,j,a3,a4)
if(i===j)return a2
return A.nb(a1,k,i)
case 11:h=a2.x
g=A.bC(a1,h,a3,a4)
f=a2.y
e=A.r9(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.n8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cS(a1,d,a3,a4)
o=a2.x
n=A.bC(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.lw(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.e9("Attempted to substitute unexpected RTI kind "+a0))}},
cS(a,b,c,d){var s,r,q,p,o=b.length,n=A.i7(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ra(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.i7(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
r9(a,b,c,d){var s,r=b.a,q=A.cS(a,r,c,d),p=b.b,o=A.cS(a,p,c,d),n=b.c,m=A.ra(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f6()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
j3(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.rW(s)
return a.$S()}return null},
t5(a,b){var s
if(A.mI(b))if(a instanceof A.au){s=A.j3(a)
if(s!=null)return s}return A.aa(a)},
aa(a){if(a instanceof A.w)return A.j(a)
if(Array.isArray(a))return A.u(a)
return A.lD(J.b2(a))},
u(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.lD(a)},
lD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qN(a,s)},
qN(a,b){var s=a instanceof A.au?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.qd(v.typeUniverse,s.name)
b.$ccache=r
return r},
rW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.i_(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jr(a){return A.ba(A.j(a))},
lR(a){var s=A.j3(a)
return A.ba(s==null?A.aa(a):s)},
lF(a){var s
if(a instanceof A.aF)return A.rQ(a.$r,a.cs())
s=a instanceof A.au?A.j3(a):null
if(s!=null)return s
if(t.ci.b(a))return J.oQ(a).a
if(Array.isArray(a))return A.u(a)
return A.aa(a)},
ba(a){var s=a.r
return s==null?a.r=new A.hZ(a):s},
rQ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.b(q,0)
s=A.dU(v.typeUniverse,A.lF(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.nc(v.typeUniverse,s,A.lF(q[r]))}return A.dU(v.typeUniverse,s,a)},
cW(a){return A.ba(A.i_(v.typeUniverse,a,!1))},
qM(a){var s=this
s.b=A.r7(s)
return s.b(a)},
r7(a){var s,r,q,p,o
if(a===t.K)return A.qU
if(A.cf(a))return A.qY
s=a.w
if(s===6)return A.qI
if(s===1)return A.nF
if(s===7)return A.qP
r=A.r6(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.cf)){a.f="$i"+q
if(q==="q")return A.qS
if(a===t.o)return A.qR
return A.qX}}else if(s===10){p=A.rD(a.x,a.y)
o=p==null?A.nF:p
return o==null?A.fk(o):o}return A.qG},
r6(a){if(a.w===8){if(a===t.p)return A.b9
if(a===t.i||a===t.H)return A.qT
if(a===t.N)return A.qW
if(a===t.y)return A.fm}return null},
qL(a){var s=this,r=A.qF
if(A.cf(s))r=A.qx
else if(s===t.K)r=A.fk
else if(A.cU(s)){r=A.qH
if(s===t.h6)r=A.im
else if(s===t.dk)r=A.ca
else if(s===t.fQ)r=A.nu
else if(s===t.cg)r=A.nw
else if(s===t.cD)r=A.qu
else if(s===t.an)r=A.qw}else if(s===t.p)r=A.T
else if(s===t.N)r=A.e
else if(s===t.y)r=A.il
else if(s===t.H)r=A.nv
else if(s===t.i)r=A.qt
else if(s===t.o)r=A.qv
s.a=r
return s.a(a)},
qG(a){var s=this
if(a==null)return A.cU(s)
return A.oc(v.typeUniverse,A.t5(a,s),s)},
qI(a){if(a==null)return!0
return this.x.b(a)},
qX(a){var s,r=this
if(a==null)return A.cU(r)
s=r.f
if(a instanceof A.w)return!!a[s]
return!!J.b2(a)[s]},
qS(a){var s,r=this
if(a==null)return A.cU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.w)return!!a[s]
return!!J.b2(a)[s]},
qR(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.w)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
nE(a){if(typeof a=="object"){if(a instanceof A.w)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
qF(a){var s=this
if(a==null){if(A.cU(s))return a}else if(s.b(a))return a
throw A.ak(A.nA(a,s),new Error())},
qH(a){var s=this
if(a==null||s.b(a))return a
throw A.ak(A.nA(a,s),new Error())},
nA(a,b){return new A.cO("TypeError: "+A.n_(a,A.ax(b,null)))},
rp(a,b,c,d){if(A.oc(v.typeUniverse,a,b))return a
throw A.ak(A.q5("The type argument '"+A.ax(a,null)+"' is not a subtype of the type variable bound '"+A.ax(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
n_(a,b){return A.ei(a)+": type '"+A.ax(A.lF(a),null)+"' is not a subtype of type '"+b+"'"},
q5(a){return new A.cO("TypeError: "+a)},
aV(a,b){return new A.cO("TypeError: "+A.n_(a,b))},
qP(a){var s=this
return s.x.b(a)||A.le(v.typeUniverse,s).b(a)},
qU(a){return a!=null},
fk(a){if(a!=null)return a
throw A.ak(A.aV(a,"Object"),new Error())},
qY(a){return!0},
qx(a){return a},
nF(a){return!1},
fm(a){return!0===a||!1===a},
il(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ak(A.aV(a,"bool"),new Error())},
nu(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ak(A.aV(a,"bool?"),new Error())},
qt(a){if(typeof a=="number")return a
throw A.ak(A.aV(a,"double"),new Error())},
qu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ak(A.aV(a,"double?"),new Error())},
b9(a){return typeof a=="number"&&Math.floor(a)===a},
T(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ak(A.aV(a,"int"),new Error())},
im(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ak(A.aV(a,"int?"),new Error())},
qT(a){return typeof a=="number"},
nv(a){if(typeof a=="number")return a
throw A.ak(A.aV(a,"num"),new Error())},
nw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ak(A.aV(a,"num?"),new Error())},
qW(a){return typeof a=="string"},
e(a){if(typeof a=="string")return a
throw A.ak(A.aV(a,"String"),new Error())},
ca(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ak(A.aV(a,"String?"),new Error())},
qv(a){if(A.nE(a))return a
throw A.ak(A.aV(a,"JSObject"),new Error())},
qw(a){if(a==null)return a
if(A.nE(a))return a
throw A.ak(A.aV(a,"JSObject?"),new Error())},
nH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ax(a[q],b)
return s},
r2(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.nH(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ax(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
nB(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.ax(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.ax(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.ax(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.ax(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.ax(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
ax(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.ax(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.ax(a.x,b)+">"
if(l===8){p=A.rf(a.x)
o=a.y
return o.length>0?p+("<"+A.nH(o,b)+">"):p}if(l===10)return A.r2(a,b)
if(l===11)return A.nB(a,b,null)
if(l===12)return A.nB(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
rf(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qe(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
qd(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.i_(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dT(a,5,"#")
q=A.i7(s)
for(p=0;p<s;++p)q[p]=r
o=A.dS(a,b,q)
n[b]=o
return o}else return m},
qc(a,b){return A.nq(a.tR,b)},
qb(a,b){return A.nq(a.eT,b)},
i_(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.n4(A.n2(a,null,b,!1))
r.set(b,s)
return s},
dU(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.n4(A.n2(a,b,c,!0))
q.set(c,r)
return r},
nc(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.lv(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bB(a,b){b.a=A.qL
b.b=A.qM
return b},
dT(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aZ(null,null)
s.w=b
s.as=c
r=A.bB(a,s)
a.eC.set(c,r)
return r},
na(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.q9(a,b,r,c)
a.eC.set(r,s)
return s},
q9(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.cf(b))if(!(b===t.b||b===t.u))if(s!==6)r=s===7&&A.cU(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.aZ(null,null)
q.w=6
q.x=b
q.as=c
return A.bB(a,q)},
n9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.q7(a,b,r,c)
a.eC.set(r,s)
return s},
q7(a,b,c,d){var s,r
if(d){s=b.w
if(A.cf(b)||b===t.K)return b
else if(s===1)return A.dS(a,"mu",[b])
else if(b===t.b||b===t.u)return t.eH}r=new A.aZ(null,null)
r.w=7
r.x=b
r.as=c
return A.bB(a,r)},
qa(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aZ(null,null)
s.w=13
s.x=b
s.as=q
r=A.bB(a,s)
a.eC.set(q,r)
return r},
dR(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
q6(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dS(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dR(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aZ(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bB(a,r)
a.eC.set(p,q)
return q},
lv(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dR(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aZ(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bB(a,o)
a.eC.set(q,n)
return n},
nb(a,b,c){var s,r,q="+"+(b+"("+A.dR(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aZ(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bB(a,s)
a.eC.set(q,r)
return r},
n8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dR(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dR(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.q6(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aZ(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bB(a,p)
a.eC.set(r,o)
return o},
lw(a,b,c,d){var s,r=b.as+("<"+A.dR(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.q8(a,b,c,r,d)
a.eC.set(r,s)
return s},
q8(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.i7(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bC(a,b,r,0)
m=A.cS(a,c,r,0)
return A.lw(a,n,m,c!==m)}}l=new A.aZ(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bB(a,l)},
n2(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
n4(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.q0(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.n3(a,r,l,k,!1)
else if(q===46)r=A.n3(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.c6(a.u,a.e,k.pop()))
break
case 94:k.push(A.qa(a.u,k.pop()))
break
case 35:k.push(A.dT(a.u,5,"#"))
break
case 64:k.push(A.dT(a.u,2,"@"))
break
case 126:k.push(A.dT(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.q2(a,k)
break
case 38:A.q1(a,k)
break
case 63:p=a.u
k.push(A.na(p,A.c6(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.n9(p,A.c6(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.q_(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.n5(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.q4(a.u,a.e,o)
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
return A.c6(a.u,a.e,m)},
q0(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
n3(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.qe(s,o.x)[p]
if(n==null)A.E('No "'+p+'" in "'+A.pp(o)+'"')
d.push(A.dU(s,o,n))}else d.push(p)
return m},
q2(a,b){var s,r=a.u,q=A.n1(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dS(r,p,q))
else{s=A.c6(r,a.e,p)
switch(s.w){case 11:b.push(A.lw(r,s,q,a.n))
break
default:b.push(A.lv(r,s,q))
break}}},
q_(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.n1(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.c6(p,a.e,o)
q=new A.f6()
q.a=s
q.b=n
q.c=m
b.push(A.n8(p,r,q))
return
case-4:b.push(A.nb(p,b.pop(),s))
return
default:throw A.a(A.e9("Unexpected state under `()`: "+A.m(o)))}},
q1(a,b){var s=b.pop()
if(0===s){b.push(A.dT(a.u,1,"0&"))
return}if(1===s){b.push(A.dT(a.u,4,"1&"))
return}throw A.a(A.e9("Unexpected extended operation "+A.m(s)))},
n1(a,b){var s=b.splice(a.p)
A.n5(a.u,a.e,s)
a.p=b.pop()
return s},
c6(a,b,c){if(typeof c=="string")return A.dS(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.q3(a,b,c)}else return c},
n5(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.c6(a,b,c[s])},
q4(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.c6(a,b,c[s])},
q3(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.e9("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.e9("Bad index "+c+" for "+b.n(0)))},
oc(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ah(a,b,null,c,null)
r.set(c,s)}return s},
ah(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.cf(d))return!0
s=b.w
if(s===4)return!0
if(A.cf(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ah(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.u){if(q===7)return A.ah(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.ah(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ah(a,b.x,c,d,e))return!1
return A.ah(a,A.le(a,b),c,d,e)}if(s===6)return A.ah(a,p,c,d,e)&&A.ah(a,b.x,c,d,e)
if(q===7){if(A.ah(a,b,c,d.x,e))return!0
return A.ah(a,b,c,A.le(a,d),e)}if(q===6)return A.ah(a,b,c,p,e)||A.ah(a,b,c,d.x,e)
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
if(!A.ah(a,j,c,i,e)||!A.ah(a,i,e,j,c))return!1}return A.nD(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.nD(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.qQ(a,b,c,d,e)}if(o&&q===10)return A.qV(a,b,c,d,e)
return!1},
nD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ah(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ah(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ah(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ah(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ah(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
qQ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dU(a,b,r[o])
return A.nt(a,p,null,c,d.y,e)}return A.nt(a,b.y,null,c,d.y,e)},
nt(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ah(a,b[s],d,e[s],f))return!1
return!0},
qV(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ah(a,r[s],c,q[s],e))return!1
return!0},
cU(a){var s=a.w,r=!0
if(!(a===t.b||a===t.u))if(!A.cf(a))if(s!==6)r=s===7&&A.cU(a.x)
return r},
cf(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
nq(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
i7(a){return a>0?new Array(a):v.typeUniverse.sEA},
aZ:function aZ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
f6:function f6(){this.c=this.b=this.a=null},
hZ:function hZ(a){this.a=a},
f4:function f4(){},
cO:function cO(a){this.a=a},
n7(a,b,c){return 0},
dQ:function dQ(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bA:function bA(a,b){this.a=a
this.$ti=b},
h5(a,b,c,d){if(b==null){if(a==null)return new A.aI(c.i("@<0>").a9(d).i("aI<1,2>"))
b=A.rr()}else{if(A.rz()===b&&A.ry()===a)return new A.dc(c.i("@<0>").a9(d).i("dc<1,2>"))
if(a==null)a=A.rq()}return A.pZ(a,b,null,c,d)},
a7(a,b,c){return b.i("@<0>").a9(c).i("h3<1,2>").a(A.rR(a,new A.aI(b.i("@<0>").a9(c).i("aI<1,2>"))))},
n(a,b){return new A.aI(a.i("@<0>").a9(b).i("aI<1,2>"))},
pZ(a,b,c,d,e){return new A.dH(a,b,new A.hW(d),d.i("@<0>").a9(e).i("dH<1,2>"))},
ls(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
la(a){return new A.aE(a.i("aE<0>"))},
az(a){return new A.aE(a.i("aE<0>"))},
mB(a,b){return b.i("l9<0>").a(A.rS(a,new A.aE(b.i("aE<0>"))))},
lu(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lt(a,b,c){var s=new A.c5(a,b,c.i("c5<0>"))
s.c=a.e
return s},
qA(a,b){return J.p(a,b)},
qB(a){return J.ae(a)},
af(a,b,c){var s=A.h5(null,null,b,c)
a.ap(0,new A.h6(s,b,c))
return s},
h7(a,b,c){var s=A.h5(null,null,b,c)
s.a2(0,a)
return s},
aA(a,b){var s,r,q=A.la(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Y)(a),++r)q.t(0,b.a(a[r]))
return q},
eu(a,b){var s=A.la(b)
s.a2(0,a)
return s},
lc(a){var s,r
if(A.lV(a))return"{...}"
s=new A.a_("")
try{r={}
B.b.t($.aN,a)
s.a+="{"
r.a=!0
a.ap(0,new A.ha(r,s))
s.a+="}"}finally{if(0>=$.aN.length)return A.b($.aN,-1)
$.aN.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dH:function dH(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
hW:function hW(a){this.a=a},
c2:function c2(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cH:function cH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cI:function cI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f9:function f9(a){this.a=a
this.c=this.b=null},
c5:function c5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dx:function dx(a,b){this.a=a
this.$ti=b},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
A:function A(){},
h9:function h9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
cG:function cG(){},
dI:function dI(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
at:function at(){},
cx:function cx(){},
b7:function b7(a,b){this.a=a
this.$ti=b},
b_:function b_(){},
dP:function dP(){},
cP:function cP(){},
r_(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bF(r)
q=A.D(String(s),null,null)
throw A.a(q)}q=A.io(p)
return q},
io(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.f7(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.io(a[s])
return a},
qp(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.oI()
else s=new Uint8Array(o)
for(r=J.F(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
qo(a,b,c,d){var s=a?$.oH():$.oG()
if(s==null)return null
if(0===c&&d===b.length)return A.np(s,b)
return A.np(s,b.subarray(c,d))},
np(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
mk(a,b,c,d,e,f){if(B.c.aF(f,4)!==0)throw A.a(A.D("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.D("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.D("Invalid base64 padding, more than two '=' characters",a,b))},
pJ(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=b.length,r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){if(!(p<s))return A.b(b,p)
n=b[p]
o|=n
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.b(a,l)
q&2&&A.G(f)
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
q&2&&A.G(f)
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
q&2&&A.G(f)
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
throw A.a(A.mj(b,"Not a byte value at index "+p+": 0x"+B.c.hx(b[p],16),null))},
pI(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.c.aH(a1,2),f=a1&3,e=$.mb()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.b(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.b(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.G(d)
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
if(f===3){if((g&3)!==0)throw A.a(A.D(i,a,p))
k=a0+1
q&2&&A.G(d)
s=d.length
if(!(a0<s))return A.b(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.b(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.a(A.D(i,a,p))
q&2&&A.G(d)
if(!(a0<d.length))return A.b(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.mR(a,p+1,c,-j-1)}throw A.a(A.D(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.b(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.D(h,a,p))},
pG(a,b,c,d){var s=A.pH(a,b,c),r=(d&3)+(s-b),q=B.c.aH(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.oC()},
pH(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
mR(a,b,c,d){var s,r,q
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
if(b===c)break}if(b!==c)throw A.a(A.D("Invalid padding character",a,b))
return-s-1},
mz(a,b,c){return new A.dd(a,b)},
qC(a){return a.hw()},
pX(a,b){return new A.hT(a,[],A.rv())},
pY(a,b,c){var s,r=new A.a_(""),q=A.pX(r,b)
q.c7(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
qq(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
f7:function f7(a,b){this.a=a
this.b=b
this.c=null},
hS:function hS(a){this.a=a},
f8:function f8(a){this.a=a},
i5:function i5(){},
i4:function i4(){},
cl:function cl(a){this.a=a},
ea:function ea(a){this.a=a},
hJ:function hJ(a){this.a=0
this.b=a},
fy:function fy(){},
hI:function hI(){this.a=0},
aP:function aP(){},
ee:function ee(){},
eh:function eh(){},
dd:function dd(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
es:function es(){},
h2:function h2(a){this.b=a},
h1:function h1(a){this.a=a},
hU:function hU(){},
hV:function hV(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.c=a
this.a=b
this.b=c},
eW:function eW(){},
hv:function hv(){},
i6:function i6(a){this.b=0
this.c=a},
hu:function hu(a){this.a=a},
i3:function i3(a){this.a=a
this.b=16
this.c=0},
pO(a,b){var s,r,q=$.aG(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.ah(0,$.mc()).c8(0,A.c1(s))
s=0
o=0}}if(b)return q.aR(0)
return q},
lq(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
pP(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.ao.h6(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.b(a,s)
o=A.lq(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0&&h<j))return A.b(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.b(a,s)
o=A.lq(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0&&n<j))return A.b(i,n)
i[n]=r}if(j===1){if(0>=j)return A.b(i,0)
l=i[0]===0}else l=!1
if(l)return $.aG()
l=A.aD(j,i)
return new A.ad(l===0?!1:c,i,l)},
pQ(a,b,c){var s,r,q,p=$.aG(),o=A.c1(b)
for(s=a.length,r=0;r<s;++r){q=A.lq(a.charCodeAt(r))
if(q>=b)return null
p=p.ah(0,o).c8(0,A.c1(q))}if(c)return p.aR(0)
return p},
pS(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.oE().e4(a)
if(s==null)return l
r=s.b
q=r.length
if(1>=q)return A.b(r,1)
p=r[1]==="-"
if(4>=q)return A.b(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.b(r,5)
m=r[5]
if(b<2||b>36)throw A.a(A.a9(b,2,36,"radix",l))
if(b===10&&o!=null)return A.pO(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.pP(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.pQ(r,b,p)},
aD(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.b(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
lp(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.b(a,q)
q=a[q]
if(!(r<d))return A.b(p,r)
p[r]=q}return p},
pL(a){var s
if(a===0)return $.aG()
if(a===1)return $.e5()
if(a===2)return $.oF()
if(Math.abs(a)<4294967296)return A.c1(B.c.hv(a))
s=A.pK(a)
return s},
c1(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.aD(4,s)
return new A.ad(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.aD(1,s)
return new A.ad(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.aH(a,16)
r=A.aD(2,s)
return new A.ad(r===0?!1:o,s,r)}r=B.c.ai(B.c.ge3(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.b(s,q)
s[q]=a&65535
a=B.c.ai(a,65536)}r=A.aD(r,s)
return new A.ad(r===0?!1:o,s,r)},
pK(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.a(A.W("Value must be finite: "+a))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.aG()
r=$.oD()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.G(r)
if(!(p<8))return A.b(r,p)
r[p]=0}q=J.oO(B.N.gh5(r))
q.$flags&2&&A.G(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.ad(!1,n,4)
if(o<0)l=m.b2(0,-o)
else l=o>0?m.b1(0,o):m
if(s)return l.aR(0)
return l},
lr(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.b(a,s)
o=a[s]
q&2&&A.G(d)
if(!(p>=0&&p<d.length))return A.b(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.G(d)
if(!(s<d.length))return A.b(d,s)
d[s]=0}return b+c},
mX(a,b,c,d){var s,r,q,p,o,n,m,l=B.c.ai(c,16),k=B.c.aF(c,16),j=16-k,i=B.c.b1(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.b(a,s)
o=a[s]
n=s+l+1
m=B.c.b2(o,j)
q&2&&A.G(d)
if(!(n>=0&&n<d.length))return A.b(d,n)
d[n]=(m|p)>>>0
p=B.c.b1((o&i)>>>0,k)}q&2&&A.G(d)
if(!(l>=0&&l<d.length))return A.b(d,l)
d[l]=p},
mS(a,b,c,d){var s,r,q,p=B.c.ai(c,16)
if(B.c.aF(c,16)===0)return A.lr(a,b,p,d)
s=b+p+1
A.mX(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.G(d)
if(!(q<d.length))return A.b(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.b(d,r)
if(d[r]===0)s=r
return s},
pR(a,b,c,d){var s,r,q,p,o,n,m=B.c.ai(c,16),l=B.c.aF(c,16),k=16-l,j=B.c.b1(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.b(a,m)
s=B.c.b2(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.b(a,o)
n=a[o]
o=B.c.b1((n&j)>>>0,k)
q&2&&A.G(d)
if(!(p<d.length))return A.b(d,p)
d[p]=(o|s)>>>0
s=B.c.b2(n,l)}q&2&&A.G(d)
if(!(r>=0&&r<d.length))return A.b(d,r)
d[r]=s},
hK(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.b(a,s)
p=a[s]
if(!(s<q))return A.b(c,s)
o=p-c[s]
if(o!==0)return o}return o},
pM(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n+c[o]
q&2&&A.G(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=B.c.aH(p,16)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.G(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=B.c.aH(p,16)}q&2&&A.G(e)
if(!(b>=0&&b<e.length))return A.b(e,b)
e[b]=p},
f1(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n-c[o]
q&2&&A.G(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.c.aH(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.G(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.c.aH(p,16)&1)}},
mY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.b(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.b(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.G(d)
d[e]=m&65535
p=B.c.ai(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.b(d,e)
k=d[e]+p
l=e+1
q&2&&A.G(d)
d[e]=k&65535
p=B.c.ai(k,65536)}},
pN(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.b(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.b(b,r)
q=B.c.eH((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
t_(a){return A.e1(a)},
ce(a,b,c){var s
A.e(a)
A.im(c)
t.ck.a(b)
s=A.aS(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.a(A.D(a,null,null))},
oa(a,b){return A.aS(A.e(a),A.im(b))},
aL(a,b,c,d){var s,r=c?J.l5(a,d):J.mw(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
N(a,b,c){var s,r=A.c([],c.i("M<0>"))
for(s=J.C(a);s.k();)B.b.t(r,c.a(s.gm()))
if(b)return r
r.$flags=1
return r},
o(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("M<0>"))
s=A.c([],b.i("M<0>"))
for(r=J.C(a);r.k();)B.b.t(s,r.gm())
return s},
lb(a,b){var s=A.N(a,!1,b)
s.$flags=3
return s},
dt(a,b,c){var s,r
A.ag(b,"start")
s=c!=null
if(s){r=c-b
if(r<0)throw A.a(A.a9(c,b,null,"end",null))
if(r===0)return""}if(t.bm.b(a))return A.pw(a,b,c)
if(s)a=A.b0(a,0,A.fo(c,"count",t.p),A.aa(a).i("t.E"))
if(b>0)a=J.oV(a,b)
s=A.o(a,t.p)
return A.pj(s)},
pw(a,b,c){var s=a.length
if(b>=s)return""
return A.pl(a,b,c==null||c>s?s:c)},
H(a,b){return new A.b4(a,A.l6(a,!1,b,!1,!1,""))},
rZ(a,b){return a==null?b==null:a===b},
lg(a,b,c){var s=J.C(b)
if(!s.k())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.k())}else{a+=A.m(s.gm())
while(s.k())a=a+c+A.m(s.gm())}return a},
ll(){var s,r,q=A.pi()
if(q==null)throw A.a(A.O("'Uri.base' is not supported"))
s=$.mO
if(s!=null&&q===$.mN)return s
r=A.eU(q,0,null)
$.mO=r
$.mN=q
return r},
ei(a){if(typeof a=="number"||A.fm(a)||a==null)return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mH(a)},
e9(a){return new A.ck(a)},
W(a){return new A.b3(!1,null,null,a)},
mj(a,b,c){return new A.b3(!0,a,b,c)},
cj(a,b,c){return a},
a8(a){var s=null
return new A.cz(s,s,!1,s,s,a)},
hh(a,b){return new A.cz(null,null,!0,a,b,"Value not in range")},
a9(a,b,c,d,e){return new A.cz(b,c,!0,a,d,"Invalid value")},
cA(a,b,c,d){if(a<b||a>c)throw A.a(A.a9(a,b,c,d,null))
return a},
bj(a,b,c){if(0>a||a>c)throw A.a(A.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.a9(b,a,c,"end",null))
return b}return c},
ag(a,b){if(a<0)throw A.a(A.a9(a,0,null,b==null?"index":b,null))
return a},
ek(a,b,c,d,e){return new A.ej(b,!0,a,e,"Index out of range")},
O(a){return new A.dy(a)},
mK(a){return new A.eQ(a)},
bm(a){return new A.bU(a)},
U(a){return new A.ed(a)},
D(a,b,c){return new A.i(a,b,c)},
pd(a,b,c){var s,r
if(A.lV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.t($.aN,a)
try{A.qZ(a,s)}finally{if(0>=$.aN.length)return A.b($.aN,-1)
$.aN.pop()}r=A.lg(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fY(a,b,c){var s,r
if(A.lV(a))return b+"..."+c
s=new A.a_(b)
B.b.t($.aN,a)
try{r=s
r.a=A.lg(r.a,a,", ")}finally{if(0>=$.aN.length)return A.b($.aN,-1)
$.aN.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
qZ(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
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
ez(a,b,c,d){var s
if(B.n===c){s=J.ae(a)
b=J.ae(b)
return A.lh(A.by(A.by($.kY(),s),b))}if(B.n===d){s=J.ae(a)
b=J.ae(b)
c=J.ae(c)
return A.lh(A.by(A.by(A.by($.kY(),s),b),c))}s=J.ae(a)
b=J.ae(b)
c=J.ae(c)
d=J.ae(d)
d=A.lh(A.by(A.by(A.by(A.by($.kY(),s),b),c),d))
return d},
eU(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
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
if(n===0)return A.mM(a7>0||a8<a8?B.a.v(a6,a7,a8):a6,5,a5).geq()
else if(n===32)return A.mM(B.a.v(a6,s,a8),0,a5).geq()}m=A.aL(8,0,!1,t.p)
B.b.j(m,0,0)
r=a7-1
B.b.j(m,1,r)
B.b.j(m,2,r)
B.b.j(m,7,r)
B.b.j(m,3,a7)
B.b.j(m,4,a7)
B.b.j(m,5,a8)
B.b.j(m,6,a8)
if(A.nJ(a6,a7,a8,0,m)>=14)B.b.j(m,7,a8)
l=m[1]
if(l>=a7)if(A.nJ(a6,a7,l,20,m)===20)m[7]=l
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
if(!(r&&j+1===i)){if(!B.a.a5(a6,"\\",i))if(k>a7)q=B.a.a5(a6,"\\",k-1)||B.a.a5(a6,"\\",k-2)
else q=!1
else q=!0
if(!q){if(!(h<a8&&h===i+2&&B.a.a5(a6,"..",i)))q=h>i+2&&B.a.a5(a6,"/..",h-3)
else q=!0
if(!q)if(l===a7+4){if(B.a.a5(a6,"file",a7)){if(k<=a7){if(!B.a.a5(a6,"/",i)){c="file:///"
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
if(s){a6=B.a.aZ(a6,i,h,"/");++h;++g;++a8}else{a6=B.a.v(a6,a7,i)+"/"+B.a.v(a6,h,a8)
l-=a7
k-=a7
j-=a7
i-=a7
s=1-a7
h+=s
g+=s
a8=a6.length
a7=d}}e="file"}else if(B.a.a5(a6,"http",a7)){if(r&&j+3===i&&B.a.a5(a6,"80",j+1)){s=a7===0
s
if(s){a6=B.a.aZ(a6,j,i,"")
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
a7=d}}e="http"}}else if(l===s&&B.a.a5(a6,"https",a7)){if(r&&j+4===i&&B.a.a5(a6,"443",j+1)){s=a7===0
s
if(s){a6=B.a.aZ(a6,j,i,"")
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
g-=a7}return new A.aU(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.ly(a6,a7,l)
else{if(l===a7)A.cR(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.nk(a6,a,k-1):""
a1=A.nh(a6,k,j,!1)
s=j+1
if(s<i){a2=A.aS(B.a.v(a6,s,i),a5)
b=A.i1(a2==null?A.E(A.D("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.ni(a6,i,h,a5,e,a1!=null)
a4=h<g?A.nj(a6,h+1,g,a5):a5
return A.dW(e,a0,a1,b,a3,a4,g<a8?A.ng(a6,g+1,a8):a5)},
pD(a){var s,r,q=0,p=null
try{s=A.eU(a,q,p)
return s}catch(r){if(t.l.b(A.bF(r)))return null
else throw r}},
pC(a){A.e(a)
return A.ao(a,0,a.length,B.e,!1)},
mQ(a){var s=t.N
return B.b.bg(A.c(a.split("&"),t.s),A.n(s,s),new A.ht(B.e),t.G)},
eT(a,b,c){throw A.a(A.D("Illegal IPv4 address, "+a,b,c))},
pz(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.eT("each part must be in the range 0..255",a,r)}A.eT("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.eT(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.G(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.eT(j,a,q)
p=l}A.eT("IPv4 address should contain exactly 4 parts",a,q)},
pA(a,b,c){var s
if(b===c)throw A.a(A.D("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.pB(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.mP(a,b,c)
return!0},
pB(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
mP(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.hs(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.pz(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.aH(l,8)
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
B.N.am(s,a0,16,s,a)
B.N.bD(s,a,a0,0)}}return s},
dW(a,b,c,d,e,f,g){return new A.dV(a,b,c,d,e,f,g)},
nd(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR(a,b,c){throw A.a(A.D(c,a,b))},
qg(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.p(q,"/")){s=A.O("Illegal path character "+q)
throw A.a(s)}}},
qi(a){var s
if(a.length===0)return B.aq
s=A.no(a)
s.ep(A.nZ())
return A.mq(s,t.N,t.a)},
i1(a,b){if(a!=null&&a===A.nd(b))return null
return a},
nh(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.cR(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.qh(a,q,r)
if(o<r){n=o+1
p=A.nn(a,B.a.a5(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.pA(a,q,o)
l=B.a.v(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.af(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.nn(a,B.a.a5(a,"25",n)?o+3:n,c,"%25")}else p=""
A.mP(a,b,o)
return"["+B.a.v(a,b,o)+p+"]"}}return A.qm(a,b,c)},
qh(a,b,c){var s=B.a.af(a,"%",b)
return s>=b&&s<c?s:c},
nn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.a_(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.lz(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.a_("")
l=h.a+=B.a.v(a,q,r)
if(m)n=B.a.v(a,r,r+3)
else if(n==="%")A.cR(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.a_("")
if(q<r){h.a+=B.a.v(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.v(a,q,r)
if(h==null){h=new A.a_("")
m=h}else m=h
m.a+=i
l=A.lx(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.v(a,b,c)
if(q<c){i=B.a.v(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
qm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.lz(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.a_("")
k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.v(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.a_("")
if(q<r){p.a+=B.a.v(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cR(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.a_("")
l=p}else l=p
l.a+=k
j=A.lx(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.v(a,b,c)
if(q<c){k=B.a.v(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
ly(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.nf(a.charCodeAt(b)))A.cR(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.cR(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.v(a,b,c)
return A.qf(q?a.toLowerCase():a)},
qf(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nk(a,b,c){if(a==null)return""
return A.dX(a,b,c,16,!1,!1)},
ni(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dX(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.ql(s,e,f)},
ql(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.lA(a,!s||c)
return A.c9(a)},
nj(a,b,c,d){if(a!=null)return A.dX(a,b,c,256,!0,!1)
return null},
ng(a,b,c){if(a==null)return null
return A.dX(a,b,c,256,!0,!1)},
lz(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.jv(r)
o=A.jv(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.B(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.v(a,b,b+3).toUpperCase()
return null},
lx(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.fR(a,6*p)&63|q
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
o+=3}}return A.dt(s,0,null)},
dX(a,b,c,d,e,f){var s=A.nm(a,b,c,d,e,f)
return s==null?B.a.v(a,b,c):s},
nm(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.lz(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cR(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.lx(n)}if(o==null){o=new A.a_("")
k=o}else k=o
k.a=(k.a+=B.a.v(a,p,q))+l
if(typeof m!=="number")return A.rY(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.v(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
nl(a){if(B.a.u(a,"."))return!0
return B.a.au(a,"/.")!==-1},
c9(a){var s,r,q,p,o,n,m
if(!A.nl(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.b.t(s,"")}p=!0}else{p="."===n
if(!p)B.b.t(s,n)}}if(p)B.b.t(s,"")
return B.b.R(s,"/")},
lA(a,b){var s,r,q,p,o,n
if(!A.nl(a))return!b?A.ne(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gK(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.b.t(s,"..")
p=!0}else{p="."===n
if(!p)B.b.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.t(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.b.j(s,0,A.ne(s[0]))}return B.b.R(s,"/")},
ne(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.nf(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.v(a,0,s)+"%3A"+B.a.D(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
qn(a,b){if(a.hj("package")&&a.c==null)return A.nK(b,0,b.length)
return-1},
qj(){return A.c([],t.s)},
no(a){var s,r,q,p,o,n=A.n(t.N,t.a),m=new A.i2(a,B.e,n)
for(s=a.length,r=0,q=0,p=-1;r<s;){o=a.charCodeAt(r)
if(o===61){if(p<0)p=r}else if(o===38){m.$3(q,p,r)
q=r+1
p=-1}++r}m.$3(q,p,r)
return n},
qk(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p>=0&&p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.W("Invalid URL encoding"))}}return r},
ao(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.e===d)return B.a.v(a,b,c)
else p=new A.aO(B.a.v(a,b,c))
else{p=A.c([],t.Z)
for(n=b;n<c;++n){if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.W("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.a(A.W("Truncated URI"))
B.b.t(p,A.qk(a,n+1))
n+=2}else if(e&&r===43)B.b.t(p,32)
else B.b.t(p,r)}}return d.cN(p)},
nf(a){var s=a|32
return 97<=s&&s<=122},
mM(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.Z)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.D(k,a,r))}}if(q<0&&r>b)throw A.a(A.D(k,a,r))
while(p!==44){B.b.t(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.b(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.b.t(j,o)
else{n=B.b.gK(j)
if(p!==44||r!==n+7||!B.a.a5(a,"base64",n+1))throw A.a(A.D("Expecting '='",a,r))
break}}B.b.t(j,r)
m=r+1
if((j.length&1)===1)a=B.v.eg(a,m,s)
else{l=A.nm(a,m,s,256,!0,!1)
if(l!=null)a=B.a.aZ(a,m,s,l)}return new A.hr(a,j,c)},
nJ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.j(e,o>>>5,r)}return d},
n6(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.nK(a.a,a.e,a.f)
return-1},
rb(a,b){A.e(a)
return A.lb(t.a.a(b),t.N)},
nK(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
qz(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.b(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(){},
hM:function hM(){},
hP:function hP(){},
S:function S(){},
ck:function ck(a){this.a=a},
dw:function dw(){},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ej:function ej(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dy:function dy(a){this.a=a},
eQ:function eQ(a){this.a=a},
bU:function bU(a){this.a=a},
ed:function ed(a){this.a=a},
eA:function eA(){},
dr:function dr(){},
f5:function f5(a){this.a=a},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(){},
f:function f(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
w:function w(){},
a_:function a_(a){this.a=a},
ht:function ht(a){this.a=a},
hs:function hs(a){this.a=a},
dV:function dV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
f3:function f3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
ef:function ef(a){this.$ti=a},
ct:function ct(a){this.$ti=a},
cQ:function cQ(){},
bY:function bY(a){this.$ti=a},
pm(a){return 8},
pn(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dM:function dM(){},
mL(){throw A.a(A.O("Cannot modify an unmodifiable Map"))},
aT:function aT(){},
nG(a){return a},
nP(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a_("")
o=a+"("
p.a=o
n=A.u(b)
m=n.i("bV<1>")
l=new A.bV(b,0,s,m)
l.eJ(b,0,s,n.c)
m=o+new A.J(l,m.i("d(z.E)").a(new A.iC()),m.i("J<z.E,d>")).R(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.W(p.n(0)))}},
fz:function fz(a){this.a=a},
fA:function fA(){},
fB:function fB(){},
iC:function iC(){},
cs:function cs(){},
eB(a,b){var s,r,q,p,o,n,m=b.eu(a)
b.b5(a)
if(m!=null)a=B.a.D(a,m.length)
s=t.s
r=A.c([],s)
q=A.c([],s)
s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
p=b.aX(a.charCodeAt(0))}else p=!1
if(p){if(0>=s)return A.b(a,0)
B.b.t(q,a[0])
o=1}else{B.b.t(q,"")
o=0}for(n=o;n<s;++n)if(b.aX(a.charCodeAt(n))){B.b.t(r,B.a.v(a,o,n))
B.b.t(q,a[n])
o=n+1}if(o<s){B.b.t(r,B.a.D(a,o))
B.b.t(q,"")}return new A.hc(b,m,r,q)},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
mD(a){return new A.eC(a)},
eC:function eC(a){this.a=a},
px(){var s,r,q,p,o,n,m,l,k=null
if(A.ll().gal()!=="file")return $.e4()
if(!B.a.aL(A.ll().gav(),"/"))return $.e4()
s=A.nk(k,0,0)
r=A.nh(k,0,0,!1)
q=A.nj(k,0,0,k)
p=A.ng(k,0,0)
o=A.i1(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.ni("a/b",0,3,k,"",m)
if(n&&!B.a.u(l,"/"))l=A.lA(l,m)
else l=A.c9(l)
if(A.dW("",s,n&&B.a.u(l,"//")?"":r,o,l,q,p).d4()==="a\\b")return $.fw()
return $.or()},
ho:function ho(){},
eE:function eE(a,b,c){this.d=a
this.e=b
this.f=c},
eV:function eV(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
eX:function eX(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
pt(a,b){var s=A.c([0],t.Z)
s=new A.hm(b,s,new Uint32Array(a.length))
s.eI(new A.aO(a),b)
return s},
Z(a,b){if(b<0)A.E(A.a8("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.E(A.a8("Offset "+b+u.s+a.gl(0)+"."))
return new A.cq(a,b)},
a3(a,b,c){if(c<b)A.E(A.W("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)A.E(A.a8("End "+c+u.s+a.gl(0)+"."))
else if(b<0)A.E(A.a8("Start may not be negative, was "+b+"."))
return new A.bp(a,b,c)},
hm:function hm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cq:function cq(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
p6(a,b){var s=A.p7(A.c([A.pT(a,!0)],t.J)),r=new A.fW(b).$0(),q=B.c.n(B.b.gK(s).b+1),p=A.p8(s)?0:3,o=A.u(s)
return new A.fC(s,r,null,1+Math.max(q.length,p),new A.J(s,o.i("h(1)").a(new A.fE()),o.i("J<1,h>")).hr(0,B.aJ),!A.t7(new A.J(s,o.i("w?(1)").a(new A.fF()),o.i("J<1,w?>"))),new A.a_(""))},
p8(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.p(r.c,q.c))return!1}return!0},
p7(a){var s,r,q=A.rX(a,new A.fH(),t.C,t.K)
for(s=A.j(q),r=new A.aJ(q,q.r,q.e,s.i("aJ<2>"));r.k();)J.oW(r.d,new A.fI())
s=s.i("V<1,2>")
r=s.i("aH<f.E,aM>")
s=A.o(new A.aH(new A.V(q,s),s.i("f<aM>(f.E)").a(new A.fJ()),r),r.i("f.E"))
return s},
pT(a,b){var s=new A.hQ(a).$0()
return new A.aj(s,!0,null)},
pV(a){var s,r,q,p,o,n,m=a.gak()
if(!B.a.p(m,"\r\n"))return a
s=a.gH().gL()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gC()
p=a.gY()
o=a.gH().ga8()
p=A.bT(s,a.gH().gab(),o,p)
o=A.K(m,"\r\n","\n")
n=a.gaB()
return A.hn(r,p,o,A.K(n,"\r\n","\n"))},
pW(a){var s,r,q,p,o,n,m
if(!B.a.aL(a.gaB(),"\n"))return a
if(B.a.aL(a.gak(),"\n\n"))return a
s=B.a.v(a.gaB(),0,a.gaB().length-1)
r=a.gak()
q=a.gC()
p=a.gH()
if(B.a.aL(a.gak(),"\n")){o=A.jl(a.gaB(),a.gak(),a.gC().gab())
o.toString
o=o+a.gC().gab()+a.gl(a)===a.gaB().length}else o=!1
if(o){r=B.a.v(a.gak(),0,a.gak().length-1)
if(r.length===0)p=q
else{o=a.gH().gL()
n=a.gY()
m=a.gH().ga8()
p=A.bT(o-1,A.n0(s),m-1,n)
q=a.gC().gL()===a.gH().gL()?p:a.gC()}}return A.hn(q,p,r,s)},
pU(a){var s,r,q,p,o
if(a.gH().gab()!==0)return a
if(a.gH().ga8()===a.gC().ga8())return a
s=B.a.v(a.gak(),0,a.gak().length-1)
r=a.gC()
q=a.gH().gL()
p=a.gY()
o=a.gH().ga8()
p=A.bT(q-1,s.length-B.a.bk(s,"\n")-1,o-1,p)
return A.hn(r,p,s,B.a.aL(a.gaB(),"\n")?B.a.v(a.gaB(),0,a.gaB().length-1):a.gaB())},
n0(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.a.ae(a,"\n",r-2)-1
else return r-B.a.bk(a,"\n")-1}},
fC:function fC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fW:function fW(a){this.a=a},
fE:function fE(){},
fD:function fD(){},
fF:function fF(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fG:function fG(a){this.a=a},
fX:function fX(){},
fK:function fK(a){this.a=a},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(a){this.a=a},
fU:function fU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT(a,b,c,d){var s=c==null,r=s?0:c,q=b==null,p=q?a:b
if(a<0)A.E(A.a8("Offset may not be negative, was "+a+"."))
else if(!s&&c<0)A.E(A.a8("Line may not be negative, was "+A.m(c)+"."))
else if(!q&&b<0)A.E(A.a8("Column may not be negative, was "+A.m(b)+"."))
return new A.bS(d,a,r,p)},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(){},
lf(a,b,c){var s=new A.dq(a,b,c)
s.d7(a,b,c)
return s},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(){},
eL:function eL(){},
cC:function cC(){},
hn(a,b,c,d){var s=new A.bl(d,a,b,c)
s.d7(a,b,c)
if(!B.a.p(d,c))A.E(A.W('The context line "'+d+'" must contain "'+c+'".'))
if(A.jl(d,c,a.gab())==null)A.E(A.W('The span text "'+c+'" must start at column '+(a.gab()+1)+' in a line within "'+d+'".'))
return s},
bl:function bl(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eg:function eg(a,b,c){var _=this
_.at=_.as=0
_.f=a
_.a=b
_.b=c
_.c=0
_.e=_.d=null},
as:function as(a){this.b=a},
pu(a,b,c){return new A.ds(c,a,b)},
ds:function ds(a,b,c){this.c=a
this.a=b
this.b=c},
eM:function eM(){},
eO:function eO(){},
rE(a,b){return new A.hO([],[]).cP(a,b)},
rF(a){return new A.j7(new A.cI(t.cR)).$1(a)},
hO:function hO(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
mt(a,b,c,d){return new A.d4(a,d,c==null?A.c([],t.r):c,b)},
ab:function ab(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cn:function cn(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
dY:function dY(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b){this.a=a
this.b=b},
mC(a,b,c,d){var s=A.c([],t.aq),r=t.N,q=A.aL(A.pm(null),null,!1,t.fs),p=A.c([B.cO],t.a2),o=A.c([null],t.g0),n=A.pt(a,d),m=new A.hd(new A.hi(!1,b,new A.eg(n,null,a),new A.dk(q,0,0,t.co),p,o),s,B.aF,A.n(r,t.h7))
return new A.h8(m,A.n(r,t.T),A.az(r),m.aY().gA())},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
a4:function a4(a){this.a=a},
hi:function hi(a,b,c,d,e,f){var _=this
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
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dF:function dF(a,b){this.a=a
this.b=b},
bw:function bw(a){this.a=a},
d_:function d_(a){this.a=a},
X:function X(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b){this.a=a
this.b=b},
kX:function kX(){},
dC:function dC(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=b},
I(a,b){return new A.bZ(null,a,b)},
bZ:function bZ(a,b,c){this.c=a
this.a=b
this.b=c},
R:function R(){},
c0:function c0(a,b,c){this.b=a
this.c=b
this.a=c},
hG:function hG(){},
c_:function c_(a,b,c){this.b=a
this.c=b
this.a=c},
ar:function ar(a,b,c){this.b=a
this.c=b
this.a=c},
ff:function ff(){},
fi:function fi(){},
fj:function fj(){},
Q(a){var s=new A.hx(A.c([],t.c0),a,A.fr(a,null,!1,null).a,A.az(t.T))
s.dn()
return s},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
hB:function hB(a){this.a=a},
hy:function hy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o1(a,b){return A.h5(A.rP(),A.jk(),a,b)},
bq(a,b){var s=t.T
if(s.b(a))a=a.ga6()
if(s.b(b))b=b.ga6()
s=t.f
if(s.b(a)&&s.b(b))return A.tg(a,b)
s=t.j
if(s.b(a)&&s.b(b))return A.tb(a,b)
return J.p(a,b)},
tb(a,b){var s,r,q
if(J.a6(a)!==J.a6(b))return!1
s=t.h
if(s.b(a))a=a.gM()
if(s.b(b))b=b.gM()
for(s=J.F(a),r=J.F(b),q=0;q<s.gl(a);++q)if(!A.bq(s.h(a,q),r.h(b,q)))return!1
return!0},
tg(a,b){var s={}
s.a=a
s.b=b
if(a.gl(a)!==b.gl(b))return!1
return a.gG().aW(0,new A.jF(s))},
rG(a){var s
if(t.f.b(a)){s=t.z
return B.a9.bb(a.gG().ad(0,A.jk(),s))^B.a9.bb(a.gag().ad(0,A.jk(),s))}else if(t.R.b(a))return B.aL.bb(J.aX(a,A.jk(),t.z))
else if(t.m.b(a))return J.ae(a.ga6())
return J.ae(a)},
o5(a,b){return t.T.a(a.gM().gG().c3(0,new A.jm(b)))},
o8(a,b){var s,r,q,p,o,n,m,l
for(s=A.p9(a.gM().gN(),0,t.x),r=s.a,r=r.gq(r),q=s.b,s=new A.bK(r,q,A.j(s).i("bK<1>"));s.k();){p=s.c
p=p>=0?new A.b8(q+p,r.gm()):A.E(A.a2())
o=p.a
n=p.b
m=n.a
l=n.b
if(A.bq(m,b))return new A.dO(o,t.T.a(m),l)}throw A.a(A.I(A.m(b)+" not found in map",a.gA()))},
rV(a,b){return a.gG().c3(0,new A.jn(b))},
lN(a,b){var s=a.gG().aP(0,new A.j6(b))
return!s.gJ(s)},
jF:function jF(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
j6:function j6(a){this.a=a},
hg(a,b,c){return new A.dj(a,b,c,!0,b,"path",null)},
fx(a,b){return new A.e8("Encountered an alias node along "+A.m(a)+'! Alias nodes are nodes that refer to a previously serialized nodes, and are denoted by either the "*" or the "&" indicators in the original YAML. As the resulting behavior of mutations on these nodes is not well-defined, the operation will not be supported by this library.\n\n'+b.gA().ee("The alias was first defined here."),null,null)},
o_(a,b,c){var s=A.K(b,"\n","\n> ")
return new A.fd("(package:yaml_edit) "+a+"\n\n# YAML before edit:\n> "+s+"\n\n# YAML after edit:\n> "+A.K(c,"\n","\n> ")+"\n\nPlease file an issue at:\nhttps://github.com/dart-lang/yaml_edit/issues/new?labels=bug\n")},
dj:function dj(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.b=e
_.c=f
_.d=g},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.a=a},
u0(a,b,c,d){var s,r,q,p,o,n,m,l
A.cA(c,0,b.gl(b)-1,null)
s=J.k(b.gM(),c)
r=s.gA().gC().gL()
q=a.b
if(b.ga3()===B.l){p=A.lQ(q,b)+A.lP(a)
o=A.e_(q)
n=A.e3(A.ap(d,B.j,B.h),p,o)
if(!(t.j.b(d)&&d.gl(d)!==0))m=t.f.b(d)&&d.gG().gaN(0)
else m=!0
if(m)n=B.a.D(n,p)
else if(A.hH(s)===B.l)n+=o
l=A.cd(s)
if(l<=r){++r
n=" "+n
l=r}return A.aB(r,l-r,n)}else{n=A.br(d)
m=s.gA()
return A.aB(r,m.gl(m),n)}},
tC(a,b,c){var s,r,q,p,o,n=J.k(b.gM(),c)
if(b.ga3()===B.f){A.cA(c,0,b.gl(b)-1,null)
s=n.gA()
r=a.b
q=s.gC().gL()
p=s.gH().gL()
o=q-1
if(c===0){q=B.a.ae(r,"[",o)+1
p=c===b.gl(b)-1?B.a.af(r,"]",p):B.a.af(r,",",p)+1}else q=B.a.ae(r,",",o)
return A.aB(q,p-q,"")}else return A.r3(a,b,n,c)},
r3(a,b,c,d){var s,r,q,p,o,n,m,l=b.gl(b),k=l-1
A.cA(d,0,k,null)
s=a.b
r=c.gA()
q=r.gl(r)===0
p=A.cd(c)
o=A.lQ(s,b)
n=B.a.ae(s,"-",q?r.gC().gL():r.gC().gL()-1)
m=q?p+1:p
return A.oi(s,b,o,d===0,d>=k,l===1,A.e_(s),new A.iu(b,d,s),new A.cM(m,n))},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
u1(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(!A.lN(b,c)){s=A.ap(c,B.j,B.h)
if(b.ga3()===B.f)return A.qr(a,b,s,a0)
else{r=a.b
q=A.fq(r,b)
p=A.lP(a)
o=A.br(A.ap(s,B.j,B.h))
n=A.e_(r)
m=B.a.ah(" ",A.fq(r,b))
l=b.gA().gH().gL()
k=A.o6(b,o)
if(b.gG().gaN(0)){j=b.gG()
if(k===j.gl(j)){j=b.gM().gag()
i=B.a.af(r,"\n",A.cd(j.gK(j)))
if(i!==-1)l=i+1
else m=n+m}else{j=b.gM().gG().b_(0)
if(!(k>=0&&k<j.length))return A.b(j,k)
l=B.a.ae(r,"\n",t.T.a(j[k]).gA().gC().gL())+1}}h=A.e3(a0,q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hH(a0)
q=q!==B.f&&!A.lU(a0)}else q=!1
return A.aB(l,0,q?m+(o+":"+n+h+n):m+(o+": "+h+n))}}else if(b.ga3()===B.f){g=b.gM().h(0,c).gA()
h=A.br(a0)
return A.aB(g.gC().gL(),g.gl(g),h)}else{r=a.b
n=A.e_(r)
q=A.fq(r,b)
p=A.lP(a)
s=A.o5(b,c)
f=A.e3(A.ap(a0,B.j,B.h),q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hH(a0)
q=q!==B.f&&!A.lU(a0)}else q=!1
if(q)f=n+f
if(!B.a.u(f,n))f=" "+f
e=s.gA().gH().gL()+1
q=b.gM().h(0,c)
q.toString
d=A.cd(q)
return A.aB(e,(d<e?e:d)-e,f)}},
tD(a,b,c){var s,r,q,p,o,n,m
if(b.ga3()===B.f){s=A.o8(b,c)
r=s.b
q=r.gA().gC().gL()
p=s.c.gA().gH().gL()
o=a.b
n=b.gG()
m=q-1
if(A.bq(r,n.gU(n))){q=B.a.ae(o,"{",m)+1
n=b.gG()
p=A.bq(r,n.gK(n))?B.a.af(o,"}",p):B.a.af(o,",",p)+1}else q=B.a.ae(o,",",m)
return A.aB(q,p-q,"")}else return A.r4(a,b,c)},
qr(a,b,c,d){var s,r=A.br(c),q=A.br(d),p=b.gG()
if(p.gJ(p))return A.aB(b.gA().gH().gL()-1,0,r+": "+q)
s=A.o6(b,r)
p=b.gG()
if(s===p.gl(p))return A.aB(b.gA().gH().gL()-1,0,", "+r+": "+q)
p=b.gM().gG().b_(0)
if(!(s>=0&&s<p.length))return A.b(p,s)
return A.aB(t.T.a(p[s]).gA().gC().gL(),0,r+": "+q+", ")},
r4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=A.o8(b,c)
r=i.a=s.a
q=s.c
p=a.b
o=b.gG()
n=o.gl(o)
m=s.b.gA()
o=A.fq(p,b)
l=r===0
k=l?b.gA().gC().gL():m.gC().gL()
j=q.gA()
j=j.gl(j)===0?m.gH().gL()+2:A.cd(q)
return A.oi(p,b,o,l,r>=n-1,n===1,A.e_(p),new A.iv(i,b,p),new A.cM(j,k))},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
aB(a,b,c){A.ag(a,null)
A.ag(b,null)
return new A.dp(a,b,c)},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
lC(a){var s,r=new A.aO(a)
for(s=$.mg(),s=new A.an(s,s.r,s.e,A.j(s).i("an<1>"));s.k();)if(r.p(r,s.d))return!0
return!1},
cb(a){var s,r,q,p,o=new A.a_("")
for(s=new A.aO(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E");s.k();){q=s.d
if(q==null)q=r.a(q)
p=$.oL()
if(p.h(0,q)!=null){q=A.m(p.h(0,q))
o.a+=q}else{q=A.B(q)
o.a+=q}}return'"'+o.n(0)+'"'},
nO(a){if(A.lC(a)||B.a.p(a,"\n"))return null
return"'"+A.K(a,"'","''")+"'"},
rd(a,b,c){var s,r,q,p,o=a.length
if(o===0||B.a.O(a).length!==o)return null
if(A.lC(a))return null
s=B.a.ah(" ",b)
r=B.a.hy(a)
q=B.a.D(a,r.length)
o=c+s
p=A.c(A.K(r,"\n",o).split(c),t.s)
r=A.pc(p,new A.iB(p,s,c),t.N)
return">-\n"+s+r+A.K(q,"\n",o)},
re(a,b,c){var s,r=a.length
if(r===0||B.a.O(a).length!==r)return null
if(A.lC(a))return null
s=B.a.ah(" ",b)
return"|-\n"+s+A.K(a,"\n",c+s)},
rj(a){var s,r=a.ga6(),q=a.ga3()
if(typeof r!="string")return J.am(r)
switch(q){case B.O:return A.cb(r)
case B.w:s=A.nO(r)
return s==null?A.cb(r):s
default:s=A.lT(r)?null:r
return s==null?A.cb(r):s}},
ri(a,b,c){var s,r=a.ga6(),q=a.ga3()
A.lJ(r)
if(typeof r!="string")return J.am(r)
switch(q){case B.i:s=A.lT(r)?null:r
return s==null?A.cb(r):s
case B.w:s=A.nO(r)
return s==null?A.cb(r):s
case B.P:s=A.rd(r,b,c)
return s==null?A.cb(r):s
case B.Q:s=A.re(r,b,c)
return s==null?A.cb(r):s
default:s=A.lT(r)?null:r
return s==null?A.cb(r):s}},
br(a){t.T.a(a)
if(t.h.b(a))return"["+J.aX(a.gM(),A.tT(),t.N).R(0,", ")+"]"
else if(t.S.b(a))return"{"+a.gM().gN().ad(0,new A.kW(),t.N).R(0,", ")+"}"
return A.rj(t.m.a(a))},
e3(a,b,c){var s,r
if(!A.t8(a))return A.br(a)
s=b+2
if(t.h.b(a)){if(a.gl(a)===0)return B.a.ah(" ",b)+"[]"
return J.aX(a.gM(),new A.kU(s,c,b),t.N).R(0,c)}else if(t.S.b(a)){r=a.gG()
if(r.gJ(r))return B.a.ah(" ",b)+"{}"
return a.gM().gN().ad(0,new A.kV(b,s,c),t.N).R(0,c)}return A.ri(t.m.a(a),s,c)},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function kW(){},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
on(a,b){var s,r=A.u2(),q=$.kZ()
try{$.op=r
s=a.$0()
return s}finally{$.op=q}},
nC(a,b){},
lT(a){var s,r,q
try{s=A.on(new A.jC(a),t.T)
if(!J.p(s.ga6(),a))return!0
r=B.a.p(a,A.H("\\{|\\[|\\]|\\}|,",!0))
return r}catch(q){return!0}},
lJ(a){if(typeof a=="number"||typeof a=="string"||A.fm(a)||a==null)return
throw A.a(A.mj(a,"value","Not a valid scalar type!"))},
t8(a){var s
if(t.m.b(a))if(a.ga3()===B.Q||a.ga3()===B.P||a.ga3()===B.h)return!0
if(t.h.b(a))s=a.ga3()===B.l||a.ga3()===B.j
else s=!1
if(s)return!0
if(t.S.b(a))s=a.ga3()===B.l||a.ga3()===B.j
else s=!1
if(s)return!0
return!1},
cd(a){var s
if(t.h.b(a))if(a.ga3()===B.f)return a.gA().gH().gL()
else return A.cd(J.l1(a.gM()))
else if(t.S.b(a))if(a.ga3()===B.f)return a.gA().gH().gL()
else{s=a.gM().gag()
return A.cd(s.gK(s))}return a.gA().gH().gL()},
ta(a,b){return A.b9(a)&&a>=0&&a<b},
lU(a){var s
if(t.f.b(a)){s=a.gG()
return s.gJ(s)}if(t.j.b(a))return a.gl(a)===0
return!1},
o6(a,b){var s,r,q,p,o,n=a.gM().gG().ad(0,new A.jo(),t.N).b_(0)
for(s=n.length,r=1;r<s;++r){q=n[r]
p=n[r-1]
if(q===p)q=0
else q=q<p?-1:1
if(q<0){s=a.gG()
return s.gl(s)}}o=B.b.bc(n,new A.jp(b))
if(o!==-1)return o
s=a.gG()
return s.gl(s)},
lP(a){var s,r,q,p,o,n,m=a.cI([],null),l=t.S
if(l.b(m)&&m.ga3()===B.l)s=m.gM().gag()
else s=t.h.b(m)&&m.ga3()===B.l?m.gM():null
r=2
if(s!=null)for(q=J.C(s),p=t.h;q.k();){o=q.gm()
if(p.b(o))n=A.lQ(a.b,o)
else n=l.b(o)?A.fq(a.b,o):0
if(n!==0)r=n}return r},
lQ(a,b){var s
if(b.ga3()===B.f)return 0
if(b.gl(b)===0)throw A.a(A.O("Unable to get indentation for empty block list"))
s=B.a.ae(a,"-",J.l1(b.gM()).gA().gC().gL()-1)
if(s===0)return s
return s-B.a.ae(a,"\n",s-1)-1},
fq(a,b){var s,r,q,p
if(b.ga3()===B.f)return 0
s=b.gG()
if(s.gJ(s))throw A.a(A.O("Unable to get indentation for empty block map"))
s=b.gM().gG()
r=t.T.a(s.gK(s)).gA().gC().gL()
q=B.a.ae(a,"\n",r)
p=B.a.ae(a,"?",r)
if(p===-1){if(q===-1)return r
return r-q-1}if(q===-1)return p
if(p>q)return p-q-1
return r-q-1},
e_(a){var s,r,q,p,o
for(s=a.length,r=-1,q=0,p=0;r=B.a.af(a,"\n",r+1),r!==-1;){if(r!==0){o=r-1
if(!(o>=0&&o<s))return A.b(a,o)
o=a[o]==="\r"}else o=!1
if(o)++p
else ++q}return p>q?"\r\n":"\n"},
t1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
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
break A}l=B.a.af(a,A.H("[^ ]",!0),m)
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
case 3:j=B.a.af(a,$.me(),r)
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
t0(a,b){var s,r,q=Math.max(0,B.a.ae(a,$.me(),Math.max(0,b-1)))
if(q>>>0!==q||q>=a.length)return A.b(a,q)
s=a[q]
A:{if("\r"===s||"\n"===s){r=new A.c7(-1,q)
break A}if("-"===s||"?"===s||":"===s){r=new A.c7(q,-1)
break A}r=B.cN
break A}return r},
oi(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=i.b,l=a.length,k=Math.min(A.t1(a,c,B.a.af(a,"\n",i.a-1))+1,l)
if(f){if(k<l||B.a.aL(a,"\n"))k-=g==="\r\n"?2:1
l=t.h.b(b)?"[]":"{}"
return A.aB(m,k-m,l)}else if(e){m=B.a.ae(a,"\n",m)+1
return A.aB(m,Math.max(B.a.ae(a,"\n",b.gA().gH().gL())+1,k)-m,"")}s=!1
if(m!==0)if(d){r=A.t0(a,m)
q=r.a
s=q!==-1
m=s?q+2:r.b+1}else m=B.a.ae(a,"\n",m)+1
p=h.$0()
o=p.a
n=p.b
return A.aB(m,(s&&o===k-1?k+n:k)-m,"")},
hH(a){if(t.S.b(a))return a.ga3()
if(t.h.b(a))return a.ga3()
return null},
jC:function jC(a){this.a=a},
jo:function jo(){},
jp:function jp(a){this.a=a},
m5(a,b){var s=t.z,r=A.o1(s,s)
r.a2(0,a.gM())
b.$1(r)
return t.S.a(A.ap(r,B.j,B.h))},
ap(a,b,c){var s,r,q
if(t.m.b(a)){A.lJ(a.ga6())
return a}else if(t.h.b(a)){for(s=J.C(a.gM());s.k();)A.ap(s.gm(),B.j,B.h)
return a}else if(t.S.b(a)){for(s=a.gM().gN(),s=s.gq(s);s.k();){r=s.gm()
A.ap(r.a,B.j,B.h)
A.ap(r.b,B.j,B.h)}return a}else if(t.f.b(a))return A.pF(a,b,c)
else if(t.j.b(a))return A.pE(a,b,c)
else{A.lJ(a)
q=A.bT(0,null,null,null)
return new A.f_(c,A.lf(q,q,""),a)}},
pF(a,b,c){var s,r,q,p=A.o1(t.z,t.T)
for(s=a.gN(),s=s.gq(s);s.k();){r=s.gm()
p.j(0,A.ap(r.a,b,c),A.ap(r.b,b,c))}q=A.bT(0,null,null,null)
s=A.lf(q,q,"")
return new A.eZ(p.a===0?B.f:b,p,s)},
pE(a,b,c){var s,r,q=J.aX(a,new A.hE(b,c),t.T)
q=A.o(q,q.$ti.i("z.E"))
s=A.bT(0,null,null,null)
r=A.lf(s,s,"")
return new A.eY(q.length===0?B.f:b,q,r)},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(){},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b){this.a=a
this.b=b},
fe:function fe(){},
fg:function fg(){},
fh:function fh(){},
nS(a){var s,r,q,p,o,n=t.g.a(t.f.a(A.y(a)).h(0,"rules"))
if(n==null)n=[]
s=t.N
r=A.N(n,!0,s)
for(n=a.split("\n"),q=n.length,p=0;p<q;++p){o=n[p]
if(!B.a.u(o,"# Mclash OpenWrt access-rules: "))continue
for(n=A.N(t.j.a(B.d.aa(B.a.D(o,31),null)),!0,s),s=n.length,p=0;p<s;++p)B.b.I(r,n[p])
break}return r},
rk(a){var s,r,q,p,o,n,m,l,k,j
if(!B.a.p(a,"-")){if(B.a.p(a,"/"))s=a
else{s=B.a.p(a,":")?128:32
s=a+"/"+s}return A.c([s],t.s)}r=new A.iK()
q=new A.iJ()
p=a.split("-")
s=p.length
if(0>=s)return A.b(p,0)
o=r.$1(p[0])
if(1>=s)return A.b(p,1)
n=r.$1(p[1])
m=A.c([],t.s)
while(o<=n){s=n-o+1
l=1
k=32
for(;;){if(k>0){j=l*2
j=B.c.aF(o,j)===0&&j<=s}else j=!1
if(!j)break
l*=2;--k}B.b.t(m,A.m(q.$1(o))+"/"+k)
o+=l}return m},
iK:function iK(){},
iL:function iL(){},
iJ:function iJ(){},
rs(a){var s,r,q,p,o,n,m,l,k=A.y(a),j=A.az(t.N)
if(t.S.b(k))for(s=k.gG(),s=s.gq(s);s.k();){r=s.gm()
if(B.L.b4(r))j.t(0,A.e(r))}j.a2(0,B.L.gag())
s=t.s
q=A.c([],s)
for(j=A.lt(j,j.r,j.$ti.c),p=j.$ti.c;j.k();){o=j.d
if(o==null)o=p.a(o)
for(n=B.L.gN(),n=n.gq(n);n.k();){m=n.gm()
if(m.b===o){l=A.c([],s)
m=m.a
if(m==="rules")l.push("ruleProviders")
l.push(m)
B.b.a2(q,l)}}}return q},
j4(a){var s=t.S.a(A.y(a)),r=A.o(B.cI,t.N),q=t.g,p=q.a(s.h(0,"proxy-groups"))
p=J.C(p==null?[]:p)
while(p.k())r.push(A.e(J.k(p.gm(),"name")))
q=q.a(s.h(0,"proxies"))
q=J.C(q==null?[]:q)
while(q.k())r.push(A.e(J.k(q.gm(),"name")))
return r},
nY(a){var s=t.g.a(t.S.a(A.y(a)).h(0,"rules"))
if(s==null)s=[]
return A.N(s,!0,t.N)},
lE(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gq(r);r.k();){q=r.gm()
s.j(0,A.e(q.a),A.lE(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.C(a);r.k();)s.push(A.lE(r.gm()))
return s}return a},
fp(a){var s,r=A.c([],t.t),q=t.g.a(t.S.a(A.y(a)).h(0,"proxy-groups"))
q=J.C(q==null?[]:q)
s=t.P
while(q.k())r.push(s.a(A.lE(q.gm())))
return r},
tF(a,b){var s,r,q,p,o,n,m=A.fp(a),l=A.n(t.N,t.P)
for(s=m.length,r=0;q=m.length,r<q;m.length===s||(0,A.Y)(m),++r){p=m[r]
l.j(0,A.e(p.h(0,"name")),p)}if(b.length!==q||A.aA(b,A.u(b).c).a!==b.length||B.b.P(b,new A.kt(l)))throw A.a(B.cx)
s=A.Q(a)
q=A.c([],t.t)
for(o=b.length,r=0;r<b.length;b.length===o||(0,A.Y)(b),++r){n=l.h(0,b[r])
n.toString
q.push(n)}s.F(["proxy-groups"],q)
return s.b},
ok(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.O(a[r]))}else s=!1
if(!s)break;--r}return r},
m_(a,b,c){var s,r,q=A.c(a.split(","),t.s)
if(B.a.O(B.b.gU(q))==="SUB-RULE")return a
s=A.ok(q)
if(s>0){if(!(s<q.length))return A.b(q,s)
r=B.a.O(q[s])===b}else r=!1
if(r)B.b.j(q,s,c)
return B.b.R(q,",")},
u_(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=t.s,q=0;q<b.length;b.length===s||(0,A.Y)(b),++q){p=A.c(b[q].split(","),r)
if(p.length<2||B.b.P(p,new A.kM()))throw A.a(B.bd)
if(B.b.gU(p)!=="SUB-RULE"){o=A.j4(a)
n=A.ok(p)
if(!(n>=0&&n<p.length))return A.b(p,n)
n=!B.b.p(o,B.a.O(p[n]))
o=n}else o=!1
if(o)throw A.a(B.bJ)}m=A.Q(a)
m.F(["rules"],b)
return m.b},
rh(a){var s,r,q,p,o,n,m,l,k,j="dialer-proxy",i=t.S.a(A.y(a)),h=t.N,g=A.n(h,t.a)
for(s=A.fp(a),r=s.length,q=t.g,p=0;p<s.length;s.length===r||(0,A.Y)(s),++p){o=s[p]
n=A.e(o.h(0,"name"))
m=q.a(o.h(0,"proxies"))
g.j(0,n,A.N(m==null?[]:m,!0,h))}s=q.a(i.h(0,"proxies"))
s=J.C(s==null?[]:s)
r=t.s
while(s.k()){l=s.gm()
q=J.F(l)
if(typeof q.h(l,j)=="string")g.j(0,A.e(q.h(l,"name")),A.c([A.e(q.h(l,j))],r))}k=new A.iF(A.az(h),A.az(h),g)
for(h=new A.an(g,g.r,g.e,g.$ti.i("an<1>"));h.k();)k.$1(h.d)},
tY(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7=B.a.O(A.e(a9.h(0,"name")))
if((b2==="\ud83d\ude80 Domestic"||b2==="\ud83c\udf0d Foreign")&&a7!==b2)throw A.a(B.bl)
if(a7.length===0||B.a.p(a7,",")||B.a.p(a7,"\n"))throw A.a(B.b6)
if(A.bb(a8).E(b2))throw A.a(B.an)
s=A.j4(a8)
r=A.u(s)
if(new A.r(s,r.i("l(1)").a(new A.kD(b2)),r.i("r<1>")).p(0,a7)||a7==="GLOBAL")throw A.a(B.b_)
q=A.fp(a8)
p=B.b.bc(q,new A.kE(b2))
if(p>=0){if(!(p<q.length))return A.b(q,p)
s=t.g.a(q[p].h(0,a6))
if(s==null)s=[]
o=A.N(s,!0,t.N)}else o=A.ch(a8)
if(o.length===0)B.b.t(o,"DIRECT")
s=t.j
if(s.b(a9.h(0,a6))){n=A.N(s.a(a9.h(0,a6)),!0,t.N)
if(n.length!==o.length||new A.de(n,A.u(n).i("de<1>")).gN().P(0,new A.kF(o)))throw A.a(B.c_)}if(B.b.p(o,a7)||B.b.p(o,b2)||B.b.P(o,new A.kG(a8)))throw A.a(B.bi)
r=b1!=null
if(r){B.b.aw(o,new A.kH())
if(b1)B.b.bh(o,0,"DIRECT")
if(o.length===0&&b0==null)throw A.a(B.cb)}m=t.N
l=t.z
k=A.h7(a9,m,l)
k.j(0,"name",a7)
k.j(0,a6,o)
j=p<0
if(j)B.b.t(q,k)
else B.b.j(q,p,k)
i=A.Q(a8)
k=b2!=null
if(k&&b2!==a7){for(h=q.length,g=t.R,f=0;f<q.length;q.length===h||(0,A.Y)(q),++f){e=q[f]
if(s.b(e.h(0,a6))){d=[]
for(c=J.C(g.a(e.h(0,a6)));c.k();){b=c.gm()
d.push(J.p(b,b2)?a7:b)}e.j(0,a6,d)}}h=t.s
g=A.c([],h)
for(d=A.nY(a8),c=d.length,f=0;f<d.length;d.length===c||(0,A.Y)(d),++f)g.push(A.m_(d[f],b2,a7))
i.F(["rules"],g)
g=t.S
a=t.Y.a(g.a(A.y(a8)).h(0,"sub-rules"))
for(l=(a==null?A.n(l,l):a).gN(),l=l.gq(l);l.k();){d=l.gm()
c=d.a
a0=A.c([],h)
for(d=J.C(s.a(d.b));d.k();)a0.push(A.m_(A.e(d.gm()),b2,a7))
i.F(["sub-rules",c],a0)}a1=t.g.a(g.a(A.y(a8)).h(0,a6))
if(a1==null)a1=[]
for(s=J.F(a1),a2=0;a2<s.gl(a1);++a2)if(J.p(J.k(s.h(a1,a2),"dialer-proxy"),b2))i.F(["proxies",a2,"dialer-proxy"],a7)}i.F(["proxy-groups"],q)
a3=A.fv(a8)
if(k&&b2!==a7&&a3.E(b2)){s=a3.I(0,b2)
s.toString
a3.j(0,a7,s)}if(j)a3.j(0,a7,"")
a4=A.m8(i.b,a3)
a5=A.k_(a8)
if(k&&b2!==a7&&a5.E(b2)){s=a5.I(0,b2)
s.toString
a5.j(0,a7,s)}if(r)a5.j(0,a7,b1)
if(a5.a!==0)a4=A.oo(a4,a5)
if(b0!=null){s=A.h7(A.fv(a4),m,m)
s.j(0,a7,B.a.O(b0))
a4=A.nV(a4,s)}A.rh(a4)
return a4},
rH(a,b){var s,r,q,p,o,n,m,l,k,j
if(b==="\ud83d\ude80 Domestic"||b==="\ud83c\udf0d Foreign")throw A.a(B.bj)
if(A.bb(a).E(b))throw A.a(B.an)
s=t.S.a(A.y(a))
r=A.fp(a)
q=t.Y.a(s.h(0,"sub-rules"))
if(q==null){p=t.z
q=A.n(p,p)}o=!0
if(!B.b.P(r,new A.j8(b))){p=t.g.a(s.h(0,"proxies"))
if(p==null)p=[]
if(!J.oN(p,new A.j9(b))){p=t.N
n=A.o(A.nY(a),p)
for(m=q.gag(),m=m.gq(m),l=t.j;m.k();)B.b.a2(n,A.N(l.a(m.gm()),!0,p))
p=B.b.P(n,new A.ja(b))
o=p}}if(o)throw A.a(B.bL)
k=A.Q(a)
p=A.u(r)
n=p.i("r<1>")
p=A.o(new A.r(r,p.i("l(1)").a(new A.jb(b)),n),n.i("f.E"))
k.F(["proxy-groups"],p)
p=k.b
n=A.fv(a)
n.I(0,b)
j=A.m8(p,n)
if(B.a.p(a,"# Mclash group-direct: ")){p=A.k_(a)
p.I(0,b)
p=A.oo(j,p)}else p=j
return p},
kt:function kt(a){this.a=a},
kM:function kM(){},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(){},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
cV(a,b){var s,r,q,p
if(b>64)throw A.a(B.b4)
if(t.f.b(a)){s=A.n(t.N,t.X)
for(r=a.gN(),r=r.gq(r),q=b+1;r.k();){p=r.gm()
s.j(0,A.m(p.a),A.cV(p.b,q))}return s}if(t.j.b(a)){s=J.aX(a,new A.jX(b),t.X)
s=A.o(s,s.$ti.i("z.E"))
return s}return a},
to(a){var s,r=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.jN()),t.U).R(0,"\n"),q=A.Q("")
q.F([],A.cV(A.y(a),0))
s=r.length===0?"":r+"\n"
return s+q.n(0)},
o9(b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="template",b2="external-controller",b3="name",b4="prefixes"
b6=b6
try{b6=A.lX(b6)
s=t.P.a(B.d.aa(A.lX(b7),b0))
if(typeof J.k(s,b1)=="string")J.e6(s,b1,A.lX(A.e(J.k(s,b1))))
r=null
switch(b5){case"nodeDomains":r=A.tm(b6)
break
case"resolveNodes":o=b6
e=t.f.a(J.k(s,"addresses"))
d=J.k(s,"fakeIpRanges")
if(d==null)d=[]
r=A.tI(o,e,A.N(t.R.a(d),!0,t.N))
break
case"nodeSource":q=t.f.a(A.y(b6))
o=A.Q("")
e=J.k(q,"proxies")
o.F([],A.a7(["proxies",A.cV(e==null?[]:e,0)],t.N,t.X))
r=o.b
break
case"formatNodes":r=b6
break
case"summary":e=t.f
p=e.a(A.y(b6))
d=A.oe(b6)
c=A.Q("")
b=t.N
o=A.n(b,t.X)
if(e.b(J.k(p,"dns")))for(e=e.a(J.k(p,"dns")).gN(),e=e.gq(e),a=t.s;e.k();){n=e.gm()
if(!B.b.p(A.c(["enable","listen","ipv6"],a),n.a))J.e6(o,A.m(n.a),A.cV(n.b,0))}c.F([],o)
o=c.b
e=J.k(p,b2)
if(e==null)e=""
c=J.k(p,"secret")
if(c==null)c=""
a=A.tn(b6)
a0=A.m0(b6)
a1=A.ch(b6)
a2=A.oh(b6)
a3=A.ft(b6)
a4=A.tk(b6)
a5=A.fp(b6)
a6=A.bb(b6)
a7=A.j(a6).i("ai<1>")
a6=A.o(new A.ai(a6,a7),a7.i("f.E"))
r=A.a7(["network",d,"dnsYaml",o,"controller",e,"secret",c,"fakeIpRanges",a,"manualNodes",a0,"nodes",a1,"host",a2,"chains",a3,"nextChainId",a4,"groups",a5,"managedGroups",a6,"filters",A.fv(b6),"direct",A.k_(b6),"providers",A.lM(b6),"rules",A.nS(b6),"policies",A.j4(b6),"actions",A.rs(b6)],b,t.z)
break
case"controller":r=A.rm(b6,s)
break
case"network":r=A.nU(b6,s)
break
case"dns":m=A.y(A.e(J.k(s,"yaml")))
o=t.f
if(!o.b(m))throw A.a(B.by)
l=o.a(A.y(b6)).h(0,"dns")
k=A.af(o.a(A.cV(m,0)),t.N,t.z)
for(e=["enable","listen","ipv6"],a8=0;a8<3;++a8){j=e[a8]
J.oU(k,j)
if(o.b(l)&&l.E(j))J.e6(k,j,A.cV(l.h(0,j),0))}i=A.Q(b6)
i.F(["dns"],k)
r=i.b
break
case"addNode":r=A.rl(b6,A.e(J.k(s,"link")))
break
case"deleteNode":r=A.rJ(b6,A.e(J.k(s,b3)))
break
case"reorderNodes":r=A.tG(b6,A.N(t.R.a(J.k(s,"names")),!0,t.N))
break
case"host":r=A.rL(b6,A.e(J.k(s,"host")))
break
case"chain":o=t.R
e=t.N
r=A.tM(b6,A.e(J.k(s,"id")),A.N(o.a(J.k(s,"selected")),!0,e),A.il(J.k(s,"prepend")),A.N(o.a(J.k(s,"targets")),!0,e))
break
case"group":o=b6
e=A.af(t.f.a(J.k(s,"group")),t.N,t.z)
d=A.ca(J.k(s,"oldName"))
r=A.tY(o,e,A.ca(J.k(s,"filter")),A.nu(J.k(s,"includeDirect")),d)
break
case"deleteGroup":r=A.rH(b6,A.e(J.k(s,b3)))
break
case"reorderGroups":r=A.tF(b6,A.N(t.R.a(J.k(s,"names")),!0,t.N))
break
case"provider":r=A.tZ(b6,A.e(J.k(s,b3)),A.af(t.f.a(J.k(s,"provider")),t.N,t.z),A.ca(J.k(s,"oldName")))
break
case"deleteProvider":r=A.rI(b6,A.e(J.k(s,b3)))
break
case"rules":r=new A.r(A.c(A.u_(b6,A.N(t.R.a(J.k(s,"rules")),!0,t.N)).split("\n"),t.s),t.Q.a(new A.js()),t.U).R(0,"\n")
break
case"subscription":o=A.e(J.k(s,b1))
e=t.R
d=t.N
c=A.N(e.a(J.k(s,"sources")),!0,d)
e=A.tj(c,J.k(s,b4)==null?b0:A.N(e.a(J.k(s,b4)),!0,d))
d=J.p(J.k(s,"refresh"),!0)?b6:b0
r=A.ro(o,e,J.p(J.k(s,"allowEmpty"),!0),d)
h=A.y(b6)
if(t.f.b(h)&&typeof h.h(0,b2)=="string"){g=A.Q(A.e(r))
g.F([b2],h.h(0,b2))
r=g.b}r=A.nW(A.e(r),B.b.P(J.l3(b6,"\n"),new A.jt()))
if(B.b.P(J.l3(b6,"\n"),new A.ju()))r=A.nU(r,A.oe(b6))
break
case"subscriptionSources":o=b6
e=A.T(J.k(s,"count"))
r=A.tU(o,e,J.k(s,b4)==null?b0:A.N(t.R.a(J.k(s,b4)),!0,t.N))
break
default:throw A.a(B.bt)}if(typeof r=="string")r=A.rT(r)
o=B.d.ac(A.a7(["ok",!0,"value",r],t.N,t.K),b0)
return o}catch(a9){f=A.bF(a9)
if(!b8&&f instanceof A.ck&&B.a.p(f.n(0),"package:yaml_edit"))try{o=A.o9(b5,A.to(b6),b7,!0)
return o}catch(a9){}return B.d.ac(A.a7(["ok",!1,"error",J.am(f)],t.N,t.K),b0)}},
te(){var s,r=new A.jD()
if(typeof r=="function")A.E(A.W("Attempting to rewrap a JS function."))
s=function(a,b){return function(c,d,e){return a(b,c,d,e,arguments.length)}}(A.qy,r)
s[$.m9()]=r
v.G.mclashOverrideCall=s},
jX:function jX(a){this.a=a},
jN:function jN(){},
js:function js(){},
jt:function jt(){},
ju:function ju(){},
jD:function jD(){},
tp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="name",b={}
if(a.length>8388608||B.I.aC(a).length>8388608)throw A.a(B.bF)
b.a=0
s=new A.jO(b,new A.cH(t.d_))
r=A.c([],t.t)
try{for(l=A.tc(B.a.d3(a,A.H("^\\uFEFF",!0),"")),k=l.length,j=t.P,i=t.j,h=t.f,g=0;g<l.length;l.length===k||(0,A.Y)(l),++g){q=l[g]
p=q.a.ga6()
o=null
if(h.b(p)&&p.E("proxies")){o=p.h(0,"proxies")
if(!i.b(o))throw A.a(B.bD)}else o=p
n=s.$1(o)
if(n==null)continue
f=J.C(i.b(n)?n:[n])
while(f.k()){m=f.gm()
if(!j.b(m)||typeof m.h(0,c)!="string"||B.a.O(A.e(m.h(0,c))).length===0||typeof m.h(0,"type")!="string"||B.a.O(A.e(m.h(0,"type"))).length===0)throw A.a(B.bx)
J.e7(r,m)}}}catch(e){if(A.bF(e) instanceof A.bZ)throw A.a(B.bV)
else throw e}if(J.a6(r)===0)throw A.a(B.bK)
d=A.az(t.N)
for(l=r,k=l.length,g=0;g<l.length;l.length===k||(0,A.Y)(l),++g)if(!d.t(0,A.e(l[g].h(0,c))))throw A.a(B.bo)
return r},
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
nW(a,b){var s={},r=s.a=!1,q=t.U,p=A.o(new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.j1(s)),q),q.i("f.E"))
return(b?!s.a:r)?"# Mclash OpenWrt controller: true\n"+B.b.R(p,"\n"):B.b.R(p,"\n")},
oe(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash OpenWrt capture: "))return A.lK(t.f.a(B.d.aa(B.a.D(p,26),null)))}s=t.z
return A.lK(A.a7(["mode","none","interfaces",A.c(["br-lan"],t.s)],s,s))},
e0(a){var s=A.c(a.split("."),t.s)
if(s.length!==4||B.b.P(s,new A.jA()))return null
return B.b.bg(s,0,new A.jB(),t.p)},
m6(a){var s,r,q,p=A.H("^[0-9a-fA-F:]+$",!0)
if(!p.b.test(a))return!1
s=A.c(a.split("::"),t.s)
if(s.length>2)return!1
p=t.f_
r=A.o(new A.aH(s,t.ah.a(new A.kN()),p),p.i("f.E"))
if(B.b.P(r,new A.kO()))return!1
p=s.length
q=r.length
return p===2?q<8:q===8},
nX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.g.a(a)
s=a==null?[]:a
r=A.N(s,!0,t.N)
s=r.length
if(s>64)throw A.a(B.bZ)
q=A.c([],t.s)
for(p=0;p<s;++p){o=B.a.O(r[p]).toLowerCase()
n=o.split("-")
m=n.length
if(m===2){if(0>=m)return A.b(n,0)
l=A.e0(n[0])
if(1>=m)return A.b(n,1)
k=A.e0(n[1])
j=l!=null&&k!=null&&l<=k}else{j=!1
if(m===1){i=o.split("/")
m=i.length
if(0>=m)return A.b(i,0)
h=i[0]
g=A.e0(h)==null
f=!g||A.m6(h)
h=m===2
if(h){if(1>=m)return A.b(i,1)
e=A.aS(i[1],null)}else e=null
if(f)if(m!==1){if(h){h=A.H("^[0-9]{1,3}$",!0)
if(1>=m)return A.b(i,1)
m=i[1]
if(h.b.test(m))if(e!=null)if(e>=0)m=e<=(!g?32:128)
else m=j
else m=j
else m=j}else m=j
j=m}else j=!0}}if(!j)throw A.a(B.bQ)
if(!B.b.p(q,o))B.b.t(q,o)}return q},
lK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="interfaces",f="accessPolicies",e=a.h(0,"mode")
if(e==null)e="none"
s=a.h(0,"stack")
if(s==null)s="mixed"
r=a.h(0,g)
if(r==null)r=["br-lan"]
q=t.N
p=A.N(t.R.a(r),!0,q)
r=t.s
if(!B.b.p(A.c(["none","tun","tproxy"],r),e))throw A.a(B.br)
if(!B.b.p(A.c(["system","gvisor","mixed"],r),s))throw A.a(B.bB)
r=p.length
if(r===0||r>16||A.aA(p,A.u(p).c).a!==p.length||B.b.P(p,new A.j2()))throw A.a(B.cl)
for(r=["lan","router","ipv6"],o=0;o<3;++o){n=r[o]
if(a.h(0,n)!=null&&!A.fm(a.h(0,n)))throw A.a(B.bk)}m=A.nX(a.h(0,"access"))
l=A.n(q,q)
if(a.h(0,f)!=null){r=t.f
if(!r.b(a.h(0,f)))throw A.a(B.ah)
for(r=r.a(a.h(0,f)).gN(),r=r.gq(r);r.k();){k=r.gm()
j=k.a
if(typeof j!="string"||typeof k.b!="string")throw A.a(B.ah)
i=B.b.gev(A.nX([j]))
h=A.e(k.b)
k=!0
if(B.b.p(m,i)){j=h.length
if(j!==0)if(j<=200){k=A.H("[,\\r\\n]",!0)
k=k.b.test(h)}}if(k)throw A.a(B.cA)
l.j(0,i,h)}}r=A.n(q,t.z)
r.j(0,"mode",e)
r.j(0,g,p)
q=a.h(0,"lan")
r.j(0,"lan",q==null?!0:q)
r.j(0,"access",m)
if(l.a!==0)r.j(0,f,l)
q=a.h(0,"router")
r.j(0,"router",q==null?!0:q)
q=a.h(0,"ipv6")
r.j(0,"ipv6",q==null?!1:q)
r.j(0,"stack",s)
return r},
nU(b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="ipv6",a6="routing-mark",a7="default-nameserver",a8="external-controller",a9=A.lK(b8),b0=a9.h(0,"mode"),b1=J.b2(b0),b2=!b1.T(b0,"none"),b3=t.s,b4=A.Q(new A.r(A.c(b7.split("\n"),b3),t.Q.a(new A.iR()),t.U).R(0,"\n")),b5=A.y(b7),b6=t.f
if(!b6.b(b5))throw A.a(B.bN)
s=t.Y.a(a9.h(0,"accessPolicies"))
if(s==null){r=t.z
s=A.n(r,r)}r=t.z
q=A.az(r)
p=t.g.a(b5.h(0,"proxies"))
p=J.C(p==null?[]:p)
while(p.k()){o=p.gm()
if(b6.b(o))q.t(0,o.h(0,"name"))}for(p=s.gag(),p=p.gq(p);p.k();)if(!q.p(0,p.gm()))throw A.a(B.bn)
q=A.c([],b3)
if(b2)for(p=J.C(t.a.a(a9.h(0,"access")));p.k();){n=p.gm()
if(s.E(n))for(m=A.rk(n),l=m.length,k=0;k<m.length;m.length===l||(0,A.Y)(m),++k)q.push("SRC-IP-CIDR,"+m[k]+","+A.m(s.h(0,n)))}j=A.nS(b7)
i=B.b.P(A.c(b7.split("\n"),b3),new A.iS())
if(q.length!==0||i){p=A.o(q,t.N)
B.b.a2(p,j)
b4.F(["rules"],A.ap(p,B.l,B.w))}if(q.length!==0)b4.F(["mode"],"rule")
p=t.N
h=A.a7(["enable",b1.T(b0,"tun")],p,r)
if(b1.T(b0,"tun")){h.a2(0,A.a7(["device","Mclash","stack",a9.h(0,"stack"),"auto-route",!1,"auto-redirect",!1,"auto-detect-interface",!0,"mtu",1500,"dns-hijack",A.c(["any:53","tcp://any:53"],b3)],p,r))
if(J.p(a9.h(0,a5),!0))h.j(0,"inet6-address",A.c(["fdfe:dcba:9876::1/126"],b3))}b4.F(["tun"],h)
b1=b1.T(b0,"tproxy")?7893:0
b4.F(["tproxy-port"],b1)
if(b6.b(b4.cI([],a4).ga6())&&b6.a(b4.cI([],a4).ga6()).E(a6))b4.I(0,["routing-mark"])
if(b2)b4.F(["routing-mark"],359)
if(b2){b4.F(["allow-lan"],!0)
b4.F(["bind-address"],"*")
b4.F(["ipv6"],a9.h(0,a5))
g=b5.h(0,"dns")
b1=b6.b(g)
if(!b1)b4.F(["dns"],A.n(p,r))
b4.F(["dns","enable"],!0)
n=J.p(a9.h(0,a5),!0)?"[::]:1053":"0.0.0.0:1053"
b4.F(["dns","listen"],n)
b4.F(["dns","ipv6"],a9.h(0,a5))
if(!b1||!g.E(a7))b4.F(["dns",a7],A.c(["223.5.5.5","1.1.1.1"],b3))
if(!b1||!g.E("nameserver"))b4.F(["dns","nameserver"],A.c(["https://dns.alidns.com/dns-query","https://cloudflare-dns.com/dns-query"],b3))
b1=b5.h(0,a8)
f=A.m(b1==null?"0.0.0.0:9097":b1)
e=A.H(":([0-9]+)$",!0).e4(f)
b1=e==null
if(b1)b3=a4
else{b3=e.b
if(1>=b3.length)return A.b(b3,1)
b3=b3[1]}d=A.aS(b3==null?"":b3,a4)
if(d==null)d=9097
if(d<1||d>65535)throw A.a(B.c8)
c=b1?"0.0.0.0":B.a.v(f,0,e.b.index)
b4.F([a8],c+":"+d)
b=b5.h(0,"proxies")
if(t.j.b(b))for(b1=J.F(b),a=0;a<b1.gl(b);++a)if(b6.b(b1.h(b,a))&&b6.a(b1.h(b,a)).E(a6))b4.I(0,["proxies",a,"routing-mark"])
a0=b5.h(0,"proxy-providers")
if(b6.b(a0))for(b1=a0.gN(),b1=b1.gq(b1);b1.k();){b3=b1.gm()
n=b3.b
if(!b6.b(n))continue
a1=n.h(0,"override")
if(b6.b(a1)){n=A.n(p,r)
for(m=a1.gN(),m=m.gq(m);m.k();){l=m.gm()
n.j(0,A.m(l.a),l.b)}a2=n}else a2=A.n(p,r)
a2.j(0,a6,359)
b4.F(["proxy-providers",b3.a,"override"],a2)}}a3=B.d.ac(a9,a4)
if(a3.length>32768||B.I.aC(a3).length>32768)throw A.a(B.b5)
b1=q.length===0?"":"# Mclash OpenWrt access-rules: "+B.d.ac(q,a4)+"\n"
return A.nW("# Mclash OpenWrt capture: "+a3+"\n"+b1+b4.n(0),!1)},
rm(a,b){var s,r,q,p,o,n=b.h(0,"address"),m=B.a.O(A.m(n==null?"0.0.0.0":n)),l=A.aS(A.m(b.h(0,"port")),null)
n=t.s
s=A.c(m.split("."),n)
r=s.length===4&&B.b.aW(s,new A.iP())
if(B.a.p(m,":")){q=A.H("^[0-9a-fA-F:]{2,39}$",!0)
p=q.b.test(m)}else p=!1
if(!r&&!p&&m!=="localhost")throw A.a(B.ce)
if(l==null||l<1||l>65535)throw A.a(B.cn)
o=A.Q(new A.r(A.c(a.split("\n"),n),t.Q.a(new A.iQ()),t.U).R(0,"\n"))
n=p?"["+m+"]":m
o.F(["external-controller"],n+":"+A.m(l))
return"# Mclash OpenWrt controller: true\n"+o.n(0)},
j1:function j1(a){this.a=a},
jA:function jA(){},
jB:function jB(){},
kN:function kN(){},
kO:function kO(){},
j2:function j2(){},
iR:function iR(){},
iS:function iS(){},
iP:function iP(){},
iQ:function iQ(){},
tm(a){var s,r,q,p,o,n="server",m=A.y(a),l=t.f
if(!l.b(m)||!t.j.b(m.h(0,"proxies")))return A.c([],t.s)
s=A.az(t.N)
for(r=J.C(t.j.a(m.h(0,"proxies")));r.k();){q=r.gm()
p=!1
if(l.b(q))if(typeof q.h(0,n)=="string"){o=A.e(q.h(0,n))
if(o.length<=253){p=A.H("^[A-Za-z0-9][A-Za-z0-9.-]*$",!0)
p=p.b.test(o)&&A.e0(o)==null}}if(p)s.t(0,A.e(q.h(0,n)))}l=A.py(s,256,s.$ti.c)
l=A.o(l,A.j(l).i("f.E"))
return l},
tn(a){var s,r=A.y(a),q=t.f,p=q.b(r)?r.h(0,"dns"):null
if(!q.b(p)||!J.p(p.h(0,"enhanced-mode"),"fake-ip"))return A.c([],t.s)
q=p.h(0,"fake-ip-range")
q=A.m(q==null?"198.18.0.1/16":q)
s=p.h(0,"fake-ip-range6")
return A.c([q,A.m(s==null?"fc00::/18":s)],t.s)},
tl(a,b){var s,r,q,p,o,n=b.split("/"),m=n.length
if(m===2){s=B.a.p(a,":")
if(0>=m)return A.b(n,0)
s=s!==B.a.p(n[0],":")}else s=!0
if(s)return!1
r=B.a.p(a,":")?128:32
if(1>=m)return A.b(n,1)
q=A.aS(n[1],null)
if(q==null||q<0||q>r)return!1
m=new A.jL()
p=m.$1(a)
o=m.$1(n[0])
m=!1
if(p!=null)if(o!=null){m=r-q
m=p.b2(0,m).ao(0,o.b2(0,m))===0}return m},
tI(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="headers",b=A.y(a0),a=t.f
if(!a.b(b)||!t.j.b(b.h(0,"proxies")))return a0
s=t.j.a(b.h(0,"proxies"))
r=A.Q(a0)
for(q=J.F(s),p=t.s,o=t.N,n=t.z,m=0;m<q.gl(s);++m){l=q.h(s,m)
if(!a.b(l))continue
k=l.h(0,"server")
j=a1.h(0,k)
i=!0
if(typeof k=="string")if(typeof j=="string")i=A.e0(j)==null&&!A.m6(j)
if(i)continue
i=A.c(["198.18.0.0/15"],p)
B.b.a2(i,a2)
if(B.b.P(i,new A.ku(j)))continue
i=l.h(0,"type")
h=i==null?null:J.am(i).toLowerCase()
if(J.p(l.h(0,"tls"),!0)||B.b.p(A.c(["trojan","hysteria","hysteria2","tuic","anytls"],p),h)){g=B.b.p(A.c(["vmess","vless"],p),h)?"servername":"sni"
if(l.h(0,g)==null||J.p(l.h(0,g),""))r.F(["proxies",m,g],k)}if(J.p(l.h(0,"network"),"ws")){f=l.h(0,"ws-opts")
e=a.b(f)?A.af(f,o,n):A.n(o,n)
d=a.b(e.h(0,c))?A.af(a.a(e.h(0,c)),o,n):A.n(o,n)
if(!new A.ai(d,A.j(d).i("ai<1>")).P(0,new A.kv()))d.j(0,"Host",k)
e.j(0,c,d)
r.F(["proxies",m,"ws-opts"],e)}r.F(["proxies",m,"server"],j)}return r.b},
jL:function jL(){},
jM:function jM(){},
ku:function ku(a){this.a=a},
kv:function kv(){},
lZ(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.N(t.j.a(B.d.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
m7(a,b){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.kR()),t.U).R(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.d.ac(b,null)+"\n"+s},
ts(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="alpn",a1="path",a2={},a3=B.a.O(a6),a4=A.H("\\s",!0),a5=A.K(a3,a4,"")
if(!J.mi(a5,"vmess://")||J.a6(a5)>1048576)throw A.a(B.bS)
a2.a=null
try{s=B.b.gU(J.bG(a5,8).split("#"))
a2.a=A.af(t.f.a(B.d.aa(B.e.cN(B.y.aC(B.v.b6(s))),a)),t.N,t.z)}catch(r){throw A.a(B.bR)}q=new A.jW(a2)
p=new A.jV(q)
o=q.$1("add")
n=q.$1("id")
m=p.$1("port")
l=p.$2$fallback("aid",0)
if(o.length===0||n.length===0||m<1||m>65535||l<0)throw A.a(B.bp)
k=q.$2("net","tcp")
if(k.length===0)k="tcp"
j=q.$2("type","none")
if(k==="tcp"&&j==="http")k="http"
a3=t.s
if(!B.b.p(A.c(["tcp","http","ws","h2","grpc"],a3),k))throw A.a(A.D("Unsupported VMess transport type: "+k,a,a))
if(k==="tcp"&&j.length!==0&&j!=="none")throw A.a(A.D("Unsupported TCP camouflage type: "+j,a,a))
i=q.$1("tls")
if(i.length!==0&&i!=="none"&&i!=="tls")throw A.a(A.D("Unsupported VMess TLS type: "+i,a,a))
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
if(J.a6(q.$1(a0))!==0){g=J.l3(q.$1(a0),",")
f=A.u(g)
e=f.i("J<1,d>")
e=new A.J(g,f.i("d(1)").a(new A.jQ()),e).br(0,e.i("l(z.E)").a(new A.jR()))
g=A.o(e,e.$ti.i("f.E"))
h.j(0,a0,g)}d=q.$1("host")
c=J.a6(q.$1(a1))===0?"/":q.$1(a1)
g=t.c
f=t.e
e=new A.J(A.c(d.split(","),a3),g.a(new A.jS()),f).br(0,f.i("l(z.E)").a(new A.jT()))
b=A.o(e,e.$ti.i("f.E"))
switch(k){case"http":e=A.n(a4,t.K)
e.j(0,"method","GET")
a3=A.o(new A.J(A.c(c.split(","),a3),g.a(new A.jU()),f),f.i("z.E"))
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
tq(a){var s=B.a.O(a)
if(B.a.u(s,"vmess://"))return A.ts(s)
return A.tr(s)},
rl(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="network",a6="proxies",a7="name",a8="dialer-proxy",a9=B.a.O(b6),b0=A.H("^[a-zA-Z][a-zA-Z0-9+.-]*://",!0),b1=b0.b.test(a9),b2=b1?A.c([A.tq(a9)],t.t):A.tp(a9),b3=B.b.gU(b2),b4=A.oh(b5)
if(b1&&J.p(b3.h(0,"type"),"vmess")&&b4.length!==0&&B.b.p(A.c(["http","ws"],t.s),b3.h(0,a5))){s=B.a.O(b4)
b0=A.H("[\\s/\\\\?#]",!0)
if(b0.b.test(s))throw A.a(B.ba)
r=t.P.a(b3.h(0,J.p(b3.h(0,a5),"http")?"http-opts":"ws-opts"))
if(s.length===0)r.I(0,"headers")
else{if(J.p(b3.h(0,a5),"http")){b0=t.e
b0=new A.J(A.c(s.split(","),t.s),t.c.a(new A.iM()),b0).br(0,b0.i("l(z.E)").a(new A.iN()))
b0=A.o(b0,b0.$ti.i("f.E"))}else b0=s
r.j(0,"headers",A.a7(["Host",b0],t.N,t.K))}}q=t.S.a(A.y(b5))
b0=t.g
p=b0.a(q.h(0,a6))
if(p==null)p=[]
o=b0.a(q.h(0,"proxy-groups"))
if(o==null)o=[]
b0=t.N
n=A.mB(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],b0)
for(m=J.C(p);m.k();)n.t(0,A.e(J.k(m.gm(),a7)))
for(m=J.a1(o),l=m.gq(o);l.k();)n.t(0,A.e(J.k(l.gm(),a7)))
k=A.n(b0,b0)
l=t.s
j=A.c([],l)
for(i=b2.length,h=0;g=b2.length,h<g;b2.length===i||(0,A.Y)(b2),++h){f=b2[h]
e=A.e(f.h(0,a7))
for(g=e+" (",d=e,c=2;n.p(0,d);){d=g+c+")";++c}n.t(0,d)
k.j(0,e,d)
f.j(0,a7,d)
B.b.t(j,d)}for(h=0;h<b2.length;b2.length===g||(0,A.Y)(b2),++h){f=b2[h]
b=f.h(0,a8)
if(k.E(b))f.j(0,a8,k.h(0,b))}a=A.Q(b5)
n=t.z
i=A.o(b2,n)
B.b.a2(i,p)
a.F(["proxies"],i)
a0=a.b
a1=A.fv(b5)
if(a1.a!==0)a0=A.nV(a0,a1)
else if(!B.b.P(A.c(b5.split("\n"),l),new A.iO())){for(l=t.j,i=t.R,a2=0;a2<m.gl(o);++a2){a3=m.h(o,a2)
g=J.F(a3)
if(J.p(g.h(a3,"type"),"select")&&l.b(g.h(a3,a6))&&!A.bb(b5).E(g.h(a3,a7))){a4=A.o(j,n)
B.b.a2(a4,i.a(g.h(a3,a6)))
a.F(["proxy-groups",a2,"proxies"],a4)}}a0=a.b}b0=A.o(j,b0)
B.b.a2(b0,A.lZ(b5))
return A.lI(A.m7(a0,b0),b5)},
m0(a){var s,r,q=A.ch(a),p=A.aA(q,A.u(q).c)
q=A.lZ(a)
s=A.u(q)
r=s.i("r<1>")
q=A.o(new A.r(q,s.i("l(1)").a(p.ga7(p)),r),r.i("f.E"))
return q},
tG(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="name",a3=A.m0(a5),a4=A.aA(a3,A.u(a3).c)
if(a6.length!==a4.a||A.aA(a6,A.u(a6).c).a!==a4.a||!a4.h8(a6))throw A.a(B.ca)
s=t.S.a(A.y(a5))
a3=t.g
r=a3.a(s.h(0,"proxies"))
if(r==null)r=[]
q=t.z
q=A.n(q,q)
for(p=J.a1(r),o=p.gq(r);o.k();){n=o.gm()
m=J.F(n)
if(a4.p(0,m.h(n,a2)))q.j(0,m.h(n,a2),n)}l=A.Q(a5)
o=[]
for(p=p.gq(r),k=0;p.k();){n=p.gm()
if(a4.p(0,J.k(n,a2))){j=k+1
if(!(k<a6.length))return A.b(a6,k)
o.push(q.h(0,a6[k]))
k=j}else o.push(n)}l.F(["proxies"],o)
i=a3.a(s.h(0,"proxy-groups"))
if(i==null)i=[]
h=A.bb(a5)
for(a3=J.F(i),q=A.u(a6),p=q.i("l(1)"),q=q.i("r<1>"),o=q.i("f.E"),m=t.j,g=0;g<a3.gl(i);++g){if(h.E(J.k(a3.h(i,g),a2)))continue
f=J.k(a3.h(i,g),"proxies")
if(!m.b(f))continue
e=J.F(f)
d=A.o(new A.r(a6,p.a(e.ga7(f)),q),o)
c=[]
for(e=e.gq(f),b=0;e.k();){a=e.gm()
if(a4.p(0,a)){a0=b+1
if(!(b<d.length))return A.b(d,b)
c.push(d[b])
b=a0}else c.push(a)}l.F(["proxy-groups",g,"proxies"],c)}a1=A.m7(l.b,a6)
A.om(a1)
return a1},
rJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy"
if(!B.b.p(A.m0(a),b))throw A.a(B.c0)
s=t.S.a(A.y(a))
r=A.c([],t.dm)
for(q=t.j,p=J.C(q.a(s.h(0,"proxies"))),o=t.f,n=t.z;p.k();){m=p.gm()
if(!J.p(J.k(m,"name"),b))r.push(A.af(o.a(m),n,n))}for(p=r.length,l=0;l<r.length;r.length===p||(0,A.Y)(r),++l){m=r[l]
if(J.p(m.h(0,e),b))m.I(0,e)}k=A.Q(a)
k.F(["proxies"],r)
j=t.g.a(s.h(0,"proxy-groups"))
if(j==null)j=[]
for(r=J.F(j),p=t.s,i=0;i<r.gl(j);++i){h=J.k(r.h(j,i),"proxies")
if(q.b(h)&&J.bs(h,b)){o=J.aq(h,new A.jd(b))
g=A.o(o,o.$ti.i("f.E"))
o=g.length===0?A.c(["DIRECT"],p):g
k.F(["proxy-groups",i,"proxies"],o)}}r=k.b
q=A.lZ(a)
p=A.u(q)
o=p.i("r<1>")
q=A.o(new A.r(q,p.i("l(1)").a(new A.je(b)),o),o.i("f.E"))
f=A.tE(A.m7(r,q),b)
A.om(f)
return f},
kR:function kR(){},
jW:function jW(a){this.a=a},
jV:function jV(a){this.a=a},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
k6(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.N(t.j.a(B.d.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
ti(a,b){var s,r,q,p,o,n
if(b==null)return a
s=A.k6(b)
r=A.aA(s,A.u(s).c)
q=t.g.a(t.S.a(A.y(b)).h(0,"proxies"))
if(q==null)q=[]
s=J.aq(q,new A.jG(r))
p=A.o(s,s.$ti.i("f.E"))
s=A.u(p)
o=new A.J(p,s.i("@(1)").a(new A.jH()),s.i("J<1,@>")).aJ(0)
s=A.o(p,t.z)
n=A.j(a)
B.b.a2(s,new A.r(a,n.i("l(t.E)").a(new A.jI(o)),n.i("r<t.E>")))
return s},
u5(a,b){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.kQ()),t.U).R(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.d.ac(b,null)+"\n"+s},
tJ(a,b){var s,r,q,p,o,n,m,l,k,j,i="name"
if(b==null)return a
s=A.k6(b)
r=A.aA(s,A.u(s).c)
if(r.a===0)return a
s=t.S
q=t.g
p=q.a(s.a(A.y(b)).h(0,"proxies"))
if(p==null)p=[]
o=t.z
o=A.n(o,o)
for(n=J.C(p);n.k();){m=n.gm()
l=J.F(m)
if(r.p(0,l.h(m,i)))o.j(0,l.h(m,i),m)}k=q.a(s.a(A.y(a)).h(0,"proxies"))
if(k==null)k=[]
s=A.Q(a)
q=[]
for(n=J.C(k);n.k();){m=n.gm()
l=o.h(0,J.k(m,i))
q.push(l==null?m:l)}s.F(["proxies"],q)
j=s.b
A.u4(j)
return j},
jG:function jG(a){this.a=a},
jH:function jH(){},
jI:function jI(a){this.a=a},
kQ:function kQ(){},
ch(a){var s,r=t.g.a(t.S.a(A.y(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aX(r,new A.kx(),t.N)
s=A.o(s,s.$ti.i("z.E"))
return s},
e2(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.af(t.f.a(B.d.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
bb(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.d.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
jZ(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.d.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
tz(a,b){var s=A.jZ(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.ch(a),p=A.u(q),o=p.i("r<1>"),n=new A.r(q,p.i("l(1)").a(new A.ka(s)),o)
if(r!=null){q=J.aq(r,n.ga7(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.ci(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
ns(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.ch(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga7(c)
b=J.aq(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.aq(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.u(c)
s=b.i("r<1>")
p=A.o(new A.r(c,b.i("l(1)").a(new A.ia(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.am)
o=A.e2(a0)
n=A.bb(a0)
m=t.S.a(A.y(a))
l=A.Q(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.F(k),j=0;j<s.gl(k);++j)if(o.E(J.k(s.h(k,j),"name"))&&s.h(k,j).E("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gG().p(0,d)){s=[]
for(b=J.C(b.a(m.h(0,d)));b.k();){i=b.gm()
if(!n.E(J.k(i,"name")))s.push(i)}l.F(["proxy-groups"],s)}b=t.s
h=new A.r(A.c(l.b.split("\n"),b),t.Q.a(new A.ib()),t.U).R(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.m3(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.aq(s,B.b.ga7(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.m3(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.aq(b,B.b.ga7(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.m3(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.d.ac(a1,null)+"\n"+h},
nR(a){var s=t.N,r=new A.iE(A.az(s),A.az(s),a)
for(s=new A.an(a,a.r,a.e,A.j(a).i("an<1>"));s.k();)r.$1(s.d)},
iG(a,b,c){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.iI()),t.U).R(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.d.ac(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.d.ac(c,null)+"\n")+s},
lI(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.P(A.c(a9.split("\n"),a7),new A.iW()))return A.lB(a8,a9,A.ft(a9))
s=A.jZ(a9)
if(s.a!==0)return A.ns(a8,a9,s,"")
r=A.e2(a9)
q=A.bb(a9)
p=t.S.a(A.y(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a1(n)
k=l.ad(n,new A.iX(),m).aJ(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.C(i==null?[]:i)
while(i.k()){h=i.gm()
if(!q.E(J.k(h,a5)))j.push(h)}for(i=new A.V(q,A.j(q).i("V<1,2>")).gq(0),g=t.K;i.k();){f=i.d
e=f.a
d=f.b
c=J.a1(d)
if(!c.aP(d,k.ga7(k)).gq(0).k())d=A.c(["DIRECT"],a7)
else{d=c.aP(d,k.ga7(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a7(["name",e,"type","select","proxies",d],m,g))}i=A.u(j)
b=new A.J(j,i.i("@(1)").a(new A.iY()),i.i("J<1,@>")).aJ(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.k();){a=g.gm()
e=J.F(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.Y)(j),++a0){h=j[a0]
e=J.F(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.N(e==null?[]:e,!0,m))}a1=A.Q(a8)
if(q.a!==0)a1.F(["proxy-groups"],j)
for(a2=0;a2<l.gl(n);++a2){a3=A.e(J.k(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.F(["proxies",a2,"dialer-proxy"],a4)}}A.nR(i)
return A.iG(a1.b,r,q)},
m3(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.ch(a),g=A.aA(b,A.u(b).c),f=A.aA(c,A.u(c).c)
if(g.a===0||f.a===0)throw A.a(B.ai)
s=g.ec(f)
if(s.gaN(s))throw A.a(B.al)
s=t.N
r=A.o(g,s)
B.b.a2(r,f)
if(!B.b.aW(r,B.b.ga7(h)))throw A.a(B.K)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.e2(a)
n=A.bb(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.y(a))
s=A.eu(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.C(r==null?[]:r)
while(r.k())s.t(0,A.e(J.k(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.lt(q,q.r,A.j(q).c),r=s.$ti.c;s.k();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.lI(a,A.iG("",o,n))},
om(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.y(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.C(j==null?[]:j)
s=t.s
while(j.k()){r=j.gm()
q=J.F(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.C(j==null?[]:j)
while(j.k()){p=j.gm()
s=J.F(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.N(s==null?[]:s,!0,m))}A.nR(l)},
tE(a,b){var s,r,q,p,o,n,m=t.s
if(B.b.P(A.c(a.split("\n"),m),new A.kl())){s=A.ft(a)
for(m=new A.aJ(s,s.r,s.e,A.j(s).i("aJ<2>"));m.k();)for(r=m.d.gag(),r=r.gq(r);r.k();)J.l2(r.gm(),new A.km(b))
return A.lB(a,a,s)}q=A.e2(a)
q.aw(0,new A.kn(b))
p=A.bb(a)
for(r=new A.aJ(p,p.r,p.e,A.j(p).i("aJ<2>"));r.k();)J.l2(r.d,new A.ko(b))
o=A.jZ(a)
for(r=new A.aJ(o,o.r,o.e,A.j(o).i("aJ<2>"));r.k();)J.l2(r.d,new A.kp(b))
o.aw(0,new A.kq())
if(!B.b.P(A.ch(a),new A.kr(o)))o.bC(0)
n=A.iG(new A.r(A.c(a.split("\n"),m),t.Q.a(new A.ks()),t.U).R(0,"\n"),q,p)
return o.a===0?n:"# Mclash global-chain: "+B.d.ac(o,null)+"\n"+n},
ft(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.r(A.c(a.split("\n"),e),t.Q.a(new A.k8()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.d.aa(B.a.D(d.gU(0),25),null)).gN(),q=q.gq(q),p=t.j,o=t.a;q.k();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gN(),n=n.gq(n);n.k();){k=n.gm()
l.j(0,A.e(k.a),A.N(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.jZ(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cX(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a7([f,o,f+"Targets",A.tz(a,g)],s,q))}}return i},
tk(a){var s=A.ft(a),r=A.j(s).i("ai<1>"),q=t.p
return""+(A.hb(new A.ai(s,r),r.i("h(f.E)").a(A.rA()),r.i("f.E"),q).bg(0,0,new A.jK(),q)+1)},
tM(a,b,c,d,e){var s,r,q,p,o,n=B.b.ga7(A.ch(a))
if(!B.b.aW(c,n)||!B.b.aW(e,n))throw A.a(B.K)
if(c.length!==0&&e.length===0)throw A.a(B.cB)
if(B.b.P(e,B.b.ga7(c)))throw A.a(B.b1)
s=A.ft(a)
n=A.j(s).i("V<1,2>")
r=n.i("r<f.E>")
q=r.i("aH<f.E,d>")
p=A.eu(new A.aH(new A.r(new A.V(s,n),n.i("l(f.E)").a(new A.ky(b)),r),r.i("f<d>(f.E)").a(new A.kz(d)),q),q.i("f.E"))
if(B.b.P(c,p.ga7(p)))throw A.a(B.ck)
o=d?"front":"back"
if(c.length===0)s.I(0,b)
else{n=t.N
r=A.o(c,n)
q=A.aA(e,A.u(e).c)
q=A.o(q,A.j(q).c)
s.j(0,b,A.a7([o,r,o+"Targets",q],n,t.a))}return A.lB(a,a,s)},
lB(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.y(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a1(b1)
q=r.ad(b1,new A.ih(),s).aJ(0)
p=A.e2(b3)
o=A.bb(b3)
n=A.Q(b2)
for(m=0;m<r.gl(b1);++m)if(p.E(J.k(r.h(b1,m),"name"))&&r.h(b1,m).E("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gG().p(0,a9)){r=[]
for(l=J.C(t.j.a(b0.h(0,a9)));l.k();){k=l.gm()
if(!o.E(J.k(k,"name")))r.push(k)}n.F(["proxy-groups"],r)}r=t.s
j=new A.r(A.c(n.b.split("\n"),r),t.Q.a(new A.ii()),t.U).R(0,"\n")
i=A.n(s,t.O)
for(l=new A.V(b4,A.j(b4).i("V<1,2>")).gq(0),h=t.a;l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.k();){d=e.gm()
c=d.a
d=J.aq(d.b,q.ga7(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cX(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cX(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aK<2>")
e=f.i("aH<f.E,d>")
b=A.eu(new A.aH(new A.aK(i,f),f.i("f<d>(f.E)").a(new A.ij()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.V(i,l.i("V<1,2>")).gq(0);l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.k();){d=e.gm()
c=d.a
a2=B.a.aL(c,"Targets")
d=d.b
if(a2){d=J.aq(d,new A.ik(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.ns(j,j,f," (chain "+e+")")
a4=A.bb(a3)
a5=A.e2(a3)
a0.a2(0,a4)
for(f=new A.bg(a5,a5.r,a5.e,A.j(a5).i("bg<1,2>"));f.k();){a6=f.d
d=a6.a
if(a.E(d)&&a.h(0,d)!==a6.b)throw A.a(A.D("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.lI(j,A.iG("",a,a0))
s=B.d.ac(i,a8)
r=A.c([],r)
for(l=new A.V(a1,a1.$ti.i("V<1,2>")).gq(0);l.k();){g=l.d
h=g.a
f=i.h(0,h).E("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.d.ac(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.c4(r)+a7},
tv(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
kx:function kx(){},
ka:function ka(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
kl:function kl(){},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(){},
kr:function kr(a){this.a=a},
ks:function ks(){},
k8:function k8(){},
jK:function jK(){},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
m1(a){var s,r=t.g.a(t.S.a(A.y(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aX(r,new A.kw(),t.N)
s=A.o(s,s.$ti.i("z.E"))
return s},
fu(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.af(t.f.a(B.d.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
fs(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.d.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
lY(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.d.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.k();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
ty(a,b){var s=A.lY(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.m1(a),p=A.u(q),o=p.i("r<1>"),n=new A.r(q,p.i("l(1)").a(new A.k9(s)),o)
if(r!=null){q=J.aq(r,n.ga7(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.ci(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
nr(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.m1(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga7(c)
b=J.aq(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.aq(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.u(c)
s=b.i("r<1>")
p=A.o(new A.r(c,b.i("l(1)").a(new A.i8(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.am)
o=A.fu(a0)
n=A.fs(a0)
m=t.S.a(A.y(a))
l=A.Q(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.F(k),j=0;j<s.gl(k);++j)if(o.E(J.k(s.h(k,j),"name"))&&s.h(k,j).E("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gG().p(0,d)){s=[]
for(b=J.C(b.a(m.h(0,d)));b.k();){i=b.gm()
if(!n.E(J.k(i,"name")))s.push(i)}l.F(["proxy-groups"],s)}b=t.s
h=new A.r(A.c(l.b.split("\n"),b),t.Q.a(new A.i9()),t.U).R(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.m2(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.aq(s,B.b.ga7(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.m2(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.aq(b,B.b.ga7(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.m2(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.d.ac(a1,null)+"\n"+h},
nQ(a){var s=t.N,r=new A.iD(A.az(s),A.az(s),a)
for(s=new A.an(a,a.r,a.e,A.j(a).i("an<1>"));s.k();)r.$1(s.d)},
lG(a,b,c){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.iH()),t.U).R(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.d.ac(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.d.ac(c,null)+"\n")+s},
lH(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.P(A.c(a9.split("\n"),a7),new A.iT()))return A.qs(a8,a9,A.tx(a9))
s=A.lY(a9)
if(s.a!==0)return A.nr(a8,a9,s,"")
r=A.fu(a9)
q=A.fs(a9)
p=t.S.a(A.y(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a1(n)
k=l.ad(n,new A.iU(),m).aJ(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.C(i==null?[]:i)
while(i.k()){h=i.gm()
if(!q.E(J.k(h,a5)))j.push(h)}for(i=new A.V(q,A.j(q).i("V<1,2>")).gq(0),g=t.K;i.k();){f=i.d
e=f.a
d=f.b
c=J.a1(d)
if(!c.aP(d,k.ga7(k)).gq(0).k())d=A.c(["DIRECT"],a7)
else{d=c.aP(d,k.ga7(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a7(["name",e,"type","select","proxies",d],m,g))}i=A.u(j)
b=new A.J(j,i.i("@(1)").a(new A.iV()),i.i("J<1,@>")).aJ(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.k();){a=g.gm()
e=J.F(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.Y)(j),++a0){h=j[a0]
e=J.F(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.N(e==null?[]:e,!0,m))}a1=A.Q(a8)
if(q.a!==0)a1.F(["proxy-groups"],j)
for(a2=0;a2<l.gl(n);++a2){a3=A.e(J.k(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.F(["proxies",a2,"dialer-proxy"],a4)}}A.nQ(i)
return A.lG(a1.b,r,q)},
m2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.m1(a),g=A.aA(b,A.u(b).c),f=A.aA(c,A.u(c).c)
if(g.a===0||f.a===0)throw A.a(B.ai)
s=g.ec(f)
if(s.gaN(s))throw A.a(B.al)
s=t.N
r=A.o(g,s)
B.b.a2(r,f)
if(!B.b.aW(r,B.b.ga7(h)))throw A.a(B.K)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.fu(a)
n=A.fs(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.y(a))
s=A.eu(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.C(r==null?[]:r)
while(r.k())s.t(0,A.e(J.k(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.lt(q,q.r,A.j(q).c),r=s.$ti.c;s.k();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.lH(a,A.lG("",o,n))},
u4(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.y(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.C(j==null?[]:j)
s=t.s
while(j.k()){r=j.gm()
q=J.F(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.C(j==null?[]:j)
while(j.k()){p=j.gm()
s=J.F(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.N(s==null?[]:s,!0,m))}A.nQ(l)},
tx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.r(A.c(a.split("\n"),e),t.Q.a(new A.k7()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.d.aa(B.a.D(d.gU(0),25),null)).gN(),q=q.gq(q),p=t.j,o=t.a;q.k();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gN(),n=n.gq(n);n.k();){k=n.gm()
l.j(0,A.e(k.a),A.N(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.lY(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cX(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a7([f,o,f+"Targets",A.ty(a,g)],s,q))}}return i},
qs(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.y(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a1(b1)
q=r.ad(b1,new A.ic(),s).aJ(0)
p=A.fu(b3)
o=A.fs(b3)
n=A.Q(b2)
for(m=0;m<r.gl(b1);++m)if(p.E(J.k(r.h(b1,m),"name"))&&r.h(b1,m).E("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gG().p(0,a9)){r=[]
for(l=J.C(t.j.a(b0.h(0,a9)));l.k();){k=l.gm()
if(!o.E(J.k(k,"name")))r.push(k)}n.F(["proxy-groups"],r)}r=t.s
j=new A.r(A.c(n.b.split("\n"),r),t.Q.a(new A.id()),t.U).R(0,"\n")
i=A.n(s,t.O)
for(l=new A.V(b4,A.j(b4).i("V<1,2>")).gq(0),h=t.a;l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.k();){d=e.gm()
c=d.a
d=J.aq(d.b,q.ga7(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cX(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cX(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aK<2>")
e=f.i("aH<f.E,d>")
b=A.eu(new A.aH(new A.aK(i,f),f.i("f<d>(f.E)").a(new A.ie()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.V(i,l.i("V<1,2>")).gq(0);l.k();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.k();){d=e.gm()
c=d.a
a2=B.a.aL(c,"Targets")
d=d.b
if(a2){d=J.aq(d,new A.ig(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.nr(j,j,f," (chain "+e+")")
a4=A.fs(a3)
a5=A.fu(a3)
a0.a2(0,a4)
for(f=new A.bg(a5,a5.r,a5.e,A.j(a5).i("bg<1,2>"));f.k();){a6=f.d
d=a6.a
if(a.E(d)&&a.h(0,d)!==a6.b)throw A.a(A.D("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.lH(j,A.lG("",a,a0))
s=B.d.ac(i,a8)
r=A.c([],r)
for(l=new A.V(a1,a1.$ti.i("V<1,2>")).gq(0);l.k();){g=l.d
h=g.a
f=i.h(0,h).E("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.d.ac(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.c4(r)+a7},
tu(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
kw:function kw(){},
k9:function k9(a){this.a=a},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
k7:function k7(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(a){this.a=a},
lM(a){var s,r,q,p,o,n,m,l=A.y(a),k=t.f,j=k.b(l)?l.h(0,"rule-providers"):null
if(j==null)return A.n(t.N,t.P)
if(!k.b(j))throw A.a(B.c9)
s=new A.j5()
r=t.N
q=A.n(r,t.P)
for(p=j.gN(),p=p.gq(p),o=t.z;p.k();){n=p.gm()
m=n.a
if(typeof m!="string"||!k.b(n.b))throw A.a(B.b0)
q.j(0,m,A.af(k.a(s.$1(n.b)),r,o))}return q},
nI(a){return new A.bA(A.r5(a),t.dj)},
r5(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l
return function $async$nI(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:m=t.g
l=m.a(s.h(0,"rules"))
l=J.C(l==null?[]:l)
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
l=l.gq(l)
case 7:if(!l.k()){r=8
break}n=m.a(l.gm())
n=J.C(n==null?[]:n)
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
tZ(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1={}
a1.a=a3
a3=a1.a=B.a.O(a3)
if(a3.length!==0){s=A.H("[,()\\r\\n]",!0)
s=s.b.test(a3)}else s=!0
if(s)throw A.a(B.cc)
r=A.lM(a2)
s=a5==null
q=!s
if(q&&!r.E(a5))throw A.a(B.bT)
if(a3!==a5&&r.E(a3))throw A.a(B.co)
p=a4.h(0,"type")
o=a4.h(0,"behavior")
n=a4.h(0,"format")
if(n==null)n="yaml"
m=t.s
if(!B.b.p(A.c(["http","file","inline"],m),p)||!B.b.p(A.c(["domain","ipcidr","classical"],m),o)||!B.b.p(A.c(["yaml","text","mrs"],m),n))throw A.a(B.aY)
if(J.p(n,"mrs"))l=J.p(o,"classical")||J.p(p,"inline")
else l=!1
if(l)throw A.a(B.cs)
l=J.b2(p)
if(l.T(p,"http")){k=a4.h(0,"url")
j=A.pD(A.m(k==null?"":k))
if(j==null||!B.b.p(A.c(["http","https"],m),j.gal())||j.gaM().length===0)throw A.a(B.bC)
i=a4.h(0,"interval")
if(i!=null)k=!A.b9(i)||i<0
else k=!1
if(k)throw A.a(B.cq)}k=a4.h(0,"path")
h=B.a.O(A.m(k==null?"":k))
if(l.T(p,"file")&&h.length===0)throw A.a(B.b8)
if(h.length!==0&&new A.V(r,A.j(r).i("V<1,2>")).P(0,new A.kI(a5,h)))throw A.a(B.bw)
if(l.T(p,"inline")){g=a4.h(0,"payload")
if(t.j.b(g)){l=J.F(g)
l=l.gJ(g)||l.P(g,new A.kJ())}else l=!0
if(l)throw A.a(B.bG)}f=A.n(t.N,t.z)
for(l=new A.V(r,A.j(r).i("V<1,2>")).gq(0);l.k();){e=l.d
k=e.a
d=k===a5
if(d)k=a1.a
f.j(0,k,d?a4:e.b)}if(s)f.j(0,a1.a,a4)
c=A.Q(a2)
c.F(["rule-providers"],f)
if(q&&a5!==a1.a){s=t.f
b=s.a(A.y(a2))
a=new A.kK(a1,a5)
q=t.j
if(q.b(b.h(0,"rules"))){l=A.c([],m)
for(k=J.C(t.R.a(b.h(0,"rules")));k.k();)l.push(a.$1(A.e(k.gm())))
c.F(["rules"],l)}a0=b.h(0,"sub-rules")
if(s.b(a0))for(s=a0.gN(),s=s.gq(s);s.k();){l=s.gm()
k=l.a
d=A.c([],m)
for(l=J.C(q.a(l.b));l.k();)d.push(a.$1(A.e(l.gm())))
c.F(["sub-rules",k],d)}}return c.b},
rI(a,b){var s,r
if(A.nI(t.f.a(A.y(a))).P(0,new A.jc(b)))throw A.a(B.bO)
s=A.lM(a)
s.I(0,b)
r=A.Q(a)
r.F(["rule-providers"],s)
return r.b},
j5:function j5(){},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(){},
kK:function kK(a,b){this.a=a
this.b=b},
kL:function kL(a){this.a=a},
jc:function jc(a){this.a=a},
nz(a){var s,r
try{s=B.e.cN(B.y.aC(B.v.b6(a)))
return s}catch(r){throw A.a(B.bX)}},
nN(a,b,c,d){var s,r,q,p,o="skip-cert-verify",n="client-fingerprint",m=t.s,l=b.a4(0,A.c(["sni","peer","serverName","servername"],m))
if(l.length!==0)a.j(0,c,l)
s=b.e5(A.c(["insecure","allowInsecure",o],m))
if(s!=null)a.j(0,o,s)
r=b.a4(0,A.c(["alpn"],m))
if(r.length!==0){q=t.e
q=new A.J(A.c(r.split(","),m),t.c.a(new A.iy()),q).br(0,q.i("l(z.E)").a(new A.iz()))
q=A.o(q,q.$ti.i("f.E"))
a.j(0,"alpn",q)}if(d){p=b.a4(0,A.c(["fp",n],m))
if(p.length!==0)a.j(0,n,p)}},
rc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="path",e=t.s,d=b.aT(0,A.c(["type","network"],e),"tcp")
if(d.length===0)d="tcp"
s=b.aT(0,A.c(["headerType"],e),"none")
if(d==="tcp"&&s==="http"&&J.p(a.h(0,"type"),"vless"))d="http"
else if(s.length!==0&&s!=="none")throw A.a(B.bf)
if(!B.b.p(J.p(a.h(0,"type"),"vless")?A.c(["tcp","ws","http","h2","grpc","xhttp"],e):A.c(["tcp","ws","grpc"],e),d))throw A.a(B.bz)
a.j(0,"network",d)
if(d==="tcp")return
if(d==="grpc"){r=b.a4(0,A.c(["serviceName","service-name","path"],e))
q=b.aT(0,A.c(["mode"],e),"gun")
if(q!=="gun"&&q.length!==0)throw A.a(B.bg)
e=t.N
a.j(0,"grpc-opts",A.a7(["grpc-service-name",r],e,e))
return}p=b.aT(0,A.c(["path"],e),"/")
o=b.a4(0,A.c(["host"],e))
if(d==="xhttp"){q=b.aT(0,A.c(["mode"],e),"auto")
if(!B.b.p(A.c(["auto","stream-one","stream-up","packet-up"],e),q))throw A.a(B.cw)
e=t.N
e=A.n(e,e)
e.j(0,f,p)
e.j(0,"mode",q)
if(o.length!==0)e.j(0,"host",o)
a.j(0,"xhttp-opts",e)}else if(d==="ws"){n=t.N
m=A.n(n,t.z)
m.j(0,f,p)
if(o.length!==0)m.j(0,"headers",A.a7(["Host",o],n,n))
l=b.a4(0,A.c(["ed"],e))
if(l.length!==0){k=A.aS(l,null)
if(k==null||k<0)throw A.a(B.ci)
m.j(0,"max-early-data",k)}j=b.a4(0,A.c(["eh"],e))
if(j.length!==0)m.j(0,"early-data-header-name",j)
a.j(0,"ws-opts",m)}else{n=t.U
i=A.o(new A.r(A.c(o.split(","),e),t.Q.a(new A.iA()),n),n.i("f.E"))
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
r1(a,b){var s,r,q,p,o=t.s,n=b.a4(0,A.c(["pbk","public-key"],o))
if(n.length===0)A.E(A.D("Node is missing Reality public key",null,null))
s=n
try{if(B.y.aC(B.v.b6(s)).length!==32)throw A.a(B.bh)}catch(r){throw A.a(B.ch)}q=b.a4(0,A.c(["sid","short-id"],o))
p=A.H("^[0-9a-fA-F]{0,16}$",!0)
if(!p.b.test(q)||(q.length&1)===1)throw A.a(B.bA)
b.a4(0,A.c(["spx"],o))
o=t.B.i("aP.S").a(B.y.aC(B.v.b6(s)))
o=B.a5.gc1().aC(o)
p=t.N
a.j(0,"reality-opts",A.a7(["public-key",A.K(o,"=",""),"short-id",q],p,p))},
r8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="mode"
if(b.length===0)return
s=t.s
r=A.c(b.split(";"),s)
q=B.b.bl(r,0)
p=t.N
o=A.n(p,p)
for(n=t.Q.a(new A.ix()),m=B.b.gq(r),n=new A.bo(m,n,t.fj);n.k();){l=m.gm()
k=B.a.au(l,"=")
j=k<0
i=j?l:B.a.v(l,0,k)
if(o.E(i))throw A.a(B.bm)
o.j(0,i,j?"true":B.a.D(l,k+1))}h=A.n(p,t.z)
if(B.b.p(A.c(["obfs-local","simple-obfs","obfs"],s),q)){p=o.I(0,"obfs")
g=p==null?o.I(0,d):p
if(g==null)g=""
if(!B.b.p(A.c(["http","tls"],s),g))throw A.a(B.c2)
h.j(0,d,g)
f=o.I(0,"obfs-host")
if(f==null)f=o.I(0,"host")
if(f!=null)h.j(0,"host",f)
a.j(0,"plugin","obfs")}else if(q==="v2ray-plugin"){g=o.I(0,d)
if(g==null)g="websocket"
if(g!=="websocket")throw A.a(B.c7)
h.j(0,d,g)
for(p=["host","path"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b!=null)h.j(0,l,b)}for(p=["tls","mux"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b==null)continue
if(!B.b.p(A.c(["true","false","1","0"],s),b))throw A.a(B.b3)
h.j(0,l,b==="true"||b==="1")}a.j(0,"plugin",q)}else throw A.a(B.cy)
if(o.a!==0)throw A.a(B.c5)
a.j(0,"plugin-opts",h)},
tr(a){var s,r,q
try{r=A.r0(a)
return r}catch(q){r=A.bF(q)
if(t.l.b(r)){s=r
throw A.a(A.D(s.ged(),null,null))}else throw A.a(B.J)}},
r0(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null,c3="password",c4="tls",c5="udp",c6="^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",c7="congestion-controller",c8="Node is missing Password",c9=d1.length,d0=!0
if(c9!==0)if(c9<=1048576){c9=A.H("\\s|%(?![0-9a-fA-F]{2})",!0)
c9=c9.b.test(d1)}else c9=d0
else c9=d0
if(c9)throw A.a(B.bE)
s=d1
if(J.mi(s,"ss://")){q=J.oS(s,A.H("[?#]",!0),5)
c9=q<0
p=c9?J.bG(s,5):J.oX(s,5,q)
if(!B.a.p(p,"@")){o=A.nz(p)
n=B.a.bk(o,"@")
if(n<0)throw A.a(B.bW)
d0=t.B.i("aP.S").a(B.I.aC(B.a.v(o,0,n)))
m=B.a5.gc1().aC(d0)
d0=B.a.D(o,n)
c9=c9?"":J.bG(s,q)
s="ss://"+m+d0+c9}}l=J.oR(s,"://")
if(l<0)throw A.a(B.J)
k=B.b.gU(B.a.bp(J.bG(s,l+3),A.H("[/?#]",!0)))
j=B.a.D(k,B.a.bk(k,"@")+1)
i=B.a.u(j,"[")?B.a.au(j,"]")+1:B.a.bk(j,":")
if(i>=0&&i<j.length&&j[i]===":"){h=B.a.D(j,i+1)
g=A.aS(h,c2)
c9=A.H("^\\d+$",!0)
if(!c9.b.test(h)||g==null||g<1||g>65535)throw A.a(B.af)}else g=c2
r=null
try{r=A.eU(s,0,c2)
c9=r.gaE()
A.ao(c9,0,c9.length,B.e,!1)
c9=r.gba()
A.ao(c9,0,c9.length,B.e,!1)}catch(f){throw A.a(B.J)}if(!B.b.p(B.cH,r.gal()))throw A.a(B.be)
if(r.gaM().length!==0)c9=r.gav().length!==0&&r.gav()!=="/"
else c9=!0
if(c9)throw A.a(B.bY)
e=r.gal()
A:{if("hy2"===e){c9="hysteria2"
break A}if("socks"===e){c9="socks5"
break A}if("https"===e){c9="http"
break A}c9=e
break A}d0=c9==="ss"
if(d0&&g==null)throw A.a(B.bv)
if(g==null)if(c9==="socks5")d=1080
else{c=e==="http"?80:443
d=c}else d=g
if(d<1||d>65535)throw A.a(B.af)
c=t.N
b=new A.hX(A.h7(r.gej(),c,c))
if(r.gek().gag().P(0,new A.is()))throw A.a(B.c6)
if(r.gba().length===0)a=e.toUpperCase()+" "+r.gaM()+":"+d
else{a=r.gba()
a=A.ao(a,0,a.length,B.e,!1)}a0=A.a7(["name",a,"type",c9,"server",r.gaM(),"port",d],c,t.z)
c=r.gaE()
a1=A.ao(c,0,c.length,B.e,!1)
if(c9==="http"||c9==="socks5"){a2=B.a.au(r.gaE(),":")
if(a1.length!==0){d0=a2<0?r.gaE():B.a.v(r.gaE(),0,a2)
a0.j(0,"username",A.ao(d0,0,d0.length,B.e,!1))
if(a2>=0){d0=B.a.D(r.gaE(),a2+1)
a0.j(0,c3,A.ao(d0,0,d0.length,B.e,!1))}}if(e==="https")a0.j(0,c4,!0)
if(c9==="socks5")a0.j(0,c5,!0)
if(r.gbE())throw A.a(B.aZ)}else if(d0){m=B.a.p(r.gaE(),":")?a1:A.nz(a1)
a3=B.a.au(m,":")
if(a3<=0)throw A.a(B.bc)
a4=B.a.v(m,0,a3)
if(!B.cP.p(0,a4))throw A.a(B.b2)
a0.j(0,"cipher",a4)
c9=B.a.D(m,a3+1)
if(c9.length===0)A.E(A.D(c8,c2,c2))
a0.j(0,c3,c9)
a0.j(0,c5,!0)
A.r8(a0,b.a4(0,A.c(["plugin"],t.s)))}else{d0=c9==="vless"
if(d0||c9==="trojan"){a0.j(0,c5,!0)
c=d0?"uuid":c3
if(d0){a=A.H(c6,!0)
if(!a.b.test(a1))A.E(B.ag)}else if(a1.length===0)A.E(A.D(c8,c2,c2))
a0.j(0,c,a1)
c=t.s
a=A.c(["security"],c)
a5=b.aT(0,a,d0?"none":c4)
if(B.b.p(A.c(["none","tls","reality"],c),a5))c9=c9==="trojan"&&a5==="none"
else c9=!0
if(c9)throw A.a(B.bM)
if(d0){a6=b.aT(0,A.c(["encryption"],c),"none")
if(a6!=="none"&&a6.length!==0)throw A.a(B.cz)
a0.j(0,c4,a5!=="none")}c9=a5!=="none"
if(c9)A.nN(a0,b,d0?"servername":"sni",!0)
if(a5==="reality")A.r1(a0,b)
A.rc(a0,b)
if(d0){a7=b.a4(0,A.c(["flow"],c))
if(a7.length!==0){if(a7!=="xtls-rprx-vision"||!c9||!J.p(a0.h(0,"network"),"tcp"))throw A.a(B.cj)
a0.j(0,"flow",a7)}a8=b.a4(0,A.c(["packetEncoding","packet-encoding"],c))
if(a8.length!==0){if(!B.b.p(A.c(["xudp","packetaddr"],c),a8))throw A.a(B.bH)
a0.j(0,"packet-encoding",a8)}}}else{a0.j(0,c5,!0)
d0=c9==="anytls"
if(d0){c=t.s
if(b.aT(0,A.c(["security"],c),c4)!=="tls"||b.aT(0,A.c(["type","network"],c),"tcp")!=="tcp")throw A.a(B.cu)}A.nN(a0,b,"sni",d0)
if(c9==="tuic"){a3=B.a.au(r.gaE(),":")
if(a3<0)throw A.a(B.cg)
c9=B.a.v(r.gaE(),0,a3)
c9=A.ao(c9,0,c9.length,B.e,!1)
d0=A.H(c6,!0)
if(!d0.b.test(c9))A.E(B.ag)
a0.j(0,"uuid",c9)
c9=B.a.D(r.gaE(),a3+1)
c9=A.ao(c9,0,c9.length,B.e,!1)
if(c9.length===0)A.E(A.D(c8,c2,c2))
a0.j(0,c3,c9)
c9=t.s
a9=b.a4(0,A.c(["congestion_control",c7],c9))
if(a9.length!==0){if(!B.b.p(A.c(["bbr","cubic","new_reno"],c9),a9))throw A.a(B.bs)
a0.j(0,c7,a9)}b0=b.a4(0,A.c(["udp_relay_mode","udp-relay-mode"],c9))
if(b0.length!==0){if(!B.b.p(A.c(["native","quic"],c9),b0))throw A.a(B.c3)
a0.j(0,"udp-relay-mode",b0)}for(c9=[A.c(["disable_sni","disable-sni"],c9),A.c(["reduce_rtt","reduce-rtt"],c9)],b1=0;b1<2;++b1){b2=c9[b1]
s=b.e5(b2)
if(s!=null)a0.j(0,B.b.gK(b2),s)}}else{if(a1.length===0)A.E(A.D(c8,c2,c2))
a0.j(0,c3,a1)
if(c9==="hysteria2"){for(c9=["up","down"],d0=t.s,b1=0;b1<2;++b1){b3=c9[b1]
s=b.a4(0,A.c([b3],d0))
if(s.length!==0){c=A.H("^\\d+(\\.\\d+)?(\\s*[KMG]?bps)?$",!1)
if(!c.b.test(s))throw A.a(B.bI)
a0.j(0,b3,s)}}b4=b.a4(0,A.c(["mport","ports"],d0))
if(b4.length!==0){for(c9=b4.split(","),c=c9.length,a=t.bR,b5=t.bz,b6=b5.i("z.E"),b1=0;b1<c;++b1){b7=A.o(new A.J(A.c(c9[b1].split("-"),d0),a.a(A.rB()),b5),b6)
b8=b7.length
b9=!0
if(b8!==0)if(b8<=2)if(!B.b.P(b7,new A.it()))if(b7.length===2){b8=B.b.gU(b7)
b8.toString
b9=B.b.gK(b7)
b9.toString
b9=b8>b9
b8=b9}else b8=!1
else b8=b9
else b8=b9
else b8=b9
if(b8)throw A.a(B.cf)}a0.j(0,"ports",b4)}c0=b.a4(0,A.c(["obfs"],d0))
c1=b.a4(0,A.c(["obfs-password","obfsPassword"],d0))
if(c0.length!==0){if(c0!=="salamander")throw A.a(B.ct)
a0.j(0,"obfs",c0)
if(c1.length===0)A.E(A.D("Node is missing Obfuscation password",c2,c2))
a0.j(0,"obfs-password",c1)}else if(c1.length!==0)throw A.a(B.cd)}}}}b.hf()
return a0},
hX:function hX(a){this.a=a},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
ix:function ix(){},
is:function is(){},
it:function it(){},
fn(a){var s,r,q
if(t.f.b(a)){s=A.n(t.z,t.X)
for(r=a.gN(),r=r.gq(r);r.k();){q=r.gm()
s.j(0,q.a,A.fn(q.b))}return s}if(t.j.b(a)){s=J.aX(a,A.tV(),t.X)
s=A.o(s,s.$ti.i("z.E"))
return s}return a},
rT(a){var s,r,q,p=A.y(a),o=t.f.b(p)?p.h(0,"proxies"):null
if(!t.j.b(o)||J.ci(o))return a
s=A.Q(a)
r=A.c([],t.v)
for(q=J.C(o);q.k();)r.push(A.ap(A.fn(q.gm()),B.f,B.h))
s.F(["proxies"],r)
return s.b},
nL(a,b){var s,r,q,p
if(b==null){s=J.l4(a,t.N)
for(r=a===1,q=0;q<a;++q)s[q]=r?"":""+(q+1)+"-"
p=s}else p=b
if(p.length!==a||A.aA(p,A.u(p).c).a!==a||B.b.P(p,new A.iw()))throw A.a(B.b7)
return p},
tU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy",d=A.nL(b,c)
if(b<1)return A.c([],t.s)
s=t.f
r=s.a(A.y(a))
q=A.k6(a)
p=A.aA(q,A.u(q).c)
o=J.l4(b,t.D)
for(q=t.t,n=0;n<b;++n)o[n]=A.c([],q)
q=t.g.a(r.h(0,"proxies"))
q=J.C(q==null?[]:q)
m=t.N
l=t.z
while(q.k()){k=A.af(s.a(A.fn(q.gm())),m,l)
j=A.e(k.h(0,"name"))
if(p.p(0,j))continue
i=B.b.bc(d,new A.kA(j))
if(i<0)i=B.b.au(d,"")
if(i<0)throw A.a(B.cv)
if(!(i<d.length))return A.b(d,i)
h=d[i]
g=h.length
k.j(0,"name",B.a.D(j,g))
f=k.h(0,e)
if(g!==0&&typeof f=="string"&&B.a.u(f,h))k.j(0,e,B.a.D(f,g))
if(!(i<o.length))return A.b(o,i)
B.b.t(o[i],k)}s=A.u(o)
q=s.i("J<1,d>")
s=A.o(new A.J(o,s.i("d(1)").a(new A.kB()),q),q.i("z.E"))
return s},
tj(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="name",a0="dialer-proxy",a1=A.nL(a2.length,a3)
if(a2.length===0){if(a3!=null)return"proxies: []\n"
throw A.a(B.cr)}s=A.c([],t.gT)
for(r=t.dY,q=t.gh,p=t.f,o=t.N,n=t.z,m=t.t,l=t.j,k=0;k<a2.length;++k){j=A.fr(a2[k],b,!1,b).a.ga6()
i=p.b(j)?j.h(0,"proxies"):b
if(!l.b(i)||J.ci(i))throw A.a(A.D("Subscription "+(k+1)+" has no embedded proxies",b,b))
h=A.c([],m)
for(g=J.C(i);g.k();){f=g.gm()
if(!p.b(f)||typeof f.h(0,a)!="string"||B.a.O(A.e(f.h(0,a))).length===0||typeof f.h(0,"type")!="string")throw A.a(A.D("Subscription "+(k+1)+" has a node without a name or type",b,b))
B.b.t(h,A.af(p.a(A.fn(f)),o,n))}if(new A.J(h,r.a(new A.jJ()),q).aJ(0).a!==h.length)throw A.a(A.D("Subscription "+(k+1)+" has duplicate node names",b,b))
B.b.t(s,h)}e=A.c([],m)
for(r=t.s,k=0;k<s.length;++k){q=A.n(o,o)
for(p=s[k],n=p.length,d=0;d<p.length;p.length===n||(0,A.Y)(p),++d){f=p[d]
m=A.e(f.h(0,a))
if(!(k<a1.length))return A.b(a1,k)
q.j(0,m,a1[k]+A.m(f.h(0,a)))}if(!(k<s.length))return A.b(s,k)
p=s[k]
n=p.length
d=0
for(;d<p.length;p.length===n||(0,A.Y)(p),++d){f=p[d]
f.j(0,a,q.h(0,f.h(0,a)))
c=f.h(0,a0)
if(q.E(c))f.j(0,a0,q.h(0,c))
else if(c!=null&&!B.b.p(A.c(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],r),c))f.I(0,a0)}if(!(k<s.length))return A.b(s,k)
B.b.a2(e,s[k])}r=A.Q("")
r.F([],A.a7(["proxies",e],o,t.D))
return r.b},
ro(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7="name",a8=A.y(b3),a9=t.S,b0=a9.b(a8)?a8.h(0,a6):null,b1=t.h
if(b1.b(b0))s=b0.gl(b0)===0&&!b4
else s=!0
if(s)throw A.a(B.cp)
r=A.ti(b0,b5)
s=t.s
q=A.c([],s)
for(p=J.a1(r),o=p.gq(r);o.k();){n=o.gm()
if(!a9.b(n)||typeof n.h(0,a7)!="string"||B.a.O(A.e(n.h(0,a7))).length===0||typeof n.h(0,"type")!="string")throw A.a(B.bU)
B.b.t(q,A.e(n.h(0,a7)))}o=t.N
if(A.aA(q,o).a!==q.length)throw A.a(B.c1)
m=b5==null
if(!m){l=a9.a(A.y(b5))
k=A.az(o)
j=t.g
i=j.a(l.h(0,a6))
i=J.C(i==null?[]:i)
while(i.k())k.t(0,A.e(J.k(i.gm(),a7)))
k.ht(q)
h=t.Y.a(l.h(0,"sub-rules"))
if(h==null){i=t.z
h=A.n(i,i)}j=j.a(l.h(0,"rules"))
j=A.o(A.N(j==null?[]:j,!0,o),o)
for(i=h.gag(),i=i.gq(i),g=t.j;i.k();)B.b.a2(j,A.N(g.a(i.gm()),!0,o))
i=j.length
f=0
for(;f<j.length;j.length===i||(0,A.Y)(j),++f){e=A.tK(j[f])
if(k.p(0,e))throw A.a(A.D("Node "+A.m(e)+" was removed from the subscription but is still referenced by rules; update the rules first; original configuration retained",null,null))}}d=m?b2:b5
c=a9.a(A.y(d))
b=b1.a(c.h(0,"proxy-groups"))
b1=A.mB(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],o)
for(o=A.j(b),k=new A.a5(b,b.gl(b),o.i("a5<t.E>")),o=o.i("t.E");k.k();){a=k.d
b1.t(0,A.e(J.k(a==null?o.a(a):a,a7)))}if(B.b.P(q,b1.ga7(b1)))throw A.a(B.c4)
a0=A.Q(d)
if(c.gG().p(0,"proxy-providers"))a0.I(0,["proxy-providers"])
a0.F(["proxies"],r)
for(o=t.g,a1=0;a1<b.gl(b);++a1){a=a9.a(b.h(0,a1))
if(a.gG().p(0,"use"))a0.I(0,["proxy-groups",a1,"use"])
k=o.a(a.h(0,a6))
if(k==null)k=[]
k=J.aq(k,new A.j0(q,b1))
a2=A.o(k,k.$ti.i("f.E"))
k=a2.length===0?A.c(["DIRECT"],s):a2
a0.F(["proxy-groups",a1,"proxies"],k)}a3=A.rn(a0.b,A.tA(d),b4)
a4=A.tB(m?b2:b5)
a5=a4.length===0||p.gJ(r)?a3:A.rM(a3,a4)
a9=A.u5(a5,A.k6(m?"":b5))
return A.tJ(A.lH(a9,m?"":b5),b5)},
iw:function iw(){},
kA:function kA(a){this.a=a},
kB:function kB(){},
jJ:function jJ(){},
j0:function j0(a,b){this.a=a
this.b=b},
qK(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.bc(r,new A.ir(b))
if(s>=0)return s}throw A.a(A.D("Proxy group "+b+" was not found in the configuration",null,null))},
fv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.y(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a1(d)
r=s.ad(d,new A.kg(),t.z).aJ(0)
q=t.s
p=t.Q
o=t.U
n=new A.r(A.c(a.split("\n"),q),p.a(new A.kh()),o)
if(!n.gJ(0)){s=t.N
m=A.af(t.f.a(B.d.aa(B.a.D(n.gU(0),24),null)),s,s)
m.aw(0,new A.ki(r))
for(s=B.q.gN(),s=s.gq(s);s.k();){l=s.gm()
k=new A.r(A.c(a.split("\n"),q),p.a(new A.kj(l)),o)
j=l.a
if(m.E(j)&&!k.gJ(0)){i=k.gq(0)
if(!i.k())A.E(A.a2())
m.j(0,j,A.e(B.d.aa(J.bG(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.k();){h=s.gm()
l=J.F(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.r(A.c(a.split("\n"),q),p.a(new A.kk(f)),o)
if(!e.gJ(0)){i=e.gq(0)
if(!i.k())A.E(A.a2())
m.j(0,g,A.e(B.d.aa(J.bG(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.ap.E(g)){l=A.ca(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
m8(a,b){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.kT()),t.U).R(0,"\n")
return"# Mclash group-filters: "+B.d.ac(b,null)+"\n"+s},
k_(a){var s,r,q=t.g.a(t.S.a(A.y(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aX(q,new A.k3(),t.z).aJ(0)
r=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.k4()),t.U)
if(!r.gq(0).k())return A.n(t.N,t.y)
q=A.af(t.f.a(B.d.aa(B.a.D(r.gU(0),23),null)),t.N,t.y)
q.aw(0,new A.k5(s))
return q},
oo(a,b){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.kP()),t.U).R(0,"\n")
return"# Mclash group-direct: "+B.d.ac(b,null)+"\n"+s},
nV(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.y(a1)),a0=a.h(0,"proxies")
if(t.h.b(a0))s=a0.gl(a0)===0
else s=!0
if(s)throw A.a(B.B)
s=A.j(a0)
r=s.i("J<t.E,d>")
q=A.o(new A.J(a0,s.i("d(t.E)").a(new A.j_()),r),r.i("z.E"))
p=A.Q(a1)
o=A.k_(a1)
for(s=new A.an(a2,a2.r,a2.e,A.j(a2).i("an<1>")),r=A.u(q),n=r.i("l(1)"),r=r.i("r<1>"),m=t.s;s.k();){l=s.d
k=A.qK(a,l)
j=b.a(J.k(a.h(0,"proxy-groups"),k))
i=a2.h(0,l)
i.toString
h=B.a.u(i,"(?i)")
if(h)g=B.a.D(i,4)
else g=i
f=A.H(g,!h)
i=A.c([],m)
e=o.h(0,l)
if(e==null?l==="\ud83d\ude80 Domestic":e)i.push("DIRECT")
B.b.a2(i,new A.r(q,n.a(f.ge7()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gG().p(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0)e=o.h(0,l)===!1
else e=!1
if(e)throw A.a(A.D("No nodes match "+l+"; adjust the regex or select DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.F(["proxy-groups",k,"proxies"],l)}return A.m8(p.b,a2)},
ir:function ir(a){this.a=a},
kg:function kg(){},
kh:function kh(){},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kT:function kT(){},
k3:function k3(){},
k4:function k4(){},
k5:function k5(a){this.a=a},
kP:function kP(){},
j_:function j_(){},
qJ(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.bc(r,new A.iq(b))
if(s>=0)return s}throw A.a(A.D("Proxy group "+b+" was not found in the configuration",null,null))},
tA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.y(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a1(d)
r=s.ad(d,new A.kb(),t.z).aJ(0)
q=t.s
p=t.Q
o=t.U
n=new A.r(A.c(a.split("\n"),q),p.a(new A.kc()),o)
if(!n.gJ(0)){s=t.N
m=A.af(t.f.a(B.d.aa(B.a.D(n.gU(0),24),null)),s,s)
m.aw(0,new A.kd(r))
for(s=B.q.gN(),s=s.gq(s);s.k();){l=s.gm()
k=new A.r(A.c(a.split("\n"),q),p.a(new A.ke(l)),o)
j=l.a
if(m.E(j)&&!k.gJ(0)){i=k.gq(0)
if(!i.k())A.E(A.a2())
m.j(0,j,A.e(B.d.aa(J.bG(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.k();){h=s.gm()
l=J.F(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.r(A.c(a.split("\n"),q),p.a(new A.kf(f)),o)
if(!e.gJ(0)){i=e.gq(0)
if(!i.k())A.E(A.a2())
m.j(0,g,A.e(B.d.aa(J.bG(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.ap.E(g)){l=A.ca(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
u6(a,b){var s=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.kS()),t.U).R(0,"\n")
return"# Mclash group-filters: "+B.d.ac(b,null)+"\n"+s},
tw(a){var s,r,q=t.g.a(t.S.a(A.y(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aX(q,new A.k0(),t.z).aJ(0)
r=new A.r(A.c(a.split("\n"),t.s),t.Q.a(new A.k1()),t.U)
if(!r.gq(0).k())return A.n(t.N,t.y)
q=A.af(t.f.a(B.d.aa(B.a.D(r.gU(0),23),null)),t.N,t.y)
q.aw(0,new A.k2(s))
return q},
rn(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=t.S,a0=a.a(A.y(a2)),a1=a0.h(0,"proxies")
if(t.h.b(a1))s=a1.gl(a1)===0&&!a4
else s=!0
if(s)throw A.a(B.B)
s=A.j(a1)
r=s.i("J<t.E,d>")
q=A.o(new A.J(a1,s.i("d(t.E)").a(new A.iZ()),r),r.i("z.E"))
p=A.Q(a2)
o=A.tw(a2)
for(s=new A.an(a3,a3.r,a3.e,A.j(a3).i("an<1>")),r=A.u(q),n=r.i("l(1)"),r=r.i("r<1>"),m=t.s,l=!a4;s.k();){k=s.d
j=A.qJ(a0,k)
i=a.a(J.k(a0.h(0,"proxy-groups"),j))
h=a3.h(0,k)
h.toString
g=B.a.u(h,"(?i)")
if(g)f=B.a.D(h,4)
else f=h
e=A.H(f,!g)
h=A.c([],m)
d=o.h(0,k)
if(d==null?k==="\ud83d\ude80 Domestic":d)h.push("DIRECT")
B.b.a2(h,new A.r(q,n.a(e.ge7()),r))
for(d=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],c=0;c<6;++c){b=d[c]
if(i.gG().p(0,b))p.I(0,["proxy-groups",j,b])}if(h.length===0&&o.h(0,k)===!1&&l)throw A.a(A.D("No nodes match "+k+"; adjust the regex or select DIRECT",null,null))
k=h.length===0?A.c(["DIRECT"],m):h
p.F(["proxy-groups",j,"proxies"],k)}return A.u6(p.b,a3)},
iq:function iq(a){this.a=a},
kb:function kb(){},
kc:function kc(){},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kS:function kS(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(a){this.a=a},
iZ:function iZ(){},
oh(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.d.aa(B.a.D(p,23),null))}return""},
rL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.O(b)
if(c.length!==0){s=A.H("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ak)
s=t.S
r=s.a(A.y(a)).h(0,"proxies")
if(!t.h.b(r)||r.gl(r)===0)throw A.a(B.B)
q=A.Q(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gl(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.p(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.b2(k)
if(!j.T(k,d)&&!j.T(k,"ws"))continue
i=j.T(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.af(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.af(h==null?A.n(p,p):h,p,p)
f.aw(0,new A.ji())
f.j(0,"Host",j.T(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.F(["proxies",m,i],g)}e=new A.r(A.c(q.b.split("\n"),n),t.Q.a(new A.jj()),t.U).R(0,"\n")
return"# Mclash HTTP/WS Host: "+B.d.ac(c,null)+"\n"+e},
ji:function ji(){},
jj:function jj(){},
tB(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.d.aa(B.a.D(p,23),null))}return""},
rM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.O(b)
if(c.length!==0){s=A.H("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ak)
s=t.S
r=s.a(A.y(a)).h(0,"proxies")
if(!t.h.b(r)||r.gl(r)===0)throw A.a(B.B)
q=A.Q(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gl(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.p(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.b2(k)
if(!j.T(k,d)&&!j.T(k,"ws"))continue
i=j.T(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.af(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.af(h==null?A.n(p,p):h,p,p)
f.aw(0,new A.jg())
f.j(0,"Host",j.T(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.F(["proxies",m,i],g)}e=new A.r(A.c(q.b.split("\n"),n),t.Q.a(new A.jh()),t.U).R(0,"\n")
return"# Mclash HTTP/WS Host: "+B.d.ac(c,null)+"\n"+e},
jg:function jg(){},
jh:function jh(){},
tt(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
qy(a,b,c,d,e){t._.a(a)
A.T(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
od(a,b,c){A.rp(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
rX(a,b,c,d){var s,r,q,p,o,n=A.n(d,c.i("q<0>"))
for(s=c.i("M<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.c([],s)
n.j(0,p,o)
p=o}else p=o
J.e7(p,q)}return n},
pc(a,b,c){var s,r,q,p,o=A.u(a),n=new J.bc(a,a.length,o.i("bc<1>"))
if(!n.k())throw A.a(A.bm("no elements"))
s=n.d
if(s==null)s=o.c.a(s)
for(o=o.c,r=1;n.k();r=q){q=r+1
p=n.d
s=b.$3(r,s,p==null?o.a(p):p)}return s},
o0(){var s,r,q,p,o=null
try{o=A.ll()}catch(s){if(t.g8.b(A.bF(s))){r=$.ip
if(r!=null)return r
throw s}else throw s}if(J.p(o,$.ny)){r=$.ip
r.toString
return r}$.ny=o
if($.ma()===$.e4())r=$.ip=o.eo(".").n(0)
else{q=o.d4()
p=q.length-1
r=$.ip=p===0?q:B.a.v(q,0,p)}return r},
ob(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
o3(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.b(a,b)
if(!A.ob(a.charCodeAt(b)))return q
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
t7(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gU(0)
for(r=A.b0(a,1,null,a.$ti.i("z.E")),q=r.$ti,r=new A.a5(r,r.gl(0),q.i("a5<z.E>")),q=q.i("z.E");r.k();){p=r.d
if(!J.p(p==null?q.a(p):p,s))return!1}return!0},
tH(a,b,c){var s=B.b.au(a,null)
if(s<0)throw A.a(A.W(A.m(a)+" contains no null elements."))
B.b.j(a,s,b)},
oj(a,b,c){var s=B.b.au(a,b)
if(s<0)throw A.a(A.W(A.m(a)+" contains no elements matching "+b.n(0)+"."))
B.b.j(a,s,null)},
rC(a,b){var s,r,q,p
for(s=new A.aO(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
jl(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.af(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.au(a,b)
while(r!==-1){q=r===0?0:B.a.ae(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.af(a,b,r+1)}return null},
u3(a,b,c,d){var s=c!=null
if(s)if(c<0)throw A.a(A.a8("position must be greater than or equal to 0."))
else if(c>a.length)throw A.a(A.a8("position must be less than or equal to the string length."))
if(s&&d!=null&&c+d>a.length)throw A.a(A.a8("position plus length must not go beyond the end of the string."))},
y(a){return A.fr(a,null,!1,null).a.ga6()},
fr(a,b,c,d){var s,r,q=A.mC(a,b,!1,d),p=q.c5()
if(p==null){s=q.d
return new A.dC(new A.ar(null,B.h,s),s)}r=q.c5()
if(r!=null)throw A.a(A.I("Only expected one document.",r.b))
return p},
tc(a){var s=A.mC(a,null,!1,null),r=A.c([],t.gw),q=s.c5()
while(q!=null){B.b.t(r,q)
q=s.c5()}return r},
tL(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.O(a[r]))}else s=!1
if(!s)break;--r}return r},
tK(a){var s,r=A.c(a.split(","),t.s)
if(B.a.O(B.b.gU(r))==="SUB-RULE"||r.length<2)return null
s=A.tL(r)
if(!(s>=0&&s<r.length))return A.b(r,s)
return B.a.O(r[s])},
lX(a){a=A.K(a,"# Mclash OpenWrt \u673a\u573a\u524d\u7f00: ","# Mclash OpenWrt subscription-prefixes: ")
a=A.K(a,"# Mclash OpenWrt \u673a\u573a\u540d\u79f0: ","# Mclash OpenWrt subscription-names: ")
a=A.K(a,"# Mclash OpenWrt \u673a\u573a\u7528\u91cf: ","# Mclash OpenWrt subscription-usage: ")
a=A.K(a,"# Mclash OpenWrt \u8ba2\u9605\u94fe\u63a5: ","# Mclash OpenWrt subscription-urls: ")
a=A.K(a,"# Mclash OpenWrt \u63a5\u7ba1: ","# Mclash OpenWrt capture: ")
a=A.K(a,"# Mclash OpenWrt \u63a7\u5236: true","# Mclash OpenWrt controller: true")
a=A.K(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ","# Mclash group-filters: ")
a=A.K(a,"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ","# Mclash group-direct: ")
a=A.K(a,"# Mclash \u56fd\u5185\u6b63\u5219: ","# Mclash domestic-filter: ")
a=A.K(a,"# Mclash \u56fd\u5916\u6b63\u5219: ","# Mclash foreign-filter: ")
a=A.K(a,"# Mclash \u5168\u5c40\u94fe\u8def: ","# Mclash global-chain: ")
a=A.K(a,"# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash front-chain ")
a=A.K(a,"# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash back-chain ")
a=A.K(a,"# Mclash \u624b\u52a8\u8282\u70b9: ","# Mclash manual-nodes: ")
a=A.K(a,"# Mclash \u8282\u70b9\u94fe\u8def: ","# Mclash node-chains: ")
a=A.K(a,"# Mclash \u8282\u70b9\u94fe\u8def ","# Mclash node-chain ")
a=A.K(a,"# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash chain ")
a=A.K(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ","# Mclash chain-groups: ")
a=A.K(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ","# Mclash chain-settings: ")
a=A.K(a,"# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605","# Mclash default subscription")
a=A.K(a,"# Mclash \u8ba2\u9605\u7528\u91cf: ","# Mclash subscription-usage: ")
a=A.K(a,"# Mclash \u8ba2\u9605\u914d\u7f6e\u6a21\u677f","# Mclash subscription configuration template")
a=A.K(a,"# Mclash \u4ee3\u7406\u7ec4\u300c","# Mclash proxy group [")
a=A.K(a,"\ud83d\ude80 \u56fd\u5185","\ud83d\ude80 Domestic")
a=A.K(a,"\ud83c\udf0d \u56fd\u5916","\ud83c\udf0d Foreign")
a=A.K(a,"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3","\ud83d\udd17 Back-chain entry")
return A.K(a,"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9","\ud83d\udd17 Proxy chain")}},B={}
var w=[A,J,B]
var $={}
A.l7.prototype={}
J.en.prototype={
T(a,b){return a===b},
gX(a){return A.eF(a)},
n(a){return"Instance of '"+A.eG(a)+"'"},
gaD(a){return A.ba(A.lD(this))}}
J.ep.prototype={
n(a){return String(a)},
gX(a){return a?519018:218159},
gaD(a){return A.ba(t.y)},
$iac:1,
$il:1}
J.d9.prototype={
T(a,b){return null==b},
n(a){return"null"},
gX(a){return 0},
$iac:1,
$ibi:1}
J.db.prototype={$iaw:1}
J.bv.prototype={
gX(a){return 0},
n(a){return String(a)}}
J.eD.prototype={}
J.cE.prototype={}
J.bf.prototype={
n(a){var s=a[$.oq()]
if(s==null)s=a[$.m9()]
if(s==null)return this.eA(a)
return"JavaScript function for "+J.am(s)},
$ibd:1}
J.cu.prototype={
gX(a){return 0},
n(a){return String(a)}}
J.cv.prototype={
gX(a){return 0},
n(a){return String(a)}}
J.M.prototype={
t(a,b){A.u(a).c.a(b)
a.$flags&1&&A.G(a,29)
a.push(b)},
bl(a,b){A.T(b)
a.$flags&1&&A.G(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.hh(b,null))
return a.splice(b,1)[0]},
bh(a,b,c){var s
A.u(a).c.a(c)
a.$flags&1&&A.G(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.hh(b,null))
a.splice(b,0,c)},
cW(a,b,c){var s,r,q
A.u(a).i("f<1>").a(c)
a.$flags&1&&A.G(a,"insertAll",2)
s=a.length
A.cA(b,0,s,"index")
r=c.length
a.length=s+r
q=b+r
this.am(a,q,a.length,a,b)
this.bo(a,b,q,c)},
el(a){a.$flags&1&&A.G(a,"removeLast",1)
if(a.length===0)throw A.a(A.dZ(a,-1))
return a.pop()},
I(a,b){var s
a.$flags&1&&A.G(a,"remove",1)
for(s=0;s<a.length;++s)if(J.p(a[s],b)){a.splice(s,1)
return!0}return!1},
aw(a,b){A.u(a).i("l(1)").a(b)
a.$flags&1&&A.G(a,16)
this.dL(a,b,!0)},
dL(a,b,c){var s,r,q,p,o
A.u(a).i("l(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.a(A.U(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
aP(a,b){var s=A.u(a)
return new A.r(a,s.i("l(1)").a(b),s.i("r<1>"))},
a2(a,b){var s
A.u(a).i("f<1>").a(b)
a.$flags&1&&A.G(a,"addAll",2)
if(Array.isArray(b)){this.eK(a,b)
return}for(s=J.C(b);s.k();)a.push(s.gm())},
eK(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.U(a))
for(r=0;r<s;++r)a.push(b[r])},
bC(a){a.$flags&1&&A.G(a,"clear","clear")
a.length=0},
ap(a,b){var s,r
A.u(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.U(a))}},
ad(a,b,c){var s=A.u(a)
return new A.J(a,s.a9(c).i("1(2)").a(b),s.i("@<1>").a9(c).i("J<1,2>"))},
R(a,b){var s,r=A.aL(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.m(a[s]))
return r.join(b)},
c4(a){return this.R(a,"")},
a4(a,b){return A.b0(a,0,A.fo(b,"count",t.p),A.u(a).c)},
aq(a,b){return A.b0(a,b,null,A.u(a).c)},
bg(a,b,c,d){var s,r,q
d.a(b)
A.u(a).a9(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.U(a))}return r},
V(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gU(a){if(a.length>0)return a[0]
throw A.a(A.a2())},
gK(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.a2())},
gev(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.a(A.a2())
throw A.a(A.pb())},
am(a,b,c,d,e){var s,r,q,p
A.u(a).i("f<1>").a(d)
a.$flags&2&&A.G(a,5)
A.bj(b,c,a.length)
s=c-b
if(s===0)return
A.ag(e,"skipCount")
r=d
q=J.F(r)
if(e+s>q.gl(r))throw A.a(A.mv())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,e+p)},
bo(a,b,c,d){return this.am(a,b,c,d,0)},
bD(a,b,c,d){var s
a.$flags&2&&A.G(a,"fillRange")
A.bj(b,c,a.length)
A.u(a).c.a(d)
for(s=b;s<c;++s)a[s]=d},
P(a,b){var s,r
A.u(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.U(a))}return!1},
aW(a,b){var s,r
A.u(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.U(a))}return!0},
ca(a,b){var s,r,q,p,o,n=A.u(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.G(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aQ()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.rt(b,2))
if(p>0)this.fG(a,p)},
fG(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
au(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.p(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.p(a[s],b))return!0
return!1},
gJ(a){return a.length===0},
gaN(a){return a.length!==0},
n(a){return A.fY(a,"[","]")},
b0(a,b){var s=A.c(a.slice(0),A.u(a))
return s},
b_(a){return this.b0(a,!0)},
gq(a){return new J.bc(a,a.length,A.u(a).i("bc<1>"))},
gX(a){return A.eF(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.G(a,"set length","change the length of")
if(b>a.length)A.u(a).c.a(null)
a.length=b},
h(a,b){A.T(b)
if(!(b>=0&&b<a.length))throw A.a(A.dZ(a,b))
return a[b]},
j(a,b,c){A.u(a).c.a(c)
a.$flags&2&&A.G(a)
if(!(b>=0&&b<a.length))throw A.a(A.dZ(a,b))
a[b]=c},
bc(a,b){var s
A.u(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
hl(a,b){var s,r
A.u(a).i("l(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.b(a,r)
if(b.$1(a[r]))return r}return-1},
$iv:1,
$if:1,
$iq:1}
J.eo.prototype={
hz(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.fZ.prototype={}
J.bc.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.Y(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iL:1}
J.da.prototype={
ao(a,b){var s
A.nv(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcY(b)
if(this.gcY(a)===s)return 0
if(this.gcY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcY(a){return a===0?1/a<0:a<0},
hv(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.O(""+a+".toInt()"))},
h6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.O(""+a+".ceil()"))},
hx(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.a9(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.b(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.E(A.O("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.b(p,1)
s=p[1]
if(3>=r)return A.b(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.a.ah("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aF(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
eH(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
ai(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.O("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
b1(a,b){if(b<0)throw A.a(A.cc(b))
return b>31?0:a<<b>>>0},
b2(a,b){var s
if(b<0)throw A.a(A.cc(b))
if(a>0)s=this.cG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aH(a,b){var s
if(a>0)s=this.cG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fR(a,b){if(0>b)throw A.a(A.cc(b))
return this.cG(a,b)},
cG(a,b){return b>31?0:a>>>b},
gaD(a){return A.ba(t.H)},
$ibE:1}
J.d8.prototype={
ge3(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.ai(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaD(a){return A.ba(t.p)},
$iac:1,
$ih:1}
J.eq.prototype={
gaD(a){return A.ba(t.i)},
$iac:1}
J.bu.prototype={
c_(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.fb(b,a,c)},
bB(a,b){return this.c_(a,b,0)},
bF(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.b(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.cD(c,a)},
aL(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.D(a,r-s)},
d3(a,b,c){A.cA(0,0,a.length,"startIndex")
return A.tS(a,b,c,0)},
bp(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.b4){s=b.e
s=!(s==null?b.e=b.eQ():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.eU(a,b)}},
aZ(a,b,c,d){var s=A.bj(b,c,a.length)
return A.m4(a,b,s,d)},
eU(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.l_(b,a),s=s.gq(s),r=0,q=1;s.k();){p=s.gm()
o=p.gC()
n=p.gH()
q=n-o
if(q===0&&r===o)continue
B.b.t(m,this.v(a,r,o))
r=n}if(r<a.length||q>0)B.b.t(m,this.D(a,r))
return m},
a5(a,b,c){var s
t.eh.a(b)
if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.oT(b,a,c)!=null},
u(a,b){return this.a5(a,b,0)},
v(a,b,c){return a.substring(b,A.bj(b,c,a.length))},
D(a,b){return this.v(a,b,null)},
O(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.pf(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.my(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
hy(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.b(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.my(r,s))},
ah(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.aT)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
hn(a,b){var s=b-a.length
if(s<=0)return a
return a+this.ah(" ",s)},
af(a,b,c){var s,r,q,p
if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string")return a.indexOf(b,c)
if(b instanceof A.b4){s=b.cr(a,c)
return s==null?-1:s.b.index}for(r=a.length,q=J.bD(b),p=c;p<=r;++p)if(q.bF(b,a,p)!=null)return p
return-1},
au(a,b){return this.af(a,b,0)},
ae(a,b,c){var s,r,q
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string"){s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)}for(s=J.bD(b),q=c;q>=0;--q)if(s.bF(b,a,q)!=null)return q
return-1},
bk(a,b){return this.ae(a,b,null)},
p(a,b){return A.tN(a,b,0)},
ao(a,b){var s
A.e(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gX(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaD(a){return A.ba(t.N)},
gl(a){return a.length},
h(a,b){A.T(b)
if(!(b>=0&&b<a.length))throw A.a(A.dZ(a,b))
return a[b]},
$iac:1,
$icy:1,
$id:1}
A.cw.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.aO.prototype={
gl(a){return this.a.length},
h(a,b){var s
A.T(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.hl.prototype={}
A.v.prototype={}
A.z.prototype={
gq(a){var s=this
return new A.a5(s,s.gl(s),A.j(s).i("a5<z.E>"))},
gJ(a){return this.gl(this)===0},
gU(a){if(this.gl(this)===0)throw A.a(A.a2())
return this.V(0,0)},
gK(a){var s=this
if(s.gl(s)===0)throw A.a(A.a2())
return s.V(0,s.gl(s)-1)},
p(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(J.p(r.V(0,s),b))return!0
if(q!==r.gl(r))throw A.a(A.U(r))}return!1},
aW(a,b){var s,r,q=this
A.j(q).i("l(z.E)").a(b)
s=q.gl(q)
for(r=0;r<s;++r){if(!b.$1(q.V(0,r)))return!1
if(s!==q.gl(q))throw A.a(A.U(q))}return!0},
P(a,b){var s,r,q=this
A.j(q).i("l(z.E)").a(b)
s=q.gl(q)
for(r=0;r<s;++r){if(b.$1(q.V(0,r)))return!0
if(s!==q.gl(q))throw A.a(A.U(q))}return!1},
c3(a,b){var s,r,q,p=this
A.j(p).i("l(z.E)").a(b)
s=p.gl(p)
for(r=0;r<s;++r){q=p.V(0,r)
if(b.$1(q))return q
if(s!==p.gl(p))throw A.a(A.U(p))}throw A.a(A.a2())},
R(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.V(0,0))
if(o!==p.gl(p))throw A.a(A.U(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.V(0,q))
if(o!==p.gl(p))throw A.a(A.U(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.V(0,q))
if(o!==p.gl(p))throw A.a(A.U(p))}return r.charCodeAt(0)==0?r:r}},
c4(a){return this.R(0,"")},
aP(a,b){return this.br(0,A.j(this).i("l(z.E)").a(b))},
ad(a,b,c){var s=A.j(this)
return new A.J(this,s.a9(c).i("1(z.E)").a(b),s.i("@<z.E>").a9(c).i("J<1,2>"))},
hr(a,b){var s,r,q,p=this
A.j(p).i("z.E(z.E,z.E)").a(b)
s=p.gl(p)
if(s===0)throw A.a(A.a2())
r=p.V(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.V(0,q))
if(s!==p.gl(p))throw A.a(A.U(p))}return r},
aq(a,b){return A.b0(this,b,null,A.j(this).i("z.E"))},
b0(a,b){var s=A.o(this,A.j(this).i("z.E"))
return s},
b_(a){return this.b0(0,!0)},
aJ(a){var s,r=this,q=A.la(A.j(r).i("z.E"))
for(s=0;s<r.gl(r);++s)q.t(0,r.V(0,s))
return q}}
A.bV.prototype={
eJ(a,b,c,d){var s,r=this.b
A.ag(r,"start")
s=this.c
if(s!=null){A.ag(s,"end")
if(r>s)throw A.a(A.a9(r,0,s,"start",null))}},
geY(){var s=J.a6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfT(){var s=J.a6(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.a6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
V(a,b){var s=this,r=s.gfT()+b
if(b<0||r>=s.geY())throw A.a(A.ek(b,s.gl(0),s,null,"index"))
return J.l0(s.a,r)},
aq(a,b){var s,r,q=this
A.ag(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bJ(q.$ti.i("bJ<1>"))
return A.b0(q.a,s,r,q.$ti.c)},
a4(a,b){var s,r,q,p=this
A.ag(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.b0(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.b0(p.a,r,q,p.$ti.c)}},
b0(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.F(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.l5(0,n):J.mw(0,n)}r=A.aL(s,m.V(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.b.j(r,q,m.V(n,o+q))
if(m.gl(n)<l)throw A.a(A.U(p))}return r},
b_(a){return this.b0(0,!0)}}
A.a5.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.F(q),o=p.gl(q)
if(r.b!==o)throw A.a(A.U(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.V(q,s);++r.c
return!0},
$iL:1}
A.bh.prototype={
gq(a){return new A.df(J.C(this.a),this.b,A.j(this).i("df<1,2>"))},
gl(a){return J.a6(this.a)},
gJ(a){return J.ci(this.a)},
gU(a){return this.b.$1(J.mh(this.a))},
gK(a){return this.b.$1(J.l1(this.a))},
V(a,b){return this.b.$1(J.l0(this.a,b))}}
A.bI.prototype={$iv:1}
A.df.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iL:1}
A.J.prototype={
gl(a){return J.a6(this.a)},
V(a,b){return this.b.$1(J.l0(this.a,b))}}
A.r.prototype={
gq(a){return new A.bo(J.C(this.a),this.b,this.$ti.i("bo<1>"))},
ad(a,b,c){var s=this.$ti
return new A.bh(this,s.a9(c).i("1(2)").a(b),s.i("@<1>").a9(c).i("bh<1,2>"))}}
A.bo.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iL:1}
A.aH.prototype={
gq(a){return new A.d7(J.C(this.a),this.b,B.a6,this.$ti.i("d7<1,2>"))}}
A.d7.prototype={
gm(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.C(r.$1(s.gm()))
q.c=p}else return!1}q.d=q.c.gm()
return!0},
$iL:1}
A.bX.prototype={
gq(a){var s=this.a
return new A.dv(s.gq(s),this.b,A.j(this).i("dv<1>"))}}
A.d5.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(r>s)return s
return r},
$iv:1}
A.dv.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gm(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gm()},
$iL:1}
A.bk.prototype={
aq(a,b){A.cj(b,"count",t.p)
A.ag(b,"count")
return new A.bk(this.a,this.b+b,A.j(this).i("bk<1>"))},
gq(a){var s=this.a
return new A.dn(s.gq(s),this.b,A.j(this).i("dn<1>"))}}
A.cp.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
aq(a,b){A.cj(b,"count",t.p)
A.ag(b,"count")
return new A.cp(this.a,this.b+b,this.$ti)},
$iv:1}
A.dn.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gm(){return this.a.gm()},
$iL:1}
A.bJ.prototype={
gq(a){return B.a6},
gJ(a){return!0},
gl(a){return 0},
gU(a){throw A.a(A.a2())},
gK(a){throw A.a(A.a2())},
V(a,b){throw A.a(A.a9(b,0,0,"index",null))},
p(a,b){return!1},
aW(a,b){this.$ti.i("l(1)").a(b)
return!0},
P(a,b){this.$ti.i("l(1)").a(b)
return!1},
c3(a,b){this.$ti.i("l(1)").a(b)
throw A.a(A.a2())},
R(a,b){return""},
aP(a,b){this.$ti.i("l(1)").a(b)
return this},
ad(a,b,c){this.$ti.a9(c).i("1(2)").a(b)
return new A.bJ(c.i("bJ<0>"))},
aq(a,b){A.ag(b,"count")
return this},
b0(a,b){var s=J.l5(0,this.$ti.c)
return s},
b_(a){return this.b0(0,!0)}}
A.d6.prototype={
k(){return!1},
gm(){throw A.a(A.a2())},
$iL:1}
A.dA.prototype={
gq(a){return new A.dB(J.C(this.a),this.$ti.i("dB<1>"))}}
A.dB.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gm()))return!0
return!1},
gm(){return this.$ti.c.a(this.a.gm())},
$iL:1}
A.be.prototype={
gl(a){var s=this.a
return s.gl(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a
return new A.b8(this.b,s.gU(s))},
V(a,b){return new A.b8(b+this.b,this.a.V(0,b))},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b9(s)){A.T(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.bq()
n=this.a.aq(0,p-this.b)
q=n.gq(n)
return q.k()&&J.p(q.gm(),o)}return!1},
aq(a,b){A.cj(b,"count",t.p)
A.ag(b,"count")
return new A.be(this.a.aq(0,b),b+this.b,A.j(this).i("be<1>"))},
gq(a){var s=this.a
return new A.bK(s.gq(s),this.b,A.j(this).i("bK<1>"))}}
A.co.prototype={
gK(a){var s,r=this.a,q=r.gl(r)
if(q<=0)throw A.a(A.a2())
s=r.gK(r)
if(q!==r.gl(r))throw A.a(A.U(this))
return new A.b8(q-1+this.b,s)},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b9(s)){A.T(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.bq()
q=p-this.b
n=this.a
return q<n.gl(n)&&J.p(n.V(0,q),o)}return!1},
aq(a,b){A.cj(b,"count",t.p)
A.ag(b,"count")
return new A.co(this.a.aq(0,b),this.b+b,this.$ti)},
$iv:1}
A.bK.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gm(){var s=this.c
return s>=0?new A.b8(this.b+s,this.a.gm()):A.E(A.a2())},
$iL:1}
A.ay.prototype={
sl(a,b){throw A.a(A.O("Cannot change the length of a fixed-length list"))},
t(a,b){A.aa(a).i("ay.E").a(b)
throw A.a(A.O("Cannot add to a fixed-length list"))},
aw(a,b){A.aa(a).i("l(ay.E)").a(b)
throw A.a(A.O("Cannot remove from a fixed-length list"))}}
A.aC.prototype={
j(a,b,c){A.j(this).i("aC.E").a(c)
throw A.a(A.O("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.a(A.O("Cannot change the length of an unmodifiable list"))},
t(a,b){A.j(this).i("aC.E").a(b)
throw A.a(A.O("Cannot add to an unmodifiable list"))},
aw(a,b){A.j(this).i("l(aC.E)").a(b)
throw A.a(A.O("Cannot remove from an unmodifiable list"))},
ca(a,b){A.j(this).i("h(aC.E,aC.E)?").a(b)
throw A.a(A.O("Cannot modify an unmodifiable list"))},
am(a,b,c,d,e){A.j(this).i("f<aC.E>").a(d)
throw A.a(A.O("Cannot modify an unmodifiable list"))},
bo(a,b,c,d){return this.am(0,b,c,d,0)}}
A.cF.prototype={}
A.fa.prototype={
gl(a){return J.a6(this.a)},
V(a,b){var s=J.a6(this.a)
if(0>b||b>=s)A.E(A.ek(b,s,this,null,"index"))
return b}}
A.de.prototype={
h(a,b){return this.E(b)?J.k(this.a,A.T(b)):null},
gl(a){return J.a6(this.a)},
gag(){return A.b0(this.a,0,null,this.$ti.c)},
gG(){return new A.fa(this.a)},
gJ(a){return J.ci(this.a)},
b4(a){return J.bs(this.a,a)},
E(a){return A.b9(a)&&a>=0&&a<J.a6(this.a)},
ap(a,b){var s,r,q,p
this.$ti.i("~(h,1)").a(b)
s=this.a
r=J.F(s)
q=r.gl(s)
for(p=0;p<q;++p){b.$2(p,r.h(s,p))
if(q!==r.gl(s))throw A.a(A.U(s))}}}
A.bP.prototype={
gl(a){return J.a6(this.a)},
V(a,b){var s=this.a,r=J.F(s)
return r.V(s,r.gl(s)-1-b)}}
A.b8.prototype={$r:"+(1,2)",$s:1}
A.cL.prototype={$r:"+column,type(1,2)",$s:2}
A.c7.prototype={$r:"+compactCharOffset,lineEndingIndex(1,2)",$s:3}
A.cM.prototype={$r:"+end,start(1,2)",$s:4}
A.dN.prototype={$r:"+indent,trailingBreaks(1,2)",$s:5}
A.cN.prototype={$r:"+nearestLineEnding,nextNodeColStart(1,2)",$s:6}
A.dO.prototype={$r:"+index,keyNode,valueNode(1,2,3)",$s:7}
A.d1.prototype={}
A.d0.prototype={
gJ(a){return this.gl(this)===0},
n(a){return A.lc(this)},
j(a,b,c){var s=A.j(this)
s.c.a(b)
s.y[1].a(c)
A.mr()},
I(a,b){A.mr()},
gN(){return new A.bA(this.hd(),A.j(this).i("bA<P<1,2>>"))},
hd(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gG(),o=o.gq(o),n=A.j(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.k()){r=3
break}l=o.gm()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ix:1}
A.aQ.prototype={
gl(a){return this.b.length},
gdw(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
b4(a){return B.b.p(this.b,a)},
E(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.E(b))return null
return this.b[this.a[b]]},
ap(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gdw()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gG(){return new A.c3(this.gdw(),this.$ti.i("c3<1>"))},
gag(){return new A.c3(this.b,this.$ti.i("c3<2>"))}}
A.c3.prototype={
gl(a){return this.a.length},
gJ(a){return 0===this.a.length},
gq(a){var s=this.a
return new A.c4(s,s.length,this.$ti.i("c4<1>"))}}
A.c4.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iL:1}
A.d2.prototype={
t(a,b){A.j(this).c.a(b)
A.ms()},
I(a,b){A.ms()}}
A.d3.prototype={
gl(a){return this.b},
gJ(a){return this.b===0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.c4(s,s.length,r.$ti.i("c4<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.el.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.cr&&this.a.T(0,b.a)&&A.lR(this)===A.lR(b)},
gX(a){return A.ez(this.a,A.lR(this),B.n,B.n)},
n(a){var s=B.b.R([A.ba(this.$ti.c)],", ")
return this.a.n(0)+" with "+("<"+s+">")}}
A.cr.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.t6(A.j3(this.a),this.$ti)}}
A.dm.prototype={}
A.hp.prototype={
aS(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.di.prototype={
n(a){return"Null check operator used on a null value"}}
A.er.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eR.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ey.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iav:1}
A.au.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ol(r==null?"unknown":r)+"'"},
$ibd:1,
ghC(){return this},
$C:"$1",
$R:1,
$D:null}
A.eb.prototype={$C:"$0",$R:0}
A.ec.prototype={$C:"$2",$R:2}
A.eP.prototype={}
A.eN.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ol(s)+"'"}}
A.cm.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cm))return!1
return this.$_target===b.$_target&&this.a===b.a},
gX(a){return(A.e1(this.a)^A.eF(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eG(this.a)+"'")}}
A.eH.prototype={
n(a){return"RuntimeError: "+this.a}}
A.aI.prototype={
gl(a){return this.a},
gJ(a){return this.a===0},
gG(){return new A.ai(this,A.j(this).i("ai<1>"))},
gag(){return new A.aK(this,A.j(this).i("aK<2>"))},
gN(){return new A.V(this,A.j(this).i("V<1,2>"))},
E(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.e8(a)},
e8(a){var s=this.d
if(s==null)return!1
return this.bj(s[this.bi(a)],a)>=0},
b4(a){return new A.ai(this,A.j(this).i("ai<1>")).P(0,new A.h0(this,a))},
a2(a,b){A.j(this).i("x<1,2>").a(b).ap(0,new A.h_(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.e9(b)},
e9(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bi(a)]
r=this.bj(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.j(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.d8(s==null?q.b=q.cv():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.d8(r==null?q.c=q.cv():r,b,c)}else q.eb(b,c)},
eb(a,b){var s,r,q,p,o=this,n=A.j(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cv()
r=o.bi(a)
q=s[r]
if(q==null)s[r]=[o.cw(a,b)]
else{p=o.bj(q,a)
if(p>=0)q[p].b=b
else q.push(o.cw(a,b))}},
ei(a,b){var s,r,q=this,p=A.j(q)
p.c.a(a)
p.i("2()").a(b)
if(q.E(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
I(a,b){var s=this
if(typeof b=="string")return s.dK(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.dK(s.c,b)
else return s.ea(b)},
ea(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bi(a)
r=n[s]
q=o.bj(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dY(p)
if(r.length===0)delete n[s]
return p.b},
bC(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cu()}},
ap(a,b){var s,r,q=this
A.j(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.U(q))
s=s.c}},
d8(a,b,c){var s,r=A.j(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cw(b,c)
else s.b=c},
dK(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dY(s)
delete a[b]
return s.b},
cu(){this.r=this.r+1&1073741823},
cw(a,b){var s=this,r=A.j(s),q=new A.h4(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cu()
return q},
dY(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cu()},
bi(a){return J.ae(a)&1073741823},
bj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.p(a[r].a,b))return r
return-1},
n(a){return A.lc(this)},
cv(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ih3:1}
A.h0.prototype={
$1(a){var s=this.a
return J.p(s.h(0,A.j(s).c.a(a)),this.b)},
$S(){return A.j(this.a).i("l(1)")}}
A.h_.prototype={
$2(a,b){var s=this.a,r=A.j(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.j(this.a).i("~(1,2)")}}
A.h4.prototype={}
A.ai.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.an(s,s.r,s.e,this.$ti.i("an<1>"))},
p(a,b){return this.a.E(b)}}
A.an.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.U(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iL:1}
A.aK.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.aJ(s,s.r,s.e,this.$ti.i("aJ<1>"))}}
A.aJ.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.U(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iL:1}
A.V.prototype={
gl(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.bg(s,s.r,s.e,this.$ti.i("bg<1,2>"))}}
A.bg.prototype={
gm(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.U(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iL:1}
A.dc.prototype={
bi(a){return A.e1(a)&1073741823},
bj(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.jw.prototype={
$1(a){return this.a(a)},
$S:1}
A.jx.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.jy.prototype={
$1(a){return this.a(A.e(a))},
$S:16}
A.aF.prototype={
n(a){return this.dV(!1)},
dV(a){var s,r,q,p,o,n=this.f3(),m=this.cs(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.mH(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
f3(){var s,r=this.$s
while($.hY.length<=r)B.b.t($.hY,null)
s=$.hY[r]
if(s==null){s=this.eP()
B.b.j($.hY,r,s)}return s},
eP(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.l4(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.j(j,q,r[s])}}return A.lb(j,k)}}
A.b1.prototype={
cs(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.b1&&this.$s===b.$s&&J.p(this.a,b.a)&&J.p(this.b,b.b)},
gX(a){return A.ez(this.$s,this.a,this.b,B.n)}}
A.cK.prototype={
cs(){return[this.a,this.b,this.c]},
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.cK&&s.$s===b.$s&&J.p(s.a,b.a)&&J.p(s.b,b.b)&&J.p(s.c,b.c)},
gX(a){var s=this
return A.ez(s.$s,s.a,s.b,s.c)}}
A.b4.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdA(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.l6(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gfi(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.l6(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
eQ(){var s,r=this.a
if(!B.a.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
e4(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cJ(s)},
hg(a){A.e(a)
return this.b.test(a)},
c_(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.f0(this,b,c)},
bB(a,b){return this.c_(0,b,0)},
cr(a,b){var s,r=this.gdA()
if(r==null)r=A.fk(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cJ(s)},
eZ(a,b){var s,r=this.gfi()
if(r==null)r=A.fk(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cJ(s)},
bF(a,b,c){if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,null,null))
return this.eZ(b,c)},
$icy:1,
$ipo:1}
A.cJ.prototype={
gC(){return this.b.index},
gH(){var s=this.b
return s.index+s[0].length},
h(a,b){var s
A.T(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]},
$ib5:1,
$idl:1}
A.f0.prototype={
gq(a){return new A.dD(this.a,this.b,this.c)}}
A.dD.prototype={
gm(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.cr(l,s)
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
A.cD.prototype={
gH(){return this.a+this.c.length},
h(a,b){A.T(b)
if(b!==0)throw A.a(A.hh(b,null))
return this.c},
$ib5:1,
gC(){return this.a}}
A.fb.prototype={
gq(a){return new A.fc(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.cD(r,s)
throw A.a(A.a2())}}
A.fc.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cD(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iL:1}
A.f2.prototype={
bT(){var s=this.b
if(s===this)throw A.a(new A.cw("Local '"+this.a+"' has not been initialized."))
return s},
aK(){var s=this.b
if(s===this)throw A.a(new A.cw("Field '"+this.a+"' has not been initialized."))
return s}}
A.bN.prototype={
gaD(a){return B.cU},
h4(a,b,c){var s=new DataView(a,b)
return s},
e2(a){return this.h4(a,0,null)},
$iac:1,
$ibN:1}
A.dg.prototype={
gh5(a){if(((a.$flags|0)&2)!==0)return new A.i0(a.buffer)
else return a.buffer},
f6(a,b,c,d){var s=A.a9(b,0,c,d,null)
throw A.a(s)},
d9(a,b,c,d){if(b>>>0!==b||b>c)this.f6(a,b,c,d)}}
A.i0.prototype={
e2(a){var s=A.ph(this.a,0,null)
s.$flags=3
return s}}
A.ev.prototype={
gaD(a){return B.cV},
$iac:1}
A.aY.prototype={
gl(a){return a.length},
$ibL:1}
A.b6.prototype={
j(a,b,c){A.T(c)
a.$flags&2&&A.G(a)
A.fl(b,a,a.length)
a[b]=c},
am(a,b,c,d,e){var s,r,q,p
t.hb.a(d)
a.$flags&2&&A.G(a,5)
if(t.eB.b(d)){s=a.length
this.d9(a,b,s,"start")
this.d9(a,c,s,"end")
if(b>c)A.E(A.a9(b,0,c,null,null))
r=c-b
if(e<0)A.E(A.W(e))
q=d.length
if(q-e<r)A.E(A.bm("Not enough elements"))
p=e!==0||q!==r?d.subarray(e,e+r):d
a.set(p,b)
return}this.eB(a,b,c,d,e)},
bo(a,b,c,d){return this.am(a,b,c,d,0)},
$iv:1,
$if:1,
$iq:1}
A.ew.prototype={
gaD(a){return B.cW},
h(a,b){A.T(b)
A.fl(b,a,a.length)
return a[b]},
$iac:1}
A.ex.prototype={
gaD(a){return B.cY},
h(a,b){A.T(b)
A.fl(b,a,a.length)
return a[b]},
$iac:1,
$ili:1}
A.dh.prototype={
gaD(a){return B.cZ},
h(a,b){A.T(b)
A.fl(b,a,a.length)
return a[b]},
cd(a,b,c){return new Uint32Array(a.subarray(b,A.nx(b,c,a.length)))},
$iac:1,
$ilj:1}
A.bO.prototype={
gaD(a){return B.d_},
gl(a){return a.length},
h(a,b){A.T(b)
A.fl(b,a,a.length)
return a[b]},
$iac:1,
$ibO:1,
$ilk:1}
A.dK.prototype={}
A.dL.prototype={}
A.aZ.prototype={
i(a){return A.dU(v.typeUniverse,this,a)},
a9(a){return A.nc(v.typeUniverse,this,a)}}
A.f6.prototype={}
A.hZ.prototype={
n(a){return A.ax(this.a,null)}}
A.f4.prototype={
n(a){return this.a}}
A.cO.prototype={}
A.dQ.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
fH(a,b){var s,r,q
a=A.T(a)
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
o.d=null}q=o.fH(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.n7
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
o.a=A.n7
throw n
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.bm("sync*"))}return!1},
hD(a){var s,r,q=this
if(a instanceof A.bA){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.b.t(r,q.a)
q.a=s
return 2}else{q.d=J.C(a)
return 2}},
$iL:1}
A.bA.prototype={
gq(a){return new A.dQ(this.a(),this.$ti.i("dQ<1>"))}}
A.dH.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ex(b)},
j(a,b,c){var s=this.$ti
this.ez(s.c.a(b),s.y[1].a(c))},
E(a){if(!this.y.$1(a))return!1
return this.ew(a)},
I(a,b){if(!this.y.$1(b))return null
return this.ey(b)},
bi(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
bj(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(q.$2(r.a(a[p].a),r.a(b)))return p
return-1}}
A.hW.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.c2.prototype={
bS(){return new A.c2(A.j(this).i("c2<1>"))},
gq(a){return new A.dG(this,this.eO(),A.j(this).i("dG<1>"))},
gl(a){return this.a},
gJ(a){return this.a===0},
gaN(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cl(b)},
cl(a){var s=this.d
if(s==null)return!1
return this.aV(s[this.aU(a)],a)>=0},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bs(s==null?q.b=A.ls():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bs(r==null?q.c=A.ls():r,b)}else return q.cg(b)},
cg(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ls()
r=p.aU(a)
q=s[r]
if(q==null)s[r]=[a]
else{if(p.aV(q,a)>=0)return!1
q.push(a)}++p.a
p.e=null
return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bt(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bt(s.c,b)
else return s.cD(b)},
cD(a){var s,r,q,p=this,o=p.d
if(o==null)return!1
s=p.aU(a)
r=o[s]
q=p.aV(r,a)
if(q<0)return!1;--p.a
p.e=null
r.splice(q,1)
if(0===r.length)delete o[s]
return!0},
eO(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aL(i.a,null,!1,t.z)
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
bs(a,b){A.j(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
bt(a,b){if(a!=null&&a[b]!=null){delete a[b];--this.a
this.e=null
return!0}else return!1},
aU(a){return J.ae(a)&1073741823},
aV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.p(a[r],b))return r
return-1}}
A.cH.prototype={
bS(){return new A.cH(this.$ti)},
aU(a){return A.e1(a)&1073741823},
aV(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dG.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.U(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iL:1}
A.aE.prototype={
bS(){return new A.aE(A.j(this).i("aE<1>"))},
gq(a){var s=this,r=new A.c5(s,s.r,A.j(s).i("c5<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gJ(a){return this.a===0},
gaN(a){return this.a!==0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.M.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.M.a(r[b])!=null}else return this.cl(b)},
cl(a){var s=this.d
if(s==null)return!1
return this.aV(s[this.aU(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.a(A.bm("No elements"))
return A.j(this).c.a(s.a)},
gK(a){var s=this.f
if(s==null)throw A.a(A.bm("No elements"))
return A.j(this).c.a(s.a)},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bs(s==null?q.b=A.lu():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bs(r==null?q.c=A.lu():r,b)}else return q.cg(b)},
cg(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.lu()
r=p.aU(a)
q=s[r]
if(q==null)s[r]=[p.ck(a)]
else{if(p.aV(q,a)>=0)return!1
q.push(p.ck(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bt(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bt(s.c,b)
else return s.cD(b)},
cD(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aU(a)
r=n[s]
q=o.aV(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dc(p)
return!0},
bs(a,b){A.j(this).c.a(b)
if(t.M.a(a[b])!=null)return!1
a[b]=this.ck(b)
return!0},
bt(a,b){var s
if(a==null)return!1
s=t.M.a(a[b])
if(s==null)return!1
this.dc(s)
delete a[b]
return!0},
da(){this.r=this.r+1&1073741823},
ck(a){var s,r=this,q=new A.f9(A.j(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.da()
return q},
dc(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.da()},
aU(a){return J.ae(a)&1073741823},
aV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.p(a[r].a,b))return r
return-1},
$il9:1}
A.cI.prototype={
bS(){return new A.cI(this.$ti)},
aU(a){return A.e1(a)&1073741823},
aV(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.f9.prototype={}
A.c5.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.U(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iL:1}
A.dx.prototype={
gl(a){return this.a.length},
h(a,b){var s
A.T(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.h6.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:47}
A.t.prototype={
gq(a){return new A.a5(a,this.gl(a),A.aa(a).i("a5<t.E>"))},
V(a,b){return this.h(a,b)},
ap(a,b){var s,r
A.aa(a).i("~(t.E)").a(b)
s=this.gl(a)
for(r=0;r<s;++r){b.$1(this.h(a,r))
if(s!==this.gl(a))throw A.a(A.U(a))}},
gJ(a){return this.gl(a)===0},
gaN(a){return this.gl(a)!==0},
gU(a){if(this.gl(a)===0)throw A.a(A.a2())
return this.h(a,0)},
gK(a){if(this.gl(a)===0)throw A.a(A.a2())
return this.h(a,this.gl(a)-1)},
p(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.p(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.a(A.U(a))}return!1},
P(a,b){var s,r
A.aa(a).i("l(t.E)").a(b)
s=this.gl(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gl(a))throw A.a(A.U(a))}return!1},
aP(a,b){var s=A.aa(a)
return new A.r(a,s.i("l(t.E)").a(b),s.i("r<t.E>"))},
ad(a,b,c){var s=A.aa(a)
return new A.J(a,s.a9(c).i("1(t.E)").a(b),s.i("@<t.E>").a9(c).i("J<1,2>"))},
aq(a,b){return A.b0(a,b,null,A.aa(a).i("t.E"))},
t(a,b){var s
A.aa(a).i("t.E").a(b)
s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
aw(a,b){this.f5(a,A.aa(a).i("l(t.E)").a(b),!1)},
f5(a,b,c){var s,r,q,p,o=this,n=A.aa(a)
n.i("l(t.E)").a(b)
s=A.c([],n.i("M<t.E>"))
r=o.gl(a)
for(q=0;q<r;++q){p=o.h(a,q)
if(J.p(b.$1(p),!1))B.b.t(s,p)
if(r!==o.gl(a))throw A.a(A.U(a))}if(s.length!==o.gl(a)){o.bo(a,0,s.length,s)
o.sl(a,s.length)}},
ca(a,b){var s=A.aa(a)
s.i("h(t.E,t.E)?").a(b)
A.eI(a,0,this.gl(a)-1,b,s.i("t.E"))},
bD(a,b,c,d){var s
A.aa(a).i("t.E?").a(d)
A.bj(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
am(a,b,c,d,e){var s,r,q
A.aa(a).i("f<t.E>").a(d)
A.bj(b,c,this.gl(a))
s=c-b
if(s===0)return
A.ag(e,"skipCount")
r=J.F(d)
if(e+s>r.gl(d))throw A.a(A.mv())
if(e<b)for(q=s-1;q>=0;--q)this.j(a,b+q,r.h(d,e+q))
else for(q=0;q<s;++q)this.j(a,b+q,r.h(d,e+q))},
bo(a,b,c,d){return this.am(a,b,c,d,0)},
bc(a,b){var s
A.aa(a).i("l(t.E)").a(b)
for(s=0;s<this.gl(a);++s)if(b.$1(this.h(a,s)))return s
return-1},
bh(a,b,c){var s,r=this
A.aa(a).i("t.E").a(c)
A.fo(b,"index",t.p)
s=r.gl(a)
A.cA(b,0,s,"index")
r.t(a,c)
if(b!==s){r.am(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n(a){return A.fY(a,"[","]")},
$iv:1,
$if:1,
$iq:1}
A.A.prototype={
ap(a,b){var s,r,q,p=A.j(this)
p.i("~(A.K,A.V)").a(b)
for(s=this.gG(),s=s.gq(s),p=p.i("A.V");s.k();){r=s.gm()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
b4(a){var s
for(s=this.gG(),s=s.gq(s);s.k();)if(J.p(this.h(0,s.gm()),a))return!0
return!1},
ep(a){var s,r,q,p=this,o=A.j(p)
o.i("A.V(A.K,A.V)").a(a)
for(s=p.gG(),s=s.gq(s),o=o.i("A.V");s.k();){r=s.gm()
q=p.h(0,r)
p.j(0,r,a.$2(r,q==null?o.a(q):q))}},
gN(){return this.gG().ad(0,new A.h9(this),A.j(this).i("P<A.K,A.V>"))},
aw(a,b){var s,r,q,p,o,n=this,m=A.j(n)
m.i("l(A.K,A.V)").a(b)
s=A.c([],m.i("M<A.K>"))
for(r=n.gG(),r=r.gq(r),m=m.i("A.V");r.k();){q=r.gm()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.b.t(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.Y)(s),++o)n.I(0,s[o])},
E(a){return this.gG().p(0,a)},
gl(a){var s=this.gG()
return s.gl(s)},
gJ(a){var s=this.gG()
return s.gJ(s)},
gag(){return new A.dI(this,A.j(this).i("dI<A.K,A.V>"))},
n(a){return A.lc(this)},
$ix:1}
A.h9.prototype={
$1(a){var s=this.a,r=A.j(s)
r.i("A.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("A.V").a(s)
return new A.P(a,s,r.i("P<A.K,A.V>"))},
$S(){return A.j(this.a).i("P<A.K,A.V>(A.K)")}}
A.ha.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:17}
A.cG.prototype={}
A.dI.prototype={
gl(a){var s=this.a
return s.gl(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a,r=s.gG()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gK(a){var s=this.a,r=s.gG()
r=s.h(0,r.gK(r))
return r==null?this.$ti.y[1].a(r):r},
gq(a){var s=this.a,r=s.gG()
return new A.dJ(r.gq(r),s,this.$ti.i("dJ<1,2>"))}}
A.dJ.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gm())
return!0}s.c=null
return!1},
gm(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iL:1}
A.at.prototype={
j(a,b,c){var s=A.j(this)
s.i("at.K").a(b)
s.i("at.V").a(c)
throw A.a(A.O("Cannot modify unmodifiable map"))},
I(a,b){throw A.a(A.O("Cannot modify unmodifiable map"))}}
A.cx.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.j(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
E(a){return this.a.E(a)},
b4(a){return this.a.b4(a)},
ap(a,b){this.a.ap(0,A.j(this).i("~(1,2)").a(b))},
gJ(a){var s=this.a
return s.gJ(s)},
gl(a){var s=this.a
return s.gl(s)},
gG(){return this.a.gG()},
I(a,b){return this.a.I(0,b)},
n(a){return this.a.n(0)},
gag(){return this.a.gag()},
gN(){return this.a.gN()},
$ix:1}
A.b7.prototype={}
A.b_.prototype={
gJ(a){return this.gl(this)===0},
a2(a,b){var s
for(s=J.C(A.j(this).i("f<1>").a(b));s.k();)this.t(0,s.gm())},
ht(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Y)(a),++r)this.I(0,a[r])},
h8(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Y)(a),++r)if(!this.p(0,a[r]))return!1
return!0},
ad(a,b,c){var s=A.j(this)
return new A.bI(this,s.a9(c).i("1(2)").a(b),s.i("@<1>").a9(c).i("bI<1,2>"))},
n(a){return A.fY(this,"{","}")},
gU(a){var s=this.gq(this)
if(!s.k())throw A.a(A.a2())
return s.gm()},
gK(a){var s,r=this.gq(this)
if(!r.k())throw A.a(A.a2())
do s=r.gm()
while(r.k())
return s},
V(a,b){var s,r
A.ag(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.a(A.ek(b,b-r,this,null,"index"))},
$iv:1,
$if:1,
$ibR:1}
A.dP.prototype={
ec(a){var s,r,q=this.bS()
for(s=this.gq(this);s.k();){r=s.gm()
if(a.p(0,r))q.t(0,r)}return q}}
A.cP.prototype={}
A.f7.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fE(b):s}},
gl(a){return this.b==null?this.c.a:this.b8().length},
gJ(a){return this.gl(0)===0},
gG(){if(this.b==null){var s=this.c
return new A.ai(s,A.j(s).i("ai<1>"))}return new A.f8(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aK(s,A.j(s).i("aK<2>"))}return A.hb(r.b8(),new A.hS(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.e(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.E(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.dZ().j(0,b,c)},
b4(a){var s,r,q=this
if(q.b==null)return q.c.b4(a)
s=q.b8()
for(r=0;r<s.length;++r)if(J.p(q.h(0,s[r]),a))return!0
return!1},
E(a){if(this.b==null)return this.c.E(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
I(a,b){if(this.b!=null&&!this.E(b))return null
return this.dZ().I(0,b)},
ap(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.ap(0,b)
s=o.b8()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.io(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.U(o))}},
b8(){var s=t.g.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
dZ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.b8()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.b.t(r,"")
else B.b.bC(r)
n.a=n.b=null
return n.c=s},
fE(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.io(this.a[a])
return this.b[a]=s}}
A.hS.prototype={
$1(a){return this.a.h(0,A.e(a))},
$S:16}
A.f8.prototype={
gl(a){return this.a.gl(0)},
V(a,b){var s=this.a
if(s.b==null)s=s.gG().V(0,b)
else{s=s.b8()
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gG()
s=s.gq(s)}else{s=s.b8()
s=new J.bc(s,s.length,A.u(s).i("bc<1>"))}return s},
p(a,b){return this.a.E(b)}}
A.i5.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:10}
A.i4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:10}
A.cl.prototype={
gc1(){return this.a},
eg(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=u.n,a1="Invalid base64 encoding length ",a2=a3.length
a5=A.bj(a4,a5,a2)
s=$.mb()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.jv(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.jv(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.a_("")
g=o}else g=o
g.a+=B.a.v(a3,p,q)
c=A.B(j)
g.a+=c
p=k
continue}}throw A.a(A.D("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.v(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.mk(a3,m,a5,n,l,r)
else{b=B.c.aF(r-1,4)+1
if(b===1)throw A.a(A.D(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.aZ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.mk(a3,m,a5,n,l,a)
else{b=B.c.aF(a,4)
if(b===1)throw A.a(A.D(a1,a3,a5))
if(b>1)a3=B.a.aZ(a3,a5,a5,b===2?"==":"=")}return a3},
b6(a){return this.eg(a,0,null)}}
A.ea.prototype={
aC(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.hJ(this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":u.n).hc(a,0,s,!0)
s.toString
return A.dt(s,0,null)}}
A.hJ.prototype={
hc(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.c.ai(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.pJ(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.fy.prototype={
aC(a){var s,r,q,p
A.e(a)
s=A.bj(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.hI()
q=r.h9(a,0,s)
q.toString
p=r.a
if(p<-1)A.E(A.D("Missing padding character",a,s))
if(p>0)A.E(A.D("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.hI.prototype={
h9(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.mR(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.pG(a,b,c,q)
r.a=A.pI(a,b,c,s,0,r.a)
return s}}
A.aP.prototype={}
A.ee.prototype={}
A.eh.prototype={}
A.dd.prototype={
n(a){var s=A.ei(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.et.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.es.prototype={
aa(a,b){var s=A.r_(a,this.ghb().a)
return s},
ac(a,b){var s=A.pY(a,this.gc1().b,null)
return s},
gc1(){return B.cG},
ghb(){return B.cF}}
A.h2.prototype={}
A.h1.prototype={}
A.hU.prototype={
es(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.B(92)
s.a+=o
o=A.B(117)
s.a+=o
o=A.B(100)
s.a+=o
o=p>>>8&15
o=A.B(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.B(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.B(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.B(92)
s.a+=o
switch(p){case 8:o=A.B(98)
s.a+=o
break
case 9:o=A.B(116)
s.a+=o
break
case 10:o=A.B(110)
s.a+=o
break
case 12:o=A.B(102)
s.a+=o
break
case 13:o=A.B(114)
s.a+=o
break
default:o=A.B(117)
s.a+=o
o=A.B(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.B(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.B(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.a.v(a,r,q)
r=q+1
o=A.B(92)
s.a+=o
o=A.B(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.a.v(a,r,m)},
cj(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.et(a,null))}B.b.t(s,a)},
c7(a){var s,r,q,p,o=this
if(o.er(a))return
o.cj(a)
try{s=o.b.$1(a)
if(!o.er(s)){q=A.mz(a,null,o.gdI())
throw A.a(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.bF(p)
q=A.mz(a,r,o.gdI())
throw A.a(q)}},
er(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.ao.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.es(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cj(a)
q.hA(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cj(a)
r=q.hB(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
hA(a){var s,r,q=this.c
q.a+="["
s=J.F(a)
if(s.gaN(a)){this.c7(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.a+=","
this.c7(s.h(a,r))}}q.a+="]"},
hB(a){var s,r,q,p,o,n,m=this,l={}
if(a.gJ(a)){m.c.a+="{}"
return!0}s=a.gl(a)*2
r=A.aL(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ap(0,new A.hV(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.es(A.e(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.c7(r[n])}p.a+="}"
return!0}}
A.hV.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.j(s,r.a++,a)
B.b.j(s,r.a++,b)},
$S:17}
A.hT.prototype={
gdI(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.eW.prototype={
cN(a){t.L.a(a)
return B.d0.aC(a)}}
A.hv.prototype={
aC(a){var s,r,q,p,o,n
A.e(a)
s=a.length
r=A.bj(0,null,s)
if(r===0)return new Uint8Array(0)
q=r*3
p=new Uint8Array(q)
o=new A.i6(p)
if(o.f4(a,0,r)!==r){n=r-1
if(!(n>=0&&n<s))return A.b(a,n)
o.cK()}return new Uint8Array(p.subarray(0,A.nx(0,o.b,q)))}}
A.i6.prototype={
cK(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.G(q)
s=q.length
if(!(p<s))return A.b(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.b(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.b(q,p)
q[p]=189},
h1(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.G(r)
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
return!0}else{n.cK()
return!1}},
f4(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.b(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.b(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.G(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.b(a,m)
if(k.h1(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cK()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.G(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.G(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.b(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.b(s,m)
s[m]=n&63|128}}}return o}}
A.hu.prototype={
aC(a){return new A.i3(this.a).eS(t.L.a(a),0,null,!0)}}
A.i3.prototype={
eS(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bj(b,c,J.a6(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.qp(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.qo(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cn(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.qq(o)
l.b=0
throw A.a(A.D(m,a,p+l.c))}return n},
cn(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.ai(b+c,2)
r=q.cn(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cn(a,s,c,d)}return q.ha(a,b,c,d)},
ha(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.a_(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.b(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.b(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.b(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.B(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.B(h)
e.a+=p
break
case 65:p=A.B(h)
e.a+=p;--d
break
default:p=A.B(h)
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
p=A.B(a[l])
e.a+=p}else{p=A.dt(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.B(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ad.prototype={
aR(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.aD(p,r)
return new A.ad(p===0?!1:s,r,p)},
eW(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.aG()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.b(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.b(q,n)
q[n]=m}o=this.a
n=A.aD(s,q)
return new A.ad(n===0?!1:o,q,n)},
eX(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.aG()
s=j-a
if(s<=0)return k.a?$.md():$.aG()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.b(r,o)
m=r[o]
if(!(n<s))return A.b(q,n)
q[n]=m}n=k.a
m=A.aD(s,q)
l=new A.ad(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.b(r,o)
if(r[o]!==0)return l.bq(0,$.e5())}return l},
b1(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.a(A.W("shift-amount must be posititve "+b))
s=n.c
if(s===0)return n
r=B.c.ai(b,16)
if(B.c.aF(b,16)===0)return n.eW(r)
q=s+r+1
p=new Uint16Array(q)
A.mX(n.b,s,b,p)
s=n.a
o=A.aD(q,p)
return new A.ad(o===0?!1:s,p,o)},
b2(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.a(A.W("shift-amount must be posititve "+b))
s=j.c
if(s===0)return j
r=B.c.ai(b,16)
q=B.c.aF(b,16)
if(q===0)return j.eX(r)
p=s-r
if(p<=0)return j.a?$.md():$.aG()
o=j.b
n=new Uint16Array(p)
A.pR(o,s,b,n)
s=j.a
m=A.aD(p,n)
l=new A.ad(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.b(o,r)
if((o[r]&B.c.b1(1,q)-1)>>>0!==0)return l.bq(0,$.e5())
for(k=0;k<r;++k){if(!(k<s))return A.b(o,k)
if(o[k]!==0)return l.bq(0,$.e5())}}return l},
ao(a,b){var s,r
t.cl.a(b)
s=this.a
if(s===b.a){r=A.hK(this.b,this.c,b.b,b.c)
return s?0-r:r}return s?-1:1},
cf(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.cf(p,b)
if(o===0)return $.aG()
if(n===0)return p.a===b?p:p.aR(0)
s=o+1
r=new Uint16Array(s)
A.pM(p.b,o,a.b,n,r)
q=A.aD(s,r)
return new A.ad(q===0?!1:b,r,q)},
bM(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.aG()
s=a.c
if(s===0)return p.a===b?p:p.aR(0)
r=new Uint16Array(o)
A.f1(p.b,o,a.b,s,r)
q=A.aD(o,r)
return new A.ad(q===0?!1:b,r,q)},
c8(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.cf(b,r)
if(A.hK(q.b,p,b.b,s)>=0)return q.bM(b,r)
return b.bM(q,!r)},
bq(a,b){var s,r,q=this,p=q.c
if(p===0)return b.aR(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.cf(b,r)
if(A.hK(q.b,p,b.b,s)>=0)return q.bM(b,r)
return b.bM(q,!r)},
ah(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.aG()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.b(q,n)
A.mY(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.aD(s,p)
return new A.ad(m===0?!1:o,p,m)},
eV(a){var s,r,q,p
if(this.c<a.c)return $.aG()
this.dd(a)
s=$.ln.aK()-$.dE.aK()
r=A.lp($.lm.aK(),$.dE.aK(),$.ln.aK(),s)
q=A.aD(s,r)
p=new A.ad(!1,r,q)
return this.a!==a.a&&q>0?p.aR(0):p},
fF(a){var s,r,q,p=this
if(p.c<a.c)return p
p.dd(a)
s=A.lp($.lm.aK(),0,$.dE.aK(),$.dE.aK())
r=A.aD($.dE.aK(),s)
q=new A.ad(!1,s,r)
if($.lo.aK()>0)q=q.b2(0,$.lo.aK())
return p.a&&q.c>0?q.aR(0):q},
dd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.mU&&a.c===$.mW&&c.b===$.mT&&a.b===$.mV)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.b(s,q)
p=16-B.c.ge3(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.mS(s,r,p,o)
m=new Uint16Array(b+5)
l=A.mS(c.b,b,p,m)}else{m=A.lp(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.b(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.lr(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.hK(m,l,i,h)>=0){q&2&&A.G(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=1
A.f1(m,g,i,h,m)}else{q&2&&A.G(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.b(f,n)
f[n]=1
A.f1(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.pN(k,m,e);--j
A.mY(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.b(m,e)
if(m[e]<d){h=A.lr(f,n,j,i)
A.f1(m,g,i,h,m)
while(--d,m[e]<d)A.f1(m,g,i,h,m)}--e}$.mT=c.b
$.mU=b
$.mV=s
$.mW=r
$.lm.b=m
$.ln.b=g
$.dE.b=n
$.lo.b=p},
gX(a){var s,r,q,p,o=new A.hL(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.b(r,p)
s=o.$2(s,r[p])}return new A.hM().$1(s)},
T(a,b){if(b==null)return!1
return b instanceof A.ad&&this.ao(0,b)===0},
n(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.b(m,0)
return B.c.n(-m[0])}m=n.b
if(0>=m.length)return A.b(m,0)
return B.c.n(m[0])}s=A.c([],t.s)
m=n.a
r=m?n.aR(0):n
while(r.c>1){q=$.mc()
if(q.c===0)A.E(B.aK)
p=r.fF(q).n(0)
B.b.t(s,p)
o=p.length
if(o===1)B.b.t(s,"000")
if(o===2)B.b.t(s,"00")
if(o===3)B.b.t(s,"0")
r=r.eV(q)}q=r.b
if(0>=q.length)return A.b(q,0)
B.b.t(s,B.c.n(q[0]))
if(m)B.b.t(s,"-")
return new A.bP(s,t.bJ).c4(0)},
$ibH:1}
A.hL.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:18}
A.hM.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:48}
A.hP.prototype={
n(a){return this.bu()}}
A.S.prototype={}
A.ck.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ei(s)
return"Assertion failed"}}
A.dw.prototype={}
A.b3.prototype={
gcq(){return"Invalid argument"+(!this.a?"(s)":"")},
gcp(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gcq()+q+o
if(!s.a)return n
return n+s.gcp()+": "+A.ei(s.gcX())},
gcX(){return this.b}}
A.cz.prototype={
gcX(){return A.nw(this.b)},
gcq(){return"RangeError"},
gcp(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.ej.prototype={
gcX(){return A.T(this.b)},
gcq(){return"RangeError"},
gcp(){if(A.T(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.dy.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.eQ.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.bU.prototype={
n(a){return"Bad state: "+this.a}}
A.ed.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ei(s)+"."}}
A.eA.prototype={
n(a){return"Out of Memory"},
$iS:1}
A.dr.prototype={
n(a){return"Stack Overflow"},
$iS:1}
A.f5.prototype={
n(a){return"Exception: "+this.a},
$iav:1}
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
k=""}return g+l+B.a.v(e,i,j)+k+"\n"+B.a.ah(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.m(f)+")"):g},
$iav:1,
ged(){return this.a}}
A.em.prototype={
n(a){return"IntegerDivisionByZeroException"},
$iS:1,
$iav:1}
A.f.prototype={
ad(a,b,c){var s=A.j(this)
return A.hb(this,s.a9(c).i("1(f.E)").a(b),s.i("f.E"),c)},
aP(a,b){var s=A.j(this)
return new A.r(this,s.i("l(f.E)").a(b),s.i("r<f.E>"))},
p(a,b){var s
for(s=this.gq(this);s.k();)if(J.p(s.gm(),b))return!0
return!1},
bg(a,b,c,d){var s,r
d.a(b)
A.j(this).a9(d).i("1(1,f.E)").a(c)
for(s=this.gq(this),r=b;s.k();)r=c.$2(r,s.gm())
return r},
aW(a,b){var s
A.j(this).i("l(f.E)").a(b)
for(s=this.gq(this);s.k();)if(!b.$1(s.gm()))return!1
return!0},
R(a,b){var s,r,q=this.gq(this)
if(!q.k())return""
s=J.am(q.gm())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.am(q.gm())
while(q.k())}else{r=s
do r=r+b+J.am(q.gm())
while(q.k())}return r.charCodeAt(0)==0?r:r},
P(a,b){var s
A.j(this).i("l(f.E)").a(b)
for(s=this.gq(this);s.k();)if(b.$1(s.gm()))return!0
return!1},
b0(a,b){var s=A.o(this,A.j(this).i("f.E"))
return s},
b_(a){return this.b0(0,!0)},
gl(a){var s,r=this.gq(this)
for(s=0;r.k();)++s
return s},
gJ(a){return!this.gq(this).k()},
gaN(a){return!this.gJ(this)},
aq(a,b){return A.pq(this,b,A.j(this).i("f.E"))},
gU(a){var s=this.gq(this)
if(!s.k())throw A.a(A.a2())
return s.gm()},
gK(a){var s,r=this.gq(this)
if(!r.k())throw A.a(A.a2())
do s=r.gm()
while(r.k())
return s},
c3(a,b){var s,r
A.j(this).i("l(f.E)").a(b)
for(s=this.gq(this);s.k();){r=s.gm()
if(b.$1(r))return r}throw A.a(A.a2())},
V(a,b){var s,r
A.ag(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.a(A.ek(b,b-r,this,null,"index"))},
n(a){return A.pd(this,"(",")")}}
A.P.prototype={
n(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.bi.prototype={
gX(a){return A.w.prototype.gX.call(this,0)},
n(a){return"null"}}
A.w.prototype={$iw:1,
T(a,b){return this===b},
gX(a){return A.eF(this)},
n(a){return"Instance of '"+A.eG(this)+"'"},
gaD(a){return A.jr(this)},
toString(){return this.n(this)}}
A.a_.prototype={
gl(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ipv:1}
A.ht.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.e(b)
s=B.a.au(b,"=")
if(s===-1){if(b!=="")a.j(0,A.ao(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.v(b,0,s)
q=B.a.D(b,s+1)
p=this.a
a.j(0,A.ao(r,0,r.length,p,!0),A.ao(q,0,q.length,p,!0))}return a},
$S:58}
A.hs.prototype={
$2(a,b){throw A.a(A.D("Illegal IPv6 address, "+a,this.a,b))},
$S:63}
A.dV.prototype={
gdT(){var s,r,q,p,o=this,n=o.w
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
ghp(){var s,r,q,p=this,o=p.x
if(o===$){s=p.e
r=s.length
if(r!==0){if(0>=r)return A.b(s,0)
r=s.charCodeAt(0)===47}else r=!1
if(r)s=B.a.D(s,1)
q=s.length===0?B.cJ:A.lb(new A.J(A.c(s.split("/"),t.s),t.dO.a(A.rw()),t.do),t.N)
p.x!==$&&A.kC()
o=p.x=q}return o},
gX(a){var s,r=this,q=r.y
if(q===$){s=B.a.gX(r.gdT())
r.y!==$&&A.kC()
r.y=s
q=s}return q},
gej(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.mQ(s==null?"":s)
r.z!==$&&A.kC()
q=r.z=new A.b7(s,t.dw)}return q},
gek(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.qi(s==null?"":s)
q.Q!==$&&A.kC()
q.Q=r
p=r}return p},
gaE(){return this.b},
gaM(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.a5(s,"v",1))return B.a.v(s,1,s.length-1)
return s},
gbI(){var s=this.d
return s==null?A.nd(this.a):s},
gbd(){var s=this.f
return s==null?"":s},
gba(){var s=this.r
return s==null?"":s},
hj(a){var s=this.a
if(a.length!==s.length)return!1
return A.qz(a,s,0)>=0},
en(a){var s,r,q,p,o,n,m,l=this
a=A.ly(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.i1(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.u(o,"/"))o="/"+o
m=o
return A.dW(a,r,p,q,m,l.f,l.r)},
dz(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.a.a5(b,"../",r);){r+=3;++s}q=B.a.bk(a,"/")
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
q=o}return B.a.aZ(a,q+1,null,B.a.D(b,r-3*s))},
eo(a){return this.bJ(A.eU(a,0,null))},
bJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gal().length!==0)return a
else{s=h.a
if(a.gcT()){r=a.en(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.ge6())m=a.gbE()?a.gbd():h.f
else{l=A.qn(h,n)
if(l>0){k=B.a.v(n,0,l)
n=a.gcS()?k+A.c9(a.gav()):k+A.c9(h.dz(B.a.D(n,k.length),a.gav()))}else if(a.gcS())n=A.c9(a.gav())
else if(n.length===0)if(p==null)n=s.length===0?a.gav():A.c9(a.gav())
else n=A.c9("/"+a.gav())
else{j=h.dz(n,a.gav())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.c9(j)
else n=A.lA(j,!r||p!=null)}m=a.gbE()?a.gbd():null}}}i=a.gcU()?a.gba():null
return A.dW(s,q,p,o,n,m,i)},
gcT(){return this.c!=null},
gbE(){return this.f!=null},
gcU(){return this.r!=null},
ge6(){return this.e.length===0},
gcS(){return B.a.u(this.e,"/")},
d4(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.a(A.O("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.a(A.O(u.y))
q=r.r
if((q==null?"":q)!=="")throw A.a(A.O(u.l))
if(r.c!=null&&r.gaM()!=="")A.E(A.O(u.j))
s=r.ghp()
A.qg(s,!1)
q=A.lg(B.a.u(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
n(a){return this.gdT()},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gal())if(p.c!=null===b.gcT())if(p.b===b.gaE())if(p.gaM()===b.gaM())if(p.gbI()===b.gbI())if(p.e===b.gav()){r=p.f
q=r==null
if(!q===b.gbE()){if(q)r=""
if(r===b.gbd()){r=p.r
q=r==null
if(!q===b.gcU()){s=q?"":r
s=s===b.gba()}}}}return s},
$ieS:1,
gal(){return this.a},
gav(){return this.e}}
A.i2.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.ao(s,a,c,r,!0)
p=""}else{q=A.ao(s,a,b,r,!0)
p=A.ao(s,b+1,c,r,!0)}J.e7(this.c.ei(q,A.rx()),p)},
$S:29}
A.hr.prototype={
geq(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.af(s,"?",m)
q=s.length
if(r>=0){p=A.dX(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.f3("data","",n,n,A.dX(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.aU.prototype={
gcT(){return this.c>0},
gcV(){return this.c>0&&this.d+1<this.e},
gbE(){return this.f<this.r},
gcU(){return this.r<this.a.length},
gcS(){return B.a.a5(this.a,"/",this.e)},
ge6(){return this.e===this.f},
gal(){var s=this.w
return s==null?this.w=this.eR():s},
eR(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.u(r.a,"http"))return"http"
if(q===5&&B.a.u(r.a,"https"))return"https"
if(s&&B.a.u(r.a,"file"))return"file"
if(q===7&&B.a.u(r.a,"package"))return"package"
return B.a.v(r.a,0,q)},
gaE(){var s=this.c,r=this.b+3
return s>r?B.a.v(this.a,r,s-1):""},
gaM(){var s=this.c
return s>0?B.a.v(this.a,s,this.d):""},
gbI(){var s,r=this
if(r.gcV())return A.ce(B.a.v(r.a,r.d+1,r.e),null,null)
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gav(){return B.a.v(this.a,this.e,this.f)},
gbd(){var s=this.f,r=this.r
return s<r?B.a.v(this.a,s+1,r):""},
gba(){var s=this.r,r=this.a
return s<r.length?B.a.D(r,s+1):""},
gej(){if(this.f>=this.r)return B.cK
return new A.b7(A.mQ(this.gbd()),t.dw)},
gek(){if(this.f>=this.r)return B.aq
var s=A.no(this.gbd())
s.ep(A.nZ())
return A.mq(s,t.N,t.a)},
du(a){var s=this.d+1
return s+a.length===this.e&&B.a.a5(this.a,a,s)},
hu(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.aU(B.a.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
en(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.ly(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.v(h.a,h.b+3,q):""
o=h.gcV()?h.gbI():g
if(s)o=A.i1(o,a)
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
return A.dW(a,p,n,o,l,j,i)},
eo(a){return this.bJ(A.eU(a,0,null))},
bJ(a){if(a instanceof A.aU)return this.fS(this,a)
return this.dU().bJ(a)},
fS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.u(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.u(a.a,"http"))p=!b.du("80")
else p=!(r===5&&B.a.u(a.a,"https"))||!b.du("443")
if(p){o=r+1
return new A.aU(B.a.v(a.a,0,o)+B.a.D(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.dU().bJ(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.aU(B.a.v(a.a,0,r)+B.a.D(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.aU(B.a.v(a.a,0,r)+B.a.D(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.hu()}s=b.a
if(B.a.a5(s,"/",n)){m=a.e
l=A.n6(this)
k=l>0?l:m
o=k-n
return new A.aU(B.a.v(a.a,0,k)+B.a.D(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a5(s,"../",n))n+=3
o=j-n+1
return new A.aU(B.a.v(a.a,0,j)+"/"+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.n6(this)
if(l>=0)g=l
else for(g=j;B.a.a5(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a5(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.b(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a5(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.aU(B.a.v(h,0,i)+d+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
d4(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.u(r.a,"file"))
q=s}else q=!1
if(q)throw A.a(A.O("Cannot extract a file path from a "+r.gal()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.a(A.O(u.y))
throw A.a(A.O(u.l))}if(r.c<r.d)A.E(A.O(u.j))
q=B.a.v(s,r.e,q)
return q},
gX(a){var s=this.x
return s==null?this.x=B.a.gX(this.a):s},
T(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.n(0)},
dU(){var s=this,r=null,q=s.gal(),p=s.gaE(),o=s.c>0?s.gaM():r,n=s.gcV()?s.gbI():r,m=s.a,l=s.f,k=B.a.v(m,s.e,l),j=s.r
l=l<j?s.gbd():r
return A.dW(q,p,o,n,k,l,j<m.length?s.gba():r)},
n(a){return this.a},
$ieS:1}
A.f3.prototype={}
A.ef.prototype={}
A.ct.prototype={
bb(a){var s,r
this.$ti.i("f<1>?").a(a)
for(s=a.gq(a),r=0;s.k();){r=r+J.ae(s.gm())&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cQ.prototype={
bb(a){var s,r
this.$ti.i("cQ.T?").a(a)
for(s=a.gq(a),r=0;s.k();)r=r+J.ae(s.gm())&2147483647
r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.bY.prototype={}
A.dk.prototype={
t(a,b){this.aA(this.$ti.c.a(b))},
n(a){return A.fY(this,"{","}")},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
sl(a,b){var s,r,q,p,o=this
if(b<0)throw A.a(A.a8("Length "+b+" may not be negative."))
if(b>o.gl(0)&&!o.$ti.c.b(null))throw A.a(A.O("The length can only be increased when the element type is nullable, but the current element type is `"+A.ba(o.$ti.c).n(0)+"`."))
s=b-o.gl(0)
if(s>=0){if(o.a.length<=b)o.fD(b)
o.c=(o.c+s&o.a.length-1)>>>0
return}r=o.c
q=r+s
p=o.a
if(q>=0)B.b.bD(p,q,r,null)
else{q+=p.length
B.b.bD(p,0,r,null)
r=o.a
B.b.bD(r,q,r.length,null)}o.c=q},
h(a,b){var s,r,q,p=this
A.T(b)
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
aA(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.b.j(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.aL(r*2,null,!1,n.i("1?"))
n=o.a
s=o.b
p=n.length-s
B.b.am(q,0,p,n,s)
B.b.am(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.a=q}},
h2(a){var s,r,q,p,o,n=this
n.$ti.i("q<1?>").a(a)
s=n.b
r=n.c
q=n.a
if(s<=r){p=r-s
B.b.am(a,0,p,q,s)
return p}else{o=q.length-s
B.b.am(a,0,o,q,s)
B.b.am(a,o,o+n.c,n.a,0)
return n.c+o}},
fD(a){var s=this,r=A.aL(A.pn(a+B.c.aH(a,1)),null,!1,s.$ti.i("1?"))
s.c=s.h2(r)
s.a=r
s.b=0},
$iv:1,
$if:1,
$iq:1}
A.dM.prototype={}
A.aT.prototype={
j(a,b,c){var s=A.j(this)
s.i("aT.K").a(b)
s.i("aT.V").a(c)
return A.mL()},
I(a,b){return A.mL()}}
A.fz.prototype={
h3(a){var s,r,q=t.d4
A.nP("absolute",A.c([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.az(a)>0&&!s.b5(a)
if(s)return a
s=A.o0()
r=A.c([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.nP("join",r)
return this.hk(new A.dA(r,t.eJ))},
hk(a){var s,r,q,p,o,n,m,l,k,j
t.cs.a(a)
for(s=a.$ti,r=s.i("l(f.E)").a(new A.fA()),q=a.gq(0),s=new A.bo(q,r,s.i("bo<f.E>")),r=this.a,p=!1,o=!1,n="";s.k();){m=q.gm()
if(r.b5(m)&&o){l=A.eB(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.a.v(k,0,r.bm(k,!0))
l.b=n
if(r.bG(n))B.b.j(l.e,0,r.gbe())
n=l.n(0)}else if(r.az(m)>0){o=!r.b5(m)
n=m}else{j=m.length
if(j!==0){if(0>=j)return A.b(m,0)
j=r.cM(m[0])}else j=!1
if(!j)if(p)n+=r.gbe()
n+=m}p=r.bG(m)}return n.charCodeAt(0)==0?n:n},
bp(a,b){var s=A.eB(b,this.a),r=s.d,q=A.u(r),p=q.i("r<1>")
r=A.o(new A.r(r,q.i("l(1)").a(new A.fB()),p),p.i("f.E"))
s.sho(r)
r=s.b
if(r!=null)B.b.bh(s.d,0,r)
return s.d},
b6(a){var s
if(!this.fj(a))return a
s=A.eB(a,this.a)
s.d0()
return s.n(0)},
fj(a){var s,r,q,p,o,n,m,l=this.a,k=l.az(a)
if(k!==0){if(l===$.fw())for(s=a.length,r=0;r<k;++r){if(!(r<s))return A.b(a,r)
if(a.charCodeAt(r)===47)return!0}q=k
p=47}else{q=0
p=null}for(s=a.length,r=q,o=null;r<s;++r,o=p,p=n){if(!(r>=0))return A.b(a,r)
n=a.charCodeAt(r)
if(l.aX(n)){if(l===$.fw()&&n===47)return!0
if(p!=null&&l.aX(p))return!0
if(p===46)m=o==null||o===46||l.aX(o)
else m=!1
if(m)return!0}}if(p==null)return!0
if(l.aX(p))return!0
if(p===46)l=o==null||l.aX(o)||o===46
else l=!1
if(l)return!0
return!1},
hs(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.az(a)
if(i<=0)return l.b6(a)
s=A.o0()
if(j.az(s)<=0&&j.az(a)>0)return l.b6(a)
if(j.az(a)<=0||j.b5(a))a=l.h3(a)
if(j.az(a)<=0&&j.az(s)>0)throw A.a(A.mD(k+a+'" from "'+s+'".'))
r=A.eB(s,j)
r.d0()
q=A.eB(a,j)
q.d0()
i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]==="."}else i=!1
if(i)return q.n(0)
i=r.b
p=q.b
if(i!=p)i=i==null||p==null||!j.d2(i,p)
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
n=j.d2(i,n[0])
i=n}else i=o}else i=o
if(!i)break
B.b.bl(r.d,0)
B.b.bl(r.e,1)
B.b.bl(q.d,0)
B.b.bl(q.e,1)}i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]===".."}else i=!1
if(i)throw A.a(A.mD(k+a+'" from "'+s+'".'))
i=t.N
B.b.cW(q.d,0,A.aL(p,"..",!1,i))
B.b.j(q.e,0,"")
B.b.cW(q.e,1,A.aL(r.d.length,j.gbe(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&B.b.gK(j)==="."){B.b.el(q.d)
j=q.e
if(0>=j.length)return A.b(j,-1)
j.pop()
if(0>=j.length)return A.b(j,-1)
j.pop()
B.b.t(j,"")}q.b=""
q.em()
return q.n(0)},
eh(a){var s,r,q=this,p=A.nG(a)
if(p.gal()==="file"&&q.a===$.e4())return p.n(0)
else if(p.gal()!=="file"&&p.gal()!==""&&q.a!==$.e4())return p.n(0)
s=q.b6(q.a.d1(A.nG(p)))
r=q.hs(s)
return q.bp(0,r).length>q.bp(0,s).length?s:r}}
A.fA.prototype={
$1(a){return A.e(a)!==""},
$S:0}
A.fB.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.iC.prototype={
$1(a){A.ca(a)
return a==null?"null":'"'+a+'"'},
$S:34}
A.cs.prototype={
eu(a){var s,r=this.az(a)
if(r>0)return B.a.v(a,0,r)
if(this.b5(a)){if(0>=a.length)return A.b(a,0)
s=a[0]}else s=null
return s},
d2(a,b){return a===b}}
A.hc.prototype={
em(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gK(s)===""))break
B.b.el(q.d)
s=q.e
if(0>=s.length)return A.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.b.j(s,r-1,"")},
d0(){var s,r,q,p,o,n,m=this,l=A.c([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.Y)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o===".."){n=l.length
if(n!==0){if(0>=n)return A.b(l,-1)
l.pop()}else ++q}else B.b.t(l,o)}if(m.b==null)B.b.cW(l,0,A.aL(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.b.t(l,".")
m.d=l
s=m.a
m.e=A.aL(l.length+1,s.gbe(),!0,t.N)
r=m.b
if(r==null||l.length===0||!s.bG(r))B.b.j(m.e,0,"")
r=m.b
if(r!=null&&s===$.fw())m.b=A.K(r,"/","\\")
m.em()},
n(a){var s,r,q,p,o,n=this.b
n=n!=null?n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.b(q,o)
n=n+q[o]+s[o]}n+=B.b.gK(q)
return n.charCodeAt(0)==0?n:n},
sho(a){this.d=t.a.a(a)}}
A.eC.prototype={
n(a){return"PathException: "+this.a},
$iav:1}
A.ho.prototype={
n(a){return this.gd_()}}
A.eE.prototype={
cM(a){return B.a.p(a,"/")},
aX(a){return a===47},
bG(a){var s,r=a.length
if(r!==0){s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)!==47
r=s}else r=!1
return r},
bm(a,b){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
if(s)return 1
return 0},
az(a){return this.bm(a,!1)},
b5(a){return!1},
d1(a){var s
if(a.gal()===""||a.gal()==="file"){s=a.gav()
return A.ao(s,0,s.length,B.e,!1)}throw A.a(A.W("Uri "+a.n(0)+" must have scheme 'file:'."))},
gd_(){return"posix"},
gbe(){return"/"}}
A.eV.prototype={
cM(a){return B.a.p(a,"/")},
aX(a){return a===47},
bG(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)!==47)return!0
return B.a.aL(a,"://")&&this.az(a)===r},
bm(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(0>=p)return A.b(a,0)
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.af(a,"/",B.a.a5(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.u(a,"file://"))return q
p=A.o3(a,q+1)
return p==null?q:p}}return 0},
az(a){return this.bm(a,!1)},
b5(a){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
d1(a){return a.n(0)},
gd_(){return"url"},
gbe(){return"/"}}
A.eX.prototype={
cM(a){return B.a.p(a,"/")},
aX(a){return a===47||a===92},
bG(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)
return!(s===47||s===92)},
bm(a,b){var s,r,q=a.length
if(q===0)return 0
if(0>=q)return A.b(a,0)
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(q>=2){if(1>=q)return A.b(a,1)
s=a.charCodeAt(1)!==92}else s=!0
if(s)return 1
r=B.a.af(a,"\\",2)
if(r>0){r=B.a.af(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.ob(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
az(a){return this.bm(a,!1)},
b5(a){return this.az(a)===1},
d1(a){var s,r
if(a.gal()!==""&&a.gal()!=="file")throw A.a(A.W("Uri "+a.n(0)+" must have scheme 'file:'."))
s=a.gav()
if(a.gaM()===""){if(s.length>=3&&B.a.u(s,"/")&&A.o3(s,1)!=null)s=B.a.d3(s,"/","")}else s="\\\\"+a.gaM()+s
r=A.K(s,"/","\\")
return A.ao(r,0,r.length,B.e,!1)},
h7(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
d2(a,b){var s,r,q
if(a===b)return!0
s=a.length
r=b.length
if(s!==r)return!1
for(q=0;q<s;++q){if(!(q<r))return A.b(b,q)
if(!this.h7(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gd_(){return"windows"},
gbe(){return"\\"}}
A.hm.prototype={
gl(a){return this.c.length},
ghm(){return this.b.length},
eI(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.c,r=s.length,q=a.a,p=q.length,o=s.$flags|0,n=this.b,m=0;m<r;++m){if(!(m<p))return A.b(q,m)
l=q.charCodeAt(m)
o&2&&A.G(s)
s[m]=l
if(l===13){k=m+1
if(k<p){if(!(k<p))return A.b(q,k)
j=q.charCodeAt(k)!==10}else j=!0
if(j)l=10}if(l===10)B.b.t(n,m+1)}},
cb(a,b){return A.a3(this,a,b)},
bn(a){var s,r=this
if(a<0)throw A.a(A.a8("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.a(A.a8("Offset "+a+u.s+r.gl(0)+"."))
s=r.b
if(a<B.b.gU(s))return-1
if(a>=B.b.gK(s))return s.length-1
if(r.fa(a)){s=r.d
s.toString
return s}return r.d=r.eN(a)-1},
fa(a){var s,r,q,p=this.d
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
eN(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.c.ai(o-s,2)
if(!(r>=0&&r<p))return A.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
c9(a){var s,r,q,p=this
if(a<0)throw A.a(A.a8("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.a(A.a8("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gl(0)+"."))
s=p.bn(a)
r=p.b
if(!(s>=0&&s<r.length))return A.b(r,s)
q=r[s]
if(q>a)throw A.a(A.a8("Line "+s+" comes after offset "+a+"."))
return a-q},
bK(a){var s,r,q,p
if(a<0)throw A.a(A.a8("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.a(A.a8("Line "+a+" must be less than the number of lines in the file, "+this.ghm()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.a(A.a8("Line "+a+" doesn't have 0 columns."))
return q}}
A.cq.prototype={
gY(){return this.a.a},
ga8(){return this.a.bn(this.b)},
gab(){return this.a.c9(this.b)},
d6(a,b){var s,r=this.b
if(r<0)throw A.a(A.a8("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a8("Offset "+r+u.s+s.gl(0)+"."))}},
bH(){var s=this.b
return A.a3(this.a,s,s)},
gL(){return this.b}}
A.bp.prototype={
gY(){return this.a.a},
gl(a){return this.c-this.b},
gC(){return A.Z(this.a,this.b)},
gH(){return A.Z(this.a,this.c)},
gak(){return A.dt(B.M.cd(this.a.c,this.b,this.c),0,null)},
gaB(){var s=this,r=s.a,q=s.c,p=r.bn(q)
if(r.c9(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dt(B.M.cd(r.c,r.bK(p),r.bK(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.bK(p+1)
return A.dt(B.M.cd(r.c,r.bK(r.bn(s.b)),q),0,null)},
ce(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.a(A.W("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a8("End "+r+u.s+s.gl(0)+"."))
else if(q<0)throw A.a(A.a8("Start may not be negative, was "+q+"."))}},
ao(a,b){var s
t.I.a(b)
if(!(b instanceof A.bp))return this.eD(0,b)
s=B.c.ao(this.b,b.b)
return s===0?B.c.ao(this.c,b.c):s},
T(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.bp))return s.eC(0,b)
return s.b===b.b&&s.c===b.c&&J.p(s.a.a,b.a.a)},
gX(a){return A.ez(this.b,this.c,this.a.a,B.n)},
ar(a,b){var s,r=this,q=r.a
if(!J.p(q.a,b.a.a))throw A.a(A.W('Source URLs "'+A.m(r.gY())+'" and  "'+A.m(b.gY())+"\" don't match."))
s=Math.min(r.b,b.b)
return A.a3(q,s,Math.max(r.c,b.c))},
$ip5:1,
$ibl:1}
A.fC.prototype={
hh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.e0(B.b.gU(a0).c)
s=a.e
r=A.aL(s,null,!1,t.gS)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=n.c
if(!J.p(m.c,l)){a.bX("\u2575")
q.a+="\n"
a.e0(l)}else if(m.b+1!==n.b){a.h0("...")
q.a+="\n"}}for(l=n.d,k=A.u(l).i("bP<1>"),j=new A.bP(l,k),j=new A.a5(j,j.gl(0),k.i("a5<z.E>")),k=k.i("z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gC().ga8()!==f.gH().ga8()&&f.gC().ga8()===i&&a.fc(B.a.v(h,0,f.gC().gab()))){e=B.b.au(r,null)
if(e<0)A.E(A.W(A.m(r)+" contains no null elements."))
B.b.j(r,e,g)}}a.h_(i)
q.a+=" "
a.fZ(n,r)
if(s)q.a+=" "
d=B.b.bc(l,new A.fX())
if(d===-1)c=null
else{if(!(d>=0&&d<l.length))return A.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gC().ga8()===i?j.gC().gab():0
a.fX(h,g,j.gH().ga8()===i?j.gH().gab():h.length,p)}else a.bZ(h)
q.a+="\n"
if(k)a.fY(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.bX("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
e0(a){var s,r,q=this
if(!q.f||!t.k.b(a))q.bX("\u2577")
else{q.bX("\u250c")
q.aG(new A.fK(q),"\x1b[34m",t.n)
s=q.r
r=" "+$.mf().eh(a)
s.a+=r}q.r.a+="\n"},
bW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
t.E.a(b)
e.a=!1
e.b=null
s=c==null
if(s)r=null
else r=f.b
for(q=b.length,p=t.b,o=f.b,s=!s,n=f.r,m=t.n,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
h=i?null:j.a.gC().ga8()
g=i?null:j.a.gH().ga8()
if(s&&j===c){f.aG(new A.fR(f,h,a),r,p)
l=!0}else if(l)f.aG(new A.fS(f,j),r,p)
else if(i)if(e.a)f.aG(new A.fT(f),e.b,m)
else n.a+=" "
else f.aG(new A.fU(e,f,c,h,a,j,g),o,p)}},
fZ(a,b){return this.bW(a,b,null)},
fX(a,b,c,d){var s=this
s.bZ(B.a.v(a,0,b))
s.aG(new A.fL(s,a,b,c),d,t.n)
s.bZ(B.a.v(a,c,a.length))},
fY(a,b,c){var s,r,q,p=this
t.E.a(c)
s=p.b
r=b.a
if(r.gC().ga8()===r.gH().ga8()){p.cL()
r=p.r
r.a+=" "
p.bW(a,c,b)
if(c.length!==0)r.a+=" "
p.e1(b,c,p.aG(new A.fM(p,a,b),s,t.p))}else{q=a.b
if(r.gC().ga8()===q){if(B.b.p(c,b))return
A.tH(c,b,t.C)
p.cL()
r=p.r
r.a+=" "
p.bW(a,c,b)
p.aG(new A.fN(p,a,b),s,t.n)
r.a+="\n"}else if(r.gH().ga8()===q){r=r.gH().gab()
if(r===a.a.length){A.oj(c,b,t.C)
return}p.cL()
p.r.a+=" "
p.bW(a,c,b)
p.e1(b,c,p.aG(new A.fO(p,!1,a,b),s,t.p))
A.oj(c,b,t.C)}}},
e_(a,b,c){var s=c?0:1,r=this.r
s=B.a.ah("\u2500",1+b+this.cm(B.a.v(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
fW(a,b){return this.e_(a,b,!0)},
e1(a,b,c){t.E.a(b)
this.r.a+="\n"
return},
bZ(a){var s,r,q,p
for(s=new A.aO(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),q=this.r,r=r.i("t.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.ah(" ",4)
else{p=A.B(p)
q.a+=p}}},
bY(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.n(b+1)
this.aG(new A.fV(s,this,a),"\x1b[34m",t.b)},
bX(a){return this.bY(a,null,null)},
h0(a){return this.bY(null,null,a)},
h_(a){return this.bY(null,a,null)},
cL(){return this.bY(null,null,null)},
cm(a){var s,r,q,p
for(s=new A.aO(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
fc(a){var s,r,q
for(s=new A.aO(a),r=t.V,s=new A.a5(s,s.gl(0),r.i("a5<t.E>")),r=r.i("t.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
aG(a,b,c){var s,r
c.i("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.fW.prototype={
$0(){return this.a},
$S:36}
A.fE.prototype={
$1(a){var s=t.A.a(a).d,r=A.u(s)
return new A.r(s,r.i("l(1)").a(new A.fD()),r.i("r<1>")).gl(0)},
$S:37}
A.fD.prototype={
$1(a){var s=t.C.a(a).a
return s.gC().ga8()!==s.gH().ga8()},
$S:11}
A.fF.prototype={
$1(a){return t.A.a(a).c},
$S:40}
A.fH.prototype={
$1(a){var s=t.C.a(a).a.gY()
return s==null?new A.w():s},
$S:41}
A.fI.prototype={
$2(a,b){var s=t.C
return s.a(a).a.ao(0,s.a(b).a)},
$S:42}
A.fJ.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.aS.a(a0)
s=a0.a
r=a0.b
q=A.c([],t.ef)
for(p=J.a1(r),o=p.gq(r),n=t.J;o.k();){m=o.gm().a
l=m.gaB()
k=A.jl(l,m.gak(),m.gC().gab())
k.toString
j=B.a.bB("\n",B.a.v(l,0,k)).gl(0)
i=m.gC().ga8()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.b.gK(q).b)B.b.t(q,new A.aM(g,i,s,A.c([],n)));++i}}f=A.c([],n)
for(o=q.length,n=t.as,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.Y)(q),++h){g=q[h]
m=n.a(new A.fG(g))
e&1&&A.G(f,16)
B.b.dL(f,m,!0)
c=f.length
for(m=p.aq(r,d),k=m.$ti,m=new A.a5(m,m.gl(0),k.i("a5<z.E>")),b=g.b,k=k.i("z.E");m.k();){a=m.d
if(a==null)a=k.a(a)
if(a.a.gC().ga8()>b)break
B.b.t(f,a)}d+=f.length-c
B.b.a2(g.d,f)}return q},
$S:45}
A.fG.prototype={
$1(a){return t.C.a(a).a.gH().ga8()<this.a.b},
$S:11}
A.fX.prototype={
$1(a){t.C.a(a)
return!0},
$S:11}
A.fK.prototype={
$0(){this.a.r.a+=B.a.ah("\u2500",2)+">"
return null},
$S:8}
A.fR.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:5}
A.fS.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:5}
A.fT.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:8}
A.fU.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aG(new A.fP(p,s),p.b,t.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gH().gab()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aG(new A.fQ(r,o),p.b,t.b)}}},
$S:5}
A.fP.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:5}
A.fQ.prototype={
$0(){this.a.r.a+=this.b},
$S:5}
A.fL.prototype={
$0(){var s=this
return s.a.bZ(B.a.v(s.b,s.c,s.d))},
$S:8}
A.fM.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gC().gab(),l=n.gH().gab()
n=this.b.a
s=q.cm(B.a.v(n,0,m))
r=q.cm(B.a.v(n,m,l))
m+=s*3
n=(p.a+=B.a.ah(" ",m))+B.a.ah("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:19}
A.fN.prototype={
$0(){return this.a.fW(this.b,this.c.a.gC().gab())},
$S:8}
A.fO.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.ah("\u2500",3)
else r.e_(s.c,Math.max(s.d.a.gH().gab()-1,0),!1)
return q.a.length-p.length},
$S:19}
A.fV.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.hn(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:5}
A.aj.prototype={
n(a){var s=this.a
s="primary "+(""+s.gC().ga8()+":"+s.gC().gab()+"-"+s.gH().ga8()+":"+s.gH().gab())
return s.charCodeAt(0)==0?s:s}}
A.hQ.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.q.b(o)&&A.jl(o.gaB(),o.gak(),o.gC().gab())!=null)){s=A.bT(o.gC().gL(),0,0,o.gY())
r=o.gH().gL()
q=o.gY()
p=A.rC(o.gak(),10)
o=A.hn(s,A.bT(r,A.n0(o.gak()),p,q),o.gak(),o.gak())}return A.pU(A.pW(A.pV(o)))},
$S:59}
A.aM.prototype={
n(a){return""+this.b+': "'+this.a+'" ('+B.b.R(this.d,", ")+")"}}
A.bS.prototype={
cO(a){var s=this.a
if(!J.p(s,a.gY()))throw A.a(A.W('Source URLs "'+A.m(s)+'" and "'+A.m(a.gY())+"\" don't match."))
return Math.abs(this.b-a.gL())},
ao(a,b){var s
t.F.a(b)
s=this.a
if(!J.p(s,b.gY()))throw A.a(A.W('Source URLs "'+A.m(s)+'" and "'+A.m(b.gY())+"\" don't match."))
return this.b-b.gL()},
T(a,b){if(b==null)return!1
return t.F.b(b)&&J.p(this.a,b.gY())&&this.b===b.gL()},
gX(a){var s=this.a
s=s==null?null:s.gX(s)
if(s==null)s=0
return s+this.b},
n(a){var s=this,r=A.jr(s).n(0),q=s.a
return"<"+r+": "+s.b+" "+(A.m(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
gY(){return this.a},
gL(){return this.b},
ga8(){return this.c},
gab(){return this.d}}
A.eJ.prototype={
cO(a){if(!J.p(this.a.a,a.gY()))throw A.a(A.W('Source URLs "'+A.m(this.gY())+'" and "'+A.m(a.gY())+"\" don't match."))
return Math.abs(this.b-a.gL())},
ao(a,b){t.F.a(b)
if(!J.p(this.a.a,b.gY()))throw A.a(A.W('Source URLs "'+A.m(this.gY())+'" and "'+A.m(b.gY())+"\" don't match."))
return this.b-b.gL()},
T(a,b){if(b==null)return!1
return t.F.b(b)&&J.p(this.a.a,b.gY())&&this.b===b.gL()},
gX(a){var s=this.a.a
s=s==null?null:s.gX(s)
if(s==null)s=0
return s+this.b},
n(a){var s=A.jr(this).n(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.m(p==null?"unknown source":p)+":"+(q.bn(r)+1)+":"+(q.c9(r)+1))+">"},
$ibS:1}
A.dq.prototype={
d7(a,b,c){var s,r=this.b,q=this.a
if(!J.p(r.gY(),q.gY()))throw A.a(A.W('Source URLs "'+A.m(q.gY())+'" and  "'+A.m(r.gY())+"\" don't match."))
else if(r.gL()<q.gL())throw A.a(A.W("End "+r.n(0)+" must come after start "+q.n(0)+"."))
else{s=this.c
if(s.length!==q.cO(r))throw A.a(A.W('Text "'+s+'" must be '+q.cO(r)+" characters long."))}},
gC(){return this.a},
gH(){return this.b},
gak(){return this.c}}
A.eK.prototype={
ged(){return this.a},
n(a){return"Error on "+this.b.ef(this.a,null)},
$iav:1}
A.eL.prototype={$ii:1}
A.cC.prototype={
gY(){return this.gC().gY()},
gl(a){return this.gH().gL()-this.gC().gL()},
ao(a,b){var s
t.I.a(b)
s=this.gC().ao(0,b.gC())
return s===0?this.gH().ao(0,b.gH()):s},
ef(a,b){var s,r,q,p=this,o="line "+(p.gC().ga8()+1)+", column "+(p.gC().gab()+1)
if(p.gY()!=null){s=p.gY()
r=$.mf()
s.toString
s=o+(" of "+r.eh(s))
o=s}o+=": "+a
q=p.hi(b)
if(q.length!==0)o=o+"\n"+q
return o.charCodeAt(0)==0?o:o},
ee(a){return this.ef(a,null)},
hi(a){var s=this
if(!t.q.b(s)&&s.gl(s)===0)return""
return A.p6(s,a).hh()},
T(a,b){if(b==null)return!1
return b instanceof A.cC&&this.gC().T(0,b.gC())&&this.gH().T(0,b.gH())},
gX(a){return A.ez(this.gC(),this.gH(),B.n,B.n)},
n(a){var s=this
return"<"+A.jr(s).n(0)+": from "+s.gC().n(0)+" to "+s.gH().n(0)+' "'+s.gak()+'">'},
$icB:1}
A.bl.prototype={
gaB(){return this.d}}
A.eg.prototype={
a0(a){var s,r=this
if(a!==10)s=a===13&&r.W()!==10
else s=!0
if(s){++r.as
r.at=0}else{s=r.at
r.at=s+(a>=65536&&a<=1114111?2:1)}},
bL(a){var s,r,q,p,o=this
if(!o.eF(a))return!1
s=o.gcZ()
r=s.c
q=o.fk(r)
s=o.as
p=q.length
o.as=s+p
s=r.length
if(p===0)o.at+=s
else o.at=s-B.b.gK(q).gH()
return!0},
fk(a){var s=$.oJ().bB(0,a),r=A.o(s,A.j(s).i("f.E"))
if(this.S(-1)===13&&this.W()===10){if(0<0||0>=r.length)return A.b(r,-1)
r.pop()}return r}}
A.as.prototype={$ipg:1}
A.ds.prototype={}
A.eM.prototype={
gaI(){var s=A.Z(this.f,this.c),r=s.b
return A.a3(s.a,r,r)},
cc(a,b){var s=b==null?this.c:b.b
return this.f.cb(a.b,s)},
an(a){return this.cc(a,null)},
aO(a){var s,r,q=this
if(!q.eE(a))return!1
s=q.c
r=q.gcZ()
q.f.cb(s,r.a+r.c.length)
return!0},
cR(a,b,c){var s,r,q=this,p=q.b
A.u3(p,null,c,b)
s=c==null&&b==null?q.gcZ():null
if(c==null)c=s==null?q.c:s.a
if(b==null)if(s==null)b=0
else{r=s.a
b=r+s.c.length-r}throw A.a(A.pu(a,q.f.cb(c,c+b),p))},
cQ(a,b){return this.cR(a,b,null)},
he(a){return this.cR(a,null,null)}}
A.eO.prototype={
gcZ(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
hq(){var s,r=this,q=r.b,p=q.length
if(r.c===p)r.de("more input")
s=r.c++
if(!(s>=0&&s<p))return A.b(q,s)
return q.charCodeAt(s)},
S(a){var s,r
if(a==null)a=0
s=this.c+a
if(s<0||s>=this.b.length)return null
r=this.b
if(!(s>=0&&s<r.length))return A.b(r,s)
return r.charCodeAt(s)},
W(){return this.S(null)},
aj(){var s,r=this,q=r.a_()
r.a0(q)
if((q&4294966272)!==55296)return q
s=r.W()
if(s==null||s>>>10!==55)return q
r.a0(r.a_())
return 65536+((q&1023)<<10|s&1023)},
bL(a){var s,r=this,q=r.aO(a)
if(q){s=r.d
r.e=r.c=s.a+s.c.length}return q},
c2(a){var s,r
if(this.bL(a))return
s=A.K(a,"\\","\\\\")
r='"'+A.K(s,'"','\\"')+'"'
this.de(r)},
aO(a){var s=this,r=B.a.bF(a,s.b,s.c)
s.d=r
s.e=s.c
return r!=null},
D(a,b){var s=this.c
return B.a.v(this.b,b,s)},
de(a){this.cR("expected "+a+".",0,this.c)}}
A.hO.prototype={
cP(a,b){var s,r,q,p,o,n,m,l,k,j=this
a=a
b=b
s=t.m
if(s.b(a))a=a.ga6()
if(s.b(b))b=b.ga6()
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
if(r.b(a)&&r.b(b)){r=j.fd(a,b)
return r}else{r=t.f
if(r.b(a)&&r.b(b)){r=j.fh(a,b)
return r}else if(typeof a=="number"&&typeof b=="number"){r=j.fl(a,b)
return r}else{r=J.p(a,b)
return r}}}finally{if(0>=s.length)return A.b(s,-1)
s.pop()
if(0>=q.length)return A.b(q,-1)
q.pop()}},
fd(a,b){var s,r=J.F(a),q=J.F(b)
if(r.gl(a)!==q.gl(b))return!1
for(s=0;s<r.gl(a);++s)if(!this.cP(r.h(a,s),q.h(b,s)))return!1
return!0},
fh(a,b){var s,r
if(a.gl(a)!==b.gl(b))return!1
for(s=a.gG(),s=s.gq(s);s.k();){r=s.gm()
if(!b.E(r))return!1
if(!this.cP(a.h(0,r),b.h(0,r)))return!1}return!0},
fl(a,b){if(isNaN(a)&&isNaN(b))return!0
return a===b}}
A.j7.prototype={
$1(a){var s,r,q,p=this
if(!p.a.t(0,a))return-1
try{if(t.f.b(a)){s=B.aU
r=t.X
q=s.bb(a.gG().ad(0,p,r))
r=s.bb(a.gag().ad(0,p,r))
return q^r}else if(t.R.b(a)){r=B.aM.bb(J.aX(a,p,t.X))
return r}else if(t.m.b(a)){r=J.ae(a.ga6())
return r}else{r=J.ae(a)
return r}}finally{p.a.I(0,a)}},
$S:6}
A.ab.prototype={
n(a){return this.a.bu()},
gB(){return this.a},
gA(){return this.b}}
A.d4.prototype={
gB(){return B.aW},
n(a){return"DOCUMENT_START"},
$iab:1,
gA(){return this.a}}
A.cn.prototype={
gB(){return B.aX},
n(a){return"DOCUMENT_END"},
$iab:1,
gA(){return this.a}}
A.cY.prototype={
gB(){return B.ab},
n(a){return"ALIAS "+this.b},
$iab:1,
gA(){return this.a}}
A.dY.prototype={
n(a){var s=this,r=s.gB().n(0)
if(s.gc0()!=null)r+=" &"+A.m(s.gc0())
if(s.gc6()!=null)r+=" "+A.m(s.gc6())
return r.charCodeAt(0)==0?r:r},
$iab:1}
A.al.prototype={
gB(){return B.ac},
n(a){return this.eG(0)+' "'+this.d+'"'},
gA(){return this.a},
gc0(){return this.b},
gc6(){return this.c}}
A.bQ.prototype={
gB(){return B.ad},
gA(){return this.a},
gc0(){return this.b},
gc6(){return this.c}}
A.bM.prototype={
gB(){return B.ae},
gA(){return this.a},
gc0(){return this.b},
gc6(){return this.c}}
A.aR.prototype={
bu(){return"EventType."+this.b}}
A.h8.prototype={
c5(){var s,r,q=this,p=q.a
if(p.c===B.a2)return null
s=p.aY()
if(s.gB()===B.aa){q.d=q.d.ar(0,s.gA())
return null}t.dg.a(s)
r=q.bR(p.aY())
p=s.a.ar(0,t.gR.a(p.aY()).a)
q.d=q.d.ar(0,p)
q.b.bC(0)
return new A.dC(r,p)},
bR(a){var s,r,q=this,p=a.gB()
A:{if(B.ab===p){s=q.fe(t.a6.a(a))
break A}if(B.ac===p){t.fy.a(a)
s=a.c
if(s==="!")r=new A.ar(a.d,a.e,a.a)
else if(s!=null)r=q.fn(a)
else{r=q.fV(a)
if(r==null)r=new A.ar(a.d,a.e,a.a)}q.cC(a.b,r)
s=r
break A}if(B.ad===p){s=q.fg(t.fP.a(a))
break A}if(B.ae===p){s=q.ff(t.fY.a(a))
break A}s=A.E(A.bm("Unreachable"))}return s},
cC(a,b){if(a==null)return
this.b.j(0,a,b)},
fe(a){var s=a.b,r=this.b.h(0,s)
if(r!=null){if(this.c.p(0,s))throw A.a(A.I("Self-referential collections are not supported.",a.a))
return r}throw A.a(A.I("Undefined alias.",a.a))},
fg(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c
if(i!=="!"&&i!=null&&i!=="tag:yaml.org,2002:seq")throw A.a(A.I("Invalid tag for sequence.",a.a))
s=A.c([],t.v)
i=a.a
m=new A.c_(new A.dx(s,t.ga),a.d,i)
l=a.b
j.cC(l,m)
r=null
try{q=l
p=null
if(q!=null){p=q
j.c.t(0,p)}k=j.a
r=k.aY()
while(r.gB()!==B.z){J.e7(s,j.bR(r))
r=k.aY()}}finally{o=l
n=null
if(o!=null){n=o
j.c.I(0,n)}}m.a=i.ar(0,r.gA())
return m},
ff(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.c
if(g!=="!"&&g!=null&&g!=="tag:yaml.org,2002:map")throw A.a(A.I("Invalid tag for mapping.",a.a))
s=A.h5(A.rN(),A.rO(),t.z,t.T)
g=a.a
k=new A.c0(new A.b7(s,t.gr),a.d,g)
j=a.b
h.cC(j,k)
r=null
try{q=j
p=null
if(q!=null){p=q
h.c.t(0,p)}i=h.a
r=i.aY()
while(r.gB()!==B.A){o=h.bR(r)
n=h.bR(i.aY())
if(s.E(o)){i=A.I("Duplicate mapping key.",o.a)
throw A.a(i)}J.e6(s,o,n)
r=i.aY()}}finally{m=j
l=null
if(m!=null){l=m
h.c.I(0,l)}}k.a=g.ar(0,r.gA())
return k},
fn(a){var s,r=this,q=a.c
switch(q){case"tag:yaml.org,2002:null":s=r.dG(a)
if(s!=null)return s
throw A.a(A.I("Invalid null scalar.",a.a))
case"tag:yaml.org,2002:bool":s=r.cz(a)
if(s!=null)return s
throw A.a(A.I("Invalid bool scalar.",a.a))
case"tag:yaml.org,2002:int":s=r.fA(a,!1)
if(s!=null)return s
throw A.a(A.I("Invalid int scalar.",a.a))
case"tag:yaml.org,2002:float":s=r.fB(a,!1)
if(s!=null)return s
throw A.a(A.I("Invalid float scalar.",a.a))
case"tag:yaml.org,2002:str":return new A.ar(a.d,a.e,a.a)
default:throw A.a(A.I("Undefined tag: "+A.m(q)+".",a.a))}},
fV(a){var s,r=this,q=null,p=a.d,o=p.length
if(o===0)return new A.ar(q,a.e,a.a)
if(0>=o)return A.b(p,0)
s=p.charCodeAt(0)
A:{if(46===s||43===s||45===s){p=r.dH(a)
break A}if(110===s||78===s){p=o===4?r.dG(a):q
break A}if(116===s||84===s){p=o===4?r.cz(a):q
break A}if(102===s||70===s){p=o===5?r.cz(a):q
break A}if(126===s){p=o===1?new A.ar(q,a.e,a.a):q
break A}p=s>=48&&s<=57?r.dH(a):q
break A}return p},
dG(a){var s,r=a.d
A:{if(""===r||"null"===r||"Null"===r||"NULL"===r||"~"===r){s=new A.ar(null,a.e,a.a)
break A}s=null
break A}return s},
cz(a){var s,r=a.d
A:{if("true"===r||"True"===r||"TRUE"===r){s=new A.ar(!0,a.e,a.a)
break A}if("false"===r||"False"===r||"FALSE"===r){s=new A.ar(!1,a.e,a.a)
break A}s=null
break A}return s},
cA(a,b,c){var s=this.fC(a.d,b,c)
return s==null?null:new A.ar(s,a.e,a.a)},
dH(a){return this.cA(a,!0,!0)},
fA(a,b){return this.cA(a,b,!0)},
fB(a,b){return this.cA(a,!0,b)},
fC(a,b,c){var s,r,q,p,o,n,m=null,l=a.length
if(0>=l)return A.b(a,0)
s=a.charCodeAt(0)
if(c&&l===1){r=s-48
return r>=0&&r<=9?r:m}if(1>=l)return A.b(a,1)
q=a.charCodeAt(1)
if(c&&s===48){if(q===120)return A.aS(a,m)
if(q===111)return A.aS(B.a.D(a,2),8)}if(!(s>=48&&s<=57))p=(s===43||s===45)&&q>=48&&q<=57
else p=!0
if(p){o=c?A.aS(a,10):m
return b?o==null?A.mG(a):o:o}if(!b)return m
p=s===46
if(!(p&&q>=48&&q<=57))n=(s===45||s===43)&&q===46
else n=!0
if(n){if(l===5)switch(a){case"+.inf":case"+.Inf":case"+.INF":return 1/0
case"-.inf":case"-.Inf":case"-.INF":return-1/0}return A.mG(a)}if(l===4&&p)switch(a){case".inf":case".Inf":case".INF":return 1/0
case".nan":case".NaN":case".NAN":return 0/0}return m}}
A.hd.prototype={
aY(){var s,r,q,p
try{if(this.c===B.a2){q=A.bm("No more events.")
throw A.a(q)}s=this.fU()
return s}catch(p){q=A.bF(p)
if(q instanceof A.ds){r=q
throw A.a(A.I(r.a,r.b))}else throw p}},
fU(){var s,r,q,p=this
switch(p.c){case B.aF:s=p.a.Z()
p.c=B.a1
return new A.ab(B.aV,s.gA())
case B.a1:return p.fq()
case B.aB:return p.fo()
case B.a0:return p.fp()
case B.az:return p.bw(!0)
case B.d2:return p.bx(!0,!0)
case B.d1:return p.b9()
case B.aA:p.a.Z()
return p.dC()
case B.F:return p.dC()
case B.H:return p.fz()
case B.ay:p.a.Z()
return p.dB()
case B.D:return p.dB()
case B.E:return p.fm()
case B.aE:return p.dF(!0)
case B.a4:return p.fu()
case B.aG:return p.fv()
case B.Z:return p.fw()
case B.a_:p.c=B.a4
r=p.a.a1().gA()
r=A.Z(r.a,r.b)
q=r.b
return new A.ab(B.A,A.a3(r.a,q,q))
case B.aD:return p.dD(!0)
case B.G:return p.fs()
case B.a3:return p.ft()
case B.aC:return p.dE(!0)
default:throw A.a(A.bm("Unreachable"))}},
fq(){var s,r,q,p=this,o=p.a,n=o.a1()
n.toString
for(s=n;s.gB()===B.U;s=n){o.Z()
n=o.a1()
n.toString}if(s.gB()!==B.R&&s.gB()!==B.S&&s.gB()!==B.T&&s.gB()!==B.x){p.dJ()
B.b.t(p.b,B.a0)
p.c=B.az
o=s.gA()
o=A.Z(o.a,o.b)
n=o.b
return A.mt(A.a3(o.a,n,n),!0,null,null)}if(s.gB()===B.x){p.c=B.a2
o.Z()
return new A.ab(B.aa,s.gA())}r=s.gA()
q=p.dJ()
s=o.a1()
if(s.gB()!==B.T)throw A.a(A.I("Expected document start.",s.gA()))
B.b.t(p.b,B.a0)
p.c=B.aB
o.Z()
return A.mt(r.ar(0,s.gA()),!1,q.b,q.a)},
fo(){var s,r,q=this,p=q.a.a1()
switch(p.gB().a){case 2:case 3:case 4:case 5:case 1:s=q.b
if(0>=s.length)return A.b(s,-1)
q.c=s.pop()
s=p.gA()
s=A.Z(s.a,s.b)
r=s.b
return new A.al(A.a3(s.a,r,r),null,null,"",B.i)
default:return q.bw(!0)}},
fp(){var s,r,q
this.d.bC(0)
this.c=B.a1
s=this.a
r=s.a1()
if(r.gB()===B.U){s.Z()
return new A.cn(r.gA(),!1)}else{s=r.gA()
s=A.Z(s.a,s.b)
q=s.b
return new A.cn(A.a3(s.a,q,q),!0)}},
bx(a,b){var s,r,q,p,o,n=this,m={},l=n.a,k=l.a1()
k.toString
if(k instanceof A.cZ){l.Z()
m=n.b
if(0>=m.length)return A.b(m,-1)
n.c=m.pop()
return new A.cY(k.a,k.b)}m.a=m.b=null
s=k.gA()
s=A.Z(s.a,s.b)
r=s.b
m.c=A.a3(s.a,r,r)
r=new A.he(m,n)
s=new A.hf(m,n)
if(k instanceof A.bt){q=r.$1(k)
if(q instanceof A.bz)q=s.$1(q)}else if(k instanceof A.bz){q=s.$1(k)
if(q instanceof A.bt)q=r.$1(q)}else q=k
k=m.a
if(k!=null){s=k.b
if(s==null)p=k.c
else{o=n.d.h(0,s)
if(o==null)throw A.a(A.I("Undefined tag handle.",m.a.a))
k=o.b
s=m.a
s=s==null?null:s.c
p=k+(s==null?"":s)}}else p=null
if(b&&q.gB()===B.u){n.c=B.H
return new A.bQ(m.c.ar(0,q.gA()),m.b,p,B.l)}if(q instanceof A.bx){if(p==null&&q.c!==B.i)p="!"
k=n.b
if(0>=k.length)return A.b(k,-1)
n.c=k.pop()
l.Z()
return new A.al(m.c.ar(0,q.a),m.b,p,q.b,q.c)}if(q.gB()===B.aw){n.c=B.aE
return new A.bQ(m.c.ar(0,q.gA()),m.b,p,B.f)}if(q.gB()===B.au){n.c=B.aD
return new A.bM(m.c.ar(0,q.gA()),m.b,p,B.f)}if(a&&q.gB()===B.V){n.c=B.aA
return new A.bQ(m.c.ar(0,q.gA()),m.b,p,B.l)}if(a&&q.gB()===B.C){n.c=B.ay
return new A.bM(m.c.ar(0,q.gA()),m.b,p,B.l)}if(m.b!=null||p!=null){l=n.b
if(0>=l.length)return A.b(l,-1)
n.c=l.pop()
return new A.al(m.c,m.b,p,"",B.i)}throw A.a(A.I("Expected node content.",m.c))},
bw(a){return this.bx(a,!1)},
b9(){return this.bx(!1,!1)},
dC(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()===B.u){s=o.gA()
r=A.Z(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.p){q.c=B.F
p=r.b
return new A.al(A.a3(r.a,p,p),null,null,"",B.i)}else{B.b.t(q.b,B.F)
return q.bw(!0)}}if(o.gB()===B.p){p.Z()
p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
return new A.ab(B.z,o.gA())}if(o.gB()===B.k){p.Z()
B.b.t(q.b,B.F)
return q.bw(!0)}throw A.a(A.I("While parsing a block collection, expected '-'.",o.gA().gC().bH()))},
fz(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()!==B.u){p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
p=o.gA()
p=A.Z(p.a,p.b)
s=p.b
return new A.ab(B.z,A.a3(p.a,s,s))}s=o.gA()
r=A.Z(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.k||o.gB()===B.m||o.gB()===B.p){q.c=B.H
p=r.b
return new A.al(A.a3(r.a,p,p),null,null,"",B.i)}else{B.b.t(q.b,B.H)
return q.bw(!0)}},
dB(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()===B.k){s=n.gA()
r=A.Z(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.m||n.gB()===B.p){q.c=B.E
o=r.b
return new A.al(A.a3(r.a,o,o),p,p,"",B.i)}else{B.b.t(q.b,B.E)
return q.bx(!0,!0)}}if(n.gB()===B.m){q.c=B.E
o=n.gA()
o=A.Z(o.a,o.b)
s=o.b
return new A.al(A.a3(o.a,s,s),p,p,"",B.i)}if(n.gB()===B.p){o.Z()
o=q.b
if(0>=o.length)return A.b(o,-1)
q.c=o.pop()
return new A.ab(B.A,n.gA())}throw A.a(A.I("Expected a key while parsing a block mapping.",n.gA().gC().bH()))},
fm(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()!==B.m){q.c=B.D
o=n.gA()
o=A.Z(o.a,o.b)
s=o.b
return new A.al(A.a3(o.a,s,s),p,p,"",B.i)}s=n.gA()
r=A.Z(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.m||n.gB()===B.p){q.c=B.D
o=r.b
return new A.al(A.a3(r.a,o,o),p,p,"",B.i)}else{B.b.t(q.b,B.D)
return q.bx(!0,!0)}},
dF(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.r){if(!a){if(r.gB()!==B.o)throw A.a(A.I("While parsing a flow sequence, expected ',' or ']'.",r.gA().gC().bH()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){p.c=B.aG
s.Z()
return new A.bM(r.gA(),null,null,B.f)}else if(r.gB()!==B.r){B.b.t(p.b,B.a4)
return p.b9()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.z,r.gA())},
fu(){return this.dF(!1)},
fv(){var s,r,q=this,p=q.a.a1()
if(p.gB()===B.m||p.gB()===B.o||p.gB()===B.r){s=p.gA()
r=A.Z(s.a,s.b)
q.c=B.Z
s=r.b
return new A.al(A.a3(r.a,s,s),null,null,"",B.i)}else{B.b.t(q.b,B.Z)
return q.b9()}},
fw(){var s,r=this,q=r.a,p=q.a1()
if(p.gB()===B.m){q.Z()
p=q.a1()
if(p.gB()!==B.o&&p.gB()!==B.r){B.b.t(r.b,B.a_)
return r.b9()}}r.c=B.a_
q=p.gA()
q=A.Z(q.a,q.b)
s=q.b
return new A.al(A.a3(q.a,s,s),null,null,"",B.i)},
dD(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.t){if(!a){if(r.gB()!==B.o)throw A.a(A.I("While parsing a flow mapping, expected ',' or '}'.",r.gA().gC().bH()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){s.Z()
r=s.a1()
if(r.gB()!==B.m&&r.gB()!==B.o&&r.gB()!==B.t){B.b.t(p.b,B.a3)
return p.b9()}else{p.c=B.a3
s=r.gA()
s=A.Z(s.a,s.b)
q=s.b
return new A.al(A.a3(s.a,q,q),null,null,"",B.i)}}else if(r.gB()!==B.t){B.b.t(p.b,B.aC)
return p.b9()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.A,r.gA())},
fs(){return this.dD(!1)},
dE(a){var s,r=this,q=null,p=r.a,o=p.a1()
o.toString
if(a){r.c=B.G
p=o.gA()
p=A.Z(p.a,p.b)
o=p.b
return new A.al(A.a3(p.a,o,o),q,q,"",B.i)}if(o.gB()===B.m){p.Z()
s=p.a1()
if(s.gB()!==B.o&&s.gB()!==B.t){B.b.t(r.b,B.G)
return r.b9()}}else s=o
r.c=B.G
p=s.gA()
p=A.Z(p.a,p.b)
o=p.b
return new A.al(A.a3(p.a,o,o),q,q,"",B.i)},
ft(){return this.dE(!1)},
dJ(){var s,r,q,p,o,n=this,m=n.a,l=m.a1()
l.toString
s=A.c([],t.r)
r=l
q=null
for(;;){if(!(r.gB()===B.R||r.gB()===B.S))break
if(r instanceof A.dz){if(q!=null)throw A.a(A.I("Duplicate %YAML directive.",r.a))
l=r.b
if(l!==1||r.c===0)throw A.a(A.I("Incompatible YAML document. This parser only supports YAML 1.1 and 1.2.",r.a))
else{p=r.c
if(p>2)$.kZ().$2("Warning: this parser only supports YAML 1.1 and 1.2.",r.a)}q=new A.hw(l,p)}else if(r instanceof A.du){o=new A.bW(r.b,r.c)
n.eL(o,r.a)
B.b.t(s,o)}m.Z()
l=m.a1()
l.toString
r=l}m=r.gA()
m=A.Z(m.a,m.b)
l=m.b
n.ci(new A.bW("!","!"),A.a3(m.a,l,l),!0)
l=r.gA()
l=A.Z(l.a,l.b)
m=l.b
n.ci(new A.bW("!!","tag:yaml.org,2002:"),A.a3(l.a,m,m),!0)
return new A.b8(q,s)},
ci(a,b,c){var s=this.d,r=a.a
if(s.E(r)){if(c)return
throw A.a(A.I("Duplicate %TAG directive.",b))}s.j(0,r,a)},
eL(a,b){return this.ci(a,b,!1)}}
A.he.prototype={
$1(a){var s=this.a
s.b=a.b
s.c=s.c.ar(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:70}
A.hf.prototype={
$1(a){var s=this.a
s.a=a
s.c=s.c.ar(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:71}
A.a4.prototype={
n(a){return this.a}}
A.hi.prototype={
gdv(){var s,r=this.c.W()
if(r==null)return!1
switch(r){case 45:case 59:case 47:case 58:case 64:case 38:case 61:case 43:case 36:case 46:case 126:case 63:case 42:case 39:case 40:case 41:case 37:return!0
default:s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=122))s=r>=65&&r<=90
return s}},
gf7(){if(!this.gds())return!1
switch(this.c.W()){case 44:case 91:case 93:case 123:case 125:return!1
default:return!0}},
gdr(){var s=this.c.W()
return s!=null&&s>=48&&s<=57},
gf9(){var s,r=this.c.W()
if(r==null)return!1
s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))s=r>=65&&r<=70
return s},
gfb(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r)break A
if(9===r||133===r){s=!0
break A}s=this.ct(0)
break A}return s},
gds(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r||32===r)break A
if(133===r){s=!0
break A}s=this.ct(0)
break A}return s},
Z(){var s,r,q,p,o=this
if(o.e)throw A.a(A.bm("Out of tokens."))
if(!o.w)o.dl()
s=o.f
r=s.b
if(r===s.c)A.E(A.bm("No element"))
q=s.a
if(!(r<q.length))return A.b(q,r)
p=q[r]
if(p==null)p=s.$ti.c.a(p)
B.b.j(q,r,null)
s.b=(s.b+1&s.a.length-1)>>>0
o.w=!1;++o.r
o.e=p.gB()===B.x
return p},
a1(){var s,r=this
if(r.e)return null
if(!r.w)r.dl()
s=r.f
return s.gU(s)},
dl(){var s,r,q=this
for(s=q.f,r=q.z;;){if(s.gl(0)!==0){q.dR()
if(s.gl(0)===0)A.E(A.a2())
if(s.h(0,s.gl(0)-1).gB()===B.x)break
if(!B.b.P(r,new A.hj(q)))break}q.f2()}q.w=!0},
f2(){var s,r,q,p,o,n,m,l=this
if(!l.d){l.d=!0
s=l.f
r=l.c
r=A.Z(r.f,r.c)
q=r.b
s.aA(s.$ti.c.a(new A.X(B.cQ,A.a3(r.a,q,q))))
return}l.fQ()
l.dR()
s=l.c
l.bV(s.at)
if(s.c===s.b.length){l.bV(-1)
l.b3()
l.y=!1
r=l.f
s=A.Z(s.f,s.c)
q=s.b
r.aA(r.$ti.c.a(new A.X(B.x,A.a3(s.a,q,q))))
return}if(s.at===0){if(s.W()===37){l.bV(-1)
l.b3()
l.y=!1
p=l.fK()
if(p!=null){s=l.f
s.aA(s.$ti.c.a(p))}return}if(l.bQ(3)){if(s.aO("---")){l.dh(B.T)
return}if(s.aO("...")){l.dh(B.U)
return}}}switch(s.W()){case 91:l.dj(B.aw)
return
case 123:l.dj(B.au)
return
case 93:l.di(B.r)
return
case 125:l.di(B.t)
return
case 44:l.b3()
l.y=!0
l.b7(B.o)
return
case 42:l.df(!1)
return
case 38:l.f_()
return
case 33:l.bz()
l.y=!1
r=l.f
q=s.c
if(s.S(1)===60){s.a0(s.a_())
s.a0(s.a_())
o=l.dP()
s.c2(">")
n=""}else{n=l.fO()
if(n.length>1&&B.a.u(n,"!")&&B.a.aL(n,"!"))o=l.fP(!1)
else{o=l.cF(!1,n)
if(o.length===0){n=null
o="!"}else n="!"}}r.aA(r.$ti.c.a(new A.bz(s.an(new A.as(q)),n,o)))
return
case 39:l.dk(!0)
return
case 34:l.f1()
return
case 124:if(l.z.length!==1)l.bP()
l.dg(!0)
return
case 62:if(l.z.length!==1)l.bP()
l.f0()
return
case 37:case 64:case 96:l.bP()
break
case 45:if(l.bv(1))l.bO()
else{if(l.z.length===1){if(!l.y)A.E(A.I("Block sequence entries are not allowed here.",s.gaI()))
l.cE(s.at,B.V,A.Z(s.f,s.c))}l.b3()
l.y=!0
l.b7(B.u)}return
case 63:if(l.bv(1))l.bO()
else{r=l.z
if(r.length===1){if(!l.y)A.E(A.I("Mapping keys are not allowed here.",s.gaI()))
l.cE(s.at,B.C,A.Z(s.f,s.c))}l.y=r.length===1
l.b7(B.k)}return
case 58:if(l.z.length!==1&&l.f.gl(0)!==0){s=l.f
m=s.gK(s)
s=!0
if(m.gB()!==B.r)if(m.gB()!==B.t)if(m.gB()===B.av){s=t.f2.a(m).c
s=s===B.w||s===B.O}else s=!1
if(s){l.dm()
return}}if(l.bv(1))l.bO()
else l.dm()
return
default:if(!l.gfb())l.bP()
l.bO()
return}},
bP(){return this.c.cQ("Unexpected character.",1)},
dR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.z,r=e.c,q=e.f,p=r.f,o=e.x,n=0;m=s.length,n<m;++n){l=s[n]
if(l==null)continue
if(m!==1)continue
if(l.c===r.as)continue
if(l.e){k=B.b.hl(o,new A.hk(l))
if(k>=0){if(!(k<o.length))return A.b(o,k)
j=o[k].b===B.V}else j=!1
m=j?"Expected ':'. If this is a list entry, it must start with '- '.":"Expected ':'."
i=r.c
new A.cq(p,i).d6(p,i)
h=new A.bp(p,i,i)
h.ce(p,i,i)
A.E(new A.bZ(null,m.charCodeAt(0)==0?m:m,h))
m=l.a
i=e.r
h=l.b
g=h.a
h=h.b
f=new A.bp(g,h,h)
f.ce(g,h,h)
q.bh(q,m-i,new A.X(B.k,f))}B.b.j(s,n,null)}},
bz(){var s,r,q,p,o,n,m=this,l=m.z,k=l.length===1&&B.b.gK(m.x).a===m.c.at
if(!m.y)return
m.b3()
s=l.length
r=m.r
q=m.f.gl(0)
p=m.c
o=p.as
n=p.at
B.b.j(l,s-1,new A.c8(r+q,A.Z(p.f,p.c),o,n,k))},
b3(){var s=this.z,r=B.b.gK(s)
if(r!=null&&r.e)throw A.a(A.I("Could not find expected ':' for simple key.",r.b.bH()))
B.b.j(s,s.length-1,null)},
eT(){var s=this.z,r=s.length
if(r===1)return
if(0>=r)return A.b(s,-1)
s.pop()},
dM(a,b,c,d){var s,r,q=this
if(q.z.length!==1)return
s=q.x
if(B.b.gK(s).a!==-1&&B.b.gK(s).a>=a)return
B.b.t(s,new A.cL(a,b))
s=c.b
r=new A.X(b,A.a3(c.a,s,s))
s=q.f
if(d==null)s.aA(s.$ti.c.a(r))
else s.bh(s,d-q.r,r)},
cE(a,b,c){return this.dM(a,b,c,null)},
bV(a){var s,r,q,p,o,n,m,l=this
if(l.z.length!==1)return
for(s=l.x,r=l.f,q=l.c,p=q.f,o=r.$ti.c;B.b.gK(s).a>a;){n=q.c
new A.cq(p,n).d6(p,n)
m=new A.bp(p,n,n)
m.ce(p,n,n)
r.aA(o.a(new A.X(B.p,m)))
if(0>=s.length)return A.b(s,-1)
s.pop()}},
dh(a){var s,r,q,p=this
p.bV(-1)
p.b3()
p.y=!1
s=p.c
r=s.c
s.aj()
s.aj()
s.aj()
q=p.f
q.aA(q.$ti.c.a(new A.X(a,s.an(new A.as(r)))))},
dj(a){var s=this
s.bz()
B.b.t(s.z,null)
s.y=!0
s.b7(a)},
di(a){var s=this
s.b3()
s.eT()
s.y=!1
s.b7(a)},
dm(){var s,r,q,p,o,n=this,m=n.z,l=B.b.gK(m)
if(l!=null){s=n.f
r=l.a
q=n.r
p=l.b
o=p.b
s.bh(s,r-q,new A.X(B.k,A.a3(p.a,o,o)))
n.dM(l.d,B.C,p,r)
B.b.j(m,m.length-1,null)
n.y=!1}else if(m.length===1){if(!n.y)throw A.a(A.I("Mapping values are not allowed here. Did you miss a colon earlier?",n.c.gaI()))
m=n.c
n.cE(m.at,B.C,A.Z(m.f,m.c))
n.y=!0}else if(n.y){n.y=!1
n.b7(B.k)}n.b7(B.m)},
b7(a){var s,r=this.c,q=r.c
r.aj()
s=this.f
s.aA(s.$ti.c.a(new A.X(a,r.an(new A.as(q)))))},
df(a){var s,r=this
r.bz()
r.y=!1
s=r.f
s.aA(s.$ti.c.a(r.fI(a)))},
f_(){return this.df(!0)},
dg(a){var s,r=this
r.b3()
r.y=!0
s=r.f
s.aA(s.$ti.c.a(r.fJ(a)))},
f0(){return this.dg(!1)},
dk(a){var s,r=this
r.bz()
r.y=!1
s=r.f
s.aA(s.$ti.c.a(r.fM(a)))},
f1(){return this.dk(!1)},
bO(){var s,r=this
r.bz()
r.y=!1
s=r.f
s.aA(s.$ti.c.a(r.fN()))},
fQ(){var s,r,q,p,o,n,m=this
for(s=m.z,r=m.c,q=!1;;q=!0){if(r.at===0)r.bL("\ufeff")
p=!q
for(;;){if(r.W()!==32)o=(s.length!==1||p)&&r.W()===9
else o=!0
if(!o)break
r.a0(r.a_())}if(r.W()===9)r.cQ("Tab characters are not allowed as indentation.",1)
m.cH()
n=r.S(0)
if(n===13||n===10){m.bU()
if(s.length===1)m.y=!0}else break}},
fK(){var s,r,q,p,o,n,m,l,k,j=this,i="Expected whitespace.",h=j.c,g=new A.as(h.c)
h.a0(h.a_())
s=j.fL()
if(s==="YAML"){j.bA()
r=j.dQ()
h.c2(".")
q=j.dQ()
p=new A.dz(h.an(g),r,q)}else if(s==="TAG"){j.bA()
o=j.dO(!0)
if(!j.f8(0))A.E(A.I(i,h.gaI()))
j.bA()
n=j.dP()
if(!j.bQ(0))A.E(A.I(i,h.gaI()))
p=new A.du(h.an(g),o,n)}else{m=h.an(g)
$.kZ().$2("Warning: unknown directive.",m)
m=h.b.length
for(;;){if(h.c!==m){l=h.S(0)
k=l===13||l===10}else k=!0
if(!!k)break
h.aj()}return null}j.bA()
j.cH()
if(!(h.c===h.b.length||j.dq(0)))throw A.a(A.I("Expected comment or line break after directive.",h.an(g)))
j.bU()
return p},
fL(){var s,r=this.c,q=r.c
while(this.gds())r.aj()
s=r.D(0,q)
if(s.length===0)throw A.a(A.I("Expected directive name.",r.gaI()))
else if(!this.bQ(0))throw A.a(A.I("Unexpected character in directive name.",r.gaI()))
return s},
dQ(){var s,r,q=this.c,p=q.c
for(;;){s=q.W()
if(!(s!=null&&s>=48&&s<=57))break
q.a0(q.a_())}r=q.D(0,p)
if(r.length===0)throw A.a(A.I("Expected version number.",q.gaI()))
return A.ce(r,null,null)},
fI(a){var s,r,q,p,o=this.c,n=new A.as(o.c)
o.aj()
s=o.c
while(this.gf7())o.aj()
r=o.D(0,s)
q=o.W()
if(r.length!==0)p=!this.bQ(0)&&q!==63&&q!==58&&q!==44&&q!==93&&q!==125&&q!==37&&q!==64&&q!==96
else p=!0
if(p)throw A.a(A.I("Expected alphanumeric character.",o.gaI()))
if(a)return new A.bt(o.an(n),r)
else return new A.cZ(o.an(n),r)},
dO(a){var s,r,q,p=this.c
p.c2("!")
s=new A.a_("!")
r=p.c
while(this.gdv())p.a0(p.a_())
q=p.D(0,r)
q=s.a+=q
if(p.W()===33)p=s.a=q+A.B(p.aj())
else{if(a&&(q.charCodeAt(0)==0?q:q)!=="!")p.c2("!")
p=q}return p.charCodeAt(0)==0?p:p},
fO(){return this.dO(!1)},
cF(a,b){var s,r,q,p
if((b==null?0:b.length)>1){b.toString
B.a.D(b,1)}s=this.c
r=s.c
q=s.W()
for(;;){if(!this.gdv())if(a)p=q===44||q===91||q===93
else p=!1
else p=!0
if(!p)break
s.a0(s.a_())
q=s.W()}s=s.D(0,r)
return A.ao(s,0,s.length,B.e,!1)},
dP(){return this.cF(!0,null)},
fP(a){return this.cF(a,null)},
fJ(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="0 may not be used as an indentation indicator.",a2=a0.c,a3=new A.as(a2.c)
a2.aj()
s=a2.W()
r=s===43
q=0
if(r||s===45){p=r?B.Y:B.X
a2.aj()
if(a0.gdr()){if(a2.W()===48)throw A.a(A.I(a1,a2.an(a3)))
q=a2.aj()-48}}else if(a0.gdr()){if(a2.W()===48)throw A.a(A.I(a1,a2.an(a3)))
q=a2.aj()-48
s=a2.W()
r=s===43
if(r||s===45){p=r?B.Y:B.X
a2.aj()}else p=B.ax}else p=B.ax
a0.bA()
a0.cH()
r=a2.b
o=r.length
if(!(a2.c===o||a0.dq(0)))throw A.a(A.I("Expected comment or line break.",a2.gaI()))
a0.bU()
if(q!==0){n=a0.x
m=B.b.gK(n).a>=0?B.b.gK(n).a+q:q}else m=0
l=a0.dN(m)
m=l.a
k=l.b
j=new A.a_("")
i=new A.as(a2.c)
n=!a4
h=""
g=!1
f=""
for(;;){e=a2.at
if(!(e===m&&a2.c!==o))break
d=!1
if(e===0){s=a2.S(3)
if(s==null||s===32||s===9||s===13||s===10)e=a2.aO("---")||a2.aO("...")
else e=d}else e=d
if(e)break
s=a2.S(0)
c=s===32||s===9
if(n&&h.length!==0&&!g&&!c){if(k.length===0){f+=A.B(32)
j.a=f}}else f=j.a=f+h
j.a=f+k
s=a2.S(0)
g=s===32||s===9
b=a2.c
for(;;){if(a2.c!==o){s=a2.S(0)
f=s===13||s===10}else f=!0
if(!!f)break
a2.aj()}i=a2.c
f=j.a+=B.a.v(r,b,i)
a=new A.as(i)
h=i!==o?a0.bf():"\n"
l=a0.dN(m)
m=l.a
k=l.b
i=a}if(p!==B.X){r=f+h
j.a=r}else r=f
if(p===B.Y)r=j.a=r+k
a2=a2.cc(a3,i)
o=a4?B.Q:B.P
return new A.bx(a2,r.charCodeAt(0)==0?r:r,o)},
dN(a){var s,r,q,p,o,n,m,l=new A.a_("")
for(s=this.c,r=a===0,q=!r,p=0;;){for(;;){if(!((!q||s.at<a)&&s.W()===32))break
s.a0(s.a_())}o=s.at
if(o>p)p=o
n=s.S(0)
if(!(n===13||n===10))break
m=this.bf()
l.a+=m}if(r){s=this.x
a=p<B.b.gK(s).a+1?B.b.gK(s).a+1:p}s=l.a
return new A.dN(a,s.charCodeAt(0)==0?s:s)},
fM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.c,b=new A.a_("")
d.a0(d.a_())
for(s=!a,r=d.b.length;;){q=!1
if(d.at===0){p=d.S(3)
if(p==null||p===32||p===9||p===13||p===10)q=d.aO("---")||d.aO("...")}if(q)d.he("Unexpected document indicator.")
if(d.c===r)throw A.a(A.I("Unexpected end of file.",d.gaI()))
for(;;){p=d.S(0)
o=!1
if(!!(p==null||p===32||p===9||p===13||p===10))break
p=d.W()
if(a&&p===39&&d.S(1)===39){d.a0(d.a_())
d.a0(d.a_())
q=A.B(39)
b.a+=q}else if(p===(a?39:34))break
else{q=!1
if(s)if(p===92){n=d.S(1)
q=n===13||n===10}if(q){d.a0(d.a_())
e.bU()
o=!0
break}else if(s&&p===92){m=new A.as(d.c)
l=null
switch(d.S(1)){case 48:q=A.B(0)
b.a+=q
break
case 97:q=A.B(7)
b.a+=q
break
case 98:q=A.B(8)
b.a+=q
break
case 116:case 9:q=A.B(9)
b.a+=q
break
case 110:q=A.B(10)
b.a+=q
break
case 118:q=A.B(11)
b.a+=q
break
case 102:q=A.B(12)
b.a+=q
break
case 114:q=A.B(13)
b.a+=q
break
case 101:q=A.B(27)
b.a+=q
break
case 32:case 34:case 47:case 92:q=d.S(1)
q.toString
q=A.B(q)
b.a+=q
break
case 78:q=A.B(133)
b.a+=q
break
case 95:q=A.B(160)
b.a+=q
break
case 76:q=A.B(8232)
b.a+=q
break
case 80:q=A.B(8233)
b.a+=q
break
case 120:l=2
break
case 117:l=4
break
case 85:l=8
break
default:throw A.a(A.I("Unknown escape character.",d.an(m)))}d.a0(d.a_())
d.a0(d.a_())
if(l!=null){for(k=0,j=0;j<l;++j){if(!e.gf9()){d.a0(d.a_())
throw A.a(A.I("Expected "+A.m(l)+"-digit hexidecimal number.",d.an(m)))}i=d.a_()
d.a0(i)
k=(k<<4>>>0)+e.eM(i)}if(k>=55296&&k<=57343||k>1114111)throw A.a(A.I("Invalid Unicode character escape code.",d.an(m)))
q=A.B(k)
b.a+=q}}else{q=A.B(d.aj())
b.a+=q}}}q=d.W()
if(q===(a?39:34))break
h=new A.a_("")
g=new A.a_("")
f=""
for(;;){p=d.S(0)
if(!(p===32||p===9)){p=d.S(0)
q=p===13||p===10}else q=!0
if(!q)break
p=d.S(0)
if(p===32||p===9)if(!o){i=d.a_()
d.a0(i)
q=A.B(i)
h.a+=q}else d.a0(d.a_())
else if(!o){h.a=""
f=e.bf()
o=!0}else{q=e.bf()
g.a+=q}}if(o)if(f.length!==0&&g.a.length===0){q=A.B(32)
b.a+=q}else b.a+=g.n(0)
else{b.a+=h.n(0)
h.a=""}}d.a0(d.a_())
d=d.an(new A.as(c))
c=b.a
s=a?B.w:B.O
return new A.bx(d,c.charCodeAt(0)==0?c:c,s)},
fN(){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=j.c,h=new A.as(i),g=new A.a_(""),f=new A.a_(""),e=B.b.gK(k.x).a+1
for(s=k.z,r="",q="";;){p=""
o=!1
if(j.at===0){n=j.S(3)
if(n==null||n===32||n===9||n===13||n===10)o=j.aO("---")||j.aO("...")}if(o)break
if(j.W()===35)break
if(k.dt(0))if(r.length!==0){if(q.length===0){o=A.B(32)
g.a+=o}else g.a+=q
r=p
q=""}else{g.a+=f.n(0)
f.a=""}m=j.c
while(k.dt(0))j.aj()
h=j.c
g.a+=B.a.v(j.b,m,h)
h=new A.as(h)
n=j.S(0)
if(!(n===32||n===9)){n=j.S(0)
o=!(n===13||n===10)}else o=!1
if(o)break
for(;;){n=j.S(0)
if(!(n===32||n===9)){n=j.S(0)
o=n===13||n===10}else o=!0
if(!o)break
n=j.S(0)
if(n===32||n===9){o=r.length===0
if(!o&&j.at<e&&j.W()===9)j.cQ("Expected a space but found a tab.",1)
if(o){l=j.a_()
j.a0(l)
o=A.B(l)
f.a+=o}else j.a0(j.a_())}else if(r.length===0){r=k.bf()
f.a=""}else q=k.bf()}if(s.length===1&&j.at<e)break}if(r.length!==0)k.y=!0
j=j.cc(new A.as(i),h)
i=g.a
return new A.bx(j,i.charCodeAt(0)==0?i:i,B.i)},
bU(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)return
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())},
bf(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)throw A.a(A.I("Expected newline.",s.gaI()))
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())
return"\n"},
f8(a){var s=this.c.S(a)
return s===32||s===9},
dq(a){var s=this.c.S(a)
return s===13||s===10},
bQ(a){var s=this.c.S(a)
return s==null||s===32||s===9||s===13||s===10},
dt(a){var s,r=this.c
switch(r.S(a)){case 58:return this.bv(a+1)
case 35:s=r.S(a-1)
return s!==32&&s!==9
default:return this.bv(a)}},
bv(a){var s,r=this.c.S(a)
A:{s=!1
if(r==null)break A
if(44===r||91===r||93===r||123===r||125===r){s=this.z.length===1
break A}if(32===r||9===r||10===r||13===r||65279===r)break A
if(133===r){s=!0
break A}s=this.ct(a)
break A}return s},
ct(a){var s,r=this.c,q=r.S(a)
if(q==null)return!1
if(q>>>10===54){s=r.S(a+1)
return s!=null&&s>>>10===55}r=!0
if(!(q>=32&&q<=126))if(!(q>=160&&q<=55295))r=q>=57344&&q<=65533
return r},
eM(a){if(a<=57)return a-48
if(a<=70)return 10+a-65
return 10+a-97},
bA(){var s,r=this.c
for(;;){s=r.S(0)
if(!(s===32||s===9))break
r.a0(r.a_())}},
cH(){var s,r,q,p=this.c
if(p.W()!==35)return
s=p.b.length
for(;;){if(p.c!==s){r=p.S(0)
q=r===13||r===10}else q=!0
if(!!q)break
p.a0(p.a_())}}}
A.hj.prototype={
$1(a){t.b2.a(a)
return a!=null&&a.a===this.a.r},
$S:72}
A.hk.prototype={
$1(a){return t.eY.a(a).a===this.a.d},
$S:30}
A.c8.prototype={}
A.dF.prototype={
bu(){return"_Chomping."+this.b}}
A.bw.prototype={
n(a){return this.a}}
A.d_.prototype={
n(a){return this.a}}
A.X.prototype={
n(a){return this.a.bu()},
gB(){return this.a},
gA(){return this.b}}
A.dz.prototype={
gB(){return B.R},
n(a){return"VERSION_DIRECTIVE "+this.b+"."+this.c},
$iX:1,
gA(){return this.a}}
A.du.prototype={
gB(){return B.S},
n(a){return"TAG_DIRECTIVE "+this.b+" "+this.c},
$iX:1,
gA(){return this.a}}
A.bt.prototype={
gB(){return B.cS},
n(a){return"ANCHOR "+this.b},
$iX:1,
gA(){return this.a}}
A.cZ.prototype={
gB(){return B.cR},
n(a){return"ALIAS "+this.b},
$iX:1,
gA(){return this.a}}
A.bz.prototype={
gB(){return B.cT},
n(a){return"TAG "+A.m(this.b)+" "+this.c},
$iX:1,
gA(){return this.a}}
A.bx.prototype={
gB(){return B.av},
n(a){return"SCALAR "+this.c.n(0)+' "'+this.b+'"'},
$iX:1,
gA(){return this.a}}
A.a0.prototype={
bu(){return"TokenType."+this.b}}
A.kX.prototype={
$2(a,b){a=b.ee(a)
A.tt(a)},
$1(a){return this.$2(a,null)},
$S:20}
A.dC.prototype={
n(a){var s=this.a
return s.n(s)}}
A.hw.prototype={
n(a){return"%YAML "+this.a+"."+this.b}}
A.bW.prototype={
n(a){return"%TAG "+this.a+" "+this.b}}
A.bZ.prototype={}
A.R.prototype={
gA(){return this.a}}
A.c0.prototype={
ga6(){return this},
gG(){return this.b.a.gG().ad(0,new A.hG(),t.z)},
h(a,b){var s=this.b.a.h(0,b)
return s==null?null:s.ga6()},
$ix:1,
gM(){return this.b},
ga3(){return this.c}}
A.hG.prototype={
$1(a){return t.T.a(a).ga6()},
$S:1}
A.c_.prototype={
ga6(){return this},
gl(a){return this.b.a.length},
sl(a,b){throw A.a(A.O("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.T(b)
s=this.b.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga6()},
j(a,b,c){throw A.a(A.O("Cannot modify an unmodifiable List"))},
$iv:1,
$if:1,
$iq:1,
gM(){return this.b},
ga3(){return this.c}}
A.ar.prototype={
n(a){return J.am(this.b)},
ga6(){return this.b},
ga3(){return this.c}}
A.ff.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.hx.prototype={
n(a){return this.b},
dn(){var s=t.T
this.d=A.az(s)
new A.hz(this,A.az(s)).$1(this.c)},
F(a,b){var s,r,q,p,o,n,m,l,k=this,j=A.ap(b,B.j,B.h)
if(a.length===0){s=k.c.gA().gC().gL()
return k.by(A.aB(s,A.cd(k.c)-s,A.e3(j,0,A.e_(k.b))),a,j)}r=A.c(a.slice(0),A.u(a))
q=A.b0(r,0,A.fo(a.length-1,"count",t.p),A.u(r).c)
p=B.b.gK(r)
o=k.dX(q,!0)
if(t.h.b(o)){if(!A.b9(p))throw A.a(A.hg(a,a,o))
n=A.o(o.gM(),t.T)
B.b.j(n,p,j)
m=A.ap(n,B.j,B.h)
return k.by(A.u0(k,o,p,j),q,m)}if(t.S.b(o)){l=A.m5(o,new A.hD(p,j))
return k.by(A.u1(k,o,p,j),q,l)}throw A.a(new A.dj(a,a,null,!1,null,null,"Scalar "+o.n(o)+" does not have key "+A.m(p)))},
I(a,b){var s,r,q,p,o,n=this,m=A.mZ(),l=A.mZ(),k=n.dX(b,!0)
if(b.length===0){m.b=A.aB(0,n.b.length,"")
l.b=A.ap(null,B.j,B.h)
n.by(m.bT(),b,l.bT())
return k}s=A.c(b.slice(0),A.u(b))
r=A.b0(s,0,A.fo(b.length-1,"count",t.p),A.u(s).c)
q=B.b.gK(s)
p=n.dW(r)
if(t.h.b(p)){A.T(q)
m.b=A.tC(n,p,q)
o=A.o(p.gM(),t.T)
B.b.bl(o,q)
l.b=A.ap(o,B.j,B.h)}else if(t.S.b(p)){m.b=A.tD(n,p,q)
l.b=A.m5(p,new A.hC(q))}n.by(m.bT(),r,l.bT())
return k},
cJ(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=J.F(a)
if(j.gJ(a))return k.c
s=k.c
r=j.b_(a)
for(q=t.S,p=t.h,o=0;o<r.length;++o){n=r[o]
if(b&&k.d.p(0,s))throw A.a(A.fx(a,s))
if(p.b(s)){m=s.gl(s)
if(!(A.b9(n)&&n>=0&&n<m))return k.cB(a,j.a4(a,o+1),s,c)
s=J.k(s.gM(),n)}else{if(q.b(s)){if(!A.lN(s,n))return k.cB(a,j.a4(a,o+1),s,c)
l=A.o5(s,n)
if(b)if(k.d.p(0,l))throw A.a(A.fx(a,l))
m=s.gM().h(0,l)
m.toString}else return k.cB(a,j.a4(a,o+1),s,c)
s=m}}if(b)k.bN(a,s)
return s},
dX(a,b){return this.cJ(a,b,null)},
dW(a){return this.cJ(a,!1,null)},
cI(a,b){return this.cJ(a,!1,b)},
cB(a,b,c,d){var s=A.hg(a,b,c)
throw A.a(s)},
bN(a,b){var s,r,q,p,o,n=this
if(b==null)return n.bN(a,n.dW(a))
if(n.d.p(0,b))throw A.a(A.fx(a,b))
if(t.m.b(b))return
if(t.h.b(b))for(s=t.X,r=0;r<b.gl(b);++r){q=A.o(a,s)
q.push(r)
n.bN(q,J.k(b.gM(),r))}if(t.S.b(b)){p=b.gG().b_(0)
for(s=t.z,r=0;q=b.gG(),r<q.gl(q);++r){q=A.o(a,s)
if(!(r<p.length))return A.b(p,r)
q.push(p[r])
o=n.d
if(!(r<p.length))return A.b(p,r)
if(o.p(0,p[r])){if(!(r<p.length))return A.b(p,r)
throw A.a(A.fx(a,t.T.a(p[r])))}o=b.gM()
if(!(r<p.length))return A.b(p,r)
n.bN(q,o.h(0,p[r]))}}},
by(a,b,c){var s,r=this,q=r.co(r.c,b,[],c),p=r.b,o=p,n=a.a,m=B.a.aZ(p,n,n+a.b,a.c),l=null
try{l=A.on(new A.hB(m),t.T)}catch(s){if(A.bF(s) instanceof A.bZ)throw A.a(A.o_("Failed to produce valid YAML after modification.",o,m))
else throw s}if(!A.bq(l,q))throw A.a(A.o_("Modification did not result in expected result.",o,m))
r.b=m
r.c=l
B.b.t(r.a,a)
r.dn()},
co(a,b,c,d){var s,r,q=J.F(c),p=J.F(b)
A.cA(q.gl(c),0,p.gl(b),null)
if(p.gl(b)===q.gl(c))return d
s=p.V(b,q.gl(c))
if(t.h.b(a)){if(!A.ta(s,a.gl(a)))throw A.a(A.hg(b,c,a))
r=A.o(a.gM(),t.T)
A.T(s)
B.b.j(r,s,this.co(J.k(a.gM(),s),b,p.a4(b,q.gl(c)+1),d))
return A.ap(r,B.j,B.h)}if(t.S.b(a))return A.m5(a,new A.hy(this,s,b,c,d))
throw A.a(A.hg(b,c,a))}}
A.hz.prototype={
$1(a){var s=this
t.T.a(a)
if(s.b.t(0,a)){if(t.S.b(a))a.gM().ap(0,new A.hA(s))
else if(t.h.b(a))J.oP(a.gM(),s)}else s.a.d.t(0,a)},
$S:32}
A.hA.prototype={
$2(a,b){var s,r=t.T
r.a(b)
s=this.a
s.$1(r.a(a))
s.$1(b)},
$S:33}
A.hD.prototype={
$1(a){var s=this.b
a.j(0,this.a,s)
return s},
$S:21}
A.hC.prototype={
$1(a){return a.I(0,this.a)},
$S:35}
A.hB.prototype={
$0(){return A.fr(this.a,null,!1,null).a},
$S:22}
A.hy.prototype={
$1(a){var s=this,r=s.b,q=s.c
q=s.a.co(t.T.a(a.h(0,r)),q,J.oY(q,J.a6(s.d)+1),s.e)
a.j(0,r,q)
return q},
$S:21}
A.jF.prototype={
$1(a){var s,r=this.a
if(!A.lN(r.b,a))return!1
s=A.rV(r.b,a)
if(!A.bq(r.a.h(0,a),r.b.h(0,s)))return!1
return!0},
$S:2}
A.jm.prototype={
$1(a){return A.bq(a,this.a)},
$S:2}
A.jn.prototype={
$1(a){return A.bq(a,this.a)},
$S:2}
A.j6.prototype={
$1(a){return A.bq(a,this.a)},
$S:2}
A.dj.prototype={
n(a){var s,r,q=this,p=q.d
if(p==null){p=q.f
s="Failed to traverse to subpath "+A.m(p)+"!"
r=J.F(p)
if(r.gaN(p))s+=" Parent "+A.m(q.r)+" does not contain key or index "+A.m(r.gK(p))
return"Invalid path: "+A.m(q.e)+". "+s+"."}return"Invalid path: "+A.m(q.e)+". "+A.m(p)}}
A.e8.prototype={}
A.fd.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+s
return"Assertion failed"}}
A.iu.prototype={
$0(){var s=J.k(this.a.gM(),this.b+1).gA(),r=s.gC().gL(),q=this.c,p=B.a.ae(q,"-",s.gl(s)===0?r:r-1),o=B.a.ae(q,"\n",p)
return new A.cN(o,p-(o+1))},
$S:23}
A.iv.prototype={
$0(){var s=t.T.a(this.b.gM().gG().V(0,this.a.a+1)).gA().gC()
return new A.cN(B.a.ae(this.c,"\n",s.gL()),s.gab())},
$S:23}
A.dp.prototype={
T(a,b){if(b==null)return!1
if(b instanceof A.dp)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gX(a){return B.c.gX(this.a)^B.c.gX(this.b)^B.a.gX(this.c)},
hw(){return A.a7(["offset",this.a,"length",this.b,"replacement",this.c],t.N,t.z)},
n(a){return"SourceEdit("+this.a+", "+this.b+', "'+this.c+'")'},
gl(a){return this.b}}
A.iB.prototype={
$3(a,b,c){var s,r,q,p=this
A.e(b)
A.e(c)
if(B.a.O(c).length!==0){s=p.a
r=a-1
if(!(r>=0&&r<s.length))return A.b(s,r)
s=B.a.O(s[r]).length!==0&&!B.a.u(B.a.d3(c,p.b,"")," ")}else s=!1
q=s?p.c+c:c
return b+p.c+q},
$S:39}
A.kW.prototype={
$1(a){t.x.a(a)
return A.br(t.T.a(a.a))+": "+A.br(a.b)},
$S:24}
A.kU.prototype={
$1(a){var s,r,q
t.T.a(a)
s=this.a
r=A.e3(a,s,this.b)
if(t.f.b(a)||t.j.b(a)){q=A.hH(a)
q=q!==B.f}else q=!1
if(q)r=B.a.D(r,s)
return B.a.ah(" ",this.c)+"- "+r},
$S:25}
A.kV.prototype={
$1(a){var s,r,q,p,o
t.x.a(a)
s=a.b
r=A.br(t.T.a(a.a))
q=B.a.ah(" ",this.a)+r
p=this.c
o=A.e3(s,this.b,p)
if((t.f.b(s)||t.j.b(s))&&!A.lU(s))return q+":"+p+o
return q+": "+o},
$S:24}
A.jC.prototype={
$0(){return A.fr(this.a,null,!1,null).a},
$S:22}
A.jo.prototype={
$1(a){return J.am(a)},
$S:3}
A.jp.prototype={
$1(a){return B.a.ao(A.e(a),this.a)>0},
$S:0}
A.f_.prototype={
n(a){return J.am(this.c)},
$iR:1,
$iar:1,
ga3(){return this.a},
gA(){return this.b},
ga6(){return this.c}}
A.eZ.prototype={
h(a,b){var s=this.b.h(0,b)
return s==null?null:s.ga6()},
gG(){var s=this.b,r=A.j(s).i("ai<1>")
return A.hb(new A.ai(s,r),r.i("@(f.E)").a(new A.hF()),r.i("f.E"),t.z)},
ga6(){return this},
$ix:1,
$iR:1,
$ic0:1,
ga3(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hF.prototype={
$1(a){return t.T.a(a).ga6()},
$S:1}
A.eY.prototype={
gl(a){return this.b.length},
sl(a,b){throw A.a(A.O("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.T(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga6()},
j(a,b,c){throw A.a(A.O("Cannot modify an unmodifiable List"))},
ga6(){return this},
$iv:1,
$if:1,
$iq:1,
$iR:1,
$ic_:1,
ga3(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hE.prototype={
$1(a){return A.ap(a,this.a,this.b)},
$S:43}
A.fe.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.iK.prototype={
$1(a){return B.b.bg(A.c(a.split("."),t.s),0,new A.iL(),t.p)},
$S:44}
A.iL.prototype={
$2(a,b){return A.T(a)*256+A.ce(A.e(b),null,null)},
$S:26}
A.iJ.prototype={
$1(a){return B.b.R(A.c([B.c.ai(a,16777216),B.c.aF(B.c.ai(a,65536),256),B.c.aF(B.c.ai(a,256),256),B.c.aF(a,256)],t.Z),".")},
$S:46}
A.kt.prototype={
$1(a){return!this.a.E(A.e(a))},
$S:0}
A.kM.prototype={
$1(a){return B.a.O(A.e(a)).length===0},
$S:0}
A.iF.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.b9)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Y)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.kD.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.kE.prototype={
$1(a){return J.p(t.P.a(a).h(0,"name"),this.a)},
$S:13}
A.kF.prototype={
$1(a){var s,r
t.a9.a(a)
s=this.a
r=a.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return a.b!==s[r]},
$S:49}
A.kG.prototype={
$1(a){A.e(a)
return!B.b.p(A.j4(this.a),a)},
$S:0}
A.kH.prototype={
$1(a){return A.e(a)==="DIRECT"},
$S:0}
A.j8.prototype={
$1(a){var s,r
t.P.a(a)
s=this.a
if(!J.p(a.h(0,"name"),s)){r=t.g.a(a.h(0,"proxies"))
s=J.bs(r==null?[]:r,s)}else s=!1
return s},
$S:13}
A.j9.prototype={
$1(a){return J.p(J.k(a,"dialer-proxy"),this.a)},
$S:2}
A.ja.prototype={
$1(a){A.e(a)
return A.m_(a,this.a,"__deleted__")!==a},
$S:0}
A.jb.prototype={
$1(a){return!J.p(t.P.a(a).h(0,"name"),this.a)},
$S:13}
A.jX.prototype={
$1(a){return A.cV(a,this.a+1)},
$S:50}
A.jN.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash ")},
$S:0}
A.js.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash OpenWrt access-rules: ")},
$S:0}
A.jt.prototype={
$1(a){return B.a.O(A.e(a))==="# Mclash OpenWrt controller: true"},
$S:0}
A.ju.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt capture: ")},
$S:0}
A.jD.prototype={
$3(a,b,c){return A.o9(A.e(a),A.e(b),A.e(c),!1)},
$S:51}
A.jO.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a.a+1
h.a.a=g
if(g>2e5||b>100)throw A.a(B.bq)
j=t.f
if(!j.b(a)&&!t.j.b(a))return a
i=h.b
if(!i.t(0,a==null?A.fk(a):a))throw A.a(B.bP)
try{i=t.j
if(i.b(a)){s=[]
for(j=J.C(a),i=b+1;j.k();){r=j.gm()
J.e7(s,h.$2(r,i))}return s}q=j.a(a)
p=A.n(t.N,t.z)
if(q.E("<<")){o=h.$2(J.k(q,"<<"),b+1)
n=i.b(o)?o:[o]
for(s=J.C(n),j=t.P;s.k();){m=s.gm()
if(!j.b(m))throw A.a(B.bu)
for(i=m.gN(),i=i.gq(i);i.k();){l=i.gm()
p.ei(l.a,new A.jP(l))}}}for(s=q.gN(),s=s.gq(s),j=b+1;s.k();){k=s.gm()
if(J.p(k.a,"<<"))continue
if(typeof k.a!="string")throw A.a(B.cm)
J.e6(p,A.e(k.a),h.$2(k.b,j))}return p}finally{h.b.I(0,a)}},
$1(a){return this.$2(a,0)},
$S:78}
A.jP.prototype={
$0(){return this.a.b},
$S:10}
A.j1.prototype={
$1(a){var s
if(B.a.O(A.e(a))!=="# Mclash OpenWrt controller: true")return!0
s=this.a
if(s.a)return!1
return s.a=!0},
$S:0}
A.jA.prototype={
$1(a){var s
A.e(a)
s=A.H("^(0|[1-9][0-9]{0,2})$",!0)
return!s.b.test(a)||A.ce(a,null,null)>255},
$S:0}
A.jB.prototype={
$2(a,b){return A.T(a)*256+A.ce(A.e(b),null,null)},
$S:26}
A.kN.prototype={
$1(a){var s
A.e(a)
s=t.s
return a.length===0?A.c([],s):A.c(a.split(":"),s)},
$S:53}
A.kO.prototype={
$1(a){var s
A.e(a)
s=A.H("^[0-9a-fA-F]{1,4}$",!0)
return!s.b.test(a)},
$S:0}
A.j2.prototype={
$1(a){var s
A.e(a)
s=A.H("^[A-Za-z0-9_.-]{1,15}$",!0)
return!s.b.test(a)||B.b.p(A.c(["lo","Mclash"],t.s),a)},
$S:0}
A.iR.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash OpenWrt capture: ")&&!B.a.u(a,"# Mclash OpenWrt access-rules: ")},
$S:0}
A.iS.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt access-rules: ")},
$S:0}
A.iP.prototype={
$1(a){var s
A.e(a)
s=A.H("^[0-9]{1,3}$",!0)
return s.b.test(a)&&A.ce(a,null,null)<=255},
$S:0}
A.iQ.prototype={
$1(a){return B.a.O(A.e(a))!=="# Mclash OpenWrt controller: true"},
$S:0}
A.jL.prototype={
$1(a){var s,r,q,p,o,n,m=A.e0(a)
if(m!=null)return A.pL(m)
if(!A.m6(a))return null
s=a.split("::")
r=s.length
if(0>=r)return A.b(s,0)
q=s[0]
p=t.s
o=q.length===0?A.c([],p):A.c(q.split(":"),p)
if(r!==1){if(1>=r)return A.b(s,1)
q=s[1].length===0}else q=!0
if(q)n=A.c([],p)
else{if(1>=r)return A.b(s,1)
n=A.c(s[1].split(":"),p)}r=t.N
q=A.o(o,r)
B.b.a2(q,A.aL(8-o.length-n.length,"0",!1,r))
B.b.a2(q,n)
return B.b.bg(q,$.aG(),new A.jM(),t.d)},
$S:54}
A.jM.prototype={
$2(a,b){var s,r
t.d.a(a)
A.e(b)
s=a.b1(0,16)
r=A.pS(b,16)
if(r==null)A.E(A.D("Could not parse BigInt",b,null))
return s.c8(0,r)},
$S:55}
A.ku.prototype={
$1(a){return A.tl(this.a,A.e(a))},
$S:0}
A.kv.prototype={
$1(a){return A.e(a).toLowerCase()==="host"},
$S:0}
A.kR.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.jW.prototype={
$2(a,b){var s=this.a.a.h(0,a)
s=s==null?null:B.a.O(J.am(s))
return s==null?b:s},
$1(a){return this.$2(a,"")},
$S:56}
A.jV.prototype={
$2$fallback(a,b){var s=this.a.$1(a),r=s.length===0?b:A.aS(s,null)
if(r==null)throw A.a(A.D("VMess "+a+" must be an integer",null,null))
return r},
$1(a){return this.$2$fallback(a,null)},
$S:57}
A.jQ.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.jR.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jS.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.jT.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jU.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.iM.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.iN.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.iO.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.jd.prototype={
$1(a){return!J.p(a,this.a)},
$S:2}
A.je.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.jG.prototype={
$1(a){return this.a.p(0,J.k(a,"name"))},
$S:2}
A.jH.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.jI.prototype={
$1(a){return!this.a.p(0,J.k(a,"name"))},
$S:2}
A.kQ.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.kx.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.ka.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bs(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bs(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.ia.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.ib.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.iE.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.aj)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Y)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.iI.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")},
$S:0}
A.iW.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.iX.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.iY.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.kl.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.km.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.kn.prototype={
$2(a,b){var s
A.e(a)
A.e(b)
s=this.a
return a===s||b===s},
$S:14}
A.ko.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.kp.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.kq.prototype={
$2(a,b){A.e(a)
t.a.a(b)
return!B.a.aL(a,"Targets")&&J.ci(b)},
$S:60}
A.kr.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bs(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bs(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.ks.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash global-chain: ")},
$S:0}
A.k8.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.jK.prototype={
$2(a,b){A.T(a)
A.T(b)
return b>a?b:a},
$S:18}
A.ky.prototype={
$1(a){return t.fk.a(a).a!==this.a},
$S:61}
A.kz.prototype={
$1(a){var s
t.fk.a(a)
s=this.a?"back":"front"
s=a.b.h(0,s)
return s==null?A.c([],t.s):s},
$S:62}
A.ih.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.ii.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.tv(a)==null},
$S:0}
A.ij.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a2(s,r==null?A.c([],t.s):r)
return s},
$S:27}
A.ik.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.kw.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.k9.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bs(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bs(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.i8.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.i9.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.iD.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.aj)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Y)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:12}
A.iH.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")},
$S:0}
A.iT.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.iU.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.iV.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.k7.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.ic.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.id.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.tu(a)==null},
$S:0}
A.ie.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a2(s,r==null?A.c([],t.s):r)
return s},
$S:27}
A.ig.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.j5.prototype={
$1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gq(r);r.k();){q=r.gm()
s.j(0,A.m(q.a),this.$1(q.b))}return s}if(t.j.b(a)){s=J.aX(a,this,t.z)
s=A.o(s,s.$ti.i("z.E"))
return s}return a},
$S:1}
A.kI.prototype={
$1(a){t.aw.a(a)
return a.a!==this.a&&J.p(a.b.h(0,"path"),this.b)},
$S:64}
A.kJ.prototype={
$1(a){return typeof a!="string"||B.a.O(a).length===0},
$S:2}
A.kK.prototype={
$1(a){return A.tO(a,A.H("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jY(this.b)+"\\s*(?=[,)])",!0),t.ey.a(t.gQ.a(new A.kL(this.a))),null)},
$S:4}
A.kL.prototype={
$1(a){return A.m(a.h(0,1))+"RULE-SET,"+this.a.a},
$S:65}
A.jc.prototype={
$1(a){var s
A.e(a)
s=A.H("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jY(this.a)+"\\s*(?=[,)])",!0)
return s.b.test(a)},
$S:0}
A.hX.prototype={
aT(a,b,c){var s,r,q,p,o
t.a.a(b)
for(s=J.a1(b),r=s.gq(b),q=this.a,p=null;r.k();){o=q.I(0,r.gm())
if(o==null)continue
if(p!=null&&p!==o)throw A.a(A.D("Conflicting node parameter aliases: "+A.m(s.gU(b)),null,null))
p=o}return p==null?c:p},
a4(a,b){return this.aT(0,b,"")},
e5(a){var s,r
t.a.a(a)
s=this.a4(0,a)
if(s.length===0)return null
r=t.s
if(B.b.p(A.c(["1","true"],r),s.toLowerCase()))return!0
if(B.b.p(A.c(["0","false"],r),s.toLowerCase()))return!1
throw A.a(A.D("Node parameter "+A.m(J.mh(a))+" must be true/false or 1/0",null,null))},
hf(){var s,r,q
for(s=["remarks","group"],r=this.a,q=0;q<2;++q)r.I(0,s[q])
if(r.a!==0)throw A.a(B.bb)}}
A.iy.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.iz.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.iA.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ix.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.is.prototype={
$1(a){return J.a6(t.a.a(a))>1},
$S:66}
A.it.prototype={
$1(a){A.im(a)
return a==null||a<1||a>65535},
$S:67}
A.iw.prototype={
$1(a){var s
A.e(a)
if(a.length!==0){s=A.H("^[1-9]\\d*-$",!0)
s=!s.b.test(a)}else s=!1
return s},
$S:0}
A.kA.prototype={
$1(a){A.e(a)
return a.length!==0&&B.a.u(this.a,a)},
$S:0}
A.kB.prototype={
$1(a){var s,r=t.D
r.a(a)
s=A.Q("")
s.F([],A.a7(["proxies",a],t.N,r))
return s.b},
$S:68}
A.jJ.prototype={
$1(a){return t.P.a(a).h(0,"name")},
$S:69}
A.j0.prototype={
$1(a){return B.b.p(this.a,a)||this.b.p(0,a)},
$S:2}
A.ir.prototype={
$1(a){return t.S.b(a)&&J.p(a.h(0,"name"),this.a)},
$S:2}
A.kg.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.kh.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.ki.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:14}
A.kj.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.kk.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kT.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().P(0,B.a.gd5(a))&&a!=="# Mclash default subscription"},
$S:0}
A.k3.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.k4.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.k5.prototype={
$2(a,b){A.e(a)
A.il(b)
return!this.a.p(0,a)},
$S:28}
A.kP.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.j_.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.iq.prototype={
$1(a){return t.S.b(a)&&J.p(a.h(0,"name"),this.a)},
$S:2}
A.kb.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.kc.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.kd.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:14}
A.ke.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.kf.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kS.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().P(0,B.a.gd5(a))&&a!=="# Mclash default subscription"},
$S:0}
A.k0.prototype={
$1(a){return J.k(a,"name")},
$S:1}
A.k1.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.k2.prototype={
$2(a,b){A.e(a)
A.il(b)
return!this.a.p(0,a)},
$S:28}
A.iZ.prototype={
$1(a){return A.e(J.k(a,"name"))},
$S:3}
A.ji.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:15}
A.jj.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0}
A.jg.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:15}
A.jh.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0};(function aliases(){var s=J.bv.prototype
s.eA=s.n
s=A.aI.prototype
s.ew=s.e8
s.ex=s.e9
s.ez=s.eb
s.ey=s.ea
s=A.t.prototype
s.eB=s.am
s=A.f.prototype
s.br=s.aP
s=A.cC.prototype
s.eD=s.ao
s.eC=s.T
s=A.eO.prototype
s.a_=s.hq
s.eF=s.bL
s.eE=s.aO
s=A.dY.prototype
s.eG=s.n})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_2,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._static_0
s(J.M.prototype,"ga7","p",7)
r(J.bu.prototype,"gd5",1,1,null,["$2","$1"],["a5","u"],31,0,0)
q(A.b4.prototype,"ge7","hg",0)
p(A,"rq","qA",9)
o(A,"rr","qB",6)
s(A.aE.prototype,"ga7","p",7)
s(A.t.prototype,"ga7","p",7)
o(A,"rv","qC",1)
o(A,"rz","t_",6)
n(A,"rA",1,null,["$3$onError$radix","$1"],["ce",function(a){return A.ce(a,null,null)}],73,0)
n(A,"rB",1,null,["$2$radix","$1"],["oa",function(a){return A.oa(a,null)}],74,0)
p(A,"ry","rZ",9)
o(A,"rw","pC",4)
m(A,"rx","qj",75)
p(A,"nZ","rb",76)
s(A.f.prototype,"ga7","p",7)
p(A,"rN","rE",9)
o(A,"rO","rF",6)
p(A,"rP","bq",15)
o(A,"jk","rG",6)
o(A,"tT","br",25)
n(A,"u2",1,null,["$2","$1"],["nC",function(a){return A.nC(a,null)}],20,0)
o(A,"tV","fn",77)
n(A,"th",2,null,["$1$2","$2"],["od",function(a,b){return A.od(a,b,t.H)}],52,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.w,null)
q(A.w,[A.l7,J.en,A.dm,J.bc,A.S,A.t,A.hl,A.f,A.a5,A.df,A.bo,A.d7,A.dv,A.dn,A.d6,A.dB,A.bK,A.ay,A.aC,A.A,A.aF,A.cx,A.d0,A.c4,A.b_,A.au,A.hp,A.ey,A.h4,A.an,A.aJ,A.bg,A.b4,A.cJ,A.dD,A.cD,A.fc,A.f2,A.i0,A.aZ,A.f6,A.hZ,A.dQ,A.dG,A.f9,A.c5,A.dJ,A.at,A.aP,A.ee,A.hJ,A.hI,A.hU,A.i6,A.i3,A.ad,A.hP,A.eA,A.dr,A.f5,A.i,A.em,A.P,A.bi,A.a_,A.dV,A.hr,A.aU,A.ef,A.ct,A.cQ,A.dM,A.aT,A.fz,A.ho,A.hc,A.eC,A.hm,A.eJ,A.cC,A.fC,A.aj,A.aM,A.bS,A.eK,A.eO,A.as,A.hO,A.ab,A.d4,A.cn,A.cY,A.dY,A.h8,A.hd,A.a4,A.hi,A.c8,A.bw,A.d_,A.X,A.dz,A.du,A.bt,A.cZ,A.bz,A.bx,A.dC,A.hw,A.bW,A.R,A.hx,A.dp,A.f_,A.fg,A.fe,A.hX])
q(J.en,[J.ep,J.d9,J.db,J.cu,J.cv,J.da,J.bu])
q(J.db,[J.bv,J.M,A.bN,A.dg])
q(J.bv,[J.eD,J.cE,J.bf])
r(J.eo,A.dm)
r(J.fZ,J.M)
q(J.da,[J.d8,J.eq])
q(A.S,[A.cw,A.dw,A.er,A.eR,A.eH,A.f4,A.dd,A.ck,A.b3,A.dy,A.eQ,A.bU,A.ed])
r(A.cF,A.t)
q(A.cF,[A.aO,A.dx])
q(A.f,[A.v,A.bh,A.r,A.aH,A.bX,A.bk,A.dA,A.be,A.c3,A.f0,A.fb,A.bA])
q(A.v,[A.z,A.bJ,A.ai,A.aK,A.V,A.dI])
q(A.z,[A.bV,A.J,A.fa,A.bP,A.f8])
r(A.bI,A.bh)
r(A.d5,A.bX)
r(A.cp,A.bk)
r(A.co,A.be)
q(A.A,[A.cG,A.aI,A.f7])
r(A.de,A.cG)
q(A.aF,[A.b1,A.cK])
q(A.b1,[A.b8,A.cL,A.c7,A.cM,A.dN,A.cN])
r(A.dO,A.cK)
r(A.cP,A.cx)
r(A.b7,A.cP)
r(A.d1,A.b7)
r(A.aQ,A.d0)
q(A.b_,[A.d2,A.dP])
r(A.d3,A.d2)
q(A.au,[A.el,A.eb,A.ec,A.eP,A.h0,A.jw,A.jy,A.hW,A.h9,A.hS,A.hM,A.i2,A.fA,A.fB,A.iC,A.fE,A.fD,A.fF,A.fH,A.fJ,A.fG,A.fX,A.j7,A.he,A.hf,A.hj,A.hk,A.kX,A.hG,A.hz,A.hD,A.hC,A.hy,A.jF,A.jm,A.jn,A.j6,A.iB,A.kW,A.kU,A.kV,A.jo,A.jp,A.hF,A.hE,A.iK,A.iJ,A.kt,A.kM,A.iF,A.kD,A.kE,A.kF,A.kG,A.kH,A.j8,A.j9,A.ja,A.jb,A.jX,A.jN,A.js,A.jt,A.ju,A.jD,A.jO,A.j1,A.jA,A.kN,A.kO,A.j2,A.iR,A.iS,A.iP,A.iQ,A.jL,A.ku,A.kv,A.kR,A.jW,A.jV,A.jQ,A.jR,A.jS,A.jT,A.jU,A.iM,A.iN,A.iO,A.jd,A.je,A.jG,A.jH,A.jI,A.kQ,A.kx,A.ka,A.ia,A.ib,A.iE,A.iI,A.iW,A.iX,A.iY,A.kl,A.km,A.ko,A.kp,A.kr,A.ks,A.k8,A.ky,A.kz,A.ih,A.ii,A.ij,A.ik,A.kw,A.k9,A.i8,A.i9,A.iD,A.iH,A.iT,A.iU,A.iV,A.k7,A.ic,A.id,A.ie,A.ig,A.j5,A.kI,A.kJ,A.kK,A.kL,A.jc,A.iy,A.iz,A.iA,A.ix,A.is,A.it,A.iw,A.kA,A.kB,A.jJ,A.j0,A.ir,A.kg,A.kh,A.kj,A.kk,A.kT,A.k3,A.k4,A.kP,A.j_,A.iq,A.kb,A.kc,A.ke,A.kf,A.kS,A.k0,A.k1,A.iZ,A.jj,A.jh])
r(A.cr,A.el)
r(A.di,A.dw)
q(A.eP,[A.eN,A.cm])
q(A.ec,[A.h_,A.jx,A.h6,A.ha,A.hV,A.hL,A.ht,A.hs,A.fI,A.hA,A.iL,A.jB,A.jM,A.kn,A.kq,A.jK,A.ki,A.k5,A.kd,A.k2,A.ji,A.jg])
q(A.aI,[A.dc,A.dH])
q(A.dg,[A.ev,A.aY])
r(A.dK,A.aY)
r(A.dL,A.dK)
r(A.b6,A.dL)
q(A.b6,[A.ew,A.ex,A.dh,A.bO])
r(A.cO,A.f4)
q(A.dP,[A.c2,A.aE])
r(A.cH,A.c2)
r(A.cI,A.aE)
q(A.eb,[A.i5,A.i4,A.fW,A.fK,A.fR,A.fS,A.fT,A.fU,A.fP,A.fQ,A.fL,A.fM,A.fN,A.fO,A.fV,A.hQ,A.hB,A.iu,A.iv,A.jC,A.jP])
q(A.aP,[A.cl,A.eh,A.es])
q(A.ee,[A.ea,A.fy,A.h2,A.h1,A.hv,A.hu])
r(A.et,A.dd)
r(A.hT,A.hU)
r(A.eW,A.eh)
q(A.b3,[A.cz,A.ej,A.dj])
r(A.f3,A.dV)
r(A.bY,A.cQ)
r(A.dk,A.dM)
r(A.cs,A.ho)
q(A.cs,[A.eE,A.eV,A.eX])
r(A.cq,A.eJ)
q(A.cC,[A.bp,A.dq])
r(A.eL,A.eK)
r(A.bl,A.dq)
r(A.eM,A.eO)
r(A.eg,A.eM)
q(A.eL,[A.ds,A.bZ])
q(A.dY,[A.al,A.bQ,A.bM])
q(A.hP,[A.aR,A.dF,A.a0])
q(A.R,[A.fi,A.ff,A.ar])
r(A.fj,A.fi)
r(A.c0,A.fj)
r(A.c_,A.ff)
r(A.e8,A.i)
r(A.fd,A.ck)
r(A.fh,A.fg)
r(A.eZ,A.fh)
r(A.eY,A.fe)
s(A.cF,A.aC)
s(A.dK,A.t)
s(A.dL,A.ay)
s(A.cG,A.at)
s(A.cP,A.at)
s(A.dM,A.t)
s(A.ff,A.t)
s(A.fi,A.A)
s(A.fj,A.aT)
s(A.fe,A.t)
s(A.fg,A.A)
s(A.fh,A.aT)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",o2:"double",bE:"num",d:"String",l:"bool",bi:"Null",q:"List",w:"Object",x:"Map",aw:"JSObject"},mangledNames:{},types:["l(d)","@(@)","l(@)","d(@)","d(d)","bi()","h(w?)","l(w?)","~()","l(w?,w?)","@()","l(aj)","~(d)","l(x<d,@>)","l(d,d)","l(@,@)","@(d)","~(w?,w?)","h(h,h)","h()","~(d[cB?])","R(x<@,@>)","R()","+nearestLineEnding,nextNodeColStart(h,h)()","d(P<@,R>)","d(R)","h(h,d)","q<d>(x<d,q<d>>)","l(d,l)","~(h,h,h)","l(+column,type(h,a0?))","l(cy[h])","~(R)","~(@,R)","d(d?)","@(x<@,@>)","d?()","h(aM)","@(@,d)","d(h,d,d)","w(aM)","w(aj)","h(aj,aj)","R(@)","h(d)","q<aM>(P<w,q<aj>>)","d(h)","~(@,@)","h(h)","l(P<h,d>)","w?(@)","d(d,d,d)","0^(0^,0^)<bE>","q<d>(d)","bH?(d)","bH(bH,d)","d(d[d])","h(d{fallback:h?})","x<d,d>(x<d,d>,d)","bl()","l(d,q<d>)","l(P<d,x<d,q<d>>>)","q<d>(P<d,x<d,q<d>>>)","0&(d,h?)","l(P<d,x<d,@>>)","d(b5)","l(q<d>)","l(h?)","d(q<x<d,@>>)","@(x<d,@>)","X(bt)","X(bz)","l(c8?)","h(d{onError:h(d)?,radix:h?})","h?(d{radix:h?})","q<d>()","q<d>(d,q<d>)","w?(w?)","@(@[h])"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b8&&a.b(c.a)&&b.b(c.b),"2;column,type":(a,b)=>c=>c instanceof A.cL&&a.b(c.a)&&b.b(c.b),"2;compactCharOffset,lineEndingIndex":(a,b)=>c=>c instanceof A.c7&&a.b(c.a)&&b.b(c.b),"2;end,start":(a,b)=>c=>c instanceof A.cM&&a.b(c.a)&&b.b(c.b),"2;indent,trailingBreaks":(a,b)=>c=>c instanceof A.dN&&a.b(c.a)&&b.b(c.b),"2;nearestLineEnding,nextNodeColStart":(a,b)=>c=>c instanceof A.cN&&a.b(c.a)&&b.b(c.b),"3;index,keyNode,valueNode":(a,b,c)=>d=>d instanceof A.dO&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.qc(v.typeUniverse,JSON.parse('{"bf":"bv","eD":"bv","cE":"bv","ub":"bN","ep":{"l":[],"ac":[]},"d9":{"bi":[],"ac":[]},"db":{"aw":[]},"bv":{"aw":[]},"M":{"q":["1"],"v":["1"],"aw":[],"f":["1"]},"eo":{"dm":[]},"fZ":{"M":["1"],"q":["1"],"v":["1"],"aw":[],"f":["1"]},"bc":{"L":["1"]},"da":{"bE":[]},"d8":{"h":[],"bE":[],"ac":[]},"eq":{"bE":[],"ac":[]},"bu":{"d":[],"cy":[],"ac":[]},"cw":{"S":[]},"aO":{"t":["h"],"aC":["h"],"q":["h"],"v":["h"],"f":["h"],"t.E":"h","aC.E":"h"},"v":{"f":["1"]},"z":{"v":["1"],"f":["1"]},"bV":{"z":["1"],"v":["1"],"f":["1"],"f.E":"1","z.E":"1"},"a5":{"L":["1"]},"bh":{"f":["2"],"f.E":"2"},"bI":{"bh":["1","2"],"v":["2"],"f":["2"],"f.E":"2"},"df":{"L":["2"]},"J":{"z":["2"],"v":["2"],"f":["2"],"f.E":"2","z.E":"2"},"r":{"f":["1"],"f.E":"1"},"bo":{"L":["1"]},"aH":{"f":["2"],"f.E":"2"},"d7":{"L":["2"]},"bX":{"f":["1"],"f.E":"1"},"d5":{"bX":["1"],"v":["1"],"f":["1"],"f.E":"1"},"dv":{"L":["1"]},"bk":{"f":["1"],"f.E":"1"},"cp":{"bk":["1"],"v":["1"],"f":["1"],"f.E":"1"},"dn":{"L":["1"]},"bJ":{"v":["1"],"f":["1"],"f.E":"1"},"d6":{"L":["1"]},"dA":{"f":["1"],"f.E":"1"},"dB":{"L":["1"]},"be":{"f":["+(h,1)"],"f.E":"+(h,1)"},"co":{"be":["1"],"v":["+(h,1)"],"f":["+(h,1)"],"f.E":"+(h,1)"},"bK":{"L":["+(h,1)"]},"cF":{"t":["1"],"aC":["1"],"q":["1"],"v":["1"],"f":["1"]},"fa":{"z":["h"],"v":["h"],"f":["h"],"f.E":"h","z.E":"h"},"de":{"A":["h","1"],"at":["h","1"],"x":["h","1"],"A.K":"h","A.V":"1","at.K":"h","at.V":"1"},"bP":{"z":["1"],"v":["1"],"f":["1"],"f.E":"1","z.E":"1"},"b8":{"b1":[],"aF":[]},"cL":{"b1":[],"aF":[]},"c7":{"b1":[],"aF":[]},"cM":{"b1":[],"aF":[]},"dN":{"b1":[],"aF":[]},"cN":{"b1":[],"aF":[]},"dO":{"cK":[],"aF":[]},"d1":{"b7":["1","2"],"cP":["1","2"],"cx":["1","2"],"at":["1","2"],"x":["1","2"],"at.K":"1","at.V":"2"},"d0":{"x":["1","2"]},"aQ":{"d0":["1","2"],"x":["1","2"]},"c3":{"f":["1"],"f.E":"1"},"c4":{"L":["1"]},"d2":{"b_":["1"],"bR":["1"],"v":["1"],"f":["1"]},"d3":{"d2":["1"],"b_":["1"],"bR":["1"],"v":["1"],"f":["1"]},"el":{"au":[],"bd":[]},"cr":{"au":[],"bd":[]},"di":{"S":[]},"er":{"S":[]},"eR":{"S":[]},"ey":{"av":[]},"au":{"bd":[]},"eb":{"au":[],"bd":[]},"ec":{"au":[],"bd":[]},"eP":{"au":[],"bd":[]},"eN":{"au":[],"bd":[]},"cm":{"au":[],"bd":[]},"eH":{"S":[]},"aI":{"A":["1","2"],"h3":["1","2"],"x":["1","2"],"A.K":"1","A.V":"2"},"ai":{"v":["1"],"f":["1"],"f.E":"1"},"an":{"L":["1"]},"aK":{"v":["1"],"f":["1"],"f.E":"1"},"aJ":{"L":["1"]},"V":{"v":["P<1,2>"],"f":["P<1,2>"],"f.E":"P<1,2>"},"bg":{"L":["P<1,2>"]},"dc":{"aI":["1","2"],"A":["1","2"],"h3":["1","2"],"x":["1","2"],"A.K":"1","A.V":"2"},"b1":{"aF":[]},"cK":{"aF":[]},"b4":{"po":[],"cy":[]},"cJ":{"dl":[],"b5":[]},"f0":{"f":["dl"],"f.E":"dl"},"dD":{"L":["dl"]},"cD":{"b5":[]},"fb":{"f":["b5"],"f.E":"b5"},"fc":{"L":["b5"]},"bN":{"aw":[],"ac":[]},"dg":{"aw":[]},"ev":{"aw":[],"ac":[]},"aY":{"bL":["1"],"aw":[]},"b6":{"t":["h"],"aY":["h"],"q":["h"],"bL":["h"],"v":["h"],"aw":[],"f":["h"],"ay":["h"]},"ew":{"b6":[],"t":["h"],"aY":["h"],"q":["h"],"bL":["h"],"v":["h"],"aw":[],"f":["h"],"ay":["h"],"ac":[],"t.E":"h","ay.E":"h"},"ex":{"b6":[],"li":[],"t":["h"],"aY":["h"],"q":["h"],"bL":["h"],"v":["h"],"aw":[],"f":["h"],"ay":["h"],"ac":[],"t.E":"h","ay.E":"h"},"dh":{"b6":[],"lj":[],"t":["h"],"aY":["h"],"q":["h"],"bL":["h"],"v":["h"],"aw":[],"f":["h"],"ay":["h"],"ac":[],"t.E":"h","ay.E":"h"},"bO":{"b6":[],"lk":[],"t":["h"],"aY":["h"],"q":["h"],"bL":["h"],"v":["h"],"aw":[],"f":["h"],"ay":["h"],"ac":[],"t.E":"h","ay.E":"h"},"f4":{"S":[]},"cO":{"S":[]},"dQ":{"L":["1"]},"bA":{"f":["1"],"f.E":"1"},"dH":{"aI":["1","2"],"A":["1","2"],"h3":["1","2"],"x":["1","2"],"A.K":"1","A.V":"2"},"c2":{"b_":["1"],"bR":["1"],"v":["1"],"f":["1"]},"cH":{"c2":["1"],"b_":["1"],"bR":["1"],"v":["1"],"f":["1"]},"dG":{"L":["1"]},"aE":{"b_":["1"],"l9":["1"],"bR":["1"],"v":["1"],"f":["1"]},"cI":{"aE":["1"],"b_":["1"],"l9":["1"],"bR":["1"],"v":["1"],"f":["1"]},"c5":{"L":["1"]},"dx":{"t":["1"],"aC":["1"],"q":["1"],"v":["1"],"f":["1"],"t.E":"1","aC.E":"1"},"t":{"q":["1"],"v":["1"],"f":["1"]},"A":{"x":["1","2"]},"cG":{"A":["1","2"],"at":["1","2"],"x":["1","2"]},"dI":{"v":["2"],"f":["2"],"f.E":"2"},"dJ":{"L":["2"]},"cx":{"x":["1","2"]},"b7":{"cP":["1","2"],"cx":["1","2"],"at":["1","2"],"x":["1","2"],"at.K":"1","at.V":"2"},"b_":{"bR":["1"],"v":["1"],"f":["1"]},"dP":{"b_":["1"],"bR":["1"],"v":["1"],"f":["1"]},"f7":{"A":["d","@"],"x":["d","@"],"A.K":"d","A.V":"@"},"f8":{"z":["d"],"v":["d"],"f":["d"],"f.E":"d","z.E":"d"},"cl":{"aP":["q<h>","d"],"aP.S":"q<h>"},"eh":{"aP":["d","q<h>"]},"dd":{"S":[]},"et":{"S":[]},"es":{"aP":["w?","d"],"aP.S":"w?"},"eW":{"aP":["d","q<h>"],"aP.S":"d"},"h":{"bE":[]},"q":{"v":["1"],"f":["1"]},"dl":{"b5":[]},"d":{"cy":[]},"ad":{"bH":[]},"ck":{"S":[]},"dw":{"S":[]},"b3":{"S":[]},"cz":{"S":[]},"ej":{"S":[]},"dy":{"S":[]},"eQ":{"S":[]},"bU":{"S":[]},"ed":{"S":[]},"eA":{"S":[]},"dr":{"S":[]},"f5":{"av":[]},"i":{"av":[]},"em":{"av":[],"S":[]},"a_":{"pv":[]},"dV":{"eS":[]},"aU":{"eS":[]},"f3":{"eS":[]},"bY":{"cQ":["1","f<1>"],"cQ.T":"f<1>"},"dk":{"t":["1"],"q":["1"],"v":["1"],"f":["1"],"t.E":"1"},"eC":{"av":[]},"eE":{"cs":[]},"eV":{"cs":[]},"eX":{"cs":[]},"cq":{"bS":[]},"bp":{"p5":[],"bl":[],"cB":[]},"eJ":{"bS":[]},"dq":{"cB":[]},"eK":{"av":[]},"eL":{"i":[],"av":[]},"cC":{"cB":[]},"bl":{"cB":[]},"eg":{"eM":[]},"as":{"pg":[]},"ds":{"i":[],"av":[]},"d4":{"ab":[]},"cn":{"ab":[]},"cY":{"ab":[]},"dY":{"ab":[]},"al":{"ab":[]},"bQ":{"ab":[]},"bM":{"ab":[]},"bt":{"X":[]},"bz":{"X":[]},"dz":{"X":[]},"du":{"X":[]},"cZ":{"X":[]},"bx":{"X":[]},"bZ":{"i":[],"av":[]},"c0":{"A":["@","@"],"aT":["@","@"],"R":[],"x":["@","@"],"A.K":"@","A.V":"@","aT.K":"@","aT.V":"@"},"c_":{"t":["@"],"q":["@"],"v":["@"],"R":[],"f":["@"],"t.E":"@"},"ar":{"R":[]},"dj":{"S":[]},"e8":{"i":[],"av":[]},"fd":{"S":[]},"f_":{"ar":[],"R":[]},"eZ":{"c0":[],"A":["@","@"],"aT":["@","@"],"x":["@","@"],"R":[],"A.K":"@","A.V":"@","aT.K":"@","aT.V":"@"},"eY":{"c_":[],"t":["@"],"q":["@"],"v":["@"],"f":["@"],"R":[],"t.E":"@"},"pa":{"q":["h"],"v":["h"],"f":["h"]},"lk":{"q":["h"],"v":["h"],"f":["h"]},"li":{"q":["h"],"v":["h"],"f":["h"]},"lj":{"q":["h"],"v":["h"],"f":["h"]}}'))
A.qb(v.typeUniverse,JSON.parse('{"v":1,"cF":1,"aY":1,"cG":2,"dP":1,"ee":2,"dM":1}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",o:" connects to different entries in multiple chains; adjust the selection",s:" must not be greater than the number of characters in the file, ",n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority"}
var t=(function rtii(){var s=A.aW
return{a6:s("cY"),B:s("cl"),d:s("bH"),V:s("aO"),w:s("aQ<d,d>"),gR:s("cn"),dg:s("d4"),W:s("v<@>"),bU:s("S"),g8:s("av"),f_:s("aH<d,d>"),l:s("i"),_:s("bd"),cs:s("f<d>"),ah:s("f<d>(d)"),R:s("f<@>"),hb:s("f<h>"),gT:s("M<q<x<d,@>>>"),t:s("M<x<d,@>>"),dm:s("M<x<@,@>>"),a2:s("M<+column,type(h,a0?)>"),c0:s("M<dp>"),s:s("M<d>"),r:s("M<bW>"),gw:s("M<dC>"),v:s("M<R>"),J:s("M<aj>"),ef:s("M<aM>"),aq:s("M<a4>"),gn:s("M<@>"),Z:s("M<h>"),d4:s("M<d?>"),g0:s("M<c8?>"),u:s("d9"),o:s("aw"),cj:s("bf"),aU:s("bL<@>"),D:s("q<x<d,@>>"),a:s("q<d>"),j:s("q<@>"),L:s("q<h>"),E:s("q<aj?>"),x:s("P<@,R>"),a9:s("P<h,d>"),aS:s("P<w,q<aj>>"),aw:s("P<d,x<d,@>>"),fk:s("P<d,x<d,q<d>>>"),G:s("x<d,d>"),P:s("x<d,@>"),f:s("x<@,@>"),O:s("x<d,q<d>>"),e:s("J<d,d>"),do:s("J<d,@>"),gh:s("J<x<d,@>,@>"),bz:s("J<d,h?>"),fY:s("bM"),eB:s("b6"),bm:s("bO"),b:s("bi"),K:s("w"),eh:s("cy"),co:s("dk<X>"),fl:s("uc"),bQ:s("+()"),eY:s("+column,type(h,a0?)"),ei:s("+(w?,w?)"),cz:s("dl"),bJ:s("bP<d>"),fy:s("al"),f2:s("bx"),fP:s("bQ"),F:s("bS"),I:s("cB"),q:s("bl"),N:s("d"),gQ:s("d(b5)"),c:s("d(d)"),h7:s("bW"),ci:s("ac"),ak:s("cE"),ga:s("dx<R>"),dw:s("b7<d,d>"),gr:s("b7<@,R>"),k:s("eS"),U:s("r<d>"),fj:s("bo<d>"),eJ:s("dA<d>"),h:s("c_"),S:s("c0"),T:s("R"),m:s("ar"),cl:s("ad"),C:s("aj"),d_:s("cH<w>"),A:s("aM"),cR:s("cI<w?>"),dj:s("bA<d>"),y:s("l"),Q:s("l(d)"),as:s("l(aj)"),i:s("o2"),z:s("@"),dY:s("@(x<d,@>)"),dO:s("@(d)"),p:s("h"),eH:s("mu<bi>?"),an:s("aw?"),g:s("q<@>?"),Y:s("x<@,@>?"),X:s("w?"),dk:s("d?"),ey:s("d(b5)?"),fs:s("X?"),gS:s("aj?"),M:s("f9?"),b2:s("c8?"),fQ:s("l?"),cD:s("o2?"),h6:s("h?"),ck:s("h(d)?"),bR:s("h?(d)"),cg:s("bE?"),H:s("bE"),n:s("~"),cA:s("~(d,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cC=J.en.prototype
B.b=J.M.prototype
B.c=J.d8.prototype
B.ao=J.da.prototype
B.a=J.bu.prototype
B.cD=J.bf.prototype
B.cE=J.db.prototype
B.M=A.dh.prototype
B.N=A.bO.prototype
B.at=J.eD.prototype
B.W=J.cE.prototype
B.aH=new A.ea(!1)
B.v=new A.cl(B.aH)
B.aI=new A.ea(!0)
B.a5=new A.cl(B.aI)
B.aJ=new A.cr(A.th(),A.aW("cr<h>"))
B.y=new A.fy()
B.d3=new A.ef(A.aW("ef<0&>"))
B.a6=new A.d6(A.aW("d6<0&>"))
B.aK=new A.em()
B.aL=new A.ct(A.aW("ct<@>"))
B.aM=new A.ct(A.aW("ct<w?>"))
B.a7=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aN=function() {
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
B.aS=function(getTagFallback) {
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
B.aO=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aR=function(hooks) {
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
B.aQ=function(hooks) {
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
B.aP=function(hooks) {
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
B.a8=function(hooks) { return hooks; }

B.d=new A.es()
B.aT=new A.eA()
B.n=new A.hl()
B.a9=new A.bY(A.aW("bY<@>"))
B.aU=new A.bY(A.aW("bY<w?>"))
B.e=new A.eW()
B.I=new A.hv()
B.j=new A.d_("ANY")
B.l=new A.d_("BLOCK")
B.f=new A.d_("FLOW")
B.aV=new A.aR(0,"streamStart")
B.aa=new A.aR(1,"streamEnd")
B.aW=new A.aR(2,"documentStart")
B.aX=new A.aR(3,"documentEnd")
B.ab=new A.aR(4,"alias")
B.ac=new A.aR(5,"scalar")
B.ad=new A.aR(6,"sequenceStart")
B.z=new A.aR(7,"sequenceEnd")
B.ae=new A.aR(8,"mappingStart")
B.A=new A.aR(9,"mappingEnd")
B.aY=new A.i("Select a valid source, behavior and format",null,null)
B.aZ=new A.i("HTTP/SOCKS5 node URLs do not support query parameters",null,null)
B.b_=new A.i("Name conflicts with an existing node or proxy group",null,null)
B.b0=new A.i("Invalid rule provider name or content",null,null)
B.b1=new A.i("Target nodes must not include front or back nodes",null,null)
B.b2=new A.i("Unsupported SS encryption method",null,null)
B.b3=new A.i("Invalid SS plugin boolean parameter",null,null)
B.b4=new A.i("Configuration nesting is too deep",null,null)
B.af=new A.i("Node port must be between 1 and 65535",null,null)
B.b5=new A.i("Capture settings are too large",null,null)
B.b6=new A.i("Proxy group name must not be empty or contain commas or newlines",null,null)
B.b7=new A.i("Invalid subscription index",null,null)
B.b8=new A.i("Enter a local file path",null,null)
B.b9=new A.i("Proxy groups or chains form a cycle",null,null)
B.ba=new A.i("Host must not contain a URL, path or whitespace",null,null)
B.bb=new A.i("URL contains unsupported parameters; import YAML configuration instead",null,null)
B.bc=new A.i("Invalid SS authentication",null,null)
B.J=new A.i("Invalid node URL format",null,null)
B.ag=new A.i("Invalid node UUID format",null,null)
B.bd=new A.i("Invalid rule format",null,null)
B.be=new A.i("Supports VMess, VLESS, Trojan, SS, Hysteria2, TUIC, AnyTLS, SOCKS5 and HTTP/HTTPS node URLs",null,null)
B.bf=new A.i("Unsupported transport camouflage type",null,null)
B.bg=new A.i("Unsupported gRPC mode",null,null)
B.bh=new A.i("",null,null)
B.bi=new A.i("Invalid proxy group members",null,null)
B.bj=new A.i("Domestic and Foreign proxy groups cannot be deleted",null,null)
B.bk=new A.i("Toggles must be boolean",null,null)
B.bl=new A.i("Domestic and Foreign proxy groups cannot be renamed",null,null)
B.bm=new A.i("Duplicate SS plugin parameter",null,null)
B.ah=new A.i("Invalid access-control policies",null,null)
B.bn=new A.i("Access-control node no longer exists; choose another node or Default",null,null)
B.bo=new A.i("Duplicate node names in import; use unique names first",null,null)
B.bp=new A.i("Invalid VMess address, user ID, port or alterId",null,null)
B.bq=new A.i("Node input is too deeply nested or too large after expansion",null,null)
B.B=new A.i("Configuration has no embedded nodes; update subscriptions first",null,null)
B.br=new A.i("Invalid capture mode",null,null)
B.bs=new A.i("Invalid TUIC congestion control type",null,null)
B.bt=new A.i("Unsupported configuration operation",null,null)
B.bu=new A.i("YAML merge key << must reference a map or list of maps",null,null)
B.bv=new A.i("SS node port is missing",null,null)
B.bw=new A.i("Rule provider path is already in use",null,null)
B.bx=new A.i("Each Mihomo node requires a nonempty name and type",null,null)
B.by=new A.i("DNS configuration must be a YAML mapping",null,null)
B.bz=new A.i("Unsupported node transport; import YAML configuration instead",null,null)
B.ai=new A.i("Select at least one node on each side",null,null)
B.bA=new A.i("Invalid Reality short-id format",null,null)
B.bB=new A.i("Invalid TUN stack",null,null)
B.bC=new A.i("Enter a valid HTTP / HTTPS download URL",null,null)
B.bD=new A.i("proxies must be a node list",null,null)
B.bE=new A.i("Enter a valid node URL",null,null)
B.bF=new A.i("Node input exceeds 8 MiB",null,null)
B.bG=new A.i("Enter inline rules, one per line",null,null)
B.bH=new A.i("Invalid VLESS UDP encoding",null,null)
B.bI=new A.i("Invalid Hysteria2 bandwidth parameter",null,null)
B.bJ=new A.i("Rule target does not exist; select a valid node or proxy group",null,null)
B.bK=new A.i("No Mihomo nodes found",null,null)
B.aj=new A.i("Proxy chain forms a cycle; select other nodes",null,null)
B.ak=new A.i("Enter a Host domain or IP, optionally with a port; do not enter a URL",null,null)
B.bL=new A.i("This group is still referenced by rules, groups or chains; update those references first",null,null)
B.al=new A.i("Entry and exit nodes must be different",null,null)
B.bM=new A.i("Unsupported node security type",null,null)
B.bN=new A.i("Configuration must be a YAML mapping",null,null)
B.bO=new A.i("This provider is still referenced; edit or delete the corresponding RULE-SET rules first",null,null)
B.bP=new A.i("Node YAML contains a circular reference",null,null)
B.bQ=new A.i("Invalid access control; enter an IP, CIDR subnet, or IPv4 start-end range",null,null)
B.bR=new A.i("Invalid VMess URL Base64 or JSON encoding",null,null)
B.bS=new A.i("Enter a vmess:// node URL",null,null)
B.bT=new A.i("Original rule provider does not exist",null,null)
B.bU=new A.i("Subscription node is missing a name or type",null,null)
B.bV=new A.i("Invalid Mihomo YAML; include anchor definitions when using aliases",null,null)
B.bW=new A.i("Invalid SS address or authentication",null,null)
B.K=new A.i("Selected node no longer exists; select it again",null,null)
B.bX=new A.i("Invalid node URL Base64 encoding",null,null)
B.bY=new A.i("Invalid node address or path",null,null)
B.bZ=new A.i("Access control supports at most 64 entries",null,null)
B.c_=new A.i("Proxy group members can only be changed through the node matching regex",null,null)
B.c0=new A.i("Only manually added nodes can be deleted",null,null)
B.c1=new A.i("Duplicate subscription node name",null,null)
B.c2=new A.i("SS obfs mode must be http or tls",null,null)
B.c3=new A.i("Invalid TUIC UDP mode",null,null)
B.c4=new A.i("Subscription node name conflicts with a default policy",null,null)
B.c5=new A.i("Unsupported SS plugin parameter",null,null)
B.c6=new A.i("Duplicate node URL parameter",null,null)
B.c7=new A.i("SS plugin only supports WebSocket mode",null,null)
B.c8=new A.i("Invalid controller port",null,null)
B.c9=new A.i("Rule provider configuration must be a mapping",null,null)
B.ca=new A.i("Manual node list has changed; reopen the page",null,null)
B.cb=new A.i("Proxy group has no nodes; adjust the regex or select DIRECT",null,null)
B.cc=new A.i("Name must not be empty or contain commas, brackets or newlines",null,null)
B.cd=new A.i("Hysteria2 obfuscation password requires an obfs parameter",null,null)
B.ce=new A.i("Enter a valid IP listen address",null,null)
B.cf=new A.i("Invalid Hysteria2 port hopping range",null,null)
B.cg=new A.i("TUIC v5 requires a UUID and password",null,null)
B.am=new A.i("Keep at least one target node",null,null)
B.ch=new A.i("Invalid Reality public key format",null,null)
B.ci=new A.i("Invalid WebSocket early data size",null,null)
B.cj=new A.i("Vision requires TLS/Reality and TCP transport",null,null)
B.ck=new A.i("Front and back nodes must be different",null,null)
B.cl=new A.i("Enter a valid LAN interface name; lo and Mclash cannot be selected",null,null)
B.cm=new A.i("Node YAML field names must be strings",null,null)
B.cn=new A.i("Controller port must be between 1 and 65535",null,null)
B.co=new A.i("Rule provider name already exists",null,null)
B.cp=new A.i("Subscription has no embedded proxies; use a Mihomo subscription containing nodes",null,null)
B.cq=new A.i("Update interval must be a non-negative integer",null,null)
B.cr=new A.i("Enter a subscription URL",null,null)
B.cs=new A.i("MRS only supports HTTP or file providers with domain / ipcidr behavior",null,null)
B.ct=new A.i("Unsupported Hysteria2 obfuscation type",null,null)
B.cu=new A.i("AnyTLS only supports TLS and TCP",null,null)
B.cv=new A.i("Unable to identify subscription node ownership; update all subscriptions first",null,null)
B.cw=new A.i("Invalid XHTTP mode",null,null)
B.cx=new A.i("Proxy group order must contain every existing group exactly once",null,null)
B.cy=new A.i("Unsupported SS plugin; import YAML configuration instead",null,null)
B.cz=new A.i("Unsupported VLESS encryption type",null,null)
B.cA=new A.i("Invalid access-control policy; select a source and a valid node",null,null)
B.an=new A.i("Chain groups are managed by Proxy chains",null,null)
B.cB=new A.i("Select at least one target node",null,null)
B.cF=new A.h1(null)
B.cG=new A.h2(null)
B.cH=s(["vless","trojan","ss","hysteria2","hy2","tuic","anytls","socks","socks5","http","https"],t.s)
B.cI=s(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],t.s)
B.cJ=s([],t.s)
B.cL={addNode:0,host:1,prependProxy:2,groups:3,rules:4}
B.L=new A.aQ(B.cL,["proxies","proxies","proxies","proxy-groups","rules"],t.w)
B.ar={"\ud83d\ude80 Domestic":0,"\ud83c\udf0d Foreign":1}
B.q=new A.aQ(B.ar,["# Mclash domestic-filter: ","# Mclash foreign-filter: "],t.w)
B.ap=new A.aQ(B.ar,["",""],t.w)
B.as={}
B.aq=new A.aQ(B.as,[],A.aW("aQ<d,q<d>>"))
B.cK=new A.aQ(B.as,[],t.w)
B.cN=new A.c7(-1,-1)
B.cO=new A.cL(-1,null)
B.h=new A.bw("ANY")
B.O=new A.bw("DOUBLE_QUOTED")
B.P=new A.bw("FOLDED")
B.Q=new A.bw("LITERAL")
B.i=new A.bw("PLAIN")
B.w=new A.bw("SINGLE_QUOTED")
B.cM={"aes-128-gcm":0,"aes-192-gcm":1,"aes-256-gcm":2,"chacha20-ietf-poly1305":3,"xchacha20-ietf-poly1305":4,"2022-blake3-aes-128-gcm":5,"2022-blake3-aes-256-gcm":6,"2022-blake3-chacha20-poly1305":7,"aes-128-ctr":8,"aes-192-ctr":9,"aes-256-ctr":10,"aes-128-cfb":11,"aes-192-cfb":12,"aes-256-cfb":13,"chacha20-ietf":14,chacha20:15,xchacha20:16,"rc4-md5":17,none:18,"aes-128-ccm":19,"aes-192-ccm":20,"aes-256-ccm":21,"aes-128-gcm-siv":22,"aes-256-gcm-siv":23,"chacha8-ietf-poly1305":24,"xchacha8-ietf-poly1305":25,"lea-128-gcm":26,"lea-192-gcm":27,"lea-256-gcm":28,"rabbit128-poly1305":29,"aegis-128l":30,"aegis-256":31,"aez-384":32,"deoxys-ii-256-128":33}
B.cP=new A.d3(B.cM,34,A.aW("d3<d>"))
B.cQ=new A.a0(0,"streamStart")
B.x=new A.a0(1,"streamEnd")
B.r=new A.a0(10,"flowSequenceEnd")
B.au=new A.a0(11,"flowMappingStart")
B.t=new A.a0(12,"flowMappingEnd")
B.u=new A.a0(13,"blockEntry")
B.o=new A.a0(14,"flowEntry")
B.k=new A.a0(15,"key")
B.m=new A.a0(16,"value")
B.cR=new A.a0(17,"alias")
B.cS=new A.a0(18,"anchor")
B.cT=new A.a0(19,"tag")
B.R=new A.a0(2,"versionDirective")
B.av=new A.a0(20,"scalar")
B.S=new A.a0(3,"tagDirective")
B.T=new A.a0(4,"documentStart")
B.U=new A.a0(5,"documentEnd")
B.V=new A.a0(6,"blockSequenceStart")
B.C=new A.a0(7,"blockMappingStart")
B.p=new A.a0(8,"blockEnd")
B.aw=new A.a0(9,"flowSequenceStart")
B.cU=A.cW("u7")
B.cV=A.cW("u8")
B.cW=A.cW("pa")
B.cX=A.cW("w")
B.cY=A.cW("li")
B.cZ=A.cW("lj")
B.d_=A.cW("lk")
B.d0=new A.hu(!1)
B.X=new A.dF(0,"strip")
B.ax=new A.dF(1,"clip")
B.Y=new A.dF(2,"keep")
B.Z=new A.a4("FLOW_SEQUENCE_ENTRY_MAPPING_VALUE")
B.ay=new A.a4("BLOCK_MAPPING_FIRST_KEY")
B.D=new A.a4("BLOCK_MAPPING_KEY")
B.E=new A.a4("BLOCK_MAPPING_VALUE")
B.az=new A.a4("BLOCK_NODE")
B.F=new A.a4("BLOCK_SEQUENCE_ENTRY")
B.aA=new A.a4("BLOCK_SEQUENCE_FIRST_ENTRY")
B.a_=new A.a4("FLOW_SEQUENCE_ENTRY_MAPPING_END")
B.aB=new A.a4("DOCUMENT_CONTENT")
B.a0=new A.a4("DOCUMENT_END")
B.a1=new A.a4("DOCUMENT_START")
B.a2=new A.a4("END")
B.aC=new A.a4("FLOW_MAPPING_EMPTY_VALUE")
B.aD=new A.a4("FLOW_MAPPING_FIRST_KEY")
B.G=new A.a4("FLOW_MAPPING_KEY")
B.a3=new A.a4("FLOW_MAPPING_VALUE")
B.d1=new A.a4("FLOW_NODE")
B.a4=new A.a4("FLOW_SEQUENCE_ENTRY")
B.aE=new A.a4("FLOW_SEQUENCE_FIRST_ENTRY")
B.H=new A.a4("INDENTLESS_SEQUENCE_ENTRY")
B.aF=new A.a4("STREAM_START")
B.d2=new A.a4("BLOCK_NODE_OR_INDENTLESS_SEQUENCE")
B.aG=new A.a4("FLOW_SEQUENCE_ENTRY_MAPPING_KEY")})();(function staticFields(){$.hR=null
$.aN=A.c([],A.aW("M<w>"))
$.mF=null
$.mn=null
$.mm=null
$.o7=null
$.nT=null
$.og=null
$.jf=null
$.jz=null
$.lS=null
$.hY=A.c([],A.aW("M<q<w>?>"))
$.mT=null
$.mU=null
$.mV=null
$.mW=null
$.lm=A.hN("_lastQuoRemDigits")
$.ln=A.hN("_lastQuoRemUsed")
$.dE=A.hN("_lastRemUsed")
$.lo=A.hN("_lastRem_nsh")
$.mN=""
$.mO=null
$.ny=null
$.ip=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ua","oq",()=>A.o4("_$dart_dartClosure"))
s($,"u9","m9",()=>A.o4("_$dart_dartClosure_dartJSInterop"))
s($,"uG","oK",()=>A.c([new J.eo()],A.aW("M<dm>")))
s($,"uh","os",()=>A.bn(A.hq({
toString:function(){return"$receiver$"}})))
s($,"ui","ot",()=>A.bn(A.hq({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"uj","ou",()=>A.bn(A.hq(null)))
s($,"uk","ov",()=>A.bn(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"un","oy",()=>A.bn(A.hq(void 0)))
s($,"uo","oz",()=>A.bn(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"um","ox",()=>A.bn(A.mJ(null)))
s($,"ul","ow",()=>A.bn(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"uq","oB",()=>A.bn(A.mJ(void 0)))
s($,"up","oA",()=>A.bn(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"uC","oI",()=>A.ld(4096))
s($,"uA","oG",()=>new A.i5().$0())
s($,"uB","oH",()=>new A.i4().$0())
s($,"us","mb",()=>new Int8Array(A.qE(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.Z))))
s($,"ur","oC",()=>A.ld(0))
s($,"uz","aG",()=>A.c1(0))
s($,"ux","e5",()=>A.c1(1))
s($,"uy","oF",()=>A.c1(2))
s($,"uv","md",()=>$.e5().aR(0))
s($,"ut","mc",()=>A.c1(1e4))
r($,"uw","oE",()=>A.H("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"uu","oD",()=>A.ld(8))
s($,"uD","kY",()=>A.e1(B.cX))
s($,"uH","mf",()=>new A.fz($.ma()))
s($,"ue","or",()=>new A.eE(A.H("/",!0),A.H("[^/]$",!0),A.H("^/",!0)))
s($,"ug","fw",()=>new A.eX(A.H("[/\\\\]",!0),A.H("[^/\\\\]$",!0),A.H("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.H("^[/\\\\](?![/\\\\])",!0)))
s($,"uf","e4",()=>new A.eV(A.H("/",!0),A.H("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.H("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.H("^/",!0)))
s($,"ud","ma",()=>A.px())
s($,"uE","oJ",()=>A.H("\\r\\n?|\\n",!0))
r($,"op","kZ",()=>new A.kX())
s($,"uK","mg",()=>A.a7([0,"\\0",7,"\\a",8,"\\b",11,"\\v",12,"\\f",13,"\\r",27,"\\e",133,"\\N",160,"\\_",8232,"\\L",8233,"\\P"],t.p,t.N))
s($,"uJ","oL",()=>{var q=A.h7($.mg(),t.p,t.N)
q.j(0,9,"\\t")
q.j(0,10,"\\n")
q.j(0,34,'\\"')
q.j(0,47,"\\/")
q.j(0,92,"\\\\")
return q})
s($,"uF","me",()=>A.H("[^ \\t]",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bN,SharedArrayBuffer:A.bN,ArrayBufferView:A.dg,DataView:A.ev,Int8Array:A.ew,Uint16Array:A.ex,Uint32Array:A.dh,Uint8Array:A.bO})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8Array:false})
A.aY.$nativeSuperclassTag="ArrayBufferView"
A.dK.$nativeSuperclassTag="ArrayBufferView"
A.dL.$nativeSuperclassTag="ArrayBufferView"
A.b6.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.te
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) { var message = result.error.replace(/^FormatException: /, ''); throw new Error(typeof i18n !== 'undefined' ? i18n.translate(message) : message); }
    return typeof i18n !== 'undefined' ? i18n.localizeGroups(result.value) : result.value;
  }
});
