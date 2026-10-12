// Generated from shared Mclash Dart code; rebuild with build-overrides.sh.
// SPDX-License-Identifier: GPL-3.0-only
'use strict';
'require baseclass';
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
if(a[b]!==s){A.rD(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.l0(b)
return new s(c,this)}:function(){if(s===null)s=A.l0(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.l0(a).prototype
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
ld(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l6(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.l8==null){A.qS()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.lX("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ho
if(o==null)o=$.ho=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.r0(a)
if(p!=null)return p
if(typeof a=="function")return B.co
s=Object.getPrototypeOf(a)
if(s==null)return B.aq
if(s===Object.prototype)return B.aq
if(typeof q=="function"){o=$.ho
if(o==null)o=$.ho=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.U,enumerable:false,writable:true,configurable:true})
return B.U}return B.U},
lJ(a,b){if(a<0||a>4294967295)throw A.a(A.a8(a,0,4294967295,"length",null))
return J.of(new Array(a),b)},
kv(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("J<0>"))},
ku(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("J<0>"))},
of(a,b){var s=A.c(a,b.i("J<0>"))
s.$flags=1
return s},
lK(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
og(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.lK(r))break;++b}return b},
lL(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.lK(q))break}return b},
aY(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.e4.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.e3.prototype
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
C(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
a3(a){if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l6(a)},
c_(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cm.prototype
return a},
u(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aY(a).S(a,b)},
l(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.qY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.C(a).h(a,b)},
nO(a,b,c){return J.a3(a).j(a,b,c)},
kp(a,b){return J.a3(a).t(a,b)},
kq(a,b){return J.c_(a).bq(a,b)},
nP(a,b){return J.a3(a).R(a,b)},
bo(a,b){return J.C(a).p(a,b)},
kr(a,b){return J.a3(a).T(a,b)},
nQ(a,b){return J.a3(a).an(a,b)},
lu(a){return J.a3(a).gU(a)},
ac(a){return J.aY(a).gY(a)},
cE(a){return J.C(a).gJ(a)},
cF(a){return J.C(a).gb4(a)},
F(a){return J.a3(a).gq(a)},
ks(a){return J.a3(a).gK(a)},
a6(a){return J.C(a).gk(a)},
nR(a){return J.aY(a).gaM(a)},
nS(a,b){return J.C(a).aq(a,b)},
nT(a,b,c){return J.C(a).af(a,b,c)},
aR(a,b,c){return J.a3(a).ac(a,b,c)},
nU(a,b,c){return J.c_(a).bu(a,b,c)},
kt(a,b){return J.a3(a).au(a,b)},
nV(a,b){return J.a3(a).ao(a,b)},
nW(a,b){return J.a3(a).bY(a,b)},
nX(a,b){return J.c_(a).bg(a,b)},
lv(a,b){return J.c_(a).u(a,b)},
bB(a,b){return J.c_(a).D(a,b)},
nY(a,b,c){return J.c_(a).v(a,b,c)},
nZ(a,b){return J.a3(a).a3(a,b)},
al(a){return J.aY(a).n(a)},
am(a,b){return J.a3(a).aJ(a,b)},
e1:function e1(){},
e3:function e3(){},
cS:function cS(){},
cV:function cV(){},
bs:function bs(){},
ef:function ef(){},
cm:function cm(){},
br:function br(){},
cU:function cU(){},
cW:function cW(){},
J:function J(a){this.$ti=a},
e2:function e2(){},
fz:function fz(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cT:function cT(){},
cR:function cR(){},
e4:function e4(){},
bq:function bq(){}},A={kx:function kx(){},
lN(a){return new A.cZ("Field '"+a+"' has been assigned during initialization.")},
j_(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bv(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kG(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eX(a,b,c){return a},
lc(a){var s,r
for(s=$.aF.length,r=0;r<s;++r)if(a===$.aF[r])return!0
return!1},
aW(a,b,c,d){A.ad(b,"start")
if(c!=null){A.ad(c,"end")
if(b>c)A.D(A.a8(b,0,c,"start",null))}return new A.bL(a,b,c,d.i("bL<0>"))},
fM(a,b,c,d){if(t.W.b(a))return new A.bC(a,b,c.i("@<0>").a8(d).i("bC<1,2>"))
return new A.bb(a,b,c.i("@<0>").a8(d).i("bb<1,2>"))},
oq(a,b,c){var s="count"
if(t.W.b(a)){A.cI(b,s,t.p)
A.ad(b,s)
return new A.c9(a,b,c.i("c9<0>"))}A.cI(b,s,t.p)
A.ad(b,s)
return new A.bg(a,b,c.i("bg<0>"))},
oa(a,b,c){if(t.W.b(a))return new A.c8(a,b,c.i("c8<0>"))
return new A.b8(a,b,c.i("b8<0>"))},
Z(){return new A.bK("No element")},
oc(){return new A.bK("Too many elements")},
lI(){return new A.bK("Too few elements")},
ek(a,b,c,d,e){if(c-b<=32)A.os(a,b,c,d,e)
else A.or(a,b,c,d,e)},
os(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.C(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aK()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
or(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.bp(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.bp(a4+a5,2),f=g-j,e=g+j,d=J.C(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
A.ek(a3,a4,r-2,a6,a7)
A.ek(a3,q+2,a5,a6,a7)
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
break}}A.ek(a3,r,q,a6,a7)}else A.ek(a3,r,q,a6,a7)},
cZ:function cZ(a){this.a=a},
aH:function aH(a){this.a=a},
fW:function fW(){},
x:function x(){},
y:function y(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a2:function a2(a,b,c){var _=this
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
aA:function aA(a,b,c){this.a=a
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
aw:function aw(){},
cn:function cn(){},
eM:function eM(a){this.a=a},
d_:function d_(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b){this.a=a
this.$ti=b},
lD(a,b,c){var s,r,q,p,o,n,m,l=A.j(a),k=A.N(new A.ai(a,l.i("ai<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.a7)(k),++i,p=o){r=k[i]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.N(new A.aD(a,l.i("aD<2>")),!0,c)
m=new A.aJ(q,n,b.i("@<0>").a8(c).i("aJ<1,2>"))
m.$keys=k
return m}return new A.cL(A.aj(a,b,c),b.i("@<0>").a8(c).i("cL<1,2>"))},
lE(){throw A.a(A.M("Cannot modify unmodifiable Map"))},
lF(){throw A.a(A.M("Cannot modify constant Set"))},
nq(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qY(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.al(a)
return s},
eh(a){var s,r=$.lS
if(r==null)r=$.lS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
aU(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.a(A.a8(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
lT(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.N(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ei(a){var s,r,q,p
if(a instanceof A.v)return A.as(A.a9(a),null)
s=J.aY(a)
if(s===B.cm||s===B.cp||t.ak.b(a)){r=B.a5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.as(A.a9(a),null)},
lU(a){var s,r,q
if(a==null||typeof a=="number"||A.eW(a))return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aq)return a.n(0)
if(a instanceof A.ay)return a.dG(!0)
s=$.nM()
for(r=0;r<1;++r){q=s[r].hf(a)
if(q!=null)return q}return"Instance of '"+A.ei(a)+"'"},
oi(){if(!!self.location)return self.location.href
return null},
lR(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ok(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<=65535)B.b.t(p,q)
else if(q<=1114111){B.b.t(p,55296+(B.d.b0(q-65536,10)&1023))
B.b.t(p,56320+(q&1023))}else throw A.a(A.dI(q))}return A.lR(p)},
oj(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<0)throw A.a(A.dI(q))
if(q>65535)return A.ok(a)}return A.lR(a)},
ol(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
A(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.b0(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.a8(a,0,1114111,null,null))},
qM(a){throw A.a(A.dI(a))},
b(a,b){if(a==null)J.a6(a)
throw A.a(A.dJ(a,b))},
dJ(a,b){var s,r="index"
if(!A.b3(b))return new A.aZ(!0,b,r,null)
s=J.a6(a)
if(b<0||b>=s)return A.e_(b,s,a,null,r)
return A.fS(b,r)},
qA(a,b,c){if(a<0||a>c)return A.a8(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a8(b,a,c,"end",null)
return new A.aZ(!0,b,"end",null)},
dI(a){return new A.aZ(!0,a,null,null)},
a(a){return A.af(a,new Error())},
af(a,b){var s
if(a==null)a=new A.dh()
b.dartException=a
s=A.rE
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
rE(){return J.al(this.dartException)},
D(a,b){throw A.af(a,b==null?new Error():b)},
V(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.D(A.pt(a,b,c),s)},
pt(a,b,c){var s,r,q,p,o,n,m,l,k
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
a7(a){throw A.a(A.Q(a))},
bj(a){var s,r,q,p,o,n
a=A.jo(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.h_(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h0(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lW(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ky(a,b){var s=b==null,r=s?null:b.method
return new A.e5(a,r,s?null:b.receiver)},
c3(a){if(a==null)return new A.ea(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.c1(a,a.dartException)
return A.q6(a)},
c1(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.b0(r,16)&8191)===10)switch(q){case 438:return A.c1(a,A.ky(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.c1(a,new A.d3())}}if(a instanceof TypeError){p=$.nx()
o=$.ny()
n=$.nz()
m=$.nA()
l=$.nD()
k=$.nE()
j=$.nC()
$.nB()
i=$.nG()
h=$.nF()
g=p.aL(s)
if(g!=null)return A.c1(a,A.ky(A.e(s),g))
else{g=o.aL(s)
if(g!=null){g.method="call"
return A.c1(a,A.ky(A.e(s),g))}else if(n.aL(s)!=null||m.aL(s)!=null||l.aL(s)!=null||k.aL(s)!=null||j.aL(s)!=null||m.aL(s)!=null||i.aL(s)!=null||h.aL(s)!=null){A.e(s)
return A.c1(a,new A.d3())}}return A.c1(a,new A.et(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dd()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.c1(a,new A.aZ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dd()
return a},
f0(a){if(a==null)return J.ac(a)
if(typeof a=="object")return A.eh(a)
return J.ac(a)},
qH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qI(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
pE(a,b,c,d,e,f){t._.a(a)
switch(A.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.eH("Unsupported number of arguments for wrapped closure"))},
qj(a,b){var s=a.$identity
if(!!s)return s
s=A.qk(a,b)
a.$identity=s
return s},
qk(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pE)},
o5(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ep().constructor.prototype):Object.create(new A.c6(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.o1(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
o1(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.o_)}throw A.a("Error in functionType of tearoff")},
o2(a,b,c,d){var s=A.lB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lC(a,b,c,d){if(c)return A.o4(a,b,d)
return A.o2(b.length,d,a,b)},
o3(a,b,c,d){var s=A.lB,r=A.o0
switch(b?-1:a){case 0:throw A.a(new A.ej("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
o4(a,b,c){var s,r
if($.lz==null)$.lz=A.ly("interceptor")
if($.lA==null)$.lA=A.ly("receiver")
s=b.length
r=A.o3(s,c,a,b)
return r},
l0(a){return A.o5(a)},
o_(a,b){return A.dD(v.typeUniverse,A.a9(a.a),b)},
lB(a){return a.a},
o0(a){return a.b},
ly(a){var s,r,q,p=new A.c6("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.a1("Field name "+a+" not found."))},
n8(a){return v.getIsolateTag(a)},
tg(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
r0(a){var s,r,q,p,o,n=A.e($.nb.$1(a)),m=$.iM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j3[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bX($.mY.$2(a,n))
if(q!=null){m=$.iM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j3[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.j8(s)
$.iM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j3[n]=s
return s}if(p==="-"){o=A.j8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nj(a,s)
if(p==="*")throw A.a(A.lX(n))
if(v.leafTags[n]===true){o=A.j8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nj(a,s)},
nj(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ld(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j8(a){return J.ld(a,!1,null,!!a.$ice)},
r2(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.j8(s)
else return J.ld(s,c,null,null)},
qS(){if(!0===$.l8)return
$.l8=!0
A.qT()},
qT(){var s,r,q,p,o,n,m,l
$.iM=Object.create(null)
$.j3=Object.create(null)
A.qR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nk.$1(o)
if(n!=null){m=A.r2(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qR(){var s,r,q,p,o,n,m=B.aJ()
m=A.cB(B.aK,A.cB(B.aL,A.cB(B.a6,A.cB(B.a6,A.cB(B.aM,A.cB(B.aN,A.cB(B.aO(B.a5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nb=new A.j0(p)
$.mY=new A.j1(o)
$.nk=new A.j2(n)},
cB(a,b){return a(b)||b},
qt(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kw(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.B("Illegal RegExp pattern ("+String(o)+")",a,null))},
rv(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.b9){s=B.a.D(a,c)
return b.b.test(s)}else return!J.kq(b,B.a.D(a,c)).gJ(0)},
n7(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jo(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aG(a,b,c){var s
if(typeof b=="string")return A.ry(a,b,c)
if(b instanceof A.b9){s=b.gdg()
s.lastIndex=0
return a.replace(s,A.n7(c))}return A.rx(a,b,c)},
rx(a,b,c){var s,r,q,p
for(s=J.kq(b,a),s=s.gq(s),r=0,q="";s.l();){p=s.gm()
q=q+a.substring(r,p.gC())+c
r=p.gH()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
ry(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.jo(b),"g"),A.n7(c))},
mS(a){return a},
rw(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.bq(0,a),s=new A.dn(s.a,s.b,s.c),r=t.cz,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.m(A.mS(B.a.v(a,q,m)))+A.m(c.$1(o))
q=m+n[0].length}s=p+A.m(A.mS(B.a.D(a,q)))
return s.charCodeAt(0)==0?s:s},
rz(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.np(a,s,s+b.length,c)},
np(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
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
e0:function e0(){},
cb:function cb(a,b){this.a=a
this.$ti=b},
d8:function d8(){},
h_:function h_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d3:function d3(){},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a},
ea:function ea(a){this.a=a},
aq:function aq(){},
dR:function dR(){},
dS:function dS(){},
er:function er(){},
ep:function ep(){},
c6:function c6(a,b){this.a=a
this.b=b},
ej:function ej(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fB:function fB(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aD:function aD(a,b){this.a=a
this.$ti=b},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
P:function P(a,b){this.a=a
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
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
ay:function ay(){},
aX:function aX(){},
cs:function cs(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(a){this.b=a},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cl:function cl(a,b){this.a=a
this.c=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
rD(a){throw A.af(A.lN(a),new Error())},
k0(){throw A.af(A.lN(""),new Error())},
m4(){var s=new A.hk()
return s.b=s},
hk:function hk(){this.b=null},
pu(a){return a},
lP(a){return new Uint8Array(a)},
hV(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.dJ(b,a))},
mD(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.qA(a,b,c))
return b},
d1:function d1(){},
b0:function b0(){},
bc:function bc(){},
e9:function e9(){},
d2:function d2(){},
bG:function bG(){},
dt:function dt(){},
du:function du(){},
kD(a,b){var s=b.c
return s==null?b.c=A.dB(a,"lH",[b.x]):s},
lV(a){var s=a.w
if(s===6||s===7)return A.lV(a.x)
return s===11||s===12},
op(a){return a.as},
aQ(a){return A.hy(v.typeUniverse,a,!1)},
qV(a,b){var s,r,q,p,o
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
return A.mg(a1,r,!0)
case 7:s=a2.x
r=A.bz(a1,s,a3,a4)
if(r===s)return a2
return A.mf(a1,r,!0)
case 8:q=a2.y
p=A.cA(a1,q,a3,a4)
if(p===q)return a2
return A.dB(a1,a2.x,p)
case 9:o=a2.x
n=A.bz(a1,o,a3,a4)
m=a2.y
l=A.cA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.kL(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cA(a1,j,a3,a4)
if(i===j)return a2
return A.mh(a1,k,i)
case 11:h=a2.x
g=A.bz(a1,h,a3,a4)
f=a2.y
e=A.q_(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.me(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cA(a1,d,a3,a4)
o=a2.x
n=A.bz(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.kM(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.dP("Attempted to substitute unexpected RTI kind "+a0))}},
cA(a,b,c,d){var s,r,q,p,o=b.length,n=A.hF(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bz(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q0(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hF(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bz(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
q_(a,b,c,d){var s,r=b.a,q=A.cA(a,r,c,d),p=b.b,o=A.cA(a,p,c,d),n=b.c,m=A.q0(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eI()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
iA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qK(s)
return a.$S()}return null},
qU(a,b){var s
if(A.lV(b))if(a instanceof A.aq){s=A.iA(a)
if(s!=null)return s}return A.a9(a)},
a9(a){if(a instanceof A.v)return A.j(a)
if(Array.isArray(a))return A.t(a)
return A.kT(J.aY(a))},
t(a){var s=a[v.arrayRti],r=t.v
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.kT(a)},
kT(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pD(a,s)},
pD(a,b){var s=a instanceof A.aq?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.p3(v.typeUniverse,s.name)
b.$ccache=r
return r},
qK(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hy(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iX(a){return A.b4(A.j(a))},
l7(a){var s=A.iA(a)
return A.b4(s==null?A.a9(a):s)},
kV(a){var s
if(a instanceof A.ay)return A.qG(a.$r,a.ca())
s=a instanceof A.aq?A.iA(a):null
if(s!=null)return s
if(t.ci.b(a))return J.nR(a).a
if(Array.isArray(a))return A.t(a)
return A.a9(a)},
b4(a){var s=a.r
return s==null?a.r=new A.hx(a):s},
qG(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.b(q,0)
s=A.dD(v.typeUniverse,A.kV(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.mi(v.typeUniverse,s,A.kV(q[r]))}return A.dD(v.typeUniverse,s,a)},
k1(a){return A.b4(A.hy(v.typeUniverse,a,!1))},
pC(a){var s=this
s.b=A.pY(s)
return s.b(a)},
pY(a){var s,r,q,p,o
if(a===t.K)return A.pK
if(A.c0(a))return A.pO
s=a.w
if(s===6)return A.py
if(s===1)return A.mL
if(s===7)return A.pF
r=A.pX(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.c0)){a.f="$i"+q
if(q==="p")return A.pI
if(a===t.o)return A.pH
return A.pN}}else if(s===10){p=A.qt(a.x,a.y)
o=p==null?A.mL:p
return o==null?A.hU(o):o}return A.pw},
pX(a){if(a.w===8){if(a===t.p)return A.b3
if(a===t.i||a===t.H)return A.pJ
if(a===t.N)return A.pM
if(a===t.y)return A.eW}return null},
pB(a){var s=this,r=A.pv
if(A.c0(s))r=A.pn
else if(s===t.K)r=A.hU
else if(A.cD(s)){r=A.px
if(s===t.h6)r=A.hT
else if(s===t.dk)r=A.bX
else if(s===t.fQ)r=A.mA
else if(s===t.cg)r=A.mC
else if(s===t.cD)r=A.pk
else if(s===t.an)r=A.pm}else if(s===t.p)r=A.U
else if(s===t.N)r=A.e
else if(s===t.y)r=A.hS
else if(s===t.H)r=A.mB
else if(s===t.i)r=A.pj
else if(s===t.o)r=A.pl
s.a=r
return s.a(a)},
pw(a){var s=this
if(a==null)return A.cD(s)
return A.ng(v.typeUniverse,A.qU(a,s),s)},
py(a){if(a==null)return!0
return this.x.b(a)},
pN(a){var s,r=this
if(a==null)return A.cD(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pI(a){var s,r=this
if(a==null)return A.cD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pH(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mK(a){if(typeof a=="object"){if(a instanceof A.v)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
pv(a){var s=this
if(a==null){if(A.cD(s))return a}else if(s.b(a))return a
throw A.af(A.mG(a,s),new Error())},
px(a){var s=this
if(a==null||s.b(a))return a
throw A.af(A.mG(a,s),new Error())},
mG(a,b){return new A.cw("TypeError: "+A.m5(a,A.as(b,null)))},
qe(a,b,c,d){if(A.ng(v.typeUniverse,a,b))return a
throw A.af(A.oW("The type argument '"+A.as(a,null)+"' is not a subtype of the type variable bound '"+A.as(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
m5(a,b){return A.dY(a)+": type '"+A.as(A.kV(a),null)+"' is not a subtype of type '"+b+"'"},
oW(a){return new A.cw("TypeError: "+a)},
aP(a,b){return new A.cw("TypeError: "+A.m5(a,b))},
pF(a){var s=this
return s.x.b(a)||A.kD(v.typeUniverse,s).b(a)},
pK(a){return a!=null},
hU(a){if(a!=null)return a
throw A.af(A.aP(a,"Object"),new Error())},
pO(a){return!0},
pn(a){return a},
mL(a){return!1},
eW(a){return!0===a||!1===a},
hS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.af(A.aP(a,"bool"),new Error())},
mA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.af(A.aP(a,"bool?"),new Error())},
pj(a){if(typeof a=="number")return a
throw A.af(A.aP(a,"double"),new Error())},
pk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.af(A.aP(a,"double?"),new Error())},
b3(a){return typeof a=="number"&&Math.floor(a)===a},
U(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.af(A.aP(a,"int"),new Error())},
hT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.af(A.aP(a,"int?"),new Error())},
pJ(a){return typeof a=="number"},
mB(a){if(typeof a=="number")return a
throw A.af(A.aP(a,"num"),new Error())},
mC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.af(A.aP(a,"num?"),new Error())},
pM(a){return typeof a=="string"},
e(a){if(typeof a=="string")return a
throw A.af(A.aP(a,"String"),new Error())},
bX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.af(A.aP(a,"String?"),new Error())},
pl(a){if(A.mK(a))return a
throw A.af(A.aP(a,"JSObject"),new Error())},
pm(a){if(a==null)return a
if(A.mK(a))return a
throw A.af(A.aP(a,"JSObject?"),new Error())},
mN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.as(a[q],b)
return s},
pT(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mN(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.as(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.as(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.as(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.as(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.as(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.as(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
as(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.as(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.as(a.x,b)+">"
if(l===8){p=A.q5(a.x)
o=a.y
return o.length>0?p+("<"+A.mN(o,b)+">"):p}if(l===10)return A.pT(a,b)
if(l===11)return A.mH(a,b,null)
if(l===12)return A.mH(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
q5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
p4(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
p3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hy(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dC(a,5,"#")
q=A.hF(s)
for(p=0;p<s;++p)q[p]=r
o=A.dB(a,b,q)
n[b]=o
return o}else return m},
p2(a,b){return A.mw(a.tR,b)},
p1(a,b){return A.mw(a.eT,b)},
hy(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ma(A.m8(a,null,b,!1))
r.set(b,s)
return s},
dD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ma(A.m8(a,b,c,!0))
q.set(c,r)
return r},
mi(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.kL(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
by(a,b){b.a=A.pB
b.b=A.pC
return b},
dC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aV(null,null)
s.w=b
s.as=c
r=A.by(a,s)
a.eC.set(c,r)
return r},
mg(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.p_(a,b,r,c)
a.eC.set(r,s)
return s},
p_(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.c0(b))if(!(b===t.b||b===t.u))if(s!==6)r=s===7&&A.cD(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.aV(null,null)
q.w=6
q.x=b
q.as=c
return A.by(a,q)},
mf(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oY(a,b,r,c)
a.eC.set(r,s)
return s},
oY(a,b,c,d){var s,r
if(d){s=b.w
if(A.c0(b)||b===t.K)return b
else if(s===1)return A.dB(a,"lH",[b])
else if(b===t.b||b===t.u)return t.eH}r=new A.aV(null,null)
r.w=7
r.x=b
r.as=c
return A.by(a,r)},
p0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
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
oX(a){var s,r,q,p,o,n=a.length
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
kL(a,b,c){var s,r,q,p,o,n
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
mh(a,b,c){var s,r,q="+"+(b+"("+A.dA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
me(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oX(i)+"}"}r=n+(g+")")
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
kM(a,b,c,d){var s,r=b.as+("<"+A.dA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hF(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bz(a,b,r,0)
m=A.cA(a,c,r,0)
return A.kM(a,n,m,c!==m)}}l=new A.aV(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.by(a,l)},
m8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ma(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.oR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.m9(a,r,l,k,!1)
else if(q===46)r=A.m9(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bT(a.u,a.e,k.pop()))
break
case 94:k.push(A.p0(a.u,k.pop()))
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
case 62:A.oT(a,k)
break
case 38:A.oS(a,k)
break
case 63:p=a.u
k.push(A.mg(p,A.bT(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.mf(p,A.bT(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oQ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.mb(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.oV(a.u,a.e,o)
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
oR(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
m9(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.p4(s,o.x)[p]
if(n==null)A.D('No "'+p+'" in "'+A.op(o)+'"')
d.push(A.dD(s,o,n))}else d.push(p)
return m},
oT(a,b){var s,r=a.u,q=A.m7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dB(r,p,q))
else{s=A.bT(r,a.e,p)
switch(s.w){case 11:b.push(A.kM(r,s,q,a.n))
break
default:b.push(A.kL(r,s,q))
break}}},
oQ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.m7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bT(p,a.e,o)
q=new A.eI()
q.a=s
q.b=n
q.c=m
b.push(A.me(p,r,q))
return
case-4:b.push(A.mh(p,b.pop(),s))
return
default:throw A.a(A.dP("Unexpected state under `()`: "+A.m(o)))}},
oS(a,b){var s=b.pop()
if(0===s){b.push(A.dC(a.u,1,"0&"))
return}if(1===s){b.push(A.dC(a.u,4,"1&"))
return}throw A.a(A.dP("Unexpected extended operation "+A.m(s)))},
m7(a,b){var s=b.splice(a.p)
A.mb(a.u,a.e,s)
a.p=b.pop()
return s},
bT(a,b,c){if(typeof c=="string")return A.dB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oU(a,b,c)}else return c},
mb(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bT(a,b,c[s])},
oV(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bT(a,b,c[s])},
oU(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.dP("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.dP("Bad index "+c+" for "+b.n(0)))},
ng(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ab(a,b,null,c,null)
r.set(c,s)}return s},
ab(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.c0(d))return!0
s=b.w
if(s===4)return!0
if(A.c0(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ab(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.u){if(q===7)return A.ab(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.ab(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ab(a,b.x,c,d,e))return!1
return A.ab(a,A.kD(a,b),c,d,e)}if(s===6)return A.ab(a,p,c,d,e)&&A.ab(a,b.x,c,d,e)
if(q===7){if(A.ab(a,b,c,d.x,e))return!0
return A.ab(a,b,c,A.kD(a,d),e)}if(q===6)return A.ab(a,b,c,p,e)||A.ab(a,b,c,d.x,e)
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
if(!A.ab(a,j,c,i,e)||!A.ab(a,i,e,j,c))return!1}return A.mJ(a,b.x,c,d.x,e)}if(q===11){if(b===t.J)return!0
if(p)return!1
return A.mJ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pG(a,b,c,d,e)}if(o&&q===10)return A.pL(a,b,c,d,e)
return!1},
mJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ab(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ab(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ab(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ab(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ab(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pG(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dD(a,b,r[o])
return A.mz(a,p,null,c,d.y,e)}return A.mz(a,b.y,null,c,d.y,e)},
mz(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ab(a,b[s],d,e[s],f))return!1
return!0},
pL(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ab(a,r[s],c,q[s],e))return!1
return!0},
cD(a){var s=a.w,r=!0
if(!(a===t.b||a===t.u))if(!A.c0(a))if(s!==6)r=s===7&&A.cD(a.x)
return r},
c0(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mw(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hF(a){return a>0?new Array(a):v.typeUniverse.sEA},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eI:function eI(){this.c=this.b=this.a=null},
hx:function hx(a){this.a=a},
eG:function eG(){},
cw:function cw(a){this.a=a},
md(a,b,c){return 0},
dz:function dz(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bx:function bx(a,b){this.a=a
this.$ti=b},
fG(a,b,c,d){if(b==null){if(a==null)return new A.aB(c.i("@<0>").a8(d).i("aB<1,2>"))
b=A.qh()}else{if(A.qp()===b&&A.qo()===a)return new A.cX(c.i("@<0>").a8(d).i("cX<1,2>"))
if(a==null)a=A.qg()}return A.oP(a,b,null,c,d)},
a4(a,b,c){return b.i("@<0>").a8(c).i("fE<1,2>").a(A.qH(a,new A.aB(b.i("@<0>").a8(c).i("aB<1,2>"))))},
n(a,b){return new A.aB(a.i("@<0>").a8(b).i("aB<1,2>"))},
oP(a,b,c,d,e){return new A.dq(a,b,new A.ht(d),d.i("@<0>").a8(e).i("dq<1,2>"))},
kA(a){return new A.ax(a.i("ax<0>"))},
aS(a){return new A.ax(a.i("ax<0>"))},
lO(a,b){return b.i("kz<0>").a(A.qI(a,new A.ax(b.i("ax<0>"))))},
kK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hu(a,b,c){var s=new A.bS(a,b,c.i("bS<0>"))
s.c=a.e
return s},
pq(a,b){return J.u(a,b)},
pr(a){return J.ac(a)},
aj(a,b,c){var s=A.fG(null,null,b,c)
a.an(0,new A.fH(s,b,c))
return s},
fI(a,b,c){var s=A.fG(null,null,b,c)
s.a9(0,a)
return s},
au(a,b){var s,r,q=A.kA(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)q.t(0,b.a(a[r]))
return q},
e8(a,b){var s=A.kA(b)
s.a9(0,a)
return s},
kC(a){var s,r
if(A.lc(a))return"{...}"
s=new A.X("")
try{r={}
B.b.t($.aF,a)
s.a+="{"
r.a=!0
a.an(0,new A.fL(r,s))
s.a+="}"}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dq:function dq(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
ht:function ht(a){this.a=a},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cq:function cq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eL:function eL(a){this.a=a
this.c=this.b=null},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
di:function di(a,b){this.a=a
this.$ti=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
z:function z(){},
fK:function fK(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
co:function co(){},
dr:function dr(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ap:function ap(){},
cf:function cf(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
bf:function bf(){},
dy:function dy(){},
cx:function cx(){},
pQ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.c3(r)
q=A.B(String(s),null,null)
throw A.a(q)}q=A.hW(p)
return q},
hW(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.eJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.hW(a[s])
return a},
pf(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.nK()
else s=new Uint8Array(o)
for(r=J.C(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
pe(a,b,c,d){var s=a?$.nJ():$.nI()
if(s==null)return null
if(0===c&&d===b.length)return A.mv(s,b)
return A.mv(s,b.subarray(c,d))},
mv(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
lx(a,b,c,d,e,f){if(B.d.bX(f,4)!==0)throw A.a(A.B("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.B("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.B("Invalid base64 padding, more than two '=' characters",a,b))},
oI(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=b.length,r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){if(!(p<s))return A.b(b,p)
n=b[p]
o|=n
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.b(a,l)
q&2&&A.V(f)
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
q&2&&A.V(f)
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
q&2&&A.V(f)
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
throw A.a(A.lw(b,"Not a byte value at index "+p+": 0x"+B.d.hd(b[p],16),null))},
oH(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.b0(a1,2),f=a1&3,e=$.lq()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.b(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.b(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.V(d)
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
q&2&&A.V(d)
s=d.length
if(!(a0<s))return A.b(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.b(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.a(A.B(i,a,p))
q&2&&A.V(d)
if(!(a0<d.length))return A.b(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.m3(a,p+1,c,-j-1)}throw A.a(A.B(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.b(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.B(h,a,p))},
oF(a,b,c,d){var s=A.oG(a,b,c),r=(d&3)+(s-b),q=B.d.b0(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.nH()},
oG(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
m3(a,b,c,d){var s,r,q
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
lM(a,b,c){return new A.cY(a,b)},
ps(a){return a.hc()},
oN(a,b){return new A.hq(a,[],A.ql())},
oO(a,b,c){var s,r=new A.X(""),q=A.oN(r,b)
q.bV(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
pg(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
eJ:function eJ(a,b){this.a=a
this.b=b
this.c=null},
hp:function hp(a){this.a=a},
eK:function eK(a){this.a=a},
hD:function hD(){},
hC:function hC(){},
c5:function c5(a){this.a=a},
dQ:function dQ(a){this.a=a},
hj:function hj(a){this.a=0
this.b=a},
f8:function f8(){},
hi:function hi(){this.a=0},
aI:function aI(){},
dU:function dU(){},
dX:function dX(){},
cY:function cY(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
e6:function e6(){},
fD:function fD(a){this.b=a},
fC:function fC(a){this.a=a},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.c=a
this.a=b
this.b=c},
ey:function ey(){},
h5:function h5(){},
hE:function hE(a){this.b=0
this.c=a},
h4:function h4(a){this.a=a},
hB:function hB(a){this.a=a
this.b=16
this.c=0},
qO(a){return A.f0(a)},
cC(a,b,c){var s
A.e(a)
A.hT(c)
t.ck.a(b)
s=A.aU(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.a(A.B(a,null,null))},
ne(a,b){return A.aU(A.e(a),A.hT(b))},
aT(a,b,c,d){var s,r=c?J.kv(a,d):J.lJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
N(a,b,c){var s,r=A.c([],c.i("J<0>"))
for(s=J.F(a);s.l();)B.b.t(r,c.a(s.gm()))
if(b)return r
r.$flags=1
return r},
o(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("J<0>"))
s=A.c([],b.i("J<0>"))
for(r=J.F(a);r.l();)B.b.t(s,r.gm())
return s},
kB(a,b){var s=A.N(a,!1,b)
s.$flags=3
return s},
df(a,b,c){var s,r
A.ad(b,"start")
s=c!=null
if(s){r=c-b
if(r<0)throw A.a(A.a8(c,b,null,"end",null))
if(r===0)return""}if(t.bm.b(a))return A.ow(a,b,c)
if(s)a=A.aW(a,0,A.eX(c,"count",t.p),A.a9(a).i("r.E"))
if(b>0)a=J.nV(a,b)
s=A.o(a,t.p)
return A.oj(s)},
ow(a,b,c){var s=a.length
if(b>=s)return""
return A.ol(a,b,c==null||c>s?s:c)},
I(a,b){return new A.b9(a,A.kw(a,!1,b,!1,!1,""))},
qN(a,b){return a==null?b==null:a===b},
kF(a,b,c){var s=J.F(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.l())}else{a+=A.m(s.gm())
while(s.l())a=a+c+A.m(s.gm())}return a},
kJ(){var s,r,q=A.oi()
if(q==null)throw A.a(A.M("'Uri.base' is not supported"))
s=$.m0
if(s!=null&&q===$.m_)return s
r=A.ew(q,0,null)
$.m0=r
$.m_=q
return r},
dY(a){if(typeof a=="number"||A.eW(a)||a==null)return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lU(a)},
dP(a){return new A.c4(a)},
a1(a){return new A.aZ(!1,null,null,a)},
lw(a,b,c){return new A.aZ(!0,a,b,c)},
cI(a,b,c){return a},
a5(a){var s=null
return new A.ch(s,s,!1,s,s,a)},
fS(a,b){return new A.ch(null,null,!0,a,b,"Value not in range")},
a8(a,b,c,d,e){return new A.ch(b,c,!0,a,d,"Invalid value")},
ci(a,b,c,d){if(a<b||a>c)throw A.a(A.a8(a,b,c,d,null))
return a},
be(a,b,c){if(0>a||a>c)throw A.a(A.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.a8(b,a,c,"end",null))
return b}return c},
ad(a,b){if(a<0)throw A.a(A.a8(a,0,null,b==null?"index":b,null))
return a},
e_(a,b,c,d,e){return new A.dZ(b,!0,a,e,"Index out of range")},
M(a){return new A.dj(a)},
lX(a){return new A.es(a)},
bi(a){return new A.bK(a)},
Q(a){return new A.dT(a)},
B(a,b,c){return new A.i(a,b,c)},
oe(a,b,c){var s,r
if(A.lc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.t($.aF,a)
try{A.pP(a,s)}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}r=A.kF(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fy(a,b,c){var s,r
if(A.lc(a))return b+"..."+c
s=new A.X(b)
B.b.t($.aF,a)
try{r=s
r.a=A.kF(r.a,a,", ")}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pP(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
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
eb(a,b,c,d){var s
if(B.n===c){s=J.ac(a)
b=J.ac(b)
return A.kG(A.bv(A.bv($.kn(),s),b))}if(B.n===d){s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
return A.kG(A.bv(A.bv(A.bv($.kn(),s),b),c))}s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
d=J.ac(d)
d=A.kG(A.bv(A.bv(A.bv(A.bv($.kn(),s),b),c),d))
return d},
ew(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
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
if(n===0)return A.lZ(a7>0||a8<a8?B.a.v(a6,a7,a8):a6,5,a5).gea()
else if(n===32)return A.lZ(B.a.v(a6,s,a8),0,a5).gea()}m=A.aT(8,0,!1,t.p)
B.b.j(m,0,0)
r=a7-1
B.b.j(m,1,r)
B.b.j(m,2,r)
B.b.j(m,7,r)
B.b.j(m,3,a7)
B.b.j(m,4,a7)
B.b.j(m,5,a8)
B.b.j(m,6,a8)
if(A.mP(a6,a7,a8,0,m)>=14)B.b.j(m,7,a8)
l=m[1]
if(l>=a7)if(A.mP(a6,a7,l,20,m)===20)m[7]=l
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
g-=a7}return new A.aO(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.kO(a6,a7,l)
else{if(l===a7)A.cz(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.mq(a6,a,k-1):""
a1=A.mn(a6,k,j,!1)
s=j+1
if(s<i){a2=A.aU(B.a.v(a6,s,i),a5)
b=A.hz(a2==null?A.D(A.B("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.mo(a6,i,h,a5,e,a1!=null)
a4=h<g?A.mp(a6,h+1,g,a5):a5
return A.dF(e,a0,a1,b,a3,a4,g<a8?A.mm(a6,g+1,a8):a5)},
oC(a){var s,r,q=0,p=null
try{s=A.ew(a,q,p)
return s}catch(r){if(t.d.b(A.c3(r)))return null
else throw r}},
oB(a){A.e(a)
return A.ak(a,0,a.length,B.e,!1)},
m2(a){var s=t.N
return B.b.bT(A.c(a.split("&"),t.s),A.n(s,s),new A.h3(B.e),t.G)},
ev(a,b,c){throw A.a(A.B("Illegal IPv4 address, "+a,b,c))},
oy(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ev("each part must be in the range 0..255",a,r)}A.ev("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ev(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.V(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ev(j,a,q)
p=l}A.ev("IPv4 address should contain exactly 4 parts",a,q)},
oz(a,b,c){var s
if(b===c)throw A.a(A.B("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.oA(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.m1(a,b,c)
return!0},
oA(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
m1(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.h2(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.oy(a3,m,a5,s,p*2)
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
mj(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cz(a,b,c){throw A.a(A.B(c,a,b))},
p6(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.p(q,"/")){s=A.M("Illegal path character "+q)
throw A.a(s)}}},
p8(a){var s
if(a.length===0)return B.am
s=A.mu(a)
s.e9(A.n1())
return A.lD(s,t.N,t.a)},
hz(a,b){if(a!=null&&a===A.mj(b))return null
return a},
mn(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(a.charCodeAt(q)!==118){o=A.p7(a,q,r)
if(o<r){n=o+1
p=A.mt(a,B.a.a4(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.oz(a,q,o)
l=B.a.v(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.af(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.mt(a,B.a.a4(a,"25",n)?o+3:n,c,"%25")}else p=""
A.m1(a,b,o)
return"["+B.a.v(a,b,o)+p+"]"}}return A.pc(a,b,c)},
p7(a,b,c){var s=B.a.af(a,"%",b)
return s>=b&&s<c?s:c},
mt(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.X(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kP(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.X("")
l=h.a+=B.a.v(a,q,r)
if(m)n=B.a.v(a,r,r+3)
else if(n==="%")A.cz(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.X("")
if(q<r){h.a+=B.a.v(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.v(a,q,r)
if(h==null){h=new A.X("")
m=h}else m=h
m.a+=i
l=A.kN(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.v(a,b,c)
if(q<c){i=B.a.v(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
pc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kP(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.X("")
k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.v(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.X("")
if(q<r){p.a+=B.a.v(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cz(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.X("")
l=p}else l=p
l.a+=k
j=A.kN(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.v(a,b,c)
if(q<c){k=B.a.v(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
kO(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.ml(a.charCodeAt(b)))A.cz(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.cz(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.v(a,b,c)
return A.p5(q?a.toLowerCase():a)},
p5(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mq(a,b,c){if(a==null)return""
return A.dG(a,b,c,16,!1,!1)},
mo(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dG(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.pb(s,e,f)},
pb(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.kQ(a,!s||c)
return A.bW(a)},
mp(a,b,c,d){if(a!=null)return A.dG(a,b,c,256,!0,!1)
return null},
mm(a,b,c){if(a==null)return null
return A.dG(a,b,c,256,!0,!1)},
kP(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.j_(r)
o=A.j_(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.A(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.v(a,b,b+3).toUpperCase()
return null},
kN(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.fw(a,6*p)&63|q
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
dG(a,b,c,d,e,f){var s=A.ms(a,b,c,d,e,f)
return s==null?B.a.v(a,b,c):s},
ms(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kP(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cz(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kN(n)}if(o==null){o=new A.X("")
k=o}else k=o
k.a=(k.a+=B.a.v(a,p,q))+l
if(typeof m!=="number")return A.qM(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.v(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
mr(a){if(B.a.u(a,"."))return!0
return B.a.aq(a,"/.")!==-1},
bW(a){var s,r,q,p,o,n,m
if(!A.mr(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.b.t(s,"")}p=!0}else{p="."===n
if(!p)B.b.t(s,n)}}if(p)B.b.t(s,"")
return B.b.V(s,"/")},
kQ(a,b){var s,r,q,p,o,n
if(!A.mr(a))return!b?A.mk(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gK(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.b.t(s,"..")
p=!0}else{p="."===n
if(!p)B.b.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.t(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.b.j(s,0,A.mk(s[0]))}return B.b.V(s,"/")},
mk(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.ml(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.v(a,0,s)+"%3A"+B.a.D(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
pd(a,b){if(a.h_("package")&&a.c==null)return A.mQ(b,0,b.length)
return-1},
p9(){return A.c([],t.s)},
mu(a){var s,r,q,p,o,n=A.n(t.N,t.a),m=new A.hA(a,B.e,n)
for(s=a.length,r=0,q=0,p=-1;r<s;){o=a.charCodeAt(r)
if(o===61){if(p<0)p=r}else if(o===38){m.$3(q,p,r)
q=r+1
p=-1}++r}m.$3(q,p,r)
return n},
pa(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p>=0&&p<s))return A.b(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.a1("Invalid URL encoding"))}}return r},
ak(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
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
B.b.t(p,A.pa(a,n+1))
n+=2}else if(e&&r===43)B.b.t(p,32)
else B.b.t(p,r)}}return d.ct(p)},
ml(a){var s=a|32
return 97<=s&&s<=122},
lZ(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
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
if((j.length&1)===1)a=B.v.e0(a,m,s)
else{l=A.ms(a,m,s,256,!0,!1)
if(l!=null)a=B.a.aX(a,m,s,l)}return new A.h1(a,j,c)},
mP(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.j(e,o>>>5,r)}return d},
mc(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.mQ(a.a,a.e,a.f)
return-1},
q1(a,b){A.e(a)
return A.kB(t.a.a(b),t.N)},
mQ(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
pp(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.b(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
hm:function hm(){},
R:function R(){},
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
dZ:function dZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dj:function dj(a){this.a=a},
es:function es(a){this.a=a},
bK:function bK(a){this.a=a},
dT:function dT(a){this.a=a},
ec:function ec(){},
dd:function dd(){},
eH:function eH(a){this.a=a},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
bd:function bd(){},
v:function v(){},
X:function X(a){this.a=a},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
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
eF:function eF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
dV:function dV(a){this.$ti=a},
cd:function cd(a){this.$ti=a},
cy:function cy(){},
bN:function bN(a){this.$ti=a},
om(a){return 8},
on(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dv:function dv(){},
lY(){throw A.a(A.M("Cannot modify an unmodifiable Map"))},
aN:function aN(){},
mM(a){return a},
mV(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.X("")
o=a+"("
p.a=o
n=A.t(b)
m=n.i("bL<1>")
l=new A.bL(b,0,s,m)
l.er(b,0,s,n.c)
m=o+new A.H(l,m.i("d(y.E)").a(new A.ia()),m.i("H<y.E,d>")).V(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.a1(p.n(0)))}},
f9:function f9(a){this.a=a},
fa:function fa(){},
fb:function fb(){},
ia:function ia(){},
cc:function cc(){},
ed(a,b){var s,r,q,p,o,n,m=b.ed(a)
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
B.b.t(q,"")}return new A.fN(b,m,r,q)},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
lQ(a){return new A.ee(a)},
ee:function ee(a){this.a=a},
ox(){var s,r,q,p,o,n,m,l,k=null
if(A.kJ().gak()!=="file")return $.dN()
if(!B.a.aG(A.kJ().gar(),"/"))return $.dN()
s=A.mq(k,0,0)
r=A.mn(k,0,0,!1)
q=A.mp(k,0,0,k)
p=A.mm(k,0,0)
o=A.hz(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.mo("a/b",0,3,k,"",m)
if(n&&!B.a.u(l,"/"))l=A.kQ(l,m)
else l=A.bW(l)
if(A.dF("",s,n&&B.a.u(l,"//")?"":r,o,l,q,p).cM()==="a\\b")return $.f6()
return $.nw()},
fZ:function fZ(){},
eg:function eg(a,b,c){this.d=a
this.e=b
this.f=c},
ex:function ex(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
ez:function ez(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
ot(a,b){var s=A.c([0],t.t)
s=new A.fX(b,s,new Uint32Array(a.length))
s.eq(new A.aH(a),b)
return s},
W(a,b){if(b<0)A.D(A.a5("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.D(A.a5("Offset "+b+u.s+a.gk(0)+"."))
return new A.ca(a,b)},
a_(a,b,c){if(c<b)A.D(A.a1("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)A.D(A.a5("End "+c+u.s+a.gk(0)+"."))
else if(b<0)A.D(A.a5("Start may not be negative, was "+b+"."))
return new A.bl(a,b,c)},
fX:function fX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ca:function ca(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
o7(a,b){var s=A.o8(A.c([A.oJ(a,!0)],t.r)),r=new A.fw(b).$0(),q=B.d.n(B.b.gK(s).b+1),p=A.o9(s)?0:3,o=A.t(s)
return new A.fc(s,r,null,1+Math.max(q.length,p),new A.H(s,o.i("h(1)").a(new A.fe()),o.i("H<1,h>")).h8(0,B.aG),!A.qW(new A.H(s,o.i("v?(1)").a(new A.ff()),o.i("H<1,v?>"))),new A.X(""))},
o9(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.u(r.c,q.c))return!1}return!0},
o8(a){var s,r,q=A.qL(a,new A.fh(),t.C,t.K)
for(s=A.j(q),r=new A.aC(q,q.r,q.e,s.i("aC<2>"));r.l();)J.nW(r.d,new A.fi())
s=s.i("P<1,2>")
r=s.i("aA<f.E,aE>")
s=A.o(new A.aA(new A.P(q,s),s.i("f<aE>(f.E)").a(new A.fj()),r),r.i("f.E"))
return s},
oJ(a,b){var s=new A.hn(a).$0()
return new A.ae(s,!0,null)},
oL(a){var s,r,q,p,o,n,m=a.gai()
if(!B.a.p(m,"\r\n"))return a
s=a.gH().gL()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gC()
p=a.gX()
o=a.gH().ga6()
p=A.bJ(s,a.gH().gab(),o,p)
o=A.aG(m,"\r\n","\n")
n=a.gaz()
return A.fY(r,p,o,A.aG(n,"\r\n","\n"))},
oM(a){var s,r,q,p,o,n,m
if(!B.a.aG(a.gaz(),"\n"))return a
if(B.a.aG(a.gai(),"\n\n"))return a
s=B.a.v(a.gaz(),0,a.gaz().length-1)
r=a.gai()
q=a.gC()
p=a.gH()
if(B.a.aG(a.gai(),"\n")){o=A.iS(a.gaz(),a.gai(),a.gC().gab())
o.toString
o=o+a.gC().gab()+a.gk(a)===a.gaz().length}else o=!1
if(o){r=B.a.v(a.gai(),0,a.gai().length-1)
if(r.length===0)p=q
else{o=a.gH().gL()
n=a.gX()
m=a.gH().ga6()
p=A.bJ(o-1,A.m6(s),m-1,n)
q=a.gC().gL()===a.gH().gL()?p:a.gC()}}return A.fY(q,p,r,s)},
oK(a){var s,r,q,p,o
if(a.gH().gab()!==0)return a
if(a.gH().ga6()===a.gC().ga6())return a
s=B.a.v(a.gai(),0,a.gai().length-1)
r=a.gC()
q=a.gH().gL()
p=a.gX()
o=a.gH().ga6()
p=A.bJ(q-1,s.length-B.a.bb(s,"\n")-1,o-1,p)
return A.fY(r,p,s,B.a.aG(a.gaz(),"\n")?B.a.v(a.gaz(),0,a.gaz().length-1):a.gaz())},
m6(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.a.ae(a,"\n",r-2)-1
else return r-B.a.bb(a,"\n")-1}},
fc:function fc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fw:function fw(a){this.a=a},
fe:function fe(){},
fd:function fd(){},
ff:function ff(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fg:function fg(a){this.a=a},
fx:function fx(){},
fk:function fk(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a},
fu:function fu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a){this.a=a},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ(a,b,c,d){var s=c==null,r=s?0:c,q=b==null,p=q?a:b
if(a<0)A.D(A.a5("Offset may not be negative, was "+a+"."))
else if(!s&&c<0)A.D(A.a5("Line may not be negative, was "+A.m(c)+"."))
else if(!q&&b<0)A.D(A.a5("Column may not be negative, was "+A.m(b)+"."))
return new A.bI(d,a,r,p)},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(){},
kE(a,b,c){var s=new A.dc(a,b,c)
s.cQ(a,b,c)
return s},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(){},
en:function en(){},
ck:function ck(){},
fY(a,b,c,d){var s=new A.bh(d,a,b,c)
s.cQ(a,b,c)
if(!B.a.p(d,c))A.D(A.a1('The context line "'+d+'" must contain "'+c+'".'))
if(A.iS(d,c,a.gab())==null)A.D(A.a1('The span text "'+c+'" must start at column '+(a.gab()+1)+' in a line within "'+d+'".'))
return s},
bh:function bh(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dW:function dW(a,b,c){var _=this
_.at=_.as=0
_.f=a
_.a=b
_.b=c
_.c=0
_.e=_.d=null},
ao:function ao(a){this.b=a},
ou(a,b,c){return new A.de(c,a,b)},
de:function de(a,b,c){this.c=a
this.a=b
this.b=c},
eo:function eo(){},
eq:function eq(){},
qu(a,b){return new A.hl([],[]).cv(a,b)},
qv(a){return new A.iE(new A.cq(t.cR)).$1(a)},
hl:function hl(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
lG(a,b,c,d){return new A.cO(a,d,c==null?A.c([],t.l):c,b)},
aa:function aa(a,b){this.a=a
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
ag:function ag(a,b,c,d,e){var _=this
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
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
a0:function a0(a){this.a=a},
fT:function fT(a,b,c,d,e,f){var _=this
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
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
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
S:function S(a,b){this.a=a
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
Y:function Y(a,b){this.a=a
this.b=b},
km:function km(){},
eA:function eA(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
G(a,b){return new A.cp(null,a,b)},
cp:function cp(a,b,c){this.c=a
this.a=b
this.b=c},
O:function O(){},
bP:function bP(a,b,c){this.b=a
this.c=b
this.a=c},
hg:function hg(){},
bO:function bO(a,b,c){this.b=a
this.c=b
this.a=c},
an:function an(a,b,c){this.b=a
this.c=b
this.a=c},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
T(a){var s=new A.h7(A.c([],t.c0),a,A.f_(a,null,!1,null).a,A.aS(t.T))
s.d6()
return s},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
hc:function hc(a){this.a=a},
hb:function hb(a){this.a=a},
h8:function h8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n4(a,b){return A.fG(A.qF(),A.iR(),a,b)},
bm(a,b){var s=t.T
if(s.b(a))a=a.ga7()
if(s.b(b))b=b.ga7()
s=t.f
if(s.b(a)&&s.b(b))return A.r3(a,b)
s=t.j
if(s.b(a)&&s.b(b))return A.r_(a,b)
return J.u(a,b)},
r_(a,b){var s,r,q
if(J.a6(a)!==J.a6(b))return!1
s=t.h
if(s.b(a))a=a.gM()
if(s.b(b))b=b.gM()
for(s=J.C(a),r=J.C(b),q=0;q<s.gk(a);++q)if(!A.bm(s.h(a,q),r.h(b,q)))return!1
return!0},
r3(a,b){var s={}
s.a=a
s.b=b
if(a.gk(a)!==b.gk(b))return!1
return a.gE().aO(0,new A.j9(s))},
qw(a){var s
if(t.f.b(a)){s=t.z
return B.a7.b2(a.gE().ac(0,A.iR(),s))^B.a7.b2(a.gag().ac(0,A.iR(),s))}else if(t.R.b(a))return B.aH.b2(J.aR(a,A.iR(),t.z))
else if(t.m.b(a))return J.ac(a.ga7())
return J.ac(a)},
n9(a,b){return t.T.a(a.gM().gE().bS(0,new A.iT(b)))},
nc(a,b){var s,r,q,p,o,n,m,l
for(s=A.oa(a.gM().gO(),0,t.x),r=s.a,r=r.gq(r),q=s.b,s=new A.bE(r,q,A.j(s).i("bE<1>"));s.l();){p=s.c
p=p>=0?new A.b2(q+p,r.gm()):A.D(A.Z())
o=p.a
n=p.b
m=n.a
l=n.b
if(A.bm(m,b))return new A.dx(o,t.T.a(m),l)}throw A.a(A.G(A.m(b)+" not found in map",a.gA()))},
qJ(a,b){return a.gE().bS(0,new A.iU(b))},
l3(a,b){var s=a.gE().aJ(0,new A.iD(b))
return!s.gJ(s)},
j9:function j9(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iD:function iD(a){this.a=a},
fR(a,b,c){return new A.d4(a,b,c,!0,b,"path",null)},
f7(a,b){return new A.dO("Encountered an alias node along "+A.m(a)+'! Alias nodes are nodes that refer to a previously serialized nodes, and are denoted by either the "*" or the "&" indicators in the original YAML. As the resulting behavior of mutations on these nodes is not well-defined, the operation will not be supported by this library.\n\n'+b.gA().dZ("The alias was first defined here."),null,null)},
n2(a,b,c){var s=A.aG(b,"\n","\n> ")
return new A.eP("(package:yaml_edit) "+a+"\n\n# YAML before edit:\n> "+s+"\n\n# YAML after edit:\n> "+A.aG(c,"\n","\n> ")+"\n\nPlease file an issue at:\nhttps://github.com/dart-lang/yaml_edit/issues/new?labels=bug\n")},
d4:function d4(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.b=e
_.c=f
_.d=g},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
rI(a,b,c,d){var s,r,q,p,o,n,m,l
A.ci(c,0,b.gk(b)-1,null)
s=J.l(b.gM(),c)
r=s.gA().gC().gL()
q=a.b
if(b.ga2()===B.m){p=A.l5(q,b)+A.l4(a)
o=A.dK(q)
n=A.dM(A.at(d,B.i,B.j),p,o)
if(!(t.j.b(d)&&d.gk(d)!==0))m=t.f.b(d)&&d.gE().gb4(0)
else m=!0
if(m)n=B.a.D(n,p)
else if(A.hh(s)===B.m)n+=o
l=A.bZ(s)
if(l<=r){++r
n=" "+n
l=r}return A.av(r,l-r,n)}else{n=A.bn(d)
m=s.gA()
return A.av(r,m.gk(m),n)}},
rl(a,b,c){var s,r,q,p,o,n=J.l(b.gM(),c)
if(b.ga2()===B.f){A.ci(c,0,b.gk(b)-1,null)
s=n.gA()
r=a.b
q=s.gC().gL()
p=s.gH().gL()
o=q-1
if(c===0){q=B.a.ae(r,"[",o)+1
p=c===b.gk(b)-1?B.a.af(r,"]",p):B.a.af(r,",",p)+1}else q=B.a.ae(r,",",o)
return A.av(q,p-q,"")}else return A.pU(a,b,n,c)},
pU(a,b,c,d){var s,r,q,p,o,n,m,l=b.gk(b),k=l-1
A.ci(d,0,k,null)
s=a.b
r=c.gA()
q=r.gk(r)===0
p=A.bZ(c)
o=A.l5(s,b)
n=B.a.ae(s,"-",q?r.gC().gL():r.gC().gL()-1)
m=q?p+1:p
return A.nm(s,b,o,d===0,d>=k,l===1,A.dK(s),new A.i2(b,d,s),new A.cu(m,n))},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
rJ(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(!A.l3(b,c)){s=A.at(c,B.i,B.j)
if(b.ga2()===B.f)return A.ph(a,b,s,a0)
else{r=a.b
q=A.eZ(r,b)
p=A.l4(a)
o=A.bn(A.at(s,B.i,B.j))
n=A.dK(r)
m=B.a.aj(" ",A.eZ(r,b))
l=b.gA().gH().gL()
k=A.na(b,o)
if(b.gE().gb4(0)){j=b.gE()
if(k===j.gk(j)){j=b.gM().gag()
i=B.a.af(r,"\n",A.bZ(j.gK(j)))
if(i!==-1)l=i+1
else m=n+m}else{j=b.gM().gE().aR(0)
if(!(k>=0&&k<j.length))return A.b(j,k)
l=B.a.ae(r,"\n",t.T.a(j[k]).gA().gC().gL())+1}}h=A.dM(a0,q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hh(a0)
q=q!==B.f&&!A.lb(a0)}else q=!1
return A.av(l,0,q?m+(o+":"+n+h+n):m+(o+": "+h+n))}}else if(b.ga2()===B.f){g=b.gM().h(0,c).gA()
h=A.bn(a0)
return A.av(g.gC().gL(),g.gk(g),h)}else{r=a.b
n=A.dK(r)
q=A.eZ(r,b)
p=A.l4(a)
s=A.n9(b,c)
f=A.dM(A.at(a0,B.i,B.j),q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hh(a0)
q=q!==B.f&&!A.lb(a0)}else q=!1
if(q)f=n+f
if(!B.a.u(f,n))f=" "+f
e=s.gA().gH().gL()+1
q=b.gM().h(0,c)
q.toString
d=A.bZ(q)
return A.av(e,(d<e?e:d)-e,f)}},
rm(a,b,c){var s,r,q,p,o,n,m
if(b.ga2()===B.f){s=A.nc(b,c)
r=s.b
q=r.gA().gC().gL()
p=s.c.gA().gH().gL()
o=a.b
n=b.gE()
m=q-1
if(A.bm(r,n.gU(n))){q=B.a.ae(o,"{",m)+1
n=b.gE()
p=A.bm(r,n.gK(n))?B.a.af(o,"}",p):B.a.af(o,",",p)+1}else q=B.a.ae(o,",",m)
return A.av(q,p-q,"")}else return A.pV(a,b,c)},
ph(a,b,c,d){var s,r=A.bn(c),q=A.bn(d),p=b.gE()
if(p.gJ(p))return A.av(b.gA().gH().gL()-1,0,r+": "+q)
s=A.na(b,r)
p=b.gE()
if(s===p.gk(p))return A.av(b.gA().gH().gL()-1,0,", "+r+": "+q)
p=b.gM().gE().aR(0)
if(!(s>=0&&s<p.length))return A.b(p,s)
return A.av(t.T.a(p[s]).gA().gC().gL(),0,r+": "+q+", ")},
pV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=A.nc(b,c)
r=i.a=s.a
q=s.c
p=a.b
o=b.gE()
n=o.gk(o)
m=s.b.gA()
o=A.eZ(p,b)
l=r===0
k=l?b.gA().gC().gL():m.gC().gL()
j=q.gA()
j=j.gk(j)===0?m.gH().gL()+2:A.bZ(q)
return A.nm(p,b,o,l,r>=n-1,n===1,A.dK(p),new A.i3(i,b,p),new A.cu(j,k))},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
av(a,b,c){A.ad(a,null)
A.ad(b,null)
return new A.db(a,b,c)},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
kS(a){var s,r=new A.aH(a)
for(s=$.lt(),s=new A.ah(s,s.r,s.e,A.j(s).i("ah<1>"));s.l();)if(r.p(r,s.d))return!0
return!1},
bY(a){var s,r,q,p,o=new A.X("")
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E");s.l();){q=s.d
if(q==null)q=r.a(q)
p=$.nN()
if(p.h(0,q)!=null){q=A.m(p.h(0,q))
o.a+=q}else{q=A.A(q)
o.a+=q}}return'"'+o.n(0)+'"'},
mU(a){if(A.kS(a)||B.a.p(a,"\n"))return null
return"'"+A.aG(a,"'","''")+"'"},
q3(a,b,c){var s,r,q,p,o=a.length
if(o===0||B.a.N(a).length!==o)return null
if(A.kS(a))return null
s=B.a.aj(" ",b)
r=B.a.he(a)
q=B.a.D(a,r.length)
o=c+s
p=A.c(A.aG(r,"\n",o).split(c),t.s)
r=A.od(p,new A.i9(p,s,c),t.N)
return">-\n"+s+r+A.aG(q,"\n",o)},
q4(a,b,c){var s,r=a.length
if(r===0||B.a.N(a).length!==r)return null
if(A.kS(a))return null
s=B.a.aj(" ",b)
return"|-\n"+s+A.aG(a,"\n",c+s)},
q9(a){var s,r=a.ga7(),q=a.ga2()
if(typeof r!="string")return J.al(r)
switch(q){case B.M:return A.bY(r)
case B.B:s=A.mU(r)
return s==null?A.bY(r):s
default:s=A.la(r)?null:r
return s==null?A.bY(r):s}},
q8(a,b,c){var s,r=a.ga7(),q=a.ga2()
A.kZ(r)
if(typeof r!="string")return J.al(r)
switch(q){case B.h:s=A.la(r)?null:r
return s==null?A.bY(r):s
case B.B:s=A.mU(r)
return s==null?A.bY(r):s
case B.N:s=A.q3(r,b,c)
return s==null?A.bY(r):s
case B.O:s=A.q4(r,b,c)
return s==null?A.bY(r):s
default:s=A.la(r)?null:r
return s==null?A.bY(r):s}},
bn(a){t.T.a(a)
if(t.h.b(a))return"["+J.aR(a.gM(),A.rA(),t.N).V(0,", ")+"]"
else if(t.S.b(a))return"{"+a.gM().gO().ac(0,new A.kl(),t.N).V(0,", ")+"}"
return A.q9(t.m.a(a))},
dM(a,b,c){var s,r
if(!A.qX(a))return A.bn(a)
s=b+2
if(t.h.b(a)){if(a.gk(a)===0)return B.a.aj(" ",b)+"[]"
return J.aR(a.gM(),new A.kj(s,c,b),t.N).V(0,c)}else if(t.S.b(a)){r=a.gE()
if(r.gJ(r))return B.a.aj(" ",b)+"{}"
return a.gM().gO().ac(0,new A.kk(b,s,c),t.N).V(0,c)}return A.q8(t.m.a(a),s,c)},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b,c){this.a=a
this.b=b
this.c=c},
ns(a,b){var s,r=A.rK(),q=$.ko()
try{$.nu=r
s=a.$0()
return s}finally{$.nu=q}},
mI(a,b){},
la(a){var s,r,q
try{s=A.ns(new A.j6(a),t.T)
if(!J.u(s.ga7(),a))return!0
r=B.a.p(a,A.I("\\{|\\[|\\]|\\}|,",!0))
return r}catch(q){return!0}},
kZ(a){if(typeof a=="number"||typeof a=="string"||A.eW(a)||a==null)return
throw A.a(A.lw(a,"value","Not a valid scalar type!"))},
qX(a){var s
if(t.m.b(a))if(a.ga2()===B.O||a.ga2()===B.N||a.ga2()===B.j)return!0
if(t.h.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
if(t.S.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
return!1},
bZ(a){var s
if(t.h.b(a))if(a.ga2()===B.f)return a.gA().gH().gL()
else return A.bZ(J.ks(a.gM()))
else if(t.S.b(a))if(a.ga2()===B.f)return a.gA().gH().gL()
else{s=a.gM().gag()
return A.bZ(s.gK(s))}return a.gA().gH().gL()},
qZ(a,b){return A.b3(a)&&a>=0&&a<b},
lb(a){var s
if(t.f.b(a)){s=a.gE()
return s.gJ(s)}if(t.j.b(a))return a.gk(a)===0
return!1},
na(a,b){var s,r,q,p,o,n=a.gM().gE().ac(0,new A.iV(),t.N).aR(0)
for(s=n.length,r=1;r<s;++r){q=n[r]
p=n[r-1]
if(q===p)q=0
else q=q<p?-1:1
if(q<0){s=a.gE()
return s.gk(s)}}o=B.b.b3(n,new A.iW(b))
if(o!==-1)return o
s=a.gE()
return s.gk(s)},
l4(a){var s,r,q,p,o,n,m=a.cn([],null),l=t.S
if(l.b(m)&&m.ga2()===B.m)s=m.gM().gag()
else s=t.h.b(m)&&m.ga2()===B.m?m.gM():null
r=2
if(s!=null)for(q=J.F(s),p=t.h;q.l();){o=q.gm()
if(p.b(o))n=A.l5(a.b,o)
else n=l.b(o)?A.eZ(a.b,o):0
if(n!==0)r=n}return r},
l5(a,b){var s
if(b.ga2()===B.f)return 0
if(b.gk(b)===0)throw A.a(A.M("Unable to get indentation for empty block list"))
s=B.a.ae(a,"-",J.ks(b.gM()).gA().gC().gL()-1)
if(s===0)return s
return s-B.a.ae(a,"\n",s-1)-1},
eZ(a,b){var s,r,q,p
if(b.ga2()===B.f)return 0
s=b.gE()
if(s.gJ(s))throw A.a(A.M("Unable to get indentation for empty block map"))
s=b.gM().gE()
r=t.T.a(s.gK(s)).gA().gC().gL()
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
qQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
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
case 3:j=B.a.af(a,$.lr(),r)
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
qP(a,b){var s,r,q=Math.max(0,B.a.ae(a,$.lr(),Math.max(0,b-1)))
if(q>>>0!==q||q>=a.length)return A.b(a,q)
s=a[q]
A:{if("\r"===s||"\n"===s){r=new A.bU(-1,q)
break A}if("-"===s||"?"===s||":"===s){r=new A.bU(q,-1)
break A}r=B.cy
break A}return r},
nm(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=i.b,l=a.length,k=Math.min(A.qQ(a,c,B.a.af(a,"\n",i.a-1))+1,l)
if(f){if(k<l||B.a.aG(a,"\n"))k-=g==="\r\n"?2:1
l=t.h.b(b)?"[]":"{}"
return A.av(m,k-m,l)}else if(e){m=B.a.ae(a,"\n",m)+1
return A.av(m,Math.max(B.a.ae(a,"\n",b.gA().gH().gL())+1,k)-m,"")}s=!1
if(m!==0)if(d){r=A.qP(a,m)
q=r.a
s=q!==-1
m=s?q+2:r.b+1}else m=B.a.ae(a,"\n",m)+1
p=h.$0()
o=p.a
n=p.b
return A.av(m,(s&&o===k-1?k+n:k)-m,"")},
hh(a){if(t.S.b(a))return a.ga2()
if(t.h.b(a))return a.ga2()
return null},
j6:function j6(a){this.a=a},
iV:function iV(){},
iW:function iW(a){this.a=a},
ll(a,b){var s=t.z,r=A.n4(s,s)
r.a9(0,a.gM())
b.$1(r)
return t.S.a(A.at(r,B.i,B.j))},
at(a,b,c){var s,r,q
if(t.m.b(a)){A.kZ(a.ga7())
return a}else if(t.h.b(a)){for(s=J.F(a.gM());s.l();)A.at(s.gm(),B.i,B.j)
return a}else if(t.S.b(a)){for(s=a.gM().gO(),s=s.gq(s);s.l();){r=s.gm()
A.at(r.a,B.i,B.j)
A.at(r.b,B.i,B.j)}return a}else if(t.f.b(a))return A.oE(a,b,c)
else if(t.j.b(a))return A.oD(a,b,c)
else{A.kZ(a)
q=A.bJ(0,null,null,null)
return new A.eD(c,A.kE(q,q,""),a)}},
oE(a,b,c){var s,r,q,p=A.n4(t.z,t.T)
for(s=a.gO(),s=s.gq(s);s.l();){r=s.gm()
p.j(0,A.at(r.a,b,c),A.at(r.b,b,c))}q=A.bJ(0,null,null,null)
s=A.kE(q,q,"")
return new A.eC(p.a===0?B.f:b,p,s)},
oD(a,b,c){var s,r,q=J.aR(a,new A.he(b,c),t.T)
q=A.o(q,q.$ti.i("y.E"))
s=A.bJ(0,null,null,null)
r=A.kE(s,s,"")
return new A.eB(q.length===0?B.f:b,q,r)},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
qi(a){var s,r,q,p,o,n,m,l,k=A.E(a),j=A.aS(t.N)
if(t.S.b(k))for(s=k.gE(),s=s.gq(s);s.l();){r=s.gm()
if(B.K.aU(r))j.t(0,A.e(r))}j.a9(0,B.K.gag())
s=t.s
q=A.c([],s)
for(j=A.hu(j,j.r,j.$ti.c),p=j.$ti.c;j.l();){o=j.d
if(o==null)o=p.a(o)
for(n=B.K.gO(),n=n.gq(n);n.l();){m=n.gm()
if(m.b===o){l=A.c([],s)
m=m.a
if(m==="rules")l.push("ruleProviders")
l.push(m)
B.b.a9(q,l)}}}return q},
iB(a){var s=t.S.a(A.E(a)),r=A.o(B.ct,t.N),q=t.g,p=q.a(s.h(0,"proxy-groups"))
p=J.F(p==null?[]:p)
while(p.l())r.push(A.e(J.l(p.gm(),"name")))
q=q.a(s.h(0,"proxies"))
q=J.F(q==null?[]:q)
while(q.l())r.push(A.e(J.l(q.gm(),"name")))
return r},
l2(a){var s=t.g.a(t.S.a(A.E(a)).h(0,"rules"))
if(s==null)s=[]
return A.N(s,!0,t.N)},
kU(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.e(q.a),A.kU(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.F(a);r.l();)s.push(A.kU(r.gm()))
return s}return a},
eY(a){var s,r=A.c([],t.Z),q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
q=J.F(q==null?[]:q)
s=t.P
while(q.l())r.push(s.a(A.kU(q.gm())))
return r},
ro(a,b){var s,r,q,p,o,n,m=A.eY(a),l=A.n(t.N,t.P)
for(s=m.length,r=0;q=m.length,r<q;m.length===s||(0,A.a7)(m),++r){p=m[r]
l.j(0,A.e(p.h(0,"name")),p)}if(b.length!==q||A.au(b,A.t(b).c).a!==b.length||B.b.R(b,new A.jU(l)))throw A.a(B.ba)
s=A.T(a)
q=A.c([],t.Z)
for(o=b.length,r=0;r<b.length;b.length===o||(0,A.a7)(b),++r){n=l.h(0,b[r])
n.toString
q.push(n)}s.G(["proxy-groups"],q)
return s.b},
no(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
lg(a,b,c){var s,r,q=A.c(a.split(","),t.s)
if(B.a.N(B.b.gU(q))==="SUB-RULE")return a
s=A.no(q)
if(s>0){if(!(s<q.length))return A.b(q,s)
r=B.a.N(q[s])===b}else r=!1
if(r)B.b.j(q,s,c)
return B.b.V(q,",")},
rH(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=t.s,q=0;q<b.length;b.length===s||(0,A.a7)(b),++q){p=A.c(b[q].split(","),r)
if(p.length<2||B.b.R(p,new A.kb()))throw A.a(B.br)
if(B.b.gU(p)!=="SUB-RULE"){o=A.iB(a)
n=A.no(p)
if(!(n>=0&&n<p.length))return A.b(p,n)
n=!B.b.p(o,B.a.N(p[n]))
o=n}else o=!1
if(o)throw A.a(B.b6)}m=A.T(a)
m.G(["rules"],b)
return m.b},
q7(a){var s,r,q,p,o,n,m,l,k,j="dialer-proxy",i=t.S.a(A.E(a)),h=t.N,g=A.n(h,t.a)
for(s=A.eY(a),r=s.length,q=t.g,p=0;p<s.length;s.length===r||(0,A.a7)(s),++p){o=s[p]
n=A.e(o.h(0,"name"))
m=q.a(o.h(0,"proxies"))
g.j(0,n,A.N(m==null?[]:m,!0,h))}s=q.a(i.h(0,"proxies"))
s=J.F(s==null?[]:s)
r=t.s
while(s.l()){l=s.gm()
q=J.C(l)
if(typeof q.h(l,j)=="string")g.j(0,A.e(q.h(l,"name")),A.c([A.e(q.h(l,j))],r))}k=new A.id(A.aS(h),A.aS(h),g)
for(h=new A.ah(g,g.r,g.e,g.$ti.i("ah<1>"));h.l();)k.$1(h.d)},
rF(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7=B.a.N(A.e(a9.h(0,"name")))
if((b2==="\ud83d\ude80 \u56fd\u5185"||b2==="\ud83c\udf0d \u56fd\u5916")&&a7!==b2)throw A.a(B.bM)
if(a7.length===0||B.a.p(a7,",")||B.a.p(a7,"\n"))throw A.a(B.bo)
if(A.b5(a8).F(b2))throw A.a(B.ak)
s=A.iB(a8)
r=A.t(s)
if(new A.q(s,r.i("k(1)").a(new A.k2(b2)),r.i("q<1>")).p(0,a7)||a7==="GLOBAL")throw A.a(B.bN)
q=A.eY(a8)
p=B.b.b3(q,new A.k3(b2))
if(p>=0){if(!(p<q.length))return A.b(q,p)
s=t.g.a(q[p].h(0,a6))
if(s==null)s=[]
o=A.N(s,!0,t.N)}else o=A.c2(a8)
if(o.length===0)B.b.t(o,"DIRECT")
s=t.j
if(s.b(a9.h(0,a6))){n=A.N(s.a(a9.h(0,a6)),!0,t.N)
if(n.length!==o.length||new A.d_(n,A.t(n).i("d_<1>")).gO().R(0,new A.k4(o)))throw A.a(B.bA)}if(B.b.p(o,a7)||B.b.p(o,b2)||B.b.R(o,new A.k5(a8)))throw A.a(B.bH)
r=b1!=null
if(r){B.b.au(o,new A.k6())
if(b1)B.b.b8(o,0,"DIRECT")
if(o.length===0&&b0==null)throw A.a(B.c_)}m=t.N
l=t.z
k=A.fI(a9,m,l)
k.j(0,"name",a7)
k.j(0,a6,o)
j=p<0
if(j)B.b.t(q,k)
else B.b.j(q,p,k)
i=A.T(a8)
k=b2!=null
if(k&&b2!==a7){for(h=q.length,g=t.R,f=0;f<q.length;q.length===h||(0,A.a7)(q),++f){e=q[f]
if(s.b(e.h(0,a6))){d=[]
for(c=J.F(g.a(e.h(0,a6)));c.l();){b=c.gm()
d.push(J.u(b,b2)?a7:b)}e.j(0,a6,d)}}h=t.s
g=A.c([],h)
for(d=A.l2(a8),c=d.length,f=0;f<d.length;d.length===c||(0,A.a7)(d),++f)g.push(A.lg(d[f],b2,a7))
i.G(["rules"],g)
g=t.S
a=t.Y.a(g.a(A.E(a8)).h(0,"sub-rules"))
for(l=(a==null?A.n(l,l):a).gO(),l=l.gq(l);l.l();){d=l.gm()
c=d.a
a0=A.c([],h)
for(d=J.F(s.a(d.b));d.l();)a0.push(A.lg(A.e(d.gm()),b2,a7))
i.G(["sub-rules",c],a0)}a1=t.g.a(g.a(A.E(a8)).h(0,a6))
if(a1==null)a1=[]
for(s=J.C(a1),a2=0;a2<s.gk(a1);++a2)if(J.u(J.l(s.h(a1,a2),"dialer-proxy"),b2))i.G(["proxies",a2,"dialer-proxy"],a7)}i.G(["proxy-groups"],q)
a3=A.f5(a8)
if(k&&b2!==a7&&a3.F(b2)){s=a3.I(0,b2)
s.toString
a3.j(0,a7,s)}if(j)a3.j(0,a7,"")
a4=A.ln(i.b,a3)
a5=A.jq(a8)
if(k&&b2!==a7&&a5.F(b2)){s=a5.I(0,b2)
s.toString
a5.j(0,a7,s)}if(r)a5.j(0,a7,b1)
if(a5.a!==0)a4=A.nt(a4,a5)
if(b0!=null){s=A.fI(A.f5(a4),m,m)
s.j(0,a7,B.a.N(b0))
a4=A.n_(a4,s)}A.q7(a4)
return a4},
qx(a,b){var s,r,q,p,o,n,m,l,k,j
if(b==="\ud83d\ude80 \u56fd\u5185"||b==="\ud83c\udf0d \u56fd\u5916")throw A.a(B.c0)
if(A.b5(a).F(b))throw A.a(B.ak)
s=t.S.a(A.E(a))
r=A.eY(a)
q=t.Y.a(s.h(0,"sub-rules"))
if(q==null){p=t.z
q=A.n(p,p)}o=!0
if(!B.b.R(r,new A.iF(b))){p=t.g.a(s.h(0,"proxies"))
if(p==null)p=[]
if(!J.nP(p,new A.iG(b))){p=t.N
n=A.o(A.l2(a),p)
for(m=q.gag(),m=m.gq(m),l=t.j;m.l();)B.b.a9(n,A.N(l.a(m.gm()),!0,p))
p=B.b.R(n,new A.iH(b))
o=p}}if(o)throw A.a(B.bb)
k=A.T(a)
p=A.t(r)
n=p.i("q<1>")
p=A.o(new A.q(r,p.i("k(1)").a(new A.iI(b)),n),n.i("f.E"))
k.G(["proxy-groups"],p)
p=k.b
n=A.f5(a)
n.I(0,b)
j=A.ln(p,n)
if(B.a.p(a,"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")){p=A.jq(a)
p.I(0,b)
p=A.nt(j,p)}else p=j
return p},
jU:function jU(a){this.a=a},
kb:function kb(){},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(){},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
f1(a,b){var s,r,q,p
if(b>64)throw A.a(B.bU)
if(t.f.b(a)){s=A.n(t.N,t.X)
for(r=a.gO(),r=r.gq(r),q=b+1;r.l();){p=r.gm()
s.j(0,A.m(p.a),A.f1(p.b,q))}return s}if(t.j.b(a)){s=J.aR(a,new A.jn(b),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
r8(a){var s,r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jf()),t.U).V(0,"\n"),q=A.T("")
q.G([],A.f1(A.E(a),0))
s=r.length===0?"":r+"\n"
return s+q.n(0)},
nd(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="external-controller",a4="name",a5="prefixes"
try{s=t.P.a(B.c.aa(a8,a2))
r=null
switch(a6){case"summary":q=t.f.a(A.E(a7))
k=A.ni(a7)
if(J.l(q,"dns")==null)j=""
else{j=A.T("")
j.G([],A.f1(J.l(q,"dns"),0))
j=j.b}i=J.l(q,a3)
if(i==null)i=""
h=J.l(q,"secret")
if(h==null)h=""
g=A.lh(a7)
f=A.c2(a7)
e=A.nl(a7)
d=A.f3(a7)
c=A.r7(a7)
b=A.eY(a7)
a=A.b5(a7)
a0=A.j(a).i("ai<1>")
a=A.o(new A.ai(a,a0),a0.i("f.E"))
r=A.a4(["network",k,"dnsYaml",j,"controller",i,"secret",h,"manualNodes",g,"nodes",f,"host",e,"chains",d,"nextChainId",c,"groups",b,"managedGroups",a,"filters",A.f5(a7),"direct",A.jq(a7),"providers",A.l1(a7),"rules",A.l2(a7),"policies",A.iB(a7),"actions",A.qi(a7)],t.N,t.z)
break
case"controller":r=A.qb(a7,s)
break
case"network":r=A.mZ(a7,s)
break
case"dns":p=A.E(A.e(J.l(s,"yaml")))
if(t.f.b(p)){k=p
k=k.gJ(k)}else k=!0
if(k)throw A.a(B.b5)
o=A.T(a7)
o.G(["dns"],A.f1(p,0))
r=o.b
break
case"addNode":r=A.qa(a7,A.e(J.l(s,"link")))
break
case"deleteNode":r=A.qz(a7,A.e(J.l(s,a4)))
break
case"reorderNodes":r=A.rp(a7,A.N(t.R.a(J.l(s,"names")),!0,t.N))
break
case"host":r=A.qB(a7,A.e(J.l(s,"host")))
break
case"chain":k=t.R
j=t.N
r=A.ru(a7,A.e(J.l(s,"id")),A.N(k.a(J.l(s,"selected")),!0,j),A.hS(J.l(s,"prepend")),A.N(k.a(J.l(s,"targets")),!0,j))
break
case"group":k=A.aj(t.f.a(J.l(s,"group")),t.N,t.z)
j=A.bX(J.l(s,"oldName"))
r=A.rF(a7,k,A.bX(J.l(s,"filter")),A.mA(J.l(s,"includeDirect")),j)
break
case"deleteGroup":r=A.qx(a7,A.e(J.l(s,a4)))
break
case"reorderGroups":r=A.ro(a7,A.N(t.R.a(J.l(s,"names")),!0,t.N))
break
case"provider":r=A.rG(a7,A.e(J.l(s,a4)),A.aj(t.f.a(J.l(s,"provider")),t.N,t.z),A.bX(J.l(s,"oldName")))
break
case"deleteProvider":r=A.qy(a7,A.e(J.l(s,a4)))
break
case"rules":r=A.rH(a7,A.N(t.R.a(J.l(s,"rules")),!0,t.N))
break
case"subscription":k=A.e(J.l(s,"template"))
j=t.R
i=t.N
h=A.N(j.a(J.l(s,"sources")),!0,i)
j=A.r6(h,J.l(s,a5)==null?a2:A.N(j.a(J.l(s,a5)),!0,i))
i=J.u(J.l(s,"refresh"),!0)?a7:a2
r=A.qd(k,j,J.u(J.l(s,"allowEmpty"),!0),i)
n=A.E(a7)
if(t.f.b(n)&&typeof n.h(0,a3)=="string"){m=A.T(A.e(r))
m.G([a3],n.h(0,a3))
r=m.b}k=t.s
r=A.n0(A.e(r),B.b.R(A.c(a7.split("\n"),k),new A.iY()))
if(B.b.R(A.c(a7.split("\n"),k),new A.iZ()))r=A.mZ(r,A.ni(a7))
break
case"subscriptionSources":k=A.U(J.l(s,"count"))
r=A.rB(a7,k,J.l(s,a5)==null?a2:A.N(t.R.a(J.l(s,a5)),!0,t.N))
break
default:throw A.a(B.c4)}k=B.c.ad(A.a4(["ok",!0,"value",r],t.N,t.K),a2)
return k}catch(a1){l=A.c3(a1)
if(!a9&&l instanceof A.c4&&B.a.p(l.n(0),"package:yaml_edit"))try{k=A.nd(a6,A.r8(a7),a8,!0)
return k}catch(a1){}return B.c.ad(A.a4(["ok",!1,"error",J.al(l)],t.N,t.K),a2)}},
r1(){var s,r=new A.j7()
if(typeof r=="function")A.D(A.a1("Attempting to rewrap a JS function."))
s=function(a,b){return function(c,d,e){return a(b,c,d,e,arguments.length)}}(A.po,r)
s[$.lo()]=r
v.G.mclashOverrideCall=s},
jn:function jn(a){this.a=a},
jf:function jf(){},
iY:function iY(){},
iZ:function iZ(){},
j7:function j7(){},
n0(a,b){var s={},r=s.a=!1,q=t.U,p=A.o(new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.iy(s)),q),q.i("f.E"))
return(b?!s.a:r)?"# Mclash OpenWrt \u63a7\u5236: true\n"+B.b.V(p,"\n"):B.b.V(p,"\n")},
ni(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash OpenWrt \u63a5\u7ba1: "))return A.l_(t.f.a(B.c.aa(B.a.D(p,21),null)))}s=t.z
return A.l_(A.a4(["mode","none","interfaces",A.c(["br-lan"],t.s)],s,s))},
l9(a){var s=A.c(a.split("."),t.s)
if(s.length!==4||B.b.R(s,new A.j4()))return null
return B.b.bT(s,0,new A.j5(),t.p)},
rL(a){var s,r,q,p=A.I("^[0-9a-fA-F:]+$",!0)
if(!p.b.test(a))return!1
s=A.c(a.split("::"),t.s)
if(s.length>2)return!1
p=t.f_
r=A.o(new A.aA(s,t.ah.a(new A.kc()),p),p.i("f.E"))
if(B.b.R(r,new A.kd()))return!1
p=s.length
q=r.length
return p===2?q<8:q===8},
qf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.g.a(a)
s=a==null?[]:a
r=A.N(s,!0,t.N)
s=r.length
if(s>64)throw A.a(B.b3)
q=A.c([],t.s)
for(p=0;p<s;++p){o=B.a.N(r[p]).toLowerCase()
n=o.split("-")
m=n.length
if(m===2){if(0>=m)return A.b(n,0)
l=A.l9(n[0])
if(1>=m)return A.b(n,1)
k=A.l9(n[1])
j=l!=null&&k!=null&&l<=k}else{j=!1
if(m===1){i=o.split("/")
m=i.length
if(0>=m)return A.b(i,0)
h=i[0]
g=A.l9(h)==null
f=!g||A.rL(h)
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
j=m}else j=!0}}if(!j)throw A.a(B.bt)
if(!B.b.p(q,o))B.b.t(q,o)}return q},
l_(a){var s,r,q,p,o,n,m,l,k,j=a.h(0,"mode")
if(j==null)j="none"
s=a.h(0,"stack")
if(s==null)s="mixed"
r=a.h(0,"interfaces")
if(r==null)r=["br-lan"]
q=t.N
p=A.N(t.R.a(r),!0,q)
r=t.s
if(!B.b.p(A.c(["none","tun","tproxy"],r),j))throw A.a(B.cj)
if(!B.b.p(A.c(["system","gvisor","mixed"],r),s))throw A.a(B.c7)
r=p.length
if(r===0||r>16||A.au(p,A.t(p).c).a!==p.length||B.b.R(p,new A.iz()))throw A.a(B.b7)
for(r=["lan","router","ipv6"],o=0;o<3;++o){n=r[o]
if(a.h(0,n)!=null&&!A.eW(a.h(0,n)))throw A.a(B.bp)}r=a.h(0,"lan")
if(r==null)r=!0
m=A.qf(a.h(0,"access"))
l=a.h(0,"router")
if(l==null)l=!0
k=a.h(0,"ipv6")
return A.a4(["mode",j,"interfaces",p,"lan",r,"access",m,"router",l,"ipv6",k==null?!1:k,"stack",s],q,t.z)},
mZ(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="ipv6",a="routing-mark",a0="default-nameserver",a1="external-controller",a2=A.l_(b1),a3=a2.h(0,"mode"),a4=J.aY(a3),a5=!a4.S(a3,"none"),a6=t.s,a7=A.T(new A.q(A.c(b0.split("\n"),a6),t.Q.a(new A.io()),t.U).V(0,"\n")),a8=A.E(b0),a9=t.f
if(!a9.b(a8))throw A.a(B.b_)
s=t.N
r=t.z
q=A.a4(["enable",a4.S(a3,"tun")],s,r)
if(a4.S(a3,"tun")){q.a9(0,A.a4(["device","Mclash","stack",a2.h(0,"stack"),"auto-route",!1,"auto-redirect",!1,"auto-detect-interface",!0,"mtu",1500,"dns-hijack",A.c(["any:53","tcp://any:53"],a6)],s,r))
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
m=A.I(":([0-9]+)$",!0).fW(n)
a4=m==null
if(a4)a6=c
else{a6=m.b
if(1>=a6.length)return A.b(a6,1)
a6=a6[1]}l=A.aU(a6==null?"":a6,c)
if(l==null)l=9097
if(l<1||l>65535)throw A.a(B.bw)
k=a4?"0.0.0.0":B.a.v(n,0,m.b.index)
a7.G([a1],k+":"+l)
j=a8.h(0,"proxies")
if(t.j.b(j))for(a4=J.C(j),i=0;i<a4.gk(j);++i)if(a9.b(a4.h(j,i))&&a9.a(a4.h(j,i)).F(a))a7.I(0,["proxies",i,"routing-mark"])
h=a8.h(0,"proxy-providers")
if(a9.b(h))for(a4=h.gO(),a4=a4.gq(a4);a4.l();){a6=a4.gm()
o=a6.b
if(!a9.b(o))continue
g=o.h(0,"override")
if(a9.b(g)){o=A.n(s,r)
for(f=g.gO(),f=f.gq(f);f.l();){e=f.gm()
o.j(0,A.m(e.a),e.b)}d=o}else d=A.n(s,r)
d.j(0,a,359)
a7.G(["proxy-providers",a6.a,"override"],d)}}return A.n0("# Mclash OpenWrt \u63a5\u7ba1: "+B.c.ad(a2,c)+"\n"+a7.n(0),!1)},
qb(a,b){var s,r,q,p,o,n=b.h(0,"address"),m=B.a.N(A.m(n==null?"0.0.0.0":n)),l=A.aU(A.m(b.h(0,"port")),null)
n=t.s
s=A.c(m.split("."),n)
r=s.length===4&&B.b.aO(s,new A.il())
if(B.a.p(m,":")){q=A.I("^[0-9a-fA-F:]{2,39}$",!0)
p=q.b.test(m)}else p=!1
if(!r&&!p&&m!=="localhost")throw A.a(B.bC)
if(l==null||l<1||l>65535)throw A.a(B.bv)
o=A.T(new A.q(A.c(a.split("\n"),n),t.Q.a(new A.im()),t.U).V(0,"\n"))
n=p?"["+m+"]":m
o.G(["external-controller"],n+":"+A.m(l))
return"# Mclash OpenWrt \u63a7\u5236: true\n"+o.n(0)},
iy:function iy(a){this.a=a},
j4:function j4(){},
j5:function j5(){},
kc:function kc(){},
kd:function kd(){},
iz:function iz(){},
io:function io(){},
il:function il(){},
im:function im(){},
lf(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u624b\u52a8\u8282\u70b9: "))return A.N(t.j.a(B.c.aa(B.a.D(p,15),null)),!0,t.N)}return A.c([],t.s)},
lm(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kg()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash \u624b\u52a8\u8282\u70b9: "+B.c.ad(b,null)+"\n"+s},
rb(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="alpn",a1="path",a2={},a3=B.a.N(a6),a4=A.I("\\s",!0),a5=A.aG(a3,a4,"")
if(!J.lv(a5,"vmess://")||J.a6(a5)>1048576)throw A.a(B.aW)
a2.a=null
try{s=B.b.gU(J.bB(a5,8).split("#"))
a2.a=A.aj(t.f.a(B.c.aa(B.e.ct(B.x.aF(B.v.aW(s))),a)),t.N,t.z)}catch(r){throw A.a(B.cl)}q=new A.jm(a2)
p=new A.jl(q)
o=q.$1("add")
n=q.$1("id")
m=p.$1("port")
l=p.$2$fallback("aid",0)
if(o.length===0||n.length===0||m<1||m>65535||l<0)throw A.a(B.bR)
k=q.$2("net","tcp")
if(k.length===0)k="tcp"
j=q.$2("type","none")
if(k==="tcp"&&j==="http")k="http"
a3=t.s
if(!B.b.p(A.c(["tcp","http","ws","h2","grpc"],a3),k))throw A.a(A.B("\u6682\u4e0d\u652f\u6301 VMess \u4f20\u8f93\u7c7b\u578b\uff1a"+k,a,a))
if(k==="tcp"&&j.length!==0&&j!=="none")throw A.a(A.B("\u6682\u4e0d\u652f\u6301 TCP \u4f2a\u88c5\u7c7b\u578b\uff1a"+j,a,a))
i=q.$1("tls")
if(i.length!==0&&i!=="none"&&i!=="tls")throw A.a(A.B("\u6682\u4e0d\u652f\u6301 VMess TLS \u7c7b\u578b\uff1a"+i,a,a))
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
if(J.a6(q.$1(a0))!==0){g=J.nX(q.$1(a0),",")
f=A.t(g)
e=f.i("H<1,d>")
e=new A.H(g,f.i("d(1)").a(new A.jg()),e).bh(0,e.i("k(y.E)").a(new A.jh()))
g=A.o(e,e.$ti.i("f.E"))
h.j(0,a0,g)}d=q.$1("host")
c=J.a6(q.$1(a1))===0?"/":q.$1(a1)
g=t.c
f=t.e
e=new A.H(A.c(d.split(","),a3),g.a(new A.ji()),f).bh(0,f.i("k(y.E)").a(new A.jj()))
b=A.o(e,e.$ti.i("f.E"))
switch(k){case"http":e=A.n(a4,t.K)
e.j(0,"method","GET")
a3=A.o(new A.H(A.c(c.split(","),a3),g.a(new A.jk()),f),f.i("y.E"))
e.j(0,a1,a3)
if(b.length!==0)e.j(0,"headers",A.a4(["Host",b],a4,t.a))
h.j(0,"http-opts",e)
break
case"ws":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(d.length!==0)a3.j(0,"headers",A.a4(["Host",d],a4,a4))
h.j(0,"ws-opts",a3)
break
case"h2":a3=A.n(a4,t.K)
a3.j(0,a1,c)
if(b.length!==0)a3.j(0,"host",b)
h.j(0,"h2-opts",a3)
break
case"grpc":h.j(0,"grpc-opts",A.a4(["grpc-service-name",q.$1(a1)],a4,a4))
break}return h},
r9(a){var s=B.a.N(a)
if(B.a.u(s,"vmess://"))return A.rb(s)
return A.ra(s)},
qa(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="network",a0="proxies",a1="name",a2=A.r9(a5),a3=A.nl(a4)
if(J.u(a2.h(0,"type"),"vmess")&&a3.length!==0&&B.b.p(A.c(["http","ws"],t.s),a2.h(0,a))){s=B.a.N(a3)
r=A.I("[\\s/\\\\?#]",!0)
if(r.b.test(s))throw A.a(B.bG)
q=t.P.a(a2.h(0,J.u(a2.h(0,a),"http")?"http-opts":"ws-opts"))
if(s.length===0)q.I(0,"headers")
else{if(J.u(a2.h(0,a),"http")){r=t.e
r=new A.H(A.c(s.split(","),t.s),t.c.a(new A.ii()),r).bh(0,r.i("k(y.E)").a(new A.ij()))
r=A.o(r,r.$ti.i("f.E"))}else r=s
q.j(0,"headers",A.a4(["Host",r],t.N,t.K))}}p=t.S.a(A.E(a4))
r=t.g
o=r.a(p.h(0,a0))
if(o==null)o=[]
n=r.a(p.h(0,"proxy-groups"))
if(n==null)n=[]
r=A.lO(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],t.N)
for(m=J.F(o);m.l();)r.t(0,A.e(J.l(m.gm(),a1)))
for(m=J.a3(n),l=m.gq(n);l.l();)r.t(0,A.e(J.l(l.gm(),a1)))
k=A.e(a2.h(0,a1))
for(l=k+" (",j=k,i=2;r.p(0,j);){j=l+i+")";++i}a2.j(0,a1,j)
h=A.T(a4)
r=[a2]
B.b.a9(r,o)
h.G(["proxies"],r)
g=h.b
f=A.f5(a4)
if(f.a!==0)g=A.n_(g,f)
else if(!B.b.R(A.c(a4.split("\n"),t.s),new A.ik())){for(r=t.j,l=t.R,e=0;e<m.gk(n);++e){d=m.h(n,e)
c=J.C(d)
if(J.u(c.h(d,"type"),"select")&&r.b(c.h(d,a0))&&!A.b5(a4).F(c.h(d,a1))){b=[j]
B.b.a9(b,l.a(c.h(d,a0)))
h.G(["proxy-groups",e,"proxies"],b)}}g=h.b}r=A.c([j],t.s)
B.b.a9(r,A.lf(a4))
return A.kY(A.lm(g,r),a4)},
lh(a){var s,r,q=A.c2(a),p=A.au(q,A.t(q).c)
q=A.lf(a)
s=A.t(q)
r=s.i("q<1>")
q=A.o(new A.q(q,s.i("k(1)").a(p.ga5(p)),r),r.i("f.E"))
return q},
rp(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="name",a3=A.lh(a5),a4=A.au(a3,A.t(a3).c)
if(a6.length!==a4.a||A.au(a6,A.t(a6).c).a!==a4.a||!a4.fO(a6))throw A.a(B.bI)
s=t.S.a(A.E(a5))
a3=t.g
r=a3.a(s.h(0,"proxies"))
if(r==null)r=[]
q=t.z
q=A.n(q,q)
for(p=J.a3(r),o=p.gq(r);o.l();){n=o.gm()
m=J.C(n)
if(a4.p(0,m.h(n,a2)))q.j(0,m.h(n,a2),n)}l=A.T(a5)
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
b=a0}else c.push(a)}l.G(["proxy-groups",g,"proxies"],c)}a1=A.lm(l.b,a6)
A.nr(a1)
return a1},
qz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy"
if(!B.b.p(A.lh(a),b))throw A.a(B.c5)
s=t.S.a(A.E(a))
r=A.c([],t.dm)
for(q=t.j,p=J.F(q.a(s.h(0,"proxies"))),o=t.f,n=t.z;p.l();){m=p.gm()
if(!J.u(J.l(m,"name"),b))r.push(A.aj(o.a(m),n,n))}for(p=r.length,l=0;l<r.length;r.length===p||(0,A.a7)(r),++l){m=r[l]
if(J.u(m.h(0,e),b))m.I(0,e)}k=A.T(a)
k.G(["proxies"],r)
j=t.g.a(s.h(0,"proxy-groups"))
if(j==null)j=[]
for(r=J.C(j),p=t.s,i=0;i<r.gk(j);++i){h=J.l(r.h(j,i),"proxies")
if(q.b(h)&&J.bo(h,b)){o=J.am(h,new A.iK(b))
g=A.o(o,o.$ti.i("f.E"))
o=g.length===0?A.c(["DIRECT"],p):g
k.G(["proxy-groups",i,"proxies"],o)}}r=k.b
q=A.lf(a)
p=A.t(q)
o=p.i("q<1>")
q=A.o(new A.q(q,p.i("k(1)").a(new A.iL(b)),o),o.i("f.E"))
f=A.rn(A.lm(r,q),b)
A.nr(f)
return f},
kg:function kg(){},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
jx(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u624b\u52a8\u8282\u70b9: "))return A.N(t.j.a(B.c.aa(B.a.D(p,15),null)),!0,t.N)}return A.c([],t.s)},
r5(a,b){var s,r,q,p,o,n
if(b==null)return a
s=A.jx(b)
r=A.au(s,A.t(s).c)
q=t.g.a(t.S.a(A.E(b)).h(0,"proxies"))
if(q==null)q=[]
s=J.am(q,new A.ja(r))
p=A.o(s,s.$ti.i("f.E"))
s=A.t(p)
o=new A.H(p,s.i("@(1)").a(new A.jb()),s.i("H<1,@>")).aE(0)
s=A.o(p,t.z)
n=A.j(a)
B.b.a9(s,new A.q(a,n.i("k(r.E)").a(new A.jc(o)),n.i("q<r.E>")))
return s},
rO(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kf()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash \u624b\u52a8\u8282\u70b9: "+B.c.ad(b,null)+"\n"+s},
rr(a,b){var s,r,q,p,o,n,m,l,k,j,i="name"
if(b==null)return a
s=A.jx(b)
r=A.au(s,A.t(s).c)
if(r.a===0)return a
s=t.S
q=t.g
p=q.a(s.a(A.E(b)).h(0,"proxies"))
if(p==null)p=[]
o=t.z
o=A.n(o,o)
for(n=J.F(p);n.l();){m=n.gm()
l=J.C(m)
if(r.p(0,l.h(m,i)))o.j(0,l.h(m,i),m)}k=q.a(s.a(A.E(a)).h(0,"proxies"))
if(k==null)k=[]
s=A.T(a)
q=[]
for(n=J.F(k);n.l();){m=n.gm()
l=o.h(0,J.l(m,i))
q.push(l==null?m:l)}s.G(["proxies"],q)
j=s.b
A.rN(j)
return j},
ja:function ja(a){this.a=a},
jb:function jb(){},
jc:function jc(a){this.a=a},
kf:function kf(){},
c2(a){var s,r=t.g.a(t.S.a(A.E(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jW(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
dL(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u8282\u70b9\u94fe\u8def: ")){s=t.N
return A.aj(t.f.a(B.c.aa(B.a.D(p,15),null)),s,s)}}s=t.N
return A.n(s,s)},
b5(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,16),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
jp(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u5168\u5c40\u94fe\u8def: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,15),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
ri(a,b){var s=A.jp(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.c2(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jB(s)),o)
if(r!=null){q=J.am(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
my(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.c2(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.am(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.am(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hI(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.dL(a0)
n=A.b5(a0)
m=t.S.a(A.E(a))
l=A.T(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.l(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hJ()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lk(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.am(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lk(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.am(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lk(h,e,q,a2,!1)}return"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(a1,null)+"\n"+h},
mX(a){var s=t.N,r=new A.ic(A.aS(s),A.aS(s),a)
for(s=new A.ah(a,a.r,a.e,A.j(a).i("ah<1>"));s.l();)r.$1(s.d)},
ie(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ih()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash \u8282\u70b9\u94fe\u8def: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: "+B.c.ad(c,null)+"\n")+s},
kY(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.is()))return A.kR(a8,a9,A.f3(a9))
s=A.jp(a9)
if(s.a!==0)return A.my(a8,a9,s,"")
r=A.dL(a9)
q=A.b5(a9)
p=t.S.a(A.E(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a3(n)
k=l.ac(n,new A.it(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.l(h,a5)))j.push(h)}for(i=new A.P(q,A.j(q).i("P<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a3(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a4(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.iu()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a7)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.N(e==null?[]:e,!0,m))}a1=A.T(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.mX(i)
return A.ie(a1.b,r,q)},
lk(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.c2(a),g=A.au(b,A.t(b).c),f=A.au(c,A.t(c).c)
if(g.a===0||f.a===0)throw A.a(B.ad)
if(g.dV(f).a!==0)throw A.a(B.af)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aO(r,B.b.ga5(h)))throw A.a(B.I)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.dL(a)
n=A.b5(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.E(a))
s=A.e8(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.F(r==null?[]:r)
while(r.l())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9":"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.hu(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.kY(a,A.ie("",o,n))},
nr(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.E(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
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
l.j(0,q,A.N(s==null?[]:s,!0,m))}A.mX(l)},
rn(a,b){var s,r,q,p,o,n,m=t.s
if(B.b.R(A.c(a.split("\n"),m),new A.jM())){s=A.f3(a)
for(m=new A.aC(s,s.r,s.e,A.j(s).i("aC<2>"));m.l();)for(r=m.d.gag(),r=r.gq(r);r.l();)J.kt(r.gm(),new A.jN(b))
return A.kR(a,a,s)}q=A.dL(a)
q.au(0,new A.jO(b))
p=A.b5(a)
for(r=new A.aC(p,p.r,p.e,A.j(p).i("aC<2>"));r.l();)J.kt(r.d,new A.jP(b))
o=A.jp(a)
for(r=new A.aC(o,o.r,o.e,A.j(o).i("aC<2>"));r.l();)J.kt(r.d,new A.jQ(b))
o.au(0,new A.jR())
if(!B.b.R(A.c2(a),new A.jS(o)))o.br(0)
n=A.ie(new A.q(A.c(a.split("\n"),m),t.Q.a(new A.jT()),t.U).V(0,"\n"),q,p)
return o.a===0?n:"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(o,null)+"\n"+n},
f3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jz()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),15),null)).gO(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.N(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.jp(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a4([f,o,f+"Targets",A.ri(a,g)],s,q))}}return i},
r7(a){var s=A.f3(a),r=A.j(s).i("ai<1>"),q=t.p
return""+(A.fM(new A.ai(s,r),r.i("h(f.E)").a(A.qq()),r.i("f.E"),q).bT(0,0,new A.je(),q)+1)},
ru(a,b,c,d,e){var s,r,q,p,o,n=B.b.ga5(A.c2(a))
if(!B.b.aO(c,n)||!B.b.aO(e,n))throw A.a(B.I)
if(c.length!==0&&e.length===0)throw A.a(B.bT)
if(B.b.R(e,B.b.ga5(c)))throw A.a(B.bz)
s=A.f3(a)
n=A.j(s).i("P<1,2>")
r=n.i("q<f.E>")
q=r.i("aA<f.E,d>")
p=A.e8(new A.aA(new A.q(new A.P(s,n),n.i("k(f.E)").a(new A.jX(b)),r),r.i("f<d>(f.E)").a(new A.jY(d)),q),q.i("f.E"))
if(B.b.R(c,p.ga5(p)))throw A.a(B.bn)
o=d?"front":"back"
if(c.length===0)s.I(0,b)
else{n=t.N
r=A.o(c,n)
q=A.au(e,A.t(e).c)
q=A.o(q,A.j(q).c)
s.j(0,b,A.a4([o,r,o+"Targets",q],n,t.a))}return A.kR(a,a,s)},
kR(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.E(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a3(b1)
q=r.ac(b1,new A.hO(),s).aE(0)
p=A.dL(b3)
o=A.b5(b3)
n=A.T(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.l(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hP()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.P(b4,A.j(b4).i("P<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.am(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aD<2>")
e=f.i("aA<f.E,d>")
b=A.e8(new A.aA(new A.aD(i,f),f.i("f<d>(f.E)").a(new A.hQ()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.P(i,l.i("P<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.am(d,new A.hR(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.my(j,j,f," (\u94fe\u8def "+e+")")
a4=A.b5(a3)
a5=A.dL(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("\u8282\u70b9\u201c"+d+"\u201d\u88ab\u591a\u6761\u94fe\u8def\u8fde\u63a5\u5230\u4e0d\u540c\u5165\u53e3\uff0c\u8bf7\u8c03\u6574\u9009\u62e9",a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.kY(j,A.ie("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.P(a1,a1.$ti.i("P<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash \u540e\u7f6e\u94fe\u8def ":"# Mclash \u94fe\u5f0f\u8282\u70b9 "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash \u94fe\u8def\u8bbe\u7f6e: "+s+"\n"+B.b.dW(r)+a7},
re(a){var s,r,q
for(s=["# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash \u8282\u70b9\u94fe\u8def "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jW:function jW(){},
jB:function jB(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
jM:function jM(){},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(){},
jS:function jS(a){this.a=a},
jT:function jT(){},
jz:function jz(){},
je:function je(){},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
li(a){var s,r=t.g.a(t.S.a(A.E(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jV(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
f4(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u8282\u70b9\u94fe\u8def: ")){s=t.N
return A.aj(t.f.a(B.c.aa(B.a.D(p,15),null)),s,s)}}s=t.N
return A.n(s,s)},
f2(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,16),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
le(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u5168\u5c40\u94fe\u8def: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,15),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.N(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
rh(a,b){var s=A.le(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.li(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jA(s)),o)
if(r!=null){q=J.am(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mx(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.li(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.am(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.am(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hG(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.f4(a0)
n=A.f2(a0)
m=t.S.a(A.E(a))
l=A.T(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.l(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.l(i,"name")))s.push(i)}l.G(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hH()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lj(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.am(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lj(h,e,A.c([B.b.gK(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.am(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lj(h,e,q,a2,!1)}return"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(a1,null)+"\n"+h},
mW(a){var s=t.N,r=new A.ib(A.aS(s),A.aS(s),a)
for(s=new A.ah(a,a.r,a.e,A.j(a).i("ah<1>"));s.l();)r.$1(s.d)},
kW(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ig()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash \u8282\u70b9\u94fe\u8def: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: "+B.c.ad(c,null)+"\n")+s},
kX(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.R(A.c(a9.split("\n"),a7),new A.ip()))return A.pi(a8,a9,A.rg(a9))
s=A.le(a9)
if(s.a!==0)return A.mx(a8,a9,s,"")
r=A.f4(a9)
q=A.f2(a9)
p=t.S.a(A.E(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a3(n)
k=l.ac(n,new A.iq(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.l(h,a5)))j.push(h)}for(i=new A.P(q,A.j(q).i("P<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a3(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a4(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.ir()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a7)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.N(e==null?[]:e,!0,m))}a1=A.T(a8)
if(q.a!==0)a1.G(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.l(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.G(["proxies",a2,"dialer-proxy"],a4)}}A.mW(i)
return A.kW(a1.b,r,q)},
lj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.li(a),g=A.au(b,A.t(b).c),f=A.au(c,A.t(c).c)
if(g.a===0||f.a===0)throw A.a(B.ad)
if(g.dV(f).a!==0)throw A.a(B.af)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aO(r,B.b.ga5(h)))throw A.a(B.I)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.f4(a)
n=A.f2(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.E(a))
s=A.e8(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.F(r==null?[]:r)
while(r.l())s.t(0,A.e(J.l(r.gm(),"name")))
k=(e?"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9":"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.hu(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.kX(a,A.kW("",o,n))},
rN(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.E(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
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
l.j(0,q,A.N(s==null?[]:s,!0,m))}A.mW(l)},
rg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jy()),t.U)
if(!d.gJ(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),15),null)).gO(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.N(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.le(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a4([f,o,f+"Targets",A.rh(a,g)],s,q))}}return i},
pi(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.E(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a3(b1)
q=r.ac(b1,new A.hK(),s).aE(0)
p=A.f4(b3)
o=A.f2(b3)
n=A.T(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.l(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.l(k,"name")))r.push(k)}n.G(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hL()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.P(b4,A.j(b4).i("P<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.am(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aD<2>")
e=f.i("aA<f.E,d>")
b=A.e8(new A.aA(new A.aD(i,f),f.i("f<d>(f.E)").a(new A.hM()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.P(i,l.i("P<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.am(d,new A.hN(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mx(j,j,f," (\u94fe\u8def "+e+")")
a4=A.f2(a3)
a5=A.f4(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("\u8282\u70b9\u201c"+d+"\u201d\u88ab\u591a\u6761\u94fe\u8def\u8fde\u63a5\u5230\u4e0d\u540c\u5165\u53e3\uff0c\u8bf7\u8c03\u6574\u9009\u62e9",a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.kX(j,A.kW("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.P(a1,a1.$ti.i("P<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash \u540e\u7f6e\u94fe\u8def ":"# Mclash \u94fe\u5f0f\u8282\u70b9 "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash \u94fe\u8def\u8bbe\u7f6e: "+s+"\n"+B.b.dW(r)+a7},
rd(a){var s,r,q
for(s=["# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash \u8282\u70b9\u94fe\u8def "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jV:function jV(){},
jA:function jA(a){this.a=a},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
jy:function jy(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
l1(a){var s,r,q,p,o,n,m,l=A.E(a),k=t.f,j=k.b(l)?l.h(0,"rule-providers"):null
if(j==null)return A.n(t.N,t.P)
if(!k.b(j))throw A.a(B.bE)
s=new A.iC()
r=t.N
q=A.n(r,t.P)
for(p=j.gO(),p=p.gq(p),o=t.z;p.l();){n=p.gm()
m=n.a
if(typeof m!="string"||!k.b(n.b))throw A.a(B.bZ)
q.j(0,m,A.aj(k.a(s.$1(n.b)),r,o))}return q},
mO(a){return new A.bx(A.pW(a),t.dj)},
pW(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l
return function $async$mO(b,c,d){if(c===1){p.push(d)
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
rG(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1={}
a1.a=a3
a3=a1.a=B.a.N(a3)
if(a3.length!==0){s=A.I("[,()\\r\\n]",!0)
s=s.b.test(a3)}else s=!0
if(s)throw A.a(B.aZ)
r=A.l1(a2)
s=a5==null
q=!s
if(q&&!r.F(a5))throw A.a(B.ci)
if(a3!==a5&&r.F(a3))throw A.a(B.b8)
p=a4.h(0,"type")
o=a4.h(0,"behavior")
n=a4.h(0,"format")
if(n==null)n="yaml"
m=t.s
if(!B.b.p(A.c(["http","file","inline"],m),p)||!B.b.p(A.c(["domain","ipcidr","classical"],m),o)||!B.b.p(A.c(["yaml","text","mrs"],m),n))throw A.a(B.bW)
if(J.u(n,"mrs"))l=J.u(o,"classical")||J.u(p,"inline")
else l=!1
if(l)throw A.a(B.bm)
l=J.aY(p)
if(l.S(p,"http")){k=a4.h(0,"url")
j=A.oC(A.m(k==null?"":k))
if(j==null||!B.b.p(A.c(["http","https"],m),j.gak())||j.gaH().length===0)throw A.a(B.ch)
i=a4.h(0,"interval")
if(i!=null)k=!A.b3(i)||i<0
else k=!1
if(k)throw A.a(B.c1)}k=a4.h(0,"path")
h=B.a.N(A.m(k==null?"":k))
if(l.S(p,"file")&&h.length===0)throw A.a(B.ce)
if(h.length!==0&&new A.P(r,A.j(r).i("P<1,2>")).R(0,new A.k7(a5,h)))throw A.a(B.bF)
if(l.S(p,"inline")){g=a4.h(0,"payload")
if(t.j.b(g)){l=J.C(g)
l=l.gJ(g)||l.R(g,new A.k8())}else l=!0
if(l)throw A.a(B.bk)}f=A.n(t.N,t.z)
for(l=new A.P(r,A.j(r).i("P<1,2>")).gq(0);l.l();){e=l.d
k=e.a
d=k===a5
if(d)k=a1.a
f.j(0,k,d?a4:e.b)}if(s)f.j(0,a1.a,a4)
c=A.T(a2)
c.G(["rule-providers"],f)
if(q&&a5!==a1.a){s=t.f
b=s.a(A.E(a2))
a=new A.k9(a1,a5)
q=t.j
if(q.b(b.h(0,"rules"))){l=A.c([],m)
for(k=J.F(t.R.a(b.h(0,"rules")));k.l();)l.push(a.$1(A.e(k.gm())))
c.G(["rules"],l)}a0=b.h(0,"sub-rules")
if(s.b(a0))for(s=a0.gO(),s=s.gq(s);s.l();){l=s.gm()
k=l.a
d=A.c([],m)
for(l=J.F(q.a(l.b));l.l();)d.push(a.$1(A.e(l.gm())))
c.G(["sub-rules",k],d)}}return c.b},
qy(a,b){var s,r
if(A.mO(t.f.a(A.E(a))).R(0,new A.iJ(b)))throw A.a(B.bL)
s=A.l1(a)
s.I(0,b)
r=A.T(a)
r.G(["rule-providers"],s)
return r.b},
iC:function iC(){},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(){},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
iJ:function iJ(a){this.a=a},
mF(a){var s,r
try{s=B.e.ct(B.x.aF(B.v.aW(a)))
return s}catch(r){throw A.a(B.bc)}},
mT(a,b,c,d){var s,r,q,p,o="skip-cert-verify",n="client-fingerprint",m=t.s,l=b.a3(0,A.c(["sni","peer","serverName","servername"],m))
if(l.length!==0)a.j(0,c,l)
s=b.dO(A.c(["insecure","allowInsecure",o],m))
if(s!=null)a.j(0,o,s)
r=b.a3(0,A.c(["alpn"],m))
if(r.length!==0){q=t.e
q=new A.H(A.c(r.split(","),m),t.c.a(new A.i6()),q).bh(0,q.i("k(y.E)").a(new A.i7()))
q=A.o(q,q.$ti.i("f.E"))
a.j(0,"alpn",q)}if(d){p=b.a3(0,A.c(["fp",n],m))
if(p.length!==0)a.j(0,n,p)}},
q2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="path",e=t.s,d=b.aN(0,A.c(["type","network"],e),"tcp")
if(d.length===0)d="tcp"
s=b.aN(0,A.c(["headerType"],e),"none")
if(d==="tcp"&&s==="http"&&J.u(a.h(0,"type"),"vless"))d="http"
else if(s.length!==0&&s!=="none")throw A.a(B.c8)
if(!B.b.p(J.u(a.h(0,"type"),"vless")?A.c(["tcp","ws","http","h2","grpc","xhttp"],e):A.c(["tcp","ws","grpc"],e),d))throw A.a(B.c6)
a.j(0,"network",d)
if(d==="tcp")return
if(d==="grpc"){r=b.a3(0,A.c(["serviceName","service-name","path"],e))
q=b.aN(0,A.c(["mode"],e),"gun")
if(q!=="gun"&&q.length!==0)throw A.a(B.be)
e=t.N
a.j(0,"grpc-opts",A.a4(["grpc-service-name",r],e,e))
return}p=b.aN(0,A.c(["path"],e),"/")
o=b.a3(0,A.c(["host"],e))
if(d==="xhttp"){q=b.aN(0,A.c(["mode"],e),"auto")
if(!B.b.p(A.c(["auto","stream-one","stream-up","packet-up"],e),q))throw A.a(B.by)
e=t.N
e=A.n(e,e)
e.j(0,f,p)
e.j(0,"mode",q)
if(o.length!==0)e.j(0,"host",o)
a.j(0,"xhttp-opts",e)}else if(d==="ws"){n=t.N
m=A.n(n,t.z)
m.j(0,f,p)
if(o.length!==0)m.j(0,"headers",A.a4(["Host",o],n,n))
l=b.a3(0,A.c(["ed"],e))
if(l.length!==0){k=A.aU(l,null)
if(k==null||k<0)throw A.a(B.bO)
m.j(0,"max-early-data",k)}j=b.a3(0,A.c(["eh"],e))
if(j.length!==0)m.j(0,"early-data-header-name",j)
a.j(0,"ws-opts",m)}else{n=t.U
i=A.o(new A.q(A.c(o.split(","),e),t.Q.a(new A.i8()),n),n.i("f.E"))
n=d==="h2"
m=n?"h2-opts":"http-opts"
h=t.N
g=t.K
if(n){e=A.n(h,g)
e.j(0,f,p)
if(i.length!==0)e.j(0,"host",i)}else{n=A.n(h,g)
n.j(0,"method","GET")
n.j(0,f,A.c(p.split(","),e))
if(i.length!==0)n.j(0,"headers",A.a4(["Host",i],h,t.a))
e=n}a.j(0,m,e)}},
pS(a,b){var s,r,q,p,o=t.s,n=b.a3(0,A.c(["pbk","public-key"],o))
if(n.length===0)A.D(A.B("\u8282\u70b9\u7f3a\u5c11Reality \u516c\u94a5",null,null))
s=n
try{if(B.x.aF(B.v.aW(s)).length!==32)throw A.a(B.bg)}catch(r){throw A.a(B.bf)}q=b.a3(0,A.c(["sid","short-id"],o))
p=A.I("^[0-9a-fA-F]{0,16}$",!0)
if(!p.b.test(q)||(q.length&1)===1)throw A.a(B.bS)
b.a3(0,A.c(["spx"],o))
o=t.B.i("aI.S").a(B.x.aF(B.v.aW(s)))
o=B.a3.gbQ().aF(o)
p=t.N
a.j(0,"reality-opts",A.a4(["public-key",A.aG(o,"=",""),"short-id",q],p,p))},
pZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="mode"
if(b.length===0)return
s=t.s
r=A.c(b.split(";"),s)
q=B.b.bc(r,0)
p=t.N
o=A.n(p,p)
for(n=t.Q.a(new A.i5()),m=B.b.gq(r),n=new A.bk(m,n,t.fj);n.l();){l=m.gm()
k=B.a.aq(l,"=")
j=k<0
i=j?l:B.a.v(l,0,k)
if(o.F(i))throw A.a(B.b0)
o.j(0,i,j?"true":B.a.D(l,k+1))}h=A.n(p,t.z)
if(B.b.p(A.c(["obfs-local","simple-obfs","obfs"],s),q)){p=o.I(0,"obfs")
g=p==null?o.I(0,d):p
if(g==null)g=""
if(!B.b.p(A.c(["http","tls"],s),g))throw A.a(B.cb)
h.j(0,d,g)
f=o.I(0,"obfs-host")
if(f==null)f=o.I(0,"host")
if(f!=null)h.j(0,"host",f)
a.j(0,"plugin","obfs")}else if(q==="v2ray-plugin"){g=o.I(0,d)
if(g==null)g="websocket"
if(g!=="websocket")throw A.a(B.b2)
h.j(0,d,g)
for(p=["host","path"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b!=null)h.j(0,l,b)}for(p=["tls","mux"],e=0;e<2;++e){l=p[e]
b=o.I(0,l)
if(b==null)continue
if(!B.b.p(A.c(["true","false","1","0"],s),b))throw A.a(B.bJ)
h.j(0,l,b==="true"||b==="1")}a.j(0,"plugin",q)}else throw A.a(B.b1)
if(o.a!==0)throw A.a(B.bq)
a.j(0,"plugin-opts",h)},
ra(a){var s,r,q
try{r=A.pR(a)
return r}catch(q){r=A.c3(q)
if(t.d.b(r)){s=r
throw A.a(A.B(s.gdY(),null,null))}else throw A.a(B.J)}},
pR(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null,c3="password",c4="tls",c5="udp",c6="^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",c7="congestion-controller",c8="\u8282\u70b9\u7f3a\u5c11\u5bc6\u7801",c9=d1.length,d0=!0
if(c9!==0)if(c9<=1048576){c9=A.I("\\s|%(?![0-9a-fA-F]{2})",!0)
c9=c9.b.test(d1)}else c9=d0
else c9=d0
if(c9)throw A.a(B.bQ)
s=d1
if(J.lv(s,"ss://")){q=J.nT(s,A.I("[?#]",!0),5)
c9=q<0
p=c9?J.bB(s,5):J.nY(s,5,q)
if(!B.a.p(p,"@")){o=A.mF(p)
n=B.a.bb(o,"@")
if(n<0)throw A.a(B.cf)
d0=t.B.i("aI.S").a(B.aR.aF(B.a.v(o,0,n)))
m=B.a3.gbQ().aF(d0)
d0=B.a.D(o,n)
c9=c9?"":J.bB(s,q)
s="ss://"+m+d0+c9}}l=J.nS(s,"://")
if(l<0)throw A.a(B.J)
k=B.b.gU(B.a.bg(J.bB(s,l+3),A.I("[/?#]",!0)))
j=B.a.D(k,B.a.bb(k,"@")+1)
i=B.a.u(j,"[")?B.a.aq(j,"]")+1:B.a.bb(j,":")
if(i>=0&&i<j.length&&j[i]===":"){h=B.a.D(j,i+1)
g=A.aU(h,c2)
c9=A.I("^\\d+$",!0)
if(!c9.b.test(h)||g==null||g<1||g>65535)throw A.a(B.ag)}else g=c2
r=null
try{r=A.ew(s,0,c2)
c9=r.gaA()
A.ak(c9,0,c9.length,B.e,!1)
c9=r.gb1()
A.ak(c9,0,c9.length,B.e,!1)}catch(f){throw A.a(B.J)}if(!B.b.p(B.cs,r.gak()))throw A.a(B.bV)
if(r.gaH().length!==0)c9=r.gar().length!==0&&r.gar()!=="/"
else c9=!0
if(c9)throw A.a(B.aV)
e=r.gak()
A:{if("hy2"===e){c9="hysteria2"
break A}if("socks"===e){c9="socks5"
break A}if("https"===e){c9="http"
break A}c9=e
break A}d0=c9==="ss"
if(d0&&g==null)throw A.a(B.bd)
if(g==null)if(c9==="socks5")d=1080
else{c=e==="http"?80:443
d=c}else d=g
if(d<1||d>65535)throw A.a(B.ag)
c=t.N
b=new A.hv(A.fI(r.ge2(),c,c))
if(r.ge3().gag().R(0,new A.i_()))throw A.a(B.bi)
if(r.gb1().length===0)a=e.toUpperCase()+" "+r.gaH()+":"+d
else{a=r.gb1()
a=A.ak(a,0,a.length,B.e,!1)}a0=A.a4(["name",a,"type",c9,"server",r.gaH(),"port",d],c,t.z)
c=r.gaA()
a1=A.ak(c,0,c.length,B.e,!1)
if(c9==="http"||c9==="socks5"){a2=B.a.aq(r.gaA(),":")
if(a1.length!==0){d0=a2<0?r.gaA():B.a.v(r.gaA(),0,a2)
a0.j(0,"username",A.ak(d0,0,d0.length,B.e,!1))
if(a2>=0){d0=B.a.D(r.gaA(),a2+1)
a0.j(0,c3,A.ak(d0,0,d0.length,B.e,!1))}}if(e==="https")a0.j(0,c4,!0)
if(c9==="socks5")a0.j(0,c5,!0)
if(r.gbt())throw A.a(B.c3)}else if(d0){m=B.a.p(r.gaA(),":")?a1:A.mF(a1)
a3=B.a.aq(m,":")
if(a3<=0)throw A.a(B.bY)
a4=B.a.v(m,0,a3)
if(!B.cA.p(0,a4))throw A.a(B.cd)
a0.j(0,"cipher",a4)
c9=B.a.D(m,a3+1)
if(c9.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c3,c9)
a0.j(0,c5,!0)
A.pZ(a0,b.a3(0,A.c(["plugin"],t.s)))}else{d0=c9==="vless"
if(d0||c9==="trojan"){a0.j(0,c5,!0)
c=d0?"uuid":c3
if(d0){a=A.I(c6,!0)
if(!a.b.test(a1))A.D(B.ah)}else if(a1.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c,a1)
c=t.s
a=A.c(["security"],c)
a5=b.aN(0,a,d0?"none":c4)
if(B.b.p(A.c(["none","tls","reality"],c),a5))c9=c9==="trojan"&&a5==="none"
else c9=!0
if(c9)throw A.a(B.bX)
if(d0){a6=b.aN(0,A.c(["encryption"],c),"none")
if(a6!=="none"&&a6.length!==0)throw A.a(B.bj)
a0.j(0,c4,a5!=="none")}c9=a5!=="none"
if(c9)A.mT(a0,b,d0?"servername":"sni",!0)
if(a5==="reality")A.pS(a0,b)
A.q2(a0,b)
if(d0){a7=b.a3(0,A.c(["flow"],c))
if(a7.length!==0){if(a7!=="xtls-rprx-vision"||!c9||!J.u(a0.h(0,"network"),"tcp"))throw A.a(B.aX)
a0.j(0,"flow",a7)}a8=b.a3(0,A.c(["packetEncoding","packet-encoding"],c))
if(a8.length!==0){if(!B.b.p(A.c(["xudp","packetaddr"],c),a8))throw A.a(B.bB)
a0.j(0,"packet-encoding",a8)}}}else{a0.j(0,c5,!0)
d0=c9==="anytls"
if(d0){c=t.s
if(b.aN(0,A.c(["security"],c),c4)!=="tls"||b.aN(0,A.c(["type","network"],c),"tcp")!=="tcp")throw A.a(B.cc)}A.mT(a0,b,"sni",d0)
if(c9==="tuic"){a3=B.a.aq(r.gaA(),":")
if(a3<0)throw A.a(B.bK)
c9=B.a.v(r.gaA(),0,a3)
c9=A.ak(c9,0,c9.length,B.e,!1)
d0=A.I(c6,!0)
if(!d0.b.test(c9))A.D(B.ah)
a0.j(0,"uuid",c9)
c9=B.a.D(r.gaA(),a3+1)
c9=A.ak(c9,0,c9.length,B.e,!1)
if(c9.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c3,c9)
c9=t.s
a9=b.a3(0,A.c(["congestion_control",c7],c9))
if(a9.length!==0){if(!B.b.p(A.c(["bbr","cubic","new_reno"],c9),a9))throw A.a(B.bu)
a0.j(0,c7,a9)}b0=b.a3(0,A.c(["udp_relay_mode","udp-relay-mode"],c9))
if(b0.length!==0){if(!B.b.p(A.c(["native","quic"],c9),b0))throw A.a(B.bD)
a0.j(0,"udp-relay-mode",b0)}for(c9=[A.c(["disable_sni","disable-sni"],c9),A.c(["reduce_rtt","reduce-rtt"],c9)],b1=0;b1<2;++b1){b2=c9[b1]
s=b.dO(b2)
if(s!=null)a0.j(0,B.b.gK(b2),s)}}else{if(a1.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c3,a1)
if(c9==="hysteria2"){for(c9=["up","down"],d0=t.s,b1=0;b1<2;++b1){b3=c9[b1]
s=b.a3(0,A.c([b3],d0))
if(s.length!==0){c=A.I("^\\d+(\\.\\d+)?(\\s*[KMG]?bps)?$",!1)
if(!c.b.test(s))throw A.a(B.bh)
a0.j(0,b3,s)}}b4=b.a3(0,A.c(["mport","ports"],d0))
if(b4.length!==0){for(c9=b4.split(","),c=c9.length,a=t.bR,b5=t.bz,b6=b5.i("y.E"),b1=0;b1<c;++b1){b7=A.o(new A.H(A.c(c9[b1].split("-"),d0),a.a(A.qr()),b5),b6)
b8=b7.length
b9=!0
if(b8!==0)if(b8<=2)if(!B.b.R(b7,new A.i0()))if(b7.length===2){b8=B.b.gU(b7)
b8.toString
b9=B.b.gK(b7)
b9.toString
b9=b8>b9
b8=b9}else b8=!1
else b8=b9
else b8=b9
else b8=b9
if(b8)throw A.a(B.aY)}a0.j(0,"ports",b4)}c0=b.a3(0,A.c(["obfs"],d0))
c1=b.a3(0,A.c(["obfs-password","obfsPassword"],d0))
if(c0.length!==0){if(c0!=="salamander")throw A.a(B.bP)
a0.j(0,"obfs",c0)
if(c1.length===0)A.D(A.B("\u8282\u70b9\u7f3a\u5c11\u6df7\u6dc6\u5bc6\u7801",c2,c2))
a0.j(0,"obfs-password",c1)}else if(c1.length!==0)throw A.a(B.bl)}}}}b.fV()
return a0},
hv:function hv(a){this.a=a},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i5:function i5(){},
i_:function i_(){},
i0:function i0(){},
i1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.z,t.X)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,q.a,A.i1(q.b))}return s}if(t.j.b(a)){s=J.aR(a,A.rC(),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
mR(a,b){var s,r,q,p
if(b==null){s=J.ku(a,t.N)
for(r=a===1,q=0;q<a;++q)s[q]=r?"":""+(q+1)+"-"
p=s}else p=b
if(p.length!==a||A.au(p,A.t(p).c).a!==a||B.b.R(p,new A.i4()))throw A.a(B.ca)
return p},
rB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy",d=A.mR(b,c)
if(b<1)return A.c([],t.s)
s=t.f
r=s.a(A.E(a))
q=A.jx(a)
p=A.au(q,A.t(q).c)
o=J.ku(b,t.D)
for(q=t.Z,n=0;n<b;++n)o[n]=A.c([],q)
q=t.g.a(r.h(0,"proxies"))
q=J.F(q==null?[]:q)
m=t.N
l=t.z
while(q.l()){k=A.aj(s.a(A.i1(q.gm())),m,l)
j=A.e(k.h(0,"name"))
if(p.p(0,j))continue
i=B.b.b3(d,new A.jZ(j))
if(i<0)i=B.b.aq(d,"")
if(i<0)throw A.a(B.bx)
if(!(i<d.length))return A.b(d,i)
h=d[i]
g=h.length
k.j(0,"name",B.a.D(j,g))
f=k.h(0,e)
if(g!==0&&typeof f=="string"&&B.a.u(f,h))k.j(0,e,B.a.D(f,g))
if(!(i<o.length))return A.b(o,i)
B.b.t(o[i],k)}s=A.t(o)
q=s.i("H<1,d>")
s=A.o(new A.H(o,s.i("d(1)").a(new A.k_()),q),q.i("y.E"))
return s},
r6(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="name",a="dialer-proxy",a0=A.mR(a2.length,a3),a1=a2.length
if(a1===0){if(a3!=null)return"proxies: []\n"
throw A.a(B.c2)}if(a1===1&&B.b.gcN(a0).length===0)return B.b.gcN(a2)
s=A.c([],t.gT)
for(a1=t.dY,r=t.gh,q=t.f,p=t.N,o=t.z,n=t.Z,m=t.j,l=0;l<a2.length;++l){k=A.f_(a2[l],c,!1,c).a.ga7()
j=q.b(k)?k.h(0,"proxies"):c
if(!m.b(j)||J.cE(j))throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u6ca1\u6709\u53ef\u5185\u7f6e\u7684 proxies \u8282\u70b9",c,c))
i=A.c([],n)
for(h=J.F(j);h.l();){g=h.gm()
if(!q.b(g)||typeof g.h(0,b)!="string"||B.a.N(A.e(g.h(0,b))).length===0||typeof g.h(0,"type")!="string")throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u8282\u70b9\u7f3a\u5c11\u540d\u79f0\u6216\u7c7b\u578b",c,c))
B.b.t(i,A.aj(q.a(A.i1(g)),p,o))}if(new A.H(i,a1.a(new A.jd()),r).aE(0).a!==i.length)throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u8282\u70b9\u540d\u79f0\u91cd\u590d",c,c))
B.b.t(s,i)}f=A.c([],n)
for(l=0;l<s.length;++l){a1=A.n(p,p)
for(r=s[l],q=r.length,e=0;e<r.length;r.length===q||(0,A.a7)(r),++e){g=r[e]
o=A.e(g.h(0,b))
if(!(l<a0.length))return A.b(a0,l)
a1.j(0,o,a0[l]+A.m(g.h(0,b)))}if(!(l<s.length))return A.b(s,l)
r=s[l]
q=r.length
e=0
for(;e<r.length;r.length===q||(0,A.a7)(r),++e){g=r[e]
g.j(0,b,a1.h(0,g.h(0,b)))
d=g.h(0,a)
if(a1.F(d))g.j(0,a,a1.h(0,d))}if(!(l<s.length))return A.b(s,l)
B.b.a9(f,s[l])}a1=A.T("")
a1.G([],A.a4(["proxies",f],p,t.D))
return a1.b},
qd(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="proxies",a6="name",a7=A.E(b2),a8=t.S,a9=a8.b(a7)?a7.h(0,a5):null,b0=t.h
if(b0.b(a9))s=a9.gk(a9)===0&&!b3
else s=!0
if(s)throw A.a(B.bs)
r=A.r5(a9,b4)
s=t.s
q=A.c([],s)
for(p=J.F(r);p.l();){o=p.gm()
if(!a8.b(o)||typeof o.h(0,a6)!="string"||B.a.N(A.e(o.h(0,a6))).length===0||typeof o.h(0,"type")!="string")throw A.a(B.cg)
B.b.t(q,A.e(o.h(0,a6)))}p=t.N
if(A.au(q,p).a!==q.length)throw A.a(B.b9)
n=b4==null
if(!n){m=a8.a(A.E(b4))
l=A.aS(p)
k=t.g
j=k.a(m.h(0,a5))
j=J.F(j==null?[]:j)
while(j.l())l.t(0,A.e(J.l(j.gm(),a6)))
l.ha(q)
i=t.Y.a(m.h(0,"sub-rules"))
if(i==null){j=t.z
i=A.n(j,j)}k=k.a(m.h(0,"rules"))
k=A.o(A.N(k==null?[]:k,!0,p),p)
for(j=i.gag(),j=j.gq(j),h=t.j;j.l();)B.b.a9(k,A.N(h.a(j.gm()),!0,p))
j=k.length
g=0
for(;g<k.length;k.length===j||(0,A.a7)(k),++g){f=A.rs(k[g])
if(l.p(0,f))throw A.a(A.B("\u8282\u70b9 "+A.m(f)+" \u5df2\u4ece\u8ba2\u9605\u79fb\u9664\uff0c\u4f46\u4ecd\u88ab\u89c4\u5219\u5f15\u7528\uff0c\u8bf7\u5148\u4fee\u6539\u89c4\u5219\uff1b\u539f\u914d\u7f6e\u5df2\u4fdd\u7559",null,null))}}e=n?b1:b4
d=a8.a(A.E(e))
c=b0.a(d.h(0,"proxy-groups"))
b0=A.lO(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],p)
for(p=A.j(c),l=new A.a2(c,c.gk(c),p.i("a2<r.E>")),p=p.i("r.E");l.l();){b=l.d
b0.t(0,A.e(J.l(b==null?p.a(b):b,a6)))}if(B.b.R(q,b0.ga5(b0)))throw A.a(B.b4)
a=A.T(e)
if(d.gE().p(0,"proxy-providers"))a.I(0,["proxy-providers"])
a.G(["proxies"],r)
for(p=t.g,a0=0;a0<c.gk(c);++a0){b=a8.a(c.h(0,a0))
if(b.gE().p(0,"use"))a.I(0,["proxy-groups",a0,"use"])
l=p.a(b.h(0,a5))
if(l==null)l=[]
l=J.am(l,new A.ix(q,b0))
a1=A.o(l,l.$ti.i("f.E"))
l=a1.length===0?A.c(["DIRECT"],s):a1
a.G(["proxy-groups",a0,"proxies"],l)}a2=A.qc(a.b,A.rj(e))
a3=A.rk(n?b1:b4)
a4=a3.length===0?a2:A.qC(a2,a3)
a8=A.rO(a4,A.jx(n?"":b4))
return A.rr(A.kX(a8,n?"":b4),b4)},
i4:function i4(){},
jZ:function jZ(a){this.a=a},
k_:function k_(){},
jd:function jd(){},
ix:function ix(a,b){this.a=a
this.b=b},
pA(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b3(r,new A.hZ(b))
if(s>=0)return s}throw A.a(A.B("\u914d\u7f6e\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230 "+b+" \u4ee3\u7406\u7ec4",null,null))},
f5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a3(d)
r=s.ac(d,new A.jH(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jI()),o)
if(!n.gJ(0)){s=t.N
m=A.aj(t.f.a(B.c.aa(B.a.D(n.gU(0),16),null)),s,s)
m.au(0,new A.jJ(r))
for(s=B.q.gO(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jK(l)),o)
j=l.a
if(m.F(j)&&!k.gJ(0)){i=k.gq(0)
if(!i.l())A.D(A.Z())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jL(f)),o)
if(!e.gJ(0)){i=e.gq(0)
if(!i.l())A.D(A.Z())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
ln(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ki()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: "+B.c.ad(b,null)+"\n"+s},
jq(a){var s,r,q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.ju(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jv()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.aj(t.f.a(B.c.aa(B.a.D(r.gU(0),21),null)),t.N,t.y)
q.au(0,new A.jw(s))
return q},
nt(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ke()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4 DIRECT: "+B.c.ad(b,null)+"\n"+s},
n_(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.E(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.iw()),r),r.i("y.E"))
p=A.T(a1)
o=A.jq(a1)
for(s=new A.ah(a2,a2.r,a2.e,A.j(a2).i("ah<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
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
if(e==null?l==="\ud83d\ude80 \u56fd\u5185":e)i.push("DIRECT")
B.b.a9(i,new A.q(q,n.a(f.gdQ()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gE().p(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0&&o.h(0,l)===!1)throw A.a(A.B(l+" \u672a\u5339\u914d\u5230\u8282\u70b9\uff0c\u8bf7\u8c03\u6574\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u9009\u62e9 DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.G(["proxy-groups",k,"proxies"],l)}return A.ln(p.b,a2)},
hZ:function hZ(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
ki:function ki(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(a){this.a=a},
ke:function ke(){},
iw:function iw(){},
pz(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b3(r,new A.hY(b))
if(s>=0)return s}throw A.a(A.B("\u914d\u7f6e\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230 "+b+" \u4ee3\u7406\u7ec4",null,null))},
rj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a3(d)
r=s.ac(d,new A.jC(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jD()),o)
if(!n.gJ(0)){s=t.N
m=A.aj(t.f.a(B.c.aa(B.a.D(n.gU(0),16),null)),s,s)
m.au(0,new A.jE(r))
for(s=B.q.gO(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jF(l)),o)
j=l.a
if(m.F(j)&&!k.gJ(0)){i=k.gq(0)
if(!i.l())A.D(A.Z())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jG(f)),o)
if(!e.gJ(0)){i=e.gq(0)
if(!i.l())A.D(A.Z())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
rP(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kh()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: "+B.c.ad(b,null)+"\n"+s},
rf(a){var s,r,q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.jr(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.js()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.aj(t.f.a(B.c.aa(B.a.D(r.gU(0),21),null)),t.N,t.y)
q.au(0,new A.jt(s))
return q},
qc(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.E(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.iv()),r),r.i("y.E"))
p=A.T(a1)
o=A.rf(a1)
for(s=new A.ah(a2,a2.r,a2.e,A.j(a2).i("ah<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
k=A.pz(a,l)
j=b.a(J.l(a.h(0,"proxy-groups"),k))
i=a2.h(0,l)
i.toString
h=B.a.u(i,"(?i)")
if(h)g=B.a.D(i,4)
else g=i
f=A.I(g,!h)
i=A.c([],m)
e=o.h(0,l)
if(e==null?l==="\ud83d\ude80 \u56fd\u5185":e)i.push("DIRECT")
B.b.a9(i,new A.q(q,n.a(f.gdQ()),r))
for(e=["filter","use","include-all-proxies","include-all","include-all-providers","empty-fallback"],d=0;d<6;++d){c=e[d]
if(j.gE().p(0,c))p.I(0,["proxy-groups",k,c])}if(i.length===0&&o.h(0,l)===!1)throw A.a(A.B(l+" \u672a\u5339\u914d\u5230\u8282\u70b9\uff0c\u8bf7\u8c03\u6574\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u9009\u62e9 DIRECT",null,null))
l=i.length===0?A.c(["DIRECT"],m):i
p.G(["proxy-groups",k,"proxies"],l)}return A.rP(p.b,a2)},
hY:function hY(a){this.a=a},
jC:function jC(){},
jD:function jD(){},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
kh:function kh(){},
jr:function jr(){},
js:function js(){},
jt:function jt(a){this.a=a},
iv:function iv(){},
nl(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ae)
s=t.S
r=s.a(A.E(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.T(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.S(k,d)&&!j.S(k,"ws"))continue
i=j.S(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.aj(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.aj(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iP())
f.j(0,"Host",j.S(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iQ()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iP:function iP(){},
iQ:function iQ(){},
rk(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ae)
s=t.S
r=s.a(A.E(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.T(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.S(k,d)&&!j.S(k,"ws"))continue
i=j.S(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.aj(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.aj(h==null?A.n(p,p):h,p,p)
f.au(0,new A.iN())
f.j(0,"Host",j.S(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.G(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iO()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iN:function iN(){},
iO:function iO(){},
rc(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
po(a,b,c,d,e){t._.a(a)
A.U(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
nh(a,b,c){A.qe(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
qL(a,b,c,d){var s,r,q,p,o,n=A.n(d,c.i("p<0>"))
for(s=c.i("J<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.c([],s)
n.j(0,p,o)
p=o}else p=o
J.kp(p,q)}return n},
od(a,b,c){var s,r,q,p,o=A.t(a),n=new J.b6(a,a.length,o.i("b6<1>"))
if(!n.l())throw A.a(A.bi("no elements"))
s=n.d
if(s==null)s=o.c.a(s)
for(o=o.c,r=1;n.l();r=q){q=r+1
p=n.d
s=b.$3(r,s,p==null?o.a(p):p)}return s},
n3(){var s,r,q,p,o=null
try{o=A.kJ()}catch(s){if(t.g8.b(A.c3(s))){r=$.hX
if(r!=null)return r
throw s}else throw s}if(J.u(o,$.mE)){r=$.hX
r.toString
return r}$.mE=o
if($.lp()===$.dN())r=$.hX=o.e8(".").n(0)
else{q=o.cM()
p=q.length-1
r=$.hX=p===0?q:B.a.v(q,0,p)}return r},
nf(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
n6(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.b(a,b)
if(!A.nf(a.charCodeAt(b)))return q
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
qW(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gU(0)
for(r=A.aW(a,1,null,a.$ti.i("y.E")),q=r.$ti,r=new A.a2(r,r.gk(0),q.i("a2<y.E>")),q=q.i("y.E");r.l();){p=r.d
if(!J.u(p==null?q.a(p):p,s))return!1}return!0},
rq(a,b,c){var s=B.b.aq(a,null)
if(s<0)throw A.a(A.a1(A.m(a)+" contains no null elements."))
B.b.j(a,s,b)},
nn(a,b,c){var s=B.b.aq(a,b)
if(s<0)throw A.a(A.a1(A.m(a)+" contains no elements matching "+b.n(0)+"."))
B.b.j(a,s,null)},
qs(a,b){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
iS(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.af(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.aq(a,b)
while(r!==-1){q=r===0?0:B.a.ae(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.af(a,b,r+1)}return null},
rM(a,b,c,d){var s=c!=null
if(s)if(c<0)throw A.a(A.a5("position must be greater than or equal to 0."))
else if(c>a.length)throw A.a(A.a5("position must be less than or equal to the string length."))
if(s&&d!=null&&c+d>a.length)throw A.a(A.a5("position plus length must not go beyond the end of the string."))},
E(a){return A.f_(a,null,!1,null).a.ga7()},
f_(a,b,c,d){var s,r=null,q=A.c([],t.aq),p=t.N,o=A.aT(A.om(r),r,!1,t.fs),n=A.c([B.cz],t.a2),m=A.c([null],t.g0),l=A.ot(a,d),k=new A.fO(new A.fT(!1,b,new A.dW(l,r,a),new A.d5(o,0,0,t.co),n,m),q,B.aC,A.n(p,t.h7)),j=new A.fJ(k,A.n(p,t.T),A.aS(p),k.aQ().gA()),i=j.dX()
if(i==null){q=j.d
return new A.eA(new A.an(r,B.j,q),q)}s=j.dX()
if(s!=null)throw A.a(A.G("Only expected one document.",s.b))
return i},
rt(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
rs(a){var s,r=A.c(a.split(","),t.s)
if(B.a.N(B.b.gU(r))==="SUB-RULE"||r.length<2)return null
s=A.rt(r)
if(!(s>=0&&s<r.length))return A.b(r,s)
return B.a.N(r[s])}},B={}
var w=[A,J,B]
var $={}
A.kx.prototype={}
J.e1.prototype={
S(a,b){return a===b},
gY(a){return A.eh(a)},
n(a){return"Instance of '"+A.ei(a)+"'"},
gaM(a){return A.b4(A.kT(this))}}
J.e3.prototype={
n(a){return String(a)},
gY(a){return a?519018:218159},
gaM(a){return A.b4(t.y)},
$iar:1,
$ik:1}
J.cS.prototype={
S(a,b){return null==b},
n(a){return"null"},
gY(a){return 0},
$iar:1,
$ibd:1}
J.cV.prototype={$iaM:1}
J.bs.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.ef.prototype={}
J.cm.prototype={}
J.br.prototype={
n(a){var s=a[$.nv()]
if(s==null)s=a[$.lo()]
if(s==null)return this.ej(a)
return"JavaScript function for "+J.al(s)},
$ib7:1}
J.cU.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.cW.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.J.prototype={
t(a,b){A.t(a).c.a(b)
a.$flags&1&&A.V(a,29)
a.push(b)},
bc(a,b){A.U(b)
a.$flags&1&&A.V(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.fS(b,null))
return a.splice(b,1)[0]},
b8(a,b,c){var s
A.t(a).c.a(c)
a.$flags&1&&A.V(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.fS(b,null))
a.splice(b,0,c)},
cE(a,b,c){var s,r,q
A.t(a).i("f<1>").a(c)
a.$flags&1&&A.V(a,"insertAll",2)
s=a.length
A.ci(b,0,s,"index")
r=c.length
a.length=s+r
q=b+r
this.al(a,q,a.length,a,b)
this.bf(a,b,q,c)},
e4(a){a.$flags&1&&A.V(a,"removeLast",1)
if(a.length===0)throw A.a(A.dJ(a,-1))
return a.pop()},
au(a,b){A.t(a).i("k(1)").a(b)
a.$flags&1&&A.V(a,16)
this.du(a,b,!0)},
du(a,b,c){var s,r,q,p,o
A.t(a).i("k(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.a(A.Q(a))}o=s.length
if(o===r)return
this.sk(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
aJ(a,b){var s=A.t(a)
return new A.q(a,s.i("k(1)").a(b),s.i("q<1>"))},
a9(a,b){var s
A.t(a).i("f<1>").a(b)
a.$flags&1&&A.V(a,"addAll",2)
if(Array.isArray(b)){this.eu(a,b)
return}for(s=J.F(b);s.l();)a.push(s.gm())},
eu(a,b){var s,r
t.v.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.Q(a))
for(r=0;r<s;++r)a.push(b[r])},
br(a){a.$flags&1&&A.V(a,"clear","clear")
a.length=0},
an(a,b){var s,r
A.t(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.Q(a))}},
ac(a,b,c){var s=A.t(a)
return new A.H(a,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("H<1,2>"))},
V(a,b){var s,r=A.aT(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.m(a[s]))
return r.join(b)},
dW(a){return this.V(a,"")},
a3(a,b){return A.aW(a,0,A.eX(b,"count",t.p),A.t(a).c)},
ao(a,b){return A.aW(a,b,null,A.t(a).c)},
bT(a,b,c,d){var s,r,q
d.a(b)
A.t(a).a8(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.Q(a))}return r},
T(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
gU(a){if(a.length>0)return a[0]
throw A.a(A.Z())},
gK(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.Z())},
gcN(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.a(A.Z())
throw A.a(A.oc())},
al(a,b,c,d,e){var s,r,q,p
A.t(a).i("f<1>").a(d)
a.$flags&2&&A.V(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.ad(e,"skipCount")
r=d
q=J.C(r)
if(e+s>q.gk(r))throw A.a(A.lI())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,e+p)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
bs(a,b,c,d){var s
a.$flags&2&&A.V(a,"fillRange")
A.be(b,c,a.length)
A.t(a).c.a(d)
for(s=b;s<c;++s)a[s]=d},
R(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.Q(a))}return!1},
aO(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.Q(a))}return!0},
bY(a,b){var s,r,q,p,o,n=A.t(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.V(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aK()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.qj(b,2))
if(p>0)this.fk(a,p)},
fk(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
aq(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.u(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
gJ(a){return a.length===0},
gb4(a){return a.length!==0},
n(a){return A.fy(a,"[","]")},
aS(a,b){var s=A.c(a.slice(0),A.t(a))
return s},
aR(a){return this.aS(a,!0)},
gq(a){return new J.b6(a,a.length,A.t(a).i("b6<1>"))},
gY(a){return A.eh(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.V(a,"set length","change the length of")
if(b>a.length)A.t(a).c.a(null)
a.length=b},
h(a,b){A.U(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
j(a,b,c){A.t(a).c.a(c)
a.$flags&2&&A.V(a)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
a[b]=c},
b3(a,b){var s
A.t(a).i("k(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
h1(a,b){var s,r
A.t(a).i("k(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.b(a,r)
if(b.$1(a[r]))return r}return-1},
$ix:1,
$if:1,
$ip:1}
J.e2.prototype={
hf(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ei(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.fz.prototype={}
J.b6.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a7(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iK:1}
J.cT.prototype={
aC(a,b){var s
A.mB(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcG(b)
if(this.gcG(a)===s)return 0
if(this.gcG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcG(a){return a===0?1/a<0:a<0},
hd(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.a8(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.b(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.D(A.M("Unexpected toString result: "+s))
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
bp(a,b){return(a|0)===a?a/b|0:this.fC(a,b)},
fC(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.M("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
b0(a,b){var s
if(a>0)s=this.dC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fw(a,b){if(0>b)throw A.a(A.dI(b))
return this.dC(a,b)},
dC(a,b){return b>31?0:a>>>b},
gaM(a){return A.b4(t.H)},
$ibA:1}
J.cR.prototype={
gaM(a){return A.b4(t.p)},
$iar:1,
$ih:1}
J.e4.prototype={
gaM(a){return A.b4(t.i)},
$iar:1}
J.bq.prototype={
cr(a,b,c){var s=b.length
if(c>s)throw A.a(A.a8(c,0,s,null,null))
return new A.eN(b,a,c)},
bq(a,b){return this.cr(a,b,0)},
bu(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.a(A.a8(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.b(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.cl(c,a)},
aG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.D(a,r-s)},
e7(a,b,c){A.ci(0,0,a.length,"startIndex")
return A.rz(a,b,c,0)},
bg(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.b9){s=b.e
s=!(s==null?b.e=b.ez():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.eE(a,b)}},
aX(a,b,c,d){var s=A.be(b,c,a.length)
return A.np(a,b,s,d)},
eE(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.kq(b,a),s=s.gq(s),r=0,q=1;s.l();){p=s.gm()
o=p.gC()
n=p.gH()
q=n-o
if(q===0&&r===o)continue
B.b.t(m,this.v(a,r,o))
r=n}if(r<a.length||q>0)B.b.t(m,this.D(a,r))
return m},
a4(a,b,c){var s
t.eh.a(b)
if(c<0||c>a.length)throw A.a(A.a8(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.nU(b,a,c)!=null},
u(a,b){return this.a4(a,b,0)},
v(a,b,c){return a.substring(b,A.be(b,c,a.length))},
D(a,b){return this.v(a,b,null)},
N(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.og(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.lL(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
he(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.b(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.lL(r,s))},
aj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.aP)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
h3(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aj(" ",s)},
af(a,b,c){var s,r,q,p
if(c<0||c>a.length)throw A.a(A.a8(c,0,a.length,null,null))
if(typeof b=="string")return a.indexOf(b,c)
if(b instanceof A.b9){s=b.cX(a,c)
return s==null?-1:s.b.index}for(r=a.length,q=J.c_(b),p=c;p<=r;++p)if(q.bu(b,a,p)!=null)return p
return-1},
aq(a,b){return this.af(a,b,0)},
ae(a,b,c){var s,r,q
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.a8(c,0,a.length,null,null))
if(typeof b=="string"){s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)}for(s=J.c_(b),q=c;q>=0;--q)if(s.bu(b,a,q)!=null)return q
return-1},
bb(a,b){return this.ae(a,b,null)},
p(a,b){return A.rv(a,b,0)},
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
h(a,b){A.U(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
$iar:1,
$icg:1,
$id:1}
A.cZ.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.aH.prototype={
gk(a){return this.a.length},
h(a,b){var s
A.U(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.fW.prototype={}
A.x.prototype={}
A.y.prototype={
gq(a){var s=this
return new A.a2(s,s.gk(s),A.j(s).i("a2<y.E>"))},
gJ(a){return this.gk(this)===0},
gU(a){if(this.gk(this)===0)throw A.a(A.Z())
return this.T(0,0)},
gK(a){var s=this
if(s.gk(s)===0)throw A.a(A.Z())
return s.T(0,s.gk(s)-1)},
p(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(J.u(r.T(0,s),b))return!0
if(q!==r.gk(r))throw A.a(A.Q(r))}return!1},
aO(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(!b.$1(q.T(0,r)))return!1
if(s!==q.gk(q))throw A.a(A.Q(q))}return!0},
R(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gk(q))throw A.a(A.Q(q))}return!1},
bS(a,b){var s,r,q,p=this
A.j(p).i("k(y.E)").a(b)
s=p.gk(p)
for(r=0;r<s;++r){q=p.T(0,r)
if(b.$1(q))return q
if(s!==p.gk(p))throw A.a(A.Q(p))}throw A.a(A.Z())},
V(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.T(0,0))
if(o!==p.gk(p))throw A.a(A.Q(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}},
aJ(a,b){return this.bh(0,A.j(this).i("k(y.E)").a(b))},
ac(a,b,c){var s=A.j(this)
return new A.H(this,s.a8(c).i("1(y.E)").a(b),s.i("@<y.E>").a8(c).i("H<1,2>"))},
h8(a,b){var s,r,q,p=this
A.j(p).i("y.E(y.E,y.E)").a(b)
s=p.gk(p)
if(s===0)throw A.a(A.Z())
r=p.T(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.T(0,q))
if(s!==p.gk(p))throw A.a(A.Q(p))}return r},
ao(a,b){return A.aW(this,b,null,A.j(this).i("y.E"))},
aS(a,b){var s=A.o(this,A.j(this).i("y.E"))
return s},
aR(a){return this.aS(0,!0)},
aE(a){var s,r=this,q=A.kA(A.j(r).i("y.E"))
for(s=0;s<r.gk(r);++s)q.t(0,r.T(0,s))
return q}}
A.bL.prototype={
er(a,b,c,d){var s,r=this.b
A.ad(r,"start")
s=this.c
if(s!=null){A.ad(s,"end")
if(r>s)throw A.a(A.a8(r,0,s,"start",null))}},
geF(){var s=J.a6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfA(){var s=J.a6(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gfA()+b
if(b<0||r>=s.geF())throw A.a(A.e_(b,s.gk(0),s,null,"index"))
return J.kr(s.a,r)},
ao(a,b){var s,r,q=this
A.ad(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bD(q.$ti.i("bD<1>"))
return A.aW(q.a,s,r,q.$ti.c)},
a3(a,b){var s,r,q,p=this
A.ad(b,"count")
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
return b?J.kv(0,n):J.lJ(0,n)}r=A.aT(s,m.T(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.b.j(r,q,m.T(n,o+q))
if(m.gk(n)<l)throw A.a(A.Q(p))}return r},
aR(a){return this.aS(0,!0)}}
A.a2.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.C(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.Q(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iK:1}
A.bb.prototype={
gq(a){return new A.d0(J.F(this.a),this.b,A.j(this).i("d0<1,2>"))},
gk(a){return J.a6(this.a)},
gJ(a){return J.cE(this.a)},
gU(a){return this.b.$1(J.lu(this.a))},
gK(a){return this.b.$1(J.ks(this.a))},
T(a,b){return this.b.$1(J.kr(this.a,b))}}
A.bC.prototype={$ix:1}
A.d0.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iK:1}
A.H.prototype={
gk(a){return J.a6(this.a)},
T(a,b){return this.b.$1(J.kr(this.a,b))}}
A.q.prototype={
gq(a){return new A.bk(J.F(this.a),this.b,this.$ti.i("bk<1>"))},
ac(a,b,c){var s=this.$ti
return new A.bb(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bb<1,2>"))}}
A.bk.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iK:1}
A.aA.prototype={
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
$iK:1}
A.bg.prototype={
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.bg(this.a,this.b+b,A.j(this).i("bg<1>"))},
gq(a){var s=this.a
return new A.da(s.gq(s),this.b,A.j(this).i("da<1>"))}}
A.c9.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.c9(this.a,this.b+b,this.$ti)},
$ix:1}
A.da.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gm(){return this.a.gm()},
$iK:1}
A.bD.prototype={
gq(a){return B.a4},
gJ(a){return!0},
gk(a){return 0},
gU(a){throw A.a(A.Z())},
gK(a){throw A.a(A.Z())},
T(a,b){throw A.a(A.a8(b,0,0,"index",null))},
p(a,b){return!1},
aO(a,b){this.$ti.i("k(1)").a(b)
return!0},
R(a,b){this.$ti.i("k(1)").a(b)
return!1},
bS(a,b){this.$ti.i("k(1)").a(b)
throw A.a(A.Z())},
V(a,b){return""},
aJ(a,b){this.$ti.i("k(1)").a(b)
return this},
ac(a,b,c){this.$ti.a8(c).i("1(2)").a(b)
return new A.bD(c.i("bD<0>"))},
ao(a,b){A.ad(b,"count")
return this},
aS(a,b){var s=J.kv(0,this.$ti.c)
return s},
aR(a){return this.aS(0,!0)}}
A.cP.prototype={
l(){return!1},
gm(){throw A.a(A.Z())},
$iK:1}
A.dl.prototype={
gq(a){return new A.dm(J.F(this.a),this.$ti.i("dm<1>"))}}
A.dm.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gm()))return!0
return!1},
gm(){return this.$ti.c.a(this.a.gm())},
$iK:1}
A.b8.prototype={
gk(a){var s=this.a
return s.gk(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a
return new A.b2(this.b,s.gU(s))},
T(a,b){return new A.b2(b+this.b,this.a.T(0,b))},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.U(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ee()
n=this.a.ao(0,p-this.b)
q=n.gq(n)
return q.l()&&J.u(q.gm(),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.b8(this.a.ao(0,b),b+this.b,A.j(this).i("b8<1>"))},
gq(a){var s=this.a
return new A.bE(s.gq(s),this.b,A.j(this).i("bE<1>"))}}
A.c8.prototype={
gK(a){var s,r=this.a,q=r.gk(r)
if(q<=0)throw A.a(A.Z())
s=r.gK(r)
if(q!==r.gk(r))throw A.a(A.Q(this))
return new A.b2(q-1+this.b,s)},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.U(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ee()
q=p-this.b
n=this.a
return q<n.gk(n)&&J.u(n.T(0,q),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.c8(this.a.ao(0,b),this.b+b,this.$ti)},
$ix:1}
A.bE.prototype={
l(){if(++this.c>=0&&this.a.l())return!0
this.c=-2
return!1},
gm(){var s=this.c
return s>=0?new A.b2(this.b+s,this.a.gm()):A.D(A.Z())},
$iK:1}
A.aL.prototype={
sk(a,b){throw A.a(A.M("Cannot change the length of a fixed-length list"))},
t(a,b){A.a9(a).i("aL.E").a(b)
throw A.a(A.M("Cannot add to a fixed-length list"))},
au(a,b){A.a9(a).i("k(aL.E)").a(b)
throw A.a(A.M("Cannot remove from a fixed-length list"))}}
A.aw.prototype={
j(a,b,c){A.j(this).i("aw.E").a(c)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.a(A.M("Cannot change the length of an unmodifiable list"))},
t(a,b){A.j(this).i("aw.E").a(b)
throw A.a(A.M("Cannot add to an unmodifiable list"))},
au(a,b){A.j(this).i("k(aw.E)").a(b)
throw A.a(A.M("Cannot remove from an unmodifiable list"))},
bY(a,b){A.j(this).i("h(aw.E,aw.E)?").a(b)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
al(a,b,c,d,e){A.j(this).i("f<aw.E>").a(d)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
bf(a,b,c,d){return this.al(0,b,c,d,0)}}
A.cn.prototype={}
A.eM.prototype={
gk(a){return J.a6(this.a)},
T(a,b){var s=J.a6(this.a)
if(0>b||b>=s)A.D(A.e_(b,s,this,null,"index"))
return b}}
A.d_.prototype={
h(a,b){return this.F(b)?J.l(this.a,A.U(b)):null},
gk(a){return J.a6(this.a)},
gag(){return A.aW(this.a,0,null,this.$ti.c)},
gE(){return new A.eM(this.a)},
gJ(a){return J.cE(this.a)},
aU(a){return J.bo(this.a,a)},
F(a){return A.b3(a)&&a>=0&&a<J.a6(this.a)},
an(a,b){var s,r,q,p
this.$ti.i("~(h,1)").a(b)
s=this.a
r=J.C(s)
q=r.gk(s)
for(p=0;p<q;++p){b.$2(p,r.h(s,p))
if(q!==r.gk(s))throw A.a(A.Q(s))}}}
A.d7.prototype={
gk(a){return J.a6(this.a)},
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
gJ(a){return this.gk(this)===0},
n(a){return A.kC(this)},
j(a,b,c){var s=A.j(this)
s.c.a(b)
s.y[1].a(c)
A.lE()},
I(a,b){A.lE()},
gO(){return new A.bx(this.fT(),A.j(this).i("bx<L<1,2>>"))},
fT(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gE(),o=o.gq(o),n=A.j(s),m=n.y[1],n=n.i("L<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gm()
k=s.h(0,l)
r=4
return a.b=new A.L(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iw:1}
A.aJ.prototype={
gk(a){return this.b.length},
gde(){var s=this.$keys
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
s=this.gde()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gE(){return new A.bQ(this.gde(),this.$ti.i("bQ<1>"))},
gag(){return new A.bQ(this.b,this.$ti.i("bQ<2>"))}}
A.bQ.prototype={
gk(a){return this.a.length},
gJ(a){return 0===this.a.length},
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
$iK:1}
A.cM.prototype={
t(a,b){A.j(this).c.a(b)
A.lF()},
I(a,b){A.lF()}}
A.cN.prototype={
gk(a){return this.b},
gJ(a){return this.b===0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.bR(s,s.length,r.$ti.i("bR<1>"))},
p(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.e0.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.cb&&this.a.S(0,b.a)&&A.l7(this)===A.l7(b)},
gY(a){return A.eb(this.a,A.l7(this),B.n,B.n)},
n(a){var s=B.b.V([A.b4(this.$ti.c)],", ")
return this.a.n(0)+" with "+("<"+s+">")}}
A.cb.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.qV(A.iA(this.a),this.$ti)}}
A.d8.prototype={}
A.h_.prototype={
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
A.e5.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.et.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ea.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iaz:1}
A.aq.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nq(r==null?"unknown":r)+"'"},
$ib7:1,
ghi(){return this},
$C:"$1",
$R:1,
$D:null}
A.dR.prototype={$C:"$0",$R:0}
A.dS.prototype={$C:"$2",$R:2}
A.er.prototype={}
A.ep.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nq(s)+"'"}}
A.c6.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.c6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gY(a){return(A.f0(this.a)^A.eh(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ei(this.a)+"'")}}
A.ej.prototype={
n(a){return"RuntimeError: "+this.a}}
A.aB.prototype={
gk(a){return this.a},
gJ(a){return this.a===0},
gE(){return new A.ai(this,A.j(this).i("ai<1>"))},
gag(){return new A.aD(this,A.j(this).i("aD<2>"))},
gO(){return new A.P(this,A.j(this).i("P<1,2>"))},
F(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.dR(a)},
dR(a){var s=this.d
if(s==null)return!1
return this.ba(s[this.b9(a)],a)>=0},
aU(a){return new A.ai(this,A.j(this).i("ai<1>")).R(0,new A.fB(this,a))},
a9(a,b){A.j(this).i("w<1,2>").a(b).an(0,new A.fA(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.dS(b)},
dS(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b9(a)]
r=this.ba(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.j(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cT(s==null?q.b=q.cd():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cT(r==null?q.c=q.cd():r,b,c)}else q.dU(b,c)},
dU(a,b){var s,r,q,p,o=this,n=A.j(o)
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
h6(a,b){var s,r,q=this,p=A.j(q)
p.c.a(a)
p.i("2()").a(b)
if(q.F(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
I(a,b){var s=this
if(typeof b=="string")return s.cR(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.cR(s.c,b)
else return s.dT(b)},
dT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b9(a)
r=n[s]
q=o.ba(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cS(p)
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
if(r!==q.r)throw A.a(A.Q(q))
s=s.c}},
cT(a,b,c){var s,r=A.j(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ce(b,c)
else s.b=c},
cR(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.cS(s)
delete a[b]
return s.b},
cc(){this.r=this.r+1&1073741823},
ce(a,b){var s=this,r=A.j(s),q=new A.fF(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cc()
return q},
cS(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cc()},
b9(a){return J.ac(a)&1073741823},
ba(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
n(a){return A.kC(this)},
cd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifE:1}
A.fB.prototype={
$1(a){var s=this.a
return J.u(s.h(0,A.j(s).c.a(a)),this.b)},
$S(){return A.j(this.a).i("k(1)")}}
A.fA.prototype={
$2(a,b){var s=this.a,r=A.j(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.j(this.a).i("~(1,2)")}}
A.fF.prototype={}
A.ai.prototype={
gk(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.ah(s,s.r,s.e,this.$ti.i("ah<1>"))},
p(a,b){return this.a.F(b)}}
A.ah.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iK:1}
A.aD.prototype={
gk(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.aC(s,s.r,s.e,this.$ti.i("aC<1>"))}}
A.aC.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iK:1}
A.P.prototype={
gk(a){return this.a.a},
gJ(a){return this.a.a===0},
gq(a){var s=this.a
return new A.ba(s,s.r,s.e,this.$ti.i("ba<1,2>"))}}
A.ba.prototype={
gm(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$iK:1}
A.cX.prototype={
b9(a){return A.f0(a)&1073741823},
ba(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.j0.prototype={
$1(a){return this.a(a)},
$S:1}
A.j1.prototype={
$2(a,b){return this.a(a,b)},
$S:51}
A.j2.prototype={
$1(a){return this.a(A.e(a))},
$S:16}
A.ay.prototype={
n(a){return this.dG(!1)},
dG(a){var s,r,q,p,o,n=this.eL(),m=this.ca(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.lU(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
eL(){var s,r=this.$s
while($.hw.length<=r)B.b.t($.hw,null)
s=$.hw[r]
if(s==null){s=this.ey()
B.b.j($.hw,r,s)}return s},
ey(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ku(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.j(j,q,r[s])}}return A.kB(j,k)}}
A.aX.prototype={
ca(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.aX&&this.$s===b.$s&&J.u(this.a,b.a)&&J.u(this.b,b.b)},
gY(a){return A.eb(this.$s,this.a,this.b,B.n)}}
A.cs.prototype={
ca(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.cs&&s.$s===b.$s&&J.u(s.a,b.a)&&J.u(s.b,b.b)&&J.u(s.c,b.c)},
gY(a){var s=this
return A.eb(s.$s,s.a,s.b,s.c)}}
A.b9.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdg(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.kw(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gf_(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.kw(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
ez(){var s,r=this.a
if(!B.a.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fW(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cr(s)},
fX(a){A.e(a)
return this.b.test(a)},
cr(a,b,c){var s=b.length
if(c>s)throw A.a(A.a8(c,0,s,null,null))
return new A.eE(this,b,c)},
bq(a,b){return this.cr(0,b,0)},
cX(a,b){var s,r=this.gdg()
if(r==null)r=A.hU(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cr(s)},
eG(a,b){var s,r=this.gf_()
if(r==null)r=A.hU(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cr(s)},
bu(a,b,c){if(c<0||c>b.length)throw A.a(A.a8(c,0,b.length,null,null))
return this.eG(b,c)},
$icg:1,
$ioo:1}
A.cr.prototype={
gC(){return this.b.index},
gH(){var s=this.b
return s.index+s[0].length},
h(a,b){var s
A.U(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]},
$ib_:1,
$id6:1}
A.eE.prototype={
gq(a){return new A.dn(this.a,this.b,this.c)}}
A.dn.prototype={
gm(){var s=this.d
return s==null?t.cz.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.cX(l,s)
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
$iK:1}
A.cl.prototype={
gH(){return this.a+this.c.length},
h(a,b){A.U(b)
if(b!==0)throw A.a(A.fS(b,null))
return this.c},
$ib_:1,
gC(){return this.a}}
A.eN.prototype={
gq(a){return new A.eO(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.cl(r,s)
throw A.a(A.Z())}}
A.eO.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cl(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iK:1}
A.hk.prototype={
bI(){var s=this.b
if(s===this)throw A.a(new A.cZ("Local '' has not been initialized."))
return s}}
A.d1.prototype={
eO(a,b,c,d){var s=A.a8(b,0,c,d,null)
throw A.a(s)},
cU(a,b,c,d){if(b>>>0!==b||b>c)this.eO(a,b,c,d)}}
A.b0.prototype={
gk(a){return a.length},
$ice:1}
A.bc.prototype={
j(a,b,c){A.U(c)
a.$flags&2&&A.V(a)
A.hV(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){var s,r,q,p
t.hb.a(d)
a.$flags&2&&A.V(a,5)
if(t.eB.b(d)){s=a.length
this.cU(a,b,s,"start")
this.cU(a,c,s,"end")
if(b>c)A.D(A.a8(b,0,c,null,null))
r=c-b
if(e<0)A.D(A.a1(e))
q=d.length
if(q-e<r)A.D(A.bi("Not enough elements"))
p=e!==0||q!==r?d.subarray(e,e+r):d
a.set(p,b)
return}this.ek(a,b,c,d,e)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
$ix:1,
$if:1,
$ip:1}
A.e9.prototype={
gaM(a){return B.cF},
h(a,b){A.U(b)
A.hV(b,a,a.length)
return a[b]},
$iar:1}
A.d2.prototype={
gaM(a){return B.cH},
h(a,b){A.U(b)
A.hV(b,a,a.length)
return a[b]},
c0(a,b,c){return new Uint32Array(a.subarray(b,A.mD(b,c,a.length)))},
$iar:1,
$ikH:1}
A.bG.prototype={
gaM(a){return B.cI},
gk(a){return a.length},
h(a,b){A.U(b)
A.hV(b,a,a.length)
return a[b]},
$iar:1,
$ibG:1,
$ikI:1}
A.dt.prototype={}
A.du.prototype={}
A.aV.prototype={
i(a){return A.dD(v.typeUniverse,this,a)},
a8(a){return A.mi(v.typeUniverse,this,a)}}
A.eI.prototype={}
A.hx.prototype={
n(a){return A.as(this.a,null)}}
A.eG.prototype={
n(a){return this.a}}
A.cw.prototype={}
A.dz.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
fl(a,b){var s,r,q
a=A.U(a)
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
o.d=null}q=o.fl(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.md
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
o.a=A.md
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
return 2}else{q.d=J.F(a)
return 2}},
$iK:1}
A.bx.prototype={
gq(a){return new A.dz(this.a(),this.$ti.i("dz<1>"))}}
A.dq.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.eg(b)},
j(a,b,c){var s=this.$ti
this.ei(s.c.a(b),s.y[1].a(c))},
F(a){if(!this.y.$1(a))return!1
return this.ef(a)},
I(a,b){if(!this.y.$1(b))return null
return this.eh(b)},
b9(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
ba(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(q.$2(r.a(a[p].a),r.a(b)))return p
return-1}}
A.ht.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.ax.prototype={
dh(){return new A.ax(A.j(this).i("ax<1>"))},
gq(a){var s=this,r=new A.bS(s,s.r,A.j(s).i("bS<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gJ(a){return this.a===0},
p(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.M.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.M.a(r[b])!=null}else return this.eB(b)},
eB(a){var s=this.d
if(s==null)return!1
return this.bE(s[this.bC(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
gK(a){var s=this.f
if(s==null)throw A.a(A.bi("No elements"))
return A.j(this).c.a(s.a)},
t(a,b){var s,r,q=this
A.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cV(s==null?q.b=A.kK():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cV(r==null?q.c=A.kK():r,b)}else return q.es(b)},
es(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kK()
r=p.bC(a)
q=s[r]
if(q==null)s[r]=[p.c4(a)]
else{if(p.bE(q,a)>=0)return!1
q.push(p.c4(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.dt(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.dt(s.c,b)
else return s.fj(b)},
fj(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bC(a)
r=n[s]
q=o.bE(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dJ(p)
return!0},
cV(a,b){A.j(this).c.a(b)
if(t.M.a(a[b])!=null)return!1
a[b]=this.c4(b)
return!0},
dt(a,b){var s
if(a==null)return!1
s=t.M.a(a[b])
if(s==null)return!1
this.dJ(s)
delete a[b]
return!0},
cW(){this.r=this.r+1&1073741823},
c4(a){var s,r=this,q=new A.eL(A.j(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cW()
return q},
dJ(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cW()},
bC(a){return J.ac(a)&1073741823},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
$ikz:1}
A.cq.prototype={
dh(){return new A.cq(this.$ti)},
bC(a){return A.f0(a)&1073741823},
bE(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.eL.prototype={}
A.bS.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.Q(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iK:1}
A.di.prototype={
gk(a){return this.a.length},
h(a,b){var s
A.U(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.fH.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:32}
A.r.prototype={
gq(a){return new A.a2(a,this.gk(a),A.a9(a).i("a2<r.E>"))},
T(a,b){return this.h(a,b)},
an(a,b){var s,r
A.a9(a).i("~(r.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.h(a,r))
if(s!==this.gk(a))throw A.a(A.Q(a))}},
gJ(a){return this.gk(a)===0},
gb4(a){return this.gk(a)!==0},
gU(a){if(this.gk(a)===0)throw A.a(A.Z())
return this.h(a,0)},
gK(a){if(this.gk(a)===0)throw A.a(A.Z())
return this.h(a,this.gk(a)-1)},
p(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.u(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.a(A.Q(a))}return!1},
R(a,b){var s,r
A.a9(a).i("k(r.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gk(a))throw A.a(A.Q(a))}return!1},
aJ(a,b){var s=A.a9(a)
return new A.q(a,s.i("k(r.E)").a(b),s.i("q<r.E>"))},
ac(a,b,c){var s=A.a9(a)
return new A.H(a,s.a8(c).i("1(r.E)").a(b),s.i("@<r.E>").a8(c).i("H<1,2>"))},
ao(a,b){return A.aW(a,b,null,A.a9(a).i("r.E"))},
t(a,b){var s
A.a9(a).i("r.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
au(a,b){this.eN(a,A.a9(a).i("k(r.E)").a(b),!1)},
eN(a,b,c){var s,r,q,p,o=this,n=A.a9(a)
n.i("k(r.E)").a(b)
s=A.c([],n.i("J<r.E>"))
r=o.gk(a)
for(q=0;q<r;++q){p=o.h(a,q)
if(J.u(b.$1(p),!1))B.b.t(s,p)
if(r!==o.gk(a))throw A.a(A.Q(a))}if(s.length!==o.gk(a)){o.bf(a,0,s.length,s)
o.sk(a,s.length)}},
bY(a,b){var s=A.a9(a)
s.i("h(r.E,r.E)?").a(b)
A.ek(a,0,this.gk(a)-1,b,s.i("r.E"))},
bs(a,b,c,d){var s
A.a9(a).i("r.E?").a(d)
A.be(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
al(a,b,c,d,e){var s,r,q
A.a9(a).i("f<r.E>").a(d)
A.be(b,c,this.gk(a))
s=c-b
if(s===0)return
A.ad(e,"skipCount")
r=J.C(d)
if(e+s>r.gk(d))throw A.a(A.lI())
if(e<b)for(q=s-1;q>=0;--q)this.j(a,b+q,r.h(d,e+q))
else for(q=0;q<s;++q)this.j(a,b+q,r.h(d,e+q))},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
b3(a,b){var s
A.a9(a).i("k(r.E)").a(b)
for(s=0;s<this.gk(a);++s)if(b.$1(this.h(a,s)))return s
return-1},
b8(a,b,c){var s,r=this
A.a9(a).i("r.E").a(c)
A.eX(b,"index",t.p)
s=r.gk(a)
A.ci(b,0,s,"index")
r.t(a,c)
if(b!==s){r.al(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n(a){return A.fy(a,"[","]")},
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
e9(a){var s,r,q,p=this,o=A.j(p)
o.i("z.V(z.K,z.V)").a(a)
for(s=p.gE(),s=s.gq(s),o=o.i("z.V");s.l();){r=s.gm()
q=p.h(0,r)
p.j(0,r,a.$2(r,q==null?o.a(q):q))}},
gO(){return this.gE().ac(0,new A.fK(this),A.j(this).i("L<z.K,z.V>"))},
au(a,b){var s,r,q,p,o,n=this,m=A.j(n)
m.i("k(z.K,z.V)").a(b)
s=A.c([],m.i("J<z.K>"))
for(r=n.gE(),r=r.gq(r),m=m.i("z.V");r.l();){q=r.gm()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.b.t(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.a7)(s),++o)n.I(0,s[o])},
F(a){return this.gE().p(0,a)},
gk(a){var s=this.gE()
return s.gk(s)},
gJ(a){var s=this.gE()
return s.gJ(s)},
gag(){return new A.dr(this,A.j(this).i("dr<z.K,z.V>"))},
n(a){return A.kC(this)},
$iw:1}
A.fK.prototype={
$1(a){var s=this.a,r=A.j(s)
r.i("z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("z.V").a(s)
return new A.L(a,s,r.i("L<z.K,z.V>"))},
$S(){return A.j(this.a).i("L<z.K,z.V>(z.K)")}}
A.fL.prototype={
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
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a,r=s.gE()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gK(a){var s=this.a,r=s.gE()
r=s.h(0,r.gK(r))
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
$iK:1}
A.ap.prototype={
j(a,b,c){var s=A.j(this)
s.i("ap.K").a(b)
s.i("ap.V").a(c)
throw A.a(A.M("Cannot modify unmodifiable map"))},
I(a,b){throw A.a(A.M("Cannot modify unmodifiable map"))}}
A.cf.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.j(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
F(a){return this.a.F(a)},
aU(a){return this.a.aU(a)},
an(a,b){this.a.an(0,A.j(this).i("~(1,2)").a(b))},
gJ(a){var s=this.a
return s.gJ(s)},
gk(a){var s=this.a
return s.gk(s)},
gE(){return this.a.gE()},
I(a,b){return this.a.I(0,b)},
n(a){return this.a.n(0)},
gag(){return this.a.gag()},
gO(){return this.a.gO()},
$iw:1}
A.b1.prototype={}
A.bf.prototype={
gJ(a){return this.gk(this)===0},
a9(a,b){var s
for(s=J.F(A.j(this).i("f<1>").a(b));s.l();)this.t(0,s.gm())},
ha(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)this.I(0,a[r])},
fO(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)if(!this.p(0,a[r]))return!1
return!0},
ac(a,b,c){var s=A.j(this)
return new A.bC(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bC<1,2>"))},
n(a){return A.fy(this,"{","}")},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.Z())
return s.gm()},
gK(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.Z())
do s=r.gm()
while(r.l())
return s},
T(a,b){var s,r
A.ad(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.a(A.e_(b,b-r,this,null,"index"))},
$ix:1,
$if:1,
$id9:1}
A.dy.prototype={
dV(a){var s,r,q,p=this,o=p.dh()
for(s=A.hu(p,p.r,A.j(p).c),r=s.$ti.c;s.l();){q=s.d
if(q==null)q=r.a(q)
if(a.p(0,q))o.t(0,q)}return o}}
A.cx.prototype={}
A.eJ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fi(b):s}},
gk(a){return this.b==null?this.c.a:this.aZ().length},
gJ(a){return this.gk(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.ai(s,A.j(s).i("ai<1>"))}return new A.eK(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aD(s,A.j(s).i("aD<2>"))}return A.fM(r.aZ(),new A.hp(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.e(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.F(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.dK().j(0,b,c)},
aU(a){var s,r,q=this
if(q.b==null)return q.c.aU(a)
s=q.aZ()
for(r=0;r<s.length;++r)if(J.u(q.h(0,s[r]),a))return!0
return!1},
F(a){if(this.b==null)return this.c.F(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
I(a,b){if(this.b!=null&&!this.F(b))return null
return this.dK().I(0,b)},
an(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.an(0,b)
s=o.aZ()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.hW(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.Q(o))}},
aZ(){var s=t.g.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
dK(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.aZ()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.b.t(r,"")
else B.b.br(r)
n.a=n.b=null
return n.c=s},
fi(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.hW(this.a[a])
return this.b[a]=s}}
A.hp.prototype={
$1(a){return this.a.h(0,A.e(a))},
$S:16}
A.eK.prototype={
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
A.hD.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.hC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.c5.prototype={
gbQ(){return this.a},
e0(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=u.n,a1="Invalid base64 encoding length ",a2=a3.length
a5=A.be(a4,a5,a2)
s=$.lq()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.j_(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.j_(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.X("")
g=o}else g=o
g.a+=B.a.v(a3,p,q)
c=A.A(j)
g.a+=c
p=k
continue}}throw A.a(A.B("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.v(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.lx(a3,m,a5,n,l,r)
else{b=B.d.bX(r-1,4)+1
if(b===1)throw A.a(A.B(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.aX(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.lx(a3,m,a5,n,l,a)
else{b=B.d.bX(a,4)
if(b===1)throw A.a(A.B(a1,a3,a5))
if(b>1)a3=B.a.aX(a3,a5,a5,b===2?"==":"=")}return a3},
aW(a){return this.e0(a,0,null)}}
A.dQ.prototype={
aF(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.hj(this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":u.n).fS(a,0,s,!0)
s.toString
return A.df(s,0,null)}}
A.hj.prototype={
fS(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.bp(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.oI(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.f8.prototype={
aF(a){var s,r,q,p
A.e(a)
s=A.be(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.hi()
q=r.fP(a,0,s)
q.toString
p=r.a
if(p<-1)A.D(A.B("Missing padding character",a,s))
if(p>0)A.D(A.B("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.hi.prototype={
fP(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.m3(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.oF(a,b,c,q)
r.a=A.oH(a,b,c,s,0,r.a)
return s}}
A.aI.prototype={}
A.dU.prototype={}
A.dX.prototype={}
A.cY.prototype={
n(a){var s=A.dY(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.e7.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.e6.prototype={
aa(a,b){var s=A.pQ(a,this.gfR().a)
return s},
ad(a,b){var s=A.oO(a,this.gbQ().b,null)
return s},
gbQ(){return B.cr},
gfR(){return B.cq}}
A.fD.prototype={}
A.fC.prototype={}
A.hr.prototype={
ec(a){var s,r,q,p,o,n,m=a.length
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
if(a==null?p==null:a===p)throw A.a(new A.e7(a,null))}B.b.t(s,a)},
bV(a){var s,r,q,p,o=this
if(o.eb(a))return
o.c3(a)
try{s=o.b.$1(a)
if(!o.eb(s)){q=A.lM(a,null,o.gdr())
throw A.a(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.c3(p)
q=A.lM(a,r,o.gdr())
throw A.a(q)}},
eb(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.cn.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ec(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c3(a)
q.hg(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c3(a)
r=q.hh(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
hg(a){var s,r,q=this.c
q.a+="["
s=J.C(a)
if(s.gb4(a)){this.bV(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bV(s.h(a,r))}}q.a+="]"},
hh(a){var s,r,q,p,o,n,m=this,l={}
if(a.gJ(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aT(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.an(0,new A.hs(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.ec(A.e(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.bV(r[n])}p.a+="}"
return!0}}
A.hs.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.j(s,r.a++,a)
B.b.j(s,r.a++,b)},
$S:18}
A.hq.prototype={
gdr(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ey.prototype={
ct(a){t.L.a(a)
return B.cJ.aF(a)}}
A.h5.prototype={
aF(a){var s,r,q,p,o,n
A.e(a)
s=a.length
r=A.be(0,null,s)
if(r===0)return new Uint8Array(0)
q=r*3
p=new Uint8Array(q)
o=new A.hE(p)
if(o.eM(a,0,r)!==r){n=r-1
if(!(n>=0&&n<s))return A.b(a,n)
o.cp()}return new Uint8Array(p.subarray(0,A.mD(0,o.b,q)))}}
A.hE.prototype={
cp(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.V(q)
s=q.length
if(!(p<s))return A.b(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.b(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.b(q,p)
q[p]=189},
fK(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.V(r)
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
eM(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.b(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.b(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.V(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.b(a,m)
if(k.fK(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cp()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.V(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.V(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.b(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.b(s,m)
s[m]=n&63|128}}}return o}}
A.h4.prototype={
aF(a){return new A.hB(this.a).eC(t.L.a(a),0,null,!0)}}
A.hB.prototype={
eC(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.be(b,c,J.a6(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.pf(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.pe(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c6(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.pg(o)
l.b=0
throw A.a(A.B(m,a,p+l.c))}return n},
c6(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.bp(b+c,2)
r=q.c6(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c6(a,s,c,d)}return q.fQ(a,b,c,d)},
fQ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.X(""),d=b+1,c=a.length
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
A.hm.prototype={
n(a){return this.bi()}}
A.R.prototype={}
A.c4.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dY(s)
return"Assertion failed"}}
A.dh.prototype={}
A.aZ.prototype={
gc9(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gc9()+q+o
if(!s.a)return n
return n+s.gc8()+": "+A.dY(s.gcF())},
gcF(){return this.b}}
A.ch.prototype={
gcF(){return A.mC(this.b)},
gc9(){return"RangeError"},
gc8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.dZ.prototype={
gcF(){return A.U(this.b)},
gc9(){return"RangeError"},
gc8(){if(A.U(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.dj.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.es.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.bK.prototype={
n(a){return"Bad state: "+this.a}}
A.dT.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dY(s)+"."}}
A.ec.prototype={
n(a){return"Out of Memory"},
$iR:1}
A.dd.prototype={
n(a){return"Stack Overflow"},
$iR:1}
A.eH.prototype={
n(a){return"Exception: "+this.a},
$iaz:1}
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
$iaz:1,
gdY(){return this.a}}
A.f.prototype={
ac(a,b,c){var s=A.j(this)
return A.fM(this,s.a8(c).i("1(f.E)").a(b),s.i("f.E"),c)},
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
s=J.al(q.gm())
if(!q.l())return s
if(b.length===0){r=s
do r+=J.al(q.gm())
while(q.l())}else{r=s
do r=r+b+J.al(q.gm())
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
gJ(a){return!this.gq(this).l()},
gb4(a){return!this.gJ(this)},
ao(a,b){return A.oq(this,b,A.j(this).i("f.E"))},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.Z())
return s.gm()},
gK(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.Z())
do s=r.gm()
while(r.l())
return s},
bS(a,b){var s,r
A.j(this).i("k(f.E)").a(b)
for(s=this.gq(this);s.l();){r=s.gm()
if(b.$1(r))return r}throw A.a(A.Z())},
T(a,b){var s,r
A.ad(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.a(A.e_(b,b-r,this,null,"index"))},
n(a){return A.oe(this,"(",")")}}
A.L.prototype={
n(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.bd.prototype={
gY(a){return A.v.prototype.gY.call(this,0)},
n(a){return"null"}}
A.v.prototype={$iv:1,
S(a,b){return this===b},
gY(a){return A.eh(this)},
n(a){return"Instance of '"+A.ei(this)+"'"},
gaM(a){return A.iX(this)},
toString(){return this.n(this)}}
A.X.prototype={
gk(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iov:1}
A.h3.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.e(b)
s=B.a.aq(b,"=")
if(s===-1){if(b!=="")a.j(0,A.ak(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.v(b,0,s)
q=B.a.D(b,s+1)
p=this.a
a.j(0,A.ak(r,0,r.length,p,!0),A.ak(q,0,q.length,p,!0))}return a},
$S:40}
A.h2.prototype={
$2(a,b){throw A.a(A.B("Illegal IPv6 address, "+a,this.a,b))},
$S:42}
A.dE.prototype={
gdE(){var s,r,q,p,o=this,n=o.w
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
gh5(){var s,r,q,p=this,o=p.x
if(o===$){s=p.e
r=s.length
if(r!==0){if(0>=r)return A.b(s,0)
r=s.charCodeAt(0)===47}else r=!1
if(r)s=B.a.D(s,1)
q=s.length===0?B.cu:A.kB(new A.H(A.c(s.split("/"),t.s),t.dO.a(A.qm()),t.do),t.N)
p.x!==$&&A.k0()
o=p.x=q}return o},
gY(a){var s,r=this,q=r.y
if(q===$){s=B.a.gY(r.gdE())
r.y!==$&&A.k0()
r.y=s
q=s}return q},
ge2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.m2(s==null?"":s)
r.z!==$&&A.k0()
q=r.z=new A.b1(s,t.dw)}return q},
ge3(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.p8(s==null?"":s)
q.Q!==$&&A.k0()
q.Q=r
p=r}return p},
gaA(){return this.b},
gaH(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.a4(s,"v",1))return B.a.v(s,1,s.length-1)
return s},
gbx(){var s=this.d
return s==null?A.mj(this.a):s},
gb5(){var s=this.f
return s==null?"":s},
gb1(){var s=this.r
return s==null?"":s},
h_(a){var s=this.a
if(a.length!==s.length)return!1
return A.pp(a,s,0)>=0},
e6(a){var s,r,q,p,o,n,m,l=this
a=A.kO(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.hz(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.u(o,"/"))o="/"+o
m=o
return A.dF(a,r,p,q,m,l.f,l.r)},
df(a,b){var s,r,q,p,o,n,m,l,k
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
e8(a){return this.by(A.ew(a,0,null))},
by(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gak().length!==0)return a
else{s=h.a
if(a.gcB()){r=a.e6(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gdP())m=a.gbt()?a.gb5():h.f
else{l=A.pd(h,n)
if(l>0){k=B.a.v(n,0,l)
n=a.gcA()?k+A.bW(a.gar()):k+A.bW(h.df(B.a.D(n,k.length),a.gar()))}else if(a.gcA())n=A.bW(a.gar())
else if(n.length===0)if(p==null)n=s.length===0?a.gar():A.bW(a.gar())
else n=A.bW("/"+a.gar())
else{j=h.df(n,a.gar())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.bW(j)
else n=A.kQ(j,!r||p!=null)}m=a.gbt()?a.gb5():null}}}i=a.gcC()?a.gb1():null
return A.dF(s,q,p,o,n,m,i)},
gcB(){return this.c!=null},
gbt(){return this.f!=null},
gcC(){return this.r!=null},
gdP(){return this.e.length===0},
gcA(){return B.a.u(this.e,"/")},
cM(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.a(A.M("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.a(A.M(u.y))
q=r.r
if((q==null?"":q)!=="")throw A.a(A.M(u.l))
if(r.c!=null&&r.gaH()!=="")A.D(A.M(u.j))
s=r.gh5()
A.p6(s,!1)
q=A.kF(B.a.u(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
n(a){return this.gdE()},
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
$ieu:1,
gak(){return this.a},
gar(){return this.e}}
A.hA.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.ak(s,a,c,r,!0)
p=""}else{q=A.ak(s,a,b,r,!0)
p=A.ak(s,b+1,c,r,!0)}J.kp(this.c.h6(q,A.qn()),p)},
$S:43}
A.h1.prototype={
gea(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.b(m,0)
s=o.a
m=m[0]+1
r=B.a.af(s,"?",m)
q=s.length
if(r>=0){p=A.dG(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.eF("data","",n,n,A.dG(s,m,q,128,!1,!1),p,n)}return m},
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
gdP(){return this.e===this.f},
gak(){var s=this.w
return s==null?this.w=this.eA():s},
eA(){var s,r=this,q=r.b
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
ge2(){if(this.f>=this.r)return B.cv
return new A.b1(A.m2(this.gb5()),t.dw)},
ge3(){if(this.f>=this.r)return B.am
var s=A.mu(this.gb5())
s.e9(A.n1())
return A.lD(s,t.N,t.a)},
dc(a){var s=this.d+1
return s+a.length===this.e&&B.a.a4(this.a,a,s)},
hb(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.aO(B.a.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
e6(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.kO(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.v(h.a,h.b+3,q):""
o=h.gcD()?h.gbx():g
if(s)o=A.hz(o,a)
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
e8(a){return this.by(A.ew(a,0,null))},
by(a){if(a instanceof A.aO)return this.fz(this,a)
return this.dF().by(a)},
fz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.u(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.u(a.a,"http"))p=!b.dc("80")
else p=!(r===5&&B.a.u(a.a,"https"))||!b.dc("443")
if(p){o=r+1
return new A.aO(B.a.v(a.a,0,o)+B.a.D(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.dF().by(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.aO(B.a.v(a.a,0,r)+B.a.D(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.aO(B.a.v(a.a,0,r)+B.a.D(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.hb()}s=b.a
if(B.a.a4(s,"/",n)){m=a.e
l=A.mc(this)
k=l>0?l:m
o=k-n
return new A.aO(B.a.v(a.a,0,k)+B.a.D(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a4(s,"../",n))n+=3
o=j-n+1
return new A.aO(B.a.v(a.a,0,j)+"/"+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.mc(this)
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
if(q)throw A.a(A.M("Cannot extract a file path from a "+r.gak()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.a(A.M(u.y))
throw A.a(A.M(u.l))}if(r.c<r.d)A.D(A.M(u.j))
q=B.a.v(s,r.e,q)
return q},
gY(a){var s=this.x
return s==null?this.x=B.a.gY(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.n(0)},
dF(){var s=this,r=null,q=s.gak(),p=s.gaA(),o=s.c>0?s.gaH():r,n=s.gcD()?s.gbx():r,m=s.a,l=s.f,k=B.a.v(m,s.e,l),j=s.r
l=l<j?s.gb5():r
return A.dF(q,p,o,n,k,l,j<m.length?s.gb1():r)},
n(a){return this.a},
$ieu:1}
A.eF.prototype={}
A.dV.prototype={}
A.cd.prototype={
b2(a){var s,r
this.$ti.i("f<1>?").a(a)
for(s=a.gq(a),r=0;s.l();){r=r+J.ac(s.gm())&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cy.prototype={
b2(a){var s,r
this.$ti.i("cy.T?").a(a)
for(s=a.gq(a),r=0;s.l();)r=r+J.ac(s.gm())&2147483647
r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.bN.prototype={}
A.d5.prototype={
t(a,b){this.aw(this.$ti.c.a(b))},
n(a){return A.fy(this,"{","}")},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
sk(a,b){var s,r,q,p,o=this
if(b<0)throw A.a(A.a5("Length "+b+" may not be negative."))
if(b>o.gk(0)&&!o.$ti.c.b(null))throw A.a(A.M("The length can only be increased when the element type is nullable, but the current element type is `"+A.b4(o.$ti.c).n(0)+"`."))
s=b-o.gk(0)
if(s>=0){if(o.a.length<=b)o.fh(b)
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
A.U(b)
if(b<0||b>=p.gk(0))throw A.a(A.a5("Index "+b+" must be in the range [0.."+p.gk(0)+")."))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
j(a,b,c){var s,r=this
r.$ti.c.a(c)
if(b<0||b>=r.gk(0))throw A.a(A.a5("Index "+b+" must be in the range [0.."+r.gk(0)+")."))
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
fL(a){var s,r,q,p,o,n=this
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
fh(a){var s=this,r=A.aT(A.on(a+B.d.b0(a,1)),null,!1,s.$ti.i("1?"))
s.c=s.fL(r)
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
return A.lY()},
I(a,b){return A.lY()}}
A.f9.prototype={
fM(a){var s,r,q=t.d4
A.mV("absolute",A.c([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.av(a)>0&&!s.aV(a)
if(s)return a
s=A.n3()
r=A.c([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.mV("join",r)
return this.h0(new A.dl(r,t.eJ))},
h0(a){var s,r,q,p,o,n,m,l,k,j
t.cs.a(a)
for(s=a.$ti,r=s.i("k(f.E)").a(new A.fa()),q=a.gq(0),s=new A.bk(q,r,s.i("bk<f.E>")),r=this.a,p=!1,o=!1,n="";s.l();){m=q.gm()
if(r.aV(m)&&o){l=A.ed(m,r)
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
bg(a,b){var s=A.ed(b,this.a),r=s.d,q=A.t(r),p=q.i("q<1>")
r=A.o(new A.q(r,q.i("k(1)").a(new A.fb()),p),p.i("f.E"))
s.sh4(r)
r=s.b
if(r!=null)B.b.b8(s.d,0,r)
return s.d},
aW(a){var s
if(!this.f0(a))return a
s=A.ed(a,this.a)
s.cJ()
return s.n(0)},
f0(a){var s,r,q,p,o,n,m,l=this.a,k=l.av(a)
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
h9(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.av(a)
if(i<=0)return l.aW(a)
s=A.n3()
if(j.av(s)<=0&&j.av(a)>0)return l.aW(a)
if(j.av(a)<=0||j.aV(a))a=l.fM(a)
if(j.av(a)<=0&&j.av(s)>0)throw A.a(A.lQ(k+a+'" from "'+s+'".'))
r=A.ed(s,j)
r.cJ()
q=A.ed(a,j)
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
if(i)throw A.a(A.lQ(k+a+'" from "'+s+'".'))
i=t.N
B.b.cE(q.d,0,A.aT(p,"..",!1,i))
B.b.j(q.e,0,"")
B.b.cE(q.e,1,A.aT(r.d.length,j.gb6(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&B.b.gK(j)==="."){B.b.e4(q.d)
j=q.e
if(0>=j.length)return A.b(j,-1)
j.pop()
if(0>=j.length)return A.b(j,-1)
j.pop()
B.b.t(j,"")}q.b=""
q.e5()
return q.n(0)},
e1(a){var s,r,q=this,p=A.mM(a)
if(p.gak()==="file"&&q.a===$.dN())return p.n(0)
else if(p.gak()!=="file"&&p.gak()!==""&&q.a!==$.dN())return p.n(0)
s=q.aW(q.a.cK(A.mM(p)))
r=q.h9(s)
return q.bg(0,r).length>q.bg(0,s).length?s:r}}
A.fa.prototype={
$1(a){return A.e(a)!==""},
$S:0}
A.fb.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ia.prototype={
$1(a){A.bX(a)
return a==null?"null":'"'+a+'"'},
$S:36}
A.cc.prototype={
ed(a){var s,r=this.av(a)
if(r>0)return B.a.v(a,0,r)
if(this.aV(a)){if(0>=a.length)return A.b(a,0)
s=a[0]}else s=null
return s},
cL(a,b){return a===b}}
A.fN.prototype={
e5(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gK(s)===""))break
B.b.e4(q.d)
s=q.e
if(0>=s.length)return A.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.b.j(s,r-1,"")},
cJ(){var s,r,q,p,o,n,m=this,l=A.c([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.a7)(s),++p){o=s[p]
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
if(r!=null&&s===$.f6())m.b=A.aG(r,"/","\\")
m.e5()},
n(a){var s,r,q,p,o,n=this.b
n=n!=null?n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.b(q,o)
n=n+q[o]+s[o]}n+=B.b.gK(q)
return n.charCodeAt(0)==0?n:n},
sh4(a){this.d=t.a.a(a)}}
A.ee.prototype={
n(a){return"PathException: "+this.a},
$iaz:1}
A.fZ.prototype={
n(a){return this.gcI()}}
A.eg.prototype={
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
return A.ak(s,0,s.length,B.e,!1)}throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))},
gcI(){return"posix"},
gb6(){return"/"}}
A.ex.prototype={
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
p=A.n6(a,q+1)
return p==null?q:p}}return 0},
av(a){return this.bd(a,!1)},
aV(a){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
cK(a){return a.n(0)},
gcI(){return"url"},
gb6(){return"/"}}
A.ez.prototype={
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
if(!A.nf(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
av(a){return this.bd(a,!1)},
aV(a){return this.av(a)===1},
cK(a){var s,r
if(a.gak()!==""&&a.gak()!=="file")throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))
s=a.gar()
if(a.gaH()===""){if(s.length>=3&&B.a.u(s,"/")&&A.n6(s,1)!=null)s=B.a.e7(s,"/","")}else s="\\\\"+a.gaH()+s
r=A.aG(s,"/","\\")
return A.ak(r,0,r.length,B.e,!1)},
fN(a,b){var s
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
if(!this.fN(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gcI(){return"windows"},
gb6(){return"\\"}}
A.fX.prototype={
gk(a){return this.c.length},
gh2(){return this.b.length},
eq(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.c,r=s.length,q=a.a,p=q.length,o=s.$flags|0,n=this.b,m=0;m<r;++m){if(!(m<p))return A.b(q,m)
l=q.charCodeAt(m)
o&2&&A.V(s)
s[m]=l
if(l===13){k=m+1
if(k<p){if(!(k<p))return A.b(q,k)
j=q.charCodeAt(k)!==10}else j=!0
if(j)l=10}if(l===10)B.b.t(n,m+1)}},
bZ(a,b){return A.a_(this,a,b)},
be(a){var s,r=this
if(a<0)throw A.a(A.a5("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.a(A.a5("Offset "+a+u.s+r.gk(0)+"."))
s=r.b
if(a<B.b.gU(s))return-1
if(a>=B.b.gK(s))return s.length-1
if(r.eS(a)){s=r.d
s.toString
return s}return r.d=r.ex(a)-1},
eS(a){var s,r,q,p=this.d
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
ex(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.d.bp(o-s,2)
if(!(r>=0&&r<p))return A.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
bW(a){var s,r,q,p=this
if(a<0)throw A.a(A.a5("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.a(A.a5("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gk(0)+"."))
s=p.be(a)
r=p.b
if(!(s>=0&&s<r.length))return A.b(r,s)
q=r[s]
if(q>a)throw A.a(A.a5("Line "+s+" comes after offset "+a+"."))
return a-q},
bz(a){var s,r,q,p
if(a<0)throw A.a(A.a5("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.a(A.a5("Line "+a+" must be less than the number of lines in the file, "+this.gh2()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.a(A.a5("Line "+a+" doesn't have 0 columns."))
return q}}
A.ca.prototype={
gX(){return this.a.a},
ga6(){return this.a.be(this.b)},
gab(){return this.a.bW(this.b)},
cP(a,b){var s,r=this.b
if(r<0)throw A.a(A.a5("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a5("Offset "+r+u.s+s.gk(0)+"."))}},
bw(){var s=this.b
return A.a_(this.a,s,s)},
gL(){return this.b}}
A.bl.prototype={
gX(){return this.a.a},
gk(a){return this.c-this.b},
gC(){return A.W(this.a,this.b)},
gH(){return A.W(this.a,this.c)},
gai(){return A.df(B.L.c0(this.a.c,this.b,this.c),0,null)},
gaz(){var s=this,r=s.a,q=s.c,p=r.be(q)
if(r.bW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.df(B.L.c0(r.c,r.bz(p),r.bz(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.bz(p+1)
return A.df(B.L.c0(r.c,r.bz(r.be(s.b)),q),0,null)},
c1(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.a(A.a1("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a5("End "+r+u.s+s.gk(0)+"."))
else if(q<0)throw A.a(A.a5("Start may not be negative, was "+q+"."))}},
aC(a,b){var s
t.I.a(b)
if(!(b instanceof A.bl))return this.em(0,b)
s=B.d.aC(this.b,b.b)
return s===0?B.d.aC(this.c,b.c):s},
S(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.bl))return s.el(0,b)
return s.b===b.b&&s.c===b.c&&J.u(s.a.a,b.a.a)},
gY(a){return A.eb(this.b,this.c,this.a.a,B.n)},
ap(a,b){var s,r=this,q=r.a
if(!J.u(q.a,b.a.a))throw A.a(A.a1('Source URLs "'+A.m(r.gX())+'" and  "'+A.m(b.gX())+"\" don't match."))
s=Math.min(r.b,b.b)
return A.a_(q,s,Math.max(r.c,b.c))},
$io6:1,
$ibh:1}
A.fc.prototype={
fY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.dM(B.b.gU(a0).c)
s=a.e
r=A.aT(s,null,!1,t.gS)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=n.c
if(!J.u(m.c,l)){a.bM("\u2575")
q.a+="\n"
a.dM(l)}else if(m.b+1!==n.b){a.fJ("...")
q.a+="\n"}}for(l=n.d,k=A.t(l).i("d7<1>"),j=new A.d7(l,k),j=new A.a2(j,j.gk(0),k.i("a2<y.E>")),k=k.i("y.E"),i=n.b,h=n.a;j.l();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gC().ga6()!==f.gH().ga6()&&f.gC().ga6()===i&&a.eU(B.a.v(h,0,f.gC().gab()))){e=B.b.aq(r,null)
if(e<0)A.D(A.a1(A.m(r)+" contains no null elements."))
B.b.j(r,e,g)}}a.fI(i)
q.a+=" "
a.fH(n,r)
if(s)q.a+=" "
d=B.b.b3(l,new A.fx())
if(d===-1)c=null
else{if(!(d>=0&&d<l.length))return A.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gC().ga6()===i?j.gC().gab():0
a.fF(h,g,j.gH().ga6()===i?j.gH().gab():h.length,p)}else a.bO(h)
q.a+="\n"
if(k)a.fG(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.bM("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
dM(a){var s,r,q=this
if(!q.f||!t.k.b(a))q.bM("\u2577")
else{q.bM("\u250c")
q.aB(new A.fk(q),"\x1b[34m",t.n)
s=q.r
r=" "+$.ls().e1(a)
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
if(s&&j===c){f.aB(new A.fr(f,h,a),r,p)
l=!0}else if(l)f.aB(new A.fs(f,j),r,p)
else if(i)if(e.a)f.aB(new A.ft(f),e.b,m)
else n.a+=" "
else f.aB(new A.fu(e,f,c,h,a,j,g),o,p)}},
fH(a,b){return this.bL(a,b,null)},
fF(a,b,c,d){var s=this
s.bO(B.a.v(a,0,b))
s.aB(new A.fl(s,a,b,c),d,t.n)
s.bO(B.a.v(a,c,a.length))},
fG(a,b,c){var s,r,q,p=this
t.E.a(c)
s=p.b
r=b.a
if(r.gC().ga6()===r.gH().ga6()){p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
if(c.length!==0)r.a+=" "
p.dN(b,c,p.aB(new A.fm(p,a,b),s,t.p))}else{q=a.b
if(r.gC().ga6()===q){if(B.b.p(c,b))return
A.rq(c,b,t.C)
p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
p.aB(new A.fn(p,a,b),s,t.n)
r.a+="\n"}else if(r.gH().ga6()===q){r=r.gH().gab()
if(r===a.a.length){A.nn(c,b,t.C)
return}p.cq()
p.r.a+=" "
p.bL(a,c,b)
p.dN(b,c,p.aB(new A.fo(p,!1,a,b),s,t.p))
A.nn(c,b,t.C)}}},
dL(a,b,c){var s=c?0:1,r=this.r
s=B.a.aj("\u2500",1+b+this.c5(B.a.v(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
fE(a,b){return this.dL(a,b,!0)},
dN(a,b,c){t.E.a(b)
this.r.a+="\n"
return},
bO(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),q=this.r,r=r.i("r.E");s.l();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aj(" ",4)
else{p=A.A(p)
q.a+=p}}},
bN(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.d.n(b+1)
this.aB(new A.fv(s,this,a),"\x1b[34m",t.b)},
bM(a){return this.bN(a,null,null)},
fJ(a){return this.bN(null,null,a)},
fI(a){return this.bN(null,a,null)},
cq(){return this.bN(null,null,null)},
c5(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
eU(a){var s,r,q
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E");s.l();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
aB(a,b,c){var s,r
c.i("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.fw.prototype={
$0(){return this.a},
$S:71}
A.fe.prototype={
$1(a){var s=t.A.a(a).d,r=A.t(s)
return new A.q(s,r.i("k(1)").a(new A.fd()),r.i("q<1>")).gk(0)},
$S:65}
A.fd.prototype={
$1(a){var s=t.C.a(a).a
return s.gC().ga6()!==s.gH().ga6()},
$S:10}
A.ff.prototype={
$1(a){return t.A.a(a).c},
$S:34}
A.fh.prototype={
$1(a){var s=t.C.a(a).a.gX()
return s==null?new A.v():s},
$S:35}
A.fi.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aC(0,s.a(b).a)},
$S:39}
A.fj.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.aS.a(a0)
s=a0.a
r=a0.b
q=A.c([],t.ef)
for(p=J.a3(r),o=p.gq(r),n=t.r;o.l();){m=o.gm().a
l=m.gaz()
k=A.iS(l,m.gai(),m.gC().gab())
k.toString
j=B.a.bq("\n",B.a.v(l,0,k)).gk(0)
i=m.gC().ga6()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.b.gK(q).b)B.b.t(q,new A.aE(g,i,s,A.c([],n)));++i}}f=A.c([],n)
for(o=q.length,n=t.as,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.a7)(q),++h){g=q[h]
m=n.a(new A.fg(g))
e&1&&A.V(f,16)
B.b.du(f,m,!0)
c=f.length
for(m=p.ao(r,d),k=m.$ti,m=new A.a2(m,m.gk(0),k.i("a2<y.E>")),b=g.b,k=k.i("y.E");m.l();){a=m.d
if(a==null)a=k.a(a)
if(a.a.gC().ga6()>b)break
B.b.t(f,a)}d+=f.length-c
B.b.a9(g.d,f)}return q},
$S:57}
A.fg.prototype={
$1(a){return t.C.a(a).a.gH().ga6()<this.a.b},
$S:10}
A.fx.prototype={
$1(a){t.C.a(a)
return!0},
$S:10}
A.fk.prototype={
$0(){this.a.r.a+=B.a.aj("\u2500",2)+">"
return null},
$S:8}
A.fr.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:5}
A.fs.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:5}
A.ft.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:8}
A.fu.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aB(new A.fp(p,s),p.b,t.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gH().gab()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aB(new A.fq(r,o),p.b,t.b)}}},
$S:5}
A.fp.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:5}
A.fq.prototype={
$0(){this.a.r.a+=this.b},
$S:5}
A.fl.prototype={
$0(){var s=this
return s.a.bO(B.a.v(s.b,s.c,s.d))},
$S:8}
A.fm.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gC().gab(),l=n.gH().gab()
n=this.b.a
s=q.c5(B.a.v(n,0,m))
r=q.c5(B.a.v(n,m,l))
m+=s*3
n=(p.a+=B.a.aj(" ",m))+B.a.aj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:17}
A.fn.prototype={
$0(){return this.a.fE(this.b,this.c.a.gC().gab())},
$S:8}
A.fo.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aj("\u2500",3)
else r.dL(s.c,Math.max(s.d.a.gH().gab()-1,0),!1)
return q.a.length-p.length},
$S:17}
A.fv.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.h3(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:5}
A.ae.prototype={
n(a){var s=this.a
s="primary "+(""+s.gC().ga6()+":"+s.gC().gab()+"-"+s.gH().ga6()+":"+s.gH().gab())
return s.charCodeAt(0)==0?s:s}}
A.hn.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.q.b(o)&&A.iS(o.gaz(),o.gai(),o.gC().gab())!=null)){s=A.bJ(o.gC().gL(),0,0,o.gX())
r=o.gH().gL()
q=o.gX()
p=A.qs(o.gai(),10)
o=A.fY(s,A.bJ(r,A.m6(o.gai()),p,q),o.gai(),o.gai())}return A.oK(A.oM(A.oL(o)))},
$S:38}
A.aE.prototype={
n(a){return""+this.b+': "'+this.a+'" ('+B.b.V(this.d,", ")+")"}}
A.bI.prototype={
cu(a){var s=this.a
if(!J.u(s,a.gX()))throw A.a(A.a1('Source URLs "'+A.m(s)+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gL())},
aC(a,b){var s
t.F.a(b)
s=this.a
if(!J.u(s,b.gX()))throw A.a(A.a1('Source URLs "'+A.m(s)+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gL()},
S(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a,b.gX())&&this.b===b.gL()},
gY(a){var s=this.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=this,r=A.iX(s).n(0),q=s.a
return"<"+r+": "+s.b+" "+(A.m(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
gX(){return this.a},
gL(){return this.b},
ga6(){return this.c},
gab(){return this.d}}
A.el.prototype={
cu(a){if(!J.u(this.a.a,a.gX()))throw A.a(A.a1('Source URLs "'+A.m(this.gX())+'" and "'+A.m(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gL())},
aC(a,b){t.F.a(b)
if(!J.u(this.a.a,b.gX()))throw A.a(A.a1('Source URLs "'+A.m(this.gX())+'" and "'+A.m(b.gX())+"\" don't match."))
return this.b-b.gL()},
S(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a.a,b.gX())&&this.b===b.gL()},
gY(a){var s=this.a.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=A.iX(this).n(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.m(p==null?"unknown source":p)+":"+(q.be(r)+1)+":"+(q.bW(r)+1))+">"},
$ibI:1}
A.dc.prototype={
cQ(a,b,c){var s,r=this.b,q=this.a
if(!J.u(r.gX(),q.gX()))throw A.a(A.a1('Source URLs "'+A.m(q.gX())+'" and  "'+A.m(r.gX())+"\" don't match."))
else if(r.gL()<q.gL())throw A.a(A.a1("End "+r.n(0)+" must come after start "+q.n(0)+"."))
else{s=this.c
if(s.length!==q.cu(r))throw A.a(A.a1('Text "'+s+'" must be '+q.cu(r)+" characters long."))}},
gC(){return this.a},
gH(){return this.b},
gai(){return this.c}}
A.em.prototype={
gdY(){return this.a},
n(a){return"Error on "+this.b.e_(this.a,null)},
$iaz:1}
A.en.prototype={$ii:1}
A.ck.prototype={
gX(){return this.gC().gX()},
gk(a){return this.gH().gL()-this.gC().gL()},
aC(a,b){var s
t.I.a(b)
s=this.gC().aC(0,b.gC())
return s===0?this.gH().aC(0,b.gH()):s},
e_(a,b){var s,r,q,p=this,o="line "+(p.gC().ga6()+1)+", column "+(p.gC().gab()+1)
if(p.gX()!=null){s=p.gX()
r=$.ls()
s.toString
s=o+(" of "+r.e1(s))
o=s}o+=": "+a
q=p.fZ(b)
if(q.length!==0)o=o+"\n"+q
return o.charCodeAt(0)==0?o:o},
dZ(a){return this.e_(a,null)},
fZ(a){var s=this
if(!t.q.b(s)&&s.gk(s)===0)return""
return A.o7(s,a).fY()},
S(a,b){if(b==null)return!1
return b instanceof A.ck&&this.gC().S(0,b.gC())&&this.gH().S(0,b.gH())},
gY(a){return A.eb(this.gC(),this.gH(),B.n,B.n)},
n(a){var s=this
return"<"+A.iX(s).n(0)+": from "+s.gC().n(0)+" to "+s.gH().n(0)+' "'+s.gai()+'">'},
$icj:1}
A.bh.prototype={
gaz(){return this.d}}
A.dW.prototype={
a0(a){var s,r=this
if(a!==10)s=a===13&&r.W()!==10
else s=!0
if(s){++r.as
r.at=0}else{s=r.at
r.at=s+(a>=65536&&a<=1114111?2:1)}},
bA(a){var s,r,q,p,o=this
if(!o.eo(a))return!1
s=o.gcH()
r=s.c
q=o.f1(r)
s=o.as
p=q.length
o.as=s+p
s=r.length
if(p===0)o.at+=s
else o.at=s-B.b.gK(q).gH()
return!0},
f1(a){var s=$.nL().bq(0,a),r=A.o(s,A.j(s).i("f.E"))
if(this.P(-1)===13&&this.W()===10){if(0<0||0>=r.length)return A.b(r,-1)
r.pop()}return r}}
A.ao.prototype={$ioh:1}
A.de.prototype={}
A.eo.prototype={
gaD(){var s=A.W(this.f,this.c),r=s.b
return A.a_(s.a,r,r)},
c_(a,b){var s=b==null?this.c:b.b
return this.f.bZ(a.b,s)},
am(a){return this.c_(a,null)},
aI(a){var s,r,q=this
if(!q.en(a))return!1
s=q.c
r=q.gcH()
q.f.bZ(s,r.a+r.c.length)
return!0},
cz(a,b,c){var s,r,q=this,p=q.b
A.rM(p,null,c,b)
s=c==null&&b==null?q.gcH():null
if(c==null)c=s==null?q.c:s.a
if(b==null)if(s==null)b=0
else{r=s.a
b=r+s.c.length-r}throw A.a(A.ou(a,q.f.bZ(c,c+b),p))},
cw(a,b){return this.cz(a,b,null)},
fU(a){return this.cz(a,null,null)}}
A.eq.prototype={
gcH(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
h7(){var s,r=this,q=r.b,p=q.length
if(r.c===p)r.cY("more input")
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
s=A.aG(a,"\\","\\\\")
r='"'+A.aG(s,'"','\\"')+'"'
this.cY(r)},
aI(a){var s=this,r=B.a.bu(a,s.b,s.c)
s.d=r
s.e=s.c
return r!=null},
D(a,b){var s=this.c
return B.a.v(this.b,b,s)},
cY(a){this.cz("expected "+a+".",0,this.c)}}
A.hl.prototype={
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
if(r.b(a)&&r.b(b)){r=j.eV(a,b)
return r}else{r=t.f
if(r.b(a)&&r.b(b)){r=j.eZ(a,b)
return r}else if(typeof a=="number"&&typeof b=="number"){r=j.f2(a,b)
return r}else{r=J.u(a,b)
return r}}}finally{if(0>=s.length)return A.b(s,-1)
s.pop()
if(0>=q.length)return A.b(q,-1)
q.pop()}},
eV(a,b){var s,r=J.C(a),q=J.C(b)
if(r.gk(a)!==q.gk(b))return!1
for(s=0;s<r.gk(a);++s)if(!this.cv(r.h(a,s),q.h(b,s)))return!1
return!0},
eZ(a,b){var s,r
if(a.gk(a)!==b.gk(b))return!1
for(s=a.gE(),s=s.gq(s);s.l();){r=s.gm()
if(!b.F(r))return!1
if(!this.cv(a.h(0,r),b.h(0,r)))return!1}return!0},
f2(a,b){if(isNaN(a)&&isNaN(b))return!0
return a===b}}
A.iE.prototype={
$1(a){var s,r,q,p=this
if(!p.a.t(0,a))return-1
try{if(t.f.b(a)){s=B.aQ
r=t.X
q=s.b2(a.gE().ac(0,p,r))
r=s.b2(a.gag().ac(0,p,r))
return q^r}else if(t.R.b(a)){r=B.aI.b2(J.aR(a,p,t.X))
return r}else if(t.m.b(a)){r=J.ac(a.ga7())
return r}else{r=J.ac(a)
return r}}finally{p.a.I(0,a)}},
$S:6}
A.aa.prototype={
n(a){return this.a.bi()},
gB(){return this.a},
gA(){return this.b}}
A.cO.prototype={
gB(){return B.aT},
n(a){return"DOCUMENT_START"},
$iaa:1,
gA(){return this.a}}
A.c7.prototype={
gB(){return B.aU},
n(a){return"DOCUMENT_END"},
$iaa:1,
gA(){return this.a}}
A.cG.prototype={
gB(){return B.a9},
n(a){return"ALIAS "+this.b},
$iaa:1,
gA(){return this.a}}
A.dH.prototype={
n(a){var s=this,r=s.gB().n(0)
if(s.gbP()!=null)r+=" &"+A.m(s.gbP())
if(s.gbU()!=null)r+=" "+A.m(s.gbU())
return r.charCodeAt(0)==0?r:r},
$iaa:1}
A.ag.prototype={
gB(){return B.aa},
n(a){return this.ep(0)+' "'+this.d+'"'},
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
A.fJ.prototype={
dX(){var s,r,q=this,p=q.a
if(p.c===B.a0)return null
s=p.aQ()
if(s.gB()===B.a8){q.d=q.d.ap(0,s.gA())
return null}t.dg.a(s)
r=q.bH(p.aQ())
p=s.a.ap(0,t.gR.a(p.aQ()).a)
q.d=q.d.ap(0,p)
q.b.br(0)
return new A.eA(r,p)},
bH(a){var s,r,q=this,p=a.gB()
A:{if(B.a9===p){s=q.eW(t.a6.a(a))
break A}if(B.aa===p){t.fy.a(a)
s=a.c
if(s==="!")r=new A.an(a.d,a.e,a.a)
else if(s!=null)r=q.f4(a)
else{r=q.fD(a)
if(r==null)r=new A.an(a.d,a.e,a.a)}q.cj(a.b,r)
s=r
break A}if(B.ab===p){s=q.eY(t.fP.a(a))
break A}if(B.ac===p){s=q.eX(t.fY.a(a))
break A}s=A.D(A.bi("Unreachable"))}return s},
cj(a,b){if(a==null)return
this.b.j(0,a,b)},
eW(a){var s=a.b,r=this.b.h(0,s)
if(r!=null){if(this.c.p(0,s))throw A.a(A.G("Self-referential collections are not supported.",a.a))
return r}throw A.a(A.G("Undefined alias.",a.a))},
eY(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c
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
while(r.gB()!==B.y){J.kp(s,j.bH(r))
r=k.aQ()}}finally{o=l
n=null
if(o!=null){n=o
j.c.I(0,n)}}m.a=i.ap(0,r.gA())
return m},
eX(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.c
if(g!=="!"&&g!=null&&g!=="tag:yaml.org,2002:map")throw A.a(A.G("Invalid tag for mapping.",a.a))
s=A.fG(A.qD(),A.qE(),t.z,t.T)
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
throw A.a(i)}J.nO(s,o,n)
r=i.aQ()}}finally{m=j
l=null
if(m!=null){l=m
h.c.I(0,l)}}k.a=g.ap(0,r.gA())
return k},
f4(a){var s,r=this,q=a.c
switch(q){case"tag:yaml.org,2002:null":s=r.dn(a)
if(s!=null)return s
throw A.a(A.G("Invalid null scalar.",a.a))
case"tag:yaml.org,2002:bool":s=r.cf(a)
if(s!=null)return s
throw A.a(A.G("Invalid bool scalar.",a.a))
case"tag:yaml.org,2002:int":s=r.fe(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid int scalar.",a.a))
case"tag:yaml.org,2002:float":s=r.ff(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid float scalar.",a.a))
case"tag:yaml.org,2002:str":return new A.an(a.d,a.e,a.a)
default:throw A.a(A.G("Undefined tag: "+A.m(q)+".",a.a))}},
fD(a){var s,r=this,q=null,p=a.d,o=p.length
if(o===0)return new A.an(q,a.e,a.a)
if(0>=o)return A.b(p,0)
s=p.charCodeAt(0)
A:{if(46===s||43===s||45===s){p=r.dq(a)
break A}if(110===s||78===s){p=o===4?r.dn(a):q
break A}if(116===s||84===s){p=o===4?r.cf(a):q
break A}if(102===s||70===s){p=o===5?r.cf(a):q
break A}if(126===s){p=o===1?new A.an(q,a.e,a.a):q
break A}p=s>=48&&s<=57?r.dq(a):q
break A}return p},
dn(a){var s,r=a.d
A:{if(""===r||"null"===r||"Null"===r||"NULL"===r||"~"===r){s=new A.an(null,a.e,a.a)
break A}s=null
break A}return s},
cf(a){var s,r=a.d
A:{if("true"===r||"True"===r||"TRUE"===r){s=new A.an(!0,a.e,a.a)
break A}if("false"===r||"False"===r||"FALSE"===r){s=new A.an(!1,a.e,a.a)
break A}s=null
break A}return s},
cg(a,b,c){var s=this.fg(a.d,b,c)
return s==null?null:new A.an(s,a.e,a.a)},
dq(a){return this.cg(a,!0,!0)},
fe(a,b){return this.cg(a,b,!0)},
ff(a,b){return this.cg(a,!0,b)},
fg(a,b,c){var s,r,q,p,o,n,m=null,l=a.length
if(0>=l)return A.b(a,0)
s=a.charCodeAt(0)
if(c&&l===1){r=s-48
return r>=0&&r<=9?r:m}if(1>=l)return A.b(a,1)
q=a.charCodeAt(1)
if(c&&s===48){if(q===120)return A.aU(a,m)
if(q===111)return A.aU(B.a.D(a,2),8)}if(!(s>=48&&s<=57))p=(s===43||s===45)&&q>=48&&q<=57
else p=!0
if(p){o=c?A.aU(a,10):m
return b?o==null?A.lT(a):o:o}if(!b)return m
p=s===46
if(!(p&&q>=48&&q<=57))n=(s===45||s===43)&&q===46
else n=!0
if(n){if(l===5)switch(a){case"+.inf":case"+.Inf":case"+.INF":return 1/0
case"-.inf":case"-.Inf":case"-.INF":return-1/0}return A.lT(a)}if(l===4&&p)switch(a){case".inf":case".Inf":case".INF":return 1/0
case".nan":case".NaN":case".NAN":return 0/0}return m}}
A.fO.prototype={
aQ(){var s,r,q,p
try{if(this.c===B.a0){q=A.bi("No more events.")
throw A.a(q)}s=this.fB()
return s}catch(p){q=A.c3(p)
if(q instanceof A.de){r=q
throw A.a(A.G(r.a,r.b))}else throw p}},
fB(){var s,r,q,p=this
switch(p.c){case B.aC:s=p.a.Z()
p.c=B.a_
return new A.aa(B.aS,s.gA())
case B.a_:return p.f7()
case B.ay:return p.f5()
case B.Z:return p.f6()
case B.aw:return p.bk(!0)
case B.cL:return p.bl(!0,!0)
case B.cK:return p.b_()
case B.ax:p.a.Z()
return p.dj()
case B.F:return p.dj()
case B.H:return p.fd()
case B.av:p.a.Z()
return p.di()
case B.D:return p.di()
case B.E:return p.f3()
case B.aB:return p.dm(!0)
case B.a2:return p.fa()
case B.aD:return p.fb()
case B.X:return p.fc()
case B.Y:p.c=B.a2
r=p.a.a1().gA()
r=A.W(r.a,r.b)
q=r.b
return new A.aa(B.z,A.a_(r.a,q,q))
case B.aA:return p.dk(!0)
case B.G:return p.f8()
case B.a1:return p.f9()
case B.az:return p.dl(!0)
default:throw A.a(A.bi("Unreachable"))}},
f7(){var s,r,q,p=this,o=p.a,n=o.a1()
n.toString
for(s=n;s.gB()===B.S;s=n){o.Z()
n=o.a1()
n.toString}if(s.gB()!==B.P&&s.gB()!==B.Q&&s.gB()!==B.R&&s.gB()!==B.w){p.ds()
B.b.t(p.b,B.Z)
p.c=B.aw
o=s.gA()
o=A.W(o.a,o.b)
n=o.b
return A.lG(A.a_(o.a,n,n),!0,null,null)}if(s.gB()===B.w){p.c=B.a0
o.Z()
return new A.aa(B.a8,s.gA())}r=s.gA()
q=p.ds()
s=o.a1()
if(s.gB()!==B.R)throw A.a(A.G("Expected document start.",s.gA()))
B.b.t(p.b,B.Z)
p.c=B.ay
o.Z()
return A.lG(r.ap(0,s.gA()),!1,q.b,q.a)},
f5(){var s,r,q=this,p=q.a.a1()
switch(p.gB().a){case 2:case 3:case 4:case 5:case 1:s=q.b
if(0>=s.length)return A.b(s,-1)
q.c=s.pop()
s=p.gA()
s=A.W(s.a,s.b)
r=s.b
return new A.ag(A.a_(s.a,r,r),null,null,"",B.h)
default:return q.bk(!0)}},
f6(){var s,r,q
this.d.br(0)
this.c=B.a_
s=this.a
r=s.a1()
if(r.gB()===B.S){s.Z()
return new A.c7(r.gA(),!1)}else{s=r.gA()
s=A.W(s.a,s.b)
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
s=A.W(s.a,s.b)
r=s.b
m.c=A.a_(s.a,r,r)
r=new A.fP(m,n)
s=new A.fQ(m,n)
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
return new A.ag(m.c.ap(0,q.a),m.b,p,q.b,q.c)}if(q.gB()===B.at){n.c=B.aB
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.f)}if(q.gB()===B.ar){n.c=B.aA
return new A.bF(m.c.ap(0,q.gA()),m.b,p,B.f)}if(a&&q.gB()===B.T){n.c=B.ax
return new A.bH(m.c.ap(0,q.gA()),m.b,p,B.m)}if(a&&q.gB()===B.C){n.c=B.av
return new A.bF(m.c.ap(0,q.gA()),m.b,p,B.m)}if(m.b!=null||p!=null){l=n.b
if(0>=l.length)return A.b(l,-1)
n.c=l.pop()
return new A.ag(m.c,m.b,p,"",B.h)}throw A.a(A.G("Expected node content.",m.c))},
bk(a){return this.bl(a,!1)},
b_(){return this.bl(!1,!1)},
dj(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()===B.u){s=o.gA()
r=A.W(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.p){q.c=B.F
p=r.b
return new A.ag(A.a_(r.a,p,p),null,null,"",B.h)}else{B.b.t(q.b,B.F)
return q.bk(!0)}}if(o.gB()===B.p){p.Z()
p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
return new A.aa(B.y,o.gA())}if(o.gB()===B.k){p.Z()
B.b.t(q.b,B.F)
return q.bk(!0)}throw A.a(A.G("While parsing a block collection, expected '-'.",o.gA().gC().bw()))},
fd(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()!==B.u){p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
p=o.gA()
p=A.W(p.a,p.b)
s=p.b
return new A.aa(B.y,A.a_(p.a,s,s))}s=o.gA()
r=A.W(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.k||o.gB()===B.l||o.gB()===B.p){q.c=B.H
p=r.b
return new A.ag(A.a_(r.a,p,p),null,null,"",B.h)}else{B.b.t(q.b,B.H)
return q.bk(!0)}},
di(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()===B.k){s=n.gA()
r=A.W(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.E
o=r.b
return new A.ag(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.E)
return q.bl(!0,!0)}}if(n.gB()===B.l){q.c=B.E
o=n.gA()
o=A.W(o.a,o.b)
s=o.b
return new A.ag(A.a_(o.a,s,s),p,p,"",B.h)}if(n.gB()===B.p){o.Z()
o=q.b
if(0>=o.length)return A.b(o,-1)
q.c=o.pop()
return new A.aa(B.z,n.gA())}throw A.a(A.G("Expected a key while parsing a block mapping.",n.gA().gC().bw()))},
f3(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()!==B.l){q.c=B.D
o=n.gA()
o=A.W(o.a,o.b)
s=o.b
return new A.ag(A.a_(o.a,s,s),p,p,"",B.h)}s=n.gA()
r=A.W(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.D
o=r.b
return new A.ag(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.D)
return q.bl(!0,!0)}},
dm(a){var s,r,q,p=this
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
return new A.aa(B.y,r.gA())},
fa(){return this.dm(!1)},
fb(){var s,r,q=this,p=q.a.a1()
if(p.gB()===B.l||p.gB()===B.o||p.gB()===B.r){s=p.gA()
r=A.W(s.a,s.b)
q.c=B.X
s=r.b
return new A.ag(A.a_(r.a,s,s),null,null,"",B.h)}else{B.b.t(q.b,B.X)
return q.b_()}},
fc(){var s,r=this,q=r.a,p=q.a1()
if(p.gB()===B.l){q.Z()
p=q.a1()
if(p.gB()!==B.o&&p.gB()!==B.r){B.b.t(r.b,B.Y)
return r.b_()}}r.c=B.Y
q=p.gA()
q=A.W(q.a,q.b)
s=q.b
return new A.ag(A.a_(q.a,s,s),null,null,"",B.h)},
dk(a){var s,r,q,p=this
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
s=A.W(s.a,s.b)
q=s.b
return new A.ag(A.a_(s.a,q,q),null,null,"",B.h)}}else if(r.gB()!==B.t){B.b.t(p.b,B.az)
return p.b_()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.aa(B.z,r.gA())},
f8(){return this.dk(!1)},
dl(a){var s,r=this,q=null,p=r.a,o=p.a1()
o.toString
if(a){r.c=B.G
p=o.gA()
p=A.W(p.a,p.b)
o=p.b
return new A.ag(A.a_(p.a,o,o),q,q,"",B.h)}if(o.gB()===B.l){p.Z()
s=p.a1()
if(s.gB()!==B.o&&s.gB()!==B.t){B.b.t(r.b,B.G)
return r.b_()}}else s=o
r.c=B.G
p=s.gA()
p=A.W(p.a,p.b)
o=p.b
return new A.ag(A.a_(p.a,o,o),q,q,"",B.h)},
f9(){return this.dl(!1)},
ds(){var s,r,q,p,o,n=this,m=n.a,l=m.a1()
l.toString
s=A.c([],t.l)
r=l
q=null
for(;;){if(!(r.gB()===B.P||r.gB()===B.Q))break
if(r instanceof A.dk){if(q!=null)throw A.a(A.G("Duplicate %YAML directive.",r.a))
l=r.b
if(l!==1||r.c===0)throw A.a(A.G("Incompatible YAML document. This parser only supports YAML 1.1 and 1.2.",r.a))
else{p=r.c
if(p>2)$.ko().$2("Warning: this parser only supports YAML 1.1 and 1.2.",r.a)}q=new A.h6(l,p)}else if(r instanceof A.dg){o=new A.bM(r.b,r.c)
n.ev(o,r.a)
B.b.t(s,o)}m.Z()
l=m.a1()
l.toString
r=l}m=r.gA()
m=A.W(m.a,m.b)
l=m.b
n.c2(new A.bM("!","!"),A.a_(m.a,l,l),!0)
l=r.gA()
l=A.W(l.a,l.b)
m=l.b
n.c2(new A.bM("!!","tag:yaml.org,2002:"),A.a_(l.a,m,m),!0)
return new A.b2(q,s)},
c2(a,b,c){var s=this.d,r=a.a
if(s.F(r)){if(c)return
throw A.a(A.G("Duplicate %TAG directive.",b))}s.j(0,r,a)},
ev(a,b){return this.c2(a,b,!1)}}
A.fP.prototype={
$1(a){var s=this.a
s.b=a.b
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:27}
A.fQ.prototype={
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
A.fT.prototype={
gdd(){var s,r=this.c.W()
if(r==null)return!1
switch(r){case 45:case 59:case 47:case 58:case 64:case 38:case 61:case 43:case 36:case 46:case 126:case 63:case 42:case 39:case 40:case 41:case 37:return!0
default:s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=122))s=r>=65&&r<=90
return s}},
geP(){if(!this.gd9())return!1
switch(this.c.W()){case 44:case 91:case 93:case 123:case 125:return!1
default:return!0}},
gd8(){var s=this.c.W()
return s!=null&&s>=48&&s<=57},
geR(){var s,r=this.c.W()
if(r==null)return!1
s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))s=r>=65&&r<=70
return s},
geT(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r)break A
if(9===r||133===r){s=!0
break A}s=this.cb(0)
break A}return s},
gd9(){var s,r=this.c.W()
A:{s=!1
if(r==null)break A
if(10===r||13===r||65279===r||32===r)break A
if(133===r){s=!0
break A}s=this.cb(0)
break A}return s},
Z(){var s,r,q,p,o=this
if(o.e)throw A.a(A.bi("Out of tokens."))
if(!o.w)o.d4()
s=o.f
r=s.b
if(r===s.c)A.D(A.bi("No element"))
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
if(!r.w)r.d4()
s=r.f
return s.gU(s)},
d4(){var s,r,q=this
for(s=q.f,r=q.z;;){if(s.gk(0)!==0){q.dD()
if(s.gk(0)===0)A.D(A.Z())
if(s.h(0,s.gk(0)-1).gB()===B.w)break
if(!B.b.R(r,new A.fU(q)))break}q.eK()}q.w=!0},
eK(){var s,r,q,p,o,n,m,l=this
if(!l.d){l.d=!0
s=l.f
r=l.c
r=A.W(r.f,r.c)
q=r.b
s.aw(s.$ti.c.a(new A.S(B.cB,A.a_(r.a,q,q))))
return}l.fv()
l.dD()
s=l.c
l.bK(s.at)
if(s.c===s.b.length){l.bK(-1)
l.aT()
l.y=!1
r=l.f
s=A.W(s.f,s.c)
q=s.b
r.aw(r.$ti.c.a(new A.S(B.w,A.a_(s.a,q,q))))
return}if(s.at===0){if(s.W()===37){l.bK(-1)
l.aT()
l.y=!1
p=l.fo()
if(p!=null){s=l.f
s.aw(s.$ti.c.a(p))}return}if(l.bG(3)){if(s.aI("---")){l.d0(B.R)
return}if(s.aI("...")){l.d0(B.S)
return}}}switch(s.W()){case 91:l.d2(B.at)
return
case 123:l.d2(B.ar)
return
case 93:l.d1(B.r)
return
case 125:l.d1(B.t)
return
case 44:l.aT()
l.y=!0
l.aY(B.o)
return
case 42:l.cZ(!1)
return
case 38:l.eH()
return
case 33:l.bn()
l.y=!1
r=l.f
q=s.c
if(s.P(1)===60){s.a0(s.a_())
s.a0(s.a_())
o=l.dA()
s.bR(">")
n=""}else{n=l.ft()
if(n.length>1&&B.a.u(n,"!")&&B.a.aG(n,"!"))o=l.fu(!1)
else{o=l.cl(!1,n)
if(o.length===0){n=null
o="!"}else n="!"}}r.aw(r.$ti.c.a(new A.bw(s.am(new A.ao(q)),n,o)))
return
case 39:l.d3(!0)
return
case 34:l.eJ()
return
case 124:if(l.z.length!==1)l.bF()
l.d_(!0)
return
case 62:if(l.z.length!==1)l.bF()
l.eI()
return
case 37:case 64:case 96:l.bF()
break
case 45:if(l.bj(1))l.bD()
else{if(l.z.length===1){if(!l.y)A.D(A.G("Block sequence entries are not allowed here.",s.gaD()))
l.ck(s.at,B.T,A.W(s.f,s.c))}l.aT()
l.y=!0
l.aY(B.u)}return
case 63:if(l.bj(1))l.bD()
else{r=l.z
if(r.length===1){if(!l.y)A.D(A.G("Mapping keys are not allowed here.",s.gaD()))
l.ck(s.at,B.C,A.W(s.f,s.c))}l.y=r.length===1
l.aY(B.k)}return
case 58:if(l.z.length!==1&&l.f.gk(0)!==0){s=l.f
m=s.gK(s)
s=!0
if(m.gB()!==B.r)if(m.gB()!==B.t)if(m.gB()===B.as){s=t.f2.a(m).c
s=s===B.B||s===B.M}else s=!1
if(s){l.d5()
return}}if(l.bj(1))l.bD()
else l.d5()
return
default:if(!l.geT())l.bF()
l.bD()
return}},
bF(){return this.c.cw("Unexpected character.",1)},
dD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.z,r=e.c,q=e.f,p=r.f,o=e.x,n=0;m=s.length,n<m;++n){l=s[n]
if(l==null)continue
if(m!==1)continue
if(l.c===r.as)continue
if(l.e){k=B.b.h1(o,new A.fV(l))
if(k>=0){if(!(k<o.length))return A.b(o,k)
j=o[k].b===B.T}else j=!1
m=j?"Expected ':'. If this is a list entry, it must start with '- '.":"Expected ':'."
i=r.c
new A.ca(p,i).cP(p,i)
h=new A.bl(p,i,i)
h.c1(p,i,i)
A.D(new A.cp(null,m.charCodeAt(0)==0?m:m,h))
m=l.a
i=e.r
h=l.b
g=h.a
h=h.b
f=new A.bl(g,h,h)
f.c1(g,h,h)
q.b8(q,m-i,new A.S(B.k,f))}B.b.j(s,n,null)}},
bn(){var s,r,q,p,o,n,m=this,l=m.z,k=l.length===1&&B.b.gK(m.x).a===m.c.at
if(!m.y)return
m.aT()
s=l.length
r=m.r
q=m.f.gk(0)
p=m.c
o=p.as
n=p.at
B.b.j(l,s-1,new A.bV(r+q,A.W(p.f,p.c),o,n,k))},
aT(){var s=this.z,r=B.b.gK(s)
if(r!=null&&r.e)throw A.a(A.G("Could not find expected ':' for simple key.",r.b.bw()))
B.b.j(s,s.length-1,null)},
eD(){var s=this.z,r=s.length
if(r===1)return
if(0>=r)return A.b(s,-1)
s.pop()},
dv(a,b,c,d){var s,r,q=this
if(q.z.length!==1)return
s=q.x
if(B.b.gK(s).a!==-1&&B.b.gK(s).a>=a)return
B.b.t(s,new A.ct(a,b))
s=c.b
r=new A.S(b,A.a_(c.a,s,s))
s=q.f
if(d==null)s.aw(s.$ti.c.a(r))
else s.b8(s,d-q.r,r)},
ck(a,b,c){return this.dv(a,b,c,null)},
bK(a){var s,r,q,p,o,n,m,l=this
if(l.z.length!==1)return
for(s=l.x,r=l.f,q=l.c,p=q.f,o=r.$ti.c;B.b.gK(s).a>a;){n=q.c
new A.ca(p,n).cP(p,n)
m=new A.bl(p,n,n)
m.c1(p,n,n)
r.aw(o.a(new A.S(B.p,m)))
if(0>=s.length)return A.b(s,-1)
s.pop()}},
d0(a){var s,r,q,p=this
p.bK(-1)
p.aT()
p.y=!1
s=p.c
r=s.c
s.ah()
s.ah()
s.ah()
q=p.f
q.aw(q.$ti.c.a(new A.S(a,s.am(new A.ao(r)))))},
d2(a){var s=this
s.bn()
B.b.t(s.z,null)
s.y=!0
s.aY(a)},
d1(a){var s=this
s.aT()
s.eD()
s.y=!1
s.aY(a)},
d5(){var s,r,q,p,o,n=this,m=n.z,l=B.b.gK(m)
if(l!=null){s=n.f
r=l.a
q=n.r
p=l.b
o=p.b
s.b8(s,r-q,new A.S(B.k,A.a_(p.a,o,o)))
n.dv(l.d,B.C,p,r)
B.b.j(m,m.length-1,null)
n.y=!1}else if(m.length===1){if(!n.y)throw A.a(A.G("Mapping values are not allowed here. Did you miss a colon earlier?",n.c.gaD()))
m=n.c
n.ck(m.at,B.C,A.W(m.f,m.c))
n.y=!0}else if(n.y){n.y=!1
n.aY(B.k)}n.aY(B.l)},
aY(a){var s,r=this.c,q=r.c
r.ah()
s=this.f
s.aw(s.$ti.c.a(new A.S(a,r.am(new A.ao(q)))))},
cZ(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fm(a)))},
eH(){return this.cZ(!0)},
d_(a){var s,r=this
r.aT()
r.y=!0
s=r.f
s.aw(s.$ti.c.a(r.fn(a)))},
eI(){return this.d_(!1)},
d3(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fq(a)))},
eJ(){return this.d3(!1)},
bD(){var s,r=this
r.bn()
r.y=!1
s=r.f
s.aw(s.$ti.c.a(r.fs()))},
fv(){var s,r,q,p,o,n,m=this
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
fo(){var s,r,q,p,o,n,m,l,k,j=this,i="Expected whitespace.",h=j.c,g=new A.ao(h.c)
h.a0(h.a_())
s=j.fp()
if(s==="YAML"){j.bo()
r=j.dB()
h.bR(".")
q=j.dB()
p=new A.dk(h.am(g),r,q)}else if(s==="TAG"){j.bo()
o=j.dz(!0)
if(!j.eQ(0))A.D(A.G(i,h.gaD()))
j.bo()
n=j.dA()
if(!j.bG(0))A.D(A.G(i,h.gaD()))
p=new A.dg(h.am(g),o,n)}else{m=h.am(g)
$.ko().$2("Warning: unknown directive.",m)
m=h.b.length
for(;;){if(h.c!==m){l=h.P(0)
k=l===13||l===10}else k=!0
if(!!k)break
h.ah()}return null}j.bo()
j.cm()
if(!(h.c===h.b.length||j.d7(0)))throw A.a(A.G("Expected comment or line break after directive.",h.am(g)))
j.bJ()
return p},
fp(){var s,r=this.c,q=r.c
while(this.gd9())r.ah()
s=r.D(0,q)
if(s.length===0)throw A.a(A.G("Expected directive name.",r.gaD()))
else if(!this.bG(0))throw A.a(A.G("Unexpected character in directive name.",r.gaD()))
return s},
dB(){var s,r,q=this.c,p=q.c
for(;;){s=q.W()
if(!(s!=null&&s>=48&&s<=57))break
q.a0(q.a_())}r=q.D(0,p)
if(r.length===0)throw A.a(A.G("Expected version number.",q.gaD()))
return A.cC(r,null,null)},
fm(a){var s,r,q,p,o=this.c,n=new A.ao(o.c)
o.ah()
s=o.c
while(this.geP())o.ah()
r=o.D(0,s)
q=o.W()
if(r.length!==0)p=!this.bG(0)&&q!==63&&q!==58&&q!==44&&q!==93&&q!==125&&q!==37&&q!==64&&q!==96
else p=!0
if(p)throw A.a(A.G("Expected alphanumeric character.",o.gaD()))
if(a)return new A.bp(o.am(n),r)
else return new A.cH(o.am(n),r)},
dz(a){var s,r,q,p=this.c
p.bR("!")
s=new A.X("!")
r=p.c
while(this.gdd())p.a0(p.a_())
q=p.D(0,r)
q=s.a+=q
if(p.W()===33)p=s.a=q+A.A(p.ah())
else{if(a&&(q.charCodeAt(0)==0?q:q)!=="!")p.bR("!")
p=q}return p.charCodeAt(0)==0?p:p},
ft(){return this.dz(!1)},
cl(a,b){var s,r,q,p
if((b==null?0:b.length)>1){b.toString
B.a.D(b,1)}s=this.c
r=s.c
q=s.W()
for(;;){if(!this.gdd())if(a)p=q===44||q===91||q===93
else p=!1
else p=!0
if(!p)break
s.a0(s.a_())
q=s.W()}s=s.D(0,r)
return A.ak(s,0,s.length,B.e,!1)},
dA(){return this.cl(!0,null)},
fu(a){return this.cl(a,null)},
fn(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="0 may not be used as an indentation indicator.",a2=a0.c,a3=new A.ao(a2.c)
a2.ah()
s=a2.W()
r=s===43
q=0
if(r||s===45){p=r?B.W:B.V
a2.ah()
if(a0.gd8()){if(a2.W()===48)throw A.a(A.G(a1,a2.am(a3)))
q=a2.ah()-48}}else if(a0.gd8()){if(a2.W()===48)throw A.a(A.G(a1,a2.am(a3)))
q=a2.ah()-48
s=a2.W()
r=s===43
if(r||s===45){p=r?B.W:B.V
a2.ah()}else p=B.au}else p=B.au
a0.bo()
a0.cm()
r=a2.b
o=r.length
if(!(a2.c===o||a0.d7(0)))throw A.a(A.G("Expected comment or line break.",a2.gaD()))
a0.bJ()
if(q!==0){n=a0.x
m=B.b.gK(n).a>=0?B.b.gK(n).a+q:q}else m=0
l=a0.dw(m)
m=l.a
k=l.b
j=new A.X("")
i=new A.ao(a2.c)
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
a=new A.ao(i)
h=i!==o?a0.b7():"\n"
l=a0.dw(m)
m=l.a
k=l.b
i=a}if(p!==B.V){r=f+h
j.a=r}else r=f
if(p===B.W)r=j.a=r+k
a2=a2.c_(a3,i)
o=a4?B.O:B.N
return new A.bu(a2,r.charCodeAt(0)==0?r:r,o)},
dw(a){var s,r,q,p,o,n,m,l=new A.X("")
for(s=this.c,r=a===0,q=!r,p=0;;){for(;;){if(!((!q||s.at<a)&&s.W()===32))break
s.a0(s.a_())}o=s.at
if(o>p)p=o
n=s.P(0)
if(!(n===13||n===10))break
m=this.b7()
l.a+=m}if(r){s=this.x
a=p<B.b.gK(s).a+1?B.b.gK(s).a+1:p}s=l.a
return new A.dw(a,s.charCodeAt(0)==0?s:s)},
fq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.c,b=new A.X("")
d.a0(d.a_())
for(s=!a,r=d.b.length;;){q=!1
if(d.at===0){p=d.P(3)
if(p==null||p===32||p===9||p===13||p===10)q=d.aI("---")||d.aI("...")}if(q)d.fU("Unexpected document indicator.")
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
break}else if(s&&p===92){m=new A.ao(d.c)
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
if(l!=null){for(k=0,j=0;j<l;++j){if(!e.geR()){d.a0(d.a_())
throw A.a(A.G("Expected "+A.m(l)+"-digit hexidecimal number.",d.am(m)))}i=d.a_()
d.a0(i)
k=(k<<4>>>0)+e.ew(i)}if(k>=55296&&k<=57343||k>1114111)throw A.a(A.G("Invalid Unicode character escape code.",d.am(m)))
q=A.A(k)
b.a+=q}}else{q=A.A(d.ah())
b.a+=q}}}q=d.W()
if(q===(a?39:34))break
h=new A.X("")
g=new A.X("")
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
d=d.am(new A.ao(c))
c=b.a
s=a?B.B:B.M
return new A.bu(d,c.charCodeAt(0)==0?c:c,s)},
fs(){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=j.c,h=new A.ao(i),g=new A.X(""),f=new A.X(""),e=B.b.gK(k.x).a+1
for(s=k.z,r="",q="";;){p=""
o=!1
if(j.at===0){n=j.P(3)
if(n==null||n===32||n===9||n===13||n===10)o=j.aI("---")||j.aI("...")}if(o)break
if(j.W()===35)break
if(k.da(0))if(r.length!==0){if(q.length===0){o=A.A(32)
g.a+=o}else g.a+=q
r=p
q=""}else{g.a+=f.n(0)
f.a=""}m=j.c
while(k.da(0))j.ah()
h=j.c
g.a+=B.a.v(j.b,m,h)
h=new A.ao(h)
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
j=j.c_(new A.ao(i),h)
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
eQ(a){var s=this.c.P(a)
return s===32||s===9},
d7(a){var s=this.c.P(a)
return s===13||s===10},
bG(a){var s=this.c.P(a)
return s==null||s===32||s===9||s===13||s===10},
da(a){var s,r=this.c
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
ew(a){if(a<=57)return a-48
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
A.fU.prototype={
$1(a){t.b2.a(a)
return a!=null&&a.a===this.a.r},
$S:66}
A.fV.prototype={
$1(a){return t.eY.a(a).a===this.a.d},
$S:28}
A.bV.prototype={}
A.dp.prototype={
bi(){return"_Chomping."+this.b}}
A.bt.prototype={
n(a){return this.a}}
A.cJ.prototype={
n(a){return this.a}}
A.S.prototype={
n(a){return this.a.bi()},
gB(){return this.a},
gA(){return this.b}}
A.dk.prototype={
gB(){return B.P},
n(a){return"VERSION_DIRECTIVE "+this.b+"."+this.c},
$iS:1,
gA(){return this.a}}
A.dg.prototype={
gB(){return B.Q},
n(a){return"TAG_DIRECTIVE "+this.b+" "+this.c},
$iS:1,
gA(){return this.a}}
A.bp.prototype={
gB(){return B.cD},
n(a){return"ANCHOR "+this.b},
$iS:1,
gA(){return this.a}}
A.cH.prototype={
gB(){return B.cC},
n(a){return"ALIAS "+this.b},
$iS:1,
gA(){return this.a}}
A.bw.prototype={
gB(){return B.cE},
n(a){return"TAG "+A.m(this.b)+" "+this.c},
$iS:1,
gA(){return this.a}}
A.bu.prototype={
gB(){return B.as},
n(a){return"SCALAR "+this.c.n(0)+' "'+this.b+'"'},
$iS:1,
gA(){return this.a}}
A.Y.prototype={
bi(){return"TokenType."+this.b}}
A.km.prototype={
$2(a,b){a=b.dZ(a)
A.rc(a)},
$1(a){return this.$2(a,null)},
$S:20}
A.eA.prototype={
n(a){var s=this.a
return s.n(s)}}
A.h6.prototype={
n(a){return"%YAML "+this.a+"."+this.b}}
A.bM.prototype={
n(a){return"%TAG "+this.a+" "+this.b}}
A.cp.prototype={}
A.O.prototype={
gA(){return this.a}}
A.bP.prototype={
ga7(){return this},
gE(){return this.b.a.gE().ac(0,new A.hg(),t.z)},
h(a,b){var s=this.b.a.h(0,b)
return s==null?null:s.ga7()},
$iw:1,
gM(){return this.b},
ga2(){return this.c}}
A.hg.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.bO.prototype={
ga7(){return this},
gk(a){return this.b.a.length},
sk(a,b){throw A.a(A.M("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.U(b)
s=this.b.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga7()},
j(a,b,c){throw A.a(A.M("Cannot modify an unmodifiable List"))},
$ix:1,
$if:1,
$ip:1,
gM(){return this.b},
ga2(){return this.c}}
A.an.prototype={
n(a){return J.al(this.b)},
ga7(){return this.b},
ga2(){return this.c}}
A.eR.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.h7.prototype={
n(a){return this.b},
d6(){var s=t.T
this.d=A.aS(s)
new A.h9(this,A.aS(s)).$1(this.c)},
G(a,b){var s,r,q,p,o,n,m,l,k=this,j=A.at(b,B.i,B.j)
if(a.length===0){s=k.c.gA().gC().gL()
return k.bm(A.av(s,A.bZ(k.c)-s,A.dM(j,0,A.dK(k.b))),a,j)}r=A.c(a.slice(0),A.t(a))
q=A.aW(r,0,A.eX(a.length-1,"count",t.p),A.t(r).c)
p=B.b.gK(r)
o=k.dI(q,!0)
if(t.h.b(o)){if(!A.b3(p))throw A.a(A.fR(a,a,o))
n=A.o(o.gM(),t.T)
B.b.j(n,p,j)
m=A.at(n,B.i,B.j)
return k.bm(A.rI(k,o,p,j),q,m)}if(t.S.b(o)){l=A.ll(o,new A.hd(p,j))
return k.bm(A.rJ(k,o,p,j),q,l)}throw A.a(new A.d4(a,a,null,!1,null,null,"Scalar "+o.n(o)+" does not have key "+A.m(p)))},
I(a,b){var s,r,q,p,o,n=this,m=A.m4(),l=A.m4(),k=n.dI(b,!0)
if(b.length===0){m.b=A.av(0,n.b.length,"")
l.b=A.at(null,B.i,B.j)
n.bm(m.bI(),b,l.bI())
return k}s=A.c(b.slice(0),A.t(b))
r=A.aW(s,0,A.eX(b.length-1,"count",t.p),A.t(s).c)
q=B.b.gK(s)
p=n.dH(r)
if(t.h.b(p)){A.U(q)
m.b=A.rl(n,p,q)
o=A.o(p.gM(),t.T)
B.b.bc(o,q)
l.b=A.at(o,B.i,B.j)}else if(t.S.b(p)){m.b=A.rm(n,p,q)
l.b=A.ll(p,new A.hc(q))}n.bm(m.bI(),r,l.bI())
return k},
co(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=J.C(a)
if(j.gJ(a))return k.c
s=k.c
r=j.aR(a)
for(q=t.S,p=t.h,o=0;o<r.length;++o){n=r[o]
if(b&&k.d.p(0,s))throw A.a(A.f7(a,s))
if(p.b(s)){m=s.gk(s)
if(!(A.b3(n)&&n>=0&&n<m))return k.ci(a,j.a3(a,o+1),s,c)
s=J.l(s.gM(),n)}else{if(q.b(s)){if(!A.l3(s,n))return k.ci(a,j.a3(a,o+1),s,c)
l=A.n9(s,n)
if(b)if(k.d.p(0,l))throw A.a(A.f7(a,l))
m=s.gM().h(0,l)
m.toString}else return k.ci(a,j.a3(a,o+1),s,c)
s=m}}if(b)k.bB(a,s)
return s},
dI(a,b){return this.co(a,b,null)},
dH(a){return this.co(a,!1,null)},
cn(a,b){return this.co(a,!1,b)},
ci(a,b,c,d){var s=A.fR(a,b,c)
throw A.a(s)},
bB(a,b){var s,r,q,p,o,n=this
if(b==null)return n.bB(a,n.dH(a))
if(n.d.p(0,b))throw A.a(A.f7(a,b))
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
throw A.a(A.f7(a,t.T.a(p[r])))}o=b.gM()
if(!(r<p.length))return A.b(p,r)
n.bB(q,o.h(0,p[r]))}}},
bm(a,b,c){var s,r=this,q=r.c7(r.c,b,[],c),p=r.b,o=p,n=a.a,m=B.a.aX(p,n,n+a.b,a.c),l=null
try{l=A.ns(new A.hb(m),t.T)}catch(s){if(A.c3(s) instanceof A.cp)throw A.a(A.n2("Failed to produce valid YAML after modification.",o,m))
else throw s}if(!A.bm(l,q))throw A.a(A.n2("Modification did not result in expected result.",o,m))
r.b=m
r.c=l
B.b.t(r.a,a)
r.d6()},
c7(a,b,c,d){var s,r,q=J.C(c),p=J.C(b)
A.ci(q.gk(c),0,p.gk(b),null)
if(p.gk(b)===q.gk(c))return d
s=p.T(b,q.gk(c))
if(t.h.b(a)){if(!A.qZ(s,a.gk(a)))throw A.a(A.fR(b,c,a))
r=A.o(a.gM(),t.T)
A.U(s)
B.b.j(r,s,this.c7(J.l(a.gM(),s),b,p.a3(b,q.gk(c)+1),d))
return A.at(r,B.i,B.j)}if(t.S.b(a))return A.ll(a,new A.h8(this,s,b,c,d))
throw A.a(A.fR(b,c,a))}}
A.h9.prototype={
$1(a){var s=this
t.T.a(a)
if(s.b.t(0,a)){if(t.S.b(a))a.gM().an(0,new A.ha(s))
else if(t.h.b(a))J.nQ(a.gM(),s)}else s.a.d.t(0,a)},
$S:30}
A.ha.prototype={
$2(a,b){var s,r=t.T
r.a(b)
s=this.a
s.$1(r.a(a))
s.$1(b)},
$S:31}
A.hd.prototype={
$1(a){var s=this.b
a.j(0,this.a,s)
return s},
$S:21}
A.hc.prototype={
$1(a){return a.I(0,this.a)},
$S:33}
A.hb.prototype={
$0(){return A.f_(this.a,null,!1,null).a},
$S:19}
A.h8.prototype={
$1(a){var s=this,r=s.b,q=s.c
q=s.a.c7(t.T.a(a.h(0,r)),q,J.nZ(q,J.a6(s.d)+1),s.e)
a.j(0,r,q)
return q},
$S:21}
A.j9.prototype={
$1(a){var s,r=this.a
if(!A.l3(r.b,a))return!1
s=A.qJ(r.b,a)
if(!A.bm(r.a.h(0,a),r.b.h(0,s)))return!1
return!0},
$S:2}
A.iT.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iU.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iD.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.d4.prototype={
n(a){var s,r,q=this,p=q.d
if(p==null){p=q.f
s="Failed to traverse to subpath "+A.m(p)+"!"
r=J.C(p)
if(r.gb4(p))s+=" Parent "+A.m(q.r)+" does not contain key or index "+A.m(r.gK(p))
return"Invalid path: "+A.m(q.e)+". "+s+"."}return"Invalid path: "+A.m(q.e)+". "+A.m(p)}}
A.dO.prototype={}
A.eP.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+s
return"Assertion failed"}}
A.i2.prototype={
$0(){var s=J.l(this.a.gM(),this.b+1).gA(),r=s.gC().gL(),q=this.c,p=B.a.ae(q,"-",s.gk(s)===0?r:r-1),o=B.a.ae(q,"\n",p)
return new A.cv(o,p-(o+1))},
$S:15}
A.i3.prototype={
$0(){var s=t.T.a(this.b.gM().gE().T(0,this.a.a+1)).gA().gC()
return new A.cv(B.a.ae(this.c,"\n",s.gL()),s.gab())},
$S:15}
A.db.prototype={
S(a,b){if(b==null)return!1
if(b instanceof A.db)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gY(a){return B.d.gY(this.a)^B.d.gY(this.b)^B.a.gY(this.c)},
hc(){return A.a4(["offset",this.a,"length",this.b,"replacement",this.c],t.N,t.z)},
n(a){return"SourceEdit("+this.a+", "+this.b+', "'+this.c+'")'},
gk(a){return this.b}}
A.i9.prototype={
$3(a,b,c){var s,r,q,p=this
A.e(b)
A.e(c)
if(B.a.N(c).length!==0){s=p.a
r=a-1
if(!(r>=0&&r<s.length))return A.b(s,r)
s=B.a.N(s[r]).length!==0&&!B.a.u(B.a.e7(c,p.b,"")," ")}else s=!1
q=s?p.c+c:c
return b+p.c+q},
$S:37}
A.kl.prototype={
$1(a){t.x.a(a)
return A.bn(t.T.a(a.a))+": "+A.bn(a.b)},
$S:23}
A.kj.prototype={
$1(a){var s,r,q
t.T.a(a)
s=this.a
r=A.dM(a,s,this.b)
if(t.f.b(a)||t.j.b(a)){q=A.hh(a)
q=q!==B.f}else q=!1
if(q)r=B.a.D(r,s)
return B.a.aj(" ",this.c)+"- "+r},
$S:24}
A.kk.prototype={
$1(a){var s,r,q,p,o
t.x.a(a)
s=a.b
r=A.bn(t.T.a(a.a))
q=B.a.aj(" ",this.a)+r
p=this.c
o=A.dM(s,this.b,p)
if((t.f.b(s)||t.j.b(s))&&!A.lb(s))return q+":"+p+o
return q+": "+o},
$S:23}
A.j6.prototype={
$0(){return A.f_(this.a,null,!1,null).a},
$S:19}
A.iV.prototype={
$1(a){return J.al(a)},
$S:3}
A.iW.prototype={
$1(a){return B.a.aC(A.e(a),this.a)>0},
$S:0}
A.eD.prototype={
n(a){return J.al(this.c)},
$iO:1,
$ian:1,
ga2(){return this.a},
gA(){return this.b},
ga7(){return this.c}}
A.eC.prototype={
h(a,b){var s=this.b.h(0,b)
return s==null?null:s.ga7()},
gE(){var s=this.b,r=A.j(s).i("ai<1>")
return A.fM(new A.ai(s,r),r.i("@(f.E)").a(new A.hf()),r.i("f.E"),t.z)},
ga7(){return this},
$iw:1,
$iO:1,
$ibP:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hf.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.eB.prototype={
gk(a){return this.b.length},
sk(a,b){throw A.a(A.M("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.U(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga7()},
j(a,b,c){throw A.a(A.M("Cannot modify an unmodifiable List"))},
ga7(){return this},
$ix:1,
$if:1,
$ip:1,
$iO:1,
$ibO:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.he.prototype={
$1(a){return A.at(a,this.a,this.b)},
$S:41}
A.eQ.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.jU.prototype={
$1(a){return!this.a.F(A.e(a))},
$S:0}
A.kb.prototype={
$1(a){return B.a.N(A.e(a)).length===0},
$S:0}
A.id.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.c9)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a7)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.k2.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.k3.prototype={
$1(a){return J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.k4.prototype={
$1(a){var s,r
t.a9.a(a)
s=this.a
r=a.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return a.b!==s[r]},
$S:44}
A.k5.prototype={
$1(a){A.e(a)
return!B.b.p(A.iB(this.a),a)},
$S:0}
A.k6.prototype={
$1(a){return A.e(a)==="DIRECT"},
$S:0}
A.iF.prototype={
$1(a){var s,r
t.P.a(a)
s=this.a
if(!J.u(a.h(0,"name"),s)){r=t.g.a(a.h(0,"proxies"))
s=J.bo(r==null?[]:r,s)}else s=!1
return s},
$S:12}
A.iG.prototype={
$1(a){return J.u(J.l(a,"dialer-proxy"),this.a)},
$S:2}
A.iH.prototype={
$1(a){A.e(a)
return A.lg(a,this.a,"__deleted__")!==a},
$S:0}
A.iI.prototype={
$1(a){return!J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.jn.prototype={
$1(a){return A.f1(a,this.a+1)},
$S:45}
A.jf.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash ")},
$S:0}
A.iY.prototype={
$1(a){return B.a.N(A.e(a))==="# Mclash OpenWrt \u63a7\u5236: true"},
$S:0}
A.iZ.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt \u63a5\u7ba1: ")},
$S:0}
A.j7.prototype={
$3(a,b,c){return A.nd(A.e(a),A.e(b),A.e(c),!1)},
$S:46}
A.iy.prototype={
$1(a){var s
if(B.a.N(A.e(a))!=="# Mclash OpenWrt \u63a7\u5236: true")return!0
s=this.a
if(s.a)return!1
return s.a=!0},
$S:0}
A.j4.prototype={
$1(a){var s
A.e(a)
s=A.I("^(0|[1-9][0-9]{0,2})$",!0)
return!s.b.test(a)||A.cC(a,null,null)>255},
$S:0}
A.j5.prototype={
$2(a,b){return A.U(a)*256+A.cC(A.e(b),null,null)},
$S:47}
A.kc.prototype={
$1(a){var s
A.e(a)
s=t.s
return a.length===0?A.c([],s):A.c(a.split(":"),s)},
$S:72}
A.kd.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9a-fA-F]{1,4}$",!0)
return!s.b.test(a)},
$S:0}
A.iz.prototype={
$1(a){var s
A.e(a)
s=A.I("^[A-Za-z0-9_.-]{1,15}$",!0)
return!s.b.test(a)||B.b.p(A.c(["lo","Mclash"],t.s),a)},
$S:0}
A.io.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash OpenWrt \u63a5\u7ba1: ")},
$S:0}
A.il.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9]{1,3}$",!0)
return s.b.test(a)&&A.cC(a,null,null)<=255},
$S:0}
A.im.prototype={
$1(a){return B.a.N(A.e(a))!=="# Mclash OpenWrt \u63a7\u5236: true"},
$S:0}
A.kg.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u624b\u52a8\u8282\u70b9: ")},
$S:0}
A.jm.prototype={
$2(a,b){var s=this.a.a.h(0,a)
s=s==null?null:B.a.N(J.al(s))
return s==null?b:s},
$1(a){return this.$2(a,"")},
$S:49}
A.jl.prototype={
$2$fallback(a,b){var s=this.a.$1(a),r=s.length===0?b:A.aU(s,null)
if(r==null)throw A.a(A.B("VMess "+a+" \u5fc5\u987b\u662f\u6574\u6570",null,null))
return r},
$1(a){return this.$2$fallback(a,null)},
$S:50}
A.jg.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jh.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ji.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jj.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jk.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.ii.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.ij.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ik.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.iK.prototype={
$1(a){return!J.u(a,this.a)},
$S:2}
A.iL.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.ja.prototype={
$1(a){return this.a.p(0,J.l(a,"name"))},
$S:2}
A.jb.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jc.prototype={
$1(a){return!this.a.p(0,J.l(a,"name"))},
$S:2}
A.kf.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u624b\u52a8\u8282\u70b9: ")},
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
A.hI.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.hJ.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.ic.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.ai)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a7)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.ih.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")},
$S:0}
A.is.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.it.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iu.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jM.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.jN.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jO.prototype={
$2(a,b){var s
A.e(a)
A.e(b)
s=this.a
return a===s||b===s},
$S:13}
A.jP.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jQ.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jR.prototype={
$2(a,b){A.e(a)
t.a.a(b)
return!B.a.aG(a,"Targets")&&J.cE(b)},
$S:53}
A.jS.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.jT.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.jz.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.je.prototype={
$2(a,b){A.U(a)
A.U(b)
return b>a?b:a},
$S:54}
A.jX.prototype={
$1(a){return t.fk.a(a).a!==this.a},
$S:55}
A.jY.prototype={
$1(a){var s
t.fk.a(a)
s=this.a?"back":"front"
s=a.b.h(0,s)
return s==null?A.c([],t.s):s},
$S:56}
A.hO.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hP.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")&&A.re(a)==null},
$S:0}
A.hQ.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hR.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.jV.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.jA.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hG.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.hH.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.ib.prototype={
$1(a){var s,r,q,p=this,o=p.a
if(o.p(0,a))throw A.a(B.ai)
if(!p.b.t(0,a))return
o.t(0,a)
s=p.c.h(0,a)
if(s==null)s=A.c([],t.s)
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.a7)(s),++q)p.$1(s[q])
o.I(0,a)},
$S:11}
A.ig.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")},
$S:0}
A.ip.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.iq.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.ir.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jy.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.hK.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hL.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")&&A.rd(a)==null},
$S:0}
A.hM.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hN.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.iC.prototype={
$1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.m(q.a),this.$1(q.b))}return s}if(t.j.b(a)){s=J.aR(a,this,t.z)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
$S:1}
A.k7.prototype={
$1(a){t.aw.a(a)
return a.a!==this.a&&J.u(a.b.h(0,"path"),this.b)},
$S:58}
A.k8.prototype={
$1(a){return typeof a!="string"||B.a.N(a).length===0},
$S:2}
A.k9.prototype={
$1(a){return A.rw(a,A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jo(this.b)+"\\s*(?=[,)])",!0),t.ey.a(t.gQ.a(new A.ka(this.a))),null)},
$S:4}
A.ka.prototype={
$1(a){return A.m(a.h(0,1))+"RULE-SET,"+this.a.a},
$S:59}
A.iJ.prototype={
$1(a){var s
A.e(a)
s=A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jo(this.a)+"\\s*(?=[,)])",!0)
return s.b.test(a)},
$S:0}
A.hv.prototype={
aN(a,b,c){var s,r,q,p,o
t.a.a(b)
for(s=J.a3(b),r=s.gq(b),q=this.a,p=null;r.l();){o=q.I(0,r.gm())
if(o==null)continue
if(p!=null&&p!==o)throw A.a(A.B("\u8282\u70b9\u53c2\u6570\u522b\u540d\u51b2\u7a81\uff1a"+A.m(s.gU(b)),null,null))
p=o}return p==null?c:p},
a3(a,b){return this.aN(0,b,"")},
dO(a){var s,r
t.a.a(a)
s=this.a3(0,a)
if(s.length===0)return null
r=t.s
if(B.b.p(A.c(["1","true"],r),s.toLowerCase()))return!0
if(B.b.p(A.c(["0","false"],r),s.toLowerCase()))return!1
throw A.a(A.B("\u8282\u70b9\u53c2\u6570 "+A.m(J.lu(a))+" \u5fc5\u987b\u662f true/false \u6216 1/0",null,null))},
fV(){var s,r,q
for(s=["remarks","group"],r=this.a,q=0;q<2;++q)r.I(0,s[q])
if(r.a!==0)throw A.a(B.ck)}}
A.i6.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.i7.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i8.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i5.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i_.prototype={
$1(a){return J.a6(t.a.a(a))>1},
$S:60}
A.i0.prototype={
$1(a){A.hT(a)
return a==null||a<1||a>65535},
$S:61}
A.i4.prototype={
$1(a){var s
A.e(a)
if(a.length!==0){s=A.I("^[1-9]\\d*-$",!0)
s=!s.b.test(a)}else s=!1
return s},
$S:0}
A.jZ.prototype={
$1(a){A.e(a)
return a.length!==0&&B.a.u(this.a,a)},
$S:0}
A.k_.prototype={
$1(a){var s,r=t.D
r.a(a)
s=A.T("")
s.G([],A.a4(["proxies",a],t.N,r))
return s.b},
$S:62}
A.jd.prototype={
$1(a){return t.P.a(a).h(0,"name")},
$S:63}
A.ix.prototype={
$1(a){return B.b.p(this.a,a)||this.b.p(0,a)},
$S:2}
A.hZ.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
$S:2}
A.jH.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jI.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.jJ.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:13}
A.jK.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jL.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.ki.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")&&!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u300c")&&!B.q.gag().R(0,B.a.gcO(a))&&a!=="# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605"},
$S:0}
A.ju.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jv.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.jw.prototype={
$2(a,b){A.e(a)
A.hS(b)
return!this.a.p(0,a)},
$S:26}
A.ke.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.iw.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.hY.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
$S:2}
A.jC.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.jD.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.jE.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:13}
A.jF.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jG.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kh.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")&&!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u300c")&&!B.q.gag().R(0,B.a.gcO(a))&&a!=="# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605"},
$S:0}
A.jr.prototype={
$1(a){return J.l(a,"name")},
$S:1}
A.js.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.jt.prototype={
$2(a,b){A.e(a)
A.hS(b)
return!this.a.p(0,a)},
$S:26}
A.iv.prototype={
$1(a){return A.e(J.l(a,"name"))},
$S:3}
A.iP.prototype={
$2(a,b){return J.al(a).toLowerCase()==="host"},
$S:14}
A.iQ.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0}
A.iN.prototype={
$2(a,b){return J.al(a).toLowerCase()==="host"},
$S:14}
A.iO.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0};(function aliases(){var s=J.bs.prototype
s.ej=s.n
s=A.aB.prototype
s.ef=s.dR
s.eg=s.dS
s.ei=s.dU
s.eh=s.dT
s=A.r.prototype
s.ek=s.al
s=A.f.prototype
s.bh=s.aJ
s=A.ck.prototype
s.em=s.aC
s.el=s.S
s=A.eq.prototype
s.a_=s.h7
s.eo=s.bA
s.en=s.aI
s=A.dH.prototype
s.ep=s.n})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_2,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._static_0
s(J.J.prototype,"ga5","p",7)
r(J.bq.prototype,"gcO",1,1,null,["$2","$1"],["a4","u"],29,0,0)
q(A.b9.prototype,"gdQ","fX",0)
p(A,"qg","pq",9)
o(A,"qh","pr",6)
s(A.ax.prototype,"ga5","p",7)
s(A.r.prototype,"ga5","p",7)
o(A,"ql","ps",1)
o(A,"qp","qO",6)
n(A,"qq",1,null,["$3$onError$radix","$1"],["cC",function(a){return A.cC(a,null,null)}],67,0)
n(A,"qr",1,null,["$2$radix","$1"],["ne",function(a){return A.ne(a,null)}],68,0)
p(A,"qo","qN",9)
o(A,"qm","oB",4)
m(A,"qn","p9",69)
p(A,"n1","q1",70)
s(A.f.prototype,"ga5","p",7)
p(A,"qD","qu",9)
o(A,"qE","qv",6)
p(A,"qF","bm",14)
o(A,"iR","qw",6)
o(A,"rA","bn",24)
n(A,"rK",1,null,["$2","$1"],["mI",function(a){return A.mI(a,null)}],20,0)
o(A,"rC","i1",52)
n(A,"r4",2,null,["$1$2","$2"],["nh",function(a,b){return A.nh(a,b,t.H)}],48,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.kx,J.e1,A.d8,J.b6,A.R,A.r,A.fW,A.f,A.a2,A.d0,A.bk,A.cQ,A.da,A.cP,A.dm,A.bE,A.aL,A.aw,A.z,A.ay,A.cf,A.cK,A.bR,A.bf,A.aq,A.h_,A.ea,A.fF,A.ah,A.aC,A.ba,A.b9,A.cr,A.dn,A.cl,A.eO,A.hk,A.aV,A.eI,A.hx,A.dz,A.eL,A.bS,A.ds,A.ap,A.aI,A.dU,A.hj,A.hi,A.hr,A.hE,A.hB,A.hm,A.ec,A.dd,A.eH,A.i,A.L,A.bd,A.X,A.dE,A.h1,A.aO,A.dV,A.cd,A.cy,A.dv,A.aN,A.f9,A.fZ,A.fN,A.ee,A.fX,A.el,A.ck,A.fc,A.ae,A.aE,A.bI,A.em,A.eq,A.ao,A.hl,A.aa,A.cO,A.c7,A.cG,A.dH,A.fJ,A.fO,A.a0,A.fT,A.bV,A.bt,A.cJ,A.S,A.dk,A.dg,A.bp,A.cH,A.bw,A.bu,A.eA,A.h6,A.bM,A.O,A.h7,A.db,A.eD,A.eS,A.eQ,A.hv])
q(J.e1,[J.e3,J.cS,J.cV,J.cU,J.cW,J.cT,J.bq])
q(J.cV,[J.bs,J.J,A.d1])
q(J.bs,[J.ef,J.cm,J.br])
r(J.e2,A.d8)
r(J.fz,J.J)
q(J.cT,[J.cR,J.e4])
q(A.R,[A.cZ,A.dh,A.e5,A.et,A.ej,A.eG,A.cY,A.c4,A.aZ,A.dj,A.es,A.bK,A.dT])
r(A.cn,A.r)
q(A.cn,[A.aH,A.di])
q(A.f,[A.x,A.bb,A.q,A.aA,A.bg,A.dl,A.b8,A.bQ,A.eE,A.eN,A.bx])
q(A.x,[A.y,A.bD,A.ai,A.aD,A.P,A.dr])
q(A.y,[A.bL,A.H,A.eM,A.d7,A.eK])
r(A.bC,A.bb)
r(A.c9,A.bg)
r(A.c8,A.b8)
q(A.z,[A.co,A.aB,A.eJ])
r(A.d_,A.co)
q(A.ay,[A.aX,A.cs])
q(A.aX,[A.b2,A.ct,A.bU,A.cu,A.dw,A.cv])
r(A.dx,A.cs)
r(A.cx,A.cf)
r(A.b1,A.cx)
r(A.cL,A.b1)
r(A.aJ,A.cK)
q(A.bf,[A.cM,A.dy])
r(A.cN,A.cM)
q(A.aq,[A.e0,A.dR,A.dS,A.er,A.fB,A.j0,A.j2,A.ht,A.fK,A.hp,A.hA,A.fa,A.fb,A.ia,A.fe,A.fd,A.ff,A.fh,A.fj,A.fg,A.fx,A.iE,A.fP,A.fQ,A.fU,A.fV,A.km,A.hg,A.h9,A.hd,A.hc,A.h8,A.j9,A.iT,A.iU,A.iD,A.i9,A.kl,A.kj,A.kk,A.iV,A.iW,A.hf,A.he,A.jU,A.kb,A.id,A.k2,A.k3,A.k4,A.k5,A.k6,A.iF,A.iG,A.iH,A.iI,A.jn,A.jf,A.iY,A.iZ,A.j7,A.iy,A.j4,A.kc,A.kd,A.iz,A.io,A.il,A.im,A.kg,A.jm,A.jl,A.jg,A.jh,A.ji,A.jj,A.jk,A.ii,A.ij,A.ik,A.iK,A.iL,A.ja,A.jb,A.jc,A.kf,A.jW,A.jB,A.hI,A.hJ,A.ic,A.ih,A.is,A.it,A.iu,A.jM,A.jN,A.jP,A.jQ,A.jS,A.jT,A.jz,A.jX,A.jY,A.hO,A.hP,A.hQ,A.hR,A.jV,A.jA,A.hG,A.hH,A.ib,A.ig,A.ip,A.iq,A.ir,A.jy,A.hK,A.hL,A.hM,A.hN,A.iC,A.k7,A.k8,A.k9,A.ka,A.iJ,A.i6,A.i7,A.i8,A.i5,A.i_,A.i0,A.i4,A.jZ,A.k_,A.jd,A.ix,A.hZ,A.jH,A.jI,A.jK,A.jL,A.ki,A.ju,A.jv,A.ke,A.iw,A.hY,A.jC,A.jD,A.jF,A.jG,A.kh,A.jr,A.js,A.iv,A.iQ,A.iO])
r(A.cb,A.e0)
r(A.d3,A.dh)
q(A.er,[A.ep,A.c6])
q(A.dS,[A.fA,A.j1,A.fH,A.fL,A.hs,A.h3,A.h2,A.fi,A.ha,A.j5,A.jO,A.jR,A.je,A.jJ,A.jw,A.jE,A.jt,A.iP,A.iN])
q(A.aB,[A.cX,A.dq])
r(A.b0,A.d1)
r(A.dt,A.b0)
r(A.du,A.dt)
r(A.bc,A.du)
q(A.bc,[A.e9,A.d2,A.bG])
r(A.cw,A.eG)
r(A.ax,A.dy)
r(A.cq,A.ax)
q(A.dR,[A.hD,A.hC,A.fw,A.fk,A.fr,A.fs,A.ft,A.fu,A.fp,A.fq,A.fl,A.fm,A.fn,A.fo,A.fv,A.hn,A.hb,A.i2,A.i3,A.j6])
q(A.aI,[A.c5,A.dX,A.e6])
q(A.dU,[A.dQ,A.f8,A.fD,A.fC,A.h5,A.h4])
r(A.e7,A.cY)
r(A.hq,A.hr)
r(A.ey,A.dX)
q(A.aZ,[A.ch,A.dZ,A.d4])
r(A.eF,A.dE)
r(A.bN,A.cy)
r(A.d5,A.dv)
r(A.cc,A.fZ)
q(A.cc,[A.eg,A.ex,A.ez])
r(A.ca,A.el)
q(A.ck,[A.bl,A.dc])
r(A.en,A.em)
r(A.bh,A.dc)
r(A.eo,A.eq)
r(A.dW,A.eo)
q(A.en,[A.de,A.cp])
q(A.dH,[A.ag,A.bH,A.bF])
q(A.hm,[A.aK,A.dp,A.Y])
q(A.O,[A.eU,A.eR,A.an])
r(A.eV,A.eU)
r(A.bP,A.eV)
r(A.bO,A.eR)
r(A.dO,A.i)
r(A.eP,A.c4)
r(A.eT,A.eS)
r(A.eC,A.eT)
r(A.eB,A.eQ)
s(A.cn,A.aw)
s(A.dt,A.r)
s(A.du,A.aL)
s(A.co,A.ap)
s(A.cx,A.ap)
s(A.dv,A.r)
s(A.eR,A.r)
s(A.eU,A.z)
s(A.eV,A.aN)
s(A.eQ,A.r)
s(A.eS,A.z)
s(A.eT,A.aN)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n5:"double",bA:"num",d:"String",k:"bool",bd:"Null",p:"List",v:"Object",w:"Map",aM:"JSObject"},mangledNames:{},types:["k(d)","@(@)","k(@)","d(@)","d(d)","bd()","h(v?)","k(v?)","~()","k(v?,v?)","k(ae)","~(d)","k(w<d,@>)","k(d,d)","k(@,@)","+nearestLineEnding,nextNodeColStart(h,h)()","@(d)","h()","~(v?,v?)","O()","~(d[cj?])","O(w<@,@>)","@()","d(L<@,O>)","d(O)","p<d>(w<d,p<d>>)","k(d,k)","S(bp)","k(+column,type(h,Y?))","k(cg[h])","~(O)","~(@,O)","~(@,@)","@(w<@,@>)","v(aE)","v(ae)","d(d?)","d(h,d,d)","bh()","h(ae,ae)","w<d,d>(w<d,d>,d)","O(@)","0&(d,h?)","~(h,h,h)","k(L<h,d>)","v?(@)","d(d,d,d)","h(h,d)","0^(0^,0^)<bA>","d(d[d])","h(d{fallback:h?})","@(@,d)","v?(v?)","k(d,p<d>)","h(h,h)","k(L<d,w<d,p<d>>>)","p<d>(L<d,w<d,p<d>>>)","p<aE>(L<v,p<ae>>)","k(L<d,w<d,@>>)","d(b_)","k(p<d>)","k(h?)","d(p<w<d,@>>)","@(w<d,@>)","S(bw)","h(aE)","k(bV?)","h(d{onError:h(d)?,radix:h?})","h?(d{radix:h?})","p<d>()","p<d>(d,p<d>)","d?()","p<d>(d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b2&&a.b(c.a)&&b.b(c.b),"2;column,type":(a,b)=>c=>c instanceof A.ct&&a.b(c.a)&&b.b(c.b),"2;compactCharOffset,lineEndingIndex":(a,b)=>c=>c instanceof A.bU&&a.b(c.a)&&b.b(c.b),"2;end,start":(a,b)=>c=>c instanceof A.cu&&a.b(c.a)&&b.b(c.b),"2;indent,trailingBreaks":(a,b)=>c=>c instanceof A.dw&&a.b(c.a)&&b.b(c.b),"2;nearestLineEnding,nextNodeColStart":(a,b)=>c=>c instanceof A.cv&&a.b(c.a)&&b.b(c.b),"3;index,keyNode,valueNode":(a,b,c)=>d=>d instanceof A.dx&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.p2(v.typeUniverse,JSON.parse('{"br":"bs","ef":"bs","cm":"bs","e3":{"k":[],"ar":[]},"cS":{"bd":[],"ar":[]},"cV":{"aM":[]},"bs":{"aM":[]},"J":{"p":["1"],"x":["1"],"aM":[],"f":["1"]},"e2":{"d8":[]},"fz":{"J":["1"],"p":["1"],"x":["1"],"aM":[],"f":["1"]},"b6":{"K":["1"]},"cT":{"bA":[]},"cR":{"h":[],"bA":[],"ar":[]},"e4":{"bA":[],"ar":[]},"bq":{"d":[],"cg":[],"ar":[]},"cZ":{"R":[]},"aH":{"r":["h"],"aw":["h"],"p":["h"],"x":["h"],"f":["h"],"r.E":"h","aw.E":"h"},"x":{"f":["1"]},"y":{"x":["1"],"f":["1"]},"bL":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"a2":{"K":["1"]},"bb":{"f":["2"],"f.E":"2"},"bC":{"bb":["1","2"],"x":["2"],"f":["2"],"f.E":"2"},"d0":{"K":["2"]},"H":{"y":["2"],"x":["2"],"f":["2"],"f.E":"2","y.E":"2"},"q":{"f":["1"],"f.E":"1"},"bk":{"K":["1"]},"aA":{"f":["2"],"f.E":"2"},"cQ":{"K":["2"]},"bg":{"f":["1"],"f.E":"1"},"c9":{"bg":["1"],"x":["1"],"f":["1"],"f.E":"1"},"da":{"K":["1"]},"bD":{"x":["1"],"f":["1"],"f.E":"1"},"cP":{"K":["1"]},"dl":{"f":["1"],"f.E":"1"},"dm":{"K":["1"]},"b8":{"f":["+(h,1)"],"f.E":"+(h,1)"},"c8":{"b8":["1"],"x":["+(h,1)"],"f":["+(h,1)"],"f.E":"+(h,1)"},"bE":{"K":["+(h,1)"]},"cn":{"r":["1"],"aw":["1"],"p":["1"],"x":["1"],"f":["1"]},"eM":{"y":["h"],"x":["h"],"f":["h"],"f.E":"h","y.E":"h"},"d_":{"z":["h","1"],"ap":["h","1"],"w":["h","1"],"z.K":"h","z.V":"1","ap.K":"h","ap.V":"1"},"d7":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"b2":{"aX":[],"ay":[]},"ct":{"aX":[],"ay":[]},"bU":{"aX":[],"ay":[]},"cu":{"aX":[],"ay":[]},"dw":{"aX":[],"ay":[]},"cv":{"aX":[],"ay":[]},"dx":{"cs":[],"ay":[]},"cL":{"b1":["1","2"],"cx":["1","2"],"cf":["1","2"],"ap":["1","2"],"w":["1","2"],"ap.K":"1","ap.V":"2"},"cK":{"w":["1","2"]},"aJ":{"cK":["1","2"],"w":["1","2"]},"bQ":{"f":["1"],"f.E":"1"},"bR":{"K":["1"]},"cM":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cN":{"cM":["1"],"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"e0":{"aq":[],"b7":[]},"cb":{"aq":[],"b7":[]},"d3":{"R":[]},"e5":{"R":[]},"et":{"R":[]},"ea":{"az":[]},"aq":{"b7":[]},"dR":{"aq":[],"b7":[]},"dS":{"aq":[],"b7":[]},"er":{"aq":[],"b7":[]},"ep":{"aq":[],"b7":[]},"c6":{"aq":[],"b7":[]},"ej":{"R":[]},"aB":{"z":["1","2"],"fE":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"ai":{"x":["1"],"f":["1"],"f.E":"1"},"ah":{"K":["1"]},"aD":{"x":["1"],"f":["1"],"f.E":"1"},"aC":{"K":["1"]},"P":{"x":["L<1,2>"],"f":["L<1,2>"],"f.E":"L<1,2>"},"ba":{"K":["L<1,2>"]},"cX":{"aB":["1","2"],"z":["1","2"],"fE":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"aX":{"ay":[]},"cs":{"ay":[]},"b9":{"oo":[],"cg":[]},"cr":{"d6":[],"b_":[]},"eE":{"f":["d6"],"f.E":"d6"},"dn":{"K":["d6"]},"cl":{"b_":[]},"eN":{"f":["b_"],"f.E":"b_"},"eO":{"K":["b_"]},"d1":{"aM":[]},"b0":{"ce":["1"],"aM":[]},"bc":{"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"]},"e9":{"bc":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"d2":{"bc":[],"kH":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"bG":{"bc":[],"kI":[],"r":["h"],"b0":["h"],"p":["h"],"ce":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"eG":{"R":[]},"cw":{"R":[]},"dz":{"K":["1"]},"bx":{"f":["1"],"f.E":"1"},"dq":{"aB":["1","2"],"z":["1","2"],"fE":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"ax":{"bf":["1"],"kz":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cq":{"ax":["1"],"bf":["1"],"kz":["1"],"d9":["1"],"x":["1"],"f":["1"]},"bS":{"K":["1"]},"di":{"r":["1"],"aw":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1","aw.E":"1"},"r":{"p":["1"],"x":["1"],"f":["1"]},"z":{"w":["1","2"]},"co":{"z":["1","2"],"ap":["1","2"],"w":["1","2"]},"dr":{"x":["2"],"f":["2"],"f.E":"2"},"ds":{"K":["2"]},"cf":{"w":["1","2"]},"b1":{"cx":["1","2"],"cf":["1","2"],"ap":["1","2"],"w":["1","2"],"ap.K":"1","ap.V":"2"},"bf":{"d9":["1"],"x":["1"],"f":["1"]},"dy":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"eJ":{"z":["d","@"],"w":["d","@"],"z.K":"d","z.V":"@"},"eK":{"y":["d"],"x":["d"],"f":["d"],"f.E":"d","y.E":"d"},"c5":{"aI":["p<h>","d"],"aI.S":"p<h>"},"dX":{"aI":["d","p<h>"]},"cY":{"R":[]},"e7":{"R":[]},"e6":{"aI":["v?","d"],"aI.S":"v?"},"ey":{"aI":["d","p<h>"],"aI.S":"d"},"h":{"bA":[]},"p":{"x":["1"],"f":["1"]},"d6":{"b_":[]},"d":{"cg":[]},"c4":{"R":[]},"dh":{"R":[]},"aZ":{"R":[]},"ch":{"R":[]},"dZ":{"R":[]},"dj":{"R":[]},"es":{"R":[]},"bK":{"R":[]},"dT":{"R":[]},"ec":{"R":[]},"dd":{"R":[]},"eH":{"az":[]},"i":{"az":[]},"X":{"ov":[]},"dE":{"eu":[]},"aO":{"eu":[]},"eF":{"eu":[]},"bN":{"cy":["1","f<1>"],"cy.T":"f<1>"},"d5":{"r":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1"},"ee":{"az":[]},"eg":{"cc":[]},"ex":{"cc":[]},"ez":{"cc":[]},"ca":{"bI":[]},"bl":{"o6":[],"bh":[],"cj":[]},"el":{"bI":[]},"dc":{"cj":[]},"em":{"az":[]},"en":{"i":[],"az":[]},"ck":{"cj":[]},"bh":{"cj":[]},"dW":{"eo":[]},"ao":{"oh":[]},"de":{"i":[],"az":[]},"cO":{"aa":[]},"c7":{"aa":[]},"cG":{"aa":[]},"dH":{"aa":[]},"ag":{"aa":[]},"bH":{"aa":[]},"bF":{"aa":[]},"bp":{"S":[]},"bw":{"S":[]},"dk":{"S":[]},"dg":{"S":[]},"cH":{"S":[]},"bu":{"S":[]},"cp":{"i":[],"az":[]},"bP":{"z":["@","@"],"aN":["@","@"],"O":[],"w":["@","@"],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"bO":{"r":["@"],"p":["@"],"x":["@"],"O":[],"f":["@"],"r.E":"@"},"an":{"O":[]},"d4":{"R":[]},"dO":{"i":[],"az":[]},"eP":{"R":[]},"eD":{"an":[],"O":[]},"eC":{"bP":[],"z":["@","@"],"aN":["@","@"],"w":["@","@"],"O":[],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"eB":{"bO":[],"r":["@"],"p":["@"],"x":["@"],"f":["@"],"O":[],"r.E":"@"},"ob":{"p":["h"],"x":["h"],"f":["h"]},"kI":{"p":["h"],"x":["h"],"f":["h"]},"kH":{"p":["h"],"x":["h"],"f":["h"]}}'))
A.p1(v.typeUniverse,JSON.parse('{"x":1,"cn":1,"b0":1,"co":2,"dy":1,"dU":2,"dv":1}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",s:" must not be greater than the number of characters in the file, ",n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority"}
var t=(function rtii(){var s=A.aQ
return{a6:s("cG"),B:s("c5"),V:s("aH"),w:s("aJ<d,d>"),gR:s("c7"),dg:s("cO"),W:s("x<@>"),bU:s("R"),g8:s("az"),f_:s("aA<d,d>"),d:s("i"),_:s("b7"),cs:s("f<d>"),ah:s("f<d>(d)"),R:s("f<@>"),hb:s("f<h>"),gT:s("J<p<w<d,@>>>"),Z:s("J<w<d,@>>"),dm:s("J<w<@,@>>"),a2:s("J<+column,type(h,Y?)>"),c0:s("J<db>"),s:s("J<d>"),l:s("J<bM>"),fT:s("J<O>"),r:s("J<ae>"),ef:s("J<aE>"),aq:s("J<a0>"),v:s("J<@>"),t:s("J<h>"),d4:s("J<d?>"),g0:s("J<bV?>"),u:s("cS"),o:s("aM"),J:s("br"),aU:s("ce<@>"),D:s("p<w<d,@>>"),a:s("p<d>"),j:s("p<@>"),L:s("p<h>"),E:s("p<ae?>"),x:s("L<@,O>"),a9:s("L<h,d>"),aS:s("L<v,p<ae>>"),aw:s("L<d,w<d,@>>"),fk:s("L<d,w<d,p<d>>>"),G:s("w<d,d>"),P:s("w<d,@>"),f:s("w<@,@>"),O:s("w<d,p<d>>"),e:s("H<d,d>"),do:s("H<d,@>"),gh:s("H<w<d,@>,@>"),bz:s("H<d,h?>"),fY:s("bF"),eB:s("bc"),bm:s("bG"),b:s("bd"),K:s("v"),eh:s("cg"),co:s("d5<S>"),fl:s("rS"),bQ:s("+()"),eY:s("+column,type(h,Y?)"),ei:s("+(v?,v?)"),cz:s("d6"),fy:s("ag"),f2:s("bu"),fP:s("bH"),F:s("bI"),I:s("cj"),q:s("bh"),N:s("d"),gQ:s("d(b_)"),c:s("d(d)"),h7:s("bM"),ci:s("ar"),ak:s("cm"),ga:s("di<O>"),dw:s("b1<d,d>"),gr:s("b1<@,O>"),k:s("eu"),U:s("q<d>"),fj:s("bk<d>"),eJ:s("dl<d>"),h:s("bO"),S:s("bP"),T:s("O"),m:s("an"),C:s("ae"),A:s("aE"),cR:s("cq<v?>"),dj:s("bx<d>"),y:s("k"),Q:s("k(d)"),as:s("k(ae)"),i:s("n5"),z:s("@"),dY:s("@(w<d,@>)"),dO:s("@(d)"),p:s("h"),eH:s("lH<bd>?"),an:s("aM?"),g:s("p<@>?"),Y:s("w<@,@>?"),X:s("v?"),dk:s("d?"),ey:s("d(b_)?"),fs:s("S?"),gS:s("ae?"),M:s("eL?"),b2:s("bV?"),fQ:s("k?"),cD:s("n5?"),h6:s("h?"),ck:s("h(d)?"),bR:s("h?(d)"),cg:s("bA?"),H:s("bA"),n:s("~"),cA:s("~(d,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cm=J.e1.prototype
B.b=J.J.prototype
B.d=J.cR.prototype
B.cn=J.cT.prototype
B.a=J.bq.prototype
B.co=J.br.prototype
B.cp=J.cV.prototype
B.L=A.d2.prototype
B.an=A.bG.prototype
B.aq=J.ef.prototype
B.U=J.cm.prototype
B.aE=new A.dQ(!1)
B.v=new A.c5(B.aE)
B.aF=new A.dQ(!0)
B.a3=new A.c5(B.aF)
B.aG=new A.cb(A.r4(),A.aQ("cb<h>"))
B.x=new A.f8()
B.cM=new A.dV(A.aQ("dV<0&>"))
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

B.c=new A.e6()
B.aP=new A.ec()
B.n=new A.fW()
B.a7=new A.bN(A.aQ("bN<@>"))
B.aQ=new A.bN(A.aQ("bN<v?>"))
B.e=new A.ey()
B.aR=new A.h5()
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
B.aV=new A.i("\u8282\u70b9\u5730\u5740\u6216\u8def\u5f84\u65e0\u6548",null,null)
B.aW=new A.i("\u8bf7\u8f93\u5165\u4e00\u4e2a vmess:// \u8282\u70b9\u94fe\u63a5",null,null)
B.aX=new A.i("Vision \u9700\u8981 TLS/Reality \u548c TCP \u4f20\u8f93",null,null)
B.aY=new A.i("Hysteria2 \u8df3\u8dc3\u7aef\u53e3\u8303\u56f4\u65e0\u6548",null,null)
B.aZ=new A.i("\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u4e0d\u80fd\u5305\u542b\u9017\u53f7\u3001\u62ec\u53f7\u6216\u6362\u884c",null,null)
B.b_=new A.i("\u914d\u7f6e\u987b\u4e3a YAML \u6620\u5c04",null,null)
B.b0=new A.i("SS \u63d2\u4ef6\u53c2\u6570\u91cd\u590d",null,null)
B.b1=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 SS \u63d2\u4ef6\uff0c\u8bf7\u4f7f\u7528 YAML \u914d\u7f6e\u5bfc\u5165",null,null)
B.b2=new A.i("SS \u63d2\u4ef6\u4ec5\u652f\u6301 WebSocket \u6a21\u5f0f",null,null)
B.b3=new A.i("\u8bbf\u95ee\u63a7\u5236\u6700\u591a 64 \u6761",null,null)
B.b4=new A.i("\u8ba2\u9605\u8282\u70b9\u540d\u79f0\u4e0e\u9ed8\u8ba4\u7b56\u7565\u51b2\u7a81",null,null)
B.b5=new A.i("DNS \u914d\u7f6e\u987b\u4e3a\u975e\u7a7a YAML \u5bf9\u8c61",null,null)
B.b6=new A.i("\u89c4\u5219\u76ee\u6807\u4e0d\u5b58\u5728\uff0c\u8bf7\u9009\u62e9\u6709\u6548\u7684\u8282\u70b9\u6216\u4ee3\u7406\u7ec4",null,null)
B.b7=new A.i("\u8bf7\u586b\u5199\u6709\u6548\u7684\u5c40\u57df\u7f51\u8bbe\u5907\u540d\u79f0\uff0c\u4e0d\u80fd\u9009\u62e9 lo \u6216 Mclash",null,null)
B.b8=new A.i("\u89c4\u5219\u96c6\u540d\u79f0\u5df2\u5b58\u5728",null,null)
B.b9=new A.i("\u8ba2\u9605\u8282\u70b9\u540d\u79f0\u91cd\u590d",null,null)
B.ba=new A.i("\u4ee3\u7406\u7ec4\u6392\u5e8f\u5fc5\u987b\u5305\u542b\u6240\u6709\u73b0\u6709\u4ee3\u7406\u7ec4\u4e14\u4e0d\u80fd\u91cd\u590d",null,null)
B.bb=new A.i("\u6b64\u7ec4\u4ecd\u88ab\u89c4\u5219\u3001\u5176\u4ed6\u4ee3\u7406\u7ec4\u6216\u94fe\u8def\u5f15\u7528\uff0c\u8bf7\u5148\u4fee\u6539\u5f15\u7528",null,null)
B.bc=new A.i("\u8282\u70b9\u94fe\u63a5\u7684 Base64 \u683c\u5f0f\u65e0\u6548",null,null)
B.ad=new A.i("\u8bf7\u5728\u4e24\u4fa7\u5206\u522b\u9009\u62e9\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9",null,null)
B.I=new A.i("\u6240\u9009\u8282\u70b9\u5df2\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",null,null)
B.bd=new A.i("SS \u8282\u70b9\u7f3a\u5c11\u7aef\u53e3",null,null)
B.be=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 gRPC \u6a21\u5f0f",null,null)
B.bf=new A.i("Reality \u516c\u94a5\u683c\u5f0f\u65e0\u6548",null,null)
B.bg=new A.i("",null,null)
B.bh=new A.i("Hysteria2 \u5e26\u5bbd\u53c2\u6570\u65e0\u6548",null,null)
B.bi=new A.i("\u8282\u70b9\u94fe\u63a5\u53c2\u6570\u91cd\u590d",null,null)
B.bj=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 VLESS \u52a0\u5bc6\u7c7b\u578b",null,null)
B.bk=new A.i("\u8bf7\u586b\u5199\u5185\u5d4c\u89c4\u5219\uff0c\u6bcf\u884c\u4e00\u6761",null,null)
B.bl=new A.i("Hysteria2 \u6df7\u6dc6\u5bc6\u7801\u9700\u8981 obfs \u53c2\u6570",null,null)
B.bm=new A.i("MRS \u4ec5\u652f\u6301\u8fdc\u7a0b\u6216\u6587\u4ef6\u6765\u6e90\u7684 domain / ipcidr \u89c4\u5219\u96c6",null,null)
B.bn=new A.i("\u524d\u7f6e\u548c\u540e\u7f6e\u4e0d\u80fd\u9009\u62e9\u540c\u4e00\u4e2a\u8282\u70b9",null,null)
B.bo=new A.i("\u4ee3\u7406\u7ec4\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e5f\u4e0d\u80fd\u5305\u542b\u9017\u53f7\u6216\u6362\u884c",null,null)
B.ae=new A.i("\u8bf7\u8f93\u5165 Host \u57df\u540d\u6216 IP\uff0c\u53ef\u5e26\u7aef\u53e3\uff0c\u4e0d\u8981\u586b\u5199 URL",null,null)
B.bp=new A.i("\u5f00\u5173\u987b\u4e3a\u5e03\u5c14\u503c",null,null)
B.bq=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 SS \u63d2\u4ef6\u53c2\u6570",null,null)
B.br=new A.i("\u89c4\u5219\u683c\u5f0f\u65e0\u6548",null,null)
B.bs=new A.i("\u8ba2\u9605\u6ca1\u6709\u53ef\u5185\u7f6e\u7684 proxies \u8282\u70b9\uff0c\u8bf7\u4f7f\u7528\u5305\u542b\u8282\u70b9\u7684 Mihomo \u8ba2\u9605",null,null)
B.bt=new A.i("\u8bbf\u95ee\u63a7\u5236\u683c\u5f0f\u65e0\u6548\uff0c\u8bf7\u586b\u5199 IP\u3001CIDR \u7f51\u6bb5\u6216 IPv4 \u8d77\u6b62\u8303\u56f4",null,null)
B.bu=new A.i("TUIC \u62e5\u585e\u63a7\u5236\u7c7b\u578b\u65e0\u6548",null,null)
B.bv=new A.i("\u63a7\u5236\u7aef\u53e3\u987b\u4e3a 1\u201365535",null,null)
B.af=new A.i("\u5165\u53e3\u548c\u51fa\u53e3\u4e0d\u80fd\u9009\u62e9\u540c\u4e00\u4e2a\u8282\u70b9",null,null)
B.bw=new A.i("\u65e0\u6548\u63a7\u5236\u7aef\u53e3",null,null)
B.ag=new A.i("\u8282\u70b9\u7aef\u53e3\u5fc5\u987b\u5728 1\u201365535 \u4e4b\u95f4",null,null)
B.bx=new A.i("\u65e0\u6cd5\u8bc6\u522b\u673a\u573a\u8282\u70b9\u5f52\u5c5e\uff0c\u8bf7\u5148\u66f4\u65b0\u5168\u90e8\u673a\u573a",null,null)
B.by=new A.i("XHTTP \u6a21\u5f0f\u65e0\u6548",null,null)
B.bz=new A.i("\u4f5c\u7528\u8282\u70b9\u4e0d\u80fd\u5305\u542b\u524d\u7f6e\u6216\u540e\u7f6e\u8282\u70b9",null,null)
B.bA=new A.i("\u4ee3\u7406\u7ec4\u6210\u5458\u53ea\u80fd\u901a\u8fc7\u8282\u70b9\u5339\u914d\u6b63\u5219\u4fee\u6539",null,null)
B.bB=new A.i("VLESS UDP \u7f16\u7801\u65e0\u6548",null,null)
B.bC=new A.i("\u8bf7\u586b\u5199\u6709\u6548\u7684 IP \u76d1\u542c\u5730\u5740",null,null)
B.bD=new A.i("TUIC UDP \u6a21\u5f0f\u65e0\u6548",null,null)
B.bE=new A.i("\u89c4\u5219\u96c6\u914d\u7f6e\u5fc5\u987b\u662f\u6620\u5c04",null,null)
B.bF=new A.i("\u89c4\u5219\u96c6\u6587\u4ef6\u8def\u5f84\u5df2\u88ab\u4f7f\u7528",null,null)
B.bG=new A.i("Host \u4e0d\u8981\u5305\u542b URL\u3001\u8def\u5f84\u6216\u7a7a\u767d\u5b57\u7b26",null,null)
B.bH=new A.i("\u4ee3\u7406\u7ec4\u6210\u5458\u65e0\u6548",null,null)
B.bI=new A.i("\u624b\u52a8\u8282\u70b9\u5217\u8868\u5df2\u53d8\u5316\uff0c\u8bf7\u91cd\u65b0\u6253\u5f00\u9875\u9762",null,null)
B.bJ=new A.i("SS \u63d2\u4ef6\u5e03\u5c14\u53c2\u6570\u65e0\u6548",null,null)
B.bK=new A.i("TUIC v5 \u9700\u8981 UUID \u548c\u5bc6\u7801",null,null)
B.bL=new A.i("\u8be5\u89c4\u5219\u96c6\u4ecd\u88ab\u89c4\u5219\u5f15\u7528\uff0c\u8bf7\u5148\u4fee\u6539\u6216\u5220\u9664\u5bf9\u5e94\u7684 RULE-SET \u89c4\u5219",null,null)
B.bM=new A.i("\u56fd\u5185\u548c\u56fd\u5916\u4ee3\u7406\u7ec4\u7684\u540d\u79f0\u4e0d\u53ef\u4fee\u6539",null,null)
B.bN=new A.i("\u540d\u79f0\u4e0e\u5df2\u6709\u8282\u70b9\u6216\u4ee3\u7406\u7ec4\u51b2\u7a81",null,null)
B.bO=new A.i("WebSocket early data \u5927\u5c0f\u65e0\u6548",null,null)
B.ah=new A.i("\u8282\u70b9 UUID \u683c\u5f0f\u65e0\u6548",null,null)
B.bP=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 Hysteria2 \u6df7\u6dc6\u7c7b\u578b",null,null)
B.bQ=new A.i("\u8bf7\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684\u8282\u70b9\u94fe\u63a5",null,null)
B.bR=new A.i("VMess \u5730\u5740\u3001\u7528\u6237 ID\u3001\u7aef\u53e3\u6216 alterId \u65e0\u6548",null,null)
B.bS=new A.i("Reality short-id \u683c\u5f0f\u65e0\u6548",null,null)
B.bT=new A.i("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u4f5c\u7528\u8282\u70b9",null,null)
B.bU=new A.i("\u914d\u7f6e\u5d4c\u5957\u8fc7\u6df1",null,null)
B.bV=new A.i("\u652f\u6301 VMess\u3001VLESS\u3001Trojan\u3001SS\u3001Hysteria2\u3001TUIC\u3001AnyTLS\u3001SOCKS5\u3001HTTP/HTTPS \u8282\u70b9\u94fe\u63a5",null,null)
B.bW=new A.i("\u8bf7\u9009\u62e9\u6709\u6548\u7684\u6765\u6e90\u3001\u884c\u4e3a\u548c\u683c\u5f0f",null,null)
B.bX=new A.i("\u6682\u4e0d\u652f\u6301\u6b64\u8282\u70b9\u5b89\u5168\u7c7b\u578b",null,null)
B.ai=new A.i("\u4ee3\u7406\u94fe\u8def\u5f62\u6210\u5faa\u73af\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u8282\u70b9",null,null)
B.aj=new A.i("\u8bf7\u4fdd\u7559\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a\u4f5c\u7528\u5bf9\u8c61",null,null)
B.bY=new A.i("SS \u8ba4\u8bc1\u4fe1\u606f\u65e0\u6548",null,null)
B.A=new A.i("\u914d\u7f6e\u6ca1\u6709\u5185\u7f6e\u8282\u70b9\uff0c\u8bf7\u5148\u66f4\u65b0\u673a\u573a\u8ba2\u9605",null,null)
B.bZ=new A.i("\u89c4\u5219\u96c6\u540d\u79f0\u6216\u5185\u5bb9\u65e0\u6548",null,null)
B.c_=new A.i("\u4ee3\u7406\u7ec4\u6ca1\u6709\u8282\u70b9\uff0c\u8bf7\u8c03\u6574\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u9009\u62e9 DIRECT",null,null)
B.c0=new A.i("\u56fd\u5185\u548c\u56fd\u5916\u4ee3\u7406\u7ec4\u4e0d\u53ef\u5220\u9664",null,null)
B.c1=new A.i("\u66f4\u65b0\u95f4\u9694\u5fc5\u987b\u662f\u975e\u8d1f\u6574\u6570",null,null)
B.c2=new A.i("\u8bf7\u8f93\u5165\u8ba2\u9605\u94fe\u63a5",null,null)
B.c3=new A.i("HTTP/SOCKS5 \u8282\u70b9\u94fe\u63a5\u4e0d\u652f\u6301\u67e5\u8be2\u53c2\u6570",null,null)
B.J=new A.i("\u8282\u70b9\u94fe\u63a5\u683c\u5f0f\u65e0\u6548",null,null)
B.c4=new A.i("\u4e0d\u652f\u6301\u7684\u914d\u7f6e\u64cd\u4f5c",null,null)
B.c5=new A.i("\u53ea\u80fd\u5220\u9664\u624b\u52a8\u6dfb\u52a0\u7684\u8282\u70b9",null,null)
B.c6=new A.i("\u6682\u4e0d\u652f\u6301\u6b64\u8282\u70b9\u4f20\u8f93\u7c7b\u578b\uff0c\u8bf7\u4f7f\u7528 YAML \u914d\u7f6e\u5bfc\u5165",null,null)
B.c7=new A.i("\u65e0\u6548 TUN \u534f\u8bae\u6808",null,null)
B.c8=new A.i("\u6682\u4e0d\u652f\u6301\u6b64\u4f20\u8f93\u4f2a\u88c5\u7c7b\u578b",null,null)
B.c9=new A.i("\u4ee3\u7406\u7ec4\u6216\u94fe\u8def\u5f62\u6210\u5faa\u73af",null,null)
B.ca=new A.i("\u673a\u573a\u7f16\u53f7\u65e0\u6548",null,null)
B.cb=new A.i("SS obfs \u6a21\u5f0f\u5fc5\u987b\u662f http \u6216 tls",null,null)
B.cc=new A.i("AnyTLS \u4ec5\u652f\u6301 TLS \u548c TCP",null,null)
B.cd=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 SS \u52a0\u5bc6\u65b9\u6cd5",null,null)
B.ce=new A.i("\u8bf7\u8f93\u5165\u672c\u5730\u6587\u4ef6\u8def\u5f84",null,null)
B.ak=new A.i("\u94fe\u8def\u4ee3\u7406\u7ec4\u7531\u94fe\u5f0f\u8282\u70b9\u7ba1\u7406",null,null)
B.cf=new A.i("SS \u5730\u5740\u6216\u8ba4\u8bc1\u4fe1\u606f\u65e0\u6548",null,null)
B.cg=new A.i("\u8ba2\u9605\u8282\u70b9\u7f3a\u5c11\u540d\u79f0\u6216\u7c7b\u578b",null,null)
B.ch=new A.i("\u8bf7\u8f93\u5165\u6709\u6548\u7684 HTTP / HTTPS \u4e0b\u8f7d\u94fe\u63a5",null,null)
B.ci=new A.i("\u539f\u89c4\u5219\u96c6\u4e0d\u5b58\u5728",null,null)
B.cj=new A.i("\u65e0\u6548\u63a5\u7ba1\u65b9\u5f0f",null,null)
B.ck=new A.i("\u94fe\u63a5\u5305\u542b\u6682\u4e0d\u652f\u6301\u7684\u53c2\u6570\uff0c\u8bf7\u4f7f\u7528 YAML \u914d\u7f6e\u5bfc\u5165",null,null)
B.cl=new A.i("VMess \u94fe\u63a5\u7684 Base64 \u6216 JSON \u683c\u5f0f\u65e0\u6548",null,null)
B.cq=new A.fC(null)
B.cr=new A.fD(null)
B.cs=s(["vless","trojan","ss","hysteria2","hy2","tuic","anytls","socks","socks5","http","https"],t.s)
B.ct=s(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],t.s)
B.cu=s([],t.s)
B.cw={addNode:0,host:1,prependProxy:2,groups:3,rules:4}
B.K=new A.aJ(B.cw,["proxies","proxies","proxies","proxy-groups","rules"],t.w)
B.ao={"\ud83d\ude80 \u56fd\u5185":0,"\ud83c\udf0d \u56fd\u5916":1}
B.q=new A.aJ(B.ao,["# Mclash \u56fd\u5185\u6b63\u5219: ","# Mclash \u56fd\u5916\u6b63\u5219: "],t.w)
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
B.cB=new A.Y(0,"streamStart")
B.w=new A.Y(1,"streamEnd")
B.r=new A.Y(10,"flowSequenceEnd")
B.ar=new A.Y(11,"flowMappingStart")
B.t=new A.Y(12,"flowMappingEnd")
B.u=new A.Y(13,"blockEntry")
B.o=new A.Y(14,"flowEntry")
B.k=new A.Y(15,"key")
B.l=new A.Y(16,"value")
B.cC=new A.Y(17,"alias")
B.cD=new A.Y(18,"anchor")
B.cE=new A.Y(19,"tag")
B.P=new A.Y(2,"versionDirective")
B.as=new A.Y(20,"scalar")
B.Q=new A.Y(3,"tagDirective")
B.R=new A.Y(4,"documentStart")
B.S=new A.Y(5,"documentEnd")
B.T=new A.Y(6,"blockSequenceStart")
B.C=new A.Y(7,"blockMappingStart")
B.p=new A.Y(8,"blockEnd")
B.at=new A.Y(9,"flowSequenceStart")
B.cF=A.k1("ob")
B.cG=A.k1("v")
B.cH=A.k1("kH")
B.cI=A.k1("kI")
B.cJ=new A.h4(!1)
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
B.aD=new A.a0("FLOW_SEQUENCE_ENTRY_MAPPING_KEY")})();(function staticFields(){$.ho=null
$.aF=A.c([],A.aQ("J<v>"))
$.lS=null
$.lA=null
$.lz=null
$.nb=null
$.mY=null
$.nk=null
$.iM=null
$.j3=null
$.l8=null
$.hw=A.c([],A.aQ("J<p<v>?>"))
$.m_=""
$.m0=null
$.mE=null
$.hX=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rR","nv",()=>A.n8("_$dart_dartClosure"))
s($,"rQ","lo",()=>A.n8("_$dart_dartClosure_dartJSInterop"))
s($,"te","nM",()=>A.c([new J.e2()],A.aQ("J<d8>")))
s($,"rX","nx",()=>A.bj(A.h0({
toString:function(){return"$receiver$"}})))
s($,"rY","ny",()=>A.bj(A.h0({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"rZ","nz",()=>A.bj(A.h0(null)))
s($,"t_","nA",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"t2","nD",()=>A.bj(A.h0(void 0)))
s($,"t3","nE",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"t1","nC",()=>A.bj(A.lW(null)))
s($,"t0","nB",()=>A.bj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"t5","nG",()=>A.bj(A.lW(void 0)))
s($,"t4","nF",()=>A.bj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"ta","nK",()=>A.lP(4096))
s($,"t8","nI",()=>new A.hD().$0())
s($,"t9","nJ",()=>new A.hC().$0())
s($,"t7","lq",()=>new Int8Array(A.pu(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"t6","nH",()=>A.lP(0))
s($,"tb","kn",()=>A.f0(B.cG))
s($,"tf","ls",()=>new A.f9($.lp()))
s($,"rU","nw",()=>new A.eg(A.I("/",!0),A.I("[^/]$",!0),A.I("^/",!0)))
s($,"rW","f6",()=>new A.ez(A.I("[/\\\\]",!0),A.I("[^/\\\\]$",!0),A.I("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.I("^[/\\\\](?![/\\\\])",!0)))
s($,"rV","dN",()=>new A.ex(A.I("/",!0),A.I("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.I("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.I("^/",!0)))
s($,"rT","lp",()=>A.ox())
s($,"tc","nL",()=>A.I("\\r\\n?|\\n",!0))
r($,"nu","ko",()=>new A.km())
s($,"ti","lt",()=>A.a4([0,"\\0",7,"\\a",8,"\\b",11,"\\v",12,"\\f",13,"\\r",27,"\\e",133,"\\N",160,"\\_",8232,"\\L",8233,"\\P"],t.p,t.N))
s($,"th","nN",()=>{var q=A.fI($.lt(),t.p,t.N)
q.j(0,9,"\\t")
q.j(0,10,"\\n")
q.j(0,34,'\\"')
q.j(0,47,"\\/")
q.j(0,92,"\\\\")
return q})
s($,"td","lr",()=>A.I("[^ \\t]",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBufferView:A.d1,Int8Array:A.e9,Uint32Array:A.d2,Uint8Array:A.bG})
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
var s=A.r1
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) throw new Error(result.error);
    return result.value;
  }
});
