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
if(a[b]!==s){A.rA(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kX(b)
return new s(c,this)}:function(){if(s===null)s=A.kX(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kX(a).prototype
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
l9(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l2(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.l4==null){A.qP()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.lV("Return interceptor for "+A.l(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hn
if(o==null)o=$.hn=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qY(a)
if(p!=null)return p
if(typeof a=="function")return B.cn
s=Object.getPrototypeOf(a)
if(s==null)return B.aq
if(s===Object.prototype)return B.aq
if(typeof q=="function"){o=$.hn
if(o==null)o=$.hn=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.U,enumerable:false,writable:true,configurable:true})
return B.U}return B.U},
lH(a,b){if(a<0||a>4294967295)throw A.a(A.a8(a,0,4294967295,"length",null))
return J.oc(new Array(a),b)},
kr(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("J<0>"))},
lG(a,b){if(a<0)throw A.a(A.a1("Length must be a non-negative integer: "+a))
return A.c(new Array(a),b.i("J<0>"))},
oc(a,b){var s=A.c(a,b.i("J<0>"))
s.$flags=1
return s},
lI(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
od(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.lI(r))break;++b}return b},
lJ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.lI(q))break}return b},
aY(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.e4.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.e3.prototype
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l2(a)},
C(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l2(a)},
a3(a){if(a==null)return a
if(Array.isArray(a))return J.J.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
if(typeof a=="symbol")return J.cW.prototype
if(typeof a=="bigint")return J.cU.prototype
return a}if(a instanceof A.v)return a
return J.l2(a)},
c_(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.cn.prototype
return a},
u(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aY(a).R(a,b)},
m(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.qV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.C(a).h(a,b)},
nL(a,b,c){return J.a3(a).j(a,b,c)},
km(a,b){return J.a3(a).t(a,b)},
kn(a,b){return J.c_(a).bq(a,b)},
nM(a,b){return J.a3(a).S(a,b)},
bo(a,b){return J.C(a).p(a,b)},
ko(a,b){return J.a3(a).T(a,b)},
nN(a,b){return J.a3(a).an(a,b)},
lr(a){return J.a3(a).gU(a)},
ac(a){return J.aY(a).gY(a)},
cE(a){return J.C(a).gL(a)},
cF(a){return J.C(a).gb3(a)},
F(a){return J.a3(a).gq(a)},
kp(a){return J.a3(a).gJ(a)},
a6(a){return J.C(a).gk(a)},
nO(a){return J.aY(a).gaM(a)},
nP(a,b){return J.C(a).az(a,b)},
nQ(a,b,c){return J.C(a).af(a,b,c)},
aR(a,b,c){return J.a3(a).ac(a,b,c)},
nR(a,b,c){return J.c_(a).bu(a,b,c)},
kq(a,b){return J.a3(a).ar(a,b)},
nS(a,b){return J.a3(a).ao(a,b)},
nT(a,b){return J.a3(a).bY(a,b)},
nU(a,b){return J.c_(a).bg(a,b)},
ls(a,b){return J.c_(a).u(a,b)},
bB(a,b){return J.c_(a).D(a,b)},
nV(a,b,c){return J.c_(a).v(a,b,c)},
nW(a,b){return J.a3(a).a3(a,b)},
al(a){return J.aY(a).n(a)},
am(a,b){return J.a3(a).aJ(a,b)},
e1:function e1(){},
e3:function e3(){},
cS:function cS(){},
cV:function cV(){},
bs:function bs(){},
ef:function ef(){},
cn:function cn(){},
br:function br(){},
cU:function cU(){},
cW:function cW(){},
J:function J(a){this.$ti=a},
e2:function e2(){},
fy:function fy(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cT:function cT(){},
cR:function cR(){},
e4:function e4(){},
bq:function bq(){}},A={kt:function kt(){},
lL(a){return new A.cZ("Field '"+a+"' has been assigned during initialization.")},
iY(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bv(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eX(a,b,c){return a},
l8(a){var s,r
for(s=$.aF.length,r=0;r<s;++r)if(a===$.aF[r])return!0
return!1},
aW(a,b,c,d){A.ad(b,"start")
if(c!=null){A.ad(c,"end")
if(b>c)A.D(A.a8(b,0,c,"start",null))}return new A.bL(a,b,c,d.i("bL<0>"))},
fL(a,b,c,d){if(t.W.b(a))return new A.bC(a,b,c.i("@<0>").a8(d).i("bC<1,2>"))
return new A.bb(a,b,c.i("@<0>").a8(d).i("bb<1,2>"))},
on(a,b,c){var s="count"
if(t.W.b(a)){A.cI(b,s,t.p)
A.ad(b,s)
return new A.ca(a,b,c.i("ca<0>"))}A.cI(b,s,t.p)
A.ad(b,s)
return new A.bg(a,b,c.i("bg<0>"))},
o7(a,b,c){if(t.W.b(a))return new A.c9(a,b,c.i("c9<0>"))
return new A.b8(a,b,c.i("b8<0>"))},
Y(){return new A.bK("No element")},
o9(){return new A.bK("Too many elements")},
lF(){return new A.bK("Too few elements")},
ek(a,b,c,d,e){if(c-b<=32)A.op(a,b,c,d,e)
else A.oo(a,b,c,d,e)},
op(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.C(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aK()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
oo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.bp(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.bp(a4+a5,2),f=g-j,e=g+j,d=J.C(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
fV:function fV(){},
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
az:function az(a,b,c){this.a=a
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
ca:function ca(a,b,c){this.a=a
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
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aL:function aL(){},
av:function av(){},
co:function co(){},
eM:function eM(a){this.a=a},
d_:function d_(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b){this.a=a
this.$ti=b},
lA(a,b,c){var s,r,q,p,o,n,m,l=A.j(a),k=A.P(new A.ai(a,l.i("ai<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.a7)(k),++i,p=o){r=k[i]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.P(new A.aC(a,l.i("aC<2>")),!0,c)
m=new A.aJ(q,n,b.i("@<0>").a8(c).i("aJ<1,2>"))
m.$keys=k
return m}return new A.cL(A.aj(a,b,c),b.i("@<0>").a8(c).i("cL<1,2>"))},
lB(){throw A.a(A.M("Cannot modify unmodifiable Map"))},
lC(){throw A.a(A.M("Cannot modify constant Set"))},
nn(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qV(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
l(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.al(a)
return s},
eh(a){var s,r=$.lQ
if(r==null)r=$.lQ=Symbol("identityHashCode")
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
lR(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.N(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ei(a){var s,r,q,p
if(a instanceof A.v)return A.as(A.a9(a),null)
s=J.aY(a)
if(s===B.cl||s===B.co||t.ak.b(a)){r=B.a5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.as(A.a9(a),null)},
lS(a){var s,r,q
if(a==null||typeof a=="number"||A.eW(a))return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aq)return a.n(0)
if(a instanceof A.ax)return a.dF(!0)
s=$.nJ()
for(r=0;r<1;++r){q=s[r].hf(a)
if(q!=null)return q}return"Instance of '"+A.ei(a)+"'"},
of(){if(!!self.location)return self.location.href
return null},
lP(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oh(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<=65535)B.b.t(p,q)
else if(q<=1114111){B.b.t(p,55296+(B.d.b0(q-65536,10)&1023))
B.b.t(p,56320+(q&1023))}else throw A.a(A.dI(q))}return A.lP(p)},
og(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.b3(q))throw A.a(A.dI(q))
if(q<0)throw A.a(A.dI(q))
if(q>65535)return A.oh(a)}return A.lP(a)},
oi(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
A(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.b0(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.a8(a,0,1114111,null,null))},
qJ(a){throw A.a(A.dI(a))},
b(a,b){if(a==null)J.a6(a)
throw A.a(A.dJ(a,b))},
dJ(a,b){var s,r="index"
if(!A.b3(b))return new A.aZ(!0,b,r,null)
s=J.a6(a)
if(b<0||b>=s)return A.e_(b,s,a,null,r)
return A.fR(b,r)},
qx(a,b,c){if(a<0||a>c)return A.a8(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a8(b,a,c,"end",null)
return new A.aZ(!0,b,"end",null)},
dI(a){return new A.aZ(!0,a,null,null)},
a(a){return A.af(a,new Error())},
af(a,b){var s
if(a==null)a=new A.dh()
b.dartException=a
s=A.rB
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
rB(){return J.al(this.dartException)},
D(a,b){throw A.af(a,b==null?new Error():b)},
U(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.D(A.pq(a,b,c),s)},
pq(a,b,c){var s,r,q,p,o,n,m,l,k
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
a=A.jm(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.fZ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h_(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lU(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ku(a,b){var s=b==null,r=s?null:b.method
return new A.e5(a,r,s?null:b.receiver)},
c4(a){if(a==null)return new A.ea(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.c2(a,a.dartException)
return A.q3(a)},
c2(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.b0(r,16)&8191)===10)switch(q){case 438:return A.c2(a,A.ku(A.l(s)+" (Error "+q+")",null))
case 445:case 5007:A.l(s)
return A.c2(a,new A.d3())}}if(a instanceof TypeError){p=$.nu()
o=$.nv()
n=$.nw()
m=$.nx()
l=$.nA()
k=$.nB()
j=$.nz()
$.ny()
i=$.nD()
h=$.nC()
g=p.aL(s)
if(g!=null)return A.c2(a,A.ku(A.e(s),g))
else{g=o.aL(s)
if(g!=null){g.method="call"
return A.c2(a,A.ku(A.e(s),g))}else if(n.aL(s)!=null||m.aL(s)!=null||l.aL(s)!=null||k.aL(s)!=null||j.aL(s)!=null||m.aL(s)!=null||i.aL(s)!=null||h.aL(s)!=null){A.e(s)
return A.c2(a,new A.d3())}}return A.c2(a,new A.et(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dd()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.c2(a,new A.aZ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dd()
return a},
f0(a){if(a==null)return J.ac(a)
if(typeof a=="object")return A.eh(a)
return J.ac(a)},
qE(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qF(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
pB(a,b,c,d,e,f){t._.a(a)
switch(A.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.eH("Unsupported number of arguments for wrapped closure"))},
qg(a,b){var s=a.$identity
if(!!s)return s
s=A.qh(a,b)
a.$identity=s
return s},
qh(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pB)},
o2(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ep().constructor.prototype):Object.create(new A.c7(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lz(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.nZ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lz(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
nZ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.nX)}throw A.a("Error in functionType of tearoff")},
o_(a,b,c,d){var s=A.ly
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lz(a,b,c,d){if(c)return A.o1(a,b,d)
return A.o_(b.length,d,a,b)},
o0(a,b,c,d){var s=A.ly,r=A.nY
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
o1(a,b,c){var s,r
if($.lw==null)$.lw=A.lv("interceptor")
if($.lx==null)$.lx=A.lv("receiver")
s=b.length
r=A.o0(s,c,a,b)
return r},
kX(a){return A.o2(a)},
nX(a,b){return A.dD(v.typeUniverse,A.a9(a.a),b)},
ly(a){return a.a},
nY(a){return a.b},
lv(a){var s,r,q,p=new A.c7("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.a1("Field name "+a+" not found."))},
n5(a){return v.getIsolateTag(a)},
td(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qY(a){var s,r,q,p,o,n=A.e($.n8.$1(a)),m=$.iK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bX($.mV.$2(a,n))
if(q!=null){m=$.iK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.j6(s)
$.iK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j1[n]=s
return s}if(p==="-"){o=A.j6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ng(a,s)
if(p==="*")throw A.a(A.lV(n))
if(v.leafTags[n]===true){o=A.j6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ng(a,s)},
ng(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.l9(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j6(a){return J.l9(a,!1,null,!!a.$icf)},
r_(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.j6(s)
else return J.l9(s,c,null,null)},
qP(){if(!0===$.l4)return
$.l4=!0
A.qQ()},
qQ(){var s,r,q,p,o,n,m,l
$.iK=Object.create(null)
$.j1=Object.create(null)
A.qO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nh.$1(o)
if(n!=null){m=A.r_(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qO(){var s,r,q,p,o,n,m=B.aJ()
m=A.cC(B.aK,A.cC(B.aL,A.cC(B.a6,A.cC(B.a6,A.cC(B.aM,A.cC(B.aN,A.cC(B.aO(B.a5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n8=new A.iZ(p)
$.mV=new A.j_(o)
$.nh=new A.j0(n)},
cC(a,b){return a(b)||b},
qq(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ks(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.B("Illegal RegExp pattern ("+String(o)+")",a,null))},
rs(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.b9){s=B.a.D(a,c)
return b.b.test(s)}else return!J.kn(b,B.a.D(a,c)).gL(0)},
n4(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jm(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aG(a,b,c){var s
if(typeof b=="string")return A.rv(a,b,c)
if(b instanceof A.b9){s=b.gdf()
s.lastIndex=0
return a.replace(s,A.n4(c))}return A.ru(a,b,c)},
ru(a,b,c){var s,r,q,p
for(s=J.kn(b,a),s=s.gq(s),r=0,q="";s.l();){p=s.gm()
q=q+a.substring(r,p.gC())+c
r=p.gG()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
rv(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.jm(b),"g"),A.n4(c))},
mP(a){return a},
rt(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.bq(0,a),s=new A.dn(s.a,s.b,s.c),r=t.cz,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.l(A.mP(B.a.v(a,q,m)))+A.l(c.$1(o))
q=m+n[0].length}s=p+A.l(A.mP(B.a.D(a,q)))
return s.charCodeAt(0)==0?s:s},
rw(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.nm(a,s,s+b.length,c)},
nm(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
b2:function b2(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
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
cc:function cc(a,b){this.a=a
this.$ti=b},
d8:function d8(){},
fZ:function fZ(a,b,c,d,e,f){var _=this
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
c7:function c7(a,b){this.a=a
this.b=b},
ej:function ej(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fA:function fA(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a},
fE:function fE(a,b){var _=this
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
aC:function aC(a,b){this.a=a
this.$ti=b},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
O:function O(a,b){this.a=a
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
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
ax:function ax(){},
aX:function aX(){},
ct:function ct(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
cs:function cs(a){this.b=a},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cm:function cm(a,b){this.a=a
this.c=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
rA(a){throw A.af(A.lL(a),new Error())},
jY(){throw A.af(A.lL(""),new Error())},
m2(){var s=new A.hj()
return s.b=s},
hj:function hj(){this.b=null},
pr(a){return a},
lN(a){return new Uint8Array(a)},
hU(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.dJ(b,a))},
mB(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.qx(a,b,c))
return b},
d1:function d1(){},
b0:function b0(){},
bc:function bc(){},
e9:function e9(){},
d2:function d2(){},
bG:function bG(){},
dt:function dt(){},
du:function du(){},
kz(a,b){var s=b.c
return s==null?b.c=A.dB(a,"lE",[b.x]):s},
lT(a){var s=a.w
if(s===6||s===7)return A.lT(a.x)
return s===11||s===12},
om(a){return a.as},
aQ(a){return A.hx(v.typeUniverse,a,!1)},
qS(a,b){var s,r,q,p,o
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
return A.me(a1,r,!0)
case 7:s=a2.x
r=A.bz(a1,s,a3,a4)
if(r===s)return a2
return A.md(a1,r,!0)
case 8:q=a2.y
p=A.cB(a1,q,a3,a4)
if(p===q)return a2
return A.dB(a1,a2.x,p)
case 9:o=a2.x
n=A.bz(a1,o,a3,a4)
m=a2.y
l=A.cB(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.kH(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cB(a1,j,a3,a4)
if(i===j)return a2
return A.mf(a1,k,i)
case 11:h=a2.x
g=A.bz(a1,h,a3,a4)
f=a2.y
e=A.pX(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.mc(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cB(a1,d,a3,a4)
o=a2.x
n=A.bz(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.kI(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.dP("Attempted to substitute unexpected RTI kind "+a0))}},
cB(a,b,c,d){var s,r,q,p,o=b.length,n=A.hE(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bz(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
pY(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hE(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bz(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
pX(a,b,c,d){var s,r=b.a,q=A.cB(a,r,c,d),p=b.b,o=A.cB(a,p,c,d),n=b.c,m=A.pY(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eI()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
iy(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qH(s)
return a.$S()}return null},
qR(a,b){var s
if(A.lT(b))if(a instanceof A.aq){s=A.iy(a)
if(s!=null)return s}return A.a9(a)},
a9(a){if(a instanceof A.v)return A.j(a)
if(Array.isArray(a))return A.t(a)
return A.kP(J.aY(a))},
t(a){var s=a[v.arrayRti],r=t.v
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j(a){var s=a.$ti
return s!=null?s:A.kP(a)},
kP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pA(a,s)},
pA(a,b){var s=a instanceof A.aq?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.p0(v.typeUniverse,s.name)
b.$ccache=r
return r},
qH(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.hx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iV(a){return A.b4(A.j(a))},
l3(a){var s=A.iy(a)
return A.b4(s==null?A.a9(a):s)},
kR(a){var s
if(a instanceof A.ax)return A.qD(a.$r,a.ca())
s=a instanceof A.aq?A.iy(a):null
if(s!=null)return s
if(t.ci.b(a))return J.nO(a).a
if(Array.isArray(a))return A.t(a)
return A.a9(a)},
b4(a){var s=a.r
return s==null?a.r=new A.hw(a):s},
qD(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.b(q,0)
s=A.dD(v.typeUniverse,A.kR(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.mg(v.typeUniverse,s,A.kR(q[r]))}return A.dD(v.typeUniverse,s,a)},
jZ(a){return A.b4(A.hx(v.typeUniverse,a,!1))},
pz(a){var s=this
s.b=A.pV(s)
return s.b(a)},
pV(a){var s,r,q,p,o
if(a===t.K)return A.pH
if(A.c1(a))return A.pL
s=a.w
if(s===6)return A.pv
if(s===1)return A.mJ
if(s===7)return A.pC
r=A.pU(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.c1)){a.f="$i"+q
if(q==="p")return A.pF
if(a===t.o)return A.pE
return A.pK}}else if(s===10){p=A.qq(a.x,a.y)
o=p==null?A.mJ:p
return o==null?A.hT(o):o}return A.pt},
pU(a){if(a.w===8){if(a===t.p)return A.b3
if(a===t.i||a===t.H)return A.pG
if(a===t.N)return A.pJ
if(a===t.y)return A.eW}return null},
py(a){var s=this,r=A.ps
if(A.c1(s))r=A.pk
else if(s===t.K)r=A.hT
else if(A.cD(s)){r=A.pu
if(s===t.h6)r=A.hS
else if(s===t.dk)r=A.bX
else if(s===t.fQ)r=A.my
else if(s===t.cg)r=A.mA
else if(s===t.cD)r=A.ph
else if(s===t.an)r=A.pj}else if(s===t.p)r=A.T
else if(s===t.N)r=A.e
else if(s===t.y)r=A.hR
else if(s===t.H)r=A.mz
else if(s===t.i)r=A.pg
else if(s===t.o)r=A.pi
s.a=r
return s.a(a)},
pt(a){var s=this
if(a==null)return A.cD(s)
return A.nd(v.typeUniverse,A.qR(a,s),s)},
pv(a){if(a==null)return!0
return this.x.b(a)},
pK(a){var s,r=this
if(a==null)return A.cD(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pF(a){var s,r=this
if(a==null)return A.cD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.aY(a)[s]},
pE(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mI(a){if(typeof a=="object"){if(a instanceof A.v)return t.o.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ps(a){var s=this
if(a==null){if(A.cD(s))return a}else if(s.b(a))return a
throw A.af(A.mE(a,s),new Error())},
pu(a){var s=this
if(a==null||s.b(a))return a
throw A.af(A.mE(a,s),new Error())},
mE(a,b){return new A.cx("TypeError: "+A.m3(a,A.as(b,null)))},
qb(a,b,c,d){if(A.nd(v.typeUniverse,a,b))return a
throw A.af(A.oT("The type argument '"+A.as(a,null)+"' is not a subtype of the type variable bound '"+A.as(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
m3(a,b){return A.dY(a)+": type '"+A.as(A.kR(a),null)+"' is not a subtype of type '"+b+"'"},
oT(a){return new A.cx("TypeError: "+a)},
aP(a,b){return new A.cx("TypeError: "+A.m3(a,b))},
pC(a){var s=this
return s.x.b(a)||A.kz(v.typeUniverse,s).b(a)},
pH(a){return a!=null},
hT(a){if(a!=null)return a
throw A.af(A.aP(a,"Object"),new Error())},
pL(a){return!0},
pk(a){return a},
mJ(a){return!1},
eW(a){return!0===a||!1===a},
hR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.af(A.aP(a,"bool"),new Error())},
my(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.af(A.aP(a,"bool?"),new Error())},
pg(a){if(typeof a=="number")return a
throw A.af(A.aP(a,"double"),new Error())},
ph(a){if(typeof a=="number")return a
if(a==null)return a
throw A.af(A.aP(a,"double?"),new Error())},
b3(a){return typeof a=="number"&&Math.floor(a)===a},
T(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.af(A.aP(a,"int"),new Error())},
hS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.af(A.aP(a,"int?"),new Error())},
pG(a){return typeof a=="number"},
mz(a){if(typeof a=="number")return a
throw A.af(A.aP(a,"num"),new Error())},
mA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.af(A.aP(a,"num?"),new Error())},
pJ(a){return typeof a=="string"},
e(a){if(typeof a=="string")return a
throw A.af(A.aP(a,"String"),new Error())},
bX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.af(A.aP(a,"String?"),new Error())},
pi(a){if(A.mI(a))return a
throw A.af(A.aP(a,"JSObject"),new Error())},
pj(a){if(a==null)return a
if(A.mI(a))return a
throw A.af(A.aP(a,"JSObject?"),new Error())},
mL(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.as(a[q],b)
return s},
pQ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mL(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.as(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mF(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.q2(a.x)
o=a.y
return o.length>0?p+("<"+A.mL(o,b)+">"):p}if(l===10)return A.pQ(a,b)
if(l===11)return A.mF(a,b,null)
if(l===12)return A.mF(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
q2(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
p1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
p0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.hx(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dC(a,5,"#")
q=A.hE(s)
for(p=0;p<s;++p)q[p]=r
o=A.dB(a,b,q)
n[b]=o
return o}else return m},
p_(a,b){return A.mu(a.tR,b)},
oZ(a,b){return A.mu(a.eT,b)},
hx(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.m8(A.m6(a,null,b,!1))
r.set(b,s)
return s},
dD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.m8(A.m6(a,b,c,!0))
q.set(c,r)
return r},
mg(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.kH(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
by(a,b){b.a=A.py
b.b=A.pz
return b},
dC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aV(null,null)
s.w=b
s.as=c
r=A.by(a,s)
a.eC.set(c,r)
return r},
me(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.oX(a,b,r,c)
a.eC.set(r,s)
return s},
oX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.c1(b))if(!(b===t.b||b===t.u))if(s!==6)r=s===7&&A.cD(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.aV(null,null)
q.w=6
q.x=b
q.as=c
return A.by(a,q)},
md(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oV(a,b,r,c)
a.eC.set(r,s)
return s},
oV(a,b,c,d){var s,r
if(d){s=b.w
if(A.c1(b)||b===t.K)return b
else if(s===1)return A.dB(a,"lE",[b])
else if(b===t.b||b===t.u)return t.eH}r=new A.aV(null,null)
r.w=7
r.x=b
r.as=c
return A.by(a,r)},
oY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
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
oU(a){var s,r,q,p,o,n=a.length
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
kH(a,b,c){var s,r,q,p,o,n
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
mf(a,b,c){var s,r,q="+"+(b+"("+A.dA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aV(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.by(a,s)
a.eC.set(q,r)
return r},
mc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oU(i)+"}"}r=n+(g+")")
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
kI(a,b,c,d){var s,r=b.as+("<"+A.dA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oW(a,b,c,r,d)
a.eC.set(r,s)
return s},
oW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hE(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bz(a,b,r,0)
m=A.cB(a,c,r,0)
return A.kI(a,n,m,c!==m)}}l=new A.aV(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.by(a,l)},
m6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
m8(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.oO(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.m7(a,r,l,k,!1)
else if(q===46)r=A.m7(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bT(a.u,a.e,k.pop()))
break
case 94:k.push(A.oY(a.u,k.pop()))
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
case 62:A.oQ(a,k)
break
case 38:A.oP(a,k)
break
case 63:p=a.u
k.push(A.me(p,A.bT(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.md(p,A.bT(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oN(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.m9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.oS(a.u,a.e,o)
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
oO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
m7(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.p1(s,o.x)[p]
if(n==null)A.D('No "'+p+'" in "'+A.om(o)+'"')
d.push(A.dD(s,o,n))}else d.push(p)
return m},
oQ(a,b){var s,r=a.u,q=A.m5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dB(r,p,q))
else{s=A.bT(r,a.e,p)
switch(s.w){case 11:b.push(A.kI(r,s,q,a.n))
break
default:b.push(A.kH(r,s,q))
break}}},
oN(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.m5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bT(p,a.e,o)
q=new A.eI()
q.a=s
q.b=n
q.c=m
b.push(A.mc(p,r,q))
return
case-4:b.push(A.mf(p,b.pop(),s))
return
default:throw A.a(A.dP("Unexpected state under `()`: "+A.l(o)))}},
oP(a,b){var s=b.pop()
if(0===s){b.push(A.dC(a.u,1,"0&"))
return}if(1===s){b.push(A.dC(a.u,4,"1&"))
return}throw A.a(A.dP("Unexpected extended operation "+A.l(s)))},
m5(a,b){var s=b.splice(a.p)
A.m9(a.u,a.e,s)
a.p=b.pop()
return s},
bT(a,b,c){if(typeof c=="string")return A.dB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oR(a,b,c)}else return c},
m9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bT(a,b,c[s])},
oS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bT(a,b,c[s])},
oR(a,b,c){var s,r,q=b.w
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
nd(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ab(a,b,null,c,null)
r.set(c,s)}return s},
ab(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.c1(d))return!0
s=b.w
if(s===4)return!0
if(A.c1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ab(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.u){if(q===7)return A.ab(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.ab(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ab(a,b.x,c,d,e))return!1
return A.ab(a,A.kz(a,b),c,d,e)}if(s===6)return A.ab(a,p,c,d,e)&&A.ab(a,b.x,c,d,e)
if(q===7){if(A.ab(a,b,c,d.x,e))return!0
return A.ab(a,b,c,A.kz(a,d),e)}if(q===6)return A.ab(a,b,c,p,e)||A.ab(a,b,c,d.x,e)
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
if(!A.ab(a,j,c,i,e)||!A.ab(a,i,e,j,c))return!1}return A.mH(a,b.x,c,d.x,e)}if(q===11){if(b===t.J)return!0
if(p)return!1
return A.mH(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pD(a,b,c,d,e)}if(o&&q===10)return A.pI(a,b,c,d,e)
return!1},
mH(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pD(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dD(a,b,r[o])
return A.mx(a,p,null,c,d.y,e)}return A.mx(a,b.y,null,c,d.y,e)},
mx(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ab(a,b[s],d,e[s],f))return!1
return!0},
pI(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ab(a,r[s],c,q[s],e))return!1
return!0},
cD(a){var s=a.w,r=!0
if(!(a===t.b||a===t.u))if(!A.c1(a))if(s!==6)r=s===7&&A.cD(a.x)
return r},
c1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mu(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hE(a){return a>0?new Array(a):v.typeUniverse.sEA},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eI:function eI(){this.c=this.b=this.a=null},
hw:function hw(a){this.a=a},
eG:function eG(){},
cx:function cx(a){this.a=a},
mb(a,b,c){return 0},
dz:function dz(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bx:function bx(a,b){this.a=a
this.$ti=b},
fF(a,b,c,d){if(b==null){if(a==null)return new A.aA(c.i("@<0>").a8(d).i("aA<1,2>"))
b=A.qe()}else{if(A.qm()===b&&A.ql()===a)return new A.cX(c.i("@<0>").a8(d).i("cX<1,2>"))
if(a==null)a=A.qd()}return A.oM(a,b,null,c,d)},
a4(a,b,c){return b.i("@<0>").a8(c).i("fD<1,2>").a(A.qE(a,new A.aA(b.i("@<0>").a8(c).i("aA<1,2>"))))},
n(a,b){return new A.aA(a.i("@<0>").a8(b).i("aA<1,2>"))},
oM(a,b,c,d,e){return new A.dq(a,b,new A.hs(d),d.i("@<0>").a8(e).i("dq<1,2>"))},
kw(a){return new A.aw(a.i("aw<0>"))},
aS(a){return new A.aw(a.i("aw<0>"))},
lM(a,b){return b.i("kv<0>").a(A.qF(a,new A.aw(b.i("aw<0>"))))},
kG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ht(a,b,c){var s=new A.bS(a,b,c.i("bS<0>"))
s.c=a.e
return s},
pn(a,b){return J.u(a,b)},
po(a){return J.ac(a)},
aj(a,b,c){var s=A.fF(null,null,b,c)
a.an(0,new A.fG(s,b,c))
return s},
fH(a,b,c){var s=A.fF(null,null,b,c)
s.a9(0,a)
return s},
aD(a,b){var s,r,q=A.kw(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)q.t(0,b.a(a[r]))
return q},
e8(a,b){var s=A.kw(b)
s.a9(0,a)
return s},
ky(a){var s,r
if(A.l8(a))return"{...}"
s=new A.W("")
try{r={}
B.b.t($.aF,a)
s.a+="{"
r.a=!0
a.an(0,new A.fK(r,s))
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
hs:function hs(a){this.a=a},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cr:function cr(a){var _=this
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
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
z:function z(){},
fJ:function fJ(a){this.a=a},
fK:function fK(a,b){this.a=a
this.b=b},
cp:function cp(){},
dr:function dr(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ap:function ap(){},
cg:function cg(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
bf:function bf(){},
dy:function dy(){},
cy:function cy(){},
pN(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.c4(r)
q=A.B(String(s),null,null)
throw A.a(q)}q=A.hV(p)
return q},
hV(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.eJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.hV(a[s])
return a},
pc(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.nH()
else s=new Uint8Array(o)
for(r=J.C(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
pb(a,b,c,d){var s=a?$.nG():$.nF()
if(s==null)return null
if(0===c&&d===b.length)return A.mt(s,b)
return A.mt(s,b.subarray(c,d))},
mt(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
lu(a,b,c,d,e,f){if(B.d.bX(f,4)!==0)throw A.a(A.B("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.B("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.B("Invalid base64 padding, more than two '=' characters",a,b))},
oF(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=b.length,r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){if(!(p<s))return A.b(b,p)
n=b[p]
o|=n
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.b(a,l)
q&2&&A.U(f)
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
q&2&&A.U(f)
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
q&2&&A.U(f)
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
throw A.a(A.lt(b,"Not a byte value at index "+p+": 0x"+B.d.hd(b[p],16),null))},
oE(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.b0(a1,2),f=a1&3,e=$.ln()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.b(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.b(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.U(d)
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
q&2&&A.U(d)
s=d.length
if(!(a0<s))return A.b(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.b(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.a(A.B(i,a,p))
q&2&&A.U(d)
if(!(a0<d.length))return A.b(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.m1(a,p+1,c,-j-1)}throw A.a(A.B(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.b(a,p)
if(a.charCodeAt(p)>127)break}throw A.a(A.B(h,a,p))},
oC(a,b,c,d){var s=A.oD(a,b,c),r=(d&3)+(s-b),q=B.d.b0(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.nE()},
oD(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
m1(a,b,c,d){var s,r,q
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
lK(a,b,c){return new A.cY(a,b)},
pp(a){return a.hc()},
oK(a,b){return new A.hp(a,[],A.qi())},
oL(a,b,c){var s,r=new A.W(""),q=A.oK(r,b)
q.bV(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
pd(a){switch(a){case 65:return"Missing extension byte"
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
ho:function ho(a){this.a=a},
eK:function eK(a){this.a=a},
hC:function hC(){},
hB:function hB(){},
c6:function c6(a){this.a=a},
dQ:function dQ(a){this.a=a},
hi:function hi(a){this.a=0
this.b=a},
f7:function f7(){},
hh:function hh(){this.a=0},
aI:function aI(){},
dU:function dU(){},
dX:function dX(){},
cY:function cY(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
e6:function e6(){},
fC:function fC(a){this.b=a},
fB:function fB(a){this.a=a},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.c=a
this.a=b
this.b=c},
ey:function ey(){},
h4:function h4(){},
hD:function hD(a){this.b=0
this.c=a},
h3:function h3(a){this.a=a},
hA:function hA(a){this.a=a
this.b=16
this.c=0},
qL(a){return A.f0(a)},
c0(a,b,c){var s
A.e(a)
A.hS(c)
t.ck.a(b)
s=A.aU(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.a(A.B(a,null,null))},
nb(a,b){return A.aU(A.e(a),A.hS(b))},
aT(a,b,c,d){var s,r=c?J.kr(a,d):J.lH(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
P(a,b,c){var s,r=A.c([],c.i("J<0>"))
for(s=J.F(a);s.l();)B.b.t(r,c.a(s.gm()))
if(b)return r
r.$flags=1
return r},
o(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("J<0>"))
s=A.c([],b.i("J<0>"))
for(r=J.F(a);r.l();)B.b.t(s,r.gm())
return s},
kx(a,b){var s=A.P(a,!1,b)
s.$flags=3
return s},
df(a,b,c){var s,r
A.ad(b,"start")
s=c!=null
if(s){r=c-b
if(r<0)throw A.a(A.a8(c,b,null,"end",null))
if(r===0)return""}if(t.bm.b(a))return A.ot(a,b,c)
if(s)a=A.aW(a,0,A.eX(c,"count",t.p),A.a9(a).i("r.E"))
if(b>0)a=J.nS(a,b)
s=A.o(a,t.p)
return A.og(s)},
ot(a,b,c){var s=a.length
if(b>=s)return""
return A.oi(a,b,c==null||c>s?s:c)},
I(a,b){return new A.b9(a,A.ks(a,!1,b,!1,!1,""))},
qK(a,b){return a==null?b==null:a===b},
kB(a,b,c){var s=J.F(b)
if(!s.l())return a
if(c.length===0){do a+=A.l(s.gm())
while(s.l())}else{a+=A.l(s.gm())
while(s.l())a=a+c+A.l(s.gm())}return a},
kF(){var s,r,q=A.of()
if(q==null)throw A.a(A.M("'Uri.base' is not supported"))
s=$.lZ
if(s!=null&&q===$.lY)return s
r=A.ew(q,0,null)
$.lZ=r
$.lY=q
return r},
dY(a){if(typeof a=="number"||A.eW(a)||a==null)return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lS(a)},
dP(a){return new A.c5(a)},
a1(a){return new A.aZ(!1,null,null,a)},
lt(a,b,c){return new A.aZ(!0,a,b,c)},
cI(a,b,c){return a},
a5(a){var s=null
return new A.ci(s,s,!1,s,s,a)},
fR(a,b){return new A.ci(null,null,!0,a,b,"Value not in range")},
a8(a,b,c,d,e){return new A.ci(b,c,!0,a,d,"Invalid value")},
cj(a,b,c,d){if(a<b||a>c)throw A.a(A.a8(a,b,c,d,null))
return a},
be(a,b,c){if(0>a||a>c)throw A.a(A.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.a8(b,a,c,"end",null))
return b}return c},
ad(a,b){if(a<0)throw A.a(A.a8(a,0,null,b==null?"index":b,null))
return a},
e_(a,b,c,d,e){return new A.dZ(b,!0,a,e,"Index out of range")},
M(a){return new A.dj(a)},
lV(a){return new A.es(a)},
bi(a){return new A.bK(a)},
Q(a){return new A.dT(a)},
B(a,b,c){return new A.i(a,b,c)},
ob(a,b,c){var s,r
if(A.l8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.b.t($.aF,a)
try{A.pM(a,s)}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}r=A.kB(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fx(a,b,c){var s,r
if(A.l8(a))return b+"..."+c
s=new A.W(b)
B.b.t($.aF,a)
try{r=s
r.a=A.kB(r.a,a,", ")}finally{if(0>=$.aF.length)return A.b($.aF,-1)
$.aF.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pM(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.l(l.gm())
B.b.t(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.b.t(b,A.l(p))
return}r=A.l(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.b.t(b,"...")
return}}q=A.l(p)
r=A.l(o)
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
return A.kC(A.bv(A.bv($.kk(),s),b))}if(B.n===d){s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
return A.kC(A.bv(A.bv(A.bv($.kk(),s),b),c))}s=J.ac(a)
b=J.ac(b)
c=J.ac(c)
d=J.ac(d)
d=A.kC(A.bv(A.bv(A.bv(A.bv($.kk(),s),b),c),d))
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
if(n===0)return A.lX(a7>0||a8<a8?B.a.v(a6,a7,a8):a6,5,a5).gea()
else if(n===32)return A.lX(B.a.v(a6,s,a8),0,a5).gea()}m=A.aT(8,0,!1,t.p)
B.b.j(m,0,0)
r=a7-1
B.b.j(m,1,r)
B.b.j(m,2,r)
B.b.j(m,7,r)
B.b.j(m,3,a7)
B.b.j(m,4,a7)
B.b.j(m,5,a8)
B.b.j(m,6,a8)
if(A.mN(a6,a7,a8,0,m)>=14)B.b.j(m,7,a8)
l=m[1]
if(l>=a7)if(A.mN(a6,a7,l,20,m)===20)m[7]=l
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
g-=a7}return new A.aO(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.kK(a6,a7,l)
else{if(l===a7)A.cA(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.mo(a6,a,k-1):""
a1=A.ml(a6,k,j,!1)
s=j+1
if(s<i){a2=A.aU(B.a.v(a6,s,i),a5)
b=A.hy(a2==null?A.D(A.B("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.mm(a6,i,h,a5,e,a1!=null)
a4=h<g?A.mn(a6,h+1,g,a5):a5
return A.dF(e,a0,a1,b,a3,a4,g<a8?A.mk(a6,g+1,a8):a5)},
oz(a){var s,r,q=0,p=null
try{s=A.ew(a,q,p)
return s}catch(r){if(t.d.b(A.c4(r)))return null
else throw r}},
oy(a){A.e(a)
return A.ak(a,0,a.length,B.e,!1)},
m0(a){var s=t.N
return B.b.bT(A.c(a.split("&"),t.s),A.n(s,s),new A.h2(B.e),t.G)},
ev(a,b,c){throw A.a(A.B("Illegal IPv4 address, "+a,b,c))},
ov(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.b(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ev("each part must be in the range 0..255",a,r)}A.ev("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ev(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.U(d)
if(!(k<16))return A.b(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ev(j,a,q)
p=l}A.ev("IPv4 address should contain exactly 4 parts",a,q)},
ow(a,b,c){var s
if(b===c)throw A.a(A.B("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.b(a,b)
if(a.charCodeAt(b)===118){s=A.ox(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.m_(a,b,c)
return!0},
ox(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
m_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.h1(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.ov(a3,m,a5,s,p*2)
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
mh(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cA(a,b,c){throw A.a(A.B(c,a,b))},
p3(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.p(q,"/")){s=A.M("Illegal path character "+q)
throw A.a(s)}}},
p5(a){var s
if(a.length===0)return B.am
s=A.ms(a)
s.e9(A.mZ())
return A.lA(s,t.N,t.a)},
hy(a,b){if(a!=null&&a===A.mh(b))return null
return a},
ml(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.b(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.b(a,r)
if(a.charCodeAt(r)!==93)A.cA(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.b(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.p4(a,q,r)
if(o<r){n=o+1
p=A.mr(a,B.a.a4(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.ow(a,q,o)
l=B.a.v(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.b(a,k)
if(a.charCodeAt(k)===58){o=B.a.af(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.mr(a,B.a.a4(a,"25",n)?o+3:n,c,"%25")}else p=""
A.m_(a,b,o)
return"["+B.a.v(a,b,o)+p+"]"}}return A.p9(a,b,c)},
p4(a,b,c){var s=B.a.af(a,"%",b)
return s>=b&&s<c?s:c},
mr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.W(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kL(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.W("")
l=h.a+=B.a.v(a,q,r)
if(m)n=B.a.v(a,r,r+3)
else if(n==="%")A.cA(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.W("")
if(q<r){h.a+=B.a.v(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.b(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.a.v(a,q,r)
if(h==null){h=new A.W("")
m=h}else m=h
m.a+=i
l=A.kJ(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.a.v(a,b,c)
if(q<c){i=B.a.v(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
p9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.b(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kL(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.W("")
k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.a.v(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.W("")
if(q<r){p.a+=B.a.v(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cA(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.b(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.a.v(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.W("")
l=p}else l=p
l.a+=k
j=A.kJ(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.a.v(a,b,c)
if(q<c){k=B.a.v(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
kK(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.b(a,b)
if(!A.mj(a.charCodeAt(b)))A.cA(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.cA(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.a.v(a,b,c)
return A.p2(q?a.toLowerCase():a)},
p2(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mo(a,b,c){if(a==null)return""
return A.dG(a,b,c,16,!1,!1)},
mm(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dG(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.p8(s,e,f)},
p8(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.kM(a,!s||c)
return A.bW(a)},
mn(a,b,c,d){if(a!=null)return A.dG(a,b,c,256,!0,!1)
return null},
mk(a,b,c){if(a==null)return null
return A.dG(a,b,c,256,!0,!1)},
kL(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.b(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.b(a,l)
q=a.charCodeAt(l)
p=A.iY(r)
o=A.iY(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.b(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.A(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.a.v(a,b,b+3).toUpperCase()
return null},
kJ(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
o+=3}}return A.df(s,0,null)},
dG(a,b,c,d,e,f){var s=A.mq(a,b,c,d,e,f)
return s==null?B.a.v(a,b,c):s},
mq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.b(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kL(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cA(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.b(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kJ(n)}if(o==null){o=new A.W("")
k=o}else k=o
k.a=(k.a+=B.a.v(a,p,q))+l
if(typeof m!=="number")return A.qJ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.a.v(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
mp(a){if(B.a.u(a,"."))return!0
return B.a.az(a,"/.")!==-1},
bW(a){var s,r,q,p,o,n,m
if(!A.mp(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.b(s,-1)
s.pop()
if(s.length===0)B.b.t(s,"")}p=!0}else{p="."===n
if(!p)B.b.t(s,n)}}if(p)B.b.t(s,"")
return B.b.V(s,"/")},
kM(a,b){var s,r,q,p,o,n
if(!A.mp(a))return!b?A.mi(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.gJ(s)!==".."){if(0>=s.length)return A.b(s,-1)
s.pop()}else B.b.t(s,"..")
p=!0}else{p="."===n
if(!p)B.b.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.b.t(s,"")
if(!b){if(0>=s.length)return A.b(s,0)
B.b.j(s,0,A.mi(s[0]))}return B.b.V(s,"/")},
mi(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.mj(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.a.v(a,0,s)+"%3A"+B.a.D(a,s+1)
if(r<=127){if(!(r<128))return A.b(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
pa(a,b){if(a.h_("package")&&a.c==null)return A.mO(b,0,b.length)
return-1},
p6(){return A.c([],t.s)},
ms(a){var s,r,q,p,o,n=A.n(t.N,t.a),m=new A.hz(a,B.e,n)
for(s=a.length,r=0,q=0,p=-1;r<s;){o=a.charCodeAt(r)
if(o===61){if(p<0)p=r}else if(o===38){m.$3(q,p,r)
q=r+1
p=-1}++r}m.$3(q,p,r)
return n},
p7(a,b){var s,r,q,p,o
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
B.b.t(p,A.p7(a,n+1))
n+=2}else if(e&&r===43)B.b.t(p,32)
else B.b.t(p,r)}}return d.ct(p)},
mj(a){var s=a|32
return 97<=s&&s<=122},
lX(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
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
if((j.length&1)===1)a=B.v.e0(a,m,s)
else{l=A.mq(a,m,s,256,!0,!1)
if(l!=null)a=B.a.aX(a,m,s,l)}return new A.h0(a,j,c)},
mN(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.b(n,p)
o=n.charCodeAt(p)
d=o&31
B.b.j(e,o>>>5,r)}return d},
ma(a){if(a.b===7&&B.a.u(a.a,"package")&&a.c<=0)return A.mO(a.a,a.e,a.f)
return-1},
pZ(a,b){A.e(a)
return A.kx(t.a.a(b),t.N)},
mO(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.b(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
pm(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.b(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
hl:function hl(){},
R:function R(){},
c5:function c5(a){this.a=a},
dh:function dh(){},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ci:function ci(a,b,c,d,e,f){var _=this
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
W:function W(a){this.a=a},
h2:function h2(a){this.a=a},
h1:function h1(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=$},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b,c){this.a=a
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
ce:function ce(a){this.$ti=a},
cz:function cz(){},
bN:function bN(a){this.$ti=a},
oj(a){return 8},
ok(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dv:function dv(){},
lW(){throw A.a(A.M("Cannot modify an unmodifiable Map"))},
aN:function aN(){},
mK(a){return a},
mS(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.W("")
o=a+"("
p.a=o
n=A.t(b)
m=n.i("bL<1>")
l=new A.bL(b,0,s,m)
l.es(b,0,s,n.c)
m=o+new A.H(l,m.i("d(y.E)").a(new A.i8()),m.i("H<y.E,d>")).V(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.a1(p.n(0)))}},
f8:function f8(a){this.a=a},
f9:function f9(){},
fa:function fa(){},
i8:function i8(){},
cd:function cd(){},
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
B.b.t(q,"")}return new A.fM(b,m,r,q)},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
lO(a){return new A.ee(a)},
ee:function ee(a){this.a=a},
ou(){var s,r,q,p,o,n,m,l,k=null
if(A.kF().gak()!=="file")return $.dN()
if(!B.a.aG(A.kF().gaq(),"/"))return $.dN()
s=A.mo(k,0,0)
r=A.ml(k,0,0,!1)
q=A.mn(k,0,0,k)
p=A.mk(k,0,0)
o=A.hy(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.mm("a/b",0,3,k,"",m)
if(n&&!B.a.u(l,"/"))l=A.kM(l,m)
else l=A.bW(l)
if(A.dF("",s,n&&B.a.u(l,"//")?"":r,o,l,q,p).cM()==="a\\b")return $.f5()
return $.nt()},
fY:function fY(){},
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
oq(a,b){var s=A.c([0],t.t)
s=new A.fW(b,s,new Uint32Array(a.length))
s.er(new A.aH(a),b)
return s},
V(a,b){if(b<0)A.D(A.a5("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.D(A.a5("Offset "+b+u.s+a.gk(0)+"."))
return new A.cb(a,b)},
a_(a,b,c){if(c<b)A.D(A.a1("End "+c+" must come after start "+b+"."))
else if(c>a.c.length)A.D(A.a5("End "+c+u.s+a.gk(0)+"."))
else if(b<0)A.D(A.a5("Start may not be negative, was "+b+"."))
return new A.bl(a,b,c)},
fW:function fW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cb:function cb(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
o4(a,b){var s=A.o5(A.c([A.oG(a,!0)],t.r)),r=new A.fv(b).$0(),q=B.d.n(B.b.gJ(s).b+1),p=A.o6(s)?0:3,o=A.t(s)
return new A.fb(s,r,null,1+Math.max(q.length,p),new A.H(s,o.i("h(1)").a(new A.fd()),o.i("H<1,h>")).h8(0,B.aG),!A.qT(new A.H(s,o.i("v?(1)").a(new A.fe()),o.i("H<1,v?>"))),new A.W(""))},
o6(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.u(r.c,q.c))return!1}return!0},
o5(a){var s,r,q=A.qI(a,new A.fg(),t.C,t.K)
for(s=A.j(q),r=new A.aB(q,q.r,q.e,s.i("aB<2>"));r.l();)J.nT(r.d,new A.fh())
s=s.i("O<1,2>")
r=s.i("az<f.E,aE>")
s=A.o(new A.az(new A.O(q,s),s.i("f<aE>(f.E)").a(new A.fi()),r),r.i("f.E"))
return s},
oG(a,b){var s=new A.hm(a).$0()
return new A.ae(s,!0,null)},
oI(a){var s,r,q,p,o,n,m=a.gai()
if(!B.a.p(m,"\r\n"))return a
s=a.gG().gK()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gC()
p=a.gX()
o=a.gG().ga6()
p=A.bJ(s,a.gG().gab(),o,p)
o=A.aG(m,"\r\n","\n")
n=a.gaw()
return A.fX(r,p,o,A.aG(n,"\r\n","\n"))},
oJ(a){var s,r,q,p,o,n,m
if(!B.a.aG(a.gaw(),"\n"))return a
if(B.a.aG(a.gai(),"\n\n"))return a
s=B.a.v(a.gaw(),0,a.gaw().length-1)
r=a.gai()
q=a.gC()
p=a.gG()
if(B.a.aG(a.gai(),"\n")){o=A.iQ(a.gaw(),a.gai(),a.gC().gab())
o.toString
o=o+a.gC().gab()+a.gk(a)===a.gaw().length}else o=!1
if(o){r=B.a.v(a.gai(),0,a.gai().length-1)
if(r.length===0)p=q
else{o=a.gG().gK()
n=a.gX()
m=a.gG().ga6()
p=A.bJ(o-1,A.m4(s),m-1,n)
q=a.gC().gK()===a.gG().gK()?p:a.gC()}}return A.fX(q,p,r,s)},
oH(a){var s,r,q,p,o
if(a.gG().gab()!==0)return a
if(a.gG().ga6()===a.gC().ga6())return a
s=B.a.v(a.gai(),0,a.gai().length-1)
r=a.gC()
q=a.gG().gK()
p=a.gX()
o=a.gG().ga6()
p=A.bJ(q-1,s.length-B.a.bb(s,"\n")-1,o-1,p)
return A.fX(r,p,s,B.a.aG(a.gaw(),"\n")?B.a.v(a.gaw(),0,a.gaw().length-1):a.gaw())},
m4(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.a.ae(a,"\n",r-2)-1
else return r-B.a.bb(a,"\n")-1}},
fb:function fb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fv:function fv(a){this.a=a},
fd:function fd(){},
fc:function fc(){},
fe:function fe(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
ff:function ff(a){this.a=a},
fw:function fw(){},
fj:function fj(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
ft:function ft(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ(a,b,c,d){var s=c==null,r=s?0:c,q=b==null,p=q?a:b
if(a<0)A.D(A.a5("Offset may not be negative, was "+a+"."))
else if(!s&&c<0)A.D(A.a5("Line may not be negative, was "+A.l(c)+"."))
else if(!q&&b<0)A.D(A.a5("Column may not be negative, was "+A.l(b)+"."))
return new A.bI(d,a,r,p)},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(){},
kA(a,b,c){var s=new A.dc(a,b,c)
s.cP(a,b,c)
return s},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(){},
en:function en(){},
cl:function cl(){},
fX(a,b,c,d){var s=new A.bh(d,a,b,c)
s.cP(a,b,c)
if(!B.a.p(d,c))A.D(A.a1('The context line "'+d+'" must contain "'+c+'".'))
if(A.iQ(d,c,a.gab())==null)A.D(A.a1('The span text "'+c+'" must start at column '+(a.gab()+1)+' in a line within "'+d+'".'))
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
or(a,b,c){return new A.de(c,a,b)},
de:function de(a,b,c){this.c=a
this.a=b
this.b=c},
eo:function eo(){},
eq:function eq(){},
qr(a,b){return new A.hk([],[]).cv(a,b)},
qs(a){return new A.iC(new A.cr(t.cR)).$1(a)},
hk:function hk(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
lD(a,b,c,d){return new A.cO(a,d,c==null?A.c([],t.l):c,b)},
aa:function aa(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b){this.a=a
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
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
a0:function a0(a){this.a=a},
fS:function fS(a,b,c,d,e,f){var _=this
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
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
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
X:function X(a,b){this.a=a
this.b=b},
kj:function kj(){},
eA:function eA(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
G(a,b){return new A.cq(null,a,b)},
cq:function cq(a,b,c){this.c=a
this.a=b
this.b=c},
N:function N(){},
bP:function bP(a,b,c){this.b=a
this.c=b
this.a=c},
hf:function hf(){},
bO:function bO(a,b,c){this.b=a
this.c=b
this.a=c},
an:function an(a,b,c){this.b=a
this.c=b
this.a=c},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
Z(a){var s=new A.h6(A.c([],t.c0),a,A.f_(a,null,!1,null).a,A.aS(t.T))
s.d5()
return s},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n1(a,b){return A.fF(A.qA(),A.iP(),a,b)},
bm(a,b){var s=t.T
if(s.b(a))a=a.ga7()
if(s.b(b))b=b.ga7()
s=t.f
if(s.b(a)&&s.b(b))return A.r0(a,b)
s=t.j
if(s.b(a)&&s.b(b))return A.qX(a,b)
return J.u(a,b)},
qX(a,b){var s,r,q
if(J.a6(a)!==J.a6(b))return!1
s=t.h
if(s.b(a))a=a.gM()
if(s.b(b))b=b.gM()
for(s=J.C(a),r=J.C(b),q=0;q<s.gk(a);++q)if(!A.bm(s.h(a,q),r.h(b,q)))return!1
return!0},
r0(a,b){var s={}
s.a=a
s.b=b
if(a.gk(a)!==b.gk(b))return!1
return a.gE().aO(0,new A.j7(s))},
qt(a){var s
if(t.f.b(a)){s=t.z
return B.a7.b2(a.gE().ac(0,A.iP(),s))^B.a7.b2(a.gag().ac(0,A.iP(),s))}else if(t.R.b(a))return B.aI.b2(J.aR(a,A.iP(),t.z))
else if(t.m.b(a))return J.ac(a.ga7())
return J.ac(a)},
n6(a,b){return t.T.a(a.gM().gE().bS(0,new A.iR(b)))},
n9(a,b){var s,r,q,p,o,n,m,l
for(s=A.o7(a.gM().gO(),0,t.x),r=s.a,r=r.gq(r),q=s.b,s=new A.bE(r,q,A.j(s).i("bE<1>"));s.l();){p=s.c
p=p>=0?new A.b2(q+p,r.gm()):A.D(A.Y())
o=p.a
n=p.b
m=n.a
l=n.b
if(A.bm(m,b))return new A.dx(o,t.T.a(m),l)}throw A.a(A.G(A.l(b)+" not found in map",a.gA()))},
qG(a,b){return a.gE().bS(0,new A.iS(b))},
l_(a,b){var s=a.gE().aJ(0,new A.iB(b))
return!s.gL(s)},
j7:function j7(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iB:function iB(a){this.a=a},
fQ(a,b,c){return new A.d4(a,b,c,!0,b,"path",null)},
f6(a,b){return new A.dO("Encountered an alias node along "+A.l(a)+'! Alias nodes are nodes that refer to a previously serialized nodes, and are denoted by either the "*" or the "&" indicators in the original YAML. As the resulting behavior of mutations on these nodes is not well-defined, the operation will not be supported by this library.\n\n'+b.gA().dZ("The alias was first defined here."),null,null)},
n_(a,b,c){var s=A.aG(b,"\n","\n> ")
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
rF(a,b,c,d){var s,r,q,p,o,n,m,l
A.cj(c,0,b.gk(b)-1,null)
s=J.m(b.gM(),c)
r=s.gA().gC().gK()
q=a.b
if(b.ga2()===B.m){p=A.l1(q,b)+A.l0(a)
o=A.dK(q)
n=A.dM(A.at(d,B.i,B.j),p,o)
if(!(t.j.b(d)&&d.gk(d)!==0))m=t.f.b(d)&&d.gE().gb3(0)
else m=!0
if(m)n=B.a.D(n,p)
else if(A.hg(s)===B.m)n+=o
l=A.bZ(s)
if(l<=r){++r
n=" "+n
l=r}return A.au(r,l-r,n)}else{n=A.bn(d)
m=s.gA()
return A.au(r,m.gk(m),n)}},
ri(a,b,c){var s,r,q,p,o,n=J.m(b.gM(),c)
if(b.ga2()===B.f){A.cj(c,0,b.gk(b)-1,null)
s=n.gA()
r=a.b
q=s.gC().gK()
p=s.gG().gK()
o=q-1
if(c===0){q=B.a.ae(r,"[",o)+1
p=c===b.gk(b)-1?B.a.af(r,"]",p):B.a.af(r,",",p)+1}else q=B.a.ae(r,",",o)
return A.au(q,p-q,"")}else return A.pR(a,b,n,c)},
pR(a,b,c,d){var s,r,q,p,o,n,m,l=b.gk(b),k=l-1
A.cj(d,0,k,null)
s=a.b
r=c.gA()
q=r.gk(r)===0
p=A.bZ(c)
o=A.l1(s,b)
n=B.a.ae(s,"-",q?r.gC().gK():r.gC().gK()-1)
m=q?p+1:p
return A.nj(s,b,o,d===0,d>=k,l===1,A.dK(s),new A.i1(b,d,s),new A.cv(m,n))},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
rG(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(!A.l_(b,c)){s=A.at(c,B.i,B.j)
if(b.ga2()===B.f)return A.pe(a,b,s,a0)
else{r=a.b
q=A.eZ(r,b)
p=A.l0(a)
o=A.bn(A.at(s,B.i,B.j))
n=A.dK(r)
m=B.a.aj(" ",A.eZ(r,b))
l=b.gA().gG().gK()
k=A.n7(b,o)
if(b.gE().gb3(0)){j=b.gE()
if(k===j.gk(j)){j=b.gM().gag()
i=B.a.af(r,"\n",A.bZ(j.gJ(j)))
if(i!==-1)l=i+1
else m=n+m}else{j=b.gM().gE().aR(0)
if(!(k>=0&&k<j.length))return A.b(j,k)
l=B.a.ae(r,"\n",t.T.a(j[k]).gA().gC().gK())+1}}h=A.dM(a0,q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hg(a0)
q=q!==B.f&&!A.l7(a0)}else q=!1
return A.au(l,0,q?m+(o+":"+n+h+n):m+(o+": "+h+n))}}else if(b.ga2()===B.f){g=b.gM().h(0,c).gA()
h=A.bn(a0)
return A.au(g.gC().gK(),g.gk(g),h)}else{r=a.b
n=A.dK(r)
q=A.eZ(r,b)
p=A.l0(a)
s=A.n6(b,c)
f=A.dM(A.at(a0,B.i,B.j),q+p,n)
if(t.f.b(a0)||t.j.b(a0)){q=A.hg(a0)
q=q!==B.f&&!A.l7(a0)}else q=!1
if(q)f=n+f
if(!B.a.u(f,n))f=" "+f
e=s.gA().gG().gK()+1
q=b.gM().h(0,c)
q.toString
d=A.bZ(q)
return A.au(e,(d<e?e:d)-e,f)}},
rj(a,b,c){var s,r,q,p,o,n,m
if(b.ga2()===B.f){s=A.n9(b,c)
r=s.b
q=r.gA().gC().gK()
p=s.c.gA().gG().gK()
o=a.b
n=b.gE()
m=q-1
if(A.bm(r,n.gU(n))){q=B.a.ae(o,"{",m)+1
n=b.gE()
p=A.bm(r,n.gJ(n))?B.a.af(o,"}",p):B.a.af(o,",",p)+1}else q=B.a.ae(o,",",m)
return A.au(q,p-q,"")}else return A.pS(a,b,c)},
pe(a,b,c,d){var s,r=A.bn(c),q=A.bn(d),p=b.gE()
if(p.gL(p))return A.au(b.gA().gG().gK()-1,0,r+": "+q)
s=A.n7(b,r)
p=b.gE()
if(s===p.gk(p))return A.au(b.gA().gG().gK()-1,0,", "+r+": "+q)
p=b.gM().gE().aR(0)
if(!(s>=0&&s<p.length))return A.b(p,s)
return A.au(t.T.a(p[s]).gA().gC().gK(),0,r+": "+q+", ")},
pS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=A.n9(b,c)
r=i.a=s.a
q=s.c
p=a.b
o=b.gE()
n=o.gk(o)
m=s.b.gA()
o=A.eZ(p,b)
l=r===0
k=l?b.gA().gC().gK():m.gC().gK()
j=q.gA()
j=j.gk(j)===0?m.gG().gK()+2:A.bZ(q)
return A.nj(p,b,o,l,r>=n-1,n===1,A.dK(p),new A.i2(i,b,p),new A.cv(j,k))},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
au(a,b,c){A.ad(a,null)
A.ad(b,null)
return new A.db(a,b,c)},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
kO(a){var s,r=new A.aH(a)
for(s=$.lq(),s=new A.ah(s,s.r,s.e,A.j(s).i("ah<1>"));s.l();)if(r.p(r,s.d))return!0
return!1},
bY(a){var s,r,q,p,o=new A.W("")
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E");s.l();){q=s.d
if(q==null)q=r.a(q)
p=$.nK()
if(p.h(0,q)!=null){q=A.l(p.h(0,q))
o.a+=q}else{q=A.A(q)
o.a+=q}}return'"'+o.n(0)+'"'},
mR(a){if(A.kO(a)||B.a.p(a,"\n"))return null
return"'"+A.aG(a,"'","''")+"'"},
q0(a,b,c){var s,r,q,p,o=a.length
if(o===0||B.a.N(a).length!==o)return null
if(A.kO(a))return null
s=B.a.aj(" ",b)
r=B.a.he(a)
q=B.a.D(a,r.length)
o=c+s
p=A.c(A.aG(r,"\n",o).split(c),t.s)
r=A.oa(p,new A.i7(p,s,c),t.N)
return">-\n"+s+r+A.aG(q,"\n",o)},
q1(a,b,c){var s,r=a.length
if(r===0||B.a.N(a).length!==r)return null
if(A.kO(a))return null
s=B.a.aj(" ",b)
return"|-\n"+s+A.aG(a,"\n",c+s)},
q6(a){var s,r=a.ga7(),q=a.ga2()
if(typeof r!="string")return J.al(r)
switch(q){case B.M:return A.bY(r)
case B.B:s=A.mR(r)
return s==null?A.bY(r):s
default:s=A.l6(r)?null:r
return s==null?A.bY(r):s}},
q5(a,b,c){var s,r=a.ga7(),q=a.ga2()
A.kV(r)
if(typeof r!="string")return J.al(r)
switch(q){case B.h:s=A.l6(r)?null:r
return s==null?A.bY(r):s
case B.B:s=A.mR(r)
return s==null?A.bY(r):s
case B.N:s=A.q0(r,b,c)
return s==null?A.bY(r):s
case B.O:s=A.q1(r,b,c)
return s==null?A.bY(r):s
default:s=A.l6(r)?null:r
return s==null?A.bY(r):s}},
bn(a){t.T.a(a)
if(t.h.b(a))return"["+J.aR(a.gM(),A.rx(),t.N).V(0,", ")+"]"
else if(t.S.b(a))return"{"+a.gM().gO().ac(0,new A.ki(),t.N).V(0,", ")+"}"
return A.q6(t.m.a(a))},
dM(a,b,c){var s,r
if(!A.qU(a))return A.bn(a)
s=b+2
if(t.h.b(a)){if(a.gk(a)===0)return B.a.aj(" ",b)+"[]"
return J.aR(a.gM(),new A.kg(s,c,b),t.N).V(0,c)}else if(t.S.b(a)){r=a.gE()
if(r.gL(r))return B.a.aj(" ",b)+"{}"
return a.gM().gO().ac(0,new A.kh(b,s,c),t.N).V(0,c)}return A.q5(t.m.a(a),s,c)},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(){},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
np(a,b){var s,r=A.rH(),q=$.kl()
try{$.nr=r
s=a.$0()
return s}finally{$.nr=q}},
mG(a,b){},
l6(a){var s,r,q
try{s=A.np(new A.j4(a),t.T)
if(!J.u(s.ga7(),a))return!0
r=B.a.p(a,A.I("\\{|\\[|\\]|\\}|,",!0))
return r}catch(q){return!0}},
kV(a){if(typeof a=="number"||typeof a=="string"||A.eW(a)||a==null)return
throw A.a(A.lt(a,"value","Not a valid scalar type!"))},
qU(a){var s
if(t.m.b(a))if(a.ga2()===B.O||a.ga2()===B.N||a.ga2()===B.j)return!0
if(t.h.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
if(t.S.b(a))s=a.ga2()===B.m||a.ga2()===B.i
else s=!1
if(s)return!0
return!1},
bZ(a){var s
if(t.h.b(a))if(a.ga2()===B.f)return a.gA().gG().gK()
else return A.bZ(J.kp(a.gM()))
else if(t.S.b(a))if(a.ga2()===B.f)return a.gA().gG().gK()
else{s=a.gM().gag()
return A.bZ(s.gJ(s))}return a.gA().gG().gK()},
qW(a,b){return A.b3(a)&&a>=0&&a<b},
l7(a){var s
if(t.f.b(a)){s=a.gE()
return s.gL(s)}if(t.j.b(a))return a.gk(a)===0
return!1},
n7(a,b){var s,r,q,p,o,n=a.gM().gE().ac(0,new A.iT(),t.N).aR(0)
for(s=n.length,r=1;r<s;++r){q=n[r]
p=n[r-1]
if(q===p)q=0
else q=q<p?-1:1
if(q<0){s=a.gE()
return s.gk(s)}}o=B.b.b7(n,new A.iU(b))
if(o!==-1)return o
s=a.gE()
return s.gk(s)},
l0(a){var s,r,q,p,o,n,m=a.cn([],null),l=t.S
if(l.b(m)&&m.ga2()===B.m)s=m.gM().gag()
else s=t.h.b(m)&&m.ga2()===B.m?m.gM():null
r=2
if(s!=null)for(q=J.F(s),p=t.h;q.l();){o=q.gm()
if(p.b(o))n=A.l1(a.b,o)
else n=l.b(o)?A.eZ(a.b,o):0
if(n!==0)r=n}return r},
l1(a,b){var s
if(b.ga2()===B.f)return 0
if(b.gk(b)===0)throw A.a(A.M("Unable to get indentation for empty block list"))
s=B.a.ae(a,"-",J.kp(b.gM()).gA().gC().gK()-1)
if(s===0)return s
return s-B.a.ae(a,"\n",s-1)-1},
eZ(a,b){var s,r,q,p
if(b.ga2()===B.f)return 0
s=b.gE()
if(s.gL(s))throw A.a(A.M("Unable to get indentation for empty block map"))
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
qN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
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
case 3:j=B.a.af(a,$.lo(),r)
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
qM(a,b){var s,r,q=Math.max(0,B.a.ae(a,$.lo(),Math.max(0,b-1)))
if(q>>>0!==q||q>=a.length)return A.b(a,q)
s=a[q]
A:{if("\r"===s||"\n"===s){r=new A.bU(-1,q)
break A}if("-"===s||"?"===s||":"===s){r=new A.bU(q,-1)
break A}r=B.cx
break A}return r},
nj(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m=i.b,l=a.length,k=Math.min(A.qN(a,c,B.a.af(a,"\n",i.a-1))+1,l)
if(f){if(k<l||B.a.aG(a,"\n"))k-=g==="\r\n"?2:1
l=t.h.b(b)?"[]":"{}"
return A.au(m,k-m,l)}else if(e){m=B.a.ae(a,"\n",m)+1
return A.au(m,Math.max(B.a.ae(a,"\n",b.gA().gG().gK())+1,k)-m,"")}s=!1
if(m!==0)if(d){r=A.qM(a,m)
q=r.a
s=q!==-1
m=s?q+2:r.b+1}else m=B.a.ae(a,"\n",m)+1
p=h.$0()
o=p.a
n=p.b
return A.au(m,(s&&o===k-1?k+n:k)-m,"")},
hg(a){if(t.S.b(a))return a.ga2()
if(t.h.b(a))return a.ga2()
return null},
j4:function j4(a){this.a=a},
iT:function iT(){},
iU:function iU(a){this.a=a},
li(a,b){var s=t.z,r=A.n1(s,s)
r.a9(0,a.gM())
b.$1(r)
return t.S.a(A.at(r,B.i,B.j))},
at(a,b,c){var s,r,q
if(t.m.b(a)){A.kV(a.ga7())
return a}else if(t.h.b(a)){for(s=J.F(a.gM());s.l();)A.at(s.gm(),B.i,B.j)
return a}else if(t.S.b(a)){for(s=a.gM().gO(),s=s.gq(s);s.l();){r=s.gm()
A.at(r.a,B.i,B.j)
A.at(r.b,B.i,B.j)}return a}else if(t.f.b(a))return A.oB(a,b,c)
else if(t.j.b(a))return A.oA(a,b,c)
else{A.kV(a)
q=A.bJ(0,null,null,null)
return new A.eD(c,A.kA(q,q,""),a)}},
oB(a,b,c){var s,r,q,p=A.n1(t.z,t.T)
for(s=a.gO(),s=s.gq(s);s.l();){r=s.gm()
p.j(0,A.at(r.a,b,c),A.at(r.b,b,c))}q=A.bJ(0,null,null,null)
s=A.kA(q,q,"")
return new A.eC(p.a===0?B.f:b,p,s)},
oA(a,b,c){var s,r,q=J.aR(a,new A.hd(b,c),t.T)
q=A.o(q,q.$ti.i("y.E"))
s=A.bJ(0,null,null,null)
r=A.kA(s,s,"")
return new A.eB(q.length===0?B.f:b,q,r)},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
qf(a){var s,r,q,p,o,n,m,l,k=A.E(a),j=A.aS(t.N)
if(t.S.b(k))for(s=k.gE(),s=s.gq(s);s.l();){r=s.gm()
if(B.K.aU(r))j.t(0,A.e(r))}j.a9(0,B.K.gag())
s=t.s
q=A.c([],s)
for(j=A.ht(j,j.r,j.$ti.c),p=j.$ti.c;j.l();){o=j.d
if(o==null)o=p.a(o)
for(n=B.K.gO(),n=n.gq(n);n.l();){m=n.gm()
if(m.b===o){l=A.c([],s)
m=m.a
if(m==="rules")l.push("ruleProviders")
l.push(m)
B.b.a9(q,l)}}}return q},
iz(a){var s=t.S.a(A.E(a)),r=A.o(B.cs,t.N),q=t.g,p=q.a(s.h(0,"proxy-groups"))
p=J.F(p==null?[]:p)
while(p.l())r.push(A.e(J.m(p.gm(),"name")))
q=q.a(s.h(0,"proxies"))
q=J.F(q==null?[]:q)
while(q.l())r.push(A.e(J.m(q.gm(),"name")))
return r},
kZ(a){var s=t.g.a(t.S.a(A.E(a)).h(0,"rules"))
if(s==null)s=[]
return A.P(s,!0,t.N)},
kQ(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.e(q.a),A.kQ(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.F(a);r.l();)s.push(A.kQ(r.gm()))
return s}return a},
eY(a){var s,r=A.c([],t.Z),q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
q=J.F(q==null?[]:q)
s=t.P
while(q.l())r.push(s.a(A.kQ(q.gm())))
return r},
rl(a,b){var s,r,q,p,o,n,m=A.eY(a),l=A.n(t.N,t.P)
for(s=m.length,r=0;q=m.length,r<q;m.length===s||(0,A.a7)(m),++r){p=m[r]
l.j(0,A.e(p.h(0,"name")),p)}if(b.length!==q||A.aD(b,A.t(b).c).a!==b.length||B.b.S(b,new A.jS(l)))throw A.a(B.b9)
s=A.Z(a)
q=A.c([],t.Z)
for(o=b.length,r=0;r<b.length;b.length===o||(0,A.a7)(b),++r){n=l.h(0,b[r])
n.toString
q.push(n)}s.H(["proxy-groups"],q)
return s.b},
nl(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
ld(a,b,c){var s,r,q=A.c(a.split(","),t.s)
if(B.a.N(B.b.gU(q))==="SUB-RULE")return a
s=A.nl(q)
if(s>0){if(!(s<q.length))return A.b(q,s)
r=B.a.N(q[s])===b}else r=!1
if(r)B.b.j(q,s,c)
return B.b.V(q,",")},
rE(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=t.s,q=0;q<b.length;b.length===s||(0,A.a7)(b),++q){p=A.c(b[q].split(","),r)
if(p.length<2||B.b.S(p,new A.k8()))throw A.a(B.br)
if(B.b.gU(p)!=="SUB-RULE"){o=A.iz(a)
n=A.nl(p)
if(!(n>=0&&n<p.length))return A.b(p,n)
n=!B.b.p(o,B.a.N(p[n]))
o=n}else o=!1
if(o)throw A.a(B.b5)}m=A.Z(a)
m.H(["rules"],b)
return m.b},
q4(a){var s,r,q,p,o,n,m,l,k,j="dialer-proxy",i=t.S.a(A.E(a)),h=t.N,g=A.n(h,t.a)
for(s=A.eY(a),r=s.length,q=t.g,p=0;p<s.length;s.length===r||(0,A.a7)(s),++p){o=s[p]
n=A.e(o.h(0,"name"))
m=q.a(o.h(0,"proxies"))
g.j(0,n,A.P(m==null?[]:m,!0,h))}s=q.a(i.h(0,"proxies"))
s=J.F(s==null?[]:s)
r=t.s
while(s.l()){l=s.gm()
q=J.C(l)
if(typeof q.h(l,j)=="string")g.j(0,A.e(q.h(l,"name")),A.c([A.e(q.h(l,j))],r))}k=new A.ib(A.aS(h),A.aS(h),g)
for(h=new A.ah(g,g.r,g.e,g.$ti.i("ah<1>"));h.l();)k.$1(h.d)},
rC(a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="proxies",a7=B.a.N(A.e(a9.h(0,"name")))
if((b2==="\ud83d\ude80 \u56fd\u5185"||b2==="\ud83c\udf0d \u56fd\u5916")&&a7!==b2)throw A.a(B.bM)
if(a7.length===0||B.a.p(a7,",")||B.a.p(a7,"\n"))throw A.a(B.bn)
if(A.b5(a8).F(b2))throw A.a(B.ak)
s=A.iz(a8)
r=A.t(s)
if(new A.q(s,r.i("k(1)").a(new A.k_(b2)),r.i("q<1>")).p(0,a7)||a7==="GLOBAL")throw A.a(B.bN)
q=A.eY(a8)
p=B.b.b7(q,new A.k0(b2))
if(p>=0){if(!(p<q.length))return A.b(q,p)
s=t.g.a(q[p].h(0,a6))
if(s==null)s=[]
o=A.P(s,!0,t.N)}else o=A.c3(a8)
if(o.length===0)B.b.t(o,"DIRECT")
s=t.j
if(s.b(a9.h(0,a6))){n=A.P(s.a(a9.h(0,a6)),!0,t.N)
if(n.length!==o.length||new A.d_(n,A.t(n).i("d_<1>")).gO().S(0,new A.k1(o)))throw A.a(B.bA)}if(B.b.p(o,a7)||B.b.p(o,b2)||B.b.S(o,new A.k2(a8)))throw A.a(B.bH)
r=b1!=null
if(r){B.b.ar(o,new A.k3())
if(b1)B.b.b8(o,0,"DIRECT")
if(o.length===0&&b0==null)throw A.a(B.c_)}m=t.N
l=t.z
k=A.fH(a9,m,l)
k.j(0,"name",a7)
k.j(0,a6,o)
j=p<0
if(j)B.b.t(q,k)
else B.b.j(q,p,k)
i=A.Z(a8)
k=b2!=null
if(k&&b2!==a7){for(h=q.length,g=t.R,f=0;f<q.length;q.length===h||(0,A.a7)(q),++f){e=q[f]
if(s.b(e.h(0,a6))){d=[]
for(c=J.F(g.a(e.h(0,a6)));c.l();){b=c.gm()
d.push(J.u(b,b2)?a7:b)}e.j(0,a6,d)}}h=t.s
g=A.c([],h)
for(d=A.kZ(a8),c=d.length,f=0;f<d.length;d.length===c||(0,A.a7)(d),++f)g.push(A.ld(d[f],b2,a7))
i.H(["rules"],g)
g=t.S
a=t.Y.a(g.a(A.E(a8)).h(0,"sub-rules"))
for(l=(a==null?A.n(l,l):a).gO(),l=l.gq(l);l.l();){d=l.gm()
c=d.a
a0=A.c([],h)
for(d=J.F(s.a(d.b));d.l();)a0.push(A.ld(A.e(d.gm()),b2,a7))
i.H(["sub-rules",c],a0)}a1=t.g.a(g.a(A.E(a8)).h(0,a6))
if(a1==null)a1=[]
for(s=J.C(a1),a2=0;a2<s.gk(a1);++a2)if(J.u(J.m(s.h(a1,a2),"dialer-proxy"),b2))i.H(["proxies",a2,"dialer-proxy"],a7)}i.H(["proxy-groups"],q)
a3=A.f4(a8)
if(k&&b2!==a7&&a3.F(b2)){s=a3.I(0,b2)
s.toString
a3.j(0,a7,s)}if(j)a3.j(0,a7,"")
a4=A.lk(i.b,a3)
a5=A.jo(a8)
if(k&&b2!==a7&&a5.F(b2)){s=a5.I(0,b2)
s.toString
a5.j(0,a7,s)}if(r)a5.j(0,a7,b1)
if(a5.a!==0)a4=A.nq(a4,a5)
if(b0!=null){s=A.fH(A.f4(a4),m,m)
s.j(0,a7,B.a.N(b0))
a4=A.mX(a4,s)}A.q4(a4)
return a4},
qu(a,b){var s,r,q,p,o,n,m,l,k,j
if(b==="\ud83d\ude80 \u56fd\u5185"||b==="\ud83c\udf0d \u56fd\u5916")throw A.a(B.c0)
if(A.b5(a).F(b))throw A.a(B.ak)
s=t.S.a(A.E(a))
r=A.eY(a)
q=t.Y.a(s.h(0,"sub-rules"))
if(q==null){p=t.z
q=A.n(p,p)}o=!0
if(!B.b.S(r,new A.iD(b))){p=t.g.a(s.h(0,"proxies"))
if(p==null)p=[]
if(!J.nM(p,new A.iE(b))){p=t.N
n=A.o(A.kZ(a),p)
for(m=q.gag(),m=m.gq(m),l=t.j;m.l();)B.b.a9(n,A.P(l.a(m.gm()),!0,p))
p=B.b.S(n,new A.iF(b))
o=p}}if(o)throw A.a(B.ba)
k=A.Z(a)
p=A.t(r)
n=p.i("q<1>")
p=A.o(new A.q(r,p.i("k(1)").a(new A.iG(b)),n),n.i("f.E"))
k.H(["proxy-groups"],p)
p=k.b
n=A.f4(a)
n.I(0,b)
j=A.lk(p,n)
if(B.a.p(a,"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")){p=A.jo(a)
p.I(0,b)
p=A.nq(j,p)}else p=j
return p},
jS:function jS(a){this.a=a},
k8:function k8(){},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(){},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
la(a,b){var s,r,q,p
if(b>64)throw A.a(B.bU)
if(t.f.b(a)){s=A.n(t.N,t.X)
for(r=a.gO(),r=r.gq(r),q=b+1;r.l();){p=r.gm()
s.j(0,A.l(p.a),A.la(p.b,q))}return s}if(t.j.b(a)){s=J.aR(a,new A.jl(b),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
r5(a){var s,r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jd()),t.U).V(0,"\n"),q=A.Z("")
q.H([],A.la(A.E(a),0))
s=r.length===0?"":r+"\n"
return s+q.n(0)},
na(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="external-controller",a1="name"
try{s=t.P.a(B.c.aa(a4,a))
r=null
switch(a2){case"summary":q=t.f.a(A.E(a3))
m=A.nf(a3)
l=J.m(q,a0)
if(l==null)l=""
k=J.m(q,"secret")
if(k==null)k=""
j=A.le(a3)
i=A.c3(a3)
h=A.ni(a3)
g=A.f2(a3)
f=A.r4(a3)
e=A.eY(a3)
d=A.b5(a3)
c=A.j(d).i("ai<1>")
d=A.o(new A.ai(d,c),c.i("f.E"))
r=A.a4(["network",m,"controller",l,"secret",k,"manualNodes",j,"nodes",i,"host",h,"chains",g,"nextChainId",f,"groups",e,"managedGroups",d,"filters",A.f4(a3),"direct",A.jo(a3),"providers",A.kY(a3),"rules",A.kZ(a3),"policies",A.iz(a3),"actions",A.qf(a3)],t.N,t.z)
break
case"controller":r=A.q8(a3,s)
break
case"network":r=A.mW(a3,s)
break
case"addNode":r=A.q7(a3,A.e(J.m(s,"link")))
break
case"deleteNode":r=A.qw(a3,A.e(J.m(s,a1)))
break
case"reorderNodes":r=A.rm(a3,A.P(t.R.a(J.m(s,"names")),!0,t.N))
break
case"host":r=A.qy(a3,A.e(J.m(s,"host")))
break
case"chain":m=t.R
l=t.N
r=A.rr(a3,A.e(J.m(s,"id")),A.P(m.a(J.m(s,"selected")),!0,l),A.hR(J.m(s,"prepend")),A.P(m.a(J.m(s,"targets")),!0,l))
break
case"group":m=A.aj(t.f.a(J.m(s,"group")),t.N,t.z)
l=A.bX(J.m(s,"oldName"))
r=A.rC(a3,m,A.bX(J.m(s,"filter")),A.my(J.m(s,"includeDirect")),l)
break
case"deleteGroup":r=A.qu(a3,A.e(J.m(s,a1)))
break
case"reorderGroups":r=A.rl(a3,A.P(t.R.a(J.m(s,"names")),!0,t.N))
break
case"provider":r=A.rD(a3,A.e(J.m(s,a1)),A.aj(t.f.a(J.m(s,"provider")),t.N,t.z),A.bX(J.m(s,"oldName")))
break
case"deleteProvider":r=A.qv(a3,A.e(J.m(s,a1)))
break
case"rules":r=A.rE(a3,A.P(t.R.a(J.m(s,"rules")),!0,t.N))
break
case"subscription":m=A.e(J.m(s,"template"))
l=A.r3(A.P(t.R.a(J.m(s,"sources")),!0,t.N))
r=A.qa(m,l,J.u(J.m(s,"refresh"),!0)?a3:a)
p=A.E(a3)
if(t.f.b(p)&&typeof p.h(0,a0)=="string"){o=A.Z(A.e(r))
o.H([a0],p.h(0,a0))
r=o.b}m=t.s
r=A.mY(A.e(r),B.b.S(A.c(a3.split("\n"),m),new A.iW()))
if(B.b.S(A.c(a3.split("\n"),m),new A.iX()))r=A.mW(r,A.nf(a3))
break
case"subscriptionSources":r=A.ry(a3,A.T(J.m(s,"count")))
break
default:throw A.a(B.c4)}m=B.c.ad(A.a4(["ok",!0,"value",r],t.N,t.K),a)
return m}catch(b){n=A.c4(b)
if(!a5&&n instanceof A.c5&&B.a.p(n.n(0),"package:yaml_edit"))try{m=A.na(a2,A.r5(a3),a4,!0)
return m}catch(b){}return B.c.ad(A.a4(["ok",!1,"error",J.al(n)],t.N,t.K),a)}},
qZ(){var s,r=new A.j5()
if(typeof r=="function")A.D(A.a1("Attempting to rewrap a JS function."))
s=function(a,b){return function(c,d,e){return a(b,c,d,e,arguments.length)}}(A.pl,r)
s[$.ll()]=r
v.G.mclashOverrideCall=s},
jl:function jl(a){this.a=a},
jd:function jd(){},
iW:function iW(){},
iX:function iX(){},
j5:function j5(){},
mY(a,b){var s={},r=s.a=!1,q=t.U,p=A.o(new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.iw(s)),q),q.i("f.E"))
return(b?!s.a:r)?"# Mclash OpenWrt \u63a7\u5236: true\n"+B.b.V(p,"\n"):B.b.V(p,"\n")},
nf(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash OpenWrt \u63a5\u7ba1: "))return A.kW(t.f.a(B.c.aa(B.a.D(p,21),null)))}s=t.z
return A.kW(A.a4(["mode","none","interfaces",A.c(["br-lan"],t.s)],s,s))},
l5(a){var s=A.c(a.split("."),t.s)
if(s.length!==4||B.b.S(s,new A.j2()))return null
return B.b.bT(s,0,new A.j3(),t.p)},
rI(a){var s,r,q,p=A.I("^[0-9a-fA-F:]+$",!0)
if(!p.b.test(a))return!1
s=A.c(a.split("::"),t.s)
if(s.length>2)return!1
p=t.f_
r=A.o(new A.az(s,t.ah.a(new A.k9()),p),p.i("f.E"))
if(B.b.S(r,new A.ka()))return!1
p=s.length
q=r.length
return p===2?q<8:q===8},
qc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.g.a(a)
s=a==null?[]:a
r=A.P(s,!0,t.N)
s=r.length
if(s>64)throw A.a(B.b3)
q=A.c([],t.s)
for(p=0;p<s;++p){o=B.a.N(r[p]).toLowerCase()
n=o.split("-")
m=n.length
if(m===2){if(0>=m)return A.b(n,0)
l=A.l5(n[0])
if(1>=m)return A.b(n,1)
k=A.l5(n[1])
j=l!=null&&k!=null&&l<=k}else{j=!1
if(m===1){i=o.split("/")
m=i.length
if(0>=m)return A.b(i,0)
h=i[0]
g=A.l5(h)==null
f=!g||A.rI(h)
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
kW(a){var s,r,q,p,o,n,m,l,k,j=a.h(0,"mode")
if(j==null)j="none"
s=a.h(0,"stack")
if(s==null)s="mixed"
r=a.h(0,"interfaces")
if(r==null)r=["br-lan"]
q=t.N
p=A.P(t.R.a(r),!0,q)
r=t.s
if(!B.b.p(A.c(["none","tun","tproxy"],r),j))throw A.a(B.ci)
if(!B.b.p(A.c(["system","gvisor","mixed"],r),s))throw A.a(B.c7)
r=p.length
if(r===0||r>16||A.aD(p,A.t(p).c).a!==p.length||B.b.S(p,new A.ix()))throw A.a(B.b6)
for(r=["lan","router","ipv6"],o=0;o<3;++o){n=r[o]
if(a.h(0,n)!=null&&!A.eW(a.h(0,n)))throw A.a(B.bp)}r=a.h(0,"lan")
if(r==null)r=!0
m=A.qc(a.h(0,"access"))
l=a.h(0,"router")
if(l==null)l=!0
k=a.h(0,"ipv6")
return A.a4(["mode",j,"interfaces",p,"lan",r,"access",m,"router",l,"ipv6",k==null?!1:k,"stack",s],q,t.z)},
mW(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="ipv6",a="routing-mark",a0="default-nameserver",a1="external-controller",a2=A.kW(b1),a3=a2.h(0,"mode"),a4=J.aY(a3),a5=!a4.R(a3,"none"),a6=t.s,a7=A.Z(new A.q(A.c(b0.split("\n"),a6),t.Q.a(new A.il()),t.U).V(0,"\n")),a8=A.E(b0),a9=t.f
if(!a9.b(a8))throw A.a(B.b_)
s=t.N
r=t.z
q=A.a4(["enable",a4.R(a3,"tun")],s,r)
if(a4.R(a3,"tun")){q.a9(0,A.a4(["device","Mclash","stack",a2.h(0,"stack"),"auto-route",!1,"auto-redirect",!1,"auto-detect-interface",!0,"mtu",1500,"dns-hijack",A.c(["any:53","tcp://any:53"],a6)],s,r))
if(J.u(a2.h(0,b),!0))q.j(0,"inet6-address",A.c(["fdfe:dcba:9876::1/126"],a6))}a7.H(["tun"],q)
a4=a4.R(a3,"tproxy")?7893:0
a7.H(["tproxy-port"],a4)
if(a9.b(a7.cn([],c).ga7())&&a9.a(a7.cn([],c).ga7()).F(a))a7.I(0,["routing-mark"])
if(a5)a7.H(["routing-mark"],359)
if(a5){a7.H(["allow-lan"],!0)
a7.H(["bind-address"],"*")
a7.H(["ipv6"],a2.h(0,b))
p=a8.h(0,"dns")
a4=a9.b(p)
if(!a4)a7.H(["dns"],A.n(s,r))
a7.H(["dns","enable"],!0)
o=J.u(a2.h(0,b),!0)?"[::]:1053":"0.0.0.0:1053"
a7.H(["dns","listen"],o)
a7.H(["dns","ipv6"],a2.h(0,b))
if(!a4||!p.F(a0))a7.H(["dns",a0],A.c(["223.5.5.5","1.1.1.1"],a6))
if(!a4||!p.F("nameserver"))a7.H(["dns","nameserver"],A.c(["https://dns.alidns.com/dns-query","https://cloudflare-dns.com/dns-query"],a6))
a4=a8.h(0,a1)
n=A.l(a4==null?"0.0.0.0:9097":a4)
m=A.I(":([0-9]+)$",!0).dN(n)
a4=m==null
if(a4)a6=c
else{a6=m.b
if(1>=a6.length)return A.b(a6,1)
a6=a6[1]}l=A.aU(a6==null?"":a6,c)
if(l==null)l=9097
if(l<1||l>65535)throw A.a(B.bw)
k=a4?"0.0.0.0":B.a.v(n,0,m.b.index)
a7.H([a1],k+":"+l)
j=a8.h(0,"proxies")
if(t.j.b(j))for(a4=J.C(j),i=0;i<a4.gk(j);++i)if(a9.b(a4.h(j,i))&&a9.a(a4.h(j,i)).F(a))a7.I(0,["proxies",i,"routing-mark"])
h=a8.h(0,"proxy-providers")
if(a9.b(h))for(a4=h.gO(),a4=a4.gq(a4);a4.l();){a6=a4.gm()
o=a6.b
if(!a9.b(o))continue
g=o.h(0,"override")
if(a9.b(g)){o=A.n(s,r)
for(f=g.gO(),f=f.gq(f);f.l();){e=f.gm()
o.j(0,A.l(e.a),e.b)}d=o}else d=A.n(s,r)
d.j(0,a,359)
a7.H(["proxy-providers",a6.a,"override"],d)}}return A.mY("# Mclash OpenWrt \u63a5\u7ba1: "+B.c.ad(a2,c)+"\n"+a7.n(0),!1)},
q8(a,b){var s,r,q,p,o,n=b.h(0,"address"),m=B.a.N(A.l(n==null?"0.0.0.0":n)),l=A.aU(A.l(b.h(0,"port")),null)
n=t.s
s=A.c(m.split("."),n)
r=s.length===4&&B.b.aO(s,new A.ij())
if(B.a.p(m,":")){q=A.I("^[0-9a-fA-F:]{2,39}$",!0)
p=q.b.test(m)}else p=!1
if(!r&&!p&&m!=="localhost")throw A.a(B.bC)
if(l==null||l<1||l>65535)throw A.a(B.bv)
o=A.Z(new A.q(A.c(a.split("\n"),n),t.Q.a(new A.ik()),t.U).V(0,"\n"))
n=p?"["+m+"]":m
o.H(["external-controller"],n+":"+A.l(l))
return"# Mclash OpenWrt \u63a7\u5236: true\n"+o.n(0)},
iw:function iw(a){this.a=a},
j2:function j2(){},
j3:function j3(){},
k9:function k9(){},
ka:function ka(){},
ix:function ix(){},
il:function il(){},
ij:function ij(){},
ik:function ik(){},
lc(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u624b\u52a8\u8282\u70b9: "))return A.P(t.j.a(B.c.aa(B.a.D(p,15),null)),!0,t.N)}return A.c([],t.s)},
lj(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kd()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash \u624b\u52a8\u8282\u70b9: "+B.c.ad(b,null)+"\n"+s},
r8(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="alpn",a1="path",a2={},a3=B.a.N(a6),a4=A.I("\\s",!0),a5=A.aG(a3,a4,"")
if(!J.ls(a5,"vmess://")||J.a6(a5)>1048576)throw A.a(B.aW)
a2.a=null
try{s=B.b.gU(J.bB(a5,8).split("#"))
a2.a=A.aj(t.f.a(B.c.aa(B.e.ct(B.x.aF(B.v.aW(s))),a)),t.N,t.z)}catch(r){throw A.a(B.ck)}q=new A.jk(a2)
p=new A.jj(q)
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
h.j(0,"name",J.a6(q.$1("ps"))===0?"VMess "+o+":"+A.l(m):q.$1("ps"))
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
if(J.a6(q.$1(a0))!==0){g=J.nU(q.$1(a0),",")
f=A.t(g)
e=f.i("H<1,d>")
e=new A.H(g,f.i("d(1)").a(new A.je()),e).bh(0,e.i("k(y.E)").a(new A.jf()))
g=A.o(e,e.$ti.i("f.E"))
h.j(0,a0,g)}d=q.$1("host")
c=J.a6(q.$1(a1))===0?"/":q.$1(a1)
g=t.c
f=t.e
e=new A.H(A.c(d.split(","),a3),g.a(new A.jg()),f).bh(0,f.i("k(y.E)").a(new A.jh()))
b=A.o(e,e.$ti.i("f.E"))
switch(k){case"http":e=A.n(a4,t.K)
e.j(0,"method","GET")
a3=A.o(new A.H(A.c(c.split(","),a3),g.a(new A.ji()),f),f.i("y.E"))
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
r6(a){var s=B.a.N(a)
if(B.a.u(s,"vmess://"))return A.r8(s)
return A.r7(s)},
q7(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="network",a0="proxies",a1="name",a2=A.r6(a5),a3=A.ni(a4)
if(J.u(a2.h(0,"type"),"vmess")&&a3.length!==0&&B.b.p(A.c(["http","ws"],t.s),a2.h(0,a))){s=B.a.N(a3)
r=A.I("[\\s/\\\\?#]",!0)
if(r.b.test(s))throw A.a(B.bG)
q=t.P.a(a2.h(0,J.u(a2.h(0,a),"http")?"http-opts":"ws-opts"))
if(s.length===0)q.I(0,"headers")
else{if(J.u(a2.h(0,a),"http")){r=t.e
r=new A.H(A.c(s.split(","),t.s),t.c.a(new A.ig()),r).bh(0,r.i("k(y.E)").a(new A.ih()))
r=A.o(r,r.$ti.i("f.E"))}else r=s
q.j(0,"headers",A.a4(["Host",r],t.N,t.K))}}p=t.S.a(A.E(a4))
r=t.g
o=r.a(p.h(0,a0))
if(o==null)o=[]
n=r.a(p.h(0,"proxy-groups"))
if(n==null)n=[]
r=A.lM(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],t.N)
for(m=J.F(o);m.l();)r.t(0,A.e(J.m(m.gm(),a1)))
for(m=J.a3(n),l=m.gq(n);l.l();)r.t(0,A.e(J.m(l.gm(),a1)))
k=A.e(a2.h(0,a1))
for(l=k+" (",j=k,i=2;r.p(0,j);){j=l+i+")";++i}a2.j(0,a1,j)
h=A.Z(a4)
r=[a2]
B.b.a9(r,o)
h.H(["proxies"],r)
g=h.b
f=A.f4(a4)
if(f.a!==0)g=A.mX(g,f)
else if(!B.b.S(A.c(a4.split("\n"),t.s),new A.ii())){for(r=t.j,l=t.R,e=0;e<m.gk(n);++e){d=m.h(n,e)
c=J.C(d)
if(J.u(c.h(d,"type"),"select")&&r.b(c.h(d,a0))&&!A.b5(a4).F(c.h(d,a1))){b=[j]
B.b.a9(b,l.a(c.h(d,a0)))
h.H(["proxy-groups",e,"proxies"],b)}}g=h.b}r=A.c([j],t.s)
B.b.a9(r,A.lc(a4))
return A.kU(A.lj(g,r),a4)},
le(a){var s,r,q=A.c3(a),p=A.aD(q,A.t(q).c)
q=A.lc(a)
s=A.t(q)
r=s.i("q<1>")
q=A.o(new A.q(q,s.i("k(1)").a(p.ga5(p)),r),r.i("f.E"))
return q},
rm(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="name",a3=A.le(a5),a4=A.aD(a3,A.t(a3).c)
if(a6.length!==a4.a||A.aD(a6,A.t(a6).c).a!==a4.a||!a4.fP(a6))throw A.a(B.bI)
s=t.S.a(A.E(a5))
a3=t.g
r=a3.a(s.h(0,"proxies"))
if(r==null)r=[]
q=t.z
q=A.n(q,q)
for(p=J.a3(r),o=p.gq(r);o.l();){n=o.gm()
m=J.C(n)
if(a4.p(0,m.h(n,a2)))q.j(0,m.h(n,a2),n)}l=A.Z(a5)
o=[]
for(p=p.gq(r),k=0;p.l();){n=p.gm()
if(a4.p(0,J.m(n,a2))){j=k+1
if(!(k<a6.length))return A.b(a6,k)
o.push(q.h(0,a6[k]))
k=j}else o.push(n)}l.H(["proxies"],o)
i=a3.a(s.h(0,"proxy-groups"))
if(i==null)i=[]
h=A.b5(a5)
for(a3=J.C(i),q=A.t(a6),p=q.i("k(1)"),q=q.i("q<1>"),o=q.i("f.E"),m=t.j,g=0;g<a3.gk(i);++g){if(h.F(J.m(a3.h(i,g),a2)))continue
f=J.m(a3.h(i,g),"proxies")
if(!m.b(f))continue
e=J.C(f)
d=A.o(new A.q(a6,p.a(e.ga5(f)),q),o)
c=[]
for(e=e.gq(f),b=0;e.l();){a=e.gm()
if(a4.p(0,a)){a0=b+1
if(!(b<d.length))return A.b(d,b)
c.push(d[b])
b=a0}else c.push(a)}l.H(["proxy-groups",g,"proxies"],c)}a1=A.lj(l.b,a6)
A.no(a1)
return a1},
qw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="dialer-proxy"
if(!B.b.p(A.le(a),b))throw A.a(B.c5)
s=t.S.a(A.E(a))
r=A.c([],t.dm)
for(q=t.j,p=J.F(q.a(s.h(0,"proxies"))),o=t.f,n=t.z;p.l();){m=p.gm()
if(!J.u(J.m(m,"name"),b))r.push(A.aj(o.a(m),n,n))}for(p=r.length,l=0;l<r.length;r.length===p||(0,A.a7)(r),++l){m=r[l]
if(J.u(m.h(0,e),b))m.I(0,e)}k=A.Z(a)
k.H(["proxies"],r)
j=t.g.a(s.h(0,"proxy-groups"))
if(j==null)j=[]
for(r=J.C(j),p=t.s,i=0;i<r.gk(j);++i){h=J.m(r.h(j,i),"proxies")
if(q.b(h)&&J.bo(h,b)){o=J.am(h,new A.iI(b))
g=A.o(o,o.$ti.i("f.E"))
o=g.length===0?A.c(["DIRECT"],p):g
k.H(["proxy-groups",i,"proxies"],o)}}r=k.b
q=A.lc(a)
p=A.t(q)
o=p.i("q<1>")
q=A.o(new A.q(q,p.i("k(1)").a(new A.iJ(b)),o),o.i("f.E"))
f=A.rk(A.lj(r,q),b)
A.no(f)
return f},
kd:function kd(){},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
jv(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u624b\u52a8\u8282\u70b9: "))return A.P(t.j.a(B.c.aa(B.a.D(p,15),null)),!0,t.N)}return A.c([],t.s)},
r2(a,b){var s,r,q,p,o,n
if(b==null)return a
s=A.jv(b)
r=A.aD(s,A.t(s).c)
q=t.g.a(t.S.a(A.E(b)).h(0,"proxies"))
if(q==null)q=[]
s=J.am(q,new A.j8(r))
p=A.o(s,s.$ti.i("f.E"))
s=A.t(p)
o=new A.H(p,s.i("@(1)").a(new A.j9()),s.i("H<1,@>")).aE(0)
s=A.o(p,t.z)
n=A.j(a)
B.b.a9(s,new A.q(a,n.i("k(r.E)").a(new A.ja(o)),n.i("q<r.E>")))
return s},
rL(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kc()),t.U).V(0,"\n")
return b.length===0?s:"# Mclash \u624b\u52a8\u8282\u70b9: "+B.c.ad(b,null)+"\n"+s},
ro(a,b){var s,r,q,p,o,n,m,l,k,j,i="name"
if(b==null)return a
s=A.jv(b)
r=A.aD(s,A.t(s).c)
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
s=A.Z(a)
q=[]
for(n=J.F(k);n.l();){m=n.gm()
l=o.h(0,J.m(m,i))
q.push(l==null?m:l)}s.H(["proxies"],q)
j=s.b
A.rK(j)
return j},
j8:function j8(a){this.a=a},
j9:function j9(){},
ja:function ja(a){this.a=a},
kc:function kc(){},
c3(a){var s,r=t.g.a(t.S.a(A.E(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jU(),t.N)
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
r.j(0,A.e(m.a),A.P(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
jn(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u5168\u5c40\u94fe\u8def: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,15),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.P(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
rf(a,b){var s=A.jn(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.c3(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jz(s)),o)
if(r!=null){q=J.am(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mw(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.c3(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.am(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.am(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hH(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.dL(a0)
n=A.b5(a0)
m=t.S.a(A.E(a))
l=A.Z(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.m(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.m(i,"name")))s.push(i)}l.H(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hI()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lh(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.am(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lh(h,e,A.c([B.b.gJ(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.am(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lh(h,e,q,a2,!1)}return"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(a1,null)+"\n"+h},
mU(a){var s=t.N,r=new A.ia(A.aS(s),A.aS(s),a)
for(s=new A.ah(a,a.r,a.e,A.j(a).i("ah<1>"));s.l();)r.$1(s.d)},
ic(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ie()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash \u8282\u70b9\u94fe\u8def: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: "+B.c.ad(c,null)+"\n")+s},
kU(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.S(A.c(a9.split("\n"),a7),new A.iq()))return A.kN(a8,a9,A.f2(a9))
s=A.jn(a9)
if(s.a!==0)return A.mw(a8,a9,s,"")
r=A.dL(a9)
q=A.b5(a9)
p=t.S.a(A.E(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a3(n)
k=l.ac(n,new A.ir(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.m(h,a5)))j.push(h)}for(i=new A.O(q,A.j(q).i("O<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a3(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a4(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.is()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a7)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.P(e==null?[]:e,!0,m))}a1=A.Z(a8)
if(q.a!==0)a1.H(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.m(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.H(["proxies",a2,"dialer-proxy"],a4)}}A.mU(i)
return A.ic(a1.b,r,q)},
lh(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.c3(a),g=A.aD(b,A.t(b).c),f=A.aD(c,A.t(c).c)
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
while(r.l())s.t(0,A.e(J.m(r.gm(),"name")))
k=(e?"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9":"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.ht(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.kU(a,A.ic("",o,n))},
no(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.E(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
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
l.j(0,q,A.P(s==null?[]:s,!0,m))}A.mU(l)},
rk(a,b){var s,r,q,p,o,n,m=t.s
if(B.b.S(A.c(a.split("\n"),m),new A.jK())){s=A.f2(a)
for(m=new A.aB(s,s.r,s.e,A.j(s).i("aB<2>"));m.l();)for(r=m.d.gag(),r=r.gq(r);r.l();)J.kq(r.gm(),new A.jL(b))
return A.kN(a,a,s)}q=A.dL(a)
q.ar(0,new A.jM(b))
p=A.b5(a)
for(r=new A.aB(p,p.r,p.e,A.j(p).i("aB<2>"));r.l();)J.kq(r.d,new A.jN(b))
o=A.jn(a)
for(r=new A.aB(o,o.r,o.e,A.j(o).i("aB<2>"));r.l();)J.kq(r.d,new A.jO(b))
o.ar(0,new A.jP())
if(!B.b.S(A.c3(a),new A.jQ(o)))o.br(0)
n=A.ic(new A.q(A.c(a.split("\n"),m),t.Q.a(new A.jR()),t.U).V(0,"\n"),q,p)
return o.a===0?n:"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(o,null)+"\n"+n},
f2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jx()),t.U)
if(!d.gL(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),15),null)).gO(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.P(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.jn(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a4([f,o,f+"Targets",A.rf(a,g)],s,q))}}return i},
r4(a){var s=A.f2(a),r=A.j(s).i("ai<1>"),q=t.p
return""+(A.fL(new A.ai(s,r),r.i("h(f.E)").a(A.qn()),r.i("f.E"),q).bT(0,0,new A.jc(),q)+1)},
rr(a,b,c,d,e){var s,r,q,p,o,n=B.b.ga5(A.c3(a))
if(!B.b.aO(c,n)||!B.b.aO(e,n))throw A.a(B.I)
if(c.length!==0&&e.length===0)throw A.a(B.bT)
if(B.b.S(e,B.b.ga5(c)))throw A.a(B.bz)
s=A.f2(a)
n=A.j(s).i("O<1,2>")
r=n.i("q<f.E>")
q=r.i("az<f.E,d>")
p=A.e8(new A.az(new A.q(new A.O(s,n),n.i("k(f.E)").a(new A.jV(b)),r),r.i("f<d>(f.E)").a(new A.jW(d)),q),q.i("f.E"))
if(B.b.S(c,p.ga5(p)))throw A.a(B.bm)
o=d?"front":"back"
if(c.length===0)s.I(0,b)
else{n=t.N
r=A.o(c,n)
q=A.aD(e,A.t(e).c)
q=A.o(q,A.j(q).c)
s.j(0,b,A.a4([o,r,o+"Targets",q],n,t.a))}return A.kN(a,a,s)},
kN(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.E(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a3(b1)
q=r.ac(b1,new A.hN(),s).aE(0)
p=A.dL(b3)
o=A.b5(b3)
n=A.Z(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.m(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.m(k,"name")))r.push(k)}n.H(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hO()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.O(b4,A.j(b4).i("O<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.am(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aC<2>")
e=f.i("az<f.E,d>")
b=A.e8(new A.az(new A.aC(i,f),f.i("f<d>(f.E)").a(new A.hP()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.O(i,l.i("O<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.am(d,new A.hQ(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mw(j,j,f," (\u94fe\u8def "+e+")")
a4=A.b5(a3)
a5=A.dL(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("\u8282\u70b9\u201c"+d+"\u201d\u88ab\u591a\u6761\u94fe\u8def\u8fde\u63a5\u5230\u4e0d\u540c\u5165\u53e3\uff0c\u8bf7\u8c03\u6574\u9009\u62e9",a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.kU(j,A.ic("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.O(a1,a1.$ti.i("O<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash \u540e\u7f6e\u94fe\u8def ":"# Mclash \u94fe\u5f0f\u8282\u70b9 "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash \u94fe\u8def\u8bbe\u7f6e: "+s+"\n"+B.b.dW(r)+a7},
rb(a){var s,r,q
for(s=["# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash \u8282\u70b9\u94fe\u8def "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jU:function jU(){},
jz:function jz(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
jK:function jK(){},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(){},
jQ:function jQ(a){this.a=a},
jR:function jR(){},
jx:function jx(){},
jc:function jc(){},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
lf(a){var s,r=t.g.a(t.S.a(A.E(a)).h(0,"proxies"))
if(r==null)r=[]
s=J.aR(r,new A.jT(),t.N)
s=A.o(s,s.$ti.i("y.E"))
return s},
f3(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u8282\u70b9\u94fe\u8def: ")){s=t.N
return A.aj(t.f.a(B.c.aa(B.a.D(p,15),null)),s,s)}}s=t.N
return A.n(s,s)},
f1(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,16),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.P(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
lb(a){var s,r,q,p,o,n,m
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash \u5168\u5c40\u94fe\u8def: ")){s=t.N
r=A.n(s,t.a)
for(o=t.f.a(B.c.aa(B.a.D(p,15),null)).gO(),o=o.gq(o),n=t.j;o.l();){m=o.gm()
r.j(0,A.e(m.a),A.P(n.a(m.b),!0,s))}return r}}return A.n(t.N,t.a)},
re(a,b){var s=A.lb(a),r=s.h(0,b?"frontTargets":"backTargets"),q=A.lf(a),p=A.t(q),o=p.i("q<1>"),n=new A.q(q,p.i("k(1)").a(new A.jy(s)),o)
if(r!=null){q=J.am(r,n.ga5(n))
q=A.o(q,q.$ti.i("f.E"))
return q}q=s.h(0,b?"front":"back")
if(J.cE(q==null?A.c([],t.s):q))q=A.c([],t.s)
else q=A.o(n,o.i("f.E"))
return q},
mv(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="proxy-groups",c=A.lf(a),b=a1.h(0,"front")
if(b==null)b=A.c([],t.s)
s=B.b.ga5(c)
b=J.am(b,s)
r=A.o(b,b.$ti.i("f.E"))
b=a1.h(0,"back")
b=J.am(b==null?A.c([],t.s):b,s)
q=A.o(b,b.$ti.i("f.E"))
b=A.t(c)
s=b.i("q<1>")
p=A.o(new A.q(c,b.i("k(1)").a(new A.hF(r,q)),s),s.i("f.E"))
if(p.length===0)throw A.a(B.aj)
o=A.f3(a0)
n=A.f1(a0)
m=t.S.a(A.E(a))
l=A.Z(a)
b=t.j
k=b.a(m.h(0,"proxies"))
for(s=J.C(k),j=0;j<s.gk(k);++j)if(o.F(J.m(s.h(k,j),"name"))&&s.h(k,j).F("dialer-proxy"))l.I(0,["proxies",j,"dialer-proxy"])
if(m.gE().p(0,d)){s=[]
for(b=J.F(b.a(m.h(0,d)));b.l();){i=b.gm()
if(!n.F(J.m(i,"name")))s.push(i)}l.H(["proxy-groups"],s)}b=t.s
h=new A.q(A.c(l.b.split("\n"),b),t.Q.a(new A.hG()),t.U).V(0,"\n")
if(r.length!==0){for(g=1;g<r.length;++g){s=r[g]
f=r[g-1]
h=A.lg(h,A.c([s],b),A.c([f],b),"",!0)}s=a1.h(0,"frontTargets")
if(s==null)s=p
s=J.am(s,B.b.ga5(p))
e=A.o(s,s.$ti.i("f.E"))
if(e.length!==0)h=A.lg(h,e,A.c([B.b.gJ(r)],b),a2,!0)}if(q.length!==0){b=a1.h(0,"backTargets")
if(b==null)b=p
b=J.am(b,B.b.ga5(p))
e=A.o(b,b.$ti.i("f.E"))
if(e.length!==0)h=A.lg(h,e,q,a2,!1)}return"# Mclash \u5168\u5c40\u94fe\u8def: "+B.c.ad(a1,null)+"\n"+h},
mT(a){var s=t.N,r=new A.i9(A.aS(s),A.aS(s),a)
for(s=new A.ah(a,a.r,a.e,A.j(a).i("ah<1>"));s.l();)r.$1(s.d)},
kS(a,b,c){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.id()),t.U).V(0,"\n"),r=b.a===0?"":"# Mclash \u8282\u70b9\u94fe\u8def: "+B.c.ad(b,null)+"\n"
return r+(c.a===0?"":"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: "+B.c.ad(c,null)+"\n")+s},
kT(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="name",a6="dialer-proxy",a7=t.s
if(B.b.S(A.c(a9.split("\n"),a7),new A.im()))return A.pf(a8,a9,A.rd(a9))
s=A.lb(a9)
if(s.a!==0)return A.mv(a8,a9,s,"")
r=A.f3(a9)
q=A.f1(a9)
p=t.S.a(A.E(a8))
o=t.g
n=o.a(p.h(0,"proxies"))
if(n==null)n=[]
m=t.N
l=J.a3(n)
k=l.ac(n,new A.io(),m).aE(0)
j=[]
i=o.a(p.h(0,"proxy-groups"))
i=J.F(i==null?[]:i)
while(i.l()){h=i.gm()
if(!q.F(J.m(h,a5)))j.push(h)}for(i=new A.O(q,A.j(q).i("O<1,2>")).gq(0),g=t.K;i.l();){f=i.d
e=f.a
d=f.b
c=J.a3(d)
if(!c.aJ(d,k.ga5(k)).gq(0).l())d=A.c(["DIRECT"],a7)
else{d=c.aJ(d,k.ga5(k))
d=A.o(d,d.$ti.i("f.E"))}j.push(A.a4(["name",e,"type","select","proxies",d],m,g))}i=A.t(j)
b=new A.H(j,i.i("@(1)").a(new A.ip()),i.i("H<1,@>")).aE(0)
i=A.n(m,t.a)
for(g=l.gq(n);g.l();){a=g.gm()
e=J.C(a)
if(typeof e.h(a,a6)=="string")i.j(0,A.e(e.h(a,a5)),A.c([A.e(e.h(a,a6))],a7))}for(g=j.length,a0=0;a0<j.length;j.length===g||(0,A.a7)(j),++a0){h=j[a0]
e=J.C(h)
d=A.e(e.h(h,a5))
e=o.a(e.h(h,"proxies"))
i.j(0,d,A.P(e==null?[]:e,!0,m))}a1=A.Z(a8)
if(q.a!==0)a1.H(["proxy-groups"],j)
for(a2=0;a2<l.gk(n);++a2){a3=A.e(J.m(l.h(n,a2),a5))
a4=r.h(0,a3)
if(a4!=null)o=k.p(0,a4)||b.p(0,a4)
else o=!1
if(o){i.j(0,a3,A.c([a4],a7))
a1.H(["proxies",a2,"dialer-proxy"],a4)}}A.mT(i)
return A.kS(a1.b,r,q)},
lg(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=A.lf(a),g=A.aD(b,A.t(b).c),f=A.aD(c,A.t(c).c)
if(g.a===0||f.a===0)throw A.a(B.ad)
if(g.dV(f).a!==0)throw A.a(B.af)
s=t.N
r=A.o(g,s)
B.b.a9(r,f)
if(!B.b.aO(r,B.b.ga5(h)))throw A.a(B.I)
q=e?g:f
r=e?f:g
p=A.o(r,A.j(r).c)
o=A.f3(a)
n=A.f1(a)
m=B.b.gU(p)
if(p.length>1){l=t.S.a(A.E(a))
s=A.e8(h,s)
r=t.g.a(l.h(0,"proxy-groups"))
r=J.F(r==null?[]:r)
while(r.l())s.t(0,A.e(J.m(r.gm(),"name")))
k=(e?"\ud83d\udd17 \u94fe\u5f0f\u8282\u70b9":"\ud83d\udd17 \u540e\u7f6e\u5165\u53e3")+d
for(r=k+" (",m=k,j=2;s.p(0,m);){m=r+j+")";++j}n.j(0,m,p)}for(s=A.ht(q,q.r,A.j(q).c),r=s.$ti.c;s.l();){i=s.d
o.j(0,i==null?r.a(i):i,m)}return A.kT(a,A.kS("",o,n))},
rK(a){var s,r,q,p,o="dialer-proxy",n=t.S.a(A.E(a)),m=t.N,l=A.n(m,t.a),k=t.g,j=k.a(n.h(0,"proxies"))
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
l.j(0,q,A.P(s==null?[]:s,!0,m))}A.mT(l)},
rd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.s,d=new A.q(A.c(a.split("\n"),e),t.Q.a(new A.jw()),t.U)
if(!d.gL(0)){e=t.f
s=t.N
r=A.n(s,t.O)
for(q=e.a(B.c.aa(B.a.D(d.gU(0),15),null)).gO(),q=q.gq(q),p=t.j,o=t.a;q.l();){n=q.gm()
m=A.e(n.a)
l=A.n(s,o)
for(n=e.a(n.b).gO(),n=n.gq(n);n.l();){k=n.gm()
l.j(0,A.e(k.a),A.P(p.a(k.b),!0,s))}r.j(0,m,l)}return r}j=A.lb(a)
s=t.N
i=A.n(s,t.O)
for(r=[!0,!1],q=t.a,h=0;h<2;++h){g=r[h]
f=g?"front":"back"
p=j.h(0,f)
if(J.cF(p==null?A.c([],e):p)){p=i.a
o=j.h(0,f)
o.toString
o=A.o(o,s)
i.j(0,""+(p+1),A.a4([f,o,f+"Targets",A.re(a,g)],s,q))}}return i},
pf(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="proxy-groups",b0=t.S.a(A.E(b2)),b1=t.g.a(b0.h(0,"proxies"))
if(b1==null)b1=[]
s=t.N
r=J.a3(b1)
q=r.ac(b1,new A.hJ(),s).aE(0)
p=A.f3(b3)
o=A.f1(b3)
n=A.Z(b2)
for(m=0;m<r.gk(b1);++m)if(p.F(J.m(r.h(b1,m),"name"))&&r.h(b1,m).F("dialer-proxy"))n.I(0,["proxies",m,"dialer-proxy"])
if(b0.gE().p(0,a9)){r=[]
for(l=J.F(t.j.a(b0.h(0,a9)));l.l();){k=l.gm()
if(!o.F(J.m(k,"name")))r.push(k)}n.H(["proxy-groups"],r)}r=t.s
j=new A.q(A.c(n.b.split("\n"),r),t.Q.a(new A.hK()),t.U).V(0,"\n")
i=A.n(s,t.O)
for(l=new A.O(b4,A.j(b4).i("O<1,2>")).gq(0),h=t.a;l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
d=J.am(d.b,q.ga5(q))
d=A.o(d,d.$ti.i("f.E"))
f.j(0,c,d)}e=f.h(0,"front")
if(!J.cF(e==null?A.c([],r):e)){e=f.h(0,"back")
e=J.cF(e==null?A.c([],r):e)}else e=!0
if(e)i.j(0,g.a,f)}l=i.$ti
f=l.i("aC<2>")
e=f.i("az<f.E,d>")
b=A.e8(new A.az(new A.aC(i,f),f.i("f<d>(f.E)").a(new A.hL()),e),e.i("f.E"))
a=A.n(s,s)
a0=A.n(s,h)
a1=A.n(s,t.G)
for(l=new A.O(i,l.i("O<1,2>")).gq(0);l.l();){g=l.d
f=A.n(s,h)
for(e=g.b.gO(),e=e.gq(e);e.l();){d=e.gm()
c=d.a
a2=B.a.aG(c,"Targets")
d=d.b
if(a2){d=J.am(d,new A.hM(b))
d=A.o(d,d.$ti.i("f.E"))}f.j(0,c,d)}e=g.a
i.j(0,e,f)
a3=A.mv(j,j,f," (\u94fe\u8def "+e+")")
a4=A.f1(a3)
a5=A.f3(a3)
a0.a9(0,a4)
for(f=new A.ba(a5,a5.r,a5.e,A.j(a5).i("ba<1,2>"));f.l();){a6=f.d
d=a6.a
if(a.F(d)&&a.h(0,d)!==a6.b)throw A.a(A.B("\u8282\u70b9\u201c"+d+"\u201d\u88ab\u591a\u6761\u94fe\u8def\u8fde\u63a5\u5230\u4e0d\u540c\u5165\u53e3\uff0c\u8bf7\u8c03\u6574\u9009\u62e9",a8,a8))
a.j(0,d,a6.b)}a1.j(0,e,a5)}a7=A.kT(j,A.kS("",a,a0))
s=B.c.ad(i,a8)
r=A.c([],r)
for(l=new A.O(a1,a1.$ti.i("O<1,2>")).gq(0);l.l();){g=l.d
h=g.a
f=i.h(0,h).F("back")?"# Mclash \u540e\u7f6e\u94fe\u8def ":"# Mclash \u94fe\u5f0f\u8282\u70b9 "
r.push(f+h+": "+B.c.ad(g.b,a8)+"\n")}return"# Mclash \u94fe\u8def\u8bbe\u7f6e: "+s+"\n"+B.b.dW(r)+a7},
ra(a){var s,r,q
for(s=["# Mclash \u94fe\u5f0f\u8282\u70b9 ","# Mclash \u524d\u7f6e\u94fe\u8def ","# Mclash \u540e\u7f6e\u94fe\u8def ","# Mclash \u8282\u70b9\u94fe\u8def "],r=0;r<4;++r){q=s[r]
if(B.a.u(a,q))return q}return null},
jT:function jT(){},
jy:function jy(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
jw:function jw(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
kY(a){var s,r,q,p,o,n,m,l=A.E(a),k=t.f,j=k.b(l)?l.h(0,"rule-providers"):null
if(j==null)return A.n(t.N,t.P)
if(!k.b(j))throw A.a(B.bE)
s=new A.iA()
r=t.N
q=A.n(r,t.P)
for(p=j.gO(),p=p.gq(p),o=t.z;p.l();){n=p.gm()
m=n.a
if(typeof m!="string"||!k.b(n.b))throw A.a(B.bZ)
q.j(0,m,A.aj(k.a(s.$1(n.b)),r,o))}return q},
mM(a){return new A.bx(A.pT(a),t.dj)},
pT(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l
return function $async$mM(b,c,d){if(c===1){p.push(d)
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
rD(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1={}
a1.a=a3
a3=a1.a=B.a.N(a3)
if(a3.length!==0){s=A.I("[,()\\r\\n]",!0)
s=s.b.test(a3)}else s=!0
if(s)throw A.a(B.aZ)
r=A.kY(a2)
s=a5==null
q=!s
if(q&&!r.F(a5))throw A.a(B.ch)
if(a3!==a5&&r.F(a3))throw A.a(B.b7)
p=a4.h(0,"type")
o=a4.h(0,"behavior")
n=a4.h(0,"format")
if(n==null)n="yaml"
m=t.s
if(!B.b.p(A.c(["http","file","inline"],m),p)||!B.b.p(A.c(["domain","ipcidr","classical"],m),o)||!B.b.p(A.c(["yaml","text","mrs"],m),n))throw A.a(B.bW)
if(J.u(n,"mrs"))l=J.u(o,"classical")||J.u(p,"inline")
else l=!1
if(l)throw A.a(B.bl)
l=J.aY(p)
if(l.R(p,"http")){k=a4.h(0,"url")
j=A.oz(A.l(k==null?"":k))
if(j==null||!B.b.p(A.c(["http","https"],m),j.gak())||j.gaH().length===0)throw A.a(B.cg)
i=a4.h(0,"interval")
if(i!=null)k=!A.b3(i)||i<0
else k=!1
if(k)throw A.a(B.c1)}k=a4.h(0,"path")
h=B.a.N(A.l(k==null?"":k))
if(l.R(p,"file")&&h.length===0)throw A.a(B.cd)
if(h.length!==0&&new A.O(r,A.j(r).i("O<1,2>")).S(0,new A.k4(a5,h)))throw A.a(B.bF)
if(l.R(p,"inline")){g=a4.h(0,"payload")
if(t.j.b(g)){l=J.C(g)
l=l.gL(g)||l.S(g,new A.k5())}else l=!0
if(l)throw A.a(B.bj)}f=A.n(t.N,t.z)
for(l=new A.O(r,A.j(r).i("O<1,2>")).gq(0);l.l();){e=l.d
k=e.a
d=k===a5
if(d)k=a1.a
f.j(0,k,d?a4:e.b)}if(s)f.j(0,a1.a,a4)
c=A.Z(a2)
c.H(["rule-providers"],f)
if(q&&a5!==a1.a){s=t.f
b=s.a(A.E(a2))
a=new A.k6(a1,a5)
q=t.j
if(q.b(b.h(0,"rules"))){l=A.c([],m)
for(k=J.F(t.R.a(b.h(0,"rules")));k.l();)l.push(a.$1(A.e(k.gm())))
c.H(["rules"],l)}a0=b.h(0,"sub-rules")
if(s.b(a0))for(s=a0.gO(),s=s.gq(s);s.l();){l=s.gm()
k=l.a
d=A.c([],m)
for(l=J.F(q.a(l.b));l.l();)d.push(a.$1(A.e(l.gm())))
c.H(["sub-rules",k],d)}}return c.b},
qv(a,b){var s,r
if(A.mM(t.f.a(A.E(a))).S(0,new A.iH(b)))throw A.a(B.bL)
s=A.kY(a)
s.I(0,b)
r=A.Z(a)
r.H(["rule-providers"],s)
return r.b},
iA:function iA(){},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
iH:function iH(a){this.a=a},
mD(a){var s,r
try{s=B.e.ct(B.x.aF(B.v.aW(a)))
return s}catch(r){throw A.a(B.bb)}},
mQ(a,b,c,d){var s,r,q,p,o="skip-cert-verify",n="client-fingerprint",m=t.s,l=b.a3(0,A.c(["sni","peer","serverName","servername"],m))
if(l.length!==0)a.j(0,c,l)
s=b.dO(A.c(["insecure","allowInsecure",o],m))
if(s!=null)a.j(0,o,s)
r=b.a3(0,A.c(["alpn"],m))
if(r.length!==0){q=t.e
q=new A.H(A.c(r.split(","),m),t.c.a(new A.i4()),q).bh(0,q.i("k(y.E)").a(new A.i5()))
q=A.o(q,q.$ti.i("f.E"))
a.j(0,"alpn",q)}if(d){p=b.a3(0,A.c(["fp",n],m))
if(p.length!==0)a.j(0,n,p)}},
q_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="path",e=t.s,d=b.aN(0,A.c(["type","network"],e),"tcp")
if(d.length===0)d="tcp"
s=b.aN(0,A.c(["headerType"],e),"none")
if(d==="tcp"&&s==="http"&&J.u(a.h(0,"type"),"vless"))d="http"
else if(s.length!==0&&s!=="none")throw A.a(B.c8)
if(!B.b.p(J.u(a.h(0,"type"),"vless")?A.c(["tcp","ws","http","h2","grpc","xhttp"],e):A.c(["tcp","ws","grpc"],e),d))throw A.a(B.c6)
a.j(0,"network",d)
if(d==="tcp")return
if(d==="grpc"){r=b.a3(0,A.c(["serviceName","service-name","path"],e))
q=b.aN(0,A.c(["mode"],e),"gun")
if(q!=="gun"&&q.length!==0)throw A.a(B.bd)
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
i=A.o(new A.q(A.c(o.split(","),e),t.Q.a(new A.i6()),n),n.i("f.E"))
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
pP(a,b){var s,r,q,p,o=t.s,n=b.a3(0,A.c(["pbk","public-key"],o))
if(n.length===0)A.D(A.B("\u8282\u70b9\u7f3a\u5c11Reality \u516c\u94a5",null,null))
s=n
try{if(B.x.aF(B.v.aW(s)).length!==32)throw A.a(B.bf)}catch(r){throw A.a(B.be)}q=b.a3(0,A.c(["sid","short-id"],o))
p=A.I("^[0-9a-fA-F]{0,16}$",!0)
if(!p.b.test(q)||(q.length&1)===1)throw A.a(B.bS)
b.a3(0,A.c(["spx"],o))
o=t.B.i("aI.S").a(B.x.aF(B.v.aW(s)))
o=B.a3.gbQ().aF(o)
p=t.N
a.j(0,"reality-opts",A.a4(["public-key",A.aG(o,"=",""),"short-id",q],p,p))},
pW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="mode"
if(b.length===0)return
s=t.s
r=A.c(b.split(";"),s)
q=B.b.bc(r,0)
p=t.N
o=A.n(p,p)
for(n=t.Q.a(new A.i3()),m=B.b.gq(r),n=new A.bk(m,n,t.fj);n.l();){l=m.gm()
k=B.a.az(l,"=")
j=k<0
i=j?l:B.a.v(l,0,k)
if(o.F(i))throw A.a(B.b0)
o.j(0,i,j?"true":B.a.D(l,k+1))}h=A.n(p,t.z)
if(B.b.p(A.c(["obfs-local","simple-obfs","obfs"],s),q)){p=o.I(0,"obfs")
g=p==null?o.I(0,d):p
if(g==null)g=""
if(!B.b.p(A.c(["http","tls"],s),g))throw A.a(B.ca)
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
r7(a){var s,r,q
try{r=A.pO(a)
return r}catch(q){r=A.c4(q)
if(t.d.b(r)){s=r
throw A.a(A.B(s.gdY(),null,null))}else throw A.a(B.J)}},
pO(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=null,c3="password",c4="tls",c5="udp",c6="^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",c7="congestion-controller",c8="\u8282\u70b9\u7f3a\u5c11\u5bc6\u7801",c9=d1.length,d0=!0
if(c9!==0)if(c9<=1048576){c9=A.I("\\s|%(?![0-9a-fA-F]{2})",!0)
c9=c9.b.test(d1)}else c9=d0
else c9=d0
if(c9)throw A.a(B.bQ)
s=d1
if(J.ls(s,"ss://")){q=J.nQ(s,A.I("[?#]",!0),5)
c9=q<0
p=c9?J.bB(s,5):J.nV(s,5,q)
if(!B.a.p(p,"@")){o=A.mD(p)
n=B.a.bb(o,"@")
if(n<0)throw A.a(B.ce)
d0=t.B.i("aI.S").a(B.aR.aF(B.a.v(o,0,n)))
m=B.a3.gbQ().aF(d0)
d0=B.a.D(o,n)
c9=c9?"":J.bB(s,q)
s="ss://"+m+d0+c9}}l=J.nP(s,"://")
if(l<0)throw A.a(B.J)
k=B.b.gU(B.a.bg(J.bB(s,l+3),A.I("[/?#]",!0)))
j=B.a.D(k,B.a.bb(k,"@")+1)
i=B.a.u(j,"[")?B.a.az(j,"]")+1:B.a.bb(j,":")
if(i>=0&&i<j.length&&j[i]===":"){h=B.a.D(j,i+1)
g=A.aU(h,c2)
c9=A.I("^\\d+$",!0)
if(!c9.b.test(h)||g==null||g<1||g>65535)throw A.a(B.ag)}else g=c2
r=null
try{r=A.ew(s,0,c2)
c9=r.gaA()
A.ak(c9,0,c9.length,B.e,!1)
c9=r.gb1()
A.ak(c9,0,c9.length,B.e,!1)}catch(f){throw A.a(B.J)}if(!B.b.p(B.cr,r.gak()))throw A.a(B.bV)
if(r.gaH().length!==0)c9=r.gaq().length!==0&&r.gaq()!=="/"
else c9=!0
if(c9)throw A.a(B.aV)
e=r.gak()
A:{if("hy2"===e){c9="hysteria2"
break A}if("socks"===e){c9="socks5"
break A}if("https"===e){c9="http"
break A}c9=e
break A}d0=c9==="ss"
if(d0&&g==null)throw A.a(B.bc)
if(g==null)if(c9==="socks5")d=1080
else{c=e==="http"?80:443
d=c}else d=g
if(d<1||d>65535)throw A.a(B.ag)
c=t.N
b=new A.hu(A.fH(r.ge2(),c,c))
if(r.ge3().gag().S(0,new A.hZ()))throw A.a(B.bh)
if(r.gb1().length===0)a=e.toUpperCase()+" "+r.gaH()+":"+d
else{a=r.gb1()
a=A.ak(a,0,a.length,B.e,!1)}a0=A.a4(["name",a,"type",c9,"server",r.gaH(),"port",d],c,t.z)
c=r.gaA()
a1=A.ak(c,0,c.length,B.e,!1)
if(c9==="http"||c9==="socks5"){a2=B.a.az(r.gaA(),":")
if(a1.length!==0){d0=a2<0?r.gaA():B.a.v(r.gaA(),0,a2)
a0.j(0,"username",A.ak(d0,0,d0.length,B.e,!1))
if(a2>=0){d0=B.a.D(r.gaA(),a2+1)
a0.j(0,c3,A.ak(d0,0,d0.length,B.e,!1))}}if(e==="https")a0.j(0,c4,!0)
if(c9==="socks5")a0.j(0,c5,!0)
if(r.gbt())throw A.a(B.c3)}else if(d0){m=B.a.p(r.gaA(),":")?a1:A.mD(a1)
a3=B.a.az(m,":")
if(a3<=0)throw A.a(B.bY)
a4=B.a.v(m,0,a3)
if(!B.cz.p(0,a4))throw A.a(B.cc)
a0.j(0,"cipher",a4)
c9=B.a.D(m,a3+1)
if(c9.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c3,c9)
a0.j(0,c5,!0)
A.pW(a0,b.a3(0,A.c(["plugin"],t.s)))}else{d0=c9==="vless"
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
if(a6!=="none"&&a6.length!==0)throw A.a(B.bi)
a0.j(0,c4,a5!=="none")}c9=a5!=="none"
if(c9)A.mQ(a0,b,d0?"servername":"sni",!0)
if(a5==="reality")A.pP(a0,b)
A.q_(a0,b)
if(d0){a7=b.a3(0,A.c(["flow"],c))
if(a7.length!==0){if(a7!=="xtls-rprx-vision"||!c9||!J.u(a0.h(0,"network"),"tcp"))throw A.a(B.aX)
a0.j(0,"flow",a7)}a8=b.a3(0,A.c(["packetEncoding","packet-encoding"],c))
if(a8.length!==0){if(!B.b.p(A.c(["xudp","packetaddr"],c),a8))throw A.a(B.bB)
a0.j(0,"packet-encoding",a8)}}}else{a0.j(0,c5,!0)
d0=c9==="anytls"
if(d0){c=t.s
if(b.aN(0,A.c(["security"],c),c4)!=="tls"||b.aN(0,A.c(["type","network"],c),"tcp")!=="tcp")throw A.a(B.cb)}A.mQ(a0,b,"sni",d0)
if(c9==="tuic"){a3=B.a.az(r.gaA(),":")
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
if(s!=null)a0.j(0,B.b.gJ(b2),s)}}else{if(a1.length===0)A.D(A.B(c8,c2,c2))
a0.j(0,c3,a1)
if(c9==="hysteria2"){for(c9=["up","down"],d0=t.s,b1=0;b1<2;++b1){b3=c9[b1]
s=b.a3(0,A.c([b3],d0))
if(s.length!==0){c=A.I("^\\d+(\\.\\d+)?(\\s*[KMG]?bps)?$",!1)
if(!c.b.test(s))throw A.a(B.bg)
a0.j(0,b3,s)}}b4=b.a3(0,A.c(["mport","ports"],d0))
if(b4.length!==0){for(c9=b4.split(","),c=c9.length,a=t.bR,b5=t.bz,b6=b5.i("y.E"),b1=0;b1<c;++b1){b7=A.o(new A.H(A.c(c9[b1].split("-"),d0),a.a(A.qo()),b5),b6)
b8=b7.length
b9=!0
if(b8!==0)if(b8<=2)if(!B.b.S(b7,new A.i_()))if(b7.length===2){b8=B.b.gU(b7)
b8.toString
b9=B.b.gJ(b7)
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
a0.j(0,"obfs-password",c1)}else if(c1.length!==0)throw A.a(B.bk)}}}}b.fW()
return a0},
hu:function hu(a){this.a=a},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i3:function i3(){},
hZ:function hZ(){},
i_:function i_(){},
i0(a){var s,r,q
if(t.f.b(a)){s=A.n(t.z,t.X)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,q.a,A.i0(q.b))}return s}if(t.j.b(a)){s=J.aR(a,A.rz(),t.X)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
ry(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="dialer-proxy"
if(b<1)return A.c([],t.s)
s=t.f
r=s.a(A.E(a))
q=A.jv(a)
p=A.aD(q,A.t(q).c)
o=J.lG(b,t.D)
for(q=t.Z,n=0;n<b;++n)o[n]=A.c([],q)
q=t.g.a(r.h(0,"proxies"))
q=J.F(q==null?[]:q)
m=b>1
l=t.N
k=t.z
while(q.l()){j=A.aj(s.a(A.i0(q.gm())),l,k)
i=A.e(j.h(0,"name"))
if(p.p(0,i))continue
if(m){h=A.I("^(\\d+)-",!0).dN(i)
if(h==null)throw A.a(B.bx)
g=h.b
if(1>=g.length)return A.b(g,1)
g=g[1]
g.toString
f=A.c0(g,null,null)-1
if(f<0||f>=b)throw A.a(B.bo)
e=""+(f+1)+"-"
g=e.length
j.j(0,"name",B.a.D(i,g))
d=j.h(0,c)
if(typeof d=="string"&&B.a.u(d,e))j.j(0,c,B.a.D(d,g))}else f=0
if(!(f>=0&&f<o.length))return A.b(o,f)
B.b.t(o[f],j)}s=A.t(o)
q=s.i("H<1,d>")
s=A.o(new A.H(o,s.i("d(1)").a(new A.jX()),q),q.i("y.E"))
return s},
r3(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="name",a0="dialer-proxy",a1=a2.length
if(a1===0)throw A.a(B.c2)
if(a1===1)return B.b.gee(a2)
s=A.c([],t.gT)
for(a1=t.dY,r=t.gh,q=t.f,p=t.N,o=t.z,n=t.Z,m=t.j,l=0;l<a2.length;++l){k=A.f_(a2[l],b,!1,b).a.ga7()
j=q.b(k)?k.h(0,"proxies"):b
if(!m.b(j)||J.cE(j))throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u6ca1\u6709\u53ef\u5185\u7f6e\u7684 proxies \u8282\u70b9",b,b))
i=A.c([],n)
for(h=J.F(j);h.l();){g=h.gm()
if(!q.b(g)||typeof g.h(0,a)!="string"||B.a.N(A.e(g.h(0,a))).length===0||typeof g.h(0,"type")!="string")throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u8282\u70b9\u7f3a\u5c11\u540d\u79f0\u6216\u7c7b\u578b",b,b))
B.b.t(i,A.aj(q.a(A.i0(g)),p,o))}if(new A.H(i,a1.a(new A.jb()),r).aE(0).a!==i.length)throw A.a(A.B("\u7b2c "+(l+1)+" \u4e2a\u8ba2\u9605\u8282\u70b9\u540d\u79f0\u91cd\u590d",b,b))
B.b.t(s,i)}f=A.c([],n)
for(l=0;l<s.length;l=e){a1=A.n(p,p)
for(r=s[l],q=r.length,e=l+1,o=""+e+"-",d=0;d<r.length;r.length===q||(0,A.a7)(r),++d){g=r[d]
a1.j(0,A.e(g.h(0,a)),o+A.l(g.h(0,a)))}if(!(l<s.length))return A.b(s,l)
r=s[l]
q=r.length
d=0
for(;d<r.length;r.length===q||(0,A.a7)(r),++d){g=r[d]
g.j(0,a,a1.h(0,g.h(0,a)))
c=g.h(0,a0)
if(a1.F(c))g.j(0,a0,a1.h(0,c))}if(!(l<s.length))return A.b(s,l)
B.b.a9(f,s[l])}a1=A.Z("")
a1.H([],A.a4(["proxies",f],p,t.D))
return a1.b},
qa(b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="proxies",a6="name",a7=A.E(b2),a8=t.S,a9=a8.b(a7)?a7.h(0,a5):null,b0=t.h
if(!b0.b(a9)||a9.gk(a9)===0)throw A.a(B.bs)
s=A.r2(a9,b3)
r=t.s
q=A.c([],r)
for(p=J.F(s);p.l();){o=p.gm()
if(!a8.b(o)||typeof o.h(0,a6)!="string"||B.a.N(A.e(o.h(0,a6))).length===0||typeof o.h(0,"type")!="string")throw A.a(B.cf)
B.b.t(q,A.e(o.h(0,a6)))}p=t.N
if(A.aD(q,p).a!==q.length)throw A.a(B.b8)
n=b3==null
if(!n){m=a8.a(A.E(b3))
l=A.aS(p)
k=t.g
j=k.a(m.h(0,a5))
j=J.F(j==null?[]:j)
while(j.l())l.t(0,A.e(J.m(j.gm(),a6)))
l.ha(q)
i=t.Y.a(m.h(0,"sub-rules"))
if(i==null){j=t.z
i=A.n(j,j)}k=k.a(m.h(0,"rules"))
k=A.o(A.P(k==null?[]:k,!0,p),p)
for(j=i.gag(),j=j.gq(j),h=t.j;j.l();)B.b.a9(k,A.P(h.a(j.gm()),!0,p))
j=k.length
g=0
for(;g<k.length;k.length===j||(0,A.a7)(k),++g){f=A.rp(k[g])
if(l.p(0,f))throw A.a(A.B("\u8282\u70b9 "+A.l(f)+" \u5df2\u4ece\u8ba2\u9605\u79fb\u9664\uff0c\u4f46\u4ecd\u88ab\u89c4\u5219\u5f15\u7528\uff0c\u8bf7\u5148\u4fee\u6539\u89c4\u5219\uff1b\u539f\u914d\u7f6e\u5df2\u4fdd\u7559",null,null))}}e=n?b1:b3
d=a8.a(A.E(e))
c=b0.a(d.h(0,"proxy-groups"))
b0=A.lM(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE","GLOBAL"],p)
for(p=A.j(c),l=new A.a2(c,c.gk(c),p.i("a2<r.E>")),p=p.i("r.E");l.l();){b=l.d
b0.t(0,A.e(J.m(b==null?p.a(b):b,a6)))}if(B.b.S(q,b0.ga5(b0)))throw A.a(B.b4)
a=A.Z(e)
if(d.gE().p(0,"proxy-providers"))a.I(0,["proxy-providers"])
a.H(["proxies"],s)
for(p=t.g,a0=0;a0<c.gk(c);++a0){b=a8.a(c.h(0,a0))
if(b.gE().p(0,"use"))a.I(0,["proxy-groups",a0,"use"])
l=p.a(b.h(0,a5))
if(l==null)l=[]
l=J.am(l,new A.iv(q,b0))
a1=A.o(l,l.$ti.i("f.E"))
l=a1.length===0?A.c(["DIRECT"],r):a1
a.H(["proxy-groups",a0,"proxies"],l)}a2=A.q9(a.b,A.rg(e))
a3=A.rh(n?b1:b3)
a4=a3.length===0?a2:A.qz(a2,a3)
a8=A.rL(a4,A.jv(n?"":b3))
return A.ro(A.kT(a8,n?"":b3),b3)},
jX:function jX(){},
jb:function jb(){},
iv:function iv(a,b){this.a=a
this.b=b},
px(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b7(r,new A.hY(b))
if(s>=0)return s}throw A.a(A.B("\u914d\u7f6e\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230 "+b+" \u4ee3\u7406\u7ec4",null,null))},
f4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a3(d)
r=s.ac(d,new A.jF(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jG()),o)
if(!n.gL(0)){s=t.N
m=A.aj(t.f.a(B.c.aa(B.a.D(n.gU(0),16),null)),s,s)
m.ar(0,new A.jH(r))
for(s=B.q.gO(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jI(l)),o)
j=l.a
if(m.F(j)&&!k.gL(0)){i=k.gq(0)
if(!i.l())A.D(A.Y())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jJ(f)),o)
if(!e.gL(0)){i=e.gq(0)
if(!i.l())A.D(A.Y())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
lk(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kf()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: "+B.c.ad(b,null)+"\n"+s},
jo(a){var s,r,q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.js(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jt()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.aj(t.f.a(B.c.aa(B.a.D(r.gU(0),21),null)),t.N,t.y)
q.ar(0,new A.ju(s))
return q},
nq(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.kb()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4 DIRECT: "+B.c.ad(b,null)+"\n"+s},
mX(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.E(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.iu()),r),r.i("y.E"))
p=A.Z(a1)
o=A.jo(a1)
for(s=new A.ah(a2,a2.r,a2.e,A.j(a2).i("ah<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
k=A.px(a,l)
j=b.a(J.m(a.h(0,"proxy-groups"),k))
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
p.H(["proxy-groups",k,"proxies"],l)}return A.lk(p.b,a2)},
hY:function hY(a){this.a=a},
jF:function jF(){},
jG:function jG(){},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
kf:function kf(){},
js:function js(){},
jt:function jt(){},
ju:function ju(a){this.a=a},
kb:function kb(){},
iu:function iu(){},
pw(a,b){var s,r=a.h(0,"proxy-groups")
if(t.h.b(r)){s=r.b7(r,new A.hX(b))
if(s>=0)return s}throw A.a(A.B("\u914d\u7f6e\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230 "+b+" \u4ee3\u7406\u7ec4",null,null))},
rg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(d==null)d=[]
s=J.a3(d)
r=s.ac(d,new A.jA(),t.z).aE(0)
q=t.s
p=t.Q
o=t.U
n=new A.q(A.c(a.split("\n"),q),p.a(new A.jB()),o)
if(!n.gL(0)){s=t.N
m=A.aj(t.f.a(B.c.aa(B.a.D(n.gU(0),16),null)),s,s)
m.ar(0,new A.jC(r))
for(s=B.q.gO(),s=s.gq(s);s.l();){l=s.gm()
k=new A.q(A.c(a.split("\n"),q),p.a(new A.jD(l)),o)
j=l.a
if(m.F(j)&&!k.gL(0)){i=k.gq(0)
if(!i.l())A.D(A.Y())
m.j(0,j,A.e(B.c.aa(J.bB(i.gm(),l.b.length),null)))}}return m}l=t.N
m=A.n(l,l)
for(s=s.gq(d);s.l();){h=s.gm()
l=J.C(h)
g=A.e(l.h(h,"name"))
f=B.q.h(0,g)
e=new A.q(A.c(a.split("\n"),q),p.a(new A.jE(f)),o)
if(!e.gL(0)){i=e.gq(0)
if(!i.l())A.D(A.Y())
m.j(0,g,A.e(B.c.aa(J.bB(i.gm(),f.length),null)))}else if(typeof l.h(h,"filter")=="string"||B.al.F(g)){l=A.bX(l.h(h,"filter"))
m.j(0,g,l==null?"":l)}}return m},
rM(a,b){var s=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.ke()),t.U).V(0,"\n")
return"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: "+B.c.ad(b,null)+"\n"+s},
rc(a){var s,r,q=t.g.a(t.S.a(A.E(a)).h(0,"proxy-groups"))
if(q==null)q=[]
s=J.aR(q,new A.jp(),t.z).aE(0)
r=new A.q(A.c(a.split("\n"),t.s),t.Q.a(new A.jq()),t.U)
if(!r.gq(0).l())return A.n(t.N,t.y)
q=A.aj(t.f.a(B.c.aa(B.a.D(r.gU(0),21),null)),t.N,t.y)
q.ar(0,new A.jr(s))
return q},
q9(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.S,a=b.a(A.E(a1)),a0=a.h(0,"proxies")
if(!t.h.b(a0)||a0.gk(a0)===0)throw A.a(B.A)
s=A.j(a0)
r=s.i("H<r.E,d>")
q=A.o(new A.H(a0,s.i("d(r.E)").a(new A.it()),r),r.i("y.E"))
p=A.Z(a1)
o=A.rc(a1)
for(s=new A.ah(a2,a2.r,a2.e,A.j(a2).i("ah<1>")),r=A.t(q),n=r.i("k(1)"),r=r.i("q<1>"),m=t.s;s.l();){l=s.d
k=A.pw(a,l)
j=b.a(J.m(a.h(0,"proxy-groups"),k))
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
p.H(["proxy-groups",k,"proxies"],l)}return A.rM(p.b,a2)},
hX:function hX(a){this.a=a},
jA:function jA(){},
jB:function jB(){},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
ke:function ke(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(a){this.a=a},
it:function it(){},
ni(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ae)
s=t.S
r=s.a(A.E(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.Z(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.R(k,d)&&!j.R(k,"ws"))continue
i=j.R(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.aj(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.aj(h==null?A.n(p,p):h,p,p)
f.ar(0,new A.iN())
f.j(0,"Host",j.R(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.H(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iO()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iN:function iN(){},
iO:function iO(){},
rh(a){var s,r,q,p
for(s=a.split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(B.a.u(p,"# Mclash HTTP/WS Host: "))return A.e(B.c.aa(B.a.D(p,23),null))}return""},
qz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="http",c=B.a.N(b)
if(c.length!==0){s=A.I("[\\s/\\\\?#]",!0)
s=s.b.test(c)}else s=!0
if(s)throw A.a(B.ae)
s=t.S
r=s.a(A.E(a)).h(0,"proxies")
if(!t.h.b(r)||r.gk(r)===0)throw A.a(B.A)
q=A.Z(a)
for(p=t.z,o=t.Y,n=t.s,m=0;m<r.gk(r);++m){l=r.h(0,m)
if(!s.b(l)||!J.u(l.h(0,"type"),"vmess"))continue
k=l.h(0,"network")
j=J.aY(k)
if(!j.R(k,d)&&!j.R(k,"ws"))continue
i=j.R(k,d)?"http-opts":"ws-opts"
h=o.a(l.h(0,i))
g=A.aj(h==null?A.n(p,p):h,p,p)
h=o.a(g.h(0,"headers"))
f=A.aj(h==null?A.n(p,p):h,p,p)
f.ar(0,new A.iL())
f.j(0,"Host",j.R(k,d)?A.c([c],n):c)
g.j(0,"headers",f)
q.H(["proxies",m,i],g)}e=new A.q(A.c(q.b.split("\n"),n),t.Q.a(new A.iM()),t.U).V(0,"\n")
return"# Mclash HTTP/WS Host: "+B.c.ad(c,null)+"\n"+e},
iL:function iL(){},
iM:function iM(){},
r9(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pl(a,b,c,d,e){t._.a(a)
A.T(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
ne(a,b,c){A.qb(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
qI(a,b,c,d){var s,r,q,p,o,n=A.n(d,c.i("p<0>"))
for(s=c.i("J<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.c([],s)
n.j(0,p,o)
p=o}else p=o
J.km(p,q)}return n},
oa(a,b,c){var s,r,q,p,o=A.t(a),n=new J.b6(a,a.length,o.i("b6<1>"))
if(!n.l())throw A.a(A.bi("no elements"))
s=n.d
if(s==null)s=o.c.a(s)
for(o=o.c,r=1;n.l();r=q){q=r+1
p=n.d
s=b.$3(r,s,p==null?o.a(p):p)}return s},
n0(){var s,r,q,p,o=null
try{o=A.kF()}catch(s){if(t.g8.b(A.c4(s))){r=$.hW
if(r!=null)return r
throw s}else throw s}if(J.u(o,$.mC)){r=$.hW
r.toString
return r}$.mC=o
if($.lm()===$.dN())r=$.hW=o.e8(".").n(0)
else{q=o.cM()
p=q.length-1
r=$.hW=p===0?q:B.a.v(q,0,p)}return r},
nc(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
n3(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.b(a,b)
if(!A.nc(a.charCodeAt(b)))return q
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
qT(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gU(0)
for(r=A.aW(a,1,null,a.$ti.i("y.E")),q=r.$ti,r=new A.a2(r,r.gk(0),q.i("a2<y.E>")),q=q.i("y.E");r.l();){p=r.d
if(!J.u(p==null?q.a(p):p,s))return!1}return!0},
rn(a,b,c){var s=B.b.az(a,null)
if(s<0)throw A.a(A.a1(A.l(a)+" contains no null elements."))
B.b.j(a,s,b)},
nk(a,b,c){var s=B.b.az(a,b)
if(s<0)throw A.a(A.a1(A.l(a)+" contains no elements matching "+b.n(0)+"."))
B.b.j(a,s,null)},
qp(a,b){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
iQ(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.af(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.az(a,b)
while(r!==-1){q=r===0?0:B.a.ae(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.af(a,b,r+1)}return null},
rJ(a,b,c,d){var s=c!=null
if(s)if(c<0)throw A.a(A.a5("position must be greater than or equal to 0."))
else if(c>a.length)throw A.a(A.a5("position must be less than or equal to the string length."))
if(s&&d!=null&&c+d>a.length)throw A.a(A.a5("position plus length must not go beyond the end of the string."))},
E(a){return A.f_(a,null,!1,null).a.ga7()},
f_(a,b,c,d){var s,r=null,q=A.c([],t.aq),p=t.N,o=A.aT(A.oj(r),r,!1,t.fs),n=A.c([B.cy],t.a2),m=A.c([null],t.g0),l=A.oq(a,d),k=new A.fN(new A.fS(!1,b,new A.dW(l,r,a),new A.d5(o,0,0,t.co),n,m),q,B.aC,A.n(p,t.h7)),j=new A.fI(k,A.n(p,t.T),A.aS(p),k.aQ().gA()),i=j.dX()
if(i==null){q=j.d
return new A.eA(new A.an(r,B.j,q),q)}s=j.dX()
if(s!=null)throw A.a(A.G("Only expected one document.",s.b))
return i},
rq(a){var s,r=a.length-1,q=t.s
for(;;){if(r>0){s=A.c(["no-resolve","src"],q)
if(!(r<a.length))return A.b(a,r)
s=B.b.p(s,B.a.N(a[r]))}else s=!1
if(!s)break;--r}return r},
rp(a){var s,r=A.c(a.split(","),t.s)
if(B.a.N(B.b.gU(r))==="SUB-RULE"||r.length<2)return null
s=A.rq(r)
if(!(s>=0&&s<r.length))return A.b(r,s)
return B.a.N(r[s])}},B={}
var w=[A,J,B]
var $={}
A.kt.prototype={}
J.e1.prototype={
R(a,b){return a===b},
gY(a){return A.eh(a)},
n(a){return"Instance of '"+A.ei(a)+"'"},
gaM(a){return A.b4(A.kP(this))}}
J.e3.prototype={
n(a){return String(a)},
gY(a){return a?519018:218159},
gaM(a){return A.b4(t.y)},
$iar:1,
$ik:1}
J.cS.prototype={
R(a,b){return null==b},
n(a){return"null"},
gY(a){return 0},
$iar:1,
$ibd:1}
J.cV.prototype={$iaM:1}
J.bs.prototype={
gY(a){return 0},
n(a){return String(a)}}
J.ef.prototype={}
J.cn.prototype={}
J.br.prototype={
n(a){var s=a[$.ns()]
if(s==null)s=a[$.ll()]
if(s==null)return this.ek(a)
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
a.$flags&1&&A.U(a,29)
a.push(b)},
bc(a,b){A.T(b)
a.$flags&1&&A.U(a,"removeAt",1)
if(b<0||b>=a.length)throw A.a(A.fR(b,null))
return a.splice(b,1)[0]},
b8(a,b,c){var s
A.t(a).c.a(c)
a.$flags&1&&A.U(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.fR(b,null))
a.splice(b,0,c)},
cE(a,b,c){var s,r,q
A.t(a).i("f<1>").a(c)
a.$flags&1&&A.U(a,"insertAll",2)
s=a.length
A.cj(b,0,s,"index")
r=c.length
a.length=s+r
q=b+r
this.al(a,q,a.length,a,b)
this.bf(a,b,q,c)},
e4(a){a.$flags&1&&A.U(a,"removeLast",1)
if(a.length===0)throw A.a(A.dJ(a,-1))
return a.pop()},
ar(a,b){A.t(a).i("k(1)").a(b)
a.$flags&1&&A.U(a,16)
this.dt(a,b,!0)},
dt(a,b,c){var s,r,q,p,o
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
a.$flags&1&&A.U(a,"addAll",2)
if(Array.isArray(b)){this.eu(a,b)
return}for(s=J.F(b);s.l();)a.push(s.gm())},
eu(a,b){var s,r
t.v.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.Q(a))
for(r=0;r<s;++r)a.push(b[r])},
br(a){a.$flags&1&&A.U(a,"clear","clear")
a.length=0},
an(a,b){var s,r
A.t(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.a(A.Q(a))}},
ac(a,b,c){var s=A.t(a)
return new A.H(a,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("H<1,2>"))},
V(a,b){var s,r=A.aT(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.l(a[s]))
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
throw A.a(A.Y())},
gJ(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.Y())},
gee(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.a(A.Y())
throw A.a(A.o9())},
al(a,b,c,d,e){var s,r,q,p
A.t(a).i("f<1>").a(d)
a.$flags&2&&A.U(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.ad(e,"skipCount")
r=d
q=J.C(r)
if(e+s>q.gk(r))throw A.a(A.lF())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.h(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.h(r,e+p)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
bs(a,b,c,d){var s
a.$flags&2&&A.U(a,"fillRange")
A.be(b,c,a.length)
A.t(a).c.a(d)
for(s=b;s<c;++s)a[s]=d},
S(a,b){var s,r
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
a.$flags&2&&A.U(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aK()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.qg(b,2))
if(p>0)this.fl(a,p)},
fl(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
az(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.u(a[s],b))return s}return-1},
p(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
gL(a){return a.length===0},
gb3(a){return a.length!==0},
n(a){return A.fx(a,"[","]")},
aS(a,b){var s=A.c(a.slice(0),A.t(a))
return s},
aR(a){return this.aS(a,!0)},
gq(a){return new J.b6(a,a.length,A.t(a).i("b6<1>"))},
gY(a){return A.eh(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.U(a,"set length","change the length of")
if(b>a.length)A.t(a).c.a(null)
a.length=b},
h(a,b){A.T(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
j(a,b,c){A.t(a).c.a(c)
a.$flags&2&&A.U(a)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
a[b]=c},
b7(a,b){var s
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
J.fy.prototype={}
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
A.mz(b)
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
bp(a,b){return(a|0)===a?a/b|0:this.fD(a,b)},
fD(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.M("Result of truncating division is "+A.l(s)+": "+A.l(a)+" ~/ "+b))},
b0(a,b){var s
if(a>0)s=this.dB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fz(a,b){if(0>b)throw A.a(A.dI(b))
return this.dB(a,b)},
dB(a,b){return b>31?0:a>>>b},
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
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.cm(c,a)},
aG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.D(a,r-s)},
e7(a,b,c){A.cj(0,0,a.length,"startIndex")
return A.rw(a,b,c,0)},
bg(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.b9){s=b.e
s=!(s==null?b.e=b.eA():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.eF(a,b)}},
aX(a,b,c,d){var s=A.be(b,c,a.length)
return A.nm(a,b,s,d)},
eF(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.kn(b,a),s=s.gq(s),r=0,q=1;s.l();){p=s.gm()
o=p.gC()
n=p.gG()
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
return b===a.substring(c,s)}return J.nR(b,a,c)!=null},
u(a,b){return this.a4(a,b,0)},
v(a,b,c){return a.substring(b,A.be(b,c,a.length))},
D(a,b){return this.v(a,b,null)},
N(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.od(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.lJ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
he(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(!(s>=0))return A.b(r,s)
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.lJ(r,s))},
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
if(b instanceof A.b9){s=b.cW(a,c)
return s==null?-1:s.b.index}for(r=a.length,q=J.c_(b),p=c;p<=r;++p)if(q.bu(b,a,p)!=null)return p
return-1},
az(a,b){return this.af(a,b,0)},
ae(a,b,c){var s,r,q
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.a8(c,0,a.length,null,null))
if(typeof b=="string"){s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)}for(s=J.c_(b),q=c;q>=0;--q)if(s.bu(b,a,q)!=null)return q
return-1},
bb(a,b){return this.ae(a,b,null)},
p(a,b){return A.rs(a,b,0)},
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
h(a,b){A.T(b)
if(!(b>=0&&b<a.length))throw A.a(A.dJ(a,b))
return a[b]},
$iar:1,
$ich:1,
$id:1}
A.cZ.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.aH.prototype={
gk(a){return this.a.length},
h(a,b){var s
A.T(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.fV.prototype={}
A.x.prototype={}
A.y.prototype={
gq(a){var s=this
return new A.a2(s,s.gk(s),A.j(s).i("a2<y.E>"))},
gL(a){return this.gk(this)===0},
gU(a){if(this.gk(this)===0)throw A.a(A.Y())
return this.T(0,0)},
gJ(a){var s=this
if(s.gk(s)===0)throw A.a(A.Y())
return s.T(0,s.gk(s)-1)},
p(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(J.u(r.T(0,s),b))return!0
if(q!==r.gk(r))throw A.a(A.Q(r))}return!1},
aO(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(!b.$1(q.T(0,r)))return!1
if(s!==q.gk(q))throw A.a(A.Q(q))}return!0},
S(a,b){var s,r,q=this
A.j(q).i("k(y.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gk(q))throw A.a(A.Q(q))}return!1},
bS(a,b){var s,r,q,p=this
A.j(p).i("k(y.E)").a(b)
s=p.gk(p)
for(r=0;r<s;++r){q=p.T(0,r)
if(b.$1(q))return q
if(s!==p.gk(p))throw A.a(A.Q(p))}throw A.a(A.Y())},
V(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.l(p.T(0,0))
if(o!==p.gk(p))throw A.a(A.Q(p))
for(r=s,q=1;q<o;++q){r=r+b+A.l(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.l(p.T(0,q))
if(o!==p.gk(p))throw A.a(A.Q(p))}return r.charCodeAt(0)==0?r:r}},
aJ(a,b){return this.bh(0,A.j(this).i("k(y.E)").a(b))},
ac(a,b,c){var s=A.j(this)
return new A.H(this,s.a8(c).i("1(y.E)").a(b),s.i("@<y.E>").a8(c).i("H<1,2>"))},
h8(a,b){var s,r,q,p=this
A.j(p).i("y.E(y.E,y.E)").a(b)
s=p.gk(p)
if(s===0)throw A.a(A.Y())
r=p.T(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.T(0,q))
if(s!==p.gk(p))throw A.a(A.Q(p))}return r},
ao(a,b){return A.aW(this,b,null,A.j(this).i("y.E"))},
aS(a,b){var s=A.o(this,A.j(this).i("y.E"))
return s},
aR(a){return this.aS(0,!0)},
aE(a){var s,r=this,q=A.kw(A.j(r).i("y.E"))
for(s=0;s<r.gk(r);++s)q.t(0,r.T(0,s))
return q}}
A.bL.prototype={
es(a,b,c,d){var s,r=this.b
A.ad(r,"start")
s=this.c
if(s!=null){A.ad(s,"end")
if(r>s)throw A.a(A.a8(r,0,s,"start",null))}},
geG(){var s=J.a6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfB(){var s=J.a6(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.a6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gfB()+b
if(b<0||r>=s.geG())throw A.a(A.e_(b,s.gk(0),s,null,"index"))
return J.ko(s.a,r)},
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
return b?J.kr(0,n):J.lH(0,n)}r=A.aT(s,m.T(n,o),b,p.$ti.c)
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
gL(a){return J.cE(this.a)},
gU(a){return this.b.$1(J.lr(this.a))},
gJ(a){return this.b.$1(J.kp(this.a))},
T(a,b){return this.b.$1(J.ko(this.a,b))}}
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
T(a,b){return this.b.$1(J.ko(this.a,b))}}
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
A.az.prototype={
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
A.ca.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.ca(this.a,this.b+b,this.$ti)},
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
gL(a){return!0},
gk(a){return 0},
gU(a){throw A.a(A.Y())},
gJ(a){throw A.a(A.Y())},
T(a,b){throw A.a(A.a8(b,0,0,"index",null))},
p(a,b){return!1},
aO(a,b){this.$ti.i("k(1)").a(b)
return!0},
S(a,b){this.$ti.i("k(1)").a(b)
return!1},
bS(a,b){this.$ti.i("k(1)").a(b)
throw A.a(A.Y())},
V(a,b){return""},
aJ(a,b){this.$ti.i("k(1)").a(b)
return this},
ac(a,b,c){this.$ti.a8(c).i("1(2)").a(b)
return new A.bD(c.i("bD<0>"))},
ao(a,b){A.ad(b,"count")
return this},
aS(a,b){var s=J.kr(0,this.$ti.c)
return s},
aR(a){return this.aS(0,!0)}}
A.cP.prototype={
l(){return!1},
gm(){throw A.a(A.Y())},
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
gL(a){var s=this.a
return s.gL(s)},
gU(a){var s=this.a
return new A.b2(this.b,s.gU(s))},
T(a,b){return new A.b2(b+this.b,this.a.T(0,b))},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.T(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ef()
n=this.a.ao(0,p-this.b)
q=n.gq(n)
return q.l()&&J.u(q.gm(),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.b8(this.a.ao(0,b),b+this.b,A.j(this).i("b8<1>"))},
gq(a){var s=this.a
return new A.bE(s.gq(s),this.b,A.j(this).i("bE<1>"))}}
A.c9.prototype={
gJ(a){var s,r=this.a,q=r.gk(r)
if(q<=0)throw A.a(A.Y())
s=r.gJ(r)
if(q!==r.gk(r))throw A.a(A.Q(this))
return new A.b2(q-1+this.b,s)},
p(a,b){var s,r,q,p=null,o=null,n=!1
if(t.ei.b(b)){s=b.a
if(A.b3(s)){A.T(s)
r=b.b
n=s>=this.b
o=r
p=s}}if(n){if(typeof p!=="number")return p.ef()
q=p-this.b
n=this.a
return q<n.gk(n)&&J.u(n.T(0,q),o)}return!1},
ao(a,b){A.cI(b,"count",t.p)
A.ad(b,"count")
return new A.c9(this.a.ao(0,b),this.b+b,this.$ti)},
$ix:1}
A.bE.prototype={
l(){if(++this.c>=0&&this.a.l())return!0
this.c=-2
return!1},
gm(){var s=this.c
return s>=0?new A.b2(this.b+s,this.a.gm()):A.D(A.Y())},
$iK:1}
A.aL.prototype={
sk(a,b){throw A.a(A.M("Cannot change the length of a fixed-length list"))},
t(a,b){A.a9(a).i("aL.E").a(b)
throw A.a(A.M("Cannot add to a fixed-length list"))},
ar(a,b){A.a9(a).i("k(aL.E)").a(b)
throw A.a(A.M("Cannot remove from a fixed-length list"))}}
A.av.prototype={
j(a,b,c){A.j(this).i("av.E").a(c)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.a(A.M("Cannot change the length of an unmodifiable list"))},
t(a,b){A.j(this).i("av.E").a(b)
throw A.a(A.M("Cannot add to an unmodifiable list"))},
ar(a,b){A.j(this).i("k(av.E)").a(b)
throw A.a(A.M("Cannot remove from an unmodifiable list"))},
bY(a,b){A.j(this).i("h(av.E,av.E)?").a(b)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
al(a,b,c,d,e){A.j(this).i("f<av.E>").a(d)
throw A.a(A.M("Cannot modify an unmodifiable list"))},
bf(a,b,c,d){return this.al(0,b,c,d,0)}}
A.co.prototype={}
A.eM.prototype={
gk(a){return J.a6(this.a)},
T(a,b){var s=J.a6(this.a)
if(0>b||b>=s)A.D(A.e_(b,s,this,null,"index"))
return b}}
A.d_.prototype={
h(a,b){return this.F(b)?J.m(this.a,A.T(b)):null},
gk(a){return J.a6(this.a)},
gag(){return A.aW(this.a,0,null,this.$ti.c)},
gE(){return new A.eM(this.a)},
gL(a){return J.cE(this.a)},
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
A.cu.prototype={$r:"+column,type(1,2)",$s:2}
A.bU.prototype={$r:"+compactCharOffset,lineEndingIndex(1,2)",$s:3}
A.cv.prototype={$r:"+end,start(1,2)",$s:4}
A.dw.prototype={$r:"+indent,trailingBreaks(1,2)",$s:5}
A.cw.prototype={$r:"+nearestLineEnding,nextNodeColStart(1,2)",$s:6}
A.dx.prototype={$r:"+index,keyNode,valueNode(1,2,3)",$s:7}
A.cL.prototype={}
A.cK.prototype={
gL(a){return this.gk(this)===0},
n(a){return A.ky(this)},
j(a,b,c){var s=A.j(this)
s.c.a(b)
s.y[1].a(c)
A.lB()},
I(a,b){A.lB()},
gO(){return new A.bx(this.fU(),A.j(this).i("bx<L<1,2>>"))},
fU(){var s=this
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
$iK:1}
A.cM.prototype={
t(a,b){A.j(this).c.a(b)
A.lC()},
I(a,b){A.lC()}}
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
A.e0.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.cc&&this.a.R(0,b.a)&&A.l3(this)===A.l3(b)},
gY(a){return A.eb(this.a,A.l3(this),B.n,B.n)},
n(a){var s=B.b.V([A.b4(this.$ti.c)],", ")
return this.a.n(0)+" with "+("<"+s+">")}}
A.cc.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.qS(A.iy(this.a),this.$ti)}}
A.d8.prototype={}
A.fZ.prototype={
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
$iay:1}
A.aq.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nn(r==null?"unknown":r)+"'"},
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
return"Closure '"+A.nn(s)+"'"}}
A.c7.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.c7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gY(a){return(A.f0(this.a)^A.eh(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ei(this.a)+"'")}}
A.ej.prototype={
n(a){return"RuntimeError: "+this.a}}
A.aA.prototype={
gk(a){return this.a},
gL(a){return this.a===0},
gE(){return new A.ai(this,A.j(this).i("ai<1>"))},
gag(){return new A.aC(this,A.j(this).i("aC<2>"))},
gO(){return new A.O(this,A.j(this).i("O<1,2>"))},
F(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.dR(a)},
dR(a){var s=this.d
if(s==null)return!1
return this.ba(s[this.b9(a)],a)>=0},
aU(a){return new A.ai(this,A.j(this).i("ai<1>")).S(0,new A.fA(this,a))},
a9(a,b){A.j(this).i("w<1,2>").a(b).an(0,new A.fz(this))},
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
q.cS(s==null?q.b=q.cd():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cS(r==null?q.c=q.cd():r,b,c)}else q.dU(b,c)},
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
if(typeof b=="string")return s.cQ(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.cQ(s.c,b)
else return s.dT(b)},
dT(a){var s,r,q,p,o=this,n=o.d
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
if(r!==q.r)throw A.a(A.Q(q))
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
ce(a,b){var s=this,r=A.j(s),q=new A.fE(r.c.a(a),r.y[1].a(b))
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
b9(a){return J.ac(a)&1073741823},
ba(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
n(a){return A.ky(this)},
cd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifD:1}
A.fA.prototype={
$1(a){var s=this.a
return J.u(s.h(0,A.j(s).c.a(a)),this.b)},
$S(){return A.j(this.a).i("k(1)")}}
A.fz.prototype={
$2(a,b){var s=this.a,r=A.j(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.j(this.a).i("~(1,2)")}}
A.fE.prototype={}
A.ai.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
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
A.aC.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
gq(a){var s=this.a
return new A.aB(s,s.r,s.e,this.$ti.i("aB<1>"))}}
A.aB.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iK:1}
A.O.prototype={
gk(a){return this.a.a},
gL(a){return this.a.a===0},
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
A.iZ.prototype={
$1(a){return this.a(a)},
$S:1}
A.j_.prototype={
$2(a,b){return this.a(a,b)},
$S:51}
A.j0.prototype={
$1(a){return this.a(A.e(a))},
$S:16}
A.ax.prototype={
n(a){return this.dF(!1)},
dF(a){var s,r,q,p,o,n=this.eM(),m=this.ca(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.lS(o):l+A.l(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
eM(){var s,r=this.$s
while($.hv.length<=r)B.b.t($.hv,null)
s=$.hv[r]
if(s==null){s=this.ez()
B.b.j($.hv,r,s)}return s},
ez(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.lG(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.b.j(j,q,r[s])}}return A.kx(j,k)}}
A.aX.prototype={
ca(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.aX&&this.$s===b.$s&&J.u(this.a,b.a)&&J.u(this.b,b.b)},
gY(a){return A.eb(this.$s,this.a,this.b,B.n)}}
A.ct.prototype={
ca(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.ct&&s.$s===b.$s&&J.u(s.a,b.a)&&J.u(s.b,b.b)&&J.u(s.c,b.c)},
gY(a){var s=this
return A.eb(s.$s,s.a,s.b,s.c)}}
A.b9.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdf(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.ks(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gf0(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.ks(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
eA(){var s,r=this.a
if(!B.a.p(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
dN(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cs(s)},
fX(a){A.e(a)
return this.b.test(a)},
cr(a,b,c){var s=b.length
if(c>s)throw A.a(A.a8(c,0,s,null,null))
return new A.eE(this,b,c)},
bq(a,b){return this.cr(0,b,0)},
cW(a,b){var s,r=this.gdf()
if(r==null)r=A.hT(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cs(s)},
eH(a,b){var s,r=this.gf0()
if(r==null)r=A.hT(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.cs(s)},
bu(a,b,c){if(c<0||c>b.length)throw A.a(A.a8(c,0,b.length,null,null))
return this.eH(b,c)},
$ich:1,
$iol:1}
A.cs.prototype={
gC(){return this.b.index},
gG(){var s=this.b
return s.index+s[0].length},
h(a,b){var s
A.T(b)
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
p=q.cW(l,s)
if(p!=null){m.d=p
o=p.gG()
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
A.cm.prototype={
gG(){return this.a+this.c.length},
h(a,b){A.T(b)
if(b!==0)throw A.a(A.fR(b,null))
return this.c},
$ib_:1,
gC(){return this.a}}
A.eN.prototype={
gq(a){return new A.eO(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.cm(r,s)
throw A.a(A.Y())}}
A.eO.prototype={
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
$iK:1}
A.hj.prototype={
bI(){var s=this.b
if(s===this)throw A.a(new A.cZ("Local '' has not been initialized."))
return s}}
A.d1.prototype={
eP(a,b,c,d){var s=A.a8(b,0,c,d,null)
throw A.a(s)},
cT(a,b,c,d){if(b>>>0!==b||b>c)this.eP(a,b,c,d)}}
A.b0.prototype={
gk(a){return a.length},
$icf:1}
A.bc.prototype={
j(a,b,c){A.T(c)
a.$flags&2&&A.U(a)
A.hU(b,a,a.length)
a[b]=c},
al(a,b,c,d,e){var s,r,q,p
t.hb.a(d)
a.$flags&2&&A.U(a,5)
if(t.eB.b(d)){s=a.length
this.cT(a,b,s,"start")
this.cT(a,c,s,"end")
if(b>c)A.D(A.a8(b,0,c,null,null))
r=c-b
if(e<0)A.D(A.a1(e))
q=d.length
if(q-e<r)A.D(A.bi("Not enough elements"))
p=e!==0||q!==r?d.subarray(e,e+r):d
a.set(p,b)
return}this.el(a,b,c,d,e)},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
$ix:1,
$if:1,
$ip:1}
A.e9.prototype={
gaM(a){return B.cE},
h(a,b){A.T(b)
A.hU(b,a,a.length)
return a[b]},
$iar:1}
A.d2.prototype={
gaM(a){return B.cG},
h(a,b){A.T(b)
A.hU(b,a,a.length)
return a[b]},
c0(a,b,c){return new Uint32Array(a.subarray(b,A.mB(b,c,a.length)))},
$iar:1,
$ikD:1}
A.bG.prototype={
gaM(a){return B.cH},
gk(a){return a.length},
h(a,b){A.T(b)
A.hU(b,a,a.length)
return a[b]},
$iar:1,
$ibG:1,
$ikE:1}
A.dt.prototype={}
A.du.prototype={}
A.aV.prototype={
i(a){return A.dD(v.typeUniverse,this,a)},
a8(a){return A.mg(v.typeUniverse,this,a)}}
A.eI.prototype={}
A.hw.prototype={
n(a){return A.as(this.a,null)}}
A.eG.prototype={
n(a){return this.a}}
A.cx.prototype={}
A.dz.prototype={
gm(){var s=this.b
return s==null?this.$ti.c.a(s):s},
fm(a,b){var s,r,q
a=A.T(a)
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
o.d=null}q=o.fm(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.mb
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
o.a=A.mb
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
return this.eh(b)},
j(a,b,c){var s=this.$ti
this.ej(s.c.a(b),s.y[1].a(c))},
F(a){if(!this.y.$1(a))return!1
return this.eg(a)},
I(a,b){if(!this.y.$1(b))return null
return this.ei(b)},
b9(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
ba(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(q.$2(r.a(a[p].a),r.a(b)))return p
return-1}}
A.hs.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.aw.prototype={
dg(){return new A.aw(A.j(this).i("aw<1>"))},
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
return t.M.a(r[b])!=null}else return this.eC(b)},
eC(a){var s=this.d
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
return q.cU(s==null?q.b=A.kG():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cU(r==null?q.c=A.kG():r,b)}else return q.ey(b)},
ey(a){var s,r,q,p=this
A.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kG()
r=p.bC(a)
q=s[r]
if(q==null)s[r]=[p.c4(a)]
else{if(p.bE(q,a)>=0)return!1
q.push(p.c4(a))}return!0},
I(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ds(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ds(s.c,b)
else return s.fk(b)},
fk(a){var s,r,q,p,o=this,n=o.d
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
c4(a){var s,r=this,q=new A.eL(A.j(r).c.a(a))
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
bC(a){return J.ac(a)&1073741823},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
$ikv:1}
A.cr.prototype={
dg(){return new A.cr(this.$ti)},
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
A.T(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b]}}
A.fG.prototype={
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
gL(a){return this.gk(a)===0},
gb3(a){return this.gk(a)!==0},
gU(a){if(this.gk(a)===0)throw A.a(A.Y())
return this.h(a,0)},
gJ(a){if(this.gk(a)===0)throw A.a(A.Y())
return this.h(a,this.gk(a)-1)},
p(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.u(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.a(A.Q(a))}return!1},
S(a,b){var s,r
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
ar(a,b){this.eO(a,A.a9(a).i("k(r.E)").a(b),!1)},
eO(a,b,c){var s,r,q,p,o=this,n=A.a9(a)
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
if(e+s>r.gk(d))throw A.a(A.lF())
if(e<b)for(q=s-1;q>=0;--q)this.j(a,b+q,r.h(d,e+q))
else for(q=0;q<s;++q)this.j(a,b+q,r.h(d,e+q))},
bf(a,b,c,d){return this.al(a,b,c,d,0)},
b7(a,b){var s
A.a9(a).i("k(r.E)").a(b)
for(s=0;s<this.gk(a);++s)if(b.$1(this.h(a,s)))return s
return-1},
b8(a,b,c){var s,r=this
A.a9(a).i("r.E").a(c)
A.eX(b,"index",t.p)
s=r.gk(a)
A.cj(b,0,s,"index")
r.t(a,c)
if(b!==s){r.al(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n(a){return A.fx(a,"[","]")},
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
gO(){return this.gE().ac(0,new A.fJ(this),A.j(this).i("L<z.K,z.V>"))},
ar(a,b){var s,r,q,p,o,n=this,m=A.j(n)
m.i("k(z.K,z.V)").a(b)
s=A.c([],m.i("J<z.K>"))
for(r=n.gE(),r=r.gq(r),m=m.i("z.V");r.l();){q=r.gm()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.b.t(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.a7)(s),++o)n.I(0,s[o])},
F(a){return this.gE().p(0,a)},
gk(a){var s=this.gE()
return s.gk(s)},
gL(a){var s=this.gE()
return s.gL(s)},
gag(){return new A.dr(this,A.j(this).i("dr<z.K,z.V>"))},
n(a){return A.ky(this)},
$iw:1}
A.fJ.prototype={
$1(a){var s=this.a,r=A.j(s)
r.i("z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("z.V").a(s)
return new A.L(a,s,r.i("L<z.K,z.V>"))},
$S(){return A.j(this.a).i("L<z.K,z.V>(z.K)")}}
A.fK.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.l(a)
r.a=(r.a+=s)+": "
s=A.l(b)
r.a+=s},
$S:18}
A.cp.prototype={}
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
$iK:1}
A.ap.prototype={
j(a,b,c){var s=A.j(this)
s.i("ap.K").a(b)
s.i("ap.V").a(c)
throw A.a(A.M("Cannot modify unmodifiable map"))},
I(a,b){throw A.a(A.M("Cannot modify unmodifiable map"))}}
A.cg.prototype={
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
gO(){return this.a.gO()},
$iw:1}
A.b1.prototype={}
A.bf.prototype={
gL(a){return this.gk(this)===0},
a9(a,b){var s
for(s=J.F(A.j(this).i("f<1>").a(b));s.l();)this.t(0,s.gm())},
ha(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)this.I(0,a[r])},
fP(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a7)(a),++r)if(!this.p(0,a[r]))return!1
return!0},
ac(a,b,c){var s=A.j(this)
return new A.bC(this,s.a8(c).i("1(2)").a(b),s.i("@<1>").a8(c).i("bC<1,2>"))},
n(a){return A.fx(this,"{","}")},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.Y())
return s.gm()},
gJ(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.Y())
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
dV(a){var s,r,q,p=this,o=p.dg()
for(s=A.ht(p,p.r,A.j(p).c),r=s.$ti.c;s.l();){q=s.d
if(q==null)q=r.a(q)
if(a.p(0,q))o.t(0,q)}return o}}
A.cy.prototype={}
A.eJ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fj(b):s}},
gk(a){return this.b==null?this.c.a:this.aZ().length},
gL(a){return this.gk(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.ai(s,A.j(s).i("ai<1>"))}return new A.eK(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aC(s,A.j(s).i("aC<2>"))}return A.fL(r.aZ(),new A.ho(r),t.N,t.z)},
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
if(typeof p=="undefined"){p=A.hV(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.Q(o))}},
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
fj(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.hV(this.a[a])
return this.b[a]=s}}
A.ho.prototype={
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
A.hC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.hB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.c6.prototype={
gbQ(){return this.a},
e0(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=u.n,a1="Invalid base64 encoding length ",a2=a3.length
a5=A.be(a4,a5,a2)
s=$.ln()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.b(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.b(a3,k)
h=A.iY(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.b(a3,g)
f=A.iY(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.W("")
g=o}else g=o
g.a+=B.a.v(a3,p,q)
c=A.A(j)
g.a+=c
p=k
continue}}throw A.a(A.B("Invalid base64 data",a3,q))}if(o!=null){a2=B.a.v(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.lu(a3,m,a5,n,l,r)
else{b=B.d.bX(r-1,4)+1
if(b===1)throw A.a(A.B(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.a.aX(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.lu(a3,m,a5,n,l,a)
else{b=B.d.bX(a,4)
if(b===1)throw A.a(A.B(a1,a3,a5))
if(b>1)a3=B.a.aX(a3,a5,a5,b===2?"==":"=")}return a3},
aW(a){return this.e0(a,0,null)}}
A.dQ.prototype={
aF(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.hi(this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":u.n).fT(a,0,s,!0)
s.toString
return A.df(s,0,null)}}
A.hi.prototype={
fT(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.bp(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.oF(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.f7.prototype={
aF(a){var s,r,q,p
A.e(a)
s=A.be(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.hh()
q=r.fQ(a,0,s)
q.toString
p=r.a
if(p<-1)A.D(A.B("Missing padding character",a,s))
if(p>0)A.D(A.B("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.hh.prototype={
fQ(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.m1(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.oC(a,b,c,q)
r.a=A.oE(a,b,c,s,0,r.a)
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
aa(a,b){var s=A.pN(a,this.gfS().a)
return s},
ad(a,b){var s=A.oL(a,this.gbQ().b,null)
return s},
gbQ(){return B.cq},
gfS(){return B.cp}}
A.fC.prototype={}
A.fB.prototype={}
A.hq.prototype={
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
if(!o.eb(s)){q=A.lK(a,null,o.gdq())
throw A.a(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.c4(p)
q=A.lK(a,r,o.gdq())
throw A.a(q)}},
eb(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.cm.n(a)
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
if(s.gb3(a)){this.bV(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bV(s.h(a,r))}}q.a+="]"},
hh(a){var s,r,q,p,o,n,m=this,l={}
if(a.gL(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aT(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.an(0,new A.hr(l,r))
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
A.hr.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.b.j(s,r.a++,a)
B.b.j(s,r.a++,b)},
$S:18}
A.hp.prototype={
gdq(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ey.prototype={
ct(a){t.L.a(a)
return B.cI.aF(a)}}
A.h4.prototype={
aF(a){var s,r,q,p,o,n
A.e(a)
s=a.length
r=A.be(0,null,s)
if(r===0)return new Uint8Array(0)
q=r*3
p=new Uint8Array(q)
o=new A.hD(p)
if(o.eN(a,0,r)!==r){n=r-1
if(!(n>=0&&n<s))return A.b(a,n)
o.cp()}return new Uint8Array(p.subarray(0,A.mB(0,o.b,q)))}}
A.hD.prototype={
cp(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.U(q)
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
r.$flags&2&&A.U(r)
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
eN(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.b(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.b(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.U(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.b(a,m)
if(k.fL(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cp()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.U(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.U(s)
if(!(m<q))return A.b(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.b(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.b(s,m)
s[m]=n&63|128}}}return o}}
A.h3.prototype={
aF(a){return new A.hA(this.a).eD(t.L.a(a),0,null,!0)}}
A.hA.prototype={
eD(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.be(b,c,J.a6(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.pc(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.pb(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c6(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.pd(o)
l.b=0
throw A.a(A.B(m,a,p+l.c))}return n},
c6(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.bp(b+c,2)
r=q.c6(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c6(a,s,c,d)}return q.fR(a,b,c,d)},
fR(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.W(""),d=b+1,c=a.length
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
A.hl.prototype={
n(a){return this.bi()}}
A.R.prototype={}
A.c5.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dY(s)
return"Assertion failed"}}
A.dh.prototype={}
A.aZ.prototype={
gc9(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.l(p),n=s.gc9()+q+o
if(!s.a)return n
return n+s.gc8()+": "+A.dY(s.gcF())},
gcF(){return this.b}}
A.ci.prototype={
gcF(){return A.mA(this.b)},
gc9(){return"RangeError"},
gc8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.l(q):""
else if(q==null)s=": Not greater than or equal to "+A.l(r)
else if(q>r)s=": Not in inclusive range "+A.l(r)+".."+A.l(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.l(r)
return s}}
A.dZ.prototype={
gcF(){return A.T(this.b)},
gc9(){return"RangeError"},
gc8(){if(A.T(this.b)<0)return": index must not be negative"
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
$iay:1}
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
k=""}return g+l+B.a.v(e,i,j)+k+"\n"+B.a.aj(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.l(f)+")"):g},
$iay:1,
gdY(){return this.a}}
A.f.prototype={
ac(a,b,c){var s=A.j(this)
return A.fL(this,s.a8(c).i("1(f.E)").a(b),s.i("f.E"),c)},
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
S(a,b){var s
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
gb3(a){return!this.gL(this)},
ao(a,b){return A.on(this,b,A.j(this).i("f.E"))},
gU(a){var s=this.gq(this)
if(!s.l())throw A.a(A.Y())
return s.gm()},
gJ(a){var s,r=this.gq(this)
if(!r.l())throw A.a(A.Y())
do s=r.gm()
while(r.l())
return s},
bS(a,b){var s,r
A.j(this).i("k(f.E)").a(b)
for(s=this.gq(this);s.l();){r=s.gm()
if(b.$1(r))return r}throw A.a(A.Y())},
T(a,b){var s,r
A.ad(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.a(A.e_(b,b-r,this,null,"index"))},
n(a){return A.ob(this,"(",")")}}
A.L.prototype={
n(a){return"MapEntry("+A.l(this.a)+": "+A.l(this.b)+")"}}
A.bd.prototype={
gY(a){return A.v.prototype.gY.call(this,0)},
n(a){return"null"}}
A.v.prototype={$iv:1,
R(a,b){return this===b},
gY(a){return A.eh(this)},
n(a){return"Instance of '"+A.ei(this)+"'"},
gaM(a){return A.iV(this)},
toString(){return this.n(this)}}
A.W.prototype={
gk(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ios:1}
A.h2.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.e(b)
s=B.a.az(b,"=")
if(s===-1){if(b!=="")a.j(0,A.ak(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.a.v(b,0,s)
q=B.a.D(b,s+1)
p=this.a
a.j(0,A.ak(r,0,r.length,p,!0),A.ak(q,0,q.length,p,!0))}return a},
$S:40}
A.h1.prototype={
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
if(r!=null)s=s+":"+A.l(r)}else s=r
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
q=s.length===0?B.ct:A.kx(new A.H(A.c(s.split("/"),t.s),t.dO.a(A.qj()),t.do),t.N)
p.x!==$&&A.jY()
o=p.x=q}return o},
gY(a){var s,r=this,q=r.y
if(q===$){s=B.a.gY(r.gdD())
r.y!==$&&A.jY()
r.y=s
q=s}return q},
ge2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.m0(s==null?"":s)
r.z!==$&&A.jY()
q=r.z=new A.b1(s,t.dw)}return q},
ge3(){var s,r,q=this,p=q.Q
if(p===$){s=q.f
r=A.p5(s==null?"":s)
q.Q!==$&&A.jY()
q.Q=r
p=r}return p},
gaA(){return this.b},
gaH(){var s=this.c
if(s==null)return""
if(B.a.u(s,"[")&&!B.a.a4(s,"v",1))return B.a.v(s,1,s.length-1)
return s},
gbx(){var s=this.d
return s==null?A.mh(this.a):s},
gb4(){var s=this.f
return s==null?"":s},
gb1(){var s=this.r
return s==null?"":s},
h_(a){var s=this.a
if(a.length!==s.length)return!1
return A.pm(a,s,0)>=0},
e6(a){var s,r,q,p,o,n,m,l=this
a=A.kK(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.hy(q,a)
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
e8(a){return this.by(A.ew(a,0,null))},
by(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gak().length!==0)return a
else{s=h.a
if(a.gcB()){r=a.e6(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gdP())m=a.gbt()?a.gb4():h.f
else{l=A.pa(h,n)
if(l>0){k=B.a.v(n,0,l)
n=a.gcA()?k+A.bW(a.gaq()):k+A.bW(h.de(B.a.D(n,k.length),a.gaq()))}else if(a.gcA())n=A.bW(a.gaq())
else if(n.length===0)if(p==null)n=s.length===0?a.gaq():A.bW(a.gaq())
else n=A.bW("/"+a.gaq())
else{j=h.de(n,a.gaq())
r=s.length===0
if(!r||p!=null||B.a.u(n,"/"))n=A.bW(j)
else n=A.kM(j,!r||p!=null)}m=a.gbt()?a.gb4():null}}}i=a.gcC()?a.gb1():null
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
A.p3(s,!1)
q=A.kB(B.a.u(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
n(a){return this.gdD()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.k.b(b))if(p.a===b.gak())if(p.c!=null===b.gcB())if(p.b===b.gaA())if(p.gaH()===b.gaH())if(p.gbx()===b.gbx())if(p.e===b.gaq()){r=p.f
q=r==null
if(!q===b.gbt()){if(q)r=""
if(r===b.gb4()){r=p.r
q=r==null
if(!q===b.gcC()){s=q?"":r
s=s===b.gb1()}}}}return s},
$ieu:1,
gak(){return this.a},
gaq(){return this.e}}
A.hz.prototype={
$3(a,b,c){var s,r,q,p
if(a===c)return
s=this.a
r=this.b
if(b<0){q=A.ak(s,a,c,r,!0)
p=""}else{q=A.ak(s,a,b,r,!0)
p=A.ak(s,b+1,c,r,!0)}J.km(this.c.h6(q,A.qk()),p)},
$S:43}
A.h0.prototype={
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
return s==null?this.w=this.eB():s},
eB(){var s,r=this,q=r.b
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
if(r.gcD())return A.c0(B.a.v(r.a,r.d+1,r.e),null,null)
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gaq(){return B.a.v(this.a,this.e,this.f)},
gb4(){var s=this.f,r=this.r
return s<r?B.a.v(this.a,s+1,r):""},
gb1(){var s=this.r,r=this.a
return s<r.length?B.a.D(r,s+1):""},
ge2(){if(this.f>=this.r)return B.cu
return new A.b1(A.m0(this.gb4()),t.dw)},
ge3(){if(this.f>=this.r)return B.am
var s=A.ms(this.gb4())
s.e9(A.mZ())
return A.lA(s,t.N,t.a)},
da(a){var s=this.d+1
return s+a.length===this.e&&B.a.a4(this.a,a,s)},
hb(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.aO(B.a.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
e6(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.kK(a,0,a.length)
s=!(h.b===a.length&&B.a.u(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.v(h.a,h.b+3,q):""
o=h.gcD()?h.gbx():g
if(s)o=A.hy(o,a)
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
by(a){if(a instanceof A.aO)return this.fA(this,a)
return this.dE().by(a)},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
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
return new A.aO(B.a.v(a.a,0,r)+B.a.D(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.hb()}s=b.a
if(B.a.a4(s,"/",n)){m=a.e
l=A.ma(this)
k=l>0?l:m
o=k-n
return new A.aO(B.a.v(a.a,0,k)+B.a.D(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a4(s,"../",n))n+=3
o=j-n+1
return new A.aO(B.a.v(a.a,0,j)+"/"+B.a.D(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.ma(this)
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
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.n(0)},
dE(){var s=this,r=null,q=s.gak(),p=s.gaA(),o=s.c>0?s.gaH():r,n=s.gcD()?s.gbx():r,m=s.a,l=s.f,k=B.a.v(m,s.e,l),j=s.r
l=l<j?s.gb4():r
return A.dF(q,p,o,n,k,l,j<m.length?s.gb1():r)},
n(a){return this.a},
$ieu:1}
A.eF.prototype={}
A.dV.prototype={}
A.ce.prototype={
b2(a){var s,r
this.$ti.i("f<1>?").a(a)
for(s=a.gq(a),r=0;s.l();){r=r+J.ac(s.gm())&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cz.prototype={
b2(a){var s,r
this.$ti.i("cz.T?").a(a)
for(s=a.gq(a),r=0;s.l();)r=r+J.ac(s.gm())&2147483647
r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.bN.prototype={}
A.d5.prototype={
t(a,b){this.av(this.$ti.c.a(b))},
n(a){return A.fx(this,"{","}")},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
sk(a,b){var s,r,q,p,o=this
if(b<0)throw A.a(A.a5("Length "+b+" may not be negative."))
if(b>o.gk(0)&&!o.$ti.c.b(null))throw A.a(A.M("The length can only be increased when the element type is nullable, but the current element type is `"+A.b4(o.$ti.c).n(0)+"`."))
s=b-o.gk(0)
if(s>=0){if(o.a.length<=b)o.fi(b)
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
A.T(b)
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
av(a){var s,r,q,p,o=this,n=o.$ti
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
fi(a){var s=this,r=A.aT(A.ok(a+B.d.b0(a,1)),null,!1,s.$ti.i("1?"))
s.c=s.fM(r)
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
return A.lW()},
I(a,b){return A.lW()}}
A.f8.prototype={
fN(a){var s,r,q=t.d4
A.mS("absolute",A.c([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.au(a)>0&&!s.aV(a)
if(s)return a
s=A.n0()
r=A.c([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.mS("join",r)
return this.h0(new A.dl(r,t.eJ))},
h0(a){var s,r,q,p,o,n,m,l,k,j
t.cs.a(a)
for(s=a.$ti,r=s.i("k(f.E)").a(new A.f9()),q=a.gq(0),s=new A.bk(q,r,s.i("bk<f.E>")),r=this.a,p=!1,o=!1,n="";s.l();){m=q.gm()
if(r.aV(m)&&o){l=A.ed(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.a.v(k,0,r.bd(k,!0))
l.b=n
if(r.bv(n))B.b.j(l.e,0,r.gb5())
n=l.n(0)}else if(r.au(m)>0){o=!r.aV(m)
n=m}else{j=m.length
if(j!==0){if(0>=j)return A.b(m,0)
j=r.cs(m[0])}else j=!1
if(!j)if(p)n+=r.gb5()
n+=m}p=r.bv(m)}return n.charCodeAt(0)==0?n:n},
bg(a,b){var s=A.ed(b,this.a),r=s.d,q=A.t(r),p=q.i("q<1>")
r=A.o(new A.q(r,q.i("k(1)").a(new A.fa()),p),p.i("f.E"))
s.sh4(r)
r=s.b
if(r!=null)B.b.b8(s.d,0,r)
return s.d},
aW(a){var s
if(!this.f1(a))return a
s=A.ed(a,this.a)
s.cJ()
return s.n(0)},
f1(a){var s,r,q,p,o,n,m,l=this.a,k=l.au(a)
if(k!==0){if(l===$.f5())for(s=a.length,r=0;r<k;++r){if(!(r<s))return A.b(a,r)
if(a.charCodeAt(r)===47)return!0}q=k
p=47}else{q=0
p=null}for(s=a.length,r=q,o=null;r<s;++r,o=p,p=n){if(!(r>=0))return A.b(a,r)
n=a.charCodeAt(r)
if(l.aP(n)){if(l===$.f5()&&n===47)return!0
if(p!=null&&l.aP(p))return!0
if(p===46)m=o==null||o===46||l.aP(o)
else m=!1
if(m)return!0}}if(p==null)return!0
if(l.aP(p))return!0
if(p===46)l=o==null||l.aP(o)||o===46
else l=!1
if(l)return!0
return!1},
h9(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.au(a)
if(i<=0)return l.aW(a)
s=A.n0()
if(j.au(s)<=0&&j.au(a)>0)return l.aW(a)
if(j.au(a)<=0||j.aV(a))a=l.fN(a)
if(j.au(a)<=0&&j.au(s)>0)throw A.a(A.lO(k+a+'" from "'+s+'".'))
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
if(i)throw A.a(A.lO(k+a+'" from "'+s+'".'))
i=t.N
B.b.cE(q.d,0,A.aT(p,"..",!1,i))
B.b.j(q.e,0,"")
B.b.cE(q.e,1,A.aT(r.d.length,j.gb5(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&B.b.gJ(j)==="."){B.b.e4(q.d)
j=q.e
if(0>=j.length)return A.b(j,-1)
j.pop()
if(0>=j.length)return A.b(j,-1)
j.pop()
B.b.t(j,"")}q.b=""
q.e5()
return q.n(0)},
e1(a){var s,r,q=this,p=A.mK(a)
if(p.gak()==="file"&&q.a===$.dN())return p.n(0)
else if(p.gak()!=="file"&&p.gak()!==""&&q.a!==$.dN())return p.n(0)
s=q.aW(q.a.cK(A.mK(p)))
r=q.h9(s)
return q.bg(0,r).length>q.bg(0,s).length?s:r}}
A.f9.prototype={
$1(a){return A.e(a)!==""},
$S:0}
A.fa.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i8.prototype={
$1(a){A.bX(a)
return a==null?"null":'"'+a+'"'},
$S:36}
A.cd.prototype={
ed(a){var s,r=this.au(a)
if(r>0)return B.a.v(a,0,r)
if(this.aV(a)){if(0>=a.length)return A.b(a,0)
s=a[0]}else s=null
return s},
cL(a,b){return a===b}}
A.fM.prototype={
e5(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.gJ(s)===""))break
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
m.e=A.aT(l.length+1,s.gb5(),!0,t.N)
r=m.b
if(r==null||l.length===0||!s.bv(r))B.b.j(m.e,0,"")
r=m.b
if(r!=null&&s===$.f5())m.b=A.aG(r,"/","\\")
m.e5()},
n(a){var s,r,q,p,o,n=this.b
n=n!=null?n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.b(q,o)
n=n+q[o]+s[o]}n+=B.b.gJ(q)
return n.charCodeAt(0)==0?n:n},
sh4(a){this.d=t.a.a(a)}}
A.ee.prototype={
n(a){return"PathException: "+this.a},
$iay:1}
A.fY.prototype={
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
au(a){return this.bd(a,!1)},
aV(a){return!1},
cK(a){var s
if(a.gak()===""||a.gak()==="file"){s=a.gaq()
return A.ak(s,0,s.length,B.e,!1)}throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))},
gcI(){return"posix"},
gb5(){return"/"}}
A.ex.prototype={
cs(a){return B.a.p(a,"/")},
aP(a){return a===47},
bv(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.b(a,s)
if(a.charCodeAt(s)!==47)return!0
return B.a.aG(a,"://")&&this.au(a)===r},
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
p=A.n3(a,q+1)
return p==null?q:p}}return 0},
au(a){return this.bd(a,!1)},
aV(a){var s=a.length
if(s!==0){if(0>=s)return A.b(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
cK(a){return a.n(0)},
gcI(){return"url"},
gb5(){return"/"}}
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
if(!A.nc(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
au(a){return this.bd(a,!1)},
aV(a){return this.au(a)===1},
cK(a){var s,r
if(a.gak()!==""&&a.gak()!=="file")throw A.a(A.a1("Uri "+a.n(0)+" must have scheme 'file:'."))
s=a.gaq()
if(a.gaH()===""){if(s.length>=3&&B.a.u(s,"/")&&A.n3(s,1)!=null)s=B.a.e7(s,"/","")}else s="\\\\"+a.gaH()+s
r=A.aG(s,"/","\\")
return A.ak(r,0,r.length,B.e,!1)},
fO(a,b){var s
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
if(!this.fO(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gcI(){return"windows"},
gb5(){return"\\"}}
A.fW.prototype={
gk(a){return this.c.length},
gh2(){return this.b.length},
er(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.c,r=s.length,q=a.a,p=q.length,o=s.$flags|0,n=this.b,m=0;m<r;++m){if(!(m<p))return A.b(q,m)
l=q.charCodeAt(m)
o&2&&A.U(s)
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
if(a>=B.b.gJ(s))return s.length-1
if(r.eT(a)){s=r.d
s.toString
return s}return r.d=r.ex(a)-1},
eT(a){var s,r,q,p=this.d
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
A.cb.prototype={
gX(){return this.a.a},
ga6(){return this.a.be(this.b)},
gab(){return this.a.bW(this.b)},
cO(a,b){var s,r=this.b
if(r<0)throw A.a(A.a5("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a5("Offset "+r+u.s+s.gk(0)+"."))}},
bw(){var s=this.b
return A.a_(this.a,s,s)},
gK(){return this.b}}
A.bl.prototype={
gX(){return this.a.a},
gk(a){return this.c-this.b},
gC(){return A.V(this.a,this.b)},
gG(){return A.V(this.a,this.c)},
gai(){return A.df(B.L.c0(this.a.c,this.b,this.c),0,null)},
gaw(){var s=this,r=s.a,q=s.c,p=r.be(q)
if(r.bW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.df(B.L.c0(r.c,r.bz(p),r.bz(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.bz(p+1)
return A.df(B.L.c0(r.c,r.bz(r.be(s.b)),q),0,null)},
c1(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.a(A.a1("End "+r+" must come after start "+q+"."))
else{s=this.a
if(r>s.c.length)throw A.a(A.a5("End "+r+u.s+s.gk(0)+"."))
else if(q<0)throw A.a(A.a5("Start may not be negative, was "+q+"."))}},
aC(a,b){var s
t.I.a(b)
if(!(b instanceof A.bl))return this.en(0,b)
s=B.d.aC(this.b,b.b)
return s===0?B.d.aC(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.bl))return s.em(0,b)
return s.b===b.b&&s.c===b.c&&J.u(s.a.a,b.a.a)},
gY(a){return A.eb(this.b,this.c,this.a.a,B.n)},
ap(a,b){var s,r=this,q=r.a
if(!J.u(q.a,b.a.a))throw A.a(A.a1('Source URLs "'+A.l(r.gX())+'" and  "'+A.l(b.gX())+"\" don't match."))
s=Math.min(r.b,b.b)
return A.a_(q,s,Math.max(r.c,b.c))},
$io3:1,
$ibh:1}
A.fb.prototype={
fY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a.dL(B.b.gU(a0).c)
s=a.e
r=A.aT(s,null,!1,t.gS)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a0.length;++o){n=a0[o]
if(o>0){m=a0[o-1]
l=n.c
if(!J.u(m.c,l)){a.bM("\u2575")
q.a+="\n"
a.dL(l)}else if(m.b+1!==n.b){a.fK("...")
q.a+="\n"}}for(l=n.d,k=A.t(l).i("d7<1>"),j=new A.d7(l,k),j=new A.a2(j,j.gk(0),k.i("a2<y.E>")),k=k.i("y.E"),i=n.b,h=n.a;j.l();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gC().ga6()!==f.gG().ga6()&&f.gC().ga6()===i&&a.eV(B.a.v(h,0,f.gC().gab()))){e=B.b.az(r,null)
if(e<0)A.D(A.a1(A.l(r)+" contains no null elements."))
B.b.j(r,e,g)}}a.fJ(i)
q.a+=" "
a.fI(n,r)
if(s)q.a+=" "
d=B.b.b7(l,new A.fw())
if(d===-1)c=null
else{if(!(d>=0&&d<l.length))return A.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gC().ga6()===i?j.gC().gab():0
a.fG(h,g,j.gG().ga6()===i?j.gG().gab():h.length,p)}else a.bO(h)
q.a+="\n"
if(k)a.fH(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.bM("\u2575")
a0=q.a
return a0.charCodeAt(0)==0?a0:a0},
dL(a){var s,r,q=this
if(!q.f||!t.k.b(a))q.bM("\u2577")
else{q.bM("\u250c")
q.aB(new A.fj(q),"\x1b[34m",t.n)
s=q.r
r=" "+$.lp().e1(a)
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
g=i?null:j.a.gG().ga6()
if(s&&j===c){f.aB(new A.fq(f,h,a),r,p)
l=!0}else if(l)f.aB(new A.fr(f,j),r,p)
else if(i)if(e.a)f.aB(new A.fs(f),e.b,m)
else n.a+=" "
else f.aB(new A.ft(e,f,c,h,a,j,g),o,p)}},
fI(a,b){return this.bL(a,b,null)},
fG(a,b,c,d){var s=this
s.bO(B.a.v(a,0,b))
s.aB(new A.fk(s,a,b,c),d,t.n)
s.bO(B.a.v(a,c,a.length))},
fH(a,b,c){var s,r,q,p=this
t.E.a(c)
s=p.b
r=b.a
if(r.gC().ga6()===r.gG().ga6()){p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
if(c.length!==0)r.a+=" "
p.dM(b,c,p.aB(new A.fl(p,a,b),s,t.p))}else{q=a.b
if(r.gC().ga6()===q){if(B.b.p(c,b))return
A.rn(c,b,t.C)
p.cq()
r=p.r
r.a+=" "
p.bL(a,c,b)
p.aB(new A.fm(p,a,b),s,t.n)
r.a+="\n"}else if(r.gG().ga6()===q){r=r.gG().gab()
if(r===a.a.length){A.nk(c,b,t.C)
return}p.cq()
p.r.a+=" "
p.bL(a,c,b)
p.dM(b,c,p.aB(new A.fn(p,!1,a,b),s,t.p))
A.nk(c,b,t.C)}}},
dK(a,b,c){var s=c?0:1,r=this.r
s=B.a.aj("\u2500",1+b+this.c5(B.a.v(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
fF(a,b){return this.dK(a,b,!0)},
dM(a,b,c){t.E.a(b)
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
this.aB(new A.fu(s,this,a),"\x1b[34m",t.b)},
bM(a){return this.bN(a,null,null)},
fK(a){return this.bN(null,null,a)},
fJ(a){return this.bN(null,a,null)},
cq(){return this.bN(null,null,null)},
c5(a){var s,r,q,p
for(s=new A.aH(a),r=t.V,s=new A.a2(s,s.gk(0),r.i("a2<r.E>")),r=r.i("r.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
eV(a){var s,r,q
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
A.fv.prototype={
$0(){return this.a},
$S:71}
A.fd.prototype={
$1(a){var s=t.A.a(a).d,r=A.t(s)
return new A.q(s,r.i("k(1)").a(new A.fc()),r.i("q<1>")).gk(0)},
$S:65}
A.fc.prototype={
$1(a){var s=t.C.a(a).a
return s.gC().ga6()!==s.gG().ga6()},
$S:10}
A.fe.prototype={
$1(a){return t.A.a(a).c},
$S:34}
A.fg.prototype={
$1(a){var s=t.C.a(a).a.gX()
return s==null?new A.v():s},
$S:35}
A.fh.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aC(0,s.a(b).a)},
$S:39}
A.fi.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.aS.a(a0)
s=a0.a
r=a0.b
q=A.c([],t.ef)
for(p=J.a3(r),o=p.gq(r),n=t.r;o.l();){m=o.gm().a
l=m.gaw()
k=A.iQ(l,m.gai(),m.gC().gab())
k.toString
j=B.a.bq("\n",B.a.v(l,0,k)).gk(0)
i=m.gC().ga6()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.b.gJ(q).b)B.b.t(q,new A.aE(g,i,s,A.c([],n)));++i}}f=A.c([],n)
for(o=q.length,n=t.as,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.a7)(q),++h){g=q[h]
m=n.a(new A.ff(g))
e&1&&A.U(f,16)
B.b.dt(f,m,!0)
c=f.length
for(m=p.ao(r,d),k=m.$ti,m=new A.a2(m,m.gk(0),k.i("a2<y.E>")),b=g.b,k=k.i("y.E");m.l();){a=m.d
if(a==null)a=k.a(a)
if(a.a.gC().ga6()>b)break
B.b.t(f,a)}d+=f.length-c
B.b.a9(g.d,f)}return q},
$S:57}
A.ff.prototype={
$1(a){return t.C.a(a).a.gG().ga6()<this.a.b},
$S:10}
A.fw.prototype={
$1(a){t.C.a(a)
return!0},
$S:10}
A.fj.prototype={
$0(){this.a.r.a+=B.a.aj("\u2500",2)+">"
return null},
$S:8}
A.fq.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:5}
A.fr.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:5}
A.fs.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:8}
A.ft.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aB(new A.fo(p,s),p.b,t.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gG().gab()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aB(new A.fp(r,o),p.b,t.b)}}},
$S:5}
A.fo.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:5}
A.fp.prototype={
$0(){this.a.r.a+=this.b},
$S:5}
A.fk.prototype={
$0(){var s=this
return s.a.bO(B.a.v(s.b,s.c,s.d))},
$S:8}
A.fl.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gC().gab(),l=n.gG().gab()
n=this.b.a
s=q.c5(B.a.v(n,0,m))
r=q.c5(B.a.v(n,m,l))
m+=s*3
n=(p.a+=B.a.aj(" ",m))+B.a.aj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:17}
A.fm.prototype={
$0(){return this.a.fF(this.b,this.c.a.gC().gab())},
$S:8}
A.fn.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aj("\u2500",3)
else r.dK(s.c,Math.max(s.d.a.gG().gab()-1,0),!1)
return q.a.length-p.length},
$S:17}
A.fu.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.h3(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:5}
A.ae.prototype={
n(a){var s=this.a
s="primary "+(""+s.gC().ga6()+":"+s.gC().gab()+"-"+s.gG().ga6()+":"+s.gG().gab())
return s.charCodeAt(0)==0?s:s}}
A.hm.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.q.b(o)&&A.iQ(o.gaw(),o.gai(),o.gC().gab())!=null)){s=A.bJ(o.gC().gK(),0,0,o.gX())
r=o.gG().gK()
q=o.gX()
p=A.qp(o.gai(),10)
o=A.fX(s,A.bJ(r,A.m4(o.gai()),p,q),o.gai(),o.gai())}return A.oH(A.oJ(A.oI(o)))},
$S:38}
A.aE.prototype={
n(a){return""+this.b+': "'+this.a+'" ('+B.b.V(this.d,", ")+")"}}
A.bI.prototype={
cu(a){var s=this.a
if(!J.u(s,a.gX()))throw A.a(A.a1('Source URLs "'+A.l(s)+'" and "'+A.l(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gK())},
aC(a,b){var s
t.F.a(b)
s=this.a
if(!J.u(s,b.gX()))throw A.a(A.a1('Source URLs "'+A.l(s)+'" and "'+A.l(b.gX())+"\" don't match."))
return this.b-b.gK()},
R(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a,b.gX())&&this.b===b.gK()},
gY(a){var s=this.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=this,r=A.iV(s).n(0),q=s.a
return"<"+r+": "+s.b+" "+(A.l(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
gX(){return this.a},
gK(){return this.b},
ga6(){return this.c},
gab(){return this.d}}
A.el.prototype={
cu(a){if(!J.u(this.a.a,a.gX()))throw A.a(A.a1('Source URLs "'+A.l(this.gX())+'" and "'+A.l(a.gX())+"\" don't match."))
return Math.abs(this.b-a.gK())},
aC(a,b){t.F.a(b)
if(!J.u(this.a.a,b.gX()))throw A.a(A.a1('Source URLs "'+A.l(this.gX())+'" and "'+A.l(b.gX())+"\" don't match."))
return this.b-b.gK()},
R(a,b){if(b==null)return!1
return t.F.b(b)&&J.u(this.a.a,b.gX())&&this.b===b.gK()},
gY(a){var s=this.a.a
s=s==null?null:s.gY(s)
if(s==null)s=0
return s+this.b},
n(a){var s=A.iV(this).n(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.l(p==null?"unknown source":p)+":"+(q.be(r)+1)+":"+(q.bW(r)+1))+">"},
$ibI:1}
A.dc.prototype={
cP(a,b,c){var s,r=this.b,q=this.a
if(!J.u(r.gX(),q.gX()))throw A.a(A.a1('Source URLs "'+A.l(q.gX())+'" and  "'+A.l(r.gX())+"\" don't match."))
else if(r.gK()<q.gK())throw A.a(A.a1("End "+r.n(0)+" must come after start "+q.n(0)+"."))
else{s=this.c
if(s.length!==q.cu(r))throw A.a(A.a1('Text "'+s+'" must be '+q.cu(r)+" characters long."))}},
gC(){return this.a},
gG(){return this.b},
gai(){return this.c}}
A.em.prototype={
gdY(){return this.a},
n(a){return"Error on "+this.b.e_(this.a,null)},
$iay:1}
A.en.prototype={$ii:1}
A.cl.prototype={
gX(){return this.gC().gX()},
gk(a){return this.gG().gK()-this.gC().gK()},
aC(a,b){var s
t.I.a(b)
s=this.gC().aC(0,b.gC())
return s===0?this.gG().aC(0,b.gG()):s},
e_(a,b){var s,r,q,p=this,o="line "+(p.gC().ga6()+1)+", column "+(p.gC().gab()+1)
if(p.gX()!=null){s=p.gX()
r=$.lp()
s.toString
s=o+(" of "+r.e1(s))
o=s}o+=": "+a
q=p.fZ(b)
if(q.length!==0)o=o+"\n"+q
return o.charCodeAt(0)==0?o:o},
dZ(a){return this.e_(a,null)},
fZ(a){var s=this
if(!t.q.b(s)&&s.gk(s)===0)return""
return A.o4(s,a).fY()},
R(a,b){if(b==null)return!1
return b instanceof A.cl&&this.gC().R(0,b.gC())&&this.gG().R(0,b.gG())},
gY(a){return A.eb(this.gC(),this.gG(),B.n,B.n)},
n(a){var s=this
return"<"+A.iV(s).n(0)+": from "+s.gC().n(0)+" to "+s.gG().n(0)+' "'+s.gai()+'">'},
$ick:1}
A.bh.prototype={
gaw(){return this.d}}
A.dW.prototype={
a0(a){var s,r=this
if(a!==10)s=a===13&&r.W()!==10
else s=!0
if(s){++r.as
r.at=0}else{s=r.at
r.at=s+(a>=65536&&a<=1114111?2:1)}},
bA(a){var s,r,q,p,o=this
if(!o.ep(a))return!1
s=o.gcH()
r=s.c
q=o.f2(r)
s=o.as
p=q.length
o.as=s+p
s=r.length
if(p===0)o.at+=s
else o.at=s-B.b.gJ(q).gG()
return!0},
f2(a){var s=$.nI().bq(0,a),r=A.o(s,A.j(s).i("f.E"))
if(this.P(-1)===13&&this.W()===10){if(0<0||0>=r.length)return A.b(r,-1)
r.pop()}return r}}
A.ao.prototype={$ioe:1}
A.de.prototype={}
A.eo.prototype={
gaD(){var s=A.V(this.f,this.c),r=s.b
return A.a_(s.a,r,r)},
c_(a,b){var s=b==null?this.c:b.b
return this.f.bZ(a.b,s)},
am(a){return this.c_(a,null)},
aI(a){var s,r,q=this
if(!q.eo(a))return!1
s=q.c
r=q.gcH()
q.f.bZ(s,r.a+r.c.length)
return!0},
cz(a,b,c){var s,r,q=this,p=q.b
A.rJ(p,null,c,b)
s=c==null&&b==null?q.gcH():null
if(c==null)c=s==null?q.c:s.a
if(b==null)if(s==null)b=0
else{r=s.a
b=r+s.c.length-r}throw A.a(A.or(a,q.f.bZ(c,c+b),p))},
cw(a,b){return this.cz(a,b,null)},
fV(a){return this.cz(a,null,null)}}
A.eq.prototype={
gcH(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
h7(){var s,r=this,q=r.b,p=q.length
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
s=A.aG(a,"\\","\\\\")
r='"'+A.aG(s,'"','\\"')+'"'
this.cX(r)},
aI(a){var s=this,r=B.a.bu(a,s.b,s.c)
s.d=r
s.e=s.c
return r!=null},
D(a,b){var s=this.c
return B.a.v(this.b,b,s)},
cX(a){this.cz("expected "+a+".",0,this.c)}}
A.hk.prototype={
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
if(r.b(a)&&r.b(b)){r=j.eW(a,b)
return r}else{r=t.f
if(r.b(a)&&r.b(b)){r=j.f_(a,b)
return r}else if(typeof a=="number"&&typeof b=="number"){r=j.f3(a,b)
return r}else{r=J.u(a,b)
return r}}}finally{if(0>=s.length)return A.b(s,-1)
s.pop()
if(0>=q.length)return A.b(q,-1)
q.pop()}},
eW(a,b){var s,r=J.C(a),q=J.C(b)
if(r.gk(a)!==q.gk(b))return!1
for(s=0;s<r.gk(a);++s)if(!this.cv(r.h(a,s),q.h(b,s)))return!1
return!0},
f_(a,b){var s,r
if(a.gk(a)!==b.gk(b))return!1
for(s=a.gE(),s=s.gq(s);s.l();){r=s.gm()
if(!b.F(r))return!1
if(!this.cv(a.h(0,r),b.h(0,r)))return!1}return!0},
f3(a,b){if(isNaN(a)&&isNaN(b))return!0
return a===b}}
A.iC.prototype={
$1(a){var s,r,q,p=this
if(!p.a.t(0,a))return-1
try{if(t.f.b(a)){s=B.aQ
r=t.X
q=s.b2(a.gE().ac(0,p,r))
r=s.b2(a.gag().ac(0,p,r))
return q^r}else if(t.R.b(a)){r=B.aH.b2(J.aR(a,p,t.X))
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
A.c8.prototype={
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
if(s.gbP()!=null)r+=" &"+A.l(s.gbP())
if(s.gbU()!=null)r+=" "+A.l(s.gbU())
return r.charCodeAt(0)==0?r:r},
$iaa:1}
A.ag.prototype={
gB(){return B.aa},
n(a){return this.eq(0)+' "'+this.d+'"'},
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
A.fI.prototype={
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
A:{if(B.a9===p){s=q.eX(t.a6.a(a))
break A}if(B.aa===p){t.fy.a(a)
s=a.c
if(s==="!")r=new A.an(a.d,a.e,a.a)
else if(s!=null)r=q.f5(a)
else{r=q.fE(a)
if(r==null)r=new A.an(a.d,a.e,a.a)}q.cj(a.b,r)
s=r
break A}if(B.ab===p){s=q.eZ(t.fP.a(a))
break A}if(B.ac===p){s=q.eY(t.fY.a(a))
break A}s=A.D(A.bi("Unreachable"))}return s},
cj(a,b){if(a==null)return
this.b.j(0,a,b)},
eX(a){var s=a.b,r=this.b.h(0,s)
if(r!=null){if(this.c.p(0,s))throw A.a(A.G("Self-referential collections are not supported.",a.a))
return r}throw A.a(A.G("Undefined alias.",a.a))},
eZ(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c
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
while(r.gB()!==B.y){J.km(s,j.bH(r))
r=k.aQ()}}finally{o=l
n=null
if(o!=null){n=o
j.c.I(0,n)}}m.a=i.ap(0,r.gA())
return m},
eY(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.c
if(g!=="!"&&g!=null&&g!=="tag:yaml.org,2002:map")throw A.a(A.G("Invalid tag for mapping.",a.a))
s=A.fF(A.qB(),A.qC(),t.z,t.T)
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
throw A.a(i)}J.nL(s,o,n)
r=i.aQ()}}finally{m=j
l=null
if(m!=null){l=m
h.c.I(0,l)}}k.a=g.ap(0,r.gA())
return k},
f5(a){var s,r=this,q=a.c
switch(q){case"tag:yaml.org,2002:null":s=r.dm(a)
if(s!=null)return s
throw A.a(A.G("Invalid null scalar.",a.a))
case"tag:yaml.org,2002:bool":s=r.cf(a)
if(s!=null)return s
throw A.a(A.G("Invalid bool scalar.",a.a))
case"tag:yaml.org,2002:int":s=r.ff(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid int scalar.",a.a))
case"tag:yaml.org,2002:float":s=r.fg(a,!1)
if(s!=null)return s
throw A.a(A.G("Invalid float scalar.",a.a))
case"tag:yaml.org,2002:str":return new A.an(a.d,a.e,a.a)
default:throw A.a(A.G("Undefined tag: "+A.l(q)+".",a.a))}},
fE(a){var s,r=this,q=null,p=a.d,o=p.length
if(o===0)return new A.an(q,a.e,a.a)
if(0>=o)return A.b(p,0)
s=p.charCodeAt(0)
A:{if(46===s||43===s||45===s){p=r.dn(a)
break A}if(110===s||78===s){p=o===4?r.dm(a):q
break A}if(116===s||84===s){p=o===4?r.cf(a):q
break A}if(102===s||70===s){p=o===5?r.cf(a):q
break A}if(126===s){p=o===1?new A.an(q,a.e,a.a):q
break A}p=s>=48&&s<=57?r.dn(a):q
break A}return p},
dm(a){var s,r=a.d
A:{if(""===r||"null"===r||"Null"===r||"NULL"===r||"~"===r){s=new A.an(null,a.e,a.a)
break A}s=null
break A}return s},
cf(a){var s,r=a.d
A:{if("true"===r||"True"===r||"TRUE"===r){s=new A.an(!0,a.e,a.a)
break A}if("false"===r||"False"===r||"FALSE"===r){s=new A.an(!1,a.e,a.a)
break A}s=null
break A}return s},
cg(a,b,c){var s=this.fh(a.d,b,c)
return s==null?null:new A.an(s,a.e,a.a)},
dn(a){return this.cg(a,!0,!0)},
ff(a,b){return this.cg(a,b,!0)},
fg(a,b){return this.cg(a,!0,b)},
fh(a,b,c){var s,r,q,p,o,n,m=null,l=a.length
if(0>=l)return A.b(a,0)
s=a.charCodeAt(0)
if(c&&l===1){r=s-48
return r>=0&&r<=9?r:m}if(1>=l)return A.b(a,1)
q=a.charCodeAt(1)
if(c&&s===48){if(q===120)return A.aU(a,m)
if(q===111)return A.aU(B.a.D(a,2),8)}if(!(s>=48&&s<=57))p=(s===43||s===45)&&q>=48&&q<=57
else p=!0
if(p){o=c?A.aU(a,10):m
return b?o==null?A.lR(a):o:o}if(!b)return m
p=s===46
if(!(p&&q>=48&&q<=57))n=(s===45||s===43)&&q===46
else n=!0
if(n){if(l===5)switch(a){case"+.inf":case"+.Inf":case"+.INF":return 1/0
case"-.inf":case"-.Inf":case"-.INF":return-1/0}return A.lR(a)}if(l===4&&p)switch(a){case".inf":case".Inf":case".INF":return 1/0
case".nan":case".NaN":case".NAN":return 0/0}return m}}
A.fN.prototype={
aQ(){var s,r,q,p
try{if(this.c===B.a0){q=A.bi("No more events.")
throw A.a(q)}s=this.fC()
return s}catch(p){q=A.c4(p)
if(q instanceof A.de){r=q
throw A.a(A.G(r.a,r.b))}else throw p}},
fC(){var s,r,q,p=this
switch(p.c){case B.aC:s=p.a.Z()
p.c=B.a_
return new A.aa(B.aS,s.gA())
case B.a_:return p.f8()
case B.ay:return p.f6()
case B.Z:return p.f7()
case B.aw:return p.bk(!0)
case B.cK:return p.bl(!0,!0)
case B.cJ:return p.b_()
case B.ax:p.a.Z()
return p.di()
case B.F:return p.di()
case B.H:return p.fe()
case B.av:p.a.Z()
return p.dh()
case B.D:return p.dh()
case B.E:return p.f4()
case B.aB:return p.dl(!0)
case B.a2:return p.fb()
case B.aD:return p.fc()
case B.X:return p.fd()
case B.Y:p.c=B.a2
r=p.a.a1().gA()
r=A.V(r.a,r.b)
q=r.b
return new A.aa(B.z,A.a_(r.a,q,q))
case B.aA:return p.dj(!0)
case B.G:return p.f9()
case B.a1:return p.fa()
case B.az:return p.dk(!0)
default:throw A.a(A.bi("Unreachable"))}},
f8(){var s,r,q,p=this,o=p.a,n=o.a1()
n.toString
for(s=n;s.gB()===B.S;s=n){o.Z()
n=o.a1()
n.toString}if(s.gB()!==B.P&&s.gB()!==B.Q&&s.gB()!==B.R&&s.gB()!==B.w){p.dr()
B.b.t(p.b,B.Z)
p.c=B.aw
o=s.gA()
o=A.V(o.a,o.b)
n=o.b
return A.lD(A.a_(o.a,n,n),!0,null,null)}if(s.gB()===B.w){p.c=B.a0
o.Z()
return new A.aa(B.a8,s.gA())}r=s.gA()
q=p.dr()
s=o.a1()
if(s.gB()!==B.R)throw A.a(A.G("Expected document start.",s.gA()))
B.b.t(p.b,B.Z)
p.c=B.ay
o.Z()
return A.lD(r.ap(0,s.gA()),!1,q.b,q.a)},
f6(){var s,r,q=this,p=q.a.a1()
switch(p.gB().a){case 2:case 3:case 4:case 5:case 1:s=q.b
if(0>=s.length)return A.b(s,-1)
q.c=s.pop()
s=p.gA()
s=A.V(s.a,s.b)
r=s.b
return new A.ag(A.a_(s.a,r,r),null,null,"",B.h)
default:return q.bk(!0)}},
f7(){var s,r,q
this.d.br(0)
this.c=B.a_
s=this.a
r=s.a1()
if(r.gB()===B.S){s.Z()
return new A.c8(r.gA(),!1)}else{s=r.gA()
s=A.V(s.a,s.b)
q=s.b
return new A.c8(A.a_(s.a,q,q),!0)}},
bl(a,b){var s,r,q,p,o,n=this,m={},l=n.a,k=l.a1()
k.toString
if(k instanceof A.cH){l.Z()
m=n.b
if(0>=m.length)return A.b(m,-1)
n.c=m.pop()
return new A.cG(k.a,k.b)}m.a=m.b=null
s=k.gA()
s=A.V(s.a,s.b)
r=s.b
m.c=A.a_(s.a,r,r)
r=new A.fO(m,n)
s=new A.fP(m,n)
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
di(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()===B.u){s=o.gA()
r=A.V(s.a,s.b)
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
fe(){var s,r,q=this,p=q.a,o=p.a1()
if(o.gB()!==B.u){p=q.b
if(0>=p.length)return A.b(p,-1)
q.c=p.pop()
p=o.gA()
p=A.V(p.a,p.b)
s=p.b
return new A.aa(B.y,A.a_(p.a,s,s))}s=o.gA()
r=A.V(s.a,s.b)
p.Z()
o=p.a1()
if(o.gB()===B.u||o.gB()===B.k||o.gB()===B.l||o.gB()===B.p){q.c=B.H
p=r.b
return new A.ag(A.a_(r.a,p,p),null,null,"",B.h)}else{B.b.t(q.b,B.H)
return q.bk(!0)}},
dh(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()===B.k){s=n.gA()
r=A.V(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.E
o=r.b
return new A.ag(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.E)
return q.bl(!0,!0)}}if(n.gB()===B.l){q.c=B.E
o=n.gA()
o=A.V(o.a,o.b)
s=o.b
return new A.ag(A.a_(o.a,s,s),p,p,"",B.h)}if(n.gB()===B.p){o.Z()
o=q.b
if(0>=o.length)return A.b(o,-1)
q.c=o.pop()
return new A.aa(B.z,n.gA())}throw A.a(A.G("Expected a key while parsing a block mapping.",n.gA().gC().bw()))},
f4(){var s,r,q=this,p=null,o=q.a,n=o.a1()
if(n.gB()!==B.l){q.c=B.D
o=n.gA()
o=A.V(o.a,o.b)
s=o.b
return new A.ag(A.a_(o.a,s,s),p,p,"",B.h)}s=n.gA()
r=A.V(s.a,s.b)
o.Z()
n=o.a1()
if(n.gB()===B.k||n.gB()===B.l||n.gB()===B.p){q.c=B.D
o=r.b
return new A.ag(A.a_(r.a,o,o),p,p,"",B.h)}else{B.b.t(q.b,B.D)
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
return new A.aa(B.y,r.gA())},
fb(){return this.dl(!1)},
fc(){var s,r,q=this,p=q.a.a1()
if(p.gB()===B.l||p.gB()===B.o||p.gB()===B.r){s=p.gA()
r=A.V(s.a,s.b)
q.c=B.X
s=r.b
return new A.ag(A.a_(r.a,s,s),null,null,"",B.h)}else{B.b.t(q.b,B.X)
return q.b_()}},
fd(){var s,r=this,q=r.a,p=q.a1()
if(p.gB()===B.l){q.Z()
p=q.a1()
if(p.gB()!==B.o&&p.gB()!==B.r){B.b.t(r.b,B.Y)
return r.b_()}}r.c=B.Y
q=p.gA()
q=A.V(q.a,q.b)
s=q.b
return new A.ag(A.a_(q.a,s,s),null,null,"",B.h)},
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
s=A.V(s.a,s.b)
q=s.b
return new A.ag(A.a_(s.a,q,q),null,null,"",B.h)}}else if(r.gB()!==B.t){B.b.t(p.b,B.az)
return p.b_()}}s.Z()
s=p.b
if(0>=s.length)return A.b(s,-1)
p.c=s.pop()
return new A.aa(B.z,r.gA())},
f9(){return this.dj(!1)},
dk(a){var s,r=this,q=null,p=r.a,o=p.a1()
o.toString
if(a){r.c=B.G
p=o.gA()
p=A.V(p.a,p.b)
o=p.b
return new A.ag(A.a_(p.a,o,o),q,q,"",B.h)}if(o.gB()===B.l){p.Z()
s=p.a1()
if(s.gB()!==B.o&&s.gB()!==B.t){B.b.t(r.b,B.G)
return r.b_()}}else s=o
r.c=B.G
p=s.gA()
p=A.V(p.a,p.b)
o=p.b
return new A.ag(A.a_(p.a,o,o),q,q,"",B.h)},
fa(){return this.dk(!1)},
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
if(p>2)$.kl().$2("Warning: this parser only supports YAML 1.1 and 1.2.",r.a)}q=new A.h5(l,p)}else if(r instanceof A.dg){o=new A.bM(r.b,r.c)
n.ev(o,r.a)
B.b.t(s,o)}m.Z()
l=m.a1()
l.toString
r=l}m=r.gA()
m=A.V(m.a,m.b)
l=m.b
n.c2(new A.bM("!","!"),A.a_(m.a,l,l),!0)
l=r.gA()
l=A.V(l.a,l.b)
m=l.b
n.c2(new A.bM("!!","tag:yaml.org,2002:"),A.a_(l.a,m,m),!0)
return new A.b2(q,s)},
c2(a,b,c){var s=this.d,r=a.a
if(s.F(r)){if(c)return
throw A.a(A.G("Duplicate %TAG directive.",b))}s.j(0,r,a)},
ev(a,b){return this.c2(a,b,!1)}}
A.fO.prototype={
$1(a){var s=this.a
s.b=a.b
s.c=s.c.ap(0,a.a)
s=this.b.a
s.Z()
s=s.a1()
s.toString
return s},
$S:27}
A.fP.prototype={
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
A.fS.prototype={
gdc(){var s,r=this.c.W()
if(r==null)return!1
switch(r){case 45:case 59:case 47:case 58:case 64:case 38:case 61:case 43:case 36:case 46:case 126:case 63:case 42:case 39:case 40:case 41:case 37:return!0
default:s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=122))s=r>=65&&r<=90
return s}},
geQ(){if(!this.gd8())return!1
switch(this.c.W()){case 44:case 91:case 93:case 123:case 125:return!1
default:return!0}},
gd7(){var s=this.c.W()
return s!=null&&s>=48&&s<=57},
geS(){var s,r=this.c.W()
if(r==null)return!1
s=!0
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))s=r>=65&&r<=70
return s},
geU(){var s,r=this.c.W()
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
if(!r.w)r.d3()
s=r.f
return s.gU(s)},
d3(){var s,r,q=this
for(s=q.f,r=q.z;;){if(s.gk(0)!==0){q.dC()
if(s.gk(0)===0)A.D(A.Y())
if(s.h(0,s.gk(0)-1).gB()===B.w)break
if(!B.b.S(r,new A.fT(q)))break}q.eL()}q.w=!0},
eL(){var s,r,q,p,o,n,m,l=this
if(!l.d){l.d=!0
s=l.f
r=l.c
r=A.V(r.f,r.c)
q=r.b
s.av(s.$ti.c.a(new A.S(B.cA,A.a_(r.a,q,q))))
return}l.fw()
l.dC()
s=l.c
l.bK(s.at)
if(s.c===s.b.length){l.bK(-1)
l.aT()
l.y=!1
r=l.f
s=A.V(s.f,s.c)
q=s.b
r.av(r.$ti.c.a(new A.S(B.w,A.a_(s.a,q,q))))
return}if(s.at===0){if(s.W()===37){l.bK(-1)
l.aT()
l.y=!1
p=l.fp()
if(p!=null){s=l.f
s.av(s.$ti.c.a(p))}return}if(l.bG(3)){if(s.aI("---")){l.d_(B.R)
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
case 38:l.eI()
return
case 33:l.bn()
l.y=!1
r=l.f
q=s.c
if(s.P(1)===60){s.a0(s.a_())
s.a0(s.a_())
o=l.dz()
s.bR(">")
n=""}else{n=l.fu()
if(n.length>1&&B.a.u(n,"!")&&B.a.aG(n,"!"))o=l.fv(!1)
else{o=l.cl(!1,n)
if(o.length===0){n=null
o="!"}else n="!"}}r.av(r.$ti.c.a(new A.bw(s.am(new A.ao(q)),n,o)))
return
case 39:l.d2(!0)
return
case 34:l.eK()
return
case 124:if(l.z.length!==1)l.bF()
l.cZ(!0)
return
case 62:if(l.z.length!==1)l.bF()
l.eJ()
return
case 37:case 64:case 96:l.bF()
break
case 45:if(l.bj(1))l.bD()
else{if(l.z.length===1){if(!l.y)A.D(A.G("Block sequence entries are not allowed here.",s.gaD()))
l.ck(s.at,B.T,A.V(s.f,s.c))}l.aT()
l.y=!0
l.aY(B.u)}return
case 63:if(l.bj(1))l.bD()
else{r=l.z
if(r.length===1){if(!l.y)A.D(A.G("Mapping keys are not allowed here.",s.gaD()))
l.ck(s.at,B.C,A.V(s.f,s.c))}l.y=r.length===1
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
default:if(!l.geU())l.bF()
l.bD()
return}},
bF(){return this.c.cw("Unexpected character.",1)},
dC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.z,r=e.c,q=e.f,p=r.f,o=e.x,n=0;m=s.length,n<m;++n){l=s[n]
if(l==null)continue
if(m!==1)continue
if(l.c===r.as)continue
if(l.e){k=B.b.h1(o,new A.fU(l))
if(k>=0){if(!(k<o.length))return A.b(o,k)
j=o[k].b===B.T}else j=!1
m=j?"Expected ':'. If this is a list entry, it must start with '- '.":"Expected ':'."
i=r.c
new A.cb(p,i).cO(p,i)
h=new A.bl(p,i,i)
h.c1(p,i,i)
A.D(new A.cq(null,m.charCodeAt(0)==0?m:m,h))
m=l.a
i=e.r
h=l.b
g=h.a
h=h.b
f=new A.bl(g,h,h)
f.c1(g,h,h)
q.b8(q,m-i,new A.S(B.k,f))}B.b.j(s,n,null)}},
bn(){var s,r,q,p,o,n,m=this,l=m.z,k=l.length===1&&B.b.gJ(m.x).a===m.c.at
if(!m.y)return
m.aT()
s=l.length
r=m.r
q=m.f.gk(0)
p=m.c
o=p.as
n=p.at
B.b.j(l,s-1,new A.bV(r+q,A.V(p.f,p.c),o,n,k))},
aT(){var s=this.z,r=B.b.gJ(s)
if(r!=null&&r.e)throw A.a(A.G("Could not find expected ':' for simple key.",r.b.bw()))
B.b.j(s,s.length-1,null)},
eE(){var s=this.z,r=s.length
if(r===1)return
if(0>=r)return A.b(s,-1)
s.pop()},
du(a,b,c,d){var s,r,q=this
if(q.z.length!==1)return
s=q.x
if(B.b.gJ(s).a!==-1&&B.b.gJ(s).a>=a)return
B.b.t(s,new A.cu(a,b))
s=c.b
r=new A.S(b,A.a_(c.a,s,s))
s=q.f
if(d==null)s.av(s.$ti.c.a(r))
else s.b8(s,d-q.r,r)},
ck(a,b,c){return this.du(a,b,c,null)},
bK(a){var s,r,q,p,o,n,m,l=this
if(l.z.length!==1)return
for(s=l.x,r=l.f,q=l.c,p=q.f,o=r.$ti.c;B.b.gJ(s).a>a;){n=q.c
new A.cb(p,n).cO(p,n)
m=new A.bl(p,n,n)
m.c1(p,n,n)
r.av(o.a(new A.S(B.p,m)))
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
q.av(q.$ti.c.a(new A.S(a,s.am(new A.ao(r)))))},
d1(a){var s=this
s.bn()
B.b.t(s.z,null)
s.y=!0
s.aY(a)},
d0(a){var s=this
s.aT()
s.eE()
s.y=!1
s.aY(a)},
d4(){var s,r,q,p,o,n=this,m=n.z,l=B.b.gJ(m)
if(l!=null){s=n.f
r=l.a
q=n.r
p=l.b
o=p.b
s.b8(s,r-q,new A.S(B.k,A.a_(p.a,o,o)))
n.du(l.d,B.C,p,r)
B.b.j(m,m.length-1,null)
n.y=!1}else if(m.length===1){if(!n.y)throw A.a(A.G("Mapping values are not allowed here. Did you miss a colon earlier?",n.c.gaD()))
m=n.c
n.ck(m.at,B.C,A.V(m.f,m.c))
n.y=!0}else if(n.y){n.y=!1
n.aY(B.k)}n.aY(B.l)},
aY(a){var s,r=this.c,q=r.c
r.ah()
s=this.f
s.av(s.$ti.c.a(new A.S(a,r.am(new A.ao(q)))))},
cY(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.av(s.$ti.c.a(r.fn(a)))},
eI(){return this.cY(!0)},
cZ(a){var s,r=this
r.aT()
r.y=!0
s=r.f
s.av(s.$ti.c.a(r.fo(a)))},
eJ(){return this.cZ(!1)},
d2(a){var s,r=this
r.bn()
r.y=!1
s=r.f
s.av(s.$ti.c.a(r.fs(a)))},
eK(){return this.d2(!1)},
bD(){var s,r=this
r.bn()
r.y=!1
s=r.f
s.av(s.$ti.c.a(r.ft()))},
fw(){var s,r,q,p,o,n,m=this
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
fp(){var s,r,q,p,o,n,m,l,k,j=this,i="Expected whitespace.",h=j.c,g=new A.ao(h.c)
h.a0(h.a_())
s=j.fq()
if(s==="YAML"){j.bo()
r=j.dA()
h.bR(".")
q=j.dA()
p=new A.dk(h.am(g),r,q)}else if(s==="TAG"){j.bo()
o=j.dw(!0)
if(!j.eR(0))A.D(A.G(i,h.gaD()))
j.bo()
n=j.dz()
if(!j.bG(0))A.D(A.G(i,h.gaD()))
p=new A.dg(h.am(g),o,n)}else{m=h.am(g)
$.kl().$2("Warning: unknown directive.",m)
m=h.b.length
for(;;){if(h.c!==m){l=h.P(0)
k=l===13||l===10}else k=!0
if(!!k)break
h.ah()}return null}j.bo()
j.cm()
if(!(h.c===h.b.length||j.d6(0)))throw A.a(A.G("Expected comment or line break after directive.",h.am(g)))
j.bJ()
return p},
fq(){var s,r=this.c,q=r.c
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
return A.c0(r,null,null)},
fn(a){var s,r,q,p,o=this.c,n=new A.ao(o.c)
o.ah()
s=o.c
while(this.geQ())o.ah()
r=o.D(0,s)
q=o.W()
if(r.length!==0)p=!this.bG(0)&&q!==63&&q!==58&&q!==44&&q!==93&&q!==125&&q!==37&&q!==64&&q!==96
else p=!0
if(p)throw A.a(A.G("Expected alphanumeric character.",o.gaD()))
if(a)return new A.bp(o.am(n),r)
else return new A.cH(o.am(n),r)},
dw(a){var s,r,q,p=this.c
p.bR("!")
s=new A.W("!")
r=p.c
while(this.gdc())p.a0(p.a_())
q=p.D(0,r)
q=s.a+=q
if(p.W()===33)p=s.a=q+A.A(p.ah())
else{if(a&&(q.charCodeAt(0)==0?q:q)!=="!")p.bR("!")
p=q}return p.charCodeAt(0)==0?p:p},
fu(){return this.dw(!1)},
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
return A.ak(s,0,s.length,B.e,!1)},
dz(){return this.cl(!0,null)},
fv(a){return this.cl(a,null)},
fo(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="0 may not be used as an indentation indicator.",a2=a0.c,a3=new A.ao(a2.c)
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
j=new A.W("")
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
h=i!==o?a0.b6():"\n"
l=a0.dv(m)
m=l.a
k=l.b
i=a}if(p!==B.V){r=f+h
j.a=r}else r=f
if(p===B.W)r=j.a=r+k
a2=a2.c_(a3,i)
o=a4?B.O:B.N
return new A.bu(a2,r.charCodeAt(0)==0?r:r,o)},
dv(a){var s,r,q,p,o,n,m,l=new A.W("")
for(s=this.c,r=a===0,q=!r,p=0;;){for(;;){if(!((!q||s.at<a)&&s.W()===32))break
s.a0(s.a_())}o=s.at
if(o>p)p=o
n=s.P(0)
if(!(n===13||n===10))break
m=this.b6()
l.a+=m}if(r){s=this.x
a=p<B.b.gJ(s).a+1?B.b.gJ(s).a+1:p}s=l.a
return new A.dw(a,s.charCodeAt(0)==0?s:s)},
fs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=d.c,b=new A.W("")
d.a0(d.a_())
for(s=!a,r=d.b.length;;){q=!1
if(d.at===0){p=d.P(3)
if(p==null||p===32||p===9||p===13||p===10)q=d.aI("---")||d.aI("...")}if(q)d.fV("Unexpected document indicator.")
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
if(l!=null){for(k=0,j=0;j<l;++j){if(!e.geS()){d.a0(d.a_())
throw A.a(A.G("Expected "+A.l(l)+"-digit hexidecimal number.",d.am(m)))}i=d.a_()
d.a0(i)
k=(k<<4>>>0)+e.ew(i)}if(k>=55296&&k<=57343||k>1114111)throw A.a(A.G("Invalid Unicode character escape code.",d.am(m)))
q=A.A(k)
b.a+=q}}else{q=A.A(d.ah())
b.a+=q}}}q=d.W()
if(q===(a?39:34))break
h=new A.W("")
g=new A.W("")
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
f=e.b6()
o=!0}else{q=e.b6()
g.a+=q}}if(o)if(f.length!==0&&g.a.length===0){q=A.A(32)
b.a+=q}else b.a+=g.n(0)
else{b.a+=h.n(0)
h.a=""}}d.a0(d.a_())
d=d.am(new A.ao(c))
c=b.a
s=a?B.B:B.M
return new A.bu(d,c.charCodeAt(0)==0?c:c,s)},
ft(){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=j.c,h=new A.ao(i),g=new A.W(""),f=new A.W(""),e=B.b.gJ(k.x).a+1
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
f.a+=o}else j.a0(j.a_())}else if(r.length===0){r=k.b6()
f.a=""}else q=k.b6()}if(s.length===1&&j.at<e)break}if(r.length!==0)k.y=!0
j=j.c_(new A.ao(i),h)
i=g.a
return new A.bu(j,i.charCodeAt(0)==0?i:i,B.h)},
bJ(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)return
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())},
b6(){var s=this.c,r=s.W(),q=r===13
if(!q&&r!==10)throw A.a(A.G("Expected newline.",s.gaD()))
s.a0(s.a_())
if(q&&s.W()===10)s.a0(s.a_())
return"\n"},
eR(a){var s=this.c.P(a)
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
A.fT.prototype={
$1(a){t.b2.a(a)
return a!=null&&a.a===this.a.r},
$S:66}
A.fU.prototype={
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
gB(){return B.cC},
n(a){return"ANCHOR "+this.b},
$iS:1,
gA(){return this.a}}
A.cH.prototype={
gB(){return B.cB},
n(a){return"ALIAS "+this.b},
$iS:1,
gA(){return this.a}}
A.bw.prototype={
gB(){return B.cD},
n(a){return"TAG "+A.l(this.b)+" "+this.c},
$iS:1,
gA(){return this.a}}
A.bu.prototype={
gB(){return B.as},
n(a){return"SCALAR "+this.c.n(0)+' "'+this.b+'"'},
$iS:1,
gA(){return this.a}}
A.X.prototype={
bi(){return"TokenType."+this.b}}
A.kj.prototype={
$2(a,b){a=b.dZ(a)
A.r9(a)},
$1(a){return this.$2(a,null)},
$S:20}
A.eA.prototype={
n(a){var s=this.a
return s.n(s)}}
A.h5.prototype={
n(a){return"%YAML "+this.a+"."+this.b}}
A.bM.prototype={
n(a){return"%TAG "+this.a+" "+this.b}}
A.cq.prototype={}
A.N.prototype={
gA(){return this.a}}
A.bP.prototype={
ga7(){return this},
gE(){return this.b.a.gE().ac(0,new A.hf(),t.z)},
h(a,b){var s=this.b.a.h(0,b)
return s==null?null:s.ga7()},
$iw:1,
gM(){return this.b},
ga2(){return this.c}}
A.hf.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.bO.prototype={
ga7(){return this},
gk(a){return this.b.a.length},
sk(a,b){throw A.a(A.M("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.T(b)
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
A.h6.prototype={
n(a){return this.b},
d5(){var s=t.T
this.d=A.aS(s)
new A.h8(this,A.aS(s)).$1(this.c)},
H(a,b){var s,r,q,p,o,n,m,l,k=this,j=A.at(b,B.i,B.j)
if(a.length===0){s=k.c.gA().gC().gK()
return k.bm(A.au(s,A.bZ(k.c)-s,A.dM(j,0,A.dK(k.b))),a,j)}r=A.c(a.slice(0),A.t(a))
q=A.aW(r,0,A.eX(a.length-1,"count",t.p),A.t(r).c)
p=B.b.gJ(r)
o=k.dH(q,!0)
if(t.h.b(o)){if(!A.b3(p))throw A.a(A.fQ(a,a,o))
n=A.o(o.gM(),t.T)
B.b.j(n,p,j)
m=A.at(n,B.i,B.j)
return k.bm(A.rF(k,o,p,j),q,m)}if(t.S.b(o)){l=A.li(o,new A.hc(p,j))
return k.bm(A.rG(k,o,p,j),q,l)}throw A.a(new A.d4(a,a,null,!1,null,null,"Scalar "+o.n(o)+" does not have key "+A.l(p)))},
I(a,b){var s,r,q,p,o,n=this,m=A.m2(),l=A.m2(),k=n.dH(b,!0)
if(b.length===0){m.b=A.au(0,n.b.length,"")
l.b=A.at(null,B.i,B.j)
n.bm(m.bI(),b,l.bI())
return k}s=A.c(b.slice(0),A.t(b))
r=A.aW(s,0,A.eX(b.length-1,"count",t.p),A.t(s).c)
q=B.b.gJ(s)
p=n.dG(r)
if(t.h.b(p)){A.T(q)
m.b=A.ri(n,p,q)
o=A.o(p.gM(),t.T)
B.b.bc(o,q)
l.b=A.at(o,B.i,B.j)}else if(t.S.b(p)){m.b=A.rj(n,p,q)
l.b=A.li(p,new A.hb(q))}n.bm(m.bI(),r,l.bI())
return k},
co(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=J.C(a)
if(j.gL(a))return k.c
s=k.c
r=j.aR(a)
for(q=t.S,p=t.h,o=0;o<r.length;++o){n=r[o]
if(b&&k.d.p(0,s))throw A.a(A.f6(a,s))
if(p.b(s)){m=s.gk(s)
if(!(A.b3(n)&&n>=0&&n<m))return k.ci(a,j.a3(a,o+1),s,c)
s=J.m(s.gM(),n)}else{if(q.b(s)){if(!A.l_(s,n))return k.ci(a,j.a3(a,o+1),s,c)
l=A.n6(s,n)
if(b)if(k.d.p(0,l))throw A.a(A.f6(a,l))
m=s.gM().h(0,l)
m.toString}else return k.ci(a,j.a3(a,o+1),s,c)
s=m}}if(b)k.bB(a,s)
return s},
dH(a,b){return this.co(a,b,null)},
dG(a){return this.co(a,!1,null)},
cn(a,b){return this.co(a,!1,b)},
ci(a,b,c,d){var s=A.fQ(a,b,c)
throw A.a(s)},
bB(a,b){var s,r,q,p,o,n=this
if(b==null)return n.bB(a,n.dG(a))
if(n.d.p(0,b))throw A.a(A.f6(a,b))
if(t.m.b(b))return
if(t.h.b(b))for(s=t.X,r=0;r<b.gk(b);++r){q=A.o(a,s)
q.push(r)
n.bB(q,J.m(b.gM(),r))}if(t.S.b(b)){p=b.gE().aR(0)
for(s=t.z,r=0;q=b.gE(),r<q.gk(q);++r){q=A.o(a,s)
if(!(r<p.length))return A.b(p,r)
q.push(p[r])
o=n.d
if(!(r<p.length))return A.b(p,r)
if(o.p(0,p[r])){if(!(r<p.length))return A.b(p,r)
throw A.a(A.f6(a,t.T.a(p[r])))}o=b.gM()
if(!(r<p.length))return A.b(p,r)
n.bB(q,o.h(0,p[r]))}}},
bm(a,b,c){var s,r=this,q=r.c7(r.c,b,[],c),p=r.b,o=p,n=a.a,m=B.a.aX(p,n,n+a.b,a.c),l=null
try{l=A.np(new A.ha(m),t.T)}catch(s){if(A.c4(s) instanceof A.cq)throw A.a(A.n_("Failed to produce valid YAML after modification.",o,m))
else throw s}if(!A.bm(l,q))throw A.a(A.n_("Modification did not result in expected result.",o,m))
r.b=m
r.c=l
B.b.t(r.a,a)
r.d5()},
c7(a,b,c,d){var s,r,q=J.C(c),p=J.C(b)
A.cj(q.gk(c),0,p.gk(b),null)
if(p.gk(b)===q.gk(c))return d
s=p.T(b,q.gk(c))
if(t.h.b(a)){if(!A.qW(s,a.gk(a)))throw A.a(A.fQ(b,c,a))
r=A.o(a.gM(),t.T)
A.T(s)
B.b.j(r,s,this.c7(J.m(a.gM(),s),b,p.a3(b,q.gk(c)+1),d))
return A.at(r,B.i,B.j)}if(t.S.b(a))return A.li(a,new A.h7(this,s,b,c,d))
throw A.a(A.fQ(b,c,a))}}
A.h8.prototype={
$1(a){var s=this
t.T.a(a)
if(s.b.t(0,a)){if(t.S.b(a))a.gM().an(0,new A.h9(s))
else if(t.h.b(a))J.nN(a.gM(),s)}else s.a.d.t(0,a)},
$S:30}
A.h9.prototype={
$2(a,b){var s,r=t.T
r.a(b)
s=this.a
s.$1(r.a(a))
s.$1(b)},
$S:31}
A.hc.prototype={
$1(a){var s=this.b
a.j(0,this.a,s)
return s},
$S:21}
A.hb.prototype={
$1(a){return a.I(0,this.a)},
$S:33}
A.ha.prototype={
$0(){return A.f_(this.a,null,!1,null).a},
$S:19}
A.h7.prototype={
$1(a){var s=this,r=s.b,q=s.c
q=s.a.c7(t.T.a(a.h(0,r)),q,J.nW(q,J.a6(s.d)+1),s.e)
a.j(0,r,q)
return q},
$S:21}
A.j7.prototype={
$1(a){var s,r=this.a
if(!A.l_(r.b,a))return!1
s=A.qG(r.b,a)
if(!A.bm(r.a.h(0,a),r.b.h(0,s)))return!1
return!0},
$S:2}
A.iR.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iS.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.iB.prototype={
$1(a){return A.bm(a,this.a)},
$S:2}
A.d4.prototype={
n(a){var s,r,q=this,p=q.d
if(p==null){p=q.f
s="Failed to traverse to subpath "+A.l(p)+"!"
r=J.C(p)
if(r.gb3(p))s+=" Parent "+A.l(q.r)+" does not contain key or index "+A.l(r.gJ(p))
return"Invalid path: "+A.l(q.e)+". "+s+"."}return"Invalid path: "+A.l(q.e)+". "+A.l(p)}}
A.dO.prototype={}
A.eP.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+s
return"Assertion failed"}}
A.i1.prototype={
$0(){var s=J.m(this.a.gM(),this.b+1).gA(),r=s.gC().gK(),q=this.c,p=B.a.ae(q,"-",s.gk(s)===0?r:r-1),o=B.a.ae(q,"\n",p)
return new A.cw(o,p-(o+1))},
$S:15}
A.i2.prototype={
$0(){var s=t.T.a(this.b.gM().gE().T(0,this.a.a+1)).gA().gC()
return new A.cw(B.a.ae(this.c,"\n",s.gK()),s.gab())},
$S:15}
A.db.prototype={
R(a,b){if(b==null)return!1
if(b instanceof A.db)return this.a===b.a&&this.b===b.b&&this.c===b.c
return!1},
gY(a){return B.d.gY(this.a)^B.d.gY(this.b)^B.a.gY(this.c)},
hc(){return A.a4(["offset",this.a,"length",this.b,"replacement",this.c],t.N,t.z)},
n(a){return"SourceEdit("+this.a+", "+this.b+', "'+this.c+'")'},
gk(a){return this.b}}
A.i7.prototype={
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
A.ki.prototype={
$1(a){t.x.a(a)
return A.bn(t.T.a(a.a))+": "+A.bn(a.b)},
$S:23}
A.kg.prototype={
$1(a){var s,r,q
t.T.a(a)
s=this.a
r=A.dM(a,s,this.b)
if(t.f.b(a)||t.j.b(a)){q=A.hg(a)
q=q!==B.f}else q=!1
if(q)r=B.a.D(r,s)
return B.a.aj(" ",this.c)+"- "+r},
$S:24}
A.kh.prototype={
$1(a){var s,r,q,p,o
t.x.a(a)
s=a.b
r=A.bn(t.T.a(a.a))
q=B.a.aj(" ",this.a)+r
p=this.c
o=A.dM(s,this.b,p)
if((t.f.b(s)||t.j.b(s))&&!A.l7(s))return q+":"+p+o
return q+": "+o},
$S:23}
A.j4.prototype={
$0(){return A.f_(this.a,null,!1,null).a},
$S:19}
A.iT.prototype={
$1(a){return J.al(a)},
$S:3}
A.iU.prototype={
$1(a){return B.a.aC(A.e(a),this.a)>0},
$S:0}
A.eD.prototype={
n(a){return J.al(this.c)},
$iN:1,
$ian:1,
ga2(){return this.a},
gA(){return this.b},
ga7(){return this.c}}
A.eC.prototype={
h(a,b){var s=this.b.h(0,b)
return s==null?null:s.ga7()},
gE(){var s=this.b,r=A.j(s).i("ai<1>")
return A.fL(new A.ai(s,r),r.i("@(f.E)").a(new A.he()),r.i("f.E"),t.z)},
ga7(){return this},
$iw:1,
$iN:1,
$ibP:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.he.prototype={
$1(a){return t.T.a(a).ga7()},
$S:1}
A.eB.prototype={
gk(a){return this.b.length},
sk(a,b){throw A.a(A.M("Cannot modify an unmodifiable List"))},
h(a,b){var s
A.T(b)
s=this.b
if(!(b>=0&&b<s.length))return A.b(s,b)
return s[b].ga7()},
j(a,b,c){throw A.a(A.M("Cannot modify an unmodifiable List"))},
ga7(){return this},
$ix:1,
$if:1,
$ip:1,
$iN:1,
$ibO:1,
ga2(){return this.a},
gM(){return this.b},
gA(){return this.c}}
A.hd.prototype={
$1(a){return A.at(a,this.a,this.b)},
$S:41}
A.eQ.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.jS.prototype={
$1(a){return!this.a.F(A.e(a))},
$S:0}
A.k8.prototype={
$1(a){return B.a.N(A.e(a)).length===0},
$S:0}
A.ib.prototype={
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
A.k_.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.k0.prototype={
$1(a){return J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.k1.prototype={
$1(a){var s,r
t.a9.a(a)
s=this.a
r=a.a
if(!(r>=0&&r<s.length))return A.b(s,r)
return a.b!==s[r]},
$S:44}
A.k2.prototype={
$1(a){A.e(a)
return!B.b.p(A.iz(this.a),a)},
$S:0}
A.k3.prototype={
$1(a){return A.e(a)==="DIRECT"},
$S:0}
A.iD.prototype={
$1(a){var s,r
t.P.a(a)
s=this.a
if(!J.u(a.h(0,"name"),s)){r=t.g.a(a.h(0,"proxies"))
s=J.bo(r==null?[]:r,s)}else s=!1
return s},
$S:12}
A.iE.prototype={
$1(a){return J.u(J.m(a,"dialer-proxy"),this.a)},
$S:2}
A.iF.prototype={
$1(a){A.e(a)
return A.ld(a,this.a,"__deleted__")!==a},
$S:0}
A.iG.prototype={
$1(a){return!J.u(t.P.a(a).h(0,"name"),this.a)},
$S:12}
A.jl.prototype={
$1(a){return A.la(a,this.a+1)},
$S:45}
A.jd.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash ")},
$S:0}
A.iW.prototype={
$1(a){return B.a.N(A.e(a))==="# Mclash OpenWrt \u63a7\u5236: true"},
$S:0}
A.iX.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash OpenWrt \u63a5\u7ba1: ")},
$S:0}
A.j5.prototype={
$3(a,b,c){return A.na(A.e(a),A.e(b),A.e(c),!1)},
$S:46}
A.iw.prototype={
$1(a){var s
if(B.a.N(A.e(a))!=="# Mclash OpenWrt \u63a7\u5236: true")return!0
s=this.a
if(s.a)return!1
return s.a=!0},
$S:0}
A.j2.prototype={
$1(a){var s
A.e(a)
s=A.I("^(0|[1-9][0-9]{0,2})$",!0)
return!s.b.test(a)||A.c0(a,null,null)>255},
$S:0}
A.j3.prototype={
$2(a,b){return A.T(a)*256+A.c0(A.e(b),null,null)},
$S:47}
A.k9.prototype={
$1(a){var s
A.e(a)
s=t.s
return a.length===0?A.c([],s):A.c(a.split(":"),s)},
$S:72}
A.ka.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9a-fA-F]{1,4}$",!0)
return!s.b.test(a)},
$S:0}
A.ix.prototype={
$1(a){var s
A.e(a)
s=A.I("^[A-Za-z0-9_.-]{1,15}$",!0)
return!s.b.test(a)||B.b.p(A.c(["lo","Mclash"],t.s),a)},
$S:0}
A.il.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash OpenWrt \u63a5\u7ba1: ")},
$S:0}
A.ij.prototype={
$1(a){var s
A.e(a)
s=A.I("^[0-9]{1,3}$",!0)
return s.b.test(a)&&A.c0(a,null,null)<=255},
$S:0}
A.ik.prototype={
$1(a){return B.a.N(A.e(a))!=="# Mclash OpenWrt \u63a7\u5236: true"},
$S:0}
A.kd.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u624b\u52a8\u8282\u70b9: ")},
$S:0}
A.jk.prototype={
$2(a,b){var s=this.a.a.h(0,a)
s=s==null?null:B.a.N(J.al(s))
return s==null?b:s},
$1(a){return this.$2(a,"")},
$S:49}
A.jj.prototype={
$2$fallback(a,b){var s=this.a.$1(a),r=s.length===0?b:A.aU(s,null)
if(r==null)throw A.a(A.B("VMess "+a+" \u5fc5\u987b\u662f\u6574\u6570",null,null))
return r},
$1(a){return this.$2$fallback(a,null)},
$S:50}
A.je.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jf.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.jg.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.jh.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ji.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.ig.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.ih.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.ii.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.iI.prototype={
$1(a){return!J.u(a,this.a)},
$S:2}
A.iJ.prototype={
$1(a){return A.e(a)!==this.a},
$S:0}
A.j8.prototype={
$1(a){return this.a.p(0,J.m(a,"name"))},
$S:2}
A.j9.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.ja.prototype={
$1(a){return!this.a.p(0,J.m(a,"name"))},
$S:2}
A.kc.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u624b\u52a8\u8282\u70b9: ")},
$S:0}
A.jU.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.jz.prototype={
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
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.ia.prototype={
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
A.ie.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")},
$S:0}
A.iq.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.ir.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.is.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jK.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.jL.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jM.prototype={
$2(a,b){var s
A.e(a)
A.e(b)
s=this.a
return a===s||b===s},
$S:13}
A.jN.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jO.prototype={
$1(a){return A.e(a)===this.a},
$S:0}
A.jP.prototype={
$2(a,b){A.e(a)
t.a.a(b)
return!B.a.aG(a,"Targets")&&J.cE(b)},
$S:53}
A.jQ.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.jR.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.jx.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.jc.prototype={
$2(a,b){A.T(a)
A.T(b)
return b>a?b:a},
$S:54}
A.jV.prototype={
$1(a){return t.fk.a(a).a!==this.a},
$S:55}
A.jW.prototype={
$1(a){var s
t.fk.a(a)
s=this.a?"back":"front"
s=a.b.h(0,s)
return s==null?A.c([],t.s):s},
$S:56}
A.hN.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.hO.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")&&A.rb(a)==null},
$S:0}
A.hP.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hQ.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.jT.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.jy.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.h(0,"front")
if(!J.bo(r==null?A.c([],t.s):r,a)){s=s.h(0,"back")
s=!J.bo(s==null?A.c([],t.s):s,a)}else s=!1
return s},
$S:0}
A.hF.prototype={
$1(a){A.e(a)
return!B.b.p(this.a,a)&&!B.b.p(this.b,a)},
$S:0}
A.hG.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")},
$S:0}
A.i9.prototype={
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
A.id.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")},
$S:0}
A.im.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.io.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.ip.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jw.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")},
$S:0}
A.hJ.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.hK.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u5168\u5c40\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u8282\u70b9\u94fe\u8def: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u4ee3\u7406\u7ec4: ")&&!B.a.u(a,"# Mclash \u94fe\u8def\u8bbe\u7f6e: ")&&A.ra(a)==null},
$S:0}
A.hL.prototype={
$1(a){var s,r
t.O.a(a)
s=a.h(0,"front")
if(s==null)s=A.c([],t.s)
s=A.o(s,t.N)
r=a.h(0,"back")
B.b.a9(s,r==null?A.c([],t.s):r)
return s},
$S:25}
A.hM.prototype={
$1(a){return!this.a.p(0,A.e(a))},
$S:0}
A.iA.prototype={
$1(a){var s,r,q
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gq(r);r.l();){q=r.gm()
s.j(0,A.l(q.a),this.$1(q.b))}return s}if(t.j.b(a)){s=J.aR(a,this,t.z)
s=A.o(s,s.$ti.i("y.E"))
return s}return a},
$S:1}
A.k4.prototype={
$1(a){t.aw.a(a)
return a.a!==this.a&&J.u(a.b.h(0,"path"),this.b)},
$S:58}
A.k5.prototype={
$1(a){return typeof a!="string"||B.a.N(a).length===0},
$S:2}
A.k6.prototype={
$1(a){return A.rt(a,A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jm(this.b)+"\\s*(?=[,)])",!0),t.ey.a(t.gQ.a(new A.k7(this.a))),null)},
$S:4}
A.k7.prototype={
$1(a){return A.l(a.h(0,1))+"RULE-SET,"+this.a.a},
$S:59}
A.iH.prototype={
$1(a){var s
A.e(a)
s=A.I("(^|[,(])\\s*RULE-SET\\s*,\\s*"+A.jm(this.a)+"\\s*(?=[,)])",!0)
return s.b.test(a)},
$S:0}
A.hu.prototype={
aN(a,b,c){var s,r,q,p,o
t.a.a(b)
for(s=J.a3(b),r=s.gq(b),q=this.a,p=null;r.l();){o=q.I(0,r.gm())
if(o==null)continue
if(p!=null&&p!==o)throw A.a(A.B("\u8282\u70b9\u53c2\u6570\u522b\u540d\u51b2\u7a81\uff1a"+A.l(s.gU(b)),null,null))
p=o}return p==null?c:p},
a3(a,b){return this.aN(0,b,"")},
dO(a){var s,r
t.a.a(a)
s=this.a3(0,a)
if(s.length===0)return null
r=t.s
if(B.b.p(A.c(["1","true"],r),s.toLowerCase()))return!0
if(B.b.p(A.c(["0","false"],r),s.toLowerCase()))return!1
throw A.a(A.B("\u8282\u70b9\u53c2\u6570 "+A.l(J.lr(a))+" \u5fc5\u987b\u662f true/false \u6216 1/0",null,null))},
fW(){var s,r,q
for(s=["remarks","group"],r=this.a,q=0;q<2;++q)r.I(0,s[q])
if(r.a!==0)throw A.a(B.cj)}}
A.i4.prototype={
$1(a){return B.a.N(A.e(a))},
$S:4}
A.i5.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i6.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.i3.prototype={
$1(a){return A.e(a).length!==0},
$S:0}
A.hZ.prototype={
$1(a){return J.a6(t.a.a(a))>1},
$S:60}
A.i_.prototype={
$1(a){A.hS(a)
return a==null||a<1||a>65535},
$S:61}
A.jX.prototype={
$1(a){var s,r=t.D
r.a(a)
s=A.Z("")
s.H([],A.a4(["proxies",a],t.N,r))
return s.b},
$S:62}
A.jb.prototype={
$1(a){return t.P.a(a).h(0,"name")},
$S:63}
A.iv.prototype={
$1(a){return B.b.p(this.a,a)||this.b.p(0,a)},
$S:2}
A.hY.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
$S:2}
A.jF.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jG.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.jH.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:13}
A.jI.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jJ.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.kf.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")&&!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u300c")&&!B.q.gag().S(0,B.a.gcN(a))&&a!=="# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605"},
$S:0}
A.js.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jt.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.ju.prototype={
$2(a,b){A.e(a)
A.hR(b)
return!this.a.p(0,a)},
$S:26}
A.kb.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.iu.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.hX.prototype={
$1(a){return t.S.b(a)&&J.u(a.h(0,"name"),this.a)},
$S:2}
A.jA.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jB.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")},
$S:0}
A.jC.prototype={
$2(a,b){A.e(a)
A.e(b)
return!this.a.p(0,a)},
$S:13}
A.jD.prototype={
$1(a){return B.a.u(A.e(a),this.a.b)},
$S:0}
A.jE.prototype={
$1(a){var s
A.e(a)
s=this.a
return s!=null&&B.a.u(a,s)},
$S:0}
A.ke.prototype={
$1(a){A.e(a)
return!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u6b63\u5219: ")&&!B.a.u(a,"# Mclash \u4ee3\u7406\u7ec4\u300c")&&!B.q.gag().S(0,B.a.gcN(a))&&a!=="# Mclash \u9ed8\u8ba4\u673a\u573a\u8ba2\u9605"},
$S:0}
A.jp.prototype={
$1(a){return J.m(a,"name")},
$S:1}
A.jq.prototype={
$1(a){return B.a.u(A.e(a),"# Mclash \u4ee3\u7406\u7ec4 DIRECT: ")},
$S:0}
A.jr.prototype={
$2(a,b){A.e(a)
A.hR(b)
return!this.a.p(0,a)},
$S:26}
A.it.prototype={
$1(a){return A.e(J.m(a,"name"))},
$S:3}
A.iN.prototype={
$2(a,b){return J.al(a).toLowerCase()==="host"},
$S:14}
A.iO.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0}
A.iL.prototype={
$2(a,b){return J.al(a).toLowerCase()==="host"},
$S:14}
A.iM.prototype={
$1(a){return!B.a.u(A.e(a),"# Mclash HTTP/WS Host: ")},
$S:0};(function aliases(){var s=J.bs.prototype
s.ek=s.n
s=A.aA.prototype
s.eg=s.dR
s.eh=s.dS
s.ej=s.dU
s.ei=s.dT
s=A.r.prototype
s.el=s.al
s=A.f.prototype
s.bh=s.aJ
s=A.cl.prototype
s.en=s.aC
s.em=s.R
s=A.eq.prototype
s.a_=s.h7
s.ep=s.bA
s.eo=s.aI
s=A.dH.prototype
s.eq=s.n})();(function installTearOffs(){var s=hunkHelpers._instance_1i,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_2,o=hunkHelpers._static_1,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._static_0
s(J.J.prototype,"ga5","p",7)
r(J.bq.prototype,"gcN",1,1,null,["$2","$1"],["a4","u"],29,0,0)
q(A.b9.prototype,"gdQ","fX",0)
p(A,"qd","pn",9)
o(A,"qe","po",6)
s(A.aw.prototype,"ga5","p",7)
s(A.r.prototype,"ga5","p",7)
o(A,"qi","pp",1)
o(A,"qm","qL",6)
n(A,"qn",1,null,["$3$onError$radix","$1"],["c0",function(a){return A.c0(a,null,null)}],67,0)
n(A,"qo",1,null,["$2$radix","$1"],["nb",function(a){return A.nb(a,null)}],68,0)
p(A,"ql","qK",9)
o(A,"qj","oy",4)
m(A,"qk","p6",69)
p(A,"mZ","pZ",70)
s(A.f.prototype,"ga5","p",7)
p(A,"qB","qr",9)
o(A,"qC","qs",6)
p(A,"qA","bm",14)
o(A,"iP","qt",6)
o(A,"rx","bn",24)
n(A,"rH",1,null,["$2","$1"],["mG",function(a){return A.mG(a,null)}],20,0)
o(A,"rz","i0",52)
n(A,"r1",2,null,["$1$2","$2"],["ne",function(a,b){return A.ne(a,b,t.H)}],48,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.kt,J.e1,A.d8,J.b6,A.R,A.r,A.fV,A.f,A.a2,A.d0,A.bk,A.cQ,A.da,A.cP,A.dm,A.bE,A.aL,A.av,A.z,A.ax,A.cg,A.cK,A.bR,A.bf,A.aq,A.fZ,A.ea,A.fE,A.ah,A.aB,A.ba,A.b9,A.cs,A.dn,A.cm,A.eO,A.hj,A.aV,A.eI,A.hw,A.dz,A.eL,A.bS,A.ds,A.ap,A.aI,A.dU,A.hi,A.hh,A.hq,A.hD,A.hA,A.hl,A.ec,A.dd,A.eH,A.i,A.L,A.bd,A.W,A.dE,A.h0,A.aO,A.dV,A.ce,A.cz,A.dv,A.aN,A.f8,A.fY,A.fM,A.ee,A.fW,A.el,A.cl,A.fb,A.ae,A.aE,A.bI,A.em,A.eq,A.ao,A.hk,A.aa,A.cO,A.c8,A.cG,A.dH,A.fI,A.fN,A.a0,A.fS,A.bV,A.bt,A.cJ,A.S,A.dk,A.dg,A.bp,A.cH,A.bw,A.bu,A.eA,A.h5,A.bM,A.N,A.h6,A.db,A.eD,A.eS,A.eQ,A.hu])
q(J.e1,[J.e3,J.cS,J.cV,J.cU,J.cW,J.cT,J.bq])
q(J.cV,[J.bs,J.J,A.d1])
q(J.bs,[J.ef,J.cn,J.br])
r(J.e2,A.d8)
r(J.fy,J.J)
q(J.cT,[J.cR,J.e4])
q(A.R,[A.cZ,A.dh,A.e5,A.et,A.ej,A.eG,A.cY,A.c5,A.aZ,A.dj,A.es,A.bK,A.dT])
r(A.co,A.r)
q(A.co,[A.aH,A.di])
q(A.f,[A.x,A.bb,A.q,A.az,A.bg,A.dl,A.b8,A.bQ,A.eE,A.eN,A.bx])
q(A.x,[A.y,A.bD,A.ai,A.aC,A.O,A.dr])
q(A.y,[A.bL,A.H,A.eM,A.d7,A.eK])
r(A.bC,A.bb)
r(A.ca,A.bg)
r(A.c9,A.b8)
q(A.z,[A.cp,A.aA,A.eJ])
r(A.d_,A.cp)
q(A.ax,[A.aX,A.ct])
q(A.aX,[A.b2,A.cu,A.bU,A.cv,A.dw,A.cw])
r(A.dx,A.ct)
r(A.cy,A.cg)
r(A.b1,A.cy)
r(A.cL,A.b1)
r(A.aJ,A.cK)
q(A.bf,[A.cM,A.dy])
r(A.cN,A.cM)
q(A.aq,[A.e0,A.dR,A.dS,A.er,A.fA,A.iZ,A.j0,A.hs,A.fJ,A.ho,A.hz,A.f9,A.fa,A.i8,A.fd,A.fc,A.fe,A.fg,A.fi,A.ff,A.fw,A.iC,A.fO,A.fP,A.fT,A.fU,A.kj,A.hf,A.h8,A.hc,A.hb,A.h7,A.j7,A.iR,A.iS,A.iB,A.i7,A.ki,A.kg,A.kh,A.iT,A.iU,A.he,A.hd,A.jS,A.k8,A.ib,A.k_,A.k0,A.k1,A.k2,A.k3,A.iD,A.iE,A.iF,A.iG,A.jl,A.jd,A.iW,A.iX,A.j5,A.iw,A.j2,A.k9,A.ka,A.ix,A.il,A.ij,A.ik,A.kd,A.jk,A.jj,A.je,A.jf,A.jg,A.jh,A.ji,A.ig,A.ih,A.ii,A.iI,A.iJ,A.j8,A.j9,A.ja,A.kc,A.jU,A.jz,A.hH,A.hI,A.ia,A.ie,A.iq,A.ir,A.is,A.jK,A.jL,A.jN,A.jO,A.jQ,A.jR,A.jx,A.jV,A.jW,A.hN,A.hO,A.hP,A.hQ,A.jT,A.jy,A.hF,A.hG,A.i9,A.id,A.im,A.io,A.ip,A.jw,A.hJ,A.hK,A.hL,A.hM,A.iA,A.k4,A.k5,A.k6,A.k7,A.iH,A.i4,A.i5,A.i6,A.i3,A.hZ,A.i_,A.jX,A.jb,A.iv,A.hY,A.jF,A.jG,A.jI,A.jJ,A.kf,A.js,A.jt,A.kb,A.iu,A.hX,A.jA,A.jB,A.jD,A.jE,A.ke,A.jp,A.jq,A.it,A.iO,A.iM])
r(A.cc,A.e0)
r(A.d3,A.dh)
q(A.er,[A.ep,A.c7])
q(A.dS,[A.fz,A.j_,A.fG,A.fK,A.hr,A.h2,A.h1,A.fh,A.h9,A.j3,A.jM,A.jP,A.jc,A.jH,A.ju,A.jC,A.jr,A.iN,A.iL])
q(A.aA,[A.cX,A.dq])
r(A.b0,A.d1)
r(A.dt,A.b0)
r(A.du,A.dt)
r(A.bc,A.du)
q(A.bc,[A.e9,A.d2,A.bG])
r(A.cx,A.eG)
r(A.aw,A.dy)
r(A.cr,A.aw)
q(A.dR,[A.hC,A.hB,A.fv,A.fj,A.fq,A.fr,A.fs,A.ft,A.fo,A.fp,A.fk,A.fl,A.fm,A.fn,A.fu,A.hm,A.ha,A.i1,A.i2,A.j4])
q(A.aI,[A.c6,A.dX,A.e6])
q(A.dU,[A.dQ,A.f7,A.fC,A.fB,A.h4,A.h3])
r(A.e7,A.cY)
r(A.hp,A.hq)
r(A.ey,A.dX)
q(A.aZ,[A.ci,A.dZ,A.d4])
r(A.eF,A.dE)
r(A.bN,A.cz)
r(A.d5,A.dv)
r(A.cd,A.fY)
q(A.cd,[A.eg,A.ex,A.ez])
r(A.cb,A.el)
q(A.cl,[A.bl,A.dc])
r(A.en,A.em)
r(A.bh,A.dc)
r(A.eo,A.eq)
r(A.dW,A.eo)
q(A.en,[A.de,A.cq])
q(A.dH,[A.ag,A.bH,A.bF])
q(A.hl,[A.aK,A.dp,A.X])
q(A.N,[A.eU,A.eR,A.an])
r(A.eV,A.eU)
r(A.bP,A.eV)
r(A.bO,A.eR)
r(A.dO,A.i)
r(A.eP,A.c5)
r(A.eT,A.eS)
r(A.eC,A.eT)
r(A.eB,A.eQ)
s(A.co,A.av)
s(A.dt,A.r)
s(A.du,A.aL)
s(A.cp,A.ap)
s(A.cy,A.ap)
s(A.dv,A.r)
s(A.eR,A.r)
s(A.eU,A.z)
s(A.eV,A.aN)
s(A.eQ,A.r)
s(A.eS,A.z)
s(A.eT,A.aN)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n2:"double",bA:"num",d:"String",k:"bool",bd:"Null",p:"List",v:"Object",w:"Map",aM:"JSObject"},mangledNames:{},types:["k(d)","@(@)","k(@)","d(@)","d(d)","bd()","h(v?)","k(v?)","~()","k(v?,v?)","k(ae)","~(d)","k(w<d,@>)","k(d,d)","k(@,@)","+nearestLineEnding,nextNodeColStart(h,h)()","@(d)","h()","~(v?,v?)","N()","~(d[ck?])","N(w<@,@>)","@()","d(L<@,N>)","d(N)","p<d>(w<d,p<d>>)","k(d,k)","S(bp)","k(+column,type(h,X?))","k(ch[h])","~(N)","~(@,N)","~(@,@)","@(w<@,@>)","v(aE)","v(ae)","d(d?)","d(h,d,d)","bh()","h(ae,ae)","w<d,d>(w<d,d>,d)","N(@)","0&(d,h?)","~(h,h,h)","k(L<h,d>)","v?(@)","d(d,d,d)","h(h,d)","0^(0^,0^)<bA>","d(d[d])","h(d{fallback:h?})","@(@,d)","v?(v?)","k(d,p<d>)","h(h,h)","k(L<d,w<d,p<d>>>)","p<d>(L<d,w<d,p<d>>>)","p<aE>(L<v,p<ae>>)","k(L<d,w<d,@>>)","d(b_)","k(p<d>)","k(h?)","d(p<w<d,@>>)","@(w<d,@>)","S(bw)","h(aE)","k(bV?)","h(d{onError:h(d)?,radix:h?})","h?(d{radix:h?})","p<d>()","p<d>(d,p<d>)","d?()","p<d>(d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b2&&a.b(c.a)&&b.b(c.b),"2;column,type":(a,b)=>c=>c instanceof A.cu&&a.b(c.a)&&b.b(c.b),"2;compactCharOffset,lineEndingIndex":(a,b)=>c=>c instanceof A.bU&&a.b(c.a)&&b.b(c.b),"2;end,start":(a,b)=>c=>c instanceof A.cv&&a.b(c.a)&&b.b(c.b),"2;indent,trailingBreaks":(a,b)=>c=>c instanceof A.dw&&a.b(c.a)&&b.b(c.b),"2;nearestLineEnding,nextNodeColStart":(a,b)=>c=>c instanceof A.cw&&a.b(c.a)&&b.b(c.b),"3;index,keyNode,valueNode":(a,b,c)=>d=>d instanceof A.dx&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.p_(v.typeUniverse,JSON.parse('{"br":"bs","ef":"bs","cn":"bs","e3":{"k":[],"ar":[]},"cS":{"bd":[],"ar":[]},"cV":{"aM":[]},"bs":{"aM":[]},"J":{"p":["1"],"x":["1"],"aM":[],"f":["1"]},"e2":{"d8":[]},"fy":{"J":["1"],"p":["1"],"x":["1"],"aM":[],"f":["1"]},"b6":{"K":["1"]},"cT":{"bA":[]},"cR":{"h":[],"bA":[],"ar":[]},"e4":{"bA":[],"ar":[]},"bq":{"d":[],"ch":[],"ar":[]},"cZ":{"R":[]},"aH":{"r":["h"],"av":["h"],"p":["h"],"x":["h"],"f":["h"],"r.E":"h","av.E":"h"},"x":{"f":["1"]},"y":{"x":["1"],"f":["1"]},"bL":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"a2":{"K":["1"]},"bb":{"f":["2"],"f.E":"2"},"bC":{"bb":["1","2"],"x":["2"],"f":["2"],"f.E":"2"},"d0":{"K":["2"]},"H":{"y":["2"],"x":["2"],"f":["2"],"f.E":"2","y.E":"2"},"q":{"f":["1"],"f.E":"1"},"bk":{"K":["1"]},"az":{"f":["2"],"f.E":"2"},"cQ":{"K":["2"]},"bg":{"f":["1"],"f.E":"1"},"ca":{"bg":["1"],"x":["1"],"f":["1"],"f.E":"1"},"da":{"K":["1"]},"bD":{"x":["1"],"f":["1"],"f.E":"1"},"cP":{"K":["1"]},"dl":{"f":["1"],"f.E":"1"},"dm":{"K":["1"]},"b8":{"f":["+(h,1)"],"f.E":"+(h,1)"},"c9":{"b8":["1"],"x":["+(h,1)"],"f":["+(h,1)"],"f.E":"+(h,1)"},"bE":{"K":["+(h,1)"]},"co":{"r":["1"],"av":["1"],"p":["1"],"x":["1"],"f":["1"]},"eM":{"y":["h"],"x":["h"],"f":["h"],"f.E":"h","y.E":"h"},"d_":{"z":["h","1"],"ap":["h","1"],"w":["h","1"],"z.K":"h","z.V":"1","ap.K":"h","ap.V":"1"},"d7":{"y":["1"],"x":["1"],"f":["1"],"f.E":"1","y.E":"1"},"b2":{"aX":[],"ax":[]},"cu":{"aX":[],"ax":[]},"bU":{"aX":[],"ax":[]},"cv":{"aX":[],"ax":[]},"dw":{"aX":[],"ax":[]},"cw":{"aX":[],"ax":[]},"dx":{"ct":[],"ax":[]},"cL":{"b1":["1","2"],"cy":["1","2"],"cg":["1","2"],"ap":["1","2"],"w":["1","2"],"ap.K":"1","ap.V":"2"},"cK":{"w":["1","2"]},"aJ":{"cK":["1","2"],"w":["1","2"]},"bQ":{"f":["1"],"f.E":"1"},"bR":{"K":["1"]},"cM":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cN":{"cM":["1"],"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"e0":{"aq":[],"b7":[]},"cc":{"aq":[],"b7":[]},"d3":{"R":[]},"e5":{"R":[]},"et":{"R":[]},"ea":{"ay":[]},"aq":{"b7":[]},"dR":{"aq":[],"b7":[]},"dS":{"aq":[],"b7":[]},"er":{"aq":[],"b7":[]},"ep":{"aq":[],"b7":[]},"c7":{"aq":[],"b7":[]},"ej":{"R":[]},"aA":{"z":["1","2"],"fD":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"ai":{"x":["1"],"f":["1"],"f.E":"1"},"ah":{"K":["1"]},"aC":{"x":["1"],"f":["1"],"f.E":"1"},"aB":{"K":["1"]},"O":{"x":["L<1,2>"],"f":["L<1,2>"],"f.E":"L<1,2>"},"ba":{"K":["L<1,2>"]},"cX":{"aA":["1","2"],"z":["1","2"],"fD":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"aX":{"ax":[]},"ct":{"ax":[]},"b9":{"ol":[],"ch":[]},"cs":{"d6":[],"b_":[]},"eE":{"f":["d6"],"f.E":"d6"},"dn":{"K":["d6"]},"cm":{"b_":[]},"eN":{"f":["b_"],"f.E":"b_"},"eO":{"K":["b_"]},"d1":{"aM":[]},"b0":{"cf":["1"],"aM":[]},"bc":{"r":["h"],"b0":["h"],"p":["h"],"cf":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"]},"e9":{"bc":[],"r":["h"],"b0":["h"],"p":["h"],"cf":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"d2":{"bc":[],"kD":[],"r":["h"],"b0":["h"],"p":["h"],"cf":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"bG":{"bc":[],"kE":[],"r":["h"],"b0":["h"],"p":["h"],"cf":["h"],"x":["h"],"aM":[],"f":["h"],"aL":["h"],"ar":[],"r.E":"h","aL.E":"h"},"eG":{"R":[]},"cx":{"R":[]},"dz":{"K":["1"]},"bx":{"f":["1"],"f.E":"1"},"dq":{"aA":["1","2"],"z":["1","2"],"fD":["1","2"],"w":["1","2"],"z.K":"1","z.V":"2"},"aw":{"bf":["1"],"kv":["1"],"d9":["1"],"x":["1"],"f":["1"]},"cr":{"aw":["1"],"bf":["1"],"kv":["1"],"d9":["1"],"x":["1"],"f":["1"]},"bS":{"K":["1"]},"di":{"r":["1"],"av":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1","av.E":"1"},"r":{"p":["1"],"x":["1"],"f":["1"]},"z":{"w":["1","2"]},"cp":{"z":["1","2"],"ap":["1","2"],"w":["1","2"]},"dr":{"x":["2"],"f":["2"],"f.E":"2"},"ds":{"K":["2"]},"cg":{"w":["1","2"]},"b1":{"cy":["1","2"],"cg":["1","2"],"ap":["1","2"],"w":["1","2"],"ap.K":"1","ap.V":"2"},"bf":{"d9":["1"],"x":["1"],"f":["1"]},"dy":{"bf":["1"],"d9":["1"],"x":["1"],"f":["1"]},"eJ":{"z":["d","@"],"w":["d","@"],"z.K":"d","z.V":"@"},"eK":{"y":["d"],"x":["d"],"f":["d"],"f.E":"d","y.E":"d"},"c6":{"aI":["p<h>","d"],"aI.S":"p<h>"},"dX":{"aI":["d","p<h>"]},"cY":{"R":[]},"e7":{"R":[]},"e6":{"aI":["v?","d"],"aI.S":"v?"},"ey":{"aI":["d","p<h>"],"aI.S":"d"},"h":{"bA":[]},"p":{"x":["1"],"f":["1"]},"d6":{"b_":[]},"d":{"ch":[]},"c5":{"R":[]},"dh":{"R":[]},"aZ":{"R":[]},"ci":{"R":[]},"dZ":{"R":[]},"dj":{"R":[]},"es":{"R":[]},"bK":{"R":[]},"dT":{"R":[]},"ec":{"R":[]},"dd":{"R":[]},"eH":{"ay":[]},"i":{"ay":[]},"W":{"os":[]},"dE":{"eu":[]},"aO":{"eu":[]},"eF":{"eu":[]},"bN":{"cz":["1","f<1>"],"cz.T":"f<1>"},"d5":{"r":["1"],"p":["1"],"x":["1"],"f":["1"],"r.E":"1"},"ee":{"ay":[]},"eg":{"cd":[]},"ex":{"cd":[]},"ez":{"cd":[]},"cb":{"bI":[]},"bl":{"o3":[],"bh":[],"ck":[]},"el":{"bI":[]},"dc":{"ck":[]},"em":{"ay":[]},"en":{"i":[],"ay":[]},"cl":{"ck":[]},"bh":{"ck":[]},"dW":{"eo":[]},"ao":{"oe":[]},"de":{"i":[],"ay":[]},"cO":{"aa":[]},"c8":{"aa":[]},"cG":{"aa":[]},"dH":{"aa":[]},"ag":{"aa":[]},"bH":{"aa":[]},"bF":{"aa":[]},"bp":{"S":[]},"bw":{"S":[]},"dk":{"S":[]},"dg":{"S":[]},"cH":{"S":[]},"bu":{"S":[]},"cq":{"i":[],"ay":[]},"bP":{"z":["@","@"],"aN":["@","@"],"N":[],"w":["@","@"],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"bO":{"r":["@"],"p":["@"],"x":["@"],"N":[],"f":["@"],"r.E":"@"},"an":{"N":[]},"d4":{"R":[]},"dO":{"i":[],"ay":[]},"eP":{"R":[]},"eD":{"an":[],"N":[]},"eC":{"bP":[],"z":["@","@"],"aN":["@","@"],"w":["@","@"],"N":[],"z.K":"@","z.V":"@","aN.K":"@","aN.V":"@"},"eB":{"bO":[],"r":["@"],"p":["@"],"x":["@"],"f":["@"],"N":[],"r.E":"@"},"o8":{"p":["h"],"x":["h"],"f":["h"]},"kE":{"p":["h"],"x":["h"],"f":["h"]},"kD":{"p":["h"],"x":["h"],"f":["h"]}}'))
A.oZ(v.typeUniverse,JSON.parse('{"x":1,"co":1,"b0":1,"cp":2,"dy":1,"dU":2,"dv":1}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",s:" must not be greater than the number of characters in the file, ",n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority"}
var t=(function rtii(){var s=A.aQ
return{a6:s("cG"),B:s("c6"),V:s("aH"),w:s("aJ<d,d>"),gR:s("c8"),dg:s("cO"),W:s("x<@>"),bU:s("R"),g8:s("ay"),f_:s("az<d,d>"),d:s("i"),_:s("b7"),cs:s("f<d>"),ah:s("f<d>(d)"),R:s("f<@>"),hb:s("f<h>"),gT:s("J<p<w<d,@>>>"),Z:s("J<w<d,@>>"),dm:s("J<w<@,@>>"),a2:s("J<+column,type(h,X?)>"),c0:s("J<db>"),s:s("J<d>"),l:s("J<bM>"),fT:s("J<N>"),r:s("J<ae>"),ef:s("J<aE>"),aq:s("J<a0>"),v:s("J<@>"),t:s("J<h>"),d4:s("J<d?>"),g0:s("J<bV?>"),u:s("cS"),o:s("aM"),J:s("br"),aU:s("cf<@>"),D:s("p<w<d,@>>"),a:s("p<d>"),j:s("p<@>"),L:s("p<h>"),E:s("p<ae?>"),x:s("L<@,N>"),a9:s("L<h,d>"),aS:s("L<v,p<ae>>"),aw:s("L<d,w<d,@>>"),fk:s("L<d,w<d,p<d>>>"),G:s("w<d,d>"),P:s("w<d,@>"),f:s("w<@,@>"),O:s("w<d,p<d>>"),e:s("H<d,d>"),do:s("H<d,@>"),gh:s("H<w<d,@>,@>"),bz:s("H<d,h?>"),fY:s("bF"),eB:s("bc"),bm:s("bG"),b:s("bd"),K:s("v"),eh:s("ch"),co:s("d5<S>"),fl:s("rP"),bQ:s("+()"),eY:s("+column,type(h,X?)"),ei:s("+(v?,v?)"),cz:s("d6"),fy:s("ag"),f2:s("bu"),fP:s("bH"),F:s("bI"),I:s("ck"),q:s("bh"),N:s("d"),gQ:s("d(b_)"),c:s("d(d)"),h7:s("bM"),ci:s("ar"),ak:s("cn"),ga:s("di<N>"),dw:s("b1<d,d>"),gr:s("b1<@,N>"),k:s("eu"),U:s("q<d>"),fj:s("bk<d>"),eJ:s("dl<d>"),h:s("bO"),S:s("bP"),T:s("N"),m:s("an"),C:s("ae"),A:s("aE"),cR:s("cr<v?>"),dj:s("bx<d>"),y:s("k"),Q:s("k(d)"),as:s("k(ae)"),i:s("n2"),z:s("@"),dY:s("@(w<d,@>)"),dO:s("@(d)"),p:s("h"),eH:s("lE<bd>?"),an:s("aM?"),g:s("p<@>?"),Y:s("w<@,@>?"),X:s("v?"),dk:s("d?"),ey:s("d(b_)?"),fs:s("S?"),gS:s("ae?"),M:s("eL?"),b2:s("bV?"),fQ:s("k?"),cD:s("n2?"),h6:s("h?"),ck:s("h(d)?"),bR:s("h?(d)"),cg:s("bA?"),H:s("bA"),n:s("~"),cA:s("~(d,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cl=J.e1.prototype
B.b=J.J.prototype
B.d=J.cR.prototype
B.cm=J.cT.prototype
B.a=J.bq.prototype
B.cn=J.br.prototype
B.co=J.cV.prototype
B.L=A.d2.prototype
B.an=A.bG.prototype
B.aq=J.ef.prototype
B.U=J.cn.prototype
B.aE=new A.dQ(!1)
B.v=new A.c6(B.aE)
B.aF=new A.dQ(!0)
B.a3=new A.c6(B.aF)
B.aG=new A.cc(A.r1(),A.aQ("cc<h>"))
B.x=new A.f7()
B.cL=new A.dV(A.aQ("dV<0&>"))
B.a4=new A.cP(A.aQ("cP<0&>"))
B.aI=new A.ce(A.aQ("ce<@>"))
B.aH=new A.ce(A.aQ("ce<v?>"))
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
B.n=new A.fV()
B.a7=new A.bN(A.aQ("bN<@>"))
B.aQ=new A.bN(A.aQ("bN<v?>"))
B.e=new A.ey()
B.aR=new A.h4()
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
B.b5=new A.i("\u89c4\u5219\u76ee\u6807\u4e0d\u5b58\u5728\uff0c\u8bf7\u9009\u62e9\u6709\u6548\u7684\u8282\u70b9\u6216\u4ee3\u7406\u7ec4",null,null)
B.b6=new A.i("\u8bf7\u586b\u5199\u6709\u6548\u7684\u5c40\u57df\u7f51\u8bbe\u5907\u540d\u79f0\uff0c\u4e0d\u80fd\u9009\u62e9 lo \u6216 Mclash",null,null)
B.b7=new A.i("\u89c4\u5219\u96c6\u540d\u79f0\u5df2\u5b58\u5728",null,null)
B.b8=new A.i("\u8ba2\u9605\u8282\u70b9\u540d\u79f0\u91cd\u590d",null,null)
B.b9=new A.i("\u4ee3\u7406\u7ec4\u6392\u5e8f\u5fc5\u987b\u5305\u542b\u6240\u6709\u73b0\u6709\u4ee3\u7406\u7ec4\u4e14\u4e0d\u80fd\u91cd\u590d",null,null)
B.ba=new A.i("\u6b64\u7ec4\u4ecd\u88ab\u89c4\u5219\u3001\u5176\u4ed6\u4ee3\u7406\u7ec4\u6216\u94fe\u8def\u5f15\u7528\uff0c\u8bf7\u5148\u4fee\u6539\u5f15\u7528",null,null)
B.bb=new A.i("\u8282\u70b9\u94fe\u63a5\u7684 Base64 \u683c\u5f0f\u65e0\u6548",null,null)
B.ad=new A.i("\u8bf7\u5728\u4e24\u4fa7\u5206\u522b\u9009\u62e9\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9",null,null)
B.I=new A.i("\u6240\u9009\u8282\u70b9\u5df2\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",null,null)
B.bc=new A.i("SS \u8282\u70b9\u7f3a\u5c11\u7aef\u53e3",null,null)
B.bd=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 gRPC \u6a21\u5f0f",null,null)
B.be=new A.i("Reality \u516c\u94a5\u683c\u5f0f\u65e0\u6548",null,null)
B.bf=new A.i("",null,null)
B.bg=new A.i("Hysteria2 \u5e26\u5bbd\u53c2\u6570\u65e0\u6548",null,null)
B.bh=new A.i("\u8282\u70b9\u94fe\u63a5\u53c2\u6570\u91cd\u590d",null,null)
B.bi=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 VLESS \u52a0\u5bc6\u7c7b\u578b",null,null)
B.bj=new A.i("\u8bf7\u586b\u5199\u5185\u5d4c\u89c4\u5219\uff0c\u6bcf\u884c\u4e00\u6761",null,null)
B.bk=new A.i("Hysteria2 \u6df7\u6dc6\u5bc6\u7801\u9700\u8981 obfs \u53c2\u6570",null,null)
B.bl=new A.i("MRS \u4ec5\u652f\u6301\u8fdc\u7a0b\u6216\u6587\u4ef6\u6765\u6e90\u7684 domain / ipcidr \u89c4\u5219\u96c6",null,null)
B.bm=new A.i("\u524d\u7f6e\u548c\u540e\u7f6e\u4e0d\u80fd\u9009\u62e9\u540c\u4e00\u4e2a\u8282\u70b9",null,null)
B.bn=new A.i("\u4ee3\u7406\u7ec4\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e5f\u4e0d\u80fd\u5305\u542b\u9017\u53f7\u6216\u6362\u884c",null,null)
B.bo=new A.i("\u673a\u573a\u8282\u70b9\u5f52\u5c5e\u65e0\u6548",null,null)
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
B.ca=new A.i("SS obfs \u6a21\u5f0f\u5fc5\u987b\u662f http \u6216 tls",null,null)
B.cb=new A.i("AnyTLS \u4ec5\u652f\u6301 TLS \u548c TCP",null,null)
B.cc=new A.i("\u6682\u4e0d\u652f\u6301\u6b64 SS \u52a0\u5bc6\u65b9\u6cd5",null,null)
B.cd=new A.i("\u8bf7\u8f93\u5165\u672c\u5730\u6587\u4ef6\u8def\u5f84",null,null)
B.ak=new A.i("\u94fe\u8def\u4ee3\u7406\u7ec4\u7531\u94fe\u5f0f\u8282\u70b9\u7ba1\u7406",null,null)
B.ce=new A.i("SS \u5730\u5740\u6216\u8ba4\u8bc1\u4fe1\u606f\u65e0\u6548",null,null)
B.cf=new A.i("\u8ba2\u9605\u8282\u70b9\u7f3a\u5c11\u540d\u79f0\u6216\u7c7b\u578b",null,null)
B.cg=new A.i("\u8bf7\u8f93\u5165\u6709\u6548\u7684 HTTP / HTTPS \u4e0b\u8f7d\u94fe\u63a5",null,null)
B.ch=new A.i("\u539f\u89c4\u5219\u96c6\u4e0d\u5b58\u5728",null,null)
B.ci=new A.i("\u65e0\u6548\u63a5\u7ba1\u65b9\u5f0f",null,null)
B.cj=new A.i("\u94fe\u63a5\u5305\u542b\u6682\u4e0d\u652f\u6301\u7684\u53c2\u6570\uff0c\u8bf7\u4f7f\u7528 YAML \u914d\u7f6e\u5bfc\u5165",null,null)
B.ck=new A.i("VMess \u94fe\u63a5\u7684 Base64 \u6216 JSON \u683c\u5f0f\u65e0\u6548",null,null)
B.cp=new A.fB(null)
B.cq=new A.fC(null)
B.cr=s(["vless","trojan","ss","hysteria2","hy2","tuic","anytls","socks","socks5","http","https"],t.s)
B.cs=s(["DIRECT","REJECT","REJECT-DROP","PASS","COMPATIBLE"],t.s)
B.ct=s([],t.s)
B.cv={addNode:0,host:1,prependProxy:2,groups:3,rules:4}
B.K=new A.aJ(B.cv,["proxies","proxies","proxies","proxy-groups","rules"],t.w)
B.ao={"\ud83d\ude80 \u56fd\u5185":0,"\ud83c\udf0d \u56fd\u5916":1}
B.q=new A.aJ(B.ao,["# Mclash \u56fd\u5185\u6b63\u5219: ","# Mclash \u56fd\u5916\u6b63\u5219: "],t.w)
B.al=new A.aJ(B.ao,["",""],t.w)
B.ap={}
B.am=new A.aJ(B.ap,[],A.aQ("aJ<d,p<d>>"))
B.cu=new A.aJ(B.ap,[],t.w)
B.cx=new A.bU(-1,-1)
B.cy=new A.cu(-1,null)
B.j=new A.bt("ANY")
B.M=new A.bt("DOUBLE_QUOTED")
B.N=new A.bt("FOLDED")
B.O=new A.bt("LITERAL")
B.h=new A.bt("PLAIN")
B.B=new A.bt("SINGLE_QUOTED")
B.cw={"aes-128-gcm":0,"aes-192-gcm":1,"aes-256-gcm":2,"chacha20-ietf-poly1305":3,"xchacha20-ietf-poly1305":4,"2022-blake3-aes-128-gcm":5,"2022-blake3-aes-256-gcm":6,"2022-blake3-chacha20-poly1305":7,"aes-128-ctr":8,"aes-192-ctr":9,"aes-256-ctr":10,"aes-128-cfb":11,"aes-192-cfb":12,"aes-256-cfb":13,"chacha20-ietf":14,chacha20:15,xchacha20:16,"rc4-md5":17,none:18,"aes-128-ccm":19,"aes-192-ccm":20,"aes-256-ccm":21,"aes-128-gcm-siv":22,"aes-256-gcm-siv":23,"chacha8-ietf-poly1305":24,"xchacha8-ietf-poly1305":25,"lea-128-gcm":26,"lea-192-gcm":27,"lea-256-gcm":28,"rabbit128-poly1305":29,"aegis-128l":30,"aegis-256":31,"aez-384":32,"deoxys-ii-256-128":33}
B.cz=new A.cN(B.cw,34,A.aQ("cN<d>"))
B.cA=new A.X(0,"streamStart")
B.w=new A.X(1,"streamEnd")
B.r=new A.X(10,"flowSequenceEnd")
B.ar=new A.X(11,"flowMappingStart")
B.t=new A.X(12,"flowMappingEnd")
B.u=new A.X(13,"blockEntry")
B.o=new A.X(14,"flowEntry")
B.k=new A.X(15,"key")
B.l=new A.X(16,"value")
B.cB=new A.X(17,"alias")
B.cC=new A.X(18,"anchor")
B.cD=new A.X(19,"tag")
B.P=new A.X(2,"versionDirective")
B.as=new A.X(20,"scalar")
B.Q=new A.X(3,"tagDirective")
B.R=new A.X(4,"documentStart")
B.S=new A.X(5,"documentEnd")
B.T=new A.X(6,"blockSequenceStart")
B.C=new A.X(7,"blockMappingStart")
B.p=new A.X(8,"blockEnd")
B.at=new A.X(9,"flowSequenceStart")
B.cE=A.jZ("o8")
B.cF=A.jZ("v")
B.cG=A.jZ("kD")
B.cH=A.jZ("kE")
B.cI=new A.h3(!1)
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
B.cJ=new A.a0("FLOW_NODE")
B.a2=new A.a0("FLOW_SEQUENCE_ENTRY")
B.aB=new A.a0("FLOW_SEQUENCE_FIRST_ENTRY")
B.H=new A.a0("INDENTLESS_SEQUENCE_ENTRY")
B.aC=new A.a0("STREAM_START")
B.cK=new A.a0("BLOCK_NODE_OR_INDENTLESS_SEQUENCE")
B.aD=new A.a0("FLOW_SEQUENCE_ENTRY_MAPPING_KEY")})();(function staticFields(){$.hn=null
$.aF=A.c([],A.aQ("J<v>"))
$.lQ=null
$.lx=null
$.lw=null
$.n8=null
$.mV=null
$.nh=null
$.iK=null
$.j1=null
$.l4=null
$.hv=A.c([],A.aQ("J<p<v>?>"))
$.lY=""
$.lZ=null
$.mC=null
$.hW=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rO","ns",()=>A.n5("_$dart_dartClosure"))
s($,"rN","ll",()=>A.n5("_$dart_dartClosure_dartJSInterop"))
s($,"tb","nJ",()=>A.c([new J.e2()],A.aQ("J<d8>")))
s($,"rU","nu",()=>A.bj(A.h_({
toString:function(){return"$receiver$"}})))
s($,"rV","nv",()=>A.bj(A.h_({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"rW","nw",()=>A.bj(A.h_(null)))
s($,"rX","nx",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"t_","nA",()=>A.bj(A.h_(void 0)))
s($,"t0","nB",()=>A.bj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"rZ","nz",()=>A.bj(A.lU(null)))
s($,"rY","ny",()=>A.bj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"t2","nD",()=>A.bj(A.lU(void 0)))
s($,"t1","nC",()=>A.bj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"t7","nH",()=>A.lN(4096))
s($,"t5","nF",()=>new A.hC().$0())
s($,"t6","nG",()=>new A.hB().$0())
s($,"t4","ln",()=>new Int8Array(A.pr(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"t3","nE",()=>A.lN(0))
s($,"t8","kk",()=>A.f0(B.cF))
s($,"tc","lp",()=>new A.f8($.lm()))
s($,"rR","nt",()=>new A.eg(A.I("/",!0),A.I("[^/]$",!0),A.I("^/",!0)))
s($,"rT","f5",()=>new A.ez(A.I("[/\\\\]",!0),A.I("[^/\\\\]$",!0),A.I("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.I("^[/\\\\](?![/\\\\])",!0)))
s($,"rS","dN",()=>new A.ex(A.I("/",!0),A.I("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.I("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.I("^/",!0)))
s($,"rQ","lm",()=>A.ou())
s($,"t9","nI",()=>A.I("\\r\\n?|\\n",!0))
r($,"nr","kl",()=>new A.kj())
s($,"tf","lq",()=>A.a4([0,"\\0",7,"\\a",8,"\\b",11,"\\v",12,"\\f",13,"\\r",27,"\\e",133,"\\N",160,"\\_",8232,"\\L",8233,"\\P"],t.p,t.N))
s($,"te","nK",()=>{var q=A.fH($.lq(),t.p,t.N)
q.j(0,9,"\\t")
q.j(0,10,"\\n")
q.j(0,34,'\\"')
q.j(0,47,"\\/")
q.j(0,92,"\\\\")
return q})
s($,"ta","lo",()=>A.I("[^ \\t]",!0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
var s=A.qZ
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
return baseclass.extend({
  call: function(action, content, payload) {
    var result = JSON.parse(globalThis.mclashOverrideCall(action, content, JSON.stringify(payload || {})));
    if (!result.ok) throw new Error(result.error);
    return result.value;
  }
});
