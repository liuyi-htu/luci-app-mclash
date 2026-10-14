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
if(a[b]!==s){A.rF(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.l2(b)
return new s(c,this)}:function(){if(s===null)s=A.l2(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.l2(a).prototype
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
lf(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l8(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.la==null){A.qU()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.m_("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hp
if(o==null)o=$.hp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.r2(a)
if(p!=null)return p
if(typeof a=="function")return B.co
s=Object.getPrototypeOf(a)
if(s==null)return B.aq
if(s===Object.prototype)return B.aq
if(typeof q=="function"){o=$.hp
if(o==null)o=$.hp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.U,enumerable:false,writable:true,configurable:true})
return B.U}return B.U},
lM(a,b){if(a<0||a>4294967295)throw A.a(A.a9(a,0,4294967295,"length",null))
return J.og(new Array(a),b)},
kx(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("K<0>"))},
kw(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("K<0>"))},
og(a,b){var s=A.c(a,b.i("K<0>"))
s.$flags=1
return s},
lN(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oh(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.lN(r))break;++b}return b},
lO(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.lN(q))break}return b},
aY(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.e5.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.e4.prototype
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l8(a)},
C(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l8(a)},
a4(a){if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l8(a)},
c_(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bM.prototype
return a},
qK(a){if(a==null)return a
if(!(a instanceof A.v))return J.bM.prototype
return a},
u(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aY(a).S(a,b)},
l(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.r_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.C(a).h(a,b)},
f7(a,b,c){return J.a4(a).j(a,b,c)},
kq(a,b){return J.a4(a).t(a,b)},
kr(a,b){return J.c_(a).bq(a,b)},
nR(a,b){return J.a4(a).R(a,b)},
bo(a,b){return J.C(a).p(a,b)},
ks(a,b){return J.a4(a).T(a,b)},
nS(a,b){return J.a4(a).an(a,b)},
lx(a){return J.a4(a).gU(a)},
ad(a){return J.aY(a).gY(a)},
cE(a){return J.C(a).gL(a)},
cF(a){return J.C(a).gb4(a)},
F(a){return J.a4(a).gq(a)},
kt(a){return J.a4(a).gJ(a)},
a7(a){return J.C(a).gk(a)},
nT(a){return J.aY(a).gaM(a)},
nU(a,b){return J.C(a).aq(a,b)},
nV(a,b,c){return J.C(a).af(a,b,c)},
aR(a,b,c){return J.a4(a).ac(a,b,c)},
nW(a,b,c){return J.c_(a).bu(a,b,c)},
nX(a,b){return J.qK(a).I(a,b)},
ku(a,b){return J.a4(a).au(a,b)},
nY(a,b){return J.a4(a).ao(a,b)},
nZ(a,b){return J.a4(a).bY(a,b)},
kv(a,b){return J.c_(a).bg(a,b)},
ly(a,b){return J.c_(a).u(a,b)},
bB(a,b){return J.c_(a).D(a,b)},
o_(a,b,c){return J.c_(a).v(a,b,c)},
o0(a,b){return J.a4(a).a3(a,b)},
am(a){return J.aY(a).n(a)},
an(a,b){return J.a4(a).aJ(a,b)},
e2:function e2(){},
e4:function e4(){},
cS:function cS(){},
cV:function cV(){},
bs:function bs(){},
eg:function eg(){},
bM:function bM(){},
br:function br(){},
cU:function cU(){},
cW:function cW(){},
K:function K(a){this.$ti=a},
e3:function e3(){},
fA:function fA(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cT:function cT(){},
cR:function cR(){},
e5:function e5(){},
bq:function bq(){}},A={kz:function kz(){},
lQ(a){return new A.cZ("Field '"+a+"' has been assigned during initialization.")},
j0(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bv(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kI(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eY(a,b,c){return a},
le(a){var s,r
for(s=$.aG.length,r=0;r<s;++r)if(a===$.aG[r])return!0
return!1},
aW(a,b,c,d){A.ae(b,"start")
if(c!=null){A.ae(c,"end")
if(b>c)A.E(A.a9(b,0,c,"start",null))}return new A.bK(a,b,c,d.i("bK<0>"))},
fN(a,b,c,d){if(t.W.b(a))return new A.bC(a,b,c.i("@<0>").a8(d).i("bC<1,2>"))
return new A.bb(a,b,c.i("@<0>").a8(d).i("bb<1,2>"))},
or(a,b,c){var s="count"
if(t.W.b(a)){A.cI(b,s,t.p)
A.ae(b,s)
return new A.c9(a,b,c.i("c9<0>"))}A.cI(b,s,t.p)
A.ae(b,s)
return new A.bg(a,b,c.i("bg<0>"))},
oc(a,b,c){if(t.W.b(a))return new A.c8(a,b,c.i("c8<0>"))
return new A.b8(a,b,c.i("b8<0>"))},
a2(){return new A.cl("No element")},
lL(){return new A.cl("Too few elements")},
el(a,b,c,d,e){if(c-b<=32)A.ot(a,b,c,d,e)
else A.os(a,b,c,d,e)},
ot(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.C(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aK()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
os(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.bp(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.bp(a4+a5,2),f=g-j,e=g+j,d=J.C(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aK()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.u(a6.$2(b,a0),0)
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
A.el(a3,a4,r-2,a6,a7)
A.el(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.u(a6.$2(d.h(a3,r),b),0))++r
while(J.u(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.el(a3,r,q,a6,a7)}else A.el(a3,r,q,a6,a7)},
cZ:function cZ(a){this.a=a},
aH:function aH(a){this.a=a},
fX:function fX(){},
x:function x(){},
y:function y(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a3:function a3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.$ti=c},
d0:function d0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
H:function H(a,b,c){this.a=a
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
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bg:function bg(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(a){this.$ti=a},
cP:function cP(a){this.$ti=a},
dl:function dl(a,b){this.a=a
this.$ti=b},
dm:function dm(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aL:function aL(){},
ax:function ax(){},
cn:function cn(){},
eN:function eN(a){this.a=a},
d_:function d_(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b){this.a=a
this.$ti=b},
lG(a,b,c){var s,r,q,p,o,n,m,l=A.j(a),k=A.O(new A.ak(a,l.i("ak<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.a8)(k),++i,p=o){r=k[i]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.O(new A.aE(a,l.i("aE<2>")),!0,c)
m=new A.aJ(q,n,b.i("@<0>").a8(c).i("aJ<1,2>"))
m.$keys=k
return m}return new A.cL(A.ah(a,b,c),b.i("@<0>").a8(c).i("cL<1,2>"))},
lH(){throw A.a(A.N("Cannot modify unmodifiable Map"))},
lI(){throw A.a(A.N("Cannot modify constant Set"))},
nt(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
r_(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.am(a)
return s},
ei(a){var s,r=$.lV
if(r==null)r=$.lV=Symbol("identityHashCode")
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
lW(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.O(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ej(a){var s,r,q,p
if(a instanceof A.v)return A.at(A.aa(a),null)
s=J.aY(a)
if(s===B.cm||s===B.cp||t.ak.b(a)){r=B.a5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.at(A.aa(a),null)},
lX(a){var s,r,q
if(a==null||typeof a=="number"||A.eX(a))return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ar)return a.n(0)
if(a instanceof A.az)return a.dF(!0)
s=$.nP()
for(r=0;r<1;++r){q=s[r].he(a)
if(q!=null)return q}return"Instance of '"+A.ej(a)+"'"},
oj(){if(!!self.location)return self.location.href
return null},
lU(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ol(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<=65535)B.b.t(p,q)
else if(q<=1114111){B.b.t(p,55296+(B.d.b0(q-65536,10)&1023))
B.b.t(p,56320+(q&1023))}else throw A.a(A.dI(q))}return A.lU(p)},
ok(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<0)throw A.a(A.dI(q))
if(q>65535)return A.ol(a)}return A.lU(a)},
om(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
A(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.b0(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.a9(a,0,1114111,null,null))},
qO(a){throw A.a(A.dI(a))},
b(a,b){if(a==null)J.a7(a)
throw A.a(A.dJ(a,b))},
dJ(a,b){var s,r="index"
if(!A.b3(b))return new A.aZ(!0,b,r,null)
s=J.a7(a)
if(b<0||b>=s)return A.e0(b,s,a,null,r)
return A.fT(b,r)},
qB(a,b,c){if(a<0||a>c)return A.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a9(b,a,c,"end",null)
return new A.aZ(!0,b,"end",null)},
dI(a){return new A.aZ(!0,a,null,null)},
a(a){return A.ag(a,new Error())},
ag(a,b){var s
if(a==null)a=new A.dh()
b.dartException=a
s=A.rG
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
rG(){return J.am(this.dartException)},
E(a,b){throw A.ag(a,b==null?new Error():b)},
W(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.E(A.pu(a,b,c),s)},
pu(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.dj("'"+s+"': Cannot "+o+" "+l+k+n)},
a8(a){throw A.a(A.R(a))},
bj(a){var s,r,q,p,o,n
a=A.jp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.h0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h1(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lZ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kA(a,b){var s=b==null,r=s?null:b.method
return new A.e6(a,r,s?null:b.receiver)},
c3(a){if(a==null)return new A.eb(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.c1(a,a.dartException)
return A.q7(a)},
c1(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.b0(r,16)&8191)===10)switch(q){case 438:return A.c1(a,A.kA(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.c1(a,new A.d3())}}if(a instanceof TypeError){p=$.nA()
o=$.nB()
n=$.nC()
m=$.nD()
l=$.nG()
k=$.nH()
j=$.nF()
$.nE()
i=$.nJ()
h=$.nI()
g=p.aL(s)
if(g!=null)return A.c1(a,A.kA(A.e(s),g))
else{g=o.aL(s)
if(g!=null){g.method="call"
return A.c1(a,A.kA(A.e(s),g))}else if(n.aL(s)!=null||m.aL(s)!=null||l.aL(s)!=null||k.aL(s)!=null||j.aL(s)!=null||m.aL(s)!=null||i.aL(s)!=null||h.aL(s)!=null){A.e(s)
return A.c1(a,new A.d3())}}return A.c1(a,new A.eu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dd()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.c1(a,new A.aZ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dd()
return a},
f1(a){if(a==null)return J.ad(a)
if(typeof a=="object")return A.ei(a)
return J.ad(a)},
qI(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qJ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
pF(a,b,c,d,e,f){t._.a(a)
switch(A.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.eI("Unsupported number of arguments for wrapped closure"))},
qk(a,b){var s=a.$identity
if(!!s)return s
s=A.ql(a,b)
a.$identity=s
return s},
ql(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pF)},
o7(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eq().constructor.prototype):Object.create(new A.c6(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lF(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.o3(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lF(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
o3(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.o1)}throw A.a("Error in functionType of tearoff")},
o4(a,b,c,d){var s=A.lE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lF(a,b,c,d){if(c)return A.o6(a,b,d)
return A.o4(b.length,d,a,b)},
o5(a,b,c,d){var s=A.lE,r=A.o2
switch(b?-1:a){case 0:throw A.a(new A.ek("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
o6(a,b,c){var s,r
if($.lC==null)$.lC=A.lB("interceptor")
if($.lD==null)$.lD=A.lB("receiver")
s=b.length
r=A.o5(s,c,a,b)
return r},
l2(a){return A.o7(a)},
o1(a,b){return A.dD(v.typeUniverse,A.aa(a.a),b)},
lE(a){return a.a},
o2(a){return a.b},
lB(a){var s,r,q,p=new A.c6("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.a1("Field name "+a+" not found."))},
nb(a){return v.getIsolateTag(a)},
ti(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
r2(a){var s,r,q,p,o,n=A.e($.ne.$1(a)),m=$.iN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j4[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bX($.n0.$2(a,n))
if(q!=null){m=$.iN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j4[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.j9(s)
$.iN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j4[n]=s
return s}if(p==="-"){o=A.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nm(a,s)
if(p==="*")throw A.a(A.m_(n))
if(v.leafTags[n]===true){o=A.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nm(a,s)},
nm(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lf(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j9(a){return J.lf(a,!1,null,!!a.$ice)},
r4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.j9(s)
else return J.lf(s,c,null,null)},
qU(){if(!0===$.la)return
$.la=!0
A.qV()},
qV(){var s,r,q,p,o,n,m,l
$.iN=Object.create(null)
$.j4=Object.create(null)
A.qT()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nn.$1(o)
if(n!=null){m=A.r4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qT(){var s,r,q,p,o,n,m=B.aJ()
m=A.cB(B.aK,A.cB(B.aL,A.cB(B.a6,A.cB(B.a6,A.cB(B.aM,A.cB(B.aN,A.cB(B.aO(B.a5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ne=new A.j1(p)
$.n0=new A.j2(o)
$.nn=new A.j3(n)},
cB(a,b){return a(b)||b},
qu(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ky(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.B("Illegal RegExp pattern ("+String(o)+")",a,null))},
rx(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.b9){s=B.a.D(a,c)
return b.b.test(s)}else return!J.kr(b,B.a.D(a,c)).gL(0)},
na(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jp(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
J(a,b,c){var s
if(typeof b=="string")return A.rA(a,b,c)
if(b instanceof A.b9){s=b.gdf()
s.lastIndex=0
return a.replace(s,A.na(c))}return A.rz(a,b,c)},
rz(a,b,c){var s,r,q,p
for(s=J.kr(b,a),s=s.gq(s),r=0,q="";s.l();){p=s.gm()
q=q+a.substring(r,p.gC())+c
r=p.gH()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
rA(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.jp(b),"g"),A.na(c))},
mV(a){return a},
ry(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.bq(0,a),s=new A.dn(s.a,s.b,s.c),r=t.cz,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.m(A.mV(B.a.v(a,q,m)))+A.m(c.$1(o))
q=m+n[0].length}s=p+A.m(A.mV(B.a.D(a,q)))
return s.charCodeAt(0)==0?s:s},
rB(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.ns(a,s,s+b.length,c)},
ns(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
b2:function b2(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b){this.a=a
this.$ti=b},
cK:function cK(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(){},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(){},
cb:function cb(a,b){this.a=a
this.$ti=b},
d8:function d8(){},
h0:function h0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d3:function d3(){},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
eb:function eb(a){this.a=a},
ar:function ar(){},
dS:function dS(){},
dT:function dT(){},
es:function es(){},
eq:function eq(){},
c6:function c6(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a},
aC:function aC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fC:function fC(a,b){this.a=a
this.b=b},
fB:function fB(a){this.a=a},
fG:function fG(a,b){var _=this
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
Q:function Q(a,b){this.a=a
this.$ti=b},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cX:function cX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
az:function az(){},
aX:function aX(){},
cs:function cs(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(a){this.b=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cm:function cm(a,b){this.a=a
this.c=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
rF(a){throw A.ag(A.lQ(a),new Error())},
k1(){throw A.ag(A.lQ(""),new Error())},
m7(){var s=new A.hl()
return s.b=s},
hl:function hl(){this.b=null},
pv(a){return a},
lS(a){return new Uint8Array(a)},
hW(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.dJ(b,a))},
mG(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.qB(a,b,c))
return b},
d1:function d1(){},
b0:function b0(){},
bc:function bc(){},
ea:function ea(){},
d2:function d2(){},
bG:function bG(){},
dt:function dt(){},
du:function du(){},
kF(a,b){var s=b.c
return s==null?b.c=A.dB(a,"lK",[b.x]):s},
lY(a){var s=a.w
if(s===6||s===7)return A.lY(a.x)
return s===11||s===12},
oq(a){return a.as},
aQ(a){return A.hz(v.typeUniverse,a,!1)},
qX(a,b){var s,r,q,p,o
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
return A.mj(a1,r,!0)
case 7:s=a2.x
r=A.bz(a1,s,a3,a4)
if(r===s)return a2
return A.mi(a1,r,!0)
case 8:q=a2.y
p=A.cA(a1,q,a3,a4)
if(p===q)return a2
return A.dB(a1,a2.x,p)
case 9:o=a2.x
n=A.bz(a1,o,a3,a4)
m=a2.y
l=A.cA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.kN(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cA(a1,j,a3,a4)
if(i===j)return a2
return A.mk(a1,k,i)
case 11:h=a2.x
g=A.bz(a1,h,a3,a4)
f=a2.y
e=A.q0(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.mh(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cA(a1,d,a3,a4)
o=a2.x
n=A.bz(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.kO(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.dQ("Attempted to substitute unexpected RTI kind "+a0))}},
cA(a,b,c,d){var s,r,q,p,o=b.length,n=A.hG(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bz(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q1(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hG(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bz(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q0(a,b,c,d){var s,r=b.a,q=A.cA(a,r,c,d),p=b.b,o=A.cA(a,p,c,d),n=b.c,m=A.q1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eJ()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
iB(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qM(s)
return a.$S()}return null},
qW(a,b){var s
if(A.lY(b))if(a instanceof A.ar){s=A.iB(a)
if(s!=null)return s}return A.aa(a)},
aa(a){if(a instanceof A.v)return A.j(a)
if(Array.isArray(a))return A.t(a)
return A.kV(J.aY(a))},
t(a){var s=a[v.arrayRti],r=t.v
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.kV(a)},
kV(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pE(a,s)},
pE(a,b){var s=a instanceof A.ar?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.p4(v.typeUniverse,s.name)
b.$ccache=r
return r},
qM(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iY(a){return A.b4(A.j(a))},
l9(a){var s=A.iB(a)
return A.b4(s==null?A.aa(a):s)},
kX(a){var s
if(a instanceof A.az)return A.qH(a.$r,a.ca())
s=a instanceof A.ar?A.iB(a):null
if(s!=null)return s
if(t.ci.b(a))return J.nT(a).a
if(Array.isArray(a))return A.t(a)
return A.aa(a)},
b4(a){var s=a.r
return s==null?a.r=new A.hy(a):s},
qH(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.b(q,0)
s=A.dD(v.typeUniverse,A.kX(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.ml(v.typeUniverse,s,A.kX(q[r]))}return A.dD(v.typeUniverse,s,a)},
k2(a){return A.b4(A.hz(v.typeUniverse,a,!1))},
pD(a){var s=this
s.b=A.pZ(s)
return s.b(a)},
pZ(a){var s,r,q,p,o
if(a===t.K)return A.pL
if(A.c0(a))return A.pP
s=a.w
if(s===6)return A.pz
if(s===1)return A.mO
if(s===7)return A.pG
r=A.pY(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.c0)){a.f="$i"+q
if(q==="p")return A.pJ
if(a===t.o)return A.pI
return A.pO}}else if(s===10){p=A.qu(a.x,a.y)
o=p==null?A.mO:p
return o==null?A.hV(o):o}return A.px},
pY(a){if(a.w===8){if(a===t.p)return A.b3
if(a===t.i||a===t.H)return A.pK
if(a===t.N)return A.pN
if(a===t.y)return A.eX}return null},
pC(a){var s=this,r=A.pw
if(A.c0(s))r=A.po
else if(s===t.K)r=A.hV
else if(A.cD(s)){r=A.py
if(s===t.h6)r=A.hU
else if(s===t.dk)r=A.bX
else if(s===t.fQ)r=A.mD
else if(s===t.cg)r=A.mF
else if(s===t.cD)r=A.pl
else if(s===t.an)r=A.pn}else if(s===t.p)r=A.V
else if(s===t.N)r=A.e
else if(s===t.y)r=A.hT
else if(s===t.H)r=A.mE
else if(s===t.i)r=A.pk
else if(s===t.o)r=A.pm
s.a=r
return s.a(a)},
px(a){var s=this
if(a==null)return A.cD(s)
return A.nj(v.typeUniverse,A.qW(a,s),s)},
pz(a){if(a==null)return!0
return this.x.b(a)},
pO(a){var s,r=this
if(a==null)return A.cD(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pJ(a){var s,r=this
if(a==null)return A.cD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pI(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mN(a){if(typeof a=="object"){if(a instanceof A.v)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
pw(a){var s=this
if(a==null){if(A.cD(s))return a}else if(s.b(a))return a
throw A.ag(A.mJ(a,s),new Error())},
py(a){var s=this
if(a==null||s.b(a))return a
throw A.ag(A.mJ(a,s),new Error())},
mJ(a,b){return new A.cw("TypeError: "+A.m8(a,A.at(b,null)))},
qf(a,b,c,d){if(A.nj(v.typeUniverse,a,b))return a
throw A.ag(A.oX("The type argument '"+A.at(a,null)+"' is not a subtype of the type variable bound '"+A.at(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
m8(a,b){return A.dZ(a)+": type '"+A.at(A.kX(a),null)+"' is not a subtype of type '"+b+"'"},
oX(a){return new A.cw("TypeError: "+a)},
aP(a,b){return new A.cw("TypeError: "+A.m8(a,b))},
pG(a){var s=this
return s.x.b(a)||A.kF(v.typeUniverse,s).b(a)},
pL(a){return a!=null},
hV(a){if(a!=null)return a
throw A.ag(A.aP(a,"Object"),new Error())},
pP(a){return!0},
po(a){return a},
mO(a){return!1},
eX(a){return!0===a||!1===a},
hT(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ag(A.aP(a,"bool"),new Error())},
mD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ag(A.aP(a,"bool?"),new Error())},
pk(a){if(typeof a=="number")return a
throw A.ag(A.aP(a,"double"),new Error())},
pl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ag(A.aP(a,"double?"),new Error())},
b3(a){return typeof a=="number"&&Math.floor(a)===a},
V(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ag(A.aP(a,"int"),new Error())},
hU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ag(A.aP(a,"int?"),new Error())},
pK(a){return typeof a=="number"},
mE(a){if(typeof a=="number")return a
throw A.ag(A.aP(a,"num"),new Error())},
mF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ag(A.aP(a,"num?"),new Error())},
pN(a){return typeof a=="string"},
e(a){if(typeof a=="string")return a
throw A.ag(A.aP(a,"String"),new Error())},
bX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ag(A.aP(a,"String?"),new Error())},
pm(a){if(A.mN(a))return a
throw A.ag(A.aP(a,"JSObject"),new Error())},
pn(a){if(a==null)return a
if(A.mN(a))return a
throw A.ag(A.aP(a,"JSObject?"),new Error())},
mQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.at(a[q],b)
return s},
pU(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mQ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.at(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mK(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.at(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.at(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.at(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.at(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.at(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
at(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.at(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.at(a.x,b)+">"
if(l===8){p=A.q6(a.x)
o=a.y
return o.length>0?p+("<"+A.mQ(o,b)+">"):p}if(l===10)return A.pU(a,b)
if(l===11)return A.mK(a,b,null)
if(l===12)return A.mK(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
q6(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
p5(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
p4(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hz(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dC(a,5,"#")
q=A.hG(s)
for(p=0;p<s;++p)q[p]=r
o=A.dB(a,b,q)
n[b]=o
return o}else return m},
p3(a,b){return A.mz(a.tR,b)},
p2(a,b){return A.mz(a.eT,b)},
hz(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.md(A.mb(a,null,b,!1))
r.set(b,s)
return s},
dD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.md(A.mb(a,b,c,!0))
q.set(c,r)
return r},
ml(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.kN(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
by(a,b){b.a=A.pC
b.b=A.pD
return b},
dC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aV(null,null)
s.w=b
s.as=c
r=A.by(a,s)
a.eC.set(c,r)
return r},
mj(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.p0(a,b,r,c)
a.eC.set(r,s)
return s},
p0(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.c0(b))if(!(b===t.b||b===t.u))if(s!==6)r=s===7&&A.cD(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.aV(null,null)
q.w=6
q.x=b
q.as=c
return A.by(a,q)},
mi(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oZ(a,b,r,c)
a.eC.set(r,s)
return s},
oZ(a,b,c,d){var s,r
if(d){s=b.w
if(A.c0(b)||b===t.K)return b
else if(s===1)return A.dB(a,"lK",[b])
else if(b===t.b||b===t.u)return t.eH}r=new A.aV(null,null)
r.w=7
r.x=b
r.as=c
return A.by(a,r)},
p1(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=13
s.x=b
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
dA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
oY(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dA(c)+">"
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
kN(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dA(r)+">")
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
mk(a,b,c){var s,r,q="+"+(b+"("+A.dA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
mh(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oY(i)+"}"}r=n+(g+")")
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
kO(a,b,c,d){var s,r=b.as+("<"+A.dA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.p_(a,b,c,r,d)
a.eC.set(r,s)
return s},
p_(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hG(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bz(a,b,r,0)
m=A.cA(a,c,r,0)
return A.kO(a,n,m,c!==m)}}l=new A.aV(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.by(a,l)},
mb(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
md(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.oS(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.mc(a,r,l,k,!1)
else if(q===46)r=A.mc(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bT(a.u,a.e,k.pop()))
break
case 94:k.push(A.p1(a.u,k.pop()))
break
case 35:k.push(A.dC(a.u,5,"#"))
break
case 64:k.push(A.dC(a.u,2,"@"))
break
case 126:k.push(A.dC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.oU(a,k)
break
case 38:A.oT(a,k)
break
case 63:p=a.u
k.push(A.mj(p,A.bT(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.mi(p,A.bT(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oR(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.me(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.oW(a.u,a.e,o)
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
return A.bT(a.u,a.e,m)},
oS(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mc(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.p5(s,o.x)[p]
if(n==null)A.E('No "'+p+'" in "'+A.oq(o)+'"')
d.push(A.dD(s,o,n))}else d.push(p)
return m},
oU(a,b){var s,r=a.u,q=A.ma(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dB(r,p,q))
else{s=A.bT(r,a.e,p)
switch(s.w){case 11:b.push(A.kO(r,s,q,a.n))
break
default:b.push(A.kN(r,s,q))
break}}},
oR(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ma(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bT(p,a.e,o)
q=new A.eJ()
q.a=s
q.b=n
q.c=m
b.push(A.mh(p,r,q))
return
case-4:b.push(A.mk(p,b.pop(),s))
return
default:throw A.a(A.dQ("Unexpected state under `()`: "+A.m(o)))}},
oT(a,b){var s=b.pop()
if(0===s){b.push(A.dC(a.u,1,"0&"))
return}if(1===s){b.push(A.dC(a.u,4,"1&"))
return}throw A.a(A.dQ("Unexpected extended operation "+A.m(s)))},
ma(a,b){var s=b.splice(a.p)
A.me(a.u,a.e,s)
a.p=b.pop()
return s},
bT(a,b,c){if(typeof c=="string")return A.dB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oV(a,b,c)}else return c},
me(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bT(a,b,c[s])},
oW(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bT(a,b,c[s])},
oV(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.dQ("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.dQ("Bad index "+c+" for "+b.n(0)))},
nj(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ac(a,b,null,c,null)
r.set(c,s)}return s},
ac(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.c0(d))return!0
s=b.w
if(s===4)return!0
if(A.c0(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ac(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.u){if(q===7)return A.ac(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.ac(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ac(a,b.x,c,d,e))return!1
return A.ac(a,A.kF(a,b),c,d,e)}if(s===6)return A.ac(a,p,c,d,e)&&A.ac(a,b.x,c,d,e)
if(q===7){if(A.ac(a,b,c,d.x,e))return!0
return A.ac(a,b,c,A.kF(a,d),e)}if(q===6)return A.ac(a,b,c,p,e)||A.ac(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t._)return!0
o=s===10
if(o&&d===t.fl)return!0
if(q===12){if(b===t.J)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.ac(a,j,c,i,e)||!A.ac(a,i,e,j,c))return!1}return A.mM(a,b.x,c,d.x,e)}if(q===11){if(b===t.J)return!0
if(p)return!1
return A.mM(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pH(a,b,c,d,e)}if(o&&q===10)return A.pM(a,b,c,d,e)
return!1},
mM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ac(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ac(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ac(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ac(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ac(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pH(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dD(a,b,r[o])
return A.mC(a,p,null,c,d.y,e)}return A.mC(a,b.y,null,c,d.y,e)},
mC(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ac(a,b[s],d,e[s],f))return!1
return!0},
pM(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ac(a,r[s],c,q[s],e))return!1
return!0},
cD(a){var s=a.w,r=!0
if(!(a===t.b||a===t.u))if(!A.c0(a))if(s!==6)r=s===7&&A.cD(a.x)
return r},
c0(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mz(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hG(a){return a>0?new Array(a):v.typeUniverse.sEA},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eJ:function eJ(){this.c=this.b=this.a=null},
hy:function hy(a){this.a=a},
eH:function eH(){},
cw:function cw(a){this.a=a},
mg(a,b,c){return 0},
dz:function dz(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bx:function bx(a,b){this.a=a
this.$ti=b},
fH(a,b,c,d){if(b==null){if(a==null)return new A.aC(c.i("@<0>").a8(d).i("aC<1,2>"))
b=A.qi()}else{if(A.qq()===b&&A.qp()===a)return new A.cX(c.i("@<0>").a8(d).i("cX<1,2>"))
if(a==null)a=A.qh()}return A.oQ(a,b,null,c,d)},
a5(a,b,c){return b.i("@<0>").a8(c).i("fF<1,2>").a(A.qI(a,new A.aC(b.i("@<0>").a8(c).i("aC<1,2>"))))},
n(a,b){return new A.aC(a.i("@<0>").a8(b).i("aC<1,2>"))},
oQ(a,b,c,d,e){return new A.dq(a,b,new A.hu(d),d.i("@<0>").a8(e).i("dq<1,2>"))},
kC(a){return new A.ay(a.i("ay<0>"))},
aS(a){return new A.ay(a.i("ay<0>"))},
lR(a,b){return b.i("kB<0>").a(A.qJ(a,new A.ay(b.i("ay<0>"))))},
kM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hv(a,b,c){var s=new A.bS(a,b,c.i("bS<0>"))
s.c=a.e
return s},
pr(a,b){return J.u(a,b)},
ps(a){return J.ad(a)},
ah(a,b,c){var s=A.fH(null,null,b,c)
a.an(0,new A.fI(s,b,c))
return s},
fJ(a,b,c){var s=A.fH(null,null,b,c)
s.a9(0,a)
return s},
av(a,b){var s,r,q=A.kC(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r)q.t(0,b.a(a[r]))
return q},
e9(a,b){var s=A.kC(b)
s.a9(0,a)
return s},
kE(a){var s,r
if(A.le(a))return"{...}"
s=new A.Y("")
try{r={}
B.b.t($.aG,a)
s.a+="{"
r.a=!0
a.an(0,new A.fM(r,s))
s.a+="}"}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dq:function dq(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
hu:function hu(a){this.a=a},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cq:function cq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eM:function eM(a){this.a=a
this.c=this.b=null},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
di:function di(a,b){this.a=a
this.$ti=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
z:function z(){},
fL:function fL(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b},
co:function co(){},
dr:function dr(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
aq:function aq(){},
cf:function cf(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
bf:function bf(){},
dy:function dy(){},
cx:function cx(){},
pR(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.c3(r)
q=A.B(String(s),null,null)
throw A.a(q)}q=A.hX(p)
return q},
hX(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.eK(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.hX(a[s])
return a},
pg(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.nN()
else s=new Uint8Array(o)
for(r=J.C(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
pf(a,b,c,d){var s=a?$.nM():$.nL()
if(s==null)return null
if(0===c&&d===b.length)return A.my(s,b)
return A.my(s,b.subarray(c,d))},
my(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
lA(a,b,c,d,e,f){if(B.d.bX(f,4)!==0)throw A.a(A.B("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.B("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.B("Invalid base64 padding, more than two '=' characters",a,b))},
oJ(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
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
throw A.a(A.lz(b,"Not a byte value at index "+p+": 0x"+B.d.hc(b[p],16),null))},
oI(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.b0(a1,2),f=a1&3,e=$.lt()
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
return A.m6(a,p+1,c,-j-1)}throw A.a(A.B(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.b(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.B(h,a,p))},
oG(a,b,c,d){var s=A.oH(a,b,c),r=(d&3)+(s-b),q=B.d.b0(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.nK()},
oH(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
m6(a,b,c,d){var s,r,q
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
lP(a,b,c){return new A.cY(a,b)},
pt(a){return a.hb()},
oO(a,b){return new A.hr(a,[],A.qm())},
oP(a,b,c){var s,r=new A.Y(""),q=A.oO(r,b)
q.bV(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ph(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
eK:function eK(a,b){this.a=a
this.b=b
this.c=null},
hq:function hq(a){this.a=a},
eL:function eL(a){this.a=a},
hE:function hE(){},
hD:function hD(){},
c5:function c5(a){this.a=a},
dR:function dR(a){this.a=a},
hk:function hk(a){this.a=0
this.b=a},
f9:function f9(){},
hj:function hj(){this.a=0},
aI:function aI(){},
dV:function dV(){},
dY:function dY(){},
cY:function cY(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
e7:function e7(){},
fE:function fE(a){this.b=a},
fD:function fD(a){this.a=a},
hs:function hs(){},
ht:function ht(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.c=a
this.a=b
this.b=c},
ez:function ez(){},
h6:function h6(){},
hF:function hF(a){this.b=0
this.c=a},
h5:function h5(a){this.a=a},
hC:function hC(a){this.a=a
this.b=16
this.c=0},
qQ(a){return A.f1(a)},
cC(a,b,c){var s
A.e(a)
A.hU(c)
t.ck.a(b)
s=A.aU(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.a(A.B(a,null,null))},
nh(a,b){return A.aU(A.e(a),A.hU(b))},
aT(a,b,c,d){var s,r=c?J.kx(a,d):J.lM(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
O(a,b,c){var s,r=A.c([],c.i("K<0>"))
for(s=J.F(a);s.l();)B.b.t(r,c.a(s.gm()))
if(b)return r
r.$flags=1
return r},
o(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("K<0>"))
s=A.c([],b.i("K<0>"))
for(r=J.F(a);r.l();)B.b.t(s,r.gm())
return s},
kD(a,b){var s=A.O(a,!1,b)
s.$flags=3
return s},
df(a,b,c){var s,r
A.ae(b,"start")
s=c!=null
if(s){r=c-b
if(r<0)throw A.a(A.a9(c,b,null,"end",null))
if(r===0)return""}if(t.bm.b(a))return A.ox(a,b,c)
if(s)a=A.aW(a,0,A.eY(c,"count",t.p),A.aa(a).i("r.E"))
if(b>0)a=J.nY(a,b)
s=A.o(a,t.p)
return A.ok(s)},
ox(a,b,c){var s=a.length
if(b>=s)return""
return A.om(a,b,c==null||c>s?s:c)},
I(a,b){return new A.b9(a,A.ky(a,!1,b,!1,!1,""))},
qP(a,b){return a==null?b==null:a===b},
kH(a,b,c){var s=J.F(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.l())}else{a+=A.m(s.gm())
while(s.l())a=a+c+A.m(s.gm())}return a},
kL(){var s,r,q=A.oj()
if(q==null)throw A.a(A.N("'Uri.base' is not supported"))
s=$.m3
if(s!=null&&q===$.m2)return s
r=A.ex(q,0,null)
$.m3=r
$.m2=q
return r},
dZ(a){if(typeof a=="number"||A.eX(a)||a==null)return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lX(a)},
dQ(a){return new A.c4(a)},
a1(a){return new A.aZ(!1,null,null,a)},
lz(a,b,c){return new A.aZ(!0,a,b,c)},
cI(a,b,c){return a},
a6(a){var s=null
return new A.ch(s,s,!1,s,s,a)},
fT(a,b){return new A.ch(null,null,!0,a,b,"Value not in range")},
a9(a,b,c,d,e){return new A.ch(b,c,!0,a,d,"Invalid value")},
ci(a,b,c,d){if(a<b||a>c)throw A.a(A.a9(a,b,c,d,null))
return a},
be(a,b,c){if(0>a||a>c)throw A.a(A.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.a9(b,a,c,"end",null))
return b}return c},
ae(a,b){if(a<0)throw A.a(A.a9(a,0,null,b==null?"index":b,null))
return a},
e0(a,b,c,d,e){return new A.e_(b,!0,a,e,"Index out of range")},
N(a){return new A.dj(a)},
m_(a){return new A.et(a)},
bi(a){return new A.cl(a)},
R(a){return new A.dU(a)},
B(a,b,c){return new A.i(a,b,c)},
of(a,b,c){var s,r
if(A.le(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.t($.aG,a)
try{A.pQ(a,s)}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}r=A.kH(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fz(a,b,c){var s,r
if(A.le(a))return b+"..."+c
s=new A.Y(b)
B.b.t($.aG,a)
try{r=s
r.a=A.kH(r.a,a,", ")}finally{if(0>=$.aG.length)return A.b($.aG,-1)
$.aG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pQ(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.m(l.gm())
B.b.t(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.b.t(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
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
ec(a,b,c,d){var s
if(B.n===c){s=J.ad(a)
b=J.ad(b)
return A.kI(A.bv(A.bv($.ko(),s),b))}if(B.n===d){s=J.ad(a)
b=J.ad(b)
c=J.ad(c)
return A.kI(A.bv(A.bv(A.bv($.ko(),s),b),c))}s=J.ad(a)
b=J.ad(b)
c=J.ad(c)
d=J.ad(d)
d=A.kI(A.bv(A.bv(A.bv(A.bv($.ko(),s),b),c),d))
return d},
ex(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
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
if(n===0)return A.m1(a7>0||a8<a8?B.a.v(a6,a7,a8):a6,5,a5).ge9()
else if(n===32)return A.m1(B.a.v(a6,s,a8),0,a5).ge9()}m=A.aT(8,0,!1,t.p)
B.b.j(m,0,0)
r=a7-1
B.b.j(m,1,r)
B.b.j(m,2,r)
B.b.j(m,7,r)
B.b.j(m,3,a7)
B.b.j(m,4,a7)
B.b.j(m,5,a8)
B.b.j(m,6,a8)
if(A.mS(a6,a7,a8,0,m)>=14)B.b.j(m,7,a8)
l=m[1]
if(l>=a7)if(A.mS(a6,a7,l,20,m)===20)m[7]=l
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
if(s){a6=B.a.aX(a6,i,h,"/");++h;++g;++a8}else{a6=B.a.v(a6,a7,i)+"/"+B.a.v(a6,h,a8)
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
if(s){a6=B.a.aX(a6,j,i,"")
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
if(s){a6=B.a.aX(a6,j,i,"")
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
g-=a7}return new A.aO(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.kQ(a6,a7,l)
else{if(l===a7)A.cz(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.mt(a6,a,k-1):""
a1=A.mq(a6,k,j,!1)
s=j+1
if(s<i){a2=A.aU(B.a.v(a6,s,i),a5)
b=A.hA(a2==null?A.E(A.B("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.mr(a6,i,h,a5,e,a1!=null)
a4=h<g?A.ms(a6,h+1,g,a5):a5
return A.dF(e,a0,a1,b,a3,a4,g<a8?A.mp(a6,g+1,a8):a5)},
oD(a){var s,r,q=0,p=null
try{s=A.ex(a,q,p)
return s}catch(r){if(t.d.b(A.c3(r)))return null
else throw r}},
oC(a){A.e(a)
return A.al(a,0,a.length,B.e,!1)},
m5(a){var s=t.N
return B.b.bT(A.c(a.split("&"),t.s),A.n(s,s),new A.h4(B.e),t.G)},
ew(a,b,c){throw A.a(A.B("Illegal IPv4 address, "+a,b,c))},
oz(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ew("each part must be in the range 0..255",a,r)}A.ew("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ew(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.W(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ew(j,a,q)
p=l}A.ew("IPv4 address should contain exactly 4 parts",a,q)},
oA(a,b,c){var s
if(b===c)throw A.a(A.B("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.oB(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.m4(a,b,c)
return!0},
oB(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
m4(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.h3(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.oz(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.b0(l,8)
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
B.an.al(s,a0,16,s,a)
B.an.bs(s,a,a0,0)}}return s},
dF(a,b,c,d,e,f,g){return new A.dE(a,b,c,d,e,f,g)},
mm(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cz(a,b,c){throw A.a(A.B(c,a,b))},
p7(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.p(q,"/")){s=A.N("Illegal path character "+q)
throw A.a(s)}}},
p9(a){var s
if(a.length===0)return B.am
s=A.mx(a)
s.e8(A.n4())
return A.lG(s,t.N,t.a)},
hA(a,b){if(a!=null&&a===A.mm(b))return null
return a},
mq(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.cz(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.p8(a,q,r)
if(o<r){n=o+1
p=A.mw(a,B.a.a4(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.oA(a,q,o)
l=B.a.v(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.af(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.mw(a,B.a.a4(a,"25",n)?o+3:n,c,"%25")}else p=""
A.m4(a,b,o)
return"["+B.a.v(a,b,o)+p+"]"}}return A.pd(a,b,c)},
p8(a,b,c){var s=B.a.af(a,"%",b)
return s>=b&&s<c?s:c},
mw(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.Y(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kR(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.Y("")
l=h.a+=B.a.v(a,q,r)
if(m)n=B.a.v(a,r,r+3)
else if(n==="%")A.cz(a,r,"ZoneID should not contain % anymore")
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
l=A.kP(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.v(a,b,c)
if(q<c){i=B.a.v(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
pd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kR(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cz(a,r,"Invalid character")
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
j=A.kP(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.v(a,b,c)
if(q<c){k=B.a.v(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
kQ(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.mo(a.charCodeAt(b)))A.cz(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.cz(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.v(a,b,c)
return A.p6(q?a.toLowerCase():a)},
p6(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mt(a,b,c){if(a==null)return""
return A.dG(a,b,c,16,!1,!1)},
mr(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dG(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.pc(s,e,f)},
pc(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.kS(a,!s||c)
return A.bW(a)},
ms(a,b,c,d){if(a!=null)return A.dG(a,b,c,256,!0,!1)
return null},
mp(a,b,c){if(a==null)return null
return A.dG(a,b,c,256,!0,!1)},
kR(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.j0(r)
o=A.j0(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.A(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.v(a,b,b+3).toUpperCase()
return null},
kP(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.fv(a,6*p)&63|q
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
o+=3}}return A.df(s,0,null)},
dG(a,b,c,d,e,f){var s=A.mv(a,b,c,d,e,f)
return s==null?B.a.v(a,b,c):s},
mv(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kR(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cz(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kP(n)}if(o==null){o=new A.Y("")
k=o}else k=o
k.a=(k.a+=B.a.v(a,p,q))+l
if(typeof m!=="number")return A.qO(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.v(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
mu(a){if(B.a.u(a,"."))return!0
return B.a.aq(a,"/.")!==-1},
bW(a){var s,r,q,p,o,n,m
if(!A.mu(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.b.t(s,"")}p=!0}else{p="."===n
if(!p)B.b.t(s,n)}}if(p)B.b.t(s,"")
return B.b.V(s,"/")},
kS(a,b){var s,r,q,p,o,n
if(!A.mu(a))return!b?A.mn(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gJ(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.b.t(s,"..")
p=!0}else{p="."===n
if(!p)B.b.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.t(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.b.j(s,0,A.mn(s[0]))}return B.b.V(s,"/")},
mn(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.mo(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.v(a,0,s)+"%3A"+B.a.D(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
pe(a,b){if(a.fZ("package")&&a.c==null)return A.mT(b,0,b.length)
return-1},
pa(){return A.c([],t.s)},
mx(a){var s,r,q,p,o,n=A.n(t.N,t.a),m=new A.hB(a,B.e,n)
for(s=a.length,r=0,q=0,p=-1;r<s;){o=a.charCodeAt(r)
if(o===61){if(p<0)p=r}else if(o===38){m.$3(q,p,r)
q=r+1
p=-1}++r}m.$3(q,p,r)
return n},
pb(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p>=0&&p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.a1("Invalid URL encoding"))}}return r},
al(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.e===d)return B.a.v(a,b,c)
else p=new A.aH(B.a.v(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n>=0&&n<o))return A.b(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.a1("Illegal percent encoding in URI"))
if(r===37){if(n+3>o)throw A.a(A.a1("Truncated URI"))
B.b.t(p,A.pb(a,n+1))
n+=2}else if(e&&r===43)B.b.t(p,32)
else B.b.t(p,r)}}return d.ct(p)},
mo(a){var s=a|32
return 97<=s&&s<=122},
m1(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.B(k,a,r))}}if(q<0&&r>b)throw A.a(A.B(k,a,r))
while(p!==44){B.b.t(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.b(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.b.t(j,o)
else{n=B.b.gJ(j)
if(p!==44||r!==n+7||!B.a.a4(a,"base64",n+1))throw A.a(A.B("Expecting '='",a,r))
break}}B.b.t(j,r)
m=r+1
if((j.length&1)===1)a=B.v.e_(a,m,s)
else{l=A.mv(a,m,s,256,!0,!1)
if(l!=null)a=B.a.aX(a,m,s,l)}return new A.h2(a,j,c)},
mS(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.j(e,o>>>5,r)}return d},
mf(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.mT(a.a,a.e,a.f)
return-1},
q2(a,b){A.e(a)
return A.kD(t.a.a(b),t.N)},
mT(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
pq(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.b(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
hn:function hn(){},
S:function S(){},
c4:function c4(a){this.a=a},
dh:function dh(){},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e_:function e_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dj:function dj(a){this.a=a},
et:function et(a){this.a=a},
cl:function cl(a){this.a=a},
dU:function dU(a){this.a=a},
ed:function ed(){},
dd:function dd(){},
eI:function eI(a){this.a=a},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
bd:function bd(){},
v:function v(){},
Y:function Y(a){this.a=a},
h4:function h4(a){this.a=a},
h3:function h3(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
eG:function eG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
dW:function dW(a){this.$ti=a},
cd:function cd(a){this.$ti=a},
cy:function cy(){},
bN:function bN(a){this.$ti=a},
on(a){return 8},
oo(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dv:function dv(){},
m0(){throw A.a(A.N("Cannot modify an unmodifiable Map"))},
aN:function aN(){},
mP(a){return a},
mY(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.Y("")
o=a+"("
p.a=o
n=A.t(b)
m=n.i("bK<1>")
l=new A.bK(b,0,s,m)
l.eq(b,0,s,n.c)
m=o+new A.H(l,m.i("d(y.E)").a(new A.ib()),m.i("H<y.E,d>")).V(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.a1(p.n(0)))}},
fa:function fa(a){this.a=a},
fb:function fb(){},
fc:function fc(){},
ib:function ib(){},
cc:function cc(){},
ee(a,b){var s,r,q,p,o,n,m=b.ec(a)
b.aV(a)
if(m!=null)a=B.a.D(a,m.length)
s=t.s
r=A.c([],s)
q=A.c([],s)
s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
p=b.aP(a.charCodeAt(0))}else p=!1
if(p){if(0>=s)return A.b(a,0)
B.b.t(q,a[0])
o=1}else{B.b.t(q,"")
o=0}for(n=o;n<s;++n)if(b.aP(a.charCodeAt(n))){B.b.t(r,B.a.v(a,o,n))
B.b.t(q,a[n])
o=n+1}if(o<s){B.b.t(r,B.a.D(a,o))
B.b.t(q,"")}return new A.fO(b,m,r,q)},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
lT(a){return new A.ef(a)},
ef:function ef(a){this.a=a},
oy(){var s,r,q,p,o,n,m,l,k=null
if(A.kL().gak()!=="file")return $.dO()
if(!B.a.aG(A.kL().gar(),"/"))return $.dO()
s=A.mt(k,0,0)
r=A.mq(k,0,0,!1)
q=A.ms(k,0,0,k)
p=A.mp(k,0,0)
o=A.hA(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.mr("a/b",0,3,k,"",m)
if(n&&!B.a.u(l,"/"))l=A.kS(l,m)
else l=A.bW(l)
if(A.dF("",s,n&&B.a.u(l,"//")?"":r,o,l,q,p).cM()==="a\\b")return $.f6()
return $.nz()},
h_:function h_(){},
eh:function eh(a,b,c){this.d=a
this.e=b
this.f=c},
ey:function ey(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
eA:function eA(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
ou(a,b){var s=A.c([0],t.t)
s=new A.fY(b,s,new Uint32Array(a.length))
s.ep(new A.aH(a),b)
return s},
X(a,b){if(b<0)A.E(A.a6("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.E(A.a6("Offset "+b+u.s+a.gk(0)+"."))
return new A.ca(a,b)},
a_(a,b,c){if(c<b)A.E(A.a1("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)A.E(A.a6("End "+c+u.s+a.gk(0)+"."))
else if(b<0)A.E(A.a6("Start may not be negative, was "+b+"."))
return new A.bl(a,b,c)},
fY:function fY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ca:function ca(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
o9(a,b){var s=A.oa(A.c([A.oK(a,!0)],t.r)),r=new A.fx(b).$0(),q=B.d.n(B.b.gJ(s).b+1),p=A.ob(s)?0:3,o=A.t(s)
return new A.fd(s,r,null,1+Math.max(q.length,p),new A.H(s,o.i("h(1)").a(new A.ff()),o.i("H<1,h>")).h7(0,B.aG),!A.qY(new A.H(s,o.i("v?(1)").a(new A.fg()),o.i("H<1,v?>"))),new A.Y(""))},
ob(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.u(r.c,q.c))return!1}return!0},
oa(a){var s,r,q=A.qN(a,new A.fi(),t.C,t.K)
for(s=A.j(q),r=new A.aD(q,q.r,q.e,s.i("aD<2>"));r.l();)J.nZ(r.d,new A.fj())
s=s.i("Q<1,2>")
r=s.i("aB<f.E,aF>")
s=A.o(new A.aB(new A.Q(q,s),s.i("f<aF>(f.E)").a(new A.fk()),r),r.i("f.E"))
return s},
oK(a,b){var s=new A.ho(a).$0()
return new A.af(s,!0,null)},
oM(a){var s,r,q,p,o,n,m=a.gai()
if(!B.a.p(m,"\r\n"))return a
s=a.gH().gK()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gC()
p=a.gX()
o=a.gH().ga6()
p=A.bJ(s,a.gH().gab(),o,p)
o=A.J(m,"\r\n","\n")
n=a.gaz()
return A.fZ(r,p,o,A.J(n,"\r\n","\n"))},
oN(a){var s,r,q,p,o,n,m
if(!B.a.aG(a.gaz(),"\n"))return a
if(B.a.aG(a.gai(),"\n\n"))return a
s=B.a.v(a.gaz(),0,a.gaz().length-1)
r=a.gai()
q=a.gC()
p=a.gH()
if(B.a.aG(a.gai(),"\n")){o=A.iT(a.gaz(),a.gai(),a.gC().gab())
o.toString
o=o+a.gC().gab()+a.gk(a)===a.gaz().length}else o=!1
if(o){r=B.a.v(a.gai(),0,a.gai().length-1)
if(r.length===0)p=q
else{o=a.gH().gK()
n=a.gX()
m=a.gH().ga6()
p=A.bJ(o-1,A.m9(s),m-1,n)
q=a.gC().gK()===a.gH().gK()?p:a.gC()}}return A.fZ(q,p,r,s)},
oL(a){var s,r,q,p,o
if(a.gH().gab()!==0)return a
if(a.gH().ga6()===a.gC().ga6())return a
s=B.a.v(a.gai(),0,a.gai().length-1)
r=a.gC()
q=a.gH().gK()
p=a.gX()
o=a.gH().ga6()
p=A.bJ(q-1,s.length-B.a.bb(s,"\n")-1,o-1,p)
return A.fZ(r,p,s,B.a.aG(a.gaz(),"\n")?B.a.v(a.gaz(),0,a.gaz().length-1):a.gaz())},
m9(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.a.ae(a,"\n",r-2)-1
else return r-B.a.bb(a,"\n")-1}},
fd:function fd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fx:function fx(a){this.a=a},
ff:function ff(){},
fe:function fe(){},
fg:function fg(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fh:function fh(a){this.a=a},
fy:function fy(){},
fl:function fl(a){this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a},
fv:function fv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a){this.a=a},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ(a,b,c,d){var s=c==null,r=s?0:c,q=b==null,p=q?a:b
if(a<0)A.E(A.a6("Offset may not be negative, was "+a+"."))
else if(!s&&c<0)A.E(A.a6("Line may not be negative, was "+A.m(c)+"."))
else if(!q&&b<0)A.E(A.a6("Column may not be negative, was "+A.m(b)+"."))
return new A.bI(d,a,r,p)},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(){},
kG(a,b,c){var s=new A.dc(a,b,c)
s.cP(a,b,c)
return s},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(){},
eo:function eo(){},
ck:function ck(){},
fZ(a,b,c,d){var s=new A.bh(d,a,b,c)
s.cP(a,b,c)
if(!B.a.p(d,c))A.E(A.a1('The context line "'+d+'" must contain "'+c+'".'))
if(A.iT(d,c,a.gab())==null)A.E(A.a1('The span text "'+c+'" must start at column '+(a.gab()+1)+' in a line within "'+d+'".'))
return s},
bh:function bh(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dX:function dX(a,b,c){var _=this
_.at=_.as=0
_.f=a
_.a=b
_.b=c
_.c=0
_.e=_.d=null},
ap:function ap(a){this.b=a},
ov(a,b,c){return new A.de(c,a,b)},
de:function de(a,b,c){this.c=a
this.a=b
this.b=c},
ep:function ep(){},
er:function er(){},
qv(a,b){return new A.hm([],[]).cv(a,b)},
qw(a){return new A.iF(new A.cq(t.cR)).$1(a)},
hm:function hm(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
lJ(a,b,c,d){return new A.cO(a,d,c==null?A.c([],t.l):c,b)},
ab:function ab(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
dH:function dH(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=b},
a0:function a0(a){this.a=a},
fU:function fU(a,b,c,d,e,f){var _=this
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
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
bV:function bV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dp:function dp(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a},
cJ:function cJ(a){this.a=a},
T:function T(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b){this.a=a
this.b=b},
kn:function kn(){},
eB:function eB(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
G(a,b){return new A.cp(null,a,b)},
cp:function cp(a,b,c){this.c=a
this.a=b
this.b=c},
P:function P(){},
bP:function bP(a,b,c){this.b=a
this.c=b
this.a=c},
hh:function hh(){},
bO:function bO(a,b,c){this.b=a
this.c=b
this.a=c},
ao:function ao(a,b,c){this.b=a
this.c=b
this.a=c},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
U(a){var s=new A.h8(A.c([],t.c0),a,A.f0(a,null,!1,null).a,A.aS(t.T))
s.d5()
return s},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
he:function he(a,b){this.a=a
this.b=b},
hd:function hd(a){this.a=a},
hc:function hc(a){this.a=a},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n7(a,b){return A.fH(A.qG(),A.iS(),a,b)},
bm(a,b){var s=t.T
if(s.b(a))a=a.ga7()
if(s.b(b))b=b.ga7()
s=t.f
if(s.b(a)&&s.b(b))return A.r5(a,b)
s=t.j
if(s.b(a)&&s.b(b))return A.r1(a,b)
return J.u(a,b)},
r1(a,b){var s,r,q
if(J.a7(a)!==J.a7(b))return!1
s=t.h
if(s.b(a))a=a.gM()
if(s.b(b))b=b.gM()
for(s=J.C(a),r=J.C(b),q=0;q<s.gk(a);++q)if(!A.bm(s.h(a,q),r.h(b,q)))return!1
return!0},
r5(a,b){var s={}
s.a=a
s.b=b
if(a.gk(a)!==b.gk(b))return!1
return a.gE().aO(0,new A.ja(s))},
qx(a){var s
if(t.f.b(a)){s=t.z
return B.a7.b2(a.gE().ac(0,A.iS(),s))^B.a7.b2(a.gag().ac(0,A.iS(),s))}else if(t.R.b(a))return B.aH.b2(J.aR(a,A.iS(),t.z))
else if(t.m.b(a))return J.ad(a.ga7())
return J.ad(a)},
nc(a,b){return t.T.a(a.gM().gE().bS(0,new A.iU(b)))},
nf(a,b){var s,r,q,p,o,n,m,l
for(s=A.oc(a.gM().gN(),0,t.x),r=s.a,r=r.gq(r),q=s.b,s=new A.bE(r,q,A.j(s).i("bE<1>"));s.l();){p=s.c
p=p>=0?new A.b2(q+p,r.gm()):A.E(A.a2())
o=p.a
n=p.b
m=n.a
l=n.b
if(A.bm(m,b))return new A.dx(o,t.T.a(m),l)}throw A.a(A.G(A.m(b)+" not found in map",a.gA()))},
qL(a,b){return a.gE().bS(0,new A.iV(b))},
l5(a,b){var s=a.gE().aJ(0,new A.iE(b))
return!s.gL(s)},
ja:function ja(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iE:function iE(a){this.a=a},
fS(a,b,c){return new A.d4(a,b,c,!0,b,"path",null)},
f8(a,b){return new A.dP("Encountered an alias node along "+A.m(a)+'! Alias nodes are nodes that refer to a previously serialized nodes, and are denoted by either the "*" or the "&" indicators in the original YAML. As the resulting behavior of mutations on these nodes is not well-defined, the operation will not be supported by this library.\n\n'+b.gA().dY("The alias was first defined here."),null,null)},
n5(a,b,c){var s=A.J(b,"\n","\n> ")
return new A.eQ("(package:yaml_edit) "+a+"\n\n# YAML before edit:\n> "+s+"\n\n# YAML after edit:\n> "+A.J(c,"\n","\n> ")+"\n\nPlease file an issue at:\nhttps://github.com/dart-lang/yaml_edit/issues/new?labels=bug\n")},
d4:function d4(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.b=e
_.c=f
_.d=g},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
rK(a,b,c,d){var s,r,q,p,o,n,m,l
A.ci(c,0,b.gk(b)-1,null)
s=J.l(b.gM(),c)
r=s.gA().gC().gK()
q=a.b
if(b.ga2()===B.m){p=A.l7(q,b)+A.l6(a)
o=A.dK(q)
n=A.dN(A.au(d,B.i,B.j),p,o)
if(!(t.j.b(d)&&d.gk(d)!==0))m=t.f.b(d)&&d.gE().gb4(0)
else m=!0
if(m)n=B.a.D(n,p)
else if(A.hi(s)===B.m)n+=o
l=A.bZ(s)
if(l<=r){++r
n=" "+n
l=r}return A.aw(r,l-r,n)}else{n=A.bn(d)
m=s.gA()
return A.aw(r,m.gk(m),n)}},
rn(a,b,c){var s,r,q,p,o,n=J.l(b.gM(),c)
if(b.ga2()===B.f){A.ci(c,0,b.gk(b)-1,null)
s=n.gA()
r=a.b
q=s.gC().gK()
p=s.gH().gK()
o=q-1
if(c===0){q=B.a.ae(r,"[",o)+1
p=c===b.gk(b)-1?B.a.af(r,"]",p):B.a.af(r,",",p)+1}else q=B.a.ae(r,",",o)
return A.aw(q,p-q,"")}else return A.pV(a,b,n,c)},
pV(a,b,c,d){var s,r,q,p,o,n,m,l=b.gk(b),k=l-1
A.ci(d,0,k,null)
s=a.b
r=c.gA()
q=r.gk(r)===0
p=A.bZ(c)
o=A.l7(s,b)
n=B.a.ae(s,"-",q?r.gC().gK():r.gC().gK()-1)
m=q?p+1:p
return A.np(s,b,o,d===0,d>=k,l===1,A.dK(s),new A.i3(b,d,s),new A.cu(m,n))},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
rL(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(!A.l5(b,c)){s=A.au(c,B.i,B.j)
if(b.ga2()===B.f)return A.pi(a,b,s,a0)
else{r=a.b
q=A.f_(r,b)
p=A.l6(a)
o=A.bn(A.au(s,B.i,B.j))
n=A.dK(r)
m=B.a.aj(" ",A.f_(r,b))
l=b.gA().gH().gK()
k=A.nd(b,o)
if(b.gE().gb4(0)){j=b.gE()
if(k===j.gk(j)){j=b.gM().gag()
i=B.a.af(r,"\n",A.bZ(j.gJ(j)))
if(i!==-1)l=i+1
else m=n+m}else{j=b.gM().gE().aR(0)
if(!(k>=0&&k<j.length))return A.b(j,k)
l=B.a.ae(r,"\n",t.T.a(j[k]).gA().gC().gK())+1}}h=A.dN(a0,q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hi(a0)
q=q!==B.f&&!A.ld(a0)}else q=!1
return A.aw(l,0,q?m+(o+":"+n+h+n):m+(o+": "+h+n))}}else if(b.ga2()===B.f){g=b.gM().h(0,c).gA()
h=A.bn(a0)
return A.aw(g.gC().gK(),g.gk(g),h)}else{r=a.b
n=A.dK(r)
q=A.f_(r,b)
p=A.l6(a)
s=A.nc(b,c)
f=A.dN(A.au(a0,B.i,B.j),q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hi(a0)
q=q!==B.f&&!A.ld(a0)}else q=!1
if(q)f=n+f
if(!B.a.u(f,n))f=" "+f
e=s.gA().gH().gK()+1
q=b.gM().h(0,c)
q.toString
d=A.bZ(q)
return A.aw(e,(d<e?e:d)-e,f)}},
ro(a,b,c){var s,r,q,p,o,n,m
if(b.ga2()===B.f){s=A.nf(b,c)
r=s.b
q=r.gA().gC().gK()
p=s.c.gA().gH().gK()
o=a.b
n=b.gE()
m=q-1
if(A.bm(r,n.gU(n))){q=B.a.ae(o,"{",m)+1
n=b.gE()
p=A.bm(r,n.gJ(n))?B.a.af(o,"}",p):B.a.af(o,",",p)+1}else q=B.a.ae(o,",",m)
return A.aw(q,p-q,"")}else return A.pW(a,b,c)},
pi(a,b,c,d){var s,r=A.bn(c),q=A.bn(d),p=b.gE()
if(p.gL(p))return A.aw(b.gA().gH().gK()-1,0,r+": "+q)
s=A.nd(b,r)
p=b.gE()
if(s===p.gk(p))return A.aw(b.gA().gH().gK()-1,0,", "+r+": "+q)
p=b.gM().gE().aR(0)
if(!(s>=0&&s<p.length))return A.b(p,s)
return A.aw(t.T.a(p[s]).gA().gC().gK(),0,r+": "+q+", ")},
pW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=A.nf(b,c)
r=i.a=s.a
q=s.c
p=a.b
o=b.gE()
n=o.gk(o)
m=s.b.gA()
o=A.f_(p,b)
l=r===0
k=l?b.gA().gC().gK():m.gC().gK()
j=q.gA()
j=j.gk(j)===0?m.gH().gK()+2:A.bZ(q)
return A.np(p,b,o,l,r>=n-1,n===1,A.dK(p),new A.i4(i,b,p),new A.cu(j,k))},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
aw(a,b,c){A.ae(a,null)
A.ae(b,null)
return new A.db(a,b,c)},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
kU(a){var s,r=new A.aH(a)
for(s=$.lw(),s=new A.aj(s,s.r,s.e,A.j(s).i("aj<1>"));s.l();)if(r.p(r,s.d))return!0
return!1},
bY(a){var s,r,q,p,o=new A.Y("")
for(s=new A.aH(a),r=t.V,s=new A.a3(s,s.gk(0),r.i("a3<r.E>")),r=r.i("r.E");s.l();){q=s.d
if(q==null)q=r.a(q)
p=$.nQ()
if(p.h(0,q)!=null){q=A.m(p.h(0,q))
o.a+=q}else{q=A.A(q)
o.a+=q}}return'"'+o.n(0)+'"'},
mX(a){if(A.kU(a)||B.a.p(a,"\n"))return null
return"'"+A.J(a,"'","''")+"'"},
q4(a,b,c){var s,r,q,p,o=a.length
if(o===0||B.a.O(a).length!==o)return null
if(A.kU(a))return null
s=B.a.aj(" ",b)
r=B.a.hd(a)
q=B.a.D(a,r.length)
o=c+s
p=A.c(A.J(r,"\n",o).split(c),t.s)
r=A.oe(p,new A.ia(p,s,c),t.N)
return">-\n"+s+r+A.J(q,"\n",o)},
q5(a,b,c){var s,r=a.length
if(r===0||B.a.O(a).length!==r)return null
if(A.kU(a))return null
s=B.a.aj(" ",b)
return"|-\n"+s+A.J(a,"\n",c+s)},
qa(a){var s,r=a.ga7(),q=a.ga2()
if(typeof r!="string")return J.am(r)
switch(q){case B.M:return A.bY(r)
case B.B:s=A.mX(r)
return s==null?A.bY(r):s
default:s=A.lc(r)?null:r
return s==null?A.bY(r):s}},
q9(a,b,c){var s,r=a.ga7(),q=a.ga2()
A.l0(r)
if(typeof r!="string")return J.am(r)
switch(q){case B.h:s=A.lc(r)?null:r
return s==null?A.bY(r):s
case B.B:s=A.mX(r)
return s==null?A.bY(r):s
case B.N:s=A.q4(r,b,c)
return s==null?A.bY(r):s
case B.O:s=A.q5(r,b,c)
return s==null?A.bY(r):s
default:s=A.lc(r)?null:r
return s==null?A.bY(r):s}},
bn(a){t.T.a(a)
if(t.h.b(a))return"["+J.aR(a.gM(),A.rC(),t.N).V(0,", ")+"]"
else if(t.S.b(a))return"{"+a.gM().gN().ac(0,new A.km(),t.N).V(0,", ")+"}"
return A.qa(t.m.a(a))},
dN(a,b,c){var s,r
if(!A.qZ(a))return A.bn(a)
s=b+2
if(t.h.b(a)){if(a.gk(a)===0)return B.a.aj(" ",b)+"[]"
return J.aR(a.gM(),new A.kk(s,c,b),t.N).V(0,c)}else if(t.S.b(a)){r=a.gE()
if(r.gL(r))return B.a.aj(" ",b)+"{}"
return a.gM().gN().ac(0,new A.kl(b,s,c),t.N).V(0,c)}return A.q9(t.m.a(a),s,c)},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(){},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
nv(a,b){var s,r=A.rM(),q=$.kp()
try{$.nx=r
s=a.$0()
return s}finally{$.nx=q}},
mL(a,b){},
lc(a){var s,r,q
try{s=A.nv(new A.j7(a),t.T)
if(!J.u(s.ga7(),a))return!0
r=B.a.p(a,A.I("\\{|\\[|\\]|\\}|,",!0))
return r}catch(q){return!0}},
l0(a){if(typeof a=="number"||typeof a=="string"||A.eX(a)||a==null)return
throw A.a(A.lz(a,"value","Not a valid scalar type!"))},
qZ(a){var s
if(t.m.b(a))if(a.ga2()===B.O||a.ga2()===B.N||a.ga2()===B.j)return!0
if(t.h.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
if(t.S.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
return!1},
bZ(a){var s
if(t.h.b(a))if(a.ga2()===B.f)return a.gA().gH().gK()
else return A.bZ(J.kt(a.gM()))
else if(t.S.b(a))if(a.ga2()===B.f)return a.gA().gH().gK()
else{s=a.gM().gag()
return A.bZ(s.gJ(s))}return a.gA().gH().gK()},
r0(a,b){return A.b3(a)&&a>=0&&a<b},
ld(a){var s
if(t.f.b(a)){s=a.gE()
return s.gL(s)}if(t.j.b(a))return a.gk(a)===0
return!1},
nd(a,b){var s,r,q,p,o,n=a.gM().gE().ac(0,new A.iW(),t.N).aR(0)
for(s=n.length,r=1;r<s;++r){q=n[r]
p=n[r-1]
if(q===p)q=0
else q=q<p?-1:1
if(q<0){s=a.gE()
return s.gk(s)}}o=B.b.b3(n,new A.iX(b))
if(o!==-1)return o
s=a.gE()
return s.gk(s)},
l6(a){var s,r,q,p,o,n,m=a.cn([],null),l=t.S
if(l.b(m)&&m.ga2()===B.m)s=m.gM().gag()
else s=t.h.b(m)&&m.ga2()===B.m?m.gM():null
r=2
if(s!=null)for(q=J.F(s),p=t.h;q.l();){o=q.gm()
if(p.b(o))n=A.l7(a.b,o)
else n=l.b(o)?A.f_(a.b,o):0
if(n!==0)r=n}return r},
l7(a,b){var s
if(b.ga2()===B.f)return 0
if(b.gk(b)===0)throw A.a(A.N("Unable to get indentation for empty block list"))
s=B.a.ae(a,"-",J.kt(b.gM()).gA().gC().gK()-1)
if(s===0)return s
return s-B.a.ae(a,"\n",s-1)-1},
f_(a,b){var s,r,q,p
if(b.ga2()===B.f)return 0
s=b.gE()
if(s.gL(s))throw A.a(A.N("Unable to get indentation for empty block map"))
s=b.gM().gE()
r=t.T.a(s.gJ(s)).gA().gC().gK()
q=B.a.ae(a,"\n",r)
p=B.a.ae(a,"?",r)
if(p===-1){if(q===-1)return r
return r-q-1}if(q===-1)return p
if(p>q)return p-q-1
return r-q-1},
dK(a){var s,r,q,p,o
for(s=a.length,r=-1,q=0,p=0;r=B.a.af(a,"\n",r+1),r!==-1;){if(r!==0){o=r-1
if(!(o>=0&&o<s))return A.b(a,o)
o=a[o]==="\r"}else o=!1
if(o)++p
else ++q}return p>q?"\r\n":"\n"},
qS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
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
break A}l=B.a.af(a,A.I("[^ ]",!0),m)
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
case 3:j=B.a.af(a,$.lu(),r)
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
qR(a,b){var s,r,q=Math.max(0,B.a.ae(a,$.lu(),Math.max(0,b-1)))
if(q>>>0!==q||q>=a.length)return A.b(a,q)
s=a[q]
A:{if("\r"===s||"\n"===s){r=new A.bU(-1,q)
break A}if("-"===s||"?"===s||":"===s){r=new A.bU(q,-1)
break A}r=B.cy
break A}return r},
np(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=i.b,l=a.length,k=Math.min(A.qS(a,c,B.a.af(a,"\n",i.a-1))+1,l)
if(f){if(k<l||B.a.aG(a,"\n"))k-=g==="\r\n"?2:1
l=t.h.b(b)?"[]":"{}"
return A.aw(m,k-m,l)}else if(e){m=B.a.ae(a,"\n",m)+1
return A.aw(m,Math.max(B.a.ae(a,"\n",b.gA().gH().gK())+1,k)-m,"")}s=!1
if(m!==0)if(d){r=A.qR(a,m)
q=r.a
s=q!==-1
m=s?q+2:r.b+1}else m=B.a.ae(a,"\n",m)+1
p=h.$0()
o=p.a
n=p.b
return A.aw(m,(s&&o===k-1?k+n:k)-m,"")},
hi(a){if(t.S.b(a))return a.ga2()
if(t.h.b(a))return a.ga2()
return null},
j7:function j7(a){this.a=a},
iW:function iW(){},
iX:function iX(a){this.a=a},
lo(a,b){var s=t.z,r=A.n7(s,s)
r.a9(0,a.gM())
b.$1(r)
return t.S.a(A.au(r,B.i,B.j))},
au(a,b,c){var s,r,q
if(t.m.b(a)){A.l0(a.ga7())
return a}else if(t.h.b(a)){for(s=J.F(a.gM());s.l();)A.au(s.gm(),B.i,B.j)
return a}else if(t.S.b(a)){for(s=a.gM().gN(),s=s.gq(s);s.l();){r=s.gm()
A.au(r.a,B.i,B.j)
A.au(r.b,B.i,B.j)}return a}else if(t.f.b(a))return A.oF(a,b,c)
else if(t.j.b(a))return A.oE(a,b,c)
else{A.l0(a)
q=A.bJ(0,null,null,null)
return new A.eE(c,A.kG(q,q,""),a)}},
oF(a,b,c){var s,r,q,p=A.n7(t.z,t.T)
for(s=a.gN(),s=s.gq(s);s.l();){r=s.gm()
p.j(0,A.au(r.a,b,c),A.au(r.b,b,c))}q=A.bJ(0,null,null,null)
s=A.kG(q,q,"")
return new A.eD(p.a===0?B.f:b,p,s)},
oE(a,b,c){var s,r,q=J.aR(a,new A.hf(b,c),t.T)
q=A.o(q,q.$ti.i("y.E"))
s=A.bJ(0,null,null,null)
r=A.kG(s,s,"")
return new A.eC(q.length===0?B.f:b,q,r)},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(){},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b){this.a=a
this.b=b},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
qj(a){var s,r,q,p,o,n,m,l,k=A.D(a),j=A.aS(t.N)
if(t.S.b(k))for(s=k.gE(),s=s.gq(s);s.l();){r=s.gm()
if(B.K.aU(r))j.t(0,A.e(r))}j.a9(0,B.K.gag())
s=t.s
q=A.c([],s)
for(j=A.hv(j,j.r,j.$ti.c),p=j.$ti.c;j.l();){o=j.d
if(o==null)o=p.a(o)
for(n=B.K.gN(),n=n.gq(n);n.l();){m=n.gm()
if(m.b===o){l=A.c([],s)
m=m.a
if(m==="rules")l.push("ruleProviders")
l.push(m)
B.b.a9(q,l)}}}return q},
iC(a){var s=t.S.a(A.D(a)),r=A.o(B.ct,t.N),q=t.g,p=q.a(s.h(0,"proxy-groups"))
p=J.F(p==null?[]:p)
while(p.l())r.push(A.e(J.l(p.gm(),"name")))
q=q.a(s.h(0,"proxies"))
q=J.F(q==null?[]:q)
while(q.l())r.push(A.e(J.l(q.gm(),"name")))
return r},
l4(a){var s=t.g.a(t.S.a(A.D(a)).h(0,"rules"))
if(s==null)s=[]
return A.O(s,!0,t.N)},
kW(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.e(q.a),A.kW(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.F(a);r.l();)s.push(A.kW(r.gm()))
return s}return a},
eZ(a){var s,r=A.c([],t.Z),q=t.g.a(t.S.a(A.D(a)).h(0,"proxy-groups"))
q=J.F(q==null?[]:q)
s=t.P
while(q.l())r.push(s.a(A.kW(q.gm())))
return r},
rq(a,b){var s,r,q,p,o,n,m=A.eZ(a),l=A.n(t.N,t.P)
for(s=m.length,r=0;q=m.length,r<q;m.length===s||(0,A.a8)(m),++r){p=m[r]
l.j(0,A.e(p.h(0,"name")),p)}if(b.length!==q||A.av(b,A.t(b).c).a!==b.length||B.b.R(b,new A.jV(l)))throw A.a(B.ci)
s=A.U(a)
q=A.c([],t.Z)
for(o=b.length,r=0;r<b.length;b.length===o||(0,A.a8)(b),++r){n=l.h(0,b[r])
n.toString
q.push(n)}s.G(["proxy-groups"],q)
return s.b},
nr(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.O(a[r]))}else s=!1
if(!s)break;--r}return r},
lj(a,b,c){var s,r,q=A.c(a.split(","),t.s)
if(B.a.O(B.b.gU(q))==="SUB-RULE")return a
s=A.nr(q)
if(s>0){if(!(s<q.length))return A.b(q,s)
r=B.a.O(q[s])===b}else r=!1
if(r)B.b.j(q,s,c)
return B.b.V(q,",")},
rJ(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=t.s,q=0;q<b.length;b.length===s||(0,A.a8)(b),++q){p=A.c(b[q].split(","),r)
if(p.length<2||B.b.R(p,new A.kc()))throw A.a(B.b9)
if(B.b.gU(p)!=="SUB-RULE"){o=A.iC(a)
n=A.nr(p)
if(!(n>=0&&n<p.length))return A.b(p,n)
n=!B.b.p(o,B.a.O(p[n]))
o=n}else o=!1
if(o)throw A.a(B.by)}m=A.U(a)
m.G(["rules"],b)
return m.b},
q8(a){var s,r,q,p,o,n,m,l,k,j="dialer-proxy",i=t.S.a(A.D(a)),h=t.N,g=A.n(h,t.a)
for(s=A.eZ(a),r=s.length,q=t.g,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p){o=s[p]
n=A.e(o.h(0,"name"))
m=q.a(o.h(0,"proxies"))
g.j(0,n,A.O(m==null?[]:m,!0,h))}s=q.a(i.h(0,"proxies"))
s=J.F(s==null?[]:s)
r=t.s
while(s.l()){l=s.gm()
q=J.C(l)
if(typeof q.h(l,j)=="string")g.j(0,A.e(q.h(l,"name")),A.c([A.e(q.h(l,j))],r))}k=new A.ie(A.aS(h),A.aS(h),g)
for(h=new A.aj(g,g.r,g.e,g.$ti.i("aj<1>"));h.l();)k.$1(h.d)},
rH(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7=B.a.O(A.e(a9.h(0,"name")))
if((b2==="\ud83d\ude80 Domestic"||b2==="\ud83c\udf0d Foreign")&&a7!==b2)throw A.a(B.bh)
if(a7.length===0||B.a.p(a7,",")||B.a.p(a7,"\n"))throw A.a(B.b2)
if(A.b5(a8).F(b2))throw A.a(B.ak)
s=A.iC(a8)
r=A.t(s)
if(new A.q(s,r.i("k(1)").a(new A.k3(b2)),r.i("q<1>")).p(0,a7)||a7==="GLOBAL")throw A.a(B.aX)
q=A.eZ(a8)
p=B.b.b3(q,new A.k4(b2))
if(p>=0){if(!(p<q.length))return A.b(q,p)
s=t.g.a(q[p].h(0,a6))
if(s==null)s=[]
o=A.O(s,!0,t.N)}else o=A.c2(a8)
if(o.length===0)B.b.t(o,"DIRECT")
s=t.j
if(s.b(a9.h(0,a6))){n=A.O(s.a(a9.h(0,a6)),!0,t.N)
if(n.length!==o.length||new A.d_(n,A.t(n).i("d_<1>")).gN().R(0,new A.k5(o)))throw A.a(B.bM)}if(B.b.p(o,a7)||B.b.p(o,b2)||B.b.R(o,new A.k6(a8)))throw A.a(B.be)
r=b1!=null
if(r){B.b.au(o,new A.k7())
if(b1)B.b.b8(o,0,"DIRECT")
if(o.length===0&&b0==null)throw A.a(B.bY)}m=t.N
l=t.z
k=A.fJ(a9,m,l)
k.j(0,"name",a7)
k.j(0,a6,o)
j=p<0
if(j)B.b.t(q,k)
else B.b.j(q,p,k)
i=A.U(a8)
k=b2!=null
if(k&&b2!==a7){for(h=q.length,g=t.R,f=0;f<q.length;q.length===h||(0,A.a8)(q),++f){e=q[f]
if(s.b(e.h(0,a6))){d=[]
for(c=J.F(g.a(e.h(0,a6)));c.l();){b=c.gm()
d.push(J.u(b,b2)?a7:b)}e.j(0,a6,d)}}h=t.s
g=A.c([],h)
for(d=A.l4(a8),c=d.length,f=0;f<d.length;d.length===c||(0,A.a8)(d),++f)g.push(A.lj(d[f],b2,a7))
i.G(["rules"],g)
g=t.S
a=t.Y.a(g.a(A.D(a8)).h(0,"sub-rules"))
for(l=(a==null?A.n(l,l):a).gN(),l=l.gq(l);l.l();){d=l.gm()
c=d.a
a0=A.c([],h)
for(d=J.F(s.a(d.b));d.l();)a0.push(A.lj(A.e(d.gm()),b2,a7))
i.G(["sub-rules",c],a0)}a1=t.g.a(g.a(A.D(a8)).h(0,a6))
if(a1==null)a1=[]
for(s=J.C(a1),a2=0;a2<s.gk(a1);++a2)if(J.u(J.l(s.h(a1,a2),"dialer-proxy"),b2))i.G(["proxies",a2,"dialer-proxy"],a7)}i.G(["proxy-groups"],q)
a3=A.f5(a8)
if(k&&b2!==a7&&a3.F(b2)){s=a3.I(0,b2)
s.toString
a3.j(0,a7,s)}if(j)a3.j(0,a7,"")
a4=A.lq(i.b,a3)
a5=A.jr(a8)
if(k&&b2!==a7&&a5.F(b2)){s=a5.I(0,b2)
s.toString
a5.j(0,a7,s)}if(r)a5.j(0,a7,b1)
if(a5.a!==0)a4=A.nw(a4,a5)
if(b0!=null){s=A.fJ(A.f5(a4),m,m)
s.j(0,a7,B.a.O(b0))
a4=A.n2(a4,s)}A.q8(a4)
return a4},
qy(a,b){var s,r,q,p,o,n,m,l,k,j
if(b==="\ud83d\ude80 Domestic"||b==="\ud83c\udf0d Foreign")throw A.a(B.bf)
if(A.b5(a).F(b))throw A.a(B.ak)
s=t.S.a(A.D(a))
r=A.eZ(a)
q=t.Y.a(s.h(0,"sub-rules"))
if(q==null){p=t.z
q=A.n(p,p)}o=!0
if(!B.b.R(r,new A.iG(b))){p=t.g.a(s.h(0,"proxies"))
if(p==null)p=[]
if(!J.nR(p,new A.iH(b))){p=t.N
n=A.o(A.l4(a),p)
for(m=q.gag(),m=m.gq(m),l=t.j;m.l();)B.b.a9(n,A.O(l.a(m.gm()),!0,p))
p=B.b.R(n,new A.iI(b))
o=p}}if(o)throw A.a(B.bz)
k=A.U(a)
p=A.t(r)
n=p.i("q<1>")
p=A.o(new A.q(r,p.i("k(1)").a(new A.iJ(b)),n),n.i("f.E"))
k.G(["proxy-groups"],p)
p=k.b
n=A.f5(a)
n.I(0,b)
j=A.lq(p,n)
if(B.a.p(a,"# Mclash group-direct: ")){p=A.jr(a)
p.I(0,b)
p=A.nw(j,p)}else p=j
return p},
jV:function jV(a){this.a=a},
kc:function kc(){},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(){},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
dL(a,b){var s,r,q,p
if(b>64)throw A.a(B.b1)
if(t.f.b(a)){s=A.n(t.N,t.X)
for(r=a.gN(),r=r.gq(r),q=b+1;r.l();){p=r.gm()
s.j(0,A.m(p.a),A.dL(p.b,q))}return s}if(t.j.b(a)){s=J.aR(a,new A.jo(b),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
ra(a){var s,r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jg()),t.U).V(0,"\n"),q=A.U("")
q.G([],A.dL(A.D(a),0))
s=r.length===0?"":r+"\n"
return s+q.n(0)},
ng(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="template",b0="external-controller",b1="name",b2="prefixes"
b4=b4
try{b4=A.lg(b4)
s=t.P.a(B.c.aa(A.lg(b5),a8))
if(typeof J.l(s,a9)=="string")J.f7(s,a9,A.lg(A.e(J.l(s,a9))))
r=null
switch(b3){case"summary":f=t.f
q=f.a(A.D(b4))
e=A.nl(b4)
d=A.U("")
c=t.N
p=A.n(c,t.X)
if(f.b(J.l(q,"dns")))for(f=f.a(J.l(q,"dns")).gN(),f=f.gq(f),b=t.s;f.l();){o=f.gm()
if(!B.b.p(A.c(["enable","listen","ipv6"],b),o.a))J.f7(p,A.m(o.a),A.dL(o.b,0))}d.G([],p)
p=d.b
f=J.l(q,b0)
if(f==null)f=""
d=J.l(q,"secret")
if(d==null)d=""
b=A.lk(b4)
a=A.c2(b4)
a0=A.no(b4)
a1=A.f3(b4)
a2=A.r9(b4)
a3=A.eZ(b4)
a4=A.b5(b4)
a5=A.j(a4).i("ak<1>")
a4=A.o(new A.ak(a4,a5),a5.i("f.E"))
r=A.a5(["network",e,"dnsYaml",p,"controller",f,"secret",d,"manualNodes",b,"nodes",a,"host",a0,"chains",a1,"nextChainId",a2,"groups",a3,"managedGroups",a4,"filters",A.f5(b4),"direct",A.jr(b4),"providers",A.l3(b4),"rules",A.l4(b4),"policies",A.iC(b4),"actions",A.qj(b4)],c,t.z)
break
case"controller":r=A.qc(b4,s)
break
case"network":r=A.n1(b4,s)
break
case"dns":n=A.D(A.e(J.l(s,"yaml")))
p=t.f
if(!p.b(n))throw A.a(B.bp)
m=p.a(A.D(b4)).h(0,"dns")
l=A.ah(p.a(A.dL(n,0)),t.N,t.z)
for(f=["enable","listen","ipv6"],a6=0;a6<3;++a6){k=f[a6]
J.nX(l,k)
if(p.b(m)&&m.F(k))J.f7(l,k,A.dL(m.h(0,k),0))}j=A.U(b4)
j.G(["dns"],l)
r=j.b
break
case"addNode":r=A.qb(b4,A.e(J.l(s,"link")))
break
case"deleteNode":r=A.qA(b4,A.e(J.l(s,b1)))
break
case"reorderNodes":r=A.rr(b4,A.O(t.R.a(J.l(s,"names")),!0,t.N))
break
case"host":r=A.qC(b4,A.e(J.l(s,"host")))
break
case"chain":p=t.R
f=t.N
r=A.rw(b4,A.e(J.l(s,"id")),A.O(p.a(J.l(s,"selected")),!0,f),A.hT(J.l(s,"prepend")),A.O(p.a(J.l(s,"targets")),!0,f))
break
case"group":p=b4
f=A.ah(t.f.a(J.l(s,"group")),t.N,t.z)
e=A.bX(J.l(s,"oldName"))
r=A.rH(p,f,A.bX(J.l(s,"filter")),A.mD(J.l(s,"includeDirect")),e)
break
case"deleteGroup":r=A.qy(b4,A.e(J.l(s,b1)))
break
case"reorderGroups":r=A.rq(b4,A.O(t.R.a(J.l(s,"names")),!0,t.N))
break
case"provider":r=A.rI(b4,A.e(J.l(s,b1)),A.ah(t.f.a(J.l(s,"provider")),t.N,t.z),A.bX(J.l(s,"oldName")))
break
case"deleteProvider":r=A.qz(b4,A.e(J.l(s,b1)))
break
case"rules":r=A.rJ(b4,A.O(t.R.a(J.l(s,"rules")),!0,t.N))
break
case"subscription":p=A.e(J.l(s,a9))
f=t.R
e=t.N
d=A.O(f.a(J.l(s,"sources")),!0,e)
f=A.r8(d,J.l(s,b2)==null?a8:A.O(f.a(J.l(s,b2)),!0,e))
e=J.u(J.l(s,"refresh"),!0)?b4:a8
r=A.qe(p,f,J.u(J.l(s,"allowEmpty"),!0),e)
i=A.D(b4)
if(t.f.b(i)&&typeof i.h(0,b0)=="string"){h=A.U(A.e(r))
h.G([b0],i.h(0,b0))
r=h.b}r=A.n3(A.e(r),B.b.R(J.kv(b4,"\n"),new A.iZ()))
if(B.b.R(J.kv(b4,"\n"),new A.j_()))r=A.n1(r,A.nl(b4))
break
case"subscriptionSources":p=b4
f=A.V(J.l(s,"count"))
r=A.rD(p,f,J.l(s,b2)==null?a8:A.O(t.R.a(J.l(s,b2)),!0,t.N))
break
default:throw A.a(B.bm)}p=B.c.ad(A.a5(["ok",!0,"value",r],t.N,t.K),a8)
return p}catch(a7){g=A.c3(a7)
if(!b6&&g instanceof A.c4&&B.a.p(g.n(0),"package:yaml_edit"))try{p=A.ng(b3,A.ra(b4),b5,!0)
return p}catch(a7){}return B.c.ad(A.a5(["ok",!1,"error",J.am(g)],t.N,t.K),a8)}},
r3(){var s,r=new A.j8()
if(typeof r=="function")A.E(A.a1("Attempting to rewrap a JS function."))
s=function(a,b){return function(c,d,e){return a(b,c,d,e,arguments.length)}}(A.pp,r)
s[$.lr()]=r
v.G.mclashOverrideCall=s},
jo:function jo(a){this.a=a},
jg:function jg(){},
iZ:function iZ(){},
j_:function j_(){},
j8:function j8(){},
n3(a,b){var s={},r=s.a=!1,q=t.U,p=A.o(new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.iz(s)),q),q.i("f.E"))
return(b?!s.a:r)?"# Mclash OpenWrt controller: true\n"+B.b.V(p,"\n"):B.b.V(p,"\n")},
nl(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash OpenWrt capture: "))return A.l1(t.f.a(B.c.aa(B.a.D(p,26),null)))}s=t.z
return A.l1(A.a5(["mode","none","interfaces",A.c(["br-lan"],t.s)],s,s))},
lb(a){var s=A.c(a.split("."),t.s)
if(s.length!==4||B.b.R(s,new A.j5()))return null
return B.b.bT(s,0,new A.j6(),t.p)},
rN(a){var s,r,q,p=A.I("^[0-9a-fA-F:]+$",!0)
if(!p.b.test(a))return!1
s=A.c(a.split("::"),t.s)
if(s.length>2)return!1
p=t.f_
r=A.o(new A.aB(s,t.ah.a(new A.kd()),p),p.i("f.E"))
if(B.b.R(r,new A.ke()))return!1
p=s.length
q=r.length
return p===2?q<8:q===8},
qg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.g.a(a)
s=a==null?[]:a
r=A.O(s,!0,t.N)
s=r.length
if(s>64)throw A.a(B.bL)
q=A.c([],t.s)
for(p=0;p<s;++p){o=B.a.O(r[p]).toLowerCase()
n=o.split("-")
m=n.length
if(m===2){if(0>=m)return A.b(n,0)
l=A.lb(n[0])
if(1>=m)return A.b(n,1)
k=A.lb(n[1])
j=l!=null&&k!=null&&l<=k}else{j=!1
if(m===1){i=o.split("/")
m=i.length
if(0>=m)return A.b(i,0)
h=i[0]
g=A.lb(h)==null
f=!g||A.rN(h)
h=m===2
if(h){if(1>=m)return A.b(i,1)
e=A.aU(i[1],null)}else e=null
if(f)if(m!==1){if(h){h=A.I("^[0-9]{1,3}$",!0)
if(1>=m)return A.b(i,1)
m=i[1]
if(h.b.test(m))if(e!=null)if(e>=0)m=e<=(!g?32:128)
else m=j
else m=j
else m=j}else m=j
j=m}else j=!0}}if(!j)throw A.a(B.bD)
if(!B.b.p(q,o))B.b.t(q,o)}return q},
l1(a){var s,r,q,p,o,n,m,l,k,j=a.h(0,"mode")
if(j==null)j="none"
s=a.h(0,"stack")
if(s==null)s="mixed"
r=a.h(0,"interfaces")
if(r==null)r=["br-lan"]
q=t.N
p=A.O(t.R.a(r),!0,q)
r=t.s
if(!B.b.p(A.c(["none","tun","tproxy"],r),j))throw A.a(B.bk)
if(!B.b.p(A.c(["system","gvisor","mixed"],r),s))throw A.a(B.bs)
r=p.length
if(r===0||r>16||A.av(p,A.t(p).c).a!==p.length||B.b.R(p,new A.iA()))throw A.a(B.c7)
for(r=["lan","router","ipv6"],o=0;o<3;++o){n=r[o]
if(a.h(0,n)!=null&&!A.eX(a.h(0,n)))throw A.a(B.bg)}r=a.h(0,"lan")
if(r==null)r=!0
m=A.qg(a.h(0,"access"))
l=a.h(0,"router")
if(l==null)l=!0
k=a.h(0,"ipv6")
return A.a5(["mode",j,"interfaces",p,"lan",r,"access",m,"router",l,"ipv6",k==null?!1:k,"stack",s],q,t.z)},
n1(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="ipv6",a="routing-mark",a0="default-nameserver",a1="external-controller",a2=A.l1(b1),a3=a2.h(0,"mode"),a4=J.aY(a3),a5=!a4.S(a3,"none"),a6=t.s,a7=A.U(new A.q(A.c(b0.split("\n"),a6),t.Q.a(new A.ip()),t.U).V(0,"\n")),a8=A.D(b0),a9=t.f
if(!a9.b(a8))throw A.a(B.bB)
s=t.N
r=t.z
q=A.a5(["enable",a4.S(a3,"tun")],s,r)
if(a4.S(a3,"tun")){q.a9(0,A.a5(["device","Mclash","stack",a2.h(0,"stack"),"auto-route",!1,"auto-redirect",!1,"auto-detect-interface",!0,"mtu",1500,"dns-hijack",A.c(["any:53","tcp://any:53"],a6)],s,r))
if(J.u(a2.h(0,b),!0))q.j(0,"inet6-address",A.c(["fdfe:dcba:9876::1/126"],a6))}a7.G(["tun"],q)
a4=a4.S(a3,"tproxy")?7893:0
a7.G(["tproxy-port"],a4)
if(a9.b(a7.cn([],c).ga7())&&a9.a(a7.cn([],c).ga7()).F(a))a7.I(0,["routing-mark"])
if(a5)a7.G(["routing-mark"],359)
if(a5){a7.G(["allow-lan"],!0)
a7.G(["bind-address"],"*")
a7.G(["ipv6"],a2.h(0,b))
p=a8.h(0,"dns")
a4=a9.b(p)
if(!a4)a7.G(["dns"],A.n(s,r))
a7.G(["dns","enable"],!0)
o=J.u(a2.h(0,b),!0)?"[::]:1053":"0.0.0.0:1053"
a7.G(["dns","listen"],o)
a7.G(["dns","ipv6"],a2.h(0,b))
if(!a4||!p.F(a0))a7.G(["dns",a0],A.c(["223.5.5.5","1.1.1.1"],a6))
if(!a4||!p.F("nameserver"))a7.G(["dns","nameserver"],A.c(["https://dns.alidns.com/dns-query","https://cloudflare-dns.com/dns-query"],a6))
a4=a8.h(0,a1)
n=A.m(a4==null?"0.0.0.0:9097":a4)
m=A.I(":([0-9]+)$",!0).fV(n)
a4=m==null
if(a4)a6=c
else{a6=m.b
if(1>=a6.length)return A.b(a6,1)
a6=a6[1]}l=A.aU(a6==null?"":a6,c)
if(l==null)l=9097
if(l<1||l>65535)throw A.a(B.bV)
k=a4?"0.0.0.0":B.a.v(n,0,m.b.index)
a7.G([a1],k+":"+l)
j=a8.h(0,"proxies")
if(t.j.b(j))for(a4=J.C(j),i=0;i<a4.gk(j);++i)if(a9.b(a4.h(j,i))&&a9.a(a4.h(j,i)).F(a))a7.I(0,["proxies",i,"routing-mark"])
h=a8.h(0,"proxy-providers")
if(a9.b(h))for(a4=h.gN(),a4=a4.gq(a4);a4.l();){a6=a4.gm()
o=a6.b
if(!a9.b(o))continue
g=o.h(0,"override")
if(a9.b(g)){o=A.n(s,r)
for(f=g.gN(),f=f.gq(f);f.l();){e=f.gm()
o.j(0,A.m(e.a),e.b)}d=o}else d=A.n(s,r)
d.j(0,a,359)
a7.G(["proxy-providers",a6.a,"override"],d)}}return A.n3("# Mclash OpenWrt capture: "+B.c.ad(a2,c)+"\n"+a7.n(0),!1)},
qc(a,b){var s,r,q,p,o,n=b.h(0,"address"),m=B.a.O(A.m(n==null?"0.0.0.0":n)),l=A.aU(A.m(b.h(0,"port")),null)
n=t.s
s=A.c(m.split("."),n)
r=s.length===4&&B.b.aO(s,new A.im())
if(B.a.p(m,":")){q=A.I("^[0-9a-fA-F:]{2,39}$",!0)
p=q.b.test(m)}else p=!1
if(!r&&!p&&m!=="localhost")throw A.a(B.c0)
if(l==null||l<1||l>65535)throw A.a(B.c8)
o=A.U(new A.q(A.c(a.split("\n"),n),t.Q.a(new A.io()),t.U).V(0,"\n"))
n=p?"["+m+"]":m
o.G(["external-controller"],n+":"+A.m(l))
return"# Mclash OpenWrt controller: true\n"+o.n(0)},
iz:function iz(a){this.a=a},
j5:function j5(){},
j6:function j6(){},
kd:function kd(){},
ke:function ke(){},
iA:function iA(){},
ip:function ip(){},
im:function im(){},
io:function io(){},
li(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.O(t.j.a(B.c.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
lp(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kh()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.c.ad(b,null)+"\n"+s},
rd(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="alpn",a1="path",a2={},a3=B.a.O(a6),a4=A.I("\\s",!0),a5=A.J(a3,a4,"")
if(!J.ly(a5,"vmess://")||J.a7(a5)>1048576)throw A.a(B.bF)
a2.a=null
try{s=B.b.gU(J.bB(a5,8).split("#"))
a2.a=A.ah(t.f.a(B.c.aa(B.e.ct(B.x.aF(B.v.aW(s))),a)),t.N,t.z)}catch(r){throw A.a(B.bE)}q=new A.jn(a2)
p=new A.jm(q)
o=q.$1("add")
n=q.$1("id")
m=p.$1("port")
l=p.$2$fallback("aid",0)
if(o.length===0||n.length===0||m<1||m>65535||l<0)throw A.a(B.bj)
k=q.$2("net","tcp")
if(k.length===0)k="tcp"
j=q.$2("type","none")
if(k==="tcp"&&j==="http")k="http"
a3=t.s
if(!B.b.p(A.c(["tcp","http","ws","h2","grpc"],a3),k))throw A.a(A.B("Unsupported VMess transport type: "+k,a,a))
if(k==="tcp"&&j.length!==0&&j!=="none")throw A.a(A.B("Unsupported TCP camouflage type: "+j,a,a))
i=q.$1("tls")
if(i.length!==0&&i!=="none"&&i!=="tls")throw A.a(A.B("Unsupported VMess TLS type: "+i,a,a))
a4=t.N
h=A.n(a4,t.z)
h.j(0,"name",J.a7(q.$1("ps"))===0?"VMess "+o+":"+A.m(m):q.$1("ps"))
h.j(0,"type","vmess")
h.j(0,"server",o)
h.j(0,"port",m)
h.j(0,"uuid",n)
h.j(0,"alterId",l)
h.j(0,"cipher",J.a7(q.$1("scy"))===0?"auto":q.$1("scy"))
h.j(0,"udp",!0)
h.j(0,"network",k)
h.j(0,"tls",i==="tls")
if(J.a7(q.$1("sni"))!==0)h.j(0,"servername",q.$1("sni"))
if(J.a7(q.$1("fp"))!==0)h.j(0,"client-fingerprint",q.$1("fp"))
if(J.a7(q.$1(a0))!==0){g=J.kv(q.$1(a0),",")
f=A.t(g)
e=f.i("H<1,d>")
e=new A.H(g,f.i("d(1)").a(new A.jh()),e).bh(0,e.i("k(y.E)").a(new A.ji()))
g=A.o(e,e.$ti.i("f.E"))
h.j(0,a0,g)}d=q.$1("host")
c=J.a7(q.$1(a1))===0?"/":q.$1(a1)
g=t.c
f=t.e
e=new A.H(A.c(d.split(","),a3),g.a(new A.jj()),f).bh(0,f.i("k(y.E)").a(new A.jk()))
b=A.o(e,e.$ti.i("f.E"))
switch(k){case"http":e=A.n(a4,t.K)
e.j(0,"method","GET")
a3=A.o(new A.H(A.c(c.split(","),a3),g.a(new A.jl()),f),f.i("y.E"))
e.j(0,a1,a3)
if(b.length!==0)e.j(0,"headers",A.a5(["Host",b],a4,t.a))
h.j(0,"http-opts",e)
break
case"ws":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(d.length!==0)a3.j(0,"headers",A.a5(["Host",d],a4,a4))
h.j(0,"ws-opts",a3)
break
case"h2":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(b.length!==0)a3.j(0,"host",b)
h.j(0,"h2-opts",a3)
break
case"grpc":h.j(0,"grpc-opts",A.a5(["grpc-service-name",q.$1(a1)],a4,a4))
break}return h},
rb(a){var s=B.a.O(a)
if(B.a.u(s,"vmess://"))return A.rd(s)
return A.rc(s)},
qb(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="network",a0="proxies",a1="name",a2=A.rb(a5),a3=A.no(a4)
if(J.u(a2.h(0,"type"),"vmess")&&a3.length!==0&&B.b.p(A.c(["http","ws"],t.s),a2.h(0,a))){s=B.a.O(a3)
r=A.I("[\\s/\\\\?#]",!0)
if(r.b.test(s))throw A.a(B.b6)
q=t.P.a(a2.h(0,J.u(a2.h(0,a),"http")?"http-opts":"ws-opts"))
if(s.length===0)q.I(0,"headers")
else{if(J.u(a2.h(0,a),"http")){r=t.e
r=new A.H(A.c(s.split(","),t.s),t.c.a(new A.ij()),r).bh(0,r.i("k(y.E)").a(new A.ik()))
r=A.o(r,r.$ti.i("f.E"))}else r=s
q.j(0,"headers",A.a5(["Host",r],t.N,t.K))}}p=t.S.a(A.D(a4))
r=t.g
o=r.a(p.h(0,a0))
if(o==null)o=[]
n=r.a(p.h(0,"proxy-groups"))
if(n==null)n=[]
r=A.lR(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],t.N)
for(m=J.F(o);m.l();)r.t(0,A.e(J.l(m.gm(),a1)))
for(m=J.a4(n),l=m.gq(n);l.l();)r.t(0,A.e(J.l(l.gm(),a1)))
k=A.e(a2.h(0,a1))
for(l=k+" (",j=k,i=2;r.p(0,j);){j=l+i+")";++i}a2.j(0,a1,j)
h=A.U(a4)
r=[a2]
B.b.a9(r,o)
h.G(["proxies"],r)
g=h.b
f=A.f5(a4)
if(f.a!==0)g=A.n2(g,f)
else if(!B.b.R(A.c(a4.split("\n"),t.s),new A.il())){for(r=t.j,l=t.R,e=0;e<m.gk(n);++e){d=m.h(n,e)
c=J.C(d)
if(J.u(c.h(d,"type"),"select")&&r.b(c.h(d,a0))&&!A.b5(a4).F(c.h(d,a1))){b=[j]
B.b.a9(b,l.a(c.h(d,a0)))
h.G(["proxy-groups",e,"proxies"],b)}}g=h.b}r=A.c([j],t.s)
B.b.a9(r,A.li(a4))
return A.l_(A.lp(g,r),a4)},
lk(a){var s,r,q=A.c2(a),p=A.av(q,A.t(q).c)
q=A.li(a)
s=A.t(q)
r=s.i("q<1>")
q=A.o(new A.q(q,s.i("k(1)").a(p.ga5(p)),r),r.i("f.E"))
return q},
rr(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="name",a3=A.lk(a5),a4=A.av(a3,A.t(a3).c)
if(a6.length!==a4.a||A.av(a6,A.t(a6).c).a!==a4.a||!a4.fN(a6))throw A.a(B.bX)
s=t.S.a(A.D(a5))
a3=t.g
r=a3.a(s.h(0,"proxies"))
if(r==null)r=[]
q=t.z
q=A.n(q,q)
for(p=J.a4(r),o=p.gq(r);o.l();){n=o.gm()
m=J.C(n)
if(a4.p(0,m.h(n,a2)))q.j(0,m.h(n,a2),n)}l=A.U(a5)
o=[]
for(p=p.gq(r),k=0;p.l();){n=p.gm()
if(a4.p(0,J.l(n,a2))){j=k+1
if(!(k<a6.length))return A.b(a6,k)
o.push(q.h(0,a6[k]))
k=j}else o.push(n)}l.G(["proxies"],o)
i=a3.a(s.h(0,"proxy-groups"))
if(i==null)i=[]
h=A.b5(a5)
for(a3=J.C(i),q=A.t(a6),p=q.i("k(1)"),q=q.i("q<1>"),o=q.i("f.E"),m=t.j,g=0;g<a3.gk(i);++g){if(h.F(J.l(a3.h(i,g),a2)))continue
f=J.l(a3.h(i,g),"proxies")
if(!m.b(f))continue
e=J.C(f)
d=A.o(new A.q(a6,p.a(e.ga5(f)),q),o)
c=[]
for(e=e.gq(f),b=0;e.l();){a=e.gm()
if(a4.p(0,a)){a0=b+1
if(!(b<d.length))return A.b(d,b)
c.push(d[b])
b=a0}else c.push(a)}l.G(["proxy-groups",g,"proxies"],c)}a1=A.lp(l.b,a6)
A.nu(a1)
return a1},
qA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy"
if(!B.b.p(A.lk(a),b))throw A.a(B.bN)
s=t.S.a(A.D(a))
r=A.c([],t.dm)
for(q=t.j,p=J.F(q.a(s.h(0,"proxies"))),o=t.f,n=t.z;p.l();){m=p.gm()
if(!J.u(J.l(m,"name"),b))r.push(A.ah(o.a(m),n,n))}for(p=r.length,l=0;l<r.length;r.length===p||(0,A.a8)(r),++l){m=r[l]
if(J.u(m.h(0,e),b))m.I(0,e)}k=A.U(a)
k.G(["proxies"],r)
j=t.g.a(s.h(0,"proxy-groups"))
if(j==null)j=[]
for(r=J.C(j),p=t.s,i=0;i<r.gk(j);++i){h=J.l(r.h(j,i),"proxies")
if(q.b(h)&&J.bo(h,b)){o=J.an(h,new A.iL(b))
g=A.o(o,o.$ti.i("f.E"))
o=g.length===0?A.c(["DIRECT"],p):g
k.G(["proxy-groups",i,"proxies"],o)}}r=k.b
q=A.li(a)
p=A.t(q)
o=p.i("q<1>")
q=A.o(new A.q(q,p.i("k(1)").a(new A.iM(b)),o),o.i("f.E"))
f=A.rp(A.lp(r,q),b)
A.nu(f)
return f},
kh:function kh(){},
jn:function jn(a){this.a=a},
jm:function jm(a){this.a=a},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
jy(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash manual-nodes: "))return A.O(t.j.a(B.c.aa(B.a.D(p,23),null)),!0,t.N)}return A.c([],t.s)},
r7(a,b){var s,r,q,p,o,n
if(b==null)return a
s=A.jy(b)
r=A.av(s,A.t(s).c)
q=t.g.a(t.S.a(A.D(b)).h(0,"proxies"))
if(q==null)q=[]
s=J.an(q,new A.jb(r))
p=A.o(s,s.$ti.i("f.E"))
s=A.t(p)
o=new A.H(p,s.i("@(1)").a(new A.jc()),s.i("H<1,@>")).aE(0)
s=A.o(p,t.z)
n=A.j(a)
B.b.a9(s,new A.q(a,n.i("k(r.E)").a(new A.jd(o)),n.i("q<r.E>")))
return s},
rQ(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kg()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash manual-nodes: "+B.c.ad(b,null)+"\n"+s},
rt(a,b){var s,r,q,p,o,n,m,l,k,j,i="name"
if(b==null)return a
s=A.jy(b)
r=A.av(s,A.t(s).c)
if(r.a===0)return a
s=t.S
q=t.g
p=q.a(s.a(A.D(b)).h(0,"proxies"))
if(p==null)p=[]
o=t.z
o=A.n(o,o)
for(n=J.F(p);n.l();){m=n.gm()
l=J.C(m)
if(r.p(0,l.h(m,i)))o.j(0,l.h(m,i),m)}k=q.a(s.a(A.D(a)).h(0,"proxies"))
if(k==null)k=[]
s=A.U(a)
q=[]
for(n=J.F(k);n.l();){m=n.gm()
l=o.h(0,J.l(m,i))
q.push(l==null?m:l)}s.G(["proxies"],q)
j=s.b
A.rP(j)
return j},
jb:function jb(a){this.a=a},
jc:function jc(){},
jd:function jd(a){this.a=a},
kg:function kg(){},
c2(a){var s,r=t.g.a(t.S.a(A.D(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jX(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
dM(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.ah(t.f.a(B.c.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
b5(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
jq(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
rk(a,b){var s=A.jq(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.c2(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jC(s)),o)
if(r!=null){q=J.an(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mB(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.c2(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.an(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.an(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hJ(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.dM(a0)
n=A.b5(a0)
m=t.S.a(A.D(a))
l=A.U(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.l(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hK()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.ln(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.an(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.ln(h,e,A.c([B.b.gJ(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.an(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.ln(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.c.ad(a1,null)+"\n"+h},
n_(a){var s=t.N,r=new A.id(A.aS(s),A.aS(s),a)
for(s=new A.aj(a,a.r,a.e,A.j(a).i("aj<1>"));s.l();)r.$1(s.d)},
ig(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ii()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.c.ad(c,null)+"\n")+s},
l_(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.it()))return A.kT(a8,a9,A.f3(a9))
s=A.jq(a9)
if(s.a!==0)return A.mB(a8,a9,s,"")
r=A.dM(a9)
q=A.b5(a9)
p=t.S.a(A.D(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a4(n)
k=l.ac(n,new A.iu(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.l(h,a5)))j.push(h)}for(i=new A.Q(q,A.j(q).i("Q<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a4(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a5(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.iv()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a8)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.O(e==null?[]:e,!0,m))}a1=A.U(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.n_(i)
return A.ig(a1.b,r,q)},
ln(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.c2(a),g=A.av(b,A.t(b).c),f=A.av(c,A.t(c).c)
if(g.a===0||f.a===0)throw A.a(B.af)
if(g.dU(f).a!==0)throw A.a(B.ai)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aO(r,B.b.ga5(h)))throw A.a(B.J)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.dM(a)
n=A.b5(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.D(a))
s=A.e9(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.F(r==null?[]:r)
while(r.l())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.hv(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.l_(a,A.ig("",o,n))},
nu(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.D(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.F(j==null?[]:j)
s=t.s
while(j.l()){r=j.gm()
q=J.C(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.F(j==null?[]:j)
while(j.l()){p=j.gm()
s=J.C(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.O(s==null?[]:s,!0,m))}A.n_(l)},
rp(a,b){var s,r,q,p,o,n,m=t.s
if(B.b.R(A.c(a.split("\n"),m),new A.jN())){s=A.f3(a)
for(m=new A.aD(s,s.r,s.e,A.j(s).i("aD<2>"));m.l();)for(r=m.d.gag(),r=r.gq(r);r.l();)J.ku(r.gm(),new A.jO(b))
return A.kT(a,a,s)}q=A.dM(a)
q.au(0,new A.jP(b))
p=A.b5(a)
for(r=new A.aD(p,p.r,p.e,A.j(p).i("aD<2>"));r.l();)J.ku(r.d,new A.jQ(b))
o=A.jq(a)
for(r=new A.aD(o,o.r,o.e,A.j(o).i("aD<2>"));r.l();)J.ku(r.d,new A.jR(b))
o.au(0,new A.jS())
if(!B.b.R(A.c2(a),new A.jT(o)))o.br(0)
n=A.ig(new A.q(A.c(a.split("\n"),m),t.Q.a(new A.jU()),t.U).V(0,"\n"),q,p)
return o.a===0?n:"# Mclash global-chain: "+B.c.ad(o,null)+"\n"+n},
f3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jA()),t.U)
if(!d.gL(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),25),null)).gN(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gN(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.O(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.jq(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a5([f,o,f+"Targets",A.rk(a,g)],s,q))}}return i},
r9(a){var s=A.f3(a),r=A.j(s).i("ak<1>"),q=t.p
return""+(A.fN(new A.ak(s,r),r.i("h(f.E)").a(A.qr()),r.i("f.E"),q).bT(0,0,new A.jf(),q)+1)},
rw(a,b,c,d,e){var s,r,q,p,o,n=B.b.ga5(A.c2(a))
if(!B.b.aO(c,n)||!B.b.aO(e,n))throw A.a(B.J)
if(c.length!==0&&e.length===0)throw A.a(B.cl)
if(B.b.R(e,B.b.ga5(c)))throw A.a(B.aZ)
s=A.f3(a)
n=A.j(s).i("Q<1,2>")
r=n.i("q<f.E>")
q=r.i("aB<f.E,d>")
p=A.e9(new A.aB(new A.q(new A.Q(s,n),n.i("k(f.E)").a(new A.jY(b)),r),r.i("f<d>(f.E)").a(new A.jZ(d)),q),q.i("f.E"))
if(B.b.R(c,p.ga5(p)))throw A.a(B.c6)
o=d?"front":"back"
if(c.length===0)s.I(0,b)
else{n=t.N
r=A.o(c,n)
q=A.av(e,A.t(e).c)
q=A.o(q,A.j(q).c)
s.j(0,b,A.a5([o,r,o+"Targets",q],n,t.a))}return A.kT(a,a,s)},
kT(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.D(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a4(b1)
q=r.ac(b1,new A.hP(),s).aE(0)
p=A.dM(b3)
o=A.b5(b3)
n=A.U(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.l(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hQ()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.Q(b4,A.j(b4).i("Q<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.an(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aE<2>")
e=f.i("aB<f.E,d>")
b=A.e9(new A.aB(new A.aE(i,f),f.i("f<d>(f.E)").a(new A.hR()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.Q(i,l.i("Q<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.an(d,new A.hS(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mB(j,j,f," (chain "+e+")")
a4=A.b5(a3)
a5=A.dM(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.l_(j,A.ig("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.Q(a1,a1.$ti.i("Q<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.dV(r)+a7},
rg(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jX:function jX(){},
jC:function jC(a){this.a=a},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
jN:function jN(){},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(){},
jT:function jT(a){this.a=a},
jU:function jU(){},
jA:function jA(){},
jf:function jf(){},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
ll(a){var s,r=t.g.a(t.S.a(A.D(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jW(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
f4(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash node-chains: ")){s=t.N
return A.ah(t.f.a(B.c.aa(B.a.D(p,22),null)),s,s)}}s=t.N
return A.n(s,s)},
f2(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash chain-groups: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
lh(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash global-chain: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,23),null)).gN(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.O(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
rj(a,b){var s=A.lh(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.ll(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jB(s)),o)
if(r!=null){q=J.an(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mA(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.ll(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.an(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.an(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hH(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.f4(a0)
n=A.f2(a0)
m=t.S.a(A.D(a))
l=A.U(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.l(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hI()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lm(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.an(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lm(h,e,A.c([B.b.gJ(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.an(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lm(h,e,q,a2,!1)}return"# Mclash global-chain: "+B.c.ad(a1,null)+"\n"+h},
mZ(a){var s=t.N,r=new A.ic(A.aS(s),A.aS(s),a)
for(s=new A.aj(a,a.r,a.e,A.j(a).i("aj<1>"));s.l();)r.$1(s.d)},
kY(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ih()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash node-chains: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash chain-groups: "+B.c.ad(c,null)+"\n")+s},
kZ(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.iq()))return A.pj(a8,a9,A.ri(a9))
s=A.lh(a9)
if(s.a!==0)return A.mA(a8,a9,s,"")
r=A.f4(a9)
q=A.f2(a9)
p=t.S.a(A.D(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a4(n)
k=l.ac(n,new A.ir(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.l(h,a5)))j.push(h)}for(i=new A.Q(q,A.j(q).i("Q<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a4(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a5(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.is()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a8)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.O(e==null?[]:e,!0,m))}a1=A.U(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.mZ(i)
return A.kY(a1.b,r,q)},
lm(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.ll(a),g=A.av(b,A.t(b).c),f=A.av(c,A.t(c).c)
if(g.a===0||f.a===0)throw A.a(B.af)
if(g.dU(f).a!==0)throw A.a(B.ai)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aO(r,B.b.ga5(h)))throw A.a(B.J)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.f4(a)
n=A.f2(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.D(a))
s=A.e9(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.F(r==null?[]:r)
while(r.l())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 Proxy chain":"\ud83d\udd17 Back-chain entry")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.hv(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.kZ(a,A.kY("",o,n))},
rP(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.D(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
j=J.F(j==null?[]:j)
s=t.s
while(j.l()){r=j.gm()
q=J.C(r)
if(typeof q.h(r,o)=="string")l.j(0,A.e(q.h(r,"name")),A.c([A.e(q.h(r,o))],s))}j=k.a(n.h(0,"proxy-groups"))
j=J.F(j==null?[]:j)
while(j.l()){p=j.gm()
s=J.C(p)
q=A.e(s.h(p,"name"))
s=k.a(s.h(p,"proxies"))
l.j(0,q,A.O(s==null?[]:s,!0,m))}A.mZ(l)},
ri(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jz()),t.U)
if(!d.gL(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),25),null)).gN(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gN(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.O(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.lh(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a5([f,o,f+"Targets",A.rj(a,g)],s,q))}}return i},
pj(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.D(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a4(b1)
q=r.ac(b1,new A.hL(),s).aE(0)
p=A.f4(b3)
o=A.f2(b3)
n=A.U(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.l(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hM()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.Q(b4,A.j(b4).i("Q<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.an(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aE<2>")
e=f.i("aB<f.E,d>")
b=A.e9(new A.aB(new A.aE(i,f),f.i("f<d>(f.E)").a(new A.hN()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.Q(i,l.i("Q<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gN(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.an(d,new A.hO(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mA(j,j,f," (chain "+e+")")
a4=A.f2(a3)
a5=A.f4(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("Node "+d+u.o,a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.kZ(j,A.kY("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.Q(a1,a1.$ti.i("Q<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash back-chain ":"# Mclash chain "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash chain-settings: "+s+"\n"+B.b.dV(r)+a7},
rf(a){var s,r,q
for(s=["# Mclash chain ","# Mclash front-chain ","# Mclash back-chain ","# Mclash node-chain "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jW:function jW(){},
jB:function jB(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
jz:function jz(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
l3(a){var s,r,q,p,o,n,m,l=A.D(a),k=t.f,j=k.b(l)?l.h(0,"rule-providers"):null
if(j==null)return A.n(t.N,t.P)
if(!k.b(j))throw A.a(B.bW)
s=new A.iD()
r=t.N
q=A.n(r,t.P)
for(p=j.gN(),p=p.gq(p),o=t.z;p.l();){n=p.gm()
m=n.a
if(typeof m!="string"||!k.b(n.b))throw A.a(B.aY)
q.j(0,m,A.ah(k.a(s.$1(n.b)),r,o))}return q},
mR(a){return new A.bx(A.pX(a),t.dj)},
pX(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l
return function $async$mR(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:m=t.g
l=m.a(s.h(0,"rules"))
l=J.F(l==null?[]:l)
case 2:if(!l.l()){r=3
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
case 7:if(!l.l()){r=8
break}n=m.a(l.gm())
n=J.F(n==null?[]:n)
case 9:if(!n.l()){r=10
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
rI(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1={}
a1.a=a3
a3=a1.a=B.a.O(a3)
if(a3.length!==0){s=A.I("[,()\\r\\n]",!0)
s=s.b.test(a3)}else s=!0
if(s)throw A.a(B.bZ)
r=A.l3(a2)
s=a5==null
q=!s
if(q&&!r.F(a5))throw A.a(B.bG)
if(a3!==a5&&r.F(a3))throw A.a(B.c9)
p=a4.h(0,"type")
o=a4.h(0,"behavior")
n=a4.h(0,"format")
if(n==null)n="yaml"
m=t.s
if(!B.b.p(A.c(["http","file","inline"],m),p)||!B.b.p(A.c(["domain","ipcidr","classical"],m),o)||!B.b.p(A.c(["yaml","text","mrs"],m),n))throw A.a(B.aV)
if(J.u(n,"mrs"))l=J.u(o,"classical")||J.u(p,"inline")
else l=!1
if(l)throw A.a(B.cd)
l=J.aY(p)
if(l.S(p,"http")){k=a4.h(0,"url")
j=A.oD(A.m(k==null?"":k))
if(j==null||!B.b.p(A.c(["http","https"],m),j.gak())||j.gaH().length===0)throw A.a(B.bt)
i=a4.h(0,"interval")
if(i!=null)k=!A.b3(i)||i<0
else k=!1
if(k)throw A.a(B.cb)}k=a4.h(0,"path")
h=B.a.O(A.m(k==null?"":k))
if(l.S(p,"file")&&h.length===0)throw A.a(B.b4)
if(h.length!==0&&new A.Q(r,A.j(r).i("Q<1,2>")).R(0,new A.k8(a5,h)))throw A.a(B.bo)
if(l.S(p,"inline")){g=a4.h(0,"payload")
if(t.j.b(g)){l=J.C(g)
l=l.gL(g)||l.R(g,new A.k9())}else l=!0
if(l)throw A.a(B.bv)}f=A.n(t.N,t.z)
for(l=new A.Q(r,A.j(r).i("Q<1,2>")).gq(0);l.l();){e=l.d
k=e.a
d=k===a5
if(d)k=a1.a
f.j(0,k,d?a4:e.b)}if(s)f.j(0,a1.a,a4)
c=A.U(a2)
c.G(["rule-providers"],f)
if(q&&a5!==a1.a){s=t.f
b=s.a(A.D(a2))
a=new A.ka(a1,a5)
q=t.j
if(q.b(b.h(0,"rules"))){l=A.c([],m)
for(k=J.F(t.R.a(b.h(0,"rules")));k.l();)l.push(a.$1(A.e(k.gm())))
c.G(["rules"],l)}a0=b.h(0,"sub-rules")
if(s.b(a0))for(s=a0.gN(),s=s.gq(s);s.l();){l=s.gm()
k=l.a
d=A.c([],m)
for(l=J.F(q.a(l.b));l.l();)d.push(a.$1(A.e(l.gm())))
c.G(["sub-rules",k],d)}}return c.b},
qz(a,b){var s,r
if(A.mR(t.f.a(A.D(a))).R(0,new A.iK(b)))throw A.a(B.bC)
s=A.l3(a)
s.I(0,b)
r=A.U(a)
r.G(["rule-providers"],s)
return r.b},
iD:function iD(){},
k8:function k8(a,b){this.a=a
this.b=b},
k9:function k9(){},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
iK:function iK(a){this.a=a},
mI(a){var s,r
try{s=B.e.ct(B.x.aF(B.v.aW(a)))
return s}catch(r){throw A.a(B.bJ)}},
mW(a,b,c,d){var s,r,q,p,o="skip-cert-verify",n="client-fingerprint",m=t.s,l=b.a3(0,A.c(["sni","peer","serverName","servername"],m))
if(l.length!==0)a.j(0,c,l)
s=b.dN(A.c(["insecure","allowInsecure",o],m))
if(s!=null)a.j(0,o,s)
r=b.a3(0,A.c(["alpn"],m))
if(r.length!==0){q=t.e
q=new A.H(A.c(r.split(","),m),t.c.a(new A.i7()),q).bh(0,q.i("k(y.E)").a(new A.i8()))
q=A.o(q,q.$ti.i("f.E"))
a.j(0,"alpn",q)}if(d){p=b.a3(0,A.c(["fp",n],m))
if(p.length!==0)a.j(0,n,p)}},
q3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="path",e=t.s,d=b.aN(0,A.c(["type","network"],e),"tcp")
if(d.length===0)d="tcp"
s=b.aN(0,A.c(["headerType"],e),"none")
if(d==="tcp"&&s==="http"&&J.u(a.h(0,"type"),"vless"))d="http"
else if(s.length!==0&&s!=="none")throw A.a(B.bb)
if(!B.b.p(J.u(a.h(0,"type"),"vless")?A.c(["tcp","ws","http","h2","grpc","xhttp"],e):A.c(["tcp","ws","grpc"],e),d))throw A.a(B.bq)
a.j(0,"network",d)
if(d==="tcp")return
if(d==="grpc"){r=b.a3(0,A.c(["serviceName","service-name","path"],e))
q=b.aN(0,A.c(["mode"],e),"gun")
if(q!=="gun"&&q.length!==0)throw A.a(B.bc)
e=t.N
a.j(0,"grpc-opts",A.a5(["grpc-service-name",r],e,e))
return}p=b.aN(0,A.c(["path"],e),"/")
o=b.a3(0,A.c(["host"],e))
if(d==="xhttp"){q=b.aN(0,A.c(["mode"],e),"auto")
if(!B.b.p(A.c(["auto","stream-one","stream-up","packet-up"],e),q))throw A.a(B.ch)
e=t.N
e=A.n(e,e)
e.j(0,f,p)
e.j(0,"mode",q)
if(o.length!==0)e.j(0,"host",o)
a.j(0,"xhttp-opts",e)}else if(d==="ws"){n=t.N
m=A.n(n,t.z)
m.j(0,f,p)
if(o.length!==0)m.j(0,"headers",A.a5(["Host",o],n,n))
l=b.a3(0,A.c(["ed"],e))
if(l.length!==0){k=A.aU(l,null)
if(k==null||k<0)throw A.a(B.c4)
m.j(0,"max-early-data",k)}j=b.a3(0,A.c(["eh"],e))
if(j.length!==0)m.j(0,"early-data-header-name",j)
a.j(0,"ws-opts",m)}else{n=t.U
i=A.o(new A.q(A.c(o.split(","),e),t.Q.a(new A.i9()),n),n.i("f.E"))
n=d==="h2"
m=n?"h2-opts":"http-opts"
h=t.N
g=t.K
if(n){e=A.n(h,g)
e.j(0,f,p)
if(i.length!==0)e.j(0,"host",i)}else{n=A.n(h,g)
n.j(0,"method","GET")
n.j(0,f,A.c(p.split(","),e))
if(i.length!==0)n.j(0,"headers",A.a5(["Host",i],h,t.a))
e=n}a.j(0,m,e)}},
pT(a,b){var s,r,q,p,o=t.s,n=b.a3(0,A.c(["pbk","public-key"],o))
if(n.length===0)A.E(A.B("Node is missing Reality public key",null,null))
s=n
try{if(B.x.aF(B.v.aW(s)).length!==32)throw A.a(B.bd)}catch(r){throw A.a(B.c3)}q=b.a3(0,A.c(["sid","short-id"],o))
p=A.I("^[0-9a-fA-F]{0,16}$",!0)
if(!p.b.test(q)||(q.length&1)===1)throw A.a(B.br)
b.a3(0,A.c(["spx"],o))
o=t.B.i("aI.S").a(B.x.aF(B.v.aW(s)))
o=B.a3.gbQ().aF(o)
p=t.N
a.j(0,"reality-opts",A.a5(["public-key",A.J(o,"=",""),"short-id",q],p,p))},
q_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="mode"
if(b.length===0)return
s=t.s
r=A.c(b.split(";"),s)
q=B.b.bc(r,0)
p=t.N
o=A.n(p,p)
for(n=t.Q.a(new A.i6()),m=B.b.gq(r),n=new A.bk(m,n,t.fj);n.l();){l=m.gm()
k=B.a.aq(l,"=")
j=k<0
i=j?l:B.a.v(l,0,k)
if(o.F(i))throw A.a(B.bi)
o.j(0,i,j?"true":B.a.D(l,k+1))}h=A.n(p,t.z)
if(B.b.p(A.c(["obfs-local","simple-obfs","obfs"],s),q)){p=o.I(0,"obfs")
g=p==null?o.I(0,d):p
if(g==null)g=""
if(!B.b.p(A.c(["http","tls"],s),g))throw A.a(B.bP)
h.j(0,d,g)
f=o.I(0,"obfs-host")
if(f==null)f=o.I(0,"host")
if(f!=null)h.j(0,"host",f)
a.j(0,"plugin","obfs")}else if(q==="v2ray-plugin"){g=o.I(0,d)
if(g==null)g="websocket"
if(g!=="websocket")throw A.a(B.bU)
h.j(0,d,g)
for(p=["host","path"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b!=null)h.j(0,l,b)}for(p=["tls","mux"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b==null)continue
if(!B.b.p(A.c(["true","false","1","0"],s),b))throw A.a(B.b0)
h.j(0,l,b==="true"||b==="1")}a.j(0,"plugin",q)}else throw A.a(B.cj)
if(o.a!==0)throw A.a(B.bS)
a.j(0,"plugin-opts",h)},
rc(a){var s,r,q
try{r=A.pS(a)
return r}catch(q){r=A.c3(q)
if(t.d.b(r)){s=r
throw A.a(A.B(s.gdX(),null,null))}else throw A.a(B.I)}},
pS(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null,c3="password",c4="tls",c5="udp",c6="^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",c7="congestion-controller",c8="Node is missing Password",c9=d1.length,d0=!0
if(c9!==0)if(c9<=1048576){c9=A.I("\\s|%(?![0-9a-fA-F]{2})",!0)
c9=c9.b.test(d1)}else c9=d0
else c9=d0
if(c9)throw A.a(B.bu)
s=d1
if(J.ly(s,"ss://")){q=J.nV(s,A.I("[?#]",!0),5)
c9=q<0
p=c9?J.bB(s,5):J.o_(s,5,q)
if(!B.a.p(p,"@")){o=A.mI(p)
n=B.a.bb(o,"@")
if(n<0)throw A.a(B.bI)
d0=t.B.i("aI.S").a(B.aR.aF(B.a.v(o,0,n)))
m=B.a3.gbQ().aF(d0)
d0=B.a.D(o,n)
c9=c9?"":J.bB(s,q)
s="ss://"+m+d0+c9}}l=J.nU(s,"://")
if(l<0)throw A.a(B.I)
k=B.b.gU(B.a.bg(J.bB(s,l+3),A.I("[/?#]",!0)))
j=B.a.D(k,B.a.bb(k,"@")+1)
i=B.a.u(j,"[")?B.a.aq(j,"]")+1:B.a.bb(j,":")
if(i>=0&&i<j.length&&j[i]===":"){h=B.a.D(j,i+1)
g=A.aU(h,c2)
c9=A.I("^\\d+$",!0)
if(!c9.b.test(h)||g==null||g<1||g>65535)throw A.a(B.ad)}else g=c2
r=null
try{r=A.ex(s,0,c2)
c9=r.gaA()
A.al(c9,0,c9.length,B.e,!1)
c9=r.gb1()
A.al(c9,0,c9.length,B.e,!1)}catch(f){throw A.a(B.I)}if(!B.b.p(B.cs,r.gak()))throw A.a(B.ba)
if(r.gaH().length!==0)c9=r.gar().length!==0&&r.gar()!=="/"
else c9=!0
if(c9)throw A.a(B.bK)
e=r.gak()
A:{if("hy2"===e){c9="hysteria2"
break A}if("socks"===e){c9="socks5"
break A}if("https"===e){c9="http"
break A}c9=e
break A}d0=c9==="ss"
if(d0&&g==null)throw A.a(B.bn)
if(g==null)if(c9==="socks5")d=1080
else{c=e==="http"?80:443
d=c}else d=g
if(d<1||d>65535)throw A.a(B.ad)
c=t.N
b=new A.hw(A.fJ(r.ge1(),c,c))
if(r.ge2().gag().R(0,new A.i0()))throw A.a(B.bT)
if(r.gb1().length===0)a=e.toUpperCase()+" "+r.gaH()+":"+d
else{a=r.gb1()
a=A.al(a,0,a.length,B.e,!1)}a0=A.a5(["name",a,"type",c9,"server",r.gaH(),"port",d],c,t.z)
c=r.gaA()
a1=A.al(c,0,c.length,B.e,!1)
if(c9==="http"||c9==="socks5"){a2=B.a.aq(r.gaA(),":")
if(a1.length!==0){d0=a2<0?r.gaA():B.a.v(r.gaA(),0,a2)
a0.j(0,"username",A.al(d0,0,d0.length,B.e,!1))
if(a2>=0){d0=B.a.D(r.gaA(),a2+1)
a0.j(0,c3,A.al(d0,0,d0.length,B.e,!1))}}if(e==="https")a0.j(0,c4,!0)
if(c9==="socks5")a0.j(0,c5,!0)
if(r.gbt())throw A.a(B.aW)}else if(d0){m=B.a.p(r.gaA(),":")?a1:A.mI(a1)
a3=B.a.aq(m,":")
if(a3<=0)throw A.a(B.b8)
a4=B.a.v(m,0,a3)
if(!B.cA.p(0,a4))throw A.a(B.b_)
a0.j(0,"cipher",a4)
c9=B.a.D(m,a3+1)
if(c9.length===0)A.E(A.B(c8,c2,c2))
a0.j(0,c3,c9)
a0.j(0,c5,!0)
A.q_(a0,b.a3(0,A.c(["plugin"],t.s)))}else{d0=c9==="vless"
if(d0||c9==="trojan"){a0.j(0,c5,!0)
c=d0?"uuid":c3
if(d0){a=A.I(c6,!0)
if(!a.b.test(a1))A.E(B.ae)}else if(a1.length===0)A.E(A.B(c8,c2,c2))
a0.j(0,c,a1)
c=t.s
a=A.c(["security"],c)
a5=b.aN(0,a,d0?"none":c4)
if(B.b.p(A.c(["none","tls","reality"],c),a5))c9=c9==="trojan"&&a5==="none"
else c9=!0
if(c9)throw A.a(B.bA)
if(d0){a6=b.aN(0,A.c(["encryption"],c),"none")
if(a6!=="none"&&a6.length!==0)throw A.a(B.ck)
a0.j(0,c4,a5!=="none")}c9=a5!=="none"
if(c9)A.mW(a0,b,d0?"servername":"sni",!0)
if(a5==="reality")A.pT(a0,b)
A.q3(a0,b)
if(d0){a7=b.a3(0,A.c(["flow"],c))
if(a7.length!==0){if(a7!=="xtls-rprx-vision"||!c9||!J.u(a0.h(0,"network"),"tcp"))throw A.a(B.c5)
a0.j(0,"flow",a7)}a8=b.a3(0,A.c(["packetEncoding","packet-encoding"],c))
if(a8.length!==0){if(!B.b.p(A.c(["xudp","packetaddr"],c),a8))throw A.a(B.bw)
a0.j(0,"packet-encoding",a8)}}}else{a0.j(0,c5,!0)
d0=c9==="anytls"
if(d0){c=t.s
if(b.aN(0,A.c(["security"],c),c4)!=="tls"||b.aN(0,A.c(["type","network"],c),"tcp")!=="tcp")throw A.a(B.cf)}A.mW(a0,b,"sni",d0)
if(c9==="tuic"){a3=B.a.aq(r.gaA(),":")
if(a3<0)throw A.a(B.c2)
c9=B.a.v(r.gaA(),0,a3)
c9=A.al(c9,0,c9.length,B.e,!1)
d0=A.I(c6,!0)
if(!d0.b.test(c9))A.E(B.ae)
a0.j(0,"uuid",c9)
c9=B.a.D(r.gaA(),a3+1)
c9=A.al(c9,0,c9.length,B.e,!1)
if(c9.length===0)A.E(A.B(c8,c2,c2))
a0.j(0,c3,c9)
c9=t.s
a9=b.a3(0,A.c(["congestion_control",c7],c9))
if(a9.length!==0){if(!B.b.p(A.c(["bbr","cubic","new_reno"],c9),a9))throw A.a(B.bl)
a0.j(0,c7,a9)}b0=b.a3(0,A.c(["udp_relay_mode","udp-relay-mode"],c9))
if(b0.length!==0){if(!B.b.p(A.c(["native","quic"],c9),b0))throw A.a(B.bQ)
a0.j(0,"udp-relay-mode",b0)}for(c9=[A.c(["disable_sni","disable-sni"],c9),A.c(["reduce_rtt","reduce-rtt"],c9)],b1=0;b1<2;++b1){b2=c9[b1]
s=b.dN(b2)
if(s!=null)a0.j(0,B.b.gJ(b2),s)}}else{if(a1.length===0)A.E(A.B(c8,c2,c2))
a0.j(0,c3,a1)
if(c9==="hysteria2"){for(c9=["up","down"],d0=t.s,b1=0;b1<2;++b1){b3=c9[b1]
s=b.a3(0,A.c([b3],d0))
if(s.length!==0){c=A.I("^\\d+(\\.\\d+)?(\\s*[KMG]?bps)?$",!1)
if(!c.b.test(s))throw A.a(B.bx)
a0.j(0,b3,s)}}b4=b.a3(0,A.c(["mport","ports"],d0))
if(b4.length!==0){for(c9=b4.split(","),c=c9.length,a=t.bR,b5=t.bz,b6=b5.i("y.E"),b1=0;b1<c;++b1){b7=A.o(new A.H(A.c(c9[b1].split("-"),d0),a.a(A.qs()),b5),b6)
b8=b7.length
b9=!0
if(b8!==0)if(b8<=2)if(!B.b.R(b7,new A.i1()))if(b7.length===2){b8=B.b.gU(b7)
b8.toString
b9=B.b.gJ(b7)
b9.toString
b9=b8>b9
b8=b9}else b8=!1
else b8=b9
else b8=b9
else b8=b9
if(b8)throw A.a(B.c1)}a0.j(0,"ports",b4)}c0=b.a3(0,A.c(["obfs"],d0))
c1=b.a3(0,A.c(["obfs-password","obfsPassword"],d0))
if(c0.length!==0){if(c0!=="salamander")throw A.a(B.ce)
a0.j(0,"obfs",c0)
if(c1.length===0)A.E(A.B("Node is missing Obfuscation password",c2,c2))
a0.j(0,"obfs-password",c1)}else if(c1.length!==0)throw A.a(B.c_)}}}}b.fU()
return a0},
hw:function hw(a){this.a=a},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
i6:function i6(){},
i0:function i0(){},
i1:function i1(){},
i2(a){var s,r,q
if(t.f.b(a)){s=A.n(t.z,t.X)
for(r=a.gN(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,q.a,A.i2(q.b))}return s}if(t.j.b(a)){s=J.aR(a,A.rE(),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
mU(a,b){var s,r,q,p
if(b==null){s=J.kw(a,t.N)
for(r=a===1,q=0;q<a;++q)s[q]=r?"":""+(q+1)+"-"
p=s}else p=b
if(p.length!==a||A.av(p,A.t(p).c).a!==a||B.b.R(p,new A.i5()))throw A.a(B.b3)
return p},
rD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy",d=A.mU(b,c)
if(b<1)return A.c([],t.s)
s=t.f
r=s.a(A.D(a))
q=A.jy(a)
p=A.av(q,A.t(q).c)
o=J.kw(b,t.D)
for(q=t.Z,n=0;n<b;++n)o[n]=A.c([],q)
q=t.g.a(r.h(0,"proxies"))
q=J.F(q==null?[]:q)
m=t.N
l=t.z
while(q.l()){k=A.ah(s.a(A.i2(q.gm())),m,l)
j=A.e(k.h(0,"name"))
if(p.p(0,j))continue
i=B.b.b3(d,new A.k_(j))
if(i<0)i=B.b.aq(d,"")
if(i<0)throw A.a(B.cg)
if(!(i<d.length))return A.b(d,i)
h=d[i]
g=h.length
k.j(0,"name",B.a.D(j,g))
f=k.h(0,e)
if(g!==0&&typeof f=="string"&&B.a.u(f,h))k.j(0,e,B.a.D(f,g))
if(!(i<o.length))return A.b(o,i)
B.b.t(o[i],k)}s=A.t(o)
q=s.i("H<1,d>")
s=A.o(new A.H(o,s.i("d(1)").a(new A.k0()),q),q.i("y.E"))
return s},
r8(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="name",a0="dialer-proxy",a1=A.mU(a2.length,a3)
if(a2.length===0){if(a3!=null)return"proxies: []\n"
throw A.a(B.cc)}s=A.c([],t.gT)
for(r=t.dY,q=t.gh,p=t.f,o=t.N,n=t.z,m=t.Z,l=t.j,k=0;k<a2.length;++k){j=A.f0(a2[k],b,!1,b).a.ga7()
i=p.b(j)?j.h(0,"proxies"):b
if(!l.b(i)||J.cE(i))throw A.a(A.B("Subscription "+(k+1)+" has no embedded proxies",b,b))
h=A.c([],m)
for(g=J.F(i);g.l();){f=g.gm()
if(!p.b(f)||typeof f.h(0,a)!="string"||B.a.O(A.e(f.h(0,a))).length===0||typeof f.h(0,"type")!="string")throw A.a(A.B("Subscription "+(k+1)+" has a node without a name or type",b,b))
B.b.t(h,A.ah(p.a(A.i2(f)),o,n))}if(new A.H(h,r.a(new A.je()),q).aE(0).a!==h.length)throw A.a(A.B("Subscription "+(k+1)+" has duplicate node names",b,b))
B.b.t(s,h)}e=A.c([],m)
for(r=t.s,k=0;k<s.length;++k){q=A.n(o,o)
for(p=s[k],n=p.length,d=0;d<p.length;p.length===n||(0,A.a8)(p),++d){f=p[d]
m=A.e(f.h(0,a))
if(!(k<a1.length))return A.b(a1,k)
q.j(0,m,a1[k]+A.m(f.h(0,a)))}if(!(k<s.length))return A.b(s,k)
p=s[k]
n=p.length
d=0
for(;d<p.length;p.length===n||(0,A.a8)(p),++d){f=p[d]
f.j(0,a,q.h(0,f.h(0,a)))
c=f.h(0,a0)
if(q.F(c))f.j(0,a0,q.h(0,c))
else if(c!=null&&!B.b.p(A.c(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],r),c))f.I(0,a0)}if(!(k<s.length))return A.b(s,k)
B.b.a9(e,s[k])}r=A.U("")
r.G([],A.a5(["proxies",e],o,t.D))
return r.b},
qe(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="proxies",a6="name",a7=A.D(b2),a8=t.S,a9=a8.b(a7)?a7.h(0,a5):null,b0=t.h
if(b0.b(a9))s=a9.gk(a9)===0&&!b3
else s=!0
if(s)throw A.a(B.ca)
r=A.r7(a9,b4)
s=t.s
q=A.c([],s)
for(p=J.F(r);p.l();){o=p.gm()
if(!a8.b(o)||typeof o.h(0,a6)!="string"||B.a.O(A.e(o.h(0,a6))).length===0||typeof o.h(0,"type")!="string")throw A.a(B.bH)
B.b.t(q,A.e(o.h(0,a6)))}p=t.N
if(A.av(q,p).a!==q.length)throw A.a(B.bO)
n=b4==null
if(!n){m=a8.a(A.D(b4))
l=A.aS(p)
k=t.g
j=k.a(m.h(0,a5))
j=J.F(j==null?[]:j)
while(j.l())l.t(0,A.e(J.l(j.gm(),a6)))
l.h9(q)
i=t.Y.a(m.h(0,"sub-rules"))
if(i==null){j=t.z
i=A.n(j,j)}k=k.a(m.h(0,"rules"))
k=A.o(A.O(k==null?[]:k,!0,p),p)
for(j=i.gag(),j=j.gq(j),h=t.j;j.l();)B.b.a9(k,A.O(h.a(j.gm()),!0,p))
j=k.length
g=0
for(;g<k.length;k.length===j||(0,A.a8)(k),++g){f=A.ru(k[g])
if(l.p(0,f))throw A.a(A.B("Node "+A.m(f)+" was removed from the subscription but is still referenced by rules; update the rules first; original configuration retained",null,null))}}e=n?b1:b4
d=a8.a(A.D(e))
c=b0.a(d.h(0,"proxy-groups"))
b0=A.lR(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],p)
for(p=A.j(c),l=new A.a3(c,c.gk(c),p.i("a3<r.E>")),p=p.i("r.E");l.l();){b=l.d
b0.t(0,A.e(J.l(b==null?p.a(b):b,a6)))}if(B.b.R(q,b0.ga5(b0)))throw A.a(B.bR)
a=A.U(e)
if(d.gE().p(0,"proxy-providers"))a.I(0,["proxy-providers"])
a.G(["proxies"],r)
for(p=t.g,a0=0;a0<c.gk(c);++a0){b=a8.a(c.h(0,a0))
if(b.gE().p(0,"use"))a.I(0,["proxy-groups",a0,"use"])
l=p.a(b.h(0,a5))
if(l==null)l=[]
l=J.an(l,new A.iy(q,b0))
a1=A.o(l,l.$ti.i("f.E"))
l=a1.length===0?A.c(["DIRECT"],s):a1
a.G(["proxy-groups",a0,"proxies"],l)}a2=A.qd(a.b,A.rl(e))
a3=A.rm(n?b1:b4)
a4=a3.length===0?a2:A.qD(a2,a3)
a8=A.rQ(a4,A.jy(n?"":b4))
return A.rt(A.kZ(a8,n?"":b4),b4)},
i5:function i5(){},
k_:function k_(a){this.a=a},
k0:function k0(){},
je:function je(){},
iy:function iy(a,b){this.a=a
this.b=b},
pB(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b3(r,new A.i_(b))
if(s>=0)return s}throw A.a(A.B("Proxy group "+b+" was not found in the configuration",null,null))},
f5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.D(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a4(d)
r=s.ac(d,new A.jI(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jJ()),o)
if(!n.gL(0)){s=t.N
m=A.ah(t.f.a(B.c.aa(B.a.D(n.gU(0),24),null)),s,s)
m.au(0,new A.jK(r))
for(s=B.q.gN(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jL(l)),o)
j=l.a
if(m.F(j)&&!k.gL(0)){i=k.gq(0)
if(!i.l())A.E(A.a2())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jM(f)),o)
if(!e.gL(0)){i=e.gq(0)
if(!i.l())A.E(A.a2())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
lq(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kj()),t.U).V(0,"\n")
return"# Mclash group-filters: "+B.c.ad(b,null)+"\n"+s},
jr(a){var s,r,q=t.g.a(t.S.a(A.D(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.jv(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jw()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.ah(t.f.a(B.c.aa(B.a.D(r.gU(0),23),null)),t.N,t.y)
q.au(0,new A.jx(s))
return q},
nw(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kf()),t.U).V(0,"\n")
return"# Mclash group-direct: "+B.c.ad(b,null)+"\n"+s},
n2(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.D(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.ix()),r),r.i("y.E"))
p=A.U(a1)
o=A.jr(a1)
for(s=new A.aj(a2,a2.r,a2.e,A.j(a2).i("aj<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
k=A.pB(a,l)
j=b.a(J.l(a.h(0,"proxy-groups"),k))
i=a2.h(0,l)
i.toString
h=B.a.u(i,"(?i)")
if(h)g=B.a.D(i,4)
else g=i
f=A.I(g,!h)
i=A.c([],m)
e=o.h(0,l)
if(e==null?l==="\ud83d\ude80 Domestic":e)i.push("DIRECT")
B.b.a9(i,new A.q(q,n.a(f.gdP()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gE().p(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0&&o.h(0,l)===!1)throw A.a(A.B("No nodes match "+l+"; adjust the regex or select DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.G(["proxy-groups",k,"proxies"],l)}return A.lq(p.b,a2)},
i_:function i_(a){this.a=a},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
kj:function kj(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(a){this.a=a},
kf:function kf(){},
ix:function ix(){},
pA(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b3(r,new A.hZ(b))
if(s>=0)return s}throw A.a(A.B("Proxy group "+b+" was not found in the configuration",null,null))},
rl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.D(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a4(d)
r=s.ac(d,new A.jD(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jE()),o)
if(!n.gL(0)){s=t.N
m=A.ah(t.f.a(B.c.aa(B.a.D(n.gU(0),24),null)),s,s)
m.au(0,new A.jF(r))
for(s=B.q.gN(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jG(l)),o)
j=l.a
if(m.F(j)&&!k.gL(0)){i=k.gq(0)
if(!i.l())A.E(A.a2())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jH(f)),o)
if(!e.gL(0)){i=e.gq(0)
if(!i.l())A.E(A.a2())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
rR(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ki()),t.U).V(0,"\n")
return"# Mclash group-filters: "+B.c.ad(b,null)+"\n"+s},
rh(a){var s,r,q=t.g.a(t.S.a(A.D(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.js(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jt()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.ah(t.f.a(B.c.aa(B.a.D(r.gU(0),23),null)),t.N,t.y)
q.au(0,new A.ju(s))
return q},
qd(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.D(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.iw()),r),r.i("y.E"))
p=A.U(a1)
o=A.rh(a1)
for(s=new A.aj(a2,a2.r,a2.e,A.j(a2).i("aj<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
k=A.pA(a,l)
j=b.a(J.l(a.h(0,"proxy-groups"),k))
i=a2.h(0,l)
i.toString
h=B.a.u(i,"(?i)")
if(h)g=B.a.D(i,4)
else g=i
f=A.I(g,!h)
i=A.c([],m)
e=o.h(0,l)
if(e==null?l==="\ud83d\ude80 Domestic":e)i.push("DIRECT")
B.b.a9(i,new A.q(q,n.a(f.gdP()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gE().p(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0&&o.h(0,l)===!1)throw A.a(A.B("No nodes match "+l+"; adjust the regex or select DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.G(["proxy-groups",k,"proxies"],l)}return A.rR(p.b,a2)},
hZ:function hZ(a){this.a=a},
jD:function jD(){},
jE:function jE(){},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
ki:function ki(){},
js:function js(){},
jt:function jt(){},
ju:function ju(a){this.a=a},
iw:function iw(){},
no(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.O(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ah)
s=t.S
r=s.a(A.D(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.U(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.S(k,d)&&!j.S(k,"ws"))continue
i=j.S(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.ah(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.ah(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iQ())
f.j(0,"Host",j.S(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iR()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iQ:function iQ(){},
iR:function iR(){},
rm(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.O(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ah)
s=t.S
r=s.a(A.D(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.U(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.S(k,d)&&!j.S(k,"ws"))continue
i=j.S(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.ah(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.ah(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iO())
f.j(0,"Host",j.S(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iP()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iO:function iO(){},
iP:function iP(){},
re(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pp(a,b,c,d,e){t._.a(a)
A.V(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
nk(a,b,c){A.qf(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
qN(a,b,c,d){var s,r,q,p,o,n=A.n(d,c.i("p<0>"))
for(s=c.i("K<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.c([],s)
n.j(0,p,o)
p=o}else p=o
J.kq(p,q)}return n},
oe(a,b,c){var s,r,q,p,o=A.t(a),n=new J.b6(a,a.length,o.i("b6<1>"))
if(!n.l())throw A.a(A.bi("no elements"))
s=n.d
if(s==null)s=o.c.a(s)
for(o=o.c,r=1;n.l();r=q){q=r+1
p=n.d
s=b.$3(r,s,p==null?o.a(p):p)}return s},
n6(){var s,r,q,p,o=null
try{o=A.kL()}catch(s){if(t.g8.b(A.c3(s))){r=$.hY
if(r!=null)return r
throw s}else throw s}if(J.u(o,$.mH)){r=$.hY
r.toString
return r}$.mH=o
if($.ls()===$.dO())r=$.hY=o.e7(".").n(0)
else{q=o.cM()
p=q.length-1
r=$.hY=p===0?q:B.a.v(q,0,p)}return r},
ni(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
n9(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.b(a,b)
if(!A.ni(a.charCodeAt(b)))return q
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
qY(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gU(0)
for(r=A.aW(a,1,null,a.$ti.i("y.E")),q=r.$ti,r=new A.a3(r,r.gk(0),q.i("a3<y.E>")),q=q.i("y.E");r.l();){p=r.d
if(!J.u(p==null?q.a(p):p,s))return!1}return!0},
rs(a,b,c){var s=B.b.aq(a,null)
if(s<0)throw A.a(A.a1(A.m(a)+" contains no null elements."))
B.b.j(a,s,b)},
nq(a,b,c){var s=B.b.aq(a,b)
if(s<0)throw A.a(A.a1(A.m(a)+" contains no elements matching "+b.n(0)+"."))
B.b.j(a,s,null)},
qt(a,b){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a3(s,s.gk(0),r.i("a3<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
iT(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.af(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.aq(a,b)
while(r!==-1){q=r===0?0:B.a.ae(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.af(a,b,r+1)}return null},
rO(a,b,c,d){var s=c!=null
if(s)if(c<0)throw A.a(A.a6("position must be greater than or equal to 0."))
else if(c>a.length)throw A.a(A.a6("position must be less than or equal to the string length."))
if(s&&d!=null&&c+d>a.length)throw A.a(A.a6("position plus length must not go beyond the end of the string."))},
D(a){return A.f0(a,null,!1,null).a.ga7()},
f0(a,b,c,d){var s,r=null,q=A.c([],t.aq),p=t.N,o=A.aT(A.on(r),r,!1,t.fs),n=A.c([B.cz],t.a2),m=A.c([null],t.g0),l=A.ou(a,d),k=new A.fP(new A.fU(!1,b,new A.dX(l,r,a),new A.d5(o,0,0,t.co),n,m),q,B.aC,A.n(p,t.h7)),j=new A.fK(k,A.n(p,t.T),A.aS(p),k.aQ().gA()),i=j.dW()
if(i==null){q=j.d
return new A.eB(new A.ao(r,B.j,q),q)}s=j.dW()
if(s!=null)throw A.a(A.G("Only expected one document.",s.b))
return i},
rv(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.O(a[r]))}else s=!1
if(!s)break;--r}return r},
ru(a){var s,r=A.c(a.split(","),t.s)
if(B.a.O(B.b.gU(r))==="SUB-RULE"||r.length<2)return null
s=A.rv(r)
if(!(s>=0&&s<r.length))return A.b(r,s)
return B.a.O(r[s])},
lg(a){a=A.J(a,"# Mclash OpenWrt \u673a\u573a\u524d\u7f00: ","# Mclash OpenWrt subscription-prefixes: ")
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
A.kz.prototype={}
J.e2.prototype={
S(a,b){return a===b},
gY(a){return A.ei(a)},
n(a){return"Instance of '"+A.ej(a)+"'"},
gaM(a){return A.b4(A.kV(this))}}
J.e4.prototype={
n(a){return String(a)},
gY(a){return a?519018:218159},
gaM(a){return A.b4(t.y)},
$ias:1,
$ik:1}
J.cS.prototype={
S(a,b){return null==b},
n(a){return"null"},
gY(a){return 0},
$ias:1,
$ibd:1}
J.cV.prototype={$iaM:1}
J.bs.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.eg.prototype={}
J.bM.prototype={}
J.br.prototype={
n(a){var s=a[$.ny()]
if(s==null)s=a[$.lr()]
if(s==null)return this.ei(a)
return"JavaScript function for "+J.am(s)},
$ib7:1}
J.cU.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.cW.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.K.prototype={
t(a,b){A.t(a).c.a(b)
a.$flags&1&&A.W(a,29)
a.push(b)},
bc(a,b){A.V(b)
a.$flags&1&&A.W(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.fT(b,null))
return a.splice(b,1)[0]},
b8(a,b,c){var s
A.t(a).c.a(c)
a.$flags&1&&A.W(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.fT(b,null))
a.splice(b,0,c)},
cE(a,b,c){var s,r,q
A.t(a).i("f<1>").a(c)
a.$flags&1&&A.W(a,"insertAll",2)
s=a.length
A.ci(b,0,s,"index")
r=c.length
a.length=s+r
q=b+r
this.al(a,q,a.length,a,b)
this.bf(a,b,q,c)},
e3(a){a.$flags&1&&A.W(a,"removeLast",1)
if(a.length===0)throw A.a(A.dJ(a,-1))
return a.pop()},
au(a,b){A.t(a).i("k(1)").a(b)
a.$flags&1&&A.W(a,16)
this.dt(a,b,!0)},
dt(a,b,c){var s,r,q,p,o
A.t(a).i("k(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.a(A.R(a))}o=s.length
if(o===r)return
this.sk(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
aJ(a,b){var s=A.t(a)
return new A.q(a,s.i("k(1)").a(b),s.i("q<1>"))},
a9(a,b){var s
A.t(a).i("f<1>").a(b)
a.$flags&1&&A.W(a,"addAll",2)
if(Array.isArray(b)){this.es(a,b)
return}for(s=J.F(b);s.l();)a.push(s.gm())},
es(a,b){var s,r
t.v.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.R(a))
for(r=0;r<s;++r)a.push(b[r])},
br(a){a.$flags&1&&A.W(a,"clear","clear")
a.length=0},
an(a,b){var s,r
A.t(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.R(a))}},
ac(a,b,c){var s=A.t(a)
return new A.H(a,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("H<1,2>"))},
V(a,b){var s,r=A.aT(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.m(a[s]))
return r.join(b)},
dV(a){return this.V(a,"")},
a3(a,b){return A.aW(a,0,A.eY(b,"count",t.p),A.t(a).c)},
ao(a,b){return A.aW(a,b,null,A.t(a).c)},
bT(a,b,c,d){var s,r,q
d.a(b)
A.t(a).a8(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.R(a))}return r},
T(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gU(a){if(a.length>0)return a[0]
throw A.a(A.a2())},
gJ(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.a2())},
al(a,b,c,d,e){var s,r,q,p
A.t(a).i("f<1>").a(d)
a.$flags&2&&A.W(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.ae(e,"skipCount")
r=d
q=J.C(r)
if(e+s>q.gk(r))throw A.a(A.lL())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,e+p)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
bs(a,b,c,d){var s
a.$flags&2&&A.W(a,"fillRange")
A.be(b,c,a.length)
A.t(a).c.a(d)
for(s=b;s<c;++s)a[s]=d},
R(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.R(a))}return!1},
aO(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.R(a))}return!0},
bY(a,b){var s,r,q,p,o,n=A.t(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.W(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aK()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.qk(b,2))
if(p>0)this.fj(a,p)},
fj(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
aq(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.u(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
gL(a){return a.length===0},
gb4(a){return a.length!==0},
n(a){return A.fz(a,"[","]")},
aS(a,b){var s=A.c(a.slice(0),A.t(a))
return s},
aR(a){return this.aS(a,!0)},
gq(a){return new J.b6(a,a.length,A.t(a).i("b6<1>"))},
gY(a){return A.ei(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.W(a,"set length","change the length of")
if(b>a.length)A.t(a).c.a(null)
a.length=b},
h(a,b){A.V(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
j(a,b,c){A.t(a).c.a(c)
a.$flags&2&&A.W(a)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
a[b]=c},
b3(a,b){var s
A.t(a).i("k(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
h0(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.b(a,r)
if(b.$1(a[r]))return r}return-1},
$ix:1,
$if:1,
$ip:1}
J.e3.prototype={
he(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ej(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.fA.prototype={}
J.b6.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a8(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iL:1}
J.cT.prototype={
aC(a,b){var s
A.mE(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcG(b)
if(this.gcG(a)===s)return 0
if(this.gcG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcG(a){return a===0?1/a<0:a<0},
hc(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.a9(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.b(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.E(A.N("Unexpected toString result: "+s))
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
bX(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bp(a,b){return(a|0)===a?a/b|0:this.fB(a,b)},
fB(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.N("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
b0(a,b){var s
if(a>0)s=this.dB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fv(a,b){if(0>b)throw A.a(A.dI(b))
return this.dB(a,b)},
dB(a,b){return b>31?0:a>>>b},
gaM(a){return A.b4(t.H)},
$ibA:1}
J.cR.prototype={
gaM(a){return A.b4(t.p)},
$ias:1,
$ih:1}
J.e5.prototype={
gaM(a){return A.b4(t.i)},
$ias:1}
J.bq.prototype={
cr(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.eO(b,a,c)},
bq(a,b){return this.cr(a,b,0)},
bu(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.b(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.cm(c,a)},
aG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.D(a,r-s)},
e6(a,b,c){A.ci(0,0,a.length,"startIndex")
return A.rB(a,b,c,0)},
bg(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.b9){s=b.e
s=!(s==null?b.e=b.ey():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.eD(a,b)}},
aX(a,b,c,d){var s=A.be(b,c,a.length)
return A.ns(a,b,s,d)},
eD(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.kr(b,a),s=s.gq(s),r=0,q=1;s.l();){p=s.gm()
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
return b===a.substring(c,s)}return J.nW(b,a,c)!=null},
u(a,b){return this.a4(a,b,0)},
v(a,b,c){return a.substring(b,A.be(b,c,a.length))},
D(a,b){return this.v(a,b,null)},
O(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.oh(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.lO(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
hd(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.b(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.lO(r,s))},
aj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.aP)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
h2(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aj(" ",s)},
af(a,b,c){var s,r,q,p
if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string")return a.indexOf(b,c)
if(b instanceof A.b9){s=b.cW(a,c)
return s==null?-1:s.b.index}for(r=a.length,q=J.c_(b),p=c;p<=r;++p)if(q.bu(b,a,p)!=null)return p
return-1},
aq(a,b){return this.af(a,b,0)},
ae(a,b,c){var s,r,q
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.a9(c,0,a.length,null,null))
if(typeof b=="string"){s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)}for(s=J.c_(b),q=c;q>=0;--q)if(s.bu(b,a,q)!=null)return q
return-1},
bb(a,b){return this.ae(a,b,null)},
p(a,b){return A.rx(a,b,0)},
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
gaM(a){return A.b4(t.N)},
gk(a){return a.length},
h(a,b){A.V(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
$ias:1,
$icg:1,
$id:1}
A.cZ.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.aH.prototype={
gk(a){return this.a.length},
h(a,b){var s
A.V(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.fX.prototype={}
A.x.prototype={}
A.y.prototype={
gq(a){var s=this
return new A.a3(s,s.gk(s),A.j(s).i("a3<y.E>"))},
gL(a){return this.gk(this)===0},
gU(a){if(this.gk(this)===0)throw A.a(A.a2())
return this.T(0,0)},
gJ(a){var s=this
if(s.gk(s)===0)throw A.a(A.a2())
return s.T(0,s.gk(s)-1)},
p(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(J.u(r.T(0,s),b))return!0
if(q!==r.gk(r))throw A.a(A.R(r))}return!1},
aO(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(!b.$1(q.T(0,r)))return!1
if(s!==q.gk(q))throw A.a(A.R(q))}return!0},
R(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gk(q))throw A.a(A.R(q))}return!1},
bS(a,b){var s,r,q,p=this
A.j(p).i("k(y.E)").a(b)
s=p.gk(p)
for(r=0;r<s;++r){q=p.T(0,r)
if(b.$1(q))return q
if(s!==p.gk(p))throw A.a(A.R(p))}throw A.a(A.a2())},
V(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.T(0,0))
if(o!==p.gk(p))throw A.a(A.R(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.R(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.R(p))}return r.charCodeAt(0)==0?r:r}},
aJ(a,b){return this.bh(0,A.j(this).i("k(y.E)").a(b))},
ac(a,b,c){var s=A.j(this)
return new A.H(this,s.a8(c).i("1(y.E)").a(b),s.i("@<y.E>").a8(c).i("H<1,2>"))},
h7(a,b){var s,r,q,p=this
A.j(p).i("y.E(y.E,y.E)").a(b)
s=p.gk(p)
if(s===0)throw A.a(A.a2())
r=p.T(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.T(0,q))
if(s!==p.gk(p))throw A.a(A.R(p))}return r},
ao(a,b){return A.aW(this,b,null,A.j(this).i("y.E"))},
aS(a,b){var s=A.o(this,A.j(this).i("y.E"))
return s},
aR(a){return this.aS(0,!0)},
aE(a){var s,r=this,q=A.kC(A.j(r).i("y.E"))
for(s=0;s<r.gk(r);++s)q.t(0,r.T(0,s))
return q}}
A.bK.prototype={
eq(a,b,c,d){var s,r=this.b
A.ae(r,"start")
s=this.c
if(s!=null){A.ae(s,"end")
if(r>s)throw A.a(A.a9(r,0,s,"start",null))}},
geE(){var s=J.a7(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfz(){var s=J.a7(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a7(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gfz()+b
if(b<0||r>=s.geE())throw A.a(A.e0(b,s.gk(0),s,null,"index"))
return J.ks(s.a,r)},
ao(a,b){var s,r,q=this
A.ae(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bD(q.$ti.i("bD<1>"))
return A.aW(q.a,s,r,q.$ti.c)},
a3(a,b){var s,r,q,p=this
A.ae(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.aW(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.aW(p.a,r,q,p.$ti.c)}},
aS(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.C(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.kx(0,n):J.lM(0,n)}r=A.aT(s,m.T(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.b.j(r,q,m.T(n,o+q))
if(m.gk(n)<l)throw A.a(A.R(p))}return r},
aR(a){return this.aS(0,!0)}}
A.a3.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.C(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.R(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iL:1}
A.bb.prototype={
gq(a){return new A.d0(J.F(this.a),this.b,A.j(this).i("d0<1,2>"))},
gk(a){return J.a7(this.a)},
gL(a){return J.cE(this.a)},
gU(a){return this.b.$1(J.lx(this.a))},
gJ(a){return this.b.$1(J.kt(this.a))},
T(a,b){return this.b.$1(J.ks(this.a,b))}}
A.bC.prototype={$ix:1}
A.d0.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iL:1}
A.H.prototype={
gk(a){return J.a7(this.a)},
T(a,b){return this.b.$1(J.ks(this.a,b))}}
A.q.prototype={
gq(a){return new A.bk(J.F(this.a),this.b,this.$ti.i("bk<1>"))},
ac(a,b,c){var s=this.$ti
return new A.bb(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bb<1,2>"))}}
A.bk.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iL:1}
A.aB.prototype={
gq(a){return new A.cQ(J.F(this.a),this.b,B.a4,this.$ti.i("cQ<1,2>"))}}
A.cQ.prototype={
gm(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
l(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.l();){q.d=null
if(s.l()){q.c=null
p=J.F(r.$1(s.gm()))
q.c=p}else return!1}q.d=q.c.gm()
return!0},
$iL:1}
A.bg.prototype={
ao(a,b){A.cI(b,"count",t.p)
A.ae(b,"count")
return new A.bg(this.a,this.b+b,A.j(this).i("bg<1>"))},
gq(a){var s=this.a
return new A.da(s.gq(s),this.b,A.j(this).i("da<1>"))}}
A.c9.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
ao(a,b){A.cI(b,"count",t.p)
A.ae(b,"count")
return new A.c9(this.a,this.b+b,this.$ti)},
$ix:1}
A.da.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gm(){return this.a.gm()},
$iL:1}
A.bD.prototype={
gq(a){return B.a4},
gL(a){return!0},
gk(a){return 0},
gU(a){throw A.a(A.a2())},
gJ(a){throw A.a(A.a2())},
T(a,b){throw A.a(A.a9(b,0,0,"index",null))},
p(a,b){return!1},
aO(a,b){this.$ti.i("k(1)").a(b)
return!0},
R(a,b){this.$ti.i("k(1)").a(b)
return!1},
bS(a,b){this.$ti.i("k(1)").a(b)
throw A.a(A.a2())},
V(a,b){return""},
aJ(a,b){this.$ti.i("k(1)").a(b)
return this},
ac(a,b,c){this.$ti.a8(c).i("1(2)").a(b)
return new A.bD(c.i("bD<0>"))},
ao(a,b){A.ae(b,"count")
return this},
aS(a,b){var s=J.kx(0,this.$ti.c)
return s},
aR(a){return this.aS(0,!0)}}
A.cP.prototype={
l(){return!1},
gm(){throw A.a(A.a2())},
$iL:1}
A.dl.prototype={
gq(a){return new A.dm(J.F(this.a),this.$ti.i("dm<1>"))}}
A.dm.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gm()))return!0
return!1},
gm(){return this.$ti.c.a(this.a.gm())},
$iL:1}
A.b8.prototype={
gk(a){var s=this.a
return s.gk(s)},
gL(a){var s=this.a
return s.gL(s)},
gU(a){var s=this.a
return new A.b2(this.b,s.gU(s))},
T(a,b){return new A.b2(b+this.b,this.a.T(0,b))},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.V(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ed()
n=this.a.ao(0,p-this.b)
q=n.gq(n)
return q.l()&&J.u(q.gm(),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ae(b,"count")
return new A.b8(this.a.ao(0,b),b+this.b,A.j(this).i("b8<1>"))},
gq(a){var s=this.a
return new A.bE(s.gq(s),this.b,A.j(this).i("bE<1>"))}}
A.c8.prototype={
gJ(a){var s,r=this.a,q=r.gk(r)
if(q<=0)throw A.a(A.a2())
s=r.gJ(r)
if(q!==r.gk(r))throw A.a(A.R(this))
return new A.b2(q-1+this.b,s)},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.V(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ed()
q=p-this.b
n=this.a
return q<n.gk(n)&&J.u(n.T(0,q),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ae(b,"count")
return new A.c8(this.a.ao(0,b),this.b+b,this.$ti)},
$ix:1}
A.bE.prototype={
l(){if(++this.c>=0&&this.a.l())return!0
this.c=-2
return!1},
gm(){var s=this.c
return s>=0?new A.b2(this.b+s,this.a.gm()):A.E(A.a2())},
$iL:1}
A.aL.prototype={
sk(a,b){throw A.a(A.N("Cannot change the length of a fixed-length list"))},
t(a,b){A.aa(a).i("aL.E").a(b)
throw A.a(A.N("Cannot add to a fixed-length list"))},
au(a,b){A.aa(a).i("k(aL.E)").a(b)
throw A.a(A.N("Cannot remove from a fixed-length list"))}}
A.ax.prototype={
j(a,b,c){A.j(this).i("ax.E").a(c)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.a(A.N("Cannot change the length of an unmodifiable list"))},
t(a,b){A.j(this).i("ax.E").a(b)
throw A.a(A.N("Cannot add to an unmodifiable list"))},
au(a,b){A.j(this).i("k(ax.E)").a(b)
throw A.a(A.N("Cannot remove from an unmodifiable list"))},
bY(a,b){A.j(this).i("h(ax.E,ax.E)?").a(b)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
al(a,b,c,d,e){A.j(this).i("f<ax.E>").a(d)
throw A.a(A.N("Cannot modify an unmodifiable list"))},
bf(a,b,c,d){return this.al(0,b,c,d,0)}}
A.cn.prototype={}
A.eN.prototype={
gk(a){return J.a7(this.a)},
T(a,b){var s=J.a7(this.a)
if(0>b||b>=s)A.E(A.e0(b,s,this,null,"index"))
return b}}
A.d_.prototype={
h(a,b){return this.F(b)?J.l(this.a,A.V(b)):null},
gk(a){return J.a7(this.a)},
gag(){return A.aW(this.a,0,null,this.$ti.c)},
gE(){return new A.eN(this.a)},
gL(a){return J.cE(this.a)},
aU(a){return J.bo(this.a,a)},
F(a){return A.b3(a)&&a>=0&&a<J.a7(this.a)},
an(a,b){var s,r,q,p
this.$ti.i("~(h,1)").a(b)
s=this.a
r=J.C(s)
q=r.gk(s)
for(p=0;p<q;++p){b.$2(p,r.h(s,p))
if(q!==r.gk(s))throw A.a(A.R(s))}}}
A.d7.prototype={
gk(a){return J.a7(this.a)},
T(a,b){var s=this.a,r=J.C(s)
return r.T(s,r.gk(s)-1-b)}}
A.b2.prototype={$r:"+(1,2)",$s:1}
A.ct.prototype={$r:"+column,type(1,2)",$s:2}
A.bU.prototype={$r:"+compactCharOffset,lineEndingIndex(1,2)",$s:3}
A.cu.prototype={$r:"+end,start(1,2)",$s:4}
A.dw.prototype={$r:"+indent,trailingBreaks(1,2)",$s:5}
A.cv.prototype={$r:"+nearestLineEnding,nextNodeColStart(1,2)",$s:6}
A.dx.prototype={$r:"+index,keyNode,valueNode(1,2,3)",$s:7}
A.cL.prototype={}
A.cK.prototype={
gL(a){return this.gk(this)===0},
n(a){return A.kE(this)},
j(a,b,c){var s=A.j(this)
s.c.a(b)
s.y[1].a(c)
A.lH()},
I(a,b){A.lH()},
gN(){return new A.bx(this.fS(),A.j(this).i("bx<M<1,2>>"))},
fS(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gE(),o=o.gq(o),n=A.j(s),m=n.y[1],n=n.i("M<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gm()
k=s.h(0,l)
r=4
return a.b=new A.M(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iw:1}
A.aJ.prototype={
gk(a){return this.b.length},
gdd(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aU(a){return B.b.p(this.b,a)},
F(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.F(b))return null
return this.b[this.a[b]]},
an(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gdd()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gE(){return new A.bQ(this.gdd(),this.$ti.i("bQ<1>"))},
gag(){return new A.bQ(this.b,this.$ti.i("bQ<2>"))}}
A.bQ.prototype={
gk(a){return this.a.length},
gL(a){return 0===this.a.length},
gq(a){var s=this.a
return new A.bR(s,s.length,this.$ti.i("bR<1>"))}}
A.bR.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iL:1}
A.cM.prototype={
t(a,b){A.j(this).c.a(b)
A.lI()},
I(a,b){A.lI()}}
A.cN.prototype={
gk(a){return this.b},
gL(a){return this.b===0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bR(s,s.length,r.$ti.i("bR<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.e1.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.cb&&this.a.S(0,b.a)&&A.l9(this)===A.l9(b)},
gY(a){return A.ec(this.a,A.l9(this),B.n,B.n)},
n(a){var s=B.b.V([A.b4(this.$ti.c)],", ")
return this.a.n(0)+" with "+("<"+s+">")}}
A.cb.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.qX(A.iB(this.a),this.$ti)}}
A.d8.prototype={}
A.h0.prototype={
aL(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.d3.prototype={
n(a){return"Null check operator used on a null value"}}
A.e6.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eu.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eb.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iaA:1}
A.ar.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nt(r==null?"unknown":r)+"'"},
$ib7:1,
ghh(){return this},
$C:"$1",
$R:1,
$D:null}
A.dS.prototype={$C:"$0",$R:0}
A.dT.prototype={$C:"$2",$R:2}
A.es.prototype={}
A.eq.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nt(s)+"'"}}
A.c6.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.c6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gY(a){return(A.f1(this.a)^A.ei(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ej(this.a)+"'")}}
A.ek.prototype={
n(a){return"RuntimeError: "+this.a}}
A.aC.prototype={
gk(a){return this.a},
gL(a){return this.a===0},
gE(){return new A.ak(this,A.j(this).i("ak<1>"))},
gag(){return new A.aE(this,A.j(this).i("aE<2>"))},
gN(){return new A.Q(this,A.j(this).i("Q<1,2>"))},
F(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.dQ(a)},
dQ(a){var s=this.d
if(s==null)return!1
return this.ba(s[this.b9(a)],a)>=0},
aU(a){return new A.ak(this,A.j(this).i("ak<1>")).R(0,new A.fC(this,a))},
a9(a,b){A.j(this).i("w<1,2>").a(b).an(0,new A.fB(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.dR(b)},
dR(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b9(a)]
r=this.ba(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.j(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cS(s==null?q.b=q.cd():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cS(r==null?q.c=q.cd():r,b,c)}else q.dT(b,c)},
dT(a,b){var s,r,q,p,o=this,n=A.j(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cd()
r=o.b9(a)
q=s[r]
if(q==null)s[r]=[o.ce(a,b)]
else{p=o.ba(q,a)
if(p>=0)q[p].b=b
else q.push(o.ce(a,b))}},
h5(a,b){var s,r,q=this,p=A.j(q)
p.c.a(a)
p.i("2()").a(b)
if(q.F(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
I(a,b){var s=this
if(typeof b=="string")return s.cQ(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.cQ(s.c,b)
else return s.dS(b)},
dS(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b9(a)
r=n[s]
q=o.ba(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cR(p)
if(r.length===0)delete n[s]
return p.b},
br(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cc()}},
an(a,b){var s,r,q=this
A.j(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.R(q))
s=s.c}},
cS(a,b,c){var s,r=A.j(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ce(b,c)
else s.b=c},
cQ(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.cR(s)
delete a[b]
return s.b},
cc(){this.r=this.r+1&1073741823},
ce(a,b){var s=this,r=A.j(s),q=new A.fG(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cc()
return q},
cR(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cc()},
b9(a){return J.ad(a)&1073741823},
ba(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
n(a){return A.kE(this)},
cd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifF:1}
A.fC.prototype={
$1(a){var s=this.a
return J.u(s.h(0,A.j(s).c.a(a)),this.b)},
$S(){return A.j(this.a).i("k(1)")}}
A.fB.prototype={
$2(a,b){var s=this.a,r=A.j(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.j(this.a).i("~(1,2)")}}
A.fG.prototype={}
A.ak.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.aj(s,s.r,s.e,this.$ti.i("aj<1>"))},
p(a,b){return this.a.F(b)}}
A.aj.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iL:1}
A.aE.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.aD(s,s.r,s.e,this.$ti.i("aD<1>"))}}
A.aD.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iL:1}
A.Q.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.ba(s,s.r,s.e,this.$ti.i("ba<1,2>"))}}
A.ba.prototype={
gm(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.M(s.a,s.b,r.$ti.i("M<1,2>"))
r.c=s.c
return!0}},
$iL:1}
A.cX.prototype={
b9(a){return A.f1(a)&1073741823},
ba(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j1.prototype={
$1(a){return this.a(a)},
$S:1}
A.j2.prototype={
$2(a,b){return this.a(a,b)},
$S:51}
A.j3.prototype={
$1(a){return this.a(A.e(a))},
$S:16}
A.az.prototype={
n(a){return this.dF(!1)},
dF(a){var s,r,q,p,o,n=this.eK(),m=this.ca(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.lX(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
eK(){var s,r=this.$s
while($.hx.length<=r)B.b.t($.hx,null)
s=$.hx[r]
if(s==null){s=this.ex()
B.b.j($.hx,r,s)}return s},
ex(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.kw(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.j(j,q,r[s])}}return A.kD(j,k)}}
A.aX.prototype={
ca(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.aX&&this.$s===b.$s&&J.u(this.a,b.a)&&J.u(this.b,b.b)},
gY(a){return A.ec(this.$s,this.a,this.b,B.n)}}
A.cs.prototype={
ca(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.cs&&s.$s===b.$s&&J.u(s.a,b.a)&&J.u(s.b,b.b)&&J.u(s.c,b.c)},
gY(a){var s=this
return A.ec(s.$s,s.a,s.b,s.c)}}
A.b9.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdf(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.ky(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
geZ(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.ky(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
ey(){var s,r=this.a
if(!B.a.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fV(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cr(s)},
fW(a){A.e(a)
return this.b.test(a)},
cr(a,b,c){var s=b.length
if(c>s)throw A.a(A.a9(c,0,s,null,null))
return new A.eF(this,b,c)},
bq(a,b){return this.cr(0,b,0)},
cW(a,b){var s,r=this.gdf()
if(r==null)r=A.hV(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cr(s)},
eF(a,b){var s,r=this.geZ()
if(r==null)r=A.hV(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cr(s)},
bu(a,b,c){if(c<0||c>b.length)throw A.a(A.a9(c,0,b.length,null,null))
return this.eF(b,c)},
$icg:1,
$iop:1}
A.cr.prototype={
gC(){return this.b.index},
gH(){var s=this.b
return s.index+s[0].length},
h(a,b){var s
A.V(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]},
$ib_:1,
$id6:1}
A.eF.prototype={
gq(a){return new A.dn(this.a,this.b,this.c)}}
A.dn.prototype={
gm(){var s=this.d
return s==null?t.cz.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.cW(l,s)
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
A.cm.prototype={
gH(){return this.a+this.c.length},
h(a,b){A.V(b)
if(b!==0)throw A.a(A.fT(b,null))
return this.c},
$ib_:1,
gC(){return this.a}}
A.eO.prototype={
gq(a){return new A.eP(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.cm(r,s)
throw A.a(A.a2())}}
A.eP.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cm(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iL:1}
A.hl.prototype={
bI(){var s=this.b
if(s===this)throw A.a(new A.cZ("Local '' has not been initialized."))
return s}}
A.d1.prototype={
eN(a,b,c,d){var s=A.a9(b,0,c,d,null)
throw A.a(s)},
cT(a,b,c,d){if(b>>>0!==b||b>c)this.eN(a,b,c,d)}}
A.b0.prototype={
gk(a){return a.length},
$ice:1}
A.bc.prototype={
j(a,b,c){A.V(c)
a.$flags&2&&A.W(a)
A.hW(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){var s,r,q,p
t.hb.a(d)
a.$flags&2&&A.W(a,5)
if(t.eB.b(d)){s=a.length
this.cT(a,b,s,"start")
this.cT(a,c,s,"end")
if(b>c)A.E(A.a9(b,0,c,null,null))
r=c-b
if(e<0)A.E(A.a1(e))
q=d.length
if(q-e<r)A.E(A.bi("Not enough elements"))
p=e!==0||q!==r?d.subarray(e,e+r):d
a.set(p,b)
return}this.ej(a,b,c,d,e)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
$ix:1,
$if:1,
$ip:1}
A.ea.prototype={
gaM(a){return B.cF},
h(a,b){A.V(b)
A.hW(b,a,a.length)
return a[b]},
$ias:1}
A.d2.prototype={
gaM(a){return B.cH},
h(a,b){A.V(b)
A.hW(b,a,a.length)
return a[b]},
c0(a,b,c){return new Uint32Array(a.subarray(b,A.mG(b,c,a.length)))},
$ias:1,
$ikJ:1}
A.bG.prototype={
gaM(a){return B.cI},
gk(a){return a.length},
h(a,b){A.V(b)
A.hW(b,a,a.length)
return a[b]},
$ias:1,
$ibG:1,
$ikK:1}
A.dt.prototype={}
A.du.prototype={}
A.aV.prototype={
i(a){return A.dD(v.typeUniverse,this,a)},
a8(a){return A.ml(v.typeUniverse,this,a)}}
A.eJ.prototype={}
A.hy.prototype={
n(a){return A.at(this.a,null)}}
A.eH.prototype={
n(a){return this.a}}
A.cw.prototype={}
A.dz.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
fk(a,b){var s,r,q
a=A.V(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gm()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.fk(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.mg
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
o.a=A.mg
throw n
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.bi("sync*"))}return!1},
hi(a){var s,r,q=this
if(a instanceof A.bx){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.b.t(r,q.a)
q.a=s
return 2}else{q.d=J.F(a)
return 2}},
$iL:1}
A.bx.prototype={
gq(a){return new A.dz(this.a(),this.$ti.i("dz<1>"))}}
A.dq.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ef(b)},
j(a,b,c){var s=this.$ti
this.eh(s.c.a(b),s.y[1].a(c))},
F(a){if(!this.y.$1(a))return!1
return this.ee(a)},
I(a,b){if(!this.y.$1(b))return null
return this.eg(b)},
b9(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
ba(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(q.$2(r.a(a[p].a),r.a(b)))return p
return-1}}
A.hu.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.ay.prototype={
dg(){return new A.ay(A.j(this).i("ay<1>"))},
gq(a){var s=this,r=new A.bS(s,s.r,A.j(s).i("bS<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gL(a){return this.a===0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.M.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.M.a(r[b])!=null}else return this.eA(b)},
eA(a){var s=this.d
if(s==null)return!1
return this.bE(s[this.bC(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
gJ(a){var s=this.f
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cU(s==null?q.b=A.kM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cU(r==null?q.c=A.kM():r,b)}else return q.er(b)},
er(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kM()
r=p.bC(a)
q=s[r]
if(q==null)s[r]=[p.c4(a)]
else{if(p.bE(q,a)>=0)return!1
q.push(p.c4(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ds(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ds(s.c,b)
else return s.fi(b)},
fi(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bC(a)
r=n[s]
q=o.bE(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dI(p)
return!0},
cU(a,b){A.j(this).c.a(b)
if(t.M.a(a[b])!=null)return!1
a[b]=this.c4(b)
return!0},
ds(a,b){var s
if(a==null)return!1
s=t.M.a(a[b])
if(s==null)return!1
this.dI(s)
delete a[b]
return!0},
cV(){this.r=this.r+1&1073741823},
c4(a){var s,r=this,q=new A.eM(A.j(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cV()
return q},
dI(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cV()},
bC(a){return J.ad(a)&1073741823},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
$ikB:1}
A.cq.prototype={
dg(){return new A.cq(this.$ti)},
bC(a){return A.f1(a)&1073741823},
bE(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eM.prototype={}
A.bS.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.R(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iL:1}
A.di.prototype={
gk(a){return this.a.length},
h(a,b){var s
A.V(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.fI.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:32}
A.r.prototype={
gq(a){return new A.a3(a,this.gk(a),A.aa(a).i("a3<r.E>"))},
T(a,b){return this.h(a,b)},
an(a,b){var s,r
A.aa(a).i("~(r.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.h(a,r))
if(s!==this.gk(a))throw A.a(A.R(a))}},
gL(a){return this.gk(a)===0},
gb4(a){return this.gk(a)!==0},
gU(a){if(this.gk(a)===0)throw A.a(A.a2())
return this.h(a,0)},
gJ(a){if(this.gk(a)===0)throw A.a(A.a2())
return this.h(a,this.gk(a)-1)},
p(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.u(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.a(A.R(a))}return!1},
R(a,b){var s,r
A.aa(a).i("k(r.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gk(a))throw A.a(A.R(a))}return!1},
aJ(a,b){var s=A.aa(a)
return new A.q(a,s.i("k(r.E)").a(b),s.i("q<r.E>"))},
ac(a,b,c){var s=A.aa(a)
return new A.H(a,s.a8(c).i("1(r.E)").a(b),s.i("@<r.E>").a8(c).i("H<1,2>"))},
ao(a,b){return A.aW(a,b,null,A.aa(a).i("r.E"))},
t(a,b){var s
A.aa(a).i("r.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
au(a,b){this.eM(a,A.aa(a).i("k(r.E)").a(b),!1)},
eM(a,b,c){var s,r,q,p,o=this,n=A.aa(a)
n.i("k(r.E)").a(b)
s=A.c([],n.i("K<r.E>"))
r=o.gk(a)
for(q=0;q<r;++q){p=o.h(a,q)
if(J.u(b.$1(p),!1))B.b.t(s,p)
if(r!==o.gk(a))throw A.a(A.R(a))}if(s.length!==o.gk(a)){o.bf(a,0,s.length,s)
o.sk(a,s.length)}},
bY(a,b){var s=A.aa(a)
s.i("h(r.E,r.E)?").a(b)
A.el(a,0,this.gk(a)-1,b,s.i("r.E"))},
bs(a,b,c,d){var s
A.aa(a).i("r.E?").a(d)
A.be(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
al(a,b,c,d,e){var s,r,q
A.aa(a).i("f<r.E>").a(d)
A.be(b,c,this.gk(a))
s=c-b
if(s===0)return
A.ae(e,"skipCount")
r=J.C(d)
if(e+s>r.gk(d))throw A.a(A.lL())
if(e<b)for(q=s-1;q>=0;--q)this.j(a,b+q,r.h(d,e+q))
else for(q=0;q<s;++q)this.j(a,b+q,r.h(d,e+q))},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
b3(a,b){var s
A.aa(a).i("k(r.E)").a(b)
for(s=0;s<this.gk(a);++s)if(b.$1(this.h(a,s)))return s
return-1},
b8(a,b,c){var s,r=this
A.aa(a).i("r.E").a(c)
A.eY(b,"index",t.p)
s=r.gk(a)
A.ci(b,0,s,"index")
r.t(a,c)
if(b!==s){r.al(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n(a){return A.fz(a,"[","]")},
$ix:1,
$if:1,
$ip:1}
A.z.prototype={
an(a,b){var s,r,q,p=A.j(this)
p.i("~(z.K,z.V)").a(b)
for(s=this.gE(),s=s.gq(s),p=p.i("z.V");s.l();){r=s.gm()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aU(a){var s
for(s=this.gE(),s=s.gq(s);s.l();)if(J.u(this.h(0,s.gm()),a))return!0
return!1},
e8(a){var s,r,q,p=this,o=A.j(p)
o.i("z.V(z.K,z.V)").a(a)
for(s=p.gE(),s=s.gq(s),o=o.i("z.V");s.l();){r=s.gm()
q=p.h(0,r)
p.j(0,r,a.$2(r,q==null?o.a(q):q))}},
gN(){return this.gE().ac(0,new A.fL(this),A.j(this).i("M<z.K,z.V>"))},
au(a,b){var s,r,q,p,o,n=this,m=A.j(n)
m.i("k(z.K,z.V)").a(b)
s=A.c([],m.i("K<z.K>"))
for(r=n.gE(),r=r.gq(r),m=m.i("z.V");r.l();){q=r.gm()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.b.t(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.a8)(s),++o)n.I(0,s[o])},
F(a){return this.gE().p(0,a)},
gk(a){var s=this.gE()
return s.gk(s)},
gL(a){var s=this.gE()
return s.gL(s)},
gag(){return new A.dr(this,A.j(this).i("dr<z.K,z.V>"))},
n(a){return A.kE(this)},
$iw:1}
A.fL.prototype={
$1(a){var s=this.a,r=A.j(s)
r.i("z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("z.V").a(s)
return new A.M(a,s,r.i("M<z.K,z.V>"))},
$S(){return A.j(this.a).i("M<z.K,z.V>(z.K)")}}
A.fM.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:18}
A.co.prototype={}
A.dr.prototype={
gk(a){var s=this.a
return s.gk(s)},
gL(a){var s=this.a
return s.gL(s)},
gU(a){var s=this.a,r=s.gE()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gJ(a){var s=this.a,r=s.gE()
r=s.h(0,r.gJ(r))
return r==null?this.$ti.y[1].a(r):r},
gq(a){var s=this.a,r=s.gE()
return new A.ds(r.gq(r),s,this.$ti.i("ds<1,2>"))}}
A.ds.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.h(0,r.gm())
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
A.cf.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.j(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
F(a){return this.a.F(a)},
aU(a){return this.a.aU(a)},
an(a,b){this.a.an(0,A.j(this).i("~(1,2)").a(b))},
gL(a){var s=this.a
return s.gL(s)},
gk(a){var s=this.a
return s.gk(s)},
gE(){return this.a.gE()},
I(a,b){return this.a.I(0,b)},
n(a){return this.a.n(0)},
gag(){return this.a.gag()},
gN(){return this.a.gN()},
$iw:1}
A.b1.prototype={}
A.bf.prototype={
gL(a){return this.gk(this)===0},
a9(a,b){var s
for(s=J.F(A.j(this).i("f<1>").a(b));s.l();)this.t(0,s.gm())},
h9(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r)this.I(0,a[r])},
fN(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r)if(!this.p(0,a[r]))return!1
return!0},
ac(a,b,c){var s=A.j(this)
return new A.bC(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bC<1,2>"))},
n(a){return A.fz(this,"{","}")},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.a2())
return s.gm()},
gJ(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.a2())
do s=r.gm()
while(r.l())
return s},
T(a,b){var s,r
A.ae(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.a(A.e0(b,b-r,this,null,"index"))},
$ix:1,
$if:1,
$id9:1}
A.dy.prototype={
dU(a){var s,r,q,p=this,o=p.dg()
for(s=A.hv(p,p.r,A.j(p).c),r=s.$ti.c;s.l();){q=s.d
if(q==null)q=r.a(q)
if(a.p(0,q))o.t(0,q)}return o}}
A.cx.prototype={}
A.eK.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fh(b):s}},
gk(a){return this.b==null?this.c.a:this.aZ().length},
gL(a){return this.gk(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.ak(s,A.j(s).i("ak<1>"))}return new A.eL(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aE(s,A.j(s).i("aE<2>"))}return A.fN(r.aZ(),new A.hq(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.e(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.F(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.dJ().j(0,b,c)},
aU(a){var s,r,q=this
if(q.b==null)return q.c.aU(a)
s=q.aZ()
for(r=0;r<s.length;++r)if(J.u(q.h(0,s[r]),a))return!0
return!1},
F(a){if(this.b==null)return this.c.F(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
I(a,b){if(this.b!=null&&!this.F(b))return null
return this.dJ().I(0,b)},
an(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.an(0,b)
s=o.aZ()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.hX(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.R(o))}},
aZ(){var s=t.g.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
dJ(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.aZ()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.b.t(r,"")
else B.b.br(r)
n.a=n.b=null
return n.c=s},
fh(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.hX(this.a[a])
return this.b[a]=s}}
A.hq.prototype={
$1(a){return this.a.h(0,A.e(a))},
$S:16}
A.eL.prototype={
gk(a){return this.a.gk(0)},
T(a,b){var s=this.a
if(s.b==null)s=s.gE().T(0,b)
else{s=s.aZ()
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gE()
s=s.gq(s)}else{s=s.aZ()
s=new J.b6(s,s.length,A.t(s).i("b6<1>"))}return s},
p(a,b){return this.a.F(b)}}
A.hE.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.hD.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.c5.prototype={
gbQ(){return this.a},
e_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=u.n,a1="Invalid base64 encoding length ",a2=a3.length
a5=A.be(a4,a5,a2)
s=$.lt()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.j0(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.j0(a3.charCodeAt(g))
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
if(n>=0)A.lA(a3,m,a5,n,l,r)
else{b=B.d.bX(r-1,4)+1
if(b===1)throw A.a(A.B(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.aX(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.lA(a3,m,a5,n,l,a)
else{b=B.d.bX(a,4)
if(b===1)throw A.a(A.B(a1,a3,a5))
if(b>1)a3=B.a.aX(a3,a5,a5,b===2?"==":"=")}return a3},
aW(a){return this.e_(a,0,null)}}
A.dR.prototype={
aF(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.hk(this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":u.n).fR(a,0,s,!0)
s.toString
return A.df(s,0,null)}}
A.hk.prototype={
fR(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.bp(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.oJ(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.f9.prototype={
aF(a){var s,r,q,p
A.e(a)
s=A.be(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.hj()
q=r.fO(a,0,s)
q.toString
p=r.a
if(p<-1)A.E(A.B("Missing padding character",a,s))
if(p>0)A.E(A.B("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.hj.prototype={
fO(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.m6(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.oG(a,b,c,q)
r.a=A.oI(a,b,c,s,0,r.a)
return s}}
A.aI.prototype={}
A.dV.prototype={}
A.dY.prototype={}
A.cY.prototype={
n(a){var s=A.dZ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.e8.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.e7.prototype={
aa(a,b){var s=A.pR(a,this.gfQ().a)
return s},
ad(a,b){var s=A.oP(a,this.gbQ().b,null)
return s},
gbQ(){return B.cr},
gfQ(){return B.cq}}
A.fE.prototype={}
A.fD.prototype={}
A.hs.prototype={
eb(a){var s,r,q,p,o,n,m=a.length
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
c3(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.e8(a,null))}B.b.t(s,a)},
bV(a){var s,r,q,p,o=this
if(o.ea(a))return
o.c3(a)
try{s=o.b.$1(a)
if(!o.ea(s)){q=A.lP(a,null,o.gdq())
throw A.a(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.c3(p)
q=A.lP(a,r,o.gdq())
throw A.a(q)}},
ea(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.cn.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.eb(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c3(a)
q.hf(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c3(a)
r=q.hg(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
hf(a){var s,r,q=this.c
q.a+="["
s=J.C(a)
if(s.gb4(a)){this.bV(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bV(s.h(a,r))}}q.a+="]"},
hg(a){var s,r,q,p,o,n,m=this,l={}
if(a.gL(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aT(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.an(0,new A.ht(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.eb(A.e(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.bV(r[n])}p.a+="}"
return!0}}
A.ht.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.j(s,r.a++,a)
B.b.j(s,r.a++,b)},
$S:18}
A.hr.prototype={
gdq(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ez.prototype={
ct(a){t.L.a(a)
return B.cJ.aF(a)}}
A.h6.prototype={
aF(a){var s,r,q,p,o,n
A.e(a)
s=a.length
r=A.be(0,null,s)
if(r===0)return new Uint8Array(0)
q=r*3
p=new Uint8Array(q)
o=new A.hF(p)
if(o.eL(a,0,r)!==r){n=r-1
if(!(n>=0&&n<s))return A.b(a,n)
o.cp()}return new Uint8Array(p.subarray(0,A.mG(0,o.b,q)))}}
A.hF.prototype={
cp(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
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
fJ(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cp()
return!1}},
eL(a,b,c){var s,r,q,p,o,n,m,l,k=this
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
if(k.fJ(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cp()}else if(n<=2047){m=k.b
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
A.h5.prototype={
aF(a){return new A.hC(this.a).eB(t.L.a(a),0,null,!0)}}
A.hC.prototype={
eB(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.be(b,c,J.a7(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.pg(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.pf(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c6(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.ph(o)
l.b=0
throw A.a(A.B(m,a,p+l.c))}return n},
c6(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.bp(b+c,2)
r=q.c6(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c6(a,s,c,d)}return q.fP(a,b,c,d)},
fP(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.Y(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.df(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.A(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.hn.prototype={
n(a){return this.bi()}}
A.S.prototype={}
A.c4.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dZ(s)
return"Assertion failed"}}
A.dh.prototype={}
A.aZ.prototype={
gc9(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gc9()+q+o
if(!s.a)return n
return n+s.gc8()+": "+A.dZ(s.gcF())},
gcF(){return this.b}}
A.ch.prototype={
gcF(){return A.mF(this.b)},
gc9(){return"RangeError"},
gc8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.e_.prototype={
gcF(){return A.V(this.b)},
gc9(){return"RangeError"},
gc8(){if(A.V(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.dj.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.et.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.cl.prototype={
n(a){return"Bad state: "+this.a}}
A.dU.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dZ(s)+"."}}
A.ed.prototype={
n(a){return"Out of Memory"},
$iS:1}
A.dd.prototype={
n(a){return"Stack Overflow"},
$iS:1}
A.eI.prototype={
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
gdX(){return this.a}}
A.f.prototype={
ac(a,b,c){var s=A.j(this)
return A.fN(this,s.a8(c).i("1(f.E)").a(b),s.i("f.E"),c)},
aJ(a,b){var s=A.j(this)
return new A.q(this,s.i("k(f.E)").a(b),s.i("q<f.E>"))},
p(a,b){var s
for(s=this.gq(this);s.l();)if(J.u(s.gm(),b))return!0
return!1},
bT(a,b,c,d){var s,r
d.a(b)
A.j(this).a8(d).i("1(1,f.E)").a(c)
for(s=this.gq(this),r=b;s.l();)r=c.$2(r,s.gm())
return r},
aO(a,b){var s
A.j(this).i("k(f.E)").a(b)
for(s=this.gq(this);s.l();)if(!b.$1(s.gm()))return!1
return!0},
V(a,b){var s,r,q=this.gq(this)
if(!q.l())return""
s=J.am(q.gm())
if(!q.l())return s
if(b.length===0){r=s
do r+=J.am(q.gm())
while(q.l())}else{r=s
do r=r+b+J.am(q.gm())
while(q.l())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.j(this).i("k(f.E)").a(b)
for(s=this.gq(this);s.l();)if(b.$1(s.gm()))return!0
return!1},
aS(a,b){var s=A.o(this,A.j(this).i("f.E"))
return s},
aR(a){return this.aS(0,!0)},
gk(a){var s,r=this.gq(this)
for(s=0;r.l();)++s
return s},
gL(a){return!this.gq(this).l()},
gb4(a){return!this.gL(this)},
ao(a,b){return A.or(this,b,A.j(this).i("f.E"))},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.a2())
return s.gm()},
gJ(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.a2())
do s=r.gm()
while(r.l())
return s},
bS(a,b){var s,r
A.j(this).i("k(f.E)").a(b)
for(s=this.gq(this);s.l();){r=s.gm()
if(b.$1(r))return r}throw A.a(A.a2())},
T(a,b){var s,r
A.ae(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.a(A.e0(b,b-r,this,null,"index"))},
n(a){return A.of(this,"(",")")}}
A.M.prototype={
n(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.bd.prototype={
gY(a){return A.v.prototype.gY.call(this,0)},
n(a){return"null"}}
A.v.prototype={$iv:1,
S(a,b){return this===b},
gY(a){return A.ei(this)},
n(a){return"Instance of '"+A.ej(this)+"'"},
gaM(a){return A.iY(this)},
toString(){return this.n(this)}}
A.Y.prototype={
gk(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iow:1}
A.h4.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.e(b)
s=B.a.aq(b,"=")
if(s===-1){if(b!=="")a.j(0,A.al(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.v(b,0,s)
q=B.a.D(b,s+1)
p=this.a
a.j(0,A.al(r,0,r.length,p,!0),A.al(q,0,q.length,p,!0))}return a},
$S:40}
A.h3.prototype={
$2(a,b){throw A.a(A.B("Illegal IPv6 address, "+a,this.a,b))},
$S:42}
A.dE.prototype={
gdD(){var s,r,q,p,o=this,n=o.w
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
gh4(){var s,r,q,p=this,o=p.x
if(o===$){s=p.e
r=s.length
if(r!==0){if(0>=r)return A.b(s,0)
r=s.charCodeAt(0)===47}else r=!1
if(r)s=B.a.D(s,1)
q=s.length===0?B.cu:A.kD(new A.H(A.c(s.split("/"),t.s),t.dO.a(A.qn()),t.do),t.N)
p.x!==$&&A.k1()
o=p.x=q}return o},
gY(a){var s,r=this,q=r.y
if(q===$){s=B.a.gY(r.gdD())
r.y!==$&&A.k1()
r.y=s
q=s}return q},
ge1(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.m5(s==null?"":s)
r.z!==$&&A.k1()
q=r.z=new A.b1(s,t.dw)}return q},
ge2(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.p9(s==null?"":s)
q.Q!==$&&A.k1()
q.Q=r
p=r}return p},
gaA(){return this.b},
gaH(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.a4(s,"v",1))return B.a.v(s,1,s.length-1)
return s},
gbx(){var s=this.d
return s==null?A.mm(this.a):s},
gb5(){var s=this.f
return s==null?"":s},
gb1(){var s=this.r
return s==null?"":s},
fZ(a){var s=this.a
if(a.length!==s.length)return!1
return A.pq(a,s,0)>=0},
e5(a){var s,r,q,p,o,n,m,l=this
a=A.kQ(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.hA(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.u(o,"/"))o="/"+o
m=o
return A.dF(a,r,p,q,m,l.f,l.r)},
de(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.a.a4(b,"../",r);){r+=3;++s}q=B.a.bb(a,"/")
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
q=o}return B.a.aX(a,q+1,null,B.a.D(b,r-3*s))},
e7(a){return this.by(A.ex(a,0,null))},
by(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gak().length!==0)return a
else{s=h.a
if(a.gcB()){r=a.e5(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gdO())m=a.gbt()?a.gb5():h.f
else{l=A.pe(h,n)
if(l>0){k=B.a.v(n,0,l)
n=a.gcA()?k+A.bW(a.gar()):k+A.bW(h.de(B.a.D(n,k.length),a.gar()))}else if(a.gcA())n=A.bW(a.gar())
else if(n.length===0)if(p==null)n=s.length===0?a.gar():A.bW(a.gar())
else n=A.bW("/"+a.gar())
else{j=h.de(n,a.gar())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.bW(j)
else n=A.kS(j,!r||p!=null)}m=a.gbt()?a.gb5():null}}}i=a.gcC()?a.gb1():null
return A.dF(s,q,p,o,n,m,i)},
gcB(){return this.c!=null},
gbt(){return this.f!=null},
gcC(){return this.r!=null},
gdO(){return this.e.length===0},
gcA(){return B.a.u(this.e,"/")},
cM(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.a(A.N("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.a(A.N(u.y))
q=r.r
if((q==null?"":q)!=="")throw A.a(A.N(u.l))
if(r.c!=null&&r.gaH()!=="")A.E(A.N(u.j))
s=r.gh4()
A.p7(s,!1)
q=A.kH(B.a.u(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
n(a){return this.gdD()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gak())if(p.c!=null===b.gcB())if(p.b===b.gaA())if(p.gaH()===b.gaH())if(p.gbx()===b.gbx())if(p.e===b.gar()){r=p.f
q=r==null
if(!q===b.gbt()){if(q)r=""
if(r===b.gb5()){r=p.r
q=r==null
if(!q===b.gcC()){s=q?"":r
s=s===b.gb1()}}}}return s},
$iev:1,
gak(){return this.a},
gar(){return this.e}}
A.hB.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.al(s,a,c,r,!0)
p=""}else{q=A.al(s,a,b,r,!0)
p=A.al(s,b+1,c,r,!0)}J.kq(this.c.h5(q,A.qo()),p)},
$S:43}
A.h2.prototype={
ge9(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.af(s,"?",m)
q=s.length
if(r>=0){p=A.dG(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.eG("data","",n,n,A.dG(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.aO.prototype={
gcB(){return this.c>0},
gcD(){return this.c>0&&this.d+1<this.e},
gbt(){return this.f<this.r},
gcC(){return this.r<this.a.length},
gcA(){return B.a.a4(this.a,"/",this.e)},
gdO(){return this.e===this.f},
gak(){var s=this.w
return s==null?this.w=this.ez():s},
ez(){var s,r=this,q=r.b
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
gbx(){var s,r=this
if(r.gcD())return A.cC(B.a.v(r.a,r.d+1,r.e),null,null)
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gar(){return B.a.v(this.a,this.e,this.f)},
gb5(){var s=this.f,r=this.r
return s<r?B.a.v(this.a,s+1,r):""},
gb1(){var s=this.r,r=this.a
return s<r.length?B.a.D(r,s+1):""},
ge1(){if(this.f>=this.r)return B.cv
return new A.b1(A.m5(this.gb5()),t.dw)},
ge2(){if(this.f>=this.r)return B.am
var s=A.mx(this.gb5())
s.e8(A.n4())
return A.lG(s,t.N,t.a)},
da(a){var s=this.d+1
return s+a.length===this.e&&B.a.a4(this.a,a,s)},
ha(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.aO(B.a.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
e5(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.kQ(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.v(h.a,h.b+3,q):""
o=h.gcD()?h.gbx():g
if(s)o=A.hA(o,a)
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
return A.dF(a,p,n,o,l,j,i)},
e7(a){return this.by(A.ex(a,0,null))},
by(a){if(a instanceof A.aO)return this.fw(this,a)
return this.dE().by(a)},
fw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.u(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.u(a.a,"http"))p=!b.da("80")
else p=!(r===5&&B.a.u(a.a,"https"))||!b.da("443")
if(p){o=r+1
return new A.aO(B.a.v(a.a,0,o)+B.a.D(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.dE().by(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.aO(B.a.v(a.a,0,r)+B.a.D(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.aO(B.a.v(a.a,0,r)+B.a.D(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.ha()}s=b.a
if(B.a.a4(s,"/",n)){m=a.e
l=A.mf(this)
k=l>0?l:m
o=k-n
return new A.aO(B.a.v(a.a,0,k)+B.a.D(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a4(s,"../",n))n+=3
o=j-n+1
return new A.aO(B.a.v(a.a,0,j)+"/"+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.mf(this)
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
return new A.aO(B.a.v(h,0,i)+d+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
cM(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.u(r.a,"file"))
q=s}else q=!1
if(q)throw A.a(A.N("Cannot extract a file path from a "+r.gak()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.a(A.N(u.y))
throw A.a(A.N(u.l))}if(r.c<r.d)A.E(A.N(u.j))
q=B.a.v(s,r.e,q)
return q},
gY(a){var s=this.x
return s==null?this.x=B.a.gY(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.n(0)},
dE(){var s=this,r=null,q=s.gak(),p=s.gaA(),o=s.c>0?s.gaH():r,n=s.gcD()?s.gbx():r,m=s.a,l=s.f,k=B.a.v(m,s.e,l),j=s.r
l=l<j?s.gb5():r
return A.dF(q,p,o,n,k,l,j<m.length?s.gb1():r)},
n(a){return this.a},
$iev:1}
A.eG.prototype={}
A.dW.prototype={}
A.cd.prototype={
b2(a){var s,r
this.$ti.i("f<1>?").a(a)
for(s=a.gq(a),r=0;s.l();){r=r+J.ad(s.gm())&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cy.prototype={
b2(a){var s,r
this.$ti.i("cy.T?").a(a)
for(s=a.gq(a),r=0;s.l();)r=r+J.ad(s.gm())&2147483647
r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.bN.prototype={}
A.d5.prototype={
t(a,b){this.aw(this.$ti.c.a(b))},
n(a){return A.fz(this,"{","}")},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
sk(a,b){var s,r,q,p,o=this
if(b<0)throw A.a(A.a6("Length "+b+" may not be negative."))
if(b>o.gk(0)&&!o.$ti.c.b(null))throw A.a(A.N("The length can only be increased when the element type is nullable, but the current element type is `"+A.b4(o.$ti.c).n(0)+"`."))
s=b-o.gk(0)
if(s>=0){if(o.a.length<=b)o.fg(b)
o.c=(o.c+s&o.a.length-1)>>>0
return}r=o.c
q=r+s
p=o.a
if(q>=0)B.b.bs(p,q,r,null)
else{q+=p.length
B.b.bs(p,0,r,null)
r=o.a
B.b.bs(r,q,r.length,null)}o.c=q},
h(a,b){var s,r,q,p=this
A.V(b)
if(b<0||b>=p.gk(0))throw A.a(A.a6("Index "+b+" must be in the range [0.."+p.gk(0)+")."))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
j(a,b,c){var s,r=this
r.$ti.c.a(c)
if(b<0||b>=r.gk(0))throw A.a(A.a6("Index "+b+" must be in the range [0.."+r.gk(0)+")."))
s=r.a
B.b.j(s,(r.b+b&s.length-1)>>>0,c)},
aw(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.b.j(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.aT(r*2,null,!1,n.i("1?"))
n=o.a
s=o.b
p=n.length-s
B.b.al(q,0,p,n,s)
B.b.al(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.a=q}},
fK(a){var s,r,q,p,o,n=this
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
fg(a){var s=this,r=A.aT(A.oo(a+B.d.b0(a,1)),null,!1,s.$ti.i("1?"))
s.c=s.fK(r)
s.a=r
s.b=0},
$ix:1,
$if:1,
$ip:1}
A.dv.prototype={}
A.aN.prototype={
j(a,b,c){var s=A.j(this)
s.i("aN.K").a(b)
s.i("aN.V").a(c)
return A.m0()},
I(a,b){return A.m0()}}
A.fa.prototype={
fL(a){var s,r,q=t.d4
A.mY("absolute",A.c([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.av(a)>0&&!s.aV(a)
if(s)return a
s=A.n6()
r=A.c([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.mY("join",r)
return this.h_(new A.dl(r,t.eJ))},
h_(a){var s,r,q,p,o,n,m,l,k,j
t.cs.a(a)
for(s=a.$ti,r=s.i("k(f.E)").a(new A.fb()),q=a.gq(0),s=new A.bk(q,r,s.i("bk<f.E>")),r=this.a,p=!1,o=!1,n="";s.l();){m=q.gm()
if(r.aV(m)&&o){l=A.ee(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.a.v(k,0,r.bd(k,!0))
l.b=n
if(r.bv(n))B.b.j(l.e,0,r.gb6())
n=l.n(0)}else if(r.av(m)>0){o=!r.aV(m)
n=m}else{j=m.length
if(j!==0){if(0>=j)return A.b(m,0)
j=r.cs(m[0])}else j=!1
if(!j)if(p)n+=r.gb6()
n+=m}p=r.bv(m)}return n.charCodeAt(0)==0?n:n},
bg(a,b){var s=A.ee(b,this.a),r=s.d,q=A.t(r),p=q.i("q<1>")
r=A.o(new A.q(r,q.i("k(1)").a(new A.fc()),p),p.i("f.E"))
s.sh3(r)
r=s.b
if(r!=null)B.b.b8(s.d,0,r)
return s.d},
aW(a){var s
if(!this.f_(a))return a
s=A.ee(a,this.a)
s.cJ()
return s.n(0)},
f_(a){var s,r,q,p,o,n,m,l=this.a,k=l.av(a)
if(k!==0){if(l===$.f6())for(s=a.length,r=0;r<k;++r){if(!(r<s))return A.b(a,r)
if(a.charCodeAt(r)===47)return!0}q=k
p=47}else{q=0
p=null}for(s=a.length,r=q,o=null;r<s;++r,o=p,p=n){if(!(r>=0))return A.b(a,r)
n=a.charCodeAt(r)
if(l.aP(n)){if(l===$.f6()&&n===47)return!0
if(p!=null&&l.aP(p))return!0
if(p===46)m=o==null||o===46||l.aP(o)
else m=!1
if(m)return!0}}if(p==null)return!0
if(l.aP(p))return!0
if(p===46)l=o==null||l.aP(o)||o===46
else l=!1
if(l)return!0
return!1},
h8(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.av(a)
if(i<=0)return l.aW(a)
s=A.n6()
if(j.av(s)<=0&&j.av(a)>0)return l.aW(a)
if(j.av(a)<=0||j.aV(a))a=l.fL(a)
if(j.av(a)<=0&&j.av(s)>0)throw A.a(A.lT(k+a+'" from "'+s+'".'))
r=A.ee(s,j)
r.cJ()
q=A.ee(a,j)
q.cJ()
i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]==="."}else i=!1
if(i)return q.n(0)
i=r.b
p=q.b
if(i!=p)i=i==null||p==null||!j.cL(i,p)
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
n=j.cL(i,n[0])
i=n}else i=o}else i=o
if(!i)break
B.b.bc(r.d,0)
B.b.bc(r.e,1)
B.b.bc(q.d,0)
B.b.bc(q.e,1)}i=r.d
p=i.length
if(p!==0){if(0>=p)return A.b(i,0)
i=i[0]===".."}else i=!1
if(i)throw A.a(A.lT(k+a+'" from "'+s+'".'))
i=t.N
B.b.cE(q.d,0,A.aT(p,"..",!1,i))
B.b.j(q.e,0,"")
B.b.cE(q.e,1,A.aT(r.d.length,j.gb6(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&B.b.gJ(j)==="."){B.b.e3(q.d)
j=q.e
if(0>=j.length)return A.b(j,-1)
j.pop()
if(0>=j.length)return A.b(j,-1)
j.pop()
B.b.t(j,"")}q.b=""
q.e4()
return q.n(0)},
e0(a){var s,r,q=this,p=A.mP(a)
if(p.gak()==="file"&&q.a===$.dO())return p.n(0)
else if(p.gak()!=="file"&&p.gak()!==""&&q.a!==$.dO())return p.n(0)
s=q.aW(q.a.cK(A.mP(p)))
r=q.h8(s)
return q.bg(0,r).length>q.bg(0,s).length?s:r}}
A.fb.prototype={
$1(a){return A.e(a)!==""},
$S:0}
A.fc.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ib.prototype={
$1(a){A.bX(a)
return a==null?"null":'"'+a+'"'},
$S:36}
A.cc.prototype={
ec(a){var s,r=this.av(a)
if(r>0)return B.a.v(a,0,r)
if(this.aV(a)){if(0>=a.length)return A.b(a,0)
s=a[0]}else s=null
return s},
cL(a,b){return a===b}}
A.fO.prototype={
e4(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gJ(s)===""))break
B.b.e3(q.d)
s=q.e
if(0>=s.length)return A.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.b.j(s,r-1,"")},
cJ(){var s,r,q,p,o,n,m=this,l=A.c([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o===".."){n=l.length
if(n!==0){if(0>=n)return A.b(l,-1)
l.pop()}else ++q}else B.b.t(l,o)}if(m.b==null)B.b.cE(l,0,A.aT(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.b.t(l,".")
m.d=l
s=m.a
m.e=A.aT(l.length+1,s.gb6(),!0,t.N)
r=m.b
if(r==null||l.length===0||!s.bv(r))B.b.j(m.e,0,"")
r=m.b
if(r!=null&&s===$.f6())m.b=A.J(r,"/","\\")
m.e4()},
n(a){var s,r,q,p,o,n=this.b
n=n!=null?n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.b(q,o)
n=n+q[o]+s[o]}n+=B.b.gJ(q)
return n.charCodeAt(0)==0?n:n},
sh3(a){this.d=t.a.a(a)}}
A.ef.prototype={
n(a){return"PathException: "+this.a},
$iaA:1}
A.h_.prototype={
n(a){return this.gcI()}}
A.eh.prototype={
cs(a){return B.a.p(a,"/")},
aP(a){return a===47},
bv(a){var s,r=a.length
if(r!==0){s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)!==47
r=s}else r=!1
return r},
bd(a,b){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
if(s)return 1
return 0},
av(a){return this.bd(a,!1)},
aV(a){return!1},
cK(a){var s
if(a.gak()===""||a.gak()==="file"){s=a.gar()
return A.al(s,0,s.length,B.e,!1)}throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))},
gcI(){return"posix"},
gb6(){return"/"}}
A.ey.prototype={
cs(a){return B.a.p(a,"/")},
aP(a){return a===47},
bv(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)!==47)return!0
return B.a.aG(a,"://")&&this.av(a)===r},
bd(a,b){var s,r,q,p=a.length
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
p=A.n9(a,q+1)
return p==null?q:p}}return 0},
av(a){return this.bd(a,!1)},
aV(a){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
cK(a){return a.n(0)},
gcI(){return"url"},
gb6(){return"/"}}
A.eA.prototype={
cs(a){return B.a.p(a,"/")},
aP(a){return a===47||a===92},
bv(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
s=a.charCodeAt(s)
return!(s===47||s===92)},
bd(a,b){var s,r,q=a.length
if(q===0)return 0
if(0>=q)return A.b(a,0)
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(q>=2){if(1>=q)return A.b(a,1)
s=a.charCodeAt(1)!==92}else s=!0
if(s)return 1
r=B.a.af(a,"\\",2)
if(r>0){r=B.a.af(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.ni(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
av(a){return this.bd(a,!1)},
aV(a){return this.av(a)===1},
cK(a){var s,r
if(a.gak()!==""&&a.gak()!=="file")throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))
s=a.gar()
if(a.gaH()===""){if(s.length>=3&&B.a.u(s,"/")&&A.n9(s,1)!=null)s=B.a.e6(s,"/","")}else s="\\\\"+a.gaH()+s
r=A.J(s,"/","\\")
return A.al(r,0,r.length,B.e,!1)},
fM(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
cL(a,b){var s,r,q
if(a===b)return!0
s=a.length
r=b.length
if(s!==r)return!1
for(q=0;q<s;++q){if(!(q<r))return A.b(b,q)
if(!this.fM(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gcI(){return"windows"},
gb6(){return"\\"}}
A.fY.prototype={
gk(a){return this.c.length},
gh1(){return this.b.length},
ep(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.c,r=s.length,q=a.a,p=q.length,o=s.$flags|0,n=this.b,m=0;m<r;++m){if(!(m<p))return A.b(q,m)
l=q.charCodeAt(m)
o&2&&A.W(s)
s[m]=l
if(l===13){k=m+1
if(k<p){if(!(k<p))return A.b(q,k)
j=q.charCodeAt(k)!==10}else j=!0
if(j)l=10}if(l===10)B.b.t(n,m+1)}},
bZ(a,b){return A.a_(this,a,b)},
be(a){var s,r=this
if(a<0)throw A.a(A.a6("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.a(A.a6("Offset "+a+u.s+r.gk(0)+"."))
s=r.b
if(a<B.b.gU(s))return-1
if(a>=B.b.gJ(s))return s.length-1
if(r.eR(a)){s=r.d
s.toString
return s}return r.d=r.ew(a)-1},
eR(a){var s,r,q,p=this.d
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
ew(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.d.bp(o-s,2)
if(!(r>=0&&r<p))return A.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
bW(a){var s,r,q,p=this
if(a<0)throw A.a(A.a6("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.a(A.a6("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gk(0)+"."))
s=p.be(a)
r=p.b
if(!(s>=0&&s<r.length))return A.b(r,s)
q=r[s]
if(q>a)throw A.a(A.a6("Line "+s+" comes after offset "+a+"."))
return a-q},
bz(a){var s,r,q,p
if(a<0)throw A.a(A.a6("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.a(A.a6("Line "+a+" must be less than the number of lines in the file, "+this.gh1()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.a(A.a6("Line "+a+" doesn't have 0 columns."))
return q}}
A.ca.prototype={
gX(){return this.a.a},
ga6(){return this.a.be(this.b)},
gab(){return this.a.bW(this.b)},
cO(a,b){var s,r=this.b
if(r<0)throw A.a(A.a6("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a6("Offset "+r+u.s+s.gk(0)+"."))}},
bw(){var s=this.b
return A.a_(this.a,s,s)},
gK(){return this.b}}
A.bl.prototype={
gX(){return this.a.a},
gk(a){return this.c-this.b},
gC(){return A.X(this.a,this.b)},
gH(){return A.X(this.a,this.c)},
gai(){return A.df(B.L.c0(this.a.c,this.b,this.c),0,null)},
gaz(){var s=this,r=s.a,q=s.c,p=r.be(q)
if(r.bW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.df(B.L.c0(r.c,r.bz(p),r.bz(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.bz(p+1)
return A.df(B.L.c0(r.c,r.bz(r.be(s.b)),q),0,null)},
c1(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.a(A.a1("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a6("End "+r+u.s+s.gk(0)+"."))
else if(q<0)throw A.a(A.a6("Start may not be negative, was "+q+"."))}},
aC(a,b){var s
t.I.a(b)
if(!(b instanceof A.bl))return this.el(0,b)
s=B.d.aC(this.b,b.b)
return s===0?B.d.aC(this.c,b.c):s},
S(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.bl))return s.ek(0,b)
return s.b===b.b&&s.c===b.c&&J.u(s.a.a,b.a.a)},
gY(a){return A.ec(this.b,this.c,this.a.a,B.n)},
ap(a,b){var s,r=this,q=r.a
if(!J.u(q.a,b.a.a))throw A.a(A.a1('Source URLs "'+A.m(r.gX())+'" and  "'+A.m(b.gX())+"\" don't match."))
s=Math.min(r.b,b.b)
return A.a_(q,s,Math.max(r.c,b.c))},
$io8:1,
$ibh:1}
A.fd.prototype={
fX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.dL(B.b.gU(a0).c)
s=a.e
r=A.aT(s,null,!1,t.gS)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=n.c
if(!J.u(m.c,l)){a.bM("\u2575")
q.a+="\n"
a.dL(l)}else if(m.b+1!==n.b){a.fI("...")
q.a+="\n"}}for(l=n.d,k=A.t(l).i("d7<1>"),j=new A.d7(l,k),j=new A.a3(j,j.gk(0),k.i("a3<y.E>")),k=k.i("y.E"),i=n.b,h=n.a;j.l();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gC().ga6()!==f.gH().ga6()&&f.gC().ga6()===i&&a.eT(B.a.v(h,0,f.gC().gab()))){e=B.b.aq(r,null)
if(e<0)A.E(A.a1(A.m(r)+" contains no null elements."))
B.b.j(r,e,g)}}a.fH(i)
q.a+=" "
a.fG(n,r)
if(s)q.a+=" "
d=B.b.b3(l,new A.fy())
if(d===-1)c=null
else{if(!(d>=0&&d<l.length))return A.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gC().ga6()===i?j.gC().gab():0
a.fE(h,g,j.gH().ga6()===i?j.gH().gab():h.length,p)}else a.bO(h)
q.a+="\n"
if(k)a.fF(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.bM("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
dL(a){var s,r,q=this
if(!q.f||!t.k.b(a))q.bM("\u2577")
else{q.bM("\u250c")
q.aB(new A.fl(q),"\x1b[34m",t.n)
s=q.r
r=" "+$.lv().e0(a)
s.a+=r}q.r.a+="\n"},
bL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
t.E.a(b)
e.a=!1
e.b=null
s=c==null
if(s)r=null
else r=f.b
for(q=b.length,p=t.b,o=f.b,s=!s,n=f.r,m=t.n,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
h=i?null:j.a.gC().ga6()
g=i?null:j.a.gH().ga6()
if(s&&j===c){f.aB(new A.fs(f,h,a),r,p)
l=!0}else if(l)f.aB(new A.ft(f,j),r,p)
else if(i)if(e.a)f.aB(new A.fu(f),e.b,m)
else n.a+=" "
else f.aB(new A.fv(e,f,c,h,a,j,g),o,p)}},
fG(a,b){return this.bL(a,b,null)},
fE(a,b,c,d){var s=this
s.bO(B.a.v(a,0,b))
s.aB(new A.fm(s,a,b,c),d,t.n)
s.bO(B.a.v(a,c,a.length))},
fF(a,b,c){var s,r,q,p=this
t.E.a(c)
s=p.b
r=b.a
if(r.gC().ga6()===r.gH().ga6()){p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
if(c.length!==0)r.a+=" "
p.dM(b,c,p.aB(new A.fn(p,a,b),s,t.p))}else{q=a.b
if(r.gC().ga6()===q){if(B.b.p(c,b))return
A.rs(c,b,t.C)
p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
p.aB(new A.fo(p,a,b),s,t.n)
r.a+="\n"}else if(r.gH().ga6()===q){r=r.gH().gab()
if(r===a.a.length){A.nq(c,b,t.C)
return}p.cq()
p.r.a+=" "
p.bL(a,c,b)
p.dM(b,c,p.aB(new A.fp(p,!1,a,b),s,t.p))
A.nq(c,b,t.C)}}},
dK(a,b,c){var s=c?0:1,r=this.r
s=B.a.aj("\u2500",1+b+this.c5(B.a.v(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
fD(a,b){return this.dK(a,b,!0)},
dM(a,b,c){t.E.a(b)
this.r.a+="\n"
return},
bO(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a3(s,s.gk(0),r.i("a3<r.E>")),q=this.r,r=r.i("r.E");s.l();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aj(" ",4)
else{p=A.A(p)
q.a+=p}}},
bN(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.d.n(b+1)
this.aB(new A.fw(s,this,a),"\x1b[34m",t.b)},
bM(a){return this.bN(a,null,null)},
fI(a){return this.bN(null,null,a)},
fH(a){return this.bN(null,a,null)},
cq(){return this.bN(null,null,null)},
c5(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a3(s,s.gk(0),r.i("a3<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
eT(a){var s,r,q
for(s=new A.aH(a),r=t.V,s=new A.a3(s,s.gk(0),r.i("a3<r.E>")),r=r.i("r.E");s.l();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
aB(a,b,c){var s,r
c.i("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.fx.prototype={
$0(){return this.a},
$S:71}
A.ff.prototype={
$1(a){var s=t.A.a(a).d,r=A.t(s)
return new A.q(s,r.i("k(1)").a(new A.fe()),r.i("q<1>")).gk(0)},
$S:65}
A.fe.prototype={
$1(a){var s=t.C.a(a).a
return s.gC().ga6()!==s.gH().ga6()},
$S:10}
A.fg.prototype={
$1(a){return t.A.a(a).c},
$S:34}
A.fi.prototype={
$1(a){var s=t.C.a(a).a.gX()
return s==null?new A.v():s},
$S:35}
A.fj.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aC(0,s.a(b).a)},
$S:39}
A.fk.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.aS.a(a0)
s=a0.a
r=a0.b
q=A.c([],t.ef)
for(p=J.a4(r),o=p.gq(r),n=t.r;o.l();){m=o.gm().a
l=m.gaz()
k=A.iT(l,m.gai(),m.gC().gab())
k.toString
j=B.a.bq("\n",B.a.v(l,0,k)).gk(0)
i=m.gC().ga6()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.b.gJ(q).b)B.b.t(q,new A.aF(g,i,s,A.c([],n)));++i}}f=A.c([],n)
for(o=q.length,n=t.as,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.a8)(q),++h){g=q[h]
m=n.a(new A.fh(g))
e&1&&A.W(f,16)
B.b.dt(f,m,!0)
c=f.length
for(m=p.ao(r,d),k=m.$ti,m=new A.a3(m,m.gk(0),k.i("a3<y.E>")),b=g.b,k=k.i("y.E");m.l();){a=m.d
if(a==null)a=k.a(a)
if(a.a.gC().ga6()>b)break
B.b.t(f,a)}d+=f.length-c
B.b.a9(g.d,f)}return q},
$S:57}
A.fh.prototype={
$1(a){return t.C.a(a).a.gH().ga6()<this.a.b},
$S:10}
A.fy.prototype={
$1(a){t.C.a(a)
return!0},
$S:10}
A.fl.prototype={
$0(){this.a.r.a+=B.a.aj("\u2500",2)+">"
return null},
$S:8}
A.fs.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:5}
A.ft.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:5}
A.fu.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:8}
A.fv.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aB(new A.fq(p,s),p.b,t.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gH().gab()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aB(new A.fr(r,o),p.b,t.b)}}},
$S:5}
A.fq.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:5}
A.fr.prototype={
$0(){this.a.r.a+=this.b},
$S:5}
A.fm.prototype={
$0(){var s=this
return s.a.bO(B.a.v(s.b,s.c,s.d))},
$S:8}
A.fn.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gC().gab(),l=n.gH().gab()
n=this.b.a
s=q.c5(B.a.v(n,0,m))
r=q.c5(B.a.v(n,m,l))
m+=s*3
n=(p.a+=B.a.aj(" ",m))+B.a.aj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:17}
A.fo.prototype={
$0(){return this.a.fD(this.b,this.c.a.gC().gab())},
$S:8}
A.fp.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aj("\u2500",3)
else r.dK(s.c,Math.max(s.d.a.gH().gab()-1,0),!1)
return q.a.length-p.length},
$S:17}
A.fw.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.h2(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:5}
A.af.prototype={
n(a){var s=this.a
s="primary "+(""+s.gC().ga6()+":"+s.gC().gab()+"-"+s.gH().ga6()+":"+s.gH().gab())
return s.charCodeAt(0)==0?s:s}}
A.ho.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.q.b(o)&&A.iT(o.gaz(),o.gai(),o.gC().gab())!=null)){s=A.bJ(o.gC().gK(),0,0,o.gX())
r=o.gH().gK()
q=o.gX()
p=A.qt(o.gai(),10)
o=A.fZ(s,A.bJ(r,A.m9(o.gai()),p,q),o.gai(),o.gai())}return A.oL(A.oN(A.oM(o)))},
$S:38}
A.aF.prototype={
n(a){return""+this.b+': "'+this.a+'" ('+B.b.V(this.d,", ")+")"}}
A.bI.prototype={
cu(a){var s=this.a
if(!J.u(s,a.gX()))throw A.a(A.a1('Source URLs "'+A.m(s)+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gK())},
aC(a,b){var s
t.F.a(b)
s=this.a
if(!J.u(s,b.gX()))throw A.a(A.a1('Source URLs "'+A.m(s)+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gK()},
S(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a,b.gX())&&this.b===b.gK()},
gY(a){var s=this.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=this,r=A.iY(s).n(0),q=s.a
return"<"+r+": "+s.b+" "+(A.m(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
gX(){return this.a},
gK(){return this.b},
ga6(){return this.c},
gab(){return this.d}}
A.em.prototype={
cu(a){if(!J.u(this.a.a,a.gX()))throw A.a(A.a1('Source URLs "'+A.m(this.gX())+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gK())},
aC(a,b){t.F.a(b)
if(!J.u(this.a.a,b.gX()))throw A.a(A.a1('Source URLs "'+A.m(this.gX())+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gK()},
S(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a.a,b.gX())&&this.b===b.gK()},
gY(a){var s=this.a.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=A.iY(this).n(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.m(p==null?"unknown source":p)+":"+(q.be(r)+1)+":"+(q.bW(r)+1))+">"},
$ibI:1}
A.dc.prototype={
cP(a,b,c){var s,r=this.b,q=this.a
if(!J.u(r.gX(),q.gX()))throw A.a(A.a1('Source URLs "'+A.m(q.gX())+'" and  "'+A.m(r.gX())+"\" don't match."))
else if(r.gK()<q.gK())throw A.a(A.a1("End "+r.n(0)+" must come after start "+q.n(0)+"."))
else{s=this.c
if(s.length!==q.cu(r))throw A.a(A.a1('Text "'+s+'" must be '+q.cu(r)+" characters long."))}},
gC(){return this.a},
gH(){return this.b},
gai(){return this.c}}
A.en.prototype={
gdX(){return this.a},
n(a){return"Error on "+this.b.dZ(this.a,null)},
$iaA:1}
A.eo.prototype={$ii:1}
A.ck.prototype={
gX(){return this.gC().gX()},
gk(a){return this.gH().gK()-this.gC().gK()},
aC(a,b){var s
t.I.a(b)
s=this.gC().aC(0,b.gC())
return s===0?this.gH().aC(0,b.gH()):s},
dZ(a,b){var s,r,q,p=this,o="line "+(p.gC().ga6()+1)+", column "+(p.gC().gab()+1)
if(p.gX()!=null){s=p.gX()
r=$.lv()
s.toString
s=o+(" of "+r.e0(s))
o=s}o+=": "+a
q=p.fY(b)
if(q.length!==0)o=o+"\n"+q
return o.charCodeAt(0)==0?o:o},
dY(a){return this.dZ(a,null)},
fY(a){var s=this
if(!t.q.b(s)&&s.gk(s)===0)return""
return A.o9(s,a).fX()},
S(a,b){if(b==null)return!1
return b instanceof A.ck&&this.gC().S(0,b.gC())&&this.gH().S(0,b.gH())},
gY(a){return A.ec(this.gC(),this.gH(),B.n,B.n)},
n(a){var s=this
return"<"+A.iY(s).n(0)+": from "+s.gC().n(0)+" to "+s.gH().n(0)+' "'+s.gai()+'">'},
$icj:1}
A.bh.prototype={
gaz(){return this.d}}
A.dX.prototype={
a0(a){var s,r=this
if(a!==10)s=a===13&&r.W()!==10
else s=!0
if(s){++r.as
r.at=0}else{s=r.at
r.at=s+(a>=65536&&a<=1114111?2:1)}},
bA(a){var s,r,q,p,o=this
if(!o.en(a))return!1
s=o.gcH()
r=s.c
q=o.f0(r)
s=o.as
p=q.length
o.as=s+p
s=r.length
if(p===0)o.at+=s
else o.at=s-B.b.gJ(q).gH()
return!0},
f0(a){var s=$.nO().bq(0,a),r=A.o(s,A.j(s).i("f.E"))
if(this.P(-1)===13&&this.W()===10){if(0<0||0>=r.length)return A.b(r,-1)
r.pop()}return r}}
A.ap.prototype={$ioi:1}
A.de.prototype={}
A.ep.prototype={
gaD(){var s=A.X(this.f,this.c),r=s.b
return A.a_(s.a,r,r)},
c_(a,b){var s=b==null?this.c:b.b
return this.f.bZ(a.b,s)},
am(a){return this.c_(a,null)},
aI(a){var s,r,q=this
if(!q.em(a))return!1
s=q.c
r=q.gcH()
q.f.bZ(s,r.a+r.c.length)
return!0},
cz(a,b,c){var s,r,q=this,p=q.b
A.rO(p,null,c,b)
s=c==null&&b==null?q.gcH():null
if(c==null)c=s==null?q.c:s.a
if(b==null)if(s==null)b=0
else{r=s.a
b=r+s.c.length-r}throw A.a(A.ov(a,q.f.bZ(c,c+b),p))},
cw(a,b){return this.cz(a,b,null)},
fT(a){return this.cz(a,null,null)}}
A.er.prototype={
gcH(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
h6(){var s,r=this,q=r.b,p=q.length
if(r.c===p)r.cX("more input")
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
bA(a){var s,r=this,q=r.aI(a)
if(q){s=r.d
r.e=r.c=s.a+s.c.length}return q},
bR(a){var s,r
if(this.bA(a))return
s=A.J(a,"\\","\\\\")
r='"'+A.J(s,'"','\\"')+'"'
this.cX(r)},
aI(a){var s=this,r=B.a.bu(a,s.b,s.c)
s.d=r
s.e=s.c
return r!=null},
D(a,b){var s=this.c
return B.a.v(this.b,b,s)},
cX(a){this.cz("expected "+a+".",0,this.c)}}
A.hm.prototype={
cv(a,b){var s,r,q,p,o,n,m,l,k,j=this
a=a
b=b
s=t.m
if(s.b(a))a=a.ga7()
if(s.b(b))b=b.ga7()
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
if(r.b(a)&&r.b(b)){r=j.eU(a,b)
return r}else{r=t.f
if(r.b(a)&&r.b(b)){r=j.eY(a,b)
return r}else if(typeof a=="number"&&typeof b=="number"){r=j.f1(a,b)
return r}else{r=J.u(a,b)
return r}}}finally{if(0>=s.length)return A.b(s,-1)
s.pop()
if(0>=q.length)return A.b(q,-1)
q.pop()}},
eU(a,b){var s,r=J.C(a),q=J.C(b)
if(r.gk(a)!==q.gk(b))return!1
for(s=0;s<r.gk(a);++s)if(!this.cv(r.h(a,s),q.h(b,s)))return!1
return!0},
eY(a,b){var s,r
if(a.gk(a)!==b.gk(b))return!1
for(s=a.gE(),s=s.gq(s);s.l();){r=s.gm()
if(!b.F(r))return!1
if(!this.cv(a.h(0,r),b.h(0,r)))return!1}return!0},
f1(a,b){if(isNaN(a)&&isNaN(b))return!0
return a===b}}
A.iF.prototype={
$1(a){var s,r,q,p=this
if(!p.a.t(0,a))return-1
try{if(t.f.b(a)){s=B.aQ
r=t.X
q=s.b2(a.gE().ac(0,p,r))
r=s.b2(a.gag().ac(0,p,r))
return q^r}else if(t.R.b(a)){r=B.aI.b2(J.aR(a,p,t.X))
return r}else if(t.m.b(a)){r=J.ad(a.ga7())
return r}else{r=J.ad(a)
return r}}finally{p.a.I(0,a)}},
$S:6}
A.ab.prototype={
n(a){return this.a.bi()},
gB(){return this.a},
gA(){return this.b}}
A.cO.prototype={
gB(){return B.aT},
n(a){return"DOCUMENT_START"},
$iab:1,
gA(){return this.a}}
A.c7.prototype={
gB(){return B.aU},
n(a){return"DOCUMENT_END"},
$iab:1,
gA(){return this.a}}
A.cG.prototype={
gB(){return B.a9},
n(a){return"ALIAS "+this.b},
$iab:1,
gA(){return this.a}}
A.dH.prototype={
n(a){var s=this,r=s.gB().n(0)
if(s.gbP()!=null)r+=" &"+A.m(s.gbP())
if(s.gbU()!=null)r+=" "+A.m(s.gbU())
return r.charCodeAt(0)==0?r:r},
$iab:1}
A.ai.prototype={
gB(){return B.aa},
n(a){return this.eo(0)+' "'+this.d+'"'},
gA(){return this.a},
gbP(){return this.b},
gbU(){return this.c}}
A.bH.prototype={
gB(){return B.ab},
gA(){return this.a},
gbP(){return this.b},
gbU(){return this.c}}
A.bF.prototype={
gB(){return B.ac},
gA(){return this.a},
gbP(){return this.b},
gbU(){return this.c}}
A.aK.prototype={
bi(){return"EventType."+this.b}}
A.fK.prototype={
dW(){var s,r,q=this,p=q.a
if(p.c===B.a0)return null
s=p.aQ()
if(s.gB()===B.a8){q.d=q.d.ap(0,s.gA())
return null}t.dg.a(s)
r=q.bH(p.aQ())
p=s.a.ap(0,t.gR.a(p.aQ()).a)
q.d=q.d.ap(0,p)
q.b.br(0)
return new A.eB(r,p)},
bH(a){var s,r,q=this,p=a.gB()
A:{if(B.a9===p){s=q.eV(t.a6.a(a))
break A}if(B.aa===p){t.fy.a(a)
s=a.c
if(s==="!")r=new A.ao(a.d,a.e,a.a)
else if(s!=null)r=q.f3(a)
else{r=q.fC(a)
if(r==null)r=new A.ao(a.d,a.e,a.a)}q.cj(a.b,r)
s=r
break A}if(B.ab===p){s=q.eX(t.fP.a(a))
break A}if(B.ac===p){s=q.eW(t.fY.a(a))
break A}s=A.E(A.bi("Unreachable"))}return s},
cj(a,b){if(a==null)return
this.b.j(0,a,b)},
eV(a){var s=a.b,r=this.b.h(0,s)
if(r!=null){if(this.c.p(0,s))throw A.a(A.G("Self-referential collections are not supported.",a.a))
return r}throw A.a(A.G("Undefined alias.",a.a))},
eX(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c
if(i!=="!"&&i!=null&&i!=="tag:yaml.org,2002:seq")throw A.a(A.G("Invalid tag for sequence.",a.a))
s=A.c([],t.fT)
i=a.a
m=new A.bO(new A.di(s,t.ga),a.d,i)
l=a.b
j.cj(l,m)
r=null
try{q=l
p=null
if(q!=null){p=q
j.c.t(0,p)}k=j.a
r=k.aQ()
while(r.gB()!==B.y){J.kq(s,j.bH(r))
r=k.aQ()}}finally{o=l
n=null
if(o!=null){n=o
j.c.I(0,n)}}m.a=i.ap(0,r.gA())
return m},
eW(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.c
if(g!=="!"&&g!=null&&g!=="tag:yaml.org,2002:map")throw A.a(A.G("Invalid tag for mapping.",a.a))
s=A.fH(A.qE(),A.qF(),t.z,t.T)
g=a.a
k=new A.bP(new A.b1(s,t.gr),a.d,g)
j=a.b
h.cj(j,k)
r=null
try{q=j
p=null
if(q!=null){p=q
h.c.t(0,p)}i=h.a
r=i.aQ()
while(r.gB()!==B.z){o=h.bH(r)
n=h.bH(i.aQ())
if(s.F(o)){i=A.G("Duplicate mapping key.",o.a)
throw A.a(i)}J.f7(s,o,n)
r=i.aQ()}}finally{m=j
l=null
if(m!=null){l=m
h.c.I(0,l)}}k.a=g.ap(0,r.gA())
return k},
f3(a){var s,r=this,q=a.c
switch(q){case"tag:yaml.org,2002:null":s=r.dm(a)
if(s!=null)return s
throw A.a(A.G("Invalid null scalar.",a.a))
case"tag:yaml.org,2002:bool":s=r.cf(a)
if(s!=null)return s
throw A.a(A.G("Invalid bool scalar.",a.a))
case"tag:yaml.org,2002:int":s=r.fd(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid int scalar.",a.a))
case"tag:yaml.org,2002:float":s=r.fe(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid float scalar.",a.a))
case"tag:yaml.org,2002:str":return new A.ao(a.d,a.e,a.a)
default:throw A.a(A.G("Undefined tag: "+A.m(q)+".",a.a))}},
fC(a){var s,r=this,q=null,p=a.d,o=p.length
if(o===0)return new A.ao(q,a.e,a.a)
if(0>=o)return A.b(p,0)
s=p.charCodeAt(0)
A:{if(46===s||43===s||45===s){p=r.dn(a)
break A}if(110===s||78===s){p=o===4?r.dm(a):q
break A}if(116===s||84===s){p=o===4?r.cf(a):q
break A}if(102===s||70===s){p=o===5?r.cf(a):q
break A}if(126===s){p=o===1?new A.ao(q,a.e,a.a):q
break A}p=s>=48&&s<=57?r.dn(a):q
break A}return p},
dm(a){var s,r=a.d
A:{if(""===r||"null"===r||"Null"===r||"NULL"===r||"~"===r){s=new A.ao(null,a.e,a.a)
break A}s=null
break A}return s},
cf(a){var s,r=a.d
A:{if("true"===r||"True"===r||"TRUE"===r){s=new A.ao(!0,a.e,a.a)
break A}if("false"===r||"False"===r||"FALSE"===r){s=new A.ao(!1,a.e,a.a)
break A}s=null
break A}return s},
cg(a,b,c){var s=this.ff(a.d,b,c)
return s==null?null:new A.ao(s,a.e,a.a)},
dn(a){return this.cg(a,!0,!0)},
fd(a,b){return this.cg(a,b,!0)},
fe(a,b){return this.cg(a,!0,b)},
ff(a,b,c){var s,r,q,p,o,n,m=null,l=a.length
if(0>=l)return A.b(a,0)
s=a.charCodeAt(0)
if(c&&l===1){r=s-48
return r>=0&&r<=9?r:m}if(1>=l)return A.b(a,1)
q=a.charCodeAt(1)
if(c&&s===48){if(q===120)return A.aU(a,m)
if(q===111)return A.aU(B.a.D(a,2),8)}if(!(s>=48&&s<=57))p=(s===43||s===45)&&q>=48&&q<=57
else p=!0
if(p){o=c?A.aU(a,10):m
return b?o==null?A.lW(a):o:o}if(!b)return m
p=s===46
if(!(p&&q>=48&&q<=57))n=(s===45||s===43)&&q===46
else n=!0
if(n){if(l===5)switch(a){case"+.inf":case"+.Inf":case"+.INF":return 1/0
case"-.inf":case"-.Inf":case"-.INF":return-1/0}return A.lW(a)}if(l===4&&p)switch(a){case".inf":case".Inf":case".INF":return 1/0
case".nan":case".NaN":case".NAN":return 0/0}return m}}
A.fP.prototype={
aQ(){var s,r,q,p
try{if(this.c===B.a0){q=A.bi("No more events.")
throw A.a(q)}s=this.fA()
return s}catch(p){q=A.c3(p)
if(q instanceof A.de){r=q
throw A.a(A.G(r.a,r.b))}else throw p}},
fA(){var s,r,q,p=this
switch(p.c){case B.aC:s=p.a.Z()
p.c=B.a_
return new A.ab(B.aS,s.gA())
case B.a_:return p.f6()
case B.ay:return p.f4()
case B.Z:return p.f5()
case B.aw:return p.bk(!0)
case B.cL:return p.bl(!0,!0)
case B.cK:return p.b_()
case B.ax:p.a.Z()
return p.di()
case B.F:return p.di()
case B.H:return p.fc()
case B.av:p.a.Z()
return p.dh()
case B.D:return p.dh()
case B.E:return p.f2()
case B.aB:return p.dl(!0)
case B.a2:return p.f9()
case B.aD:return p.fa()
case B.X:return p.fb()
case B.Y:p.c=B.a2
r=p.a.a1().gA()
r=A.X(r.a,r.b)
q=r.b
return new A.ab(B.z,A.a_(r.a,q,q))
case B.aA:return p.dj(!0)
case B.G:return p.f7()
case B.a1:return p.f8()
case B.az:return p.dk(!0)
default:throw A.a(A.bi("Unreachable"))}},
f6(){var s,r,q,p=this,o=p.a,n=o.a1()
n.toString
for(s=n;s.gB()===B.S;s=n){o.Z()
n=o.a1()
n.toString}if(s.gB()!==B.P&&s.gB()!==B.Q&&s.gB()!==B.R&&s.gB()!==B.w){p.dr()
B.b.t(p.b,B.Z)
p.c=B.aw
o=s.gA()
o=A.X(o.a,o.b)
n=o.b
return A.lJ(A.a_(o.a,n,n),!0,null,null)}if(s.gB()===B.w){p.c=B.a0
o.Z()
return new A.ab(B.a8,s.gA())}r=s.gA()
q=p.dr()
s=o.a1()
if(s.gB()!==B.R)throw A.a(A.G("Expected document start.",s.gA()))
B.b.t(p.b,B.Z)
p.c=B.ay
o.Z()
return A.lJ(r.ap(0,s.gA()),!1,q.b,q.a)},
f4(){var s,r,q=this,p=q.a.a1()
switch(p.gB().a){case 2:case 3:case 4:case 5:case 1:s=q.b
if(0>=s.length)return A.b(s,-1)
q.c=s.pop()
s=p.gA()
s=A.X(s.a,s.b)
r=s.b
return new A.ai(A.a_(s.a,r,r),null,null,"",B.h)
default:return q.bk(!0)}},
f5(){var s,r,q
this.d.br(0)
this.c=B.a_
s=this.a
r=s.a1()
if(r.gB()===B.S){s.Z()
return new A.c7(r.gA(),!1)}else{s=r.gA()
s=A.X(s.a,s.b)
q=s.b
return new A.c7(A.a_(s.a,q,q),!0)}},
bl(a,b){var s,r,q,p,o,n=this,m={},l=n.a,k=l.a1()
k.toString
if(k instanceof A.cH){l.Z()
m=n.b
if(0>=m.length)return A.b(m,-1)
n.c=m.pop()
return new A.cG(k.a,k.b)}m.a=m.b=null
s=k.gA()
s=A.X(s.a,s.b)
r=s.b
m.c=A.a_(s.a,r,r)
r=new A.fQ(m,n)
s=new A.fR(m,n)
if(k instanceof A.bp){q=r.$1(k)
if(q instanceof A.bw)q=s.$1(q)}else if(k instanceof A.bw){q=s.$1(k)
if(q instanceof A.bp)q=r.$1(q)}else q=k
k=m.a
if(k!=null){s=k.b
if(s==null)p=k.c
else{o=n.d.h(0,s)
if(o==null)throw A.a(A.G("Undefined tag handle.",m.a.a))
k=o.b
s=m.a
s=s==null?null:s.c
p=k+(s==null?"":s)}}else p=null
if(b&&q.gB()===B.u){n.c=B.H
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.m)}if(q instanceof A.bu){if(p==null&&q.c!==B.h)p="!"
k=n.b
if(0>=k.length)return A.b(k,-1)
n.c=k.pop()
l.Z()
return new A.ai(m.c.ap(0,q.a),m.b,p,q.b,q.c)}if(q.gB()===B.at){n.c=B.aB
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.f)}if(q.gB()===B.ar){n.c=B.aA
return new A.bF(m.c.ap(0,q.gA()),m.b,p,B.f)}if(a&&q.gB()===B.T){n.c=B.ax
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.m)}if(a&&q.gB()===B.C){n.c=B.av
return new A.bF(m.c.ap(0,q.gA()),m.b,p,B.m)}if(m.b!=null||p!=null){l=n.b
if(0>=l.length)return A.b(l,-1)
n.c=l.pop()
return new A.ai(m.c,m.b,p,"",B.h)}throw A.a(A.G("Expected node content.",m.c))},
bk(a){return this.bl(a,!1)},
b_(){return this.bl(!1,!1)},
di(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()===B.u){s=o.gA()
r=A.X(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.p){q.c=B.F
p=r.b
return new A.ai(A.a_(r.a,p,p),null,null,"",B.h)}else{B.b.t(q.b,B.F)
return q.bk(!0)}}if(o.gB()===B.p){p.Z()
p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
return new A.ab(B.y,o.gA())}if(o.gB()===B.k){p.Z()
B.b.t(q.b,B.F)
return q.bk(!0)}throw A.a(A.G("While parsing a block collection, expected '-'.",o.gA().gC().bw()))},
fc(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()!==B.u){p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
p=o.gA()
p=A.X(p.a,p.b)
s=p.b
return new A.ab(B.y,A.a_(p.a,s,s))}s=o.gA()
r=A.X(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.k||o.gB()===B.l||o.gB()===B.p){q.c=B.H
p=r.b
return new A.ai(A.a_(r.a,p,p),null,null,"",B.h)}else{B.b.t(q.b,B.H)
return q.bk(!0)}},
dh(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()===B.k){s=n.gA()
r=A.X(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.E
o=r.b
return new A.ai(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.E)
return q.bl(!0,!0)}}if(n.gB()===B.l){q.c=B.E
o=n.gA()
o=A.X(o.a,o.b)
s=o.b
return new A.ai(A.a_(o.a,s,s),p,p,"",B.h)}if(n.gB()===B.p){o.Z()
o=q.b
if(0>=o.length)return A.b(o,-1)
q.c=o.pop()
return new A.ab(B.z,n.gA())}throw A.a(A.G("Expected a key while parsing a block mapping.",n.gA().gC().bw()))},
f2(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()!==B.l){q.c=B.D
o=n.gA()
o=A.X(o.a,o.b)
s=o.b
return new A.ai(A.a_(o.a,s,s),p,p,"",B.h)}s=n.gA()
r=A.X(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.D
o=r.b
return new A.ai(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.D)
return q.bl(!0,!0)}},
dl(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.r){if(!a){if(r.gB()!==B.o)throw A.a(A.G("While parsing a flow sequence, expected ',' or ']'.",r.gA().gC().bw()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){p.c=B.aD
s.Z()
return new A.bF(r.gA(),null,null,B.f)}else if(r.gB()!==B.r){B.b.t(p.b,B.a2)
return p.b_()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.y,r.gA())},
f9(){return this.dl(!1)},
fa(){var s,r,q=this,p=q.a.a1()
if(p.gB()===B.l||p.gB()===B.o||p.gB()===B.r){s=p.gA()
r=A.X(s.a,s.b)
q.c=B.X
s=r.b
return new A.ai(A.a_(r.a,s,s),null,null,"",B.h)}else{B.b.t(q.b,B.X)
return q.b_()}},
fb(){var s,r=this,q=r.a,p=q.a1()
if(p.gB()===B.l){q.Z()
p=q.a1()
if(p.gB()!==B.o&&p.gB()!==B.r){B.b.t(r.b,B.Y)
return r.b_()}}r.c=B.Y
q=p.gA()
q=A.X(q.a,q.b)
s=q.b
return new A.ai(A.a_(q.a,s,s),null,null,"",B.h)},
dj(a){var s,r,q,p=this
if(a)p.a.Z()
s=p.a
r=s.a1()
if(r.gB()!==B.t){if(!a){if(r.gB()!==B.o)throw A.a(A.G("While parsing a flow mapping, expected ',' or '}'.",r.gA().gC().bw()))
s.Z()
q=s.a1()
q.toString
r=q}if(r.gB()===B.k){s.Z()
r=s.a1()
if(r.gB()!==B.l&&r.gB()!==B.o&&r.gB()!==B.t){B.b.t(p.b,B.a1)
return p.b_()}else{p.c=B.a1
s=r.gA()
s=A.X(s.a,s.b)
q=s.b
return new A.ai(A.a_(s.a,q,q),null,null,"",B.h)}}else if(r.gB()!==B.t){B.b.t(p.b,B.az)
return p.b_()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.ab(B.z,r.gA())},
f7(){return this.dj(!1)},
dk(a){var s,r=this,q=null,p=r.a,o=p.a1()
o.toString
if(a){r.c=B.G
p=o.gA()
p=A.X(p.a,p.b)
o=p.b
return new A.ai(A.a_(p.a,o,o),q,q,"",B.h)}if(o.gB()===B.l){p.Z()
s=p.a1()
if(s.gB()!==B.o&&s.gB()!==B.t){B.b.t(r.b,B.G)
return r.b_()}}else s=o
r.c=B.G
p=s.gA()
p=A.X(p.a,p.b)
o=p.b
return new A.ai(A.a_(p.a,o,o),q,q,"",B.h)},
f8(){return this.dk(!1)},
dr(){var s,r,q,p,o,n=this,m=n.a,l=m.a1()
l.toString
s=A.c([],t.l)
r=l
q=null
for(;;){if(!(r.gB()===B.P||r.gB()===B.Q))break
if(r instanceof A.dk){if(q!=null)throw A.a(A.G("Duplicate %YAML directive.",r.a))
l=r.b
if(l!==1||r.c===0)throw A.a(A.G("Incompatible YAML document. This parser only supports YAML 1.1 and 1.2.",r.a))
else{p=r.c
if(p>2)$.kp().$2("Warning: this parser only supports YAML 1.1 and 1.2.",r.a)}q=new A.h7(l,p)}else if(r instanceof A.dg){o=new A.bL(r.b,r.c)
n.eu(o,r.a)
B.b.t(s,o)}m.Z()
l=m.a1()
l.toString
r=l}m=r.gA()
m=A.X(m.a,m.b)
l=m.b
n.c2(new A.bL("!","!"),A.a_(m.a,l,l),!0)
l=r.gA()
l=A.X(l.a,l.b)
m=l.b
n.c2(new A.bL("!!","tag:yaml.org,2002:"),A.a_(l.a,m,m),!0)
return new A.b2(q,s)},
c2(a,b,c){var s=this.d,r=a.a
if(s.F(r)){if(c)return
throw A.a(A.G("Duplicate %TAG directive.",b))}s.j(0,r,a)},
eu(a,b){return this.c2(a,b,!1)}}
A.fQ.prototype={
$1(a){var s=this.a
s.b=a.b
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:27}
A.fR.prototype={
$1(a){var s=this.a
s.a=a
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:64}
A.a0.prototype={
n(a){return this.a}}
A.fU.prototype={
gdc(){var s,r=this.c.W()
if(r==null)return!1
switch(r){case 45:case 59:case 47:case 58:case 64:case 38:case 61:case 43:case 36:case 46:case 126:case 63:case 42:case 39:case 40:case 41:case 37:return!0
default:s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=122))s=r>=65&&r<=90
return s}},
geO(){if(!this.gd8())return!1
switch(this.c.W()){case 44:case 91:case 93:case 123:case 125:return!1
default:return!0}},
gd7(){var s=this.c.W()
return s!=null&&s>=48&&s<=57},
geQ(){var s,r=this.c.W()
if(r==null)return!1
s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))s=r>=65&&r<=70
return s},
geS(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r)break A
if(9===r||133===r){s=!0
break A}s=this.cb(0)
break A}return s},
gd8(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r||32===r)break A
if(133===r){s=!0
break A}s=this.cb(0)
break A}return s},
Z(){var s,r,q,p,o=this
if(o.e)throw A.a(A.bi("Out of tokens."))
if(!o.w)o.d3()
s=o.f
r=s.b
if(r===s.c)A.E(A.bi("No element"))
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
if(!r.w)r.d3()
s=r.f
return s.gU(s)},
d3(){var s,r,q=this
for(s=q.f,r=q.z;;){if(s.gk(0)!==0){q.dC()
if(s.gk(0)===0)A.E(A.a2())
if(s.h(0,s.gk(0)-1).gB()===B.w)break
if(!B.b.R(r,new A.fV(q)))break}q.eJ()}q.w=!0},
eJ(){var s,r,q,p,o,n,m,l=this
if(!l.d){l.d=!0
s=l.f
r=l.c
r=A.X(r.f,r.c)
q=r.b
s.aw(s.$ti.c.a(new A.T(B.cB,A.a_(r.a,q,q))))
return}l.fu()
l.dC()
s=l.c
l.bK(s.at)
if(s.c===s.b.length){l.bK(-1)
l.aT()
l.y=!1
r=l.f
s=A.X(s.f,s.c)
q=s.b
r.aw(r.$ti.c.a(new A.T(B.w,A.a_(s.a,q,q))))
return}if(s.at===0){if(s.W()===37){l.bK(-1)
l.aT()
l.y=!1
p=l.fn()
if(p!=null){s=l.f
s.aw(s.$ti.c.a(p))}return}if(l.bG(3)){if(s.aI("---")){l.d_(B.R)
return}if(s.aI("...")){l.d_(B.S)
return}}}switch(s.W()){case 91:l.d1(B.at)
return
case 123:l.d1(B.ar)
return
case 93:l.d0(B.r)
return
case 125:l.d0(B.t)
return
case 44:l.aT()
l.y=!0
l.aY(B.o)
return
case 42:l.cY(!1)
return
case 38:l.eG()
return
case 33:l.bn()
l.y=!1
r=l.f
q=s.c
if(s.P(1)===60){s.a0(s.a_())
s.a0(s.a_())
o=l.dz()
s.bR(">")
n=""}else{n=l.fs()
if(n.length>1&&B.a.u(n,"!")&&B.a.aG(n,"!"))o=l.ft(!1)
else{o=l.cl(!1,n)
if(o.length===0){n=null
o="!"}else n="!"}}r.aw(r.$ti.c.a(new A.bw(s.am(new A.ap(q)),n,o)))
return
case 39:l.d2(!0)
return
case 34:l.eI()
return
case 124:if(l.z.length!==1)l.bF()
l.cZ(!0)
return
case 62:if(l.z.length!==1)l.bF()
l.eH()
return
case 37:case 64:case 96:l.bF()
break
case 45:if(l.bj(1))l.bD()
else{if(l.z.length===1){if(!l.y)A.E(A.G("Block sequence entries are not allowed here.",s.gaD()))
l.ck(s.at,B.T,A.X(s.f,s.c))}l.aT()
l.y=!0
l.aY(B.u)}return
case 63:if(l.bj(1))l.bD()
else{r=l.z
if(r.length===1){if(!l.y)A.E(A.G("Mapping keys are not allowed here.",s.gaD()))
l.ck(s.at,B.C,A.X(s.f,s.c))}l.y=r.length===1
l.aY(B.k)}return
case 58:if(l.z.length!==1&&l.f.gk(0)!==0){s=l.f
m=s.gJ(s)
s=!0
if(m.gB()!==B.r)if(m.gB()!==B.t)if(m.gB()===B.as){s=t.f2.a(m).c
s=s===B.B||s===B.M}else s=!1
if(s){l.d4()
return}}if(l.bj(1))l.bD()
else l.d4()
return
default:if(!l.geS())l.bF()
l.bD()
return}},
bF(){return this.c.cw("Unexpected character.",1)},
dC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.z,r=e.c,q=e.f,p=r.f,o=e.x,n=0;m=s.length,n<m;++n){l=s[n]
if(l==null)continue
if(m!==1)continue
if(l.c===r.as)continue
if(l.e){k=B.b.h0(o,new A.fW(l))
if(k>=0){if(!(k<o.length))return A.b(o,k)
j=o[k].b===B.T}else j=!1
m=j?"Expected ':'. If this is a list entry, it must start with '- '.":"Expected ':'."
i=r.c
new A.ca(p,i).cO(p,i)
h=new A.bl(p,i,i)
h.c1(p,i,i)
A.E(new A.cp(null,m.charCodeAt(0)==0?m:m,h))
m=l.a
i=e.r
h=l.b
g=h.a
h=h.b
f=new A.bl(g,h,h)
f.c1(g,h,h)
q.b8(q,m-i,new A.T(B.k,f))}B.b.j(s,n,null)}},
bn(){var s,r,q,p,o,n,m=this,l=m.z,k=l.length===1&&B.b.gJ(m.x).a===m.c.at
if(!m.y)return
m.aT()
s=l.length
r=m.r
q=m.f.gk(0)
p=m.c
o=p.as
n=p.at
B.b.j(l,s-1,new A.bV(r+q,A.X(p.f,p.c),o,n,k))},
aT(){var s=this.z,r=B.b.gJ(s)
if(r!=null&&r.e)throw A.a(A.G("Could not find expected ':' for simple key.",r.b.bw()))
B.b.j(s,s.length-1,null)},
eC(){var s=this.z,r=s.length
if(r===1)return
if(0>=r)return A.b(s,-1)
s.pop()},
du(a,b,c,d){var s,r,q=this
if(q.z.length!==1)return
s=q.x
if(B.b.gJ(s).a!==-1&&B.b.gJ(s).a>=a)return
B.b.t(s,new A.ct(a,b))
s=c.b
r=new A.T(b,A.a_(c.a,s,s))
s=q.f
if(d==null)s.aw(s.$ti.c.a(r))
else s.b8(s,d-q.r,r)},
ck(a,b,c){return this.du(a,b,c,null)},
bK(a){var s,r,q,p,o,n,m,l=this
if(l.z.length!==1)return
for(s=l.x,r=l.f,q=l.c,p=q.f,o=r.$ti.c;B.b.gJ(s).a>a;){n=q.c
new A.ca(p,n).cO(p,n)
m=new A.bl(p,n,n)
m.c1(p,n,n)
r.aw(o.a(new A.T(B.p,m)))
if(0>=s.length)return A.b(s,-1)
s.pop()}},
d_(a){var s,r,q,p=this
p.bK(-1)
p.aT()
p.y=!1
s=p.c
r=s.c
s.ah()
s.ah()
s.ah()
q=p.f
q.aw(q.$ti.c.a(new A.T(a,s.am(new A.ap(r)))))},
d1(a){var s=this
s.bn()
B.b.t(s.z,null)
s.y=!0
s.aY(a)},
d0(a){var s=this
s.aT()
s.eC()
s.y=!1
s.aY(a)},
d4(){var s,r,q,p,o,n=this,m=n.z,l=B.b.gJ(m)
if(l!=null){s=n.f
r=l.a
q=n.r
p=l.b
o=p.b
s.b8(s,r-q,new A.T(B.k,A.a_(p.a,o,o)))
n.du(l.d,B.C,p,r)
B.b.j(m,m.length-1,null)
n.y=!1}else if(m.length===1){if(!n.y)throw A.a(A.G("Mapping values are not allowed here. Did you miss a colon earlier?",n.c.gaD()))
m=n.c
n.ck(m.at,B.C,A.X(m.f,m.c))
n.y=!0}else if(n.y){n.y=!1
n.aY(B.k)}n.aY(B.l)},
aY(a){var s,r=this.c,q=r.c
r.ah()
s=this.f
s.aw(s.$ti.c.a(new A.T(a,r.am(new A.ap(q)))))},
cY(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fl(a)))},
eG(){return this.cY(!0)},
cZ(a){var s,r=this
r.aT()
r.y=!0
s=r.f
s.aw(s.$ti.c.a(r.fm(a)))},
eH(){return this.cZ(!1)},
d2(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fp(a)))},
eI(){return this.d2(!1)},
bD(){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fq()))},
fu(){var s,r,q,p,o,n,m=this
for(s=m.z,r=m.c,q=!1;;q=!0){if(r.at===0)r.bA("\ufeff")
p=!q
for(;;){if(r.W()!==32)o=(s.length!==1||p)&&r.W()===9
else o=!0
if(!o)break
r.a0(r.a_())}if(r.W()===9)r.cw("Tab characters are not allowed as indentation.",1)
m.cm()
n=r.P(0)
if(n===13||n===10){m.bJ()
if(s.length===1)m.y=!0}else break}},
fn(){var s,r,q,p,o,n,m,l,k,j=this,i="Expected whitespace.",h=j.c,g=new A.ap(h.c)
h.a0(h.a_())
s=j.fo()
if(s==="YAML"){j.bo()
r=j.dA()
h.bR(".")
q=j.dA()
p=new A.dk(h.am(g),r,q)}else if(s==="TAG"){j.bo()
o=j.dw(!0)
if(!j.eP(0))A.E(A.G(i,h.gaD()))
j.bo()
n=j.dz()
if(!j.bG(0))A.E(A.G(i,h.gaD()))
p=new A.dg(h.am(g),o,n)}else{m=h.am(g)
$.kp().$2("Warning: unknown directive.",m)
m=h.b.length
for(;;){if(h.c!==m){l=h.P(0)
k=l===13||l===10}else k=!0
if(!!k)break
h.ah()}return null}j.bo()
j.cm()
if(!(h.c===h.b.length||j.d6(0)))throw A.a(A.G("Expected comment or line break after directive.",h.am(g)))
j.bJ()
return p},
fo(){var s,r=this.c,q=r.c
while(this.gd8())r.ah()
s=r.D(0,q)
if(s.length===0)throw A.a(A.G("Expected directive name.",r.gaD()))
else if(!this.bG(0))throw A.a(A.G("Unexpected character in directive name.",r.gaD()))
return s},
dA(){var s,r,q=this.c,p=q.c
for(;;){s=q.W()
if(!(s!=null&&s>=48&&s<=57))break
q.a0(q.a_())}r=q.D(0,p)
if(r.length===0)throw A.a(A.G("Expected version number.",q.gaD()))
return A.cC(r,null,null)},
fl(a){var s,r,q,p,o=this.c,n=new A.ap(o.c)
o.ah()
s=o.c
while(this.geO())o.ah()
r=o.D(0,s)
q=o.W()
if(r.length!==0)p=!this.bG(0)&&q!==63&&q!==58&&q!==44&&q!==93&&q!==125&&q!==37&&q!==64&&q!==96
else p=!0
if(p)throw A.a(A.G("Expected alphanumeric character.",o.gaD()))
if(a)return new A.bp(o.am(n),r)
else return new A.cH(o.am(n),r)},
dw(a){var s,r,q,p=this.c
p.bR("!")
s=new A.Y("!")
r=p.c
while(this.gdc())p.a0(p.a_())
q=p.D(0,r)
q=s.a+=q
if(p.W()===33)p=s.a=q+A.A(p.ah())
else{if(a&&(q.charCodeAt(0)==0?q:q)!=="!")p.bR("!")
p=q}return p.charCodeAt(0)==0?p:p},
fs(){return this.dw(!1)},
cl(a,b){var s,r,q,p
if((b==null?0:b.length)>1){b.toString
B.a.D(b,1)}s=this.c
r=s.c
q=s.W()
for(;;){if(!this.gdc())if(a)p=q===44||q===91||q===93
else p=!1
else p=!0
if(!p)break
s.a0(s.a_())
q=s.W()}s=s.D(0,r)
return A.al(s,0,s.length,B.e,!1)},
dz(){return this.cl(!0,null)},
ft(a){return this.cl(a,null)},
fm(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="0 may not be used as an indentation indicator.",a2=a0.c,a3=new A.ap(a2.c)
a2.ah()
s=a2.W()
r=s===43
q=0
if(r||s===45){p=r?B.W:B.V
a2.ah()
if(a0.gd7()){if(a2.W()===48)throw A.a(A.G(a1,a2.am(a3)))
q=a2.ah()-48}}else if(a0.gd7()){if(a2.W()===48)throw A.a(A.G(a1,a2.am(a3)))
q=a2.ah()-48
s=a2.W()
r=s===43
if(r||s===45){p=r?B.W:B.V
a2.ah()}else p=B.au}else p=B.au
a0.bo()
a0.cm()
r=a2.b
o=r.length
if(!(a2.c===o||a0.d6(0)))throw A.a(A.G("Expected comment or line break.",a2.gaD()))
a0.bJ()
if(q!==0){n=a0.x
m=B.b.gJ(n).a>=0?B.b.gJ(n).a+q:q}else m=0
l=a0.dv(m)
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
if(s==null||s===32||s===9||s===13||s===10)e=a2.aI("---")||a2.aI("...")
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
h=i!==o?a0.b7():"\n"
l=a0.dv(m)
m=l.a
k=l.b
i=a}if(p!==B.V){r=f+h
j.a=r}else r=f
if(p===B.W)r=j.a=r+k
a2=a2.c_(a3,i)
o=a4?B.O:B.N
return new A.bu(a2,r.charCodeAt(0)==0?r:r,o)},
dv(a){var s,r,q,p,o,n,m,l=new A.Y("")
for(s=this.c,r=a===0,q=!r,p=0;;){for(;;){if(!((!q||s.at<a)&&s.W()===32))break
s.a0(s.a_())}o=s.at
if(o>p)p=o
n=s.P(0)
if(!(n===13||n===10))break
m=this.b7()
l.a+=m}if(r){s=this.x
a=p<B.b.gJ(s).a+1?B.b.gJ(s).a+1:p}s=l.a
return new A.dw(a,s.charCodeAt(0)==0?s:s)},
fp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.c,b=new A.Y("")
d.a0(d.a_())
for(s=!a,r=d.b.length;;){q=!1
if(d.at===0){p=d.P(3)
if(p==null||p===32||p===9||p===13||p===10)q=d.aI("---")||d.aI("...")}if(q)d.fT("Unexpected document indicator.")
if(d.c===r)throw A.a(A.G("Unexpected end of file.",d.gaD()))
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
e.bJ()
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
default:throw A.a(A.G("Unknown escape character.",d.am(m)))}d.a0(d.a_())
d.a0(d.a_())
if(l!=null){for(k=0,j=0;j<l;++j){if(!e.geQ()){d.a0(d.a_())
throw A.a(A.G("Expected "+A.m(l)+"-digit hexidecimal number.",d.am(m)))}i=d.a_()
d.a0(i)
k=(k<<4>>>0)+e.ev(i)}if(k>=55296&&k<=57343||k>1114111)throw A.a(A.G("Invalid Unicode character escape code.",d.am(m)))
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
f=e.b7()
o=!0}else{q=e.b7()
g.a+=q}}if(o)if(f.length!==0&&g.a.length===0){q=A.A(32)
b.a+=q}else b.a+=g.n(0)
else{b.a+=h.n(0)
h.a=""}}d.a0(d.a_())
d=d.am(new A.ap(c))
c=b.a
s=a?B.B:B.M
return new A.bu(d,c.charCodeAt(0)==0?c:c,s)},
fq(){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=j.c,h=new A.ap(i),g=new A.Y(""),f=new A.Y(""),e=B.b.gJ(k.x).a+1
for(s=k.z,r="",q="";;){p=""
o=!1
if(j.at===0){n=j.P(3)
if(n==null||n===32||n===9||n===13||n===10)o=j.aI("---")||j.aI("...")}if(o)break
if(j.W()===35)break
if(k.d9(0))if(r.length!==0){if(q.length===0){o=A.A(32)
g.a+=o}else g.a+=q
r=p
q=""}else{g.a+=f.n(0)
f.a=""}m=j.c
while(k.d9(0))j.ah()
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
if(!o&&j.at<e&&j.W()===9)j.cw("Expected a space but found a tab.",1)
if(o){l=j.a_()
j.a0(l)
o=A.A(l)
f.a+=o}else j.a0(j.a_())}else if(r.length===0){r=k.b7()
f.a=""}else q=k.b7()}if(s.length===1&&j.at<e)break}if(r.length!==0)k.y=!0
j=j.c_(new A.ap(i),h)
i=g.a
return new A.bu(j,i.charCodeAt(0)==0?i:i,B.h)},
bJ(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)return
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())},
b7(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)throw A.a(A.G("Expected newline.",s.gaD()))
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())
return"\n"},
eP(a){var s=this.c.P(a)
return s===32||s===9},
d6(a){var s=this.c.P(a)
return s===13||s===10},
bG(a){var s=this.c.P(a)
return s==null||s===32||s===9||s===13||s===10},
d9(a){var s,r=this.c
switch(r.P(a)){case 58:return this.bj(a+1)
case 35:s=r.P(a-1)
return s!==32&&s!==9
default:return this.bj(a)}},
bj(a){var s,r=this.c.P(a)
A:{s=!1
if(r==null)break A
if(44===r||91===r||93===r||123===r||125===r){s=this.z.length===1
break A}if(32===r||9===r||10===r||13===r||65279===r)break A
if(133===r){s=!0
break A}s=this.cb(a)
break A}return s},
cb(a){var s,r=this.c,q=r.P(a)
if(q==null)return!1
if(q>>>10===54){s=r.P(a+1)
return s!=null&&s>>>10===55}r=!0
if(!(q>=32&&q<=126))if(!(q>=160&&q<=55295))r=q>=57344&&q<=65533
return r},
ev(a){if(a<=57)return a-48
if(a<=70)return 10+a-65
return 10+a-97},
bo(){var s,r=this.c
for(;;){s=r.P(0)
if(!(s===32||s===9))break
r.a0(r.a_())}},
cm(){var s,r,q,p=this.c
if(p.W()!==35)return
s=p.b.length
for(;;){if(p.c!==s){r=p.P(0)
q=r===13||r===10}else q=!0
if(!!q)break
p.a0(p.a_())}}}
A.fV.prototype={
$1(a){t.b2.a(a)
return a!=null&&a.a===this.a.r},
$S:66}
A.fW.prototype={
$1(a){return t.eY.a(a).a===this.a.d},
$S:28}
A.bV.prototype={}
A.dp.prototype={
bi(){return"_Chomping."+this.b}}
A.bt.prototype={
n(a){return this.a}}
A.cJ.prototype={
n(a){return this.a}}
A.T.prototype={
n(a){return this.a.bi()},
gB(){return this.a},
gA(){return this.b}}
A.dk.prototype={
gB(){return B.P},
n(a){return"VERSION_DIRECTIVE "+this.b+"."+this.c},
$iT:1,
gA(){return this.a}}
A.dg.prototype={
gB(){return B.Q},
n(a){return"TAG_DIRECTIVE "+this.b+" "+this.c},
$iT:1,
gA(){return this.a}}
A.bp.prototype={
gB(){return B.cD},
n(a){return"ANCHOR "+this.b},
$iT:1,
gA(){return this.a}}
A.cH.prototype={
gB(){return B.cC},
n(a){return"ALIAS "+this.b},
$iT:1,
gA(){return this.a}}
A.bw.prototype={
gB(){return B.cE},
n(a){return"TAG "+A.m(this.b)+" "+this.c},
$iT:1,
gA(){return this.a}}
A.bu.prototype={
gB(){return B.as},
n(a){return"SCALAR "+this.c.n(0)+' "'+this.b+'"'},
$iT:1,
gA(){return this.a}}
A.Z.prototype={
bi(){return"TokenType."+this.b}}
A.kn.prototype={
$2(a,b){a=b.dY(a)
A.re(a)},
$1(a){return this.$2(a,null)},
$S:20}
A.eB.prototype={
n(a){var s=this.a
return s.n(s)}}
A.h7.prototype={
n(a){return"%YAML "+this.a+"."+this.b}}
A.bL.prototype={
n(a){return"%TAG "+this.a+" "+this.b}}
A.cp.prototype={}
A.P.prototype={
gA(){return this.a}}
A.bP.prototype={
ga7(){return this},
gE(){return this.b.a.gE().ac(0,new A.hh(),t.z)},
h(a,b){var s=this.b.a.h(0,b)
return s==null?null:s.ga7()},
$iw:1,
gM(){return this.b},
ga2(){return this.c}}
A.hh.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.bO.prototype={
ga7(){return this},
gk(a){return this.b.a.length},
sk(a,b){throw A.a(A.N("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.V(b)
s=this.b.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga7()},
j(a,b,c){throw A.a(A.N("Cannot modify an unmodifiable List"))},
$ix:1,
$if:1,
$ip:1,
gM(){return this.b},
ga2(){return this.c}}
A.ao.prototype={
n(a){return J.am(this.b)},
ga7(){return this.b},
ga2(){return this.c}}
A.eS.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.h8.prototype={
n(a){return this.b},
d5(){var s=t.T
this.d=A.aS(s)
new A.ha(this,A.aS(s)).$1(this.c)},
G(a,b){var s,r,q,p,o,n,m,l,k=this,j=A.au(b,B.i,B.j)
if(a.length===0){s=k.c.gA().gC().gK()
return k.bm(A.aw(s,A.bZ(k.c)-s,A.dN(j,0,A.dK(k.b))),a,j)}r=A.c(a.slice(0),A.t(a))
q=A.aW(r,0,A.eY(a.length-1,"count",t.p),A.t(r).c)
p=B.b.gJ(r)
o=k.dH(q,!0)
if(t.h.b(o)){if(!A.b3(p))throw A.a(A.fS(a,a,o))
n=A.o(o.gM(),t.T)
B.b.j(n,p,j)
m=A.au(n,B.i,B.j)
return k.bm(A.rK(k,o,p,j),q,m)}if(t.S.b(o)){l=A.lo(o,new A.he(p,j))
return k.bm(A.rL(k,o,p,j),q,l)}throw A.a(new A.d4(a,a,null,!1,null,null,"Scalar "+o.n(o)+" does not have key "+A.m(p)))},
I(a,b){var s,r,q,p,o,n=this,m=A.m7(),l=A.m7(),k=n.dH(b,!0)
if(b.length===0){m.b=A.aw(0,n.b.length,"")
l.b=A.au(null,B.i,B.j)
n.bm(m.bI(),b,l.bI())
return k}s=A.c(b.slice(0),A.t(b))
r=A.aW(s,0,A.eY(b.length-1,"count",t.p),A.t(s).c)
q=B.b.gJ(s)
p=n.dG(r)
if(t.h.b(p)){A.V(q)
m.b=A.rn(n,p,q)
o=A.o(p.gM(),t.T)
B.b.bc(o,q)
l.b=A.au(o,B.i,B.j)}else if(t.S.b(p)){m.b=A.ro(n,p,q)
l.b=A.lo(p,new A.hd(q))}n.bm(m.bI(),r,l.bI())
return k},
co(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=J.C(a)
if(j.gL(a))return k.c
s=k.c
r=j.aR(a)
for(q=t.S,p=t.h,o=0;o<r.length;++o){n=r[o]
if(b&&k.d.p(0,s))throw A.a(A.f8(a,s))
if(p.b(s)){m=s.gk(s)
if(!(A.b3(n)&&n>=0&&n<m))return k.ci(a,j.a3(a,o+1),s,c)
s=J.l(s.gM(),n)}else{if(q.b(s)){if(!A.l5(s,n))return k.ci(a,j.a3(a,o+1),s,c)
l=A.nc(s,n)
if(b)if(k.d.p(0,l))throw A.a(A.f8(a,l))
m=s.gM().h(0,l)
m.toString}else return k.ci(a,j.a3(a,o+1),s,c)
s=m}}if(b)k.bB(a,s)
return s},
dH(a,b){return this.co(a,b,null)},
dG(a){return this.co(a,!1,null)},
cn(a,b){return this.co(a,!1,b)},
ci(a,b,c,d){var s=A.fS(a,b,c)
throw A.a(s)},
bB(a,b){var s,r,q,p,o,n=this
if(b==null)return n.bB(a,n.dG(a))
if(n.d.p(0,b))throw A.a(A.f8(a,b))
if(t.m.b(b))return
if(t.h.b(b))for(s=t.X,r=0;r<b.gk(b);++r){q=A.o(a,s)
q.push(r)
n.bB(q,J.l(b.gM(),r))}if(t.S.b(b)){p=b.gE().aR(0)
for(s=t.z,r=0;q=b.gE(),r<q.gk(q);++r){q=A.o(a,s)
if(!(r<p.length))return A.b(p,r)
q.push(p[r])
o=n.d
if(!(r<p.length))return A.b(p,r)
if(o.p(0,p[r])){if(!(r<p.length))return A.b(p,r)
throw A.a(A.f8(a,t.T.a(p[r])))}o=b.gM()
if(!(r<p.length))return A.b(p,r)
n.bB(q,o.h(0,p[r]))}}},
bm(a,b,c){var s,r=this,q=r.c7(r.c,b,[],c),p=r.b,o=p,n=a.a,m=B.a.aX(p,n,n+a.b,a.c),l=null
try{l=A.nv(new A.hc(m),t.T)}catch(s){if(A.c3(s) instanceof A.cp)throw A.a(A.n5("Failed to produce valid YAML after modification.",o,m))
else throw s}if(!A.bm(l,q))throw A.a(A.n5("Modification did not result in expected result.",o,m))
r.b=m
r.c=l
B.b.t(r.a,a)
r.d5()},
c7(a,b,c,d){var s,r,q=J.C(c),p=J.C(b)
A.ci(q.gk(c),0,p.gk(b),null)
if(p.gk(b)===q.gk(c))return d
s=p.T(b,q.gk(c))
if(t.h.b(a)){if(!A.r0(s,a.gk(a)))throw A.a(A.fS(b,c,a))
r=A.o(a.gM(),t.T)
A.V(s)
B.b.j(r,s,this.c7(J.l(a.gM(),s),b,p.a3(b,q.gk(c)+1),d))
return A.au(r,B.i,B.j)}if(t.S.b(a))return A.lo(a,new A.h9(this,s,b,c,d))
throw A.a(A.fS(b,c,a))}}
A.ha.prototype={
$1(a){var s=this
t.T.a(a)
if(s.b.t(0,a)){if(t.S.b(a))a.gM().an(0,new A.hb(s))
else if(t.h.b(a))J.nS(a.gM(),s)}else s.a.d.t(0,a)},
$S:30}
A.hb.prototype={
$2(a,b){var s,r=t.T
r.a(b)
s=this.a
s.$1(r.a(a))
s.$1(b)},
$S:31}
A.he.prototype={
$1(a){var s=this.b
a.j(0,this.a,s)
return s},
$S:21}
A.hd.prototype={
$1(a){return a.I(0,this.a)},
$S:33}
A.hc.prototype={
$0(){return A.f0(this.a,null,!1,null).a},
$S:19}
A.h9.prototype={
$1(a){var s=this,r=s.b,q=s.c
q=s.a.c7(t.T.a(a.h(0,r)),q,J.o0(q,J.a7(s.d)+1),s.e)
a.j(0,r,q)
return q},
$S:21}
A.ja.prototype={
$1(a){var s,r=this.a
if(!A.l5(r.b,a))return!1
s=A.qL(r.b,a)
if(!A.bm(r.a.h(0,a),r.b.h(0,s)))return!1
return!0},
$S:2}
A.iU.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iV.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iE.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.d4.prototype={
n(a){var s,r,q=this,p=q.d
if(p==null){p=q.f
s="Failed to traverse to subpath "+A.m(p)+"!"
r=J.C(p)
if(r.gb4(p))s+=" Parent "+A.m(q.r)+" does not contain key or index "+A.m(r.gJ(p))
return"Invalid path: "+A.m(q.e)+". "+s+"."}return"Invalid path: "+A.m(q.e)+". "+A.m(p)}}
A.dP.prototype={}
A.eQ.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+s
return"Assertion failed"}}
A.i3.prototype={
$0(){var s=J.l(this.a.gM(),this.b+1).gA(),r=s.gC().gK(),q=this.c,p=B.a.ae(q,"-",s.gk(s)===0?r:r-1),o=B.a.ae(q,"\n",p)
return new A.cv(o,p-(o+1))},
$S:15}
A.i4.prototype={
$0(){var s=t.T.a(this.b.gM().gE().T(0,this.a.a+1)).gA().gC()
return new A.cv(B.a.ae(this.c,"\n",s.gK()),s.gab())},
$S:15}
A.db.prototype={
S(a,b){if(b==null)return!1
if(b instanceof A.db)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gY(a){return B.d.gY(this.a)^B.d.gY(this.b)^B.a.gY(this.c)},
hb(){return A.a5(["offset",this.a,"length",this.b,"replacement",this.c],t.N,t.z)},
n(a){return"SourceEdit("+this.a+", "+this.b+', "'+this.c+'")'},
gk(a){return this.b}}
A.ia.prototype={
$3(a,b,c){var s,r,q,p=this
A.e(b)
A.e(c)
if(B.a.O(c).length!==0){s=p.a
r=a-1
if(!(r>=0&&r<s.length))return A.b(s,r)
s=B.a.O(s[r]).length!==0&&!B.a.u(B.a.e6(c,p.b,"")," ")}else s=!1
q=s?p.c+c:c
return b+p.c+q},
$S:37}
A.km.prototype={
$1(a){t.x.a(a)
return A.bn(t.T.a(a.a))+": "+A.bn(a.b)},
$S:23}
A.kk.prototype={
$1(a){var s,r,q
t.T.a(a)
s=this.a
r=A.dN(a,s,this.b)
if(t.f.b(a)||t.j.b(a)){q=A.hi(a)
q=q!==B.f}else q=!1
if(q)r=B.a.D(r,s)
return B.a.aj(" ",this.c)+"- "+r},
$S:24}
A.kl.prototype={
$1(a){var s,r,q,p,o
t.x.a(a)
s=a.b
r=A.bn(t.T.a(a.a))
q=B.a.aj(" ",this.a)+r
p=this.c
o=A.dN(s,this.b,p)
if((t.f.b(s)||t.j.b(s))&&!A.ld(s))return q+":"+p+o
return q+": "+o},
$S:23}
A.j7.prototype={
$0(){return A.f0(this.a,null,!1,null).a},
$S:19}
A.iW.prototype={
$1(a){return J.am(a)},
$S:3}
A.iX.prototype={
$1(a){return B.a.aC(A.e(a),this.a)>0},
$S:0}
A.eE.prototype={
n(a){return J.am(this.c)},
$iP:1,
$iao:1,
ga2(){return this.a},
gA(){return this.b},
ga7(){return this.c}}
A.eD.prototype={
h(a,b){var s=this.b.h(0,b)
return s==null?null:s.ga7()},
gE(){var s=this.b,r=A.j(s).i("ak<1>")
return A.fN(new A.ak(s,r),r.i("@(f.E)").a(new A.hg()),r.i("f.E"),t.z)},
ga7(){return this},
$iw:1,
$iP:1,
$ibP:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hg.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.eC.prototype={
gk(a){return this.b.length},
sk(a,b){throw A.a(A.N("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.V(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga7()},
j(a,b,c){throw A.a(A.N("Cannot modify an unmodifiable List"))},
ga7(){return this},
$ix:1,
$if:1,
$ip:1,
$iP:1,
$ibO:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hf.prototype={
$1(a){return A.au(a,this.a,this.b)},
$S:41}
A.eR.prototype={}
A.eT.prototype={}
A.eU.prototype={}
A.jV.prototype={
$1(a){return!this.a.F(A.e(a))},
$S:0}
A.kc.prototype={
$1(a){return B.a.O(A.e(a)).length===0},
$S:0}
A.ie.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.b5)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a8)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.k3.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.k4.prototype={
$1(a){return J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.k5.prototype={
$1(a){var s,r
t.a9.a(a)
s=this.a
r=a.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return a.b!==s[r]},
$S:44}
A.k6.prototype={
$1(a){A.e(a)
return!B.b.p(A.iC(this.a),a)},
$S:0}
A.k7.prototype={
$1(a){return A.e(a)==="DIRECT"},
$S:0}
A.iG.prototype={
$1(a){var s,r
t.P.a(a)
s=this.a
if(!J.u(a.h(0,"name"),s)){r=t.g.a(a.h(0,"proxies"))
s=J.bo(r==null?[]:r,s)}else s=!1
return s},
$S:12}
A.iH.prototype={
$1(a){return J.u(J.l(a,"dialer-proxy"),this.a)},
$S:2}
A.iI.prototype={
$1(a){A.e(a)
return A.lj(a,this.a,"__deleted__")!==a},
$S:0}
A.iJ.prototype={
$1(a){return!J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.jo.prototype={
$1(a){return A.dL(a,this.a+1)},
$S:45}
A.jg.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash ")},
$S:0}
A.iZ.prototype={
$1(a){return B.a.O(A.e(a))==="# Mclash OpenWrt controller: true"},
$S:0}
A.j_.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt capture: ")},
$S:0}
A.j8.prototype={
$3(a,b,c){return A.ng(A.e(a),A.e(b),A.e(c),!1)},
$S:46}
A.iz.prototype={
$1(a){var s
if(B.a.O(A.e(a))!=="# Mclash OpenWrt controller: true")return!0
s=this.a
if(s.a)return!1
return s.a=!0},
$S:0}
A.j5.prototype={
$1(a){var s
A.e(a)
s=A.I("^(0|[1-9][0-9]{0,2})$",!0)
return!s.b.test(a)||A.cC(a,null,null)>255},
$S:0}
A.j6.prototype={
$2(a,b){return A.V(a)*256+A.cC(A.e(b),null,null)},
$S:47}
A.kd.prototype={
$1(a){var s
A.e(a)
s=t.s
return a.length===0?A.c([],s):A.c(a.split(":"),s)},
$S:72}
A.ke.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9a-fA-F]{1,4}$",!0)
return!s.b.test(a)},
$S:0}
A.iA.prototype={
$1(a){var s
A.e(a)
s=A.I("^[A-Za-z0-9_.-]{1,15}$",!0)
return!s.b.test(a)||B.b.p(A.c(["lo","Mclash"],t.s),a)},
$S:0}
A.ip.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash OpenWrt capture: ")},
$S:0}
A.im.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9]{1,3}$",!0)
return s.b.test(a)&&A.cC(a,null,null)<=255},
$S:0}
A.io.prototype={
$1(a){return B.a.O(A.e(a))!=="# Mclash OpenWrt controller: true"},
$S:0}
A.kh.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.jn.prototype={
$2(a,b){var s=this.a.a.h(0,a)
s=s==null?null:B.a.O(J.am(s))
return s==null?b:s},
$1(a){return this.$2(a,"")},
$S:49}
A.jm.prototype={
$2$fallback(a,b){var s=this.a.$1(a),r=s.length===0?b:A.aU(s,null)
if(r==null)throw A.a(A.B("VMess "+a+" must be an integer",null,null))
return r},
$1(a){return this.$2$fallback(a,null)},
$S:50}
A.jh.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.ji.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jj.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.jk.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jl.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.ij.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.ik.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.il.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.iL.prototype={
$1(a){return!J.u(a,this.a)},
$S:2}
A.iM.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.jb.prototype={
$1(a){return this.a.p(0,J.l(a,"name"))},
$S:2}
A.jc.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jd.prototype={
$1(a){return!this.a.p(0,J.l(a,"name"))},
$S:2}
A.kg.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash manual-nodes: ")},
$S:0}
A.jX.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.jC.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hJ.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.hK.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.id.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.ag)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a8)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.ii.prototype={
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
A.jN.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.jO.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jP.prototype={
$2(a,b){var s
A.e(a)
A.e(b)
s=this.a
return a===s||b===s},
$S:13}
A.jQ.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jR.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jS.prototype={
$2(a,b){A.e(a)
t.a.a(b)
return!B.a.aG(a,"Targets")&&J.cE(b)},
$S:53}
A.jT.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.jU.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash global-chain: ")},
$S:0}
A.jA.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.jf.prototype={
$2(a,b){A.V(a)
A.V(b)
return b>a?b:a},
$S:54}
A.jY.prototype={
$1(a){return t.fk.a(a).a!==this.a},
$S:55}
A.jZ.prototype={
$1(a){var s
t.fk.a(a)
s=this.a?"back":"front"
s=a.b.h(0,s)
return s==null?A.c([],t.s):s},
$S:56}
A.hP.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hQ.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.rg(a)==null},
$S:0}
A.hR.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hS.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.jW.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.jB.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hH.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.hI.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash global-chain: ")},
$S:0}
A.ic.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.ag)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a8)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.ih.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")},
$S:0}
A.iq.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.ir.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.is.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jz.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash chain-settings: ")},
$S:0}
A.hL.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hM.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash global-chain: ")&&!B.a.u(a,"# Mclash node-chains: ")&&!B.a.u(a,"# Mclash chain-groups: ")&&!B.a.u(a,"# Mclash chain-settings: ")&&A.rf(a)==null},
$S:0}
A.hN.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hO.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.iD.prototype={
$1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gN(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.m(q.a),this.$1(q.b))}return s}if(t.j.b(a)){s=J.aR(a,this,t.z)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
$S:1}
A.k8.prototype={
$1(a){t.aw.a(a)
return a.a!==this.a&&J.u(a.b.h(0,"path"),this.b)},
$S:58}
A.k9.prototype={
$1(a){return typeof a!="string"||B.a.O(a).length===0},
$S:2}
A.ka.prototype={
$1(a){return A.ry(a,A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jp(this.b)+"\\s*(?=[,)])",!0),t.ey.a(t.gQ.a(new A.kb(this.a))),null)},
$S:4}
A.kb.prototype={
$1(a){return A.m(a.h(0,1))+"RULE-SET,"+this.a.a},
$S:59}
A.iK.prototype={
$1(a){var s
A.e(a)
s=A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jp(this.a)+"\\s*(?=[,)])",!0)
return s.b.test(a)},
$S:0}
A.hw.prototype={
aN(a,b,c){var s,r,q,p,o
t.a.a(b)
for(s=J.a4(b),r=s.gq(b),q=this.a,p=null;r.l();){o=q.I(0,r.gm())
if(o==null)continue
if(p!=null&&p!==o)throw A.a(A.B("Conflicting node parameter aliases: "+A.m(s.gU(b)),null,null))
p=o}return p==null?c:p},
a3(a,b){return this.aN(0,b,"")},
dN(a){var s,r
t.a.a(a)
s=this.a3(0,a)
if(s.length===0)return null
r=t.s
if(B.b.p(A.c(["1","true"],r),s.toLowerCase()))return!0
if(B.b.p(A.c(["0","false"],r),s.toLowerCase()))return!1
throw A.a(A.B("Node parameter "+A.m(J.lx(a))+" must be true/false or 1/0",null,null))},
fU(){var s,r,q
for(s=["remarks","group"],r=this.a,q=0;q<2;++q)r.I(0,s[q])
if(r.a!==0)throw A.a(B.b7)}}
A.i7.prototype={
$1(a){return B.a.O(A.e(a))},
$S:4}
A.i8.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i9.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i6.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i0.prototype={
$1(a){return J.a7(t.a.a(a))>1},
$S:60}
A.i1.prototype={
$1(a){A.hU(a)
return a==null||a<1||a>65535},
$S:61}
A.i5.prototype={
$1(a){var s
A.e(a)
if(a.length!==0){s=A.I("^[1-9]\\d*-$",!0)
s=!s.b.test(a)}else s=!1
return s},
$S:0}
A.k_.prototype={
$1(a){A.e(a)
return a.length!==0&&B.a.u(this.a,a)},
$S:0}
A.k0.prototype={
$1(a){var s,r=t.D
r.a(a)
s=A.U("")
s.G([],A.a5(["proxies",a],t.N,r))
return s.b},
$S:62}
A.je.prototype={
$1(a){return t.P.a(a).h(0,"name")},
$S:63}
A.iy.prototype={
$1(a){return B.b.p(this.a,a)||this.b.p(0,a)},
$S:2}
A.i_.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
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
return!this.a.p(0,a)},
$S:13}
A.jL.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jM.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kj.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().R(0,B.a.gcN(a))&&a!=="# Mclash default subscription"},
$S:0}
A.jv.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jw.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.jx.prototype={
$2(a,b){A.e(a)
A.hT(b)
return!this.a.p(0,a)},
$S:26}
A.kf.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.ix.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hZ.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
$S:2}
A.jD.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jE.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-filters: ")},
$S:0}
A.jF.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:13}
A.jG.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jH.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.ki.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash group-filters: ")&&!B.a.u(a,"# Mclash proxy group [")&&!B.q.gag().R(0,B.a.gcN(a))&&a!=="# Mclash default subscription"},
$S:0}
A.js.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jt.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash group-direct: ")},
$S:0}
A.ju.prototype={
$2(a,b){A.e(a)
A.hT(b)
return!this.a.p(0,a)},
$S:26}
A.iw.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iQ.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:14}
A.iR.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0}
A.iO.prototype={
$2(a,b){return J.am(a).toLowerCase()==="host"},
$S:14}
A.iP.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0};(function aliases(){var s=J.bs.prototype
s.ei=s.n
s=A.aC.prototype
s.ee=s.dQ
s.ef=s.dR
s.eh=s.dT
s.eg=s.dS
s=A.r.prototype
s.ej=s.al
s=A.f.prototype
s.bh=s.aJ
s=A.ck.prototype
s.el=s.aC
s.ek=s.S
s=A.er.prototype
s.a_=s.h6
s.en=s.bA
s.em=s.aI
s=A.dH.prototype
s.eo=s.n})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_2,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._static_0
s(J.K.prototype,"ga5","p",7)
r(J.bq.prototype,"gcN",1,1,null,["$2","$1"],["a4","u"],29,0,0)
q(A.b9.prototype,"gdP","fW",0)
p(A,"qh","pr",9)
o(A,"qi","ps",6)
s(A.ay.prototype,"ga5","p",7)
s(A.r.prototype,"ga5","p",7)
o(A,"qm","pt",1)
o(A,"qq","qQ",6)
n(A,"qr",1,null,["$3$onError$radix","$1"],["cC",function(a){return A.cC(a,null,null)}],67,0)
n(A,"qs",1,null,["$2$radix","$1"],["nh",function(a){return A.nh(a,null)}],68,0)
p(A,"qp","qP",9)
o(A,"qn","oC",4)
m(A,"qo","pa",69)
p(A,"n4","q2",70)
s(A.f.prototype,"ga5","p",7)
p(A,"qE","qv",9)
o(A,"qF","qw",6)
p(A,"qG","bm",14)
o(A,"iS","qx",6)
o(A,"rC","bn",24)
n(A,"rM",1,null,["$2","$1"],["mL",function(a){return A.mL(a,null)}],20,0)
o(A,"rE","i2",52)
n(A,"r6",2,null,["$1$2","$2"],["nk",function(a,b){return A.nk(a,b,t.H)}],48,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.kz,J.e2,A.d8,J.b6,A.S,A.r,A.fX,A.f,A.a3,A.d0,A.bk,A.cQ,A.da,A.cP,A.dm,A.bE,A.aL,A.ax,A.z,A.az,A.cf,A.cK,A.bR,A.bf,A.ar,A.h0,A.eb,A.fG,A.aj,A.aD,A.ba,A.b9,A.cr,A.dn,A.cm,A.eP,A.hl,A.aV,A.eJ,A.hy,A.dz,A.eM,A.bS,A.ds,A.aq,A.aI,A.dV,A.hk,A.hj,A.hs,A.hF,A.hC,A.hn,A.ed,A.dd,A.eI,A.i,A.M,A.bd,A.Y,A.dE,A.h2,A.aO,A.dW,A.cd,A.cy,A.dv,A.aN,A.fa,A.h_,A.fO,A.ef,A.fY,A.em,A.ck,A.fd,A.af,A.aF,A.bI,A.en,A.er,A.ap,A.hm,A.ab,A.cO,A.c7,A.cG,A.dH,A.fK,A.fP,A.a0,A.fU,A.bV,A.bt,A.cJ,A.T,A.dk,A.dg,A.bp,A.cH,A.bw,A.bu,A.eB,A.h7,A.bL,A.P,A.h8,A.db,A.eE,A.eT,A.eR,A.hw])
q(J.e2,[J.e4,J.cS,J.cV,J.cU,J.cW,J.cT,J.bq])
q(J.cV,[J.bs,J.K,A.d1])
q(J.bs,[J.eg,J.bM,J.br])
r(J.e3,A.d8)
r(J.fA,J.K)
q(J.cT,[J.cR,J.e5])
q(A.S,[A.cZ,A.dh,A.e6,A.eu,A.ek,A.eH,A.cY,A.c4,A.aZ,A.dj,A.et,A.cl,A.dU])
r(A.cn,A.r)
q(A.cn,[A.aH,A.di])
q(A.f,[A.x,A.bb,A.q,A.aB,A.bg,A.dl,A.b8,A.bQ,A.eF,A.eO,A.bx])
q(A.x,[A.y,A.bD,A.ak,A.aE,A.Q,A.dr])
q(A.y,[A.bK,A.H,A.eN,A.d7,A.eL])
r(A.bC,A.bb)
r(A.c9,A.bg)
r(A.c8,A.b8)
q(A.z,[A.co,A.aC,A.eK])
r(A.d_,A.co)
q(A.az,[A.aX,A.cs])
q(A.aX,[A.b2,A.ct,A.bU,A.cu,A.dw,A.cv])
r(A.dx,A.cs)
r(A.cx,A.cf)
r(A.b1,A.cx)
r(A.cL,A.b1)
r(A.aJ,A.cK)
q(A.bf,[A.cM,A.dy])
r(A.cN,A.cM)
q(A.ar,[A.e1,A.dS,A.dT,A.es,A.fC,A.j1,A.j3,A.hu,A.fL,A.hq,A.hB,A.fb,A.fc,A.ib,A.ff,A.fe,A.fg,A.fi,A.fk,A.fh,A.fy,A.iF,A.fQ,A.fR,A.fV,A.fW,A.kn,A.hh,A.ha,A.he,A.hd,A.h9,A.ja,A.iU,A.iV,A.iE,A.ia,A.km,A.kk,A.kl,A.iW,A.iX,A.hg,A.hf,A.jV,A.kc,A.ie,A.k3,A.k4,A.k5,A.k6,A.k7,A.iG,A.iH,A.iI,A.iJ,A.jo,A.jg,A.iZ,A.j_,A.j8,A.iz,A.j5,A.kd,A.ke,A.iA,A.ip,A.im,A.io,A.kh,A.jn,A.jm,A.jh,A.ji,A.jj,A.jk,A.jl,A.ij,A.ik,A.il,A.iL,A.iM,A.jb,A.jc,A.jd,A.kg,A.jX,A.jC,A.hJ,A.hK,A.id,A.ii,A.it,A.iu,A.iv,A.jN,A.jO,A.jQ,A.jR,A.jT,A.jU,A.jA,A.jY,A.jZ,A.hP,A.hQ,A.hR,A.hS,A.jW,A.jB,A.hH,A.hI,A.ic,A.ih,A.iq,A.ir,A.is,A.jz,A.hL,A.hM,A.hN,A.hO,A.iD,A.k8,A.k9,A.ka,A.kb,A.iK,A.i7,A.i8,A.i9,A.i6,A.i0,A.i1,A.i5,A.k_,A.k0,A.je,A.iy,A.i_,A.jI,A.jJ,A.jL,A.jM,A.kj,A.jv,A.jw,A.kf,A.ix,A.hZ,A.jD,A.jE,A.jG,A.jH,A.ki,A.js,A.jt,A.iw,A.iR,A.iP])
r(A.cb,A.e1)
r(A.d3,A.dh)
q(A.es,[A.eq,A.c6])
q(A.dT,[A.fB,A.j2,A.fI,A.fM,A.ht,A.h4,A.h3,A.fj,A.hb,A.j6,A.jP,A.jS,A.jf,A.jK,A.jx,A.jF,A.ju,A.iQ,A.iO])
q(A.aC,[A.cX,A.dq])
r(A.b0,A.d1)
r(A.dt,A.b0)
r(A.du,A.dt)
r(A.bc,A.du)
q(A.bc,[A.ea,A.d2,A.bG])
r(A.cw,A.eH)
r(A.ay,A.dy)
r(A.cq,A.ay)
q(A.dS,[A.hE,A.hD,A.fx,A.fl,A.fs,A.ft,A.fu,A.fv,A.fq,A.fr,A.fm,A.fn,A.fo,A.fp,A.fw,A.ho,A.hc,A.i3,A.i4,A.j7])
q(A.aI,[A.c5,A.dY,A.e7])
q(A.dV,[A.dR,A.f9,A.fE,A.fD,A.h6,A.h5])
r(A.e8,A.cY)
r(A.hr,A.hs)
r(A.ez,A.dY)
q(A.aZ,[A.ch,A.e_,A.d4])
r(A.eG,A.dE)
r(A.bN,A.cy)
r(A.d5,A.dv)
r(A.cc,A.h_)
q(A.cc,[A.eh,A.ey,A.eA])
r(A.ca,A.em)
q(A.ck,[A.bl,A.dc])
r(A.eo,A.en)
r(A.bh,A.dc)
r(A.ep,A.er)
r(A.dX,A.ep)
q(A.eo,[A.de,A.cp])
q(A.dH,[A.ai,A.bH,A.bF])
q(A.hn,[A.aK,A.dp,A.Z])
q(A.P,[A.eV,A.eS,A.ao])
r(A.eW,A.eV)
r(A.bP,A.eW)
r(A.bO,A.eS)
r(A.dP,A.i)
r(A.eQ,A.c4)
r(A.eU,A.eT)
r(A.eD,A.eU)
r(A.eC,A.eR)
s(A.cn,A.ax)
s(A.dt,A.r)
s(A.du,A.aL)
s(A.co,A.aq)
s(A.cx,A.aq)
s(A.dv,A.r)
s(A.eS,A.r)
s(A.eV,A.z)
s(A.eW,A.aN)
s(A.eR,A.r)
s(A.eT,A.z)
s(A.eU,A.aN)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n8:"double",bA:"num",d:"String",k:"bool",bd:"Null",p:"List",v:"Object",w:"Map",aM:"JSObject"},mangledNames:{},types:["k(d)","@(@)","k(@)","d(@)","d(d)","bd()","h(v?)","k(v?)","~()","k(v?,v?)","k(af)","~(d)","k(w<d,@>)","k(d,d)","k(@,@)","+nearestLineEnding,nextNodeColStart(h,h)()","@(d)","h()","~(v?,v?)","P()","~(d[cj?])","P(w<@,@>)","@()","d(M<@,P>)","d(P)","p<d>(w<d,p<d>>)","k(d,k)","T(bp)","k(+column,type(h,Z?))","k(cg[h])","~(P)","~(@,P)","~(@,@)","@(w<@,@>)","v(aF)","v(af)","d(d?)","d(h,d,d)","bh()","h(af,af)","w<d,d>(w<d,d>,d)","P(@)","0&(d,h?)","~(h,h,h)","k(M<h,d>)","v?(@)","d(d,d,d)","h(h,d)","0^(0^,0^)<bA>","d(d[d])","h(d{fallback:h?})","@(@,d)","v?(v?)","k(d,p<d>)","h(h,h)","k(M<d,w<d,p<d>>>)","p<d>(M<d,w<d,p<d>>>)","p<aF>(M<v,p<af>>)","k(M<d,w<d,@>>)","d(b_)","k(p<d>)","k(h?)","d(p<w<d,@>>)","@(w<d,@>)","T(bw)","h(aF)","k(bV?)","h(d{onError:h(d)?,radix:h?})","h?(d{radix:h?})","p<d>()","p<d>(d,p<d>)","d?()","p<d>(d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b2&&a.b(c.a)&&b.b(c.b),"2;column,type":(a,b)=>c=>c instanceof A.ct&&a.b(c.a)&&b.b(c.b),"2;compactCharOffset,lineEndingIndex":(a,b)=>c=>c instanceof A.bU&&a.b(c.a)&&b.b(c.b),"2;end,start":(a,b)=>c=>c instanceof A.cu&&a.b(c.a)&&b.b(c.b),"2;indent,trailingBreaks":(a,b)=>c=>c instanceof A.dw&&a.b(c.a)&&b.b(c.b),"2;nearestLineEnding,nextNodeColStart":(a,b)=>c=>c instanceof A.cv&&a.b(c.a)&&b.b(c.b),"3;index,keyNode,valueNode":(a,b,c)=>d=>d instanceof A.dx&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.p3(v.typeUniverse,JSON.parse('{"br":"bs","eg":"bs","bM":"bs","e4":{"k":[],"as":[]},"cS":{"bd":[],"as":[]},"cV":{"aM":[]},"bs":{"aM":[]},"K":{"p":["1"],"x":["1"],"aM":[],"f":["1"]},"e3":{"d8":[]},"fA":{"K":["1"],"p":["1"],"x":["1"],"aM":[],"f":["1"]},"b6":{"L":["1"]},"cT":{"bA":[]},"cR":{"h":[],"bA":[],"as":[]},"e5":{"bA":[],"as":[]},"bq":{"d":[],"cg":[],"as":[]},"cZ":{"S":[]},"aH":{"r":["h"],"ax":["h"],"p":["h"],"x":["h"],"f":["h"],"r.E":"h","ax.E":"h"},"x":{"f":["1"]},"y":{"x":["1"],"f":["1"]},"bK":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"a3":{"L":["1"]},"bb":{"f":["2"],"f.E":"2"},"bC":{"bb":["1","2"],"x":["2"],"f":["2"],"f.E":"2"},"d0":{"L":["2"]},"H":{"y":["2"],"x":["2"],"f":["2"],"f.E":"2","y.E":"2"},"q":{"f":["1"],"f.E":"1"},"bk":{"L":["1"]},"aB":{"f":["2"],"f.E":"2"},"cQ":{"L":["2"]},"bg":{"f":["1"],"f.E":"1"},"c9":{"bg":["1"],"x":["1"],"f":["1"],"f.E":"1"},"da":{"L":["1"]},"bD":{"x":["1"],"f":["1"],"f.E":"1"},"cP":{"L":["1"]},"dl":{"f":["1"],"f.E":"1"},"dm":{"L":["1"]},"b8":{"f":["+(h,1)"],"f.E":"+(h,1)"},"c8":{"b8":["1"],"x":["+(h,1)"],"f":["+(h,1)"],"f.E":"+(h,1)"},"bE":{"L":["+(h,1)"]},"cn":{"r":["1"],"ax":["1"],"p":["1"],"x":["1"],"f":["1"]},"eN":{"y":["h"],"x":["h"],"f":["h"],"f.E":"h","y.E":"h"},"d_":{"z":["h","1"],"aq":["h","1"],"w":["h","1"],"z.K":"h","z.V":"1","aq.K":"h","aq.V":"1"},"d7":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"b2":{"aX":[],"az":[]},"ct":{"aX":[],"az":[]},"bU":{"aX":[],"az":[]},"cu":{"aX":[],"az":[]},"dw":{"aX":[],"az":[]},"cv":{"aX":[],"az":[]},"dx":{"cs":[],"az":[]},"cL":{"b1":["1","2"],"cx":["1","2"],"cf":["1","2"],"aq":["1","2"],"w":["1","2"],"aq.K":"1","aq.V":"2"},"cK":{"w":["1","2"]},"aJ":{"cK":["1","2"],"w":["1","2"]},"bQ":{"f":["1"],"f.E":"1"},"bR":{"L":["1"]},"cM":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cN":{"cM":["1"],"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"e1":{"ar":[],"b7":[]},"cb":{"ar":[],"b7":[]},"d3":{"S":[]},"e6":{"S":[]},"eu":{"S":[]},"eb":{"aA":[]},"ar":{"b7":[]},"dS":{"ar":[],"b7":[]},"dT":{"ar":[],"b7":[]},"es":{"ar":[],"b7":[]},"eq":{"ar":[],"b7":[]},"c6":{"ar":[],"b7":[]},"ek":{"S":[]},"aC":{"z":["1","2"],"fF":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"ak":{"x":["1"],"f":["1"],"f.E":"1"},"aj":{"L":["1"]},"aE":{"x":["1"],"f":["1"],"f.E":"1"},"aD":{"L":["1"]},"Q":{"x":["M<1,2>"],"f":["M<1,2>"],"f.E":"M<1,2>"},"ba":{"L":["M<1,2>"]},"cX":{"aC":["1","2"],"z":["1","2"],"fF":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"aX":{"az":[]},"cs":{"az":[]},"b9":{"op":[],"cg":[]},"cr":{"d6":[],"b_":[]},"eF":{"f":["d6"],"f.E":"d6"},"dn":{"L":["d6"]},"cm":{"b_":[]},"eO":{"f":["b_"],"f.E":"b_"},"eP":{"L":["b_"]},"d1":{"aM":[]},"b0":{"ce":["1"],"aM":[]},"bc":{"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"]},"ea":{"bc":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"as":[],"r.E":"h","aL.E":"h"},"d2":{"bc":[],"kJ":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"as":[],"r.E":"h","aL.E":"h"},"bG":{"bc":[],"kK":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"as":[],"r.E":"h","aL.E":"h"},"eH":{"S":[]},"cw":{"S":[]},"dz":{"L":["1"]},"bx":{"f":["1"],"f.E":"1"},"dq":{"aC":["1","2"],"z":["1","2"],"fF":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"ay":{"bf":["1"],"kB":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cq":{"ay":["1"],"bf":["1"],"kB":["1"],"d9":["1"],"x":["1"],"f":["1"]},"bS":{"L":["1"]},"di":{"r":["1"],"ax":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1","ax.E":"1"},"r":{"p":["1"],"x":["1"],"f":["1"]},"z":{"w":["1","2"]},"co":{"z":["1","2"],"aq":["1","2"],"w":["1","2"]},"dr":{"x":["2"],"f":["2"],"f.E":"2"},"ds":{"L":["2"]},"cf":{"w":["1","2"]},"b1":{"cx":["1","2"],"cf":["1","2"],"aq":["1","2"],"w":["1","2"],"aq.K":"1","aq.V":"2"},"bf":{"d9":["1"],"x":["1"],"f":["1"]},"dy":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"eK":{"z":["d","@"],"w":["d","@"],"z.K":"d","z.V":"@"},"eL":{"y":["d"],"x":["d"],"f":["d"],"f.E":"d","y.E":"d"},"c5":{"aI":["p<h>","d"],"aI.S":"p<h>"},"dY":{"aI":["d","p<h>"]},"cY":{"S":[]},"e8":{"S":[]},"e7":{"aI":["v?","d"],"aI.S":"v?"},"ez":{"aI":["d","p<h>"],"aI.S":"d"},"h":{"bA":[]},"p":{"x":["1"],"f":["1"]},"d6":{"b_":[]},"d":{"cg":[]},"c4":{"S":[]},"dh":{"S":[]},"aZ":{"S":[]},"ch":{"S":[]},"e_":{"S":[]},"dj":{"S":[]},"et":{"S":[]},"cl":{"S":[]},"dU":{"S":[]},"ed":{"S":[]},"dd":{"S":[]},"eI":{"aA":[]},"i":{"aA":[]},"Y":{"ow":[]},"dE":{"ev":[]},"aO":{"ev":[]},"eG":{"ev":[]},"bN":{"cy":["1","f<1>"],"cy.T":"f<1>"},"d5":{"r":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1"},"ef":{"aA":[]},"eh":{"cc":[]},"ey":{"cc":[]},"eA":{"cc":[]},"ca":{"bI":[]},"bl":{"o8":[],"bh":[],"cj":[]},"em":{"bI":[]},"dc":{"cj":[]},"en":{"aA":[]},"eo":{"i":[],"aA":[]},"ck":{"cj":[]},"bh":{"cj":[]},"dX":{"ep":[]},"ap":{"oi":[]},"de":{"i":[],"aA":[]},"cO":{"ab":[]},"c7":{"ab":[]},"cG":{"ab":[]},"dH":{"ab":[]},"ai":{"ab":[]},"bH":{"ab":[]},"bF":{"ab":[]},"bp":{"T":[]},"bw":{"T":[]},"dk":{"T":[]},"dg":{"T":[]},"cH":{"T":[]},"bu":{"T":[]},"cp":{"i":[],"aA":[]},"bP":{"z":["@","@"],"aN":["@","@"],"P":[],"w":["@","@"],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"bO":{"r":["@"],"p":["@"],"x":["@"],"P":[],"f":["@"],"r.E":"@"},"ao":{"P":[]},"d4":{"S":[]},"dP":{"i":[],"aA":[]},"eQ":{"S":[]},"eE":{"ao":[],"P":[]},"eD":{"bP":[],"z":["@","@"],"aN":["@","@"],"w":["@","@"],"P":[],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"eC":{"bO":[],"r":["@"],"p":["@"],"x":["@"],"f":["@"],"P":[],"r.E":"@"},"od":{"p":["h"],"x":["h"],"f":["h"]},"kK":{"p":["h"],"x":["h"],"f":["h"]},"kJ":{"p":["h"],"x":["h"],"f":["h"]}}'))
A.p2(v.typeUniverse,JSON.parse('{"x":1,"cn":1,"b0":1,"co":2,"dy":1,"dV":2,"dv":1}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",o:" connects to different entries in multiple chains; adjust the selection",s:" must not be greater than the number of characters in the file, ",n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority"}
var t=(function rtii(){var s=A.aQ
return{a6:s("cG"),B:s("c5"),V:s("aH"),w:s("aJ<d,d>"),gR:s("c7"),dg:s("cO"),W:s("x<@>"),bU:s("S"),g8:s("aA"),f_:s("aB<d,d>"),d:s("i"),_:s("b7"),cs:s("f<d>"),ah:s("f<d>(d)"),R:s("f<@>"),hb:s("f<h>"),gT:s("K<p<w<d,@>>>"),Z:s("K<w<d,@>>"),dm:s("K<w<@,@>>"),a2:s("K<+column,type(h,Z?)>"),c0:s("K<db>"),s:s("K<d>"),l:s("K<bL>"),fT:s("K<P>"),r:s("K<af>"),ef:s("K<aF>"),aq:s("K<a0>"),v:s("K<@>"),t:s("K<h>"),d4:s("K<d?>"),g0:s("K<bV?>"),u:s("cS"),o:s("aM"),J:s("br"),aU:s("ce<@>"),D:s("p<w<d,@>>"),a:s("p<d>"),j:s("p<@>"),L:s("p<h>"),E:s("p<af?>"),x:s("M<@,P>"),a9:s("M<h,d>"),aS:s("M<v,p<af>>"),aw:s("M<d,w<d,@>>"),fk:s("M<d,w<d,p<d>>>"),G:s("w<d,d>"),P:s("w<d,@>"),f:s("w<@,@>"),O:s("w<d,p<d>>"),e:s("H<d,d>"),do:s("H<d,@>"),gh:s("H<w<d,@>,@>"),bz:s("H<d,h?>"),fY:s("bF"),eB:s("bc"),bm:s("bG"),b:s("bd"),K:s("v"),eh:s("cg"),co:s("d5<T>"),fl:s("rU"),bQ:s("+()"),eY:s("+column,type(h,Z?)"),ei:s("+(v?,v?)"),cz:s("d6"),fy:s("ai"),f2:s("bu"),fP:s("bH"),F:s("bI"),I:s("cj"),q:s("bh"),N:s("d"),gQ:s("d(b_)"),c:s("d(d)"),h7:s("bL"),ci:s("as"),ak:s("bM"),ga:s("di<P>"),dw:s("b1<d,d>"),gr:s("b1<@,P>"),k:s("ev"),U:s("q<d>"),fj:s("bk<d>"),eJ:s("dl<d>"),h:s("bO"),S:s("bP"),T:s("P"),m:s("ao"),C:s("af"),A:s("aF"),cR:s("cq<v?>"),dj:s("bx<d>"),y:s("k"),Q:s("k(d)"),as:s("k(af)"),i:s("n8"),z:s("@"),dY:s("@(w<d,@>)"),dO:s("@(d)"),p:s("h"),eH:s("lK<bd>?"),an:s("aM?"),g:s("p<@>?"),Y:s("w<@,@>?"),X:s("v?"),dk:s("d?"),ey:s("d(b_)?"),fs:s("T?"),gS:s("af?"),M:s("eM?"),b2:s("bV?"),fQ:s("k?"),cD:s("n8?"),h6:s("h?"),ck:s("h(d)?"),bR:s("h?(d)"),cg:s("bA?"),H:s("bA"),n:s("~"),cA:s("~(d,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cm=J.e2.prototype
B.b=J.K.prototype
B.d=J.cR.prototype
B.cn=J.cT.prototype
B.a=J.bq.prototype
B.co=J.br.prototype
B.cp=J.cV.prototype
B.L=A.d2.prototype
B.an=A.bG.prototype
B.aq=J.eg.prototype
B.U=J.bM.prototype
B.aE=new A.dR(!1)
B.v=new A.c5(B.aE)
B.aF=new A.dR(!0)
B.a3=new A.c5(B.aF)
B.aG=new A.cb(A.r6(),A.aQ("cb<h>"))
B.x=new A.f9()
B.cM=new A.dW(A.aQ("dW<0&>"))
B.a4=new A.cP(A.aQ("cP<0&>"))
B.aH=new A.cd(A.aQ("cd<@>"))
B.aI=new A.cd(A.aQ("cd<v?>"))
B.a5=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aJ=function() {
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
B.aO=function(getTagFallback) {
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
B.aK=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aN=function(hooks) {
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
B.aM=function(hooks) {
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
B.aL=function(hooks) {
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

B.c=new A.e7()
B.aP=new A.ed()
B.n=new A.fX()
B.a7=new A.bN(A.aQ("bN<@>"))
B.aQ=new A.bN(A.aQ("bN<v?>"))
B.e=new A.ez()
B.aR=new A.h6()
B.i=new A.cJ("ANY")
B.m=new A.cJ("BLOCK")
B.f=new A.cJ("FLOW")
B.aS=new A.aK(0,"streamStart")
B.a8=new A.aK(1,"streamEnd")
B.aT=new A.aK(2,"documentStart")
B.aU=new A.aK(3,"documentEnd")
B.a9=new A.aK(4,"alias")
B.aa=new A.aK(5,"scalar")
B.ab=new A.aK(6,"sequenceStart")
B.y=new A.aK(7,"sequenceEnd")
B.ac=new A.aK(8,"mappingStart")
B.z=new A.aK(9,"mappingEnd")
B.aV=new A.i("Select a valid source, behavior and format",null,null)
B.aW=new A.i("HTTP/SOCKS5 node URLs do not support query parameters",null,null)
B.aX=new A.i("Name conflicts with an existing node or proxy group",null,null)
B.aY=new A.i("Invalid rule provider name or content",null,null)
B.aZ=new A.i("Target nodes must not include front or back nodes",null,null)
B.b_=new A.i("Unsupported SS encryption method",null,null)
B.b0=new A.i("Invalid SS plugin boolean parameter",null,null)
B.b1=new A.i("Configuration nesting is too deep",null,null)
B.ad=new A.i("Node port must be between 1 and 65535",null,null)
B.b2=new A.i("Proxy group name must not be empty or contain commas or newlines",null,null)
B.b3=new A.i("Invalid subscription index",null,null)
B.b4=new A.i("Enter a local file path",null,null)
B.b5=new A.i("Proxy groups or chains form a cycle",null,null)
B.b6=new A.i("Host must not contain a URL, path or whitespace",null,null)
B.b7=new A.i("URL contains unsupported parameters; import YAML configuration instead",null,null)
B.b8=new A.i("Invalid SS authentication",null,null)
B.I=new A.i("Invalid node URL format",null,null)
B.ae=new A.i("Invalid node UUID format",null,null)
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
B.bj=new A.i("Invalid VMess address, user ID, port or alterId",null,null)
B.A=new A.i("Configuration has no embedded nodes; update subscriptions first",null,null)
B.bk=new A.i("Invalid capture mode",null,null)
B.bl=new A.i("Invalid TUIC congestion control type",null,null)
B.bm=new A.i("Unsupported configuration operation",null,null)
B.bn=new A.i("SS node port is missing",null,null)
B.bo=new A.i("Rule provider path is already in use",null,null)
B.bp=new A.i("DNS configuration must be a YAML mapping",null,null)
B.bq=new A.i("Unsupported node transport; import YAML configuration instead",null,null)
B.af=new A.i("Select at least one node on each side",null,null)
B.br=new A.i("Invalid Reality short-id format",null,null)
B.bs=new A.i("Invalid TUN stack",null,null)
B.bt=new A.i("Enter a valid HTTP / HTTPS download URL",null,null)
B.bu=new A.i("Enter a valid node URL",null,null)
B.bv=new A.i("Enter inline rules, one per line",null,null)
B.bw=new A.i("Invalid VLESS UDP encoding",null,null)
B.bx=new A.i("Invalid Hysteria2 bandwidth parameter",null,null)
B.by=new A.i("Rule target does not exist; select a valid node or proxy group",null,null)
B.ag=new A.i("Proxy chain forms a cycle; select other nodes",null,null)
B.ah=new A.i("Enter a Host domain or IP, optionally with a port; do not enter a URL",null,null)
B.bz=new A.i("This group is still referenced by rules, groups or chains; update those references first",null,null)
B.ai=new A.i("Entry and exit nodes must be different",null,null)
B.bA=new A.i("Unsupported node security type",null,null)
B.bB=new A.i("Configuration must be a YAML mapping",null,null)
B.bC=new A.i("This provider is still referenced; edit or delete the corresponding RULE-SET rules first",null,null)
B.bD=new A.i("Invalid access control; enter an IP, CIDR subnet, or IPv4 start-end range",null,null)
B.bE=new A.i("Invalid VMess URL Base64 or JSON encoding",null,null)
B.bF=new A.i("Enter a vmess:// node URL",null,null)
B.bG=new A.i("Original rule provider does not exist",null,null)
B.bH=new A.i("Subscription node is missing a name or type",null,null)
B.bI=new A.i("Invalid SS address or authentication",null,null)
B.J=new A.i("Selected node no longer exists; select it again",null,null)
B.bJ=new A.i("Invalid node URL Base64 encoding",null,null)
B.bK=new A.i("Invalid node address or path",null,null)
B.bL=new A.i("Access control supports at most 64 entries",null,null)
B.bM=new A.i("Proxy group members can only be changed through the node matching regex",null,null)
B.bN=new A.i("Only manually added nodes can be deleted",null,null)
B.bO=new A.i("Duplicate subscription node name",null,null)
B.bP=new A.i("SS obfs mode must be http or tls",null,null)
B.bQ=new A.i("Invalid TUIC UDP mode",null,null)
B.bR=new A.i("Subscription node name conflicts with a default policy",null,null)
B.bS=new A.i("Unsupported SS plugin parameter",null,null)
B.bT=new A.i("Duplicate node URL parameter",null,null)
B.bU=new A.i("SS plugin only supports WebSocket mode",null,null)
B.bV=new A.i("Invalid controller port",null,null)
B.bW=new A.i("Rule provider configuration must be a mapping",null,null)
B.bX=new A.i("Manual node list has changed; reopen the page",null,null)
B.bY=new A.i("Proxy group has no nodes; adjust the regex or select DIRECT",null,null)
B.bZ=new A.i("Name must not be empty or contain commas, brackets or newlines",null,null)
B.c_=new A.i("Hysteria2 obfuscation password requires an obfs parameter",null,null)
B.c0=new A.i("Enter a valid IP listen address",null,null)
B.c1=new A.i("Invalid Hysteria2 port hopping range",null,null)
B.c2=new A.i("TUIC v5 requires a UUID and password",null,null)
B.aj=new A.i("Keep at least one target node",null,null)
B.c3=new A.i("Invalid Reality public key format",null,null)
B.c4=new A.i("Invalid WebSocket early data size",null,null)
B.c5=new A.i("Vision requires TLS/Reality and TCP transport",null,null)
B.c6=new A.i("Front and back nodes must be different",null,null)
B.c7=new A.i("Enter a valid LAN interface name; lo and Mclash cannot be selected",null,null)
B.c8=new A.i("Controller port must be between 1 and 65535",null,null)
B.c9=new A.i("Rule provider name already exists",null,null)
B.ca=new A.i("Subscription has no embedded proxies; use a Mihomo subscription containing nodes",null,null)
B.cb=new A.i("Update interval must be a non-negative integer",null,null)
B.cc=new A.i("Enter a subscription URL",null,null)
B.cd=new A.i("MRS only supports HTTP or file providers with domain / ipcidr behavior",null,null)
B.ce=new A.i("Unsupported Hysteria2 obfuscation type",null,null)
B.cf=new A.i("AnyTLS only supports TLS and TCP",null,null)
B.cg=new A.i("Unable to identify subscription node ownership; update all subscriptions first",null,null)
B.ch=new A.i("Invalid XHTTP mode",null,null)
B.ci=new A.i("Proxy group order must contain every existing group exactly once",null,null)
B.cj=new A.i("Unsupported SS plugin; import YAML configuration instead",null,null)
B.ck=new A.i("Unsupported VLESS encryption type",null,null)
B.ak=new A.i("Chain groups are managed by Proxy chains",null,null)
B.cl=new A.i("Select at least one target node",null,null)
B.cq=new A.fD(null)
B.cr=new A.fE(null)
B.cs=s(["vless","trojan","ss","hysteria2","hy2","tuic","anytls","socks","socks5","http","https"],t.s)
B.ct=s(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],t.s)
B.cu=s([],t.s)
B.cw={addNode:0,host:1,prependProxy:2,groups:3,rules:4}
B.K=new A.aJ(B.cw,["proxies","proxies","proxies","proxy-groups","rules"],t.w)
B.ao={"\ud83d\ude80 Domestic":0,"\ud83c\udf0d Foreign":1}
B.q=new A.aJ(B.ao,["# Mclash domestic-filter: ","# Mclash foreign-filter: "],t.w)
B.al=new A.aJ(B.ao,["",""],t.w)
B.ap={}
B.am=new A.aJ(B.ap,[],A.aQ("aJ<d,p<d>>"))
B.cv=new A.aJ(B.ap,[],t.w)
B.cy=new A.bU(-1,-1)
B.cz=new A.ct(-1,null)
B.j=new A.bt("ANY")
B.M=new A.bt("DOUBLE_QUOTED")
B.N=new A.bt("FOLDED")
B.O=new A.bt("LITERAL")
B.h=new A.bt("PLAIN")
B.B=new A.bt("SINGLE_QUOTED")
B.cx={"aes-128-gcm":0,"aes-192-gcm":1,"aes-256-gcm":2,"chacha20-ietf-poly1305":3,"xchacha20-ietf-poly1305":4,"2022-blake3-aes-128-gcm":5,"2022-blake3-aes-256-gcm":6,"2022-blake3-chacha20-poly1305":7,"aes-128-ctr":8,"aes-192-ctr":9,"aes-256-ctr":10,"aes-128-cfb":11,"aes-192-cfb":12,"aes-256-cfb":13,"chacha20-ietf":14,chacha20:15,xchacha20:16,"rc4-md5":17,none:18,"aes-128-ccm":19,"aes-192-ccm":20,"aes-256-ccm":21,"aes-128-gcm-siv":22,"aes-256-gcm-siv":23,"chacha8-ietf-poly1305":24,"xchacha8-ietf-poly1305":25,"lea-128-gcm":26,"lea-192-gcm":27,"lea-256-gcm":28,"rabbit128-poly1305":29,"aegis-128l":30,"aegis-256":31,"aez-384":32,"deoxys-ii-256-128":33}
B.cA=new A.cN(B.cx,34,A.aQ("cN<d>"))
B.cB=new A.Z(0,"streamStart")
B.w=new A.Z(1,"streamEnd")
B.r=new A.Z(10,"flowSequenceEnd")
B.ar=new A.Z(11,"flowMappingStart")
B.t=new A.Z(12,"flowMappingEnd")
B.u=new A.Z(13,"blockEntry")
B.o=new A.Z(14,"flowEntry")
B.k=new A.Z(15,"key")
B.l=new A.Z(16,"value")
B.cC=new A.Z(17,"alias")
B.cD=new A.Z(18,"anchor")
B.cE=new A.Z(19,"tag")
B.P=new A.Z(2,"versionDirective")
B.as=new A.Z(20,"scalar")
B.Q=new A.Z(3,"tagDirective")
B.R=new A.Z(4,"documentStart")
B.S=new A.Z(5,"documentEnd")
B.T=new A.Z(6,"blockSequenceStart")
B.C=new A.Z(7,"blockMappingStart")
B.p=new A.Z(8,"blockEnd")
B.at=new A.Z(9,"flowSequenceStart")
B.cF=A.k2("od")
B.cG=A.k2("v")
B.cH=A.k2("kJ")
B.cI=A.k2("kK")
B.cJ=new A.h5(!1)
B.V=new A.dp(0,"strip")
B.au=new A.dp(1,"clip")
B.W=new A.dp(2,"keep")
B.X=new A.a0("FLOW_SEQUENCE_ENTRY_MAPPING_VALUE")
B.av=new A.a0("BLOCK_MAPPING_FIRST_KEY")
B.D=new A.a0("BLOCK_MAPPING_KEY")
B.E=new A.a0("BLOCK_MAPPING_VALUE")
B.aw=new A.a0("BLOCK_NODE")
B.F=new A.a0("BLOCK_SEQUENCE_ENTRY")
B.ax=new A.a0("BLOCK_SEQUENCE_FIRST_ENTRY")
B.Y=new A.a0("FLOW_SEQUENCE_ENTRY_MAPPING_END")
B.ay=new A.a0("DOCUMENT_CONTENT")
B.Z=new A.a0("DOCUMENT_END")
B.a_=new A.a0("DOCUMENT_START")
B.a0=new A.a0("END")
B.az=new A.a0("FLOW_MAPPING_EMPTY_VALUE")
B.aA=new A.a0("FLOW_MAPPING_FIRST_KEY")
B.G=new A.a0("FLOW_MAPPING_KEY")
B.a1=new A.a0("FLOW_MAPPING_VALUE")
B.cK=new A.a0("FLOW_NODE")
B.a2=new A.a0("FLOW_SEQUENCE_ENTRY")
B.aB=new A.a0("FLOW_SEQUENCE_FIRST_ENTRY")
B.H=new A.a0("INDENTLESS_SEQUENCE_ENTRY")
B.aC=new A.a0("STREAM_START")
B.cL=new A.a0("BLOCK_NODE_OR_INDENTLESS_SEQUENCE")
B.aD=new A.a0("FLOW_SEQUENCE_ENTRY_MAPPING_KEY")})();(function staticFields(){$.hp=null
$.aG=A.c([],A.aQ("K<v>"))
$.lV=null
$.lD=null
$.lC=null
$.ne=null
$.n0=null
$.nn=null
$.iN=null
$.j4=null
$.la=null
$.hx=A.c([],A.aQ("K<p<v>?>"))
$.m2=""
$.m3=null
$.mH=null
$.hY=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rT","ny",()=>A.nb("_$dart_dartClosure"))
s($,"rS","lr",()=>A.nb("_$dart_dartClosure_dartJSInterop"))
s($,"tg","nP",()=>A.c([new J.e3()],A.aQ("K<d8>")))
s($,"rZ","nA",()=>A.bj(A.h1({
toString:function(){return"$receiver$"}})))
s($,"t_","nB",()=>A.bj(A.h1({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"t0","nC",()=>A.bj(A.h1(null)))
s($,"t1","nD",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"t4","nG",()=>A.bj(A.h1(void 0)))
s($,"t5","nH",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"t3","nF",()=>A.bj(A.lZ(null)))
s($,"t2","nE",()=>A.bj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"t7","nJ",()=>A.bj(A.lZ(void 0)))
s($,"t6","nI",()=>A.bj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"tc","nN",()=>A.lS(4096))
s($,"ta","nL",()=>new A.hE().$0())
s($,"tb","nM",()=>new A.hD().$0())
s($,"t9","lt",()=>new Int8Array(A.pv(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"t8","nK",()=>A.lS(0))
s($,"td","ko",()=>A.f1(B.cG))
s($,"th","lv",()=>new A.fa($.ls()))
s($,"rW","nz",()=>new A.eh(A.I("/",!0),A.I("[^/]$",!0),A.I("^/",!0)))
s($,"rY","f6",()=>new A.eA(A.I("[/\\\\]",!0),A.I("[^/\\\\]$",!0),A.I("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.I("^[/\\\\](?![/\\\\])",!0)))
s($,"rX","dO",()=>new A.ey(A.I("/",!0),A.I("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.I("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.I("^/",!0)))
s($,"rV","ls",()=>A.oy())
s($,"te","nO",()=>A.I("\\r\\n?|\\n",!0))
r($,"nx","kp",()=>new A.kn())
s($,"tk","lw",()=>A.a5([0,"\\0",7,"\\a",8,"\\b",11,"\\v",12,"\\f",13,"\\r",27,"\\e",133,"\\N",160,"\\_",8232,"\\L",8233,"\\P"],t.p,t.N))
s($,"tj","nQ",()=>{var q=A.fJ($.lw(),t.p,t.N)
q.j(0,9,"\\t")
q.j(0,10,"\\n")
q.j(0,34,'\\"')
q.j(0,47,"\\/")
q.j(0,92,"\\\\")
return q})
s($,"tf","lu",()=>A.I("[^ \\t]",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBufferView:A.d1,Int8Array:A.ea,Uint32Array:A.d2,Uint8Array:A.bG})
hunkHelpers.setOrUpdateLeafTags({ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false})
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.dt.$nativeSuperclassTag="ArrayBufferView"
A.du.$nativeSuperclassTag="ArrayBufferView"
A.bc.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.r3
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) { var message = result.error.replace(/^FormatException: /, ''); throw new Error(typeof i18n !== 'undefined' ? i18n.translate(message) : message); }
    return typeof i18n !== 'undefined' ? i18n.localizeGroups(result.value) : result.value;
  }
});
