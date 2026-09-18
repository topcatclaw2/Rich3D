(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function SM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Zd={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function MM(){if(Q_)return ht;Q_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),v=Symbol.iterator;function E(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function x(z,te,Re){this.props=z,this.context=te,this.refs=T,this.updater=Re||R}x.prototype.isReactComponent={},x.prototype.setState=function(z,te){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,te,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function O(){}O.prototype=x.prototype;function I(z,te,Re){this.props=z,this.context=te,this.refs=T,this.updater=Re||R}var S=I.prototype=new O;S.constructor=I,N(S,x.prototype),S.isPureReactComponent=!0;var L=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(z,te,Re){var Pe=Re.ref;return{$$typeof:a,type:z,key:te,ref:Pe!==void 0?Pe:null,props:Re}}function Z(z,te){return U(z.type,te,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function J(z){var te={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Re){return te[Re]})}var me=/\/+/g;function pe(z,te){return typeof z=="object"&&z!==null&&z.key!=null?J(""+z.key):te.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(te){z.status==="pending"&&(z.status="fulfilled",z.value=te)},function(te){z.status==="pending"&&(z.status="rejected",z.reason=te)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,te,Re,Pe,Fe){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var Ce=!1;if(z===null)Ce=!0;else switch(se){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(z.$$typeof){case a:case e:Ce=!0;break;case g:return Ce=z._init,B(Ce(z._payload),te,Re,Pe,Fe)}}if(Ce)return Fe=Fe(z),Ce=Pe===""?"."+pe(z,0):Pe,L(Fe)?(Re="",Ce!=null&&(Re=Ce.replace(me,"$&/")+"/"),B(Fe,te,Re,"",function(it){return it})):Fe!=null&&(H(Fe)&&(Fe=Z(Fe,Re+(Fe.key==null||z&&z.key===Fe.key?"":(""+Fe.key).replace(me,"$&/")+"/")+Ce)),te.push(Fe)),1;Ce=0;var be=Pe===""?".":Pe+":";if(L(z))for(var Be=0;Be<z.length;Be++)Pe=z[Be],se=be+pe(Pe,Be),Ce+=B(Pe,te,Re,se,Fe);else if(Be=E(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(Pe=z.next()).done;)Pe=Pe.value,se=be+pe(Pe,Be++),Ce+=B(Pe,te,Re,se,Fe);else if(se==="object"){if(typeof z.then=="function")return B(ie(z),te,Re,Pe,Fe);throw te=String(z),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function X(z,te,Re){if(z==null)return z;var Pe=[],Fe=0;return B(z,Pe,"","",function(se){return te.call(Re,se,Fe++)}),Pe}function re(z){if(z._status===-1){var te=z._result;te=te(),te.then(function(Re){(z._status===0||z._status===-1)&&(z._status=1,z._result=Re)},function(Re){(z._status===0||z._status===-1)&&(z._status=2,z._result=Re)}),z._status===-1&&(z._status=0,z._result=te)}if(z._status===1)return z._result.default;throw z._result}var xe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Te={map:X,forEach:function(z,te,Re){X(z,function(){te.apply(this,arguments)},Re)},count:function(z){var te=0;return X(z,function(){te++}),te},toArray:function(z){return X(z,function(te){return te})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ht.Activity=M,ht.Children=Te,ht.Component=x,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=I,ht.StrictMode=r,ht.Suspense=p,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ht.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},ht.cache=function(z){return function(){return z.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(z,te,Re){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Pe=N({},z.props),Fe=z.key;if(te!=null)for(se in te.key!==void 0&&(Fe=""+te.key),te)!A.call(te,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&te.ref===void 0||(Pe[se]=te[se]);var se=arguments.length-2;if(se===1)Pe.children=Re;else if(1<se){for(var Ce=Array(se),be=0;be<se;be++)Ce[be]=arguments[be+2];Pe.children=Ce}return U(z.type,Fe,Pe)},ht.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ht.createElement=function(z,te,Re){var Pe,Fe={},se=null;if(te!=null)for(Pe in te.key!==void 0&&(se=""+te.key),te)A.call(te,Pe)&&Pe!=="key"&&Pe!=="__self"&&Pe!=="__source"&&(Fe[Pe]=te[Pe]);var Ce=arguments.length-2;if(Ce===1)Fe.children=Re;else if(1<Ce){for(var be=Array(Ce),Be=0;Be<Ce;Be++)be[Be]=arguments[Be+2];Fe.children=be}if(z&&z.defaultProps)for(Pe in Ce=z.defaultProps,Ce)Fe[Pe]===void 0&&(Fe[Pe]=Ce[Pe]);return U(z,se,Fe)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(z){return{$$typeof:m,render:z}},ht.isValidElement=H,ht.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:re}},ht.memo=function(z,te){return{$$typeof:h,type:z,compare:te===void 0?null:te}},ht.startTransition=function(z){var te=F.T,Re={};F.T=Re;try{var Pe=z(),Fe=F.S;Fe!==null&&Fe(Re,Pe),typeof Pe=="object"&&Pe!==null&&typeof Pe.then=="function"&&Pe.then(P,xe)}catch(se){xe(se)}finally{te!==null&&Re.types!==null&&(te.types=Re.types),F.T=te}},ht.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ht.use=function(z){return F.H.use(z)},ht.useActionState=function(z,te,Re){return F.H.useActionState(z,te,Re)},ht.useCallback=function(z,te){return F.H.useCallback(z,te)},ht.useContext=function(z){return F.H.useContext(z)},ht.useDebugValue=function(){},ht.useDeferredValue=function(z,te){return F.H.useDeferredValue(z,te)},ht.useEffect=function(z,te){return F.H.useEffect(z,te)},ht.useEffectEvent=function(z){return F.H.useEffectEvent(z)},ht.useId=function(){return F.H.useId()},ht.useImperativeHandle=function(z,te,Re){return F.H.useImperativeHandle(z,te,Re)},ht.useInsertionEffect=function(z,te){return F.H.useInsertionEffect(z,te)},ht.useLayoutEffect=function(z,te){return F.H.useLayoutEffect(z,te)},ht.useMemo=function(z,te){return F.H.useMemo(z,te)},ht.useOptimistic=function(z,te){return F.H.useOptimistic(z,te)},ht.useReducer=function(z,te,Re){return F.H.useReducer(z,te,Re)},ht.useRef=function(z){return F.H.useRef(z)},ht.useState=function(z){return F.H.useState(z)},ht.useSyncExternalStore=function(z,te,Re){return F.H.useSyncExternalStore(z,te,Re)},ht.useTransition=function(){return F.H.useTransition()},ht.version="19.2.8",ht}var J_;function Hp(){return J_||(J_=1,Zd.exports=MM()),Zd.exports}var Ke=Hp();const b=SM(Ke);var Kd={exports:{}},co={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function EM(){return j_||(j_=1,(function(a){function e(B,X){var re=B.length;B.push(X);e:for(;0<re;){var xe=re-1>>>1,Te=B[xe];if(0<o(Te,X))B[xe]=X,B[re]=Te,re=xe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],re=B.pop();if(re!==X){B[0]=re;e:for(var xe=0,Te=B.length,z=Te>>>1;xe<z;){var te=2*(xe+1)-1,Re=B[te],Pe=te+1,Fe=B[Pe];if(0>o(Re,re))Pe<Te&&0>o(Fe,Re)?(B[xe]=Fe,B[Pe]=re,xe=Pe):(B[xe]=Re,B[te]=re,xe=te);else if(Pe<Te&&0>o(Fe,re))B[xe]=Fe,B[Pe]=re,xe=Pe;else break e}}return X}function o(B,X){var re=B.sortIndex-X.sortIndex;return re!==0?re:B.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var p=[],h=[],g=1,M=null,v=3,E=!1,R=!1,N=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function S(B){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=B)r(h),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(h)}}function L(B){if(N=!1,S(B),!R)if(n(p)!==null)R=!0,P||(P=!0,J());else{var X=n(h);X!==null&&ie(L,X.startTime-B)}}var P=!1,F=-1,A=5,U=-1;function Z(){return T?!0:!(a.unstable_now()-U<A)}function H(){if(T=!1,P){var B=a.unstable_now();U=B;var X=!0;try{e:{R=!1,N&&(N=!1,O(F),F=-1),E=!0;var re=v;try{t:{for(S(B),M=n(p);M!==null&&!(M.expirationTime>B&&Z());){var xe=M.callback;if(typeof xe=="function"){M.callback=null,v=M.priorityLevel;var Te=xe(M.expirationTime<=B);if(B=a.unstable_now(),typeof Te=="function"){M.callback=Te,S(B),X=!0;break t}M===n(p)&&r(p),S(B)}else r(p);M=n(p)}if(M!==null)X=!0;else{var z=n(h);z!==null&&ie(L,z.startTime-B),X=!1}}break e}finally{M=null,v=re,E=!1}X=void 0}}finally{X?J():P=!1}}}var J;if(typeof I=="function")J=function(){I(H)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,pe=me.port2;me.port1.onmessage=H,J=function(){pe.postMessage(null)}}else J=function(){x(H,0)};function ie(B,X){F=x(function(){B(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var re=v;v=X;try{return B()}finally{v=re}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=v;v=B;try{return X()}finally{v=re}},a.unstable_scheduleCallback=function(B,X,re){var xe=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?xe+re:xe):re=xe,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=re+Te,B={id:g++,callback:X,priorityLevel:B,startTime:re,expirationTime:Te,sortIndex:-1},re>xe?(B.sortIndex=re,e(h,B),n(p)===null&&B===n(h)&&(N?(O(F),F=-1):N=!0,ie(L,re-xe))):(B.sortIndex=Te,e(p,B),R||E||(R=!0,P||(P=!0,J()))),B},a.unstable_shouldYield=Z,a.unstable_wrapCallback=function(B){var X=v;return function(){var re=v;v=X;try{return B.apply(this,arguments)}finally{v=re}}}})(Jd)),Jd}var $_;function bM(){return $_||($_=1,Qd.exports=EM()),Qd.exports}var jd={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function TM(){if(ev)return Jn;ev=1;var a=Hp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:M==null?null:""+M,children:p,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Jn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,g)},Jn.flushSync=function(p){var h=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=h,r.p=g,r.d.f()}},Jn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Jn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Jn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,M=m(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:v,fetchPriority:E}):g==="script"&&r.d.X(p,{crossOrigin:M,integrity:v,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Jn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Jn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,M=m(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Jn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Jn.requestFormReset=function(p){r.d.r(p)},Jn.unstable_batchedUpdates=function(p,h){return p(h)},Jn.useFormState=function(p,h,g){return f.H.useFormState(p,h,g)},Jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Jn.version="19.2.8",Jn}var tv;function AM(){if(tv)return jd.exports;tv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jd.exports=TM(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function RM(){if(nv)return co;nv=1;var a=bM(),e=Hp(),n=AM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===l)return p(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var y=!1,D=u.child;D;){if(D===s){y=!0,s=u,l=d;break}if(D===l){y=!0,l=u,s=d;break}D=D.sibling}if(!y){for(D=d.child;D;){if(D===s){y=!0,s=d,l=u;break}if(D===l){y=!0,l=d,s=u;break}D=D.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var M=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case S:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var ie=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},xe=[],Te=-1;function z(t){return{current:t}}function te(t){0>Te||(t.current=xe[Te],xe[Te]=null,Te--)}function Re(t,i){Te++,xe[Te]=t.current,t.current=i}var Pe=z(null),Fe=z(null),se=z(null),Ce=z(null);function be(t,i){switch(Re(se,i),Re(Fe,t),Re(Pe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=y_(i),t=x_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Pe),Re(Pe,t)}function Be(){te(Pe),te(Fe),te(se)}function it(t){t.memoizedState!==null&&Re(Ce,t);var i=Pe.current,s=x_(i,t.type);i!==s&&(Re(Fe,t),Re(Pe,s))}function Ye(t){Fe.current===t&&(te(Pe),te(Fe)),Ce.current===t&&(te(Ce),so._currentValue=re)}var Ct,ze;function ot(t){if(Ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ct=i&&i[1]||"",ze=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+ze}var ut=!1;function mt(t,i){if(!t||ut)return"";ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(ye){var he=ye}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(ye){he=ye}t.call(Ae.prototype)}}else{try{throw Error()}catch(ye){he=ye}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(ye){if(ye&&he&&typeof ye.stack=="string")return[ye.stack,he.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],D=d[1];if(y&&D){var V=y.split(`
`),oe=D.split(`
`);for(u=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(l===V.length||u===oe.length)for(l=V.length-1,u=oe.length-1;1<=l&&0<=u&&V[l]!==oe[u];)u--;for(;1<=l&&0<=u;l--,u--)if(V[l]!==oe[u]){if(l!==1||u!==1)do if(l--,u--,0>u||V[l]!==oe[u]){var Me=`
`+V[l].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=l&&0<=u);break}}}finally{ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ot(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return ot(t.type);case 16:return ot("Lazy");case 13:return t.child!==i&&i!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return ot("Activity");default:return""}}function an(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Gt=Object.prototype.hasOwnProperty,Qt=a.unstable_scheduleCallback,Ut=a.unstable_cancelCallback,on=a.unstable_shouldYield,K=a.unstable_requestPaint,Lt=a.unstable_now,_e=a.unstable_getCurrentPriorityLevel,C=a.unstable_ImmediatePriority,_=a.unstable_UserBlockingPriority,k=a.unstable_NormalPriority,Y=a.unstable_LowPriority,Q=a.unstable_IdlePriority,ve=a.log,ge=a.unstable_setDisableYieldValue,$=null,ae=null;function fe(t){if(typeof ve=="function"&&ge(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode($,t)}catch{}}var De=Math.clz32?Math.clz32:qe,Le=Math.log,Ue=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var Ze=256,at=262144,W=4194304;function Oe(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~d,l!==0?u=Oe(l):(y&=D,y!==0?u=Oe(y):s||(s=D&~t,s!==0&&(u=Oe(s))))):(D=l&~d,D!==0?u=Oe(D):y!==0?u=Oe(y):s||(s=l&~t,s!==0&&(u=Oe(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function je(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,i,s,l,u,d){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=y&~s;0<s;){var Me=31-De(s),Ae=1<<Me;D[Me]=0,V[Me]=-1;var he=oe[Me];if(he!==null)for(oe[Me]=null,Me=0;Me<he.length;Me++){var ye=he[Me];ye!==null&&(ye.lane&=-536870913)}s&=~Ae}l!==0&&Ot(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Ot(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-De(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function G(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-De(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function Ne(t,i){var s=i&-i;return s=(s&42)!==0?1:dt(s),(s&(t.suspendedLanes|i))!==0?0:s}function dt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yn(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:V_(t.type))}function hn(t,i){var s=X.p;try{return X.p=t,i()}finally{X.p=s}}var xn=Math.random().toString(36).slice(2),cn="__reactFiber$"+xn,Tn="__reactProps$"+xn,ai="__reactContainer$"+xn,Ls="__reactEvents$"+xn,Po="__reactListeners$"+xn,Io="__reactHandles$"+xn,Os="__reactResources$"+xn,Xa="__reactMarker$"+xn;function Wa(t){delete t[cn],delete t[Tn],delete t[Ls],delete t[Po],delete t[Io]}function da(t){var i=t[cn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ai]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=R_(t);t!==null;){if(s=t[cn])return s;t=R_(t)}return i}t=s,s=t.parentNode}return null}function ha(t){if(t=t[cn]||t[ai]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ps(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Ya(t){var i=t[Os];return i||(i=t[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function An(t){t[Xa]=!0}var zo=new Set,w={};function j(t,i){de(t,i),de(t+"Capture",i)}function de(t,i){for(w[t]=i,t=0;t<i.length;t++)zo.add(i[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},ke={};function Qe(t){return Gt.call(ke,t)?!0:Gt.call(ue,t)?!1:ce.test(t)?ke[t]=!0:(ue[t]=!0,!1)}function Ge(t,i,s){if(Qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function $e(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=nt(t,i,""+t[i])}}function pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=gt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function Xt(t){return t.replace(Vt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,s,l,u,d,y,D){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+st(i)):t.value!==""+st(i)&&(t.value=""+st(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Mt(t,y,st(i)):s!=null?Mt(t,y,st(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+st(D):t.removeAttribute("name")}function Qn(t,i,s,l,u,d,y,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Pt(t);return}s=s!=null?""+st(s):"",i=i!=null?""+st(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Pt(t)}function Mt(t,i,s){i==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ln(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+st(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function pi(t,i,s){if(i!=null&&(i=""+st(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+st(s):""}function Hi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ie(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=st(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Pt(t)}function mi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Gi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&mn(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&mn(t,d,i[d])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(t){return qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pa(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ur=null,fr=null;function vm(t){var i=ha(t);if(i&&(t=i.stateNode)){var s=t[Tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Xt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[Tn]||null;if(!u)throw Error(r(90));Xe(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&pn(l)}break e;case"textarea":pi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ln(t,!!s.multiple,i,!1)}}}var Yu=!1;function ym(t,i,s){if(Yu)return t(i,s);Yu=!0;try{var l=t(i);return l}finally{if(Yu=!1,(ur!==null||fr!==null)&&(bc(),ur&&(i=ur,t=fr,fr=ur=null,vm(i),t)))for(i=0;i<t.length;i++)vm(t[i])}}function Ml(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(ma)try{var El={};Object.defineProperty(El,"passive",{get:function(){qu=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{qu=!1}var Za=null,Zu=null,Bo=null;function xm(){if(Bo)return Bo;var t,i=Zu,s=i.length,l,u="value"in Za?Za.value:Za.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===u[d-l];l++);return Bo=u.slice(t,1<l?1-l:void 0)}function Fo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Sm(){return!1}function si(t){function i(s,l,u,d,y){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ho:Sm,this.isPropagationStopped=Sm,this}return M(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=si(zs),bl=M({},zs,{view:0,detail:0}),yx=si(bl),Ku,Qu,Tl,ko=M({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Tl&&(Tl&&t.type==="mousemove"?(Ku=t.screenX-Tl.screenX,Qu=t.screenY-Tl.screenY):Qu=Ku=0,Tl=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Mm=si(ko),xx=M({},ko,{dataTransfer:0}),Sx=si(xx),Mx=M({},bl,{relatedTarget:0}),Ju=si(Mx),Ex=M({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=si(Ex),Tx=M({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=si(Tx),Rx=M({},zs,{data:0}),Em=si(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Dx[t])?!!i[t]:!1}function ju(){return Nx}var Ux=M({},bl,{key:function(t){if(t.key){var i=Cx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=si(Ux),Ox=M({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=si(Ox),Px=M({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Ix=si(Px),zx=M({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=si(zx),Fx=M({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=si(Fx),Gx=M({},zs,{newState:0,oldState:0}),kx=si(Gx),Vx=[9,13,27,32],$u=ma&&"CompositionEvent"in window,Al=null;ma&&"documentMode"in document&&(Al=document.documentMode);var Xx=ma&&"TextEvent"in window&&!Al,Tm=ma&&(!$u||Al&&8<Al&&11>=Al),Am=" ",Rm=!1;function Cm(t,i){switch(t){case"keyup":return Vx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function Wx(t,i){switch(t){case"compositionend":return wm(i);case"keypress":return i.which!==32?null:(Rm=!0,Am);case"textInput":return t=i.data,t===Am&&Rm?null:t;default:return null}}function Yx(t,i){if(dr)return t==="compositionend"||!$u&&Cm(t,i)?(t=xm(),Bo=Zu=Za=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tm&&i.locale!=="ko"?null:i.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!qx[t.type]:i==="textarea"}function Nm(t,i,s,l){ur?fr?fr.push(l):fr=[l]:ur=l,i=Nc(i,"onChange"),0<i.length&&(s=new Go("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Rl=null,Cl=null;function Zx(t){h_(t,0)}function Vo(t){var i=Ps(t);if(pn(i))return t}function Um(t,i){if(t==="change")return i}var Lm=!1;if(ma){var ef;if(ma){var tf="oninput"in document;if(!tf){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),tf=typeof Om.oninput=="function"}ef=tf}else ef=!1;Lm=ef&&(!document.documentMode||9<document.documentMode)}function Pm(){Rl&&(Rl.detachEvent("onpropertychange",Im),Cl=Rl=null)}function Im(t){if(t.propertyName==="value"&&Vo(Cl)){var i=[];Nm(i,Cl,t,Wu(t)),ym(Zx,i)}}function Kx(t,i,s){t==="focusin"?(Pm(),Rl=i,Cl=s,Rl.attachEvent("onpropertychange",Im)):t==="focusout"&&Pm()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(Cl)}function Jx(t,i){if(t==="click")return Vo(i)}function jx(t,i){if(t==="input"||t==="change")return Vo(i)}function $x(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var gi=typeof Object.is=="function"?Object.is:$x;function wl(t,i){if(gi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Gt.call(i,u)||!gi(t[u],i[u]))return!1}return!0}function zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,i){var s=zm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=zm(s)}}function Fm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Fm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=rn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=rn(t.document)}return i}function nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var eS=ma&&"documentMode"in document&&11>=document.documentMode,hr=null,af=null,Dl=null,sf=!1;function Gm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;sf||hr==null||hr!==rn(l)||(l=hr,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dl&&wl(Dl,l)||(Dl=l,l=Nc(af,"onSelect"),0<l.length&&(i=new Go("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=hr)))}function Bs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var pr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},rf={},km={};ma&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Fs(t){if(rf[t])return rf[t];if(!pr[t])return t;var i=pr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in km)return rf[t]=i[s];return t}var Vm=Fs("animationend"),Xm=Fs("animationiteration"),Wm=Fs("animationstart"),tS=Fs("transitionrun"),nS=Fs("transitionstart"),iS=Fs("transitioncancel"),Ym=Fs("transitionend"),qm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function ki(t,i){qm.set(t,i),j(i,[t])}var Xo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ci=[],mr=0,of=0;function Wo(){for(var t=mr,i=of=mr=0;i<t;){var s=Ci[i];Ci[i++]=null;var l=Ci[i];Ci[i++]=null;var u=Ci[i];Ci[i++]=null;var d=Ci[i];if(Ci[i++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}d!==0&&Zm(s,u,d)}}function Yo(t,i,s,l){Ci[mr++]=t,Ci[mr++]=i,Ci[mr++]=s,Ci[mr++]=l,of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function cf(t,i,s,l){return Yo(t,i,s,l),qo(t)}function Hs(t,i){return Yo(t,null,null,i),qo(t)}function Zm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-De(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function qo(t){if(50<jl)throw jl=0,vd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var gr={};function aS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,i,s,l){return new aS(t,i,s,l)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,i){var s=t.alternate;return s===null?(s=_i(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Km(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zo(t,i,s,l,u,d){var y=0;if(l=t,typeof t=="function")uf(t)&&(y=1);else if(typeof t=="string")y=cM(t,s,Pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=_i(31,s,i,u),t.elementType=U,t.lanes=d,t;case N:return Gs(s.children,u,d,i);case T:y=8,u|=24;break;case x:return t=_i(12,s,i,u|2),t.elementType=x,t.lanes=d,t;case L:return t=_i(13,s,i,u),t.elementType=L,t.lanes=d,t;case P:return t=_i(19,s,i,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:y=10;break e;case O:y=9;break e;case S:y=11;break e;case F:y=14;break e;case A:y=16,l=null;break e}y=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=_i(y,s,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function Gs(t,i,s,l){return t=_i(7,t,l,i),t.lanes=s,t}function ff(t,i,s){return t=_i(6,t,null,i),t.lanes=s,t}function Qm(t){var i=_i(18,null,null,0);return i.stateNode=t,i}function df(t,i,s){return i=_i(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Jm=new WeakMap;function wi(t,i){if(typeof t=="object"&&t!==null){var s=Jm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:an(i)},Jm.set(t,i),i)}return{value:t,source:i,stack:an(i)}}var _r=[],vr=0,Ko=null,Nl=0,Di=[],Ni=0,Ka=null,ji=1,$i="";function _a(t,i){_r[vr++]=Nl,_r[vr++]=Ko,Ko=t,Nl=i}function jm(t,i,s){Di[Ni++]=ji,Di[Ni++]=$i,Di[Ni++]=Ka,Ka=t;var l=ji;t=$i;var u=32-De(l)-1;l&=~(1<<u),s+=1;var d=32-De(i)+u;if(30<d){var y=u-u%5;d=(l&(1<<y)-1).toString(32),l>>=y,u-=y,ji=1<<32-De(i)+u|s<<u|l,$i=d+t}else ji=1<<d|s<<u|l,$i=t}function hf(t){t.return!==null&&(_a(t,1),jm(t,1,0))}function pf(t){for(;t===Ko;)Ko=_r[--vr],_r[vr]=null,Nl=_r[--vr],_r[vr]=null;for(;t===Ka;)Ka=Di[--Ni],Di[Ni]=null,$i=Di[--Ni],Di[Ni]=null,ji=Di[--Ni],Di[Ni]=null}function $m(t,i){Di[Ni++]=ji,Di[Ni++]=$i,Di[Ni++]=Ka,ji=i.id,$i=i.overflow,Ka=t}var Vn=null,un=null,wt=!1,Qa=null,Ui=!1,mf=Error(r(519));function Ja(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ul(wi(i,t)),mf}function e0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[cn]=t,i[Tn]=l,s){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(s=0;s<eo.length;s++)bt(eo[s],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":bt("invalid",i),Qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",i);break;case"textarea":bt("invalid",i),Hi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||__(i.textContent,s)?(l.popover!=null&&(bt("beforetoggle",i),bt("toggle",i)),l.onScroll!=null&&bt("scroll",i),l.onScrollEnd!=null&&bt("scrollend",i),l.onClick!=null&&(i.onclick=pa),i=!0):i=!1,i||Ja(t,!0)}function t0(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vn=Vn.return}}function yr(t){if(t!==Vn)return!1;if(!wt)return t0(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ld(t.type,t.memoizedProps)),s=!s),s&&un&&Ja(t),t0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=A_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=A_(t)}else i===27?(i=un,fs(t.type)?(t=Bd,Bd=null,un=t):un=i):un=Vn?Oi(t.stateNode.nextSibling):null;return!0}function ks(){un=Vn=null,wt=!1}function gf(){var t=Qa;return t!==null&&(ci===null?ci=t:ci.push.apply(ci,t),Qa=null),t}function Ul(t){Qa===null?Qa=[t]:Qa.push(t)}var _f=z(null),Vs=null,va=null;function ja(t,i,s){Re(_f,i._currentValue),i._currentValue=s}function ya(t){t._currentValue=_f.current,te(_f)}function vf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function yf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var V=0;V<i.length;V++)if(D.context===i[V]){d.lanes|=s,D=d.alternate,D!==null&&(D.lanes|=s),vf(d.return,s,t),l||(y=null);break e}d=D.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),vf(y,s,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function xr(t,i,s,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var D=u.type;gi(u.pendingProps.value,y.value)||(t!==null?t.push(D):t=[D])}}else if(u===Ce.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(so):t=[so])}u=u.return}t!==null&&yf(i,t,s,l),i.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!gi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xs(t){Vs=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return n0(Vs,t)}function Jo(t,i){return Vs===null&&Xs(t),n0(t,i)}function n0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},va===null){if(t===null)throw Error(r(308));va=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else va=va.next=i;return s}var sS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},rS=a.unstable_scheduleCallback,lS=a.unstable_NormalPriority,Rn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new sS,data:new Map,refCount:0}}function Ll(t){t.refCount--,t.refCount===0&&rS(lS,function(){t.controller.abort()})}var Ol=null,Sf=0,Sr=0,Mr=null;function oS(t,i){if(Ol===null){var s=Ol=[];Sf=0,Sr=bd(),Mr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sf++,i.then(i0,i0),i}function i0(){if(--Sf===0&&Ol!==null){Mr!==null&&(Mr.status="fulfilled");var t=Ol;Ol=null,Sr=0,Mr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function cS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var a0=B.S;B.S=function(t,i){Gg=Lt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oS(t,i),a0!==null&&a0(t,i)};var Ws=z(null);function Mf(){var t=Ws.current;return t!==null?t:ln.pooledCache}function jo(t,i){i===null?Re(Ws,Ws.current):Re(Ws,i.pool)}function s0(){var t=Mf();return t===null?null:{parent:Rn._currentValue,pool:t}}var Er=Error(r(460)),Ef=Error(r(474)),$o=Error(r(542)),ec={then:function(){}};function r0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function l0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(pa,pa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,c0(t),t;default:if(typeof i.status=="string")i.then(pa,pa);else{if(t=ln,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,c0(t),t}throw qs=i,Er}}function Ys(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(qs=s,Er):s}}var qs=null;function o0(){if(qs===null)throw Error(r(459));var t=qs;return qs=null,t}function c0(t){if(t===Er||t===$o)throw Error(r(483))}var br=null,Pl=0;function tc(t){var i=Pl;return Pl+=1,br===null&&(br=[]),l0(br,t,i)}function Il(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function nc(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function u0(t){function i(ne,q){if(t){var le=ne.deletions;le===null?(ne.deletions=[q],ne.flags|=16):le.push(q)}}function s(ne,q){if(!t)return null;for(;q!==null;)i(ne,q),q=q.sibling;return null}function l(ne){for(var q=new Map;ne!==null;)ne.key!==null?q.set(ne.key,ne):q.set(ne.index,ne),ne=ne.sibling;return q}function u(ne,q){return ne=ga(ne,q),ne.index=0,ne.sibling=null,ne}function d(ne,q,le){return ne.index=le,t?(le=ne.alternate,le!==null?(le=le.index,le<q?(ne.flags|=67108866,q):le):(ne.flags|=67108866,q)):(ne.flags|=1048576,q)}function y(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,q,le,Ee){return q===null||q.tag!==6?(q=ff(le,ne.mode,Ee),q.return=ne,q):(q=u(q,le),q.return=ne,q)}function V(ne,q,le,Ee){var rt=le.type;return rt===N?Me(ne,q,le.props.children,Ee,le.key):q!==null&&(q.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===A&&Ys(rt)===q.type)?(q=u(q,le.props),Il(q,le),q.return=ne,q):(q=Zo(le.type,le.key,le.props,null,ne.mode,Ee),Il(q,le),q.return=ne,q)}function oe(ne,q,le,Ee){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=df(le,ne.mode,Ee),q.return=ne,q):(q=u(q,le.children||[]),q.return=ne,q)}function Me(ne,q,le,Ee,rt){return q===null||q.tag!==7?(q=Gs(le,ne.mode,Ee,rt),q.return=ne,q):(q=u(q,le),q.return=ne,q)}function Ae(ne,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=ff(""+q,ne.mode,le),q.return=ne,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return le=Zo(q.type,q.key,q.props,null,ne.mode,le),Il(le,q),le.return=ne,le;case R:return q=df(q,ne.mode,le),q.return=ne,q;case A:return q=Ys(q),Ae(ne,q,le)}if(ie(q)||J(q))return q=Gs(q,ne.mode,le,null),q.return=ne,q;if(typeof q.then=="function")return Ae(ne,tc(q),le);if(q.$$typeof===I)return Ae(ne,Jo(ne,q),le);nc(ne,q)}return null}function he(ne,q,le,Ee){var rt=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return rt!==null?null:D(ne,q,""+le,Ee);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case E:return le.key===rt?V(ne,q,le,Ee):null;case R:return le.key===rt?oe(ne,q,le,Ee):null;case A:return le=Ys(le),he(ne,q,le,Ee)}if(ie(le)||J(le))return rt!==null?null:Me(ne,q,le,Ee,null);if(typeof le.then=="function")return he(ne,q,tc(le),Ee);if(le.$$typeof===I)return he(ne,q,Jo(ne,le),Ee);nc(ne,le)}return null}function ye(ne,q,le,Ee,rt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ne=ne.get(le)||null,D(q,ne,""+Ee,rt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case E:return ne=ne.get(Ee.key===null?le:Ee.key)||null,V(q,ne,Ee,rt);case R:return ne=ne.get(Ee.key===null?le:Ee.key)||null,oe(q,ne,Ee,rt);case A:return Ee=Ys(Ee),ye(ne,q,le,Ee,rt)}if(ie(Ee)||J(Ee))return ne=ne.get(le)||null,Me(q,ne,Ee,rt,null);if(typeof Ee.then=="function")return ye(ne,q,le,tc(Ee),rt);if(Ee.$$typeof===I)return ye(ne,q,le,Jo(q,Ee),rt);nc(q,Ee)}return null}function et(ne,q,le,Ee){for(var rt=null,It=null,tt=q,vt=q=0,Rt=null;tt!==null&&vt<le.length;vt++){tt.index>vt?(Rt=tt,tt=null):Rt=tt.sibling;var zt=he(ne,tt,le[vt],Ee);if(zt===null){tt===null&&(tt=Rt);break}t&&tt&&zt.alternate===null&&i(ne,tt),q=d(zt,q,vt),It===null?rt=zt:It.sibling=zt,It=zt,tt=Rt}if(vt===le.length)return s(ne,tt),wt&&_a(ne,vt),rt;if(tt===null){for(;vt<le.length;vt++)tt=Ae(ne,le[vt],Ee),tt!==null&&(q=d(tt,q,vt),It===null?rt=tt:It.sibling=tt,It=tt);return wt&&_a(ne,vt),rt}for(tt=l(tt);vt<le.length;vt++)Rt=ye(tt,ne,vt,le[vt],Ee),Rt!==null&&(t&&Rt.alternate!==null&&tt.delete(Rt.key===null?vt:Rt.key),q=d(Rt,q,vt),It===null?rt=Rt:It.sibling=Rt,It=Rt);return t&&tt.forEach(function(gs){return i(ne,gs)}),wt&&_a(ne,vt),rt}function ct(ne,q,le,Ee){if(le==null)throw Error(r(151));for(var rt=null,It=null,tt=q,vt=q=0,Rt=null,zt=le.next();tt!==null&&!zt.done;vt++,zt=le.next()){tt.index>vt?(Rt=tt,tt=null):Rt=tt.sibling;var gs=he(ne,tt,zt.value,Ee);if(gs===null){tt===null&&(tt=Rt);break}t&&tt&&gs.alternate===null&&i(ne,tt),q=d(gs,q,vt),It===null?rt=gs:It.sibling=gs,It=gs,tt=Rt}if(zt.done)return s(ne,tt),wt&&_a(ne,vt),rt;if(tt===null){for(;!zt.done;vt++,zt=le.next())zt=Ae(ne,zt.value,Ee),zt!==null&&(q=d(zt,q,vt),It===null?rt=zt:It.sibling=zt,It=zt);return wt&&_a(ne,vt),rt}for(tt=l(tt);!zt.done;vt++,zt=le.next())zt=ye(tt,ne,vt,zt.value,Ee),zt!==null&&(t&&zt.alternate!==null&&tt.delete(zt.key===null?vt:zt.key),q=d(zt,q,vt),It===null?rt=zt:It.sibling=zt,It=zt);return t&&tt.forEach(function(xM){return i(ne,xM)}),wt&&_a(ne,vt),rt}function en(ne,q,le,Ee){if(typeof le=="object"&&le!==null&&le.type===N&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case E:e:{for(var rt=le.key;q!==null;){if(q.key===rt){if(rt=le.type,rt===N){if(q.tag===7){s(ne,q.sibling),Ee=u(q,le.props.children),Ee.return=ne,ne=Ee;break e}}else if(q.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===A&&Ys(rt)===q.type){s(ne,q.sibling),Ee=u(q,le.props),Il(Ee,le),Ee.return=ne,ne=Ee;break e}s(ne,q);break}else i(ne,q);q=q.sibling}le.type===N?(Ee=Gs(le.props.children,ne.mode,Ee,le.key),Ee.return=ne,ne=Ee):(Ee=Zo(le.type,le.key,le.props,null,ne.mode,Ee),Il(Ee,le),Ee.return=ne,ne=Ee)}return y(ne);case R:e:{for(rt=le.key;q!==null;){if(q.key===rt)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){s(ne,q.sibling),Ee=u(q,le.children||[]),Ee.return=ne,ne=Ee;break e}else{s(ne,q);break}else i(ne,q);q=q.sibling}Ee=df(le,ne.mode,Ee),Ee.return=ne,ne=Ee}return y(ne);case A:return le=Ys(le),en(ne,q,le,Ee)}if(ie(le))return et(ne,q,le,Ee);if(J(le)){if(rt=J(le),typeof rt!="function")throw Error(r(150));return le=rt.call(le),ct(ne,q,le,Ee)}if(typeof le.then=="function")return en(ne,q,tc(le),Ee);if(le.$$typeof===I)return en(ne,q,Jo(ne,le),Ee);nc(ne,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,q!==null&&q.tag===6?(s(ne,q.sibling),Ee=u(q,le),Ee.return=ne,ne=Ee):(s(ne,q),Ee=ff(le,ne.mode,Ee),Ee.return=ne,ne=Ee),y(ne)):s(ne,q)}return function(ne,q,le,Ee){try{Pl=0;var rt=en(ne,q,le,Ee);return br=null,rt}catch(tt){if(tt===Er||tt===$o)throw tt;var It=_i(29,tt,null,ne.mode);return It.lanes=Ee,It.return=ne,It}finally{}}}var Zs=u0(!0),f0=u0(!1),$a=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=qo(t),Zm(t,null,s),i}return Yo(t,l,i,s),qo(t)}function zl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,G(t,s)}}function Af(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Rf=!1;function Bl(){if(Rf){var t=Mr;if(t!==null)throw t}}function Fl(t,i,s,l){Rf=!1;var u=t.updateQueue;$a=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var V=D,oe=V.next;V.next=null,y===null?d=oe:y.next=oe,y=V;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,D=Me.lastBaseUpdate,D!==y&&(D===null?Me.firstBaseUpdate=oe:D.next=oe,Me.lastBaseUpdate=V))}if(d!==null){var Ae=u.baseState;y=0,Me=oe=V=null,D=d;do{var he=D.lane&-536870913,ye=he!==D.lane;if(ye?(At&he)===he:(l&he)===he){he!==0&&he===Sr&&(Rf=!0),Me!==null&&(Me=Me.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var et=t,ct=D;he=i;var en=s;switch(ct.tag){case 1:if(et=ct.payload,typeof et=="function"){Ae=et.call(en,Ae,he);break e}Ae=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ct.payload,he=typeof et=="function"?et.call(en,Ae,he):et,he==null)break e;Ae=M({},Ae,he);break e;case 2:$a=!0}}he=D.callback,he!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[he]:ye.push(he))}else ye={lane:he,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Me===null?(oe=Me=ye,V=Ae):Me=Me.next=ye,y|=he;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Me===null&&(V=Ae),u.baseState=V,u.firstBaseUpdate=oe,u.lastBaseUpdate=Me,d===null&&(u.shared.lanes=0),rs|=y,t.lanes=y,t.memoizedState=Ae}}function d0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function h0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)d0(s[t],i)}var Tr=z(null),ic=z(0);function p0(t,i){t=Ca,Re(ic,t),Re(Tr,i),Ca=t|i.baseLanes}function Cf(){Re(ic,Ca),Re(Tr,Tr.current)}function wf(){Ca=ic.current,te(Tr),te(ic)}var vi=z(null),Li=null;function ns(t){var i=t.alternate;Re(En,En.current&1),Re(vi,t),Li===null&&(i===null||Tr.current!==null||i.memoizedState!==null)&&(Li=t)}function Df(t){Re(En,En.current),Re(vi,t),Li===null&&(Li=t)}function m0(t){t.tag===22?(Re(En,En.current),Re(vi,t),Li===null&&(Li=t)):is()}function is(){Re(En,En.current),Re(vi,vi.current)}function yi(t){te(vi),Li===t&&(Li=null),te(En)}var En=z(0);function ac(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Id(s)||zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,_t=null,jt=null,Cn=null,sc=!1,Ar=!1,Ks=!1,rc=0,Hl=0,Rr=null,uS=0;function Sn(){throw Error(r(321))}function Nf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!gi(t[s],i[s]))return!1;return!0}function Uf(t,i,s,l,u,d){return xa=d,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?j0:qf,Ks=!1,d=s(l,u),Ks=!1,Ar&&(d=_0(i,s,l,u)),g0(t),d}function g0(t){B.H=Vl;var i=jt!==null&&jt.next!==null;if(xa=0,Cn=jt=_t=null,sc=!1,Hl=0,Rr=null,i)throw Error(r(300));t===null||wn||(t=t.dependencies,t!==null&&Qo(t)&&(wn=!0))}function _0(t,i,s,l){_t=t;var u=0;do{if(Ar&&(Rr=null),Hl=0,Ar=!1,25<=u)throw Error(r(301));if(u+=1,Cn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=$0,d=i(s,l)}while(Ar);return d}function fS(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Gl(i):i,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Lf(){var t=rc!==0;return rc=0,t}function Of(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Pf(t){if(sc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}sc=!1}xa=0,Cn=jt=_t=null,Ar=!1,Hl=rc=0,Rr=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?_t.memoizedState=Cn=t:Cn=Cn.next=t,Cn}function bn(){if(jt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Cn===null?_t.memoizedState:Cn.next;if(i!==null)Cn=i,jt=t;else{if(t===null)throw _t.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Cn===null?_t.memoizedState=Cn=t:Cn=Cn.next=t}return Cn}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(t){var i=Hl;return Hl+=1,Rr===null&&(Rr=[]),t=l0(Rr,t,i),i=_t,(Cn===null?i.memoizedState:Cn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?j0:qf),t}function oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Gl(t);if(t.$$typeof===I)return Xn(t)}throw Error(r(438,String(t)))}function If(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=lc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Z;return i.index++,s}function Sa(t,i){return typeof i=="function"?i(t):i}function cc(t){var i=bn();return zf(i,jt,t)}function zf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var D=y=null,V=null,oe=i,Me=!1;do{var Ae=oe.lane&-536870913;if(Ae!==oe.lane?(At&Ae)===Ae:(xa&Ae)===Ae){var he=oe.revertLane;if(he===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ae===Sr&&(Me=!0);else if((xa&he)===he){oe=oe.next,he===Sr&&(Me=!0);continue}else Ae={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=Ae,y=d):V=V.next=Ae,_t.lanes|=he,rs|=he;Ae=oe.action,Ks&&s(d,Ae),d=oe.hasEagerState?oe.eagerState:s(d,Ae)}else he={lane:Ae,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=he,y=d):V=V.next=he,_t.lanes|=Ae,rs|=Ae;oe=oe.next}while(oe!==null&&oe!==i);if(V===null?y=d:V.next=D,!gi(d,t.memoizedState)&&(wn=!0,Me&&(s=Mr,s!==null)))throw s;t.memoizedState=d,t.baseState=y,t.baseQueue=V,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Bf(t){var i=bn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);gi(d,i.memoizedState)||(wn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function v0(t,i,s){var l=_t,u=bn(),d=wt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!gi((jt||u).memoizedState,s);if(y&&(u.memoizedState=s,wn=!0),u=u.queue,Gf(S0.bind(null,l,u,t),[t]),u.getSnapshot!==i||y||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,Cr(9,{destroy:void 0},x0.bind(null,l,u,s,i),null),ln===null)throw Error(r(349));d||(xa&127)!==0||y0(l,i,s)}return s}function y0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=lc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function x0(t,i,s,l){i.value=s,i.getSnapshot=l,M0(i)&&E0(t)}function S0(t,i,s){return s(function(){M0(i)&&E0(t)})}function M0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!gi(t,s)}catch{return!0}}function E0(t){var i=Hs(t,2);i!==null&&ui(i,t,2)}function Ff(t){var i=ti();if(typeof t=="function"){var s=t;if(t=s(),Ks){fe(!0);try{s()}finally{fe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i}function b0(t,i,s,l){return t.baseState=s,zf(t,jt,typeof l=="function"?l:Sa)}function dS(t,i,s,l,u){if(dc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,T0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function T0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=B.T,y={};B.T=y;try{var D=s(u,l),V=B.S;V!==null&&V(y,D),A0(t,i,D)}catch(oe){Hf(t,i,oe)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=s(u,l),A0(t,i,d)}catch(oe){Hf(t,i,oe)}}function A0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){R0(t,i,l)},function(l){return Hf(t,i,l)}):R0(t,i,s)}function R0(t,i,s){i.status="fulfilled",i.value=s,C0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,T0(t,s)))}function Hf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,C0(i),i=i.next;while(i!==l)}t.action=null}function C0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function w0(t,i){return i}function D0(t,i){if(wt){var s=ln.formState;if(s!==null){e:{var l=_t;if(wt){if(un){t:{for(var u=un,d=Ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=Oi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){un=Oi(u.nextSibling),l=u.data==="F!";break e}}Ja(l)}l=!1}l&&(i=s[0])}}return s=ti(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:w0,lastRenderedState:i},s.queue=l,s=K0.bind(null,_t,l),l.dispatch=s,l=Ff(!1),d=Yf.bind(null,_t,!1,l.queue),l=ti(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=dS.bind(null,_t,u,d,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function N0(t){var i=bn();return U0(i,jt,t)}function U0(t,i,s){if(i=zf(t,i,w0)[0],t=cc(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Gl(i)}catch(y){throw y===Er?$o:y}else l=i;i=bn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,Cr(9,{destroy:void 0},hS.bind(null,u,s),null)),[l,d,t]}function hS(t,i){t.action=i}function L0(t){var i=bn(),s=jt;if(s!==null)return U0(i,s,t);bn(),i=i.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Cr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=lc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function O0(){return bn().memoizedState}function uc(t,i,s,l){var u=ti();_t.flags|=t,u.memoizedState=Cr(1|i,{destroy:void 0},s,l===void 0?null:l)}function fc(t,i,s,l){var u=bn();l=l===void 0?null:l;var d=u.memoizedState.inst;jt!==null&&l!==null&&Nf(l,jt.memoizedState.deps)?u.memoizedState=Cr(i,d,s,l):(_t.flags|=t,u.memoizedState=Cr(1|i,d,s,l))}function P0(t,i){uc(8390656,8,t,i)}function Gf(t,i){fc(2048,8,t,i)}function pS(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=lc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function I0(t){var i=bn().memoizedState;return pS({ref:i,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function z0(t,i){return fc(4,2,t,i)}function B0(t,i){return fc(4,4,t,i)}function F0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function H0(t,i,s){s=s!=null?s.concat([t]):null,fc(4,4,F0.bind(null,i,t),s)}function kf(){}function G0(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Nf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function k0(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Nf(i,l[1]))return l[0];if(l=t(),Ks){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[l,i],l}function Vf(t,i,s){return s===void 0||(xa&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Vg(),_t.lanes|=t,rs|=t,s)}function V0(t,i,s,l){return gi(s,i)?s:Tr.current!==null?(t=Vf(t,s,l),gi(t,i)||(wn=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(At&261930)===0?(wn=!0,t.memoizedState=s):(t=Vg(),_t.lanes|=t,rs|=t,i)}function X0(t,i,s,l,u){var d=X.p;X.p=d!==0&&8>d?d:8;var y=B.T,D={};B.T=D,Yf(t,!1,i,s);try{var V=u(),oe=B.S;if(oe!==null&&oe(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Me=cS(V,l);kl(t,i,Me,Mi(t))}else kl(t,i,l,Mi(t))}catch(Ae){kl(t,i,{then:function(){},status:"rejected",reason:Ae},Mi())}finally{X.p=d,y!==null&&D.types!==null&&(y.types=D.types),B.T=y}}function mS(){}function Xf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=W0(t).queue;X0(t,u,i,re,s===null?mS:function(){return Y0(t),s(l)})}function W0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:re},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Y0(t){var i=W0(t);i.next===null&&(i=t.alternate.memoizedState),kl(t,i.next.queue,{},Mi())}function Wf(){return Xn(so)}function q0(){return bn().memoizedState}function Z0(){return bn().memoizedState}function gS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Mi();t=es(s);var l=ts(i,t,s);l!==null&&(ui(l,i,s),zl(l,i,s)),i={cache:xf()},t.payload=i;return}i=i.return}}function _S(t,i,s){var l=Mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dc(t)?Q0(i,s):(s=cf(t,i,s,l),s!==null&&(ui(s,t,l),J0(s,i,l)))}function K0(t,i,s){var l=Mi();kl(t,i,s,l)}function kl(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(dc(t))Q0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,D=d(y,s);if(u.hasEagerState=!0,u.eagerState=D,gi(D,y))return Yo(t,i,u,0),ln===null&&Wo(),!1}catch{}finally{}if(s=cf(t,i,u,l),s!==null)return ui(s,t,l),J0(s,i,l),!0}return!1}function Yf(t,i,s,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dc(t)){if(i)throw Error(r(479))}else i=cf(t,s,l,2),i!==null&&ui(i,t,2)}function dc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function Q0(t,i){Ar=sc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function J0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,G(t,s)}}var Vl={readContext:Xn,use:oc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};Vl.useEffectEvent=Sn;var j0={readContext:Xn,use:oc,useCallback:function(t,i){return ti().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:P0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,uc(4194308,4,F0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return uc(4194308,4,t,i)},useInsertionEffect:function(t,i){uc(4,2,t,i)},useMemo:function(t,i){var s=ti();i=i===void 0?null:i;var l=t();if(Ks){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ti();if(s!==void 0){var u=s(i);if(Ks){fe(!0);try{s(i)}finally{fe(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=_S.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=ti();return t={current:t},i.memoizedState=t},useState:function(t){t=Ff(t);var i=t.queue,s=K0.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:kf,useDeferredValue:function(t,i){var s=ti();return Vf(s,t,i)},useTransition:function(){var t=Ff(!1);return t=X0.bind(null,_t,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,u=ti();if(wt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),ln===null)throw Error(r(349));(At&127)!==0||y0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,P0(S0.bind(null,l,d,t),[t]),l.flags|=2048,Cr(9,{destroy:void 0},x0.bind(null,l,d,s,i),null),s},useId:function(){var t=ti(),i=ln.identifierPrefix;if(wt){var s=$i,l=ji;s=(l&~(1<<32-De(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=rc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=uS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Wf,useFormState:D0,useActionState:D0,useOptimistic:function(t){var i=ti();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Yf.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:If,useCacheRefresh:function(){return ti().memoizedState=gS.bind(null,_t)},useEffectEvent:function(t){var i=ti(),s={impl:t};return i.memoizedState=s,function(){if((Bt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},qf={readContext:Xn,use:oc,useCallback:G0,useContext:Xn,useEffect:Gf,useImperativeHandle:H0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:k0,useReducer:cc,useRef:O0,useState:function(){return cc(Sa)},useDebugValue:kf,useDeferredValue:function(t,i){var s=bn();return V0(s,jt.memoizedState,t,i)},useTransition:function(){var t=cc(Sa)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Gl(t),i]},useSyncExternalStore:v0,useId:q0,useHostTransitionStatus:Wf,useFormState:N0,useActionState:N0,useOptimistic:function(t,i){var s=bn();return b0(s,jt,t,i)},useMemoCache:If,useCacheRefresh:Z0};qf.useEffectEvent=I0;var $0={readContext:Xn,use:oc,useCallback:G0,useContext:Xn,useEffect:Gf,useImperativeHandle:H0,useInsertionEffect:z0,useLayoutEffect:B0,useMemo:k0,useReducer:Bf,useRef:O0,useState:function(){return Bf(Sa)},useDebugValue:kf,useDeferredValue:function(t,i){var s=bn();return jt===null?Vf(s,t,i):V0(s,jt.memoizedState,t,i)},useTransition:function(){var t=Bf(Sa)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Gl(t),i]},useSyncExternalStore:v0,useId:q0,useHostTransitionStatus:Wf,useFormState:L0,useActionState:L0,useOptimistic:function(t,i){var s=bn();return jt!==null?b0(s,jt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:If,useCacheRefresh:Z0};$0.useEffectEvent=I0;function Zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:M({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Mi(),u=es(l);u.payload=i,s!=null&&(u.callback=s),i=ts(t,u,l),i!==null&&(ui(i,t,l),zl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Mi(),u=es(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ts(t,u,l),i!==null&&(ui(i,t,l),zl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Mi(),l=es(s);l.tag=2,i!=null&&(l.callback=i),i=ts(t,l,s),i!==null&&(ui(i,t,s),zl(i,t,s))}};function eg(t,i,s,l,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!wl(s,l)||!wl(u,d):!0}function tg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Kf.enqueueReplaceState(i,i.state,null)}function Qs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=M({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function ng(t){Xo(t)}function ig(t){console.error(t)}function ag(t){Xo(t)}function hc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function sg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qf(t,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){hc(t,i)},s}function rg(t){return t=es(t),t.tag=3,t}function lg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){sg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){sg(i,s,l),typeof u!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function vS(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&xr(i,s,u,!0),s=vi.current,s!==null){switch(s.tag){case 31:case 13:return Li===null?Tc():s.alternate===null&&Mn===0&&(Mn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===ec?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Sd(t,l,u)),!1;case 22:return s.flags|=65536,l===ec?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Sd(t,l,u)),!1}throw Error(r(435,s.tag))}return Sd(t,l,u),Tc(),!1}if(wt)return i=vi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==mf&&(t=Error(r(422),{cause:l}),Ul(wi(t,s)))):(l!==mf&&(i=Error(r(423),{cause:l}),Ul(wi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=wi(l,s),u=Qf(t.stateNode,l,u),Af(t,u),Mn!==4&&(Mn=2)),!1;var d=Error(r(520),{cause:l});if(d=wi(d,s),Jl===null?Jl=[d]:Jl.push(d),Mn!==4&&(Mn=2),i===null)return!0;l=wi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Qf(s.stateNode,l,t),Af(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ls===null||!ls.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=rg(u),lg(u,t,s,l),Af(s,u),!1}s=s.return}while(s!==null);return!1}var Jf=Error(r(461)),wn=!1;function Wn(t,i,s,l){i.child=t===null?f0(i,null,s,l):Zs(i,t.child,s,l)}function og(t,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var D in l)D!=="ref"&&(y[D]=l[D])}else y=l;return Xs(i),l=Uf(t,i,s,y,d,u),D=Lf(),t!==null&&!wn?(Of(t,i,u),Ma(t,i,u)):(wt&&D&&hf(i),i.flags|=1,Wn(t,i,l,u),i.child)}function cg(t,i,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!uf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,ug(t,i,d,l,u)):(t=Zo(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!sd(t,u)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:wl,s(y,l)&&t.ref===i.ref)return Ma(t,i,u)}return i.flags|=1,t=ga(d,l),t.ref=i.ref,t.return=i,i.child=t}function ug(t,i,s,l,u){if(t!==null){var d=t.memoizedProps;if(wl(d,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=d,sd(t,u))(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Ma(t,i,u)}return jf(t,i,s,l,u)}function fg(t,i,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return dg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&jo(i,d!==null?d.cachePool:null),d!==null?p0(i,d):Cf(),m0(i);else return l=i.lanes=536870912,dg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(jo(i,d.cachePool),p0(i,d),is(),i.memoizedState=null):(t!==null&&jo(i,null),Cf(),is());return Wn(t,i,u,s),i.child}function Xl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function dg(t,i,s,l,u){var d=Mf();return d=d===null?null:{parent:Rn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&jo(i,null),Cf(),m0(i),t!==null&&xr(t,i,l,!0),i.childLanes=u,null}function pc(t,i){return i=gc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function hg(t,i,s){return Zs(i,t.child,null,s),t=pc(i,i.pendingProps),t.flags|=2,yi(i),i.memoizedState=null,t}function yS(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=pc(i,l),i.lanes=536870912,Xl(null,t);if(Df(i),(t=un)?(t=T_(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},s=Qm(t),s.return=i,i.child=s,Vn=i,un=null)):t=null,t===null)throw Ja(i);return i.lanes=536870912,null}return pc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Df(i),u)if(i.flags&256)i.flags&=-257,i=hg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(wn||xr(t,i,s,!1),u=(s&t.childLanes)!==0,wn||u){if(l=ln,l!==null&&(y=Ne(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Hs(t,y),ui(l,t,y),Jf;Tc(),i=hg(t,i,s)}else t=d.treeContext,un=Oi(y.nextSibling),Vn=i,wt=!0,Qa=null,Ui=!1,t!==null&&$m(i,t),i=pc(i,l),i.flags|=4096;return i}return t=ga(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function mc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function jf(t,i,s,l,u){return Xs(i),s=Uf(t,i,s,l,void 0,u),l=Lf(),t!==null&&!wn?(Of(t,i,u),Ma(t,i,u)):(wt&&l&&hf(i),i.flags|=1,Wn(t,i,s,u),i.child)}function pg(t,i,s,l,u,d){return Xs(i),i.updateQueue=null,s=_0(i,l,s,u),g0(t),l=Lf(),t!==null&&!wn?(Of(t,i,d),Ma(t,i,d)):(wt&&l&&hf(i),i.flags|=1,Wn(t,i,s,d),i.child)}function mg(t,i,s,l,u){if(Xs(i),i.stateNode===null){var d=gr,y=s.contextType;typeof y=="object"&&y!==null&&(d=Xn(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},bf(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Xn(y):gr,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Zf(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Kf.enqueueReplaceState(d,d.state,null),Fl(i,l,d,u),Bl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var D=i.memoizedProps,V=Qs(s,D);d.props=V;var oe=d.context,Me=s.contextType;y=gr,typeof Me=="object"&&Me!==null&&(y=Xn(Me));var Ae=s.getDerivedStateFromProps;Me=typeof Ae=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||oe!==y)&&tg(i,d,l,y),$a=!1;var he=i.memoizedState;d.state=he,Fl(i,l,d,u),Bl(),oe=i.memoizedState,D||he!==oe||$a?(typeof Ae=="function"&&(Zf(i,s,Ae,l),oe=i.memoizedState),(V=$a||eg(i,s,V,l,he,oe,y))?(Me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),d.props=l,d.state=oe,d.context=y,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Tf(t,i),y=i.memoizedProps,Me=Qs(s,y),d.props=Me,Ae=i.pendingProps,he=d.context,oe=s.contextType,V=gr,typeof oe=="object"&&oe!==null&&(V=Xn(oe)),D=s.getDerivedStateFromProps,(oe=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Ae||he!==V)&&tg(i,d,l,V),$a=!1,he=i.memoizedState,d.state=he,Fl(i,l,d,u),Bl();var ye=i.memoizedState;y!==Ae||he!==ye||$a||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof D=="function"&&(Zf(i,s,D,l),ye=i.memoizedState),(Me=$a||eg(i,s,Me,l,he,ye,V)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(oe||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ye,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ye,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ye),d.props=l,d.state=ye,d.context=V,l=Me):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,mc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Zs(i,t.child,null,u),i.child=Zs(i,null,s,u)):Wn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=Ma(t,i,u),t}function gg(t,i,s,l){return ks(),i.flags|=256,Wn(t,i,s,l),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:s0()}}function td(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Si),t}function _g(t,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(u?ns(i):is(),(t=un)?(t=T_(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},s=Qm(t),s.return=i,i.child=s,Vn=i,un=null)):t=null,t===null)throw Ja(i);return zd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,u?(is(),u=i.mode,D=gc({mode:"hidden",children:D},u),l=Gs(l,u,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,y,s),i.memoizedState=$f,Xl(null,l)):(ns(i),nd(i,D))}var V=t.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(d)i.flags&256?(ns(i),i.flags&=-257,i=id(t,i,s)):i.memoizedState!==null?(is(),i.child=t.child,i.flags|=128,i=null):(is(),D=l.fallback,u=i.mode,l=gc({mode:"visible",children:l.children},u),D=Gs(D,u,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,Zs(i,t.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,y,s),i.memoizedState=$f,i=Xl(null,l));else if(ns(i),zd(D)){if(y=D.nextSibling&&D.nextSibling.dataset,y)var oe=y.dgst;y=oe,l=Error(r(419)),l.stack="",l.digest=y,Ul({value:l,source:null,stack:null}),i=id(t,i,s)}else if(wn||xr(t,i,s,!1),y=(s&t.childLanes)!==0,wn||y){if(y=ln,y!==null&&(l=Ne(y,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Hs(t,l),ui(y,t,l),Jf;Id(D)||Tc(),i=id(t,i,s)}else Id(D)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,un=Oi(D.nextSibling),Vn=i,wt=!0,Qa=null,Ui=!1,t!==null&&$m(i,t),i=nd(i,l.children),i.flags|=4096);return i}return u?(is(),D=l.fallback,u=i.mode,V=t.child,oe=V.sibling,l=ga(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?D=ga(oe,D):(D=Gs(D,u,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,Xl(null,l),l=i.child,D=t.child.memoizedState,D===null?D=ed(s):(u=D.cachePool,u!==null?(V=Rn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=s0(),D={baseLanes:D.baseLanes|s,cachePool:u}),l.memoizedState=D,l.childLanes=td(t,y,s),i.memoizedState=$f,Xl(t.child,l)):(ns(i),s=t.child,t=s.sibling,s=ga(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function nd(t,i){return i=gc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function gc(t,i){return t=_i(22,t,null,i),t.lanes=0,t}function id(t,i,s){return Zs(i,t.child,null,s),t=nd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function vg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vf(t.return,i,s)}function ad(t,i,s,l,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=u,y.treeForkCount=d)}function yg(t,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var y=En.current,D=(y&2)!==0;if(D?(y=y&1|2,i.flags|=128):y&=1,Re(En,y),Wn(t,i,l,s),l=wt?Nl:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,s,i);else if(t.tag===19)vg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&ac(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),ad(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&ac(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}ad(i,!0,s,null,d,l);break;case"together":ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(xr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ga(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ga(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function xS(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),ja(i,Rn,t.memoizedState.cache),ks();break;case 27:case 5:it(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Df(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ns(i),i.flags|=128,null):(s&i.child.childLanes)!==0?_g(t,i,s):(ns(i),t=Ma(t,i,s),t!==null?t.sibling:null);ns(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(xr(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return yg(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(En,En.current),l)break;return null;case 22:return i.lanes=0,fg(t,i,s,i.pendingProps);case 24:ja(i,Rn,t.memoizedState.cache)}return Ma(t,i,s)}function xg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)wn=!0;else{if(!sd(t,s)&&(i.flags&128)===0)return wn=!1,xS(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,wt&&(i.flags&1048576)!==0&&jm(i,Nl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ys(i.elementType),i.type=t,typeof t=="function")uf(t)?(l=Qs(t,l),i.tag=1,i=mg(null,i,t,l,s)):(i.tag=0,i=jf(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===S){i.tag=11,i=og(null,i,t,l,s);break e}else if(u===F){i.tag=14,i=cg(null,i,t,l,s);break e}}throw i=pe(t)||t,Error(r(306,i,""))}}return i;case 0:return jf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Qs(l,i.pendingProps),mg(t,i,l,u,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Tf(t,i),Fl(i,l,null,s);var y=i.memoizedState;if(l=y.cache,ja(i,Rn,l),l!==d.cache&&yf(i,[Rn],s,!0),Bl(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=gg(t,i,l,s);break e}else if(l!==u){u=wi(Error(r(424)),i),Ul(u),i=gg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(un=Oi(t.firstChild),Vn=i,wt=!0,Qa=null,Ui=!0,s=f0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ks(),l===u){i=Ma(t,i,s);break e}Wn(t,i,l,s)}i=i.child}return i;case 26:return mc(t,i),t===null?(s=N_(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,l=Uc(se.current).createElement(s),l[cn]=i,l[Tn]=t,Yn(l,s,t),An(l),i.stateNode=l):i.memoizedState=N_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return it(i),t===null&&wt&&(l=i.stateNode=C_(i.type,i.pendingProps,se.current),Vn=i,Ui=!0,u=un,fs(i.type)?(Bd=u,un=Oi(l.firstChild)):un=u),Wn(t,i,i.pendingProps.children,s),mc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((u=l=un)&&(l=QS(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,Vn=i,un=Oi(l.firstChild),Ui=!1,u=!0):u=!1),u||Ja(i)),it(i),u=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Ld(u,d)?l=null:y!==null&&Ld(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=Uf(t,i,fS,null,null,s),so._currentValue=u),mc(t,i),Wn(t,i,l,s),i.child;case 6:return t===null&&wt&&((t=s=un)&&(s=JS(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,Vn=i,un=null,t=!0):t=!1),t||Ja(i)),null;case 13:return _g(t,i,s);case 4:return be(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Zs(i,null,l,s):Wn(t,i,l,s),i.child;case 11:return og(t,i,i.type,i.pendingProps,s);case 7:return Wn(t,i,i.pendingProps,s),i.child;case 8:return Wn(t,i,i.pendingProps.children,s),i.child;case 12:return Wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),Wn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Xs(i),u=Xn(u),l=l(u),i.flags|=1,Wn(t,i,l,s),i.child;case 14:return cg(t,i,i.type,i.pendingProps,s);case 15:return ug(t,i,i.type,i.pendingProps,s);case 19:return yg(t,i,s);case 31:return yS(t,i,s);case 22:return fg(t,i,s,i.pendingProps);case 24:return Xs(i),l=Xn(Rn),t===null?(u=Mf(),u===null&&(u=ln,d=xf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},bf(i),ja(i,Rn,u)):((t.lanes&s)!==0&&(Tf(t,i),Fl(i,null,null,s),Bl()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ja(i,Rn,l)):(l=d.cache,ja(i,Rn,l),l!==u.cache&&yf(i,[Rn],s,!0))),Wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ea(t){t.flags|=4}function rd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(qg())t.flags|=8192;else throw qs=ec,Ef}else t.flags&=-16777217}function Sg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(i))if(qg())t.flags|=8192;else throw qs=ec,Ef}function _c(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,Ur|=i)}function Wl(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function SS(t,i,s){var l=i.pendingProps;switch(pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return fn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ya(Rn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(yr(i)?Ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gf())),fn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(Ea(i),d!==null?(fn(i),Sg(i,d)):(fn(i),rd(i,u,null,l,s))):d?d!==t.memoizedState?(Ea(i),fn(i),Sg(i,d)):(fn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ea(i),fn(i),rd(i,u,t,l,s)),null;case 27:if(Ye(i),s=se.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return fn(i),null}t=Pe.current,yr(i)?e0(i):(t=C_(u,l,s),i.stateNode=t,Ea(i))}return fn(i),null;case 5:if(Ye(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return fn(i),null}if(d=Pe.current,yr(i))e0(i);else{var y=Uc(se.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}d[cn]=i,d[Tn]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(Yn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ea(i)}}return fn(i),rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ea(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=se.current,yr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=Vn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[cn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||__(t.nodeValue,s)),t||Ja(i,!0)}else t=Uc(t).createTextNode(l),t[cn]=i,i.stateNode=t}return fn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=yr(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),t=!1}else s=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(yi(i),i):(yi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return fn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=yr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),u=!1}else u=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(yi(i),i):(yi(i),null)}return yi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),_c(i,i.updateQueue),fn(i),null);case 4:return Be(),t===null&&Cd(i.stateNode.containerInfo),fn(i),null;case 10:return ya(i.type),fn(i),null;case 19:if(te(En),l=i.memoizedState,l===null)return fn(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Wl(l,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=ac(t),d!==null){for(i.flags|=128,Wl(l,!1),t=d.updateQueue,i.updateQueue=t,_c(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Km(s,t),s=s.sibling;return Re(En,En.current&1|2),wt&&_a(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Lt()>Mc&&(i.flags|=128,u=!0,Wl(l,!1),i.lanes=4194304)}else{if(!u)if(t=ac(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,_c(i,t),Wl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!wt)return fn(i),null}else 2*Lt()-l.renderingStartTime>Mc&&s!==536870912&&(i.flags|=128,u=!0,Wl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Lt(),t.sibling=null,s=En.current,Re(En,u?s&1|2:s&1),wt&&_a(i,l.treeForkCount),t):(fn(i),null);case 22:case 23:return yi(i),wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),s=i.updateQueue,s!==null&&_c(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&te(Ws),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ya(Rn),fn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function MS(t,i){switch(pf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ya(Rn),Be(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ye(i),null;case 31:if(i.memoizedState!==null){if(yi(i),i.alternate===null)throw Error(r(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(yi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return te(En),null;case 4:return Be(),null;case 10:return ya(i.type),null;case 22:case 23:return yi(i),wf(),t!==null&&te(Ws),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ya(Rn),null;case 25:return null;default:return null}}function Mg(t,i){switch(pf(i),i.tag){case 3:ya(Rn),Be();break;case 26:case 27:case 5:Ye(i);break;case 4:Be();break;case 31:i.memoizedState!==null&&yi(i);break;case 13:yi(i);break;case 19:te(En);break;case 10:ya(i.type);break;case 22:case 23:yi(i),wf(),t!==null&&te(Ws);break;case 24:ya(Rn)}}function Yl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==u)}}catch(D){qt(i,i.return,D)}}function as(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var y=l.inst,D=y.destroy;if(D!==void 0){y.destroy=void 0,u=i;var V=s,oe=D;try{oe()}catch(Me){qt(u,V,Me)}}}l=l.next}while(l!==d)}}catch(Me){qt(i,i.return,Me)}}function Eg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{h0(i,s)}catch(l){qt(t,t.return,l)}}}function bg(t,i,s){s.props=Qs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function ql(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){qt(t,i,u)}}function ea(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){qt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){qt(t,i,u)}else s.current=null}function Tg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){qt(t,t.return,u)}}function ld(t,i,s){try{var l=t.stateNode;XS(l,t.type,s,i),l[Tn]=i}catch(u){qt(t,t.return,u)}}function Ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fs(t.type)||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(cd(t,i,s),t=t.sibling;t!==null;)cd(t,i,s),t=t.sibling}function vc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(vc(t,i,s),t=t.sibling;t!==null;)vc(t,i,s),t=t.sibling}function Rg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Yn(i,l,s),i[cn]=t,i[Tn]=s}catch(d){qt(t,t.return,d)}}var ba=!1,Dn=!1,ud=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function ES(t,i){if(t=t.containerInfo,Nd=Fc,t=Hm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var y=0,D=-1,V=-1,oe=0,Me=0,Ae=t,he=null;t:for(;;){for(var ye;Ae!==s||u!==0&&Ae.nodeType!==3||(D=y+u),Ae!==d||l!==0&&Ae.nodeType!==3||(V=y+l),Ae.nodeType===3&&(y+=Ae.nodeValue.length),(ye=Ae.firstChild)!==null;)he=Ae,Ae=ye;for(;;){if(Ae===t)break t;if(he===s&&++oe===u&&(D=y),he===d&&++Me===l&&(V=y),(ye=Ae.nextSibling)!==null)break;Ae=he,he=Ae.parentNode}Ae=ye}s=D===-1||V===-1?null:{start:D,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ud={focusedElem:t,selectionRange:s},Fc=!1,Bn=i;Bn!==null;)if(i=Bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Bn=t;else for(;Bn!==null;){switch(i=Bn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var et=Qs(s.type,u);t=l.getSnapshotBeforeUpdate(et,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){qt(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Pd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Bn=t;break}Bn=i.return}}function wg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Aa(t,s),l&4&&Yl(5,s);break;case 1:if(Aa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){qt(s,s.return,y)}else{var u=Qs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){qt(s,s.return,y)}}l&64&&Eg(s),l&512&&ql(s,s.return);break;case 3:if(Aa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{h0(t,i)}catch(y){qt(s,s.return,y)}}break;case 27:i===null&&l&4&&Rg(s);case 26:case 5:Aa(t,s),i===null&&l&4&&Tg(s),l&512&&ql(s,s.return);break;case 12:Aa(t,s);break;case 31:Aa(t,s),l&4&&Ug(t,s);break;case 13:Aa(t,s),l&4&&Lg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=US.bind(null,s),jS(t,s))));break;case 22:if(l=s.memoizedState!==null||ba,!l){i=i!==null&&i.memoizedState!==null||Dn,u=ba;var d=Dn;ba=l,(Dn=i)&&!d?Ra(t,s,(s.subtreeFlags&8772)!==0):Aa(t,s),ba=u,Dn=d}break;case 30:break;default:Aa(t,s)}}function Dg(t){var i=t.alternate;i!==null&&(t.alternate=null,Dg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,ri=!1;function Ta(t,i,s){for(s=s.child;s!==null;)Ng(t,i,s),s=s.sibling}function Ng(t,i,s){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount($,s)}catch{}switch(s.tag){case 26:Dn||ea(s,i),Ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Dn||ea(s,i);var l=gn,u=ri;fs(s.type)&&(gn=s.stateNode,ri=!1),Ta(t,i,s),no(s.stateNode),gn=l,ri=u;break;case 5:Dn||ea(s,i);case 6:if(l=gn,u=ri,gn=null,Ta(t,i,s),gn=l,ri=u,gn!==null)if(ri)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(d){qt(s,i,d)}else try{gn.removeChild(s.stateNode)}catch(d){qt(s,i,d)}break;case 18:gn!==null&&(ri?(t=gn,E_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Hr(t)):E_(gn,s.stateNode));break;case 4:l=gn,u=ri,gn=s.stateNode.containerInfo,ri=!0,Ta(t,i,s),gn=l,ri=u;break;case 0:case 11:case 14:case 15:as(2,s,i),Dn||as(4,s,i),Ta(t,i,s);break;case 1:Dn||(ea(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&bg(s,i,l)),Ta(t,i,s);break;case 21:Ta(t,i,s);break;case 22:Dn=(l=Dn)||s.memoizedState!==null,Ta(t,i,s),Dn=l;break;default:Ta(t,i,s)}}function Ug(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hr(t)}catch(s){qt(i,i.return,s)}}}function Lg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hr(t)}catch(s){qt(i,i.return,s)}}function bS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Cg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Cg),i;default:throw Error(r(435,t.tag))}}function yc(t,i){var s=bS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=LS.bind(null,t,l);l.then(u,u)}})}function li(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,y=i,D=y;e:for(;D!==null;){switch(D.tag){case 27:if(fs(D.type)){gn=D.stateNode,ri=!1;break e}break;case 5:gn=D.stateNode,ri=!1;break e;case 3:case 4:gn=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(gn===null)throw Error(r(160));Ng(d,y,u),gn=null,ri=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Og(i,t),i=i.sibling}var Vi=null;function Og(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:li(i,t),oi(t),l&4&&(as(3,t,t.return),Yl(3,t),as(5,t,t.return));break;case 1:li(i,t),oi(t),l&512&&(Dn||s===null||ea(s,s.return)),l&64&&ba&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Vi;if(li(i,t),oi(t),l&512&&(Dn||s===null||ea(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Xa]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Yn(d,l,s),d[cn]=t,An(d),l=d;break e;case"link":var y=O_("link","href",u).get(l+(s.href||""));if(y){for(var D=0;D<y.length;D++)if(d=y[D],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(D,1);break t}}d=u.createElement(l),Yn(d,l,s),u.head.appendChild(d);break;case"meta":if(y=O_("meta","content",u).get(l+(s.content||""))){for(D=0;D<y.length;D++)if(d=y[D],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(D,1);break t}}d=u.createElement(l),Yn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[cn]=t,An(d),l=d}t.stateNode=l}else P_(u,t.type,t.stateNode);else t.stateNode=L_(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?P_(u,t.type,t.stateNode):L_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ld(t,t.memoizedProps,s.memoizedProps)}break;case 27:li(i,t),oi(t),l&512&&(Dn||s===null||ea(s,s.return)),s!==null&&l&4&&ld(t,t.memoizedProps,s.memoizedProps);break;case 5:if(li(i,t),oi(t),l&512&&(Dn||s===null||ea(s,s.return)),t.flags&32){u=t.stateNode;try{mi(u,"")}catch(et){qt(t,t.return,et)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,ld(t,u,s!==null?s.memoizedProps:u)),l&1024&&(ud=!0);break;case 6:if(li(i,t),oi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(et){qt(t,t.return,et)}}break;case 3:if(Pc=null,u=Vi,Vi=Lc(i.containerInfo),li(i,t),Vi=u,oi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Hr(i.containerInfo)}catch(et){qt(t,t.return,et)}ud&&(ud=!1,Pg(t));break;case 4:l=Vi,Vi=Lc(t.stateNode.containerInfo),li(i,t),oi(t),Vi=l;break;case 12:li(i,t),oi(t);break;case 31:li(i,t),oi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:li(i,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Sc=Lt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:u=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=ba,Me=Dn;if(ba=oe||u,Dn=Me||V,li(i,t),Dn=Me,ba=oe,oi(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||V||ba||Dn||Js(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{D=V.stateNode;var Ae=V.memoizedProps.style,he=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;D.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(et){qt(V,V.return,et)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(et){qt(V,V.return,et)}}}else if(i.tag===18){if(s===null){V=i;try{var ye=V.stateNode;u?b_(ye,!0):b_(V.stateNode,!1)}catch(et){qt(V,V.return,et)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:li(i,t),oi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:li(i,t),oi(t)}}function oi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Ag(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=od(t);vc(t,d,u);break;case 5:var y=s.stateNode;s.flags&32&&(mi(y,""),s.flags&=-33);var D=od(t);vc(t,D,y);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=od(t);cd(t,oe,V);break;default:throw Error(r(161))}}catch(Me){qt(t,t.return,Me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Pg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Pg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Aa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)wg(t,i.alternate,i),i=i.sibling}function Js(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:as(4,i,i.return),Js(i);break;case 1:ea(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&bg(i,i.return,s),Js(i);break;case 27:no(i.stateNode);case 26:case 5:ea(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}t=t.sibling}}function Ra(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ra(u,d,s),Yl(4,d);break;case 1:if(Ra(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){qt(l,l.return,oe)}if(l=d,u=l.updateQueue,u!==null){var D=l.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)d0(V[u],D)}catch(oe){qt(l,l.return,oe)}}s&&y&64&&Eg(d),ql(d,d.return);break;case 27:Rg(d);case 26:case 5:Ra(u,d,s),s&&l===null&&y&4&&Tg(d),ql(d,d.return);break;case 12:Ra(u,d,s);break;case 31:Ra(u,d,s),s&&y&4&&Ug(u,d);break;case 13:Ra(u,d,s),s&&y&4&&Lg(u,d);break;case 22:d.memoizedState===null&&Ra(u,d,s),ql(d,d.return);break;case 30:break;default:Ra(u,d,s)}i=i.sibling}}function fd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ll(s))}function dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ll(t))}function Xi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ig(t,i,s,l),i=i.sibling}function Ig(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i,s,l),u&2048&&Yl(9,i);break;case 1:Xi(t,i,s,l);break;case 3:Xi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ll(t)));break;case 12:if(u&2048){Xi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,D=d.onPostCommit;typeof D=="function"&&D(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(i,i.return,V)}}else Xi(t,i,s,l);break;case 31:Xi(t,i,s,l);break;case 13:Xi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Xi(t,i,s,l):Zl(t,i):d._visibility&2?Xi(t,i,s,l):(d._visibility|=2,wr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&fd(y,i);break;case 24:Xi(t,i,s,l),u&2048&&dd(i.alternate,i);break;default:Xi(t,i,s,l)}}function wr(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,D=s,V=l,oe=y.flags;switch(y.tag){case 0:case 11:case 15:wr(d,y,D,V,u),Yl(8,y);break;case 23:break;case 22:var Me=y.stateNode;y.memoizedState!==null?Me._visibility&2?wr(d,y,D,V,u):Zl(d,y):(Me._visibility|=2,wr(d,y,D,V,u)),u&&oe&2048&&fd(y.alternate,y);break;case 24:wr(d,y,D,V,u),u&&oe&2048&&dd(y.alternate,y);break;default:wr(d,y,D,V,u)}i=i.sibling}}function Zl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:Zl(s,l),u&2048&&fd(l.alternate,l);break;case 24:Zl(s,l),u&2048&&dd(l.alternate,l);break;default:Zl(s,l)}i=i.sibling}}var Kl=8192;function Dr(t,i,s){if(t.subtreeFlags&Kl)for(t=t.child;t!==null;)zg(t,i,s),t=t.sibling}function zg(t,i,s){switch(t.tag){case 26:Dr(t,i,s),t.flags&Kl&&t.memoizedState!==null&&uM(s,Vi,t.memoizedState,t.memoizedProps);break;case 5:Dr(t,i,s);break;case 3:case 4:var l=Vi;Vi=Lc(t.stateNode.containerInfo),Dr(t,i,s),Vi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Kl,Kl=16777216,Dr(t,i,s),Kl=l):Dr(t,i,s));break;default:Dr(t,i,s)}}function Bg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ql(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Bn=l,Hg(l,t)}Bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 0:case 11:case 15:Ql(t),t.flags&2048&&as(9,t,t.return);break;case 3:Ql(t);break;case 12:Ql(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,xc(t)):Ql(t);break;default:Ql(t)}}function xc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Bn=l,Hg(l,t)}Bg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:as(8,i,i.return),xc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,xc(i));break;default:xc(i)}t=t.sibling}}function Hg(t,i){for(;Bn!==null;){var s=Bn;switch(s.tag){case 0:case 11:case 15:as(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Bn=l;else e:for(s=t;Bn!==null;){l=Bn;var u=l.sibling,d=l.return;if(Dg(l),l===s){Bn=null;break e}if(u!==null){u.return=d,Bn=u;break e}Bn=d}}}var TS={getCacheForType:function(t){var i=Xn(Rn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Xn(Rn).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Bt=0,ln=null,Et=null,At=0,Yt=0,xi=null,ss=!1,Nr=!1,hd=!1,Ca=0,Mn=0,rs=0,js=0,pd=0,Si=0,Ur=0,Jl=null,ci=null,md=!1,Sc=0,Gg=0,Mc=1/0,Ec=null,ls=null,On=0,os=null,Lr=null,wa=0,gd=0,_d=null,kg=null,jl=0,vd=null;function Mi(){return(Bt&2)!==0&&At!==0?At&-At:B.T!==null?bd():yn()}function Vg(){if(Si===0)if((At&536870912)===0||wt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),Si=t}else Si=536870912;return t=vi.current,t!==null&&(t.flags|=32),Si}function ui(t,i,s){(t===ln&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Or(t,0),cs(t,At,Si,!1)),We(t,s),((Bt&2)===0||t!==ln)&&(t===ln&&((Bt&2)===0&&(js|=s),Mn===4&&cs(t,At,Si,!1)),ta(t))}function Xg(t,i,s){if((Bt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),u=l?wS(t,i):xd(t,i,!0),d=l;do{if(u===0){Nr&&!l&&cs(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!RS(s)){u=xd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var D=t;u=Jl;var V=D.current.memoizedState.isDehydrated;if(V&&(Or(D,y).flags|=256),y=xd(D,y,!1),y!==2){if(hd&&!V){D.errorRecoveryDisabledLanes|=d,js|=d,u=4;break e}d=ci,ci=u,d!==null&&(ci===null?ci=d:ci.push.apply(ci,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Or(t,0),cs(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:cs(l,i,Si,!ss);break e;case 2:ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Sc+300-Lt(),10<u)){if(cs(l,i,Si,!ss),Se(l,0,!0)!==0)break e;wa=i,l.timeoutHandle=S_(Wg.bind(null,l,s,ci,Ec,md,i,Si,js,Ur,ss,d,"Throttled",-0,0),u);break e}Wg(l,s,ci,Ec,md,i,Si,js,Ur,ss,d,null,-0,0)}}break}while(!0);ta(t)}function Wg(t,i,s,l,u,d,y,D,V,oe,Me,Ae,he,ye){if(t.timeoutHandle=-1,Ae=i.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},zg(i,d,Ae);var et=(d&62914560)===d?Sc-Lt():(d&4194048)===d?Gg-Lt():0;if(et=fM(Ae,et),et!==null){wa=d,t.cancelPendingCommit=et($g.bind(null,t,i,d,s,l,u,y,D,V,Me,Ae,null,he,ye)),cs(t,d,y,!oe);return}}$g(t,i,d,s,l,u,y,D,V)}function RS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!gi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(t,i,s,l){i&=~pd,i&=~js,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-De(u),y=1<<d;l[d]=-1,u&=~y}s!==0&&Ot(t,s,i)}function bc(){return(Bt&6)===0?($l(0),!1):!0}function yd(){if(Et!==null){if(Yt===0)var t=Et.return;else t=Et,va=Vs=null,Pf(t),br=null,Pl=0,t=Et;for(;t!==null;)Mg(t.alternate,t),t=t.return;Et=null}}function Or(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,qS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),wa=0,yd(),ln=t,Et=s=ga(t.current,null),At=i,Yt=0,xi=null,ss=!1,Nr=Ie(t,i),hd=!1,Ur=Si=pd=js=rs=Mn=0,ci=Jl=null,md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-De(l),d=1<<u;i|=t[u],l&=~d}return Ca=i,Wo(),s}function Yg(t,i){_t=null,B.H=Vl,i===Er||i===$o?(i=o0(),Yt=3):i===Ef?(i=o0(),Yt=4):Yt=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,xi=i,Et===null&&(Mn=1,hc(t,wi(i,t.current)))}function qg(){var t=vi.current;return t===null?!0:(At&4194048)===At?Li===null:(At&62914560)===At||(At&536870912)!==0?t===Li:!1}function Zg(){var t=B.H;return B.H=Vl,t===null?Vl:t}function Kg(){var t=B.A;return B.A=TS,t}function Tc(){Mn=4,ss||(At&4194048)!==At&&vi.current!==null||(Nr=!0),(rs&134217727)===0&&(js&134217727)===0||ln===null||cs(ln,At,Si,!1)}function xd(t,i,s){var l=Bt;Bt|=2;var u=Zg(),d=Kg();(ln!==t||At!==i)&&(Ec=null,Or(t,i)),i=!1;var y=Mn;e:do try{if(Yt!==0&&Et!==null){var D=Et,V=xi;switch(Yt){case 8:yd(),y=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(i=!0);var oe=Yt;if(Yt=0,xi=null,Pr(t,D,V,oe),s&&Nr){y=0;break e}break;default:oe=Yt,Yt=0,xi=null,Pr(t,D,V,oe)}}CS(),y=Mn;break}catch(Me){Yg(t,Me)}while(!0);return i&&t.shellSuspendCounter++,va=Vs=null,Bt=l,B.H=u,B.A=d,Et===null&&(ln=null,At=0,Wo()),y}function CS(){for(;Et!==null;)Qg(Et)}function wS(t,i){var s=Bt;Bt|=2;var l=Zg(),u=Kg();ln!==t||At!==i?(Ec=null,Mc=Lt()+500,Or(t,i)):Nr=Ie(t,i);e:do try{if(Yt!==0&&Et!==null){i=Et;var d=xi;t:switch(Yt){case 1:Yt=0,xi=null,Pr(t,i,d,1);break;case 2:case 9:if(r0(d)){Yt=0,xi=null,Jg(i);break}i=function(){Yt!==2&&Yt!==9||ln!==t||(Yt=7),ta(t)},d.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:r0(d)?(Yt=0,xi=null,Jg(i)):(Yt=0,xi=null,Pr(t,i,d,7));break;case 5:var y=null;switch(Et.tag){case 26:y=Et.memoizedState;case 5:case 27:var D=Et;if(y?I_(y):D.stateNode.complete){Yt=0,xi=null;var V=D.sibling;if(V!==null)Et=V;else{var oe=D.return;oe!==null?(Et=oe,Ac(oe)):Et=null}break t}}Yt=0,xi=null,Pr(t,i,d,5);break;case 6:Yt=0,xi=null,Pr(t,i,d,6);break;case 8:yd(),Mn=6;break e;default:throw Error(r(462))}}DS();break}catch(Me){Yg(t,Me)}while(!0);return va=Vs=null,B.H=l,B.A=u,Bt=s,Et!==null?0:(ln=null,At=0,Wo(),Mn)}function DS(){for(;Et!==null&&!on();)Qg(Et)}function Qg(t){var i=xg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,i===null?Ac(t):Et=i}function Jg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=pg(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=pg(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:Pf(i);default:Mg(s,i),i=Et=Km(i,Ca),i=xg(s,i,Ca)}t.memoizedProps=t.pendingProps,i===null?Ac(t):Et=i}function Pr(t,i,s,l){va=Vs=null,Pf(i),br=null,Pl=0;var u=i.return;try{if(vS(t,u,i,s,At)){Mn=1,hc(t,wi(s,t.current)),Et=null;return}}catch(d){if(u!==null)throw Et=u,d;Mn=1,hc(t,wi(s,t.current)),Et=null;return}i.flags&32768?(wt||l===1?t=!0:Nr||(At&536870912)!==0?t=!1:(ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=vi.current,l!==null&&l.tag===13&&(l.flags|=16384))),jg(i,t)):Ac(i)}function Ac(t){var i=t;do{if((i.flags&32768)!==0){jg(i,ss);return}t=i.return;var s=SS(i.alternate,i,Ca);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);Mn===0&&(Mn=5)}function jg(t,i){do{var s=MS(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);Mn=6,Et=null}function $g(t,i,s,l,u,d,y,D,V){t.cancelPendingCommit=null;do Rc();while(On!==0);if((Bt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=of,sn(t,s,d,y,D,V),t===ln&&(Et=ln=null,At=0),Lr=i,os=t,wa=s,gd=d,_d=u,kg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,OS(k,function(){return a_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,u=X.p,X.p=2,y=Bt,Bt|=4;try{ES(t,i,s)}finally{Bt=y,X.p=u,B.T=l}}On=1,e_(),t_(),n_()}}function e_(){if(On===1){On=0;var t=os,i=Lr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=X.p;X.p=2;var u=Bt;Bt|=4;try{Og(i,t);var d=Ud,y=Hm(t.containerInfo),D=d.focusedElem,V=d.selectionRange;if(y!==D&&D&&D.ownerDocument&&Fm(D.ownerDocument.documentElement,D)){if(V!==null&&nf(D)){var oe=V.start,Me=V.end;if(Me===void 0&&(Me=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(Me,D.value.length);else{var Ae=D.ownerDocument||document,he=Ae&&Ae.defaultView||window;if(he.getSelection){var ye=he.getSelection(),et=D.textContent.length,ct=Math.min(V.start,et),en=V.end===void 0?ct:Math.min(V.end,et);!ye.extend&&ct>en&&(y=en,en=ct,ct=y);var ne=Bm(D,ct),q=Bm(D,en);if(ne&&q&&(ye.rangeCount!==1||ye.anchorNode!==ne.node||ye.anchorOffset!==ne.offset||ye.focusNode!==q.node||ye.focusOffset!==q.offset)){var le=Ae.createRange();le.setStart(ne.node,ne.offset),ye.removeAllRanges(),ct>en?(ye.addRange(le),ye.extend(q.node,q.offset)):(le.setEnd(q.node,q.offset),ye.addRange(le))}}}}for(Ae=[],ye=D;ye=ye.parentNode;)ye.nodeType===1&&Ae.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ae.length;D++){var Ee=Ae[D];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}Fc=!!Nd,Ud=Nd=null}finally{Bt=u,X.p=l,B.T=s}}t.current=i,On=2}}function t_(){if(On===2){On=0;var t=os,i=Lr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=X.p;X.p=2;var u=Bt;Bt|=4;try{wg(t,i.alternate,i)}finally{Bt=u,X.p=l,B.T=s}}On=3}}function n_(){if(On===4||On===3){On=0,K();var t=os,i=Lr,s=wa,l=kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?On=5:(On=0,Lr=os=null,i_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ls=null),Jt(s),i=i.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot($,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,u=X.p,X.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var D=l[y];d(D.value,{componentStack:D.stack})}}finally{B.T=i,X.p=u}}(wa&3)!==0&&Rc(),ta(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===vd?jl++:(jl=0,vd=t):jl=0,$l(0)}}function i_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Ll(i)))}function Rc(){return e_(),t_(),n_(),a_()}function a_(){if(On!==5)return!1;var t=os,i=gd;gd=0;var s=Jt(wa),l=B.T,u=X.p;try{X.p=32>s?32:s,B.T=null,s=_d,_d=null;var d=os,y=wa;if(On=0,Lr=os=null,wa=0,(Bt&6)!==0)throw Error(r(331));var D=Bt;if(Bt|=4,Fg(d.current),Ig(d,d.current,y,s),Bt=D,$l(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot($,d)}catch{}return!0}finally{X.p=u,B.T=l,i_(t,i)}}function s_(t,i,s){i=wi(s,i),i=Qf(t.stateNode,i,2),t=ts(t,i,2),t!==null&&(We(t,2),ta(t))}function qt(t,i,s){if(t.tag===3)s_(t,t,s);else for(;i!==null;){if(i.tag===3){s_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ls===null||!ls.has(l))){t=wi(s,t),s=rg(2),l=ts(i,s,2),l!==null&&(lg(s,l,i,t),We(l,2),ta(l));break}}i=i.return}}function Sd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new AS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(hd=!0,u.add(s),t=NS.bind(null,t,i,s),i.then(t,t))}function NS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,ln===t&&(At&s)===s&&(Mn===4||Mn===3&&(At&62914560)===At&&300>Lt()-Sc?(Bt&2)===0&&Or(t,0):pd|=s,Ur===At&&(Ur=0)),ta(t)}function r_(t,i){i===0&&(i=we()),t=Hs(t,i),t!==null&&(We(t,i),ta(t))}function US(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),r_(t,s)}function LS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),r_(t,s)}function OS(t,i){return Qt(t,i)}var Cc=null,Ir=null,Md=!1,wc=!1,Ed=!1,us=0;function ta(t){t!==Ir&&t.next===null&&(Ir===null?Cc=Ir=t:Ir=Ir.next=t),wc=!0,Md||(Md=!0,IS())}function $l(t,i){if(!Ed&&wc){Ed=!0;do for(var s=!1,l=Cc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var y=l.suspendedLanes,D=l.pingedLanes;d=(1<<31-De(42|t)+1)-1,d&=u&~(y&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,u_(l,d))}else d=At,d=Se(l,l===ln?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ie(l,d)||(s=!0,u_(l,d));l=l.next}while(s);Ed=!1}}function PS(){l_()}function l_(){wc=Md=!1;var t=0;us!==0&&YS()&&(t=us);for(var i=Lt(),s=null,l=Cc;l!==null;){var u=l.next,d=o_(l,i);d===0?(l.next=null,s===null?Cc=u:s.next=u,u===null&&(Ir=s)):(s=l,(t!==0||(d&3)!==0)&&(wc=!0)),l=u}On!==0&&On!==5||$l(t),us!==0&&(us=0)}function o_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-De(d),D=1<<y,V=u[y];V===-1?((D&s)===0||(D&l)!==0)&&(u[y]=He(D,i)):V<=i&&(t.expiredLanes|=D),d&=~D}if(i=ln,s=At,s=Se(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ut(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ut(l),Jt(s)){case 2:case 8:s=_;break;case 32:s=k;break;case 268435456:s=Q;break;default:s=k}return l=c_.bind(null,t),s=Qt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ut(l),t.callbackPriority=2,t.callbackNode=null,2}function c_(t,i){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Rc()&&t.callbackNode!==s)return null;var l=At;return l=Se(t,t===ln?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Xg(t,l,i),o_(t,Lt()),t.callbackNode!=null&&t.callbackNode===s?c_.bind(null,t):null)}function u_(t,i){if(Rc())return null;Xg(t,i,!0)}function IS(){ZS(function(){(Bt&6)!==0?Qt(C,PS):l_()})}function bd(){if(us===0){var t=Sr;t===0&&(t=Ze,Ze<<=1,(Ze&261888)===0&&(Ze=256)),us=t}return us}function f_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Is(""+t)}function d_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function zS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=f_((u[Tn]||null).action),y=l.submitter;y&&(i=(i=y[Tn]||null)?f_(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var D=new Go("action","action",null,l,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(us!==0){var V=y?d_(u,y):new FormData(u);Xf(s,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(D.preventDefault(),V=y?d_(u,y):new FormData(u),Xf(s,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Td=0;Td<lf.length;Td++){var Ad=lf[Td],BS=Ad.toLowerCase(),FS=Ad[0].toUpperCase()+Ad.slice(1);ki(BS,"on"+FS)}ki(Vm,"onAnimationEnd"),ki(Xm,"onAnimationIteration"),ki(Wm,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(tS,"onTransitionRun"),ki(nS,"onTransitionStart"),ki(iS,"onTransitionCancel"),ki(Ym,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eo));function h_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var D=l[y],V=D.instance,oe=D.currentTarget;if(D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=oe;try{d(u)}catch(Me){Xo(Me)}u.currentTarget=null,d=V}else for(y=0;y<l.length;y++){if(D=l[y],V=D.instance,oe=D.currentTarget,D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=oe;try{d(u)}catch(Me){Xo(Me)}u.currentTarget=null,d=V}}}}function bt(t,i){var s=i[Ls];s===void 0&&(s=i[Ls]=new Set);var l=t+"__bubble";s.has(l)||(p_(i,t,2,!1),s.add(l))}function Rd(t,i,s){var l=0;i&&(l|=4),p_(s,t,l,i)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Cd(t){if(!t[Dc]){t[Dc]=!0,zo.forEach(function(s){s!=="selectionchange"&&(HS.has(s)||Rd(s,!1,t),Rd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Dc]||(i[Dc]=!0,Rd("selectionchange",!1,i))}}function p_(t,i,s,l){switch(V_(i)){case 2:var u=pM;break;case 8:u=mM;break;default:u=Vd}s=u.bind(null,i,s,t),u=void 0,!qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function wd(t,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var D=l.stateNode.containerInfo;if(D===u)break;if(y===4)for(y=l.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;D!==null;){if(y=da(D),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){l=d=y;continue e}D=D.parentNode}}l=l.return}ym(function(){var oe=d,Me=Wu(s),Ae=[];e:{var he=qm.get(t);if(he!==void 0){var ye=Go,et=t;switch(t){case"keypress":if(Fo(s)===0)break e;case"keydown":case"keyup":ye=Lx;break;case"focusin":et="focus",ye=Ju;break;case"focusout":et="blur",ye=Ju;break;case"beforeblur":case"afterblur":ye=Ju;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Ix;break;case Vm:case Xm:case Wm:ye=bx;break;case Ym:ye=Bx;break;case"scroll":case"scrollend":ye=yx;break;case"wheel":ye=Hx;break;case"copy":case"cut":case"paste":ye=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=bm;break;case"toggle":case"beforetoggle":ye=kx}var ct=(i&4)!==0,en=!ct&&(t==="scroll"||t==="scrollend"),ne=ct?he!==null?he+"Capture":null:he;ct=[];for(var q=oe,le;q!==null;){var Ee=q;if(le=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||le===null||ne===null||(Ee=Ml(q,ne),Ee!=null&&ct.push(to(q,Ee,le))),en)break;q=q.return}0<ct.length&&(he=new ye(he,et,null,s,Me),Ae.push({event:he,listeners:ct}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",he&&s!==Xu&&(et=s.relatedTarget||s.fromElement)&&(da(et)||et[ai]))break e;if((ye||he)&&(he=Me.window===Me?Me:(he=Me.ownerDocument)?he.defaultView||he.parentWindow:window,ye?(et=s.relatedTarget||s.toElement,ye=oe,et=et?da(et):null,et!==null&&(en=c(et),ct=et.tag,et!==en||ct!==5&&ct!==27&&ct!==6)&&(et=null)):(ye=null,et=oe),ye!==et)){if(ct=Mm,Ee="onMouseLeave",ne="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ct=bm,Ee="onPointerLeave",ne="onPointerEnter",q="pointer"),en=ye==null?he:Ps(ye),le=et==null?he:Ps(et),he=new ct(Ee,q+"leave",ye,s,Me),he.target=en,he.relatedTarget=le,Ee=null,da(Me)===oe&&(ct=new ct(ne,q+"enter",et,s,Me),ct.target=le,ct.relatedTarget=en,Ee=ct),en=Ee,ye&&et)t:{for(ct=GS,ne=ye,q=et,le=0,Ee=ne;Ee;Ee=ct(Ee))le++;Ee=0;for(var rt=q;rt;rt=ct(rt))Ee++;for(;0<le-Ee;)ne=ct(ne),le--;for(;0<Ee-le;)q=ct(q),Ee--;for(;le--;){if(ne===q||q!==null&&ne===q.alternate){ct=ne;break t}ne=ct(ne),q=ct(q)}ct=null}else ct=null;ye!==null&&m_(Ae,he,ye,ct,!1),et!==null&&en!==null&&m_(Ae,en,et,ct,!0)}}e:{if(he=oe?Ps(oe):window,ye=he.nodeName&&he.nodeName.toLowerCase(),ye==="select"||ye==="input"&&he.type==="file")var It=Um;else if(Dm(he))if(Lm)It=jx;else{It=Qx;var tt=Kx}else ye=he.nodeName,!ye||ye.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?oe&&kt(oe.elementType)&&(It=Um):It=Jx;if(It&&(It=It(t,oe))){Nm(Ae,It,s,Me);break e}tt&&tt(t,he,oe),t==="focusout"&&oe&&he.type==="number"&&oe.memoizedProps.value!=null&&Mt(he,"number",he.value)}switch(tt=oe?Ps(oe):window,t){case"focusin":(Dm(tt)||tt.contentEditable==="true")&&(hr=tt,af=oe,Dl=null);break;case"focusout":Dl=af=hr=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Gm(Ae,s,Me);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Gm(Ae,s,Me)}var vt;if($u)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else dr?Cm(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(Tm&&s.locale!=="ko"&&(dr||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&dr&&(vt=xm()):(Za=Me,Zu="value"in Za?Za.value:Za.textContent,dr=!0)),tt=Nc(oe,Rt),0<tt.length&&(Rt=new Em(Rt,t,null,s,Me),Ae.push({event:Rt,listeners:tt}),vt?Rt.data=vt:(vt=wm(s),vt!==null&&(Rt.data=vt)))),(vt=Xx?Wx(t,s):Yx(t,s))&&(Rt=Nc(oe,"onBeforeInput"),0<Rt.length&&(tt=new Em("onBeforeInput","beforeinput",null,s,Me),Ae.push({event:tt,listeners:Rt}),tt.data=vt)),zS(Ae,t,oe,s,Me)}h_(Ae,i)})}function to(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Nc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ml(t,s),u!=null&&l.unshift(to(t,u,d)),u=Ml(t,i),u!=null&&l.push(to(t,u,d))),t.tag===3)return l;t=t.return}return[]}function GS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function m_(t,i,s,l,u){for(var d=i._reactName,y=[];s!==null&&s!==l;){var D=s,V=D.alternate,oe=D.stateNode;if(D=D.tag,V!==null&&V===l)break;D!==5&&D!==26&&D!==27||oe===null||(V=oe,u?(oe=Ml(s,d),oe!=null&&y.unshift(to(s,oe,V))):u||(oe=Ml(s,d),oe!=null&&y.push(to(s,oe,V)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var kS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function g_(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(VS,"")}function __(t,i){return i=g_(i),g_(t)===i}function $t(t,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||mi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&mi(t,""+l);break;case"className":$e(t,"class",l);break;case"tabIndex":$e(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,s,l);break;case"style":Gi(t,l,d);break;case"data":if(i!=="object"){$e(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Is(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&$t(t,i,"name",u.name,u,null),$t(t,i,"formEncType",u.formEncType,u,null),$t(t,i,"formMethod",u.formMethod,u,null),$t(t,i,"formTarget",u.formTarget,u,null)):($t(t,i,"encType",u.encType,u,null),$t(t,i,"method",u.method,u,null),$t(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Is(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=pa);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Is(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Ge(t,"popover",l);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ge(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ji.get(s)||s,Ge(t,s,l))}}function Dd(t,i,s,l,u,d){switch(s){case"style":Gi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?mi(t,l):(typeof l=="number"||typeof l=="bigint")&&mi(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ge(t,s,l)}}}function Yn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(t,i,d,y,s,null)}}u&&$t(t,i,"srcSet",s.srcSet,s,null),l&&$t(t,i,"src",s.src,s,null);return;case"input":bt("invalid",t);var D=d=y=u=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var Me=s[l];if(Me!=null)switch(l){case"name":u=Me;break;case"type":y=Me;break;case"checked":V=Me;break;case"defaultChecked":oe=Me;break;case"value":d=Me;break;case"defaultValue":D=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(r(137,i));break;default:$t(t,i,l,Me,s,null)}}Qn(t,d,D,V,oe,y,u,!1);return;case"select":bt("invalid",t),l=y=d=null;for(u in s)if(s.hasOwnProperty(u)&&(D=s[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":y=D;break;case"multiple":l=D;default:$t(t,i,u,D,s,null)}i=d,s=y,t.multiple=!!l,i!=null?Ln(t,!!l,i,!1):s!=null&&Ln(t,!!l,s,!0);return;case"textarea":bt("invalid",t),d=u=l=null;for(y in s)if(s.hasOwnProperty(y)&&(D=s[y],D!=null))switch(y){case"value":l=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:$t(t,i,y,D,s,null)}Hi(t,l,u,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(t,i,V,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<eo.length;l++)bt(eo[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(t,i,oe,l,s,null)}return;default:if(kt(i)){for(Me in s)s.hasOwnProperty(Me)&&(l=s[Me],l!==void 0&&Dd(t,i,Me,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&$t(t,i,D,l,s,null))}function XS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,D=null,V=null,oe=null,Me=null;for(ye in s){var Ae=s[ye];if(s.hasOwnProperty(ye)&&Ae!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:l.hasOwnProperty(ye)||$t(t,i,ye,null,l,Ae)}}for(var he in l){var ye=l[he];if(Ae=s[he],l.hasOwnProperty(he)&&(ye!=null||Ae!=null))switch(he){case"type":d=ye;break;case"name":u=ye;break;case"checked":oe=ye;break;case"defaultChecked":Me=ye;break;case"value":y=ye;break;case"defaultValue":D=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,i));break;default:ye!==Ae&&$t(t,i,he,ye,l,Ae)}}Xe(t,y,D,V,oe,Me,d,u);return;case"select":ye=y=D=he=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ye=V;default:l.hasOwnProperty(d)||$t(t,i,d,null,l,V)}for(u in l)if(d=l[u],V=s[u],l.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":he=d;break;case"defaultValue":D=d;break;case"multiple":y=d;default:d!==V&&$t(t,i,u,d,l,V)}i=D,s=y,l=ye,he!=null?Ln(t,!!s,he,!1):!!l!=!!s&&(i!=null?Ln(t,!!s,i,!0):Ln(t,!!s,s?[]:"",!1));return;case"textarea":ye=he=null;for(D in s)if(u=s[D],s.hasOwnProperty(D)&&u!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:$t(t,i,D,null,l,u)}for(y in l)if(u=l[y],d=s[y],l.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":he=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&$t(t,i,y,u,l,d)}pi(t,he,ye);return;case"option":for(var et in s)if(he=s[et],s.hasOwnProperty(et)&&he!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:$t(t,i,et,null,l,he)}for(V in l)if(he=l[V],ye=s[V],l.hasOwnProperty(V)&&he!==ye&&(he!=null||ye!=null))switch(V){case"selected":t.selected=he&&typeof he!="function"&&typeof he!="symbol";break;default:$t(t,i,V,he,l,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)he=s[ct],s.hasOwnProperty(ct)&&he!=null&&!l.hasOwnProperty(ct)&&$t(t,i,ct,null,l,he);for(oe in l)if(he=l[oe],ye=s[oe],l.hasOwnProperty(oe)&&he!==ye&&(he!=null||ye!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,i));break;default:$t(t,i,oe,he,l,ye)}return;default:if(kt(i)){for(var en in s)he=s[en],s.hasOwnProperty(en)&&he!==void 0&&!l.hasOwnProperty(en)&&Dd(t,i,en,void 0,l,he);for(Me in l)he=l[Me],ye=s[Me],!l.hasOwnProperty(Me)||he===ye||he===void 0&&ye===void 0||Dd(t,i,Me,he,l,ye);return}}for(var ne in s)he=s[ne],s.hasOwnProperty(ne)&&he!=null&&!l.hasOwnProperty(ne)&&$t(t,i,ne,null,l,he);for(Ae in l)he=l[Ae],ye=s[Ae],!l.hasOwnProperty(Ae)||he===ye||he==null&&ye==null||$t(t,i,Ae,he,l,ye)}function v_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,y=u.initiatorType,D=u.duration;if(d&&D&&v_(y)){for(y=0,D=u.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>D)break;var Me=V.transferSize,Ae=V.initiatorType;Me&&v_(Ae)&&(V=V.responseEnd,y+=Me*(V<D?1:(D-oe)/(V-oe)))}if(--l,i+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nd=null,Ud=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ld(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function YS(){var t=window.event;return t&&t.type==="popstate"?t===Od?!1:(Od=t,!0):(Od=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(KS)}:S_;function KS(t){setTimeout(function(){throw t})}function fs(t){return t==="head"}function E_(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Hr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")no(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,no(s);for(var d=s.firstChild;d;){var y=d.nextSibling,D=d.nodeName;d[Xa]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&no(t.ownerDocument.body);s=u}while(s);Hr(i)}function b_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Pd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Pd(s),Wa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function QS(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Oi(t.nextSibling),t===null)break}return null}function JS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Oi(t.nextSibling),t===null))return null;return t}function T_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Oi(t.nextSibling),t===null))return null;return t}function Id(t){return t.data==="$?"||t.data==="$~"}function zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Oi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Bd=null;function A_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Oi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function R_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function C_(t,i,s){switch(i=Uc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function no(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t)}var Pi=new Map,w_=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Da=X.d;X.d={f:$S,r:eM,D:tM,C:nM,L:iM,m:aM,X:rM,S:sM,M:lM};function $S(){var t=Da.f(),i=bc();return t||i}function eM(t){var i=ha(t);i!==null&&i.tag===5&&i.type==="form"?Y0(i):Da.r(t)}var zr=typeof document>"u"?null:document;function D_(t,i,s){var l=zr;if(l&&typeof i=="string"&&i){var u=Xt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),w_.has(u)||(w_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Yn(i,"link",t),An(i),l.head.appendChild(i)))}}function tM(t){Da.D(t),D_("dns-prefetch",t,null)}function nM(t,i){Da.C(t,i),D_("preconnect",t,i)}function iM(t,i,s){Da.L(t,i,s);var l=zr;if(l&&t&&i){var u='link[rel="preload"][as="'+Xt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Xt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Xt(s.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(i){case"style":d=Br(t);break;case"script":d=Fr(t)}Pi.has(d)||(t=M({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Pi.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(io(d))||i==="script"&&l.querySelector(ao(d))||(i=l.createElement("link"),Yn(i,"link",t),An(i),l.head.appendChild(i)))}}function aM(t,i){Da.m(t,i);var s=zr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fr(t)}if(!Pi.has(d)&&(t=M({rel:"modulepreload",href:t},i),Pi.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ao(d)))return}l=s.createElement("link"),Yn(l,"link",t),An(l),s.head.appendChild(l)}}}function sM(t,i,s){Da.S(t,i,s);var l=zr;if(l&&t){var u=Ya(l).hoistableStyles,d=Br(t);i=i||"default";var y=u.get(d);if(!y){var D={loading:0,preload:null};if(y=l.querySelector(io(d)))D.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Pi.get(d))&&Fd(t,s);var V=y=l.createElement("link");An(V),Yn(V,"link",t),V._p=new Promise(function(oe,Me){V.onload=oe,V.onerror=Me}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Oc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:D},u.set(d,y)}}}function rM(t,i){Da.X(t,i);var s=zr;if(s&&t){var l=Ya(s).hoistableScripts,u=Fr(t),d=l.get(u);d||(d=s.querySelector(ao(u)),d||(t=M({src:t,async:!0},i),(i=Pi.get(u))&&Hd(t,i),d=s.createElement("script"),An(d),Yn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function lM(t,i){Da.M(t,i);var s=zr;if(s&&t){var l=Ya(s).hoistableScripts,u=Fr(t),d=l.get(u);d||(d=s.querySelector(ao(u)),d||(t=M({src:t,async:!0,type:"module"},i),(i=Pi.get(u))&&Hd(t,i),d=s.createElement("script"),An(d),Yn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function N_(t,i,s,l){var u=(u=se.current)?Lc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Br(s.href),s=Ya(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Br(s.href);var d=Ya(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(io(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pi.set(t,s),d||oM(u,t,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fr(s),s=Ya(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Br(t){return'href="'+Xt(t)+'"'}function io(t){return'link[rel="stylesheet"]['+t+"]"}function U_(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function oM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),An(i),t.head.appendChild(i))}function Fr(t){return'[src="'+Xt(t)+'"]'}function ao(t){return"script[async]"+t}function L_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Xt(s.href)+'"]');if(l)return i.instance=l,An(l),l;var u=M({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),An(l),Yn(l,"style",u),Oc(l,s.precedence,t),i.instance=l;case"stylesheet":u=Br(s.href);var d=t.querySelector(io(u));if(d)return i.state.loading|=4,i.instance=d,An(d),d;l=U_(s),(u=Pi.get(u))&&Fd(l,u),d=(t.ownerDocument||t).createElement("link"),An(d);var y=d;return y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Yn(d,"link",l),i.state.loading|=4,Oc(d,s.precedence,t),i.instance=d;case"script":return d=Fr(s.src),(u=t.querySelector(ao(d)))?(i.instance=u,An(u),u):(l=s,(u=Pi.get(d))&&(l=M({},s),Hd(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),An(u),Yn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Oc(l,s.precedence,t));return i.instance}function Oc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,y=0;y<l.length;y++){var D=l[y];if(D.dataset.precedence===i)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Hd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Pc=null;function O_(t,i,s){if(Pc===null){var l=new Map,u=Pc=new Map;u.set(s,l)}else u=Pc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Xa]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var D=l.get(y);D?D.push(d):l.set(y,[d])}}return l}function P_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function cM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Br(l.href),d=i.querySelector(io(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ic.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,An(d);return}d=i.ownerDocument||i,l=U_(l),(u=Pi.get(u))&&Fd(l,u),d=d.createElement("link"),An(d);var y=d;y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Yn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ic.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Gd=0;function fM(t,i){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Gd===0&&(Gd=62500*WS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Gd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zc=null;function Bc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zc=new Map,i.forEach(dM,t),zc=null,Ic.call(t))}function dM(t,i){if(!(i.state.loading&4)){var s=zc.get(t);if(s)var l=s.get(null);else{s=new Map,zc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}u=i.instance,y=u.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,u),s.set(y,u),this.count++,l=Ic.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var so={$$typeof:I,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function hM(t,i,s,l,u,d,y,D,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function z_(t,i,s,l,u,d,y,D,V,oe,Me,Ae){return t=new hM(t,i,s,y,V,oe,Me,Ae,D),i=1,d===!0&&(i|=24),d=_i(3,null,null,i),t.current=d,d.stateNode=t,i=xf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},bf(d),t}function B_(t){return t?(t=gr,t):gr}function F_(t,i,s,l,u,d){u=B_(u),l.context===null?l.context=u:l.pendingContext=u,l=es(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=ts(t,l,i),s!==null&&(ui(s,t,i),zl(s,t,i))}function H_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function kd(t,i){H_(t,i),(t=t.alternate)&&H_(t,i)}function G_(t){if(t.tag===13||t.tag===31){var i=Hs(t,67108864);i!==null&&ui(i,t,67108864),kd(t,67108864)}}function k_(t){if(t.tag===13||t.tag===31){var i=Mi();i=dt(i);var s=Hs(t,i);s!==null&&ui(s,t,i),kd(t,i)}}var Fc=!0;function pM(t,i,s,l){var u=B.T;B.T=null;var d=X.p;try{X.p=2,Vd(t,i,s,l)}finally{X.p=d,B.T=u}}function mM(t,i,s,l){var u=B.T;B.T=null;var d=X.p;try{X.p=8,Vd(t,i,s,l)}finally{X.p=d,B.T=u}}function Vd(t,i,s,l){if(Fc){var u=Xd(l);if(u===null)wd(t,i,l,Hc,s),X_(t,l);else if(_M(u,t,i,s,l))l.stopPropagation();else if(X_(t,l),i&4&&-1<gM.indexOf(t)){for(;u!==null;){var d=ha(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Oe(d.pendingLanes);if(y!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;y;){var V=1<<31-De(y);D.entanglements[1]|=V,y&=~V}ta(d),(Bt&6)===0&&(Mc=Lt()+500,$l(0))}}break;case 31:case 13:D=Hs(d,2),D!==null&&ui(D,d,2),bc(),kd(d,2)}if(d=Xd(l),d===null&&wd(t,i,l,Hc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else wd(t,i,l,null,s)}}function Xd(t){return t=Wu(t),Wd(t)}var Hc=null;function Wd(t){if(Hc=null,t=da(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=m(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Hc=t,null}function V_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case C:return 2;case _:return 8;case k:case Y:return 32;case Q:return 268435456;default:return 32}default:return 32}}var Yd=!1,ds=null,hs=null,ps=null,ro=new Map,lo=new Map,ms=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X_(t,i){switch(t){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function oo(t,i,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ha(i),i!==null&&G_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function _M(t,i,s,l,u){switch(i){case"focusin":return ds=oo(ds,t,i,s,l,u),!0;case"dragenter":return hs=oo(hs,t,i,s,l,u),!0;case"mouseover":return ps=oo(ps,t,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return ro.set(d,oo(ro.get(d)||null,t,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,lo.set(d,oo(lo.get(d)||null,t,i,s,l,u)),!0}return!1}function W_(t){var i=da(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,hn(t.priority,function(){k_(s)});return}}else if(i===31){if(i=m(s),i!==null){t.blockedOn=i,hn(t.priority,function(){k_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xu=l,s.target.dispatchEvent(l),Xu=null}else return i=ha(s),i!==null&&G_(i),t.blockedOn=s,!1;i.shift()}return!0}function Y_(t,i,s){Gc(t)&&s.delete(i)}function vM(){Yd=!1,ds!==null&&Gc(ds)&&(ds=null),hs!==null&&Gc(hs)&&(hs=null),ps!==null&&Gc(ps)&&(ps=null),ro.forEach(Y_),lo.forEach(Y_)}function kc(t,i){t.blockedOn===i&&(t.blockedOn=null,Yd||(Yd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vM)))}var Vc=null;function q_(t){Vc!==t&&(Vc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Vc===t&&(Vc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Wd(l||s)===null)continue;break}var d=ha(s);d!==null&&(t.splice(i,3),i-=3,Xf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Hr(t){function i(V){return kc(V,t)}ds!==null&&kc(ds,t),hs!==null&&kc(hs,t),ps!==null&&kc(ps,t),ro.forEach(i),lo.forEach(i);for(var s=0;s<ms.length;s++){var l=ms[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)W_(s),s.blockedOn===null&&ms.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],y=u[Tn]||null;if(typeof d=="function")y||q_(s);else if(y){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Tn]||null)D=y.formAction;else if(Wd(u)!==null)continue}else D=y.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),q_(s)}}}function Z_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function qd(t){this._internalRoot=t}Xc.prototype.render=qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Mi();F_(s,l,t,i,null,null)},Xc.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;F_(t.current,2,null,t,null,null),bc(),i[ai]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var i=yn();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ms.length&&i!==0&&i<ms[s].priority;s++);ms.splice(s,0,t),s===0&&W_(t)}};var K_=e.version;if(K_!=="19.2.8")throw Error(r(527,K_,"19.2.8"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var yM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{$=Wc.inject(yM),ae=Wc}catch{}}return co.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=ng,d=ig,y=ag;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=z_(t,1,!1,null,null,s,l,null,u,d,y,Z_),t[ai]=i.current,Cd(t),new qd(i)},co.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=ng,y=ig,D=ag,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=z_(t,1,!0,i,s??null,l,u,V,d,y,D,Z_),i.context=B_(null),s=i.current,l=Mi(),l=dt(l),u=es(l),u.callback=null,ts(s,u,l),s=l,i.current.lanes=s,We(i,s),ta(i),t[ai]=i.current,Cd(t),new Xc(i)},co.version="19.2.8",co}var iv;function CM(){if(iv)return Kd.exports;iv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Kd.exports=RM(),Kd.exports}var wM=CM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gy=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Ke.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...m},p)=>Ke.createElement("svg",{ref:p,...NM,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:gy("lucide",o),...m},[...f.map(([h,g])=>Ke.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(a,e)=>{const n=Ke.forwardRef(({className:r,...o},c)=>Ke.createElement(UM,{ref:c,iconNode:e,className:gy(`lucide-${DM(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=dn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=dn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=dn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=dn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=dn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=dn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=dn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=dn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=dn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=dn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=dn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=dn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=dn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=dn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=dn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=dn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=dn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=dn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=dn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=dn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=dn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=dn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=dn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="185",ul={ROTATE:0,DOLLY:1,PAN:2},ll={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZM=0,rv=1,KM=2,Eo=1,QM=2,So=3,Rs=0,hi=1,sa=2,Fa=0,fl=1,lv=2,ov=3,cv=4,JM=5,ir=100,jM=101,$M=102,eE=103,tE=104,nE=200,iE=201,aE=202,sE=203,zh=204,Bh=205,rE=206,lE=207,oE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,Fh=0,Hh=1,Gh=2,ml=3,kh=4,Vh=5,Xh=6,Wh=7,xy=0,mE=1,gE=2,oa=0,Sy=1,My=2,Ey=3,Vp=4,by=5,Ty=6,Ay=7,Ry=300,or=301,gl=302,$d=303,eh=304,Bu=306,Yh=1e3,Ba=1001,qh=1002,Kn=1003,_E=1004,Yc=1005,Hn=1006,th=1007,sr=1008,Ti=1009,Cy=1010,wy=1011,Co=1012,Xp=1013,ua=1014,ra=1015,ka=1016,Wp=1017,Yp=1018,wo=1020,Dy=35902,Ny=35899,Uy=1021,Ly=1022,Ki=1023,Va=1026,rr=1027,Oy=1028,qp=1029,cr=1030,Zp=1031,Kp=1033,xu=33776,Su=33777,Mu=33778,Eu=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,jh=36196,$h=37492,ep=37496,tp=37488,np=37489,Ru=37490,ip=37491,ap=37808,sp=37809,rp=37810,lp=37811,op=37812,cp=37813,up=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,yp=36494,xp=36495,Sp=36283,Mp=36284,Cu=36285,Ep=36286,vE=3200,bp=0,yE=1,bs="",di="srgb",wu="srgb-linear",Du="linear",Zt="srgb",Gr=7680,uv=519,xE=512,SE=513,ME=514,Qp=515,EE=516,bE=517,Jp=518,TE=519,Tp=35044,fv="300 es",la=2e3,Do=2001;function AE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Nu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function RE(){const a=Nu("canvas");return a.style.display="block",a}const dv={};function Uu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Py(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=Py(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Dt(...a){a=Py(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function dl(...a){const e=a.join(" ");e in dv||(dv[e]=!0,ft(...a))}function CE(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const wE={[Fh]:Hh,[Gh]:Xh,[kh]:Wh,[ml]:Vh,[Hh]:Fh,[Xh]:Gh,[Wh]:kh,[Vh]:ml};class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hv=1234567;const bo=Math.PI/180,No=180/Math.PI;function Ha(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function St(a,e,n){return Math.max(e,Math.min(n,a))}function jp(a,e){return(a%e+e)%e}function DE(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function NE(a,e,n){return a!==e?(n-a)/(e-a):0}function To(a,e,n){return(1-n)*a+n*e}function UE(a,e,n,r){return To(a,e,1-Math.exp(-n*r))}function LE(a,e=1){return e-Math.abs(jp(a,e*2)-e)}function OE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function PE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function IE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function zE(a,e){return a+Math.random()*(e-a)}function BE(a){return a*(.5-Math.random())}function FE(a){a!==void 0&&(hv=a);let e=hv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HE(a){return a*bo}function GE(a){return a*No}function kE(a){return(a&a-1)===0&&a!==0}function VE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function XE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function WE(a,e,n,r,o){const c=Math.cos,f=Math.sin,m=c(n/2),p=f(n/2),h=c((e+r)/2),g=f((e+r)/2),M=c((e-r)/2),v=f((e-r)/2),E=c((r-e)/2),R=f((r-e)/2);switch(o){case"XYX":a.set(m*g,p*M,p*v,m*h);break;case"YZY":a.set(p*v,m*g,p*M,m*h);break;case"ZXZ":a.set(p*M,p*v,m*g,m*h);break;case"XZX":a.set(m*g,p*R,p*E,m*h);break;case"YXY":a.set(p*E,m*g,p*R,m*h);break;case"ZYZ":a.set(p*R,p*E,m*g,m*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Zi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ap={DEG2RAD:bo,RAD2DEG:No,generateUUID:Ha,clamp:St,euclideanModulo:jp,mapLinear:DE,inverseLerp:NE,lerp:To,damp:UE,pingpong:LE,smoothstep:OE,smootherstep:PE,randInt:IE,randFloat:zE,randFloatSpread:BE,seededRandom:FE,degToRad:HE,radToDeg:GE,isPowerOfTwo:kE,ceilPowerOfTwo:VE,floorPowerOfTwo:XE,setQuaternionFromProperEuler:WE,normalize:Kt,denormalize:Zi},hm=class hm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hm.prototype.isVector2=!0;let lt=hm;class Cs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,m){let p=r[o+0],h=r[o+1],g=r[o+2],M=r[o+3],v=c[f+0],E=c[f+1],R=c[f+2],N=c[f+3];if(M!==N||p!==v||h!==E||g!==R){let T=p*v+h*E+g*R+M*N;T<0&&(v=-v,E=-E,R=-R,N=-N,T=-T);let x=1-m;if(T<.9995){const O=Math.acos(T),I=Math.sin(O);x=Math.sin(x*O)/I,m=Math.sin(m*O)/I,p=p*x+v*m,h=h*x+E*m,g=g*x+R*m,M=M*x+N*m}else{p=p*x+v*m,h=h*x+E*m,g=g*x+R*m,M=M*x+N*m;const O=1/Math.sqrt(p*p+h*h+g*g+M*M);p*=O,h*=O,g*=O,M*=O}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=M}static multiplyQuaternionsFlat(e,n,r,o,c,f){const m=r[o],p=r[o+1],h=r[o+2],g=r[o+3],M=c[f],v=c[f+1],E=c[f+2],R=c[f+3];return e[n]=m*R+g*M+p*E-h*v,e[n+1]=p*R+g*v+h*M-m*E,e[n+2]=h*R+g*E+m*v-p*M,e[n+3]=g*R-m*M-p*v-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,m=Math.cos,p=Math.sin,h=m(r/2),g=m(o/2),M=m(c/2),v=p(r/2),E=p(o/2),R=p(c/2);switch(f){case"XYZ":this._x=v*g*M+h*E*R,this._y=h*E*M-v*g*R,this._z=h*g*R+v*E*M,this._w=h*g*M-v*E*R;break;case"YXZ":this._x=v*g*M+h*E*R,this._y=h*E*M-v*g*R,this._z=h*g*R-v*E*M,this._w=h*g*M+v*E*R;break;case"ZXY":this._x=v*g*M-h*E*R,this._y=h*E*M+v*g*R,this._z=h*g*R+v*E*M,this._w=h*g*M-v*E*R;break;case"ZYX":this._x=v*g*M-h*E*R,this._y=h*E*M+v*g*R,this._z=h*g*R-v*E*M,this._w=h*g*M+v*E*R;break;case"YZX":this._x=v*g*M+h*E*R,this._y=h*E*M+v*g*R,this._z=h*g*R-v*E*M,this._w=h*g*M-v*E*R;break;case"XZY":this._x=v*g*M-h*E*R,this._y=h*E*M-v*g*R,this._z=h*g*R+v*E*M,this._w=h*g*M+v*E*R;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],m=n[5],p=n[9],h=n[2],g=n[6],M=n[10],v=r+m+M;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-h)*E,this._z=(f-o)*E}else if(r>m&&r>M){const E=2*Math.sqrt(1+r-m-M);this._w=(g-p)/E,this._x=.25*E,this._y=(o+f)/E,this._z=(c+h)/E}else if(m>M){const E=2*Math.sqrt(1+m-r-M);this._w=(c-h)/E,this._x=(o+f)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+M-r-m);this._w=(f-o)/E,this._x=(c+h)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,m=n._x,p=n._y,h=n._z,g=n._w;return this._x=r*g+f*m+o*h-c*p,this._y=o*g+f*p+c*m-r*h,this._z=c*g+f*h+r*p-o*m,this._w=f*g-r*m-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(r=-r,o=-o,c=-c,f=-f,m=-m);let p=1-n;if(m<.9995){const h=Math.acos(m),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pm=class pm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,m=e.z,p=e.w,h=2*(f*o-m*r),g=2*(m*n-c*o),M=2*(c*r-f*n);return this.x=n+p*h+f*M-m*g,this.y=r+p*g+m*h-c*M,this.z=o+p*M+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,m=n.y,p=n.z;return this.x=o*p-c*m,this.y=c*f-r*p,this.z=r*m-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pm.prototype.isVector3=!0;let ee=pm;const nh=new ee,pv=new Cs,mm=class mm{constructor(e,n,r,o,c,f,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h)}set(e,n,r,o,c,f,m,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=m,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[3],p=r[6],h=r[1],g=r[4],M=r[7],v=r[2],E=r[5],R=r[8],N=o[0],T=o[3],x=o[6],O=o[1],I=o[4],S=o[7],L=o[2],P=o[5],F=o[8];return c[0]=f*N+m*O+p*L,c[3]=f*T+m*I+p*P,c[6]=f*x+m*S+p*F,c[1]=h*N+g*O+M*L,c[4]=h*T+g*I+M*P,c[7]=h*x+g*S+M*F,c[2]=v*N+E*O+R*L,c[5]=v*T+E*I+R*P,c[8]=v*x+E*S+R*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8];return n*f*g-n*m*h-r*c*g+r*m*p+o*c*h-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8],M=g*f-m*h,v=m*p-g*c,E=h*c-f*p,R=n*M+r*v+o*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=M*N,e[1]=(o*h-g*r)*N,e[2]=(m*r-o*f)*N,e[3]=v*N,e[4]=(g*n-o*p)*N,e[5]=(o*c-m*n)*N,e[6]=E*N,e[7]=(r*p-h*n)*N,e[8]=(f*n-r*c)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,m){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*f+h*m)+f+e,-o*h,o*p,-o*(-h*f+p*m)+m+n,0,0,1),this}scale(e,n){return dl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,n)),this}rotate(e){return dl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,n){return dl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mm.prototype.isMatrix3=!0;let pt=mm;const ih=new pt,mv=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gv=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YE(){const a={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Zt&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Zt&&(o.r=hl(o.r),o.g=hl(o.g),o.b=hl(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===bs?Du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return dl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return dl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[wu]:{primaries:e,whitePoint:r,transfer:Du,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),a}const Nt=YE();function Ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function hl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let kr;class qE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{kr===void 0&&(kr=Nu("canvas")),kr.width=e.width,kr.height=e.height;const o=kr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=kr}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ga(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ga(n[r]/255)*255):n[r]=Ga(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,m=o.length;f<m;f++)o[f].isDataTexture?c.push(ah(o[f].image)):c.push(ah(o[f]))}else c=ah(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ah(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?qE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let KE=0;const sh=new ee;class ei extends Us{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,r=Ba,o=Ba,c=Hn,f=sr,m=Ki,p=Ti,h=ei.DEFAULT_ANISOTROPY,g=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ha(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case Ba:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case Ba:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Ry;ei.DEFAULT_ANISOTROPY=1;const gm=class gm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],g=p[4],M=p[8],v=p[1],E=p[5],R=p[9],N=p[2],T=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(M-N)<.01&&Math.abs(R-T)<.01){if(Math.abs(g+v)<.1&&Math.abs(M+N)<.1&&Math.abs(R+T)<.1&&Math.abs(h+E+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(h+1)/2,S=(E+1)/2,L=(x+1)/2,P=(g+v)/4,F=(M+N)/4,A=(R+T)/4;return I>S&&I>L?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=P/r,c=F/r):S>L?S<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(S),r=P/o,c=A/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=F/c,o=A/c),this.set(r,o,c,n),this}let O=Math.sqrt((T-R)*(T-R)+(M-N)*(M-N)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(T-R)/O,this.y=(M-N)/O,this.z=(v-g)/O,this.w=Math.acos((h+E+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gm.prototype.isVector4=!0;let vn=gm;class QE extends Us{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new vn(0,0,e,n),this.scissorTest=!1,this.viewport=new vn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new ei(o),f=r.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new $p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends QE{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Iy extends ei{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JE extends ei{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zu=class zu{constructor(e,n,r,o,c,f,m,p,h,g,M,v,E,R,N,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h,g,M,v,E,R,N,T)}set(e,n,r,o,c,f,m,p,h,g,M,v,E,R,N,T){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=f,x[9]=m,x[13]=p,x[2]=h,x[6]=g,x[10]=M,x[14]=v,x[3]=E,x[7]=R,x[11]=N,x[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Vr.setFromMatrixColumn(e,0).length(),c=1/Vr.setFromMatrixColumn(e,1).length(),f=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),m=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const v=f*g,E=f*M,R=m*g,N=m*M;n[0]=p*g,n[4]=-p*M,n[8]=h,n[1]=E+R*h,n[5]=v-N*h,n[9]=-m*p,n[2]=N-v*h,n[6]=R+E*h,n[10]=f*p}else if(e.order==="YXZ"){const v=p*g,E=p*M,R=h*g,N=h*M;n[0]=v+N*m,n[4]=R*m-E,n[8]=f*h,n[1]=f*M,n[5]=f*g,n[9]=-m,n[2]=E*m-R,n[6]=N+v*m,n[10]=f*p}else if(e.order==="ZXY"){const v=p*g,E=p*M,R=h*g,N=h*M;n[0]=v-N*m,n[4]=-f*M,n[8]=R+E*m,n[1]=E+R*m,n[5]=f*g,n[9]=N-v*m,n[2]=-f*h,n[6]=m,n[10]=f*p}else if(e.order==="ZYX"){const v=f*g,E=f*M,R=m*g,N=m*M;n[0]=p*g,n[4]=R*h-E,n[8]=v*h+N,n[1]=p*M,n[5]=N*h+v,n[9]=E*h-R,n[2]=-h,n[6]=m*p,n[10]=f*p}else if(e.order==="YZX"){const v=f*p,E=f*h,R=m*p,N=m*h;n[0]=p*g,n[4]=N-v*M,n[8]=R*M+E,n[1]=M,n[5]=f*g,n[9]=-m*g,n[2]=-h*g,n[6]=E*M+R,n[10]=v-N*M}else if(e.order==="XZY"){const v=f*p,E=f*h,R=m*p,N=m*h;n[0]=p*g,n[4]=-M,n[8]=h*g,n[1]=v*M+N,n[5]=f*g,n[9]=E*M-R,n[2]=R*M-E,n[6]=m*g,n[10]=N*M+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,$E)}lookAt(e,n,r){const o=this.elements;return Ei.subVectors(e,n),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),_s.crossVectors(r,Ei),_s.lengthSq()===0&&(Math.abs(r.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),_s.crossVectors(r,Ei)),_s.normalize(),qc.crossVectors(Ei,_s),o[0]=_s.x,o[4]=qc.x,o[8]=Ei.x,o[1]=_s.y,o[5]=qc.y,o[9]=Ei.y,o[2]=_s.z,o[6]=qc.z,o[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[4],p=r[8],h=r[12],g=r[1],M=r[5],v=r[9],E=r[13],R=r[2],N=r[6],T=r[10],x=r[14],O=r[3],I=r[7],S=r[11],L=r[15],P=o[0],F=o[4],A=o[8],U=o[12],Z=o[1],H=o[5],J=o[9],me=o[13],pe=o[2],ie=o[6],B=o[10],X=o[14],re=o[3],xe=o[7],Te=o[11],z=o[15];return c[0]=f*P+m*Z+p*pe+h*re,c[4]=f*F+m*H+p*ie+h*xe,c[8]=f*A+m*J+p*B+h*Te,c[12]=f*U+m*me+p*X+h*z,c[1]=g*P+M*Z+v*pe+E*re,c[5]=g*F+M*H+v*ie+E*xe,c[9]=g*A+M*J+v*B+E*Te,c[13]=g*U+M*me+v*X+E*z,c[2]=R*P+N*Z+T*pe+x*re,c[6]=R*F+N*H+T*ie+x*xe,c[10]=R*A+N*J+T*B+x*Te,c[14]=R*U+N*me+T*X+x*z,c[3]=O*P+I*Z+S*pe+L*re,c[7]=O*F+I*H+S*ie+L*xe,c[11]=O*A+I*J+S*B+L*Te,c[15]=O*U+I*me+S*X+L*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],m=e[5],p=e[9],h=e[13],g=e[2],M=e[6],v=e[10],E=e[14],R=e[3],N=e[7],T=e[11],x=e[15],O=p*E-h*v,I=m*E-h*M,S=m*v-p*M,L=f*E-h*g,P=f*v-p*g,F=f*M-m*g;return n*(N*O-T*I+x*S)-r*(R*O-T*L+x*P)+o*(R*I-N*L+x*F)-c*(R*S-N*P+T*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],f=e[5],m=e[9],p=e[2],h=e[6],g=e[10];return n*(f*g-m*h)-r*(c*g-m*p)+o*(c*h-f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8],M=e[9],v=e[10],E=e[11],R=e[12],N=e[13],T=e[14],x=e[15],O=n*m-r*f,I=n*p-o*f,S=n*h-c*f,L=r*p-o*m,P=r*h-c*m,F=o*h-c*p,A=g*N-M*R,U=g*T-v*R,Z=g*x-E*R,H=M*T-v*N,J=M*x-E*N,me=v*x-E*T,pe=O*me-I*J+S*H+L*Z-P*U+F*A;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/pe;return e[0]=(m*me-p*J+h*H)*ie,e[1]=(o*J-r*me-c*H)*ie,e[2]=(N*F-T*P+x*L)*ie,e[3]=(v*P-M*F-E*L)*ie,e[4]=(p*Z-f*me-h*U)*ie,e[5]=(n*me-o*Z+c*U)*ie,e[6]=(T*S-R*F-x*I)*ie,e[7]=(g*F-v*S+E*I)*ie,e[8]=(f*J-m*Z+h*A)*ie,e[9]=(r*Z-n*J-c*A)*ie,e[10]=(R*P-N*S+x*O)*ie,e[11]=(M*S-g*P-E*O)*ie,e[12]=(m*U-f*H-p*A)*ie,e[13]=(n*H-r*U+o*A)*ie,e[14]=(N*I-R*L-T*O)*ie,e[15]=(g*L-M*I+v*O)*ie,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,m=e.y,p=e.z,h=c*f,g=c*m;return this.set(h*f+r,h*m-o*p,h*p+o*m,0,h*m+o*p,g*m+r,g*p-o*f,0,h*p-o*m,g*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,m=n._z,p=n._w,h=c+c,g=f+f,M=m+m,v=c*h,E=c*g,R=c*M,N=f*g,T=f*M,x=m*M,O=p*h,I=p*g,S=p*M,L=r.x,P=r.y,F=r.z;return o[0]=(1-(N+x))*L,o[1]=(E+S)*L,o[2]=(R-I)*L,o[3]=0,o[4]=(E-S)*P,o[5]=(1-(v+x))*P,o[6]=(T+O)*P,o[7]=0,o[8]=(R+I)*F,o[9]=(T-O)*F,o[10]=(1-(v+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Vr.set(o[0],o[1],o[2]).length();const m=Vr.set(o[4],o[5],o[6]).length(),p=Vr.set(o[8],o[9],o[10]).length();c<0&&(f=-f),Wi.copy(this);const h=1/f,g=1/m,M=1/p;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=g,Wi.elements[5]*=g,Wi.elements[6]*=g,Wi.elements[8]*=M,Wi.elements[9]*=M,Wi.elements[10]*=M,n.setFromRotationMatrix(Wi),r.x=f,r.y=m,r.z=p,this}makePerspective(e,n,r,o,c,f,m=la,p=!1){const h=this.elements,g=2*c/(n-e),M=2*c/(r-o),v=(n+e)/(n-e),E=(r+o)/(r-o);let R,N;if(p)R=c/(f-c),N=f*c/(f-c);else if(m===la)R=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(m===Do)R=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=M,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,m=la,p=!1){const h=this.elements,g=2/(n-e),M=2/(r-o),v=-(n+e)/(n-e),E=-(r+o)/(r-o);let R,N;if(p)R=1/(f-c),N=f/(f-c);else if(m===la)R=-2/(f-c),N=-(f+c)/(f-c);else if(m===Do)R=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=M,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};zu.prototype.isMatrix4=!0;let _n=zu;const Vr=new ee,Wi=new _n,jE=new ee(0,0,0),$E=new ee(1,1,1),_s=new ee,qc=new ee,Ei=new ee,_v=new _n,vv=new Cs;class ws{constructor(e=0,n=0,r=0,o=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],m=o[8],p=o[1],h=o[5],g=o[9],M=o[2],v=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return _v.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_v,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const yv=new ee,Xr=new Cs,Na=new _n,Zc=new ee,uo=new ee,tb=new ee,nb=new Cs,xv=new ee(1,0,0),Sv=new ee(0,1,0),Mv=new ee(0,0,1),Ev={type:"added"},ib={type:"removed"},Wr={type:"childadded",child:null},rh={type:"childremoved",child:null};class Gn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new ee,n=new ws,r=new Cs,o=new ee(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new pt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,n){return yv.copy(e).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Zc.copy(e):Zc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(uo,Zc,this.up):Na.lookAt(Zc,uo,this.up),this.quaternion.setFromRotationMatrix(Na),o&&(Na.extractRotation(o.matrixWorld),Xr.setFromRotationMatrix(Na),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ev),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ib),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ev),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,m=c.length;f<m;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const M=p[h];c(e.shapes,M)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));o.material=m}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];o.animations.push(c(e.animations,p))}}if(n){const m=f(e.geometries),p=f(e.materials),h=f(e.textures),g=f(e.images),M=f(e.shapes),v=f(e.skeletons),E=f(e.animations),R=f(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=o,r;function f(m){const p=[];for(const h in m){const g=m[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new ee(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const T=n.getJointPose(N,r),x=this._getHandJoint(h,N);T!==null&&(x.matrix.fromArray(T.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=T.radius),x.visible=T!==null}const g=h.joints["index-finger-tip"],M=h.joints["thumb-tip"],v=g.position.distanceTo(M.position),E=.02,R=.005;h.inputState.pinching&&v>E+R?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=E-R&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return m!==null&&(m.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new za;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function oh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Nt.workingColorSpace){if(e=jp(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=oh(f,c,e+1/3),this.g=oh(f,c,e),this.b=oh(f,c,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,n=di){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],m=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=zy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Nt.workingToColorSpace($n.copy(this),e),Math.round(St($n.r*255,0,255))*65536+Math.round(St($n.g*255,0,255))*256+Math.round(St($n.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.workingToColorSpace($n.copy(this),n);const r=$n.r,o=$n.g,c=$n.b,f=Math.max(r,o,c),m=Math.min(r,o,c);let p,h;const g=(m+f)/2;if(m===f)p=0,h=0;else{const M=f-m;switch(h=g<=.5?M/(f+m):M/(2-f-m),f){case r:p=(o-c)/M+(o<c?6:0);break;case o:p=(c-r)/M+2;break;case c:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=Nt.workingColorSpace){return Nt.workingToColorSpace($n.copy(this),n),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=di){Nt.workingToColorSpace($n.copy(this),e);const n=$n.r,r=$n.g,o=$n.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(Kc);const r=To(vs.h,Kc.h,n),o=To(vs.s,Kc.s,n),c=To(vs.l,Kc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Tt;Tt.NAMES=zy;class tm{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=n,this.far=r}clone(){return new tm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sb extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yi=new ee,Ua=new ee,ch=new ee,La=new ee,Yr=new ee,qr=new ee,bv=new ee,uh=new ee,fh=new ee,dh=new ee,hh=new vn,ph=new vn,mh=new vn;class Fi{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Yi.subVectors(e,n),o.cross(Yi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Yi.subVectors(o,n),Ua.subVectors(r,n),ch.subVectors(e,n);const f=Yi.dot(Yi),m=Yi.dot(Ua),p=Yi.dot(ch),h=Ua.dot(Ua),g=Ua.dot(ch),M=f*h-m*m;if(M===0)return c.set(0,0,0),null;const v=1/M,E=(h*p-m*g)*v,R=(f*g-m*p)*v;return c.set(1-E-R,R,E)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,r,o,c,f,m,p){return this.getBarycoord(e,n,r,o,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,La.x),p.addScaledVector(f,La.y),p.addScaledVector(m,La.z),p)}static getInterpolatedAttribute(e,n,r,o,c,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(hh,c.x),f.addScaledVector(ph,c.y),f.addScaledVector(mh,c.z),f}static isFrontFacing(e,n,r,o){return Yi.subVectors(r,n),Ua.subVectors(e,n),Yi.cross(Ua).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Yi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Fi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,m;Yr.subVectors(o,r),qr.subVectors(c,r),uh.subVectors(e,r);const p=Yr.dot(uh),h=qr.dot(uh);if(p<=0&&h<=0)return n.copy(r);fh.subVectors(e,o);const g=Yr.dot(fh),M=qr.dot(fh);if(g>=0&&M<=g)return n.copy(o);const v=p*M-g*h;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Yr,f);dh.subVectors(e,c);const E=Yr.dot(dh),R=qr.dot(dh);if(R>=0&&E<=R)return n.copy(c);const N=E*h-p*R;if(N<=0&&h>=0&&R<=0)return m=h/(h-R),n.copy(r).addScaledVector(qr,m);const T=g*R-E*M;if(T<=0&&M-g>=0&&E-R>=0)return bv.subVectors(c,o),m=(M-g)/(M-g+(E-R)),n.copy(o).addScaledVector(bv,m);const x=1/(T+N+v);return f=N*x,m=v*x,n.copy(r).addScaledVector(Yr,f).addScaledVector(qr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oo{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(qi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(qi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,qi):qi.fromBufferAttribute(c,f),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qc.copy(r.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Jc.subVectors(this.max,fo),Zr.subVectors(e.a,fo),Kr.subVectors(e.b,fo),Qr.subVectors(e.c,fo),ys.subVectors(Kr,Zr),xs.subVectors(Qr,Kr),$s.subVectors(Zr,Qr);let n=[0,-ys.z,ys.y,0,-xs.z,xs.y,0,-$s.z,$s.y,ys.z,0,-ys.x,xs.z,0,-xs.x,$s.z,0,-$s.x,-ys.y,ys.x,0,-xs.y,xs.x,0,-$s.y,$s.x,0];return!gh(n,Zr,Kr,Qr,Jc)||(n=[1,0,0,0,1,0,0,0,1],!gh(n,Zr,Kr,Qr,Jc))?!1:(jc.crossVectors(ys,xs),n=[jc.x,jc.y,jc.z],gh(n,Zr,Kr,Qr,Jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],qi=new ee,Qc=new Oo,Zr=new ee,Kr=new ee,Qr=new ee,ys=new ee,xs=new ee,$s=new ee,fo=new ee,Jc=new ee,jc=new ee,er=new ee;function gh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){er.fromArray(a,c);const m=o.x*Math.abs(er.x)+o.y*Math.abs(er.y)+o.z*Math.abs(er.z),p=e.dot(er),h=n.dot(er),g=r.dot(er);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>m)return!1}return!0}const Nn=new ee,$c=new lt;let rb=0;class Qi extends Us{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Tp,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)$c.fromBufferAttribute(this,n),$c.applyMatrix3(e),this.setXY(n,$c.x,$c.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix3(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix4(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.applyNormalMatrix(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Nn.fromBufferAttribute(this,n),Nn.transformDirection(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Zi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array),c=Kt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class By extends Qi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fy extends Qi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class kn extends Qi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const lb=new Oo,ho=new ee,_h=new ee;class nm{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ho,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(_h)),this.expandByPoint(ho.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ob=0;const Ii=new _n,vh=new Gn,Jr=new ee,bi=new Oo,po=new Oo,Fn=new ee;class Ri extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AE(e)?Fy:By)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,n,r){return Ii.makeTranslation(e,n,r),this.applyMatrix4(Ii),this}scale(e,n,r){return Ii.makeScale(e,n,r),this.applyMatrix4(Ii),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new kn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];bi.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const m=n[c];po.setFromBufferAttribute(m),this.morphTargetsRelative?(Fn.addVectors(bi.min,po.min),bi.expandByPoint(Fn),Fn.addVectors(bi.max,po.max),bi.expandByPoint(Fn)):(bi.expandByPoint(po.min),bi.expandByPoint(po.max))}bi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Fn));if(n)for(let c=0,f=n.length;c<f;c++){const m=n[c],p=this.morphTargetsRelative;for(let h=0,g=m.count;h<g;h++)Fn.fromBufferAttribute(m,h),p&&(Jr.fromBufferAttribute(e,h),Fn.add(Jr)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const m=[],p=[];for(let A=0;A<r.count;A++)m[A]=new ee,p[A]=new ee;const h=new ee,g=new ee,M=new ee,v=new lt,E=new lt,R=new lt,N=new ee,T=new ee;function x(A,U,Z){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),M.fromBufferAttribute(r,Z),v.fromBufferAttribute(c,A),E.fromBufferAttribute(c,U),R.fromBufferAttribute(c,Z),g.sub(h),M.sub(h),E.sub(v),R.sub(v);const H=1/(E.x*R.y-R.x*E.y);isFinite(H)&&(N.copy(g).multiplyScalar(R.y).addScaledVector(M,-E.y).multiplyScalar(H),T.copy(M).multiplyScalar(E.x).addScaledVector(g,-R.x).multiplyScalar(H),m[A].add(N),m[U].add(N),m[Z].add(N),p[A].add(T),p[U].add(T),p[Z].add(T))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let A=0,U=O.length;A<U;++A){const Z=O[A],H=Z.start,J=Z.count;for(let me=H,pe=H+J;me<pe;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const I=new ee,S=new ee,L=new ee,P=new ee;function F(A){L.fromBufferAttribute(o,A),P.copy(L);const U=m[A];I.copy(U),I.sub(L.multiplyScalar(L.dot(U))).normalize(),S.crossVectors(P,U);const H=S.dot(p[A])<0?-1:1;f.setXYZW(A,I.x,I.y,I.z,H)}for(let A=0,U=O.length;A<U;++A){const Z=O[A],H=Z.start,J=Z.count;for(let me=H,pe=H+J;me<pe;me+=3)F(e.getX(me+0)),F(e.getX(me+1)),F(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,f=new ee,m=new ee,p=new ee,h=new ee,g=new ee,M=new ee;if(e)for(let v=0,E=e.count;v<E;v+=3){const R=e.getX(v+0),N=e.getX(v+1),T=e.getX(v+2);o.fromBufferAttribute(n,R),c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,T),g.subVectors(f,c),M.subVectors(o,c),g.cross(M),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),h.fromBufferAttribute(r,T),m.add(g),p.add(g),h.add(g),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(T,h.x,h.y,h.z)}else for(let v=0,E=n.count;v<E;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),M.subVectors(o,c),g.cross(M),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Fn.fromBufferAttribute(e,n),Fn.normalize(),e.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(m,p){const h=m.array,g=m.itemSize,M=m.normalized,v=new h.constructor(p.length*g);let E=0,R=0;for(let N=0,T=p.length;N<T;N++){m.isInterleavedBufferAttribute?E=p[N]*m.data.stride+m.offset:E=p[N]*g;for(let x=0;x<g;x++)v[R++]=h[E++]}return new Qi(v,g,M)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,r=this.index.array,o=this.attributes;for(const m in o){const p=o[m],h=e(p,r);n.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let g=0,M=h.length;g<M;g++){const v=h[g],E=e(v,r);p.push(E)}n.morphAttributes[m]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,p=f.length;m<p;m++){const h=f[m];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let M=0,v=h.length;M<v;M++){const E=h[M];g.push(E.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],M=c[h];for(let v=0,E=M.length;v<E;v++)g.push(M[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const M=f[h];this.addGroup(M.start,M.count,M.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Tp,this.updateRanges=[],this.version=0,this.uuid=Ha()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[r+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ni=new ee;class Lu{constructor(e,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.applyMatrix4(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.applyNormalMatrix(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.transformDirection(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Zi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Zi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Zi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Zi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Zi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array),c=Kt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Qi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ub=0;class xl extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=fl,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fl&&(r.blending=this.blending),this.side!==Rs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ml&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const m in c){const p=c[m];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hy extends xl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let jr;const mo=new ee,$r=new ee,el=new ee,tl=new lt,go=new lt,Gy=new _n,eu=new ee,_o=new ee,tu=new ee,Tv=new lt,yh=new lt,Av=new lt;class fb extends Gn{constructor(e=new Hy){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Ri;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new cb(n,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new Lu(r,3,0,!1)),jr.setAttribute("uv",new Lu(r,2,3,!1))}this.geometry=jr,this.material=e,this.center=new lt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Gy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),el.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-el.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const f=this.center;nu(eu.set(-.5,-.5,0),el,f,$r,o,c),nu(_o.set(.5,-.5,0),el,f,$r,o,c),nu(tu.set(.5,.5,0),el,f,$r,o,c),Tv.set(0,0),yh.set(1,0),Av.set(1,1);let m=e.ray.intersectTriangle(eu,_o,tu,!1,mo);if(m===null&&(nu(_o.set(-.5,.5,0),el,f,$r,o,c),yh.set(0,1),m=e.ray.intersectTriangle(eu,tu,_o,!1,mo),m===null))return;const p=e.ray.origin.distanceTo(mo);p<e.near||p>e.far||n.push({distance:p,point:mo.clone(),uv:Fi.getInterpolation(mo,eu,_o,tu,Tv,yh,Av,new lt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nu(a,e,n,r,o,c){tl.subVectors(a,n).addScalar(.5).multiply(r),o!==void 0?(go.x=c*tl.x-o*tl.y,go.y=o*tl.x+c*tl.y):go.copy(tl),a.copy(e),a.x+=go.x,a.y+=go.y,a.applyMatrix4(Gy)}const Pa=new ee,xh=new ee,iu=new ee,Ss=new ee,Sh=new ee,au=new ee,Mh=new ee;class im{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,n),Pa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){xh.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),Ss.copy(this.origin).sub(xh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(iu),m=Ss.dot(this.direction),p=-Ss.dot(iu),h=Ss.lengthSq(),g=Math.abs(1-f*f);let M,v,E,R;if(g>0)if(M=f*p-m,v=f*m-p,R=c*g,M>=0)if(v>=-R)if(v<=R){const N=1/g;M*=N,v*=N,E=M*(M+f*v+2*m)+v*(f*M+v+2*p)+h}else v=c,M=Math.max(0,-(f*v+m)),E=-M*M+v*(v+2*p)+h;else v=-c,M=Math.max(0,-(f*v+m)),E=-M*M+v*(v+2*p)+h;else v<=-R?(M=Math.max(0,-(-f*c+m)),v=M>0?-c:Math.min(Math.max(-c,-p),c),E=-M*M+v*(v+2*p)+h):v<=R?(M=0,v=Math.min(Math.max(-c,-p),c),E=v*(v+2*p)+h):(M=Math.max(0,-(f*c+m)),v=M>0?c:Math.min(Math.max(-c,-p),c),E=-M*M+v*(v+2*p)+h);else v=f>0?-c:c,M=Math.max(0,-(f*v+m)),E=-M*M+v*(v+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(xh).addScaledVector(iu,v),E}intersectSphere(e,n){Pa.subVectors(e.center,this.origin);const r=Pa.dot(this.direction),o=Pa.dot(Pa)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),m=r-f,p=r+f;return p<0?null:m<0?this.at(p,n):this.at(m,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,m,p;const h=1/this.direction.x,g=1/this.direction.y,M=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),M>=0?(m=(e.min.z-v.z)*M,p=(e.max.z-v.z)*M):(m=(e.max.z-v.z)*M,p=(e.min.z-v.z)*M),r>p||m>o)||((m>r||r!==r)&&(r=m),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,n,r,o,c){Sh.subVectors(n,e),au.subVectors(r,e),Mh.crossVectors(Sh,au);let f=this.direction.dot(Mh),m;if(f>0){if(o)return null;m=1}else if(f<0)m=-1,f=-f;else return null;Ss.subVectors(this.origin,e);const p=m*this.direction.dot(au.crossVectors(Ss,au));if(p<0)return null;const h=m*this.direction.dot(Sh.cross(Ss));if(h<0||p+h>f)return null;const g=-m*Ss.dot(Mh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ao extends xl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rv=new _n,tr=new im,su=new nm,Cv=new ee,ru=new ee,lu=new ee,ou=new ee,Eh=new ee,cu=new ee,wv=new ee,uu=new ee;class Un extends Gn{constructor(e=new Ri,n=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(c&&m){cu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=m[p],M=c[p];g!==0&&(Eh.fromBufferAttribute(M,e),f?cu.addScaledVector(Eh,g):cu.addScaledVector(Eh.sub(n),g))}n.add(cu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(c),tr.copy(e.ray).recast(e.near),!(su.containsPoint(tr.origin)===!1&&(tr.intersectSphere(su,Cv)===null||tr.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Rv.copy(c).invert(),tr.copy(e.ray).applyMatrix4(Rv),!(r.boundingBox!==null&&tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,M=c.attributes.normal,v=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(f))for(let R=0,N=v.length;R<N;R++){const T=v[R],x=f[T.materialIndex],O=Math.max(T.start,E.start),I=Math.min(m.count,Math.min(T.start+T.count,E.start+E.count));for(let S=O,L=I;S<L;S+=3){const P=m.getX(S),F=m.getX(S+1),A=m.getX(S+2);o=fu(this,x,e,r,h,g,M,P,F,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,E.start),N=Math.min(m.count,E.start+E.count);for(let T=R,x=N;T<x;T+=3){const O=m.getX(T),I=m.getX(T+1),S=m.getX(T+2);o=fu(this,f,e,r,h,g,M,O,I,S),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let R=0,N=v.length;R<N;R++){const T=v[R],x=f[T.materialIndex],O=Math.max(T.start,E.start),I=Math.min(p.count,Math.min(T.start+T.count,E.start+E.count));for(let S=O,L=I;S<L;S+=3){const P=S,F=S+1,A=S+2;o=fu(this,x,e,r,h,g,M,P,F,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count);for(let T=R,x=N;T<x;T+=3){const O=T,I=T+1,S=T+2;o=fu(this,f,e,r,h,g,M,O,I,S),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}}}function db(a,e,n,r,o,c,f,m){let p;if(e.side===hi?p=r.intersectTriangle(f,c,o,!0,m):p=r.intersectTriangle(o,c,f,e.side===Rs,m),p===null)return null;uu.copy(m),uu.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(uu);return h<n.near||h>n.far?null:{distance:h,point:uu.clone(),object:a}}function fu(a,e,n,r,o,c,f,m,p,h){a.getVertexPosition(m,ru),a.getVertexPosition(p,lu),a.getVertexPosition(h,ou);const g=db(a,e,n,r,ru,lu,ou,wv);if(g){const M=new ee;Fi.getBarycoord(wv,ru,lu,ou,M),o&&(g.uv=Fi.getInterpolatedAttribute(o,m,p,h,M,new lt)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,m,p,h,M,new lt)),f&&(g.normal=Fi.getInterpolatedAttribute(f,m,p,h,M,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:m,b:p,c:h,normal:new ee,materialIndex:0};Fi.getNormal(ru,lu,ou,v.normal),g.face=v,g.barycoord=M}return g}class hb extends ei{constructor(e=null,n=1,r=1,o,c,f,m,p,h=Kn,g=Kn,M,v){super(null,f,m,p,h,g,o,c,M,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new ee,pb=new ee,mb=new pt;class Es{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=bh.subVectors(r,n).cross(pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(bh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(o,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||mb.getNormalMatrix(e),o=this.coplanarPoint(bh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new nm,gb=new lt(.5,.5),du=new ee;class am{constructor(e=new Es,n=new Es,r=new Es,o=new Es,c=new Es,f=new Es){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(n),m[2].copy(r),m[3].copy(o),m[4].copy(c),m[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=la,r=!1){const o=this.planes,c=e.elements,f=c[0],m=c[1],p=c[2],h=c[3],g=c[4],M=c[5],v=c[6],E=c[7],R=c[8],N=c[9],T=c[10],x=c[11],O=c[12],I=c[13],S=c[14],L=c[15];if(o[0].setComponents(h-f,E-g,x-R,L-O).normalize(),o[1].setComponents(h+f,E+g,x+R,L+O).normalize(),o[2].setComponents(h+m,E+M,x+N,L+I).normalize(),o[3].setComponents(h-m,E-M,x-N,L-I).normalize(),r)o[4].setComponents(p,v,T,S).normalize(),o[5].setComponents(h-p,E-v,x-T,L-S).normalize();else if(o[4].setComponents(h-p,E-v,x-T,L-S).normalize(),n===la)o[5].setComponents(h+p,E+v,x+T,L+S).normalize();else if(n===Do)o[5].setComponents(p,v,T,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const n=gb.distanceTo(e.center);return nr.radius=.7071067811865476+n,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(du.x=o.normal.x>0?e.max.x:e.min.x,du.y=o.normal.y>0?e.max.y:e.min.y,du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ky extends ei{constructor(e=[],n=or,r,o,c,f,m,p,h,g){super(e,n,r,o,c,f,m,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _b extends ei{constructor(e,n,r,o,c,f,m,p,h){super(e,n,r,o,c,f,m,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _l extends ei{constructor(e,n,r=ua,o,c,f,m=Kn,p=Kn,h,g=Va,M=1){if(g!==Va&&g!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:M};super(v,o,c,f,m,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vb extends _l{constructor(e,n=ua,r=or,o,c,f=Kn,m=Kn,p,h=Va){const g={width:e,height:e,depth:1},M=[g,g,g,g,g,g];super(e,e,n,r,o,c,f,m,p,h),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vy extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ds extends Ri{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const m=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],h=[],g=[],M=[];let v=0,E=0;R("z","y","x",-1,-1,r,n,e,f,c,0),R("z","y","x",1,-1,r,n,-e,f,c,1),R("x","z","y",1,1,e,r,n,o,f,2),R("x","z","y",1,-1,e,r,-n,o,f,3),R("x","y","z",1,-1,e,n,r,o,c,4),R("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(M,2));function R(N,T,x,O,I,S,L,P,F,A,U){const Z=S/F,H=L/A,J=S/2,me=L/2,pe=P/2,ie=F+1,B=A+1;let X=0,re=0;const xe=new ee;for(let Te=0;Te<B;Te++){const z=Te*H-me;for(let te=0;te<ie;te++){const Re=te*Z-J;xe[N]=Re*O,xe[T]=z*I,xe[x]=pe,h.push(xe.x,xe.y,xe.z),xe[N]=0,xe[T]=0,xe[x]=P>0?1:-1,g.push(xe.x,xe.y,xe.z),M.push(te/F),M.push(1-Te/A),X+=1}}for(let Te=0;Te<A;Te++)for(let z=0;z<F;z++){const te=v+z+ie*Te,Re=v+z+ie*(Te+1),Pe=v+(z+1)+ie*(Te+1),Fe=v+(z+1)+ie*Te;p.push(te,Re,Fe),p.push(Re,Pe,Fe),re+=6}m.addGroup(E,re,U),E+=re,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fu extends Ri{constructor(e=1,n=1,r=1,o=32,c=1,f=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:m,thetaLength:p};const h=this;o=Math.floor(o),c=Math.floor(c);const g=[],M=[],v=[],E=[];let R=0;const N=[],T=r/2;let x=0;O(),f===!1&&(e>0&&I(!0),n>0&&I(!1)),this.setIndex(g),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(E,2));function O(){const S=new ee,L=new ee;let P=0;const F=(n-e)/r;for(let A=0;A<=c;A++){const U=[],Z=A/c,H=Z*(n-e)+e;for(let J=0;J<=o;J++){const me=J/o,pe=me*p+m,ie=Math.sin(pe),B=Math.cos(pe);L.x=H*ie,L.y=-Z*r+T,L.z=H*B,M.push(L.x,L.y,L.z),S.set(ie,F,B).normalize(),v.push(S.x,S.y,S.z),E.push(me,1-Z),U.push(R++)}N.push(U)}for(let A=0;A<o;A++)for(let U=0;U<c;U++){const Z=N[U][A],H=N[U+1][A],J=N[U+1][A+1],me=N[U][A+1];(e>0||U!==0)&&(g.push(Z,H,me),P+=3),(n>0||U!==c-1)&&(g.push(H,J,me),P+=3)}h.addGroup(x,P,0),x+=P}function I(S){const L=R,P=new lt,F=new ee;let A=0;const U=S===!0?e:n,Z=S===!0?1:-1;for(let J=1;J<=o;J++)M.push(0,T*Z,0),v.push(0,Z,0),E.push(.5,.5),R++;const H=R;for(let J=0;J<=o;J++){const pe=J/o*p+m,ie=Math.cos(pe),B=Math.sin(pe);F.x=U*B,F.y=T*Z,F.z=U*ie,M.push(F.x,F.y,F.z),v.push(0,Z,0),P.x=ie*.5+.5,P.y=B*.5*Z+.5,E.push(P.x,P.y),R++}for(let J=0;J<o;J++){const me=L+J,pe=H+J;S===!0?g.push(pe,pe+1,me):g.push(pe+1,pe,me),A+=3}h.addGroup(x,A,S===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Fu{constructor(e=1,n=1,r=32,o=1,c=!1,f=0,m=Math.PI*2){super(0,e,n,r,o,c,f,m),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:m}}static fromJSON(e){return new Ro(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ri{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,m=Math.floor(r),p=Math.floor(o),h=m+1,g=p+1,M=e/m,v=n/p,E=[],R=[],N=[],T=[];for(let x=0;x<g;x++){const O=x*v-f;for(let I=0;I<h;I++){const S=I*M-c;R.push(S,-O,0),N.push(0,0,1),T.push(I/m),T.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<m;O++){const I=O+h*x,S=O+h*(x+1),L=O+1+h*(x+1),P=O+1+h*x;E.push(I,S,P),E.push(S,L,P)}this.setIndex(E),this.setAttribute("position",new kn(R,3)),this.setAttribute("normal",new kn(N,3)),this.setAttribute("uv",new kn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class sm extends Ri{constructor(e=.5,n=1,r=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:f},r=Math.max(3,r),o=Math.max(1,o);const m=[],p=[],h=[],g=[];let M=e;const v=(n-e)/o,E=new ee,R=new lt;for(let N=0;N<=o;N++){for(let T=0;T<=r;T++){const x=c+T/r*f;E.x=M*Math.cos(x),E.y=M*Math.sin(x),p.push(E.x,E.y,E.z),h.push(0,0,1),R.x=(E.x/n+1)/2,R.y=(E.y/n+1)/2,g.push(R.x,R.y)}M+=v}for(let N=0;N<o;N++){const T=N*(r+1);for(let x=0;x<r;x++){const O=x+T,I=O,S=O+r+1,L=O+r+2,P=O+1;m.push(I,S,P),m.push(S,L,P)}}this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rm extends Ri{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:m},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+m,Math.PI);let h=0;const g=[],M=new ee,v=new ee,E=[],R=[],N=[],T=[];for(let x=0;x<=r;x++){const O=[],I=x/r,S=f+I*m,L=e*Math.cos(S),P=Math.sqrt(e*e-L*L);let F=0;x===0&&f===0?F=.5/n:x===r&&p===Math.PI&&(F=-.5/n);for(let A=0;A<=n;A++){const U=A/n,Z=o+U*c;M.x=-P*Math.cos(Z),M.y=L,M.z=P*Math.sin(Z),R.push(M.x,M.y,M.z),v.copy(M).normalize(),N.push(v.x,v.y,v.z),T.push(U+F,1-I),O.push(h++)}g.push(O)}for(let x=0;x<r;x++)for(let O=0;O<n;O++){const I=g[x][O+1],S=g[x][O],L=g[x+1][O],P=g[x+1][O+1];(x!==0||f>0)&&E.push(I,S,P),(x!==r-1||p<Math.PI)&&E.push(S,L,P)}this.setIndex(E),this.setAttribute("position",new kn(R,3)),this.setAttribute("normal",new kn(N,3)),this.setAttribute("uv",new kn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function vl(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Dv(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Dv(o[0])){const c=[];for(let f=0,m=o.length;f<m;f++)c[f]=o[f].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function ii(a){const e={};for(let n=0;n<a.length;n++){const r=vl(a[n]);for(const o in r)e[o]=r[o]}return e}function Dv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function yb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Xy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const xb={clone:vl,merge:ii};var Sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends xl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vl(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":this.uniforms[r].value=new lt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eb extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nv extends xl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bb extends xl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends xl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wy extends Gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Ab extends Wy{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Th=new _n,Uv=new ee,Lv=new ee;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new am,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Uv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uv),Lv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lv),n.updateMatrixWorld(),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Do||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hu=new ee,pu=new Cs,na=new ee;class Yy extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hu,pu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,na.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(hu,pu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new ee,Ov=new lt,Pv=new lt;class Bi extends Yy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,n){return this.getViewBounds(e,Ov,Pv),n.subVectors(Pv,Ov)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bo*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/h,o*=f.width/p,r*=f.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class lm extends Yy{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,m=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,m-=g*this.view.offsetY,p=m-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Cb extends Rb{constructor(){super(new lm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wb extends Wy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new Cb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const nl=-90,il=1;class Db extends Gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bi(nl,il,e,n);o.layers=this.layers,this.add(o);const c=new Bi(nl,il,e,n);c.layers=this.layers,this.add(c);const f=new Bi(nl,il,e,n);f.layers=this.layers,this.add(f);const m=new Bi(nl,il,e,n);m.layers=this.layers,this.add(m);const p=new Bi(nl,il,e,n);p.layers=this.layers,this.add(p);const h=new Bi(nl,il,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,m,p]=n;for(const h of n)this.remove(h);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Do)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,p,h,g]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,3,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(M,v,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Nb extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Iv=new _n;class Ub{constructor(e,n,r=0,o=1/0){this.ray=new im(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Dt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Iv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iv),this}intersectObject(e,n=!0,r=[]){return Rp(e,this,r,n),r.sort(zv),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Rp(e[o],this,r,n);return r.sort(zv),r}}function zv(a,e){return a.distance-e.distance}function Rp(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,m=c.length;f<m;f++)Rp(c[f],e,n,!0)}}class Bv{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(St(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _m=class _m{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};_m.prototype.isMatrix2=!0;let Fv=_m;class Lb extends Us{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hv(a,e,n,r){const o=Ob(r);switch(n){case Uy:return a*e;case Oy:return a*e/o.components*o.byteLength;case qp:return a*e/o.components*o.byteLength;case cr:return a*e*2/o.components*o.byteLength;case Zp:return a*e*2/o.components*o.byteLength;case Ly:return a*e*3/o.components*o.byteLength;case Ki:return a*e*4/o.components*o.byteLength;case Kp:return a*e*4/o.components*o.byteLength;case xu:case Su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(a,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(a,8)*Math.max(e,8)/2;case jh:case $h:case tp:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ep:case Ru:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case vp:case yp:case xp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Sp:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cu:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ob(a){switch(a){case Ti:case Cy:return{byteLength:1,components:1};case Co:case wy:case ka:return{byteLength:2,components:1};case Wp:case Yp:return{byteLength:2,components:4};case ua:case Xp:case ra:return{byteLength:4,components:1};case Dy:case Ny:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qy(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Pb(a){const e=new WeakMap;function n(m,p){const h=m.array,g=m.usage,M=h.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,h,g),m.onUploadCallback();let E;if(h instanceof Float32Array)E=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=a.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?E=a.HALF_FLOAT:E=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=a.SHORT;else if(h instanceof Uint32Array)E=a.UNSIGNED_INT;else if(h instanceof Int32Array)E=a.INT;else if(h instanceof Int8Array)E=a.BYTE;else if(h instanceof Uint8Array)E=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:M}}function r(m,p,h){const g=p.array,M=p.updateRanges;if(a.bindBuffer(h,m),M.length===0)a.bufferSubData(h,0,g);else{M.sort((E,R)=>E.start-R.start);let v=0;for(let E=1;E<M.length;E++){const R=M[v],N=M[E];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++v,M[v]=N)}M.length=v+1;for(let E=0,R=M.length;E<R;E++){const N=M[E];a.bufferSubData(h,N.start*g.BYTES_PER_ELEMENT,g,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(a.deleteBuffer(p.buffer),e.delete(m))}function f(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const g=e.get(m);(!g||g.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,n(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:o,remove:c,update:f}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
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
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Qb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s1=`#define PI 3.141592653589793
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
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
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
}`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C1=`#ifdef USE_ENVMAP
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
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
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
#endif`,O1=`uniform sampler2D dfgLUT;
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
}`,P1=`
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
#endif`,I1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
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
#endif`,$1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ST=`float getShadowMask() {
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
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`#include <common>
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
}`,VT=`#if DEPTH_PACKING == 3200
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
}`,XT=`#define DISTANCE
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
}`,WT=`#define DISTANCE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
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
}`,KT=`uniform vec3 diffuse;
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
}`,QT=`#include <common>
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
}`,JT=`uniform vec3 diffuse;
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
}`,jT=`#define LAMBERT
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
}`,$T=`#define LAMBERT
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
}`,eA=`#define MATCAP
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
}`,tA=`#define MATCAP
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
}`,nA=`#define NORMAL
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
}`,iA=`#define NORMAL
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
}`,aA=`#define PHONG
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
}`,sA=`#define PHONG
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
}`,rA=`#define STANDARD
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
}`,lA=`#define STANDARD
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
}`,oA=`#define TOON
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
}`,cA=`#define TOON
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
}`,uA=`uniform float size;
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
}`,fA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,hA=`uniform vec3 color;
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
}`,pA=`uniform float rotation;
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
}`,mA=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Ib,alphahash_pars_fragment:zb,alphamap_fragment:Bb,alphamap_pars_fragment:Fb,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:kb,aomap_pars_fragment:Vb,batching_pars_vertex:Xb,batching_vertex:Wb,begin_vertex:Yb,beginnormal_vertex:qb,bsdfs:Zb,iridescence_fragment:Kb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:a1,common:s1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:l1,displacementmap_pars_vertex:o1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:f1,colorspace_fragment:d1,colorspace_pars_fragment:h1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:y1,fog_pars_vertex:x1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:b1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:A1,lights_pars_begin:R1,lights_toon_fragment:w1,lights_toon_pars_fragment:D1,lights_phong_fragment:N1,lights_phong_pars_fragment:U1,lights_physical_fragment:L1,lights_physical_pars_fragment:O1,lights_fragment_begin:P1,lights_fragment_maps:I1,lights_fragment_end:z1,lightprobes_pars_fragment:B1,logdepthbuf_fragment:F1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:k1,map_fragment:V1,map_pars_fragment:X1,map_particle_fragment:W1,map_particle_pars_fragment:Y1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:K1,morphcolor_vertex:Q1,morphnormal_vertex:J1,morphtarget_pars_vertex:j1,morphtarget_vertex:$1,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:aT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:dT,project_vertex:hT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:_T,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:yT,shadowmap_vertex:xT,shadowmask_pars_fragment:ST,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:wT,transmission_fragment:DT,transmission_pars_fragment:NT,uv_pars_fragment:UT,uv_pars_vertex:LT,uv_vertex:OT,worldpos_vertex:PT,background_vert:IT,background_frag:zT,backgroundCube_vert:BT,backgroundCube_frag:FT,cube_vert:HT,cube_frag:GT,depth_vert:kT,depth_frag:VT,distance_vert:XT,distance_frag:WT,equirect_vert:YT,equirect_frag:qT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:QT,meshbasic_frag:JT,meshlambert_vert:jT,meshlambert_frag:$T,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:aA,meshphong_frag:sA,meshphysical_vert:rA,meshphysical_frag:lA,meshtoon_vert:oA,meshtoon_frag:cA,points_vert:uA,points_frag:fA,shadow_vert:dA,shadow_frag:hA,sprite_vert:pA,sprite_frag:mA},Ve={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},aa={basic:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:ii([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:ii([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:ii([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Tt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:ii([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:ii([Ve.points,Ve.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:ii([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:ii([Ve.common,Ve.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:ii([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:ii([Ve.sprite,Ve.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:ii([Ve.common,Ve.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:ii([Ve.lights,Ve.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};aa.physical={uniforms:ii([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const mu={r:0,b:0,g:0},gA=new _n,Zy=new pt;Zy.set(-1,0,0,0,1,0,0,0,1);function _A(a,e,n,r,o,c){const f=new Tt(0);let m=o===!0?0:1,p,h,g=null,M=0,v=null;function E(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const S=O.backgroundBlurriness>0;I=e.get(I,S)}return I}function R(O){let I=!1;const S=E(O);S===null?T(f,m):S&&S.isColor&&(T(S,1),I=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function N(O,I){const S=E(I);S&&(S.isCubeTexture||S.mapping===Bu)?(h===void 0&&(h=new Un(new Ds(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:vl(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Zy),h.material.toneMapped=Nt.getTransfer(S.colorSpace)!==Zt,(g!==S||M!==S.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=S,M=S.version,v=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(p===void 0&&(p=new Un(new lr(2,2),new fa({name:"BackgroundMaterial",uniforms:vl(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=S,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(S.colorSpace)!==Zt,S.matrixAutoUpdate===!0&&S.updateMatrix(),p.material.uniforms.uvTransform.value.copy(S.matrix),(g!==S||M!==S.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,g=S,M=S.version,v=a.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function T(O,I){O.getRGB(mu,Xy(a)),n.buffers.color.setClear(mu.r,mu.g,mu.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,I=1){f.set(O),m=I,T(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,T(f,m)},render:R,addToRenderList:N,dispose:x}}function vA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,f=!1;function m(H,J,me,pe,ie){let B=!1;const X=M(H,pe,me,J);c!==X&&(c=X,h(c.object)),B=E(H,pe,me,ie),B&&R(H,pe,me,ie),ie!==null&&e.update(ie,a.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,S(H,J,me,pe),ie!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return a.createVertexArray()}function h(H){return a.bindVertexArray(H)}function g(H){return a.deleteVertexArray(H)}function M(H,J,me,pe){const ie=pe.wireframe===!0;let B=r[J.id];B===void 0&&(B={},r[J.id]=B);const X=H.isInstancedMesh===!0?H.id:0;let re=B[X];re===void 0&&(re={},B[X]=re);let xe=re[me.id];xe===void 0&&(xe={},re[me.id]=xe);let Te=xe[ie];return Te===void 0&&(Te=v(p()),xe[ie]=Te),Te}function v(H){const J=[],me=[],pe=[];for(let ie=0;ie<n;ie++)J[ie]=0,me[ie]=0,pe[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:me,attributeDivisors:pe,object:H,attributes:{},index:null}}function E(H,J,me,pe){const ie=c.attributes,B=J.attributes;let X=0;const re=me.getAttributes();for(const xe in re)if(re[xe].location>=0){const z=ie[xe];let te=B[xe];if(te===void 0&&(xe==="instanceMatrix"&&H.instanceMatrix&&(te=H.instanceMatrix),xe==="instanceColor"&&H.instanceColor&&(te=H.instanceColor)),z===void 0||z.attribute!==te||te&&z.data!==te.data)return!0;X++}return c.attributesNum!==X||c.index!==pe}function R(H,J,me,pe){const ie={},B=J.attributes;let X=0;const re=me.getAttributes();for(const xe in re)if(re[xe].location>=0){let z=B[xe];z===void 0&&(xe==="instanceMatrix"&&H.instanceMatrix&&(z=H.instanceMatrix),xe==="instanceColor"&&H.instanceColor&&(z=H.instanceColor));const te={};te.attribute=z,z&&z.data&&(te.data=z.data),ie[xe]=te,X++}c.attributes=ie,c.attributesNum=X,c.index=pe}function N(){const H=c.newAttributes;for(let J=0,me=H.length;J<me;J++)H[J]=0}function T(H){x(H,0)}function x(H,J){const me=c.newAttributes,pe=c.enabledAttributes,ie=c.attributeDivisors;me[H]=1,pe[H]===0&&(a.enableVertexAttribArray(H),pe[H]=1),ie[H]!==J&&(a.vertexAttribDivisor(H,J),ie[H]=J)}function O(){const H=c.newAttributes,J=c.enabledAttributes;for(let me=0,pe=J.length;me<pe;me++)J[me]!==H[me]&&(a.disableVertexAttribArray(me),J[me]=0)}function I(H,J,me,pe,ie,B,X){X===!0?a.vertexAttribIPointer(H,J,me,ie,B):a.vertexAttribPointer(H,J,me,pe,ie,B)}function S(H,J,me,pe){N();const ie=pe.attributes,B=me.getAttributes(),X=J.defaultAttributeValues;for(const re in B){const xe=B[re];if(xe.location>=0){let Te=ie[re];if(Te===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(Te=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(Te=H.instanceColor)),Te!==void 0){const z=Te.normalized,te=Te.itemSize,Re=e.get(Te);if(Re===void 0)continue;const Pe=Re.buffer,Fe=Re.type,se=Re.bytesPerElement,Ce=Fe===a.INT||Fe===a.UNSIGNED_INT||Te.gpuType===Xp;if(Te.isInterleavedBufferAttribute){const be=Te.data,Be=be.stride,it=Te.offset;if(be.isInstancedInterleavedBuffer){for(let Ye=0;Ye<xe.locationSize;Ye++)x(xe.location+Ye,be.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ye=0;Ye<xe.locationSize;Ye++)T(xe.location+Ye);a.bindBuffer(a.ARRAY_BUFFER,Pe);for(let Ye=0;Ye<xe.locationSize;Ye++)I(xe.location+Ye,te/xe.locationSize,Fe,z,Be*se,(it+te/xe.locationSize*Ye)*se,Ce)}else{if(Te.isInstancedBufferAttribute){for(let be=0;be<xe.locationSize;be++)x(xe.location+be,Te.meshPerAttribute);H.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<xe.locationSize;be++)T(xe.location+be);a.bindBuffer(a.ARRAY_BUFFER,Pe);for(let be=0;be<xe.locationSize;be++)I(xe.location+be,te/xe.locationSize,Fe,z,te*se,te/xe.locationSize*be*se,Ce)}}else if(X!==void 0){const z=X[re];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(xe.location,z);break;case 3:a.vertexAttrib3fv(xe.location,z);break;case 4:a.vertexAttrib4fv(xe.location,z);break;default:a.vertexAttrib1fv(xe.location,z)}}}}O()}function L(){U();for(const H in r){const J=r[H];for(const me in J){const pe=J[me];for(const ie in pe){const B=pe[ie];for(const X in B)g(B[X].object),delete B[X];delete pe[ie]}}delete r[H]}}function P(H){if(r[H.id]===void 0)return;const J=r[H.id];for(const me in J){const pe=J[me];for(const ie in pe){const B=pe[ie];for(const X in B)g(B[X].object),delete B[X];delete pe[ie]}}delete r[H.id]}function F(H){for(const J in r){const me=r[J];for(const pe in me){const ie=me[pe];if(ie[H.id]===void 0)continue;const B=ie[H.id];for(const X in B)g(B[X].object),delete B[X];delete ie[H.id]}}}function A(H){for(const J in r){const me=r[J],pe=H.isInstancedMesh===!0?H.id:0,ie=me[pe];if(ie!==void 0){for(const B in ie){const X=ie[B];for(const re in X)g(X[re].object),delete X[re];delete ie[B]}delete me[pe],Object.keys(me).length===0&&delete r[J]}}}function U(){Z(),f=!0,c!==o&&(c=o,h(c.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:U,resetDefaultState:Z,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:T,disableUnusedAttributes:O}}function yA(a,e,n){let r;function o(p){r=p}function c(p,h){a.drawArrays(r,p,h),n.update(h,r,1)}function f(p,h,g){g!==0&&(a.drawArraysInstanced(r,p,h,g),n.update(h,r,g))}function m(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,g);let v=0;for(let E=0;E<g;E++)v+=h[E];n.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=m}function xA(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==Ki&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(F){const A=F===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ti&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ra&&!A)}function p(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(ft("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const M=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:M,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:S,maxSamples:L,samples:P}}function SA(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Es,m=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const E=M.length!==0||v||r!==0||o;return o=v,r=M.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,v){n=g(M,v,0)},this.setState=function(M,v,E){const R=M.clippingPlanes,N=M.clipIntersection,T=M.clipShadows,x=a.get(M);if(!o||R===null||R.length===0||c&&!T)c?g(null):h();else{const O=c?0:r,I=O*4;let S=x.clippingState||null;p.value=S,S=g(R,v,I,E);for(let L=0;L!==I;++L)S[L]=n[L];x.clippingState=S,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(M,v,E,R){const N=M!==null?M.length:0;let T=null;if(N!==0){if(T=p.value,R!==!0||T===null){const x=E+N*4,O=v.matrixWorldInverse;m.getNormalMatrix(O),(T===null||T.length<x)&&(T=new Float32Array(x));for(let I=0,S=E;I!==N;++I,S+=4)f.copy(M[I]).applyMatrix4(O,m),f.normal.toArray(T,S),T[S+3]=f.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}const Ts=4,Gv=[.125,.215,.35,.446,.526,.582],ar=20,MA=256,vo=new lm,kv=new Tt;let Ah=null,Rh=0,Ch=0,wh=!1;const EA=new ee;class Vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:m=EA}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,m),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===or||e.mapping===gl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ka,format:Ki,colorSpace:wu,depthBuffer:!1},o=Xv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(c)),this._blurMaterial=AA(c,e,n),this._ggxMaterial=TA(c,e,n)}return o}_compileMaterial(e){const n=new Un(new Ri,e);this._renderer.compile(n,vo)}_sceneToCubeUV(e,n,r,o,c){const p=new Bi(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],M=this._renderer,v=M.autoClear,E=M.toneMapping;M.getClearColor(kv),M.toneMapping=oa,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(o),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Ds,new Ao({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let x=!1;const O=e.background;O?O.isColor&&(T.color.copy(O),e.background=null,x=!0):(T.color.copy(kv),x=!0);for(let I=0;I<6;I++){const S=I%3;S===0?(p.up.set(0,h[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):S===1?(p.up.set(0,0,h[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,h[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const L=this._cubeSize;al(o,S*L,I>2?L:0,L,L),M.setRenderTarget(o),x&&M.render(N,p),M.render(e,p)}M.toneMapping=E,M.autoClear=v,e.background=O}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===or||e.mapping===gl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;al(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,vo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[r];m.material=f;const p=f.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),M=Math.sqrt(h*h-g*g),v=0+h*1.25,E=M*v,{_lodMax:R}=this,N=this._sizeLods[r],T=3*N*(r>R-Ts?r-R+Ts:0),x=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=R-n,al(c,T,x,3*N,2*N),o.setRenderTarget(c),o.render(m,vo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-r,al(e,T,x,3*N,2*N),o.setRenderTarget(e),o.render(m,vo)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,m){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const g=3,M=this._lodMeshes[o];M.material=h;const v=h.uniforms,E=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ar-1),N=c/R,T=isFinite(c)?1+Math.floor(g*N):ar;T>ar&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${ar}`);const x=[];let O=0;for(let F=0;F<ar;++F){const A=F/N,U=Math.exp(-A*A/2);x.push(U),F===0?O+=U:F<T&&(O+=2*U)}for(let F=0;F<x.length;F++)x[F]=x[F]/O;v.envMap.value=e.texture,v.samples.value=T,v.weights.value=x,v.latitudinal.value=f==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:I}=this;v.dTheta.value=R,v.mipInt.value=I-r;const S=this._sizeLods[o],L=3*S*(o>I-Ts?o-I+Ts:0),P=4*(this._cubeSize-S);al(n,L,P,3*S,2*S),p.setRenderTarget(n),p.render(M,vo)}}function bA(a){const e=[],n=[],r=[];let o=a;const c=a-Ts+1+Gv.length;for(let f=0;f<c;f++){const m=Math.pow(2,o);e.push(m);let p=1/m;f>a-Ts?p=Gv[f-a+Ts-1]:f===0&&(p=0),n.push(p);const h=1/(m-2),g=-h,M=1+h,v=[g,g,M,g,M,M,g,g,M,M,g,M],E=6,R=6,N=3,T=2,x=1,O=new Float32Array(N*R*E),I=new Float32Array(T*R*E),S=new Float32Array(x*R*E);for(let P=0;P<E;P++){const F=P%3*2/3-1,A=P>2?0:-1,U=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];O.set(U,N*R*P),I.set(v,T*R*P);const Z=[P,P,P,P,P,P];S.set(Z,x*R*P)}const L=new Ri;L.setAttribute("position",new Qi(O,N)),L.setAttribute("uv",new Qi(I,T)),L.setAttribute("faceIndex",new Qi(S,x)),r.push(new Un(L,null)),o>Ts&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Xv(a,e,n){const r=new ca(a,e,n);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function al(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function TA(a,e,n){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function AA(a,e,n){const r=new Float32Array(ar),o=new ee(0,1,0);return new fa({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Wv(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Yv(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class Ky extends ca{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ky(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ds(5,5,5),c=new fa({name:"CubemapFromEquirect",uniforms:vl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:Fa});c.uniforms.tEquirect.value=n;const f=new Un(o,c),m=n.minFilter;return n.minFilter===sr&&(n.minFilter=Hn),new Db(1,10,this).update(e,f),n.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function RA(a){let e=new WeakMap,n=new WeakMap,r=null;function o(v,E=!1){return v==null?null:E?f(v):c(v)}function c(v){if(v&&v.isTexture){const E=v.mapping;if(E===$d||E===eh)if(e.has(v)){const R=e.get(v).texture;return m(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const N=new Ky(R.height);return N.fromEquirectangularTexture(a,v),e.set(v,N),v.addEventListener("dispose",h),m(N.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const E=v.mapping,R=E===$d||E===eh,N=E===or||E===gl;if(R||N){let T=n.get(v);const x=T!==void 0?T.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new Vv(a)),T=R?r.fromEquirectangular(v,T):r.fromCubemap(v,T),T.texture.pmremVersion=v.pmremVersion,n.set(v,T),T.texture;if(T!==void 0)return T.texture;{const O=v.image;return R&&O&&O.height>0||N&&O&&p(O)?(r===null&&(r=new Vv(a)),T=R?r.fromEquirectangular(v):r.fromCubemap(v),T.texture.pmremVersion=v.pmremVersion,n.set(v,T),v.addEventListener("dispose",g),T.texture):null}}}return v}function m(v,E){return E===$d?v.mapping=or:E===eh&&(v.mapping=gl),v}function p(v){let E=0;const R=6;for(let N=0;N<R;N++)v[N]!==void 0&&E++;return E===R}function h(v){const E=v.target;E.removeEventListener("dispose",h);const R=e.get(E);R!==void 0&&(e.delete(E),R.dispose())}function g(v){const E=v.target;E.removeEventListener("dispose",g);const R=n.get(E);R!==void 0&&(n.delete(E),R.dispose())}function M(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function CA(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&dl("WebGLRenderer: "+r+" extension not supported."),o}}}function wA(a,e,n,r){const o={},c=new WeakMap;function f(M){const v=M.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",f),delete o[v.id];const E=c.get(v);E&&(e.remove(E),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function m(M,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function p(M){const v=M.attributes;for(const E in v)e.update(v[E],a.ARRAY_BUFFER)}function h(M){const v=[],E=M.index,R=M.attributes.position;let N=0;if(R===void 0)return;if(E!==null){const O=E.array;N=E.version;for(let I=0,S=O.length;I<S;I+=3){const L=O[I+0],P=O[I+1],F=O[I+2];v.push(L,P,P,F,F,L)}}else{const O=R.array;N=R.version;for(let I=0,S=O.length/3-1;I<S;I+=3){const L=I+0,P=I+1,F=I+2;v.push(L,P,P,F,F,L)}}const T=new(R.count>=65535?Fy:By)(v,1);T.version=N;const x=c.get(M);x&&e.remove(x),c.set(M,T)}function g(M){const v=c.get(M);if(v){const E=M.index;E!==null&&v.version<E.version&&h(M)}else h(M);return c.get(M)}return{get:m,update:p,getWireframeAttribute:g}}function DA(a,e,n){let r;function o(M){r=M}let c,f;function m(M){c=M.type,f=M.bytesPerElement}function p(M,v){a.drawElements(r,v,c,M*f),n.update(v,r,1)}function h(M,v,E){E!==0&&(a.drawElementsInstanced(r,v,c,M*f,E),n.update(v,r,E))}function g(M,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,M,0,E);let N=0;for(let T=0;T<E;T++)N+=v[T];n.update(N,r,1)}this.setMode=o,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=g}function NA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,m){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=m*(c/3);break;case a.LINES:n.lines+=m*(c/2);break;case a.LINE_STRIP:n.lines+=m*(c-1);break;case a.LINE_LOOP:n.lines+=m*c;break;case a.POINTS:n.points+=m*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function UA(a,e,n){const r=new WeakMap,o=new vn;function c(f,m,p){const h=f.morphTargetInfluences,g=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,M=g!==void 0?g.length:0;let v=r.get(m);if(v===void 0||v.count!==M){let U=function(){F.dispose(),r.delete(m),m.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();const E=m.morphAttributes.position!==void 0,R=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,T=m.morphAttributes.position||[],x=m.morphAttributes.normal||[],O=m.morphAttributes.color||[];let I=0;E===!0&&(I=1),R===!0&&(I=2),N===!0&&(I=3);let S=m.attributes.position.count*I,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*L*4*M),F=new Iy(P,S,L,M);F.type=ra,F.needsUpdate=!0;const A=I*4;for(let Z=0;Z<M;Z++){const H=T[Z],J=x[Z],me=O[Z],pe=S*L*4*Z;for(let ie=0;ie<H.count;ie++){const B=ie*A;E===!0&&(o.fromBufferAttribute(H,ie),P[pe+B+0]=o.x,P[pe+B+1]=o.y,P[pe+B+2]=o.z,P[pe+B+3]=0),R===!0&&(o.fromBufferAttribute(J,ie),P[pe+B+4]=o.x,P[pe+B+5]=o.y,P[pe+B+6]=o.z,P[pe+B+7]=0),N===!0&&(o.fromBufferAttribute(me,ie),P[pe+B+8]=o.x,P[pe+B+9]=o.y,P[pe+B+10]=o.z,P[pe+B+11]=me.itemSize===4?o.w:1)}}v={count:M,texture:F,size:new lt(S,L)},r.set(m,v),m.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let N=0;N<h.length;N++)E+=h[N];const R=m.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",R),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function LA(a,e,n,r,o){let c=new WeakMap;function f(h){const g=o.render.frame,M=h.geometry,v=e.get(h,M);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==g&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==g&&(E.update(),c.set(E,g))}return v}function m(){c=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:f,dispose:m}}const OA={[Sy]:"LINEAR_TONE_MAPPING",[My]:"REINHARD_TONE_MAPPING",[Ey]:"CINEON_TONE_MAPPING",[Vp]:"ACES_FILMIC_TONE_MAPPING",[Ty]:"AGX_TONE_MAPPING",[Ay]:"NEUTRAL_TONE_MAPPING",[by]:"CUSTOM_TONE_MAPPING"};function PA(a,e,n,r,o,c){const f=new ca(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new _l(e,n):void 0}),m=new ca(e,n,{type:ka,depthBuffer:!1,stencilBuffer:!1}),p=new Ri;p.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new kn([0,2,0,0,2,0],2));const h=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Un(p,h),M=new lm(-1,1,1,-1,0,1);let v=null,E=null,R=!1,N,T=null,x=[],O=!1;this.setSize=function(I,S){f.setSize(I,S),m.setSize(I,S);for(let L=0;L<x.length;L++){const P=x[L];P.setSize&&P.setSize(I,S)}},this.setEffects=function(I){x=I,O=x.length>0&&x[0].isRenderPass===!0;const S=f.width,L=f.height;for(let P=0;P<x.length;P++){const F=x[P];F.setSize&&F.setSize(S,L)}},this.begin=function(I,S){if(R||I.toneMapping===oa&&x.length===0)return!1;if(T=S,S!==null){const L=S.width,P=S.height;(f.width!==L||f.height!==P)&&this.setSize(L,P)}return O===!1&&I.setRenderTarget(f),N=I.toneMapping,I.toneMapping=oa,!0},this.hasRenderPass=function(){return O},this.end=function(I,S){I.toneMapping=N,R=!0;let L=f,P=m;for(let F=0;F<x.length;F++){const A=x[F];if(A.enabled!==!1&&(A.render(I,P,L,S),A.needsSwap!==!1)){const U=L;L=P,P=U}}if(v!==I.outputColorSpace||E!==I.toneMapping){v=I.outputColorSpace,E=I.toneMapping,h.defines={},Nt.getTransfer(v)===Zt&&(h.defines.SRGB_TRANSFER="");const F=OA[E];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,I.setRenderTarget(T),I.render(g,M),T=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),m.dispose(),p.dispose(),h.dispose()}}const Qy=new ei,Cp=new _l(1,1),Jy=new Iy,jy=new JE,$y=new ky,qv=[],Zv=[],Kv=new Float32Array(16),Qv=new Float32Array(9),Jv=new Float32Array(4);function Sl(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=qv[o];if(c===void 0&&(c=new Float32Array(o),qv[o]=c),e!==0){r.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=n,a[f].toArray(c,m)}return c}function In(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function zn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Gu(a,e){let n=Zv[e];n===void 0&&(n=new Int32Array(e),Zv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function IA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function zA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;a.uniform2fv(this.addr,e),zn(n,e)}}function BA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(In(n,e))return;a.uniform3fv(this.addr,e),zn(n,e)}}function FA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;a.uniform4fv(this.addr,e),zn(n,e)}}function HA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(In(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(n,e)}else{if(In(n,r))return;Jv.set(r),a.uniformMatrix2fv(this.addr,!1,Jv),zn(n,r)}}function GA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(In(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(n,e)}else{if(In(n,r))return;Qv.set(r),a.uniformMatrix3fv(this.addr,!1,Qv),zn(n,r)}}function kA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(In(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(n,e)}else{if(In(n,r))return;Kv.set(r),a.uniformMatrix4fv(this.addr,!1,Kv),zn(n,r)}}function VA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function XA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;a.uniform2iv(this.addr,e),zn(n,e)}}function WA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;a.uniform3iv(this.addr,e),zn(n,e)}}function YA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;a.uniform4iv(this.addr,e),zn(n,e)}}function qA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function ZA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;a.uniform2uiv(this.addr,e),zn(n,e)}}function KA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;a.uniform3uiv(this.addr,e),zn(n,e)}}function QA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;a.uniform4uiv(this.addr,e),zn(n,e)}}function JA(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Cp.compareFunction=n.isReversedDepthBuffer()?Jp:Qp,c=Cp):c=Qy,n.setTexture2D(e||c,o)}function jA(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||jy,o)}function $A(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||$y,o)}function e2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Jy,o)}function t2(a){switch(a){case 5126:return IA;case 35664:return zA;case 35665:return BA;case 35666:return FA;case 35674:return HA;case 35675:return GA;case 35676:return kA;case 5124:case 35670:return VA;case 35667:case 35671:return XA;case 35668:case 35672:return WA;case 35669:case 35673:return YA;case 5125:return qA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(a,e){a.uniform1fv(this.addr,e)}function i2(a,e){const n=Sl(e,this.size,2);a.uniform2fv(this.addr,n)}function a2(a,e){const n=Sl(e,this.size,3);a.uniform3fv(this.addr,n)}function s2(a,e){const n=Sl(e,this.size,4);a.uniform4fv(this.addr,n)}function r2(a,e){const n=Sl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function l2(a,e){const n=Sl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function o2(a,e){const n=Sl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function c2(a,e){a.uniform1iv(this.addr,e)}function u2(a,e){a.uniform2iv(this.addr,e)}function f2(a,e){a.uniform3iv(this.addr,e)}function d2(a,e){a.uniform4iv(this.addr,e)}function h2(a,e){a.uniform1uiv(this.addr,e)}function p2(a,e){a.uniform2uiv(this.addr,e)}function m2(a,e){a.uniform3uiv(this.addr,e)}function g2(a,e){a.uniform4uiv(this.addr,e)}function _2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);In(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=Cp:f=Qy;for(let m=0;m!==o;++m)n.setTexture2D(e[m]||f,c[m])}function v2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);In(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||jy,c[f])}function y2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);In(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||$y,c[f])}function x2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);In(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||Jy,c[f])}function S2(a){switch(a){case 5126:return n2;case 35664:return i2;case 35665:return a2;case 35666:return s2;case 35674:return r2;case 35675:return l2;case 35676:return o2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}class M2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}}class E2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const m=o[c];m.setValue(e,n[m.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function jv(a,e){a.seq.push(e),a.map[e.id]=e}function T2(a,e,n){const r=a.name,o=r.length;for(Dh.lastIndex=0;;){const c=Dh.exec(r),f=Dh.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&f+2===o){jv(n,h===void 0?new M2(m,a,e):new E2(m,a,e));break}else{let M=n.map[m];M===void 0&&(M=new b2(m),jv(n,M)),n=M}}}class bu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const m=e.getActiveUniform(n,f),p=e.getUniformLocation(n,m.name);T2(m,p,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const m=n[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function $v(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const A2=37297;let R2=0;function C2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const m=f+1;r.push(`${m===e?">":" "} ${m}: ${n[f]}`)}return r.join(`
`)}const ey=new pt;function w2(a){Nt._getMatrix(ey,Nt.workingColorSpace,a);const e=`mat3( ${ey.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(a)){case Du:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ty(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+C2(a.getShaderSource(e),m)}else return c}function D2(a,e){const n=w2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const N2={[Sy]:"Linear",[My]:"Reinhard",[Ey]:"Cineon",[Vp]:"ACESFilmic",[Ty]:"AgX",[Ay]:"Neutral",[by]:"Custom"};function U2(a,e){const n=N2[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gu=new ee;function L2(){Nt.getLuminanceCoefficients(gu);const a=gu.x.toFixed(4),e=gu.y.toFixed(4),n=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function P2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function I2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let m=1;c.type===a.FLOAT_MAT2&&(m=2),c.type===a.FLOAT_MAT3&&(m=3),c.type===a.FLOAT_MAT4&&(m=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:m}}return n}function Mo(a){return a!==""}function ny(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iy(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(a){return a.replace(z2,F2)}const B2=new Map;function F2(a,e){let n=yt[e];if(n===void 0){const r=B2.get(e);if(r!==void 0)n=yt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wp(n)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ay(a){return a.replace(H2,G2)}function G2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function sy(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const k2={[Eo]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function V2(a){return k2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X2={[or]:"ENVMAP_TYPE_CUBE",[gl]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function W2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":X2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y2={[gl]:"ENVMAP_MODE_REFRACTION"};function q2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Y2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z2={[xy]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function K2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Z2[a.combine]||"ENVMAP_BLENDING_NONE"}function Q2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function J2(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,m=n.fragmentShader;const p=V2(n),h=W2(n),g=q2(n),M=K2(n),v=Q2(n),E=O2(n),R=P2(c),N=o.createProgram();let T,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Mo).join(`
`),T.length>0&&(T+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Mo).join(`
`),x.length>0&&(x+=`
`)):(T=[sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),x=[sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+M:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?yt.tonemapping_pars_fragment:"",n.toneMapping!==oa?U2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,D2("linearToOutputTexel",n.outputColorSpace),L2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mo).join(`
`)),f=wp(f),f=ny(f,n),f=iy(f,n),m=wp(m),m=ny(m,n),m=iy(m,n),f=ay(f),m=ay(m),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,T=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,x=["#define varying in",n.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+T+f,S=O+x+m,L=$v(o,o.VERTEX_SHADER,I),P=$v(o,o.FRAGMENT_SHADER,S);o.attachShader(N,L),o.attachShader(N,P),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(H){if(a.debug.checkShaderErrors){const J=o.getProgramInfoLog(N)||"",me=o.getShaderInfoLog(L)||"",pe=o.getShaderInfoLog(P)||"",ie=J.trim(),B=me.trim(),X=pe.trim();let re=!0,xe=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(re=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,N,L,P);else{const Te=ty(o,L,"vertex"),z=ty(o,P,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ie+`
`+Te+`
`+z)}else ie!==""?ft("WebGLProgram: Program Info Log:",ie):(B===""||X==="")&&(xe=!1);xe&&(H.diagnostics={runnable:re,programLog:ie,vertexShader:{log:B,prefix:T},fragmentShader:{log:X,prefix:x}})}o.deleteShader(L),o.deleteShader(P),A=new bu(o,N),U=I2(o,N)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let Z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(N,A2)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=R2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=L,this.fragmentShader=P,this}let j2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new eR(e),n.set(e,r)),r}}class eR{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function tR(a){return a===cr||a===Ru||a===Cu}function nR(a,e,n,r,o,c){const f=new em,m=new $2,p=new Set,h=[],g=new Map,M=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return p.add(A),A===0?"uv":`uv${A}`}function N(A,U,Z,H,J,me){const pe=H.fog,ie=J.geometry,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,re=e.get(A.envMap||B,X),xe=re&&re.mapping===Bu?re.image.height:null,Te=E[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const z=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,te=z!==void 0?z.length:0;let Re=0;ie.morphAttributes.position!==void 0&&(Re=1),ie.morphAttributes.normal!==void 0&&(Re=2),ie.morphAttributes.color!==void 0&&(Re=3);let Pe,Fe,se,Ce;if(Te){const We=aa[Te];Pe=We.vertexShader,Fe=We.fragmentShader}else{Pe=A.vertexShader,Fe=A.fragmentShader;const We=m.getVertexShaderStage(A),sn=m.getFragmentShaderStage(A);m.update(A,We,sn),se=We.id,Ce=sn.id}const be=a.getRenderTarget(),Be=a.state.buffers.depth.getReversed(),it=J.isInstancedMesh===!0,Ye=J.isBatchedMesh===!0,Ct=!!A.map,ze=!!A.matcap,ot=!!re,ut=!!A.aoMap,mt=!!A.lightMap,nn=!!A.bumpMap&&A.wireframe===!1,an=!!A.normalMap,Gt=!!A.displacementMap,Qt=!!A.emissiveMap,Ut=!!A.metalnessMap,on=!!A.roughnessMap,K=A.anisotropy>0,Lt=A.clearcoat>0,_e=A.dispersion>0,C=A.iridescence>0,_=A.sheen>0,k=A.transmission>0,Y=K&&!!A.anisotropyMap,Q=Lt&&!!A.clearcoatMap,ve=Lt&&!!A.clearcoatNormalMap,ge=Lt&&!!A.clearcoatRoughnessMap,$=C&&!!A.iridescenceMap,ae=C&&!!A.iridescenceThicknessMap,fe=_&&!!A.sheenColorMap,De=_&&!!A.sheenRoughnessMap,Le=!!A.specularMap,Ue=!!A.specularColorMap,qe=!!A.specularIntensityMap,Ze=k&&!!A.transmissionMap,at=k&&!!A.thicknessMap,W=!!A.gradientMap,Oe=!!A.alphaMap,Se=A.alphaTest>0,Ie=!!A.alphaHash,He=!!A.extensions;let we=oa;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(we=a.toneMapping);const je={shaderID:Te,shaderType:A.type,shaderName:A.name,vertexShader:Pe,fragmentShader:Fe,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:Ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ye,batchingColor:Ye&&J._colorsTexture!==null,instancing:it,instancingColor:it&&J.instanceColor!==null,instancingMorph:it&&J.morphTexture!==null,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ct,matcap:ze,envMap:ot,envMapMode:ot&&re.mapping,envMapCubeUVHeight:xe,aoMap:ut,lightMap:mt,bumpMap:nn,normalMap:an,displacementMap:Gt,emissiveMap:Qt,normalMapObjectSpace:an&&A.normalMapType===yE,normalMapTangentSpace:an&&A.normalMapType===bp,packedNormalMap:an&&A.normalMapType===bp&&tR(A.normalMap.format),metalnessMap:Ut,roughnessMap:on,anisotropy:K,anisotropyMap:Y,clearcoat:Lt,clearcoatMap:Q,clearcoatNormalMap:ve,clearcoatRoughnessMap:ge,dispersion:_e,iridescence:C,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:_,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:Le,specularColorMap:Ue,specularIntensityMap:qe,transmission:k,transmissionMap:Ze,thicknessMap:at,gradientMap:W,opaque:A.transparent===!1&&A.blending===fl&&A.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:Ie,combine:A.combine,mapUv:Ct&&R(A.map.channel),aoMapUv:ut&&R(A.aoMap.channel),lightMapUv:mt&&R(A.lightMap.channel),bumpMapUv:nn&&R(A.bumpMap.channel),normalMapUv:an&&R(A.normalMap.channel),displacementMapUv:Gt&&R(A.displacementMap.channel),emissiveMapUv:Qt&&R(A.emissiveMap.channel),metalnessMapUv:Ut&&R(A.metalnessMap.channel),roughnessMapUv:on&&R(A.roughnessMap.channel),anisotropyMapUv:Y&&R(A.anisotropyMap.channel),clearcoatMapUv:Q&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:ve&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:De&&R(A.sheenRoughnessMap.channel),specularMapUv:Le&&R(A.specularMap.channel),specularColorMapUv:Ue&&R(A.specularColorMap.channel),specularIntensityMapUv:qe&&R(A.specularIntensityMap.channel),transmissionMapUv:Ze&&R(A.transmissionMap.channel),thicknessMapUv:at&&R(A.thicknessMap.channel),alphaMapUv:Oe&&R(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(an||K),vertexNormals:!!ie.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ie.attributes.uv&&(Ct||Oe),fog:!!pe,useFog:A.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ie.attributes.normal===void 0&&an===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Be,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Re,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&Z.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:Ct&&A.map.isVideoTexture===!0&&Nt.getTransfer(A.map.colorSpace)===Zt,decodeVideoTextureEmissive:Qt&&A.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(A.emissiveMap.colorSpace)===Zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===sa,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function T(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Z in A.defines)U.push(Z),U.push(A.defines[Z]);return A.isRawShaderMaterial===!1&&(x(U,A),O(U,A),U.push(a.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function x(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function O(A,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),U.packedNormalMap&&f.enable(22),U.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),U.numLightProbeGrids>0&&f.enable(22),U.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function I(A){const U=E[A.type];let Z;if(U){const H=aa[U];Z=xb.clone(H.uniforms)}else Z=A.uniforms;return Z}function S(A,U){let Z=g.get(U);return Z!==void 0?++Z.usedTimes:(Z=new J2(a,U,A,o),h.push(Z),g.set(U,Z)),Z}function L(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function F(){m.dispose()}return{getParameters:N,getProgramCacheKey:T,getUniforms:I,acquireProgram:S,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:F}}function iR(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let m=a.get(f);return m===void 0&&(m={},a.set(f,m)),m}function r(f){a.delete(f)}function o(f,m,p){a.get(f)[m]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function aR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ry(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ly(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function m(v,E,R,N,T,x){let O=a[e];return O===void 0?(O={id:v.id,object:v,geometry:E,material:R,materialVariant:f(v),groupOrder:N,renderOrder:v.renderOrder,z:T,group:x},a[e]=O):(O.id=v.id,O.object=v,O.geometry=E,O.material=R,O.materialVariant=f(v),O.groupOrder=N,O.renderOrder=v.renderOrder,O.z=T,O.group=x),e++,O}function p(v,E,R,N,T,x){const O=m(v,E,R,N,T,x);R.transmission>0?r.push(O):R.transparent===!0?o.push(O):n.push(O)}function h(v,E,R,N,T,x){const O=m(v,E,R,N,T,x);R.transmission>0?r.unshift(O):R.transparent===!0?o.unshift(O):n.unshift(O)}function g(v,E,R){n.length>1&&n.sort(v||aR),r.length>1&&r.sort(E||ry),o.length>1&&o.sort(E||ry),R&&(n.reverse(),r.reverse(),o.reverse())}function M(){for(let v=e,E=a.length;v<E;v++){const R=a[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:h,finish:M,sort:g}}function sR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new ly,a.set(r,[f])):o>=c.length?(f=new ly,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function rR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Tt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=n,n}}}function lR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let oR=0;function cR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function uR(a){const e=new rR,n=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ee);const o=new ee,c=new _n,f=new _n;function m(h){let g=0,M=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let E=0,R=0,N=0,T=0,x=0,O=0,I=0,S=0,L=0,P=0,F=0;h.sort(cR);for(let U=0,Z=h.length;U<Z;U++){const H=h[U],J=H.color,me=H.intensity,pe=H.distance;let ie=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===cr?ie=H.shadow.map.texture:ie=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=J.r*me,M+=J.g*me,v+=J.b*me;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],me);F++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,re=n.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,r.directionalShadow[E]=re,r.directionalShadowMap[E]=ie,r.directionalShadowMatrix[E]=H.shadow.matrix,O++}r.directional[E]=B,E++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(J).multiplyScalar(me),B.distance=pe,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[N]=B;const X=H.shadow;if(H.map&&(r.spotLightMap[L]=H.map,L++,X.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[N]=X.matrix,H.castShadow){const re=n.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,r.spotShadow[N]=re,r.spotShadowMap[N]=ie,S++}N++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(J).multiplyScalar(me),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[T]=B,T++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const X=H.shadow,re=n.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,re.shadowCameraNear=X.camera.near,re.shadowCameraFar=X.camera.far,r.pointShadow[R]=re,r.pointShadowMap[R]=ie,r.pointShadowMatrix[R]=H.shadow.matrix,I++}r.point[R]=B,R++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(me),B.groundColor.copy(H.groundColor).multiplyScalar(me),r.hemi[x]=B,x++}}T>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=M,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==E||A.pointLength!==R||A.spotLength!==N||A.rectAreaLength!==T||A.hemiLength!==x||A.numDirectionalShadows!==O||A.numPointShadows!==I||A.numSpotShadows!==S||A.numSpotMaps!==L||A.numLightProbes!==F)&&(r.directional.length=E,r.spot.length=N,r.rectArea.length=T,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=S+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,A.directionalLength=E,A.pointLength=R,A.spotLength=N,A.rectAreaLength=T,A.hemiLength=x,A.numDirectionalShadows=O,A.numPointShadows=I,A.numSpotShadows=S,A.numSpotMaps=L,A.numLightProbes=F,r.version=oR++)}function p(h,g){let M=0,v=0,E=0,R=0,N=0;const T=g.matrixWorldInverse;for(let x=0,O=h.length;x<O;x++){const I=h[x];if(I.isDirectionalLight){const S=r.directional[M];S.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(T),M++}else if(I.isSpotLight){const S=r.spot[E];S.position.setFromMatrixPosition(I.matrixWorld),S.position.applyMatrix4(T),S.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(T),E++}else if(I.isRectAreaLight){const S=r.rectArea[R];S.position.setFromMatrixPosition(I.matrixWorld),S.position.applyMatrix4(T),f.identity(),c.copy(I.matrixWorld),c.premultiply(T),f.extractRotation(c),S.halfWidth.set(I.width*.5,0,0),S.halfHeight.set(0,I.height*.5,0),S.halfWidth.applyMatrix4(f),S.halfHeight.applyMatrix4(f),R++}else if(I.isPointLight){const S=r.point[v];S.position.setFromMatrixPosition(I.matrixWorld),S.position.applyMatrix4(T),v++}else if(I.isHemisphereLight){const S=r.hemi[N];S.direction.setFromMatrixPosition(I.matrixWorld),S.direction.transformDirection(T),N++}}}return{setup:m,setupView:p,state:r}}function oy(a){const e=new uR(a),n=[],r=[],o=[];function c(v){M.camera=v,n.length=0,r.length=0,o.length=0}function f(v){n.push(v)}function m(v){r.push(v)}function p(v){o.push(v)}function h(){e.setup(n)}function g(v){e.setupView(n,v)}const M={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:M,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:m,pushLightProbeGrid:p}}function fR(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let m;return f===void 0?(m=new oy(a),e.set(o,[m])):c>=f.length?(m=new oy(a),f.push(m)):m=f[c],m}function r(){e=new WeakMap}return{get:n,dispose:r}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
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
}`,pR=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],mR=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],cy=new _n,yo=new ee,Nh=new ee;function gR(a,e,n){let r=new am;const o=new lt,c=new lt,f=new vn,m=new bb,p=new Tb,h={},g=n.maxTextureSize,M={[Rs]:hi,[hi]:Rs,[sa]:sa},v=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:dR,fragmentShader:hR}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ri;R.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Un(R,v),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let x=this.type;this.render=function(P,F,A){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||P.length===0)return;this.type===QM&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Eo);const U=a.getRenderTarget(),Z=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),J=a.state;J.setBlending(Fa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const me=x!==this.type;me&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ie=>ie.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ie=P.length;pe<ie;pe++){const B=P[pe],X=B.shadow;if(X===void 0){ft("WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const re=X.getFrameExtents();o.multiply(re),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/re.x),o.x=c.x*re.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/re.y),o.y=c.y*re.y,X.mapSize.y=c.y));const xe=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=xe,X.map===null||me===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===So){if(B.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ca(o.x,o.y,{format:cr,type:ka,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),X.map.texture.name=B.name+".shadowMap",X.map.depthTexture=new _l(o.x,o.y,ra),X.map.depthTexture.name=B.name+".shadowMapDepth",X.map.depthTexture.format=Va,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kn,X.map.depthTexture.magFilter=Kn}else B.isPointLight?(X.map=new Ky(o.x),X.map.depthTexture=new vb(o.x,ua)):(X.map=new ca(o.x,o.y),X.map.depthTexture=new _l(o.x,o.y,ua)),X.map.depthTexture.name=B.name+".shadowMap",X.map.depthTexture.format=Va,this.type===Eo?(X.map.depthTexture.compareFunction=xe?Jp:Qp,X.map.depthTexture.minFilter=Hn,X.map.depthTexture.magFilter=Hn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kn,X.map.depthTexture.magFilter=Kn);X.camera.updateProjectionMatrix()}const Te=X.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Te;z++){if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,z),a.clear();else{z===0&&(a.setRenderTarget(X.map),a.clear());const te=X.getViewport(z);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),J.viewport(f)}if(B.isPointLight){const te=X.camera,Re=X.matrix,Pe=B.distance||te.far;Pe!==te.far&&(te.far=Pe,te.updateProjectionMatrix()),yo.setFromMatrixPosition(B.matrixWorld),te.position.copy(yo),Nh.copy(te.position),Nh.add(pR[z]),te.up.copy(mR[z]),te.lookAt(Nh),te.updateMatrixWorld(),Re.makeTranslation(-yo.x,-yo.y,-yo.z),cy.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),X._frustum.setFromProjectionMatrix(cy,te.coordinateSystem,te.reversedDepth)}else X.updateMatrices(B);r=X.getFrustum(),S(F,A,X.camera,B,this.type)}X.isPointLightShadow!==!0&&this.type===So&&O(X,A),X.needsUpdate=!1}x=this.type,T.needsUpdate=!1,a.setRenderTarget(U,Z,H)};function O(P,F){const A=e.update(N);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ca(o.x,o.y,{format:cr,type:ka})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(F,null,A,v,N,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(F,null,A,E,N,null)}function I(P,F,A,U){let Z=null;const H=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)Z=H;else if(Z=A.isPointLight===!0?p:m,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=Z.uuid,me=F.uuid;let pe=h[J];pe===void 0&&(pe={},h[J]=pe);let ie=pe[me];ie===void 0&&(ie=Z.clone(),pe[me]=ie,F.addEventListener("dispose",L)),Z=ie}if(Z.visible=F.visible,Z.wireframe=F.wireframe,U===So?Z.side=F.shadowSide!==null?F.shadowSide:F.side:Z.side=F.shadowSide!==null?F.shadowSide:M[F.side],Z.alphaMap=F.alphaMap,Z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Z.map=F.map,Z.clipShadows=F.clipShadows,Z.clippingPlanes=F.clippingPlanes,Z.clipIntersection=F.clipIntersection,Z.displacementMap=F.displacementMap,Z.displacementScale=F.displacementScale,Z.displacementBias=F.displacementBias,Z.wireframeLinewidth=F.wireframeLinewidth,Z.linewidth=F.linewidth,A.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const J=a.properties.get(Z);J.light=A}return Z}function S(P,F,A,U,Z){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Z===So)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const me=e.update(P),pe=P.material;if(Array.isArray(pe)){const ie=me.groups;for(let B=0,X=ie.length;B<X;B++){const re=ie[B],xe=pe[re.materialIndex];if(xe&&xe.visible){const Te=I(P,xe,U,Z);P.onBeforeShadow(a,P,F,A,me,Te,re),a.renderBufferDirect(A,null,me,Te,P,re),P.onAfterShadow(a,P,F,A,me,Te,re)}}}else if(pe.visible){const ie=I(P,pe,U,Z);P.onBeforeShadow(a,P,F,A,me,ie,null),a.renderBufferDirect(A,null,me,ie,P,null),P.onAfterShadow(a,P,F,A,me,ie,null)}}const J=P.children;for(let me=0,pe=J.length;me<pe;me++)S(J[me],F,A,U,Z)}function L(P){P.target.removeEventListener("dispose",L);for(const A in h){const U=h[A],Z=P.target.uuid;Z in U&&(U[Z].dispose(),delete U[Z])}}}function _R(a,e){function n(){let W=!1;const Oe=new vn;let Se=null;const Ie=new vn(0,0,0,0);return{setMask:function(He){Se!==He&&!W&&(a.colorMask(He,He,He,He),Se=He)},setLocked:function(He){W=He},setClear:function(He,we,je,We,sn){sn===!0&&(He*=We,we*=We,je*=We),Oe.set(He,we,je,We),Ie.equals(Oe)===!1&&(a.clearColor(He,we,je,We),Ie.copy(Oe))},reset:function(){W=!1,Se=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Oe=!1,Se=null,Ie=null,He=null;return{setReversed:function(we){if(Oe!==we){const je=e.get("EXT_clip_control");we?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Oe=we;const We=He;He=null,this.setClear(We)}},getReversed:function(){return Oe},setTest:function(we){we?be(a.DEPTH_TEST):Be(a.DEPTH_TEST)},setMask:function(we){Se!==we&&!W&&(a.depthMask(we),Se=we)},setFunc:function(we){if(Oe&&(we=wE[we]),Ie!==we){switch(we){case Fh:a.depthFunc(a.NEVER);break;case Hh:a.depthFunc(a.ALWAYS);break;case Gh:a.depthFunc(a.LESS);break;case ml:a.depthFunc(a.LEQUAL);break;case kh:a.depthFunc(a.EQUAL);break;case Vh:a.depthFunc(a.GEQUAL);break;case Xh:a.depthFunc(a.GREATER);break;case Wh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=we}},setLocked:function(we){W=we},setClear:function(we){He!==we&&(He=we,Oe&&(we=1-we),a.clearDepth(we))},reset:function(){W=!1,Se=null,Ie=null,He=null,Oe=!1}}}function o(){let W=!1,Oe=null,Se=null,Ie=null,He=null,we=null,je=null,We=null,sn=null;return{setTest:function(Ot){W||(Ot?be(a.STENCIL_TEST):Be(a.STENCIL_TEST))},setMask:function(Ot){Oe!==Ot&&!W&&(a.stencilMask(Ot),Oe=Ot)},setFunc:function(Ot,G,Ne){(Se!==Ot||Ie!==G||He!==Ne)&&(a.stencilFunc(Ot,G,Ne),Se=Ot,Ie=G,He=Ne)},setOp:function(Ot,G,Ne){(we!==Ot||je!==G||We!==Ne)&&(a.stencilOp(Ot,G,Ne),we=Ot,je=G,We=Ne)},setLocked:function(Ot){W=Ot},setClear:function(Ot){sn!==Ot&&(a.clearStencil(Ot),sn=Ot)},reset:function(){W=!1,Oe=null,Se=null,Ie=null,He=null,we=null,je=null,We=null,sn=null}}}const c=new n,f=new r,m=new o,p=new WeakMap,h=new WeakMap;let g={},M={},v={},E=new WeakMap,R=[],N=null,T=!1,x=null,O=null,I=null,S=null,L=null,P=null,F=null,A=new Tt(0,0,0),U=0,Z=!1,H=null,J=null,me=null,pe=null,ie=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const xe=a.getParameter(a.VERSION);xe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(xe)[1]),X=re>=1):xe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),X=re>=2);let Te=null,z={};const te=a.getParameter(a.SCISSOR_BOX),Re=a.getParameter(a.VIEWPORT),Pe=new vn().fromArray(te),Fe=new vn().fromArray(Re);function se(W,Oe,Se,Ie){const He=new Uint8Array(4),we=a.createTexture();a.bindTexture(W,we),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<Se;je++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Oe,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(Oe+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return we}const Ce={};Ce[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),Ce[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ce[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),be(a.DEPTH_TEST),f.setFunc(ml),nn(!1),an(rv),be(a.CULL_FACE),ut(Fa);function be(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function Be(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function it(W,Oe){return v[W]!==Oe?(a.bindFramebuffer(W,Oe),v[W]=Oe,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Oe),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ye(W,Oe){let Se=R,Ie=!1;if(W){Se=E.get(Oe),Se===void 0&&(Se=[],E.set(Oe,Se));const He=W.textures;if(Se.length!==He.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let we=0,je=He.length;we<je;we++)Se[we]=a.COLOR_ATTACHMENT0+we;Se.length=He.length,Ie=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(Se)}function Ct(W){return N!==W?(a.useProgram(W),N=W,!0):!1}const ze={[ir]:a.FUNC_ADD,[jM]:a.FUNC_SUBTRACT,[$M]:a.FUNC_REVERSE_SUBTRACT};ze[eE]=a.MIN,ze[tE]=a.MAX;const ot={[nE]:a.ZERO,[iE]:a.ONE,[aE]:a.SRC_COLOR,[zh]:a.SRC_ALPHA,[uE]:a.SRC_ALPHA_SATURATE,[oE]:a.DST_COLOR,[rE]:a.DST_ALPHA,[sE]:a.ONE_MINUS_SRC_COLOR,[Bh]:a.ONE_MINUS_SRC_ALPHA,[cE]:a.ONE_MINUS_DST_COLOR,[lE]:a.ONE_MINUS_DST_ALPHA,[fE]:a.CONSTANT_COLOR,[dE]:a.ONE_MINUS_CONSTANT_COLOR,[hE]:a.CONSTANT_ALPHA,[pE]:a.ONE_MINUS_CONSTANT_ALPHA};function ut(W,Oe,Se,Ie,He,we,je,We,sn,Ot){if(W===Fa){T===!0&&(Be(a.BLEND),T=!1);return}if(T===!1&&(be(a.BLEND),T=!0),W!==JM){if(W!==x||Ot!==Z){if((O!==ir||L!==ir)&&(a.blendEquation(a.FUNC_ADD),O=ir,L=ir),Ot)switch(W){case fl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lv:a.blendFunc(a.ONE,a.ONE);break;case ov:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case cv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case fl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ov:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cv:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}I=null,S=null,P=null,F=null,A.set(0,0,0),U=0,x=W,Z=Ot}return}He=He||Oe,we=we||Se,je=je||Ie,(Oe!==O||He!==L)&&(a.blendEquationSeparate(ze[Oe],ze[He]),O=Oe,L=He),(Se!==I||Ie!==S||we!==P||je!==F)&&(a.blendFuncSeparate(ot[Se],ot[Ie],ot[we],ot[je]),I=Se,S=Ie,P=we,F=je),(We.equals(A)===!1||sn!==U)&&(a.blendColor(We.r,We.g,We.b,sn),A.copy(We),U=sn),x=W,Z=!1}function mt(W,Oe){W.side===sa?Be(a.CULL_FACE):be(a.CULL_FACE);let Se=W.side===hi;Oe&&(Se=!Se),nn(Se),W.blending===fl&&W.transparent===!1?ut(Fa):ut(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;m.setTest(Ie),Ie&&(m.setMask(W.stencilWriteMask),m.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),m.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):Be(a.SAMPLE_ALPHA_TO_COVERAGE)}function nn(W){H!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),H=W)}function an(W){W!==ZM?(be(a.CULL_FACE),W!==J&&(W===rv?a.cullFace(a.BACK):W===KM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Be(a.CULL_FACE),J=W}function Gt(W){W!==me&&(X&&a.lineWidth(W),me=W)}function Qt(W,Oe,Se){W?(be(a.POLYGON_OFFSET_FILL),(pe!==Oe||ie!==Se)&&(pe=Oe,ie=Se,f.getReversed()&&(Oe=-Oe),a.polygonOffset(Oe,Se))):Be(a.POLYGON_OFFSET_FILL)}function Ut(W){W?be(a.SCISSOR_TEST):Be(a.SCISSOR_TEST)}function on(W){W===void 0&&(W=a.TEXTURE0+B-1),Te!==W&&(a.activeTexture(W),Te=W)}function K(W,Oe,Se){Se===void 0&&(Te===null?Se=a.TEXTURE0+B-1:Se=Te);let Ie=z[Se];Ie===void 0&&(Ie={type:void 0,texture:void 0},z[Se]=Ie),(Ie.type!==W||Ie.texture!==Oe)&&(Te!==Se&&(a.activeTexture(Se),Te=Se),a.bindTexture(W,Oe||Ce[W]),Ie.type=W,Ie.texture=Oe)}function Lt(){const W=z[Te];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function _e(){try{a.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function _(){try{a.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function k(){try{a.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Y(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Q(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ve(){try{a.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ge(){try{a.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function $(){try{a.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ae(){try{a.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function fe(W){return M[W]!==void 0?M[W]:a.getParameter(W)}function De(W,Oe){M[W]!==Oe&&(a.pixelStorei(W,Oe),M[W]=Oe)}function Le(W){Pe.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Pe.copy(W))}function Ue(W){Fe.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Fe.copy(W))}function qe(W,Oe){let Se=h.get(Oe);Se===void 0&&(Se=new WeakMap,h.set(Oe,Se));let Ie=Se.get(W);Ie===void 0&&(Ie=a.getUniformBlockIndex(Oe,W.name),Se.set(W,Ie))}function Ze(W,Oe){const Ie=h.get(Oe).get(W);p.get(Oe)!==Ie&&(a.uniformBlockBinding(Oe,Ie,W.__bindingPointIndex),p.set(Oe,Ie))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},M={},Te=null,z={},v={},E=new WeakMap,R=[],N=null,T=!1,x=null,O=null,I=null,S=null,L=null,P=null,F=null,A=new Tt(0,0,0),U=0,Z=!1,H=null,J=null,me=null,pe=null,ie=null,Pe.set(0,0,a.canvas.width,a.canvas.height),Fe.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:be,disable:Be,bindFramebuffer:it,drawBuffers:Ye,useProgram:Ct,setBlending:ut,setMaterial:mt,setFlipSided:nn,setCullFace:an,setLineWidth:Gt,setPolygonOffset:Qt,setScissorTest:Ut,activeTexture:on,bindTexture:K,unbindTexture:Lt,compressedTexImage2D:_e,compressedTexImage3D:C,texImage2D:$,texImage3D:ae,pixelStorei:De,getParameter:fe,updateUBOMapping:qe,uniformBlockBinding:Ze,texStorage2D:ve,texStorage3D:ge,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:Le,viewport:Ue,reset:at}}function vR(a,e,n,r,o,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,g=new WeakMap,M=new Set;let v;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,_){return R?new OffscreenCanvas(C,_):Nu("canvas")}function T(C,_,k){let Y=1;const Q=_e(C);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ve=Math.floor(Y*Q.width),ge=Math.floor(Y*Q.height);v===void 0&&(v=N(ve,ge));const $=_?N(ve,ge):v;return $.width=ve,$.height=ge,$.getContext("2d").drawImage(C,0,0,ve,ge),ft("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ve+"x"+ge+")."),$}else return"data"in C&&ft("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function x(C){return C.generateMipmaps}function O(C){a.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function S(C,_,k,Y,Q,ve=!1){if(C!==null){if(a[C]!==void 0)return a[C];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;Y&&(ge=e.get("EXT_texture_norm16"),ge||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===a.RED&&(k===a.FLOAT&&($=a.R32F),k===a.HALF_FLOAT&&($=a.R16F),k===a.UNSIGNED_BYTE&&($=a.R8),k===a.UNSIGNED_SHORT&&ge&&($=ge.R16_EXT),k===a.SHORT&&ge&&($=ge.R16_SNORM_EXT)),_===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&($=a.R8UI),k===a.UNSIGNED_SHORT&&($=a.R16UI),k===a.UNSIGNED_INT&&($=a.R32UI),k===a.BYTE&&($=a.R8I),k===a.SHORT&&($=a.R16I),k===a.INT&&($=a.R32I)),_===a.RG&&(k===a.FLOAT&&($=a.RG32F),k===a.HALF_FLOAT&&($=a.RG16F),k===a.UNSIGNED_BYTE&&($=a.RG8),k===a.UNSIGNED_SHORT&&ge&&($=ge.RG16_EXT),k===a.SHORT&&ge&&($=ge.RG16_SNORM_EXT)),_===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&($=a.RG8UI),k===a.UNSIGNED_SHORT&&($=a.RG16UI),k===a.UNSIGNED_INT&&($=a.RG32UI),k===a.BYTE&&($=a.RG8I),k===a.SHORT&&($=a.RG16I),k===a.INT&&($=a.RG32I)),_===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&($=a.RGB8UI),k===a.UNSIGNED_SHORT&&($=a.RGB16UI),k===a.UNSIGNED_INT&&($=a.RGB32UI),k===a.BYTE&&($=a.RGB8I),k===a.SHORT&&($=a.RGB16I),k===a.INT&&($=a.RGB32I)),_===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&($=a.RGBA8UI),k===a.UNSIGNED_SHORT&&($=a.RGBA16UI),k===a.UNSIGNED_INT&&($=a.RGBA32UI),k===a.BYTE&&($=a.RGBA8I),k===a.SHORT&&($=a.RGBA16I),k===a.INT&&($=a.RGBA32I)),_===a.RGB&&(k===a.UNSIGNED_SHORT&&ge&&($=ge.RGB16_EXT),k===a.SHORT&&ge&&($=ge.RGB16_SNORM_EXT),k===a.UNSIGNED_INT_5_9_9_9_REV&&($=a.RGB9_E5),k===a.UNSIGNED_INT_10F_11F_11F_REV&&($=a.R11F_G11F_B10F)),_===a.RGBA){const ae=ve?Du:Nt.getTransfer(Q);k===a.FLOAT&&($=a.RGBA32F),k===a.HALF_FLOAT&&($=a.RGBA16F),k===a.UNSIGNED_BYTE&&($=ae===Zt?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT&&ge&&($=ge.RGBA16_EXT),k===a.SHORT&&ge&&($=ge.RGBA16_SNORM_EXT),k===a.UNSIGNED_SHORT_4_4_4_4&&($=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&($=a.RGB5_A1)}return($===a.R16F||$===a.R32F||$===a.RG16F||$===a.RG32F||$===a.RGBA16F||$===a.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function L(C,_){let k;return C?_===null||_===ua||_===wo?k=a.DEPTH24_STENCIL8:_===ra?k=a.DEPTH32F_STENCIL8:_===Co&&(k=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ua||_===wo?k=a.DEPTH_COMPONENT24:_===ra?k=a.DEPTH_COMPONENT32F:_===Co&&(k=a.DEPTH_COMPONENT16),k}function P(C,_){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kn&&C.minFilter!==Hn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function F(C){const _=C.target;_.removeEventListener("dispose",F),U(_),_.isVideoTexture&&g.delete(_),_.isHTMLTexture&&M.delete(_)}function A(C){const _=C.target;_.removeEventListener("dispose",A),H(_)}function U(C){const _=r.get(C);if(_.__webglInit===void 0)return;const k=C.source,Y=E.get(k);if(Y){const Q=Y[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&Z(C),Object.keys(Y).length===0&&E.delete(k)}r.remove(C)}function Z(C){const _=r.get(C);a.deleteTexture(_.__webglTexture);const k=C.source,Y=E.get(k);delete Y[_.__cacheKey],f.memory.textures--}function H(C){const _=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Q=0;Q<_.__webglFramebuffer[Y].length;Q++)a.deleteFramebuffer(_.__webglFramebuffer[Y][Q]);else a.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)a.deleteFramebuffer(_.__webglFramebuffer[Y]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=C.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const ve=r.get(k[Y]);ve.__webglTexture&&(a.deleteTexture(ve.__webglTexture),f.memory.textures--),r.remove(k[Y])}r.remove(C)}let J=0;function me(){J=0}function pe(){return J}function ie(C){J=C}function B(){const C=J;return C>=o.maxTextures&&ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),J+=1,C}function X(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function re(C,_){const k=r.get(C);if(C.isVideoTexture&&K(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const Y=C.image;if(Y===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(k,C,_);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+_)}function xe(C,_){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Be(k,C,_);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+_)}function Te(C,_){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Be(k,C,_);return}n.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+_)}function z(C,_){const k=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){it(k,C,_);return}n.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+_)}const te={[Yh]:a.REPEAT,[Ba]:a.CLAMP_TO_EDGE,[qh]:a.MIRRORED_REPEAT},Re={[Kn]:a.NEAREST,[_E]:a.NEAREST_MIPMAP_NEAREST,[Yc]:a.NEAREST_MIPMAP_LINEAR,[Hn]:a.LINEAR,[th]:a.LINEAR_MIPMAP_NEAREST,[sr]:a.LINEAR_MIPMAP_LINEAR},Pe={[xE]:a.NEVER,[TE]:a.ALWAYS,[SE]:a.LESS,[Qp]:a.LEQUAL,[ME]:a.EQUAL,[Jp]:a.GEQUAL,[EE]:a.GREATER,[bE]:a.NOTEQUAL};function Fe(C,_){if(_.type===ra&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Hn||_.magFilter===th||_.magFilter===Yc||_.magFilter===sr||_.minFilter===Hn||_.minFilter===th||_.minFilter===Yc||_.minFilter===sr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,te[_.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,te[_.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,te[_.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Re[_.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Re[_.minFilter]),_.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kn||_.minFilter!==Yc&&_.minFilter!==sr||_.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,o.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function se(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",F));const Y=_.source;let Q=E.get(Y);Q===void 0&&(Q={},E.set(Y,Q));const ve=X(_);if(ve!==C.__cacheKey){Q[ve]===void 0&&(Q[ve]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,k=!0),Q[ve].usedTimes++;const ge=Q[C.__cacheKey];ge!==void 0&&(Q[C.__cacheKey].usedTimes--,ge.usedTimes===0&&Z(_)),C.__cacheKey=ve,C.__webglTexture=Q[ve].texture}return k}function Ce(C,_,k){return Math.floor(Math.floor(C/k)/_)}function be(C,_,k,Y){const ve=C.updateRanges;if(ve.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,k,Y,_.data);else{ve.sort((De,Le)=>De.start-Le.start);let ge=0;for(let De=1;De<ve.length;De++){const Le=ve[ge],Ue=ve[De],qe=Le.start+Le.count,Ze=Ce(Ue.start,_.width,4),at=Ce(Le.start,_.width,4);Ue.start<=qe+1&&Ze===at&&Ce(Ue.start+Ue.count-1,_.width,4)===Ze?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++ge,ve[ge]=Ue)}ve.length=ge+1;const $=n.getParameter(a.UNPACK_ROW_LENGTH),ae=n.getParameter(a.UNPACK_SKIP_PIXELS),fe=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let De=0,Le=ve.length;De<Le;De++){const Ue=ve[De],qe=Math.floor(Ue.start/4),Ze=Math.ceil(Ue.count/4),at=qe%_.width,W=Math.floor(qe/_.width),Oe=Ze,Se=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,at),n.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,at,W,Oe,Se,k,Y,_.data)}C.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,$),n.pixelStorei(a.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(a.UNPACK_SKIP_ROWS,fe)}}function Be(C,_,k){let Y=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=a.TEXTURE_3D);const Q=se(C,_),ve=_.source;n.bindTexture(Y,C.__webglTexture,a.TEXTURE0+k);const ge=r.get(ve);if(ve.version!==ge.__version||Q===!0){if(n.activeTexture(a.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Se=Nt.getPrimaries(Nt.workingColorSpace),Ie=_.colorSpace===bs?null:Nt.getPrimaries(_.colorSpace),He=_.colorSpace===bs||Se===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=T(_.image,!1,o.maxTextureSize);ae=Lt(_,ae);const fe=c.convert(_.format,_.colorSpace),De=c.convert(_.type);let Le=S(_.internalFormat,fe,De,_.normalized,_.colorSpace,_.isVideoTexture);Fe(Y,_);let Ue;const qe=_.mipmaps,Ze=_.isVideoTexture!==!0,at=ge.__version===void 0||Q===!0,W=ve.dataReady,Oe=P(_,ae);if(_.isDepthTexture)Le=L(_.format===rr,_.type),at&&(Ze?n.texStorage2D(a.TEXTURE_2D,1,Le,ae.width,ae.height):n.texImage2D(a.TEXTURE_2D,0,Le,ae.width,ae.height,0,fe,De,null));else if(_.isDataTexture)if(qe.length>0){Ze&&at&&n.texStorage2D(a.TEXTURE_2D,Oe,Le,qe[0].width,qe[0].height);for(let Se=0,Ie=qe.length;Se<Ie;Se++)Ue=qe[Se],Ze?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,fe,De,Ue.data):n.texImage2D(a.TEXTURE_2D,Se,Le,Ue.width,Ue.height,0,fe,De,Ue.data);_.generateMipmaps=!1}else Ze?(at&&n.texStorage2D(a.TEXTURE_2D,Oe,Le,ae.width,ae.height),W&&be(_,ae,fe,De)):n.texImage2D(a.TEXTURE_2D,0,Le,ae.width,ae.height,0,fe,De,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ze&&at&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Le,qe[0].width,qe[0].height,ae.depth);for(let Se=0,Ie=qe.length;Se<Ie;Se++)if(Ue=qe[Se],_.format!==Ki)if(fe!==null)if(Ze){if(W)if(_.layerUpdates.size>0){const He=Hv(Ue.width,Ue.height,_.format,_.type);for(const we of _.layerUpdates){const je=Ue.data.subarray(we*He/Ue.data.BYTES_PER_ELEMENT,(we+1)*He/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,we,Ue.width,Ue.height,1,fe,je)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,ae.depth,fe,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ue.width,Ue.height,ae.depth,0,Ue.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,ae.depth,fe,De,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ue.width,Ue.height,ae.depth,0,fe,De,Ue.data)}else{Ze&&at&&n.texStorage2D(a.TEXTURE_2D,Oe,Le,qe[0].width,qe[0].height);for(let Se=0,Ie=qe.length;Se<Ie;Se++)Ue=qe[Se],_.format!==Ki?fe!==null?Ze?W&&n.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,fe,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,Se,Le,Ue.width,Ue.height,0,Ue.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,fe,De,Ue.data):n.texImage2D(a.TEXTURE_2D,Se,Le,Ue.width,Ue.height,0,fe,De,Ue.data)}else if(_.isDataArrayTexture)if(Ze){if(at&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Le,ae.width,ae.height,ae.depth),W)if(_.layerUpdates.size>0){const Se=Hv(ae.width,ae.height,_.format,_.type);for(const Ie of _.layerUpdates){const He=ae.data.subarray(Ie*Se/ae.data.BYTES_PER_ELEMENT,(Ie+1)*Se/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,ae.width,ae.height,1,fe,De,He)}_.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,fe,De,ae.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,fe,De,ae.data);else if(_.isData3DTexture)Ze?(at&&n.texStorage3D(a.TEXTURE_3D,Oe,Le,ae.width,ae.height,ae.depth),W&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,fe,De,ae.data)):n.texImage3D(a.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,fe,De,ae.data);else if(_.isFramebufferTexture){if(at)if(Ze)n.texStorage2D(a.TEXTURE_2D,Oe,Le,ae.width,ae.height);else{let Se=ae.width,Ie=ae.height;for(let He=0;He<Oe;He++)n.texImage2D(a.TEXTURE_2D,He,Le,Se,Ie,0,fe,De,null),Se>>=1,Ie>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ae.parentNode!==Se){Se.appendChild(ae),M.add(_),Se.onpaint=Ie=>{const He=Ie.changedElements;for(const we of M)He.includes(we.image)&&(we.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ae);else{const He=a.RGBA,we=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,we,je,ae)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ze&&at){const Se=_e(qe[0]);n.texStorage2D(a.TEXTURE_2D,Oe,Le,Se.width,Se.height)}for(let Se=0,Ie=qe.length;Se<Ie;Se++)Ue=qe[Se],Ze?W&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,fe,De,Ue):n.texImage2D(a.TEXTURE_2D,Se,Le,fe,De,Ue);_.generateMipmaps=!1}else if(Ze){if(at){const Se=_e(ae);n.texStorage2D(a.TEXTURE_2D,Oe,Le,Se.width,Se.height)}W&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,fe,De,ae)}else n.texImage2D(a.TEXTURE_2D,0,Le,fe,De,ae);x(_)&&O(Y),ge.__version=ve.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function it(C,_,k){if(_.image.length!==6)return;const Y=se(C,_),Q=_.source;n.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+k);const ve=r.get(Q);if(Q.version!==ve.__version||Y===!0){n.activeTexture(a.TEXTURE0+k);const ge=Nt.getPrimaries(Nt.workingColorSpace),$=_.colorSpace===bs?null:Nt.getPrimaries(_.colorSpace),ae=_.colorSpace===bs||ge===$?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const fe=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,Le=[];for(let we=0;we<6;we++)!fe&&!De?Le[we]=T(_.image[we],!0,o.maxCubemapSize):Le[we]=De?_.image[we].image:_.image[we],Le[we]=Lt(_,Le[we]);const Ue=Le[0],qe=c.convert(_.format,_.colorSpace),Ze=c.convert(_.type),at=S(_.internalFormat,qe,Ze,_.normalized,_.colorSpace),W=_.isVideoTexture!==!0,Oe=ve.__version===void 0||Y===!0,Se=Q.dataReady;let Ie=P(_,Ue);Fe(a.TEXTURE_CUBE_MAP,_);let He;if(fe){W&&Oe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,Ue.width,Ue.height);for(let we=0;we<6;we++){He=Le[we].mipmaps;for(let je=0;je<He.length;je++){const We=He[je];_.format!==Ki?qe!==null?W?Se&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,0,0,We.width,We.height,qe,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,at,We.width,We.height,0,We.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,0,0,We.width,We.height,qe,Ze,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,at,We.width,We.height,0,qe,Ze,We.data)}}}else{if(He=_.mipmaps,W&&Oe){He.length>0&&Ie++;const we=_e(Le[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,we.width,we.height)}for(let we=0;we<6;we++)if(De){W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Le[we].width,Le[we].height,qe,Ze,Le[we].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,at,Le[we].width,Le[we].height,0,qe,Ze,Le[we].data);for(let je=0;je<He.length;je++){const sn=He[je].image[we].image;W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,0,0,sn.width,sn.height,qe,Ze,sn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,at,sn.width,sn.height,0,qe,Ze,sn.data)}}else{W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,qe,Ze,Le[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,at,qe,Ze,Le[we]);for(let je=0;je<He.length;je++){const We=He[je];W?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,0,0,qe,Ze,We.image[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,at,qe,Ze,We.image[we])}}}x(_)&&O(a.TEXTURE_CUBE_MAP),ve.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ye(C,_,k,Y,Q,ve){const ge=c.convert(k.format,k.colorSpace),$=c.convert(k.type),ae=S(k.internalFormat,ge,$,k.normalized,k.colorSpace),fe=r.get(_),De=r.get(k);if(De.__renderTarget=_,!fe.__hasExternalTextures){const Le=Math.max(1,_.width>>ve),Ue=Math.max(1,_.height>>ve);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?n.texImage3D(Q,ve,ae,Le,Ue,_.depth,0,ge,$,null):n.texImage2D(Q,ve,ae,Le,Ue,0,ge,$,null)}n.bindFramebuffer(a.FRAMEBUFFER,C),on(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Y,Q,De.__webglTexture,0,Ut(_)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Y,Q,De.__webglTexture,ve),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(C,_,k){if(a.bindRenderbuffer(a.RENDERBUFFER,C),_.depthBuffer){const Y=_.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ve=L(_.stencilBuffer,Q),ge=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;on(_)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(_),ve,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(_),ve,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ve,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,C)}else{const Y=_.textures;for(let Q=0;Q<Y.length;Q++){const ve=Y[Q],ge=c.convert(ve.format,ve.colorSpace),$=c.convert(ve.type),ae=S(ve.internalFormat,ge,$,ve.normalized,ve.colorSpace);on(_)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(_),ae,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(_),ae,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ae,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ze(C,_,k){const Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=r.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",F)),Q.__webglTexture===void 0){Q.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,_.depthTexture);const fe=c.convert(_.depthTexture.format),De=c.convert(_.depthTexture.type);let Le;_.depthTexture.format===Va?Le=a.DEPTH_COMPONENT24:_.depthTexture.format===rr&&(Le=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,_.width,_.height,0,fe,De,null)}}else re(_.depthTexture,0);const ve=Q.__webglTexture,ge=Ut(_),$=Y?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,ae=_.depthTexture.format===rr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===Va)on(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,$,ve,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,ae,$,ve,0);else if(_.depthTexture.format===rr)on(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,$,ve,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,ae,$,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(C){const _=r.get(C),k=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)ze(_.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?ze(_.__webglFramebuffer[0],C,0):ze(_.__webglFramebuffer,C,0)}else if(k){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=a.createRenderbuffer(),Ct(_.__webglDepthbuffer[Y],C,!1);else{const Q=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ve=_.__webglDepthbuffer[Y];a.bindRenderbuffer(a.RENDERBUFFER,ve),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,ve)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),Ct(_.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ve=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ve),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,ve)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function ut(C,_,k){const Y=r.get(C);_!==void 0&&Ye(Y.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&ot(C)}function mt(C){const _=C.texture,k=r.get(C),Y=r.get(_);C.addEventListener("dispose",A);const Q=C.textures,ve=C.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=a.createTexture()),Y.__version=_.version,f.memory.textures++),ve){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let ae=0;ae<_.mipmaps.length;ae++)k.__webglFramebuffer[$][ae]=a.createFramebuffer()}else k.__webglFramebuffer[$]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)k.__webglFramebuffer[$]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(ge)for(let $=0,ae=Q.length;$<ae;$++){const fe=r.get(Q[$]);fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture(),f.memory.textures++)}if(C.samples>0&&on(C)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){const ae=Q[$];k.__webglColorRenderbuffer[$]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const fe=c.convert(ae.format,ae.colorSpace),De=c.convert(ae.type),Le=S(ae.internalFormat,fe,De,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),Ue=Ut(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Le,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$,a.RENDERBUFFER,k.__webglColorRenderbuffer[$])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),Ct(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ve){n.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Ye(k.__webglFramebuffer[$][ae],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae);else Ye(k.__webglFramebuffer[$],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);x(_)&&O(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let $=0,ae=Q.length;$<ae;$++){const fe=Q[$],De=r.get(fe);let Le=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Le=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Le,De.__webglTexture),Fe(Le,fe),Ye(k.__webglFramebuffer,C,fe,a.COLOR_ATTACHMENT0+$,Le,0),x(fe)&&O(Le)}n.unbindTexture()}else{let $=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture($,Y.__webglTexture),Fe($,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Ye(k.__webglFramebuffer[ae],C,_,a.COLOR_ATTACHMENT0,$,ae);else Ye(k.__webglFramebuffer,C,_,a.COLOR_ATTACHMENT0,$,0);x(_)&&O($),n.unbindTexture()}C.depthBuffer&&ot(C)}function nn(C){const _=C.textures;for(let k=0,Y=_.length;k<Y;k++){const Q=_[k];if(x(Q)){const ve=I(C),ge=r.get(Q).__webglTexture;n.bindTexture(ve,ge),O(ve),n.unbindTexture()}}}const an=[],Gt=[];function Qt(C){if(C.samples>0){if(on(C)===!1){const _=C.textures,k=C.width,Y=C.height;let Q=a.COLOR_BUFFER_BIT;const ve=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=r.get(C),$=_.length>1;if($)for(let fe=0;fe<_.length;fe++)n.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),$){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);const De=r.get(_[fe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,De,0)}a.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,a.NEAREST),p===!0&&(an.length=0,Gt.length=0,an.push(a.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(an.push(ve),Gt.push(ve),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Gt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,an))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),$)for(let fe=0;fe<_.length;fe++){n.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);const De=r.get(_[fe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,De,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const _=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function Ut(C){return Math.min(o.maxSamples,C.samples)}function on(C){const _=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(C){const _=f.render.frame;g.get(C)!==_&&(g.set(C,_),C.update())}function Lt(C,_){const k=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==wu&&k!==bs&&(Nt.getTransfer(k)===Zt?(Y!==Ki||Q!==Ti)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",k)),_}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=me,this.getTextureUnits=pe,this.setTextureUnits=ie,this.setTexture2D=re,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=z,this.rebindTextures=ut,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yR(a,e){function n(r,o=bs){let c;const f=Nt.getTransfer(o);if(r===Ti)return a.UNSIGNED_BYTE;if(r===Wp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Dy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Ny)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cy)return a.BYTE;if(r===wy)return a.SHORT;if(r===Co)return a.UNSIGNED_SHORT;if(r===Xp)return a.INT;if(r===ua)return a.UNSIGNED_INT;if(r===ra)return a.FLOAT;if(r===ka)return a.HALF_FLOAT;if(r===Uy)return a.ALPHA;if(r===Ly)return a.RGB;if(r===Ki)return a.RGBA;if(r===Va)return a.DEPTH_COMPONENT;if(r===rr)return a.DEPTH_STENCIL;if(r===Oy)return a.RED;if(r===qp)return a.RED_INTEGER;if(r===cr)return a.RG;if(r===Zp)return a.RG_INTEGER;if(r===Kp)return a.RGBA_INTEGER;if(r===xu||r===Su||r===Mu||r===Eu)if(f===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh||r===$h||r===ep||r===tp||r===np||r===Ru||r===ip)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===jh||r===$h)return f===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ep)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return c.COMPRESSED_R11_EAC;if(r===np)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ru)return c.COMPRESSED_RG11_EAC;if(r===ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ap||r===sp||r===rp||r===lp||r===op||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ap)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===op)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===up)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_p)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vp||r===yp||r===xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===vp)return f===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===Mp||r===Cu||r===Ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
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

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Vy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new fa({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Un(new lr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Us{constructor(e,n){super();const r=this;let o=null,c=1,f=null,m="local-floor",p=1,h=null,g=null,M=null,v=null,E=null,R=null;const N=typeof XRWebGLBinding<"u",T=new MR,x={},O=n.getContextAttributes();let I=null,S=null;const L=[],P=[],F=new lt;let A=null;const U=new Bi;U.viewport=new vn;const Z=new Bi;Z.viewport=new vn;const H=[U,Z],J=new Nb;let me=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Ce=L[se];return Ce===void 0&&(Ce=new lh,L[se]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(se){let Ce=L[se];return Ce===void 0&&(Ce=new lh,L[se]=Ce),Ce.getGripSpace()},this.getHand=function(se){let Ce=L[se];return Ce===void 0&&(Ce=new lh,L[se]=Ce),Ce.getHandSpace()};function ie(se){const Ce=P.indexOf(se.inputSource);if(Ce===-1)return;const be=L[Ce];be!==void 0&&(be.update(se.inputSource,se.frame,h||f),be.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",X);for(let se=0;se<L.length;se++){const Ce=P[se];Ce!==null&&(P[se]=null,L[se].disconnect(Ce))}me=null,pe=null,T.reset();for(const se in x)delete x[se];e.setRenderTarget(I),E=null,v=null,M=null,o=null,S=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){m=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return M===null&&N&&(M=new XRWebGLBinding(o,n)),M},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",B),o.addEventListener("inputsourceschange",X),O.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,it=null;O.depth&&(it=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=O.stencil?rr:Va,Be=O.stencil?wo:ua);const Ye={colorFormat:n.RGBA8,depthFormat:it,scaleFactor:c};M=this.getBinding(),v=M.createProjectionLayer(Ye),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),S=new ca(v.textureWidth,v.textureHeight,{format:Ki,type:Ti,depthTexture:new _l(v.textureWidth,v.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),S=new ca(E.framebufferWidth,E.framebufferHeight,{format:Ki,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await o.requestReferenceSpace(m),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function X(se){for(let Ce=0;Ce<se.removed.length;Ce++){const be=se.removed[Ce],Be=P.indexOf(be);Be>=0&&(P[Be]=null,L[Be].disconnect(be))}for(let Ce=0;Ce<se.added.length;Ce++){const be=se.added[Ce];let Be=P.indexOf(be);if(Be===-1){for(let Ye=0;Ye<L.length;Ye++)if(Ye>=P.length){P.push(be),Be=Ye;break}else if(P[Ye]===null){P[Ye]=be,Be=Ye;break}if(Be===-1)break}const it=L[Be];it&&it.connect(be)}}const re=new ee,xe=new ee;function Te(se,Ce,be){re.setFromMatrixPosition(Ce.matrixWorld),xe.setFromMatrixPosition(be.matrixWorld);const Be=re.distanceTo(xe),it=Ce.projectionMatrix.elements,Ye=be.projectionMatrix.elements,Ct=it[14]/(it[10]-1),ze=it[14]/(it[10]+1),ot=(it[9]+1)/it[5],ut=(it[9]-1)/it[5],mt=(it[8]-1)/it[0],nn=(Ye[8]+1)/Ye[0],an=Ct*mt,Gt=Ct*nn,Qt=Be/(-mt+nn),Ut=Qt*-mt;if(Ce.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ut),se.translateZ(Qt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),it[10]===-1)se.projectionMatrix.copy(Ce.projectionMatrix),se.projectionMatrixInverse.copy(Ce.projectionMatrixInverse);else{const on=Ct+Qt,K=ze+Qt,Lt=an-Ut,_e=Gt+(Be-Ut),C=ot*ze/K*on,_=ut*ze/K*on;se.projectionMatrix.makePerspective(Lt,_e,C,_,on,K),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function z(se,Ce){Ce===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Ce.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Ce=se.near,be=se.far;T.texture!==null&&(T.depthNear>0&&(Ce=T.depthNear),T.depthFar>0&&(be=T.depthFar)),J.near=Z.near=U.near=Ce,J.far=Z.far=U.far=be,(me!==J.near||pe!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),me=J.near,pe=J.far),J.layers.mask=se.layers.mask|6,U.layers.mask=J.layers.mask&-5,Z.layers.mask=J.layers.mask&-3;const Be=se.parent,it=J.cameras;z(J,Be);for(let Ye=0;Ye<it.length;Ye++)z(it[Ye],Be);it.length===2?Te(J,U,Z):J.projectionMatrix.copy(U.projectionMatrix),te(se,J,Be)};function te(se,Ce,be){be===null?se.matrix.copy(Ce.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(Ce.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Ce.projectionMatrix),se.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=No*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(se){p=se,v!==null&&(v.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(J)},this.getCameraTexture=function(se){return x[se]};let Re=null;function Pe(se,Ce){if(g=Ce.getViewerPose(h||f),R=Ce,g!==null){const be=g.views;E!==null&&(e.setRenderTargetFramebuffer(S,E.framebuffer),e.setRenderTarget(S));let Be=!1;be.length!==J.cameras.length&&(J.cameras.length=0,Be=!0);for(let ze=0;ze<be.length;ze++){const ot=be[ze];let ut=null;if(E!==null)ut=E.getViewport(ot);else{const nn=M.getViewSubImage(v,ot);ut=nn.viewport,ze===0&&(e.setRenderTargetTextures(S,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(S))}let mt=H[ze];mt===void 0&&(mt=new Bi,mt.layers.enable(ze),mt.viewport=new vn,H[ze]=mt),mt.matrix.fromArray(ot.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ot.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ut.x,ut.y,ut.width,ut.height),ze===0&&(J.matrix.copy(mt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Be===!0&&J.cameras.push(mt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){M=r.getBinding();const ze=M.getDepthInformation(be[0]);ze&&ze.isValid&&ze.texture&&T.init(ze,o.renderState)}if(it&&it.includes("camera-access")&&N){e.state.unbindTexture(),M=r.getBinding();for(let ze=0;ze<be.length;ze++){const ot=be[ze].camera;if(ot){let ut=x[ot];ut||(ut=new Vy,x[ot]=ut);const mt=M.getCameraImage(ot);ut.sourceTexture=mt}}}}for(let be=0;be<L.length;be++){const Be=P[be],it=L[be];Be!==null&&it!==void 0&&it.update(Be,Ce,h||f)}Re&&Re(se,Ce),Ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ce}),R=null}const Fe=new qy;Fe.setAnimationLoop(Pe),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const bR=new _n,ex=new pt;ex.set(-1,0,0,0,1,0,0,0,1);function TR(a,e){function n(T,x){T.matrixAutoUpdate===!0&&T.updateMatrix(),x.value.copy(T.matrix)}function r(T,x){x.color.getRGB(T.fogColor.value,Xy(a)),x.isFog?(T.fogNear.value=x.near,T.fogFar.value=x.far):x.isFogExp2&&(T.fogDensity.value=x.density)}function o(T,x,O,I,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(T,x):x.isMeshLambertMaterial?(c(T,x),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(T,x),M(T,x)):x.isMeshPhongMaterial?(c(T,x),g(T,x),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(T,x),v(T,x),x.isMeshPhysicalMaterial&&E(T,x,S)):x.isMeshMatcapMaterial?(c(T,x),R(T,x)):x.isMeshDepthMaterial?c(T,x):x.isMeshDistanceMaterial?(c(T,x),N(T,x)):x.isMeshNormalMaterial?c(T,x):x.isLineBasicMaterial?(f(T,x),x.isLineDashedMaterial&&m(T,x)):x.isPointsMaterial?p(T,x,O,I):x.isSpriteMaterial?h(T,x):x.isShadowMaterial?(T.color.value.copy(x.color),T.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(T,x){T.opacity.value=x.opacity,x.color&&T.diffuse.value.copy(x.color),x.emissive&&T.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.bumpMap&&(T.bumpMap.value=x.bumpMap,n(x.bumpMap,T.bumpMapTransform),T.bumpScale.value=x.bumpScale,x.side===hi&&(T.bumpScale.value*=-1)),x.normalMap&&(T.normalMap.value=x.normalMap,n(x.normalMap,T.normalMapTransform),T.normalScale.value.copy(x.normalScale),x.side===hi&&T.normalScale.value.negate()),x.displacementMap&&(T.displacementMap.value=x.displacementMap,n(x.displacementMap,T.displacementMapTransform),T.displacementScale.value=x.displacementScale,T.displacementBias.value=x.displacementBias),x.emissiveMap&&(T.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,T.emissiveMapTransform)),x.specularMap&&(T.specularMap.value=x.specularMap,n(x.specularMap,T.specularMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,S=O.envMapRotation;I&&(T.envMap.value=I,T.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(ex),T.reflectivity.value=x.reflectivity,T.ior.value=x.ior,T.refractionRatio.value=x.refractionRatio),x.lightMap&&(T.lightMap.value=x.lightMap,T.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,T.lightMapTransform)),x.aoMap&&(T.aoMap.value=x.aoMap,T.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,T.aoMapTransform))}function f(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform))}function m(T,x){T.dashSize.value=x.dashSize,T.totalSize.value=x.dashSize+x.gapSize,T.scale.value=x.scale}function p(T,x,O,I){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.size.value=x.size*O,T.scale.value=I*.5,x.map&&(T.map.value=x.map,n(x.map,T.uvTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function h(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.rotation.value=x.rotation,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function g(T,x){T.specular.value.copy(x.specular),T.shininess.value=Math.max(x.shininess,1e-4)}function M(T,x){x.gradientMap&&(T.gradientMap.value=x.gradientMap)}function v(T,x){T.metalness.value=x.metalness,x.metalnessMap&&(T.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,T.metalnessMapTransform)),T.roughness.value=x.roughness,x.roughnessMap&&(T.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,T.roughnessMapTransform)),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)}function E(T,x,O){T.ior.value=x.ior,x.sheen>0&&(T.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),T.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(T.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,T.sheenColorMapTransform)),x.sheenRoughnessMap&&(T.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,T.sheenRoughnessMapTransform))),x.clearcoat>0&&(T.clearcoat.value=x.clearcoat,T.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(T.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,T.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(T.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===hi&&T.clearcoatNormalScale.value.negate())),x.dispersion>0&&(T.dispersion.value=x.dispersion),x.iridescence>0&&(T.iridescence.value=x.iridescence,T.iridescenceIOR.value=x.iridescenceIOR,T.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(T.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,T.iridescenceMapTransform)),x.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),x.transmission>0&&(T.transmission.value=x.transmission,T.transmissionSamplerMap.value=O.texture,T.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(T.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,T.transmissionMapTransform)),T.thickness.value=x.thickness,x.thicknessMap&&(T.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=x.attenuationDistance,T.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(T.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(T.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=x.specularIntensity,T.specularColor.value.copy(x.specularColor),x.specularColorMap&&(T.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,T.specularColorMapTransform)),x.specularIntensityMap&&(T.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,T.specularIntensityMapTransform))}function R(T,x){x.matcap&&(T.matcap.value=x.matcap)}function N(T,x){const O=e.get(x).light;T.referencePosition.value.setFromMatrixPosition(O.matrixWorld),T.nearDistance.value=O.shadow.camera.near,T.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AR(a,e,n,r){let o={},c={},f=[];const m=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(S,L){const P=L.program;r.uniformBlockBinding(S,P)}function h(S,L){let P=o[S.id];P===void 0&&(T(S),P=g(S),o[S.id]=P,S.addEventListener("dispose",O));const F=L.program;r.updateUBOMapping(S,F);const A=e.render.frame;c[S.id]!==A&&(v(S),c[S.id]=A)}function g(S){const L=M();S.__bindingPointIndex=L;const P=a.createBuffer(),F=S.__size,A=S.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,F,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,P),P}function M(){for(let S=0;S<m;S++)if(f.indexOf(S)===-1)return f.push(S),S;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(S){const L=o[S.id],P=S.uniforms,F=S.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let A=0,U=P.length;A<U;A++){const Z=P[A];if(Array.isArray(Z))for(let H=0,J=Z.length;H<J;H++)E(Z[H],A,H,F);else E(Z,A,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function E(S,L,P,F){if(N(S,L,P,F)===!0){const A=S.__offset,U=S.value;if(Array.isArray(U)){let Z=0;for(let H=0;H<U.length;H++){const J=U[H],me=x(J);R(J,S.__data,Z),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(Z+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(U,S.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,S.__data)}}function R(S,L,P){typeof S=="number"||typeof S=="boolean"?L[0]=S:S.isMatrix3?(L[0]=S.elements[0],L[1]=S.elements[1],L[2]=S.elements[2],L[3]=0,L[4]=S.elements[3],L[5]=S.elements[4],L[6]=S.elements[5],L[7]=0,L[8]=S.elements[6],L[9]=S.elements[7],L[10]=S.elements[8],L[11]=0):ArrayBuffer.isView(S)?L.set(new S.constructor(S.buffer,S.byteOffset,L.length)):S.toArray(L,P)}function N(S,L,P,F){const A=S.value,U=L+"_"+P;if(F[U]===void 0)return typeof A=="number"||typeof A=="boolean"?F[U]=A:ArrayBuffer.isView(A)?F[U]=A.slice():F[U]=A.clone(),!0;{const Z=F[U];if(typeof A=="number"||typeof A=="boolean"){if(Z!==A)return F[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(Z.equals(A)===!1)return Z.copy(A),!0}}return!1}function T(S){const L=S.uniforms;let P=0;const F=16;for(let U=0,Z=L.length;U<Z;U++){const H=Array.isArray(L[U])?L[U]:[L[U]];for(let J=0,me=H.length;J<me;J++){const pe=H[J],ie=Array.isArray(pe.value)?pe.value:[pe.value];for(let B=0,X=ie.length;B<X;B++){const re=ie[B],xe=x(re),Te=P%F,z=Te%xe.boundary,te=Te+z;P+=z,te!==0&&F-te<xe.storage&&(P+=F-te),pe.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=xe.storage}}}const A=P%F;return A>0&&(P+=F-A),S.__size=P,S.__cache={},this}function x(S){const L={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(L.boundary=4,L.storage=4):S.isVector2?(L.boundary=8,L.storage=8):S.isVector3||S.isColor?(L.boundary=16,L.storage=12):S.isVector4?(L.boundary=16,L.storage=16):S.isMatrix3?(L.boundary=48,L.storage=48):S.isMatrix4?(L.boundary=64,L.storage=64):S.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(L.boundary=16,L.storage=S.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",S),L}function O(S){const L=S.target;L.removeEventListener("dispose",O);const P=f.indexOf(L.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function I(){for(const S in o)a.deleteBuffer(o[S]);f=[],o={},c={}}return{bind:p,update:h,dispose:I}}const RR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function CR(){return ia===null&&(ia=new hb(RR,16,16,cr,ka),ia.name="DFG_LUT",ia.minFilter=Hn,ia.magFilter=Hn,ia.wrapS=Ba,ia.wrapT=Ba,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class wR{constructor(e={}){const{canvas:n=RE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ti}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=f;const N=E,T=new Set([Kp,Zp,qp]),x=new Set([Ti,ua,Co,wo,Wp,Yp]),O=new Uint32Array(4),I=new Int32Array(4),S=new ee;let L=null,P=null;const F=[],A=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let H=!1,J=null,me=null,pe=null,ie=null;this._outputColorSpace=di;let B=0,X=0,re=null,xe=-1,Te=null;const z=new vn,te=new vn;let Re=null;const Pe=new Tt(0);let Fe=0,se=n.width,Ce=n.height,be=1,Be=null,it=null;const Ye=new vn(0,0,se,Ce),Ct=new vn(0,0,se,Ce);let ze=!1;const ot=new am;let ut=!1,mt=!1;const nn=new _n,an=new ee,Gt=new vn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function on(){return re===null?be:1}let K=r;function Lt(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:o,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:M};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",sn,!1),n.addEventListener("webglcontextrestored",Ot,!1),n.addEventListener("webglcontextcreationerror",G,!1),K===null){const j="webgl2";if(K=Lt(j,w),K===null)throw Lt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let _e,C,_,k,Y,Q,ve,ge,$,ae,fe,De,Le,Ue,qe,Ze,at,W,Oe,Se,Ie,He,we;function je(){_e=new CA(K),_e.init(),Ie=new yR(K,_e),C=new xA(K,_e,e,Ie),_=new _R(K,_e),C.reversedDepthBuffer&&v&&_.buffers.depth.setReversed(!0),me=K.createFramebuffer(),pe=K.createFramebuffer(),ie=K.createFramebuffer(),k=new NA(K),Y=new iR,Q=new vR(K,_e,_,Y,C,Ie,k),ve=new RA(Z),ge=new Pb(K),He=new vA(K,ge),$=new wA(K,ge,k,He),ae=new LA(K,$,ge,He,k),W=new UA(K,C,Q),qe=new SA(Y),fe=new nR(Z,ve,_e,C,He,qe),De=new TR(Z,Y),Le=new sR,Ue=new fR(_e),at=new _A(Z,ve,_,ae,R,p),Ze=new gR(Z,ae,C),we=new AR(K,k,C,_),Oe=new yA(K,_e,k),Se=new DA(K,_e,k),k.programs=fe.programs,Z.capabilities=C,Z.extensions=_e,Z.properties=Y,Z.renderLists=Le,Z.shadowMap=Ze,Z.state=_,Z.info=k}je(),N!==Ti&&(U=new PA(N,n.width,n.height,m,o,c));const We=new ER(Z,K);this.xr=We,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(w){w!==void 0&&(be=w,this.setSize(se,Ce,!1))},this.getSize=function(w){return w.set(se,Ce)},this.setSize=function(w,j,de=!0){if(We.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,Ce=j,n.width=Math.floor(w*be),n.height=Math.floor(j*be),de===!0&&(n.style.width=w+"px",n.style.height=j+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(se*be,Ce*be).floor()},this.setDrawingBufferSize=function(w,j,de){se=w,Ce=j,be=de,n.width=Math.floor(w*de),n.height=Math.floor(j*de),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(N===Ti){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Ye)},this.setViewport=function(w,j,de,ce){w.isVector4?Ye.set(w.x,w.y,w.z,w.w):Ye.set(w,j,de,ce),_.viewport(z.copy(Ye).multiplyScalar(be).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,j,de,ce){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,j,de,ce),_.scissor(te.copy(Ct).multiplyScalar(be).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){_.setScissorTest(ze=w)},this.setOpaqueSort=function(w){Be=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,de=!0){let ce=0;if(w){let ue=!1;if(re!==null){const ke=re.texture.format;ue=T.has(ke)}if(ue){const ke=re.texture.type,Qe=x.has(ke),Ge=at.getClearColor(),$e=at.getClearAlpha(),Je=Ge.r,st=Ge.g,gt=Ge.b;Qe?(O[0]=Je,O[1]=st,O[2]=gt,O[3]=$e,K.clearBufferuiv(K.COLOR,0,O)):(I[0]=Je,I[1]=st,I[2]=gt,I[3]=$e,K.clearBufferiv(K.COLOR,0,I))}else ce|=K.COLOR_BUFFER_BIT}j&&(ce|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ce|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&K.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),J=w},this.dispose=function(){n.removeEventListener("webglcontextlost",sn,!1),n.removeEventListener("webglcontextrestored",Ot,!1),n.removeEventListener("webglcontextcreationerror",G,!1),at.dispose(),Le.dispose(),Ue.dispose(),Y.dispose(),ve.dispose(),ae.dispose(),He.dispose(),we.dispose(),fe.dispose(),We.dispose(),We.removeEventListener("sessionstart",cn),We.removeEventListener("sessionend",Tn),ai.stop()};function sn(w){w.preventDefault(),Uu("WebGLRenderer: Context Lost."),H=!0}function Ot(){Uu("WebGLRenderer: Context Restored."),H=!1;const w=k.autoReset,j=Ze.enabled,de=Ze.autoUpdate,ce=Ze.needsUpdate,ue=Ze.type;je(),k.autoReset=w,Ze.enabled=j,Ze.autoUpdate=de,Ze.needsUpdate=ce,Ze.type=ue}function G(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const j=w.target;j.removeEventListener("dispose",Ne),dt(j)}function dt(w){Jt(w),Y.remove(w)}function Jt(w){const j=Y.get(w).programs;j!==void 0&&(j.forEach(function(de){fe.releaseProgram(de)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,de,ce,ue,ke){j===null&&(j=Qt);const Qe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ge=Ya(w,j,de,ce,ue);_.setMaterial(ce,Qe);let $e=de.index,Je=1;if(ce.wireframe===!0){if($e=$.getWireframeAttribute(de),$e===void 0)return;Je=2}const st=de.drawRange,gt=de.attributes.position;let nt=st.start*Je,Pt=(st.start+st.count)*Je;ke!==null&&(nt=Math.max(nt,ke.start*Je),Pt=Math.min(Pt,(ke.start+ke.count)*Je)),$e!==null?(nt=Math.max(nt,0),Pt=Math.min(Pt,$e.count)):gt!=null&&(nt=Math.max(nt,0),Pt=Math.min(Pt,gt.count));const pn=Pt-nt;if(pn<0||pn===1/0)return;He.setup(ue,ce,Ge,de,$e);let rn,Vt=Oe;if($e!==null&&(rn=ge.get($e),Vt=Se,Vt.setIndex(rn)),ue.isMesh)ce.wireframe===!0?(_.setLineWidth(ce.wireframeLinewidth*on()),Vt.setMode(K.LINES)):Vt.setMode(K.TRIANGLES);else if(ue.isLine){let Xt=ce.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*on()),ue.isLineSegments?Vt.setMode(K.LINES):ue.isLineLoop?Vt.setMode(K.LINE_LOOP):Vt.setMode(K.LINE_STRIP)}else ue.isPoints?Vt.setMode(K.POINTS):ue.isSprite&&Vt.setMode(K.TRIANGLES);if(ue.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Xt=ue._multiDrawStarts,Xe=ue._multiDrawCounts,Qn=ue._multiDrawCount,Mt=$e?ge.get($e).bytesPerElement:1,Ln=Y.get(ce).currentProgram.getUniforms();for(let pi=0;pi<Qn;pi++)Ln.setValue(K,"_gl_DrawID",pi),Vt.render(Xt[pi]/Mt,Xe[pi])}else if(ue.isInstancedMesh)Vt.renderInstances(nt,pn,ue.count);else if(de.isInstancedBufferGeometry){const Xt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Xe=Math.min(de.instanceCount,Xt);Vt.renderInstances(nt,pn,Xe)}else Vt.render(nt,pn)};function yn(w,j,de){w.transparent===!0&&w.side===sa&&w.forceSinglePass===!1?(w.side=hi,w.needsUpdate=!0,Wa(w,j,de),w.side=Rs,w.needsUpdate=!0,Wa(w,j,de),w.side=sa):Wa(w,j,de)}this.compile=function(w,j,de=null){de===null&&(de=w),P=Ue.get(de),P.init(j),A.push(P),de.traverseVisible(function(ue){ue.isLight&&ue.layers.test(j.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),w!==de&&w.traverseVisible(function(ue){ue.isLight&&ue.layers.test(j.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),P.setupLights();const ce=new Set;return w.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const ke=ue.material;if(ke)if(Array.isArray(ke))for(let Qe=0;Qe<ke.length;Qe++){const Ge=ke[Qe];yn(Ge,de,ue),ce.add(Ge)}else yn(ke,de,ue),ce.add(ke)}),P=A.pop(),ce},this.compileAsync=function(w,j,de=null){const ce=this.compile(w,j,de);return new Promise(ue=>{function ke(){if(ce.forEach(function(Qe){Y.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){ue(w);return}setTimeout(ke,10)}_e.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let hn=null;function xn(w){hn&&hn(w)}function cn(){ai.stop()}function Tn(){ai.start()}const ai=new qy;ai.setAnimationLoop(xn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){hn=w,We.setAnimationLoop(w),w===null?ai.stop():ai.start()},We.addEventListener("sessionstart",cn),We.addEventListener("sessionend",Tn),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(w,j);const de=We.enabled===!0&&We.isPresenting===!0,ce=U!==null&&(re===null||de)&&U.begin(Z,re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(j),j=We.getCamera()),w.isScene===!0&&w.onBeforeRender(Z,w,j,re),P=Ue.get(w,A.length),P.init(j),P.state.textureUnits=Q.getTextureUnits(),A.push(P),nn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ot.setFromProjectionMatrix(nn,la,j.reversedDepth),mt=this.localClippingEnabled,ut=qe.init(this.clippingPlanes,mt),L=Le.get(w,F.length),L.init(),F.push(L),We.enabled===!0&&We.isPresenting===!0){const Qe=Z.xr.getDepthSensingMesh();Qe!==null&&Ls(Qe,j,-1/0,Z.sortObjects)}Ls(w,j,0,Z.sortObjects),L.finish(),Z.sortObjects===!0&&L.sort(Be,it,j.reversedDepth),Ut=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ut&&at.addToRenderList(L,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&qe.beginShadows();const ue=P.state.shadowsArray;if(Ze.render(ue,w,j),ut===!0&&qe.endShadows(),(ce&&U.hasRenderPass())===!1){const Qe=L.opaque,Ge=L.transmissive;if(P.setupLights(),j.isArrayCamera){const $e=j.cameras;if(Ge.length>0)for(let Je=0,st=$e.length;Je<st;Je++){const gt=$e[Je];Io(Qe,Ge,w,gt)}Ut&&at.render(w);for(let Je=0,st=$e.length;Je<st;Je++){const gt=$e[Je];Po(L,w,gt,gt.viewport)}}else Ge.length>0&&Io(Qe,Ge,w,j),Ut&&at.render(w),Po(L,w,j)}re!==null&&X===0&&(Q.updateMultisampleRenderTarget(re),Q.updateRenderTargetMipmap(re)),ce&&U.end(Z),w.isScene===!0&&w.onAfterRender(Z,w,j),He.resetDefaultState(),xe=-1,Te=null,A.pop(),A.length>0?(P=A[A.length-1],Q.setTextureUnits(P.state.textureUnits),ut===!0&&qe.setGlobalState(Z.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,J!==null&&J.renderEnd()};function Ls(w,j,de,ce){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ot.intersectsSprite(w)){ce&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nn);const Qe=ae.update(w),Ge=w.material;Ge.visible&&L.push(w,Qe,Ge,de,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ot.intersectsObject(w))){const Qe=ae.update(w),Ge=w.material;if(ce&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Gt.copy(Qe.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(nn)),Array.isArray(Ge)){const $e=Qe.groups;for(let Je=0,st=$e.length;Je<st;Je++){const gt=$e[Je],nt=Ge[gt.materialIndex];nt&&nt.visible&&L.push(w,Qe,nt,de,Gt.z,gt)}}else Ge.visible&&L.push(w,Qe,Ge,de,Gt.z,null)}}const ke=w.children;for(let Qe=0,Ge=ke.length;Qe<Ge;Qe++)Ls(ke[Qe],j,de,ce)}function Po(w,j,de,ce){const{opaque:ue,transmissive:ke,transparent:Qe}=w;P.setupLightsView(de),ut===!0&&qe.setGlobalState(Z.clippingPlanes,de),ce&&_.viewport(z.copy(ce)),ue.length>0&&Os(ue,j,de),ke.length>0&&Os(ke,j,de),Qe.length>0&&Os(Qe,j,de),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Io(w,j,de,ce){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ce.id]===void 0){const nt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ce.id]=new ca(1,1,{generateMipmaps:!0,type:nt?ka:Ti,minFilter:sr,samples:Math.max(4,C.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const ke=P.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||z;ke.setSize(Qe.z*Z.transmissionResolutionScale,Qe.w*Z.transmissionResolutionScale);const Ge=Z.getRenderTarget(),$e=Z.getActiveCubeFace(),Je=Z.getActiveMipmapLevel();Z.setRenderTarget(ke),Z.getClearColor(Pe),Fe=Z.getClearAlpha(),Fe<1&&Z.setClearColor(16777215,.5),Z.clear(),Ut&&at.render(de);const st=Z.toneMapping;Z.toneMapping=oa;const gt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),P.setupLightsView(ce),ut===!0&&qe.setGlobalState(Z.clippingPlanes,ce),Os(w,de,ce),Q.updateMultisampleRenderTarget(ke),Q.updateRenderTargetMipmap(ke),_e.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Pt=0,pn=j.length;Pt<pn;Pt++){const rn=j[Pt],{object:Vt,geometry:Xt,material:Xe,group:Qn}=rn;if(Xe.side===sa&&Vt.layers.test(ce.layers)){const Mt=Xe.side;Xe.side=hi,Xe.needsUpdate=!0,Xa(Vt,de,ce,Xt,Xe,Qn),Xe.side=Mt,Xe.needsUpdate=!0,nt=!0}}nt===!0&&(Q.updateMultisampleRenderTarget(ke),Q.updateRenderTargetMipmap(ke))}Z.setRenderTarget(Ge,$e,Je),Z.setClearColor(Pe,Fe),gt!==void 0&&(ce.viewport=gt),Z.toneMapping=st}function Os(w,j,de){const ce=j.isScene===!0?j.overrideMaterial:null;for(let ue=0,ke=w.length;ue<ke;ue++){const Qe=w[ue],{object:Ge,geometry:$e,group:Je}=Qe;let st=Qe.material;st.allowOverride===!0&&ce!==null&&(st=ce),Ge.layers.test(de.layers)&&Xa(Ge,j,de,$e,st,Je)}}function Xa(w,j,de,ce,ue,ke){w.onBeforeRender(Z,j,de,ce,ue,ke),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ue.onBeforeRender(Z,j,de,ce,w,ke),ue.transparent===!0&&ue.side===sa&&ue.forceSinglePass===!1?(ue.side=hi,ue.needsUpdate=!0,Z.renderBufferDirect(de,j,ce,ue,w,ke),ue.side=Rs,ue.needsUpdate=!0,Z.renderBufferDirect(de,j,ce,ue,w,ke),ue.side=sa):Z.renderBufferDirect(de,j,ce,ue,w,ke),w.onAfterRender(Z,j,de,ce,ue,ke)}function Wa(w,j,de){j.isScene!==!0&&(j=Qt);const ce=Y.get(w),ue=P.state.lights,ke=P.state.shadowsArray,Qe=ue.state.version,Ge=fe.getParameters(w,ue.state,ke,j,de,P.state.lightProbeGridArray),$e=fe.getProgramCacheKey(Ge);let Je=ce.programs;ce.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,ce.fog=j.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ce.envMap=ve.get(w.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",Ne),Je=new Map,ce.programs=Je);let gt=Je.get($e);if(gt!==void 0){if(ce.currentProgram===gt&&ce.lightsStateVersion===Qe)return ha(w,Ge),gt}else Ge.uniforms=fe.getUniforms(w),J!==null&&w.isNodeMaterial&&J.build(w,de,Ge),w.onBeforeCompile(Ge,Z),gt=fe.acquireProgram(Ge,$e),Je.set($e,gt),ce.uniforms=Ge.uniforms;const nt=ce.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(nt.clippingPlanes=qe.uniform),ha(w,Ge),ce.needsLights=zo(w),ce.lightsStateVersion=Qe,ce.needsLights&&(nt.ambientLightColor.value=ue.state.ambient,nt.lightProbe.value=ue.state.probe,nt.directionalLights.value=ue.state.directional,nt.directionalLightShadows.value=ue.state.directionalShadow,nt.spotLights.value=ue.state.spot,nt.spotLightShadows.value=ue.state.spotShadow,nt.rectAreaLights.value=ue.state.rectArea,nt.ltc_1.value=ue.state.rectAreaLTC1,nt.ltc_2.value=ue.state.rectAreaLTC2,nt.pointLights.value=ue.state.point,nt.pointLightShadows.value=ue.state.pointShadow,nt.hemisphereLights.value=ue.state.hemi,nt.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,nt.spotLightMatrix.value=ue.state.spotLightMatrix,nt.spotLightMap.value=ue.state.spotLightMap,nt.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=P.state.lightProbeGridArray.length>0,ce.currentProgram=gt,ce.uniformsList=null,gt}function da(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function ha(w,j){const de=Y.get(w);de.outputColorSpace=j.outputColorSpace,de.batching=j.batching,de.batchingColor=j.batchingColor,de.instancing=j.instancing,de.instancingColor=j.instancingColor,de.instancingMorph=j.instancingMorph,de.skinning=j.skinning,de.morphTargets=j.morphTargets,de.morphNormals=j.morphNormals,de.morphColors=j.morphColors,de.morphTargetsCount=j.morphTargetsCount,de.numClippingPlanes=j.numClippingPlanes,de.numIntersection=j.numClipIntersection,de.vertexAlphas=j.vertexAlphas,de.vertexTangents=j.vertexTangents,de.toneMapping=j.toneMapping}function Ps(w,j){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(j.matrixWorld);for(let de=0,ce=w.length;de<ce;de++){const ue=w[de];if(ue.texture!==null&&ue.boundingBox.containsPoint(S))return ue}return null}function Ya(w,j,de,ce,ue){j.isScene!==!0&&(j=Qt),Q.resetTextureUnits();const ke=j.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?j.environment:null,Ge=re===null?Z.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nt.workingColorSpace,$e=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Je=ve.get(ce.envMap||Qe,$e),st=ce.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,gt=!!de.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),nt=!!de.morphAttributes.position,Pt=!!de.morphAttributes.normal,pn=!!de.morphAttributes.color;let rn=oa;ce.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(rn=Z.toneMapping);const Vt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Xt=Vt!==void 0?Vt.length:0,Xe=Y.get(ce),Qn=P.state.lights;if(ut===!0&&(mt===!0||w!==Te)){const kt=w===Te&&ce.id===xe;qe.setState(ce,w,kt)}let Mt=!1;ce.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Qn.state.version||Xe.outputColorSpace!==Ge||ue.isBatchedMesh&&Xe.batching===!1||!ue.isBatchedMesh&&Xe.batching===!0||ue.isBatchedMesh&&Xe.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&Xe.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&Xe.instancing===!1||!ue.isInstancedMesh&&Xe.instancing===!0||ue.isSkinnedMesh&&Xe.skinning===!1||!ue.isSkinnedMesh&&Xe.skinning===!0||ue.isInstancedMesh&&Xe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Xe.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Xe.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Xe.instancingMorph===!1&&ue.morphTexture!==null||Xe.envMap!==Je||ce.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==qe.numPlanes||Xe.numIntersection!==qe.numIntersection)||Xe.vertexAlphas!==st||Xe.vertexTangents!==gt||Xe.morphTargets!==nt||Xe.morphNormals!==Pt||Xe.morphColors!==pn||Xe.toneMapping!==rn||Xe.morphTargetsCount!==Xt||!!Xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Xe.__version=ce.version);let Ln=Xe.currentProgram;Mt===!0&&(Ln=Wa(ce,j,ue),J&&ce.isNodeMaterial&&J.onUpdateProgram(ce,Ln,Xe));let pi=!1,Hi=!1,mi=!1;const Wt=Ln.getUniforms(),mn=Xe.uniforms;if(_.useProgram(Ln.program)&&(pi=!0,Hi=!0,mi=!0),ce.id!==xe&&(xe=ce.id,Hi=!0),Xe.needsLights){const kt=Ps(P.state.lightProbeGridArray,ue);Xe.lightProbeGrid!==kt&&(Xe.lightProbeGrid=kt,Hi=!0)}if(pi||Te!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Wt.setValue(K,"projectionMatrix",w.projectionMatrix),Wt.setValue(K,"viewMatrix",w.matrixWorldInverse);const Ji=Wt.map.cameraPosition;Ji!==void 0&&Ji.setValue(K,an.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Wt.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Wt.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),Te!==w&&(Te=w,Hi=!0,mi=!0)}if(Xe.needsLights&&(Qn.state.directionalShadowMap.length>0&&Wt.setValue(K,"directionalShadowMap",Qn.state.directionalShadowMap,Q),Qn.state.spotShadowMap.length>0&&Wt.setValue(K,"spotShadowMap",Qn.state.spotShadowMap,Q),Qn.state.pointShadowMap.length>0&&Wt.setValue(K,"pointShadowMap",Qn.state.pointShadowMap,Q)),ue.isSkinnedMesh){Wt.setOptional(K,ue,"bindMatrix"),Wt.setOptional(K,ue,"bindMatrixInverse");const kt=ue.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Wt.setValue(K,"boneTexture",kt.boneTexture,Q))}ue.isBatchedMesh&&(Wt.setOptional(K,ue,"batchingTexture"),Wt.setValue(K,"batchingTexture",ue._matricesTexture,Q),Wt.setOptional(K,ue,"batchingIdTexture"),Wt.setValue(K,"batchingIdTexture",ue._indirectTexture,Q),Wt.setOptional(K,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Wt.setValue(K,"batchingColorTexture",ue._colorsTexture,Q));const Gi=de.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&W.update(ue,de,Ln),(Hi||Xe.receiveShadow!==ue.receiveShadow)&&(Xe.receiveShadow=ue.receiveShadow,Wt.setValue(K,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=CR()),Hi){if(Wt.setValue(K,"toneMappingExposure",Z.toneMappingExposure),Xe.needsLights&&An(mn,mi),ke&&ce.fog===!0&&De.refreshFogUniforms(mn,ke),De.refreshMaterialUniforms(mn,ce,be,Ce,P.state.transmissionRenderTarget[w.id]),Xe.needsLights&&Xe.lightProbeGrid){const kt=Xe.lightProbeGrid;mn.probesSH.value=kt.texture,mn.probesMin.value.copy(kt.boundingBox.min),mn.probesMax.value.copy(kt.boundingBox.max),mn.probesResolution.value.copy(kt.resolution)}bu.upload(K,da(Xe),mn,Q)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(bu.upload(K,da(Xe),mn,Q),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Wt.setValue(K,"center",ue.center),Wt.setValue(K,"modelViewMatrix",ue.modelViewMatrix),Wt.setValue(K,"normalMatrix",ue.normalMatrix),Wt.setValue(K,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const kt=ce.uniformsGroups;for(let Ji=0,qa=kt.length;Ji<qa;Ji++){const Is=kt[Ji];we.update(Is,Ln),we.bind(Is,Ln)}}return Ln}function An(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function zo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(w,j,de){const ce=Y.get(w);ce.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),Y.get(w.texture).__webglTexture=j,Y.get(w.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:de,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const de=Y.get(w);de.__webglFramebuffer=j,de.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,de=0){re=w,B=j,X=de;let ce=null,ue=!1,ke=!1;if(w){const Ge=Y.get(w);if(Ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(K.FRAMEBUFFER,Ge.__webglFramebuffer),z.copy(w.viewport),te.copy(w.scissor),Re=w.scissorTest,_.viewport(z),_.scissor(te),_.setScissorTest(Re),xe=-1;return}else if(Ge.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Ge.__hasExternalTextures)Q.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ge.__boundDepthTexture!==st){if(st!==null&&Y.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ke=!0);const Je=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?ce=Je[j][de]:ce=Je[j],ue=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?ce=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?ce=Je[de]:ce=Je,z.copy(w.viewport),te.copy(w.scissor),Re=w.scissorTest}else z.copy(Ye).multiplyScalar(be).floor(),te.copy(Ct).multiplyScalar(be).floor(),Re=ze;if(de!==0&&(ce=me),_.bindFramebuffer(K.FRAMEBUFFER,ce)&&_.drawBuffers(w,ce),_.viewport(z),_.scissor(te),_.setScissorTest(Re),ue){const Ge=Y.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,de)}else if(ke){const Ge=j;for(let $e=0;$e<w.textures.length;$e++){const Je=Y.get(w.textures[$e]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+$e,Je.__webglTexture,de,Ge)}}else if(w!==null&&de!==0){const Ge=Y.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ge.__webglTexture,de)}xe=-1},this.readRenderTargetPixels=function(w,j,de,ce,ue,ke,Qe,Ge=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e){_.bindFramebuffer(K.FRAMEBUFFER,$e);try{const Je=w.textures[Ge],st=Je.format,gt=Je.type;if(w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ge),!C.textureFormatReadable(st)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(gt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ce&&de>=0&&de<=w.height-ue&&K.readPixels(j,de,ce,ue,Ie.convert(st),Ie.convert(gt),ke)}finally{const Je=re!==null?Y.get(re).__webglFramebuffer:null;_.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,j,de,ce,ue,ke,Qe,Ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e)if(j>=0&&j<=w.width-ce&&de>=0&&de<=w.height-ue){_.bindFramebuffer(K.FRAMEBUFFER,$e);const Je=w.textures[Ge],st=Je.format,gt=Je.type;if(w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ge),!C.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,nt),K.bufferData(K.PIXEL_PACK_BUFFER,ke.byteLength,K.STREAM_READ),K.readPixels(j,de,ce,ue,Ie.convert(st),Ie.convert(gt),0);const Pt=re!==null?Y.get(re).__webglFramebuffer:null;_.bindFramebuffer(K.FRAMEBUFFER,Pt);const pn=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await CE(K,pn,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,nt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ke),K.deleteBuffer(nt),K.deleteSync(pn),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,de=0){const ce=Math.pow(2,-de),ue=Math.floor(w.image.width*ce),ke=Math.floor(w.image.height*ce),Qe=j!==null?j.x:0,Ge=j!==null?j.y:0;Q.setTexture2D(w,0),K.copyTexSubImage2D(K.TEXTURE_2D,de,0,0,Qe,Ge,ue,ke),_.unbindTexture()},this.copyTextureToTexture=function(w,j,de=null,ce=null,ue=0,ke=0){let Qe,Ge,$e,Je,st,gt,nt,Pt,pn;const rn=w.isCompressedTexture?w.mipmaps[ke]:w.image;if(de!==null)Qe=de.max.x-de.min.x,Ge=de.max.y-de.min.y,$e=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,st=de.min.y,gt=de.isBox3?de.min.z:0;else{const mn=Math.pow(2,-ue);Qe=Math.floor(rn.width*mn),Ge=Math.floor(rn.height*mn),w.isDataArrayTexture?$e=rn.depth:w.isData3DTexture?$e=Math.floor(rn.depth*mn):$e=1,Je=0,st=0,gt=0}ce!==null?(nt=ce.x,Pt=ce.y,pn=ce.z):(nt=0,Pt=0,pn=0);const Vt=Ie.convert(j.format),Xt=Ie.convert(j.type);let Xe;j.isData3DTexture?(Q.setTexture3D(j,0),Xe=K.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Q.setTexture2DArray(j,0),Xe=K.TEXTURE_2D_ARRAY):(Q.setTexture2D(j,0),Xe=K.TEXTURE_2D),_.activeTexture(K.TEXTURE0),_.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,j.flipY),_.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),_.pixelStorei(K.UNPACK_ALIGNMENT,j.unpackAlignment);const Qn=_.getParameter(K.UNPACK_ROW_LENGTH),Mt=_.getParameter(K.UNPACK_IMAGE_HEIGHT),Ln=_.getParameter(K.UNPACK_SKIP_PIXELS),pi=_.getParameter(K.UNPACK_SKIP_ROWS),Hi=_.getParameter(K.UNPACK_SKIP_IMAGES);_.pixelStorei(K.UNPACK_ROW_LENGTH,rn.width),_.pixelStorei(K.UNPACK_IMAGE_HEIGHT,rn.height),_.pixelStorei(K.UNPACK_SKIP_PIXELS,Je),_.pixelStorei(K.UNPACK_SKIP_ROWS,st),_.pixelStorei(K.UNPACK_SKIP_IMAGES,gt);const mi=w.isDataArrayTexture||w.isData3DTexture,Wt=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const mn=Y.get(w),Gi=Y.get(j),kt=Y.get(mn.__renderTarget),Ji=Y.get(Gi.__renderTarget);_.bindFramebuffer(K.READ_FRAMEBUFFER,kt.__webglFramebuffer),_.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let qa=0;qa<$e;qa++)mi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Y.get(w).__webglTexture,ue,gt+qa),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Y.get(j).__webglTexture,ke,pn+qa)),K.blitFramebuffer(Je,st,Qe,Ge,nt,Pt,Qe,Ge,K.DEPTH_BUFFER_BIT,K.NEAREST);_.bindFramebuffer(K.READ_FRAMEBUFFER,null),_.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ue!==0||w.isRenderTargetTexture||Y.has(w)){const mn=Y.get(w),Gi=Y.get(j);_.bindFramebuffer(K.READ_FRAMEBUFFER,pe),_.bindFramebuffer(K.DRAW_FRAMEBUFFER,ie);for(let kt=0;kt<$e;kt++)mi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,mn.__webglTexture,ue,gt+kt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,mn.__webglTexture,ue),Wt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gi.__webglTexture,ke,pn+kt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gi.__webglTexture,ke),ue!==0?K.blitFramebuffer(Je,st,Qe,Ge,nt,Pt,Qe,Ge,K.COLOR_BUFFER_BIT,K.NEAREST):Wt?K.copyTexSubImage3D(Xe,ke,nt,Pt,pn+kt,Je,st,Qe,Ge):K.copyTexSubImage2D(Xe,ke,nt,Pt,Je,st,Qe,Ge);_.bindFramebuffer(K.READ_FRAMEBUFFER,null),_.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Wt?w.isDataTexture||w.isData3DTexture?K.texSubImage3D(Xe,ke,nt,Pt,pn,Qe,Ge,$e,Vt,Xt,rn.data):j.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,ke,nt,Pt,pn,Qe,Ge,$e,Vt,rn.data):K.texSubImage3D(Xe,ke,nt,Pt,pn,Qe,Ge,$e,Vt,Xt,rn):w.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ke,nt,Pt,Qe,Ge,Vt,Xt,rn.data):w.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ke,nt,Pt,rn.width,rn.height,Vt,rn.data):K.texSubImage2D(K.TEXTURE_2D,ke,nt,Pt,Qe,Ge,Vt,Xt,rn);_.pixelStorei(K.UNPACK_ROW_LENGTH,Qn),_.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Mt),_.pixelStorei(K.UNPACK_SKIP_PIXELS,Ln),_.pixelStorei(K.UNPACK_SKIP_ROWS,pi),_.pixelStorei(K.UNPACK_SKIP_IMAGES,Hi),ke===0&&j.generateMipmaps&&K.generateMipmap(Xe),_.unbindTexture()},this.initRenderTarget=function(w){Y.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){B=0,X=0,re=null,_.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}const uy={type:"change"},om={type:"start"},tx={type:"end"},_u=new im,fy=new Es,DR=Math.cos(70*Ap.DEG2RAD),Pn=new ee,fi=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class NR extends Lb{constructor(e,n=null){super(e,n),this.state=tn.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ul.ROTATE,MIDDLE:ul.DOLLY,RIGHT:ul.PAN},this.touches={ONE:ll.ROTATE,TWO:ll.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new Cs,this._lastTargetPosition=new ee,this._quat=new Cs().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bv,this._sphericalDelta=new Bv,this._scale=1,this._panOffset=new ee,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new ee,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LR.bind(this),this._onPointerDown=UR.bind(this),this._onPointerUp=OR.bind(this),this._onContextMenu=GR.bind(this),this._onMouseWheel=zR.bind(this),this._onKeyDown=BR.bind(this),this._onTouchStart=FR.bind(this),this._onTouchMove=HR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=IR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=VR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uy),this.update(),this.state=tn.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Pn.copy(n).sub(this.target),Pn.applyQuaternion(this._quat),this._spherical.setFromVector3(Pn),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=fi:r>Math.PI&&(r-=fi),o<-Math.PI?o+=fi:o>Math.PI&&(o-=fi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Pn.setFromSpherical(this._spherical),Pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const m=Pn.length();f=this._clampDistance(m*this._scale);const p=m-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const m=new ee(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const h=new ee(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(m),this.object.updateMatrixWorld(),f=Pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(_u.origin.copy(this.object.position),_u.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_u.direction))<DR?this.object.lookAt(this.target):(fy.setFromNormalAndCoplanarPoint(this.object.up,this.target),_u.intersectPlane(fy,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(uy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Pn.setFromMatrixColumn(n,0),Pn.multiplyScalar(-e),this._panOffset.add(Pn)}_panUp(e,n){this.screenSpacePanning===!0?Pn.setFromMatrixColumn(n,1):(Pn.setFromMatrixColumn(n,0),Pn.crossVectors(this.object.up,Pn)),Pn.multiplyScalar(e),this._panOffset.add(Pn)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Pn.copy(o).sub(this.target);let c=Pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=n-r.top,f=r.width,m=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,m=(e.pageY+n.y)*.5;this._updateZoomParameters(f,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new lt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function UR(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function LR(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function OR(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tx),this.state=tn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function PR(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ul.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=tn.DOLLY;break;case ul.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}break;case ul.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(om)}function IR(a){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function zR(a){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(a.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(tx))}function BR(a){this.enabled!==!1&&this._handleKeyDown(a)}function FR(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case ll.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=tn.TOUCH_ROTATE;break;case ll.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case ll.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=tn.TOUCH_DOLLY_PAN;break;case ll.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(om)}function HR(a){switch(this._trackPointer(a),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=tn.NONE}}function GR(a){this.enabled!==!1&&a.preventDefault()}function kR(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VR(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xo=new ee;function zi(a,e,n,r,o,c){const f=2*Math.PI*o/4,m=Math.max(c-2*o,0),p=Math.PI/4;xo.copy(e),xo[r]=0,xo.normalize();const h=.5*f/(f+m),g=1-xo.angleTo(a)/p;return Math.sign(xo[n])===1?g*h:m/(f+m)+h+h*(1-g)}class cm extends Ds{constructor(e=1,n=1,r=1,o=2,c=.1){const f=o*2+1;if(c=Math.min(e/2,n/2,r/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:r,segments:o,radius:c},f===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const p=new ee,h=new ee,g=new ee(e,n,r).divideScalar(2).subScalar(c),M=this.attributes.position.array,v=this.attributes.normal.array,E=this.attributes.uv.array,R=M.length/6,N=new ee,T=.5/f;for(let x=0,O=0;x<M.length;x+=3,O+=2)switch(p.fromArray(M,x),h.copy(p),h.x-=Math.sign(h.x)*T,h.y-=Math.sign(h.y)*T,h.z-=Math.sign(h.z)*T,h.normalize(),M[x+0]=g.x*Math.sign(p.x)+h.x*c,M[x+1]=g.y*Math.sign(p.y)+h.y*c,M[x+2]=g.z*Math.sign(p.z)+h.z*c,v[x+0]=h.x,v[x+1]=h.y,v[x+2]=h.z,Math.floor(x/R)){case 0:N.set(1,0,0),E[O+0]=zi(N,h,"z","y",c,r),E[O+1]=1-zi(N,h,"y","z",c,n);break;case 1:N.set(-1,0,0),E[O+0]=1-zi(N,h,"z","y",c,r),E[O+1]=1-zi(N,h,"y","z",c,n);break;case 2:N.set(0,1,0),E[O+0]=1-zi(N,h,"x","z",c,e),E[O+1]=zi(N,h,"z","x",c,r);break;case 3:N.set(0,-1,0),E[O+0]=1-zi(N,h,"x","z",c,e),E[O+1]=1-zi(N,h,"z","x",c,r);break;case 4:N.set(0,0,1),E[O+0]=1-zi(N,h,"x","y",c,e),E[O+1]=1-zi(N,h,"y","x",c,n);break;case 5:N.set(0,0,-1),E[O+0]=zi(N,h,"x","y",c,e),E[O+1]=1-zi(N,h,"y","x",c,n);break}}static fromJSON(e){return new cm(e.width,e.height,e.depth,e.segments,e.radius)}}const Uo="city-tycoon-v1",Dp="city-tycoon-manual-v1",nx=720*60*60*1e3,XR=a=>a===void 0||Array.isArray(a)&&a.length<=13&&a.every(e=>typeof e=="string"),WR=(a,e)=>a==null||a&&Number.isInteger(a.sourceId)&&a.sourceId>=0&&a.sourceId<e&&Number.isInteger(a.targetId)&&a.targetId>=0&&a.targetId<e&&typeof a.cardId=="string"&&(a.targetPosition===null||a.targetPosition===void 0||Number.isInteger(a.targetPosition)),YR=(a,e,n)=>a&&a.id===e&&typeof a.name=="string"&&Number.isFinite(a.cash)&&a.cash>=0&&Number.isInteger(a.pos)&&a.pos>=0&&a.pos<32&&[0,1].includes(a.jail)&&typeof a.bankrupt=="boolean"&&(a.diceCount===void 0||[1,2].includes(a.diceCount))&&XR(a.skillHand)&&(a.skillUsedThisTurn===void 0||typeof a.skillUsedThisTurn=="boolean")&&(a.slowTurns===void 0||Number.isInteger(a.slowTurns)&&a.slowTurns>=0)&&(a.rentShield===void 0||a.rentShield===0||a.rentShield===1)&&(a.rentMultiplier===void 0||a.rentMultiplier===1||a.rentMultiplier===2),qR=(a,e)=>a&&typeof a=="object"&&!Array.isArray(a)&&Object.entries(a).every(([n,r])=>Number.isInteger(+n)&&+n>0&&+n<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+n)&&r&&Number.isInteger(r.owner)&&r.owner>=0&&r.owner<e&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5);function ku(a){var e;return!((a==null?void 0:a.version)===1&&Array.isArray(a.players)&&a.players.length>=2&&a.players.length<=4&&a.players.every((n,r)=>YR(n,r,a.players.length)))||!qR(a.lots,a.players.length)||!Number.isInteger(a.turn)||a.turn<0||a.turn>=a.players.length||!Number.isInteger(a.round)||a.round<1||!(a.maxRounds===void 0||a.maxRounds===null||Number.isInteger(a.maxRounds)&&a.maxRounds>=1)||!(a.maxRounds===void 0||a.maxRounds===null||a.round<=a.maxRounds+1)||!(a.inflationRate===void 0||Number.isInteger(a.inflationRate)&&a.inflationRate>=0&&a.inflationRate<=10)||!(a.priceIndex===void 0||Number.isFinite(a.priceIndex)&&a.priceIndex>=1&&a.priceIndex<=10)||!["ready","moving","decision","end","finished"].includes(a.stage)||!Array.isArray(a.dice)||![1,2].includes(a.dice.length)||!a.dice.every(n=>Number.isInteger(n)&&n>=1&&n<=6)||!Number.isInteger(a.remaining)||a.remaining<0||a.remaining>12||a.stage==="moving"&&!(a.remaining>0&&Number.isInteger(a.eventIndex)&&a.eventIndex>=0&&a.eventIndex<8)||!Array.isArray(a.log)||!a.log.every(n=>n&&typeof n.text=="string"&&typeof n.kind=="string")||typeof a.notice!="string"||!(a.event===null||a.event&&typeof a.event.title=="string"&&(a.event.amount===void 0||Number.isFinite(a.event.amount)))||!(a.skillDeck===void 0||Array.isArray(a.skillDeck)&&a.skillDeck.every(n=>typeof n=="string"))||!(a.skillDiscard===void 0||Array.isArray(a.skillDiscard)&&a.skillDiscard.every(n=>typeof n=="string"))||a.skillOverflow!==void 0&&!(a.skillOverflow===null||Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)&&a.skillOverflow.playerId>=0&&a.skillOverflow.playerId<a.players.length)||!WR(a.pendingSkill,a.players.length)||a.limitBuildings!==void 0&&typeof a.limitBuildings!="boolean"||a.stage==="finished"&&!(Number.isInteger(a.winner)&&a.winner>=0&&a.winner<a.players.length)||a.bank!==void 0&&!(Number.isInteger(a.bank.houses)&&a.bank.houses>=0&&Number.isInteger(a.bank.hotels)&&a.bank.hotels>=0)?!1:(a.buildAvailable===void 0||typeof a.buildAvailable=="boolean")&&(a.buildUsed===void 0||typeof a.buildUsed=="boolean")}const Np=(a,e)=>a&&Number.isFinite(a.savedAt)&&a.savedAt<=e&&e-a.savedAt<nx&&ku(a.game);function Lo(a=localStorage,e=Date.now()){const n=a.getItem(Dp),r=n?JSON.parse(n):[];if(!Array.isArray(r))throw new Error("存檔清單格式損壞。");const o=r.filter(f=>Np(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,m)=>m.savedAt-f.savedAt).slice(0,10);JSON.stringify(o)!==n&&a.setItem(Dp,JSON.stringify(o));const c=a.getItem(Uo);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!Np(f,e))&&a.removeItem(Uo)}return o}function ZR(a,e,n=!1,r=localStorage,o=Date.now()){if(!ku(a))throw new Error("遊戲狀態無法儲存。");const c=Lo(r,o);if(c.length>=10&&!n)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const m=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${a.round}`,savedAt:o,game:structuredClone(a)},...c].slice(0,10);return r.setItem(Dp,JSON.stringify(m)),m}function KR(a,e=localStorage,n=Date.now()){const r=Lo(e,n).find(o=>o.id===a);if(!r)throw new Error("存檔已過期或不存在。");return structuredClone(r.game)}function Up(a,e=localStorage,n=Date.now()){e.setItem(Uo,JSON.stringify({savedAt:n,game:a}))}function dy(a=localStorage,e=Date.now()){const n=a.getItem(Uo);if(!n)return null;const r=JSON.parse(n);return ku(r)?(Up(r,a,e),r):Np(r,e)?r.game:(a.removeItem(Uo),null)}const Lh={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]},skillUse:{mood:"proud",label:"出牌",emoji:"✨",priority:50,messages:["技能卡啟動！","這張牌用得正是時候！","城市局勢，照我的計畫走！","效果準備生效！","漂亮的一手牌！"]},skillTarget:{mood:"surprised",label:"中招",emoji:"⚡",priority:55,messages:["等等，這張牌是對我的？","局勢突然變了！","這招來得太快了吧！","我的計畫被打亂了！","需要想辦法應對！"]},skillCounter:{mood:"proud",label:"反制",emoji:"🛡️",priority:65,messages:["擋下來了！","這張反制卡沒有浪費！","想算計我，還早得很！","護盾成功！","漂亮化解危機！"]},skillReflect:{mood:"proud",label:"反彈",emoji:"↩️",priority:70,messages:["原路奉還！","這招現在回到你身上！","反彈成功！","攻擊者變成自己了！","這就是出牌時機！"]}};function Ai(a,{category:e,summary:n,participants:r}){const o=Lh[e];if(!o||!(r!=null&&r.length))return;a.emotionSequence=(a.emotionSequence||0)+1;const c=a.emotionSequence,f=r.map(({playerId:m,amountDelta:p,category:h})=>{const g=Lh[h]||o;return{playerId:m,mood:g.mood,moodLabel:g.label,emoji:g.emoji,amountDelta:p,message:g.messages[(c+m)%g.messages.length]}});a.emotionEvents||(a.emotionEvents=[]),a.emotionEvents.push({id:c,category:e,summary:n,priority:Math.max(o.priority,...r.map(({category:m})=>{var p;return((p=Lh[m])==null?void 0:p.priority)||0})),players:f})}const qn=["#61ac78","#62a6da","#e7b942","#de809a"],QR=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],JR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],Ht=JR.map((a,e)=>{const n={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},r=Math.floor(e/4);return{id:e,name:a,type:n[e]||"property",group:r,color:QR[r],price:1e3+r*300+e%4*100}}),xt=a=>"$"+a.toLocaleString("en-US"),um=1,ix=5,jR=10,ax=10,Zn=(a,e,n=Math.round)=>n(e*((a==null?void 0:a.priceIndex)??1)),ol=(a,e)=>Zn(a,e.price),yl=(a,e)=>Zn(e,a.price*.6),$R=40,Ou=3,cl=[{id:"trap",name:"陷害卡",type:"control",timing:"active",icon:"⛓️",summary:"指定玩家進入監獄",target:"player"},{id:"slow",name:"龜速卡",type:"control",timing:"active",icon:"🐌",summary:"目標 3 回合最多走 1 格",target:"player"},{id:"teleport",name:"傳送卡",type:"movement",timing:"active",icon:"✦",summary:"將玩家移到合法位置",target:"player"},{id:"get-out",name:"出獄卡",type:"utility",timing:"active",icon:"🔓",summary:"解除自己的監獄狀態"},{id:"rent-shield",name:"免租卡",type:"defense",timing:"active",icon:"🛡️",summary:"下一次租金免除"},{id:"rent-double",name:"租金加倍卡",type:"money",timing:"active",icon:"×2",summary:"下一次收租提高為 2 倍"},{id:"position-swap",name:"位置交換卡",type:"movement",timing:"active",icon:"⇄",summary:"交換兩名玩家位置",target:"player"},{id:"birthday",name:"生日派對卡",type:"money",timing:"active",icon:"🎂",summary:"其他玩家各支付一筆錢"},{id:"subsidy",name:"城市補助卡",type:"money",timing:"active",icon:"🪙",summary:"從銀行獲得小額補助"},{id:"counter",name:"反制卡",type:"defense",timing:"reaction",icon:"✋",summary:"取消作用在自己的技能"},{id:"reflect",name:"反彈卡",type:"defense",timing:"reaction",icon:"↩",summary:"將單一指定技能反彈"},{id:"redraw",name:"幸運重抽卡",type:"utility",timing:"active",icon:"⟳",summary:"放棄手牌並重新抽卡"},{id:"land-swap",name:"換地卡",type:"control",timing:"active",icon:"🏠",summary:"交換兩塊地產所有權",target:"land"}],As=cl.map(a=>a.id),Vu=a=>cl.find(e=>e.id===a)||null,Tu=Ht.filter(a=>a.type!=="gojail").map(a=>a.id),sx=a=>a===null?null:Number.isInteger(Number(a))&&Number(a)>=1?Number(a):$R,fm=a=>Math.max(0,Math.min(jR,Number.isFinite(Number(a))?Math.round(Number(a)):um)),e3=a=>Math.min(ix,fm(a)),rx=a=>a!==!1,Pu={houses:32,hotels:12},dm=a=>{const e=[...a];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},t3=a=>{let e=0,n=0;for(const r of Object.values(a.lots||{}))r.level===5?n++:e+=Math.max(0,Math.min(4,r.level||0));return{houses:Math.max(0,Pu.houses-e),hotels:Math.max(0,Pu.hotels-n)}},Ns=a=>a.bank&&Number.isInteger(a.bank.houses)&&Number.isInteger(a.bank.hotels)?a.bank:t3(a),n3=a=>Array.isArray(a)?a.filter(e=>As.includes(e)).slice(0,As.length):[],i3=a=>a&&Number.isInteger(a.sourceId)&&Number.isInteger(a.targetId)&&As.includes(a.cardId)?{sourceId:a.sourceId,targetId:a.targetId,cardId:a.cardId,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null}:null,a3=a=>{var e;return{...a,limitBuildings:rx(a.limitBuildings),maxRounds:sx(a.maxRounds),inflationRate:fm(a.inflationRate??0),priceIndex:Math.max(1,Math.min(ax,Number.isFinite(a.priceIndex)?a.priceIndex:1)),players:a.players.map((n,r)=>({...n,diceCount:n.diceCount??2,color:n.color||qn[r],human:n.human===void 0?r===0:!!n.human,skillHand:n3(n.skillHand),skillUsedThisTurn:n.skillUsedThisTurn===!0,slowTurns:Number.isInteger(n.slowTurns)&&n.slowTurns>0?n.slowTurns:0,rentShield:n.rentShield===1?1:0,rentMultiplier:n.rentMultiplier===2?2:1})),skillDeck:Array.isArray(a.skillDeck)?a.skillDeck.filter(n=>As.includes(n)):dm(As),skillDiscard:Array.isArray(a.skillDiscard)?a.skillDiscard.filter(n=>As.includes(n)):[],skillOverflow:Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)?{playerId:a.skillOverflow.playerId}:null,pendingSkill:i3(a.pendingSkill),bank:{...Ns(a)},buildAvailable:a.buildAvailable===!0,buildUsed:a.buildUsed===!0,emotionEvents:[],emotionSequence:Number.isInteger(a.emotionSequence)?a.emotionSequence:0}},s3=[["你",qn[0],!0],["艾米",qn[1],!1],["小傑",qn[2],!1],["喵喵",qn[3],!1]];function lx(a={}){const e=Math.min(4,Math.max(2,Number(a.count)||4)),n=s3.slice(0,e).map(([o,c,f],m)=>{var h;const p=((h=a.players)==null?void 0:h[m])||{};return{id:m,diceCount:2,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():o,color:p.color||c,human:p.human===void 0?f:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1,skillHand:[],skillUsedThisTurn:!1,slowTurns:0,rentShield:0,rentMultiplier:1}}),r=e3(a.inflationRate??um);return{version:1,players:n,lots:{},skillDeck:dm(As),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...Pu},limitBuildings:rx(a.limitBuildings),turn:0,round:1,maxRounds:sx(a.maxRounds),inflationRate:r,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${r}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const Ft=(a,e,n="info")=>{a.notice=e,a.log.unshift({text:e,kind:n}),a.log=a.log.slice(0,40)},Ia=(a,e)=>Ht.filter(n=>{var r;return((r=a.lots[n.id])==null?void 0:r.owner)===e}),r3=(a,e,n)=>Ht.filter(r=>r.type==="property"&&r.group===e.group).every(r=>{var o;return((o=a.lots[r.id])==null?void 0:o.owner)===n}),Lp=(a,e)=>{let n=a.lots[e.id];return n?Zn(a,Math.round(e.price*.18)*(n.level?[1,3,6,10,15,22][n.level]:r3(a,e,n.owner)?2:1)):0},pl=(a,e)=>a.players[e].cash+Ia(a,e).reduce((n,r)=>n+Zn(a,r.price+(a.lots[r.id].level||0)*Math.round(r.price*.6)),0),Op=(a,e,n=a.turn)=>{const r=Ht[e],o=a.lots[e],c=Ns(a);return!r||r.type!=="property"||!o||o.owner!==n||a.turn!==n||a.stage!=="end"||a.selected!==e||!a.buildAvailable||a.buildUsed||o.level>=5||a.players[n].cash<yl(r,a)?!1:a.limitBuildings===!1||(o.level<4?c.houses>0:c.hotels>0)};function ox(a,e){const n=a.bank||Ns(a);e.level===5?n.hotels++:n.houses+=Math.max(0,Math.min(4,e.level||0)),a.bank=n}function cx(a){const e=a.players.filter(n=>!n.bankrupt);e.length===1&&(a.winner=e[0].id,a.stage="finished",Ft(a,`${e[0].name}成為城市大亨！`))}const Pp=new Set(["trap","slow","teleport","get-out","rent-shield","rent-double","position-swap","birthday","subsidy","redraw","land-swap"]);function ux(a,e,n="事件中，"){const r=a.players[e];if(!r||r.skillHand.length>=As.length)return null;!a.skillDeck.length&&a.skillDiscard.length&&(a.skillDeck=dm(a.skillDiscard),a.skillDiscard=[]);const o=a.skillDeck.shift();if(!o)return null;r.skillHand.push(o);const c=Vu(o);return r.skillHand.length>Ou&&(a.skillOverflow={playerId:e}),Ft(a,`${r.name}${n}獲得技能卡「${c.name}」。`,"skill"),c}function Iu(a,e,n){const r=e.skillHand.indexOf(n);return r<0?!1:(e.skillHand.splice(r,1),a.skillDiscard.push(n),!0)}function Ip(a,e){return Number.isInteger(e)&&e>=0&&e<a.players.length&&!a.players[e].bankrupt}function l3(a,e){return{counter:e.skillHand.includes("counter"),reflect:e.skillHand.includes("reflect")}}function zp(a,e,n,r,o,{reflected:c=!1}={}){if(e.id==="trap"&&(r.pos=8,r.jail=1),e.id==="slow"&&(r.slowTurns=3),e.id==="teleport"){const p=r.pos;r.pos=o.targetPosition,fx(a,r.pos,{playerId:r.id,flow:!1,drawSkill:!1}),Ft(a,`${r.name}由${n.name}使用傳送卡，從${Ht[p].name}移動至${Ht[r.pos].name}。`,"skill")}if(e.id==="get-out"&&(n.jail=0),e.id==="rent-shield"&&(n.rentShield=1),e.id==="rent-double"&&(n.rentMultiplier=2),e.id==="position-swap"&&([n.pos,r.pos]=[r.pos,n.pos]),e.id==="birthday"){const p=Zn(a,300);for(const h of a.players)h.id!==n.id&&!h.bankrupt&&Au(a,h.id,p,n.id,"skill")}if(e.id==="subsidy"){const p=Zn(a,800);n.cash+=p,Ai(a,{category:"windfall",summary:`${n.name}使用城市補助卡，獲得 ${xt(p)}。`,participants:[{playerId:n.id,amountDelta:p}]})}const f=e.target==="player"?`，目標為${r.name}`:e.target==="land"?`，交換${Ht[o.ownLotId].name}與${Ht[o.targetLotId].name}`:"",m=`${c?"反彈後，":""}${n.name}使用${e.name}${f}。`;if(Ft(a,m,"skill"),!c){const p=[{playerId:n.id,category:"skillUse"}];e.target==="player"&&r.id!==n.id&&p.push({playerId:r.id,category:"skillTarget"}),Ai(a,{category:"skillUse",summary:m,participants:p})}e.id==="land-swap"&&Ft(a,`${Ht[o.ownLotId].name}與${Ht[o.targetLotId].name}的所有權已交換。`,"skill")}function o3(a,e="pass"){const n=a.pendingSkill;if(!n)return!1;const r=a.players[n.sourceId],o=a.players[n.targetId],c=Vu(n.cardId);if(!r||!o||!c)return a.pendingSkill=null,!1;if(e==="counter"&&Iu(a,o,"counter")){a.pendingSkill=null;const f=`${o.name}使用反制卡，取消${r.name}的${c.name}。`;return Ft(a,f,"skill"),Ai(a,{category:"skillCounter",summary:f,participants:[{playerId:o.id,category:"skillCounter"},{playerId:r.id,category:"skillTarget"}]}),!0}if(e==="reflect"&&c.target==="player"&&Iu(a,o,"reflect")&&Ip(a,r.id)){a.pendingSkill=null,zp(a,c,r,r,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId},{reflected:!0});const f=`${o.name}使用反彈卡，將${c.name}反彈給${r.name}。`;return Ft(a,f,"skill"),Ai(a,{category:"skillReflect",summary:f,participants:[{playerId:o.id,category:"skillReflect"},{playerId:r.id,category:"skillTarget"}]}),!0}return e!=="pass"?!1:(a.pendingSkill=null,zp(a,c,r,o,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId}),!0)}function c3(a,e){var m,p;const n=a.players[a.turn],r=e.overflowUse===!0&&((m=a.skillOverflow)==null?void 0:m.playerId)===a.turn&&a.stage!=="finished";if(!(a.stage==="ready"&&!a.skillOverflow||r)||!(n!=null&&n.human)&&!n||n.bankrupt||n.skillUsedThisTurn||a.pendingSkill)return!1;const c=Vu(e.cardId);if(!c||c.timing!=="active"||!Pp.has(c.id)||!n.skillHand.includes(c.id))return!1;const f=Ip(a,e.targetId)?a.players[e.targetId]:null;if(c.target==="player"&&(!f||f.id===n.id)||c.id==="slow"&&f.slowTurns>0||c.id==="get-out"&&n.jail===0||c.id==="teleport"&&(!Number.isInteger(e.targetPosition)||!Tu.includes(e.targetPosition)))return!1;if(c.id==="land-swap"){const h=a.lots[e.ownLotId],g=a.lots[e.targetLotId];if(!h||!g||h.owner!==n.id||g.owner===n.id||!Ht[e.ownLotId]||!Ht[e.targetLotId]||Ht[e.ownLotId].type!=="property"||Ht[e.targetLotId].type!=="property"||!Ip(a,g.owner))return!1;[h.owner,g.owner]=[g.owner,h.owner]}if(Iu(a,n,c.id),n.skillUsedThisTurn=!0,((p=a.skillOverflow)==null?void 0:p.playerId)===n.id&&n.skillHand.length<=Ou&&(a.skillOverflow=null),c.target==="player"){const h=l3(a,f);if(h.counter||h.reflect)return a.pendingSkill={sourceId:n.id,targetId:f.id,cardId:c.id,targetPosition:Number.isInteger(e.targetPosition)?e.targetPosition:null,ownLotId:e.ownLotId,targetLotId:e.targetLotId},Ft(a,`${n.name}使用${c.name}，等待${f.name}回應。`,"skill"),!0}return zp(a,c,n,f||n,e),!0}function u3(a,e){var o,c;const n=(o=a.skillOverflow)==null?void 0:o.playerId;if(!Number.isInteger(n)||n<0||n>=a.players.length)return!1;const r=a.players[n];return r.skillHand.length<=Ou||!Iu(a,r,e.cardId)?!1:(r.skillHand.length<=Ou&&(a.skillOverflow=null),Ft(a,`${r.name}放棄技能卡「${((c=Vu(e.cardId))==null?void 0:c.name)||e.cardId}」。`,"skill"),!0)}function Au(a,e,n,r=null,o="tax"){let c=a.players[e],f=0;for(const p of Ia(a,e).sort((h,g)=>h.price-g.price)){if(c.cash>=n)break;const h=Zn(a,p.price+a.lots[p.id].level*Math.round(p.price*.6),g=>Math.floor(g*.5));c.cash+=h,f+=h,ox(a,a.lots[p.id]),delete a.lots[p.id],Ft(a,`${c.name}變賣${p.name}，回收 ${xt(h)}。`,"sell")}f>0&&Ai(a,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${xt(f)}。`,participants:[{playerId:e,amountDelta:f}]});const m=Math.min(c.cash,n);if(c.cash-=m,r!==null&&(a.players[r].cash+=m),m>0)if(r!==null){const p=a.players[r];Ai(a,{category:"rentPaid",summary:`${c.name}支付 ${xt(m)} 給${p.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-m},{playerId:r,category:"rentReceived",amountDelta:m}]})}else Ai(a,{category:o==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${xt(m)}。`,participants:[{playerId:e,amountDelta:-m}]});if(m<n){c.bankrupt=!0;const p=n-m;Ft(a,`${c.name}資金不足，宣告破產。`,"bankrupt"),Ai(a,{category:"bankruptcy",summary:`${c.name}無法支付 ${xt(p)}，宣告破產。`,participants:[{playerId:e,amountDelta:-p}]}),cx(a)}}function fx(a,e,n={}){const r=n.playerId??a.turn,o=n.flow!==!1,c=a.players[r],f=Ht[c.pos];if(o&&(a.selected=f.id,a.stage="end",a.buildAvailable=!1,a.buildUsed=!1),f.type==="property"){const m=a.lots[f.id];if(m)if(m.owner!==c.id){let p=Lp(a,f);const h=a.players[m.owner];h.rentMultiplier===2&&(p*=2,h.rentMultiplier=1),c.rentShield===1?(c.rentShield=0,Ft(a,`${c.name}使用免租卡，免除${f.name}的 ${xt(p)} 租金。`,"skill")):(Ft(a,`${c.name}在${f.name}支付 ${xt(p)} 租金給${h.name}。`,"rent"),Au(a,c.id,p,m.owner,"rent"))}else{a.buildAvailable=!0;const p=m.level===5?"已有旅館。":m.level===4?Ns(a).hotels?"可以升級為旅館。":"銀行旅館已用完。":Ns(a).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";Ft(a,`${c.name}回到自己的${f.name}，${p}`)}else{const p=ol(a,f);o&&(a.stage=c.cash>=p?"decision":"end"),Ft(a,o?`${c.name}抵達${f.name}，${c.cash>=p?"可以購買這塊地產。":"現金不足以購買。"}`:`${c.name}抵達${f.name}，未進行購買。`)}}else if(f.type==="tax"){const m=Zn(a,f.id===6?1200:1800);Ft(a,`${c.name}支付${f.name} ${xt(m)}。`,"tax"),Au(a,c.id,m,null,"tax")}else if(f.type==="gojail")c.pos=8,c.jail=1,Ft(a,`${c.name}前往監獄，下次回合暫停一次。`,"jail");else if(f.type==="chance"||f.type==="fund"){const m=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[p,h,g,M]=m[Math.abs(e||0)%m.length];if(M){const E=a.inflationRate;a.inflationRate=fm(E+M);const R=a.inflationRate-E,N=R===0?`通膨率維持 ${a.inflationRate}%（已達上限或下限）`:`通膨率${R>0?"提高":"降低"}至 ${a.inflationRate}%`;a.event={title:p,body:h,amount:0,kind:"inflation",inflationDelta:R,inflationRate:a.inflationRate},Ft(a,`${c.name}抽到「${p}」：${N}，新通膨率於下一輪影響物價。`,"inflation")}else{const E=Zn(a,g);a.event={title:p,body:h,amount:E},Ft(a,`${c.name}抽到「${p}」：${E>0?"獲得":"支付"} ${xt(Math.abs(E))}。`,"chance"),E>0?(c.cash+=E,Ai(a,{category:"windfall",summary:`${c.name}獲得 ${xt(E)}。`,participants:[{playerId:c.id,amountDelta:E}]})):Au(a,c.id,-E,null,"chance")}const v=n.drawSkill===!1?null:f.type==="chance"?ux(a,c.id,"機會事件中，"):null;v&&(a.event={...a.event,skillCardId:v.id,skillCardName:v.name})}else Ft(a,f.type==="start"?`${c.name}抵達起點。`:f.type==="park"?`${c.name}在城市公園休息，享受片刻悠閒。`:`${c.name}只是探訪監獄，自由通行。`);cx(a)}function f3(a,e){var o;if(e.type==="NEW")return lx(e.config);if(e.type==="LOAD")return ku(e.game)?a3(structuredClone(e.game)):a;const n=structuredClone(a),r=n.players[n.turn];switch(n.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(n.stage!=="ready"||!r.human||r.bankrupt||r.jail||![1,2].includes(e.count))return a;r.diceCount=e.count;break;case"ROLL":if(n.stage!=="ready"||r.bankrupt||n.pendingSkill)return a;if(r.jail){r.jail--,n.stage="end",Ft(n,`${r.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(r.diceCount??2)||!e.dice.every(p=>Number.isInteger(p)&&p>=1&&p<=6))return a;n.dice=[...e.dice];const c=e.dice.reduce((p,h)=>p+h,0),f=r.slowTurns>0;r.slowTurns=Math.max(0,r.slowTurns-(f?1:0)),n.remaining=f?Math.min(1,c):c,n.event=null,n.stage="moving",n.eventIndex=e.eventIndex,Ft(n,`${r.name}擲出 ${e.dice.join(" + ")}，前進 ${n.remaining} 格。${f?"龜速效果生效，本回合最多前進 1 格。":""}`,"dice");break;case"STEP":if(n.stage!=="moving")return a;if(r.pos=(r.pos+1)%32,r.pos===0){const p=Zn(n,2e3);r.cash+=p,Ft(n,`${r.name}通過起點，領取 ${xt(p)}。`,"salary"),Ai(n,{category:"salary",summary:`${r.name}經過起點，獲得 ${xt(p)}。`,participants:[{playerId:r.id,amountDelta:p}]})}n.remaining--;const m=Ht[r.pos].type==="fund"?ux(n,r.id,n.remaining===0?"抵達城市基金格，":"經過城市基金格，"):null;n.remaining===0&&(fx(n,n.eventIndex),m&&n.event&&(n.event={...n.event,skillCardId:m.id,skillCardName:m.name}));break;case"BUY":{if(n.stage!=="decision")return a;const p=Ht[r.pos],h=ol(n,p);if(n.lots[p.id]||r.cash<h)return a;r.cash-=h,n.lots[p.id]={owner:r.id,level:0},n.stage="end",Ft(n,`${r.name}購買了${p.name}，支付 ${xt(h)}。`,"buy"),Ai(n,{category:"purchase",summary:`${r.name}購買${p.name}，支付 ${xt(h)}。`,participants:[{playerId:r.id,amountDelta:-h}]});break}case"SKIP":if(n.stage!=="decision")return a;n.stage="end",Ft(n,`${r.name}暫不購買${Ht[r.pos].name}。`);break;case"BUILD":{if(!Op(n,e.id))return a;const p=Ht[e.id],h=n.lots[e.id],g=yl(p,n);n.bank=n.bank||Ns(n),r.cash-=g,h.level<4?(n.bank.houses--,h.level++,Ft(n,`${r.name}在${p.name}加蓋第 ${h.level} 間房屋，支付 ${xt(g)}。`,"build")):(n.bank.houses+=4,n.bank.hotels--,h.level=5,Ft(n,`${r.name}將${p.name}的 4 間房屋升級為旅館，支付 ${xt(g)}。`,"build")),Ai(n,{category:"construction",summary:`${r.name}支付 ${xt(g)} 建設地產。`,participants:[{playerId:r.id,amountDelta:-g}]}),n.buildAvailable=!1,n.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(n.stage)||((o=n.lots[e.id])==null?void 0:o.owner)!==r.id)return a;const p=Ht[e.id],h=n.lots[e.id],g=Zn(n,p.price+h.level*Math.round(p.price*.6),M=>Math.floor(M*.5));ox(n,h),r.cash+=g,delete n.lots[e.id],n.buildAvailable=!1,Ft(n,`${r.name}變賣${p.name}，回收 ${xt(g)}。`,"sell"),Ai(n,{category:"sale",summary:`${r.name}變賣${p.name}，回收 ${xt(g)}。`,participants:[{playerId:r.id,amountDelta:g}]});break}case"USE_SKILL_CARD":if(!c3(n,e))return a;break;case"RESPOND_SKILL":if(!n.pendingSkill||e.playerId!==n.pendingSkill.targetId||!["counter","reflect","pass"].includes(e.response)||!o3(n,e.response))return a;break;case"RESOLVE_SKILL_OVERFLOW":if(!u3(n,e))return a;break;case"NEXT":if(n.stage!=="end"||n.skillOverflow||n.pendingSkill)return a;{let p=n.turn;do if(p=(p+1)%n.players.length,p===0){n.round++;const h=n.priceIndex;n.priceIndex=Math.min(ax,n.priceIndex*(1+n.inflationRate/100)),n.priceIndex>h&&Ft(n,`新的一輪開始，物價指數升至 ${n.priceIndex.toFixed(2)}×。`,"inflation")}while(n.players[p].bankrupt);n.turn=p,n.players[p].skillUsedThisTurn=!1,n.event=null,n.stage="ready",n.selected=null,n.buildAvailable=!1,n.buildUsed=!1,n.maxRounds!==null&&n.round>n.maxRounds?(n.winner=n.players.filter(h=>!h.bankrupt).sort((h,g)=>pl(n,g.id)-pl(n,h.id))[0].id,n.stage="finished",Ft(n,`${n.maxRounds} 回合結束！${n.players[n.winner].name}以最高總資產獲勝。`)):Ft(n,`輪到${n.players[p].name}，準備擲骰子。`);break}default:return a}return n.limitBuildings===!1&&(n.bank={...Pu}),n}function vu(a){return a<=8?[-8+a*2,8]:a<=16?[8,8-(a-8)*2]:a<=24?[8-(a-16)*2,-8]:[-8,-8+(a-24)*2]}const d3=Ke.forwardRef(function({game:e,onSelect:n,onError:r,emotionAnchorRefs:o,emotionMoods:c,children:f},m){const p=Ke.useRef(),h=Ke.useRef(),g=Ke.useRef(e),M=Ke.useRef(n),v=Ke.useRef({});return g.current=e,M.current=n,v.current=c||{},Ke.useImperativeHandle(m,()=>({reset(){var E;(E=h.current)==null||E.reset()},zoom(E){const R=h.current;R&&(R.camera.position.sub(R.controls.target).multiplyScalar(E).clampLength(13,80).add(R.controls.target),R.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const E=h.current;E&&(E.camera.position.set(0,29,.01),E.controls.update())}}),[]),Ke.useEffect(()=>{let E=!1,R=()=>{};return(async()=>{var Lt;try{await Promise.race([((Lt=document.fonts)==null?void 0:Lt.ready)||Promise.resolve(),new Promise(_e=>setTimeout(_e,2e3))])}catch{}if(E)return;const T='"Noto Sans TC", "Microsoft JhengHei", sans-serif',x=p.current;let O;try{O=new wR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{r==null||r("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.shadowMap.enabled=!0,O.shadowMap.type=Eo,O.outputColorSpace=di,O.toneMapping=Vp,O.toneMappingExposure=.9,x.appendChild(O.domElement),O.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const I=new sb;I.background=new Tt("#eaf0e5"),I.fog=new tm("#eaf0e5",48,90);const S=new Bi(39,1,.1,120),L=new NR(S,O.domElement);L.enableDamping=!0,L.dampingFactor=.07,L.minDistance=13,L.maxDistance=80,L.maxPolarAngle=Math.PI*.485,L.minPolarAngle=.01,L.target.set(0,0,0),L.autoRotateSpeed=.65,L.enablePan=!0;const P=()=>{S.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/S.aspect)),L.target.set(0,0,0),L.autoRotate=!1,L.update()};P(),h.current={camera:S,controls:L,reset:P},I.add(new Ab("#fff9e9","#86967e",2.4));const F=new wb("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,I.add(F);const A=new Map,U=_e=>(A.has(_e)||A.set(_e,new Nv({color:_e,roughness:.82})),A.get(_e)),Z=new Map,H=(_e,C,_,k,Y,Q=0,ve=0,ge=0,$=0)=>{const ae=[C,_,k,$].join(",");Z.has(ae)||Z.set(ae,$?new cm(C,_,k,2,$):new Ds(C,_,k));const fe=new Un(Z.get(ae),U(Y));return fe.position.set(Q,ve,ge),fe.castShadow=!0,fe.receiveShadow=!0,_e.add(fe),fe},J=new rm(1,14,10),me=(_e,C,_,k,Y,Q,ve=Q,ge=Q)=>{const $=new Un(J,U(C));return $.position.set(_,k,Y),$.scale.set(Q,ve,ge),$.castShadow=!0,$.receiveShadow=!0,_e.add($),$},pe=(_e,C,_,k,Y,Q,ve,ge,$=24)=>{const ae=new Un(new Fu(C,_,k,$),U(Y));return ae.position.set(Q,ve,ge),ae.castShadow=!0,ae.receiveShadow=!0,_e.add(ae),ae},ie=new Un(new lr(200,200),U("#eaf0e5"));ie.rotation.x=-Math.PI/2,ie.position.y=-.67,ie.receiveShadow=!0,I.add(ie),pe(I,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),pe(I,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),H(I,18.55,.65,18.55,"#405d50",0,-.03,0,.2),H(I,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),H(I,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const B=[];function X(_e,C=512,_=512){const k=document.createElement("canvas");k.width=C,k.height=_;const Y=k.getContext("2d");_e(Y,C,_);const Q=new _b(k);return Q.colorSpace=di,Q.minFilter=Hn,Q.magFilter=Hn,Q.anisotropy=O.capabilities.getMaxAnisotropy(),B.push(Q),Q}const re={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},xe=[],Te=[],z=[],te=[],Re=new Map;function Pe(_e,C){const _=`${_e}:${C}`;if(!Re.has(_)){const k=X((Y,Q,ve)=>{Y.clearRect(0,0,Q,ve),Y.fillStyle=C,Y.beginPath(),Y.roundRect(8,8,Q-16,ve-16,24),Y.fill(),Y.strokeStyle="#fffaf0",Y.lineWidth=8,Y.stroke(),Y.fillStyle="#fffaf0",Y.beginPath(),Y.arc(Q/2,ve/2,43,0,Math.PI*2),Y.fill(),Y.fillStyle="#294237",Y.textAlign="center",Y.textBaseline="middle",Y.font="bold 72px Arial",Y.fillText(String(_e+1),Q/2,ve/2+3)},192,144);Re.set(_,new Hy({map:k,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Re.get(_)}for(const _e of Ht){const[C,_]=vu(_e.id),k=new za;k.position.set(C,.44,_),I.add(k);const Y=H(k,1.94,.14,1.94,"#fffaf0",0,0,0,.035);Y.userData.tile=_e.id,xe.push(Y),Te[_e.id]=Y;const Q=g.current.priceIndex||1,ve=(fe,De,Le,Ue)=>{fe.fillStyle="#fcf9f0",fe.fillRect(0,0,De,Le),_e.type==="property"&&(fe.fillStyle=_e.color,fe.fillRect(0,0,De,82)),fe.fillStyle="#294237",fe.textAlign="center",fe.font=`bold 76px ${T}`,fe.fillText(_e.name,De/2,_e.type==="property"?180:140),_e.type==="property"?(fe.font="60px Arial",fe.fillText(xt(Math.round(_e.price*Ue)),De/2,290),fe.fillStyle="#8c998e",fe.font="26px sans-serif",fe.fillText("CITY PROPERTY",De/2,410)):(fe.font="bold 135px Arial",fe.fillStyle=_e.type==="chance"?"#ba9270":"#648473",fe.fillText(re[_e.type],De/2,320),fe.fillStyle="#728375",fe.font=`30px ${T}`,fe.fillText(_e.type==="start"?`+ ${xt(Math.round(2e3*Ue))}`:_e.type==="tax"?"城市稅收":_e.type==="park"?"歇一會兒":_e.type==="chance"?"好運降臨":_e.type==="fund"?"城市生活":"JUST VISITING",De/2,420))},ge=X((fe,De,Le)=>ve(fe,De,Le,Q));(_e.type==="property"||_e.type==="start")&&te.push(fe=>{const De=ge.image.getContext("2d");ve(De,ge.image.width,ge.image.height,fe),ge.needsUpdate=!0});const $=new Un(new lr(1.89,1.89),new Ao({map:ge,toneMapped:!1}));$.rotation.x=-Math.PI/2,$.rotation.z=_e.id<8?0:_e.id<16?Math.PI/2:_e.id<24?Math.PI:-Math.PI/2,$.position.y=.076,k.add($);const ae=new za;ae.position.set(C,.58,_),ae.rotation.y=_e.id<8?0:_e.id<16?Math.PI/2:_e.id<24?Math.PI:-Math.PI/2,I.add(ae),z[_e.id]=ae}for(const _e of[-4.4,4.4]){H(I,.8,.025,13,"#d3d2bb",_e,.525,0),H(I,1.15,.018,13,"#f6f1df",_e,.513,0);for(let C=-6;C<=6;C+=.75)H(I,.035,.008,.29,"#faf6e8",_e,.543,C)}for(const _e of[-3.2,3.2]){H(I,13,.025,.8,"#d3d2bb",0,.525,_e),H(I,13,.018,1.15,"#f6f1df",0,.513,_e);for(let C=-6;C<=6;C+=.75)H(I,.29,.008,.035,"#faf6e8",C,.543,_e)}function Fe(_e,C,_=1){const k=new za;k.position.set(_e,.52,C),k.scale.setScalar(_),I.add(k),pe(k,.045,.075,.55,"#94785c",0,.28,0,7),me(k,"#8db578",0,.83,0,.29,.44,.29),me(k,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function se(_e,C,_,k,Y,Q,ve=!1){const ge=new za;ge.position.set(_e,.53,C),I.add(ge),H(ge,_+.18,.12,k+.18,"#ede9d5",0,.06,0,.04),H(ge,_,Y,k,Q,0,Y/2+.1,0,.035),H(ge,_+.1,.1,k+.1,"#fff4df",0,Y+.12,0,.02);for(let $=.45;$<Y-.1;$+=.42){for(let ae=-_/2+.22;ae<_/2-.08;ae+=.32)H(ge,.17,.23,.018,"#6d9097",ae,$,k/2+.01),H(ge,.17,.23,.018,"#6d9097",ae,$,-k/2-.01);for(let ae=-k/2+.22;ae<k/2-.08;ae+=.32)H(ge,.018,.23,.17,"#6d9097",_/2+.01,$,ae);H(ge,_+.025,.045,k+.025,"#ede9d8",0,$+.17,0)}if(H(ge,.24,.36,.024,"#496d68",0,.28,k/2+.02),ve){const $=new Un(new Ro(_*.81,.55,4),U("#c98468"));$.rotation.y=Math.PI/4,$.scale.z=k/_,$.position.y=Y+.42,$.castShadow=!0,ge.add($)}else H(ge,_*.7,.08,k*.7,"#a5b7ae",0,Y+.21,0),H(ge,.23,.2,.25,"#e9e4d2",_*.18,Y+.34,0)}se(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),se(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),se(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),se(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),se(5.6,-5,1.1,1.5,2.3,"#aac5bc"),se(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),se(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),se(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),se(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),se(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),se(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[_e,C]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])Fe(_e,C,1.05);for(let _e=0;_e<24;_e++){const C=_e*Math.PI*2/24;_e%3!==0&&Fe(Math.cos(C)*12.5,Math.sin(C)*12.5,.85+_e%3*.12)}H(I,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Ce=X((_e,C,_)=>{_e.clearRect(0,0,C,_),_e.textAlign="center",_e.fillStyle="#3d6850",_e.font="900 152px Arial",_e.fillText("CITY",C/2,148),_e.fillText("TYCOON",C/2,265),_e.font=`25px ${T}`,_e.fillStyle="#6d8468",_e.fillText("每一步，都是新可能。",C/2,338)},1024,420),be=new Un(new lr(6.2,2.54),new Nv({map:Ce,transparent:!0,depthWrite:!1}));be.rotation.x=-Math.PI/2,be.position.set(0,.58,0),I.add(be),pe(I,.75,.82,.12,"#ede7cf",0,.59,4.3),pe(I,.62,.62,.05,"#91c8ce",0,.675,4.3),pe(I,.18,.28,.5,"#dfebdf",0,.95,4.3),me(I,"#9fcfd2",0,1.3,4.3,.14),pe(I,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Be=[];for(let _e=0;_e<4;_e++){const C=new za;I.add(C),pe(C,.26,.3,.12,qn[_e],0,.08,0),me(C,qn[_e],0,.53,0,.23,.32,.18),me(C,"#f1d5b0",0,1,0,.225),me(C,qn[_e],0,1.12,-.015,.24,.14,.235),H(C,.44,.05,.15,qn[_e],0,1.1,.16,.025);for(const Y of[-.09,.09])me(C,"#273e34",Y,1.015,.198,.025),H(C,.13,.2,.19,"#3c5349",Y,.22,.025,.035),me(C,"#f1d5b0",Y*2.8,.51,0,.075,.15,.075);H(C,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),C.scale.setScalar(.95);const[_,k]=vu(0);C.position.set(_+(_e%2-.5)*.62,.59,k+(Math.floor(_e/2)-.5)*.62),C.traverse(Y=>{Y.material===U(qn[_e])&&(Y.userData.playerTint=!0)}),Be.push(C)}const it=new Un(new sm(.42,.5,40),new Ao({color:"#f4c65b",side:sa}));it.rotation.x=-Math.PI/2,I.add(it);const Ye=new Un(new Ds(1.98,.045,1.98),new Ao({color:"#edc768",transparent:!0,opacity:.6}));I.add(Ye),Ye.visible=!1;let Ct="",ze=Number.NaN,ot,ut=0,mt=performance.now();const nn=()=>{const _e=x.clientWidth,C=x.clientHeight;O.setSize(_e,C),S.aspect=_e/C,S.updateProjectionMatrix(),P()},an=new ResizeObserver(nn);an.observe(x),nn();let Gt;const Qt=_e=>{Gt=[_e.clientX,_e.clientY]},Ut=_e=>{if(!Gt||Math.hypot(_e.clientX-Gt[0],_e.clientY-Gt[1])>6)return;const C=x.getBoundingClientRect(),_=new Ub;_.setFromCamera(new lt((_e.clientX-C.left)/C.width*2-1,-(_e.clientY-C.top)/C.height*2+1),S);const k=_.intersectObjects(xe)[0];k&&M.current(k.object.userData.tile)};x.addEventListener("pointerdown",Qt),x.addEventListener("pointerup",Ut);function on(){const _e=o==null?void 0:o.current;if(!(_e!=null&&_e.size))return;const C=x.getBoundingClientRect(),_={left:12,top:72,right:C.width-12,bottom:C.height-82},k=[...x.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map(Q=>{const ve=Q.getBoundingClientRect();return{left:ve.left-C.left,top:ve.top-C.top,right:ve.right-C.left,bottom:ve.bottom-C.top}}),Y=[];for(const[Q,ve]of[..._e.entries()].sort(([ge],[$])=>ge-$)){const ge=Be[Q];if(!(ve!=null&&ve.isConnected)||!ge||!ve.offsetWidth||!ve.offsetHeight)continue;const $=ge.position.clone().add(new ee(0,1.45,0)).project(S),ae=($.x*.5+.5)*C.width,fe=(-$.y*.5+.5)*C.height,De=ve.offsetWidth,Le=ve.offsetHeight,Ue={left:ae-De/2,top:fe-Le-20},qe=[Ue,{left:Ue.left-De*.62-18,top:Ue.top},{left:Ue.left+De*.62+18,top:Ue.top},{left:Ue.left-De*.42-14,top:Ue.top-42},{left:Ue.left+De*.42+14,top:Ue.top-42},{left:Ue.left,top:Ue.top-58}].map(W=>({left:Math.max(_.left,Math.min(_.right-De,W.left)),top:Math.max(_.top,Math.min(_.bottom-Le,W.top))}));let Ze=qe[0],at=1/0;for(const W of qe){const Oe={...W,right:W.left+De,bottom:W.top+Le};let Se=Math.hypot(W.left-Ue.left,W.top-Ue.top);for(const Ie of[...Y,...k]){const He=Math.max(0,Math.min(Oe.right,Ie.right)-Math.max(Oe.left,Ie.left)),we=Math.max(0,Math.min(Oe.bottom,Ie.bottom)-Math.max(Oe.top,Ie.top));Se+=He*we*100}Se<at&&(at=Se,Ze=W)}ve.style.left=`${Ze.left}px`,ve.style.top=`${Ze.top}px`,ve.style.setProperty("--tail-x",`${Math.max(18,Math.min(De-18,ae-Ze.left))}px`),Y.push({...Ze,right:Ze.left+De,bottom:Ze.top+Le})}}function K(){var Y;ot=requestAnimationFrame(K);const _e=performance.now(),C=Math.min((_e-mt)/1e3,.05);mt=_e,ut+=C;const _=g.current;for(let Q=0;Q<Be.length;Q++)Be[Q].visible=!!_.players[Q]&&!_.players[Q].bankrupt;for(let Q=0;Q<_.players.length;Q++){const ve=_.players[Q],ge=Be[Q],[$,ae]=vu(ve.pos),fe=v.current[Q];ge.traverse(at=>{at.userData.playerTint&&(at.material=U(ve.color||qn[Q]))});const De=$+(Q%2-.5)*.62,Le=ae+(Math.floor(Q/2)-.5)*.62,Ue=Math.hypot(De-ge.position.x,Le-ge.position.z);ge.userData.baseRotationY=Math.atan2(De-ge.position.x,Le-ge.position.z),Ue>.04&&(ge.position.x=Ap.damp(ge.position.x,De,13,C),ge.position.z=Ap.damp(ge.position.z,Le,13,C));const qe=Ue>.04?Math.abs(Math.sin(ut*17))*.18:0,Ze=fe==="happy"?Math.abs(Math.sin(ut*10))*.1:fe==="sad"?-.1:fe==="surprised"?Math.sin(ut*12)*.045:fe==="relieved"?Math.sin(ut*5)*.025:0;ge.position.y=.59+qe+Ze,ge.rotation.y=(ge.userData.baseRotationY||0)+(fe==="proud"?Math.sin(ut*8)*.12:0),ge.rotation.z=fe==="anxious"?Math.sin(ut*32)*.045:0,ge.position.x+=fe==="anxious"?Math.sin(ut*34)*.035:0,ge.scale.setScalar(.95*(fe==="surprised"?1+Math.max(0,Math.sin(ut*12))*.09:1)),ge.visible=!ve.bankrupt}if(_.priceIndex!==ze&&(ze=_.priceIndex,te.forEach(Q=>Q(ze))),it.position.copy(Be[_.turn].position),it.position.y=.595,it.scale.setScalar(1+Math.sin(ut*3)*.06),_.selected!==null){const[Q,ve]=vu(_.selected);Ye.position.set(Q,.536,ve),Ye.visible=!0}else Ye.visible=!1;const k=JSON.stringify([_.lots,_.players.map(Q=>Q.color)]);if(Ct!==k){Ct=k;for(const Q of Ht){const ve=z[Q.id];for(;ve.children.length;){const ae=ve.children[0];ae.userData.disposableGeometry&&ae.geometry.dispose(),ve.remove(ae)}const ge=_.lots[Q.id],$=ge?((Y=_.players[ge.owner])==null?void 0:Y.color)||qn[ge.owner]:null;if(Te[Q.id].material=U($||"#fffaf0"),ge){H(ve,.045,.72,.045,"#647568",.67,.36,.7,.01);const ae=new fb(Pe(ge.owner,$));if(ae.position.set(.67,.86,.7),ae.scale.set(.62,.465,1),ae.renderOrder=5,ve.add(ae),H(ve,1.75,.055,.13,$,0,0,.84,.015),ge.level===5){H(ve,.62,.72,.58,$,0,.36,-.18,.04),H(ve,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const fe=new Un(new Ro(.43,.28,4),U("#d2a451"));fe.position.set(0,.96,-.18),fe.userData.disposableGeometry=!0,fe.rotation.y=Math.PI/4,fe.castShadow=!0,ve.add(fe),H(ve,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const fe=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let De=0;De<ge.level;De++){const[Le,Ue]=fe[De];H(ve,.33,.32,.34,$,Le,.2,Ue,.02);const qe=new Un(new Ro(.3,.19,4),U("#faf0d7"));qe.position.set(Le,.45,Ue),qe.userData.disposableGeometry=!0,qe.rotation.y=Math.PI/4,qe.castShadow=!0,ve.add(qe)}}}}}L.update(),on(),O.render(I,S)}K(),R=()=>{cancelAnimationFrame(ot),an.disconnect(),x.removeEventListener("pointerdown",Qt),x.removeEventListener("pointerup",Ut),L.dispose();const _e=new Set,C=new Set;I.traverse(_=>{_.geometry&&_e.add(_.geometry),_.material&&C.add(_.material)}),_e.forEach(_=>_.dispose()),Z.forEach(_=>_.dispose()),C.forEach(_=>_.dispose()),A.forEach(_=>_.dispose()),Re.forEach(_=>_.dispose()),B.forEach(_=>_.dispose()),O.dispose(),O.domElement.parentNode===x&&x.removeChild(O.domElement),h.current=null}})(),()=>{E=!0,R()}},[]),b.createElement("div",{className:"board-canvas",ref:p},f)});function h3({game:a,onLoad:e}){const[n,r]=Ke.useState([]),[o,c]=Ke.useState(""),[f,m]=Ke.useState(""),[p,h]=Ke.useState(null),g=()=>{try{r(Lo())}catch{m("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};Ke.useEffect(()=>{g();const E=setInterval(g,6e4);return window.addEventListener("storage",g),()=>{clearInterval(E),window.removeEventListener("storage",g)}},[]);function M(E=!1){try{const R=Lo();if(r(R),R.length===10&&!E){h({type:"replace"});return}r(ZR(a,o,E)),c(""),h(null),m("已儲存，可保留 30 天。")}catch(R){h(null),m(`儲存失敗：${R.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function v(){try{const E=KR(p.id);e(E)}catch(E){h(null),m(E.message),g()}}return b.createElement("div",{className:"save-manager"},b.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",n.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),b.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),b.createElement("input",{id:"save-name",maxLength:60,value:o,onChange:E=>c(E.target.value),placeholder:`回合 ${a.round}`}),b.createElement("button",{className:"primary",onClick:()=>M()},"儲存目前進度"),b.createElement("p",{role:"status"},f),p?b.createElement("section",{className:"save-confirm"},b.createElement("p",null,p.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),b.createElement("button",{className:"primary",onClick:()=>p.type==="replace"?M(!0):v()},"確認",p.type==="replace"?"取代並儲存":"讀取"),b.createElement("button",{className:"secondary full",onClick:()=>h(null)},"取消")):null,!n.length&&b.createElement("p",null,"尚無手動存檔。"),n.map(E=>b.createElement("article",{className:"save-entry",key:E.id},b.createElement("div",null,b.createElement("strong",null,E.name),b.createElement("small",null,new Date(E.savedAt).toLocaleString("zh-TW")),b.createElement("small",null,"回合 ",E.game.round," · 你的總資產 ",xt(pl(E.game,0))),b.createElement("small",null,"到期：",new Date(E.savedAt+nx).toLocaleString("zh-TW"))),b.createElement("button",{className:"secondary",onClick:()=>h({type:"load",id:E.id})},"讀取"))))}const p3=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,dx="city-tycoon:background-music:v1";function m3(){try{const a=JSON.parse(localStorage.getItem(dx));return{enabled:(a==null?void 0:a.enabled)===!0,volume:typeof(a==null?void 0:a.volume)=="number"&&Number.isFinite(a.volume)?Math.max(0,Math.min(100,a.volume)):50}}catch{return{enabled:!1,volume:50}}}function g3(){const[a,e]=Ke.useState(m3),[n,r]=Ke.useState(!1),[o,c]=Ke.useState(""),f=Ke.useRef(null),m=Ke.useRef(0);function p(){const g=++m.current;c(""),f.current.play().catch(M=>{g===m.current&&c(M.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}Ke.useEffect(()=>{const g=f.current;return g.volume=a.volume/100,a.enabled&&p(),()=>{m.current++,g.pause()}},[]),Ke.useEffect(()=>{f.current.volume=a.volume/100;try{localStorage.setItem(dx,JSON.stringify(a))}catch{}},[a]);function h(){f.current.paused?(e(g=>({...g,enabled:!0})),p()):(m.current++,f.current.pause(),c(""),e(g=>({...g,enabled:!1})))}return b.createElement("div",{className:"background-music"},b.createElement("audio",{ref:f,src:p3,loop:!0,preload:"none",onPlaying:()=>r(!0),onPause:()=>r(!1),onError:()=>{r(!1),c("音樂無法載入，請重新整理")}}),b.createElement("button",{className:"music-toggle","aria-label":n?"關閉背景音樂":"開啟背景音樂","aria-pressed":n,onClick:h,title:o||"Velvet Afternoon"},b.createElement(BM,{size:16}),b.createElement("span",null,"背景音樂"),n?b.createElement(FM,{size:14}):b.createElement(HM,{size:14})),b.createElement("label",{className:"music-volume"},b.createElement("span",{className:"music-volume-label"},"音量"),b.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:a.volume,onChange:g=>e(M=>({...M,volume:Number(g.target.value)}))}),b.createElement("output",null,a.volume,"%")),o&&b.createElement("span",{className:"music-message",role:"status"},o))}function hx(a){return Number.isFinite(a)?`${a>0?"+":"−"}${xt(Math.abs(a))}`:""}const _3={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function px({message:a,player:e,anchorRefs:n,mobile:r=!1,animated:o=!0,paused:c=!1}){if(!e)return null;const f=hx(a.amountDelta),m=`emotion-${a.mood}`,p=e.color||"#61ac78";return b.createElement("div",{ref:r?void 0:h=>{n&&(h?n.current.set(e.id,h):n.current.delete(e.id))},className:`emotion-bubble ${m}${o?"":" motion-off"}${c?" is-paused":""}${r?" emotion-mobile-entry":""}`,style:{"--player":p},"aria-hidden":"true"},b.createElement("div",{className:"emotion-card"},b.createElement("div",{className:"emotion-bubble-heading"},b.createElement("span",{className:"emotion-player-dot"}),b.createElement("strong",null,e.name),b.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},a.emoji),b.createElement("span",{className:"emotion-mood-label"},a.moodLabel),b.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},_3[a.mood]),b.createElement("b",{className:"emotion-amount"},f)),b.createElement("p",null,a.message)))}function v3({event:a,players:e,anchorRefs:n,animated:r,paused:o=!1}){if(!a)return null;const c=new Map(e.map(m=>[m.id,m])),f=`${a.summary} ${a.players.map(m=>{const p=c.get(m.playerId);return`${(p==null?void 0:p.name)||"玩家"}，${m.moodLabel}，${hx(m.amountDelta)}，${m.message}`}).join(" ")}`;return b.createElement(b.Fragment,null,b.createElement("div",{className:"emotion-layer","aria-hidden":"true"},a.players.map(m=>b.createElement(px,{key:`${a.id}-${m.playerId}`,message:m,player:c.get(m.playerId),anchorRefs:n,animated:r,paused:o}))),b.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},f))}function y3({event:a,players:e,animated:n,paused:r=!1}){if(!a)return null;const o=new Map(e.map(c=>[c.id,c]));return b.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},a.players.map(c=>b.createElement(px,{key:`${a.id}-${c.playerId}`,message:c,player:o.get(c.playerId),mobile:!0,animated:n,paused:r})))}function x3({value:a,rolling:e}){const n={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return b.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${a} 點`},Array.from({length:9},(r,o)=>b.createElement("i",{key:o,className:n[a].includes(o+1)?"pip":""})))}function Bp(a){return(a==null?void 0:a.color)||qn[(a==null?void 0:a.id)||0]}function hy({id:a,small:e=!1,player:n}){return b.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Bp(n||{id:a})}},b.createElement("span",{className:"avatar-head"}),b.createElement("span",{className:"avatar-body"}),b.createElement("span",{className:"avatar-cap"}),b.createElement("span",{className:"owner-number"},a+1))}function S3({player:a}){const e=[];return a.jail&&e.push(b.createElement("span",{key:"jail",className:"status-badge jail"},"監獄")),a.slowTurns&&e.push(b.createElement("span",{key:"slow",className:"status-badge slow"},"龜速 ",a.slowTurns)),a.rentShield&&e.push(b.createElement("span",{key:"shield",className:"status-badge shield"},"免租")),a.rentMultiplier===2&&e.push(b.createElement("span",{key:"double",className:"status-badge double"},"收租×2")),e.length?b.createElement("div",{className:"player-status-badges"},e):null}function M3({game:a}){const e=Ns(a);return b.createElement("section",{className:"building-inventory","aria-label":"建築物剩餘數量"},b.createElement("div",{className:"building-inventory-heading"},b.createElement("strong",null,"建築物庫存"),b.createElement("span",null,a.limitBuildings?"有限量":"不限量")),a.limitBuildings?b.createElement("div",{className:"building-inventory-values"},b.createElement("span",null,b.createElement("b",null,e.houses),b.createElement("small",null,"房屋可購買")),b.createElement("span",null,b.createElement("b",null,e.hotels),b.createElement("small",null,"旅館可購買"))):b.createElement("p",null,"房屋與旅館皆不受銀行數量限制。"))}function E3({card:a,count:e,disabled:n,selected:r,onClick:o}){return b.createElement("button",{type:"button",className:`skill-card-tile skill-${a.type}${r?" selected":""}`,onClick:o,"aria-disabled":n,"aria-pressed":r,"aria-label":`${a.name}：${a.summary}`},b.createElement("span",{className:"skill-card-icon","aria-hidden":"true"},a.icon),b.createElement("span",{className:"skill-card-copy"},b.createElement("strong",null,a.name),b.createElement("small",null,a.summary)),e>1&&b.createElement("b",{className:"skill-card-count"},e))}function b3(a){return a===5?"旅館":a?`${a} 間房屋`:"未開發地產"}function T3(a){return a===5?"旅館":"房屋 "+(a||0)+" / 4"}function A3(a,e,n){if(a.limitBuildings===!1)return n.level===5?"這塊土地已有旅館。":n.level===4?"你剛走到這塊土地，可以升級為旅館。":"你剛走到這塊土地，可以加蓋一間房屋。";if(a.selected!==e.id||a.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(a.buildUsed)return"本次落地已完成建造。";if(n.level===5)return"這塊土地已有旅館。";const r=Ns(a);return n.level===4?r.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":r.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function R3(a,e,n){return n.level===5?"已達最高等級":a.buildUsed&&a.selected===e.id?"本次落地已建造":n.level===4?`升級旅館 · ${xt(yl(e,a))}`:`建造房屋 · ${xt(yl(e,a))}`}function sl({title:a,onClose:e,children:n,wide:r=!1}){const o=Ke.useRef();return Ke.useEffect(()=>{var m;const c=document.activeElement;(m=o.current)==null||m.focus();function f(p){if(p.key==="Escape"&&(e==null||e()),p.key==="Tab"){const h=[...o.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!h.length){p.preventDefault();return}p.shiftKey&&document.activeElement===h[0]?(p.preventDefault(),h.at(-1).focus()):!p.shiftKey&&document.activeElement===h.at(-1)&&(p.preventDefault(),h[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),b.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},b.createElement("section",{ref:o,tabIndex:-1,className:"modal "+(r?"wide":""),role:"dialog","aria-modal":"true","aria-label":a},b.createElement("div",{className:"modal-heading"},b.createElement("h2",null,a),e&&b.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},b.createElement(yy,{size:20}))),n))}function C3({setup:a,setSetup:e,newGameMaxRounds:n,onStart:r,onClose:o}){return b.createElement(sl,{title:"開啟一段全新的城市故事",onClose:o},b.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),b.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),b.createElement("label",{className:"setup-count"},"玩家人數 ",b.createElement("select",{value:a.count,onChange:c=>e(f=>({...f,count:Number(c.target.value)}))},[2,3,4].map(c=>b.createElement("option",{key:c,value:c},c," 人")))),b.createElement("label",{className:"setup-count"},"最多回合 ",b.createElement("select",{"aria-label":"最多回合",value:a.roundOption,onChange:c=>e(f=>({...f,roundOption:c.target.value}))},b.createElement("option",{value:"40"},"40 回合"),b.createElement("option",{value:"80"},"80 回合"),b.createElement("option",{value:"custom"},"自訂"),b.createElement("option",{value:"unlimited"},"無限制"))),b.createElement("label",{className:"setup-count"},"初始通膨率 ",b.createElement("select",{"aria-label":"初始通膨率",value:a.inflationRate,onChange:c=>e(f=>({...f,inflationRate:Number(c.target.value)}))},Array.from({length:ix+1},(c,f)=>b.createElement("option",{key:f,value:f},f,"%")))),b.createElement("label",{className:"setup-count"},"建築數量限制 ",b.createElement("select",{"aria-label":"建築數量限制",value:a.limitBuildings?"limited":"unlimited",onChange:c=>e(f=>({...f,limitBuildings:c.target.value==="limited"}))},b.createElement("option",{value:"limited"},"限制（房屋 32、旅館 12）"),b.createElement("option",{value:"unlimited"},"不限數量"))),a.roundOption==="custom"&&b.createElement("label",{className:"round-limit-custom"},"自訂回合數",b.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:a.customRounds,onChange:c=>e(f=>({...f,customRounds:c.target.value}))})),b.createElement("div",{className:"player-setup"},a.players.slice(0,a.count).map((c,f)=>b.createElement("div",{className:"player-setup-row",key:f},b.createElement("input",{"aria-label":`玩家 ${f+1} 名稱`,value:c.name,onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,name:m.target.value}:h)}))}),b.createElement("input",{"aria-label":`玩家 ${f+1} 顏色`,type:"color",value:c.color,onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,color:m.target.value}:h)}))}),b.createElement("select",{value:c.human?"human":"ai",onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,human:m.target.value==="human"}:h)}))},b.createElement("option",{value:"human"},"真人"),b.createElement("option",{value:"ai"},"電腦"))))),b.createElement("button",{className:"primary",disabled:a.roundOption==="custom"&&!n,onClick:r},b.createElement(Gp,{size:18}),"開始新遊戲"),b.createElement("button",{className:"secondary full",onClick:o},"返回"))}function w3({hasContinue:a,onNewGame:e,onContinue:n}){return b.createElement("main",{className:"home-screen"},b.createElement("div",{className:"home-topline"},b.createElement("span",{className:"live-dot"}),"城市大亨 ",b.createElement("span",null,"/")," 一座城市，從第一步開始"),b.createElement("section",{className:"home-content"},b.createElement("div",{className:"home-copy"},b.createElement("div",{className:"home-brand-mark"},b.createElement(Ih,{size:29,strokeWidth:1.7}),b.createElement("span",null,"CITY TYCOON")),b.createElement("h1",null,"城市大亨"),b.createElement("p",null,"玩一場，擁有一座城。"),b.createElement("div",{className:"home-rule"}),b.createElement("small",null,"買下街區、管理資產，讓每一次擲骰都成為城市故事。")),b.createElement("div",{className:"home-city-scene","aria-label":"微縮城市棋盤意象"},b.createElement("img",{className:"home-city-board-image",src:"./home-city-board.png",alt:"立體微縮城市棋盤與彩色棋子"})),b.createElement("aside",{className:"home-actions"},b.createElement("div",{className:"home-actions-heading"},b.createElement("span",null,"準備好出發了嗎？"),b.createElement("small",null,"你的城市，等你來決定下一步。")),b.createElement("button",{className:"home-action primary",onClick:e},b.createElement(Gp,{size:20}),"開始新遊戲",b.createElement(rl,{size:17})),b.createElement("button",{className:"home-action secondary",disabled:!a,onClick:n},b.createElement(vy,{size:19}),"繼續進度",b.createElement(rl,{size:17})),b.createElement("p",{className:"home-save-status"},b.createElement("span",{className:a?"is-ready":""}),a?"已找到這個瀏覽器的自動存檔":"目前沒有可繼續的進度"))),b.createElement("footer",{className:"home-footer"},b.createElement("span",null,"自動儲存 · 僅此瀏覽器可用"),b.createElement("span",null,"一起，把城市變成你的故事。")))}const Fp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Fp.splice(0,Fp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function D3(a){if(a.roundOption==="unlimited")return null;if(a.roundOption==="custom"){const e=Number(a.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(a.roundOption)}const py="city-tycoon:activity-visible:v1",mx="city-tycoon:glass-opacity:v1",gx="city-tycoon:emotion-animation:v1",_x="city-tycoon:skill-animation:v1",Oh=72,vx=a=>Math.min(95,Math.max(5,Number(a)));function N3(){try{const a=localStorage.getItem(mx);if(a===null)return Oh;const e=Number(a);return Number.isFinite(e)?vx(e):Oh}catch{return Oh}}function U3(){try{return localStorage.getItem(gx)!=="false"}catch{return!0}}function L3(){try{return localStorage.getItem(_x)!=="false"}catch{return!0}}function my({entries:a}){return a.map((e,n)=>b.createElement("div",{className:"activity-item",key:n},b.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?b.createElement(yu,{size:16}):e.kind==="dice"?b.createElement(_y,{size:16}):e.kind==="tax"?b.createElement(IM,{size:16}):b.createElement(Ph,{size:16})),b.createElement("p",null,e.text,b.createElement("small",null,n===0?"剛剛":"本局紀錄"))))}function O3(){var He,we,je,We,sn,Ot;const[a,e]=Ke.useState("home"),[n,r]=Ke.useState(()=>{try{return dy()}catch{return null}}),[o,c]=Ke.useState(()=>{try{return localStorage.getItem(py)!=="false"}catch{return!0}}),[f,m]=Ke.useState(N3),[p,h]=Ke.useState(U3),[g,M]=Ke.useState(L3),[v,E]=Ke.useState(!1),[R,N]=Ke.useState(()=>{var G;return typeof window<"u"&&((G=window.matchMedia)==null?void 0:G.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[T,x]=Ke.useState([]),[O,I]=Ke.useState(null),[S,L]=Ke.useReducer(f3,void 0,lx),P=Ke.useRef(new Map),F=Ke.useRef(0),A=Ke.useRef(""),U=T[0]||null,Z=U&&p&&!R?Object.fromEntries(U.players.map(G=>[G.playerId,G.mood])):{},H=Ke.useRef();Ke.useEffect(()=>{try{localStorage.setItem(py,String(o))}catch{}},[o]),Ke.useEffect(()=>{try{localStorage.setItem(gx,String(p))}catch{}},[p]),Ke.useEffect(()=>{try{localStorage.setItem(_x,String(g))}catch{}},[g]),Ke.useEffect(()=>{var dt,Jt;const G=(dt=window.matchMedia)==null?void 0:dt.call(window,"(prefers-reduced-motion: reduce)");if(!G)return;const Ne=yn=>N(yn.matches);return(Jt=G.addEventListener)==null||Jt.call(G,"change",Ne),()=>{var yn;return(yn=G.removeEventListener)==null?void 0:yn.call(G,"change",Ne)}},[]),Ke.useEffect(()=>{const G=(S.emotionEvents||[]).filter(Ne=>Ne.id>F.current);G.length&&(F.current=Math.max(F.current,...G.map(Ne=>Ne.id)),x(Ne=>[...Ne,...G].sort((dt,Jt)=>Jt.priority-dt.priority||dt.id-Jt.id).slice(0,3)))},[S.emotionEvents]),Ke.useEffect(()=>{if(!U||O||S.stage==="moving"&&U.priority<90)return;const G=U.id,Ne=setTimeout(()=>x(dt=>{var Jt;return((Jt=dt[0])==null?void 0:Jt.id)===G?dt.slice(1):dt.filter(yn=>yn.id!==G)}),2400);return()=>clearTimeout(Ne)},[U==null?void 0:U.id,S.stage,O]),Ke.useEffect(()=>{const G=S.log[0];if((G==null?void 0:G.kind)!=="skill"){A.current=(G==null?void 0:G.text)||"";return}if(G.text===A.current||(A.current=G.text,!g||R))return;E(!0);const Ne=setTimeout(()=>E(!1),720);return()=>clearTimeout(Ne)},[S.log,g,R]);const J=G=>{const Ne=vx(Number(G.currentTarget.value));m(Ne);try{localStorage.setItem(mx,String(Ne))}catch{}},[me,pe]=Ke.useState(null),[ie,B]=Ke.useState("players"),[X,re]=Ke.useState(null),[xe,Te]=Ke.useState(null),[z,te]=Ke.useState(!1),[Re,Pe]=Ke.useState(!1),[Fe,se]=Ke.useState(""),[Ce,be]=Ke.useState(!1),[Be,it]=Ke.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:um,limitBuildings:!0,players:[{name:"你",color:qn[0],human:!0},{name:"艾米",color:qn[1],human:!1},{name:"小傑",color:qn[2],human:!1},{name:"喵喵",color:qn[3],human:!1}]}),Ye=Ke.useRef(),Ct=Ke.useRef(),ze=S.players[S.turn],ot=!!(ze!=null&&ze.human)&&!(ze!=null&&ze.bankrupt),ut=ot&&["ready","end"].includes(S.stage),mt=()=>{L({type:"ROLL",dice:Array.from({length:ze.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})},nn=()=>{if(!ze||ze.skillUsedThisTurn||S.pendingSkill||S.skillOverflow)return null;const G=S.players.filter(xn=>xn.id!==ze.id&&!xn.bankrupt),Ne=G[0],dt=Ia(S,ze.id),Jt=Ht.find(xn=>{var cn,Tn;return xn.type==="property"&&((cn=S.lots[xn.id])==null?void 0:cn.owner)!==void 0&&S.lots[xn.id].owner!==ze.id&&!((Tn=S.players[S.lots[xn.id].owner])!=null&&Tn.bankrupt)}),yn=ze.skillHand,hn=xn=>yn.includes(xn);if(ze.cash<7e3&&hn("subsidy"))return{type:"USE_SKILL_CARD",cardId:"subsidy"};if(ze.cash<9e3&&hn("rent-shield"))return{type:"USE_SKILL_CARD",cardId:"rent-shield"};if(ze.jail&&hn("get-out"))return{type:"USE_SKILL_CARD",cardId:"get-out"};if(G.length&&hn("slow"))return{type:"USE_SKILL_CARD",cardId:"slow",targetId:Ne.id};if(G.length&&hn("trap"))return{type:"USE_SKILL_CARD",cardId:"trap",targetId:Ne.id};if(G.length&&hn("teleport")){const xn=Tu.find(cn=>cn!==Ne.pos&&Ht[cn].type==="property")??0;return{type:"USE_SKILL_CARD",cardId:"teleport",targetId:Ne.id,targetPosition:xn}}return G.length&&hn("position-swap")?{type:"USE_SKILL_CARD",cardId:"position-swap",targetId:Ne.id}:dt.length&&hn("rent-double")?{type:"USE_SKILL_CARD",cardId:"rent-double"}:dt.length&&Jt&&hn("land-swap")?{type:"USE_SKILL_CARD",cardId:"land-swap",ownLotId:dt[0].id,targetLotId:Jt.id}:hn("birthday")&&G.length?{type:"USE_SKILL_CARD",cardId:"birthday"}:null};Ke.useEffect(()=>{try{Lo()}catch{be(!0)}},[]),Ke.useEffect(()=>{if(!(a!=="game"||S.stage==="moving"))try{Up(S),be(!1)}catch{be(!0)}},[S,a]),Ke.useEffect(()=>{if(S.stage==="moving"&&O!=="saves"){const G=setTimeout(()=>L({type:"STEP"}),330);return()=>clearTimeout(G)}},[S,O]),Ke.useEffect(()=>{const G=S.selected,Ne=G===null?null:Ht[G],dt=G===null?null:S.lots[G],Jt=ot&&S.stage==="decision"&&(Ne==null?void 0:Ne.type)==="property"&&!dt,yn=ot&&S.stage==="end"&&S.buildAvailable&&(dt==null?void 0:dt.owner)===S.turn;(Jt||yn)&&(pe(G),I("property"))},[S,ot]),Ke.useEffect(()=>{if(a!=="game"||ot||S.stage==="finished"||S.pendingSkill||O==="new"||O==="rules"||O==="saves")return;const G=setTimeout(()=>{if(S.stage==="ready"){const Ne=nn();Ne?L(Ne):mt()}else if(S.stage==="decision")L({type:ze.cash>ol(S,Ht[ze.pos])+Zn(S,1800)?"BUY":"SKIP"});else if(S.stage==="end"){const Ne=Ia(S,S.turn).find(dt=>Op(S,dt.id)&&ze.cash>yl(dt,S)+Zn(S,2500));L(Ne?{type:"BUILD",id:Ne.id}:{type:"NEXT"})}},S.stage==="decision"?1300:1100);return()=>clearTimeout(G)},[S,ot,O,a]),Ke.useEffect(()=>{var yn;const G=S.skillOverflow;if(!G)return;const Ne=S.players[G.playerId];if(Ne!=null&&Ne.human||!((yn=Ne==null?void 0:Ne.skillHand)!=null&&yn.length))return;const dt=Ne.skillHand.at(-1),Jt=setTimeout(()=>L({type:"RESOLVE_SKILL_OVERFLOW",cardId:dt}),350);return()=>clearTimeout(Jt)},[(He=S.skillOverflow)==null?void 0:He.playerId,S.players,S.skillOverflow]),Ke.useEffect(()=>{const G=S.pendingSkill;if(!G)return;const Ne=S.players[G.targetId];if(Ne!=null&&Ne.human)return;const dt=Ne!=null&&Ne.skillHand.includes("counter")?"counter":Ne!=null&&Ne.skillHand.includes("reflect")?"reflect":"pass",Jt=setTimeout(()=>L({type:"RESPOND_SKILL",playerId:G.targetId,response:dt}),520);return()=>clearTimeout(Jt)},[(we=S.pendingSkill)==null?void 0:we.sourceId,(je=S.pendingSkill)==null?void 0:je.targetId,(We=S.pendingSkill)==null?void 0:We.cardId,S.players]),Ke.useEffect(()=>{if(!(!z||!Ct.current))try{const G=Ct.current,Ne=G.createOscillator(),dt=G.createGain();Ne.connect(dt),dt.connect(G.destination),Ne.type="sine",Ne.frequency.setValueAtTime(S.stage==="moving"?380:620,G.currentTime),dt.gain.setValueAtTime(.035,G.currentTime),dt.gain.exponentialRampToValueAtTime(.001,G.currentTime+.13),Ne.start(),Ne.stop(G.currentTime+.15)}catch{}},[S.remaining,S.stage,z]);const an=()=>{if(!z){const G=window.AudioContext||window.webkitAudioContext;G&&(Ct.current||(Ct.current=new G),Ct.current.resume())}te(!z)},Gt=G=>{pe(G),I("property")},Qt=D3(Be),Ut=()=>I("new"),on=()=>{I(null);try{r(dy())}catch{r(null)}e("home")},K=()=>{var G;Be.roundOption==="custom"&&!Qt||(x([]),F.current=0,L({type:"NEW",config:{...Be,maxRounds:Qt,inflationRate:Number(Be.inflationRate)}}),e("game"),I(null),B("players"),(G=Ye.current)==null||G.reset(),Pe(!1))},Lt=()=>{n&&(x([]),F.current=0,L({type:"LOAD",game:n}),e("game"),I(null),pe(null),B("players"))},_e=O==="new"?b.createElement(C3,{setup:Be,setSetup:it,newGameMaxRounds:Qt,onStart:K,onClose:()=>I(null)}):null;if(a==="home")return b.createElement("div",{className:"app-shell home-shell"},b.createElement(w3,{hasContinue:!!n,onNewGame:Ut,onContinue:Lt}),_e);const C=me!==null?Ht[me]:null,_=C?S.lots[C.id]:null,k=Ht[ze.pos],Y=!!C&&C.type==="property"&&!_&&S.stage==="decision"&&ot&&k.id===C.id,Q=((ze==null?void 0:ze.skillHand)||[]).map(G=>cl.find(Ne=>Ne.id===G)).filter(Boolean),ve=Q.reduce((G,Ne)=>({...G,[Ne.id]:(G[Ne.id]||0)+1}),{}),ge=S.players.filter(G=>G.id!==(ze==null?void 0:ze.id)&&!G.bankrupt),$=Ia(S,S.turn),ae=Ht.filter(G=>{var Ne;return G.type==="property"&&S.lots[G.id]&&S.lots[G.id].owner!==S.turn&&!((Ne=S.players[S.lots[G.id].owner])!=null&&Ne.bankrupt)}),fe=cl.find(G=>G.id===X)||null,De=S.skillOverflow?S.players[S.skillOverflow.playerId]:null,Le=S.pendingSkill?S.players[S.pendingSkill.targetId]:null,Ue=S.pendingSkill?S.players[S.pendingSkill.sourceId]:null,qe=ot&&S.stage==="ready"&&!S.skillOverflow&&!S.pendingSkill&&!ze.skillUsedThisTurn,Ze=G=>!qe||G.timing!=="active"||!Pp.has(G.id)||G.id==="get-out"&&!ze.jail,at=G=>{var Ne;return!(De!=null&&De.human)||((Ne=S.skillOverflow)==null?void 0:Ne.playerId)!==S.turn||S.pendingSkill||ze.skillUsedThisTurn||G.timing!=="active"||!Pp.has(G.id)||G.id==="get-out"&&!ze.jail||G.target==="player"&&!ge.length||G.target==="land"&&(!$.length||!ae.length)},W=(G,Ne=!1)=>{var Jt,yn;if(Ne?at(G):Ze(G))return;const dt=Ne?{overflowUse:!0}:{};if(re(G.id),G.target==="player"){const hn=ge[0];Te({cardId:G.id,targetId:(hn==null?void 0:hn.id)??"",...G.id==="teleport"?{targetPosition:(hn==null?void 0:hn.pos)??0}:{},...dt});return}if(G.target==="land"){Te({cardId:G.id,ownLotId:((Jt=$[0])==null?void 0:Jt.id)??"",targetLotId:((yn=ae[0])==null?void 0:yn.id)??"",...dt});return}L({type:"USE_SKILL_CARD",cardId:G.id,...dt}),re(null)},Oe=G=>{re(G.id),Te(null)},Se=()=>{fe&&W(fe)},Ie=()=>{xe&&(L({type:"USE_SKILL_CARD",...xe}),Te(null),re(null))};return b.createElement("div",{className:"app-shell"},b.createElement("header",{className:"header"},b.createElement("button",{className:"brand",onClick:on,"aria-label":"城市大亨首頁"},b.createElement("span",{className:"brand-icon"},b.createElement(Ih,{size:33,strokeWidth:1.8})),b.createElement("span",null,b.createElement("strong",null,"城市大亨"),b.createElement("small",null,"CITY TYCOON"))),b.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),b.createElement("nav",null,b.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>I("rules")},b.createElement(av,{size:18}),b.createElement("span",null,"遊戲規則")),b.createElement("span",{className:"nav-divider"}),b.createElement("button",{className:"outline-button",onClick:Ut},b.createElement(Gp,{size:18}),b.createElement("span",null,"新遊戲")))),b.createElement("button",{className:"save-launch secondary",onClick:()=>I("saves")},"儲存／讀取"),O==="saves"&&b.createElement(sl,{title:"存檔管理",wide:!0,onClose:()=>I(null)},b.createElement(h3,{game:S,onLoad:G=>{x([]),F.current=0,L({type:"LOAD",game:G});try{Up(G),be(!1)}catch{be(!0)}pe(null),B("players"),I(null)}})),b.createElement("main",{className:"game-layout"},b.createElement("section",{className:"world","aria-label":"遊戲棋盤"},b.createElement(d3,{game:S,emotionAnchorRefs:P,emotionMoods:Z,onSelect:Gt,onError:se,ref:Ye},b.createElement(v3,{event:U,players:S.players,anchorRefs:P,animated:p&&!R,paused:S.stage==="moving"||O!==null})),b.createElement("div",{className:"world-heading"},b.createElement("span",{className:"live-dot"}),"經典城市 ",b.createElement("span",{className:"world-heading-divider"},"/"),b.createElement("span",null,S.players.length," 人對局"),b.createElement("button",{ref:H,className:"activity-toggle","aria-expanded":o,"aria-controls":"glass-city-activity",onClick:()=>c(G=>!G)},b.createElement(av,{size:16}),"城市動態",b.createElement("span",null,o?"收起":"展開"))),b.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-f/100},"aria-labelledby":"glass-activity-title",hidden:!o},b.createElement("div",{className:"glass-activity-heading"},b.createElement("h2",{id:"glass-activity-title"},"城市動態"),b.createElement("label",{className:"glass-opacity-control"},b.createElement("span",null,"透明度"),b.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:f,"aria-label":"玻璃面板透明度",onChange:G=>m(Number(G.target.value)),onPointerUp:J,onBlur:J}),b.createElement("output",null,f,"%")),b.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var G;c(!1),(G=H.current)==null||G.focus()}},b.createElement(yy,{size:20}))),b.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},b.createElement(my,{entries:S.log})),b.createElement("button",{className:"glass-activity-all",onClick:()=>I("log")},"全部紀錄 ",b.createElement(Ph,{size:16}))),b.createElement("div",{className:"world-top-right"},b.createElement("span",{className:"saved"},b.createElement(LM,{size:13}),Ce?"此瀏覽器無法存檔":"自動儲存"),b.createElement(g3,null),b.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":p,onClick:()=>h(G=>!G)},b.createElement("span",{className:"emotion-toggle-indicator"}),p?"情緒動畫 開":"情緒動畫 關"),b.createElement("button",{className:"emotion-animation-toggle skill-animation-toggle",type:"button","aria-pressed":g,onClick:()=>M(G=>!G)},b.createElement("span",{className:"emotion-toggle-indicator"}),g?"技能動畫 開":"技能動畫 關"),b.createElement("button",{className:"icon-button sound","aria-label":z?"關閉音效":"開啟音效",onClick:an},z?b.createElement(XM,{size:18}):b.createElement(WM,{size:18}))),Fe&&b.createElement("div",{className:"webgl-error"},Fe),b.createElement("div",{className:"board-foot"},b.createElement("div",{className:"camera-toolbar"},b.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:Re?"selected":"",onClick:()=>{var G;(G=Ye.current)==null||G.rotate(),Pe(!Re)}},b.createElement(GM,{size:20}),b.createElement("span",null,"旋轉視角")),b.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var G;(G=Ye.current)==null||G.reset(),Pe(!1)}},b.createElement(vy,{size:18})),b.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var G;return(G=Ye.current)==null?void 0:G.top()}},b.createElement(kM,{size:18})),b.createElement("i",null),b.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var G;return(G=Ye.current)==null?void 0:G.zoom(1.15)}},b.createElement(qM,{size:20})),b.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var G;return(G=Ye.current)==null?void 0:G.zoom(.87)}},b.createElement(YM,{size:20}))),b.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),b.createElement(y3,{event:U,players:S.players,animated:p&&!R,paused:S.stage==="moving"||O!==null}),b.createElement("aside",{className:"sidebar"},b.createElement("div",{className:"round-heading"},b.createElement("div",null,b.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),b.createElement("h1",null,"回合 ",b.createElement("b",null,String(S.round).padStart(2,"0")),b.createElement("span",null,"/ ",S.maxRounds===null?"∞":S.maxRounds)),b.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${S.inflationRate}%，物價指數 ${S.priceIndex.toFixed(2)} 倍`},b.createElement("span",{className:"inflation-rate-badge"},b.createElement(VM,{size:14,"aria-hidden":"true"}),"通膨率 ",b.createElement("b",null,S.inflationRate,"%")),b.createElement("span",{className:"inflation-index"},"物價指數 ",b.createElement("b",null,S.priceIndex.toFixed(2),"×")))),b.createElement("span",{className:"round-icon"},b.createElement(PM,{size:21}))),b.createElement("div",{className:"tabs"},b.createElement("button",{className:ie==="players"?"active":"",onClick:()=>B("players")},"玩家概況"),b.createElement("button",{className:ie==="properties"?"active":"",onClick:()=>B("properties")},"我的地產 ",b.createElement("span",null,Ia(S,0).length))),b.createElement(M3,{game:S}),b.createElement("div",{className:"overview"},ie==="players"?S.players.map(G=>b.createElement("div",{key:G.id,className:"player-row "+(S.turn===G.id?"current ":"")+(G.bankrupt?"bankrupt":""),style:{"--player":Bp(G)}},b.createElement(hy,{id:G.id,player:G}),b.createElement("div",{className:"player-info"},b.createElement("strong",null,G.name,G.id===0?b.createElement("em",null,"玩家"):b.createElement("span",{className:"ai"},"電腦")),b.createElement("small",null,G.bankrupt?"已破產":`${Ia(S,G.id).length} 塊地產${G.jail?" · 監獄中":""}`),b.createElement(S3,{player:G})),b.createElement("div",{className:"player-cash"},b.createElement("b",null,xt(G.cash)),S.turn===G.id&&b.createElement("small",null,b.createElement("span",null)," 目前回合")))):b.createElement("div",{className:"property-list"},Ia(S,0).length?Ia(S,0).map(G=>b.createElement("button",{key:G.id,onClick:()=>Gt(G.id)},b.createElement("i",{style:{background:G.color}}),b.createElement("span",null,b.createElement("strong",null,G.name),b.createElement("small",null,b3(S.lots[G.id].level)," · 租金 ",xt(Lp(S,G)))),b.createElement(OM,{size:16}))):b.createElement("div",{className:"empty-properties"},b.createElement(yu,{size:28}),b.createElement("strong",null,"你的第一塊地產，正在等你"),b.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),b.createElement("section",{className:"turn-panel","aria-live":"polite"},b.createElement("div",{className:"turn-title"},b.createElement("span",{className:"live-dot",style:{background:Bp(ze)}}),b.createElement("h2",null,S.stage==="finished"?"本局已結束":ot?"你的回合":`${ze.name}的回合`),b.createElement("span",null,S.stage==="moving"?"移動中":S.stage==="decision"?"購地時刻":ot?"準備出發":"電腦玩家")),b.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(G=>b.createElement("button",{key:G,"aria-pressed":(ze.diceCount??2)===G,disabled:!ot||S.stage!=="ready"||!!ze.jail||!!S.pendingSkill,onClick:()=>L({type:"SET_DICE_COUNT",count:G})},G," 顆骰子"))),b.createElement("div",{className:"dice-row"},(S.stage==="ready"?Array.from({length:ze.diceCount??2},()=>1):S.dice).map((G,Ne)=>b.createElement(x3,{key:Ne,value:G,rolling:S.stage==="moving"}))),b.createElement("section",{className:`skill-panel${v?" skill-pulse":""}`,"aria-label":"技能卡手牌"},b.createElement("div",{className:"skill-panel-heading"},b.createElement("h3",null,b.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),b.createElement("span",null,ze.human?`${Q.length} / 3`:`${Q.length} 張`)),ze.human?Q.length?b.createElement("div",{className:"skill-card-list"},Q.map(G=>b.createElement(E3,{key:G.id,card:G,count:ve[G.id],disabled:Ze(G),selected:(fe==null?void 0:fe.id)===G.id,onClick:()=>Oe(G)}))):b.createElement("p",{className:"skill-empty"},"抵達機會格，或經過／抵達城市基金格，有機會取得技能卡。"):b.createElement("p",{className:"skill-ai-count"},"電腦玩家持有 ",Q.length," 張技能卡"),fe&&!xe&&b.createElement("div",{className:"skill-detail"},b.createElement("div",{className:"skill-detail-heading"},b.createElement("span",{className:"skill-detail-icon"},fe.icon),b.createElement("div",null,b.createElement("strong",null,fe.name),b.createElement("span",null,fe.summary),b.createElement("small",null,fe.timing==="active"?"主動卡 · 可在自己回合使用":"反應卡 · 需等待符合條件的事件"))),b.createElement("div",{className:"skill-detail-actions"},b.createElement("button",{type:"button",className:"secondary",onClick:()=>re(null)},"關閉說明"),b.createElement("button",{type:"button",className:"primary",disabled:Ze(fe),onClick:Se},"使用"))),fe&&xe&&b.createElement("div",{className:"skill-target-picker"},b.createElement("div",null,b.createElement("strong",null,fe.name),b.createElement("span",null,fe.summary)),fe.target==="player"&&b.createElement("label",null,"選擇目標",b.createElement("select",{value:xe.targetId,onChange:G=>Te(Ne=>({...Ne,targetId:Number(G.target.value)}))},ge.map(G=>b.createElement("option",{key:G.id,value:G.id},G.name,G.jail?" · 監獄中":"")))),fe.id==="teleport"&&b.createElement("label",null,"選擇合法位置",b.createElement("select",{value:xe.targetPosition,onChange:G=>Te(Ne=>({...Ne,targetPosition:Number(G.target.value)}))},Tu.map(G=>b.createElement("option",{key:G,value:G},Ht[G].name,Ht[G].type==="property"?" · 地產":"")))),fe.target==="land"&&b.createElement("div",{className:"skill-land-pickers"},b.createElement("label",null,"你的土地",b.createElement("select",{value:xe.ownLotId,onChange:G=>Te(Ne=>({...Ne,ownLotId:Number(G.target.value)}))},$.map(G=>b.createElement("option",{key:G.id,value:G.id},G.name)))),b.createElement("label",null,"交換土地",b.createElement("select",{value:xe.targetLotId,onChange:G=>Te(Ne=>({...Ne,targetLotId:Number(G.target.value)}))},ae.map(G=>{var Ne;return b.createElement("option",{key:G.id,value:G.id},G.name," · ",(Ne=S.players[S.lots[G.id].owner])==null?void 0:Ne.name)})))),b.createElement("div",{className:"skill-target-actions"},b.createElement("button",{type:"button",className:"secondary",onClick:()=>{Te(null),re(null)}},"取消"),b.createElement("button",{type:"button",className:"primary",disabled:fe.id==="teleport"?!xe.targetId&&xe.targetId!==0||!Tu.includes(xe.targetPosition):fe.target==="player"?!xe.targetId:!xe.ownLotId||!xe.targetLotId,onClick:Ie},"確認使用")))),(Le==null?void 0:Le.human)&&b.createElement("section",{className:"skill-reaction-prompt","aria-live":"assertive"},b.createElement("strong",null,Ue==null?void 0:Ue.name,"正在對你使用",((sn=cl.find(G=>G.id===S.pendingSkill.cardId))==null?void 0:sn.name)||"技能卡"),b.createElement("span",null,"效果尚未結算，請選擇是否回應。"),b.createElement("div",null,b.createElement("button",{type:"button",disabled:!Le.skillHand.includes("counter"),onClick:()=>L({type:"RESPOND_SKILL",playerId:Le.id,response:"counter"})},"使用反制卡"),b.createElement("button",{type:"button",disabled:!Le.skillHand.includes("reflect"),onClick:()=>L({type:"RESPOND_SKILL",playerId:Le.id,response:"reflect"})},"使用反彈卡"),b.createElement("button",{type:"button",className:"secondary",onClick:()=>L({type:"RESPOND_SKILL",playerId:Le.id,response:"pass"})},"不回應"))),(De==null?void 0:De.human)&&b.createElement("section",{className:"skill-overflow","aria-live":"polite"},b.createElement("strong",null,"手牌已達上限"),b.createElement("span",null,"剛抽到第 4 張技能卡，請選擇立即使用或放棄其中一張。"),b.createElement("div",{className:"skill-overflow-list"},(De.skillHand||[]).map((G,Ne)=>{const dt=cl.find(Jt=>Jt.id===G);return dt?b.createElement("div",{className:"skill-overflow-card",key:`${G}-${Ne}`},b.createElement("span",{className:"skill-overflow-card-icon"},dt.icon),b.createElement("strong",null,dt.name),b.createElement("button",{type:"button",disabled:at(dt),onClick:()=>W(dt,!0)},"使用"),b.createElement("button",{type:"button",onClick:()=>L({type:"RESOLVE_SKILL_OVERFLOW",cardId:G})},"放棄")):null}))),S.stage==="finished"?b.createElement("button",{className:"primary",onClick:()=>I("result")},b.createElement(sv,{size:19}),"查看結算"):ot&&S.stage==="decision"?b.createElement("div",{className:"buy-actions"},b.createElement("div",{className:"buy-summary"},b.createElement("strong",null,k.name),b.createElement("b",null,xt(ol(S,k)))),b.createElement("button",{className:"primary",disabled:!!De||!!S.pendingSkill,onClick:()=>L({type:"BUY"})},b.createElement(yu,{size:18}),"購買地產"),b.createElement("button",{className:"skip-button",disabled:!!De||!!S.pendingSkill,onClick:()=>L({type:"SKIP"})},"暫不購買，保留現金 ",b.createElement(rl,{size:14}))):b.createElement("button",{className:"primary",disabled:!ot||S.stage==="moving"||!!xe||!!De||!!S.pendingSkill,onClick:()=>S.stage==="end"?L({type:"NEXT"}):mt()},S.stage==="moving"?b.createElement(b.Fragment,null,"前進中 · 還有 ",S.remaining," 格"):ot?S.stage==="end"?b.createElement(b.Fragment,null,"結束回合 ",b.createElement(rl,{size:19})):b.createElement(b.Fragment,null,b.createElement(_y,{size:21}),"擲骰子"):b.createElement(b.Fragment,null,"電腦思考中",b.createElement("span",{className:"thinking"},"…"))),b.createElement("p",{className:"turn-hint"},S.stage==="ready"?ot?"好運從這一步開始。":"下一段城市冒險，即將展開。":S.notice),S.event&&b.createElement("div",{className:"event-note"},b.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),b.createElement("div",null,b.createElement("strong",null,S.event.title),b.createElement("span",null,S.event.kind==="inflation"?S.event.inflationDelta===0?`通膨率維持 ${S.inflationRate}%（已達上下限）`:`通膨率 ${S.event.inflationDelta>0?"+":""}${S.event.inflationDelta}% · 目前 ${S.inflationRate}%`:`${S.event.amount>0?"+":"−"} ${xt(Math.abs(S.event.amount))}`),S.event.skillCardName&&b.createElement("em",null,"獲得技能卡 · ",S.event.skillCardName)))),b.createElement("section",{className:"activity"},b.createElement("div",{className:"activity-heading"},b.createElement("h2",null,"城市動態"),b.createElement("button",{onClick:()=>I("log")},"全部紀錄 ",b.createElement(Ph,{size:14}))),b.createElement("div",{className:"activity-list"},b.createElement(my,{entries:S.log.slice(0,3)}))),b.createElement("footer",{className:"sidebar-footer"},b.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),O==="rules"&&b.createElement(sl,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>I(null)},b.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),b.createElement("div",{className:"rules-list"},Fp.map(([G,Ne],dt)=>b.createElement("div",{key:G},b.createElement("span",null,String(dt+1).padStart(2,"0")),b.createElement("section",null,b.createElement("h3",null,G),b.createElement("p",null,Ne))))),b.createElement("button",{className:"primary",onClick:()=>I(null)},"知道了，回到城市 ",b.createElement(rl,{size:18}))),_e,O==="property"&&C&&b.createElement(sl,{title:"地產手冊",onClose:()=>I(null)},b.createElement("div",{className:"property-card",style:{"--lot":C.color}},b.createElement("div",{className:"property-banner"},C.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),b.createElement(zM,{size:24}),b.createElement("h3",null,C.name),b.createElement("p",null,C.type==="property"?`街區 ${C.group+1} · ${_?`${S.players[_.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),C.type==="property"?b.createElement(b.Fragment,null,b.createElement("div",{className:"property-stats"},b.createElement("div",null,b.createElement("span",null,"地產價格"),b.createElement("b",null,xt(ol(S,C)))),b.createElement("div",null,b.createElement("span",null,"目前租金"),b.createElement("b",null,xt(_?Lp(S,C):Zn(S,Math.round(C.price*.18))))),b.createElement("div",null,b.createElement("span",null,"建築等級"),b.createElement("b",null,T3(_==null?void 0:_.level))),b.createElement("div",null,b.createElement("span",null,"建造費"),b.createElement("b",null,xt(yl(C,S))))),(_==null?void 0:_.owner)===ze.id?b.createElement(b.Fragment,null,b.createElement("p",{className:"property-help"},A3(S,C,_)),b.createElement("button",{className:"primary",disabled:!ut||!Op(S,C.id,ze.id),onClick:()=>L({type:"BUILD",id:C.id})},b.createElement(Ih,{size:18}),R3(S,C,_)),b.createElement("button",{className:"secondary full",disabled:!ut,onClick:()=>{L({type:"SELL",id:C.id}),I(null)}},"變賣地產 · ",xt(Zn(S,C.price+_.level*Math.round(C.price*.6),G=>Math.floor(G*.5))))):Y?b.createElement(b.Fragment,null,b.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),b.createElement("button",{className:"primary",onClick:()=>L({type:"BUY"})},b.createElement(yu,{size:18}),"購買地產 · ",xt(ol(S,C))),b.createElement("button",{className:"secondary full",onClick:()=>{L({type:"SKIP"}),I(null)}},"暫不購買，保留現金")):b.createElement("p",{className:"property-help"},_?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):b.createElement("p",{className:"property-help"},C.type==="start"?`每次經過起點，領取 ${xt(Zn(S,2e3))}。`:C.type==="chance"||C.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":C.type==="gojail"?"前往監獄並暫停下一回合。":C.type==="tax"?`停在這裡支付 ${xt(Zn(S,C.id===6?1200:1800))} 稅金。`:C.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),O==="log"&&b.createElement(sl,{title:"本局城市紀錄",onClose:()=>I(null)},b.createElement("div",{className:"full-log"},S.log.map((G,Ne)=>b.createElement("p",{key:Ne},b.createElement("span",null,String(S.log.length-Ne).padStart(2,"0")),G.text)))),(O==="result"||S.stage==="finished"&&O===null)&&b.createElement(sl,{title:"這座城市，有了新的大亨",onClose:()=>I("closedResult")},b.createElement("div",{className:"winner"},b.createElement(sv,{size:42}),b.createElement("h3",null,(Ot=S.players[S.winner])==null?void 0:Ot.name,"獲勝！"),b.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),b.createElement("div",{className:"rankings"},[...S.players].sort((G,Ne)=>pl(S,Ne.id)-pl(S,G.id)).map((G,Ne)=>b.createElement("div",{key:G.id},b.createElement("b",null,Ne+1),b.createElement(hy,{id:G.id,player:G,small:!0}),b.createElement("strong",null,G.name),b.createElement("span",null,G.bankrupt?"已破產":xt(pl(S,G.id)))))),b.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),b.createElement("button",{className:"primary",onClick:Ut},"再玩一場 ",b.createElement(rl,{size:18}))))}wM.createRoot(document.getElementById("root")).render(b.createElement(O3,null));
