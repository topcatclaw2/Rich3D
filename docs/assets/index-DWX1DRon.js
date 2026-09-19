(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function CE(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $d={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function wE(){if(ev)return mt;ev=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),g=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function S(z,K,Me){this.props=z,this.context=K,this.refs=T,this.updater=Me||R}S.prototype.isReactComponent={},S.prototype.setState=function(z,K){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,K,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=S.prototype;function L(z,K,Me){this.props=z,this.context=K,this.refs=T,this.updater=Me||R}var M=L.prototype=new U;M.constructor=L,N(M,S.prototype),M.isPureReactComponent=!0;var I=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function O(z,K,Me){var Oe=Me.ref;return{$$typeof:a,type:z,key:K,ref:Oe!==void 0?Oe:null,props:Me}}function Y(z,K){return O(z.type,K,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function j(z){var K={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Me){return K[Me]})}var ge=/\/+/g;function me(z,K){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):K.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(K){z.status==="pending"&&(z.status="fulfilled",z.value=K)},function(K){z.status==="pending"&&(z.status="rejected",z.reason=K)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,K,Me,Oe,ze){var ae=typeof z;(ae==="undefined"||ae==="boolean")&&(z=null);var Ae=!1;if(z===null)Ae=!0;else switch(ae){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(z.$$typeof){case a:case e:Ae=!0;break;case v:return Ae=z._init,F(Ae(z._payload),K,Me,Oe,ze)}}if(Ae)return ze=ze(z),Ae=Oe===""?"."+me(z,0):Oe,I(ze)?(Me="",Ae!=null&&(Me=Ae.replace(ge,"$&/")+"/"),F(ze,K,Me,"",function(st){return st})):ze!=null&&(k(ze)&&(ze=Y(ze,Me+(ze.key==null||z&&z.key===ze.key?"":(""+ze.key).replace(ge,"$&/")+"/")+Ae)),K.push(ze)),1;Ae=0;var Re=Oe===""?".":Oe+":";if(I(z))for(var Fe=0;Fe<z.length;Fe++)Oe=z[Fe],ae=Re+me(Oe,Fe),Ae+=F(Oe,K,Me,ae,ze);else if(Fe=b(z),typeof Fe=="function")for(z=Fe.call(z),Fe=0;!(Oe=z.next()).done;)Oe=Oe.value,ae=Re+me(Oe,Fe++),Ae+=F(Oe,K,Me,ae,ze);else if(ae==="object"){if(typeof z.then=="function")return F(ie(z),K,Me,Oe,ze);throw K=String(z),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function X(z,K,Me){if(z==null)return z;var Oe=[],ze=0;return F(z,Oe,"","",function(ae){return K.call(Me,ae,ze++)}),Oe}function le(z){if(z._status===-1){var K=z._result;K=K(),K.then(function(Me){(z._status===0||z._status===-1)&&(z._status=1,z._result=Me)},function(Me){(z._status===0||z._status===-1)&&(z._status=2,z._result=Me)}),z._status===-1&&(z._status=0,z._result=K)}if(z._status===1)return z._result.default;throw z._result}var Se=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},we={map:X,forEach:function(z,K,Me){X(z,function(){K.apply(this,arguments)},Me)},count:function(z){var K=0;return X(z,function(){K++}),K},toArray:function(z){return X(z,function(K){return K})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return mt.Activity=E,mt.Children=we,mt.Component=S,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=L,mt.StrictMode=r,mt.Suspense=p,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,mt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},mt.cache=function(z){return function(){return z.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(z,K,Me){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Oe=N({},z.props),ze=z.key;if(K!=null)for(ae in K.key!==void 0&&(ze=""+K.key),K)!A.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Oe[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Oe.children=Me;else if(1<ae){for(var Ae=Array(ae),Re=0;Re<ae;Re++)Ae[Re]=arguments[Re+2];Oe.children=Ae}return O(z.type,ze,Oe)},mt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},mt.createElement=function(z,K,Me){var Oe,ze={},ae=null;if(K!=null)for(Oe in K.key!==void 0&&(ae=""+K.key),K)A.call(K,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(ze[Oe]=K[Oe]);var Ae=arguments.length-2;if(Ae===1)ze.children=Me;else if(1<Ae){for(var Re=Array(Ae),Fe=0;Fe<Ae;Fe++)Re[Fe]=arguments[Fe+2];ze.children=Re}if(z&&z.defaultProps)for(Oe in Ae=z.defaultProps,Ae)ze[Oe]===void 0&&(ze[Oe]=Ae[Oe]);return O(z,ae,ze)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(z){return{$$typeof:m,render:z}},mt.isValidElement=k,mt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:le}},mt.memo=function(z,K){return{$$typeof:h,type:z,compare:K===void 0?null:K}},mt.startTransition=function(z){var K=B.T,Me={};B.T=Me;try{var Oe=z(),ze=B.S;ze!==null&&ze(Me,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(P,Se)}catch(ae){Se(ae)}finally{K!==null&&Me.types!==null&&(K.types=Me.types),B.T=K}},mt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},mt.use=function(z){return B.H.use(z)},mt.useActionState=function(z,K,Me){return B.H.useActionState(z,K,Me)},mt.useCallback=function(z,K){return B.H.useCallback(z,K)},mt.useContext=function(z){return B.H.useContext(z)},mt.useDebugValue=function(){},mt.useDeferredValue=function(z,K){return B.H.useDeferredValue(z,K)},mt.useEffect=function(z,K){return B.H.useEffect(z,K)},mt.useEffectEvent=function(z){return B.H.useEffectEvent(z)},mt.useId=function(){return B.H.useId()},mt.useImperativeHandle=function(z,K,Me){return B.H.useImperativeHandle(z,K,Me)},mt.useInsertionEffect=function(z,K){return B.H.useInsertionEffect(z,K)},mt.useLayoutEffect=function(z,K){return B.H.useLayoutEffect(z,K)},mt.useMemo=function(z,K){return B.H.useMemo(z,K)},mt.useOptimistic=function(z,K){return B.H.useOptimistic(z,K)},mt.useReducer=function(z,K,Me){return B.H.useReducer(z,K,Me)},mt.useRef=function(z){return B.H.useRef(z)},mt.useState=function(z){return B.H.useState(z)},mt.useSyncExternalStore=function(z,K,Me){return B.H.useSyncExternalStore(z,K,Me)},mt.useTransition=function(){return B.H.useTransition()},mt.version="19.2.8",mt}var tv;function Xp(){return tv||(tv=1,$d.exports=wE()),$d.exports}var ke=Xp();const _=CE(ke);var eh={exports:{}},po={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function DE(){return nv||(nv=1,(function(a){function e(F,X){var le=F.length;F.push(X);e:for(;0<le;){var Se=le-1>>>1,we=F[Se];if(0<o(we,X))F[Se]=X,F[le]=we,le=Se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var X=F[0],le=F.pop();if(le!==X){F[0]=le;e:for(var Se=0,we=F.length,z=we>>>1;Se<z;){var K=2*(Se+1)-1,Me=F[K],Oe=K+1,ze=F[Oe];if(0>o(Me,le))Oe<we&&0>o(ze,Me)?(F[Se]=ze,F[Oe]=le,Se=Oe):(F[Se]=Me,F[K]=le,Se=K);else if(Oe<we&&0>o(ze,le))F[Se]=ze,F[Oe]=le,Se=Oe;else break e}}return X}function o(F,X){var le=F.sortIndex-X.sortIndex;return le!==0?le:F.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var p=[],h=[],v=1,E=null,g=3,b=!1,R=!1,N=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function M(F){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=F)r(h),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(h)}}function I(F){if(N=!1,M(F),!R)if(n(p)!==null)R=!0,P||(P=!0,j());else{var X=n(h);X!==null&&ie(I,X.startTime-F)}}var P=!1,B=-1,A=5,O=-1;function Y(){return T?!0:!(a.unstable_now()-O<A)}function k(){if(T=!1,P){var F=a.unstable_now();O=F;var X=!0;try{e:{R=!1,N&&(N=!1,U(B),B=-1),b=!0;var le=g;try{t:{for(M(F),E=n(p);E!==null&&!(E.expirationTime>F&&Y());){var Se=E.callback;if(typeof Se=="function"){E.callback=null,g=E.priorityLevel;var we=Se(E.expirationTime<=F);if(F=a.unstable_now(),typeof we=="function"){E.callback=we,M(F),X=!0;break t}E===n(p)&&r(p),M(F)}else r(p);E=n(p)}if(E!==null)X=!0;else{var z=n(h);z!==null&&ie(I,z.startTime-F),X=!1}}break e}finally{E=null,g=le,b=!1}X=void 0}}finally{X?j():P=!1}}}var j;if(typeof L=="function")j=function(){L(k)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,me=ge.port2;ge.port1.onmessage=k,j=function(){me.postMessage(null)}}else j=function(){S(k,0)};function ie(F,X){B=S(function(){F(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(F){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var le=g;g=X;try{return F()}finally{g=le}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var le=g;g=F;try{return X()}finally{g=le}},a.unstable_scheduleCallback=function(F,X,le){var Se=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Se+le:Se):le=Se,F){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=le+we,F={id:v++,callback:X,priorityLevel:F,startTime:le,expirationTime:we,sortIndex:-1},le>Se?(F.sortIndex=le,e(h,F),n(p)===null&&F===n(h)&&(N?(U(B),B=-1):N=!0,ie(I,le-Se))):(F.sortIndex=we,e(p,F),R||b||(R=!0,P||(P=!0,j()))),F},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(F){var X=g;return function(){var le=g;g=X;try{return F.apply(this,arguments)}finally{g=le}}}})(nh)),nh}var iv;function NE(){return iv||(iv=1,th.exports=DE()),th.exports}var ih={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function UE(){if(av)return jn;av=1;var a=Xp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:p,containerInfo:h,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,jn.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,v)},jn.flushSync=function(p){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=h,r.p=v,r.d.f()}},jn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},jn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},jn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,E=m(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:g,fetchPriority:b}):v==="script"&&r.d.X(p,{crossOrigin:E,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},jn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,E=m(v,h.crossOrigin);r.d.L(p,v,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},jn.requestFormReset=function(p){r.d.r(p)},jn.unstable_batchedUpdates=function(p,h){return p(h)},jn.useFormState=function(p,h,v){return f.H.useFormState(p,h,v)},jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},jn.version="19.2.8",jn}var sv;function LE(){if(sv)return ih.exports;sv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ih.exports=UE(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function OE(){if(rv)return po;rv=1;var a=NE(),e=Xp(),n=LE();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===l)return p(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var x=!1,D=u.child;D;){if(D===s){x=!0,s=u,l=d;break}if(D===l){x=!0,l=u,s=d;break}D=D.sibling}if(!x){for(D=d.child;D;){if(D===s){x=!0,s=d,l=u;break}if(D===l){x=!0,l=d,s=u;break}D=D.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var E=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case M:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var ie=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Se=[],we=-1;function z(t){return{current:t}}function K(t){0>we||(t.current=Se[we],Se[we]=null,we--)}function Me(t,i){we++,Se[we]=t.current,t.current=i}var Oe=z(null),ze=z(null),ae=z(null),Ae=z(null);function Re(t,i){switch(Me(ae,i),Me(ze,t),Me(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?M_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=M_(i),t=b_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Oe),Me(Oe,t)}function Fe(){K(Oe),K(ze),K(ae)}function st(t){t.memoizedState!==null&&Me(Ae,t);var i=Oe.current,s=b_(i,t.type);i!==s&&(Me(ze,t),Me(Oe,s))}function tt(t){ze.current===t&&(K(Oe),K(ze)),Ae.current===t&&(K(Ae),co._currentValue=le)}var Xt,ut;function pt(t){if(Xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Xt=i&&i[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+ut}var dt=!1;function ht(t,i){if(!t||dt)return"";dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ye){var pe=ye}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ye){pe=ye}t.call(Te.prototype)}}else{try{throw Error()}catch(ye){pe=ye}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ye){if(ye&&pe&&typeof ye.stack=="string")return[ye.stack,pe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],D=d[1];if(x&&D){var G=x.split(`
`),ce=D.split(`
`);for(u=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(l===G.length||u===ce.length)for(l=G.length-1,u=ce.length-1;1<=l&&0<=u&&G[l]!==ce[u];)u--;for(;1<=l&&0<=u;l--,u--)if(G[l]!==ce[u]){if(l!==1||u!==1)do if(l--,u--,0>u||G[l]!==ce[u]){var Ee=`
`+G[l].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=l&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?pt(s):""}function It(t,i){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==i&&i!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return pt("Activity");default:return""}}function Ke(t){try{var i="",s=null;do i+=It(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var _t=Object.prototype.hasOwnProperty,rn=a.unstable_scheduleCallback,Pt=a.unstable_cancelCallback,un=a.unstable_shouldYield,Q=a.unstable_requestPaint,Lt=a.unstable_now,ve=a.unstable_getCurrentPriorityLevel,C=a.unstable_ImmediatePriority,y=a.unstable_UserBlockingPriority,V=a.unstable_NormalPriority,q=a.unstable_LowPriority,$=a.unstable_IdlePriority,re=a.log,de=a.unstable_setDisableYieldValue,ee=null,se=null;function _e(t){if(typeof re=="function"&&de(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(ee,t)}catch{}}var Ne=Math.clz32?Math.clz32:We,Ie=Math.log,De=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Ie(t)/De|0)|0}var Ze=256,Xe=262144,W=4194304;function Le(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~d,l!==0?u=Le(l):(x&=D,x!==0?u=Le(x):s||(s=D&~t,s!==0&&(u=Le(s))))):(D=l&~d,D!==0?u=Le(D):x!==0?u=Le(x):s||(s=l&~t,s!==0&&(u=Le(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Pe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Be(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Je(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function qe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,i,s,l,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,G=t.expirationTimes,ce=t.hiddenUpdates;for(s=x&~s;0<s;){var Ee=31-Ne(s),Te=1<<Ee;D[Ee]=0,G[Ee]=-1;var pe=ce[Ee];if(pe!==null)for(ce[Ee]=null,Ee=0;Ee<pe.length;Ee++){var ye=pe[Ee];ye!==null&&(ye.lane&=-536870913)}s&=~Te}l!==0&&zt(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function zt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ne(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ti(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ne(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function ni(t,i){var s=i&-i;return s=(s&42)!==0?1:zs(s),(s&(t.suspendedLanes|i))!==0?0:s}function zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Za(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:q_(t.type))}function _a(t,i){var s=X.p;try{return X.p=t,i()}finally{X.p=s}}var _i=Math.random().toString(36).slice(2),vn="__reactFiber$"+_i,Tn="__reactProps$"+_i,H="__reactContainer$"+_i,Ue="__reactEvents$"+_i,it="__reactListeners$"+_i,Ot="__reactHandles$"+_i,Wt="__reactResources$"+_i,yn="__reactMarker$"+_i;function ln(t){delete t[vn],delete t[Tn],delete t[Ue],delete t[it],delete t[Ot]}function ii(t){var i=t[vn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[H]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=N_(t);t!==null;){if(s=t[vn])return s;t=N_(t)}return i}t=s,s=t.parentNode}return null}function Ni(t){if(t=t[vn]||t[H]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Bs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Ka(t){var i=t[Wt];return i||(i=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function An(t){t[yn]=!0}var Fo=new Set,w={};function J(t,i){he(t,i),he(t+"Capture",i)}function he(t,i){for(w[t]=i,t=0;t<i.length;t++)Fo.add(i[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},Ge={};function Qe(t){return _t.call(Ge,t)?!0:_t.call(fe,t)?!1:ue.test(t)?Ge[t]=!0:(fe[t]=!0,!1)}function He(t,i,s){if(Qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function $e(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function at(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Bt(t){if(!t._valueTracker){var i=vt(t)?"checked":"value";t._valueTracker=at(t,i,""+t[i])}}function pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=vt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function on(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qt=/[\n"\\]/g;function Zt(t){return t.replace(qt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ye(t,i,s,l,u,d,x,D){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?bt(t,x,rt(i)):s!=null?bt(t,x,rt(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function Qn(t,i,s,l,u,d,x,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Bt(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Bt(t)}function bt(t,i,s){i==="number"&&on(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ln(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function vi(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function Xi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ie(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Bt(t)}function yi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Kt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Wi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&mn(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&mn(t,d,i[d])}function Yt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fs(t){return Qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function va(){}var Ku=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function Em(t){var i=Ni(t);if(i&&(t=i.stateNode)){var s=t[Tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ye(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Zt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[Tn]||null;if(!u)throw Error(r(90));Ye(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&pn(l)}break e;case"textarea":vi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ln(t,!!s.multiple,i,!1)}}}var ju=!1;function Mm(t,i,s){if(ju)return t(i,s);ju=!0;try{var l=t(i);return l}finally{if(ju=!1,(mr!==null||gr!==null)&&(Ac(),mr&&(i=mr,t=gr,gr=mr=null,Em(i),t)))for(i=0;i<t.length;i++)Em(t[i])}}function Al(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(ya)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{Ju=!1}var ja=null,$u=null,Ho=null;function bm(){if(Ho)return Ho;var t,i=$u,s=i.length,l,u="value"in ja?ja.value:ja.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var x=s-t;for(l=1;l<=x&&i[s-l]===u[d-l];l++);return Ho=u.slice(t,1<l?1-l:void 0)}function ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Tm(){return!1}function oi(t){function i(s,l,u,d,x){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Go:Tm,this.isPropagationStopped=Tm,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=oi(Hs),Cl=E({},Hs,{view:0,detail:0}),Ax=oi(Cl),ef,tf,wl,Xo=E({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wl&&(wl&&t.type==="mousemove"?(ef=t.screenX-wl.screenX,tf=t.screenY-wl.screenY):tf=ef=0,wl=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),Am=oi(Xo),Rx=E({},Xo,{dataTransfer:0}),Cx=oi(Rx),wx=E({},Cl,{relatedTarget:0}),nf=oi(wx),Dx=E({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=oi(Dx),Ux=E({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lx=oi(Ux),Ox=E({},Hs,{data:0}),Rm=oi(Ox),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=zx[t])?!!i[t]:!1}function af(){return Bx}var Fx=E({},Cl,{key:function(t){if(t.key){var i=Ix[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hx=oi(Fx),kx=E({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=oi(kx),Gx=E({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Vx=oi(Gx),Xx=E({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=oi(Xx),Yx=E({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=oi(Yx),Zx=E({},Hs,{newState:0,oldState:0}),Kx=oi(Zx),Qx=[9,13,27,32],sf=ya&&"CompositionEvent"in window,Dl=null;ya&&"documentMode"in document&&(Dl=document.documentMode);var jx=ya&&"TextEvent"in window&&!Dl,wm=ya&&(!sf||Dl&&8<Dl&&11>=Dl),Dm=" ",Nm=!1;function Um(t,i){switch(t){case"keyup":return Qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function Jx(t,i){switch(t){case"compositionend":return Lm(i);case"keypress":return i.which!==32?null:(Nm=!0,Dm);case"textInput":return t=i.data,t===Dm&&Nm?null:t;default:return null}}function $x(t,i){if(_r)return t==="compositionend"||!sf&&Um(t,i)?(t=bm(),Ho=$u=ja=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wm&&i.locale!=="ko"?null:i.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!eS[t.type]:i==="textarea"}function Im(t,i,s,l){mr?gr?gr.push(l):gr=[l]:mr=l,i=Lc(i,"onChange"),0<i.length&&(s=new Vo("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Nl=null,Ul=null;function tS(t){__(t,0)}function Wo(t){var i=Bs(t);if(pn(i))return t}function Pm(t,i){if(t==="change")return i}var zm=!1;if(ya){var rf;if(ya){var lf="oninput"in document;if(!lf){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),lf=typeof Bm.oninput=="function"}rf=lf}else rf=!1;zm=rf&&(!document.documentMode||9<document.documentMode)}function Fm(){Nl&&(Nl.detachEvent("onpropertychange",Hm),Ul=Nl=null)}function Hm(t){if(t.propertyName==="value"&&Wo(Ul)){var i=[];Im(i,Ul,t,Qu(t)),Mm(tS,i)}}function nS(t,i,s){t==="focusin"?(Fm(),Nl=i,Ul=s,Nl.attachEvent("onpropertychange",Hm)):t==="focusout"&&Fm()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Ul)}function aS(t,i){if(t==="click")return Wo(i)}function sS(t,i){if(t==="input"||t==="change")return Wo(i)}function rS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:rS;function Ll(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!_t.call(i,u)||!xi(t[u],i[u]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,i){var s=km(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=km(s)}}function Vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=on(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=on(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var lS=ya&&"documentMode"in document&&11>=document.documentMode,vr=null,cf=null,Ol=null,uf=!1;function Wm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uf||vr==null||vr!==on(l)||(l=vr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Ll(Ol,l)||(Ol=l,l=Lc(cf,"onSelect"),0<l.length&&(i=new Vo("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=vr)))}function ks(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},ff={},Ym={};ya&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Gs(t){if(ff[t])return ff[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ym)return ff[t]=i[s];return t}var qm=Gs("animationend"),Zm=Gs("animationiteration"),Km=Gs("animationstart"),oS=Gs("transitionrun"),cS=Gs("transitionstart"),uS=Gs("transitioncancel"),Qm=Gs("transitionend"),jm=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function Yi(t,i){jm.set(t,i),J(i,[t])}var Yo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],xr=0,hf=0;function qo(){for(var t=xr,i=hf=xr=0;i<t;){var s=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var u=Ui[i];Ui[i++]=null;var d=Ui[i];if(Ui[i++]=null,l!==null&&u!==null){var x=l.pending;x===null?u.next=u:(u.next=x.next,x.next=u),l.pending=u}d!==0&&Jm(s,u,d)}}function Zo(t,i,s,l){Ui[xr++]=t,Ui[xr++]=i,Ui[xr++]=s,Ui[xr++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function pf(t,i,s,l){return Zo(t,i,s,l),Ko(t)}function Vs(t,i){return Zo(t,null,null,i),Ko(t)}function Jm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ne(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function Ko(t){if(50<no)throw no=0,Md=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Sr={};function fS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,i,s,l){return new fS(t,i,s,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,i){var s=t.alternate;return s===null?(s=Si(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function $m(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Qo(t,i,s,l,u,d){var x=0;if(l=t,typeof t=="function")mf(t)&&(x=1);else if(typeof t=="string")x=gE(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Si(31,s,i,u),t.elementType=O,t.lanes=d,t;case N:return Xs(s.children,u,d,i);case T:x=8,u|=24;break;case S:return t=Si(12,s,i,u|2),t.elementType=S,t.lanes=d,t;case I:return t=Si(13,s,i,u),t.elementType=I,t.lanes=d,t;case P:return t=Si(19,s,i,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:x=10;break e;case U:x=9;break e;case M:x=11;break e;case B:x=14;break e;case A:x=16,l=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Si(x,s,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function Xs(t,i,s,l){return t=Si(7,t,l,i),t.lanes=s,t}function gf(t,i,s){return t=Si(6,t,null,i),t.lanes=s,t}function e0(t){var i=Si(18,null,null,0);return i.stateNode=t,i}function _f(t,i,s){return i=Si(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var t0=new WeakMap;function Li(t,i){if(typeof t=="object"&&t!==null){var s=t0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ke(i)},t0.set(t,i),i)}return{value:t,source:i,stack:Ke(i)}}var Er=[],Mr=0,jo=null,Il=0,Oi=[],Ii=0,Ja=null,na=1,ia="";function Sa(t,i){Er[Mr++]=Il,Er[Mr++]=jo,jo=t,Il=i}function n0(t,i,s){Oi[Ii++]=na,Oi[Ii++]=ia,Oi[Ii++]=Ja,Ja=t;var l=na;t=ia;var u=32-Ne(l)-1;l&=~(1<<u),s+=1;var d=32-Ne(i)+u;if(30<d){var x=u-u%5;d=(l&(1<<x)-1).toString(32),l>>=x,u-=x,na=1<<32-Ne(i)+u|s<<u|l,ia=d+t}else na=1<<d|s<<u|l,ia=t}function vf(t){t.return!==null&&(Sa(t,1),n0(t,1,0))}function yf(t){for(;t===jo;)jo=Er[--Mr],Er[Mr]=null,Il=Er[--Mr],Er[Mr]=null;for(;t===Ja;)Ja=Oi[--Ii],Oi[Ii]=null,ia=Oi[--Ii],Oi[Ii]=null,na=Oi[--Ii],Oi[Ii]=null}function i0(t,i){Oi[Ii++]=na,Oi[Ii++]=ia,Oi[Ii++]=Ja,na=i.id,ia=i.overflow,Ja=t}var Vn=null,fn=null,Dt=!1,$a=null,Pi=!1,xf=Error(r(519));function es(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(Li(i,t)),xf}function a0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[vn]=t,i[Tn]=l,s){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(s=0;s<ao.length;s++)At(ao[s],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":At("invalid",i),Qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":At("invalid",i);break;case"textarea":At("invalid",i),Xi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||S_(i.textContent,s)?(l.popover!=null&&(At("beforetoggle",i),At("toggle",i)),l.onScroll!=null&&At("scroll",i),l.onScrollEnd!=null&&At("scrollend",i),l.onClick!=null&&(i.onclick=va),i=!0):i=!1,i||es(t,!0)}function s0(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Vn=Vn.return}}function br(t){if(t!==Vn)return!1;if(!Dt)return s0(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bd(t.type,t.memoizedProps)),s=!s),s&&fn&&es(t),s0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=D_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=D_(t)}else i===27?(i=fn,ps(t.type)?(t=Vd,Vd=null,fn=t):fn=i):fn=Vn?Bi(t.stateNode.nextSibling):null;return!0}function Ws(){fn=Vn=null,Dt=!1}function Sf(){var t=$a;return t!==null&&(di===null?di=t:di.push.apply(di,t),$a=null),t}function Pl(t){$a===null?$a=[t]:$a.push(t)}var Ef=z(null),Ys=null,Ea=null;function ts(t,i,s){Me(Ef,i._currentValue),i._currentValue=s}function Ma(t){t._currentValue=Ef.current,K(Ef)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var G=0;G<i.length;G++)if(D.context===i[G]){d.lanes|=s,D=d.alternate,D!==null&&(D.lanes|=s),Mf(d.return,s,t),l||(x=null);break e}d=D.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Mf(x,s,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Tr(t,i,s,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var D=u.type;xi(u.pendingProps.value,x.value)||(t!==null?t.push(D):t=[D])}}else if(u===Ae.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}u=u.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qs(t){Ys=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return r0(Ys,t)}function $o(t,i){return Ys===null&&qs(t),r0(t,i)}function r0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ea===null){if(t===null)throw Error(r(308));Ea=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ea=Ea.next=i;return s}var dS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},hS=a.unstable_scheduleCallback,pS=a.unstable_NormalPriority,Rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new dS,data:new Map,refCount:0}}function zl(t){t.refCount--,t.refCount===0&&hS(pS,function(){t.controller.abort()})}var Bl=null,Af=0,Ar=0,Rr=null;function mS(t,i){if(Bl===null){var s=Bl=[];Af=0,Ar=wd(),Rr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Af++,i.then(l0,l0),i}function l0(){if(--Af===0&&Bl!==null){Rr!==null&&(Rr.status="fulfilled");var t=Bl;Bl=null,Ar=0,Rr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function gS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var o0=F.S;F.S=function(t,i){Wg=Lt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&mS(t,i),o0!==null&&o0(t,i)};var Zs=z(null);function Rf(){var t=Zs.current;return t!==null?t:cn.pooledCache}function ec(t,i){i===null?Me(Zs,Zs.current):Me(Zs,i.pool)}function c0(){var t=Rf();return t===null?null:{parent:Rn._currentValue,pool:t}}var Cr=Error(r(460)),Cf=Error(r(474)),tc=Error(r(542)),nc={then:function(){}};function u0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function f0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(va,va),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,h0(t),t;default:if(typeof i.status=="string")i.then(va,va);else{if(t=cn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,h0(t),t}throw Qs=i,Cr}}function Ks(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,Cr):s}}var Qs=null;function d0(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function h0(t){if(t===Cr||t===tc)throw Error(r(483))}var wr=null,Fl=0;function ic(t){var i=Fl;return Fl+=1,wr===null&&(wr=[]),f0(wr,t,i)}function Hl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function p0(t){function i(ne,Z){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Z],ne.flags|=16):oe.push(Z)}}function s(ne,Z){if(!t)return null;for(;Z!==null;)i(ne,Z),Z=Z.sibling;return null}function l(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=xa(ne,Z),ne.index=0,ne.sibling=null,ne}function d(ne,Z,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Z?(ne.flags|=67108866,Z):oe):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function x(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,Z,oe,be){return Z===null||Z.tag!==6?(Z=gf(oe,ne.mode,be),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function G(ne,Z,oe,be){var lt=oe.type;return lt===N?Ee(ne,Z,oe.props.children,be,oe.key):Z!==null&&(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Ks(lt)===Z.type)?(Z=u(Z,oe.props),Hl(Z,oe),Z.return=ne,Z):(Z=Qo(oe.type,oe.key,oe.props,null,ne.mode,be),Hl(Z,oe),Z.return=ne,Z)}function ce(ne,Z,oe,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=_f(oe,ne.mode,be),Z.return=ne,Z):(Z=u(Z,oe.children||[]),Z.return=ne,Z)}function Ee(ne,Z,oe,be,lt){return Z===null||Z.tag!==7?(Z=Xs(oe,ne.mode,be,lt),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function Te(ne,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=gf(""+Z,ne.mode,oe),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return oe=Qo(Z.type,Z.key,Z.props,null,ne.mode,oe),Hl(oe,Z),oe.return=ne,oe;case R:return Z=_f(Z,ne.mode,oe),Z.return=ne,Z;case A:return Z=Ks(Z),Te(ne,Z,oe)}if(ie(Z)||j(Z))return Z=Xs(Z,ne.mode,oe,null),Z.return=ne,Z;if(typeof Z.then=="function")return Te(ne,ic(Z),oe);if(Z.$$typeof===L)return Te(ne,$o(ne,Z),oe);ac(ne,Z)}return null}function pe(ne,Z,oe,be){var lt=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return lt!==null?null:D(ne,Z,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:return oe.key===lt?G(ne,Z,oe,be):null;case R:return oe.key===lt?ce(ne,Z,oe,be):null;case A:return oe=Ks(oe),pe(ne,Z,oe,be)}if(ie(oe)||j(oe))return lt!==null?null:Ee(ne,Z,oe,be,null);if(typeof oe.then=="function")return pe(ne,Z,ic(oe),be);if(oe.$$typeof===L)return pe(ne,Z,$o(ne,oe),be);ac(ne,oe)}return null}function ye(ne,Z,oe,be,lt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ne=ne.get(oe)||null,D(Z,ne,""+be,lt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return ne=ne.get(be.key===null?oe:be.key)||null,G(Z,ne,be,lt);case R:return ne=ne.get(be.key===null?oe:be.key)||null,ce(Z,ne,be,lt);case A:return be=Ks(be),ye(ne,Z,oe,be,lt)}if(ie(be)||j(be))return ne=ne.get(oe)||null,Ee(Z,ne,be,lt,null);if(typeof be.then=="function")return ye(ne,Z,oe,ic(be),lt);if(be.$$typeof===L)return ye(ne,Z,oe,$o(Z,be),lt);ac(Z,be)}return null}function et(ne,Z,oe,be){for(var lt=null,Ft=null,nt=Z,xt=Z=0,wt=null;nt!==null&&xt<oe.length;xt++){nt.index>xt?(wt=nt,nt=null):wt=nt.sibling;var Ht=pe(ne,nt,oe[xt],be);if(Ht===null){nt===null&&(nt=wt);break}t&&nt&&Ht.alternate===null&&i(ne,nt),Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht,nt=wt}if(xt===oe.length)return s(ne,nt),Dt&&Sa(ne,xt),lt;if(nt===null){for(;xt<oe.length;xt++)nt=Te(ne,oe[xt],be),nt!==null&&(Z=d(nt,Z,xt),Ft===null?lt=nt:Ft.sibling=nt,Ft=nt);return Dt&&Sa(ne,xt),lt}for(nt=l(nt);xt<oe.length;xt++)wt=ye(nt,ne,xt,oe[xt],be),wt!==null&&(t&&wt.alternate!==null&&nt.delete(wt.key===null?xt:wt.key),Z=d(wt,Z,xt),Ft===null?lt=wt:Ft.sibling=wt,Ft=wt);return t&&nt.forEach(function(ys){return i(ne,ys)}),Dt&&Sa(ne,xt),lt}function ct(ne,Z,oe,be){if(oe==null)throw Error(r(151));for(var lt=null,Ft=null,nt=Z,xt=Z=0,wt=null,Ht=oe.next();nt!==null&&!Ht.done;xt++,Ht=oe.next()){nt.index>xt?(wt=nt,nt=null):wt=nt.sibling;var ys=pe(ne,nt,Ht.value,be);if(ys===null){nt===null&&(nt=wt);break}t&&nt&&ys.alternate===null&&i(ne,nt),Z=d(ys,Z,xt),Ft===null?lt=ys:Ft.sibling=ys,Ft=ys,nt=wt}if(Ht.done)return s(ne,nt),Dt&&Sa(ne,xt),lt;if(nt===null){for(;!Ht.done;xt++,Ht=oe.next())Ht=Te(ne,Ht.value,be),Ht!==null&&(Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht);return Dt&&Sa(ne,xt),lt}for(nt=l(nt);!Ht.done;xt++,Ht=oe.next())Ht=ye(nt,ne,xt,Ht.value,be),Ht!==null&&(t&&Ht.alternate!==null&&nt.delete(Ht.key===null?xt:Ht.key),Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht);return t&&nt.forEach(function(RE){return i(ne,RE)}),Dt&&Sa(ne,xt),lt}function an(ne,Z,oe,be){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:e:{for(var lt=oe.key;Z!==null;){if(Z.key===lt){if(lt=oe.type,lt===N){if(Z.tag===7){s(ne,Z.sibling),be=u(Z,oe.props.children),be.return=ne,ne=be;break e}}else if(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Ks(lt)===Z.type){s(ne,Z.sibling),be=u(Z,oe.props),Hl(be,oe),be.return=ne,ne=be;break e}s(ne,Z);break}else i(ne,Z);Z=Z.sibling}oe.type===N?(be=Xs(oe.props.children,ne.mode,be,oe.key),be.return=ne,ne=be):(be=Qo(oe.type,oe.key,oe.props,null,ne.mode,be),Hl(be,oe),be.return=ne,ne=be)}return x(ne);case R:e:{for(lt=oe.key;Z!==null;){if(Z.key===lt)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){s(ne,Z.sibling),be=u(Z,oe.children||[]),be.return=ne,ne=be;break e}else{s(ne,Z);break}else i(ne,Z);Z=Z.sibling}be=_f(oe,ne.mode,be),be.return=ne,ne=be}return x(ne);case A:return oe=Ks(oe),an(ne,Z,oe,be)}if(ie(oe))return et(ne,Z,oe,be);if(j(oe)){if(lt=j(oe),typeof lt!="function")throw Error(r(150));return oe=lt.call(oe),ct(ne,Z,oe,be)}if(typeof oe.then=="function")return an(ne,Z,ic(oe),be);if(oe.$$typeof===L)return an(ne,Z,$o(ne,oe),be);ac(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(s(ne,Z.sibling),be=u(Z,oe),be.return=ne,ne=be):(s(ne,Z),be=gf(oe,ne.mode,be),be.return=ne,ne=be),x(ne)):s(ne,Z)}return function(ne,Z,oe,be){try{Fl=0;var lt=an(ne,Z,oe,be);return wr=null,lt}catch(nt){if(nt===Cr||nt===tc)throw nt;var Ft=Si(29,nt,null,ne.mode);return Ft.lanes=be,Ft.return=ne,Ft}finally{}}}var js=p0(!0),m0=p0(!1),ns=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function is(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function as(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(kt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Ko(t),Jm(t,null,s),i}return Zo(t,l,i,s),Ko(t)}function kl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ti(t,s)}}function Nf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Uf=!1;function Gl(){if(Uf){var t=Rr;if(t!==null)throw t}}function Vl(t,i,s,l){Uf=!1;var u=t.updateQueue;ns=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var G=D,ce=G.next;G.next=null,x===null?d=ce:x.next=ce,x=G;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,D=Ee.lastBaseUpdate,D!==x&&(D===null?Ee.firstBaseUpdate=ce:D.next=ce,Ee.lastBaseUpdate=G))}if(d!==null){var Te=u.baseState;x=0,Ee=ce=G=null,D=d;do{var pe=D.lane&-536870913,ye=pe!==D.lane;if(ye?(Ct&pe)===pe:(l&pe)===pe){pe!==0&&pe===Ar&&(Uf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var et=t,ct=D;pe=i;var an=s;switch(ct.tag){case 1:if(et=ct.payload,typeof et=="function"){Te=et.call(an,Te,pe);break e}Te=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ct.payload,pe=typeof et=="function"?et.call(an,Te,pe):et,pe==null)break e;Te=E({},Te,pe);break e;case 2:ns=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[pe]:ye.push(pe))}else ye={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ee===null?(ce=Ee=ye,G=Te):Ee=Ee.next=ye,x|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Ee===null&&(G=Te),u.baseState=G,u.firstBaseUpdate=ce,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),cs|=x,t.lanes=x,t.memoizedState=Te}}function g0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function _0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)g0(s[t],i)}var Dr=z(null),sc=z(0);function v0(t,i){t=Ua,Me(sc,t),Me(Dr,i),Ua=t|i.baseLanes}function Lf(){Me(sc,Ua),Me(Dr,Dr.current)}function Of(){Ua=sc.current,K(Dr),K(sc)}var Ei=z(null),zi=null;function ss(t){var i=t.alternate;Me(Mn,Mn.current&1),Me(Ei,t),zi===null&&(i===null||Dr.current!==null||i.memoizedState!==null)&&(zi=t)}function If(t){Me(Mn,Mn.current),Me(Ei,t),zi===null&&(zi=t)}function y0(t){t.tag===22?(Me(Mn,Mn.current),Me(Ei,t),zi===null&&(zi=t)):rs()}function rs(){Me(Mn,Mn.current),Me(Ei,Ei.current)}function Mi(t){K(Ei),zi===t&&(zi=null),K(Mn)}var Mn=z(0);function rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||kd(s)||Gd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ba=0,yt=null,tn=null,Cn=null,lc=!1,Nr=!1,Js=!1,oc=0,Xl=0,Ur=null,_S=0;function Sn(){throw Error(r(321))}function Pf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!xi(t[s],i[s]))return!1;return!0}function zf(t,i,s,l,u,d){return ba=d,yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?ng:Jf,Js=!1,d=s(l,u),Js=!1,Nr&&(d=S0(i,s,l,u)),x0(t),d}function x0(t){F.H=ql;var i=tn!==null&&tn.next!==null;if(ba=0,Cn=tn=yt=null,lc=!1,Xl=0,Ur=null,i)throw Error(r(300));t===null||wn||(t=t.dependencies,t!==null&&Jo(t)&&(wn=!0))}function S0(t,i,s,l){yt=t;var u=0;do{if(Nr&&(Ur=null),Xl=0,Nr=!1,25<=u)throw Error(r(301));if(u+=1,Cn=tn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=ig,d=i(s,l)}while(Nr);return d}function vS(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Wl(i):i,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(yt.flags|=1024),i}function Bf(){var t=oc!==0;return oc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Hf(t){if(lc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}lc=!1}ba=0,Cn=tn=yt=null,Nr=!1,Xl=oc=0,Ur=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?yt.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function bn(){if(tn===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=Cn===null?yt.memoizedState:Cn.next;if(i!==null)Cn=i,tn=t;else{if(t===null)throw yt.alternate===null?Error(r(467)):Error(r(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Cn===null?yt.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(t){var i=Xl;return Xl+=1,Ur===null&&(Ur=[]),t=f0(Ur,t,i),i=yt,(Cn===null?i.memoizedState:Cn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?ng:Jf),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wl(t);if(t.$$typeof===L)return Xn(t)}throw Error(r(438,String(t)))}function kf(t){var i=null,s=yt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=yt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cc(),yt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Y;return i.index++,s}function Ta(t,i){return typeof i=="function"?i(t):i}function fc(t){var i=bn();return Gf(i,tn,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var D=x=null,G=null,ce=i,Ee=!1;do{var Te=ce.lane&-536870913;if(Te!==ce.lane?(Ct&Te)===Te:(ba&Te)===Te){var pe=ce.revertLane;if(pe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Te===Ar&&(Ee=!0);else if((ba&pe)===pe){ce=ce.next,pe===Ar&&(Ee=!0);continue}else Te={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(D=G=Te,x=d):G=G.next=Te,yt.lanes|=pe,cs|=pe;Te=ce.action,Js&&s(d,Te),d=ce.hasEagerState?ce.eagerState:s(d,Te)}else pe={lane:Te,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},G===null?(D=G=pe,x=d):G=G.next=pe,yt.lanes|=Te,cs|=Te;ce=ce.next}while(ce!==null&&ce!==i);if(G===null?x=d:G.next=D,!xi(d,t.memoizedState)&&(wn=!0,Ee&&(s=Rr,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=G,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=bn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);xi(d,i.memoizedState)||(wn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function E0(t,i,s){var l=yt,u=bn(),d=Dt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var x=!xi((tn||u).memoizedState,s);if(x&&(u.memoizedState=s,wn=!0),u=u.queue,Yf(T0.bind(null,l,u,t),[t]),u.getSnapshot!==i||x||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,Lr(9,{destroy:void 0},b0.bind(null,l,u,s,i),null),cn===null)throw Error(r(349));d||(ba&127)!==0||M0(l,i,s)}return s}function M0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=yt.updateQueue,i===null?(i=cc(),yt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function b0(t,i,s,l){i.value=s,i.getSnapshot=l,A0(i)&&R0(t)}function T0(t,i,s){return s(function(){A0(i)&&R0(t)})}function A0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!xi(t,s)}catch{return!0}}function R0(t){var i=Vs(t,2);i!==null&&hi(i,t,2)}function Xf(t){var i=ai();if(typeof t=="function"){var s=t;if(t=s(),Js){_e(!0);try{s()}finally{_e(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},i}function C0(t,i,s,l){return t.baseState=s,Gf(t,tn,typeof l=="function"?l:Ta)}function yS(t,i,s,l,u){if(pc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};F.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,w0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function w0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=F.T,x={};F.T=x;try{var D=s(u,l),G=F.S;G!==null&&G(x,D),D0(t,i,D)}catch(ce){Wf(t,i,ce)}finally{d!==null&&x.types!==null&&(d.types=x.types),F.T=d}}else try{d=s(u,l),D0(t,i,d)}catch(ce){Wf(t,i,ce)}}function D0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){N0(t,i,l)},function(l){return Wf(t,i,l)}):N0(t,i,s)}function N0(t,i,s){i.status="fulfilled",i.value=s,U0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,w0(t,s)))}function Wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,U0(i),i=i.next;while(i!==l)}t.action=null}function U0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function L0(t,i){return i}function O0(t,i){if(Dt){var s=cn.formState;if(s!==null){e:{var l=yt;if(Dt){if(fn){t:{for(var u=fn,d=Pi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Bi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){fn=Bi(u.nextSibling),l=u.data==="F!";break e}}es(l)}l=!1}l&&(i=s[0])}}return s=ai(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L0,lastRenderedState:i},s.queue=l,s=$0.bind(null,yt,l),l.dispatch=s,l=Xf(!1),d=jf.bind(null,yt,!1,l.queue),l=ai(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=yS.bind(null,yt,u,d,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function I0(t){var i=bn();return P0(i,tn,t)}function P0(t,i,s){if(i=Gf(t,i,L0)[0],t=fc(Ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Wl(i)}catch(x){throw x===Cr?tc:x}else l=i;i=bn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(yt.flags|=2048,Lr(9,{destroy:void 0},xS.bind(null,u,s),null)),[l,d,t]}function xS(t,i){t.action=i}function z0(t){var i=bn(),s=tn;if(s!==null)return P0(i,s,t);bn(),i=i.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Lr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=yt.updateQueue,i===null&&(i=cc(),yt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function B0(){return bn().memoizedState}function dc(t,i,s,l){var u=ai();yt.flags|=t,u.memoizedState=Lr(1|i,{destroy:void 0},s,l===void 0?null:l)}function hc(t,i,s,l){var u=bn();l=l===void 0?null:l;var d=u.memoizedState.inst;tn!==null&&l!==null&&Pf(l,tn.memoizedState.deps)?u.memoizedState=Lr(i,d,s,l):(yt.flags|=t,u.memoizedState=Lr(1|i,d,s,l))}function F0(t,i){dc(8390656,8,t,i)}function Yf(t,i){hc(2048,8,t,i)}function SS(t){yt.flags|=4;var i=yt.updateQueue;if(i===null)i=cc(),yt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function H0(t){var i=bn().memoizedState;return SS({ref:i,nextImpl:t}),function(){if((kt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function k0(t,i){return hc(4,2,t,i)}function G0(t,i){return hc(4,4,t,i)}function V0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function X0(t,i,s){s=s!=null?s.concat([t]):null,hc(4,4,V0.bind(null,i,t),s)}function qf(){}function W0(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Y0(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pf(i,l[1]))return l[0];if(l=t(),Js){_e(!0);try{t()}finally{_e(!1)}}return s.memoizedState=[l,i],l}function Zf(t,i,s){return s===void 0||(ba&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=qg(),yt.lanes|=t,cs|=t,s)}function q0(t,i,s,l){return xi(s,i)?s:Dr.current!==null?(t=Zf(t,s,l),xi(t,i)||(wn=!0),t):(ba&42)===0||(ba&1073741824)!==0&&(Ct&261930)===0?(wn=!0,t.memoizedState=s):(t=qg(),yt.lanes|=t,cs|=t,i)}function Z0(t,i,s,l,u){var d=X.p;X.p=d!==0&&8>d?d:8;var x=F.T,D={};F.T=D,jf(t,!1,i,s);try{var G=u(),ce=F.S;if(ce!==null&&ce(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Ee=gS(G,l);Yl(t,i,Ee,Ai(t))}else Yl(t,i,l,Ai(t))}catch(Te){Yl(t,i,{then:function(){},status:"rejected",reason:Te},Ai())}finally{X.p=d,x!==null&&D.types!==null&&(x.types=D.types),F.T=x}}function ES(){}function Kf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=K0(t).queue;Z0(t,u,i,le,s===null?ES:function(){return Q0(t),s(l)})}function K0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:le},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Q0(t){var i=K0(t);i.next===null&&(i=t.alternate.memoizedState),Yl(t,i.next.queue,{},Ai())}function Qf(){return Xn(co)}function j0(){return bn().memoizedState}function J0(){return bn().memoizedState}function MS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ai();t=is(s);var l=as(i,t,s);l!==null&&(hi(l,i,s),kl(l,i,s)),i={cache:Tf()},t.payload=i;return}i=i.return}}function bS(t,i,s){var l=Ai();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)?eg(i,s):(s=pf(t,i,s,l),s!==null&&(hi(s,t,l),tg(s,i,l)))}function $0(t,i,s){var l=Ai();Yl(t,i,s,l)}function Yl(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(t))eg(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,D=d(x,s);if(u.hasEagerState=!0,u.eagerState=D,xi(D,x))return Zo(t,i,u,0),cn===null&&qo(),!1}catch{}finally{}if(s=pf(t,i,u,l),s!==null)return hi(s,t,l),tg(s,i,l),!0}return!1}function jf(t,i,s,l){if(l={lane:2,revertLane:wd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(i)throw Error(r(479))}else i=pf(t,s,l,2),i!==null&&hi(i,t,2)}function pc(t){var i=t.alternate;return t===yt||i!==null&&i===yt}function eg(t,i){Nr=lc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function tg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ti(t,s)}}var ql={readContext:Xn,use:uc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};ql.useEffectEvent=Sn;var ng={readContext:Xn,use:uc,useCallback:function(t,i){return ai().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:F0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,dc(4194308,4,V0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return dc(4194308,4,t,i)},useInsertionEffect:function(t,i){dc(4,2,t,i)},useMemo:function(t,i){var s=ai();i=i===void 0?null:i;var l=t();if(Js){_e(!0);try{t()}finally{_e(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ai();if(s!==void 0){var u=s(i);if(Js){_e(!0);try{s(i)}finally{_e(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=bS.bind(null,yt,t),[l.memoizedState,t]},useRef:function(t){var i=ai();return t={current:t},i.memoizedState=t},useState:function(t){t=Xf(t);var i=t.queue,s=$0.bind(null,yt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=ai();return Zf(s,t,i)},useTransition:function(){var t=Xf(!1);return t=Z0.bind(null,yt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=yt,u=ai();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),cn===null)throw Error(r(349));(Ct&127)!==0||M0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,F0(T0.bind(null,l,d,t),[t]),l.flags|=2048,Lr(9,{destroy:void 0},b0.bind(null,l,d,s,i),null),s},useId:function(){var t=ai(),i=cn.identifierPrefix;if(Dt){var s=ia,l=na;s=(l&~(1<<32-Ne(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=oc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=_S++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Qf,useFormState:O0,useActionState:O0,useOptimistic:function(t){var i=ai();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=jf.bind(null,yt,!0,s),s.dispatch=i,[t,i]},useMemoCache:kf,useCacheRefresh:function(){return ai().memoizedState=MS.bind(null,yt)},useEffectEvent:function(t){var i=ai(),s={impl:t};return i.memoizedState=s,function(){if((kt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Jf={readContext:Xn,use:uc,useCallback:W0,useContext:Xn,useEffect:Yf,useImperativeHandle:X0,useInsertionEffect:k0,useLayoutEffect:G0,useMemo:Y0,useReducer:fc,useRef:B0,useState:function(){return fc(Ta)},useDebugValue:qf,useDeferredValue:function(t,i){var s=bn();return q0(s,tn.memoizedState,t,i)},useTransition:function(){var t=fc(Ta)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Wl(t),i]},useSyncExternalStore:E0,useId:j0,useHostTransitionStatus:Qf,useFormState:I0,useActionState:I0,useOptimistic:function(t,i){var s=bn();return C0(s,tn,t,i)},useMemoCache:kf,useCacheRefresh:J0};Jf.useEffectEvent=H0;var ig={readContext:Xn,use:uc,useCallback:W0,useContext:Xn,useEffect:Yf,useImperativeHandle:X0,useInsertionEffect:k0,useLayoutEffect:G0,useMemo:Y0,useReducer:Vf,useRef:B0,useState:function(){return Vf(Ta)},useDebugValue:qf,useDeferredValue:function(t,i){var s=bn();return tn===null?Zf(s,t,i):q0(s,tn.memoizedState,t,i)},useTransition:function(){var t=Vf(Ta)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Wl(t),i]},useSyncExternalStore:E0,useId:j0,useHostTransitionStatus:Qf,useFormState:z0,useActionState:z0,useOptimistic:function(t,i){var s=bn();return tn!==null?C0(s,tn,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:kf,useCacheRefresh:J0};ig.useEffectEvent=H0;function $f(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:E({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ed={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ai(),u=is(l);u.payload=i,s!=null&&(u.callback=s),i=as(t,u,l),i!==null&&(hi(i,t,l),kl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ai(),u=is(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=as(t,u,l),i!==null&&(hi(i,t,l),kl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ai(),l=is(s);l.tag=2,i!=null&&(l.callback=i),i=as(t,l,s),i!==null&&(hi(i,t,s),kl(i,t,s))}};function ag(t,i,s,l,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,x):i.prototype&&i.prototype.isPureReactComponent?!Ll(s,l)||!Ll(u,d):!0}function sg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ed.enqueueReplaceState(i,i.state,null)}function $s(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=E({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function rg(t){Yo(t)}function lg(t){console.error(t)}function og(t){Yo(t)}function mc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function td(t,i,s){return s=is(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,i)},s}function ug(t){return t=is(t),t.tag=3,t}function fg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){cg(i,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){cg(i,s,l),typeof u!="function"&&(us===null?us=new Set([this]):us.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function TS(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Tr(i,s,u,!0),s=Ei.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Rc():s.alternate===null&&En===0&&(En=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ad(t,l,u)),!1;case 22:return s.flags|=65536,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ad(t,l,u)),!1}throw Error(r(435,s.tag))}return Ad(t,l,u),Rc(),!1}if(Dt)return i=Ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==xf&&(t=Error(r(422),{cause:l}),Pl(Li(t,s)))):(l!==xf&&(i=Error(r(423),{cause:l}),Pl(Li(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=Li(l,s),u=td(t.stateNode,l,u),Nf(t,u),En!==4&&(En=2)),!1;var d=Error(r(520),{cause:l});if(d=Li(d,s),to===null?to=[d]:to.push(d),En!==4&&(En=2),i===null)return!0;l=Li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=td(s.stateNode,l,t),Nf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(us===null||!us.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=ug(u),fg(u,t,s,l),Nf(s,u),!1}s=s.return}while(s!==null);return!1}var nd=Error(r(461)),wn=!1;function Wn(t,i,s,l){i.child=t===null?m0(i,null,s,l):js(i,t.child,s,l)}function dg(t,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var x={};for(var D in l)D!=="ref"&&(x[D]=l[D])}else x=l;return qs(i),l=zf(t,i,s,x,d,u),D=Bf(),t!==null&&!wn?(Ff(t,i,u),Aa(t,i,u)):(Dt&&D&&vf(i),i.flags|=1,Wn(t,i,l,u),i.child)}function hg(t,i,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!mf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,pg(t,i,d,l,u)):(t=Qo(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!ud(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ll,s(x,l)&&t.ref===i.ref)return Aa(t,i,u)}return i.flags|=1,t=xa(d,l),t.ref=i.ref,t.return=i,i.child=t}function pg(t,i,s,l,u){if(t!==null){var d=t.memoizedProps;if(Ll(d,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=d,ud(t,u))(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Aa(t,i,u)}return id(t,i,s,l,u)}function mg(t,i,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return gg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(i,d!==null?d.cachePool:null),d!==null?v0(i,d):Lf(),y0(i);else return l=i.lanes=536870912,gg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(ec(i,d.cachePool),v0(i,d),rs(),i.memoizedState=null):(t!==null&&ec(i,null),Lf(),rs());return Wn(t,i,u,s),i.child}function Zl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function gg(t,i,s,l,u){var d=Rf();return d=d===null?null:{parent:Rn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ec(i,null),Lf(),y0(i),t!==null&&Tr(t,i,l,!0),i.childLanes=u,null}function gc(t,i){return i=vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function _g(t,i,s){return js(i,t.child,null,s),t=gc(i,i.pendingProps),t.flags|=2,Mi(i),i.memoizedState=null,t}function AS(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=gc(i,l),i.lanes=536870912,Zl(null,t);if(If(i),(t=fn)?(t=w_(t,Pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=e0(t),s.return=i,i.child=s,Vn=i,fn=null)):t=null,t===null)throw es(i);return i.lanes=536870912,null}return gc(i,l)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(If(i),u)if(i.flags&256)i.flags&=-257,i=_g(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(wn||Tr(t,i,s,!1),u=(s&t.childLanes)!==0,wn||u){if(l=cn,l!==null&&(x=ni(l,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Vs(t,x),hi(l,t,x),nd;Rc(),i=_g(t,i,s)}else t=d.treeContext,fn=Bi(x.nextSibling),Vn=i,Dt=!0,$a=null,Pi=!1,t!==null&&i0(i,t),i=gc(i,l),i.flags|=4096;return i}return t=xa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function _c(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function id(t,i,s,l,u){return qs(i),s=zf(t,i,s,l,void 0,u),l=Bf(),t!==null&&!wn?(Ff(t,i,u),Aa(t,i,u)):(Dt&&l&&vf(i),i.flags|=1,Wn(t,i,s,u),i.child)}function vg(t,i,s,l,u,d){return qs(i),i.updateQueue=null,s=S0(i,l,s,u),x0(t),l=Bf(),t!==null&&!wn?(Ff(t,i,d),Aa(t,i,d)):(Dt&&l&&vf(i),i.flags|=1,Wn(t,i,s,d),i.child)}function yg(t,i,s,l,u){if(qs(i),i.stateNode===null){var d=Sr,x=s.contextType;typeof x=="object"&&x!==null&&(d=Xn(x)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},wf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Xn(x):Sr,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&($f(i,s,x,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ed.enqueueReplaceState(d,d.state,null),Vl(i,l,d,u),Gl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var D=i.memoizedProps,G=$s(s,D);d.props=G;var ce=d.context,Ee=s.contextType;x=Sr,typeof Ee=="object"&&Ee!==null&&(x=Xn(Ee));var Te=s.getDerivedStateFromProps;Ee=typeof Te=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||ce!==x)&&sg(i,d,l,x),ns=!1;var pe=i.memoizedState;d.state=pe,Vl(i,l,d,u),Gl(),ce=i.memoizedState,D||pe!==ce||ns?(typeof Te=="function"&&($f(i,s,Te,l),ce=i.memoizedState),(G=ns||ag(i,s,G,l,pe,ce,x))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=x,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Df(t,i),x=i.memoizedProps,Ee=$s(s,x),d.props=Ee,Te=i.pendingProps,pe=d.context,ce=s.contextType,G=Sr,typeof ce=="object"&&ce!==null&&(G=Xn(ce)),D=s.getDerivedStateFromProps,(ce=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Te||pe!==G)&&sg(i,d,l,G),ns=!1,pe=i.memoizedState,d.state=pe,Vl(i,l,d,u),Gl();var ye=i.memoizedState;x!==Te||pe!==ye||ns||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof D=="function"&&($f(i,s,D,l),ye=i.memoizedState),(Ee=ns||ag(i,s,Ee,l,pe,ye,G)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(ce||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ye,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ye,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ye),d.props=l,d.state=ye,d.context=G,l=Ee):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,_c(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=js(i,t.child,null,u),i.child=js(i,null,s,u)):Wn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=Aa(t,i,u),t}function xg(t,i,s,l){return Ws(),i.flags|=256,Wn(t,i,s,l),i.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(t){return{baseLanes:t,cachePool:c0()}}function rd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ti),t}function Sg(t,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(u?ss(i):rs(),(t=fn)?(t=w_(t,Pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=e0(t),s.return=i,i.child=s,Vn=i,fn=null)):t=null,t===null)throw es(i);return Gd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,u?(rs(),u=i.mode,D=vc({mode:"hidden",children:D},u),l=Xs(l,u,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=sd(s),l.childLanes=rd(t,x,s),i.memoizedState=ad,Zl(null,l)):(ss(i),ld(i,D))}var G=t.memoizedState;if(G!==null&&(D=G.dehydrated,D!==null)){if(d)i.flags&256?(ss(i),i.flags&=-257,i=od(t,i,s)):i.memoizedState!==null?(rs(),i.child=t.child,i.flags|=128,i=null):(rs(),D=l.fallback,u=i.mode,l=vc({mode:"visible",children:l.children},u),D=Xs(D,u,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,js(i,t.child,null,s),l=i.child,l.memoizedState=sd(s),l.childLanes=rd(t,x,s),i.memoizedState=ad,i=Zl(null,l));else if(ss(i),Gd(D)){if(x=D.nextSibling&&D.nextSibling.dataset,x)var ce=x.dgst;x=ce,l=Error(r(419)),l.stack="",l.digest=x,Pl({value:l,source:null,stack:null}),i=od(t,i,s)}else if(wn||Tr(t,i,s,!1),x=(s&t.childLanes)!==0,wn||x){if(x=cn,x!==null&&(l=ni(x,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Vs(t,l),hi(x,t,l),nd;kd(D)||Rc(),i=od(t,i,s)}else kd(D)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,fn=Bi(D.nextSibling),Vn=i,Dt=!0,$a=null,Pi=!1,t!==null&&i0(i,t),i=ld(i,l.children),i.flags|=4096);return i}return u?(rs(),D=l.fallback,u=i.mode,G=t.child,ce=G.sibling,l=xa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ce!==null?D=xa(ce,D):(D=Xs(D,u,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,Zl(null,l),l=i.child,D=t.child.memoizedState,D===null?D=sd(s):(u=D.cachePool,u!==null?(G=Rn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=c0(),D={baseLanes:D.baseLanes|s,cachePool:u}),l.memoizedState=D,l.childLanes=rd(t,x,s),i.memoizedState=ad,Zl(t.child,l)):(ss(i),s=t.child,t=s.sibling,s=xa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function ld(t,i){return i=vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function vc(t,i){return t=Si(22,t,null,i),t.lanes=0,t}function od(t,i,s){return js(i,t.child,null,s),t=ld(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Eg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function cd(t,i,s,l,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function Mg(t,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var x=Mn.current,D=(x&2)!==0;if(D?(x=x&1|2,i.flags|=128):x&=1,Me(Mn,x),Wn(t,i,l,s),l=Dt?Il:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,s,i);else if(t.tag===19)Eg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),cd(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&rc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}cd(i,!0,s,null,d,l);break;case"together":cd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Aa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),cs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Tr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=xa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=xa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function RS(t,i,s){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),ts(i,Rn,t.memoizedState.cache),Ws();break;case 27:case 5:st(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,If(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ss(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Sg(t,i,s):(ss(i),t=Aa(t,i,s),t!==null?t.sibling:null);ss(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Tr(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return Mg(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(Mn,Mn.current),l)break;return null;case 22:return i.lanes=0,mg(t,i,s,i.pendingProps);case 24:ts(i,Rn,t.memoizedState.cache)}return Aa(t,i,s)}function bg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)wn=!0;else{if(!ud(t,s)&&(i.flags&128)===0)return wn=!1,RS(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,Dt&&(i.flags&1048576)!==0&&n0(i,Il,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ks(i.elementType),i.type=t,typeof t=="function")mf(t)?(l=$s(t,l),i.tag=1,i=yg(null,i,t,l,s)):(i.tag=0,i=id(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===M){i.tag=11,i=dg(null,i,t,l,s);break e}else if(u===B){i.tag=14,i=hg(null,i,t,l,s);break e}}throw i=me(t)||t,Error(r(306,i,""))}}return i;case 0:return id(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=$s(l,i.pendingProps),yg(t,i,l,u,s);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Df(t,i),Vl(i,l,null,s);var x=i.memoizedState;if(l=x.cache,ts(i,Rn,l),l!==d.cache&&bf(i,[Rn],s,!0),Gl(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=xg(t,i,l,s);break e}else if(l!==u){u=Li(Error(r(424)),i),Pl(u),i=xg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(fn=Bi(t.firstChild),Vn=i,Dt=!0,$a=null,Pi=!0,s=m0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ws(),l===u){i=Aa(t,i,s);break e}Wn(t,i,l,s)}i=i.child}return i;case 26:return _c(t,i),t===null?(s=I_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,l=Oc(ae.current).createElement(s),l[vn]=i,l[Tn]=t,Yn(l,s,t),An(l),i.stateNode=l):i.memoizedState=I_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return st(i),t===null&&Dt&&(l=i.stateNode=U_(i.type,i.pendingProps,ae.current),Vn=i,Pi=!0,u=fn,ps(i.type)?(Vd=u,fn=Bi(l.firstChild)):fn=u),Wn(t,i,i.pendingProps.children,s),_c(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((u=l=fn)&&(l=iE(l,i.type,i.pendingProps,Pi),l!==null?(i.stateNode=l,Vn=i,fn=Bi(l.firstChild),Pi=!1,u=!0):u=!1),u||es(i)),st(i),u=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,l=d.children,Bd(u,d)?l=null:x!==null&&Bd(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=zf(t,i,vS,null,null,s),co._currentValue=u),_c(t,i),Wn(t,i,l,s),i.child;case 6:return t===null&&Dt&&((t=s=fn)&&(s=aE(s,i.pendingProps,Pi),s!==null?(i.stateNode=s,Vn=i,fn=null,t=!0):t=!1),t||es(i)),null;case 13:return Sg(t,i,s);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=js(i,null,l,s):Wn(t,i,l,s),i.child;case 11:return dg(t,i,i.type,i.pendingProps,s);case 7:return Wn(t,i,i.pendingProps,s),i.child;case 8:return Wn(t,i,i.pendingProps.children,s),i.child;case 12:return Wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ts(i,i.type,l.value),Wn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,qs(i),u=Xn(u),l=l(u),i.flags|=1,Wn(t,i,l,s),i.child;case 14:return hg(t,i,i.type,i.pendingProps,s);case 15:return pg(t,i,i.type,i.pendingProps,s);case 19:return Mg(t,i,s);case 31:return AS(t,i,s);case 22:return mg(t,i,s,i.pendingProps);case 24:return qs(i),l=Xn(Rn),t===null?(u=Rf(),u===null&&(u=cn,d=Tf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},wf(i),ts(i,Rn,u)):((t.lanes&s)!==0&&(Df(t,i),Vl(i,null,null,s),Gl()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ts(i,Rn,l)):(l=d.cache,ts(i,Rn,l),l!==u.cache&&bf(i,[Rn],s,!0))),Wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ra(t){t.flags|=4}function fd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(jg())t.flags|=8192;else throw Qs=nc,Cf}else t.flags&=-16777217}function Tg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(i))if(jg())t.flags|=8192;else throw Qs=nc,Cf}function yc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ce():536870912,t.lanes|=i,zr|=i)}function Kl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function CS(t,i,s){var l=i.pendingProps;switch(yf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ma(Rn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(br(i)?Ra(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sf())),dn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(Ra(i),d!==null?(dn(i),Tg(i,d)):(dn(i),fd(i,u,null,l,s))):d?d!==t.memoizedState?(Ra(i),dn(i),Tg(i,d)):(dn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ra(i),dn(i),fd(i,u,t,l,s)),null;case 27:if(tt(i),s=ae.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}t=Oe.current,br(i)?a0(i):(t=U_(u,l,s),i.stateNode=t,Ra(i))}return dn(i),null;case 5:if(tt(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}if(d=Oe.current,br(i))a0(i);else{var x=Oc(ae.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(u,{is:l.is}):x.createElement(u)}}d[vn]=i,d[Tn]=l;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(Yn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ra(i)}}return dn(i),fd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ra(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ae.current,br(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=Vn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[vn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||S_(t.nodeValue,s)),t||es(i,!0)}else t=Oc(t).createTextNode(l),t[vn]=i,i.stateNode=t}return dn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=br(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[vn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),t=!1}else s=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return dn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=br(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[vn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),u=!1}else u=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),yc(i,i.updateQueue),dn(i),null);case 4:return Fe(),t===null&&Ld(i.stateNode.containerInfo),dn(i),null;case 10:return Ma(i.type),dn(i),null;case 19:if(K(Mn),l=i.memoizedState,l===null)return dn(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Kl(l,!1);else{if(En!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=rc(t),d!==null){for(i.flags|=128,Kl(l,!1),t=d.updateQueue,i.updateQueue=t,yc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)$m(s,t),s=s.sibling;return Me(Mn,Mn.current&1|2),Dt&&Sa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Lt()>bc&&(i.flags|=128,u=!0,Kl(l,!1),i.lanes=4194304)}else{if(!u)if(t=rc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,yc(i,t),Kl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Dt)return dn(i),null}else 2*Lt()-l.renderingStartTime>bc&&s!==536870912&&(i.flags|=128,u=!0,Kl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Lt(),t.sibling=null,s=Mn.current,Me(Mn,u?s&1|2:s&1),Dt&&Sa(i,l.treeForkCount),t):(dn(i),null);case 22:case 23:return Mi(i),Of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),s=i.updateQueue,s!==null&&yc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&K(Zs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ma(Rn),dn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function wS(t,i){switch(yf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ma(Rn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return tt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(r(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Mi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(Mn),null;case 4:return Fe(),null;case 10:return Ma(i.type),null;case 22:case 23:return Mi(i),Of(),t!==null&&K(Zs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ma(Rn),null;case 25:return null;default:return null}}function Ag(t,i){switch(yf(i),i.tag){case 3:Ma(Rn),Fe();break;case 26:case 27:case 5:tt(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:K(Mn);break;case 10:Ma(i.type);break;case 22:case 23:Mi(i),Of(),t!==null&&K(Zs);break;case 24:Ma(Rn)}}function Ql(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,x=s.inst;l=d(),x.destroy=l}s=s.next}while(s!==u)}}catch(D){jt(i,i.return,D)}}function ls(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var x=l.inst,D=x.destroy;if(D!==void 0){x.destroy=void 0,u=i;var G=s,ce=D;try{ce()}catch(Ee){jt(u,G,Ee)}}}l=l.next}while(l!==d)}}catch(Ee){jt(i,i.return,Ee)}}function Rg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{_0(i,s)}catch(l){jt(t,t.return,l)}}}function Cg(t,i,s){s.props=$s(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){jt(t,i,l)}}function jl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){jt(t,i,u)}}function aa(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){jt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){jt(t,i,u)}else s.current=null}function wg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){jt(t,t.return,u)}}function dd(t,i,s){try{var l=t.stateNode;jS(l,t.type,s,i),l[Tn]=i}catch(u){jt(t,t.return,u)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ps(t.type)||t.tag===4}function hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ps(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=va));else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(pd(t,i,s),t=t.sibling;t!==null;)pd(t,i,s),t=t.sibling}function xc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ps(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(xc(t,i,s),t=t.sibling;t!==null;)xc(t,i,s),t=t.sibling}function Ng(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Yn(i,l,s),i[vn]=t,i[Tn]=s}catch(d){jt(t,t.return,d)}}var Ca=!1,Dn=!1,md=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function DS(t,i){if(t=t.containerInfo,Pd=kc,t=Xm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,D=-1,G=-1,ce=0,Ee=0,Te=t,pe=null;t:for(;;){for(var ye;Te!==s||u!==0&&Te.nodeType!==3||(D=x+u),Te!==d||l!==0&&Te.nodeType!==3||(G=x+l),Te.nodeType===3&&(x+=Te.nodeValue.length),(ye=Te.firstChild)!==null;)pe=Te,Te=ye;for(;;){if(Te===t)break t;if(pe===s&&++ce===u&&(D=x),pe===d&&++Ee===l&&(G=x),(ye=Te.nextSibling)!==null)break;Te=pe,pe=Te.parentNode}Te=ye}s=D===-1||G===-1?null:{start:D,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(zd={focusedElem:t,selectionRange:s},kc=!1,Bn=i;Bn!==null;)if(i=Bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Bn=t;else for(;Bn!==null;){switch(i=Bn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var et=$s(s.type,u);t=l.getSnapshotBeforeUpdate(et,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){jt(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Hd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Bn=t;break}Bn=i.return}}function Lg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Da(t,s),l&4&&Ql(5,s);break;case 1:if(Da(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){jt(s,s.return,x)}else{var u=$s(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){jt(s,s.return,x)}}l&64&&Rg(s),l&512&&jl(s,s.return);break;case 3:if(Da(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_0(t,i)}catch(x){jt(s,s.return,x)}}break;case 27:i===null&&l&4&&Ng(s);case 26:case 5:Da(t,s),i===null&&l&4&&wg(s),l&512&&jl(s,s.return);break;case 12:Da(t,s);break;case 31:Da(t,s),l&4&&Pg(t,s);break;case 13:Da(t,s),l&4&&zg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=FS.bind(null,s),sE(t,s))));break;case 22:if(l=s.memoizedState!==null||Ca,!l){i=i!==null&&i.memoizedState!==null||Dn,u=Ca;var d=Dn;Ca=l,(Dn=i)&&!d?Na(t,s,(s.subtreeFlags&8772)!==0):Da(t,s),Ca=u,Dn=d}break;case 30:break;default:Da(t,s)}}function Og(t){var i=t.alternate;i!==null&&(t.alternate=null,Og(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ln(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,ci=!1;function wa(t,i,s){for(s=s.child;s!==null;)Ig(t,i,s),s=s.sibling}function Ig(t,i,s){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ee,s)}catch{}switch(s.tag){case 26:Dn||aa(s,i),wa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Dn||aa(s,i);var l=gn,u=ci;ps(s.type)&&(gn=s.stateNode,ci=!1),wa(t,i,s),ro(s.stateNode),gn=l,ci=u;break;case 5:Dn||aa(s,i);case 6:if(l=gn,u=ci,gn=null,wa(t,i,s),gn=l,ci=u,gn!==null)if(ci)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(d){jt(s,i,d)}else try{gn.removeChild(s.stateNode)}catch(d){jt(s,i,d)}break;case 18:gn!==null&&(ci?(t=gn,R_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Wr(t)):R_(gn,s.stateNode));break;case 4:l=gn,u=ci,gn=s.stateNode.containerInfo,ci=!0,wa(t,i,s),gn=l,ci=u;break;case 0:case 11:case 14:case 15:ls(2,s,i),Dn||ls(4,s,i),wa(t,i,s);break;case 1:Dn||(aa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Cg(s,i,l)),wa(t,i,s);break;case 21:wa(t,i,s);break;case 22:Dn=(l=Dn)||s.memoizedState!==null,wa(t,i,s),Dn=l;break;default:wa(t,i,s)}}function Pg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wr(t)}catch(s){jt(i,i.return,s)}}}function zg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wr(t)}catch(s){jt(i,i.return,s)}}function NS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Ug),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Ug),i;default:throw Error(r(435,t.tag))}}function Sc(t,i){var s=NS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=HS.bind(null,t,l);l.then(u,u)}})}function ui(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,x=i,D=x;e:for(;D!==null;){switch(D.tag){case 27:if(ps(D.type)){gn=D.stateNode,ci=!1;break e}break;case 5:gn=D.stateNode,ci=!1;break e;case 3:case 4:gn=D.stateNode.containerInfo,ci=!0;break e}D=D.return}if(gn===null)throw Error(r(160));Ig(d,x,u),gn=null,ci=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Bg(i,t),i=i.sibling}var qi=null;function Bg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(i,t),fi(t),l&4&&(ls(3,t,t.return),Ql(3,t),ls(5,t,t.return));break;case 1:ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),l&64&&Ca&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=qi;if(ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[yn]||d[vn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Yn(d,l,s),d[vn]=t,An(d),l=d;break e;case"link":var x=B_("link","href",u).get(l+(s.href||""));if(x){for(var D=0;D<x.length;D++)if(d=x[D],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(D,1);break t}}d=u.createElement(l),Yn(d,l,s),u.head.appendChild(d);break;case"meta":if(x=B_("meta","content",u).get(l+(s.content||""))){for(D=0;D<x.length;D++)if(d=x[D],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(D,1);break t}}d=u.createElement(l),Yn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[vn]=t,An(d),l=d}t.stateNode=l}else F_(u,t.type,t.stateNode);else t.stateNode=z_(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?F_(u,t.type,t.stateNode):z_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&dd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),s!==null&&l&4&&dd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),t.flags&32){u=t.stateNode;try{yi(u,"")}catch(et){jt(t,t.return,et)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,dd(t,u,s!==null?s.memoizedProps:u)),l&1024&&(md=!0);break;case 6:if(ui(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(et){jt(t,t.return,et)}}break;case 3:if(zc=null,u=qi,qi=Ic(i.containerInfo),ui(i,t),qi=u,fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Wr(i.containerInfo)}catch(et){jt(t,t.return,et)}md&&(md=!1,Fg(t));break;case 4:l=qi,qi=Ic(t.stateNode.containerInfo),ui(i,t),fi(t),qi=l;break;case 12:ui(i,t),fi(t);break;case 31:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 13:ui(i,t),fi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Mc=Lt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ce=Ca,Ee=Dn;if(Ca=ce||u,Dn=Ee||G,ui(i,t),Dn=Ee,Ca=ce,fi(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||Ca||Dn||er(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{D=G.stateNode;var Te=G.memoizedProps.style,pe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(et){jt(G,G.return,et)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(et){jt(G,G.return,et)}}}else if(i.tag===18){if(s===null){G=i;try{var ye=G.stateNode;u?C_(ye,!0):C_(G.stateNode,!1)}catch(et){jt(G,G.return,et)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Sc(t,s))));break;case 19:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 30:break;case 21:break;default:ui(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Dg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=hd(t);xc(t,d,u);break;case 5:var x=s.stateNode;s.flags&32&&(yi(x,""),s.flags&=-33);var D=hd(t);xc(t,D,x);break;case 3:case 4:var G=s.stateNode.containerInfo,ce=hd(t);pd(t,ce,G);break;default:throw Error(r(161))}}catch(Ee){jt(t,t.return,Ee)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Fg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Da(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Lg(t,i.alternate,i),i=i.sibling}function er(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ls(4,i,i.return),er(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Cg(i,i.return,s),er(i);break;case 27:ro(i.stateNode);case 26:case 5:aa(i,i.return),er(i);break;case 22:i.memoizedState===null&&er(i);break;case 30:er(i);break;default:er(i)}t=t.sibling}}function Na(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:Na(u,d,s),Ql(4,d);break;case 1:if(Na(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){jt(l,l.return,ce)}if(l=d,u=l.updateQueue,u!==null){var D=l.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)g0(G[u],D)}catch(ce){jt(l,l.return,ce)}}s&&x&64&&Rg(d),jl(d,d.return);break;case 27:Ng(d);case 26:case 5:Na(u,d,s),s&&l===null&&x&4&&wg(d),jl(d,d.return);break;case 12:Na(u,d,s);break;case 31:Na(u,d,s),s&&x&4&&Pg(u,d);break;case 13:Na(u,d,s),s&&x&4&&zg(u,d);break;case 22:d.memoizedState===null&&Na(u,d,s),jl(d,d.return);break;case 30:break;default:Na(u,d,s)}i=i.sibling}}function gd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&zl(s))}function _d(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zl(t))}function Zi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(t,i,s,l),i=i.sibling}function Hg(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Zi(t,i,s,l),u&2048&&Ql(9,i);break;case 1:Zi(t,i,s,l);break;case 3:Zi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zl(t)));break;case 12:if(u&2048){Zi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,D=d.onPostCommit;typeof D=="function"&&D(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){jt(i,i.return,G)}}else Zi(t,i,s,l);break;case 31:Zi(t,i,s,l);break;case 13:Zi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?Zi(t,i,s,l):Jl(t,i):d._visibility&2?Zi(t,i,s,l):(d._visibility|=2,Or(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&gd(x,i);break;case 24:Zi(t,i,s,l),u&2048&&_d(i.alternate,i);break;default:Zi(t,i,s,l)}}function Or(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,D=s,G=l,ce=x.flags;switch(x.tag){case 0:case 11:case 15:Or(d,x,D,G,u),Ql(8,x);break;case 23:break;case 22:var Ee=x.stateNode;x.memoizedState!==null?Ee._visibility&2?Or(d,x,D,G,u):Jl(d,x):(Ee._visibility|=2,Or(d,x,D,G,u)),u&&ce&2048&&gd(x.alternate,x);break;case 24:Or(d,x,D,G,u),u&&ce&2048&&_d(x.alternate,x);break;default:Or(d,x,D,G,u)}i=i.sibling}}function Jl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:Jl(s,l),u&2048&&gd(l.alternate,l);break;case 24:Jl(s,l),u&2048&&_d(l.alternate,l);break;default:Jl(s,l)}i=i.sibling}}var $l=8192;function Ir(t,i,s){if(t.subtreeFlags&$l)for(t=t.child;t!==null;)kg(t,i,s),t=t.sibling}function kg(t,i,s){switch(t.tag){case 26:Ir(t,i,s),t.flags&$l&&t.memoizedState!==null&&_E(s,qi,t.memoizedState,t.memoizedProps);break;case 5:Ir(t,i,s);break;case 3:case 4:var l=qi;qi=Ic(t.stateNode.containerInfo),Ir(t,i,s),qi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=$l,$l=16777216,Ir(t,i,s),$l=l):Ir(t,i,s));break;default:Ir(t,i,s)}}function Gg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function eo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Bn=l,Xg(l,t)}Gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vg(t),t=t.sibling}function Vg(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&ls(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ec(t)):eo(t);break;default:eo(t)}}function Ec(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Bn=l,Xg(l,t)}Gg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ls(8,i,i.return),Ec(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ec(i));break;default:Ec(i)}t=t.sibling}}function Xg(t,i){for(;Bn!==null;){var s=Bn;switch(s.tag){case 0:case 11:case 15:ls(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Bn=l;else e:for(s=t;Bn!==null;){l=Bn;var u=l.sibling,d=l.return;if(Og(l),l===s){Bn=null;break e}if(u!==null){u.return=d,Bn=u;break e}Bn=d}}}var US={getCacheForType:function(t){var i=Xn(Rn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Xn(Rn).controller.signal}},LS=typeof WeakMap=="function"?WeakMap:Map,kt=0,cn=null,Tt=null,Ct=0,Qt=0,bi=null,os=!1,Pr=!1,vd=!1,Ua=0,En=0,cs=0,tr=0,yd=0,Ti=0,zr=0,to=null,di=null,xd=!1,Mc=0,Wg=0,bc=1/0,Tc=null,us=null,On=0,fs=null,Br=null,La=0,Sd=0,Ed=null,Yg=null,no=0,Md=null;function Ai(){return(kt&2)!==0&&Ct!==0?Ct&-Ct:F.T!==null?wd():Za()}function qg(){if(Ti===0)if((Ct&536870912)===0||Dt){var t=Xe;Xe<<=1,(Xe&3932160)===0&&(Xe=262144),Ti=t}else Ti=536870912;return t=Ei.current,t!==null&&(t.flags|=32),Ti}function hi(t,i,s){(t===cn&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),ds(t,Ct,Ti,!1)),qe(t,s),((kt&2)===0||t!==cn)&&(t===cn&&((kt&2)===0&&(tr|=s),En===4&&ds(t,Ct,Ti,!1)),sa(t))}function Zg(t,i,s){if((kt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Pe(t,i),u=l?PS(t,i):Td(t,i,!0),d=l;do{if(u===0){Pr&&!l&&ds(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!OS(s)){u=Td(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var D=t;u=to;var G=D.current.memoizedState.isDehydrated;if(G&&(Fr(D,x).flags|=256),x=Td(D,x,!1),x!==2){if(vd&&!G){D.errorRecoveryDisabledLanes|=d,tr|=d,u=4;break e}d=di,di=u,d!==null&&(di===null?di=d:di.push.apply(di,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Fr(t,0),ds(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ds(l,i,Ti,!os);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Mc+300-Lt(),10<u)){if(ds(l,i,Ti,!os),xe(l,0,!0)!==0)break e;La=i,l.timeoutHandle=T_(Kg.bind(null,l,s,di,Tc,xd,i,Ti,tr,zr,os,d,"Throttled",-0,0),u);break e}Kg(l,s,di,Tc,xd,i,Ti,tr,zr,os,d,null,-0,0)}}break}while(!0);sa(t)}function Kg(t,i,s,l,u,d,x,D,G,ce,Ee,Te,pe,ye){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},kg(i,d,Te);var et=(d&62914560)===d?Mc-Lt():(d&4194048)===d?Wg-Lt():0;if(et=vE(Te,et),et!==null){La=d,t.cancelPendingCommit=et(i_.bind(null,t,i,d,s,l,u,x,D,G,Ee,Te,null,pe,ye)),ds(t,d,x,!ce);return}}i_(t,i,d,s,l,u,x,D,G)}function OS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!xi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ds(t,i,s,l){i&=~yd,i&=~tr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-Ne(u),x=1<<d;l[d]=-1,u&=~x}s!==0&&zt(t,s,i)}function Ac(){return(kt&6)===0?(io(0),!1):!0}function bd(){if(Tt!==null){if(Qt===0)var t=Tt.return;else t=Tt,Ea=Ys=null,Hf(t),wr=null,Fl=0,t=Tt;for(;t!==null;)Ag(t.alternate,t),t=t.return;Tt=null}}function Fr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,eE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),La=0,bd(),cn=t,Tt=s=xa(t.current,null),Ct=i,Qt=0,bi=null,os=!1,Pr=Pe(t,i),vd=!1,zr=Ti=yd=tr=cs=En=0,di=to=null,xd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Ne(l),d=1<<u;i|=t[u],l&=~d}return Ua=i,qo(),s}function Qg(t,i){yt=null,F.H=ql,i===Cr||i===tc?(i=d0(),Qt=3):i===Cf?(i=d0(),Qt=4):Qt=i===nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bi=i,Tt===null&&(En=1,mc(t,Li(i,t.current)))}function jg(){var t=Ei.current;return t===null?!0:(Ct&4194048)===Ct?zi===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===zi:!1}function Jg(){var t=F.H;return F.H=ql,t===null?ql:t}function $g(){var t=F.A;return F.A=US,t}function Rc(){En=4,os||(Ct&4194048)!==Ct&&Ei.current!==null||(Pr=!0),(cs&134217727)===0&&(tr&134217727)===0||cn===null||ds(cn,Ct,Ti,!1)}function Td(t,i,s){var l=kt;kt|=2;var u=Jg(),d=$g();(cn!==t||Ct!==i)&&(Tc=null,Fr(t,i)),i=!1;var x=En;e:do try{if(Qt!==0&&Tt!==null){var D=Tt,G=bi;switch(Qt){case 8:bd(),x=6;break e;case 3:case 2:case 9:case 6:Ei.current===null&&(i=!0);var ce=Qt;if(Qt=0,bi=null,Hr(t,D,G,ce),s&&Pr){x=0;break e}break;default:ce=Qt,Qt=0,bi=null,Hr(t,D,G,ce)}}IS(),x=En;break}catch(Ee){Qg(t,Ee)}while(!0);return i&&t.shellSuspendCounter++,Ea=Ys=null,kt=l,F.H=u,F.A=d,Tt===null&&(cn=null,Ct=0,qo()),x}function IS(){for(;Tt!==null;)e_(Tt)}function PS(t,i){var s=kt;kt|=2;var l=Jg(),u=$g();cn!==t||Ct!==i?(Tc=null,bc=Lt()+500,Fr(t,i)):Pr=Pe(t,i);e:do try{if(Qt!==0&&Tt!==null){i=Tt;var d=bi;t:switch(Qt){case 1:Qt=0,bi=null,Hr(t,i,d,1);break;case 2:case 9:if(u0(d)){Qt=0,bi=null,t_(i);break}i=function(){Qt!==2&&Qt!==9||cn!==t||(Qt=7),sa(t)},d.then(i,i);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:u0(d)?(Qt=0,bi=null,t_(i)):(Qt=0,bi=null,Hr(t,i,d,7));break;case 5:var x=null;switch(Tt.tag){case 26:x=Tt.memoizedState;case 5:case 27:var D=Tt;if(x?H_(x):D.stateNode.complete){Qt=0,bi=null;var G=D.sibling;if(G!==null)Tt=G;else{var ce=D.return;ce!==null?(Tt=ce,Cc(ce)):Tt=null}break t}}Qt=0,bi=null,Hr(t,i,d,5);break;case 6:Qt=0,bi=null,Hr(t,i,d,6);break;case 8:bd(),En=6;break e;default:throw Error(r(462))}}zS();break}catch(Ee){Qg(t,Ee)}while(!0);return Ea=Ys=null,F.H=l,F.A=u,kt=s,Tt!==null?0:(cn=null,Ct=0,qo(),En)}function zS(){for(;Tt!==null&&!un();)e_(Tt)}function e_(t){var i=bg(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,i===null?Cc(t):Tt=i}function t_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=vg(s,i,i.pendingProps,i.type,void 0,Ct);break;case 11:i=vg(s,i,i.pendingProps,i.type.render,i.ref,Ct);break;case 5:Hf(i);default:Ag(s,i),i=Tt=$m(i,Ua),i=bg(s,i,Ua)}t.memoizedProps=t.pendingProps,i===null?Cc(t):Tt=i}function Hr(t,i,s,l){Ea=Ys=null,Hf(i),wr=null,Fl=0;var u=i.return;try{if(TS(t,u,i,s,Ct)){En=1,mc(t,Li(s,t.current)),Tt=null;return}}catch(d){if(u!==null)throw Tt=u,d;En=1,mc(t,Li(s,t.current)),Tt=null;return}i.flags&32768?(Dt||l===1?t=!0:Pr||(Ct&536870912)!==0?t=!1:(os=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),n_(i,t)):Cc(i)}function Cc(t){var i=t;do{if((i.flags&32768)!==0){n_(i,os);return}t=i.return;var s=CS(i.alternate,i,Ua);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);En===0&&(En=5)}function n_(t,i){do{var s=wS(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);En=6,Tt=null}function i_(t,i,s,l,u,d,x,D,G){t.cancelPendingCommit=null;do wc();while(On!==0);if((kt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=hf,en(t,s,d,x,D,G),t===cn&&(Tt=cn=null,Ct=0),Br=i,fs=t,La=s,Sd=d,Ed=u,Yg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kS(V,function(){return o_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=X.p,X.p=2,x=kt,kt|=4;try{DS(t,i,s)}finally{kt=x,X.p=u,F.T=l}}On=1,a_(),s_(),r_()}}function a_(){if(On===1){On=0;var t=fs,i=Br,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=X.p;X.p=2;var u=kt;kt|=4;try{Bg(i,t);var d=zd,x=Xm(t.containerInfo),D=d.focusedElem,G=d.selectionRange;if(x!==D&&D&&D.ownerDocument&&Vm(D.ownerDocument.documentElement,D)){if(G!==null&&of(D)){var ce=G.start,Ee=G.end;if(Ee===void 0&&(Ee=ce),"selectionStart"in D)D.selectionStart=ce,D.selectionEnd=Math.min(Ee,D.value.length);else{var Te=D.ownerDocument||document,pe=Te&&Te.defaultView||window;if(pe.getSelection){var ye=pe.getSelection(),et=D.textContent.length,ct=Math.min(G.start,et),an=G.end===void 0?ct:Math.min(G.end,et);!ye.extend&&ct>an&&(x=an,an=ct,ct=x);var ne=Gm(D,ct),Z=Gm(D,an);if(ne&&Z&&(ye.rangeCount!==1||ye.anchorNode!==ne.node||ye.anchorOffset!==ne.offset||ye.focusNode!==Z.node||ye.focusOffset!==Z.offset)){var oe=Te.createRange();oe.setStart(ne.node,ne.offset),ye.removeAllRanges(),ct>an?(ye.addRange(oe),ye.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),ye.addRange(oe))}}}}for(Te=[],ye=D;ye=ye.parentNode;)ye.nodeType===1&&Te.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Te.length;D++){var be=Te[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}kc=!!Pd,zd=Pd=null}finally{kt=u,X.p=l,F.T=s}}t.current=i,On=2}}function s_(){if(On===2){On=0;var t=fs,i=Br,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=X.p;X.p=2;var u=kt;kt|=4;try{Lg(t,i.alternate,i)}finally{kt=u,X.p=l,F.T=s}}On=3}}function r_(){if(On===4||On===3){On=0,Q();var t=fs,i=Br,s=La,l=Yg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?On=5:(On=0,Br=fs=null,l_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(us=null),qa(s),i=i.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,u=X.p,X.p=2,F.T=null;try{for(var d=t.onRecoverableError,x=0;x<l.length;x++){var D=l[x];d(D.value,{componentStack:D.stack})}}finally{F.T=i,X.p=u}}(La&3)!==0&&wc(),sa(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Md?no++:(no=0,Md=t):no=0,io(0)}}function l_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,zl(i)))}function wc(){return a_(),s_(),r_(),o_()}function o_(){if(On!==5)return!1;var t=fs,i=Sd;Sd=0;var s=qa(La),l=F.T,u=X.p;try{X.p=32>s?32:s,F.T=null,s=Ed,Ed=null;var d=fs,x=La;if(On=0,Br=fs=null,La=0,(kt&6)!==0)throw Error(r(331));var D=kt;if(kt|=4,Vg(d.current),Hg(d,d.current,x,s),kt=D,io(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ee,d)}catch{}return!0}finally{X.p=u,F.T=l,l_(t,i)}}function c_(t,i,s){i=Li(s,i),i=td(t.stateNode,i,2),t=as(t,i,2),t!==null&&(qe(t,2),sa(t))}function jt(t,i,s){if(t.tag===3)c_(t,t,s);else for(;i!==null;){if(i.tag===3){c_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(us===null||!us.has(l))){t=Li(s,t),s=ug(2),l=as(i,s,2),l!==null&&(fg(s,l,i,t),qe(l,2),sa(l));break}}i=i.return}}function Ad(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new LS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(vd=!0,u.add(s),t=BS.bind(null,t,i,s),i.then(t,t))}function BS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,cn===t&&(Ct&s)===s&&(En===4||En===3&&(Ct&62914560)===Ct&&300>Lt()-Mc?(kt&2)===0&&Fr(t,0):yd|=s,zr===Ct&&(zr=0)),sa(t)}function u_(t,i){i===0&&(i=Ce()),t=Vs(t,i),t!==null&&(qe(t,i),sa(t))}function FS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),u_(t,s)}function HS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),u_(t,s)}function kS(t,i){return rn(t,i)}var Dc=null,kr=null,Rd=!1,Nc=!1,Cd=!1,hs=0;function sa(t){t!==kr&&t.next===null&&(kr===null?Dc=kr=t:kr=kr.next=t),Nc=!0,Rd||(Rd=!0,VS())}function io(t,i){if(!Cd&&Nc){Cd=!0;do for(var s=!1,l=Dc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var x=l.suspendedLanes,D=l.pingedLanes;d=(1<<31-Ne(42|t)+1)-1,d&=u&~(x&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,p_(l,d))}else d=Ct,d=xe(l,l===cn?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Pe(l,d)||(s=!0,p_(l,d));l=l.next}while(s);Cd=!1}}function GS(){f_()}function f_(){Nc=Rd=!1;var t=0;hs!==0&&$S()&&(t=hs);for(var i=Lt(),s=null,l=Dc;l!==null;){var u=l.next,d=d_(l,i);d===0?(l.next=null,s===null?Dc=u:s.next=u,u===null&&(kr=s)):(s=l,(t!==0||(d&3)!==0)&&(Nc=!0)),l=u}On!==0&&On!==5||io(t),hs!==0&&(hs=0)}function d_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ne(d),D=1<<x,G=u[x];G===-1?((D&s)===0||(D&l)!==0)&&(u[x]=Be(D,i)):G<=i&&(t.expiredLanes|=D),d&=~D}if(i=cn,s=Ct,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Pt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Pt(l),qa(s)){case 2:case 8:s=y;break;case 32:s=V;break;case 268435456:s=$;break;default:s=V}return l=h_.bind(null,t),s=rn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Pt(l),t.callbackPriority=2,t.callbackNode=null,2}function h_(t,i){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var l=Ct;return l=xe(t,t===cn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Zg(t,l,i),d_(t,Lt()),t.callbackNode!=null&&t.callbackNode===s?h_.bind(null,t):null)}function p_(t,i){if(wc())return null;Zg(t,i,!0)}function VS(){tE(function(){(kt&6)!==0?rn(C,GS):f_()})}function wd(){if(hs===0){var t=Ar;t===0&&(t=Ze,Ze<<=1,(Ze&261888)===0&&(Ze=256)),hs=t}return hs}function m_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fs(""+t)}function g_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function XS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=m_((u[Tn]||null).action),x=l.submitter;x&&(i=(i=x[Tn]||null)?m_(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var D=new Vo("action","action",null,l,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hs!==0){var G=x?g_(u,x):new FormData(u);Kf(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(D.preventDefault(),G=x?g_(u,x):new FormData(u),Kf(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Dd=0;Dd<df.length;Dd++){var Nd=df[Dd],WS=Nd.toLowerCase(),YS=Nd[0].toUpperCase()+Nd.slice(1);Yi(WS,"on"+YS)}Yi(qm,"onAnimationEnd"),Yi(Zm,"onAnimationIteration"),Yi(Km,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(oS,"onTransitionRun"),Yi(cS,"onTransitionStart"),Yi(uS,"onTransitionCancel"),Yi(Qm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function __(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var x=l.length-1;0<=x;x--){var D=l[x],G=D.instance,ce=D.currentTarget;if(D=D.listener,G!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Yo(Ee)}u.currentTarget=null,d=G}else for(x=0;x<l.length;x++){if(D=l[x],G=D.instance,ce=D.currentTarget,D=D.listener,G!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Yo(Ee)}u.currentTarget=null,d=G}}}}function At(t,i){var s=i[Ue];s===void 0&&(s=i[Ue]=new Set);var l=t+"__bubble";s.has(l)||(v_(i,t,2,!1),s.add(l))}function Ud(t,i,s){var l=0;i&&(l|=4),v_(s,t,l,i)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[Uc]){t[Uc]=!0,Fo.forEach(function(s){s!=="selectionchange"&&(qS.has(s)||Ud(s,!1,t),Ud(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Uc]||(i[Uc]=!0,Ud("selectionchange",!1,i))}}function v_(t,i,s,l){switch(q_(i)){case 2:var u=SE;break;case 8:u=EE;break;default:u=Zd}s=u.bind(null,i,s,t),u=void 0,!Ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Od(t,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var D=l.stateNode.containerInfo;if(D===u)break;if(x===4)for(x=l.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;D!==null;){if(x=ii(D),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){l=d=x;continue e}D=D.parentNode}}l=l.return}Mm(function(){var ce=d,Ee=Qu(s),Te=[];e:{var pe=jm.get(t);if(pe!==void 0){var ye=Vo,et=t;switch(t){case"keypress":if(ko(s)===0)break e;case"keydown":case"keyup":ye=Hx;break;case"focusin":et="focus",ye=nf;break;case"focusout":et="blur",ye=nf;break;case"beforeblur":case"afterblur":ye=nf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Vx;break;case qm:case Zm:case Km:ye=Nx;break;case Qm:ye=Wx;break;case"scroll":case"scrollend":ye=Ax;break;case"wheel":ye=qx;break;case"copy":case"cut":case"paste":ye=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Cm;break;case"toggle":case"beforetoggle":ye=Kx}var ct=(i&4)!==0,an=!ct&&(t==="scroll"||t==="scrollend"),ne=ct?pe!==null?pe+"Capture":null:pe;ct=[];for(var Z=ce,oe;Z!==null;){var be=Z;if(oe=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||oe===null||ne===null||(be=Al(Z,ne),be!=null&&ct.push(so(Z,be,oe))),an)break;Z=Z.return}0<ct.length&&(pe=new ye(pe,et,null,s,Ee),Te.push({event:pe,listeners:ct}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",pe&&s!==Ku&&(et=s.relatedTarget||s.fromElement)&&(ii(et)||et[H]))break e;if((ye||pe)&&(pe=Ee.window===Ee?Ee:(pe=Ee.ownerDocument)?pe.defaultView||pe.parentWindow:window,ye?(et=s.relatedTarget||s.toElement,ye=ce,et=et?ii(et):null,et!==null&&(an=c(et),ct=et.tag,et!==an||ct!==5&&ct!==27&&ct!==6)&&(et=null)):(ye=null,et=ce),ye!==et)){if(ct=Am,be="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Cm,be="onPointerLeave",ne="onPointerEnter",Z="pointer"),an=ye==null?pe:Bs(ye),oe=et==null?pe:Bs(et),pe=new ct(be,Z+"leave",ye,s,Ee),pe.target=an,pe.relatedTarget=oe,be=null,ii(Ee)===ce&&(ct=new ct(ne,Z+"enter",et,s,Ee),ct.target=oe,ct.relatedTarget=an,be=ct),an=be,ye&&et)t:{for(ct=ZS,ne=ye,Z=et,oe=0,be=ne;be;be=ct(be))oe++;be=0;for(var lt=Z;lt;lt=ct(lt))be++;for(;0<oe-be;)ne=ct(ne),oe--;for(;0<be-oe;)Z=ct(Z),be--;for(;oe--;){if(ne===Z||Z!==null&&ne===Z.alternate){ct=ne;break t}ne=ct(ne),Z=ct(Z)}ct=null}else ct=null;ye!==null&&y_(Te,pe,ye,ct,!1),et!==null&&an!==null&&y_(Te,an,et,ct,!0)}}e:{if(pe=ce?Bs(ce):window,ye=pe.nodeName&&pe.nodeName.toLowerCase(),ye==="select"||ye==="input"&&pe.type==="file")var Ft=Pm;else if(Om(pe))if(zm)Ft=sS;else{Ft=iS;var nt=nS}else ye=pe.nodeName,!ye||ye.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ce&&Yt(ce.elementType)&&(Ft=Pm):Ft=aS;if(Ft&&(Ft=Ft(t,ce))){Im(Te,Ft,s,Ee);break e}nt&&nt(t,pe,ce),t==="focusout"&&ce&&pe.type==="number"&&ce.memoizedProps.value!=null&&bt(pe,"number",pe.value)}switch(nt=ce?Bs(ce):window,t){case"focusin":(Om(nt)||nt.contentEditable==="true")&&(vr=nt,cf=ce,Ol=null);break;case"focusout":Ol=cf=vr=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Wm(Te,s,Ee);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":Wm(Te,s,Ee)}var xt;if(sf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else _r?Um(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(wm&&s.locale!=="ko"&&(_r||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&_r&&(xt=bm()):(ja=Ee,$u="value"in ja?ja.value:ja.textContent,_r=!0)),nt=Lc(ce,wt),0<nt.length&&(wt=new Rm(wt,t,null,s,Ee),Te.push({event:wt,listeners:nt}),xt?wt.data=xt:(xt=Lm(s),xt!==null&&(wt.data=xt)))),(xt=jx?Jx(t,s):$x(t,s))&&(wt=Lc(ce,"onBeforeInput"),0<wt.length&&(nt=new Rm("onBeforeInput","beforeinput",null,s,Ee),Te.push({event:nt,listeners:wt}),nt.data=xt)),XS(Te,t,ce,s,Ee)}__(Te,i)})}function so(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Lc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Al(t,s),u!=null&&l.unshift(so(t,u,d)),u=Al(t,i),u!=null&&l.push(so(t,u,d))),t.tag===3)return l;t=t.return}return[]}function ZS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y_(t,i,s,l,u){for(var d=i._reactName,x=[];s!==null&&s!==l;){var D=s,G=D.alternate,ce=D.stateNode;if(D=D.tag,G!==null&&G===l)break;D!==5&&D!==26&&D!==27||ce===null||(G=ce,u?(ce=Al(s,d),ce!=null&&x.unshift(so(s,ce,G))):u||(ce=Al(s,d),ce!=null&&x.push(so(s,ce,G)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function x_(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(QS,"")}function S_(t,i){return i=x_(i),x_(t)===i}function nn(t,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||yi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&yi(t,""+l);break;case"className":$e(t,"class",l);break;case"tabIndex":$e(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,s,l);break;case"style":Wi(t,l,d);break;case"data":if(i!=="object"){$e(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Fs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&nn(t,i,"name",u.name,u,null),nn(t,i,"formEncType",u.formEncType,u,null),nn(t,i,"formMethod",u.formMethod,u,null),nn(t,i,"formTarget",u.formTarget,u,null)):(nn(t,i,"encType",u.encType,u,null),nn(t,i,"method",u.method,u,null),nn(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Fs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=va);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Fs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":At("beforetoggle",t),At("toggle",t),He(t,"popover",l);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":He(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ta.get(s)||s,He(t,s,l))}}function Id(t,i,s,l,u,d){switch(s){case"style":Wi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?yi(t,l):(typeof l=="number"||typeof l=="bigint")&&yi(t,""+l);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"onClick":l!=null&&(t.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):He(t,s,l)}}}function Yn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:nn(t,i,d,x,s,null)}}u&&nn(t,i,"srcSet",s.srcSet,s,null),l&&nn(t,i,"src",s.src,s,null);return;case"input":At("invalid",t);var D=d=x=u=null,G=null,ce=null;for(l in s)if(s.hasOwnProperty(l)){var Ee=s[l];if(Ee!=null)switch(l){case"name":u=Ee;break;case"type":x=Ee;break;case"checked":G=Ee;break;case"defaultChecked":ce=Ee;break;case"value":d=Ee;break;case"defaultValue":D=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(r(137,i));break;default:nn(t,i,l,Ee,s,null)}}Qn(t,d,D,G,ce,x,u,!1);return;case"select":At("invalid",t),l=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(D=s[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":x=D;break;case"multiple":l=D;default:nn(t,i,u,D,s,null)}i=d,s=x,t.multiple=!!l,i!=null?Ln(t,!!l,i,!1):s!=null&&Ln(t,!!l,s,!0);return;case"textarea":At("invalid",t),d=u=l=null;for(x in s)if(s.hasOwnProperty(x)&&(D=s[x],D!=null))switch(x){case"value":l=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:nn(t,i,x,D,s,null)}Xi(t,l,u,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nn(t,i,G,l,s,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(l=0;l<ao.length;l++)At(ao[l],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in s)if(s.hasOwnProperty(ce)&&(l=s[ce],l!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:nn(t,i,ce,l,s,null)}return;default:if(Yt(i)){for(Ee in s)s.hasOwnProperty(Ee)&&(l=s[Ee],l!==void 0&&Id(t,i,Ee,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&nn(t,i,D,l,s,null))}function jS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,D=null,G=null,ce=null,Ee=null;for(ye in s){var Te=s[ye];if(s.hasOwnProperty(ye)&&Te!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":G=Te;default:l.hasOwnProperty(ye)||nn(t,i,ye,null,l,Te)}}for(var pe in l){var ye=l[pe];if(Te=s[pe],l.hasOwnProperty(pe)&&(ye!=null||Te!=null))switch(pe){case"type":d=ye;break;case"name":u=ye;break;case"checked":ce=ye;break;case"defaultChecked":Ee=ye;break;case"value":x=ye;break;case"defaultValue":D=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,i));break;default:ye!==Te&&nn(t,i,pe,ye,l,Te)}}Ye(t,x,D,G,ce,Ee,d,u);return;case"select":ye=x=D=pe=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ye=G;default:l.hasOwnProperty(d)||nn(t,i,d,null,l,G)}for(u in l)if(d=l[u],G=s[u],l.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":pe=d;break;case"defaultValue":D=d;break;case"multiple":x=d;default:d!==G&&nn(t,i,u,d,l,G)}i=D,s=x,l=ye,pe!=null?Ln(t,!!s,pe,!1):!!l!=!!s&&(i!=null?Ln(t,!!s,i,!0):Ln(t,!!s,s?[]:"",!1));return;case"textarea":ye=pe=null;for(D in s)if(u=s[D],s.hasOwnProperty(D)&&u!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:nn(t,i,D,null,l,u)}for(x in l)if(u=l[x],d=s[x],l.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":pe=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&nn(t,i,x,u,l,d)}vi(t,pe,ye);return;case"option":for(var et in s)if(pe=s[et],s.hasOwnProperty(et)&&pe!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:nn(t,i,et,null,l,pe)}for(G in l)if(pe=l[G],ye=s[G],l.hasOwnProperty(G)&&pe!==ye&&(pe!=null||ye!=null))switch(G){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:nn(t,i,G,pe,l,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)pe=s[ct],s.hasOwnProperty(ct)&&pe!=null&&!l.hasOwnProperty(ct)&&nn(t,i,ct,null,l,pe);for(ce in l)if(pe=l[ce],ye=s[ce],l.hasOwnProperty(ce)&&pe!==ye&&(pe!=null||ye!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:nn(t,i,ce,pe,l,ye)}return;default:if(Yt(i)){for(var an in s)pe=s[an],s.hasOwnProperty(an)&&pe!==void 0&&!l.hasOwnProperty(an)&&Id(t,i,an,void 0,l,pe);for(Ee in l)pe=l[Ee],ye=s[Ee],!l.hasOwnProperty(Ee)||pe===ye||pe===void 0&&ye===void 0||Id(t,i,Ee,pe,l,ye);return}}for(var ne in s)pe=s[ne],s.hasOwnProperty(ne)&&pe!=null&&!l.hasOwnProperty(ne)&&nn(t,i,ne,null,l,pe);for(Te in l)pe=l[Te],ye=s[Te],!l.hasOwnProperty(Te)||pe===ye||pe==null&&ye==null||nn(t,i,Te,pe,l,ye)}function E_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,x=u.initiatorType,D=u.duration;if(d&&D&&E_(x)){for(x=0,D=u.responseEnd,l+=1;l<s.length;l++){var G=s[l],ce=G.startTime;if(ce>D)break;var Ee=G.transferSize,Te=G.initiatorType;Ee&&E_(Te)&&(G=G.responseEnd,x+=Ee*(G<D?1:(D-ce)/(G-ce)))}if(--l,i+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pd=null,zd=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function M_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function $S(){var t=window.event;return t&&t.type==="popstate"?t===Fd?!1:(Fd=t,!0):(Fd=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,eE=typeof clearTimeout=="function"?clearTimeout:void 0,A_=typeof Promise=="function"?Promise:void 0,tE=typeof queueMicrotask=="function"?queueMicrotask:typeof A_<"u"?function(t){return A_.resolve(null).then(t).catch(nE)}:T_;function nE(t){setTimeout(function(){throw t})}function ps(t){return t==="head"}function R_(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Wr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ro(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ro(s);for(var d=s.firstChild;d;){var x=d.nextSibling,D=d.nodeName;d[yn]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&ro(t.ownerDocument.body);s=u}while(s);Wr(i)}function C_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Hd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),ln(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function iE(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[yn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Bi(t.nextSibling),t===null)break}return null}function aE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Bi(t.nextSibling),t===null))return null;return t}function w_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Bi(t.nextSibling),t===null))return null;return t}function kd(t){return t.data==="$?"||t.data==="$~"}function Gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Bi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vd=null;function D_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Bi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function N_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function U_(t,i,s){switch(i=Oc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ln(t)}var Fi=new Map,L_=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=X.d;X.d={f:rE,r:lE,D:oE,C:cE,L:uE,m:fE,X:hE,S:dE,M:pE};function rE(){var t=Oa.f(),i=Ac();return t||i}function lE(t){var i=Ni(t);i!==null&&i.tag===5&&i.type==="form"?Q0(i):Oa.r(t)}var Gr=typeof document>"u"?null:document;function O_(t,i,s){var l=Gr;if(l&&typeof i=="string"&&i){var u=Zt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),L_.has(u)||(L_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Yn(i,"link",t),An(i),l.head.appendChild(i)))}}function oE(t){Oa.D(t),O_("dns-prefetch",t,null)}function cE(t,i){Oa.C(t,i),O_("preconnect",t,i)}function uE(t,i,s){Oa.L(t,i,s);var l=Gr;if(l&&t&&i){var u='link[rel="preload"][as="'+Zt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Zt(s.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(i){case"style":d=Vr(t);break;case"script":d=Xr(t)}Fi.has(d)||(t=E({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Fi.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(lo(d))||i==="script"&&l.querySelector(oo(d))||(i=l.createElement("link"),Yn(i,"link",t),An(i),l.head.appendChild(i)))}}function fE(t,i){Oa.m(t,i);var s=Gr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Zt(l)+'"][href="'+Zt(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Xr(t)}if(!Fi.has(d)&&(t=E({rel:"modulepreload",href:t},i),Fi.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(oo(d)))return}l=s.createElement("link"),Yn(l,"link",t),An(l),s.head.appendChild(l)}}}function dE(t,i,s){Oa.S(t,i,s);var l=Gr;if(l&&t){var u=Ka(l).hoistableStyles,d=Vr(t);i=i||"default";var x=u.get(d);if(!x){var D={loading:0,preload:null};if(x=l.querySelector(lo(d)))D.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Fi.get(d))&&Xd(t,s);var G=x=l.createElement("link");An(G),Yn(G,"link",t),G._p=new Promise(function(ce,Ee){G.onload=ce,G.onerror=Ee}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Pc(x,i,l)}x={type:"stylesheet",instance:x,count:1,state:D},u.set(d,x)}}}function hE(t,i){Oa.X(t,i);var s=Gr;if(s&&t){var l=Ka(s).hoistableScripts,u=Xr(t),d=l.get(u);d||(d=s.querySelector(oo(u)),d||(t=E({src:t,async:!0},i),(i=Fi.get(u))&&Wd(t,i),d=s.createElement("script"),An(d),Yn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function pE(t,i){Oa.M(t,i);var s=Gr;if(s&&t){var l=Ka(s).hoistableScripts,u=Xr(t),d=l.get(u);d||(d=s.querySelector(oo(u)),d||(t=E({src:t,async:!0,type:"module"},i),(i=Fi.get(u))&&Wd(t,i),d=s.createElement("script"),An(d),Yn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function I_(t,i,s,l){var u=(u=ae.current)?Ic(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vr(s.href),s=Ka(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vr(s.href);var d=Ka(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(lo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Fi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Fi.set(t,s),d||mE(u,t,s,x.state))),i&&l===null)throw Error(r(528,""));return x}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Xr(s),s=Ka(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vr(t){return'href="'+Zt(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function P_(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function mE(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),An(i),t.head.appendChild(i))}function Xr(t){return'[src="'+Zt(t)+'"]'}function oo(t){return"script[async]"+t}function z_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Zt(s.href)+'"]');if(l)return i.instance=l,An(l),l;var u=E({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),An(l),Yn(l,"style",u),Pc(l,s.precedence,t),i.instance=l;case"stylesheet":u=Vr(s.href);var d=t.querySelector(lo(u));if(d)return i.state.loading|=4,i.instance=d,An(d),d;l=P_(s),(u=Fi.get(u))&&Xd(l,u),d=(t.ownerDocument||t).createElement("link"),An(d);var x=d;return x._p=new Promise(function(D,G){x.onload=D,x.onerror=G}),Yn(d,"link",l),i.state.loading|=4,Pc(d,s.precedence,t),i.instance=d;case"script":return d=Xr(s.src),(u=t.querySelector(oo(d)))?(i.instance=u,An(u),u):(l=s,(u=Fi.get(d))&&(l=E({},s),Wd(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),An(u),Yn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,s.precedence,t));return i.instance}function Pc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,x=0;x<l.length;x++){var D=l[x];if(D.dataset.precedence===i)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Xd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var zc=null;function B_(t,i,s){if(zc===null){var l=new Map,u=zc=new Map;u.set(s,l)}else u=zc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[yn]||d[vn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var D=l.get(x);D?D.push(d):l.set(x,[d])}}return l}function F_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function gE(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _E(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vr(l.href),d=i.querySelector(lo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Bc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,An(d);return}d=i.ownerDocument||i,l=P_(l),(u=Fi.get(u))&&Xd(l,u),d=d.createElement("link"),An(d);var x=d;x._p=new Promise(function(D,G){x.onload=D,x.onerror=G}),Yn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Bc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Yd=0;function vE(t,i){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Yd===0&&(Yd=62500*JS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Yd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Hc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,i.forEach(yE,t),Fc=null,Bc.call(t))}function yE(t,i){if(!(i.state.loading&4)){var s=Fc.get(t);if(s)var l=s.get(null);else{s=new Map,Fc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}u=i.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||l,d===l&&s.set(null,u),s.set(x,u),this.count++,l=Bc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var co={$$typeof:L,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function xE(t,i,s,l,u,d,x,D,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function k_(t,i,s,l,u,d,x,D,G,ce,Ee,Te){return t=new xE(t,i,s,x,G,ce,Ee,Te,D),i=1,d===!0&&(i|=24),d=Si(3,null,null,i),t.current=d,d.stateNode=t,i=Tf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},wf(d),t}function G_(t){return t?(t=Sr,t):Sr}function V_(t,i,s,l,u,d){u=G_(u),l.context===null?l.context=u:l.pendingContext=u,l=is(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=as(t,l,i),s!==null&&(hi(s,t,i),kl(s,t,i))}function X_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qd(t,i){X_(t,i),(t=t.alternate)&&X_(t,i)}function W_(t){if(t.tag===13||t.tag===31){var i=Vs(t,67108864);i!==null&&hi(i,t,67108864),qd(t,67108864)}}function Y_(t){if(t.tag===13||t.tag===31){var i=Ai();i=zs(i);var s=Vs(t,i);s!==null&&hi(s,t,i),qd(t,i)}}var kc=!0;function SE(t,i,s,l){var u=F.T;F.T=null;var d=X.p;try{X.p=2,Zd(t,i,s,l)}finally{X.p=d,F.T=u}}function EE(t,i,s,l){var u=F.T;F.T=null;var d=X.p;try{X.p=8,Zd(t,i,s,l)}finally{X.p=d,F.T=u}}function Zd(t,i,s,l){if(kc){var u=Kd(l);if(u===null)Od(t,i,l,Gc,s),Z_(t,l);else if(bE(u,t,i,s,l))l.stopPropagation();else if(Z_(t,l),i&4&&-1<ME.indexOf(t)){for(;u!==null;){var d=Ni(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Le(d.pendingLanes);if(x!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;x;){var G=1<<31-Ne(x);D.entanglements[1]|=G,x&=~G}sa(d),(kt&6)===0&&(bc=Lt()+500,io(0))}}break;case 31:case 13:D=Vs(d,2),D!==null&&hi(D,d,2),Ac(),qd(d,2)}if(d=Kd(l),d===null&&Od(t,i,l,Gc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else Od(t,i,l,null,s)}}function Kd(t){return t=Qu(t),Qd(t)}var Gc=null;function Qd(t){if(Gc=null,t=ii(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=m(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gc=t,null}function q_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case C:return 2;case y:return 8;case V:case q:return 32;case $:return 268435456;default:return 32}default:return 32}}var jd=!1,ms=null,gs=null,_s=null,uo=new Map,fo=new Map,vs=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z_(t,i){switch(t){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(t,i,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Ni(i),i!==null&&W_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function bE(t,i,s,l,u){switch(i){case"focusin":return ms=ho(ms,t,i,s,l,u),!0;case"dragenter":return gs=ho(gs,t,i,s,l,u),!0;case"mouseover":return _s=ho(_s,t,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return uo.set(d,ho(uo.get(d)||null,t,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,fo.set(d,ho(fo.get(d)||null,t,i,s,l,u)),!0}return!1}function K_(t){var i=ii(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,_a(t.priority,function(){Y_(s)});return}}else if(i===31){if(i=m(s),i!==null){t.blockedOn=i,_a(t.priority,function(){Y_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Kd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ku=l,s.target.dispatchEvent(l),Ku=null}else return i=Ni(s),i!==null&&W_(i),t.blockedOn=s,!1;i.shift()}return!0}function Q_(t,i,s){Vc(t)&&s.delete(i)}function TE(){jd=!1,ms!==null&&Vc(ms)&&(ms=null),gs!==null&&Vc(gs)&&(gs=null),_s!==null&&Vc(_s)&&(_s=null),uo.forEach(Q_),fo.forEach(Q_)}function Xc(t,i){t.blockedOn===i&&(t.blockedOn=null,jd||(jd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,TE)))}var Wc=null;function j_(t){Wc!==t&&(Wc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Qd(l||s)===null)continue;break}var d=Ni(s);d!==null&&(t.splice(i,3),i-=3,Kf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Wr(t){function i(G){return Xc(G,t)}ms!==null&&Xc(ms,t),gs!==null&&Xc(gs,t),_s!==null&&Xc(_s,t),uo.forEach(i),fo.forEach(i);for(var s=0;s<vs.length;s++){var l=vs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<vs.length&&(s=vs[0],s.blockedOn===null);)K_(s),s.blockedOn===null&&vs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],x=u[Tn]||null;if(typeof d=="function")x||j_(s);else if(x){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Tn]||null)D=x.formAction;else if(Qd(u)!==null)continue}else D=x.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),j_(s)}}}function J_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Jd(t){this._internalRoot=t}Yc.prototype.render=Jd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Ai();V_(s,l,t,i,null,null)},Yc.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;V_(t.current,2,null,t,null,null),Ac(),i[H]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Za();t={blockedOn:null,target:t,priority:i};for(var s=0;s<vs.length&&i!==0&&i<vs[s].priority;s++);vs.splice(s,0,t),s===0&&K_(t)}};var $_=e.version;if($_!=="19.2.8")throw Error(r(527,$_,"19.2.8"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var AE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{ee=qc.inject(AE),se=qc}catch{}}return po.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=rg,d=lg,x=og;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=k_(t,1,!1,null,null,s,l,null,u,d,x,J_),t[H]=i.current,Ld(t),new Jd(i)},po.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=rg,x=lg,D=og,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=k_(t,1,!0,i,s??null,l,u,G,d,x,D,J_),i.context=G_(null),s=i.current,l=Ai(),l=zs(l),u=is(l),u.callback=null,as(s,u,l),s=l,i.current.lanes=s,qe(i,s),sa(i),t[H]=i.current,Ld(t),new Yc(i)},po.version="19.2.8",po}var lv;function IE(){if(lv)return eh.exports;lv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eh.exports=OE(),eh.exports}var PE=IE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ey=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=ke.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...m},p)=>ke.createElement("svg",{ref:p,...BE,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Ey("lucide",o),...m},[...f.map(([h,v])=>ke.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(a,e)=>{const n=ke.forwardRef(({className:r,...o},c)=>ke.createElement(FE,{ref:c,iconNode:e,className:Ey(`lucide-${zE(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=hn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=hn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=hn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=hn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=hn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=hn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=hn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=hn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=hn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=hn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=hn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=hn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=hn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=hn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=hn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=hn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=hn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=hn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=hn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=hn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=hn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=hn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=hn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=hn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=hn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="185",ml={ROTATE:0,DOLLY:1,PAN:2},dl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eM=0,uv=1,tM=2,Ro=1,nM=2,To=3,Ns=0,gi=1,ua=2,Ga=0,gl=1,fv=2,dv=3,hv=4,iM=5,lr=100,aM=101,sM=102,rM=103,lM=104,oM=200,cM=201,uM=202,fM=203,Vh=204,Xh=205,dM=206,hM=207,pM=208,mM=209,gM=210,_M=211,vM=212,yM=213,xM=214,Wh=0,Yh=1,qh=2,yl=3,Zh=4,Kh=5,Qh=6,jh=7,Ty=0,SM=1,EM=2,ha=0,Ay=1,Ry=2,Cy=3,qp=4,wy=5,Dy=6,Ny=7,Uy=300,hr=301,xl=302,ah=303,sh=304,Vu=306,Jh=1e3,ka=1001,$h=1002,Kn=1003,MM=1004,Zc=1005,Hn=1006,rh=1007,cr=1008,wi=1009,Ly=1010,Oy=1011,Uo=1012,Zp=1013,ma=1014,fa=1015,Wa=1016,Kp=1017,Qp=1018,Lo=1020,Iy=35902,Py=35899,zy=1021,By=1022,$i=1023,Ya=1026,ur=1027,Fy=1028,jp=1029,pr=1030,Jp=1031,$p=1033,Su=33776,Eu=33777,Mu=33778,bu=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,sp=37492,rp=37496,lp=37488,op=37489,Cu=37490,cp=37491,up=37808,fp=37809,dp=37810,hp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,yp=37817,xp=37818,Sp=37819,Ep=37820,Mp=37821,bp=36492,Tp=36494,Ap=36495,Rp=36283,Cp=36284,wu=36285,wp=36286,bM=3200,Dp=0,TM=1,Rs="",mi="srgb",Du="srgb-linear",Nu="linear",Jt="srgb",Yr=7680,pv=519,AM=512,RM=513,CM=514,em=515,wM=516,DM=517,tm=518,NM=519,Np=35044,mv="300 es",da=2e3,Oo=2001;function UM(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Uu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function LM(){const a=Uu("canvas");return a.style.display="block",a}const gv={};function Lu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Hy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=Hy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Nt(...a){a=Hy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function _l(...a){const e=a.join(" ");e in gv||(gv[e]=!0,ft(...a))}function OM(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const IM={[Wh]:Yh,[qh]:Qh,[Zh]:jh,[yl]:Kh,[Yh]:Wh,[Qh]:qh,[jh]:Zh,[Kh]:yl};class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _v=1234567;const Co=Math.PI/180,Io=180/Math.PI;function Va(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[n&63|128]+Jn[n>>8&255]+"-"+Jn[n>>16&255]+Jn[n>>24&255]+Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]).toLowerCase()}function Mt(a,e,n){return Math.max(e,Math.min(n,a))}function nm(a,e){return(a%e+e)%e}function PM(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function zM(a,e,n){return a!==e?(n-a)/(e-a):0}function wo(a,e,n){return(1-n)*a+n*e}function BM(a,e,n,r){return wo(a,e,1-Math.exp(-n*r))}function FM(a,e=1){return e-Math.abs(nm(a,e*2)-e)}function HM(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function kM(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function GM(a,e){return a+Math.floor(Math.random()*(e-a+1))}function VM(a,e){return a+Math.random()*(e-a)}function XM(a){return a*(.5-Math.random())}function WM(a){a!==void 0&&(_v=a);let e=_v+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YM(a){return a*Co}function qM(a){return a*Io}function ZM(a){return(a&a-1)===0&&a!==0}function KM(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function QM(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function jM(a,e,n,r,o){const c=Math.cos,f=Math.sin,m=c(n/2),p=f(n/2),h=c((e+r)/2),v=f((e+r)/2),E=c((e-r)/2),g=f((e-r)/2),b=c((r-e)/2),R=f((r-e)/2);switch(o){case"XYX":a.set(m*v,p*E,p*g,m*h);break;case"YZY":a.set(p*g,m*v,p*E,m*h);break;case"ZXZ":a.set(p*E,p*g,m*v,m*h);break;case"XZX":a.set(m*v,p*R,p*b,m*h);break;case"YXY":a.set(p*b,m*v,p*R,m*h);break;case"ZYZ":a.set(p*R,p*b,m*v,m*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ji(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Up={DEG2RAD:Co,RAD2DEG:Io,generateUUID:Va,clamp:Mt,euclideanModulo:nm,mapLinear:PM,inverseLerp:zM,lerp:wo,damp:BM,pingpong:FM,smoothstep:HM,smootherstep:kM,randInt:GM,randFloat:VM,randFloatSpread:XM,seededRandom:WM,degToRad:YM,radToDeg:qM,isPowerOfTwo:ZM,ceilPowerOfTwo:KM,floorPowerOfTwo:QM,setQuaternionFromProperEuler:jM,normalize:$t,denormalize:Ji},_m=class _m{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_m.prototype.isVector2=!0;let ot=_m;class Us{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,m){let p=r[o+0],h=r[o+1],v=r[o+2],E=r[o+3],g=c[f+0],b=c[f+1],R=c[f+2],N=c[f+3];if(E!==N||p!==g||h!==b||v!==R){let T=p*g+h*b+v*R+E*N;T<0&&(g=-g,b=-b,R=-R,N=-N,T=-T);let S=1-m;if(T<.9995){const U=Math.acos(T),L=Math.sin(U);S=Math.sin(S*U)/L,m=Math.sin(m*U)/L,p=p*S+g*m,h=h*S+b*m,v=v*S+R*m,E=E*S+N*m}else{p=p*S+g*m,h=h*S+b*m,v=v*S+R*m,E=E*S+N*m;const U=1/Math.sqrt(p*p+h*h+v*v+E*E);p*=U,h*=U,v*=U,E*=U}}e[n]=p,e[n+1]=h,e[n+2]=v,e[n+3]=E}static multiplyQuaternionsFlat(e,n,r,o,c,f){const m=r[o],p=r[o+1],h=r[o+2],v=r[o+3],E=c[f],g=c[f+1],b=c[f+2],R=c[f+3];return e[n]=m*R+v*E+p*b-h*g,e[n+1]=p*R+v*g+h*E-m*b,e[n+2]=h*R+v*b+m*g-p*E,e[n+3]=v*R-m*E-p*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,m=Math.cos,p=Math.sin,h=m(r/2),v=m(o/2),E=m(c/2),g=p(r/2),b=p(o/2),R=p(c/2);switch(f){case"XYZ":this._x=g*v*E+h*b*R,this._y=h*b*E-g*v*R,this._z=h*v*R+g*b*E,this._w=h*v*E-g*b*R;break;case"YXZ":this._x=g*v*E+h*b*R,this._y=h*b*E-g*v*R,this._z=h*v*R-g*b*E,this._w=h*v*E+g*b*R;break;case"ZXY":this._x=g*v*E-h*b*R,this._y=h*b*E+g*v*R,this._z=h*v*R+g*b*E,this._w=h*v*E-g*b*R;break;case"ZYX":this._x=g*v*E-h*b*R,this._y=h*b*E+g*v*R,this._z=h*v*R-g*b*E,this._w=h*v*E+g*b*R;break;case"YZX":this._x=g*v*E+h*b*R,this._y=h*b*E+g*v*R,this._z=h*v*R-g*b*E,this._w=h*v*E-g*b*R;break;case"XZY":this._x=g*v*E-h*b*R,this._y=h*b*E-g*v*R,this._z=h*v*R+g*b*E,this._w=h*v*E+g*b*R;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],m=n[5],p=n[9],h=n[2],v=n[6],E=n[10],g=r+m+E;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-p)*b,this._y=(c-h)*b,this._z=(f-o)*b}else if(r>m&&r>E){const b=2*Math.sqrt(1+r-m-E);this._w=(v-p)/b,this._x=.25*b,this._y=(o+f)/b,this._z=(c+h)/b}else if(m>E){const b=2*Math.sqrt(1+m-r-E);this._w=(c-h)/b,this._x=(o+f)/b,this._y=.25*b,this._z=(p+v)/b}else{const b=2*Math.sqrt(1+E-r-m);this._w=(f-o)/b,this._x=(c+h)/b,this._y=(p+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,m=n._x,p=n._y,h=n._z,v=n._w;return this._x=r*v+f*m+o*h-c*p,this._y=o*v+f*p+c*m-r*h,this._z=c*v+f*h+r*p-o*m,this._w=f*v-r*m-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(r=-r,o=-o,c=-c,f=-f,m=-m);let p=1-n;if(m<.9995){const h=Math.acos(m),v=Math.sin(h);p=Math.sin(p*h)/v,n=Math.sin(n*h)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vm=class vm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,m=e.z,p=e.w,h=2*(f*o-m*r),v=2*(m*n-c*o),E=2*(c*r-f*n);return this.x=n+p*h+f*E-m*v,this.y=r+p*v+m*h-c*E,this.z=o+p*E+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,m=n.y,p=n.z;return this.x=o*p-c*m,this.y=c*f-r*p,this.z=r*m-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vm.prototype.isVector3=!0;let te=vm;const lh=new te,vv=new Us,ym=class ym{constructor(e,n,r,o,c,f,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h)}set(e,n,r,o,c,f,m,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=m,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[3],p=r[6],h=r[1],v=r[4],E=r[7],g=r[2],b=r[5],R=r[8],N=o[0],T=o[3],S=o[6],U=o[1],L=o[4],M=o[7],I=o[2],P=o[5],B=o[8];return c[0]=f*N+m*U+p*I,c[3]=f*T+m*L+p*P,c[6]=f*S+m*M+p*B,c[1]=h*N+v*U+E*I,c[4]=h*T+v*L+E*P,c[7]=h*S+v*M+E*B,c[2]=g*N+b*U+R*I,c[5]=g*T+b*L+R*P,c[8]=g*S+b*M+R*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8];return n*f*v-n*m*h-r*c*v+r*m*p+o*c*h-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8],E=v*f-m*h,g=m*p-v*c,b=h*c-f*p,R=n*E+r*g+o*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=E*N,e[1]=(o*h-v*r)*N,e[2]=(m*r-o*f)*N,e[3]=g*N,e[4]=(v*n-o*p)*N,e[5]=(o*c-m*n)*N,e[6]=b*N,e[7]=(r*p-h*n)*N,e[8]=(f*n-r*c)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,m){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*f+h*m)+f+e,-o*h,o*p,-o*(-h*f+p*m)+m+n,0,0,1),this}scale(e,n){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oh.makeScale(e,n)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oh.makeRotation(-e)),this}translate(e,n){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ym.prototype.isMatrix3=!0;let gt=ym;const oh=new gt,yv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const a={enabled:!0,workingColorSpace:Du,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Jt&&(o.r=Xa(o.r),o.g=Xa(o.g),o.b=Xa(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Jt&&(o.r=vl(o.r),o.g=vl(o.g),o.b=vl(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rs?Nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return _l("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return _l("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Du]:{primaries:e,whitePoint:r,transfer:Nu,toXYZ:yv,fromXYZ:xv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Jt,toXYZ:yv,fromXYZ:xv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Ut=JM();function Xa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function vl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let qr;class $M{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qr===void 0&&(qr=Uu("canvas")),qr.width=e.width,qr.height=e.height;const o=qr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qr}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Xa(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xa(n[r]/255)*255):n[r]=Xa(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,m=o.length;f<m;f++)o[f].isDataTexture?c.push(ch(o[f].image)):c.push(ch(o[f]))}else c=ch(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ch(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?$M.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let tb=0;const uh=new te;class ei extends Ps{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,r=ka,o=ka,c=Hn,f=cr,m=$i,p=wi,h=ei.DEFAULT_ANISOTROPY,v=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Va(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case ka:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case ka:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Uy;ei.DEFAULT_ANISOTROPY=1;const xm=class xm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],v=p[4],E=p[8],g=p[1],b=p[5],R=p[9],N=p[2],T=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(E-N)<.01&&Math.abs(R-T)<.01){if(Math.abs(v+g)<.1&&Math.abs(E+N)<.1&&Math.abs(R+T)<.1&&Math.abs(h+b+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,M=(b+1)/2,I=(S+1)/2,P=(v+g)/4,B=(E+N)/4,A=(R+T)/4;return L>M&&L>I?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=P/r,c=B/r):M>I?M<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(M),r=P/o,c=A/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=B/c,o=A/c),this.set(r,o,c,n),this}let U=Math.sqrt((T-R)*(T-R)+(E-N)*(E-N)+(g-v)*(g-v));return Math.abs(U)<.001&&(U=1),this.x=(T-R)/U,this.y=(E-N)/U,this.z=(g-v)/U,this.w=Math.acos((h+b+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xm.prototype.isVector4=!0;let xn=xm;class nb extends Ps{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new xn(0,0,e,n),this.scissorTest=!1,this.viewport=new xn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new ei(o),f=r.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new im(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pa extends nb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ky extends ei{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends ei{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=class ku{constructor(e,n,r,o,c,f,m,p,h,v,E,g,b,R,N,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h,v,E,g,b,R,N,T)}set(e,n,r,o,c,f,m,p,h,v,E,g,b,R,N,T){const S=this.elements;return S[0]=e,S[4]=n,S[8]=r,S[12]=o,S[1]=c,S[5]=f,S[9]=m,S[13]=p,S[2]=h,S[6]=v,S[10]=E,S[14]=g,S[3]=b,S[7]=R,S[11]=N,S[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Zr.setFromMatrixColumn(e,0).length(),c=1/Zr.setFromMatrixColumn(e,1).length(),f=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),m=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(c),E=Math.sin(c);if(e.order==="XYZ"){const g=f*v,b=f*E,R=m*v,N=m*E;n[0]=p*v,n[4]=-p*E,n[8]=h,n[1]=b+R*h,n[5]=g-N*h,n[9]=-m*p,n[2]=N-g*h,n[6]=R+b*h,n[10]=f*p}else if(e.order==="YXZ"){const g=p*v,b=p*E,R=h*v,N=h*E;n[0]=g+N*m,n[4]=R*m-b,n[8]=f*h,n[1]=f*E,n[5]=f*v,n[9]=-m,n[2]=b*m-R,n[6]=N+g*m,n[10]=f*p}else if(e.order==="ZXY"){const g=p*v,b=p*E,R=h*v,N=h*E;n[0]=g-N*m,n[4]=-f*E,n[8]=R+b*m,n[1]=b+R*m,n[5]=f*v,n[9]=N-g*m,n[2]=-f*h,n[6]=m,n[10]=f*p}else if(e.order==="ZYX"){const g=f*v,b=f*E,R=m*v,N=m*E;n[0]=p*v,n[4]=R*h-b,n[8]=g*h+N,n[1]=p*E,n[5]=N*h+g,n[9]=b*h-R,n[2]=-h,n[6]=m*p,n[10]=f*p}else if(e.order==="YZX"){const g=f*p,b=f*h,R=m*p,N=m*h;n[0]=p*v,n[4]=N-g*E,n[8]=R*E+b,n[1]=E,n[5]=f*v,n[9]=-m*v,n[2]=-h*v,n[6]=b*E+R,n[10]=g-N*E}else if(e.order==="XZY"){const g=f*p,b=f*h,R=m*p,N=m*h;n[0]=p*v,n[4]=-E,n[8]=h*v,n[1]=g*E+N,n[5]=f*v,n[9]=b*E-R,n[2]=R*E-b,n[6]=m*v,n[10]=N*E+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,sb)}lookAt(e,n,r){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),xs.crossVectors(r,Ri),xs.lengthSq()===0&&(Math.abs(r.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),xs.crossVectors(r,Ri)),xs.normalize(),Kc.crossVectors(Ri,xs),o[0]=xs.x,o[4]=Kc.x,o[8]=Ri.x,o[1]=xs.y,o[5]=Kc.y,o[9]=Ri.y,o[2]=xs.z,o[6]=Kc.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[4],p=r[8],h=r[12],v=r[1],E=r[5],g=r[9],b=r[13],R=r[2],N=r[6],T=r[10],S=r[14],U=r[3],L=r[7],M=r[11],I=r[15],P=o[0],B=o[4],A=o[8],O=o[12],Y=o[1],k=o[5],j=o[9],ge=o[13],me=o[2],ie=o[6],F=o[10],X=o[14],le=o[3],Se=o[7],we=o[11],z=o[15];return c[0]=f*P+m*Y+p*me+h*le,c[4]=f*B+m*k+p*ie+h*Se,c[8]=f*A+m*j+p*F+h*we,c[12]=f*O+m*ge+p*X+h*z,c[1]=v*P+E*Y+g*me+b*le,c[5]=v*B+E*k+g*ie+b*Se,c[9]=v*A+E*j+g*F+b*we,c[13]=v*O+E*ge+g*X+b*z,c[2]=R*P+N*Y+T*me+S*le,c[6]=R*B+N*k+T*ie+S*Se,c[10]=R*A+N*j+T*F+S*we,c[14]=R*O+N*ge+T*X+S*z,c[3]=U*P+L*Y+M*me+I*le,c[7]=U*B+L*k+M*ie+I*Se,c[11]=U*A+L*j+M*F+I*we,c[15]=U*O+L*ge+M*X+I*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],m=e[5],p=e[9],h=e[13],v=e[2],E=e[6],g=e[10],b=e[14],R=e[3],N=e[7],T=e[11],S=e[15],U=p*b-h*g,L=m*b-h*E,M=m*g-p*E,I=f*b-h*v,P=f*g-p*v,B=f*E-m*v;return n*(N*U-T*L+S*M)-r*(R*U-T*I+S*P)+o*(R*L-N*I+S*B)-c*(R*M-N*P+T*B)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],f=e[5],m=e[9],p=e[2],h=e[6],v=e[10];return n*(f*v-m*h)-r*(c*v-m*p)+o*(c*h-f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8],E=e[9],g=e[10],b=e[11],R=e[12],N=e[13],T=e[14],S=e[15],U=n*m-r*f,L=n*p-o*f,M=n*h-c*f,I=r*p-o*m,P=r*h-c*m,B=o*h-c*p,A=v*N-E*R,O=v*T-g*R,Y=v*S-b*R,k=E*T-g*N,j=E*S-b*N,ge=g*S-b*T,me=U*ge-L*j+M*k+I*Y-P*O+B*A;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/me;return e[0]=(m*ge-p*j+h*k)*ie,e[1]=(o*j-r*ge-c*k)*ie,e[2]=(N*B-T*P+S*I)*ie,e[3]=(g*P-E*B-b*I)*ie,e[4]=(p*Y-f*ge-h*O)*ie,e[5]=(n*ge-o*Y+c*O)*ie,e[6]=(T*M-R*B-S*L)*ie,e[7]=(v*B-g*M+b*L)*ie,e[8]=(f*j-m*Y+h*A)*ie,e[9]=(r*Y-n*j-c*A)*ie,e[10]=(R*P-N*M+S*U)*ie,e[11]=(E*M-v*P-b*U)*ie,e[12]=(m*O-f*k-p*A)*ie,e[13]=(n*k-r*O+o*A)*ie,e[14]=(N*L-R*I-T*U)*ie,e[15]=(v*I-E*L+g*U)*ie,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,m=e.y,p=e.z,h=c*f,v=c*m;return this.set(h*f+r,h*m-o*p,h*p+o*m,0,h*m+o*p,v*m+r,v*p-o*f,0,h*p-o*m,v*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,m=n._z,p=n._w,h=c+c,v=f+f,E=m+m,g=c*h,b=c*v,R=c*E,N=f*v,T=f*E,S=m*E,U=p*h,L=p*v,M=p*E,I=r.x,P=r.y,B=r.z;return o[0]=(1-(N+S))*I,o[1]=(b+M)*I,o[2]=(R-L)*I,o[3]=0,o[4]=(b-M)*P,o[5]=(1-(g+S))*P,o[6]=(T+U)*P,o[7]=0,o[8]=(R+L)*B,o[9]=(T-U)*B,o[10]=(1-(g+N))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Zr.set(o[0],o[1],o[2]).length();const m=Zr.set(o[4],o[5],o[6]).length(),p=Zr.set(o[8],o[9],o[10]).length();c<0&&(f=-f),Ki.copy(this);const h=1/f,v=1/m,E=1/p;return Ki.elements[0]*=h,Ki.elements[1]*=h,Ki.elements[2]*=h,Ki.elements[4]*=v,Ki.elements[5]*=v,Ki.elements[6]*=v,Ki.elements[8]*=E,Ki.elements[9]*=E,Ki.elements[10]*=E,n.setFromRotationMatrix(Ki),r.x=f,r.y=m,r.z=p,this}makePerspective(e,n,r,o,c,f,m=da,p=!1){const h=this.elements,v=2*c/(n-e),E=2*c/(r-o),g=(n+e)/(n-e),b=(r+o)/(r-o);let R,N;if(p)R=c/(f-c),N=f*c/(f-c);else if(m===da)R=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(m===Oo)R=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=E,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,m=da,p=!1){const h=this.elements,v=2/(n-e),E=2/(r-o),g=-(n+e)/(n-e),b=-(r+o)/(r-o);let R,N;if(p)R=1/(f-c),N=f/(f-c);else if(m===da)R=-2/(f-c),N=-(f+c)/(f-c);else if(m===Oo)R=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=E,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};ku.prototype.isMatrix4=!0;let _n=ku;const Zr=new te,Ki=new _n,ab=new te(0,0,0),sb=new te(1,1,1),xs=new te,Kc=new te,Ri=new te,Sv=new _n,Ev=new Us;class Ls{constructor(e=0,n=0,r=0,o=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],m=o[8],p=o[1],h=o[5],v=o[9],E=o[2],g=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-E,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-E,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Mt(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-E,c)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const Mv=new te,Kr=new Us,Ia=new _n,Qc=new te,mo=new te,lb=new te,ob=new Us,bv=new te(1,0,0),Tv=new te(0,1,0),Av=new te(0,0,1),Rv={type:"added"},cb={type:"removed"},Qr={type:"childadded",child:null},fh={type:"childremoved",child:null};class kn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new te,n=new Ls,r=new Us,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new gt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Tv,e)}rotateZ(e){return this.rotateOnAxis(Av,e)}translateOnAxis(e,n){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Tv,e)}translateZ(e){return this.translateOnAxis(Av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Qc.copy(e):Qc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(mo,Qc,this.up):Ia.lookAt(Qc,mo,this.up),this.quaternion.setFromRotationMatrix(Ia),o&&(Ia.extractRotation(o.matrixWorld),Kr.setFromRotationMatrix(Ia),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rv),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cb),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rv),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,m=c.length;f<m;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const E=p[h];c(e.shapes,E)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));o.material=m}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];o.animations.push(c(e.animations,p))}}if(n){const m=f(e.geometries),p=f(e.materials),h=f(e.textures),v=f(e.images),E=f(e.shapes),g=f(e.skeletons),b=f(e.animations),R=f(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),E.length>0&&(r.shapes=E),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=o,r;function f(m){const p=[];for(const h in m){const v=m[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}kn.DEFAULT_UP=new te(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ha extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const T=n.getJointPose(N,r),S=this._getHandJoint(h,N);T!==null&&(S.matrix.fromArray(T.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=T.radius),S.visible=T!==null}const v=h.joints["index-finger-tip"],E=h.joints["thumb-tip"],g=v.position.distanceTo(E.position),b=.02,R=.005;h.inputState.pinching&&g>b+R?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-R&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return m!==null&&(m.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},jc={h:0,s:0,l:0};function hh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ut.workingColorSpace){if(e=nm(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=hh(f,c,e+1/3),this.g=hh(f,c,e),this.b=hh(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,n=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],m=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=Gy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ut.workingToColorSpace($n.copy(this),e),Math.round(Mt($n.r*255,0,255))*65536+Math.round(Mt($n.g*255,0,255))*256+Math.round(Mt($n.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace($n.copy(this),n);const r=$n.r,o=$n.g,c=$n.b,f=Math.max(r,o,c),m=Math.min(r,o,c);let p,h;const v=(m+f)/2;if(m===f)p=0,h=0;else{const E=f-m;switch(h=v<=.5?E/(f+m):E/(2-f-m),f){case r:p=(o-c)/E+(o<c?6:0);break;case o:p=(c-r)/E+2;break;case c:p=(r-o)/E+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace($n.copy(this),n),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=mi){Ut.workingToColorSpace($n.copy(this),e);const n=$n.r,r=$n.g,o=$n.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+n,Ss.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ss),e.getHSL(jc);const r=wo(Ss.h,jc.h,n),o=wo(Ss.s,jc.s,n),c=wo(Ss.l,jc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Rt;Rt.NAMES=Gy;class sm{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=n,this.far=r}clone(){return new sm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fb extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qi=new te,Pa=new te,ph=new te,za=new te,jr=new te,Jr=new te,Cv=new te,mh=new te,gh=new te,_h=new te,vh=new xn,yh=new xn,xh=new xn;class Vi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Qi.subVectors(e,n),o.cross(Qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Qi.subVectors(o,n),Pa.subVectors(r,n),ph.subVectors(e,n);const f=Qi.dot(Qi),m=Qi.dot(Pa),p=Qi.dot(ph),h=Pa.dot(Pa),v=Pa.dot(ph),E=f*h-m*m;if(E===0)return c.set(0,0,0),null;const g=1/E,b=(h*p-m*v)*g,R=(f*v-m*p)*g;return c.set(1-b-R,R,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(e,n,r,o,c,f,m,p){return this.getBarycoord(e,n,r,o,za)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,za.x),p.addScaledVector(f,za.y),p.addScaledVector(m,za.z),p)}static getInterpolatedAttribute(e,n,r,o,c,f){return vh.setScalar(0),yh.setScalar(0),xh.setScalar(0),vh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(vh,c.x),f.addScaledVector(yh,c.y),f.addScaledVector(xh,c.z),f}static isFrontFacing(e,n,r,o){return Qi.subVectors(r,n),Pa.subVectors(e,n),Qi.cross(Pa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Qi.cross(Pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Vi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,m;jr.subVectors(o,r),Jr.subVectors(c,r),mh.subVectors(e,r);const p=jr.dot(mh),h=Jr.dot(mh);if(p<=0&&h<=0)return n.copy(r);gh.subVectors(e,o);const v=jr.dot(gh),E=Jr.dot(gh);if(v>=0&&E<=v)return n.copy(o);const g=p*E-v*h;if(g<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(jr,f);_h.subVectors(e,c);const b=jr.dot(_h),R=Jr.dot(_h);if(R>=0&&b<=R)return n.copy(c);const N=b*h-p*R;if(N<=0&&h>=0&&R<=0)return m=h/(h-R),n.copy(r).addScaledVector(Jr,m);const T=v*R-b*E;if(T<=0&&E-v>=0&&b-R>=0)return Cv.subVectors(c,o),m=(E-v)/(E-v+(b-R)),n.copy(o).addScaledVector(Cv,m);const S=1/(T+N+g);return f=N*S,m=g*S,n.copy(r).addScaledVector(jr,f).addScaledVector(Jr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,ji):ji.fromBufferAttribute(c,f),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jc.copy(r.boundingBox)),Jc.applyMatrix4(e.matrixWorld),this.union(Jc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),$c.subVectors(this.max,go),$r.subVectors(e.a,go),el.subVectors(e.b,go),tl.subVectors(e.c,go),Es.subVectors(el,$r),Ms.subVectors(tl,el),nr.subVectors($r,tl);let n=[0,-Es.z,Es.y,0,-Ms.z,Ms.y,0,-nr.z,nr.y,Es.z,0,-Es.x,Ms.z,0,-Ms.x,nr.z,0,-nr.x,-Es.y,Es.x,0,-Ms.y,Ms.x,0,-nr.y,nr.x,0];return!Sh(n,$r,el,tl,$c)||(n=[1,0,0,0,1,0,0,0,1],!Sh(n,$r,el,tl,$c))?!1:(eu.crossVectors(Es,Ms),n=[eu.x,eu.y,eu.z],Sh(n,$r,el,tl,$c))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ba=[new te,new te,new te,new te,new te,new te,new te,new te],ji=new te,Jc=new Bo,$r=new te,el=new te,tl=new te,Es=new te,Ms=new te,nr=new te,go=new te,$c=new te,eu=new te,ir=new te;function Sh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){ir.fromArray(a,c);const m=o.x*Math.abs(ir.x)+o.y*Math.abs(ir.y)+o.z*Math.abs(ir.z),p=e.dot(ir),h=n.dot(ir),v=r.dot(ir);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>m)return!1}return!0}const Nn=new te,tu=new ot;let db=0;class ea extends Ps{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tu.fromBufferAttribute(this,n),tu.applyMatrix3(e),this.setXY(n,tu.x,tu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix3(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix4(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyNormalMatrix(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.transformDirection(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),o=$t(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),o=$t(o,this.array),c=$t(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vy extends ea{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xy extends ea{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Gn extends ea{constructor(e,n,r){super(new Float32Array(e),n,r)}}const hb=new Bo,_o=new te,Eh=new te;class rm{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):hb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(_o,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Eh)),this.expandByPoint(_o.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pb=0;const Hi=new _n,Mh=new kn,nl=new te,Ci=new Bo,vo=new Bo,Fn=new te;class Di extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UM(e)?Xy:Vy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,r){return Hi.makeTranslation(e,n,r),this.applyMatrix4(Hi),this}scale(e,n,r){return Hi.makeScale(e,n,r),this.applyMatrix4(Hi),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nl).negate(),this.translate(nl.x,nl.y,nl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const m=n[c];vo.setFromBufferAttribute(m),this.morphTargetsRelative?(Fn.addVectors(Ci.min,vo.min),Ci.expandByPoint(Fn),Fn.addVectors(Ci.max,vo.max),Ci.expandByPoint(Fn)):(Ci.expandByPoint(vo.min),Ci.expandByPoint(vo.max))}Ci.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Fn));if(n)for(let c=0,f=n.length;c<f;c++){const m=n[c],p=this.morphTargetsRelative;for(let h=0,v=m.count;h<v;h++)Fn.fromBufferAttribute(m,h),p&&(nl.fromBufferAttribute(e,h),Fn.add(nl)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new ea(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const m=[],p=[];for(let A=0;A<r.count;A++)m[A]=new te,p[A]=new te;const h=new te,v=new te,E=new te,g=new ot,b=new ot,R=new ot,N=new te,T=new te;function S(A,O,Y){h.fromBufferAttribute(r,A),v.fromBufferAttribute(r,O),E.fromBufferAttribute(r,Y),g.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),R.fromBufferAttribute(c,Y),v.sub(h),E.sub(h),b.sub(g),R.sub(g);const k=1/(b.x*R.y-R.x*b.y);isFinite(k)&&(N.copy(v).multiplyScalar(R.y).addScaledVector(E,-b.y).multiplyScalar(k),T.copy(E).multiplyScalar(b.x).addScaledVector(v,-R.x).multiplyScalar(k),m[A].add(N),m[O].add(N),m[Y].add(N),p[A].add(T),p[O].add(T),p[Y].add(T))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,O=U.length;A<O;++A){const Y=U[A],k=Y.start,j=Y.count;for(let ge=k,me=k+j;ge<me;ge+=3)S(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const L=new te,M=new te,I=new te,P=new te;function B(A){I.fromBufferAttribute(o,A),P.copy(I);const O=m[A];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),M.crossVectors(P,O);const k=M.dot(p[A])<0?-1:1;f.setXYZW(A,L.x,L.y,L.z,k)}for(let A=0,O=U.length;A<O;++A){const Y=U[A],k=Y.start,j=Y.count;for(let ge=k,me=k+j;ge<me;ge+=3)B(e.getX(ge+0)),B(e.getX(ge+1)),B(e.getX(ge+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ea(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const o=new te,c=new te,f=new te,m=new te,p=new te,h=new te,v=new te,E=new te;if(e)for(let g=0,b=e.count;g<b;g+=3){const R=e.getX(g+0),N=e.getX(g+1),T=e.getX(g+2);o.fromBufferAttribute(n,R),c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,T),v.subVectors(f,c),E.subVectors(o,c),v.cross(E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),h.fromBufferAttribute(r,T),m.add(v),p.add(v),h.add(v),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(T,h.x,h.y,h.z)}else for(let g=0,b=n.count;g<b;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),v.subVectors(f,c),E.subVectors(o,c),v.cross(E),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Fn.fromBufferAttribute(e,n),Fn.normalize(),e.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(m,p){const h=m.array,v=m.itemSize,E=m.normalized,g=new h.constructor(p.length*v);let b=0,R=0;for(let N=0,T=p.length;N<T;N++){m.isInterleavedBufferAttribute?b=p[N]*m.data.stride+m.offset:b=p[N]*v;for(let S=0;S<v;S++)g[R++]=h[b++]}return new ea(g,v,E)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,r=this.index.array,o=this.attributes;for(const m in o){const p=o[m],h=e(p,r);n.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let v=0,E=h.length;v<E;v++){const g=h[v],b=e(g,r);p.push(b)}n.morphAttributes[m]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,p=f.length;m<p;m++){const h=f[m];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let E=0,g=h.length;E<g;E++){const b=h[E];v.push(b.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const c=e.morphAttributes;for(const h in c){const v=[],E=c[h];for(let g=0,b=E.length;g<b;g++)v.push(E[g].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const E=f[h];this.addGroup(E.start,E.count,E.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[r+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const si=new te;class Ou{constructor(e,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)si.fromBufferAttribute(this,n),si.applyMatrix4(e),this.setXYZ(n,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)si.fromBufferAttribute(this,n),si.applyNormalMatrix(e),this.setXYZ(n,si.x,si.y,si.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)si.fromBufferAttribute(this,n),si.transformDirection(e),this.setXYZ(n,si.x,si.y,si.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=$t(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ji(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ji(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ji(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ji(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),o=$t(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),o=$t(o,this.array),c=$t(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Lu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new ea(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let gb=0;class bl extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=gl,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Xh,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gl&&(r.blending=this.blending),this.side!==Ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==Xh&&(r.blendDst=this.blendDst),this.blendEquation!==lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const m in c){const p=c[m];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ot().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wy extends bl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let il;const yo=new te,al=new te,sl=new te,rl=new ot,xo=new ot,Yy=new _n,nu=new te,So=new te,iu=new te,wv=new ot,bh=new ot,Dv=new ot;class _b extends kn{constructor(e=new Wy){if(super(),this.isSprite=!0,this.type="Sprite",il===void 0){il=new Di;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new mb(n,5);il.setIndex([0,1,2,0,2,3]),il.setAttribute("position",new Ou(r,3,0,!1)),il.setAttribute("uv",new Ou(r,2,3,!1))}this.geometry=il,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),al.setFromMatrixScale(this.matrixWorld),Yy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&al.multiplyScalar(-sl.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const f=this.center;au(nu.set(-.5,-.5,0),sl,f,al,o,c),au(So.set(.5,-.5,0),sl,f,al,o,c),au(iu.set(.5,.5,0),sl,f,al,o,c),wv.set(0,0),bh.set(1,0),Dv.set(1,1);let m=e.ray.intersectTriangle(nu,So,iu,!1,yo);if(m===null&&(au(So.set(-.5,.5,0),sl,f,al,o,c),bh.set(0,1),m=e.ray.intersectTriangle(nu,iu,So,!1,yo),m===null))return;const p=e.ray.origin.distanceTo(yo);p<e.near||p>e.far||n.push({distance:p,point:yo.clone(),uv:Vi.getInterpolation(yo,nu,So,iu,wv,bh,Dv,new ot),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function au(a,e,n,r,o,c){rl.subVectors(a,n).addScalar(.5).multiply(r),o!==void 0?(xo.x=c*rl.x-o*rl.y,xo.y=o*rl.x+c*rl.y):xo.copy(rl),a.copy(e),a.x+=xo.x,a.y+=xo.y,a.applyMatrix4(Yy)}const Fa=new te,Th=new te,su=new te,bs=new te,Ah=new te,ru=new te,Rh=new te;class lm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,n),Fa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Th.copy(e).add(n).multiplyScalar(.5),su.copy(n).sub(e).normalize(),bs.copy(this.origin).sub(Th);const c=e.distanceTo(n)*.5,f=-this.direction.dot(su),m=bs.dot(this.direction),p=-bs.dot(su),h=bs.lengthSq(),v=Math.abs(1-f*f);let E,g,b,R;if(v>0)if(E=f*p-m,g=f*m-p,R=c*v,E>=0)if(g>=-R)if(g<=R){const N=1/v;E*=N,g*=N,b=E*(E+f*g+2*m)+g*(f*E+g+2*p)+h}else g=c,E=Math.max(0,-(f*g+m)),b=-E*E+g*(g+2*p)+h;else g=-c,E=Math.max(0,-(f*g+m)),b=-E*E+g*(g+2*p)+h;else g<=-R?(E=Math.max(0,-(-f*c+m)),g=E>0?-c:Math.min(Math.max(-c,-p),c),b=-E*E+g*(g+2*p)+h):g<=R?(E=0,g=Math.min(Math.max(-c,-p),c),b=g*(g+2*p)+h):(E=Math.max(0,-(f*c+m)),g=E>0?c:Math.min(Math.max(-c,-p),c),b=-E*E+g*(g+2*p)+h);else g=f>0?-c:c,E=Math.max(0,-(f*g+m)),b=-E*E+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,E),o&&o.copy(Th).addScaledVector(su,g),b}intersectSphere(e,n){Fa.subVectors(e.center,this.origin);const r=Fa.dot(this.direction),o=Fa.dot(Fa)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),m=r-f,p=r+f;return p<0?null:m<0?this.at(p,n):this.at(m,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,m,p;const h=1/this.direction.x,v=1/this.direction.y,E=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),E>=0?(m=(e.min.z-g.z)*E,p=(e.max.z-g.z)*E):(m=(e.max.z-g.z)*E,p=(e.min.z-g.z)*E),r>p||m>o)||((m>r||r!==r)&&(r=m),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,n,r,o,c){Ah.subVectors(n,e),ru.subVectors(r,e),Rh.crossVectors(Ah,ru);let f=this.direction.dot(Rh),m;if(f>0){if(o)return null;m=1}else if(f<0)m=-1,f=-f;else return null;bs.subVectors(this.origin,e);const p=m*this.direction.dot(ru.crossVectors(bs,ru));if(p<0)return null;const h=m*this.direction.dot(Ah.cross(bs));if(h<0||p+h>f)return null;const v=-m*bs.dot(Rh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Do extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=Ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nv=new _n,ar=new lm,lu=new rm,Uv=new te,ou=new te,cu=new te,uu=new te,Ch=new te,fu=new te,Lv=new te,du=new te;class Un extends kn{constructor(e=new Di,n=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(c&&m){fu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const v=m[p],E=c[p];v!==0&&(Ch.fromBufferAttribute(E,e),f?fu.addScaledVector(Ch,v):fu.addScaledVector(Ch.sub(n),v))}n.add(fu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(c),ar.copy(e.ray).recast(e.near),!(lu.containsPoint(ar.origin)===!1&&(ar.intersectSphere(lu,Uv)===null||ar.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Nv.copy(c).invert(),ar.copy(e.ray).applyMatrix4(Nv),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,E=c.attributes.normal,g=c.groups,b=c.drawRange;if(m!==null)if(Array.isArray(f))for(let R=0,N=g.length;R<N;R++){const T=g[R],S=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(m.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=m.getX(M),B=m.getX(M+1),A=m.getX(M+2);o=hu(this,S,e,r,h,v,E,P,B,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let T=R,S=N;T<S;T+=3){const U=m.getX(T),L=m.getX(T+1),M=m.getX(T+2);o=hu(this,f,e,r,h,v,E,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let R=0,N=g.length;R<N;R++){const T=g[R],S=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(p.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=M,B=M+1,A=M+2;o=hu(this,S,e,r,h,v,E,P,B,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let T=R,S=N;T<S;T+=3){const U=T,L=T+1,M=T+2;o=hu(this,f,e,r,h,v,E,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}}}function vb(a,e,n,r,o,c,f,m){let p;if(e.side===gi?p=r.intersectTriangle(f,c,o,!0,m):p=r.intersectTriangle(o,c,f,e.side===Ns,m),p===null)return null;du.copy(m),du.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(du);return h<n.near||h>n.far?null:{distance:h,point:du.clone(),object:a}}function hu(a,e,n,r,o,c,f,m,p,h){a.getVertexPosition(m,ou),a.getVertexPosition(p,cu),a.getVertexPosition(h,uu);const v=vb(a,e,n,r,ou,cu,uu,Lv);if(v){const E=new te;Vi.getBarycoord(Lv,ou,cu,uu,E),o&&(v.uv=Vi.getInterpolatedAttribute(o,m,p,h,E,new ot)),c&&(v.uv1=Vi.getInterpolatedAttribute(c,m,p,h,E,new ot)),f&&(v.normal=Vi.getInterpolatedAttribute(f,m,p,h,E,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:m,b:p,c:h,normal:new te,materialIndex:0};Vi.getNormal(ou,cu,uu,g.normal),v.face=g,v.barycoord=E}return v}class yb extends ei{constructor(e=null,n=1,r=1,o,c,f,m,p,h=Kn,v=Kn,E,g){super(null,f,m,p,h,v,o,c,E,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new te,xb=new te,Sb=new gt;class As{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=wh.subVectors(r,n).cross(xb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(wh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(o,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Sb.getNormalMatrix(e),o=this.coplanarPoint(wh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new rm,Eb=new ot(.5,.5),pu=new te;class om{constructor(e=new As,n=new As,r=new As,o=new As,c=new As,f=new As){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(n),m[2].copy(r),m[3].copy(o),m[4].copy(c),m[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=da,r=!1){const o=this.planes,c=e.elements,f=c[0],m=c[1],p=c[2],h=c[3],v=c[4],E=c[5],g=c[6],b=c[7],R=c[8],N=c[9],T=c[10],S=c[11],U=c[12],L=c[13],M=c[14],I=c[15];if(o[0].setComponents(h-f,b-v,S-R,I-U).normalize(),o[1].setComponents(h+f,b+v,S+R,I+U).normalize(),o[2].setComponents(h+m,b+E,S+N,I+L).normalize(),o[3].setComponents(h-m,b-E,S-N,I-L).normalize(),r)o[4].setComponents(p,g,T,M).normalize(),o[5].setComponents(h-p,b-g,S-T,I-M).normalize();else if(o[4].setComponents(h-p,b-g,S-T,I-M).normalize(),n===da)o[5].setComponents(h+p,b+g,S+T,I+M).normalize();else if(n===Oo)o[5].setComponents(p,g,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=Eb.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(pu.x=o.normal.x>0?e.max.x:e.min.x,pu.y=o.normal.y>0?e.max.y:e.min.y,pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qy extends ei{constructor(e=[],n=hr,r,o,c,f,m,p,h,v){super(e,n,r,o,c,f,m,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mb extends ei{constructor(e,n,r,o,c,f,m,p,h){super(e,n,r,o,c,f,m,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sl extends ei{constructor(e,n,r=ma,o,c,f,m=Kn,p=Kn,h,v=Ya,E=1){if(v!==Ya&&v!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:E};super(g,o,c,f,m,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bb extends Sl{constructor(e,n=ma,r=hr,o,c,f=Kn,m=Kn,p,h=Ya){const v={width:e,height:e,depth:1},E=[v,v,v,v,v,v];super(e,e,n,r,o,c,f,m,p,h),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zy extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Os extends Di{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const m=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],h=[],v=[],E=[];let g=0,b=0;R("z","y","x",-1,-1,r,n,e,f,c,0),R("z","y","x",1,-1,r,n,-e,f,c,1),R("x","z","y",1,1,e,r,n,o,f,2),R("x","z","y",1,-1,e,r,-n,o,f,3),R("x","y","z",1,-1,e,n,r,o,c,4),R("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(E,2));function R(N,T,S,U,L,M,I,P,B,A,O){const Y=M/B,k=I/A,j=M/2,ge=I/2,me=P/2,ie=B+1,F=A+1;let X=0,le=0;const Se=new te;for(let we=0;we<F;we++){const z=we*k-ge;for(let K=0;K<ie;K++){const Me=K*Y-j;Se[N]=Me*U,Se[T]=z*L,Se[S]=me,h.push(Se.x,Se.y,Se.z),Se[N]=0,Se[T]=0,Se[S]=P>0?1:-1,v.push(Se.x,Se.y,Se.z),E.push(K/B),E.push(1-we/A),X+=1}}for(let we=0;we<A;we++)for(let z=0;z<B;z++){const K=g+z+ie*we,Me=g+z+ie*(we+1),Oe=g+(z+1)+ie*(we+1),ze=g+(z+1)+ie*we;p.push(K,Me,ze),p.push(Me,Oe,ze),le+=6}m.addGroup(b,le,O),b+=le,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xu extends Di{constructor(e=1,n=1,r=1,o=32,c=1,f=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:m,thetaLength:p};const h=this;o=Math.floor(o),c=Math.floor(c);const v=[],E=[],g=[],b=[];let R=0;const N=[],T=r/2;let S=0;U(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Gn(E,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(b,2));function U(){const M=new te,I=new te;let P=0;const B=(n-e)/r;for(let A=0;A<=c;A++){const O=[],Y=A/c,k=Y*(n-e)+e;for(let j=0;j<=o;j++){const ge=j/o,me=ge*p+m,ie=Math.sin(me),F=Math.cos(me);I.x=k*ie,I.y=-Y*r+T,I.z=k*F,E.push(I.x,I.y,I.z),M.set(ie,B,F).normalize(),g.push(M.x,M.y,M.z),b.push(ge,1-Y),O.push(R++)}N.push(O)}for(let A=0;A<o;A++)for(let O=0;O<c;O++){const Y=N[O][A],k=N[O+1][A],j=N[O+1][A+1],ge=N[O][A+1];(e>0||O!==0)&&(v.push(Y,k,ge),P+=3),(n>0||O!==c-1)&&(v.push(k,j,ge),P+=3)}h.addGroup(S,P,0),S+=P}function L(M){const I=R,P=new ot,B=new te;let A=0;const O=M===!0?e:n,Y=M===!0?1:-1;for(let j=1;j<=o;j++)E.push(0,T*Y,0),g.push(0,Y,0),b.push(.5,.5),R++;const k=R;for(let j=0;j<=o;j++){const me=j/o*p+m,ie=Math.cos(me),F=Math.sin(me);B.x=O*F,B.y=T*Y,B.z=O*ie,E.push(B.x,B.y,B.z),g.push(0,Y,0),P.x=ie*.5+.5,P.y=F*.5*Y+.5,b.push(P.x,P.y),R++}for(let j=0;j<o;j++){const ge=I+j,me=k+j;M===!0?v.push(me,me+1,ge):v.push(me+1,me,ge),A+=3}h.addGroup(S,A,M===!0?1:2),S+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class No extends Xu{constructor(e=1,n=1,r=32,o=1,c=!1,f=0,m=Math.PI*2){super(0,e,n,r,o,c,f,m),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:m}}static fromJSON(e){return new No(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends Di{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,m=Math.floor(r),p=Math.floor(o),h=m+1,v=p+1,E=e/m,g=n/p,b=[],R=[],N=[],T=[];for(let S=0;S<v;S++){const U=S*g-f;for(let L=0;L<h;L++){const M=L*E-c;R.push(M,-U,0),N.push(0,0,1),T.push(L/m),T.push(1-S/p)}}for(let S=0;S<p;S++)for(let U=0;U<m;U++){const L=U+h*S,M=U+h*(S+1),I=U+1+h*(S+1),P=U+1+h*S;b.push(L,M,P),b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Gn(R,3)),this.setAttribute("normal",new Gn(N,3)),this.setAttribute("uv",new Gn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class cm extends Di{constructor(e=.5,n=1,r=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:f},r=Math.max(3,r),o=Math.max(1,o);const m=[],p=[],h=[],v=[];let E=e;const g=(n-e)/o,b=new te,R=new ot;for(let N=0;N<=o;N++){for(let T=0;T<=r;T++){const S=c+T/r*f;b.x=E*Math.cos(S),b.y=E*Math.sin(S),p.push(b.x,b.y,b.z),h.push(0,0,1),R.x=(b.x/n+1)/2,R.y=(b.y/n+1)/2,v.push(R.x,R.y)}E+=g}for(let N=0;N<o;N++){const T=N*(r+1);for(let S=0;S<r;S++){const U=S+T,L=U,M=U+r+1,I=U+r+2,P=U+1;m.push(L,M,P),m.push(M,I,P)}}this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(h,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class um extends Di{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:m},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+m,Math.PI);let h=0;const v=[],E=new te,g=new te,b=[],R=[],N=[],T=[];for(let S=0;S<=r;S++){const U=[],L=S/r,M=f+L*m,I=e*Math.cos(M),P=Math.sqrt(e*e-I*I);let B=0;S===0&&f===0?B=.5/n:S===r&&p===Math.PI&&(B=-.5/n);for(let A=0;A<=n;A++){const O=A/n,Y=o+O*c;E.x=-P*Math.cos(Y),E.y=I,E.z=P*Math.sin(Y),R.push(E.x,E.y,E.z),g.copy(E).normalize(),N.push(g.x,g.y,g.z),T.push(O+B,1-L),U.push(h++)}v.push(U)}for(let S=0;S<r;S++)for(let U=0;U<n;U++){const L=v[S][U+1],M=v[S][U],I=v[S+1][U],P=v[S+1][U+1];(S!==0||f>0)&&b.push(L,M,P),(S!==r-1||p<Math.PI)&&b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Gn(R,3)),this.setAttribute("normal",new Gn(N,3)),this.setAttribute("uv",new Gn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new um(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function El(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Ov(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Ov(o[0])){const c=[];for(let f=0,m=o.length;f<m;f++)c[f]=o[f].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function ri(a){const e={};for(let n=0;n<a.length;n++){const r=El(a[n]);for(const o in r)e[o]=r[o]}return e}function Ov(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Tb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Ky(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Ab={clone:El,merge:ri};var Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=El(e.uniforms),this.uniformsGroups=Tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new ot().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wb extends ga{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iv extends bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Db extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nb extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qy extends kn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Ub extends Qy{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Dh=new _n,Pv=new te,zv=new te;class Lb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new om,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Pv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pv),zv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zv),n.updateMatrixWorld(),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Oo||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mu=new te,gu=new Us,ra=new te;class jy extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mu,gu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ra.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(mu,gu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new te,Bv=new ot,Fv=new ot;class Gi extends jy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,n){return this.getViewBounds(e,Bv,Fv),n.subVectors(Fv,Bv)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Co*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/h,o*=f.width/p,r*=f.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fm extends jy{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,m=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,m-=v*this.view.offsetY,p=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ob extends Lb{constructor(){super(new fm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ib extends Qy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Ob}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ll=-90,ol=1;class Pb extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gi(ll,ol,e,n);o.layers=this.layers,this.add(o);const c=new Gi(ll,ol,e,n);c.layers=this.layers,this.add(c);const f=new Gi(ll,ol,e,n);f.layers=this.layers,this.add(f);const m=new Gi(ll,ol,e,n);m.layers=this.layers,this.add(m);const p=new Gi(ll,ol,e,n);p.layers=this.layers,this.add(p);const h=new Gi(ll,ol,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,m,p]=n;for(const h of n)this.remove(h);if(e===da)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Oo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,p,h,v]=this.children,E=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,3,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(E,g,b),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class zb extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hv=new _n;class Bb{constructor(e,n,r=0,o=1/0){this.ray=new lm(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new am,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Nt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Hv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hv),this}intersectObject(e,n=!0,r=[]){return Lp(e,this,r,n),r.sort(kv),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Lp(e[o],this,r,n);return r.sort(kv),r}}function kv(a,e){return a.distance-e.distance}function Lp(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,m=c.length;f<m;f++)Lp(c[f],e,n,!0)}}class Gv{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sm=class Sm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Sm.prototype.isMatrix2=!0;let Vv=Sm;class Fb extends Ps{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xv(a,e,n,r){const o=Hb(r);switch(n){case zy:return a*e;case Fy:return a*e/o.components*o.byteLength;case jp:return a*e/o.components*o.byteLength;case pr:return a*e*2/o.components*o.byteLength;case Jp:return a*e*2/o.components*o.byteLength;case By:return a*e*3/o.components*o.byteLength;case $i:return a*e*4/o.components*o.byteLength;case $p:return a*e*4/o.components*o.byteLength;case Su:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mu:case bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(a,16)*Math.max(e,8)/4;case ep:case np:return Math.max(a,8)*Math.max(e,8)/2;case ap:case sp:case lp:case op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case rp:case Cu:case cp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case gp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case vp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case bp:case Tp:case Ap:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Rp:case Cp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case wu:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hb(a){switch(a){case wi:case Ly:return{byteLength:1,components:1};case Uo:case Oy:case Wa:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case ma:case Zp:case fa:return{byteLength:4,components:1};case Iy:case Py:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jy(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function kb(a){const e=new WeakMap;function n(m,p){const h=m.array,v=m.usage,E=h.byteLength,g=a.createBuffer();a.bindBuffer(p,g),a.bufferData(p,h,v),m.onUploadCallback();let b;if(h instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=a.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=a.SHORT;else if(h instanceof Uint32Array)b=a.UNSIGNED_INT;else if(h instanceof Int32Array)b=a.INT;else if(h instanceof Int8Array)b=a.BYTE;else if(h instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:E}}function r(m,p,h){const v=p.array,E=p.updateRanges;if(a.bindBuffer(h,m),E.length===0)a.bufferSubData(h,0,v);else{E.sort((b,R)=>b.start-R.start);let g=0;for(let b=1;b<E.length;b++){const R=E[g],N=E[b];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++g,E[g]=N)}E.length=g+1;for(let b=0,R=E.length;b<R;b++){const N=E[b];a.bufferSubData(h,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(a.deleteBuffer(p.buffer),e.delete(m))}function f(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=e.get(m);(!v||v.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,n(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:o,remove:c,update:f}}var Gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vb=`#ifdef USE_ALPHAHASH
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
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
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
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qb=`#ifdef USE_BATCHING
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
#endif`,jb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f1=`#define PI 3.141592653589793
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
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,O1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,H1=`uniform sampler2D dfgLUT;
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
}`,k1=`
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
#endif`,G1=`#if defined( RE_IndirectDiffuse )
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
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
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fT=`#ifdef USE_NORMALMAP
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
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ST=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ET=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RT=`float getShadowMask() {
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
}`,CT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
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
}`,KT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,jT=`#define DISTANCE
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
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
}`,tA=`uniform vec3 diffuse;
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
}`,nA=`#include <common>
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,rA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,oA=`#define NORMAL
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
}`,cA=`#define NORMAL
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
}`,uA=`#define PHONG
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
}`,fA=`#define PHONG
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
}`,dA=`#define STANDARD
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
}`,hA=`#define STANDARD
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
}`,pA=`#define TOON
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
}`,mA=`#define TOON
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
}`,gA=`uniform float size;
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,yA=`uniform vec3 color;
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
}`,xA=`uniform float rotation;
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
}`,SA=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Gb,alphahash_pars_fragment:Vb,alphamap_fragment:Xb,alphamap_pars_fragment:Wb,alphatest_fragment:Yb,alphatest_pars_fragment:qb,aomap_fragment:Zb,aomap_pars_fragment:Kb,batching_pars_vertex:Qb,batching_vertex:jb,begin_vertex:Jb,beginnormal_vertex:$b,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:r1,color_fragment:l1,color_pars_fragment:o1,color_pars_vertex:c1,color_vertex:u1,common:f1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:h1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:y1,envmap_fragment:x1,envmap_common_pars_fragment:S1,envmap_pars_fragment:E1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:O1,envmap_vertex:b1,fog_vertex:T1,fog_pars_vertex:A1,fog_fragment:R1,fog_pars_fragment:C1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:D1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:U1,lights_pars_begin:L1,lights_toon_fragment:I1,lights_toon_pars_fragment:P1,lights_phong_fragment:z1,lights_phong_pars_fragment:B1,lights_physical_fragment:F1,lights_physical_pars_fragment:H1,lights_fragment_begin:k1,lights_fragment_maps:G1,lights_fragment_end:V1,lightprobes_pars_fragment:X1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:Z1,map_fragment:K1,map_pars_fragment:Q1,map_particle_fragment:j1,map_particle_pars_fragment:J1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:eT,morphinstance_vertex:tT,morphcolor_vertex:nT,morphnormal_vertex:iT,morphtarget_pars_vertex:aT,morphtarget_vertex:sT,normal_fragment_begin:rT,normal_fragment_maps:lT,normal_pars_fragment:oT,normal_pars_vertex:cT,normal_vertex:uT,normalmap_pars_fragment:fT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:pT,iridescence_pars_fragment:mT,opaque_fragment:gT,packing:_T,premultiplied_alpha_fragment:vT,project_vertex:yT,dithering_fragment:xT,dithering_pars_fragment:ST,roughnessmap_fragment:ET,roughnessmap_pars_fragment:MT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:TT,shadowmap_vertex:AT,shadowmask_pars_fragment:RT,skinbase_vertex:CT,skinning_pars_vertex:wT,skinning_vertex:DT,skinnormal_vertex:NT,specularmap_fragment:UT,specularmap_pars_fragment:LT,tonemapping_fragment:OT,tonemapping_pars_fragment:IT,transmission_fragment:PT,transmission_pars_fragment:zT,uv_pars_fragment:BT,uv_pars_vertex:FT,uv_vertex:HT,worldpos_vertex:kT,background_vert:GT,background_frag:VT,backgroundCube_vert:XT,backgroundCube_frag:WT,cube_vert:YT,cube_frag:qT,depth_vert:ZT,depth_frag:KT,distance_vert:QT,distance_frag:jT,equirect_vert:JT,equirect_frag:$T,linedashed_vert:eA,linedashed_frag:tA,meshbasic_vert:nA,meshbasic_frag:iA,meshlambert_vert:aA,meshlambert_frag:sA,meshmatcap_vert:rA,meshmatcap_frag:lA,meshnormal_vert:oA,meshnormal_frag:cA,meshphong_vert:uA,meshphong_frag:fA,meshphysical_vert:dA,meshphysical_frag:hA,meshtoon_vert:pA,meshtoon_frag:mA,points_vert:gA,points_frag:_A,shadow_vert:vA,shadow_frag:yA,sprite_vert:xA,sprite_frag:SA},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ca={basic:{uniforms:ri([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:ri([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:ri([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:ri([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:ri([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:ri([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:ri([Ve.points,Ve.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:ri([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:ri([Ve.common,Ve.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:ri([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:ri([Ve.sprite,Ve.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:ri([Ve.common,Ve.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:ri([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ca.physical={uniforms:ri([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const _u={r:0,b:0,g:0},EA=new _n,$y=new gt;$y.set(-1,0,0,0,1,0,0,0,1);function MA(a,e,n,r,o,c){const f=new Rt(0);let m=o===!0?0:1,p,h,v=null,E=0,g=null;function b(U){let L=U.isScene===!0?U.background:null;if(L&&L.isTexture){const M=U.backgroundBlurriness>0;L=e.get(L,M)}return L}function R(U){let L=!1;const M=b(U);M===null?T(f,m):M&&M.isColor&&(T(M,1),L=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function N(U,L){const M=b(L);M&&(M.isCubeTexture||M.mapping===Vu)?(h===void 0&&(h=new Un(new Os(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:El(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply($y),h.material.toneMapped=Ut.getTransfer(M.colorSpace)!==Jt,(v!==M||E!==M.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,v=M,E=M.version,g=a.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(p===void 0&&(p=new Un(new fr(2,2),new ga({name:"BackgroundMaterial",uniforms:El(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=M,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(M.colorSpace)!==Jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),p.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||E!==M.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,v=M,E=M.version,g=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function T(U,L){U.getRGB(_u,Ky(a)),n.buffers.color.setClear(_u.r,_u.g,_u.b,L,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,L=1){f.set(U),m=L,T(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,T(f,m)},render:R,addToRenderList:N,dispose:S}}function bA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,f=!1;function m(k,j,ge,me,ie){let F=!1;const X=E(k,me,ge,j);c!==X&&(c=X,h(c.object)),F=b(k,me,ge,ie),F&&R(k,me,ge,ie),ie!==null&&e.update(ie,a.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,M(k,j,ge,me),ie!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function v(k){return a.deleteVertexArray(k)}function E(k,j,ge,me){const ie=me.wireframe===!0;let F=r[j.id];F===void 0&&(F={},r[j.id]=F);const X=k.isInstancedMesh===!0?k.id:0;let le=F[X];le===void 0&&(le={},F[X]=le);let Se=le[ge.id];Se===void 0&&(Se={},le[ge.id]=Se);let we=Se[ie];return we===void 0&&(we=g(p()),Se[ie]=we),we}function g(k){const j=[],ge=[],me=[];for(let ie=0;ie<n;ie++)j[ie]=0,ge[ie]=0,me[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ge,attributeDivisors:me,object:k,attributes:{},index:null}}function b(k,j,ge,me){const ie=c.attributes,F=j.attributes;let X=0;const le=ge.getAttributes();for(const Se in le)if(le[Se].location>=0){const z=ie[Se];let K=F[Se];if(K===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;X++}return c.attributesNum!==X||c.index!==me}function R(k,j,ge,me){const ie={},F=j.attributes;let X=0;const le=ge.getAttributes();for(const Se in le)if(le[Se].location>=0){let z=F[Se];z===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(z=k.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),ie[Se]=K,X++}c.attributes=ie,c.attributesNum=X,c.index=me}function N(){const k=c.newAttributes;for(let j=0,ge=k.length;j<ge;j++)k[j]=0}function T(k){S(k,0)}function S(k,j){const ge=c.newAttributes,me=c.enabledAttributes,ie=c.attributeDivisors;ge[k]=1,me[k]===0&&(a.enableVertexAttribArray(k),me[k]=1),ie[k]!==j&&(a.vertexAttribDivisor(k,j),ie[k]=j)}function U(){const k=c.newAttributes,j=c.enabledAttributes;for(let ge=0,me=j.length;ge<me;ge++)j[ge]!==k[ge]&&(a.disableVertexAttribArray(ge),j[ge]=0)}function L(k,j,ge,me,ie,F,X){X===!0?a.vertexAttribIPointer(k,j,ge,ie,F):a.vertexAttribPointer(k,j,ge,me,ie,F)}function M(k,j,ge,me){N();const ie=me.attributes,F=ge.getAttributes(),X=j.defaultAttributeValues;for(const le in F){const Se=F[le];if(Se.location>=0){let we=ie[le];if(we===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(we=k.instanceColor)),we!==void 0){const z=we.normalized,K=we.itemSize,Me=e.get(we);if(Me===void 0)continue;const Oe=Me.buffer,ze=Me.type,ae=Me.bytesPerElement,Ae=ze===a.INT||ze===a.UNSIGNED_INT||we.gpuType===Zp;if(we.isInterleavedBufferAttribute){const Re=we.data,Fe=Re.stride,st=we.offset;if(Re.isInstancedInterleavedBuffer){for(let tt=0;tt<Se.locationSize;tt++)S(Se.location+tt,Re.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let tt=0;tt<Se.locationSize;tt++)T(Se.location+tt);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let tt=0;tt<Se.locationSize;tt++)L(Se.location+tt,K/Se.locationSize,ze,z,Fe*ae,(st+K/Se.locationSize*tt)*ae,Ae)}else{if(we.isInstancedBufferAttribute){for(let Re=0;Re<Se.locationSize;Re++)S(Se.location+Re,we.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Re=0;Re<Se.locationSize;Re++)T(Se.location+Re);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let Re=0;Re<Se.locationSize;Re++)L(Se.location+Re,K/Se.locationSize,ze,z,K*ae,K/Se.locationSize*Re*ae,Ae)}}else if(X!==void 0){const z=X[le];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(Se.location,z);break;case 3:a.vertexAttrib3fv(Se.location,z);break;case 4:a.vertexAttrib4fv(Se.location,z);break;default:a.vertexAttrib1fv(Se.location,z)}}}}U()}function I(){O();for(const k in r){const j=r[k];for(const ge in j){const me=j[ge];for(const ie in me){const F=me[ie];for(const X in F)v(F[X].object),delete F[X];delete me[ie]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const ge in j){const me=j[ge];for(const ie in me){const F=me[ie];for(const X in F)v(F[X].object),delete F[X];delete me[ie]}}delete r[k.id]}function B(k){for(const j in r){const ge=r[j];for(const me in ge){const ie=ge[me];if(ie[k.id]===void 0)continue;const F=ie[k.id];for(const X in F)v(F[X].object),delete F[X];delete ie[k.id]}}}function A(k){for(const j in r){const ge=r[j],me=k.isInstancedMesh===!0?k.id:0,ie=ge[me];if(ie!==void 0){for(const F in ie){const X=ie[F];for(const le in X)v(X[le].object),delete X[le];delete ie[F]}delete ge[me],Object.keys(ge).length===0&&delete r[j]}}}function O(){Y(),f=!0,c!==o&&(c=o,h(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:N,enableAttribute:T,disableUnusedAttributes:U}}function TA(a,e,n){let r;function o(p){r=p}function c(p,h){a.drawArrays(r,p,h),n.update(h,r,1)}function f(p,h,v){v!==0&&(a.drawArraysInstanced(r,p,h,v),n.update(h,r,v))}function m(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,v);let g=0;for(let b=0;b<v;b++)g+=h[b];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=m}function AA(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(B){return!(B!==$i&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(B){const A=B===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==fa&&!A)}function p(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=p(h);v!==h&&(ft("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const E=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:E,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:T,maxAttributes:S,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:M,maxSamples:I,samples:P}}function RA(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new As,m=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(E,g){const b=E.length!==0||g||r!==0||o;return o=g,r=E.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(E,g){n=v(E,g,0)},this.setState=function(E,g,b){const R=E.clippingPlanes,N=E.clipIntersection,T=E.clipShadows,S=a.get(E);if(!o||R===null||R.length===0||c&&!T)c?v(null):h();else{const U=c?0:r,L=U*4;let M=S.clippingState||null;p.value=M,M=v(R,g,L,b);for(let I=0;I!==L;++I)M[I]=n[I];S.clippingState=M,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(E,g,b,R){const N=E!==null?E.length:0;let T=null;if(N!==0){if(T=p.value,R!==!0||T===null){const S=b+N*4,U=g.matrixWorldInverse;m.getNormalMatrix(U),(T===null||T.length<S)&&(T=new Float32Array(S));for(let L=0,M=b;L!==N;++L,M+=4)f.copy(E[L]).applyMatrix4(U,m),f.normal.toArray(T,M),T[M+3]=f.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}const ws=4,Wv=[.125,.215,.35,.446,.526,.582],or=20,CA=256,Eo=new fm,Yv=new Rt;let Nh=null,Uh=0,Lh=0,Oh=!1;const wA=new te;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:m=wA}=c;Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,m),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Uh,Lh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hr||e.mapping===xl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Wa,format:$i,colorSpace:Du,depthBuffer:!1},o=Zv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DA(c)),this._blurMaterial=UA(c,e,n),this._ggxMaterial=NA(c,e,n)}return o}_compileMaterial(e){const n=new Un(new Di,e);this._renderer.compile(n,Eo)}_sceneToCubeUV(e,n,r,o,c){const p=new Gi(90,1,n,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],E=this._renderer,g=E.autoClear,b=E.toneMapping;E.getClearColor(Yv),E.toneMapping=ha,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(o),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Os,new Do({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let S=!1;const U=e.background;U?U.isColor&&(T.color.copy(U),e.background=null,S=!0):(T.color.copy(Yv),S=!0);for(let L=0;L<6;L++){const M=L%3;M===0?(p.up.set(0,h[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[L],c.y,c.z)):M===1?(p.up.set(0,0,h[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[L],c.z)):(p.up.set(0,h[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;cl(o,M*I,L>2?I:0,I,I),E.setRenderTarget(o),S&&E.render(N,p),E.render(e,p)}E.toneMapping=b,E.autoClear=g,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===hr||e.mapping===xl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;cl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Eo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[r];m.material=f;const p=f.uniforms,h=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),E=Math.sqrt(h*h-v*v),g=0+h*1.25,b=E*g,{_lodMax:R}=this,N=this._sizeLods[r],T=3*N*(r>R-ws?r-R+ws:0),S=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=R-n,cl(c,T,S,3*N,2*N),o.setRenderTarget(c),o.render(m,Eo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-r,cl(e,T,S,3*N,2*N),o.setRenderTarget(e),o.render(m,Eo)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,m){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const v=3,E=this._lodMeshes[o];E.material=h;const g=h.uniforms,b=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*or-1),N=c/R,T=isFinite(c)?1+Math.floor(v*N):or;T>or&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${or}`);const S=[];let U=0;for(let B=0;B<or;++B){const A=B/N,O=Math.exp(-A*A/2);S.push(O),B===0?U+=O:B<T&&(U+=2*O)}for(let B=0;B<S.length;B++)S[B]=S[B]/U;g.envMap.value=e.texture,g.samples.value=T,g.weights.value=S,g.latitudinal.value=f==="latitudinal",m&&(g.poleAxis.value=m);const{_lodMax:L}=this;g.dTheta.value=R,g.mipInt.value=L-r;const M=this._sizeLods[o],I=3*M*(o>L-ws?o-L+ws:0),P=4*(this._cubeSize-M);cl(n,I,P,3*M,2*M),p.setRenderTarget(n),p.render(E,Eo)}}function DA(a){const e=[],n=[],r=[];let o=a;const c=a-ws+1+Wv.length;for(let f=0;f<c;f++){const m=Math.pow(2,o);e.push(m);let p=1/m;f>a-ws?p=Wv[f-a+ws-1]:f===0&&(p=0),n.push(p);const h=1/(m-2),v=-h,E=1+h,g=[v,v,E,v,E,E,v,v,E,E,v,E],b=6,R=6,N=3,T=2,S=1,U=new Float32Array(N*R*b),L=new Float32Array(T*R*b),M=new Float32Array(S*R*b);for(let P=0;P<b;P++){const B=P%3*2/3-1,A=P>2?0:-1,O=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];U.set(O,N*R*P),L.set(g,T*R*P);const Y=[P,P,P,P,P,P];M.set(Y,S*R*P)}const I=new Di;I.setAttribute("position",new ea(U,N)),I.setAttribute("uv",new ea(L,T)),I.setAttribute("faceIndex",new ea(M,S)),r.push(new Un(I,null)),o>ws&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Zv(a,e,n){const r=new pa(a,e,n);return r.texture.mapping=Vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cl(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function NA(a,e,n){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function UA(a,e,n){const r=new Float32Array(or),o=new te(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Kv(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Qv(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Wu(){return`

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
	`}class ex extends pa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new qy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Os(5,5,5),c=new ga({name:"CubemapFromEquirect",uniforms:El(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:Ga});c.uniforms.tEquirect.value=n;const f=new Un(o,c),m=n.minFilter;return n.minFilter===cr&&(n.minFilter=Hn),new Pb(1,10,this).update(e,f),n.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function LA(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,b=!1){return g==null?null:b?f(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===ah||b===sh)if(e.has(g)){const R=e.get(g).texture;return m(R,g.mapping)}else{const R=g.image;if(R&&R.height>0){const N=new ex(R.height);return N.fromEquirectangularTexture(a,g),e.set(g,N),g.addEventListener("dispose",h),m(N.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const b=g.mapping,R=b===ah||b===sh,N=b===hr||b===xl;if(R||N){let T=n.get(g);const S=T!==void 0?T.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new qv(a)),T=R?r.fromEquirectangular(g,T):r.fromCubemap(g,T),T.texture.pmremVersion=g.pmremVersion,n.set(g,T),T.texture;if(T!==void 0)return T.texture;{const U=g.image;return R&&U&&U.height>0||N&&U&&p(U)?(r===null&&(r=new qv(a)),T=R?r.fromEquirectangular(g):r.fromCubemap(g),T.texture.pmremVersion=g.pmremVersion,n.set(g,T),g.addEventListener("dispose",v),T.texture):null}}}return g}function m(g,b){return b===ah?g.mapping=hr:b===sh&&(g.mapping=xl),g}function p(g){let b=0;const R=6;for(let N=0;N<R;N++)g[N]!==void 0&&b++;return b===R}function h(g){const b=g.target;b.removeEventListener("dispose",h);const R=e.get(b);R!==void 0&&(e.delete(b),R.dispose())}function v(g){const b=g.target;b.removeEventListener("dispose",v);const R=n.get(b);R!==void 0&&(n.delete(b),R.dispose())}function E(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:E}}function OA(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&_l("WebGLRenderer: "+r+" extension not supported."),o}}}function IA(a,e,n,r){const o={},c=new WeakMap;function f(E){const g=E.target;g.index!==null&&e.remove(g.index);for(const R in g.attributes)e.remove(g.attributes[R]);g.removeEventListener("dispose",f),delete o[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function m(E,g){return o[g.id]===!0||(g.addEventListener("dispose",f),o[g.id]=!0,n.memory.geometries++),g}function p(E){const g=E.attributes;for(const b in g)e.update(g[b],a.ARRAY_BUFFER)}function h(E){const g=[],b=E.index,R=E.attributes.position;let N=0;if(R===void 0)return;if(b!==null){const U=b.array;N=b.version;for(let L=0,M=U.length;L<M;L+=3){const I=U[L+0],P=U[L+1],B=U[L+2];g.push(I,P,P,B,B,I)}}else{const U=R.array;N=R.version;for(let L=0,M=U.length/3-1;L<M;L+=3){const I=L+0,P=L+1,B=L+2;g.push(I,P,P,B,B,I)}}const T=new(R.count>=65535?Xy:Vy)(g,1);T.version=N;const S=c.get(E);S&&e.remove(S),c.set(E,T)}function v(E){const g=c.get(E);if(g){const b=E.index;b!==null&&g.version<b.version&&h(E)}else h(E);return c.get(E)}return{get:m,update:p,getWireframeAttribute:v}}function PA(a,e,n){let r;function o(E){r=E}let c,f;function m(E){c=E.type,f=E.bytesPerElement}function p(E,g){a.drawElements(r,g,c,E*f),n.update(g,r,1)}function h(E,g,b){b!==0&&(a.drawElementsInstanced(r,g,c,E*f,b),n.update(g,r,b))}function v(E,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,E,0,b);let N=0;for(let T=0;T<b;T++)N+=g[T];n.update(N,r,1)}this.setMode=o,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=v}function zA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,m){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=m*(c/3);break;case a.LINES:n.lines+=m*(c/2);break;case a.LINE_STRIP:n.lines+=m*(c-1);break;case a.LINE_LOOP:n.lines+=m*c;break;case a.POINTS:n.points+=m*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function BA(a,e,n){const r=new WeakMap,o=new xn;function c(f,m,p){const h=f.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=v!==void 0?v.length:0;let g=r.get(m);if(g===void 0||g.count!==E){let O=function(){B.dispose(),r.delete(m),m.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const b=m.morphAttributes.position!==void 0,R=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,T=m.morphAttributes.position||[],S=m.morphAttributes.normal||[],U=m.morphAttributes.color||[];let L=0;b===!0&&(L=1),R===!0&&(L=2),N===!0&&(L=3);let M=m.attributes.position.count*L,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*I*4*E),B=new ky(P,M,I,E);B.type=fa,B.needsUpdate=!0;const A=L*4;for(let Y=0;Y<E;Y++){const k=T[Y],j=S[Y],ge=U[Y],me=M*I*4*Y;for(let ie=0;ie<k.count;ie++){const F=ie*A;b===!0&&(o.fromBufferAttribute(k,ie),P[me+F+0]=o.x,P[me+F+1]=o.y,P[me+F+2]=o.z,P[me+F+3]=0),R===!0&&(o.fromBufferAttribute(j,ie),P[me+F+4]=o.x,P[me+F+5]=o.y,P[me+F+6]=o.z,P[me+F+7]=0),N===!0&&(o.fromBufferAttribute(ge,ie),P[me+F+8]=o.x,P[me+F+9]=o.y,P[me+F+10]=o.z,P[me+F+11]=ge.itemSize===4?o.w:1)}}g={count:E,texture:B,size:new ot(M,I)},r.set(m,g),m.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let b=0;for(let N=0;N<h.length;N++)b+=h[N];const R=m.morphTargetsRelative?1:1-b;p.getUniforms().setValue(a,"morphTargetBaseInfluence",R),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function FA(a,e,n,r,o){let c=new WeakMap;function f(h){const v=o.render.frame,E=h.geometry,g=e.get(h,E);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==v&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return g}function m(){c=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:f,dispose:m}}const HA={[Ay]:"LINEAR_TONE_MAPPING",[Ry]:"REINHARD_TONE_MAPPING",[Cy]:"CINEON_TONE_MAPPING",[qp]:"ACES_FILMIC_TONE_MAPPING",[Dy]:"AGX_TONE_MAPPING",[Ny]:"NEUTRAL_TONE_MAPPING",[wy]:"CUSTOM_TONE_MAPPING"};function kA(a,e,n,r,o,c){const f=new pa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Sl(e,n):void 0}),m=new pa(e,n,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),p=new Di;p.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const h=new wb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Un(p,h),E=new fm(-1,1,1,-1,0,1);let g=null,b=null,R=!1,N,T=null,S=[],U=!1;this.setSize=function(L,M){f.setSize(L,M),m.setSize(L,M);for(let I=0;I<S.length;I++){const P=S[I];P.setSize&&P.setSize(L,M)}},this.setEffects=function(L){S=L,U=S.length>0&&S[0].isRenderPass===!0;const M=f.width,I=f.height;for(let P=0;P<S.length;P++){const B=S[P];B.setSize&&B.setSize(M,I)}},this.begin=function(L,M){if(R||L.toneMapping===ha&&S.length===0)return!1;if(T=M,M!==null){const I=M.width,P=M.height;(f.width!==I||f.height!==P)&&this.setSize(I,P)}return U===!1&&L.setRenderTarget(f),N=L.toneMapping,L.toneMapping=ha,!0},this.hasRenderPass=function(){return U},this.end=function(L,M){L.toneMapping=N,R=!0;let I=f,P=m;for(let B=0;B<S.length;B++){const A=S[B];if(A.enabled!==!1&&(A.render(L,P,I,M),A.needsSwap!==!1)){const O=I;I=P,P=O}}if(g!==L.outputColorSpace||b!==L.toneMapping){g=L.outputColorSpace,b=L.toneMapping,h.defines={},Ut.getTransfer(g)===Jt&&(h.defines.SRGB_TRANSFER="");const B=HA[b];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(T),L.render(v,E),T=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),m.dispose(),p.dispose(),h.dispose()}}const tx=new ei,Op=new Sl(1,1),nx=new ky,ix=new ib,ax=new qy,jv=[],Jv=[],$v=new Float32Array(16),ey=new Float32Array(9),ty=new Float32Array(4);function Tl(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=jv[o];if(c===void 0&&(c=new Float32Array(o),jv[o]=c),e!==0){r.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=n,a[f].toArray(c,m)}return c}function Pn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function zn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Yu(a,e){let n=Jv[e];n===void 0&&(n=new Int32Array(e),Jv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function GA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function VA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;a.uniform2fv(this.addr,e),zn(n,e)}}function XA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pn(n,e))return;a.uniform3fv(this.addr,e),zn(n,e)}}function WA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;a.uniform4fv(this.addr,e),zn(n,e)}}function YA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Pn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,r))return;ty.set(r),a.uniformMatrix2fv(this.addr,!1,ty),zn(n,r)}}function qA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Pn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,r))return;ey.set(r),a.uniformMatrix3fv(this.addr,!1,ey),zn(n,r)}}function ZA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Pn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,r))return;$v.set(r),a.uniformMatrix4fv(this.addr,!1,$v),zn(n,r)}}function KA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function QA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;a.uniform2iv(this.addr,e),zn(n,e)}}function jA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;a.uniform3iv(this.addr,e),zn(n,e)}}function JA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;a.uniform4iv(this.addr,e),zn(n,e)}}function $A(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function e2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;a.uniform2uiv(this.addr,e),zn(n,e)}}function t2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;a.uniform3uiv(this.addr,e),zn(n,e)}}function n2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;a.uniform4uiv(this.addr,e),zn(n,e)}}function i2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Op.compareFunction=n.isReversedDepthBuffer()?tm:em,c=Op):c=tx,n.setTexture2D(e||c,o)}function a2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||ix,o)}function s2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||ax,o)}function r2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||nx,o)}function l2(a){switch(a){case 5126:return GA;case 35664:return VA;case 35665:return XA;case 35666:return WA;case 35674:return YA;case 35675:return qA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return jA;case 35669:case 35673:return JA;case 5125:return $A;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}function o2(a,e){a.uniform1fv(this.addr,e)}function c2(a,e){const n=Tl(e,this.size,2);a.uniform2fv(this.addr,n)}function u2(a,e){const n=Tl(e,this.size,3);a.uniform3fv(this.addr,n)}function f2(a,e){const n=Tl(e,this.size,4);a.uniform4fv(this.addr,n)}function d2(a,e){const n=Tl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function h2(a,e){const n=Tl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function p2(a,e){const n=Tl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function m2(a,e){a.uniform1iv(this.addr,e)}function g2(a,e){a.uniform2iv(this.addr,e)}function _2(a,e){a.uniform3iv(this.addr,e)}function v2(a,e){a.uniform4iv(this.addr,e)}function y2(a,e){a.uniform1uiv(this.addr,e)}function x2(a,e){a.uniform2uiv(this.addr,e)}function S2(a,e){a.uniform3uiv(this.addr,e)}function E2(a,e){a.uniform4uiv(this.addr,e)}function M2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Pn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=Op:f=tx;for(let m=0;m!==o;++m)n.setTexture2D(e[m]||f,c[m])}function b2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Pn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||ix,c[f])}function T2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Pn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||ax,c[f])}function A2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);Pn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||nx,c[f])}function R2(a){switch(a){case 5126:return o2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return _2;case 35669:case 35673:return v2;case 5125:return y2;case 36294:return x2;case 36295:return S2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}class C2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=l2(n.type)}}class w2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R2(n.type)}}class D2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const m=o[c];m.setValue(e,n[m.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function ny(a,e){a.seq.push(e),a.map[e.id]=e}function N2(a,e,n){const r=a.name,o=r.length;for(Ih.lastIndex=0;;){const c=Ih.exec(r),f=Ih.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&f+2===o){ny(n,h===void 0?new C2(m,a,e):new w2(m,a,e));break}else{let E=n.map[m];E===void 0&&(E=new D2(m),ny(n,E)),n=E}}}class Tu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const m=e.getActiveUniform(n,f),p=e.getUniformLocation(n,m.name);N2(m,p,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const m=n[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function iy(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const U2=37297;let L2=0;function O2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const m=f+1;r.push(`${m===e?">":" "} ${m}: ${n[f]}`)}return r.join(`
`)}const ay=new gt;function I2(a){Ut._getMatrix(ay,Ut.workingColorSpace,a);const e=`mat3( ${ay.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(a)){case Nu:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function sy(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+O2(a.getShaderSource(e),m)}else return c}function P2(a,e){const n=I2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const z2={[Ay]:"Linear",[Ry]:"Reinhard",[Cy]:"Cineon",[qp]:"ACESFilmic",[Dy]:"AgX",[Ny]:"Neutral",[wy]:"Custom"};function B2(a,e){const n=z2[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vu=new te;function F2(){Ut.getLuminanceCoefficients(vu);const a=vu.x.toFixed(4),e=vu.y.toFixed(4),n=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function k2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function G2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let m=1;c.type===a.FLOAT_MAT2&&(m=2),c.type===a.FLOAT_MAT3&&(m=3),c.type===a.FLOAT_MAT4&&(m=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:m}}return n}function Ao(a){return a!==""}function ry(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ly(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(a){return a.replace(V2,W2)}const X2=new Map;function W2(a,e){let n=Et[e];if(n===void 0){const r=X2.get(e);if(r!==void 0)n=Et[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ip(n)}const Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oy(a){return a.replace(Y2,q2)}function q2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function cy(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z2={[Ro]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function K2(a){return Z2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q2={[hr]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function j2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Q2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const J2={[xl]:"ENVMAP_MODE_REFRACTION"};function $2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eR={[Ty]:"ENVMAP_BLENDING_MULTIPLY",[SM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function tR(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":eR[a.combine]||"ENVMAP_BLENDING_NONE"}function nR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function iR(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,m=n.fragmentShader;const p=K2(n),h=j2(n),v=$2(n),E=tR(n),g=nR(n),b=H2(n),R=k2(c),N=o.createProgram();let T,S,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Ao).join(`
`),T.length>0&&(T+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Ao).join(`
`),S.length>0&&(S+=`
`)):(T=[cy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),S=[cy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+E:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?Et.tonemapping_pars_fragment:"",n.toneMapping!==ha?B2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,P2("linearToOutputTexel",n.outputColorSpace),F2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),f=Ip(f),f=ry(f,n),f=ly(f,n),m=Ip(m),m=ry(m,n),m=ly(m,n),f=oy(f),m=oy(m),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,T=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,S=["#define varying in",n.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=U+T+f,M=U+S+m,I=iy(o,o.VERTEX_SHADER,L),P=iy(o,o.FRAGMENT_SHADER,M);o.attachShader(N,I),o.attachShader(N,P),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function B(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(N)||"",ge=o.getShaderInfoLog(I)||"",me=o.getShaderInfoLog(P)||"",ie=j.trim(),F=ge.trim(),X=me.trim();let le=!0,Se=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(le=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,N,I,P);else{const we=sy(o,I,"vertex"),z=sy(o,P,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+we+`
`+z)}else ie!==""?ft("WebGLProgram: Program Info Log:",ie):(F===""||X==="")&&(Se=!1);Se&&(k.diagnostics={runnable:le,programLog:ie,vertexShader:{log:F,prefix:T},fragmentShader:{log:X,prefix:S}})}o.deleteShader(I),o.deleteShader(P),A=new Tu(o,N),O=G2(o,N)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let O;this.getAttributes=function(){return O===void 0&&B(this),O};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(N,U2)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=P,this}let aR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new rR(e),n.set(e,r)),r}}class rR{constructor(e){this.id=aR++,this.code=e,this.usedTimes=0}}function lR(a){return a===pr||a===Cu||a===wu}function oR(a,e,n,r,o,c){const f=new am,m=new sR,p=new Set,h=[],v=new Map,E=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return p.add(A),A===0?"uv":`uv${A}`}function N(A,O,Y,k,j,ge){const me=k.fog,ie=j.geometry,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,le=e.get(A.envMap||F,X),Se=le&&le.mapping===Vu?le.image.height:null,we=b[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const z=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,K=z!==void 0?z.length:0;let Me=0;ie.morphAttributes.position!==void 0&&(Me=1),ie.morphAttributes.normal!==void 0&&(Me=2),ie.morphAttributes.color!==void 0&&(Me=3);let Oe,ze,ae,Ae;if(we){const qe=ca[we];Oe=qe.vertexShader,ze=qe.fragmentShader}else{Oe=A.vertexShader,ze=A.fragmentShader;const qe=m.getVertexShaderStage(A),en=m.getFragmentShaderStage(A);m.update(A,qe,en),ae=qe.id,Ae=en.id}const Re=a.getRenderTarget(),Fe=a.state.buffers.depth.getReversed(),st=j.isInstancedMesh===!0,tt=j.isBatchedMesh===!0,Xt=!!A.map,ut=!!A.matcap,pt=!!le,dt=!!A.aoMap,ht=!!A.lightMap,It=!!A.bumpMap&&A.wireframe===!1,Ke=!!A.normalMap,_t=!!A.displacementMap,rn=!!A.emissiveMap,Pt=!!A.metalnessMap,un=!!A.roughnessMap,Q=A.anisotropy>0,Lt=A.clearcoat>0,ve=A.dispersion>0,C=A.iridescence>0,y=A.sheen>0,V=A.transmission>0,q=Q&&!!A.anisotropyMap,$=Lt&&!!A.clearcoatMap,re=Lt&&!!A.clearcoatNormalMap,de=Lt&&!!A.clearcoatRoughnessMap,ee=C&&!!A.iridescenceMap,se=C&&!!A.iridescenceThicknessMap,_e=y&&!!A.sheenColorMap,Ne=y&&!!A.sheenRoughnessMap,Ie=!!A.specularMap,De=!!A.specularColorMap,We=!!A.specularIntensityMap,Ze=V&&!!A.transmissionMap,Xe=V&&!!A.thicknessMap,W=!!A.gradientMap,Le=!!A.alphaMap,xe=A.alphaTest>0,Pe=!!A.alphaHash,Be=!!A.extensions;let Ce=ha;A.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ce=a.toneMapping);const Je={shaderID:we,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:ze,defines:A.defines,customVertexShaderID:ae,customFragmentShaderID:Ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:tt,batchingColor:tt&&j._colorsTexture!==null,instancing:st,instancingColor:st&&j.instanceColor!==null,instancingMorph:st&&j.morphTexture!==null,outputColorSpace:Re===null?a.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Xt,matcap:ut,envMap:pt,envMapMode:pt&&le.mapping,envMapCubeUVHeight:Se,aoMap:dt,lightMap:ht,bumpMap:It,normalMap:Ke,displacementMap:_t,emissiveMap:rn,normalMapObjectSpace:Ke&&A.normalMapType===TM,normalMapTangentSpace:Ke&&A.normalMapType===Dp,packedNormalMap:Ke&&A.normalMapType===Dp&&lR(A.normalMap.format),metalnessMap:Pt,roughnessMap:un,anisotropy:Q,anisotropyMap:q,clearcoat:Lt,clearcoatMap:$,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:ve,iridescence:C,iridescenceMap:ee,iridescenceThicknessMap:se,sheen:y,sheenColorMap:_e,sheenRoughnessMap:Ne,specularMap:Ie,specularColorMap:De,specularIntensityMap:We,transmission:V,transmissionMap:Ze,thicknessMap:Xe,gradientMap:W,opaque:A.transparent===!1&&A.blending===gl&&A.alphaToCoverage===!1,alphaMap:Le,alphaTest:xe,alphaHash:Pe,combine:A.combine,mapUv:Xt&&R(A.map.channel),aoMapUv:dt&&R(A.aoMap.channel),lightMapUv:ht&&R(A.lightMap.channel),bumpMapUv:It&&R(A.bumpMap.channel),normalMapUv:Ke&&R(A.normalMap.channel),displacementMapUv:_t&&R(A.displacementMap.channel),emissiveMapUv:rn&&R(A.emissiveMap.channel),metalnessMapUv:Pt&&R(A.metalnessMap.channel),roughnessMapUv:un&&R(A.roughnessMap.channel),anisotropyMapUv:q&&R(A.anisotropyMap.channel),clearcoatMapUv:$&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:re&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:se&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&R(A.sheenRoughnessMap.channel),specularMapUv:Ie&&R(A.specularMap.channel),specularColorMapUv:De&&R(A.specularColorMap.channel),specularIntensityMapUv:We&&R(A.specularIntensityMap.channel),transmissionMapUv:Ze&&R(A.transmissionMap.channel),thicknessMapUv:Xe&&R(A.thicknessMap.channel),alphaMapUv:Le&&R(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ke||Q),vertexNormals:!!ie.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(Xt||Le),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ie.attributes.normal===void 0&&Ke===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:Fe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Me,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ge.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&Y.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Xt&&A.map.isVideoTexture===!0&&Ut.getTransfer(A.map.colorSpace)===Jt,decodeVideoTextureEmissive:rn&&A.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(A.emissiveMap.colorSpace)===Jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ua,flipSided:A.side===gi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function T(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)O.push(Y),O.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(S(O,A),U(O,A),O.push(a.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function S(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function U(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function L(A){const O=b[A.type];let Y;if(O){const k=ca[O];Y=Ab.clone(k.uniforms)}else Y=A.uniforms;return Y}function M(A,O){let Y=v.get(O);return Y!==void 0?++Y.usedTimes:(Y=new iR(a,O,A,o),h.push(Y),v.set(O,Y)),Y}function I(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),v.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function B(){m.dispose()}return{getParameters:N,getProgramCacheKey:T,getUniforms:L,acquireProgram:M,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:B}}function cR(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let m=a.get(f);return m===void 0&&(m={},a.set(f,m)),m}function r(f){a.delete(f)}function o(f,m,p){a.get(f)[m]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function uR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function uy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function fy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function m(g,b,R,N,T,S){let U=a[e];return U===void 0?(U={id:g.id,object:g,geometry:b,material:R,materialVariant:f(g),groupOrder:N,renderOrder:g.renderOrder,z:T,group:S},a[e]=U):(U.id=g.id,U.object=g,U.geometry=b,U.material=R,U.materialVariant=f(g),U.groupOrder=N,U.renderOrder=g.renderOrder,U.z=T,U.group=S),e++,U}function p(g,b,R,N,T,S){const U=m(g,b,R,N,T,S);R.transmission>0?r.push(U):R.transparent===!0?o.push(U):n.push(U)}function h(g,b,R,N,T,S){const U=m(g,b,R,N,T,S);R.transmission>0?r.unshift(U):R.transparent===!0?o.unshift(U):n.unshift(U)}function v(g,b,R){n.length>1&&n.sort(g||uR),r.length>1&&r.sort(b||uy),o.length>1&&o.sort(b||uy),R&&(n.reverse(),r.reverse(),o.reverse())}function E(){for(let g=e,b=a.length;g<b;g++){const R=a[g];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:h,finish:E,sort:v}}function fR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new fy,a.set(r,[f])):o>=c.length?(f=new fy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function dR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Rt};break;case"SpotLight":n={position:new te,direction:new te,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=n,n}}}function hR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let pR=0;function mR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function gR(a){const e=new dR,n=hR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new _n,f=new _n;function m(h){let v=0,E=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,R=0,N=0,T=0,S=0,U=0,L=0,M=0,I=0,P=0,B=0;h.sort(mR);for(let O=0,Y=h.length;O<Y;O++){const k=h[O],j=k.color,ge=k.intensity,me=k.distance;let ie=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===pr?ie=k.shadow.map.texture:ie=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=j.r*ge,E+=j.g*ge,g+=j.b*ge;else if(k.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(k.sh.coefficients[F],ge);B++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,le=n.get(k);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,r.directionalShadow[b]=le,r.directionalShadowMap[b]=ie,r.directionalShadowMatrix[b]=k.shadow.matrix,U++}r.directional[b]=F,b++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(j).multiplyScalar(ge),F.distance=me,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,r.spot[N]=F;const X=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,X.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[N]=X.matrix,k.castShadow){const le=n.get(k);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,r.spotShadow[N]=le,r.spotShadowMap[N]=ie,M++}N++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(j).multiplyScalar(ge),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),r.rectArea[T]=F,T++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const X=k.shadow,le=n.get(k);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,le.shadowCameraNear=X.camera.near,le.shadowCameraFar=X.camera.far,r.pointShadow[R]=le,r.pointShadowMap[R]=ie,r.pointShadowMatrix[R]=k.shadow.matrix,L++}r.point[R]=F,R++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(ge),F.groundColor.copy(k.groundColor).multiplyScalar(ge),r.hemi[S]=F,S++}}T>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=E,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==b||A.pointLength!==R||A.spotLength!==N||A.rectAreaLength!==T||A.hemiLength!==S||A.numDirectionalShadows!==U||A.numPointShadows!==L||A.numSpotShadows!==M||A.numSpotMaps!==I||A.numLightProbes!==B)&&(r.directional.length=b,r.spot.length=N,r.rectArea.length=T,r.point.length=R,r.hemi.length=S,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=M+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,A.directionalLength=b,A.pointLength=R,A.spotLength=N,A.rectAreaLength=T,A.hemiLength=S,A.numDirectionalShadows=U,A.numPointShadows=L,A.numSpotShadows=M,A.numSpotMaps=I,A.numLightProbes=B,r.version=pR++)}function p(h,v){let E=0,g=0,b=0,R=0,N=0;const T=v.matrixWorldInverse;for(let S=0,U=h.length;S<U;S++){const L=h[S];if(L.isDirectionalLight){const M=r.directional[E];M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),E++}else if(L.isSpotLight){const M=r.spot[b];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),b++}else if(L.isRectAreaLight){const M=r.rectArea[R];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),f.identity(),c.copy(L.matrixWorld),c.premultiply(T),f.extractRotation(c),M.halfWidth.set(L.width*.5,0,0),M.halfHeight.set(0,L.height*.5,0),M.halfWidth.applyMatrix4(f),M.halfHeight.applyMatrix4(f),R++}else if(L.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),g++}else if(L.isHemisphereLight){const M=r.hemi[N];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(T),N++}}}return{setup:m,setupView:p,state:r}}function dy(a){const e=new gR(a),n=[],r=[],o=[];function c(g){E.camera=g,n.length=0,r.length=0,o.length=0}function f(g){n.push(g)}function m(g){r.push(g)}function p(g){o.push(g)}function h(){e.setup(n)}function v(g){e.setupView(n,g)}const E={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:E,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:m,pushLightProbeGrid:p}}function _R(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let m;return f===void 0?(m=new dy(a),e.set(o,[m])):c>=f.length?(m=new dy(a),f.push(m)):m=f[c],m}function r(){e=new WeakMap}return{get:n,dispose:r}}const vR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yR=`uniform sampler2D shadow_pass;
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
}`,xR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],SR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],hy=new _n,Mo=new te,Ph=new te;function ER(a,e,n){let r=new om;const o=new ot,c=new ot,f=new xn,m=new Db,p=new Nb,h={},v=n.maxTextureSize,E={[Ns]:gi,[gi]:Ns,[ua]:ua},g=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:vR,fragmentShader:yR}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const R=new Di;R.setAttribute("position",new ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Un(R,g),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let S=this.type;this.render=function(P,B,A){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||P.length===0)return;this.type===nM&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);const O=a.getRenderTarget(),Y=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ga),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ge=S!==this.type;ge&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(ie=>ie.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,ie=P.length;me<ie;me++){const F=P[me],X=F.shadow;if(X===void 0){ft("WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const le=X.getFrameExtents();o.multiply(le),c.copy(X.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,X.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,X.mapSize.y=c.y));const Se=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Se,X.map===null||ge===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===To){if(F.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pa(o.x,o.y,{format:pr,type:Wa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),X.map.texture.name=F.name+".shadowMap",X.map.depthTexture=new Sl(o.x,o.y,fa),X.map.depthTexture.name=F.name+".shadowMapDepth",X.map.depthTexture.format=Ya,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kn,X.map.depthTexture.magFilter=Kn}else F.isPointLight?(X.map=new ex(o.x),X.map.depthTexture=new bb(o.x,ma)):(X.map=new pa(o.x,o.y),X.map.depthTexture=new Sl(o.x,o.y,ma)),X.map.depthTexture.name=F.name+".shadowMap",X.map.depthTexture.format=Ya,this.type===Ro?(X.map.depthTexture.compareFunction=Se?tm:em,X.map.depthTexture.minFilter=Hn,X.map.depthTexture.magFilter=Hn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kn,X.map.depthTexture.magFilter=Kn);X.camera.updateProjectionMatrix()}const we=X.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<we;z++){if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,z),a.clear();else{z===0&&(a.setRenderTarget(X.map),a.clear());const K=X.getViewport(z);f.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(f)}if(F.isPointLight){const K=X.camera,Me=X.matrix,Oe=F.distance||K.far;Oe!==K.far&&(K.far=Oe,K.updateProjectionMatrix()),Mo.setFromMatrixPosition(F.matrixWorld),K.position.copy(Mo),Ph.copy(K.position),Ph.add(xR[z]),K.up.copy(SR[z]),K.lookAt(Ph),K.updateMatrixWorld(),Me.makeTranslation(-Mo.x,-Mo.y,-Mo.z),hy.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(hy,K.coordinateSystem,K.reversedDepth)}else X.updateMatrices(F);r=X.getFrustum(),M(B,A,X.camera,F,this.type)}X.isPointLightShadow!==!0&&this.type===To&&U(X,A),X.needsUpdate=!1}S=this.type,T.needsUpdate=!1,a.setRenderTarget(O,Y,k)};function U(P,B){const A=e.update(N);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pa(o.x,o.y,{format:pr,type:Wa})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(B,null,A,g,N,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(B,null,A,b,N,null)}function L(P,B,A,O){let Y=null;const k=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=A.isPointLight===!0?p:m,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=Y.uuid,ge=B.uuid;let me=h[j];me===void 0&&(me={},h[j]=me);let ie=me[ge];ie===void 0&&(ie=Y.clone(),me[ge]=ie,B.addEventListener("dispose",I)),Y=ie}if(Y.visible=B.visible,Y.wireframe=B.wireframe,O===To?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:E[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=a.properties.get(Y);j.light=A}return Y}function M(P,B,A,O,Y){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===To)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const ge=e.update(P),me=P.material;if(Array.isArray(me)){const ie=ge.groups;for(let F=0,X=ie.length;F<X;F++){const le=ie[F],Se=me[le.materialIndex];if(Se&&Se.visible){const we=L(P,Se,O,Y);P.onBeforeShadow(a,P,B,A,ge,we,le),a.renderBufferDirect(A,null,ge,we,P,le),P.onAfterShadow(a,P,B,A,ge,we,le)}}}else if(me.visible){const ie=L(P,me,O,Y);P.onBeforeShadow(a,P,B,A,ge,ie,null),a.renderBufferDirect(A,null,ge,ie,P,null),P.onAfterShadow(a,P,B,A,ge,ie,null)}}const j=P.children;for(let ge=0,me=j.length;ge<me;ge++)M(j[ge],B,A,O,Y)}function I(P){P.target.removeEventListener("dispose",I);for(const A in h){const O=h[A],Y=P.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function MR(a,e){function n(){let W=!1;const Le=new xn;let xe=null;const Pe=new xn(0,0,0,0);return{setMask:function(Be){xe!==Be&&!W&&(a.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){W=Be},setClear:function(Be,Ce,Je,qe,en){en===!0&&(Be*=qe,Ce*=qe,Je*=qe),Le.set(Be,Ce,Je,qe),Pe.equals(Le)===!1&&(a.clearColor(Be,Ce,Je,qe),Pe.copy(Le))},reset:function(){W=!1,xe=null,Pe.set(-1,0,0,0)}}}function r(){let W=!1,Le=!1,xe=null,Pe=null,Be=null;return{setReversed:function(Ce){if(Le!==Ce){const Je=e.get("EXT_clip_control");Ce?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Ce;const qe=Be;Be=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Ce){Ce?Re(a.DEPTH_TEST):Fe(a.DEPTH_TEST)},setMask:function(Ce){xe!==Ce&&!W&&(a.depthMask(Ce),xe=Ce)},setFunc:function(Ce){if(Le&&(Ce=IM[Ce]),Pe!==Ce){switch(Ce){case Wh:a.depthFunc(a.NEVER);break;case Yh:a.depthFunc(a.ALWAYS);break;case qh:a.depthFunc(a.LESS);break;case yl:a.depthFunc(a.LEQUAL);break;case Zh:a.depthFunc(a.EQUAL);break;case Kh:a.depthFunc(a.GEQUAL);break;case Qh:a.depthFunc(a.GREATER);break;case jh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){Be!==Ce&&(Be=Ce,Le&&(Ce=1-Ce),a.clearDepth(Ce))},reset:function(){W=!1,xe=null,Pe=null,Be=null,Le=!1}}}function o(){let W=!1,Le=null,xe=null,Pe=null,Be=null,Ce=null,Je=null,qe=null,en=null;return{setTest:function(zt){W||(zt?Re(a.STENCIL_TEST):Fe(a.STENCIL_TEST))},setMask:function(zt){Le!==zt&&!W&&(a.stencilMask(zt),Le=zt)},setFunc:function(zt,ti,ni){(xe!==zt||Pe!==ti||Be!==ni)&&(a.stencilFunc(zt,ti,ni),xe=zt,Pe=ti,Be=ni)},setOp:function(zt,ti,ni){(Ce!==zt||Je!==ti||qe!==ni)&&(a.stencilOp(zt,ti,ni),Ce=zt,Je=ti,qe=ni)},setLocked:function(zt){W=zt},setClear:function(zt){en!==zt&&(a.clearStencil(zt),en=zt)},reset:function(){W=!1,Le=null,xe=null,Pe=null,Be=null,Ce=null,Je=null,qe=null,en=null}}}const c=new n,f=new r,m=new o,p=new WeakMap,h=new WeakMap;let v={},E={},g={},b=new WeakMap,R=[],N=null,T=!1,S=null,U=null,L=null,M=null,I=null,P=null,B=null,A=new Rt(0,0,0),O=0,Y=!1,k=null,j=null,ge=null,me=null,ie=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,le=0;const Se=a.getParameter(a.VERSION);Se.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Se)[1]),X=le>=1):Se.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),X=le>=2);let we=null,z={};const K=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),Oe=new xn().fromArray(K),ze=new xn().fromArray(Me);function ae(W,Le,xe,Pe){const Be=new Uint8Array(4),Ce=a.createTexture();a.bindTexture(W,Ce),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<xe;Je++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,Be):a.texImage2D(Le+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Be);return Ce}const Ae={};Ae[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),Ae[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ae[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),Re(a.DEPTH_TEST),f.setFunc(yl),It(!1),Ke(uv),Re(a.CULL_FACE),dt(Ga);function Re(W){v[W]!==!0&&(a.enable(W),v[W]=!0)}function Fe(W){v[W]!==!1&&(a.disable(W),v[W]=!1)}function st(W,Le){return g[W]!==Le?(a.bindFramebuffer(W,Le),g[W]=Le,W===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Le),W===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function tt(W,Le){let xe=R,Pe=!1;if(W){xe=b.get(Le),xe===void 0&&(xe=[],b.set(Le,xe));const Be=W.textures;if(xe.length!==Be.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Ce=0,Je=Be.length;Ce<Je;Ce++)xe[Ce]=a.COLOR_ATTACHMENT0+Ce;xe.length=Be.length,Pe=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(xe)}function Xt(W){return N!==W?(a.useProgram(W),N=W,!0):!1}const ut={[lr]:a.FUNC_ADD,[aM]:a.FUNC_SUBTRACT,[sM]:a.FUNC_REVERSE_SUBTRACT};ut[rM]=a.MIN,ut[lM]=a.MAX;const pt={[oM]:a.ZERO,[cM]:a.ONE,[uM]:a.SRC_COLOR,[Vh]:a.SRC_ALPHA,[gM]:a.SRC_ALPHA_SATURATE,[pM]:a.DST_COLOR,[dM]:a.DST_ALPHA,[fM]:a.ONE_MINUS_SRC_COLOR,[Xh]:a.ONE_MINUS_SRC_ALPHA,[mM]:a.ONE_MINUS_DST_COLOR,[hM]:a.ONE_MINUS_DST_ALPHA,[_M]:a.CONSTANT_COLOR,[vM]:a.ONE_MINUS_CONSTANT_COLOR,[yM]:a.CONSTANT_ALPHA,[xM]:a.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Le,xe,Pe,Be,Ce,Je,qe,en,zt){if(W===Ga){T===!0&&(Fe(a.BLEND),T=!1);return}if(T===!1&&(Re(a.BLEND),T=!0),W!==iM){if(W!==S||zt!==Y){if((U!==lr||I!==lr)&&(a.blendEquation(a.FUNC_ADD),U=lr,I=lr),zt)switch(W){case gl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fv:a.blendFunc(a.ONE,a.ONE);break;case dv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case hv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case gl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case dv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}L=null,M=null,P=null,B=null,A.set(0,0,0),O=0,S=W,Y=zt}return}Be=Be||Le,Ce=Ce||xe,Je=Je||Pe,(Le!==U||Be!==I)&&(a.blendEquationSeparate(ut[Le],ut[Be]),U=Le,I=Be),(xe!==L||Pe!==M||Ce!==P||Je!==B)&&(a.blendFuncSeparate(pt[xe],pt[Pe],pt[Ce],pt[Je]),L=xe,M=Pe,P=Ce,B=Je),(qe.equals(A)===!1||en!==O)&&(a.blendColor(qe.r,qe.g,qe.b,en),A.copy(qe),O=en),S=W,Y=!1}function ht(W,Le){W.side===ua?Fe(a.CULL_FACE):Re(a.CULL_FACE);let xe=W.side===gi;Le&&(xe=!xe),It(xe),W.blending===gl&&W.transparent===!1?dt(Ga):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pe=W.stencilWrite;m.setTest(Pe),Pe&&(m.setMask(W.stencilWriteMask),m.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),m.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Re(a.SAMPLE_ALPHA_TO_COVERAGE):Fe(a.SAMPLE_ALPHA_TO_COVERAGE)}function It(W){k!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),k=W)}function Ke(W){W!==eM?(Re(a.CULL_FACE),W!==j&&(W===uv?a.cullFace(a.BACK):W===tM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Fe(a.CULL_FACE),j=W}function _t(W){W!==ge&&(X&&a.lineWidth(W),ge=W)}function rn(W,Le,xe){W?(Re(a.POLYGON_OFFSET_FILL),(me!==Le||ie!==xe)&&(me=Le,ie=xe,f.getReversed()&&(Le=-Le),a.polygonOffset(Le,xe))):Fe(a.POLYGON_OFFSET_FILL)}function Pt(W){W?Re(a.SCISSOR_TEST):Fe(a.SCISSOR_TEST)}function un(W){W===void 0&&(W=a.TEXTURE0+F-1),we!==W&&(a.activeTexture(W),we=W)}function Q(W,Le,xe){xe===void 0&&(we===null?xe=a.TEXTURE0+F-1:xe=we);let Pe=z[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},z[xe]=Pe),(Pe.type!==W||Pe.texture!==Le)&&(we!==xe&&(a.activeTexture(xe),we=xe),a.bindTexture(W,Le||Ae[W]),Pe.type=W,Pe.texture=Le)}function Lt(){const W=z[we];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ve(){try{a.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function y(){try{a.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function V(){try{a.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function $(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function re(){try{a.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function de(){try{a.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ee(){try{a.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function se(){try{a.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function _e(W){return E[W]!==void 0?E[W]:a.getParameter(W)}function Ne(W,Le){E[W]!==Le&&(a.pixelStorei(W,Le),E[W]=Le)}function Ie(W){Oe.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function De(W){ze.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function We(W,Le){let xe=h.get(Le);xe===void 0&&(xe=new WeakMap,h.set(Le,xe));let Pe=xe.get(W);Pe===void 0&&(Pe=a.getUniformBlockIndex(Le,W.name),xe.set(W,Pe))}function Ze(W,Le){const Pe=h.get(Le).get(W);p.get(Le)!==Pe&&(a.uniformBlockBinding(Le,Pe,W.__bindingPointIndex),p.set(Le,Pe))}function Xe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),v={},E={},we=null,z={},g={},b=new WeakMap,R=[],N=null,T=!1,S=null,U=null,L=null,M=null,I=null,P=null,B=null,A=new Rt(0,0,0),O=0,Y=!1,k=null,j=null,ge=null,me=null,ie=null,Oe.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:Re,disable:Fe,bindFramebuffer:st,drawBuffers:tt,useProgram:Xt,setBlending:dt,setMaterial:ht,setFlipSided:It,setCullFace:Ke,setLineWidth:_t,setPolygonOffset:rn,setScissorTest:Pt,activeTexture:un,bindTexture:Q,unbindTexture:Lt,compressedTexImage2D:ve,compressedTexImage3D:C,texImage2D:ee,texImage3D:se,pixelStorei:Ne,getParameter:_e,updateUBOMapping:We,uniformBlockBinding:Ze,texStorage2D:re,texStorage3D:de,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:Ie,viewport:De,reset:Xe}}function bR(a,e,n,r,o,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,v=new WeakMap,E=new Set;let g;const b=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,y){return R?new OffscreenCanvas(C,y):Uu("canvas")}function T(C,y,V){let q=1;const $=ve(C);if(($.width>V||$.height>V)&&(q=V/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(q*$.width),de=Math.floor(q*$.height);g===void 0&&(g=N(re,de));const ee=y?N(re,de):g;return ee.width=re,ee.height=de,ee.getContext("2d").drawImage(C,0,0,re,de),ft("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+de+")."),ee}else return"data"in C&&ft("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function S(C){return C.generateMipmaps}function U(C){a.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(C,y,V,q,$,re=!1){if(C!==null){if(a[C]!==void 0)return a[C];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;q&&(de=e.get("EXT_texture_norm16"),de||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===a.RED&&(V===a.FLOAT&&(ee=a.R32F),V===a.HALF_FLOAT&&(ee=a.R16F),V===a.UNSIGNED_BYTE&&(ee=a.R8),V===a.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),V===a.SHORT&&de&&(ee=de.R16_SNORM_EXT)),y===a.RED_INTEGER&&(V===a.UNSIGNED_BYTE&&(ee=a.R8UI),V===a.UNSIGNED_SHORT&&(ee=a.R16UI),V===a.UNSIGNED_INT&&(ee=a.R32UI),V===a.BYTE&&(ee=a.R8I),V===a.SHORT&&(ee=a.R16I),V===a.INT&&(ee=a.R32I)),y===a.RG&&(V===a.FLOAT&&(ee=a.RG32F),V===a.HALF_FLOAT&&(ee=a.RG16F),V===a.UNSIGNED_BYTE&&(ee=a.RG8),V===a.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),V===a.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(V===a.UNSIGNED_BYTE&&(ee=a.RG8UI),V===a.UNSIGNED_SHORT&&(ee=a.RG16UI),V===a.UNSIGNED_INT&&(ee=a.RG32UI),V===a.BYTE&&(ee=a.RG8I),V===a.SHORT&&(ee=a.RG16I),V===a.INT&&(ee=a.RG32I)),y===a.RGB_INTEGER&&(V===a.UNSIGNED_BYTE&&(ee=a.RGB8UI),V===a.UNSIGNED_SHORT&&(ee=a.RGB16UI),V===a.UNSIGNED_INT&&(ee=a.RGB32UI),V===a.BYTE&&(ee=a.RGB8I),V===a.SHORT&&(ee=a.RGB16I),V===a.INT&&(ee=a.RGB32I)),y===a.RGBA_INTEGER&&(V===a.UNSIGNED_BYTE&&(ee=a.RGBA8UI),V===a.UNSIGNED_SHORT&&(ee=a.RGBA16UI),V===a.UNSIGNED_INT&&(ee=a.RGBA32UI),V===a.BYTE&&(ee=a.RGBA8I),V===a.SHORT&&(ee=a.RGBA16I),V===a.INT&&(ee=a.RGBA32I)),y===a.RGB&&(V===a.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),V===a.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),V===a.UNSIGNED_INT_5_9_9_9_REV&&(ee=a.RGB9_E5),V===a.UNSIGNED_INT_10F_11F_11F_REV&&(ee=a.R11F_G11F_B10F)),y===a.RGBA){const se=re?Nu:Ut.getTransfer($);V===a.FLOAT&&(ee=a.RGBA32F),V===a.HALF_FLOAT&&(ee=a.RGBA16F),V===a.UNSIGNED_BYTE&&(ee=se===Jt?a.SRGB8_ALPHA8:a.RGBA8),V===a.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),V===a.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),V===a.UNSIGNED_SHORT_4_4_4_4&&(ee=a.RGBA4),V===a.UNSIGNED_SHORT_5_5_5_1&&(ee=a.RGB5_A1)}return(ee===a.R16F||ee===a.R32F||ee===a.RG16F||ee===a.RG32F||ee===a.RGBA16F||ee===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(C,y){let V;return C?y===null||y===ma||y===Lo?V=a.DEPTH24_STENCIL8:y===fa?V=a.DEPTH32F_STENCIL8:y===Uo&&(V=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ma||y===Lo?V=a.DEPTH_COMPONENT24:y===fa?V=a.DEPTH_COMPONENT32F:y===Uo&&(V=a.DEPTH_COMPONENT16),V}function P(C,y){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kn&&C.minFilter!==Hn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function B(C){const y=C.target;y.removeEventListener("dispose",B),O(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&E.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),k(y)}function O(C){const y=r.get(C);if(y.__webglInit===void 0)return;const V=C.source,q=b.get(V);if(q){const $=q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&Y(C),Object.keys(q).length===0&&b.delete(V)}r.remove(C)}function Y(C){const y=r.get(C);a.deleteTexture(y.__webglTexture);const V=C.source,q=b.get(V);delete q[y.__cacheKey],f.memory.textures--}function k(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let $=0;$<y.__webglFramebuffer[q].length;$++)a.deleteFramebuffer(y.__webglFramebuffer[q][$]);else a.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)a.deleteFramebuffer(y.__webglFramebuffer[q]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let q=0,$=V.length;q<$;q++){const re=r.get(V[q]);re.__webglTexture&&(a.deleteTexture(re.__webglTexture),f.memory.textures--),r.remove(V[q])}r.remove(C)}let j=0;function ge(){j=0}function me(){return j}function ie(C){j=C}function F(){const C=j;return C>=o.maxTextures&&ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),j+=1,C}function X(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function le(C,y){const V=r.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const q=C.image;if(q===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,V.__webglTexture,a.TEXTURE0+y)}function Se(C,y){const V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Fe(V,C,y);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,V.__webglTexture,a.TEXTURE0+y)}function we(C,y){const V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Fe(V,C,y);return}n.bindTexture(a.TEXTURE_3D,V.__webglTexture,a.TEXTURE0+y)}function z(C,y){const V=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){st(V,C,y);return}n.bindTexture(a.TEXTURE_CUBE_MAP,V.__webglTexture,a.TEXTURE0+y)}const K={[Jh]:a.REPEAT,[ka]:a.CLAMP_TO_EDGE,[$h]:a.MIRRORED_REPEAT},Me={[Kn]:a.NEAREST,[MM]:a.NEAREST_MIPMAP_NEAREST,[Zc]:a.NEAREST_MIPMAP_LINEAR,[Hn]:a.LINEAR,[rh]:a.LINEAR_MIPMAP_NEAREST,[cr]:a.LINEAR_MIPMAP_LINEAR},Oe={[AM]:a.NEVER,[NM]:a.ALWAYS,[RM]:a.LESS,[em]:a.LEQUAL,[CM]:a.EQUAL,[tm]:a.GEQUAL,[wM]:a.GREATER,[DM]:a.NOTEQUAL};function ze(C,y){if(y.type===fa&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Hn||y.magFilter===rh||y.magFilter===Zc||y.magFilter===cr||y.minFilter===Hn||y.minFilter===rh||y.minFilter===Zc||y.minFilter===cr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,K[y.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,K[y.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,K[y.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Me[y.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kn||y.minFilter!==Zc&&y.minFilter!==cr||y.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ae(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",B));const q=y.source;let $=b.get(q);$===void 0&&($={},b.set(q,$));const re=X(y);if(re!==C.__cacheKey){$[re]===void 0&&($[re]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,V=!0),$[re].usedTimes++;const de=$[C.__cacheKey];de!==void 0&&($[C.__cacheKey].usedTimes--,de.usedTimes===0&&Y(y)),C.__cacheKey=re,C.__webglTexture=$[re].texture}return V}function Ae(C,y,V){return Math.floor(Math.floor(C/V)/y)}function Re(C,y,V,q){const re=C.updateRanges;if(re.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{re.sort((Ne,Ie)=>Ne.start-Ie.start);let de=0;for(let Ne=1;Ne<re.length;Ne++){const Ie=re[de],De=re[Ne],We=Ie.start+Ie.count,Ze=Ae(De.start,y.width,4),Xe=Ae(Ie.start,y.width,4);De.start<=We+1&&Ze===Xe&&Ae(De.start+De.count-1,y.width,4)===Ze?Ie.count=Math.max(Ie.count,De.start+De.count-Ie.start):(++de,re[de]=De)}re.length=de+1;const ee=n.getParameter(a.UNPACK_ROW_LENGTH),se=n.getParameter(a.UNPACK_SKIP_PIXELS),_e=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,Ie=re.length;Ne<Ie;Ne++){const De=re[Ne],We=Math.floor(De.start/4),Ze=Math.ceil(De.count/4),Xe=We%y.width,W=Math.floor(We/y.width),Le=Ze,xe=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,Xe,W,Le,xe,V,q,y.data)}C.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ee),n.pixelStorei(a.UNPACK_SKIP_PIXELS,se),n.pixelStorei(a.UNPACK_SKIP_ROWS,_e)}}function Fe(C,y,V){let q=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=a.TEXTURE_3D);const $=ae(C,y),re=y.source;n.bindTexture(q,C.__webglTexture,a.TEXTURE0+V);const de=r.get(re);if(re.version!==de.__version||$===!0){if(n.activeTexture(a.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const xe=Ut.getPrimaries(Ut.workingColorSpace),Pe=y.colorSpace===Rs?null:Ut.getPrimaries(y.colorSpace),Be=y.colorSpace===Rs||xe===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let se=T(y.image,!1,o.maxTextureSize);se=Lt(y,se);const _e=c.convert(y.format,y.colorSpace),Ne=c.convert(y.type);let Ie=M(y.internalFormat,_e,Ne,y.normalized,y.colorSpace,y.isVideoTexture);ze(q,y);let De;const We=y.mipmaps,Ze=y.isVideoTexture!==!0,Xe=de.__version===void 0||$===!0,W=re.dataReady,Le=P(y,se);if(y.isDepthTexture)Ie=I(y.format===ur,y.type),Xe&&(Ze?n.texStorage2D(a.TEXTURE_2D,1,Ie,se.width,se.height):n.texImage2D(a.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,null));else if(y.isDataTexture)if(We.length>0){Ze&&Xe&&n.texStorage2D(a.TEXTURE_2D,Le,Ie,We[0].width,We[0].height);for(let xe=0,Pe=We.length;xe<Pe;xe++)De=We[xe],Ze?W&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,De.width,De.height,_e,Ne,De.data):n.texImage2D(a.TEXTURE_2D,xe,Ie,De.width,De.height,0,_e,Ne,De.data);y.generateMipmaps=!1}else Ze?(Xe&&n.texStorage2D(a.TEXTURE_2D,Le,Ie,se.width,se.height),W&&Re(y,se,_e,Ne)):n.texImage2D(a.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&Xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ie,We[0].width,We[0].height,se.depth);for(let xe=0,Pe=We.length;xe<Pe;xe++)if(De=We[xe],y.format!==$i)if(_e!==null)if(Ze){if(W)if(y.layerUpdates.size>0){const Be=Xv(De.width,De.height,y.format,y.type);for(const Ce of y.layerUpdates){const Je=De.data.subarray(Ce*Be/De.data.BYTES_PER_ELEMENT,(Ce+1)*Be/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Ce,De.width,De.height,1,_e,Je)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,se.depth,_e,De.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,De.width,De.height,se.depth,0,De.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,se.depth,_e,Ne,De.data):n.texImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,De.width,De.height,se.depth,0,_e,Ne,De.data)}else{Ze&&Xe&&n.texStorage2D(a.TEXTURE_2D,Le,Ie,We[0].width,We[0].height);for(let xe=0,Pe=We.length;xe<Pe;xe++)De=We[xe],y.format!==$i?_e!==null?Ze?W&&n.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,De.width,De.height,_e,De.data):n.compressedTexImage2D(a.TEXTURE_2D,xe,Ie,De.width,De.height,0,De.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,De.width,De.height,_e,Ne,De.data):n.texImage2D(a.TEXTURE_2D,xe,Ie,De.width,De.height,0,_e,Ne,De.data)}else if(y.isDataArrayTexture)if(Ze){if(Xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ie,se.width,se.height,se.depth),W)if(y.layerUpdates.size>0){const xe=Xv(se.width,se.height,y.format,y.type);for(const Pe of y.layerUpdates){const Be=se.data.subarray(Pe*xe/se.data.BYTES_PER_ELEMENT,(Pe+1)*xe/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,se.width,se.height,1,_e,Ne,Be)}y.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(y.isData3DTexture)Ze?(Xe&&n.texStorage3D(a.TEXTURE_3D,Le,Ie,se.width,se.height,se.depth),W&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)):n.texImage3D(a.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(y.isFramebufferTexture){if(Xe)if(Ze)n.texStorage2D(a.TEXTURE_2D,Le,Ie,se.width,se.height);else{let xe=se.width,Pe=se.height;for(let Be=0;Be<Le;Be++)n.texImage2D(a.TEXTURE_2D,Be,Ie,xe,Pe,0,_e,Ne,null),xe>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),se.parentNode!==xe){xe.appendChild(se),E.add(y),xe.onpaint=Pe=>{const Be=Pe.changedElements;for(const Ce of E)Be.includes(Ce.image)&&(Ce.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,se);else{const Be=a.RGBA,Ce=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Be,Ce,Je,se)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ze&&Xe){const xe=ve(We[0]);n.texStorage2D(a.TEXTURE_2D,Le,Ie,xe.width,xe.height)}for(let xe=0,Pe=We.length;xe<Pe;xe++)De=We[xe],Ze?W&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,_e,Ne,De):n.texImage2D(a.TEXTURE_2D,xe,Ie,_e,Ne,De);y.generateMipmaps=!1}else if(Ze){if(Xe){const xe=ve(se);n.texStorage2D(a.TEXTURE_2D,Le,Ie,xe.width,xe.height)}W&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,_e,Ne,se)}else n.texImage2D(a.TEXTURE_2D,0,Ie,_e,Ne,se);S(y)&&U(q),de.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function st(C,y,V){if(y.image.length!==6)return;const q=ae(C,y),$=y.source;n.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+V);const re=r.get($);if($.version!==re.__version||q===!0){n.activeTexture(a.TEXTURE0+V);const de=Ut.getPrimaries(Ut.workingColorSpace),ee=y.colorSpace===Rs?null:Ut.getPrimaries(y.colorSpace),se=y.colorSpace===Rs||de===ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,Ie=[];for(let Ce=0;Ce<6;Ce++)!_e&&!Ne?Ie[Ce]=T(y.image[Ce],!0,o.maxCubemapSize):Ie[Ce]=Ne?y.image[Ce].image:y.image[Ce],Ie[Ce]=Lt(y,Ie[Ce]);const De=Ie[0],We=c.convert(y.format,y.colorSpace),Ze=c.convert(y.type),Xe=M(y.internalFormat,We,Ze,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Le=re.__version===void 0||q===!0,xe=$.dataReady;let Pe=P(y,De);ze(a.TEXTURE_CUBE_MAP,y);let Be;if(_e){W&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,Xe,De.width,De.height);for(let Ce=0;Ce<6;Ce++){Be=Ie[Ce].mipmaps;for(let Je=0;Je<Be.length;Je++){const qe=Be[Je];y.format!==$i?We!==null?W?xe&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je,0,0,qe.width,qe.height,We,qe.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je,Xe,qe.width,qe.height,0,qe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je,0,0,qe.width,qe.height,We,Ze,qe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je,Xe,qe.width,qe.height,0,We,Ze,qe.data)}}}else{if(Be=y.mipmaps,W&&Le){Be.length>0&&Pe++;const Ce=ve(Ie[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,Xe,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(Ne){W?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ie[Ce].width,Ie[Ce].height,We,Ze,Ie[Ce].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Xe,Ie[Ce].width,Ie[Ce].height,0,We,Ze,Ie[Ce].data);for(let Je=0;Je<Be.length;Je++){const en=Be[Je].image[Ce].image;W?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je+1,0,0,en.width,en.height,We,Ze,en.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je+1,Xe,en.width,en.height,0,We,Ze,en.data)}}else{W?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,We,Ze,Ie[Ce]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Xe,We,Ze,Ie[Ce]);for(let Je=0;Je<Be.length;Je++){const qe=Be[Je];W?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je+1,0,0,We,Ze,qe.image[Ce]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Je+1,Xe,We,Ze,qe.image[Ce])}}}S(y)&&U(a.TEXTURE_CUBE_MAP),re.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function tt(C,y,V,q,$,re){const de=c.convert(V.format,V.colorSpace),ee=c.convert(V.type),se=M(V.internalFormat,de,ee,V.normalized,V.colorSpace),_e=r.get(y),Ne=r.get(V);if(Ne.__renderTarget=y,!_e.__hasExternalTextures){const Ie=Math.max(1,y.width>>re),De=Math.max(1,y.height>>re);$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?n.texImage3D($,re,se,Ie,De,y.depth,0,de,ee,null):n.texImage2D($,re,se,Ie,De,0,de,ee,null)}n.bindFramebuffer(a.FRAMEBUFFER,C),un(y)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,$,Ne.__webglTexture,0,Pt(y)):($===a.TEXTURE_2D||$>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,$,Ne.__webglTexture,re),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Xt(C,y,V){if(a.bindRenderbuffer(a.RENDERBUFFER,C),y.depthBuffer){const q=y.depthTexture,$=q&&q.isDepthTexture?q.type:null,re=I(y.stencilBuffer,$),de=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;un(y)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt(y),re,y.width,y.height):V?a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt(y),re,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,re,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,C)}else{const q=y.textures;for(let $=0;$<q.length;$++){const re=q[$],de=c.convert(re.format,re.colorSpace),ee=c.convert(re.type),se=M(re.internalFormat,de,ee,re.normalized,re.colorSpace);un(y)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt(y),se,y.width,y.height):V?a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt(y),se,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,se,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(C,y,V){const q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=r.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),$.__webglTexture===void 0){$.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y.depthTexture);const _e=c.convert(y.depthTexture.format),Ne=c.convert(y.depthTexture.type);let Ie;y.depthTexture.format===Ya?Ie=a.DEPTH_COMPONENT24:y.depthTexture.format===ur&&(Ie=a.DEPTH24_STENCIL8);for(let De=0;De<6;De++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ie,y.width,y.height,0,_e,Ne,null)}}else le(y.depthTexture,0);const re=$.__webglTexture,de=Pt(y),ee=q?a.TEXTURE_CUBE_MAP_POSITIVE_X+V:a.TEXTURE_2D,se=y.depthTexture.format===ur?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ya)un(y)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,ee,re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,se,ee,re,0);else if(y.depthTexture.format===ur)un(y)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,ee,re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,se,ee,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(C){const y=r.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)ut(y.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?ut(y.__webglFramebuffer[0],C,0):ut(y.__webglFramebuffer,C,0)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=a.createRenderbuffer(),Xt(y.__webglDepthbuffer[q],C,!1);else{const $=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,re)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),Xt(y.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,re)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(C,y,V){const q=r.get(C);y!==void 0&&tt(q.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),V!==void 0&&pt(C)}function ht(C){const y=C.texture,V=r.get(C),q=r.get(y);C.addEventListener("dispose",A);const $=C.textures,re=C.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=y.version,f.memory.textures++),re){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let se=0;se<y.mipmaps.length;se++)V.__webglFramebuffer[ee][se]=a.createFramebuffer()}else V.__webglFramebuffer[ee]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)V.__webglFramebuffer[ee]=a.createFramebuffer()}else V.__webglFramebuffer=a.createFramebuffer();if(de)for(let ee=0,se=$.length;ee<se;ee++){const _e=r.get($[ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),f.memory.textures++)}if(C.samples>0&&un(C)===!1){V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){const se=$[ee];V.__webglColorRenderbuffer[ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const _e=c.convert(se.format,se.colorSpace),Ne=c.convert(se.type),Ie=M(se.internalFormat,_e,Ne,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),De=Pt(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,De,Ie,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Xt(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)tt(V.__webglFramebuffer[ee][se],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else tt(V.__webglFramebuffer[ee],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(y)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let ee=0,se=$.length;ee<se;ee++){const _e=$[ee],Ne=r.get(_e);let Ie=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ie,Ne.__webglTexture),ze(Ie,_e),tt(V.__webglFramebuffer,C,_e,a.COLOR_ATTACHMENT0+ee,Ie,0),S(_e)&&U(Ie)}n.unbindTexture()}else{let ee=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),ze(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)tt(V.__webglFramebuffer[se],C,y,a.COLOR_ATTACHMENT0,ee,se);else tt(V.__webglFramebuffer,C,y,a.COLOR_ATTACHMENT0,ee,0);S(y)&&U(ee),n.unbindTexture()}C.depthBuffer&&pt(C)}function It(C){const y=C.textures;for(let V=0,q=y.length;V<q;V++){const $=y[V];if(S($)){const re=L(C),de=r.get($).__webglTexture;n.bindTexture(re,de),U(re),n.unbindTexture()}}}const Ke=[],_t=[];function rn(C){if(C.samples>0){if(un(C)===!1){const y=C.textures,V=C.width,q=C.height;let $=a.COLOR_BUFFER_BIT;const re=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=r.get(C),ee=y.length>1;if(ee)for(let _e=0;_e<y.length;_e++)n.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const se=C.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=a.STENCIL_BUFFER_BIT)),ee){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Ne=r.get(y[_e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ne,0)}a.blitFramebuffer(0,0,V,q,0,0,V,q,$,a.NEAREST),p===!0&&(Ke.length=0,_t.length=0,Ke.push(a.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push(re),_t.push(re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,_t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<y.length;_e++){n.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Ne=r.get(y[_e]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,Ne,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const y=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function Pt(C){return Math.min(o.maxSamples,C.samples)}function un(C){const y=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(C){const y=f.render.frame;v.get(C)!==y&&(v.set(C,y),C.update())}function Lt(C,y){const V=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Du&&V!==Rs&&(Ut.getTransfer(V)===Jt?(q!==$i||$!==wi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",V)),y}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=ge,this.getTextureUnits=me,this.setTextureUnits=ie,this.setTexture2D=le,this.setTexture2DArray=Se,this.setTexture3D=we,this.setTextureCube=z,this.rebindTextures=dt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=un,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function TR(a,e){function n(r,o=Rs){let c;const f=Ut.getTransfer(o);if(r===wi)return a.UNSIGNED_BYTE;if(r===Kp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Qp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Iy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Py)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ly)return a.BYTE;if(r===Oy)return a.SHORT;if(r===Uo)return a.UNSIGNED_SHORT;if(r===Zp)return a.INT;if(r===ma)return a.UNSIGNED_INT;if(r===fa)return a.FLOAT;if(r===Wa)return a.HALF_FLOAT;if(r===zy)return a.ALPHA;if(r===By)return a.RGB;if(r===$i)return a.RGBA;if(r===Ya)return a.DEPTH_COMPONENT;if(r===ur)return a.DEPTH_STENCIL;if(r===Fy)return a.RED;if(r===jp)return a.RED_INTEGER;if(r===pr)return a.RG;if(r===Jp)return a.RG_INTEGER;if(r===$p)return a.RGBA_INTEGER;if(r===Su||r===Eu||r===Mu||r===bu)if(f===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ep||r===tp||r===np||r===ip)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap||r===sp||r===rp||r===lp||r===op||r===Cu||r===cp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ap||r===sp)return f===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===rp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===lp)return c.COMPRESSED_R11_EAC;if(r===op)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cu)return c.COMPRESSED_RG11_EAC;if(r===cp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===yp||r===xp||r===Sp||r===Ep||r===Mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===up)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mp)return f===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bp||r===Tp||r===Ap)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===bp)return f===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===Cp||r===wu||r===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RR=`
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

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Zy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ga({vertexShader:AR,fragmentShader:RR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Un(new fr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wR extends Ps{constructor(e,n){super();const r=this;let o=null,c=1,f=null,m="local-floor",p=1,h=null,v=null,E=null,g=null,b=null,R=null;const N=typeof XRWebGLBinding<"u",T=new CR,S={},U=n.getContextAttributes();let L=null,M=null;const I=[],P=[],B=new ot;let A=null;const O=new Gi;O.viewport=new xn;const Y=new Gi;Y.viewport=new xn;const k=[O,Y],j=new zb;let ge=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Ae=I[ae];return Ae===void 0&&(Ae=new dh,I[ae]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(ae){let Ae=I[ae];return Ae===void 0&&(Ae=new dh,I[ae]=Ae),Ae.getGripSpace()},this.getHand=function(ae){let Ae=I[ae];return Ae===void 0&&(Ae=new dh,I[ae]=Ae),Ae.getHandSpace()};function ie(ae){const Ae=P.indexOf(ae.inputSource);if(Ae===-1)return;const Re=I[Ae];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,h||f),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",X);for(let ae=0;ae<I.length;ae++){const Ae=P[ae];Ae!==null&&(P[ae]=null,I[ae].disconnect(Ae))}ge=null,me=null,T.reset();for(const ae in S)delete S[ae];e.setRenderTarget(L),b=null,g=null,E=null,o=null,M=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){m=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return E===null&&N&&(E=new XRWebGLBinding(o,n)),E},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",F),o.addEventListener("inputsourceschange",X),U.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Fe=null,st=null;U.depth&&(st=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=U.stencil?ur:Ya,Fe=U.stencil?Lo:ma);const tt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:c};E=this.getBinding(),g=E.createProjectionLayer(tt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),M=new pa(g.textureWidth,g.textureHeight,{format:$i,type:wi,depthTexture:new Sl(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),M=new pa(b.framebufferWidth,b.framebufferHeight,{format:$i,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await o.requestReferenceSpace(m),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function X(ae){for(let Ae=0;Ae<ae.removed.length;Ae++){const Re=ae.removed[Ae],Fe=P.indexOf(Re);Fe>=0&&(P[Fe]=null,I[Fe].disconnect(Re))}for(let Ae=0;Ae<ae.added.length;Ae++){const Re=ae.added[Ae];let Fe=P.indexOf(Re);if(Fe===-1){for(let tt=0;tt<I.length;tt++)if(tt>=P.length){P.push(Re),Fe=tt;break}else if(P[tt]===null){P[tt]=Re,Fe=tt;break}if(Fe===-1)break}const st=I[Fe];st&&st.connect(Re)}}const le=new te,Se=new te;function we(ae,Ae,Re){le.setFromMatrixPosition(Ae.matrixWorld),Se.setFromMatrixPosition(Re.matrixWorld);const Fe=le.distanceTo(Se),st=Ae.projectionMatrix.elements,tt=Re.projectionMatrix.elements,Xt=st[14]/(st[10]-1),ut=st[14]/(st[10]+1),pt=(st[9]+1)/st[5],dt=(st[9]-1)/st[5],ht=(st[8]-1)/st[0],It=(tt[8]+1)/tt[0],Ke=Xt*ht,_t=Xt*It,rn=Fe/(-ht+It),Pt=rn*-ht;if(Ae.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Pt),ae.translateZ(rn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),st[10]===-1)ae.projectionMatrix.copy(Ae.projectionMatrix),ae.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const un=Xt+rn,Q=ut+rn,Lt=Ke-Pt,ve=_t+(Fe-Pt),C=pt*ut/Q*un,y=dt*ut/Q*un;ae.projectionMatrix.makePerspective(Lt,ve,C,y,un,Q),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function z(ae,Ae){Ae===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Ae.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Ae=ae.near,Re=ae.far;T.texture!==null&&(T.depthNear>0&&(Ae=T.depthNear),T.depthFar>0&&(Re=T.depthFar)),j.near=Y.near=O.near=Ae,j.far=Y.far=O.far=Re,(ge!==j.near||me!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ge=j.near,me=j.far),j.layers.mask=ae.layers.mask|6,O.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Fe=ae.parent,st=j.cameras;z(j,Fe);for(let tt=0;tt<st.length;tt++)z(st[tt],Fe);st.length===2?we(j,O,Y):j.projectionMatrix.copy(O.projectionMatrix),K(ae,j,Fe)};function K(ae,Ae,Re){Re===null?ae.matrix.copy(Ae.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Ae.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Ae.projectionMatrix),ae.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Io*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&b===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ae)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(j)},this.getCameraTexture=function(ae){return S[ae]};let Me=null;function Oe(ae,Ae){if(v=Ae.getViewerPose(h||f),R=Ae,v!==null){const Re=v.views;b!==null&&(e.setRenderTargetFramebuffer(M,b.framebuffer),e.setRenderTarget(M));let Fe=!1;Re.length!==j.cameras.length&&(j.cameras.length=0,Fe=!0);for(let ut=0;ut<Re.length;ut++){const pt=Re[ut];let dt=null;if(b!==null)dt=b.getViewport(pt);else{const It=E.getViewSubImage(g,pt);dt=It.viewport,ut===0&&(e.setRenderTargetTextures(M,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(M))}let ht=k[ut];ht===void 0&&(ht=new Gi,ht.layers.enable(ut),ht.viewport=new xn,k[ut]=ht),ht.matrix.fromArray(pt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(pt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),ut===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Fe===!0&&j.cameras.push(ht)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){E=r.getBinding();const ut=E.getDepthInformation(Re[0]);ut&&ut.isValid&&ut.texture&&T.init(ut,o.renderState)}if(st&&st.includes("camera-access")&&N){e.state.unbindTexture(),E=r.getBinding();for(let ut=0;ut<Re.length;ut++){const pt=Re[ut].camera;if(pt){let dt=S[pt];dt||(dt=new Zy,S[pt]=dt);const ht=E.getCameraImage(pt);dt.sourceTexture=ht}}}}for(let Re=0;Re<I.length;Re++){const Fe=P[Re],st=I[Re];Fe!==null&&st!==void 0&&st.update(Fe,Ae,h||f)}Me&&Me(ae,Ae),Ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ae}),R=null}const ze=new Jy;ze.setAnimationLoop(Oe),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const DR=new _n,sx=new gt;sx.set(-1,0,0,0,1,0,0,0,1);function NR(a,e){function n(T,S){T.matrixAutoUpdate===!0&&T.updateMatrix(),S.value.copy(T.matrix)}function r(T,S){S.color.getRGB(T.fogColor.value,Ky(a)),S.isFog?(T.fogNear.value=S.near,T.fogFar.value=S.far):S.isFogExp2&&(T.fogDensity.value=S.density)}function o(T,S,U,L,M){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(T,S):S.isMeshLambertMaterial?(c(T,S),S.envMap&&(T.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(T,S),E(T,S)):S.isMeshPhongMaterial?(c(T,S),v(T,S),S.envMap&&(T.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(T,S),g(T,S),S.isMeshPhysicalMaterial&&b(T,S,M)):S.isMeshMatcapMaterial?(c(T,S),R(T,S)):S.isMeshDepthMaterial?c(T,S):S.isMeshDistanceMaterial?(c(T,S),N(T,S)):S.isMeshNormalMaterial?c(T,S):S.isLineBasicMaterial?(f(T,S),S.isLineDashedMaterial&&m(T,S)):S.isPointsMaterial?p(T,S,U,L):S.isSpriteMaterial?h(T,S):S.isShadowMaterial?(T.color.value.copy(S.color),T.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(T,S){T.opacity.value=S.opacity,S.color&&T.diffuse.value.copy(S.color),S.emissive&&T.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(T.map.value=S.map,n(S.map,T.mapTransform)),S.alphaMap&&(T.alphaMap.value=S.alphaMap,n(S.alphaMap,T.alphaMapTransform)),S.bumpMap&&(T.bumpMap.value=S.bumpMap,n(S.bumpMap,T.bumpMapTransform),T.bumpScale.value=S.bumpScale,S.side===gi&&(T.bumpScale.value*=-1)),S.normalMap&&(T.normalMap.value=S.normalMap,n(S.normalMap,T.normalMapTransform),T.normalScale.value.copy(S.normalScale),S.side===gi&&T.normalScale.value.negate()),S.displacementMap&&(T.displacementMap.value=S.displacementMap,n(S.displacementMap,T.displacementMapTransform),T.displacementScale.value=S.displacementScale,T.displacementBias.value=S.displacementBias),S.emissiveMap&&(T.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,T.emissiveMapTransform)),S.specularMap&&(T.specularMap.value=S.specularMap,n(S.specularMap,T.specularMapTransform)),S.alphaTest>0&&(T.alphaTest.value=S.alphaTest);const U=e.get(S),L=U.envMap,M=U.envMapRotation;L&&(T.envMap.value=L,T.envMapRotation.value.setFromMatrix4(DR.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(sx),T.reflectivity.value=S.reflectivity,T.ior.value=S.ior,T.refractionRatio.value=S.refractionRatio),S.lightMap&&(T.lightMap.value=S.lightMap,T.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,T.lightMapTransform)),S.aoMap&&(T.aoMap.value=S.aoMap,T.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,T.aoMapTransform))}function f(T,S){T.diffuse.value.copy(S.color),T.opacity.value=S.opacity,S.map&&(T.map.value=S.map,n(S.map,T.mapTransform))}function m(T,S){T.dashSize.value=S.dashSize,T.totalSize.value=S.dashSize+S.gapSize,T.scale.value=S.scale}function p(T,S,U,L){T.diffuse.value.copy(S.color),T.opacity.value=S.opacity,T.size.value=S.size*U,T.scale.value=L*.5,S.map&&(T.map.value=S.map,n(S.map,T.uvTransform)),S.alphaMap&&(T.alphaMap.value=S.alphaMap,n(S.alphaMap,T.alphaMapTransform)),S.alphaTest>0&&(T.alphaTest.value=S.alphaTest)}function h(T,S){T.diffuse.value.copy(S.color),T.opacity.value=S.opacity,T.rotation.value=S.rotation,S.map&&(T.map.value=S.map,n(S.map,T.mapTransform)),S.alphaMap&&(T.alphaMap.value=S.alphaMap,n(S.alphaMap,T.alphaMapTransform)),S.alphaTest>0&&(T.alphaTest.value=S.alphaTest)}function v(T,S){T.specular.value.copy(S.specular),T.shininess.value=Math.max(S.shininess,1e-4)}function E(T,S){S.gradientMap&&(T.gradientMap.value=S.gradientMap)}function g(T,S){T.metalness.value=S.metalness,S.metalnessMap&&(T.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,T.metalnessMapTransform)),T.roughness.value=S.roughness,S.roughnessMap&&(T.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,T.roughnessMapTransform)),S.envMap&&(T.envMapIntensity.value=S.envMapIntensity)}function b(T,S,U){T.ior.value=S.ior,S.sheen>0&&(T.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),T.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(T.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,T.sheenColorMapTransform)),S.sheenRoughnessMap&&(T.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,T.sheenRoughnessMapTransform))),S.clearcoat>0&&(T.clearcoat.value=S.clearcoat,T.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(T.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,T.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(T.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===gi&&T.clearcoatNormalScale.value.negate())),S.dispersion>0&&(T.dispersion.value=S.dispersion),S.iridescence>0&&(T.iridescence.value=S.iridescence,T.iridescenceIOR.value=S.iridescenceIOR,T.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(T.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,T.iridescenceMapTransform)),S.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),S.transmission>0&&(T.transmission.value=S.transmission,T.transmissionSamplerMap.value=U.texture,T.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(T.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,T.transmissionMapTransform)),T.thickness.value=S.thickness,S.thicknessMap&&(T.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=S.attenuationDistance,T.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(T.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(T.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=S.specularIntensity,T.specularColor.value.copy(S.specularColor),S.specularColorMap&&(T.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,T.specularColorMapTransform)),S.specularIntensityMap&&(T.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,T.specularIntensityMapTransform))}function R(T,S){S.matcap&&(T.matcap.value=S.matcap)}function N(T,S){const U=e.get(S).light;T.referencePosition.value.setFromMatrixPosition(U.matrixWorld),T.nearDistance.value=U.shadow.camera.near,T.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UR(a,e,n,r){let o={},c={},f=[];const m=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(M,I){const P=I.program;r.uniformBlockBinding(M,P)}function h(M,I){let P=o[M.id];P===void 0&&(T(M),P=v(M),o[M.id]=P,M.addEventListener("dispose",U));const B=I.program;r.updateUBOMapping(M,B);const A=e.render.frame;c[M.id]!==A&&(g(M),c[M.id]=A)}function v(M){const I=E();M.__bindingPointIndex=I;const P=a.createBuffer(),B=M.__size,A=M.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,B,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,P),P}function E(){for(let M=0;M<m;M++)if(f.indexOf(M)===-1)return f.push(M),M;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(M){const I=o[M.id],P=M.uniforms,B=M.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let A=0,O=P.length;A<O;A++){const Y=P[A];if(Array.isArray(Y))for(let k=0,j=Y.length;k<j;k++)b(Y[k],A,k,B);else b(Y,A,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(M,I,P,B){if(N(M,I,P,B)===!0){const A=M.__offset,O=M.value;if(Array.isArray(O)){let Y=0;for(let k=0;k<O.length;k++){const j=O[k],ge=S(j);R(j,M.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(O,M.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,M.__data)}}function R(M,I,P){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,P)}function N(M,I,P,B){const A=M.value,O=I+"_"+P;if(B[O]===void 0)return typeof A=="number"||typeof A=="boolean"?B[O]=A:ArrayBuffer.isView(A)?B[O]=A.slice():B[O]=A.clone(),!0;{const Y=B[O];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return B[O]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(Y.equals(A)===!1)return Y.copy(A),!0}}return!1}function T(M){const I=M.uniforms;let P=0;const B=16;for(let O=0,Y=I.length;O<Y;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let j=0,ge=k.length;j<ge;j++){const me=k[j],ie=Array.isArray(me.value)?me.value:[me.value];for(let F=0,X=ie.length;F<X;F++){const le=ie[F],Se=S(le),we=P%B,z=we%Se.boundary,K=we+z;P+=z,K!==0&&B-K<Se.storage&&(P+=B-K),me.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=P,P+=Se.storage}}}const A=P%B;return A>0&&(P+=B-A),M.__size=P,M.__cache={},this}function S(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",M),I}function U(M){const I=M.target;I.removeEventListener("dispose",U);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function L(){for(const M in o)a.deleteBuffer(o[M]);f=[],o={},c={}}return{bind:p,update:h,dispose:L}}const LR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function OR(){return la===null&&(la=new yb(LR,16,16,pr,Wa),la.name="DFG_LUT",la.minFilter=Hn,la.magFilter=Hn,la.wrapS=ka,la.wrapT=ka,la.generateMipmaps=!1,la.needsUpdate=!0),la}class IR{constructor(e={}){const{canvas:n=LM(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:g=!1,outputBufferType:b=wi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=f;const N=b,T=new Set([$p,Jp,jp]),S=new Set([wi,ma,Uo,Lo,Kp,Qp]),U=new Uint32Array(4),L=new Int32Array(4),M=new te;let I=null,P=null;const B=[],A=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,j=null,ge=null,me=null,ie=null;this._outputColorSpace=mi;let F=0,X=0,le=null,Se=-1,we=null;const z=new xn,K=new xn;let Me=null;const Oe=new Rt(0);let ze=0,ae=n.width,Ae=n.height,Re=1,Fe=null,st=null;const tt=new xn(0,0,ae,Ae),Xt=new xn(0,0,ae,Ae);let ut=!1;const pt=new om;let dt=!1,ht=!1;const It=new _n,Ke=new te,_t=new xn,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function un(){return le===null?Re:1}let Q=r;function Lt(w,J){return n.getContext(w,J)}try{const w={alpha:!0,depth:o,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:E};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",en,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",ti,!1),Q===null){const J="webgl2";if(Q=Lt(J,w),Q===null)throw Lt(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Nt("WebGLRenderer: "+w.message),w}let ve,C,y,V,q,$,re,de,ee,se,_e,Ne,Ie,De,We,Ze,Xe,W,Le,xe,Pe,Be,Ce;function Je(){ve=new OA(Q),ve.init(),Pe=new TR(Q,ve),C=new AA(Q,ve,e,Pe),y=new MR(Q,ve),C.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ge=Q.createFramebuffer(),me=Q.createFramebuffer(),ie=Q.createFramebuffer(),V=new zA(Q),q=new cR,$=new bR(Q,ve,y,q,C,Pe,V),re=new LA(Y),de=new kb(Q),Be=new bA(Q,de),ee=new IA(Q,de,V,Be),se=new FA(Q,ee,de,Be,V),W=new BA(Q,C,$),We=new RA(q),_e=new oR(Y,re,ve,C,Be,We),Ne=new NR(Y,q),Ie=new fR,De=new _R(ve),Xe=new MA(Y,re,y,se,R,p),Ze=new ER(Y,se,C),Ce=new UR(Q,V,C,y),Le=new TA(Q,ve,V),xe=new PA(Q,ve,V),V.programs=_e.programs,Y.capabilities=C,Y.extensions=ve,Y.properties=q,Y.renderLists=Ie,Y.shadowMap=Ze,Y.state=y,Y.info=V}Je(),N!==wi&&(O=new kA(N,n.width,n.height,m,o,c));const qe=new wR(Y,Q);this.xr=qe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(w){w!==void 0&&(Re=w,this.setSize(ae,Ae,!1))},this.getSize=function(w){return w.set(ae,Ae)},this.setSize=function(w,J,he=!0){if(qe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,Ae=J,n.width=Math.floor(w*Re),n.height=Math.floor(J*Re),he===!0&&(n.style.width=w+"px",n.style.height=J+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(ae*Re,Ae*Re).floor()},this.setDrawingBufferSize=function(w,J,he){ae=w,Ae=J,Re=he,n.width=Math.floor(w*he),n.height=Math.floor(J*he),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(N===wi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,J,he,ue){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,J,he,ue),y.viewport(z.copy(tt).multiplyScalar(Re).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,J,he,ue){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,J,he,ue),y.scissor(K.copy(Xt).multiplyScalar(Re).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){y.setScissorTest(ut=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,he=!0){let ue=0;if(w){let fe=!1;if(le!==null){const Ge=le.texture.format;fe=T.has(Ge)}if(fe){const Ge=le.texture.type,Qe=S.has(Ge),He=Xe.getClearColor(),$e=Xe.getClearAlpha(),je=He.r,rt=He.g,vt=He.b;Qe?(U[0]=je,U[1]=rt,U[2]=vt,U[3]=$e,Q.clearBufferuiv(Q.COLOR,0,U)):(L[0]=je,L[1]=rt,L[2]=vt,L[3]=$e,Q.clearBufferiv(Q.COLOR,0,L))}else ue|=Q.COLOR_BUFFER_BIT}J&&(ue|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&Q.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){n.removeEventListener("webglcontextlost",en,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",ti,!1),Xe.dispose(),Ie.dispose(),De.dispose(),q.dispose(),re.dispose(),se.dispose(),Be.dispose(),Ce.dispose(),_e.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",vn),qe.removeEventListener("sessionend",Tn),H.stop()};function en(w){w.preventDefault(),Lu("WebGLRenderer: Context Lost."),k=!0}function zt(){Lu("WebGLRenderer: Context Restored."),k=!1;const w=V.autoReset,J=Ze.enabled,he=Ze.autoUpdate,ue=Ze.needsUpdate,fe=Ze.type;Je(),V.autoReset=w,Ze.enabled=J,Ze.autoUpdate=he,Ze.needsUpdate=ue,Ze.type=fe}function ti(w){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ni(w){const J=w.target;J.removeEventListener("dispose",ni),zs(J)}function zs(w){qa(w),q.remove(w)}function qa(w){const J=q.get(w).programs;J!==void 0&&(J.forEach(function(he){_e.releaseProgram(he)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,he,ue,fe,Ge){J===null&&(J=rn);const Qe=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,He=Ka(w,J,he,ue,fe);y.setMaterial(ue,Qe);let $e=he.index,je=1;if(ue.wireframe===!0){if($e=ee.getWireframeAttribute(he),$e===void 0)return;je=2}const rt=he.drawRange,vt=he.attributes.position;let at=rt.start*je,Bt=(rt.start+rt.count)*je;Ge!==null&&(at=Math.max(at,Ge.start*je),Bt=Math.min(Bt,(Ge.start+Ge.count)*je)),$e!==null?(at=Math.max(at,0),Bt=Math.min(Bt,$e.count)):vt!=null&&(at=Math.max(at,0),Bt=Math.min(Bt,vt.count));const pn=Bt-at;if(pn<0||pn===1/0)return;Be.setup(fe,ue,He,he,$e);let on,qt=Le;if($e!==null&&(on=de.get($e),qt=xe,qt.setIndex(on)),fe.isMesh)ue.wireframe===!0?(y.setLineWidth(ue.wireframeLinewidth*un()),qt.setMode(Q.LINES)):qt.setMode(Q.TRIANGLES);else if(fe.isLine){let Zt=ue.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*un()),fe.isLineSegments?qt.setMode(Q.LINES):fe.isLineLoop?qt.setMode(Q.LINE_LOOP):qt.setMode(Q.LINE_STRIP)}else fe.isPoints?qt.setMode(Q.POINTS):fe.isSprite&&qt.setMode(Q.TRIANGLES);if(fe.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))qt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Zt=fe._multiDrawStarts,Ye=fe._multiDrawCounts,Qn=fe._multiDrawCount,bt=$e?de.get($e).bytesPerElement:1,Ln=q.get(ue).currentProgram.getUniforms();for(let vi=0;vi<Qn;vi++)Ln.setValue(Q,"_gl_DrawID",vi),qt.render(Zt[vi]/bt,Ye[vi])}else if(fe.isInstancedMesh)qt.renderInstances(at,pn,fe.count);else if(he.isInstancedBufferGeometry){const Zt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ye=Math.min(he.instanceCount,Zt);qt.renderInstances(at,pn,Ye)}else qt.render(at,pn)};function Za(w,J,he){w.transparent===!0&&w.side===ua&&w.forceSinglePass===!1?(w.side=gi,w.needsUpdate=!0,ln(w,J,he),w.side=Ns,w.needsUpdate=!0,ln(w,J,he),w.side=ua):ln(w,J,he)}this.compile=function(w,J,he=null){he===null&&(he=w),P=De.get(he),P.init(J),A.push(P),he.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),w!==he&&w.traverseVisible(function(fe){fe.isLight&&fe.layers.test(J.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),P.setupLights();const ue=new Set;return w.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){const He=Ge[Qe];Za(He,he,fe),ue.add(He)}else Za(Ge,he,fe),ue.add(Ge)}),P=A.pop(),ue},this.compileAsync=function(w,J,he=null){const ue=this.compile(w,J,he);return new Promise(fe=>{function Ge(){if(ue.forEach(function(Qe){q.get(Qe).currentProgram.isReady()&&ue.delete(Qe)}),ue.size===0){fe(w);return}setTimeout(Ge,10)}ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let _a=null;function _i(w){_a&&_a(w)}function vn(){H.stop()}function Tn(){H.start()}const H=new Jy;H.setAnimationLoop(_i),typeof self<"u"&&H.setContext(self),this.setAnimationLoop=function(w){_a=w,qe.setAnimationLoop(w),w===null?H.stop():H.start()},qe.addEventListener("sessionstart",vn),qe.addEventListener("sessionend",Tn),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(w,J);const he=qe.enabled===!0&&qe.isPresenting===!0,ue=O!==null&&(le===null||he)&&O.begin(Y,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(J),J=qe.getCamera()),w.isScene===!0&&w.onBeforeRender(Y,w,J,le),P=De.get(w,A.length),P.init(J),P.state.textureUnits=$.getTextureUnits(),A.push(P),It.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),pt.setFromProjectionMatrix(It,da,J.reversedDepth),ht=this.localClippingEnabled,dt=We.init(this.clippingPlanes,ht),I=Ie.get(w,B.length),I.init(),B.push(I),qe.enabled===!0&&qe.isPresenting===!0){const Qe=Y.xr.getDepthSensingMesh();Qe!==null&&Ue(Qe,J,-1/0,Y.sortObjects)}Ue(w,J,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(Fe,st,J.reversedDepth),Pt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Pt&&Xe.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&We.beginShadows();const fe=P.state.shadowsArray;if(Ze.render(fe,w,J),dt===!0&&We.endShadows(),(ue&&O.hasRenderPass())===!1){const Qe=I.opaque,He=I.transmissive;if(P.setupLights(),J.isArrayCamera){const $e=J.cameras;if(He.length>0)for(let je=0,rt=$e.length;je<rt;je++){const vt=$e[je];Ot(Qe,He,w,vt)}Pt&&Xe.render(w);for(let je=0,rt=$e.length;je<rt;je++){const vt=$e[je];it(I,w,vt,vt.viewport)}}else He.length>0&&Ot(Qe,He,w,J),Pt&&Xe.render(w),it(I,w,J)}le!==null&&X===0&&($.updateMultisampleRenderTarget(le),$.updateRenderTargetMipmap(le)),ue&&O.end(Y),w.isScene===!0&&w.onAfterRender(Y,w,J),Be.resetDefaultState(),Se=-1,we=null,A.pop(),A.length>0?(P=A[A.length-1],$.setTextureUnits(P.state.textureUnits),dt===!0&&We.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,j!==null&&j.renderEnd()};function Ue(w,J,he,ue){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pt.intersectsSprite(w)){ue&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const Qe=se.update(w),He=w.material;He.visible&&I.push(w,Qe,He,he,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pt.intersectsObject(w))){const Qe=se.update(w),He=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),_t.copy(Qe.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(He)){const $e=Qe.groups;for(let je=0,rt=$e.length;je<rt;je++){const vt=$e[je],at=He[vt.materialIndex];at&&at.visible&&I.push(w,Qe,at,he,_t.z,vt)}}else He.visible&&I.push(w,Qe,He,he,_t.z,null)}}const Ge=w.children;for(let Qe=0,He=Ge.length;Qe<He;Qe++)Ue(Ge[Qe],J,he,ue)}function it(w,J,he,ue){const{opaque:fe,transmissive:Ge,transparent:Qe}=w;P.setupLightsView(he),dt===!0&&We.setGlobalState(Y.clippingPlanes,he),ue&&y.viewport(z.copy(ue)),fe.length>0&&Wt(fe,J,he),Ge.length>0&&Wt(Ge,J,he),Qe.length>0&&Wt(Qe,J,he),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ot(w,J,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ue.id]===void 0){const at=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ue.id]=new pa(1,1,{generateMipmaps:!0,type:at?Wa:wi,minFilter:cr,samples:Math.max(4,C.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Ge=P.state.transmissionRenderTarget[ue.id],Qe=ue.viewport||z;Ge.setSize(Qe.z*Y.transmissionResolutionScale,Qe.w*Y.transmissionResolutionScale);const He=Y.getRenderTarget(),$e=Y.getActiveCubeFace(),je=Y.getActiveMipmapLevel();Y.setRenderTarget(Ge),Y.getClearColor(Oe),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),Pt&&Xe.render(he);const rt=Y.toneMapping;Y.toneMapping=ha;const vt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),P.setupLightsView(ue),dt===!0&&We.setGlobalState(Y.clippingPlanes,ue),Wt(w,he,ue),$.updateMultisampleRenderTarget(Ge),$.updateRenderTargetMipmap(Ge),ve.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Bt=0,pn=J.length;Bt<pn;Bt++){const on=J[Bt],{object:qt,geometry:Zt,material:Ye,group:Qn}=on;if(Ye.side===ua&&qt.layers.test(ue.layers)){const bt=Ye.side;Ye.side=gi,Ye.needsUpdate=!0,yn(qt,he,ue,Zt,Ye,Qn),Ye.side=bt,Ye.needsUpdate=!0,at=!0}}at===!0&&($.updateMultisampleRenderTarget(Ge),$.updateRenderTargetMipmap(Ge))}Y.setRenderTarget(He,$e,je),Y.setClearColor(Oe,ze),vt!==void 0&&(ue.viewport=vt),Y.toneMapping=rt}function Wt(w,J,he){const ue=J.isScene===!0?J.overrideMaterial:null;for(let fe=0,Ge=w.length;fe<Ge;fe++){const Qe=w[fe],{object:He,geometry:$e,group:je}=Qe;let rt=Qe.material;rt.allowOverride===!0&&ue!==null&&(rt=ue),He.layers.test(he.layers)&&yn(He,J,he,$e,rt,je)}}function yn(w,J,he,ue,fe,Ge){w.onBeforeRender(Y,J,he,ue,fe,Ge),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),fe.onBeforeRender(Y,J,he,ue,w,Ge),fe.transparent===!0&&fe.side===ua&&fe.forceSinglePass===!1?(fe.side=gi,fe.needsUpdate=!0,Y.renderBufferDirect(he,J,ue,fe,w,Ge),fe.side=Ns,fe.needsUpdate=!0,Y.renderBufferDirect(he,J,ue,fe,w,Ge),fe.side=ua):Y.renderBufferDirect(he,J,ue,fe,w,Ge),w.onAfterRender(Y,J,he,ue,fe,Ge)}function ln(w,J,he){J.isScene!==!0&&(J=rn);const ue=q.get(w),fe=P.state.lights,Ge=P.state.shadowsArray,Qe=fe.state.version,He=_e.getParameters(w,fe.state,Ge,J,he,P.state.lightProbeGridArray),$e=_e.getProgramCacheKey(He);let je=ue.programs;ue.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?J.environment:null,ue.fog=J.fog;const rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ue.envMap=re.get(w.envMap||ue.environment,rt),ue.envMapRotation=ue.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",ni),je=new Map,ue.programs=je);let vt=je.get($e);if(vt!==void 0){if(ue.currentProgram===vt&&ue.lightsStateVersion===Qe)return Ni(w,He),vt}else He.uniforms=_e.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,he,He),w.onBeforeCompile(He,Y),vt=_e.acquireProgram(He,$e),je.set($e,vt),ue.uniforms=He.uniforms;const at=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(at.clippingPlanes=We.uniform),Ni(w,He),ue.needsLights=Fo(w),ue.lightsStateVersion=Qe,ue.needsLights&&(at.ambientLightColor.value=fe.state.ambient,at.lightProbe.value=fe.state.probe,at.directionalLights.value=fe.state.directional,at.directionalLightShadows.value=fe.state.directionalShadow,at.spotLights.value=fe.state.spot,at.spotLightShadows.value=fe.state.spotShadow,at.rectAreaLights.value=fe.state.rectArea,at.ltc_1.value=fe.state.rectAreaLTC1,at.ltc_2.value=fe.state.rectAreaLTC2,at.pointLights.value=fe.state.point,at.pointLightShadows.value=fe.state.pointShadow,at.hemisphereLights.value=fe.state.hemi,at.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,at.spotLightMatrix.value=fe.state.spotLightMatrix,at.spotLightMap.value=fe.state.spotLightMap,at.pointShadowMatrix.value=fe.state.pointShadowMatrix),ue.lightProbeGrid=P.state.lightProbeGridArray.length>0,ue.currentProgram=vt,ue.uniformsList=null,vt}function ii(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=Tu.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Ni(w,J){const he=q.get(w);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function Bs(w,J){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(J.matrixWorld);for(let he=0,ue=w.length;he<ue;he++){const fe=w[he];if(fe.texture!==null&&fe.boundingBox.containsPoint(M))return fe}return null}function Ka(w,J,he,ue,fe){J.isScene!==!0&&(J=rn),$.resetTextureUnits();const Ge=J.fog,Qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?J.environment:null,He=le===null?Y.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ut.workingColorSpace,$e=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,je=re.get(ue.envMap||Qe,$e),rt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,vt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),at=!!he.morphAttributes.position,Bt=!!he.morphAttributes.normal,pn=!!he.morphAttributes.color;let on=ha;ue.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(on=Y.toneMapping);const qt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Zt=qt!==void 0?qt.length:0,Ye=q.get(ue),Qn=P.state.lights;if(dt===!0&&(ht===!0||w!==we)){const Yt=w===we&&ue.id===Se;We.setState(ue,w,Yt)}let bt=!1;ue.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Qn.state.version||Ye.outputColorSpace!==He||fe.isBatchedMesh&&Ye.batching===!1||!fe.isBatchedMesh&&Ye.batching===!0||fe.isBatchedMesh&&Ye.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&Ye.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&Ye.instancing===!1||!fe.isInstancedMesh&&Ye.instancing===!0||fe.isSkinnedMesh&&Ye.skinning===!1||!fe.isSkinnedMesh&&Ye.skinning===!0||fe.isInstancedMesh&&Ye.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ye.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Ye.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Ye.instancingMorph===!1&&fe.morphTexture!==null||Ye.envMap!==je||ue.fog===!0&&Ye.fog!==Ge||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==We.numPlanes||Ye.numIntersection!==We.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==vt||Ye.morphTargets!==at||Ye.morphNormals!==Bt||Ye.morphColors!==pn||Ye.toneMapping!==on||Ye.morphTargetsCount!==Zt||!!Ye.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ye.__version=ue.version);let Ln=Ye.currentProgram;bt===!0&&(Ln=ln(ue,J,fe),j&&ue.isNodeMaterial&&j.onUpdateProgram(ue,Ln,Ye));let vi=!1,Xi=!1,yi=!1;const Kt=Ln.getUniforms(),mn=Ye.uniforms;if(y.useProgram(Ln.program)&&(vi=!0,Xi=!0,yi=!0),ue.id!==Se&&(Se=ue.id,Xi=!0),Ye.needsLights){const Yt=Bs(P.state.lightProbeGridArray,fe);Ye.lightProbeGrid!==Yt&&(Ye.lightProbeGrid=Yt,Xi=!0)}if(vi||we!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Kt.setValue(Q,"projectionMatrix",w.projectionMatrix),Kt.setValue(Q,"viewMatrix",w.matrixWorldInverse);const ta=Kt.map.cameraPosition;ta!==void 0&&ta.setValue(Q,Ke.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Kt.setValue(Q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Kt.setValue(Q,"isOrthographic",w.isOrthographicCamera===!0),we!==w&&(we=w,Xi=!0,yi=!0)}if(Ye.needsLights&&(Qn.state.directionalShadowMap.length>0&&Kt.setValue(Q,"directionalShadowMap",Qn.state.directionalShadowMap,$),Qn.state.spotShadowMap.length>0&&Kt.setValue(Q,"spotShadowMap",Qn.state.spotShadowMap,$),Qn.state.pointShadowMap.length>0&&Kt.setValue(Q,"pointShadowMap",Qn.state.pointShadowMap,$)),fe.isSkinnedMesh){Kt.setOptional(Q,fe,"bindMatrix"),Kt.setOptional(Q,fe,"bindMatrixInverse");const Yt=fe.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Kt.setValue(Q,"boneTexture",Yt.boneTexture,$))}fe.isBatchedMesh&&(Kt.setOptional(Q,fe,"batchingTexture"),Kt.setValue(Q,"batchingTexture",fe._matricesTexture,$),Kt.setOptional(Q,fe,"batchingIdTexture"),Kt.setValue(Q,"batchingIdTexture",fe._indirectTexture,$),Kt.setOptional(Q,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Kt.setValue(Q,"batchingColorTexture",fe._colorsTexture,$));const Wi=he.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&W.update(fe,he,Ln),(Xi||Ye.receiveShadow!==fe.receiveShadow)&&(Ye.receiveShadow=fe.receiveShadow,Kt.setValue(Q,"receiveShadow",fe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&J.environment!==null&&(mn.envMapIntensity.value=J.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=OR()),Xi){if(Kt.setValue(Q,"toneMappingExposure",Y.toneMappingExposure),Ye.needsLights&&An(mn,yi),Ge&&ue.fog===!0&&Ne.refreshFogUniforms(mn,Ge),Ne.refreshMaterialUniforms(mn,ue,Re,Ae,P.state.transmissionRenderTarget[w.id]),Ye.needsLights&&Ye.lightProbeGrid){const Yt=Ye.lightProbeGrid;mn.probesSH.value=Yt.texture,mn.probesMin.value.copy(Yt.boundingBox.min),mn.probesMax.value.copy(Yt.boundingBox.max),mn.probesResolution.value.copy(Yt.resolution)}Tu.upload(Q,ii(Ye),mn,$)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Tu.upload(Q,ii(Ye),mn,$),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Kt.setValue(Q,"center",fe.center),Kt.setValue(Q,"modelViewMatrix",fe.modelViewMatrix),Kt.setValue(Q,"normalMatrix",fe.normalMatrix),Kt.setValue(Q,"modelMatrix",fe.matrixWorld),ue.uniformsGroups!==void 0){const Yt=ue.uniformsGroups;for(let ta=0,Qa=Yt.length;ta<Qa;ta++){const Fs=Yt[ta];Ce.update(Fs,Ln),Ce.bind(Fs,Ln)}}return Ln}function An(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function Fo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,J,he){const ue=q.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=J,q.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const he=q.get(w);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(w,J=0,he=0){le=w,F=J,X=he;let ue=null,fe=!1,Ge=!1;if(w){const He=q.get(w);if(He.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Q.FRAMEBUFFER,He.__webglFramebuffer),z.copy(w.viewport),K.copy(w.scissor),Me=w.scissorTest,y.viewport(z),y.scissor(K),y.setScissorTest(Me),Se=-1;return}else if(He.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(He.__hasExternalTextures)$.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(He.__boundDepthTexture!==rt){if(rt!==null&&q.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ge=!0);const je=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[J])?ue=je[J][he]:ue=je[J],fe=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?ue=q.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?ue=je[he]:ue=je,z.copy(w.viewport),K.copy(w.scissor),Me=w.scissorTest}else z.copy(tt).multiplyScalar(Re).floor(),K.copy(Xt).multiplyScalar(Re).floor(),Me=ut;if(he!==0&&(ue=ge),y.bindFramebuffer(Q.FRAMEBUFFER,ue)&&y.drawBuffers(w,ue),y.viewport(z),y.scissor(K),y.setScissorTest(Me),fe){const He=q.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,He.__webglTexture,he)}else if(Ge){const He=J;for(let $e=0;$e<w.textures.length;$e++){const je=q.get(w.textures[$e]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$e,je.__webglTexture,he,He)}}else if(w!==null&&he!==0){const He=q.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,He.__webglTexture,he)}Se=-1},this.readRenderTargetPixels=function(w,J,he,ue,fe,Ge,Qe,He=0){if(!(w&&w.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e){y.bindFramebuffer(Q.FRAMEBUFFER,$e);try{const je=w.textures[He],rt=je.format,vt=je.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+He),!C.textureFormatReadable(rt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(vt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ue&&he>=0&&he<=w.height-fe&&Q.readPixels(J,he,ue,fe,Pe.convert(rt),Pe.convert(vt),Ge)}finally{const je=le!==null?q.get(le).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,J,he,ue,fe,Ge,Qe,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e)if(J>=0&&J<=w.width-ue&&he>=0&&he<=w.height-fe){y.bindFramebuffer(Q.FRAMEBUFFER,$e);const je=w.textures[He],rt=je.format,vt=je.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+He),!C.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,at),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ge.byteLength,Q.STREAM_READ),Q.readPixels(J,he,ue,fe,Pe.convert(rt),Pe.convert(vt),0);const Bt=le!==null?q.get(le).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,Bt);const pn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await OM(Q,pn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,at),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ge),Q.deleteBuffer(at),Q.deleteSync(pn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,he=0){const ue=Math.pow(2,-he),fe=Math.floor(w.image.width*ue),Ge=Math.floor(w.image.height*ue),Qe=J!==null?J.x:0,He=J!==null?J.y:0;$.setTexture2D(w,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,he,0,0,Qe,He,fe,Ge),y.unbindTexture()},this.copyTextureToTexture=function(w,J,he=null,ue=null,fe=0,Ge=0){let Qe,He,$e,je,rt,vt,at,Bt,pn;const on=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(he!==null)Qe=he.max.x-he.min.x,He=he.max.y-he.min.y,$e=he.isBox3?he.max.z-he.min.z:1,je=he.min.x,rt=he.min.y,vt=he.isBox3?he.min.z:0;else{const mn=Math.pow(2,-fe);Qe=Math.floor(on.width*mn),He=Math.floor(on.height*mn),w.isDataArrayTexture?$e=on.depth:w.isData3DTexture?$e=Math.floor(on.depth*mn):$e=1,je=0,rt=0,vt=0}ue!==null?(at=ue.x,Bt=ue.y,pn=ue.z):(at=0,Bt=0,pn=0);const qt=Pe.convert(J.format),Zt=Pe.convert(J.type);let Ye;J.isData3DTexture?($.setTexture3D(J,0),Ye=Q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?($.setTexture2DArray(J,0),Ye=Q.TEXTURE_2D_ARRAY):($.setTexture2D(J,0),Ye=Q.TEXTURE_2D),y.activeTexture(Q.TEXTURE0),y.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),y.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),y.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment);const Qn=y.getParameter(Q.UNPACK_ROW_LENGTH),bt=y.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ln=y.getParameter(Q.UNPACK_SKIP_PIXELS),vi=y.getParameter(Q.UNPACK_SKIP_ROWS),Xi=y.getParameter(Q.UNPACK_SKIP_IMAGES);y.pixelStorei(Q.UNPACK_ROW_LENGTH,on.width),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,on.height),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,je),y.pixelStorei(Q.UNPACK_SKIP_ROWS,rt),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,vt);const yi=w.isDataArrayTexture||w.isData3DTexture,Kt=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const mn=q.get(w),Wi=q.get(J),Yt=q.get(mn.__renderTarget),ta=q.get(Wi.__renderTarget);y.bindFramebuffer(Q.READ_FRAMEBUFFER,Yt.__webglFramebuffer),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let Qa=0;Qa<$e;Qa++)yi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,q.get(w).__webglTexture,fe,vt+Qa),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,q.get(J).__webglTexture,Ge,pn+Qa)),Q.blitFramebuffer(je,rt,Qe,He,at,Bt,Qe,He,Q.DEPTH_BUFFER_BIT,Q.NEAREST);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(fe!==0||w.isRenderTargetTexture||q.has(w)){const mn=q.get(w),Wi=q.get(J);y.bindFramebuffer(Q.READ_FRAMEBUFFER,me),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ie);for(let Yt=0;Yt<$e;Yt++)yi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mn.__webglTexture,fe,vt+Yt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mn.__webglTexture,fe),Kt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Wi.__webglTexture,Ge,pn+Yt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Wi.__webglTexture,Ge),fe!==0?Q.blitFramebuffer(je,rt,Qe,He,at,Bt,Qe,He,Q.COLOR_BUFFER_BIT,Q.NEAREST):Kt?Q.copyTexSubImage3D(Ye,Ge,at,Bt,pn+Yt,je,rt,Qe,He):Q.copyTexSubImage2D(Ye,Ge,at,Bt,je,rt,Qe,He);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Kt?w.isDataTexture||w.isData3DTexture?Q.texSubImage3D(Ye,Ge,at,Bt,pn,Qe,He,$e,qt,Zt,on.data):J.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ye,Ge,at,Bt,pn,Qe,He,$e,qt,on.data):Q.texSubImage3D(Ye,Ge,at,Bt,pn,Qe,He,$e,qt,Zt,on):w.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ge,at,Bt,Qe,He,qt,Zt,on.data):w.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ge,at,Bt,on.width,on.height,qt,on.data):Q.texSubImage2D(Q.TEXTURE_2D,Ge,at,Bt,Qe,He,qt,Zt,on);y.pixelStorei(Q.UNPACK_ROW_LENGTH,Qn),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,bt),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ln),y.pixelStorei(Q.UNPACK_SKIP_ROWS,vi),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,Xi),Ge===0&&J.generateMipmaps&&Q.generateMipmap(Ye),y.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){F=0,X=0,le=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}const py={type:"change"},dm={type:"start"},rx={type:"end"},yu=new lm,my=new As,PR=Math.cos(70*Up.DEG2RAD),In=new te,pi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6;class zR extends Fb{constructor(e,n=null){super(e,n),this.state=sn.NONE,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ml.ROTATE,MIDDLE:ml.DOLLY,RIGHT:ml.PAN},this.touches={ONE:dl.ROTATE,TWO:dl.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new Us,this._lastTargetPosition=new te,this._quat=new Us().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gv,this._sphericalDelta=new Gv,this._scale=1,this._panOffset=new te,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new te,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FR.bind(this),this._onPointerDown=BR.bind(this),this._onPointerUp=HR.bind(this),this._onContextMenu=qR.bind(this),this._onMouseWheel=VR.bind(this),this._onKeyDown=XR.bind(this),this._onTouchStart=WR.bind(this),this._onTouchMove=YR.bind(this),this._onMouseDown=kR.bind(this),this._onMouseMove=GR.bind(this),this._interceptControlDown=ZR.bind(this),this._interceptControlUp=KR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(py),this.update(),this.state=sn.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;In.copy(n).sub(this.target),In.applyQuaternion(this._quat),this._spherical.setFromVector3(In),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=pi:r>Math.PI&&(r-=pi),o<-Math.PI?o+=pi:o>Math.PI&&(o-=pi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(In.setFromSpherical(this._spherical),In.applyQuaternion(this._quatInverse),n.copy(this.target).add(In),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const m=In.length();f=this._clampDistance(m*this._scale);const p=m-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const m=new te(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const h=new te(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(m),this.object.updateMatrixWorld(),f=In.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(yu.origin.copy(this.object.position),yu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yu.direction))<PR?this.object.lookAt(this.target):(my.setFromNormalAndCoplanarPoint(this.object.up,this.target),yu.intersectPlane(my,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(py),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){In.setFromMatrixColumn(n,0),In.multiplyScalar(-e),this._panOffset.add(In)}_panUp(e,n){this.screenSpacePanning===!0?In.setFromMatrixColumn(n,1):(In.setFromMatrixColumn(n,0),In.crossVectors(this.object.up,In)),In.multiplyScalar(e),this._panOffset.add(In)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;In.copy(o).sub(this.target);let c=In.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=n-r.top,f=r.width,m=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/n.clientHeight),this._rotateUp(pi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/n.clientHeight),this._rotateUp(pi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,m=(e.pageY+n.y)*.5;this._updateZoomParameters(f,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function BR(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function FR(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function HR(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rx),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function kR(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ml.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=sn.DOLLY;break;case ml.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=sn.ROTATE}break;case ml.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(dm)}function GR(a){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function VR(a){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(a.preventDefault(),this.dispatchEvent(dm),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(rx))}function XR(a){this.enabled!==!1&&this._handleKeyDown(a)}function WR(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case dl.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=sn.TOUCH_ROTATE;break;case dl.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case dl.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=sn.TOUCH_DOLLY_PAN;break;case dl.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(dm)}function YR(a){switch(this._trackPointer(a),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=sn.NONE}}function qR(a){this.enabled!==!1&&a.preventDefault()}function ZR(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KR(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bo=new te;function ki(a,e,n,r,o,c){const f=2*Math.PI*o/4,m=Math.max(c-2*o,0),p=Math.PI/4;bo.copy(e),bo[r]=0,bo.normalize();const h=.5*f/(f+m),v=1-bo.angleTo(a)/p;return Math.sign(bo[n])===1?v*h:m/(f+m)+h+h*(1-v)}class hm extends Os{constructor(e=1,n=1,r=1,o=2,c=.1){const f=o*2+1;if(c=Math.min(e/2,n/2,r/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:r,segments:o,radius:c},f===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const p=new te,h=new te,v=new te(e,n,r).divideScalar(2).subScalar(c),E=this.attributes.position.array,g=this.attributes.normal.array,b=this.attributes.uv.array,R=E.length/6,N=new te,T=.5/f;for(let S=0,U=0;S<E.length;S+=3,U+=2)switch(p.fromArray(E,S),h.copy(p),h.x-=Math.sign(h.x)*T,h.y-=Math.sign(h.y)*T,h.z-=Math.sign(h.z)*T,h.normalize(),E[S+0]=v.x*Math.sign(p.x)+h.x*c,E[S+1]=v.y*Math.sign(p.y)+h.y*c,E[S+2]=v.z*Math.sign(p.z)+h.z*c,g[S+0]=h.x,g[S+1]=h.y,g[S+2]=h.z,Math.floor(S/R)){case 0:N.set(1,0,0),b[U+0]=ki(N,h,"z","y",c,r),b[U+1]=1-ki(N,h,"y","z",c,n);break;case 1:N.set(-1,0,0),b[U+0]=1-ki(N,h,"z","y",c,r),b[U+1]=1-ki(N,h,"y","z",c,n);break;case 2:N.set(0,1,0),b[U+0]=1-ki(N,h,"x","z",c,e),b[U+1]=ki(N,h,"z","x",c,r);break;case 3:N.set(0,-1,0),b[U+0]=1-ki(N,h,"x","z",c,e),b[U+1]=1-ki(N,h,"z","x",c,r);break;case 4:N.set(0,0,1),b[U+0]=1-ki(N,h,"x","y",c,e),b[U+1]=1-ki(N,h,"y","x",c,n);break;case 5:N.set(0,0,-1),b[U+0]=ki(N,h,"x","y",c,e),b[U+1]=1-ki(N,h,"y","x",c,n);break}}static fromJSON(e){return new hm(e.width,e.height,e.depth,e.segments,e.radius)}}const Po="city-tycoon-v1",Pp="city-tycoon-manual-v1",lx=720*60*60*1e3,QR=a=>a===void 0||Array.isArray(a)&&a.length<=13&&a.every(e=>typeof e=="string"),jR=(a,e)=>a==null||a&&Number.isInteger(a.sourceId)&&a.sourceId>=0&&a.sourceId<e&&Number.isInteger(a.targetId)&&a.targetId>=0&&a.targetId<e&&typeof a.cardId=="string"&&(a.targetPosition===null||a.targetPosition===void 0||Number.isInteger(a.targetPosition)),JR=(a,e,n)=>a&&a.id===e&&typeof a.name=="string"&&Number.isFinite(a.cash)&&a.cash>=0&&Number.isInteger(a.pos)&&a.pos>=0&&a.pos<32&&[0,1].includes(a.jail)&&typeof a.bankrupt=="boolean"&&(a.diceCount===void 0||[1,2].includes(a.diceCount))&&QR(a.skillHand)&&(a.skillUsedThisTurn===void 0||typeof a.skillUsedThisTurn=="boolean")&&(a.slowTurns===void 0||Number.isInteger(a.slowTurns)&&a.slowTurns>=0)&&(a.rentShield===void 0||a.rentShield===0||a.rentShield===1)&&(a.rentMultiplier===void 0||a.rentMultiplier===1||a.rentMultiplier===2),$R=(a,e)=>a&&typeof a=="object"&&!Array.isArray(a)&&Object.entries(a).every(([n,r])=>Number.isInteger(+n)&&+n>0&&+n<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+n)&&r&&Number.isInteger(r.owner)&&r.owner>=0&&r.owner<e&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5);function qu(a){var e;return!((a==null?void 0:a.version)===1&&Array.isArray(a.players)&&a.players.length>=2&&a.players.length<=4&&a.players.every((n,r)=>JR(n,r,a.players.length)))||!$R(a.lots,a.players.length)||!Number.isInteger(a.turn)||a.turn<0||a.turn>=a.players.length||!Number.isInteger(a.round)||a.round<1||!(a.maxRounds===void 0||a.maxRounds===null||Number.isInteger(a.maxRounds)&&a.maxRounds>=1)||!(a.maxRounds===void 0||a.maxRounds===null||a.round<=a.maxRounds+1)||!(a.inflationRate===void 0||Number.isInteger(a.inflationRate)&&a.inflationRate>=0&&a.inflationRate<=10)||!(a.priceIndex===void 0||Number.isFinite(a.priceIndex)&&a.priceIndex>=1&&a.priceIndex<=10)||!["ready","moving","decision","end","finished"].includes(a.stage)||!Array.isArray(a.dice)||![1,2].includes(a.dice.length)||!a.dice.every(n=>Number.isInteger(n)&&n>=1&&n<=6)||!Number.isInteger(a.remaining)||a.remaining<0||a.remaining>12||a.stage==="moving"&&!(a.remaining>0&&Number.isInteger(a.eventIndex)&&a.eventIndex>=0&&a.eventIndex<8)||!Array.isArray(a.log)||!a.log.every(n=>n&&typeof n.text=="string"&&typeof n.kind=="string")||typeof a.notice!="string"||!(a.event===null||a.event&&typeof a.event.title=="string"&&(a.event.amount===void 0||Number.isFinite(a.event.amount)))||!(a.skillDeck===void 0||Array.isArray(a.skillDeck)&&a.skillDeck.every(n=>typeof n=="string"))||!(a.skillDiscard===void 0||Array.isArray(a.skillDiscard)&&a.skillDiscard.every(n=>typeof n=="string"))||a.skillOverflow!==void 0&&!(a.skillOverflow===null||Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)&&a.skillOverflow.playerId>=0&&a.skillOverflow.playerId<a.players.length)||!jR(a.pendingSkill,a.players.length)||a.limitBuildings!==void 0&&typeof a.limitBuildings!="boolean"||a.stage==="finished"&&!(Number.isInteger(a.winner)&&a.winner>=0&&a.winner<a.players.length)||a.bank!==void 0&&!(Number.isInteger(a.bank.houses)&&a.bank.houses>=0&&Number.isInteger(a.bank.hotels)&&a.bank.hotels>=0)?!1:(a.buildAvailable===void 0||typeof a.buildAvailable=="boolean")&&(a.buildUsed===void 0||typeof a.buildUsed=="boolean")}const zp=(a,e)=>a&&Number.isFinite(a.savedAt)&&a.savedAt<=e&&e-a.savedAt<lx&&qu(a.game);function zo(a=localStorage,e=Date.now()){const n=a.getItem(Pp),r=n?JSON.parse(n):[];if(!Array.isArray(r))throw new Error("存檔清單格式損壞。");const o=r.filter(f=>zp(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,m)=>m.savedAt-f.savedAt).slice(0,10);JSON.stringify(o)!==n&&a.setItem(Pp,JSON.stringify(o));const c=a.getItem(Po);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!zp(f,e))&&a.removeItem(Po)}return o}function e3(a,e,n=!1,r=localStorage,o=Date.now()){if(!qu(a))throw new Error("遊戲狀態無法儲存。");const c=zo(r,o);if(c.length>=10&&!n)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const m=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${a.round}`,savedAt:o,game:structuredClone(a)},...c].slice(0,10);return r.setItem(Pp,JSON.stringify(m)),m}function t3(a,e=localStorage,n=Date.now()){const r=zo(e,n).find(o=>o.id===a);if(!r)throw new Error("存檔已過期或不存在。");return structuredClone(r.game)}function Bp(a,e=localStorage,n=Date.now()){e.setItem(Po,JSON.stringify({savedAt:n,game:a}))}function gy(a=localStorage,e=Date.now()){const n=a.getItem(Po);if(!n)return null;const r=JSON.parse(n);return qu(r)?(Bp(r,a,e),r):zp(r,e)?r.game:(a.removeItem(Po),null)}const Bh={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},propertyUnaffordable:{mood:"anxious",label:"無奈",emoji:"😣",priority:45,messages:["這塊地好喜歡，可是現金不夠……","差一點就能買下了！","先存錢，下次再來。","地產很香，荷包不允許。","只能先放棄這次機會。"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]},skillUse:{mood:"proud",label:"出牌",emoji:"✨",priority:50,messages:["技能卡啟動！","這張牌用得正是時候！","城市局勢，照我的計畫走！","效果準備生效！","漂亮的一手牌！"]},skillTarget:{mood:"surprised",label:"中招",emoji:"⚡",priority:55,messages:["等等，這張牌是對我的？","局勢突然變了！","這招來得太快了吧！","我的計畫被打亂了！","需要想辦法應對！"]},skillLandSwapTarget:{mood:"surprised",label:"錯愕",emoji:"🏠",priority:55,messages:["等等，我的地產被換走了？！","這筆換地交易，我怎麼沒同意！","我的街區突然易主了！","房契被調包了嗎？","這張換地卡太突然了吧！"]},skillCounter:{mood:"proud",label:"反制",emoji:"🛡️",priority:65,messages:["擋下來了！","這張反制卡沒有浪費！","想算計我，還早得很！","護盾成功！","漂亮化解危機！"]},skillReflect:{mood:"proud",label:"反彈",emoji:"↩️",priority:70,messages:["原路奉還！","這招現在回到你身上！","反彈成功！","攻擊者變成自己了！","這就是出牌時機！"]}};function li(a,{category:e,summary:n,participants:r}){const o=Bh[e];if(!o||!(r!=null&&r.length))return;a.emotionSequence=(a.emotionSequence||0)+1;const c=a.emotionSequence,f=r.map(({playerId:p,amountDelta:h,category:v})=>{const E=Bh[v]||o;return{playerId:p,mood:E.mood,moodLabel:E.label,emoji:E.emoji,amountDelta:h,message:E.messages[(c+p)%E.messages.length]}}),m={id:c,category:e,summary:n,priority:Math.max(o.priority,...r.map(({category:p})=>{var h;return((h=Bh[p])==null?void 0:h.priority)||0})),players:f};a.emotionEvents||(a.emotionEvents=[]),a.emotionEvents.push(m),a.emotionHistory||(a.emotionHistory=[]),a.emotionHistory.push(m),a.emotionHistory.length>32&&(a.emotionHistory=a.emotionHistory.slice(-32))}const qn=["#61ac78","#62a6da","#e7b942","#de809a"],n3=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],i3=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],Vt=i3.map((a,e)=>{const n={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},r=Math.floor(e/4);return{id:e,name:a,type:n[e]||"property",group:r,color:n3[r],price:1e3+r*300+e%4*100}}),St=a=>"$"+a.toLocaleString("en-US"),pm=1,ox=5,a3=10,cx=10,Zn=(a,e,n=Math.round)=>n(e*((a==null?void 0:a.priceIndex)??1)),hl=(a,e)=>Zn(a,e.price),Ml=(a,e)=>Zn(e,a.price*.6),s3=40,Iu=3,Cs=[{id:"trap",name:"陷害卡",type:"control",timing:"active",icon:"⛓️",summary:"指定玩家進入監獄",target:"player"},{id:"slow",name:"龜速卡",type:"control",timing:"active",icon:"🐌",summary:"目標 3 回合最多走 1 格",target:"player"},{id:"teleport",name:"傳送卡",type:"movement",timing:"active",icon:"✦",summary:"將玩家移到合法位置",target:"player"},{id:"get-out",name:"出獄卡",type:"utility",timing:"active",icon:"🔓",summary:"解除自己的監獄狀態"},{id:"rent-shield",name:"免租卡",type:"defense",timing:"active",icon:"🛡️",summary:"下一次租金免除"},{id:"rent-double",name:"租金加倍卡",type:"money",timing:"active",icon:"×2",summary:"下一次收租提高為 2 倍"},{id:"position-swap",name:"位置交換卡",type:"movement",timing:"active",icon:"⇄",summary:"交換兩名玩家位置",target:"player"},{id:"birthday",name:"生日派對卡",type:"money",timing:"active",icon:"🎂",summary:"其他玩家各支付一筆錢"},{id:"subsidy",name:"城市補助卡",type:"money",timing:"active",icon:"🪙",summary:"從銀行獲得小額補助"},{id:"counter",name:"反制卡",type:"defense",timing:"reaction",icon:"✋",summary:"取消作用在自己的技能"},{id:"reflect",name:"反彈卡",type:"defense",timing:"reaction",icon:"↩",summary:"將單一指定技能反彈"},{id:"redraw",name:"幸運重抽卡",type:"utility",timing:"active",icon:"⟳",summary:"放棄手牌並重新抽卡"},{id:"land-swap",name:"換地卡",type:"control",timing:"active",icon:"🏠",summary:"交換兩塊地產所有權",target:"land"}],Ds=Cs.map(a=>a.id),Zu=a=>Cs.find(e=>e.id===a)||null,Fh=Vt.filter(a=>a.type!=="gojail").map(a=>a.id),ux=a=>a===null?null:Number.isInteger(Number(a))&&Number(a)>=1?Number(a):s3,mm=a=>Math.max(0,Math.min(a3,Number.isFinite(Number(a))?Math.round(Number(a)):pm)),r3=a=>Math.min(ox,mm(a)),fx=a=>a!==!1,Pu={houses:32,hotels:12},gm=a=>{const e=[...a];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},l3=a=>{let e=0,n=0;for(const r of Object.values(a.lots||{}))r.level===5?n++:e+=Math.max(0,Math.min(4,r.level||0));return{houses:Math.max(0,Pu.houses-e),hotels:Math.max(0,Pu.hotels-n)}},Is=a=>a.bank&&Number.isInteger(a.bank.houses)&&Number.isInteger(a.bank.hotels)?a.bank:l3(a),o3=a=>Array.isArray(a)?a.filter(e=>Ds.includes(e)).slice(0,Ds.length):[],c3=a=>a&&Number.isInteger(a.sourceId)&&Number.isInteger(a.targetId)&&Ds.includes(a.cardId)?{sourceId:a.sourceId,targetId:a.targetId,cardId:a.cardId,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null}:null,u3=a=>{var e;return{...a,limitBuildings:fx(a.limitBuildings),maxRounds:ux(a.maxRounds),inflationRate:mm(a.inflationRate??0),priceIndex:Math.max(1,Math.min(cx,Number.isFinite(a.priceIndex)?a.priceIndex:1)),players:a.players.map((n,r)=>({...n,diceCount:n.diceCount??2,color:n.color||qn[r],human:n.human===void 0?r===0:!!n.human,skillHand:o3(n.skillHand),skillUsedThisTurn:n.skillUsedThisTurn===!0,slowTurns:Number.isInteger(n.slowTurns)&&n.slowTurns>0?n.slowTurns:0,rentShield:n.rentShield===1?1:0,rentMultiplier:n.rentMultiplier===2?2:1})),skillDeck:Array.isArray(a.skillDeck)?a.skillDeck.filter(n=>Ds.includes(n)):gm(Ds),skillDiscard:Array.isArray(a.skillDiscard)?a.skillDiscard.filter(n=>Ds.includes(n)):[],skillOverflow:Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)?{playerId:a.skillOverflow.playerId}:null,pendingSkill:c3(a.pendingSkill),bank:{...Is(a)},buildAvailable:a.buildAvailable===!0,buildUsed:a.buildUsed===!0,emotionEvents:[],emotionHistory:[],emotionSequence:Number.isInteger(a.emotionSequence)?a.emotionSequence:0}},f3=[["你",qn[0],!0],["艾米",qn[1],!1],["小傑",qn[2],!1],["喵喵",qn[3],!1]];function dx(a={}){const e=Math.min(4,Math.max(2,Number(a.count)||4)),n=f3.slice(0,e).map(([o,c,f],m)=>{var h;const p=((h=a.players)==null?void 0:h[m])||{};return{id:m,diceCount:2,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():o,color:p.color||c,human:p.human===void 0?f:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1,skillHand:[],skillUsedThisTurn:!1,slowTurns:0,rentShield:0,rentMultiplier:1}}),r=r3(a.inflationRate??pm);return{version:1,players:n,lots:{},skillDeck:gm(Ds),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...Pu},limitBuildings:fx(a.limitBuildings),turn:0,round:1,maxRounds:ux(a.maxRounds),inflationRate:r,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionHistory:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${r}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const Gt=(a,e,n="info")=>{a.notice=e,a.log.unshift({text:e,kind:n}),a.log=a.log.slice(0,40)},oa=(a,e)=>Vt.filter(n=>{var r;return((r=a.lots[n.id])==null?void 0:r.owner)===e}),d3=(a,e,n)=>Vt.filter(r=>r.type==="property"&&r.group===e.group).every(r=>{var o;return((o=a.lots[r.id])==null?void 0:o.owner)===n}),zu=(a,e)=>{let n=a.lots[e.id];return n?Zn(a,Math.round(e.price*.18)*(n.level?[1,3,6,10,15,22][n.level]:d3(a,e,n.owner)?2:1)):0},dr=(a,e)=>a.players[e].cash+oa(a,e).reduce((n,r)=>n+Zn(a,r.price+(a.lots[r.id].level||0)*Math.round(r.price*.6)),0),Fp=(a,e,n=a.turn)=>{const r=Vt[e],o=a.lots[e],c=Is(a);return!r||r.type!=="property"||!o||o.owner!==n||a.turn!==n||a.stage!=="end"||a.selected!==e||!a.buildAvailable||a.buildUsed||o.level>=5||a.players[n].cash<Ml(r,a)?!1:a.limitBuildings===!1||(o.level<4?c.houses>0:c.hotels>0)};function hx(a,e){const n=a.bank||Is(a);e.level===5?n.hotels++:n.houses+=Math.max(0,Math.min(4,e.level||0)),a.bank=n}function px(a){const e=a.players.filter(n=>!n.bankrupt);e.length===1&&(a.winner=e[0].id,a.stage="finished",Gt(a,`${e[0].name}成為城市大亨！`))}const Hp=new Set(["trap","slow","teleport","get-out","rent-shield","rent-double","position-swap","birthday","subsidy","redraw","land-swap"]);function mx(a,e,n="事件中，"){const r=a.players[e];if(!r||r.skillHand.length>=Ds.length)return null;!a.skillDeck.length&&a.skillDiscard.length&&(a.skillDeck=gm(a.skillDiscard),a.skillDiscard=[]);const o=a.skillDeck.shift();if(!o)return null;r.skillHand.push(o);const c=Zu(o);return r.skillHand.length>Iu&&(a.skillOverflow={playerId:e}),Gt(a,`${r.name}${n}獲得技能卡「${c.name}」。`,"skill"),c}function Bu(a,e,n){const r=e.skillHand.indexOf(n);return r<0?!1:(e.skillHand.splice(r,1),a.skillDiscard.push(n),!0)}function kp(a,e){return Number.isInteger(e)&&e>=0&&e<a.players.length&&!a.players[e].bankrupt}function h3(a,e){return{counter:e.skillHand.includes("counter"),reflect:e.skillHand.includes("reflect")}}function Gp(a,e,n,r,o,{reflected:c=!1}={}){if(e.id==="trap"&&(r.pos=8,r.jail=1),e.id==="slow"&&(r.slowTurns=3),e.id==="teleport"){const p=r.pos;r.pos=o.targetPosition,gx(a,r.pos,{playerId:r.id,flow:!1,drawSkill:!1}),Gt(a,`${r.name}由${n.name}使用傳送卡，從${Vt[p].name}移動至${Vt[r.pos].name}。`,"skill")}if(e.id==="get-out"&&(n.jail=0),e.id==="rent-shield"&&(n.rentShield=1),e.id==="rent-double"&&(n.rentMultiplier=2),e.id==="position-swap"&&([n.pos,r.pos]=[r.pos,n.pos]),e.id==="birthday"){const p=Zn(a,300);for(const h of a.players)h.id!==n.id&&!h.bankrupt&&Au(a,h.id,p,n.id,"skill")}if(e.id==="subsidy"){const p=Zn(a,800);n.cash+=p,li(a,{category:"windfall",summary:`${n.name}使用城市補助卡，獲得 ${St(p)}。`,participants:[{playerId:n.id,amountDelta:p}]})}const f=e.target==="player"?`，目標為${r.name}`:e.target==="land"?`，交換${Vt[o.ownLotId].name}與${Vt[o.targetLotId].name}`:"",m=`${c?"反彈後，":""}${n.name}使用${e.name}${f}。`;if(Gt(a,m,"skill"),!c){const p=[{playerId:n.id,category:"skillUse"}];if((e.target==="player"||e.target==="land")&&(r==null?void 0:r.id)!==n.id&&p.push({playerId:r.id,category:e.id==="land-swap"?"skillLandSwapTarget":"skillTarget"}),e.id==="birthday")for(const h of a.players)h.id!==n.id&&!h.bankrupt&&p.push({playerId:h.id,category:"skillTarget"});li(a,{category:"skillUse",summary:m,participants:p})}e.id==="land-swap"&&Gt(a,`${Vt[o.ownLotId].name}與${Vt[o.targetLotId].name}的所有權已交換。`,"skill")}function p3(a,e="pass"){const n=a.pendingSkill;if(!n)return!1;const r=a.players[n.sourceId],o=a.players[n.targetId],c=Zu(n.cardId);if(!r||!o||!c)return a.pendingSkill=null,!1;if(e==="counter"&&Bu(a,o,"counter")){a.pendingSkill=null;const f=`${o.name}使用反制卡，取消${r.name}的${c.name}。`;return Gt(a,f,"skill"),li(a,{category:"skillCounter",summary:f,participants:[{playerId:o.id,category:"skillCounter"},{playerId:r.id,category:"skillTarget"}]}),!0}if(e==="reflect"&&c.target==="player"&&Bu(a,o,"reflect")&&kp(a,r.id)){a.pendingSkill=null,Gp(a,c,r,r,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId},{reflected:!0});const f=`${o.name}使用反彈卡，將${c.name}反彈給${r.name}。`;return Gt(a,f,"skill"),li(a,{category:"skillReflect",summary:f,participants:[{playerId:o.id,category:"skillReflect"},{playerId:r.id,category:"skillTarget"}]}),!0}return e!=="pass"?!1:(a.pendingSkill=null,Gp(a,c,r,o,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId}),!0)}function m3(a,e){var h,v;const n=a.players[a.turn],r=e.overflowUse===!0&&((h=a.skillOverflow)==null?void 0:h.playerId)===a.turn&&a.stage!=="finished";if(!(a.stage==="ready"&&!a.skillOverflow||r)||!(n!=null&&n.human)&&!n||n.bankrupt||n.skillUsedThisTurn||a.pendingSkill)return!1;const c=Zu(e.cardId);if(!c||c.timing!=="active"||!Hp.has(c.id)||!n.skillHand.includes(c.id))return!1;const f=kp(a,e.targetId)?a.players[e.targetId]:null,m=c.id==="slow";if(c.target==="player"&&(!f||f.id===n.id&&!m)||c.id==="slow"&&f.slowTurns>0||c.id==="get-out"&&n.jail===0)return!1;let p=null;if(c.id==="land-swap"){const E=a.lots[e.ownLotId],g=a.lots[e.targetLotId];if(!E||!g||E.owner!==n.id||g.owner===n.id||!Vt[e.ownLotId]||!Vt[e.targetLotId]||Vt[e.ownLotId].type!=="property"||Vt[e.targetLotId].type!=="property"||!kp(a,g.owner))return!1;p=a.players[g.owner],[E.owner,g.owner]=[g.owner,E.owner]}if(Bu(a,n,c.id),n.skillUsedThisTurn=!0,((v=a.skillOverflow)==null?void 0:v.playerId)===n.id&&n.skillHand.length<=Iu&&(a.skillOverflow=null),c.target==="player"&&f.id!==n.id){const E=h3(a,f);if(E.counter||E.reflect){a.pendingSkill={sourceId:n.id,targetId:f.id,cardId:c.id,targetPosition:Number.isInteger(e.targetPosition)?e.targetPosition:null,ownLotId:e.ownLotId,targetLotId:e.targetLotId};const g=`${n.name}使用${c.name}，指定${f.name}，等待回應。`;return Gt(a,g,"skill"),li(a,{category:"skillUse",summary:g,participants:[{playerId:n.id,category:"skillUse"},{playerId:f.id,category:"skillTarget"}]}),!0}}return Gp(a,c,n,f||p||n,e),!0}function g3(a,e){var o,c;const n=(o=a.skillOverflow)==null?void 0:o.playerId;if(!Number.isInteger(n)||n<0||n>=a.players.length)return!1;const r=a.players[n];return r.skillHand.length<=Iu||!Bu(a,r,e.cardId)?!1:(r.skillHand.length<=Iu&&(a.skillOverflow=null),Gt(a,`${r.name}放棄技能卡「${((c=Zu(e.cardId))==null?void 0:c.name)||e.cardId}」。`,"skill"),!0)}function Au(a,e,n,r=null,o="tax"){let c=a.players[e],f=0;for(const p of oa(a,e).sort((h,v)=>h.price-v.price)){if(c.cash>=n)break;const h=Zn(a,p.price+a.lots[p.id].level*Math.round(p.price*.6),v=>Math.floor(v*.5));c.cash+=h,f+=h,hx(a,a.lots[p.id]),delete a.lots[p.id],Gt(a,`${c.name}變賣${p.name}，回收 ${St(h)}。`,"sell")}f>0&&li(a,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${St(f)}。`,participants:[{playerId:e,amountDelta:f}]});const m=Math.min(c.cash,n);if(c.cash-=m,r!==null&&(a.players[r].cash+=m),m>0)if(r!==null){const p=a.players[r];li(a,{category:"rentPaid",summary:`${c.name}支付 ${St(m)} 給${p.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-m},{playerId:r,category:"rentReceived",amountDelta:m}]})}else li(a,{category:o==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${St(m)}。`,participants:[{playerId:e,amountDelta:-m}]});if(m<n){c.bankrupt=!0;const p=n-m;Gt(a,`${c.name}資金不足，宣告破產。`,"bankrupt"),li(a,{category:"bankruptcy",summary:`${c.name}無法支付 ${St(p)}，宣告破產。`,participants:[{playerId:e,amountDelta:-p}]}),px(a)}}function gx(a,e,n={}){const r=n.playerId??a.turn,o=n.flow!==!1,c=a.players[r],f=Vt[c.pos];if(o&&(a.selected=f.id,a.stage="end",a.buildAvailable=!1,a.buildUsed=!1),f.type==="property"){const m=a.lots[f.id];if(m)if(m.owner!==c.id){let p=zu(a,f);const h=a.players[m.owner];h.rentMultiplier===2&&(p*=2,h.rentMultiplier=1),c.rentShield===1?(c.rentShield=0,Gt(a,`${c.name}使用免租卡，免除${f.name}的 ${St(p)} 租金。`,"skill")):(Gt(a,`${c.name}在${f.name}支付 ${St(p)} 租金給${h.name}。`,"rent"),Au(a,c.id,p,m.owner,"rent"))}else{a.buildAvailable=!0;const p=m.level===5?"已有旅館。":m.level===4?Is(a).hotels?"可以升級為旅館。":"銀行旅館已用完。":Is(a).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";Gt(a,`${c.name}回到自己的${f.name}，${p}`)}else{const p=hl(a,f),h=c.cash>=p;o&&(a.stage=h?"decision":"end"),Gt(a,o?`${c.name}抵達${f.name}，${h?"可以購買這塊地產。":"現金不足以購買。"}`:`${c.name}抵達${f.name}，未進行購買。`),o&&!h&&li(a,{category:"propertyUnaffordable",summary:`${c.name}抵達${f.name}，但現金不足以購買。`,participants:[{playerId:c.id}]})}}else if(f.type==="tax"){const m=Zn(a,f.id===6?1200:1800);Gt(a,`${c.name}支付${f.name} ${St(m)}。`,"tax"),Au(a,c.id,m,null,"tax")}else if(f.type==="gojail")c.pos=8,c.jail=1,Gt(a,`${c.name}前往監獄，下次回合暫停一次。`,"jail");else if(f.type==="chance"||f.type==="fund"){const m=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[p,h,v,E]=m[Math.abs(e||0)%m.length];if(E){const b=a.inflationRate;a.inflationRate=mm(b+E);const R=a.inflationRate-b,N=R===0?`通膨率維持 ${a.inflationRate}%（已達上限或下限）`:`通膨率${R>0?"提高":"降低"}至 ${a.inflationRate}%`;a.event={title:p,body:h,amount:0,kind:"inflation",inflationDelta:R,inflationRate:a.inflationRate},Gt(a,`${c.name}抽到「${p}」：${N}，新通膨率於下一輪影響物價。`,"inflation")}else{const b=Zn(a,v);a.event={title:p,body:h,amount:b},Gt(a,`${c.name}抽到「${p}」：${b>0?"獲得":"支付"} ${St(Math.abs(b))}。`,"chance"),b>0?(c.cash+=b,li(a,{category:"windfall",summary:`${c.name}獲得 ${St(b)}。`,participants:[{playerId:c.id,amountDelta:b}]})):Au(a,c.id,-b,null,"chance")}const g=n.drawSkill===!1?null:f.type==="chance"?mx(a,c.id,"機會事件中，"):null;g&&(a.event={...a.event,skillCardId:g.id,skillCardName:g.name})}else Gt(a,f.type==="start"?`${c.name}抵達起點。`:f.type==="park"?`${c.name}在城市公園休息，享受片刻悠閒。`:`${c.name}只是探訪監獄，自由通行。`);px(a)}function _3(a,e){var o;if(e.type==="NEW")return dx(e.config);if(e.type==="LOAD")return qu(e.game)?u3(structuredClone(e.game)):a;const n=structuredClone(a),r=n.players[n.turn];switch(n.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(n.stage!=="ready"||!r.human||r.bankrupt||r.jail||![1,2].includes(e.count))return a;r.diceCount=e.count;break;case"ROLL":if(n.stage!=="ready"||r.bankrupt||n.pendingSkill)return a;if(r.jail){r.jail--,n.stage="end",Gt(n,`${r.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(r.diceCount??2)||!e.dice.every(p=>Number.isInteger(p)&&p>=1&&p<=6))return a;n.dice=[...e.dice];const c=e.dice.reduce((p,h)=>p+h,0),f=r.slowTurns>0;r.slowTurns=Math.max(0,r.slowTurns-(f?1:0)),n.remaining=f?Math.min(1,c):c,n.event=null,n.stage="moving",n.eventIndex=e.eventIndex,Gt(n,`${r.name}擲出 ${e.dice.join(" + ")}，前進 ${n.remaining} 格。${f?"龜速效果生效，本回合最多前進 1 格。":""}`,"dice");break;case"STEP":if(n.stage!=="moving")return a;if(r.pos=(r.pos+1)%32,r.pos===0){const p=Zn(n,2e3);r.cash+=p,Gt(n,`${r.name}通過起點，領取 ${St(p)}。`,"salary"),li(n,{category:"salary",summary:`${r.name}經過起點，獲得 ${St(p)}。`,participants:[{playerId:r.id,amountDelta:p}]})}n.remaining--;const m=Vt[r.pos].type==="fund"?mx(n,r.id,n.remaining===0?"抵達城市基金格，":"經過城市基金格，"):null;n.remaining===0&&(gx(n,n.eventIndex),m&&n.event&&(n.event={...n.event,skillCardId:m.id,skillCardName:m.name}));break;case"BUY":{if(n.stage!=="decision")return a;const p=Vt[r.pos],h=hl(n,p);if(n.lots[p.id]||r.cash<h)return a;r.cash-=h,n.lots[p.id]={owner:r.id,level:0},n.stage="end",Gt(n,`${r.name}購買了${p.name}，支付 ${St(h)}。`,"buy"),li(n,{category:"purchase",summary:`${r.name}購買${p.name}，支付 ${St(h)}。`,participants:[{playerId:r.id,amountDelta:-h}]});break}case"SKIP":if(n.stage!=="decision")return a;n.stage="end",Gt(n,`${r.name}暫不購買${Vt[r.pos].name}。`);break;case"BUILD":{if(!Fp(n,e.id))return a;const p=Vt[e.id],h=n.lots[e.id],v=Ml(p,n);n.bank=n.bank||Is(n),r.cash-=v,h.level<4?(n.bank.houses--,h.level++,Gt(n,`${r.name}在${p.name}加蓋第 ${h.level} 間房屋，支付 ${St(v)}。`,"build")):(n.bank.houses+=4,n.bank.hotels--,h.level=5,Gt(n,`${r.name}將${p.name}的 4 間房屋升級為旅館，支付 ${St(v)}。`,"build")),li(n,{category:"construction",summary:`${r.name}支付 ${St(v)} 建設地產。`,participants:[{playerId:r.id,amountDelta:-v}]}),n.buildAvailable=!1,n.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(n.stage)||((o=n.lots[e.id])==null?void 0:o.owner)!==r.id)return a;const p=Vt[e.id],h=n.lots[e.id],v=Zn(n,p.price+h.level*Math.round(p.price*.6),E=>Math.floor(E*.5));hx(n,h),r.cash+=v,delete n.lots[e.id],n.buildAvailable=!1,Gt(n,`${r.name}變賣${p.name}，回收 ${St(v)}。`,"sell"),li(n,{category:"sale",summary:`${r.name}變賣${p.name}，回收 ${St(v)}。`,participants:[{playerId:r.id,amountDelta:v}]});break}case"USE_SKILL_CARD":if(!m3(n,e))return a;break;case"RESPOND_SKILL":if(!n.pendingSkill||e.playerId!==n.pendingSkill.targetId||!["counter","reflect","pass"].includes(e.response)||!p3(n,e.response))return a;break;case"RESOLVE_SKILL_OVERFLOW":if(!g3(n,e))return a;break;case"NEXT":if(n.stage!=="end"||n.skillOverflow||n.pendingSkill)return a;{let p=n.turn;do if(p=(p+1)%n.players.length,p===0){n.round++;const h=n.priceIndex;n.priceIndex=Math.min(cx,n.priceIndex*(1+n.inflationRate/100)),n.priceIndex>h&&Gt(n,`新的一輪開始，物價指數升至 ${n.priceIndex.toFixed(2)}×。`,"inflation")}while(n.players[p].bankrupt);n.turn=p,n.players[p].skillUsedThisTurn=!1,n.event=null,n.stage="ready",n.selected=null,n.buildAvailable=!1,n.buildUsed=!1,n.maxRounds!==null&&n.round>n.maxRounds?(n.winner=n.players.filter(h=>!h.bankrupt).sort((h,v)=>dr(n,v.id)-dr(n,h.id))[0].id,n.stage="finished",Gt(n,`${n.maxRounds} 回合結束！${n.players[n.winner].name}以最高總資產獲勝。`)):Gt(n,`輪到${n.players[p].name}，準備擲骰子。`);break}default:return a}return n.limitBuildings===!1&&(n.bank={...Pu}),n}function xu(a){return a<=8?[-8+a*2,8]:a<=16?[8,8-(a-8)*2]:a<=24?[8-(a-16)*2,-8]:[-8,-8+(a-24)*2]}const v3=ke.forwardRef(function({game:e,onSelect:n,onError:r,emotionAnchorRefs:o,emotionMoods:c,children:f},m){const p=ke.useRef(),h=ke.useRef(),v=ke.useRef(e),E=ke.useRef(n),g=ke.useRef({});return v.current=e,E.current=n,g.current=c||{},ke.useImperativeHandle(m,()=>({reset(){var b;(b=h.current)==null||b.reset()},zoom(b){const R=h.current;R&&(R.camera.position.sub(R.controls.target).multiplyScalar(b).clampLength(13,80).add(R.controls.target),R.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const b=h.current;b&&(b.camera.position.set(0,29,.01),b.controls.update())}}),[]),ke.useEffect(()=>{let b=!1,R=()=>{};return(async()=>{var Lt;try{await Promise.race([((Lt=document.fonts)==null?void 0:Lt.ready)||Promise.resolve(),new Promise(ve=>setTimeout(ve,2e3))])}catch{}if(b)return;const T='"Noto Sans TC", "Microsoft JhengHei", sans-serif',S=p.current;let U;try{U=new IR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{r==null||r("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=Ro,U.outputColorSpace=mi,U.toneMapping=qp,U.toneMappingExposure=.9,S.appendChild(U.domElement),U.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const L=new fb;L.background=new Rt("#eaf0e5"),L.fog=new sm("#eaf0e5",48,90);const M=new Gi(39,1,.1,120),I=new zR(M,U.domElement);I.enableDamping=!0,I.dampingFactor=.07,I.minDistance=13,I.maxDistance=80,I.maxPolarAngle=Math.PI*.485,I.minPolarAngle=.01,I.target.set(0,0,0),I.autoRotateSpeed=.65,I.enablePan=!0;const P=()=>{M.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/M.aspect)),I.target.set(0,0,0),I.autoRotate=!1,I.update()};P(),h.current={camera:M,controls:I,reset:P},L.add(new Ub("#fff9e9","#86967e",2.4));const B=new Ib("#fff5df",3.2);B.position.set(-12,25,8),B.castShadow=!0,B.shadow.mapSize.set(2048,2048),Object.assign(B.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),B.shadow.normalBias=.04,B.shadow.bias=-2e-4,B.shadow.radius=4,L.add(B);const A=new Map,O=ve=>(A.has(ve)||A.set(ve,new Iv({color:ve,roughness:.82})),A.get(ve)),Y=new Map,k=(ve,C,y,V,q,$=0,re=0,de=0,ee=0)=>{const se=[C,y,V,ee].join(",");Y.has(se)||Y.set(se,ee?new hm(C,y,V,2,ee):new Os(C,y,V));const _e=new Un(Y.get(se),O(q));return _e.position.set($,re,de),_e.castShadow=!0,_e.receiveShadow=!0,ve.add(_e),_e},j=new um(1,14,10),ge=(ve,C,y,V,q,$,re=$,de=$)=>{const ee=new Un(j,O(C));return ee.position.set(y,V,q),ee.scale.set($,re,de),ee.castShadow=!0,ee.receiveShadow=!0,ve.add(ee),ee},me=(ve,C,y,V,q,$,re,de,ee=24)=>{const se=new Un(new Xu(C,y,V,ee),O(q));return se.position.set($,re,de),se.castShadow=!0,se.receiveShadow=!0,ve.add(se),se},ie=new Un(new fr(200,200),O("#eaf0e5"));ie.rotation.x=-Math.PI/2,ie.position.y=-.67,ie.receiveShadow=!0,L.add(ie),me(L,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),me(L,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),k(L,18.55,.65,18.55,"#405d50",0,-.03,0,.2),k(L,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),k(L,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const F=[];function X(ve,C=512,y=512){const V=document.createElement("canvas");V.width=C,V.height=y;const q=V.getContext("2d");ve(q,C,y);const $=new Mb(V);return $.colorSpace=mi,$.minFilter=Hn,$.magFilter=Hn,$.anisotropy=U.capabilities.getMaxAnisotropy(),F.push($),$}const le={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},Se=[],we=[],z=[],K=[],Me=new Map;function Oe(ve,C){const y=`${ve}:${C}`;if(!Me.has(y)){const V=X((q,$,re)=>{q.clearRect(0,0,$,re),q.fillStyle=C,q.beginPath(),q.roundRect(8,8,$-16,re-16,24),q.fill(),q.strokeStyle="#fffaf0",q.lineWidth=8,q.stroke(),q.fillStyle="#fffaf0",q.beginPath(),q.arc($/2,re/2,43,0,Math.PI*2),q.fill(),q.fillStyle="#294237",q.textAlign="center",q.textBaseline="middle",q.font="bold 72px Arial",q.fillText(String(ve+1),$/2,re/2+3)},192,144);Me.set(y,new Wy({map:V,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Me.get(y)}for(const ve of Vt){const[C,y]=xu(ve.id),V=new Ha;V.position.set(C,.44,y),L.add(V);const q=k(V,1.94,.14,1.94,"#fffaf0",0,0,0,.035);q.userData.tile=ve.id,Se.push(q),we[ve.id]=q;const $=v.current.priceIndex||1,re=(_e,Ne,Ie,De)=>{_e.fillStyle="#fcf9f0",_e.fillRect(0,0,Ne,Ie),ve.type==="property"&&(_e.fillStyle=ve.color,_e.fillRect(0,0,Ne,82)),_e.fillStyle="#294237",_e.textAlign="center",_e.font=`bold 76px ${T}`,_e.fillText(ve.name,Ne/2,ve.type==="property"?180:140),ve.type==="property"?(_e.font="60px Arial",_e.fillText(St(Math.round(ve.price*De)),Ne/2,290),_e.fillStyle="#8c998e",_e.font="26px sans-serif",_e.fillText("CITY PROPERTY",Ne/2,410)):(_e.font="bold 135px Arial",_e.fillStyle=ve.type==="chance"?"#ba9270":"#648473",_e.fillText(le[ve.type],Ne/2,320),_e.fillStyle="#728375",_e.font=`30px ${T}`,_e.fillText(ve.type==="start"?`+ ${St(Math.round(2e3*De))}`:ve.type==="tax"?"城市稅收":ve.type==="park"?"歇一會兒":ve.type==="chance"?"好運降臨":ve.type==="fund"?"城市生活":"JUST VISITING",Ne/2,420))},de=X((_e,Ne,Ie)=>re(_e,Ne,Ie,$));(ve.type==="property"||ve.type==="start")&&K.push(_e=>{const Ne=de.image.getContext("2d");re(Ne,de.image.width,de.image.height,_e),de.needsUpdate=!0});const ee=new Un(new fr(1.89,1.89),new Do({map:de,toneMapped:!1}));ee.rotation.x=-Math.PI/2,ee.rotation.z=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,ee.position.y=.076,V.add(ee);const se=new Ha;se.position.set(C,.58,y),se.rotation.y=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,L.add(se),z[ve.id]=se}for(const ve of[-4.4,4.4]){k(L,.8,.025,13,"#d3d2bb",ve,.525,0),k(L,1.15,.018,13,"#f6f1df",ve,.513,0);for(let C=-6;C<=6;C+=.75)k(L,.035,.008,.29,"#faf6e8",ve,.543,C)}for(const ve of[-3.2,3.2]){k(L,13,.025,.8,"#d3d2bb",0,.525,ve),k(L,13,.018,1.15,"#f6f1df",0,.513,ve);for(let C=-6;C<=6;C+=.75)k(L,.29,.008,.035,"#faf6e8",C,.543,ve)}function ze(ve,C,y=1){const V=new Ha;V.position.set(ve,.52,C),V.scale.setScalar(y),L.add(V),me(V,.045,.075,.55,"#94785c",0,.28,0,7),ge(V,"#8db578",0,.83,0,.29,.44,.29),ge(V,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function ae(ve,C,y,V,q,$,re=!1){const de=new Ha;de.position.set(ve,.53,C),L.add(de),k(de,y+.18,.12,V+.18,"#ede9d5",0,.06,0,.04),k(de,y,q,V,$,0,q/2+.1,0,.035),k(de,y+.1,.1,V+.1,"#fff4df",0,q+.12,0,.02);for(let ee=.45;ee<q-.1;ee+=.42){for(let se=-y/2+.22;se<y/2-.08;se+=.32)k(de,.17,.23,.018,"#6d9097",se,ee,V/2+.01),k(de,.17,.23,.018,"#6d9097",se,ee,-V/2-.01);for(let se=-V/2+.22;se<V/2-.08;se+=.32)k(de,.018,.23,.17,"#6d9097",y/2+.01,ee,se);k(de,y+.025,.045,V+.025,"#ede9d8",0,ee+.17,0)}if(k(de,.24,.36,.024,"#496d68",0,.28,V/2+.02),re){const ee=new Un(new No(y*.81,.55,4),O("#c98468"));ee.rotation.y=Math.PI/4,ee.scale.z=V/y,ee.position.y=q+.42,ee.castShadow=!0,de.add(ee)}else k(de,y*.7,.08,V*.7,"#a5b7ae",0,q+.21,0),k(de,.23,.2,.25,"#e9e4d2",y*.18,q+.34,0)}ae(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),ae(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),ae(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),ae(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),ae(5.6,-5,1.1,1.5,2.3,"#aac5bc"),ae(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),ae(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),ae(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),ae(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),ae(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),ae(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[ve,C]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])ze(ve,C,1.05);for(let ve=0;ve<24;ve++){const C=ve*Math.PI*2/24;ve%3!==0&&ze(Math.cos(C)*12.5,Math.sin(C)*12.5,.85+ve%3*.12)}k(L,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Ae=X((ve,C,y)=>{ve.clearRect(0,0,C,y),ve.textAlign="center",ve.fillStyle="#3d6850",ve.font="900 152px Arial",ve.fillText("CITY",C/2,148),ve.fillText("TYCOON",C/2,265),ve.font=`25px ${T}`,ve.fillStyle="#6d8468",ve.fillText("每一步，都是新可能。",C/2,338)},1024,420),Re=new Un(new fr(6.2,2.54),new Iv({map:Ae,transparent:!0,depthWrite:!1}));Re.rotation.x=-Math.PI/2,Re.position.set(0,.58,0),L.add(Re),me(L,.75,.82,.12,"#ede7cf",0,.59,4.3),me(L,.62,.62,.05,"#91c8ce",0,.675,4.3),me(L,.18,.28,.5,"#dfebdf",0,.95,4.3),ge(L,"#9fcfd2",0,1.3,4.3,.14),me(L,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Fe=[];for(let ve=0;ve<4;ve++){const C=new Ha;L.add(C),me(C,.26,.3,.12,qn[ve],0,.08,0),ge(C,qn[ve],0,.53,0,.23,.32,.18),ge(C,"#f1d5b0",0,1,0,.225),ge(C,qn[ve],0,1.12,-.015,.24,.14,.235),k(C,.44,.05,.15,qn[ve],0,1.1,.16,.025);for(const q of[-.09,.09])ge(C,"#273e34",q,1.015,.198,.025),k(C,.13,.2,.19,"#3c5349",q,.22,.025,.035),ge(C,"#f1d5b0",q*2.8,.51,0,.075,.15,.075);k(C,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),C.scale.setScalar(.95);const[y,V]=xu(0);C.position.set(y+(ve%2-.5)*.62,.59,V+(Math.floor(ve/2)-.5)*.62),C.traverse(q=>{q.material===O(qn[ve])&&(q.userData.playerTint=!0)}),Fe.push(C)}const st=new Un(new cm(.42,.5,40),new Do({color:"#f4c65b",side:ua}));st.rotation.x=-Math.PI/2,L.add(st);const tt=new Un(new Os(1.98,.045,1.98),new Do({color:"#edc768",transparent:!0,opacity:.6}));L.add(tt),tt.visible=!1;let Xt="",ut=Number.NaN,pt,dt=0,ht=performance.now();const It=()=>{const ve=S.clientWidth,C=S.clientHeight;U.setSize(ve,C),M.aspect=ve/C,M.updateProjectionMatrix(),P()},Ke=new ResizeObserver(It);Ke.observe(S),It();let _t;const rn=ve=>{_t=[ve.clientX,ve.clientY]},Pt=ve=>{if(!_t||Math.hypot(ve.clientX-_t[0],ve.clientY-_t[1])>6)return;const C=S.getBoundingClientRect(),y=new Bb;y.setFromCamera(new ot((ve.clientX-C.left)/C.width*2-1,-(ve.clientY-C.top)/C.height*2+1),M);const V=y.intersectObjects(Se)[0];V&&E.current(V.object.userData.tile)};S.addEventListener("pointerdown",rn),S.addEventListener("pointerup",Pt);function un(){const ve=o==null?void 0:o.current;if(!(ve!=null&&ve.size))return;const C=S.getBoundingClientRect(),y={left:12,top:72,right:C.width-12,bottom:C.height-82},V=[...S.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map($=>{const re=$.getBoundingClientRect();return{left:re.left-C.left,top:re.top-C.top,right:re.right-C.left,bottom:re.bottom-C.top}}),q=[];for(const[$,re]of[...ve.entries()].sort(([de],[ee])=>de-ee)){const de=Fe[$];if(!(re!=null&&re.isConnected)||!de||!re.offsetWidth||!re.offsetHeight)continue;const ee=de.position.clone().add(new te(0,1.45,0)).project(M),se=(ee.x*.5+.5)*C.width,_e=(-ee.y*.5+.5)*C.height,Ne=re.offsetWidth,Ie=re.offsetHeight,De={left:se-Ne/2,top:_e-Ie-20},We=[De,{left:De.left-Ne*.62-18,top:De.top},{left:De.left+Ne*.62+18,top:De.top},{left:De.left-Ne*.42-14,top:De.top-42},{left:De.left+Ne*.42+14,top:De.top-42},{left:De.left,top:De.top-58}].map(W=>({left:Math.max(y.left,Math.min(y.right-Ne,W.left)),top:Math.max(y.top,Math.min(y.bottom-Ie,W.top))}));let Ze=We[0],Xe=1/0;for(const W of We){const Le={...W,right:W.left+Ne,bottom:W.top+Ie};let xe=Math.hypot(W.left-De.left,W.top-De.top);for(const Pe of[...q,...V]){const Be=Math.max(0,Math.min(Le.right,Pe.right)-Math.max(Le.left,Pe.left)),Ce=Math.max(0,Math.min(Le.bottom,Pe.bottom)-Math.max(Le.top,Pe.top));xe+=Be*Ce*100}xe<Xe&&(Xe=xe,Ze=W)}re.style.left=`${Ze.left}px`,re.style.top=`${Ze.top}px`,re.style.setProperty("--tail-x",`${Math.max(18,Math.min(Ne-18,se-Ze.left))}px`),q.push({...Ze,right:Ze.left+Ne,bottom:Ze.top+Ie})}}function Q(){var q;pt=requestAnimationFrame(Q);const ve=performance.now(),C=Math.min((ve-ht)/1e3,.05);ht=ve,dt+=C;const y=v.current;for(let $=0;$<Fe.length;$++)Fe[$].visible=!!y.players[$]&&!y.players[$].bankrupt;for(let $=0;$<y.players.length;$++){const re=y.players[$],de=Fe[$],[ee,se]=xu(re.pos),_e=g.current[$];de.traverse(Xe=>{Xe.userData.playerTint&&(Xe.material=O(re.color||qn[$]))});const Ne=ee+($%2-.5)*.62,Ie=se+(Math.floor($/2)-.5)*.62,De=Math.hypot(Ne-de.position.x,Ie-de.position.z);de.userData.baseRotationY=Math.atan2(Ne-de.position.x,Ie-de.position.z),De>.04&&(de.position.x=Up.damp(de.position.x,Ne,13,C),de.position.z=Up.damp(de.position.z,Ie,13,C));const We=De>.04?Math.abs(Math.sin(dt*17))*.18:0,Ze=_e==="happy"?Math.abs(Math.sin(dt*10))*.1:_e==="sad"?-.1:_e==="surprised"?Math.sin(dt*12)*.045:_e==="relieved"?Math.sin(dt*5)*.025:0;de.position.y=.59+We+Ze,de.rotation.y=(de.userData.baseRotationY||0)+(_e==="proud"?Math.sin(dt*8)*.12:0),de.rotation.z=_e==="anxious"?Math.sin(dt*32)*.045:0,de.position.x+=_e==="anxious"?Math.sin(dt*34)*.035:0,de.scale.setScalar(.95*(_e==="surprised"?1+Math.max(0,Math.sin(dt*12))*.09:1)),de.visible=!re.bankrupt}if(y.priceIndex!==ut&&(ut=y.priceIndex,K.forEach($=>$(ut))),st.position.copy(Fe[y.turn].position),st.position.y=.595,st.scale.setScalar(1+Math.sin(dt*3)*.06),y.selected!==null){const[$,re]=xu(y.selected);tt.position.set($,.536,re),tt.visible=!0}else tt.visible=!1;const V=JSON.stringify([y.lots,y.players.map($=>$.color)]);if(Xt!==V){Xt=V;for(const $ of Vt){const re=z[$.id];for(;re.children.length;){const se=re.children[0];se.userData.disposableGeometry&&se.geometry.dispose(),re.remove(se)}const de=y.lots[$.id],ee=de?((q=y.players[de.owner])==null?void 0:q.color)||qn[de.owner]:null;if(we[$.id].material=O(ee||"#fffaf0"),de){k(re,.045,.72,.045,"#647568",.67,.36,.7,.01);const se=new _b(Oe(de.owner,ee));if(se.position.set(.67,.86,.7),se.scale.set(.62,.465,1),se.renderOrder=5,re.add(se),k(re,1.75,.055,.13,ee,0,0,.84,.015),de.level===5){k(re,.62,.72,.58,ee,0,.36,-.18,.04),k(re,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const _e=new Un(new No(.43,.28,4),O("#d2a451"));_e.position.set(0,.96,-.18),_e.userData.disposableGeometry=!0,_e.rotation.y=Math.PI/4,_e.castShadow=!0,re.add(_e),k(re,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const _e=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Ne=0;Ne<de.level;Ne++){const[Ie,De]=_e[Ne];k(re,.33,.32,.34,ee,Ie,.2,De,.02);const We=new Un(new No(.3,.19,4),O("#faf0d7"));We.position.set(Ie,.45,De),We.userData.disposableGeometry=!0,We.rotation.y=Math.PI/4,We.castShadow=!0,re.add(We)}}}}}I.update(),un(),U.render(L,M)}Q(),R=()=>{cancelAnimationFrame(pt),Ke.disconnect(),S.removeEventListener("pointerdown",rn),S.removeEventListener("pointerup",Pt),I.dispose();const ve=new Set,C=new Set;L.traverse(y=>{y.geometry&&ve.add(y.geometry),y.material&&C.add(y.material)}),ve.forEach(y=>y.dispose()),Y.forEach(y=>y.dispose()),C.forEach(y=>y.dispose()),A.forEach(y=>y.dispose()),Me.forEach(y=>y.dispose()),F.forEach(y=>y.dispose()),U.dispose(),U.domElement.parentNode===S&&S.removeChild(U.domElement),h.current=null}})(),()=>{b=!0,R()}},[]),_.createElement("div",{className:"board-canvas",ref:p},f)});function y3({game:a,onLoad:e}){const[n,r]=ke.useState([]),[o,c]=ke.useState(""),[f,m]=ke.useState(""),[p,h]=ke.useState(null),v=()=>{try{r(zo())}catch{m("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};ke.useEffect(()=>{v();const b=setInterval(v,6e4);return window.addEventListener("storage",v),()=>{clearInterval(b),window.removeEventListener("storage",v)}},[]);function E(b=!1){try{const R=zo();if(r(R),R.length===10&&!b){h({type:"replace"});return}r(e3(a,o,b)),c(""),h(null),m("已儲存，可保留 30 天。")}catch(R){h(null),m(`儲存失敗：${R.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function g(){try{const b=t3(p.id);e(b)}catch(b){h(null),m(b.message),v()}}return _.createElement("div",{className:"save-manager"},_.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",n.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),_.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),_.createElement("input",{id:"save-name",maxLength:60,value:o,onChange:b=>c(b.target.value),placeholder:`回合 ${a.round}`}),_.createElement("button",{className:"primary",onClick:()=>E()},"儲存目前進度"),_.createElement("p",{role:"status"},f),p?_.createElement("section",{className:"save-confirm"},_.createElement("p",null,p.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),_.createElement("button",{className:"primary",onClick:()=>p.type==="replace"?E(!0):g()},"確認",p.type==="replace"?"取代並儲存":"讀取"),_.createElement("button",{className:"secondary full",onClick:()=>h(null)},"取消")):null,!n.length&&_.createElement("p",null,"尚無手動存檔。"),n.map(b=>_.createElement("article",{className:"save-entry",key:b.id},_.createElement("div",null,_.createElement("strong",null,b.name),_.createElement("small",null,new Date(b.savedAt).toLocaleString("zh-TW")),_.createElement("small",null,"回合 ",b.game.round," · 你的總資產 ",St(dr(b.game,0))),_.createElement("small",null,"到期：",new Date(b.savedAt+lx).toLocaleString("zh-TW"))),_.createElement("button",{className:"secondary",onClick:()=>h({type:"load",id:b.id})},"讀取"))))}const x3=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,_x="city-tycoon:background-music:v1";function S3(){try{const a=JSON.parse(localStorage.getItem(_x));return{enabled:(a==null?void 0:a.enabled)===!0,volume:typeof(a==null?void 0:a.volume)=="number"&&Number.isFinite(a.volume)?Math.max(0,Math.min(100,a.volume)):50}}catch{return{enabled:!1,volume:50}}}function E3(){const[a,e]=ke.useState(S3),[n,r]=ke.useState(!1),[o,c]=ke.useState(""),f=ke.useRef(null),m=ke.useRef(0);function p(){const v=++m.current;c(""),f.current.play().catch(E=>{v===m.current&&c(E.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}ke.useEffect(()=>{const v=f.current;return v.volume=a.volume/100,a.enabled&&p(),()=>{m.current++,v.pause()}},[]),ke.useEffect(()=>{f.current.volume=a.volume/100;try{localStorage.setItem(_x,JSON.stringify(a))}catch{}},[a]);function h(){f.current.paused?(e(v=>({...v,enabled:!0})),p()):(m.current++,f.current.pause(),c(""),e(v=>({...v,enabled:!1})))}return _.createElement("div",{className:"background-music"},_.createElement("audio",{ref:f,src:x3,loop:!0,preload:"none",onPlaying:()=>r(!0),onPause:()=>r(!1),onError:()=>{r(!1),c("音樂無法載入，請重新整理")}}),_.createElement("button",{className:"music-toggle","aria-label":n?"關閉背景音樂":"開啟背景音樂","aria-pressed":n,onClick:h,title:o||"Velvet Afternoon"},_.createElement(XE,{size:16}),_.createElement("span",null,"背景音樂"),n?_.createElement(WE,{size:14}):_.createElement(YE,{size:14})),_.createElement("label",{className:"music-volume"},_.createElement("span",{className:"music-volume-label"},"音量"),_.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:a.volume,onChange:v=>e(E=>({...E,volume:Number(v.target.value)}))}),_.createElement("output",null,a.volume,"%")),o&&_.createElement("span",{className:"music-message",role:"status"},o))}function vx(a){return Number.isFinite(a)?`${a>0?"+":"−"}${St(Math.abs(a))}`:""}const M3={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function yx({message:a,player:e,anchorRefs:n,mobile:r=!1,animated:o=!0,paused:c=!1}){if(!e)return null;const f=vx(a.amountDelta),m=`emotion-${a.mood}`,p=e.color||"#61ac78";return _.createElement("div",{ref:r?void 0:h=>{n&&(h?n.current.set(e.id,h):n.current.delete(e.id))},className:`emotion-bubble ${m}${o?"":" motion-off"}${c?" is-paused":""}${r?" emotion-mobile-entry":""}`,style:{"--player":p},"aria-hidden":"true"},_.createElement("div",{className:"emotion-card"},_.createElement("div",{className:"emotion-bubble-heading"},_.createElement("span",{className:"emotion-player-dot"}),_.createElement("strong",null,e.name),_.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},a.emoji),_.createElement("span",{className:"emotion-mood-label"},a.moodLabel),_.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},M3[a.mood]),_.createElement("b",{className:"emotion-amount"},f)),_.createElement("p",null,a.message)))}function b3({event:a,players:e,anchorRefs:n,animated:r,paused:o=!1}){if(!a)return null;const c=new Map(e.map(m=>[m.id,m])),f=`${a.summary} ${a.players.map(m=>{const p=c.get(m.playerId);return`${(p==null?void 0:p.name)||"玩家"}，${m.moodLabel}，${vx(m.amountDelta)}，${m.message}`}).join(" ")}`;return _.createElement(_.Fragment,null,_.createElement("div",{className:"emotion-layer","aria-hidden":"true"},a.players.map(m=>_.createElement(yx,{key:`${a.id}-${m.playerId}`,message:m,player:c.get(m.playerId),anchorRefs:n,animated:r,paused:o}))),_.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},f))}function T3({event:a,players:e,animated:n,paused:r=!1}){if(!a)return null;const o=new Map(e.map(c=>[c.id,c]));return _.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},a.players.map(c=>_.createElement(yx,{key:`${a.id}-${c.playerId}`,message:c,player:o.get(c.playerId),mobile:!0,animated:n,paused:r})))}const rr={enter:180,fly:620,flip:720,exit:360},A3=9e3,R3=6e3,_y={proud:{label:"得意",emoji:"😎",message:"這張牌用得正是時候！"},surprised:{label:"驚訝",emoji:"😲",message:"等等，這張牌是對我的？"},happy:{label:"開心",emoji:"😊",message:"漂亮的一手牌！"},anxious:{label:"焦急",emoji:"😣",message:"局勢突然變了！"},relieved:{label:"鬆一口氣",emoji:"😮‍💨",message:"總算化解危機了。"}},C3={trap:{source:["proud","先請你進監獄休息一下。"],target:["surprised","等等，我被送進監獄了？"]},slow:{source:["proud","接下來慢慢走吧。"],target:["surprised","我的步伐被限制了！"]},teleport:{source:["proud","城市位置，照我的計畫走。"],target:["surprised","我被傳送到哪裡了？"]},"position-swap":{source:["proud","位置交換，局勢改寫！"],target:["surprised","我的位置被換走了！"]},"land-swap":{source:["proud","這筆換地交易成立。"],target:["surprised","我的街區突然易主了？！"]},birthday:{source:["happy","今天的派對由我做東！"],target:["surprised","怎麼每個人都要付錢？"]},subsidy:{source:["happy","城市補助到手！"],target:["happy","銀行送來一筆補助。"]},"rent-shield":{source:["relieved","這次租金，安全下莊。"],target:["surprised","這筆租金被護盾擋下了。"]},"rent-double":{source:["proud","這次收租翻倍！"],target:["surprised","租金怎麼變高了？"]},"get-out":{source:["relieved","終於可以離開監獄了。"],target:["happy","自由回來了！"]},redraw:{source:["proud","換一張更好的牌。"],target:["surprised","牌堆又有新變化。"]}};function vy({player:a,role:e,preview:n}){if(!a||!n)return null;const[r,o]=n,c=_y[r]||_y.surprised;return _.createElement("article",{className:`skill-sequence-emotion ${e}`,style:{"--player":a.color}},_.createElement("div",{className:"skill-sequence-emotion-heading"},_.createElement("span",{className:"skill-sequence-emotion-dot"}),_.createElement("strong",null,a.name),_.createElement("span",null,c.emoji),_.createElement("small",null,c.label)),_.createElement("p",null,o))}function yy({player:a,role:e,label:n}){return a?_.createElement("div",{className:`skill-sequence-player ${e}`,style:{"--player":a.color}},_.createElement("div",{className:"skill-sequence-avatar"},_.createElement("span",null),_.createElement("i",null)),_.createElement("strong",null,a.name),_.createElement("small",null,n)):_.createElement("div",{className:`skill-sequence-player ${e} is-bank`},_.createElement("span",{className:"skill-sequence-player-icon"},"✦"),_.createElement("small",null,n))}function w3({sequence:a,players:e,animated:n=!0,onComplete:r}){const[o,c]=ke.useState("enter"),f=ke.useRef(r);f.current=r;const p=(a==null?void 0:a.sourceId)===0||(a==null?void 0:a.targetId)===0?A3:R3;if(ke.useEffect(()=>{var S;if(!a)return;if(!n){(S=f.current)==null||S.call(f);return}c("enter");const R=rr.enter+rr.fly+rr.flip,T=[["fly",rr.enter],["flip",rr.enter+rr.fly],["emotion",R],["exit",R+p]].map(([U,L])=>setTimeout(()=>c(U),L));return T.push(setTimeout(()=>{var U;return(U=f.current)==null?void 0:U.call(f)},R+p+rr.exit)),()=>T.forEach(clearTimeout)},[a==null?void 0:a.id,n,p]),!a)return null;const h=e.find(R=>R.id===a.sourceId),v=e.find(R=>R.id===a.targetId)||null,E=C3[a.card.id]||{source:["proud","技能卡啟動！"],target:["surprised","局勢突然變了！"]},g=a.card.id==="birthday"?"其他玩家":(v==null?void 0:v.name)||"城市銀行",b=v||{id:"bank",name:g,color:"#c49b42"};return _.createElement("section",{className:`skill-sequence-layer skill-${a.card.type}`,"data-phase":o,role:"dialog","aria-modal":"true","aria-label":`${a.card.name}動畫`},_.createElement("div",{className:"skill-sequence-backdrop"}),_.createElement("div",{className:"skill-sequence-canvas"},_.createElement("button",{type:"button",className:"skill-sequence-close","aria-label":"關閉技能動畫",title:"關閉並立即執行技能",onClick:()=>{var R;return(R=f.current)==null?void 0:R.call(f)}},_.createElement(Gu,{size:18})),_.createElement("div",{className:"skill-sequence-kicker"},_.createElement("span",null),"技能卡啟動 ",_.createElement("small",null,a.card.name)),_.createElement("div",{className:"skill-sequence-stage"},_.createElement(yy,{player:h,role:"source",label:"使用者"}),_.createElement("div",{className:"skill-sequence-route"},_.createElement("i",null),_.createElement("i",null),_.createElement("i",null)),_.createElement("div",{className:"skill-sequence-card-stage"},_.createElement("div",{className:"skill-sequence-card card-back"},_.createElement("span",null,"城市大亨"),_.createElement("small",null,"SKILL CARD")),_.createElement("div",{className:"skill-sequence-card card-front"},_.createElement("span",{className:"skill-sequence-card-icon"},a.card.icon),_.createElement("strong",null,a.card.name),_.createElement("p",null,a.card.summary),_.createElement("small",null,o==="emotion"?"效果準備生效":"技能卡"))),_.createElement(yy,{player:b.id==="bank"?null:b,role:"target",label:g})),_.createElement("div",{className:"skill-sequence-caption"},_.createElement("strong",null,a.card.name),_.createElement("span",null,o==="emotion"?"情緒回應中":o==="exit"?"準備套用效果":"卡片正在傳遞")),_.createElement("div",{className:"skill-sequence-emotions"},_.createElement(vy,{player:h,role:"source",preview:E.source}),_.createElement(vy,{player:b.id==="bank"?null:b,role:"target",preview:E.target}))))}function D3({value:a,rolling:e}){const n={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return _.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${a} 點`},Array.from({length:9},(r,o)=>_.createElement("i",{key:o,className:n[a].includes(o+1)?"pip":""})))}function Fu(a){return(a==null?void 0:a.color)||qn[(a==null?void 0:a.id)||0]}function Hu({id:a,small:e=!1,player:n}){return _.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Fu(n||{id:a})}},_.createElement("span",{className:"avatar-head"}),_.createElement("span",{className:"avatar-body"}),_.createElement("span",{className:"avatar-cap"}),_.createElement("span",{className:"owner-number"},a+1))}function xx({player:a}){const e=[];return a.jail&&e.push(_.createElement("span",{key:"jail",className:"status-badge jail"},"監獄")),a.slowTurns&&e.push(_.createElement("span",{key:"slow",className:"status-badge slow"},"龜速 ",a.slowTurns)),a.rentShield&&e.push(_.createElement("span",{key:"shield",className:"status-badge shield"},"免租")),a.rentMultiplier===2&&e.push(_.createElement("span",{key:"double",className:"status-badge double"},"收租×2")),e.length?_.createElement("div",{className:"player-status-badges"},e):null}function N3({game:a}){const e=Is(a);return _.createElement("section",{className:"building-inventory","aria-label":"建築物剩餘數量"},_.createElement("div",{className:"building-inventory-heading"},_.createElement("strong",null,"建築物庫存"),_.createElement("span",null,a.limitBuildings?"有限量":"不限量")),a.limitBuildings?_.createElement("div",{className:"building-inventory-values"},_.createElement("span",null,_.createElement("b",null,e.houses),_.createElement("small",null,"房屋可購買")),_.createElement("span",null,_.createElement("b",null,e.hotels),_.createElement("small",null,"旅館可購買"))):_.createElement("p",null,"房屋與旅館皆不受銀行數量限制。"))}function U3({game:a,playerId:e,onClose:n,onSelectPlayer:r}){const o=ke.useRef(),[c,f]=ke.useState("overview"),m=a.players.find(g=>g.id===e)||a.players[0],p=m?oa(a,m.id):[],h=((m==null?void 0:m.skillHand)||[]).map(g=>Cs.find(b=>b.id===g)).filter(Boolean);if(ke.useEffect(()=>{var R;f("overview");const g=document.activeElement;(R=o.current)==null||R.focus();const b=N=>{N.key==="Escape"&&n()};return document.addEventListener("keydown",b),()=>{var N;document.removeEventListener("keydown",b),(N=g==null?void 0:g.focus)==null||N.call(g)}},[e]),!m)return null;const v=p.length?p.map(g=>_.createElement("div",{className:"status-property-row",key:g.id},_.createElement("i",{style:{background:g.color}}),_.createElement("span",null,_.createElement("strong",null,g.name),_.createElement("small",null,Sx(a.lots[g.id].level)," · 租金 ",St(zu(a,g)))))):_.createElement("p",{className:"status-empty"},"目前還沒有持有土地。"),E=m.human?h.length?h.map(g=>_.createElement("div",{className:"status-card-row",key:g.id},_.createElement("span",{className:`skill-card-icon skill-${g.type}`},g.icon),_.createElement("span",null,_.createElement("strong",null,g.name),_.createElement("small",null,g.summary)))):_.createElement("p",{className:"status-empty"},"目前沒有持有技能卡。"):_.createElement("p",{className:"status-empty"},"電腦玩家持有 ",h.length," 張技能卡，不公開卡面。");return _.createElement("div",{className:"player-status-backdrop",onMouseDown:g=>{g.target===g.currentTarget&&n()}},_.createElement("aside",{className:"player-status-drawer",role:"dialog","aria-modal":"true","aria-label":"玩家狀態"},_.createElement("div",{className:"status-drawer-heading"},_.createElement("h2",null,"玩家狀態"),_.createElement("button",{ref:o,className:"icon-button","aria-label":"關閉玩家狀態",onClick:n},_.createElement(Gu,{size:22}))),_.createElement("div",{className:"status-player-selectors",role:"tablist","aria-label":"選擇玩家"},a.players.map(g=>_.createElement("button",{key:g.id,type:"button",role:"tab","aria-selected":g.id===m.id,className:g.id===m.id?"active":"",style:{"--player":Fu(g)},onClick:()=>r(g.id)},_.createElement(Hu,{id:g.id,player:g,small:!0}),_.createElement("span",null,g.name)))),_.createElement("section",{className:"status-summary"},_.createElement(Hu,{id:m.id,player:m}),_.createElement("div",{className:"status-summary-player"},_.createElement("strong",null,m.name),_.createElement("small",null,m.bankrupt?"已破產":`${p.length} 塊地產`),_.createElement(xx,{player:m})),_.createElement("div",null,_.createElement("span",null,"現金"),_.createElement("b",null,St(m.cash))),_.createElement("div",null,_.createElement("span",null,"總資產"),_.createElement("b",null,St(dr(a,m.id))))),_.createElement("div",{className:"status-tabs",role:"tablist","aria-label":"玩家資訊分類"},_.createElement("button",{type:"button",role:"tab","aria-selected":c==="overview",className:c==="overview"?"active":"",onClick:()=>f("overview")},"總覽"),_.createElement("button",{type:"button",role:"tab","aria-selected":c==="properties",className:c==="properties"?"active":"",onClick:()=>f("properties")},"土地 ",_.createElement("span",null,p.length)),_.createElement("button",{type:"button",role:"tab","aria-selected":c==="cards",className:c==="cards"?"active":"",onClick:()=>f("cards")},"卡片 ",_.createElement("span",null,m.human?`${h.length} / 3`:`${h.length} 張`))),_.createElement("div",{className:"status-drawer-content"},c==="overview"?_.createElement(_.Fragment,null,_.createElement("section",{className:"status-section"},_.createElement("div",{className:"status-section-heading"},_.createElement("h3",null,_.createElement(pl,{size:17}),"持有土地"),_.createElement("button",{type:"button",onClick:()=>f("properties")},"查看全部 ",_.createElement(Ru,{size:14}))),_.createElement("div",{className:"status-property-grid"},v)),_.createElement("section",{className:"status-section"},_.createElement("div",{className:"status-section-heading"},_.createElement("h3",null,_.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),_.createElement("button",{type:"button",onClick:()=>f("cards")},"查看全部 ",_.createElement(Ru,{size:14}))),_.createElement("div",{className:"status-card-list"},E))):c==="properties"?_.createElement("section",{className:"status-section"},_.createElement("div",{className:"status-section-heading"},_.createElement("h3",null,_.createElement(pl,{size:17}),"持有土地 ",_.createElement("span",null,p.length))),_.createElement("div",{className:"status-property-list"},v)):_.createElement("section",{className:"status-section"},_.createElement("div",{className:"status-section-heading"},_.createElement("h3",null,_.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),_.createElement("span",null,m.human?`${h.length} / 3`:`${h.length} 張`)),_.createElement("div",{className:"status-card-list"},E))),_.createElement("div",{className:"status-drawer-footer"},_.createElement("button",{type:"button",className:"secondary",onClick:n},"關閉"))))}function L3({card:a,count:e,disabled:n,selected:r,onClick:o}){return _.createElement("button",{type:"button",className:`skill-card-tile skill-${a.type}${r?" selected":""}`,onClick:o,"aria-disabled":n,"aria-pressed":r,"aria-label":`${a.name}：${a.summary}`},_.createElement("span",{className:"skill-card-icon","aria-hidden":"true"},a.icon),_.createElement("span",{className:"skill-card-copy"},_.createElement("strong",null,a.name),_.createElement("small",null,a.summary)),e>1&&_.createElement("b",{className:"skill-card-count"},e))}function Sx(a){return a===5?"旅館":a?`${a} 間房屋`:"未開發地產"}function O3(a){return a===5?"旅館":"房屋 "+(a||0)+" / 4"}function I3(a,e,n){if(a.limitBuildings===!1)return n.level===5?"這塊土地已有旅館。":n.level===4?"你剛走到這塊土地，可以升級為旅館。":"你剛走到這塊土地，可以加蓋一間房屋。";if(a.selected!==e.id||a.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(a.buildUsed)return"本次落地已完成建造。";if(n.level===5)return"這塊土地已有旅館。";const r=Is(a);return n.level===4?r.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":r.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function P3(a,e,n){return n.level===5?"已達最高等級":a.buildUsed&&a.selected===e.id?"本次落地已建造":n.level===4?`升級旅館 · ${St(Ml(e,a))}`:`建造房屋 · ${St(Ml(e,a))}`}function ul({title:a,onClose:e,children:n,wide:r=!1}){const o=ke.useRef();return ke.useEffect(()=>{var m;const c=document.activeElement;(m=o.current)==null||m.focus();function f(p){if(p.key==="Escape"&&(e==null||e()),p.key==="Tab"){const h=[...o.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!h.length){p.preventDefault();return}p.shiftKey&&document.activeElement===h[0]?(p.preventDefault(),h.at(-1).focus()):!p.shiftKey&&document.activeElement===h.at(-1)&&(p.preventDefault(),h[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),_.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},_.createElement("section",{ref:o,tabIndex:-1,className:"modal "+(r?"wide":""),role:"dialog","aria-modal":"true","aria-label":a},_.createElement("div",{className:"modal-heading"},_.createElement("h2",null,a),e&&_.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},_.createElement(Gu,{size:20}))),n))}function z3({setup:a,setSetup:e,newGameMaxRounds:n,onStart:r,onClose:o}){return _.createElement(ul,{title:"開啟一段全新的城市故事",onClose:o},_.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),_.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),_.createElement("label",{className:"setup-count"},"玩家人數 ",_.createElement("select",{value:a.count,onChange:c=>e(f=>({...f,count:Number(c.target.value)}))},[2,3,4].map(c=>_.createElement("option",{key:c,value:c},c," 人")))),_.createElement("label",{className:"setup-count"},"最多回合 ",_.createElement("select",{"aria-label":"最多回合",value:a.roundOption,onChange:c=>e(f=>({...f,roundOption:c.target.value}))},_.createElement("option",{value:"40"},"40 回合"),_.createElement("option",{value:"80"},"80 回合"),_.createElement("option",{value:"custom"},"自訂"),_.createElement("option",{value:"unlimited"},"無限制"))),_.createElement("label",{className:"setup-count"},"初始通膨率 ",_.createElement("select",{"aria-label":"初始通膨率",value:a.inflationRate,onChange:c=>e(f=>({...f,inflationRate:Number(c.target.value)}))},Array.from({length:ox+1},(c,f)=>_.createElement("option",{key:f,value:f},f,"%")))),_.createElement("label",{className:"setup-count"},"建築數量限制 ",_.createElement("select",{"aria-label":"建築數量限制",value:a.limitBuildings?"limited":"unlimited",onChange:c=>e(f=>({...f,limitBuildings:c.target.value==="limited"}))},_.createElement("option",{value:"limited"},"限制（房屋 32、旅館 12）"),_.createElement("option",{value:"unlimited"},"不限數量"))),a.roundOption==="custom"&&_.createElement("label",{className:"round-limit-custom"},"自訂回合數",_.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:a.customRounds,onChange:c=>e(f=>({...f,customRounds:c.target.value}))})),_.createElement("div",{className:"player-setup"},a.players.slice(0,a.count).map((c,f)=>_.createElement("div",{className:"player-setup-row",key:f},_.createElement("input",{"aria-label":`玩家 ${f+1} 名稱`,value:c.name,onChange:m=>e(p=>({...p,players:p.players.map((h,v)=>v===f?{...h,name:m.target.value}:h)}))}),_.createElement("input",{"aria-label":`玩家 ${f+1} 顏色`,type:"color",value:c.color,onChange:m=>e(p=>({...p,players:p.players.map((h,v)=>v===f?{...h,color:m.target.value}:h)}))}),_.createElement("select",{value:c.human?"human":"ai",onChange:m=>e(p=>({...p,players:p.players.map((h,v)=>v===f?{...h,human:m.target.value==="human"}:h)}))},_.createElement("option",{value:"human"},"真人"),_.createElement("option",{value:"ai"},"電腦"))))),_.createElement("button",{className:"primary",disabled:a.roundOption==="custom"&&!n,onClick:r},_.createElement(Wp,{size:18}),"開始新遊戲"),_.createElement("button",{className:"secondary full",onClick:o},"返回"))}function B3({hasContinue:a,onNewGame:e,onContinue:n}){return _.createElement("main",{className:"home-screen"},_.createElement("div",{className:"home-topline"},_.createElement("span",{className:"live-dot"}),"城市大亨 ",_.createElement("span",null,"/")," 一座城市，從第一步開始"),_.createElement("section",{className:"home-content"},_.createElement("div",{className:"home-copy"},_.createElement("div",{className:"home-brand-mark"},_.createElement(Gh,{size:29,strokeWidth:1.7}),_.createElement("span",null,"CITY TYCOON")),_.createElement("h1",null,"城市大亨"),_.createElement("p",null,"玩一場，擁有一座城。"),_.createElement("div",{className:"home-rule"}),_.createElement("small",null,"買下街區、管理資產，讓每一次擲骰都成為城市故事。")),_.createElement("div",{className:"home-city-scene","aria-label":"微縮城市棋盤意象"},_.createElement("img",{className:"home-city-board-image",src:"./home-city-board.png",alt:"立體微縮城市棋盤與彩色棋子"})),_.createElement("aside",{className:"home-actions"},_.createElement("div",{className:"home-actions-heading"},_.createElement("span",null,"準備好出發了嗎？"),_.createElement("small",null,"你的城市，等你來決定下一步。")),_.createElement("button",{className:"home-action primary",onClick:e},_.createElement(Wp,{size:20}),"開始新遊戲",_.createElement(fl,{size:17})),_.createElement("button",{className:"home-action secondary",disabled:!a,onClick:n},_.createElement(by,{size:19}),"繼續進度",_.createElement(fl,{size:17})),_.createElement("p",{className:"home-save-status"},_.createElement("span",{className:a?"is-ready":""}),a?"已找到這個瀏覽器的自動存檔":"目前沒有可繼續的進度"))),_.createElement("footer",{className:"home-footer"},_.createElement("span",null,"自動儲存 · 僅此瀏覽器可用"),_.createElement("span",null,"一起，把城市變成你的故事。")))}const Vp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Vp.splice(0,Vp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function F3(a){if(a.roundOption==="unlimited")return null;if(a.roundOption==="custom"){const e=Number(a.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(a.roundOption)}const xy="city-tycoon:activity-visible:v1",Ex="city-tycoon:glass-opacity:v1",Mx="city-tycoon:emotion-animation:v1",bx="city-tycoon:skill-animation:v1",Hh=72,Tx=a=>Math.min(95,Math.max(5,Number(a)));function H3(){try{const a=localStorage.getItem(Ex);if(a===null)return Hh;const e=Number(a);return Number.isFinite(e)?Tx(e):Hh}catch{return Hh}}function k3(){try{return localStorage.getItem(Mx)!=="false"}catch{return!0}}function G3(){try{return localStorage.getItem(bx)!=="false"}catch{return!0}}function Sy({entries:a}){return a.map((e,n)=>_.createElement("div",{className:"activity-item",key:n},_.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?_.createElement(pl,{size:16}):e.kind==="dice"?_.createElement(My,{size:16}):e.kind==="tax"?_.createElement(GE,{size:16}):_.createElement(kh,{size:16})),_.createElement("p",null,e.text,_.createElement("small",null,n===0?"剛剛":"本局紀錄"))))}function V3(){var qa,Za,_a,_i,vn,Tn;const[a,e]=ke.useState("home"),[n,r]=ke.useState(()=>{try{return gy()}catch{return null}}),[o,c]=ke.useState(()=>{try{return localStorage.getItem(xy)!=="false"}catch{return!0}}),[f,m]=ke.useState(H3),[p,h]=ke.useState(k3),[v,E]=ke.useState(G3),[g,b]=ke.useState(!1),[R,N]=ke.useState(()=>{var H;return typeof window<"u"&&((H=window.matchMedia)==null?void 0:H.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[T,S]=ke.useState([]),[U,L]=ke.useState(null),[M,I]=ke.useReducer(_3,void 0,dx),P=ke.useRef(new Map),B=ke.useRef(0),A=ke.useRef(""),O=ke.useRef(!1),Y=T[0]||null,k=Y&&p&&!R?Object.fromEntries(Y.players.map(H=>[H.playerId,H.mood])):{},j=ke.useRef();ke.useEffect(()=>{try{localStorage.setItem(xy,String(o))}catch{}},[o]),ke.useEffect(()=>{try{localStorage.setItem(Mx,String(p))}catch{}},[p]),ke.useEffect(()=>{try{localStorage.setItem(bx,String(v))}catch{}},[v]),ke.useEffect(()=>{var it,Ot;const H=(it=window.matchMedia)==null?void 0:it.call(window,"(prefers-reduced-motion: reduce)");if(!H)return;const Ue=Wt=>N(Wt.matches);return(Ot=H.addEventListener)==null||Ot.call(H,"change",Ue),()=>{var Wt;return(Wt=H.removeEventListener)==null?void 0:Wt.call(H,"change",Ue)}},[]),ke.useEffect(()=>{const H=(M.emotionHistory||M.emotionEvents||[]).filter(it=>it.id>B.current);if(!H.length){O.current=!1;return}B.current=Math.max(B.current,...H.map(it=>it.id));const Ue=H.filter(it=>{var Ot;return!(O.current&&((Ot=it.category)!=null&&Ot.startsWith("skill")))});Ue.length&&S(it=>[...it,...Ue].sort((Ot,Wt)=>Wt.priority-Ot.priority||Ot.id-Wt.id).slice(0,3)),O.current=!1},[M.emotionEvents]),ke.useEffect(()=>{if(!Y||U||M.stage==="moving"&&Y.priority<90)return;const H=Y.id,Ue=setTimeout(()=>S(it=>{var Ot;return((Ot=it[0])==null?void 0:Ot.id)===H?it.slice(1):it.filter(Wt=>Wt.id!==H)}),2400);return()=>clearTimeout(Ue)},[Y==null?void 0:Y.id,M.stage,U]),ke.useEffect(()=>{const H=M.log[0];if((H==null?void 0:H.kind)!=="skill"){A.current=(H==null?void 0:H.text)||"";return}if(H.text===A.current||(A.current=H.text,!v||R))return;b(!0);const Ue=setTimeout(()=>b(!1),720);return()=>clearTimeout(Ue)},[M.log,v,R]);const ge=H=>{const Ue=Tx(Number(H.currentTarget.value));m(Ue);try{localStorage.setItem(Ex,String(Ue))}catch{}},[me,ie]=ke.useState(null),[F,X]=ke.useState("players"),[le,Se]=ke.useState(null),[we,z]=ke.useState(null),[K,Me]=ke.useState(null),[Oe,ze]=ke.useState(null),[ae,Ae]=ke.useState(!1),[Re,Fe]=ke.useState(!1),[st,tt]=ke.useState(""),[Xt,ut]=ke.useState(!1),[pt,dt]=ke.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:pm,limitBuildings:!0,players:[{name:"你",color:qn[0],human:!0},{name:"艾米",color:qn[1],human:!1},{name:"小傑",color:qn[2],human:!1},{name:"喵喵",color:qn[3],human:!1}]}),ht=ke.useRef(),It=ke.useRef(),Ke=M.players[M.turn],_t=!!(Ke!=null&&Ke.human)&&!(Ke!=null&&Ke.bankrupt),rn=_t&&["ready","end"].includes(M.stage),Pt=()=>{I({type:"ROLL",dice:Array.from({length:Ke.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})},un=()=>{if(!Ke||Ke.skillUsedThisTurn||M.pendingSkill||M.skillOverflow)return null;const H=M.players.filter(ln=>ln.id!==Ke.id&&!ln.bankrupt),Ue=H[0],it=oa(M,Ke.id),Ot=Vt.find(ln=>{var ii,Ni;return ln.type==="property"&&((ii=M.lots[ln.id])==null?void 0:ii.owner)!==void 0&&M.lots[ln.id].owner!==Ke.id&&!((Ni=M.players[M.lots[ln.id].owner])!=null&&Ni.bankrupt)}),Wt=Ke.skillHand,yn=ln=>Wt.includes(ln);if(Ke.cash<7e3&&yn("subsidy"))return{type:"USE_SKILL_CARD",cardId:"subsidy"};if(Ke.cash<9e3&&yn("rent-shield"))return{type:"USE_SKILL_CARD",cardId:"rent-shield"};if(Ke.jail&&yn("get-out"))return{type:"USE_SKILL_CARD",cardId:"get-out"};if(H.length&&yn("slow"))return{type:"USE_SKILL_CARD",cardId:"slow",targetId:Ue.id};if(H.length&&yn("trap"))return{type:"USE_SKILL_CARD",cardId:"trap",targetId:Ue.id};if(H.length&&yn("teleport")){const ln=Fh.find(ii=>ii!==Ue.pos&&Vt[ii].type==="property")??0;return{type:"USE_SKILL_CARD",cardId:"teleport",targetId:Ue.id,targetPosition:ln}}return H.length&&yn("position-swap")?{type:"USE_SKILL_CARD",cardId:"position-swap",targetId:Ue.id}:it.length&&yn("rent-double")?{type:"USE_SKILL_CARD",cardId:"rent-double"}:it.length&&Ot&&yn("land-swap")?{type:"USE_SKILL_CARD",cardId:"land-swap",ownLotId:it[0].id,targetLotId:Ot.id}:yn("birthday")&&H.length?{type:"USE_SKILL_CARD",cardId:"birthday"}:null};ke.useEffect(()=>{try{zo()}catch{ut(!0)}},[]),ke.useEffect(()=>{if(!(a!=="game"||M.stage==="moving"))try{Bp(M),ut(!1)}catch{ut(!0)}},[M,a]),ke.useEffect(()=>{if(M.stage==="moving"&&U!=="saves"){const H=setTimeout(()=>I({type:"STEP"}),330);return()=>clearTimeout(H)}},[M,U]),ke.useEffect(()=>{const H=M.selected,Ue=H===null?null:Vt[H],it=H===null?null:M.lots[H],Ot=_t&&M.stage==="decision"&&(Ue==null?void 0:Ue.type)==="property"&&!it,Wt=_t&&M.stage==="end"&&M.buildAvailable&&(it==null?void 0:it.owner)===M.turn;(Ot||Wt)&&(ie(H),L("property"))},[M,_t]),ke.useEffect(()=>{if(a!=="game"||_t||M.stage==="finished"||M.pendingSkill||Oe||U==="new"||U==="rules"||U==="saves")return;const H=setTimeout(()=>{if(M.stage==="ready"){const Ue=un();Ue?en(Ue):Pt()}else if(M.stage==="decision")I({type:Ke.cash>hl(M,Vt[Ke.pos])+Zn(M,1800)?"BUY":"SKIP"});else if(M.stage==="end"){const Ue=oa(M,M.turn).find(it=>Fp(M,it.id)&&Ke.cash>Ml(it,M)+Zn(M,2500));I(Ue?{type:"BUILD",id:Ue.id}:{type:"NEXT"})}},M.stage==="decision"?1300:1100);return()=>clearTimeout(H)},[M,_t,U,a,Oe]),ke.useEffect(()=>{var Wt;const H=M.skillOverflow;if(!H)return;const Ue=M.players[H.playerId];if(Ue!=null&&Ue.human||!((Wt=Ue==null?void 0:Ue.skillHand)!=null&&Wt.length))return;const it=Ue.skillHand.at(-1),Ot=setTimeout(()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:it}),350);return()=>clearTimeout(Ot)},[(qa=M.skillOverflow)==null?void 0:qa.playerId,M.players,M.skillOverflow]),ke.useEffect(()=>{const H=M.pendingSkill;if(!H)return;const Ue=M.players[H.targetId];if(Ue!=null&&Ue.human)return;const it=Ue!=null&&Ue.skillHand.includes("counter")?"counter":Ue!=null&&Ue.skillHand.includes("reflect")?"reflect":"pass",Ot=setTimeout(()=>I({type:"RESPOND_SKILL",playerId:H.targetId,response:it}),520);return()=>clearTimeout(Ot)},[(Za=M.pendingSkill)==null?void 0:Za.sourceId,(_a=M.pendingSkill)==null?void 0:_a.targetId,(_i=M.pendingSkill)==null?void 0:_i.cardId,M.players]),ke.useEffect(()=>{if(!(!ae||!It.current))try{const H=It.current,Ue=H.createOscillator(),it=H.createGain();Ue.connect(it),it.connect(H.destination),Ue.type="sine",Ue.frequency.setValueAtTime(M.stage==="moving"?380:620,H.currentTime),it.gain.setValueAtTime(.035,H.currentTime),it.gain.exponentialRampToValueAtTime(.001,H.currentTime+.13),Ue.start(),Ue.stop(H.currentTime+.15)}catch{}},[M.remaining,M.stage,ae]);const Q=()=>{if(!ae){const H=window.AudioContext||window.webkitAudioContext;H&&(It.current||(It.current=new H),It.current.resume())}Ae(!ae)},Lt=H=>{ie(H),L("property")},ve=F3(pt),C=()=>L("new"),y=()=>{L(null);try{r(gy())}catch{r(null)}e("home")},V=()=>{var H;pt.roundOption==="custom"&&!ve||(S([]),B.current=0,I({type:"NEW",config:{...pt,maxRounds:ve,inflationRate:Number(pt.inflationRate)}}),e("game"),L(null),Se(null),X("players"),(H=ht.current)==null||H.reset(),Fe(!1))},q=()=>{n&&(S([]),B.current=0,I({type:"LOAD",game:n}),e("game"),L(null),ie(null),Se(null),X("players"))},$=U==="new"?_.createElement(z3,{setup:pt,setSetup:dt,newGameMaxRounds:ve,onStart:V,onClose:()=>L(null)}):null;if(a==="home")return _.createElement("div",{className:"app-shell home-shell"},_.createElement(B3,{hasContinue:!!n,onNewGame:C,onContinue:q}),$);const re=me!==null?Vt[me]:null,de=re?M.lots[re.id]:null,ee=Vt[Ke.pos],se=!!re&&re.type==="property"&&!de&&M.stage==="decision"&&_t&&ee.id===re.id,_e=((Ke==null?void 0:Ke.skillHand)||[]).map(H=>Cs.find(Ue=>Ue.id===H)).filter(Boolean),Ne=_e.reduce((H,Ue)=>({...H,[Ue.id]:(H[Ue.id]||0)+1}),{}),Ie=M.players.filter(H=>H.id!==(Ke==null?void 0:Ke.id)&&!H.bankrupt),De=Ke&&!Ke.bankrupt?[Ke,...Ie]:Ie,We=oa(M,M.turn),Ze=Vt.filter(H=>{var Ue;return H.type==="property"&&M.lots[H.id]&&M.lots[H.id].owner!==M.turn&&!((Ue=M.players[M.lots[H.id].owner])!=null&&Ue.bankrupt)}),Xe=Cs.find(H=>H.id===we)||null,W=M.skillOverflow?M.players[M.skillOverflow.playerId]:null,Le=M.pendingSkill?M.players[M.pendingSkill.targetId]:null,xe=M.pendingSkill?M.players[M.pendingSkill.sourceId]:null,Pe=_t&&M.stage==="ready"&&!M.skillOverflow&&!M.pendingSkill&&!M.skillUsedThisTurn&&!Oe,Be=H=>!Pe||H.timing!=="active"||!Hp.has(H.id)||H.id==="get-out"&&!Ke.jail,Ce=H=>{var Ue;return!(W!=null&&W.human)||((Ue=M.skillOverflow)==null?void 0:Ue.playerId)!==M.turn||M.pendingSkill||Oe||Ke.skillUsedThisTurn||H.timing!=="active"||!Hp.has(H.id)||H.id==="get-out"&&!Ke.jail||H.target==="player"&&H.id!=="slow"&&!Ie.length||H.target==="land"&&(!We.length||!Ze.length)},Je=H=>(H==null?void 0:H.id)==="slow"?De:Ie,qe=H=>{O.current=!0,I({type:"USE_SKILL_CARD",...H}),ze(null)},en=H=>{var Ot,Wt;const Ue=Cs.find(yn=>yn.id===H.cardId);if(!Ue)return;if(!v||R){qe(H);return}let it=H.targetId;it===void 0&&H.targetLotId!==void 0&&(it=(Ot=M.lots[H.targetLotId])==null?void 0:Ot.owner),it===void 0&&Ue.target==="player"&&(it=(Wt=Ie[0])==null?void 0:Wt.id),ze({id:`${Date.now()}-${H.cardId}`,action:H,card:Ue,sourceId:M.turn,targetId:it??null})},zt=(H,Ue=!1)=>{var Ot,Wt;if(Ue?Ce(H):Be(H))return;const it=Ue?{overflowUse:!0}:{};if(z(H.id),H.target==="player"){const yn=Je(H),ln=yn[0];Me({cardId:H.id,targetId:(ln==null?void 0:ln.id)??"",...H.id==="teleport"?{targetPosition:(ln==null?void 0:ln.pos)??0}:{},...it});return}if(H.target==="land"){Me({cardId:H.id,ownLotId:((Ot=We[0])==null?void 0:Ot.id)??"",targetLotId:((Wt=Ze[0])==null?void 0:Wt.id)??"",...it});return}en({cardId:H.id,...it}),z(null)},ti=H=>{z(H.id),Me(null)},ni=()=>{Xe&&zt(Xe)},zs=()=>{if(!K)return;const H={...K};Me(null),z(null),en(H)};return _.createElement("div",{className:"app-shell"},_.createElement("header",{className:"header"},_.createElement("button",{className:"brand",onClick:y,"aria-label":"城市大亨首頁"},_.createElement("span",{className:"brand-icon"},_.createElement(Gh,{size:33,strokeWidth:1.8})),_.createElement("span",null,_.createElement("strong",null,"城市大亨"),_.createElement("small",null,"CITY TYCOON"))),_.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),_.createElement("nav",null,_.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>L("rules")},_.createElement(ov,{size:18}),_.createElement("span",null,"遊戲規則")),_.createElement("span",{className:"nav-divider"}),_.createElement("button",{className:"outline-button",onClick:C},_.createElement(Wp,{size:18}),_.createElement("span",null,"新遊戲")))),_.createElement("button",{className:"save-launch secondary",onClick:()=>L("saves")},"儲存／讀取"),U==="saves"&&_.createElement(ul,{title:"存檔管理",wide:!0,onClose:()=>L(null)},_.createElement(y3,{game:M,onLoad:H=>{S([]),B.current=0,I({type:"LOAD",game:H});try{Bp(H),ut(!1)}catch{ut(!0)}ie(null),X("players"),L(null)}})),_.createElement("main",{className:"game-layout"},_.createElement("section",{className:"world","aria-label":"遊戲棋盤"},_.createElement(v3,{game:M,emotionAnchorRefs:P,emotionMoods:k,onSelect:Lt,onError:tt,ref:ht},_.createElement(b3,{event:Y,players:M.players,anchorRefs:P,animated:p&&!R,paused:M.stage==="moving"||U!==null}),_.createElement(w3,{sequence:Oe,players:M.players,animated:v&&!R,onComplete:()=>Oe&&qe(Oe.action)})),_.createElement("div",{className:"world-heading"},_.createElement("span",{className:"live-dot"}),"經典城市 ",_.createElement("span",{className:"world-heading-divider"},"/"),_.createElement("span",null,M.players.length," 人對局"),_.createElement("button",{ref:j,className:"activity-toggle","aria-expanded":o,"aria-controls":"glass-city-activity",onClick:()=>c(H=>!H)},_.createElement(ov,{size:16}),"城市動態",_.createElement("span",null,o?"收起":"展開"))),_.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-f/100},"aria-labelledby":"glass-activity-title",hidden:!o},_.createElement("div",{className:"glass-activity-heading"},_.createElement("h2",{id:"glass-activity-title"},"城市動態"),_.createElement("label",{className:"glass-opacity-control"},_.createElement("span",null,"透明度"),_.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:f,"aria-label":"玻璃面板透明度",onChange:H=>m(Number(H.target.value)),onPointerUp:ge,onBlur:ge}),_.createElement("output",null,f,"%")),_.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var H;c(!1),(H=j.current)==null||H.focus()}},_.createElement(Gu,{size:20}))),_.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},_.createElement(Sy,{entries:M.log})),_.createElement("button",{className:"glass-activity-all",onClick:()=>L("log")},"全部紀錄 ",_.createElement(kh,{size:16}))),_.createElement("div",{className:"world-top-right"},_.createElement("span",{className:"saved"},_.createElement(HE,{size:13}),Xt?"此瀏覽器無法存檔":"自動儲存"),_.createElement(E3,null),_.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":p,onClick:()=>h(H=>!H)},_.createElement("span",{className:"emotion-toggle-indicator"}),p?"情緒動畫 開":"情緒動畫 關"),_.createElement("button",{className:"emotion-animation-toggle skill-animation-toggle",type:"button","aria-pressed":v,onClick:()=>E(H=>!H)},_.createElement("span",{className:"emotion-toggle-indicator"}),v?"技能動畫 開":"技能動畫 關"),_.createElement("button",{className:"icon-button sound","aria-label":ae?"關閉音效":"開啟音效",onClick:Q},ae?_.createElement(QE,{size:18}):_.createElement(jE,{size:18}))),st&&_.createElement("div",{className:"webgl-error"},st),_.createElement("div",{className:"board-foot"},_.createElement("div",{className:"camera-toolbar"},_.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:Re?"selected":"",onClick:()=>{var H;(H=ht.current)==null||H.rotate(),Fe(!Re)}},_.createElement(qE,{size:20}),_.createElement("span",null,"旋轉視角")),_.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var H;(H=ht.current)==null||H.reset(),Fe(!1)}},_.createElement(by,{size:18})),_.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var H;return(H=ht.current)==null?void 0:H.top()}},_.createElement(ZE,{size:18})),_.createElement("i",null),_.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var H;return(H=ht.current)==null?void 0:H.zoom(1.15)}},_.createElement($E,{size:20})),_.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var H;return(H=ht.current)==null?void 0:H.zoom(.87)}},_.createElement(JE,{size:20}))),_.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),_.createElement(T3,{event:Y,players:M.players,animated:p&&!R,paused:M.stage==="moving"||U!==null}),_.createElement("aside",{className:"sidebar"},_.createElement("div",{className:"round-heading"},_.createElement("div",null,_.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),_.createElement("h1",null,"回合 ",_.createElement("b",null,String(M.round).padStart(2,"0")),_.createElement("span",null,"/ ",M.maxRounds===null?"∞":M.maxRounds)),_.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${M.inflationRate}%，物價指數 ${M.priceIndex.toFixed(2)} 倍`},_.createElement("span",{className:"inflation-rate-badge"},_.createElement(KE,{size:14,"aria-hidden":"true"}),"通膨率 ",_.createElement("b",null,M.inflationRate,"%")),_.createElement("span",{className:"inflation-index"},"物價指數 ",_.createElement("b",null,M.priceIndex.toFixed(2),"×")))),_.createElement("span",{className:"round-icon"},_.createElement(kE,{size:21}))),_.createElement("div",{className:"tabs"},_.createElement("button",{className:F==="players"?"active":"",onClick:()=>X("players")},"玩家概況"),_.createElement("button",{className:F==="properties"?"active":"",onClick:()=>X("properties")},"我的地產 ",_.createElement("span",null,oa(M,0).length))),_.createElement(N3,{game:M}),_.createElement("div",{className:"overview"},F==="players"?M.players.map(H=>_.createElement("div",{key:H.id,className:"player-row "+(M.turn===H.id?"current ":"")+(H.bankrupt?"bankrupt":""),style:{"--player":Fu(H)}},_.createElement(Hu,{id:H.id,player:H}),_.createElement("div",{className:"player-info"},_.createElement("strong",null,H.name,H.id===0?_.createElement("em",null,"玩家"):_.createElement("span",{className:"ai"},"電腦")),_.createElement("small",null,H.bankrupt?"已破產":`${oa(M,H.id).length} 塊地產${H.jail?" · 監獄中":""}`),_.createElement(xx,{player:H})),_.createElement("div",{className:"player-cash"},_.createElement("b",null,St(H.cash)),M.turn===H.id&&_.createElement("small",null,_.createElement("span",null)," 目前回合")),_.createElement("button",{type:"button",className:"player-status-trigger","aria-label":`查看${H.name}的玩家狀態`,onClick:()=>Se(H.id)},_.createElement(Ru,{size:16})))):_.createElement("div",{className:"property-list"},oa(M,0).length?oa(M,0).map(H=>_.createElement("button",{key:H.id,onClick:()=>Lt(H.id)},_.createElement("i",{style:{background:H.color}}),_.createElement("span",null,_.createElement("strong",null,H.name),_.createElement("small",null,Sx(M.lots[H.id].level)," · 租金 ",St(zu(M,H)))),_.createElement(Ru,{size:16}))):_.createElement("div",{className:"empty-properties"},_.createElement(pl,{size:28}),_.createElement("strong",null,"你的第一塊地產，正在等你"),_.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),_.createElement("section",{className:"turn-panel","aria-live":"polite"},_.createElement("div",{className:"turn-title"},_.createElement("span",{className:"live-dot",style:{background:Fu(Ke)}}),_.createElement("h2",null,M.stage==="finished"?"本局已結束":_t?"你的回合":`${Ke.name}的回合`),_.createElement("span",null,M.stage==="moving"?"移動中":M.stage==="decision"?"購地時刻":_t?"準備出發":"電腦玩家")),_.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(H=>_.createElement("button",{key:H,"aria-pressed":(Ke.diceCount??2)===H,disabled:!_t||M.stage!=="ready"||!!Ke.jail||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"SET_DICE_COUNT",count:H})},H," 顆骰子"))),_.createElement("div",{className:"dice-row"},(M.stage==="ready"?Array.from({length:Ke.diceCount??2},()=>1):M.dice).map((H,Ue)=>_.createElement(D3,{key:Ue,value:H,rolling:M.stage==="moving"}))),_.createElement("section",{className:`skill-panel${g?" skill-pulse":""}`,"aria-label":"技能卡手牌"},_.createElement("div",{className:"skill-panel-heading"},_.createElement("h3",null,_.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),_.createElement("span",null,Ke.human?`${_e.length} / 3`:`${_e.length} 張`)),Ke.human?_e.length?_.createElement("div",{className:"skill-card-list"},_e.map(H=>_.createElement(L3,{key:H.id,card:H,count:Ne[H.id],disabled:Be(H),selected:(Xe==null?void 0:Xe.id)===H.id,onClick:()=>ti(H)}))):_.createElement("p",{className:"skill-empty"},"抵達機會格，或經過／抵達城市基金格，有機會取得技能卡。"):_.createElement("p",{className:"skill-ai-count"},"電腦玩家持有 ",_e.length," 張技能卡"),Xe&&!K&&_.createElement("div",{className:"skill-detail"},_.createElement("div",{className:"skill-detail-heading"},_.createElement("span",{className:"skill-detail-icon"},Xe.icon),_.createElement("div",null,_.createElement("strong",null,Xe.name),_.createElement("span",null,Xe.summary),_.createElement("small",null,Xe.timing==="active"?"主動卡 · 可在自己回合使用":"反應卡 · 需等待符合條件的事件"))),_.createElement("div",{className:"skill-detail-actions"},_.createElement("button",{type:"button",className:"secondary",onClick:()=>z(null)},"關閉說明"),_.createElement("button",{type:"button",className:"primary",disabled:Be(Xe),onClick:ni},"使用"))),Xe&&K&&_.createElement("div",{className:"skill-target-picker"},_.createElement("div",null,_.createElement("strong",null,Xe.name),_.createElement("span",null,Xe.summary)),Xe.target==="player"&&_.createElement("label",null,"選擇目標",_.createElement("select",{value:K.targetId,onChange:H=>Me(Ue=>({...Ue,targetId:Number(H.target.value)}))},Je(Xe).map(H=>_.createElement("option",{key:H.id,value:H.id},H.name,H.id===Ke.id?" · 自己":"",H.jail?" · 監獄中":"")))),Xe.id==="teleport"&&_.createElement("label",null,"選擇合法位置",_.createElement("select",{value:K.targetPosition,onChange:H=>Me(Ue=>({...Ue,targetPosition:Number(H.target.value)}))},Fh.map(H=>_.createElement("option",{key:H,value:H},Vt[H].name,Vt[H].type==="property"?" · 地產":"")))),Xe.target==="land"&&_.createElement("div",{className:"skill-land-pickers"},_.createElement("label",null,"你的土地",_.createElement("select",{value:K.ownLotId,onChange:H=>Me(Ue=>({...Ue,ownLotId:Number(H.target.value)}))},We.map(H=>_.createElement("option",{key:H.id,value:H.id},H.name)))),_.createElement("label",null,"交換土地",_.createElement("select",{value:K.targetLotId,onChange:H=>Me(Ue=>({...Ue,targetLotId:Number(H.target.value)}))},Ze.map(H=>{var Ue;return _.createElement("option",{key:H.id,value:H.id},H.name," · ",(Ue=M.players[M.lots[H.id].owner])==null?void 0:Ue.name)})))),_.createElement("div",{className:"skill-target-actions"},_.createElement("button",{type:"button",className:"secondary",onClick:()=>{Me(null),z(null)}},"取消"),_.createElement("button",{type:"button",className:"primary",disabled:Xe.id==="teleport"?!K.targetId&&K.targetId!==0||!Fh.includes(K.targetPosition):Xe.target==="player"?!K.targetId&&K.targetId!==0:!K.ownLotId||!K.targetLotId,onClick:zs},"確認使用")))),(Le==null?void 0:Le.human)&&_.createElement("section",{className:"skill-reaction-prompt","aria-live":"assertive"},_.createElement("strong",null,xe==null?void 0:xe.name,"正在對你使用",((vn=Cs.find(H=>H.id===M.pendingSkill.cardId))==null?void 0:vn.name)||"技能卡"),_.createElement("span",null,"效果尚未結算，請選擇是否回應。"),_.createElement("div",null,_.createElement("button",{type:"button",disabled:!Le.skillHand.includes("counter"),onClick:()=>I({type:"RESPOND_SKILL",playerId:Le.id,response:"counter"})},"使用反制卡"),_.createElement("button",{type:"button",disabled:!Le.skillHand.includes("reflect"),onClick:()=>I({type:"RESPOND_SKILL",playerId:Le.id,response:"reflect"})},"使用反彈卡"),_.createElement("button",{type:"button",className:"secondary",onClick:()=>I({type:"RESPOND_SKILL",playerId:Le.id,response:"pass"})},"不回應"))),(W==null?void 0:W.human)&&_.createElement("section",{className:"skill-overflow","aria-live":"polite"},_.createElement("strong",null,"手牌已達上限"),_.createElement("span",null,"剛抽到第 4 張技能卡，請選擇立即使用或放棄其中一張。"),_.createElement("div",{className:"skill-overflow-list"},(W.skillHand||[]).map((H,Ue)=>{const it=Cs.find(Ot=>Ot.id===H);return it?_.createElement("div",{className:"skill-overflow-card",key:`${H}-${Ue}`},_.createElement("span",{className:"skill-overflow-card-icon"},it.icon),_.createElement("strong",null,it.name),_.createElement("button",{type:"button",disabled:Ce(it),onClick:()=>zt(it,!0)},"使用"),_.createElement("button",{type:"button",onClick:()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:H})},"放棄")):null}))),M.stage==="finished"?_.createElement("button",{className:"primary",onClick:()=>L("result")},_.createElement(cv,{size:19}),"查看結算"):_t&&M.stage==="decision"?_.createElement("div",{className:"buy-actions"},_.createElement("div",{className:"buy-summary"},_.createElement("strong",null,ee.name),_.createElement("b",null,St(hl(M,ee)))),_.createElement("button",{className:"primary",disabled:!!W||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"BUY"})},_.createElement(pl,{size:18}),"購買地產"),_.createElement("button",{className:"skip-button",disabled:!!W||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"SKIP"})},"暫不購買，保留現金 ",_.createElement(fl,{size:14}))):_.createElement("button",{className:"primary",disabled:!_t||M.stage==="moving"||!!K||!!W||!!M.pendingSkill||!!Oe,onClick:()=>M.stage==="end"?I({type:"NEXT"}):Pt()},M.stage==="moving"?_.createElement(_.Fragment,null,"前進中 · 還有 ",M.remaining," 格"):_t?M.stage==="end"?_.createElement(_.Fragment,null,"結束回合 ",_.createElement(fl,{size:19})):_.createElement(_.Fragment,null,_.createElement(My,{size:21}),"擲骰子"):_.createElement(_.Fragment,null,"電腦思考中",_.createElement("span",{className:"thinking"},"…"))),_.createElement("p",{className:"turn-hint"},M.stage==="ready"?_t?"好運從這一步開始。":"下一段城市冒險，即將展開。":M.notice),M.event&&_.createElement("div",{className:"event-note"},_.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),_.createElement("div",null,_.createElement("strong",null,M.event.title),_.createElement("span",null,M.event.kind==="inflation"?M.event.inflationDelta===0?`通膨率維持 ${M.inflationRate}%（已達上下限）`:`通膨率 ${M.event.inflationDelta>0?"+":""}${M.event.inflationDelta}% · 目前 ${M.inflationRate}%`:`${M.event.amount>0?"+":"−"} ${St(Math.abs(M.event.amount))}`),M.event.skillCardName&&_.createElement("em",null,"獲得技能卡 · ",M.event.skillCardName)))),_.createElement("section",{className:"activity"},_.createElement("div",{className:"activity-heading"},_.createElement("h2",null,"城市動態"),_.createElement("button",{onClick:()=>L("log")},"全部紀錄 ",_.createElement(kh,{size:14}))),_.createElement("div",{className:"activity-list"},_.createElement(Sy,{entries:M.log.slice(0,3)}))),_.createElement("footer",{className:"sidebar-footer"},_.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),le!==null&&_.createElement(U3,{game:M,playerId:le,onClose:()=>Se(null),onSelectPlayer:Se}),U==="rules"&&_.createElement(ul,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>L(null)},_.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),_.createElement("div",{className:"rules-list"},Vp.map(([H,Ue],it)=>_.createElement("div",{key:H},_.createElement("span",null,String(it+1).padStart(2,"0")),_.createElement("section",null,_.createElement("h3",null,H),_.createElement("p",null,Ue))))),_.createElement("button",{className:"primary",onClick:()=>L(null)},"知道了，回到城市 ",_.createElement(fl,{size:18}))),$,U==="property"&&re&&_.createElement(ul,{title:"地產手冊",onClose:()=>L(null)},_.createElement("div",{className:"property-card",style:{"--lot":re.color}},_.createElement("div",{className:"property-banner"},re.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),_.createElement(VE,{size:24}),_.createElement("h3",null,re.name),_.createElement("p",null,re.type==="property"?`街區 ${re.group+1} · ${de?`${M.players[de.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),re.type==="property"?_.createElement(_.Fragment,null,_.createElement("div",{className:"property-stats"},_.createElement("div",null,_.createElement("span",null,"地產價格"),_.createElement("b",null,St(hl(M,re)))),_.createElement("div",null,_.createElement("span",null,"目前租金"),_.createElement("b",null,St(de?zu(M,re):Zn(M,Math.round(re.price*.18))))),_.createElement("div",null,_.createElement("span",null,"建築等級"),_.createElement("b",null,O3(de==null?void 0:de.level))),_.createElement("div",null,_.createElement("span",null,"建造費"),_.createElement("b",null,St(Ml(re,M))))),(de==null?void 0:de.owner)===Ke.id?_.createElement(_.Fragment,null,_.createElement("p",{className:"property-help"},I3(M,re,de)),_.createElement("button",{className:"primary",disabled:!rn||!Fp(M,re.id,Ke.id),onClick:()=>I({type:"BUILD",id:re.id})},_.createElement(Gh,{size:18}),P3(M,re,de)),_.createElement("button",{className:"secondary full",disabled:!rn,onClick:()=>{I({type:"SELL",id:re.id}),L(null)}},"變賣地產 · ",St(Zn(M,re.price+de.level*Math.round(re.price*.6),H=>Math.floor(H*.5))))):se?_.createElement(_.Fragment,null,_.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),_.createElement("button",{className:"primary",onClick:()=>I({type:"BUY"})},_.createElement(pl,{size:18}),"購買地產 · ",St(hl(M,re))),_.createElement("button",{className:"secondary full",onClick:()=>{I({type:"SKIP"}),L(null)}},"暫不購買，保留現金")):_.createElement("p",{className:"property-help"},de?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):_.createElement("p",{className:"property-help"},re.type==="start"?`每次經過起點，領取 ${St(Zn(M,2e3))}。`:re.type==="chance"||re.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":re.type==="gojail"?"前往監獄並暫停下一回合。":re.type==="tax"?`停在這裡支付 ${St(Zn(M,re.id===6?1200:1800))} 稅金。`:re.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),U==="log"&&_.createElement(ul,{title:"本局城市紀錄",onClose:()=>L(null)},_.createElement("div",{className:"full-log"},M.log.map((H,Ue)=>_.createElement("p",{key:Ue},_.createElement("span",null,String(M.log.length-Ue).padStart(2,"0")),H.text)))),(U==="result"||M.stage==="finished"&&U===null)&&_.createElement(ul,{title:"這座城市，有了新的大亨",onClose:()=>L("closedResult")},_.createElement("div",{className:"winner"},_.createElement(cv,{size:42}),_.createElement("h3",null,(Tn=M.players[M.winner])==null?void 0:Tn.name,"獲勝！"),_.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),_.createElement("div",{className:"rankings"},[...M.players].sort((H,Ue)=>dr(M,Ue.id)-dr(M,H.id)).map((H,Ue)=>_.createElement("div",{key:H.id},_.createElement("b",null,Ue+1),_.createElement(Hu,{id:H.id,player:H,small:!0}),_.createElement("strong",null,H.name),_.createElement("span",null,H.bankrupt?"已破產":St(dr(M,H.id)))))),_.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),_.createElement("button",{className:"primary",onClick:C},"再玩一場 ",_.createElement(fl,{size:18}))))}PE.createRoot(document.getElementById("root")).render(_.createElement(V3,null));
