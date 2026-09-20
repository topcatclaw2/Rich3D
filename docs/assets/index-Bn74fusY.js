(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function wE(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Jd={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function DE(){if(iv)return mt;iv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function E(z,K,Me){this.props=z,this.context=K,this.refs=T,this.updater=Me||R}E.prototype.isReactComponent={},E.prototype.setState=function(z,K){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,K,"setState")},E.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=E.prototype;function L(z,K,Me){this.props=z,this.context=K,this.refs=T,this.updater=Me||R}var M=L.prototype=new U;M.constructor=L,N(M,E.prototype),M.isPureReactComponent=!0;var I=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function O(z,K,Me){var Oe=Me.ref;return{$$typeof:a,type:z,key:K,ref:Oe!==void 0?Oe:null,props:Me}}function Y(z,K){return O(z.type,K,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function $(z){var K={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Me){return K[Me]})}var ge=/\/+/g;function me(z,K){return typeof z=="object"&&z!==null&&z.key!=null?$(""+z.key):K.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(K){z.status==="pending"&&(z.status="fulfilled",z.value=K)},function(K){z.status==="pending"&&(z.status="rejected",z.reason=K)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function H(z,K,Me,Oe,ze){var ae=typeof z;(ae==="undefined"||ae==="boolean")&&(z=null);var Re=!1;if(z===null)Re=!0;else switch(ae){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(z.$$typeof){case a:case e:Re=!0;break;case v:return Re=z._init,H(Re(z._payload),K,Me,Oe,ze)}}if(Re)return ze=ze(z),Re=Oe===""?"."+me(z,0):Oe,I(ze)?(Me="",Re!=null&&(Me=Re.replace(ge,"$&/")+"/"),H(ze,K,Me,"",function(at){return at})):ze!=null&&(k(ze)&&(ze=Y(ze,Me+(ze.key==null||z&&z.key===ze.key?"":(""+ze.key).replace(ge,"$&/")+"/")+Re)),K.push(ze)),1;Re=0;var Ce=Oe===""?".":Oe+":";if(I(z))for(var Be=0;Be<z.length;Be++)Oe=z[Be],ae=Ce+me(Oe,Be),Re+=H(Oe,K,Me,ae,ze);else if(Be=b(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(Oe=z.next()).done;)Oe=Oe.value,ae=Ce+me(Oe,Be++),Re+=H(Oe,K,Me,ae,ze);else if(ae==="object"){if(typeof z.then=="function")return H(ie(z),K,Me,Oe,ze);throw K=String(z),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Re}function W(z,K,Me){if(z==null)return z;var Oe=[],ze=0;return H(z,Oe,"","",function(ae){return K.call(Me,ae,ze++)}),Oe}function le(z){if(z._status===-1){var K=z._result;K=K(),K.then(function(Me){(z._status===0||z._status===-1)&&(z._status=1,z._result=Me)},function(Me){(z._status===0||z._status===-1)&&(z._status=2,z._result=Me)}),z._status===-1&&(z._status=0,z._result=K)}if(z._status===1)return z._result.default;throw z._result}var Se=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},De={map:W,forEach:function(z,K,Me){W(z,function(){K.apply(this,arguments)},Me)},count:function(z){var K=0;return W(z,function(){K++}),K},toArray:function(z){return W(z,function(K){return K})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return mt.Activity=x,mt.Children=De,mt.Component=E,mt.Fragment=n,mt.Profiler=o,mt.PureComponent=L,mt.StrictMode=r,mt.Suspense=m,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,mt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},mt.cache=function(z){return function(){return z.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(z,K,Me){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Oe=N({},z.props),ze=z.key;if(K!=null)for(ae in K.key!==void 0&&(ze=""+K.key),K)!A.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Oe[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Oe.children=Me;else if(1<ae){for(var Re=Array(ae),Ce=0;Ce<ae;Ce++)Re[Ce]=arguments[Ce+2];Oe.children=Re}return O(z.type,ze,Oe)},mt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},mt.createElement=function(z,K,Me){var Oe,ze={},ae=null;if(K!=null)for(Oe in K.key!==void 0&&(ae=""+K.key),K)A.call(K,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(ze[Oe]=K[Oe]);var Re=arguments.length-2;if(Re===1)ze.children=Me;else if(1<Re){for(var Ce=Array(Re),Be=0;Be<Re;Be++)Ce[Be]=arguments[Be+2];ze.children=Ce}if(z&&z.defaultProps)for(Oe in Re=z.defaultProps,Re)ze[Oe]===void 0&&(ze[Oe]=Re[Oe]);return O(z,ae,ze)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(z){return{$$typeof:p,render:z}},mt.isValidElement=k,mt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:le}},mt.memo=function(z,K){return{$$typeof:h,type:z,compare:K===void 0?null:K}},mt.startTransition=function(z){var K=F.T,Me={};F.T=Me;try{var Oe=z(),ze=F.S;ze!==null&&ze(Me,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(P,Se)}catch(ae){Se(ae)}finally{K!==null&&Me.types!==null&&(K.types=Me.types),F.T=K}},mt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},mt.use=function(z){return F.H.use(z)},mt.useActionState=function(z,K,Me){return F.H.useActionState(z,K,Me)},mt.useCallback=function(z,K){return F.H.useCallback(z,K)},mt.useContext=function(z){return F.H.useContext(z)},mt.useDebugValue=function(){},mt.useDeferredValue=function(z,K){return F.H.useDeferredValue(z,K)},mt.useEffect=function(z,K){return F.H.useEffect(z,K)},mt.useEffectEvent=function(z){return F.H.useEffectEvent(z)},mt.useId=function(){return F.H.useId()},mt.useImperativeHandle=function(z,K,Me){return F.H.useImperativeHandle(z,K,Me)},mt.useInsertionEffect=function(z,K){return F.H.useInsertionEffect(z,K)},mt.useLayoutEffect=function(z,K){return F.H.useLayoutEffect(z,K)},mt.useMemo=function(z,K){return F.H.useMemo(z,K)},mt.useOptimistic=function(z,K){return F.H.useOptimistic(z,K)},mt.useReducer=function(z,K,Me){return F.H.useReducer(z,K,Me)},mt.useRef=function(z){return F.H.useRef(z)},mt.useState=function(z){return F.H.useState(z)},mt.useSyncExternalStore=function(z,K,Me){return F.H.useSyncExternalStore(z,K,Me)},mt.useTransition=function(){return F.H.useTransition()},mt.version="19.2.8",mt}var av;function Wp(){return av||(av=1,Jd.exports=DE()),Jd.exports}var He=Wp();const g=wE(He);var eh={exports:{}},po={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function NE(){return sv||(sv=1,(function(a){function e(H,W){var le=H.length;H.push(W);e:for(;0<le;){var Se=le-1>>>1,De=H[Se];if(0<o(De,W))H[Se]=W,H[le]=De,le=Se;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var W=H[0],le=H.pop();if(le!==W){H[0]=le;e:for(var Se=0,De=H.length,z=De>>>1;Se<z;){var K=2*(Se+1)-1,Me=H[K],Oe=K+1,ze=H[Oe];if(0>o(Me,le))Oe<De&&0>o(ze,Me)?(H[Se]=ze,H[Oe]=le,Se=Oe):(H[Se]=Me,H[K]=le,Se=K);else if(Oe<De&&0>o(ze,le))H[Se]=ze,H[Oe]=le,Se=Oe;else break e}}return W}function o(H,W){var le=H.sortIndex-W.sortIndex;return le!==0?le:H.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();a.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,x=null,_=3,b=!1,R=!1,N=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function M(H){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=H)r(h),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(h)}}function I(H){if(N=!1,M(H),!R)if(n(m)!==null)R=!0,P||(P=!0,$());else{var W=n(h);W!==null&&ie(I,W.startTime-H)}}var P=!1,F=-1,A=5,O=-1;function Y(){return T?!0:!(a.unstable_now()-O<A)}function k(){if(T=!1,P){var H=a.unstable_now();O=H;var W=!0;try{e:{R=!1,N&&(N=!1,U(F),F=-1),b=!0;var le=_;try{t:{for(M(H),x=n(m);x!==null&&!(x.expirationTime>H&&Y());){var Se=x.callback;if(typeof Se=="function"){x.callback=null,_=x.priorityLevel;var De=Se(x.expirationTime<=H);if(H=a.unstable_now(),typeof De=="function"){x.callback=De,M(H),W=!0;break t}x===n(m)&&r(m),M(H)}else r(m);x=n(m)}if(x!==null)W=!0;else{var z=n(h);z!==null&&ie(I,z.startTime-H),W=!1}}break e}finally{x=null,_=le,b=!1}W=void 0}}finally{W?$():P=!1}}}var $;if(typeof L=="function")$=function(){L(k)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,me=ge.port2;ge.port1.onmessage=k,$=function(){me.postMessage(null)}}else $=function(){E(k,0)};function ie(H,W){F=E(function(){H(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var le=_;_=W;try{return H()}finally{_=le}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=_;_=H;try{return W()}finally{_=le}},a.unstable_scheduleCallback=function(H,W,le){var Se=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Se+le:Se):le=Se,H){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=le+De,H={id:v++,callback:W,priorityLevel:H,startTime:le,expirationTime:De,sortIndex:-1},le>Se?(H.sortIndex=le,e(h,H),n(m)===null&&H===n(h)&&(N?(U(F),F=-1):N=!0,ie(I,le-Se))):(H.sortIndex=De,e(m,H),R||b||(R=!0,P||(P=!0,$()))),H},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(H){var W=_;return function(){var le=_;_=W;try{return H.apply(this,arguments)}finally{_=le}}}})(nh)),nh}var rv;function UE(){return rv||(rv=1,th.exports=NE()),th.exports}var ih={exports:{}},ei={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function LE(){if(lv)return ei;lv=1;var a=Wp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ei.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},ei.flushSync=function(m){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=v,r.d.f()}},ei.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},ei.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ei.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:b}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ei.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},ei.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ei.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},ei.requestFormReset=function(m){r.d.r(m)},ei.unstable_batchedUpdates=function(m,h){return m(h)},ei.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},ei.useFormStatus=function(){return f.H.useHostTransitionStatus()},ei.version="19.2.8",ei}var ov;function OE(){if(ov)return ih.exports;ov=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ih.exports=LE(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function IE(){if(cv)return po;cv=1;var a=UE(),e=Wp(),n=OE();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),t;if(d===l)return m(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var S=!1,D=u.child;D;){if(D===s){S=!0,s=u,l=d;break}if(D===l){S=!0,l=u,s=d;break}D=D.sibling}if(!S){for(D=d.child;D;){if(D===s){S=!0,s=d,l=u;break}if(D===l){S=!0,l=d,s=u;break}D=D.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case E:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case M:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var ie=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Se=[],De=-1;function z(t){return{current:t}}function K(t){0>De||(t.current=Se[De],Se[De]=null,De--)}function Me(t,i){De++,Se[De]=t.current,t.current=i}var Oe=z(null),ze=z(null),ae=z(null),Re=z(null);function Ce(t,i){switch(Me(ae,i),Me(ze,t),Me(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?A_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=A_(i),t=R_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Oe),Me(Oe,t)}function Be(){K(Oe),K(ze),K(ae)}function at(t){t.memoizedState!==null&&Me(Re,t);var i=Oe.current,s=R_(i,t.type);i!==s&&(Me(ze,t),Me(Oe,s))}function et(t){ze.current===t&&(K(Oe),K(ze)),Re.current===t&&(K(Re),co._currentValue=le)}var Wt,ut;function pt(t){if(Wt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Wt=i&&i[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+ut}var dt=!1;function ht(t,i){if(!t||dt)return"";dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ye){var pe=ye}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ye){pe=ye}t.call(Te.prototype)}}else{try{throw Error()}catch(ye){pe=ye}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ye){if(ye&&pe&&typeof ye.stack=="string")return[ye.stack,pe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],D=d[1];if(S&&D){var V=S.split(`
`),ce=D.split(`
`);for(u=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(l===V.length||u===ce.length)for(l=V.length-1,u=ce.length-1;1<=l&&0<=u&&V[l]!==ce[u];)u--;for(;1<=l&&0<=u;l--,u--)if(V[l]!==ce[u]){if(l!==1||u!==1)do if(l--,u--,0>u||V[l]!==ce[u]){var Ee=`
`+V[l].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=l&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?pt(s):""}function Pt(t,i){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==i&&i!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return pt("Activity");default:return""}}function Ze(t){try{var i="",s=null;do i+=Pt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var _t=Object.prototype.hasOwnProperty,sn=a.unstable_scheduleCallback,zt=a.unstable_cancelCallback,cn=a.unstable_shouldYield,Q=a.unstable_requestPaint,Ot=a.unstable_now,ve=a.unstable_getCurrentPriorityLevel,C=a.unstable_ImmediatePriority,y=a.unstable_UserBlockingPriority,X=a.unstable_NormalPriority,q=a.unstable_LowPriority,J=a.unstable_IdlePriority,re=a.log,de=a.unstable_setDisableYieldValue,ee=null,se=null;function _e(t){if(typeof re=="function"&&de(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(ee,t)}catch{}}var Ne=Math.clz32?Math.clz32:Ye,Ie=Math.log,we=Math.LN2;function Ye(t){return t>>>=0,t===0?32:31-(Ie(t)/we|0)|0}var qe=256,st=262144,G=4194304;function Ue(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~d,l!==0?u=Ue(l):(S&=D,S!==0?u=Ue(S):s||(s=D&~t,s!==0&&(u=Ue(s))))):(D=l&~d,D!==0?u=Ue(D):S!==0?u=Ue(S):s||(s=l&~t,s!==0&&(u=Ue(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Pe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ke(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=G;return G<<=1,(G&62914560)===0&&(G=4194304),t}function $e(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rn(t,i,s,l,u,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,V=t.expirationTimes,ce=t.hiddenUpdates;for(s=S&~s;0<s;){var Ee=31-Ne(s),Te=1<<Ee;D[Ee]=0,V[Ee]=-1;var pe=ce[Ee];if(pe!==null)for(ce[Ee]=null,Ee=0;Ee<pe.length;Ee++){var ye=pe[Ee];ye!==null&&(ye.lane&=-536870913)}s&=~Te}l!==0&&It(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function It(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ne(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function jn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ne(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function ai(t,i){var s=i&-i;return s=(s&42)!==0?1:Bs(s),(s&(t.suspendedLanes|i))!==0?0:s}function Bs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qa(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Q_(t.type))}function ya(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var vi=Math.random().toString(36).slice(2),vn="__reactFiber$"+vi,An="__reactProps$"+vi,Xn="__reactContainer$"+vi,B="__reactEvents$"+vi,Le="__reactListeners$"+vi,tt="__reactHandles$"+vi,Ct="__reactResources$"+vi,Gt="__reactMarker$"+vi;function hn(t){delete t[vn],delete t[An],delete t[B],delete t[Le],delete t[tt]}function yn(t){var i=t[vn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Xn]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=O_(t);t!==null;){if(s=t[vn])return s;t=O_(t)}return i}t=s,s=t.parentNode}return null}function Sn(t){if(t=t[vn]||t[Xn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function na(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function $a(t){var i=t[Ct];return i||(i=t[Ct]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Rn(t){t[Gt]=!0}var ko=new Set,w={};function j(t,i){he(t,i),he(t+"Capture",i)}function he(t,i){for(w[t]=i,t=0;t<i.length;t++)ko.add(i[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},Ge={};function Ke(t){return _t.call(Ge,t)?!0:_t.call(fe,t)?!1:ue.test(t)?Ge[t]=!0:(fe[t]=!0,!1)}function Fe(t,i,s){if(Ke(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Qe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Bt(t){if(!t._valueTracker){var i=vt(t)?"checked":"value";t._valueTracker=it(t,i,""+t[i])}}function pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=vt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ln(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qt=/[\n"\\]/g;function Zt(t){return t.replace(qt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xe(t,i,s,l,u,d,S,D){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?bt(t,S,rt(i)):s!=null?bt(t,S,rt(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function Jn(t,i,s,l,u,d,S,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Bt(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Bt(t)}function bt(t,i,s){i==="number"&&ln(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function On(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function yi(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function Wi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ie(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Bt(t)}function xi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Kt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Yi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&mn(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&mn(t,d,i[d])}function Yt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fs(t){return ja.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function xa(){}var Ku=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,vr=null;function Tm(t){var i=Sn(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Zt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[An]||null;if(!u)throw Error(r(90));Xe(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&pn(l)}break e;case"textarea":yi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&On(t,!!s.multiple,i,!1)}}}var $u=!1;function Am(t,i,s){if($u)return t(i,s);$u=!0;try{var l=t(i);return l}finally{if($u=!1,(_r!==null||vr!==null)&&(Cc(),_r&&(i=_r,t=vr,vr=_r=null,Tm(i),t)))for(i=0;i<t.length;i++)Tm(t[i])}}function Al(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(Sa)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{ju=!1}var Ja=null,Ju=null,Go=null;function Rm(){if(Go)return Go;var t,i=Ju,s=i.length,l,u="value"in Ja?Ja.value:Ja.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===u[d-l];l++);return Go=u.slice(t,1<l?1-l:void 0)}function Vo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Cm(){return!1}function ci(t){function i(s,l,u,d,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xo:Cm,this.isPropagationStopped=Cm,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=ci(Hs),Cl=x({},Hs,{view:0,detail:0}),Rx=ci(Cl),ef,tf,wl,Yo=x({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wl&&(wl&&t.type==="mousemove"?(ef=t.screenX-wl.screenX,tf=t.screenY-wl.screenY):tf=ef=0,wl=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),wm=ci(Yo),Cx=x({},Yo,{dataTransfer:0}),wx=ci(Cx),Dx=x({},Cl,{relatedTarget:0}),nf=ci(Dx),Nx=x({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=ci(Nx),Lx=x({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=ci(Lx),Ix=x({},Hs,{data:0}),Dm=ci(Ix),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Bx[t])?!!i[t]:!1}function af(){return Fx}var Hx=x({},Cl,{key:function(t){if(t.key){var i=Px[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=ci(Hx),Gx=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=ci(Gx),Vx=x({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Xx=ci(Vx),Wx=x({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=ci(Wx),qx=x({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=ci(qx),Kx=x({},Hs,{newState:0,oldState:0}),Qx=ci(Kx),$x=[9,13,27,32],sf=Sa&&"CompositionEvent"in window,Dl=null;Sa&&"documentMode"in document&&(Dl=document.documentMode);var jx=Sa&&"TextEvent"in window&&!Dl,Um=Sa&&(!sf||Dl&&8<Dl&&11>=Dl),Lm=" ",Om=!1;function Im(t,i){switch(t){case"keyup":return $x.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Jx(t,i){switch(t){case"compositionend":return Pm(i);case"keypress":return i.which!==32?null:(Om=!0,Lm);case"textInput":return t=i.data,t===Lm&&Om?null:t;default:return null}}function eS(t,i){if(yr)return t==="compositionend"||!sf&&Im(t,i)?(t=Rm(),Go=Ju=Ja=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Um&&i.locale!=="ko"?null:i.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!tS[t.type]:i==="textarea"}function Bm(t,i,s,l){_r?vr?vr.push(l):vr=[l]:_r=l,i=Ic(i,"onChange"),0<i.length&&(s=new Wo("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Nl=null,Ul=null;function nS(t){x_(t,0)}function qo(t){var i=na(t);if(pn(i))return t}function Fm(t,i){if(t==="change")return i}var Hm=!1;if(Sa){var rf;if(Sa){var lf="oninput"in document;if(!lf){var km=document.createElement("div");km.setAttribute("oninput","return;"),lf=typeof km.oninput=="function"}rf=lf}else rf=!1;Hm=rf&&(!document.documentMode||9<document.documentMode)}function Gm(){Nl&&(Nl.detachEvent("onpropertychange",Vm),Ul=Nl=null)}function Vm(t){if(t.propertyName==="value"&&qo(Ul)){var i=[];Bm(i,Ul,t,Qu(t)),Am(nS,i)}}function iS(t,i,s){t==="focusin"?(Gm(),Nl=i,Ul=s,Nl.attachEvent("onpropertychange",Vm)):t==="focusout"&&Gm()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Ul)}function sS(t,i){if(t==="click")return qo(i)}function rS(t,i){if(t==="input"||t==="change")return qo(i)}function lS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Si=typeof Object.is=="function"?Object.is:lS;function Ll(t,i){if(Si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!_t.call(i,u)||!Si(t[u],i[u]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,i){var s=Xm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Xm(s)}}function Ym(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ym(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ln(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ln(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var oS=Sa&&"documentMode"in document&&11>=document.documentMode,xr=null,cf=null,Ol=null,uf=!1;function Zm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uf||xr==null||xr!==ln(l)||(l=xr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Ll(Ol,l)||(Ol=l,l=Ic(cf,"onSelect"),0<l.length&&(i=new Wo("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=xr)))}function ks(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Sr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},ff={},Km={};Sa&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Gs(t){if(ff[t])return ff[t];if(!Sr[t])return t;var i=Sr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Km)return ff[t]=i[s];return t}var Qm=Gs("animationend"),$m=Gs("animationiteration"),jm=Gs("animationstart"),cS=Gs("transitionrun"),uS=Gs("transitionstart"),fS=Gs("transitioncancel"),Jm=Gs("transitionend"),e0=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");df.push("scrollEnd");function qi(t,i){e0.set(t,i),j(i,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Li=[],Er=0,hf=0;function Ko(){for(var t=Er,i=hf=Er=0;i<t;){var s=Li[i];Li[i++]=null;var l=Li[i];Li[i++]=null;var u=Li[i];Li[i++]=null;var d=Li[i];if(Li[i++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}d!==0&&t0(s,u,d)}}function Qo(t,i,s,l){Li[Er++]=t,Li[Er++]=i,Li[Er++]=s,Li[Er++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function pf(t,i,s,l){return Qo(t,i,s,l),$o(t)}function Vs(t,i){return Qo(t,null,null,i),$o(t)}function t0(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ne(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function $o(t){if(50<no)throw no=0,Md=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function dS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,i,s,l){return new dS(t,i,s,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ea(t,i){var s=t.alternate;return s===null?(s=Ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function n0(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function jo(t,i,s,l,u,d){var S=0;if(l=t,typeof t=="function")mf(t)&&(S=1);else if(typeof t=="string")S=_E(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Ei(31,s,i,u),t.elementType=O,t.lanes=d,t;case N:return Xs(s.children,u,d,i);case T:S=8,u|=24;break;case E:return t=Ei(12,s,i,u|2),t.elementType=E,t.lanes=d,t;case I:return t=Ei(13,s,i,u),t.elementType=I,t.lanes=d,t;case P:return t=Ei(19,s,i,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case U:S=9;break e;case M:S=11;break e;case F:S=14;break e;case A:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Ei(S,s,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function Xs(t,i,s,l){return t=Ei(7,t,l,i),t.lanes=s,t}function gf(t,i,s){return t=Ei(6,t,null,i),t.lanes=s,t}function i0(t){var i=Ei(18,null,null,0);return i.stateNode=t,i}function _f(t,i,s){return i=Ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var a0=new WeakMap;function Oi(t,i){if(typeof t=="object"&&t!==null){var s=a0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ze(i)},a0.set(t,i),i)}return{value:t,source:i,stack:Ze(i)}}var br=[],Tr=0,Jo=null,Il=0,Ii=[],Pi=0,es=null,aa=1,sa="";function Ma(t,i){br[Tr++]=Il,br[Tr++]=Jo,Jo=t,Il=i}function s0(t,i,s){Ii[Pi++]=aa,Ii[Pi++]=sa,Ii[Pi++]=es,es=t;var l=aa;t=sa;var u=32-Ne(l)-1;l&=~(1<<u),s+=1;var d=32-Ne(i)+u;if(30<d){var S=u-u%5;d=(l&(1<<S)-1).toString(32),l>>=S,u-=S,aa=1<<32-Ne(i)+u|s<<u|l,sa=d+t}else aa=1<<d|s<<u|l,sa=t}function vf(t){t.return!==null&&(Ma(t,1),s0(t,1,0))}function yf(t){for(;t===Jo;)Jo=br[--Tr],br[Tr]=null,Il=br[--Tr],br[Tr]=null;for(;t===es;)es=Ii[--Pi],Ii[Pi]=null,sa=Ii[--Pi],Ii[Pi]=null,aa=Ii[--Pi],Ii[Pi]=null}function r0(t,i){Ii[Pi++]=aa,Ii[Pi++]=sa,Ii[Pi++]=es,aa=i.id,sa=i.overflow,es=t}var Wn=null,un=null,Nt=!1,ts=null,zi=!1,xf=Error(r(519));function ns(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(Oi(i,t)),xf}function l0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[vn]=t,i[An]=l,s){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(s=0;s<ao.length;s++)At(ao[s],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":At("invalid",i),Jn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":At("invalid",i);break;case"textarea":At("invalid",i),Wi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b_(i.textContent,s)?(l.popover!=null&&(At("beforetoggle",i),At("toggle",i)),l.onScroll!=null&&At("scroll",i),l.onScrollEnd!=null&&At("scrollend",i),l.onClick!=null&&(i.onclick=xa),i=!0):i=!1,i||ns(t,!0)}function o0(t){for(Wn=t.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Wn=Wn.return}}function Ar(t){if(t!==Wn)return!1;if(!Nt)return o0(t),Nt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Bd(t.type,t.memoizedProps)),s=!s),s&&un&&ns(t),o0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=L_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=L_(t)}else i===27?(i=un,gs(t.type)?(t=Vd,Vd=null,un=t):un=i):un=Wn?Fi(t.stateNode.nextSibling):null;return!0}function Ws(){un=Wn=null,Nt=!1}function Sf(){var t=ts;return t!==null&&(hi===null?hi=t:hi.push.apply(hi,t),ts=null),t}function Pl(t){ts===null?ts=[t]:ts.push(t)}var Ef=z(null),Ys=null,ba=null;function is(t,i,s){Me(Ef,i._currentValue),i._currentValue=s}function Ta(t){t._currentValue=Ef.current,K(Ef)}function Mf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function bf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var V=0;V<i.length;V++)if(D.context===i[V]){d.lanes|=s,D=d.alternate,D!==null&&(D.lanes|=s),Mf(d.return,s,t),l||(S=null);break e}d=D.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),Mf(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Rr(t,i,s,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var D=u.type;Si(u.pendingProps.value,S.value)||(t!==null?t.push(D):t=[D])}}else if(u===Re.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}u=u.return}t!==null&&bf(i,t,s,l),i.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!Si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qs(t){Ys=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yn(t){return c0(Ys,t)}function tc(t,i){return Ys===null&&qs(t),c0(t,i)}function c0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ba===null){if(t===null)throw Error(r(308));ba=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ba=ba.next=i;return s}var hS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},pS=a.unstable_scheduleCallback,mS=a.unstable_NormalPriority,Cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new hS,data:new Map,refCount:0}}function zl(t){t.refCount--,t.refCount===0&&pS(mS,function(){t.controller.abort()})}var Bl=null,Af=0,Cr=0,wr=null;function gS(t,i){if(Bl===null){var s=Bl=[];Af=0,Cr=wd(),wr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Af++,i.then(u0,u0),i}function u0(){if(--Af===0&&Bl!==null){wr!==null&&(wr.status="fulfilled");var t=Bl;Bl=null,Cr=0,wr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function _S(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var f0=H.S;H.S=function(t,i){Zg=Ot(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gS(t,i),f0!==null&&f0(t,i)};var Zs=z(null);function Rf(){var t=Zs.current;return t!==null?t:on.pooledCache}function nc(t,i){i===null?Me(Zs,Zs.current):Me(Zs,i.pool)}function d0(){var t=Rf();return t===null?null:{parent:Cn._currentValue,pool:t}}var Dr=Error(r(460)),Cf=Error(r(474)),ic=Error(r(542)),ac={then:function(){}};function h0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function p0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(xa,xa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,g0(t),t;default:if(typeof i.status=="string")i.then(xa,xa);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,g0(t),t}throw Qs=i,Dr}}function Ks(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,Dr):s}}var Qs=null;function m0(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function g0(t){if(t===Dr||t===ic)throw Error(r(483))}var Nr=null,Fl=0;function sc(t){var i=Fl;return Fl+=1,Nr===null&&(Nr=[]),p0(Nr,t,i)}function Hl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function rc(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function _0(t){function i(ne,Z){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Z],ne.flags|=16):oe.push(Z)}}function s(ne,Z){if(!t)return null;for(;Z!==null;)i(ne,Z),Z=Z.sibling;return null}function l(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=Ea(ne,Z),ne.index=0,ne.sibling=null,ne}function d(ne,Z,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Z?(ne.flags|=67108866,Z):oe):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function S(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,Z,oe,be){return Z===null||Z.tag!==6?(Z=gf(oe,ne.mode,be),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function V(ne,Z,oe,be){var lt=oe.type;return lt===N?Ee(ne,Z,oe.props.children,be,oe.key):Z!==null&&(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Ks(lt)===Z.type)?(Z=u(Z,oe.props),Hl(Z,oe),Z.return=ne,Z):(Z=jo(oe.type,oe.key,oe.props,null,ne.mode,be),Hl(Z,oe),Z.return=ne,Z)}function ce(ne,Z,oe,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=_f(oe,ne.mode,be),Z.return=ne,Z):(Z=u(Z,oe.children||[]),Z.return=ne,Z)}function Ee(ne,Z,oe,be,lt){return Z===null||Z.tag!==7?(Z=Xs(oe,ne.mode,be,lt),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function Te(ne,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=gf(""+Z,ne.mode,oe),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return oe=jo(Z.type,Z.key,Z.props,null,ne.mode,oe),Hl(oe,Z),oe.return=ne,oe;case R:return Z=_f(Z,ne.mode,oe),Z.return=ne,Z;case A:return Z=Ks(Z),Te(ne,Z,oe)}if(ie(Z)||$(Z))return Z=Xs(Z,ne.mode,oe,null),Z.return=ne,Z;if(typeof Z.then=="function")return Te(ne,sc(Z),oe);if(Z.$$typeof===L)return Te(ne,tc(ne,Z),oe);rc(ne,Z)}return null}function pe(ne,Z,oe,be){var lt=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return lt!==null?null:D(ne,Z,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:return oe.key===lt?V(ne,Z,oe,be):null;case R:return oe.key===lt?ce(ne,Z,oe,be):null;case A:return oe=Ks(oe),pe(ne,Z,oe,be)}if(ie(oe)||$(oe))return lt!==null?null:Ee(ne,Z,oe,be,null);if(typeof oe.then=="function")return pe(ne,Z,sc(oe),be);if(oe.$$typeof===L)return pe(ne,Z,tc(ne,oe),be);rc(ne,oe)}return null}function ye(ne,Z,oe,be,lt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ne=ne.get(oe)||null,D(Z,ne,""+be,lt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return ne=ne.get(be.key===null?oe:be.key)||null,V(Z,ne,be,lt);case R:return ne=ne.get(be.key===null?oe:be.key)||null,ce(Z,ne,be,lt);case A:return be=Ks(be),ye(ne,Z,oe,be,lt)}if(ie(be)||$(be))return ne=ne.get(oe)||null,Ee(Z,ne,be,lt,null);if(typeof be.then=="function")return ye(ne,Z,oe,sc(be),lt);if(be.$$typeof===L)return ye(ne,Z,oe,tc(Z,be),lt);rc(Z,be)}return null}function Je(ne,Z,oe,be){for(var lt=null,Ft=null,nt=Z,xt=Z=0,Dt=null;nt!==null&&xt<oe.length;xt++){nt.index>xt?(Dt=nt,nt=null):Dt=nt.sibling;var Ht=pe(ne,nt,oe[xt],be);if(Ht===null){nt===null&&(nt=Dt);break}t&&nt&&Ht.alternate===null&&i(ne,nt),Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht,nt=Dt}if(xt===oe.length)return s(ne,nt),Nt&&Ma(ne,xt),lt;if(nt===null){for(;xt<oe.length;xt++)nt=Te(ne,oe[xt],be),nt!==null&&(Z=d(nt,Z,xt),Ft===null?lt=nt:Ft.sibling=nt,Ft=nt);return Nt&&Ma(ne,xt),lt}for(nt=l(nt);xt<oe.length;xt++)Dt=ye(nt,ne,xt,oe[xt],be),Dt!==null&&(t&&Dt.alternate!==null&&nt.delete(Dt.key===null?xt:Dt.key),Z=d(Dt,Z,xt),Ft===null?lt=Dt:Ft.sibling=Dt,Ft=Dt);return t&&nt.forEach(function(Ss){return i(ne,Ss)}),Nt&&Ma(ne,xt),lt}function ct(ne,Z,oe,be){if(oe==null)throw Error(r(151));for(var lt=null,Ft=null,nt=Z,xt=Z=0,Dt=null,Ht=oe.next();nt!==null&&!Ht.done;xt++,Ht=oe.next()){nt.index>xt?(Dt=nt,nt=null):Dt=nt.sibling;var Ss=pe(ne,nt,Ht.value,be);if(Ss===null){nt===null&&(nt=Dt);break}t&&nt&&Ss.alternate===null&&i(ne,nt),Z=d(Ss,Z,xt),Ft===null?lt=Ss:Ft.sibling=Ss,Ft=Ss,nt=Dt}if(Ht.done)return s(ne,nt),Nt&&Ma(ne,xt),lt;if(nt===null){for(;!Ht.done;xt++,Ht=oe.next())Ht=Te(ne,Ht.value,be),Ht!==null&&(Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht);return Nt&&Ma(ne,xt),lt}for(nt=l(nt);!Ht.done;xt++,Ht=oe.next())Ht=ye(nt,ne,xt,Ht.value,be),Ht!==null&&(t&&Ht.alternate!==null&&nt.delete(Ht.key===null?xt:Ht.key),Z=d(Ht,Z,xt),Ft===null?lt=Ht:Ft.sibling=Ht,Ft=Ht);return t&&nt.forEach(function(CE){return i(ne,CE)}),Nt&&Ma(ne,xt),lt}function nn(ne,Z,oe,be){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:e:{for(var lt=oe.key;Z!==null;){if(Z.key===lt){if(lt=oe.type,lt===N){if(Z.tag===7){s(ne,Z.sibling),be=u(Z,oe.props.children),be.return=ne,ne=be;break e}}else if(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Ks(lt)===Z.type){s(ne,Z.sibling),be=u(Z,oe.props),Hl(be,oe),be.return=ne,ne=be;break e}s(ne,Z);break}else i(ne,Z);Z=Z.sibling}oe.type===N?(be=Xs(oe.props.children,ne.mode,be,oe.key),be.return=ne,ne=be):(be=jo(oe.type,oe.key,oe.props,null,ne.mode,be),Hl(be,oe),be.return=ne,ne=be)}return S(ne);case R:e:{for(lt=oe.key;Z!==null;){if(Z.key===lt)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){s(ne,Z.sibling),be=u(Z,oe.children||[]),be.return=ne,ne=be;break e}else{s(ne,Z);break}else i(ne,Z);Z=Z.sibling}be=_f(oe,ne.mode,be),be.return=ne,ne=be}return S(ne);case A:return oe=Ks(oe),nn(ne,Z,oe,be)}if(ie(oe))return Je(ne,Z,oe,be);if($(oe)){if(lt=$(oe),typeof lt!="function")throw Error(r(150));return oe=lt.call(oe),ct(ne,Z,oe,be)}if(typeof oe.then=="function")return nn(ne,Z,sc(oe),be);if(oe.$$typeof===L)return nn(ne,Z,tc(ne,oe),be);rc(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(s(ne,Z.sibling),be=u(Z,oe),be.return=ne,ne=be):(s(ne,Z),be=gf(oe,ne.mode,be),be.return=ne,ne=be),S(ne)):s(ne,Z)}return function(ne,Z,oe,be){try{Fl=0;var lt=nn(ne,Z,oe,be);return Nr=null,lt}catch(nt){if(nt===Dr||nt===ic)throw nt;var Ft=Ei(29,nt,null,ne.mode);return Ft.lanes=be,Ft.return=ne,Ft}finally{}}}var $s=_0(!0),v0=_0(!1),as=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rs(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Vt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=$o(t),t0(t,null,s),i}return Qo(t,l,i,s),$o(t)}function kl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,jn(t,s)}}function Nf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Uf=!1;function Gl(){if(Uf){var t=wr;if(t!==null)throw t}}function Vl(t,i,s,l){Uf=!1;var u=t.updateQueue;as=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var V=D,ce=V.next;V.next=null,S===null?d=ce:S.next=ce,S=V;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,D=Ee.lastBaseUpdate,D!==S&&(D===null?Ee.firstBaseUpdate=ce:D.next=ce,Ee.lastBaseUpdate=V))}if(d!==null){var Te=u.baseState;S=0,Ee=ce=V=null,D=d;do{var pe=D.lane&-536870913,ye=pe!==D.lane;if(ye?(wt&pe)===pe:(l&pe)===pe){pe!==0&&pe===Cr&&(Uf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Je=t,ct=D;pe=i;var nn=s;switch(ct.tag){case 1:if(Je=ct.payload,typeof Je=="function"){Te=Je.call(nn,Te,pe);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ct.payload,pe=typeof Je=="function"?Je.call(nn,Te,pe):Je,pe==null)break e;Te=x({},Te,pe);break e;case 2:as=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[pe]:ye.push(pe))}else ye={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ee===null?(ce=Ee=ye,V=Te):Ee=Ee.next=ye,S|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Ee===null&&(V=Te),u.baseState=V,u.firstBaseUpdate=ce,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),fs|=S,t.lanes=S,t.memoizedState=Te}}function y0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function x0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)y0(s[t],i)}var Ur=z(null),lc=z(0);function S0(t,i){t=Oa,Me(lc,t),Me(Ur,i),Oa=t|i.baseLanes}function Lf(){Me(lc,Oa),Me(Ur,Ur.current)}function Of(){Oa=lc.current,K(Ur),K(lc)}var Mi=z(null),Bi=null;function ls(t){var i=t.alternate;Me(bn,bn.current&1),Me(Mi,t),Bi===null&&(i===null||Ur.current!==null||i.memoizedState!==null)&&(Bi=t)}function If(t){Me(bn,bn.current),Me(Mi,t),Bi===null&&(Bi=t)}function E0(t){t.tag===22?(Me(bn,bn.current),Me(Mi,t),Bi===null&&(Bi=t)):os()}function os(){Me(bn,bn.current),Me(Mi,Mi.current)}function bi(t){K(Mi),Bi===t&&(Bi=null),K(bn)}var bn=z(0);function oc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||kd(s)||Gd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Aa=0,yt=null,en=null,wn=null,cc=!1,Lr=!1,js=!1,uc=0,Xl=0,Or=null,vS=0;function En(){throw Error(r(321))}function Pf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Si(t[s],i[s]))return!1;return!0}function zf(t,i,s,l,u,d){return Aa=d,yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?sg:jf,js=!1,d=s(l,u),js=!1,Lr&&(d=b0(i,s,l,u)),M0(t),d}function M0(t){H.H=ql;var i=en!==null&&en.next!==null;if(Aa=0,wn=en=yt=null,cc=!1,Xl=0,Or=null,i)throw Error(r(300));t===null||Dn||(t=t.dependencies,t!==null&&ec(t)&&(Dn=!0))}function b0(t,i,s,l){yt=t;var u=0;do{if(Lr&&(Or=null),Xl=0,Lr=!1,25<=u)throw Error(r(301));if(u+=1,wn=en=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=rg,d=i(s,l)}while(Lr);return d}function yS(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?Wl(i):i,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(yt.flags|=1024),i}function Bf(){var t=uc!==0;return uc=0,t}function Ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Hf(t){if(cc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}cc=!1}Aa=0,wn=en=yt=null,Lr=!1,Xl=uc=0,Or=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?yt.memoizedState=wn=t:wn=wn.next=t,wn}function Tn(){if(en===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=wn===null?yt.memoizedState:wn.next;if(i!==null)wn=i,en=t;else{if(t===null)throw yt.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},wn===null?yt.memoizedState=wn=t:wn=wn.next=t}return wn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(t){var i=Xl;return Xl+=1,Or===null&&(Or=[]),t=p0(Or,t,i),i=yt,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?sg:jf),t}function dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wl(t);if(t.$$typeof===L)return Yn(t)}throw Error(r(438,String(t)))}function kf(t){var i=null,s=yt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=yt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=fc(),yt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=Y;return i.index++,s}function Ra(t,i){return typeof i=="function"?i(t):i}function hc(t){var i=Tn();return Gf(i,en,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var D=S=null,V=null,ce=i,Ee=!1;do{var Te=ce.lane&-536870913;if(Te!==ce.lane?(wt&Te)===Te:(Aa&Te)===Te){var pe=ce.revertLane;if(pe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Te===Cr&&(Ee=!0);else if((Aa&pe)===pe){ce=ce.next,pe===Cr&&(Ee=!0);continue}else Te={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(D=V=Te,S=d):V=V.next=Te,yt.lanes|=pe,fs|=pe;Te=ce.action,js&&s(d,Te),d=ce.hasEagerState?ce.eagerState:s(d,Te)}else pe={lane:Te,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(D=V=pe,S=d):V=V.next=pe,yt.lanes|=Te,fs|=Te;ce=ce.next}while(ce!==null&&ce!==i);if(V===null?S=d:V.next=D,!Si(d,t.memoizedState)&&(Dn=!0,Ee&&(s=wr,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=V,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=Tn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Si(d,i.memoizedState)||(Dn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function T0(t,i,s){var l=yt,u=Tn(),d=Nt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!Si((en||u).memoizedState,s);if(S&&(u.memoizedState=s,Dn=!0),u=u.queue,Yf(C0.bind(null,l,u,t),[t]),u.getSnapshot!==i||S||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},R0.bind(null,l,u,s,i),null),on===null)throw Error(r(349));d||(Aa&127)!==0||A0(l,i,s)}return s}function A0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=yt.updateQueue,i===null?(i=fc(),yt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function R0(t,i,s,l){i.value=s,i.getSnapshot=l,w0(i)&&D0(t)}function C0(t,i,s){return s(function(){w0(i)&&D0(t)})}function w0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Si(t,s)}catch{return!0}}function D0(t){var i=Vs(t,2);i!==null&&pi(i,t,2)}function Xf(t){var i=si();if(typeof t=="function"){var s=t;if(t=s(),js){_e(!0);try{s()}finally{_e(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i}function N0(t,i,s,l){return t.baseState=s,Gf(t,en,typeof l=="function"?l:Ra)}function xS(t,i,s,l,u){if(gc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};H.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,U0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function U0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=H.T,S={};H.T=S;try{var D=s(u,l),V=H.S;V!==null&&V(S,D),L0(t,i,D)}catch(ce){Wf(t,i,ce)}finally{d!==null&&S.types!==null&&(d.types=S.types),H.T=d}}else try{d=s(u,l),L0(t,i,d)}catch(ce){Wf(t,i,ce)}}function L0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){O0(t,i,l)},function(l){return Wf(t,i,l)}):O0(t,i,s)}function O0(t,i,s){i.status="fulfilled",i.value=s,I0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,U0(t,s)))}function Wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,I0(i),i=i.next;while(i!==l)}t.action=null}function I0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function P0(t,i){return i}function z0(t,i){if(Nt){var s=on.formState;if(s!==null){e:{var l=yt;if(Nt){if(un){t:{for(var u=un,d=zi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Fi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){un=Fi(u.nextSibling),l=u.data==="F!";break e}}ns(l)}l=!1}l&&(i=s[0])}}return s=si(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:i},s.queue=l,s=ng.bind(null,yt,l),l.dispatch=s,l=Xf(!1),d=$f.bind(null,yt,!1,l.queue),l=si(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=xS.bind(null,yt,u,d,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function B0(t){var i=Tn();return F0(i,en,t)}function F0(t,i,s){if(i=Gf(t,i,P0)[0],t=hc(Ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Wl(i)}catch(S){throw S===Dr?ic:S}else l=i;i=Tn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(yt.flags|=2048,Ir(9,{destroy:void 0},SS.bind(null,u,s),null)),[l,d,t]}function SS(t,i){t.action=i}function H0(t){var i=Tn(),s=en;if(s!==null)return F0(i,s,t);Tn(),i=i.memoizedState,s=Tn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ir(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=yt.updateQueue,i===null&&(i=fc(),yt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function k0(){return Tn().memoizedState}function pc(t,i,s,l){var u=si();yt.flags|=t,u.memoizedState=Ir(1|i,{destroy:void 0},s,l===void 0?null:l)}function mc(t,i,s,l){var u=Tn();l=l===void 0?null:l;var d=u.memoizedState.inst;en!==null&&l!==null&&Pf(l,en.memoizedState.deps)?u.memoizedState=Ir(i,d,s,l):(yt.flags|=t,u.memoizedState=Ir(1|i,d,s,l))}function G0(t,i){pc(8390656,8,t,i)}function Yf(t,i){mc(2048,8,t,i)}function ES(t){yt.flags|=4;var i=yt.updateQueue;if(i===null)i=fc(),yt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function V0(t){var i=Tn().memoizedState;return ES({ref:i,nextImpl:t}),function(){if((Vt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function X0(t,i){return mc(4,2,t,i)}function W0(t,i){return mc(4,4,t,i)}function Y0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function q0(t,i,s){s=s!=null?s.concat([t]):null,mc(4,4,Y0.bind(null,i,t),s)}function qf(){}function Z0(t,i){var s=Tn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function K0(t,i){var s=Tn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pf(i,l[1]))return l[0];if(l=t(),js){_e(!0);try{t()}finally{_e(!1)}}return s.memoizedState=[l,i],l}function Zf(t,i,s){return s===void 0||(Aa&1073741824)!==0&&(wt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Qg(),yt.lanes|=t,fs|=t,s)}function Q0(t,i,s,l){return Si(s,i)?s:Ur.current!==null?(t=Zf(t,s,l),Si(t,i)||(Dn=!0),t):(Aa&42)===0||(Aa&1073741824)!==0&&(wt&261930)===0?(Dn=!0,t.memoizedState=s):(t=Qg(),yt.lanes|=t,fs|=t,i)}function $0(t,i,s,l,u){var d=W.p;W.p=d!==0&&8>d?d:8;var S=H.T,D={};H.T=D,$f(t,!1,i,s);try{var V=u(),ce=H.S;if(ce!==null&&ce(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Ee=_S(V,l);Yl(t,i,Ee,Ri(t))}else Yl(t,i,l,Ri(t))}catch(Te){Yl(t,i,{then:function(){},status:"rejected",reason:Te},Ri())}finally{W.p=d,S!==null&&D.types!==null&&(S.types=D.types),H.T=S}}function MS(){}function Kf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=j0(t).queue;$0(t,u,i,le,s===null?MS:function(){return J0(t),s(l)})}function j0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:le},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function J0(t){var i=j0(t);i.next===null&&(i=t.alternate.memoizedState),Yl(t,i.next.queue,{},Ri())}function Qf(){return Yn(co)}function eg(){return Tn().memoizedState}function tg(){return Tn().memoizedState}function bS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ri();t=ss(s);var l=rs(i,t,s);l!==null&&(pi(l,i,s),kl(l,i,s)),i={cache:Tf()},t.payload=i;return}i=i.return}}function TS(t,i,s){var l=Ri();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gc(t)?ig(i,s):(s=pf(t,i,s,l),s!==null&&(pi(s,t,l),ag(s,i,l)))}function ng(t,i,s){var l=Ri();Yl(t,i,s,l)}function Yl(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(gc(t))ig(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,D=d(S,s);if(u.hasEagerState=!0,u.eagerState=D,Si(D,S))return Qo(t,i,u,0),on===null&&Ko(),!1}catch{}finally{}if(s=pf(t,i,u,l),s!==null)return pi(s,t,l),ag(s,i,l),!0}return!1}function $f(t,i,s,l){if(l={lane:2,revertLane:wd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(i)throw Error(r(479))}else i=pf(t,s,l,2),i!==null&&pi(i,t,2)}function gc(t){var i=t.alternate;return t===yt||i!==null&&i===yt}function ig(t,i){Lr=cc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ag(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,jn(t,s)}}var ql={readContext:Yn,use:dc,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En};ql.useEffectEvent=En;var sg={readContext:Yn,use:dc,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:G0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,pc(4194308,4,Y0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return pc(4194308,4,t,i)},useInsertionEffect:function(t,i){pc(4,2,t,i)},useMemo:function(t,i){var s=si();i=i===void 0?null:i;var l=t();if(js){_e(!0);try{t()}finally{_e(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=si();if(s!==void 0){var u=s(i);if(js){_e(!0);try{s(i)}finally{_e(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=TS.bind(null,yt,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:function(t){t=Xf(t);var i=t.queue,s=ng.bind(null,yt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=si();return Zf(s,t,i)},useTransition:function(){var t=Xf(!1);return t=$0.bind(null,yt,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=yt,u=si();if(Nt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),on===null)throw Error(r(349));(wt&127)!==0||A0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,G0(C0.bind(null,l,d,t),[t]),l.flags|=2048,Ir(9,{destroy:void 0},R0.bind(null,l,d,s,i),null),s},useId:function(){var t=si(),i=on.identifierPrefix;if(Nt){var s=sa,l=aa;s=(l&~(1<<32-Ne(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=uc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=vS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Qf,useFormState:z0,useActionState:z0,useOptimistic:function(t){var i=si();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=$f.bind(null,yt,!0,s),s.dispatch=i,[t,i]},useMemoCache:kf,useCacheRefresh:function(){return si().memoizedState=bS.bind(null,yt)},useEffectEvent:function(t){var i=si(),s={impl:t};return i.memoizedState=s,function(){if((Vt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},jf={readContext:Yn,use:dc,useCallback:Z0,useContext:Yn,useEffect:Yf,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:K0,useReducer:hc,useRef:k0,useState:function(){return hc(Ra)},useDebugValue:qf,useDeferredValue:function(t,i){var s=Tn();return Q0(s,en.memoizedState,t,i)},useTransition:function(){var t=hc(Ra)[0],i=Tn().memoizedState;return[typeof t=="boolean"?t:Wl(t),i]},useSyncExternalStore:T0,useId:eg,useHostTransitionStatus:Qf,useFormState:B0,useActionState:B0,useOptimistic:function(t,i){var s=Tn();return N0(s,en,t,i)},useMemoCache:kf,useCacheRefresh:tg};jf.useEffectEvent=V0;var rg={readContext:Yn,use:dc,useCallback:Z0,useContext:Yn,useEffect:Yf,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:W0,useMemo:K0,useReducer:Vf,useRef:k0,useState:function(){return Vf(Ra)},useDebugValue:qf,useDeferredValue:function(t,i){var s=Tn();return en===null?Zf(s,t,i):Q0(s,en.memoizedState,t,i)},useTransition:function(){var t=Vf(Ra)[0],i=Tn().memoizedState;return[typeof t=="boolean"?t:Wl(t),i]},useSyncExternalStore:T0,useId:eg,useHostTransitionStatus:Qf,useFormState:H0,useActionState:H0,useOptimistic:function(t,i){var s=Tn();return en!==null?N0(s,en,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:kf,useCacheRefresh:tg};rg.useEffectEvent=V0;function Jf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:x({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ed={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ri(),u=ss(l);u.payload=i,s!=null&&(u.callback=s),i=rs(t,u,l),i!==null&&(pi(i,t,l),kl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ri(),u=ss(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=rs(t,u,l),i!==null&&(pi(i,t,l),kl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ri(),l=ss(s);l.tag=2,i!=null&&(l.callback=i),i=rs(t,l,s),i!==null&&(pi(i,t,s),kl(i,t,s))}};function lg(t,i,s,l,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Ll(s,l)||!Ll(u,d):!0}function og(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ed.enqueueReplaceState(i,i.state,null)}function Js(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=x({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function cg(t){Zo(t)}function ug(t){console.error(t)}function fg(t){Zo(t)}function _c(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function dg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function td(t,i,s){return s=ss(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(t,i)},s}function hg(t){return t=ss(t),t.tag=3,t}function pg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){dg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){dg(i,s,l),typeof u!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function AS(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,u,!0),s=Mi.current,s!==null){switch(s.tag){case 31:case 13:return Bi===null?wc():s.alternate===null&&Mn===0&&(Mn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Ad(t,l,u)),!1;case 22:return s.flags|=65536,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Ad(t,l,u)),!1}throw Error(r(435,s.tag))}return Ad(t,l,u),wc(),!1}if(Nt)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==xf&&(t=Error(r(422),{cause:l}),Pl(Oi(t,s)))):(l!==xf&&(i=Error(r(423),{cause:l}),Pl(Oi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=Oi(l,s),u=td(t.stateNode,l,u),Nf(t,u),Mn!==4&&(Mn=2)),!1;var d=Error(r(520),{cause:l});if(d=Oi(d,s),to===null?to=[d]:to.push(d),Mn!==4&&(Mn=2),i===null)return!0;l=Oi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=td(s.stateNode,l,t),Nf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ds===null||!ds.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=hg(u),pg(u,t,s,l),Nf(s,u),!1}s=s.return}while(s!==null);return!1}var nd=Error(r(461)),Dn=!1;function qn(t,i,s,l){i.child=t===null?v0(i,null,s,l):$s(i,t.child,s,l)}function mg(t,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var D in l)D!=="ref"&&(S[D]=l[D])}else S=l;return qs(i),l=zf(t,i,s,S,d,u),D=Bf(),t!==null&&!Dn?(Ff(t,i,u),Ca(t,i,u)):(Nt&&D&&vf(i),i.flags|=1,qn(t,i,l,u),i.child)}function gg(t,i,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!mf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,_g(t,i,d,l,u)):(t=jo(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!ud(t,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ll,s(S,l)&&t.ref===i.ref)return Ca(t,i,u)}return i.flags|=1,t=Ea(d,l),t.ref=i.ref,t.return=i,i.child=t}function _g(t,i,s,l,u){if(t!==null){var d=t.memoizedProps;if(Ll(d,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=d,ud(t,u))(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Ca(t,i,u)}return id(t,i,s,l,u)}function vg(t,i,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return yg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(i,d!==null?d.cachePool:null),d!==null?S0(i,d):Lf(),E0(i);else return l=i.lanes=536870912,yg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(nc(i,d.cachePool),S0(i,d),os(),i.memoizedState=null):(t!==null&&nc(i,null),Lf(),os());return qn(t,i,u,s),i.child}function Zl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function yg(t,i,s,l,u){var d=Rf();return d=d===null?null:{parent:Cn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&nc(i,null),Lf(),E0(i),t!==null&&Rr(t,i,l,!0),i.childLanes=u,null}function vc(t,i){return i=xc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function xg(t,i,s){return $s(i,t.child,null,s),t=vc(i,i.pendingProps),t.flags|=2,bi(i),i.memoizedState=null,t}function RS(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=vc(i,l),i.lanes=536870912,Zl(null,t);if(If(i),(t=un)?(t=U_(t,zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=i0(t),s.return=i,i.child=s,Wn=i,un=null)):t=null,t===null)throw ns(i);return i.lanes=536870912,null}return vc(i,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(If(i),u)if(i.flags&256)i.flags&=-257,i=xg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(Dn||Rr(t,i,s,!1),u=(s&t.childLanes)!==0,Dn||u){if(l=on,l!==null&&(S=ai(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Vs(t,S),pi(l,t,S),nd;wc(),i=xg(t,i,s)}else t=d.treeContext,un=Fi(S.nextSibling),Wn=i,Nt=!0,ts=null,zi=!1,t!==null&&r0(i,t),i=vc(i,l),i.flags|=4096;return i}return t=Ea(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function yc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function id(t,i,s,l,u){return qs(i),s=zf(t,i,s,l,void 0,u),l=Bf(),t!==null&&!Dn?(Ff(t,i,u),Ca(t,i,u)):(Nt&&l&&vf(i),i.flags|=1,qn(t,i,s,u),i.child)}function Sg(t,i,s,l,u,d){return qs(i),i.updateQueue=null,s=b0(i,l,s,u),M0(t),l=Bf(),t!==null&&!Dn?(Ff(t,i,d),Ca(t,i,d)):(Nt&&l&&vf(i),i.flags|=1,qn(t,i,s,d),i.child)}function Eg(t,i,s,l,u){if(qs(i),i.stateNode===null){var d=Mr,S=s.contextType;typeof S=="object"&&S!==null&&(d=Yn(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},wf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Yn(S):Mr,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Jf(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&ed.enqueueReplaceState(d,d.state,null),Vl(i,l,d,u),Gl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var D=i.memoizedProps,V=Js(s,D);d.props=V;var ce=d.context,Ee=s.contextType;S=Mr,typeof Ee=="object"&&Ee!==null&&(S=Yn(Ee));var Te=s.getDerivedStateFromProps;Ee=typeof Te=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||ce!==S)&&og(i,d,l,S),as=!1;var pe=i.memoizedState;d.state=pe,Vl(i,l,d,u),Gl(),ce=i.memoizedState,D||pe!==ce||as?(typeof Te=="function"&&(Jf(i,s,Te,l),ce=i.memoizedState),(V=as||lg(i,s,V,l,pe,ce,S))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Df(t,i),S=i.memoizedProps,Ee=Js(s,S),d.props=Ee,Te=i.pendingProps,pe=d.context,ce=s.contextType,V=Mr,typeof ce=="object"&&ce!==null&&(V=Yn(ce)),D=s.getDerivedStateFromProps,(ce=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Te||pe!==V)&&og(i,d,l,V),as=!1,pe=i.memoizedState,d.state=pe,Vl(i,l,d,u),Gl();var ye=i.memoizedState;S!==Te||pe!==ye||as||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof D=="function"&&(Jf(i,s,D,l),ye=i.memoizedState),(Ee=as||lg(i,s,Ee,l,pe,ye,V)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(ce||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ye,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ye,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ye),d.props=l,d.state=ye,d.context=V,l=Ee):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,yc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=$s(i,t.child,null,u),i.child=$s(i,null,s,u)):qn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=Ca(t,i,u),t}function Mg(t,i,s,l){return Ws(),i.flags|=256,qn(t,i,s,l),i.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(t){return{baseLanes:t,cachePool:d0()}}function rd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ai),t}function bg(t,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Nt){if(u?ls(i):os(),(t=un)?(t=U_(t,zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=i0(t),s.return=i,i.child=s,Wn=i,un=null)):t=null,t===null)throw ns(i);return Gd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,u?(os(),u=i.mode,D=xc({mode:"hidden",children:D},u),l=Xs(l,u,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=sd(s),l.childLanes=rd(t,S,s),i.memoizedState=ad,Zl(null,l)):(ls(i),ld(i,D))}var V=t.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(d)i.flags&256?(ls(i),i.flags&=-257,i=od(t,i,s)):i.memoizedState!==null?(os(),i.child=t.child,i.flags|=128,i=null):(os(),D=l.fallback,u=i.mode,l=xc({mode:"visible",children:l.children},u),D=Xs(D,u,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,$s(i,t.child,null,s),l=i.child,l.memoizedState=sd(s),l.childLanes=rd(t,S,s),i.memoizedState=ad,i=Zl(null,l));else if(ls(i),Gd(D)){if(S=D.nextSibling&&D.nextSibling.dataset,S)var ce=S.dgst;S=ce,l=Error(r(419)),l.stack="",l.digest=S,Pl({value:l,source:null,stack:null}),i=od(t,i,s)}else if(Dn||Rr(t,i,s,!1),S=(s&t.childLanes)!==0,Dn||S){if(S=on,S!==null&&(l=ai(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Vs(t,l),pi(S,t,l),nd;kd(D)||wc(),i=od(t,i,s)}else kd(D)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,un=Fi(D.nextSibling),Wn=i,Nt=!0,ts=null,zi=!1,t!==null&&r0(i,t),i=ld(i,l.children),i.flags|=4096);return i}return u?(os(),D=l.fallback,u=i.mode,V=t.child,ce=V.sibling,l=Ea(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ce!==null?D=Ea(ce,D):(D=Xs(D,u,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,Zl(null,l),l=i.child,D=t.child.memoizedState,D===null?D=sd(s):(u=D.cachePool,u!==null?(V=Cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=d0(),D={baseLanes:D.baseLanes|s,cachePool:u}),l.memoizedState=D,l.childLanes=rd(t,S,s),i.memoizedState=ad,Zl(t.child,l)):(ls(i),s=t.child,t=s.sibling,s=Ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function ld(t,i){return i=xc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function xc(t,i){return t=Ei(22,t,null,i),t.lanes=0,t}function od(t,i,s){return $s(i,t.child,null,s),t=ld(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Tg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mf(t.return,i,s)}function cd(t,i,s,l,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function Ag(t,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var S=bn.current,D=(S&2)!==0;if(D?(S=S&1|2,i.flags|=128):S&=1,Me(bn,S),qn(t,i,l,s),l=Nt?Il:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,s,i);else if(t.tag===19)Tg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&oc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),cd(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&oc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}cd(i,!0,s,null,d,l);break;case"together":cd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ca(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),fs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=Ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function CS(t,i,s){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),is(i,Cn,t.memoizedState.cache),Ws();break;case 27:case 5:at(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:is(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,If(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ls(i),i.flags|=128,null):(s&i.child.childLanes)!==0?bg(t,i,s):(ls(i),t=Ca(t,i,s),t!==null?t.sibling:null);ls(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Rr(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return Ag(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(bn,bn.current),l)break;return null;case 22:return i.lanes=0,vg(t,i,s,i.pendingProps);case 24:is(i,Cn,t.memoizedState.cache)}return Ca(t,i,s)}function Rg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Dn=!0;else{if(!ud(t,s)&&(i.flags&128)===0)return Dn=!1,CS(t,i,s);Dn=(t.flags&131072)!==0}else Dn=!1,Nt&&(i.flags&1048576)!==0&&s0(i,Il,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ks(i.elementType),i.type=t,typeof t=="function")mf(t)?(l=Js(t,l),i.tag=1,i=Eg(null,i,t,l,s)):(i.tag=0,i=id(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===M){i.tag=11,i=mg(null,i,t,l,s);break e}else if(u===F){i.tag=14,i=gg(null,i,t,l,s);break e}}throw i=me(t)||t,Error(r(306,i,""))}}return i;case 0:return id(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Js(l,i.pendingProps),Eg(t,i,l,u,s);case 3:e:{if(Ce(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Df(t,i),Vl(i,l,null,s);var S=i.memoizedState;if(l=S.cache,is(i,Cn,l),l!==d.cache&&bf(i,[Cn],s,!0),Gl(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Mg(t,i,l,s);break e}else if(l!==u){u=Oi(Error(r(424)),i),Pl(u),i=Mg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(un=Fi(t.firstChild),Wn=i,Nt=!0,ts=null,zi=!0,s=v0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ws(),l===u){i=Ca(t,i,s);break e}qn(t,i,l,s)}i=i.child}return i;case 26:return yc(t,i),t===null?(s=B_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,t=i.pendingProps,l=Pc(ae.current).createElement(s),l[vn]=i,l[An]=t,Zn(l,s,t),Rn(l),i.stateNode=l):i.memoizedState=B_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return at(i),t===null&&Nt&&(l=i.stateNode=I_(i.type,i.pendingProps,ae.current),Wn=i,zi=!0,u=un,gs(i.type)?(Vd=u,un=Fi(l.firstChild)):un=u),qn(t,i,i.pendingProps.children,s),yc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Nt&&((u=l=un)&&(l=aE(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,Wn=i,un=Fi(l.firstChild),zi=!1,u=!0):u=!1),u||ns(i)),at(i),u=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,Bd(u,d)?l=null:S!==null&&Bd(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=zf(t,i,yS,null,null,s),co._currentValue=u),yc(t,i),qn(t,i,l,s),i.child;case 6:return t===null&&Nt&&((t=s=un)&&(s=sE(s,i.pendingProps,zi),s!==null?(i.stateNode=s,Wn=i,un=null,t=!0):t=!1),t||ns(i)),null;case 13:return bg(t,i,s);case 4:return Ce(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=$s(i,null,l,s):qn(t,i,l,s),i.child;case 11:return mg(t,i,i.type,i.pendingProps,s);case 7:return qn(t,i,i.pendingProps,s),i.child;case 8:return qn(t,i,i.pendingProps.children,s),i.child;case 12:return qn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,is(i,i.type,l.value),qn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,qs(i),u=Yn(u),l=l(u),i.flags|=1,qn(t,i,l,s),i.child;case 14:return gg(t,i,i.type,i.pendingProps,s);case 15:return _g(t,i,i.type,i.pendingProps,s);case 19:return Ag(t,i,s);case 31:return RS(t,i,s);case 22:return vg(t,i,s,i.pendingProps);case 24:return qs(i),l=Yn(Cn),t===null?(u=Rf(),u===null&&(u=on,d=Tf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},wf(i),is(i,Cn,u)):((t.lanes&s)!==0&&(Df(t,i),Vl(i,null,null,s),Gl()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),is(i,Cn,l)):(l=d.cache,is(i,Cn,l),l!==u.cache&&bf(i,[Cn],s,!0))),qn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function wa(t){t.flags|=4}function fd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e_())t.flags|=8192;else throw Qs=ac,Cf}else t.flags&=-16777217}function Cg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V_(i))if(e_())t.flags|=8192;else throw Qs=ac,Cf}function Sc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ae():536870912,t.lanes|=i,Fr|=i)}function Kl(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function wS(t,i,s){var l=i.pendingProps;switch(yf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return fn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ta(Cn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ar(i)?wa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sf())),fn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(wa(i),d!==null?(fn(i),Cg(i,d)):(fn(i),fd(i,u,null,l,s))):d?d!==t.memoizedState?(wa(i),fn(i),Cg(i,d)):(fn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&wa(i),fn(i),fd(i,u,t,l,s)),null;case 27:if(et(i),s=ae.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&wa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return fn(i),null}t=Oe.current,Ar(i)?l0(i):(t=I_(u,l,s),i.stateNode=t,wa(i))}return fn(i),null;case 5:if(et(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&wa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return fn(i),null}if(d=Oe.current,Ar(i))l0(i);else{var S=Pc(ae.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(u,{is:l.is}):S.createElement(u)}}d[vn]=i,d[An]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;e:switch(Zn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&wa(i)}}return fn(i),fd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&wa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ae.current,Ar(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=Wn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[vn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b_(t.nodeValue,s)),t||ns(i,!0)}else t=Pc(t).createTextNode(l),t[vn]=i,i.stateNode=t}return fn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ar(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[vn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),t=!1}else s=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(bi(i),i):(bi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return fn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ar(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[vn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),u=!1}else u=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(bi(i),i):(bi(i),null)}return bi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Sc(i,i.updateQueue),fn(i),null);case 4:return Be(),t===null&&Ld(i.stateNode.containerInfo),fn(i),null;case 10:return Ta(i.type),fn(i),null;case 19:if(K(bn),l=i.memoizedState,l===null)return fn(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Kl(l,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=oc(t),d!==null){for(i.flags|=128,Kl(l,!1),t=d.updateQueue,i.updateQueue=t,Sc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)n0(s,t),s=s.sibling;return Me(bn,bn.current&1|2),Nt&&Ma(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Ot()>Ac&&(i.flags|=128,u=!0,Kl(l,!1),i.lanes=4194304)}else{if(!u)if(t=oc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,Sc(i,t),Kl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Nt)return fn(i),null}else 2*Ot()-l.renderingStartTime>Ac&&s!==536870912&&(i.flags|=128,u=!0,Kl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ot(),t.sibling=null,s=bn.current,Me(bn,u?s&1|2:s&1),Nt&&Ma(i,l.treeForkCount),t):(fn(i),null);case 22:case 23:return bi(i),Of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),s=i.updateQueue,s!==null&&Sc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&K(Zs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ta(Cn),fn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function DS(t,i){switch(yf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ta(Cn),Be(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return et(i),null;case 31:if(i.memoizedState!==null){if(bi(i),i.alternate===null)throw Error(r(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(bi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(bn),null;case 4:return Be(),null;case 10:return Ta(i.type),null;case 22:case 23:return bi(i),Of(),t!==null&&K(Zs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ta(Cn),null;case 25:return null;default:return null}}function wg(t,i){switch(yf(i),i.tag){case 3:Ta(Cn),Be();break;case 26:case 27:case 5:et(i);break;case 4:Be();break;case 31:i.memoizedState!==null&&bi(i);break;case 13:bi(i);break;case 19:K(bn);break;case 10:Ta(i.type);break;case 22:case 23:bi(i),Of(),t!==null&&K(Zs);break;case 24:Ta(Cn)}}function Ql(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==u)}}catch(D){$t(i,i.return,D)}}function cs(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var S=l.inst,D=S.destroy;if(D!==void 0){S.destroy=void 0,u=i;var V=s,ce=D;try{ce()}catch(Ee){$t(u,V,Ee)}}}l=l.next}while(l!==d)}}catch(Ee){$t(i,i.return,Ee)}}function Dg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{x0(i,s)}catch(l){$t(t,t.return,l)}}}function Ng(t,i,s){s.props=Js(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){$t(t,i,l)}}function $l(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){$t(t,i,u)}}function ra(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){$t(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){$t(t,i,u)}else s.current=null}function Ug(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){$t(t,t.return,u)}}function dd(t,i,s){try{var l=t.stateNode;jS(l,t.type,s,i),l[An]=i}catch(u){$t(t,t.return,u)}}function Lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gs(t.type)||t.tag===4}function hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(l===27&&gs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(pd(t,i,s),t=t.sibling;t!==null;)pd(t,i,s),t=t.sibling}function Ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&gs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,i,s),t=t.sibling;t!==null;)Ec(t,i,s),t=t.sibling}function Og(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Zn(i,l,s),i[vn]=t,i[An]=s}catch(d){$t(t,t.return,d)}}var Da=!1,Nn=!1,md=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function NS(t,i){if(t=t.containerInfo,Pd=Vc,t=qm(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,D=-1,V=-1,ce=0,Ee=0,Te=t,pe=null;t:for(;;){for(var ye;Te!==s||u!==0&&Te.nodeType!==3||(D=S+u),Te!==d||l!==0&&Te.nodeType!==3||(V=S+l),Te.nodeType===3&&(S+=Te.nodeValue.length),(ye=Te.firstChild)!==null;)pe=Te,Te=ye;for(;;){if(Te===t)break t;if(pe===s&&++ce===u&&(D=S),pe===d&&++Ee===l&&(V=S),(ye=Te.nextSibling)!==null)break;Te=pe,pe=Te.parentNode}Te=ye}s=D===-1||V===-1?null:{start:D,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(zd={focusedElem:t,selectionRange:s},Vc=!1,Fn=i;Fn!==null;)if(i=Fn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fn=t;else for(;Fn!==null;){switch(i=Fn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Je=Js(s.type,u);t=l.getSnapshotBeforeUpdate(Je,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){$t(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Hd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Fn=t;break}Fn=i.return}}function Pg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ua(t,s),l&4&&Ql(5,s);break;case 1:if(Ua(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){$t(s,s.return,S)}else{var u=Js(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){$t(s,s.return,S)}}l&64&&Dg(s),l&512&&$l(s,s.return);break;case 3:if(Ua(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{x0(t,i)}catch(S){$t(s,s.return,S)}}break;case 27:i===null&&l&4&&Og(s);case 26:case 5:Ua(t,s),i===null&&l&4&&Ug(s),l&512&&$l(s,s.return);break;case 12:Ua(t,s);break;case 31:Ua(t,s),l&4&&Fg(t,s);break;case 13:Ua(t,s),l&4&&Hg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=HS.bind(null,s),rE(t,s))));break;case 22:if(l=s.memoizedState!==null||Da,!l){i=i!==null&&i.memoizedState!==null||Nn,u=Da;var d=Nn;Da=l,(Nn=i)&&!d?La(t,s,(s.subtreeFlags&8772)!==0):Ua(t,s),Da=u,Nn=d}break;case 30:break;default:Ua(t,s)}}function zg(t){var i=t.alternate;i!==null&&(t.alternate=null,zg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&hn(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,ui=!1;function Na(t,i,s){for(s=s.child;s!==null;)Bg(t,i,s),s=s.sibling}function Bg(t,i,s){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ee,s)}catch{}switch(s.tag){case 26:Nn||ra(s,i),Na(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Nn||ra(s,i);var l=gn,u=ui;gs(s.type)&&(gn=s.stateNode,ui=!1),Na(t,i,s),ro(s.stateNode),gn=l,ui=u;break;case 5:Nn||ra(s,i);case 6:if(l=gn,u=ui,gn=null,Na(t,i,s),gn=l,ui=u,gn!==null)if(ui)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(d){$t(s,i,d)}else try{gn.removeChild(s.stateNode)}catch(d){$t(s,i,d)}break;case 18:gn!==null&&(ui?(t=gn,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),qr(t)):D_(gn,s.stateNode));break;case 4:l=gn,u=ui,gn=s.stateNode.containerInfo,ui=!0,Na(t,i,s),gn=l,ui=u;break;case 0:case 11:case 14:case 15:cs(2,s,i),Nn||cs(4,s,i),Na(t,i,s);break;case 1:Nn||(ra(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ng(s,i,l)),Na(t,i,s);break;case 21:Na(t,i,s);break;case 22:Nn=(l=Nn)||s.memoizedState!==null,Na(t,i,s),Nn=l;break;default:Na(t,i,s)}}function Fg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(s){$t(i,i.return,s)}}}function Hg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(s){$t(i,i.return,s)}}function US(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Ig),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Ig),i;default:throw Error(r(435,t.tag))}}function Mc(t,i){var s=US(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=kS.bind(null,t,l);l.then(u,u)}})}function fi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,S=i,D=S;e:for(;D!==null;){switch(D.tag){case 27:if(gs(D.type)){gn=D.stateNode,ui=!1;break e}break;case 5:gn=D.stateNode,ui=!1;break e;case 3:case 4:gn=D.stateNode.containerInfo,ui=!0;break e}D=D.return}if(gn===null)throw Error(r(160));Bg(d,S,u),gn=null,ui=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)kg(i,t),i=i.sibling}var Zi=null;function kg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fi(i,t),di(t),l&4&&(cs(3,t,t.return),Ql(3,t),cs(5,t,t.return));break;case 1:fi(i,t),di(t),l&512&&(Nn||s===null||ra(s,s.return)),l&64&&Da&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Zi;if(fi(i,t),di(t),l&512&&(Nn||s===null||ra(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Gt]||d[vn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Zn(d,l,s),d[vn]=t,Rn(d),l=d;break e;case"link":var S=k_("link","href",u).get(l+(s.href||""));if(S){for(var D=0;D<S.length;D++)if(d=S[D],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(D,1);break t}}d=u.createElement(l),Zn(d,l,s),u.head.appendChild(d);break;case"meta":if(S=k_("meta","content",u).get(l+(s.content||""))){for(D=0;D<S.length;D++)if(d=S[D],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(D,1);break t}}d=u.createElement(l),Zn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[vn]=t,Rn(d),l=d}t.stateNode=l}else G_(u,t.type,t.stateNode);else t.stateNode=H_(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?G_(u,t.type,t.stateNode):H_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&dd(t,t.memoizedProps,s.memoizedProps)}break;case 27:fi(i,t),di(t),l&512&&(Nn||s===null||ra(s,s.return)),s!==null&&l&4&&dd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(fi(i,t),di(t),l&512&&(Nn||s===null||ra(s,s.return)),t.flags&32){u=t.stateNode;try{xi(u,"")}catch(Je){$t(t,t.return,Je)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,dd(t,u,s!==null?s.memoizedProps:u)),l&1024&&(md=!0);break;case 6:if(fi(i,t),di(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Je){$t(t,t.return,Je)}}break;case 3:if(Fc=null,u=Zi,Zi=zc(i.containerInfo),fi(i,t),Zi=u,di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(i.containerInfo)}catch(Je){$t(t,t.return,Je)}md&&(md=!1,Gg(t));break;case 4:l=Zi,Zi=zc(t.stateNode.containerInfo),fi(i,t),di(t),Zi=l;break;case 12:fi(i,t),di(t);break;case 31:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 13:fi(i,t),di(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=Ot()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 22:u=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ce=Da,Ee=Nn;if(Da=ce||u,Nn=Ee||V,fi(i,t),Nn=Ee,Da=ce,di(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||V||Da||Nn||er(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{D=V.stateNode;var Te=V.memoizedProps.style,pe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Je){$t(V,V.return,Je)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Je){$t(V,V.return,Je)}}}else if(i.tag===18){if(s===null){V=i;try{var ye=V.stateNode;u?N_(ye,!0):N_(V.stateNode,!1)}catch(Je){$t(V,V.return,Je)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Mc(t,s))));break;case 19:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 30:break;case 21:break;default:fi(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Lg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=hd(t);Ec(t,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(xi(S,""),s.flags&=-33);var D=hd(t);Ec(t,D,S);break;case 3:case 4:var V=s.stateNode.containerInfo,ce=hd(t);pd(t,ce,V);break;default:throw Error(r(161))}}catch(Ee){$t(t,t.return,Ee)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Gg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Pg(t,i.alternate,i),i=i.sibling}function er(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:cs(4,i,i.return),er(i);break;case 1:ra(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ng(i,i.return,s),er(i);break;case 27:ro(i.stateNode);case 26:case 5:ra(i,i.return),er(i);break;case 22:i.memoizedState===null&&er(i);break;case 30:er(i);break;default:er(i)}t=t.sibling}}function La(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:La(u,d,s),Ql(4,d);break;case 1:if(La(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){$t(l,l.return,ce)}if(l=d,u=l.updateQueue,u!==null){var D=l.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)y0(V[u],D)}catch(ce){$t(l,l.return,ce)}}s&&S&64&&Dg(d),$l(d,d.return);break;case 27:Og(d);case 26:case 5:La(u,d,s),s&&l===null&&S&4&&Ug(d),$l(d,d.return);break;case 12:La(u,d,s);break;case 31:La(u,d,s),s&&S&4&&Fg(u,d);break;case 13:La(u,d,s),s&&S&4&&Hg(u,d);break;case 22:d.memoizedState===null&&La(u,d,s),$l(d,d.return);break;case 30:break;default:La(u,d,s)}i=i.sibling}}function gd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&zl(s))}function _d(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zl(t))}function Ki(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vg(t,i,s,l),i=i.sibling}function Vg(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ki(t,i,s,l),u&2048&&Ql(9,i);break;case 1:Ki(t,i,s,l);break;case 3:Ki(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zl(t)));break;case 12:if(u&2048){Ki(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,D=d.onPostCommit;typeof D=="function"&&D(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){$t(i,i.return,V)}}else Ki(t,i,s,l);break;case 31:Ki(t,i,s,l);break;case 13:Ki(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ki(t,i,s,l):jl(t,i):d._visibility&2?Ki(t,i,s,l):(d._visibility|=2,Pr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&gd(S,i);break;case 24:Ki(t,i,s,l),u&2048&&_d(i.alternate,i);break;default:Ki(t,i,s,l)}}function Pr(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,S=i,D=s,V=l,ce=S.flags;switch(S.tag){case 0:case 11:case 15:Pr(d,S,D,V,u),Ql(8,S);break;case 23:break;case 22:var Ee=S.stateNode;S.memoizedState!==null?Ee._visibility&2?Pr(d,S,D,V,u):jl(d,S):(Ee._visibility|=2,Pr(d,S,D,V,u)),u&&ce&2048&&gd(S.alternate,S);break;case 24:Pr(d,S,D,V,u),u&&ce&2048&&_d(S.alternate,S);break;default:Pr(d,S,D,V,u)}i=i.sibling}}function jl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:jl(s,l),u&2048&&gd(l.alternate,l);break;case 24:jl(s,l),u&2048&&_d(l.alternate,l);break;default:jl(s,l)}i=i.sibling}}var Jl=8192;function zr(t,i,s){if(t.subtreeFlags&Jl)for(t=t.child;t!==null;)Xg(t,i,s),t=t.sibling}function Xg(t,i,s){switch(t.tag){case 26:zr(t,i,s),t.flags&Jl&&t.memoizedState!==null&&vE(s,Zi,t.memoizedState,t.memoizedProps);break;case 5:zr(t,i,s);break;case 3:case 4:var l=Zi;Zi=zc(t.stateNode.containerInfo),zr(t,i,s),Zi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,zr(t,i,s),Jl=l):zr(t,i,s));break;default:zr(t,i,s)}}function Wg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function eo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Fn=l,qg(l,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&cs(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,bc(t)):eo(t);break;default:eo(t)}}function bc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Fn=l,qg(l,t)}Wg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:cs(8,i,i.return),bc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,bc(i));break;default:bc(i)}t=t.sibling}}function qg(t,i){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:cs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else e:for(s=t;Fn!==null;){l=Fn;var u=l.sibling,d=l.return;if(zg(l),l===s){Fn=null;break e}if(u!==null){u.return=d,Fn=u;break e}Fn=d}}}var LS={getCacheForType:function(t){var i=Yn(Cn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Yn(Cn).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,Vt=0,on=null,Tt=null,wt=0,Qt=0,Ti=null,us=!1,Br=!1,vd=!1,Oa=0,Mn=0,fs=0,tr=0,yd=0,Ai=0,Fr=0,to=null,hi=null,xd=!1,Tc=0,Zg=0,Ac=1/0,Rc=null,ds=null,In=0,hs=null,Hr=null,Ia=0,Sd=0,Ed=null,Kg=null,no=0,Md=null;function Ri(){return(Vt&2)!==0&&wt!==0?wt&-wt:H.T!==null?wd():Qa()}function Qg(){if(Ai===0)if((wt&536870912)===0||Nt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),Ai=t}else Ai=536870912;return t=Mi.current,t!==null&&(t.flags|=32),Ai}function pi(t,i,s){(t===on&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(kr(t,0),ps(t,wt,Ai,!1)),We(t,s),((Vt&2)===0||t!==on)&&(t===on&&((Vt&2)===0&&(tr|=s),Mn===4&&ps(t,wt,Ai,!1)),la(t))}function $g(t,i,s){if((Vt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Pe(t,i),u=l?zS(t,i):Td(t,i,!0),d=l;do{if(u===0){Br&&!l&&ps(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!IS(s)){u=Td(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var D=t;u=to;var V=D.current.memoizedState.isDehydrated;if(V&&(kr(D,S).flags|=256),S=Td(D,S,!1),S!==2){if(vd&&!V){D.errorRecoveryDisabledLanes|=d,tr|=d,u=4;break e}d=hi,hi=u,d!==null&&(hi===null?hi=d:hi.push.apply(hi,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){kr(t,0),ps(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ps(l,i,Ai,!us);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Tc+300-Ot(),10<u)){if(ps(l,i,Ai,!us),xe(l,0,!0)!==0)break e;Ia=i,l.timeoutHandle=C_(jg.bind(null,l,s,hi,Rc,xd,i,Ai,tr,Fr,us,d,"Throttled",-0,0),u);break e}jg(l,s,hi,Rc,xd,i,Ai,tr,Fr,us,d,null,-0,0)}}break}while(!0);la(t)}function jg(t,i,s,l,u,d,S,D,V,ce,Ee,Te,pe,ye){if(t.timeoutHandle=-1,Te=i.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},Xg(i,d,Te);var Je=(d&62914560)===d?Tc-Ot():(d&4194048)===d?Zg-Ot():0;if(Je=yE(Te,Je),Je!==null){Ia=d,t.cancelPendingCommit=Je(r_.bind(null,t,i,d,s,l,u,S,D,V,Ee,Te,null,pe,ye)),ps(t,d,S,!ce);return}}r_(t,i,d,s,l,u,S,D,V)}function IS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!Si(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ps(t,i,s,l){i&=~yd,i&=~tr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-Ne(u),S=1<<d;l[d]=-1,u&=~S}s!==0&&It(t,s,i)}function Cc(){return(Vt&6)===0?(io(0),!1):!0}function bd(){if(Tt!==null){if(Qt===0)var t=Tt.return;else t=Tt,ba=Ys=null,Hf(t),Nr=null,Fl=0,t=Tt;for(;t!==null;)wg(t.alternate,t),t=t.return;Tt=null}}function kr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,tE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ia=0,bd(),on=t,Tt=s=Ea(t.current,null),wt=i,Qt=0,Ti=null,us=!1,Br=Pe(t,i),vd=!1,Fr=Ai=yd=tr=fs=Mn=0,hi=to=null,xd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Ne(l),d=1<<u;i|=t[u],l&=~d}return Oa=i,Ko(),s}function Jg(t,i){yt=null,H.H=ql,i===Dr||i===ic?(i=m0(),Qt=3):i===Cf?(i=m0(),Qt=4):Qt=i===nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,Tt===null&&(Mn=1,_c(t,Oi(i,t.current)))}function e_(){var t=Mi.current;return t===null?!0:(wt&4194048)===wt?Bi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===Bi:!1}function t_(){var t=H.H;return H.H=ql,t===null?ql:t}function n_(){var t=H.A;return H.A=LS,t}function wc(){Mn=4,us||(wt&4194048)!==wt&&Mi.current!==null||(Br=!0),(fs&134217727)===0&&(tr&134217727)===0||on===null||ps(on,wt,Ai,!1)}function Td(t,i,s){var l=Vt;Vt|=2;var u=t_(),d=n_();(on!==t||wt!==i)&&(Rc=null,kr(t,i)),i=!1;var S=Mn;e:do try{if(Qt!==0&&Tt!==null){var D=Tt,V=Ti;switch(Qt){case 8:bd(),S=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var ce=Qt;if(Qt=0,Ti=null,Gr(t,D,V,ce),s&&Br){S=0;break e}break;default:ce=Qt,Qt=0,Ti=null,Gr(t,D,V,ce)}}PS(),S=Mn;break}catch(Ee){Jg(t,Ee)}while(!0);return i&&t.shellSuspendCounter++,ba=Ys=null,Vt=l,H.H=u,H.A=d,Tt===null&&(on=null,wt=0,Ko()),S}function PS(){for(;Tt!==null;)i_(Tt)}function zS(t,i){var s=Vt;Vt|=2;var l=t_(),u=n_();on!==t||wt!==i?(Rc=null,Ac=Ot()+500,kr(t,i)):Br=Pe(t,i);e:do try{if(Qt!==0&&Tt!==null){i=Tt;var d=Ti;t:switch(Qt){case 1:Qt=0,Ti=null,Gr(t,i,d,1);break;case 2:case 9:if(h0(d)){Qt=0,Ti=null,a_(i);break}i=function(){Qt!==2&&Qt!==9||on!==t||(Qt=7),la(t)},d.then(i,i);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:h0(d)?(Qt=0,Ti=null,a_(i)):(Qt=0,Ti=null,Gr(t,i,d,7));break;case 5:var S=null;switch(Tt.tag){case 26:S=Tt.memoizedState;case 5:case 27:var D=Tt;if(S?V_(S):D.stateNode.complete){Qt=0,Ti=null;var V=D.sibling;if(V!==null)Tt=V;else{var ce=D.return;ce!==null?(Tt=ce,Dc(ce)):Tt=null}break t}}Qt=0,Ti=null,Gr(t,i,d,5);break;case 6:Qt=0,Ti=null,Gr(t,i,d,6);break;case 8:bd(),Mn=6;break e;default:throw Error(r(462))}}BS();break}catch(Ee){Jg(t,Ee)}while(!0);return ba=Ys=null,H.H=l,H.A=u,Vt=s,Tt!==null?0:(on=null,wt=0,Ko(),Mn)}function BS(){for(;Tt!==null&&!cn();)i_(Tt)}function i_(t){var i=Rg(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,i===null?Dc(t):Tt=i}function a_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Sg(s,i,i.pendingProps,i.type,void 0,wt);break;case 11:i=Sg(s,i,i.pendingProps,i.type.render,i.ref,wt);break;case 5:Hf(i);default:wg(s,i),i=Tt=n0(i,Oa),i=Rg(s,i,Oa)}t.memoizedProps=t.pendingProps,i===null?Dc(t):Tt=i}function Gr(t,i,s,l){ba=Ys=null,Hf(i),Nr=null,Fl=0;var u=i.return;try{if(AS(t,u,i,s,wt)){Mn=1,_c(t,Oi(s,t.current)),Tt=null;return}}catch(d){if(u!==null)throw Tt=u,d;Mn=1,_c(t,Oi(s,t.current)),Tt=null;return}i.flags&32768?(Nt||l===1?t=!0:Br||(wt&536870912)!==0?t=!1:(us=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),s_(i,t)):Dc(i)}function Dc(t){var i=t;do{if((i.flags&32768)!==0){s_(i,us);return}t=i.return;var s=wS(i.alternate,i,Oa);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);Mn===0&&(Mn=5)}function s_(t,i){do{var s=DS(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);Mn=6,Tt=null}function r_(t,i,s,l,u,d,S,D,V){t.cancelPendingCommit=null;do Nc();while(In!==0);if((Vt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=hf,rn(t,s,d,S,D,V),t===on&&(Tt=on=null,wt=0),Hr=i,hs=t,Ia=s,Sd=d,Ed=u,Kg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,GS(X,function(){return f_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,u=W.p,W.p=2,S=Vt,Vt|=4;try{NS(t,i,s)}finally{Vt=S,W.p=u,H.T=l}}In=1,l_(),o_(),c_()}}function l_(){if(In===1){In=0;var t=hs,i=Hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=W.p;W.p=2;var u=Vt;Vt|=4;try{kg(i,t);var d=zd,S=qm(t.containerInfo),D=d.focusedElem,V=d.selectionRange;if(S!==D&&D&&D.ownerDocument&&Ym(D.ownerDocument.documentElement,D)){if(V!==null&&of(D)){var ce=V.start,Ee=V.end;if(Ee===void 0&&(Ee=ce),"selectionStart"in D)D.selectionStart=ce,D.selectionEnd=Math.min(Ee,D.value.length);else{var Te=D.ownerDocument||document,pe=Te&&Te.defaultView||window;if(pe.getSelection){var ye=pe.getSelection(),Je=D.textContent.length,ct=Math.min(V.start,Je),nn=V.end===void 0?ct:Math.min(V.end,Je);!ye.extend&&ct>nn&&(S=nn,nn=ct,ct=S);var ne=Wm(D,ct),Z=Wm(D,nn);if(ne&&Z&&(ye.rangeCount!==1||ye.anchorNode!==ne.node||ye.anchorOffset!==ne.offset||ye.focusNode!==Z.node||ye.focusOffset!==Z.offset)){var oe=Te.createRange();oe.setStart(ne.node,ne.offset),ye.removeAllRanges(),ct>nn?(ye.addRange(oe),ye.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),ye.addRange(oe))}}}}for(Te=[],ye=D;ye=ye.parentNode;)ye.nodeType===1&&Te.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Te.length;D++){var be=Te[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Vc=!!Pd,zd=Pd=null}finally{Vt=u,W.p=l,H.T=s}}t.current=i,In=2}}function o_(){if(In===2){In=0;var t=hs,i=Hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=W.p;W.p=2;var u=Vt;Vt|=4;try{Pg(t,i.alternate,i)}finally{Vt=u,W.p=l,H.T=s}}In=3}}function c_(){if(In===4||In===3){In=0,Q();var t=hs,i=Hr,s=Ia,l=Kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?In=5:(In=0,Hr=hs=null,u_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ds=null),Ka(s),i=i.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,u=W.p,W.p=2,H.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var D=l[S];d(D.value,{componentStack:D.stack})}}finally{H.T=i,W.p=u}}(Ia&3)!==0&&Nc(),la(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Md?no++:(no=0,Md=t):no=0,io(0)}}function u_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,zl(i)))}function Nc(){return l_(),o_(),c_(),f_()}function f_(){if(In!==5)return!1;var t=hs,i=Sd;Sd=0;var s=Ka(Ia),l=H.T,u=W.p;try{W.p=32>s?32:s,H.T=null,s=Ed,Ed=null;var d=hs,S=Ia;if(In=0,Hr=hs=null,Ia=0,(Vt&6)!==0)throw Error(r(331));var D=Vt;if(Vt|=4,Yg(d.current),Vg(d,d.current,S,s),Vt=D,io(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ee,d)}catch{}return!0}finally{W.p=u,H.T=l,u_(t,i)}}function d_(t,i,s){i=Oi(s,i),i=td(t.stateNode,i,2),t=rs(t,i,2),t!==null&&(We(t,2),la(t))}function $t(t,i,s){if(t.tag===3)d_(t,t,s);else for(;i!==null;){if(i.tag===3){d_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ds===null||!ds.has(l))){t=Oi(s,t),s=hg(2),l=rs(i,s,2),l!==null&&(pg(s,l,i,t),We(l,2),la(l));break}}i=i.return}}function Ad(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new OS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(vd=!0,u.add(s),t=FS.bind(null,t,i,s),i.then(t,t))}function FS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,on===t&&(wt&s)===s&&(Mn===4||Mn===3&&(wt&62914560)===wt&&300>Ot()-Tc?(Vt&2)===0&&kr(t,0):yd|=s,Fr===wt&&(Fr=0)),la(t)}function h_(t,i){i===0&&(i=Ae()),t=Vs(t,i),t!==null&&(We(t,i),la(t))}function HS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),h_(t,s)}function kS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),h_(t,s)}function GS(t,i){return sn(t,i)}var Uc=null,Vr=null,Rd=!1,Lc=!1,Cd=!1,ms=0;function la(t){t!==Vr&&t.next===null&&(Vr===null?Uc=Vr=t:Vr=Vr.next=t),Lc=!0,Rd||(Rd=!0,XS())}function io(t,i){if(!Cd&&Lc){Cd=!0;do for(var s=!1,l=Uc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var S=l.suspendedLanes,D=l.pingedLanes;d=(1<<31-Ne(42|t)+1)-1,d&=u&~(S&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,__(l,d))}else d=wt,d=xe(l,l===on?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Pe(l,d)||(s=!0,__(l,d));l=l.next}while(s);Cd=!1}}function VS(){p_()}function p_(){Lc=Rd=!1;var t=0;ms!==0&&eE()&&(t=ms);for(var i=Ot(),s=null,l=Uc;l!==null;){var u=l.next,d=m_(l,i);d===0?(l.next=null,s===null?Uc=u:s.next=u,u===null&&(Vr=s)):(s=l,(t!==0||(d&3)!==0)&&(Lc=!0)),l=u}In!==0&&In!==5||io(t),ms!==0&&(ms=0)}function m_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Ne(d),D=1<<S,V=u[S];V===-1?((D&s)===0||(D&l)!==0)&&(u[S]=ke(D,i)):V<=i&&(t.expiredLanes|=D),d&=~D}if(i=on,s=wt,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&zt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&zt(l),Ka(s)){case 2:case 8:s=y;break;case 32:s=X;break;case 268435456:s=J;break;default:s=X}return l=g_.bind(null,t),s=sn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&zt(l),t.callbackPriority=2,t.callbackNode=null,2}function g_(t,i){if(In!==0&&In!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Nc()&&t.callbackNode!==s)return null;var l=wt;return l=xe(t,t===on?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($g(t,l,i),m_(t,Ot()),t.callbackNode!=null&&t.callbackNode===s?g_.bind(null,t):null)}function __(t,i){if(Nc())return null;$g(t,i,!0)}function XS(){nE(function(){(Vt&6)!==0?sn(C,VS):p_()})}function wd(){if(ms===0){var t=Cr;t===0&&(t=qe,qe<<=1,(qe&261888)===0&&(qe=256)),ms=t}return ms}function v_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fs(""+t)}function y_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function WS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=v_((u[An]||null).action),S=l.submitter;S&&(i=(i=S[An]||null)?v_(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var D=new Wo("action","action",null,l,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ms!==0){var V=S?y_(u,S):new FormData(u);Kf(s,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(D.preventDefault(),V=S?y_(u,S):new FormData(u),Kf(s,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Dd=0;Dd<df.length;Dd++){var Nd=df[Dd],YS=Nd.toLowerCase(),qS=Nd[0].toUpperCase()+Nd.slice(1);qi(YS,"on"+qS)}qi(Qm,"onAnimationEnd"),qi($m,"onAnimationIteration"),qi(jm,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(cS,"onTransitionRun"),qi(uS,"onTransitionStart"),qi(fS,"onTransitionCancel"),qi(Jm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function x_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var D=l[S],V=D.instance,ce=D.currentTarget;if(D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Zo(Ee)}u.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(D=l[S],V=D.instance,ce=D.currentTarget,D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Zo(Ee)}u.currentTarget=null,d=V}}}}function At(t,i){var s=i[B];s===void 0&&(s=i[B]=new Set);var l=t+"__bubble";s.has(l)||(S_(i,t,2,!1),s.add(l))}function Ud(t,i,s){var l=0;i&&(l|=4),S_(s,t,l,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[Oc]){t[Oc]=!0,ko.forEach(function(s){s!=="selectionchange"&&(ZS.has(s)||Ud(s,!1,t),Ud(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,Ud("selectionchange",!1,i))}}function S_(t,i,s,l){switch(Q_(i)){case 2:var u=EE;break;case 8:u=ME;break;default:u=Zd}s=u.bind(null,i,s,t),u=void 0,!ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Od(t,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var D=l.stateNode.containerInfo;if(D===u)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;D!==null;){if(S=yn(D),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue e}D=D.parentNode}}l=l.return}Am(function(){var ce=d,Ee=Qu(s),Te=[];e:{var pe=e0.get(t);if(pe!==void 0){var ye=Wo,Je=t;switch(t){case"keypress":if(Vo(s)===0)break e;case"keydown":case"keyup":ye=kx;break;case"focusin":Je="focus",ye=nf;break;case"focusout":Je="blur",ye=nf;break;case"beforeblur":case"afterblur":ye=nf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Xx;break;case Qm:case $m:case jm:ye=Ux;break;case Jm:ye=Yx;break;case"scroll":case"scrollend":ye=Rx;break;case"wheel":ye=Zx;break;case"copy":case"cut":case"paste":ye=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Nm;break;case"toggle":case"beforetoggle":ye=Qx}var ct=(i&4)!==0,nn=!ct&&(t==="scroll"||t==="scrollend"),ne=ct?pe!==null?pe+"Capture":null:pe;ct=[];for(var Z=ce,oe;Z!==null;){var be=Z;if(oe=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||oe===null||ne===null||(be=Al(Z,ne),be!=null&&ct.push(so(Z,be,oe))),nn)break;Z=Z.return}0<ct.length&&(pe=new ye(pe,Je,null,s,Ee),Te.push({event:pe,listeners:ct}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",pe&&s!==Ku&&(Je=s.relatedTarget||s.fromElement)&&(yn(Je)||Je[Xn]))break e;if((ye||pe)&&(pe=Ee.window===Ee?Ee:(pe=Ee.ownerDocument)?pe.defaultView||pe.parentWindow:window,ye?(Je=s.relatedTarget||s.toElement,ye=ce,Je=Je?yn(Je):null,Je!==null&&(nn=c(Je),ct=Je.tag,Je!==nn||ct!==5&&ct!==27&&ct!==6)&&(Je=null)):(ye=null,Je=ce),ye!==Je)){if(ct=wm,be="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Nm,be="onPointerLeave",ne="onPointerEnter",Z="pointer"),nn=ye==null?pe:na(ye),oe=Je==null?pe:na(Je),pe=new ct(be,Z+"leave",ye,s,Ee),pe.target=nn,pe.relatedTarget=oe,be=null,yn(Ee)===ce&&(ct=new ct(ne,Z+"enter",Je,s,Ee),ct.target=oe,ct.relatedTarget=nn,be=ct),nn=be,ye&&Je)t:{for(ct=KS,ne=ye,Z=Je,oe=0,be=ne;be;be=ct(be))oe++;be=0;for(var lt=Z;lt;lt=ct(lt))be++;for(;0<oe-be;)ne=ct(ne),oe--;for(;0<be-oe;)Z=ct(Z),be--;for(;oe--;){if(ne===Z||Z!==null&&ne===Z.alternate){ct=ne;break t}ne=ct(ne),Z=ct(Z)}ct=null}else ct=null;ye!==null&&E_(Te,pe,ye,ct,!1),Je!==null&&nn!==null&&E_(Te,nn,Je,ct,!0)}}e:{if(pe=ce?na(ce):window,ye=pe.nodeName&&pe.nodeName.toLowerCase(),ye==="select"||ye==="input"&&pe.type==="file")var Ft=Fm;else if(zm(pe))if(Hm)Ft=rS;else{Ft=aS;var nt=iS}else ye=pe.nodeName,!ye||ye.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ce&&Yt(ce.elementType)&&(Ft=Fm):Ft=sS;if(Ft&&(Ft=Ft(t,ce))){Bm(Te,Ft,s,Ee);break e}nt&&nt(t,pe,ce),t==="focusout"&&ce&&pe.type==="number"&&ce.memoizedProps.value!=null&&bt(pe,"number",pe.value)}switch(nt=ce?na(ce):window,t){case"focusin":(zm(nt)||nt.contentEditable==="true")&&(xr=nt,cf=ce,Ol=null);break;case"focusout":Ol=cf=xr=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Zm(Te,s,Ee);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Zm(Te,s,Ee)}var xt;if(sf)e:{switch(t){case"compositionstart":var Dt="onCompositionStart";break e;case"compositionend":Dt="onCompositionEnd";break e;case"compositionupdate":Dt="onCompositionUpdate";break e}Dt=void 0}else yr?Im(t,s)&&(Dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(Um&&s.locale!=="ko"&&(yr||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&yr&&(xt=Rm()):(Ja=Ee,Ju="value"in Ja?Ja.value:Ja.textContent,yr=!0)),nt=Ic(ce,Dt),0<nt.length&&(Dt=new Dm(Dt,t,null,s,Ee),Te.push({event:Dt,listeners:nt}),xt?Dt.data=xt:(xt=Pm(s),xt!==null&&(Dt.data=xt)))),(xt=jx?Jx(t,s):eS(t,s))&&(Dt=Ic(ce,"onBeforeInput"),0<Dt.length&&(nt=new Dm("onBeforeInput","beforeinput",null,s,Ee),Te.push({event:nt,listeners:Dt}),nt.data=xt)),WS(Te,t,ce,s,Ee)}x_(Te,i)})}function so(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ic(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Al(t,s),u!=null&&l.unshift(so(t,u,d)),u=Al(t,i),u!=null&&l.push(so(t,u,d))),t.tag===3)return l;t=t.return}return[]}function KS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E_(t,i,s,l,u){for(var d=i._reactName,S=[];s!==null&&s!==l;){var D=s,V=D.alternate,ce=D.stateNode;if(D=D.tag,V!==null&&V===l)break;D!==5&&D!==26&&D!==27||ce===null||(V=ce,u?(ce=Al(s,d),ce!=null&&S.unshift(so(s,ce,V))):u||(ce=Al(s,d),ce!=null&&S.push(so(s,ce,V)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var QS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function M_(t){return(typeof t=="string"?t:""+t).replace(QS,`
`).replace($S,"")}function b_(t,i){return i=M_(i),M_(t)===i}function tn(t,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||xi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&xi(t,""+l);break;case"className":je(t,"class",l);break;case"tabIndex":je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,s,l);break;case"style":Yi(t,l,d);break;case"data":if(i!=="object"){je(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Fs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&tn(t,i,"name",u.name,u,null),tn(t,i,"formEncType",u.formEncType,u,null),tn(t,i,"formMethod",u.formMethod,u,null),tn(t,i,"formTarget",u.formTarget,u,null)):(tn(t,i,"encType",u.encType,u,null),tn(t,i,"method",u.method,u,null),tn(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Fs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=xa);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Fs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":At("beforetoggle",t),At("toggle",t),Fe(t,"popover",l);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ia.get(s)||s,Fe(t,s,l))}}function Id(t,i,s,l,u,d){switch(s){case"style":Yi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?xi(t,l):(typeof l=="number"||typeof l=="bigint")&&xi(t,""+l);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"onClick":l!=null&&(t.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[An]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Fe(t,s,l)}}}function Zn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tn(t,i,d,S,s,null)}}u&&tn(t,i,"srcSet",s.srcSet,s,null),l&&tn(t,i,"src",s.src,s,null);return;case"input":At("invalid",t);var D=d=S=u=null,V=null,ce=null;for(l in s)if(s.hasOwnProperty(l)){var Ee=s[l];if(Ee!=null)switch(l){case"name":u=Ee;break;case"type":S=Ee;break;case"checked":V=Ee;break;case"defaultChecked":ce=Ee;break;case"value":d=Ee;break;case"defaultValue":D=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(r(137,i));break;default:tn(t,i,l,Ee,s,null)}}Jn(t,d,D,V,ce,S,u,!1);return;case"select":At("invalid",t),l=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(D=s[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":S=D;break;case"multiple":l=D;default:tn(t,i,u,D,s,null)}i=d,s=S,t.multiple=!!l,i!=null?On(t,!!l,i,!1):s!=null&&On(t,!!l,s,!0);return;case"textarea":At("invalid",t),d=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(D=s[S],D!=null))switch(S){case"value":l=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:tn(t,i,S,D,s,null)}Wi(t,l,u,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tn(t,i,V,l,s,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(l=0;l<ao.length;l++)At(ao[l],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in s)if(s.hasOwnProperty(ce)&&(l=s[ce],l!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tn(t,i,ce,l,s,null)}return;default:if(Yt(i)){for(Ee in s)s.hasOwnProperty(Ee)&&(l=s[Ee],l!==void 0&&Id(t,i,Ee,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&tn(t,i,D,l,s,null))}function jS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,D=null,V=null,ce=null,Ee=null;for(ye in s){var Te=s[ye];if(s.hasOwnProperty(ye)&&Te!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":V=Te;default:l.hasOwnProperty(ye)||tn(t,i,ye,null,l,Te)}}for(var pe in l){var ye=l[pe];if(Te=s[pe],l.hasOwnProperty(pe)&&(ye!=null||Te!=null))switch(pe){case"type":d=ye;break;case"name":u=ye;break;case"checked":ce=ye;break;case"defaultChecked":Ee=ye;break;case"value":S=ye;break;case"defaultValue":D=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,i));break;default:ye!==Te&&tn(t,i,pe,ye,l,Te)}}Xe(t,S,D,V,ce,Ee,d,u);return;case"select":ye=S=D=pe=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ye=V;default:l.hasOwnProperty(d)||tn(t,i,d,null,l,V)}for(u in l)if(d=l[u],V=s[u],l.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":pe=d;break;case"defaultValue":D=d;break;case"multiple":S=d;default:d!==V&&tn(t,i,u,d,l,V)}i=D,s=S,l=ye,pe!=null?On(t,!!s,pe,!1):!!l!=!!s&&(i!=null?On(t,!!s,i,!0):On(t,!!s,s?[]:"",!1));return;case"textarea":ye=pe=null;for(D in s)if(u=s[D],s.hasOwnProperty(D)&&u!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:tn(t,i,D,null,l,u)}for(S in l)if(u=l[S],d=s[S],l.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":pe=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&tn(t,i,S,u,l,d)}yi(t,pe,ye);return;case"option":for(var Je in s)if(pe=s[Je],s.hasOwnProperty(Je)&&pe!=null&&!l.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:tn(t,i,Je,null,l,pe)}for(V in l)if(pe=l[V],ye=s[V],l.hasOwnProperty(V)&&pe!==ye&&(pe!=null||ye!=null))switch(V){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:tn(t,i,V,pe,l,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)pe=s[ct],s.hasOwnProperty(ct)&&pe!=null&&!l.hasOwnProperty(ct)&&tn(t,i,ct,null,l,pe);for(ce in l)if(pe=l[ce],ye=s[ce],l.hasOwnProperty(ce)&&pe!==ye&&(pe!=null||ye!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:tn(t,i,ce,pe,l,ye)}return;default:if(Yt(i)){for(var nn in s)pe=s[nn],s.hasOwnProperty(nn)&&pe!==void 0&&!l.hasOwnProperty(nn)&&Id(t,i,nn,void 0,l,pe);for(Ee in l)pe=l[Ee],ye=s[Ee],!l.hasOwnProperty(Ee)||pe===ye||pe===void 0&&ye===void 0||Id(t,i,Ee,pe,l,ye);return}}for(var ne in s)pe=s[ne],s.hasOwnProperty(ne)&&pe!=null&&!l.hasOwnProperty(ne)&&tn(t,i,ne,null,l,pe);for(Te in l)pe=l[Te],ye=s[Te],!l.hasOwnProperty(Te)||pe===ye||pe==null&&ye==null||tn(t,i,Te,pe,l,ye)}function T_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,S=u.initiatorType,D=u.duration;if(d&&D&&T_(S)){for(S=0,D=u.responseEnd,l+=1;l<s.length;l++){var V=s[l],ce=V.startTime;if(ce>D)break;var Ee=V.transferSize,Te=V.initiatorType;Ee&&T_(Te)&&(V=V.responseEnd,S+=Ee*(V<D?1:(D-ce)/(V-ce)))}if(--l,i+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pd=null,zd=null;function Pc(t){return t.nodeType===9?t:t.ownerDocument}function A_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Bd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fd=null;function eE(){var t=window.event;return t&&t.type==="popstate"?t===Fd?!1:(Fd=t,!0):(Fd=null,!1)}var C_=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(t){return w_.resolve(null).then(t).catch(iE)}:C_;function iE(t){setTimeout(function(){throw t})}function gs(t){return t==="head"}function D_(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ro(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ro(s);for(var d=s.firstChild;d;){var S=d.nextSibling,D=d.nodeName;d[Gt]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&ro(t.ownerDocument.body);s=u}while(s);qr(i)}function N_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Hd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),hn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function aE(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Gt])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function sE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Fi(t.nextSibling),t===null))return null;return t}function U_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Fi(t.nextSibling),t===null))return null;return t}function kd(t){return t.data==="$?"||t.data==="$~"}function Gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vd=null;function L_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Fi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function O_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function I_(t,i,s){switch(i=Pc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);hn(t)}var Hi=new Map,P_=new Set;function zc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pa=W.d;W.d={f:lE,r:oE,D:cE,C:uE,L:fE,m:dE,X:pE,S:hE,M:mE};function lE(){var t=Pa.f(),i=Cc();return t||i}function oE(t){var i=Sn(t);i!==null&&i.tag===5&&i.type==="form"?J0(i):Pa.r(t)}var Xr=typeof document>"u"?null:document;function z_(t,i,s){var l=Xr;if(l&&typeof i=="string"&&i){var u=Zt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),P_.has(u)||(P_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Zn(i,"link",t),Rn(i),l.head.appendChild(i)))}}function cE(t){Pa.D(t),z_("dns-prefetch",t,null)}function uE(t,i){Pa.C(t,i),z_("preconnect",t,i)}function fE(t,i,s){Pa.L(t,i,s);var l=Xr;if(l&&t&&i){var u='link[rel="preload"][as="'+Zt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Zt(s.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(i){case"style":d=Wr(t);break;case"script":d=Yr(t)}Hi.has(d)||(t=x({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Hi.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(lo(d))||i==="script"&&l.querySelector(oo(d))||(i=l.createElement("link"),Zn(i,"link",t),Rn(i),l.head.appendChild(i)))}}function dE(t,i){Pa.m(t,i);var s=Xr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Zt(l)+'"][href="'+Zt(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Yr(t)}if(!Hi.has(d)&&(t=x({rel:"modulepreload",href:t},i),Hi.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(oo(d)))return}l=s.createElement("link"),Zn(l,"link",t),Rn(l),s.head.appendChild(l)}}}function hE(t,i,s){Pa.S(t,i,s);var l=Xr;if(l&&t){var u=$a(l).hoistableStyles,d=Wr(t);i=i||"default";var S=u.get(d);if(!S){var D={loading:0,preload:null};if(S=l.querySelector(lo(d)))D.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Hi.get(d))&&Xd(t,s);var V=S=l.createElement("link");Rn(V),Zn(V,"link",t),V._p=new Promise(function(ce,Ee){V.onload=ce,V.onerror=Ee}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Bc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:D},u.set(d,S)}}}function pE(t,i){Pa.X(t,i);var s=Xr;if(s&&t){var l=$a(s).hoistableScripts,u=Yr(t),d=l.get(u);d||(d=s.querySelector(oo(u)),d||(t=x({src:t,async:!0},i),(i=Hi.get(u))&&Wd(t,i),d=s.createElement("script"),Rn(d),Zn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function mE(t,i){Pa.M(t,i);var s=Xr;if(s&&t){var l=$a(s).hoistableScripts,u=Yr(t),d=l.get(u);d||(d=s.querySelector(oo(u)),d||(t=x({src:t,async:!0,type:"module"},i),(i=Hi.get(u))&&Wd(t,i),d=s.createElement("script"),Rn(d),Zn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function B_(t,i,s,l){var u=(u=ae.current)?zc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Wr(s.href),s=$a(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Wr(s.href);var d=$a(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(lo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Hi.set(t,s),d||gE(u,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Yr(s),s=$a(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Wr(t){return'href="'+Zt(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function F_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function gE(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Zn(i,"link",s),Rn(i),t.head.appendChild(i))}function Yr(t){return'[src="'+Zt(t)+'"]'}function oo(t){return"script[async]"+t}function H_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Zt(s.href)+'"]');if(l)return i.instance=l,Rn(l),l;var u=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Rn(l),Zn(l,"style",u),Bc(l,s.precedence,t),i.instance=l;case"stylesheet":u=Wr(s.href);var d=t.querySelector(lo(u));if(d)return i.state.loading|=4,i.instance=d,Rn(d),d;l=F_(s),(u=Hi.get(u))&&Xd(l,u),d=(t.ownerDocument||t).createElement("link"),Rn(d);var S=d;return S._p=new Promise(function(D,V){S.onload=D,S.onerror=V}),Zn(d,"link",l),i.state.loading|=4,Bc(d,s.precedence,t),i.instance=d;case"script":return d=Yr(s.src),(u=t.querySelector(oo(d)))?(i.instance=u,Rn(u),u):(l=s,(u=Hi.get(d))&&(l=x({},s),Wd(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),Rn(u),Zn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Bc(l,s.precedence,t));return i.instance}function Bc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,S=0;S<l.length;S++){var D=l[S];if(D.dataset.precedence===i)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Xd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Fc=null;function k_(t,i,s){if(Fc===null){var l=new Map,u=Fc=new Map;u.set(s,l)}else u=Fc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Gt]||d[vn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var D=l.get(S);D?D.push(d):l.set(S,[d])}}return l}function G_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function _E(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function V_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vE(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Wr(l.href),d=i.querySelector(lo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Hc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,Rn(d);return}d=i.ownerDocument||i,l=F_(l),(u=Hi.get(u))&&Xd(l,u),d=d.createElement("link"),Rn(d);var S=d;S._p=new Promise(function(D,V){S.onload=D,S.onerror=V}),Zn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Hc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Yd=0;function yE(t,i){return t.stylesheets&&t.count===0&&Gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Yd===0&&(Yd=62500*JS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Yd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kc=null;function Gc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,i.forEach(xE,t),kc=null,Hc.call(t))}function xE(t,i){if(!(i.state.loading&4)){var s=kc.get(t);if(s)var l=s.get(null);else{s=new Map,kc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=i.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,u),s.set(S,u),this.count++,l=Hc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var co={$$typeof:L,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function SE(t,i,s,l,u,d,S,D,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function X_(t,i,s,l,u,d,S,D,V,ce,Ee,Te){return t=new SE(t,i,s,S,V,ce,Ee,Te,D),i=1,d===!0&&(i|=24),d=Ei(3,null,null,i),t.current=d,d.stateNode=t,i=Tf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},wf(d),t}function W_(t){return t?(t=Mr,t):Mr}function Y_(t,i,s,l,u,d){u=W_(u),l.context===null?l.context=u:l.pendingContext=u,l=ss(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=rs(t,l,i),s!==null&&(pi(s,t,i),kl(s,t,i))}function q_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qd(t,i){q_(t,i),(t=t.alternate)&&q_(t,i)}function Z_(t){if(t.tag===13||t.tag===31){var i=Vs(t,67108864);i!==null&&pi(i,t,67108864),qd(t,67108864)}}function K_(t){if(t.tag===13||t.tag===31){var i=Ri();i=Bs(i);var s=Vs(t,i);s!==null&&pi(s,t,i),qd(t,i)}}var Vc=!0;function EE(t,i,s,l){var u=H.T;H.T=null;var d=W.p;try{W.p=2,Zd(t,i,s,l)}finally{W.p=d,H.T=u}}function ME(t,i,s,l){var u=H.T;H.T=null;var d=W.p;try{W.p=8,Zd(t,i,s,l)}finally{W.p=d,H.T=u}}function Zd(t,i,s,l){if(Vc){var u=Kd(l);if(u===null)Od(t,i,l,Xc,s),$_(t,l);else if(TE(u,t,i,s,l))l.stopPropagation();else if($_(t,l),i&4&&-1<bE.indexOf(t)){for(;u!==null;){var d=Sn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ue(d.pendingLanes);if(S!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;S;){var V=1<<31-Ne(S);D.entanglements[1]|=V,S&=~V}la(d),(Vt&6)===0&&(Ac=Ot()+500,io(0))}}break;case 31:case 13:D=Vs(d,2),D!==null&&pi(D,d,2),Cc(),qd(d,2)}if(d=Kd(l),d===null&&Od(t,i,l,Xc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else Od(t,i,l,null,s)}}function Kd(t){return t=Qu(t),Qd(t)}var Xc=null;function Qd(t){if(Xc=null,t=yn(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=p(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Xc=t,null}function Q_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case C:return 2;case y:return 8;case X:case q:return 32;case J:return 268435456;default:return 32}default:return 32}}var $d=!1,_s=null,vs=null,ys=null,uo=new Map,fo=new Map,xs=[],bE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $_(t,i){switch(t){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(t,i,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Sn(i),i!==null&&Z_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function TE(t,i,s,l,u){switch(i){case"focusin":return _s=ho(_s,t,i,s,l,u),!0;case"dragenter":return vs=ho(vs,t,i,s,l,u),!0;case"mouseover":return ys=ho(ys,t,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return uo.set(d,ho(uo.get(d)||null,t,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,fo.set(d,ho(fo.get(d)||null,t,i,s,l,u)),!0}return!1}function j_(t){var i=yn(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,ya(t.priority,function(){K_(s)});return}}else if(i===31){if(i=p(s),i!==null){t.blockedOn=i,ya(t.priority,function(){K_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Kd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ku=l,s.target.dispatchEvent(l),Ku=null}else return i=Sn(s),i!==null&&Z_(i),t.blockedOn=s,!1;i.shift()}return!0}function J_(t,i,s){Wc(t)&&s.delete(i)}function AE(){$d=!1,_s!==null&&Wc(_s)&&(_s=null),vs!==null&&Wc(vs)&&(vs=null),ys!==null&&Wc(ys)&&(ys=null),uo.forEach(J_),fo.forEach(J_)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,$d||($d=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,AE)))}var qc=null;function ev(t){qc!==t&&(qc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Qd(l||s)===null)continue;break}var d=Sn(s);d!==null&&(t.splice(i,3),i-=3,Kf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function qr(t){function i(V){return Yc(V,t)}_s!==null&&Yc(_s,t),vs!==null&&Yc(vs,t),ys!==null&&Yc(ys,t),uo.forEach(i),fo.forEach(i);for(var s=0;s<xs.length;s++){var l=xs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xs.length&&(s=xs[0],s.blockedOn===null);)j_(s),s.blockedOn===null&&xs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],S=u[An]||null;if(typeof d=="function")S||ev(s);else if(S){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[An]||null)D=S.formAction;else if(Qd(u)!==null)continue}else D=S.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),ev(s)}}}function tv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function jd(t){this._internalRoot=t}Zc.prototype.render=jd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Ri();Y_(s,l,t,i,null,null)},Zc.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Y_(t.current,2,null,t,null,null),Cc(),i[Xn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qa();t={blockedOn:null,target:t,priority:i};for(var s=0;s<xs.length&&i!==0&&i<xs[s].priority;s++);xs.splice(s,0,t),s===0&&j_(t)}};var nv=e.version;if(nv!=="19.2.8")throw Error(r(527,nv,"19.2.8"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var RE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{ee=Kc.inject(RE),se=Kc}catch{}}return po.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=cg,d=ug,S=fg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=X_(t,1,!1,null,null,s,l,null,u,d,S,tv),t[Xn]=i.current,Ld(t),new jd(i)},po.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=cg,S=ug,D=fg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=X_(t,1,!0,i,s??null,l,u,V,d,S,D,tv),i.context=W_(null),s=i.current,l=Ri(),l=Bs(l),u=ss(l),u.callback=null,rs(s,u,l),s=l,i.current.lanes=s,We(i,s),la(i),t[Xn]=i.current,Ld(t),new Zc(i)},po.version="19.2.8",po}var uv;function PE(){if(uv)return eh.exports;uv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eh.exports=IE(),eh.exports}var zE=PE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),by=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=He.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...p},m)=>He.createElement("svg",{ref:m,...FE,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:by("lucide",o),...p},[...f.map(([h,v])=>He.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(a,e)=>{const n=He.forwardRef(({className:r,...o},c)=>He.createElement(HE,{ref:c,iconNode:e,className:by(`lucide-${BE(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=dn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=dn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=dn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=dn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=dn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=dn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=dn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=dn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=dn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=dn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=dn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=dn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=dn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=dn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=dn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=dn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=dn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=dn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=dn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=dn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=dn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=dn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=dn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="185",ml={ROTATE:0,DOLLY:1,PAN:2},dl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tM=0,dv=1,nM=2,Ro=1,iM=2,To=3,Us=0,_i=1,da=2,Xa=0,gl=1,hv=2,pv=3,mv=4,aM=5,lr=100,sM=101,rM=102,lM=103,oM=104,cM=200,uM=201,fM=202,dM=203,Xh=204,Wh=205,hM=206,pM=207,mM=208,gM=209,_M=210,vM=211,yM=212,xM=213,SM=214,Yh=0,qh=1,Zh=2,yl=3,Kh=4,Qh=5,$h=6,jh=7,Ry=0,EM=1,MM=2,ma=0,Cy=1,wy=2,Dy=3,Zp=4,Ny=5,Uy=6,Ly=7,Oy=300,mr=301,xl=302,sh=303,rh=304,Xu=306,Jh=1e3,Va=1001,ep=1002,$n=1003,bM=1004,Qc=1005,kn=1006,lh=1007,fr=1008,Di=1009,Iy=1010,Py=1011,Uo=1012,Kp=1013,_a=1014,ha=1015,qa=1016,Qp=1017,$p=1018,Lo=1020,zy=35902,By=35899,Fy=1021,Hy=1022,ea=1023,Za=1026,dr=1027,ky=1028,jp=1029,gr=1030,Jp=1031,em=1033,Mu=33776,bu=33777,Tu=33778,Au=33779,tp=35840,np=35841,ip=35842,ap=35843,sp=36196,rp=37492,lp=37496,op=37488,cp=37489,Du=37490,up=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,_p=37814,vp=37815,yp=37816,xp=37817,Sp=37818,Ep=37819,Mp=37820,bp=37821,Tp=36492,Ap=36494,Rp=36495,Cp=36283,wp=36284,Nu=36285,Dp=36286,TM=3200,Np=0,AM=1,ws="",gi="srgb",Uu="srgb-linear",Lu="linear",jt="srgb",Zr=7680,gv=519,RM=512,CM=513,wM=514,tm=515,DM=516,NM=517,nm=518,UM=519,Up=35044,_v="300 es",pa=2e3,Oo=2001;function LM(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ou(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function OM(){const a=Ou("canvas");return a.style.display="block",a}const vv={};function Iu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Gy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=Gy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Ut(...a){a=Gy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function _l(...a){const e=a.join(" ");e in vv||(vv[e]=!0,ft(...a))}function IM(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const PM={[Yh]:qh,[Zh]:$h,[Kh]:jh,[yl]:Qh,[qh]:Yh,[$h]:Zh,[jh]:Kh,[Qh]:yl};class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yv=1234567;const Co=Math.PI/180,Io=180/Math.PI;function Wa(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[n&63|128]+ti[n>>8&255]+"-"+ti[n>>16&255]+ti[n>>24&255]+ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]).toLowerCase()}function Mt(a,e,n){return Math.max(e,Math.min(n,a))}function im(a,e){return(a%e+e)%e}function zM(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function BM(a,e,n){return a!==e?(n-a)/(e-a):0}function wo(a,e,n){return(1-n)*a+n*e}function FM(a,e,n,r){return wo(a,e,1-Math.exp(-n*r))}function HM(a,e=1){return e-Math.abs(im(a,e*2)-e)}function kM(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function GM(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function VM(a,e){return a+Math.floor(Math.random()*(e-a+1))}function XM(a,e){return a+Math.random()*(e-a)}function WM(a){return a*(.5-Math.random())}function YM(a){a!==void 0&&(yv=a);let e=yv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qM(a){return a*Co}function ZM(a){return a*Io}function KM(a){return(a&a-1)===0&&a!==0}function QM(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function $M(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function jM(a,e,n,r,o){const c=Math.cos,f=Math.sin,p=c(n/2),m=f(n/2),h=c((e+r)/2),v=f((e+r)/2),x=c((e-r)/2),_=f((e-r)/2),b=c((r-e)/2),R=f((r-e)/2);switch(o){case"XYX":a.set(p*v,m*x,m*_,p*h);break;case"YZY":a.set(m*_,p*v,m*x,p*h);break;case"ZXZ":a.set(m*x,m*_,p*v,p*h);break;case"XZX":a.set(p*v,m*R,m*b,p*h);break;case"YXY":a.set(m*b,p*v,m*R,p*h);break;case"ZYZ":a.set(m*R,m*b,p*v,p*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ji(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lp={DEG2RAD:Co,RAD2DEG:Io,generateUUID:Wa,clamp:Mt,euclideanModulo:im,mapLinear:zM,inverseLerp:BM,lerp:wo,damp:FM,pingpong:HM,smoothstep:kM,smootherstep:GM,randInt:VM,randFloat:XM,randFloatSpread:WM,seededRandom:YM,degToRad:qM,radToDeg:ZM,isPowerOfTwo:KM,ceilPowerOfTwo:QM,floorPowerOfTwo:$M,setQuaternionFromProperEuler:jM,normalize:Jt,denormalize:Ji},xm=class xm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xm.prototype.isVector2=!0;let ot=xm;class Ls{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,p){let m=r[o+0],h=r[o+1],v=r[o+2],x=r[o+3],_=c[f+0],b=c[f+1],R=c[f+2],N=c[f+3];if(x!==N||m!==_||h!==b||v!==R){let T=m*_+h*b+v*R+x*N;T<0&&(_=-_,b=-b,R=-R,N=-N,T=-T);let E=1-p;if(T<.9995){const U=Math.acos(T),L=Math.sin(U);E=Math.sin(E*U)/L,p=Math.sin(p*U)/L,m=m*E+_*p,h=h*E+b*p,v=v*E+R*p,x=x*E+N*p}else{m=m*E+_*p,h=h*E+b*p,v=v*E+R*p,x=x*E+N*p;const U=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=U,h*=U,v*=U,x*=U}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,c,f){const p=r[o],m=r[o+1],h=r[o+2],v=r[o+3],x=c[f],_=c[f+1],b=c[f+2],R=c[f+3];return e[n]=p*R+v*x+m*b-h*_,e[n+1]=m*R+v*_+h*x-p*b,e[n+2]=h*R+v*b+p*_-m*x,e[n+3]=v*R-p*x-m*_-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(o/2),x=p(c/2),_=m(r/2),b=m(o/2),R=m(c/2);switch(f){case"XYZ":this._x=_*v*x+h*b*R,this._y=h*b*x-_*v*R,this._z=h*v*R+_*b*x,this._w=h*v*x-_*b*R;break;case"YXZ":this._x=_*v*x+h*b*R,this._y=h*b*x-_*v*R,this._z=h*v*R-_*b*x,this._w=h*v*x+_*b*R;break;case"ZXY":this._x=_*v*x-h*b*R,this._y=h*b*x+_*v*R,this._z=h*v*R+_*b*x,this._w=h*v*x-_*b*R;break;case"ZYX":this._x=_*v*x-h*b*R,this._y=h*b*x+_*v*R,this._z=h*v*R-_*b*x,this._w=h*v*x+_*b*R;break;case"YZX":this._x=_*v*x+h*b*R,this._y=h*b*x+_*v*R,this._z=h*v*R-_*b*x,this._w=h*v*x-_*b*R;break;case"XZY":this._x=_*v*x-h*b*R,this._y=h*b*x-_*v*R,this._z=h*v*R+_*b*x,this._w=h*v*x+_*b*R;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],p=n[5],m=n[9],h=n[2],v=n[6],x=n[10],_=r+p+x;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-h)*b,this._z=(f-o)*b}else if(r>p&&r>x){const b=2*Math.sqrt(1+r-p-x);this._w=(v-m)/b,this._x=.25*b,this._y=(o+f)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-r-x);this._w=(c-h)/b,this._x=(o+f)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+x-r-p);this._w=(f-o)/b,this._x=(c+h)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,p=n._x,m=n._y,h=n._z,v=n._w;return this._x=r*v+f*p+o*h-c*m,this._y=o*v+f*m+c*p-r*h,this._z=c*v+f*h+r*m-o*p,this._w=f*v-r*p-o*m-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,c=-c,f=-f,p=-p);let m=1-n;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,n=Math.sin(n*h)/v,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sm=class Sm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*o-p*r),v=2*(p*n-c*o),x=2*(c*r-f*n);return this.x=n+m*h+f*x-p*v,this.y=r+m*v+p*h-c*x,this.z=o+m*x+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,p=n.y,m=n.z;return this.x=o*m-c*p,this.y=c*f-r*m,this.z=r*p-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sm.prototype.isVector3=!0;let te=Sm;const oh=new te,xv=new Ls,Em=class Em{constructor(e,n,r,o,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,p,m,h)}set(e,n,r,o,c,f,p,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=p,v[3]=n,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],v=r[4],x=r[7],_=r[2],b=r[5],R=r[8],N=o[0],T=o[3],E=o[6],U=o[1],L=o[4],M=o[7],I=o[2],P=o[5],F=o[8];return c[0]=f*N+p*U+m*I,c[3]=f*T+p*L+m*P,c[6]=f*E+p*M+m*F,c[1]=h*N+v*U+x*I,c[4]=h*T+v*L+x*P,c[7]=h*E+v*M+x*F,c[2]=_*N+b*U+R*I,c[5]=_*T+b*L+R*P,c[8]=_*E+b*M+R*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return n*f*v-n*p*h-r*c*v+r*p*m+o*c*h-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*f-p*h,_=p*m-v*c,b=h*c-f*m,R=n*x+r*_+o*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=x*N,e[1]=(o*h-v*r)*N,e[2]=(p*r-o*f)*N,e[3]=_*N,e[4]=(v*n-o*m)*N,e[5]=(o*c-p*n)*N,e[6]=b*N,e[7]=(r*m-h*n)*N,e[8]=(f*n-r*c)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-o*h,o*m,-o*(-h*f+m*p)+p+n,0,0,1),this}scale(e,n){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(e,n)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-e)),this}translate(e,n){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Em.prototype.isMatrix3=!0;let gt=Em;const ch=new gt,Sv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const a={enabled:!0,workingColorSpace:Uu,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(o.r=Ya(o.r),o.g=Ya(o.g),o.b=Ya(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(o.r=vl(o.r),o.g=vl(o.g),o.b=vl(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ws?Lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return _l("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return _l("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Uu]:{primaries:e,whitePoint:r,transfer:Lu,toXYZ:Sv,fromXYZ:Ev,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:Sv,fromXYZ:Ev,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),a}const Lt=JM();function Ya(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function vl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Kr;class eb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Kr===void 0&&(Kr=Ou("canvas")),Kr.width=e.width,Kr.height=e.height;const o=Kr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Kr}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ou("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ya(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ya(n[r]/255)*255):n[r]=Ya(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tb=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,p=o.length;f<p;f++)o[f].isDataTexture?c.push(uh(o[f].image)):c.push(uh(o[f]))}else c=uh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function uh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?eb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let nb=0;const fh=new te;class ii extends zs{constructor(e=ii.DEFAULT_IMAGE,n=ii.DEFAULT_MAPPING,r=Va,o=Va,c=kn,f=fr,p=ea,m=Di,h=ii.DEFAULT_ANISOTROPY,v=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Wa(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case Va:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case Va:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Oy;ii.DEFAULT_ANISOTROPY=1;const Mm=class Mm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,h=m[0],v=m[4],x=m[8],_=m[1],b=m[5],R=m[9],N=m[2],T=m[6],E=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-N)<.01&&Math.abs(R-T)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+N)<.1&&Math.abs(R+T)<.1&&Math.abs(h+b+E-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,M=(b+1)/2,I=(E+1)/2,P=(v+_)/4,F=(x+N)/4,A=(R+T)/4;return L>M&&L>I?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=P/r,c=F/r):M>I?M<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(M),r=P/o,c=A/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=F/c,o=A/c),this.set(r,o,c,n),this}let U=Math.sqrt((T-R)*(T-R)+(x-N)*(x-N)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(T-R)/U,this.y=(x-N)/U,this.z=(_-v)/U,this.w=Math.acos((h+b+E-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mm.prototype.isVector4=!0;let xn=Mm;class ib extends zs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new xn(0,0,e,n),this.scissorTest=!1,this.viewport=new xn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new ii(o),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new am(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ga extends ib{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Vy extends ii{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ab extends ii{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,n,r,o,c,f,p,m,h,v,x,_,b,R,N,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,p,m,h,v,x,_,b,R,N,T)}set(e,n,r,o,c,f,p,m,h,v,x,_,b,R,N,T){const E=this.elements;return E[0]=e,E[4]=n,E[8]=r,E[12]=o,E[1]=c,E[5]=f,E[9]=p,E[13]=m,E[2]=h,E[6]=v,E[10]=x,E[14]=_,E[3]=b,E[7]=R,E[11]=N,E[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Qr.setFromMatrixColumn(e,0).length(),c=1/Qr.setFromMatrixColumn(e,1).length(),f=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(o),h=Math.sin(o),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=f*v,b=f*x,R=p*v,N=p*x;n[0]=m*v,n[4]=-m*x,n[8]=h,n[1]=b+R*h,n[5]=_-N*h,n[9]=-p*m,n[2]=N-_*h,n[6]=R+b*h,n[10]=f*m}else if(e.order==="YXZ"){const _=m*v,b=m*x,R=h*v,N=h*x;n[0]=_+N*p,n[4]=R*p-b,n[8]=f*h,n[1]=f*x,n[5]=f*v,n[9]=-p,n[2]=b*p-R,n[6]=N+_*p,n[10]=f*m}else if(e.order==="ZXY"){const _=m*v,b=m*x,R=h*v,N=h*x;n[0]=_-N*p,n[4]=-f*x,n[8]=R+b*p,n[1]=b+R*p,n[5]=f*v,n[9]=N-_*p,n[2]=-f*h,n[6]=p,n[10]=f*m}else if(e.order==="ZYX"){const _=f*v,b=f*x,R=p*v,N=p*x;n[0]=m*v,n[4]=R*h-b,n[8]=_*h+N,n[1]=m*x,n[5]=N*h+_,n[9]=b*h-R,n[2]=-h,n[6]=p*m,n[10]=f*m}else if(e.order==="YZX"){const _=f*m,b=f*h,R=p*m,N=p*h;n[0]=m*v,n[4]=N-_*x,n[8]=R*x+b,n[1]=x,n[5]=f*v,n[9]=-p*v,n[2]=-h*v,n[6]=b*x+R,n[10]=_-N*x}else if(e.order==="XZY"){const _=f*m,b=f*h,R=p*m,N=p*h;n[0]=m*v,n[4]=-x,n[8]=h*v,n[1]=_*x+N,n[5]=f*v,n[9]=b*x-R,n[2]=R*x-b,n[6]=p*v,n[10]=N*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sb,e,rb)}lookAt(e,n,r){const o=this.elements;return Ci.subVectors(e,n),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Es.crossVectors(r,Ci),Es.lengthSq()===0&&(Math.abs(r.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Es.crossVectors(r,Ci)),Es.normalize(),$c.crossVectors(Ci,Es),o[0]=Es.x,o[4]=$c.x,o[8]=Ci.x,o[1]=Es.y,o[5]=$c.y,o[9]=Ci.y,o[2]=Es.z,o[6]=$c.z,o[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],v=r[1],x=r[5],_=r[9],b=r[13],R=r[2],N=r[6],T=r[10],E=r[14],U=r[3],L=r[7],M=r[11],I=r[15],P=o[0],F=o[4],A=o[8],O=o[12],Y=o[1],k=o[5],$=o[9],ge=o[13],me=o[2],ie=o[6],H=o[10],W=o[14],le=o[3],Se=o[7],De=o[11],z=o[15];return c[0]=f*P+p*Y+m*me+h*le,c[4]=f*F+p*k+m*ie+h*Se,c[8]=f*A+p*$+m*H+h*De,c[12]=f*O+p*ge+m*W+h*z,c[1]=v*P+x*Y+_*me+b*le,c[5]=v*F+x*k+_*ie+b*Se,c[9]=v*A+x*$+_*H+b*De,c[13]=v*O+x*ge+_*W+b*z,c[2]=R*P+N*Y+T*me+E*le,c[6]=R*F+N*k+T*ie+E*Se,c[10]=R*A+N*$+T*H+E*De,c[14]=R*O+N*ge+T*W+E*z,c[3]=U*P+L*Y+M*me+I*le,c[7]=U*F+L*k+M*ie+I*Se,c[11]=U*A+L*$+M*H+I*De,c[15]=U*O+L*ge+M*W+I*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],_=e[10],b=e[14],R=e[3],N=e[7],T=e[11],E=e[15],U=m*b-h*_,L=p*b-h*x,M=p*_-m*x,I=f*b-h*v,P=f*_-m*v,F=f*x-p*v;return n*(N*U-T*L+E*M)-r*(R*U-T*I+E*P)+o*(R*L-N*I+E*F)-c*(R*M-N*P+T*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return n*(f*v-p*h)-r*(c*v-p*m)+o*(c*h-f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],_=e[10],b=e[11],R=e[12],N=e[13],T=e[14],E=e[15],U=n*p-r*f,L=n*m-o*f,M=n*h-c*f,I=r*m-o*p,P=r*h-c*p,F=o*h-c*m,A=v*N-x*R,O=v*T-_*R,Y=v*E-b*R,k=x*T-_*N,$=x*E-b*N,ge=_*E-b*T,me=U*ge-L*$+M*k+I*Y-P*O+F*A;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/me;return e[0]=(p*ge-m*$+h*k)*ie,e[1]=(o*$-r*ge-c*k)*ie,e[2]=(N*F-T*P+E*I)*ie,e[3]=(_*P-x*F-b*I)*ie,e[4]=(m*Y-f*ge-h*O)*ie,e[5]=(n*ge-o*Y+c*O)*ie,e[6]=(T*M-R*F-E*L)*ie,e[7]=(v*F-_*M+b*L)*ie,e[8]=(f*$-p*Y+h*A)*ie,e[9]=(r*Y-n*$-c*A)*ie,e[10]=(R*P-N*M+E*U)*ie,e[11]=(x*M-v*P-b*U)*ie,e[12]=(p*O-f*k-m*A)*ie,e[13]=(n*k-r*O+o*A)*ie,e[14]=(N*L-R*I-T*U)*ie,e[15]=(v*I-x*L+_*U)*ie,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,v=c*p;return this.set(h*f+r,h*p-o*m,h*m+o*p,0,h*p+o*m,v*p+r,v*m-o*f,0,h*m-o*p,v*m+o*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,p=n._z,m=n._w,h=c+c,v=f+f,x=p+p,_=c*h,b=c*v,R=c*x,N=f*v,T=f*x,E=p*x,U=m*h,L=m*v,M=m*x,I=r.x,P=r.y,F=r.z;return o[0]=(1-(N+E))*I,o[1]=(b+M)*I,o[2]=(R-L)*I,o[3]=0,o[4]=(b-M)*P,o[5]=(1-(_+E))*P,o[6]=(T+U)*P,o[7]=0,o[8]=(R+L)*F,o[9]=(T-U)*F,o[10]=(1-(_+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Qr.set(o[0],o[1],o[2]).length();const p=Qr.set(o[4],o[5],o[6]).length(),m=Qr.set(o[8],o[9],o[10]).length();c<0&&(f=-f),Qi.copy(this);const h=1/f,v=1/p,x=1/m;return Qi.elements[0]*=h,Qi.elements[1]*=h,Qi.elements[2]*=h,Qi.elements[4]*=v,Qi.elements[5]*=v,Qi.elements[6]*=v,Qi.elements[8]*=x,Qi.elements[9]*=x,Qi.elements[10]*=x,n.setFromRotationMatrix(Qi),r.x=f,r.y=p,r.z=m,this}makePerspective(e,n,r,o,c,f,p=pa,m=!1){const h=this.elements,v=2*c/(n-e),x=2*c/(r-o),_=(n+e)/(n-e),b=(r+o)/(r-o);let R,N;if(m)R=c/(f-c),N=f*c/(f-c);else if(p===pa)R=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(p===Oo)R=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,p=pa,m=!1){const h=this.elements,v=2/(n-e),x=2/(r-o),_=-(n+e)/(n-e),b=-(r+o)/(r-o);let R,N;if(m)R=1/(f-c),N=f/(f-c);else if(p===pa)R=-2/(f-c),N=-(f+c)/(f-c);else if(p===Oo)R=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Gu.prototype.isMatrix4=!0;let _n=Gu;const Qr=new te,Qi=new _n,sb=new te(0,0,0),rb=new te(1,1,1),Es=new te,$c=new te,Ci=new te,Mv=new _n,bv=new Ls;class Os{constructor(e=0,n=0,r=0,o=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],p=o[8],m=o[1],h=o[5],v=o[9],x=o[2],_=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lb=0;const Tv=new te,$r=new Ls,za=new _n,jc=new te,mo=new te,ob=new te,cb=new Ls,Av=new te(1,0,0),Rv=new te(0,1,0),Cv=new te(0,0,1),wv={type:"added"},ub={type:"removed"},jr={type:"childadded",child:null},dh={type:"childremoved",child:null};class Gn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new te,n=new Os,r=new Ls,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new gt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,n){return Tv.copy(e).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?jc.copy(e):jc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(mo,jc,this.up):za.lookAt(jc,mo,this.up),this.quaternion.setFromRotationMatrix(za),o&&(za.extractRotation(o.matrixWorld),$r.setFromRotationMatrix(za),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),jr.child=e,this.dispatchEvent(jr),jr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ub),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));o.material=p}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(e.animations,m))}}if(n){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),x=f(e.shapes),_=f(e.skeletons),b=f(e.animations),R=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=o,r;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new te(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ga extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const T=n.getJointPose(N,r),E=this._getHandJoint(h,N);T!==null&&(E.matrix.fromArray(T.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=T.radius),E.visible=T!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=v.position.distanceTo(x.position),b=.02,R=.005;h.inputState.pinching&&_>b+R?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=b-R&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ga;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function ph(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Lt.workingColorSpace){if(e=im(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=ph(f,c,e+1/3),this.g=ph(f,c,e),this.b=ph(f,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,n=gi){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],p=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const r=Xy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Lt.workingToColorSpace(ni.copy(this),e),Math.round(Mt(ni.r*255,0,255))*65536+Math.round(Mt(ni.g*255,0,255))*256+Math.round(Mt(ni.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(ni.copy(this),n);const r=ni.r,o=ni.g,c=ni.b,f=Math.max(r,o,c),p=Math.min(r,o,c);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const x=f-p;switch(h=v<=.5?x/(f+p):x/(2-f-p),f){case r:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-r)/x+2;break;case c:m=(r-o)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(ni.copy(this),n),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=gi){Lt.workingToColorSpace(ni.copy(this),e);const n=ni.r,r=ni.g,o=ni.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+n,Ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ms),e.getHSL(Jc);const r=wo(Ms.h,Jc.h,n),o=wo(Ms.s,Jc.s,n),c=wo(Ms.l,Jc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Rt;Rt.NAMES=Xy;class rm{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=n,this.far=r}clone(){return new rm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class db extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $i=new te,Ba=new te,mh=new te,Fa=new te,Jr=new te,el=new te,Dv=new te,gh=new te,_h=new te,vh=new te,yh=new xn,xh=new xn,Sh=new xn;class Xi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),$i.subVectors(e,n),o.cross($i);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){$i.subVectors(o,n),Ba.subVectors(r,n),mh.subVectors(e,n);const f=$i.dot($i),p=$i.dot(Ba),m=$i.dot(mh),h=Ba.dot(Ba),v=Ba.dot(mh),x=f*h-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,b=(h*m-p*v)*_,R=(f*v-p*m)*_;return c.set(1-b-R,R,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(e,n,r,o,c,f,p,m){return this.getBarycoord(e,n,r,o,Fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Fa.x),m.addScaledVector(f,Fa.y),m.addScaledVector(p,Fa.z),m)}static getInterpolatedAttribute(e,n,r,o,c,f){return yh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),yh.fromBufferAttribute(e,n),xh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(yh,c.x),f.addScaledVector(xh,c.y),f.addScaledVector(Sh,c.z),f}static isFrontFacing(e,n,r,o){return $i.subVectors(r,n),Ba.subVectors(e,n),$i.cross(Ba).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ba.subVectors(this.a,this.b),$i.cross(Ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Xi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,p;Jr.subVectors(o,r),el.subVectors(c,r),gh.subVectors(e,r);const m=Jr.dot(gh),h=el.dot(gh);if(m<=0&&h<=0)return n.copy(r);_h.subVectors(e,o);const v=Jr.dot(_h),x=el.dot(_h);if(v>=0&&x<=v)return n.copy(o);const _=m*x-v*h;if(_<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(Jr,f);vh.subVectors(e,c);const b=Jr.dot(vh),R=el.dot(vh);if(R>=0&&b<=R)return n.copy(c);const N=b*h-m*R;if(N<=0&&h>=0&&R<=0)return p=h/(h-R),n.copy(r).addScaledVector(el,p);const T=v*R-b*x;if(T<=0&&x-v>=0&&b-R>=0)return Dv.subVectors(c,o),p=(x-v)/(x-v+(b-R)),n.copy(o).addScaledVector(Dv,p);const E=1/(T+N+_);return f=N*E,p=_*E,n.copy(r).addScaledVector(Jr,f).addScaledVector(el,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,ji):ji.fromBufferAttribute(c,f),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),tu.subVectors(this.max,go),tl.subVectors(e.a,go),nl.subVectors(e.b,go),il.subVectors(e.c,go),bs.subVectors(nl,tl),Ts.subVectors(il,nl),nr.subVectors(tl,il);let n=[0,-bs.z,bs.y,0,-Ts.z,Ts.y,0,-nr.z,nr.y,bs.z,0,-bs.x,Ts.z,0,-Ts.x,nr.z,0,-nr.x,-bs.y,bs.x,0,-Ts.y,Ts.x,0,-nr.y,nr.x,0];return!Eh(n,tl,nl,il,tu)||(n=[1,0,0,0,1,0,0,0,1],!Eh(n,tl,nl,il,tu))?!1:(nu.crossVectors(bs,Ts),n=[nu.x,nu.y,nu.z],Eh(n,tl,nl,il,tu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ha=[new te,new te,new te,new te,new te,new te,new te,new te],ji=new te,eu=new Fo,tl=new te,nl=new te,il=new te,bs=new te,Ts=new te,nr=new te,go=new te,tu=new te,nu=new te,ir=new te;function Eh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){ir.fromArray(a,c);const p=o.x*Math.abs(ir.x)+o.y*Math.abs(ir.y)+o.z*Math.abs(ir.z),m=e.dot(ir),h=n.dot(ir),v=r.dot(ir);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const Un=new te,iu=new ot;let hb=0;class ta extends zs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Up,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)iu.fromBufferAttribute(this,n),iu.applyMatrix3(e),this.setXY(n,iu.x,iu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Un.fromBufferAttribute(this,n),Un.applyMatrix3(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Un.fromBufferAttribute(this,n),Un.applyMatrix4(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Un.fromBufferAttribute(this,n),Un.applyNormalMatrix(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Un.fromBufferAttribute(this,n),Un.transformDirection(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Jt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array),o=Jt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array),o=Jt(o,this.array),c=Jt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Up&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wy extends ta{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Yy extends ta{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Vn extends ta{constructor(e,n,r){super(new Float32Array(e),n,r)}}const pb=new Fo,_o=new te,Mh=new te;class lm{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):pb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(_o,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Mh)),this.expandByPoint(_o.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mb=0;const ki=new _n,bh=new Gn,al=new te,wi=new Fo,vo=new Fo,Hn=new te;class Ui extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?Yy:Wy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,n,r){return ki.makeTranslation(e,n,r),this.applyMatrix4(ki),this}scale(e,n,r){return ki.makeScale(e,n,r),this.applyMatrix4(ki),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(al).negate(),this.translate(al.x,al.y,al.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const p=n[c];vo.setFromBufferAttribute(p),this.morphTargetsRelative?(Hn.addVectors(wi.min,vo.min),wi.expandByPoint(Hn),Hn.addVectors(wi.max,vo.max),wi.expandByPoint(Hn)):(wi.expandByPoint(vo.min),wi.expandByPoint(vo.max))}wi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)Hn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Hn));if(n)for(let c=0,f=n.length;c<f;c++){const p=n[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Hn.fromBufferAttribute(p,h),m&&(al.fromBufferAttribute(e,h),Hn.add(al)),o=Math.max(o,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let A=0;A<r.count;A++)p[A]=new te,m[A]=new te;const h=new te,v=new te,x=new te,_=new ot,b=new ot,R=new ot,N=new te,T=new te;function E(A,O,Y){h.fromBufferAttribute(r,A),v.fromBufferAttribute(r,O),x.fromBufferAttribute(r,Y),_.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),R.fromBufferAttribute(c,Y),v.sub(h),x.sub(h),b.sub(_),R.sub(_);const k=1/(b.x*R.y-R.x*b.y);isFinite(k)&&(N.copy(v).multiplyScalar(R.y).addScaledVector(x,-b.y).multiplyScalar(k),T.copy(x).multiplyScalar(b.x).addScaledVector(v,-R.x).multiplyScalar(k),p[A].add(N),p[O].add(N),p[Y].add(N),m[A].add(T),m[O].add(T),m[Y].add(T))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,O=U.length;A<O;++A){const Y=U[A],k=Y.start,$=Y.count;for(let ge=k,me=k+$;ge<me;ge+=3)E(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const L=new te,M=new te,I=new te,P=new te;function F(A){I.fromBufferAttribute(o,A),P.copy(I);const O=p[A];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),M.crossVectors(P,O);const k=M.dot(m[A])<0?-1:1;f.setXYZW(A,L.x,L.y,L.z,k)}for(let A=0,O=U.length;A<O;++A){const Y=U[A],k=Y.start,$=Y.count;for(let ge=k,me=k+$;ge<me;ge+=3)F(e.getX(ge+0)),F(e.getX(ge+1)),F(e.getX(ge+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ta(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new te,c=new te,f=new te,p=new te,m=new te,h=new te,v=new te,x=new te;if(e)for(let _=0,b=e.count;_<b;_+=3){const R=e.getX(_+0),N=e.getX(_+1),T=e.getX(_+2);o.fromBufferAttribute(n,R),c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,T),v.subVectors(f,c),x.subVectors(o,c),v.cross(x),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,N),h.fromBufferAttribute(r,T),p.add(v),m.add(v),h.add(v),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(N,m.x,m.y,m.z),r.setXYZ(T,h.x,h.y,h.z)}else for(let _=0,b=n.count;_<b;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),v.subVectors(f,c),x.subVectors(o,c),v.cross(x),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Hn.fromBufferAttribute(e,n),Hn.normalize(),e.setXYZ(n,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,_=new h.constructor(m.length*v);let b=0,R=0;for(let N=0,T=m.length;N<T;N++){p.isInterleavedBufferAttribute?b=m[N]*p.data.stride+p.offset:b=m[N]*v;for(let E=0;E<v;E++)_[R++]=h[b++]}return new ta(_,v,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],h=e(m,r);n.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,x=h.length;v<x;v++){const _=h[v],b=e(_,r);m.push(b)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,_=h.length;x<_;x++){const b=h[x];v.push(b.toJSON(e.data))}v.length>0&&(o[m]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const c=e.morphAttributes;for(const h in c){const v=[],x=c[h];for(let _=0,b=x.length;_<b;_++)v.push(x[_].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const x=f[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Up,this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[r+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ri=new te;class Pu{constructor(e,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)ri.fromBufferAttribute(this,n),ri.applyMatrix4(e),this.setXYZ(n,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)ri.fromBufferAttribute(this,n),ri.applyNormalMatrix(e),this.setXYZ(n,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)ri.fromBufferAttribute(this,n),ri.transformDirection(e),this.setXYZ(n,ri.x,ri.y,ri.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Jt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ji(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ji(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ji(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ji(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array),o=Jt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),r=Jt(r,this.array),o=Jt(o,this.array),c=Jt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Iu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new ta(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Iu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _b=0;class bl extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=gl,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gl&&(r.blending=this.blending),this.side!==Us&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ot().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qy extends bl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sl;const yo=new te,rl=new te,ll=new te,ol=new ot,xo=new ot,Zy=new _n,au=new te,So=new te,su=new te,Nv=new ot,Th=new ot,Uv=new ot;class vb extends Gn{constructor(e=new qy){if(super(),this.isSprite=!0,this.type="Sprite",sl===void 0){sl=new Ui;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new gb(n,5);sl.setIndex([0,1,2,0,2,3]),sl.setAttribute("position",new Pu(r,3,0,!1)),sl.setAttribute("uv",new Pu(r,2,3,!1))}this.geometry=sl,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rl.setFromMatrixScale(this.matrixWorld),Zy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ll.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rl.multiplyScalar(-ll.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const f=this.center;ru(au.set(-.5,-.5,0),ll,f,rl,o,c),ru(So.set(.5,-.5,0),ll,f,rl,o,c),ru(su.set(.5,.5,0),ll,f,rl,o,c),Nv.set(0,0),Th.set(1,0),Uv.set(1,1);let p=e.ray.intersectTriangle(au,So,su,!1,yo);if(p===null&&(ru(So.set(-.5,.5,0),ll,f,rl,o,c),Th.set(0,1),p=e.ray.intersectTriangle(au,su,So,!1,yo),p===null))return;const m=e.ray.origin.distanceTo(yo);m<e.near||m>e.far||n.push({distance:m,point:yo.clone(),uv:Xi.getInterpolation(yo,au,So,su,Nv,Th,Uv,new ot),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ru(a,e,n,r,o,c){ol.subVectors(a,n).addScalar(.5).multiply(r),o!==void 0?(xo.x=c*ol.x-o*ol.y,xo.y=o*ol.x+c*ol.y):xo.copy(ol),a.copy(e),a.x+=xo.x,a.y+=xo.y,a.applyMatrix4(Zy)}const ka=new te,Ah=new te,lu=new te,As=new te,Rh=new te,ou=new te,Ch=new te;class om{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ka)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ka.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ka.copy(this.origin).addScaledVector(this.direction,n),ka.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ah.copy(e).add(n).multiplyScalar(.5),lu.copy(n).sub(e).normalize(),As.copy(this.origin).sub(Ah);const c=e.distanceTo(n)*.5,f=-this.direction.dot(lu),p=As.dot(this.direction),m=-As.dot(lu),h=As.lengthSq(),v=Math.abs(1-f*f);let x,_,b,R;if(v>0)if(x=f*m-p,_=f*p-m,R=c*v,x>=0)if(_>=-R)if(_<=R){const N=1/v;x*=N,_*=N,b=x*(x+f*_+2*p)+_*(f*x+_+2*m)+h}else _=c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;else _=-c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;else _<=-R?(x=Math.max(0,-(-f*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h):_<=R?(x=0,_=Math.min(Math.max(-c,-m),c),b=_*(_+2*m)+h):(x=Math.max(0,-(f*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h);else _=f>0?-c:c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ah).addScaledVector(lu,_),b}intersectSphere(e,n){ka.subVectors(e.center,this.origin);const r=ka.dot(this.direction),o=ka.dot(ka)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),v>=0?(c=(e.min.y-_.y)*v,f=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,f=(e.min.y-_.y)*v),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ka)!==null}intersectTriangle(e,n,r,o,c){Rh.subVectors(n,e),ou.subVectors(r,e),Ch.crossVectors(Rh,ou);let f=this.direction.dot(Ch),p;if(f>0){if(o)return null;p=1}else if(f<0)p=-1,f=-f;else return null;As.subVectors(this.origin,e);const m=p*this.direction.dot(ou.crossVectors(As,ou));if(m<0)return null;const h=p*this.direction.dot(Rh.cross(As));if(h<0||m+h>f)return null;const v=-p*As.dot(Ch);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Do extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lv=new _n,ar=new om,cu=new lm,Ov=new te,uu=new te,fu=new te,du=new te,wh=new te,hu=new te,Iv=new te,pu=new te;class Ln extends Gn{constructor(e=new Ui,n=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(c&&p){hu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],x=c[m];v!==0&&(wh.fromBufferAttribute(x,e),f?hu.addScaledVector(wh,v):hu.addScaledVector(wh.sub(n),v))}n.add(hu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(c),ar.copy(e.ray).recast(e.near),!(cu.containsPoint(ar.origin)===!1&&(ar.intersectSphere(cu,Ov)===null||ar.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(Lv.copy(c).invert(),ar.copy(e.ray).applyMatrix4(Lv),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,_=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let R=0,N=_.length;R<N;R++){const T=_[R],E=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(p.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=p.getX(M),F=p.getX(M+1),A=p.getX(M+2);o=mu(this,E,e,r,h,v,x,P,F,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let T=R,E=N;T<E;T+=3){const U=p.getX(T),L=p.getX(T+1),M=p.getX(T+2);o=mu(this,f,e,r,h,v,x,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let R=0,N=_.length;R<N;R++){const T=_[R],E=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(m.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=M,F=M+1,A=M+2;o=mu(this,E,e,r,h,v,x,P,F,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let T=R,E=N;T<E;T+=3){const U=T,L=T+1,M=T+2;o=mu(this,f,e,r,h,v,x,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}}}function yb(a,e,n,r,o,c,f,p){let m;if(e.side===_i?m=r.intersectTriangle(f,c,o,!0,p):m=r.intersectTriangle(o,c,f,e.side===Us,p),m===null)return null;pu.copy(p),pu.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(pu);return h<n.near||h>n.far?null:{distance:h,point:pu.clone(),object:a}}function mu(a,e,n,r,o,c,f,p,m,h){a.getVertexPosition(p,uu),a.getVertexPosition(m,fu),a.getVertexPosition(h,du);const v=yb(a,e,n,r,uu,fu,du,Iv);if(v){const x=new te;Xi.getBarycoord(Iv,uu,fu,du,x),o&&(v.uv=Xi.getInterpolatedAttribute(o,p,m,h,x,new ot)),c&&(v.uv1=Xi.getInterpolatedAttribute(c,p,m,h,x,new ot)),f&&(v.normal=Xi.getInterpolatedAttribute(f,p,m,h,x,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new te,materialIndex:0};Xi.getNormal(uu,fu,du,_.normal),v.face=_,v.barycoord=x}return v}class xb extends ii{constructor(e=null,n=1,r=1,o,c,f,p,m,h=$n,v=$n,x,_){super(null,f,p,m,h,v,o,c,x,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new te,Sb=new te,Eb=new gt;class Cs{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Dh.subVectors(r,n).cross(Sb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Dh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(o,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Eb.getNormalMatrix(e),o=this.coplanarPoint(Dh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new lm,Mb=new ot(.5,.5),gu=new te;class cm{constructor(e=new Cs,n=new Cs,r=new Cs,o=new Cs,c=new Cs,f=new Cs){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=pa,r=!1){const o=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],v=c[4],x=c[5],_=c[6],b=c[7],R=c[8],N=c[9],T=c[10],E=c[11],U=c[12],L=c[13],M=c[14],I=c[15];if(o[0].setComponents(h-f,b-v,E-R,I-U).normalize(),o[1].setComponents(h+f,b+v,E+R,I+U).normalize(),o[2].setComponents(h+p,b+x,E+N,I+L).normalize(),o[3].setComponents(h-p,b-x,E-N,I-L).normalize(),r)o[4].setComponents(m,_,T,M).normalize(),o[5].setComponents(h-m,b-_,E-T,I-M).normalize();else if(o[4].setComponents(h-m,b-_,E-T,I-M).normalize(),n===pa)o[5].setComponents(h+m,b+_,E+T,I+M).normalize();else if(n===Oo)o[5].setComponents(m,_,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=Mb.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ky extends ii{constructor(e=[],n=mr,r,o,c,f,p,m,h,v){super(e,n,r,o,c,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bb extends ii{constructor(e,n,r,o,c,f,p,m,h){super(e,n,r,o,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sl extends ii{constructor(e,n,r=_a,o,c,f,p=$n,m=$n,h,v=Za,x=1){if(v!==Za&&v!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:x};super(_,o,c,f,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Tb extends Sl{constructor(e,n=_a,r=mr,o,c,f=$n,p=$n,m,h=Za){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,n,r,o,c,f,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qy extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Is extends Ui{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const p=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],v=[],x=[];let _=0,b=0;R("z","y","x",-1,-1,r,n,e,f,c,0),R("z","y","x",1,-1,r,n,-e,f,c,1),R("x","z","y",1,1,e,r,n,o,f,2),R("x","z","y",1,-1,e,r,-n,o,f,3),R("x","y","z",1,-1,e,n,r,o,c,4),R("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Vn(h,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(x,2));function R(N,T,E,U,L,M,I,P,F,A,O){const Y=M/F,k=I/A,$=M/2,ge=I/2,me=P/2,ie=F+1,H=A+1;let W=0,le=0;const Se=new te;for(let De=0;De<H;De++){const z=De*k-ge;for(let K=0;K<ie;K++){const Me=K*Y-$;Se[N]=Me*U,Se[T]=z*L,Se[E]=me,h.push(Se.x,Se.y,Se.z),Se[N]=0,Se[T]=0,Se[E]=P>0?1:-1,v.push(Se.x,Se.y,Se.z),x.push(K/F),x.push(1-De/A),W+=1}}for(let De=0;De<A;De++)for(let z=0;z<F;z++){const K=_+z+ie*De,Me=_+z+ie*(De+1),Oe=_+(z+1)+ie*(De+1),ze=_+(z+1)+ie*De;m.push(K,Me,ze),m.push(Me,Oe,ze),le+=6}p.addGroup(b,le,O),b+=le,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wu extends Ui{constructor(e=1,n=1,r=1,o=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const h=this;o=Math.floor(o),c=Math.floor(c);const v=[],x=[],_=[],b=[];let R=0;const N=[],T=r/2;let E=0;U(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Vn(x,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(b,2));function U(){const M=new te,I=new te;let P=0;const F=(n-e)/r;for(let A=0;A<=c;A++){const O=[],Y=A/c,k=Y*(n-e)+e;for(let $=0;$<=o;$++){const ge=$/o,me=ge*m+p,ie=Math.sin(me),H=Math.cos(me);I.x=k*ie,I.y=-Y*r+T,I.z=k*H,x.push(I.x,I.y,I.z),M.set(ie,F,H).normalize(),_.push(M.x,M.y,M.z),b.push(ge,1-Y),O.push(R++)}N.push(O)}for(let A=0;A<o;A++)for(let O=0;O<c;O++){const Y=N[O][A],k=N[O+1][A],$=N[O+1][A+1],ge=N[O][A+1];(e>0||O!==0)&&(v.push(Y,k,ge),P+=3),(n>0||O!==c-1)&&(v.push(k,$,ge),P+=3)}h.addGroup(E,P,0),E+=P}function L(M){const I=R,P=new ot,F=new te;let A=0;const O=M===!0?e:n,Y=M===!0?1:-1;for(let $=1;$<=o;$++)x.push(0,T*Y,0),_.push(0,Y,0),b.push(.5,.5),R++;const k=R;for(let $=0;$<=o;$++){const me=$/o*m+p,ie=Math.cos(me),H=Math.sin(me);F.x=O*H,F.y=T*Y,F.z=O*ie,x.push(F.x,F.y,F.z),_.push(0,Y,0),P.x=ie*.5+.5,P.y=H*.5*Y+.5,b.push(P.x,P.y),R++}for(let $=0;$<o;$++){const ge=I+$,me=k+$;M===!0?v.push(me,me+1,ge):v.push(me+1,me,ge),A+=3}h.addGroup(E,A,M===!0?1:2),E+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class No extends Wu{constructor(e=1,n=1,r=32,o=1,c=!1,f=0,p=Math.PI*2){super(0,e,n,r,o,c,f,p),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:p}}static fromJSON(e){return new No(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hr extends Ui{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,p=Math.floor(r),m=Math.floor(o),h=p+1,v=m+1,x=e/p,_=n/m,b=[],R=[],N=[],T=[];for(let E=0;E<v;E++){const U=E*_-f;for(let L=0;L<h;L++){const M=L*x-c;R.push(M,-U,0),N.push(0,0,1),T.push(L/p),T.push(1-E/m)}}for(let E=0;E<m;E++)for(let U=0;U<p;U++){const L=U+h*E,M=U+h*(E+1),I=U+1+h*(E+1),P=U+1+h*E;b.push(L,M,P),b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Vn(R,3)),this.setAttribute("normal",new Vn(N,3)),this.setAttribute("uv",new Vn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class um extends Ui{constructor(e=.5,n=1,r=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:f},r=Math.max(3,r),o=Math.max(1,o);const p=[],m=[],h=[],v=[];let x=e;const _=(n-e)/o,b=new te,R=new ot;for(let N=0;N<=o;N++){for(let T=0;T<=r;T++){const E=c+T/r*f;b.x=x*Math.cos(E),b.y=x*Math.sin(E),m.push(b.x,b.y,b.z),h.push(0,0,1),R.x=(b.x/n+1)/2,R.y=(b.y/n+1)/2,v.push(R.x,R.y)}x+=_}for(let N=0;N<o;N++){const T=N*(r+1);for(let E=0;E<r;E++){const U=E+T,L=U,M=U+r+1,I=U+r+2,P=U+1;p.push(L,M,P),p.push(M,I,P)}}this.setIndex(p),this.setAttribute("position",new Vn(m,3)),this.setAttribute("normal",new Vn(h,3)),this.setAttribute("uv",new Vn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new um(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fm extends Ui{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:p},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+p,Math.PI);let h=0;const v=[],x=new te,_=new te,b=[],R=[],N=[],T=[];for(let E=0;E<=r;E++){const U=[],L=E/r,M=f+L*p,I=e*Math.cos(M),P=Math.sqrt(e*e-I*I);let F=0;E===0&&f===0?F=.5/n:E===r&&m===Math.PI&&(F=-.5/n);for(let A=0;A<=n;A++){const O=A/n,Y=o+O*c;x.x=-P*Math.cos(Y),x.y=I,x.z=P*Math.sin(Y),R.push(x.x,x.y,x.z),_.copy(x).normalize(),N.push(_.x,_.y,_.z),T.push(O+F,1-L),U.push(h++)}v.push(U)}for(let E=0;E<r;E++)for(let U=0;U<n;U++){const L=v[E][U+1],M=v[E][U],I=v[E+1][U],P=v[E+1][U+1];(E!==0||f>0)&&b.push(L,M,P),(E!==r-1||m<Math.PI)&&b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Vn(R,3)),this.setAttribute("normal",new Vn(N,3)),this.setAttribute("uv",new Vn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function El(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Pv(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Pv(o[0])){const c=[];for(let f=0,p=o.length;f<p;f++)c[f]=o[f].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function li(a){const e={};for(let n=0;n<a.length;n++){const r=El(a[n]);for(const o in r)e[o]=r[o]}return e}function Pv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Ab(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function $y(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Rb={clone:El,merge:li};var Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class va extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=El(e.uniforms),this.uniformsGroups=Ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new ot().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Db extends va{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zv extends bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nb extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ub extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jy extends Gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Lb extends jy{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Nh=new _n,Bv=new te,Fv=new te;class Ob{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cm,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Bv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bv),Fv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fv),n.updateMatrixWorld(),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Oo||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _u=new te,vu=new Ls,oa=new te;class Jy extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_u,vu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,oa.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(_u,vu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new te,Hv=new ot,kv=new ot;class Vi extends Jy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z)}getViewSize(e,n){return this.getViewBounds(e,Hv,kv),n.subVectors(kv,Hv)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Co*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*r/h,o*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class dm extends Jy{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ib extends Ob{constructor(){super(new dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pb extends jy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new Ib}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const cl=-90,ul=1;class zb extends Gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(cl,ul,e,n);o.layers=this.layers,this.add(o);const c=new Vi(cl,ul,e,n);c.layers=this.layers,this.add(c);const f=new Vi(cl,ul,e,n);f.layers=this.layers,this.add(f);const p=new Vi(cl,ul,e,n);p.layers=this.layers,this.add(p);const m=new Vi(cl,ul,e,n);m.layers=this.layers,this.add(m);const h=new Vi(cl,ul,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,p,m]=n;for(const h of n)this.remove(h);if(e===pa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,3,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(x,_,b),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Bb extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gv=new _n;class Fb{constructor(e,n,r=0,o=1/0){this.ray=new om(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Gv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gv),this}intersectObject(e,n=!0,r=[]){return Op(e,this,r,n),r.sort(Vv),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Op(e[o],this,r,n);return r.sort(Vv),r}}function Vv(a,e){return a.distance-e.distance}function Op(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,p=c.length;f<p;f++)Op(c[f],e,n,!0)}}class Xv{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bm=class bm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};bm.prototype.isMatrix2=!0;let Wv=bm;class Hb extends zs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yv(a,e,n,r){const o=kb(r);switch(n){case Fy:return a*e;case ky:return a*e/o.components*o.byteLength;case jp:return a*e/o.components*o.byteLength;case gr:return a*e*2/o.components*o.byteLength;case Jp:return a*e*2/o.components*o.byteLength;case Hy:return a*e*3/o.components*o.byteLength;case ea:return a*e*4/o.components*o.byteLength;case em:return a*e*4/o.components*o.byteLength;case Mu:case bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case np:case ap:return Math.max(a,16)*Math.max(e,8)/4;case tp:case ip:return Math.max(a,8)*Math.max(e,8)/2;case sp:case rp:case op:case cp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case lp:case Du:case up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case _p:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case vp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Tp:case Ap:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Cp:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Nu:case Dp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kb(a){switch(a){case Di:case Iy:return{byteLength:1,components:1};case Uo:case Py:case qa:return{byteLength:2,components:1};case Qp:case $p:return{byteLength:2,components:4};case _a:case Kp:case ha:return{byteLength:4,components:1};case zy:case By:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Gb(a){const e=new WeakMap;function n(p,m){const h=p.array,v=p.usage,x=h.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,h,v),p.onUploadCallback();let b;if(h instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=a.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=a.SHORT;else if(h instanceof Uint32Array)b=a.UNSIGNED_INT;else if(h instanceof Int32Array)b=a.INT;else if(h instanceof Int8Array)b=a.BYTE;else if(h instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const v=m.array,x=m.updateRanges;if(a.bindBuffer(h,p),x.length===0)a.bufferSubData(h,0,v);else{x.sort((b,R)=>b.start-R.start);let _=0;for(let b=1;b<x.length;b++){const R=x[_],N=x[b];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++_,x[_]=N)}x.length=_+1;for(let b=0,R=x.length;b<R;b++){const N=x[b];a.bufferSubData(h,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(a.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,n(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:o,remove:c,update:f}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
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
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
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
}`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I1=`#ifdef USE_ENVMAP
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
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
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
#endif`,k1=`uniform sampler2D dfgLUT;
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
}`,G1=`
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
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
#endif`,eT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
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
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dT=`#ifdef USE_NORMALMAP
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
#endif`,hT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CT=`float getShadowMask() {
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
}`,wT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
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
}`,QT=`#if DEPTH_PACKING == 3200
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
}`,$T=`#define DISTANCE
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
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,rA=`#define LAMBERT
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
}`,lA=`#define MATCAP
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
}`,oA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,dA=`#define PHONG
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
}`,hA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,xA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Vb,alphahash_pars_fragment:Xb,alphamap_fragment:Wb,alphamap_pars_fragment:Yb,alphatest_fragment:qb,alphatest_pars_fragment:Zb,aomap_fragment:Kb,aomap_pars_fragment:Qb,batching_pars_vertex:$b,batching_vertex:jb,begin_vertex:Jb,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:l1,color_fragment:o1,color_pars_fragment:c1,color_pars_vertex:u1,color_vertex:f1,common:d1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:_1,emissivemap_pars_fragment:v1,colorspace_fragment:y1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:E1,envmap_pars_fragment:M1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:I1,envmap_vertex:T1,fog_vertex:A1,fog_pars_vertex:R1,fog_fragment:C1,fog_pars_fragment:w1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:N1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:L1,lights_pars_begin:O1,lights_toon_fragment:P1,lights_toon_pars_fragment:z1,lights_phong_fragment:B1,lights_phong_pars_fragment:F1,lights_physical_fragment:H1,lights_physical_pars_fragment:k1,lights_fragment_begin:G1,lights_fragment_maps:V1,lights_fragment_end:X1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:K1,map_fragment:Q1,map_pars_fragment:$1,map_particle_fragment:j1,map_particle_pars_fragment:J1,metalnessmap_fragment:eT,metalnessmap_pars_fragment:tT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:aT,morphtarget_pars_vertex:sT,morphtarget_vertex:rT,normal_fragment_begin:lT,normal_fragment_maps:oT,normal_pars_fragment:cT,normal_pars_vertex:uT,normal_vertex:fT,normalmap_pars_fragment:dT,clearcoat_normal_fragment_begin:hT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:gT,opaque_fragment:_T,packing:vT,premultiplied_alpha_fragment:yT,project_vertex:xT,dithering_fragment:ST,dithering_pars_fragment:ET,roughnessmap_fragment:MT,roughnessmap_pars_fragment:bT,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:AT,shadowmap_vertex:RT,shadowmask_pars_fragment:CT,skinbase_vertex:wT,skinning_pars_vertex:DT,skinning_vertex:NT,skinnormal_vertex:UT,specularmap_fragment:LT,specularmap_pars_fragment:OT,tonemapping_fragment:IT,tonemapping_pars_fragment:PT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:FT,uv_pars_vertex:HT,uv_vertex:kT,worldpos_vertex:GT,background_vert:VT,background_frag:XT,backgroundCube_vert:WT,backgroundCube_frag:YT,cube_vert:qT,cube_frag:ZT,depth_vert:KT,depth_frag:QT,distance_vert:$T,distance_frag:jT,equirect_vert:JT,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:sA,meshlambert_frag:rA,meshmatcap_vert:lA,meshmatcap_frag:oA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:yA,shadow_frag:xA,sprite_vert:SA,sprite_frag:EA},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},fa={basic:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:li([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:li([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:li([Ve.points,Ve.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:li([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:li([Ve.common,Ve.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:li([Ve.sprite,Ve.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:li([Ve.common,Ve.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:li([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};fa.physical={uniforms:li([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const yu={r:0,b:0,g:0},MA=new _n,tx=new gt;tx.set(-1,0,0,0,1,0,0,0,1);function bA(a,e,n,r,o,c){const f=new Rt(0);let p=o===!0?0:1,m,h,v=null,x=0,_=null;function b(U){let L=U.isScene===!0?U.background:null;if(L&&L.isTexture){const M=U.backgroundBlurriness>0;L=e.get(L,M)}return L}function R(U){let L=!1;const M=b(U);M===null?T(f,p):M&&M.isColor&&(T(M,1),L=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function N(U,L){const M=b(L);M&&(M.isCubeTexture||M.mapping===Xu)?(h===void 0&&(h=new Ln(new Is(1,1,1),new va({name:"BackgroundCubeMaterial",uniforms:El(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(MA.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(tx),h.material.toneMapped=Lt.getTransfer(M.colorSpace)!==jt,(v!==M||x!==M.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,v=M,x=M.version,_=a.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(m===void 0&&(m=new Ln(new hr(2,2),new va({name:"BackgroundMaterial",uniforms:El(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=M,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(M.colorSpace)!==jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),m.material.uniforms.uvTransform.value.copy(M.matrix),(v!==M||x!==M.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,v=M,x=M.version,_=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function T(U,L){U.getRGB(yu,$y(a)),n.buffers.color.setClear(yu.r,yu.g,yu.b,L,c)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,L=1){f.set(U),p=L,T(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,T(f,p)},render:R,addToRenderList:N,dispose:E}}function TA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,f=!1;function p(k,$,ge,me,ie){let H=!1;const W=x(k,me,ge,$);c!==W&&(c=W,h(c.object)),H=b(k,me,ge,ie),H&&R(k,me,ge,ie),ie!==null&&e.update(ie,a.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,M(k,$,ge,me),ie!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function v(k){return a.deleteVertexArray(k)}function x(k,$,ge,me){const ie=me.wireframe===!0;let H=r[$.id];H===void 0&&(H={},r[$.id]=H);const W=k.isInstancedMesh===!0?k.id:0;let le=H[W];le===void 0&&(le={},H[W]=le);let Se=le[ge.id];Se===void 0&&(Se={},le[ge.id]=Se);let De=Se[ie];return De===void 0&&(De=_(m()),Se[ie]=De),De}function _(k){const $=[],ge=[],me=[];for(let ie=0;ie<n;ie++)$[ie]=0,ge[ie]=0,me[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ge,attributeDivisors:me,object:k,attributes:{},index:null}}function b(k,$,ge,me){const ie=c.attributes,H=$.attributes;let W=0;const le=ge.getAttributes();for(const Se in le)if(le[Se].location>=0){const z=ie[Se];let K=H[Se];if(K===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;W++}return c.attributesNum!==W||c.index!==me}function R(k,$,ge,me){const ie={},H=$.attributes;let W=0;const le=ge.getAttributes();for(const Se in le)if(le[Se].location>=0){let z=H[Se];z===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(z=k.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),ie[Se]=K,W++}c.attributes=ie,c.attributesNum=W,c.index=me}function N(){const k=c.newAttributes;for(let $=0,ge=k.length;$<ge;$++)k[$]=0}function T(k){E(k,0)}function E(k,$){const ge=c.newAttributes,me=c.enabledAttributes,ie=c.attributeDivisors;ge[k]=1,me[k]===0&&(a.enableVertexAttribArray(k),me[k]=1),ie[k]!==$&&(a.vertexAttribDivisor(k,$),ie[k]=$)}function U(){const k=c.newAttributes,$=c.enabledAttributes;for(let ge=0,me=$.length;ge<me;ge++)$[ge]!==k[ge]&&(a.disableVertexAttribArray(ge),$[ge]=0)}function L(k,$,ge,me,ie,H,W){W===!0?a.vertexAttribIPointer(k,$,ge,ie,H):a.vertexAttribPointer(k,$,ge,me,ie,H)}function M(k,$,ge,me){N();const ie=me.attributes,H=ge.getAttributes(),W=$.defaultAttributeValues;for(const le in H){const Se=H[le];if(Se.location>=0){let De=ie[le];if(De===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(De=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(De=k.instanceColor)),De!==void 0){const z=De.normalized,K=De.itemSize,Me=e.get(De);if(Me===void 0)continue;const Oe=Me.buffer,ze=Me.type,ae=Me.bytesPerElement,Re=ze===a.INT||ze===a.UNSIGNED_INT||De.gpuType===Kp;if(De.isInterleavedBufferAttribute){const Ce=De.data,Be=Ce.stride,at=De.offset;if(Ce.isInstancedInterleavedBuffer){for(let et=0;et<Se.locationSize;et++)E(Se.location+et,Ce.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let et=0;et<Se.locationSize;et++)T(Se.location+et);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let et=0;et<Se.locationSize;et++)L(Se.location+et,K/Se.locationSize,ze,z,Be*ae,(at+K/Se.locationSize*et)*ae,Re)}else{if(De.isInstancedBufferAttribute){for(let Ce=0;Ce<Se.locationSize;Ce++)E(Se.location+Ce,De.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ce=0;Ce<Se.locationSize;Ce++)T(Se.location+Ce);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let Ce=0;Ce<Se.locationSize;Ce++)L(Se.location+Ce,K/Se.locationSize,ze,z,K*ae,K/Se.locationSize*Ce*ae,Re)}}else if(W!==void 0){const z=W[le];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(Se.location,z);break;case 3:a.vertexAttrib3fv(Se.location,z);break;case 4:a.vertexAttrib4fv(Se.location,z);break;default:a.vertexAttrib1fv(Se.location,z)}}}}U()}function I(){O();for(const k in r){const $=r[k];for(const ge in $){const me=$[ge];for(const ie in me){const H=me[ie];for(const W in H)v(H[W].object),delete H[W];delete me[ie]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const $=r[k.id];for(const ge in $){const me=$[ge];for(const ie in me){const H=me[ie];for(const W in H)v(H[W].object),delete H[W];delete me[ie]}}delete r[k.id]}function F(k){for(const $ in r){const ge=r[$];for(const me in ge){const ie=ge[me];if(ie[k.id]===void 0)continue;const H=ie[k.id];for(const W in H)v(H[W].object),delete H[W];delete ie[k.id]}}}function A(k){for(const $ in r){const ge=r[$],me=k.isInstancedMesh===!0?k.id:0,ie=ge[me];if(ie!==void 0){for(const H in ie){const W=ie[H];for(const le in W)v(W[le].object),delete W[le];delete ie[H]}delete ge[me],Object.keys(ge).length===0&&delete r[$]}}}function O(){Y(),f=!0,c!==o&&(c=o,h(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:T,disableUnusedAttributes:U}}function AA(a,e,n){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),n.update(h,r,1)}function f(m,h,v){v!==0&&(a.drawArraysInstanced(r,m,h,v),n.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let _=0;for(let b=0;b<v;b++)_+=h[b];n.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function RA(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==ea&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const A=F===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Di&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ha&&!A)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=m(h);v!==h&&(ft("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),E=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:M,maxSamples:I,samples:P}}function CA(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Cs,p=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const b=x.length!==0||_||r!==0||o;return o=_,r=x.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){n=v(x,_,0)},this.setState=function(x,_,b){const R=x.clippingPlanes,N=x.clipIntersection,T=x.clipShadows,E=a.get(x);if(!o||R===null||R.length===0||c&&!T)c?v(null):h();else{const U=c?0:r,L=U*4;let M=E.clippingState||null;m.value=M,M=v(R,_,L,b);for(let I=0;I!==L;++I)M[I]=n[I];E.clippingState=M,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,_,b,R){const N=x!==null?x.length:0;let T=null;if(N!==0){if(T=m.value,R!==!0||T===null){const E=b+N*4,U=_.matrixWorldInverse;p.getNormalMatrix(U),(T===null||T.length<E)&&(T=new Float32Array(E));for(let L=0,M=b;L!==N;++L,M+=4)f.copy(x[L]).applyMatrix4(U,p),f.normal.toArray(T,M),T[M+3]=f.constant}m.value=T,m.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}const Ds=4,qv=[.125,.215,.35,.446,.526,.582],or=20,wA=256,Eo=new dm,Zv=new Rt;let Uh=null,Lh=0,Oh=0,Ih=!1;const DA=new te;class Kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:p=DA}=c;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Lh,Oh),this._renderer.xr.enabled=Ih,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mr||e.mapping===xl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:qa,format:ea,colorSpace:Uu,depthBuffer:!1},o=Qv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NA(c)),this._blurMaterial=LA(c,e,n),this._ggxMaterial=UA(c,e,n)}return o}_compileMaterial(e){const n=new Ln(new Ui,e);this._renderer.compile(n,Eo)}_sceneToCubeUV(e,n,r,o,c){const m=new Vi(90,1,n,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,b=x.toneMapping;x.getClearColor(Zv),x.toneMapping=ma,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new Is,new Do({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let E=!1;const U=e.background;U?U.isColor&&(T.color.copy(U),e.background=null,E=!0):(T.color.copy(Zv),E=!0);for(let L=0;L<6;L++){const M=L%3;M===0?(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):M===1?(m.up.set(0,0,h[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;fl(o,M*I,L>2?I:0,I,I),x.setRenderTarget(o),E&&x.render(N,m),x.render(e,m)}x.toneMapping=b,x.autoClear=_,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===mr||e.mapping===xl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;fl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Eo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),_=0+h*1.25,b=x*_,{_lodMax:R}=this,N=this._sizeLods[r],T=3*N*(r>R-Ds?r-R+Ds:0),E=4*(this._cubeSize-N);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=R-n,fl(c,T,E,3*N,2*N),o.setRenderTarget(c),o.render(p,Eo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-r,fl(e,T,E,3*N,2*N),o.setRenderTarget(e),o.render(p,Eo)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[o];x.material=h;const _=h.uniforms,b=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*or-1),N=c/R,T=isFinite(c)?1+Math.floor(v*N):or;T>or&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${or}`);const E=[];let U=0;for(let F=0;F<or;++F){const A=F/N,O=Math.exp(-A*A/2);E.push(O),F===0?U+=O:F<T&&(U+=2*O)}for(let F=0;F<E.length;F++)E[F]=E[F]/U;_.envMap.value=e.texture,_.samples.value=T,_.weights.value=E,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:L}=this;_.dTheta.value=R,_.mipInt.value=L-r;const M=this._sizeLods[o],I=3*M*(o>L-Ds?o-L+Ds:0),P=4*(this._cubeSize-M);fl(n,I,P,3*M,2*M),m.setRenderTarget(n),m.render(x,Eo)}}function NA(a){const e=[],n=[],r=[];let o=a;const c=a-Ds+1+qv.length;for(let f=0;f<c;f++){const p=Math.pow(2,o);e.push(p);let m=1/p;f>a-Ds?m=qv[f-a+Ds-1]:f===0&&(m=0),n.push(m);const h=1/(p-2),v=-h,x=1+h,_=[v,v,x,v,x,x,v,v,x,x,v,x],b=6,R=6,N=3,T=2,E=1,U=new Float32Array(N*R*b),L=new Float32Array(T*R*b),M=new Float32Array(E*R*b);for(let P=0;P<b;P++){const F=P%3*2/3-1,A=P>2?0:-1,O=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];U.set(O,N*R*P),L.set(_,T*R*P);const Y=[P,P,P,P,P,P];M.set(Y,E*R*P)}const I=new Ui;I.setAttribute("position",new ta(U,N)),I.setAttribute("uv",new ta(L,T)),I.setAttribute("faceIndex",new ta(M,E)),r.push(new Ln(I,null)),o>Ds&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Qv(a,e,n){const r=new ga(a,e,n);return r.texture.mapping=Xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function UA(a,e,n){return new va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function LA(a,e,n){const r=new Float32Array(or),o=new te(0,1,0);return new va({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function $v(){return new va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function jv(){return new va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}class nx extends ga{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ky(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Is(5,5,5),c=new va({name:"CubemapFromEquirect",uniforms:El(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_i,blending:Xa});c.uniforms.tEquirect.value=n;const f=new Ln(o,c),p=n.minFilter;return n.minFilter===fr&&(n.minFilter=kn),new zb(1,10,this).update(e,f),n.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function OA(a){let e=new WeakMap,n=new WeakMap,r=null;function o(_,b=!1){return _==null?null:b?f(_):c(_)}function c(_){if(_&&_.isTexture){const b=_.mapping;if(b===sh||b===rh)if(e.has(_)){const R=e.get(_).texture;return p(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const N=new nx(R.height);return N.fromEquirectangularTexture(a,_),e.set(_,N),_.addEventListener("dispose",h),p(N.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const b=_.mapping,R=b===sh||b===rh,N=b===mr||b===xl;if(R||N){let T=n.get(_);const E=T!==void 0?T.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==E)return r===null&&(r=new Kv(a)),T=R?r.fromEquirectangular(_,T):r.fromCubemap(_,T),T.texture.pmremVersion=_.pmremVersion,n.set(_,T),T.texture;if(T!==void 0)return T.texture;{const U=_.image;return R&&U&&U.height>0||N&&U&&m(U)?(r===null&&(r=new Kv(a)),T=R?r.fromEquirectangular(_):r.fromCubemap(_),T.texture.pmremVersion=_.pmremVersion,n.set(_,T),_.addEventListener("dispose",v),T.texture):null}}}return _}function p(_,b){return b===sh?_.mapping=mr:b===rh&&(_.mapping=xl),_}function m(_){let b=0;const R=6;for(let N=0;N<R;N++)_[N]!==void 0&&b++;return b===R}function h(_){const b=_.target;b.removeEventListener("dispose",h);const R=e.get(b);R!==void 0&&(e.delete(b),R.dispose())}function v(_){const b=_.target;b.removeEventListener("dispose",v);const R=n.get(b);R!==void 0&&(n.delete(b),R.dispose())}function x(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function IA(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&_l("WebGLRenderer: "+r+" extension not supported."),o}}}function PA(a,e,n,r){const o={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",f),delete o[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function p(x,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,n.memory.geometries++),_}function m(x){const _=x.attributes;for(const b in _)e.update(_[b],a.ARRAY_BUFFER)}function h(x){const _=[],b=x.index,R=x.attributes.position;let N=0;if(R===void 0)return;if(b!==null){const U=b.array;N=b.version;for(let L=0,M=U.length;L<M;L+=3){const I=U[L+0],P=U[L+1],F=U[L+2];_.push(I,P,P,F,F,I)}}else{const U=R.array;N=R.version;for(let L=0,M=U.length/3-1;L<M;L+=3){const I=L+0,P=L+1,F=L+2;_.push(I,P,P,F,F,I)}}const T=new(R.count>=65535?Yy:Wy)(_,1);T.version=N;const E=c.get(x);E&&e.remove(E),c.set(x,T)}function v(x){const _=c.get(x);if(_){const b=x.index;b!==null&&_.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function zA(a,e,n){let r;function o(x){r=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,_){a.drawElements(r,_,c,x*f),n.update(_,r,1)}function h(x,_,b){b!==0&&(a.drawElementsInstanced(r,_,c,x*f,b),n.update(_,r,b))}function v(x,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,x,0,b);let N=0;for(let T=0;T<b;T++)N+=_[T];n.update(N,r,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function BA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=p*(c/3);break;case a.LINES:n.lines+=p*(c/2);break;case a.LINE_STRIP:n.lines+=p*(c-1);break;case a.LINE_LOOP:n.lines+=p*c;break;case a.POINTS:n.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function FA(a,e,n){const r=new WeakMap,o=new xn;function c(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let _=r.get(p);if(_===void 0||_.count!==x){let O=function(){F.dispose(),r.delete(p),p.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,N=p.morphAttributes.color!==void 0,T=p.morphAttributes.position||[],E=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),R===!0&&(L=2),N===!0&&(L=3);let M=p.attributes.position.count*L,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*I*4*x),F=new Vy(P,M,I,x);F.type=ha,F.needsUpdate=!0;const A=L*4;for(let Y=0;Y<x;Y++){const k=T[Y],$=E[Y],ge=U[Y],me=M*I*4*Y;for(let ie=0;ie<k.count;ie++){const H=ie*A;b===!0&&(o.fromBufferAttribute(k,ie),P[me+H+0]=o.x,P[me+H+1]=o.y,P[me+H+2]=o.z,P[me+H+3]=0),R===!0&&(o.fromBufferAttribute($,ie),P[me+H+4]=o.x,P[me+H+5]=o.y,P[me+H+6]=o.z,P[me+H+7]=0),N===!0&&(o.fromBufferAttribute(ge,ie),P[me+H+8]=o.x,P[me+H+9]=o.y,P[me+H+10]=o.z,P[me+H+11]=ge.itemSize===4?o.w:1)}}_={count:x,texture:F,size:new ot(M,I)},r.set(p,_),p.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let b=0;for(let N=0;N<h.length;N++)b+=h[N];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",R),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function HA(a,e,n,r,o){let c=new WeakMap;function f(h){const v=o.render.frame,x=h.geometry,_=e.get(h,x);if(c.get(_)!==v&&(e.update(_),c.set(_,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return _}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:f,dispose:p}}const kA={[Cy]:"LINEAR_TONE_MAPPING",[wy]:"REINHARD_TONE_MAPPING",[Dy]:"CINEON_TONE_MAPPING",[Zp]:"ACES_FILMIC_TONE_MAPPING",[Uy]:"AGX_TONE_MAPPING",[Ly]:"NEUTRAL_TONE_MAPPING",[Ny]:"CUSTOM_TONE_MAPPING"};function GA(a,e,n,r,o,c){const f=new ga(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Sl(e,n):void 0}),p=new ga(e,n,{type:qa,depthBuffer:!1,stencilBuffer:!1}),m=new Ui;m.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Vn([0,2,0,0,2,0],2));const h=new Db({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ln(m,h),x=new dm(-1,1,1,-1,0,1);let _=null,b=null,R=!1,N,T=null,E=[],U=!1;this.setSize=function(L,M){f.setSize(L,M),p.setSize(L,M);for(let I=0;I<E.length;I++){const P=E[I];P.setSize&&P.setSize(L,M)}},this.setEffects=function(L){E=L,U=E.length>0&&E[0].isRenderPass===!0;const M=f.width,I=f.height;for(let P=0;P<E.length;P++){const F=E[P];F.setSize&&F.setSize(M,I)}},this.begin=function(L,M){if(R||L.toneMapping===ma&&E.length===0)return!1;if(T=M,M!==null){const I=M.width,P=M.height;(f.width!==I||f.height!==P)&&this.setSize(I,P)}return U===!1&&L.setRenderTarget(f),N=L.toneMapping,L.toneMapping=ma,!0},this.hasRenderPass=function(){return U},this.end=function(L,M){L.toneMapping=N,R=!0;let I=f,P=p;for(let F=0;F<E.length;F++){const A=E[F];if(A.enabled!==!1&&(A.render(L,P,I,M),A.needsSwap!==!1)){const O=I;I=P,P=O}}if(_!==L.outputColorSpace||b!==L.toneMapping){_=L.outputColorSpace,b=L.toneMapping,h.defines={},Lt.getTransfer(_)===jt&&(h.defines.SRGB_TRANSFER="");const F=kA[b];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(T),L.render(v,x),T=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const ix=new ii,Ip=new Sl(1,1),ax=new Vy,sx=new ab,rx=new Ky,Jv=[],ey=[],ty=new Float32Array(16),ny=new Float32Array(9),iy=new Float32Array(4);function Tl(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=n,a[f].toArray(c,p)}return c}function zn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Bn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function qu(a,e){let n=ey[e];n===void 0&&(n=new Int32Array(e),ey[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function VA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function XA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;a.uniform2fv(this.addr,e),Bn(n,e)}}function WA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zn(n,e))return;a.uniform3fv(this.addr,e),Bn(n,e)}}function YA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;a.uniform4fv(this.addr,e),Bn(n,e)}}function qA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(zn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Bn(n,e)}else{if(zn(n,r))return;iy.set(r),a.uniformMatrix2fv(this.addr,!1,iy),Bn(n,r)}}function ZA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(zn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Bn(n,e)}else{if(zn(n,r))return;ny.set(r),a.uniformMatrix3fv(this.addr,!1,ny),Bn(n,r)}}function KA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(zn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Bn(n,e)}else{if(zn(n,r))return;ty.set(r),a.uniformMatrix4fv(this.addr,!1,ty),Bn(n,r)}}function QA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function $A(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;a.uniform2iv(this.addr,e),Bn(n,e)}}function jA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zn(n,e))return;a.uniform3iv(this.addr,e),Bn(n,e)}}function JA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;a.uniform4iv(this.addr,e),Bn(n,e)}}function e2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function t2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;a.uniform2uiv(this.addr,e),Bn(n,e)}}function n2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zn(n,e))return;a.uniform3uiv(this.addr,e),Bn(n,e)}}function i2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;a.uniform4uiv(this.addr,e),Bn(n,e)}}function a2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Ip.compareFunction=n.isReversedDepthBuffer()?nm:tm,c=Ip):c=ix,n.setTexture2D(e||c,o)}function s2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||sx,o)}function r2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||rx,o)}function l2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ax,o)}function o2(a){switch(a){case 5126:return VA;case 35664:return XA;case 35665:return WA;case 35666:return YA;case 35674:return qA;case 35675:return ZA;case 35676:return KA;case 5124:case 35670:return QA;case 35667:case 35671:return $A;case 35668:case 35672:return jA;case 35669:case 35673:return JA;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return l2}}function c2(a,e){a.uniform1fv(this.addr,e)}function u2(a,e){const n=Tl(e,this.size,2);a.uniform2fv(this.addr,n)}function f2(a,e){const n=Tl(e,this.size,3);a.uniform3fv(this.addr,n)}function d2(a,e){const n=Tl(e,this.size,4);a.uniform4fv(this.addr,n)}function h2(a,e){const n=Tl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function p2(a,e){const n=Tl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function m2(a,e){const n=Tl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function g2(a,e){a.uniform1iv(this.addr,e)}function _2(a,e){a.uniform2iv(this.addr,e)}function v2(a,e){a.uniform3iv(this.addr,e)}function y2(a,e){a.uniform4iv(this.addr,e)}function x2(a,e){a.uniform1uiv(this.addr,e)}function S2(a,e){a.uniform2uiv(this.addr,e)}function E2(a,e){a.uniform3uiv(this.addr,e)}function M2(a,e){a.uniform4uiv(this.addr,e)}function b2(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);zn(r,c)||(a.uniform1iv(this.addr,c),Bn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=Ip:f=ix;for(let p=0;p!==o;++p)n.setTexture2D(e[p]||f,c[p])}function T2(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);zn(r,c)||(a.uniform1iv(this.addr,c),Bn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||sx,c[f])}function A2(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);zn(r,c)||(a.uniform1iv(this.addr,c),Bn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||rx,c[f])}function R2(a,e,n){const r=this.cache,o=e.length,c=qu(n,o);zn(r,c)||(a.uniform1iv(this.addr,c),Bn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||ax,c[f])}function C2(a){switch(a){case 5126:return c2;case 35664:return u2;case 35665:return f2;case 35666:return d2;case 35674:return h2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return _2;case 35668:case 35672:return v2;case 35669:case 35673:return y2;case 5125:return x2;case 36294:return S2;case 36295:return E2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return R2}}class w2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=o2(n.type)}}class D2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=C2(n.type)}}class N2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const p=o[c];p.setValue(e,n[p.id],r)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function ay(a,e){a.seq.push(e),a.map[e.id]=e}function U2(a,e,n){const r=a.name,o=r.length;for(Ph.lastIndex=0;;){const c=Ph.exec(r),f=Ph.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===o){ay(n,h===void 0?new w2(p,a,e):new D2(p,a,e));break}else{let x=n.map[p];x===void 0&&(x=new N2(p),ay(n,x)),n=x}}}class Ru{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(n,f),m=e.getUniformLocation(n,p.name);U2(p,m,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const p=n[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function sy(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const L2=37297;let O2=0;function I2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${n[f]}`)}return r.join(`
`)}const ry=new gt;function P2(a){Lt._getMatrix(ry,Lt.workingColorSpace,a);const e=`mat3( ${ry.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(a)){case Lu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ly(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+I2(a.getShaderSource(e),p)}else return c}function z2(a,e){const n=P2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const B2={[Cy]:"Linear",[wy]:"Reinhard",[Dy]:"Cineon",[Zp]:"ACESFilmic",[Uy]:"AgX",[Ly]:"Neutral",[Ny]:"Custom"};function F2(a,e){const n=B2[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xu=new te;function H2(){Lt.getLuminanceCoefficients(xu);const a=xu.x.toFixed(4),e=xu.y.toFixed(4),n=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function G2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function V2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let p=1;c.type===a.FLOAT_MAT2&&(p=2),c.type===a.FLOAT_MAT3&&(p=3),c.type===a.FLOAT_MAT4&&(p=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:p}}return n}function Ao(a){return a!==""}function oy(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cy(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(a){return a.replace(X2,Y2)}const W2=new Map;function Y2(a,e){let n=Et[e];if(n===void 0){const r=W2.get(e);if(r!==void 0)n=Et[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pp(n)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uy(a){return a.replace(q2,Z2)}function Z2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fy(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const K2={[Ro]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Q2(a){return K2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $2={[mr]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE",[Xu]:"ENVMAP_TYPE_CUBE_UV"};function j2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":$2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const J2={[xl]:"ENVMAP_MODE_REFRACTION"};function eR(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tR={[Ry]:"ENVMAP_BLENDING_MULTIPLY",[EM]:"ENVMAP_BLENDING_MIX",[MM]:"ENVMAP_BLENDING_ADD"};function nR(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":tR[a.combine]||"ENVMAP_BLENDING_NONE"}function iR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function aR(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,p=n.fragmentShader;const m=Q2(n),h=j2(n),v=eR(n),x=nR(n),_=iR(n),b=k2(n),R=G2(c),N=o.createProgram();let T,E,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Ao).join(`
`),T.length>0&&(T+=`
`),E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Ao).join(`
`),E.length>0&&(E+=`
`)):(T=[fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),E=[fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ma?"#define TONE_MAPPING":"",n.toneMapping!==ma?Et.tonemapping_pars_fragment:"",n.toneMapping!==ma?F2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,z2("linearToOutputTexel",n.outputColorSpace),H2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),f=Pp(f),f=oy(f,n),f=cy(f,n),p=Pp(p),p=oy(p,n),p=cy(p,n),f=uy(f),p=uy(p),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,T=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,E=["#define varying in",n.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const L=U+T+f,M=U+E+p,I=sy(o,o.VERTEX_SHADER,L),P=sy(o,o.FRAGMENT_SHADER,M);o.attachShader(N,I),o.attachShader(N,P),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(k){if(a.debug.checkShaderErrors){const $=o.getProgramInfoLog(N)||"",ge=o.getShaderInfoLog(I)||"",me=o.getShaderInfoLog(P)||"",ie=$.trim(),H=ge.trim(),W=me.trim();let le=!0,Se=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(le=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,N,I,P);else{const De=ly(o,I,"vertex"),z=ly(o,P,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+De+`
`+z)}else ie!==""?ft("WebGLProgram: Program Info Log:",ie):(H===""||W==="")&&(Se=!1);Se&&(k.diagnostics={runnable:le,programLog:ie,vertexShader:{log:H,prefix:T},fragmentShader:{log:W,prefix:E}})}o.deleteShader(I),o.deleteShader(P),A=new Ru(o,N),O=V2(o,N)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(N,L2)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=P,this}let sR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new lR(e),n.set(e,r)),r}}class lR{constructor(e){this.id=sR++,this.code=e,this.usedTimes=0}}function oR(a){return a===gr||a===Du||a===Nu}function cR(a,e,n,r,o,c){const f=new sm,p=new rR,m=new Set,h=[],v=new Map,x=r.logarithmicDepthBuffer;let _=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return m.add(A),A===0?"uv":`uv${A}`}function N(A,O,Y,k,$,ge){const me=k.fog,ie=$.geometry,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,W=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,le=e.get(A.envMap||H,W),Se=le&&le.mapping===Xu?le.image.height:null,De=b[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const z=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,K=z!==void 0?z.length:0;let Me=0;ie.morphAttributes.position!==void 0&&(Me=1),ie.morphAttributes.normal!==void 0&&(Me=2),ie.morphAttributes.color!==void 0&&(Me=3);let Oe,ze,ae,Re;if(De){const We=fa[De];Oe=We.vertexShader,ze=We.fragmentShader}else{Oe=A.vertexShader,ze=A.fragmentShader;const We=p.getVertexShaderStage(A),rn=p.getFragmentShaderStage(A);p.update(A,We,rn),ae=We.id,Re=rn.id}const Ce=a.getRenderTarget(),Be=a.state.buffers.depth.getReversed(),at=$.isInstancedMesh===!0,et=$.isBatchedMesh===!0,Wt=!!A.map,ut=!!A.matcap,pt=!!le,dt=!!A.aoMap,ht=!!A.lightMap,Pt=!!A.bumpMap&&A.wireframe===!1,Ze=!!A.normalMap,_t=!!A.displacementMap,sn=!!A.emissiveMap,zt=!!A.metalnessMap,cn=!!A.roughnessMap,Q=A.anisotropy>0,Ot=A.clearcoat>0,ve=A.dispersion>0,C=A.iridescence>0,y=A.sheen>0,X=A.transmission>0,q=Q&&!!A.anisotropyMap,J=Ot&&!!A.clearcoatMap,re=Ot&&!!A.clearcoatNormalMap,de=Ot&&!!A.clearcoatRoughnessMap,ee=C&&!!A.iridescenceMap,se=C&&!!A.iridescenceThicknessMap,_e=y&&!!A.sheenColorMap,Ne=y&&!!A.sheenRoughnessMap,Ie=!!A.specularMap,we=!!A.specularColorMap,Ye=!!A.specularIntensityMap,qe=X&&!!A.transmissionMap,st=X&&!!A.thicknessMap,G=!!A.gradientMap,Ue=!!A.alphaMap,xe=A.alphaTest>0,Pe=!!A.alphaHash,ke=!!A.extensions;let Ae=ma;A.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const $e={shaderID:De,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:ze,defines:A.defines,customVertexShaderID:ae,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:et,batchingColor:et&&$._colorsTexture!==null,instancing:at,instancingColor:at&&$.instanceColor!==null,instancingMorph:at&&$.morphTexture!==null,outputColorSpace:Ce===null?a.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Wt,matcap:ut,envMap:pt,envMapMode:pt&&le.mapping,envMapCubeUVHeight:Se,aoMap:dt,lightMap:ht,bumpMap:Pt,normalMap:Ze,displacementMap:_t,emissiveMap:sn,normalMapObjectSpace:Ze&&A.normalMapType===AM,normalMapTangentSpace:Ze&&A.normalMapType===Np,packedNormalMap:Ze&&A.normalMapType===Np&&oR(A.normalMap.format),metalnessMap:zt,roughnessMap:cn,anisotropy:Q,anisotropyMap:q,clearcoat:Ot,clearcoatMap:J,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:ve,iridescence:C,iridescenceMap:ee,iridescenceThicknessMap:se,sheen:y,sheenColorMap:_e,sheenRoughnessMap:Ne,specularMap:Ie,specularColorMap:we,specularIntensityMap:Ye,transmission:X,transmissionMap:qe,thicknessMap:st,gradientMap:G,opaque:A.transparent===!1&&A.blending===gl&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:Pe,combine:A.combine,mapUv:Wt&&R(A.map.channel),aoMapUv:dt&&R(A.aoMap.channel),lightMapUv:ht&&R(A.lightMap.channel),bumpMapUv:Pt&&R(A.bumpMap.channel),normalMapUv:Ze&&R(A.normalMap.channel),displacementMapUv:_t&&R(A.displacementMap.channel),emissiveMapUv:sn&&R(A.emissiveMap.channel),metalnessMapUv:zt&&R(A.metalnessMap.channel),roughnessMapUv:cn&&R(A.roughnessMap.channel),anisotropyMapUv:q&&R(A.anisotropyMap.channel),clearcoatMapUv:J&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:re&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:se&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&R(A.sheenRoughnessMap.channel),specularMapUv:Ie&&R(A.specularMap.channel),specularColorMapUv:we&&R(A.specularColorMap.channel),specularIntensityMapUv:Ye&&R(A.specularIntensityMap.channel),transmissionMapUv:qe&&R(A.transmissionMap.channel),thicknessMapUv:st&&R(A.thicknessMap.channel),alphaMapUv:Ue&&R(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ze||Q),vertexNormals:!!ie.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ie.attributes.uv&&(Wt||Ue),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ie.attributes.normal===void 0&&Ze===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Be,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Me,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ge.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&Y.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Wt&&A.map.isVideoTexture===!0&&Lt.getTransfer(A.map.colorSpace)===jt,decodeVideoTextureEmissive:sn&&A.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(A.emissiveMap.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===da,flipSided:A.side===_i,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ke&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&A.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function T(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)O.push(Y),O.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(E(O,A),U(O,A),O.push(a.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function E(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function U(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function L(A){const O=b[A.type];let Y;if(O){const k=fa[O];Y=Rb.clone(k.uniforms)}else Y=A.uniforms;return Y}function M(A,O){let Y=v.get(O);return Y!==void 0?++Y.usedTimes:(Y=new aR(a,O,A,o),h.push(Y),v.set(O,Y)),Y}function I(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),v.delete(A.cacheKey),A.destroy()}}function P(A){p.remove(A)}function F(){p.dispose()}return{getParameters:N,getProgramCacheKey:T,getUniforms:L,acquireProgram:M,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:F}}function uR(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let p=a.get(f);return p===void 0&&(p={},a.set(f,p)),p}function r(f){a.delete(f)}function o(f,p,m){a.get(f)[p]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function fR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function dy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function hy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function p(_,b,R,N,T,E){let U=a[e];return U===void 0?(U={id:_.id,object:_,geometry:b,material:R,materialVariant:f(_),groupOrder:N,renderOrder:_.renderOrder,z:T,group:E},a[e]=U):(U.id=_.id,U.object=_,U.geometry=b,U.material=R,U.materialVariant=f(_),U.groupOrder=N,U.renderOrder=_.renderOrder,U.z=T,U.group=E),e++,U}function m(_,b,R,N,T,E){const U=p(_,b,R,N,T,E);R.transmission>0?r.push(U):R.transparent===!0?o.push(U):n.push(U)}function h(_,b,R,N,T,E){const U=p(_,b,R,N,T,E);R.transmission>0?r.unshift(U):R.transparent===!0?o.unshift(U):n.unshift(U)}function v(_,b,R){n.length>1&&n.sort(_||fR),r.length>1&&r.sort(b||dy),o.length>1&&o.sort(b||dy),R&&(n.reverse(),r.reverse(),o.reverse())}function x(){for(let _=e,b=a.length;_<b;_++){const R=a[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:x,sort:v}}function dR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new hy,a.set(r,[f])):o>=c.length?(f=new hy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function hR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Rt};break;case"SpotLight":n={position:new te,direction:new te,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=n,n}}}function pR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let mR=0;function gR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function _R(a){const e=new hR,n=pR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new _n,f=new _n;function p(h){let v=0,x=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,R=0,N=0,T=0,E=0,U=0,L=0,M=0,I=0,P=0,F=0;h.sort(gR);for(let O=0,Y=h.length;O<Y;O++){const k=h[O],$=k.color,ge=k.intensity,me=k.distance;let ie=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===gr?ie=k.shadow.map.texture:ie=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=$.r*ge,x+=$.g*ge,_+=$.b*ge;else if(k.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],ge);F++}else if(k.isDirectionalLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,le=n.get(k);le.shadowIntensity=W.intensity,le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,r.directionalShadow[b]=le,r.directionalShadowMap[b]=ie,r.directionalShadowMatrix[b]=k.shadow.matrix,U++}r.directional[b]=H,b++}else if(k.isSpotLight){const H=e.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy($).multiplyScalar(ge),H.distance=me,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[N]=H;const W=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,W.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[N]=W.matrix,k.castShadow){const le=n.get(k);le.shadowIntensity=W.intensity,le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,r.spotShadow[N]=le,r.spotShadowMap[N]=ie,M++}N++}else if(k.isRectAreaLight){const H=e.get(k);H.color.copy($).multiplyScalar(ge),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[T]=H,T++}else if(k.isPointLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const W=k.shadow,le=n.get(k);le.shadowIntensity=W.intensity,le.shadowBias=W.bias,le.shadowNormalBias=W.normalBias,le.shadowRadius=W.radius,le.shadowMapSize=W.mapSize,le.shadowCameraNear=W.camera.near,le.shadowCameraFar=W.camera.far,r.pointShadow[R]=le,r.pointShadowMap[R]=ie,r.pointShadowMatrix[R]=k.shadow.matrix,L++}r.point[R]=H,R++}else if(k.isHemisphereLight){const H=e.get(k);H.skyColor.copy(k.color).multiplyScalar(ge),H.groundColor.copy(k.groundColor).multiplyScalar(ge),r.hemi[E]=H,E++}}T>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==b||A.pointLength!==R||A.spotLength!==N||A.rectAreaLength!==T||A.hemiLength!==E||A.numDirectionalShadows!==U||A.numPointShadows!==L||A.numSpotShadows!==M||A.numSpotMaps!==I||A.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=N,r.rectArea.length=T,r.point.length=R,r.hemi.length=E,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=M+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,A.directionalLength=b,A.pointLength=R,A.spotLength=N,A.rectAreaLength=T,A.hemiLength=E,A.numDirectionalShadows=U,A.numPointShadows=L,A.numSpotShadows=M,A.numSpotMaps=I,A.numLightProbes=F,r.version=mR++)}function m(h,v){let x=0,_=0,b=0,R=0,N=0;const T=v.matrixWorldInverse;for(let E=0,U=h.length;E<U;E++){const L=h[E];if(L.isDirectionalLight){const M=r.directional[x];M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),x++}else if(L.isSpotLight){const M=r.spot[b];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),b++}else if(L.isRectAreaLight){const M=r.rectArea[R];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),f.identity(),c.copy(L.matrixWorld),c.premultiply(T),f.extractRotation(c),M.halfWidth.set(L.width*.5,0,0),M.halfHeight.set(0,L.height*.5,0),M.halfWidth.applyMatrix4(f),M.halfHeight.applyMatrix4(f),R++}else if(L.isPointLight){const M=r.point[_];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),_++}else if(L.isHemisphereLight){const M=r.hemi[N];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(T),N++}}}return{setup:p,setupView:m,state:r}}function py(a){const e=new _R(a),n=[],r=[],o=[];function c(_){x.camera=_,n.length=0,r.length=0,o.length=0}function f(_){n.push(_)}function p(_){r.push(_)}function m(_){o.push(_)}function h(){e.setup(n)}function v(_){e.setupView(n,_)}const x={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function vR(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let p;return f===void 0?(p=new py(a),e.set(o,[p])):c>=f.length?(p=new py(a),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:n,dispose:r}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
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
}`,SR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],ER=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],my=new _n,Mo=new te,zh=new te;function MR(a,e,n){let r=new cm;const o=new ot,c=new ot,f=new xn,p=new Nb,m=new Ub,h={},v=n.maxTextureSize,x={[Us]:_i,[_i]:Us,[da]:da},_=new va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:yR,fragmentShader:xR}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const R=new Ui;R.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Ln(R,_),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let E=this.type;this.render=function(P,F,A){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||P.length===0)return;this.type===iM&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);const O=a.getRenderTarget(),Y=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),$=a.state;$.setBlending(Xa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ge=E!==this.type;ge&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(ie=>ie.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,ie=P.length;me<ie;me++){const H=P[me],W=H.shadow;if(W===void 0){ft("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const le=W.getFrameExtents();o.multiply(le),c.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,W.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,W.mapSize.y=c.y));const Se=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Se,W.map===null||ge===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===To){if(H.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ga(o.x,o.y,{format:gr,type:qa,minFilter:kn,magFilter:kn,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new Sl(o.x,o.y,ha),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Za,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$n,W.map.depthTexture.magFilter=$n}else H.isPointLight?(W.map=new nx(o.x),W.map.depthTexture=new Tb(o.x,_a)):(W.map=new ga(o.x,o.y),W.map.depthTexture=new Sl(o.x,o.y,_a)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Za,this.type===Ro?(W.map.depthTexture.compareFunction=Se?nm:tm,W.map.depthTexture.minFilter=kn,W.map.depthTexture.magFilter=kn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$n,W.map.depthTexture.magFilter=$n);W.camera.updateProjectionMatrix()}const De=W.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<De;z++){if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,z),a.clear();else{z===0&&(a.setRenderTarget(W.map),a.clear());const K=W.getViewport(z);f.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),$.viewport(f)}if(H.isPointLight){const K=W.camera,Me=W.matrix,Oe=H.distance||K.far;Oe!==K.far&&(K.far=Oe,K.updateProjectionMatrix()),Mo.setFromMatrixPosition(H.matrixWorld),K.position.copy(Mo),zh.copy(K.position),zh.add(SR[z]),K.up.copy(ER[z]),K.lookAt(zh),K.updateMatrixWorld(),Me.makeTranslation(-Mo.x,-Mo.y,-Mo.z),my.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(my,K.coordinateSystem,K.reversedDepth)}else W.updateMatrices(H);r=W.getFrustum(),M(F,A,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===To&&U(W,A),W.needsUpdate=!1}E=this.type,T.needsUpdate=!1,a.setRenderTarget(O,Y,k)};function U(P,F){const A=e.update(N);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ga(o.x,o.y,{format:gr,type:qa})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(F,null,A,_,N,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(F,null,A,b,N,null)}function L(P,F,A,O){let Y=null;const k=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=A.isPointLight===!0?m:p,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=Y.uuid,ge=F.uuid;let me=h[$];me===void 0&&(me={},h[$]=me);let ie=me[ge];ie===void 0&&(ie=Y.clone(),me[ge]=ie,F.addEventListener("dispose",I)),Y=ie}if(Y.visible=F.visible,Y.wireframe=F.wireframe,O===To?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:x[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const $=a.properties.get(Y);$.light=A}return Y}function M(P,F,A,O,Y){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===To)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const ge=e.update(P),me=P.material;if(Array.isArray(me)){const ie=ge.groups;for(let H=0,W=ie.length;H<W;H++){const le=ie[H],Se=me[le.materialIndex];if(Se&&Se.visible){const De=L(P,Se,O,Y);P.onBeforeShadow(a,P,F,A,ge,De,le),a.renderBufferDirect(A,null,ge,De,P,le),P.onAfterShadow(a,P,F,A,ge,De,le)}}}else if(me.visible){const ie=L(P,me,O,Y);P.onBeforeShadow(a,P,F,A,ge,ie,null),a.renderBufferDirect(A,null,ge,ie,P,null),P.onAfterShadow(a,P,F,A,ge,ie,null)}}const $=P.children;for(let ge=0,me=$.length;ge<me;ge++)M($[ge],F,A,O,Y)}function I(P){P.target.removeEventListener("dispose",I);for(const A in h){const O=h[A],Y=P.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function bR(a,e){function n(){let G=!1;const Ue=new xn;let xe=null;const Pe=new xn(0,0,0,0);return{setMask:function(ke){xe!==ke&&!G&&(a.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){G=ke},setClear:function(ke,Ae,$e,We,rn){rn===!0&&(ke*=We,Ae*=We,$e*=We),Ue.set(ke,Ae,$e,We),Pe.equals(Ue)===!1&&(a.clearColor(ke,Ae,$e,We),Pe.copy(Ue))},reset:function(){G=!1,xe=null,Pe.set(-1,0,0,0)}}}function r(){let G=!1,Ue=!1,xe=null,Pe=null,ke=null;return{setReversed:function(Ae){if(Ue!==Ae){const $e=e.get("EXT_clip_control");Ae?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const We=ke;ke=null,this.setClear(We)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?Ce(a.DEPTH_TEST):Be(a.DEPTH_TEST)},setMask:function(Ae){xe!==Ae&&!G&&(a.depthMask(Ae),xe=Ae)},setFunc:function(Ae){if(Ue&&(Ae=PM[Ae]),Pe!==Ae){switch(Ae){case Yh:a.depthFunc(a.NEVER);break;case qh:a.depthFunc(a.ALWAYS);break;case Zh:a.depthFunc(a.LESS);break;case yl:a.depthFunc(a.LEQUAL);break;case Kh:a.depthFunc(a.EQUAL);break;case Qh:a.depthFunc(a.GEQUAL);break;case $h:a.depthFunc(a.GREATER);break;case jh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=Ae}},setLocked:function(Ae){G=Ae},setClear:function(Ae){ke!==Ae&&(ke=Ae,Ue&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){G=!1,xe=null,Pe=null,ke=null,Ue=!1}}}function o(){let G=!1,Ue=null,xe=null,Pe=null,ke=null,Ae=null,$e=null,We=null,rn=null;return{setTest:function(It){G||(It?Ce(a.STENCIL_TEST):Be(a.STENCIL_TEST))},setMask:function(It){Ue!==It&&!G&&(a.stencilMask(It),Ue=It)},setFunc:function(It,jn,ai){(xe!==It||Pe!==jn||ke!==ai)&&(a.stencilFunc(It,jn,ai),xe=It,Pe=jn,ke=ai)},setOp:function(It,jn,ai){(Ae!==It||$e!==jn||We!==ai)&&(a.stencilOp(It,jn,ai),Ae=It,$e=jn,We=ai)},setLocked:function(It){G=It},setClear:function(It){rn!==It&&(a.clearStencil(It),rn=It)},reset:function(){G=!1,Ue=null,xe=null,Pe=null,ke=null,Ae=null,$e=null,We=null,rn=null}}}const c=new n,f=new r,p=new o,m=new WeakMap,h=new WeakMap;let v={},x={},_={},b=new WeakMap,R=[],N=null,T=!1,E=null,U=null,L=null,M=null,I=null,P=null,F=null,A=new Rt(0,0,0),O=0,Y=!1,k=null,$=null,ge=null,me=null,ie=null;const H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,le=0;const Se=a.getParameter(a.VERSION);Se.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Se)[1]),W=le>=1):Se.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),W=le>=2);let De=null,z={};const K=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),Oe=new xn().fromArray(K),ze=new xn().fromArray(Me);function ae(G,Ue,xe,Pe){const ke=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(G,Ae),a.texParameteri(G,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(G,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<xe;$e++)G===a.TEXTURE_3D||G===a.TEXTURE_2D_ARRAY?a.texImage3D(Ue,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(Ue+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return Ae}const Re={};Re[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),Re[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Re[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ce(a.DEPTH_TEST),f.setFunc(yl),Pt(!1),Ze(dv),Ce(a.CULL_FACE),dt(Xa);function Ce(G){v[G]!==!0&&(a.enable(G),v[G]=!0)}function Be(G){v[G]!==!1&&(a.disable(G),v[G]=!1)}function at(G,Ue){return _[G]!==Ue?(a.bindFramebuffer(G,Ue),_[G]=Ue,G===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ue),G===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ue),!0):!1}function et(G,Ue){let xe=R,Pe=!1;if(G){xe=b.get(Ue),xe===void 0&&(xe=[],b.set(Ue,xe));const ke=G.textures;if(xe.length!==ke.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,$e=ke.length;Ae<$e;Ae++)xe[Ae]=a.COLOR_ATTACHMENT0+Ae;xe.length=ke.length,Pe=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(xe)}function Wt(G){return N!==G?(a.useProgram(G),N=G,!0):!1}const ut={[lr]:a.FUNC_ADD,[sM]:a.FUNC_SUBTRACT,[rM]:a.FUNC_REVERSE_SUBTRACT};ut[lM]=a.MIN,ut[oM]=a.MAX;const pt={[cM]:a.ZERO,[uM]:a.ONE,[fM]:a.SRC_COLOR,[Xh]:a.SRC_ALPHA,[_M]:a.SRC_ALPHA_SATURATE,[mM]:a.DST_COLOR,[hM]:a.DST_ALPHA,[dM]:a.ONE_MINUS_SRC_COLOR,[Wh]:a.ONE_MINUS_SRC_ALPHA,[gM]:a.ONE_MINUS_DST_COLOR,[pM]:a.ONE_MINUS_DST_ALPHA,[vM]:a.CONSTANT_COLOR,[yM]:a.ONE_MINUS_CONSTANT_COLOR,[xM]:a.CONSTANT_ALPHA,[SM]:a.ONE_MINUS_CONSTANT_ALPHA};function dt(G,Ue,xe,Pe,ke,Ae,$e,We,rn,It){if(G===Xa){T===!0&&(Be(a.BLEND),T=!1);return}if(T===!1&&(Ce(a.BLEND),T=!0),G!==aM){if(G!==E||It!==Y){if((U!==lr||I!==lr)&&(a.blendEquation(a.FUNC_ADD),U=lr,I=lr),It)switch(G){case gl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case hv:a.blendFunc(a.ONE,a.ONE);break;case pv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case mv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",G);break}else switch(G){case gl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case hv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case pv:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",G);break}L=null,M=null,P=null,F=null,A.set(0,0,0),O=0,E=G,Y=It}return}ke=ke||Ue,Ae=Ae||xe,$e=$e||Pe,(Ue!==U||ke!==I)&&(a.blendEquationSeparate(ut[Ue],ut[ke]),U=Ue,I=ke),(xe!==L||Pe!==M||Ae!==P||$e!==F)&&(a.blendFuncSeparate(pt[xe],pt[Pe],pt[Ae],pt[$e]),L=xe,M=Pe,P=Ae,F=$e),(We.equals(A)===!1||rn!==O)&&(a.blendColor(We.r,We.g,We.b,rn),A.copy(We),O=rn),E=G,Y=!1}function ht(G,Ue){G.side===da?Be(a.CULL_FACE):Ce(a.CULL_FACE);let xe=G.side===_i;Ue&&(xe=!xe),Pt(xe),G.blending===gl&&G.transparent===!1?dt(Xa):dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),c.setMask(G.colorWrite);const Pe=G.stencilWrite;p.setTest(Pe),Pe&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),sn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ce(a.SAMPLE_ALPHA_TO_COVERAGE):Be(a.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(G){k!==G&&(G?a.frontFace(a.CW):a.frontFace(a.CCW),k=G)}function Ze(G){G!==tM?(Ce(a.CULL_FACE),G!==$&&(G===dv?a.cullFace(a.BACK):G===nM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Be(a.CULL_FACE),$=G}function _t(G){G!==ge&&(W&&a.lineWidth(G),ge=G)}function sn(G,Ue,xe){G?(Ce(a.POLYGON_OFFSET_FILL),(me!==Ue||ie!==xe)&&(me=Ue,ie=xe,f.getReversed()&&(Ue=-Ue),a.polygonOffset(Ue,xe))):Be(a.POLYGON_OFFSET_FILL)}function zt(G){G?Ce(a.SCISSOR_TEST):Be(a.SCISSOR_TEST)}function cn(G){G===void 0&&(G=a.TEXTURE0+H-1),De!==G&&(a.activeTexture(G),De=G)}function Q(G,Ue,xe){xe===void 0&&(De===null?xe=a.TEXTURE0+H-1:xe=De);let Pe=z[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},z[xe]=Pe),(Pe.type!==G||Pe.texture!==Ue)&&(De!==xe&&(a.activeTexture(xe),De=xe),a.bindTexture(G,Ue||Re[G]),Pe.type=G,Pe.texture=Ue)}function Ot(){const G=z[De];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ve(){try{a.compressedTexImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function y(){try{a.texSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function X(){try{a.texSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function J(){try{a.compressedTexSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function re(){try{a.texStorage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function de(){try{a.texStorage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ee(){try{a.texImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function se(){try{a.texImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function _e(G){return x[G]!==void 0?x[G]:a.getParameter(G)}function Ne(G,Ue){x[G]!==Ue&&(a.pixelStorei(G,Ue),x[G]=Ue)}function Ie(G){Oe.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function we(G){ze.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function Ye(G,Ue){let xe=h.get(Ue);xe===void 0&&(xe=new WeakMap,h.set(Ue,xe));let Pe=xe.get(G);Pe===void 0&&(Pe=a.getUniformBlockIndex(Ue,G.name),xe.set(G,Pe))}function qe(G,Ue){const Pe=h.get(Ue).get(G);m.get(Ue)!==Pe&&(a.uniformBlockBinding(Ue,Pe,G.__bindingPointIndex),m.set(Ue,Pe))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),v={},x={},De=null,z={},_={},b=new WeakMap,R=[],N=null,T=!1,E=null,U=null,L=null,M=null,I=null,P=null,F=null,A=new Rt(0,0,0),O=0,Y=!1,k=null,$=null,ge=null,me=null,ie=null,Oe.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ce,disable:Be,bindFramebuffer:at,drawBuffers:et,useProgram:Wt,setBlending:dt,setMaterial:ht,setFlipSided:Pt,setCullFace:Ze,setLineWidth:_t,setPolygonOffset:sn,setScissorTest:zt,activeTexture:cn,bindTexture:Q,unbindTexture:Ot,compressedTexImage2D:ve,compressedTexImage3D:C,texImage2D:ee,texImage3D:se,pixelStorei:Ne,getParameter:_e,updateUBOMapping:Ye,uniformBlockBinding:qe,texStorage2D:re,texStorage3D:de,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:Ie,viewport:we,reset:st}}function TR(a,e,n,r,o,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,v=new WeakMap,x=new Set;let _;const b=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,y){return R?new OffscreenCanvas(C,y):Ou("canvas")}function T(C,y,X){let q=1;const J=ve(C);if((J.width>X||J.height>X)&&(q=X/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(q*J.width),de=Math.floor(q*J.height);_===void 0&&(_=N(re,de));const ee=y?N(re,de):_;return ee.width=re,ee.height=de,ee.getContext("2d").drawImage(C,0,0,re,de),ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+de+")."),ee}else return"data"in C&&ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function E(C){return C.generateMipmaps}function U(C){a.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(C,y,X,q,J,re=!1){if(C!==null){if(a[C]!==void 0)return a[C];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;q&&(de=e.get("EXT_texture_norm16"),de||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===a.RED&&(X===a.FLOAT&&(ee=a.R32F),X===a.HALF_FLOAT&&(ee=a.R16F),X===a.UNSIGNED_BYTE&&(ee=a.R8),X===a.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),X===a.SHORT&&de&&(ee=de.R16_SNORM_EXT)),y===a.RED_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.R8UI),X===a.UNSIGNED_SHORT&&(ee=a.R16UI),X===a.UNSIGNED_INT&&(ee=a.R32UI),X===a.BYTE&&(ee=a.R8I),X===a.SHORT&&(ee=a.R16I),X===a.INT&&(ee=a.R32I)),y===a.RG&&(X===a.FLOAT&&(ee=a.RG32F),X===a.HALF_FLOAT&&(ee=a.RG16F),X===a.UNSIGNED_BYTE&&(ee=a.RG8),X===a.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),X===a.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RG8UI),X===a.UNSIGNED_SHORT&&(ee=a.RG16UI),X===a.UNSIGNED_INT&&(ee=a.RG32UI),X===a.BYTE&&(ee=a.RG8I),X===a.SHORT&&(ee=a.RG16I),X===a.INT&&(ee=a.RG32I)),y===a.RGB_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RGB8UI),X===a.UNSIGNED_SHORT&&(ee=a.RGB16UI),X===a.UNSIGNED_INT&&(ee=a.RGB32UI),X===a.BYTE&&(ee=a.RGB8I),X===a.SHORT&&(ee=a.RGB16I),X===a.INT&&(ee=a.RGB32I)),y===a.RGBA_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RGBA8UI),X===a.UNSIGNED_SHORT&&(ee=a.RGBA16UI),X===a.UNSIGNED_INT&&(ee=a.RGBA32UI),X===a.BYTE&&(ee=a.RGBA8I),X===a.SHORT&&(ee=a.RGBA16I),X===a.INT&&(ee=a.RGBA32I)),y===a.RGB&&(X===a.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),X===a.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),X===a.UNSIGNED_INT_5_9_9_9_REV&&(ee=a.RGB9_E5),X===a.UNSIGNED_INT_10F_11F_11F_REV&&(ee=a.R11F_G11F_B10F)),y===a.RGBA){const se=re?Lu:Lt.getTransfer(J);X===a.FLOAT&&(ee=a.RGBA32F),X===a.HALF_FLOAT&&(ee=a.RGBA16F),X===a.UNSIGNED_BYTE&&(ee=se===jt?a.SRGB8_ALPHA8:a.RGBA8),X===a.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),X===a.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),X===a.UNSIGNED_SHORT_4_4_4_4&&(ee=a.RGBA4),X===a.UNSIGNED_SHORT_5_5_5_1&&(ee=a.RGB5_A1)}return(ee===a.R16F||ee===a.R32F||ee===a.RG16F||ee===a.RG32F||ee===a.RGBA16F||ee===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(C,y){let X;return C?y===null||y===_a||y===Lo?X=a.DEPTH24_STENCIL8:y===ha?X=a.DEPTH32F_STENCIL8:y===Uo&&(X=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_a||y===Lo?X=a.DEPTH_COMPONENT24:y===ha?X=a.DEPTH_COMPONENT32F:y===Uo&&(X=a.DEPTH_COMPONENT16),X}function P(C,y){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==$n&&C.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function F(C){const y=C.target;y.removeEventListener("dispose",F),O(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&x.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),k(y)}function O(C){const y=r.get(C);if(y.__webglInit===void 0)return;const X=C.source,q=b.get(X);if(q){const J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&Y(C),Object.keys(q).length===0&&b.delete(X)}r.remove(C)}function Y(C){const y=r.get(C);a.deleteTexture(y.__webglTexture);const X=C.source,q=b.get(X);delete q[y.__cacheKey],f.memory.textures--}function k(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)a.deleteFramebuffer(y.__webglFramebuffer[q][J]);else a.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)a.deleteFramebuffer(y.__webglFramebuffer[q]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=C.textures;for(let q=0,J=X.length;q<J;q++){const re=r.get(X[q]);re.__webglTexture&&(a.deleteTexture(re.__webglTexture),f.memory.textures--),r.remove(X[q])}r.remove(C)}let $=0;function ge(){$=0}function me(){return $}function ie(C){$=C}function H(){const C=$;return C>=o.maxTextures&&ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),$+=1,C}function W(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function le(C,y){const X=r.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const q=C.image;if(q===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(X,C,y);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,X.__webglTexture,a.TEXTURE0+y)}function Se(C,y){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Be(X,C,y);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,X.__webglTexture,a.TEXTURE0+y)}function De(C,y){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Be(X,C,y);return}n.bindTexture(a.TEXTURE_3D,X.__webglTexture,a.TEXTURE0+y)}function z(C,y){const X=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){at(X,C,y);return}n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture,a.TEXTURE0+y)}const K={[Jh]:a.REPEAT,[Va]:a.CLAMP_TO_EDGE,[ep]:a.MIRRORED_REPEAT},Me={[$n]:a.NEAREST,[bM]:a.NEAREST_MIPMAP_NEAREST,[Qc]:a.NEAREST_MIPMAP_LINEAR,[kn]:a.LINEAR,[lh]:a.LINEAR_MIPMAP_NEAREST,[fr]:a.LINEAR_MIPMAP_LINEAR},Oe={[RM]:a.NEVER,[UM]:a.ALWAYS,[CM]:a.LESS,[tm]:a.LEQUAL,[wM]:a.EQUAL,[nm]:a.GEQUAL,[DM]:a.GREATER,[NM]:a.NOTEQUAL};function ze(C,y){if(y.type===ha&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===lh||y.magFilter===Qc||y.magFilter===fr||y.minFilter===kn||y.minFilter===lh||y.minFilter===Qc||y.minFilter===fr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,K[y.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,K[y.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,K[y.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Me[y.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$n||y.minFilter!==Qc&&y.minFilter!==fr||y.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ae(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",F));const q=y.source;let J=b.get(q);J===void 0&&(J={},b.set(q,J));const re=W(y);if(re!==C.__cacheKey){J[re]===void 0&&(J[re]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,X=!0),J[re].usedTimes++;const de=J[C.__cacheKey];de!==void 0&&(J[C.__cacheKey].usedTimes--,de.usedTimes===0&&Y(y)),C.__cacheKey=re,C.__webglTexture=J[re].texture}return X}function Re(C,y,X){return Math.floor(Math.floor(C/X)/y)}function Ce(C,y,X,q){const re=C.updateRanges;if(re.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,X,q,y.data);else{re.sort((Ne,Ie)=>Ne.start-Ie.start);let de=0;for(let Ne=1;Ne<re.length;Ne++){const Ie=re[de],we=re[Ne],Ye=Ie.start+Ie.count,qe=Re(we.start,y.width,4),st=Re(Ie.start,y.width,4);we.start<=Ye+1&&qe===st&&Re(we.start+we.count-1,y.width,4)===qe?Ie.count=Math.max(Ie.count,we.start+we.count-Ie.start):(++de,re[de]=we)}re.length=de+1;const ee=n.getParameter(a.UNPACK_ROW_LENGTH),se=n.getParameter(a.UNPACK_SKIP_PIXELS),_e=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,Ie=re.length;Ne<Ie;Ne++){const we=re[Ne],Ye=Math.floor(we.start/4),qe=Math.ceil(we.count/4),st=Ye%y.width,G=Math.floor(Ye/y.width),Ue=qe,xe=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,st),n.pixelStorei(a.UNPACK_SKIP_ROWS,G),n.texSubImage2D(a.TEXTURE_2D,0,st,G,Ue,xe,X,q,y.data)}C.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ee),n.pixelStorei(a.UNPACK_SKIP_PIXELS,se),n.pixelStorei(a.UNPACK_SKIP_ROWS,_e)}}function Be(C,y,X){let q=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=a.TEXTURE_3D);const J=ae(C,y),re=y.source;n.bindTexture(q,C.__webglTexture,a.TEXTURE0+X);const de=r.get(re);if(re.version!==de.__version||J===!0){if(n.activeTexture(a.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const xe=Lt.getPrimaries(Lt.workingColorSpace),Pe=y.colorSpace===ws?null:Lt.getPrimaries(y.colorSpace),ke=y.colorSpace===ws||xe===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let se=T(y.image,!1,o.maxTextureSize);se=Ot(y,se);const _e=c.convert(y.format,y.colorSpace),Ne=c.convert(y.type);let Ie=M(y.internalFormat,_e,Ne,y.normalized,y.colorSpace,y.isVideoTexture);ze(q,y);let we;const Ye=y.mipmaps,qe=y.isVideoTexture!==!0,st=de.__version===void 0||J===!0,G=re.dataReady,Ue=P(y,se);if(y.isDepthTexture)Ie=I(y.format===dr,y.type),st&&(qe?n.texStorage2D(a.TEXTURE_2D,1,Ie,se.width,se.height):n.texImage2D(a.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,null));else if(y.isDataTexture)if(Ye.length>0){qe&&st&&n.texStorage2D(a.TEXTURE_2D,Ue,Ie,Ye[0].width,Ye[0].height);for(let xe=0,Pe=Ye.length;xe<Pe;xe++)we=Ye[xe],qe?G&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,we.width,we.height,_e,Ne,we.data):n.texImage2D(a.TEXTURE_2D,xe,Ie,we.width,we.height,0,_e,Ne,we.data);y.generateMipmaps=!1}else qe?(st&&n.texStorage2D(a.TEXTURE_2D,Ue,Ie,se.width,se.height),G&&Ce(y,se,_e,Ne)):n.texImage2D(a.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Ne,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&st&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ie,Ye[0].width,Ye[0].height,se.depth);for(let xe=0,Pe=Ye.length;xe<Pe;xe++)if(we=Ye[xe],y.format!==ea)if(_e!==null)if(qe){if(G)if(y.layerUpdates.size>0){const ke=Yv(we.width,we.height,y.format,y.type);for(const Ae of y.layerUpdates){const $e=we.data.subarray(Ae*ke/we.data.BYTES_PER_ELEMENT,(Ae+1)*ke/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Ae,we.width,we.height,1,_e,$e)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,we.width,we.height,se.depth,_e,we.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,we.width,we.height,se.depth,0,we.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,we.width,we.height,se.depth,_e,Ne,we.data):n.texImage3D(a.TEXTURE_2D_ARRAY,xe,Ie,we.width,we.height,se.depth,0,_e,Ne,we.data)}else{qe&&st&&n.texStorage2D(a.TEXTURE_2D,Ue,Ie,Ye[0].width,Ye[0].height);for(let xe=0,Pe=Ye.length;xe<Pe;xe++)we=Ye[xe],y.format!==ea?_e!==null?qe?G&&n.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,we.width,we.height,_e,we.data):n.compressedTexImage2D(a.TEXTURE_2D,xe,Ie,we.width,we.height,0,we.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,we.width,we.height,_e,Ne,we.data):n.texImage2D(a.TEXTURE_2D,xe,Ie,we.width,we.height,0,_e,Ne,we.data)}else if(y.isDataArrayTexture)if(qe){if(st&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Ie,se.width,se.height,se.depth),G)if(y.layerUpdates.size>0){const xe=Yv(se.width,se.height,y.format,y.type);for(const Pe of y.layerUpdates){const ke=se.data.subarray(Pe*xe/se.data.BYTES_PER_ELEMENT,(Pe+1)*xe/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,se.width,se.height,1,_e,Ne,ke)}y.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(y.isData3DTexture)qe?(st&&n.texStorage3D(a.TEXTURE_3D,Ue,Ie,se.width,se.height,se.depth),G&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ne,se.data)):n.texImage3D(a.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,_e,Ne,se.data);else if(y.isFramebufferTexture){if(st)if(qe)n.texStorage2D(a.TEXTURE_2D,Ue,Ie,se.width,se.height);else{let xe=se.width,Pe=se.height;for(let ke=0;ke<Ue;ke++)n.texImage2D(a.TEXTURE_2D,ke,Ie,xe,Pe,0,_e,Ne,null),xe>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),se.parentNode!==xe){xe.appendChild(se),x.add(y),xe.onpaint=Pe=>{const ke=Pe.changedElements;for(const Ae of x)ke.includes(Ae.image)&&(Ae.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,se);else{const ke=a.RGBA,Ae=a.RGBA,$e=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ke,Ae,$e,se)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(qe&&st){const xe=ve(Ye[0]);n.texStorage2D(a.TEXTURE_2D,Ue,Ie,xe.width,xe.height)}for(let xe=0,Pe=Ye.length;xe<Pe;xe++)we=Ye[xe],qe?G&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,_e,Ne,we):n.texImage2D(a.TEXTURE_2D,xe,Ie,_e,Ne,we);y.generateMipmaps=!1}else if(qe){if(st){const xe=ve(se);n.texStorage2D(a.TEXTURE_2D,Ue,Ie,xe.width,xe.height)}G&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,_e,Ne,se)}else n.texImage2D(a.TEXTURE_2D,0,Ie,_e,Ne,se);E(y)&&U(q),de.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,X){if(y.image.length!==6)return;const q=ae(C,y),J=y.source;n.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+X);const re=r.get(J);if(J.version!==re.__version||q===!0){n.activeTexture(a.TEXTURE0+X);const de=Lt.getPrimaries(Lt.workingColorSpace),ee=y.colorSpace===ws?null:Lt.getPrimaries(y.colorSpace),se=y.colorSpace===ws||de===ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,Ie=[];for(let Ae=0;Ae<6;Ae++)!_e&&!Ne?Ie[Ae]=T(y.image[Ae],!0,o.maxCubemapSize):Ie[Ae]=Ne?y.image[Ae].image:y.image[Ae],Ie[Ae]=Ot(y,Ie[Ae]);const we=Ie[0],Ye=c.convert(y.format,y.colorSpace),qe=c.convert(y.type),st=M(y.internalFormat,Ye,qe,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Ue=re.__version===void 0||q===!0,xe=J.dataReady;let Pe=P(y,we);ze(a.TEXTURE_CUBE_MAP,y);let ke;if(_e){G&&Ue&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,st,we.width,we.height);for(let Ae=0;Ae<6;Ae++){ke=Ie[Ae].mipmaps;for(let $e=0;$e<ke.length;$e++){const We=ke[$e];y.format!==ea?Ye!==null?G?xe&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,We.width,We.height,Ye,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,st,We.width,We.height,0,We.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,We.width,We.height,Ye,qe,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,st,We.width,We.height,0,Ye,qe,We.data)}}}else{if(ke=y.mipmaps,G&&Ue){ke.length>0&&Pe++;const Ae=ve(Ie[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,st,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ne){G?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ie[Ae].width,Ie[Ae].height,Ye,qe,Ie[Ae].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,st,Ie[Ae].width,Ie[Ae].height,0,Ye,qe,Ie[Ae].data);for(let $e=0;$e<ke.length;$e++){const rn=ke[$e].image[Ae].image;G?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,rn.width,rn.height,Ye,qe,rn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,st,rn.width,rn.height,0,Ye,qe,rn.data)}}else{G?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ye,qe,Ie[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,st,Ye,qe,Ie[Ae]);for(let $e=0;$e<ke.length;$e++){const We=ke[$e];G?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,Ye,qe,We.image[Ae]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,st,Ye,qe,We.image[Ae])}}}E(y)&&U(a.TEXTURE_CUBE_MAP),re.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function et(C,y,X,q,J,re){const de=c.convert(X.format,X.colorSpace),ee=c.convert(X.type),se=M(X.internalFormat,de,ee,X.normalized,X.colorSpace),_e=r.get(y),Ne=r.get(X);if(Ne.__renderTarget=y,!_e.__hasExternalTextures){const Ie=Math.max(1,y.width>>re),we=Math.max(1,y.height>>re);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?n.texImage3D(J,re,se,Ie,we,y.depth,0,de,ee,null):n.texImage2D(J,re,se,Ie,we,0,de,ee,null)}n.bindFramebuffer(a.FRAMEBUFFER,C),cn(y)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,J,Ne.__webglTexture,0,zt(y)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,J,Ne.__webglTexture,re),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Wt(C,y,X){if(a.bindRenderbuffer(a.RENDERBUFFER,C),y.depthBuffer){const q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,re=I(y.stencilBuffer,J),de=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;cn(y)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,zt(y),re,y.width,y.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,zt(y),re,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,re,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,C)}else{const q=y.textures;for(let J=0;J<q.length;J++){const re=q[J],de=c.convert(re.format,re.colorSpace),ee=c.convert(re.type),se=M(re.internalFormat,de,ee,re.normalized,re.colorSpace);cn(y)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,zt(y),se,y.width,y.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,zt(y),se,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,se,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(C,y,X){const q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=r.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),J.__webglTexture===void 0){J.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y.depthTexture);const _e=c.convert(y.depthTexture.format),Ne=c.convert(y.depthTexture.type);let Ie;y.depthTexture.format===Za?Ie=a.DEPTH_COMPONENT24:y.depthTexture.format===dr&&(Ie=a.DEPTH24_STENCIL8);for(let we=0;we<6;we++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ie,y.width,y.height,0,_e,Ne,null)}}else le(y.depthTexture,0);const re=J.__webglTexture,de=zt(y),ee=q?a.TEXTURE_CUBE_MAP_POSITIVE_X+X:a.TEXTURE_2D,se=y.depthTexture.format===dr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===Za)cn(y)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,ee,re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,se,ee,re,0);else if(y.depthTexture.format===dr)cn(y)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,ee,re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,se,ee,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(C){const y=r.get(C),X=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)ut(y.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?ut(y.__webglFramebuffer[0],C,0):ut(y.__webglFramebuffer,C,0)}else if(X){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=a.createRenderbuffer(),Wt(y.__webglDepthbuffer[q],C,!1);else{const J=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,re)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),Wt(y.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,re),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,re)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(C,y,X){const q=r.get(C);y!==void 0&&et(q.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),X!==void 0&&pt(C)}function ht(C){const y=C.texture,X=r.get(C),q=r.get(y);C.addEventListener("dispose",A);const J=C.textures,re=C.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=y.version,f.memory.textures++),re){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let se=0;se<y.mipmaps.length;se++)X.__webglFramebuffer[ee][se]=a.createFramebuffer()}else X.__webglFramebuffer[ee]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)X.__webglFramebuffer[ee]=a.createFramebuffer()}else X.__webglFramebuffer=a.createFramebuffer();if(de)for(let ee=0,se=J.length;ee<se;ee++){const _e=r.get(J[ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),f.memory.textures++)}if(C.samples>0&&cn(C)===!1){X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const se=J[ee];X.__webglColorRenderbuffer[ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const _e=c.convert(se.format,se.colorSpace),Ne=c.convert(se.type),Ie=M(se.internalFormat,_e,Ne,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),we=zt(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Ie,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),Wt(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),ze(a.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)et(X.__webglFramebuffer[ee][se],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else et(X.__webglFramebuffer[ee],C,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);E(y)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let ee=0,se=J.length;ee<se;ee++){const _e=J[ee],Ne=r.get(_e);let Ie=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ie,Ne.__webglTexture),ze(Ie,_e),et(X.__webglFramebuffer,C,_e,a.COLOR_ATTACHMENT0+ee,Ie,0),E(_e)&&U(Ie)}n.unbindTexture()}else{let ee=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),ze(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)et(X.__webglFramebuffer[se],C,y,a.COLOR_ATTACHMENT0,ee,se);else et(X.__webglFramebuffer,C,y,a.COLOR_ATTACHMENT0,ee,0);E(y)&&U(ee),n.unbindTexture()}C.depthBuffer&&pt(C)}function Pt(C){const y=C.textures;for(let X=0,q=y.length;X<q;X++){const J=y[X];if(E(J)){const re=L(C),de=r.get(J).__webglTexture;n.bindTexture(re,de),U(re),n.unbindTexture()}}}const Ze=[],_t=[];function sn(C){if(C.samples>0){if(cn(C)===!1){const y=C.textures,X=C.width,q=C.height;let J=a.COLOR_BUFFER_BIT;const re=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=r.get(C),ee=y.length>1;if(ee)for(let _e=0;_e<y.length;_e++)n.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const se=C.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ee){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Ne=r.get(y[_e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ne,0)}a.blitFramebuffer(0,0,X,q,0,0,X,q,J,a.NEAREST),m===!0&&(Ze.length=0,_t.length=0,Ze.push(a.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(re),_t.push(re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,_t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<y.length;_e++){n.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Ne=r.get(y[_e]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,Ne,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const y=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function zt(C){return Math.min(o.maxSamples,C.samples)}function cn(C){const y=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(C){const y=f.render.frame;v.get(C)!==y&&(v.set(C,y),C.update())}function Ot(C,y){const X=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Uu&&X!==ws&&(Lt.getTransfer(X)===jt?(q!==ea||J!==Di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",X)),y}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=ge,this.getTextureUnits=me,this.setTextureUnits=ie,this.setTexture2D=le,this.setTexture2DArray=Se,this.setTexture3D=De,this.setTextureCube=z,this.rebindTextures=dt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AR(a,e){function n(r,o=ws){let c;const f=Lt.getTransfer(o);if(r===Di)return a.UNSIGNED_BYTE;if(r===Qp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return a.UNSIGNED_SHORT_5_5_5_1;if(r===zy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===By)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Iy)return a.BYTE;if(r===Py)return a.SHORT;if(r===Uo)return a.UNSIGNED_SHORT;if(r===Kp)return a.INT;if(r===_a)return a.UNSIGNED_INT;if(r===ha)return a.FLOAT;if(r===qa)return a.HALF_FLOAT;if(r===Fy)return a.ALPHA;if(r===Hy)return a.RGB;if(r===ea)return a.RGBA;if(r===Za)return a.DEPTH_COMPONENT;if(r===dr)return a.DEPTH_STENCIL;if(r===ky)return a.RED;if(r===jp)return a.RED_INTEGER;if(r===gr)return a.RG;if(r===Jp)return a.RG_INTEGER;if(r===em)return a.RGBA_INTEGER;if(r===Mu||r===bu||r===Tu||r===Au)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===np||r===ip||r===ap)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===tp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sp||r===rp||r===lp||r===op||r===cp||r===Du||r===up)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sp||r===rp)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===lp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===op)return c.COMPRESSED_R11_EAC;if(r===cp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Du)return c.COMPRESSED_RG11_EAC;if(r===up)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===yp||r===xp||r===Sp||r===Ep||r===Mp||r===bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_p)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ep)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tp||r===Ap||r===Rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tp)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cp||r===wp||r===Nu||r===Dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Cp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CR=`
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

}`;class wR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Qy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new va({vertexShader:RR,fragmentShader:CR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new hr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DR extends zs{constructor(e,n){super();const r=this;let o=null,c=1,f=null,p="local-floor",m=1,h=null,v=null,x=null,_=null,b=null,R=null;const N=typeof XRWebGLBinding<"u",T=new wR,E={},U=n.getContextAttributes();let L=null,M=null;const I=[],P=[],F=new ot;let A=null;const O=new Vi;O.viewport=new xn;const Y=new Vi;Y.viewport=new xn;const k=[O,Y],$=new Bb;let ge=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Re=I[ae];return Re===void 0&&(Re=new hh,I[ae]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ae){let Re=I[ae];return Re===void 0&&(Re=new hh,I[ae]=Re),Re.getGripSpace()},this.getHand=function(ae){let Re=I[ae];return Re===void 0&&(Re=new hh,I[ae]=Re),Re.getHandSpace()};function ie(ae){const Re=P.indexOf(ae.inputSource);if(Re===-1)return;const Ce=I[Re];Ce!==void 0&&(Ce.update(ae.inputSource,ae.frame,h||f),Ce.dispatchEvent({type:ae.type,data:ae.inputSource}))}function H(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",W);for(let ae=0;ae<I.length;ae++){const Re=P[ae];Re!==null&&(P[ae]=null,I[ae].disconnect(Re))}ge=null,me=null,T.reset();for(const ae in E)delete E[ae];e.setRenderTarget(L),b=null,_=null,x=null,o=null,M=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",H),o.addEventListener("inputsourceschange",W),U.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Be=null,at=null;U.depth&&(at=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=U.stencil?dr:Za,Be=U.stencil?Lo:_a);const et={colorFormat:n.RGBA8,depthFormat:at,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(et),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),M=new ga(_.textureWidth,_.textureHeight,{format:ea,type:Di,depthTexture:new Sl(_.textureWidth,_.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,Ce),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),M=new ga(b.framebufferWidth,b.framebufferHeight,{format:ea,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await o.requestReferenceSpace(p),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function W(ae){for(let Re=0;Re<ae.removed.length;Re++){const Ce=ae.removed[Re],Be=P.indexOf(Ce);Be>=0&&(P[Be]=null,I[Be].disconnect(Ce))}for(let Re=0;Re<ae.added.length;Re++){const Ce=ae.added[Re];let Be=P.indexOf(Ce);if(Be===-1){for(let et=0;et<I.length;et++)if(et>=P.length){P.push(Ce),Be=et;break}else if(P[et]===null){P[et]=Ce,Be=et;break}if(Be===-1)break}const at=I[Be];at&&at.connect(Ce)}}const le=new te,Se=new te;function De(ae,Re,Ce){le.setFromMatrixPosition(Re.matrixWorld),Se.setFromMatrixPosition(Ce.matrixWorld);const Be=le.distanceTo(Se),at=Re.projectionMatrix.elements,et=Ce.projectionMatrix.elements,Wt=at[14]/(at[10]-1),ut=at[14]/(at[10]+1),pt=(at[9]+1)/at[5],dt=(at[9]-1)/at[5],ht=(at[8]-1)/at[0],Pt=(et[8]+1)/et[0],Ze=Wt*ht,_t=Wt*Pt,sn=Be/(-ht+Pt),zt=sn*-ht;if(Re.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(zt),ae.translateZ(sn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),at[10]===-1)ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const cn=Wt+sn,Q=ut+sn,Ot=Ze-zt,ve=_t+(Be-zt),C=pt*ut/Q*cn,y=dt*ut/Q*cn;ae.projectionMatrix.makePerspective(Ot,ve,C,y,cn,Q),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function z(ae,Re){Re===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Re.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Re=ae.near,Ce=ae.far;T.texture!==null&&(T.depthNear>0&&(Re=T.depthNear),T.depthFar>0&&(Ce=T.depthFar)),$.near=Y.near=O.near=Re,$.far=Y.far=O.far=Ce,(ge!==$.near||me!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ge=$.near,me=$.far),$.layers.mask=ae.layers.mask|6,O.layers.mask=$.layers.mask&-5,Y.layers.mask=$.layers.mask&-3;const Be=ae.parent,at=$.cameras;z($,Be);for(let et=0;et<at.length;et++)z(at[et],Be);at.length===2?De($,O,Y):$.projectionMatrix.copy(O.projectionMatrix),K(ae,$,Be)};function K(ae,Re,Ce){Ce===null?ae.matrix.copy(Re.matrixWorld):(ae.matrix.copy(Ce.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Re.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Io*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&b===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ae)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh($)},this.getCameraTexture=function(ae){return E[ae]};let Me=null;function Oe(ae,Re){if(v=Re.getViewerPose(h||f),R=Re,v!==null){const Ce=v.views;b!==null&&(e.setRenderTargetFramebuffer(M,b.framebuffer),e.setRenderTarget(M));let Be=!1;Ce.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let ut=0;ut<Ce.length;ut++){const pt=Ce[ut];let dt=null;if(b!==null)dt=b.getViewport(pt);else{const Pt=x.getViewSubImage(_,pt);dt=Pt.viewport,ut===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let ht=k[ut];ht===void 0&&(ht=new Vi,ht.layers.enable(ut),ht.viewport=new xn,k[ut]=ht),ht.matrix.fromArray(pt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(pt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),ut===0&&($.matrix.copy(ht.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(ht)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){x=r.getBinding();const ut=x.getDepthInformation(Ce[0]);ut&&ut.isValid&&ut.texture&&T.init(ut,o.renderState)}if(at&&at.includes("camera-access")&&N){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<Ce.length;ut++){const pt=Ce[ut].camera;if(pt){let dt=E[pt];dt||(dt=new Qy,E[pt]=dt);const ht=x.getCameraImage(pt);dt.sourceTexture=ht}}}}for(let Ce=0;Ce<I.length;Ce++){const Be=P[Ce],at=I[Ce];Be!==null&&at!==void 0&&at.update(Be,Re,h||f)}Me&&Me(ae,Re),Re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Re}),R=null}const ze=new ex;ze.setAnimationLoop(Oe),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const NR=new _n,lx=new gt;lx.set(-1,0,0,0,1,0,0,0,1);function UR(a,e){function n(T,E){T.matrixAutoUpdate===!0&&T.updateMatrix(),E.value.copy(T.matrix)}function r(T,E){E.color.getRGB(T.fogColor.value,$y(a)),E.isFog?(T.fogNear.value=E.near,T.fogFar.value=E.far):E.isFogExp2&&(T.fogDensity.value=E.density)}function o(T,E,U,L,M){E.isNodeMaterial?E.uniformsNeedUpdate=!1:E.isMeshBasicMaterial?c(T,E):E.isMeshLambertMaterial?(c(T,E),E.envMap&&(T.envMapIntensity.value=E.envMapIntensity)):E.isMeshToonMaterial?(c(T,E),x(T,E)):E.isMeshPhongMaterial?(c(T,E),v(T,E),E.envMap&&(T.envMapIntensity.value=E.envMapIntensity)):E.isMeshStandardMaterial?(c(T,E),_(T,E),E.isMeshPhysicalMaterial&&b(T,E,M)):E.isMeshMatcapMaterial?(c(T,E),R(T,E)):E.isMeshDepthMaterial?c(T,E):E.isMeshDistanceMaterial?(c(T,E),N(T,E)):E.isMeshNormalMaterial?c(T,E):E.isLineBasicMaterial?(f(T,E),E.isLineDashedMaterial&&p(T,E)):E.isPointsMaterial?m(T,E,U,L):E.isSpriteMaterial?h(T,E):E.isShadowMaterial?(T.color.value.copy(E.color),T.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function c(T,E){T.opacity.value=E.opacity,E.color&&T.diffuse.value.copy(E.color),E.emissive&&T.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(T.map.value=E.map,n(E.map,T.mapTransform)),E.alphaMap&&(T.alphaMap.value=E.alphaMap,n(E.alphaMap,T.alphaMapTransform)),E.bumpMap&&(T.bumpMap.value=E.bumpMap,n(E.bumpMap,T.bumpMapTransform),T.bumpScale.value=E.bumpScale,E.side===_i&&(T.bumpScale.value*=-1)),E.normalMap&&(T.normalMap.value=E.normalMap,n(E.normalMap,T.normalMapTransform),T.normalScale.value.copy(E.normalScale),E.side===_i&&T.normalScale.value.negate()),E.displacementMap&&(T.displacementMap.value=E.displacementMap,n(E.displacementMap,T.displacementMapTransform),T.displacementScale.value=E.displacementScale,T.displacementBias.value=E.displacementBias),E.emissiveMap&&(T.emissiveMap.value=E.emissiveMap,n(E.emissiveMap,T.emissiveMapTransform)),E.specularMap&&(T.specularMap.value=E.specularMap,n(E.specularMap,T.specularMapTransform)),E.alphaTest>0&&(T.alphaTest.value=E.alphaTest);const U=e.get(E),L=U.envMap,M=U.envMapRotation;L&&(T.envMap.value=L,T.envMapRotation.value.setFromMatrix4(NR.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(lx),T.reflectivity.value=E.reflectivity,T.ior.value=E.ior,T.refractionRatio.value=E.refractionRatio),E.lightMap&&(T.lightMap.value=E.lightMap,T.lightMapIntensity.value=E.lightMapIntensity,n(E.lightMap,T.lightMapTransform)),E.aoMap&&(T.aoMap.value=E.aoMap,T.aoMapIntensity.value=E.aoMapIntensity,n(E.aoMap,T.aoMapTransform))}function f(T,E){T.diffuse.value.copy(E.color),T.opacity.value=E.opacity,E.map&&(T.map.value=E.map,n(E.map,T.mapTransform))}function p(T,E){T.dashSize.value=E.dashSize,T.totalSize.value=E.dashSize+E.gapSize,T.scale.value=E.scale}function m(T,E,U,L){T.diffuse.value.copy(E.color),T.opacity.value=E.opacity,T.size.value=E.size*U,T.scale.value=L*.5,E.map&&(T.map.value=E.map,n(E.map,T.uvTransform)),E.alphaMap&&(T.alphaMap.value=E.alphaMap,n(E.alphaMap,T.alphaMapTransform)),E.alphaTest>0&&(T.alphaTest.value=E.alphaTest)}function h(T,E){T.diffuse.value.copy(E.color),T.opacity.value=E.opacity,T.rotation.value=E.rotation,E.map&&(T.map.value=E.map,n(E.map,T.mapTransform)),E.alphaMap&&(T.alphaMap.value=E.alphaMap,n(E.alphaMap,T.alphaMapTransform)),E.alphaTest>0&&(T.alphaTest.value=E.alphaTest)}function v(T,E){T.specular.value.copy(E.specular),T.shininess.value=Math.max(E.shininess,1e-4)}function x(T,E){E.gradientMap&&(T.gradientMap.value=E.gradientMap)}function _(T,E){T.metalness.value=E.metalness,E.metalnessMap&&(T.metalnessMap.value=E.metalnessMap,n(E.metalnessMap,T.metalnessMapTransform)),T.roughness.value=E.roughness,E.roughnessMap&&(T.roughnessMap.value=E.roughnessMap,n(E.roughnessMap,T.roughnessMapTransform)),E.envMap&&(T.envMapIntensity.value=E.envMapIntensity)}function b(T,E,U){T.ior.value=E.ior,E.sheen>0&&(T.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),T.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(T.sheenColorMap.value=E.sheenColorMap,n(E.sheenColorMap,T.sheenColorMapTransform)),E.sheenRoughnessMap&&(T.sheenRoughnessMap.value=E.sheenRoughnessMap,n(E.sheenRoughnessMap,T.sheenRoughnessMapTransform))),E.clearcoat>0&&(T.clearcoat.value=E.clearcoat,T.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(T.clearcoatMap.value=E.clearcoatMap,n(E.clearcoatMap,T.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,n(E.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(T.clearcoatNormalMap.value=E.clearcoatNormalMap,n(E.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===_i&&T.clearcoatNormalScale.value.negate())),E.dispersion>0&&(T.dispersion.value=E.dispersion),E.iridescence>0&&(T.iridescence.value=E.iridescence,T.iridescenceIOR.value=E.iridescenceIOR,T.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(T.iridescenceMap.value=E.iridescenceMap,n(E.iridescenceMap,T.iridescenceMapTransform)),E.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=E.iridescenceThicknessMap,n(E.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),E.transmission>0&&(T.transmission.value=E.transmission,T.transmissionSamplerMap.value=U.texture,T.transmissionSamplerSize.value.set(U.width,U.height),E.transmissionMap&&(T.transmissionMap.value=E.transmissionMap,n(E.transmissionMap,T.transmissionMapTransform)),T.thickness.value=E.thickness,E.thicknessMap&&(T.thicknessMap.value=E.thicknessMap,n(E.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=E.attenuationDistance,T.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(T.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(T.anisotropyMap.value=E.anisotropyMap,n(E.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=E.specularIntensity,T.specularColor.value.copy(E.specularColor),E.specularColorMap&&(T.specularColorMap.value=E.specularColorMap,n(E.specularColorMap,T.specularColorMapTransform)),E.specularIntensityMap&&(T.specularIntensityMap.value=E.specularIntensityMap,n(E.specularIntensityMap,T.specularIntensityMapTransform))}function R(T,E){E.matcap&&(T.matcap.value=E.matcap)}function N(T,E){const U=e.get(E).light;T.referencePosition.value.setFromMatrixPosition(U.matrixWorld),T.nearDistance.value=U.shadow.camera.near,T.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LR(a,e,n,r){let o={},c={},f=[];const p=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(M,I){const P=I.program;r.uniformBlockBinding(M,P)}function h(M,I){let P=o[M.id];P===void 0&&(T(M),P=v(M),o[M.id]=P,M.addEventListener("dispose",U));const F=I.program;r.updateUBOMapping(M,F);const A=e.render.frame;c[M.id]!==A&&(_(M),c[M.id]=A)}function v(M){const I=x();M.__bindingPointIndex=I;const P=a.createBuffer(),F=M.__size,A=M.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,F,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,P),P}function x(){for(let M=0;M<p;M++)if(f.indexOf(M)===-1)return f.push(M),M;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(M){const I=o[M.id],P=M.uniforms,F=M.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let A=0,O=P.length;A<O;A++){const Y=P[A];if(Array.isArray(Y))for(let k=0,$=Y.length;k<$;k++)b(Y[k],A,k,F);else b(Y,A,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(M,I,P,F){if(N(M,I,P,F)===!0){const A=M.__offset,O=M.value;if(Array.isArray(O)){let Y=0;for(let k=0;k<O.length;k++){const $=O[k],ge=E($);R($,M.__data,Y),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(Y+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(O,M.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,M.__data)}}function R(M,I,P){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,P)}function N(M,I,P,F){const A=M.value,O=I+"_"+P;if(F[O]===void 0)return typeof A=="number"||typeof A=="boolean"?F[O]=A:ArrayBuffer.isView(A)?F[O]=A.slice():F[O]=A.clone(),!0;{const Y=F[O];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return F[O]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(Y.equals(A)===!1)return Y.copy(A),!0}}return!1}function T(M){const I=M.uniforms;let P=0;const F=16;for(let O=0,Y=I.length;O<Y;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let $=0,ge=k.length;$<ge;$++){const me=k[$],ie=Array.isArray(me.value)?me.value:[me.value];for(let H=0,W=ie.length;H<W;H++){const le=ie[H],Se=E(le),De=P%F,z=De%Se.boundary,K=De+z;P+=z,K!==0&&F-K<Se.storage&&(P+=F-K),me.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=P,P+=Se.storage}}}const A=P%F;return A>0&&(P+=F-A),M.__size=P,M.__cache={},this}function E(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",M),I}function U(M){const I=M.target;I.removeEventListener("dispose",U);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function L(){for(const M in o)a.deleteBuffer(o[M]);f=[],o={},c={}}return{bind:m,update:h,dispose:L}}const OR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function IR(){return ca===null&&(ca=new xb(OR,16,16,gr,qa),ca.name="DFG_LUT",ca.minFilter=kn,ca.magFilter=kn,ca.wrapS=Va,ca.wrapT=Va,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class PR{constructor(e={}){const{canvas:n=OM(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:b=Di}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=f;const N=b,T=new Set([em,Jp,jp]),E=new Set([Di,_a,Uo,Lo,Qp,$p]),U=new Uint32Array(4),L=new Int32Array(4),M=new te;let I=null,P=null;const F=[],A=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,$=null,ge=null,me=null,ie=null;this._outputColorSpace=gi;let H=0,W=0,le=null,Se=-1,De=null;const z=new xn,K=new xn;let Me=null;const Oe=new Rt(0);let ze=0,ae=n.width,Re=n.height,Ce=1,Be=null,at=null;const et=new xn(0,0,ae,Re),Wt=new xn(0,0,ae,Re);let ut=!1;const pt=new cm;let dt=!1,ht=!1;const Pt=new _n,Ze=new te,_t=new xn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function cn(){return le===null?Ce:1}let Q=r;function Ot(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qp}`),n.addEventListener("webglcontextlost",rn,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",jn,!1),Q===null){const j="webgl2";if(Q=Ot(j,w),Q===null)throw Ot(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let ve,C,y,X,q,J,re,de,ee,se,_e,Ne,Ie,we,Ye,qe,st,G,Ue,xe,Pe,ke,Ae;function $e(){ve=new IA(Q),ve.init(),Pe=new AR(Q,ve),C=new RA(Q,ve,e,Pe),y=new bR(Q,ve),C.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),ge=Q.createFramebuffer(),me=Q.createFramebuffer(),ie=Q.createFramebuffer(),X=new BA(Q),q=new uR,J=new TR(Q,ve,y,q,C,Pe,X),re=new OA(Y),de=new Gb(Q),ke=new TA(Q,de),ee=new PA(Q,de,X,ke),se=new HA(Q,ee,de,ke,X),G=new FA(Q,C,J),Ye=new CA(q),_e=new cR(Y,re,ve,C,ke,Ye),Ne=new UR(Y,q),Ie=new dR,we=new vR(ve),st=new bA(Y,re,y,se,R,m),qe=new MR(Y,se,C),Ae=new LR(Q,X,C,y),Ue=new AA(Q,ve,X),xe=new zA(Q,ve,X),X.programs=_e.programs,Y.capabilities=C,Y.extensions=ve,Y.properties=q,Y.renderLists=Ie,Y.shadowMap=qe,Y.state=y,Y.info=X}$e(),N!==Di&&(O=new GA(N,n.width,n.height,p,o,c));const We=new DR(Y,Q);this.xr=We,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(w){w!==void 0&&(Ce=w,this.setSize(ae,Re,!1))},this.getSize=function(w){return w.set(ae,Re)},this.setSize=function(w,j,he=!0){if(We.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,Re=j,n.width=Math.floor(w*Ce),n.height=Math.floor(j*Ce),he===!0&&(n.style.width=w+"px",n.style.height=j+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(ae*Ce,Re*Ce).floor()},this.setDrawingBufferSize=function(w,j,he){ae=w,Re=j,Ce=he,n.width=Math.floor(w*he),n.height=Math.floor(j*he),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(N===Di){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,j,he,ue){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,j,he,ue),y.viewport(z.copy(et).multiplyScalar(Ce).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,j,he,ue){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,j,he,ue),y.scissor(K.copy(Wt).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){y.setScissorTest(ut=w)},this.setOpaqueSort=function(w){Be=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,he=!0){let ue=0;if(w){let fe=!1;if(le!==null){const Ge=le.texture.format;fe=T.has(Ge)}if(fe){const Ge=le.texture.type,Ke=E.has(Ge),Fe=st.getClearColor(),je=st.getClearAlpha(),Qe=Fe.r,rt=Fe.g,vt=Fe.b;Ke?(U[0]=Qe,U[1]=rt,U[2]=vt,U[3]=je,Q.clearBufferuiv(Q.COLOR,0,U)):(L[0]=Qe,L[1]=rt,L[2]=vt,L[3]=je,Q.clearBufferiv(Q.COLOR,0,L))}else ue|=Q.COLOR_BUFFER_BIT}j&&(ue|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&Q.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){n.removeEventListener("webglcontextlost",rn,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),st.dispose(),Ie.dispose(),we.dispose(),q.dispose(),re.dispose(),se.dispose(),ke.dispose(),Ae.dispose(),_e.dispose(),We.dispose(),We.removeEventListener("sessionstart",vn),We.removeEventListener("sessionend",An),Xn.stop()};function rn(w){w.preventDefault(),Iu("WebGLRenderer: Context Lost."),k=!0}function It(){Iu("WebGLRenderer: Context Restored."),k=!1;const w=X.autoReset,j=qe.enabled,he=qe.autoUpdate,ue=qe.needsUpdate,fe=qe.type;$e(),X.autoReset=w,qe.enabled=j,qe.autoUpdate=he,qe.needsUpdate=ue,qe.type=fe}function jn(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ai(w){const j=w.target;j.removeEventListener("dispose",ai),Bs(j)}function Bs(w){Ka(w),q.remove(w)}function Ka(w){const j=q.get(w).programs;j!==void 0&&(j.forEach(function(he){_e.releaseProgram(he)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,he,ue,fe,Ge){j===null&&(j=sn);const Ke=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Fe=$a(w,j,he,ue,fe);y.setMaterial(ue,Ke);let je=he.index,Qe=1;if(ue.wireframe===!0){if(je=ee.getWireframeAttribute(he),je===void 0)return;Qe=2}const rt=he.drawRange,vt=he.attributes.position;let it=rt.start*Qe,Bt=(rt.start+rt.count)*Qe;Ge!==null&&(it=Math.max(it,Ge.start*Qe),Bt=Math.min(Bt,(Ge.start+Ge.count)*Qe)),je!==null?(it=Math.max(it,0),Bt=Math.min(Bt,je.count)):vt!=null&&(it=Math.max(it,0),Bt=Math.min(Bt,vt.count));const pn=Bt-it;if(pn<0||pn===1/0)return;ke.setup(fe,ue,Fe,he,je);let ln,qt=Ue;if(je!==null&&(ln=de.get(je),qt=xe,qt.setIndex(ln)),fe.isMesh)ue.wireframe===!0?(y.setLineWidth(ue.wireframeLinewidth*cn()),qt.setMode(Q.LINES)):qt.setMode(Q.TRIANGLES);else if(fe.isLine){let Zt=ue.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*cn()),fe.isLineSegments?qt.setMode(Q.LINES):fe.isLineLoop?qt.setMode(Q.LINE_LOOP):qt.setMode(Q.LINE_STRIP)}else fe.isPoints?qt.setMode(Q.POINTS):fe.isSprite&&qt.setMode(Q.TRIANGLES);if(fe.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))qt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Zt=fe._multiDrawStarts,Xe=fe._multiDrawCounts,Jn=fe._multiDrawCount,bt=je?de.get(je).bytesPerElement:1,On=q.get(ue).currentProgram.getUniforms();for(let yi=0;yi<Jn;yi++)On.setValue(Q,"_gl_DrawID",yi),qt.render(Zt[yi]/bt,Xe[yi])}else if(fe.isInstancedMesh)qt.renderInstances(it,pn,fe.count);else if(he.isInstancedBufferGeometry){const Zt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Xe=Math.min(he.instanceCount,Zt);qt.renderInstances(it,pn,Xe)}else qt.render(it,pn)};function Qa(w,j,he){w.transparent===!0&&w.side===da&&w.forceSinglePass===!1?(w.side=_i,w.needsUpdate=!0,hn(w,j,he),w.side=Us,w.needsUpdate=!0,hn(w,j,he),w.side=da):hn(w,j,he)}this.compile=function(w,j,he=null){he===null&&(he=w),P=we.get(he),P.init(j),A.push(P),he.traverseVisible(function(fe){fe.isLight&&fe.layers.test(j.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),w!==he&&w.traverseVisible(function(fe){fe.isLight&&fe.layers.test(j.layers)&&(P.pushLight(fe),fe.castShadow&&P.pushShadow(fe))}),P.setupLights();const ue=new Set;return w.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let Ke=0;Ke<Ge.length;Ke++){const Fe=Ge[Ke];Qa(Fe,he,fe),ue.add(Fe)}else Qa(Ge,he,fe),ue.add(Ge)}),P=A.pop(),ue},this.compileAsync=function(w,j,he=null){const ue=this.compile(w,j,he);return new Promise(fe=>{function Ge(){if(ue.forEach(function(Ke){q.get(Ke).currentProgram.isReady()&&ue.delete(Ke)}),ue.size===0){fe(w);return}setTimeout(Ge,10)}ve.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let ya=null;function vi(w){ya&&ya(w)}function vn(){Xn.stop()}function An(){Xn.start()}const Xn=new ex;Xn.setAnimationLoop(vi),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(w){ya=w,We.setAnimationLoop(w),w===null?Xn.stop():Xn.start()},We.addEventListener("sessionstart",vn),We.addEventListener("sessionend",An),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;$!==null&&$.renderStart(w,j);const he=We.enabled===!0&&We.isPresenting===!0,ue=O!==null&&(le===null||he)&&O.begin(Y,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(j),j=We.getCamera()),w.isScene===!0&&w.onBeforeRender(Y,w,j,le),P=we.get(w,A.length),P.init(j),P.state.textureUnits=J.getTextureUnits(),A.push(P),Pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),pt.setFromProjectionMatrix(Pt,pa,j.reversedDepth),ht=this.localClippingEnabled,dt=Ye.init(this.clippingPlanes,ht),I=Ie.get(w,F.length),I.init(),F.push(I),We.enabled===!0&&We.isPresenting===!0){const Ke=Y.xr.getDepthSensingMesh();Ke!==null&&B(Ke,j,-1/0,Y.sortObjects)}B(w,j,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(Be,at,j.reversedDepth),zt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,zt&&st.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Ye.beginShadows();const fe=P.state.shadowsArray;if(qe.render(fe,w,j),dt===!0&&Ye.endShadows(),(ue&&O.hasRenderPass())===!1){const Ke=I.opaque,Fe=I.transmissive;if(P.setupLights(),j.isArrayCamera){const je=j.cameras;if(Fe.length>0)for(let Qe=0,rt=je.length;Qe<rt;Qe++){const vt=je[Qe];tt(Ke,Fe,w,vt)}zt&&st.render(w);for(let Qe=0,rt=je.length;Qe<rt;Qe++){const vt=je[Qe];Le(I,w,vt,vt.viewport)}}else Fe.length>0&&tt(Ke,Fe,w,j),zt&&st.render(w),Le(I,w,j)}le!==null&&W===0&&(J.updateMultisampleRenderTarget(le),J.updateRenderTargetMipmap(le)),ue&&O.end(Y),w.isScene===!0&&w.onAfterRender(Y,w,j),ke.resetDefaultState(),Se=-1,De=null,A.pop(),A.length>0?(P=A[A.length-1],J.setTextureUnits(P.state.textureUnits),dt===!0&&Ye.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,$!==null&&$.renderEnd()};function B(w,j,he,ue){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pt.intersectsSprite(w)){ue&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const Ke=se.update(w),Fe=w.material;Fe.visible&&I.push(w,Ke,Fe,he,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pt.intersectsObject(w))){const Ke=se.update(w),Fe=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),_t.copy(Ke.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Fe)){const je=Ke.groups;for(let Qe=0,rt=je.length;Qe<rt;Qe++){const vt=je[Qe],it=Fe[vt.materialIndex];it&&it.visible&&I.push(w,Ke,it,he,_t.z,vt)}}else Fe.visible&&I.push(w,Ke,Fe,he,_t.z,null)}}const Ge=w.children;for(let Ke=0,Fe=Ge.length;Ke<Fe;Ke++)B(Ge[Ke],j,he,ue)}function Le(w,j,he,ue){const{opaque:fe,transmissive:Ge,transparent:Ke}=w;P.setupLightsView(he),dt===!0&&Ye.setGlobalState(Y.clippingPlanes,he),ue&&y.viewport(z.copy(ue)),fe.length>0&&Ct(fe,j,he),Ge.length>0&&Ct(Ge,j,he),Ke.length>0&&Ct(Ke,j,he),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function tt(w,j,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ue.id]===void 0){const it=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ue.id]=new ga(1,1,{generateMipmaps:!0,type:it?qa:Di,minFilter:fr,samples:Math.max(4,C.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ge=P.state.transmissionRenderTarget[ue.id],Ke=ue.viewport||z;Ge.setSize(Ke.z*Y.transmissionResolutionScale,Ke.w*Y.transmissionResolutionScale);const Fe=Y.getRenderTarget(),je=Y.getActiveCubeFace(),Qe=Y.getActiveMipmapLevel();Y.setRenderTarget(Ge),Y.getClearColor(Oe),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),zt&&st.render(he);const rt=Y.toneMapping;Y.toneMapping=ma;const vt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),P.setupLightsView(ue),dt===!0&&Ye.setGlobalState(Y.clippingPlanes,ue),Ct(w,he,ue),J.updateMultisampleRenderTarget(Ge),J.updateRenderTargetMipmap(Ge),ve.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Bt=0,pn=j.length;Bt<pn;Bt++){const ln=j[Bt],{object:qt,geometry:Zt,material:Xe,group:Jn}=ln;if(Xe.side===da&&qt.layers.test(ue.layers)){const bt=Xe.side;Xe.side=_i,Xe.needsUpdate=!0,Gt(qt,he,ue,Zt,Xe,Jn),Xe.side=bt,Xe.needsUpdate=!0,it=!0}}it===!0&&(J.updateMultisampleRenderTarget(Ge),J.updateRenderTargetMipmap(Ge))}Y.setRenderTarget(Fe,je,Qe),Y.setClearColor(Oe,ze),vt!==void 0&&(ue.viewport=vt),Y.toneMapping=rt}function Ct(w,j,he){const ue=j.isScene===!0?j.overrideMaterial:null;for(let fe=0,Ge=w.length;fe<Ge;fe++){const Ke=w[fe],{object:Fe,geometry:je,group:Qe}=Ke;let rt=Ke.material;rt.allowOverride===!0&&ue!==null&&(rt=ue),Fe.layers.test(he.layers)&&Gt(Fe,j,he,je,rt,Qe)}}function Gt(w,j,he,ue,fe,Ge){w.onBeforeRender(Y,j,he,ue,fe,Ge),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),fe.onBeforeRender(Y,j,he,ue,w,Ge),fe.transparent===!0&&fe.side===da&&fe.forceSinglePass===!1?(fe.side=_i,fe.needsUpdate=!0,Y.renderBufferDirect(he,j,ue,fe,w,Ge),fe.side=Us,fe.needsUpdate=!0,Y.renderBufferDirect(he,j,ue,fe,w,Ge),fe.side=da):Y.renderBufferDirect(he,j,ue,fe,w,Ge),w.onAfterRender(Y,j,he,ue,fe,Ge)}function hn(w,j,he){j.isScene!==!0&&(j=sn);const ue=q.get(w),fe=P.state.lights,Ge=P.state.shadowsArray,Ke=fe.state.version,Fe=_e.getParameters(w,fe.state,Ge,j,he,P.state.lightProbeGridArray),je=_e.getProgramCacheKey(Fe);let Qe=ue.programs;ue.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,ue.fog=j.fog;const rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ue.envMap=re.get(w.envMap||ue.environment,rt),ue.envMapRotation=ue.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",ai),Qe=new Map,ue.programs=Qe);let vt=Qe.get(je);if(vt!==void 0){if(ue.currentProgram===vt&&ue.lightsStateVersion===Ke)return Sn(w,Fe),vt}else Fe.uniforms=_e.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,he,Fe),w.onBeforeCompile(Fe,Y),vt=_e.acquireProgram(Fe,je),Qe.set(je,vt),ue.uniforms=Fe.uniforms;const it=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(it.clippingPlanes=Ye.uniform),Sn(w,Fe),ue.needsLights=ko(w),ue.lightsStateVersion=Ke,ue.needsLights&&(it.ambientLightColor.value=fe.state.ambient,it.lightProbe.value=fe.state.probe,it.directionalLights.value=fe.state.directional,it.directionalLightShadows.value=fe.state.directionalShadow,it.spotLights.value=fe.state.spot,it.spotLightShadows.value=fe.state.spotShadow,it.rectAreaLights.value=fe.state.rectArea,it.ltc_1.value=fe.state.rectAreaLTC1,it.ltc_2.value=fe.state.rectAreaLTC2,it.pointLights.value=fe.state.point,it.pointLightShadows.value=fe.state.pointShadow,it.hemisphereLights.value=fe.state.hemi,it.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,it.spotLightMatrix.value=fe.state.spotLightMatrix,it.spotLightMap.value=fe.state.spotLightMap,it.pointShadowMatrix.value=fe.state.pointShadowMatrix),ue.lightProbeGrid=P.state.lightProbeGridArray.length>0,ue.currentProgram=vt,ue.uniformsList=null,vt}function yn(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Ru.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Sn(w,j){const he=q.get(w);he.outputColorSpace=j.outputColorSpace,he.batching=j.batching,he.batchingColor=j.batchingColor,he.instancing=j.instancing,he.instancingColor=j.instancingColor,he.instancingMorph=j.instancingMorph,he.skinning=j.skinning,he.morphTargets=j.morphTargets,he.morphNormals=j.morphNormals,he.morphColors=j.morphColors,he.morphTargetsCount=j.morphTargetsCount,he.numClippingPlanes=j.numClippingPlanes,he.numIntersection=j.numClipIntersection,he.vertexAlphas=j.vertexAlphas,he.vertexTangents=j.vertexTangents,he.toneMapping=j.toneMapping}function na(w,j){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(j.matrixWorld);for(let he=0,ue=w.length;he<ue;he++){const fe=w[he];if(fe.texture!==null&&fe.boundingBox.containsPoint(M))return fe}return null}function $a(w,j,he,ue,fe){j.isScene!==!0&&(j=sn),J.resetTextureUnits();const Ge=j.fog,Ke=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?j.environment:null,Fe=le===null?Y.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Lt.workingColorSpace,je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Qe=re.get(ue.envMap||Ke,je),rt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,vt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),it=!!he.morphAttributes.position,Bt=!!he.morphAttributes.normal,pn=!!he.morphAttributes.color;let ln=ma;ue.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ln=Y.toneMapping);const qt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Zt=qt!==void 0?qt.length:0,Xe=q.get(ue),Jn=P.state.lights;if(dt===!0&&(ht===!0||w!==De)){const Yt=w===De&&ue.id===Se;Ye.setState(ue,w,Yt)}let bt=!1;ue.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Jn.state.version||Xe.outputColorSpace!==Fe||fe.isBatchedMesh&&Xe.batching===!1||!fe.isBatchedMesh&&Xe.batching===!0||fe.isBatchedMesh&&Xe.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&Xe.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&Xe.instancing===!1||!fe.isInstancedMesh&&Xe.instancing===!0||fe.isSkinnedMesh&&Xe.skinning===!1||!fe.isSkinnedMesh&&Xe.skinning===!0||fe.isInstancedMesh&&Xe.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Xe.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Xe.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Xe.instancingMorph===!1&&fe.morphTexture!==null||Xe.envMap!==Qe||ue.fog===!0&&Xe.fog!==Ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ye.numPlanes||Xe.numIntersection!==Ye.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==vt||Xe.morphTargets!==it||Xe.morphNormals!==Bt||Xe.morphColors!==pn||Xe.toneMapping!==ln||Xe.morphTargetsCount!==Zt||!!Xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Xe.__version=ue.version);let On=Xe.currentProgram;bt===!0&&(On=hn(ue,j,fe),$&&ue.isNodeMaterial&&$.onUpdateProgram(ue,On,Xe));let yi=!1,Wi=!1,xi=!1;const Kt=On.getUniforms(),mn=Xe.uniforms;if(y.useProgram(On.program)&&(yi=!0,Wi=!0,xi=!0),ue.id!==Se&&(Se=ue.id,Wi=!0),Xe.needsLights){const Yt=na(P.state.lightProbeGridArray,fe);Xe.lightProbeGrid!==Yt&&(Xe.lightProbeGrid=Yt,Wi=!0)}if(yi||De!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Kt.setValue(Q,"projectionMatrix",w.projectionMatrix),Kt.setValue(Q,"viewMatrix",w.matrixWorldInverse);const ia=Kt.map.cameraPosition;ia!==void 0&&ia.setValue(Q,Ze.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Kt.setValue(Q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Kt.setValue(Q,"isOrthographic",w.isOrthographicCamera===!0),De!==w&&(De=w,Wi=!0,xi=!0)}if(Xe.needsLights&&(Jn.state.directionalShadowMap.length>0&&Kt.setValue(Q,"directionalShadowMap",Jn.state.directionalShadowMap,J),Jn.state.spotShadowMap.length>0&&Kt.setValue(Q,"spotShadowMap",Jn.state.spotShadowMap,J),Jn.state.pointShadowMap.length>0&&Kt.setValue(Q,"pointShadowMap",Jn.state.pointShadowMap,J)),fe.isSkinnedMesh){Kt.setOptional(Q,fe,"bindMatrix"),Kt.setOptional(Q,fe,"bindMatrixInverse");const Yt=fe.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Kt.setValue(Q,"boneTexture",Yt.boneTexture,J))}fe.isBatchedMesh&&(Kt.setOptional(Q,fe,"batchingTexture"),Kt.setValue(Q,"batchingTexture",fe._matricesTexture,J),Kt.setOptional(Q,fe,"batchingIdTexture"),Kt.setValue(Q,"batchingIdTexture",fe._indirectTexture,J),Kt.setOptional(Q,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Kt.setValue(Q,"batchingColorTexture",fe._colorsTexture,J));const Yi=he.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&G.update(fe,he,On),(Wi||Xe.receiveShadow!==fe.receiveShadow)&&(Xe.receiveShadow=fe.receiveShadow,Kt.setValue(Q,"receiveShadow",fe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=IR()),Wi){if(Kt.setValue(Q,"toneMappingExposure",Y.toneMappingExposure),Xe.needsLights&&Rn(mn,xi),Ge&&ue.fog===!0&&Ne.refreshFogUniforms(mn,Ge),Ne.refreshMaterialUniforms(mn,ue,Ce,Re,P.state.transmissionRenderTarget[w.id]),Xe.needsLights&&Xe.lightProbeGrid){const Yt=Xe.lightProbeGrid;mn.probesSH.value=Yt.texture,mn.probesMin.value.copy(Yt.boundingBox.min),mn.probesMax.value.copy(Yt.boundingBox.max),mn.probesResolution.value.copy(Yt.resolution)}Ru.upload(Q,yn(Xe),mn,J)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ru.upload(Q,yn(Xe),mn,J),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Kt.setValue(Q,"center",fe.center),Kt.setValue(Q,"modelViewMatrix",fe.modelViewMatrix),Kt.setValue(Q,"normalMatrix",fe.normalMatrix),Kt.setValue(Q,"modelMatrix",fe.matrixWorld),ue.uniformsGroups!==void 0){const Yt=ue.uniformsGroups;for(let ia=0,ja=Yt.length;ia<ja;ia++){const Fs=Yt[ia];Ae.update(Fs,On),Ae.bind(Fs,On)}}return On}function Rn(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ko(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,j,he){const ue=q.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=j,q.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const he=q.get(w);he.__webglFramebuffer=j,he.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,he=0){le=w,H=j,W=he;let ue=null,fe=!1,Ge=!1;if(w){const Fe=q.get(w);if(Fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Q.FRAMEBUFFER,Fe.__webglFramebuffer),z.copy(w.viewport),K.copy(w.scissor),Me=w.scissorTest,y.viewport(z),y.scissor(K),y.setScissorTest(Me),Se=-1;return}else if(Fe.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(Fe.__hasExternalTextures)J.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(Fe.__boundDepthTexture!==rt){if(rt!==null&&q.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ge=!0);const Qe=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?ue=Qe[j][he]:ue=Qe[j],fe=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?ue=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?ue=Qe[he]:ue=Qe,z.copy(w.viewport),K.copy(w.scissor),Me=w.scissorTest}else z.copy(et).multiplyScalar(Ce).floor(),K.copy(Wt).multiplyScalar(Ce).floor(),Me=ut;if(he!==0&&(ue=ge),y.bindFramebuffer(Q.FRAMEBUFFER,ue)&&y.drawBuffers(w,ue),y.viewport(z),y.scissor(K),y.setScissorTest(Me),fe){const Fe=q.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,he)}else if(Ge){const Fe=j;for(let je=0;je<w.textures.length;je++){const Qe=q.get(w.textures[je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+je,Qe.__webglTexture,he,Fe)}}else if(w!==null&&he!==0){const Fe=q.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Fe.__webglTexture,he)}Se=-1},this.readRenderTargetPixels=function(w,j,he,ue,fe,Ge,Ke,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ke!==void 0&&(je=je[Ke]),je){y.bindFramebuffer(Q.FRAMEBUFFER,je);try{const Qe=w.textures[Fe],rt=Qe.format,vt=Qe.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Fe),!C.textureFormatReadable(rt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(vt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ue&&he>=0&&he<=w.height-fe&&Q.readPixels(j,he,ue,fe,Pe.convert(rt),Pe.convert(vt),Ge)}finally{const Qe=le!==null?q.get(le).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(w,j,he,ue,fe,Ge,Ke,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ke!==void 0&&(je=je[Ke]),je)if(j>=0&&j<=w.width-ue&&he>=0&&he<=w.height-fe){y.bindFramebuffer(Q.FRAMEBUFFER,je);const Qe=w.textures[Fe],rt=Qe.format,vt=Qe.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Fe),!C.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ge.byteLength,Q.STREAM_READ),Q.readPixels(j,he,ue,fe,Pe.convert(rt),Pe.convert(vt),0);const Bt=le!==null?q.get(le).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,Bt);const pn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await IM(Q,pn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,it),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ge),Q.deleteBuffer(it),Q.deleteSync(pn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,he=0){const ue=Math.pow(2,-he),fe=Math.floor(w.image.width*ue),Ge=Math.floor(w.image.height*ue),Ke=j!==null?j.x:0,Fe=j!==null?j.y:0;J.setTexture2D(w,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,he,0,0,Ke,Fe,fe,Ge),y.unbindTexture()},this.copyTextureToTexture=function(w,j,he=null,ue=null,fe=0,Ge=0){let Ke,Fe,je,Qe,rt,vt,it,Bt,pn;const ln=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(he!==null)Ke=he.max.x-he.min.x,Fe=he.max.y-he.min.y,je=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,rt=he.min.y,vt=he.isBox3?he.min.z:0;else{const mn=Math.pow(2,-fe);Ke=Math.floor(ln.width*mn),Fe=Math.floor(ln.height*mn),w.isDataArrayTexture?je=ln.depth:w.isData3DTexture?je=Math.floor(ln.depth*mn):je=1,Qe=0,rt=0,vt=0}ue!==null?(it=ue.x,Bt=ue.y,pn=ue.z):(it=0,Bt=0,pn=0);const qt=Pe.convert(j.format),Zt=Pe.convert(j.type);let Xe;j.isData3DTexture?(J.setTexture3D(j,0),Xe=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(J.setTexture2DArray(j,0),Xe=Q.TEXTURE_2D_ARRAY):(J.setTexture2D(j,0),Xe=Q.TEXTURE_2D),y.activeTexture(Q.TEXTURE0),y.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),y.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),y.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);const Jn=y.getParameter(Q.UNPACK_ROW_LENGTH),bt=y.getParameter(Q.UNPACK_IMAGE_HEIGHT),On=y.getParameter(Q.UNPACK_SKIP_PIXELS),yi=y.getParameter(Q.UNPACK_SKIP_ROWS),Wi=y.getParameter(Q.UNPACK_SKIP_IMAGES);y.pixelStorei(Q.UNPACK_ROW_LENGTH,ln.width),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ln.height),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,Qe),y.pixelStorei(Q.UNPACK_SKIP_ROWS,rt),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,vt);const xi=w.isDataArrayTexture||w.isData3DTexture,Kt=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const mn=q.get(w),Yi=q.get(j),Yt=q.get(mn.__renderTarget),ia=q.get(Yi.__renderTarget);y.bindFramebuffer(Q.READ_FRAMEBUFFER,Yt.__webglFramebuffer),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let ja=0;ja<je;ja++)xi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,q.get(w).__webglTexture,fe,vt+ja),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,q.get(j).__webglTexture,Ge,pn+ja)),Q.blitFramebuffer(Qe,rt,Ke,Fe,it,Bt,Ke,Fe,Q.DEPTH_BUFFER_BIT,Q.NEAREST);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(fe!==0||w.isRenderTargetTexture||q.has(w)){const mn=q.get(w),Yi=q.get(j);y.bindFramebuffer(Q.READ_FRAMEBUFFER,me),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ie);for(let Yt=0;Yt<je;Yt++)xi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mn.__webglTexture,fe,vt+Yt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mn.__webglTexture,fe),Kt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Yi.__webglTexture,Ge,pn+Yt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Yi.__webglTexture,Ge),fe!==0?Q.blitFramebuffer(Qe,rt,Ke,Fe,it,Bt,Ke,Fe,Q.COLOR_BUFFER_BIT,Q.NEAREST):Kt?Q.copyTexSubImage3D(Xe,Ge,it,Bt,pn+Yt,Qe,rt,Ke,Fe):Q.copyTexSubImage2D(Xe,Ge,it,Bt,Qe,rt,Ke,Fe);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Kt?w.isDataTexture||w.isData3DTexture?Q.texSubImage3D(Xe,Ge,it,Bt,pn,Ke,Fe,je,qt,Zt,ln.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(Xe,Ge,it,Bt,pn,Ke,Fe,je,qt,ln.data):Q.texSubImage3D(Xe,Ge,it,Bt,pn,Ke,Fe,je,qt,Zt,ln):w.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ge,it,Bt,Ke,Fe,qt,Zt,ln.data):w.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ge,it,Bt,ln.width,ln.height,qt,ln.data):Q.texSubImage2D(Q.TEXTURE_2D,Ge,it,Bt,Ke,Fe,qt,Zt,ln);y.pixelStorei(Q.UNPACK_ROW_LENGTH,Jn),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,bt),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,On),y.pixelStorei(Q.UNPACK_SKIP_ROWS,yi),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,Wi),Ge===0&&j.generateMipmaps&&Q.generateMipmap(Xe),y.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){H=0,W=0,le=null,y.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}const gy={type:"change"},hm={type:"start"},ox={type:"end"},Su=new om,_y=new Cs,zR=Math.cos(70*Lp.DEG2RAD),Pn=new te,mi=2*Math.PI,an={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bh=1e-6;class BR extends Hb{constructor(e,n=null){super(e,n),this.state=an.NONE,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ml.ROTATE,MIDDLE:ml.DOLLY,RIGHT:ml.PAN},this.touches={ONE:dl.ROTATE,TWO:dl.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new Ls,this._lastTargetPosition=new te,this._quat=new Ls().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xv,this._sphericalDelta=new Xv,this._scale=1,this._panOffset=new te,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new te,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HR.bind(this),this._onPointerDown=FR.bind(this),this._onPointerUp=kR.bind(this),this._onContextMenu=ZR.bind(this),this._onMouseWheel=XR.bind(this),this._onKeyDown=WR.bind(this),this._onTouchStart=YR.bind(this),this._onTouchMove=qR.bind(this),this._onMouseDown=GR.bind(this),this._onMouseMove=VR.bind(this),this._interceptControlDown=KR.bind(this),this._interceptControlUp=QR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gy),this.update(),this.state=an.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Pn.copy(n).sub(this.target),Pn.applyQuaternion(this._quat),this._spherical.setFromVector3(Pn),this.autoRotate&&this.state===an.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=mi:r>Math.PI&&(r-=mi),o<-Math.PI?o+=mi:o>Math.PI&&(o-=mi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Pn.setFromSpherical(this._spherical),Pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=Pn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new te(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new te(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),f=Pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<zR?this.object.lookAt(this.target):(_y.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(_y,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bh||this._lastTargetPosition.distanceToSquared(this.target)>Bh?(this.dispatchEvent(gy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mi/60*this.autoRotateSpeed*e:mi/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Pn.setFromMatrixColumn(n,0),Pn.multiplyScalar(-e),this._panOffset.add(Pn)}_panUp(e,n){this.screenSpacePanning===!0?Pn.setFromMatrixColumn(n,1):(Pn.setFromMatrixColumn(n,0),Pn.crossVectors(this.object.up,Pn)),Pn.multiplyScalar(e),this._panOffset.add(Pn)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Pn.copy(o).sub(this.target);let c=Pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=n-r.top,f=r.width,p=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/n.clientHeight),this._rotateUp(mi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/n.clientHeight),this._rotateUp(mi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,p=(e.pageY+n.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function FR(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function HR(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function kR(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ox),this.state=an.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function GR(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ml.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=an.DOLLY;break;case ml.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=an.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=an.ROTATE}break;case ml.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=an.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=an.PAN}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(hm)}function VR(a){switch(this.state){case an.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case an.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case an.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function XR(a){this.enabled===!1||this.enableZoom===!1||this.state!==an.NONE||(a.preventDefault(),this.dispatchEvent(hm),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(ox))}function WR(a){this.enabled!==!1&&this._handleKeyDown(a)}function YR(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case dl.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=an.TOUCH_ROTATE;break;case dl.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=an.TOUCH_PAN;break;default:this.state=an.NONE}break;case 2:switch(this.touches.TWO){case dl.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=an.TOUCH_DOLLY_PAN;break;case dl.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=an.TOUCH_DOLLY_ROTATE;break;default:this.state=an.NONE}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(hm)}function qR(a){switch(this._trackPointer(a),this.state){case an.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case an.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case an.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case an.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=an.NONE}}function ZR(a){this.enabled!==!1&&a.preventDefault()}function KR(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QR(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bo=new te;function Gi(a,e,n,r,o,c){const f=2*Math.PI*o/4,p=Math.max(c-2*o,0),m=Math.PI/4;bo.copy(e),bo[r]=0,bo.normalize();const h=.5*f/(f+p),v=1-bo.angleTo(a)/m;return Math.sign(bo[n])===1?v*h:p/(f+p)+h+h*(1-v)}class pm extends Is{constructor(e=1,n=1,r=1,o=2,c=.1){const f=o*2+1;if(c=Math.min(e/2,n/2,r/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:r,segments:o,radius:c},f===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new te,h=new te,v=new te(e,n,r).divideScalar(2).subScalar(c),x=this.attributes.position.array,_=this.attributes.normal.array,b=this.attributes.uv.array,R=x.length/6,N=new te,T=.5/f;for(let E=0,U=0;E<x.length;E+=3,U+=2)switch(m.fromArray(x,E),h.copy(m),h.x-=Math.sign(h.x)*T,h.y-=Math.sign(h.y)*T,h.z-=Math.sign(h.z)*T,h.normalize(),x[E+0]=v.x*Math.sign(m.x)+h.x*c,x[E+1]=v.y*Math.sign(m.y)+h.y*c,x[E+2]=v.z*Math.sign(m.z)+h.z*c,_[E+0]=h.x,_[E+1]=h.y,_[E+2]=h.z,Math.floor(E/R)){case 0:N.set(1,0,0),b[U+0]=Gi(N,h,"z","y",c,r),b[U+1]=1-Gi(N,h,"y","z",c,n);break;case 1:N.set(-1,0,0),b[U+0]=1-Gi(N,h,"z","y",c,r),b[U+1]=1-Gi(N,h,"y","z",c,n);break;case 2:N.set(0,1,0),b[U+0]=1-Gi(N,h,"x","z",c,e),b[U+1]=Gi(N,h,"z","x",c,r);break;case 3:N.set(0,-1,0),b[U+0]=1-Gi(N,h,"x","z",c,e),b[U+1]=1-Gi(N,h,"z","x",c,r);break;case 4:N.set(0,0,1),b[U+0]=1-Gi(N,h,"x","y",c,e),b[U+1]=1-Gi(N,h,"y","x",c,n);break;case 5:N.set(0,0,-1),b[U+0]=Gi(N,h,"x","y",c,e),b[U+1]=1-Gi(N,h,"y","x",c,n);break}}static fromJSON(e){return new pm(e.width,e.height,e.depth,e.segments,e.radius)}}const Po="city-tycoon-v1",zp="city-tycoon-manual-v1",cx=720*60*60*1e3,$R=a=>a===void 0||Array.isArray(a)&&a.length<=13&&a.every(e=>typeof e=="string"),jR=(a,e)=>a==null||a&&Number.isInteger(a.sourceId)&&a.sourceId>=0&&a.sourceId<e&&Number.isInteger(a.targetId)&&a.targetId>=0&&a.targetId<e&&typeof a.cardId=="string"&&(a.targetPosition===null||a.targetPosition===void 0||Number.isInteger(a.targetPosition)),JR=(a,e,n)=>a&&a.id===e&&typeof a.name=="string"&&Number.isFinite(a.cash)&&a.cash>=0&&Number.isInteger(a.pos)&&a.pos>=0&&a.pos<32&&[0,1].includes(a.jail)&&typeof a.bankrupt=="boolean"&&(a.diceCount===void 0||[1,2].includes(a.diceCount))&&$R(a.skillHand)&&(a.skillUsedThisTurn===void 0||typeof a.skillUsedThisTurn=="boolean")&&(a.slowTurns===void 0||Number.isInteger(a.slowTurns)&&a.slowTurns>=0)&&(a.rentShield===void 0||a.rentShield===0||a.rentShield===1)&&(a.rentMultiplier===void 0||a.rentMultiplier===1||a.rentMultiplier===2),e3=(a,e)=>a&&typeof a=="object"&&!Array.isArray(a)&&Object.entries(a).every(([n,r])=>Number.isInteger(+n)&&+n>0&&+n<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+n)&&r&&Number.isInteger(r.owner)&&r.owner>=0&&r.owner<e&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5);function Zu(a){var e;return!((a==null?void 0:a.version)===1&&Array.isArray(a.players)&&a.players.length>=2&&a.players.length<=4&&a.players.every((n,r)=>JR(n,r,a.players.length)))||!e3(a.lots,a.players.length)||!Number.isInteger(a.turn)||a.turn<0||a.turn>=a.players.length||!Number.isInteger(a.round)||a.round<1||!(a.maxRounds===void 0||a.maxRounds===null||Number.isInteger(a.maxRounds)&&a.maxRounds>=1)||!(a.maxRounds===void 0||a.maxRounds===null||a.round<=a.maxRounds+1)||!(a.inflationRate===void 0||Number.isInteger(a.inflationRate)&&a.inflationRate>=0&&a.inflationRate<=10)||!(a.priceIndex===void 0||Number.isFinite(a.priceIndex)&&a.priceIndex>=1&&a.priceIndex<=10)||!["ready","moving","decision","end","finished"].includes(a.stage)||!Array.isArray(a.dice)||![1,2].includes(a.dice.length)||!a.dice.every(n=>Number.isInteger(n)&&n>=1&&n<=6)||!Number.isInteger(a.remaining)||a.remaining<0||a.remaining>12||a.stage==="moving"&&!(a.remaining>0&&Number.isInteger(a.eventIndex)&&a.eventIndex>=0&&a.eventIndex<8)||!Array.isArray(a.log)||!a.log.every(n=>n&&typeof n.text=="string"&&typeof n.kind=="string")||typeof a.notice!="string"||!(a.event===null||a.event&&typeof a.event.title=="string"&&(a.event.amount===void 0||Number.isFinite(a.event.amount)))||!(a.skillDeck===void 0||Array.isArray(a.skillDeck)&&a.skillDeck.every(n=>typeof n=="string"))||!(a.skillDiscard===void 0||Array.isArray(a.skillDiscard)&&a.skillDiscard.every(n=>typeof n=="string"))||a.skillOverflow!==void 0&&!(a.skillOverflow===null||Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)&&a.skillOverflow.playerId>=0&&a.skillOverflow.playerId<a.players.length)||!jR(a.pendingSkill,a.players.length)||a.limitBuildings!==void 0&&typeof a.limitBuildings!="boolean"||a.stage==="finished"&&!(Number.isInteger(a.winner)&&a.winner>=0&&a.winner<a.players.length)||a.bank!==void 0&&!(Number.isInteger(a.bank.houses)&&a.bank.houses>=0&&Number.isInteger(a.bank.hotels)&&a.bank.hotels>=0)?!1:(a.buildAvailable===void 0||typeof a.buildAvailable=="boolean")&&(a.buildUsed===void 0||typeof a.buildUsed=="boolean")}const Bp=(a,e)=>a&&Number.isFinite(a.savedAt)&&a.savedAt<=e&&e-a.savedAt<cx&&Zu(a.game);function zo(a=localStorage,e=Date.now()){const n=a.getItem(zp),r=n?JSON.parse(n):[];if(!Array.isArray(r))throw new Error("存檔清單格式損壞。");const o=r.filter(f=>Bp(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,p)=>p.savedAt-f.savedAt).slice(0,10);JSON.stringify(o)!==n&&a.setItem(zp,JSON.stringify(o));const c=a.getItem(Po);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!Bp(f,e))&&a.removeItem(Po)}return o}function t3(a,e,n=!1,r=localStorage,o=Date.now()){if(!Zu(a))throw new Error("遊戲狀態無法儲存。");const c=zo(r,o);if(c.length>=10&&!n)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const p=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${a.round}`,savedAt:o,game:structuredClone(a)},...c].slice(0,10);return r.setItem(zp,JSON.stringify(p)),p}function n3(a,e=localStorage,n=Date.now()){const r=zo(e,n).find(o=>o.id===a);if(!r)throw new Error("存檔已過期或不存在。");return structuredClone(r.game)}function Fp(a,e=localStorage,n=Date.now()){e.setItem(Po,JSON.stringify({savedAt:n,game:a}))}function vy(a=localStorage,e=Date.now()){const n=a.getItem(Po);if(!n)return null;const r=JSON.parse(n);return Zu(r)?(Fp(r,a,e),r):Bp(r,e)?r.game:(a.removeItem(Po),null)}const Fh={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},propertyUnaffordable:{mood:"anxious",label:"無奈",emoji:"😣",priority:45,messages:["這塊地好喜歡，可是現金不夠……","差一點就能買下了！","先存錢，下次再來。","地產很香，荷包不允許。","只能先放棄這次機會。"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]},skillUse:{mood:"proud",label:"出牌",emoji:"✨",priority:50,messages:["技能卡啟動！","這張牌用得正是時候！","城市局勢，照我的計畫走！","效果準備生效！","漂亮的一手牌！"]},skillTarget:{mood:"surprised",label:"中招",emoji:"⚡",priority:55,messages:["等等，這張牌是對我的？","局勢突然變了！","這招來得太快了吧！","我的計畫被打亂了！","需要想辦法應對！"]},skillLandSwapTarget:{mood:"surprised",label:"錯愕",emoji:"🏠",priority:55,messages:["等等，我的地產被換走了？！","這筆換地交易，我怎麼沒同意！","我的街區突然易主了！","房契被調包了嗎？","這張換地卡太突然了吧！"]},skillCounter:{mood:"proud",label:"反制",emoji:"🛡️",priority:65,messages:["擋下來了！","這張反制卡沒有浪費！","想算計我，還早得很！","護盾成功！","漂亮化解危機！"]},skillReflect:{mood:"proud",label:"反彈",emoji:"↩️",priority:70,messages:["原路奉還！","這招現在回到你身上！","反彈成功！","攻擊者變成自己了！","這就是出牌時機！"]}};function oi(a,{category:e,summary:n,participants:r}){const o=Fh[e];if(!o||!(r!=null&&r.length))return;a.emotionSequence=(a.emotionSequence||0)+1;const c=a.emotionSequence,f=r.map(({playerId:m,amountDelta:h,category:v})=>{const x=Fh[v]||o;return{playerId:m,mood:x.mood,moodLabel:x.label,emoji:x.emoji,amountDelta:h,message:x.messages[(c+m)%x.messages.length]}}),p={id:c,category:e,summary:n,priority:Math.max(o.priority,...r.map(({category:m})=>{var h;return((h=Fh[m])==null?void 0:h.priority)||0})),players:f};a.emotionEvents||(a.emotionEvents=[]),a.emotionEvents.push(p),a.emotionHistory||(a.emotionHistory=[]),a.emotionHistory.push(p),a.emotionHistory.length>32&&(a.emotionHistory=a.emotionHistory.slice(-32))}const Kn=["#61ac78","#62a6da","#e7b942","#de809a"],i3=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],a3=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],Xt=a3.map((a,e)=>{const n={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},r=Math.floor(e/4);return{id:e,name:a,type:n[e]||"property",group:r,color:i3[r],price:1e3+r*300+e%4*100}}),St=a=>"$"+a.toLocaleString("en-US"),mm=1,ux=5,s3=10,fx=10,Qn=(a,e,n=Math.round)=>n(e*((a==null?void 0:a.priceIndex)??1)),hl=(a,e)=>Qn(a,e.price),Ml=(a,e)=>Qn(e,a.price*.6),r3=40,zu=3,Ni=[{id:"trap",name:"陷害卡",type:"control",timing:"active",icon:"⛓️",summary:"指定玩家進入監獄",target:"player",description:"將一名玩家送進監獄，該玩家會移到監獄位置並暫停下一回合。",usage:"在自己的回合、擲骰前選擇一名目標玩家使用。",restriction:"只能指定仍在場的其他玩家；目標若持有反制卡或反彈卡，可以在效果結算前回應。"},{id:"slow",name:"龜速卡",type:"control",timing:"active",icon:"🐌",summary:"目標 3 回合最多走 1 格",target:"player",description:"使目標玩家接下來 3 個自己的回合，每回合最多前進 1 格，但仍會觸發抵達格子的效果。",usage:"在自己的回合、擲骰前選擇一名玩家使用，也可以指定自己。",restriction:"目標已有龜速效果時不能重複套用；指定其他玩家時，對方可使用反制卡或反彈卡。"},{id:"teleport",name:"傳送卡",type:"movement",timing:"active",icon:"✦",summary:"將玩家移到合法位置",target:"player",description:"將一名玩家直接移動到指定的合法棋盤位置，並觸發該位置的抵達效果。",usage:"在自己的回合、擲骰前選擇目標玩家與合法位置後使用。",restriction:"不能選擇「前往監獄」格；傳送不會重複抽取技能卡，目標若持有反制卡或反彈卡，可以在效果結算前回應。"},{id:"get-out",name:"出獄卡",type:"utility",timing:"active",icon:"🔓",summary:"解除自己的監獄狀態",description:"立即解除自己的監獄狀態，恢復正常行動。",usage:"自己處於監獄狀態時，在自己的回合、擲骰前使用。",restriction:"只有目前在監獄中的玩家可以使用；不能替其他玩家解除監獄。"},{id:"rent-shield",name:"免租卡",type:"defense",timing:"active",icon:"🛡️",summary:"下一次租金免除",description:"讓自己下一次應支付的租金完全免除。",usage:"在自己的回合、擲骰前使用；效果會保留到下一次需要支付租金時。",restriction:"只保護下一筆租金，觸發後立即消耗；不會免除稅金、事件支出或其他付款。"},{id:"rent-double",name:"租金加倍卡",type:"money",timing:"active",icon:"×2",summary:"下一次收租提高為 2 倍",description:"讓自己下一次收到的租金提高為原本的 2 倍。",usage:"在自己的回合、擲骰前使用；效果會保留到下一次成功收取租金時。",restriction:"只影響下一筆租金交易，觸發後立即消耗；加倍會在通膨與地產租金計算後套用。"},{id:"position-swap",name:"位置交換卡",type:"movement",timing:"active",icon:"⇄",summary:"交換兩名玩家位置",target:"player",description:"將自己與指定玩家目前在棋盤上的位置互換。",usage:"在自己的回合、擲骰前選擇一名其他玩家使用。",restriction:"只能指定仍在場的其他玩家；交換位置不會重新觸發抵達格子效果，目標若持有反制卡或反彈卡，可以在效果結算前回應。"},{id:"birthday",name:"生日派對卡",type:"money",timing:"active",icon:"🎂",summary:"其他玩家各支付一筆錢",description:"所有其他尚未破產的玩家各支付一筆隨物價指數調整的生日派對費用給使用者。",usage:"在自己的回合、擲骰前直接使用，不需要選擇目標。",restriction:"不會向自己收費；每位其他存活玩家各支付基礎金額 $300，實際金額依目前物價指數換算。"},{id:"subsidy",name:"城市補助卡",type:"money",timing:"active",icon:"🪙",summary:"從銀行獲得小額補助",description:"從銀行獲得一筆隨物價指數調整的城市補助金。",usage:"在自己的回合、擲骰前直接使用，不需要選擇目標。",restriction:"基礎補助金額為 $800，實際金額依目前物價指數換算；每回合最多使用一張主動技能卡。"},{id:"counter",name:"反制卡",type:"defense",timing:"reaction",icon:"✋",summary:"取消作用在自己的技能",description:"取消一張尚未結算、正要作用在自己身上的單一目標技能卡。",usage:"其他玩家對自己使用可指定單一玩家的技能卡、且效果尚未結算時，在反應提示中選擇「使用反制卡」。",restriction:"只能在符合反應時機時使用；使用後原技能卡直接進入棄牌堆，不產生效果。"},{id:"reflect",name:"反彈卡",type:"defense",timing:"reaction",icon:"↩",summary:"將單一指定技能反彈",description:"將一張尚未結算、原本作用在自己身上的單一目標技能，改為作用在發動者身上。",usage:"其他玩家對自己使用可指定單一玩家的技能卡、且效果尚未結算時，在反應提示中選擇「使用反彈卡」。",restriction:"只適用於單一玩家目標的技能；每次技能事件最多反彈一次，不能反彈全體效果、金額事件或已完成結算的效果。"},{id:"redraw",name:"幸運重抽卡",type:"utility",timing:"active",icon:"⟳",summary:"放棄一張手牌並重新抽卡",description:"放棄目前的一張手牌，從技能牌堆重新抽取 1 張技能卡，改變手上的策略選擇。",usage:"在自己的回合、擲骰前直接使用；若手上還有其他技能卡，需先選擇 1 張其他手牌放棄。",restriction:"每回合仍受最多使用 1 張主動卡的限制；重新抽卡後仍受每位玩家最多 3 張手牌的限制。若牌堆已空，會先將棄牌堆洗回牌堆。"},{id:"land-swap",name:"換地卡",type:"control",timing:"active",icon:"🏠",summary:"交換兩塊地產所有權",target:"land",description:"將自己擁有的一塊普通地產，與其他存活玩家擁有的一塊普通地產交換所有權。",usage:"在自己的回合、擲骰前選擇自己的土地與對方土地後使用。",restriction:"雙方都必須是普通地產；不能選特殊格、未出售地產或已破產玩家的地產。交換後保留原有房屋／旅館等級，不會觸發抵達效果。"}],Ns=Ni.map(a=>a.id),Ho=a=>Ni.find(e=>e.id===a)||null,Hh=Xt.filter(a=>a.type!=="gojail").map(a=>a.id),dx=a=>a===null?null:Number.isInteger(Number(a))&&Number(a)>=1?Number(a):r3,gm=a=>Math.max(0,Math.min(s3,Number.isFinite(Number(a))?Math.round(Number(a)):mm)),l3=a=>Math.min(ux,gm(a)),hx=a=>a!==!1,Bu={houses:32,hotels:12},_m=a=>{const e=[...a];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},o3=a=>{let e=0,n=0;for(const r of Object.values(a.lots||{}))r.level===5?n++:e+=Math.max(0,Math.min(4,r.level||0));return{houses:Math.max(0,Bu.houses-e),hotels:Math.max(0,Bu.hotels-n)}},Ps=a=>a.bank&&Number.isInteger(a.bank.houses)&&Number.isInteger(a.bank.hotels)?a.bank:o3(a),c3=a=>Array.isArray(a)?a.filter(e=>Ns.includes(e)).slice(0,Ns.length):[],u3=a=>a&&Number.isInteger(a.sourceId)&&Number.isInteger(a.targetId)&&Ns.includes(a.cardId)?{sourceId:a.sourceId,targetId:a.targetId,cardId:a.cardId,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null}:null,f3=a=>{var e;return{...a,limitBuildings:hx(a.limitBuildings),maxRounds:dx(a.maxRounds),inflationRate:gm(a.inflationRate??0),priceIndex:Math.max(1,Math.min(fx,Number.isFinite(a.priceIndex)?a.priceIndex:1)),players:a.players.map((n,r)=>({...n,diceCount:n.diceCount??2,color:n.color||Kn[r],human:n.human===void 0?r===0:!!n.human,skillHand:c3(n.skillHand),skillUsedThisTurn:n.skillUsedThisTurn===!0,slowTurns:Number.isInteger(n.slowTurns)&&n.slowTurns>0?n.slowTurns:0,rentShield:n.rentShield===1?1:0,rentMultiplier:n.rentMultiplier===2?2:1})),skillDeck:Array.isArray(a.skillDeck)?a.skillDeck.filter(n=>Ns.includes(n)):_m(Ns),skillDiscard:Array.isArray(a.skillDiscard)?a.skillDiscard.filter(n=>Ns.includes(n)):[],skillOverflow:Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)?{playerId:a.skillOverflow.playerId}:null,pendingSkill:u3(a.pendingSkill),bank:{...Ps(a)},buildAvailable:a.buildAvailable===!0,buildUsed:a.buildUsed===!0,emotionEvents:[],emotionHistory:[],emotionSequence:Number.isInteger(a.emotionSequence)?a.emotionSequence:0}},d3=[["你",Kn[0],!0],["艾米",Kn[1],!1],["小傑",Kn[2],!1],["喵喵",Kn[3],!1]];function px(a={}){const e=Math.min(4,Math.max(2,Number(a.count)||4)),n=d3.slice(0,e).map(([o,c,f],p)=>{var h;const m=((h=a.players)==null?void 0:h[p])||{};return{id:p,diceCount:2,name:typeof m.name=="string"&&m.name.trim()?m.name.trim():o,color:m.color||c,human:m.human===void 0?f:!!m.human,cash:15e3,pos:0,jail:0,bankrupt:!1,skillHand:[],skillUsedThisTurn:!1,slowTurns:0,rentShield:0,rentMultiplier:1}}),r=l3(a.inflationRate??mm);return{version:1,players:n,lots:{},skillDeck:_m(Ns),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...Bu},limitBuildings:hx(a.limitBuildings),turn:0,round:1,maxRounds:dx(a.maxRounds),inflationRate:r,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionHistory:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${r}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const kt=(a,e,n="info")=>{a.notice=e,a.log.unshift({text:e,kind:n}),a.log=a.log.slice(0,40)},ua=(a,e)=>Xt.filter(n=>{var r;return((r=a.lots[n.id])==null?void 0:r.owner)===e}),h3=(a,e,n)=>Xt.filter(r=>r.type==="property"&&r.group===e.group).every(r=>{var o;return((o=a.lots[r.id])==null?void 0:o.owner)===n}),Fu=(a,e)=>{let n=a.lots[e.id];return n?Qn(a,Math.round(e.price*.18)*(n.level?[1,3,6,10,15,22][n.level]:h3(a,e,n.owner)?2:1)):0},pr=(a,e)=>a.players[e].cash+ua(a,e).reduce((n,r)=>n+Qn(a,r.price+(a.lots[r.id].level||0)*Math.round(r.price*.6)),0),Hp=(a,e,n=a.turn)=>{const r=Xt[e],o=a.lots[e],c=Ps(a);return!r||r.type!=="property"||!o||o.owner!==n||a.turn!==n||a.stage!=="end"||a.selected!==e||!a.buildAvailable||a.buildUsed||o.level>=5||a.players[n].cash<Ml(r,a)?!1:a.limitBuildings===!1||(o.level<4?c.houses>0:c.hotels>0)};function mx(a,e){const n=a.bank||Ps(a);e.level===5?n.hotels++:n.houses+=Math.max(0,Math.min(4,e.level||0)),a.bank=n}function gx(a){const e=a.players.filter(n=>!n.bankrupt);e.length===1&&(a.winner=e[0].id,a.stage="finished",kt(a,`${e[0].name}成為城市大亨！`))}const kp=new Set(["trap","slow","teleport","get-out","rent-shield","rent-double","position-swap","birthday","subsidy","redraw","land-swap"]);function vm(a,e,n="事件中，"){const r=a.players[e];if(!r||r.skillHand.length>=Ns.length)return null;!a.skillDeck.length&&a.skillDiscard.length&&(a.skillDeck=_m(a.skillDiscard),a.skillDiscard=[]);const o=a.skillDeck.shift();if(!o)return null;r.skillHand.push(o);const c=Ho(o);return r.skillHand.length>zu&&(a.skillOverflow={playerId:e}),kt(a,`${r.name}${n}獲得技能卡「${c.name}」。`,"skill"),c}function Bo(a,e,n){const r=e.skillHand.indexOf(n);return r<0?!1:(e.skillHand.splice(r,1),a.skillDiscard.push(n),!0)}function Gp(a,e){return Number.isInteger(e)&&e>=0&&e<a.players.length&&!a.players[e].bankrupt}function p3(a,e){return{counter:e.skillHand.includes("counter"),reflect:e.skillHand.includes("reflect")}}function Vp(a,e,n,r,o,{reflected:c=!1}={}){if(e.id==="trap"&&(r.pos=8,r.jail=1),e.id==="slow"&&(r.slowTurns=3),e.id==="teleport"){const m=r.pos;r.pos=o.targetPosition,_x(a,r.pos,{playerId:r.id,flow:!1,drawSkill:!1}),kt(a,`${r.name}由${n.name}使用傳送卡，從${Xt[m].name}移動至${Xt[r.pos].name}。`,"skill")}if(e.id==="get-out"&&(n.jail=0),e.id==="rent-shield"&&(n.rentShield=1),e.id==="rent-double"&&(n.rentMultiplier=2),e.id==="position-swap"&&([n.pos,r.pos]=[r.pos,n.pos]),e.id==="birthday"){const m=Qn(a,300);for(const h of a.players)h.id!==n.id&&!h.bankrupt&&Cu(a,h.id,m,n.id,"skill")}if(e.id==="subsidy"){const m=Qn(a,800);n.cash+=m,oi(a,{category:"windfall",summary:`${n.name}使用城市補助卡，獲得 ${St(m)}。`,participants:[{playerId:n.id,amountDelta:m}]})}if(e.id==="redraw"){if(o.discardCardId){const m=Ho(o.discardCardId);Bo(a,n,o.discardCardId),kt(a,`${n.name}放棄技能卡「${m.name}」。`,"skill")}vm(a,n.id,"使用幸運重抽卡，")}const f=e.target==="player"?`，目標為${r.name}`:e.target==="land"?`，交換${Xt[o.ownLotId].name}與${Xt[o.targetLotId].name}`:"",p=`${c?"反彈後，":""}${n.name}使用${e.name}${f}。`;if(kt(a,p,"skill"),!c){const m=[{playerId:n.id,category:"skillUse"}];if((e.target==="player"||e.target==="land")&&(r==null?void 0:r.id)!==n.id&&m.push({playerId:r.id,category:e.id==="land-swap"?"skillLandSwapTarget":"skillTarget"}),e.id==="birthday")for(const h of a.players)h.id!==n.id&&!h.bankrupt&&m.push({playerId:h.id,category:"skillTarget"});oi(a,{category:"skillUse",summary:p,participants:m})}e.id==="land-swap"&&kt(a,`${Xt[o.ownLotId].name}與${Xt[o.targetLotId].name}的所有權已交換。`,"skill")}function m3(a,e="pass"){const n=a.pendingSkill;if(!n)return!1;const r=a.players[n.sourceId],o=a.players[n.targetId],c=Ho(n.cardId);if(!r||!o||!c)return a.pendingSkill=null,!1;if(e==="counter"&&Bo(a,o,"counter")){a.pendingSkill=null;const f=`${o.name}使用反制卡，取消${r.name}的${c.name}。`;return kt(a,f,"skill"),oi(a,{category:"skillCounter",summary:f,participants:[{playerId:o.id,category:"skillCounter"},{playerId:r.id,category:"skillTarget"}]}),!0}if(e==="reflect"&&c.target==="player"&&Bo(a,o,"reflect")&&Gp(a,r.id)){a.pendingSkill=null,Vp(a,c,r,r,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId},{reflected:!0});const f=`${o.name}使用反彈卡，將${c.name}反彈給${r.name}。`;return kt(a,f,"skill"),oi(a,{category:"skillReflect",summary:f,participants:[{playerId:o.id,category:"skillReflect"},{playerId:r.id,category:"skillTarget"}]}),!0}return e!=="pass"?!1:(a.pendingSkill=null,Vp(a,c,r,o,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId}),!0)}function g3(a,e){var h,v;const n=a.players[a.turn],r=e.overflowUse===!0&&((h=a.skillOverflow)==null?void 0:h.playerId)===a.turn&&a.stage!=="finished";if(!(a.stage==="ready"&&!a.skillOverflow||r)||!(n!=null&&n.human)&&!n||n.bankrupt||n.skillUsedThisTurn||a.pendingSkill)return!1;const c=Ho(e.cardId);if(!c||c.timing!=="active"||!kp.has(c.id)||!n.skillHand.includes(c.id))return!1;const f=Gp(a,e.targetId)?a.players[e.targetId]:null,p=c.id==="slow";if(c.target==="player"&&(!f||f.id===n.id&&!p)||c.id==="slow"&&f.slowTurns>0||c.id==="get-out"&&n.jail===0)return!1;if(c.id==="redraw"){const x=n.skillHand.filter(_=>_!==c.id);if(x.length>0&&(!e.discardCardId||e.discardCardId===c.id||!x.includes(e.discardCardId))||x.length===0&&e.discardCardId)return!1}let m=null;if(c.id==="land-swap"){const x=a.lots[e.ownLotId],_=a.lots[e.targetLotId];if(!x||!_||x.owner!==n.id||_.owner===n.id||!Xt[e.ownLotId]||!Xt[e.targetLotId]||Xt[e.ownLotId].type!=="property"||Xt[e.targetLotId].type!=="property"||!Gp(a,_.owner))return!1;m=a.players[_.owner],[x.owner,_.owner]=[_.owner,x.owner]}if(Bo(a,n,c.id),n.skillUsedThisTurn=!0,((v=a.skillOverflow)==null?void 0:v.playerId)===n.id&&n.skillHand.length<=zu&&(a.skillOverflow=null),c.target==="player"&&f.id!==n.id){const x=p3(a,f);if(x.counter||x.reflect){a.pendingSkill={sourceId:n.id,targetId:f.id,cardId:c.id,targetPosition:Number.isInteger(e.targetPosition)?e.targetPosition:null,ownLotId:e.ownLotId,targetLotId:e.targetLotId};const _=`${n.name}使用${c.name}，指定${f.name}，等待回應。`;return kt(a,_,"skill"),oi(a,{category:"skillUse",summary:_,participants:[{playerId:n.id,category:"skillUse"},{playerId:f.id,category:"skillTarget"}]}),!0}}return Vp(a,c,n,f||m||n,e),!0}function _3(a,e){var o,c;const n=(o=a.skillOverflow)==null?void 0:o.playerId;if(!Number.isInteger(n)||n<0||n>=a.players.length)return!1;const r=a.players[n];return r.skillHand.length<=zu||!Bo(a,r,e.cardId)?!1:(r.skillHand.length<=zu&&(a.skillOverflow=null),kt(a,`${r.name}放棄技能卡「${((c=Ho(e.cardId))==null?void 0:c.name)||e.cardId}」。`,"skill"),!0)}function Cu(a,e,n,r=null,o="tax"){let c=a.players[e],f=0;for(const m of ua(a,e).sort((h,v)=>h.price-v.price)){if(c.cash>=n)break;const h=Qn(a,m.price+a.lots[m.id].level*Math.round(m.price*.6),v=>Math.floor(v*.5));c.cash+=h,f+=h,mx(a,a.lots[m.id]),delete a.lots[m.id],kt(a,`${c.name}變賣${m.name}，回收 ${St(h)}。`,"sell")}f>0&&oi(a,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${St(f)}。`,participants:[{playerId:e,amountDelta:f}]});const p=Math.min(c.cash,n);if(c.cash-=p,r!==null&&(a.players[r].cash+=p),p>0)if(r!==null){const m=a.players[r];oi(a,{category:"rentPaid",summary:`${c.name}支付 ${St(p)} 給${m.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-p},{playerId:r,category:"rentReceived",amountDelta:p}]})}else oi(a,{category:o==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${St(p)}。`,participants:[{playerId:e,amountDelta:-p}]});if(p<n){c.bankrupt=!0;const m=n-p;kt(a,`${c.name}資金不足，宣告破產。`,"bankrupt"),oi(a,{category:"bankruptcy",summary:`${c.name}無法支付 ${St(m)}，宣告破產。`,participants:[{playerId:e,amountDelta:-m}]}),gx(a)}}function _x(a,e,n={}){const r=n.playerId??a.turn,o=n.flow!==!1,c=a.players[r],f=Xt[c.pos];if(o&&(a.selected=f.id,a.stage="end",a.buildAvailable=!1,a.buildUsed=!1),f.type==="property"){const p=a.lots[f.id];if(p)if(p.owner!==c.id){let m=Fu(a,f);const h=a.players[p.owner];h.rentMultiplier===2&&(m*=2,h.rentMultiplier=1),c.rentShield===1?(c.rentShield=0,kt(a,`${c.name}使用免租卡，免除${f.name}的 ${St(m)} 租金。`,"skill")):(kt(a,`${c.name}在${f.name}支付 ${St(m)} 租金給${h.name}。`,"rent"),Cu(a,c.id,m,p.owner,"rent"))}else{a.buildAvailable=!0;const m=p.level===5?"已有旅館。":p.level===4?Ps(a).hotels?"可以升級為旅館。":"銀行旅館已用完。":Ps(a).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";kt(a,`${c.name}回到自己的${f.name}，${m}`)}else{const m=hl(a,f),h=c.cash>=m;o&&(a.stage=h?"decision":"end"),kt(a,o?`${c.name}抵達${f.name}，${h?"可以購買這塊地產。":"現金不足以購買。"}`:`${c.name}抵達${f.name}，未進行購買。`),o&&!h&&oi(a,{category:"propertyUnaffordable",summary:`${c.name}抵達${f.name}，但現金不足以購買。`,participants:[{playerId:c.id}]})}}else if(f.type==="tax"){const p=Qn(a,f.id===6?1200:1800);kt(a,`${c.name}支付${f.name} ${St(p)}。`,"tax"),Cu(a,c.id,p,null,"tax")}else if(f.type==="gojail")c.pos=8,c.jail=1,kt(a,`${c.name}前往監獄，下次回合暫停一次。`,"jail");else if(f.type==="chance"||f.type==="fund"){const p=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[m,h,v,x]=p[Math.abs(e||0)%p.length];if(x){const b=a.inflationRate;a.inflationRate=gm(b+x);const R=a.inflationRate-b,N=R===0?`通膨率維持 ${a.inflationRate}%（已達上限或下限）`:`通膨率${R>0?"提高":"降低"}至 ${a.inflationRate}%`;a.event={title:m,body:h,amount:0,kind:"inflation",inflationDelta:R,inflationRate:a.inflationRate},kt(a,`${c.name}抽到「${m}」：${N}，新通膨率於下一輪影響物價。`,"inflation")}else{const b=Qn(a,v);a.event={title:m,body:h,amount:b},kt(a,`${c.name}抽到「${m}」：${b>0?"獲得":"支付"} ${St(Math.abs(b))}。`,"chance"),b>0?(c.cash+=b,oi(a,{category:"windfall",summary:`${c.name}獲得 ${St(b)}。`,participants:[{playerId:c.id,amountDelta:b}]})):Cu(a,c.id,-b,null,"chance")}const _=n.drawSkill===!1?null:f.type==="chance"?vm(a,c.id,"機會事件中，"):null;_&&(a.event={...a.event,skillCardId:_.id,skillCardName:_.name})}else kt(a,f.type==="start"?`${c.name}抵達起點。`:f.type==="park"?`${c.name}在城市公園休息，享受片刻悠閒。`:`${c.name}只是探訪監獄，自由通行。`);gx(a)}function v3(a,e){var o;if(e.type==="NEW")return px(e.config);if(e.type==="LOAD")return Zu(e.game)?f3(structuredClone(e.game)):a;const n=structuredClone(a),r=n.players[n.turn];switch(n.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(n.stage!=="ready"||!r.human||r.bankrupt||r.jail||![1,2].includes(e.count))return a;r.diceCount=e.count;break;case"ROLL":if(n.stage!=="ready"||r.bankrupt||n.pendingSkill)return a;if(r.jail){r.jail--,n.stage="end",kt(n,`${r.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(r.diceCount??2)||!e.dice.every(m=>Number.isInteger(m)&&m>=1&&m<=6))return a;n.dice=[...e.dice];const c=e.dice.reduce((m,h)=>m+h,0),f=r.slowTurns>0;r.slowTurns=Math.max(0,r.slowTurns-(f?1:0)),n.remaining=f?Math.min(1,c):c,n.event=null,n.stage="moving",n.eventIndex=e.eventIndex,kt(n,`${r.name}擲出 ${e.dice.join(" + ")}，前進 ${n.remaining} 格。${f?"龜速效果生效，本回合最多前進 1 格。":""}`,"dice");break;case"STEP":if(n.stage!=="moving")return a;if(r.pos=(r.pos+1)%32,r.pos===0){const m=Qn(n,2e3);r.cash+=m,kt(n,`${r.name}通過起點，領取 ${St(m)}。`,"salary"),oi(n,{category:"salary",summary:`${r.name}經過起點，獲得 ${St(m)}。`,participants:[{playerId:r.id,amountDelta:m}]})}n.remaining--;const p=Xt[r.pos].type==="fund"?vm(n,r.id,n.remaining===0?"抵達城市基金格，":"經過城市基金格，"):null;n.remaining===0&&(_x(n,n.eventIndex),p&&n.event&&(n.event={...n.event,skillCardId:p.id,skillCardName:p.name}));break;case"BUY":{if(n.stage!=="decision")return a;const m=Xt[r.pos],h=hl(n,m);if(n.lots[m.id]||r.cash<h)return a;r.cash-=h,n.lots[m.id]={owner:r.id,level:0},n.stage="end",kt(n,`${r.name}購買了${m.name}，支付 ${St(h)}。`,"buy"),oi(n,{category:"purchase",summary:`${r.name}購買${m.name}，支付 ${St(h)}。`,participants:[{playerId:r.id,amountDelta:-h}]});break}case"SKIP":if(n.stage!=="decision")return a;n.stage="end",kt(n,`${r.name}暫不購買${Xt[r.pos].name}。`);break;case"BUILD":{if(!Hp(n,e.id))return a;const m=Xt[e.id],h=n.lots[e.id],v=Ml(m,n);n.bank=n.bank||Ps(n),r.cash-=v,h.level<4?(n.bank.houses--,h.level++,kt(n,`${r.name}在${m.name}加蓋第 ${h.level} 間房屋，支付 ${St(v)}。`,"build")):(n.bank.houses+=4,n.bank.hotels--,h.level=5,kt(n,`${r.name}將${m.name}的 4 間房屋升級為旅館，支付 ${St(v)}。`,"build")),oi(n,{category:"construction",summary:`${r.name}支付 ${St(v)} 建設地產。`,participants:[{playerId:r.id,amountDelta:-v}]}),n.buildAvailable=!1,n.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(n.stage)||((o=n.lots[e.id])==null?void 0:o.owner)!==r.id)return a;const m=Xt[e.id],h=n.lots[e.id],v=Qn(n,m.price+h.level*Math.round(m.price*.6),x=>Math.floor(x*.5));mx(n,h),r.cash+=v,delete n.lots[e.id],n.buildAvailable=!1,kt(n,`${r.name}變賣${m.name}，回收 ${St(v)}。`,"sell"),oi(n,{category:"sale",summary:`${r.name}變賣${m.name}，回收 ${St(v)}。`,participants:[{playerId:r.id,amountDelta:v}]});break}case"USE_SKILL_CARD":if(!g3(n,e))return a;break;case"RESPOND_SKILL":if(!n.pendingSkill||e.playerId!==n.pendingSkill.targetId||!["counter","reflect","pass"].includes(e.response)||!m3(n,e.response))return a;break;case"RESOLVE_SKILL_OVERFLOW":if(!_3(n,e))return a;break;case"NEXT":if(n.stage!=="end"||n.skillOverflow||n.pendingSkill)return a;{let m=n.turn;do if(m=(m+1)%n.players.length,m===0){n.round++;const h=n.priceIndex;n.priceIndex=Math.min(fx,n.priceIndex*(1+n.inflationRate/100)),n.priceIndex>h&&kt(n,`新的一輪開始，物價指數升至 ${n.priceIndex.toFixed(2)}×。`,"inflation")}while(n.players[m].bankrupt);n.turn=m,n.players[m].skillUsedThisTurn=!1,n.event=null,n.stage="ready",n.selected=null,n.buildAvailable=!1,n.buildUsed=!1,n.maxRounds!==null&&n.round>n.maxRounds?(n.winner=n.players.filter(h=>!h.bankrupt).sort((h,v)=>pr(n,v.id)-pr(n,h.id))[0].id,n.stage="finished",kt(n,`${n.maxRounds} 回合結束！${n.players[n.winner].name}以最高總資產獲勝。`)):kt(n,`輪到${n.players[m].name}，準備擲骰子。`);break}default:return a}return n.limitBuildings===!1&&(n.bank={...Bu}),n}function Eu(a){return a<=8?[-8+a*2,8]:a<=16?[8,8-(a-8)*2]:a<=24?[8-(a-16)*2,-8]:[-8,-8+(a-24)*2]}const y3=He.forwardRef(function({game:e,onSelect:n,onError:r,emotionAnchorRefs:o,emotionMoods:c,children:f},p){const m=He.useRef(),h=He.useRef(),v=He.useRef(e),x=He.useRef(n),_=He.useRef({});return v.current=e,x.current=n,_.current=c||{},He.useImperativeHandle(p,()=>({reset(){var b;(b=h.current)==null||b.reset()},zoom(b){const R=h.current;R&&(R.camera.position.sub(R.controls.target).multiplyScalar(b).clampLength(13,80).add(R.controls.target),R.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const b=h.current;b&&(b.camera.position.set(0,29,.01),b.controls.update())}}),[]),He.useEffect(()=>{let b=!1,R=()=>{};return(async()=>{var Ot;try{await Promise.race([((Ot=document.fonts)==null?void 0:Ot.ready)||Promise.resolve(),new Promise(ve=>setTimeout(ve,2e3))])}catch{}if(b)return;const T='"Noto Sans TC", "Microsoft JhengHei", sans-serif',E=m.current;let U;try{U=new PR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{r==null||r("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=Ro,U.outputColorSpace=gi,U.toneMapping=Zp,U.toneMappingExposure=.9,E.appendChild(U.domElement),U.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const L=new db;L.background=new Rt("#eaf0e5"),L.fog=new rm("#eaf0e5",48,90);const M=new Vi(39,1,.1,120),I=new BR(M,U.domElement);I.enableDamping=!0,I.dampingFactor=.07,I.minDistance=13,I.maxDistance=80,I.maxPolarAngle=Math.PI*.485,I.minPolarAngle=.01,I.target.set(0,0,0),I.autoRotateSpeed=.65,I.enablePan=!0;const P=()=>{M.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/M.aspect)),I.target.set(0,0,0),I.autoRotate=!1,I.update()};P(),h.current={camera:M,controls:I,reset:P},L.add(new Lb("#fff9e9","#86967e",2.4));const F=new Pb("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,L.add(F);const A=new Map,O=ve=>(A.has(ve)||A.set(ve,new zv({color:ve,roughness:.82})),A.get(ve)),Y=new Map,k=(ve,C,y,X,q,J=0,re=0,de=0,ee=0)=>{const se=[C,y,X,ee].join(",");Y.has(se)||Y.set(se,ee?new pm(C,y,X,2,ee):new Is(C,y,X));const _e=new Ln(Y.get(se),O(q));return _e.position.set(J,re,de),_e.castShadow=!0,_e.receiveShadow=!0,ve.add(_e),_e},$=new fm(1,14,10),ge=(ve,C,y,X,q,J,re=J,de=J)=>{const ee=new Ln($,O(C));return ee.position.set(y,X,q),ee.scale.set(J,re,de),ee.castShadow=!0,ee.receiveShadow=!0,ve.add(ee),ee},me=(ve,C,y,X,q,J,re,de,ee=24)=>{const se=new Ln(new Wu(C,y,X,ee),O(q));return se.position.set(J,re,de),se.castShadow=!0,se.receiveShadow=!0,ve.add(se),se},ie=new Ln(new hr(200,200),O("#eaf0e5"));ie.rotation.x=-Math.PI/2,ie.position.y=-.67,ie.receiveShadow=!0,L.add(ie),me(L,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),me(L,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),k(L,18.55,.65,18.55,"#405d50",0,-.03,0,.2),k(L,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),k(L,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const H=[];function W(ve,C=512,y=512){const X=document.createElement("canvas");X.width=C,X.height=y;const q=X.getContext("2d");ve(q,C,y);const J=new bb(X);return J.colorSpace=gi,J.minFilter=kn,J.magFilter=kn,J.anisotropy=U.capabilities.getMaxAnisotropy(),H.push(J),J}const le={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},Se=[],De=[],z=[],K=[],Me=new Map;function Oe(ve,C){const y=`${ve}:${C}`;if(!Me.has(y)){const X=W((q,J,re)=>{q.clearRect(0,0,J,re),q.fillStyle=C,q.beginPath(),q.roundRect(8,8,J-16,re-16,24),q.fill(),q.strokeStyle="#fffaf0",q.lineWidth=8,q.stroke(),q.fillStyle="#fffaf0",q.beginPath(),q.arc(J/2,re/2,43,0,Math.PI*2),q.fill(),q.fillStyle="#294237",q.textAlign="center",q.textBaseline="middle",q.font="bold 72px Arial",q.fillText(String(ve+1),J/2,re/2+3)},192,144);Me.set(y,new qy({map:X,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Me.get(y)}for(const ve of Xt){const[C,y]=Eu(ve.id),X=new Ga;X.position.set(C,.44,y),L.add(X);const q=k(X,1.94,.14,1.94,"#fffaf0",0,0,0,.035);q.userData.tile=ve.id,Se.push(q),De[ve.id]=q;const J=v.current.priceIndex||1,re=(_e,Ne,Ie,we)=>{_e.fillStyle="#fcf9f0",_e.fillRect(0,0,Ne,Ie),ve.type==="property"&&(_e.fillStyle=ve.color,_e.fillRect(0,0,Ne,82)),_e.fillStyle="#294237",_e.textAlign="center",_e.font=`bold 76px ${T}`,_e.fillText(ve.name,Ne/2,ve.type==="property"?180:140),ve.type==="property"?(_e.font="60px Arial",_e.fillText(St(Math.round(ve.price*we)),Ne/2,290),_e.fillStyle="#8c998e",_e.font="26px sans-serif",_e.fillText("CITY PROPERTY",Ne/2,410)):(_e.font="bold 135px Arial",_e.fillStyle=ve.type==="chance"?"#ba9270":"#648473",_e.fillText(le[ve.type],Ne/2,320),_e.fillStyle="#728375",_e.font=`30px ${T}`,_e.fillText(ve.type==="start"?`+ ${St(Math.round(2e3*we))}`:ve.type==="tax"?"城市稅收":ve.type==="park"?"歇一會兒":ve.type==="chance"?"好運降臨":ve.type==="fund"?"城市生活":"JUST VISITING",Ne/2,420))},de=W((_e,Ne,Ie)=>re(_e,Ne,Ie,J));(ve.type==="property"||ve.type==="start")&&K.push(_e=>{const Ne=de.image.getContext("2d");re(Ne,de.image.width,de.image.height,_e),de.needsUpdate=!0});const ee=new Ln(new hr(1.89,1.89),new Do({map:de,toneMapped:!1}));ee.rotation.x=-Math.PI/2,ee.rotation.z=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,ee.position.y=.076,X.add(ee);const se=new Ga;se.position.set(C,.58,y),se.rotation.y=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,L.add(se),z[ve.id]=se}for(const ve of[-4.4,4.4]){k(L,.8,.025,13,"#d3d2bb",ve,.525,0),k(L,1.15,.018,13,"#f6f1df",ve,.513,0);for(let C=-6;C<=6;C+=.75)k(L,.035,.008,.29,"#faf6e8",ve,.543,C)}for(const ve of[-3.2,3.2]){k(L,13,.025,.8,"#d3d2bb",0,.525,ve),k(L,13,.018,1.15,"#f6f1df",0,.513,ve);for(let C=-6;C<=6;C+=.75)k(L,.29,.008,.035,"#faf6e8",C,.543,ve)}function ze(ve,C,y=1){const X=new Ga;X.position.set(ve,.52,C),X.scale.setScalar(y),L.add(X),me(X,.045,.075,.55,"#94785c",0,.28,0,7),ge(X,"#8db578",0,.83,0,.29,.44,.29),ge(X,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function ae(ve,C,y,X,q,J,re=!1){const de=new Ga;de.position.set(ve,.53,C),L.add(de),k(de,y+.18,.12,X+.18,"#ede9d5",0,.06,0,.04),k(de,y,q,X,J,0,q/2+.1,0,.035),k(de,y+.1,.1,X+.1,"#fff4df",0,q+.12,0,.02);for(let ee=.45;ee<q-.1;ee+=.42){for(let se=-y/2+.22;se<y/2-.08;se+=.32)k(de,.17,.23,.018,"#6d9097",se,ee,X/2+.01),k(de,.17,.23,.018,"#6d9097",se,ee,-X/2-.01);for(let se=-X/2+.22;se<X/2-.08;se+=.32)k(de,.018,.23,.17,"#6d9097",y/2+.01,ee,se);k(de,y+.025,.045,X+.025,"#ede9d8",0,ee+.17,0)}if(k(de,.24,.36,.024,"#496d68",0,.28,X/2+.02),re){const ee=new Ln(new No(y*.81,.55,4),O("#c98468"));ee.rotation.y=Math.PI/4,ee.scale.z=X/y,ee.position.y=q+.42,ee.castShadow=!0,de.add(ee)}else k(de,y*.7,.08,X*.7,"#a5b7ae",0,q+.21,0),k(de,.23,.2,.25,"#e9e4d2",y*.18,q+.34,0)}ae(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),ae(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),ae(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),ae(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),ae(5.6,-5,1.1,1.5,2.3,"#aac5bc"),ae(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),ae(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),ae(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),ae(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),ae(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),ae(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[ve,C]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])ze(ve,C,1.05);for(let ve=0;ve<24;ve++){const C=ve*Math.PI*2/24;ve%3!==0&&ze(Math.cos(C)*12.5,Math.sin(C)*12.5,.85+ve%3*.12)}k(L,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Re=W((ve,C,y)=>{ve.clearRect(0,0,C,y),ve.textAlign="center",ve.fillStyle="#3d6850",ve.font="900 152px Arial",ve.fillText("CITY",C/2,148),ve.fillText("TYCOON",C/2,265),ve.font=`25px ${T}`,ve.fillStyle="#6d8468",ve.fillText("每一步，都是新可能。",C/2,338)},1024,420),Ce=new Ln(new hr(6.2,2.54),new zv({map:Re,transparent:!0,depthWrite:!1}));Ce.rotation.x=-Math.PI/2,Ce.position.set(0,.58,0),L.add(Ce),me(L,.75,.82,.12,"#ede7cf",0,.59,4.3),me(L,.62,.62,.05,"#91c8ce",0,.675,4.3),me(L,.18,.28,.5,"#dfebdf",0,.95,4.3),ge(L,"#9fcfd2",0,1.3,4.3,.14),me(L,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Be=[];for(let ve=0;ve<4;ve++){const C=new Ga;L.add(C),me(C,.26,.3,.12,Kn[ve],0,.08,0),ge(C,Kn[ve],0,.53,0,.23,.32,.18),ge(C,"#f1d5b0",0,1,0,.225),ge(C,Kn[ve],0,1.12,-.015,.24,.14,.235),k(C,.44,.05,.15,Kn[ve],0,1.1,.16,.025);for(const q of[-.09,.09])ge(C,"#273e34",q,1.015,.198,.025),k(C,.13,.2,.19,"#3c5349",q,.22,.025,.035),ge(C,"#f1d5b0",q*2.8,.51,0,.075,.15,.075);k(C,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),C.scale.setScalar(.95);const[y,X]=Eu(0);C.position.set(y+(ve%2-.5)*.62,.59,X+(Math.floor(ve/2)-.5)*.62),C.traverse(q=>{q.material===O(Kn[ve])&&(q.userData.playerTint=!0)}),Be.push(C)}const at=new Ln(new um(.42,.5,40),new Do({color:"#f4c65b",side:da}));at.rotation.x=-Math.PI/2,L.add(at);const et=new Ln(new Is(1.98,.045,1.98),new Do({color:"#edc768",transparent:!0,opacity:.6}));L.add(et),et.visible=!1;let Wt="",ut=Number.NaN,pt,dt=0,ht=performance.now();const Pt=()=>{const ve=E.clientWidth,C=E.clientHeight;U.setSize(ve,C),M.aspect=ve/C,M.updateProjectionMatrix(),P()},Ze=new ResizeObserver(Pt);Ze.observe(E),Pt();let _t;const sn=ve=>{_t=[ve.clientX,ve.clientY]},zt=ve=>{if(!_t||Math.hypot(ve.clientX-_t[0],ve.clientY-_t[1])>6)return;const C=E.getBoundingClientRect(),y=new Fb;y.setFromCamera(new ot((ve.clientX-C.left)/C.width*2-1,-(ve.clientY-C.top)/C.height*2+1),M);const X=y.intersectObjects(Se)[0];X&&x.current(X.object.userData.tile)};E.addEventListener("pointerdown",sn),E.addEventListener("pointerup",zt);function cn(){const ve=o==null?void 0:o.current;if(!(ve!=null&&ve.size))return;const C=E.getBoundingClientRect(),y={left:12,top:72,right:C.width-12,bottom:C.height-82},X=[...E.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map(J=>{const re=J.getBoundingClientRect();return{left:re.left-C.left,top:re.top-C.top,right:re.right-C.left,bottom:re.bottom-C.top}}),q=[];for(const[J,re]of[...ve.entries()].sort(([de],[ee])=>de-ee)){const de=Be[J];if(!(re!=null&&re.isConnected)||!de||!re.offsetWidth||!re.offsetHeight)continue;const ee=de.position.clone().add(new te(0,1.45,0)).project(M),se=(ee.x*.5+.5)*C.width,_e=(-ee.y*.5+.5)*C.height,Ne=re.offsetWidth,Ie=re.offsetHeight,we={left:se-Ne/2,top:_e-Ie-20},Ye=[we,{left:we.left-Ne*.62-18,top:we.top},{left:we.left+Ne*.62+18,top:we.top},{left:we.left-Ne*.42-14,top:we.top-42},{left:we.left+Ne*.42+14,top:we.top-42},{left:we.left,top:we.top-58}].map(G=>({left:Math.max(y.left,Math.min(y.right-Ne,G.left)),top:Math.max(y.top,Math.min(y.bottom-Ie,G.top))}));let qe=Ye[0],st=1/0;for(const G of Ye){const Ue={...G,right:G.left+Ne,bottom:G.top+Ie};let xe=Math.hypot(G.left-we.left,G.top-we.top);for(const Pe of[...q,...X]){const ke=Math.max(0,Math.min(Ue.right,Pe.right)-Math.max(Ue.left,Pe.left)),Ae=Math.max(0,Math.min(Ue.bottom,Pe.bottom)-Math.max(Ue.top,Pe.top));xe+=ke*Ae*100}xe<st&&(st=xe,qe=G)}re.style.left=`${qe.left}px`,re.style.top=`${qe.top}px`,re.style.setProperty("--tail-x",`${Math.max(18,Math.min(Ne-18,se-qe.left))}px`),q.push({...qe,right:qe.left+Ne,bottom:qe.top+Ie})}}function Q(){var q;pt=requestAnimationFrame(Q);const ve=performance.now(),C=Math.min((ve-ht)/1e3,.05);ht=ve,dt+=C;const y=v.current;for(let J=0;J<Be.length;J++)Be[J].visible=!!y.players[J]&&!y.players[J].bankrupt;for(let J=0;J<y.players.length;J++){const re=y.players[J],de=Be[J],[ee,se]=Eu(re.pos),_e=_.current[J];de.traverse(st=>{st.userData.playerTint&&(st.material=O(re.color||Kn[J]))});const Ne=ee+(J%2-.5)*.62,Ie=se+(Math.floor(J/2)-.5)*.62,we=Math.hypot(Ne-de.position.x,Ie-de.position.z);de.userData.baseRotationY=Math.atan2(Ne-de.position.x,Ie-de.position.z),we>.04&&(de.position.x=Lp.damp(de.position.x,Ne,13,C),de.position.z=Lp.damp(de.position.z,Ie,13,C));const Ye=we>.04?Math.abs(Math.sin(dt*17))*.18:0,qe=_e==="happy"?Math.abs(Math.sin(dt*10))*.1:_e==="sad"?-.1:_e==="surprised"?Math.sin(dt*12)*.045:_e==="relieved"?Math.sin(dt*5)*.025:0;de.position.y=.59+Ye+qe,de.rotation.y=(de.userData.baseRotationY||0)+(_e==="proud"?Math.sin(dt*8)*.12:0),de.rotation.z=_e==="anxious"?Math.sin(dt*32)*.045:0,de.position.x+=_e==="anxious"?Math.sin(dt*34)*.035:0,de.scale.setScalar(.95*(_e==="surprised"?1+Math.max(0,Math.sin(dt*12))*.09:1)),de.visible=!re.bankrupt}if(y.priceIndex!==ut&&(ut=y.priceIndex,K.forEach(J=>J(ut))),at.position.copy(Be[y.turn].position),at.position.y=.595,at.scale.setScalar(1+Math.sin(dt*3)*.06),y.selected!==null){const[J,re]=Eu(y.selected);et.position.set(J,.536,re),et.visible=!0}else et.visible=!1;const X=JSON.stringify([y.lots,y.players.map(J=>J.color)]);if(Wt!==X){Wt=X;for(const J of Xt){const re=z[J.id];for(;re.children.length;){const se=re.children[0];se.userData.disposableGeometry&&se.geometry.dispose(),re.remove(se)}const de=y.lots[J.id],ee=de?((q=y.players[de.owner])==null?void 0:q.color)||Kn[de.owner]:null;if(De[J.id].material=O(ee||"#fffaf0"),de){k(re,.045,.72,.045,"#647568",.67,.36,.7,.01);const se=new vb(Oe(de.owner,ee));if(se.position.set(.67,.86,.7),se.scale.set(.62,.465,1),se.renderOrder=5,re.add(se),k(re,1.75,.055,.13,ee,0,0,.84,.015),de.level===5){k(re,.62,.72,.58,ee,0,.36,-.18,.04),k(re,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const _e=new Ln(new No(.43,.28,4),O("#d2a451"));_e.position.set(0,.96,-.18),_e.userData.disposableGeometry=!0,_e.rotation.y=Math.PI/4,_e.castShadow=!0,re.add(_e),k(re,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const _e=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Ne=0;Ne<de.level;Ne++){const[Ie,we]=_e[Ne];k(re,.33,.32,.34,ee,Ie,.2,we,.02);const Ye=new Ln(new No(.3,.19,4),O("#faf0d7"));Ye.position.set(Ie,.45,we),Ye.userData.disposableGeometry=!0,Ye.rotation.y=Math.PI/4,Ye.castShadow=!0,re.add(Ye)}}}}}I.update(),cn(),U.render(L,M)}Q(),R=()=>{cancelAnimationFrame(pt),Ze.disconnect(),E.removeEventListener("pointerdown",sn),E.removeEventListener("pointerup",zt),I.dispose();const ve=new Set,C=new Set;L.traverse(y=>{y.geometry&&ve.add(y.geometry),y.material&&C.add(y.material)}),ve.forEach(y=>y.dispose()),Y.forEach(y=>y.dispose()),C.forEach(y=>y.dispose()),A.forEach(y=>y.dispose()),Me.forEach(y=>y.dispose()),H.forEach(y=>y.dispose()),U.dispose(),U.domElement.parentNode===E&&E.removeChild(U.domElement),h.current=null}})(),()=>{b=!0,R()}},[]),g.createElement("div",{className:"board-canvas",ref:m},f)});function x3({game:a,onLoad:e}){const[n,r]=He.useState([]),[o,c]=He.useState(""),[f,p]=He.useState(""),[m,h]=He.useState(null),v=()=>{try{r(zo())}catch{p("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};He.useEffect(()=>{v();const b=setInterval(v,6e4);return window.addEventListener("storage",v),()=>{clearInterval(b),window.removeEventListener("storage",v)}},[]);function x(b=!1){try{const R=zo();if(r(R),R.length===10&&!b){h({type:"replace"});return}r(t3(a,o,b)),c(""),h(null),p("已儲存，可保留 30 天。")}catch(R){h(null),p(`儲存失敗：${R.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function _(){try{const b=n3(m.id);e(b)}catch(b){h(null),p(b.message),v()}}return g.createElement("div",{className:"save-manager"},g.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",n.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),g.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),g.createElement("input",{id:"save-name",maxLength:60,value:o,onChange:b=>c(b.target.value),placeholder:`回合 ${a.round}`}),g.createElement("button",{className:"primary",onClick:()=>x()},"儲存目前進度"),g.createElement("p",{role:"status"},f),m?g.createElement("section",{className:"save-confirm"},g.createElement("p",null,m.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),g.createElement("button",{className:"primary",onClick:()=>m.type==="replace"?x(!0):_()},"確認",m.type==="replace"?"取代並儲存":"讀取"),g.createElement("button",{className:"secondary full",onClick:()=>h(null)},"取消")):null,!n.length&&g.createElement("p",null,"尚無手動存檔。"),n.map(b=>g.createElement("article",{className:"save-entry",key:b.id},g.createElement("div",null,g.createElement("strong",null,b.name),g.createElement("small",null,new Date(b.savedAt).toLocaleString("zh-TW")),g.createElement("small",null,"回合 ",b.game.round," · 你的總資產 ",St(pr(b.game,0))),g.createElement("small",null,"到期：",new Date(b.savedAt+cx).toLocaleString("zh-TW"))),g.createElement("button",{className:"secondary",onClick:()=>h({type:"load",id:b.id})},"讀取"))))}const S3=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,vx="city-tycoon:background-music:v1";function E3(){try{const a=JSON.parse(localStorage.getItem(vx));return{enabled:(a==null?void 0:a.enabled)===!0,volume:typeof(a==null?void 0:a.volume)=="number"&&Number.isFinite(a.volume)?Math.max(0,Math.min(100,a.volume)):50}}catch{return{enabled:!1,volume:50}}}function M3(){const[a,e]=He.useState(E3),[n,r]=He.useState(!1),[o,c]=He.useState(""),f=He.useRef(null),p=He.useRef(0);function m(){const v=++p.current;c(""),f.current.play().catch(x=>{v===p.current&&c(x.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}He.useEffect(()=>{const v=f.current;return v.volume=a.volume/100,a.enabled&&m(),()=>{p.current++,v.pause()}},[]),He.useEffect(()=>{f.current.volume=a.volume/100;try{localStorage.setItem(vx,JSON.stringify(a))}catch{}},[a]);function h(){f.current.paused?(e(v=>({...v,enabled:!0})),m()):(p.current++,f.current.pause(),c(""),e(v=>({...v,enabled:!1})))}return g.createElement("div",{className:"background-music"},g.createElement("audio",{ref:f,src:S3,loop:!0,preload:"none",onPlaying:()=>r(!0),onPause:()=>r(!1),onError:()=>{r(!1),c("音樂無法載入，請重新整理")}}),g.createElement("button",{className:"music-toggle","aria-label":n?"關閉背景音樂":"開啟背景音樂","aria-pressed":n,onClick:h,title:o||"Velvet Afternoon"},g.createElement(WE,{size:16}),g.createElement("span",null,"背景音樂"),n?g.createElement(YE,{size:14}):g.createElement(qE,{size:14})),g.createElement("label",{className:"music-volume"},g.createElement("span",{className:"music-volume-label"},"音量"),g.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:a.volume,onChange:v=>e(x=>({...x,volume:Number(v.target.value)}))}),g.createElement("output",null,a.volume,"%")),o&&g.createElement("span",{className:"music-message",role:"status"},o))}function yx(a){return Number.isFinite(a)?`${a>0?"+":"−"}${St(Math.abs(a))}`:""}const b3={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function xx({message:a,player:e,anchorRefs:n,mobile:r=!1,animated:o=!0,paused:c=!1}){if(!e)return null;const f=yx(a.amountDelta),p=`emotion-${a.mood}`,m=e.color||"#61ac78";return g.createElement("div",{ref:r?void 0:h=>{n&&(h?n.current.set(e.id,h):n.current.delete(e.id))},className:`emotion-bubble ${p}${o?"":" motion-off"}${c?" is-paused":""}${r?" emotion-mobile-entry":""}`,style:{"--player":m},"aria-hidden":"true"},g.createElement("div",{className:"emotion-card"},g.createElement("div",{className:"emotion-bubble-heading"},g.createElement("span",{className:"emotion-player-dot"}),g.createElement("strong",null,e.name),g.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},a.emoji),g.createElement("span",{className:"emotion-mood-label"},a.moodLabel),g.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},b3[a.mood]),g.createElement("b",{className:"emotion-amount"},f)),g.createElement("p",null,a.message)))}function T3({event:a,players:e,anchorRefs:n,animated:r,paused:o=!1}){if(!a)return null;const c=new Map(e.map(p=>[p.id,p])),f=`${a.summary} ${a.players.map(p=>{const m=c.get(p.playerId);return`${(m==null?void 0:m.name)||"玩家"}，${p.moodLabel}，${yx(p.amountDelta)}，${p.message}`}).join(" ")}`;return g.createElement(g.Fragment,null,g.createElement("div",{className:"emotion-layer","aria-hidden":"true"},a.players.map(p=>g.createElement(xx,{key:`${a.id}-${p.playerId}`,message:p,player:c.get(p.playerId),anchorRefs:n,animated:r,paused:o}))),g.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},f))}function A3({event:a,players:e,animated:n,paused:r=!1}){if(!a)return null;const o=new Map(e.map(c=>[c.id,c]));return g.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},a.players.map(c=>g.createElement(xx,{key:`${a.id}-${c.playerId}`,message:c,player:o.get(c.playerId),mobile:!0,animated:n,paused:r})))}const rr={enter:180,fly:620,flip:720,exit:360},R3=9e3,C3=6e3,yy={proud:{label:"得意",emoji:"😎",message:"這張牌用得正是時候！"},surprised:{label:"驚訝",emoji:"😲",message:"等等，這張牌是對我的？"},happy:{label:"開心",emoji:"😊",message:"漂亮的一手牌！"},anxious:{label:"焦急",emoji:"😣",message:"局勢突然變了！"},relieved:{label:"鬆一口氣",emoji:"😮‍💨",message:"總算化解危機了。"}},w3={trap:{source:["proud","先請你進監獄休息一下。"],target:["surprised","等等，我被送進監獄了？"]},slow:{source:["proud","接下來慢慢走吧。"],target:["surprised","我的步伐被限制了！"]},teleport:{source:["proud","城市位置，照我的計畫走。"],target:["surprised","我被傳送到哪裡了？"]},"position-swap":{source:["proud","位置交換，局勢改寫！"],target:["surprised","我的位置被換走了！"]},"land-swap":{source:["proud","這筆換地交易成立。"],target:["surprised","我的街區突然易主了？！"]},birthday:{source:["happy","今天的派對由我做東！"],target:["surprised","怎麼每個人都要付錢？"]},subsidy:{source:["happy","城市補助到手！"],target:["happy","銀行送來一筆補助。"]},"rent-shield":{source:["relieved","這次租金，安全下莊。"],target:["surprised","這筆租金被護盾擋下了。"]},"rent-double":{source:["proud","這次收租翻倍！"],target:["surprised","租金怎麼變高了？"]},"get-out":{source:["relieved","終於可以離開監獄了。"],target:["happy","自由回來了！"]},redraw:{source:["proud","換一張更好的牌。"],target:["surprised","牌堆又有新變化。"]}};function xy({player:a,role:e,preview:n}){if(!a||!n)return null;const[r,o]=n,c=yy[r]||yy.surprised;return g.createElement("article",{className:`skill-sequence-emotion ${e}`,style:{"--player":a.color}},g.createElement("div",{className:"skill-sequence-emotion-heading"},g.createElement("span",{className:"skill-sequence-emotion-dot"}),g.createElement("strong",null,a.name),g.createElement("span",null,c.emoji),g.createElement("small",null,c.label)),g.createElement("p",null,o))}function Sy({player:a,role:e,label:n}){return a?g.createElement("div",{className:`skill-sequence-player ${e}`,style:{"--player":a.color}},g.createElement("div",{className:"skill-sequence-avatar"},g.createElement("span",null),g.createElement("i",null)),g.createElement("strong",null,a.name),g.createElement("small",null,n)):g.createElement("div",{className:`skill-sequence-player ${e} is-bank`},g.createElement("span",{className:"skill-sequence-player-icon"},"✦"),g.createElement("small",null,n))}function D3({sequence:a,players:e,animated:n=!0,onComplete:r}){const[o,c]=He.useState("enter"),f=He.useRef(r);f.current=r;const m=(a==null?void 0:a.sourceId)===0||(a==null?void 0:a.targetId)===0?R3:C3;if(He.useEffect(()=>{var E;if(!a)return;if(!n){(E=f.current)==null||E.call(f);return}c("enter");const R=rr.enter+rr.fly+rr.flip,T=[["fly",rr.enter],["flip",rr.enter+rr.fly],["emotion",R],["exit",R+m]].map(([U,L])=>setTimeout(()=>c(U),L));return T.push(setTimeout(()=>{var U;return(U=f.current)==null?void 0:U.call(f)},R+m+rr.exit)),()=>T.forEach(clearTimeout)},[a==null?void 0:a.id,n,m]),!a)return null;const h=e.find(R=>R.id===a.sourceId),v=e.find(R=>R.id===a.targetId)||null,x=w3[a.card.id]||{source:["proud","技能卡啟動！"],target:["surprised","局勢突然變了！"]},_=a.card.id==="birthday"?"其他玩家":(v==null?void 0:v.name)||"城市銀行",b=v||{id:"bank",name:_,color:"#c49b42"};return g.createElement("section",{className:`skill-sequence-layer skill-${a.card.type}`,"data-phase":o,role:"dialog","aria-modal":"true","aria-label":`${a.card.name}動畫`},g.createElement("div",{className:"skill-sequence-backdrop"}),g.createElement("div",{className:"skill-sequence-canvas"},g.createElement("button",{type:"button",className:"skill-sequence-close","aria-label":"關閉技能動畫",title:"關閉並立即執行技能",onClick:()=>{var R;return(R=f.current)==null?void 0:R.call(f)}},g.createElement(Vu,{size:18})),g.createElement("div",{className:"skill-sequence-kicker"},g.createElement("span",null),"技能卡啟動 ",g.createElement("small",null,a.card.name)),g.createElement("div",{className:"skill-sequence-stage"},g.createElement(Sy,{player:h,role:"source",label:"使用者"}),g.createElement("div",{className:"skill-sequence-route"},g.createElement("i",null),g.createElement("i",null),g.createElement("i",null)),g.createElement("div",{className:"skill-sequence-card-stage"},g.createElement("div",{className:"skill-sequence-card card-back"},g.createElement("span",null,"城市大亨"),g.createElement("small",null,"SKILL CARD")),g.createElement("div",{className:"skill-sequence-card card-front"},g.createElement("span",{className:"skill-sequence-card-icon"},a.card.icon),g.createElement("strong",null,a.card.name),g.createElement("p",null,a.card.summary),g.createElement("small",null,o==="emotion"?"效果準備生效":"技能卡"))),g.createElement(Sy,{player:b.id==="bank"?null:b,role:"target",label:_})),g.createElement("div",{className:"skill-sequence-caption"},g.createElement("strong",null,a.card.name),g.createElement("span",null,o==="emotion"?"情緒回應中":o==="exit"?"準備套用效果":"卡片正在傳遞")),g.createElement("div",{className:"skill-sequence-emotions"},g.createElement(xy,{player:h,role:"source",preview:x.source}),g.createElement(xy,{player:b.id==="bank"?null:b,role:"target",preview:x.target}))))}function N3({value:a,rolling:e}){const n={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return g.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${a} 點`},Array.from({length:9},(r,o)=>g.createElement("i",{key:o,className:n[a].includes(o+1)?"pip":""})))}function Hu(a){return(a==null?void 0:a.color)||Kn[(a==null?void 0:a.id)||0]}function ku({id:a,small:e=!1,player:n}){return g.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Hu(n||{id:a})}},g.createElement("span",{className:"avatar-head"}),g.createElement("span",{className:"avatar-body"}),g.createElement("span",{className:"avatar-cap"}),g.createElement("span",{className:"owner-number"},a+1))}function Sx({player:a}){const e=[];return a.jail&&e.push(g.createElement("span",{key:"jail",className:"status-badge jail"},"監獄")),a.slowTurns&&e.push(g.createElement("span",{key:"slow",className:"status-badge slow"},"龜速 ",a.slowTurns)),a.rentShield&&e.push(g.createElement("span",{key:"shield",className:"status-badge shield"},"免租")),a.rentMultiplier===2&&e.push(g.createElement("span",{key:"double",className:"status-badge double"},"收租×2")),e.length?g.createElement("div",{className:"player-status-badges"},e):null}function U3({game:a}){const e=Ps(a);return g.createElement("section",{className:"building-inventory","aria-label":"建築物剩餘數量"},g.createElement("div",{className:"building-inventory-heading"},g.createElement("strong",null,"建築物庫存"),g.createElement("span",null,a.limitBuildings?"有限量":"不限量")),a.limitBuildings?g.createElement("div",{className:"building-inventory-values"},g.createElement("span",null,g.createElement("b",null,e.houses),g.createElement("small",null,"房屋可購買")),g.createElement("span",null,g.createElement("b",null,e.hotels),g.createElement("small",null,"旅館可購買"))):g.createElement("p",null,"房屋與旅館皆不受銀行數量限制。"))}function L3({game:a,playerId:e,onClose:n,onSelectPlayer:r}){const o=He.useRef(),[c,f]=He.useState("overview"),p=a.players.find(_=>_.id===e)||a.players[0],m=p?ua(a,p.id):[],h=((p==null?void 0:p.skillHand)||[]).map(_=>Ni.find(b=>b.id===_)).filter(Boolean);if(He.useEffect(()=>{var R;f("overview");const _=document.activeElement;(R=o.current)==null||R.focus();const b=N=>{N.key==="Escape"&&n()};return document.addEventListener("keydown",b),()=>{var N;document.removeEventListener("keydown",b),(N=_==null?void 0:_.focus)==null||N.call(_)}},[e]),!p)return null;const v=m.length?m.map(_=>g.createElement("div",{className:"status-property-row",key:_.id},g.createElement("i",{style:{background:_.color}}),g.createElement("span",null,g.createElement("strong",null,_.name),g.createElement("small",null,Ex(a.lots[_.id].level)," · 租金 ",St(Fu(a,_)))))):g.createElement("p",{className:"status-empty"},"目前還沒有持有土地。"),x=p.human?h.length?h.map(_=>g.createElement("div",{className:"status-card-row",key:_.id},g.createElement("span",{className:`skill-card-icon skill-${_.type}`},_.icon),g.createElement("span",null,g.createElement("strong",null,_.name),g.createElement("small",null,_.summary)))):g.createElement("p",{className:"status-empty"},"目前沒有持有技能卡。"):g.createElement("p",{className:"status-empty"},"電腦玩家持有 ",h.length," 張技能卡，不公開卡面。");return g.createElement("div",{className:"player-status-backdrop",onMouseDown:_=>{_.target===_.currentTarget&&n()}},g.createElement("aside",{className:"player-status-drawer",role:"dialog","aria-modal":"true","aria-label":"玩家狀態"},g.createElement("div",{className:"status-drawer-heading"},g.createElement("h2",null,"玩家狀態"),g.createElement("button",{ref:o,className:"icon-button","aria-label":"關閉玩家狀態",onClick:n},g.createElement(Vu,{size:22}))),g.createElement("div",{className:"status-player-selectors",role:"tablist","aria-label":"選擇玩家"},a.players.map(_=>g.createElement("button",{key:_.id,type:"button",role:"tab","aria-selected":_.id===p.id,className:_.id===p.id?"active":"",style:{"--player":Hu(_)},onClick:()=>r(_.id)},g.createElement(ku,{id:_.id,player:_,small:!0}),g.createElement("span",null,_.name)))),g.createElement("section",{className:"status-summary"},g.createElement(ku,{id:p.id,player:p}),g.createElement("div",{className:"status-summary-player"},g.createElement("strong",null,p.name),g.createElement("small",null,p.bankrupt?"已破產":`${m.length} 塊地產`),g.createElement(Sx,{player:p})),g.createElement("div",null,g.createElement("span",null,"現金"),g.createElement("b",null,St(p.cash))),g.createElement("div",null,g.createElement("span",null,"總資產"),g.createElement("b",null,St(pr(a,p.id))))),g.createElement("div",{className:"status-tabs",role:"tablist","aria-label":"玩家資訊分類"},g.createElement("button",{type:"button",role:"tab","aria-selected":c==="overview",className:c==="overview"?"active":"",onClick:()=>f("overview")},"總覽"),g.createElement("button",{type:"button",role:"tab","aria-selected":c==="properties",className:c==="properties"?"active":"",onClick:()=>f("properties")},"土地 ",g.createElement("span",null,m.length)),g.createElement("button",{type:"button",role:"tab","aria-selected":c==="cards",className:c==="cards"?"active":"",onClick:()=>f("cards")},"卡片 ",g.createElement("span",null,p.human?`${h.length} / 3`:`${h.length} 張`))),g.createElement("div",{className:"status-drawer-content"},c==="overview"?g.createElement(g.Fragment,null,g.createElement("section",{className:"status-section"},g.createElement("div",{className:"status-section-heading"},g.createElement("h3",null,g.createElement(pl,{size:17}),"持有土地"),g.createElement("button",{type:"button",onClick:()=>f("properties")},"查看全部 ",g.createElement(wu,{size:14}))),g.createElement("div",{className:"status-property-grid"},v)),g.createElement("section",{className:"status-section"},g.createElement("div",{className:"status-section-heading"},g.createElement("h3",null,g.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),g.createElement("button",{type:"button",onClick:()=>f("cards")},"查看全部 ",g.createElement(wu,{size:14}))),g.createElement("div",{className:"status-card-list"},x))):c==="properties"?g.createElement("section",{className:"status-section"},g.createElement("div",{className:"status-section-heading"},g.createElement("h3",null,g.createElement(pl,{size:17}),"持有土地 ",g.createElement("span",null,m.length))),g.createElement("div",{className:"status-property-list"},v)):g.createElement("section",{className:"status-section"},g.createElement("div",{className:"status-section-heading"},g.createElement("h3",null,g.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),g.createElement("span",null,p.human?`${h.length} / 3`:`${h.length} 張`)),g.createElement("div",{className:"status-card-list"},x))),g.createElement("div",{className:"status-drawer-footer"},g.createElement("button",{type:"button",className:"secondary",onClick:n},"關閉"))))}function O3({card:a,count:e,disabled:n,selected:r,onClick:o}){return g.createElement("button",{type:"button",className:`skill-card-tile skill-${a.type}${r?" selected":""}`,onClick:o,"aria-disabled":n,"aria-pressed":r,"aria-label":`${a.name}：${a.summary}`},g.createElement("span",{className:"skill-card-icon","aria-hidden":"true"},a.icon),g.createElement("span",{className:"skill-card-copy"},g.createElement("strong",null,a.name),g.createElement("small",null,a.summary)),e>1&&g.createElement("b",{className:"skill-card-count"},e))}function I3({onClose:a}){var f;const[e,n]=He.useState((f=Ni[0])==null?void 0:f.id),r=Ni.find(p=>p.id===e)||Ni[0];if(!r)return null;const o=r.timing==="active"?"主動卡 · 自己回合擲骰前使用":"反應卡 · 符合事件時使用",c=r.target==="player"?"目標：玩家":r.target==="land"?"目標：地產":"目標：自己或全體";return g.createElement(cr,{title:"技能卡圖鑑",wide:!0,onClose:a},g.createElement("p",{className:"modal-lead skill-codex-lead"},"收錄目前遊戲中的全部 ",Ni.length," 張技能卡。選擇卡片即可查看完整效果、使用方式與限制。"),g.createElement("div",{className:"skill-codex-layout"},g.createElement("div",{className:"skill-codex-grid",role:"listbox","aria-label":"所有技能卡"},Ni.map(p=>g.createElement("button",{key:p.id,type:"button",role:"option","aria-selected":p.id===r.id,className:`skill-codex-card skill-${p.type}${p.id===r.id?" selected":""}`,onClick:()=>n(p.id)},g.createElement("span",{className:"skill-codex-card-icon","aria-hidden":"true"},p.icon),g.createElement("span",null,g.createElement("strong",null,p.name),g.createElement("small",null,p.timing==="active"?"主動卡":"反應卡"))))),g.createElement("article",{className:`skill-codex-detail skill-${r.type}`,"aria-live":"polite"},g.createElement("div",{className:"skill-codex-detail-heading"},g.createElement("span",{className:"skill-codex-detail-icon","aria-hidden":"true"},r.icon),g.createElement("div",null,g.createElement("h3",null,r.name),g.createElement("p",null,r.summary))),g.createElement("div",{className:"skill-codex-meta"},g.createElement("span",null,o),g.createElement("span",null,c)),g.createElement("section",null,g.createElement("h4",null,"卡片效果"),g.createElement("p",null,r.description)),g.createElement("section",null,g.createElement("h4",null,"使用方式"),g.createElement("p",null,r.usage)),g.createElement("section",null,g.createElement("h4",null,"使用限制"),g.createElement("p",null,r.restriction)),r.note&&g.createElement("section",null,g.createElement("h4",null,"備註"),g.createElement("p",null,r.note)))),g.createElement("button",{className:"primary",onClick:a},"知道了，回到城市 ",g.createElement(ur,{size:18})))}function Ex(a){return a===5?"旅館":a?`${a} 間房屋`:"未開發地產"}function P3(a){return a===5?"旅館":"房屋 "+(a||0)+" / 4"}function z3(a,e,n){if(a.limitBuildings===!1)return n.level===5?"這塊土地已有旅館。":n.level===4?"你剛走到這塊土地，可以升級為旅館。":"你剛走到這塊土地，可以加蓋一間房屋。";if(a.selected!==e.id||a.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(a.buildUsed)return"本次落地已完成建造。";if(n.level===5)return"這塊土地已有旅館。";const r=Ps(a);return n.level===4?r.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":r.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function B3(a,e,n){return n.level===5?"已達最高等級":a.buildUsed&&a.selected===e.id?"本次落地已建造":n.level===4?`升級旅館 · ${St(Ml(e,a))}`:`建造房屋 · ${St(Ml(e,a))}`}function cr({title:a,onClose:e,children:n,wide:r=!1}){const o=He.useRef();return He.useEffect(()=>{var p;const c=document.activeElement;(p=o.current)==null||p.focus();function f(m){if(m.key==="Escape"&&(e==null||e()),m.key==="Tab"){const h=[...o.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!h.length){m.preventDefault();return}m.shiftKey&&document.activeElement===h[0]?(m.preventDefault(),h.at(-1).focus()):!m.shiftKey&&document.activeElement===h.at(-1)&&(m.preventDefault(),h[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),g.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},g.createElement("section",{ref:o,tabIndex:-1,className:"modal "+(r?"wide":""),role:"dialog","aria-modal":"true","aria-label":a},g.createElement("div",{className:"modal-heading"},g.createElement("h2",null,a),e&&g.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},g.createElement(Vu,{size:20}))),n))}function F3({setup:a,setSetup:e,newGameMaxRounds:n,onStart:r,onClose:o}){return g.createElement(cr,{title:"開啟一段全新的城市故事",onClose:o},g.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),g.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),g.createElement(ym,{className:"setup-version"}),g.createElement("label",{className:"setup-count"},"玩家人數 ",g.createElement("select",{value:a.count,onChange:c=>e(f=>({...f,count:Number(c.target.value)}))},[2,3,4].map(c=>g.createElement("option",{key:c,value:c},c," 人")))),g.createElement("label",{className:"setup-count"},"最多回合 ",g.createElement("select",{"aria-label":"最多回合",value:a.roundOption,onChange:c=>e(f=>({...f,roundOption:c.target.value}))},g.createElement("option",{value:"40"},"40 回合"),g.createElement("option",{value:"80"},"80 回合"),g.createElement("option",{value:"custom"},"自訂"),g.createElement("option",{value:"unlimited"},"無限制"))),g.createElement("label",{className:"setup-count"},"初始通膨率 ",g.createElement("select",{"aria-label":"初始通膨率",value:a.inflationRate,onChange:c=>e(f=>({...f,inflationRate:Number(c.target.value)}))},Array.from({length:ux+1},(c,f)=>g.createElement("option",{key:f,value:f},f,"%")))),g.createElement("label",{className:"setup-count"},"建築數量限制 ",g.createElement("select",{"aria-label":"建築數量限制",value:a.limitBuildings?"limited":"unlimited",onChange:c=>e(f=>({...f,limitBuildings:c.target.value==="limited"}))},g.createElement("option",{value:"limited"},"限制（房屋 32、旅館 12）"),g.createElement("option",{value:"unlimited"},"不限數量"))),a.roundOption==="custom"&&g.createElement("label",{className:"round-limit-custom"},"自訂回合數",g.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:a.customRounds,onChange:c=>e(f=>({...f,customRounds:c.target.value}))})),g.createElement("div",{className:"player-setup"},a.players.slice(0,a.count).map((c,f)=>g.createElement("div",{className:"player-setup-row",key:f},g.createElement("input",{"aria-label":`玩家 ${f+1} 名稱`,value:c.name,onChange:p=>e(m=>({...m,players:m.players.map((h,v)=>v===f?{...h,name:p.target.value}:h)}))}),g.createElement("input",{"aria-label":`玩家 ${f+1} 顏色`,type:"color",value:c.color,onChange:p=>e(m=>({...m,players:m.players.map((h,v)=>v===f?{...h,color:p.target.value}:h)}))}),g.createElement("select",{value:c.human?"human":"ai",onChange:p=>e(m=>({...m,players:m.players.map((h,v)=>v===f?{...h,human:p.target.value==="human"}:h)}))},g.createElement("option",{value:"human"},"真人"),g.createElement("option",{value:"ai"},"電腦"))))),g.createElement("button",{className:"primary",disabled:a.roundOption==="custom"&&!n,onClick:r},g.createElement(Yp,{size:18}),"開始新遊戲"),g.createElement("button",{className:"secondary full",onClick:o},"返回"))}function H3({hasContinue:a,onNewGame:e,onContinue:n}){return g.createElement("main",{className:"home-screen"},g.createElement("div",{className:"home-topline"},g.createElement("span",{className:"live-dot"}),"城市大亨 ",g.createElement("span",null,"/")," 一座城市，從第一步開始"),g.createElement("section",{className:"home-content"},g.createElement("div",{className:"home-copy"},g.createElement("div",{className:"home-brand-mark"},g.createElement(Vh,{size:29,strokeWidth:1.7}),g.createElement("span",null,"CITY TYCOON")),g.createElement("h1",null,"城市大亨"),g.createElement("p",null,"玩一場，擁有一座城。"),g.createElement("div",{className:"home-rule"}),g.createElement("small",null,"買下街區、管理資產，讓每一次擲骰都成為城市故事。")),g.createElement("div",{className:"home-city-scene","aria-label":"微縮城市棋盤意象"},g.createElement("img",{className:"home-city-board-image",src:"./home-city-board.png",alt:"立體微縮城市棋盤與彩色棋子"})),g.createElement("aside",{className:"home-actions"},g.createElement("div",{className:"home-actions-heading"},g.createElement("span",null,"準備好出發了嗎？"),g.createElement("small",null,"你的城市，等你來決定下一步。")),g.createElement("button",{className:"home-action primary",onClick:e},g.createElement(Yp,{size:20}),"開始新遊戲",g.createElement(ur,{size:17})),g.createElement("button",{className:"home-action secondary",disabled:!a,onClick:n},g.createElement(Ay,{size:19}),"繼續進度",g.createElement(ur,{size:17})),g.createElement("p",{className:"home-save-status"},g.createElement("span",{className:a?"is-ready":""}),a?"已找到這個瀏覽器的自動存檔":"目前沒有可繼續的進度"))),g.createElement("footer",{className:"home-footer"},g.createElement("span",null,"自動儲存 · 僅此瀏覽器可用"),g.createElement(ym,{className:"home-version"}),g.createElement("span",null,"一起，把城市變成你的故事。")))}function ym({className:a=""}){return g.createElement("span",{className:`version-meta ${a}`.trim()},G3," · 更新日期 ",V3)}const Xp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Xp.splice(0,Xp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function k3(a){if(a.roundOption==="unlimited")return null;if(a.roundOption==="custom"){const e=Number(a.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(a.roundOption)}const Ey="city-tycoon:activity-visible:v1",Mx="city-tycoon:glass-opacity:v1",bx="city-tycoon:emotion-animation:v1",Tx="city-tycoon:skill-animation:v1",G3="v1.6.1",V3="2026-09-20",kh=72,Ax=a=>Math.min(95,Math.max(5,Number(a)));function X3(){try{const a=localStorage.getItem(Mx);if(a===null)return kh;const e=Number(a);return Number.isFinite(e)?Ax(e):kh}catch{return kh}}function W3(){try{return localStorage.getItem(bx)!=="false"}catch{return!0}}function Y3(){try{return localStorage.getItem(Tx)!=="false"}catch{return!0}}function My({entries:a}){return a.map((e,n)=>g.createElement("div",{className:"activity-item",key:n},g.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?g.createElement(pl,{size:16}):e.kind==="dice"?g.createElement(Ty,{size:16}):e.kind==="tax"?g.createElement(VE,{size:16}):g.createElement(Gh,{size:16})),g.createElement("p",null,e.text,g.createElement("small",null,n===0?"剛剛":"本局紀錄"))))}function q3(){var Qa,ya,vi,vn,An,Xn;const[a,e]=He.useState("home"),[n,r]=He.useState(()=>{try{return vy()}catch{return null}}),[o,c]=He.useState(()=>{try{return localStorage.getItem(Ey)!=="false"}catch{return!0}}),[f,p]=He.useState(X3),[m,h]=He.useState(W3),[v,x]=He.useState(Y3),[_,b]=He.useState(!1),[R,N]=He.useState(()=>{var B;return typeof window<"u"&&((B=window.matchMedia)==null?void 0:B.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[T,E]=He.useState([]),[U,L]=He.useState(null),[M,I]=He.useReducer(v3,void 0,px),P=He.useRef(new Map),F=He.useRef(0),A=He.useRef(""),O=He.useRef(!1),Y=T[0]||null,k=Y&&m&&!R?Object.fromEntries(Y.players.map(B=>[B.playerId,B.mood])):{},$=He.useRef();He.useEffect(()=>{try{localStorage.setItem(Ey,String(o))}catch{}},[o]),He.useEffect(()=>{try{localStorage.setItem(bx,String(m))}catch{}},[m]),He.useEffect(()=>{try{localStorage.setItem(Tx,String(v))}catch{}},[v]),He.useEffect(()=>{var tt,Ct;const B=(tt=window.matchMedia)==null?void 0:tt.call(window,"(prefers-reduced-motion: reduce)");if(!B)return;const Le=Gt=>N(Gt.matches);return(Ct=B.addEventListener)==null||Ct.call(B,"change",Le),()=>{var Gt;return(Gt=B.removeEventListener)==null?void 0:Gt.call(B,"change",Le)}},[]),He.useEffect(()=>{const B=(M.emotionHistory||M.emotionEvents||[]).filter(tt=>tt.id>F.current);if(!B.length){O.current=!1;return}F.current=Math.max(F.current,...B.map(tt=>tt.id));const Le=B.filter(tt=>{var Ct;return!(O.current&&((Ct=tt.category)!=null&&Ct.startsWith("skill")))});Le.length&&E(tt=>[...tt,...Le].sort((Ct,Gt)=>Gt.priority-Ct.priority||Ct.id-Gt.id).slice(0,3)),O.current=!1},[M.emotionEvents]),He.useEffect(()=>{if(!Y||U||M.stage==="moving"&&Y.priority<90)return;const B=Y.id,Le=setTimeout(()=>E(tt=>{var Ct;return((Ct=tt[0])==null?void 0:Ct.id)===B?tt.slice(1):tt.filter(Gt=>Gt.id!==B)}),2400);return()=>clearTimeout(Le)},[Y==null?void 0:Y.id,M.stage,U]),He.useEffect(()=>{const B=M.log[0];if((B==null?void 0:B.kind)!=="skill"){A.current=(B==null?void 0:B.text)||"";return}if(B.text===A.current||(A.current=B.text,!v||R))return;b(!0);const Le=setTimeout(()=>b(!1),720);return()=>clearTimeout(Le)},[M.log,v,R]);const ge=B=>{const Le=Ax(Number(B.currentTarget.value));p(Le);try{localStorage.setItem(Mx,String(Le))}catch{}},[me,ie]=He.useState(null),[H,W]=He.useState("players"),[le,Se]=He.useState(null),[De,z]=He.useState(null),[K,Me]=He.useState(null),[Oe,ze]=He.useState(null),[ae,Re]=He.useState(!1),[Ce,Be]=He.useState(!1),[at,et]=He.useState(""),[Wt,ut]=He.useState(!1),[pt,dt]=He.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:mm,limitBuildings:!0,players:[{name:"你",color:Kn[0],human:!0},{name:"艾米",color:Kn[1],human:!1},{name:"小傑",color:Kn[2],human:!1},{name:"喵喵",color:Kn[3],human:!1}]}),ht=He.useRef(),Pt=He.useRef(),Ze=M.players[M.turn],_t=!!(Ze!=null&&Ze.human)&&!(Ze!=null&&Ze.bankrupt),sn=_t&&["ready","end"].includes(M.stage),zt=()=>{I({type:"ROLL",dice:Array.from({length:Ze.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})},cn=()=>{if(!Ze||Ze.skillUsedThisTurn||M.pendingSkill||M.skillOverflow)return null;const B=M.players.filter(yn=>yn.id!==Ze.id&&!yn.bankrupt),Le=B[0],tt=ua(M,Ze.id),Ct=Xt.find(yn=>{var Sn,na;return yn.type==="property"&&((Sn=M.lots[yn.id])==null?void 0:Sn.owner)!==void 0&&M.lots[yn.id].owner!==Ze.id&&!((na=M.players[M.lots[yn.id].owner])!=null&&na.bankrupt)}),Gt=Ze.skillHand,hn=yn=>Gt.includes(yn);if(Ze.cash<7e3&&hn("subsidy"))return{type:"USE_SKILL_CARD",cardId:"subsidy"};if(Ze.cash<9e3&&hn("rent-shield"))return{type:"USE_SKILL_CARD",cardId:"rent-shield"};if(Ze.jail&&hn("get-out"))return{type:"USE_SKILL_CARD",cardId:"get-out"};if(B.length&&hn("slow"))return{type:"USE_SKILL_CARD",cardId:"slow",targetId:Le.id};if(B.length&&hn("trap"))return{type:"USE_SKILL_CARD",cardId:"trap",targetId:Le.id};if(B.length&&hn("teleport")){const yn=Hh.find(Sn=>Sn!==Le.pos&&Xt[Sn].type==="property")??0;return{type:"USE_SKILL_CARD",cardId:"teleport",targetId:Le.id,targetPosition:yn}}return B.length&&hn("position-swap")?{type:"USE_SKILL_CARD",cardId:"position-swap",targetId:Le.id}:tt.length&&hn("rent-double")?{type:"USE_SKILL_CARD",cardId:"rent-double"}:tt.length&&Ct&&hn("land-swap")?{type:"USE_SKILL_CARD",cardId:"land-swap",ownLotId:tt[0].id,targetLotId:Ct.id}:hn("birthday")&&B.length?{type:"USE_SKILL_CARD",cardId:"birthday"}:null};He.useEffect(()=>{try{zo()}catch{ut(!0)}},[]),He.useEffect(()=>{if(!(a!=="game"||M.stage==="moving"))try{Fp(M),ut(!1)}catch{ut(!0)}},[M,a]),He.useEffect(()=>{if(M.stage==="moving"&&U!=="saves"){const B=setTimeout(()=>I({type:"STEP"}),330);return()=>clearTimeout(B)}},[M,U]),He.useEffect(()=>{const B=M.selected,Le=B===null?null:Xt[B],tt=B===null?null:M.lots[B],Ct=_t&&M.stage==="decision"&&(Le==null?void 0:Le.type)==="property"&&!tt,Gt=_t&&M.stage==="end"&&M.buildAvailable&&(tt==null?void 0:tt.owner)===M.turn;(Ct||Gt)&&(ie(B),L("property"))},[M,_t]),He.useEffect(()=>{if(a!=="game"||_t||M.stage==="finished"||M.pendingSkill||Oe||U==="new"||U==="rules"||U==="saves")return;const B=setTimeout(()=>{if(M.stage==="ready"){const Le=cn();Le?It(Le):zt()}else if(M.stage==="decision")I({type:Ze.cash>hl(M,Xt[Ze.pos])+Qn(M,1800)?"BUY":"SKIP"});else if(M.stage==="end"){const Le=ua(M,M.turn).find(tt=>Hp(M,tt.id)&&Ze.cash>Ml(tt,M)+Qn(M,2500));I(Le?{type:"BUILD",id:Le.id}:{type:"NEXT"})}},M.stage==="decision"?1300:1100);return()=>clearTimeout(B)},[M,_t,U,a,Oe]),He.useEffect(()=>{var Gt;const B=M.skillOverflow;if(!B)return;const Le=M.players[B.playerId];if(Le!=null&&Le.human||!((Gt=Le==null?void 0:Le.skillHand)!=null&&Gt.length))return;const tt=Le.skillHand.at(-1),Ct=setTimeout(()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:tt}),350);return()=>clearTimeout(Ct)},[(Qa=M.skillOverflow)==null?void 0:Qa.playerId,M.players,M.skillOverflow]),He.useEffect(()=>{const B=M.pendingSkill;if(!B)return;const Le=M.players[B.targetId];if(Le!=null&&Le.human)return;const tt=Le!=null&&Le.skillHand.includes("counter")?"counter":Le!=null&&Le.skillHand.includes("reflect")?"reflect":"pass",Ct=setTimeout(()=>I({type:"RESPOND_SKILL",playerId:B.targetId,response:tt}),520);return()=>clearTimeout(Ct)},[(ya=M.pendingSkill)==null?void 0:ya.sourceId,(vi=M.pendingSkill)==null?void 0:vi.targetId,(vn=M.pendingSkill)==null?void 0:vn.cardId,M.players]),He.useEffect(()=>{if(!(!ae||!Pt.current))try{const B=Pt.current,Le=B.createOscillator(),tt=B.createGain();Le.connect(tt),tt.connect(B.destination),Le.type="sine",Le.frequency.setValueAtTime(M.stage==="moving"?380:620,B.currentTime),tt.gain.setValueAtTime(.035,B.currentTime),tt.gain.exponentialRampToValueAtTime(.001,B.currentTime+.13),Le.start(),Le.stop(B.currentTime+.15)}catch{}},[M.remaining,M.stage,ae]);const Q=()=>{if(!ae){const B=window.AudioContext||window.webkitAudioContext;B&&(Pt.current||(Pt.current=new B),Pt.current.resume())}Re(!ae)},Ot=B=>{ie(B),L("property")},ve=k3(pt),C=()=>L("new"),y=()=>{L(null);try{r(vy())}catch{r(null)}e("home")},X=()=>{var B;pt.roundOption==="custom"&&!ve||(E([]),F.current=0,I({type:"NEW",config:{...pt,maxRounds:ve,inflationRate:Number(pt.inflationRate)}}),e("game"),L(null),Se(null),W("players"),(B=ht.current)==null||B.reset(),Be(!1))},q=()=>{n&&(E([]),F.current=0,I({type:"LOAD",game:n}),e("game"),L(null),ie(null),Se(null),W("players"))},J=U==="new"?g.createElement(F3,{setup:pt,setSetup:dt,newGameMaxRounds:ve,onStart:X,onClose:()=>L(null)}):null;if(a==="home")return g.createElement("div",{className:"app-shell home-shell"},g.createElement(H3,{hasContinue:!!n,onNewGame:C,onContinue:q}),J);const re=me!==null?Xt[me]:null,de=re?M.lots[re.id]:null,ee=Xt[Ze.pos],se=!!re&&re.type==="property"&&!de&&M.stage==="decision"&&_t&&ee.id===re.id,_e=((Ze==null?void 0:Ze.skillHand)||[]).map(B=>Ni.find(Le=>Le.id===B)).filter(Boolean),Ne=_e.reduce((B,Le)=>({...B,[Le.id]:(B[Le.id]||0)+1}),{}),Ie=_e.filter(B=>B.id!=="redraw"),we=M.players.filter(B=>B.id!==(Ze==null?void 0:Ze.id)&&!B.bankrupt),Ye=Ze&&!Ze.bankrupt?[Ze,...we]:we,qe=ua(M,M.turn),st=Xt.filter(B=>{var Le;return B.type==="property"&&M.lots[B.id]&&M.lots[B.id].owner!==M.turn&&!((Le=M.players[M.lots[B.id].owner])!=null&&Le.bankrupt)}),G=Ni.find(B=>B.id===De)||null,Ue=M.skillOverflow?M.players[M.skillOverflow.playerId]:null,xe=M.pendingSkill?M.players[M.pendingSkill.targetId]:null,Pe=M.pendingSkill?M.players[M.pendingSkill.sourceId]:null,ke=_t&&M.stage==="ready"&&!M.skillOverflow&&!M.pendingSkill&&!M.skillUsedThisTurn&&!Oe,Ae=B=>!ke||B.timing!=="active"||!kp.has(B.id)||B.id==="get-out"&&!Ze.jail,$e=B=>{var Le;return!(Ue!=null&&Ue.human)||((Le=M.skillOverflow)==null?void 0:Le.playerId)!==M.turn||M.pendingSkill||Oe||Ze.skillUsedThisTurn||B.timing!=="active"||!kp.has(B.id)||B.id==="get-out"&&!Ze.jail||B.target==="player"&&B.id!=="slow"&&!we.length||B.target==="land"&&(!qe.length||!st.length)},We=B=>(B==null?void 0:B.id)==="slow"?Ye:we,rn=B=>{O.current=!0,I({type:"USE_SKILL_CARD",...B}),ze(null)},It=B=>{var Ct,Gt;const Le=Ni.find(hn=>hn.id===B.cardId);if(!Le)return;if(!v||R){rn(B);return}let tt=B.targetId;tt===void 0&&B.targetLotId!==void 0&&(tt=(Ct=M.lots[B.targetLotId])==null?void 0:Ct.owner),tt===void 0&&Le.target==="player"&&(tt=(Gt=we[0])==null?void 0:Gt.id),ze({id:`${Date.now()}-${B.cardId}`,action:B,card:Le,sourceId:M.turn,targetId:tt??null})},jn=(B,Le=!1)=>{var Ct,Gt,hn;if(Le?$e(B):Ae(B))return;const tt=Le?{overflowUse:!0}:{};if(z(B.id),B.id==="redraw"){Me({cardId:B.id,discardCardId:((Ct=Ie[0])==null?void 0:Ct.id)??null,...tt});return}if(B.target==="player"){const yn=We(B),Sn=yn[0];Me({cardId:B.id,targetId:(Sn==null?void 0:Sn.id)??"",...B.id==="teleport"?{targetPosition:(Sn==null?void 0:Sn.pos)??0}:{},...tt});return}if(B.target==="land"){Me({cardId:B.id,ownLotId:((Gt=qe[0])==null?void 0:Gt.id)??"",targetLotId:((hn=st[0])==null?void 0:hn.id)??"",...tt});return}It({cardId:B.id,...tt}),z(null)},ai=B=>{z(B.id),Me(null)},Bs=()=>{G&&jn(G)},Ka=()=>{if(!K)return;const B={...K};Me(null),z(null),It(B)};return g.createElement("div",{className:"app-shell"},g.createElement("header",{className:"header"},g.createElement("button",{className:"brand",onClick:y,"aria-label":"城市大亨首頁"},g.createElement("span",{className:"brand-icon"},g.createElement(Vh,{size:33,strokeWidth:1.8})),g.createElement("span",{className:"brand-copy"},g.createElement("strong",null,"城市大亨"),g.createElement("small",null,"CITY TYCOON"),g.createElement(ym,{className:"brand-version"}))),g.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),g.createElement("nav",null,g.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>L("rules")},g.createElement(ah,{size:18}),g.createElement("span",null,"遊戲規則")),g.createElement("button",{className:"text-button","aria-label":"技能卡圖鑑",onClick:()=>L("skill-codex")},g.createElement(ah,{size:18}),g.createElement("span",null,"技能卡圖鑑")),g.createElement("span",{className:"nav-divider"}),g.createElement("button",{className:"outline-button",onClick:C},g.createElement(Yp,{size:18}),g.createElement("span",null,"新遊戲")))),g.createElement("button",{className:"save-launch secondary",onClick:()=>L("saves")},"儲存／讀取"),U==="saves"&&g.createElement(cr,{title:"存檔管理",wide:!0,onClose:()=>L(null)},g.createElement(x3,{game:M,onLoad:B=>{E([]),F.current=0,I({type:"LOAD",game:B});try{Fp(B),ut(!1)}catch{ut(!0)}ie(null),W("players"),L(null)}})),g.createElement("main",{className:"game-layout"},g.createElement("section",{className:"world","aria-label":"遊戲棋盤"},g.createElement(y3,{game:M,emotionAnchorRefs:P,emotionMoods:k,onSelect:Ot,onError:et,ref:ht},g.createElement(T3,{event:Y,players:M.players,anchorRefs:P,animated:m&&!R,paused:M.stage==="moving"||U!==null}),g.createElement(D3,{sequence:Oe,players:M.players,animated:v&&!R,onComplete:()=>Oe&&rn(Oe.action)})),g.createElement("div",{className:"world-heading"},g.createElement("span",{className:"live-dot"}),"經典城市 ",g.createElement("span",{className:"world-heading-divider"},"/"),g.createElement("span",null,M.players.length," 人對局"),g.createElement("button",{ref:$,className:"activity-toggle","aria-expanded":o,"aria-controls":"glass-city-activity",onClick:()=>c(B=>!B)},g.createElement(ah,{size:16}),"城市動態",g.createElement("span",null,o?"收起":"展開"))),g.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-f/100},"aria-labelledby":"glass-activity-title",hidden:!o},g.createElement("div",{className:"glass-activity-heading"},g.createElement("h2",{id:"glass-activity-title"},"城市動態"),g.createElement("label",{className:"glass-opacity-control"},g.createElement("span",null,"透明度"),g.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:f,"aria-label":"玻璃面板透明度",onChange:B=>p(Number(B.target.value)),onPointerUp:ge,onBlur:ge}),g.createElement("output",null,f,"%")),g.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var B;c(!1),(B=$.current)==null||B.focus()}},g.createElement(Vu,{size:20}))),g.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},g.createElement(My,{entries:M.log})),g.createElement("button",{className:"glass-activity-all",onClick:()=>L("log")},"全部紀錄 ",g.createElement(Gh,{size:16}))),g.createElement("div",{className:"world-top-right"},g.createElement("span",{className:"saved"},g.createElement(kE,{size:13}),Wt?"此瀏覽器無法存檔":"自動儲存"),g.createElement(M3,null),g.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":m,onClick:()=>h(B=>!B)},g.createElement("span",{className:"emotion-toggle-indicator"}),m?"情緒動畫 開":"情緒動畫 關"),g.createElement("button",{className:"emotion-animation-toggle skill-animation-toggle",type:"button","aria-pressed":v,onClick:()=>x(B=>!B)},g.createElement("span",{className:"emotion-toggle-indicator"}),v?"技能動畫 開":"技能動畫 關"),g.createElement("button",{className:"icon-button sound","aria-label":ae?"關閉音效":"開啟音效",onClick:Q},ae?g.createElement($E,{size:18}):g.createElement(jE,{size:18}))),at&&g.createElement("div",{className:"webgl-error"},at),g.createElement("div",{className:"board-foot"},g.createElement("div",{className:"camera-toolbar"},g.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:Ce?"selected":"",onClick:()=>{var B;(B=ht.current)==null||B.rotate(),Be(!Ce)}},g.createElement(ZE,{size:20}),g.createElement("span",null,"旋轉視角")),g.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var B;(B=ht.current)==null||B.reset(),Be(!1)}},g.createElement(Ay,{size:18})),g.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var B;return(B=ht.current)==null?void 0:B.top()}},g.createElement(KE,{size:18})),g.createElement("i",null),g.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var B;return(B=ht.current)==null?void 0:B.zoom(1.15)}},g.createElement(eM,{size:20})),g.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var B;return(B=ht.current)==null?void 0:B.zoom(.87)}},g.createElement(JE,{size:20}))),g.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),g.createElement(A3,{event:Y,players:M.players,animated:m&&!R,paused:M.stage==="moving"||U!==null}),g.createElement("aside",{className:"sidebar"},g.createElement("div",{className:"round-heading"},g.createElement("div",null,g.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),g.createElement("h1",null,"回合 ",g.createElement("b",null,String(M.round).padStart(2,"0")),g.createElement("span",null,"/ ",M.maxRounds===null?"∞":M.maxRounds)),g.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${M.inflationRate}%，物價指數 ${M.priceIndex.toFixed(2)} 倍`},g.createElement("span",{className:"inflation-rate-badge"},g.createElement(QE,{size:14,"aria-hidden":"true"}),"通膨率 ",g.createElement("b",null,M.inflationRate,"%")),g.createElement("span",{className:"inflation-index"},"物價指數 ",g.createElement("b",null,M.priceIndex.toFixed(2),"×")))),g.createElement("span",{className:"round-icon"},g.createElement(GE,{size:21}))),g.createElement("div",{className:"tabs"},g.createElement("button",{className:H==="players"?"active":"",onClick:()=>W("players")},"玩家概況"),g.createElement("button",{className:H==="properties"?"active":"",onClick:()=>W("properties")},"我的地產 ",g.createElement("span",null,ua(M,0).length))),g.createElement(U3,{game:M}),g.createElement("div",{className:"overview"},H==="players"?M.players.map(B=>g.createElement("div",{key:B.id,className:"player-row "+(M.turn===B.id?"current ":"")+(B.bankrupt?"bankrupt":""),style:{"--player":Hu(B)}},g.createElement(ku,{id:B.id,player:B}),g.createElement("div",{className:"player-info"},g.createElement("strong",null,B.name,B.id===0?g.createElement("em",null,"玩家"):g.createElement("span",{className:"ai"},"電腦")),g.createElement("small",null,B.bankrupt?"已破產":`${ua(M,B.id).length} 塊地產${B.jail?" · 監獄中":""}`),g.createElement(Sx,{player:B})),g.createElement("div",{className:"player-cash"},g.createElement("b",null,St(B.cash)),M.turn===B.id&&g.createElement("small",null,g.createElement("span",null)," 目前回合")),g.createElement("button",{type:"button",className:"player-status-trigger","aria-label":`查看${B.name}的玩家狀態`,onClick:()=>Se(B.id)},g.createElement(wu,{size:16})))):g.createElement("div",{className:"property-list"},ua(M,0).length?ua(M,0).map(B=>g.createElement("button",{key:B.id,onClick:()=>Ot(B.id)},g.createElement("i",{style:{background:B.color}}),g.createElement("span",null,g.createElement("strong",null,B.name),g.createElement("small",null,Ex(M.lots[B.id].level)," · 租金 ",St(Fu(M,B)))),g.createElement(wu,{size:16}))):g.createElement("div",{className:"empty-properties"},g.createElement(pl,{size:28}),g.createElement("strong",null,"你的第一塊地產，正在等你"),g.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),g.createElement("section",{className:"turn-panel","aria-live":"polite"},g.createElement("div",{className:"turn-title"},g.createElement("span",{className:"live-dot",style:{background:Hu(Ze)}}),g.createElement("h2",null,M.stage==="finished"?"本局已結束":_t?"你的回合":`${Ze.name}的回合`),g.createElement("span",null,M.stage==="moving"?"移動中":M.stage==="decision"?"購地時刻":_t?"準備出發":"電腦玩家")),g.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(B=>g.createElement("button",{key:B,"aria-pressed":(Ze.diceCount??2)===B,disabled:!_t||M.stage!=="ready"||!!Ze.jail||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"SET_DICE_COUNT",count:B})},B," 顆骰子"))),g.createElement("div",{className:"dice-row"},(M.stage==="ready"?Array.from({length:Ze.diceCount??2},()=>1):M.dice).map((B,Le)=>g.createElement(N3,{key:Le,value:B,rolling:M.stage==="moving"}))),g.createElement("section",{className:`skill-panel${_?" skill-pulse":""}`,"aria-label":"技能卡手牌"},g.createElement("div",{className:"skill-panel-heading"},g.createElement("h3",null,g.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),g.createElement("span",null,Ze.human?`${_e.length} / 3`:`${_e.length} 張`)),Ze.human?_e.length?g.createElement("div",{className:"skill-card-list"},_e.map(B=>g.createElement(O3,{key:B.id,card:B,count:Ne[B.id],disabled:Ae(B),selected:(G==null?void 0:G.id)===B.id,onClick:()=>ai(B)}))):g.createElement("p",{className:"skill-empty"},"抵達機會格，或經過／抵達城市基金格，有機會取得技能卡。"):g.createElement("p",{className:"skill-ai-count"},"電腦玩家持有 ",_e.length," 張技能卡"),G&&!K&&g.createElement("div",{className:"skill-detail"},g.createElement("div",{className:"skill-detail-heading"},g.createElement("span",{className:"skill-detail-icon"},G.icon),g.createElement("div",null,g.createElement("strong",null,G.name),g.createElement("span",null,G.summary),g.createElement("small",null,G.timing==="active"?"主動卡 · 可在自己回合使用":"反應卡 · 需等待符合條件的事件"))),g.createElement("div",{className:"skill-detail-actions"},g.createElement("button",{type:"button",className:"secondary",onClick:()=>z(null)},"關閉說明"),g.createElement("button",{type:"button",className:"primary",disabled:Ae(G),onClick:Bs},"使用"))),G&&K&&G.id!=="redraw"&&g.createElement("div",{className:"skill-target-picker"},g.createElement("div",null,g.createElement("strong",null,G.name),g.createElement("span",null,G.summary)),G.target==="player"&&g.createElement("label",null,"選擇目標",g.createElement("select",{value:K.targetId,onChange:B=>Me(Le=>({...Le,targetId:Number(B.target.value)}))},We(G).map(B=>g.createElement("option",{key:B.id,value:B.id},B.name,B.id===Ze.id?" · 自己":"",B.jail?" · 監獄中":"")))),G.id==="teleport"&&g.createElement("label",null,"選擇合法位置",g.createElement("select",{value:K.targetPosition,onChange:B=>Me(Le=>({...Le,targetPosition:Number(B.target.value)}))},Hh.map(B=>g.createElement("option",{key:B,value:B},Xt[B].name,Xt[B].type==="property"?" · 地產":"")))),G.target==="land"&&g.createElement("div",{className:"skill-land-pickers"},g.createElement("label",null,"你的土地",g.createElement("select",{value:K.ownLotId,onChange:B=>Me(Le=>({...Le,ownLotId:Number(B.target.value)}))},qe.map(B=>g.createElement("option",{key:B.id,value:B.id},B.name)))),g.createElement("label",null,"交換土地",g.createElement("select",{value:K.targetLotId,onChange:B=>Me(Le=>({...Le,targetLotId:Number(B.target.value)}))},st.map(B=>{var Le;return g.createElement("option",{key:B.id,value:B.id},B.name," · ",(Le=M.players[M.lots[B.id].owner])==null?void 0:Le.name)})))),g.createElement("div",{className:"skill-target-actions"},g.createElement("button",{type:"button",className:"secondary",onClick:()=>{Me(null),z(null)}},"取消"),g.createElement("button",{type:"button",className:"primary",disabled:G.id==="teleport"?!K.targetId&&K.targetId!==0||!Hh.includes(K.targetPosition):G.target==="player"?!K.targetId&&K.targetId!==0:!K.ownLotId||!K.targetLotId,onClick:Ka},"確認使用"))),G&&K&&G.id==="redraw"&&g.createElement("div",{className:"skill-target-picker skill-redraw-picker"},g.createElement("div",null,g.createElement("strong",null,G.name),g.createElement("span",null,G.summary)),Ie.length>0?g.createElement(g.Fragment,null,g.createElement("p",{className:"skill-redraw-help"},"選擇一張其他手牌放棄，然後抽取新的技能卡。"),g.createElement("div",{className:"skill-redraw-options"},Ie.map((B,Le)=>g.createElement("button",{key:`${B.id}-${Le}`,type:"button",className:K.discardCardId===B.id?"selected":"",onClick:()=>Me(tt=>({...tt,discardCardId:B.id}))},g.createElement("span",{className:"skill-card-icon"},B.icon),g.createElement("span",null,B.name))))):g.createElement("p",{className:"skill-redraw-help"},"目前沒有其他手牌，將直接消耗本卡並抽取新的技能卡。"),g.createElement("div",{className:"skill-target-actions"},g.createElement("button",{type:"button",className:"secondary",onClick:()=>{Me(null),z(null)}},"取消"),g.createElement("button",{type:"button",className:"primary",disabled:Ie.length>0&&!K.discardCardId,onClick:Ka},"確認使用")))),(xe==null?void 0:xe.human)&&g.createElement("section",{className:"skill-reaction-prompt","aria-live":"assertive"},g.createElement("strong",null,Pe==null?void 0:Pe.name,"正在對你使用",((An=Ni.find(B=>B.id===M.pendingSkill.cardId))==null?void 0:An.name)||"技能卡"),g.createElement("span",null,"效果尚未結算，請選擇是否回應。"),g.createElement("div",null,g.createElement("button",{type:"button",disabled:!xe.skillHand.includes("counter"),onClick:()=>I({type:"RESPOND_SKILL",playerId:xe.id,response:"counter"})},"使用反制卡"),g.createElement("button",{type:"button",disabled:!xe.skillHand.includes("reflect"),onClick:()=>I({type:"RESPOND_SKILL",playerId:xe.id,response:"reflect"})},"使用反彈卡"),g.createElement("button",{type:"button",className:"secondary",onClick:()=>I({type:"RESPOND_SKILL",playerId:xe.id,response:"pass"})},"不回應"))),(Ue==null?void 0:Ue.human)&&g.createElement("section",{className:"skill-overflow","aria-live":"polite"},g.createElement("strong",null,"手牌已達上限"),g.createElement("span",null,"剛抽到第 4 張技能卡，請選擇立即使用或放棄其中一張。"),g.createElement("div",{className:"skill-overflow-list"},(Ue.skillHand||[]).map((B,Le)=>{const tt=Ni.find(Ct=>Ct.id===B);return tt?g.createElement("div",{className:"skill-overflow-card",key:`${B}-${Le}`},g.createElement("span",{className:"skill-overflow-card-icon"},tt.icon),g.createElement("strong",null,tt.name),g.createElement("button",{type:"button",disabled:$e(tt),onClick:()=>jn(tt,!0)},"使用"),g.createElement("button",{type:"button",onClick:()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:B})},"放棄")):null}))),M.stage==="finished"?g.createElement("button",{className:"primary",onClick:()=>L("result")},g.createElement(fv,{size:19}),"查看結算"):_t&&M.stage==="decision"?g.createElement("div",{className:"buy-actions"},g.createElement("div",{className:"buy-summary"},g.createElement("strong",null,ee.name),g.createElement("b",null,St(hl(M,ee)))),g.createElement("button",{className:"primary",disabled:!!Ue||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"BUY"})},g.createElement(pl,{size:18}),"購買地產"),g.createElement("button",{className:"skip-button",disabled:!!Ue||!!M.pendingSkill||!!Oe,onClick:()=>I({type:"SKIP"})},"暫不購買，保留現金 ",g.createElement(ur,{size:14}))):g.createElement("button",{className:"primary",disabled:!_t||M.stage==="moving"||!!K||!!Ue||!!M.pendingSkill||!!Oe,onClick:()=>M.stage==="end"?I({type:"NEXT"}):zt()},M.stage==="moving"?g.createElement(g.Fragment,null,"前進中 · 還有 ",M.remaining," 格"):_t?M.stage==="end"?g.createElement(g.Fragment,null,"結束回合 ",g.createElement(ur,{size:19})):g.createElement(g.Fragment,null,g.createElement(Ty,{size:21}),"擲骰子"):g.createElement(g.Fragment,null,"電腦思考中",g.createElement("span",{className:"thinking"},"…"))),g.createElement("p",{className:"turn-hint"},M.stage==="ready"?_t?"好運從這一步開始。":"下一段城市冒險，即將展開。":M.notice),M.event&&g.createElement("div",{className:"event-note"},g.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),g.createElement("div",null,g.createElement("strong",null,M.event.title),g.createElement("span",null,M.event.kind==="inflation"?M.event.inflationDelta===0?`通膨率維持 ${M.inflationRate}%（已達上下限）`:`通膨率 ${M.event.inflationDelta>0?"+":""}${M.event.inflationDelta}% · 目前 ${M.inflationRate}%`:`${M.event.amount>0?"+":"−"} ${St(Math.abs(M.event.amount))}`),M.event.skillCardName&&g.createElement("em",null,"獲得技能卡 · ",M.event.skillCardName)))),g.createElement("section",{className:"activity"},g.createElement("div",{className:"activity-heading"},g.createElement("h2",null,"城市動態"),g.createElement("button",{onClick:()=>L("log")},"全部紀錄 ",g.createElement(Gh,{size:14}))),g.createElement("div",{className:"activity-list"},g.createElement(My,{entries:M.log.slice(0,3)}))),g.createElement("footer",{className:"sidebar-footer"},g.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),le!==null&&g.createElement(L3,{game:M,playerId:le,onClose:()=>Se(null),onSelectPlayer:Se}),U==="rules"&&g.createElement(cr,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>L(null)},g.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),g.createElement("div",{className:"rules-list"},Xp.map(([B,Le],tt)=>g.createElement("div",{key:B},g.createElement("span",null,String(tt+1).padStart(2,"0")),g.createElement("section",null,g.createElement("h3",null,B),g.createElement("p",null,Le))))),g.createElement("button",{className:"primary",onClick:()=>L(null)},"知道了，回到城市 ",g.createElement(ur,{size:18}))),U==="skill-codex"&&g.createElement(I3,{onClose:()=>L(null)}),J,U==="property"&&re&&g.createElement(cr,{title:"地產手冊",onClose:()=>L(null)},g.createElement("div",{className:"property-card",style:{"--lot":re.color}},g.createElement("div",{className:"property-banner"},re.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),g.createElement(XE,{size:24}),g.createElement("h3",null,re.name),g.createElement("p",null,re.type==="property"?`街區 ${re.group+1} · ${de?`${M.players[de.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),re.type==="property"?g.createElement(g.Fragment,null,g.createElement("div",{className:"property-stats"},g.createElement("div",null,g.createElement("span",null,"地產價格"),g.createElement("b",null,St(hl(M,re)))),g.createElement("div",null,g.createElement("span",null,"目前租金"),g.createElement("b",null,St(de?Fu(M,re):Qn(M,Math.round(re.price*.18))))),g.createElement("div",null,g.createElement("span",null,"建築等級"),g.createElement("b",null,P3(de==null?void 0:de.level))),g.createElement("div",null,g.createElement("span",null,"建造費"),g.createElement("b",null,St(Ml(re,M))))),(de==null?void 0:de.owner)===Ze.id?g.createElement(g.Fragment,null,g.createElement("p",{className:"property-help"},z3(M,re,de)),g.createElement("button",{className:"primary",disabled:!sn||!Hp(M,re.id,Ze.id),onClick:()=>I({type:"BUILD",id:re.id})},g.createElement(Vh,{size:18}),B3(M,re,de)),g.createElement("button",{className:"secondary full",disabled:!sn,onClick:()=>{I({type:"SELL",id:re.id}),L(null)}},"變賣地產 · ",St(Qn(M,re.price+de.level*Math.round(re.price*.6),B=>Math.floor(B*.5))))):se?g.createElement(g.Fragment,null,g.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),g.createElement("button",{className:"primary",onClick:()=>I({type:"BUY"})},g.createElement(pl,{size:18}),"購買地產 · ",St(hl(M,re))),g.createElement("button",{className:"secondary full",onClick:()=>{I({type:"SKIP"}),L(null)}},"暫不購買，保留現金")):g.createElement("p",{className:"property-help"},de?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):g.createElement("p",{className:"property-help"},re.type==="start"?`每次經過起點，領取 ${St(Qn(M,2e3))}。`:re.type==="chance"||re.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":re.type==="gojail"?"前往監獄並暫停下一回合。":re.type==="tax"?`停在這裡支付 ${St(Qn(M,re.id===6?1200:1800))} 稅金。`:re.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),U==="log"&&g.createElement(cr,{title:"本局城市紀錄",onClose:()=>L(null)},g.createElement("div",{className:"full-log"},M.log.map((B,Le)=>g.createElement("p",{key:Le},g.createElement("span",null,String(M.log.length-Le).padStart(2,"0")),B.text)))),(U==="result"||M.stage==="finished"&&U===null)&&g.createElement(cr,{title:"這座城市，有了新的大亨",onClose:()=>L("closedResult")},g.createElement("div",{className:"winner"},g.createElement(fv,{size:42}),g.createElement("h3",null,(Xn=M.players[M.winner])==null?void 0:Xn.name,"獲勝！"),g.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),g.createElement("div",{className:"rankings"},[...M.players].sort((B,Le)=>pr(M,Le.id)-pr(M,B.id)).map((B,Le)=>g.createElement("div",{key:B.id},g.createElement("b",null,Le+1),g.createElement(ku,{id:B.id,player:B,small:!0}),g.createElement("strong",null,B.name),g.createElement("span",null,B.bankrupt?"已破產":St(pr(M,B.id)))))),g.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),g.createElement("button",{className:"primary",onClick:C},"再玩一場 ",g.createElement(ur,{size:18}))))}zE.createRoot(document.getElementById("root")).render(g.createElement(q3,null));
