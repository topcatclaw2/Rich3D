(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function rM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hh={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function oM(){if(F_)return ft;F_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,E={};function S(L,j,Ce){this.props=L,this.context=j,this.refs=E,this.updater=Ce||T}S.prototype.isReactComponent={},S.prototype.setState=function(L,j){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,j,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=S.prototype;function z(L,j,Ce){this.props=L,this.context=j,this.refs=E,this.updater=Ce||T}var w=z.prototype=new P;w.constructor=z,N(w,S.prototype),w.isPureReactComponent=!0;var B=Array.isArray;function U(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(L,j,Ce){var Ie=Ce.ref;return{$$typeof:r,type:L,key:j,ref:Ie!==void 0?Ie:null,props:Ce}}function Y(L,j){return O(L.type,j,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Z(L){var j={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ce){return j[Ce]})}var pe=/\/+/g;function de(L,j){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):j.toString(36)}function ie(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(j){L.status==="pending"&&(L.status="fulfilled",L.value=j)},function(j){L.status==="pending"&&(L.status="rejected",L.reason=j)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function I(L,j,Ce,Ie,Be){var ae=typeof L;(ae==="undefined"||ae==="boolean")&&(L=null);var Re=!1;if(L===null)Re=!0;else switch(ae){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(L.$$typeof){case r:case e:Re=!0;break;case _:return Re=L._init,I(Re(L._payload),j,Ce,Ie,Be)}}if(Re)return Be=Be(L),Re=Ie===""?"."+de(L,0):Ie,B(Be)?(Ce="",Re!=null&&(Ce=Re.replace(pe,"$&/")+"/"),I(Be,j,Ce,"",function(nt){return nt})):Be!=null&&(H(Be)&&(Be=Y(Be,Ce+(Be.key==null||L&&L.key===Be.key?"":(""+Be.key).replace(pe,"$&/")+"/")+Re)),j.push(Be)),1;Re=0;var me=Ie===""?".":Ie+":";if(B(L))for(var Pe=0;Pe<L.length;Pe++)Ie=L[Pe],ae=me+de(Ie,Pe),Re+=I(Ie,j,Ce,ae,Be);else if(Pe=M(L),typeof Pe=="function")for(L=Pe.call(L),Pe=0;!(Ie=L.next()).done;)Ie=Ie.value,ae=me+de(Ie,Pe++),Re+=I(Ie,j,Ce,ae,Be);else if(ae==="object"){if(typeof L.then=="function")return I(ie(L),j,Ce,Ie,Be);throw j=String(L),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Re}function k(L,j,Ce){if(L==null)return L;var Ie=[],Be=0;return I(L,Ie,"","",function(ae){return j.call(Ce,ae,Be++)}),Ie}function re(L){if(L._status===-1){var j=L._result;j=j(),j.then(function(Ce){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ce)},function(Ce){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ce)}),L._status===-1&&(L._status=0,L._result=j)}if(L._status===1)return L._result.default;throw L._result}var Se=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},be={map:k,forEach:function(L,j,Ce){k(L,function(){j.apply(this,arguments)},Ce)},count:function(L){var j=0;return k(L,function(){j++}),j},toArray:function(L){return k(L,function(j){return j})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ft.Activity=x,ft.Children=be,ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=z,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ft.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ft.cache=function(L){return function(){return L.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(L,j,Ce){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ie=N({},L.props),Be=L.key;if(j!=null)for(ae in j.key!==void 0&&(Be=""+j.key),j)!b.call(j,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&j.ref===void 0||(Ie[ae]=j[ae]);var ae=arguments.length-2;if(ae===1)Ie.children=Ce;else if(1<ae){for(var Re=Array(ae),me=0;me<ae;me++)Re[me]=arguments[me+2];Ie.children=Re}return O(L.type,Be,Ie)},ft.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ft.createElement=function(L,j,Ce){var Ie,Be={},ae=null;if(j!=null)for(Ie in j.key!==void 0&&(ae=""+j.key),j)b.call(j,Ie)&&Ie!=="key"&&Ie!=="__self"&&Ie!=="__source"&&(Be[Ie]=j[Ie]);var Re=arguments.length-2;if(Re===1)Be.children=Ce;else if(1<Re){for(var me=Array(Re),Pe=0;Pe<Re;Pe++)me[Pe]=arguments[Pe+2];Be.children=me}if(L&&L.defaultProps)for(Ie in Re=L.defaultProps,Re)Be[Ie]===void 0&&(Be[Ie]=Re[Ie]);return O(L,ae,Be)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(L){return{$$typeof:p,render:L}},ft.isValidElement=H,ft.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:re}},ft.memo=function(L,j){return{$$typeof:d,type:L,compare:j===void 0?null:j}},ft.startTransition=function(L){var j=F.T,Ce={};F.T=Ce;try{var Ie=L(),Be=F.S;Be!==null&&Be(Ce,Ie),typeof Ie=="object"&&Ie!==null&&typeof Ie.then=="function"&&Ie.then(U,Se)}catch(ae){Se(ae)}finally{j!==null&&Ce.types!==null&&(j.types=Ce.types),F.T=j}},ft.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ft.use=function(L){return F.H.use(L)},ft.useActionState=function(L,j,Ce){return F.H.useActionState(L,j,Ce)},ft.useCallback=function(L,j){return F.H.useCallback(L,j)},ft.useContext=function(L){return F.H.useContext(L)},ft.useDebugValue=function(){},ft.useDeferredValue=function(L,j){return F.H.useDeferredValue(L,j)},ft.useEffect=function(L,j){return F.H.useEffect(L,j)},ft.useEffectEvent=function(L){return F.H.useEffectEvent(L)},ft.useId=function(){return F.H.useId()},ft.useImperativeHandle=function(L,j,Ce){return F.H.useImperativeHandle(L,j,Ce)},ft.useInsertionEffect=function(L,j){return F.H.useInsertionEffect(L,j)},ft.useLayoutEffect=function(L,j){return F.H.useLayoutEffect(L,j)},ft.useMemo=function(L,j){return F.H.useMemo(L,j)},ft.useOptimistic=function(L,j){return F.H.useOptimistic(L,j)},ft.useReducer=function(L,j,Ce){return F.H.useReducer(L,j,Ce)},ft.useRef=function(L){return F.H.useRef(L)},ft.useState=function(L){return F.H.useState(L)},ft.useSyncExternalStore=function(L,j,Ce){return F.H.useSyncExternalStore(L,j,Ce)},ft.useTransition=function(){return F.H.useTransition()},ft.version="19.2.8",ft}var H_;function Np(){return H_||(H_=1,Hh.exports=oM()),Hh.exports}var at=Np();const D=rM(at);var Gh={exports:{}},ol={},Vh={exports:{}},kh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function lM(){return G_||(G_=1,(function(r){function e(I,k){var re=I.length;I.push(k);e:for(;0<re;){var Se=re-1>>>1,be=I[Se];if(0<l(be,k))I[Se]=k,I[re]=be,re=Se;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var k=I[0],re=I.pop();if(re!==k){I[0]=re;e:for(var Se=0,be=I.length,L=be>>>1;Se<L;){var j=2*(Se+1)-1,Ce=I[j],Ie=j+1,Be=I[Ie];if(0>l(Ce,re))Ie<be&&0>l(Be,Ce)?(I[Se]=Be,I[Ie]=re,Se=Ie):(I[Se]=Ce,I[j]=re,Se=j);else if(Ie<be&&0>l(Be,re))I[Se]=Be,I[Ie]=re,Se=Ie;else break e}}return k}function l(I,k){var re=I.sortIndex-k.sortIndex;return re!==0?re:I.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,x=null,g=3,M=!1,T=!1,N=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var k=i(d);k!==null;){if(k.callback===null)s(d);else if(k.startTime<=I)s(d),k.sortIndex=k.expirationTime,e(m,k);else break;k=i(d)}}function B(I){if(N=!1,w(I),!T)if(i(m)!==null)T=!0,U||(U=!0,Z());else{var k=i(d);k!==null&&ie(B,k.startTime-I)}}var U=!1,F=-1,b=5,O=-1;function Y(){return E?!0:!(r.unstable_now()-O<b)}function H(){if(E=!1,U){var I=r.unstable_now();O=I;var k=!0;try{e:{T=!1,N&&(N=!1,P(F),F=-1),M=!0;var re=g;try{t:{for(w(I),x=i(m);x!==null&&!(x.expirationTime>I&&Y());){var Se=x.callback;if(typeof Se=="function"){x.callback=null,g=x.priorityLevel;var be=Se(x.expirationTime<=I);if(I=r.unstable_now(),typeof be=="function"){x.callback=be,w(I),k=!0;break t}x===i(m)&&s(m),w(I)}else s(m);x=i(m)}if(x!==null)k=!0;else{var L=i(d);L!==null&&ie(B,L.startTime-I),k=!1}}break e}finally{x=null,g=re,M=!1}k=void 0}}finally{k?Z():U=!1}}}var Z;if(typeof z=="function")Z=function(){z(H)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,de=pe.port2;pe.port1.onmessage=H,Z=function(){de.postMessage(null)}}else Z=function(){S(H,0)};function ie(I,k){F=S(function(){I(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var re=g;g=k;try{return I()}finally{g=re}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var re=g;g=I;try{return k()}finally{g=re}},r.unstable_scheduleCallback=function(I,k,re){var Se=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Se+re:Se):re=Se,I){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=re+be,I={id:_++,callback:k,priorityLevel:I,startTime:re,expirationTime:be,sortIndex:-1},re>Se?(I.sortIndex=re,e(d,I),i(m)===null&&I===i(d)&&(N?(P(F),F=-1):N=!0,ie(B,re-Se))):(I.sortIndex=be,e(m,I),T||M||(T=!0,U||(U=!0,Z()))),I},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(I){var k=g;return function(){var re=g;g=k;try{return I.apply(this,arguments)}finally{g=re}}}})(kh)),kh}var V_;function cM(){return V_||(V_=1,Vh.exports=lM()),Vh.exports}var Xh={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function uM(){if(k_)return Vn;k_=1;var r=Np();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,_)},Vn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Vn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Vn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Vn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Vn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Vn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Vn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Vn.requestFormReset=function(m){s.d.r(m)},Vn.unstable_batchedUpdates=function(m,d){return m(d)},Vn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Vn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Vn.version="19.2.8",Vn}var X_;function fM(){if(X_)return Xh.exports;X_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xh.exports=uM(),Xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function hM(){if(W_)return ol;W_=1;var r=cM(),e=Np(),i=fM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case B:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var ie=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function L(t){return{current:t}}function j(t){0>be||(t.current=Se[be],Se[be]=null,be--)}function Ce(t,n){be++,Se[be]=t.current,t.current=n}var Ie=L(null),Be=L(null),ae=L(null),Re=L(null);function me(t,n){switch(Ce(ae,n),Ce(Be,t),Ce(Ie,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?l_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=l_(n),t=c_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Ie),Ce(Ie,t)}function Pe(){j(Ie),j(Be),j(ae)}function nt(t){t.memoizedState!==null&&Ce(Re,t);var n=Ie.current,a=c_(n,t.type);n!==a&&(Ce(Be,t),Ce(Ie,a))}function je(t){Be.current===t&&(j(Ie),j(Be)),Re.current===t&&(j(Re),il._currentValue=re)}var Ut,ee;function Ue(t){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+ee}var He=!1;function tt(t,n){if(!t||He)return"";He=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(ge){var he=ge}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(ge){he=ge}t.call(Ae.prototype)}}else{try{throw Error()}catch(ge){he=ge}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(ge){if(ge&&he&&typeof ge.stack=="string")return[ge.stack,he.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var G=y.split(`
`),le=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===le.length)for(o=G.length-1,u=le.length-1;1<=o&&0<=u&&G[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==le[u]){var Ee=`
`+G[o].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=o&&0<=u);break}}}finally{He=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ue(a):""}function dt(t,n){switch(t.tag){case 26:case 27:case 5:return Ue(t.type);case 16:return Ue("Lazy");case 13:return t.child!==n&&n!==null?Ue("Suspense Fallback"):Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return Ue("Activity");default:return""}}function Lt(t){try{var n="",a=null;do n+=dt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,nn=r.unstable_scheduleCallback,zt=r.unstable_cancelCallback,an=r.unstable_shouldYield,K=r.unstable_requestPaint,Ot=r.unstable_now,ve=r.unstable_getCurrentPriorityLevel,R=r.unstable_ImmediatePriority,v=r.unstable_UserBlockingPriority,V=r.unstable_NormalPriority,W=r.unstable_LowPriority,J=r.unstable_IdlePriority,_e=r.log,ye=r.unstable_setDisableYieldValue,ne=null,se=null;function xe(t){if(typeof _e=="function"&&ye(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(ne,t)}catch{}}var Ne=Math.clz32?Math.clz32:Ye,Le=Math.log,De=Math.LN2;function Ye(t){return t>>>=0,t===0?32:31-(Le(t)/De|0)|0}var Ke=256,lt=262144,X=4194304;function Oe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Oe(o):(y&=C,y!==0?u=Oe(y):a||(a=C&~t,a!==0&&(u=Oe(a))))):(C=o&~f,C!==0?u=Oe(C):y!==0?u=Oe(y):a||(a=o&~t,a!==0&&(u=Oe(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,le=t.hiddenUpdates;for(a=y&~a;0<a;){var Ee=31-Ne(a),Ae=1<<Ee;C[Ee]=0,G[Ee]=-1;var he=le[Ee];if(he!==null)for(le[Ee]=null,Ee=0;Ee<he.length;Ee++){var ge=he[Ee];ge!==null&&(ge.lane&=-536870913)}a&=~Ae}o!==0&&Bt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Bt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ne(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function oi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ne(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function li(t,n){var a=n&-n;return a=(a&42)!==0?1:_o(a),(a&(t.suspendedLanes|n))!==0?0:a}function _o(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yo(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:U_(t.type))}function sr(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var Wi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Wi,On="__reactProps$"+Wi,Qn="__reactContainer$"+Wi,As="__reactEvents$"+Wi,Ul="__reactListeners$"+Wi,Ll="__reactHandles$"+Wi,Rs="__reactResources$"+Wi,Fa="__reactMarker$"+Wi;function Ha(t){delete t[gn],delete t[On],delete t[As],delete t[Ul],delete t[Ll]}function oa(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Qn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=g_(t);t!==null;){if(a=t[gn])return a;t=g_(t)}return n}t=a,a=t.parentNode}return null}function la(t){if(t=t[gn]||t[Qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ga(t){var n=t[Rs];return n||(n=t[Rs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[Fa]=!0}var Ol=new Set,A={};function Q(t,n){fe(t,n),fe(t+"Capture",n)}function fe(t,n){for(A[t]=n,t=0;t<n.length;t++)Ol.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},Ve={};function We(t){return Qt.call(Ve,t)?!0:Qt.call(ue,t)?!1:ce.test(t)?Ve[t]=!0:(ue[t]=!0,!1)}function Fe(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function it(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=it(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Ht(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(t,n,a,o,u,f,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?yt(t,y,st(n)):a!=null?yt(t,y,st(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+st(C):t.removeAttribute("name")}function Gn(t,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){wt(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),wt(t)}function yt(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Oi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ie(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),wt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Pi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&on(t,f,n[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var Iu=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function om(t){var n=la(t);if(n&&(t=n.stateNode)){var a=t[On]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[On]||null;if(!u)throw Error(s(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&rn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var Bu=!1;function lm(t,n,a){if(Bu)return t(n,a);Bu=!0;try{var o=t(n);return o}finally{if(Bu=!1,(rr!==null||or!==null)&&(Sc(),rr&&(n=rr,t=or,or=rr=null,om(n),t)))for(n=0;n<t.length;n++)om(t[n])}}function xo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[On]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(ua)try{var So={};Object.defineProperty(So,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Fu=!1}var ka=null,Hu=null,Pl=null;function cm(){if(Pl)return Pl;var t,n=Hu,a=n.length,o,u="value"in ka?ka.value:ka.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Pl=u.slice(t,1<o?1-o:void 0)}function Il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function um(){return!1}function Jn(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?zl:um,this.isPropagationStopped=um,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Jn(Ds),Mo=x({},Ds,{view:0,detail:0}),ax=Jn(Mo),Gu,Vu,Eo,Fl=x({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Gu=t.screenX-Eo.screenX,Vu=t.screenY-Eo.screenY):Vu=Gu=0,Eo=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),fm=Jn(Fl),sx=x({},Fl,{dataTransfer:0}),rx=Jn(sx),ox=x({},Mo,{relatedTarget:0}),ku=Jn(ox),lx=x({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Jn(lx),ux=x({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=Jn(ux),hx=x({},Ds,{data:0}),hm=Jn(hx),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mx[t])?!!n[t]:!1}function Xu(){return gx}var _x=x({},Mo,{key:function(t){if(t.key){var n=dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vx=Jn(_x),yx=x({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Jn(yx),xx=x({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Sx=Jn(xx),Mx=x({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Jn(Mx),bx=x({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Jn(bx),Ax=x({},Ds,{newState:0,oldState:0}),Rx=Jn(Ax),Cx=[9,13,27,32],Wu=ua&&"CompositionEvent"in window,bo=null;ua&&"documentMode"in document&&(bo=document.documentMode);var wx=ua&&"TextEvent"in window&&!bo,pm=ua&&(!Wu||bo&&8<bo&&11>=bo),mm=" ",gm=!1;function _m(t,n){switch(t){case"keyup":return Cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function Dx(t,n){switch(t){case"compositionend":return vm(n);case"keypress":return n.which!==32?null:(gm=!0,mm);case"textInput":return t=n.data,t===mm&&gm?null:t;default:return null}}function Nx(t,n){if(lr)return t==="compositionend"||!Wu&&_m(t,n)?(t=cm(),Pl=Hu=ka=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pm&&n.locale!=="ko"?null:n.data;default:return null}}var Ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ux[t.type]:n==="textarea"}function xm(t,n,a,o){rr?or?or.push(o):or=[o]:rr=o,n=Cc(n,"onChange"),0<n.length&&(a=new Bl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var To=null,Ao=null;function Lx(t){n_(t,0)}function Hl(t){var n=Cs(t);if(rn(n))return t}function Sm(t,n){if(t==="change")return n}var Mm=!1;if(ua){var Yu;if(ua){var qu="oninput"in document;if(!qu){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),qu=typeof Em.oninput=="function"}Yu=qu}else Yu=!1;Mm=Yu&&(!document.documentMode||9<document.documentMode)}function bm(){To&&(To.detachEvent("onpropertychange",Tm),Ao=To=null)}function Tm(t){if(t.propertyName==="value"&&Hl(Ao)){var n=[];xm(n,Ao,t,zu(t)),lm(Lx,n)}}function Ox(t,n,a){t==="focusin"?(bm(),To=n,Ao=a,To.attachEvent("onpropertychange",Tm)):t==="focusout"&&bm()}function Px(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ao)}function Ix(t,n){if(t==="click")return Hl(n)}function zx(t,n){if(t==="input"||t==="change")return Hl(n)}function Bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Bx;function Ro(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,n){var a=Am(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Am(a)}}function Cm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Zu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Fx=ua&&"documentMode"in document&&11>=document.documentMode,cr=null,Ku=null,Co=null,Qu=!1;function Dm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||cr==null||cr!==Jt(o)||(o=cr,"selectionStart"in o&&Zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Co&&Ro(Co,o)||(Co=o,o=Cc(Ku,"onSelect"),0<o.length&&(n=new Bl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=cr)))}function Ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},Ju={},Nm={};ua&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Us(t){if(Ju[t])return Ju[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Nm)return Ju[t]=n[a];return t}var Um=Us("animationend"),Lm=Us("animationiteration"),Om=Us("animationstart"),Hx=Us("transitionrun"),Gx=Us("transitionstart"),Vx=Us("transitioncancel"),Pm=Us("transitionend"),Im=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function Ii(t,n){Im.set(t,n),Q(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],fr=0,$u=0;function Vl(){for(var t=fr,n=$u=fr=0;n<t;){var a=Mi[n];Mi[n++]=null;var o=Mi[n];Mi[n++]=null;var u=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&zm(a,u,f)}}function kl(t,n,a,o){Mi[fr++]=t,Mi[fr++]=n,Mi[fr++]=a,Mi[fr++]=o,$u|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ef(t,n,a,o){return kl(t,n,a,o),Xl(t)}function Ls(t,n){return kl(t,null,null,n),Xl(t)}function zm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ne(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Xl(t){if(50<Qo)throw Qo=0,uh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hr={};function kx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,n,a,o){return new kx(t,n,a,o)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var a=t.alternate;return a===null?(a=hi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")tf(t)&&(y=1);else if(typeof t=="string")y=ZS(t,a,Ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=hi(31,a,n,u),t.elementType=O,t.lanes=f,t;case N:return Os(a.children,u,f,n);case E:y=8,u|=24;break;case S:return t=hi(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case B:return t=hi(13,a,n,u),t.elementType=B,t.lanes=f,t;case U:return t=hi(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:y=10;break e;case P:y=9;break e;case w:y=11;break e;case F:y=14;break e;case b:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=hi(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Os(t,n,a,o){return t=hi(7,t,o,n),t.lanes=a,t}function nf(t,n,a){return t=hi(6,t,null,n),t.lanes=a,t}function Fm(t){var n=hi(18,null,null,0);return n.stateNode=t,n}function af(t,n,a){return n=hi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hm=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=Hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Lt(n)},Hm.set(t,n),n)}return{value:t,source:n,stack:Lt(n)}}var dr=[],pr=0,Yl=null,wo=0,bi=[],Ti=0,Xa=null,qi=1,Zi="";function ha(t,n){dr[pr++]=wo,dr[pr++]=Yl,Yl=t,wo=n}function Gm(t,n,a){bi[Ti++]=qi,bi[Ti++]=Zi,bi[Ti++]=Xa,Xa=t;var o=qi;t=Zi;var u=32-Ne(o)-1;o&=~(1<<u),a+=1;var f=32-Ne(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,qi=1<<32-Ne(n)+u|a<<u|o,Zi=f+t}else qi=1<<f|a<<u|o,Zi=t}function sf(t){t.return!==null&&(ha(t,1),Gm(t,1,0))}function rf(t){for(;t===Yl;)Yl=dr[--pr],dr[pr]=null,wo=dr[--pr],dr[pr]=null;for(;t===Xa;)Xa=bi[--Ti],bi[Ti]=null,Zi=bi[--Ti],bi[Ti]=null,qi=bi[--Ti],bi[Ti]=null}function Vm(t,n){bi[Ti++]=qi,bi[Ti++]=Zi,bi[Ti++]=Xa,qi=n.id,Zi=n.overflow,Xa=t}var Pn=null,$t=null,At=!1,Wa=null,Ai=!1,of=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Do(Ei(n,t)),of}function km(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[On]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)St(jo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Oi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||r_(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||Ya(t,!0)}function Xm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Pn=Pn.return}}function mr(t){if(t!==Pn)return!1;if(!At)return Xm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Th(t.type,t.memoizedProps)),a=!a),a&&$t&&Ya(t),Xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=m_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=m_(t)}else n===27?(n=$t,rs(t.type)?(t=Dh,Dh=null,$t=t):$t=n):$t=Pn?Ci(t.stateNode.nextSibling):null;return!0}function Ps(){$t=Pn=null,At=!1}function lf(){var t=Wa;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Wa=null),t}function Do(t){Wa===null?Wa=[t]:Wa.push(t)}var cf=L(null),Is=null,da=null;function qa(t,n,a){Ce(cf,n._currentValue),n._currentValue=a}function pa(t){t._currentValue=cf.current,j(cf)}function uf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ff(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),uf(f.return,a,t),o||(y=null);break e}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),uf(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function gr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;fi(u.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(u===Re.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}u=u.return}t!==null&&ff(n,t,a,o),n.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Is=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Wm(Is,t)}function Zl(t,n){return Is===null&&zs(t),Wm(t,n)}function Wm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(t===null)throw Error(s(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Wx=r.unstable_scheduleCallback,Yx=r.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new Xx,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&Wx(Yx,function(){t.controller.abort()})}var Uo=null,df=0,_r=0,vr=null;function qx(t,n){if(Uo===null){var a=Uo=[];df=0,_r=gh(),vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return df++,n.then(Ym,Ym),n}function Ym(){if(--df===0&&Uo!==null){vr!==null&&(vr.status="fulfilled");var t=Uo;Uo=null,_r=0,vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qm=I.S;I.S=function(t,n){Dg=Ot(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qx(t,n),qm!==null&&qm(t,n)};var Bs=L(null);function pf(){var t=Bs.current;return t!==null?t:jt.pooledCache}function Kl(t,n){n===null?Ce(Bs,Bs.current):Ce(Bs,n.pool)}function Zm(){var t=pf();return t===null?null:{parent:vn._currentValue,pool:t}}var yr=Error(s(460)),mf=Error(s(474)),Ql=Error(s(542)),Jl={then:function(){}};function Km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jm(t),t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jm(t),t}throw Hs=n,yr}}function Fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hs=a,yr):a}}var Hs=null;function Jm(){if(Hs===null)throw Error(s(459));var t=Hs;return Hs=null,t}function jm(t){if(t===yr||t===Ql)throw Error(s(483))}var xr=null,Lo=0;function jl(t){var n=Lo;return Lo+=1,xr===null&&(xr=[]),Qm(xr,t,n)}function Oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $m(t){function n(te,q){if(t){var oe=te.deletions;oe===null?(te.deletions=[q],te.flags|=16):oe.push(q)}}function a(te,q){if(!t)return null;for(;q!==null;)n(te,q),q=q.sibling;return null}function o(te){for(var q=new Map;te!==null;)te.key!==null?q.set(te.key,te):q.set(te.index,te),te=te.sibling;return q}function u(te,q){return te=fa(te,q),te.index=0,te.sibling=null,te}function f(te,q,oe){return te.index=oe,t?(oe=te.alternate,oe!==null?(oe=oe.index,oe<q?(te.flags|=67108866,q):oe):(te.flags|=67108866,q)):(te.flags|=1048576,q)}function y(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function C(te,q,oe,Te){return q===null||q.tag!==6?(q=nf(oe,te.mode,Te),q.return=te,q):(q=u(q,oe),q.return=te,q)}function G(te,q,oe,Te){var rt=oe.type;return rt===N?Ee(te,q,oe.props.children,Te,oe.key):q!==null&&(q.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&Fs(rt)===q.type)?(q=u(q,oe.props),Oo(q,oe),q.return=te,q):(q=Wl(oe.type,oe.key,oe.props,null,te.mode,Te),Oo(q,oe),q.return=te,q)}function le(te,q,oe,Te){return q===null||q.tag!==4||q.stateNode.containerInfo!==oe.containerInfo||q.stateNode.implementation!==oe.implementation?(q=af(oe,te.mode,Te),q.return=te,q):(q=u(q,oe.children||[]),q.return=te,q)}function Ee(te,q,oe,Te,rt){return q===null||q.tag!==7?(q=Os(oe,te.mode,Te,rt),q.return=te,q):(q=u(q,oe),q.return=te,q)}function Ae(te,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=nf(""+q,te.mode,oe),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return oe=Wl(q.type,q.key,q.props,null,te.mode,oe),Oo(oe,q),oe.return=te,oe;case T:return q=af(q,te.mode,oe),q.return=te,q;case b:return q=Fs(q),Ae(te,q,oe)}if(ie(q)||Z(q))return q=Os(q,te.mode,oe,null),q.return=te,q;if(typeof q.then=="function")return Ae(te,jl(q),oe);if(q.$$typeof===z)return Ae(te,Zl(te,q),oe);$l(te,q)}return null}function he(te,q,oe,Te){var rt=q!==null?q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return rt!==null?null:C(te,q,""+oe,Te);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===rt?G(te,q,oe,Te):null;case T:return oe.key===rt?le(te,q,oe,Te):null;case b:return oe=Fs(oe),he(te,q,oe,Te)}if(ie(oe)||Z(oe))return rt!==null?null:Ee(te,q,oe,Te,null);if(typeof oe.then=="function")return he(te,q,jl(oe),Te);if(oe.$$typeof===z)return he(te,q,Zl(te,oe),Te);$l(te,oe)}return null}function ge(te,q,oe,Te,rt){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return te=te.get(oe)||null,C(q,te,""+Te,rt);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case M:return te=te.get(Te.key===null?oe:Te.key)||null,G(q,te,Te,rt);case T:return te=te.get(Te.key===null?oe:Te.key)||null,le(q,te,Te,rt);case b:return Te=Fs(Te),ge(te,q,oe,Te,rt)}if(ie(Te)||Z(Te))return te=te.get(oe)||null,Ee(q,te,Te,rt,null);if(typeof Te.then=="function")return ge(te,q,oe,jl(Te),rt);if(Te.$$typeof===z)return ge(te,q,oe,Zl(q,Te),rt);$l(q,Te)}return null}function Je(te,q,oe,Te){for(var rt=null,Dt=null,et=q,gt=q=0,bt=null;et!==null&&gt<oe.length;gt++){et.index>gt?(bt=et,et=null):bt=et.sibling;var Nt=he(te,et,oe[gt],Te);if(Nt===null){et===null&&(et=bt);break}t&&et&&Nt.alternate===null&&n(te,et),q=f(Nt,q,gt),Dt===null?rt=Nt:Dt.sibling=Nt,Dt=Nt,et=bt}if(gt===oe.length)return a(te,et),At&&ha(te,gt),rt;if(et===null){for(;gt<oe.length;gt++)et=Ae(te,oe[gt],Te),et!==null&&(q=f(et,q,gt),Dt===null?rt=et:Dt.sibling=et,Dt=et);return At&&ha(te,gt),rt}for(et=o(et);gt<oe.length;gt++)bt=ge(et,te,gt,oe[gt],Te),bt!==null&&(t&&bt.alternate!==null&&et.delete(bt.key===null?gt:bt.key),q=f(bt,q,gt),Dt===null?rt=bt:Dt.sibling=bt,Dt=bt);return t&&et.forEach(function(fs){return n(te,fs)}),At&&ha(te,gt),rt}function ct(te,q,oe,Te){if(oe==null)throw Error(s(151));for(var rt=null,Dt=null,et=q,gt=q=0,bt=null,Nt=oe.next();et!==null&&!Nt.done;gt++,Nt=oe.next()){et.index>gt?(bt=et,et=null):bt=et.sibling;var fs=he(te,et,Nt.value,Te);if(fs===null){et===null&&(et=bt);break}t&&et&&fs.alternate===null&&n(te,et),q=f(fs,q,gt),Dt===null?rt=fs:Dt.sibling=fs,Dt=fs,et=bt}if(Nt.done)return a(te,et),At&&ha(te,gt),rt;if(et===null){for(;!Nt.done;gt++,Nt=oe.next())Nt=Ae(te,Nt.value,Te),Nt!==null&&(q=f(Nt,q,gt),Dt===null?rt=Nt:Dt.sibling=Nt,Dt=Nt);return At&&ha(te,gt),rt}for(et=o(et);!Nt.done;gt++,Nt=oe.next())Nt=ge(et,te,gt,Nt.value,Te),Nt!==null&&(t&&Nt.alternate!==null&&et.delete(Nt.key===null?gt:Nt.key),q=f(Nt,q,gt),Dt===null?rt=Nt:Dt.sibling=Nt,Dt=Nt);return t&&et.forEach(function(sM){return n(te,sM)}),At&&ha(te,gt),rt}function Zt(te,q,oe,Te){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var rt=oe.key;q!==null;){if(q.key===rt){if(rt=oe.type,rt===N){if(q.tag===7){a(te,q.sibling),Te=u(q,oe.props.children),Te.return=te,te=Te;break e}}else if(q.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&Fs(rt)===q.type){a(te,q.sibling),Te=u(q,oe.props),Oo(Te,oe),Te.return=te,te=Te;break e}a(te,q);break}else n(te,q);q=q.sibling}oe.type===N?(Te=Os(oe.props.children,te.mode,Te,oe.key),Te.return=te,te=Te):(Te=Wl(oe.type,oe.key,oe.props,null,te.mode,Te),Oo(Te,oe),Te.return=te,te=Te)}return y(te);case T:e:{for(rt=oe.key;q!==null;){if(q.key===rt)if(q.tag===4&&q.stateNode.containerInfo===oe.containerInfo&&q.stateNode.implementation===oe.implementation){a(te,q.sibling),Te=u(q,oe.children||[]),Te.return=te,te=Te;break e}else{a(te,q);break}else n(te,q);q=q.sibling}Te=af(oe,te.mode,Te),Te.return=te,te=Te}return y(te);case b:return oe=Fs(oe),Zt(te,q,oe,Te)}if(ie(oe))return Je(te,q,oe,Te);if(Z(oe)){if(rt=Z(oe),typeof rt!="function")throw Error(s(150));return oe=rt.call(oe),ct(te,q,oe,Te)}if(typeof oe.then=="function")return Zt(te,q,jl(oe),Te);if(oe.$$typeof===z)return Zt(te,q,Zl(te,oe),Te);$l(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,q!==null&&q.tag===6?(a(te,q.sibling),Te=u(q,oe),Te.return=te,te=Te):(a(te,q),Te=nf(oe,te.mode,Te),Te.return=te,te=Te),y(te)):a(te,q)}return function(te,q,oe,Te){try{Lo=0;var rt=Zt(te,q,oe,Te);return xr=null,rt}catch(et){if(et===yr||et===Ql)throw et;var Dt=hi(29,et,null,te.mode);return Dt.lanes=Te,Dt.return=te,Dt}finally{}}}var Gs=$m(!0),e0=$m(!1),Za=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Xl(t),zm(t,null,a),n}return kl(t,o,n,a),Xl(t)}function Po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,oi(t,a)}}function vf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yf=!1;function Io(){if(yf){var t=vr;if(t!==null)throw t}}function zo(t,n,a,o){yf=!1;var u=t.updateQueue;Za=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,le=G.next;G.next=null,y===null?f=le:y.next=le,y=G;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,C=Ee.lastBaseUpdate,C!==y&&(C===null?Ee.firstBaseUpdate=le:C.next=le,Ee.lastBaseUpdate=G))}if(f!==null){var Ae=u.baseState;y=0,Ee=le=G=null,C=f;do{var he=C.lane&-536870913,ge=he!==C.lane;if(ge?(Et&he)===he:(o&he)===he){he!==0&&he===_r&&(yf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Je=t,ct=C;he=n;var Zt=a;switch(ct.tag){case 1:if(Je=ct.payload,typeof Je=="function"){Ae=Je.call(Zt,Ae,he);break e}Ae=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ct.payload,he=typeof Je=="function"?Je.call(Zt,Ae,he):Je,he==null)break e;Ae=x({},Ae,he);break e;case 2:Za=!0}}he=C.callback,he!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[he]:ge.push(he))}else ge={lane:he,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Ee===null?(le=Ee=ge,G=Ae):Ee=Ee.next=ge,y|=he;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ge=C,C=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);Ee===null&&(G=Ae),u.baseState=G,u.firstBaseUpdate=le,u.lastBaseUpdate=Ee,f===null&&(u.shared.lanes=0),ts|=y,t.lanes=y,t.memoizedState=Ae}}function t0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function n0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)t0(a[t],n)}var Sr=L(null),ec=L(0);function i0(t,n){t=Ea,Ce(ec,t),Ce(Sr,n),Ea=t|n.baseLanes}function xf(){Ce(ec,Ea),Ce(Sr,Sr.current)}function Sf(){Ea=ec.current,j(Sr),j(ec)}var di=L(null),Ri=null;function Ja(t){var n=t.alternate;Ce(pn,pn.current&1),Ce(di,t),Ri===null&&(n===null||Sr.current!==null||n.memoizedState!==null)&&(Ri=t)}function Mf(t){Ce(pn,pn.current),Ce(di,t),Ri===null&&(Ri=t)}function a0(t){t.tag===22?(Ce(pn,pn.current),Ce(di,t),Ri===null&&(Ri=t)):ja()}function ja(){Ce(pn,pn.current),Ce(di,di.current)}function pi(t){j(di),Ri===t&&(Ri=null),j(pn)}var pn=L(0);function tc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ch(a)||wh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,mt=null,Yt=null,yn=null,nc=!1,Mr=!1,Vs=!1,ic=0,Bo=0,Er=null,Kx=0;function fn(){throw Error(s(321))}function Ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function bf(t,n,a,o,u,f){return ma=f,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?G0:Ff,Vs=!1,f=a(o,u),Vs=!1,Mr&&(f=r0(n,a,o,u)),s0(t),f}function s0(t){I.H=Go;var n=Yt!==null&&Yt.next!==null;if(ma=0,yn=Yt=mt=null,nc=!1,Bo=0,Er=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&ql(t)&&(xn=!0))}function r0(t,n,a,o){mt=t;var u=0;do{if(Mr&&(Er=null),Bo=0,Mr=!1,25<=u)throw Error(s(301));if(u+=1,yn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=V0,f=n(a,o)}while(Mr);return f}function Qx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(mt.flags|=1024),n}function Tf(){var t=ic!==0;return ic=0,t}function Af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Rf(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}ma=0,yn=Yt=mt=null,Mr=!1,Bo=ic=0,Er=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?mt.memoizedState=yn=t:yn=yn.next=t,yn}function mn(){if(Yt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=yn===null?mt.memoizedState:yn.next;if(n!==null)yn=n,Yt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},yn===null?mt.memoizedState=yn=t:yn=yn.next=t}return yn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Bo;return Bo+=1,Er===null&&(Er=[]),t=Qm(Er,t,n),n=mt,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?G0:Ff),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===z)return In(t)}throw Error(s(438,String(t)))}function Cf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ac(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function ga(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=mn();return wf(n,Yt,t)}function wf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=y=null,G=null,le=n,Ee=!1;do{var Ae=le.lane&-536870913;if(Ae!==le.lane?(Et&Ae)===Ae:(ma&Ae)===Ae){var he=le.revertLane;if(he===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Ae===_r&&(Ee=!0);else if((ma&he)===he){le=le.next,he===_r&&(Ee=!0);continue}else Ae={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(C=G=Ae,y=f):G=G.next=Ae,mt.lanes|=he,ts|=he;Ae=le.action,Vs&&a(f,Ae),f=le.hasEagerState?le.eagerState:a(f,Ae)}else he={lane:Ae,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(C=G=he,y=f):G=G.next=he,mt.lanes|=Ae,ts|=Ae;le=le.next}while(le!==null&&le!==n);if(G===null?y=f:G.next=C,!fi(f,t.memoizedState)&&(xn=!0,Ee&&(a=vr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Df(t){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);fi(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function o0(t,n,a){var o=mt,u=mn(),f=At;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!fi((Yt||u).memoizedState,a);if(y&&(u.memoizedState=a,xn=!0),u=u.queue,Lf(u0.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,br(9,{destroy:void 0},c0.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(ma&127)!==0||l0(o,n,a)}return a}function l0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=ac(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function c0(t,n,a,o){n.value=a,n.getSnapshot=o,f0(n)&&h0(t)}function u0(t,n,a){return a(function(){f0(n)&&h0(t)})}function f0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function h0(t){var n=Ls(t,2);n!==null&&ni(n,t,2)}function Nf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Vs){xe(!0);try{a()}finally{xe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},n}function d0(t,n,a,o){return t.baseState=a,wf(t,Yt,typeof o=="function"?o:ga)}function Jx(t,n,a,o,u){if(cc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,p0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function p0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var C=a(u,o),G=I.S;G!==null&&G(y,C),m0(t,n,C)}catch(le){Uf(t,n,le)}finally{f!==null&&y.types!==null&&(f.types=y.types),I.T=f}}else try{f=a(u,o),m0(t,n,f)}catch(le){Uf(t,n,le)}}function m0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){g0(t,n,o)},function(o){return Uf(t,n,o)}):g0(t,n,a)}function g0(t,n,a){n.status="fulfilled",n.value=a,_0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,p0(t,a)))}function Uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,_0(n),n=n.next;while(n!==o)}t.action=null}function _0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function v0(t,n){return n}function y0(t,n){if(At){var a=jt.formState;if(a!==null){e:{var o=mt;if(At){if($t){t:{for(var u=$t,f=Ai;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Ci(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:n},a.queue=o,a=B0.bind(null,mt,o),o.dispatch=a,o=Nf(!1),f=Bf.bind(null,mt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Jx.bind(null,mt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function x0(t){var n=mn();return S0(n,Yt,t)}function S0(t,n,a){if(n=wf(t,n,v0)[0],t=rc(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Fo(n)}catch(y){throw y===yr?Ql:y}else o=n;n=mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,br(9,{destroy:void 0},jx.bind(null,u,a),null)),[o,f,t]}function jx(t,n){t.action=n}function M0(t){var n=mn(),a=Yt;if(a!==null)return S0(n,a,t);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function br(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=ac(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function E0(){return mn().memoizedState}function oc(t,n,a,o){var u=Yn();mt.flags|=t,u.memoizedState=br(1|n,{destroy:void 0},a,o===void 0?null:o)}function lc(t,n,a,o){var u=mn();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&Ef(o,Yt.memoizedState.deps)?u.memoizedState=br(n,f,a,o):(mt.flags|=t,u.memoizedState=br(1|n,f,a,o))}function b0(t,n){oc(8390656,8,t,n)}function Lf(t,n){lc(2048,8,t,n)}function $x(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=ac(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function T0(t){var n=mn().memoizedState;return $x({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function A0(t,n){return lc(4,2,t,n)}function R0(t,n){return lc(4,4,t,n)}function C0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function w0(t,n,a){a=a!=null?a.concat([t]):null,lc(4,4,C0.bind(null,n,t),a)}function Of(){}function D0(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function N0(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=t(),Vs){xe(!0);try{t()}finally{xe(!1)}}return a.memoizedState=[o,n],o}function Pf(t,n,a){return a===void 0||(ma&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ug(),mt.lanes|=t,ts|=t,a)}function U0(t,n,a,o){return fi(a,n)?a:Sr.current!==null?(t=Pf(t,a,o),fi(t,n)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Et&261930)===0?(xn=!0,t.memoizedState=a):(t=Ug(),mt.lanes|=t,ts|=t,n)}function L0(t,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var y=I.T,C={};I.T=C,Bf(t,!1,n,a);try{var G=u(),le=I.S;if(le!==null&&le(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Ee=Zx(G,o);Ho(t,n,Ee,_i(t))}else Ho(t,n,o,_i(t))}catch(Ae){Ho(t,n,{then:function(){},status:"rejected",reason:Ae},_i())}finally{k.p=f,y!==null&&C.types!==null&&(y.types=C.types),I.T=y}}function eS(){}function If(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=O0(t).queue;L0(t,u,n,re,a===null?eS:function(){return P0(t),a(o)})}function O0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function P0(t){var n=O0(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},_i())}function zf(){return In(il)}function I0(){return mn().memoizedState}function z0(){return mn().memoizedState}function tS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();t=Ka(a);var o=Qa(n,t,a);o!==null&&(ni(o,n,a),Po(o,n,a)),n={cache:hf()},t.payload=n;return}n=n.return}}function nS(t,n,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(t)?F0(n,a):(a=ef(t,n,a,o),a!==null&&(ni(a,t,o),H0(a,n,o)))}function B0(t,n,a){var o=_i();Ho(t,n,a,o)}function Ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(t))F0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,fi(C,y))return kl(t,n,u,0),jt===null&&Vl(),!1}catch{}finally{}if(a=ef(t,n,u,o),a!==null)return ni(a,t,o),H0(a,n,o),!0}return!1}function Bf(t,n,a,o){if(o={lane:2,revertLane:gh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(s(479))}else n=ef(t,a,o,2),n!==null&&ni(n,t,2)}function cc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function F0(t,n){Mr=nc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function H0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,oi(t,a)}}var Go={readContext:In,use:sc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Go.useEffectEvent=fn;var G0={readContext:In,use:sc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:b0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,oc(4194308,4,C0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(Vs){xe(!0);try{t()}finally{xe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(Vs){xe(!0);try{a(n)}finally{xe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=nS.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Nf(t);var n=t.queue,a=B0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(t,n){var a=Yn();return Pf(a,t,n)},useTransition:function(){var t=Nf(!1);return t=L0.bind(null,mt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Yn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(Et&127)!==0||l0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,b0(u0.bind(null,o,f,t),[t]),o.flags|=2048,br(9,{destroy:void 0},c0.bind(null,o,f,a,n),null),a},useId:function(){var t=Yn(),n=jt.identifierPrefix;if(At){var a=Zi,o=qi;a=(o&~(1<<32-Ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zf,useFormState:y0,useActionState:y0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cf,useCacheRefresh:function(){return Yn().memoizedState=tS.bind(null,mt)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ff={readContext:In,use:sc,useCallback:D0,useContext:In,useEffect:Lf,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:N0,useReducer:rc,useRef:E0,useState:function(){return rc(ga)},useDebugValue:Of,useDeferredValue:function(t,n){var a=mn();return U0(a,Yt.memoizedState,t,n)},useTransition:function(){var t=rc(ga)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:o0,useId:I0,useHostTransitionStatus:zf,useFormState:x0,useActionState:x0,useOptimistic:function(t,n){var a=mn();return d0(a,Yt,t,n)},useMemoCache:Cf,useCacheRefresh:z0};Ff.useEffectEvent=T0;var V0={readContext:In,use:sc,useCallback:D0,useContext:In,useEffect:Lf,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:N0,useReducer:Df,useRef:E0,useState:function(){return Df(ga)},useDebugValue:Of,useDeferredValue:function(t,n){var a=mn();return Yt===null?Pf(a,t,n):U0(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Df(ga)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:o0,useId:I0,useHostTransitionStatus:zf,useFormState:M0,useActionState:M0,useOptimistic:function(t,n){var a=mn();return Yt!==null?d0(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:z0};V0.useEffectEvent=T0;function Hf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(ni(n,t,o),Po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(ni(n,t,o),Po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=_i(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(t,o,a),n!==null&&(ni(n,t,a),Po(n,t,a))}};function k0(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Ro(a,o)||!Ro(u,f):!0}function X0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Gf.enqueueReplaceState(n,n.state,null)}function ks(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function W0(t){Gl(t)}function Y0(t){console.error(t)}function q0(t){Gl(t)}function uc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Z0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vf(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(t,n)},a}function K0(t){return t=Ka(t),t.tag=3,t}function Q0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Z0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Z0(n,a,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function iS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&gr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?Mc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dh(t,o,u)),!1;case 22:return a.flags|=65536,o===Jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dh(t,o,u)),!1}throw Error(s(435,a.tag))}return dh(t,o,u),Mc(),!1}if(At)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==of&&(t=Error(s(422),{cause:o}),Do(Ei(t,a)))):(o!==of&&(n=Error(s(423),{cause:o}),Do(Ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ei(o,a),u=Vf(t.stateNode,o,u),vf(t,u),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:o});if(f=Ei(f,a),Ko===null?Ko=[f]:Ko.push(f),hn!==4&&(hn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Vf(a.stateNode,o,t),vf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ns===null||!ns.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=K0(u),Q0(u,t,a,o),vf(a,u),!1}a=a.return}while(a!==null);return!1}var kf=Error(s(461)),xn=!1;function zn(t,n,a,o){n.child=t===null?e0(n,null,a,o):Gs(n,t.child,a,o)}function J0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return zs(n),o=bf(t,n,a,y,f,u),C=Tf(),t!==null&&!xn?(Af(t,n,u),_a(t,n,u)):(At&&C&&sf(n),n.flags|=1,zn(t,n,o,u),n.child)}function j0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!tf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$0(t,n,f,o,u)):(t=Wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Jf(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(y,o)&&t.ref===n.ref)return _a(t,n,u)}return n.flags|=1,t=fa(f,o),t.ref=n.ref,t.return=n,n.child=t}function $0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Ro(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,Jf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,_a(t,n,u)}return Xf(t,n,a,o,u)}function eg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return tg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(n,f!==null?f.cachePool:null),f!==null?i0(n,f):xf(),a0(n);else return o=n.lanes=536870912,tg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Kl(n,f.cachePool),i0(n,f),ja(),n.memoizedState=null):(t!==null&&Kl(n,null),xf(),ja());return zn(t,n,u,a),n.child}function Vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tg(t,n,a,o,u){var f=pf();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Kl(n,null),xf(),a0(n),t!==null&&gr(t,n,o,!0),n.childLanes=u,null}function fc(t,n){return n=dc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ng(t,n,a){return Gs(n,t.child,null,a),t=fc(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function aS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=fc(n,o),n.lanes=536870912,Vo(null,t);if(Mf(n),(t=$t)?(t=p_(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Pn=n,$t=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return fc(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Mf(n),u)if(n.flags&256)n.flags&=-257,n=ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||gr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=jt,o!==null&&(y=li(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Ls(t,y),ni(o,t,y),kf;Mc(),n=ng(t,n,a)}else t=f.treeContext,$t=Ci(y.nextSibling),Pn=n,At=!0,Wa=null,Ai=!1,t!==null&&Vm(n,t),n=fc(n,o),n.flags|=4096;return n}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function hc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xf(t,n,a,o,u){return zs(n),a=bf(t,n,a,o,void 0,u),o=Tf(),t!==null&&!xn?(Af(t,n,u),_a(t,n,u)):(At&&o&&sf(n),n.flags|=1,zn(t,n,a,u),n.child)}function ig(t,n,a,o,u,f){return zs(n),n.updateQueue=null,a=r0(n,o,a,u),s0(t),o=Tf(),t!==null&&!xn?(Af(t,n,f),_a(t,n,f)):(At&&o&&sf(n),n.flags|=1,zn(t,n,a,f),n.child)}function ag(t,n,a,o,u){if(zs(n),n.stateNode===null){var f=hr,y=a.contextType;typeof y=="object"&&y!==null&&(f=In(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},gf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?In(y):hr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Hf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Gf.enqueueReplaceState(f,f.state,null),zo(n,o,f,u),Io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,G=ks(a,C);f.props=G;var le=f.context,Ee=a.contextType;y=hr,typeof Ee=="object"&&Ee!==null&&(y=In(Ee));var Ae=a.getDerivedStateFromProps;Ee=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||le!==y)&&X0(n,f,o,y),Za=!1;var he=n.memoizedState;f.state=he,zo(n,o,f,u),Io(),le=n.memoizedState,C||he!==le||Za?(typeof Ae=="function"&&(Hf(n,a,Ae,o),le=n.memoizedState),(G=Za||k0(n,a,G,o,he,le,y))?(Ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,_f(t,n),y=n.memoizedProps,Ee=ks(a,y),f.props=Ee,Ae=n.pendingProps,he=f.context,le=a.contextType,G=hr,typeof le=="object"&&le!==null&&(G=In(le)),C=a.getDerivedStateFromProps,(le=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Ae||he!==G)&&X0(n,f,o,G),Za=!1,he=n.memoizedState,f.state=he,zo(n,o,f,u),Io();var ge=n.memoizedState;y!==Ae||he!==ge||Za||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof C=="function"&&(Hf(n,a,C,o),ge=n.memoizedState),(Ee=Za||k0(n,a,Ee,o,he,ge,G)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(le||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ge,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ge,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),f.props=o,f.state=ge,f.context=G,o=Ee):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,hc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Gs(n,t.child,null,u),n.child=Gs(n,null,a,u)):zn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=_a(t,n,u),t}function sg(t,n,a,o){return Ps(),n.flags|=256,zn(t,n,a,o),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(t){return{baseLanes:t,cachePool:Zm()}}function qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function rg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ja(n):ja(),(t=$t)?(t=p_(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Pn=n,$t=null)):t=null,t===null)throw Ya(n);return wh(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(ja(),u=n.mode,C=dc({mode:"hidden",children:C},u),o=Os(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Yf(a),o.childLanes=qf(t,y,a),n.memoizedState=Wf,Vo(null,o)):(Ja(n),Zf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(f)n.flags&256?(Ja(n),n.flags&=-257,n=Kf(t,n,a)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,n=null):(ja(),C=o.fallback,u=n.mode,o=dc({mode:"visible",children:o.children},u),C=Os(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Gs(n,t.child,null,a),o=n.child,o.memoizedState=Yf(a),o.childLanes=qf(t,y,a),n.memoizedState=Wf,n=Vo(null,o));else if(Ja(n),wh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var le=y.dgst;y=le,o=Error(s(419)),o.stack="",o.digest=y,Do({value:o,source:null,stack:null}),n=Kf(t,n,a)}else if(xn||gr(t,n,a,!1),y=(a&t.childLanes)!==0,xn||y){if(y=jt,y!==null&&(o=li(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Ls(t,o),ni(y,t,o),kf;Ch(C)||Mc(),n=Kf(t,n,a)}else Ch(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,$t=Ci(C.nextSibling),Pn=n,At=!0,Wa=null,Ai=!1,t!==null&&Vm(n,t),n=Zf(n,o.children),n.flags|=4096);return n}return u?(ja(),C=o.fallback,u=n.mode,G=t.child,le=G.sibling,o=fa(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,le!==null?C=fa(le,C):(C=Os(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Vo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Yf(a):(u=C.cachePool,u!==null?(G=vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Zm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=qf(t,y,a),n.memoizedState=Wf,Vo(t.child,o)):(Ja(n),a=t.child,t=a.sibling,a=fa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Zf(t,n){return n=dc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function dc(t,n){return t=hi(22,t,null,n),t.lanes=0,t}function Kf(t,n,a){return Gs(n,t.child,null,a),t=Zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function og(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),uf(t.return,n,a)}function Qf(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function lg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=pn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,Ce(pn,y),zn(t,n,o,a),o=At?wo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&tc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&tc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qf(n,!0,a,null,f,o);break;case"together":Qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _a(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(gr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function sS(t,n,a){switch(n.tag){case 3:me(n,n.stateNode.containerInfo),qa(n,vn,t.memoizedState.cache),Ps();break;case 27:case 5:nt(n);break;case 4:me(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Ja(n),t=_a(t,n,a),t!==null?t.sibling:null);Ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(gr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return lg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ce(pn,pn.current),o)break;return null;case 22:return n.lanes=0,eg(t,n,a,n.pendingProps);case 24:qa(n,vn,t.memoizedState.cache)}return _a(t,n,a)}function cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Jf(t,a)&&(n.flags&128)===0)return xn=!1,sS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,At&&(n.flags&1048576)!==0&&Gm(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fs(n.elementType),n.type=t,typeof t=="function")tf(t)?(o=ks(t,o),n.tag=1,n=ag(null,n,t,o,a)):(n.tag=0,n=Xf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=J0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=j0(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return Xf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ks(o,n.pendingProps),ag(t,n,o,u,a);case 3:e:{if(me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,_f(t,n),zo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,qa(n,vn,o),o!==f.cache&&ff(n,[vn],a,!0),Io(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(t,n,o,a);break e}else if(o!==u){u=Ei(Error(s(424)),n),Do(u),n=sg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ci(t.firstChild),Pn=n,At=!0,Wa=null,Ai=!0,a=e0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),o===u){n=_a(t,n,a);break e}zn(t,n,o,a)}n=n.child}return n;case 26:return hc(t,n),t===null?(a=x_(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=wc(ae.current).createElement(a),o[gn]=n,o[On]=t,Bn(o,a,t),_n(o),n.stateNode=o):n.memoizedState=x_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&At&&(o=n.stateNode=__(n.type,n.pendingProps,ae.current),Pn=n,Ai=!0,u=$t,rs(n.type)?(Dh=u,$t=Ci(o.firstChild)):$t=u),zn(t,n,n.pendingProps.children,a),hc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=$t)&&(o=PS(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Pn=n,$t=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||Ya(n)),nt(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,Th(u,f)?o=null:y!==null&&Th(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=bf(t,n,Qx,null,null,a),il._currentValue=u),hc(t,n),zn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=$t)&&(a=IS(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Pn=n,$t=null,t=!0):t=!1),t||Ya(n)),null;case 13:return rg(t,n,a);case 4:return me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gs(n,null,o,a):zn(t,n,o,a),n.child;case 11:return J0(t,n,n.type,n.pendingProps,a);case 7:return zn(t,n,n.pendingProps,a),n.child;case 8:return zn(t,n,n.pendingProps.children,a),n.child;case 12:return zn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),zn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,zs(n),u=In(u),o=o(u),n.flags|=1,zn(t,n,o,a),n.child;case 14:return j0(t,n,n.type,n.pendingProps,a);case 15:return $0(t,n,n.type,n.pendingProps,a);case 19:return lg(t,n,a);case 31:return aS(t,n,a);case 22:return eg(t,n,a,n.pendingProps);case 24:return zs(n),o=In(vn),t===null?(u=pf(),u===null&&(u=jt,f=hf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},gf(n),qa(n,vn,u)):((t.lanes&a)!==0&&(_f(t,n),zo(n,null,null,a),Io()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,vn,o)):(o=f.cache,qa(n,vn,o),o!==u.cache&&ff(n,[vn],a,!0))),zn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(t){t.flags|=4}function jf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ig())t.flags|=8192;else throw Hs=Jl,mf}else t.flags&=-16777217}function ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!T_(n))if(Ig())t.flags|=8192;else throw Hs=Jl,mf}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?we():536870912,t.lanes|=n,Cr|=n)}function ko(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function rS(t,n,a){var o=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),pa(vn),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mr(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(va(n),f!==null?(en(n),ug(n,f)):(en(n),jf(n,u,null,o,a))):f?f!==t.memoizedState?(va(n),en(n),ug(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&va(n),en(n),jf(n,u,t,o,a)),null;case 27:if(je(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=Ie.current,mr(n)?km(n):(t=__(u,o,a),n.stateNode=t,va(n))}return en(n),null;case 5:if(je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=Ie.current,mr(n))km(n);else{var y=wc(ae.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[gn]=n,f[On]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return en(n),jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,mr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||r_(t.nodeValue,a)),t||Ya(n,!0)}else t=wc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=mr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=mr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pc(n,n.updateQueue),en(n),null);case 4:return Pe(),t===null&&xh(n.stateNode.containerInfo),en(n),null;case 10:return pa(n.type),en(n),null;case 19:if(j(pn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)ko(o,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=tc(t),f!==null){for(n.flags|=128,ko(o,!1),t=f.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return Ce(pn,pn.current&1|2),At&&ha(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ot()>yc&&(n.flags|=128,u=!0,ko(o,!1),n.lanes=4194304)}else{if(!u)if(t=tc(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!At)return en(n),null}else 2*Ot()-o.renderingStartTime>yc&&a!==536870912&&(n.flags|=128,u=!0,ko(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ot(),t.sibling=null,a=pn.current,Ce(pn,u?a&1|2:a&1),At&&ha(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return pi(n),Sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&pc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&j(Bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(vn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function oS(t,n){switch(rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(vn),Pe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return je(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(pn),null;case 4:return Pe(),null;case 10:return pa(n.type),null;case 22:case 23:return pi(n),Sf(),t!==null&&j(Bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function fg(t,n){switch(rf(n),n.tag){case 3:pa(vn),Pe();break;case 26:case 27:case 5:je(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:j(pn);break;case 10:pa(n.type);break;case 22:case 23:pi(n),Sf(),t!==null&&j(Bs);break;case 24:pa(vn)}}function Xo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){kt(n,n.return,C)}}function $a(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var G=a,le=C;try{le()}catch(Ee){kt(u,G,Ee)}}}o=o.next}while(o!==f)}}catch(Ee){kt(n,n.return,Ee)}}function hg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{n0(n,a)}catch(o){kt(t,t.return,o)}}}function dg(t,n,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function pg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function $f(t,n,a){try{var o=t.stateNode;wS(o,t.type,a,n),o[On]=n}catch(u){kt(t,t.return,u)}}function mg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca));else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(th(t,n,a),t=t.sibling;t!==null;)th(t,n,a),t=t.sibling}function mc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(mc(t,n,a),t=t.sibling;t!==null;)mc(t,n,a),t=t.sibling}function gg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[gn]=t,n[On]=a}catch(f){kt(t,t.return,f)}}var ya=!1,Sn=!1,nh=!1,_g=typeof WeakSet=="function"?WeakSet:Set,wn=null;function lS(t,n){if(t=t.containerInfo,Eh=Ic,t=wm(t),Zu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,C=-1,G=-1,le=0,Ee=0,Ae=t,he=null;t:for(;;){for(var ge;Ae!==a||u!==0&&Ae.nodeType!==3||(C=y+u),Ae!==f||o!==0&&Ae.nodeType!==3||(G=y+o),Ae.nodeType===3&&(y+=Ae.nodeValue.length),(ge=Ae.firstChild)!==null;)he=Ae,Ae=ge;for(;;){if(Ae===t)break t;if(he===a&&++le===u&&(C=y),he===f&&++Ee===o&&(G=y),(ge=Ae.nextSibling)!==null)break;Ae=he,he=Ae.parentNode}Ae=ge}a=C===-1||G===-1?null:{start:C,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(bh={focusedElem:t,selectionRange:a},Ic=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Je=ks(a.type,u);t=o.getSnapshotBeforeUpdate(Je,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){kt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Rh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&Xo(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=ks(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}o&64&&hg(a),o&512&&Wo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{n0(t,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&o&4&&gg(a);case 26:case 5:Sa(t,a),n===null&&o&4&&pg(a),o&512&&Wo(a,a.return);break;case 12:Sa(t,a);break;case 31:Sa(t,a),o&4&&Sg(t,a);break;case 13:Sa(t,a),o&4&&Mg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_S.bind(null,a),zS(t,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){n=n!==null&&n.memoizedState!==null||Sn,u=ya;var f=Sn;ya=o,(Sn=n)&&!f?Ma(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),ya=u,Sn=f}break;case 30:break;default:Sa(t,a)}}function yg(t){var n=t.alternate;n!==null&&(t.alternate=null,yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,jn=!1;function xa(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:Sn||Ki(a,n),xa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Ki(a,n);var o=ln,u=jn;rs(a.type)&&(ln=a.stateNode,jn=!1),xa(t,n,a),el(a.stateNode),ln=o,jn=u;break;case 5:Sn||Ki(a,n);case 6:if(o=ln,u=jn,ln=null,xa(t,n,a),ln=o,jn=u,ln!==null)if(jn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:ln!==null&&(jn?(t=ln,h_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ir(t)):h_(ln,a.stateNode));break;case 4:o=ln,u=jn,ln=a.stateNode.containerInfo,jn=!0,xa(t,n,a),ln=o,jn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Sn||$a(4,a,n),xa(t,n,a);break;case 1:Sn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),xa(t,n,a);break;case 21:xa(t,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,xa(t,n,a),Sn=o;break;default:xa(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ir(t)}catch(a){kt(n,n.return,a)}}}function Mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ir(t)}catch(a){kt(n,n.return,a)}}function cS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _g),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _g),n;default:throw Error(s(435,t.tag))}}function gc(t,n){var a=cS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=vS.bind(null,t,o);o.then(u,u)}})}function $n(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(rs(C.type)){ln=C.stateNode,jn=!1;break e}break;case 5:ln=C.stateNode,jn=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,jn=!0;break e}C=C.return}if(ln===null)throw Error(s(160));xg(f,y,u),ln=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Eg(n,t),n=n.sibling}var zi=null;function Eg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ei(t),o&4&&($a(3,t,t.return),Xo(3,t),$a(5,t,t.return));break;case 1:$n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&64&&ya&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=zi;if($n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Fa]||f[gn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Bn(f,o,a),f[gn]=t,_n(f),o=f;break e;case"link":var y=E_("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=E_("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[gn]=t,_n(f),o=f}t.stateNode=o}else b_(u,t.type,t.stateNode);else t.stateNode=M_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?b_(u,t.type,t.stateNode):M_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&$f(t,t.memoizedProps,a.memoizedProps)}break;case 27:$n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),a!==null&&o&4&&$f(t,t.memoizedProps,a.memoizedProps);break;case 5:if($n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(Je){kt(t,t.return,Je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,$f(t,u,a!==null?a.memoizedProps:u)),o&1024&&(nh=!0);break;case 6:if($n(n,t),ei(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Je){kt(t,t.return,Je)}}break;case 3:if(Uc=null,u=zi,zi=Dc(n.containerInfo),$n(n,t),zi=u,ei(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(Je){kt(t,t.return,Je)}nh&&(nh=!1,bg(t));break;case 4:o=zi,zi=Dc(t.stateNode.containerInfo),$n(n,t),ei(t),zi=o;break;case 12:$n(n,t),ei(t);break;case 31:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 13:$n(n,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vc=Ot()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,le=ya,Ee=Sn;if(ya=le||u,Sn=Ee||G,$n(n,t),Sn=Ee,ya=le,ei(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ya||Sn||Xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=G.stateNode;var Ae=G.memoizedProps.style,he=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;C.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(Je){kt(G,G.return,Je)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Je){kt(G,G.return,Je)}}}else if(n.tag===18){if(a===null){G=n;try{var ge=G.stateNode;u?d_(ge,!0):d_(G.stateNode,!1)}catch(Je){kt(G,G.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,gc(t,a))));break;case 19:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gc(t,o)));break;case 30:break;case 21:break;default:$n(n,t),ei(t)}}function ei(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(mg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=eh(t);mc(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(ui(y,""),a.flags&=-33);var C=eh(t);mc(t,C,y);break;case 3:case 4:var G=a.stateNode.containerInfo,le=eh(t);th(t,le,G);break;default:throw Error(s(161))}}catch(Ee){kt(t,t.return,Ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(t,n.alternate,n),n=n.sibling}function Xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Xs(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),Xs(n);break;case 27:el(n.stateNode);case 26:case 5:Ki(n,n.return),Xs(n);break;case 22:n.memoizedState===null&&Xs(n);break;case 30:Xs(n);break;default:Xs(n)}t=t.sibling}}function Ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(u,f,a),Xo(4,f);break;case 1:if(Ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){kt(o,o.return,le)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)t0(G[u],C)}catch(le){kt(o,o.return,le)}}a&&y&64&&hg(f),Wo(f,f.return);break;case 27:gg(f);case 26:case 5:Ma(u,f,a),a&&o===null&&y&4&&pg(f),Wo(f,f.return);break;case 12:Ma(u,f,a);break;case 31:Ma(u,f,a),a&&y&4&&Sg(u,f);break;case 13:Ma(u,f,a),a&&y&4&&Mg(u,f);break;case 22:f.memoizedState===null&&Ma(u,f,a),Wo(f,f.return);break;case 30:break;default:Ma(u,f,a)}n=n.sibling}}function ih(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&No(a))}function ah(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t))}function Bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(t,n,a,o),n=n.sibling}function Tg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(t,n,a,o),u&2048&&Xo(9,n);break;case 1:Bi(t,n,a,o);break;case 3:Bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t)));break;case 12:if(u&2048){Bi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){kt(n,n.return,G)}}else Bi(t,n,a,o);break;case 31:Bi(t,n,a,o);break;case 13:Bi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Bi(t,n,a,o):Yo(t,n):f._visibility&2?Bi(t,n,a,o):(f._visibility|=2,Tr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ih(y,n);break;case 24:Bi(t,n,a,o),u&2048&&ah(n.alternate,n);break;default:Bi(t,n,a,o)}}function Tr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,C=a,G=o,le=y.flags;switch(y.tag){case 0:case 11:case 15:Tr(f,y,C,G,u),Xo(8,y);break;case 23:break;case 22:var Ee=y.stateNode;y.memoizedState!==null?Ee._visibility&2?Tr(f,y,C,G,u):Yo(f,y):(Ee._visibility|=2,Tr(f,y,C,G,u)),u&&le&2048&&ih(y.alternate,y);break;case 24:Tr(f,y,C,G,u),u&&le&2048&&ah(y.alternate,y);break;default:Tr(f,y,C,G,u)}n=n.sibling}}function Yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Yo(a,o),u&2048&&ih(o.alternate,o);break;case 24:Yo(a,o),u&2048&&ah(o.alternate,o);break;default:Yo(a,o)}n=n.sibling}}var qo=8192;function Ar(t,n,a){if(t.subtreeFlags&qo)for(t=t.child;t!==null;)Ag(t,n,a),t=t.sibling}function Ag(t,n,a){switch(t.tag){case 26:Ar(t,n,a),t.flags&qo&&t.memoizedState!==null&&KS(a,zi,t.memoizedState,t.memoizedProps);break;case 5:Ar(t,n,a);break;case 3:case 4:var o=zi;zi=Dc(t.stateNode.containerInfo),Ar(t,n,a),zi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=qo,qo=16777216,Ar(t,n,a),qo=o):Ar(t,n,a));break;default:Ar(t,n,a)}}function Rg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,wg(o,t)}Rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_c(t)):Zo(t);break;default:Zo(t)}}function _c(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,wg(o,t)}Rg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),_c(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_c(n));break;default:_c(n)}t=t.sibling}}function wg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:No(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,f=o.return;if(yg(o),o===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var uS={getCacheForType:function(t){var n=In(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(vn).controller.signal}},fS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,jt=null,xt=null,Et=0,Vt=0,mi=null,es=!1,Rr=!1,sh=!1,Ea=0,hn=0,ts=0,Ws=0,rh=0,gi=0,Cr=0,Ko=null,ti=null,oh=!1,vc=0,Dg=0,yc=1/0,xc=null,ns=null,Tn=0,is=null,wr=null,ba=0,lh=0,ch=null,Ng=null,Qo=0,uh=null;function _i(){return(Pt&2)!==0&&Et!==0?Et&-Et:I.T!==null?gh():yo()}function Ug(){if(gi===0)if((Et&536870912)===0||At){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),gi=t}else gi=536870912;return t=di.current,t!==null&&(t.flags|=32),gi}function ni(t,n,a){(t===jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),as(t,Et,gi,!1)),qe(t,a),((Pt&2)===0||t!==jt)&&(t===jt&&((Pt&2)===0&&(Ws|=a),hn===4&&as(t,Et,gi,!1)),Qi(t))}function Lg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ze(t,n),u=o?pS(t,n):hh(t,n,!0),f=o;do{if(u===0){Rr&&!o&&as(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!hS(a)){u=hh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var C=t;u=Ko;var G=C.current.memoizedState.isDehydrated;if(G&&(Dr(C,y).flags|=256),y=hh(C,y,!1),y!==2){if(sh&&!G){C.errorRecoveryDisabledLanes|=f,Ws|=f,u=4;break e}f=ti,ti=u,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Dr(t,0),as(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,gi,!es);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=vc+300-Ot(),10<u)){if(as(o,n,gi,!es),Me(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=u_(Og.bind(null,o,a,ti,xc,oh,n,gi,Ws,Cr,es,f,"Throttled",-0,0),u);break e}Og(o,a,ti,xc,oh,n,gi,Ws,Cr,es,f,null,-0,0)}}break}while(!0);Qi(t)}function Og(t,n,a,o,u,f,y,C,G,le,Ee,Ae,he,ge){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},Ag(n,f,Ae);var Je=(f&62914560)===f?vc-Ot():(f&4194048)===f?Dg-Ot():0;if(Je=QS(Ae,Je),Je!==null){ba=f,t.cancelPendingCommit=Je(Vg.bind(null,t,n,f,a,o,u,y,C,G,Ee,Ae,null,he,ge)),as(t,f,y,!le);return}}Vg(t,n,f,a,o,u,y,C,G)}function hS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!fi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,o){n&=~rh,n&=~Ws,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ne(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Bt(t,a,n)}function Sc(){return(Pt&6)===0?(Jo(0),!1):!0}function fh(){if(xt!==null){if(Vt===0)var t=xt.return;else t=xt,da=Is=null,Rf(t),xr=null,Lo=0,t=xt;for(;t!==null;)fg(t.alternate,t),t=t.return;xt=null}}function Dr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,US(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ba=0,fh(),jt=t,xt=a=fa(t.current,null),Et=n,Vt=0,mi=null,es=!1,Rr=ze(t,n),sh=!1,Cr=gi=rh=Ws=ts=hn=0,ti=Ko=null,oh=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ne(o),f=1<<u;n|=t[u],o&=~f}return Ea=n,Vl(),a}function Pg(t,n){mt=null,I.H=Go,n===yr||n===Ql?(n=Jm(),Vt=3):n===mf?(n=Jm(),Vt=4):Vt=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,xt===null&&(hn=1,uc(t,Ei(n,t.current)))}function Ig(){var t=di.current;return t===null?!0:(Et&4194048)===Et?Ri===null:(Et&62914560)===Et||(Et&536870912)!==0?t===Ri:!1}function zg(){var t=I.H;return I.H=Go,t===null?Go:t}function Bg(){var t=I.A;return I.A=uS,t}function Mc(){hn=4,es||(Et&4194048)!==Et&&di.current!==null||(Rr=!0),(ts&134217727)===0&&(Ws&134217727)===0||jt===null||as(jt,Et,gi,!1)}function hh(t,n,a){var o=Pt;Pt|=2;var u=zg(),f=Bg();(jt!==t||Et!==n)&&(xc=null,Dr(t,n)),n=!1;var y=hn;e:do try{if(Vt!==0&&xt!==null){var C=xt,G=mi;switch(Vt){case 8:fh(),y=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var le=Vt;if(Vt=0,mi=null,Nr(t,C,G,le),a&&Rr){y=0;break e}break;default:le=Vt,Vt=0,mi=null,Nr(t,C,G,le)}}dS(),y=hn;break}catch(Ee){Pg(t,Ee)}while(!0);return n&&t.shellSuspendCounter++,da=Is=null,Pt=o,I.H=u,I.A=f,xt===null&&(jt=null,Et=0,Vl()),y}function dS(){for(;xt!==null;)Fg(xt)}function pS(t,n){var a=Pt;Pt|=2;var o=zg(),u=Bg();jt!==t||Et!==n?(xc=null,yc=Ot()+500,Dr(t,n)):Rr=ze(t,n);e:do try{if(Vt!==0&&xt!==null){n=xt;var f=mi;t:switch(Vt){case 1:Vt=0,mi=null,Nr(t,n,f,1);break;case 2:case 9:if(Km(f)){Vt=0,mi=null,Hg(n);break}n=function(){Vt!==2&&Vt!==9||jt!==t||(Vt=7),Qi(t)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Km(f)?(Vt=0,mi=null,Hg(n)):(Vt=0,mi=null,Nr(t,n,f,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var C=xt;if(y?T_(y):C.stateNode.complete){Vt=0,mi=null;var G=C.sibling;if(G!==null)xt=G;else{var le=C.return;le!==null?(xt=le,Ec(le)):xt=null}break t}}Vt=0,mi=null,Nr(t,n,f,5);break;case 6:Vt=0,mi=null,Nr(t,n,f,6);break;case 8:fh(),hn=6;break e;default:throw Error(s(462))}}mS();break}catch(Ee){Pg(t,Ee)}while(!0);return da=Is=null,I.H=o,I.A=u,Pt=a,xt!==null?0:(jt=null,Et=0,Vl(),hn)}function mS(){for(;xt!==null&&!an();)Fg(xt)}function Fg(t){var n=cg(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?Ec(t):xt=n}function Hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Rf(n);default:fg(a,n),n=xt=Bm(n,Ea),n=cg(a,n,Ea)}t.memoizedProps=t.pendingProps,n===null?Ec(t):xt=n}function Nr(t,n,a,o){da=Is=null,Rf(n),xr=null,Lo=0;var u=n.return;try{if(iS(t,u,n,a,Et)){hn=1,uc(t,Ei(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;hn=1,uc(t,Ei(a,t.current)),xt=null;return}n.flags&32768?(At||o===1?t=!0:Rr||(Et&536870912)!==0?t=!1:(es=t=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gg(n,t)):Ec(n)}function Ec(t){var n=t;do{if((n.flags&32768)!==0){Gg(n,es);return}t=n.return;var a=rS(n.alternate,n,Ea);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);hn===0&&(hn=5)}function Gg(t,n){do{var a=oS(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);hn=6,xt=null}function Vg(t,n,a,o,u,f,y,C,G){t.cancelPendingCommit=null;do bc();while(Tn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=$u,sn(t,a,f,y,C,G),t===jt&&(xt=jt=null,Et=0),wr=n,is=t,ba=a,lh=f,ch=u,Ng=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yS(V,function(){return qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=k.p,k.p=2,y=Pt,Pt|=4;try{lS(t,n,a)}finally{Pt=y,k.p=u,I.T=o}}Tn=1,kg(),Xg(),Wg()}}function kg(){if(Tn===1){Tn=0;var t=is,n=wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Pt;Pt|=4;try{Eg(n,t);var f=bh,y=wm(t.containerInfo),C=f.focusedElem,G=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&Cm(C.ownerDocument.documentElement,C)){if(G!==null&&Zu(C)){var le=G.start,Ee=G.end;if(Ee===void 0&&(Ee=le),"selectionStart"in C)C.selectionStart=le,C.selectionEnd=Math.min(Ee,C.value.length);else{var Ae=C.ownerDocument||document,he=Ae&&Ae.defaultView||window;if(he.getSelection){var ge=he.getSelection(),Je=C.textContent.length,ct=Math.min(G.start,Je),Zt=G.end===void 0?ct:Math.min(G.end,Je);!ge.extend&&ct>Zt&&(y=Zt,Zt=ct,ct=y);var te=Rm(C,ct),q=Rm(C,Zt);if(te&&q&&(ge.rangeCount!==1||ge.anchorNode!==te.node||ge.anchorOffset!==te.offset||ge.focusNode!==q.node||ge.focusOffset!==q.offset)){var oe=Ae.createRange();oe.setStart(te.node,te.offset),ge.removeAllRanges(),ct>Zt?(ge.addRange(oe),ge.extend(q.node,q.offset)):(oe.setEnd(q.node,q.offset),ge.addRange(oe))}}}}for(Ae=[],ge=C;ge=ge.parentNode;)ge.nodeType===1&&Ae.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ae.length;C++){var Te=Ae[C];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}Ic=!!Eh,bh=Eh=null}finally{Pt=u,k.p=o,I.T=a}}t.current=n,Tn=2}}function Xg(){if(Tn===2){Tn=0;var t=is,n=wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Pt;Pt|=4;try{vg(t,n.alternate,n)}finally{Pt=u,k.p=o,I.T=a}}Tn=3}}function Wg(){if(Tn===4||Tn===3){Tn=0,K();var t=is,n=wr,a=ba,o=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,wr=is=null,Yg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ns=null),vo(a),n=n.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=k.p,k.p=2,I.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{I.T=n,k.p=u}}(ba&3)!==0&&bc(),Qi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===uh?Qo++:(Qo=0,uh=t):Qo=0,Jo(0)}}function Yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,No(n)))}function bc(){return kg(),Xg(),Wg(),qg()}function qg(){if(Tn!==5)return!1;var t=is,n=lh;lh=0;var a=vo(ba),o=I.T,u=k.p;try{k.p=32>a?32:a,I.T=null,a=ch,ch=null;var f=is,y=ba;if(Tn=0,wr=is=null,ba=0,(Pt&6)!==0)throw Error(s(331));var C=Pt;if(Pt|=4,Cg(f.current),Tg(f,f.current,y,a),Pt=C,Jo(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ne,f)}catch{}return!0}finally{k.p=u,I.T=o,Yg(t,n)}}function Zg(t,n,a){n=Ei(a,n),n=Vf(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(qe(t,2),Qi(t))}function kt(t,n,a){if(t.tag===3)Zg(t,t,a);else for(;n!==null;){if(n.tag===3){Zg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){t=Ei(a,t),a=K0(2),o=Qa(n,a,2),o!==null&&(Q0(a,o,n,t),qe(o,2),Qi(o));break}}n=n.return}}function dh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new fS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(sh=!0,u.add(a),t=gS.bind(null,t,n,a),n.then(t,t))}function gS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Et&a)===a&&(hn===4||hn===3&&(Et&62914560)===Et&&300>Ot()-vc?(Pt&2)===0&&Dr(t,0):rh|=a,Cr===Et&&(Cr=0)),Qi(t)}function Kg(t,n){n===0&&(n=we()),t=Ls(t,n),t!==null&&(qe(t,n),Qi(t))}function _S(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Kg(t,a)}function vS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Kg(t,a)}function yS(t,n){return nn(t,n)}var Tc=null,Ur=null,ph=!1,Ac=!1,mh=!1,ss=0;function Qi(t){t!==Ur&&t.next===null&&(Ur===null?Tc=Ur=t:Ur=Ur.next=t),Ac=!0,ph||(ph=!0,SS())}function Jo(t,n){if(!mh&&Ac){mh=!0;do for(var a=!1,o=Tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Ne(42|t)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$g(o,f))}else f=Et,f=Me(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ze(o,f)||(a=!0,$g(o,f));o=o.next}while(a);mh=!1}}function xS(){Qg()}function Qg(){Ac=ph=!1;var t=0;ss!==0&&NS()&&(t=ss);for(var n=Ot(),a=null,o=Tc;o!==null;){var u=o.next,f=Jg(o,n);f===0?(o.next=null,a===null?Tc=u:a.next=u,u===null&&(Ur=a)):(a=o,(t!==0||(f&3)!==0)&&(Ac=!0)),o=u}Tn!==0&&Tn!==5||Jo(t),ss!==0&&(ss=0)}function Jg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ne(f),C=1<<y,G=u[y];G===-1?((C&a)===0||(C&o)!==0)&&(u[y]=Ge(C,n)):G<=n&&(t.expiredLanes|=C),f&=~C}if(n=jt,a=Et,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&zt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&zt(o),vo(a)){case 2:case 8:a=v;break;case 32:a=V;break;case 268435456:a=J;break;default:a=V}return o=jg.bind(null,t),a=nn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&zt(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bc()&&t.callbackNode!==a)return null;var o=Et;return o=Me(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Lg(t,o,n),Jg(t,Ot()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function $g(t,n){if(bc())return null;Lg(t,n,!0)}function SS(){LS(function(){(Pt&6)!==0?nn(R,xS):Qg()})}function gh(){if(ss===0){var t=_r;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),ss=t}return ss}function e_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ws(""+t)}function t_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function MS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=e_((u[On]||null).action),y=o.submitter;y&&(n=(n=y[On]||null)?e_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new Bl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var G=y?t_(u,y):new FormData(u);If(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(C.preventDefault(),G=y?t_(u,y):new FormData(u),If(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var _h=0;_h<ju.length;_h++){var vh=ju[_h],ES=vh.toLowerCase(),bS=vh[0].toUpperCase()+vh.slice(1);Ii(ES,"on"+bS)}Ii(Um,"onAnimationEnd"),Ii(Lm,"onAnimationIteration"),Ii(Om,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(Hx,"onTransitionRun"),Ii(Gx,"onTransitionStart"),Ii(Vx,"onTransitionCancel"),Ii(Pm,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function n_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],G=C.instance,le=C.currentTarget;if(C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=le;try{f(u)}catch(Ee){Gl(Ee)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(C=o[y],G=C.instance,le=C.currentTarget,C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=le;try{f(u)}catch(Ee){Gl(Ee)}u.currentTarget=null,f=G}}}}function St(t,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var o=t+"__bubble";a.has(o)||(i_(n,t,2,!1),a.add(o))}function yh(t,n,a){var o=0;n&&(o|=4),i_(a,t,o,n)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function xh(t){if(!t[Rc]){t[Rc]=!0,Ol.forEach(function(a){a!=="selectionchange"&&(TS.has(a)||yh(a,!1,t),yh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rc]||(n[Rc]=!0,yh("selectionchange",!1,n))}}function i_(t,n,a,o){switch(U_(n)){case 2:var u=$S;break;case 8:u=eM;break;default:u=Ph}a=u.bind(null,n,a,t),u=void 0,!Fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Sh(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=oa(C),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue e}C=C.parentNode}}o=o.return}lm(function(){var le=f,Ee=zu(a),Ae=[];e:{var he=Im.get(t);if(he!==void 0){var ge=Bl,Je=t;switch(t){case"keypress":if(Il(a)===0)break e;case"keydown":case"keyup":ge=vx;break;case"focusin":Je="focus",ge=ku;break;case"focusout":Je="blur",ge=ku;break;case"beforeblur":case"afterblur":ge=ku;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Sx;break;case Um:case Lm:case Om:ge=cx;break;case Pm:ge=Ex;break;case"scroll":case"scrollend":ge=ax;break;case"wheel":ge=Tx;break;case"copy":case"cut":case"paste":ge=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=dm;break;case"toggle":case"beforetoggle":ge=Rx}var ct=(n&4)!==0,Zt=!ct&&(t==="scroll"||t==="scrollend"),te=ct?he!==null?he+"Capture":null:he;ct=[];for(var q=le,oe;q!==null;){var Te=q;if(oe=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||oe===null||te===null||(Te=xo(q,te),Te!=null&&ct.push($o(q,Te,oe))),Zt)break;q=q.return}0<ct.length&&(he=new ge(he,Je,null,a,Ee),Ae.push({event:he,listeners:ct}))}}if((n&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",he&&a!==Iu&&(Je=a.relatedTarget||a.fromElement)&&(oa(Je)||Je[Qn]))break e;if((ge||he)&&(he=Ee.window===Ee?Ee:(he=Ee.ownerDocument)?he.defaultView||he.parentWindow:window,ge?(Je=a.relatedTarget||a.toElement,ge=le,Je=Je?oa(Je):null,Je!==null&&(Zt=c(Je),ct=Je.tag,Je!==Zt||ct!==5&&ct!==27&&ct!==6)&&(Je=null)):(ge=null,Je=le),ge!==Je)){if(ct=fm,Te="onMouseLeave",te="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ct=dm,Te="onPointerLeave",te="onPointerEnter",q="pointer"),Zt=ge==null?he:Cs(ge),oe=Je==null?he:Cs(Je),he=new ct(Te,q+"leave",ge,a,Ee),he.target=Zt,he.relatedTarget=oe,Te=null,oa(Ee)===le&&(ct=new ct(te,q+"enter",Je,a,Ee),ct.target=oe,ct.relatedTarget=Zt,Te=ct),Zt=Te,ge&&Je)t:{for(ct=AS,te=ge,q=Je,oe=0,Te=te;Te;Te=ct(Te))oe++;Te=0;for(var rt=q;rt;rt=ct(rt))Te++;for(;0<oe-Te;)te=ct(te),oe--;for(;0<Te-oe;)q=ct(q),Te--;for(;oe--;){if(te===q||q!==null&&te===q.alternate){ct=te;break t}te=ct(te),q=ct(q)}ct=null}else ct=null;ge!==null&&a_(Ae,he,ge,ct,!1),Je!==null&&Zt!==null&&a_(Ae,Zt,Je,ct,!0)}}e:{if(he=le?Cs(le):window,ge=he.nodeName&&he.nodeName.toLowerCase(),ge==="select"||ge==="input"&&he.type==="file")var Dt=Sm;else if(ym(he))if(Mm)Dt=zx;else{Dt=Px;var et=Ox}else ge=he.nodeName,!ge||ge.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?le&&It(le.elementType)&&(Dt=Sm):Dt=Ix;if(Dt&&(Dt=Dt(t,le))){xm(Ae,Dt,a,Ee);break e}et&&et(t,he,le),t==="focusout"&&le&&he.type==="number"&&le.memoizedProps.value!=null&&yt(he,"number",he.value)}switch(et=le?Cs(le):window,t){case"focusin":(ym(et)||et.contentEditable==="true")&&(cr=et,Ku=le,Co=null);break;case"focusout":Co=Ku=cr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Dm(Ae,a,Ee);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Dm(Ae,a,Ee)}var gt;if(Wu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else lr?_m(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(pm&&a.locale!=="ko"&&(lr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&lr&&(gt=cm()):(ka=Ee,Hu="value"in ka?ka.value:ka.textContent,lr=!0)),et=Cc(le,bt),0<et.length&&(bt=new hm(bt,t,null,a,Ee),Ae.push({event:bt,listeners:et}),gt?bt.data=gt:(gt=vm(a),gt!==null&&(bt.data=gt)))),(gt=wx?Dx(t,a):Nx(t,a))&&(bt=Cc(le,"onBeforeInput"),0<bt.length&&(et=new hm("onBeforeInput","beforeinput",null,a,Ee),Ae.push({event:et,listeners:bt}),et.data=gt)),MS(Ae,t,le,a,Ee)}n_(Ae,n)})}function $o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=xo(t,a),u!=null&&o.unshift($o(t,u,f)),u=xo(t,n),u!=null&&o.push($o(t,u,f))),t.tag===3)return o;t=t.return}return[]}function AS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a_(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,G=C.alternate,le=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||le===null||(G=le,u?(le=xo(a,f),le!=null&&y.unshift($o(a,le,G))):u||(le=xo(a,f),le!=null&&y.push($o(a,le,G)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(CS,"")}function r_(t,n){return n=s_(n),s_(t)===n}function qt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":Qe(t,"class",o);break;case"tabIndex":Qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qe(t,a,o);break;case"style":Pi(t,o,f);break;case"data":if(n!=="object"){Qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ws(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ws(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ws(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Fe(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yi.get(a)||a,Fe(t,a,o))}}function Mh(t,n,a,o,u,f){switch(a){case"style":Pi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[On]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Fe(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,f,y,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var C=f=y=u=null,G=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Ee=a[o];if(Ee!=null)switch(o){case"name":u=Ee;break;case"type":y=Ee;break;case"checked":G=Ee;break;case"defaultChecked":le=Ee;break;case"value":f=Ee;break;case"defaultValue":C=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(s(137,n));break;default:qt(t,n,o,Ee,a,null)}}Gn(t,f,C,G,le,y,u,!1);return;case"select":St("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:qt(t,n,u,C,a,null)}n=f,a=y,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:qt(t,n,y,C,a,null)}Oi(t,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(t,n,G,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<jo.length;o++)St(jo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,le,o,a,null)}return;default:if(It(n)){for(Ee in a)a.hasOwnProperty(Ee)&&(o=a[Ee],o!==void 0&&Mh(t,n,Ee,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&qt(t,n,C,o,a,null))}function wS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,G=null,le=null,Ee=null;for(ge in a){var Ae=a[ge];if(a.hasOwnProperty(ge)&&Ae!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":G=Ae;default:o.hasOwnProperty(ge)||qt(t,n,ge,null,o,Ae)}}for(var he in o){var ge=o[he];if(Ae=a[he],o.hasOwnProperty(he)&&(ge!=null||Ae!=null))switch(he){case"type":f=ge;break;case"name":u=ge;break;case"checked":le=ge;break;case"defaultChecked":Ee=ge;break;case"value":y=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==Ae&&qt(t,n,he,ge,o,Ae)}}Xe(t,y,C,G,le,Ee,f,u);return;case"select":ge=y=C=he=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ge=G;default:o.hasOwnProperty(f)||qt(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":he=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==G&&qt(t,n,u,f,o,G)}n=C,a=y,o=ge,he!=null?bn(t,!!a,he,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":ge=he=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":he=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qt(t,n,y,u,o,f)}ci(t,he,ge);return;case"option":for(var Je in a)if(he=a[Je],a.hasOwnProperty(Je)&&he!=null&&!o.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:qt(t,n,Je,null,o,he)}for(G in o)if(he=o[G],ge=a[G],o.hasOwnProperty(G)&&he!==ge&&(he!=null||ge!=null))switch(G){case"selected":t.selected=he&&typeof he!="function"&&typeof he!="symbol";break;default:qt(t,n,G,he,o,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)he=a[ct],a.hasOwnProperty(ct)&&he!=null&&!o.hasOwnProperty(ct)&&qt(t,n,ct,null,o,he);for(le in o)if(he=o[le],ge=a[le],o.hasOwnProperty(le)&&he!==ge&&(he!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:qt(t,n,le,he,o,ge)}return;default:if(It(n)){for(var Zt in a)he=a[Zt],a.hasOwnProperty(Zt)&&he!==void 0&&!o.hasOwnProperty(Zt)&&Mh(t,n,Zt,void 0,o,he);for(Ee in o)he=o[Ee],ge=a[Ee],!o.hasOwnProperty(Ee)||he===ge||he===void 0&&ge===void 0||Mh(t,n,Ee,he,o,ge);return}}for(var te in a)he=a[te],a.hasOwnProperty(te)&&he!=null&&!o.hasOwnProperty(te)&&qt(t,n,te,null,o,he);for(Ae in o)he=o[Ae],ge=a[Ae],!o.hasOwnProperty(Ae)||he===ge||he==null&&ge==null||qt(t,n,Ae,he,o,ge)}function o_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&o_(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],le=G.startTime;if(le>C)break;var Ee=G.transferSize,Ae=G.initiatorType;Ee&&o_(Ae)&&(G=G.responseEnd,y+=Ee*(G<C?1:(C-le)/(G-le)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,bh=null;function wc(t){return t.nodeType===9?t:t.ownerDocument}function l_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Th(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ah=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(t){return f_.resolve(null).then(t).catch(OS)}:u_;function OS(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function h_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ir(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")el(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,el(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[Fa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&el(t.ownerDocument.body);a=u}while(a);Ir(n)}function d_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Rh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rh(a),Ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function PS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function IS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function p_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function Ch(t){return t.data==="$?"||t.data==="$~"}function wh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Dh=null;function m_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function g_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function __(t,n,a){switch(n=wc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function el(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var wi=new Map,v_=new Set;function Dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=k.d;k.d={f:BS,r:FS,D:HS,C:GS,L:VS,m:kS,X:WS,S:XS,M:YS};function BS(){var t=Ta.f(),n=Sc();return t||n}function FS(t){var n=la(t);n!==null&&n.tag===5&&n.type==="form"?P0(n):Ta.r(t)}var Lr=typeof document>"u"?null:document;function y_(t,n,a){var o=Lr;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),v_.has(u)||(v_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),_n(n),o.head.appendChild(n)))}}function HS(t){Ta.D(t),y_("dns-prefetch",t,null)}function GS(t,n){Ta.C(t,n),y_("preconnect",t,n)}function VS(t,n,a){Ta.L(t,n,a);var o=Lr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=Or(t);break;case"script":f=Pr(t)}wi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(tl(f))||n==="script"&&o.querySelector(nl(f))||(n=o.createElement("link"),Bn(n,"link",t),_n(n),o.head.appendChild(n)))}}function kS(t,n){Ta.m(t,n);var a=Lr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pr(t)}if(!wi.has(f)&&(t=x({rel:"modulepreload",href:t},n),wi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(f)))return}o=a.createElement("link"),Bn(o,"link",t),_n(o),a.head.appendChild(o)}}}function XS(t,n,a){Ta.S(t,n,a);var o=Lr;if(o&&t){var u=Ga(o).hoistableStyles,f=Or(t);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(tl(f)))C.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(f))&&Nh(t,a);var G=y=o.createElement("link");_n(G),Bn(G,"link",t),G._p=new Promise(function(le,Ee){G.onload=le,G.onerror=Ee}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Nc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function WS(t,n){Ta.X(t,n);var a=Lr;if(a&&t){var o=Ga(a).hoistableScripts,u=Pr(t),f=o.get(u);f||(f=a.querySelector(nl(u)),f||(t=x({src:t,async:!0},n),(n=wi.get(u))&&Uh(t,n),f=a.createElement("script"),_n(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function YS(t,n){Ta.M(t,n);var a=Lr;if(a&&t){var o=Ga(a).hoistableScripts,u=Pr(t),f=o.get(u);f||(f=a.querySelector(nl(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&Uh(t,n),f=a.createElement("script"),_n(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function x_(t,n,a,o){var u=(u=ae.current)?Dc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Or(a.href),a=Ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Or(a.href);var f=Ga(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(tl(t)))&&!f._p&&(y.instance=f,y.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),f||qS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Pr(a),a=Ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Or(t){return'href="'+Ht(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function S_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function qS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),_n(n),t.head.appendChild(n))}function Pr(t){return'[src="'+Ht(t)+'"]'}function nl(t){return"script[async]"+t}function M_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,_n(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_n(o),Bn(o,"style",u),Nc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Or(a.href);var f=t.querySelector(tl(u));if(f)return n.state.loading|=4,n.instance=f,_n(f),f;o=S_(a),(u=wi.get(u))&&Nh(o,u),f=(t.ownerDocument||t).createElement("link"),_n(f);var y=f;return y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Bn(f,"link",o),n.state.loading|=4,Nc(f,a.precedence,t),n.instance=f;case"script":return f=Pr(a.src),(u=t.querySelector(nl(f)))?(n.instance=u,_n(u),u):(o=a,(u=wi.get(f))&&(o=x({},a),Uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),_n(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Nc(o,a.precedence,t));return n.instance}function Nc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uc=null;function E_(t,n,a){if(Uc===null){var o=new Map,u=Uc=new Map;u.set(a,o)}else u=Uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Fa]||f[gn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function b_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ZS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function T_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function KS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(o.href),f=n.querySelector(tl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_n(f);return}f=n.ownerDocument||n,o=S_(o),(u=wi.get(u))&&Nh(o,u),f=f.createElement("link"),_n(f);var y=f;y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lh=0;function QS(t,n){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lh===0&&(Lh=62500*DS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,n.forEach(JS,t),Oc=null,Lc.call(t))}function JS(t,n){if(!(n.state.loading&4)){var a=Oc.get(t);if(a)var o=a.get(null);else{a=new Map,Oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=Lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var il={$$typeof:z,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function jS(t,n,a,o,u,f,y,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function A_(t,n,a,o,u,f,y,C,G,le,Ee,Ae){return t=new jS(t,n,a,y,G,le,Ee,Ae,C),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),t.current=f,f.stateNode=t,n=hf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},gf(f),t}function R_(t){return t?(t=hr,t):hr}function C_(t,n,a,o,u,f){u=R_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Qa(t,o,n),a!==null&&(ni(a,t,n),Po(a,t,n))}function w_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Oh(t,n){w_(t,n),(t=t.alternate)&&w_(t,n)}function D_(t){if(t.tag===13||t.tag===31){var n=Ls(t,67108864);n!==null&&ni(n,t,67108864),Oh(t,67108864)}}function N_(t){if(t.tag===13||t.tag===31){var n=_i();n=_o(n);var a=Ls(t,n);a!==null&&ni(a,t,n),Oh(t,n)}}var Ic=!0;function $S(t,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=2,Ph(t,n,a,o)}finally{k.p=f,I.T=u}}function eM(t,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=8,Ph(t,n,a,o)}finally{k.p=f,I.T=u}}function Ph(t,n,a,o){if(Ic){var u=Ih(o);if(u===null)Sh(t,n,o,zc,a),L_(t,o);else if(nM(u,t,n,a,o))o.stopPropagation();else if(L_(t,o),n&4&&-1<tM.indexOf(t)){for(;u!==null;){var f=la(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Oe(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var G=1<<31-Ne(y);C.entanglements[1]|=G,y&=~G}Qi(f),(Pt&6)===0&&(yc=Ot()+500,Jo(0))}}break;case 31:case 13:C=Ls(f,2),C!==null&&ni(C,f,2),Sc(),Oh(f,2)}if(f=Ih(o),f===null&&Sh(t,n,o,zc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Sh(t,n,o,null,a)}}function Ih(t){return t=zu(t),zh(t)}var zc=null;function zh(t){if(zc=null,t=oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zc=t,null}function U_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case R:return 2;case v:return 8;case V:case W:return 32;case J:return 268435456;default:return 32}default:return 32}}var Bh=!1,os=null,ls=null,cs=null,al=new Map,sl=new Map,us=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&D_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function nM(t,n,a,o,u){switch(n){case"focusin":return os=rl(os,t,n,a,o,u),!0;case"dragenter":return ls=rl(ls,t,n,a,o,u),!0;case"mouseover":return cs=rl(cs,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return al.set(f,rl(al.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,sl.set(f,rl(sl.get(f)||null,t,n,a,o,u)),!0}return!1}function O_(t){var n=oa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,sr(t.priority,function(){N_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,sr(t.priority,function(){N_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ih(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Iu=o,a.target.dispatchEvent(o),Iu=null}else return n=la(a),n!==null&&D_(n),t.blockedOn=a,!1;n.shift()}return!0}function P_(t,n,a){Bc(t)&&a.delete(n)}function iM(){Bh=!1,os!==null&&Bc(os)&&(os=null),ls!==null&&Bc(ls)&&(ls=null),cs!==null&&Bc(cs)&&(cs=null),al.forEach(P_),sl.forEach(P_)}function Fc(t,n){t.blockedOn===n&&(t.blockedOn=null,Bh||(Bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iM)))}var Hc=null;function I_(t){Hc!==t&&(Hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(zh(o||a)===null)continue;break}var f=la(a);f!==null&&(t.splice(n,3),n-=3,If(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ir(t){function n(G){return Fc(G,t)}os!==null&&Fc(os,t),ls!==null&&Fc(ls,t),cs!==null&&Fc(cs,t),al.forEach(n),sl.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)O_(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[On]||null;if(typeof f=="function")y||I_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[On]||null)C=y.formAction;else if(zh(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),I_(a)}}}function z_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Fh(t){this._internalRoot=t}Gc.prototype.render=Fh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();C_(a,o,t,n,null,null)},Gc.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;C_(t.current,2,null,t,null,null),Sc(),n[Qn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=yo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&O_(t)}};var B_=e.version;if(B_!=="19.2.8")throw Error(s(527,B_,"19.2.8"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var aM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{ne=Vc.inject(aM),se=Vc}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=W0,f=Y0,y=q0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=A_(t,1,!1,null,null,a,o,null,u,f,y,z_),t[Qn]=n.current,xh(t),new Fh(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=W0,y=Y0,C=q0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=A_(t,1,!0,n,a??null,o,u,G,f,y,C,z_),n.context=R_(null),a=n.current,o=_i(),o=_o(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,qe(n,a),Qi(n),t[Qn]=n.current,xh(t),new Gc(n)},ol.version="19.2.8",ol}var Y_;function dM(){if(Y_)return Gh.exports;Y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=hM(),Gh.exports}var pM=dM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ry=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=at.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>at.createElement("svg",{ref:m,...gM,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:ry("lucide",l),...p},[...h.map(([d,_])=>at.createElement(d,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(r,e)=>{const i=at.forwardRef(({className:s,...l},c)=>at.createElement(_M,{ref:c,iconNode:e,className:ry(`lucide-${mM(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=tn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=tn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=tn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=tn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=tn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=tn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=tn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=tn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=tn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=tn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=tn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=tn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=tn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=tn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=tn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=tn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=tn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=tn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=tn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=tn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=tn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=tn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=tn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=tn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=tn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="185",ao={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OM=0,J_=1,PM=2,xl=1,IM=2,vl=3,Ss=0,ri=1,ea=2,Oa=0,so=1,j_=2,$_=3,ev=4,zM=5,Qs=100,BM=101,FM=102,HM=103,GM=104,VM=200,kM=201,XM=202,WM=203,wd=204,Dd=205,YM=206,qM=207,ZM=208,KM=209,QM=210,JM=211,jM=212,$M=213,eE=214,Nd=0,Ud=1,Ld=2,co=3,Od=4,Pd=5,Id=6,zd=7,cy=0,tE=1,nE=2,ia=0,uy=1,fy=2,hy=3,Lp=4,dy=5,py=6,my=7,gy=300,nr=301,uo=302,Wh=303,Yh=304,Nu=306,Bd=1e3,Ua=1001,Fd=1002,Hn=1003,iE=1004,Xc=1005,Nn=1006,qh=1007,$s=1008,xi=1009,_y=1010,vy=1011,Tl=1012,Op=1013,sa=1014,ta=1015,za=1016,Pp=1017,Ip=1018,Al=1020,yy=35902,xy=35899,Sy=1021,My=1022,ki=1023,Ba=1026,er=1027,Ey=1028,zp=1029,ir=1030,Bp=1031,Fp=1033,vu=33776,yu=33777,xu=33778,Su=33779,Hd=35840,Gd=35841,Vd=35842,kd=35843,Xd=36196,Wd=37492,Yd=37496,qd=37488,Zd=37489,Eu=37490,Kd=37491,Qd=37808,Jd=37809,jd=37810,$d=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,bu=36285,mp=36286,aE=3200,gp=0,sE=1,ys="",ai="srgb",Tu="srgb-linear",Au="linear",Xt="srgb",zr=7680,tv=519,rE=512,oE=513,lE=514,Hp=515,cE=516,uE=517,Gp=518,fE=519,_p=35044,nv="300 es",na=2e3,Rl=2001;function hE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dE(){const r=Ru("canvas");return r.style.display="block",r}const iv={};function Cu(...r){const e="THREE."+r.shift();console.log(e,...r)}function by(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=by(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=by(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function ro(...r){const e=r.join(" ");e in iv||(iv[e]=!0,ut(...r))}function pE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const mE={[Nd]:Ud,[Ld]:Id,[Od]:zd,[co]:Pd,[Ud]:Nd,[Id]:Ld,[zd]:Od,[Pd]:co};class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let av=1234567;const Sl=Math.PI/180,Cl=180/Math.PI;function Pa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function vt(r,e,i){return Math.max(e,Math.min(i,r))}function Vp(r,e){return(r%e+e)%e}function gE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function _E(r,e,i){return r!==e?(i-r)/(e-r):0}function Ml(r,e,i){return(1-i)*r+i*e}function vE(r,e,i,s){return Ml(r,e,1-Math.exp(-i*s))}function yE(r,e=1){return e-Math.abs(Vp(r,e*2)-e)}function xE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function SE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function ME(r,e){return r+Math.floor(Math.random()*(e-r+1))}function EE(r,e){return r+Math.random()*(e-r)}function bE(r){return r*(.5-Math.random())}function TE(r){r!==void 0&&(av=r);let e=av+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AE(r){return r*Sl}function RE(r){return r*Cl}function CE(r){return(r&r-1)===0&&r!==0}function wE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function NE(r,e,i,s,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+s)/2),_=h((e+s)/2),x=c((e-s)/2),g=h((e-s)/2),M=c((s-e)/2),T=h((s-e)/2);switch(l){case"XYX":r.set(p*_,m*x,m*g,p*d);break;case"YZY":r.set(m*g,p*_,m*x,p*d);break;case"ZXZ":r.set(m*x,m*g,p*_,p*d);break;case"XZX":r.set(p*_,m*T,m*M,p*d);break;case"YXY":r.set(m*M,p*_,m*T,p*d);break;case"ZYZ":r.set(m*T,m*M,p*_,p*d);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vp={DEG2RAD:Sl,RAD2DEG:Cl,generateUUID:Pa,clamp:vt,euclideanModulo:Vp,mapLinear:gE,inverseLerp:_E,lerp:Ml,damp:vE,pingpong:yE,smoothstep:xE,smootherstep:SE,randInt:ME,randFloat:EE,randFloatSpread:bE,seededRandom:TE,degToRad:AE,radToDeg:RE,isPowerOfTwo:CE,ceilPowerOfTwo:wE,floorPowerOfTwo:DE,setQuaternionFromProperEuler:NE,normalize:Wt,denormalize:Vi},nm=class nm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nm.prototype.isVector2=!0;let ot=nm;class Ms{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],M=c[h+1],T=c[h+2],N=c[h+3];if(x!==N||m!==g||d!==M||_!==T){let E=m*g+d*M+_*T+x*N;E<0&&(g=-g,M=-M,T=-T,N=-N,E=-E);let S=1-p;if(E<.9995){const P=Math.acos(E),z=Math.sin(P);S=Math.sin(S*P)/z,p=Math.sin(p*P)/z,m=m*S+g*p,d=d*S+M*p,_=_*S+T*p,x=x*S+N*p}else{m=m*S+g*p,d=d*S+M*p,_=_*S+T*p,x=x*S+N*p;const P=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=P,d*=P,_*=P,x*=P}}e[i]=m,e[i+1]=d,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],x=c[h],g=c[h+1],M=c[h+2],T=c[h+3];return e[i]=p*T+_*x+m*M-d*g,e[i+1]=m*T+_*g+d*x-p*M,e[i+2]=d*T+_*M+p*g-m*x,e[i+3]=_*T-p*x-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+d*M*T,this._y=d*M*x-g*_*T,this._z=d*_*T+g*M*x,this._w=d*_*x-g*M*T;break;case"YXZ":this._x=g*_*x+d*M*T,this._y=d*M*x-g*_*T,this._z=d*_*T-g*M*x,this._w=d*_*x+g*M*T;break;case"ZXY":this._x=g*_*x-d*M*T,this._y=d*M*x+g*_*T,this._z=d*_*T+g*M*x,this._w=d*_*x-g*M*T;break;case"ZYX":this._x=g*_*x-d*M*T,this._y=d*M*x+g*_*T,this._z=d*_*T-g*M*x,this._w=d*_*x+g*M*T;break;case"YZX":this._x=g*_*x+d*M*T,this._y=d*M*x+g*_*T,this._z=d*_*T-g*M*x,this._w=d*_*x-g*M*T;break;case"XZY":this._x=g*_*x-d*M*T,this._y=d*M*x-g*_*T,this._z=d*_*T+g*M*x,this._w=d*_*x+g*M*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const im=class im{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),_=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*_,this.y=s+m*_+p*d-c*x,this.z=l+m*x+c*_-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};im.prototype.isVector3=!0;let $=im;const Zh=new $,sv=new Ms,am=class am{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],x=s[7],g=s[2],M=s[5],T=s[8],N=l[0],E=l[3],S=l[6],P=l[1],z=l[4],w=l[7],B=l[2],U=l[5],F=l[8];return c[0]=h*N+p*P+m*B,c[3]=h*E+p*z+m*U,c[6]=h*S+p*w+m*F,c[1]=d*N+_*P+x*B,c[4]=d*E+_*z+x*U,c[7]=d*S+_*w+x*F,c[2]=g*N+M*P+T*B,c[5]=g*E+M*z+T*U,c[8]=g*S+M*w+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8],x=_*h-p*d,g=p*m-_*c,M=d*c-h*m,T=i*x+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=x*N,e[1]=(l*d-_*s)*N,e[2]=(p*s-l*h)*N,e[3]=g*N,e[4]=(_*i-l*m)*N,e[5]=(l*c-p*i)*N,e[6]=M*N,e[7]=(s*m-d*i)*N,e[8]=(h*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,i)),this}rotate(e){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,i){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};am.prototype.isMatrix3=!0;let ht=am;const Kh=new ht,rv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ov=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const r={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xt&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xt&&(l.r=oo(l.r),l.g=oo(l.g),l.b=oo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?Au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Tu]:{primaries:e,whitePoint:s,transfer:Au,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const Ct=UE();function Ia(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class LE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Br===void 0&&(Br=Ru("canvas")),Br.width=e.width,Br.height=e.height;const l=Br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ru("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ia(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Qh(l[h].image)):c.push(Qh(l[h]))}else c=Qh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let PE=0;const Jh=new $;class Wn extends Ts{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ua,l=Ua,c=Nn,h=$s,p=ki,m=xi,d=Wn.DEFAULT_ANISOTROPY,_=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Pa(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=gy;Wn.DEFAULT_ANISOTROPY=1;const sm=class sm{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],_=m[4],x=m[8],g=m[1],M=m[5],T=m[9],N=m[2],E=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-N)<.01&&Math.abs(T-E)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+N)<.1&&Math.abs(T+E)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,w=(M+1)/2,B=(S+1)/2,U=(_+g)/4,F=(x+N)/4,b=(T+E)/4;return z>w&&z>B?z<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(z),l=U/s,c=F/s):w>B?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=F/c,l=b/c),this.set(s,l,c,i),this}let P=Math.sqrt((E-T)*(E-T)+(x-N)*(x-N)+(g-_)*(g-_));return Math.abs(P)<.001&&(P=1),this.x=(E-T)/P,this.y=(x-N)/P,this.z=(g-_)/P,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sm.prototype.isVector4=!0;let un=sm;class IE extends Ts{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Wn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new kp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends IE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ty extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=class Du{constructor(e,i,s,l,c,h,p,m,d,_,x,g,M,T,N,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,_,x,g,M,T,N,E)}set(e,i,s,l,c,h,p,m,d,_,x,g,M,T,N,E){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=x,S[14]=g,S[3]=M,S[7]=T,S[11]=N,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Du().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Fr.setFromMatrixColumn(e,0).length(),c=1/Fr.setFromMatrixColumn(e,1).length(),h=1/Fr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*_,M=h*x,T=p*_,N=p*x;i[0]=m*_,i[4]=-m*x,i[8]=d,i[1]=M+T*d,i[5]=g-N*d,i[9]=-p*m,i[2]=N-g*d,i[6]=T+M*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*_,M=m*x,T=d*_,N=d*x;i[0]=g+N*p,i[4]=T*p-M,i[8]=h*d,i[1]=h*x,i[5]=h*_,i[9]=-p,i[2]=M*p-T,i[6]=N+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*_,M=m*x,T=d*_,N=d*x;i[0]=g-N*p,i[4]=-h*x,i[8]=T+M*p,i[1]=M+T*p,i[5]=h*_,i[9]=N-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*_,M=h*x,T=p*_,N=p*x;i[0]=m*_,i[4]=T*d-M,i[8]=g*d+N,i[1]=m*x,i[5]=N*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,M=h*d,T=p*m,N=p*d;i[0]=m*_,i[4]=N-g*x,i[8]=T*x+M,i[1]=x,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*x+T,i[10]=g-N*x}else if(e.order==="XZY"){const g=h*m,M=h*d,T=p*m,N=p*d;i[0]=m*_,i[4]=-x,i[8]=d*_,i[1]=g*x+N,i[5]=h*_,i[9]=M*x-T,i[2]=T*x-M,i[6]=p*_,i[10]=N*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,FE)}lookAt(e,i,s){const l=this.elements;return vi.subVectors(e,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),hs.crossVectors(s,vi),hs.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),hs.crossVectors(s,vi)),hs.normalize(),Wc.crossVectors(vi,hs),l[0]=hs.x,l[4]=Wc.x,l[8]=vi.x,l[1]=hs.y,l[5]=Wc.y,l[9]=vi.y,l[2]=hs.z,l[6]=Wc.z,l[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],x=s[5],g=s[9],M=s[13],T=s[2],N=s[6],E=s[10],S=s[14],P=s[3],z=s[7],w=s[11],B=s[15],U=l[0],F=l[4],b=l[8],O=l[12],Y=l[1],H=l[5],Z=l[9],pe=l[13],de=l[2],ie=l[6],I=l[10],k=l[14],re=l[3],Se=l[7],be=l[11],L=l[15];return c[0]=h*U+p*Y+m*de+d*re,c[4]=h*F+p*H+m*ie+d*Se,c[8]=h*b+p*Z+m*I+d*be,c[12]=h*O+p*pe+m*k+d*L,c[1]=_*U+x*Y+g*de+M*re,c[5]=_*F+x*H+g*ie+M*Se,c[9]=_*b+x*Z+g*I+M*be,c[13]=_*O+x*pe+g*k+M*L,c[2]=T*U+N*Y+E*de+S*re,c[6]=T*F+N*H+E*ie+S*Se,c[10]=T*b+N*Z+E*I+S*be,c[14]=T*O+N*pe+E*k+S*L,c[3]=P*U+z*Y+w*de+B*re,c[7]=P*F+z*H+w*ie+B*Se,c[11]=P*b+z*Z+w*I+B*be,c[15]=P*O+z*pe+w*k+B*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],_=e[2],x=e[6],g=e[10],M=e[14],T=e[3],N=e[7],E=e[11],S=e[15],P=m*M-d*g,z=p*M-d*x,w=p*g-m*x,B=h*M-d*_,U=h*g-m*_,F=h*x-p*_;return i*(N*P-E*z+S*w)-s*(T*P-E*B+S*U)+l*(T*z-N*B+S*F)-c*(T*w-N*U+E*F)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],_=e[10];return i*(h*_-p*d)-s*(c*_-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8],x=e[9],g=e[10],M=e[11],T=e[12],N=e[13],E=e[14],S=e[15],P=i*p-s*h,z=i*m-l*h,w=i*d-c*h,B=s*m-l*p,U=s*d-c*p,F=l*d-c*m,b=_*N-x*T,O=_*E-g*T,Y=_*S-M*T,H=x*E-g*N,Z=x*S-M*N,pe=g*S-M*E,de=P*pe-z*Z+w*H+B*Y-U*O+F*b;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/de;return e[0]=(p*pe-m*Z+d*H)*ie,e[1]=(l*Z-s*pe-c*H)*ie,e[2]=(N*F-E*U+S*B)*ie,e[3]=(g*U-x*F-M*B)*ie,e[4]=(m*Y-h*pe-d*O)*ie,e[5]=(i*pe-l*Y+c*O)*ie,e[6]=(E*w-T*F-S*z)*ie,e[7]=(_*F-g*w+M*z)*ie,e[8]=(h*Z-p*Y+d*b)*ie,e[9]=(s*Y-i*Z-c*b)*ie,e[10]=(T*U-N*w+S*P)*ie,e[11]=(x*w-_*U-M*P)*ie,e[12]=(p*O-h*H-m*b)*ie,e[13]=(i*H-s*O+l*b)*ie,e[14]=(N*z-T*B-E*P)*ie,e[15]=(_*B-x*z+g*P)*ie,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,x=p+p,g=c*d,M=c*_,T=c*x,N=h*_,E=h*x,S=p*x,P=m*d,z=m*_,w=m*x,B=s.x,U=s.y,F=s.z;return l[0]=(1-(N+S))*B,l[1]=(M+w)*B,l[2]=(T-z)*B,l[3]=0,l[4]=(M-w)*U,l[5]=(1-(g+S))*U,l[6]=(E+P)*U,l[7]=0,l[8]=(T+z)*F,l[9]=(E-P)*F,l[10]=(1-(g+N))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Fr.set(l[0],l[1],l[2]).length();const p=Fr.set(l[4],l[5],l[6]).length(),m=Fr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Fi.copy(this);const d=1/h,_=1/p,x=1/m;return Fi.elements[0]*=d,Fi.elements[1]*=d,Fi.elements[2]*=d,Fi.elements[4]*=_,Fi.elements[5]*=_,Fi.elements[6]*=_,Fi.elements[8]*=x,Fi.elements[9]*=x,Fi.elements[10]*=x,i.setFromRotationMatrix(Fi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=na,m=!1){const d=this.elements,_=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,N;if(m)T=c/(h-c),N=h*c/(h-c);else if(p===na)T=-(h+c)/(h-c),N=-2*h*c/(h-c);else if(p===Rl)T=-h/(h-c),N=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=N,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=na,m=!1){const d=this.elements,_=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,N;if(m)T=1/(h-c),N=h/(h-c);else if(p===na)T=-2/(h-c),N=-(h+c)/(h-c);else if(p===Rl)T=-1/(h-c),N=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=N,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Du.prototype.isMatrix4=!0;let cn=Du;const Fr=new $,Fi=new cn,BE=new $(0,0,0),FE=new $(1,1,1),hs=new $,Wc=new $,vi=new $,lv=new cn,cv=new Ms;class Es{constructor(e=0,i=0,s=0,l=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return cv.setFromEuler(this),this.setFromQuaternion(cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const uv=new $,Hr=new Ms,Aa=new cn,Yc=new $,ll=new $,GE=new $,VE=new Ms,fv=new $(1,0,0),hv=new $(0,1,0),dv=new $(0,0,1),pv={type:"added"},kE={type:"removed"},Gr={type:"childadded",child:null},jh={type:"childremoved",child:null};class Un extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new $,i=new Es,s=new Ms,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ht}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Hr.setFromAxisAngle(e,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,i){return Hr.setFromAxisAngle(e,i),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(fv,e)}rotateY(e){return this.rotateOnAxis(hv,e)}rotateZ(e){return this.rotateOnAxis(dv,e)}translateOnAxis(e,i){return uv.copy(e).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(fv,e)}translateY(e){return this.translateOnAxis(hv,e)}translateZ(e){return this.translateOnAxis(dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Yc.copy(e):Yc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ll,Yc,this.up):Aa.lookAt(Yc,ll,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Hr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pv),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kE),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pv),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),_=h(e.images),x=h(e.shapes),g=h(e.skeletons),M=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new $(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const N of e.hand.values()){const E=i.getJointPose(N,s),S=this._getHandJoint(d,N);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Na;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},qc={h:0,s:0,l:0};function ed(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Mt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=Vp(e,1),i=vt(i,0,1),s=vt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=ed(h,c,e+1/3),this.g=ed(h,c,e),this.b=ed(h,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const s=Ay[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ct.workingToColorSpace(Xn.copy(this),e),Math.round(vt(Xn.r*255,0,255))*65536+Math.round(vt(Xn.g*255,0,255))*256+Math.round(vt(Xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=_<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=_,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ai){Ct.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+i,ds.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ds),e.getHSL(qc);const s=Ml(ds.h,qc.h,i),l=Ml(ds.s,qc.s,i),c=Ml(ds.l,qc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Mt;Mt.NAMES=Ay;class Wp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=i,this.far=s}clone(){return new Wp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class WE extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hi=new $,Ra=new $,td=new $,Ca=new $,Vr=new $,kr=new $,mv=new $,nd=new $,id=new $,ad=new $,sd=new un,rd=new un,od=new un;class Li{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Hi.subVectors(e,i),l.cross(Hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Hi.subVectors(l,i),Ra.subVectors(s,i),td.subVectors(e,i);const h=Hi.dot(Hi),p=Hi.dot(Ra),m=Hi.dot(td),d=Ra.dot(Ra),_=Ra.dot(td),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*_)*g,T=(h*_-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(h,Ca.y),m.addScaledVector(p,Ca.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return sd.setScalar(0),rd.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,s),od.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(sd,c.x),h.addScaledVector(rd,c.y),h.addScaledVector(od,c.z),h}static isFrontFacing(e,i,s,l){return Hi.subVectors(s,i),Ra.subVectors(e,i),Hi.cross(Ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Hi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Vr.subVectors(l,s),kr.subVectors(c,s),nd.subVectors(e,s);const m=Vr.dot(nd),d=kr.dot(nd);if(m<=0&&d<=0)return i.copy(s);id.subVectors(e,l);const _=Vr.dot(id),x=kr.dot(id);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Vr,h);ad.subVectors(e,c);const M=Vr.dot(ad),T=kr.dot(ad);if(T>=0&&M<=T)return i.copy(c);const N=M*d-m*T;if(N<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(kr,p);const E=_*T-M*x;if(E<=0&&x-_>=0&&M-T>=0)return mv.subVectors(c,l),p=(x-_)/(x-_+(M-T)),i.copy(l).addScaledVector(mv,p);const S=1/(E+N+g);return h=N*S,p=g*S,i.copy(s).addScaledVector(Vr,h).addScaledVector(kr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Gi):Gi.fromBufferAttribute(c,h),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zc.copy(s.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),Kc.subVectors(this.max,cl),Xr.subVectors(e.a,cl),Wr.subVectors(e.b,cl),Yr.subVectors(e.c,cl),ps.subVectors(Wr,Xr),ms.subVectors(Yr,Wr),Ys.subVectors(Xr,Yr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Ys.z,Ys.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Ys.z,0,-Ys.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Ys.y,Ys.x,0];return!ld(i,Xr,Wr,Yr,Kc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,Xr,Wr,Yr,Kc))?!1:(Qc.crossVectors(ps,ms),i=[Qc.x,Qc.y,Qc.z],ld(i,Xr,Wr,Yr,Kc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new $,new $,new $,new $,new $,new $,new $,new $],Gi=new $,Zc=new Nl,Xr=new $,Wr=new $,Yr=new $,ps=new $,ms=new $,Ys=new $,cl=new $,Kc=new $,Qc=new $,qs=new $;function ld(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){qs.fromArray(r,c);const p=l.x*Math.abs(qs.x)+l.y*Math.abs(qs.y)+l.z*Math.abs(qs.z),m=e.dot(qs),d=i.dot(qs),_=s.dot(qs);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const Mn=new $,Jc=new ot;let YE=0;class Xi extends Ts{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=_p,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Jc.fromBufferAttribute(this,i),Jc.applyMatrix3(e),this.setXY(i,Jc.x,Jc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ry extends Xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Cy extends Xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends Xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const qE=new Nl,ul=new $,cd=new $;class Yp{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):qE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ul,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(cd)),this.expandByPoint(ul.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZE=0;const Di=new cn,ud=new Un,qr=new $,yi=new Nl,fl=new Nl,Dn=new $;class Si extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hE(e)?Cy:Ry)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];fl.setFromBufferAttribute(p),this.morphTargetsRelative?(Dn.addVectors(yi.min,fl.min),yi.expandByPoint(Dn),Dn.addVectors(yi.max,fl.max),yi.expandByPoint(Dn)):(yi.expandByPoint(fl.min),yi.expandByPoint(fl.max))}yi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)Dn.fromBufferAttribute(p,d),m&&(qr.fromBufferAttribute(e,d),Dn.add(qr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Xi(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,_=new $,x=new $,g=new ot,M=new ot,T=new ot,N=new $,E=new $;function S(b,O,Y){d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,O),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,O),T.fromBufferAttribute(c,Y),_.sub(d),x.sub(d),M.sub(g),T.sub(g);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(N.copy(_).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(H),E.copy(x).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(H),p[b].add(N),p[O].add(N),p[Y].add(N),m[b].add(E),m[O].add(E),m[Y].add(E))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let b=0,O=P.length;b<O;++b){const Y=P[b],H=Y.start,Z=Y.count;for(let pe=H,de=H+Z;pe<de;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const z=new $,w=new $,B=new $,U=new $;function F(b){B.fromBufferAttribute(l,b),U.copy(B);const O=p[b];z.copy(O),z.sub(B.multiplyScalar(B.dot(O))).normalize(),w.crossVectors(U,O);const H=w.dot(m[b])<0?-1:1;h.setXYZW(b,z.x,z.y,z.z,H)}for(let b=0,O=P.length;b<O;++b){const Y=P[b],H=Y.start,Z=Y.count;for(let pe=H,de=H+Z;pe<de;pe+=3)F(e.getX(pe+0)),F(e.getX(pe+1)),F(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,p=new $,m=new $,d=new $,_=new $,x=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),N=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,N),d.fromBufferAttribute(s,E),p.add(_),m.add(_),d.add(_),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(E,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let M=0,T=0;for(let N=0,E=m.length;N<E;N++){p.isInterleavedBufferAttribute?M=m[N]*p.data.stride+p.offset:M=m[N]*_;for(let S=0;S<_;S++)g[T++]=d[M++]}return new Xi(g,_,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=e.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,_=h.length;d<_;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KE{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=Pa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new $;class wu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Cu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Xi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let QE=0;class mo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=so,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Dd,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wd&&(s.blendSrc=this.blendSrc),this.blendDst!==Dd&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wy extends mo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zr;const hl=new $,Kr=new $,Qr=new $,Jr=new ot,dl=new ot,Dy=new cn,jc=new $,pl=new $,$c=new $,gv=new ot,fd=new ot,_v=new ot;class JE extends Un{constructor(e=new wy){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new KE(i,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new wu(s,3,0,!1)),Zr.setAttribute("uv",new wu(s,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),Dy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Qr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;eu(jc.set(-.5,-.5,0),Qr,h,Kr,l,c),eu(pl.set(.5,-.5,0),Qr,h,Kr,l,c),eu($c.set(.5,.5,0),Qr,h,Kr,l,c),gv.set(0,0),fd.set(1,0),_v.set(1,1);let p=e.ray.intersectTriangle(jc,pl,$c,!1,hl);if(p===null&&(eu(pl.set(-.5,.5,0),Qr,h,Kr,l,c),fd.set(0,1),p=e.ray.intersectTriangle(jc,$c,pl,!1,hl),p===null))return;const m=e.ray.origin.distanceTo(hl);m<e.near||m>e.far||i.push({distance:m,point:hl.clone(),uv:Li.getInterpolation(hl,jc,pl,$c,gv,fd,_v,new ot),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function eu(r,e,i,s,l,c){Jr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(dl.x=c*Jr.x-l*Jr.y,dl.y=l*Jr.x+c*Jr.y):dl.copy(Jr),r.copy(e),r.x+=dl.x,r.y+=dl.y,r.applyMatrix4(Dy)}const Da=new $,hd=new $,tu=new $,gs=new $,dd=new $,nu=new $,pd=new $;class qp{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hd.copy(e).add(i).multiplyScalar(.5),tu.copy(i).sub(e).normalize(),gs.copy(this.origin).sub(hd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(tu),p=gs.dot(this.direction),m=-gs.dot(tu),d=gs.lengthSq(),_=Math.abs(1-h*h);let x,g,M,T;if(_>0)if(x=h*m-p,g=h*p-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const N=1/_;x*=N,g*=N,M=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(hd).addScaledVector(tu,g),M}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const s=Da.dot(this.direction),l=Da.dot(Da)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),_>=0?(c=(e.min.y-g.y)*_,h=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,h=(e.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,s,l,c){dd.subVectors(i,e),nu.subVectors(s,e),pd.crossVectors(dd,nu);let h=this.direction.dot(pd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;gs.subVectors(this.origin,e);const m=p*this.direction.dot(nu.crossVectors(gs,nu));if(m<0)return null;const d=p*this.direction.dot(dd.cross(gs));if(d<0||m+d>h)return null;const _=-p*gs.dot(pd);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class El extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vv=new cn,Zs=new qp,iu=new Yp,yv=new $,au=new $,su=new $,ru=new $,md=new $,ou=new $,xv=new $,lu=new $;class En extends Un{constructor(e=new Si,i=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){ou.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(md.fromBufferAttribute(x,e),h?ou.addScaledVector(md,_):ou.addScaledVector(md.sub(i),_))}i.add(ou)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(iu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(iu,yv)===null||Zs.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(vv.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(vv),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Zs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,N=g.length;T<N;T++){const E=g[T],S=h[E.materialIndex],P=Math.max(E.start,M.start),z=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let w=P,B=z;w<B;w+=3){const U=p.getX(w),F=p.getX(w+1),b=p.getX(w+2);l=cu(this,S,e,s,d,_,x,U,F,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),N=Math.min(p.count,M.start+M.count);for(let E=T,S=N;E<S;E+=3){const P=p.getX(E),z=p.getX(E+1),w=p.getX(E+2);l=cu(this,h,e,s,d,_,x,P,z,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,N=g.length;T<N;T++){const E=g[T],S=h[E.materialIndex],P=Math.max(E.start,M.start),z=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let w=P,B=z;w<B;w+=3){const U=w,F=w+1,b=w+2;l=cu(this,S,e,s,d,_,x,U,F,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),N=Math.min(m.count,M.start+M.count);for(let E=T,S=N;E<S;E+=3){const P=E,z=E+1,w=E+2;l=cu(this,h,e,s,d,_,x,P,z,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function jE(r,e,i,s,l,c,h,p){let m;if(e.side===ri?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===Ss,p),m===null)return null;lu.copy(p),lu.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(lu);return d<i.near||d>i.far?null:{distance:d,point:lu.clone(),object:r}}function cu(r,e,i,s,l,c,h,p,m,d){r.getVertexPosition(p,au),r.getVertexPosition(m,su),r.getVertexPosition(d,ru);const _=jE(r,e,i,s,au,su,ru,xv);if(_){const x=new $;Li.getBarycoord(xv,au,su,ru,x),l&&(_.uv=Li.getInterpolatedAttribute(l,p,m,d,x,new ot)),c&&(_.uv1=Li.getInterpolatedAttribute(c,p,m,d,x,new ot)),h&&(_.normal=Li.getInterpolatedAttribute(h,p,m,d,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Li.getNormal(au,su,ru,g.normal),_.face=g,_.barycoord=x}return _}class $E extends Wn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=Hn,_=Hn,x,g){super(null,h,p,m,d,_,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new $,eb=new $,tb=new ht;class vs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=gd.subVectors(s,i).cross(eb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(gd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||tb.getNormalMatrix(e),l=this.coplanarPoint(gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Yp,nb=new ot(.5,.5),uu=new $;class Zp{constructor(e=new vs,i=new vs,s=new vs,l=new vs,c=new vs,h=new vs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=na,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],M=c[7],T=c[8],N=c[9],E=c[10],S=c[11],P=c[12],z=c[13],w=c[14],B=c[15];if(l[0].setComponents(d-h,M-_,S-T,B-P).normalize(),l[1].setComponents(d+h,M+_,S+T,B+P).normalize(),l[2].setComponents(d+p,M+x,S+N,B+z).normalize(),l[3].setComponents(d-p,M-x,S-N,B-z).normalize(),s)l[4].setComponents(m,g,E,w).normalize(),l[5].setComponents(d-m,M-g,S-E,B-w).normalize();else if(l[4].setComponents(d-m,M-g,S-E,B-w).normalize(),i===na)l[5].setComponents(d+m,M+g,S+E,B+w).normalize();else if(i===Rl)l[5].setComponents(m,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const i=nb.distanceTo(e.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(uu.x=l.normal.x>0?e.max.x:e.min.x,uu.y=l.normal.y>0?e.max.y:e.min.y,uu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ny extends Wn{constructor(e=[],i=nr,s,l,c,h,p,m,d,_){super(e,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends Wn{constructor(e,i,s,l,c,h,p,m,d){super(e,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Wn{constructor(e,i,s=sa,l,c,h,p=Hn,m=Hn,d,_=Ba,x=1){if(_!==Ba&&_!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ab extends fo{constructor(e,i=sa,s=nr,l,c,h=Hn,p=Hn,m,d=Ba){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bs extends Si{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(x,2));function T(N,E,S,P,z,w,B,U,F,b,O){const Y=w/F,H=B/b,Z=w/2,pe=B/2,de=U/2,ie=F+1,I=b+1;let k=0,re=0;const Se=new $;for(let be=0;be<I;be++){const L=be*H-pe;for(let j=0;j<ie;j++){const Ce=j*Y-Z;Se[N]=Ce*P,Se[E]=L*z,Se[S]=de,d.push(Se.x,Se.y,Se.z),Se[N]=0,Se[E]=0,Se[S]=U>0?1:-1,_.push(Se.x,Se.y,Se.z),x.push(j/F),x.push(1-be/b),k+=1}}for(let be=0;be<b;be++)for(let L=0;L<F;L++){const j=g+L+ie*be,Ce=g+L+ie*(be+1),Ie=g+(L+1)+ie*(be+1),Be=g+(L+1)+ie*be;m.push(j,Ce,Be),m.push(Ce,Ie,Be),re+=6}p.addGroup(M,re,O),M+=re,g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uu extends Si{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],g=[],M=[];let T=0;const N=[],E=s/2;let S=0;P(),h===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(_),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(M,2));function P(){const w=new $,B=new $;let U=0;const F=(i-e)/s;for(let b=0;b<=c;b++){const O=[],Y=b/c,H=Y*(i-e)+e;for(let Z=0;Z<=l;Z++){const pe=Z/l,de=pe*m+p,ie=Math.sin(de),I=Math.cos(de);B.x=H*ie,B.y=-Y*s+E,B.z=H*I,x.push(B.x,B.y,B.z),w.set(ie,F,I).normalize(),g.push(w.x,w.y,w.z),M.push(pe,1-Y),O.push(T++)}N.push(O)}for(let b=0;b<l;b++)for(let O=0;O<c;O++){const Y=N[O][b],H=N[O+1][b],Z=N[O+1][b+1],pe=N[O][b+1];(e>0||O!==0)&&(_.push(Y,H,pe),U+=3),(i>0||O!==c-1)&&(_.push(H,Z,pe),U+=3)}d.addGroup(S,U,0),S+=U}function z(w){const B=T,U=new ot,F=new $;let b=0;const O=w===!0?e:i,Y=w===!0?1:-1;for(let Z=1;Z<=l;Z++)x.push(0,E*Y,0),g.push(0,Y,0),M.push(.5,.5),T++;const H=T;for(let Z=0;Z<=l;Z++){const de=Z/l*m+p,ie=Math.cos(de),I=Math.sin(de);F.x=O*I,F.y=E*Y,F.z=O*ie,x.push(F.x,F.y,F.z),g.push(0,Y,0),U.x=ie*.5+.5,U.y=I*.5*Y+.5,M.push(U.x,U.y),T++}for(let Z=0;Z<l;Z++){const pe=B+Z,de=H+Z;w===!0?_.push(de,de+1,pe):_.push(de+1,de,pe),b+=3}d.addGroup(S,b,w===!0?1:2),S+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bl extends Uu{constructor(e=1,i=1,s=32,l=1,c=!1,h=0,p=Math.PI*2){super(0,e,i,s,l,c,h,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p}}static fromJSON(e){return new bl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr extends Si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,x=e/p,g=i/m,M=[],T=[],N=[],E=[];for(let S=0;S<_;S++){const P=S*g-h;for(let z=0;z<d;z++){const w=z*x-c;T.push(w,-P,0),N.push(0,0,1),E.push(z/p),E.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<p;P++){const z=P+d*S,w=P+d*(S+1),B=P+1+d*(S+1),U=P+1+d*S;M.push(z,w,U),M.push(w,B,U)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(N,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kp extends Si{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],_=[];let x=e;const g=(i-e)/l,M=new $,T=new ot;for(let N=0;N<=l;N++){for(let E=0;E<=s;E++){const S=c+E/s*h;M.x=x*Math.cos(S),M.y=x*Math.sin(S),m.push(M.x,M.y,M.z),d.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,_.push(T.x,T.y)}x+=g}for(let N=0;N<l;N++){const E=N*(s+1);for(let S=0;S<s;S++){const P=S+E,z=P,w=P+s+1,B=P+s+2,U=P+1;p.push(z,w,U),p.push(w,B,U)}}this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qp extends Si{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const _=[],x=new $,g=new $,M=[],T=[],N=[],E=[];for(let S=0;S<=s;S++){const P=[],z=S/s,w=h+z*p,B=e*Math.cos(w),U=Math.sqrt(e*e-B*B);let F=0;S===0&&h===0?F=.5/i:S===s&&m===Math.PI&&(F=-.5/i);for(let b=0;b<=i;b++){const O=b/i,Y=l+O*c;x.x=-U*Math.cos(Y),x.y=B,x.z=U*Math.sin(Y),T.push(x.x,x.y,x.z),g.copy(x).normalize(),N.push(g.x,g.y,g.z),E.push(O+F,1-z),P.push(d++)}_.push(P)}for(let S=0;S<s;S++)for(let P=0;P<i;P++){const z=_[S][P+1],w=_[S][P],B=_[S+1][P],U=_[S+1][P+1];(S!==0||h>0)&&M.push(z,w,U),(S!==s-1||m<Math.PI)&&M.push(w,B,U)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(N,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ho(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Sv(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Sv(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Zn(r){const e={};for(let i=0;i<r.length;i++){const s=ho(r[i]);for(const l in s)e[l]=s[l]}return e}function Sv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function sb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Ly(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const rb={clone:ho,merge:Zn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new un().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cb extends ra{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mv extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ub extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oy extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class hb extends Oy{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const _d=new cn,Ev=new $,bv=new $;class db{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Ev.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ev),bv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(bv),i.updateMatrixWorld(),_d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Rl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fu=new $,hu=new Ms,Ji=new $;class Py extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fu,hu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,hu,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(fu,hu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,hu,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new $,Tv=new ot,Av=new ot;class Ui extends Py{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,i){return this.getViewBounds(e,Tv,Av),i.subVectors(Av,Tv)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Sl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Jp extends Py{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pb extends db{constructor(){super(new Jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mb extends Oy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new pb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const jr=-90,$r=1;class gb extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(jr,$r,e,i);l.layers=this.layers,this.add(l);const c=new Ui(jr,$r,e,i);c.layers=this.layers,this.add(c);const h=new Ui(jr,$r,e,i);h.layers=this.layers,this.add(h);const p=new Ui(jr,$r,e,i);p.layers=this.layers,this.add(p);const m=new Ui(jr,$r,e,i);m.layers=this.layers,this.add(m);const d=new Ui(jr,$r,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(x,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class _b extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rv=new cn;class vb{constructor(e,i,s=0,l=1/0){this.ray=new qp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Rt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Rv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rv),this}intersectObject(e,i=!0,s=[]){return yp(e,this,s,i),s.sort(Cv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)yp(e[l],this,s,i);return s.sort(Cv),s}}function Cv(r,e){return r.distance-e.distance}function yp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)yp(c[h],e,i,!0)}}class wv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(vt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rm=class rm{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};rm.prototype.isMatrix2=!0;let Dv=rm;class yb extends Ts{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Nv(r,e,i,s){const l=xb(s);switch(i){case Sy:return r*e;case Ey:return r*e/l.components*l.byteLength;case zp:return r*e/l.components*l.byteLength;case ir:return r*e*2/l.components*l.byteLength;case Bp:return r*e*2/l.components*l.byteLength;case My:return r*e*3/l.components*l.byteLength;case ki:return r*e*4/l.components*l.byteLength;case Fp:return r*e*4/l.components*l.byteLength;case vu:case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xu:case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:case kd:return Math.max(r,16)*Math.max(e,8)/4;case Hd:case Vd:return Math.max(r,8)*Math.max(e,8)/2;case Xd:case Wd:case qd:case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yd:case Eu:case Kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case hp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bu:case mp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xb(r){switch(r){case xi:case _y:return{byteLength:1,components:1};case Tl:case vy:case za:return{byteLength:2,components:1};case Pp:case Ip:return{byteLength:2,components:4};case sa:case Op:case ta:return{byteLength:4,components:1};case yy:case xy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iy(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Sb(r){const e=new WeakMap;function i(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const _=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,_);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],N=x[M];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,x[g]=N)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const N=x[M];r.bufferSubData(d,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,p1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,T1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:bb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:Cb,aomap_pars_fragment:wb,batching_pars_vertex:Db,batching_vertex:Nb,begin_vertex:Ub,beginnormal_vertex:Lb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Vb,color_pars_vertex:kb,color_vertex:Xb,common:Wb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:qb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Kb,emissivemap_fragment:Qb,emissivemap_pars_fragment:Jb,colorspace_fragment:jb,colorspace_pars_fragment:$b,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:a1,fog_vertex:s1,fog_pars_vertex:r1,fog_fragment:o1,fog_pars_fragment:l1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:u1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:h1,lights_pars_begin:d1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:_1,lights_phong_pars_fragment:v1,lights_physical_fragment:y1,lights_physical_pars_fragment:x1,lights_fragment_begin:S1,lights_fragment_maps:M1,lights_fragment_end:E1,lightprobes_pars_fragment:b1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:C1,map_fragment:w1,map_pars_fragment:D1,map_particle_fragment:N1,map_particle_pars_fragment:U1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:O1,morphinstance_vertex:P1,morphcolor_vertex:I1,morphnormal_vertex:z1,morphtarget_pars_vertex:B1,morphtarget_vertex:F1,normal_fragment_begin:H1,normal_fragment_maps:G1,normal_pars_fragment:V1,normal_pars_vertex:k1,normal_vertex:X1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:K1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:j1,project_vertex:$1,dithering_fragment:eT,dithering_pars_fragment:tT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:sT,shadowmap_vertex:rT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:fT,specularmap_fragment:hT,specularmap_pars_fragment:dT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:_T,uv_pars_fragment:vT,uv_pars_vertex:yT,uv_vertex:xT,worldpos_vertex:ST,background_vert:MT,background_frag:ET,backgroundCube_vert:bT,backgroundCube_frag:TT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:wT,distance_vert:DT,distance_frag:NT,equirect_vert:UT,equirect_frag:LT,linedashed_vert:OT,linedashed_frag:PT,meshbasic_vert:IT,meshbasic_frag:zT,meshlambert_vert:BT,meshlambert_frag:FT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:VT,meshnormal_frag:kT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:YT,meshphysical_frag:qT,meshtoon_vert:ZT,meshtoon_frag:KT,points_vert:QT,points_frag:JT,shadow_vert:jT,shadow_frag:$T,sprite_vert:eA,sprite_frag:tA},ke={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},$i={basic:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Zn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Zn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Zn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Zn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Zn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Zn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Zn([ke.common,ke.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Zn([ke.lights,ke.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};$i.physical={uniforms:Zn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const du={r:0,b:0,g:0},nA=new cn,zy=new ht;zy.set(-1,0,0,0,1,0,0,0,1);function iA(r,e,i,s,l,c){const h=new Mt(0);let p=l===!0?0:1,m,d,_=null,x=0,g=null;function M(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const w=P.backgroundBlurriness>0;z=e.get(z,w)}return z}function T(P){let z=!1;const w=M(P);w===null?E(h,p):w&&w.isColor&&(E(w,1),z=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(P,z){const w=M(z);w&&(w.isCubeTexture||w.mapping===Nu)?(d===void 0&&(d=new En(new bs(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:ho($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(nA.makeRotationFromEuler(z.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(zy),d.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Xt,(_!==w||x!==w.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new En(new tr(2,2),new ra({name:"BackgroundMaterial",uniforms:ho($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||x!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function E(P,z){P.getRGB(du,Ly(r)),i.buffers.color.setClear(du.r,du.g,du.b,z,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,z=1){h.set(P),p=z,E(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,E(h,p)},render:T,addToRenderList:N,dispose:S}}function aA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(H,Z,pe,de,ie){let I=!1;const k=x(H,de,pe,Z);c!==k&&(c=k,d(c.object)),I=M(H,de,pe,ie),I&&T(H,de,pe,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,w(H,Z,pe,de),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function x(H,Z,pe,de){const ie=de.wireframe===!0;let I=s[Z.id];I===void 0&&(I={},s[Z.id]=I);const k=H.isInstancedMesh===!0?H.id:0;let re=I[k];re===void 0&&(re={},I[k]=re);let Se=re[pe.id];Se===void 0&&(Se={},re[pe.id]=Se);let be=Se[ie];return be===void 0&&(be=g(m()),Se[ie]=be),be}function g(H){const Z=[],pe=[],de=[];for(let ie=0;ie<i;ie++)Z[ie]=0,pe[ie]=0,de[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:pe,attributeDivisors:de,object:H,attributes:{},index:null}}function M(H,Z,pe,de){const ie=c.attributes,I=Z.attributes;let k=0;const re=pe.getAttributes();for(const Se in re)if(re[Se].location>=0){const L=ie[Se];let j=I[Se];if(j===void 0&&(Se==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),Se==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),L===void 0||L.attribute!==j||j&&L.data!==j.data)return!0;k++}return c.attributesNum!==k||c.index!==de}function T(H,Z,pe,de){const ie={},I=Z.attributes;let k=0;const re=pe.getAttributes();for(const Se in re)if(re[Se].location>=0){let L=I[Se];L===void 0&&(Se==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),Se==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const j={};j.attribute=L,L&&L.data&&(j.data=L.data),ie[Se]=j,k++}c.attributes=ie,c.attributesNum=k,c.index=de}function N(){const H=c.newAttributes;for(let Z=0,pe=H.length;Z<pe;Z++)H[Z]=0}function E(H){S(H,0)}function S(H,Z){const pe=c.newAttributes,de=c.enabledAttributes,ie=c.attributeDivisors;pe[H]=1,de[H]===0&&(r.enableVertexAttribArray(H),de[H]=1),ie[H]!==Z&&(r.vertexAttribDivisor(H,Z),ie[H]=Z)}function P(){const H=c.newAttributes,Z=c.enabledAttributes;for(let pe=0,de=Z.length;pe<de;pe++)Z[pe]!==H[pe]&&(r.disableVertexAttribArray(pe),Z[pe]=0)}function z(H,Z,pe,de,ie,I,k){k===!0?r.vertexAttribIPointer(H,Z,pe,ie,I):r.vertexAttribPointer(H,Z,pe,de,ie,I)}function w(H,Z,pe,de){N();const ie=de.attributes,I=pe.getAttributes(),k=Z.defaultAttributeValues;for(const re in I){const Se=I[re];if(Se.location>=0){let be=ie[re];if(be===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(be=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(be=H.instanceColor)),be!==void 0){const L=be.normalized,j=be.itemSize,Ce=e.get(be);if(Ce===void 0)continue;const Ie=Ce.buffer,Be=Ce.type,ae=Ce.bytesPerElement,Re=Be===r.INT||Be===r.UNSIGNED_INT||be.gpuType===Op;if(be.isInterleavedBufferAttribute){const me=be.data,Pe=me.stride,nt=be.offset;if(me.isInstancedInterleavedBuffer){for(let je=0;je<Se.locationSize;je++)S(Se.location+je,me.meshPerAttribute);H.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let je=0;je<Se.locationSize;je++)E(Se.location+je);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let je=0;je<Se.locationSize;je++)z(Se.location+je,j/Se.locationSize,Be,L,Pe*ae,(nt+j/Se.locationSize*je)*ae,Re)}else{if(be.isInstancedBufferAttribute){for(let me=0;me<Se.locationSize;me++)S(Se.location+me,be.meshPerAttribute);H.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let me=0;me<Se.locationSize;me++)E(Se.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let me=0;me<Se.locationSize;me++)z(Se.location+me,j/Se.locationSize,Be,L,j*ae,j/Se.locationSize*me*ae,Re)}}else if(k!==void 0){const L=k[re];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Se.location,L);break;case 3:r.vertexAttrib3fv(Se.location,L);break;case 4:r.vertexAttrib4fv(Se.location,L);break;default:r.vertexAttrib1fv(Se.location,L)}}}}P()}function B(){O();for(const H in s){const Z=s[H];for(const pe in Z){const de=Z[pe];for(const ie in de){const I=de[ie];for(const k in I)_(I[k].object),delete I[k];delete de[ie]}}delete s[H]}}function U(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const pe in Z){const de=Z[pe];for(const ie in de){const I=de[ie];for(const k in I)_(I[k].object),delete I[k];delete de[ie]}}delete s[H.id]}function F(H){for(const Z in s){const pe=s[Z];for(const de in pe){const ie=pe[de];if(ie[H.id]===void 0)continue;const I=ie[H.id];for(const k in I)_(I[k].object),delete I[k];delete ie[H.id]}}}function b(H){for(const Z in s){const pe=s[Z],de=H.isInstancedMesh===!0?H.id:0,ie=pe[de];if(ie!==void 0){for(const I in ie){const k=ie[I];for(const re in k)_(k[re].object),delete k[re];delete ie[I]}delete pe[de],Object.keys(pe).length===0&&delete s[Z]}}}function O(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:B,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:E,disableUnusedAttributes:P}}function sA(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let M=0;M<_;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function rA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==ki&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const b=F===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==xi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ta&&!b)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ut("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:w,maxSamples:B,samples:U}}function oA(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new vs,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,N=x.clipIntersection,E=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!E)c?_(null):d();else{const P=c?0:s,z=P*4;let w=S.clippingState||null;m.value=w,w=_(T,g,z,M);for(let B=0;B!==z;++B)w[B]=i[B];S.clippingState=w,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,g,M,T){const N=x!==null?x.length:0;let E=null;if(N!==0){if(E=m.value,T!==!0||E===null){const S=M+N*4,P=g.matrixWorldInverse;p.getNormalMatrix(P),(E===null||E.length<S)&&(E=new Float32Array(S));for(let z=0,w=M;z!==N;++z,w+=4)h.copy(x[z]).applyMatrix4(P,p),h.normal.toArray(E,w),E[w+3]=h.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,E}}const xs=4,Uv=[.125,.215,.35,.446,.526,.582],Js=20,lA=256,ml=new Jp,Lv=new Mt;let vd=null,yd=0,xd=0,Sd=!1;const cA=new $;class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=cA}=c;vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,yd,xd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===nr||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:za,format:ki,colorSpace:Tu,depthBuffer:!1},l=Pv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uA(c)),this._blurMaterial=hA(c,e,i),this._ggxMaterial=fA(c,e,i)}return l}_compileMaterial(e){const i=new En(new Si,e);this._renderer.compile(i,ml)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Lv),x.toneMapping=ia,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new bs,new El({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,E=N.material;let S=!1;const P=e.background;P?P.isColor&&(E.color.copy(P),e.background=null,S=!0):(E.color.copy(Lv),S=!0);for(let z=0;z<6;z++){const w=z%3;w===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[z],c.y,c.z)):w===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[z]));const B=this._cubeSize;eo(l,w*B,z>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(N,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===nr||e.mapping===uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;eo(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,ml)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,M=x*g,{_lodMax:T}=this,N=this._sizeLods[s],E=3*N*(s>T-xs?s-T+xs:0),S=4*(this._cubeSize-N);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,eo(c,E,S,3*N,2*N),l.setRenderTarget(c),l.render(p,ml),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,eo(e,E,S,3*N,2*N),l.setRenderTarget(e),l.render(p,ml)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Js-1),N=c/T,E=isFinite(c)?1+Math.floor(_*N):Js;E>Js&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Js}`);const S=[];let P=0;for(let F=0;F<Js;++F){const b=F/N,O=Math.exp(-b*b/2);S.push(O),F===0?P+=O:F<E&&(P+=2*O)}for(let F=0;F<S.length;F++)S[F]=S[F]/P;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:z}=this;g.dTheta.value=T,g.mipInt.value=z-s;const w=this._sizeLods[l],B=3*w*(l>z-xs?l-z+xs:0),U=4*(this._cubeSize-w);eo(i,B,U,3*w,2*w),m.setRenderTarget(i),m.render(x,ml)}}function uA(r){const e=[],i=[],s=[];let l=r;const c=r-xs+1+Uv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>r-xs?m=Uv[h-r+xs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,T=6,N=3,E=2,S=1,P=new Float32Array(N*T*M),z=new Float32Array(E*T*M),w=new Float32Array(S*T*M);for(let U=0;U<M;U++){const F=U%3*2/3-1,b=U>2?0:-1,O=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];P.set(O,N*T*U),z.set(g,E*T*U);const Y=[U,U,U,U,U,U];w.set(Y,S*T*U)}const B=new Si;B.setAttribute("position",new Xi(P,N)),B.setAttribute("uv",new Xi(z,E)),B.setAttribute("faceIndex",new Xi(w,S)),s.push(new En(B,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Pv(r,e,i){const s=new aa(r,e,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eo(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function fA(r,e,i){return new ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function hA(r,e,i){const s=new Float32Array(Js),l=new $(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Iv(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function zv(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class By extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ny(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new bs(5,5,5),c=new ra({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:Oa});c.uniforms.tEquirect.value=i;const h=new En(l,c),p=i.minFilter;return i.minFilter===$s&&(i.minFilter=Nn),new gb(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function dA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Wh||M===Yh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new By(T.height);return N.fromEquirectangularTexture(r,g),e.set(g,N),g.addEventListener("dispose",d),p(N.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,T=M===Wh||M===Yh,N=M===nr||M===uo;if(T||N){let E=i.get(g);const S=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Ov(r)),E=T?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const P=g.image;return T&&P&&P.height>0||N&&P&&m(P)?(s===null&&(s=new Ov(r)),E=T?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",_),E.texture):null}}}return g}function p(g,M){return M===Wh?g.mapping=nr:M===Yh&&(g.mapping=uo),g}function m(g){let M=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function pA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ro("WebGLRenderer: "+s+" extension not supported."),l}}}function mA(r,e,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,T=x.attributes.position;let N=0;if(T===void 0)return;if(M!==null){const P=M.array;N=M.version;for(let z=0,w=P.length;z<w;z+=3){const B=P[z+0],U=P[z+1],F=P[z+2];g.push(B,U,U,F,F,B)}}else{const P=T.array;N=T.version;for(let z=0,w=P.length/3-1;z<w;z+=3){const B=z+0,U=z+1,F=z+2;g.push(B,U,U,F,F,B)}}const E=new(T.count>=65535?Cy:Ry)(g,1);E.version=N;const S=c.get(x);S&&e.remove(S),c.set(x,E)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function gA(r,e,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function d(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*h,M),i.update(g,s,M))}function _(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let N=0;for(let E=0;E<M;E++)N+=g[E];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function _A(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vA(r,e,i){const s=new WeakMap,l=new un;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let O=function(){F.dispose(),s.delete(p),p.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,N=p.morphAttributes.color!==void 0,E=p.morphAttributes.position||[],S=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let z=0;M===!0&&(z=1),T===!0&&(z=2),N===!0&&(z=3);let w=p.attributes.position.count*z,B=1;w>e.maxTextureSize&&(B=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*B*4*x),F=new Ty(U,w,B,x);F.type=ta,F.needsUpdate=!0;const b=z*4;for(let Y=0;Y<x;Y++){const H=E[Y],Z=S[Y],pe=P[Y],de=w*B*4*Y;for(let ie=0;ie<H.count;ie++){const I=ie*b;M===!0&&(l.fromBufferAttribute(H,ie),U[de+I+0]=l.x,U[de+I+1]=l.y,U[de+I+2]=l.z,U[de+I+3]=0),T===!0&&(l.fromBufferAttribute(Z,ie),U[de+I+4]=l.x,U[de+I+5]=l.y,U[de+I+6]=l.z,U[de+I+7]=0),N===!0&&(l.fromBufferAttribute(pe,ie),U[de+I+8]=l.x,U[de+I+9]=l.y,U[de+I+10]=l.z,U[de+I+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:F,size:new ot(w,B)},s.set(p,g),p.addEventListener("dispose",O)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let M=0;for(let N=0;N<d.length;N++)M+=d[N];const T=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function yA(r,e,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const xA={[uy]:"LINEAR_TONE_MAPPING",[fy]:"REINHARD_TONE_MAPPING",[hy]:"CINEON_TONE_MAPPING",[Lp]:"ACES_FILMIC_TONE_MAPPING",[py]:"AGX_TONE_MAPPING",[my]:"NEUTRAL_TONE_MAPPING",[dy]:"CUSTOM_TONE_MAPPING"};function SA(r,e,i,s,l,c){const h=new aa(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new fo(e,i):void 0}),p=new aa(e,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new Si;m.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const d=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new En(m,d),x=new Jp(-1,1,1,-1,0,1);let g=null,M=null,T=!1,N,E=null,S=[],P=!1;this.setSize=function(z,w){h.setSize(z,w),p.setSize(z,w);for(let B=0;B<S.length;B++){const U=S[B];U.setSize&&U.setSize(z,w)}},this.setEffects=function(z){S=z,P=S.length>0&&S[0].isRenderPass===!0;const w=h.width,B=h.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(w,B)}},this.begin=function(z,w){if(T||z.toneMapping===ia&&S.length===0)return!1;if(E=w,w!==null){const B=w.width,U=w.height;(h.width!==B||h.height!==U)&&this.setSize(B,U)}return P===!1&&z.setRenderTarget(h),N=z.toneMapping,z.toneMapping=ia,!0},this.hasRenderPass=function(){return P},this.end=function(z,w){z.toneMapping=N,T=!0;let B=h,U=p;for(let F=0;F<S.length;F++){const b=S[F];if(b.enabled!==!1&&(b.render(z,U,B,w),b.needsSwap!==!1)){const O=B;B=U,U=O}}if(g!==z.outputColorSpace||M!==z.toneMapping){g=z.outputColorSpace,M=z.toneMapping,d.defines={},Ct.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const F=xA[M];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=B.texture,z.setRenderTarget(E),z.render(_,x),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Fy=new Wn,xp=new fo(1,1),Hy=new Ty,Gy=new zE,Vy=new Ny,Bv=[],Fv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function go(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Bv[l];if(c===void 0&&(c=new Float32Array(l),Bv[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,r[h].toArray(c,p)}return c}function Rn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Cn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Ou(r,e){let i=Fv[e];i===void 0&&(i=new Int32Array(e),Fv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function MA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2fv(this.addr,e),Cn(i,e)}}function bA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;r.uniform3fv(this.addr,e),Cn(i,e)}}function TA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4fv(this.addr,e),Cn(i,e)}}function AA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Vv.set(s),r.uniformMatrix2fv(this.addr,!1,Vv),Cn(i,s)}}function RA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Gv.set(s),r.uniformMatrix3fv(this.addr,!1,Gv),Cn(i,s)}}function CA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Hv.set(s),r.uniformMatrix4fv(this.addr,!1,Hv),Cn(i,s)}}function wA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function DA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2iv(this.addr,e),Cn(i,e)}}function NA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3iv(this.addr,e),Cn(i,e)}}function UA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4iv(this.addr,e),Cn(i,e)}}function LA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function OA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2uiv(this.addr,e),Cn(i,e)}}function PA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3uiv(this.addr,e),Cn(i,e)}}function IA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4uiv(this.addr,e),Cn(i,e)}}function zA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(xp.compareFunction=i.isReversedDepthBuffer()?Gp:Hp,c=xp):c=Fy,i.setTexture2D(e||c,l)}function BA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Gy,l)}function FA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Vy,l)}function HA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Hy,l)}function GA(r){switch(r){case 5126:return MA;case 35664:return EA;case 35665:return bA;case 35666:return TA;case 35674:return AA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return wA;case 35667:case 35671:return DA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return OA;case 36295:return PA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return HA}}function VA(r,e){r.uniform1fv(this.addr,e)}function kA(r,e){const i=go(e,this.size,2);r.uniform2fv(this.addr,i)}function XA(r,e){const i=go(e,this.size,3);r.uniform3fv(this.addr,i)}function WA(r,e){const i=go(e,this.size,4);r.uniform4fv(this.addr,i)}function YA(r,e){const i=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function qA(r,e){const i=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function ZA(r,e){const i=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function KA(r,e){r.uniform1iv(this.addr,e)}function QA(r,e){r.uniform2iv(this.addr,e)}function JA(r,e){r.uniform3iv(this.addr,e)}function jA(r,e){r.uniform4iv(this.addr,e)}function $A(r,e){r.uniform1uiv(this.addr,e)}function e2(r,e){r.uniform2uiv(this.addr,e)}function t2(r,e){r.uniform3uiv(this.addr,e)}function n2(r,e){r.uniform4uiv(this.addr,e)}function i2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=xp:h=Fy;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function a2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Gy,c[h])}function s2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Vy,c[h])}function r2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Hy,c[h])}function o2(r){switch(r){case 5126:return VA;case 35664:return kA;case 35665:return XA;case 35666:return WA;case 35674:return YA;case 35675:return qA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return jA;case 5125:return $A;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}class l2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GA(i.type)}}class c2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=o2(i.type)}}class u2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function kv(r,e){r.seq.push(e),r.map[e.id]=e}function f2(r,e,i){const s=r.name,l=s.length;for(Md.lastIndex=0;;){const c=Md.exec(s),h=Md.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){kv(i,d===void 0?new l2(p,r,e):new c2(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new u2(p),kv(i,x)),i=x}}}class Mu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);f2(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Xv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const h2=37297;let d2=0;function p2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const Wv=new ht;function m2(r){Ct._getMatrix(Wv,Ct.workingColorSpace,r);const e=`mat3( ${Wv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Au:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+p2(r.getShaderSource(e),p)}else return c}function g2(r,e){const i=m2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _2={[uy]:"Linear",[fy]:"Reinhard",[hy]:"Cineon",[Lp]:"ACESFilmic",[py]:"AgX",[my]:"Neutral",[dy]:"Custom"};function v2(r,e){const i=_2[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new $;function y2(){Ct.getLuminanceCoefficients(pu);const r=pu.x.toFixed(4),e=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function S2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function M2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:p}}return i}function yl(r){return r!==""}function qv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(r){return r.replace(E2,T2)}const b2=new Map;function T2(r,e){let i=_t[e];if(i===void 0){const s=b2.get(e);if(s!==void 0)i=_t[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sp(i)}const A2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(r){return r.replace(A2,R2)}function R2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Qv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const C2={[xl]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function w2(r){return C2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D2={[nr]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function N2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":D2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const U2={[uo]:"ENVMAP_MODE_REFRACTION"};function L2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":U2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O2={[cy]:"ENVMAP_BLENDING_MULTIPLY",[tE]:"ENVMAP_BLENDING_MIX",[nE]:"ENVMAP_BLENDING_ADD"};function P2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":O2[r.combine]||"ENVMAP_BLENDING_NONE"}function I2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function z2(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=w2(i),d=N2(i),_=L2(i),x=P2(i),g=I2(i),M=x2(i),T=S2(c),N=l.createProgram();let E,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(yl).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(yl).join(`
`),S.length>0&&(S+=`
`)):(E=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),S=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?_t.tonemapping_pars_fragment:"",i.toneMapping!==ia?v2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,g2("linearToOutputTexel",i.outputColorSpace),y2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yl).join(`
`)),h=Sp(h),h=qv(h,i),h=Zv(h,i),p=Sp(p),p=qv(p,i),p=Zv(p,i),h=Kv(h),p=Kv(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=P+E+h,w=P+S+p,B=Xv(l,l.VERTEX_SHADER,z),U=Xv(l,l.FRAGMENT_SHADER,w);l.attachShader(N,B),l.attachShader(N,U),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function F(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(N)||"",pe=l.getShaderInfoLog(B)||"",de=l.getShaderInfoLog(U)||"",ie=Z.trim(),I=pe.trim(),k=de.trim();let re=!0,Se=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,B,U);else{const be=Yv(l,B,"vertex"),L=Yv(l,U,"fragment");Rt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ie+`
`+be+`
`+L)}else ie!==""?ut("WebGLProgram: Program Info Log:",ie):(I===""||k==="")&&(Se=!1);Se&&(H.diagnostics={runnable:re,programLog:ie,vertexShader:{log:I,prefix:E},fragmentShader:{log:k,prefix:S}})}l.deleteShader(B),l.deleteShader(U),b=new Mu(l,N),O=M2(l,N)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(N,h2)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=B,this.fragmentShader=U,this}let B2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new H2(e),i.set(e,s)),s}}class H2{constructor(e){this.id=B2++,this.code=e,this.usedTimes=0}}function G2(r){return r===ir||r===Eu||r===bu}function V2(r,e,i,s,l,c){const h=new Xp,p=new F2,m=new Set,d=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function N(b,O,Y,H,Z,pe){const de=H.fog,ie=Z.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,re=e.get(b.envMap||I,k),Se=re&&re.mapping===Nu?re.image.height:null,be=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const L=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,j=L!==void 0?L.length:0;let Ce=0;ie.morphAttributes.position!==void 0&&(Ce=1),ie.morphAttributes.normal!==void 0&&(Ce=2),ie.morphAttributes.color!==void 0&&(Ce=3);let Ie,Be,ae,Re;if(be){const qe=$i[be];Ie=qe.vertexShader,Be=qe.fragmentShader}else{Ie=b.vertexShader,Be=b.fragmentShader;const qe=p.getVertexShaderStage(b),sn=p.getFragmentShaderStage(b);p.update(b,qe,sn),ae=qe.id,Re=sn.id}const me=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),nt=Z.isInstancedMesh===!0,je=Z.isBatchedMesh===!0,Ut=!!b.map,ee=!!b.matcap,Ue=!!re,He=!!b.aoMap,tt=!!b.lightMap,dt=!!b.bumpMap&&b.wireframe===!1,Lt=!!b.normalMap,Qt=!!b.displacementMap,nn=!!b.emissiveMap,zt=!!b.metalnessMap,an=!!b.roughnessMap,K=b.anisotropy>0,Ot=b.clearcoat>0,ve=b.dispersion>0,R=b.iridescence>0,v=b.sheen>0,V=b.transmission>0,W=K&&!!b.anisotropyMap,J=Ot&&!!b.clearcoatMap,_e=Ot&&!!b.clearcoatNormalMap,ye=Ot&&!!b.clearcoatRoughnessMap,ne=R&&!!b.iridescenceMap,se=R&&!!b.iridescenceThicknessMap,xe=v&&!!b.sheenColorMap,Ne=v&&!!b.sheenRoughnessMap,Le=!!b.specularMap,De=!!b.specularColorMap,Ye=!!b.specularIntensityMap,Ke=V&&!!b.transmissionMap,lt=V&&!!b.thicknessMap,X=!!b.gradientMap,Oe=!!b.alphaMap,Me=b.alphaTest>0,ze=!!b.alphaHash,Ge=!!b.extensions;let we=ia;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(we=r.toneMapping);const $e={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Be,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:je,batchingColor:je&&Z._colorsTexture!==null,instancing:nt,instancingColor:nt&&Z.instanceColor!==null,instancingMorph:nt&&Z.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ut,matcap:ee,envMap:Ue,envMapMode:Ue&&re.mapping,envMapCubeUVHeight:Se,aoMap:He,lightMap:tt,bumpMap:dt,normalMap:Lt,displacementMap:Qt,emissiveMap:nn,normalMapObjectSpace:Lt&&b.normalMapType===sE,normalMapTangentSpace:Lt&&b.normalMapType===gp,packedNormalMap:Lt&&b.normalMapType===gp&&G2(b.normalMap.format),metalnessMap:zt,roughnessMap:an,anisotropy:K,anisotropyMap:W,clearcoat:Ot,clearcoatMap:J,clearcoatNormalMap:_e,clearcoatRoughnessMap:ye,dispersion:ve,iridescence:R,iridescenceMap:ne,iridescenceThicknessMap:se,sheen:v,sheenColorMap:xe,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:De,specularIntensityMap:Ye,transmission:V,transmissionMap:Ke,thicknessMap:lt,gradientMap:X,opaque:b.transparent===!1&&b.blending===so&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Me,alphaHash:ze,combine:b.combine,mapUv:Ut&&T(b.map.channel),aoMapUv:He&&T(b.aoMap.channel),lightMapUv:tt&&T(b.lightMap.channel),bumpMapUv:dt&&T(b.bumpMap.channel),normalMapUv:Lt&&T(b.normalMap.channel),displacementMapUv:Qt&&T(b.displacementMap.channel),emissiveMapUv:nn&&T(b.emissiveMap.channel),metalnessMapUv:zt&&T(b.metalnessMap.channel),roughnessMapUv:an&&T(b.roughnessMap.channel),anisotropyMapUv:W&&T(b.anisotropyMap.channel),clearcoatMapUv:J&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&T(b.sheenRoughnessMap.channel),specularMapUv:Le&&T(b.specularMap.channel),specularColorMapUv:De&&T(b.specularColorMap.channel),specularIntensityMapUv:Ye&&T(b.specularIntensityMap.channel),transmissionMapUv:Ke&&T(b.transmissionMap.channel),thicknessMapUv:lt&&T(b.thicknessMap.channel),alphaMapUv:Oe&&T(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Lt||K),vertexNormals:!!ie.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ie.attributes.uv&&(Ut||Oe),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ie.attributes.normal===void 0&&Lt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Ce,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Ut&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:nn&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ea,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function E(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)O.push(Y),O.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(S(O,b),P(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function S(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function P(b,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function z(b){const O=M[b.type];let Y;if(O){const H=$i[O];Y=rb.clone(H.uniforms)}else Y=b.uniforms;return Y}function w(b,O){let Y=_.get(O);return Y!==void 0?++Y.usedTimes:(Y=new z2(r,O,b,l),d.push(Y),_.set(O,Y)),Y}function B(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),_.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function F(){p.dispose()}return{getParameters:N,getProgramCacheKey:E,getUniforms:z,acquireProgram:w,releaseProgram:B,releaseShaderCache:U,programs:d,dispose:F}}function k2(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function X2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,N,E,S){let P=r[e];return P===void 0?(P={id:g.id,object:g,geometry:M,material:T,materialVariant:h(g),groupOrder:N,renderOrder:g.renderOrder,z:E,group:S},r[e]=P):(P.id=g.id,P.object=g,P.geometry=M,P.material=T,P.materialVariant=h(g),P.groupOrder=N,P.renderOrder=g.renderOrder,P.z=E,P.group=S),e++,P}function m(g,M,T,N,E,S){const P=p(g,M,T,N,E,S);T.transmission>0?s.push(P):T.transparent===!0?l.push(P):i.push(P)}function d(g,M,T,N,E,S){const P=p(g,M,T,N,E,S);T.transmission>0?s.unshift(P):T.transparent===!0?l.unshift(P):i.unshift(P)}function _(g,M,T){i.length>1&&i.sort(g||X2),s.length>1&&s.sort(M||Jv),l.length>1&&l.sort(M||Jv),T&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:_}}function W2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new jv,r.set(s,[h])):l>=c.length?(h=new jv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function Y2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Mt};break;case"SpotLight":i={position:new $,direction:new $,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function q2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let Z2=0;function K2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Q2(r){const e=new Y2,i=q2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,c=new cn,h=new cn;function p(d){let _=0,x=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,T=0,N=0,E=0,S=0,P=0,z=0,w=0,B=0,U=0,F=0;d.sort(K2);for(let O=0,Y=d.length;O<Y;O++){const H=d[O],Z=H.color,pe=H.intensity,de=H.distance;let ie=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ir?ie=H.shadow.map.texture:ie=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=Z.r*pe,x+=Z.g*pe,g+=Z.b*pe;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],pe);F++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,re=i.get(H);re.shadowIntensity=k.intensity,re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,s.directionalShadow[M]=re,s.directionalShadowMap[M]=ie,s.directionalShadowMatrix[M]=H.shadow.matrix,P++}s.directional[M]=I,M++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Z).multiplyScalar(pe),I.distance=de,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[N]=I;const k=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,k.updateMatrices(H),H.castShadow&&U++),s.spotLightMatrix[N]=k.matrix,H.castShadow){const re=i.get(H);re.shadowIntensity=k.intensity,re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,s.spotShadow[N]=re,s.spotShadowMap[N]=ie,w++}N++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(Z).multiplyScalar(pe),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[E]=I,E++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const k=H.shadow,re=i.get(H);re.shadowIntensity=k.intensity,re.shadowBias=k.bias,re.shadowNormalBias=k.normalBias,re.shadowRadius=k.radius,re.shadowMapSize=k.mapSize,re.shadowCameraNear=k.camera.near,re.shadowCameraFar=k.camera.far,s.pointShadow[T]=re,s.pointShadowMap[T]=ie,s.pointShadowMatrix[T]=H.shadow.matrix,z++}s.point[T]=I,T++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(pe),I.groundColor.copy(H.groundColor).multiplyScalar(pe),s.hemi[S]=I,S++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==N||b.rectAreaLength!==E||b.hemiLength!==S||b.numDirectionalShadows!==P||b.numPointShadows!==z||b.numSpotShadows!==w||b.numSpotMaps!==B||b.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=N,s.rectArea.length=E,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=w+B-U,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,b.directionalLength=M,b.pointLength=T,b.spotLength=N,b.rectAreaLength=E,b.hemiLength=S,b.numDirectionalShadows=P,b.numPointShadows=z,b.numSpotShadows=w,b.numSpotMaps=B,b.numLightProbes=F,s.version=Z2++)}function m(d,_){let x=0,g=0,M=0,T=0,N=0;const E=_.matrixWorldInverse;for(let S=0,P=d.length;S<P;S++){const z=d[S];if(z.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),x++}else if(z.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(E),w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),M++}else if(z.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(E),h.identity(),c.copy(z.matrixWorld),c.premultiply(E),h.extractRotation(c),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(z.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(E),g++}else if(z.isHemisphereLight){const w=s.hemi[N];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(E),N++}}}return{setup:p,setupView:m,state:s}}function $v(r){const e=new Q2(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function _(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function J2(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new $v(r),e.set(l,[p])):c>=h.length?(p=new $v(r),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],tR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],ey=new cn,gl=new $,Ed=new $;function nR(r,e,i){let s=new Zp;const l=new ot,c=new ot,h=new un,p=new ub,m=new fb,d={},_=i.maxTextureSize,x={[Ss]:ri,[ri]:Ss,[ea]:ea},g=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:j2,fragmentShader:$2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Si;T.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new En(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let S=this.type;this.render=function(U,F,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||U.length===0)return;this.type===IM&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xl);const O=r.getRenderTarget(),Y=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Oa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const pe=S!==this.type;pe&&F.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ie=>ie.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ie=U.length;de<ie;de++){const I=U[de],k=I.shadow;if(k===void 0){ut("WebGLShadowMap:",I,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const re=k.getFrameExtents();l.multiply(re),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/re.x),l.x=c.x*re.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/re.y),l.y=c.y*re.y,k.mapSize.y=c.y));const Se=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Se,k.map===null||pe===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===vl){if(I.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new aa(l.x,l.y,{format:ir,type:za,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),k.map.texture.name=I.name+".shadowMap",k.map.depthTexture=new fo(l.x,l.y,ta),k.map.depthTexture.name=I.name+".shadowMapDepth",k.map.depthTexture.format=Ba,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Hn,k.map.depthTexture.magFilter=Hn}else I.isPointLight?(k.map=new By(l.x),k.map.depthTexture=new ab(l.x,sa)):(k.map=new aa(l.x,l.y),k.map.depthTexture=new fo(l.x,l.y,sa)),k.map.depthTexture.name=I.name+".shadowMap",k.map.depthTexture.format=Ba,this.type===xl?(k.map.depthTexture.compareFunction=Se?Gp:Hp,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Hn,k.map.depthTexture.magFilter=Hn);k.camera.updateProjectionMatrix()}const be=k.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<be;L++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,L),r.clear();else{L===0&&(r.setRenderTarget(k.map),r.clear());const j=k.getViewport(L);h.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Z.viewport(h)}if(I.isPointLight){const j=k.camera,Ce=k.matrix,Ie=I.distance||j.far;Ie!==j.far&&(j.far=Ie,j.updateProjectionMatrix()),gl.setFromMatrixPosition(I.matrixWorld),j.position.copy(gl),Ed.copy(j.position),Ed.add(eR[L]),j.up.copy(tR[L]),j.lookAt(Ed),j.updateMatrixWorld(),Ce.makeTranslation(-gl.x,-gl.y,-gl.z),ey.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ey,j.coordinateSystem,j.reversedDepth)}else k.updateMatrices(I);s=k.getFrustum(),w(F,b,k.camera,I,this.type)}k.isPointLightShadow!==!0&&this.type===vl&&P(k,b),k.needsUpdate=!1}S=this.type,E.needsUpdate=!1,r.setRenderTarget(O,Y,H)};function P(U,F){const b=e.update(N);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new aa(l.x,l.y,{format:ir,type:za})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(F,null,b,g,N,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(F,null,b,M,N,null)}function z(U,F,b,O){let Y=null;const H=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=b.isPointLight===!0?m:p,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=Y.uuid,pe=F.uuid;let de=d[Z];de===void 0&&(de={},d[Z]=de);let ie=de[pe];ie===void 0&&(ie=Y.clone(),de[pe]=ie,F.addEventListener("dispose",B)),Y=ie}if(Y.visible=F.visible,Y.wireframe=F.wireframe,O===vl?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:x[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Z=r.properties.get(Y);Z.light=b}return Y}function w(U,F,b,O,Y){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===vl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const pe=e.update(U),de=U.material;if(Array.isArray(de)){const ie=pe.groups;for(let I=0,k=ie.length;I<k;I++){const re=ie[I],Se=de[re.materialIndex];if(Se&&Se.visible){const be=z(U,Se,O,Y);U.onBeforeShadow(r,U,F,b,pe,be,re),r.renderBufferDirect(b,null,pe,be,U,re),U.onAfterShadow(r,U,F,b,pe,be,re)}}}else if(de.visible){const ie=z(U,de,O,Y);U.onBeforeShadow(r,U,F,b,pe,ie,null),r.renderBufferDirect(b,null,pe,ie,U,null),U.onAfterShadow(r,U,F,b,pe,ie,null)}}const Z=U.children;for(let pe=0,de=Z.length;pe<de;pe++)w(Z[pe],F,b,O,Y)}function B(U){U.target.removeEventListener("dispose",B);for(const b in d){const O=d[b],Y=U.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function iR(r,e){function i(){let X=!1;const Oe=new un;let Me=null;const ze=new un(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!X&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){X=Ge},setClear:function(Ge,we,$e,qe,sn){sn===!0&&(Ge*=qe,we*=qe,$e*=qe),Oe.set(Ge,we,$e,qe),ze.equals(Oe)===!1&&(r.clearColor(Ge,we,$e,qe),ze.copy(Oe))},reset:function(){X=!1,Me=null,ze.set(-1,0,0,0)}}}function s(){let X=!1,Oe=!1,Me=null,ze=null,Ge=null;return{setReversed:function(we){if(Oe!==we){const $e=e.get("EXT_clip_control");we?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Oe=we;const qe=Ge;Ge=null,this.setClear(qe)}},getReversed:function(){return Oe},setTest:function(we){we?me(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!X&&(r.depthMask(we),Me=we)},setFunc:function(we){if(Oe&&(we=mE[we]),ze!==we){switch(we){case Nd:r.depthFunc(r.NEVER);break;case Ud:r.depthFunc(r.ALWAYS);break;case Ld:r.depthFunc(r.LESS);break;case co:r.depthFunc(r.LEQUAL);break;case Od:r.depthFunc(r.EQUAL);break;case Pd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case zd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ze=we}},setLocked:function(we){X=we},setClear:function(we){Ge!==we&&(Ge=we,Oe&&(we=1-we),r.clearDepth(we))},reset:function(){X=!1,Me=null,ze=null,Ge=null,Oe=!1}}}function l(){let X=!1,Oe=null,Me=null,ze=null,Ge=null,we=null,$e=null,qe=null,sn=null;return{setTest:function(Bt){X||(Bt?me(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Bt){Oe!==Bt&&!X&&(r.stencilMask(Bt),Oe=Bt)},setFunc:function(Bt,oi,li){(Me!==Bt||ze!==oi||Ge!==li)&&(r.stencilFunc(Bt,oi,li),Me=Bt,ze=oi,Ge=li)},setOp:function(Bt,oi,li){(we!==Bt||$e!==oi||qe!==li)&&(r.stencilOp(Bt,oi,li),we=Bt,$e=oi,qe=li)},setLocked:function(Bt){X=Bt},setClear:function(Bt){sn!==Bt&&(r.clearStencil(Bt),sn=Bt)},reset:function(){X=!1,Oe=null,Me=null,ze=null,Ge=null,we=null,$e=null,qe=null,sn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},x={},g={},M=new WeakMap,T=[],N=null,E=!1,S=null,P=null,z=null,w=null,B=null,U=null,F=null,b=new Mt(0,0,0),O=0,Y=!1,H=null,Z=null,pe=null,de=null,ie=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,re=0;const Se=r.getParameter(r.VERSION);Se.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Se)[1]),k=re>=1):Se.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),k=re>=2);let be=null,L={};const j=r.getParameter(r.SCISSOR_BOX),Ce=r.getParameter(r.VIEWPORT),Ie=new un().fromArray(j),Be=new un().fromArray(Ce);function ae(X,Oe,Me,ze){const Ge=new Uint8Array(4),we=r.createTexture();r.bindTexture(X,we),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<Me;$e++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,ze,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Oe+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return we}const Re={};Re[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),me(r.DEPTH_TEST),h.setFunc(co),dt(!1),Lt(J_),me(r.CULL_FACE),He(Oa);function me(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Pe(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function nt(X,Oe){return g[X]!==Oe?(r.bindFramebuffer(X,Oe),g[X]=Oe,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Oe),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function je(X,Oe){let Me=T,ze=!1;if(X){Me=M.get(Oe),Me===void 0&&(Me=[],M.set(Oe,Me));const Ge=X.textures;if(Me.length!==Ge.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let we=0,$e=Ge.length;we<$e;we++)Me[we]=r.COLOR_ATTACHMENT0+we;Me.length=Ge.length,ze=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,ze=!0);ze&&r.drawBuffers(Me)}function Ut(X){return N!==X?(r.useProgram(X),N=X,!0):!1}const ee={[Qs]:r.FUNC_ADD,[BM]:r.FUNC_SUBTRACT,[FM]:r.FUNC_REVERSE_SUBTRACT};ee[HM]=r.MIN,ee[GM]=r.MAX;const Ue={[VM]:r.ZERO,[kM]:r.ONE,[XM]:r.SRC_COLOR,[wd]:r.SRC_ALPHA,[QM]:r.SRC_ALPHA_SATURATE,[ZM]:r.DST_COLOR,[YM]:r.DST_ALPHA,[WM]:r.ONE_MINUS_SRC_COLOR,[Dd]:r.ONE_MINUS_SRC_ALPHA,[KM]:r.ONE_MINUS_DST_COLOR,[qM]:r.ONE_MINUS_DST_ALPHA,[JM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[$M]:r.CONSTANT_ALPHA,[eE]:r.ONE_MINUS_CONSTANT_ALPHA};function He(X,Oe,Me,ze,Ge,we,$e,qe,sn,Bt){if(X===Oa){E===!0&&(Pe(r.BLEND),E=!1);return}if(E===!1&&(me(r.BLEND),E=!0),X!==zM){if(X!==S||Bt!==Y){if((P!==Qs||B!==Qs)&&(r.blendEquation(r.FUNC_ADD),P=Qs,B=Qs),Bt)switch(X){case so:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case j_:r.blendFunc(r.ONE,r.ONE);break;case $_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ev:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case so:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case j_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}z=null,w=null,U=null,F=null,b.set(0,0,0),O=0,S=X,Y=Bt}return}Ge=Ge||Oe,we=we||Me,$e=$e||ze,(Oe!==P||Ge!==B)&&(r.blendEquationSeparate(ee[Oe],ee[Ge]),P=Oe,B=Ge),(Me!==z||ze!==w||we!==U||$e!==F)&&(r.blendFuncSeparate(Ue[Me],Ue[ze],Ue[we],Ue[$e]),z=Me,w=ze,U=we,F=$e),(qe.equals(b)===!1||sn!==O)&&(r.blendColor(qe.r,qe.g,qe.b,sn),b.copy(qe),O=sn),S=X,Y=!1}function tt(X,Oe){X.side===ea?Pe(r.CULL_FACE):me(r.CULL_FACE);let Me=X.side===ri;Oe&&(Me=!Me),dt(Me),X.blending===so&&X.transparent===!1?He(Oa):He(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const ze=X.stencilWrite;p.setTest(ze),ze&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),nn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(X){H!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),H=X)}function Lt(X){X!==OM?(me(r.CULL_FACE),X!==Z&&(X===J_?r.cullFace(r.BACK):X===PM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),Z=X}function Qt(X){X!==pe&&(k&&r.lineWidth(X),pe=X)}function nn(X,Oe,Me){X?(me(r.POLYGON_OFFSET_FILL),(de!==Oe||ie!==Me)&&(de=Oe,ie=Me,h.getReversed()&&(Oe=-Oe),r.polygonOffset(Oe,Me))):Pe(r.POLYGON_OFFSET_FILL)}function zt(X){X?me(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function an(X){X===void 0&&(X=r.TEXTURE0+I-1),be!==X&&(r.activeTexture(X),be=X)}function K(X,Oe,Me){Me===void 0&&(be===null?Me=r.TEXTURE0+I-1:Me=be);let ze=L[Me];ze===void 0&&(ze={type:void 0,texture:void 0},L[Me]=ze),(ze.type!==X||ze.texture!==Oe)&&(be!==Me&&(r.activeTexture(Me),be=Me),r.bindTexture(X,Oe||Re[X]),ze.type=X,ze.texture=Oe)}function Ot(){const X=L[be];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ve(){try{r.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function v(){try{r.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function V(){try{r.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function _e(){try{r.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function ye(){try{r.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function ne(){try{r.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function se(){try{r.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function xe(X){return x[X]!==void 0?x[X]:r.getParameter(X)}function Ne(X,Oe){x[X]!==Oe&&(r.pixelStorei(X,Oe),x[X]=Oe)}function Le(X){Ie.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ie.copy(X))}function De(X){Be.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Be.copy(X))}function Ye(X,Oe){let Me=d.get(Oe);Me===void 0&&(Me=new WeakMap,d.set(Oe,Me));let ze=Me.get(X);ze===void 0&&(ze=r.getUniformBlockIndex(Oe,X.name),Me.set(X,ze))}function Ke(X,Oe){const ze=d.get(Oe).get(X);m.get(Oe)!==ze&&(r.uniformBlockBinding(Oe,ze,X.__bindingPointIndex),m.set(Oe,ze))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},be=null,L={},g={},M=new WeakMap,T=[],N=null,E=!1,S=null,P=null,z=null,w=null,B=null,U=null,F=null,b=new Mt(0,0,0),O=0,Y=!1,H=null,Z=null,pe=null,de=null,ie=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Be.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:me,disable:Pe,bindFramebuffer:nt,drawBuffers:je,useProgram:Ut,setBlending:He,setMaterial:tt,setFlipSided:dt,setCullFace:Lt,setLineWidth:Qt,setPolygonOffset:nn,setScissorTest:zt,activeTexture:an,bindTexture:K,unbindTexture:Ot,compressedTexImage2D:ve,compressedTexImage3D:R,texImage2D:ne,texImage3D:se,pixelStorei:Ne,getParameter:xe,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:_e,texStorage3D:ye,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:Le,viewport:De,reset:lt}}function aR(r,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(R,v){return T?new OffscreenCanvas(R,v):Ru("canvas")}function E(R,v,V){let W=1;const J=ve(R);if((J.width>V||J.height>V)&&(W=V/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const _e=Math.floor(W*J.width),ye=Math.floor(W*J.height);g===void 0&&(g=N(_e,ye));const ne=v?N(_e,ye):g;return ne.width=_e,ne.height=ye,ne.getContext("2d").drawImage(R,0,0,_e,ye),ut("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+_e+"x"+ye+")."),ne}else return"data"in R&&ut("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function S(R){return R.generateMipmaps}function P(R){r.generateMipmap(R)}function z(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(R,v,V,W,J,_e=!1){if(R!==null){if(r[R]!==void 0)return r[R];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;W&&(ye=e.get("EXT_texture_norm16"),ye||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===r.RED&&(V===r.FLOAT&&(ne=r.R32F),V===r.HALF_FLOAT&&(ne=r.R16F),V===r.UNSIGNED_BYTE&&(ne=r.R8),V===r.UNSIGNED_SHORT&&ye&&(ne=ye.R16_EXT),V===r.SHORT&&ye&&(ne=ye.R16_SNORM_EXT)),v===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.R8UI),V===r.UNSIGNED_SHORT&&(ne=r.R16UI),V===r.UNSIGNED_INT&&(ne=r.R32UI),V===r.BYTE&&(ne=r.R8I),V===r.SHORT&&(ne=r.R16I),V===r.INT&&(ne=r.R32I)),v===r.RG&&(V===r.FLOAT&&(ne=r.RG32F),V===r.HALF_FLOAT&&(ne=r.RG16F),V===r.UNSIGNED_BYTE&&(ne=r.RG8),V===r.UNSIGNED_SHORT&&ye&&(ne=ye.RG16_EXT),V===r.SHORT&&ye&&(ne=ye.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RG8UI),V===r.UNSIGNED_SHORT&&(ne=r.RG16UI),V===r.UNSIGNED_INT&&(ne=r.RG32UI),V===r.BYTE&&(ne=r.RG8I),V===r.SHORT&&(ne=r.RG16I),V===r.INT&&(ne=r.RG32I)),v===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),V===r.UNSIGNED_INT&&(ne=r.RGB32UI),V===r.BYTE&&(ne=r.RGB8I),V===r.SHORT&&(ne=r.RGB16I),V===r.INT&&(ne=r.RGB32I)),v===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),V===r.UNSIGNED_INT&&(ne=r.RGBA32UI),V===r.BYTE&&(ne=r.RGBA8I),V===r.SHORT&&(ne=r.RGBA16I),V===r.INT&&(ne=r.RGBA32I)),v===r.RGB&&(V===r.UNSIGNED_SHORT&&ye&&(ne=ye.RGB16_EXT),V===r.SHORT&&ye&&(ne=ye.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),v===r.RGBA){const se=_e?Au:Ct.getTransfer(J);V===r.FLOAT&&(ne=r.RGBA32F),V===r.HALF_FLOAT&&(ne=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ne=se===Xt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ye&&(ne=ye.RGBA16_EXT),V===r.SHORT&&ye&&(ne=ye.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function B(R,v){let V;return R?v===null||v===sa||v===Al?V=r.DEPTH24_STENCIL8:v===ta?V=r.DEPTH32F_STENCIL8:v===Tl&&(V=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===sa||v===Al?V=r.DEPTH_COMPONENT24:v===ta?V=r.DEPTH_COMPONENT32F:v===Tl&&(V=r.DEPTH_COMPONENT16),V}function U(R,v){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==Hn&&R.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function F(R){const v=R.target;v.removeEventListener("dispose",F),O(v),v.isVideoTexture&&_.delete(v),v.isHTMLTexture&&x.delete(v)}function b(R){const v=R.target;v.removeEventListener("dispose",b),H(v)}function O(R){const v=s.get(R);if(v.__webglInit===void 0)return;const V=R.source,W=M.get(V);if(W){const J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&Y(R),Object.keys(W).length===0&&M.delete(V)}s.remove(R)}function Y(R){const v=s.get(R);r.deleteTexture(v.__webglTexture);const V=R.source,W=M.get(V);delete W[v.__cacheKey],h.memory.textures--}function H(R){const v=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[W][J]);else r.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)r.deleteFramebuffer(v.__webglFramebuffer[W]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=R.textures;for(let W=0,J=V.length;W<J;W++){const _e=s.get(V[W]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),h.memory.textures--),s.remove(V[W])}s.remove(R)}let Z=0;function pe(){Z=0}function de(){return Z}function ie(R){Z=R}function I(){const R=Z;return R>=l.maxTextures&&ut("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),Z+=1,R}function k(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function re(R,v){const V=s.get(R);if(R.isVideoTexture&&K(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const W=R.image;if(W===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(V,R,v);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+v)}function Se(R,v){const V=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Pe(V,R,v);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+v)}function be(R,v){const V=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Pe(V,R,v);return}i.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+v)}function L(R,v){const V=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){nt(V,R,v);return}i.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+v)}const j={[Bd]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[Fd]:r.MIRRORED_REPEAT},Ce={[Hn]:r.NEAREST,[iE]:r.NEAREST_MIPMAP_NEAREST,[Xc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[qh]:r.LINEAR_MIPMAP_NEAREST,[$s]:r.LINEAR_MIPMAP_LINEAR},Ie={[rE]:r.NEVER,[fE]:r.ALWAYS,[oE]:r.LESS,[Hp]:r.LEQUAL,[lE]:r.EQUAL,[Gp]:r.GEQUAL,[cE]:r.GREATER,[uE]:r.NOTEQUAL};function Be(R,v){if(v.type===ta&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===qh||v.magFilter===Xc||v.magFilter===$s||v.minFilter===Nn||v.minFilter===qh||v.minFilter===Xc||v.minFilter===$s)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,j[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Ce[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Ce[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Hn||v.minFilter!==Xc&&v.minFilter!==$s||v.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||s.get(v).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy}}}function ae(R,v){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",F));const W=v.source;let J=M.get(W);J===void 0&&(J={},M.set(W,J));const _e=k(v);if(_e!==R.__cacheKey){J[_e]===void 0&&(J[_e]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,V=!0),J[_e].usedTimes++;const ye=J[R.__cacheKey];ye!==void 0&&(J[R.__cacheKey].usedTimes--,ye.usedTimes===0&&Y(v)),R.__cacheKey=_e,R.__webglTexture=J[_e].texture}return V}function Re(R,v,V){return Math.floor(Math.floor(R/V)/v)}function me(R,v,V,W){const _e=R.updateRanges;if(_e.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,V,W,v.data);else{_e.sort((Ne,Le)=>Ne.start-Le.start);let ye=0;for(let Ne=1;Ne<_e.length;Ne++){const Le=_e[ye],De=_e[Ne],Ye=Le.start+Le.count,Ke=Re(De.start,v.width,4),lt=Re(Le.start,v.width,4);De.start<=Ye+1&&Ke===lt&&Re(De.start+De.count-1,v.width,4)===Ke?Le.count=Math.max(Le.count,De.start+De.count-Le.start):(++ye,_e[ye]=De)}_e.length=ye+1;const ne=i.getParameter(r.UNPACK_ROW_LENGTH),se=i.getParameter(r.UNPACK_SKIP_PIXELS),xe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,Le=_e.length;Ne<Le;Ne++){const De=_e[Ne],Ye=Math.floor(De.start/4),Ke=Math.ceil(De.count/4),lt=Ye%v.width,X=Math.floor(Ye/v.width),Oe=Ke,Me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,lt,X,Oe,Me,V,W,v.data)}R.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ne),i.pixelStorei(r.UNPACK_SKIP_PIXELS,se),i.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}}function Pe(R,v,V){let W=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=r.TEXTURE_3D);const J=ae(R,v),_e=v.source;i.bindTexture(W,R.__webglTexture,r.TEXTURE0+V);const ye=s.get(_e);if(_e.version!==ye.__version||J===!0){if(i.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Me=Ct.getPrimaries(Ct.workingColorSpace),ze=v.colorSpace===ys?null:Ct.getPrimaries(v.colorSpace),Ge=v.colorSpace===ys||Me===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let se=E(v.image,!1,l.maxTextureSize);se=Ot(v,se);const xe=c.convert(v.format,v.colorSpace),Ne=c.convert(v.type);let Le=w(v.internalFormat,xe,Ne,v.normalized,v.colorSpace,v.isVideoTexture);Be(W,v);let De;const Ye=v.mipmaps,Ke=v.isVideoTexture!==!0,lt=ye.__version===void 0||J===!0,X=_e.dataReady,Oe=U(v,se);if(v.isDepthTexture)Le=B(v.format===er,v.type),lt&&(Ke?i.texStorage2D(r.TEXTURE_2D,1,Le,se.width,se.height):i.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,xe,Ne,null));else if(v.isDataTexture)if(Ye.length>0){Ke&&lt&&i.texStorage2D(r.TEXTURE_2D,Oe,Le,Ye[0].width,Ye[0].height);for(let Me=0,ze=Ye.length;Me<ze;Me++)De=Ye[Me],Ke?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,xe,Ne,De.data):i.texImage2D(r.TEXTURE_2D,Me,Le,De.width,De.height,0,xe,Ne,De.data);v.generateMipmaps=!1}else Ke?(lt&&i.texStorage2D(r.TEXTURE_2D,Oe,Le,se.width,se.height),X&&me(v,se,xe,Ne)):i.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,xe,Ne,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Le,Ye[0].width,Ye[0].height,se.depth);for(let Me=0,ze=Ye.length;Me<ze;Me++)if(De=Ye[Me],v.format!==ki)if(xe!==null)if(Ke){if(X)if(v.layerUpdates.size>0){const Ge=Nv(De.width,De.height,v.format,v.type);for(const we of v.layerUpdates){const $e=De.data.subarray(we*Ge/De.data.BYTES_PER_ELEMENT,(we+1)*Ge/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,we,De.width,De.height,1,xe,$e)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,se.depth,xe,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Le,De.width,De.height,se.depth,0,De.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,se.depth,xe,Ne,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Le,De.width,De.height,se.depth,0,xe,Ne,De.data)}else{Ke&&lt&&i.texStorage2D(r.TEXTURE_2D,Oe,Le,Ye[0].width,Ye[0].height);for(let Me=0,ze=Ye.length;Me<ze;Me++)De=Ye[Me],v.format!==ki?xe!==null?Ke?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,xe,De.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Le,De.width,De.height,0,De.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,xe,Ne,De.data):i.texImage2D(r.TEXTURE_2D,Me,Le,De.width,De.height,0,xe,Ne,De.data)}else if(v.isDataArrayTexture)if(Ke){if(lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Le,se.width,se.height,se.depth),X)if(v.layerUpdates.size>0){const Me=Nv(se.width,se.height,v.format,v.type);for(const ze of v.layerUpdates){const Ge=se.data.subarray(ze*Me/se.data.BYTES_PER_ELEMENT,(ze+1)*Me/se.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ze,se.width,se.height,1,xe,Ne,Ge)}v.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Ne,se.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,xe,Ne,se.data);else if(v.isData3DTexture)Ke?(lt&&i.texStorage3D(r.TEXTURE_3D,Oe,Le,se.width,se.height,se.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Ne,se.data)):i.texImage3D(r.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,xe,Ne,se.data);else if(v.isFramebufferTexture){if(lt)if(Ke)i.texStorage2D(r.TEXTURE_2D,Oe,Le,se.width,se.height);else{let Me=se.width,ze=se.height;for(let Ge=0;Ge<Oe;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,Le,Me,ze,0,xe,Ne,null),Me>>=1,ze>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),se.parentNode!==Me){Me.appendChild(se),x.add(v),Me.onpaint=ze=>{const Ge=ze.changedElements;for(const we of x)Ge.includes(we.image)&&(we.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,se);else{const Ge=r.RGBA,we=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,we,$e,se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(Ke&&lt){const Me=ve(Ye[0]);i.texStorage2D(r.TEXTURE_2D,Oe,Le,Me.width,Me.height)}for(let Me=0,ze=Ye.length;Me<ze;Me++)De=Ye[Me],Ke?X&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,xe,Ne,De):i.texImage2D(r.TEXTURE_2D,Me,Le,xe,Ne,De);v.generateMipmaps=!1}else if(Ke){if(lt){const Me=ve(se);i.texStorage2D(r.TEXTURE_2D,Oe,Le,Me.width,Me.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Ne,se)}else i.texImage2D(r.TEXTURE_2D,0,Le,xe,Ne,se);S(v)&&P(W),ye.__version=_e.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function nt(R,v,V){if(v.image.length!==6)return;const W=ae(R,v),J=v.source;i.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const _e=s.get(J);if(J.version!==_e.__version||W===!0){i.activeTexture(r.TEXTURE0+V);const ye=Ct.getPrimaries(Ct.workingColorSpace),ne=v.colorSpace===ys?null:Ct.getPrimaries(v.colorSpace),se=v.colorSpace===ys||ye===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,Le=[];for(let we=0;we<6;we++)!xe&&!Ne?Le[we]=E(v.image[we],!0,l.maxCubemapSize):Le[we]=Ne?v.image[we].image:v.image[we],Le[we]=Ot(v,Le[we]);const De=Le[0],Ye=c.convert(v.format,v.colorSpace),Ke=c.convert(v.type),lt=w(v.internalFormat,Ye,Ke,v.normalized,v.colorSpace),X=v.isVideoTexture!==!0,Oe=_e.__version===void 0||W===!0,Me=J.dataReady;let ze=U(v,De);Be(r.TEXTURE_CUBE_MAP,v);let Ge;if(xe){X&&Oe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ze,lt,De.width,De.height);for(let we=0;we<6;we++){Ge=Le[we].mipmaps;for(let $e=0;$e<Ge.length;$e++){const qe=Ge[$e];v.format!==ki?Ye!==null?X?Me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,qe.width,qe.height,Ye,qe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,lt,qe.width,qe.height,0,qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,qe.width,qe.height,Ye,Ke,qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,lt,qe.width,qe.height,0,Ye,Ke,qe.data)}}}else{if(Ge=v.mipmaps,X&&Oe){Ge.length>0&&ze++;const we=ve(Le[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ze,lt,we.width,we.height)}for(let we=0;we<6;we++)if(Ne){X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Le[we].width,Le[we].height,Ye,Ke,Le[we].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,lt,Le[we].width,Le[we].height,0,Ye,Ke,Le[we].data);for(let $e=0;$e<Ge.length;$e++){const sn=Ge[$e].image[we].image;X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,sn.width,sn.height,Ye,Ke,sn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,lt,sn.width,sn.height,0,Ye,Ke,sn.data)}}else{X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ye,Ke,Le[we]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,lt,Ye,Ke,Le[we]);for(let $e=0;$e<Ge.length;$e++){const qe=Ge[$e];X?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,Ye,Ke,qe.image[we]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,lt,Ye,Ke,qe.image[we])}}}S(v)&&P(r.TEXTURE_CUBE_MAP),_e.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function je(R,v,V,W,J,_e){const ye=c.convert(V.format,V.colorSpace),ne=c.convert(V.type),se=w(V.internalFormat,ye,ne,V.normalized,V.colorSpace),xe=s.get(v),Ne=s.get(V);if(Ne.__renderTarget=v,!xe.__hasExternalTextures){const Le=Math.max(1,v.width>>_e),De=Math.max(1,v.height>>_e);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?i.texImage3D(J,_e,se,Le,De,v.depth,0,ye,ne,null):i.texImage2D(J,_e,se,Le,De,0,ye,ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,R),an(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,J,Ne.__webglTexture,0,zt(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,J,Ne.__webglTexture,_e),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,v,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const W=v.depthTexture,J=W&&W.isDepthTexture?W.type:null,_e=B(v.stencilBuffer,J),ye=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;an(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(v),_e,v.width,v.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(v),_e,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,_e,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const W=v.textures;for(let J=0;J<W.length;J++){const _e=W[J],ye=c.convert(_e.format,_e.colorSpace),ne=c.convert(_e.type),se=w(_e.internalFormat,ye,ne,_e.normalized,_e.colorSpace);an(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(v),se,v.width,v.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(v),se,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,se,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(R,v,V){const W=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=s.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Be(r.TEXTURE_CUBE_MAP,v.depthTexture);const xe=c.convert(v.depthTexture.format),Ne=c.convert(v.depthTexture.type);let Le;v.depthTexture.format===Ba?Le=r.DEPTH_COMPONENT24:v.depthTexture.format===er&&(Le=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Le,v.width,v.height,0,xe,Ne,null)}}else re(v.depthTexture,0);const _e=J.__webglTexture,ye=zt(v),ne=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,se=v.depthTexture.format===er?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ba)an(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ne,_e,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,se,ne,_e,0);else if(v.depthTexture.format===er)an(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ne,_e,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,se,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(R){const v=s.get(R),V=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)ee(v.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?ee(v.__webglFramebuffer[0],R,0):ee(v.__webglFramebuffer,R,0)}else if(V){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=r.createRenderbuffer(),Ut(v.__webglDepthbuffer[W],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,_e)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ut(v.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,_e)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function He(R,v,V){const W=s.get(R);v!==void 0&&je(W.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ue(R)}function tt(R){const v=R.texture,V=s.get(R),W=s.get(v);R.addEventListener("dispose",b);const J=R.textures,_e=R.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=v.version,h.memory.textures++),_e){V.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[ne]=[];for(let se=0;se<v.mipmaps.length;se++)V.__webglFramebuffer[ne][se]=r.createFramebuffer()}else V.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)V.__webglFramebuffer[ne]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ne=0,se=J.length;ne<se;ne++){const xe=s.get(J[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),h.memory.textures++)}if(R.samples>0&&an(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ne=0;ne<J.length;ne++){const se=J[ne];V.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ne]);const xe=c.convert(se.format,se.colorSpace),Ne=c.convert(se.type),Le=w(se.internalFormat,xe,Ne,se.normalized,se.colorSpace,R.isXRRenderTarget===!0),De=zt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,V.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(V.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Be(r.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)je(V.__webglFramebuffer[ne][se],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else je(V.__webglFramebuffer[ne],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);S(v)&&P(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ye){for(let ne=0,se=J.length;ne<se;ne++){const xe=J[ne],Ne=s.get(xe);let Le=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,Ne.__webglTexture),Be(Le,xe),je(V.__webglFramebuffer,R,xe,r.COLOR_ATTACHMENT0+ne,Le,0),S(xe)&&P(Le)}i.unbindTexture()}else{let ne=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ne,W.__webglTexture),Be(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)je(V.__webglFramebuffer[se],R,v,r.COLOR_ATTACHMENT0,ne,se);else je(V.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,ne,0);S(v)&&P(ne),i.unbindTexture()}R.depthBuffer&&Ue(R)}function dt(R){const v=R.textures;for(let V=0,W=v.length;V<W;V++){const J=v[V];if(S(J)){const _e=z(R),ye=s.get(J).__webglTexture;i.bindTexture(_e,ye),P(_e),i.unbindTexture()}}}const Lt=[],Qt=[];function nn(R){if(R.samples>0){if(an(R)===!1){const v=R.textures,V=R.width,W=R.height;let J=r.COLOR_BUFFER_BIT;const _e=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=s.get(R),ne=v.length>1;if(ne)for(let xe=0;xe<v.length;xe++)i.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const se=R.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ne=s.get(v[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,V,W,0,0,V,W,J,r.NEAREST),m===!0&&(Lt.length=0,Qt.length=0,Lt.push(r.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Lt.push(_e),Qt.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<v.length;xe++){i.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ne=s.get(v[xe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,Ne,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function zt(R){return Math.min(l.maxSamples,R.samples)}function an(R){const v=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(R){const v=h.render.frame;_.get(R)!==v&&(_.set(R,v),R.update())}function Ot(R,v){const V=R.colorSpace,W=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Tu&&V!==ys&&(Ct.getTransfer(V)===Xt?(W!==ki||J!==xi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",V)),v}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=pe,this.getTextureUnits=de,this.setTextureUnits=ie,this.setTexture2D=re,this.setTexture2DArray=Se,this.setTexture3D=be,this.setTextureCube=L,this.rebindTextures=He,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=je,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sR(r,e){function i(s,l=ys){let c;const h=Ct.getTransfer(l);if(s===xi)return r.UNSIGNED_BYTE;if(s===Pp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yy)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===xy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===_y)return r.BYTE;if(s===vy)return r.SHORT;if(s===Tl)return r.UNSIGNED_SHORT;if(s===Op)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===ta)return r.FLOAT;if(s===za)return r.HALF_FLOAT;if(s===Sy)return r.ALPHA;if(s===My)return r.RGB;if(s===ki)return r.RGBA;if(s===Ba)return r.DEPTH_COMPONENT;if(s===er)return r.DEPTH_STENCIL;if(s===Ey)return r.RED;if(s===zp)return r.RED_INTEGER;if(s===ir)return r.RG;if(s===Bp)return r.RG_INTEGER;if(s===Fp)return r.RGBA_INTEGER;if(s===vu||s===yu||s===xu||s===Su)if(h===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xd||s===Wd||s===Yd||s===qd||s===Zd||s===Eu||s===Kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xd||s===Wd)return h===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===qd)return c.COMPRESSED_R11_EAC;if(s===Zd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Eu)return c.COMPRESSED_RG11_EAC;if(s===Kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Qd||s===Jd||s===jd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Qd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===hp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return h===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===bu||s===mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===dp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Uy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ra({vertexShader:rR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new En(new tr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends Ts{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,M=null,T=null;const N=typeof XRWebGLBinding<"u",E=new lR,S={},P=i.getContextAttributes();let z=null,w=null;const B=[],U=[],F=new ot;let b=null;const O=new Ui;O.viewport=new un;const Y=new Ui;Y.viewport=new un;const H=[O,Y],Z=new _b;let pe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Re=B[ae];return Re===void 0&&(Re=new $h,B[ae]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ae){let Re=B[ae];return Re===void 0&&(Re=new $h,B[ae]=Re),Re.getGripSpace()},this.getHand=function(ae){let Re=B[ae];return Re===void 0&&(Re=new $h,B[ae]=Re),Re.getHandSpace()};function ie(ae){const Re=U.indexOf(ae.inputSource);if(Re===-1)return;const me=B[Re];me!==void 0&&(me.update(ae.inputSource,ae.frame,d||h),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){l.removeEventListener("select",ie),l.removeEventListener("selectstart",ie),l.removeEventListener("selectend",ie),l.removeEventListener("squeeze",ie),l.removeEventListener("squeezestart",ie),l.removeEventListener("squeezeend",ie),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",k);for(let ae=0;ae<B.length;ae++){const Re=U[ae];Re!==null&&(U[ae]=null,B[ae].disconnect(Re))}pe=null,de=null,E.reset();for(const ae in S)delete S[ae];e.setRenderTarget(z),M=null,g=null,x=null,l=null,w=null,Be.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ie),l.addEventListener("selectstart",ie),l.addEventListener("selectend",ie),l.addEventListener("squeeze",ie),l.addEventListener("squeezestart",ie),l.addEventListener("squeezeend",ie),l.addEventListener("end",I),l.addEventListener("inputsourceschange",k),P.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Pe=null,nt=null;P.depth&&(nt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,me=P.stencil?er:Ba,Pe=P.stencil?Al:sa);const je={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new aa(g.textureWidth,g.textureHeight,{format:ki,type:xi,depthTexture:new fo(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new aa(M.framebufferWidth,M.framebufferHeight,{format:ki,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function k(ae){for(let Re=0;Re<ae.removed.length;Re++){const me=ae.removed[Re],Pe=U.indexOf(me);Pe>=0&&(U[Pe]=null,B[Pe].disconnect(me))}for(let Re=0;Re<ae.added.length;Re++){const me=ae.added[Re];let Pe=U.indexOf(me);if(Pe===-1){for(let je=0;je<B.length;je++)if(je>=U.length){U.push(me),Pe=je;break}else if(U[je]===null){U[je]=me,Pe=je;break}if(Pe===-1)break}const nt=B[Pe];nt&&nt.connect(me)}}const re=new $,Se=new $;function be(ae,Re,me){re.setFromMatrixPosition(Re.matrixWorld),Se.setFromMatrixPosition(me.matrixWorld);const Pe=re.distanceTo(Se),nt=Re.projectionMatrix.elements,je=me.projectionMatrix.elements,Ut=nt[14]/(nt[10]-1),ee=nt[14]/(nt[10]+1),Ue=(nt[9]+1)/nt[5],He=(nt[9]-1)/nt[5],tt=(nt[8]-1)/nt[0],dt=(je[8]+1)/je[0],Lt=Ut*tt,Qt=Ut*dt,nn=Pe/(-tt+dt),zt=nn*-tt;if(Re.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(zt),ae.translateZ(nn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),nt[10]===-1)ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const an=Ut+nn,K=ee+nn,Ot=Lt-zt,ve=Qt+(Pe-zt),R=Ue*ee/K*an,v=He*ee/K*an;ae.projectionMatrix.makePerspective(Ot,ve,R,v,an,K),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function L(ae,Re){Re===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Re.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let Re=ae.near,me=ae.far;E.texture!==null&&(E.depthNear>0&&(Re=E.depthNear),E.depthFar>0&&(me=E.depthFar)),Z.near=Y.near=O.near=Re,Z.far=Y.far=O.far=me,(pe!==Z.near||de!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),pe=Z.near,de=Z.far),Z.layers.mask=ae.layers.mask|6,O.layers.mask=Z.layers.mask&-5,Y.layers.mask=Z.layers.mask&-3;const Pe=ae.parent,nt=Z.cameras;L(Z,Pe);for(let je=0;je<nt.length;je++)L(nt[je],Pe);nt.length===2?be(Z,O,Y):Z.projectionMatrix.copy(O.projectionMatrix),j(ae,Z,Pe)};function j(ae,Re,me){me===null?ae.matrix.copy(Re.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Re.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Cl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(Z)},this.getCameraTexture=function(ae){return S[ae]};let Ce=null;function Ie(ae,Re){if(_=Re.getViewerPose(d||h),T=Re,_!==null){const me=_.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Pe=!1;me.length!==Z.cameras.length&&(Z.cameras.length=0,Pe=!0);for(let ee=0;ee<me.length;ee++){const Ue=me[ee];let He=null;if(M!==null)He=M.getViewport(Ue);else{const dt=x.getViewSubImage(g,Ue);He=dt.viewport,ee===0&&(e.setRenderTargetTextures(w,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(w))}let tt=H[ee];tt===void 0&&(tt=new Ui,tt.layers.enable(ee),tt.viewport=new un,H[ee]=tt),tt.matrix.fromArray(Ue.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ue.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(He.x,He.y,He.width,He.height),ee===0&&(Z.matrix.copy(tt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pe===!0&&Z.cameras.push(tt)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){x=s.getBinding();const ee=x.getDepthInformation(me[0]);ee&&ee.isValid&&ee.texture&&E.init(ee,l.renderState)}if(nt&&nt.includes("camera-access")&&N){e.state.unbindTexture(),x=s.getBinding();for(let ee=0;ee<me.length;ee++){const Ue=me[ee].camera;if(Ue){let He=S[Ue];He||(He=new Uy,S[Ue]=He);const tt=x.getCameraImage(Ue);He.sourceTexture=tt}}}}for(let me=0;me<B.length;me++){const Pe=U[me],nt=B[me];Pe!==null&&nt!==void 0&&nt.update(Pe,Re,d||h)}Ce&&Ce(ae,Re),Re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Re}),T=null}const Be=new Iy;Be.setAnimationLoop(Ie),this.setAnimationLoop=function(ae){Ce=ae},this.dispose=function(){}}}const uR=new cn,ky=new ht;ky.set(-1,0,0,0,1,0,0,0,1);function fR(r,e){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function s(E,S){S.color.getRGB(E.fogColor.value,Ly(r)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function l(E,S,P,z,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(E,S):S.isMeshLambertMaterial?(c(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(E,S),x(E,S)):S.isMeshPhongMaterial?(c(E,S),_(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(E,S),g(E,S),S.isMeshPhysicalMaterial&&M(E,S,w)):S.isMeshMatcapMaterial?(c(E,S),T(E,S)):S.isMeshDepthMaterial?c(E,S):S.isMeshDistanceMaterial?(c(E,S),N(E,S)):S.isMeshNormalMaterial?c(E,S):S.isLineBasicMaterial?(h(E,S),S.isLineDashedMaterial&&p(E,S)):S.isPointsMaterial?m(E,S,P,z):S.isSpriteMaterial?d(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===ri&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===ri&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const P=e.get(S),z=P.envMap,w=P.envMapRotation;z&&(E.envMap.value=z,E.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(w)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(ky),E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function h(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function p(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function m(E,S,P,z){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*P,E.scale.value=z*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function d(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function _(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function x(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function g(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function M(E,S,P){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ri&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=P.texture,E.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,S){S.matcap&&(E.matcap.value=S.matcap)}function N(E,S){const P=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(P.matrixWorld),E.nearDistance.value=P.shadow.camera.near,E.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function hR(r,e,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,B){const U=B.program;s.uniformBlockBinding(w,U)}function d(w,B){let U=l[w.id];U===void 0&&(E(w),U=_(w),l[w.id]=U,w.addEventListener("dispose",P));const F=B.program;s.updateUBOMapping(w,F);const b=e.render.frame;c[w.id]!==b&&(g(w),c[w.id]=b)}function _(w){const B=x();w.__bindingPointIndex=B;const U=r.createBuffer(),F=w.__size,b=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,B,U),U}function x(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const B=l[w.id],U=w.uniforms,F=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,B);for(let b=0,O=U.length;b<O;b++){const Y=U[b];if(Array.isArray(Y))for(let H=0,Z=Y.length;H<Z;H++)M(Y[H],b,H,F);else M(Y,b,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,B,U,F){if(N(w,B,U,F)===!0){const b=w.__offset,O=w.value;if(Array.isArray(O)){let Y=0;for(let H=0;H<O.length;H++){const Z=O[H],pe=S(Z);T(Z,w.__data,Y),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(O,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,w.__data)}}function T(w,B,U){typeof w=="number"||typeof w=="boolean"?B[0]=w:w.isMatrix3?(B[0]=w.elements[0],B[1]=w.elements[1],B[2]=w.elements[2],B[3]=0,B[4]=w.elements[3],B[5]=w.elements[4],B[6]=w.elements[5],B[7]=0,B[8]=w.elements[6],B[9]=w.elements[7],B[10]=w.elements[8],B[11]=0):ArrayBuffer.isView(w)?B.set(new w.constructor(w.buffer,w.byteOffset,B.length)):w.toArray(B,U)}function N(w,B,U,F){const b=w.value,O=B+"_"+U;if(F[O]===void 0)return typeof b=="number"||typeof b=="boolean"?F[O]=b:ArrayBuffer.isView(b)?F[O]=b.slice():F[O]=b.clone(),!0;{const Y=F[O];if(typeof b=="number"||typeof b=="boolean"){if(Y!==b)return F[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(Y.equals(b)===!1)return Y.copy(b),!0}}return!1}function E(w){const B=w.uniforms;let U=0;const F=16;for(let O=0,Y=B.length;O<Y;O++){const H=Array.isArray(B[O])?B[O]:[B[O]];for(let Z=0,pe=H.length;Z<pe;Z++){const de=H[Z],ie=Array.isArray(de.value)?de.value:[de.value];for(let I=0,k=ie.length;I<k;I++){const re=ie[I],Se=S(re),be=U%F,L=be%Se.boundary,j=be+L;U+=L,j!==0&&F-j<Se.storage&&(U+=F-j),de.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=Se.storage}}}const b=U%F;return b>0&&(U+=F-b),w.__size=U,w.__cache={},this}function S(w){const B={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(B.boundary=4,B.storage=4):w.isVector2?(B.boundary=8,B.storage=8):w.isVector3||w.isColor?(B.boundary=16,B.storage=12):w.isVector4?(B.boundary=16,B.storage=16):w.isMatrix3?(B.boundary=48,B.storage=48):w.isMatrix4?(B.boundary=64,B.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(B.boundary=16,B.storage=w.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",w),B}function P(w){const B=w.target;B.removeEventListener("dispose",P);const U=h.indexOf(B.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function z(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:z}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function pR(){return ji===null&&(ji=new $E(dR,16,16,ir,za),ji.name="DFG_LUT",ji.minFilter=Nn,ji.magFilter=Nn,ji.wrapS=Ua,ji.wrapT=Ua,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class mR{constructor(e={}){const{canvas:i=dE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const N=M,E=new Set([Fp,Bp,zp]),S=new Set([xi,sa,Tl,Al,Pp,Ip]),P=new Uint32Array(4),z=new Int32Array(4),w=new $;let B=null,U=null;const F=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,Z=null,pe=null,de=null,ie=null;this._outputColorSpace=ai;let I=0,k=0,re=null,Se=-1,be=null;const L=new un,j=new un;let Ce=null;const Ie=new Mt(0);let Be=0,ae=i.width,Re=i.height,me=1,Pe=null,nt=null;const je=new un(0,0,ae,Re),Ut=new un(0,0,ae,Re);let ee=!1;const Ue=new Zp;let He=!1,tt=!1;const dt=new cn,Lt=new $,Qt=new un,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function an(){return re===null?me:1}let K=s;function Ot(A,Q){return i.getContext(A,Q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",sn,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",oi,!1),K===null){const Q="webgl2";if(K=Ot(Q,A),K===null)throw Ot(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let ve,R,v,V,W,J,_e,ye,ne,se,xe,Ne,Le,De,Ye,Ke,lt,X,Oe,Me,ze,Ge,we;function $e(){ve=new pA(K),ve.init(),ze=new sR(K,ve),R=new rA(K,ve,e,ze),v=new iR(K,ve),R.reversedDepthBuffer&&g&&v.buffers.depth.setReversed(!0),pe=K.createFramebuffer(),de=K.createFramebuffer(),ie=K.createFramebuffer(),V=new _A(K),W=new k2,J=new aR(K,ve,v,W,R,ze,V),_e=new dA(Y),ye=new Sb(K),Ge=new aA(K,ye),ne=new mA(K,ye,V,Ge),se=new yA(K,ne,ye,Ge,V),X=new vA(K,R,J),Ye=new oA(W),xe=new V2(Y,_e,ve,R,Ge,Ye),Ne=new fR(Y,W),Le=new W2,De=new J2(ve),lt=new iA(Y,_e,v,se,T,m),Ke=new nR(Y,se,R),we=new hR(K,V,R,v),Oe=new sA(K,ve,V),Me=new gA(K,ve,V),V.programs=xe.programs,Y.capabilities=R,Y.extensions=ve,Y.properties=W,Y.renderLists=Le,Y.shadowMap=Ke,Y.state=v,Y.info=V}$e(),N!==xi&&(O=new SA(N,i.width,i.height,p,l,c));const qe=new cR(Y,K);this.xr=qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(ae,Re,!1))},this.getSize=function(A){return A.set(ae,Re)},this.setSize=function(A,Q,fe=!0){if(qe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,Re=Q,i.width=Math.floor(A*me),i.height=Math.floor(Q*me),fe===!0&&(i.style.width=A+"px",i.style.height=Q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(ae*me,Re*me).floor()},this.setDrawingBufferSize=function(A,Q,fe){ae=A,Re=Q,me=fe,i.width=Math.floor(A*fe),i.height=Math.floor(Q*fe),this.setViewport(0,0,A,Q)},this.setEffects=function(A){if(N===xi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Q=0;Q<A.length;Q++)if(A[Q].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,Q,fe,ce){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,Q,fe,ce),v.viewport(L.copy(je).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,Q,fe,ce){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,Q,fe,ce),v.scissor(j.copy(Ut).multiplyScalar(me).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){v.setScissorTest(ee=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,fe=!0){let ce=0;if(A){let ue=!1;if(re!==null){const Ve=re.texture.format;ue=E.has(Ve)}if(ue){const Ve=re.texture.type,We=S.has(Ve),Fe=lt.getClearColor(),Qe=lt.getClearAlpha(),Ze=Fe.r,st=Fe.g,pt=Fe.b;We?(P[0]=Ze,P[1]=st,P[2]=pt,P[3]=Qe,K.clearBufferuiv(K.COLOR,0,P)):(z[0]=Ze,z[1]=st,z[2]=pt,z[3]=Qe,K.clearBufferiv(K.COLOR,0,z))}else ce|=K.COLOR_BUFFER_BIT}Q&&(ce|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&K.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",sn,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",oi,!1),lt.dispose(),Le.dispose(),De.dispose(),W.dispose(),_e.dispose(),se.dispose(),Ge.dispose(),we.dispose(),xe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",gn),qe.removeEventListener("sessionend",On),Qn.stop()};function sn(A){A.preventDefault(),Cu("WebGLRenderer: Context Lost."),H=!0}function Bt(){Cu("WebGLRenderer: Context Restored."),H=!1;const A=V.autoReset,Q=Ke.enabled,fe=Ke.autoUpdate,ce=Ke.needsUpdate,ue=Ke.type;$e(),V.autoReset=A,Ke.enabled=Q,Ke.autoUpdate=fe,Ke.needsUpdate=ce,Ke.type=ue}function oi(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function li(A){const Q=A.target;Q.removeEventListener("dispose",li),_o(Q)}function _o(A){vo(A),W.remove(A)}function vo(A){const Q=W.get(A).programs;Q!==void 0&&(Q.forEach(function(fe){xe.releaseProgram(fe)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,fe,ce,ue,Ve){Q===null&&(Q=nn);const We=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Fe=Ga(A,Q,fe,ce,ue);v.setMaterial(ce,We);let Qe=fe.index,Ze=1;if(ce.wireframe===!0){if(Qe=ne.getWireframeAttribute(fe),Qe===void 0)return;Ze=2}const st=fe.drawRange,pt=fe.attributes.position;let it=st.start*Ze,wt=(st.start+st.count)*Ze;Ve!==null&&(it=Math.max(it,Ve.start*Ze),wt=Math.min(wt,(Ve.start+Ve.count)*Ze)),Qe!==null?(it=Math.max(it,0),wt=Math.min(wt,Qe.count)):pt!=null&&(it=Math.max(it,0),wt=Math.min(wt,pt.count));const rn=wt-it;if(rn<0||rn===1/0)return;Ge.setup(ue,ce,Fe,fe,Qe);let Jt,Ft=Oe;if(Qe!==null&&(Jt=ye.get(Qe),Ft=Me,Ft.setIndex(Jt)),ue.isMesh)ce.wireframe===!0?(v.setLineWidth(ce.wireframeLinewidth*an()),Ft.setMode(K.LINES)):Ft.setMode(K.TRIANGLES);else if(ue.isLine){let Ht=ce.linewidth;Ht===void 0&&(Ht=1),v.setLineWidth(Ht*an()),ue.isLineSegments?Ft.setMode(K.LINES):ue.isLineLoop?Ft.setMode(K.LINE_LOOP):Ft.setMode(K.LINE_STRIP)}else ue.isPoints?Ft.setMode(K.POINTS):ue.isSprite&&Ft.setMode(K.TRIANGLES);if(ue.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Ht=ue._multiDrawStarts,Xe=ue._multiDrawCounts,Gn=ue._multiDrawCount,yt=Qe?ye.get(Qe).bytesPerElement:1,bn=W.get(ce).currentProgram.getUniforms();for(let ci=0;ci<Gn;ci++)bn.setValue(K,"_gl_DrawID",ci),Ft.render(Ht[ci]/yt,Xe[ci])}else if(ue.isInstancedMesh)Ft.renderInstances(it,rn,ue.count);else if(fe.isInstancedBufferGeometry){const Ht=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,Ht);Ft.renderInstances(it,rn,Xe)}else Ft.render(it,rn)};function yo(A,Q,fe){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,Ha(A,Q,fe),A.side=Ss,A.needsUpdate=!0,Ha(A,Q,fe),A.side=ea):Ha(A,Q,fe)}this.compile=function(A,Q,fe=null){fe===null&&(fe=A),U=De.get(fe),U.init(Q),b.push(U),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Q.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),A!==fe&&A.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Q.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),U.setupLights();const ce=new Set;return A.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Ve=ue.material;if(Ve)if(Array.isArray(Ve))for(let We=0;We<Ve.length;We++){const Fe=Ve[We];yo(Fe,fe,ue),ce.add(Fe)}else yo(Ve,fe,ue),ce.add(Ve)}),U=b.pop(),ce},this.compileAsync=function(A,Q,fe=null){const ce=this.compile(A,Q,fe);return new Promise(ue=>{function Ve(){if(ce.forEach(function(We){W.get(We).currentProgram.isReady()&&ce.delete(We)}),ce.size===0){ue(A);return}setTimeout(Ve,10)}ve.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let sr=null;function Wi(A){sr&&sr(A)}function gn(){Qn.stop()}function On(){Qn.start()}const Qn=new Iy;Qn.setAnimationLoop(Wi),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(A){sr=A,qe.setAnimationLoop(A),A===null?Qn.stop():Qn.start()},qe.addEventListener("sessionstart",gn),qe.addEventListener("sessionend",On),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(A,Q);const fe=qe.enabled===!0&&qe.isPresenting===!0,ce=O!==null&&(re===null||fe)&&O.begin(Y,re);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Q),Q=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,Q,re),U=De.get(A,b.length),U.init(Q),U.state.textureUnits=J.getTextureUnits(),b.push(U),dt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ue.setFromProjectionMatrix(dt,na,Q.reversedDepth),tt=this.localClippingEnabled,He=Ye.init(this.clippingPlanes,tt),B=Le.get(A,F.length),B.init(),F.push(B),qe.enabled===!0&&qe.isPresenting===!0){const We=Y.xr.getDepthSensingMesh();We!==null&&As(We,Q,-1/0,Y.sortObjects)}As(A,Q,0,Y.sortObjects),B.finish(),Y.sortObjects===!0&&B.sort(Pe,nt,Q.reversedDepth),zt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,zt&&lt.addToRenderList(B,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Ye.beginShadows();const ue=U.state.shadowsArray;if(Ke.render(ue,A,Q),He===!0&&Ye.endShadows(),(ce&&O.hasRenderPass())===!1){const We=B.opaque,Fe=B.transmissive;if(U.setupLights(),Q.isArrayCamera){const Qe=Q.cameras;if(Fe.length>0)for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze];Ll(We,Fe,A,pt)}zt&&lt.render(A);for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze];Ul(B,A,pt,pt.viewport)}}else Fe.length>0&&Ll(We,Fe,A,Q),zt&&lt.render(A),Ul(B,A,Q)}re!==null&&k===0&&(J.updateMultisampleRenderTarget(re),J.updateRenderTargetMipmap(re)),ce&&O.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,Q),Ge.resetDefaultState(),Se=-1,be=null,b.pop(),b.length>0?(U=b[b.length-1],J.setTextureUnits(U.state.textureUnits),He===!0&&Ye.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?B=F[F.length-1]:B=null,Z!==null&&Z.renderEnd()};function As(A,Q,fe,ce){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){ce&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const We=se.update(A),Fe=A.material;Fe.visible&&B.push(A,We,Fe,fe,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const We=se.update(A),Fe=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Qt.copy(We.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(Fe)){const Qe=We.groups;for(let Ze=0,st=Qe.length;Ze<st;Ze++){const pt=Qe[Ze],it=Fe[pt.materialIndex];it&&it.visible&&B.push(A,We,it,fe,Qt.z,pt)}}else Fe.visible&&B.push(A,We,Fe,fe,Qt.z,null)}}const Ve=A.children;for(let We=0,Fe=Ve.length;We<Fe;We++)As(Ve[We],Q,fe,ce)}function Ul(A,Q,fe,ce){const{opaque:ue,transmissive:Ve,transparent:We}=A;U.setupLightsView(fe),He===!0&&Ye.setGlobalState(Y.clippingPlanes,fe),ce&&v.viewport(L.copy(ce)),ue.length>0&&Rs(ue,Q,fe),Ve.length>0&&Rs(Ve,Q,fe),We.length>0&&Rs(We,Q,fe),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ll(A,Q,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ce.id]===void 0){const it=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ce.id]=new aa(1,1,{generateMipmaps:!0,type:it?za:xi,minFilter:$s,samples:Math.max(4,R.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ve=U.state.transmissionRenderTarget[ce.id],We=ce.viewport||L;Ve.setSize(We.z*Y.transmissionResolutionScale,We.w*Y.transmissionResolutionScale);const Fe=Y.getRenderTarget(),Qe=Y.getActiveCubeFace(),Ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Ve),Y.getClearColor(Ie),Be=Y.getClearAlpha(),Be<1&&Y.setClearColor(16777215,.5),Y.clear(),zt&&lt.render(fe);const st=Y.toneMapping;Y.toneMapping=ia;const pt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),U.setupLightsView(ce),He===!0&&Ye.setGlobalState(Y.clippingPlanes,ce),Rs(A,fe,ce),J.updateMultisampleRenderTarget(Ve),J.updateRenderTargetMipmap(Ve),ve.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let wt=0,rn=Q.length;wt<rn;wt++){const Jt=Q[wt],{object:Ft,geometry:Ht,material:Xe,group:Gn}=Jt;if(Xe.side===ea&&Ft.layers.test(ce.layers)){const yt=Xe.side;Xe.side=ri,Xe.needsUpdate=!0,Fa(Ft,fe,ce,Ht,Xe,Gn),Xe.side=yt,Xe.needsUpdate=!0,it=!0}}it===!0&&(J.updateMultisampleRenderTarget(Ve),J.updateRenderTargetMipmap(Ve))}Y.setRenderTarget(Fe,Qe,Ze),Y.setClearColor(Ie,Be),pt!==void 0&&(ce.viewport=pt),Y.toneMapping=st}function Rs(A,Q,fe){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let ue=0,Ve=A.length;ue<Ve;ue++){const We=A[ue],{object:Fe,geometry:Qe,group:Ze}=We;let st=We.material;st.allowOverride===!0&&ce!==null&&(st=ce),Fe.layers.test(fe.layers)&&Fa(Fe,Q,fe,Qe,st,Ze)}}function Fa(A,Q,fe,ce,ue,Ve){A.onBeforeRender(Y,Q,fe,ce,ue,Ve),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ue.onBeforeRender(Y,Q,fe,ce,A,Ve),ue.transparent===!0&&ue.side===ea&&ue.forceSinglePass===!1?(ue.side=ri,ue.needsUpdate=!0,Y.renderBufferDirect(fe,Q,ce,ue,A,Ve),ue.side=Ss,ue.needsUpdate=!0,Y.renderBufferDirect(fe,Q,ce,ue,A,Ve),ue.side=ea):Y.renderBufferDirect(fe,Q,ce,ue,A,Ve),A.onAfterRender(Y,Q,fe,ce,ue,Ve)}function Ha(A,Q,fe){Q.isScene!==!0&&(Q=nn);const ce=W.get(A),ue=U.state.lights,Ve=U.state.shadowsArray,We=ue.state.version,Fe=xe.getParameters(A,ue.state,Ve,Q,fe,U.state.lightProbeGridArray),Qe=xe.getProgramCacheKey(Fe);let Ze=ce.programs;ce.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Q.environment:null,ce.fog=Q.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ce.envMap=_e.get(A.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",li),Ze=new Map,ce.programs=Ze);let pt=Ze.get(Qe);if(pt!==void 0){if(ce.currentProgram===pt&&ce.lightsStateVersion===We)return la(A,Fe),pt}else Fe.uniforms=xe.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,fe,Fe),A.onBeforeCompile(Fe,Y),pt=xe.acquireProgram(Fe,Qe),Ze.set(Qe,pt),ce.uniforms=Fe.uniforms;const it=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(it.clippingPlanes=Ye.uniform),la(A,Fe),ce.needsLights=Ol(A),ce.lightsStateVersion=We,ce.needsLights&&(it.ambientLightColor.value=ue.state.ambient,it.lightProbe.value=ue.state.probe,it.directionalLights.value=ue.state.directional,it.directionalLightShadows.value=ue.state.directionalShadow,it.spotLights.value=ue.state.spot,it.spotLightShadows.value=ue.state.spotShadow,it.rectAreaLights.value=ue.state.rectArea,it.ltc_1.value=ue.state.rectAreaLTC1,it.ltc_2.value=ue.state.rectAreaLTC2,it.pointLights.value=ue.state.point,it.pointLightShadows.value=ue.state.pointShadow,it.hemisphereLights.value=ue.state.hemi,it.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,it.spotLightMatrix.value=ue.state.spotLightMatrix,it.spotLightMap.value=ue.state.spotLightMap,it.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=U.state.lightProbeGridArray.length>0,ce.currentProgram=pt,ce.uniformsList=null,pt}function oa(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=Mu.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function la(A,Q){const fe=W.get(A);fe.outputColorSpace=Q.outputColorSpace,fe.batching=Q.batching,fe.batchingColor=Q.batchingColor,fe.instancing=Q.instancing,fe.instancingColor=Q.instancingColor,fe.instancingMorph=Q.instancingMorph,fe.skinning=Q.skinning,fe.morphTargets=Q.morphTargets,fe.morphNormals=Q.morphNormals,fe.morphColors=Q.morphColors,fe.morphTargetsCount=Q.morphTargetsCount,fe.numClippingPlanes=Q.numClippingPlanes,fe.numIntersection=Q.numClipIntersection,fe.vertexAlphas=Q.vertexAlphas,fe.vertexTangents=Q.vertexTangents,fe.toneMapping=Q.toneMapping}function Cs(A,Q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(Q.matrixWorld);for(let fe=0,ce=A.length;fe<ce;fe++){const ue=A[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(w))return ue}return null}function Ga(A,Q,fe,ce,ue){Q.isScene!==!0&&(Q=nn),J.resetTextureUnits();const Ve=Q.fog,We=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Q.environment:null,Fe=re===null?Y.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ct.workingColorSpace,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Ze=_e.get(ce.envMap||We,Qe),st=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pt=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),it=!!fe.morphAttributes.position,wt=!!fe.morphAttributes.normal,rn=!!fe.morphAttributes.color;let Jt=ia;ce.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Jt=Y.toneMapping);const Ft=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0,Xe=W.get(ce),Gn=U.state.lights;if(He===!0&&(tt===!0||A!==be)){const It=A===be&&ce.id===Se;Ye.setState(ce,A,It)}let yt=!1;ce.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gn.state.version||Xe.outputColorSpace!==Fe||ue.isBatchedMesh&&Xe.batching===!1||!ue.isBatchedMesh&&Xe.batching===!0||ue.isBatchedMesh&&Xe.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&Xe.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&Xe.instancing===!1||!ue.isInstancedMesh&&Xe.instancing===!0||ue.isSkinnedMesh&&Xe.skinning===!1||!ue.isSkinnedMesh&&Xe.skinning===!0||ue.isInstancedMesh&&Xe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Xe.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Xe.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Xe.instancingMorph===!1&&ue.morphTexture!==null||Xe.envMap!==Ze||ce.fog===!0&&Xe.fog!==Ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ye.numPlanes||Xe.numIntersection!==Ye.numIntersection)||Xe.vertexAlphas!==st||Xe.vertexTangents!==pt||Xe.morphTargets!==it||Xe.morphNormals!==wt||Xe.morphColors!==rn||Xe.toneMapping!==Jt||Xe.morphTargetsCount!==Ht||!!Xe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Xe.__version=ce.version);let bn=Xe.currentProgram;yt===!0&&(bn=Ha(ce,Q,ue),Z&&ce.isNodeMaterial&&Z.onUpdateProgram(ce,bn,Xe));let ci=!1,Oi=!1,ui=!1;const Gt=bn.getUniforms(),on=Xe.uniforms;if(v.useProgram(bn.program)&&(ci=!0,Oi=!0,ui=!0),ce.id!==Se&&(Se=ce.id,Oi=!0),Xe.needsLights){const It=Cs(U.state.lightProbeGridArray,ue);Xe.lightProbeGrid!==It&&(Xe.lightProbeGrid=It,Oi=!0)}if(ci||be!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(K,"projectionMatrix",A.projectionMatrix),Gt.setValue(K,"viewMatrix",A.matrixWorldInverse);const Yi=Gt.map.cameraPosition;Yi!==void 0&&Yi.setValue(K,Lt.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&Gt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Gt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,Oi=!0,ui=!0)}if(Xe.needsLights&&(Gn.state.directionalShadowMap.length>0&&Gt.setValue(K,"directionalShadowMap",Gn.state.directionalShadowMap,J),Gn.state.spotShadowMap.length>0&&Gt.setValue(K,"spotShadowMap",Gn.state.spotShadowMap,J),Gn.state.pointShadowMap.length>0&&Gt.setValue(K,"pointShadowMap",Gn.state.pointShadowMap,J)),ue.isSkinnedMesh){Gt.setOptional(K,ue,"bindMatrix"),Gt.setOptional(K,ue,"bindMatrixInverse");const It=ue.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Gt.setValue(K,"boneTexture",It.boneTexture,J))}ue.isBatchedMesh&&(Gt.setOptional(K,ue,"batchingTexture"),Gt.setValue(K,"batchingTexture",ue._matricesTexture,J),Gt.setOptional(K,ue,"batchingIdTexture"),Gt.setValue(K,"batchingIdTexture",ue._indirectTexture,J),Gt.setOptional(K,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Gt.setValue(K,"batchingColorTexture",ue._colorsTexture,J));const Pi=fe.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&X.update(ue,fe,bn),(Oi||Xe.receiveShadow!==ue.receiveShadow)&&(Xe.receiveShadow=ue.receiveShadow,Gt.setValue(K,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Q.environment!==null&&(on.envMapIntensity.value=Q.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=pR()),Oi){if(Gt.setValue(K,"toneMappingExposure",Y.toneMappingExposure),Xe.needsLights&&_n(on,ui),Ve&&ce.fog===!0&&Ne.refreshFogUniforms(on,Ve),Ne.refreshMaterialUniforms(on,ce,me,Re,U.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const It=Xe.lightProbeGrid;on.probesSH.value=It.texture,on.probesMin.value.copy(It.boundingBox.min),on.probesMax.value.copy(It.boundingBox.max),on.probesResolution.value.copy(It.resolution)}Mu.upload(K,oa(Xe),on,J)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Mu.upload(K,oa(Xe),on,J),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Gt.setValue(K,"center",ue.center),Gt.setValue(K,"modelViewMatrix",ue.modelViewMatrix),Gt.setValue(K,"normalMatrix",ue.normalMatrix),Gt.setValue(K,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const It=ce.uniformsGroups;for(let Yi=0,Va=It.length;Yi<Va;Yi++){const ws=It[Yi];we.update(ws,bn),we.bind(ws,bn)}}return bn}function _n(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function Ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(A,Q,fe){const ce=W.get(A);ce.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=Q,W.get(A.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const fe=W.get(A);fe.__webglFramebuffer=Q,fe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(A,Q=0,fe=0){re=A,I=Q,k=fe;let ce=null,ue=!1,Ve=!1;if(A){const Fe=W.get(A);if(Fe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(K.FRAMEBUFFER,Fe.__webglFramebuffer),L.copy(A.viewport),j.copy(A.scissor),Ce=A.scissorTest,v.viewport(L),v.scissor(j),v.setScissorTest(Ce),Se=-1;return}else if(Fe.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Fe.__hasExternalTextures)J.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(Fe.__boundDepthTexture!==st){if(st!==null&&W.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ve=!0);const Ze=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?ce=Ze[Q][fe]:ce=Ze[Q],ue=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?ce=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ce=Ze[fe]:ce=Ze,L.copy(A.viewport),j.copy(A.scissor),Ce=A.scissorTest}else L.copy(je).multiplyScalar(me).floor(),j.copy(Ut).multiplyScalar(me).floor(),Ce=ee;if(fe!==0&&(ce=pe),v.bindFramebuffer(K.FRAMEBUFFER,ce)&&v.drawBuffers(A,ce),v.viewport(L),v.scissor(j),v.setScissorTest(Ce),ue){const Fe=W.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,fe)}else if(Ve){const Fe=Q;for(let Qe=0;Qe<A.textures.length;Qe++){const Ze=W.get(A.textures[Qe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Qe,Ze.__webglTexture,fe,Fe)}}else if(A!==null&&fe!==0){const Fe=W.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Fe.__webglTexture,fe)}Se=-1},this.readRenderTargetPixels=function(A,Q,fe,ce,ue,Ve,We,Fe=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe){v.bindFramebuffer(K.FRAMEBUFFER,Qe);try{const Ze=A.textures[Fe],st=Ze.format,pt=Ze.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe),!R.textureFormatReadable(st)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(pt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-ce&&fe>=0&&fe<=A.height-ue&&K.readPixels(Q,fe,ce,ue,ze.convert(st),ze.convert(pt),Ve)}finally{const Ze=re!==null?W.get(re).__webglFramebuffer:null;v.bindFramebuffer(K.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,Q,fe,ce,ue,Ve,We,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe)if(Q>=0&&Q<=A.width-ce&&fe>=0&&fe<=A.height-ue){v.bindFramebuffer(K.FRAMEBUFFER,Qe);const Ze=A.textures[Fe],st=Ze.format,pt=Ze.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe),!R.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,it),K.bufferData(K.PIXEL_PACK_BUFFER,Ve.byteLength,K.STREAM_READ),K.readPixels(Q,fe,ce,ue,ze.convert(st),ze.convert(pt),0);const wt=re!==null?W.get(re).__webglFramebuffer:null;v.bindFramebuffer(K.FRAMEBUFFER,wt);const rn=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await pE(K,rn,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,it),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ve),K.deleteBuffer(it),K.deleteSync(rn),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(A.image.width*ce),Ve=Math.floor(A.image.height*ce),We=Q!==null?Q.x:0,Fe=Q!==null?Q.y:0;J.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,fe,0,0,We,Fe,ue,Ve),v.unbindTexture()},this.copyTextureToTexture=function(A,Q,fe=null,ce=null,ue=0,Ve=0){let We,Fe,Qe,Ze,st,pt,it,wt,rn;const Jt=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(fe!==null)We=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,Ze=fe.min.x,st=fe.min.y,pt=fe.isBox3?fe.min.z:0;else{const on=Math.pow(2,-ue);We=Math.floor(Jt.width*on),Fe=Math.floor(Jt.height*on),A.isDataArrayTexture?Qe=Jt.depth:A.isData3DTexture?Qe=Math.floor(Jt.depth*on):Qe=1,Ze=0,st=0,pt=0}ce!==null?(it=ce.x,wt=ce.y,rn=ce.z):(it=0,wt=0,rn=0);const Ft=ze.convert(Q.format),Ht=ze.convert(Q.type);let Xe;Q.isData3DTexture?(J.setTexture3D(Q,0),Xe=K.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(J.setTexture2DArray(Q,0),Xe=K.TEXTURE_2D_ARRAY):(J.setTexture2D(Q,0),Xe=K.TEXTURE_2D),v.activeTexture(K.TEXTURE0),v.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Q.flipY),v.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),v.pixelStorei(K.UNPACK_ALIGNMENT,Q.unpackAlignment);const Gn=v.getParameter(K.UNPACK_ROW_LENGTH),yt=v.getParameter(K.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(K.UNPACK_SKIP_PIXELS),ci=v.getParameter(K.UNPACK_SKIP_ROWS),Oi=v.getParameter(K.UNPACK_SKIP_IMAGES);v.pixelStorei(K.UNPACK_ROW_LENGTH,Jt.width),v.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Jt.height),v.pixelStorei(K.UNPACK_SKIP_PIXELS,Ze),v.pixelStorei(K.UNPACK_SKIP_ROWS,st),v.pixelStorei(K.UNPACK_SKIP_IMAGES,pt);const ui=A.isDataArrayTexture||A.isData3DTexture,Gt=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const on=W.get(A),Pi=W.get(Q),It=W.get(on.__renderTarget),Yi=W.get(Pi.__renderTarget);v.bindFramebuffer(K.READ_FRAMEBUFFER,It.__webglFramebuffer),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Va=0;Va<Qe;Va++)ui&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,W.get(A).__webglTexture,ue,pt+Va),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,W.get(Q).__webglTexture,Ve,rn+Va)),K.blitFramebuffer(Ze,st,We,Fe,it,wt,We,Fe,K.DEPTH_BUFFER_BIT,K.NEAREST);v.bindFramebuffer(K.READ_FRAMEBUFFER,null),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ue!==0||A.isRenderTargetTexture||W.has(A)){const on=W.get(A),Pi=W.get(Q);v.bindFramebuffer(K.READ_FRAMEBUFFER,de),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,ie);for(let It=0;It<Qe;It++)ui?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,on.__webglTexture,ue,pt+It):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,on.__webglTexture,ue),Gt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Pi.__webglTexture,Ve,rn+It):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pi.__webglTexture,Ve),ue!==0?K.blitFramebuffer(Ze,st,We,Fe,it,wt,We,Fe,K.COLOR_BUFFER_BIT,K.NEAREST):Gt?K.copyTexSubImage3D(Xe,Ve,it,wt,rn+It,Ze,st,We,Fe):K.copyTexSubImage2D(Xe,Ve,it,wt,Ze,st,We,Fe);v.bindFramebuffer(K.READ_FRAMEBUFFER,null),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(Xe,Ve,it,wt,rn,We,Fe,Qe,Ft,Ht,Jt.data):Q.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,Ve,it,wt,rn,We,Fe,Qe,Ft,Jt.data):K.texSubImage3D(Xe,Ve,it,wt,rn,We,Fe,Qe,Ft,Ht,Jt):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ve,it,wt,We,Fe,Ft,Ht,Jt.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ve,it,wt,Jt.width,Jt.height,Ft,Jt.data):K.texSubImage2D(K.TEXTURE_2D,Ve,it,wt,We,Fe,Ft,Ht,Jt);v.pixelStorei(K.UNPACK_ROW_LENGTH,Gn),v.pixelStorei(K.UNPACK_IMAGE_HEIGHT,yt),v.pixelStorei(K.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(K.UNPACK_SKIP_ROWS,ci),v.pixelStorei(K.UNPACK_SKIP_IMAGES,Oi),Ve===0&&Q.generateMipmaps&&K.generateMipmap(Xe),v.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){I=0,k=0,re=null,v.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const ty={type:"change"},jp={type:"start"},Xy={type:"end"},mu=new qp,ny=new vs,gR=Math.cos(70*vp.DEG2RAD),An=new $,ii=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bd=1e-6;class _R extends yb{constructor(e,i=null){super(e,i),this.state=Kt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ms,this._lastTargetPosition=new $,this._quat=new Ms().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wv,this._sphericalDelta=new wv,this._scale=1,this._panOffset=new $,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new $,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yR.bind(this),this._onPointerDown=vR.bind(this),this._onPointerUp=xR.bind(this),this._onContextMenu=RR.bind(this),this._onMouseWheel=ER.bind(this),this._onKeyDown=bR.bind(this),this._onTouchStart=TR.bind(this),this._onTouchMove=AR.bind(this),this._onMouseDown=SR.bind(this),this._onMouseMove=MR.bind(this),this._interceptControlDown=CR.bind(this),this._interceptControlUp=wR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ty),this.update(),this.state=Kt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;An.copy(i).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ii:s>Math.PI&&(s-=ii),l<-Math.PI?l+=ii:l>Math.PI&&(l-=ii),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),i.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=An.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(mu.origin.copy(this.object.position),mu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mu.direction))<gR?this.object.lookAt(this.target):(ny.setFromNormalAndCoplanarPoint(this.object.up,this.target),mu.intersectPlane(ny,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>bd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bd||this._lastTargetPosition.distanceToSquared(this.target)>bd?(this.dispatchEvent(ty),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){An.setFromMatrixColumn(i,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,i){this.screenSpacePanning===!0?An.setFromMatrixColumn(i,1):(An.setFromMatrixColumn(i,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;An.copy(l).sub(this.target);let c=An.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/i.clientHeight),this._rotateUp(ii*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/i.clientHeight),this._rotateUp(ii*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ot,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function vR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function xR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xy),this.state=Kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function SR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Kt.DOLLY;break;case ao.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Kt.ROTATE}break;case ao.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(jp)}function MR(r){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ER(r){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(r.preventDefault(),this.dispatchEvent(jp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xy))}function bR(r){this.enabled!==!1&&this._handleKeyDown(r)}function TR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case no.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Kt.TOUCH_ROTATE;break;case no.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case no.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Kt.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(jp)}function AR(r){switch(this._trackPointer(r),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Kt.NONE}}function RR(r){this.enabled!==!1&&r.preventDefault()}function CR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _l=new $;function Ni(r,e,i,s,l,c){const h=2*Math.PI*l/4,p=Math.max(c-2*l,0),m=Math.PI/4;_l.copy(e),_l[s]=0,_l.normalize();const d=.5*h/(h+p),_=1-_l.angleTo(r)/m;return Math.sign(_l[i])===1?_*d:p/(h+p)+d+d*(1-_)}class $p extends bs{constructor(e=1,i=1,s=1,l=2,c=.1){const h=l*2+1;if(c=Math.min(e/2,i/2,s/2,c),super(1,1,1,h,h,h),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:s,segments:l,radius:c},h===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new $,d=new $,_=new $(e,i,s).divideScalar(2).subScalar(c),x=this.attributes.position.array,g=this.attributes.normal.array,M=this.attributes.uv.array,T=x.length/6,N=new $,E=.5/h;for(let S=0,P=0;S<x.length;S+=3,P+=2)switch(m.fromArray(x,S),d.copy(m),d.x-=Math.sign(d.x)*E,d.y-=Math.sign(d.y)*E,d.z-=Math.sign(d.z)*E,d.normalize(),x[S+0]=_.x*Math.sign(m.x)+d.x*c,x[S+1]=_.y*Math.sign(m.y)+d.y*c,x[S+2]=_.z*Math.sign(m.z)+d.z*c,g[S+0]=d.x,g[S+1]=d.y,g[S+2]=d.z,Math.floor(S/T)){case 0:N.set(1,0,0),M[P+0]=Ni(N,d,"z","y",c,s),M[P+1]=1-Ni(N,d,"y","z",c,i);break;case 1:N.set(-1,0,0),M[P+0]=1-Ni(N,d,"z","y",c,s),M[P+1]=1-Ni(N,d,"y","z",c,i);break;case 2:N.set(0,1,0),M[P+0]=1-Ni(N,d,"x","z",c,e),M[P+1]=Ni(N,d,"z","x",c,s);break;case 3:N.set(0,-1,0),M[P+0]=1-Ni(N,d,"x","z",c,e),M[P+1]=1-Ni(N,d,"z","x",c,s);break;case 4:N.set(0,0,1),M[P+0]=1-Ni(N,d,"x","y",c,e),M[P+1]=1-Ni(N,d,"y","x",c,i);break;case 5:N.set(0,0,-1),M[P+0]=Ni(N,d,"x","y",c,e),M[P+1]=1-Ni(N,d,"y","x",c,i);break}}static fromJSON(e){return new $p(e.width,e.height,e.depth,e.segments,e.radius)}}const wl="city-tycoon-v1",Mp="city-tycoon-manual-v1",Wy=720*60*60*1e3;function Pu(r){return!!((r==null?void 0:r.version)===1&&Array.isArray(r.players)&&r.players.length>=2&&r.players.length<=4&&r.players.every((e,i)=>e.id===i&&typeof e.name=="string"&&Number.isFinite(e.cash)&&e.cash>=0&&Number.isInteger(e.pos)&&e.pos>=0&&e.pos<32&&[0,1].includes(e.jail)&&typeof e.bankrupt=="boolean"&&(e.diceCount===void 0||[1,2].includes(e.diceCount)))&&r.lots&&typeof r.lots=="object"&&!Array.isArray(r.lots)&&Object.entries(r.lots).every(([e,i])=>Number.isInteger(+e)&&+e>0&&+e<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+e)&&i&&Number.isInteger(i.owner)&&i.owner>=0&&i.owner<r.players.length&&Number.isInteger(i.level)&&i.level>=0&&i.level<=5)&&Number.isInteger(r.turn)&&r.turn>=0&&r.turn<r.players.length&&Number.isInteger(r.round)&&r.round>=1&&(r.maxRounds===void 0||r.maxRounds===null||Number.isInteger(r.maxRounds)&&r.maxRounds>=1)&&(r.maxRounds===void 0||r.maxRounds===null||r.round<=r.maxRounds+1)&&(r.inflationRate===void 0||Number.isInteger(r.inflationRate)&&r.inflationRate>=0&&r.inflationRate<=10)&&(r.priceIndex===void 0||Number.isFinite(r.priceIndex)&&r.priceIndex>=1&&r.priceIndex<=10)&&["ready","moving","decision","end","finished"].includes(r.stage)&&Array.isArray(r.dice)&&[1,2].includes(r.dice.length)&&r.dice.every(e=>Number.isInteger(e)&&e>=1&&e<=6)&&Number.isInteger(r.remaining)&&r.remaining>=0&&r.remaining<=12&&(r.stage!=="moving"||r.remaining>0&&Number.isInteger(r.eventIndex)&&r.eventIndex>=0&&r.eventIndex<8)&&Array.isArray(r.log)&&r.log.every(e=>e&&typeof e.text=="string"&&typeof e.kind=="string")&&typeof r.notice=="string"&&(r.event===null||r.event&&typeof r.event.title=="string"&&(r.event.amount===void 0||Number.isFinite(r.event.amount)))&&(r.stage!=="finished"||Number.isInteger(r.winner)&&r.winner>=0&&r.winner<r.players.length)&&(r.bank===void 0||Number.isInteger(r.bank.houses)&&r.bank.houses>=0&&Number.isInteger(r.bank.hotels)&&r.bank.hotels>=0)&&(r.buildAvailable===void 0||typeof r.buildAvailable=="boolean")&&(r.buildUsed===void 0||typeof r.buildUsed=="boolean"))}const Ep=(r,e)=>r&&Number.isFinite(r.savedAt)&&r.savedAt<=e&&e-r.savedAt<Wy&&Pu(r.game);function Dl(r=localStorage,e=Date.now()){const i=r.getItem(Mp),s=i?JSON.parse(i):[];if(!Array.isArray(s))throw new Error("存檔清單格式損壞。");const l=s.filter(h=>Ep(h,e)&&typeof h.id=="string"&&typeof h.name=="string").sort((h,p)=>p.savedAt-h.savedAt).slice(0,10);JSON.stringify(l)!==i&&r.setItem(Mp,JSON.stringify(l));const c=r.getItem(wl);if(c){let h;try{h=JSON.parse(c)}catch{}(!h||h.savedAt!==void 0&&!Ep(h,e))&&r.removeItem(wl)}return l}function DR(r,e,i=!1,s=localStorage,l=Date.now()){if(!Pu(r))throw new Error("遊戲狀態無法儲存。");const c=Dl(s,l);if(c.length>=10&&!i)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const p=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${r.round}`,savedAt:l,game:structuredClone(r)},...c].slice(0,10);return s.setItem(Mp,JSON.stringify(p)),p}function NR(r,e=localStorage,i=Date.now()){const s=Dl(e,i).find(l=>l.id===r);if(!s)throw new Error("存檔已過期或不存在。");return structuredClone(s.game)}function bp(r,e=localStorage,i=Date.now()){e.setItem(wl,JSON.stringify({savedAt:i,game:r}))}function UR(r=localStorage,e=Date.now()){const i=r.getItem(wl);if(!i)return null;const s=JSON.parse(i);return Pu(s)?(bp(s,r,e),s):Ep(s,e)?s.game:(r.removeItem(wl),null)}const Td={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]}};function La(r,{category:e,summary:i,participants:s}){const l=Td[e];if(!l||!(s!=null&&s.length))return;r.emotionSequence=(r.emotionSequence||0)+1;const c=r.emotionSequence,h=s.map(({playerId:p,amountDelta:m,category:d})=>{const _=Td[d]||l;return{playerId:p,mood:_.mood,moodLabel:_.label,emoji:_.emoji,amountDelta:m,message:_.messages[(c+p)%_.messages.length]}});r.emotionEvents||(r.emotionEvents=[]),r.emotionEvents.push({id:c,category:e,summary:i,priority:Math.max(l.priority,...s.map(({category:p})=>{var m;return((m=Td[p])==null?void 0:m.priority)||0})),players:h})}const Fn=["#61ac78","#62a6da","#e7b942","#de809a"],LR=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],OR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],si=OR.map((r,e)=>{const i={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},s=Math.floor(e/4);return{id:e,name:r,type:i[e]||"property",group:s,color:LR[s],price:1e3+s*300+e%4*100}}),Tt=r=>"$"+r.toLocaleString("en-US"),em=1,Yy=5,PR=10,qy=10,Kn=(r,e,i=Math.round)=>i(e*((r==null?void 0:r.priceIndex)??1)),io=(r,e)=>Kn(r,e.price),po=(r,e)=>Kn(e,r.price*.6),IR=40,Zy=r=>r===null?null:Number.isInteger(Number(r))&&Number(r)>=1?Number(r):IR,tm=r=>Math.max(0,Math.min(PR,Number.isFinite(Number(r))?Math.round(Number(r)):em)),zR=r=>Math.min(Yy,tm(r)),Tp={houses:32,hotels:12},BR=r=>{let e=0,i=0;for(const s of Object.values(r.lots||{}))s.level===5?i++:e+=Math.max(0,Math.min(4,s.level||0));return{houses:Math.max(0,Tp.houses-e),hotels:Math.max(0,Tp.hotels-i)}},ar=r=>r.bank&&Number.isInteger(r.bank.houses)&&Number.isInteger(r.bank.hotels)?r.bank:BR(r),Ky=r=>({...r,maxRounds:Zy(r.maxRounds),inflationRate:tm(r.inflationRate??0),priceIndex:Math.max(1,Math.min(qy,Number.isFinite(r.priceIndex)?r.priceIndex:1)),players:r.players.map((e,i)=>({...e,diceCount:e.diceCount??2,color:e.color||Fn[i],human:e.human===void 0?i===0:!!e.human})),bank:{...ar(r)},buildAvailable:r.buildAvailable===!0,buildUsed:r.buildUsed===!0,emotionEvents:[],emotionSequence:Number.isInteger(r.emotionSequence)?r.emotionSequence:0}),FR=[["你",Fn[0],!0],["艾米",Fn[1],!1],["小傑",Fn[2],!1],["喵喵",Fn[3],!1]];function Ap(r={}){const e=Math.min(4,Math.max(2,Number(r.count)||4)),i=FR.slice(0,e).map(([l,c,h],p)=>{var d;const m=((d=r.players)==null?void 0:d[p])||{};return{id:p,diceCount:2,name:typeof m.name=="string"&&m.name.trim()?m.name.trim():l,color:m.color||c,human:m.human===void 0?h:!!m.human,cash:15e3,pos:0,jail:0,bankrupt:!1}}),s=zR(r.inflationRate??em);return{version:1,players:i,lots:{},bank:{...Tp},turn:0,round:1,maxRounds:Zy(r.maxRounds),inflationRate:s,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${s}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const dn=(r,e,i="info")=>{r.notice=e,r.log.unshift({text:e,kind:i}),r.log=r.log.slice(0,40)},js=(r,e)=>si.filter(i=>{var s;return((s=r.lots[i.id])==null?void 0:s.owner)===e}),HR=(r,e,i)=>si.filter(s=>s.type==="property"&&s.group===e.group).every(s=>{var l;return((l=r.lots[s.id])==null?void 0:l.owner)===i}),Rp=(r,e)=>{let i=r.lots[e.id];return i?Kn(r,Math.round(e.price*.18)*(i.level?[1,3,6,10,15,22][i.level]:HR(r,e,i.owner)?2:1)):0},lo=(r,e)=>r.players[e].cash+js(r,e).reduce((i,s)=>i+Kn(r,s.price+(r.lots[s.id].level||0)*Math.round(s.price*.6)),0),Cp=(r,e,i=r.turn)=>{const s=si[e],l=r.lots[e],c=ar(r);return!s||s.type!=="property"||!l||l.owner!==i||r.turn!==i||r.stage!=="end"||r.selected!==e||!r.buildAvailable||r.buildUsed||l.level>=5||r.players[i].cash<po(s,r)?!1:l.level<4?c.houses>0:c.hotels>0};function Qy(r,e){const i=r.bank||ar(r);e.level===5?i.hotels++:i.houses+=Math.max(0,Math.min(4,e.level||0)),r.bank=i}function Jy(r){const e=r.players.filter(i=>!i.bankrupt);e.length===1&&(r.winner=e[0].id,r.stage="finished",dn(r,`${e[0].name}成為城市大亨！`))}function Ad(r,e,i,s=null,l="tax"){let c=r.players[e],h=0;for(const m of js(r,e).sort((d,_)=>d.price-_.price)){if(c.cash>=i)break;const d=Kn(r,m.price+r.lots[m.id].level*Math.round(m.price*.6),_=>Math.floor(_*.5));c.cash+=d,h+=d,Qy(r,r.lots[m.id]),delete r.lots[m.id],dn(r,`${c.name}變賣${m.name}，回收 ${Tt(d)}。`,"sell")}h>0&&La(r,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${Tt(h)}。`,participants:[{playerId:e,amountDelta:h}]});const p=Math.min(c.cash,i);if(c.cash-=p,s!==null&&(r.players[s].cash+=p),p>0)if(s!==null){const m=r.players[s];La(r,{category:"rentPaid",summary:`${c.name}支付 ${Tt(p)} 給${m.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-p},{playerId:s,category:"rentReceived",amountDelta:p}]})}else La(r,{category:l==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${Tt(p)}。`,participants:[{playerId:e,amountDelta:-p}]});if(p<i){c.bankrupt=!0;const m=i-p;dn(r,`${c.name}資金不足，宣告破產。`,"bankrupt"),La(r,{category:"bankruptcy",summary:`${c.name}無法支付 ${Tt(m)}，宣告破產。`,participants:[{playerId:e,amountDelta:-m}]}),Jy(r)}}function GR(r,e){const i=r.players[r.turn],s=si[i.pos];if(r.selected=s.id,r.stage="end",r.buildAvailable=!1,r.buildUsed=!1,s.type==="property"){const l=r.lots[s.id];if(l)if(l.owner!==i.id){const c=Rp(r,s);dn(r,`${i.name}在${s.name}支付 ${Tt(c)} 租金給${r.players[l.owner].name}。`,"rent"),Ad(r,i.id,c,l.owner,"rent")}else{r.buildAvailable=!0;const c=l.level===5?"已有旅館。":l.level===4?ar(r).hotels?"可以升級為旅館。":"銀行旅館已用完。":ar(r).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";dn(r,`${i.name}回到自己的${s.name}，${c}`)}else{const c=io(r,s);r.stage=i.cash>=c?"decision":"end",dn(r,`${i.name}抵達${s.name}，${i.cash>=c?"可以購買這塊地產。":"現金不足以購買。"}`)}}else if(s.type==="tax"){const l=Kn(r,s.id===6?1200:1800);dn(r,`${i.name}支付${s.name} ${Tt(l)}。`,"tax"),Ad(r,i.id,l,null,"tax")}else if(s.type==="gojail")i.pos=8,i.jail=1,dn(r,`${i.name}前往監獄，下次回合暫停一次。`,"jail");else if(s.type==="chance"||s.type==="fund"){const l=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[c,h,p,m]=l[Math.abs(e||0)%l.length];if(m){const d=r.inflationRate;r.inflationRate=tm(d+m);const _=r.inflationRate-d,x=_===0?`通膨率維持 ${r.inflationRate}%（已達上限或下限）`:`通膨率${_>0?"提高":"降低"}至 ${r.inflationRate}%`;r.event={title:c,body:h,amount:0,kind:"inflation",inflationDelta:_,inflationRate:r.inflationRate},dn(r,`${i.name}抽到「${c}」：${x}，新通膨率於下一輪影響物價。`,"inflation")}else{const d=Kn(r,p);r.event={title:c,body:h,amount:d},dn(r,`${i.name}抽到「${c}」：${d>0?"獲得":"支付"} ${Tt(Math.abs(d))}。`,"chance"),d>0?(i.cash+=d,La(r,{category:"windfall",summary:`${i.name}獲得 ${Tt(d)}。`,participants:[{playerId:i.id,amountDelta:d}]})):Ad(r,i.id,-d,null,"chance")}}else dn(r,s.type==="start"?`${i.name}抵達起點。`:s.type==="park"?`${i.name}在城市公園休息，享受片刻悠閒。`:`${i.name}只是探訪監獄，自由通行。`);Jy(r)}function VR(r,e){var l;if(e.type==="NEW")return Ap(e.config);if(e.type==="LOAD")return Pu(e.game)?Ky(structuredClone(e.game)):r;const i=structuredClone(r),s=i.players[i.turn];switch(i.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(i.stage!=="ready"||!s.human||s.bankrupt||s.jail||![1,2].includes(e.count))return r;s.diceCount=e.count;break;case"ROLL":if(i.stage!=="ready"||s.bankrupt)return r;if(s.jail){s.jail--,i.stage="end",dn(i,`${s.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(s.diceCount??2)||!e.dice.every(c=>Number.isInteger(c)&&c>=1&&c<=6))return r;i.dice=[...e.dice],i.remaining=e.dice.reduce((c,h)=>c+h,0),i.event=null,i.stage="moving",i.eventIndex=e.eventIndex,dn(i,`${s.name}擲出 ${e.dice.join(" + ")}，前進 ${i.remaining} 格。`,"dice");break;case"STEP":if(i.stage!=="moving")return r;if(s.pos=(s.pos+1)%32,s.pos===0){const c=Kn(i,2e3);s.cash+=c,dn(i,`${s.name}通過起點，領取 ${Tt(c)}。`,"salary"),La(i,{category:"salary",summary:`${s.name}經過起點，獲得 ${Tt(c)}。`,participants:[{playerId:s.id,amountDelta:c}]})}i.remaining--,i.remaining===0&&GR(i,i.eventIndex);break;case"BUY":{if(i.stage!=="decision")return r;const c=si[s.pos],h=io(i,c);if(i.lots[c.id]||s.cash<h)return r;s.cash-=h,i.lots[c.id]={owner:s.id,level:0},i.stage="end",dn(i,`${s.name}購買了${c.name}，支付 ${Tt(h)}。`,"buy"),La(i,{category:"purchase",summary:`${s.name}購買${c.name}，支付 ${Tt(h)}。`,participants:[{playerId:s.id,amountDelta:-h}]});break}case"SKIP":if(i.stage!=="decision")return r;i.stage="end",dn(i,`${s.name}暫不購買${si[s.pos].name}。`);break;case"BUILD":{if(!Cp(i,e.id))return r;const c=si[e.id],h=i.lots[e.id],p=po(c,i);i.bank=i.bank||ar(i),s.cash-=p,h.level<4?(i.bank.houses--,h.level++,dn(i,`${s.name}在${c.name}加蓋第 ${h.level} 間房屋，支付 ${Tt(p)}。`,"build")):(i.bank.houses+=4,i.bank.hotels--,h.level=5,dn(i,`${s.name}將${c.name}的 4 間房屋升級為旅館，支付 ${Tt(p)}。`,"build")),La(i,{category:"construction",summary:`${s.name}支付 ${Tt(p)} 建設地產。`,participants:[{playerId:s.id,amountDelta:-p}]}),i.buildAvailable=!1,i.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(i.stage)||((l=i.lots[e.id])==null?void 0:l.owner)!==s.id)return r;const c=si[e.id],h=i.lots[e.id],p=Kn(i,c.price+h.level*Math.round(c.price*.6),m=>Math.floor(m*.5));Qy(i,h),s.cash+=p,delete i.lots[e.id],i.buildAvailable=!1,dn(i,`${s.name}變賣${c.name}，回收 ${Tt(p)}。`,"sell"),La(i,{category:"sale",summary:`${s.name}變賣${c.name}，回收 ${Tt(p)}。`,participants:[{playerId:s.id,amountDelta:p}]});break}case"NEXT":if(i.stage!=="end")return r;{let c=i.turn;do if(c=(c+1)%i.players.length,c===0){i.round++;const h=i.priceIndex;i.priceIndex=Math.min(qy,i.priceIndex*(1+i.inflationRate/100)),i.priceIndex>h&&dn(i,`新的一輪開始，物價指數升至 ${i.priceIndex.toFixed(2)}×。`,"inflation")}while(i.players[c].bankrupt);i.turn=c,i.event=null,i.stage="ready",i.selected=null,i.buildAvailable=!1,i.buildUsed=!1,i.maxRounds!==null&&i.round>i.maxRounds?(i.winner=i.players.filter(h=>!h.bankrupt).sort((h,p)=>lo(i,p.id)-lo(i,h.id))[0].id,i.stage="finished",dn(i,`${i.maxRounds} 回合結束！${i.players[i.winner].name}以最高總資產獲勝。`)):dn(i,`輪到${i.players[c].name}，準備擲骰子。`);break}default:return r}return i}function kR(){try{const r=UR();return r?Ky(r):Ap()}catch{return Ap()}}function gu(r){return r<=8?[-8+r*2,8]:r<=16?[8,8-(r-8)*2]:r<=24?[8-(r-16)*2,-8]:[-8,-8+(r-24)*2]}const XR=at.forwardRef(function({game:e,onSelect:i,onError:s,emotionAnchorRefs:l,emotionMoods:c,children:h},p){const m=at.useRef(),d=at.useRef(),_=at.useRef(e),x=at.useRef(i),g=at.useRef({});return _.current=e,x.current=i,g.current=c||{},at.useImperativeHandle(p,()=>({reset(){var M;(M=d.current)==null||M.reset()},zoom(M){const T=d.current;T&&(T.camera.position.sub(T.controls.target).multiplyScalar(M).clampLength(13,80).add(T.controls.target),T.controls.update())},rotate(){d.current&&(d.current.controls.autoRotate=!d.current.controls.autoRotate)},top(){const M=d.current;M&&(M.camera.position.set(0,29,.01),M.controls.update())}}),[]),at.useEffect(()=>{let M=!1,T=()=>{};return(async()=>{var Ot;try{await Promise.race([((Ot=document.fonts)==null?void 0:Ot.ready)||Promise.resolve(),new Promise(ve=>setTimeout(ve,2e3))])}catch{}if(M)return;const E='"Noto Sans TC", "Microsoft JhengHei", sans-serif',S=m.current;let P;try{P=new mR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{s==null||s("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.shadowMap.enabled=!0,P.shadowMap.type=xl,P.outputColorSpace=ai,P.toneMapping=Lp,P.toneMappingExposure=.9,S.appendChild(P.domElement),P.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const z=new WE;z.background=new Mt("#eaf0e5"),z.fog=new Wp("#eaf0e5",48,90);const w=new Ui(39,1,.1,120),B=new _R(w,P.domElement);B.enableDamping=!0,B.dampingFactor=.07,B.minDistance=13,B.maxDistance=80,B.maxPolarAngle=Math.PI*.485,B.minPolarAngle=.01,B.target.set(0,0,0),B.autoRotateSpeed=.65,B.enablePan=!0;const U=()=>{w.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/w.aspect)),B.target.set(0,0,0),B.autoRotate=!1,B.update()};U(),d.current={camera:w,controls:B,reset:U},z.add(new hb("#fff9e9","#86967e",2.4));const F=new mb("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,z.add(F);const b=new Map,O=ve=>(b.has(ve)||b.set(ve,new Mv({color:ve,roughness:.82})),b.get(ve)),Y=new Map,H=(ve,R,v,V,W,J=0,_e=0,ye=0,ne=0)=>{const se=[R,v,V,ne].join(",");Y.has(se)||Y.set(se,ne?new $p(R,v,V,2,ne):new bs(R,v,V));const xe=new En(Y.get(se),O(W));return xe.position.set(J,_e,ye),xe.castShadow=!0,xe.receiveShadow=!0,ve.add(xe),xe},Z=new Qp(1,14,10),pe=(ve,R,v,V,W,J,_e=J,ye=J)=>{const ne=new En(Z,O(R));return ne.position.set(v,V,W),ne.scale.set(J,_e,ye),ne.castShadow=!0,ne.receiveShadow=!0,ve.add(ne),ne},de=(ve,R,v,V,W,J,_e,ye,ne=24)=>{const se=new En(new Uu(R,v,V,ne),O(W));return se.position.set(J,_e,ye),se.castShadow=!0,se.receiveShadow=!0,ve.add(se),se},ie=new En(new tr(200,200),O("#eaf0e5"));ie.rotation.x=-Math.PI/2,ie.position.y=-.67,ie.receiveShadow=!0,z.add(ie),de(z,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),de(z,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),H(z,18.55,.65,18.55,"#405d50",0,-.03,0,.2),H(z,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),H(z,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const I=[];function k(ve,R=512,v=512){const V=document.createElement("canvas");V.width=R,V.height=v;const W=V.getContext("2d");ve(W,R,v);const J=new ib(V);return J.colorSpace=ai,J.minFilter=Nn,J.magFilter=Nn,J.anisotropy=P.capabilities.getMaxAnisotropy(),I.push(J),J}const re={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},Se=[],be=[],L=[],j=[],Ce=new Map;function Ie(ve,R){const v=`${ve}:${R}`;if(!Ce.has(v)){const V=k((W,J,_e)=>{W.clearRect(0,0,J,_e),W.fillStyle=R,W.beginPath(),W.roundRect(8,8,J-16,_e-16,24),W.fill(),W.strokeStyle="#fffaf0",W.lineWidth=8,W.stroke(),W.fillStyle="#fffaf0",W.beginPath(),W.arc(J/2,_e/2,43,0,Math.PI*2),W.fill(),W.fillStyle="#294237",W.textAlign="center",W.textBaseline="middle",W.font="bold 72px Arial",W.fillText(String(ve+1),J/2,_e/2+3)},192,144);Ce.set(v,new wy({map:V,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Ce.get(v)}for(const ve of si){const[R,v]=gu(ve.id),V=new Na;V.position.set(R,.44,v),z.add(V);const W=H(V,1.94,.14,1.94,"#fffaf0",0,0,0,.035);W.userData.tile=ve.id,Se.push(W),be[ve.id]=W;const J=_.current.priceIndex||1,_e=(xe,Ne,Le,De)=>{xe.fillStyle="#fcf9f0",xe.fillRect(0,0,Ne,Le),ve.type==="property"&&(xe.fillStyle=ve.color,xe.fillRect(0,0,Ne,82)),xe.fillStyle="#294237",xe.textAlign="center",xe.font=`bold 76px ${E}`,xe.fillText(ve.name,Ne/2,ve.type==="property"?180:140),ve.type==="property"?(xe.font="60px Arial",xe.fillText(Tt(Math.round(ve.price*De)),Ne/2,290),xe.fillStyle="#8c998e",xe.font="26px sans-serif",xe.fillText("CITY PROPERTY",Ne/2,410)):(xe.font="bold 135px Arial",xe.fillStyle=ve.type==="chance"?"#ba9270":"#648473",xe.fillText(re[ve.type],Ne/2,320),xe.fillStyle="#728375",xe.font=`30px ${E}`,xe.fillText(ve.type==="start"?`+ ${Tt(Math.round(2e3*De))}`:ve.type==="tax"?"城市稅收":ve.type==="park"?"歇一會兒":ve.type==="chance"?"好運降臨":ve.type==="fund"?"城市生活":"JUST VISITING",Ne/2,420))},ye=k((xe,Ne,Le)=>_e(xe,Ne,Le,J));(ve.type==="property"||ve.type==="start")&&j.push(xe=>{const Ne=ye.image.getContext("2d");_e(Ne,ye.image.width,ye.image.height,xe),ye.needsUpdate=!0});const ne=new En(new tr(1.89,1.89),new El({map:ye,toneMapped:!1}));ne.rotation.x=-Math.PI/2,ne.rotation.z=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,ne.position.y=.076,V.add(ne);const se=new Na;se.position.set(R,.58,v),se.rotation.y=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,z.add(se),L[ve.id]=se}for(const ve of[-4.4,4.4]){H(z,.8,.025,13,"#d3d2bb",ve,.525,0),H(z,1.15,.018,13,"#f6f1df",ve,.513,0);for(let R=-6;R<=6;R+=.75)H(z,.035,.008,.29,"#faf6e8",ve,.543,R)}for(const ve of[-3.2,3.2]){H(z,13,.025,.8,"#d3d2bb",0,.525,ve),H(z,13,.018,1.15,"#f6f1df",0,.513,ve);for(let R=-6;R<=6;R+=.75)H(z,.29,.008,.035,"#faf6e8",R,.543,ve)}function Be(ve,R,v=1){const V=new Na;V.position.set(ve,.52,R),V.scale.setScalar(v),z.add(V),de(V,.045,.075,.55,"#94785c",0,.28,0,7),pe(V,"#8db578",0,.83,0,.29,.44,.29),pe(V,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function ae(ve,R,v,V,W,J,_e=!1){const ye=new Na;ye.position.set(ve,.53,R),z.add(ye),H(ye,v+.18,.12,V+.18,"#ede9d5",0,.06,0,.04),H(ye,v,W,V,J,0,W/2+.1,0,.035),H(ye,v+.1,.1,V+.1,"#fff4df",0,W+.12,0,.02);for(let ne=.45;ne<W-.1;ne+=.42){for(let se=-v/2+.22;se<v/2-.08;se+=.32)H(ye,.17,.23,.018,"#6d9097",se,ne,V/2+.01),H(ye,.17,.23,.018,"#6d9097",se,ne,-V/2-.01);for(let se=-V/2+.22;se<V/2-.08;se+=.32)H(ye,.018,.23,.17,"#6d9097",v/2+.01,ne,se);H(ye,v+.025,.045,V+.025,"#ede9d8",0,ne+.17,0)}if(H(ye,.24,.36,.024,"#496d68",0,.28,V/2+.02),_e){const ne=new En(new bl(v*.81,.55,4),O("#c98468"));ne.rotation.y=Math.PI/4,ne.scale.z=V/v,ne.position.y=W+.42,ne.castShadow=!0,ye.add(ne)}else H(ye,v*.7,.08,V*.7,"#a5b7ae",0,W+.21,0),H(ye,.23,.2,.25,"#e9e4d2",v*.18,W+.34,0)}ae(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),ae(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),ae(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),ae(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),ae(5.6,-5,1.1,1.5,2.3,"#aac5bc"),ae(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),ae(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),ae(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),ae(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),ae(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),ae(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[ve,R]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])Be(ve,R,1.05);for(let ve=0;ve<24;ve++){const R=ve*Math.PI*2/24;ve%3!==0&&Be(Math.cos(R)*12.5,Math.sin(R)*12.5,.85+ve%3*.12)}H(z,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Re=k((ve,R,v)=>{ve.clearRect(0,0,R,v),ve.textAlign="center",ve.fillStyle="#3d6850",ve.font="900 152px Arial",ve.fillText("CITY",R/2,148),ve.fillText("TYCOON",R/2,265),ve.font=`25px ${E}`,ve.fillStyle="#6d8468",ve.fillText("每一步，都是新可能。",R/2,338)},1024,420),me=new En(new tr(6.2,2.54),new Mv({map:Re,transparent:!0,depthWrite:!1}));me.rotation.x=-Math.PI/2,me.position.set(0,.58,0),z.add(me),de(z,.75,.82,.12,"#ede7cf",0,.59,4.3),de(z,.62,.62,.05,"#91c8ce",0,.675,4.3),de(z,.18,.28,.5,"#dfebdf",0,.95,4.3),pe(z,"#9fcfd2",0,1.3,4.3,.14),de(z,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Pe=[];for(let ve=0;ve<4;ve++){const R=new Na;z.add(R),de(R,.26,.3,.12,Fn[ve],0,.08,0),pe(R,Fn[ve],0,.53,0,.23,.32,.18),pe(R,"#f1d5b0",0,1,0,.225),pe(R,Fn[ve],0,1.12,-.015,.24,.14,.235),H(R,.44,.05,.15,Fn[ve],0,1.1,.16,.025);for(const W of[-.09,.09])pe(R,"#273e34",W,1.015,.198,.025),H(R,.13,.2,.19,"#3c5349",W,.22,.025,.035),pe(R,"#f1d5b0",W*2.8,.51,0,.075,.15,.075);H(R,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),R.scale.setScalar(.95);const[v,V]=gu(0);R.position.set(v+(ve%2-.5)*.62,.59,V+(Math.floor(ve/2)-.5)*.62),R.traverse(W=>{W.material===O(Fn[ve])&&(W.userData.playerTint=!0)}),Pe.push(R)}const nt=new En(new Kp(.42,.5,40),new El({color:"#f4c65b",side:ea}));nt.rotation.x=-Math.PI/2,z.add(nt);const je=new En(new bs(1.98,.045,1.98),new El({color:"#edc768",transparent:!0,opacity:.6}));z.add(je),je.visible=!1;let Ut="",ee=Number.NaN,Ue,He=0,tt=performance.now();const dt=()=>{const ve=S.clientWidth,R=S.clientHeight;P.setSize(ve,R),w.aspect=ve/R,w.updateProjectionMatrix(),U()},Lt=new ResizeObserver(dt);Lt.observe(S),dt();let Qt;const nn=ve=>{Qt=[ve.clientX,ve.clientY]},zt=ve=>{if(!Qt||Math.hypot(ve.clientX-Qt[0],ve.clientY-Qt[1])>6)return;const R=S.getBoundingClientRect(),v=new vb;v.setFromCamera(new ot((ve.clientX-R.left)/R.width*2-1,-(ve.clientY-R.top)/R.height*2+1),w);const V=v.intersectObjects(Se)[0];V&&x.current(V.object.userData.tile)};S.addEventListener("pointerdown",nn),S.addEventListener("pointerup",zt);function an(){const ve=l==null?void 0:l.current;if(!(ve!=null&&ve.size))return;const R=S.getBoundingClientRect(),v={left:12,top:72,right:R.width-12,bottom:R.height-82},V=[...S.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map(J=>{const _e=J.getBoundingClientRect();return{left:_e.left-R.left,top:_e.top-R.top,right:_e.right-R.left,bottom:_e.bottom-R.top}}),W=[];for(const[J,_e]of[...ve.entries()].sort(([ye],[ne])=>ye-ne)){const ye=Pe[J];if(!(_e!=null&&_e.isConnected)||!ye||!_e.offsetWidth||!_e.offsetHeight)continue;const ne=ye.position.clone().add(new $(0,1.45,0)).project(w),se=(ne.x*.5+.5)*R.width,xe=(-ne.y*.5+.5)*R.height,Ne=_e.offsetWidth,Le=_e.offsetHeight,De={left:se-Ne/2,top:xe-Le-20},Ye=[De,{left:De.left-Ne*.62-18,top:De.top},{left:De.left+Ne*.62+18,top:De.top},{left:De.left-Ne*.42-14,top:De.top-42},{left:De.left+Ne*.42+14,top:De.top-42},{left:De.left,top:De.top-58}].map(X=>({left:Math.max(v.left,Math.min(v.right-Ne,X.left)),top:Math.max(v.top,Math.min(v.bottom-Le,X.top))}));let Ke=Ye[0],lt=1/0;for(const X of Ye){const Oe={...X,right:X.left+Ne,bottom:X.top+Le};let Me=Math.hypot(X.left-De.left,X.top-De.top);for(const ze of[...W,...V]){const Ge=Math.max(0,Math.min(Oe.right,ze.right)-Math.max(Oe.left,ze.left)),we=Math.max(0,Math.min(Oe.bottom,ze.bottom)-Math.max(Oe.top,ze.top));Me+=Ge*we*100}Me<lt&&(lt=Me,Ke=X)}_e.style.left=`${Ke.left}px`,_e.style.top=`${Ke.top}px`,_e.style.setProperty("--tail-x",`${Math.max(18,Math.min(Ne-18,se-Ke.left))}px`),W.push({...Ke,right:Ke.left+Ne,bottom:Ke.top+Le})}}function K(){var W;Ue=requestAnimationFrame(K);const ve=performance.now(),R=Math.min((ve-tt)/1e3,.05);tt=ve,He+=R;const v=_.current;for(let J=0;J<Pe.length;J++)Pe[J].visible=!!v.players[J]&&!v.players[J].bankrupt;for(let J=0;J<v.players.length;J++){const _e=v.players[J],ye=Pe[J],[ne,se]=gu(_e.pos),xe=g.current[J];ye.traverse(lt=>{lt.userData.playerTint&&(lt.material=O(_e.color||Fn[J]))});const Ne=ne+(J%2-.5)*.62,Le=se+(Math.floor(J/2)-.5)*.62,De=Math.hypot(Ne-ye.position.x,Le-ye.position.z);ye.userData.baseRotationY=Math.atan2(Ne-ye.position.x,Le-ye.position.z),De>.04&&(ye.position.x=vp.damp(ye.position.x,Ne,13,R),ye.position.z=vp.damp(ye.position.z,Le,13,R));const Ye=De>.04?Math.abs(Math.sin(He*17))*.18:0,Ke=xe==="happy"?Math.abs(Math.sin(He*10))*.1:xe==="sad"?-.1:xe==="surprised"?Math.sin(He*12)*.045:xe==="relieved"?Math.sin(He*5)*.025:0;ye.position.y=.59+Ye+Ke,ye.rotation.y=(ye.userData.baseRotationY||0)+(xe==="proud"?Math.sin(He*8)*.12:0),ye.rotation.z=xe==="anxious"?Math.sin(He*32)*.045:0,ye.position.x+=xe==="anxious"?Math.sin(He*34)*.035:0,ye.scale.setScalar(.95*(xe==="surprised"?1+Math.max(0,Math.sin(He*12))*.09:1)),ye.visible=!_e.bankrupt}if(v.priceIndex!==ee&&(ee=v.priceIndex,j.forEach(J=>J(ee))),nt.position.copy(Pe[v.turn].position),nt.position.y=.595,nt.scale.setScalar(1+Math.sin(He*3)*.06),v.selected!==null){const[J,_e]=gu(v.selected);je.position.set(J,.536,_e),je.visible=!0}else je.visible=!1;const V=JSON.stringify([v.lots,v.players.map(J=>J.color)]);if(Ut!==V){Ut=V;for(const J of si){const _e=L[J.id];for(;_e.children.length;){const se=_e.children[0];se.userData.disposableGeometry&&se.geometry.dispose(),_e.remove(se)}const ye=v.lots[J.id],ne=ye?((W=v.players[ye.owner])==null?void 0:W.color)||Fn[ye.owner]:null;if(be[J.id].material=O(ne||"#fffaf0"),ye){H(_e,.045,.72,.045,"#647568",.67,.36,.7,.01);const se=new JE(Ie(ye.owner,ne));if(se.position.set(.67,.86,.7),se.scale.set(.62,.465,1),se.renderOrder=5,_e.add(se),H(_e,1.75,.055,.13,ne,0,0,.84,.015),ye.level===5){H(_e,.62,.72,.58,ne,0,.36,-.18,.04),H(_e,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const xe=new En(new bl(.43,.28,4),O("#d2a451"));xe.position.set(0,.96,-.18),xe.userData.disposableGeometry=!0,xe.rotation.y=Math.PI/4,xe.castShadow=!0,_e.add(xe),H(_e,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const xe=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Ne=0;Ne<ye.level;Ne++){const[Le,De]=xe[Ne];H(_e,.33,.32,.34,ne,Le,.2,De,.02);const Ye=new En(new bl(.3,.19,4),O("#faf0d7"));Ye.position.set(Le,.45,De),Ye.userData.disposableGeometry=!0,Ye.rotation.y=Math.PI/4,Ye.castShadow=!0,_e.add(Ye)}}}}}B.update(),an(),P.render(z,w)}K(),T=()=>{cancelAnimationFrame(Ue),Lt.disconnect(),S.removeEventListener("pointerdown",nn),S.removeEventListener("pointerup",zt),B.dispose();const ve=new Set,R=new Set;z.traverse(v=>{v.geometry&&ve.add(v.geometry),v.material&&R.add(v.material)}),ve.forEach(v=>v.dispose()),Y.forEach(v=>v.dispose()),R.forEach(v=>v.dispose()),b.forEach(v=>v.dispose()),Ce.forEach(v=>v.dispose()),I.forEach(v=>v.dispose()),P.dispose(),P.domElement.parentNode===S&&S.removeChild(P.domElement),d.current=null}})(),()=>{M=!0,T()}},[]),D.createElement("div",{className:"board-canvas",ref:m},h)});function WR({game:r,onLoad:e}){const[i,s]=at.useState([]),[l,c]=at.useState(""),[h,p]=at.useState(""),[m,d]=at.useState(null),_=()=>{try{s(Dl())}catch{p("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};at.useEffect(()=>{_();const M=setInterval(_,6e4);return window.addEventListener("storage",_),()=>{clearInterval(M),window.removeEventListener("storage",_)}},[]);function x(M=!1){try{const T=Dl();if(s(T),T.length===10&&!M){d({type:"replace"});return}s(DR(r,l,M)),c(""),d(null),p("已儲存，可保留 30 天。")}catch(T){d(null),p(`儲存失敗：${T.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function g(){try{const M=NR(m.id);e(M)}catch(M){d(null),p(M.message),_()}}return D.createElement("div",{className:"save-manager"},D.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",i.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),D.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),D.createElement("input",{id:"save-name",maxLength:60,value:l,onChange:M=>c(M.target.value),placeholder:`回合 ${r.round}`}),D.createElement("button",{className:"primary",onClick:()=>x()},"儲存目前進度"),D.createElement("p",{role:"status"},h),m?D.createElement("section",{className:"save-confirm"},D.createElement("p",null,m.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),D.createElement("button",{className:"primary",onClick:()=>m.type==="replace"?x(!0):g()},"確認",m.type==="replace"?"取代並儲存":"讀取"),D.createElement("button",{className:"secondary full",onClick:()=>d(null)},"取消")):null,!i.length&&D.createElement("p",null,"尚無手動存檔。"),i.map(M=>D.createElement("article",{className:"save-entry",key:M.id},D.createElement("div",null,D.createElement("strong",null,M.name),D.createElement("small",null,new Date(M.savedAt).toLocaleString("zh-TW")),D.createElement("small",null,"回合 ",M.game.round," · 你的總資產 ",Tt(lo(M.game,0))),D.createElement("small",null,"到期：",new Date(M.savedAt+Wy).toLocaleString("zh-TW"))),D.createElement("button",{className:"secondary",onClick:()=>d({type:"load",id:M.id})},"讀取"))))}const YR=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,jy="city-tycoon:background-music:v1";function qR(){try{const r=JSON.parse(localStorage.getItem(jy));return{enabled:(r==null?void 0:r.enabled)===!0,volume:typeof(r==null?void 0:r.volume)=="number"&&Number.isFinite(r.volume)?Math.max(0,Math.min(100,r.volume)):50}}catch{return{enabled:!1,volume:50}}}function ZR(){const[r,e]=at.useState(qR),[i,s]=at.useState(!1),[l,c]=at.useState(""),h=at.useRef(null),p=at.useRef(0);function m(){const _=++p.current;c(""),h.current.play().catch(x=>{_===p.current&&c(x.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}at.useEffect(()=>{const _=h.current;return _.volume=r.volume/100,r.enabled&&m(),()=>{p.current++,_.pause()}},[]),at.useEffect(()=>{h.current.volume=r.volume/100;try{localStorage.setItem(jy,JSON.stringify(r))}catch{}},[r]);function d(){h.current.paused?(e(_=>({..._,enabled:!0})),m()):(p.current++,h.current.pause(),c(""),e(_=>({..._,enabled:!1})))}return D.createElement("div",{className:"background-music"},D.createElement("audio",{ref:h,src:YR,loop:!0,preload:"none",onPlaying:()=>s(!0),onPause:()=>s(!1),onError:()=>{s(!1),c("音樂無法載入，請重新整理")}}),D.createElement("button",{className:"music-toggle","aria-label":i?"關閉背景音樂":"開啟背景音樂","aria-pressed":i,onClick:d,title:l||"Velvet Afternoon"},D.createElement(EM,{size:16}),D.createElement("span",null,"背景音樂"),i?D.createElement(bM,{size:14}):D.createElement(TM,{size:14})),D.createElement("label",{className:"music-volume"},D.createElement("span",{className:"music-volume-label"},"音量"),D.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:r.volume,onChange:_=>e(x=>({...x,volume:Number(_.target.value)}))}),D.createElement("output",null,r.volume,"%")),l&&D.createElement("span",{className:"music-message",role:"status"},l))}function $y(r){return`${r>0?"+":"−"}${Tt(Math.abs(r))}`}const KR={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function ex({message:r,player:e,anchorRefs:i,mobile:s=!1,animated:l=!0,paused:c=!1}){if(!e)return null;const h=$y(r.amountDelta),p=`emotion-${r.mood}`,m=e.color||"#61ac78";return D.createElement("div",{ref:s?void 0:d=>{i&&(d?i.current.set(e.id,d):i.current.delete(e.id))},className:`emotion-bubble ${p}${l?"":" motion-off"}${c?" is-paused":""}${s?" emotion-mobile-entry":""}`,style:{"--player":m},"aria-hidden":"true"},D.createElement("div",{className:"emotion-card"},D.createElement("div",{className:"emotion-bubble-heading"},D.createElement("span",{className:"emotion-player-dot"}),D.createElement("strong",null,e.name),D.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},r.emoji),D.createElement("span",{className:"emotion-mood-label"},r.moodLabel),D.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},KR[r.mood]),D.createElement("b",{className:"emotion-amount"},h)),D.createElement("p",null,r.message)))}function QR({event:r,players:e,anchorRefs:i,animated:s,paused:l=!1}){if(!r)return null;const c=new Map(e.map(p=>[p.id,p])),h=`${r.summary} ${r.players.map(p=>{const m=c.get(p.playerId);return`${(m==null?void 0:m.name)||"玩家"}，${p.moodLabel}，${$y(p.amountDelta)}，${p.message}`}).join(" ")}`;return D.createElement(D.Fragment,null,D.createElement("div",{className:"emotion-layer","aria-hidden":"true"},r.players.map(p=>D.createElement(ex,{key:`${r.id}-${p.playerId}`,message:p,player:c.get(p.playerId),anchorRefs:i,animated:s,paused:l}))),D.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},h))}function JR({event:r,players:e,animated:i,paused:s=!1}){if(!r)return null;const l=new Map(e.map(c=>[c.id,c]));return D.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},r.players.map(c=>D.createElement(ex,{key:`${r.id}-${c.playerId}`,message:c,player:l.get(c.playerId),mobile:!0,animated:i,paused:s})))}function jR({value:r,rolling:e}){const i={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return D.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${r} 點`},Array.from({length:9},(s,l)=>D.createElement("i",{key:l,className:i[r].includes(l+1)?"pip":""})))}function wp(r){return(r==null?void 0:r.color)||Fn[(r==null?void 0:r.id)||0]}function iy({id:r,small:e=!1,player:i}){return D.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":wp(i||{id:r})}},D.createElement("span",{className:"avatar-head"}),D.createElement("span",{className:"avatar-body"}),D.createElement("span",{className:"avatar-cap"}),D.createElement("span",{className:"owner-number"},r+1))}function $R(r){return r===5?"旅館":r?`${r} 間房屋`:"未開發地產"}function e3(r){return r===5?"旅館":"房屋 "+(r||0)+" / 4"}function t3(r,e,i){if(r.selected!==e.id||r.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(r.buildUsed)return"本次落地已完成建造。";if(i.level===5)return"這塊土地已有旅館。";const s=ar(r);return i.level===4?s.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":s.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function n3(r,e,i){return i.level===5?"已達最高等級":r.buildUsed&&r.selected===e.id?"本次落地已建造":i.level===4?`升級旅館 · ${Tt(po(e,r))}`:`建造房屋 · ${Tt(po(e,r))}`}function to({title:r,onClose:e,children:i,wide:s=!1}){const l=at.useRef();return at.useEffect(()=>{var p;const c=document.activeElement;(p=l.current)==null||p.focus();function h(m){if(m.key==="Escape"&&(e==null||e()),m.key==="Tab"){const d=[...l.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!d.length){m.preventDefault();return}m.shiftKey&&document.activeElement===d[0]?(m.preventDefault(),d.at(-1).focus()):!m.shiftKey&&document.activeElement===d.at(-1)&&(m.preventDefault(),d[0].focus())}}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h),c==null||c.focus()}},[]),D.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},D.createElement("section",{ref:l,tabIndex:-1,className:"modal "+(s?"wide":""),role:"dialog","aria-modal":"true","aria-label":r},D.createElement("div",{className:"modal-heading"},D.createElement("h2",null,r),e&&D.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},D.createElement(ly,{size:20}))),i))}const Dp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Dp.splice(0,Dp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function i3(r){if(r.roundOption==="unlimited")return null;if(r.roundOption==="custom"){const e=Number(r.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(r.roundOption)}const ay="city-tycoon:activity-visible:v1",tx="city-tycoon:glass-opacity:v1",nx="city-tycoon:emotion-animation:v1",Rd=72,ix=r=>Math.min(95,Math.max(5,Number(r)));function a3(){try{const r=localStorage.getItem(tx);if(r===null)return Rd;const e=Number(r);return Number.isFinite(e)?ix(e):Rd}catch{return Rd}}function s3(){try{return localStorage.getItem(nx)!=="false"}catch{return!0}}function sy({entries:r}){return r.map((e,i)=>D.createElement("div",{className:"activity-item",key:i},D.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?D.createElement(_u,{size:16}):e.kind==="dice"?D.createElement(oy,{size:16}):e.kind==="tax"?D.createElement(SM,{size:16}):D.createElement(Cd,{size:16})),D.createElement("p",null,e.text,D.createElement("small",null,i===0?"剛剛":"本局紀錄"))))}function r3(){var Ut;const[r,e]=at.useState(()=>{try{return localStorage.getItem(ay)!=="false"}catch{return!0}}),[i,s]=at.useState(a3),[l,c]=at.useState(s3),[h,p]=at.useState(()=>{var ee;return typeof window<"u"&&((ee=window.matchMedia)==null?void 0:ee.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[m,d]=at.useState([]),[_,x]=at.useState(null),[g,M]=at.useReducer(VR,void 0,kR),T=at.useRef(new Map),N=at.useRef(0),E=m[0]||null,S=E&&l&&!h?Object.fromEntries(E.players.map(ee=>[ee.playerId,ee.mood])):{},P=at.useRef();at.useEffect(()=>{try{localStorage.setItem(ay,String(r))}catch{}},[r]),at.useEffect(()=>{try{localStorage.setItem(nx,String(l))}catch{}},[l]),at.useEffect(()=>{var He,tt;const ee=(He=window.matchMedia)==null?void 0:He.call(window,"(prefers-reduced-motion: reduce)");if(!ee)return;const Ue=dt=>p(dt.matches);return(tt=ee.addEventListener)==null||tt.call(ee,"change",Ue),()=>{var dt;return(dt=ee.removeEventListener)==null?void 0:dt.call(ee,"change",Ue)}},[]),at.useEffect(()=>{const ee=(g.emotionEvents||[]).filter(Ue=>Ue.id>N.current);ee.length&&(N.current=Math.max(N.current,...ee.map(Ue=>Ue.id)),d(Ue=>[...Ue,...ee].sort((He,tt)=>tt.priority-He.priority||He.id-tt.id).slice(0,3)))},[g.emotionEvents]),at.useEffect(()=>{if(!E||_||g.stage==="moving"&&E.priority<90)return;const ee=E.id,Ue=setTimeout(()=>d(He=>{var tt;return((tt=He[0])==null?void 0:tt.id)===ee?He.slice(1):He.filter(dt=>dt.id!==ee)}),2400);return()=>clearTimeout(Ue)},[E==null?void 0:E.id,g.stage,_]);const z=ee=>{const Ue=ix(Number(ee.currentTarget.value));s(Ue);try{localStorage.setItem(tx,String(Ue))}catch{}},[w,B]=at.useState(null),[U,F]=at.useState("players"),[b,O]=at.useState(!1),[Y,H]=at.useState(!1),[Z,pe]=at.useState(""),[de,ie]=at.useState(!1),[I,k]=at.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:em,players:[{name:"你",color:Fn[0],human:!0},{name:"艾米",color:Fn[1],human:!1},{name:"小傑",color:Fn[2],human:!1},{name:"喵喵",color:Fn[3],human:!1}]}),re=at.useRef(),Se=at.useRef(),be=g.players[g.turn],L=!!(be!=null&&be.human)&&!(be!=null&&be.bankrupt),j=L&&["ready","end"].includes(g.stage),Ce=()=>{M({type:"ROLL",dice:Array.from({length:be.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})};at.useEffect(()=>{try{Dl()}catch{ie(!0)}},[]),at.useEffect(()=>{if(g.stage!=="moving")try{bp(g),ie(!1)}catch{ie(!0)}},[g]),at.useEffect(()=>{if(g.stage==="moving"&&_!=="saves"){const ee=setTimeout(()=>M({type:"STEP"}),330);return()=>clearTimeout(ee)}},[g,_]),at.useEffect(()=>{const ee=g.selected,Ue=ee===null?null:si[ee],He=ee===null?null:g.lots[ee],tt=L&&g.stage==="decision"&&(Ue==null?void 0:Ue.type)==="property"&&!He,dt=L&&g.stage==="end"&&g.buildAvailable&&(He==null?void 0:He.owner)===g.turn;(tt||dt)&&(B(ee),x("property"))},[g,L]),at.useEffect(()=>{if(L||g.stage==="finished"||_==="new"||_==="rules"||_==="saves")return;const ee=setTimeout(()=>{if(g.stage==="ready")Ce();else if(g.stage==="decision")M({type:be.cash>io(g,si[be.pos])+Kn(g,1800)?"BUY":"SKIP"});else if(g.stage==="end"){const Ue=js(g,g.turn).find(He=>Cp(g,He.id)&&be.cash>po(He,g)+Kn(g,2500));M(Ue?{type:"BUILD",id:Ue.id}:{type:"NEXT"})}},g.stage==="decision"?1300:1100);return()=>clearTimeout(ee)},[g,L,_]),at.useEffect(()=>{if(!(!b||!Se.current))try{const ee=Se.current,Ue=ee.createOscillator(),He=ee.createGain();Ue.connect(He),He.connect(ee.destination),Ue.type="sine",Ue.frequency.setValueAtTime(g.stage==="moving"?380:620,ee.currentTime),He.gain.setValueAtTime(.035,ee.currentTime),He.gain.exponentialRampToValueAtTime(.001,ee.currentTime+.13),Ue.start(),Ue.stop(ee.currentTime+.15)}catch{}},[g.remaining,g.stage,b]);const Ie=()=>{if(!b){const ee=window.AudioContext||window.webkitAudioContext;ee&&(Se.current||(Se.current=new ee),Se.current.resume())}O(!b)},Be=ee=>{B(ee),x("property")},ae=i3(I),Re=()=>{var ee;I.roundOption==="custom"&&!ae||(d([]),N.current=0,M({type:"NEW",config:{...I,maxRounds:ae,inflationRate:Number(I.inflationRate)}}),x(null),F("players"),(ee=re.current)==null||ee.reset(),H(!1))},me=w!==null?si[w]:null,Pe=me?g.lots[me.id]:null,nt=si[be.pos],je=!!me&&me.type==="property"&&!Pe&&g.stage==="decision"&&L&&nt.id===me.id;return D.createElement("div",{className:"app-shell"},D.createElement("header",{className:"header"},D.createElement("a",{className:"brand",href:"./","aria-label":"城市大亨首頁"},D.createElement("span",{className:"brand-icon"},D.createElement(Z_,{size:33,strokeWidth:1.8})),D.createElement("span",null,D.createElement("strong",null,"城市大亨"),D.createElement("small",null,"CITY TYCOON"))),D.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),D.createElement("nav",null,D.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>x("rules")},D.createElement(q_,{size:18}),D.createElement("span",null,"遊戲規則")),D.createElement("span",{className:"nav-divider"}),D.createElement("button",{className:"outline-button",onClick:()=>x("new")},D.createElement(K_,{size:18}),D.createElement("span",null,"新遊戲")))),D.createElement("button",{className:"save-launch secondary",onClick:()=>x("saves")},"儲存／讀取"),_==="saves"&&D.createElement(to,{title:"存檔管理",wide:!0,onClose:()=>x(null)},D.createElement(WR,{game:g,onLoad:ee=>{d([]),N.current=0,M({type:"LOAD",game:ee});try{bp(ee),ie(!1)}catch{ie(!0)}B(null),F("players"),x(null)}})),D.createElement("main",{className:"game-layout"},D.createElement("section",{className:"world","aria-label":"遊戲棋盤"},D.createElement(XR,{game:g,emotionAnchorRefs:T,emotionMoods:S,onSelect:Be,onError:pe,ref:re},D.createElement(QR,{event:E,players:g.players,anchorRefs:T,animated:l&&!h,paused:g.stage==="moving"||_!==null})),D.createElement("div",{className:"world-heading"},D.createElement("span",{className:"live-dot"}),"經典城市 ",D.createElement("span",{className:"world-heading-divider"},"/"),D.createElement("span",null,g.players.length," 人對局"),D.createElement("button",{ref:P,className:"activity-toggle","aria-expanded":r,"aria-controls":"glass-city-activity",onClick:()=>e(ee=>!ee)},D.createElement(q_,{size:16}),"城市動態",D.createElement("span",null,r?"收起":"展開"))),D.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-i/100},"aria-labelledby":"glass-activity-title",hidden:!r},D.createElement("div",{className:"glass-activity-heading"},D.createElement("h2",{id:"glass-activity-title"},"城市動態"),D.createElement("label",{className:"glass-opacity-control"},D.createElement("span",null,"透明度"),D.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:i,"aria-label":"玻璃面板透明度",onChange:ee=>s(Number(ee.target.value)),onPointerUp:z,onBlur:z}),D.createElement("output",null,i,"%")),D.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var ee;e(!1),(ee=P.current)==null||ee.focus()}},D.createElement(ly,{size:20}))),D.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},D.createElement(sy,{entries:g.log})),D.createElement("button",{className:"glass-activity-all",onClick:()=>x("log")},"全部紀錄 ",D.createElement(Cd,{size:16}))),D.createElement("div",{className:"world-top-right"},D.createElement("span",{className:"saved"},D.createElement(vM,{size:13}),de?"此瀏覽器無法存檔":"自動儲存"),D.createElement(ZR,null),D.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":l,onClick:()=>c(ee=>!ee)},D.createElement("span",{className:"emotion-toggle-indicator"}),l?"情緒動畫 開":"情緒動畫 關"),D.createElement("button",{className:"icon-button sound","aria-label":b?"關閉音效":"開啟音效",onClick:Ie},b?D.createElement(DM,{size:18}):D.createElement(NM,{size:18}))),Z&&D.createElement("div",{className:"webgl-error"},Z),D.createElement("div",{className:"board-foot"},D.createElement("div",{className:"camera-toolbar"},D.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:Y?"selected":"",onClick:()=>{var ee;(ee=re.current)==null||ee.rotate(),H(!Y)}},D.createElement(AM,{size:20}),D.createElement("span",null,"旋轉視角")),D.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var ee;(ee=re.current)==null||ee.reset(),H(!1)}},D.createElement(RM,{size:18})),D.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var ee;return(ee=re.current)==null?void 0:ee.top()}},D.createElement(CM,{size:18})),D.createElement("i",null),D.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var ee;return(ee=re.current)==null?void 0:ee.zoom(1.15)}},D.createElement(LM,{size:20})),D.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var ee;return(ee=re.current)==null?void 0:ee.zoom(.87)}},D.createElement(UM,{size:20}))),D.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),D.createElement(JR,{event:E,players:g.players,animated:l&&!h,paused:g.stage==="moving"||_!==null}),D.createElement("aside",{className:"sidebar"},D.createElement("div",{className:"round-heading"},D.createElement("div",null,D.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),D.createElement("h1",null,"回合 ",D.createElement("b",null,String(g.round).padStart(2,"0")),D.createElement("span",null,"/ ",g.maxRounds===null?"∞":g.maxRounds)),D.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${g.inflationRate}%，物價指數 ${g.priceIndex.toFixed(2)} 倍`},D.createElement("span",{className:"inflation-rate-badge"},D.createElement(wM,{size:14,"aria-hidden":"true"}),"通膨率 ",D.createElement("b",null,g.inflationRate,"%")),D.createElement("span",{className:"inflation-index"},"物價指數 ",D.createElement("b",null,g.priceIndex.toFixed(2),"×")))),D.createElement("span",{className:"round-icon"},D.createElement(xM,{size:21}))),D.createElement("div",{className:"tabs"},D.createElement("button",{className:U==="players"?"active":"",onClick:()=>F("players")},"玩家概況"),D.createElement("button",{className:U==="properties"?"active":"",onClick:()=>F("properties")},"我的地產 ",D.createElement("span",null,js(g,0).length))),D.createElement("div",{className:"overview"},U==="players"?g.players.map(ee=>D.createElement("div",{key:ee.id,className:"player-row "+(g.turn===ee.id?"current ":"")+(ee.bankrupt?"bankrupt":""),style:{"--player":wp(ee)}},D.createElement(iy,{id:ee.id,player:ee}),D.createElement("div",{className:"player-info"},D.createElement("strong",null,ee.name,ee.id===0?D.createElement("em",null,"玩家"):D.createElement("span",{className:"ai"},"電腦")),D.createElement("small",null,ee.bankrupt?"已破產":`${js(g,ee.id).length} 塊地產${ee.jail?" · 監獄中":""}`)),D.createElement("div",{className:"player-cash"},D.createElement("b",null,Tt(ee.cash)),g.turn===ee.id&&D.createElement("small",null,D.createElement("span",null)," 目前回合")))):D.createElement("div",{className:"property-list"},js(g,0).length?js(g,0).map(ee=>D.createElement("button",{key:ee.id,onClick:()=>Be(ee.id)},D.createElement("i",{style:{background:ee.color}}),D.createElement("span",null,D.createElement("strong",null,ee.name),D.createElement("small",null,$R(g.lots[ee.id].level)," · 租金 ",Tt(Rp(g,ee)))),D.createElement(yM,{size:16}))):D.createElement("div",{className:"empty-properties"},D.createElement(_u,{size:28}),D.createElement("strong",null,"你的第一塊地產，正在等你"),D.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),D.createElement("section",{className:"turn-panel","aria-live":"polite"},D.createElement("div",{className:"turn-title"},D.createElement("span",{className:"live-dot",style:{background:wp(be)}}),D.createElement("h2",null,g.stage==="finished"?"本局已結束":L?"你的回合":`${be.name}的回合`),D.createElement("span",null,g.stage==="moving"?"移動中":g.stage==="decision"?"購地時刻":L?"準備出發":"電腦玩家")),D.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(ee=>D.createElement("button",{key:ee,"aria-pressed":(be.diceCount??2)===ee,disabled:!L||g.stage!=="ready"||!!be.jail,onClick:()=>M({type:"SET_DICE_COUNT",count:ee})},ee," 顆骰子"))),D.createElement("div",{className:"dice-row"},(g.stage==="ready"?Array.from({length:be.diceCount??2},()=>1):g.dice).map((ee,Ue)=>D.createElement(jR,{key:Ue,value:ee,rolling:g.stage==="moving"}))),g.stage==="finished"?D.createElement("button",{className:"primary",onClick:()=>x("result")},D.createElement(Q_,{size:19}),"查看結算"):L&&g.stage==="decision"?D.createElement("div",{className:"buy-actions"},D.createElement("div",{className:"buy-summary"},D.createElement("strong",null,nt.name),D.createElement("b",null,Tt(io(g,nt)))),D.createElement("button",{className:"primary",onClick:()=>M({type:"BUY"})},D.createElement(_u,{size:18}),"購買地產"),D.createElement("button",{className:"skip-button",onClick:()=>M({type:"SKIP"})},"暫不購買，保留現金 ",D.createElement(kc,{size:14}))):D.createElement("button",{className:"primary",disabled:!L||g.stage==="moving",onClick:()=>g.stage==="end"?M({type:"NEXT"}):Ce()},g.stage==="moving"?D.createElement(D.Fragment,null,"前進中 · 還有 ",g.remaining," 格"):L?g.stage==="end"?D.createElement(D.Fragment,null,"結束回合 ",D.createElement(kc,{size:19})):D.createElement(D.Fragment,null,D.createElement(oy,{size:21}),"擲骰子"):D.createElement(D.Fragment,null,"電腦思考中",D.createElement("span",{className:"thinking"},"…"))),D.createElement("p",{className:"turn-hint"},g.stage==="ready"?L?"好運從這一步開始。":"下一段城市冒險，即將展開。":g.notice),g.event&&D.createElement("div",{className:"event-note"},D.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),D.createElement("div",null,D.createElement("strong",null,g.event.title),D.createElement("span",null,g.event.kind==="inflation"?g.event.inflationDelta===0?`通膨率維持 ${g.inflationRate}%（已達上下限）`:`通膨率 ${g.event.inflationDelta>0?"+":""}${g.event.inflationDelta}% · 目前 ${g.inflationRate}%`:`${g.event.amount>0?"+":"−"} ${Tt(Math.abs(g.event.amount))}`)))),D.createElement("section",{className:"activity"},D.createElement("div",{className:"activity-heading"},D.createElement("h2",null,"城市動態"),D.createElement("button",{onClick:()=>x("log")},"全部紀錄 ",D.createElement(Cd,{size:14}))),D.createElement("div",{className:"activity-list"},D.createElement(sy,{entries:g.log.slice(0,3)}))),D.createElement("footer",{className:"sidebar-footer"},D.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),_==="rules"&&D.createElement(to,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>x(null)},D.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),D.createElement("div",{className:"rules-list"},Dp.map(([ee,Ue],He)=>D.createElement("div",{key:ee},D.createElement("span",null,String(He+1).padStart(2,"0")),D.createElement("section",null,D.createElement("h3",null,ee),D.createElement("p",null,Ue))))),D.createElement("button",{className:"primary",onClick:()=>x(null)},"知道了，回到城市 ",D.createElement(kc,{size:18}))),_==="new"&&D.createElement(to,{title:"開啟一段全新的城市故事",onClose:()=>x(null)},D.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),D.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),D.createElement("label",{className:"setup-count"},"玩家人數 ",D.createElement("select",{value:I.count,onChange:ee=>k(Ue=>({...Ue,count:Number(ee.target.value)}))},[2,3,4].map(ee=>D.createElement("option",{key:ee,value:ee},ee," 人")))),D.createElement("label",{className:"setup-count"},"最多回合 ",D.createElement("select",{"aria-label":"最多回合",value:I.roundOption,onChange:ee=>k(Ue=>({...Ue,roundOption:ee.target.value}))},D.createElement("option",{value:"40"},"40 回合"),D.createElement("option",{value:"80"},"80 回合"),D.createElement("option",{value:"custom"},"自訂"),D.createElement("option",{value:"unlimited"},"無限制"))),D.createElement("label",{className:"setup-count"},"初始通膨率 ",D.createElement("select",{"aria-label":"初始通膨率",value:I.inflationRate,onChange:ee=>k(Ue=>({...Ue,inflationRate:Number(ee.target.value)}))},Array.from({length:Yy+1},(ee,Ue)=>D.createElement("option",{key:Ue,value:Ue},Ue,"%")))),I.roundOption==="custom"&&D.createElement("label",{className:"round-limit-custom"},"自訂回合數",D.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:I.customRounds,onChange:ee=>k(Ue=>({...Ue,customRounds:ee.target.value}))})),D.createElement("div",{className:"player-setup"},I.players.slice(0,I.count).map((ee,Ue)=>D.createElement("div",{className:"player-setup-row",key:Ue},D.createElement("input",{"aria-label":`玩家 ${Ue+1} 名稱`,value:ee.name,onChange:He=>k(tt=>({...tt,players:tt.players.map((dt,Lt)=>Lt===Ue?{...dt,name:He.target.value}:dt)}))}),D.createElement("input",{"aria-label":`玩家 ${Ue+1} 顏色`,type:"color",value:ee.color,onChange:He=>k(tt=>({...tt,players:tt.players.map((dt,Lt)=>Lt===Ue?{...dt,color:He.target.value}:dt)}))}),D.createElement("select",{value:ee.human?"human":"ai",onChange:He=>k(tt=>({...tt,players:tt.players.map((dt,Lt)=>Lt===Ue?{...dt,human:He.target.value==="human"}:dt)}))},D.createElement("option",{value:"human"},"真人"),D.createElement("option",{value:"ai"},"電腦"))))),D.createElement("button",{className:"primary",disabled:I.roundOption==="custom"&&!ae,onClick:Re},D.createElement(K_,{size:18}),"開始新遊戲"),D.createElement("button",{className:"secondary full",onClick:()=>x(null)},"繼續目前遊戲")),_==="property"&&me&&D.createElement(to,{title:"地產手冊",onClose:()=>x(null)},D.createElement("div",{className:"property-card",style:{"--lot":me.color}},D.createElement("div",{className:"property-banner"},me.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),D.createElement(MM,{size:24}),D.createElement("h3",null,me.name),D.createElement("p",null,me.type==="property"?`街區 ${me.group+1} · ${Pe?`${g.players[Pe.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),me.type==="property"?D.createElement(D.Fragment,null,D.createElement("div",{className:"property-stats"},D.createElement("div",null,D.createElement("span",null,"地產價格"),D.createElement("b",null,Tt(io(g,me)))),D.createElement("div",null,D.createElement("span",null,"目前租金"),D.createElement("b",null,Tt(Pe?Rp(g,me):Kn(g,Math.round(me.price*.18))))),D.createElement("div",null,D.createElement("span",null,"建築等級"),D.createElement("b",null,e3(Pe==null?void 0:Pe.level))),D.createElement("div",null,D.createElement("span",null,"建造費"),D.createElement("b",null,Tt(po(me,g))))),(Pe==null?void 0:Pe.owner)===be.id?D.createElement(D.Fragment,null,D.createElement("p",{className:"property-help"},t3(g,me,Pe)),D.createElement("button",{className:"primary",disabled:!j||!Cp(g,me.id,be.id),onClick:()=>M({type:"BUILD",id:me.id})},D.createElement(Z_,{size:18}),n3(g,me,Pe)),D.createElement("button",{className:"secondary full",disabled:!j,onClick:()=>{M({type:"SELL",id:me.id}),x(null)}},"變賣地產 · ",Tt(Kn(g,me.price+Pe.level*Math.round(me.price*.6),ee=>Math.floor(ee*.5))))):je?D.createElement(D.Fragment,null,D.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),D.createElement("button",{className:"primary",onClick:()=>M({type:"BUY"})},D.createElement(_u,{size:18}),"購買地產 · ",Tt(io(g,me))),D.createElement("button",{className:"secondary full",onClick:()=>{M({type:"SKIP"}),x(null)}},"暫不購買，保留現金")):D.createElement("p",{className:"property-help"},Pe?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):D.createElement("p",{className:"property-help"},me.type==="start"?`每次經過起點，領取 ${Tt(Kn(g,2e3))}。`:me.type==="chance"||me.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":me.type==="gojail"?"前往監獄並暫停下一回合。":me.type==="tax"?`停在這裡支付 ${Tt(Kn(g,me.id===6?1200:1800))} 稅金。`:me.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),_==="log"&&D.createElement(to,{title:"本局城市紀錄",onClose:()=>x(null)},D.createElement("div",{className:"full-log"},g.log.map((ee,Ue)=>D.createElement("p",{key:Ue},D.createElement("span",null,String(g.log.length-Ue).padStart(2,"0")),ee.text)))),(_==="result"||g.stage==="finished"&&_===null)&&D.createElement(to,{title:"這座城市，有了新的大亨",onClose:()=>x("closedResult")},D.createElement("div",{className:"winner"},D.createElement(Q_,{size:42}),D.createElement("h3",null,(Ut=g.players[g.winner])==null?void 0:Ut.name,"獲勝！"),D.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),D.createElement("div",{className:"rankings"},[...g.players].sort((ee,Ue)=>lo(g,Ue.id)-lo(g,ee.id)).map((ee,Ue)=>D.createElement("div",{key:ee.id},D.createElement("b",null,Ue+1),D.createElement(iy,{id:ee.id,player:ee,small:!0}),D.createElement("strong",null,ee.name),D.createElement("span",null,ee.bankrupt?"已破產":Tt(lo(g,ee.id)))))),D.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),D.createElement("button",{className:"primary",onClick:Re},"再玩一場 ",D.createElement(kc,{size:18}))))}pM.createRoot(document.getElementById("root")).render(D.createElement(r3,null));
