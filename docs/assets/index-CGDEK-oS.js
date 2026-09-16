(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function tM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Fh={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function nM(){if(z_)return ft;z_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,E={};function y(P,J,X){this.props=P,this.context=J,this.refs=E,this.updater=X||T}y.prototype.isReactComponent={},y.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function B(){}B.prototype=y.prototype;function F(P,J,X){this.props=P,this.context=J,this.refs=E,this.updater=X||T}var w=F.prototype=new B;w.constructor=F,C(w,y.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(P,J,X){var _e=X.ref;return{$$typeof:r,type:P,key:J,ref:_e!==void 0?_e:null,props:X}}function k(P,J){return L(P.type,J,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Q(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(X){return J[X]})}var fe=/\/+/g;function de(P,J){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):J.toString(36)}function ie(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,J,X,_e,Ce){var ae=typeof P;(ae==="undefined"||ae==="boolean")&&(P=null);var ve=!1;if(P===null)ve=!0;else switch(ae){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(P.$$typeof){case r:case e:ve=!0;break;case v:return ve=P._init,z(ve(P._payload),J,X,_e,Ce)}}if(ve)return Ce=Ce(P),ve=_e===""?"."+de(P,0):_e,I(Ce)?(X="",ve!=null&&(X=ve.replace(fe,"$&/")+"/"),z(Ce,J,X,"",function(rt){return rt})):Ce!=null&&(V(Ce)&&(Ce=k(Ce,X+(Ce.key==null||P&&P.key===Ce.key?"":(""+Ce.key).replace(fe,"$&/")+"/")+ve)),J.push(Ce)),1;ve=0;var Ee=_e===""?".":_e+":";if(I(P))for(var ke=0;ke<P.length;ke++)_e=P[ke],ae=Ee+de(_e,ke),ve+=z(_e,J,X,ae,Ce);else if(ke=M(P),typeof ke=="function")for(P=ke.call(P),ke=0;!(_e=P.next()).done;)_e=_e.value,ae=Ee+de(_e,ke++),ve+=z(_e,J,X,ae,Ce);else if(ae==="object"){if(typeof P.then=="function")return z(ie(P),J,X,_e,Ce);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ve}function W(P,J,X){if(P==null)return P;var _e=[],Ce=0;return z(P,_e,"","",function(ae){return J.call(X,ae,Ce++)}),_e}function K(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(X){(P._status===0||P._status===-1)&&(P._status=1,P._result=X)},function(X){(P._status===0||P._status===-1)&&(P._status=2,P._result=X)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var pe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:W,forEach:function(P,J,X){W(P,function(){J.apply(this,arguments)},X)},count:function(P){var J=0;return W(P,function(){J++}),J},toArray:function(P){return W(P,function(J){return J})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ft.Activity=S,ft.Children=Te,ft.Component=y,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=F,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ft.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},ft.cache=function(P){return function(){return P.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(P,J,X){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var _e=C({},P.props),Ce=P.key;if(J!=null)for(ae in J.key!==void 0&&(Ce=""+J.key),J)!b.call(J,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&J.ref===void 0||(_e[ae]=J[ae]);var ae=arguments.length-2;if(ae===1)_e.children=X;else if(1<ae){for(var ve=Array(ae),Ee=0;Ee<ae;Ee++)ve[Ee]=arguments[Ee+2];_e.children=ve}return L(P.type,Ce,_e)},ft.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ft.createElement=function(P,J,X){var _e,Ce={},ae=null;if(J!=null)for(_e in J.key!==void 0&&(ae=""+J.key),J)b.call(J,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Ce[_e]=J[_e]);var ve=arguments.length-2;if(ve===1)Ce.children=X;else if(1<ve){for(var Ee=Array(ve),ke=0;ke<ve;ke++)Ee[ke]=arguments[ke+2];Ce.children=Ee}if(P&&P.defaultProps)for(_e in ve=P.defaultProps,ve)Ce[_e]===void 0&&(Ce[_e]=ve[_e]);return L(P,ae,Ce)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(P){return{$$typeof:p,render:P}},ft.isValidElement=V,ft.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:K}},ft.memo=function(P,J){return{$$typeof:d,type:P,compare:J===void 0?null:J}},ft.startTransition=function(P){var J=O.T,X={};O.T=X;try{var _e=P(),Ce=O.S;Ce!==null&&Ce(X,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(U,pe)}catch(ae){pe(ae)}finally{J!==null&&X.types!==null&&(J.types=X.types),O.T=J}},ft.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ft.use=function(P){return O.H.use(P)},ft.useActionState=function(P,J,X){return O.H.useActionState(P,J,X)},ft.useCallback=function(P,J){return O.H.useCallback(P,J)},ft.useContext=function(P){return O.H.useContext(P)},ft.useDebugValue=function(){},ft.useDeferredValue=function(P,J){return O.H.useDeferredValue(P,J)},ft.useEffect=function(P,J){return O.H.useEffect(P,J)},ft.useEffectEvent=function(P){return O.H.useEffectEvent(P)},ft.useId=function(){return O.H.useId()},ft.useImperativeHandle=function(P,J,X){return O.H.useImperativeHandle(P,J,X)},ft.useInsertionEffect=function(P,J){return O.H.useInsertionEffect(P,J)},ft.useLayoutEffect=function(P,J){return O.H.useLayoutEffect(P,J)},ft.useMemo=function(P,J){return O.H.useMemo(P,J)},ft.useOptimistic=function(P,J){return O.H.useOptimistic(P,J)},ft.useReducer=function(P,J,X){return O.H.useReducer(P,J,X)},ft.useRef=function(P){return O.H.useRef(P)},ft.useState=function(P){return O.H.useState(P)},ft.useSyncExternalStore=function(P,J,X){return O.H.useSyncExternalStore(P,J,X)},ft.useTransition=function(){return O.H.useTransition()},ft.version="19.2.8",ft}var B_;function wp(){return B_||(B_=1,Fh.exports=nM()),Fh.exports}var ct=wp();const N=tM(ct);var Hh={exports:{}},rl={},Gh={exports:{}},Vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function iM(){return F_||(F_=1,(function(r){function e(z,W){var K=z.length;z.push(W);e:for(;0<K;){var pe=K-1>>>1,Te=z[pe];if(0<l(Te,W))z[pe]=W,z[K]=Te,K=pe;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var W=z[0],K=z.pop();if(K!==W){z[0]=K;e:for(var pe=0,Te=z.length,P=Te>>>1;pe<P;){var J=2*(pe+1)-1,X=z[J],_e=J+1,Ce=z[_e];if(0>l(X,K))_e<Te&&0>l(Ce,X)?(z[pe]=Ce,z[_e]=K,pe=_e):(z[pe]=X,z[J]=K,pe=J);else if(_e<Te&&0>l(Ce,K))z[pe]=Ce,z[_e]=K,pe=_e;else break e}}return W}function l(z,W){var K=z.sortIndex-W.sortIndex;return K!==0?K:z.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],v=1,S=null,g=3,M=!1,T=!1,C=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var W=i(d);W!==null;){if(W.callback===null)s(d);else if(W.startTime<=z)s(d),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(d)}}function I(z){if(C=!1,w(z),!T)if(i(m)!==null)T=!0,U||(U=!0,Q());else{var W=i(d);W!==null&&ie(I,W.startTime-z)}}var U=!1,O=-1,b=5,L=-1;function k(){return E?!0:!(r.unstable_now()-L<b)}function V(){if(E=!1,U){var z=r.unstable_now();L=z;var W=!0;try{e:{T=!1,C&&(C=!1,B(O),O=-1),M=!0;var K=g;try{t:{for(w(z),S=i(m);S!==null&&!(S.expirationTime>z&&k());){var pe=S.callback;if(typeof pe=="function"){S.callback=null,g=S.priorityLevel;var Te=pe(S.expirationTime<=z);if(z=r.unstable_now(),typeof Te=="function"){S.callback=Te,w(z),W=!0;break t}S===i(m)&&s(m),w(z)}else s(m);S=i(m)}if(S!==null)W=!0;else{var P=i(d);P!==null&&ie(I,P.startTime-z),W=!1}}break e}finally{S=null,g=K,M=!1}W=void 0}}finally{W?Q():U=!1}}}var Q;if(typeof F=="function")Q=function(){F(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=V,Q=function(){de.postMessage(null)}}else Q=function(){y(V,0)};function ie(z,W){O=y(function(){z(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var K=g;g=W;try{return z()}finally{g=K}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=g;g=z;try{return W()}finally{g=K}},r.unstable_scheduleCallback=function(z,W,K){var pe=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?pe+K:pe):K=pe,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=K+Te,z={id:v++,callback:W,priorityLevel:z,startTime:K,expirationTime:Te,sortIndex:-1},K>pe?(z.sortIndex=K,e(d,z),i(m)===null&&z===i(d)&&(C?(B(O),O=-1):C=!0,ie(I,K-pe))):(z.sortIndex=Te,e(m,z),T||M||(T=!0,U||(U=!0,Q()))),z},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(z){var W=g;return function(){var K=g;g=W;try{return z.apply(this,arguments)}finally{g=K}}}})(Vh)),Vh}var H_;function aM(){return H_||(H_=1,Gh.exports=iM()),Gh.exports}var kh={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function sM(){if(G_)return Vn;G_=1;var r=wp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Vn.flushSync=function(m){var d=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=v,s.d.f()}},Vn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Vn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Vn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Vn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Vn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Vn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Vn.requestFormReset=function(m){s.d.r(m)},Vn.unstable_batchedUpdates=function(m,d){return m(d)},Vn.useFormState=function(m,d,v){return f.H.useFormState(m,d,v)},Vn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vn.version="19.2.8",Vn}var V_;function rM(){if(V_)return kh.exports;V_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kh.exports=sM(),kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function oM(){if(k_)return rl;k_=1;var r=aM(),e=wp(),i=rM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=h;break}if(R===o){_=!0,o=u,a=h;break}R=R.sibling}if(!_){for(R=h.child;R;){if(R===a){_=!0,a=h,o=u;break}if(R===o){_=!0,o=h,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),F=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case F:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var ie=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},pe=[],Te=-1;function P(t){return{current:t}}function J(t){0>Te||(t.current=pe[Te],pe[Te]=null,Te--)}function X(t,n){Te++,pe[Te]=t.current,t.current=n}var _e=P(null),Ce=P(null),ae=P(null),ve=P(null);function Ee(t,n){switch(X(ae,n),X(Ce,t),X(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?r_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=r_(n),t=o_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(_e),X(_e,t)}function ke(){J(_e),J(Ce),J(ae)}function rt(t){t.memoizedState!==null&&X(ve,t);var n=_e.current,a=o_(n,t.type);n!==a&&(X(Ce,t),X(_e,a))}function $e(t){Ce.current===t&&(J(_e),J(Ce)),ve.current===t&&(J(ve),nl._currentValue=K)}var Xt,dt;function xt(t){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+dt}var _t=!1;function vt(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(me){var ue=me}Reflect.construct(t,[],be)}else{try{be.call()}catch(me){ue=me}t.call(be.prototype)}}else{try{throw Error()}catch(me){ue=me}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(me){if(me&&ue&&typeof me.stack=="string")return[me.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),_=h[0],R=h[1];if(_&&R){var G=_.split(`
`),re=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===re.length)for(o=G.length-1,u=re.length-1;1<=o&&0<=u&&G[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==re[u]){var ye=`
`+G[o].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=o&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return vt(t.type,!1);case 11:return vt(t.type.render,!1);case 1:return vt(t.type,!0);case 31:return xt("Activity");default:return""}}function $t(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var en=Object.prototype.hasOwnProperty,Se=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,De=r.unstable_shouldYield,H=r.unstable_requestPaint,Fe=r.unstable_now,Pe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,x=r.unstable_UserBlockingPriority,Y=r.unstable_NormalPriority,$=r.unstable_LowPriority,ne=r.unstable_IdlePriority,Re=r.log,Ne=r.unstable_setDisableYieldValue,he=null,ge=null;function Le(t){if(typeof Re=="function"&&Ne(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(he,t)}catch{}}var Xe=Math.clz32?Math.clz32:tt,Be=Math.log,Ie=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Be(t)/Ie|0)|0}var nt=256,ut=262144,Z=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Ue(o):(_&=R,_!==0?u=Ue(_):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=o&~h,R!==0?u=Ue(R):_!==0?u=Ue(_):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ve(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function Je(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,n,a,o,u,h){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,re=t.hiddenUpdates;for(a=_&~a;0<a;){var ye=31-Xe(a),be=1<<ye;R[ye]=0,G[ye]=-1;var ue=re[ye];if(ue!==null)for(re[ye]=null,ye=0;ye<ue.length;ye++){var me=ue[ye];me!==null&&(me.lane&=-536870913)}a&=~be}o!==0&&It(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(_&~n))}function It(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function oi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function li(t,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(t.suspendedLanes|n))!==0?0:a}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _o(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function vo(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:D_(t.type))}function ar(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var Wi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Wi,On="__reactProps$"+Wi,Qn="__reactContainer$"+Wi,Ts="__reactEvents$"+Wi,Nl="__reactListeners$"+Wi,Ul="__reactHandles$"+Wi,As="__reactResources$"+Wi,Ba="__reactMarker$"+Wi;function Fa(t){delete t[gn],delete t[On],delete t[Ts],delete t[Nl],delete t[Ul]}function oa(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Qn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=p_(t);t!==null;){if(a=t[gn])return a;t=p_(t)}return n}t=a,a=t.parentNode}return null}function la(t){if(t=t[gn]||t[Qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Rs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ha(t){var n=t[As];return n||(n=t[As]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[Ba]=!0}var Ll=new Set,A={};function j(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(A[t]=n,t=0;t<n.length;t++)Ll.add(n[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},He={};function Ye(t){return en.call(He,t)?!0:en.call(le,t)?!1:oe.test(t)?He[t]=!0:(le[t]=!0,!1)}function ze(t,n,a){if(Ye(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,h.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nt(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function Bt(t){return t.replace(zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,a,o,u,h,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,_,it(n)):a!=null?Mt(t,_,it(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+it(R):t.removeAttribute("name")}function Gn(t,n,a,o,u,h,_,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Nt(t);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Nt(t)}function Mt(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+it(a):""}function Oi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ie(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=it(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Nt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Pi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&on(t,h,n[h])}function Pt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ga=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cs(t){return Ga.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var Pu=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sr=null,rr=null;function sm(t){var n=la(t);if(n&&(t=n.stateNode)){var a=t[On]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[On]||null;if(!u)throw Error(s(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&rn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var zu=!1;function rm(t,n,a){if(zu)return t(n,a);zu=!0;try{var o=t(n);return o}finally{if(zu=!1,(sr!==null||rr!==null)&&(xc(),sr&&(n=sr,t=rr,rr=sr=null,sm(n),t)))for(n=0;n<t.length;n++)sm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[On]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(ua)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Bu=!1}var Va=null,Fu=null,Ol=null;function om(){if(Ol)return Ol;var t,n=Fu,a=n.length,o,u="value"in Va?Va.value:Va.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[h-o];o++);return Ol=u.slice(t,1<o?1-o:void 0)}function Pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function lm(){return!1}function Jn(t){function n(a,o,u,h,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Il:lm,this.isPropagationStopped=lm,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Jn(ws),So=S({},ws,{view:0,detail:0}),$y=Jn(So),Hu,Gu,Mo,Bl=S({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Hu=t.screenX-Mo.screenX,Gu=t.screenY-Mo.screenY):Gu=Hu=0,Mo=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),cm=Jn(Bl),ex=S({},Bl,{dataTransfer:0}),tx=Jn(ex),nx=S({},So,{relatedTarget:0}),Vu=Jn(nx),ix=S({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=Jn(ix),sx=S({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rx=Jn(sx),ox=S({},ws,{data:0}),um=Jn(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ux[t])?!!n[t]:!1}function ku(){return fx}var hx=S({},So,{key:function(t){if(t.key){var n=lx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dx=Jn(hx),px=S({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Jn(px),mx=S({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),gx=Jn(mx),_x=S({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Jn(_x),yx=S({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Jn(yx),Sx=S({},ws,{newState:0,oldState:0}),Mx=Jn(Sx),Ex=[9,13,27,32],Xu=ua&&"CompositionEvent"in window,Eo=null;ua&&"documentMode"in document&&(Eo=document.documentMode);var bx=ua&&"TextEvent"in window&&!Eo,hm=ua&&(!Xu||Eo&&8<Eo&&11>=Eo),dm=" ",pm=!1;function mm(t,n){switch(t){case"keyup":return Ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function Tx(t,n){switch(t){case"compositionend":return gm(n);case"keypress":return n.which!==32?null:(pm=!0,dm);case"textInput":return t=n.data,t===dm&&pm?null:t;default:return null}}function Ax(t,n){if(or)return t==="compositionend"||!Xu&&mm(t,n)?(t=om(),Ol=Fu=Va=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hm&&n.locale!=="ko"?null:n.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rx[t.type]:n==="textarea"}function vm(t,n,a,o){sr?rr?rr.push(o):rr=[o]:sr=o,n=Rc(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var bo=null,To=null;function Cx(t){e_(t,0)}function Fl(t){var n=Rs(t);if(rn(n))return t}function ym(t,n){if(t==="change")return n}var xm=!1;if(ua){var Wu;if(ua){var Yu="oninput"in document;if(!Yu){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),Yu=typeof Sm.oninput=="function"}Wu=Yu}else Wu=!1;xm=Wu&&(!document.documentMode||9<document.documentMode)}function Mm(){bo&&(bo.detachEvent("onpropertychange",Em),To=bo=null)}function Em(t){if(t.propertyName==="value"&&Fl(To)){var n=[];vm(n,To,t,Iu(t)),rm(Cx,n)}}function wx(t,n,a){t==="focusin"?(Mm(),bo=n,To=a,bo.attachEvent("onpropertychange",Em)):t==="focusout"&&Mm()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(To)}function Nx(t,n){if(t==="click")return Fl(n)}function Ux(t,n){if(t==="input"||t==="change")return Fl(n)}function Lx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Lx;function Ao(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!en.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,n){var a=bm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bm(a)}}function Am(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Am(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ox=ua&&"documentMode"in document&&11>=document.documentMode,lr=null,Zu=null,Ro=null,Ku=!1;function Cm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||lr==null||lr!==Kt(o)||(o=lr,"selectionStart"in o&&qu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ro&&Ao(Ro,o)||(Ro=o,o=Rc(Zu,"onSelect"),0<o.length&&(n=new zl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=lr)))}function Ds(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},Qu={},wm={};ua&&(wm=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ns(t){if(Qu[t])return Qu[t];if(!cr[t])return t;var n=cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wm)return Qu[t]=n[a];return t}var Dm=Ns("animationend"),Nm=Ns("animationiteration"),Um=Ns("animationstart"),Px=Ns("transitionrun"),Ix=Ns("transitionstart"),zx=Ns("transitioncancel"),Lm=Ns("transitionend"),Om=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Ii(t,n){Om.set(t,n),j(n,[t])}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],ur=0,ju=0;function Gl(){for(var t=ur,n=ju=ur=0;n<t;){var a=Mi[n];Mi[n++]=null;var o=Mi[n];Mi[n++]=null;var u=Mi[n];Mi[n++]=null;var h=Mi[n];if(Mi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}h!==0&&Pm(a,u,h)}}function Vl(t,n,a,o){Mi[ur++]=t,Mi[ur++]=n,Mi[ur++]=a,Mi[ur++]=o,ju|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function $u(t,n,a,o){return Vl(t,n,a,o),kl(t)}function Us(t,n){return Vl(t,null,null,n),kl(t)}function Pm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function kl(t){if(50<Ko)throw Ko=0,ch=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fr={};function Bx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,n,a,o){return new Bx(t,n,a,o)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var a=t.alternate;return a===null?(a=hi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Im(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Xl(t,n,a,o,u,h){var _=0;if(o=t,typeof t=="function")ef(t)&&(_=1);else if(typeof t=="string")_=kS(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=hi(31,a,n,u),t.elementType=L,t.lanes=h,t;case C:return Ls(a.children,u,h,n);case E:_=8,u|=24;break;case y:return t=hi(12,a,n,u|2),t.elementType=y,t.lanes=h,t;case I:return t=hi(13,a,n,u),t.elementType=I,t.lanes=h,t;case U:return t=hi(19,a,n,u),t.elementType=U,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:_=10;break e;case B:_=9;break e;case w:_=11;break e;case O:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=hi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Ls(t,n,a,o){return t=hi(7,t,o,n),t.lanes=a,t}function tf(t,n,a){return t=hi(6,t,null,n),t.lanes=a,t}function zm(t){var n=hi(18,null,null,0);return n.stateNode=t,n}function nf(t,n,a){return n=hi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bm=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=Bm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:$t(n)},Bm.set(t,n),n)}return{value:t,source:n,stack:$t(n)}}var hr=[],dr=0,Wl=null,Co=0,bi=[],Ti=0,ka=null,qi=1,Zi="";function ha(t,n){hr[dr++]=Co,hr[dr++]=Wl,Wl=t,Co=n}function Fm(t,n,a){bi[Ti++]=qi,bi[Ti++]=Zi,bi[Ti++]=ka,ka=t;var o=qi;t=Zi;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var h=32-Xe(n)+u;if(30<h){var _=u-u%5;h=(o&(1<<_)-1).toString(32),o>>=_,u-=_,qi=1<<32-Xe(n)+u|a<<u|o,Zi=h+t}else qi=1<<h|a<<u|o,Zi=t}function af(t){t.return!==null&&(ha(t,1),Fm(t,1,0))}function sf(t){for(;t===Wl;)Wl=hr[--dr],hr[dr]=null,Co=hr[--dr],hr[dr]=null;for(;t===ka;)ka=bi[--Ti],bi[Ti]=null,Zi=bi[--Ti],bi[Ti]=null,qi=bi[--Ti],bi[Ti]=null}function Hm(t,n){bi[Ti++]=qi,bi[Ti++]=Zi,bi[Ti++]=ka,qi=n.id,Zi=n.overflow,ka=t}var Pn=null,tn=null,Ct=!1,Xa=null,Ai=!1,rf=Error(s(519));function Wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(Ei(n,t)),rf}function Gm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[On]=o,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<Jo.length;a++)bt(Jo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Oi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||a_(n.textContent,a)?(o.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),o.onScroll!=null&&bt("scroll",n),o.onScrollEnd!=null&&bt("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||Wa(t,!0)}function Vm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Pn=Pn.return}}function pr(t){if(t!==Pn)return!1;if(!Ct)return Vm(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bh(t.type,t.memoizedProps)),a=!a),a&&tn&&Wa(t),Vm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=d_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=d_(t)}else n===27?(n=tn,ss(t.type)?(t=wh,wh=null,tn=t):tn=n):tn=Pn?Ci(t.stateNode.nextSibling):null;return!0}function Os(){tn=Pn=null,Ct=!1}function of(){var t=Xa;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Xa=null),t}function wo(t){Xa===null?Xa=[t]:Xa.push(t)}var lf=P(null),Ps=null,da=null;function Ya(t,n,a){X(lf,n._currentValue),n._currentValue=a}function pa(t){t._currentValue=lf.current,J(lf)}function cf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function uf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var _=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),cf(h.return,a,t),o||(_=null);break e}h=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,h=_.alternate,h!==null&&(h.lanes|=a),cf(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function mr(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;fi(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===ve.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(nl):t=[nl])}u=u.return}t!==null&&uf(n,t,a,o),n.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){Ps=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return km(Ps,t)}function ql(t,n){return Ps===null&&Is(t),km(t,n)}function km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(t===null)throw Error(s(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return a}var Fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Hx=r.unstable_scheduleCallback,Gx=r.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new Fx,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&Hx(Gx,function(){t.controller.abort()})}var No=null,hf=0,gr=0,_r=null;function Vx(t,n){if(No===null){var a=No=[];hf=0,gr=mh(),_r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hf++,n.then(Xm,Xm),n}function Xm(){if(--hf===0&&No!==null){_r!==null&&(_r.status="fulfilled");var t=No;No=null,gr=0,_r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Wm=z.S;z.S=function(t,n){Cg=Fe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(t,n),Wm!==null&&Wm(t,n)};var zs=P(null);function df(){var t=zs.current;return t!==null?t:Qt.pooledCache}function Zl(t,n){n===null?X(zs,zs.current):X(zs,n.pool)}function Ym(){var t=df();return t===null?null:{parent:vn._currentValue,pool:t}}var vr=Error(s(460)),pf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qm(t),t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qm(t),t}throw Fs=n,vr}}function Bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,vr):a}}var Fs=null;function Km(){if(Fs===null)throw Error(s(459));var t=Fs;return Fs=null,t}function Qm(t){if(t===vr||t===Kl)throw Error(s(483))}var yr=null,Uo=0;function Jl(t){var n=Uo;return Uo+=1,yr===null&&(yr=[]),Zm(yr,t,n)}function Lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jm(t){function n(te,q){if(t){var se=te.deletions;se===null?(te.deletions=[q],te.flags|=16):se.push(q)}}function a(te,q){if(!t)return null;for(;q!==null;)n(te,q),q=q.sibling;return null}function o(te){for(var q=new Map;te!==null;)te.key!==null?q.set(te.key,te):q.set(te.index,te),te=te.sibling;return q}function u(te,q){return te=fa(te,q),te.index=0,te.sibling=null,te}function h(te,q,se){return te.index=se,t?(se=te.alternate,se!==null?(se=se.index,se<q?(te.flags|=67108866,q):se):(te.flags|=67108866,q)):(te.flags|=1048576,q)}function _(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function R(te,q,se,Me){return q===null||q.tag!==6?(q=tf(se,te.mode,Me),q.return=te,q):(q=u(q,se),q.return=te,q)}function G(te,q,se,Me){var at=se.type;return at===C?ye(te,q,se.props.children,Me,se.key):q!==null&&(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Bs(at)===q.type)?(q=u(q,se.props),Lo(q,se),q.return=te,q):(q=Xl(se.type,se.key,se.props,null,te.mode,Me),Lo(q,se),q.return=te,q)}function re(te,q,se,Me){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=nf(se,te.mode,Me),q.return=te,q):(q=u(q,se.children||[]),q.return=te,q)}function ye(te,q,se,Me,at){return q===null||q.tag!==7?(q=Ls(se,te.mode,Me,at),q.return=te,q):(q=u(q,se),q.return=te,q)}function be(te,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=tf(""+q,te.mode,se),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return se=Xl(q.type,q.key,q.props,null,te.mode,se),Lo(se,q),se.return=te,se;case T:return q=nf(q,te.mode,se),q.return=te,q;case b:return q=Bs(q),be(te,q,se)}if(ie(q)||Q(q))return q=Ls(q,te.mode,se,null),q.return=te,q;if(typeof q.then=="function")return be(te,Jl(q),se);if(q.$$typeof===F)return be(te,ql(te,q),se);jl(te,q)}return null}function ue(te,q,se,Me){var at=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return at!==null?null:R(te,q,""+se,Me);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case M:return se.key===at?G(te,q,se,Me):null;case T:return se.key===at?re(te,q,se,Me):null;case b:return se=Bs(se),ue(te,q,se,Me)}if(ie(se)||Q(se))return at!==null?null:ye(te,q,se,Me,null);if(typeof se.then=="function")return ue(te,q,Jl(se),Me);if(se.$$typeof===F)return ue(te,q,ql(te,se),Me);jl(te,se)}return null}function me(te,q,se,Me,at){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return te=te.get(se)||null,R(q,te,""+Me,at);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case M:return te=te.get(Me.key===null?se:Me.key)||null,G(q,te,Me,at);case T:return te=te.get(Me.key===null?se:Me.key)||null,re(q,te,Me,at);case b:return Me=Bs(Me),me(te,q,se,Me,at)}if(ie(Me)||Q(Me))return te=te.get(se)||null,ye(q,te,Me,at,null);if(typeof Me.then=="function")return me(te,q,se,Jl(Me),at);if(Me.$$typeof===F)return me(te,q,se,ql(q,Me),at);jl(q,Me)}return null}function Qe(te,q,se,Me){for(var at=null,Ut=null,je=q,gt=q=0,Rt=null;je!==null&&gt<se.length;gt++){je.index>gt?(Rt=je,je=null):Rt=je.sibling;var Lt=ue(te,je,se[gt],Me);if(Lt===null){je===null&&(je=Rt);break}t&&je&&Lt.alternate===null&&n(te,je),q=h(Lt,q,gt),Ut===null?at=Lt:Ut.sibling=Lt,Ut=Lt,je=Rt}if(gt===se.length)return a(te,je),Ct&&ha(te,gt),at;if(je===null){for(;gt<se.length;gt++)je=be(te,se[gt],Me),je!==null&&(q=h(je,q,gt),Ut===null?at=je:Ut.sibling=je,Ut=je);return Ct&&ha(te,gt),at}for(je=o(je);gt<se.length;gt++)Rt=me(je,te,gt,se[gt],Me),Rt!==null&&(t&&Rt.alternate!==null&&je.delete(Rt.key===null?gt:Rt.key),q=h(Rt,q,gt),Ut===null?at=Rt:Ut.sibling=Rt,Ut=Rt);return t&&je.forEach(function(us){return n(te,us)}),Ct&&ha(te,gt),at}function ot(te,q,se,Me){if(se==null)throw Error(s(151));for(var at=null,Ut=null,je=q,gt=q=0,Rt=null,Lt=se.next();je!==null&&!Lt.done;gt++,Lt=se.next()){je.index>gt?(Rt=je,je=null):Rt=je.sibling;var us=ue(te,je,Lt.value,Me);if(us===null){je===null&&(je=Rt);break}t&&je&&us.alternate===null&&n(te,je),q=h(us,q,gt),Ut===null?at=us:Ut.sibling=us,Ut=us,je=Rt}if(Lt.done)return a(te,je),Ct&&ha(te,gt),at;if(je===null){for(;!Lt.done;gt++,Lt=se.next())Lt=be(te,Lt.value,Me),Lt!==null&&(q=h(Lt,q,gt),Ut===null?at=Lt:Ut.sibling=Lt,Ut=Lt);return Ct&&ha(te,gt),at}for(je=o(je);!Lt.done;gt++,Lt=se.next())Lt=me(je,te,gt,Lt.value,Me),Lt!==null&&(t&&Lt.alternate!==null&&je.delete(Lt.key===null?gt:Lt.key),q=h(Lt,q,gt),Ut===null?at=Lt:Ut.sibling=Lt,Ut=Lt);return t&&je.forEach(function(eM){return n(te,eM)}),Ct&&ha(te,gt),at}function qt(te,q,se,Me){if(typeof se=="object"&&se!==null&&se.type===C&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case M:e:{for(var at=se.key;q!==null;){if(q.key===at){if(at=se.type,at===C){if(q.tag===7){a(te,q.sibling),Me=u(q,se.props.children),Me.return=te,te=Me;break e}}else if(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Bs(at)===q.type){a(te,q.sibling),Me=u(q,se.props),Lo(Me,se),Me.return=te,te=Me;break e}a(te,q);break}else n(te,q);q=q.sibling}se.type===C?(Me=Ls(se.props.children,te.mode,Me,se.key),Me.return=te,te=Me):(Me=Xl(se.type,se.key,se.props,null,te.mode,Me),Lo(Me,se),Me.return=te,te=Me)}return _(te);case T:e:{for(at=se.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){a(te,q.sibling),Me=u(q,se.children||[]),Me.return=te,te=Me;break e}else{a(te,q);break}else n(te,q);q=q.sibling}Me=nf(se,te.mode,Me),Me.return=te,te=Me}return _(te);case b:return se=Bs(se),qt(te,q,se,Me)}if(ie(se))return Qe(te,q,se,Me);if(Q(se)){if(at=Q(se),typeof at!="function")throw Error(s(150));return se=at.call(se),ot(te,q,se,Me)}if(typeof se.then=="function")return qt(te,q,Jl(se),Me);if(se.$$typeof===F)return qt(te,q,ql(te,se),Me);jl(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(a(te,q.sibling),Me=u(q,se),Me.return=te,te=Me):(a(te,q),Me=tf(se,te.mode,Me),Me.return=te,te=Me),_(te)):a(te,q)}return function(te,q,se,Me){try{Uo=0;var at=qt(te,q,se,Me);return yr=null,at}catch(je){if(je===vr||je===Kl)throw je;var Ut=hi(29,je,null,te.mode);return Ut.lanes=Me,Ut.return=te,Ut}finally{}}}var Hs=Jm(!0),jm=Jm(!1),qa=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=kl(t),Pm(t,null,a),n}return Vl(t,o,n,a),kl(t)}function Oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,oi(t,a)}}function _f(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=_:h=h.next=_,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vf=!1;function Po(){if(vf){var t=_r;if(t!==null)throw t}}function Io(t,n,a,o){vf=!1;var u=t.updateQueue;qa=!1;var h=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,re=G.next;G.next=null,_===null?h=re:_.next=re,_=G;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,R=ye.lastBaseUpdate,R!==_&&(R===null?ye.firstBaseUpdate=re:R.next=re,ye.lastBaseUpdate=G))}if(h!==null){var be=u.baseState;_=0,ye=re=G=null,R=h;do{var ue=R.lane&-536870913,me=ue!==R.lane;if(me?(At&ue)===ue:(o&ue)===ue){ue!==0&&ue===gr&&(vf=!0),ye!==null&&(ye=ye.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Qe=t,ot=R;ue=n;var qt=a;switch(ot.tag){case 1:if(Qe=ot.payload,typeof Qe=="function"){be=Qe.call(qt,be,ue);break e}be=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ot.payload,ue=typeof Qe=="function"?Qe.call(qt,be,ue):Qe,ue==null)break e;be=S({},be,ue);break e;case 2:qa=!0}}ue=R.callback,ue!==null&&(t.flags|=64,me&&(t.flags|=8192),me=u.callbacks,me===null?u.callbacks=[ue]:me.push(ue))}else me={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ye===null?(re=ye=me,G=be):ye=ye.next=me,_|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;me=R,R=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);ye===null&&(G=be),u.baseState=G,u.firstBaseUpdate=re,u.lastBaseUpdate=ye,h===null&&(u.shared.lanes=0),es|=_,t.lanes=_,t.memoizedState=be}}function $m(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function e0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$m(a[t],n)}var xr=P(null),$l=P(0);function t0(t,n){t=Ea,X($l,t),X(xr,n),Ea=t|n.baseLanes}function yf(){X($l,Ea),X(xr,xr.current)}function xf(){Ea=$l.current,J(xr),J($l)}var di=P(null),Ri=null;function Qa(t){var n=t.alternate;X(pn,pn.current&1),X(di,t),Ri===null&&(n===null||xr.current!==null||n.memoizedState!==null)&&(Ri=t)}function Sf(t){X(pn,pn.current),X(di,t),Ri===null&&(Ri=t)}function n0(t){t.tag===22?(X(pn,pn.current),X(di,t),Ri===null&&(Ri=t)):Ja()}function Ja(){X(pn,pn.current),X(di,di.current)}function pi(t){J(di),Ri===t&&(Ri=null),J(pn)}var pn=P(0);function ec(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rh(a)||Ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,mt=null,Wt=null,yn=null,tc=!1,Sr=!1,Gs=!1,nc=0,zo=0,Mr=null,Xx=0;function fn(){throw Error(s(321))}function Mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function Ef(t,n,a,o,u,h){return ma=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?F0:Bf,Gs=!1,h=a(o,u),Gs=!1,Sr&&(h=a0(n,a,o,u)),i0(t),h}function i0(t){z.H=Ho;var n=Wt!==null&&Wt.next!==null;if(ma=0,yn=Wt=mt=null,tc=!1,zo=0,Mr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&Yl(t)&&(xn=!0))}function a0(t,n,a,o){mt=t;var u=0;do{if(Sr&&(Mr=null),zo=0,Sr=!1,25<=u)throw Error(s(301));if(u+=1,yn=Wt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=H0,h=n(a,o)}while(Sr);return h}function Wx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(mt.flags|=1024),n}function bf(){var t=nc!==0;return nc=0,t}function Tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Af(t){if(tc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tc=!1}ma=0,yn=Wt=mt=null,Sr=!1,zo=nc=0,Mr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?mt.memoizedState=yn=t:yn=yn.next=t,yn}function mn(){if(Wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=yn===null?mt.memoizedState:yn.next;if(n!==null)yn=n,Wt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},yn===null?mt.memoizedState=yn=t:yn=yn.next=t}return yn}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=zo;return zo+=1,Mr===null&&(Mr=[]),t=Zm(Mr,t,n),n=mt,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?F0:Bf),t}function ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===F)return In(t)}throw Error(s(438,String(t)))}function Rf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ic(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function ga(t,n){return typeof n=="function"?n(t):n}function sc(t){var n=mn();return Cf(n,Wt,t)}function Cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var _=u.next;u.next=h.next,h.next=_}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=_=null,G=null,re=n,ye=!1;do{var be=re.lane&-536870913;if(be!==re.lane?(At&be)===be:(ma&be)===be){var ue=re.revertLane;if(ue===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),be===gr&&(ye=!0);else if((ma&ue)===ue){re=re.next,ue===gr&&(ye=!0);continue}else be={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(R=G=be,_=h):G=G.next=be,mt.lanes|=ue,es|=ue;be=re.action,Gs&&a(h,be),h=re.hasEagerState?re.eagerState:a(h,be)}else ue={lane:be,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(R=G=ue,_=h):G=G.next=ue,mt.lanes|=be,es|=be;re=re.next}while(re!==null&&re!==n);if(G===null?_=h:G.next=R,!fi(h,t.memoizedState)&&(xn=!0,ye&&(a=_r,a!==null)))throw a;t.memoizedState=h,t.baseState=_,t.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wf(t){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do h=t(h,_.action),_=_.next;while(_!==u);fi(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function s0(t,n,a){var o=mt,u=mn(),h=Ct;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!fi((Wt||u).memoizedState,a);if(_&&(u.memoizedState=a,xn=!0),u=u.queue,Uf(l0.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Er(9,{destroy:void 0},o0.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));h||(ma&127)!==0||r0(o,n,a)}return a}function r0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=ic(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function o0(t,n,a,o){n.value=a,n.getSnapshot=o,c0(n)&&u0(t)}function l0(t,n,a){return a(function(){c0(n)&&u0(t)})}function c0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function u0(t){var n=Us(t,2);n!==null&&ni(n,t,2)}function Df(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Gs){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},n}function f0(t,n,a,o){return t.baseState=a,Cf(t,Wt,typeof o=="function"?o:ga)}function Yx(t,n,a,o,u){if(lc(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){h.listeners.push(_)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,h0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function h0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=z.T,_={};z.T=_;try{var R=a(u,o),G=z.S;G!==null&&G(_,R),d0(t,n,R)}catch(re){Nf(t,n,re)}finally{h!==null&&_.types!==null&&(h.types=_.types),z.T=h}}else try{h=a(u,o),d0(t,n,h)}catch(re){Nf(t,n,re)}}function d0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){p0(t,n,o)},function(o){return Nf(t,n,o)}):p0(t,n,a)}function p0(t,n,a){n.status="fulfilled",n.value=a,m0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,h0(t,a)))}function Nf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==o)}t.action=null}function m0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function g0(t,n){return n}function _0(t,n){if(Ct){var a=Qt.formState;if(a!==null){e:{var o=mt;if(Ct){if(tn){t:{for(var u=tn,h=Ai;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){tn=Ci(u.nextSibling),o=u.data==="F!";break e}}Wa(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:n},a.queue=o,a=I0.bind(null,mt,o),o.dispatch=a,o=Df(!1),h=zf.bind(null,mt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Yx.bind(null,mt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function v0(t){var n=mn();return y0(n,Wt,t)}function y0(t,n,a){if(n=Cf(t,n,g0)[0],t=sc(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Bo(n)}catch(_){throw _===vr?Kl:_}else o=n;n=mn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,Er(9,{destroy:void 0},qx.bind(null,u,a),null)),[o,h,t]}function qx(t,n){t.action=n}function x0(t){var n=mn(),a=Wt;if(a!==null)return y0(n,a,t);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Er(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=ic(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function S0(){return mn().memoizedState}function rc(t,n,a,o){var u=Yn();mt.flags|=t,u.memoizedState=Er(1|n,{destroy:void 0},a,o===void 0?null:o)}function oc(t,n,a,o){var u=mn();o=o===void 0?null:o;var h=u.memoizedState.inst;Wt!==null&&o!==null&&Mf(o,Wt.memoizedState.deps)?u.memoizedState=Er(n,h,a,o):(mt.flags|=t,u.memoizedState=Er(1|n,h,a,o))}function M0(t,n){rc(8390656,8,t,n)}function Uf(t,n){oc(2048,8,t,n)}function Zx(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=ic(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function E0(t){var n=mn().memoizedState;return Zx({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function b0(t,n){return oc(4,2,t,n)}function T0(t,n){return oc(4,4,t,n)}function A0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function R0(t,n,a){a=a!=null?a.concat([t]):null,oc(4,4,A0.bind(null,n,t),a)}function Lf(){}function C0(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Mf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function w0(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Mf(n,o[1]))return o[0];if(o=t(),Gs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o}function Of(t,n,a){return a===void 0||(ma&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),mt.lanes|=t,es|=t,a)}function D0(t,n,a,o){return fi(a,n)?a:xr.current!==null?(t=Of(t,a,o),fi(t,n)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(At&261930)===0?(xn=!0,t.memoizedState=a):(t=Dg(),mt.lanes|=t,es|=t,n)}function N0(t,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var _=z.T,R={};z.T=R,zf(t,!1,n,a);try{var G=u(),re=z.S;if(re!==null&&re(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ye=kx(G,o);Fo(t,n,ye,_i(t))}else Fo(t,n,o,_i(t))}catch(be){Fo(t,n,{then:function(){},status:"rejected",reason:be},_i())}finally{W.p=h,_!==null&&R.types!==null&&(_.types=R.types),z.T=_}}function Kx(){}function Pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=U0(t).queue;N0(t,u,n,K,a===null?Kx:function(){return L0(t),a(o)})}function U0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function L0(t){var n=U0(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},_i())}function If(){return In(nl)}function O0(){return mn().memoizedState}function P0(){return mn().memoizedState}function Qx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();t=Za(a);var o=Ka(n,t,a);o!==null&&(ni(o,n,a),Oo(o,n,a)),n={cache:ff()},t.payload=n;return}n=n.return}}function Jx(t,n,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(t)?z0(n,a):(a=$u(t,n,a,o),a!==null&&(ni(a,t,o),B0(a,n,o)))}function I0(t,n,a){var o=_i();Fo(t,n,a,o)}function Fo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(t))z0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var _=n.lastRenderedState,R=h(_,a);if(u.hasEagerState=!0,u.eagerState=R,fi(R,_))return Vl(t,n,u,0),Qt===null&&Gl(),!1}catch{}finally{}if(a=$u(t,n,u,o),a!==null)return ni(a,t,o),B0(a,n,o),!0}return!1}function zf(t,n,a,o){if(o={lane:2,revertLane:mh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},lc(t)){if(n)throw Error(s(479))}else n=$u(t,a,o,2),n!==null&&ni(n,t,2)}function lc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function z0(t,n){Sr=tc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function B0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,oi(t,a)}}var Ho={readContext:In,use:ac,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Ho.useEffectEvent=fn;var F0={readContext:In,use:ac,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:M0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rc(4194308,4,A0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rc(4194308,4,t,n)},useInsertionEffect:function(t,n){rc(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(Gs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(Gs){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Jx.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Df(t);var n=t.queue,a=I0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(t,n){var a=Yn();return Of(a,t,n)},useTransition:function(){var t=Df(!1);return t=N0.bind(null,mt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Yn();if(Ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(At&127)!==0||r0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,M0(l0.bind(null,o,h,t),[t]),o.flags|=2048,Er(9,{destroy:void 0},o0.bind(null,o,h,a,n),null),a},useId:function(){var t=Yn(),n=Qt.identifierPrefix;if(Ct){var a=Zi,o=qi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=nc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:If,useFormState:_0,useActionState:_0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return Yn().memoizedState=Qx.bind(null,mt)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bf={readContext:In,use:ac,useCallback:C0,useContext:In,useEffect:Uf,useImperativeHandle:R0,useInsertionEffect:b0,useLayoutEffect:T0,useMemo:w0,useReducer:sc,useRef:S0,useState:function(){return sc(ga)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=mn();return D0(a,Wt.memoizedState,t,n)},useTransition:function(){var t=sc(ga)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:If,useFormState:v0,useActionState:v0,useOptimistic:function(t,n){var a=mn();return f0(a,Wt,t,n)},useMemoCache:Rf,useCacheRefresh:P0};Bf.useEffectEvent=E0;var H0={readContext:In,use:ac,useCallback:C0,useContext:In,useEffect:Uf,useImperativeHandle:R0,useInsertionEffect:b0,useLayoutEffect:T0,useMemo:w0,useReducer:wf,useRef:S0,useState:function(){return wf(ga)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=mn();return Wt===null?Of(a,t,n):D0(a,Wt.memoizedState,t,n)},useTransition:function(){var t=wf(ga)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:If,useFormState:x0,useActionState:x0,useOptimistic:function(t,n){var a=mn();return Wt!==null?f0(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:P0};H0.useEffectEvent=E0;function Ff(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Za(o);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&(ni(n,t,o),Oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&(ni(n,t,o),Oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=_i(),o=Za(a);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,a),n!==null&&(ni(n,t,a),Oo(n,t,a))}};function G0(t,n,a,o,u,h,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,_):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,o)||!Ao(u,h):!0}function V0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Hf.enqueueReplaceState(n,n.state,null)}function Vs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function k0(t){Hl(t)}function X0(t){console.error(t)}function W0(t){Hl(t)}function cc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(t,n)},a}function q0(t){return t=Za(t),t.tag=3,t}function Z0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Y0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Y0(n,a,o),typeof u!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function jx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&mr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?Sc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),hh(t,o,u)),!1;case 22:return a.flags|=65536,o===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),hh(t,o,u)),!1}throw Error(s(435,a.tag))}return hh(t,o,u),Sc(),!1}if(Ct)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==rf&&(t=Error(s(422),{cause:o}),wo(Ei(t,a)))):(o!==rf&&(n=Error(s(423),{cause:o}),wo(Ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ei(o,a),u=Gf(t.stateNode,o,u),_f(t,u),hn!==4&&(hn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),Zo===null?Zo=[h]:Zo.push(h),hn!==4&&(hn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Gf(a.stateNode,o,t),_f(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=q0(u),Z0(u,t,a,o),_f(a,u),!1}a=a.return}while(a!==null);return!1}var Vf=Error(s(461)),xn=!1;function zn(t,n,a,o){n.child=t===null?jm(n,null,a,o):Hs(n,t.child,a,o)}function K0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Is(n),o=Ef(t,n,a,_,h,u),R=bf(),t!==null&&!xn?(Tf(t,n,u),_a(t,n,u)):(Ct&&R&&af(n),n.flags|=1,zn(t,n,o,u),n.child)}function Q0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!ef(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,J0(t,n,h,o,u)):(t=Xl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Qf(t,u)){var _=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(_,o)&&t.ref===n.ref)return _a(t,n,u)}return n.flags|=1,t=fa(h,o),t.ref=n.ref,t.return=n,n.child=t}function J0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Ao(h,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=h,Qf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,_a(t,n,u)}return kf(t,n,a,o,u)}function j0(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return $0(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,h!==null?h.cachePool:null),h!==null?t0(n,h):yf(),n0(n);else return o=n.lanes=536870912,$0(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Zl(n,h.cachePool),t0(n,h),Ja(),n.memoizedState=null):(t!==null&&Zl(n,null),yf(),Ja());return zn(t,n,u,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $0(t,n,a,o,u){var h=df();return h=h===null?null:{parent:vn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Zl(n,null),yf(),n0(n),t!==null&&mr(t,n,o,!0),n.childLanes=u,null}function uc(t,n){return n=hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function eg(t,n,a){return Hs(n,t.child,null,a),t=uc(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function $x(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=uc(n,o),n.lanes=536870912,Go(null,t);if(Sf(n),(t=tn)?(t=h_(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:qi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,Pn=n,tn=null)):t=null,t===null)throw Wa(n);return n.lanes=536870912,null}return uc(n,o)}var h=t.memoizedState;if(h!==null){var _=h.dehydrated;if(Sf(n),u)if(n.flags&256)n.flags&=-257,n=eg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||mr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=Qt,o!==null&&(_=li(o,a),_!==0&&_!==h.retryLane))throw h.retryLane=_,Us(t,_),ni(o,t,_),Vf;Sc(),n=eg(t,n,a)}else t=h.treeContext,tn=Ci(_.nextSibling),Pn=n,Ct=!0,Xa=null,Ai=!1,t!==null&&Hm(n,t),n=uc(n,o),n.flags|=4096;return n}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function fc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function kf(t,n,a,o,u){return Is(n),a=Ef(t,n,a,o,void 0,u),o=bf(),t!==null&&!xn?(Tf(t,n,u),_a(t,n,u)):(Ct&&o&&af(n),n.flags|=1,zn(t,n,a,u),n.child)}function tg(t,n,a,o,u,h){return Is(n),n.updateQueue=null,a=a0(n,o,a,u),i0(t),o=bf(),t!==null&&!xn?(Tf(t,n,h),_a(t,n,h)):(Ct&&o&&af(n),n.flags|=1,zn(t,n,a,h),n.child)}function ng(t,n,a,o,u){if(Is(n),n.stateNode===null){var h=fr,_=a.contextType;typeof _=="object"&&_!==null&&(h=In(_)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Hf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},mf(n),_=a.contextType,h.context=typeof _=="object"&&_!==null?In(_):fr,h.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ff(n,a,_,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(_=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),_!==h.state&&Hf.enqueueReplaceState(h,h.state,null),Io(n,o,h,u),Po(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,G=Vs(a,R);h.props=G;var re=h.context,ye=a.contextType;_=fr,typeof ye=="object"&&ye!==null&&(_=In(ye));var be=a.getDerivedStateFromProps;ye=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ye||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||re!==_)&&V0(n,h,o,_),qa=!1;var ue=n.memoizedState;h.state=ue,Io(n,o,h,u),Po(),re=n.memoizedState,R||ue!==re||qa?(typeof be=="function"&&(Ff(n,a,be,o),re=n.memoizedState),(G=qa||G0(n,a,G,o,ue,re,_))?(ye||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),h.props=o,h.state=re,h.context=_,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,gf(t,n),_=n.memoizedProps,ye=Vs(a,_),h.props=ye,be=n.pendingProps,ue=h.context,re=a.contextType,G=fr,typeof re=="object"&&re!==null&&(G=In(re)),R=a.getDerivedStateFromProps,(re=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==be||ue!==G)&&V0(n,h,o,G),qa=!1,ue=n.memoizedState,h.state=ue,Io(n,o,h,u),Po();var me=n.memoizedState;_!==be||ue!==me||qa||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof R=="function"&&(Ff(n,a,R,o),me=n.memoizedState),(ye=qa||G0(n,a,ye,o,ue,me,G)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(re||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,me,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,me,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=me),h.props=o,h.state=me,h.context=G,o=ye):(typeof h.componentDidUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,fc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Hs(n,t.child,null,u),n.child=Hs(n,null,a,u)):zn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=_a(t,n,u),t}function ig(t,n,a,o){return Os(),n.flags|=256,zn(t,n,a,o),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Ym()}}function Yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function ag(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,_;if((_=h)||(_=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Qa(n):Ja(),(t=tn)?(t=h_(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ka!==null?{id:qi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,Pn=n,tn=null)):t=null,t===null)throw Wa(n);return Ch(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ja(),u=n.mode,R=hc({mode:"hidden",children:R},u),o=Ls(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(t,_,a),n.memoizedState=Xf,Go(null,o)):(Qa(n),qf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Qa(n),n.flags&=-257,n=Zf(t,n,a)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=o.fallback,u=n.mode,o=hc({mode:"visible",children:o.children},u),R=Ls(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Hs(n,t.child,null,a),o=n.child,o.memoizedState=Wf(a),o.childLanes=Yf(t,_,a),n.memoizedState=Xf,n=Go(null,o));else if(Qa(n),Ch(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var re=_.dgst;_=re,o=Error(s(419)),o.stack="",o.digest=_,wo({value:o,source:null,stack:null}),n=Zf(t,n,a)}else if(xn||mr(t,n,a,!1),_=(a&t.childLanes)!==0,xn||_){if(_=Qt,_!==null&&(o=li(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Us(t,o),ni(_,t,o),Vf;Rh(R)||Sc(),n=Zf(t,n,a)}else Rh(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,tn=Ci(R.nextSibling),Pn=n,Ct=!0,Xa=null,Ai=!1,t!==null&&Hm(n,t),n=qf(n,o.children),n.flags|=4096);return n}return u?(Ja(),R=o.fallback,u=n.mode,G=t.child,re=G.sibling,o=fa(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,re!==null?R=fa(re,R):(R=Ls(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Go(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Wf(a):(u=R.cachePool,u!==null?(G=vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Ym(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Yf(t,_,a),n.memoizedState=Xf,Go(t.child,o)):(Qa(n),a=t.child,t=a.sibling,a=fa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function qf(t,n){return n=hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hc(t,n){return t=hi(22,t,null,n),t.lanes=0,t}function Zf(t,n,a){return Hs(n,t.child,null,a),t=qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),cf(t.return,n,a)}function Kf(t,n,a,o,u,h){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=h)}function rg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var _=pn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,X(pn,_),zn(t,n,o,a),o=Ct?Co:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ec(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Kf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ec(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Kf(n,!0,a,null,h,o);break;case"together":Kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _a(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(mr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function eS(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Os();break;case 27:case 5:rt(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(t,n,a):(Qa(n),t=_a(t,n,a),t!==null?t.sibling:null);Qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(mr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),X(pn,pn.current),o)break;return null;case 22:return n.lanes=0,j0(t,n,a,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return _a(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Qf(t,a)&&(n.flags&128)===0)return xn=!1,eS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Ct&&(n.flags&1048576)!==0&&Fm(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Bs(n.elementType),n.type=t,typeof t=="function")ef(t)?(o=Vs(t,o),n.tag=1,n=ng(null,n,t,o,a)):(n.tag=0,n=kf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=K0(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=Q0(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return kf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Vs(o,n.pendingProps),ng(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,gf(t,n),Io(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ya(n,vn,o),o!==h.cache&&uf(n,[vn],a,!0),Po(),o=_.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ig(t,n,o,a);break e}else if(o!==u){u=Ei(Error(s(424)),n),wo(u),n=ig(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ci(t.firstChild),Pn=n,Ct=!0,Xa=null,Ai=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),o===u){n=_a(t,n,a);break e}zn(t,n,o,a)}n=n.child}return n;case 26:return fc(t,n),t===null?(a=v_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=Cc(ae.current).createElement(a),o[gn]=n,o[On]=t,Bn(o,a,t),_n(o),n.stateNode=o):n.memoizedState=v_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&Ct&&(o=n.stateNode=m_(n.type,n.pendingProps,ae.current),Pn=n,Ai=!0,u=tn,ss(n.type)?(wh=u,tn=Ci(o.firstChild)):tn=u),zn(t,n,n.pendingProps.children,a),fc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=tn)&&(o=DS(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Pn=n,tn=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||Wa(n)),rt(n),u=n.type,h=n.pendingProps,_=t!==null?t.memoizedProps:null,o=h.children,bh(u,h)?o=null:_!==null&&bh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Ef(t,n,Wx,null,null,a),nl._currentValue=u),fc(t,n),zn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=tn)&&(a=NS(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Pn=n,tn=null,t=!0):t=!1),t||Wa(n)),null;case 13:return ag(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Hs(n,null,o,a):zn(t,n,o,a),n.child;case 11:return K0(t,n,n.type,n.pendingProps,a);case 7:return zn(t,n,n.pendingProps,a),n.child;case 8:return zn(t,n,n.pendingProps.children,a),n.child;case 12:return zn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),zn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Is(n),u=In(u),o=o(u),n.flags|=1,zn(t,n,o,a),n.child;case 14:return Q0(t,n,n.type,n.pendingProps,a);case 15:return J0(t,n,n.type,n.pendingProps,a);case 19:return rg(t,n,a);case 31:return $x(t,n,a);case 22:return j0(t,n,a,n.pendingProps);case 24:return Is(n),o=In(vn),t===null?(u=df(),u===null&&(u=Qt,h=ff(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},mf(n),Ya(n,vn,u)):((t.lanes&a)!==0&&(gf(t,n),Io(n,null,null,a),Po()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,vn,o)):(o=h.cache,Ya(n,vn,o),o!==u.cache&&uf(n,[vn],a,!0))),zn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(t){t.flags|=4}function Jf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Og())t.flags|=8192;else throw Fs=Ql,pf}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E_(n))if(Og())t.flags|=8192;else throw Fs=Ql,pf}function dc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,Rr|=n)}function Vo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function tS(t,n,a){var o=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),pa(vn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pr(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),nn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(va(n),h!==null?(nn(n),lg(n,h)):(nn(n),Jf(n,u,null,o,a))):h?h!==t.memoizedState?(va(n),nn(n),lg(n,h)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&va(n),nn(n),Jf(n,u,t,o,a)),null;case 27:if($e(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return nn(n),null}t=_e.current,pr(n)?Gm(n):(t=m_(u,o,a),n.stateNode=t,va(n))}return nn(n),null;case 5:if($e(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return nn(n),null}if(h=_e.current,pr(n))Gm(n);else{var _=Cc(ae.current);switch(h){case 1:h=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=_.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}h[gn]=n,h[On]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)h.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=h;e:switch(Bn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return nn(n),Jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,pr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||a_(t.nodeValue,a)),t||Wa(n,!0)}else t=Cc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=pr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=pr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),u=!1}else u=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),dc(n,n.updateQueue),nn(n),null);case 4:return ke(),t===null&&yh(n.stateNode.containerInfo),nn(n),null;case 10:return pa(n.type),nn(n),null;case 19:if(J(pn),o=n.memoizedState,o===null)return nn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Vo(o,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=ec(t),h!==null){for(n.flags|=128,Vo(o,!1),t=h.updateQueue,n.updateQueue=t,dc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Im(a,t),a=a.sibling;return X(pn,pn.current&1|2),Ct&&ha(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Fe()>vc&&(n.flags|=128,u=!0,Vo(o,!1),n.lanes=4194304)}else{if(!u)if(t=ec(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,dc(n,t),Vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ct)return nn(n),null}else 2*Fe()-o.renderingStartTime>vc&&a!==536870912&&(n.flags|=128,u=!0,Vo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,a=pn.current,X(pn,u?a&1|2:a&1),Ct&&ha(n,o.treeForkCount),t):(nn(n),null);case 22:case 23:return pi(n),xf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&dc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(zs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(vn),nn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function nS(t,n){switch(sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(vn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(pn),null;case 4:return ke(),null;case 10:return pa(n.type),null;case 22:case 23:return pi(n),xf(),t!==null&&J(zs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function cg(t,n){switch(sf(n),n.tag){case 3:pa(vn),ke();break;case 26:case 27:case 5:$e(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:J(pn);break;case 10:pa(n.type);break;case 22:case 23:pi(n),xf(),t!==null&&J(zs);break;case 24:pa(vn)}}function ko(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,_=a.inst;o=h(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Gt(n,n.return,R)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var G=a,re=R;try{re()}catch(ye){Gt(u,G,ye)}}}o=o.next}while(o!==h)}}catch(ye){Gt(n,n.return,ye)}}function ug(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{e0(n,a)}catch(o){Gt(t,t.return,o)}}}function fg(t,n,a){a.props=Vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function jf(t,n,a){try{var o=t.stateNode;bS(o,t.type,a,n),o[On]=n}catch(u){Gt(t,t.return,u)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ss(t.type)||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca));else if(o!==4&&(o===27&&ss(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(eh(t,n,a),t=t.sibling;t!==null;)eh(t,n,a),t=t.sibling}function pc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ss(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(pc(t,n,a),t=t.sibling;t!==null;)pc(t,n,a),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[gn]=t,n[On]=a}catch(h){Gt(t,t.return,h)}}var ya=!1,Sn=!1,th=!1,mg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function iS(t,n){if(t=t.containerInfo,Mh=Pc,t=Rm(t),qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var _=0,R=-1,G=-1,re=0,ye=0,be=t,ue=null;t:for(;;){for(var me;be!==a||u!==0&&be.nodeType!==3||(R=_+u),be!==h||o!==0&&be.nodeType!==3||(G=_+o),be.nodeType===3&&(_+=be.nodeValue.length),(me=be.firstChild)!==null;)ue=be,be=me;for(;;){if(be===t)break t;if(ue===a&&++re===u&&(R=_),ue===h&&++ye===o&&(G=_),(me=be.nextSibling)!==null)break;be=ue,ue=be.parentNode}be=me}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eh={focusedElem:t,selectionRange:a},Pc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Qe=Vs(a.type,u);t=o.getSnapshotBeforeUpdate(Qe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Gt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ah(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ah(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function gg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&ko(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Gt(a,a.return,_)}else{var u=Vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Gt(a,a.return,_)}}o&64&&ug(a),o&512&&Xo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{e0(t,n)}catch(_){Gt(a,a.return,_)}}break;case 27:n===null&&o&4&&pg(a);case 26:case 5:Sa(t,a),n===null&&o&4&&hg(a),o&512&&Xo(a,a.return);break;case 12:Sa(t,a);break;case 31:Sa(t,a),o&4&&yg(t,a);break;case 13:Sa(t,a),o&4&&xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=hS.bind(null,a),US(t,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){n=n!==null&&n.memoizedState!==null||Sn,u=ya;var h=Sn;ya=o,(Sn=n)&&!h?Ma(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),ya=u,Sn=h}break;case 30:break;default:Sa(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Fa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,jn=!1;function xa(t,n,a){for(a=a.child;a!==null;)vg(t,n,a),a=a.sibling}function vg(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(he,a)}catch{}switch(a.tag){case 26:Sn||Ki(a,n),xa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Ki(a,n);var o=ln,u=jn;ss(a.type)&&(ln=a.stateNode,jn=!1),xa(t,n,a),$o(a.stateNode),ln=o,jn=u;break;case 5:Sn||Ki(a,n);case 6:if(o=ln,u=jn,ln=null,xa(t,n,a),ln=o,jn=u,ln!==null)if(jn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(h){Gt(a,n,h)}else try{ln.removeChild(a.stateNode)}catch(h){Gt(a,n,h)}break;case 18:ln!==null&&(jn?(t=ln,u_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Pr(t)):u_(ln,a.stateNode));break;case 4:o=ln,u=jn,ln=a.stateNode.containerInfo,jn=!0,xa(t,n,a),ln=o,jn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Sn||ja(4,a,n),xa(t,n,a);break;case 1:Sn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fg(a,n,o)),xa(t,n,a);break;case 21:xa(t,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,xa(t,n,a),Sn=o;break;default:xa(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pr(t)}catch(a){Gt(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pr(t)}catch(a){Gt(n,n.return,a)}}function aS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mg),n;default:throw Error(s(435,t.tag))}}function mc(t,n){var a=aS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=dS.bind(null,t,o);o.then(u,u)}})}function $n(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(ss(R.type)){ln=R.stateNode,jn=!1;break e}break;case 5:ln=R.stateNode,jn=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(ln===null)throw Error(s(160));vg(h,_,u),ln=null,jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var zi=null;function Sg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ei(t),o&4&&(ja(3,t,t.return),ko(3,t),ja(5,t,t.return));break;case 1:$n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&64&&ya&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=zi;if($n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ba]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Bn(h,o,a),h[gn]=t,_n(h),o=h;break e;case"link":var _=S_("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(h=_[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}h=u.createElement(o),Bn(h,o,a),u.head.appendChild(h);break;case"meta":if(_=S_("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(h=_[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}h=u.createElement(o),Bn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[gn]=t,_n(h),o=h}t.stateNode=o}else M_(u,t.type,t.stateNode);else t.stateNode=x_(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?M_(u,t.type,t.stateNode):x_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&jf(t,t.memoizedProps,a.memoizedProps)}break;case 27:$n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),a!==null&&o&4&&jf(t,t.memoizedProps,a.memoizedProps);break;case 5:if($n(n,t),ei(t),o&512&&(Sn||a===null||Ki(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(Qe){Gt(t,t.return,Qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,jf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(th=!0);break;case 6:if($n(n,t),ei(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Qe){Gt(t,t.return,Qe)}}break;case 3:if(Nc=null,u=zi,zi=wc(n.containerInfo),$n(n,t),zi=u,ei(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(Qe){Gt(t,t.return,Qe)}th&&(th=!1,Mg(t));break;case 4:o=zi,zi=wc(t.stateNode.containerInfo),$n(n,t),ei(t),zi=o;break;case 12:$n(n,t),ei(t);break;case 31:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mc(t,o)));break;case 13:$n(n,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_c=Fe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mc(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,re=ya,ye=Sn;if(ya=re||u,Sn=ye||G,$n(n,t),Sn=ye,ya=re,ei(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ya||Sn||ks(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var be=G.memoizedProps.style,ue=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Qe){Gt(G,G.return,Qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qe){Gt(G,G.return,Qe)}}}else if(n.tag===18){if(a===null){G=n;try{var me=G.stateNode;u?f_(me,!0):f_(G.stateNode,!1)}catch(Qe){Gt(G,G.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mc(t,a))));break;case 19:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mc(t,o)));break;case 30:break;case 21:break;default:$n(n,t),ei(t)}}function ei(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=$f(t);pc(t,h,u);break;case 5:var _=a.stateNode;a.flags&32&&(ui(_,""),a.flags&=-33);var R=$f(t);pc(t,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,re=$f(t);eh(t,re,G);break;default:throw Error(s(161))}}catch(ye){Gt(t,t.return,ye)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(t,n.alternate,n),n=n.sibling}function ks(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),ks(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),ks(n);break;case 27:$o(n.stateNode);case 26:case 5:Ki(n,n.return),ks(n);break;case 22:n.memoizedState===null&&ks(n);break;case 30:ks(n);break;default:ks(n)}t=t.sibling}}function Ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,_=h.flags;switch(h.tag){case 0:case 11:case 15:Ma(u,h,a),ko(4,h);break;case 1:if(Ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){Gt(o,o.return,re)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)$m(G[u],R)}catch(re){Gt(o,o.return,re)}}a&&_&64&&ug(h),Xo(h,h.return);break;case 27:pg(h);case 26:case 5:Ma(u,h,a),a&&o===null&&_&4&&hg(h),Xo(h,h.return);break;case 12:Ma(u,h,a);break;case 31:Ma(u,h,a),a&&_&4&&yg(u,h);break;case 13:Ma(u,h,a),a&&_&4&&xg(u,h);break;case 22:h.memoizedState===null&&Ma(u,h,a),Xo(h,h.return);break;case 30:break;default:Ma(u,h,a)}n=n.sibling}}function nh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Do(a))}function ih(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function Bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,o),n=n.sibling}function Eg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(t,n,a,o),u&2048&&ko(9,n);break;case 1:Bi(t,n,a,o);break;case 3:Bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t)));break;case 12:if(u&2048){Bi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,_=h.id,R=h.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Gt(n,n.return,G)}}else Bi(t,n,a,o);break;case 31:Bi(t,n,a,o);break;case 13:Bi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,_=n.alternate,n.memoizedState!==null?h._visibility&2?Bi(t,n,a,o):Wo(t,n):h._visibility&2?Bi(t,n,a,o):(h._visibility|=2,br(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&nh(_,n);break;case 24:Bi(t,n,a,o),u&2048&&ih(n.alternate,n);break;default:Bi(t,n,a,o)}}function br(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,_=n,R=a,G=o,re=_.flags;switch(_.tag){case 0:case 11:case 15:br(h,_,R,G,u),ko(8,_);break;case 23:break;case 22:var ye=_.stateNode;_.memoizedState!==null?ye._visibility&2?br(h,_,R,G,u):Wo(h,_):(ye._visibility|=2,br(h,_,R,G,u)),u&&re&2048&&nh(_.alternate,_);break;case 24:br(h,_,R,G,u),u&&re&2048&&ih(_.alternate,_);break;default:br(h,_,R,G,u)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Wo(a,o),u&2048&&nh(o.alternate,o);break;case 24:Wo(a,o),u&2048&&ih(o.alternate,o);break;default:Wo(a,o)}n=n.sibling}}var Yo=8192;function Tr(t,n,a){if(t.subtreeFlags&Yo)for(t=t.child;t!==null;)bg(t,n,a),t=t.sibling}function bg(t,n,a){switch(t.tag){case 26:Tr(t,n,a),t.flags&Yo&&t.memoizedState!==null&&XS(a,zi,t.memoizedState,t.memoizedProps);break;case 5:Tr(t,n,a);break;case 3:case 4:var o=zi;zi=wc(t.stateNode.containerInfo),Tr(t,n,a),zi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Yo,Yo=16777216,Tr(t,n,a),Yo=o):Tr(t,n,a));break;default:Tr(t,n,a)}}function Tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Rg(o,t)}Tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,gc(t)):qo(t);break;default:qo(t)}}function gc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Rg(o,t)}Tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),gc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,gc(n));break;default:gc(n)}t=t.sibling}}function Rg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Do(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,h=o.return;if(_g(o),o===a){wn=null;break e}if(u!==null){u.return=h,wn=u;break e}wn=h}}}var sS={getCacheForType:function(t){var n=In(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(vn).controller.signal}},rS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Qt=null,Et=null,At=0,Ht=0,mi=null,$a=!1,Ar=!1,ah=!1,Ea=0,hn=0,es=0,Xs=0,sh=0,gi=0,Rr=0,Zo=null,ti=null,rh=!1,_c=0,Cg=0,vc=1/0,yc=null,ts=null,Tn=0,ns=null,Cr=null,ba=0,oh=0,lh=null,wg=null,Ko=0,ch=null;function _i(){return(Ot&2)!==0&&At!==0?At&-At:z.T!==null?mh():vo()}function Dg(){if(gi===0)if((At&536870912)===0||Ct){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),gi=t}else gi=536870912;return t=di.current,t!==null&&(t.flags|=32),gi}function ni(t,n,a){(t===Qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(wr(t,0),is(t,At,gi,!1)),qe(t,a),((Ot&2)===0||t!==Qt)&&(t===Qt&&((Ot&2)===0&&(Xs|=a),hn===4&&is(t,At,gi,!1)),Qi(t))}function Ng(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=o?cS(t,n):fh(t,n,!0),h=o;do{if(u===0){Ar&&!o&&is(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!oS(a)){u=fh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Zo;var G=R.current.memoizedState.isDehydrated;if(G&&(wr(R,_).flags|=256),_=fh(R,_,!1),_!==2){if(ah&&!G){R.errorRecoveryDisabledLanes|=h,Xs|=h,u=4;break e}h=ti,ti=u,h!==null&&(ti===null?ti=h:ti.push.apply(ti,h))}u=_}if(h=!1,u!==2)continue}}if(u===1){wr(t,0),is(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:is(o,n,gi,!$a);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=_c+300-Fe(),10<u)){if(is(o,n,gi,!$a),xe(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=l_(Ug.bind(null,o,a,ti,yc,rh,n,gi,Xs,Rr,$a,h,"Throttled",-0,0),u);break e}Ug(o,a,ti,yc,rh,n,gi,Xs,Rr,$a,h,null,-0,0)}}break}while(!0);Qi(t)}function Ug(t,n,a,o,u,h,_,R,G,re,ye,be,ue,me){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},bg(n,h,be);var Qe=(h&62914560)===h?_c-Fe():(h&4194048)===h?Cg-Fe():0;if(Qe=WS(be,Qe),Qe!==null){ba=h,t.cancelPendingCommit=Qe(Hg.bind(null,t,n,h,a,o,u,_,R,G,ye,be,null,ue,me)),is(t,h,_,!re);return}}Hg(t,n,h,a,o,u,_,R,G)}function oS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(t,n,a,o){n&=~sh,n&=~Xs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Xe(u),_=1<<h;o[h]=-1,u&=~_}a!==0&&It(t,a,n)}function xc(){return(Ot&6)===0?(Qo(0),!1):!0}function uh(){if(Et!==null){if(Ht===0)var t=Et.return;else t=Et,da=Ps=null,Af(t),yr=null,Uo=0,t=Et;for(;t!==null;)cg(t.alternate,t),t=t.return;Et=null}}function wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,RS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ba=0,uh(),Qt=t,Et=a=fa(t.current,null),At=n,Ht=0,mi=null,$a=!1,Ar=Oe(t,n),ah=!1,Rr=gi=sh=Xs=es=hn=0,ti=Zo=null,rh=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),h=1<<u;n|=t[u],o&=~h}return Ea=n,Gl(),a}function Lg(t,n){mt=null,z.H=Ho,n===vr||n===Kl?(n=Km(),Ht=3):n===pf?(n=Km(),Ht=4):Ht=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Et===null&&(hn=1,cc(t,Ei(n,t.current)))}function Og(){var t=di.current;return t===null?!0:(At&4194048)===At?Ri===null:(At&62914560)===At||(At&536870912)!==0?t===Ri:!1}function Pg(){var t=z.H;return z.H=Ho,t===null?Ho:t}function Ig(){var t=z.A;return z.A=sS,t}function Sc(){hn=4,$a||(At&4194048)!==At&&di.current!==null||(Ar=!0),(es&134217727)===0&&(Xs&134217727)===0||Qt===null||is(Qt,At,gi,!1)}function fh(t,n,a){var o=Ot;Ot|=2;var u=Pg(),h=Ig();(Qt!==t||At!==n)&&(yc=null,wr(t,n)),n=!1;var _=hn;e:do try{if(Ht!==0&&Et!==null){var R=Et,G=mi;switch(Ht){case 8:uh(),_=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var re=Ht;if(Ht=0,mi=null,Dr(t,R,G,re),a&&Ar){_=0;break e}break;default:re=Ht,Ht=0,mi=null,Dr(t,R,G,re)}}lS(),_=hn;break}catch(ye){Lg(t,ye)}while(!0);return n&&t.shellSuspendCounter++,da=Ps=null,Ot=o,z.H=u,z.A=h,Et===null&&(Qt=null,At=0,Gl()),_}function lS(){for(;Et!==null;)zg(Et)}function cS(t,n){var a=Ot;Ot|=2;var o=Pg(),u=Ig();Qt!==t||At!==n?(yc=null,vc=Fe()+500,wr(t,n)):Ar=Oe(t,n);e:do try{if(Ht!==0&&Et!==null){n=Et;var h=mi;t:switch(Ht){case 1:Ht=0,mi=null,Dr(t,n,h,1);break;case 2:case 9:if(qm(h)){Ht=0,mi=null,Bg(n);break}n=function(){Ht!==2&&Ht!==9||Qt!==t||(Ht=7),Qi(t)},h.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:qm(h)?(Ht=0,mi=null,Bg(n)):(Ht=0,mi=null,Dr(t,n,h,7));break;case 5:var _=null;switch(Et.tag){case 26:_=Et.memoizedState;case 5:case 27:var R=Et;if(_?E_(_):R.stateNode.complete){Ht=0,mi=null;var G=R.sibling;if(G!==null)Et=G;else{var re=R.return;re!==null?(Et=re,Mc(re)):Et=null}break t}}Ht=0,mi=null,Dr(t,n,h,5);break;case 6:Ht=0,mi=null,Dr(t,n,h,6);break;case 8:uh(),hn=6;break e;default:throw Error(s(462))}}uS();break}catch(ye){Lg(t,ye)}while(!0);return da=Ps=null,z.H=o,z.A=u,Ot=a,Et!==null?0:(Qt=null,At=0,Gl(),hn)}function uS(){for(;Et!==null&&!De();)zg(Et)}function zg(t){var n=og(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?Mc(t):Et=n}function Bg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Af(n);default:cg(a,n),n=Et=Im(n,Ea),n=og(a,n,Ea)}t.memoizedProps=t.pendingProps,n===null?Mc(t):Et=n}function Dr(t,n,a,o){da=Ps=null,Af(n),yr=null,Uo=0;var u=n.return;try{if(jx(t,u,n,a,At)){hn=1,cc(t,Ei(a,t.current)),Et=null;return}}catch(h){if(u!==null)throw Et=u,h;hn=1,cc(t,Ei(a,t.current)),Et=null;return}n.flags&32768?(Ct||o===1?t=!0:Ar||(At&536870912)!==0?t=!1:($a=t=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Fg(n,t)):Mc(n)}function Mc(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,$a);return}t=n.return;var a=tS(n.alternate,n,Ea);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);hn===0&&(hn=5)}function Fg(t,n){do{var a=nS(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);hn=6,Et=null}function Hg(t,n,a,o,u,h,_,R,G){t.cancelPendingCommit=null;do Ec();while(Tn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=ju,sn(t,a,h,_,R,G),t===Qt&&(Et=Qt=null,At=0),Cr=n,ns=t,ba=a,oh=h,lh=u,wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pS(Y,function(){return Wg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=W.p,W.p=2,_=Ot,Ot|=4;try{iS(t,n,a)}finally{Ot=_,W.p=u,z.T=o}}Tn=1,Gg(),Vg(),kg()}}function Gg(){if(Tn===1){Tn=0;var t=ns,n=Cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=W.p;W.p=2;var u=Ot;Ot|=4;try{Sg(n,t);var h=Eh,_=Rm(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(_!==R&&R&&R.ownerDocument&&Am(R.ownerDocument.documentElement,R)){if(G!==null&&qu(R)){var re=G.start,ye=G.end;if(ye===void 0&&(ye=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(ye,R.value.length);else{var be=R.ownerDocument||document,ue=be&&be.defaultView||window;if(ue.getSelection){var me=ue.getSelection(),Qe=R.textContent.length,ot=Math.min(G.start,Qe),qt=G.end===void 0?ot:Math.min(G.end,Qe);!me.extend&&ot>qt&&(_=qt,qt=ot,ot=_);var te=Tm(R,ot),q=Tm(R,qt);if(te&&q&&(me.rangeCount!==1||me.anchorNode!==te.node||me.anchorOffset!==te.offset||me.focusNode!==q.node||me.focusOffset!==q.offset)){var se=be.createRange();se.setStart(te.node,te.offset),me.removeAllRanges(),ot>qt?(me.addRange(se),me.extend(q.node,q.offset)):(se.setEnd(q.node,q.offset),me.addRange(se))}}}}for(be=[],me=R;me=me.parentNode;)me.nodeType===1&&be.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Me=be[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Pc=!!Mh,Eh=Mh=null}finally{Ot=u,W.p=o,z.T=a}}t.current=n,Tn=2}}function Vg(){if(Tn===2){Tn=0;var t=ns,n=Cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=W.p;W.p=2;var u=Ot;Ot|=4;try{gg(t,n.alternate,n)}finally{Ot=u,W.p=o,z.T=a}}Tn=3}}function kg(){if(Tn===4||Tn===3){Tn=0,H();var t=ns,n=Cr,a=ba,o=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Cr=ns=null,Xg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ts=null),_o(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=W.p,W.p=2,z.T=null;try{for(var h=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];h(R.value,{componentStack:R.stack})}}finally{z.T=n,W.p=u}}(ba&3)!==0&&Ec(),Qi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===ch?Ko++:(Ko=0,ch=t):Ko=0,Qo(0)}}function Xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Ec(){return Gg(),Vg(),kg(),Wg()}function Wg(){if(Tn!==5)return!1;var t=ns,n=oh;oh=0;var a=_o(ba),o=z.T,u=W.p;try{W.p=32>a?32:a,z.T=null,a=lh,lh=null;var h=ns,_=ba;if(Tn=0,Cr=ns=null,ba=0,(Ot&6)!==0)throw Error(s(331));var R=Ot;if(Ot|=4,Ag(h.current),Eg(h,h.current,_,a),Ot=R,Qo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(he,h)}catch{}return!0}finally{W.p=u,z.T=o,Xg(t,n)}}function Yg(t,n,a){n=Ei(a,n),n=Gf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(qe(t,2),Qi(t))}function Gt(t,n,a){if(t.tag===3)Yg(t,t,a);else for(;n!==null;){if(n.tag===3){Yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ts===null||!ts.has(o))){t=Ei(a,t),a=q0(2),o=Ka(n,a,2),o!==null&&(Z0(a,o,n,t),qe(o,2),Qi(o));break}}n=n.return}}function hh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new rS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ah=!0,u.add(a),t=fS.bind(null,t,n,a),n.then(t,t))}function fS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(At&a)===a&&(hn===4||hn===3&&(At&62914560)===At&&300>Fe()-_c?(Ot&2)===0&&wr(t,0):sh|=a,Rr===At&&(Rr=0)),Qi(t)}function qg(t,n){n===0&&(n=Ae()),t=Us(t,n),t!==null&&(qe(t,n),Qi(t))}function hS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(t,a)}function dS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),qg(t,a)}function pS(t,n){return Se(t,n)}var bc=null,Nr=null,dh=!1,Tc=!1,ph=!1,as=0;function Qi(t){t!==Nr&&t.next===null&&(Nr===null?bc=Nr=t:Nr=Nr.next=t),Tc=!0,dh||(dh=!0,gS())}function Qo(t,n){if(!ph&&Tc){ph=!0;do for(var a=!1,o=bc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var _=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=u&~(_&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Jg(o,h))}else h=At,h=xe(o,o===Qt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Oe(o,h)||(a=!0,Jg(o,h));o=o.next}while(a);ph=!1}}function mS(){Zg()}function Zg(){Tc=dh=!1;var t=0;as!==0&&AS()&&(t=as);for(var n=Fe(),a=null,o=bc;o!==null;){var u=o.next,h=Kg(o,n);h===0?(o.next=null,a===null?bc=u:a.next=u,u===null&&(Nr=a)):(a=o,(t!==0||(h&3)!==0)&&(Tc=!0)),o=u}Tn!==0&&Tn!==5||Qo(t),as!==0&&(as=0)}function Kg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var _=31-Xe(h),R=1<<_,G=u[_];G===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Ve(R,n)):G<=n&&(t.expiredLanes|=R),h&=~R}if(n=Qt,a=At,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&we(o),_o(a)){case 2:case 8:a=x;break;case 32:a=Y;break;case 268435456:a=ne;break;default:a=Y}return o=Qg.bind(null,t),a=Se(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&we(o),t.callbackPriority=2,t.callbackNode=null,2}function Qg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ec()&&t.callbackNode!==a)return null;var o=At;return o=xe(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),Kg(t,Fe()),t.callbackNode!=null&&t.callbackNode===a?Qg.bind(null,t):null)}function Jg(t,n){if(Ec())return null;Ng(t,n,!0)}function gS(){CS(function(){(Ot&6)!==0?Se(D,mS):Zg()})}function mh(){if(as===0){var t=gr;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),as=t}return as}function jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cs(""+t)}function $g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _S(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=jg((u[On]||null).action),_=o.submitter;_&&(n=(n=_[On]||null)?jg(n.formAction):_.getAttribute("formAction"),n!==null&&(h=n,_=null));var R=new zl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(as!==0){var G=_?$g(u,_):new FormData(u);Pf(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=_?$g(u,_):new FormData(u),Pf(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var gh=0;gh<Ju.length;gh++){var _h=Ju[gh],vS=_h.toLowerCase(),yS=_h[0].toUpperCase()+_h.slice(1);Ii(vS,"on"+yS)}Ii(Dm,"onAnimationEnd"),Ii(Nm,"onAnimationIteration"),Ii(Um,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(Px,"onTransitionRun"),Ii(Ix,"onTransitionStart"),Ii(zx,"onTransitionCancel"),Ii(Lm,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function e_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],G=R.instance,re=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=re;try{h(u)}catch(ye){Hl(ye)}u.currentTarget=null,h=G}else for(_=0;_<o.length;_++){if(R=o[_],G=R.instance,re=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=re;try{h(u)}catch(ye){Hl(ye)}u.currentTarget=null,h=G}}}}function bt(t,n){var a=n[Ts];a===void 0&&(a=n[Ts]=new Set);var o=t+"__bubble";a.has(o)||(t_(n,t,2,!1),a.add(o))}function vh(t,n,a){var o=0;n&&(o|=4),t_(a,t,o,n)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function yh(t){if(!t[Ac]){t[Ac]=!0,Ll.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||vh(a,!1,t),vh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ac]||(n[Ac]=!0,vh("selectionchange",!1,n))}}function t_(t,n,a,o){switch(D_(n)){case 2:var u=ZS;break;case 8:u=KS;break;default:u=Oh}a=u.bind(null,n,a,t),u=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function xh(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=oa(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=h=_;continue e}R=R.parentNode}}o=o.return}rm(function(){var re=h,ye=Iu(a),be=[];e:{var ue=Om.get(t);if(ue!==void 0){var me=zl,Qe=t;switch(t){case"keypress":if(Pl(a)===0)break e;case"keydown":case"keyup":me=dx;break;case"focusin":Qe="focus",me=Vu;break;case"focusout":Qe="blur",me=Vu;break;case"beforeblur":case"afterblur":me=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=gx;break;case Dm:case Nm:case Um:me=ax;break;case Lm:me=vx;break;case"scroll":case"scrollend":me=$y;break;case"wheel":me=xx;break;case"copy":case"cut":case"paste":me=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=fm;break;case"toggle":case"beforetoggle":me=Mx}var ot=(n&4)!==0,qt=!ot&&(t==="scroll"||t==="scrollend"),te=ot?ue!==null?ue+"Capture":null:ue;ot=[];for(var q=re,se;q!==null;){var Me=q;if(se=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||se===null||te===null||(Me=yo(q,te),Me!=null&&ot.push(jo(q,Me,se))),qt)break;q=q.return}0<ot.length&&(ue=new me(ue,Qe,null,a,ye),be.push({event:ue,listeners:ot}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",ue&&a!==Pu&&(Qe=a.relatedTarget||a.fromElement)&&(oa(Qe)||Qe[Qn]))break e;if((me||ue)&&(ue=ye.window===ye?ye:(ue=ye.ownerDocument)?ue.defaultView||ue.parentWindow:window,me?(Qe=a.relatedTarget||a.toElement,me=re,Qe=Qe?oa(Qe):null,Qe!==null&&(qt=c(Qe),ot=Qe.tag,Qe!==qt||ot!==5&&ot!==27&&ot!==6)&&(Qe=null)):(me=null,Qe=re),me!==Qe)){if(ot=cm,Me="onMouseLeave",te="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ot=fm,Me="onPointerLeave",te="onPointerEnter",q="pointer"),qt=me==null?ue:Rs(me),se=Qe==null?ue:Rs(Qe),ue=new ot(Me,q+"leave",me,a,ye),ue.target=qt,ue.relatedTarget=se,Me=null,oa(ye)===re&&(ot=new ot(te,q+"enter",Qe,a,ye),ot.target=se,ot.relatedTarget=qt,Me=ot),qt=Me,me&&Qe)t:{for(ot=SS,te=me,q=Qe,se=0,Me=te;Me;Me=ot(Me))se++;Me=0;for(var at=q;at;at=ot(at))Me++;for(;0<se-Me;)te=ot(te),se--;for(;0<Me-se;)q=ot(q),Me--;for(;se--;){if(te===q||q!==null&&te===q.alternate){ot=te;break t}te=ot(te),q=ot(q)}ot=null}else ot=null;me!==null&&n_(be,ue,me,ot,!1),Qe!==null&&qt!==null&&n_(be,qt,Qe,ot,!0)}}e:{if(ue=re?Rs(re):window,me=ue.nodeName&&ue.nodeName.toLowerCase(),me==="select"||me==="input"&&ue.type==="file")var Ut=ym;else if(_m(ue))if(xm)Ut=Ux;else{Ut=Dx;var je=wx}else me=ue.nodeName,!me||me.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?re&&Pt(re.elementType)&&(Ut=ym):Ut=Nx;if(Ut&&(Ut=Ut(t,re))){vm(be,Ut,a,ye);break e}je&&je(t,ue,re),t==="focusout"&&re&&ue.type==="number"&&re.memoizedProps.value!=null&&Mt(ue,"number",ue.value)}switch(je=re?Rs(re):window,t){case"focusin":(_m(je)||je.contentEditable==="true")&&(lr=je,Zu=re,Ro=null);break;case"focusout":Ro=Zu=lr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Cm(be,a,ye);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Cm(be,a,ye)}var gt;if(Xu)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else or?mm(t,a)&&(Rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(hm&&a.locale!=="ko"&&(or||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&or&&(gt=om()):(Va=ye,Fu="value"in Va?Va.value:Va.textContent,or=!0)),je=Rc(re,Rt),0<je.length&&(Rt=new um(Rt,t,null,a,ye),be.push({event:Rt,listeners:je}),gt?Rt.data=gt:(gt=gm(a),gt!==null&&(Rt.data=gt)))),(gt=bx?Tx(t,a):Ax(t,a))&&(Rt=Rc(re,"onBeforeInput"),0<Rt.length&&(je=new um("onBeforeInput","beforeinput",null,a,ye),be.push({event:je,listeners:Rt}),je.data=gt)),_S(be,t,re,a,ye)}e_(be,n)})}function jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=yo(t,a),u!=null&&o.unshift(jo(t,u,h)),u=yo(t,n),u!=null&&o.push(jo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function SS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n_(t,n,a,o,u){for(var h=n._reactName,_=[];a!==null&&a!==o;){var R=a,G=R.alternate,re=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||re===null||(G=re,u?(re=yo(a,h),re!=null&&_.unshift(jo(a,re,G))):u||(re=yo(a,h),re!=null&&_.push(jo(a,re,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var MS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function i_(t){return(typeof t=="string"?t:""+t).replace(MS,`
`).replace(ES,"")}function a_(t,n){return n=i_(n),i_(t)===n}function Yt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":Ke(t,"class",o);break;case"tabIndex":Ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ke(t,a,o);break;case"style":Pi(t,o,h);break;case"data":if(n!=="object"){Ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",u.name,u,null),Yt(t,n,"formEncType",u.formEncType,u,null),Yt(t,n,"formMethod",u.formMethod,u,null),Yt(t,n,"formTarget",u.formTarget,u,null)):(Yt(t,n,"encType",u.encType,u,null),Yt(t,n,"method",u.method,u,null),Yt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Cs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":bt("beforetoggle",t),bt("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yi.get(a)||a,ze(t,a,o))}}function Sh(t,n,a,o,u,h){switch(a){case"style":Pi(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[On]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var _=a[h];if(_!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,h,_,a,null)}}u&&Yt(t,n,"srcSet",a.srcSet,a,null),o&&Yt(t,n,"src",a.src,a,null);return;case"input":bt("invalid",t);var R=h=_=u=null,G=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ye=a[o];if(ye!=null)switch(o){case"name":u=ye;break;case"type":_=ye;break;case"checked":G=ye;break;case"defaultChecked":re=ye;break;case"value":h=ye;break;case"defaultValue":R=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:Yt(t,n,o,ye,a,null)}}Gn(t,h,R,G,re,_,u,!1);return;case"select":bt("invalid",t),o=_=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Yt(t,n,u,R,a,null)}n=h,a=_,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":bt("invalid",t),h=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Yt(t,n,_,R,a,null)}Oi(t,o,u,h);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Yt(t,n,G,o,a,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(o=0;o<Jo.length;o++)bt(Jo[o],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,re,o,a,null)}return;default:if(Pt(n)){for(ye in a)a.hasOwnProperty(ye)&&(o=a[ye],o!==void 0&&Sh(t,n,ye,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Yt(t,n,R,o,a,null))}function bS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,_=null,R=null,G=null,re=null,ye=null;for(me in a){var be=a[me];if(a.hasOwnProperty(me)&&be!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":G=be;default:o.hasOwnProperty(me)||Yt(t,n,me,null,o,be)}}for(var ue in o){var me=o[ue];if(be=a[ue],o.hasOwnProperty(ue)&&(me!=null||be!=null))switch(ue){case"type":h=me;break;case"name":u=me;break;case"checked":re=me;break;case"defaultChecked":ye=me;break;case"value":_=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:me!==be&&Yt(t,n,ue,me,o,be)}}We(t,_,R,G,re,ye,h,u);return;case"select":me=_=R=ue=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":me=G;default:o.hasOwnProperty(h)||Yt(t,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ue=h;break;case"defaultValue":R=h;break;case"multiple":_=h;default:h!==G&&Yt(t,n,u,h,o,G)}n=R,a=_,o=me,ue!=null?bn(t,!!a,ue,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":me=ue=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],h=a[_],o.hasOwnProperty(_)&&(u!=null||h!=null))switch(_){case"value":ue=u;break;case"defaultValue":me=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Yt(t,n,_,u,o,h)}ci(t,ue,me);return;case"option":for(var Qe in a)if(ue=a[Qe],a.hasOwnProperty(Qe)&&ue!=null&&!o.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:Yt(t,n,Qe,null,o,ue)}for(G in o)if(ue=o[G],me=a[G],o.hasOwnProperty(G)&&ue!==me&&(ue!=null||me!=null))switch(G){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Yt(t,n,G,ue,o,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)ue=a[ot],a.hasOwnProperty(ot)&&ue!=null&&!o.hasOwnProperty(ot)&&Yt(t,n,ot,null,o,ue);for(re in o)if(ue=o[re],me=a[re],o.hasOwnProperty(re)&&ue!==me&&(ue!=null||me!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Yt(t,n,re,ue,o,me)}return;default:if(Pt(n)){for(var qt in a)ue=a[qt],a.hasOwnProperty(qt)&&ue!==void 0&&!o.hasOwnProperty(qt)&&Sh(t,n,qt,void 0,o,ue);for(ye in o)ue=o[ye],me=a[ye],!o.hasOwnProperty(ye)||ue===me||ue===void 0&&me===void 0||Sh(t,n,ye,ue,o,me);return}}for(var te in a)ue=a[te],a.hasOwnProperty(te)&&ue!=null&&!o.hasOwnProperty(te)&&Yt(t,n,te,null,o,ue);for(be in o)ue=o[be],me=a[be],!o.hasOwnProperty(be)||ue===me||ue==null&&me==null||Yt(t,n,be,ue,o,me)}function s_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,_=u.initiatorType,R=u.duration;if(h&&R&&s_(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],re=G.startTime;if(re>R)break;var ye=G.transferSize,be=G.initiatorType;ye&&s_(be)&&(G=G.responseEnd,_+=ye*(G<R?1:(R-re)/(G-re)))}if(--o,n+=8*(h+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mh=null,Eh=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function r_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Th=null;function AS(){var t=window.event;return t&&t.type==="popstate"?t===Th?!1:(Th=t,!0):(Th=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,CS=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(t){return c_.resolve(null).then(t).catch(wS)}:l_;function wS(t){setTimeout(function(){throw t})}function ss(t){return t==="head"}function u_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")$o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,$o(a);for(var h=a.firstChild;h;){var _=h.nextSibling,R=h.nodeName;h[Ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=_}}else a==="body"&&$o(t.ownerDocument.body);a=u}while(a);Pr(n)}function f_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Ah(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ah(a),Fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function DS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function NS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function h_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function Rh(t){return t.data==="$?"||t.data==="$~"}function Ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function US(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wh=null;function d_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function p_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function m_(t,n,a){switch(n=Cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function $o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Fa(t)}var wi=new Map,g_=new Set;function wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=W.d;W.d={f:LS,r:OS,D:PS,C:IS,L:zS,m:BS,X:HS,S:FS,M:GS};function LS(){var t=Ta.f(),n=xc();return t||n}function OS(t){var n=la(t);n!==null&&n.tag===5&&n.type==="form"?L0(n):Ta.r(t)}var Ur=typeof document>"u"?null:document;function __(t,n,a){var o=Ur;if(o&&typeof n=="string"&&n){var u=Bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g_.has(u)||(g_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),_n(n),o.head.appendChild(n)))}}function PS(t){Ta.D(t),__("dns-prefetch",t,null)}function IS(t,n){Ta.C(t,n),__("preconnect",t,n)}function zS(t,n,a){Ta.L(t,n,a);var o=Ur;if(o&&t&&n){var u='link[rel="preload"][as="'+Bt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Bt(a.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var h=u;switch(n){case"style":h=Lr(t);break;case"script":h=Or(t)}wi.has(h)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(el(h))||n==="script"&&o.querySelector(tl(h))||(n=o.createElement("link"),Bn(n,"link",t),_n(n),o.head.appendChild(n)))}}function BS(t,n){Ta.m(t,n);var a=Ur;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Or(t)}if(!wi.has(h)&&(t=S({rel:"modulepreload",href:t},n),wi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tl(h)))return}o=a.createElement("link"),Bn(o,"link",t),_n(o),a.head.appendChild(o)}}}function FS(t,n,a){Ta.S(t,n,a);var o=Ur;if(o&&t){var u=Ha(o).hoistableStyles,h=Lr(t);n=n||"default";var _=u.get(h);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(el(h)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(h))&&Dh(t,a);var G=_=o.createElement("link");_n(G),Bn(G,"link",t),G._p=new Promise(function(re,ye){G.onload=re,G.onerror=ye}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Dc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(h,_)}}}function HS(t,n){Ta.X(t,n);var a=Ur;if(a&&t){var o=Ha(a).hoistableScripts,u=Or(t),h=o.get(u);h||(h=a.querySelector(tl(u)),h||(t=S({src:t,async:!0},n),(n=wi.get(u))&&Nh(t,n),h=a.createElement("script"),_n(h),Bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function GS(t,n){Ta.M(t,n);var a=Ur;if(a&&t){var o=Ha(a).hoistableScripts,u=Or(t),h=o.get(u);h||(h=a.querySelector(tl(u)),h||(t=S({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&Nh(t,n),h=a.createElement("script"),_n(h),Bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function v_(t,n,a,o){var u=(u=ae.current)?wc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Lr(a.href),a=Ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Lr(a.href);var h=Ha(u).hoistableStyles,_=h.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,_),(h=u.querySelector(el(t)))&&!h._p&&(_.instance=h,_.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),h||VS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Or(a),a=Ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Lr(t){return'href="'+Bt(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function y_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function VS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),_n(n),t.head.appendChild(n))}function Or(t){return'[src="'+Bt(t)+'"]'}function tl(t){return"script[async]"+t}function x_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(o)return n.instance=o,_n(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_n(o),Bn(o,"style",u),Dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Lr(a.href);var h=t.querySelector(el(u));if(h)return n.state.loading|=4,n.instance=h,_n(h),h;o=y_(a),(u=wi.get(u))&&Dh(o,u),h=(t.ownerDocument||t).createElement("link"),_n(h);var _=h;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Bn(h,"link",o),n.state.loading|=4,Dc(h,a.precedence,t),n.instance=h;case"script":return h=Or(a.src),(u=t.querySelector(tl(h)))?(n.instance=u,_n(u),u):(o=a,(u=wi.get(h))&&(o=S({},a),Nh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),_n(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Dc(o,a.precedence,t));return n.instance}function Dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Dh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nc=null;function S_(t,n,a){if(Nc===null){var o=new Map,u=Nc=new Map;u.set(a,o)}else u=Nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ba]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var _=h.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(h):o.set(_,[h])}}return o}function M_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function kS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function XS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Lr(o.href),h=n.querySelector(el(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,_n(h);return}h=n.ownerDocument||n,o=y_(o),(u=wi.get(u))&&Dh(o,u),h=h.createElement("link"),_n(h);var _=h;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Bn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Uc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uh=0;function WS(t,n){return t.stylesheets&&t.count===0&&Oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Uh===0&&(Uh=62500*TS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Uh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lc=null;function Oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lc=new Map,n.forEach(YS,t),Lc=null,Uc.call(t))}function YS(t,n){if(!(n.state.loading&4)){var a=Lc.get(t);if(a)var o=a.get(null);else{a=new Map,Lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var _=u[h];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),h=a.get(_)||o,h===o&&a.set(null,u),a.set(_,u),this.count++,o=Uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var nl={$$typeof:F,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function qS(t,n,a,o,u,h,_,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function b_(t,n,a,o,u,h,_,R,G,re,ye,be){return t=new qS(t,n,a,_,G,re,ye,be,R),n=1,h===!0&&(n|=24),h=hi(3,null,null,n),t.current=h,h.stateNode=t,n=ff(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},mf(h),t}function T_(t){return t?(t=fr,t):fr}function A_(t,n,a,o,u,h){u=T_(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ka(t,o,n),a!==null&&(ni(a,t,n),Oo(a,t,n))}function R_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Lh(t,n){R_(t,n),(t=t.alternate)&&R_(t,n)}function C_(t){if(t.tag===13||t.tag===31){var n=Us(t,67108864);n!==null&&ni(n,t,67108864),Lh(t,67108864)}}function w_(t){if(t.tag===13||t.tag===31){var n=_i();n=go(n);var a=Us(t,n);a!==null&&ni(a,t,n),Lh(t,n)}}var Pc=!0;function ZS(t,n,a,o){var u=z.T;z.T=null;var h=W.p;try{W.p=2,Oh(t,n,a,o)}finally{W.p=h,z.T=u}}function KS(t,n,a,o){var u=z.T;z.T=null;var h=W.p;try{W.p=8,Oh(t,n,a,o)}finally{W.p=h,z.T=u}}function Oh(t,n,a,o){if(Pc){var u=Ph(o);if(u===null)xh(t,n,o,Ic,a),N_(t,o);else if(JS(u,t,n,a,o))o.stopPropagation();else if(N_(t,o),n&4&&-1<QS.indexOf(t)){for(;u!==null;){var h=la(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var _=Ue(h.pendingLanes);if(_!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-Xe(_);R.entanglements[1]|=G,_&=~G}Qi(h),(Ot&6)===0&&(vc=Fe()+500,Qo(0))}}break;case 31:case 13:R=Us(h,2),R!==null&&ni(R,h,2),xc(),Lh(h,2)}if(h=Ph(o),h===null&&xh(t,n,o,Ic,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else xh(t,n,o,null,a)}}function Ph(t){return t=Iu(t),Ih(t)}var Ic=null;function Ih(t){if(Ic=null,t=oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ic=t,null}function D_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pe()){case D:return 2;case x:return 8;case Y:case $:return 32;case ne:return 268435456;default:return 32}default:return 32}}var zh=!1,rs=null,os=null,ls=null,il=new Map,al=new Map,cs=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N_(t,n){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=la(n),n!==null&&C_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function JS(t,n,a,o,u){switch(n){case"focusin":return rs=sl(rs,t,n,a,o,u),!0;case"dragenter":return os=sl(os,t,n,a,o,u),!0;case"mouseover":return ls=sl(ls,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return il.set(h,sl(il.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,al.set(h,sl(al.get(h)||null,t,n,a,o,u)),!0}return!1}function U_(t){var n=oa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ar(t.priority,function(){w_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,ar(t.priority,function(){w_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Pu=o,a.target.dispatchEvent(o),Pu=null}else return n=la(a),n!==null&&C_(n),t.blockedOn=a,!1;n.shift()}return!0}function L_(t,n,a){zc(t)&&a.delete(n)}function jS(){zh=!1,rs!==null&&zc(rs)&&(rs=null),os!==null&&zc(os)&&(os=null),ls!==null&&zc(ls)&&(ls=null),il.forEach(L_),al.forEach(L_)}function Bc(t,n){t.blockedOn===n&&(t.blockedOn=null,zh||(zh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jS)))}var Fc=null;function O_(t){Fc!==t&&(Fc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ih(o||a)===null)continue;break}var h=la(a);h!==null&&(t.splice(n,3),n-=3,Pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Pr(t){function n(G){return Bc(G,t)}rs!==null&&Bc(rs,t),os!==null&&Bc(os,t),ls!==null&&Bc(ls,t),il.forEach(n),al.forEach(n);for(var a=0;a<cs.length;a++){var o=cs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)U_(a),a.blockedOn===null&&cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],_=u[On]||null;if(typeof h=="function")_||O_(a);else if(_){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,_=h[On]||null)R=_.formAction;else if(Ih(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),O_(a)}}}function P_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bh(t){this._internalRoot=t}Hc.prototype.render=Bh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();A_(a,o,t,n,null,null)},Hc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;A_(t.current,2,null,t,null,null),xc(),n[Qn]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=vo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,t),a===0&&U_(t)}};var I_=e.version;if(I_!=="19.2.8")throw Error(s(527,I_,"19.2.8"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var $S={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{he=Gc.inject($S),ge=Gc}catch{}}return rl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=k0,h=X0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=b_(t,1,!1,null,null,a,o,null,u,h,_,P_),t[Qn]=n.current,yh(t),new Bh(n)},rl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=k0,_=X0,R=W0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=b_(t,1,!0,n,a??null,o,u,G,h,_,R,P_),n.context=T_(null),a=n.current,o=_i(),o=go(o),u=Za(o),u.callback=null,Ka(a,u,o),a=o,n.current.lanes=a,qe(n,a),Qi(n),t[Qn]=n.current,yh(t),new Hc(n)},rl.version="19.2.8",rl}var X_;function lM(){if(X_)return Hh.exports;X_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Hh.exports=oM(),Hh.exports}var cM=lM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ay=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=ct.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>ct.createElement("svg",{ref:m,...fM,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:ay("lucide",l),...p},[...f.map(([d,v])=>ct.createElement(d,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=(r,e)=>{const i=ct.forwardRef(({className:s,...l},c)=>ct.createElement(hM,{ref:c,iconNode:e,className:ay(`lucide-${uM(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=an("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=an("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=an("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=an("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=an("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=an("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=an("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=an("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=an("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=an("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=an("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=an("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=an("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=an("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=an("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=an("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=an("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=an("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=an("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=an("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=an("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=an("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=an("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=an("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=an("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="185",io={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,K_=1,DM=2,yl=1,NM=2,_l=3,xs=0,ri=1,ea=2,La=0,ao=1,Q_=2,J_=3,j_=4,UM=5,Ks=100,LM=101,OM=102,PM=103,IM=104,zM=200,BM=201,FM=202,HM=203,Rd=204,Cd=205,GM=206,VM=207,kM=208,XM=209,WM=210,YM=211,qM=212,ZM=213,KM=214,wd=0,Dd=1,Nd=2,lo=3,Ud=4,Ld=5,Od=6,Pd=7,oy=0,QM=1,JM=2,ia=0,ly=1,cy=2,uy=3,Np=4,fy=5,hy=6,dy=7,py=300,tr=301,co=302,Xh=303,Wh=304,Du=306,Id=1e3,Ua=1001,zd=1002,Hn=1003,jM=1004,kc=1005,Nn=1006,Yh=1007,js=1008,xi=1009,my=1010,gy=1011,bl=1012,Up=1013,sa=1014,ta=1015,Ia=1016,Lp=1017,Op=1018,Tl=1020,_y=35902,vy=35899,yy=1021,xy=1022,ki=1023,za=1026,$s=1027,Sy=1028,Pp=1029,nr=1030,Ip=1031,zp=1033,_u=33776,vu=33777,yu=33778,xu=33779,Bd=35840,Fd=35841,Hd=35842,Gd=35843,Vd=36196,kd=37492,Xd=37496,Wd=37488,Yd=37489,Mu=37490,qd=37491,Zd=37808,Kd=37809,Qd=37810,Jd=37811,jd=37812,$d=37813,ep=37814,tp=37815,np=37816,ip=37817,ap=37818,sp=37819,rp=37820,op=37821,lp=36492,cp=36494,up=36495,fp=36283,hp=36284,Eu=36285,dp=36286,$M=3200,pp=0,eE=1,vs="",ai="srgb",bu="srgb-linear",Tu="linear",Vt="srgb",Ir=7680,$_=519,tE=512,nE=513,iE=514,Bp=515,aE=516,sE=517,Fp=518,rE=519,mp=35044,ev="300 es",na=2e3,Al=2001;function oE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Au(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lE(){const r=Au("canvas");return r.style.display="block",r}const tv={};function Ru(...r){const e="THREE."+r.shift();console.log(e,...r)}function My(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=My(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=My(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function so(...r){const e=r.join(" ");e in tv||(tv[e]=!0,lt(...r))}function cE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const uE={[wd]:Dd,[Nd]:Od,[Ud]:Pd,[lo]:Ld,[Dd]:wd,[Od]:Nd,[Pd]:Ud,[Ld]:lo};class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nv=1234567;const xl=Math.PI/180,Rl=180/Math.PI;function Oa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function Hp(r,e){return(r%e+e)%e}function fE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function hE(r,e,i){return r!==e?(i-r)/(e-r):0}function Sl(r,e,i){return(1-i)*r+i*e}function dE(r,e,i,s){return Sl(r,e,1-Math.exp(-i*s))}function pE(r,e=1){return e-Math.abs(Hp(r,e*2)-e)}function mE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function gE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function _E(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vE(r,e){return r+Math.random()*(e-r)}function yE(r){return r*(.5-Math.random())}function xE(r){r!==void 0&&(nv=r);let e=nv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SE(r){return r*xl}function ME(r){return r*Rl}function EE(r){return(r&r-1)===0&&r!==0}function bE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function AE(r,e,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((e+s)/2),v=f((e+s)/2),S=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),T=f((s-e)/2);switch(l){case"XYX":r.set(p*v,m*S,m*g,p*d);break;case"YZY":r.set(m*g,p*v,m*S,p*d);break;case"ZXZ":r.set(m*S,m*g,p*v,p*d);break;case"XZX":r.set(p*v,m*T,m*M,p*d);break;case"YXY":r.set(m*M,p*v,m*T,p*d);break;case"ZYZ":r.set(m*T,m*M,p*v,p*d);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gp={DEG2RAD:xl,RAD2DEG:Rl,generateUUID:Oa,clamp:St,euclideanModulo:Hp,mapLinear:fE,inverseLerp:hE,lerp:Sl,damp:dE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:_E,randFloat:vE,randFloatSpread:yE,seededRandom:xE,degToRad:SE,radToDeg:ME,isPowerOfTwo:EE,ceilPowerOfTwo:bE,floorPowerOfTwo:TE,setQuaternionFromProperEuler:AE,normalize:kt,denormalize:Vi},em=class em{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};em.prototype.isVector2=!0;let st=em;class Ss{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[f+0],M=c[f+1],T=c[f+2],C=c[f+3];if(S!==C||m!==g||d!==M||v!==T){let E=m*g+d*M+v*T+S*C;E<0&&(g=-g,M=-M,T=-T,C=-C,E=-E);let y=1-p;if(E<.9995){const B=Math.acos(E),F=Math.sin(B);y=Math.sin(y*B)/F,p=Math.sin(p*B)/F,m=m*y+g*p,d=d*y+M*p,v=v*y+T*p,S=S*y+C*p}else{m=m*y+g*p,d=d*y+M*p,v=v*y+T*p,S=S*y+C*p;const B=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=B,d*=B,v*=B,S*=B}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[f],g=c[f+1],M=c[f+2],T=c[f+3];return e[i]=p*T+v*S+m*M-d*g,e[i+1]=m*T+v*g+d*S-p*M,e[i+2]=d*T+v*M+p*g-m*S,e[i+3]=v*T-p*S-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*v*S+d*M*T,this._y=d*M*S-g*v*T,this._z=d*v*T+g*M*S,this._w=d*v*S-g*M*T;break;case"YXZ":this._x=g*v*S+d*M*T,this._y=d*M*S-g*v*T,this._z=d*v*T-g*M*S,this._w=d*v*S+g*M*T;break;case"ZXY":this._x=g*v*S-d*M*T,this._y=d*M*S+g*v*T,this._z=d*v*T+g*M*S,this._w=d*v*S-g*M*T;break;case"ZYX":this._x=g*v*S-d*M*T,this._y=d*M*S+g*v*T,this._z=d*v*T-g*M*S,this._w=d*v*S+g*M*T;break;case"YZX":this._x=g*v*S+d*M*T,this._y=d*M*S+g*v*T,this._z=d*v*T-g*M*S,this._w=d*v*S-g*M*T;break;case"XZY":this._x=g*v*S-d*M*T,this._y=d*M*S-g*v*T,this._z=d*v*T+g*M*S,this._w=d*v*S+g*M*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-d)*M,this._z=(f-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+d)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(f-l)/M,this._x=(c+d)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+f*p+l*d-c*m,this._y=l*v+f*m+c*p-s*d,this._z=c*v+f*d+s*m-l*p,this._w=f*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tm=class tm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,d=2*(f*l-p*s),v=2*(p*i-c*l),S=2*(c*s-f*i);return this.x=i+m*d+f*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-f*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tm.prototype.isVector3=!0;let ee=tm;const qh=new ee,iv=new Ss,nm=class nm{constructor(e,i,s,l,c,f,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,d)}set(e,i,s,l,c,f,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],M=s[5],T=s[8],C=l[0],E=l[3],y=l[6],B=l[1],F=l[4],w=l[7],I=l[2],U=l[5],O=l[8];return c[0]=f*C+p*B+m*I,c[3]=f*E+p*F+m*U,c[6]=f*y+p*w+m*O,c[1]=d*C+v*B+S*I,c[4]=d*E+v*F+S*U,c[7]=d*y+v*w+S*O,c[2]=g*C+M*B+T*I,c[5]=g*E+M*F+T*U,c[8]=g*y+M*w+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*f*v-i*p*d-s*c*v+s*p*m+l*c*d-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*f-p*d,g=p*m-v*c,M=d*c-f*m,T=i*S+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(l*d-v*s)*C,e[2]=(p*s-l*f)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-d*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+e,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(e,i){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zh.makeScale(e,i)),this}rotate(e){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zh.makeRotation(-e)),this}translate(e,i){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nm.prototype.isMatrix3=!0;let ht=nm;const Zh=new ht,av=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const r={enabled:!0,workingColorSpace:bu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=ro(l.r),l.g=ro(l.g),l.b=ro(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[bu]:{primaries:e,whitePoint:s,transfer:Tu,toXYZ:av,fromXYZ:sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:av,fromXYZ:sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const Dt=RE();function Pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class CE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zr===void 0&&(zr=Au("canvas")),zr.width=e.width,zr.height=e.height;const l=zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=zr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Au("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Pa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Kh(l[f].image)):c.push(Kh(l[f]))}else c=Kh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Kh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?CE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let DE=0;const Qh=new ee;class Wn extends bs{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ua,l=Ua,c=Nn,f=js,p=ki,m=xi,d=Wn.DEFAULT_ANISOTROPY,v=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Oa(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=py;Wn.DEFAULT_ANISOTROPY=1;const im=class im{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],S=m[8],g=m[1],M=m[5],T=m[9],C=m[2],E=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-E)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+E)<.1&&Math.abs(d+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(d+1)/2,w=(M+1)/2,I=(y+1)/2,U=(v+g)/4,O=(S+C)/4,b=(T+E)/4;return F>w&&F>I?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=U/s,c=O/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=b/c),this.set(s,l,c,i),this}let B=Math.sqrt((E-T)*(E-T)+(S-C)*(S-C)+(g-v)*(g-v));return Math.abs(B)<.001&&(B=1),this.x=(E-T)/B,this.y=(S-C)/B,this.z=(g-v)/B,this.w=Math.acos((d+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};im.prototype.isVector4=!0;let un=im;class NE extends bs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Wn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends NE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ey extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=class wu{constructor(e,i,s,l,c,f,p,m,d,v,S,g,M,T,C,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,d,v,S,g,M,T,C,E)}set(e,i,s,l,c,f,p,m,d,v,S,g,M,T,C,E){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=d,y[6]=v,y[10]=S,y[14]=g,y[3]=M,y[7]=T,y[11]=C,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),f=1/Br.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=f*v,M=f*S,T=p*v,C=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=M+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+M*d,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,M=m*S,T=d*v,C=d*S;i[0]=g+C*p,i[4]=T*p-M,i[8]=f*d,i[1]=f*S,i[5]=f*v,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,M=m*S,T=d*v,C=d*S;i[0]=g-C*p,i[4]=-f*S,i[8]=T+M*p,i[1]=M+T*p,i[5]=f*v,i[9]=C-g*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,M=f*S,T=p*v,C=p*S;i[0]=m*v,i[4]=T*d-M,i[8]=g*d+C,i[1]=m*S,i[5]=C*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*d,T=p*m,C=p*d;i[0]=m*v,i[4]=C-g*S,i[8]=T*S+M,i[1]=S,i[5]=f*v,i[9]=-p*v,i[2]=-d*v,i[6]=M*S+T,i[10]=g-C*S}else if(e.order==="XZY"){const g=f*m,M=f*d,T=p*m,C=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+C,i[5]=f*v,i[9]=M*S-T,i[2]=T*S-M,i[6]=p*v,i[10]=C*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,OE)}lookAt(e,i,s){const l=this.elements;return vi.subVectors(e,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),fs.crossVectors(s,vi),fs.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),fs.crossVectors(s,vi)),fs.normalize(),Xc.crossVectors(vi,fs),l[0]=fs.x,l[4]=Xc.x,l[8]=vi.x,l[1]=fs.y,l[5]=Xc.y,l[9]=vi.y,l[2]=fs.z,l[6]=Xc.z,l[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],M=s[13],T=s[2],C=s[6],E=s[10],y=s[14],B=s[3],F=s[7],w=s[11],I=s[15],U=l[0],O=l[4],b=l[8],L=l[12],k=l[1],V=l[5],Q=l[9],fe=l[13],de=l[2],ie=l[6],z=l[10],W=l[14],K=l[3],pe=l[7],Te=l[11],P=l[15];return c[0]=f*U+p*k+m*de+d*K,c[4]=f*O+p*V+m*ie+d*pe,c[8]=f*b+p*Q+m*z+d*Te,c[12]=f*L+p*fe+m*W+d*P,c[1]=v*U+S*k+g*de+M*K,c[5]=v*O+S*V+g*ie+M*pe,c[9]=v*b+S*Q+g*z+M*Te,c[13]=v*L+S*fe+g*W+M*P,c[2]=T*U+C*k+E*de+y*K,c[6]=T*O+C*V+E*ie+y*pe,c[10]=T*b+C*Q+E*z+y*Te,c[14]=T*L+C*fe+E*W+y*P,c[3]=B*U+F*k+w*de+I*K,c[7]=B*O+F*V+w*ie+I*pe,c[11]=B*b+F*Q+w*z+I*Te,c[15]=B*L+F*fe+w*W+I*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],g=e[10],M=e[14],T=e[3],C=e[7],E=e[11],y=e[15],B=m*M-d*g,F=p*M-d*S,w=p*g-m*S,I=f*M-d*v,U=f*g-m*v,O=f*S-p*v;return i*(C*B-E*F+y*w)-s*(T*B-E*I+y*U)+l*(T*F-C*I+y*O)-c*(T*w-C*U+E*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(f*v-p*d)-s*(c*v-p*m)+l*(c*d-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],g=e[10],M=e[11],T=e[12],C=e[13],E=e[14],y=e[15],B=i*p-s*f,F=i*m-l*f,w=i*d-c*f,I=s*m-l*p,U=s*d-c*p,O=l*d-c*m,b=v*C-S*T,L=v*E-g*T,k=v*y-M*T,V=S*E-g*C,Q=S*y-M*C,fe=g*y-M*E,de=B*fe-F*Q+w*V+I*k-U*L+O*b;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/de;return e[0]=(p*fe-m*Q+d*V)*ie,e[1]=(l*Q-s*fe-c*V)*ie,e[2]=(C*O-E*U+y*I)*ie,e[3]=(g*U-S*O-M*I)*ie,e[4]=(m*k-f*fe-d*L)*ie,e[5]=(i*fe-l*k+c*L)*ie,e[6]=(E*w-T*O-y*F)*ie,e[7]=(v*O-g*w+M*F)*ie,e[8]=(f*Q-p*k+d*b)*ie,e[9]=(s*k-i*Q-c*b)*ie,e[10]=(T*U-C*w+y*B)*ie,e[11]=(S*w-v*U-M*B)*ie,e[12]=(p*L-f*V-m*b)*ie,e[13]=(i*V-s*L+l*b)*ie,e[14]=(C*F-T*I-E*B)*ie,e[15]=(v*I-S*F+g*B)*ie,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,d=c*f,v=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*f,0,d*m-l*p,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,v=f+f,S=p+p,g=c*d,M=c*v,T=c*S,C=f*v,E=f*S,y=p*S,B=m*d,F=m*v,w=m*S,I=s.x,U=s.y,O=s.z;return l[0]=(1-(C+y))*I,l[1]=(M+w)*I,l[2]=(T-F)*I,l[3]=0,l[4]=(M-w)*U,l[5]=(1-(g+y))*U,l[6]=(E+B)*U,l[7]=0,l[8]=(T+F)*O,l[9]=(E-B)*O,l[10]=(1-(g+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Br.set(l[0],l[1],l[2]).length();const p=Br.set(l[4],l[5],l[6]).length(),m=Br.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Fi.copy(this);const d=1/f,v=1/p,S=1/m;return Fi.elements[0]*=d,Fi.elements[1]*=d,Fi.elements[2]*=d,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=S,Fi.elements[9]*=S,Fi.elements[10]*=S,i.setFromRotationMatrix(Fi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=na,m=!1){const d=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===na)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Al)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=na,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===na)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===Al)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};wu.prototype.isMatrix4=!0;let cn=wu;const Br=new ee,Fi=new cn,LE=new ee(0,0,0),OE=new ee(1,1,1),fs=new ee,Xc=new ee,vi=new ee,rv=new cn,ov=new Ss;class Ms{constructor(e=0,i=0,s=0,l=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ov.setFromEuler(this),this.setFromQuaternion(ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const lv=new ee,Fr=new Ss,Aa=new cn,Wc=new ee,ol=new ee,IE=new ee,zE=new Ss,cv=new ee(1,0,0),uv=new ee(0,1,0),fv=new ee(0,0,1),hv={type:"added"},BE={type:"removed"},Hr={type:"childadded",child:null},Jh={type:"childremoved",child:null};class Un extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new ee,i=new Ms,s=new Ss,l=new ee(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ht}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,i){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Wc.copy(e):Wc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ol,Wc,this.up):Aa.lookAt(Wc,ol,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hv),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BE),Jh.child=e,this.dispatchEvent(Jh),Jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hv),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),d=f(e.textures),v=f(e.images),S=f(e.shapes),g=f(e.skeletons),M=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new ee(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const C of e.hand.values()){const E=i.getJointPose(C,s),y=this._getHandJoint(d,C);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Na;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const by={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Yc={h:0,s:0,l:0};function $h(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Tt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Dt.workingColorSpace){if(e=Hp(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=$h(f,c,e+1/3),this.g=$h(f,c,e),this.b=$h(f,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function s(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const s=by[e.toLowerCase()];return s!==void 0?this.setHex(s,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Dt.workingToColorSpace(Xn.copy(this),e),Math.round(St(Xn.r*255,0,255))*65536+Math.round(St(Xn.g*255,0,255))*256+Math.round(St(Xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+f)/2;if(p===f)m=0,d=0;else{const S=f-p;switch(d=v<=.5?S/(f+p):S/(2-f-p),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ai){Dt.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(Yc);const s=Sl(hs.h,Yc.h,i),l=Sl(hs.s,Yc.s,i),c=Sl(hs.l,Yc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Tt;Tt.NAMES=by;class kp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=i,this.far=s}clone(){return new kp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HE extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hi=new ee,Ra=new ee,ed=new ee,Ca=new ee,Gr=new ee,Vr=new ee,dv=new ee,td=new ee,nd=new ee,id=new ee,ad=new un,sd=new un,rd=new un;class Li{constructor(e=new ee,i=new ee,s=new ee){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Hi.subVectors(e,i),l.cross(Hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Hi.subVectors(l,i),Ra.subVectors(s,i),ed.subVectors(e,i);const f=Hi.dot(Hi),p=Hi.dot(Ra),m=Hi.dot(ed),d=Ra.dot(Ra),v=Ra.dot(ed),S=f*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(d*m-p*v)*g,T=(f*v-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(f,Ca.y),m.addScaledVector(p,Ca.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return ad.setScalar(0),sd.setScalar(0),rd.setScalar(0),ad.fromBufferAttribute(e,i),sd.fromBufferAttribute(e,s),rd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(ad,c.x),f.addScaledVector(sd,c.y),f.addScaledVector(rd,c.z),f}static isFrontFacing(e,i,s,l){return Hi.subVectors(s,i),Ra.subVectors(e,i),Hi.cross(Ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Hi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Gr.subVectors(l,s),Vr.subVectors(c,s),td.subVectors(e,s);const m=Gr.dot(td),d=Vr.dot(td);if(m<=0&&d<=0)return i.copy(s);nd.subVectors(e,l);const v=Gr.dot(nd),S=Vr.dot(nd);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Gr,f);id.subVectors(e,c);const M=Gr.dot(id),T=Vr.dot(id);if(T>=0&&M<=T)return i.copy(c);const C=M*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Vr,p);const E=v*T-M*S;if(E<=0&&S-v>=0&&M-T>=0)return dv.subVectors(c,l),p=(S-v)/(S-v+(M-T)),i.copy(l).addScaledVector(dv,p);const y=1/(E+C+g);return f=C*y,p=g*y,i.copy(s).addScaledVector(Gr,f).addScaledVector(Vr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Dl{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Gi):Gi.fromBufferAttribute(c,f),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),qc.copy(s.boundingBox)),qc.applyMatrix4(e.matrixWorld),this.union(qc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),Zc.subVectors(this.max,ll),kr.subVectors(e.a,ll),Xr.subVectors(e.b,ll),Wr.subVectors(e.c,ll),ds.subVectors(Xr,kr),ps.subVectors(Wr,Xr),Ws.subVectors(kr,Wr);let i=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Ws.z,Ws.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Ws.z,0,-Ws.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Ws.y,Ws.x,0];return!od(i,kr,Xr,Wr,Zc)||(i=[1,0,0,0,1,0,0,0,1],!od(i,kr,Xr,Wr,Zc))?!1:(Kc.crossVectors(ds,ps),i=[Kc.x,Kc.y,Kc.z],od(i,kr,Xr,Wr,Zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Gi=new ee,qc=new Dl,kr=new ee,Xr=new ee,Wr=new ee,ds=new ee,ps=new ee,Ws=new ee,ll=new ee,Zc=new ee,Kc=new ee,Ys=new ee;function od(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ys.fromArray(r,c);const p=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),m=e.dot(Ys),d=i.dot(Ys),v=s.dot(Ys);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const Mn=new ee,Qc=new st;let GE=0;class Xi extends bs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=mp,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Qc.fromBufferAttribute(this,i),Qc.applyMatrix3(e),this.setXY(i,Qc.x,Qc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vi(i,this.array)),i}setX(e,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vi(i,this.array)),i}setY(e,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vi(i,this.array)),i}setW(e,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array),l=kt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array),l=kt(l,this.array),c=kt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ty extends Xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ay extends Xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends Xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const VE=new Dl,cl=new ee,ld=new ee;class Xp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):VE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(cl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(ld)),this.expandByPoint(cl.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kE=0;const Di=new cn,cd=new Un,Yr=new ee,yi=new Dl,ul=new Dl,Dn=new ee;class Si extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oE(e)?Ay:Ty)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ul.setFromBufferAttribute(p),this.morphTargetsRelative?(Dn.addVectors(yi.min,ul.min),yi.expandByPoint(Dn),Dn.addVectors(yi.max,ul.max),yi.expandByPoint(Dn)):(yi.expandByPoint(ul.min),yi.expandByPoint(ul.max))}yi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)Dn.fromBufferAttribute(p,d),m&&(Yr.fromBufferAttribute(e,d),Dn.add(Yr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Xi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new ee,m[b]=new ee;const d=new ee,v=new ee,S=new ee,g=new st,M=new st,T=new st,C=new ee,E=new ee;function y(b,L,k){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,L),S.fromBufferAttribute(s,k),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,L),T.fromBufferAttribute(c,k),v.sub(d),S.sub(d),M.sub(g),T.sub(g);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(S,-M.y).multiplyScalar(V),E.copy(S).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(V),p[b].add(C),p[L].add(C),p[k].add(C),m[b].add(E),m[L].add(E),m[k].add(E))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let b=0,L=B.length;b<L;++b){const k=B[b],V=k.start,Q=k.count;for(let fe=V,de=V+Q;fe<de;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const F=new ee,w=new ee,I=new ee,U=new ee;function O(b){I.fromBufferAttribute(l,b),U.copy(I);const L=p[b];F.copy(L),F.sub(I.multiplyScalar(I.dot(L))).normalize(),w.crossVectors(U,L);const V=w.dot(m[b])<0?-1:1;f.setXYZW(b,F.x,F.y,F.z,V)}for(let b=0,L=B.length;b<L;++b){const k=B[b],V=k.start,Q=k.count;for(let fe=V,de=V+Q;fe<de;fe+=3)O(e.getX(fe+0)),O(e.getX(fe+1)),O(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new ee,c=new ee,f=new ee,p=new ee,m=new ee,d=new ee,v=new ee,S=new ee;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,E),v.subVectors(f,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,E),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(E,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let M=0,T=0;for(let C=0,E=m.length;C<E;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let y=0;y<v;y++)g[T++]=d[M++]}return new Xi(g,v,S)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const M=d[S];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,M=S.length;g<M;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,v=f.length;d<v;d++){const S=f[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class XE{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=mp,this.updateRanges=[],this.version=0,this.uuid=Oa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new ee;class Cu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array),l=kt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=kt(i,this.array),s=kt(s,this.array),l=kt(l,this.array),c=kt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Ru("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Xi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ru("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let WE=0;class po extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=ao,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(s.blending=this.blending),this.side!==xs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rd&&(s.blendSrc=this.blendSrc),this.blendDst!==Cd&&(s.blendDst=this.blendDst),this.blendEquation!==Ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new st().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ry extends po{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const fl=new ee,Zr=new ee,Kr=new ee,Qr=new st,hl=new st,Cy=new cn,Jc=new ee,dl=new ee,jc=new ee,pv=new st,ud=new st,mv=new st;class YE extends Un{constructor(e=new Ry){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new XE(i,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Cu(s,3,0,!1)),qr.setAttribute("uv",new Cu(s,2,3,!1))}this.geometry=qr,this.material=e,this.center=new st(.5,.5),this.count=1}raycast(e,i){e.camera===null&&wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),Cy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;$c(Jc.set(-.5,-.5,0),Kr,f,Zr,l,c),$c(dl.set(.5,-.5,0),Kr,f,Zr,l,c),$c(jc.set(.5,.5,0),Kr,f,Zr,l,c),pv.set(0,0),ud.set(1,0),mv.set(1,1);let p=e.ray.intersectTriangle(Jc,dl,jc,!1,fl);if(p===null&&($c(dl.set(-.5,.5,0),Kr,f,Zr,l,c),ud.set(0,1),p=e.ray.intersectTriangle(Jc,jc,dl,!1,fl),p===null))return;const m=e.ray.origin.distanceTo(fl);m<e.near||m>e.far||i.push({distance:m,point:fl.clone(),uv:Li.getInterpolation(fl,Jc,dl,jc,pv,ud,mv,new st),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $c(r,e,i,s,l,c){Qr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(hl.x=c*Qr.x-l*Qr.y,hl.y=l*Qr.x+c*Qr.y):hl.copy(Qr),r.copy(e),r.x+=hl.x,r.y+=hl.y,r.applyMatrix4(Cy)}const Da=new ee,fd=new ee,eu=new ee,ms=new ee,hd=new ee,tu=new ee,dd=new ee;class Wp{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){fd.copy(e).add(i).multiplyScalar(.5),eu.copy(i).sub(e).normalize(),ms.copy(this.origin).sub(fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(eu),p=ms.dot(this.direction),m=-ms.dot(eu),d=ms.lengthSq(),v=Math.abs(1-f*f);let S,g,M,T;if(v>0)if(S=f*m-p,g=f*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const C=1/v;S*=C,g*=C,M=S*(S+f*g+2*p)+g*(f*S+g+2*m)+d}else g=c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-f*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(S=Math.max(0,-(f*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+d);else g=f>0?-c:c,S=Math.max(0,-(f*g+p)),M=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(fd).addScaledVector(eu,g),M}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const s=Da.dot(this.direction),l=Da.dot(Da)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,s,l,c){hd.subVectors(i,e),tu.subVectors(s,e),dd.crossVectors(hd,tu);let f=this.direction.dot(dd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ms.subVectors(this.origin,e);const m=p*this.direction.dot(tu.crossVectors(ms,tu));if(m<0)return null;const d=p*this.direction.dot(hd.cross(ms));if(d<0||m+d>f)return null;const v=-p*ms.dot(dd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ml extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gv=new cn,qs=new Wp,nu=new Xp,_v=new ee,iu=new ee,au=new ee,su=new ee,pd=new ee,ru=new ee,vv=new ee,ou=new ee;class En extends Un{constructor(e=new Si,i=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){ru.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(pd.fromBufferAttribute(S,e),f?ru.addScaledVector(pd,v):ru.addScaledVector(pd.sub(i),v))}i.add(ru)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nu.copy(s.boundingSphere),nu.applyMatrix4(c),qs.copy(e.ray).recast(e.near),!(nu.containsPoint(qs.origin)===!1&&(qs.intersectSphere(nu,_v)===null||qs.origin.distanceToSquared(_v)>(e.far-e.near)**2))&&(gv.copy(c).invert(),qs.copy(e.ray).applyMatrix4(gv),!(s.boundingBox!==null&&qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,qs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=g.length;T<C;T++){const E=g[T],y=f[E.materialIndex],B=Math.max(E.start,M.start),F=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let w=B,I=F;w<I;w+=3){const U=p.getX(w),O=p.getX(w+1),b=p.getX(w+2);l=lu(this,y,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let E=T,y=C;E<y;E+=3){const B=p.getX(E),F=p.getX(E+1),w=p.getX(E+2);l=lu(this,f,e,s,d,v,S,B,F,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=g.length;T<C;T++){const E=g[T],y=f[E.materialIndex],B=Math.max(E.start,M.start),F=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let w=B,I=F;w<I;w+=3){const U=w,O=w+1,b=w+2;l=lu(this,y,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let E=T,y=C;E<y;E+=3){const B=E,F=E+1,w=E+2;l=lu(this,f,e,s,d,v,S,B,F,w),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function qE(r,e,i,s,l,c,f,p){let m;if(e.side===ri?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===xs,p),m===null)return null;ou.copy(p),ou.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(ou);return d<i.near||d>i.far?null:{distance:d,point:ou.clone(),object:r}}function lu(r,e,i,s,l,c,f,p,m,d){r.getVertexPosition(p,iu),r.getVertexPosition(m,au),r.getVertexPosition(d,su);const v=qE(r,e,i,s,iu,au,su,vv);if(v){const S=new ee;Li.getBarycoord(vv,iu,au,su,S),l&&(v.uv=Li.getInterpolatedAttribute(l,p,m,d,S,new st)),c&&(v.uv1=Li.getInterpolatedAttribute(c,p,m,d,S,new st)),f&&(v.normal=Li.getInterpolatedAttribute(f,p,m,d,S,new ee),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new ee,materialIndex:0};Li.getNormal(iu,au,su,g.normal),v.face=g,v.barycoord=S}return v}class ZE extends Wn{constructor(e=null,i=1,s=1,l,c,f,p,m,d=Hn,v=Hn,S,g){super(null,f,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new ee,KE=new ee,QE=new ht;class _s{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=md.subVectors(s,i).cross(KE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(md),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||QE.getNormalMatrix(e),l=this.coplanarPoint(md).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new Xp,JE=new st(.5,.5),cu=new ee;class Yp{constructor(e=new _s,i=new _s,s=new _s,l=new _s,c=new _s,f=new _s){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=na,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],M=c[7],T=c[8],C=c[9],E=c[10],y=c[11],B=c[12],F=c[13],w=c[14],I=c[15];if(l[0].setComponents(d-f,M-v,y-T,I-B).normalize(),l[1].setComponents(d+f,M+v,y+T,I+B).normalize(),l[2].setComponents(d+p,M+S,y+C,I+F).normalize(),l[3].setComponents(d-p,M-S,y-C,I-F).normalize(),s)l[4].setComponents(m,g,E,w).normalize(),l[5].setComponents(d-m,M-g,y-E,I-w).normalize();else if(l[4].setComponents(d-m,M-g,y-E,I-w).normalize(),i===na)l[5].setComponents(d+m,M+g,y+E,I+w).normalize();else if(i===Al)l[5].setComponents(m,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);const i=JE.distanceTo(e.center);return Zs.radius=.7071067811865476+i,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cu.x=l.normal.x>0?e.max.x:e.min.x,cu.y=l.normal.y>0?e.max.y:e.min.y,cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wy extends Wn{constructor(e=[],i=tr,s,l,c,f,p,m,d,v){super(e,i,s,l,c,f,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Wn{constructor(e,i,s,l,c,f,p,m,d){super(e,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uo extends Wn{constructor(e,i,s=sa,l,c,f,p=Hn,m=Hn,d,v=za,S=1){if(v!==za&&v!==$s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,f,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $E extends uo{constructor(e,i=sa,s=tr,l,c,f=Hn,p=Hn,m,d=za){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Es extends Si{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],v=[],S=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(S,2));function T(C,E,y,B,F,w,I,U,O,b,L){const k=w/O,V=I/b,Q=w/2,fe=I/2,de=U/2,ie=O+1,z=b+1;let W=0,K=0;const pe=new ee;for(let Te=0;Te<z;Te++){const P=Te*V-fe;for(let J=0;J<ie;J++){const X=J*k-Q;pe[C]=X*B,pe[E]=P*F,pe[y]=de,d.push(pe.x,pe.y,pe.z),pe[C]=0,pe[E]=0,pe[y]=U>0?1:-1,v.push(pe.x,pe.y,pe.z),S.push(J/O),S.push(1-Te/b),W+=1}}for(let Te=0;Te<b;Te++)for(let P=0;P<O;P++){const J=g+P+ie*Te,X=g+P+ie*(Te+1),_e=g+(P+1)+ie*(Te+1),Ce=g+(P+1)+ie*Te;m.push(J,X,Ce),m.push(X,_e,Ce),K+=6}p.addGroup(M,K,L),M+=K,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nu extends Si{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const v=[],S=[],g=[],M=[];let T=0;const C=[],E=s/2;let y=0;B(),f===!1&&(e>0&&F(!0),i>0&&F(!1)),this.setIndex(v),this.setAttribute("position",new Ln(S,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(M,2));function B(){const w=new ee,I=new ee;let U=0;const O=(i-e)/s;for(let b=0;b<=c;b++){const L=[],k=b/c,V=k*(i-e)+e;for(let Q=0;Q<=l;Q++){const fe=Q/l,de=fe*m+p,ie=Math.sin(de),z=Math.cos(de);I.x=V*ie,I.y=-k*s+E,I.z=V*z,S.push(I.x,I.y,I.z),w.set(ie,O,z).normalize(),g.push(w.x,w.y,w.z),M.push(fe,1-k),L.push(T++)}C.push(L)}for(let b=0;b<l;b++)for(let L=0;L<c;L++){const k=C[L][b],V=C[L+1][b],Q=C[L+1][b+1],fe=C[L][b+1];(e>0||L!==0)&&(v.push(k,V,fe),U+=3),(i>0||L!==c-1)&&(v.push(V,Q,fe),U+=3)}d.addGroup(y,U,0),y+=U}function F(w){const I=T,U=new st,O=new ee;let b=0;const L=w===!0?e:i,k=w===!0?1:-1;for(let Q=1;Q<=l;Q++)S.push(0,E*k,0),g.push(0,k,0),M.push(.5,.5),T++;const V=T;for(let Q=0;Q<=l;Q++){const de=Q/l*m+p,ie=Math.cos(de),z=Math.sin(de);O.x=L*z,O.y=E*k,O.z=L*ie,S.push(O.x,O.y,O.z),g.push(0,k,0),U.x=ie*.5+.5,U.y=z*.5*k+.5,M.push(U.x,U.y),T++}for(let Q=0;Q<l;Q++){const fe=I+Q,de=V+Q;w===!0?v.push(de,de+1,fe):v.push(de+1,de,fe),b+=3}d.addGroup(y,b,w===!0?1:2),y+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class El extends Nu{constructor(e=1,i=1,s=32,l=1,c=!1,f=0,p=Math.PI*2){super(0,e,i,s,l,c,f,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p}}static fromJSON(e){return new El(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class er extends Si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,g=i/m,M=[],T=[],C=[],E=[];for(let y=0;y<v;y++){const B=y*g-f;for(let F=0;F<d;F++){const w=F*S-c;T.push(w,-B,0),C.push(0,0,1),E.push(F/p),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let B=0;B<p;B++){const F=B+d*y,w=B+d*(y+1),I=B+1+d*(y+1),U=B+1+d*y;M.push(F,w,U),M.push(w,I,U)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}class qp extends Si{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],v=[];let S=e;const g=(i-e)/l,M=new ee,T=new st;for(let C=0;C<=l;C++){for(let E=0;E<=s;E++){const y=c+E/s*f;M.x=S*Math.cos(y),M.y=S*Math.sin(y),m.push(M.x,M.y,M.z),d.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,v.push(T.x,T.y)}S+=g}for(let C=0;C<l;C++){const E=C*(s+1);for(let y=0;y<s;y++){const B=y+E,F=B,w=B+s+1,I=B+s+2,U=B+1;p.push(F,w,U),p.push(w,I,U)}}this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zp extends Si{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let d=0;const v=[],S=new ee,g=new ee,M=[],T=[],C=[],E=[];for(let y=0;y<=s;y++){const B=[],F=y/s,w=f+F*p,I=e*Math.cos(w),U=Math.sqrt(e*e-I*I);let O=0;y===0&&f===0?O=.5/i:y===s&&m===Math.PI&&(O=-.5/i);for(let b=0;b<=i;b++){const L=b/i,k=l+L*c;S.x=-U*Math.cos(k),S.y=I,S.z=U*Math.sin(k),T.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),E.push(L+O,1-F),B.push(d++)}v.push(B)}for(let y=0;y<s;y++)for(let B=0;B<i;B++){const F=v[y][B+1],w=v[y][B],I=v[y+1][B],U=v[y+1][B+1];(y!==0||f>0)&&M.push(F,w,U),(y!==s-1||m<Math.PI)&&M.push(w,I,U)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(yv(l))l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(yv(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Zn(r){const e={};for(let i=0;i<r.length;i++){const s=fo(r[i]);for(const l in s)e[l]=s[l]}return e}function yv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function eb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Ny(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const tb={clone:fo,merge:Zn};var nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nb,this.fragmentShader=ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Tt().setHex(l.value);break;case"v2":this.uniforms[s].value=new st().fromArray(l.value);break;case"v3":this.uniforms[s].value=new ee().fromArray(l.value);break;case"v4":this.uniforms[s].value=new un().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ab extends ra{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xv extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pp,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sb extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rb extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uy extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ob extends Uy{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const gd=new cn,Sv=new ee,Mv=new ee;class lb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Sv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sv),Mv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Mv),i.updateMatrixWorld(),gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uu=new ee,fu=new Ss,Ji=new ee;class Ly extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uu,fu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(uu,fu,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new ee,Ev=new st,bv=new st;class Ui extends Ly{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,i){return this.getViewBounds(e,Ev,bv),i.subVectors(bv,Ev)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Kp extends Ly{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cb extends lb{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ub extends Uy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new cb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Jr=-90,jr=1;class fb extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Jr,jr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(Jr,jr,e,i);c.layers=this.layers,this.add(c);const f=new Ui(Jr,jr,e,i);f.layers=this.layers,this.add(f);const p=new Ui(Jr,jr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(Jr,jr,e,i);m.layers=this.layers,this.add(m);const d=new Ui(Jr,jr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(e===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class hb extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tv=new cn;class db{constructor(e,i,s=0,l=1/0){this.ray=new Wp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Tv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tv),this}intersectObject(e,i=!0,s=[]){return _p(e,this,s,i),s.sort(Av),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)_p(e[l],this,s,i);return s.sort(Av),s}}function Av(r,e){return r.distance-e.distance}function _p(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)_p(c[f],e,i,!0)}}class Rv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(St(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const am=class am{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};am.prototype.isMatrix2=!0;let Cv=am;class pb extends bs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wv(r,e,i,s){const l=mb(s);switch(i){case yy:return r*e;case Sy:return r*e/l.components*l.byteLength;case Pp:return r*e/l.components*l.byteLength;case nr:return r*e*2/l.components*l.byteLength;case Ip:return r*e*2/l.components*l.byteLength;case xy:return r*e*3/l.components*l.byteLength;case ki:return r*e*4/l.components*l.byteLength;case zp:return r*e*4/l.components*l.byteLength;case _u:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yu:case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:case Gd:return Math.max(r,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(r,8)*Math.max(e,8)/2;case Vd:case kd:case Wd:case Yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Mu:case qd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case op:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lp:case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fp:case hp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eu:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mb(r){switch(r){case xi:case my:return{byteLength:1,components:1};case bl:case gy:case Ia:return{byteLength:2,components:1};case Lp:case Op:return{byteLength:2,components:4};case sa:case Up:case ta:return{byteLength:4,components:1};case _y:case vy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oy(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gb(r){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,v),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(r.bindBuffer(d,p),S.length===0)r.bufferSubData(d,0,v);else{S.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<S.length;M++){const T=S[g],C=S[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let M=0,T=S.length;M<T;M++){const C=S[M];r.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var _b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vb=`#ifdef USE_ALPHAHASH
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
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`uniform sampler2D dfgLUT;
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
}`,g1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R1=`#if defined( USE_POINTS_UV )
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
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
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
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nT=`float getShadowMask() {
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
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,oT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
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
}`,bT=`#if DEPTH_PACKING == 3200
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
}`,TT=`#define DISTANCE
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
}`,AT=`#define DISTANCE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
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
}`,DT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,LT=`#define LAMBERT
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
}`,OT=`#define LAMBERT
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
}`,PT=`#define MATCAP
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
}`,IT=`#define MATCAP
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
}`,zT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,FT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,GT=`#define STANDARD
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
}`,VT=`#define STANDARD
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
}`,kT=`#define TOON
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
}`,XT=`#define TOON
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
}`,WT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,ZT=`uniform vec3 color;
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
}`,KT=`uniform float rotation;
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
}`,QT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:_b,alphahash_pars_fragment:vb,alphamap_fragment:yb,alphamap_pars_fragment:xb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:Eb,aomap_pars_fragment:bb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:wb,iridescence_fragment:Db,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Pb,color_fragment:Ib,color_pars_fragment:zb,color_pars_vertex:Bb,color_vertex:Fb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:kb,displacementmap_vertex:Xb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Yb,colorspace_fragment:qb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:Jb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:c1,envmap_vertex:$b,fog_vertex:e1,fog_pars_vertex:t1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:u1,lights_toon_pars_fragment:f1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,lightprobes_pars_fragment:y1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:E1,map_fragment:b1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:w1,morphinstance_vertex:D1,morphcolor_vertex:N1,morphnormal_vertex:U1,morphtarget_pars_vertex:L1,morphtarget_vertex:O1,normal_fragment_begin:P1,normal_fragment_maps:I1,normal_pars_fragment:z1,normal_pars_vertex:B1,normal_vertex:F1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:X1,opaque_fragment:W1,packing:Y1,premultiplied_alpha_fragment:q1,project_vertex:Z1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:eT,shadowmap_vertex:tT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:aT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:oT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:yT,backgroundCube_frag:xT,cube_vert:ST,cube_frag:MT,depth_vert:ET,depth_frag:bT,distance_vert:TT,distance_frag:AT,equirect_vert:RT,equirect_frag:CT,linedashed_vert:wT,linedashed_frag:DT,meshbasic_vert:NT,meshbasic_frag:UT,meshlambert_vert:LT,meshlambert_frag:OT,meshmatcap_vert:PT,meshmatcap_frag:IT,meshnormal_vert:zT,meshnormal_frag:BT,meshphong_vert:FT,meshphong_frag:HT,meshphysical_vert:GT,meshphysical_frag:VT,meshtoon_vert:kT,meshtoon_frag:XT,points_vert:WT,points_frag:YT,shadow_vert:qT,shadow_frag:ZT,sprite_vert:KT,sprite_frag:QT},Ge={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},$i={basic:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Zn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Zn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Zn([Ge.points,Ge.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Zn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Zn([Ge.common,Ge.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Zn([Ge.sprite,Ge.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Zn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Zn([Ge.lights,Ge.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};$i.physical={uniforms:Zn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const hu={r:0,b:0,g:0},JT=new cn,Py=new ht;Py.set(-1,0,0,0,1,0,0,0,1);function jT(r,e,i,s,l,c){const f=new Tt(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function M(B){let F=B.isScene===!0?B.background:null;if(F&&F.isTexture){const w=B.backgroundBlurriness>0;F=e.get(F,w)}return F}function T(B){let F=!1;const w=M(B);w===null?E(f,p):w&&w.isColor&&(E(w,1),F=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(B,F){const w=M(F);w&&(w.isCubeTexture||w.mapping===Du)?(d===void 0&&(d=new En(new Es(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:fo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Py),d.material.toneMapped=Dt.getTransfer(w.colorSpace)!==Vt,(v!==w||S!==w.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,v=w,S=w.version,g=r.toneMapping),d.layers.enableAll(),B.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new En(new er(2,2),new ra({name:"BackgroundMaterial",uniforms:fo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||S!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=w,S=w.version,g=r.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function E(B,F){B.getRGB(hu,Ny(r)),i.buffers.color.setClear(hu.r,hu.g,hu.b,F,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(B,F=1){f.set(B),p=F,E(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(B){p=B,E(f,p)},render:T,addToRenderList:C,dispose:y}}function $T(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(V,Q,fe,de,ie){let z=!1;const W=S(V,de,fe,Q);c!==W&&(c=W,d(c.object)),z=M(V,de,fe,ie),z&&T(V,de,fe,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,w(V,Q,fe,de),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function S(V,Q,fe,de){const ie=de.wireframe===!0;let z=s[Q.id];z===void 0&&(z={},s[Q.id]=z);const W=V.isInstancedMesh===!0?V.id:0;let K=z[W];K===void 0&&(K={},z[W]=K);let pe=K[fe.id];pe===void 0&&(pe={},K[fe.id]=pe);let Te=pe[ie];return Te===void 0&&(Te=g(m()),pe[ie]=Te),Te}function g(V){const Q=[],fe=[],de=[];for(let ie=0;ie<i;ie++)Q[ie]=0,fe[ie]=0,de[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:fe,attributeDivisors:de,object:V,attributes:{},index:null}}function M(V,Q,fe,de){const ie=c.attributes,z=Q.attributes;let W=0;const K=fe.getAttributes();for(const pe in K)if(K[pe].location>=0){const P=ie[pe];let J=z[pe];if(J===void 0&&(pe==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),pe==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;W++}return c.attributesNum!==W||c.index!==de}function T(V,Q,fe,de){const ie={},z=Q.attributes;let W=0;const K=fe.getAttributes();for(const pe in K)if(K[pe].location>=0){let P=z[pe];P===void 0&&(pe==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),pe==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),ie[pe]=J,W++}c.attributes=ie,c.attributesNum=W,c.index=de}function C(){const V=c.newAttributes;for(let Q=0,fe=V.length;Q<fe;Q++)V[Q]=0}function E(V){y(V,0)}function y(V,Q){const fe=c.newAttributes,de=c.enabledAttributes,ie=c.attributeDivisors;fe[V]=1,de[V]===0&&(r.enableVertexAttribArray(V),de[V]=1),ie[V]!==Q&&(r.vertexAttribDivisor(V,Q),ie[V]=Q)}function B(){const V=c.newAttributes,Q=c.enabledAttributes;for(let fe=0,de=Q.length;fe<de;fe++)Q[fe]!==V[fe]&&(r.disableVertexAttribArray(fe),Q[fe]=0)}function F(V,Q,fe,de,ie,z,W){W===!0?r.vertexAttribIPointer(V,Q,fe,ie,z):r.vertexAttribPointer(V,Q,fe,de,ie,z)}function w(V,Q,fe,de){C();const ie=de.attributes,z=fe.getAttributes(),W=Q.defaultAttributeValues;for(const K in z){const pe=z[K];if(pe.location>=0){let Te=ie[K];if(Te===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor)),Te!==void 0){const P=Te.normalized,J=Te.itemSize,X=e.get(Te);if(X===void 0)continue;const _e=X.buffer,Ce=X.type,ae=X.bytesPerElement,ve=Ce===r.INT||Ce===r.UNSIGNED_INT||Te.gpuType===Up;if(Te.isInterleavedBufferAttribute){const Ee=Te.data,ke=Ee.stride,rt=Te.offset;if(Ee.isInstancedInterleavedBuffer){for(let $e=0;$e<pe.locationSize;$e++)y(pe.location+$e,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $e=0;$e<pe.locationSize;$e++)E(pe.location+$e);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let $e=0;$e<pe.locationSize;$e++)F(pe.location+$e,J/pe.locationSize,Ce,P,ke*ae,(rt+J/pe.locationSize*$e)*ae,ve)}else{if(Te.isInstancedBufferAttribute){for(let Ee=0;Ee<pe.locationSize;Ee++)y(pe.location+Ee,Te.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<pe.locationSize;Ee++)E(pe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ee=0;Ee<pe.locationSize;Ee++)F(pe.location+Ee,J/pe.locationSize,Ce,P,J*ae,J/pe.locationSize*Ee*ae,ve)}}else if(W!==void 0){const P=W[K];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(pe.location,P);break;case 3:r.vertexAttrib3fv(pe.location,P);break;case 4:r.vertexAttrib4fv(pe.location,P);break;default:r.vertexAttrib1fv(pe.location,P)}}}}B()}function I(){L();for(const V in s){const Q=s[V];for(const fe in Q){const de=Q[fe];for(const ie in de){const z=de[ie];for(const W in z)v(z[W].object),delete z[W];delete de[ie]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const fe in Q){const de=Q[fe];for(const ie in de){const z=de[ie];for(const W in z)v(z[W].object),delete z[W];delete de[ie]}}delete s[V.id]}function O(V){for(const Q in s){const fe=s[Q];for(const de in fe){const ie=fe[de];if(ie[V.id]===void 0)continue;const z=ie[V.id];for(const W in z)v(z[W].object),delete z[W];delete ie[V.id]}}}function b(V){for(const Q in s){const fe=s[Q],de=V.isInstancedMesh===!0?V.id:0,ie=fe[de];if(ie!==void 0){for(const z in ie){const W=ie[z];for(const K in W)v(W[K].object),delete W[K];delete ie[z]}delete fe[de],Object.keys(fe).length===0&&delete s[Q]}}}function L(){k(),f=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:E,disableUnusedAttributes:B}}function eA(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function f(m,d,v){v!==0&&(r.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let g=0;for(let M=0;M<v;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function tA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==ki&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==xi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ta&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(lt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:B,maxVaryings:F,maxFragmentUniforms:w,maxSamples:I,samples:U}}function nA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new _s,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||s!==0||l;return l=g,s=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,M){const T=S.clippingPlanes,C=S.clipIntersection,E=S.clipShadows,y=r.get(S);if(!l||T===null||T.length===0||c&&!E)c?v(null):d();else{const B=c?0:s,F=B*4;let w=y.clippingState||null;m.value=w,w=v(T,g,F,M);for(let I=0;I!==F;++I)w[I]=i[I];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,M,T){const C=S!==null?S.length:0;let E=null;if(C!==0){if(E=m.value,T!==!0||E===null){const y=M+C*4,B=g.matrixWorldInverse;p.getNormalMatrix(B),(E===null||E.length<y)&&(E=new Float32Array(y));for(let F=0,w=M;F!==C;++F,w+=4)f.copy(S[F]).applyMatrix4(B,p),f.normal.toArray(E,w),E[w+3]=f.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}const ys=4,Dv=[.125,.215,.35,.446,.526,.582],Qs=20,iA=256,pl=new Kp,Nv=new Tt;let _d=null,vd=0,yd=0,xd=!1;const aA=new ee;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=aA}=c;_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,vd,yd),this._renderer.xr.enabled=xd,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===tr||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ia,format:ki,colorSpace:bu,depthBuffer:!1},l=Lv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sA(c)),this._blurMaterial=oA(c,e,i),this._ggxMaterial=rA(c,e,i)}return l}_compileMaterial(e){const i=new En(new Si,e);this._renderer.compile(i,pl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Nv),S.toneMapping=ia,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new Es,new Ml({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,E=C.material;let y=!1;const B=e.background;B?B.isColor&&(E.color.copy(B),e.background=null,y=!0):(E.color.copy(Nv),y=!0);for(let F=0;F<6;F++){const w=F%3;w===0?(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[F],c.y,c.z)):w===1?(m.up.set(0,0,d[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[F],c.z)):(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[F]));const I=this._cubeSize;$r(l,w*I,F>2?I:0,I,I),S.setRenderTarget(l),y&&S.render(C,m),S.render(e,m)}S.toneMapping=M,S.autoClear=g,e.background=B}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===tr||e.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;$r(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,pl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,M=S*g,{_lodMax:T}=this,C=this._sizeLods[s],E=3*C*(s>T-ys?s-T+ys:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,$r(c,E,y,3*C,2*C),l.setRenderTarget(c),l.render(p,pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,$r(e,E,y,3*C,2*C),l.setRenderTarget(e),l.render(p,pl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Qs-1),C=c/T,E=isFinite(c)?1+Math.floor(v*C):Qs;E>Qs&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Qs}`);const y=[];let B=0;for(let O=0;O<Qs;++O){const b=O/C,L=Math.exp(-b*b/2);y.push(L),O===0?B+=L:O<E&&(B+=2*L)}for(let O=0;O<y.length;O++)y[O]=y[O]/B;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=y,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-s;const w=this._sizeLods[l],I=3*w*(l>F-ys?l-F+ys:0),U=4*(this._cubeSize-w);$r(i,I,U,3*w,2*w),m.setRenderTarget(i),m.render(S,pl)}}function sA(r){const e=[],i=[],s=[];let l=r;const c=r-ys+1+Dv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-ys?m=Dv[f-r+ys-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,T=6,C=3,E=2,y=1,B=new Float32Array(C*T*M),F=new Float32Array(E*T*M),w=new Float32Array(y*T*M);for(let U=0;U<M;U++){const O=U%3*2/3-1,b=U>2?0:-1,L=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];B.set(L,C*T*U),F.set(g,E*T*U);const k=[U,U,U,U,U,U];w.set(k,y*T*U)}const I=new Si;I.setAttribute("position",new Xi(B,C)),I.setAttribute("uv",new Xi(F,E)),I.setAttribute("faceIndex",new Xi(w,y)),s.push(new En(I,null)),l>ys&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Lv(r,e,i){const s=new aa(r,e,i);return s.texture.mapping=Du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $r(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function rA(r,e,i){return new ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function oA(r,e,i){const s=new Float32Array(Qs),l=new ee(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Ov(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Pv(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}class Iy extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new wy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Es(5,5,5),c=new ra({name:"CubemapFromEquirect",uniforms:fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:La});c.uniforms.tEquirect.value=i;const f=new En(l,c),p=i.minFilter;return i.minFilter===js&&(i.minFilter=Nn),new fb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function lA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Xh||M===Wh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Iy(T.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,T=M===Xh||M===Wh,C=M===tr||M===co;if(T||C){let E=i.get(g);const y=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new Uv(r)),E=T?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const B=g.image;return T&&B&&B.height>0||C&&B&&m(B)?(s===null&&(s=new Uv(r)),E=T?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",v),E.texture):null}}}return g}function p(g,M){return M===Xh?g.mapping=tr:M===Wh&&(g.mapping=co),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function cA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&so("WebGLRenderer: "+s+" extension not supported."),l}}}function uA(r,e,i,s){const l={},c=new WeakMap;function f(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(S){const g=[],M=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const B=M.array;C=M.version;for(let F=0,w=B.length;F<w;F+=3){const I=B[F+0],U=B[F+1],O=B[F+2];g.push(I,U,U,O,O,I)}}else{const B=T.array;C=T.version;for(let F=0,w=B.length/3-1;F<w;F+=3){const I=F+0,U=F+1,O=F+2;g.push(I,U,U,O,O,I)}}const E=new(T.count>=65535?Ay:Ty)(g,1);E.version=C;const y=c.get(S);y&&e.remove(y),c.set(S,E)}function v(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function fA(r,e,i){let s;function l(S){s=S}let c,f;function p(S){c=S.type,f=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*f),i.update(g,s,1)}function d(S,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,S*f,M),i.update(g,s,M))}function v(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,M);let C=0;for(let E=0;E<M;E++)C+=g[E];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function hA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function dA(r,e,i){const s=new WeakMap,l=new un;function c(f,p,m){const d=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let L=function(){O.dispose(),s.delete(p),p.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,E=p.morphAttributes.position||[],y=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let F=0;M===!0&&(F=1),T===!0&&(F=2),C===!0&&(F=3);let w=p.attributes.position.count*F,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*I*4*S),O=new Ey(U,w,I,S);O.type=ta,O.needsUpdate=!0;const b=F*4;for(let k=0;k<S;k++){const V=E[k],Q=y[k],fe=B[k],de=w*I*4*k;for(let ie=0;ie<V.count;ie++){const z=ie*b;M===!0&&(l.fromBufferAttribute(V,ie),U[de+z+0]=l.x,U[de+z+1]=l.y,U[de+z+2]=l.z,U[de+z+3]=0),T===!0&&(l.fromBufferAttribute(Q,ie),U[de+z+4]=l.x,U[de+z+5]=l.y,U[de+z+6]=l.z,U[de+z+7]=0),C===!0&&(l.fromBufferAttribute(fe,ie),U[de+z+8]=l.x,U[de+z+9]=l.y,U[de+z+10]=l.z,U[de+z+11]=fe.itemSize===4?l.w:1)}}g={count:S,texture:O,size:new st(w,I)},s.set(p,g),p.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let C=0;C<d.length;C++)M+=d[C];const T=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function pA(r,e,i,s,l){let c=new WeakMap;function f(d){const v=l.render.frame,S=d.geometry,g=e.get(d,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const mA={[ly]:"LINEAR_TONE_MAPPING",[cy]:"REINHARD_TONE_MAPPING",[uy]:"CINEON_TONE_MAPPING",[Np]:"ACES_FILMIC_TONE_MAPPING",[hy]:"AGX_TONE_MAPPING",[dy]:"NEUTRAL_TONE_MAPPING",[fy]:"CUSTOM_TONE_MAPPING"};function gA(r,e,i,s,l,c){const f=new aa(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new uo(e,i):void 0}),p=new aa(e,i,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),m=new Si;m.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const d=new ab({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new En(m,d),S=new Kp(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,E=null,y=[],B=!1;this.setSize=function(F,w){f.setSize(F,w),p.setSize(F,w);for(let I=0;I<y.length;I++){const U=y[I];U.setSize&&U.setSize(F,w)}},this.setEffects=function(F){y=F,B=y.length>0&&y[0].isRenderPass===!0;const w=f.width,I=f.height;for(let U=0;U<y.length;U++){const O=y[U];O.setSize&&O.setSize(w,I)}},this.begin=function(F,w){if(T||F.toneMapping===ia&&y.length===0)return!1;if(E=w,w!==null){const I=w.width,U=w.height;(f.width!==I||f.height!==U)&&this.setSize(I,U)}return B===!1&&F.setRenderTarget(f),C=F.toneMapping,F.toneMapping=ia,!0},this.hasRenderPass=function(){return B},this.end=function(F,w){F.toneMapping=C,T=!0;let I=f,U=p;for(let O=0;O<y.length;O++){const b=y[O];if(b.enabled!==!1&&(b.render(F,U,I,w),b.needsSwap!==!1)){const L=I;I=U,U=L}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,d.defines={},Dt.getTransfer(g)===Vt&&(d.defines.SRGB_TRANSFER="");const O=mA[M];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(E),F.render(v,S),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),d.dispose()}}const zy=new Wn,vp=new uo(1,1),By=new Ey,Fy=new UE,Hy=new wy,Iv=[],zv=[],Bv=new Float32Array(16),Fv=new Float32Array(9),Hv=new Float32Array(4);function mo(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Iv[l];if(c===void 0&&(c=new Float32Array(l),Iv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Rn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Cn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Lu(r,e){let i=zv[e];i===void 0&&(i=new Int32Array(e),zv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function _A(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function vA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2fv(this.addr,e),Cn(i,e)}}function yA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;r.uniform3fv(this.addr,e),Cn(i,e)}}function xA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4fv(this.addr,e),Cn(i,e)}}function SA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Hv.set(s),r.uniformMatrix2fv(this.addr,!1,Hv),Cn(i,s)}}function MA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Fv.set(s),r.uniformMatrix3fv(this.addr,!1,Fv),Cn(i,s)}}function EA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Bv.set(s),r.uniformMatrix4fv(this.addr,!1,Bv),Cn(i,s)}}function bA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function TA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2iv(this.addr,e),Cn(i,e)}}function AA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3iv(this.addr,e),Cn(i,e)}}function RA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4iv(this.addr,e),Cn(i,e)}}function CA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function wA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2uiv(this.addr,e),Cn(i,e)}}function DA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3uiv(this.addr,e),Cn(i,e)}}function NA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4uiv(this.addr,e),Cn(i,e)}}function UA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(vp.compareFunction=i.isReversedDepthBuffer()?Fp:Bp,c=vp):c=zy,i.setTexture2D(e||c,l)}function LA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Fy,l)}function OA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Hy,l)}function PA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||By,l)}function IA(r){switch(r){case 5126:return _A;case 35664:return vA;case 35665:return yA;case 35666:return xA;case 35674:return SA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return bA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return wA;case 36295:return DA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}function zA(r,e){r.uniform1fv(this.addr,e)}function BA(r,e){const i=mo(e,this.size,2);r.uniform2fv(this.addr,i)}function FA(r,e){const i=mo(e,this.size,3);r.uniform3fv(this.addr,i)}function HA(r,e){const i=mo(e,this.size,4);r.uniform4fv(this.addr,i)}function GA(r,e){const i=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function VA(r,e){const i=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function kA(r,e){const i=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function XA(r,e){r.uniform1iv(this.addr,e)}function WA(r,e){r.uniform2iv(this.addr,e)}function YA(r,e){r.uniform3iv(this.addr,e)}function qA(r,e){r.uniform4iv(this.addr,e)}function ZA(r,e){r.uniform1uiv(this.addr,e)}function KA(r,e){r.uniform2uiv(this.addr,e)}function QA(r,e){r.uniform3uiv(this.addr,e)}function JA(r,e){r.uniform4uiv(this.addr,e)}function jA(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=vp:f=zy;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function $A(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Fy,c[f])}function e2(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Hy,c[f])}function t2(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||By,c[f])}function n2(r){switch(r){case 5126:return zA;case 35664:return BA;case 35665:return FA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return kA;case 5124:case 35670:return XA;case 35667:case 35671:return WA;case 35668:case 35672:return YA;case 35669:case 35673:return qA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}class i2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=IA(i.type)}}class a2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n2(i.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Gv(r,e){r.seq.push(e),r.map[e.id]=e}function r2(r,e,i){const s=r.name,l=s.length;for(Sd.lastIndex=0;;){const c=Sd.exec(s),f=Sd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Gv(i,d===void 0?new i2(p,r,e):new a2(p,r,e));break}else{let S=i.map[p];S===void 0&&(S=new s2(p),Gv(i,S)),i=S}}}class Su{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);r2(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Vv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const o2=37297;let l2=0;function c2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const kv=new ht;function u2(r){Dt._getMatrix(kv,Dt.workingColorSpace,r);const e=`mat3( ${kv.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(r)){case Tu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+c2(r.getShaderSource(e),p)}else return c}function f2(r,e){const i=u2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const h2={[ly]:"Linear",[cy]:"Reinhard",[uy]:"Cineon",[Np]:"ACESFilmic",[hy]:"AgX",[dy]:"Neutral",[fy]:"Custom"};function d2(r,e){const i=h2[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const du=new ee;function p2(){Dt.getLuminanceCoefficients(du);const r=du.x.toFixed(4),e=du.y.toFixed(4),i=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function g2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function _2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function vl(r){return r!==""}function Wv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(r){return r.replace(v2,x2)}const y2=new Map;function x2(r,e){let i=yt[e];if(i===void 0){const s=y2.get(e);if(s!==void 0)i=yt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yp(i)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(S2,M2)}function M2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const E2={[yl]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function b2(r){return E2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T2={[tr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function A2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":T2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const R2={[co]:"ENVMAP_MODE_REFRACTION"};function C2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":R2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w2={[oy]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[JM]:"ENVMAP_BLENDING_ADD"};function D2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":w2[r.combine]||"ENVMAP_BLENDING_NONE"}function N2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function U2(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=b2(i),d=A2(i),v=C2(i),S=D2(i),g=N2(i),M=m2(i),T=g2(c),C=l.createProgram();let E,y,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),y.length>0&&(y+=`
`)):(E=[Zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),y=[Zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?yt.tonemapping_pars_fragment:"",i.toneMapping!==ia?d2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,f2("linearToOutputTexel",i.outputColorSpace),p2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),f=yp(f),f=Wv(f,i),f=Yv(f,i),p=yp(p),p=Wv(p,i),p=Yv(p,i),f=qv(f),p=qv(p),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=B+E+f,w=B+y+p,I=Vv(l,l.VERTEX_SHADER,F),U=Vv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,I),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(V){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",fe=l.getShaderInfoLog(I)||"",de=l.getShaderInfoLog(U)||"",ie=Q.trim(),z=fe.trim(),W=de.trim();let K=!0,pe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,U);else{const Te=Xv(l,I,"vertex"),P=Xv(l,U,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ie+`
`+Te+`
`+P)}else ie!==""?lt("WebGLProgram: Program Info Log:",ie):(z===""||W==="")&&(pe=!1);pe&&(V.diagnostics={runnable:K,programLog:ie,vertexShader:{log:z,prefix:E},fragmentShader:{log:W,prefix:y}})}l.deleteShader(I),l.deleteShader(U),b=new Su(l,C),L=_2(l,C)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,o2)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=U,this}let L2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new P2(e),i.set(e,s)),s}}class P2{constructor(e){this.id=L2++,this.code=e,this.usedTimes=0}}function I2(r){return r===nr||r===Mu||r===Eu}function z2(r,e,i,s,l,c){const f=new Vp,p=new O2,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,L,k,V,Q,fe){const de=V.fog,ie=Q.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,K=e.get(b.envMap||z,W),pe=K&&K.mapping===Du?K.image.height:null,Te=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&lt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const P=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,J=P!==void 0?P.length:0;let X=0;ie.morphAttributes.position!==void 0&&(X=1),ie.morphAttributes.normal!==void 0&&(X=2),ie.morphAttributes.color!==void 0&&(X=3);let _e,Ce,ae,ve;if(Te){const qe=$i[Te];_e=qe.vertexShader,Ce=qe.fragmentShader}else{_e=b.vertexShader,Ce=b.fragmentShader;const qe=p.getVertexShaderStage(b),sn=p.getFragmentShaderStage(b);p.update(b,qe,sn),ae=qe.id,ve=sn.id}const Ee=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),rt=Q.isInstancedMesh===!0,$e=Q.isBatchedMesh===!0,Xt=!!b.map,dt=!!b.matcap,xt=!!K,_t=!!b.aoMap,vt=!!b.lightMap,jt=!!b.bumpMap&&b.wireframe===!1,$t=!!b.normalMap,en=!!b.displacementMap,Se=!!b.emissiveMap,we=!!b.metalnessMap,De=!!b.roughnessMap,H=b.anisotropy>0,Fe=b.clearcoat>0,Pe=b.dispersion>0,D=b.iridescence>0,x=b.sheen>0,Y=b.transmission>0,$=H&&!!b.anisotropyMap,ne=Fe&&!!b.clearcoatMap,Re=Fe&&!!b.clearcoatNormalMap,Ne=Fe&&!!b.clearcoatRoughnessMap,he=D&&!!b.iridescenceMap,ge=D&&!!b.iridescenceThicknessMap,Le=x&&!!b.sheenColorMap,Xe=x&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Ie=!!b.specularColorMap,tt=!!b.specularIntensityMap,nt=Y&&!!b.transmissionMap,ut=Y&&!!b.thicknessMap,Z=!!b.gradientMap,Ue=!!b.alphaMap,xe=b.alphaTest>0,Oe=!!b.alphaHash,Ve=!!b.extensions;let Ae=ia;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Je={shaderID:Te,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:Ce,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:$e,batchingColor:$e&&Q._colorsTexture!==null,instancing:rt,instancingColor:rt&&Q.instanceColor!==null,instancingMorph:rt&&Q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:dt,envMap:xt,envMapMode:xt&&K.mapping,envMapCubeUVHeight:pe,aoMap:_t,lightMap:vt,bumpMap:jt,normalMap:$t,displacementMap:en,emissiveMap:Se,normalMapObjectSpace:$t&&b.normalMapType===eE,normalMapTangentSpace:$t&&b.normalMapType===pp,packedNormalMap:$t&&b.normalMapType===pp&&I2(b.normalMap.format),metalnessMap:we,roughnessMap:De,anisotropy:H,anisotropyMap:$,clearcoat:Fe,clearcoatMap:ne,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ne,dispersion:Pe,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:x,sheenColorMap:Le,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:Ie,specularIntensityMap:tt,transmission:Y,transmissionMap:nt,thicknessMap:ut,gradientMap:Z,opaque:b.transparent===!1&&b.blending===ao&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:Oe,combine:b.combine,mapUv:Xt&&T(b.map.channel),aoMapUv:_t&&T(b.aoMap.channel),lightMapUv:vt&&T(b.lightMap.channel),bumpMapUv:jt&&T(b.bumpMap.channel),normalMapUv:$t&&T(b.normalMap.channel),displacementMapUv:en&&T(b.displacementMap.channel),emissiveMapUv:Se&&T(b.emissiveMap.channel),metalnessMapUv:we&&T(b.metalnessMap.channel),roughnessMapUv:De&&T(b.roughnessMap.channel),anisotropyMapUv:$&&T(b.anisotropyMap.channel),clearcoatMapUv:ne&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(b.sheenRoughnessMap.channel),specularMapUv:Be&&T(b.specularMap.channel),specularColorMapUv:Ie&&T(b.specularColorMap.channel),specularIntensityMapUv:tt&&T(b.specularIntensityMap.channel),transmissionMapUv:nt&&T(b.transmissionMap.channel),thicknessMapUv:ut&&T(b.thicknessMap.channel),alphaMapUv:Ue&&T(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&($t||H),vertexNormals:!!ie.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ie.attributes.uv&&(Xt||Ue),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ie.attributes.normal===void 0&&$t===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ke,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:X,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:Se&&b.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ea,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function E(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)L.push(k),L.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(y(L,b),B(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function B(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),L.packedNormalMap&&f.enable(22),L.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),L.numLightProbeGrids>0&&f.enable(22),L.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function F(b){const L=M[b.type];let k;if(L){const V=$i[L];k=tb.clone(V.uniforms)}else k=b.uniforms;return k}function w(b,L){let k=v.get(L);return k!==void 0?++k.usedTimes:(k=new U2(r,L,b,l),d.push(k),v.set(L,k)),k}function I(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function O(){p.dispose()}return{getParameters:C,getProgramCacheKey:E,getUniforms:F,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:d,dispose:O}}function B2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function F2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,E,y){let B=r[e];return B===void 0?(B={id:g.id,object:g,geometry:M,material:T,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:E,group:y},r[e]=B):(B.id=g.id,B.object=g,B.geometry=M,B.material=T,B.materialVariant=f(g),B.groupOrder=C,B.renderOrder=g.renderOrder,B.z=E,B.group=y),e++,B}function m(g,M,T,C,E,y){const B=p(g,M,T,C,E,y);T.transmission>0?s.push(B):T.transparent===!0?l.push(B):i.push(B)}function d(g,M,T,C,E,y){const B=p(g,M,T,C,E,y);T.transmission>0?s.unshift(B):T.transparent===!0?l.unshift(B):i.unshift(B)}function v(g,M,T){i.length>1&&i.sort(g||F2),s.length>1&&s.sort(M||Kv),l.length>1&&l.sort(M||Kv),T&&(i.reverse(),s.reverse(),l.reverse())}function S(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function H2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Qv,r.set(s,[f])):l>=c.length?(f=new Qv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function G2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Tt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=i,i}}}function V2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let k2=0;function X2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function W2(r){const e=new G2,i=V2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new ee);const l=new ee,c=new cn,f=new cn;function p(d){let v=0,S=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,T=0,C=0,E=0,y=0,B=0,F=0,w=0,I=0,U=0,O=0;d.sort(X2);for(let L=0,k=d.length;L<k;L++){const V=d[L],Q=V.color,fe=V.intensity,de=V.distance;let ie=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===nr?ie=V.shadow.map.texture:ie=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Q.r*fe,S+=Q.g*fe,g+=Q.b*fe;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],fe);O++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,K=i.get(V);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ie,s.directionalShadowMatrix[M]=V.shadow.matrix,B++}s.directional[M]=z,M++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Q).multiplyScalar(fe),z.distance=de,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[C]=z;const W=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,W.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[C]=W.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=ie,w++}C++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(Q).multiplyScalar(fe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[E]=z,E++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const W=V.shadow,K=i.get(V);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,s.pointShadow[T]=K,s.pointShadowMap[T]=ie,s.pointShadowMatrix[T]=V.shadow.matrix,F++}s.point[T]=z,T++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(fe),z.groundColor.copy(V.groundColor).multiplyScalar(fe),s.hemi[y]=z,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==E||b.hemiLength!==y||b.numDirectionalShadows!==B||b.numPointShadows!==F||b.numSpotShadows!==w||b.numSpotMaps!==I||b.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=E,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=w+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=O,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=E,b.hemiLength=y,b.numDirectionalShadows=B,b.numPointShadows=F,b.numSpotShadows=w,b.numSpotMaps=I,b.numLightProbes=O,s.version=k2++)}function m(d,v){let S=0,g=0,M=0,T=0,C=0;const E=v.matrixWorldInverse;for(let y=0,B=d.length;y<B;y++){const F=d[y];if(F.isDirectionalLight){const w=s.directional[S];w.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),S++}else if(F.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(E),w.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(E),M++}else if(F.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(E),f.identity(),c.copy(F.matrixWorld),c.premultiply(E),f.extractRotation(c),w.halfWidth.set(F.width*.5,0,0),w.halfHeight.set(0,F.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),T++}else if(F.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(E),g++}else if(F.isHemisphereLight){const w=s.hemi[C];w.direction.setFromMatrixPosition(F.matrixWorld),w.direction.transformDirection(E),C++}}}return{setup:p,setupView:m,state:s}}function Jv(r){const e=new W2(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function Y2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Jv(r),e.set(l,[p])):c>=f.length?(p=new Jv(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
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
}`,K2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],Q2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],jv=new cn,ml=new ee,Md=new ee;function J2(r,e,i){let s=new Yp;const l=new st,c=new st,f=new un,p=new sb,m=new rb,d={},v=i.maxTextureSize,S={[xs]:ri,[ri]:xs,[ea]:ea},g=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:q2,fragmentShader:Z2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Si;T.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new En(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let y=this.type;this.render=function(U,O,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||U.length===0)return;this.type===NM&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yl);const L=r.getRenderTarget(),k=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(La),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const fe=y!==this.type;fe&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ie=>ie.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ie=U.length;de<ie;de++){const z=U[de],W=z.shadow;if(W===void 0){lt("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const K=W.getFrameExtents();l.multiply(K),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/K.x),l.x=c.x*K.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/K.y),l.y=c.y*K.y,W.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=pe,W.map===null||fe===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===_l){if(z.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new aa(l.x,l.y,{format:nr,type:Ia,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new uo(l.x,l.y,ta),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=za,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Hn,W.map.depthTexture.magFilter=Hn}else z.isPointLight?(W.map=new Iy(l.x),W.map.depthTexture=new $E(l.x,sa)):(W.map=new aa(l.x,l.y),W.map.depthTexture=new uo(l.x,l.y,sa)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=za,this.type===yl?(W.map.depthTexture.compareFunction=pe?Fp:Bp,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Hn,W.map.depthTexture.magFilter=Hn);W.camera.updateProjectionMatrix()}const Te=W.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Te;P++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,P),r.clear();else{P===0&&(r.setRenderTarget(W.map),r.clear());const J=W.getViewport(P);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Q.viewport(f)}if(z.isPointLight){const J=W.camera,X=W.matrix,_e=z.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),ml.setFromMatrixPosition(z.matrixWorld),J.position.copy(ml),Md.copy(J.position),Md.add(K2[P]),J.up.copy(Q2[P]),J.lookAt(Md),J.updateMatrixWorld(),X.makeTranslation(-ml.x,-ml.y,-ml.z),jv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(jv,J.coordinateSystem,J.reversedDepth)}else W.updateMatrices(z);s=W.getFrustum(),w(O,b,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===_l&&B(W,b),W.needsUpdate=!1}y=this.type,E.needsUpdate=!1,r.setRenderTarget(L,k,V)};function B(U,O){const b=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new aa(l.x,l.y,{format:nr,type:Ia})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,C,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,b,M,C,null)}function F(U,O,b,L){let k=null;const V=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)k=V;else if(k=b.isPointLight===!0?m:p,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=k.uuid,fe=O.uuid;let de=d[Q];de===void 0&&(de={},d[Q]=de);let ie=de[fe];ie===void 0&&(ie=k.clone(),de[fe]=ie,O.addEventListener("dispose",I)),k=ie}if(k.visible=O.visible,k.wireframe=O.wireframe,L===_l?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:S[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Q=r.properties.get(k);Q.light=b}return k}function w(U,O,b,L,k){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===_l)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),de=U.material;if(Array.isArray(de)){const ie=fe.groups;for(let z=0,W=ie.length;z<W;z++){const K=ie[z],pe=de[K.materialIndex];if(pe&&pe.visible){const Te=F(U,pe,L,k);U.onBeforeShadow(r,U,O,b,fe,Te,K),r.renderBufferDirect(b,null,fe,Te,U,K),U.onAfterShadow(r,U,O,b,fe,Te,K)}}}else if(de.visible){const ie=F(U,de,L,k);U.onBeforeShadow(r,U,O,b,fe,ie,null),r.renderBufferDirect(b,null,fe,ie,U,null),U.onAfterShadow(r,U,O,b,fe,ie,null)}}const Q=U.children;for(let fe=0,de=Q.length;fe<de;fe++)w(Q[fe],O,b,L,k)}function I(U){U.target.removeEventListener("dispose",I);for(const b in d){const L=d[b],k=U.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function j2(r,e){function i(){let Z=!1;const Ue=new un;let xe=null;const Oe=new un(0,0,0,0);return{setMask:function(Ve){xe!==Ve&&!Z&&(r.colorMask(Ve,Ve,Ve,Ve),xe=Ve)},setLocked:function(Ve){Z=Ve},setClear:function(Ve,Ae,Je,qe,sn){sn===!0&&(Ve*=qe,Ae*=qe,Je*=qe),Ue.set(Ve,Ae,Je,qe),Oe.equals(Ue)===!1&&(r.clearColor(Ve,Ae,Je,qe),Oe.copy(Ue))},reset:function(){Z=!1,xe=null,Oe.set(-1,0,0,0)}}}function s(){let Z=!1,Ue=!1,xe=null,Oe=null,Ve=null;return{setReversed:function(Ae){if(Ue!==Ae){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const qe=Ve;Ve=null,this.setClear(qe)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?Ee(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(Ae){xe!==Ae&&!Z&&(r.depthMask(Ae),xe=Ae)},setFunc:function(Ae){if(Ue&&(Ae=uE[Ae]),Oe!==Ae){switch(Ae){case wd:r.depthFunc(r.NEVER);break;case Dd:r.depthFunc(r.ALWAYS);break;case Nd:r.depthFunc(r.LESS);break;case lo:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Ld:r.depthFunc(r.GEQUAL);break;case Od:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Ve!==Ae&&(Ve=Ae,Ue&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){Z=!1,xe=null,Oe=null,Ve=null,Ue=!1}}}function l(){let Z=!1,Ue=null,xe=null,Oe=null,Ve=null,Ae=null,Je=null,qe=null,sn=null;return{setTest:function(It){Z||(It?Ee(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(It){Ue!==It&&!Z&&(r.stencilMask(It),Ue=It)},setFunc:function(It,oi,li){(xe!==It||Oe!==oi||Ve!==li)&&(r.stencilFunc(It,oi,li),xe=It,Oe=oi,Ve=li)},setOp:function(It,oi,li){(Ae!==It||Je!==oi||qe!==li)&&(r.stencilOp(It,oi,li),Ae=It,Je=oi,qe=li)},setLocked:function(It){Z=It},setClear:function(It){sn!==It&&(r.clearStencil(It),sn=It)},reset:function(){Z=!1,Ue=null,xe=null,Oe=null,Ve=null,Ae=null,Je=null,qe=null,sn=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g={},M=new WeakMap,T=[],C=null,E=!1,y=null,B=null,F=null,w=null,I=null,U=null,O=null,b=new Tt(0,0,0),L=0,k=!1,V=null,Q=null,fe=null,de=null,ie=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(pe)[1]),W=K>=1):pe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),W=K>=2);let Te=null,P={};const J=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),_e=new un().fromArray(J),Ce=new un().fromArray(X);function ae(Z,Ue,xe,Oe){const Ve=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Z,Ae),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<xe;Je++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ve):r.texImage2D(Ue+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ve);return Ae}const ve={};ve[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(lo),jt(!1),$t(K_),Ee(r.CULL_FACE),_t(La);function Ee(Z){v[Z]!==!0&&(r.enable(Z),v[Z]=!0)}function ke(Z){v[Z]!==!1&&(r.disable(Z),v[Z]=!1)}function rt(Z,Ue){return g[Z]!==Ue?(r.bindFramebuffer(Z,Ue),g[Z]=Ue,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ue),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function $e(Z,Ue){let xe=T,Oe=!1;if(Z){xe=M.get(Ue),xe===void 0&&(xe=[],M.set(Ue,xe));const Ve=Z.textures;if(xe.length!==Ve.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Je=Ve.length;Ae<Je;Ae++)xe[Ae]=r.COLOR_ATTACHMENT0+Ae;xe.length=Ve.length,Oe=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(xe)}function Xt(Z){return C!==Z?(r.useProgram(Z),C=Z,!0):!1}const dt={[Ks]:r.FUNC_ADD,[LM]:r.FUNC_SUBTRACT,[OM]:r.FUNC_REVERSE_SUBTRACT};dt[PM]=r.MIN,dt[IM]=r.MAX;const xt={[zM]:r.ZERO,[BM]:r.ONE,[FM]:r.SRC_COLOR,[Rd]:r.SRC_ALPHA,[WM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[GM]:r.DST_ALPHA,[HM]:r.ONE_MINUS_SRC_COLOR,[Cd]:r.ONE_MINUS_SRC_ALPHA,[XM]:r.ONE_MINUS_DST_COLOR,[VM]:r.ONE_MINUS_DST_ALPHA,[YM]:r.CONSTANT_COLOR,[qM]:r.ONE_MINUS_CONSTANT_COLOR,[ZM]:r.CONSTANT_ALPHA,[KM]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(Z,Ue,xe,Oe,Ve,Ae,Je,qe,sn,It){if(Z===La){E===!0&&(ke(r.BLEND),E=!1);return}if(E===!1&&(Ee(r.BLEND),E=!0),Z!==UM){if(Z!==y||It!==k){if((B!==Ks||I!==Ks)&&(r.blendEquation(r.FUNC_ADD),B=Ks,I=Ks),It)switch(Z){case ao:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Q_:r.blendFunc(r.ONE,r.ONE);break;case J_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case ao:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Q_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case J_:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",Z);break}F=null,w=null,U=null,O=null,b.set(0,0,0),L=0,y=Z,k=It}return}Ve=Ve||Ue,Ae=Ae||xe,Je=Je||Oe,(Ue!==B||Ve!==I)&&(r.blendEquationSeparate(dt[Ue],dt[Ve]),B=Ue,I=Ve),(xe!==F||Oe!==w||Ae!==U||Je!==O)&&(r.blendFuncSeparate(xt[xe],xt[Oe],xt[Ae],xt[Je]),F=xe,w=Oe,U=Ae,O=Je),(qe.equals(b)===!1||sn!==L)&&(r.blendColor(qe.r,qe.g,qe.b,sn),b.copy(qe),L=sn),y=Z,k=!1}function vt(Z,Ue){Z.side===ea?ke(r.CULL_FACE):Ee(r.CULL_FACE);let xe=Z.side===ri;Ue&&(xe=!xe),jt(xe),Z.blending===ao&&Z.transparent===!1?_t(La):_t(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Oe=Z.stencilWrite;p.setTest(Oe),Oe&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Se(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Z){V!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),V=Z)}function $t(Z){Z!==wM?(Ee(r.CULL_FACE),Z!==Q&&(Z===K_?r.cullFace(r.BACK):Z===DM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),Q=Z}function en(Z){Z!==fe&&(W&&r.lineWidth(Z),fe=Z)}function Se(Z,Ue,xe){Z?(Ee(r.POLYGON_OFFSET_FILL),(de!==Ue||ie!==xe)&&(de=Ue,ie=xe,f.getReversed()&&(Ue=-Ue),r.polygonOffset(Ue,xe))):ke(r.POLYGON_OFFSET_FILL)}function we(Z){Z?Ee(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function De(Z){Z===void 0&&(Z=r.TEXTURE0+z-1),Te!==Z&&(r.activeTexture(Z),Te=Z)}function H(Z,Ue,xe){xe===void 0&&(Te===null?xe=r.TEXTURE0+z-1:xe=Te);let Oe=P[xe];Oe===void 0&&(Oe={type:void 0,texture:void 0},P[xe]=Oe),(Oe.type!==Z||Oe.texture!==Ue)&&(Te!==xe&&(r.activeTexture(xe),Te=xe),r.bindTexture(Z,Ue||ve[Z]),Oe.type=Z,Oe.texture=Ue)}function Fe(){const Z=P[Te];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Pe(){try{r.compressedTexImage2D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function x(){try{r.texSubImage2D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function Y(){try{r.texSubImage3D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function ne(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function Re(){try{r.texStorage2D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function Ne(){try{r.texStorage3D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function he(){try{r.texImage2D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function ge(){try{r.texImage3D(...arguments)}catch(Z){wt("WebGLState:",Z)}}function Le(Z){return S[Z]!==void 0?S[Z]:r.getParameter(Z)}function Xe(Z,Ue){S[Z]!==Ue&&(r.pixelStorei(Z,Ue),S[Z]=Ue)}function Be(Z){_e.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),_e.copy(Z))}function Ie(Z){Ce.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ce.copy(Z))}function tt(Z,Ue){let xe=d.get(Ue);xe===void 0&&(xe=new WeakMap,d.set(Ue,xe));let Oe=xe.get(Z);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ue,Z.name),xe.set(Z,Oe))}function nt(Z,Ue){const Oe=d.get(Ue).get(Z);m.get(Ue)!==Oe&&(r.uniformBlockBinding(Ue,Oe,Z.__bindingPointIndex),m.set(Ue,Oe))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},S={},Te=null,P={},g={},M=new WeakMap,T=[],C=null,E=!1,y=null,B=null,F=null,w=null,I=null,U=null,O=null,b=new Tt(0,0,0),L=0,k=!1,V=null,Q=null,fe=null,de=null,ie=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ee,disable:ke,bindFramebuffer:rt,drawBuffers:$e,useProgram:Xt,setBlending:_t,setMaterial:vt,setFlipSided:jt,setCullFace:$t,setLineWidth:en,setPolygonOffset:Se,setScissorTest:we,activeTexture:De,bindTexture:H,unbindTexture:Fe,compressedTexImage2D:Pe,compressedTexImage3D:D,texImage2D:he,texImage3D:ge,pixelStorei:Xe,getParameter:Le,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:Re,texStorage3D:Ne,texSubImage2D:x,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:ne,scissor:Be,viewport:Ie,reset:ut}}function $2(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new st,v=new WeakMap,S=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,x){return T?new OffscreenCanvas(D,x):Au("canvas")}function E(D,x,Y){let $=1;const ne=Pe(D);if((ne.width>Y||ne.height>Y)&&($=Y/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor($*ne.width),Ne=Math.floor($*ne.height);g===void 0&&(g=C(Re,Ne));const he=x?C(Re,Ne):g;return he.width=Re,he.height=Ne,he.getContext("2d").drawImage(D,0,0,Re,Ne),lt("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Re+"x"+Ne+")."),he}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function y(D){return D.generateMipmaps}function B(D){r.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(D,x,Y,$,ne,Re=!1){if(D!==null){if(r[D]!==void 0)return r[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ne;$&&(Ne=e.get("EXT_texture_norm16"),Ne||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=x;if(x===r.RED&&(Y===r.FLOAT&&(he=r.R32F),Y===r.HALF_FLOAT&&(he=r.R16F),Y===r.UNSIGNED_BYTE&&(he=r.R8),Y===r.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),Y===r.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),x===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(he=r.R8UI),Y===r.UNSIGNED_SHORT&&(he=r.R16UI),Y===r.UNSIGNED_INT&&(he=r.R32UI),Y===r.BYTE&&(he=r.R8I),Y===r.SHORT&&(he=r.R16I),Y===r.INT&&(he=r.R32I)),x===r.RG&&(Y===r.FLOAT&&(he=r.RG32F),Y===r.HALF_FLOAT&&(he=r.RG16F),Y===r.UNSIGNED_BYTE&&(he=r.RG8),Y===r.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),Y===r.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(he=r.RG8UI),Y===r.UNSIGNED_SHORT&&(he=r.RG16UI),Y===r.UNSIGNED_INT&&(he=r.RG32UI),Y===r.BYTE&&(he=r.RG8I),Y===r.SHORT&&(he=r.RG16I),Y===r.INT&&(he=r.RG32I)),x===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(he=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(he=r.RGB16UI),Y===r.UNSIGNED_INT&&(he=r.RGB32UI),Y===r.BYTE&&(he=r.RGB8I),Y===r.SHORT&&(he=r.RGB16I),Y===r.INT&&(he=r.RGB32I)),x===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),Y===r.UNSIGNED_INT&&(he=r.RGBA32UI),Y===r.BYTE&&(he=r.RGBA8I),Y===r.SHORT&&(he=r.RGBA16I),Y===r.INT&&(he=r.RGBA32I)),x===r.RGB&&(Y===r.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),Y===r.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),x===r.RGBA){const ge=Re?Tu:Dt.getTransfer(ne);Y===r.FLOAT&&(he=r.RGBA32F),Y===r.HALF_FLOAT&&(he=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(he=ge===Vt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),Y===r.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(D,x){let Y;return D?x===null||x===sa||x===Tl?Y=r.DEPTH24_STENCIL8:x===ta?Y=r.DEPTH32F_STENCIL8:x===bl&&(Y=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sa||x===Tl?Y=r.DEPTH_COMPONENT24:x===ta?Y=r.DEPTH_COMPONENT32F:x===bl&&(Y=r.DEPTH_COMPONENT16),Y}function U(D,x){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Hn&&D.minFilter!==Nn?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function O(D){const x=D.target;x.removeEventListener("dispose",O),L(x),x.isVideoTexture&&v.delete(x),x.isHTMLTexture&&S.delete(x)}function b(D){const x=D.target;x.removeEventListener("dispose",b),V(x)}function L(D){const x=s.get(D);if(x.__webglInit===void 0)return;const Y=D.source,$=M.get(Y);if($){const ne=$[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(D),Object.keys($).length===0&&M.delete(Y)}s.remove(D)}function k(D){const x=s.get(D);r.deleteTexture(x.__webglTexture);const Y=D.source,$=M.get(Y);delete $[x.__cacheKey],f.memory.textures--}function V(D){const x=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ne=0;ne<x.__webglFramebuffer[$].length;ne++)r.deleteFramebuffer(x.__webglFramebuffer[$][ne]);else r.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)r.deleteFramebuffer(x.__webglFramebuffer[$]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const Y=D.textures;for(let $=0,ne=Y.length;$<ne;$++){const Re=s.get(Y[$]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),f.memory.textures--),s.remove(Y[$])}s.remove(D)}let Q=0;function fe(){Q=0}function de(){return Q}function ie(D){Q=D}function z(){const D=Q;return D>=l.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Q+=1,D}function W(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function K(D,x){const Y=s.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const $=D.image;if($===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,D,x);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+x)}function pe(D,x){const Y=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){ke(Y,D,x);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+x)}function Te(D,x){const Y=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){ke(Y,D,x);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+x)}function P(D,x){const Y=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){rt(Y,D,x);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+x)}const J={[Id]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[zd]:r.MIRRORED_REPEAT},X={[Hn]:r.NEAREST,[jM]:r.NEAREST_MIPMAP_NEAREST,[kc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[Yh]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},_e={[tE]:r.NEVER,[rE]:r.ALWAYS,[nE]:r.LESS,[Bp]:r.LEQUAL,[iE]:r.EQUAL,[Fp]:r.GEQUAL,[aE]:r.GREATER,[sE]:r.NOTEQUAL};function Ce(D,x){if(x.type===ta&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Nn||x.magFilter===Yh||x.magFilter===kc||x.magFilter===js||x.minFilter===Nn||x.minFilter===Yh||x.minFilter===kc||x.minFilter===js)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[x.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[x.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[x.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,X[x.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,X[x.minFilter]),x.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Hn||x.minFilter!==kc&&x.minFilter!==js||x.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function ae(D,x){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",O));const $=x.source;let ne=M.get($);ne===void 0&&(ne={},M.set($,ne));const Re=W(x);if(Re!==D.__cacheKey){ne[Re]===void 0&&(ne[Re]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),ne[Re].usedTimes++;const Ne=ne[D.__cacheKey];Ne!==void 0&&(ne[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(x)),D.__cacheKey=Re,D.__webglTexture=ne[Re].texture}return Y}function ve(D,x,Y){return Math.floor(Math.floor(D/Y)/x)}function Ee(D,x,Y,$){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,Y,$,x.data);else{Re.sort((Xe,Be)=>Xe.start-Be.start);let Ne=0;for(let Xe=1;Xe<Re.length;Xe++){const Be=Re[Ne],Ie=Re[Xe],tt=Be.start+Be.count,nt=ve(Ie.start,x.width,4),ut=ve(Be.start,x.width,4);Ie.start<=tt+1&&nt===ut&&ve(Ie.start+Ie.count-1,x.width,4)===nt?Be.count=Math.max(Be.count,Ie.start+Ie.count-Be.start):(++Ne,Re[Ne]=Ie)}Re.length=Ne+1;const he=i.getParameter(r.UNPACK_ROW_LENGTH),ge=i.getParameter(r.UNPACK_SKIP_PIXELS),Le=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Xe=0,Be=Re.length;Xe<Be;Xe++){const Ie=Re[Xe],tt=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),ut=tt%x.width,Z=Math.floor(tt/x.width),Ue=nt,xe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ut,Z,Ue,xe,Y,$,x.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,he),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function ke(D,x,Y){let $=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=r.TEXTURE_3D);const ne=ae(D,x),Re=x.source;i.bindTexture($,D.__webglTexture,r.TEXTURE0+Y);const Ne=s.get(Re);if(Re.version!==Ne.__version||ne===!0){if(i.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const xe=Dt.getPrimaries(Dt.workingColorSpace),Oe=x.colorSpace===vs?null:Dt.getPrimaries(x.colorSpace),Ve=x.colorSpace===vs||xe===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let ge=E(x.image,!1,l.maxTextureSize);ge=Fe(x,ge);const Le=c.convert(x.format,x.colorSpace),Xe=c.convert(x.type);let Be=w(x.internalFormat,Le,Xe,x.normalized,x.colorSpace,x.isVideoTexture);Ce($,x);let Ie;const tt=x.mipmaps,nt=x.isVideoTexture!==!0,ut=Ne.__version===void 0||ne===!0,Z=Re.dataReady,Ue=U(x,ge);if(x.isDepthTexture)Be=I(x.format===$s,x.type),ut&&(nt?i.texStorage2D(r.TEXTURE_2D,1,Be,ge.width,ge.height):i.texImage2D(r.TEXTURE_2D,0,Be,ge.width,ge.height,0,Le,Xe,null));else if(x.isDataTexture)if(tt.length>0){nt&&ut&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,tt[0].width,tt[0].height);for(let xe=0,Oe=tt.length;xe<Oe;xe++)Ie=tt[xe],nt?Z&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Xe,Ie.data):i.texImage2D(r.TEXTURE_2D,xe,Be,Ie.width,Ie.height,0,Le,Xe,Ie.data);x.generateMipmaps=!1}else nt?(ut&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,ge.width,ge.height),Z&&Ee(x,ge,Le,Xe)):i.texImage2D(r.TEXTURE_2D,0,Be,ge.width,ge.height,0,Le,Xe,ge.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){nt&&ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Be,tt[0].width,tt[0].height,ge.depth);for(let xe=0,Oe=tt.length;xe<Oe;xe++)if(Ie=tt[xe],x.format!==ki)if(Le!==null)if(nt){if(Z)if(x.layerUpdates.size>0){const Ve=wv(Ie.width,Ie.height,x.format,x.type);for(const Ae of x.layerUpdates){const Je=Ie.data.subarray(Ae*Ve/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*Ve/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Ae,Ie.width,Ie.height,1,Le,Je)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,ge.depth,Le,Ie.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Be,Ie.width,Ie.height,ge.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,ge.depth,Le,Xe,Ie.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xe,Be,Ie.width,Ie.height,ge.depth,0,Le,Xe,Ie.data)}else{nt&&ut&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,tt[0].width,tt[0].height);for(let xe=0,Oe=tt.length;xe<Oe;xe++)Ie=tt[xe],x.format!==ki?Le!==null?nt?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Ie.data):i.compressedTexImage2D(r.TEXTURE_2D,xe,Be,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Z&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Xe,Ie.data):i.texImage2D(r.TEXTURE_2D,xe,Be,Ie.width,Ie.height,0,Le,Xe,Ie.data)}else if(x.isDataArrayTexture)if(nt){if(ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Be,ge.width,ge.height,ge.depth),Z)if(x.layerUpdates.size>0){const xe=wv(ge.width,ge.height,x.format,x.type);for(const Oe of x.layerUpdates){const Ve=ge.data.subarray(Oe*xe/ge.data.BYTES_PER_ELEMENT,(Oe+1)*xe/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,ge.width,ge.height,1,Le,Xe,Ve)}x.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,Xe,ge.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,Le,Xe,ge.data);else if(x.isData3DTexture)nt?(ut&&i.texStorage3D(r.TEXTURE_3D,Ue,Be,ge.width,ge.height,ge.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,Xe,ge.data)):i.texImage3D(r.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,Le,Xe,ge.data);else if(x.isFramebufferTexture){if(ut)if(nt)i.texStorage2D(r.TEXTURE_2D,Ue,Be,ge.width,ge.height);else{let xe=ge.width,Oe=ge.height;for(let Ve=0;Ve<Ue;Ve++)i.texImage2D(r.TEXTURE_2D,Ve,Be,xe,Oe,0,Le,Xe,null),xe>>=1,Oe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ge.parentNode!==xe){xe.appendChild(ge),S.add(x),xe.onpaint=Oe=>{const Ve=Oe.changedElements;for(const Ae of S)Ve.includes(Ae.image)&&(Ae.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ge);else{const Ve=r.RGBA,Ae=r.RGBA,Je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ve,Ae,Je,ge)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(tt.length>0){if(nt&&ut){const xe=Pe(tt[0]);i.texStorage2D(r.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,Oe=tt.length;xe<Oe;xe++)Ie=tt[xe],nt?Z&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Le,Xe,Ie):i.texImage2D(r.TEXTURE_2D,xe,Be,Le,Xe,Ie);x.generateMipmaps=!1}else if(nt){if(ut){const xe=Pe(ge);i.texStorage2D(r.TEXTURE_2D,Ue,Be,xe.width,xe.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Xe,ge)}else i.texImage2D(r.TEXTURE_2D,0,Be,Le,Xe,ge);y(x)&&B($),Ne.__version=Re.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function rt(D,x,Y){if(x.image.length!==6)return;const $=ae(D,x),ne=x.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Y);const Re=s.get(ne);if(ne.version!==Re.__version||$===!0){i.activeTexture(r.TEXTURE0+Y);const Ne=Dt.getPrimaries(Dt.workingColorSpace),he=x.colorSpace===vs?null:Dt.getPrimaries(x.colorSpace),ge=x.colorSpace===vs||Ne===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,Xe=x.image[0]&&x.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!Le&&!Xe?Be[Ae]=E(x.image[Ae],!0,l.maxCubemapSize):Be[Ae]=Xe?x.image[Ae].image:x.image[Ae],Be[Ae]=Fe(x,Be[Ae]);const Ie=Be[0],tt=c.convert(x.format,x.colorSpace),nt=c.convert(x.type),ut=w(x.internalFormat,tt,nt,x.normalized,x.colorSpace),Z=x.isVideoTexture!==!0,Ue=Re.__version===void 0||$===!0,xe=ne.dataReady;let Oe=U(x,Ie);Ce(r.TEXTURE_CUBE_MAP,x);let Ve;if(Le){Z&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ut,Ie.width,Ie.height);for(let Ae=0;Ae<6;Ae++){Ve=Be[Ae].mipmaps;for(let Je=0;Je<Ve.length;Je++){const qe=Ve[Je];x.format!==ki?tt!==null?Z?xe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,qe.width,qe.height,tt,qe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,ut,qe.width,qe.height,0,qe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,qe.width,qe.height,tt,nt,qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,ut,qe.width,qe.height,0,tt,nt,qe.data)}}}else{if(Ve=x.mipmaps,Z&&Ue){Ve.length>0&&Oe++;const Ae=Pe(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Xe){Z?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,tt,nt,Be[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Be[Ae].width,Be[Ae].height,0,tt,nt,Be[Ae].data);for(let Je=0;Je<Ve.length;Je++){const sn=Ve[Je].image[Ae].image;Z?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,sn.width,sn.height,tt,nt,sn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,ut,sn.width,sn.height,0,tt,nt,sn.data)}}else{Z?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,nt,Be[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,tt,nt,Be[Ae]);for(let Je=0;Je<Ve.length;Je++){const qe=Ve[Je];Z?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,tt,nt,qe.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,ut,tt,nt,qe.image[Ae])}}}y(x)&&B(r.TEXTURE_CUBE_MAP),Re.__version=ne.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function $e(D,x,Y,$,ne,Re){const Ne=c.convert(Y.format,Y.colorSpace),he=c.convert(Y.type),ge=w(Y.internalFormat,Ne,he,Y.normalized,Y.colorSpace),Le=s.get(x),Xe=s.get(Y);if(Xe.__renderTarget=x,!Le.__hasExternalTextures){const Be=Math.max(1,x.width>>Re),Ie=Math.max(1,x.height>>Re);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?i.texImage3D(ne,Re,ge,Be,Ie,x.depth,0,Ne,he,null):i.texImage2D(ne,Re,ge,Be,Ie,0,Ne,he,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),De(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,ne,Xe.__webglTexture,0,we(x)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,ne,Xe.__webglTexture,Re),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(D,x,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,D),x.depthBuffer){const $=x.depthTexture,ne=$&&$.isDepthTexture?$.type:null,Re=I(x.stencilBuffer,ne),Ne=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;De(x)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we(x),Re,x.width,x.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,we(x),Re,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Re,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,D)}else{const $=x.textures;for(let ne=0;ne<$.length;ne++){const Re=$[ne],Ne=c.convert(Re.format,Re.colorSpace),he=c.convert(Re.type),ge=w(Re.internalFormat,Ne,he,Re.normalized,Re.colorSpace);De(x)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we(x),ge,x.width,x.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,we(x),ge,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ge,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(D,x,Y){const $=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=s.get(x.depthTexture);if(ne.__renderTarget=x,(!ne.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,x.depthTexture.addEventListener("dispose",O)),ne.__webglTexture===void 0){ne.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,x.depthTexture);const Le=c.convert(x.depthTexture.format),Xe=c.convert(x.depthTexture.type);let Be;x.depthTexture.format===za?Be=r.DEPTH_COMPONENT24:x.depthTexture.format===$s&&(Be=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Be,x.width,x.height,0,Le,Xe,null)}}else K(x.depthTexture,0);const Re=ne.__webglTexture,Ne=we(x),he=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,ge=x.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===za)De(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Re,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Re,0);else if(x.depthTexture.format===$s)De(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,he,Re,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,ge,he,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(D){const x=s.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=$}if(D.depthTexture&&!x.__autoAllocateDepthBuffer)if(Y)for(let $=0;$<6;$++)dt(x.__webglFramebuffer[$],D,$);else{const $=D.texture.mipmaps;$&&$.length>0?dt(x.__webglFramebuffer[0],D,0):dt(x.__webglFramebuffer,D,0)}else if(Y){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=r.createRenderbuffer(),Xt(x.__webglDepthbuffer[$],D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=x.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Re)}}else{const $=D.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Xt(x.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Re)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(D,x,Y){const $=s.get(D);x!==void 0&&$e($.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&xt(D)}function vt(D){const x=D.texture,Y=s.get(D),$=s.get(x);D.addEventListener("dispose",b);const ne=D.textures,Re=D.isWebGLCubeRenderTarget===!0,Ne=ne.length>1;if(Ne||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=x.version,f.memory.textures++),Re){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let ge=0;ge<x.mipmaps.length;ge++)Y.__webglFramebuffer[he][ge]=r.createFramebuffer()}else Y.__webglFramebuffer[he]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)Y.__webglFramebuffer[he]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let he=0,ge=ne.length;he<ge;he++){const Le=s.get(ne[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&De(D)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const ge=ne[he];Y.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const Le=c.convert(ge.format,ge.colorSpace),Xe=c.convert(ge.type),Be=w(ge.internalFormat,Le,Xe,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),Ie=we(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(Y.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)$e(Y.__webglFramebuffer[he][ge],D,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else $e(Y.__webglFramebuffer[he],D,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(x)&&B(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let he=0,ge=ne.length;he<ge;he++){const Le=ne[he],Xe=s.get(Le);let Be=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,Xe.__webglTexture),Ce(Be,Le),$e(Y.__webglFramebuffer,D,Le,r.COLOR_ATTACHMENT0+he,Be,0),y(Le)&&B(Be)}i.unbindTexture()}else{let he=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(he,$.__webglTexture),Ce(he,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)$e(Y.__webglFramebuffer[ge],D,x,r.COLOR_ATTACHMENT0,he,ge);else $e(Y.__webglFramebuffer,D,x,r.COLOR_ATTACHMENT0,he,0);y(x)&&B(he),i.unbindTexture()}D.depthBuffer&&xt(D)}function jt(D){const x=D.textures;for(let Y=0,$=x.length;Y<$;Y++){const ne=x[Y];if(y(ne)){const Re=F(D),Ne=s.get(ne).__webglTexture;i.bindTexture(Re,Ne),B(Re),i.unbindTexture()}}}const $t=[],en=[];function Se(D){if(D.samples>0){if(De(D)===!1){const x=D.textures,Y=D.width,$=D.height;let ne=r.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(D),he=x.length>1;if(he)for(let Le=0;Le<x.length;Le++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const Xe=s.get(x[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,Y,$,0,0,Y,$,ne,r.NEAREST),m===!0&&($t.length=0,en.length=0,$t.push(r.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.resolveDepthBuffer===!1&&($t.push(Re),en.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,en)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<x.length;Le++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const Xe=s.get(x[Le]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Xe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const x=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function we(D){return Math.min(l.maxSamples,D.samples)}function De(D){const x=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(D){const x=f.render.frame;v.get(D)!==x&&(v.set(D,x),D.update())}function Fe(D,x){const Y=D.colorSpace,$=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==bu&&Y!==vs&&(Dt.getTransfer(Y)===Vt?($!==ki||ne!==xi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Y)),x}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.getTextureUnits=de,this.setTextureUnits=ie,this.setTexture2D=K,this.setTexture2DArray=pe,this.setTexture3D=Te,this.setTextureCube=P,this.rebindTextures=_t,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function eR(r,e){function i(s,l=vs){let c;const f=Dt.getTransfer(l);if(s===xi)return r.UNSIGNED_BYTE;if(s===Lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_y)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===vy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===my)return r.BYTE;if(s===gy)return r.SHORT;if(s===bl)return r.UNSIGNED_SHORT;if(s===Up)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===ta)return r.FLOAT;if(s===Ia)return r.HALF_FLOAT;if(s===yy)return r.ALPHA;if(s===xy)return r.RGB;if(s===ki)return r.RGBA;if(s===za)return r.DEPTH_COMPONENT;if(s===$s)return r.DEPTH_STENCIL;if(s===Sy)return r.RED;if(s===Pp)return r.RED_INTEGER;if(s===nr)return r.RG;if(s===Ip)return r.RG_INTEGER;if(s===zp)return r.RGBA_INTEGER;if(s===_u||s===vu||s===yu||s===xu)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===Fd||s===Hd||s===Gd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===Mu||s===qd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vd||s===kd)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wd)return c.COMPRESSED_R11_EAC;if(s===Yd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Mu)return c.COMPRESSED_RG11_EAC;if(s===qd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd||s===jd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp||s===op)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Zd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ep)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tp)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sp)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lp||s===cp||s===up)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===lp)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fp||s===hp||s===Eu||s===dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===fp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Dy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ra({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new En(new er(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends bs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",E=new iR,y={},B=i.getContextAttributes();let F=null,w=null;const I=[],U=[],O=new st;let b=null;const L=new Ui;L.viewport=new un;const k=new Ui;k.viewport=new un;const V=[L,k],Q=new hb;let fe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=I[ae];return ve===void 0&&(ve=new jh,I[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=I[ae];return ve===void 0&&(ve=new jh,I[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=I[ae];return ve===void 0&&(ve=new jh,I[ae]=ve),ve.getHandSpace()};function ie(ae){const ve=U.indexOf(ae.inputSource);if(ve===-1)return;const Ee=I[ve];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,d||f),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){l.removeEventListener("select",ie),l.removeEventListener("selectstart",ie),l.removeEventListener("selectend",ie),l.removeEventListener("squeeze",ie),l.removeEventListener("squeezestart",ie),l.removeEventListener("squeezeend",ie),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",W);for(let ae=0;ae<I.length;ae++){const ve=U[ae];ve!==null&&(U[ae]=null,I[ae].disconnect(ve))}fe=null,de=null,E.reset();for(const ae in y)delete y[ae];e.setRenderTarget(F),M=null,g=null,S=null,l=null,w=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",ie),l.addEventListener("selectstart",ie),l.addEventListener("selectend",ie),l.addEventListener("squeeze",ie),l.addEventListener("squeezestart",ie),l.addEventListener("squeezeend",ie),l.addEventListener("end",z),l.addEventListener("inputsourceschange",W),B.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ke=null,rt=null;B.depth&&(rt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=B.stencil?$s:za,ke=B.stencil?Tl:sa);const $e={colorFormat:i.RGBA8,depthFormat:rt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer($e),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new aa(g.textureWidth,g.textureHeight,{format:ki,type:xi,depthTexture:new uo(g.textureWidth,g.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new aa(M.framebufferWidth,M.framebufferHeight,{format:ki,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function W(ae){for(let ve=0;ve<ae.removed.length;ve++){const Ee=ae.removed[ve],ke=U.indexOf(Ee);ke>=0&&(U[ke]=null,I[ke].disconnect(Ee))}for(let ve=0;ve<ae.added.length;ve++){const Ee=ae.added[ve];let ke=U.indexOf(Ee);if(ke===-1){for(let $e=0;$e<I.length;$e++)if($e>=U.length){U.push(Ee),ke=$e;break}else if(U[$e]===null){U[$e]=Ee,ke=$e;break}if(ke===-1)break}const rt=I[ke];rt&&rt.connect(Ee)}}const K=new ee,pe=new ee;function Te(ae,ve,Ee){K.setFromMatrixPosition(ve.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const ke=K.distanceTo(pe),rt=ve.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,Xt=rt[14]/(rt[10]-1),dt=rt[14]/(rt[10]+1),xt=(rt[9]+1)/rt[5],_t=(rt[9]-1)/rt[5],vt=(rt[8]-1)/rt[0],jt=($e[8]+1)/$e[0],$t=Xt*vt,en=Xt*jt,Se=ke/(-vt+jt),we=Se*-vt;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(we),ae.translateZ(Se),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),rt[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const De=Xt+Se,H=dt+Se,Fe=$t-we,Pe=en+(ke-we),D=xt*dt/H*De,x=_t*dt/H*De;ae.projectionMatrix.makePerspective(Fe,Pe,D,x,De,H),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function P(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ve=ae.near,Ee=ae.far;E.texture!==null&&(E.depthNear>0&&(ve=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),Q.near=k.near=L.near=ve,Q.far=k.far=L.far=Ee,(fe!==Q.near||de!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),fe=Q.near,de=Q.far),Q.layers.mask=ae.layers.mask|6,L.layers.mask=Q.layers.mask&-5,k.layers.mask=Q.layers.mask&-3;const ke=ae.parent,rt=Q.cameras;P(Q,ke);for(let $e=0;$e<rt.length;$e++)P(rt[$e],ke);rt.length===2?Te(Q,L,k):Q.projectionMatrix.copy(L.projectionMatrix),J(ae,Q,ke)};function J(ae,ve,Ee){Ee===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Rl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(Q)},this.getCameraTexture=function(ae){return y[ae]};let X=null;function _e(ae,ve){if(v=ve.getViewerPose(d||f),T=ve,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let ke=!1;Ee.length!==Q.cameras.length&&(Q.cameras.length=0,ke=!0);for(let dt=0;dt<Ee.length;dt++){const xt=Ee[dt];let _t=null;if(M!==null)_t=M.getViewport(xt);else{const jt=S.getViewSubImage(g,xt);_t=jt.viewport,dt===0&&(e.setRenderTargetTextures(w,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(w))}let vt=V[dt];vt===void 0&&(vt=new Ui,vt.layers.enable(dt),vt.viewport=new un,V[dt]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(_t.x,_t.y,_t.width,_t.height),dt===0&&(Q.matrix.copy(vt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ke===!0&&Q.cameras.push(vt)}const rt=l.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const dt=S.getDepthInformation(Ee[0]);dt&&dt.isValid&&dt.texture&&E.init(dt,l.renderState)}if(rt&&rt.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let dt=0;dt<Ee.length;dt++){const xt=Ee[dt].camera;if(xt){let _t=y[xt];_t||(_t=new Dy,y[xt]=_t);const vt=S.getCameraImage(xt);_t.sourceTexture=vt}}}}for(let Ee=0;Ee<I.length;Ee++){const ke=U[Ee],rt=I[Ee];ke!==null&&rt!==void 0&&rt.update(ke,ve,d||f)}X&&X(ae,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),T=null}const Ce=new Oy;Ce.setAnimationLoop(_e),this.setAnimationLoop=function(ae){X=ae},this.dispose=function(){}}}const sR=new cn,Gy=new ht;Gy.set(-1,0,0,0,1,0,0,0,1);function rR(r,e){function i(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function s(E,y){y.color.getRGB(E.fogColor.value,Ny(r)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function l(E,y,B,F,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(E,y):y.isMeshLambertMaterial?(c(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(E,y),S(E,y)):y.isMeshPhongMaterial?(c(E,y),v(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(E,y),g(E,y),y.isMeshPhysicalMaterial&&M(E,y,w)):y.isMeshMatcapMaterial?(c(E,y),T(E,y)):y.isMeshDepthMaterial?c(E,y):y.isMeshDistanceMaterial?(c(E,y),C(E,y)):y.isMeshNormalMaterial?c(E,y):y.isLineBasicMaterial?(f(E,y),y.isLineDashedMaterial&&p(E,y)):y.isPointsMaterial?m(E,y,B,F):y.isSpriteMaterial?d(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,i(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===ri&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,i(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===ri&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,i(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,i(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const B=e.get(y),F=B.envMap,w=B.envMapRotation;F&&(E.envMap.value=F,E.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(Gy),E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,E.aoMapTransform))}function f(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform))}function p(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,B,F){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*B,E.scale.value=F*.5,y.map&&(E.map.value=y.map,i(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function d(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function v(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function S(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function g(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function M(E,y,B){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=B.texture,E.transmissionSamplerSize.value.set(B.width,B.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,y){y.matcap&&(E.matcap.value=y.matcap)}function C(E,y){const B=e.get(y).light;E.referencePosition.value.setFromMatrixPosition(B.matrixWorld),E.nearDistance.value=B.shadow.camera.near,E.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oR(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,I){const U=I.program;s.uniformBlockBinding(w,U)}function d(w,I){let U=l[w.id];U===void 0&&(E(w),U=v(w),l[w.id]=U,w.addEventListener("dispose",B));const O=I.program;s.updateUBOMapping(w,O);const b=e.render.frame;c[w.id]!==b&&(g(w),c[w.id]=b)}function v(w){const I=S();w.__bindingPointIndex=I;const U=r.createBuffer(),O=w.__size,b=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function S(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const I=l[w.id],U=w.uniforms,O=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let b=0,L=U.length;b<L;b++){const k=U[b];if(Array.isArray(k))for(let V=0,Q=k.length;V<Q;V++)M(k[V],b,V,O);else M(k,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,I,U,O){if(C(w,I,U,O)===!0){const b=w.__offset,L=w.value;if(Array.isArray(L)){let k=0;for(let V=0;V<L.length;V++){const Q=L[V],fe=y(Q);T(Q,w.__data,k),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(k+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,w.__data)}}function T(w,I,U){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,U)}function C(w,I,U,O){const b=w.value,L=I+"_"+U;if(O[L]===void 0)return typeof b=="number"||typeof b=="boolean"?O[L]=b:ArrayBuffer.isView(b)?O[L]=b.slice():O[L]=b.clone(),!0;{const k=O[L];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return O[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(k.equals(b)===!1)return k.copy(b),!0}}return!1}function E(w){const I=w.uniforms;let U=0;const O=16;for(let L=0,k=I.length;L<k;L++){const V=Array.isArray(I[L])?I[L]:[I[L]];for(let Q=0,fe=V.length;Q<fe;Q++){const de=V[Q],ie=Array.isArray(de.value)?de.value:[de.value];for(let z=0,W=ie.length;z<W;z++){const K=ie[z],pe=y(K),Te=U%O,P=Te%pe.boundary,J=Te+P;U+=P,J!==0&&O-J<pe.storage&&(U+=O-J),de.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=pe.storage}}}const b=U%O;return b>0&&(U+=O-b),w.__size=U,w.__cache={},this}function y(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",w),I}function B(w){const I=w.target;I.removeEventListener("dispose",B);const U=f.indexOf(I.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function F(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:d,dispose:F}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function cR(){return ji===null&&(ji=new ZE(lR,16,16,nr,Ia),ji.name="DFG_LUT",ji.minFilter=Nn,ji.magFilter=Nn,ji.wrapS=Ua,ji.wrapT=Ua,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class uR{constructor(e={}){const{canvas:i=lE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=M,E=new Set([zp,Ip,Pp]),y=new Set([xi,sa,bl,Tl,Lp,Op]),B=new Uint32Array(4),F=new Int32Array(4),w=new ee;let I=null,U=null;const O=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,Q=null,fe=null,de=null,ie=null;this._outputColorSpace=ai;let z=0,W=0,K=null,pe=-1,Te=null;const P=new un,J=new un;let X=null;const _e=new Tt(0);let Ce=0,ae=i.width,ve=i.height,Ee=1,ke=null,rt=null;const $e=new un(0,0,ae,ve),Xt=new un(0,0,ae,ve);let dt=!1;const xt=new Yp;let _t=!1,vt=!1;const jt=new cn,$t=new ee,en=new un,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function De(){return K===null?Ee:1}let H=s;function Fe(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dp}`),i.addEventListener("webglcontextlost",sn,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",oi,!1),H===null){const j="webgl2";if(H=Fe(j,A),H===null)throw Fe(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let Pe,D,x,Y,$,ne,Re,Ne,he,ge,Le,Xe,Be,Ie,tt,nt,ut,Z,Ue,xe,Oe,Ve,Ae;function Je(){Pe=new cA(H),Pe.init(),Oe=new eR(H,Pe),D=new tA(H,Pe,e,Oe),x=new j2(H,Pe),D.reversedDepthBuffer&&g&&x.buffers.depth.setReversed(!0),fe=H.createFramebuffer(),de=H.createFramebuffer(),ie=H.createFramebuffer(),Y=new hA(H),$=new B2,ne=new $2(H,Pe,x,$,D,Oe,Y),Re=new lA(k),Ne=new gb(H),Ve=new $T(H,Ne),he=new uA(H,Ne,Y,Ve),ge=new pA(H,he,Ne,Ve,Y),Z=new dA(H,D,ne),tt=new nA($),Le=new z2(k,Re,Pe,D,Ve,tt),Xe=new rR(k,$),Be=new H2,Ie=new Y2(Pe),ut=new jT(k,Re,x,ge,T,m),nt=new J2(k,ge,D),Ae=new oR(H,Y,D,x),Ue=new eA(H,Pe,Y),xe=new fA(H,Pe,Y),Y.programs=Le.programs,k.capabilities=D,k.extensions=Pe,k.properties=$,k.renderLists=Be,k.shadowMap=nt,k.state=x,k.info=Y}Je(),C!==xi&&(L=new gA(C,i.width,i.height,p,l,c));const qe=new aR(k,H);this.xr=qe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ae,ve,!1))},this.getSize=function(A){return A.set(ae,ve)},this.setSize=function(A,j,ce=!0){if(qe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ve=j,i.width=Math.floor(A*Ee),i.height=Math.floor(j*Ee),ce===!0&&(i.style.width=A+"px",i.style.height=j+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ae*Ee,ve*Ee).floor()},this.setDrawingBufferSize=function(A,j,ce){ae=A,ve=j,Ee=ce,i.width=Math.floor(A*ce),i.height=Math.floor(j*ce),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===xi){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,j,ce,oe){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,j,ce,oe),x.viewport(P.copy($e).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Xt)},this.setScissor=function(A,j,ce,oe){A.isVector4?Xt.set(A.x,A.y,A.z,A.w):Xt.set(A,j,ce,oe),x.scissor(J.copy(Xt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){x.setScissorTest(dt=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ce=!0){let oe=0;if(A){let le=!1;if(K!==null){const He=K.texture.format;le=E.has(He)}if(le){const He=K.texture.type,Ye=y.has(He),ze=ut.getClearColor(),Ke=ut.getClearAlpha(),Ze=ze.r,it=ze.g,pt=ze.b;Ye?(B[0]=Ze,B[1]=it,B[2]=pt,B[3]=Ke,H.clearBufferuiv(H.COLOR,0,B)):(F[0]=Ze,F[1]=it,F[2]=pt,F[3]=Ke,H.clearBufferiv(H.COLOR,0,F))}else oe|=H.COLOR_BUFFER_BIT}j&&(oe|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(oe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&H.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",sn,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",oi,!1),ut.dispose(),Be.dispose(),Ie.dispose(),$.dispose(),Re.dispose(),ge.dispose(),Ve.dispose(),Ae.dispose(),Le.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",gn),qe.removeEventListener("sessionend",On),Qn.stop()};function sn(A){A.preventDefault(),Ru("WebGLRenderer: Context Lost."),V=!0}function It(){Ru("WebGLRenderer: Context Restored."),V=!1;const A=Y.autoReset,j=nt.enabled,ce=nt.autoUpdate,oe=nt.needsUpdate,le=nt.type;Je(),Y.autoReset=A,nt.enabled=j,nt.autoUpdate=ce,nt.needsUpdate=oe,nt.type=le}function oi(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function li(A){const j=A.target;j.removeEventListener("dispose",li),go(j)}function go(A){_o(A),$.remove(A)}function _o(A){const j=$.get(A).programs;j!==void 0&&(j.forEach(function(ce){Le.releaseProgram(ce)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ce,oe,le,He){j===null&&(j=Se);const Ye=le.isMesh&&le.matrixWorld.determinantAffine()<0,ze=Ha(A,j,ce,oe,le);x.setMaterial(oe,Ye);let Ke=ce.index,Ze=1;if(oe.wireframe===!0){if(Ke=he.getWireframeAttribute(ce),Ke===void 0)return;Ze=2}const it=ce.drawRange,pt=ce.attributes.position;let et=it.start*Ze,Nt=(it.start+it.count)*Ze;He!==null&&(et=Math.max(et,He.start*Ze),Nt=Math.min(Nt,(He.start+He.count)*Ze)),Ke!==null?(et=Math.max(et,0),Nt=Math.min(Nt,Ke.count)):pt!=null&&(et=Math.max(et,0),Nt=Math.min(Nt,pt.count));const rn=Nt-et;if(rn<0||rn===1/0)return;Ve.setup(le,oe,ze,ce,Ke);let Kt,zt=Ue;if(Ke!==null&&(Kt=Ne.get(Ke),zt=xe,zt.setIndex(Kt)),le.isMesh)oe.wireframe===!0?(x.setLineWidth(oe.wireframeLinewidth*De()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(le.isLine){let Bt=oe.linewidth;Bt===void 0&&(Bt=1),x.setLineWidth(Bt*De()),le.isLineSegments?zt.setMode(H.LINES):le.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else le.isPoints?zt.setMode(H.POINTS):le.isSprite&&zt.setMode(H.TRIANGLES);if(le.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))zt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Bt=le._multiDrawStarts,We=le._multiDrawCounts,Gn=le._multiDrawCount,Mt=Ke?Ne.get(Ke).bytesPerElement:1,bn=$.get(oe).currentProgram.getUniforms();for(let ci=0;ci<Gn;ci++)bn.setValue(H,"_gl_DrawID",ci),zt.render(Bt[ci]/Mt,We[ci])}else if(le.isInstancedMesh)zt.renderInstances(et,rn,le.count);else if(ce.isInstancedBufferGeometry){const Bt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,We=Math.min(ce.instanceCount,Bt);zt.renderInstances(et,rn,We)}else zt.render(et,rn)};function vo(A,j,ce){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,Fa(A,j,ce),A.side=xs,A.needsUpdate=!0,Fa(A,j,ce),A.side=ea):Fa(A,j,ce)}this.compile=function(A,j,ce=null){ce===null&&(ce=A),U=Ie.get(ce),U.init(j),b.push(U),ce.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(U.pushLight(le),le.castShadow&&U.pushShadow(le))}),A!==ce&&A.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(U.pushLight(le),le.castShadow&&U.pushShadow(le))}),U.setupLights();const oe=new Set;return A.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const He=le.material;if(He)if(Array.isArray(He))for(let Ye=0;Ye<He.length;Ye++){const ze=He[Ye];vo(ze,ce,le),oe.add(ze)}else vo(He,ce,le),oe.add(He)}),U=b.pop(),oe},this.compileAsync=function(A,j,ce=null){const oe=this.compile(A,j,ce);return new Promise(le=>{function He(){if(oe.forEach(function(Ye){$.get(Ye).currentProgram.isReady()&&oe.delete(Ye)}),oe.size===0){le(A);return}setTimeout(He,10)}Pe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ar=null;function Wi(A){ar&&ar(A)}function gn(){Qn.stop()}function On(){Qn.start()}const Qn=new Oy;Qn.setAnimationLoop(Wi),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(A){ar=A,qe.setAnimationLoop(A),A===null?Qn.stop():Qn.start()},qe.addEventListener("sessionstart",gn),qe.addEventListener("sessionend",On),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(A,j);const ce=qe.enabled===!0&&qe.isPresenting===!0,oe=L!==null&&(K===null||ce)&&L.begin(k,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(j),j=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,j,K),U=Ie.get(A,b.length),U.init(j),U.state.textureUnits=ne.getTextureUnits(),b.push(U),jt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),xt.setFromProjectionMatrix(jt,na,j.reversedDepth),vt=this.localClippingEnabled,_t=tt.init(this.clippingPlanes,vt),I=Be.get(A,O.length),I.init(),O.push(I),qe.enabled===!0&&qe.isPresenting===!0){const Ye=k.xr.getDepthSensingMesh();Ye!==null&&Ts(Ye,j,-1/0,k.sortObjects)}Ts(A,j,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(ke,rt,j.reversedDepth),we=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,we&&ut.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&tt.beginShadows();const le=U.state.shadowsArray;if(nt.render(le,A,j),_t===!0&&tt.endShadows(),(oe&&L.hasRenderPass())===!1){const Ye=I.opaque,ze=I.transmissive;if(U.setupLights(),j.isArrayCamera){const Ke=j.cameras;if(ze.length>0)for(let Ze=0,it=Ke.length;Ze<it;Ze++){const pt=Ke[Ze];Ul(Ye,ze,A,pt)}we&&ut.render(A);for(let Ze=0,it=Ke.length;Ze<it;Ze++){const pt=Ke[Ze];Nl(I,A,pt,pt.viewport)}}else ze.length>0&&Ul(Ye,ze,A,j),we&&ut.render(A),Nl(I,A,j)}K!==null&&W===0&&(ne.updateMultisampleRenderTarget(K),ne.updateRenderTargetMipmap(K)),oe&&L.end(k),A.isScene===!0&&A.onAfterRender(k,A,j),Ve.resetDefaultState(),pe=-1,Te=null,b.pop(),b.length>0?(U=b[b.length-1],ne.setTextureUnits(U.state.textureUnits),_t===!0&&tt.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,Q!==null&&Q.renderEnd()};function Ts(A,j,ce,oe){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){oe&&en.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);const Ye=ge.update(A),ze=A.material;ze.visible&&I.push(A,Ye,ze,ce,en.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ye=ge.update(A),ze=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),en.copy(A.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),en.copy(Ye.boundingSphere.center)),en.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(ze)){const Ke=Ye.groups;for(let Ze=0,it=Ke.length;Ze<it;Ze++){const pt=Ke[Ze],et=ze[pt.materialIndex];et&&et.visible&&I.push(A,Ye,et,ce,en.z,pt)}}else ze.visible&&I.push(A,Ye,ze,ce,en.z,null)}}const He=A.children;for(let Ye=0,ze=He.length;Ye<ze;Ye++)Ts(He[Ye],j,ce,oe)}function Nl(A,j,ce,oe){const{opaque:le,transmissive:He,transparent:Ye}=A;U.setupLightsView(ce),_t===!0&&tt.setGlobalState(k.clippingPlanes,ce),oe&&x.viewport(P.copy(oe)),le.length>0&&As(le,j,ce),He.length>0&&As(He,j,ce),Ye.length>0&&As(Ye,j,ce),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ul(A,j,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[oe.id]===void 0){const et=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[oe.id]=new aa(1,1,{generateMipmaps:!0,type:et?Ia:xi,minFilter:js,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const He=U.state.transmissionRenderTarget[oe.id],Ye=oe.viewport||P;He.setSize(Ye.z*k.transmissionResolutionScale,Ye.w*k.transmissionResolutionScale);const ze=k.getRenderTarget(),Ke=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(He),k.getClearColor(_e),Ce=k.getClearAlpha(),Ce<1&&k.setClearColor(16777215,.5),k.clear(),we&&ut.render(ce);const it=k.toneMapping;k.toneMapping=ia;const pt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),_t===!0&&tt.setGlobalState(k.clippingPlanes,oe),As(A,ce,oe),ne.updateMultisampleRenderTarget(He),ne.updateRenderTargetMipmap(He),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Nt=0,rn=j.length;Nt<rn;Nt++){const Kt=j[Nt],{object:zt,geometry:Bt,material:We,group:Gn}=Kt;if(We.side===ea&&zt.layers.test(oe.layers)){const Mt=We.side;We.side=ri,We.needsUpdate=!0,Ba(zt,ce,oe,Bt,We,Gn),We.side=Mt,We.needsUpdate=!0,et=!0}}et===!0&&(ne.updateMultisampleRenderTarget(He),ne.updateRenderTargetMipmap(He))}k.setRenderTarget(ze,Ke,Ze),k.setClearColor(_e,Ce),pt!==void 0&&(oe.viewport=pt),k.toneMapping=it}function As(A,j,ce){const oe=j.isScene===!0?j.overrideMaterial:null;for(let le=0,He=A.length;le<He;le++){const Ye=A[le],{object:ze,geometry:Ke,group:Ze}=Ye;let it=Ye.material;it.allowOverride===!0&&oe!==null&&(it=oe),ze.layers.test(ce.layers)&&Ba(ze,j,ce,Ke,it,Ze)}}function Ba(A,j,ce,oe,le,He){A.onBeforeRender(k,j,ce,oe,le,He),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(k,j,ce,oe,A,He),le.transparent===!0&&le.side===ea&&le.forceSinglePass===!1?(le.side=ri,le.needsUpdate=!0,k.renderBufferDirect(ce,j,oe,le,A,He),le.side=xs,le.needsUpdate=!0,k.renderBufferDirect(ce,j,oe,le,A,He),le.side=ea):k.renderBufferDirect(ce,j,oe,le,A,He),A.onAfterRender(k,j,ce,oe,le,He)}function Fa(A,j,ce){j.isScene!==!0&&(j=Se);const oe=$.get(A),le=U.state.lights,He=U.state.shadowsArray,Ye=le.state.version,ze=Le.getParameters(A,le.state,He,j,ce,U.state.lightProbeGridArray),Ke=Le.getProgramCacheKey(ze);let Ze=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,oe.fog=j.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=Re.get(A.envMap||oe.environment,it),oe.envMapRotation=oe.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",li),Ze=new Map,oe.programs=Ze);let pt=Ze.get(Ke);if(pt!==void 0){if(oe.currentProgram===pt&&oe.lightsStateVersion===Ye)return la(A,ze),pt}else ze.uniforms=Le.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,ce,ze),A.onBeforeCompile(ze,k),pt=Le.acquireProgram(ze,Ke),Ze.set(Ke,pt),oe.uniforms=ze.uniforms;const et=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=tt.uniform),la(A,ze),oe.needsLights=Ll(A),oe.lightsStateVersion=Ye,oe.needsLights&&(et.ambientLightColor.value=le.state.ambient,et.lightProbe.value=le.state.probe,et.directionalLights.value=le.state.directional,et.directionalLightShadows.value=le.state.directionalShadow,et.spotLights.value=le.state.spot,et.spotLightShadows.value=le.state.spotShadow,et.rectAreaLights.value=le.state.rectArea,et.ltc_1.value=le.state.rectAreaLTC1,et.ltc_2.value=le.state.rectAreaLTC2,et.pointLights.value=le.state.point,et.pointLightShadows.value=le.state.pointShadow,et.hemisphereLights.value=le.state.hemi,et.directionalShadowMatrix.value=le.state.directionalShadowMatrix,et.spotLightMatrix.value=le.state.spotLightMatrix,et.spotLightMap.value=le.state.spotLightMap,et.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=U.state.lightProbeGridArray.length>0,oe.currentProgram=pt,oe.uniformsList=null,pt}function oa(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Su.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function la(A,j){const ce=$.get(A);ce.outputColorSpace=j.outputColorSpace,ce.batching=j.batching,ce.batchingColor=j.batchingColor,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.instancingMorph=j.instancingMorph,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function Rs(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let ce=0,oe=A.length;ce<oe;ce++){const le=A[ce];if(le.texture!==null&&le.boundingBox.containsPoint(w))return le}return null}function Ha(A,j,ce,oe,le){j.isScene!==!0&&(j=Se),ne.resetTextureUnits();const He=j.fog,Ye=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?j.environment:null,ze=K===null?k.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Dt.workingColorSpace,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ze=Re.get(oe.envMap||Ye,Ke),it=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pt=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ce.morphAttributes.position,Nt=!!ce.morphAttributes.normal,rn=!!ce.morphAttributes.color;let Kt=ia;oe.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=zt!==void 0?zt.length:0,We=$.get(oe),Gn=U.state.lights;if(_t===!0&&(vt===!0||A!==Te)){const Pt=A===Te&&oe.id===pe;tt.setState(oe,A,Pt)}let Mt=!1;oe.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Gn.state.version||We.outputColorSpace!==ze||le.isBatchedMesh&&We.batching===!1||!le.isBatchedMesh&&We.batching===!0||le.isBatchedMesh&&We.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&We.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&We.instancing===!1||!le.isInstancedMesh&&We.instancing===!0||le.isSkinnedMesh&&We.skinning===!1||!le.isSkinnedMesh&&We.skinning===!0||le.isInstancedMesh&&We.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&We.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&We.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&We.instancingMorph===!1&&le.morphTexture!==null||We.envMap!==Ze||oe.fog===!0&&We.fog!==He||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==tt.numPlanes||We.numIntersection!==tt.numIntersection)||We.vertexAlphas!==it||We.vertexTangents!==pt||We.morphTargets!==et||We.morphNormals!==Nt||We.morphColors!==rn||We.toneMapping!==Kt||We.morphTargetsCount!==Bt||!!We.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,We.__version=oe.version);let bn=We.currentProgram;Mt===!0&&(bn=Fa(oe,j,le),Q&&oe.isNodeMaterial&&Q.onUpdateProgram(oe,bn,We));let ci=!1,Oi=!1,ui=!1;const Ft=bn.getUniforms(),on=We.uniforms;if(x.useProgram(bn.program)&&(ci=!0,Oi=!0,ui=!0),oe.id!==pe&&(pe=oe.id,Oi=!0),We.needsLights){const Pt=Rs(U.state.lightProbeGridArray,le);We.lightProbeGrid!==Pt&&(We.lightProbeGrid=Pt,Oi=!0)}if(ci||Te!==A){x.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(H,"projectionMatrix",A.projectionMatrix),Ft.setValue(H,"viewMatrix",A.matrixWorldInverse);const Yi=Ft.map.cameraPosition;Yi!==void 0&&Yi.setValue(H,$t.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),Te!==A&&(Te=A,Oi=!0,ui=!0)}if(We.needsLights&&(Gn.state.directionalShadowMap.length>0&&Ft.setValue(H,"directionalShadowMap",Gn.state.directionalShadowMap,ne),Gn.state.spotShadowMap.length>0&&Ft.setValue(H,"spotShadowMap",Gn.state.spotShadowMap,ne),Gn.state.pointShadowMap.length>0&&Ft.setValue(H,"pointShadowMap",Gn.state.pointShadowMap,ne)),le.isSkinnedMesh){Ft.setOptional(H,le,"bindMatrix"),Ft.setOptional(H,le,"bindMatrixInverse");const Pt=le.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ft.setValue(H,"boneTexture",Pt.boneTexture,ne))}le.isBatchedMesh&&(Ft.setOptional(H,le,"batchingTexture"),Ft.setValue(H,"batchingTexture",le._matricesTexture,ne),Ft.setOptional(H,le,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",le._indirectTexture,ne),Ft.setOptional(H,le,"batchingColorTexture"),le._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",le._colorsTexture,ne));const Pi=ce.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Z.update(le,ce,bn),(Oi||We.receiveShadow!==le.receiveShadow)&&(We.receiveShadow=le.receiveShadow,Ft.setValue(H,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&j.environment!==null&&(on.envMapIntensity.value=j.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=cR()),Oi){if(Ft.setValue(H,"toneMappingExposure",k.toneMappingExposure),We.needsLights&&_n(on,ui),He&&oe.fog===!0&&Xe.refreshFogUniforms(on,He),Xe.refreshMaterialUniforms(on,oe,Ee,ve,U.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const Pt=We.lightProbeGrid;on.probesSH.value=Pt.texture,on.probesMin.value.copy(Pt.boundingBox.min),on.probesMax.value.copy(Pt.boundingBox.max),on.probesResolution.value.copy(Pt.resolution)}Su.upload(H,oa(We),on,ne)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Su.upload(H,oa(We),on,ne),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ft.setValue(H,"center",le.center),Ft.setValue(H,"modelViewMatrix",le.modelViewMatrix),Ft.setValue(H,"normalMatrix",le.normalMatrix),Ft.setValue(H,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Pt=oe.uniformsGroups;for(let Yi=0,Ga=Pt.length;Yi<Ga;Yi++){const Cs=Pt[Yi];Ae.update(Cs,bn),Ae.bind(Cs,bn)}}return bn}function _n(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,j,ce){const oe=$.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=j,$.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ce=$.get(A);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ce=0){K=A,z=j,W=ce;let oe=null,le=!1,He=!1;if(A){const ze=$.get(A);if(ze.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,ze.__webglFramebuffer),P.copy(A.viewport),J.copy(A.scissor),X=A.scissorTest,x.viewport(P),x.scissor(J),x.setScissorTest(X),pe=-1;return}else if(ze.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(ze.__hasExternalTextures)ne.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(He=!0);const Ze=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[j])?oe=Ze[j][ce]:oe=Ze[j],le=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?oe=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[ce]:oe=Ze,P.copy(A.viewport),J.copy(A.scissor),X=A.scissorTest}else P.copy($e).multiplyScalar(Ee).floor(),J.copy(Xt).multiplyScalar(Ee).floor(),X=dt;if(ce!==0&&(oe=fe),x.bindFramebuffer(H.FRAMEBUFFER,oe)&&x.drawBuffers(A,oe),x.viewport(P),x.scissor(J),x.setScissorTest(X),le){const ze=$.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ce)}else if(He){const ze=j;for(let Ke=0;Ke<A.textures.length;Ke++){const Ze=$.get(A.textures[Ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ke,Ze.__webglTexture,ce,ze)}}else if(A!==null&&ce!==0){const ze=$.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,ce)}pe=-1},this.readRenderTargetPixels=function(A,j,ce,oe,le,He,Ye,ze=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ke=Ke[Ye]),Ke){x.bindFramebuffer(H.FRAMEBUFFER,Ke);try{const Ze=A.textures[ze],it=Ze.format,pt=Ze.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),!D.textureFormatReadable(it)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(pt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-oe&&ce>=0&&ce<=A.height-le&&H.readPixels(j,ce,oe,le,Oe.convert(it),Oe.convert(pt),He)}finally{const Ze=K!==null?$.get(K).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,j,ce,oe,le,He,Ye,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ke=Ke[Ye]),Ke)if(j>=0&&j<=A.width-oe&&ce>=0&&ce<=A.height-le){x.bindFramebuffer(H.FRAMEBUFFER,Ke);const Ze=A.textures[ze],it=Ze.format,pt=Ze.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),!D.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.bufferData(H.PIXEL_PACK_BUFFER,He.byteLength,H.STREAM_READ),H.readPixels(j,ce,oe,le,Oe.convert(it),Oe.convert(pt),0);const Nt=K!==null?$.get(K).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Nt);const rn=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cE(H,rn,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,et),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,He),H.deleteBuffer(et),H.deleteSync(rn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ce=0){const oe=Math.pow(2,-ce),le=Math.floor(A.image.width*oe),He=Math.floor(A.image.height*oe),Ye=j!==null?j.x:0,ze=j!==null?j.y:0;ne.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ce,0,0,Ye,ze,le,He),x.unbindTexture()},this.copyTextureToTexture=function(A,j,ce=null,oe=null,le=0,He=0){let Ye,ze,Ke,Ze,it,pt,et,Nt,rn;const Kt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(ce!==null)Ye=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,it=ce.min.y,pt=ce.isBox3?ce.min.z:0;else{const on=Math.pow(2,-le);Ye=Math.floor(Kt.width*on),ze=Math.floor(Kt.height*on),A.isDataArrayTexture?Ke=Kt.depth:A.isData3DTexture?Ke=Math.floor(Kt.depth*on):Ke=1,Ze=0,it=0,pt=0}oe!==null?(et=oe.x,Nt=oe.y,rn=oe.z):(et=0,Nt=0,rn=0);const zt=Oe.convert(j.format),Bt=Oe.convert(j.type);let We;j.isData3DTexture?(ne.setTexture3D(j,0),We=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ne.setTexture2DArray(j,0),We=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(j,0),We=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Gn=x.getParameter(H.UNPACK_ROW_LENGTH),Mt=x.getParameter(H.UNPACK_IMAGE_HEIGHT),bn=x.getParameter(H.UNPACK_SKIP_PIXELS),ci=x.getParameter(H.UNPACK_SKIP_ROWS),Oi=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,Kt.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(H.UNPACK_SKIP_ROWS,it),x.pixelStorei(H.UNPACK_SKIP_IMAGES,pt);const ui=A.isDataArrayTexture||A.isData3DTexture,Ft=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const on=$.get(A),Pi=$.get(j),Pt=$.get(on.__renderTarget),Yi=$.get(Pi.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,Pt.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Ga=0;Ga<Ke;Ga++)ui&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(A).__webglTexture,le,pt+Ga),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(j).__webglTexture,He,rn+Ga)),H.blitFramebuffer(Ze,it,Ye,ze,et,Nt,Ye,ze,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(le!==0||A.isRenderTargetTexture||$.has(A)){const on=$.get(A),Pi=$.get(j);x.bindFramebuffer(H.READ_FRAMEBUFFER,de),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,ie);for(let Pt=0;Pt<Ke;Pt++)ui?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,le,pt+Pt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,le),Ft?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pi.__webglTexture,He,rn+Pt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pi.__webglTexture,He),le!==0?H.blitFramebuffer(Ze,it,Ye,ze,et,Nt,Ye,ze,H.COLOR_BUFFER_BIT,H.NEAREST):Ft?H.copyTexSubImage3D(We,He,et,Nt,rn+Pt,Ze,it,Ye,ze):H.copyTexSubImage2D(We,He,et,Nt,Ze,it,Ye,ze);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(We,He,et,Nt,rn,Ye,ze,Ke,zt,Bt,Kt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(We,He,et,Nt,rn,Ye,ze,Ke,zt,Kt.data):H.texSubImage3D(We,He,et,Nt,rn,Ye,ze,Ke,zt,Bt,Kt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,He,et,Nt,Ye,ze,zt,Bt,Kt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,He,et,Nt,Kt.width,Kt.height,zt,Kt.data):H.texSubImage2D(H.TEXTURE_2D,He,et,Nt,Ye,ze,zt,Bt,Kt);x.pixelStorei(H.UNPACK_ROW_LENGTH,Gn),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),x.pixelStorei(H.UNPACK_SKIP_PIXELS,bn),x.pixelStorei(H.UNPACK_SKIP_ROWS,ci),x.pixelStorei(H.UNPACK_SKIP_IMAGES,Oi),He===0&&j.generateMipmaps&&H.generateMipmap(We),x.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){z=0,W=0,K=null,x.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const $v={type:"change"},Qp={type:"start"},Vy={type:"end"},pu=new Wp,ey=new _s,fR=Math.cos(70*gp.DEG2RAD),An=new ee,ii=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ed=1e-6;class hR extends pb{constructor(e,i=null){super(e,i),this.state=Zt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new Ss,this._lastTargetPosition=new ee,this._quat=new Ss().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rv,this._sphericalDelta=new Rv,this._scale=1,this._panOffset=new ee,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new ee,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pR.bind(this),this._onPointerDown=dR.bind(this),this._onPointerUp=mR.bind(this),this._onContextMenu=MR.bind(this),this._onMouseWheel=vR.bind(this),this._onKeyDown=yR.bind(this),this._onTouchStart=xR.bind(this),this._onTouchMove=SR.bind(this),this._onMouseDown=gR.bind(this),this._onMouseMove=_R.bind(this),this._interceptControlDown=ER.bind(this),this._interceptControlUp=bR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($v),this.update(),this.state=Zt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;An.copy(i).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ii:s>Math.PI&&(s-=ii),l<-Math.PI?l+=ii:l>Math.PI&&(l-=ii),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),i.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=An.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new ee(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new ee(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(pu.origin.copy(this.object.position),pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pu.direction))<fR?this.object.lookAt(this.target):(ey.setFromNormalAndCoplanarPoint(this.object.up,this.target),pu.intersectPlane(ey,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ed||this._lastTargetPosition.distanceToSquared(this.target)>Ed?(this.dispatchEvent($v),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){An.setFromMatrixColumn(i,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,i){this.screenSpacePanning===!0?An.setFromMatrixColumn(i,1):(An.setFromMatrixColumn(i,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;An.copy(l).sub(this.target);let c=An.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/i.clientHeight),this._rotateUp(ii*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/i.clientHeight),this._rotateUp(ii*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new st,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function dR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function mR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vy),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function gR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Zt.DOLLY;break;case io.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}break;case io.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Qp)}function _R(r){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function vR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(r.preventDefault(),this.dispatchEvent(Qp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Vy))}function yR(r){this.enabled!==!1&&this._handleKeyDown(r)}function xR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Zt.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Zt.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Qp)}function SR(r){switch(this._trackPointer(r),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Zt.NONE}}function MR(r){this.enabled!==!1&&r.preventDefault()}function ER(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gl=new ee;function Ni(r,e,i,s,l,c){const f=2*Math.PI*l/4,p=Math.max(c-2*l,0),m=Math.PI/4;gl.copy(e),gl[s]=0,gl.normalize();const d=.5*f/(f+p),v=1-gl.angleTo(r)/m;return Math.sign(gl[i])===1?v*d:p/(f+p)+d+d*(1-v)}class Jp extends Es{constructor(e=1,i=1,s=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(e/2,i/2,s/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:s,segments:l,radius:c},f===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new ee,d=new ee,v=new ee(e,i,s).divideScalar(2).subScalar(c),S=this.attributes.position.array,g=this.attributes.normal.array,M=this.attributes.uv.array,T=S.length/6,C=new ee,E=.5/f;for(let y=0,B=0;y<S.length;y+=3,B+=2)switch(m.fromArray(S,y),d.copy(m),d.x-=Math.sign(d.x)*E,d.y-=Math.sign(d.y)*E,d.z-=Math.sign(d.z)*E,d.normalize(),S[y+0]=v.x*Math.sign(m.x)+d.x*c,S[y+1]=v.y*Math.sign(m.y)+d.y*c,S[y+2]=v.z*Math.sign(m.z)+d.z*c,g[y+0]=d.x,g[y+1]=d.y,g[y+2]=d.z,Math.floor(y/T)){case 0:C.set(1,0,0),M[B+0]=Ni(C,d,"z","y",c,s),M[B+1]=1-Ni(C,d,"y","z",c,i);break;case 1:C.set(-1,0,0),M[B+0]=1-Ni(C,d,"z","y",c,s),M[B+1]=1-Ni(C,d,"y","z",c,i);break;case 2:C.set(0,1,0),M[B+0]=1-Ni(C,d,"x","z",c,e),M[B+1]=Ni(C,d,"z","x",c,s);break;case 3:C.set(0,-1,0),M[B+0]=1-Ni(C,d,"x","z",c,e),M[B+1]=1-Ni(C,d,"z","x",c,s);break;case 4:C.set(0,0,1),M[B+0]=1-Ni(C,d,"x","y",c,e),M[B+1]=1-Ni(C,d,"y","x",c,i);break;case 5:C.set(0,0,-1),M[B+0]=Ni(C,d,"x","y",c,e),M[B+1]=1-Ni(C,d,"y","x",c,i);break}}static fromJSON(e){return new Jp(e.width,e.height,e.depth,e.segments,e.radius)}}const Cl="city-tycoon-v1",xp="city-tycoon-manual-v1",ky=720*60*60*1e3;function Ou(r){return!!((r==null?void 0:r.version)===1&&Array.isArray(r.players)&&r.players.length>=2&&r.players.length<=4&&r.players.every((e,i)=>e.id===i&&typeof e.name=="string"&&Number.isFinite(e.cash)&&e.cash>=0&&Number.isInteger(e.pos)&&e.pos>=0&&e.pos<32&&[0,1].includes(e.jail)&&typeof e.bankrupt=="boolean"&&(e.diceCount===void 0||[1,2].includes(e.diceCount)))&&r.lots&&typeof r.lots=="object"&&!Array.isArray(r.lots)&&Object.entries(r.lots).every(([e,i])=>Number.isInteger(+e)&&+e>0&&+e<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+e)&&i&&Number.isInteger(i.owner)&&i.owner>=0&&i.owner<r.players.length&&Number.isInteger(i.level)&&i.level>=0&&i.level<=5)&&Number.isInteger(r.turn)&&r.turn>=0&&r.turn<r.players.length&&Number.isInteger(r.round)&&r.round>=1&&(r.maxRounds===void 0||r.maxRounds===null||Number.isInteger(r.maxRounds)&&r.maxRounds>=1)&&(r.maxRounds===void 0||r.maxRounds===null||r.round<=r.maxRounds+1)&&(r.inflationRate===void 0||Number.isInteger(r.inflationRate)&&r.inflationRate>=0&&r.inflationRate<=10)&&(r.priceIndex===void 0||Number.isFinite(r.priceIndex)&&r.priceIndex>=1&&r.priceIndex<=10)&&["ready","moving","decision","end","finished"].includes(r.stage)&&Array.isArray(r.dice)&&[1,2].includes(r.dice.length)&&r.dice.every(e=>Number.isInteger(e)&&e>=1&&e<=6)&&Number.isInteger(r.remaining)&&r.remaining>=0&&r.remaining<=12&&(r.stage!=="moving"||r.remaining>0&&Number.isInteger(r.eventIndex)&&r.eventIndex>=0&&r.eventIndex<8)&&Array.isArray(r.log)&&r.log.every(e=>e&&typeof e.text=="string"&&typeof e.kind=="string")&&typeof r.notice=="string"&&(r.event===null||r.event&&typeof r.event.title=="string"&&(r.event.amount===void 0||Number.isFinite(r.event.amount)))&&(r.stage!=="finished"||Number.isInteger(r.winner)&&r.winner>=0&&r.winner<r.players.length)&&(r.bank===void 0||Number.isInteger(r.bank.houses)&&r.bank.houses>=0&&Number.isInteger(r.bank.hotels)&&r.bank.hotels>=0)&&(r.buildAvailable===void 0||typeof r.buildAvailable=="boolean")&&(r.buildUsed===void 0||typeof r.buildUsed=="boolean"))}const Sp=(r,e)=>r&&Number.isFinite(r.savedAt)&&r.savedAt<=e&&e-r.savedAt<ky&&Ou(r.game);function wl(r=localStorage,e=Date.now()){const i=r.getItem(xp),s=i?JSON.parse(i):[];if(!Array.isArray(s))throw new Error("存檔清單格式損壞。");const l=s.filter(f=>Sp(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,p)=>p.savedAt-f.savedAt).slice(0,10);JSON.stringify(l)!==i&&r.setItem(xp,JSON.stringify(l));const c=r.getItem(Cl);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!Sp(f,e))&&r.removeItem(Cl)}return l}function TR(r,e,i=!1,s=localStorage,l=Date.now()){if(!Ou(r))throw new Error("遊戲狀態無法儲存。");const c=wl(s,l);if(c.length>=10&&!i)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const p=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${r.round}`,savedAt:l,game:structuredClone(r)},...c].slice(0,10);return s.setItem(xp,JSON.stringify(p)),p}function AR(r,e=localStorage,i=Date.now()){const s=wl(e,i).find(l=>l.id===r);if(!s)throw new Error("存檔已過期或不存在。");return structuredClone(s.game)}function Mp(r,e=localStorage,i=Date.now()){e.setItem(Cl,JSON.stringify({savedAt:i,game:r}))}function RR(r=localStorage,e=Date.now()){const i=r.getItem(Cl);if(!i)return null;const s=JSON.parse(i);return Ou(s)?(Mp(s,r,e),s):Sp(s,e)?s.game:(r.removeItem(Cl),null)}const Fn=["#61ac78","#62a6da","#e7b942","#de809a"],CR=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],wR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],si=wR.map((r,e)=>{const i={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},s=Math.floor(e/4);return{id:e,name:r,type:i[e]||"property",group:s,color:CR[s],price:1e3+s*300+e%4*100}}),Jt=r=>"$"+r.toLocaleString("en-US"),jp=1,Xy=5,DR=10,Wy=10,Kn=(r,e,i=Math.round)=>i(e*((r==null?void 0:r.priceIndex)??1)),no=(r,e)=>Kn(r,e.price),ho=(r,e)=>Kn(e,r.price*.6),NR=40,Yy=r=>r===null?null:Number.isInteger(Number(r))&&Number(r)>=1?Number(r):NR,$p=r=>Math.max(0,Math.min(DR,Number.isFinite(Number(r))?Math.round(Number(r)):jp)),UR=r=>Math.min(Xy,$p(r)),Ep={houses:32,hotels:12},LR=r=>{let e=0,i=0;for(const s of Object.values(r.lots||{}))s.level===5?i++:e+=Math.max(0,Math.min(4,s.level||0));return{houses:Math.max(0,Ep.houses-e),hotels:Math.max(0,Ep.hotels-i)}},ir=r=>r.bank&&Number.isInteger(r.bank.houses)&&Number.isInteger(r.bank.hotels)?r.bank:LR(r),qy=r=>({...r,maxRounds:Yy(r.maxRounds),inflationRate:$p(r.inflationRate??0),priceIndex:Math.max(1,Math.min(Wy,Number.isFinite(r.priceIndex)?r.priceIndex:1)),players:r.players.map((e,i)=>({...e,diceCount:e.diceCount??2,color:e.color||Fn[i],human:e.human===void 0?i===0:!!e.human})),bank:{...ir(r)},buildAvailable:r.buildAvailable===!0,buildUsed:r.buildUsed===!0}),OR=[["你",Fn[0],!0],["艾米",Fn[1],!1],["小傑",Fn[2],!1],["喵喵",Fn[3],!1]];function bp(r={}){const e=Math.min(4,Math.max(2,Number(r.count)||4)),i=OR.slice(0,e).map(([l,c,f],p)=>{var d;const m=((d=r.players)==null?void 0:d[p])||{};return{id:p,diceCount:2,name:typeof m.name=="string"&&m.name.trim()?m.name.trim():l,color:m.color||c,human:m.human===void 0?f:!!m.human,cash:15e3,pos:0,jail:0,bankrupt:!1}}),s=UR(r.inflationRate??jp);return{version:1,players:i,lots:{},bank:{...Ep},turn:0,round:1,maxRounds:Yy(r.maxRounds),inflationRate:s,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${s}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const dn=(r,e,i="info")=>{r.notice=e,r.log.unshift({text:e,kind:i}),r.log=r.log.slice(0,40)},Js=(r,e)=>si.filter(i=>{var s;return((s=r.lots[i.id])==null?void 0:s.owner)===e}),PR=(r,e,i)=>si.filter(s=>s.type==="property"&&s.group===e.group).every(s=>{var l;return((l=r.lots[s.id])==null?void 0:l.owner)===i}),Tp=(r,e)=>{let i=r.lots[e.id];return i?Kn(r,Math.round(e.price*.18)*(i.level?[1,3,6,10,15,22][i.level]:PR(r,e,i.owner)?2:1)):0},oo=(r,e)=>r.players[e].cash+Js(r,e).reduce((i,s)=>i+Kn(r,s.price+(r.lots[s.id].level||0)*Math.round(s.price*.6)),0),Ap=(r,e,i=r.turn)=>{const s=si[e],l=r.lots[e],c=ir(r);return!s||s.type!=="property"||!l||l.owner!==i||r.turn!==i||r.stage!=="end"||r.selected!==e||!r.buildAvailable||r.buildUsed||l.level>=5||r.players[i].cash<ho(s,r)?!1:l.level<4?c.houses>0:c.hotels>0};function Zy(r,e){const i=r.bank||ir(r);e.level===5?i.hotels++:i.houses+=Math.max(0,Math.min(4,e.level||0)),r.bank=i}function Ky(r){const e=r.players.filter(i=>!i.bankrupt);e.length===1&&(r.winner=e[0].id,r.stage="finished",dn(r,`${e[0].name}成為城市大亨！`))}function bd(r,e,i,s=null){let l=r.players[e];for(const f of Js(r,e).sort((p,m)=>p.price-m.price)){if(l.cash>=i)break;const p=Kn(r,f.price+r.lots[f.id].level*Math.round(f.price*.6),m=>Math.floor(m*.5));l.cash+=p,Zy(r,r.lots[f.id]),delete r.lots[f.id],dn(r,`${l.name}變賣${f.name}，回收 ${Jt(p)}。`,"sell")}const c=Math.min(l.cash,i);l.cash-=c,s!==null&&(r.players[s].cash+=c),c<i&&(l.bankrupt=!0,dn(r,`${l.name}資金不足，宣告破產。`,"bankrupt"),Ky(r))}function IR(r,e){const i=r.players[r.turn],s=si[i.pos];if(r.selected=s.id,r.stage="end",r.buildAvailable=!1,r.buildUsed=!1,s.type==="property"){const l=r.lots[s.id];if(l)if(l.owner!==i.id){const c=Tp(r,s);dn(r,`${i.name}在${s.name}支付 ${Jt(c)} 租金給${r.players[l.owner].name}。`,"rent"),bd(r,i.id,c,l.owner)}else{r.buildAvailable=!0;const c=l.level===5?"已有旅館。":l.level===4?ir(r).hotels?"可以升級為旅館。":"銀行旅館已用完。":ir(r).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";dn(r,`${i.name}回到自己的${s.name}，${c}`)}else{const c=no(r,s);r.stage=i.cash>=c?"decision":"end",dn(r,`${i.name}抵達${s.name}，${i.cash>=c?"可以購買這塊地產。":"現金不足以購買。"}`)}}else if(s.type==="tax"){const l=Kn(r,s.id===6?1200:1800);dn(r,`${i.name}支付${s.name} ${Jt(l)}。`,"tax"),bd(r,i.id,l)}else if(s.type==="gojail")i.pos=8,i.jail=1,dn(r,`${i.name}前往監獄，下次回合暫停一次。`,"jail");else if(s.type==="chance"||s.type==="fund"){const l=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[c,f,p,m]=l[Math.abs(e||0)%l.length];if(m){const d=r.inflationRate;r.inflationRate=$p(d+m);const v=r.inflationRate-d,S=v===0?`通膨率維持 ${r.inflationRate}%（已達上限或下限）`:`通膨率${v>0?"提高":"降低"}至 ${r.inflationRate}%`;r.event={title:c,body:f,amount:0,kind:"inflation",inflationDelta:v,inflationRate:r.inflationRate},dn(r,`${i.name}抽到「${c}」：${S}，新通膨率於下一輪影響物價。`,"inflation")}else{const d=Kn(r,p);r.event={title:c,body:f,amount:d},dn(r,`${i.name}抽到「${c}」：${d>0?"獲得":"支付"} ${Jt(Math.abs(d))}。`,"chance"),d>0?i.cash+=d:bd(r,i.id,-d)}}else dn(r,s.type==="start"?`${i.name}抵達起點。`:s.type==="park"?`${i.name}在城市公園休息，享受片刻悠閒。`:`${i.name}只是探訪監獄，自由通行。`);Ky(r)}function zR(r,e){var l;if(e.type==="NEW")return bp(e.config);if(e.type==="LOAD")return Ou(e.game)?qy(structuredClone(e.game)):r;const i=structuredClone(r),s=i.players[i.turn];switch(e.type){case"SET_DICE_COUNT":if(i.stage!=="ready"||!s.human||s.bankrupt||s.jail||![1,2].includes(e.count))return r;s.diceCount=e.count;break;case"ROLL":if(i.stage!=="ready"||s.bankrupt)return r;if(s.jail){s.jail--,i.stage="end",dn(i,`${s.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(s.diceCount??2)||!e.dice.every(c=>Number.isInteger(c)&&c>=1&&c<=6))return r;i.dice=[...e.dice],i.remaining=e.dice.reduce((c,f)=>c+f,0),i.event=null,i.stage="moving",i.eventIndex=e.eventIndex,dn(i,`${s.name}擲出 ${e.dice.join(" + ")}，前進 ${i.remaining} 格。`,"dice");break;case"STEP":if(i.stage!=="moving")return r;if(s.pos=(s.pos+1)%32,s.pos===0){const c=Kn(i,2e3);s.cash+=c,dn(i,`${s.name}通過起點，領取 ${Jt(c)}。`,"salary")}i.remaining--,i.remaining===0&&IR(i,i.eventIndex);break;case"BUY":{if(i.stage!=="decision")return r;const c=si[s.pos],f=no(i,c);if(i.lots[c.id]||s.cash<f)return r;s.cash-=f,i.lots[c.id]={owner:s.id,level:0},i.stage="end",dn(i,`${s.name}購買了${c.name}，支付 ${Jt(f)}。`,"buy");break}case"SKIP":if(i.stage!=="decision")return r;i.stage="end",dn(i,`${s.name}暫不購買${si[s.pos].name}。`);break;case"BUILD":{if(!Ap(i,e.id))return r;const c=si[e.id],f=i.lots[e.id],p=ho(c,i);i.bank=i.bank||ir(i),s.cash-=p,f.level<4?(i.bank.houses--,f.level++,dn(i,`${s.name}在${c.name}加蓋第 ${f.level} 間房屋，支付 ${Jt(p)}。`,"build")):(i.bank.houses+=4,i.bank.hotels--,f.level=5,dn(i,`${s.name}將${c.name}的 4 間房屋升級為旅館，支付 ${Jt(p)}。`,"build")),i.buildAvailable=!1,i.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(i.stage)||((l=i.lots[e.id])==null?void 0:l.owner)!==s.id)return r;const c=si[e.id],f=i.lots[e.id],p=Kn(i,c.price+f.level*Math.round(c.price*.6),m=>Math.floor(m*.5));Zy(i,f),s.cash+=p,delete i.lots[e.id],i.buildAvailable=!1,dn(i,`${s.name}變賣${c.name}，回收 ${Jt(p)}。`,"sell");break}case"NEXT":if(i.stage!=="end")return r;{let c=i.turn;do if(c=(c+1)%i.players.length,c===0){i.round++;const f=i.priceIndex;i.priceIndex=Math.min(Wy,i.priceIndex*(1+i.inflationRate/100)),i.priceIndex>f&&dn(i,`新的一輪開始，物價指數升至 ${i.priceIndex.toFixed(2)}×。`,"inflation")}while(i.players[c].bankrupt);i.turn=c,i.event=null,i.stage="ready",i.selected=null,i.buildAvailable=!1,i.buildUsed=!1,i.maxRounds!==null&&i.round>i.maxRounds?(i.winner=i.players.filter(f=>!f.bankrupt).sort((f,p)=>oo(i,p.id)-oo(i,f.id))[0].id,i.stage="finished",dn(i,`${i.maxRounds} 回合結束！${i.players[i.winner].name}以最高總資產獲勝。`)):dn(i,`輪到${i.players[c].name}，準備擲骰子。`);break}default:return r}return i}function BR(){try{const r=RR();return r?qy(r):bp()}catch{return bp()}}function mu(r){return r<=8?[-8+r*2,8]:r<=16?[8,8-(r-8)*2]:r<=24?[8-(r-16)*2,-8]:[-8,-8+(r-24)*2]}const FR=ct.forwardRef(function({game:e,onSelect:i,onError:s},l){const c=ct.useRef(),f=ct.useRef(),p=ct.useRef(e),m=ct.useRef(i);return p.current=e,m.current=i,ct.useImperativeHandle(l,()=>({reset(){var d;(d=f.current)==null||d.reset()},zoom(d){const v=f.current;v&&(v.camera.position.sub(v.controls.target).multiplyScalar(d).clampLength(13,80).add(v.controls.target),v.controls.update())},rotate(){f.current&&(f.current.controls.autoRotate=!f.current.controls.autoRotate)},top(){const d=f.current;d&&(d.camera.position.set(0,29,.01),d.controls.update())}}),[]),ct.useEffect(()=>{let d=!1,v=()=>{};return(async()=>{var en;try{await Promise.race([((en=document.fonts)==null?void 0:en.ready)||Promise.resolve(),new Promise(Se=>setTimeout(Se,2e3))])}catch{}if(d)return;const g='"Noto Sans TC", "Microsoft JhengHei", sans-serif',M=c.current;let T;try{T=new uR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{s==null||s("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=yl,T.outputColorSpace=ai,T.toneMapping=Np,T.toneMappingExposure=.9,M.appendChild(T.domElement),T.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const C=new HE;C.background=new Tt("#eaf0e5"),C.fog=new kp("#eaf0e5",48,90);const E=new Ui(39,1,.1,120),y=new hR(E,T.domElement);y.enableDamping=!0,y.dampingFactor=.07,y.minDistance=13,y.maxDistance=80,y.maxPolarAngle=Math.PI*.485,y.minPolarAngle=.01,y.target.set(0,0,0),y.autoRotateSpeed=.65,y.enablePan=!0;const B=()=>{E.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/E.aspect)),y.target.set(0,0,0),y.autoRotate=!1,y.update()};B(),f.current={camera:E,controls:y,reset:B},C.add(new ob("#fff9e9","#86967e",2.4));const F=new ub("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,C.add(F);const w=new Map,I=Se=>(w.has(Se)||w.set(Se,new xv({color:Se,roughness:.82})),w.get(Se)),U=new Map,O=(Se,we,De,H,Fe,Pe=0,D=0,x=0,Y=0)=>{const $=[we,De,H,Y].join(",");U.has($)||U.set($,Y?new Jp(we,De,H,2,Y):new Es(we,De,H));const ne=new En(U.get($),I(Fe));return ne.position.set(Pe,D,x),ne.castShadow=!0,ne.receiveShadow=!0,Se.add(ne),ne},b=new Zp(1,14,10),L=(Se,we,De,H,Fe,Pe,D=Pe,x=Pe)=>{const Y=new En(b,I(we));return Y.position.set(De,H,Fe),Y.scale.set(Pe,D,x),Y.castShadow=!0,Y.receiveShadow=!0,Se.add(Y),Y},k=(Se,we,De,H,Fe,Pe,D,x,Y=24)=>{const $=new En(new Nu(we,De,H,Y),I(Fe));return $.position.set(Pe,D,x),$.castShadow=!0,$.receiveShadow=!0,Se.add($),$},V=new En(new er(200,200),I("#eaf0e5"));V.rotation.x=-Math.PI/2,V.position.y=-.67,V.receiveShadow=!0,C.add(V),k(C,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),k(C,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),O(C,18.55,.65,18.55,"#405d50",0,-.03,0,.2),O(C,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),O(C,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const Q=[];function fe(Se,we=512,De=512){const H=document.createElement("canvas");H.width=we,H.height=De;const Fe=H.getContext("2d");Se(Fe,we,De);const Pe=new jE(H);return Pe.colorSpace=ai,Pe.minFilter=Nn,Pe.magFilter=Nn,Pe.anisotropy=T.capabilities.getMaxAnisotropy(),Q.push(Pe),Pe}const de={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},ie=[],z=[],W=[],K=[],pe=new Map;function Te(Se,we){const De=`${Se}:${we}`;if(!pe.has(De)){const H=fe((Fe,Pe,D)=>{Fe.clearRect(0,0,Pe,D),Fe.fillStyle=we,Fe.beginPath(),Fe.roundRect(8,8,Pe-16,D-16,24),Fe.fill(),Fe.strokeStyle="#fffaf0",Fe.lineWidth=8,Fe.stroke(),Fe.fillStyle="#fffaf0",Fe.beginPath(),Fe.arc(Pe/2,D/2,43,0,Math.PI*2),Fe.fill(),Fe.fillStyle="#294237",Fe.textAlign="center",Fe.textBaseline="middle",Fe.font="bold 72px Arial",Fe.fillText(String(Se+1),Pe/2,D/2+3)},192,144);pe.set(De,new Ry({map:H,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return pe.get(De)}for(const Se of si){const[we,De]=mu(Se.id),H=new Na;H.position.set(we,.44,De),C.add(H);const Fe=O(H,1.94,.14,1.94,"#fffaf0",0,0,0,.035);Fe.userData.tile=Se.id,ie.push(Fe),z[Se.id]=Fe;const Pe=p.current.priceIndex||1,D=(ne,Re,Ne,he)=>{ne.fillStyle="#fcf9f0",ne.fillRect(0,0,Re,Ne),Se.type==="property"&&(ne.fillStyle=Se.color,ne.fillRect(0,0,Re,82)),ne.fillStyle="#294237",ne.textAlign="center",ne.font=`bold 76px ${g}`,ne.fillText(Se.name,Re/2,Se.type==="property"?180:140),Se.type==="property"?(ne.font="60px Arial",ne.fillText(Jt(Math.round(Se.price*he)),Re/2,290),ne.fillStyle="#8c998e",ne.font="26px sans-serif",ne.fillText("CITY PROPERTY",Re/2,410)):(ne.font="bold 135px Arial",ne.fillStyle=Se.type==="chance"?"#ba9270":"#648473",ne.fillText(de[Se.type],Re/2,320),ne.fillStyle="#728375",ne.font=`30px ${g}`,ne.fillText(Se.type==="start"?`+ ${Jt(Math.round(2e3*he))}`:Se.type==="tax"?"城市稅收":Se.type==="park"?"歇一會兒":Se.type==="chance"?"好運降臨":Se.type==="fund"?"城市生活":"JUST VISITING",Re/2,420))},x=fe((ne,Re,Ne)=>D(ne,Re,Ne,Pe));(Se.type==="property"||Se.type==="start")&&K.push(ne=>{const Re=x.image.getContext("2d");D(Re,x.image.width,x.image.height,ne),x.needsUpdate=!0});const Y=new En(new er(1.89,1.89),new Ml({map:x,toneMapped:!1}));Y.rotation.x=-Math.PI/2,Y.rotation.z=Se.id<8?0:Se.id<16?Math.PI/2:Se.id<24?Math.PI:-Math.PI/2,Y.position.y=.076,H.add(Y);const $=new Na;$.position.set(we,.58,De),$.rotation.y=Se.id<8?0:Se.id<16?Math.PI/2:Se.id<24?Math.PI:-Math.PI/2,C.add($),W[Se.id]=$}for(const Se of[-4.4,4.4]){O(C,.8,.025,13,"#d3d2bb",Se,.525,0),O(C,1.15,.018,13,"#f6f1df",Se,.513,0);for(let we=-6;we<=6;we+=.75)O(C,.035,.008,.29,"#faf6e8",Se,.543,we)}for(const Se of[-3.2,3.2]){O(C,13,.025,.8,"#d3d2bb",0,.525,Se),O(C,13,.018,1.15,"#f6f1df",0,.513,Se);for(let we=-6;we<=6;we+=.75)O(C,.29,.008,.035,"#faf6e8",we,.543,Se)}function P(Se,we,De=1){const H=new Na;H.position.set(Se,.52,we),H.scale.setScalar(De),C.add(H),k(H,.045,.075,.55,"#94785c",0,.28,0,7),L(H,"#8db578",0,.83,0,.29,.44,.29),L(H,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function J(Se,we,De,H,Fe,Pe,D=!1){const x=new Na;x.position.set(Se,.53,we),C.add(x),O(x,De+.18,.12,H+.18,"#ede9d5",0,.06,0,.04),O(x,De,Fe,H,Pe,0,Fe/2+.1,0,.035),O(x,De+.1,.1,H+.1,"#fff4df",0,Fe+.12,0,.02);for(let Y=.45;Y<Fe-.1;Y+=.42){for(let $=-De/2+.22;$<De/2-.08;$+=.32)O(x,.17,.23,.018,"#6d9097",$,Y,H/2+.01),O(x,.17,.23,.018,"#6d9097",$,Y,-H/2-.01);for(let $=-H/2+.22;$<H/2-.08;$+=.32)O(x,.018,.23,.17,"#6d9097",De/2+.01,Y,$);O(x,De+.025,.045,H+.025,"#ede9d8",0,Y+.17,0)}if(O(x,.24,.36,.024,"#496d68",0,.28,H/2+.02),D){const Y=new En(new El(De*.81,.55,4),I("#c98468"));Y.rotation.y=Math.PI/4,Y.scale.z=H/De,Y.position.y=Fe+.42,Y.castShadow=!0,x.add(Y)}else O(x,De*.7,.08,H*.7,"#a5b7ae",0,Fe+.21,0),O(x,.23,.2,.25,"#e9e4d2",De*.18,Fe+.34,0)}J(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),J(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),J(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),J(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),J(5.6,-5,1.1,1.5,2.3,"#aac5bc"),J(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),J(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),J(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),J(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),J(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),J(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[Se,we]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])P(Se,we,1.05);for(let Se=0;Se<24;Se++){const we=Se*Math.PI*2/24;Se%3!==0&&P(Math.cos(we)*12.5,Math.sin(we)*12.5,.85+Se%3*.12)}O(C,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const X=fe((Se,we,De)=>{Se.clearRect(0,0,we,De),Se.textAlign="center",Se.fillStyle="#3d6850",Se.font="900 152px Arial",Se.fillText("CITY",we/2,148),Se.fillText("TYCOON",we/2,265),Se.font=`25px ${g}`,Se.fillStyle="#6d8468",Se.fillText("每一步，都是新可能。",we/2,338)},1024,420),_e=new En(new er(6.2,2.54),new xv({map:X,transparent:!0,depthWrite:!1}));_e.rotation.x=-Math.PI/2,_e.position.set(0,.58,0),C.add(_e),k(C,.75,.82,.12,"#ede7cf",0,.59,4.3),k(C,.62,.62,.05,"#91c8ce",0,.675,4.3),k(C,.18,.28,.5,"#dfebdf",0,.95,4.3),L(C,"#9fcfd2",0,1.3,4.3,.14),k(C,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Ce=[];for(let Se=0;Se<4;Se++){const we=new Na;C.add(we),k(we,.26,.3,.12,Fn[Se],0,.08,0),L(we,Fn[Se],0,.53,0,.23,.32,.18),L(we,"#f1d5b0",0,1,0,.225),L(we,Fn[Se],0,1.12,-.015,.24,.14,.235),O(we,.44,.05,.15,Fn[Se],0,1.1,.16,.025);for(const Fe of[-.09,.09])L(we,"#273e34",Fe,1.015,.198,.025),O(we,.13,.2,.19,"#3c5349",Fe,.22,.025,.035),L(we,"#f1d5b0",Fe*2.8,.51,0,.075,.15,.075);O(we,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),we.scale.setScalar(.95);const[De,H]=mu(0);we.position.set(De+(Se%2-.5)*.62,.59,H+(Math.floor(Se/2)-.5)*.62),we.traverse(Fe=>{Fe.material===I(Fn[Se])&&(Fe.userData.playerTint=!0)}),Ce.push(we)}const ae=new En(new qp(.42,.5,40),new Ml({color:"#f4c65b",side:ea}));ae.rotation.x=-Math.PI/2,C.add(ae);const ve=new En(new Es(1.98,.045,1.98),new Ml({color:"#edc768",transparent:!0,opacity:.6}));C.add(ve),ve.visible=!1;let Ee="",ke=Number.NaN,rt,$e=0,Xt=performance.now();const dt=()=>{const Se=M.clientWidth,we=M.clientHeight;T.setSize(Se,we),E.aspect=Se/we,E.updateProjectionMatrix(),B()},xt=new ResizeObserver(dt);xt.observe(M),dt();let _t;const vt=Se=>{_t=[Se.clientX,Se.clientY]},jt=Se=>{if(!_t||Math.hypot(Se.clientX-_t[0],Se.clientY-_t[1])>6)return;const we=M.getBoundingClientRect(),De=new db;De.setFromCamera(new st((Se.clientX-we.left)/we.width*2-1,-(Se.clientY-we.top)/we.height*2+1),E);const H=De.intersectObjects(ie)[0];H&&m.current(H.object.userData.tile)};M.addEventListener("pointerdown",vt),M.addEventListener("pointerup",jt);function $t(){var Fe;rt=requestAnimationFrame($t);const Se=performance.now(),we=Math.min((Se-Xt)/1e3,.05);Xt=Se,$e+=we;const De=p.current;for(let Pe=0;Pe<Ce.length;Pe++)Ce[Pe].visible=!!De.players[Pe]&&!De.players[Pe].bankrupt;for(let Pe=0;Pe<De.players.length;Pe++){const D=De.players[Pe],x=Ce[Pe],[Y,$]=mu(D.pos);x.traverse(he=>{he.userData.playerTint&&(he.material=I(D.color||Fn[Pe]))});const ne=Y+(Pe%2-.5)*.62,Re=$+(Math.floor(Pe/2)-.5)*.62;Math.hypot(ne-x.position.x,Re-x.position.z)>.04?(x.rotation.y=Math.atan2(ne-x.position.x,Re-x.position.z),x.position.x=gp.damp(x.position.x,ne,13,we),x.position.z=gp.damp(x.position.z,Re,13,we),x.position.y=.59+Math.abs(Math.sin($e*17))*.18):x.position.y=.59,x.visible=!D.bankrupt}if(De.priceIndex!==ke&&(ke=De.priceIndex,K.forEach(Pe=>Pe(ke))),ae.position.copy(Ce[De.turn].position),ae.position.y=.595,ae.scale.setScalar(1+Math.sin($e*3)*.06),De.selected!==null){const[Pe,D]=mu(De.selected);ve.position.set(Pe,.536,D),ve.visible=!0}else ve.visible=!1;const H=JSON.stringify([De.lots,De.players.map(Pe=>Pe.color)]);if(Ee!==H){Ee=H;for(const Pe of si){const D=W[Pe.id];for(;D.children.length;){const $=D.children[0];$.userData.disposableGeometry&&$.geometry.dispose(),D.remove($)}const x=De.lots[Pe.id],Y=x?((Fe=De.players[x.owner])==null?void 0:Fe.color)||Fn[x.owner]:null;if(z[Pe.id].material=I(Y||"#fffaf0"),x){O(D,.045,.72,.045,"#647568",.67,.36,.7,.01);const $=new YE(Te(x.owner,Y));if($.position.set(.67,.86,.7),$.scale.set(.62,.465,1),$.renderOrder=5,D.add($),O(D,1.75,.055,.13,Y,0,0,.84,.015),x.level===5){O(D,.62,.72,.58,Y,0,.36,-.18,.04),O(D,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const ne=new En(new El(.43,.28,4),I("#d2a451"));ne.position.set(0,.96,-.18),ne.userData.disposableGeometry=!0,ne.rotation.y=Math.PI/4,ne.castShadow=!0,D.add(ne),O(D,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const ne=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Re=0;Re<x.level;Re++){const[Ne,he]=ne[Re];O(D,.33,.32,.34,Y,Ne,.2,he,.02);const ge=new En(new El(.3,.19,4),I("#faf0d7"));ge.position.set(Ne,.45,he),ge.userData.disposableGeometry=!0,ge.rotation.y=Math.PI/4,ge.castShadow=!0,D.add(ge)}}}}}y.update(),T.render(C,E)}$t(),v=()=>{cancelAnimationFrame(rt),xt.disconnect(),M.removeEventListener("pointerdown",vt),M.removeEventListener("pointerup",jt),y.dispose();const Se=new Set,we=new Set;C.traverse(De=>{De.geometry&&Se.add(De.geometry),De.material&&we.add(De.material)}),Se.forEach(De=>De.dispose()),U.forEach(De=>De.dispose()),we.forEach(De=>De.dispose()),w.forEach(De=>De.dispose()),pe.forEach(De=>De.dispose()),Q.forEach(De=>De.dispose()),T.dispose(),T.domElement.parentNode===M&&M.removeChild(T.domElement),f.current=null}})(),()=>{d=!0,v()}},[]),N.createElement("div",{className:"board-canvas",ref:c})});function HR({game:r,onLoad:e}){const[i,s]=ct.useState([]),[l,c]=ct.useState(""),[f,p]=ct.useState(""),[m,d]=ct.useState(null),v=()=>{try{s(wl())}catch{p("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};ct.useEffect(()=>{v();const M=setInterval(v,6e4);return window.addEventListener("storage",v),()=>{clearInterval(M),window.removeEventListener("storage",v)}},[]);function S(M=!1){try{const T=wl();if(s(T),T.length===10&&!M){d({type:"replace"});return}s(TR(r,l,M)),c(""),d(null),p("已儲存，可保留 30 天。")}catch(T){d(null),p(`儲存失敗：${T.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function g(){try{const M=AR(m.id);e(M)}catch(M){d(null),p(M.message),v()}}return N.createElement("div",{className:"save-manager"},N.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",i.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),N.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),N.createElement("input",{id:"save-name",maxLength:60,value:l,onChange:M=>c(M.target.value),placeholder:`回合 ${r.round}`}),N.createElement("button",{className:"primary",onClick:()=>S()},"儲存目前進度"),N.createElement("p",{role:"status"},f),m?N.createElement("section",{className:"save-confirm"},N.createElement("p",null,m.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),N.createElement("button",{className:"primary",onClick:()=>m.type==="replace"?S(!0):g()},"確認",m.type==="replace"?"取代並儲存":"讀取"),N.createElement("button",{className:"secondary full",onClick:()=>d(null)},"取消")):null,!i.length&&N.createElement("p",null,"尚無手動存檔。"),i.map(M=>N.createElement("article",{className:"save-entry",key:M.id},N.createElement("div",null,N.createElement("strong",null,M.name),N.createElement("small",null,new Date(M.savedAt).toLocaleString("zh-TW")),N.createElement("small",null,"回合 ",M.game.round," · 你的總資產 ",Jt(oo(M.game,0))),N.createElement("small",null,"到期：",new Date(M.savedAt+ky).toLocaleString("zh-TW"))),N.createElement("button",{className:"secondary",onClick:()=>d({type:"load",id:M.id})},"讀取"))))}const GR=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,Qy="city-tycoon:background-music:v1";function VR(){try{const r=JSON.parse(localStorage.getItem(Qy));return{enabled:(r==null?void 0:r.enabled)===!0,volume:typeof(r==null?void 0:r.volume)=="number"&&Number.isFinite(r.volume)?Math.max(0,Math.min(100,r.volume)):50}}catch{return{enabled:!1,volume:50}}}function kR(){const[r,e]=ct.useState(VR),[i,s]=ct.useState(!1),[l,c]=ct.useState(""),f=ct.useRef(null),p=ct.useRef(0);function m(){const v=++p.current;c(""),f.current.play().catch(S=>{v===p.current&&c(S.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}ct.useEffect(()=>{const v=f.current;return v.volume=r.volume/100,r.enabled&&m(),()=>{p.current++,v.pause()}},[]),ct.useEffect(()=>{f.current.volume=r.volume/100;try{localStorage.setItem(Qy,JSON.stringify(r))}catch{}},[r]);function d(){f.current.paused?(e(v=>({...v,enabled:!0})),m()):(p.current++,f.current.pause(),c(""),e(v=>({...v,enabled:!1})))}return N.createElement("div",{className:"background-music"},N.createElement("audio",{ref:f,src:GR,loop:!0,preload:"none",onPlaying:()=>s(!0),onPause:()=>s(!1),onError:()=>{s(!1),c("音樂無法載入，請重新整理")}}),N.createElement("button",{className:"music-toggle","aria-label":i?"關閉背景音樂":"開啟背景音樂","aria-pressed":i,onClick:d,title:l||"Velvet Afternoon"},N.createElement(vM,{size:16}),N.createElement("span",null,"背景音樂"),i?N.createElement(yM,{size:14}):N.createElement(xM,{size:14})),N.createElement("label",{className:"music-volume"},N.createElement("span",{className:"music-volume-label"},"音量"),N.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:r.volume,onChange:v=>e(S=>({...S,volume:Number(v.target.value)}))}),N.createElement("output",null,r.volume,"%")),l&&N.createElement("span",{className:"music-message",role:"status"},l))}function XR({value:r,rolling:e}){const i={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return N.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${r} 點`},Array.from({length:9},(s,l)=>N.createElement("i",{key:l,className:i[r].includes(l+1)?"pip":""})))}function Rp(r){return(r==null?void 0:r.color)||Fn[(r==null?void 0:r.id)||0]}function ty({id:r,small:e=!1,player:i}){return N.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Rp(i||{id:r})}},N.createElement("span",{className:"avatar-head"}),N.createElement("span",{className:"avatar-body"}),N.createElement("span",{className:"avatar-cap"}),N.createElement("span",{className:"owner-number"},r+1))}function WR(r){return r===5?"旅館":r?`${r} 間房屋`:"未開發地產"}function YR(r){return r===5?"旅館":"房屋 "+(r||0)+" / 4"}function qR(r,e,i){if(r.selected!==e.id||r.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(r.buildUsed)return"本次落地已完成建造。";if(i.level===5)return"這塊土地已有旅館。";const s=ir(r);return i.level===4?s.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":s.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function ZR(r,e,i){return i.level===5?"已達最高等級":r.buildUsed&&r.selected===e.id?"本次落地已建造":i.level===4?`升級旅館 · ${Jt(ho(e,r))}`:`建造房屋 · ${Jt(ho(e,r))}`}function eo({title:r,onClose:e,children:i,wide:s=!1}){const l=ct.useRef();return ct.useEffect(()=>{var p;const c=document.activeElement;(p=l.current)==null||p.focus();function f(m){if(m.key==="Escape"&&(e==null||e()),m.key==="Tab"){const d=[...l.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!d.length){m.preventDefault();return}m.shiftKey&&document.activeElement===d[0]?(m.preventDefault(),d.at(-1).focus()):!m.shiftKey&&document.activeElement===d.at(-1)&&(m.preventDefault(),d[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),N.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},N.createElement("section",{ref:l,tabIndex:-1,className:"modal "+(s?"wide":""),role:"dialog","aria-modal":"true","aria-label":r},N.createElement("div",{className:"modal-heading"},N.createElement("h2",null,r),e&&N.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},N.createElement(ry,{size:20}))),i))}const Cp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Cp.splice(0,Cp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function KR(r){if(r.roundOption==="unlimited")return null;if(r.roundOption==="custom"){const e=Number(r.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(r.roundOption)}const ny="city-tycoon:activity-visible:v1",Jy="city-tycoon:glass-opacity:v1",Td=72,jy=r=>Math.min(95,Math.max(5,Number(r)));function QR(){try{const r=localStorage.getItem(Jy);if(r===null)return Td;const e=Number(r);return Number.isFinite(e)?jy(e):Td}catch{return Td}}function iy({entries:r}){return r.map((e,i)=>N.createElement("div",{className:"activity-item",key:i},N.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?N.createElement(gu,{size:16}):e.kind==="dice"?N.createElement(sy,{size:16}):e.kind==="tax"?N.createElement(gM,{size:16}):N.createElement(Ad,{size:16})),N.createElement("p",null,e.text,N.createElement("small",null,i===0?"剛剛":"本局紀錄"))))}function JR(){var J;const[r,e]=ct.useState(()=>{try{return localStorage.getItem(ny)!=="false"}catch{return!0}}),[i,s]=ct.useState(QR),l=ct.useRef();ct.useEffect(()=>{try{localStorage.setItem(ny,String(r))}catch{}},[r]);const c=X=>{const _e=jy(Number(X.currentTarget.value));s(_e);try{localStorage.setItem(Jy,String(_e))}catch{}},[f,p]=ct.useReducer(zR,void 0,BR),[m,d]=ct.useState(null),[v,S]=ct.useState(null),[g,M]=ct.useState("players"),[T,C]=ct.useState(!1),[E,y]=ct.useState(!1),[B,F]=ct.useState(""),[w,I]=ct.useState(!1),[U,O]=ct.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:jp,players:[{name:"你",color:Fn[0],human:!0},{name:"艾米",color:Fn[1],human:!1},{name:"小傑",color:Fn[2],human:!1},{name:"喵喵",color:Fn[3],human:!1}]}),b=ct.useRef(),L=ct.useRef(),k=f.players[f.turn],V=!!(k!=null&&k.human)&&!(k!=null&&k.bankrupt),Q=V&&["ready","end"].includes(f.stage),fe=()=>{p({type:"ROLL",dice:Array.from({length:k.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})};ct.useEffect(()=>{try{wl()}catch{I(!0)}},[]),ct.useEffect(()=>{if(f.stage!=="moving")try{Mp(f),I(!1)}catch{I(!0)}},[f]),ct.useEffect(()=>{if(f.stage==="moving"&&m!=="saves"){const X=setTimeout(()=>p({type:"STEP"}),330);return()=>clearTimeout(X)}},[f,m]),ct.useEffect(()=>{const X=f.selected,_e=X===null?null:si[X],Ce=X===null?null:f.lots[X],ae=V&&f.stage==="decision"&&(_e==null?void 0:_e.type)==="property"&&!Ce,ve=V&&f.stage==="end"&&f.buildAvailable&&(Ce==null?void 0:Ce.owner)===f.turn;(ae||ve)&&(S(X),d("property"))},[f,V]),ct.useEffect(()=>{if(V||f.stage==="finished"||m==="new"||m==="rules"||m==="saves")return;const X=setTimeout(()=>{if(f.stage==="ready")fe();else if(f.stage==="decision")p({type:k.cash>no(f,si[k.pos])+Kn(f,1800)?"BUY":"SKIP"});else if(f.stage==="end"){const _e=Js(f,f.turn).find(Ce=>Ap(f,Ce.id)&&k.cash>ho(Ce,f)+Kn(f,2500));p(_e?{type:"BUILD",id:_e.id}:{type:"NEXT"})}},f.stage==="decision"?1300:1100);return()=>clearTimeout(X)},[f,V,m]),ct.useEffect(()=>{if(!(!T||!L.current))try{const X=L.current,_e=X.createOscillator(),Ce=X.createGain();_e.connect(Ce),Ce.connect(X.destination),_e.type="sine",_e.frequency.setValueAtTime(f.stage==="moving"?380:620,X.currentTime),Ce.gain.setValueAtTime(.035,X.currentTime),Ce.gain.exponentialRampToValueAtTime(.001,X.currentTime+.13),_e.start(),_e.stop(X.currentTime+.15)}catch{}},[f.remaining,f.stage,T]);const de=()=>{if(!T){const X=window.AudioContext||window.webkitAudioContext;X&&(L.current||(L.current=new X),L.current.resume())}C(!T)},ie=X=>{S(X),d("property")},z=KR(U),W=()=>{var X;U.roundOption==="custom"&&!z||(p({type:"NEW",config:{...U,maxRounds:z,inflationRate:Number(U.inflationRate)}}),d(null),M("players"),(X=b.current)==null||X.reset(),y(!1))},K=v!==null?si[v]:null,pe=K?f.lots[K.id]:null,Te=si[k.pos],P=!!K&&K.type==="property"&&!pe&&f.stage==="decision"&&V&&Te.id===K.id;return N.createElement("div",{className:"app-shell"},N.createElement("header",{className:"header"},N.createElement("a",{className:"brand",href:"./","aria-label":"城市大亨首頁"},N.createElement("span",{className:"brand-icon"},N.createElement(Y_,{size:33,strokeWidth:1.8})),N.createElement("span",null,N.createElement("strong",null,"城市大亨"),N.createElement("small",null,"CITY TYCOON"))),N.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),N.createElement("nav",null,N.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>d("rules")},N.createElement(W_,{size:18}),N.createElement("span",null,"遊戲規則")),N.createElement("span",{className:"nav-divider"}),N.createElement("button",{className:"outline-button",onClick:()=>d("new")},N.createElement(q_,{size:18}),N.createElement("span",null,"新遊戲")))),N.createElement("button",{className:"save-launch secondary",onClick:()=>d("saves")},"儲存／讀取"),m==="saves"&&N.createElement(eo,{title:"存檔管理",wide:!0,onClose:()=>d(null)},N.createElement(HR,{game:f,onLoad:X=>{p({type:"LOAD",game:X});try{Mp(X),I(!1)}catch{I(!0)}S(null),M("players"),d(null)}})),N.createElement("main",{className:"game-layout"},N.createElement("section",{className:"world","aria-label":"遊戲棋盤"},N.createElement(FR,{game:f,onSelect:ie,onError:F,ref:b}),N.createElement("div",{className:"world-heading"},N.createElement("span",{className:"live-dot"}),"經典城市 ",N.createElement("span",{className:"world-heading-divider"},"/"),N.createElement("span",null,f.players.length," 人對局"),N.createElement("button",{ref:l,className:"activity-toggle","aria-expanded":r,"aria-controls":"glass-city-activity",onClick:()=>e(X=>!X)},N.createElement(W_,{size:16}),"城市動態",N.createElement("span",null,r?"收起":"展開"))),N.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-i/100},"aria-labelledby":"glass-activity-title",hidden:!r},N.createElement("div",{className:"glass-activity-heading"},N.createElement("h2",{id:"glass-activity-title"},"城市動態"),N.createElement("label",{className:"glass-opacity-control"},N.createElement("span",null,"透明度"),N.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:i,"aria-label":"玻璃面板透明度",onChange:X=>s(Number(X.target.value)),onPointerUp:c,onBlur:c}),N.createElement("output",null,i,"%")),N.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var X;e(!1),(X=l.current)==null||X.focus()}},N.createElement(ry,{size:20}))),N.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},N.createElement(iy,{entries:f.log})),N.createElement("button",{className:"glass-activity-all",onClick:()=>d("log")},"全部紀錄 ",N.createElement(Ad,{size:16}))),N.createElement("div",{className:"world-top-right"},N.createElement("span",{className:"saved"},N.createElement(dM,{size:13}),w?"此瀏覽器無法存檔":"自動儲存"),N.createElement(kR,null),N.createElement("button",{className:"icon-button sound","aria-label":T?"關閉音效":"開啟音效",onClick:de},T?N.createElement(TM,{size:18}):N.createElement(AM,{size:18}))),B&&N.createElement("div",{className:"webgl-error"},B),N.createElement("div",{className:"board-foot"},N.createElement("div",{className:"camera-toolbar"},N.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:E?"selected":"",onClick:()=>{var X;(X=b.current)==null||X.rotate(),y(!E)}},N.createElement(SM,{size:20}),N.createElement("span",null,"旋轉視角")),N.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var X;(X=b.current)==null||X.reset(),y(!1)}},N.createElement(MM,{size:18})),N.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var X;return(X=b.current)==null?void 0:X.top()}},N.createElement(EM,{size:18})),N.createElement("i",null),N.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var X;return(X=b.current)==null?void 0:X.zoom(1.15)}},N.createElement(CM,{size:20})),N.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var X;return(X=b.current)==null?void 0:X.zoom(.87)}},N.createElement(RM,{size:20}))),N.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),N.createElement("aside",{className:"sidebar"},N.createElement("div",{className:"round-heading"},N.createElement("div",null,N.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),N.createElement("h1",null,"回合 ",N.createElement("b",null,String(f.round).padStart(2,"0")),N.createElement("span",null,"/ ",f.maxRounds===null?"∞":f.maxRounds)),N.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${f.inflationRate}%，物價指數 ${f.priceIndex.toFixed(2)} 倍`},N.createElement("span",{className:"inflation-rate-badge"},N.createElement(bM,{size:14,"aria-hidden":"true"}),"通膨率 ",N.createElement("b",null,f.inflationRate,"%")),N.createElement("span",{className:"inflation-index"},"物價指數 ",N.createElement("b",null,f.priceIndex.toFixed(2),"×")))),N.createElement("span",{className:"round-icon"},N.createElement(mM,{size:21}))),N.createElement("div",{className:"tabs"},N.createElement("button",{className:g==="players"?"active":"",onClick:()=>M("players")},"玩家概況"),N.createElement("button",{className:g==="properties"?"active":"",onClick:()=>M("properties")},"我的地產 ",N.createElement("span",null,Js(f,0).length))),N.createElement("div",{className:"overview"},g==="players"?f.players.map(X=>N.createElement("div",{key:X.id,className:"player-row "+(f.turn===X.id?"current ":"")+(X.bankrupt?"bankrupt":""),style:{"--player":Rp(X)}},N.createElement(ty,{id:X.id,player:X}),N.createElement("div",{className:"player-info"},N.createElement("strong",null,X.name,X.id===0?N.createElement("em",null,"玩家"):N.createElement("span",{className:"ai"},"電腦")),N.createElement("small",null,X.bankrupt?"已破產":`${Js(f,X.id).length} 塊地產${X.jail?" · 監獄中":""}`)),N.createElement("div",{className:"player-cash"},N.createElement("b",null,Jt(X.cash)),f.turn===X.id&&N.createElement("small",null,N.createElement("span",null)," 目前回合")))):N.createElement("div",{className:"property-list"},Js(f,0).length?Js(f,0).map(X=>N.createElement("button",{key:X.id,onClick:()=>ie(X.id)},N.createElement("i",{style:{background:X.color}}),N.createElement("span",null,N.createElement("strong",null,X.name),N.createElement("small",null,WR(f.lots[X.id].level)," · 租金 ",Jt(Tp(f,X)))),N.createElement(pM,{size:16}))):N.createElement("div",{className:"empty-properties"},N.createElement(gu,{size:28}),N.createElement("strong",null,"你的第一塊地產，正在等你"),N.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),N.createElement("section",{className:"turn-panel","aria-live":"polite"},N.createElement("div",{className:"turn-title"},N.createElement("span",{className:"live-dot",style:{background:Rp(k)}}),N.createElement("h2",null,f.stage==="finished"?"本局已結束":V?"你的回合":`${k.name}的回合`),N.createElement("span",null,f.stage==="moving"?"移動中":f.stage==="decision"?"購地時刻":V?"準備出發":"電腦玩家")),N.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(X=>N.createElement("button",{key:X,"aria-pressed":(k.diceCount??2)===X,disabled:!V||f.stage!=="ready"||!!k.jail,onClick:()=>p({type:"SET_DICE_COUNT",count:X})},X," 顆骰子"))),N.createElement("div",{className:"dice-row"},(f.stage==="ready"?Array.from({length:k.diceCount??2},()=>1):f.dice).map((X,_e)=>N.createElement(XR,{key:_e,value:X,rolling:f.stage==="moving"}))),f.stage==="finished"?N.createElement("button",{className:"primary",onClick:()=>d("result")},N.createElement(Z_,{size:19}),"查看結算"):V&&f.stage==="decision"?N.createElement("div",{className:"buy-actions"},N.createElement("div",{className:"buy-summary"},N.createElement("strong",null,Te.name),N.createElement("b",null,Jt(no(f,Te)))),N.createElement("button",{className:"primary",onClick:()=>p({type:"BUY"})},N.createElement(gu,{size:18}),"購買地產"),N.createElement("button",{className:"skip-button",onClick:()=>p({type:"SKIP"})},"暫不購買，保留現金 ",N.createElement(Vc,{size:14}))):N.createElement("button",{className:"primary",disabled:!V||f.stage==="moving",onClick:()=>f.stage==="end"?p({type:"NEXT"}):fe()},f.stage==="moving"?N.createElement(N.Fragment,null,"前進中 · 還有 ",f.remaining," 格"):V?f.stage==="end"?N.createElement(N.Fragment,null,"結束回合 ",N.createElement(Vc,{size:19})):N.createElement(N.Fragment,null,N.createElement(sy,{size:21}),"擲骰子"):N.createElement(N.Fragment,null,"電腦思考中",N.createElement("span",{className:"thinking"},"…"))),N.createElement("p",{className:"turn-hint"},f.stage==="ready"?V?"好運從這一步開始。":"下一段城市冒險，即將展開。":f.notice),f.event&&N.createElement("div",{className:"event-note"},N.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),N.createElement("div",null,N.createElement("strong",null,f.event.title),N.createElement("span",null,f.event.kind==="inflation"?f.event.inflationDelta===0?`通膨率維持 ${f.inflationRate}%（已達上下限）`:`通膨率 ${f.event.inflationDelta>0?"+":""}${f.event.inflationDelta}% · 目前 ${f.inflationRate}%`:`${f.event.amount>0?"+":"−"} ${Jt(Math.abs(f.event.amount))}`)))),N.createElement("section",{className:"activity"},N.createElement("div",{className:"activity-heading"},N.createElement("h2",null,"城市動態"),N.createElement("button",{onClick:()=>d("log")},"全部紀錄 ",N.createElement(Ad,{size:14}))),N.createElement("div",{className:"activity-list"},N.createElement(iy,{entries:f.log.slice(0,3)}))),N.createElement("footer",{className:"sidebar-footer"},N.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),m==="rules"&&N.createElement(eo,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>d(null)},N.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),N.createElement("div",{className:"rules-list"},Cp.map(([X,_e],Ce)=>N.createElement("div",{key:X},N.createElement("span",null,String(Ce+1).padStart(2,"0")),N.createElement("section",null,N.createElement("h3",null,X),N.createElement("p",null,_e))))),N.createElement("button",{className:"primary",onClick:()=>d(null)},"知道了，回到城市 ",N.createElement(Vc,{size:18}))),m==="new"&&N.createElement(eo,{title:"開啟一段全新的城市故事",onClose:()=>d(null)},N.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),N.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),N.createElement("label",{className:"setup-count"},"玩家人數 ",N.createElement("select",{value:U.count,onChange:X=>O(_e=>({..._e,count:Number(X.target.value)}))},[2,3,4].map(X=>N.createElement("option",{key:X,value:X},X," 人")))),N.createElement("label",{className:"setup-count"},"最多回合 ",N.createElement("select",{"aria-label":"最多回合",value:U.roundOption,onChange:X=>O(_e=>({..._e,roundOption:X.target.value}))},N.createElement("option",{value:"40"},"40 回合"),N.createElement("option",{value:"80"},"80 回合"),N.createElement("option",{value:"custom"},"自訂"),N.createElement("option",{value:"unlimited"},"無限制"))),N.createElement("label",{className:"setup-count"},"初始通膨率 ",N.createElement("select",{"aria-label":"初始通膨率",value:U.inflationRate,onChange:X=>O(_e=>({..._e,inflationRate:Number(X.target.value)}))},Array.from({length:Xy+1},(X,_e)=>N.createElement("option",{key:_e,value:_e},_e,"%")))),U.roundOption==="custom"&&N.createElement("label",{className:"round-limit-custom"},"自訂回合數",N.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:U.customRounds,onChange:X=>O(_e=>({..._e,customRounds:X.target.value}))})),N.createElement("div",{className:"player-setup"},U.players.slice(0,U.count).map((X,_e)=>N.createElement("div",{className:"player-setup-row",key:_e},N.createElement("input",{"aria-label":`玩家 ${_e+1} 名稱`,value:X.name,onChange:Ce=>O(ae=>({...ae,players:ae.players.map((ve,Ee)=>Ee===_e?{...ve,name:Ce.target.value}:ve)}))}),N.createElement("input",{"aria-label":`玩家 ${_e+1} 顏色`,type:"color",value:X.color,onChange:Ce=>O(ae=>({...ae,players:ae.players.map((ve,Ee)=>Ee===_e?{...ve,color:Ce.target.value}:ve)}))}),N.createElement("select",{value:X.human?"human":"ai",onChange:Ce=>O(ae=>({...ae,players:ae.players.map((ve,Ee)=>Ee===_e?{...ve,human:Ce.target.value==="human"}:ve)}))},N.createElement("option",{value:"human"},"真人"),N.createElement("option",{value:"ai"},"電腦"))))),N.createElement("button",{className:"primary",disabled:U.roundOption==="custom"&&!z,onClick:W},N.createElement(q_,{size:18}),"開始新遊戲"),N.createElement("button",{className:"secondary full",onClick:()=>d(null)},"繼續目前遊戲")),m==="property"&&K&&N.createElement(eo,{title:"地產手冊",onClose:()=>d(null)},N.createElement("div",{className:"property-card",style:{"--lot":K.color}},N.createElement("div",{className:"property-banner"},K.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),N.createElement(_M,{size:24}),N.createElement("h3",null,K.name),N.createElement("p",null,K.type==="property"?`街區 ${K.group+1} · ${pe?`${f.players[pe.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),K.type==="property"?N.createElement(N.Fragment,null,N.createElement("div",{className:"property-stats"},N.createElement("div",null,N.createElement("span",null,"地產價格"),N.createElement("b",null,Jt(no(f,K)))),N.createElement("div",null,N.createElement("span",null,"目前租金"),N.createElement("b",null,Jt(pe?Tp(f,K):Kn(f,Math.round(K.price*.18))))),N.createElement("div",null,N.createElement("span",null,"建築等級"),N.createElement("b",null,YR(pe==null?void 0:pe.level))),N.createElement("div",null,N.createElement("span",null,"建造費"),N.createElement("b",null,Jt(ho(K,f))))),(pe==null?void 0:pe.owner)===k.id?N.createElement(N.Fragment,null,N.createElement("p",{className:"property-help"},qR(f,K,pe)),N.createElement("button",{className:"primary",disabled:!Q||!Ap(f,K.id,k.id),onClick:()=>p({type:"BUILD",id:K.id})},N.createElement(Y_,{size:18}),ZR(f,K,pe)),N.createElement("button",{className:"secondary full",disabled:!Q,onClick:()=>{p({type:"SELL",id:K.id}),d(null)}},"變賣地產 · ",Jt(Kn(f,K.price+pe.level*Math.round(K.price*.6),X=>Math.floor(X*.5))))):P?N.createElement(N.Fragment,null,N.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),N.createElement("button",{className:"primary",onClick:()=>p({type:"BUY"})},N.createElement(gu,{size:18}),"購買地產 · ",Jt(no(f,K))),N.createElement("button",{className:"secondary full",onClick:()=>{p({type:"SKIP"}),d(null)}},"暫不購買，保留現金")):N.createElement("p",{className:"property-help"},pe?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):N.createElement("p",{className:"property-help"},K.type==="start"?`每次經過起點，領取 ${Jt(Kn(f,2e3))}。`:K.type==="chance"||K.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":K.type==="gojail"?"前往監獄並暫停下一回合。":K.type==="tax"?`停在這裡支付 ${Jt(Kn(f,K.id===6?1200:1800))} 稅金。`:K.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),m==="log"&&N.createElement(eo,{title:"本局城市紀錄",onClose:()=>d(null)},N.createElement("div",{className:"full-log"},f.log.map((X,_e)=>N.createElement("p",{key:_e},N.createElement("span",null,String(f.log.length-_e).padStart(2,"0")),X.text)))),(m==="result"||f.stage==="finished"&&m===null)&&N.createElement(eo,{title:"這座城市，有了新的大亨",onClose:()=>d("closedResult")},N.createElement("div",{className:"winner"},N.createElement(Z_,{size:42}),N.createElement("h3",null,(J=f.players[f.winner])==null?void 0:J.name,"獲勝！"),N.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),N.createElement("div",{className:"rankings"},[...f.players].sort((X,_e)=>oo(f,_e.id)-oo(f,X.id)).map((X,_e)=>N.createElement("div",{key:X.id},N.createElement("b",null,_e+1),N.createElement(ty,{id:X.id,player:X,small:!0}),N.createElement("strong",null,X.name),N.createElement("span",null,X.bankrupt?"已破產":Jt(oo(f,X.id)))))),N.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),N.createElement("button",{className:"primary",onClick:W},"再玩一場 ",N.createElement(Vc,{size:18}))))}cM.createRoot(document.getElementById("root")).render(N.createElement(JR,null));
