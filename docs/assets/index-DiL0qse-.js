(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function xM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Zd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function SM(){if(K_)return ft;K_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),x=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,g={};function y(P,ne,De){this.props=P,this.context=ne,this.refs=g,this.updater=De||A}y.prototype.isReactComponent={},y.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function z(){}z.prototype=y.prototype;function B(P,ne,De){this.props=P,this.context=ne,this.refs=g,this.updater=De||A}var U=B.prototype=new z;U.constructor=B,N(U,y.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function L(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(P,ne,De){var Ie=De.ref;return{$$typeof:a,type:P,key:ne,ref:Ie!==void 0?Ie:null,props:De}}function q(P,ne){return O(P.type,ne,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function Q(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(De){return ne[De]})}var me=/\/+/g;function de(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):ne.toString(36)}function ee(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,ne,De,Ie,ze){var se=typeof P;(se==="undefined"||se==="boolean")&&(P=null);var Te=!1;if(P===null)Te=!0;else switch(se){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(P.$$typeof){case a:case e:Te=!0;break;case v:return Te=P._init,F(Te(P._payload),ne,De,Ie,ze)}}if(Te)return ze=ze(P),Te=Ie===""?"."+de(P,0):Ie,I(ze)?(De="",Te!=null&&(De=Te.replace(me,"$&/")+"/"),F(ze,ne,De,"",function(Xe){return Xe})):ze!=null&&(G(ze)&&(ze=q(ze,De+(ze.key==null||P&&P.key===ze.key?"":(""+ze.key).replace(me,"$&/")+"/")+Te)),ne.push(ze)),1;Te=0;var Re=Ie===""?".":Ie+":";if(I(P))for(var Ce=0;Ce<P.length;Ce++)Ie=P[Ce],se=Re+de(Ie,Ce),Te+=F(Ie,ne,De,se,ze);else if(Ce=E(P),typeof Ce=="function")for(P=Ce.call(P),Ce=0;!(Ie=P.next()).done;)Ie=Ie.value,se=Re+de(Ie,Ce++),Te+=F(Ie,ne,De,se,ze);else if(se==="object"){if(typeof P.then=="function")return F(ee(P),ne,De,Ie,ze);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Te}function X(P,ne,De){if(P==null)return P;var Ie=[],ze=0;return F(P,Ie,"","",function(se){return ne.call(De,se,ze++)}),Ie}function le(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(De){(P._status===0||P._status===-1)&&(P._status=1,P._result=De)},function(De){(P._status===0||P._status===-1)&&(P._status=2,P._result=De)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var Me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ne={map:X,forEach:function(P,ne,De){X(P,function(){ne.apply(this,arguments)},De)},count:function(P){var ne=0;return X(P,function(){ne++}),ne},toArray:function(P){return X(P,function(ne){return ne})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ft.Activity=M,ft.Children=Ne,ft.Component=y,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=B,ft.StrictMode=r,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ft.__COMPILER_RUNTIME={__proto__:null,c:function(P){return H.H.useMemoCache(P)}},ft.cache=function(P){return function(){return P.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(P,ne,De){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ie=N({},P.props),ze=P.key;if(ne!=null)for(se in ne.key!==void 0&&(ze=""+ne.key),ne)!T.call(ne,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&ne.ref===void 0||(Ie[se]=ne[se]);var se=arguments.length-2;if(se===1)Ie.children=De;else if(1<se){for(var Te=Array(se),Re=0;Re<se;Re++)Te[Re]=arguments[Re+2];Ie.children=Te}return O(P.type,ze,Ie)},ft.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ft.createElement=function(P,ne,De){var Ie,ze={},se=null;if(ne!=null)for(Ie in ne.key!==void 0&&(se=""+ne.key),ne)T.call(ne,Ie)&&Ie!=="key"&&Ie!=="__self"&&Ie!=="__source"&&(ze[Ie]=ne[Ie]);var Te=arguments.length-2;if(Te===1)ze.children=De;else if(1<Te){for(var Re=Array(Te),Ce=0;Ce<Te;Ce++)Re[Ce]=arguments[Ce+2];ze.children=Re}if(P&&P.defaultProps)for(Ie in Te=P.defaultProps,Te)ze[Ie]===void 0&&(ze[Ie]=Te[Ie]);return O(P,se,ze)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(P){return{$$typeof:m,render:P}},ft.isValidElement=G,ft.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:le}},ft.memo=function(P,ne){return{$$typeof:h,type:P,compare:ne===void 0?null:ne}},ft.startTransition=function(P){var ne=H.T,De={};H.T=De;try{var Ie=P(),ze=H.S;ze!==null&&ze(De,Ie),typeof Ie=="object"&&Ie!==null&&typeof Ie.then=="function"&&Ie.then(L,Me)}catch(se){Me(se)}finally{ne!==null&&De.types!==null&&(ne.types=De.types),H.T=ne}},ft.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ft.use=function(P){return H.H.use(P)},ft.useActionState=function(P,ne,De){return H.H.useActionState(P,ne,De)},ft.useCallback=function(P,ne){return H.H.useCallback(P,ne)},ft.useContext=function(P){return H.H.useContext(P)},ft.useDebugValue=function(){},ft.useDeferredValue=function(P,ne){return H.H.useDeferredValue(P,ne)},ft.useEffect=function(P,ne){return H.H.useEffect(P,ne)},ft.useEffectEvent=function(P){return H.H.useEffectEvent(P)},ft.useId=function(){return H.H.useId()},ft.useImperativeHandle=function(P,ne,De){return H.H.useImperativeHandle(P,ne,De)},ft.useInsertionEffect=function(P,ne){return H.H.useInsertionEffect(P,ne)},ft.useLayoutEffect=function(P,ne){return H.H.useLayoutEffect(P,ne)},ft.useMemo=function(P,ne){return H.H.useMemo(P,ne)},ft.useOptimistic=function(P,ne){return H.H.useOptimistic(P,ne)},ft.useReducer=function(P,ne,De){return H.H.useReducer(P,ne,De)},ft.useRef=function(P){return H.H.useRef(P)},ft.useState=function(P){return H.H.useState(P)},ft.useSyncExternalStore=function(P,ne,De){return H.H.useSyncExternalStore(P,ne,De)},ft.useTransition=function(){return H.H.useTransition()},ft.version="19.2.8",ft}var Q_;function Hp(){return Q_||(Q_=1,Zd.exports=SM()),Zd.exports}var Ke=Hp();const b=xM(Ke);var Kd={exports:{}},oo={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function MM(){return J_||(J_=1,(function(a){function e(F,X){var le=F.length;F.push(X);e:for(;0<le;){var Me=le-1>>>1,Ne=F[Me];if(0<o(Ne,X))F[Me]=X,F[le]=Ne,le=Me;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var X=F[0],le=F.pop();if(le!==X){F[0]=le;e:for(var Me=0,Ne=F.length,P=Ne>>>1;Me<P;){var ne=2*(Me+1)-1,De=F[ne],Ie=ne+1,ze=F[Ie];if(0>o(De,le))Ie<Ne&&0>o(ze,De)?(F[Me]=ze,F[Ie]=le,Me=Ie):(F[Me]=De,F[ne]=le,Me=ne);else if(Ie<Ne&&0>o(ze,le))F[Me]=ze,F[Ie]=le,Me=Ie;else break e}}return X}function o(F,X){var le=F.sortIndex-X.sortIndex;return le!==0?le:F.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var p=[],h=[],v=1,M=null,x=3,E=!1,A=!1,N=!1,g=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=F)r(h),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(h)}}function I(F){if(N=!1,U(F),!A)if(n(p)!==null)A=!0,L||(L=!0,Q());else{var X=n(h);X!==null&&ee(I,X.startTime-F)}}var L=!1,H=-1,T=5,O=-1;function q(){return g?!0:!(a.unstable_now()-O<T)}function G(){if(g=!1,L){var F=a.unstable_now();O=F;var X=!0;try{e:{A=!1,N&&(N=!1,z(H),H=-1),E=!0;var le=x;try{t:{for(U(F),M=n(p);M!==null&&!(M.expirationTime>F&&q());){var Me=M.callback;if(typeof Me=="function"){M.callback=null,x=M.priorityLevel;var Ne=Me(M.expirationTime<=F);if(F=a.unstable_now(),typeof Ne=="function"){M.callback=Ne,U(F),X=!0;break t}M===n(p)&&r(p),U(F)}else r(p);M=n(p)}if(M!==null)X=!0;else{var P=n(h);P!==null&&ee(I,P.startTime-F),X=!1}}break e}finally{M=null,x=le,E=!1}X=void 0}}finally{X?Q():L=!1}}}var Q;if(typeof B=="function")Q=function(){B(G)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,de=me.port2;me.port1.onmessage=G,Q=function(){de.postMessage(null)}}else Q=function(){y(G,0)};function ee(F,X){H=y(function(){F(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(F){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var le=x;x=X;try{return F()}finally{x=le}},a.unstable_requestPaint=function(){g=!0},a.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var le=x;x=F;try{return X()}finally{x=le}},a.unstable_scheduleCallback=function(F,X,le){var Me=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Me+le:Me):le=Me,F){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=le+Ne,F={id:v++,callback:X,priorityLevel:F,startTime:le,expirationTime:Ne,sortIndex:-1},le>Me?(F.sortIndex=le,e(h,F),n(p)===null&&F===n(h)&&(N?(z(H),H=-1):N=!0,ee(I,le-Me))):(F.sortIndex=Ne,e(p,F),A||E||(A=!0,L||(L=!0,Q()))),F},a.unstable_shouldYield=q,a.unstable_wrapCallback=function(F){var X=x;return function(){var le=x;x=X;try{return F.apply(this,arguments)}finally{x=le}}}})(Jd)),Jd}var j_;function EM(){return j_||(j_=1,Qd.exports=MM()),Qd.exports}var jd={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function bM(){if($_)return Wn;$_=1;var a=Hp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:M==null?null:""+M,children:p,containerInfo:h,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,v)},Wn.flushSync=function(p){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=h,r.p=v,r.d.f()}},Wn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Wn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,M=m(v,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:x,fetchPriority:E}):v==="script"&&r.d.X(p,{crossOrigin:M,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Wn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,M=m(v,h.crossOrigin);r.d.L(p,v,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wn.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Wn.requestFormReset=function(p){r.d.r(p)},Wn.unstable_batchedUpdates=function(p,h){return p(h)},Wn.useFormState=function(p,h,v){return f.H.useFormState(p,h,v)},Wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wn.version="19.2.8",Wn}var ev;function TM(){if(ev)return jd.exports;ev=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jd.exports=bM(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function AM(){if(tv)return oo;tv=1;var a=EM(),e=Hp(),n=TM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===l)return p(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var S=!1,D=u.child;D;){if(D===s){S=!0,s=u,l=d;break}if(D===l){S=!0,l=u,s=d;break}D=D.sibling}if(!S){for(D=d.child;D;){if(D===s){S=!0,s=d,l=u;break}if(D===l){S=!0,l=d,s=u;break}D=D.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var M=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case y:return"Profiler";case g:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case B:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}var ee=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Me=[],Ne=-1;function P(t){return{current:t}}function ne(t){0>Ne||(t.current=Me[Ne],Me[Ne]=null,Ne--)}function De(t,i){Ne++,Me[Ne]=t.current,t.current=i}var Ie=P(null),ze=P(null),se=P(null),Te=P(null);function Re(t,i){switch(De(se,i),De(ze,t),De(Ie,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?v_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=v_(i),t=y_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Ie),De(Ie,t)}function Ce(){ne(Ie),ne(ze),ne(se)}function Xe(t){t.memoizedState!==null&&De(Te,t);var i=Ie.current,s=y_(i,t.type);i!==s&&(De(ze,t),De(Ie,s))}function je(t){ze.current===t&&(ne(Ie),ne(ze)),Te.current===t&&(ne(Te),ao._currentValue=le)}var It,ct;function _t(t){if(It===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+ct}var lt=!1;function ut(t,i){if(!t||lt)return"";lt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(xe){var pe=xe}Reflect.construct(t,[],we)}else{try{we.call()}catch(xe){pe=xe}t.call(we.prototype)}}else{try{throw Error()}catch(xe){pe=xe}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(xe){if(xe&&pe&&typeof xe.stack=="string")return[xe.stack,pe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],D=d[1];if(S&&D){var V=S.split(`
`),ce=D.split(`
`);for(u=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(l===V.length||u===ce.length)for(l=V.length-1,u=ce.length-1;1<=l&&0<=u&&V[l]!==ce[u];)u--;for(;1<=l&&0<=u;l--,u--)if(V[l]!==ce[u]){if(l!==1||u!==1)do if(l--,u--,0>u||V[l]!==ce[u]){var Ee=`
`+V[l].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=l&&0<=u);break}}}finally{lt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?_t(s):""}function Qt(t,i){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==i&&i!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return _t("Activity");default:return""}}function tt(t){try{var i="",s=null;do i+=Qt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ht=Object.prototype.hasOwnProperty,Jt=a.unstable_scheduleCallback,zt=a.unstable_cancelCallback,Bt=a.unstable_shouldYield,J=a.unstable_requestPaint,Ct=a.unstable_now,_e=a.unstable_getCurrentPriorityLevel,C=a.unstable_ImmediatePriority,_=a.unstable_UserBlockingPriority,k=a.unstable_NormalPriority,W=a.unstable_LowPriority,j=a.unstable_IdlePriority,ye=a.log,ve=a.unstable_setDisableYieldValue,ie=null,re=null;function Se(t){if(typeof ye=="function"&&ve(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(ie,t)}catch{}}var Le=Math.clz32?Math.clz32:We,Oe=Math.log,Ue=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Oe(t)/Ue|0)|0}var Ye=256,nt=262144,Y=4194304;function Pe(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function R(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~d,l!==0?u=Pe(l):(S&=D,S!==0?u=Pe(S):s||(s=D&~t,s!==0&&(u=Pe(s))))):(D=l&~d,D!==0?u=Pe(D):S!==0?u=Pe(S):s||(s=l&~t,s!==0&&(u=Pe(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Z(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function be(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Fe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tt(t,i,s,l,u,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,V=t.expirationTimes,ce=t.hiddenUpdates;for(s=S&~s;0<s;){var Ee=31-Le(s),we=1<<Ee;D[Ee]=0,V[Ee]=-1;var pe=ce[Ee];if(pe!==null)for(ce[Ee]=null,Ee=0;Ee<pe.length;Ee++){var xe=pe[Ee];xe!==null&&(xe.lane&=-536870913)}s&=~we}l!==0&&wt(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function wt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Le(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Vn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Le(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function oi(t,i){var s=i&-i;return s=(s&42)!==0?1:vl(s),(s&(t.suspendedLanes|i))!==0?0:s}function vl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xl(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:k_(t.type))}function rr(t,i){var s=X.p;try{return X.p=t,i()}finally{X.p=s}}var Yi=Math.random().toString(36).slice(2),_n="__reactFiber$"+Yi,Pn="__reactProps$"+Yi,jn="__reactContainer$"+Yi,ws="__reactEvents$"+Yi,Oo="__reactListeners$"+Yi,Po="__reactHandles$"+Yi,Ds="__reactResources$"+Yi,Ha="__reactMarker$"+Yi;function Ga(t){delete t[_n],delete t[Pn],delete t[ws],delete t[Oo],delete t[Po]}function oa(t){var i=t[_n];if(i)return i;for(var s=t.parentNode;s;){if(i=s[jn]||s[_n]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=A_(t);t!==null;){if(s=t[_n])return s;t=A_(t)}return i}t=s,s=t.parentNode}return null}function ca(t){if(t=t[_n]||t[jn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ns(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ka(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vn(t){t[Ha]=!0}var Io=new Set,w={};function $(t,i){he(t,i),he(t+"Capture",i)}function he(t,i){for(w[t]=i,t=0;t<i.length;t++)Io.add(i[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},Ge={};function qe(t){return ht.call(Ge,t)?!0:ht.call(fe,t)?!1:ue.test(t)?Ge[t]=!0:(fe[t]=!0,!1)}function He(t,i,s){if(qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Qe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ze(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Lt(t){if(!t._valueTracker){var i=pt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function on(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=pt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function Xt(t){return t.replace(Vt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(t,i,s,l,u,d,S,D){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?St(t,S,it(i)):s!=null?St(t,S,it(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+it(D):t.removeAttribute("name")}function Xn(t,i,s,l,u,d,S,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Lt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Lt(t)}function St(t,i,s){i==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Tn(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ci(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Pi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Lt(t)}function ui(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ii(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&cn(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&cn(t,d,i[d])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Us(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ua(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,or=null;function _m(t){var i=ca(t);if(i&&(t=i.stateNode)){var s=t[Pn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ve(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Xt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[Pn]||null;if(!u)throw Error(r(90));Ve(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&on(l)}break e;case"textarea":ci(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Tn(t,!!s.multiple,i,!1)}}}var Yu=!1;function vm(t,i,s){if(Yu)return t(i,s);Yu=!0;try{var l=t(i);return l}finally{if(Yu=!1,(lr!==null||or!==null)&&(Ec(),lr&&(i=lr,t=or,or=lr=null,_m(i),t)))for(i=0;i<t.length;i++)_m(t[i])}}function Sl(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Pn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(fa)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){qu=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{qu=!1}var Xa=null,Zu=null,zo=null;function ym(){if(zo)return zo;var t,i=Zu,s=i.length,l,u="value"in Xa?Xa.value:Xa.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===u[d-l];l++);return zo=u.slice(t,1<l?1-l:void 0)}function Bo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function xm(){return!1}function $n(t){function i(s,l,u,d,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Fo:xm,this.isPropagationStopped=xm,this}return M(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=$n(Ls),El=M({},Ls,{view:0,detail:0}),vx=$n(El),Ku,Qu,bl,Go=M({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bl&&(bl&&t.type==="mousemove"?(Ku=t.screenX-bl.screenX,Qu=t.screenY-bl.screenY):Qu=Ku=0,bl=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Sm=$n(Go),yx=M({},Go,{dataTransfer:0}),xx=$n(yx),Sx=M({},El,{relatedTarget:0}),Ju=$n(Sx),Mx=M({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=$n(Mx),bx=M({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=$n(bx),Ax=M({},Ls,{data:0}),Mm=$n(Ax),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wx[t])?!!i[t]:!1}function ju(){return Dx}var Nx=M({},El,{key:function(t){if(t.key){var i=Rx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=$n(Nx),Lx=M({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=$n(Lx),Ox=M({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Px=$n(Ox),Ix=M({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=$n(Ix),Bx=M({},Go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=$n(Bx),Hx=M({},Ls,{newState:0,oldState:0}),Gx=$n(Hx),kx=[9,13,27,32],$u=fa&&"CompositionEvent"in window,Tl=null;fa&&"documentMode"in document&&(Tl=document.documentMode);var Vx=fa&&"TextEvent"in window&&!Tl,bm=fa&&(!$u||Tl&&8<Tl&&11>=Tl),Tm=" ",Am=!1;function Rm(t,i){switch(t){case"keyup":return kx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function Xx(t,i){switch(t){case"compositionend":return Cm(i);case"keypress":return i.which!==32?null:(Am=!0,Tm);case"textInput":return t=i.data,t===Tm&&Am?null:t;default:return null}}function Wx(t,i){if(cr)return t==="compositionend"||!$u&&Rm(t,i)?(t=ym(),zo=Zu=Xa=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bm&&i.locale!=="ko"?null:i.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yx[t.type]:i==="textarea"}function Dm(t,i,s,l){lr?or?or.push(l):or=[l]:lr=l,i=Dc(i,"onChange"),0<i.length&&(s=new Ho("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Al=null,Rl=null;function qx(t){d_(t,0)}function ko(t){var i=Ns(t);if(on(i))return t}function Nm(t,i){if(t==="change")return i}var Um=!1;if(fa){var ef;if(fa){var tf="oninput"in document;if(!tf){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),tf=typeof Lm.oninput=="function"}ef=tf}else ef=!1;Um=ef&&(!document.documentMode||9<document.documentMode)}function Om(){Al&&(Al.detachEvent("onpropertychange",Pm),Rl=Al=null)}function Pm(t){if(t.propertyName==="value"&&ko(Rl)){var i=[];Dm(i,Rl,t,Wu(t)),vm(qx,i)}}function Zx(t,i,s){t==="focusin"?(Om(),Al=i,Rl=s,Al.attachEvent("onpropertychange",Pm)):t==="focusout"&&Om()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(Rl)}function Qx(t,i){if(t==="click")return ko(i)}function Jx(t,i){if(t==="input"||t==="change")return ko(i)}function jx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fi=typeof Object.is=="function"?Object.is:jx;function Cl(t,i){if(fi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!ht.call(i,u)||!fi(t[u],i[u]))return!1}return!0}function Im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,i){var s=Im(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Im(s)}}function Bm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=nn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=nn(t.document)}return i}function nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var $x=fa&&"documentMode"in document&&11>=document.documentMode,ur=null,af=null,wl=null,sf=!1;function Hm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;sf||ur==null||ur!==nn(l)||(l=ur,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wl&&Cl(wl,l)||(wl=l,l=Dc(af,"onSelect"),0<l.length&&(i=new Ho("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ur)))}function Os(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var fr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},rf={},Gm={};fa&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ps(t){if(rf[t])return rf[t];if(!fr[t])return t;var i=fr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Gm)return rf[t]=i[s];return t}var km=Ps("animationend"),Vm=Ps("animationiteration"),Xm=Ps("animationstart"),eS=Ps("transitionrun"),tS=Ps("transitionstart"),nS=Ps("transitioncancel"),Wm=Ps("transitionend"),Ym=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function zi(t,i){Ym.set(t,i),$(i,[t])}var Vo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],dr=0,of=0;function Xo(){for(var t=dr,i=of=dr=0;i<t;){var s=Ei[i];Ei[i++]=null;var l=Ei[i];Ei[i++]=null;var u=Ei[i];Ei[i++]=null;var d=Ei[i];if(Ei[i++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}d!==0&&qm(s,u,d)}}function Wo(t,i,s,l){Ei[dr++]=t,Ei[dr++]=i,Ei[dr++]=s,Ei[dr++]=l,of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function cf(t,i,s,l){return Wo(t,i,s,l),Yo(t)}function Is(t,i){return Wo(t,null,null,i),Yo(t)}function qm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Le(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function Yo(t){if(50<Jl)throw Jl=0,vd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var hr={};function iS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,i,s,l){return new iS(t,i,s,l)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,i){var s=t.alternate;return s===null?(s=di(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Zm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function qo(t,i,s,l,u,d){var S=0;if(l=t,typeof t=="function")uf(t)&&(S=1);else if(typeof t=="string")S=oM(t,s,Ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=di(31,s,i,u),t.elementType=O,t.lanes=d,t;case N:return zs(s.children,u,d,i);case g:S=8,u|=24;break;case y:return t=di(12,s,i,u|2),t.elementType=y,t.lanes=d,t;case I:return t=di(13,s,i,u),t.elementType=I,t.lanes=d,t;case L:return t=di(19,s,i,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:S=10;break e;case z:S=9;break e;case U:S=11;break e;case H:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=di(S,s,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function zs(t,i,s,l){return t=di(7,t,l,i),t.lanes=s,t}function ff(t,i,s){return t=di(6,t,null,i),t.lanes=s,t}function Km(t){var i=di(18,null,null,0);return i.stateNode=t,i}function df(t,i,s){return i=di(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Qm=new WeakMap;function bi(t,i){if(typeof t=="object"&&t!==null){var s=Qm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:tt(i)},Qm.set(t,i),i)}return{value:t,source:i,stack:tt(i)}}var pr=[],mr=0,Zo=null,Dl=0,Ti=[],Ai=0,Wa=null,Zi=1,Ki="";function ha(t,i){pr[mr++]=Dl,pr[mr++]=Zo,Zo=t,Dl=i}function Jm(t,i,s){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Wa,Wa=t;var l=Zi;t=Ki;var u=32-Le(l)-1;l&=~(1<<u),s+=1;var d=32-Le(i)+u;if(30<d){var S=u-u%5;d=(l&(1<<S)-1).toString(32),l>>=S,u-=S,Zi=1<<32-Le(i)+u|s<<u|l,Ki=d+t}else Zi=1<<d|s<<u|l,Ki=t}function hf(t){t.return!==null&&(ha(t,1),Jm(t,1,0))}function pf(t){for(;t===Zo;)Zo=pr[--mr],pr[mr]=null,Dl=pr[--mr],pr[mr]=null;for(;t===Wa;)Wa=Ti[--Ai],Ti[Ai]=null,Ki=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null}function jm(t,i){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Wa,Zi=i.id,Ki=i.overflow,Wa=t}var In=null,sn=null,Dt=!1,Ya=null,Ri=!1,mf=Error(r(519));function qa(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nl(bi(i,t)),mf}function $m(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[_n]=t,i[Pn]=l,s){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(s=0;s<$l.length;s++)Et($l[s],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),Xn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),Pi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||g_(i.textContent,s)?(l.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),l.onScroll!=null&&Et("scroll",i),l.onScrollEnd!=null&&Et("scrollend",i),l.onClick!=null&&(i.onclick=ua),i=!0):i=!1,i||qa(t,!0)}function e0(t){for(In=t.return;In;)switch(In.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:In=In.return}}function gr(t){if(t!==In)return!1;if(!Dt)return e0(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ld(t.type,t.memoizedProps)),s=!s),s&&sn&&qa(t),e0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=T_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=T_(t)}else i===27?(i=sn,ls(t.type)?(t=Bd,Bd=null,sn=t):sn=i):sn=In?wi(t.stateNode.nextSibling):null;return!0}function Bs(){sn=In=null,Dt=!1}function gf(){var t=Ya;return t!==null&&(ii===null?ii=t:ii.push.apply(ii,t),Ya=null),t}function Nl(t){Ya===null?Ya=[t]:Ya.push(t)}var _f=P(null),Fs=null,pa=null;function Za(t,i,s){De(_f,i._currentValue),i._currentValue=s}function ma(t){t._currentValue=_f.current,ne(_f)}function vf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function yf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var V=0;V<i.length;V++)if(D.context===i[V]){d.lanes|=s,D=d.alternate,D!==null&&(D.lanes|=s),vf(d.return,s,t),l||(S=null);break e}d=D.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),vf(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function _r(t,i,s,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var D=u.type;fi(u.pendingProps.value,S.value)||(t!==null?t.push(D):t=[D])}}else if(u===Te.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ao):t=[ao])}u=u.return}t!==null&&yf(i,t,s,l),i.flags|=262144}function Ko(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hs(t){Fs=t,pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return t0(Fs,t)}function Qo(t,i){return Fs===null&&Hs(t),t0(t,i)}function t0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},pa===null){if(t===null)throw Error(r(308));pa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else pa=pa.next=i;return s}var aS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},sS=a.unstable_scheduleCallback,rS=a.unstable_NormalPriority,yn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new aS,data:new Map,refCount:0}}function Ul(t){t.refCount--,t.refCount===0&&sS(rS,function(){t.controller.abort()})}var Ll=null,Sf=0,vr=0,yr=null;function lS(t,i){if(Ll===null){var s=Ll=[];Sf=0,vr=bd(),yr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sf++,i.then(n0,n0),i}function n0(){if(--Sf===0&&Ll!==null){yr!==null&&(yr.status="fulfilled");var t=Ll;Ll=null,vr=0,yr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function oS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var i0=F.S;F.S=function(t,i){Hg=Ct(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&lS(t,i),i0!==null&&i0(t,i)};var Gs=P(null);function Mf(){var t=Gs.current;return t!==null?t:an.pooledCache}function Jo(t,i){i===null?De(Gs,Gs.current):De(Gs,i.pool)}function a0(){var t=Mf();return t===null?null:{parent:yn._currentValue,pool:t}}var xr=Error(r(460)),Ef=Error(r(474)),jo=Error(r(542)),$o={then:function(){}};function s0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function r0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ua,ua),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,o0(t),t;default:if(typeof i.status=="string")i.then(ua,ua);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,o0(t),t}throw Vs=i,xr}}function ks(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vs=s,xr):s}}var Vs=null;function l0(){if(Vs===null)throw Error(r(459));var t=Vs;return Vs=null,t}function o0(t){if(t===xr||t===jo)throw Error(r(483))}var Sr=null,Ol=0;function ec(t){var i=Ol;return Ol+=1,Sr===null&&(Sr=[]),r0(Sr,t,i)}function Pl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function tc(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function c0(t){function i(ae,K){if(t){var oe=ae.deletions;oe===null?(ae.deletions=[K],ae.flags|=16):oe.push(K)}}function s(ae,K){if(!t)return null;for(;K!==null;)i(ae,K),K=K.sibling;return null}function l(ae){for(var K=new Map;ae!==null;)ae.key!==null?K.set(ae.key,ae):K.set(ae.index,ae),ae=ae.sibling;return K}function u(ae,K){return ae=da(ae,K),ae.index=0,ae.sibling=null,ae}function d(ae,K,oe){return ae.index=oe,t?(oe=ae.alternate,oe!==null?(oe=oe.index,oe<K?(ae.flags|=67108866,K):oe):(ae.flags|=67108866,K)):(ae.flags|=1048576,K)}function S(ae){return t&&ae.alternate===null&&(ae.flags|=67108866),ae}function D(ae,K,oe,Ae){return K===null||K.tag!==6?(K=ff(oe,ae.mode,Ae),K.return=ae,K):(K=u(K,oe),K.return=ae,K)}function V(ae,K,oe,Ae){var at=oe.type;return at===N?Ee(ae,K,oe.props.children,Ae,oe.key):K!==null&&(K.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ks(at)===K.type)?(K=u(K,oe.props),Pl(K,oe),K.return=ae,K):(K=qo(oe.type,oe.key,oe.props,null,ae.mode,Ae),Pl(K,oe),K.return=ae,K)}function ce(ae,K,oe,Ae){return K===null||K.tag!==4||K.stateNode.containerInfo!==oe.containerInfo||K.stateNode.implementation!==oe.implementation?(K=df(oe,ae.mode,Ae),K.return=ae,K):(K=u(K,oe.children||[]),K.return=ae,K)}function Ee(ae,K,oe,Ae,at){return K===null||K.tag!==7?(K=zs(oe,ae.mode,Ae,at),K.return=ae,K):(K=u(K,oe),K.return=ae,K)}function we(ae,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=ff(""+K,ae.mode,oe),K.return=ae,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return oe=qo(K.type,K.key,K.props,null,ae.mode,oe),Pl(oe,K),oe.return=ae,oe;case A:return K=df(K,ae.mode,oe),K.return=ae,K;case T:return K=ks(K),we(ae,K,oe)}if(ee(K)||Q(K))return K=zs(K,ae.mode,oe,null),K.return=ae,K;if(typeof K.then=="function")return we(ae,ec(K),oe);if(K.$$typeof===B)return we(ae,Qo(ae,K),oe);tc(ae,K)}return null}function pe(ae,K,oe,Ae){var at=K!==null?K.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return at!==null?null:D(ae,K,""+oe,Ae);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:return oe.key===at?V(ae,K,oe,Ae):null;case A:return oe.key===at?ce(ae,K,oe,Ae):null;case T:return oe=ks(oe),pe(ae,K,oe,Ae)}if(ee(oe)||Q(oe))return at!==null?null:Ee(ae,K,oe,Ae,null);if(typeof oe.then=="function")return pe(ae,K,ec(oe),Ae);if(oe.$$typeof===B)return pe(ae,K,Qo(ae,oe),Ae);tc(ae,oe)}return null}function xe(ae,K,oe,Ae,at){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ae=ae.get(oe)||null,D(K,ae,""+Ae,at);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case E:return ae=ae.get(Ae.key===null?oe:Ae.key)||null,V(K,ae,Ae,at);case A:return ae=ae.get(Ae.key===null?oe:Ae.key)||null,ce(K,ae,Ae,at);case T:return Ae=ks(Ae),xe(ae,K,oe,Ae,at)}if(ee(Ae)||Q(Ae))return ae=ae.get(oe)||null,Ee(K,ae,Ae,at,null);if(typeof Ae.then=="function")return xe(ae,K,oe,ec(Ae),at);if(Ae.$$typeof===B)return xe(ae,K,oe,Qo(K,Ae),at);tc(K,Ae)}return null}function Je(ae,K,oe,Ae){for(var at=null,Ot=null,$e=K,gt=K=0,Rt=null;$e!==null&&gt<oe.length;gt++){$e.index>gt?(Rt=$e,$e=null):Rt=$e.sibling;var Pt=pe(ae,$e,oe[gt],Ae);if(Pt===null){$e===null&&($e=Rt);break}t&&$e&&Pt.alternate===null&&i(ae,$e),K=d(Pt,K,gt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt,$e=Rt}if(gt===oe.length)return s(ae,$e),Dt&&ha(ae,gt),at;if($e===null){for(;gt<oe.length;gt++)$e=we(ae,oe[gt],Ae),$e!==null&&(K=d($e,K,gt),Ot===null?at=$e:Ot.sibling=$e,Ot=$e);return Dt&&ha(ae,gt),at}for($e=l($e);gt<oe.length;gt++)Rt=xe($e,ae,gt,oe[gt],Ae),Rt!==null&&(t&&Rt.alternate!==null&&$e.delete(Rt.key===null?gt:Rt.key),K=d(Rt,K,gt),Ot===null?at=Rt:Ot.sibling=Rt,Ot=Rt);return t&&$e.forEach(function(ds){return i(ae,ds)}),Dt&&ha(ae,gt),at}function rt(ae,K,oe,Ae){if(oe==null)throw Error(r(151));for(var at=null,Ot=null,$e=K,gt=K=0,Rt=null,Pt=oe.next();$e!==null&&!Pt.done;gt++,Pt=oe.next()){$e.index>gt?(Rt=$e,$e=null):Rt=$e.sibling;var ds=pe(ae,$e,Pt.value,Ae);if(ds===null){$e===null&&($e=Rt);break}t&&$e&&ds.alternate===null&&i(ae,$e),K=d(ds,K,gt),Ot===null?at=ds:Ot.sibling=ds,Ot=ds,$e=Rt}if(Pt.done)return s(ae,$e),Dt&&ha(ae,gt),at;if($e===null){for(;!Pt.done;gt++,Pt=oe.next())Pt=we(ae,Pt.value,Ae),Pt!==null&&(K=d(Pt,K,gt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return Dt&&ha(ae,gt),at}for($e=l($e);!Pt.done;gt++,Pt=oe.next())Pt=xe($e,ae,gt,Pt.value,Ae),Pt!==null&&(t&&Pt.alternate!==null&&$e.delete(Pt.key===null?gt:Pt.key),K=d(Pt,K,gt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return t&&$e.forEach(function(yM){return i(ae,yM)}),Dt&&ha(ae,gt),at}function en(ae,K,oe,Ae){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:e:{for(var at=oe.key;K!==null;){if(K.key===at){if(at=oe.type,at===N){if(K.tag===7){s(ae,K.sibling),Ae=u(K,oe.props.children),Ae.return=ae,ae=Ae;break e}}else if(K.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ks(at)===K.type){s(ae,K.sibling),Ae=u(K,oe.props),Pl(Ae,oe),Ae.return=ae,ae=Ae;break e}s(ae,K);break}else i(ae,K);K=K.sibling}oe.type===N?(Ae=zs(oe.props.children,ae.mode,Ae,oe.key),Ae.return=ae,ae=Ae):(Ae=qo(oe.type,oe.key,oe.props,null,ae.mode,Ae),Pl(Ae,oe),Ae.return=ae,ae=Ae)}return S(ae);case A:e:{for(at=oe.key;K!==null;){if(K.key===at)if(K.tag===4&&K.stateNode.containerInfo===oe.containerInfo&&K.stateNode.implementation===oe.implementation){s(ae,K.sibling),Ae=u(K,oe.children||[]),Ae.return=ae,ae=Ae;break e}else{s(ae,K);break}else i(ae,K);K=K.sibling}Ae=df(oe,ae.mode,Ae),Ae.return=ae,ae=Ae}return S(ae);case T:return oe=ks(oe),en(ae,K,oe,Ae)}if(ee(oe))return Je(ae,K,oe,Ae);if(Q(oe)){if(at=Q(oe),typeof at!="function")throw Error(r(150));return oe=at.call(oe),rt(ae,K,oe,Ae)}if(typeof oe.then=="function")return en(ae,K,ec(oe),Ae);if(oe.$$typeof===B)return en(ae,K,Qo(ae,oe),Ae);tc(ae,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,K!==null&&K.tag===6?(s(ae,K.sibling),Ae=u(K,oe),Ae.return=ae,ae=Ae):(s(ae,K),Ae=ff(oe,ae.mode,Ae),Ae.return=ae,ae=Ae),S(ae)):s(ae,K)}return function(ae,K,oe,Ae){try{Ol=0;var at=en(ae,K,oe,Ae);return Sr=null,at}catch($e){if($e===xr||$e===jo)throw $e;var Ot=di(29,$e,null,ae.mode);return Ot.lanes=Ae,Ot.return=ae,Ot}finally{}}}var Xs=c0(!0),u0=c0(!1),Ka=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Yo(t),qm(t,null,s),i}return Wo(t,l,i,s),Yo(t)}function Il(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Vn(t,s)}}function Af(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Rf=!1;function zl(){if(Rf){var t=yr;if(t!==null)throw t}}function Bl(t,i,s,l){Rf=!1;var u=t.updateQueue;Ka=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var V=D,ce=V.next;V.next=null,S===null?d=ce:S.next=ce,S=V;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,D=Ee.lastBaseUpdate,D!==S&&(D===null?Ee.firstBaseUpdate=ce:D.next=ce,Ee.lastBaseUpdate=V))}if(d!==null){var we=u.baseState;S=0,Ee=ce=V=null,D=d;do{var pe=D.lane&-536870913,xe=pe!==D.lane;if(xe?(At&pe)===pe:(l&pe)===pe){pe!==0&&pe===vr&&(Rf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Je=t,rt=D;pe=i;var en=s;switch(rt.tag){case 1:if(Je=rt.payload,typeof Je=="function"){we=Je.call(en,we,pe);break e}we=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=rt.payload,pe=typeof Je=="function"?Je.call(en,we,pe):Je,pe==null)break e;we=M({},we,pe);break e;case 2:Ka=!0}}pe=D.callback,pe!==null&&(t.flags|=64,xe&&(t.flags|=8192),xe=u.callbacks,xe===null?u.callbacks=[pe]:xe.push(pe))}else xe={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Ee===null?(ce=Ee=xe,V=we):Ee=Ee.next=xe,S|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,u.lastBaseUpdate=xe,u.shared.pending=null}}while(!0);Ee===null&&(V=we),u.baseState=V,u.firstBaseUpdate=ce,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),ns|=S,t.lanes=S,t.memoizedState=we}}function f0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function d0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)f0(s[t],i)}var Mr=P(null),nc=P(0);function h0(t,i){t=ba,De(nc,t),De(Mr,i),ba=t|i.baseLanes}function Cf(){De(nc,ba),De(Mr,Mr.current)}function wf(){ba=nc.current,ne(Mr),ne(nc)}var hi=P(null),Ci=null;function ja(t){var i=t.alternate;De(mn,mn.current&1),De(hi,t),Ci===null&&(i===null||Mr.current!==null||i.memoizedState!==null)&&(Ci=t)}function Df(t){De(mn,mn.current),De(hi,t),Ci===null&&(Ci=t)}function p0(t){t.tag===22?(De(mn,mn.current),De(hi,t),Ci===null&&(Ci=t)):$a()}function $a(){De(mn,mn.current),De(hi,hi.current)}function pi(t){ne(hi),Ci===t&&(Ci=null),ne(mn)}var mn=P(0);function ic(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Id(s)||zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ga=0,mt=null,jt=null,xn=null,ac=!1,Er=!1,Ws=!1,sc=0,Fl=0,br=null,cS=0;function hn(){throw Error(r(321))}function Nf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!fi(t[s],i[s]))return!1;return!0}function Uf(t,i,s,l,u,d){return ga=d,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?J0:qf,Ws=!1,d=s(l,u),Ws=!1,Er&&(d=g0(i,s,l,u)),m0(t),d}function m0(t){F.H=kl;var i=jt!==null&&jt.next!==null;if(ga=0,xn=jt=mt=null,ac=!1,Fl=0,br=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Ko(t)&&(Sn=!0))}function g0(t,i,s,l){mt=t;var u=0;do{if(Er&&(br=null),Fl=0,Er=!1,25<=u)throw Error(r(301));if(u+=1,xn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=j0,d=i(s,l)}while(Er);return d}function uS(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Hl(i):i,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(mt.flags|=1024),i}function Lf(){var t=sc!==0;return sc=0,t}function Of(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Pf(t){if(ac){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ac=!1}ga=0,xn=jt=mt=null,Er=!1,Fl=sc=0,br=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?mt.memoizedState=xn=t:xn=xn.next=t,xn}function gn(){if(jt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=xn===null?mt.memoizedState:xn.next;if(i!==null)xn=i,jt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},xn===null?mt.memoizedState=xn=t:xn=xn.next=t}return xn}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(t){var i=Fl;return Fl+=1,br===null&&(br=[]),t=r0(br,t,i),i=mt,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?J0:qf),t}function lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Hl(t);if(t.$$typeof===B)return zn(t)}throw Error(r(438,String(t)))}function If(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=rc(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=q;return i.index++,s}function _a(t,i){return typeof i=="function"?i(t):i}function oc(t){var i=gn();return zf(i,jt,t)}function zf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var D=S=null,V=null,ce=i,Ee=!1;do{var we=ce.lane&-536870913;if(we!==ce.lane?(At&we)===we:(ga&we)===we){var pe=ce.revertLane;if(pe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),we===vr&&(Ee=!0);else if((ga&pe)===pe){ce=ce.next,pe===vr&&(Ee=!0);continue}else we={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(D=V=we,S=d):V=V.next=we,mt.lanes|=pe,ns|=pe;we=ce.action,Ws&&s(d,we),d=ce.hasEagerState?ce.eagerState:s(d,we)}else pe={lane:we,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},V===null?(D=V=pe,S=d):V=V.next=pe,mt.lanes|=we,ns|=we;ce=ce.next}while(ce!==null&&ce!==i);if(V===null?S=d:V.next=D,!fi(d,t.memoizedState)&&(Sn=!0,Ee&&(s=yr,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=V,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Bf(t){var i=gn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);fi(d,i.memoizedState)||(Sn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function _0(t,i,s){var l=mt,u=gn(),d=Dt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!fi((jt||u).memoizedState,s);if(S&&(u.memoizedState=s,Sn=!0),u=u.queue,Gf(x0.bind(null,l,u,t),[t]),u.getSnapshot!==i||S||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,Tr(9,{destroy:void 0},y0.bind(null,l,u,s,i),null),an===null)throw Error(r(349));d||(ga&127)!==0||v0(l,i,s)}return s}function v0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=rc(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function y0(t,i,s,l){i.value=s,i.getSnapshot=l,S0(i)&&M0(t)}function x0(t,i,s){return s(function(){S0(i)&&M0(t)})}function S0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!fi(t,s)}catch{return!0}}function M0(t){var i=Is(t,2);i!==null&&ai(i,t,2)}function Ff(t){var i=Kn();if(typeof t=="function"){var s=t;if(t=s(),Ws){Se(!0);try{s()}finally{Se(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},i}function E0(t,i,s,l){return t.baseState=s,zf(t,jt,typeof l=="function"?l:_a)}function fS(t,i,s,l,u){if(fc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,b0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function b0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=F.T,S={};F.T=S;try{var D=s(u,l),V=F.S;V!==null&&V(S,D),T0(t,i,D)}catch(ce){Hf(t,i,ce)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(u,l),T0(t,i,d)}catch(ce){Hf(t,i,ce)}}function T0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){A0(t,i,l)},function(l){return Hf(t,i,l)}):A0(t,i,s)}function A0(t,i,s){i.status="fulfilled",i.value=s,R0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,b0(t,s)))}function Hf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,R0(i),i=i.next;while(i!==l)}t.action=null}function R0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function C0(t,i){return i}function w0(t,i){if(Dt){var s=an.formState;if(s!==null){e:{var l=mt;if(Dt){if(sn){t:{for(var u=sn,d=Ri;u.nodeType!==8;){if(!d){u=null;break t}if(u=wi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){sn=wi(u.nextSibling),l=u.data==="F!";break e}}qa(l)}l=!1}l&&(i=s[0])}}return s=Kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C0,lastRenderedState:i},s.queue=l,s=Z0.bind(null,mt,l),l.dispatch=s,l=Ff(!1),d=Yf.bind(null,mt,!1,l.queue),l=Kn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=fS.bind(null,mt,u,d,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function D0(t){var i=gn();return N0(i,jt,t)}function N0(t,i,s){if(i=zf(t,i,C0)[0],t=oc(_a)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Hl(i)}catch(S){throw S===xr?jo:S}else l=i;i=gn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,Tr(9,{destroy:void 0},dS.bind(null,u,s),null)),[l,d,t]}function dS(t,i){t.action=i}function U0(t){var i=gn(),s=jt;if(s!==null)return N0(i,s,t);gn(),i=i.memoizedState,s=gn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Tr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=rc(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function L0(){return gn().memoizedState}function cc(t,i,s,l){var u=Kn();mt.flags|=t,u.memoizedState=Tr(1|i,{destroy:void 0},s,l===void 0?null:l)}function uc(t,i,s,l){var u=gn();l=l===void 0?null:l;var d=u.memoizedState.inst;jt!==null&&l!==null&&Nf(l,jt.memoizedState.deps)?u.memoizedState=Tr(i,d,s,l):(mt.flags|=t,u.memoizedState=Tr(1|i,d,s,l))}function O0(t,i){cc(8390656,8,t,i)}function Gf(t,i){uc(2048,8,t,i)}function hS(t){mt.flags|=4;var i=mt.updateQueue;if(i===null)i=rc(),mt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function P0(t){var i=gn().memoizedState;return hS({ref:i,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function I0(t,i){return uc(4,2,t,i)}function z0(t,i){return uc(4,4,t,i)}function B0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function F0(t,i,s){s=s!=null?s.concat([t]):null,uc(4,4,B0.bind(null,i,t),s)}function kf(){}function H0(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Nf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function G0(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Nf(i,l[1]))return l[0];if(l=t(),Ws){Se(!0);try{t()}finally{Se(!1)}}return s.memoizedState=[l,i],l}function Vf(t,i,s){return s===void 0||(ga&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=kg(),mt.lanes|=t,ns|=t,s)}function k0(t,i,s,l){return fi(s,i)?s:Mr.current!==null?(t=Vf(t,s,l),fi(t,i)||(Sn=!0),t):(ga&42)===0||(ga&1073741824)!==0&&(At&261930)===0?(Sn=!0,t.memoizedState=s):(t=kg(),mt.lanes|=t,ns|=t,i)}function V0(t,i,s,l,u){var d=X.p;X.p=d!==0&&8>d?d:8;var S=F.T,D={};F.T=D,Yf(t,!1,i,s);try{var V=u(),ce=F.S;if(ce!==null&&ce(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Ee=oS(V,l);Gl(t,i,Ee,_i(t))}else Gl(t,i,l,_i(t))}catch(we){Gl(t,i,{then:function(){},status:"rejected",reason:we},_i())}finally{X.p=d,S!==null&&D.types!==null&&(S.types=D.types),F.T=S}}function pS(){}function Xf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=X0(t).queue;V0(t,u,i,le,s===null?pS:function(){return W0(t),s(l)})}function X0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:le},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function W0(t){var i=X0(t);i.next===null&&(i=t.alternate.memoizedState),Gl(t,i.next.queue,{},_i())}function Wf(){return zn(ao)}function Y0(){return gn().memoizedState}function q0(){return gn().memoizedState}function mS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=_i();t=Qa(s);var l=Ja(i,t,s);l!==null&&(ai(l,i,s),Il(l,i,s)),i={cache:xf()},t.payload=i;return}i=i.return}}function gS(t,i,s){var l=_i();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fc(t)?K0(i,s):(s=cf(t,i,s,l),s!==null&&(ai(s,t,l),Q0(s,i,l)))}function Z0(t,i,s){var l=_i();Gl(t,i,s,l)}function Gl(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(fc(t))K0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,D=d(S,s);if(u.hasEagerState=!0,u.eagerState=D,fi(D,S))return Wo(t,i,u,0),an===null&&Xo(),!1}catch{}finally{}if(s=cf(t,i,u,l),s!==null)return ai(s,t,l),Q0(s,i,l),!0}return!1}function Yf(t,i,s,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fc(t)){if(i)throw Error(r(479))}else i=cf(t,s,l,2),i!==null&&ai(i,t,2)}function fc(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function K0(t,i){Er=ac=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Q0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Vn(t,s)}}var kl={readContext:zn,use:lc,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};kl.useEffectEvent=hn;var J0={readContext:zn,use:lc,useCallback:function(t,i){return Kn().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:O0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,cc(4194308,4,B0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return cc(4194308,4,t,i)},useInsertionEffect:function(t,i){cc(4,2,t,i)},useMemo:function(t,i){var s=Kn();i=i===void 0?null:i;var l=t();if(Ws){Se(!0);try{t()}finally{Se(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Kn();if(s!==void 0){var u=s(i);if(Ws){Se(!0);try{s(i)}finally{Se(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=gS.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=Kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Ff(t);var i=t.queue,s=Z0.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:kf,useDeferredValue:function(t,i){var s=Kn();return Vf(s,t,i)},useTransition:function(){var t=Ff(!1);return t=V0.bind(null,mt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,u=Kn();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),an===null)throw Error(r(349));(At&127)!==0||v0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,O0(x0.bind(null,l,d,t),[t]),l.flags|=2048,Tr(9,{destroy:void 0},y0.bind(null,l,d,s,i),null),s},useId:function(){var t=Kn(),i=an.identifierPrefix;if(Dt){var s=Ki,l=Zi;s=(l&~(1<<32-Le(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=sc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=cS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Wf,useFormState:w0,useActionState:w0,useOptimistic:function(t){var i=Kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Yf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:If,useCacheRefresh:function(){return Kn().memoizedState=mS.bind(null,mt)},useEffectEvent:function(t){var i=Kn(),s={impl:t};return i.memoizedState=s,function(){if((Ft&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},qf={readContext:zn,use:lc,useCallback:H0,useContext:zn,useEffect:Gf,useImperativeHandle:F0,useInsertionEffect:I0,useLayoutEffect:z0,useMemo:G0,useReducer:oc,useRef:L0,useState:function(){return oc(_a)},useDebugValue:kf,useDeferredValue:function(t,i){var s=gn();return k0(s,jt.memoizedState,t,i)},useTransition:function(){var t=oc(_a)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Hl(t),i]},useSyncExternalStore:_0,useId:Y0,useHostTransitionStatus:Wf,useFormState:D0,useActionState:D0,useOptimistic:function(t,i){var s=gn();return E0(s,jt,t,i)},useMemoCache:If,useCacheRefresh:q0};qf.useEffectEvent=P0;var j0={readContext:zn,use:lc,useCallback:H0,useContext:zn,useEffect:Gf,useImperativeHandle:F0,useInsertionEffect:I0,useLayoutEffect:z0,useMemo:G0,useReducer:Bf,useRef:L0,useState:function(){return Bf(_a)},useDebugValue:kf,useDeferredValue:function(t,i){var s=gn();return jt===null?Vf(s,t,i):k0(s,jt.memoizedState,t,i)},useTransition:function(){var t=Bf(_a)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Hl(t),i]},useSyncExternalStore:_0,useId:Y0,useHostTransitionStatus:Wf,useFormState:U0,useActionState:U0,useOptimistic:function(t,i){var s=gn();return jt!==null?E0(s,jt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:If,useCacheRefresh:q0};j0.useEffectEvent=P0;function Zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:M({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=_i(),u=Qa(l);u.payload=i,s!=null&&(u.callback=s),i=Ja(t,u,l),i!==null&&(ai(i,t,l),Il(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=_i(),u=Qa(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ja(t,u,l),i!==null&&(ai(i,t,l),Il(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=_i(),l=Qa(s);l.tag=2,i!=null&&(l.callback=i),i=Ja(t,l,s),i!==null&&(ai(i,t,s),Il(i,t,s))}};function $0(t,i,s,l,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Cl(s,l)||!Cl(u,d):!0}function eg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Kf.enqueueReplaceState(i,i.state,null)}function Ys(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=M({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function tg(t){Vo(t)}function ng(t){console.error(t)}function ig(t){Vo(t)}function dc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ag(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qf(t,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){dc(t,i)},s}function sg(t){return t=Qa(t),t.tag=3,t}function rg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){ag(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){ag(i,s,l),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function _S(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&_r(i,s,u,!0),s=hi.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?bc():s.alternate===null&&pn===0&&(pn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===$o?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Sd(t,l,u)),!1;case 22:return s.flags|=65536,l===$o?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Sd(t,l,u)),!1}throw Error(r(435,s.tag))}return Sd(t,l,u),bc(),!1}if(Dt)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==mf&&(t=Error(r(422),{cause:l}),Nl(bi(t,s)))):(l!==mf&&(i=Error(r(423),{cause:l}),Nl(bi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=bi(l,s),u=Qf(t.stateNode,l,u),Af(t,u),pn!==4&&(pn=2)),!1;var d=Error(r(520),{cause:l});if(d=bi(d,s),Ql===null?Ql=[d]:Ql.push(d),pn!==4&&(pn=2),i===null)return!0;l=bi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Qf(s.stateNode,l,t),Af(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=sg(u),rg(u,t,s,l),Af(s,u),!1}s=s.return}while(s!==null);return!1}var Jf=Error(r(461)),Sn=!1;function Bn(t,i,s,l){i.child=t===null?u0(i,null,s,l):Xs(i,t.child,s,l)}function lg(t,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var S={};for(var D in l)D!=="ref"&&(S[D]=l[D])}else S=l;return Hs(i),l=Uf(t,i,s,S,d,u),D=Lf(),t!==null&&!Sn?(Of(t,i,u),va(t,i,u)):(Dt&&D&&hf(i),i.flags|=1,Bn(t,i,l,u),i.child)}function og(t,i,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!uf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,cg(t,i,d,l,u)):(t=qo(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!sd(t,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:Cl,s(S,l)&&t.ref===i.ref)return va(t,i,u)}return i.flags|=1,t=da(d,l),t.ref=i.ref,t.return=i,i.child=t}function cg(t,i,s,l,u){if(t!==null){var d=t.memoizedProps;if(Cl(d,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=d,sd(t,u))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,va(t,i,u)}return jf(t,i,s,l,u)}function ug(t,i,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return fg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(i,d!==null?d.cachePool:null),d!==null?h0(i,d):Cf(),p0(i);else return l=i.lanes=536870912,fg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Jo(i,d.cachePool),h0(i,d),$a(),i.memoizedState=null):(t!==null&&Jo(i,null),Cf(),$a());return Bn(t,i,u,s),i.child}function Vl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function fg(t,i,s,l,u){var d=Mf();return d=d===null?null:{parent:yn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Jo(i,null),Cf(),p0(i),t!==null&&_r(t,i,l,!0),i.childLanes=u,null}function hc(t,i){return i=mc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function dg(t,i,s){return Xs(i,t.child,null,s),t=hc(i,i.pendingProps),t.flags|=2,pi(i),i.memoizedState=null,t}function vS(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=hc(i,l),i.lanes=536870912,Vl(null,t);if(Df(i),(t=sn)?(t=b_(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Km(t),s.return=i,i.child=s,In=i,sn=null)):t=null,t===null)throw qa(i);return i.lanes=536870912,null}return hc(i,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Df(i),u)if(i.flags&256)i.flags&=-257,i=dg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(Sn||_r(t,i,s,!1),u=(s&t.childLanes)!==0,Sn||u){if(l=an,l!==null&&(S=oi(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Is(t,S),ai(l,t,S),Jf;bc(),i=dg(t,i,s)}else t=d.treeContext,sn=wi(S.nextSibling),In=i,Dt=!0,Ya=null,Ri=!1,t!==null&&jm(i,t),i=hc(i,l),i.flags|=4096;return i}return t=da(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function pc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function jf(t,i,s,l,u){return Hs(i),s=Uf(t,i,s,l,void 0,u),l=Lf(),t!==null&&!Sn?(Of(t,i,u),va(t,i,u)):(Dt&&l&&hf(i),i.flags|=1,Bn(t,i,s,u),i.child)}function hg(t,i,s,l,u,d){return Hs(i),i.updateQueue=null,s=g0(i,l,s,u),m0(t),l=Lf(),t!==null&&!Sn?(Of(t,i,d),va(t,i,d)):(Dt&&l&&hf(i),i.flags|=1,Bn(t,i,s,d),i.child)}function pg(t,i,s,l,u){if(Hs(i),i.stateNode===null){var d=hr,S=s.contextType;typeof S=="object"&&S!==null&&(d=zn(S)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},bf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?zn(S):hr,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Zf(i,s,S,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Kf.enqueueReplaceState(d,d.state,null),Bl(i,l,d,u),zl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var D=i.memoizedProps,V=Ys(s,D);d.props=V;var ce=d.context,Ee=s.contextType;S=hr,typeof Ee=="object"&&Ee!==null&&(S=zn(Ee));var we=s.getDerivedStateFromProps;Ee=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||ce!==S)&&eg(i,d,l,S),Ka=!1;var pe=i.memoizedState;d.state=pe,Bl(i,l,d,u),zl(),ce=i.memoizedState,D||pe!==ce||Ka?(typeof we=="function"&&(Zf(i,s,we,l),ce=i.memoizedState),(V=Ka||$0(i,s,V,l,pe,ce,S))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Tf(t,i),S=i.memoizedProps,Ee=Ys(s,S),d.props=Ee,we=i.pendingProps,pe=d.context,ce=s.contextType,V=hr,typeof ce=="object"&&ce!==null&&(V=zn(ce)),D=s.getDerivedStateFromProps,(ce=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==we||pe!==V)&&eg(i,d,l,V),Ka=!1,pe=i.memoizedState,d.state=pe,Bl(i,l,d,u),zl();var xe=i.memoizedState;S!==we||pe!==xe||Ka||t!==null&&t.dependencies!==null&&Ko(t.dependencies)?(typeof D=="function"&&(Zf(i,s,D,l),xe=i.memoizedState),(Ee=Ka||$0(i,s,Ee,l,pe,xe,V)||t!==null&&t.dependencies!==null&&Ko(t.dependencies))?(ce||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,xe,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,xe,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=xe),d.props=l,d.state=xe,d.context=V,l=Ee):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,pc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Xs(i,t.child,null,u),i.child=Xs(i,null,s,u)):Bn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=va(t,i,u),t}function mg(t,i,s,l){return Bs(),i.flags|=256,Bn(t,i,s,l),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:a0()}}function td(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=gi),t}function gg(t,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(u?ja(i):$a(),(t=sn)?(t=b_(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},s=Km(t),s.return=i,i.child=s,In=i,sn=null)):t=null,t===null)throw qa(i);return zd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,u?($a(),u=i.mode,D=mc({mode:"hidden",children:D},u),l=zs(l,u,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,S,s),i.memoizedState=$f,Vl(null,l)):(ja(i),nd(i,D))}var V=t.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(d)i.flags&256?(ja(i),i.flags&=-257,i=id(t,i,s)):i.memoizedState!==null?($a(),i.child=t.child,i.flags|=128,i=null):($a(),D=l.fallback,u=i.mode,l=mc({mode:"visible",children:l.children},u),D=zs(D,u,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,Xs(i,t.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,S,s),i.memoizedState=$f,i=Vl(null,l));else if(ja(i),zd(D)){if(S=D.nextSibling&&D.nextSibling.dataset,S)var ce=S.dgst;S=ce,l=Error(r(419)),l.stack="",l.digest=S,Nl({value:l,source:null,stack:null}),i=id(t,i,s)}else if(Sn||_r(t,i,s,!1),S=(s&t.childLanes)!==0,Sn||S){if(S=an,S!==null&&(l=oi(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Is(t,l),ai(S,t,l),Jf;Id(D)||bc(),i=id(t,i,s)}else Id(D)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,sn=wi(D.nextSibling),In=i,Dt=!0,Ya=null,Ri=!1,t!==null&&jm(i,t),i=nd(i,l.children),i.flags|=4096);return i}return u?($a(),D=l.fallback,u=i.mode,V=t.child,ce=V.sibling,l=da(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ce!==null?D=da(ce,D):(D=zs(D,u,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,Vl(null,l),l=i.child,D=t.child.memoizedState,D===null?D=ed(s):(u=D.cachePool,u!==null?(V=yn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=a0(),D={baseLanes:D.baseLanes|s,cachePool:u}),l.memoizedState=D,l.childLanes=td(t,S,s),i.memoizedState=$f,Vl(t.child,l)):(ja(i),s=t.child,t=s.sibling,s=da(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function nd(t,i){return i=mc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function mc(t,i){return t=di(22,t,null,i),t.lanes=0,t}function id(t,i,s){return Xs(i,t.child,null,s),t=nd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function _g(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vf(t.return,i,s)}function ad(t,i,s,l,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function vg(t,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var S=mn.current,D=(S&2)!==0;if(D?(S=S&1|2,i.flags|=128):S&=1,De(mn,S),Bn(t,i,l,s),l=Dt?Dl:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,s,i);else if(t.tag===19)_g(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&ic(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),ad(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&ic(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}ad(i,!0,s,null,d,l);break;case"together":ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ns|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(_r(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=da(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=da(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ko(t)))}function yS(t,i,s){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),Za(i,yn,t.memoizedState.cache),Bs();break;case 27:case 5:Xe(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Df(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?gg(t,i,s):(ja(i),t=va(t,i,s),t!==null?t.sibling:null);ja(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(_r(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return vg(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),De(mn,mn.current),l)break;return null;case 22:return i.lanes=0,ug(t,i,s,i.pendingProps);case 24:Za(i,yn,t.memoizedState.cache)}return va(t,i,s)}function yg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!sd(t,s)&&(i.flags&128)===0)return Sn=!1,yS(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Dt&&(i.flags&1048576)!==0&&Jm(i,Dl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=ks(i.elementType),i.type=t,typeof t=="function")uf(t)?(l=Ys(t,l),i.tag=1,i=pg(null,i,t,l,s)):(i.tag=0,i=jf(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===U){i.tag=11,i=lg(null,i,t,l,s);break e}else if(u===H){i.tag=14,i=og(null,i,t,l,s);break e}}throw i=de(t)||t,Error(r(306,i,""))}}return i;case 0:return jf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Ys(l,i.pendingProps),pg(t,i,l,u,s);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Tf(t,i),Bl(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Za(i,yn,l),l!==d.cache&&yf(i,[yn],s,!0),zl(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=mg(t,i,l,s);break e}else if(l!==u){u=bi(Error(r(424)),i),Nl(u),i=mg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(sn=wi(t.firstChild),In=i,Dt=!0,Ya=null,Ri=!0,s=u0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bs(),l===u){i=va(t,i,s);break e}Bn(t,i,l,s)}i=i.child}return i;case 26:return pc(t,i),t===null?(s=D_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,l=Nc(se.current).createElement(s),l[_n]=i,l[Pn]=t,Fn(l,s,t),vn(l),i.stateNode=l):i.memoizedState=D_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Xe(i),t===null&&Dt&&(l=i.stateNode=R_(i.type,i.pendingProps,se.current),In=i,Ri=!0,u=sn,ls(i.type)?(Bd=u,sn=wi(l.firstChild)):sn=u),Bn(t,i,i.pendingProps.children,s),pc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((u=l=sn)&&(l=KS(l,i.type,i.pendingProps,Ri),l!==null?(i.stateNode=l,In=i,sn=wi(l.firstChild),Ri=!1,u=!0):u=!1),u||qa(i)),Xe(i),u=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,Ld(u,d)?l=null:S!==null&&Ld(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=Uf(t,i,uS,null,null,s),ao._currentValue=u),pc(t,i),Bn(t,i,l,s),i.child;case 6:return t===null&&Dt&&((t=s=sn)&&(s=QS(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,In=i,sn=null,t=!0):t=!1),t||qa(i)),null;case 13:return gg(t,i,s);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xs(i,null,l,s):Bn(t,i,l,s),i.child;case 11:return lg(t,i,i.type,i.pendingProps,s);case 7:return Bn(t,i,i.pendingProps,s),i.child;case 8:return Bn(t,i,i.pendingProps.children,s),i.child;case 12:return Bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Za(i,i.type,l.value),Bn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Hs(i),u=zn(u),l=l(u),i.flags|=1,Bn(t,i,l,s),i.child;case 14:return og(t,i,i.type,i.pendingProps,s);case 15:return cg(t,i,i.type,i.pendingProps,s);case 19:return vg(t,i,s);case 31:return vS(t,i,s);case 22:return ug(t,i,s,i.pendingProps);case 24:return Hs(i),l=zn(yn),t===null?(u=Mf(),u===null&&(u=an,d=xf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},bf(i),Za(i,yn,u)):((t.lanes&s)!==0&&(Tf(t,i),Bl(i,null,null,s),zl()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Za(i,yn,l)):(l=d.cache,Za(i,yn,l),l!==u.cache&&yf(i,[yn],s,!0))),Bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ya(t){t.flags|=4}function rd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Yg())t.flags|=8192;else throw Vs=$o,Ef}else t.flags&=-16777217}function xg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P_(i))if(Yg())t.flags|=8192;else throw Vs=$o,Ef}function gc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?ge():536870912,t.lanes|=i,wr|=i)}function Xl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function xS(t,i,s){var l=i.pendingProps;switch(pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ma(yn),Ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(gr(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gf())),rn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(ya(i),d!==null?(rn(i),xg(i,d)):(rn(i),rd(i,u,null,l,s))):d?d!==t.memoizedState?(ya(i),rn(i),xg(i,d)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),rn(i),rd(i,u,t,l,s)),null;case 27:if(je(i),s=se.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return rn(i),null}t=Ie.current,gr(i)?$m(i):(t=R_(u,l,s),i.stateNode=t,ya(i))}return rn(i),null;case 5:if(je(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return rn(i),null}if(d=Ie.current,gr(i))$m(i);else{var S=Nc(se.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(u,{is:l.is}):S.createElement(u)}}d[_n]=i,d[Pn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;e:switch(Fn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return rn(i),rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=se.current,gr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=In,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[_n]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||g_(t.nodeValue,s)),t||qa(i,!0)}else t=Nc(t).createTextNode(l),t[_n]=i,i.stateNode=t}return rn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=gr(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else s=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(pi(i),i):(pi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return rn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=gr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),u=!1}else u=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(pi(i),i):(pi(i),null)}return pi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),gc(i,i.updateQueue),rn(i),null);case 4:return Ce(),t===null&&Cd(i.stateNode.containerInfo),rn(i),null;case 10:return ma(i.type),rn(i),null;case 19:if(ne(mn),l=i.memoizedState,l===null)return rn(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Xl(l,!1);else{if(pn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=ic(t),d!==null){for(i.flags|=128,Xl(l,!1),t=d.updateQueue,i.updateQueue=t,gc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Zm(s,t),s=s.sibling;return De(mn,mn.current&1|2),Dt&&ha(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Ct()>Sc&&(i.flags|=128,u=!0,Xl(l,!1),i.lanes=4194304)}else{if(!u)if(t=ic(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,gc(i,t),Xl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Dt)return rn(i),null}else 2*Ct()-l.renderingStartTime>Sc&&s!==536870912&&(i.flags|=128,u=!0,Xl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ct(),t.sibling=null,s=mn.current,De(mn,u?s&1|2:s&1),Dt&&ha(i,l.treeForkCount),t):(rn(i),null);case 22:case 23:return pi(i),wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),s=i.updateQueue,s!==null&&gc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ne(Gs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ma(yn),rn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function SS(t,i){switch(pf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ma(yn),Ce(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return je(i),null;case 31:if(i.memoizedState!==null){if(pi(i),i.alternate===null)throw Error(r(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(pi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ne(mn),null;case 4:return Ce(),null;case 10:return ma(i.type),null;case 22:case 23:return pi(i),wf(),t!==null&&ne(Gs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ma(yn),null;case 25:return null;default:return null}}function Sg(t,i){switch(pf(i),i.tag){case 3:ma(yn),Ce();break;case 26:case 27:case 5:je(i);break;case 4:Ce();break;case 31:i.memoizedState!==null&&pi(i);break;case 13:pi(i);break;case 19:ne(mn);break;case 10:ma(i.type);break;case 22:case 23:pi(i),wf(),t!==null&&ne(Gs);break;case 24:ma(yn)}}function Wl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==u)}}catch(D){qt(i,i.return,D)}}function es(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var S=l.inst,D=S.destroy;if(D!==void 0){S.destroy=void 0,u=i;var V=s,ce=D;try{ce()}catch(Ee){qt(u,V,Ee)}}}l=l.next}while(l!==d)}}catch(Ee){qt(i,i.return,Ee)}}function Mg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{d0(i,s)}catch(l){qt(t,t.return,l)}}}function Eg(t,i,s){s.props=Ys(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function Yl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){qt(t,i,u)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){qt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){qt(t,i,u)}else s.current=null}function bg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){qt(t,t.return,u)}}function ld(t,i,s){try{var l=t.stateNode;VS(l,t.type,s,i),l[Pn]=i}catch(u){qt(t,t.return,u)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ls(t.type)||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(l===27&&ls(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(cd(t,i,s),t=t.sibling;t!==null;)cd(t,i,s),t=t.sibling}function _c(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ls(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(_c(t,i,s),t=t.sibling;t!==null;)_c(t,i,s),t=t.sibling}function Ag(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Fn(i,l,s),i[_n]=t,i[Pn]=s}catch(d){qt(t,t.return,d)}}var xa=!1,Mn=!1,ud=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,Dn=null;function MS(t,i){if(t=t.containerInfo,Nd=Bc,t=Fm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,D=-1,V=-1,ce=0,Ee=0,we=t,pe=null;t:for(;;){for(var xe;we!==s||u!==0&&we.nodeType!==3||(D=S+u),we!==d||l!==0&&we.nodeType!==3||(V=S+l),we.nodeType===3&&(S+=we.nodeValue.length),(xe=we.firstChild)!==null;)pe=we,we=xe;for(;;){if(we===t)break t;if(pe===s&&++ce===u&&(D=S),pe===d&&++Ee===l&&(V=S),(xe=we.nextSibling)!==null)break;we=pe,pe=we.parentNode}we=xe}s=D===-1||V===-1?null:{start:D,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ud={focusedElem:t,selectionRange:s},Bc=!1,Dn=i;Dn!==null;)if(i=Dn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Dn=t;else for(;Dn!==null;){switch(i=Dn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Je=Ys(s.type,u);t=l.getSnapshotBeforeUpdate(Je,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){qt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Pd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Dn=t;break}Dn=i.return}}function Cg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(t,s),l&4&&Wl(5,s);break;case 1:if(Ma(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){qt(s,s.return,S)}else{var u=Ys(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){qt(s,s.return,S)}}l&64&&Mg(s),l&512&&Yl(s,s.return);break;case 3:if(Ma(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{d0(t,i)}catch(S){qt(s,s.return,S)}}break;case 27:i===null&&l&4&&Ag(s);case 26:case 5:Ma(t,s),i===null&&l&4&&bg(s),l&512&&Yl(s,s.return);break;case 12:Ma(t,s);break;case 31:Ma(t,s),l&4&&Ng(t,s);break;case 13:Ma(t,s),l&4&&Ug(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=NS.bind(null,s),JS(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){i=i!==null&&i.memoizedState!==null||Mn,u=xa;var d=Mn;xa=l,(Mn=i)&&!d?Ea(t,s,(s.subtreeFlags&8772)!==0):Ma(t,s),xa=u,Mn=d}break;case 30:break;default:Ma(t,s)}}function wg(t){var i=t.alternate;i!==null&&(t.alternate=null,wg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ga(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,ei=!1;function Sa(t,i,s){for(s=s.child;s!==null;)Dg(t,i,s),s=s.sibling}function Dg(t,i,s){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(ie,s)}catch{}switch(s.tag){case 26:Mn||Qi(s,i),Sa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Qi(s,i);var l=un,u=ei;ls(s.type)&&(un=s.stateNode,ei=!1),Sa(t,i,s),to(s.stateNode),un=l,ei=u;break;case 5:Mn||Qi(s,i);case 6:if(l=un,u=ei,un=null,Sa(t,i,s),un=l,ei=u,un!==null)if(ei)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(d){qt(s,i,d)}else try{un.removeChild(s.stateNode)}catch(d){qt(s,i,d)}break;case 18:un!==null&&(ei?(t=un,M_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),zr(t)):M_(un,s.stateNode));break;case 4:l=un,u=ei,un=s.stateNode.containerInfo,ei=!0,Sa(t,i,s),un=l,ei=u;break;case 0:case 11:case 14:case 15:es(2,s,i),Mn||es(4,s,i),Sa(t,i,s);break;case 1:Mn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Eg(s,i,l)),Sa(t,i,s);break;case 21:Sa(t,i,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,Sa(t,i,s),Mn=l;break;default:Sa(t,i,s)}}function Ng(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zr(t)}catch(s){qt(i,i.return,s)}}}function Ug(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zr(t)}catch(s){qt(i,i.return,s)}}function ES(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Rg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Rg),i;default:throw Error(r(435,t.tag))}}function vc(t,i){var s=ES(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=US.bind(null,t,l);l.then(u,u)}})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,S=i,D=S;e:for(;D!==null;){switch(D.tag){case 27:if(ls(D.type)){un=D.stateNode,ei=!1;break e}break;case 5:un=D.stateNode,ei=!1;break e;case 3:case 4:un=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(un===null)throw Error(r(160));Dg(d,S,u),un=null,ei=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Lg(i,t),i=i.sibling}var Bi=null;function Lg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(es(3,t,t.return),Wl(3,t),es(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Bi;if(ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ha]||d[_n]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Fn(d,l,s),d[_n]=t,vn(d),l=d;break e;case"link":var S=L_("link","href",u).get(l+(s.href||""));if(S){for(var D=0;D<S.length;D++)if(d=S[D],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(D,1);break t}}d=u.createElement(l),Fn(d,l,s),u.head.appendChild(d);break;case"meta":if(S=L_("meta","content",u).get(l+(s.content||""))){for(D=0;D<S.length;D++)if(d=S[D],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(D,1);break t}}d=u.createElement(l),Fn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[_n]=t,vn(d),l=d}t.stateNode=l}else O_(u,t.type,t.stateNode);else t.stateNode=U_(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?O_(u,t.type,t.stateNode):U_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ld(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),s!==null&&l&4&&ld(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(Mn||s===null||Qi(s,s.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(Je){qt(t,t.return,Je)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,ld(t,u,s!==null?s.memoizedProps:u)),l&1024&&(ud=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Je){qt(t,t.return,Je)}}break;case 3:if(Oc=null,u=Bi,Bi=Uc(i.containerInfo),ti(i,t),Bi=u,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{zr(i.containerInfo)}catch(Je){qt(t,t.return,Je)}ud&&(ud=!1,Og(t));break;case 4:l=Bi,Bi=Uc(t.stateNode.containerInfo),ti(i,t),ni(t),Bi=l;break;case 12:ti(i,t),ni(t);break;case 31:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vc(t,l)));break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xc=Ct()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vc(t,l)));break;case 22:u=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ce=xa,Ee=Mn;if(xa=ce||u,Mn=Ee||V,ti(i,t),Mn=Ee,xa=ce,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||V||xa||Mn||qs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{D=V.stateNode;var we=V.memoizedProps.style,pe=we!=null&&we.hasOwnProperty("display")?we.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Je){qt(V,V.return,Je)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Je){qt(V,V.return,Je)}}}else if(i.tag===18){if(s===null){V=i;try{var xe=V.stateNode;u?E_(xe,!0):E_(V.stateNode,!1)}catch(Je){qt(V,V.return,Je)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,vc(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vc(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Tg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=od(t);_c(t,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(ui(S,""),s.flags&=-33);var D=od(t);_c(t,D,S);break;case 3:case 4:var V=s.stateNode.containerInfo,ce=od(t);cd(t,ce,V);break;default:throw Error(r(161))}}catch(Ee){qt(t,t.return,Ee)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Og(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ma(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Cg(t,i.alternate,i),i=i.sibling}function qs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:es(4,i,i.return),qs(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Eg(i,i.return,s),qs(i);break;case 27:to(i.stateNode);case 26:case 5:Qi(i,i.return),qs(i);break;case 22:i.memoizedState===null&&qs(i);break;case 30:qs(i);break;default:qs(i)}t=t.sibling}}function Ea(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(u,d,s),Wl(4,d);break;case 1:if(Ea(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){qt(l,l.return,ce)}if(l=d,u=l.updateQueue,u!==null){var D=l.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)f0(V[u],D)}catch(ce){qt(l,l.return,ce)}}s&&S&64&&Mg(d),Yl(d,d.return);break;case 27:Ag(d);case 26:case 5:Ea(u,d,s),s&&l===null&&S&4&&bg(d),Yl(d,d.return);break;case 12:Ea(u,d,s);break;case 31:Ea(u,d,s),s&&S&4&&Ng(u,d);break;case 13:Ea(u,d,s),s&&S&4&&Ug(u,d);break;case 22:d.memoizedState===null&&Ea(u,d,s),Yl(d,d.return);break;case 30:break;default:Ea(u,d,s)}i=i.sibling}}function fd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ul(s))}function dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ul(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Pg(t,i,s,l),i=i.sibling}function Pg(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),u&2048&&Wl(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ul(t)));break;case 12:if(u&2048){Fi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,D=d.onPostCommit;typeof D=="function"&&D(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(i,i.return,V)}}else Fi(t,i,s,l);break;case 31:Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Fi(t,i,s,l):ql(t,i):d._visibility&2?Fi(t,i,s,l):(d._visibility|=2,Ar(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&fd(S,i);break;case 24:Fi(t,i,s,l),u&2048&&dd(i.alternate,i);break;default:Fi(t,i,s,l)}}function Ar(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,S=i,D=s,V=l,ce=S.flags;switch(S.tag){case 0:case 11:case 15:Ar(d,S,D,V,u),Wl(8,S);break;case 23:break;case 22:var Ee=S.stateNode;S.memoizedState!==null?Ee._visibility&2?Ar(d,S,D,V,u):ql(d,S):(Ee._visibility|=2,Ar(d,S,D,V,u)),u&&ce&2048&&fd(S.alternate,S);break;case 24:Ar(d,S,D,V,u),u&&ce&2048&&dd(S.alternate,S);break;default:Ar(d,S,D,V,u)}i=i.sibling}}function ql(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:ql(s,l),u&2048&&fd(l.alternate,l);break;case 24:ql(s,l),u&2048&&dd(l.alternate,l);break;default:ql(s,l)}i=i.sibling}}var Zl=8192;function Rr(t,i,s){if(t.subtreeFlags&Zl)for(t=t.child;t!==null;)Ig(t,i,s),t=t.sibling}function Ig(t,i,s){switch(t.tag){case 26:Rr(t,i,s),t.flags&Zl&&t.memoizedState!==null&&cM(s,Bi,t.memoizedState,t.memoizedProps);break;case 5:Rr(t,i,s);break;case 3:case 4:var l=Bi;Bi=Uc(t.stateNode.containerInfo),Rr(t,i,s),Bi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Zl,Zl=16777216,Rr(t,i,s),Zl=l):Rr(t,i,s));break;default:Rr(t,i,s)}}function zg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Kl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,Fg(l,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bg(t),t=t.sibling}function Bg(t){switch(t.tag){case 0:case 11:case 15:Kl(t),t.flags&2048&&es(9,t,t.return);break;case 3:Kl(t);break;case 12:Kl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,yc(t)):Kl(t);break;default:Kl(t)}}function yc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Dn=l,Fg(l,t)}zg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:es(8,i,i.return),yc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,yc(i));break;default:yc(i)}t=t.sibling}}function Fg(t,i){for(;Dn!==null;){var s=Dn;switch(s.tag){case 0:case 11:case 15:es(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ul(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Dn=l;else e:for(s=t;Dn!==null;){l=Dn;var u=l.sibling,d=l.return;if(wg(l),l===s){Dn=null;break e}if(u!==null){u.return=d,Dn=u;break e}Dn=d}}}var bS={getCacheForType:function(t){var i=zn(yn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return zn(yn).controller.signal}},TS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,an=null,Mt=null,At=0,Yt=0,mi=null,ts=!1,Cr=!1,hd=!1,ba=0,pn=0,ns=0,Zs=0,pd=0,gi=0,wr=0,Ql=null,ii=null,md=!1,xc=0,Hg=0,Sc=1/0,Mc=null,is=null,An=0,as=null,Dr=null,Ta=0,gd=0,_d=null,Gg=null,Jl=0,vd=null;function _i(){return(Ft&2)!==0&&At!==0?At&-At:F.T!==null?bd():xl()}function kg(){if(gi===0)if((At&536870912)===0||Dt){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function ai(t,i,s){(t===an&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Nr(t,0),ss(t,At,gi,!1)),Be(t,s),((Ft&2)===0||t!==an)&&(t===an&&((Ft&2)===0&&(Zs|=s),pn===4&&ss(t,At,gi,!1)),Ji(t))}function Vg(t,i,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Z(t,i),u=l?CS(t,i):xd(t,i,!0),d=l;do{if(u===0){Cr&&!l&&ss(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!AS(s)){u=xd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var D=t;u=Ql;var V=D.current.memoizedState.isDehydrated;if(V&&(Nr(D,S).flags|=256),S=xd(D,S,!1),S!==2){if(hd&&!V){D.errorRecoveryDisabledLanes|=d,Zs|=d,u=4;break e}d=ii,ii=u,d!==null&&(ii===null?ii=d:ii.push.apply(ii,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){Nr(t,0),ss(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ss(l,i,gi,!ts);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=xc+300-Ct(),10<u)){if(ss(l,i,gi,!ts),R(l,0,!0)!==0)break e;Ta=i,l.timeoutHandle=x_(Xg.bind(null,l,s,ii,Mc,md,i,gi,Zs,wr,ts,d,"Throttled",-0,0),u);break e}Xg(l,s,ii,Mc,md,i,gi,Zs,wr,ts,d,null,-0,0)}}break}while(!0);Ji(t)}function Xg(t,i,s,l,u,d,S,D,V,ce,Ee,we,pe,xe){if(t.timeoutHandle=-1,we=i.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},Ig(i,d,we);var Je=(d&62914560)===d?xc-Ct():(d&4194048)===d?Hg-Ct():0;if(Je=uM(we,Je),Je!==null){Ta=d,t.cancelPendingCommit=Je(jg.bind(null,t,i,d,s,l,u,S,D,V,Ee,we,null,pe,xe)),ss(t,d,S,!ce);return}}jg(t,i,d,s,l,u,S,D,V)}function AS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!fi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ss(t,i,s,l){i&=~pd,i&=~Zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-Le(u),S=1<<d;l[d]=-1,u&=~S}s!==0&&wt(t,s,i)}function Ec(){return(Ft&6)===0?(jl(0),!1):!0}function yd(){if(Mt!==null){if(Yt===0)var t=Mt.return;else t=Mt,pa=Fs=null,Pf(t),Sr=null,Ol=0,t=Mt;for(;t!==null;)Sg(t.alternate,t),t=t.return;Mt=null}}function Nr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,YS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ta=0,yd(),an=t,Mt=s=da(t.current,null),At=i,Yt=0,mi=null,ts=!1,Cr=Z(t,i),hd=!1,wr=gi=pd=Zs=ns=pn=0,ii=Ql=null,md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Le(l),d=1<<u;i|=t[u],l&=~d}return ba=i,Xo(),s}function Wg(t,i){mt=null,F.H=kl,i===xr||i===jo?(i=l0(),Yt=3):i===Ef?(i=l0(),Yt=4):Yt=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mi=i,Mt===null&&(pn=1,dc(t,bi(i,t.current)))}function Yg(){var t=hi.current;return t===null?!0:(At&4194048)===At?Ci===null:(At&62914560)===At||(At&536870912)!==0?t===Ci:!1}function qg(){var t=F.H;return F.H=kl,t===null?kl:t}function Zg(){var t=F.A;return F.A=bS,t}function bc(){pn=4,ts||(At&4194048)!==At&&hi.current!==null||(Cr=!0),(ns&134217727)===0&&(Zs&134217727)===0||an===null||ss(an,At,gi,!1)}function xd(t,i,s){var l=Ft;Ft|=2;var u=qg(),d=Zg();(an!==t||At!==i)&&(Mc=null,Nr(t,i)),i=!1;var S=pn;e:do try{if(Yt!==0&&Mt!==null){var D=Mt,V=mi;switch(Yt){case 8:yd(),S=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var ce=Yt;if(Yt=0,mi=null,Ur(t,D,V,ce),s&&Cr){S=0;break e}break;default:ce=Yt,Yt=0,mi=null,Ur(t,D,V,ce)}}RS(),S=pn;break}catch(Ee){Wg(t,Ee)}while(!0);return i&&t.shellSuspendCounter++,pa=Fs=null,Ft=l,F.H=u,F.A=d,Mt===null&&(an=null,At=0,Xo()),S}function RS(){for(;Mt!==null;)Kg(Mt)}function CS(t,i){var s=Ft;Ft|=2;var l=qg(),u=Zg();an!==t||At!==i?(Mc=null,Sc=Ct()+500,Nr(t,i)):Cr=Z(t,i);e:do try{if(Yt!==0&&Mt!==null){i=Mt;var d=mi;t:switch(Yt){case 1:Yt=0,mi=null,Ur(t,i,d,1);break;case 2:case 9:if(s0(d)){Yt=0,mi=null,Qg(i);break}i=function(){Yt!==2&&Yt!==9||an!==t||(Yt=7),Ji(t)},d.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:s0(d)?(Yt=0,mi=null,Qg(i)):(Yt=0,mi=null,Ur(t,i,d,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var D=Mt;if(S?P_(S):D.stateNode.complete){Yt=0,mi=null;var V=D.sibling;if(V!==null)Mt=V;else{var ce=D.return;ce!==null?(Mt=ce,Tc(ce)):Mt=null}break t}}Yt=0,mi=null,Ur(t,i,d,5);break;case 6:Yt=0,mi=null,Ur(t,i,d,6);break;case 8:yd(),pn=6;break e;default:throw Error(r(462))}}wS();break}catch(Ee){Wg(t,Ee)}while(!0);return pa=Fs=null,F.H=l,F.A=u,Ft=s,Mt!==null?0:(an=null,At=0,Xo(),pn)}function wS(){for(;Mt!==null&&!Bt();)Kg(Mt)}function Kg(t){var i=yg(t.alternate,t,ba);t.memoizedProps=t.pendingProps,i===null?Tc(t):Mt=i}function Qg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=hg(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=hg(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:Pf(i);default:Sg(s,i),i=Mt=Zm(i,ba),i=yg(s,i,ba)}t.memoizedProps=t.pendingProps,i===null?Tc(t):Mt=i}function Ur(t,i,s,l){pa=Fs=null,Pf(i),Sr=null,Ol=0;var u=i.return;try{if(_S(t,u,i,s,At)){pn=1,dc(t,bi(s,t.current)),Mt=null;return}}catch(d){if(u!==null)throw Mt=u,d;pn=1,dc(t,bi(s,t.current)),Mt=null;return}i.flags&32768?(Dt||l===1?t=!0:Cr||(At&536870912)!==0?t=!1:(ts=t=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jg(i,t)):Tc(i)}function Tc(t){var i=t;do{if((i.flags&32768)!==0){Jg(i,ts);return}t=i.return;var s=xS(i.alternate,i,ba);if(s!==null){Mt=s;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);pn===0&&(pn=5)}function Jg(t,i){do{var s=SS(t.alternate,t);if(s!==null){s.flags&=32767,Mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=s}while(t!==null);pn=6,Mt=null}function jg(t,i,s,l,u,d,S,D,V){t.cancelPendingCommit=null;do Ac();while(An!==0);if((Ft&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=of,Tt(t,s,d,S,D,V),t===an&&(Mt=an=null,At=0),Dr=i,as=t,Ta=s,gd=d,_d=u,Gg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,LS(k,function(){return i_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=X.p,X.p=2,S=Ft,Ft|=4;try{MS(t,i,s)}finally{Ft=S,X.p=u,F.T=l}}An=1,$g(),e_(),t_()}}function $g(){if(An===1){An=0;var t=as,i=Dr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=X.p;X.p=2;var u=Ft;Ft|=4;try{Lg(i,t);var d=Ud,S=Fm(t.containerInfo),D=d.focusedElem,V=d.selectionRange;if(S!==D&&D&&D.ownerDocument&&Bm(D.ownerDocument.documentElement,D)){if(V!==null&&nf(D)){var ce=V.start,Ee=V.end;if(Ee===void 0&&(Ee=ce),"selectionStart"in D)D.selectionStart=ce,D.selectionEnd=Math.min(Ee,D.value.length);else{var we=D.ownerDocument||document,pe=we&&we.defaultView||window;if(pe.getSelection){var xe=pe.getSelection(),Je=D.textContent.length,rt=Math.min(V.start,Je),en=V.end===void 0?rt:Math.min(V.end,Je);!xe.extend&&rt>en&&(S=en,en=rt,rt=S);var ae=zm(D,rt),K=zm(D,en);if(ae&&K&&(xe.rangeCount!==1||xe.anchorNode!==ae.node||xe.anchorOffset!==ae.offset||xe.focusNode!==K.node||xe.focusOffset!==K.offset)){var oe=we.createRange();oe.setStart(ae.node,ae.offset),xe.removeAllRanges(),rt>en?(xe.addRange(oe),xe.extend(K.node,K.offset)):(oe.setEnd(K.node,K.offset),xe.addRange(oe))}}}}for(we=[],xe=D;xe=xe.parentNode;)xe.nodeType===1&&we.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<we.length;D++){var Ae=we[D];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}Bc=!!Nd,Ud=Nd=null}finally{Ft=u,X.p=l,F.T=s}}t.current=i,An=2}}function e_(){if(An===2){An=0;var t=as,i=Dr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=X.p;X.p=2;var u=Ft;Ft|=4;try{Cg(t,i.alternate,i)}finally{Ft=u,X.p=l,F.T=s}}An=3}}function t_(){if(An===4||An===3){An=0,J();var t=as,i=Dr,s=Ta,l=Gg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,Dr=as=null,n_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(is=null),yl(s),i=i.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(ie,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,u=X.p,X.p=2,F.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var D=l[S];d(D.value,{componentStack:D.stack})}}finally{F.T=i,X.p=u}}(Ta&3)!==0&&Ac(),Ji(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===vd?Jl++:(Jl=0,vd=t):Jl=0,jl(0)}}function n_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Ul(i)))}function Ac(){return $g(),e_(),t_(),i_()}function i_(){if(An!==5)return!1;var t=as,i=gd;gd=0;var s=yl(Ta),l=F.T,u=X.p;try{X.p=32>s?32:s,F.T=null,s=_d,_d=null;var d=as,S=Ta;if(An=0,Dr=as=null,Ta=0,(Ft&6)!==0)throw Error(r(331));var D=Ft;if(Ft|=4,Bg(d.current),Pg(d,d.current,S,s),Ft=D,jl(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(ie,d)}catch{}return!0}finally{X.p=u,F.T=l,n_(t,i)}}function a_(t,i,s){i=bi(s,i),i=Qf(t.stateNode,i,2),t=Ja(t,i,2),t!==null&&(Be(t,2),Ji(t))}function qt(t,i,s){if(t.tag===3)a_(t,t,s);else for(;i!==null;){if(i.tag===3){a_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(is===null||!is.has(l))){t=bi(s,t),s=sg(2),l=Ja(i,s,2),l!==null&&(rg(s,l,i,t),Be(l,2),Ji(l));break}}i=i.return}}function Sd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new TS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(hd=!0,u.add(s),t=DS.bind(null,t,i,s),i.then(t,t))}function DS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,an===t&&(At&s)===s&&(pn===4||pn===3&&(At&62914560)===At&&300>Ct()-xc?(Ft&2)===0&&Nr(t,0):pd|=s,wr===At&&(wr=0)),Ji(t)}function s_(t,i){i===0&&(i=ge()),t=Is(t,i),t!==null&&(Be(t,i),Ji(t))}function NS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),s_(t,s)}function US(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),s_(t,s)}function LS(t,i){return Jt(t,i)}var Rc=null,Lr=null,Md=!1,Cc=!1,Ed=!1,rs=0;function Ji(t){t!==Lr&&t.next===null&&(Lr===null?Rc=Lr=t:Lr=Lr.next=t),Cc=!0,Md||(Md=!0,PS())}function jl(t,i){if(!Ed&&Cc){Ed=!0;do for(var s=!1,l=Rc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var S=l.suspendedLanes,D=l.pingedLanes;d=(1<<31-Le(42|t)+1)-1,d&=u&~(S&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,c_(l,d))}else d=At,d=R(l,l===an?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Z(l,d)||(s=!0,c_(l,d));l=l.next}while(s);Ed=!1}}function OS(){r_()}function r_(){Cc=Md=!1;var t=0;rs!==0&&WS()&&(t=rs);for(var i=Ct(),s=null,l=Rc;l!==null;){var u=l.next,d=l_(l,i);d===0?(l.next=null,s===null?Rc=u:s.next=u,u===null&&(Lr=s)):(s=l,(t!==0||(d&3)!==0)&&(Cc=!0)),l=u}An!==0&&An!==5||jl(t),rs!==0&&(rs=0)}function l_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Le(d),D=1<<S,V=u[S];V===-1?((D&s)===0||(D&l)!==0)&&(u[S]=be(D,i)):V<=i&&(t.expiredLanes|=D),d&=~D}if(i=an,s=At,s=R(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&zt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Z(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&zt(l),yl(s)){case 2:case 8:s=_;break;case 32:s=k;break;case 268435456:s=j;break;default:s=k}return l=o_.bind(null,t),s=Jt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&zt(l),t.callbackPriority=2,t.callbackNode=null,2}function o_(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ac()&&t.callbackNode!==s)return null;var l=At;return l=R(t,t===an?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Vg(t,l,i),l_(t,Ct()),t.callbackNode!=null&&t.callbackNode===s?o_.bind(null,t):null)}function c_(t,i){if(Ac())return null;Vg(t,i,!0)}function PS(){qS(function(){(Ft&6)!==0?Jt(C,OS):r_()})}function bd(){if(rs===0){var t=vr;t===0&&(t=Ye,Ye<<=1,(Ye&261888)===0&&(Ye=256)),rs=t}return rs}function u_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Us(""+t)}function f_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function IS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=u_((u[Pn]||null).action),S=l.submitter;S&&(i=(i=S[Pn]||null)?u_(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var D=new Ho("action","action",null,l,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rs!==0){var V=S?f_(u,S):new FormData(u);Xf(s,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(D.preventDefault(),V=S?f_(u,S):new FormData(u),Xf(s,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Td=0;Td<lf.length;Td++){var Ad=lf[Td],zS=Ad.toLowerCase(),BS=Ad[0].toUpperCase()+Ad.slice(1);zi(zS,"on"+BS)}zi(km,"onAnimationEnd"),zi(Vm,"onAnimationIteration"),zi(Xm,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(eS,"onTransitionRun"),zi(tS,"onTransitionStart"),zi(nS,"onTransitionCancel"),zi(Wm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function d_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var D=l[S],V=D.instance,ce=D.currentTarget;if(D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Vo(Ee)}u.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(D=l[S],V=D.instance,ce=D.currentTarget,D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=ce;try{d(u)}catch(Ee){Vo(Ee)}u.currentTarget=null,d=V}}}}function Et(t,i){var s=i[ws];s===void 0&&(s=i[ws]=new Set);var l=t+"__bubble";s.has(l)||(h_(i,t,2,!1),s.add(l))}function Rd(t,i,s){var l=0;i&&(l|=4),h_(s,t,l,i)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Cd(t){if(!t[wc]){t[wc]=!0,Io.forEach(function(s){s!=="selectionchange"&&(FS.has(s)||Rd(s,!1,t),Rd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wc]||(i[wc]=!0,Rd("selectionchange",!1,i))}}function h_(t,i,s,l){switch(k_(i)){case 2:var u=hM;break;case 8:u=pM;break;default:u=Vd}s=u.bind(null,i,s,t),u=void 0,!qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function wd(t,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var D=l.stateNode.containerInfo;if(D===u)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;D!==null;){if(S=oa(D),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue e}D=D.parentNode}}l=l.return}vm(function(){var ce=d,Ee=Wu(s),we=[];e:{var pe=Ym.get(t);if(pe!==void 0){var xe=Ho,Je=t;switch(t){case"keypress":if(Bo(s)===0)break e;case"keydown":case"keyup":xe=Ux;break;case"focusin":Je="focus",xe=Ju;break;case"focusout":Je="blur",xe=Ju;break;case"beforeblur":case"afterblur":xe=Ju;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=Px;break;case km:case Vm:case Xm:xe=Ex;break;case Wm:xe=zx;break;case"scroll":case"scrollend":xe=vx;break;case"wheel":xe=Fx;break;case"copy":case"cut":case"paste":xe=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=Em;break;case"toggle":case"beforetoggle":xe=Gx}var rt=(i&4)!==0,en=!rt&&(t==="scroll"||t==="scrollend"),ae=rt?pe!==null?pe+"Capture":null:pe;rt=[];for(var K=ce,oe;K!==null;){var Ae=K;if(oe=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||oe===null||ae===null||(Ae=Sl(K,ae),Ae!=null&&rt.push(eo(K,Ae,oe))),en)break;K=K.return}0<rt.length&&(pe=new xe(pe,Je,null,s,Ee),we.push({event:pe,listeners:rt}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",pe&&s!==Xu&&(Je=s.relatedTarget||s.fromElement)&&(oa(Je)||Je[jn]))break e;if((xe||pe)&&(pe=Ee.window===Ee?Ee:(pe=Ee.ownerDocument)?pe.defaultView||pe.parentWindow:window,xe?(Je=s.relatedTarget||s.toElement,xe=ce,Je=Je?oa(Je):null,Je!==null&&(en=c(Je),rt=Je.tag,Je!==en||rt!==5&&rt!==27&&rt!==6)&&(Je=null)):(xe=null,Je=ce),xe!==Je)){if(rt=Sm,Ae="onMouseLeave",ae="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Em,Ae="onPointerLeave",ae="onPointerEnter",K="pointer"),en=xe==null?pe:Ns(xe),oe=Je==null?pe:Ns(Je),pe=new rt(Ae,K+"leave",xe,s,Ee),pe.target=en,pe.relatedTarget=oe,Ae=null,oa(Ee)===ce&&(rt=new rt(ae,K+"enter",Je,s,Ee),rt.target=oe,rt.relatedTarget=en,Ae=rt),en=Ae,xe&&Je)t:{for(rt=HS,ae=xe,K=Je,oe=0,Ae=ae;Ae;Ae=rt(Ae))oe++;Ae=0;for(var at=K;at;at=rt(at))Ae++;for(;0<oe-Ae;)ae=rt(ae),oe--;for(;0<Ae-oe;)K=rt(K),Ae--;for(;oe--;){if(ae===K||K!==null&&ae===K.alternate){rt=ae;break t}ae=rt(ae),K=rt(K)}rt=null}else rt=null;xe!==null&&p_(we,pe,xe,rt,!1),Je!==null&&en!==null&&p_(we,en,Je,rt,!0)}}e:{if(pe=ce?Ns(ce):window,xe=pe.nodeName&&pe.nodeName.toLowerCase(),xe==="select"||xe==="input"&&pe.type==="file")var Ot=Nm;else if(wm(pe))if(Um)Ot=Jx;else{Ot=Kx;var $e=Zx}else xe=pe.nodeName,!xe||xe.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?ce&&kt(ce.elementType)&&(Ot=Nm):Ot=Qx;if(Ot&&(Ot=Ot(t,ce))){Dm(we,Ot,s,Ee);break e}$e&&$e(t,pe,ce),t==="focusout"&&ce&&pe.type==="number"&&ce.memoizedProps.value!=null&&St(pe,"number",pe.value)}switch($e=ce?Ns(ce):window,t){case"focusin":(wm($e)||$e.contentEditable==="true")&&(ur=$e,af=ce,wl=null);break;case"focusout":wl=af=ur=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Hm(we,s,Ee);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Hm(we,s,Ee)}var gt;if($u)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else cr?Rm(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(bm&&s.locale!=="ko"&&(cr||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&cr&&(gt=ym()):(Xa=Ee,Zu="value"in Xa?Xa.value:Xa.textContent,cr=!0)),$e=Dc(ce,Rt),0<$e.length&&(Rt=new Mm(Rt,t,null,s,Ee),we.push({event:Rt,listeners:$e}),gt?Rt.data=gt:(gt=Cm(s),gt!==null&&(Rt.data=gt)))),(gt=Vx?Xx(t,s):Wx(t,s))&&(Rt=Dc(ce,"onBeforeInput"),0<Rt.length&&($e=new Mm("onBeforeInput","beforeinput",null,s,Ee),we.push({event:$e,listeners:Rt}),$e.data=gt)),IS(we,t,ce,s,Ee)}d_(we,i)})}function eo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Dc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Sl(t,s),u!=null&&l.unshift(eo(t,u,d)),u=Sl(t,i),u!=null&&l.push(eo(t,u,d))),t.tag===3)return l;t=t.return}return[]}function HS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p_(t,i,s,l,u){for(var d=i._reactName,S=[];s!==null&&s!==l;){var D=s,V=D.alternate,ce=D.stateNode;if(D=D.tag,V!==null&&V===l)break;D!==5&&D!==26&&D!==27||ce===null||(V=ce,u?(ce=Sl(s,d),ce!=null&&S.unshift(eo(s,ce,V))):u||(ce=Sl(s,d),ce!=null&&S.push(eo(s,ce,V)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var GS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function m_(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(kS,"")}function g_(t,i){return i=m_(i),m_(t)===i}function $t(t,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ui(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ui(t,""+l);break;case"className":Qe(t,"class",l);break;case"tabIndex":Qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qe(t,s,l);break;case"style":Ii(t,l,d);break;case"data":if(i!=="object"){Qe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Us(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&$t(t,i,"name",u.name,u,null),$t(t,i,"formEncType",u.formEncType,u,null),$t(t,i,"formMethod",u.formMethod,u,null),$t(t,i,"formTarget",u.formTarget,u,null)):($t(t,i,"encType",u.encType,u,null),$t(t,i,"method",u.method,u,null),$t(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Us(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ua);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Us(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),He(t,"popover",l);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":He(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,He(t,s,l))}}function Dd(t,i,s,l,u,d){switch(s){case"style":Ii(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ui(t,l):(typeof l=="number"||typeof l=="bigint")&&ui(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[Pn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):He(t,s,l)}}}function Fn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(t,i,d,S,s,null)}}u&&$t(t,i,"srcSet",s.srcSet,s,null),l&&$t(t,i,"src",s.src,s,null);return;case"input":Et("invalid",t);var D=d=S=u=null,V=null,ce=null;for(l in s)if(s.hasOwnProperty(l)){var Ee=s[l];if(Ee!=null)switch(l){case"name":u=Ee;break;case"type":S=Ee;break;case"checked":V=Ee;break;case"defaultChecked":ce=Ee;break;case"value":d=Ee;break;case"defaultValue":D=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(r(137,i));break;default:$t(t,i,l,Ee,s,null)}}Xn(t,d,D,V,ce,S,u,!1);return;case"select":Et("invalid",t),l=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(D=s[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":S=D;break;case"multiple":l=D;default:$t(t,i,u,D,s,null)}i=d,s=S,t.multiple=!!l,i!=null?Tn(t,!!l,i,!1):s!=null&&Tn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),d=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(D=s[S],D!=null))switch(S){case"value":l=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:$t(t,i,S,D,s,null)}Pi(t,l,u,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(t,i,V,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<$l.length;l++)Et($l[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in s)if(s.hasOwnProperty(ce)&&(l=s[ce],l!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(t,i,ce,l,s,null)}return;default:if(kt(i)){for(Ee in s)s.hasOwnProperty(Ee)&&(l=s[Ee],l!==void 0&&Dd(t,i,Ee,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&$t(t,i,D,l,s,null))}function VS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,D=null,V=null,ce=null,Ee=null;for(xe in s){var we=s[xe];if(s.hasOwnProperty(xe)&&we!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":V=we;default:l.hasOwnProperty(xe)||$t(t,i,xe,null,l,we)}}for(var pe in l){var xe=l[pe];if(we=s[pe],l.hasOwnProperty(pe)&&(xe!=null||we!=null))switch(pe){case"type":d=xe;break;case"name":u=xe;break;case"checked":ce=xe;break;case"defaultChecked":Ee=xe;break;case"value":S=xe;break;case"defaultValue":D=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,i));break;default:xe!==we&&$t(t,i,pe,xe,l,we)}}Ve(t,S,D,V,ce,Ee,d,u);return;case"select":xe=S=D=pe=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":xe=V;default:l.hasOwnProperty(d)||$t(t,i,d,null,l,V)}for(u in l)if(d=l[u],V=s[u],l.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":pe=d;break;case"defaultValue":D=d;break;case"multiple":S=d;default:d!==V&&$t(t,i,u,d,l,V)}i=D,s=S,l=xe,pe!=null?Tn(t,!!s,pe,!1):!!l!=!!s&&(i!=null?Tn(t,!!s,i,!0):Tn(t,!!s,s?[]:"",!1));return;case"textarea":xe=pe=null;for(D in s)if(u=s[D],s.hasOwnProperty(D)&&u!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:$t(t,i,D,null,l,u)}for(S in l)if(u=l[S],d=s[S],l.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":pe=u;break;case"defaultValue":xe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&$t(t,i,S,u,l,d)}ci(t,pe,xe);return;case"option":for(var Je in s)if(pe=s[Je],s.hasOwnProperty(Je)&&pe!=null&&!l.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:$t(t,i,Je,null,l,pe)}for(V in l)if(pe=l[V],xe=s[V],l.hasOwnProperty(V)&&pe!==xe&&(pe!=null||xe!=null))switch(V){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:$t(t,i,V,pe,l,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)pe=s[rt],s.hasOwnProperty(rt)&&pe!=null&&!l.hasOwnProperty(rt)&&$t(t,i,rt,null,l,pe);for(ce in l)if(pe=l[ce],xe=s[ce],l.hasOwnProperty(ce)&&pe!==xe&&(pe!=null||xe!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,i));break;default:$t(t,i,ce,pe,l,xe)}return;default:if(kt(i)){for(var en in s)pe=s[en],s.hasOwnProperty(en)&&pe!==void 0&&!l.hasOwnProperty(en)&&Dd(t,i,en,void 0,l,pe);for(Ee in l)pe=l[Ee],xe=s[Ee],!l.hasOwnProperty(Ee)||pe===xe||pe===void 0&&xe===void 0||Dd(t,i,Ee,pe,l,xe);return}}for(var ae in s)pe=s[ae],s.hasOwnProperty(ae)&&pe!=null&&!l.hasOwnProperty(ae)&&$t(t,i,ae,null,l,pe);for(we in l)pe=l[we],xe=s[we],!l.hasOwnProperty(we)||pe===xe||pe==null&&xe==null||$t(t,i,we,pe,l,xe)}function __(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,S=u.initiatorType,D=u.duration;if(d&&D&&__(S)){for(S=0,D=u.responseEnd,l+=1;l<s.length;l++){var V=s[l],ce=V.startTime;if(ce>D)break;var Ee=V.transferSize,we=V.initiatorType;Ee&&__(we)&&(V=V.responseEnd,S+=Ee*(V<D?1:(D-ce)/(V-ce)))}if(--l,i+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nd=null,Ud=null;function Nc(t){return t.nodeType===9?t:t.ownerDocument}function v_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ld(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function WS(){var t=window.event;return t&&t.type==="popstate"?t===Od?!1:(Od=t,!0):(Od=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(t){return S_.resolve(null).then(t).catch(ZS)}:x_;function ZS(t){setTimeout(function(){throw t})}function ls(t){return t==="head"}function M_(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),zr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")to(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,to(s);for(var d=s.firstChild;d;){var S=d.nextSibling,D=d.nodeName;d[Ha]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&to(t.ownerDocument.body);s=u}while(s);zr(i)}function E_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Pd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Pd(s),Ga(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function KS(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ha])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function QS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=wi(t.nextSibling),t===null))return null;return t}function b_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=wi(t.nextSibling),t===null))return null;return t}function Id(t){return t.data==="$?"||t.data==="$~"}function zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function JS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function wi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Bd=null;function T_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return wi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function A_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function R_(t,i,s){switch(i=Nc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function to(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ga(t)}var Di=new Map,C_=new Set;function Uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Aa=X.d;X.d={f:jS,r:$S,D:eM,C:tM,L:nM,m:iM,X:sM,S:aM,M:rM};function jS(){var t=Aa.f(),i=Ec();return t||i}function $S(t){var i=ca(t);i!==null&&i.tag===5&&i.type==="form"?W0(i):Aa.r(t)}var Or=typeof document>"u"?null:document;function w_(t,i,s){var l=Or;if(l&&typeof i=="string"&&i){var u=Xt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),C_.has(u)||(C_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Fn(i,"link",t),vn(i),l.head.appendChild(i)))}}function eM(t){Aa.D(t),w_("dns-prefetch",t,null)}function tM(t,i){Aa.C(t,i),w_("preconnect",t,i)}function nM(t,i,s){Aa.L(t,i,s);var l=Or;if(l&&t&&i){var u='link[rel="preload"][as="'+Xt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Xt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Xt(s.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(i){case"style":d=Pr(t);break;case"script":d=Ir(t)}Di.has(d)||(t=M({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Di.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(no(d))||i==="script"&&l.querySelector(io(d))||(i=l.createElement("link"),Fn(i,"link",t),vn(i),l.head.appendChild(i)))}}function iM(t,i){Aa.m(t,i);var s=Or;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ir(t)}if(!Di.has(d)&&(t=M({rel:"modulepreload",href:t},i),Di.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(io(d)))return}l=s.createElement("link"),Fn(l,"link",t),vn(l),s.head.appendChild(l)}}}function aM(t,i,s){Aa.S(t,i,s);var l=Or;if(l&&t){var u=ka(l).hoistableStyles,d=Pr(t);i=i||"default";var S=u.get(d);if(!S){var D={loading:0,preload:null};if(S=l.querySelector(no(d)))D.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Di.get(d))&&Fd(t,s);var V=S=l.createElement("link");vn(V),Fn(V,"link",t),V._p=new Promise(function(ce,Ee){V.onload=ce,V.onerror=Ee}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Lc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:D},u.set(d,S)}}}function sM(t,i){Aa.X(t,i);var s=Or;if(s&&t){var l=ka(s).hoistableScripts,u=Ir(t),d=l.get(u);d||(d=s.querySelector(io(u)),d||(t=M({src:t,async:!0},i),(i=Di.get(u))&&Hd(t,i),d=s.createElement("script"),vn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function rM(t,i){Aa.M(t,i);var s=Or;if(s&&t){var l=ka(s).hoistableScripts,u=Ir(t),d=l.get(u);d||(d=s.querySelector(io(u)),d||(t=M({src:t,async:!0,type:"module"},i),(i=Di.get(u))&&Hd(t,i),d=s.createElement("script"),vn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function D_(t,i,s,l){var u=(u=se.current)?Uc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Pr(s.href),s=ka(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Pr(s.href);var d=ka(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(no(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(t,s),d||lM(u,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ir(s),s=ka(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Pr(t){return'href="'+Xt(t)+'"'}function no(t){return'link[rel="stylesheet"]['+t+"]"}function N_(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function lM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fn(i,"link",s),vn(i),t.head.appendChild(i))}function Ir(t){return'[src="'+Xt(t)+'"]'}function io(t){return"script[async]"+t}function U_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Xt(s.href)+'"]');if(l)return i.instance=l,vn(l),l;var u=M({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vn(l),Fn(l,"style",u),Lc(l,s.precedence,t),i.instance=l;case"stylesheet":u=Pr(s.href);var d=t.querySelector(no(u));if(d)return i.state.loading|=4,i.instance=d,vn(d),d;l=N_(s),(u=Di.get(u))&&Fd(l,u),d=(t.ownerDocument||t).createElement("link"),vn(d);var S=d;return S._p=new Promise(function(D,V){S.onload=D,S.onerror=V}),Fn(d,"link",l),i.state.loading|=4,Lc(d,s.precedence,t),i.instance=d;case"script":return d=Ir(s.src),(u=t.querySelector(io(d)))?(i.instance=u,vn(u),u):(l=s,(u=Di.get(d))&&(l=M({},s),Hd(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),vn(u),Fn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Lc(l,s.precedence,t));return i.instance}function Lc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,S=0;S<l.length;S++){var D=l[S];if(D.dataset.precedence===i)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Hd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Oc=null;function L_(t,i,s){if(Oc===null){var l=new Map,u=Oc=new Map;u.set(s,l)}else u=Oc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Ha]||d[_n]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var D=l.get(S);D?D.push(d):l.set(S,[d])}}return l}function O_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function oM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function P_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Pr(l.href),d=i.querySelector(no(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Pc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,vn(d);return}d=i.ownerDocument||i,l=N_(l),(u=Di.get(u))&&Fd(l,u),d=d.createElement("link"),vn(d);var S=d;S._p=new Promise(function(D,V){S.onload=D,S.onerror=V}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Pc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Gd=0;function uM(t,i){return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Gd===0&&(Gd=62500*XS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Gd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function zc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,i.forEach(fM,t),Ic=null,Pc.call(t))}function fM(t,i){if(!(i.state.loading&4)){var s=Ic.get(t);if(s)var l=s.get(null);else{s=new Map,Ic.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=i.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,u),s.set(S,u),this.count++,l=Pc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var ao={$$typeof:B,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function dM(t,i,s,l,u,d,S,D,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fe(0),this.hiddenUpdates=Fe(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function I_(t,i,s,l,u,d,S,D,V,ce,Ee,we){return t=new dM(t,i,s,S,V,ce,Ee,we,D),i=1,d===!0&&(i|=24),d=di(3,null,null,i),t.current=d,d.stateNode=t,i=xf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},bf(d),t}function z_(t){return t?(t=hr,t):hr}function B_(t,i,s,l,u,d){u=z_(u),l.context===null?l.context=u:l.pendingContext=u,l=Qa(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ja(t,l,i),s!==null&&(ai(s,t,i),Il(s,t,i))}function F_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function kd(t,i){F_(t,i),(t=t.alternate)&&F_(t,i)}function H_(t){if(t.tag===13||t.tag===31){var i=Is(t,67108864);i!==null&&ai(i,t,67108864),kd(t,67108864)}}function G_(t){if(t.tag===13||t.tag===31){var i=_i();i=vl(i);var s=Is(t,i);s!==null&&ai(s,t,i),kd(t,i)}}var Bc=!0;function hM(t,i,s,l){var u=F.T;F.T=null;var d=X.p;try{X.p=2,Vd(t,i,s,l)}finally{X.p=d,F.T=u}}function pM(t,i,s,l){var u=F.T;F.T=null;var d=X.p;try{X.p=8,Vd(t,i,s,l)}finally{X.p=d,F.T=u}}function Vd(t,i,s,l){if(Bc){var u=Xd(l);if(u===null)wd(t,i,l,Fc,s),V_(t,l);else if(gM(u,t,i,s,l))l.stopPropagation();else if(V_(t,l),i&4&&-1<mM.indexOf(t)){for(;u!==null;){var d=ca(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Pe(d.pendingLanes);if(S!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;S;){var V=1<<31-Le(S);D.entanglements[1]|=V,S&=~V}Ji(d),(Ft&6)===0&&(Sc=Ct()+500,jl(0))}}break;case 31:case 13:D=Is(d,2),D!==null&&ai(D,d,2),Ec(),kd(d,2)}if(d=Xd(l),d===null&&wd(t,i,l,Fc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else wd(t,i,l,null,s)}}function Xd(t){return t=Wu(t),Wd(t)}var Fc=null;function Wd(t){if(Fc=null,t=oa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=m(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Fc=t,null}function k_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case C:return 2;case _:return 8;case k:case W:return 32;case j:return 268435456;default:return 32}default:return 32}}var Yd=!1,os=null,cs=null,us=null,so=new Map,ro=new Map,fs=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V_(t,i){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function lo(t,i,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ca(i),i!==null&&H_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function gM(t,i,s,l,u){switch(i){case"focusin":return os=lo(os,t,i,s,l,u),!0;case"dragenter":return cs=lo(cs,t,i,s,l,u),!0;case"mouseover":return us=lo(us,t,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return so.set(d,lo(so.get(d)||null,t,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,ro.set(d,lo(ro.get(d)||null,t,i,s,l,u)),!0}return!1}function X_(t){var i=oa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,rr(t.priority,function(){G_(s)});return}}else if(i===31){if(i=m(s),i!==null){t.blockedOn=i,rr(t.priority,function(){G_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xu=l,s.target.dispatchEvent(l),Xu=null}else return i=ca(s),i!==null&&H_(i),t.blockedOn=s,!1;i.shift()}return!0}function W_(t,i,s){Hc(t)&&s.delete(i)}function _M(){Yd=!1,os!==null&&Hc(os)&&(os=null),cs!==null&&Hc(cs)&&(cs=null),us!==null&&Hc(us)&&(us=null),so.forEach(W_),ro.forEach(W_)}function Gc(t,i){t.blockedOn===i&&(t.blockedOn=null,Yd||(Yd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,_M)))}var kc=null;function Y_(t){kc!==t&&(kc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){kc===t&&(kc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Wd(l||s)===null)continue;break}var d=ca(s);d!==null&&(t.splice(i,3),i-=3,Xf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function zr(t){function i(V){return Gc(V,t)}os!==null&&Gc(os,t),cs!==null&&Gc(cs,t),us!==null&&Gc(us,t),so.forEach(i),ro.forEach(i);for(var s=0;s<fs.length;s++){var l=fs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<fs.length&&(s=fs[0],s.blockedOn===null);)X_(s),s.blockedOn===null&&fs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],S=u[Pn]||null;if(typeof d=="function")S||Y_(s);else if(S){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Pn]||null)D=S.formAction;else if(Wd(u)!==null)continue}else D=S.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),Y_(s)}}}function q_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function qd(t){this._internalRoot=t}Vc.prototype.render=qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=_i();B_(s,l,t,i,null,null)},Vc.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;B_(t.current,2,null,t,null,null),Ec(),i[jn]=null}};function Vc(t){this._internalRoot=t}Vc.prototype.unstable_scheduleHydration=function(t){if(t){var i=xl();t={blockedOn:null,target:t,priority:i};for(var s=0;s<fs.length&&i!==0&&i<fs[s].priority;s++);fs.splice(s,0,t),s===0&&X_(t)}};var Z_=e.version;if(Z_!=="19.2.8")throw Error(r(527,Z_,"19.2.8"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var vM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{ie=Xc.inject(vM),re=Xc}catch{}}return oo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=tg,d=ng,S=ig;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=I_(t,1,!1,null,null,s,l,null,u,d,S,q_),t[jn]=i.current,Cd(t),new qd(i)},oo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=tg,S=ng,D=ig,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=I_(t,1,!0,i,s??null,l,u,V,d,S,D,q_),i.context=z_(null),s=i.current,l=_i(),l=vl(l),u=Qa(l),u.callback=null,Ja(s,u,l),s=l,i.current.lanes=s,Be(i,s),Ji(i),t[jn]=i.current,Cd(t),new Vc(i)},oo.version="19.2.8",oo}var nv;function RM(){if(nv)return Kd.exports;nv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Kd.exports=AM(),Kd.exports}var CM=RM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gy=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Ke.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...m},p)=>Ke.createElement("svg",{ref:p,...DM,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:gy("lucide",o),...m},[...f.map(([h,v])=>Ke.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(a,e)=>{const n=Ke.forwardRef(({className:r,...o},c)=>Ke.createElement(NM,{ref:c,iconNode:e,className:gy(`lucide-${wM(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=ln("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ln("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ln("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ln("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=ln("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=ln("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ln("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ln("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=ln("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=ln("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=ln("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=ln("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=ln("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=ln("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=ln("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=ln("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=ln("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=ln("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=ln("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ln("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=ln("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=ln("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=ln("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=ln("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=ln("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="185",rl={ROTATE:0,DOLLY:1,PAN:2},il={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZM=0,lv=1,KM=2,Mo=1,QM=2,xo=3,Es=0,li=1,ta=2,Pa=0,ll=1,ov=2,cv=3,uv=4,JM=5,$s=100,jM=101,$M=102,eE=103,tE=104,nE=200,iE=201,aE=202,sE=203,Ih=204,zh=205,rE=206,lE=207,oE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,Bh=0,Fh=1,Hh=2,fl=3,Gh=4,kh=5,Vh=6,Xh=7,yy=0,mE=1,gE=2,aa=0,xy=1,Sy=2,My=3,kp=4,Ey=5,by=6,Ty=7,Ay=300,ar=301,dl=302,$d=303,eh=304,Bu=306,Wh=1e3,Oa=1001,Yh=1002,kn=1003,_E=1004,Yc=1005,Un=1006,th=1007,tr=1008,xi=1009,Ry=1010,Cy=1011,Ro=1012,Vp=1013,ra=1014,na=1015,Ba=1016,Xp=1017,Wp=1018,Co=1020,wy=35902,Dy=35899,Ny=1021,Uy=1022,Xi=1023,Fa=1026,nr=1027,Ly=1028,Yp=1029,sr=1030,qp=1031,Zp=1033,xu=33776,Su=33777,Mu=33778,Eu=33779,qh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,jh=37492,$h=37496,ep=37488,tp=37489,Ru=37490,np=37491,ip=37808,ap=37809,sp=37810,rp=37811,lp=37812,op=37813,cp=37814,up=37815,fp=37816,dp=37817,hp=37818,pp=37819,mp=37820,gp=37821,_p=36492,vp=36494,yp=36495,xp=36283,Sp=36284,Cu=36285,Mp=36286,vE=3200,Ep=0,yE=1,xs="",ri="srgb",wu="srgb-linear",Du="linear",Zt="srgb",Br=7680,fv=519,xE=512,SE=513,ME=514,Kp=515,EE=516,bE=517,Qp=518,TE=519,bp=35044,dv="300 es",ia=2e3,wo=2001;function AE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Nu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function RE(){const a=Nu("canvas");return a.style.display="block",a}const hv={};function Uu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Oy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ot(...a){a=Oy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Nt(...a){a=Oy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ol(...a){const e=a.join(" ");e in hv||(hv[e]=!0,ot(...a))}function CE(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const wE={[Bh]:Fh,[Hh]:Vh,[Gh]:Xh,[fl]:kh,[Fh]:Bh,[Vh]:Hh,[Xh]:Gh,[kh]:fl};class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pv=1234567;const Eo=Math.PI/180,Do=180/Math.PI;function Ia(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function xt(a,e,n){return Math.max(e,Math.min(n,a))}function Jp(a,e){return(a%e+e)%e}function DE(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function NE(a,e,n){return a!==e?(n-a)/(e-a):0}function bo(a,e,n){return(1-n)*a+n*e}function UE(a,e,n,r){return bo(a,e,1-Math.exp(-n*r))}function LE(a,e=1){return e-Math.abs(Jp(a,e*2)-e)}function OE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function PE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function IE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function zE(a,e){return a+Math.random()*(e-a)}function BE(a){return a*(.5-Math.random())}function FE(a){a!==void 0&&(pv=a);let e=pv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HE(a){return a*Eo}function GE(a){return a*Do}function kE(a){return(a&a-1)===0&&a!==0}function VE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function XE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function WE(a,e,n,r,o){const c=Math.cos,f=Math.sin,m=c(n/2),p=f(n/2),h=c((e+r)/2),v=f((e+r)/2),M=c((e-r)/2),x=f((e-r)/2),E=c((r-e)/2),A=f((r-e)/2);switch(o){case"XYX":a.set(m*v,p*M,p*x,m*h);break;case"YZY":a.set(p*x,m*v,p*M,m*h);break;case"ZXZ":a.set(p*M,p*x,m*v,m*h);break;case"XZX":a.set(m*v,p*A,p*E,m*h);break;case"YXY":a.set(p*E,m*v,p*A,m*h);break;case"ZYZ":a.set(p*A,p*E,m*v,m*h);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tp={DEG2RAD:Eo,RAD2DEG:Do,generateUUID:Ia,clamp:xt,euclideanModulo:Jp,mapLinear:DE,inverseLerp:NE,lerp:bo,damp:UE,pingpong:LE,smoothstep:OE,smootherstep:PE,randInt:IE,randFloat:zE,randFloatSpread:BE,seededRandom:FE,degToRad:HE,radToDeg:GE,isPowerOfTwo:kE,ceilPowerOfTwo:VE,floorPowerOfTwo:XE,setQuaternionFromProperEuler:WE,normalize:Kt,denormalize:Vi},dm=class dm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dm.prototype.isVector2=!0;let st=dm;class bs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,m){let p=r[o+0],h=r[o+1],v=r[o+2],M=r[o+3],x=c[f+0],E=c[f+1],A=c[f+2],N=c[f+3];if(M!==N||p!==x||h!==E||v!==A){let g=p*x+h*E+v*A+M*N;g<0&&(x=-x,E=-E,A=-A,N=-N,g=-g);let y=1-m;if(g<.9995){const z=Math.acos(g),B=Math.sin(z);y=Math.sin(y*z)/B,m=Math.sin(m*z)/B,p=p*y+x*m,h=h*y+E*m,v=v*y+A*m,M=M*y+N*m}else{p=p*y+x*m,h=h*y+E*m,v=v*y+A*m,M=M*y+N*m;const z=1/Math.sqrt(p*p+h*h+v*v+M*M);p*=z,h*=z,v*=z,M*=z}}e[n]=p,e[n+1]=h,e[n+2]=v,e[n+3]=M}static multiplyQuaternionsFlat(e,n,r,o,c,f){const m=r[o],p=r[o+1],h=r[o+2],v=r[o+3],M=c[f],x=c[f+1],E=c[f+2],A=c[f+3];return e[n]=m*A+v*M+p*E-h*x,e[n+1]=p*A+v*x+h*M-m*E,e[n+2]=h*A+v*E+m*x-p*M,e[n+3]=v*A-m*M-p*x-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,m=Math.cos,p=Math.sin,h=m(r/2),v=m(o/2),M=m(c/2),x=p(r/2),E=p(o/2),A=p(c/2);switch(f){case"XYZ":this._x=x*v*M+h*E*A,this._y=h*E*M-x*v*A,this._z=h*v*A+x*E*M,this._w=h*v*M-x*E*A;break;case"YXZ":this._x=x*v*M+h*E*A,this._y=h*E*M-x*v*A,this._z=h*v*A-x*E*M,this._w=h*v*M+x*E*A;break;case"ZXY":this._x=x*v*M-h*E*A,this._y=h*E*M+x*v*A,this._z=h*v*A+x*E*M,this._w=h*v*M-x*E*A;break;case"ZYX":this._x=x*v*M-h*E*A,this._y=h*E*M+x*v*A,this._z=h*v*A-x*E*M,this._w=h*v*M+x*E*A;break;case"YZX":this._x=x*v*M+h*E*A,this._y=h*E*M+x*v*A,this._z=h*v*A-x*E*M,this._w=h*v*M-x*E*A;break;case"XZY":this._x=x*v*M-h*E*A,this._y=h*E*M-x*v*A,this._z=h*v*A+x*E*M,this._w=h*v*M+x*E*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],m=n[5],p=n[9],h=n[2],v=n[6],M=n[10],x=r+m+M;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-h)*E,this._z=(f-o)*E}else if(r>m&&r>M){const E=2*Math.sqrt(1+r-m-M);this._w=(v-p)/E,this._x=.25*E,this._y=(o+f)/E,this._z=(c+h)/E}else if(m>M){const E=2*Math.sqrt(1+m-r-M);this._w=(c-h)/E,this._x=(o+f)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+M-r-m);this._w=(f-o)/E,this._x=(c+h)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,m=n._x,p=n._y,h=n._z,v=n._w;return this._x=r*v+f*m+o*h-c*p,this._y=o*v+f*p+c*m-r*h,this._z=c*v+f*h+r*p-o*m,this._w=f*v-r*m-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(r=-r,o=-o,c=-c,f=-f,m=-m);let p=1-n;if(m<.9995){const h=Math.acos(m),v=Math.sin(h);p=Math.sin(p*h)/v,n=Math.sin(n*h)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hm=class hm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,m=e.z,p=e.w,h=2*(f*o-m*r),v=2*(m*n-c*o),M=2*(c*r-f*n);return this.x=n+p*h+f*M-m*v,this.y=r+p*v+m*h-c*M,this.z=o+p*M+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,m=n.y,p=n.z;return this.x=o*p-c*m,this.y=c*f-r*p,this.z=r*m-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hm.prototype.isVector3=!0;let te=hm;const nh=new te,mv=new bs,pm=class pm{constructor(e,n,r,o,c,f,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h)}set(e,n,r,o,c,f,m,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=m,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[3],p=r[6],h=r[1],v=r[4],M=r[7],x=r[2],E=r[5],A=r[8],N=o[0],g=o[3],y=o[6],z=o[1],B=o[4],U=o[7],I=o[2],L=o[5],H=o[8];return c[0]=f*N+m*z+p*I,c[3]=f*g+m*B+p*L,c[6]=f*y+m*U+p*H,c[1]=h*N+v*z+M*I,c[4]=h*g+v*B+M*L,c[7]=h*y+v*U+M*H,c[2]=x*N+E*z+A*I,c[5]=x*g+E*B+A*L,c[8]=x*y+E*U+A*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8];return n*f*v-n*m*h-r*c*v+r*m*p+o*c*h-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8],M=v*f-m*h,x=m*p-v*c,E=h*c-f*p,A=n*M+r*x+o*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=M*N,e[1]=(o*h-v*r)*N,e[2]=(m*r-o*f)*N,e[3]=x*N,e[4]=(v*n-o*p)*N,e[5]=(o*c-m*n)*N,e[6]=E*N,e[7]=(r*p-h*n)*N,e[8]=(f*n-r*c)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,m){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*f+h*m)+f+e,-o*h,o*p,-o*(-h*f+p*m)+m+n,0,0,1),this}scale(e,n){return ol("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,n)),this}rotate(e){return ol("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,n){return ol("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pm.prototype.isMatrix3=!0;let dt=pm;const ih=new dt,gv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_v=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YE(){const a={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Zt&&(o.r=za(o.r),o.g=za(o.g),o.b=za(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Zt&&(o.r=cl(o.r),o.g=cl(o.g),o.b=cl(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===xs?Du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[wu]:{primaries:e,whitePoint:r,transfer:Du,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:gv,fromXYZ:_v,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),a}const Ut=YE();function za(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Fr;class qE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fr===void 0&&(Fr=Nu("canvas")),Fr.width=e.width,Fr.height=e.height;const o=Fr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fr}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=za(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(za(n[r]/255)*255):n[r]=za(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,m=o.length;f<m;f++)o[f].isDataTexture?c.push(ah(o[f].image)):c.push(ah(o[f]))}else c=ah(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ah(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?qE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let KE=0;const sh=new te;class Zn extends Cs{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,r=Oa,o=Oa,c=Un,f=tr,m=Xi,p=xi,h=Zn.DEFAULT_ANISOTROPY,v=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ia(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Ay;Zn.DEFAULT_ANISOTROPY=1;const mm=class mm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],v=p[4],M=p[8],x=p[1],E=p[5],A=p[9],N=p[2],g=p[6],y=p[10];if(Math.abs(v-x)<.01&&Math.abs(M-N)<.01&&Math.abs(A-g)<.01){if(Math.abs(v+x)<.1&&Math.abs(M+N)<.1&&Math.abs(A+g)<.1&&Math.abs(h+E+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(h+1)/2,U=(E+1)/2,I=(y+1)/2,L=(v+x)/4,H=(M+N)/4,T=(A+g)/4;return B>U&&B>I?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=L/r,c=H/r):U>I?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=L/o,c=T/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=H/c,o=T/c),this.set(r,o,c,n),this}let z=Math.sqrt((g-A)*(g-A)+(M-N)*(M-N)+(x-v)*(x-v));return Math.abs(z)<.001&&(z=1),this.x=(g-A)/z,this.y=(M-N)/z,this.z=(x-v)/z,this.w=Math.acos((h+E+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mm.prototype.isVector4=!0;let dn=mm;class QE extends Cs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Zn(o),f=r.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new jp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends QE{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Py extends Zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JE extends Zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zu=class zu{constructor(e,n,r,o,c,f,m,p,h,v,M,x,E,A,N,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h,v,M,x,E,A,N,g)}set(e,n,r,o,c,f,m,p,h,v,M,x,E,A,N,g){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=f,y[9]=m,y[13]=p,y[2]=h,y[6]=v,y[10]=M,y[14]=x,y[3]=E,y[7]=A,y[11]=N,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Hr.setFromMatrixColumn(e,0).length(),c=1/Hr.setFromMatrixColumn(e,1).length(),f=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),m=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const x=f*v,E=f*M,A=m*v,N=m*M;n[0]=p*v,n[4]=-p*M,n[8]=h,n[1]=E+A*h,n[5]=x-N*h,n[9]=-m*p,n[2]=N-x*h,n[6]=A+E*h,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,E=p*M,A=h*v,N=h*M;n[0]=x+N*m,n[4]=A*m-E,n[8]=f*h,n[1]=f*M,n[5]=f*v,n[9]=-m,n[2]=E*m-A,n[6]=N+x*m,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,E=p*M,A=h*v,N=h*M;n[0]=x-N*m,n[4]=-f*M,n[8]=A+E*m,n[1]=E+A*m,n[5]=f*v,n[9]=N-x*m,n[2]=-f*h,n[6]=m,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,E=f*M,A=m*v,N=m*M;n[0]=p*v,n[4]=A*h-E,n[8]=x*h+N,n[1]=p*M,n[5]=N*h+x,n[9]=E*h-A,n[2]=-h,n[6]=m*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,E=f*h,A=m*p,N=m*h;n[0]=p*v,n[4]=N-x*M,n[8]=A*M+E,n[1]=M,n[5]=f*v,n[9]=-m*v,n[2]=-h*v,n[6]=E*M+A,n[10]=x-N*M}else if(e.order==="XZY"){const x=f*p,E=f*h,A=m*p,N=m*h;n[0]=p*v,n[4]=-M,n[8]=h*v,n[1]=x*M+N,n[5]=f*v,n[9]=E*M-A,n[2]=A*M-E,n[6]=m*v,n[10]=N*M+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,$E)}lookAt(e,n,r){const o=this.elements;return vi.subVectors(e,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),hs.crossVectors(r,vi),hs.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),hs.crossVectors(r,vi)),hs.normalize(),qc.crossVectors(vi,hs),o[0]=hs.x,o[4]=qc.x,o[8]=vi.x,o[1]=hs.y,o[5]=qc.y,o[9]=vi.y,o[2]=hs.z,o[6]=qc.z,o[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[4],p=r[8],h=r[12],v=r[1],M=r[5],x=r[9],E=r[13],A=r[2],N=r[6],g=r[10],y=r[14],z=r[3],B=r[7],U=r[11],I=r[15],L=o[0],H=o[4],T=o[8],O=o[12],q=o[1],G=o[5],Q=o[9],me=o[13],de=o[2],ee=o[6],F=o[10],X=o[14],le=o[3],Me=o[7],Ne=o[11],P=o[15];return c[0]=f*L+m*q+p*de+h*le,c[4]=f*H+m*G+p*ee+h*Me,c[8]=f*T+m*Q+p*F+h*Ne,c[12]=f*O+m*me+p*X+h*P,c[1]=v*L+M*q+x*de+E*le,c[5]=v*H+M*G+x*ee+E*Me,c[9]=v*T+M*Q+x*F+E*Ne,c[13]=v*O+M*me+x*X+E*P,c[2]=A*L+N*q+g*de+y*le,c[6]=A*H+N*G+g*ee+y*Me,c[10]=A*T+N*Q+g*F+y*Ne,c[14]=A*O+N*me+g*X+y*P,c[3]=z*L+B*q+U*de+I*le,c[7]=z*H+B*G+U*ee+I*Me,c[11]=z*T+B*Q+U*F+I*Ne,c[15]=z*O+B*me+U*X+I*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],m=e[5],p=e[9],h=e[13],v=e[2],M=e[6],x=e[10],E=e[14],A=e[3],N=e[7],g=e[11],y=e[15],z=p*E-h*x,B=m*E-h*M,U=m*x-p*M,I=f*E-h*v,L=f*x-p*v,H=f*M-m*v;return n*(N*z-g*B+y*U)-r*(A*z-g*I+y*L)+o*(A*B-N*I+y*H)-c*(A*U-N*L+g*H)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],f=e[5],m=e[9],p=e[2],h=e[6],v=e[10];return n*(f*v-m*h)-r*(c*v-m*p)+o*(c*h-f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],v=e[8],M=e[9],x=e[10],E=e[11],A=e[12],N=e[13],g=e[14],y=e[15],z=n*m-r*f,B=n*p-o*f,U=n*h-c*f,I=r*p-o*m,L=r*h-c*m,H=o*h-c*p,T=v*N-M*A,O=v*g-x*A,q=v*y-E*A,G=M*g-x*N,Q=M*y-E*N,me=x*y-E*g,de=z*me-B*Q+U*G+I*q-L*O+H*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/de;return e[0]=(m*me-p*Q+h*G)*ee,e[1]=(o*Q-r*me-c*G)*ee,e[2]=(N*H-g*L+y*I)*ee,e[3]=(x*L-M*H-E*I)*ee,e[4]=(p*q-f*me-h*O)*ee,e[5]=(n*me-o*q+c*O)*ee,e[6]=(g*U-A*H-y*B)*ee,e[7]=(v*H-x*U+E*B)*ee,e[8]=(f*Q-m*q+h*T)*ee,e[9]=(r*q-n*Q-c*T)*ee,e[10]=(A*L-N*U+y*z)*ee,e[11]=(M*U-v*L-E*z)*ee,e[12]=(m*O-f*G-p*T)*ee,e[13]=(n*G-r*O+o*T)*ee,e[14]=(N*B-A*I-g*z)*ee,e[15]=(v*I-M*B+x*z)*ee,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,m=e.y,p=e.z,h=c*f,v=c*m;return this.set(h*f+r,h*m-o*p,h*p+o*m,0,h*m+o*p,v*m+r,v*p-o*f,0,h*p-o*m,v*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,m=n._z,p=n._w,h=c+c,v=f+f,M=m+m,x=c*h,E=c*v,A=c*M,N=f*v,g=f*M,y=m*M,z=p*h,B=p*v,U=p*M,I=r.x,L=r.y,H=r.z;return o[0]=(1-(N+y))*I,o[1]=(E+U)*I,o[2]=(A-B)*I,o[3]=0,o[4]=(E-U)*L,o[5]=(1-(x+y))*L,o[6]=(g+z)*L,o[7]=0,o[8]=(A+B)*H,o[9]=(g-z)*H,o[10]=(1-(x+N))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=Hr.set(o[0],o[1],o[2]).length();const m=Hr.set(o[4],o[5],o[6]).length(),p=Hr.set(o[8],o[9],o[10]).length();c<0&&(f=-f),Hi.copy(this);const h=1/f,v=1/m,M=1/p;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=M,Hi.elements[9]*=M,Hi.elements[10]*=M,n.setFromRotationMatrix(Hi),r.x=f,r.y=m,r.z=p,this}makePerspective(e,n,r,o,c,f,m=ia,p=!1){const h=this.elements,v=2*c/(n-e),M=2*c/(r-o),x=(n+e)/(n-e),E=(r+o)/(r-o);let A,N;if(p)A=c/(f-c),N=f*c/(f-c);else if(m===ia)A=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(m===wo)A=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=M,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,m=ia,p=!1){const h=this.elements,v=2/(n-e),M=2/(r-o),x=-(n+e)/(n-e),E=-(r+o)/(r-o);let A,N;if(p)A=1/(f-c),N=f/(f-c);else if(m===ia)A=-2/(f-c),N=-(f+c)/(f-c);else if(m===wo)A=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=M,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=A,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};zu.prototype.isMatrix4=!0;let fn=zu;const Hr=new te,Hi=new fn,jE=new te(0,0,0),$E=new te(1,1,1),hs=new te,qc=new te,vi=new te,vv=new fn,yv=new bs;class Ts{constructor(e=0,n=0,r=0,o=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],m=o[8],p=o[1],h=o[5],v=o[9],M=o[2],x=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-M,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yv.setFromEuler(this),this.setFromQuaternion(yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class $p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const xv=new te,Gr=new bs,Ra=new fn,Zc=new te,co=new te,tb=new te,nb=new bs,Sv=new te(1,0,0),Mv=new te(0,1,0),Ev=new te(0,0,1),bv={type:"added"},ib={type:"removed"},kr={type:"childadded",child:null},rh={type:"childremoved",child:null};class Ln extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new te,n=new Ts,r=new bs,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new dt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Sv,e)}rotateY(e){return this.rotateOnAxis(Mv,e)}rotateZ(e){return this.rotateOnAxis(Ev,e)}translateOnAxis(e,n){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sv,e)}translateY(e){return this.translateOnAxis(Mv,e)}translateZ(e){return this.translateOnAxis(Ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Zc.copy(e):Zc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(co,Zc,this.up):Ra.lookAt(Zc,co,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),Gr.setFromRotationMatrix(Ra),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bv),kr.child=e,this.dispatchEvent(kr),kr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ib),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bv),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,m=c.length;f<m;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const M=p[h];c(e.shapes,M)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));o.material=m}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];o.animations.push(c(e.animations,p))}}if(n){const m=f(e.geometries),p=f(e.materials),h=f(e.textures),v=f(e.images),M=f(e.shapes),x=f(e.skeletons),E=f(e.animations),A=f(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),M.length>0&&(r.shapes=M),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=o,r;function f(m){const p=[];for(const h in m){const v=m[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ln.DEFAULT_UP=new te(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class La extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const g=n.getJointPose(N,r),y=this._getHandJoint(h,N);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=g.radius),y.visible=g!==null}const v=h.joints["index-finger-tip"],M=h.joints["thumb-tip"],x=v.position.distanceTo(M.position),E=.02,A=.005;h.inputState.pinching&&x>E+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=E-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return m!==null&&(m.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new La;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function oh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ut.workingColorSpace){if(e=Jp(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=oh(f,c,e+1/3),this.g=oh(f,c,e),this.b=oh(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,n=ri){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],m=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const r=Iy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ut.workingToColorSpace(qn.copy(this),e),Math.round(xt(qn.r*255,0,255))*65536+Math.round(xt(qn.g*255,0,255))*256+Math.round(xt(qn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.workingToColorSpace(qn.copy(this),n);const r=qn.r,o=qn.g,c=qn.b,f=Math.max(r,o,c),m=Math.min(r,o,c);let p,h;const v=(m+f)/2;if(m===f)p=0,h=0;else{const M=f-m;switch(h=v<=.5?M/(f+m):M/(2-f-m),f){case r:p=(o-c)/M+(o<c?6:0);break;case o:p=(c-r)/M+2;break;case c:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,n=Ut.workingColorSpace){return Ut.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=ri){Ut.workingToColorSpace(qn.copy(this),e);const n=qn.r,r=qn.g,o=qn.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+n,ps.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ps),e.getHSL(Kc);const r=bo(ps.h,Kc.h,n),o=bo(ps.s,Kc.s,n),c=bo(ps.l,Kc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new bt;bt.NAMES=Iy;class em{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=n,this.far=r}clone(){return new em(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sb extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gi=new te,Ca=new te,ch=new te,wa=new te,Vr=new te,Xr=new te,Tv=new te,uh=new te,fh=new te,dh=new te,hh=new dn,ph=new dn,mh=new dn;class Oi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Gi.subVectors(e,n),o.cross(Gi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Gi.subVectors(o,n),Ca.subVectors(r,n),ch.subVectors(e,n);const f=Gi.dot(Gi),m=Gi.dot(Ca),p=Gi.dot(ch),h=Ca.dot(Ca),v=Ca.dot(ch),M=f*h-m*m;if(M===0)return c.set(0,0,0),null;const x=1/M,E=(h*p-m*v)*x,A=(f*v-m*p)*x;return c.set(1-E-A,A,E)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,n,r,o,c,f,m,p){return this.getBarycoord(e,n,r,o,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,wa.x),p.addScaledVector(f,wa.y),p.addScaledVector(m,wa.z),p)}static getInterpolatedAttribute(e,n,r,o,c,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(hh,c.x),f.addScaledVector(ph,c.y),f.addScaledVector(mh,c.z),f}static isFrontFacing(e,n,r,o){return Gi.subVectors(r,n),Ca.subVectors(e,n),Gi.cross(Ca).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Gi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Oi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,m;Vr.subVectors(o,r),Xr.subVectors(c,r),uh.subVectors(e,r);const p=Vr.dot(uh),h=Xr.dot(uh);if(p<=0&&h<=0)return n.copy(r);fh.subVectors(e,o);const v=Vr.dot(fh),M=Xr.dot(fh);if(v>=0&&M<=v)return n.copy(o);const x=p*M-v*h;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Vr,f);dh.subVectors(e,c);const E=Vr.dot(dh),A=Xr.dot(dh);if(A>=0&&E<=A)return n.copy(c);const N=E*h-p*A;if(N<=0&&h>=0&&A<=0)return m=h/(h-A),n.copy(r).addScaledVector(Xr,m);const g=v*A-E*M;if(g<=0&&M-v>=0&&E-A>=0)return Tv.subVectors(c,o),m=(M-v)/(M-v+(E-A)),n.copy(o).addScaledVector(Tv,m);const y=1/(g+N+x);return f=N*y,m=x*y,n.copy(r).addScaledVector(Vr,f).addScaledVector(Xr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(c,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qc.copy(r.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Jc.subVectors(this.max,uo),Wr.subVectors(e.a,uo),Yr.subVectors(e.b,uo),qr.subVectors(e.c,uo),ms.subVectors(Yr,Wr),gs.subVectors(qr,Yr),Ks.subVectors(Wr,qr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ks.z,Ks.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ks.z,0,-Ks.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ks.y,Ks.x,0];return!gh(n,Wr,Yr,qr,Jc)||(n=[1,0,0,0,1,0,0,0,1],!gh(n,Wr,Yr,qr,Jc))?!1:(jc.crossVectors(ms,gs),n=[jc.x,jc.y,jc.z],gh(n,Wr,Yr,qr,Jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new te,new te,new te,new te,new te,new te,new te,new te],ki=new te,Qc=new Lo,Wr=new te,Yr=new te,qr=new te,ms=new te,gs=new te,Ks=new te,uo=new te,Jc=new te,jc=new te,Qs=new te;function gh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){Qs.fromArray(a,c);const m=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),p=e.dot(Qs),h=n.dot(Qs),v=r.dot(Qs);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>m)return!1}return!0}const En=new te,$c=new st;let rb=0;class Wi extends Cs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)$c.fromBufferAttribute(this,n),$c.applyMatrix3(e),this.setXY(n,$c.x,$c.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array),c=Kt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zy extends Wi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class By extends Wi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class On extends Wi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const lb=new Lo,fo=new te,_h=new te;class tm{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(fo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(_h)),this.expandByPoint(fo.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ob=0;const Ni=new fn,vh=new Ln,Zr=new te,yi=new Lo,ho=new Lo,Nn=new te;class Mi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AE(e)?By:zy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,n,r){return Ni.makeTranslation(e,n,r),this.applyMatrix4(Ni),this}scale(e,n,r){return Ni.makeScale(e,n,r),this.applyMatrix4(Ni),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new On(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const m=n[c];ho.setFromBufferAttribute(m),this.morphTargetsRelative?(Nn.addVectors(yi.min,ho.min),yi.expandByPoint(Nn),Nn.addVectors(yi.max,ho.max),yi.expandByPoint(Nn)):(yi.expandByPoint(ho.min),yi.expandByPoint(ho.max))}yi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)Nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Nn));if(n)for(let c=0,f=n.length;c<f;c++){const m=n[c],p=this.morphTargetsRelative;for(let h=0,v=m.count;h<v;h++)Nn.fromBufferAttribute(m,h),p&&(Zr.fromBufferAttribute(e,h),Nn.add(Zr)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Wi(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const m=[],p=[];for(let T=0;T<r.count;T++)m[T]=new te,p[T]=new te;const h=new te,v=new te,M=new te,x=new st,E=new st,A=new st,N=new te,g=new te;function y(T,O,q){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,O),M.fromBufferAttribute(r,q),x.fromBufferAttribute(c,T),E.fromBufferAttribute(c,O),A.fromBufferAttribute(c,q),v.sub(h),M.sub(h),E.sub(x),A.sub(x);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(N.copy(v).multiplyScalar(A.y).addScaledVector(M,-E.y).multiplyScalar(G),g.copy(M).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(G),m[T].add(N),m[O].add(N),m[q].add(N),p[T].add(g),p[O].add(g),p[q].add(g))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let T=0,O=z.length;T<O;++T){const q=z[T],G=q.start,Q=q.count;for(let me=G,de=G+Q;me<de;me+=3)y(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const B=new te,U=new te,I=new te,L=new te;function H(T){I.fromBufferAttribute(o,T),L.copy(I);const O=m[T];B.copy(O),B.sub(I.multiplyScalar(I.dot(O))).normalize(),U.crossVectors(L,O);const G=U.dot(p[T])<0?-1:1;f.setXYZW(T,B.x,B.y,B.z,G)}for(let T=0,O=z.length;T<O;++T){const q=z[T],G=q.start,Q=q.count;for(let me=G,de=G+Q;me<de;me+=3)H(e.getX(me+0)),H(e.getX(me+1)),H(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const o=new te,c=new te,f=new te,m=new te,p=new te,h=new te,v=new te,M=new te;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),N=e.getX(x+1),g=e.getX(x+2);o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,g),v.subVectors(f,c),M.subVectors(o,c),v.cross(M),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,N),h.fromBufferAttribute(r,g),m.add(v),p.add(v),h.add(v),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let x=0,E=n.count;x<E;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),M.subVectors(o,c),v.cross(M),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(m,p){const h=m.array,v=m.itemSize,M=m.normalized,x=new h.constructor(p.length*v);let E=0,A=0;for(let N=0,g=p.length;N<g;N++){m.isInterleavedBufferAttribute?E=p[N]*m.data.stride+m.offset:E=p[N]*v;for(let y=0;y<v;y++)x[A++]=h[E++]}return new Wi(x,v,M)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,r=this.index.array,o=this.attributes;for(const m in o){const p=o[m],h=e(p,r);n.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let v=0,M=h.length;v<M;v++){const x=h[v],E=e(x,r);p.push(E)}n.morphAttributes[m]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,p=f.length;m<p;m++){const h=f[m];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let M=0,x=h.length;M<x;M++){const E=h[M];v.push(E.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const c=e.morphAttributes;for(const h in c){const v=[],M=c[h];for(let x=0,E=M.length;x<E;x++)v.push(M[x].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const M=f[h];this.addGroup(M.start,M.count,M.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=bp,this.updateRanges=[],this.version=0,this.uuid=Ia()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[r+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qn=new te;class Lu{constructor(e,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)Qn.fromBufferAttribute(this,n),Qn.applyMatrix4(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qn.fromBufferAttribute(this,n),Qn.applyNormalMatrix(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qn.fromBufferAttribute(this,n),Qn.transformDirection(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Kt(n,this.array),r=Kt(r,this.array),o=Kt(o,this.array),c=Kt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Wi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ub=0;class gl extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=ll,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=zh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ll&&(r.blending=this.blending),this.side!==Es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ih&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==$s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const m in c){const p=c[m];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new st().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fy extends gl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Kr;const po=new te,Qr=new te,Jr=new te,jr=new st,mo=new st,Hy=new fn,eu=new te,go=new te,tu=new te,Av=new st,yh=new st,Rv=new st;class fb extends Ln{constructor(e=new Fy){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Mi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new cb(n,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Lu(r,3,0,!1)),Kr.setAttribute("uv",new Lu(r,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new st(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),Hy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-Jr.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const f=this.center;nu(eu.set(-.5,-.5,0),Jr,f,Qr,o,c),nu(go.set(.5,-.5,0),Jr,f,Qr,o,c),nu(tu.set(.5,.5,0),Jr,f,Qr,o,c),Av.set(0,0),yh.set(1,0),Rv.set(1,1);let m=e.ray.intersectTriangle(eu,go,tu,!1,po);if(m===null&&(nu(go.set(-.5,.5,0),Jr,f,Qr,o,c),yh.set(0,1),m=e.ray.intersectTriangle(eu,tu,go,!1,po),m===null))return;const p=e.ray.origin.distanceTo(po);p<e.near||p>e.far||n.push({distance:p,point:po.clone(),uv:Oi.getInterpolation(po,eu,go,tu,Av,yh,Rv,new st),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nu(a,e,n,r,o,c){jr.subVectors(a,n).addScalar(.5).multiply(r),o!==void 0?(mo.x=c*jr.x-o*jr.y,mo.y=o*jr.x+c*jr.y):mo.copy(jr),a.copy(e),a.x+=mo.x,a.y+=mo.y,a.applyMatrix4(Hy)}const Na=new te,xh=new te,iu=new te,_s=new te,Sh=new te,au=new te,Mh=new te;class nm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Na.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,n),Na.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){xh.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),_s.copy(this.origin).sub(xh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(iu),m=_s.dot(this.direction),p=-_s.dot(iu),h=_s.lengthSq(),v=Math.abs(1-f*f);let M,x,E,A;if(v>0)if(M=f*p-m,x=f*m-p,A=c*v,M>=0)if(x>=-A)if(x<=A){const N=1/v;M*=N,x*=N,E=M*(M+f*x+2*m)+x*(f*M+x+2*p)+h}else x=c,M=Math.max(0,-(f*x+m)),E=-M*M+x*(x+2*p)+h;else x=-c,M=Math.max(0,-(f*x+m)),E=-M*M+x*(x+2*p)+h;else x<=-A?(M=Math.max(0,-(-f*c+m)),x=M>0?-c:Math.min(Math.max(-c,-p),c),E=-M*M+x*(x+2*p)+h):x<=A?(M=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+h):(M=Math.max(0,-(f*c+m)),x=M>0?c:Math.min(Math.max(-c,-p),c),E=-M*M+x*(x+2*p)+h);else x=f>0?-c:c,M=Math.max(0,-(f*x+m)),E=-M*M+x*(x+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(xh).addScaledVector(iu,x),E}intersectSphere(e,n){Na.subVectors(e.center,this.origin);const r=Na.dot(this.direction),o=Na.dot(Na)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),m=r-f,p=r+f;return p<0?null:m<0?this.at(p,n):this.at(m,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,m,p;const h=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,o=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,o=(e.min.x-x.x)*h),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),M>=0?(m=(e.min.z-x.z)*M,p=(e.max.z-x.z)*M):(m=(e.max.z-x.z)*M,p=(e.min.z-x.z)*M),r>p||m>o)||((m>r||r!==r)&&(r=m),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,n,r,o,c){Sh.subVectors(n,e),au.subVectors(r,e),Mh.crossVectors(Sh,au);let f=this.direction.dot(Mh),m;if(f>0){if(o)return null;m=1}else if(f<0)m=-1,f=-f;else return null;_s.subVectors(this.origin,e);const p=m*this.direction.dot(au.crossVectors(_s,au));if(p<0)return null;const h=m*this.direction.dot(Sh.cross(_s));if(h<0||p+h>f)return null;const v=-m*_s.dot(Mh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class To extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=yy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cv=new fn,Js=new nm,su=new tm,wv=new te,ru=new te,lu=new te,ou=new te,Eh=new te,cu=new te,Dv=new te,uu=new te;class bn extends Ln{constructor(e=new Mi,n=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(c&&m){cu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const v=m[p],M=c[p];v!==0&&(Eh.fromBufferAttribute(M,e),f?cu.addScaledVector(Eh,v):cu.addScaledVector(Eh.sub(n),v))}n.add(cu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(c),Js.copy(e.ray).recast(e.near),!(su.containsPoint(Js.origin)===!1&&(Js.intersectSphere(su,wv)===null||Js.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(Cv.copy(c).invert(),Js.copy(e.ray).applyMatrix4(Cv),!(r.boundingBox!==null&&Js.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Js)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,M=c.attributes.normal,x=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const g=x[A],y=f[g.materialIndex],z=Math.max(g.start,E.start),B=Math.min(m.count,Math.min(g.start+g.count,E.start+E.count));for(let U=z,I=B;U<I;U+=3){const L=m.getX(U),H=m.getX(U+1),T=m.getX(U+2);o=fu(this,y,e,r,h,v,M,L,H,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),N=Math.min(m.count,E.start+E.count);for(let g=A,y=N;g<y;g+=3){const z=m.getX(g),B=m.getX(g+1),U=m.getX(g+2);o=fu(this,f,e,r,h,v,M,z,B,U),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let A=0,N=x.length;A<N;A++){const g=x[A],y=f[g.materialIndex],z=Math.max(g.start,E.start),B=Math.min(p.count,Math.min(g.start+g.count,E.start+E.count));for(let U=z,I=B;U<I;U+=3){const L=U,H=U+1,T=U+2;o=fu(this,y,e,r,h,v,M,L,H,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const A=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count);for(let g=A,y=N;g<y;g+=3){const z=g,B=g+1,U=g+2;o=fu(this,f,e,r,h,v,M,z,B,U),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function db(a,e,n,r,o,c,f,m){let p;if(e.side===li?p=r.intersectTriangle(f,c,o,!0,m):p=r.intersectTriangle(o,c,f,e.side===Es,m),p===null)return null;uu.copy(m),uu.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(uu);return h<n.near||h>n.far?null:{distance:h,point:uu.clone(),object:a}}function fu(a,e,n,r,o,c,f,m,p,h){a.getVertexPosition(m,ru),a.getVertexPosition(p,lu),a.getVertexPosition(h,ou);const v=db(a,e,n,r,ru,lu,ou,Dv);if(v){const M=new te;Oi.getBarycoord(Dv,ru,lu,ou,M),o&&(v.uv=Oi.getInterpolatedAttribute(o,m,p,h,M,new st)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,m,p,h,M,new st)),f&&(v.normal=Oi.getInterpolatedAttribute(f,m,p,h,M,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:m,b:p,c:h,normal:new te,materialIndex:0};Oi.getNormal(ru,lu,ou,x.normal),v.face=x,v.barycoord=M}return v}class hb extends Zn{constructor(e=null,n=1,r=1,o,c,f,m,p,h=kn,v=kn,M,x){super(null,f,m,p,h,v,o,c,M,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new te,pb=new te,mb=new dt;class ys{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=bh.subVectors(r,n).cross(pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(bh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(o,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||mb.getNormalMatrix(e),o=this.coplanarPoint(bh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new tm,gb=new st(.5,.5),du=new te;class im{constructor(e=new ys,n=new ys,r=new ys,o=new ys,c=new ys,f=new ys){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(n),m[2].copy(r),m[3].copy(o),m[4].copy(c),m[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ia,r=!1){const o=this.planes,c=e.elements,f=c[0],m=c[1],p=c[2],h=c[3],v=c[4],M=c[5],x=c[6],E=c[7],A=c[8],N=c[9],g=c[10],y=c[11],z=c[12],B=c[13],U=c[14],I=c[15];if(o[0].setComponents(h-f,E-v,y-A,I-z).normalize(),o[1].setComponents(h+f,E+v,y+A,I+z).normalize(),o[2].setComponents(h+m,E+M,y+N,I+B).normalize(),o[3].setComponents(h-m,E-M,y-N,I-B).normalize(),r)o[4].setComponents(p,x,g,U).normalize(),o[5].setComponents(h-p,E-x,y-g,I-U).normalize();else if(o[4].setComponents(h-p,E-x,y-g,I-U).normalize(),n===ia)o[5].setComponents(h+p,E+x,y+g,I+U).normalize();else if(n===wo)o[5].setComponents(p,x,g,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);const n=gb.distanceTo(e.center);return js.radius=.7071067811865476+n,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(du.x=o.normal.x>0?e.max.x:e.min.x,du.y=o.normal.y>0?e.max.y:e.min.y,du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gy extends Zn{constructor(e=[],n=ar,r,o,c,f,m,p,h,v){super(e,n,r,o,c,f,m,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _b extends Zn{constructor(e,n,r,o,c,f,m,p,h){super(e,n,r,o,c,f,m,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends Zn{constructor(e,n,r=ra,o,c,f,m=kn,p=kn,h,v=Fa,M=1){if(v!==Fa&&v!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:M};super(x,o,c,f,m,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vb extends hl{constructor(e,n=ra,r=ar,o,c,f=kn,m=kn,p,h=Fa){const v={width:e,height:e,depth:1},M=[v,v,v,v,v,v];super(e,e,n,r,o,c,f,m,p,h),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ky extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends Mi{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const m=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],h=[],v=[],M=[];let x=0,E=0;A("z","y","x",-1,-1,r,n,e,f,c,0),A("z","y","x",1,-1,r,n,-e,f,c,1),A("x","z","y",1,1,e,r,n,o,f,2),A("x","z","y",1,-1,e,r,-n,o,f,3),A("x","y","z",1,-1,e,n,r,o,c,4),A("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new On(h,3)),this.setAttribute("normal",new On(v,3)),this.setAttribute("uv",new On(M,2));function A(N,g,y,z,B,U,I,L,H,T,O){const q=U/H,G=I/T,Q=U/2,me=I/2,de=L/2,ee=H+1,F=T+1;let X=0,le=0;const Me=new te;for(let Ne=0;Ne<F;Ne++){const P=Ne*G-me;for(let ne=0;ne<ee;ne++){const De=ne*q-Q;Me[N]=De*z,Me[g]=P*B,Me[y]=de,h.push(Me.x,Me.y,Me.z),Me[N]=0,Me[g]=0,Me[y]=L>0?1:-1,v.push(Me.x,Me.y,Me.z),M.push(ne/H),M.push(1-Ne/T),X+=1}}for(let Ne=0;Ne<T;Ne++)for(let P=0;P<H;P++){const ne=x+P+ee*Ne,De=x+P+ee*(Ne+1),Ie=x+(P+1)+ee*(Ne+1),ze=x+(P+1)+ee*Ne;p.push(ne,De,ze),p.push(De,Ie,ze),le+=6}m.addGroup(E,le,O),E+=le,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fu extends Mi{constructor(e=1,n=1,r=1,o=32,c=1,f=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:m,thetaLength:p};const h=this;o=Math.floor(o),c=Math.floor(c);const v=[],M=[],x=[],E=[];let A=0;const N=[],g=r/2;let y=0;z(),f===!1&&(e>0&&B(!0),n>0&&B(!1)),this.setIndex(v),this.setAttribute("position",new On(M,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(E,2));function z(){const U=new te,I=new te;let L=0;const H=(n-e)/r;for(let T=0;T<=c;T++){const O=[],q=T/c,G=q*(n-e)+e;for(let Q=0;Q<=o;Q++){const me=Q/o,de=me*p+m,ee=Math.sin(de),F=Math.cos(de);I.x=G*ee,I.y=-q*r+g,I.z=G*F,M.push(I.x,I.y,I.z),U.set(ee,H,F).normalize(),x.push(U.x,U.y,U.z),E.push(me,1-q),O.push(A++)}N.push(O)}for(let T=0;T<o;T++)for(let O=0;O<c;O++){const q=N[O][T],G=N[O+1][T],Q=N[O+1][T+1],me=N[O][T+1];(e>0||O!==0)&&(v.push(q,G,me),L+=3),(n>0||O!==c-1)&&(v.push(G,Q,me),L+=3)}h.addGroup(y,L,0),y+=L}function B(U){const I=A,L=new st,H=new te;let T=0;const O=U===!0?e:n,q=U===!0?1:-1;for(let Q=1;Q<=o;Q++)M.push(0,g*q,0),x.push(0,q,0),E.push(.5,.5),A++;const G=A;for(let Q=0;Q<=o;Q++){const de=Q/o*p+m,ee=Math.cos(de),F=Math.sin(de);H.x=O*F,H.y=g*q,H.z=O*ee,M.push(H.x,H.y,H.z),x.push(0,q,0),L.x=ee*.5+.5,L.y=F*.5*q+.5,E.push(L.x,L.y),A++}for(let Q=0;Q<o;Q++){const me=I+Q,de=G+Q;U===!0?v.push(de,de+1,me):v.push(de+1,de,me),T+=3}h.addGroup(y,T,U===!0?1:2),y+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends Fu{constructor(e=1,n=1,r=32,o=1,c=!1,f=0,m=Math.PI*2){super(0,e,n,r,o,c,f,m),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:m}}static fromJSON(e){return new Ao(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends Mi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,m=Math.floor(r),p=Math.floor(o),h=m+1,v=p+1,M=e/m,x=n/p,E=[],A=[],N=[],g=[];for(let y=0;y<v;y++){const z=y*x-f;for(let B=0;B<h;B++){const U=B*M-c;A.push(U,-z,0),N.push(0,0,1),g.push(B/m),g.push(1-y/p)}}for(let y=0;y<p;y++)for(let z=0;z<m;z++){const B=z+h*y,U=z+h*(y+1),I=z+1+h*(y+1),L=z+1+h*y;E.push(B,U,L),E.push(U,I,L)}this.setIndex(E),this.setAttribute("position",new On(A,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class am extends Mi{constructor(e=.5,n=1,r=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:f},r=Math.max(3,r),o=Math.max(1,o);const m=[],p=[],h=[],v=[];let M=e;const x=(n-e)/o,E=new te,A=new st;for(let N=0;N<=o;N++){for(let g=0;g<=r;g++){const y=c+g/r*f;E.x=M*Math.cos(y),E.y=M*Math.sin(y),p.push(E.x,E.y,E.z),h.push(0,0,1),A.x=(E.x/n+1)/2,A.y=(E.y/n+1)/2,v.push(A.x,A.y)}M+=x}for(let N=0;N<o;N++){const g=N*(r+1);for(let y=0;y<r;y++){const z=y+g,B=z,U=z+r+1,I=z+r+2,L=z+1;m.push(B,U,L),m.push(U,I,L)}}this.setIndex(m),this.setAttribute("position",new On(p,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new am(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sm extends Mi{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:m},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+m,Math.PI);let h=0;const v=[],M=new te,x=new te,E=[],A=[],N=[],g=[];for(let y=0;y<=r;y++){const z=[],B=y/r,U=f+B*m,I=e*Math.cos(U),L=Math.sqrt(e*e-I*I);let H=0;y===0&&f===0?H=.5/n:y===r&&p===Math.PI&&(H=-.5/n);for(let T=0;T<=n;T++){const O=T/n,q=o+O*c;M.x=-L*Math.cos(q),M.y=I,M.z=L*Math.sin(q),A.push(M.x,M.y,M.z),x.copy(M).normalize(),N.push(x.x,x.y,x.z),g.push(O+H,1-B),z.push(h++)}v.push(z)}for(let y=0;y<r;y++)for(let z=0;z<n;z++){const B=v[y][z+1],U=v[y][z],I=v[y+1][z],L=v[y+1][z+1];(y!==0||f>0)&&E.push(B,U,L),(y!==r-1||p<Math.PI)&&E.push(U,I,L)}this.setIndex(E),this.setAttribute("position",new On(A,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function pl(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Nv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Nv(o[0])){const c=[];for(let f=0,m=o.length;f<m;f++)c[f]=o[f].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Jn(a){const e={};for(let n=0;n<a.length;n++){const r=pl(a[n]);for(const o in r)e[o]=r[o]}return e}function Nv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function yb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Vy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const xb={clone:pl,merge:Jn};var Sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pl(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(o.value);break;case"v2":this.uniforms[r].value=new st().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eb extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uv extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bb extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xy extends Ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Ab extends Xy{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Th=new fn,Lv=new te,Ov=new te;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new im,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Lv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lv),Ov.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ov),n.updateMatrixWorld(),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===wo||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hu=new te,pu=new bs,ji=new te;class Wy extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hu,pu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,ji.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(hu,pu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new te,Pv=new st,Iv=new st;class Li extends Wy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,n){return this.getViewBounds(e,Pv,Iv),n.subVectors(Iv,Pv)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eo*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/h,o*=f.width/p,r*=f.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rm extends Wy{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,m=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,m-=v*this.view.offsetY,p=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Cb extends Rb{constructor(){super(new rm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wb extends Xy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new Cb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const $r=-90,el=1;class Db extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li($r,el,e,n);o.layers=this.layers,this.add(o);const c=new Li($r,el,e,n);c.layers=this.layers,this.add(c);const f=new Li($r,el,e,n);f.layers=this.layers,this.add(f);const m=new Li($r,el,e,n);m.layers=this.layers,this.add(m);const p=new Li($r,el,e,n);p.layers=this.layers,this.add(p);const h=new Li($r,el,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,m,p]=n;for(const h of n)this.remove(h);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,p,h,v]=this.children,M=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,3,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(M,x,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Nb extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zv=new fn;class Ub{constructor(e,n,r=0,o=1/0){this.ray=new nm(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new $p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Nt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zv),this}intersectObject(e,n=!0,r=[]){return Ap(e,this,r,n),r.sort(Bv),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Ap(e[o],this,r,n);return r.sort(Bv),r}}function Bv(a,e){return a.distance-e.distance}function Ap(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,m=c.length;f<m;f++)Ap(c[f],e,n,!0)}}class Fv{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gm=class gm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};gm.prototype.isMatrix2=!0;let Hv=gm;class Lb extends Cs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ot("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gv(a,e,n,r){const o=Ob(r);switch(n){case Ny:return a*e;case Ly:return a*e/o.components*o.byteLength;case Yp:return a*e/o.components*o.byteLength;case sr:return a*e*2/o.components*o.byteLength;case qp:return a*e*2/o.components*o.byteLength;case Uy:return a*e*3/o.components*o.byteLength;case Xi:return a*e*4/o.components*o.byteLength;case Zp:return a*e*4/o.components*o.byteLength;case xu:case Su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(a,16)*Math.max(e,8)/4;case qh:case Kh:return Math.max(a,8)*Math.max(e,8)/2;case Jh:case jh:case ep:case tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case $h:case Ru:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case op:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case fp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case mp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case gp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case _p:case vp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case xp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cu:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ob(a){switch(a){case xi:case Ry:return{byteLength:1,components:1};case Ro:case Cy:case Ba:return{byteLength:2,components:1};case Xp:case Wp:return{byteLength:2,components:4};case ra:case Vp:case na:return{byteLength:4,components:1};case wy:case Dy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yy(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Pb(a){const e=new WeakMap;function n(m,p){const h=m.array,v=m.usage,M=h.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,h,v),m.onUploadCallback();let E;if(h instanceof Float32Array)E=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=a.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?E=a.HALF_FLOAT:E=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=a.SHORT;else if(h instanceof Uint32Array)E=a.UNSIGNED_INT;else if(h instanceof Int32Array)E=a.INT;else if(h instanceof Int8Array)E=a.BYTE;else if(h instanceof Uint8Array)E=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:M}}function r(m,p,h){const v=p.array,M=p.updateRanges;if(a.bindBuffer(h,m),M.length===0)a.bufferSubData(h,0,v);else{M.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<M.length;E++){const A=M[x],N=M[E];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++x,M[x]=N)}M.length=x+1;for(let E=0,A=M.length;E<A;E++){const N=M[E];a.bufferSubData(h,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(a.deleteBuffer(p.buffer),e.delete(m))}function f(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=e.get(m);(!v||v.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,n(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:o,remove:c,update:f}}var Ib=`#ifdef USE_ALPHAHASH
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
}`,vt={alphahash_fragment:Ib,alphahash_pars_fragment:zb,alphamap_fragment:Bb,alphamap_pars_fragment:Fb,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:kb,aomap_pars_fragment:Vb,batching_pars_vertex:Xb,batching_vertex:Wb,begin_vertex:Yb,beginnormal_vertex:qb,bsdfs:Zb,iridescence_fragment:Kb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:a1,common:s1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:l1,displacementmap_pars_vertex:o1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:f1,colorspace_fragment:d1,colorspace_pars_fragment:h1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:y1,fog_pars_vertex:x1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:b1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:A1,lights_pars_begin:R1,lights_toon_fragment:w1,lights_toon_pars_fragment:D1,lights_phong_fragment:N1,lights_phong_pars_fragment:U1,lights_physical_fragment:L1,lights_physical_pars_fragment:O1,lights_fragment_begin:P1,lights_fragment_maps:I1,lights_fragment_end:z1,lightprobes_pars_fragment:B1,logdepthbuf_fragment:F1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:k1,map_fragment:V1,map_pars_fragment:X1,map_particle_fragment:W1,map_particle_pars_fragment:Y1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:K1,morphcolor_vertex:Q1,morphnormal_vertex:J1,morphtarget_pars_vertex:j1,morphtarget_vertex:$1,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:aT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:dT,project_vertex:hT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:_T,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:yT,shadowmap_vertex:xT,shadowmask_pars_fragment:ST,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:wT,transmission_fragment:DT,transmission_pars_fragment:NT,uv_pars_fragment:UT,uv_pars_vertex:LT,uv_vertex:OT,worldpos_vertex:PT,background_vert:IT,background_frag:zT,backgroundCube_vert:BT,backgroundCube_frag:FT,cube_vert:HT,cube_frag:GT,depth_vert:kT,depth_frag:VT,distance_vert:XT,distance_frag:WT,equirect_vert:YT,equirect_frag:qT,linedashed_vert:ZT,linedashed_frag:KT,meshbasic_vert:QT,meshbasic_frag:JT,meshlambert_vert:jT,meshlambert_frag:$T,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:aA,meshphong_frag:sA,meshphysical_vert:rA,meshphysical_frag:lA,meshtoon_vert:oA,meshtoon_frag:cA,points_vert:uA,points_frag:fA,shadow_vert:dA,shadow_frag:hA,sprite_vert:pA,sprite_frag:mA},ke={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ea={basic:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Jn([ke.points,ke.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Jn([ke.common,ke.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Jn([ke.sprite,ke.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Jn([ke.common,ke.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Jn([ke.lights,ke.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ea.physical={uniforms:Jn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const mu={r:0,b:0,g:0},gA=new fn,qy=new dt;qy.set(-1,0,0,0,1,0,0,0,1);function _A(a,e,n,r,o,c){const f=new bt(0);let m=o===!0?0:1,p,h,v=null,M=0,x=null;function E(z){let B=z.isScene===!0?z.background:null;if(B&&B.isTexture){const U=z.backgroundBlurriness>0;B=e.get(B,U)}return B}function A(z){let B=!1;const U=E(z);U===null?g(f,m):U&&U.isColor&&(g(U,1),B=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function N(z,B){const U=E(B);U&&(U.isCubeTexture||U.mapping===Bu)?(h===void 0&&(h=new bn(new As(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:pl(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=U,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(B.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(qy),h.material.toneMapped=Ut.getTransfer(U.colorSpace)!==Zt,(v!==U||M!==U.version||x!==a.toneMapping)&&(h.material.needsUpdate=!0,v=U,M=U.version,x=a.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new bn(new ir(2,2),new la({name:"BackgroundMaterial",uniforms:pl(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(U.colorSpace)!==Zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||M!==U.version||x!==a.toneMapping)&&(p.material.needsUpdate=!0,v=U,M=U.version,x=a.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function g(z,B){z.getRGB(mu,Vy(a)),n.buffers.color.setClear(mu.r,mu.g,mu.b,B,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(z,B=1){f.set(z),m=B,g(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,g(f,m)},render:A,addToRenderList:N,dispose:y}}function vA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,f=!1;function m(G,Q,me,de,ee){let F=!1;const X=M(G,de,me,Q);c!==X&&(c=X,h(c.object)),F=E(G,de,me,ee),F&&A(G,de,me,ee),ee!==null&&e.update(ee,a.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,U(G,Q,me,de),ee!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return a.createVertexArray()}function h(G){return a.bindVertexArray(G)}function v(G){return a.deleteVertexArray(G)}function M(G,Q,me,de){const ee=de.wireframe===!0;let F=r[Q.id];F===void 0&&(F={},r[Q.id]=F);const X=G.isInstancedMesh===!0?G.id:0;let le=F[X];le===void 0&&(le={},F[X]=le);let Me=le[me.id];Me===void 0&&(Me={},le[me.id]=Me);let Ne=Me[ee];return Ne===void 0&&(Ne=x(p()),Me[ee]=Ne),Ne}function x(G){const Q=[],me=[],de=[];for(let ee=0;ee<n;ee++)Q[ee]=0,me[ee]=0,de[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:me,attributeDivisors:de,object:G,attributes:{},index:null}}function E(G,Q,me,de){const ee=c.attributes,F=Q.attributes;let X=0;const le=me.getAttributes();for(const Me in le)if(le[Me].location>=0){const P=ee[Me];let ne=F[Me];if(ne===void 0&&(Me==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),Me==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor)),P===void 0||P.attribute!==ne||ne&&P.data!==ne.data)return!0;X++}return c.attributesNum!==X||c.index!==de}function A(G,Q,me,de){const ee={},F=Q.attributes;let X=0;const le=me.getAttributes();for(const Me in le)if(le[Me].location>=0){let P=F[Me];P===void 0&&(Me==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),Me==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const ne={};ne.attribute=P,P&&P.data&&(ne.data=P.data),ee[Me]=ne,X++}c.attributes=ee,c.attributesNum=X,c.index=de}function N(){const G=c.newAttributes;for(let Q=0,me=G.length;Q<me;Q++)G[Q]=0}function g(G){y(G,0)}function y(G,Q){const me=c.newAttributes,de=c.enabledAttributes,ee=c.attributeDivisors;me[G]=1,de[G]===0&&(a.enableVertexAttribArray(G),de[G]=1),ee[G]!==Q&&(a.vertexAttribDivisor(G,Q),ee[G]=Q)}function z(){const G=c.newAttributes,Q=c.enabledAttributes;for(let me=0,de=Q.length;me<de;me++)Q[me]!==G[me]&&(a.disableVertexAttribArray(me),Q[me]=0)}function B(G,Q,me,de,ee,F,X){X===!0?a.vertexAttribIPointer(G,Q,me,ee,F):a.vertexAttribPointer(G,Q,me,de,ee,F)}function U(G,Q,me,de){N();const ee=de.attributes,F=me.getAttributes(),X=Q.defaultAttributeValues;for(const le in F){const Me=F[le];if(Me.location>=0){let Ne=ee[le];if(Ne===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(Ne=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(Ne=G.instanceColor)),Ne!==void 0){const P=Ne.normalized,ne=Ne.itemSize,De=e.get(Ne);if(De===void 0)continue;const Ie=De.buffer,ze=De.type,se=De.bytesPerElement,Te=ze===a.INT||ze===a.UNSIGNED_INT||Ne.gpuType===Vp;if(Ne.isInterleavedBufferAttribute){const Re=Ne.data,Ce=Re.stride,Xe=Ne.offset;if(Re.isInstancedInterleavedBuffer){for(let je=0;je<Me.locationSize;je++)y(Me.location+je,Re.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let je=0;je<Me.locationSize;je++)g(Me.location+je);a.bindBuffer(a.ARRAY_BUFFER,Ie);for(let je=0;je<Me.locationSize;je++)B(Me.location+je,ne/Me.locationSize,ze,P,Ce*se,(Xe+ne/Me.locationSize*je)*se,Te)}else{if(Ne.isInstancedBufferAttribute){for(let Re=0;Re<Me.locationSize;Re++)y(Me.location+Re,Ne.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Re=0;Re<Me.locationSize;Re++)g(Me.location+Re);a.bindBuffer(a.ARRAY_BUFFER,Ie);for(let Re=0;Re<Me.locationSize;Re++)B(Me.location+Re,ne/Me.locationSize,ze,P,ne*se,ne/Me.locationSize*Re*se,Te)}}else if(X!==void 0){const P=X[le];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(Me.location,P);break;case 3:a.vertexAttrib3fv(Me.location,P);break;case 4:a.vertexAttrib4fv(Me.location,P);break;default:a.vertexAttrib1fv(Me.location,P)}}}}z()}function I(){O();for(const G in r){const Q=r[G];for(const me in Q){const de=Q[me];for(const ee in de){const F=de[ee];for(const X in F)v(F[X].object),delete F[X];delete de[ee]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const Q=r[G.id];for(const me in Q){const de=Q[me];for(const ee in de){const F=de[ee];for(const X in F)v(F[X].object),delete F[X];delete de[ee]}}delete r[G.id]}function H(G){for(const Q in r){const me=r[Q];for(const de in me){const ee=me[de];if(ee[G.id]===void 0)continue;const F=ee[G.id];for(const X in F)v(F[X].object),delete F[X];delete ee[G.id]}}}function T(G){for(const Q in r){const me=r[Q],de=G.isInstancedMesh===!0?G.id:0,ee=me[de];if(ee!==void 0){for(const F in ee){const X=ee[F];for(const le in X)v(X[le].object),delete X[le];delete ee[F]}delete me[de],Object.keys(me).length===0&&delete r[Q]}}}function O(){q(),f=!0,c!==o&&(c=o,h(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:O,resetDefaultState:q,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:N,enableAttribute:g,disableUnusedAttributes:z}}function yA(a,e,n){let r;function o(p){r=p}function c(p,h){a.drawArrays(r,p,h),n.update(h,r,1)}function f(p,h,v){v!==0&&(a.drawArraysInstanced(r,p,h,v),n.update(h,r,v))}function m(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,v);let x=0;for(let E=0;E<v;E++)x+=h[E];n.update(x,r,1)}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=m}function xA(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(H){return!(H!==Xi&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(H){const T=H===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==xi&&r.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==na&&!T)}function p(H){if(H==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=p(h);v!==h&&(ot("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const M=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),z=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:M,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:z,maxVaryings:B,maxFragmentUniforms:U,maxSamples:I,samples:L}}function SA(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new ys,m=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,x){const E=M.length!==0||x||r!==0||o;return o=x,r=M.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,x){n=v(M,x,0)},this.setState=function(M,x,E){const A=M.clippingPlanes,N=M.clipIntersection,g=M.clipShadows,y=a.get(M);if(!o||A===null||A.length===0||c&&!g)c?v(null):h();else{const z=c?0:r,B=z*4;let U=y.clippingState||null;p.value=U,U=v(A,x,B,E);for(let I=0;I!==B;++I)U[I]=n[I];y.clippingState=U,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=z}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(M,x,E,A){const N=M!==null?M.length:0;let g=null;if(N!==0){if(g=p.value,A!==!0||g===null){const y=E+N*4,z=x.matrixWorldInverse;m.getNormalMatrix(z),(g===null||g.length<y)&&(g=new Float32Array(y));for(let B=0,U=E;B!==N;++B,U+=4)f.copy(M[B]).applyMatrix4(z,m),f.normal.toArray(g,U),g[U+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,g}}const Ss=4,kv=[.125,.215,.35,.446,.526,.582],er=20,MA=256,_o=new rm,Vv=new bt;let Ah=null,Rh=0,Ch=0,wh=!1;const EA=new te;class Xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:m=EA}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,m),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ar||e.mapping===dl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ba,format:Xi,colorSpace:wu,depthBuffer:!1},o=Wv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(c)),this._blurMaterial=AA(c,e,n),this._ggxMaterial=TA(c,e,n)}return o}_compileMaterial(e){const n=new bn(new Mi,e);this._renderer.compile(n,_o)}_sceneToCubeUV(e,n,r,o,c){const p=new Li(90,1,n,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],M=this._renderer,x=M.autoClear,E=M.toneMapping;M.getClearColor(Vv),M.toneMapping=aa,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(o),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new As,new To({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,g=N.material;let y=!1;const z=e.background;z?z.isColor&&(g.color.copy(z),e.background=null,y=!0):(g.color.copy(Vv),y=!0);for(let B=0;B<6;B++){const U=B%3;U===0?(p.up.set(0,h[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[B],c.y,c.z)):U===1?(p.up.set(0,0,h[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[B],c.z)):(p.up.set(0,h[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[B]));const I=this._cubeSize;tl(o,U*I,B>2?I:0,I,I),M.setRenderTarget(o),y&&M.render(N,p),M.render(e,p)}M.toneMapping=E,M.autoClear=x,e.background=z}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ar||e.mapping===dl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;tl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,_o)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[r];m.material=f;const p=f.uniforms,h=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),M=Math.sqrt(h*h-v*v),x=0+h*1.25,E=M*x,{_lodMax:A}=this,N=this._sizeLods[r],g=3*N*(r>A-Ss?r-A+Ss:0),y=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=A-n,tl(c,g,y,3*N,2*N),o.setRenderTarget(c),o.render(m,_o),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=A-r,tl(e,g,y,3*N,2*N),o.setRenderTarget(e),o.render(m,_o)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,m){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const v=3,M=this._lodMeshes[o];M.material=h;const x=h.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*er-1),N=c/A,g=isFinite(c)?1+Math.floor(v*N):er;g>er&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${er}`);const y=[];let z=0;for(let H=0;H<er;++H){const T=H/N,O=Math.exp(-T*T/2);y.push(O),H===0?z+=O:H<g&&(z+=2*O)}for(let H=0;H<y.length;H++)y[H]=y[H]/z;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=y,x.latitudinal.value=f==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:B}=this;x.dTheta.value=A,x.mipInt.value=B-r;const U=this._sizeLods[o],I=3*U*(o>B-Ss?o-B+Ss:0),L=4*(this._cubeSize-U);tl(n,I,L,3*U,2*U),p.setRenderTarget(n),p.render(M,_o)}}function bA(a){const e=[],n=[],r=[];let o=a;const c=a-Ss+1+kv.length;for(let f=0;f<c;f++){const m=Math.pow(2,o);e.push(m);let p=1/m;f>a-Ss?p=kv[f-a+Ss-1]:f===0&&(p=0),n.push(p);const h=1/(m-2),v=-h,M=1+h,x=[v,v,M,v,M,M,v,v,M,M,v,M],E=6,A=6,N=3,g=2,y=1,z=new Float32Array(N*A*E),B=new Float32Array(g*A*E),U=new Float32Array(y*A*E);for(let L=0;L<E;L++){const H=L%3*2/3-1,T=L>2?0:-1,O=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];z.set(O,N*A*L),B.set(x,g*A*L);const q=[L,L,L,L,L,L];U.set(q,y*A*L)}const I=new Mi;I.setAttribute("position",new Wi(z,N)),I.setAttribute("uv",new Wi(B,g)),I.setAttribute("faceIndex",new Wi(U,y)),r.push(new bn(I,null)),o>Ss&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Wv(a,e,n){const r=new sa(a,e,n);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function tl(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function TA(a,e,n){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function AA(a,e,n){const r=new Float32Array(er),o=new te(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Yv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function qv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class Zy extends sa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new As(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:pl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Pa});c.uniforms.tEquirect.value=n;const f=new bn(o,c),m=n.minFilter;return n.minFilter===tr&&(n.minFilter=Un),new Db(1,10,this).update(e,f),n.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function RA(a){let e=new WeakMap,n=new WeakMap,r=null;function o(x,E=!1){return x==null?null:E?f(x):c(x)}function c(x){if(x&&x.isTexture){const E=x.mapping;if(E===$d||E===eh)if(e.has(x)){const A=e.get(x).texture;return m(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const N=new Zy(A.height);return N.fromEquirectangularTexture(a,x),e.set(x,N),x.addEventListener("dispose",h),m(N.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const E=x.mapping,A=E===$d||E===eh,N=E===ar||E===dl;if(A||N){let g=n.get(x);const y=g!==void 0?g.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return r===null&&(r=new Xv(a)),g=A?r.fromEquirectangular(x,g):r.fromCubemap(x,g),g.texture.pmremVersion=x.pmremVersion,n.set(x,g),g.texture;if(g!==void 0)return g.texture;{const z=x.image;return A&&z&&z.height>0||N&&z&&p(z)?(r===null&&(r=new Xv(a)),g=A?r.fromEquirectangular(x):r.fromCubemap(x),g.texture.pmremVersion=x.pmremVersion,n.set(x,g),x.addEventListener("dispose",v),g.texture):null}}}return x}function m(x,E){return E===$d?x.mapping=ar:E===eh&&(x.mapping=dl),x}function p(x){let E=0;const A=6;for(let N=0;N<A;N++)x[N]!==void 0&&E++;return E===A}function h(x){const E=x.target;E.removeEventListener("dispose",h);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(x){const E=x.target;E.removeEventListener("dispose",v);const A=n.get(E);A!==void 0&&(n.delete(E),A.dispose())}function M(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function CA(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ol("WebGLRenderer: "+r+" extension not supported."),o}}}function wA(a,e,n,r){const o={},c=new WeakMap;function f(M){const x=M.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",f),delete o[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function m(M,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function p(M){const x=M.attributes;for(const E in x)e.update(x[E],a.ARRAY_BUFFER)}function h(M){const x=[],E=M.index,A=M.attributes.position;let N=0;if(A===void 0)return;if(E!==null){const z=E.array;N=E.version;for(let B=0,U=z.length;B<U;B+=3){const I=z[B+0],L=z[B+1],H=z[B+2];x.push(I,L,L,H,H,I)}}else{const z=A.array;N=A.version;for(let B=0,U=z.length/3-1;B<U;B+=3){const I=B+0,L=B+1,H=B+2;x.push(I,L,L,H,H,I)}}const g=new(A.count>=65535?By:zy)(x,1);g.version=N;const y=c.get(M);y&&e.remove(y),c.set(M,g)}function v(M){const x=c.get(M);if(x){const E=M.index;E!==null&&x.version<E.version&&h(M)}else h(M);return c.get(M)}return{get:m,update:p,getWireframeAttribute:v}}function DA(a,e,n){let r;function o(M){r=M}let c,f;function m(M){c=M.type,f=M.bytesPerElement}function p(M,x){a.drawElements(r,x,c,M*f),n.update(x,r,1)}function h(M,x,E){E!==0&&(a.drawElementsInstanced(r,x,c,M*f,E),n.update(x,r,E))}function v(M,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,M,0,E);let N=0;for(let g=0;g<E;g++)N+=x[g];n.update(N,r,1)}this.setMode=o,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=v}function NA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,m){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=m*(c/3);break;case a.LINES:n.lines+=m*(c/2);break;case a.LINE_STRIP:n.lines+=m*(c-1);break;case a.LINE_LOOP:n.lines+=m*c;break;case a.POINTS:n.points+=m*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function UA(a,e,n){const r=new WeakMap,o=new dn;function c(f,m,p){const h=f.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,M=v!==void 0?v.length:0;let x=r.get(m);if(x===void 0||x.count!==M){let O=function(){H.dispose(),r.delete(m),m.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();const E=m.morphAttributes.position!==void 0,A=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,g=m.morphAttributes.position||[],y=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let B=0;E===!0&&(B=1),A===!0&&(B=2),N===!0&&(B=3);let U=m.attributes.position.count*B,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*I*4*M),H=new Py(L,U,I,M);H.type=na,H.needsUpdate=!0;const T=B*4;for(let q=0;q<M;q++){const G=g[q],Q=y[q],me=z[q],de=U*I*4*q;for(let ee=0;ee<G.count;ee++){const F=ee*T;E===!0&&(o.fromBufferAttribute(G,ee),L[de+F+0]=o.x,L[de+F+1]=o.y,L[de+F+2]=o.z,L[de+F+3]=0),A===!0&&(o.fromBufferAttribute(Q,ee),L[de+F+4]=o.x,L[de+F+5]=o.y,L[de+F+6]=o.z,L[de+F+7]=0),N===!0&&(o.fromBufferAttribute(me,ee),L[de+F+8]=o.x,L[de+F+9]=o.y,L[de+F+10]=o.z,L[de+F+11]=me.itemSize===4?o.w:1)}}x={count:M,texture:H,size:new st(U,I)},r.set(m,x),m.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let N=0;N<h.length;N++)E+=h[N];const A=m.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",A),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function LA(a,e,n,r,o){let c=new WeakMap;function f(h){const v=o.render.frame,M=h.geometry,x=e.get(h,M);if(c.get(x)!==v&&(e.update(x),c.set(x,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==v&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return x}function m(){c=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:f,dispose:m}}const OA={[xy]:"LINEAR_TONE_MAPPING",[Sy]:"REINHARD_TONE_MAPPING",[My]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[by]:"AGX_TONE_MAPPING",[Ty]:"NEUTRAL_TONE_MAPPING",[Ey]:"CUSTOM_TONE_MAPPING"};function PA(a,e,n,r,o,c){const f=new sa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new hl(e,n):void 0}),m=new sa(e,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),p=new Mi;p.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new On([0,2,0,0,2,0],2));const h=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new bn(p,h),M=new rm(-1,1,1,-1,0,1);let x=null,E=null,A=!1,N,g=null,y=[],z=!1;this.setSize=function(B,U){f.setSize(B,U),m.setSize(B,U);for(let I=0;I<y.length;I++){const L=y[I];L.setSize&&L.setSize(B,U)}},this.setEffects=function(B){y=B,z=y.length>0&&y[0].isRenderPass===!0;const U=f.width,I=f.height;for(let L=0;L<y.length;L++){const H=y[L];H.setSize&&H.setSize(U,I)}},this.begin=function(B,U){if(A||B.toneMapping===aa&&y.length===0)return!1;if(g=U,U!==null){const I=U.width,L=U.height;(f.width!==I||f.height!==L)&&this.setSize(I,L)}return z===!1&&B.setRenderTarget(f),N=B.toneMapping,B.toneMapping=aa,!0},this.hasRenderPass=function(){return z},this.end=function(B,U){B.toneMapping=N,A=!0;let I=f,L=m;for(let H=0;H<y.length;H++){const T=y[H];if(T.enabled!==!1&&(T.render(B,L,I,U),T.needsSwap!==!1)){const O=I;I=L,L=O}}if(x!==B.outputColorSpace||E!==B.toneMapping){x=B.outputColorSpace,E=B.toneMapping,h.defines={},Ut.getTransfer(x)===Zt&&(h.defines.SRGB_TRANSFER="");const H=OA[E];H&&(h.defines[H]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,B.setRenderTarget(g),B.render(v,M),g=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),m.dispose(),p.dispose(),h.dispose()}}const Ky=new Zn,Rp=new hl(1,1),Qy=new Py,Jy=new JE,jy=new Gy,Zv=[],Kv=[],Qv=new Float32Array(16),Jv=new Float32Array(9),jv=new Float32Array(4);function _l(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Zv[o];if(c===void 0&&(c=new Float32Array(o),Zv[o]=c),e!==0){r.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=n,a[f].toArray(c,m)}return c}function Cn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function wn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Gu(a,e){let n=Kv[e];n===void 0&&(n=new Int32Array(e),Kv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function IA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function zA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2fv(this.addr,e),wn(n,e)}}function BA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;a.uniform3fv(this.addr,e),wn(n,e)}}function FA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4fv(this.addr,e),wn(n,e)}}function HA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;jv.set(r),a.uniformMatrix2fv(this.addr,!1,jv),wn(n,r)}}function GA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;Jv.set(r),a.uniformMatrix3fv(this.addr,!1,Jv),wn(n,r)}}function kA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Cn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(Cn(n,r))return;Qv.set(r),a.uniformMatrix4fv(this.addr,!1,Qv),wn(n,r)}}function VA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function XA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2iv(this.addr,e),wn(n,e)}}function WA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3iv(this.addr,e),wn(n,e)}}function YA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4iv(this.addr,e),wn(n,e)}}function qA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function ZA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;a.uniform2uiv(this.addr,e),wn(n,e)}}function KA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;a.uniform3uiv(this.addr,e),wn(n,e)}}function QA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;a.uniform4uiv(this.addr,e),wn(n,e)}}function JA(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?Qp:Kp,c=Rp):c=Ky,n.setTexture2D(e||c,o)}function jA(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Jy,o)}function $A(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||jy,o)}function e2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Qy,o)}function t2(a){switch(a){case 5126:return IA;case 35664:return zA;case 35665:return BA;case 35666:return FA;case 35674:return HA;case 35675:return GA;case 35676:return kA;case 5124:case 35670:return VA;case 35667:case 35671:return XA;case 35668:case 35672:return WA;case 35669:case 35673:return YA;case 5125:return qA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(a,e){a.uniform1fv(this.addr,e)}function i2(a,e){const n=_l(e,this.size,2);a.uniform2fv(this.addr,n)}function a2(a,e){const n=_l(e,this.size,3);a.uniform3fv(this.addr,n)}function s2(a,e){const n=_l(e,this.size,4);a.uniform4fv(this.addr,n)}function r2(a,e){const n=_l(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function l2(a,e){const n=_l(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function o2(a,e){const n=_l(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function c2(a,e){a.uniform1iv(this.addr,e)}function u2(a,e){a.uniform2iv(this.addr,e)}function f2(a,e){a.uniform3iv(this.addr,e)}function d2(a,e){a.uniform4iv(this.addr,e)}function h2(a,e){a.uniform1uiv(this.addr,e)}function p2(a,e){a.uniform2uiv(this.addr,e)}function m2(a,e){a.uniform3uiv(this.addr,e)}function g2(a,e){a.uniform4uiv(this.addr,e)}function _2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=Rp:f=Ky;for(let m=0;m!==o;++m)n.setTexture2D(e[m]||f,c[m])}function v2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||Jy,c[f])}function y2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||jy,c[f])}function x2(a,e,n){const r=this.cache,o=e.length,c=Gu(n,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||Qy,c[f])}function S2(a){switch(a){case 5126:return n2;case 35664:return i2;case 35665:return a2;case 35666:return s2;case 35674:return r2;case 35675:return l2;case 35676:return o2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}class M2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}}class E2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const m=o[c];m.setValue(e,n[m.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function $v(a,e){a.seq.push(e),a.map[e.id]=e}function T2(a,e,n){const r=a.name,o=r.length;for(Dh.lastIndex=0;;){const c=Dh.exec(r),f=Dh.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&f+2===o){$v(n,h===void 0?new M2(m,a,e):new E2(m,a,e));break}else{let M=n.map[m];M===void 0&&(M=new b2(m),$v(n,M)),n=M}}}class bu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const m=e.getActiveUniform(n,f),p=e.getUniformLocation(n,m.name);T2(m,p,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const m=n[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function ey(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const A2=37297;let R2=0;function C2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const m=f+1;r.push(`${m===e?">":" "} ${m}: ${n[f]}`)}return r.join(`
`)}const ty=new dt;function w2(a){Ut._getMatrix(ty,Ut.workingColorSpace,a);const e=`mat3( ${ty.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(a)){case Du:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ny(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+C2(a.getShaderSource(e),m)}else return c}function D2(a,e){const n=w2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const N2={[xy]:"Linear",[Sy]:"Reinhard",[My]:"Cineon",[kp]:"ACESFilmic",[by]:"AgX",[Ty]:"Neutral",[Ey]:"Custom"};function U2(a,e){const n=N2[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gu=new te;function L2(){Ut.getLuminanceCoefficients(gu);const a=gu.x.toFixed(4),e=gu.y.toFixed(4),n=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function P2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function I2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let m=1;c.type===a.FLOAT_MAT2&&(m=2),c.type===a.FLOAT_MAT3&&(m=3),c.type===a.FLOAT_MAT4&&(m=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:m}}return n}function So(a){return a!==""}function iy(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ay(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(a){return a.replace(z2,F2)}const B2=new Map;function F2(a,e){let n=vt[e];if(n===void 0){const r=B2.get(e);if(r!==void 0)n=vt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cp(n)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sy(a){return a.replace(H2,G2)}function G2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ry(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const k2={[Mo]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function V2(a){return k2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X2={[ar]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function W2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":X2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y2={[dl]:"ENVMAP_MODE_REFRACTION"};function q2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Y2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z2={[yy]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function K2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Z2[a.combine]||"ENVMAP_BLENDING_NONE"}function Q2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function J2(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,m=n.fragmentShader;const p=V2(n),h=W2(n),v=q2(n),M=K2(n),x=Q2(n),E=O2(n),A=P2(c),N=o.createProgram();let g,y,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(So).join(`
`),g.length>0&&(g+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(So).join(`
`),y.length>0&&(y+=`
`)):(g=[ry(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),y=[ry(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+M:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?vt.tonemapping_pars_fragment:"",n.toneMapping!==aa?U2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,D2("linearToOutputTexel",n.outputColorSpace),L2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(So).join(`
`)),f=Cp(f),f=iy(f,n),f=ay(f,n),m=Cp(m),m=iy(m,n),m=ay(m,n),f=sy(f),m=sy(m),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,g=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=z+g+f,U=z+y+m,I=ey(o,o.VERTEX_SHADER,B),L=ey(o,o.FRAGMENT_SHADER,U);o.attachShader(N,I),o.attachShader(N,L),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function H(G){if(a.debug.checkShaderErrors){const Q=o.getProgramInfoLog(N)||"",me=o.getShaderInfoLog(I)||"",de=o.getShaderInfoLog(L)||"",ee=Q.trim(),F=me.trim(),X=de.trim();let le=!0,Me=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(le=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,N,I,L);else{const Ne=ny(o,I,"vertex"),P=ny(o,L,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+Ne+`
`+P)}else ee!==""?ot("WebGLProgram: Program Info Log:",ee):(F===""||X==="")&&(Me=!1);Me&&(G.diagnostics={runnable:le,programLog:ee,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:y}})}o.deleteShader(I),o.deleteShader(L),T=new bu(o,N),O=I2(o,N)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let O;this.getAttributes=function(){return O===void 0&&H(this),O};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(N,A2)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=R2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=L,this}let j2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new eR(e),n.set(e,r)),r}}class eR{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function tR(a){return a===sr||a===Ru||a===Cu}function nR(a,e,n,r,o,c){const f=new $p,m=new $2,p=new Set,h=[],v=new Map,M=r.logarithmicDepthBuffer;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function N(T,O,q,G,Q,me){const de=G.fog,ee=Q.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,le=e.get(T.envMap||F,X),Me=le&&le.mapping===Bu?le.image.height:null,Ne=E[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const P=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ne=P!==void 0?P.length:0;let De=0;ee.morphAttributes.position!==void 0&&(De=1),ee.morphAttributes.normal!==void 0&&(De=2),ee.morphAttributes.color!==void 0&&(De=3);let Ie,ze,se,Te;if(Ne){const Be=ea[Ne];Ie=Be.vertexShader,ze=Be.fragmentShader}else{Ie=T.vertexShader,ze=T.fragmentShader;const Be=m.getVertexShaderStage(T),Tt=m.getFragmentShaderStage(T);m.update(T,Be,Tt),se=Be.id,Te=Tt.id}const Re=a.getRenderTarget(),Ce=a.state.buffers.depth.getReversed(),Xe=Q.isInstancedMesh===!0,je=Q.isBatchedMesh===!0,It=!!T.map,ct=!!T.matcap,_t=!!le,lt=!!T.aoMap,ut=!!T.lightMap,Qt=!!T.bumpMap&&T.wireframe===!1,tt=!!T.normalMap,ht=!!T.displacementMap,Jt=!!T.emissiveMap,zt=!!T.metalnessMap,Bt=!!T.roughnessMap,J=T.anisotropy>0,Ct=T.clearcoat>0,_e=T.dispersion>0,C=T.iridescence>0,_=T.sheen>0,k=T.transmission>0,W=J&&!!T.anisotropyMap,j=Ct&&!!T.clearcoatMap,ye=Ct&&!!T.clearcoatNormalMap,ve=Ct&&!!T.clearcoatRoughnessMap,ie=C&&!!T.iridescenceMap,re=C&&!!T.iridescenceThicknessMap,Se=_&&!!T.sheenColorMap,Le=_&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ue=!!T.specularColorMap,We=!!T.specularIntensityMap,Ye=k&&!!T.transmissionMap,nt=k&&!!T.thicknessMap,Y=!!T.gradientMap,Pe=!!T.alphaMap,R=T.alphaTest>0,Z=!!T.alphaHash,be=!!T.extensions;let ge=aa;T.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ge=a.toneMapping);const Fe={shaderID:Ne,shaderType:T.type,shaderName:T.name,vertexShader:Ie,fragmentShader:ze,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:je,batchingColor:je&&Q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Q.instanceColor!==null,instancingMorph:Xe&&Q.morphTexture!==null,outputColorSpace:Re===null?a.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:It,matcap:ct,envMap:_t,envMapMode:_t&&le.mapping,envMapCubeUVHeight:Me,aoMap:lt,lightMap:ut,bumpMap:Qt,normalMap:tt,displacementMap:ht,emissiveMap:Jt,normalMapObjectSpace:tt&&T.normalMapType===yE,normalMapTangentSpace:tt&&T.normalMapType===Ep,packedNormalMap:tt&&T.normalMapType===Ep&&tR(T.normalMap.format),metalnessMap:zt,roughnessMap:Bt,anisotropy:J,anisotropyMap:W,clearcoat:Ct,clearcoatMap:j,clearcoatNormalMap:ye,clearcoatRoughnessMap:ve,dispersion:_e,iridescence:C,iridescenceMap:ie,iridescenceThicknessMap:re,sheen:_,sheenColorMap:Se,sheenRoughnessMap:Le,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:We,transmission:k,transmissionMap:Ye,thicknessMap:nt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===ll&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:R,alphaHash:Z,combine:T.combine,mapUv:It&&A(T.map.channel),aoMapUv:lt&&A(T.aoMap.channel),lightMapUv:ut&&A(T.lightMap.channel),bumpMapUv:Qt&&A(T.bumpMap.channel),normalMapUv:tt&&A(T.normalMap.channel),displacementMapUv:ht&&A(T.displacementMap.channel),emissiveMapUv:Jt&&A(T.emissiveMap.channel),metalnessMapUv:zt&&A(T.metalnessMap.channel),roughnessMapUv:Bt&&A(T.roughnessMap.channel),anisotropyMapUv:W&&A(T.anisotropyMap.channel),clearcoatMapUv:j&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&A(T.sheenRoughnessMap.channel),specularMapUv:Oe&&A(T.specularMap.channel),specularColorMapUv:Ue&&A(T.specularColorMap.channel),specularIntensityMapUv:We&&A(T.specularIntensityMap.channel),transmissionMapUv:Ye&&A(T.transmissionMap.channel),thicknessMapUv:nt&&A(T.thicknessMap.channel),alphaMapUv:Pe&&A(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(tt||J),vertexNormals:!!ee.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ee.attributes.uv&&(It||Pe),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&tt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:De,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:ge,decodeVideoTexture:It&&T.map.isVideoTexture===!0&&Ut.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:Jt&&T.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===li,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:be&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&T.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function g(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)O.push(q),O.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(O,T),z(O,T),O.push(a.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function y(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function z(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function B(T){const O=E[T.type];let q;if(O){const G=ea[O];q=xb.clone(G.uniforms)}else q=T.uniforms;return q}function U(T,O){let q=v.get(O);return q!==void 0?++q.usedTimes:(q=new J2(a,O,T,o),h.push(q),v.set(O,q)),q}function I(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function L(T){m.remove(T)}function H(){m.dispose()}return{getParameters:N,getProgramCacheKey:g,getUniforms:B,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:H}}function iR(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let m=a.get(f);return m===void 0&&(m={},a.set(f,m)),m}function r(f){a.delete(f)}function o(f,m,p){a.get(f)[m]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function aR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ly(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function oy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(x){let E=0;return x.isInstancedMesh&&(E+=2),x.isSkinnedMesh&&(E+=1),E}function m(x,E,A,N,g,y){let z=a[e];return z===void 0?(z={id:x.id,object:x,geometry:E,material:A,materialVariant:f(x),groupOrder:N,renderOrder:x.renderOrder,z:g,group:y},a[e]=z):(z.id=x.id,z.object=x,z.geometry=E,z.material=A,z.materialVariant=f(x),z.groupOrder=N,z.renderOrder=x.renderOrder,z.z=g,z.group=y),e++,z}function p(x,E,A,N,g,y){const z=m(x,E,A,N,g,y);A.transmission>0?r.push(z):A.transparent===!0?o.push(z):n.push(z)}function h(x,E,A,N,g,y){const z=m(x,E,A,N,g,y);A.transmission>0?r.unshift(z):A.transparent===!0?o.unshift(z):n.unshift(z)}function v(x,E,A){n.length>1&&n.sort(x||aR),r.length>1&&r.sort(E||ly),o.length>1&&o.sort(E||ly),A&&(n.reverse(),r.reverse(),o.reverse())}function M(){for(let x=e,E=a.length;x<E;x++){const A=a[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:h,finish:M,sort:v}}function sR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new oy,a.set(r,[f])):o>=c.length?(f=new oy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function rR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new bt};break;case"SpotLight":n={position:new te,direction:new te,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=n,n}}}function lR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let oR=0;function cR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function uR(a){const e=new rR,n=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new fn,f=new fn;function m(h){let v=0,M=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let E=0,A=0,N=0,g=0,y=0,z=0,B=0,U=0,I=0,L=0,H=0;h.sort(cR);for(let O=0,q=h.length;O<q;O++){const G=h[O],Q=G.color,me=G.intensity,de=G.distance;let ee=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===sr?ee=G.shadow.map.texture:ee=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*me,M+=Q.g*me,x+=Q.b*me;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],me);H++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,le=n.get(G);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,r.directionalShadow[E]=le,r.directionalShadowMap[E]=ee,r.directionalShadowMatrix[E]=G.shadow.matrix,z++}r.directional[E]=F,E++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Q).multiplyScalar(me),F.distance=de,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[N]=F;const X=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,X.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[N]=X.matrix,G.castShadow){const le=n.get(G);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,r.spotShadow[N]=le,r.spotShadowMap[N]=ee,U++}N++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(Q).multiplyScalar(me),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[g]=F,g++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const X=G.shadow,le=n.get(G);le.shadowIntensity=X.intensity,le.shadowBias=X.bias,le.shadowNormalBias=X.normalBias,le.shadowRadius=X.radius,le.shadowMapSize=X.mapSize,le.shadowCameraNear=X.camera.near,le.shadowCameraFar=X.camera.far,r.pointShadow[A]=le,r.pointShadowMap[A]=ee,r.pointShadowMatrix[A]=G.shadow.matrix,B++}r.point[A]=F,A++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(me),F.groundColor.copy(G.groundColor).multiplyScalar(me),r.hemi[y]=F,y++}}g>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==E||T.pointLength!==A||T.spotLength!==N||T.rectAreaLength!==g||T.hemiLength!==y||T.numDirectionalShadows!==z||T.numPointShadows!==B||T.numSpotShadows!==U||T.numSpotMaps!==I||T.numLightProbes!==H)&&(r.directional.length=E,r.spot.length=N,r.rectArea.length=g,r.point.length=A,r.hemi.length=y,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=U+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=H,T.directionalLength=E,T.pointLength=A,T.spotLength=N,T.rectAreaLength=g,T.hemiLength=y,T.numDirectionalShadows=z,T.numPointShadows=B,T.numSpotShadows=U,T.numSpotMaps=I,T.numLightProbes=H,r.version=oR++)}function p(h,v){let M=0,x=0,E=0,A=0,N=0;const g=v.matrixWorldInverse;for(let y=0,z=h.length;y<z;y++){const B=h[y];if(B.isDirectionalLight){const U=r.directional[M];U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(g),M++}else if(B.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(g),U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(g),E++}else if(B.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(g),f.identity(),c.copy(B.matrixWorld),c.premultiply(g),f.extractRotation(c),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),A++}else if(B.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(g),x++}else if(B.isHemisphereLight){const U=r.hemi[N];U.direction.setFromMatrixPosition(B.matrixWorld),U.direction.transformDirection(g),N++}}}return{setup:m,setupView:p,state:r}}function cy(a){const e=new uR(a),n=[],r=[],o=[];function c(x){M.camera=x,n.length=0,r.length=0,o.length=0}function f(x){n.push(x)}function m(x){r.push(x)}function p(x){o.push(x)}function h(){e.setup(n)}function v(x){e.setupView(n,x)}const M={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:M,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:m,pushLightProbeGrid:p}}function fR(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let m;return f===void 0?(m=new cy(a),e.set(o,[m])):c>=f.length?(m=new cy(a),f.push(m)):m=f[c],m}function r(){e=new WeakMap}return{get:n,dispose:r}}const dR=`void main() {
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
}`,pR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],mR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],uy=new fn,vo=new te,Nh=new te;function gR(a,e,n){let r=new im;const o=new st,c=new st,f=new dn,m=new bb,p=new Tb,h={},v=n.maxTextureSize,M={[Es]:li,[li]:Es,[ta]:ta},x=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:dR,fragmentShader:hR}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new Mi;A.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new bn(A,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let y=this.type;this.render=function(L,H,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;this.type===QM&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mo);const O=a.getRenderTarget(),q=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),Q=a.state;Q.setBlending(Pa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const me=y!==this.type;me&&H.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ee=>ee.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ee=L.length;de<ee;de++){const F=L[de],X=F.shadow;if(X===void 0){ot("WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const le=X.getFrameExtents();o.multiply(le),c.copy(X.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,X.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,X.mapSize.y=c.y));const Me=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Me,X.map===null||me===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===xo){if(F.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new sa(o.x,o.y,{format:sr,type:Ba,minFilter:Un,magFilter:Un,generateMipmaps:!1}),X.map.texture.name=F.name+".shadowMap",X.map.depthTexture=new hl(o.x,o.y,na),X.map.depthTexture.name=F.name+".shadowMapDepth",X.map.depthTexture.format=Fa,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=kn,X.map.depthTexture.magFilter=kn}else F.isPointLight?(X.map=new Zy(o.x),X.map.depthTexture=new vb(o.x,ra)):(X.map=new sa(o.x,o.y),X.map.depthTexture=new hl(o.x,o.y,ra)),X.map.depthTexture.name=F.name+".shadowMap",X.map.depthTexture.format=Fa,this.type===Mo?(X.map.depthTexture.compareFunction=Me?Qp:Kp,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=kn,X.map.depthTexture.magFilter=kn);X.camera.updateProjectionMatrix()}const Ne=X.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Ne;P++){if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,P),a.clear();else{P===0&&(a.setRenderTarget(X.map),a.clear());const ne=X.getViewport(P);f.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),Q.viewport(f)}if(F.isPointLight){const ne=X.camera,De=X.matrix,Ie=F.distance||ne.far;Ie!==ne.far&&(ne.far=Ie,ne.updateProjectionMatrix()),vo.setFromMatrixPosition(F.matrixWorld),ne.position.copy(vo),Nh.copy(ne.position),Nh.add(pR[P]),ne.up.copy(mR[P]),ne.lookAt(Nh),ne.updateMatrixWorld(),De.makeTranslation(-vo.x,-vo.y,-vo.z),uy.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),X._frustum.setFromProjectionMatrix(uy,ne.coordinateSystem,ne.reversedDepth)}else X.updateMatrices(F);r=X.getFrustum(),U(H,T,X.camera,F,this.type)}X.isPointLightShadow!==!0&&this.type===xo&&z(X,T),X.needsUpdate=!1}y=this.type,g.needsUpdate=!1,a.setRenderTarget(O,q,G)};function z(L,H){const T=e.update(N);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new sa(o.x,o.y,{format:sr,type:Ba})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(H,null,T,x,N,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(H,null,T,E,N,null)}function B(L,H,T,O){let q=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)q=G;else if(q=T.isPointLight===!0?p:m,a.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Q=q.uuid,me=H.uuid;let de=h[Q];de===void 0&&(de={},h[Q]=de);let ee=de[me];ee===void 0&&(ee=q.clone(),de[me]=ee,H.addEventListener("dispose",I)),q=ee}if(q.visible=H.visible,q.wireframe=H.wireframe,O===xo?q.side=H.shadowSide!==null?H.shadowSide:H.side:q.side=H.shadowSide!==null?H.shadowSide:M[H.side],q.alphaMap=H.alphaMap,q.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,q.map=H.map,q.clipShadows=H.clipShadows,q.clippingPlanes=H.clippingPlanes,q.clipIntersection=H.clipIntersection,q.displacementMap=H.displacementMap,q.displacementScale=H.displacementScale,q.displacementBias=H.displacementBias,q.wireframeLinewidth=H.wireframeLinewidth,q.linewidth=H.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Q=a.properties.get(q);Q.light=T}return q}function U(L,H,T,O,q){if(L.visible===!1)return;if(L.layers.test(H.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===xo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const me=e.update(L),de=L.material;if(Array.isArray(de)){const ee=me.groups;for(let F=0,X=ee.length;F<X;F++){const le=ee[F],Me=de[le.materialIndex];if(Me&&Me.visible){const Ne=B(L,Me,O,q);L.onBeforeShadow(a,L,H,T,me,Ne,le),a.renderBufferDirect(T,null,me,Ne,L,le),L.onAfterShadow(a,L,H,T,me,Ne,le)}}}else if(de.visible){const ee=B(L,de,O,q);L.onBeforeShadow(a,L,H,T,me,ee,null),a.renderBufferDirect(T,null,me,ee,L,null),L.onAfterShadow(a,L,H,T,me,ee,null)}}const Q=L.children;for(let me=0,de=Q.length;me<de;me++)U(Q[me],H,T,O,q)}function I(L){L.target.removeEventListener("dispose",I);for(const T in h){const O=h[T],q=L.target.uuid;q in O&&(O[q].dispose(),delete O[q])}}}function _R(a,e){function n(){let Y=!1;const Pe=new dn;let R=null;const Z=new dn(0,0,0,0);return{setMask:function(be){R!==be&&!Y&&(a.colorMask(be,be,be,be),R=be)},setLocked:function(be){Y=be},setClear:function(be,ge,Fe,Be,Tt){Tt===!0&&(be*=Be,ge*=Be,Fe*=Be),Pe.set(be,ge,Fe,Be),Z.equals(Pe)===!1&&(a.clearColor(be,ge,Fe,Be),Z.copy(Pe))},reset:function(){Y=!1,R=null,Z.set(-1,0,0,0)}}}function r(){let Y=!1,Pe=!1,R=null,Z=null,be=null;return{setReversed:function(ge){if(Pe!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Pe=ge;const Be=be;be=null,this.setClear(Be)}},getReversed:function(){return Pe},setTest:function(ge){ge?Re(a.DEPTH_TEST):Ce(a.DEPTH_TEST)},setMask:function(ge){R!==ge&&!Y&&(a.depthMask(ge),R=ge)},setFunc:function(ge){if(Pe&&(ge=wE[ge]),Z!==ge){switch(ge){case Bh:a.depthFunc(a.NEVER);break;case Fh:a.depthFunc(a.ALWAYS);break;case Hh:a.depthFunc(a.LESS);break;case fl:a.depthFunc(a.LEQUAL);break;case Gh:a.depthFunc(a.EQUAL);break;case kh:a.depthFunc(a.GEQUAL);break;case Vh:a.depthFunc(a.GREATER);break;case Xh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Z=ge}},setLocked:function(ge){Y=ge},setClear:function(ge){be!==ge&&(be=ge,Pe&&(ge=1-ge),a.clearDepth(ge))},reset:function(){Y=!1,R=null,Z=null,be=null,Pe=!1}}}function o(){let Y=!1,Pe=null,R=null,Z=null,be=null,ge=null,Fe=null,Be=null,Tt=null;return{setTest:function(wt){Y||(wt?Re(a.STENCIL_TEST):Ce(a.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!Y&&(a.stencilMask(wt),Pe=wt)},setFunc:function(wt,Vn,oi){(R!==wt||Z!==Vn||be!==oi)&&(a.stencilFunc(wt,Vn,oi),R=wt,Z=Vn,be=oi)},setOp:function(wt,Vn,oi){(ge!==wt||Fe!==Vn||Be!==oi)&&(a.stencilOp(wt,Vn,oi),ge=wt,Fe=Vn,Be=oi)},setLocked:function(wt){Y=wt},setClear:function(wt){Tt!==wt&&(a.clearStencil(wt),Tt=wt)},reset:function(){Y=!1,Pe=null,R=null,Z=null,be=null,ge=null,Fe=null,Be=null,Tt=null}}}const c=new n,f=new r,m=new o,p=new WeakMap,h=new WeakMap;let v={},M={},x={},E=new WeakMap,A=[],N=null,g=!1,y=null,z=null,B=null,U=null,I=null,L=null,H=null,T=new bt(0,0,0),O=0,q=!1,G=null,Q=null,me=null,de=null,ee=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,le=0;const Me=a.getParameter(a.VERSION);Me.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Me)[1]),X=le>=1):Me.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),X=le>=2);let Ne=null,P={};const ne=a.getParameter(a.SCISSOR_BOX),De=a.getParameter(a.VIEWPORT),Ie=new dn().fromArray(ne),ze=new dn().fromArray(De);function se(Y,Pe,R,Z){const be=new Uint8Array(4),ge=a.createTexture();a.bindTexture(Y,ge),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Fe=0;Fe<R;Fe++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Z,0,a.RGBA,a.UNSIGNED_BYTE,be):a.texImage2D(Pe+Fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,be);return ge}const Te={};Te[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),Te[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Te[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),Re(a.DEPTH_TEST),f.setFunc(fl),Qt(!1),tt(lv),Re(a.CULL_FACE),lt(Pa);function Re(Y){v[Y]!==!0&&(a.enable(Y),v[Y]=!0)}function Ce(Y){v[Y]!==!1&&(a.disable(Y),v[Y]=!1)}function Xe(Y,Pe){return x[Y]!==Pe?(a.bindFramebuffer(Y,Pe),x[Y]=Pe,Y===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=Pe),Y===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function je(Y,Pe){let R=A,Z=!1;if(Y){R=E.get(Pe),R===void 0&&(R=[],E.set(Pe,R));const be=Y.textures;if(R.length!==be.length||R[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,Fe=be.length;ge<Fe;ge++)R[ge]=a.COLOR_ATTACHMENT0+ge;R.length=be.length,Z=!0}}else R[0]!==a.BACK&&(R[0]=a.BACK,Z=!0);Z&&a.drawBuffers(R)}function It(Y){return N!==Y?(a.useProgram(Y),N=Y,!0):!1}const ct={[$s]:a.FUNC_ADD,[jM]:a.FUNC_SUBTRACT,[$M]:a.FUNC_REVERSE_SUBTRACT};ct[eE]=a.MIN,ct[tE]=a.MAX;const _t={[nE]:a.ZERO,[iE]:a.ONE,[aE]:a.SRC_COLOR,[Ih]:a.SRC_ALPHA,[uE]:a.SRC_ALPHA_SATURATE,[oE]:a.DST_COLOR,[rE]:a.DST_ALPHA,[sE]:a.ONE_MINUS_SRC_COLOR,[zh]:a.ONE_MINUS_SRC_ALPHA,[cE]:a.ONE_MINUS_DST_COLOR,[lE]:a.ONE_MINUS_DST_ALPHA,[fE]:a.CONSTANT_COLOR,[dE]:a.ONE_MINUS_CONSTANT_COLOR,[hE]:a.CONSTANT_ALPHA,[pE]:a.ONE_MINUS_CONSTANT_ALPHA};function lt(Y,Pe,R,Z,be,ge,Fe,Be,Tt,wt){if(Y===Pa){g===!0&&(Ce(a.BLEND),g=!1);return}if(g===!1&&(Re(a.BLEND),g=!0),Y!==JM){if(Y!==y||wt!==q){if((z!==$s||I!==$s)&&(a.blendEquation(a.FUNC_ADD),z=$s,I=$s),wt)switch(Y){case ll:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ov:a.blendFunc(a.ONE,a.ONE);break;case cv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ll:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ov:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case cv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",Y);break}B=null,U=null,L=null,H=null,T.set(0,0,0),O=0,y=Y,q=wt}return}be=be||Pe,ge=ge||R,Fe=Fe||Z,(Pe!==z||be!==I)&&(a.blendEquationSeparate(ct[Pe],ct[be]),z=Pe,I=be),(R!==B||Z!==U||ge!==L||Fe!==H)&&(a.blendFuncSeparate(_t[R],_t[Z],_t[ge],_t[Fe]),B=R,U=Z,L=ge,H=Fe),(Be.equals(T)===!1||Tt!==O)&&(a.blendColor(Be.r,Be.g,Be.b,Tt),T.copy(Be),O=Tt),y=Y,q=!1}function ut(Y,Pe){Y.side===ta?Ce(a.CULL_FACE):Re(a.CULL_FACE);let R=Y.side===li;Pe&&(R=!R),Qt(R),Y.blending===ll&&Y.transparent===!1?lt(Pa):lt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Z=Y.stencilWrite;m.setTest(Z),Z&&(m.setMask(Y.stencilWriteMask),m.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),m.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Jt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Re(a.SAMPLE_ALPHA_TO_COVERAGE):Ce(a.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(Y){G!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),G=Y)}function tt(Y){Y!==ZM?(Re(a.CULL_FACE),Y!==Q&&(Y===lv?a.cullFace(a.BACK):Y===KM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ce(a.CULL_FACE),Q=Y}function ht(Y){Y!==me&&(X&&a.lineWidth(Y),me=Y)}function Jt(Y,Pe,R){Y?(Re(a.POLYGON_OFFSET_FILL),(de!==Pe||ee!==R)&&(de=Pe,ee=R,f.getReversed()&&(Pe=-Pe),a.polygonOffset(Pe,R))):Ce(a.POLYGON_OFFSET_FILL)}function zt(Y){Y?Re(a.SCISSOR_TEST):Ce(a.SCISSOR_TEST)}function Bt(Y){Y===void 0&&(Y=a.TEXTURE0+F-1),Ne!==Y&&(a.activeTexture(Y),Ne=Y)}function J(Y,Pe,R){R===void 0&&(Ne===null?R=a.TEXTURE0+F-1:R=Ne);let Z=P[R];Z===void 0&&(Z={type:void 0,texture:void 0},P[R]=Z),(Z.type!==Y||Z.texture!==Pe)&&(Ne!==R&&(a.activeTexture(R),Ne=R),a.bindTexture(Y,Pe||Te[Y]),Z.type=Y,Z.texture=Pe)}function Ct(){const Y=P[Ne];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{a.compressedTexImage2D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function _(){try{a.texSubImage2D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function k(){try{a.texSubImage3D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function W(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function j(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function ye(){try{a.texStorage2D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function ve(){try{a.texStorage3D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function ie(){try{a.texImage2D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function re(){try{a.texImage3D(...arguments)}catch(Y){Nt("WebGLState:",Y)}}function Se(Y){return M[Y]!==void 0?M[Y]:a.getParameter(Y)}function Le(Y,Pe){M[Y]!==Pe&&(a.pixelStorei(Y,Pe),M[Y]=Pe)}function Oe(Y){Ie.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Ie.copy(Y))}function Ue(Y){ze.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),ze.copy(Y))}function We(Y,Pe){let R=h.get(Pe);R===void 0&&(R=new WeakMap,h.set(Pe,R));let Z=R.get(Y);Z===void 0&&(Z=a.getUniformBlockIndex(Pe,Y.name),R.set(Y,Z))}function Ye(Y,Pe){const Z=h.get(Pe).get(Y);p.get(Pe)!==Z&&(a.uniformBlockBinding(Pe,Z,Y.__bindingPointIndex),p.set(Pe,Z))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),v={},M={},Ne=null,P={},x={},E=new WeakMap,A=[],N=null,g=!1,y=null,z=null,B=null,U=null,I=null,L=null,H=null,T=new bt(0,0,0),O=0,q=!1,G=null,Q=null,me=null,de=null,ee=null,Ie.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:Re,disable:Ce,bindFramebuffer:Xe,drawBuffers:je,useProgram:It,setBlending:lt,setMaterial:ut,setFlipSided:Qt,setCullFace:tt,setLineWidth:ht,setPolygonOffset:Jt,setScissorTest:zt,activeTexture:Bt,bindTexture:J,unbindTexture:Ct,compressedTexImage2D:_e,compressedTexImage3D:C,texImage2D:ie,texImage3D:re,pixelStorei:Le,getParameter:Se,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:ye,texStorage3D:ve,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:Oe,viewport:Ue,reset:nt}}function vR(a,e,n,r,o,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new st,v=new WeakMap,M=new Set;let x;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,_){return A?new OffscreenCanvas(C,_):Nu("canvas")}function g(C,_,k){let W=1;const j=_e(C);if((j.width>k||j.height>k)&&(W=k/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ye=Math.floor(W*j.width),ve=Math.floor(W*j.height);x===void 0&&(x=N(ye,ve));const ie=_?N(ye,ve):x;return ie.width=ye,ie.height=ve,ie.getContext("2d").drawImage(C,0,0,ye,ve),ot("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ye+"x"+ve+")."),ie}else return"data"in C&&ot("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function y(C){return C.generateMipmaps}function z(C){a.generateMipmap(C)}function B(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(C,_,k,W,j,ye=!1){if(C!==null){if(a[C]!==void 0)return a[C];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;W&&(ve=e.get("EXT_texture_norm16"),ve||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=_;if(_===a.RED&&(k===a.FLOAT&&(ie=a.R32F),k===a.HALF_FLOAT&&(ie=a.R16F),k===a.UNSIGNED_BYTE&&(ie=a.R8),k===a.UNSIGNED_SHORT&&ve&&(ie=ve.R16_EXT),k===a.SHORT&&ve&&(ie=ve.R16_SNORM_EXT)),_===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(ie=a.R8UI),k===a.UNSIGNED_SHORT&&(ie=a.R16UI),k===a.UNSIGNED_INT&&(ie=a.R32UI),k===a.BYTE&&(ie=a.R8I),k===a.SHORT&&(ie=a.R16I),k===a.INT&&(ie=a.R32I)),_===a.RG&&(k===a.FLOAT&&(ie=a.RG32F),k===a.HALF_FLOAT&&(ie=a.RG16F),k===a.UNSIGNED_BYTE&&(ie=a.RG8),k===a.UNSIGNED_SHORT&&ve&&(ie=ve.RG16_EXT),k===a.SHORT&&ve&&(ie=ve.RG16_SNORM_EXT)),_===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(ie=a.RG8UI),k===a.UNSIGNED_SHORT&&(ie=a.RG16UI),k===a.UNSIGNED_INT&&(ie=a.RG32UI),k===a.BYTE&&(ie=a.RG8I),k===a.SHORT&&(ie=a.RG16I),k===a.INT&&(ie=a.RG32I)),_===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&(ie=a.RGB8UI),k===a.UNSIGNED_SHORT&&(ie=a.RGB16UI),k===a.UNSIGNED_INT&&(ie=a.RGB32UI),k===a.BYTE&&(ie=a.RGB8I),k===a.SHORT&&(ie=a.RGB16I),k===a.INT&&(ie=a.RGB32I)),_===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&(ie=a.RGBA8UI),k===a.UNSIGNED_SHORT&&(ie=a.RGBA16UI),k===a.UNSIGNED_INT&&(ie=a.RGBA32UI),k===a.BYTE&&(ie=a.RGBA8I),k===a.SHORT&&(ie=a.RGBA16I),k===a.INT&&(ie=a.RGBA32I)),_===a.RGB&&(k===a.UNSIGNED_SHORT&&ve&&(ie=ve.RGB16_EXT),k===a.SHORT&&ve&&(ie=ve.RGB16_SNORM_EXT),k===a.UNSIGNED_INT_5_9_9_9_REV&&(ie=a.RGB9_E5),k===a.UNSIGNED_INT_10F_11F_11F_REV&&(ie=a.R11F_G11F_B10F)),_===a.RGBA){const re=ye?Du:Ut.getTransfer(j);k===a.FLOAT&&(ie=a.RGBA32F),k===a.HALF_FLOAT&&(ie=a.RGBA16F),k===a.UNSIGNED_BYTE&&(ie=re===Zt?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT&&ve&&(ie=ve.RGBA16_EXT),k===a.SHORT&&ve&&(ie=ve.RGBA16_SNORM_EXT),k===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function I(C,_){let k;return C?_===null||_===ra||_===Co?k=a.DEPTH24_STENCIL8:_===na?k=a.DEPTH32F_STENCIL8:_===Ro&&(k=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ra||_===Co?k=a.DEPTH_COMPONENT24:_===na?k=a.DEPTH_COMPONENT32F:_===Ro&&(k=a.DEPTH_COMPONENT16),k}function L(C,_){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==Un?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function H(C){const _=C.target;_.removeEventListener("dispose",H),O(_),_.isVideoTexture&&v.delete(_),_.isHTMLTexture&&M.delete(_)}function T(C){const _=C.target;_.removeEventListener("dispose",T),G(_)}function O(C){const _=r.get(C);if(_.__webglInit===void 0)return;const k=C.source,W=E.get(k);if(W){const j=W[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&q(C),Object.keys(W).length===0&&E.delete(k)}r.remove(C)}function q(C){const _=r.get(C);a.deleteTexture(_.__webglTexture);const k=C.source,W=E.get(k);delete W[_.__cacheKey],f.memory.textures--}function G(C){const _=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let j=0;j<_.__webglFramebuffer[W].length;j++)a.deleteFramebuffer(_.__webglFramebuffer[W][j]);else a.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)a.deleteFramebuffer(_.__webglFramebuffer[W]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=C.textures;for(let W=0,j=k.length;W<j;W++){const ye=r.get(k[W]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),f.memory.textures--),r.remove(k[W])}r.remove(C)}let Q=0;function me(){Q=0}function de(){return Q}function ee(C){Q=C}function F(){const C=Q;return C>=o.maxTextures&&ot("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),Q+=1,C}function X(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function le(C,_){const k=r.get(C);if(C.isVideoTexture&&J(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const W=C.image;if(W===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(k,C,_);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+_)}function Me(C,_){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ce(k,C,_);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+_)}function Ne(C,_){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Ce(k,C,_);return}n.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+_)}function P(C,_){const k=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Xe(k,C,_);return}n.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+_)}const ne={[Wh]:a.REPEAT,[Oa]:a.CLAMP_TO_EDGE,[Yh]:a.MIRRORED_REPEAT},De={[kn]:a.NEAREST,[_E]:a.NEAREST_MIPMAP_NEAREST,[Yc]:a.NEAREST_MIPMAP_LINEAR,[Un]:a.LINEAR,[th]:a.LINEAR_MIPMAP_NEAREST,[tr]:a.LINEAR_MIPMAP_LINEAR},Ie={[xE]:a.NEVER,[TE]:a.ALWAYS,[SE]:a.LESS,[Kp]:a.LEQUAL,[ME]:a.EQUAL,[Qp]:a.GEQUAL,[EE]:a.GREATER,[bE]:a.NOTEQUAL};function ze(C,_){if(_.type===na&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Un||_.magFilter===th||_.magFilter===Yc||_.magFilter===tr||_.minFilter===Un||_.minFilter===th||_.minFilter===Yc||_.minFilter===tr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,ne[_.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,ne[_.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,ne[_.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,De[_.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kn||_.minFilter!==Yc&&_.minFilter!==tr||_.type===na&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,o.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function se(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",H));const W=_.source;let j=E.get(W);j===void 0&&(j={},E.set(W,j));const ye=X(_);if(ye!==C.__cacheKey){j[ye]===void 0&&(j[ye]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,k=!0),j[ye].usedTimes++;const ve=j[C.__cacheKey];ve!==void 0&&(j[C.__cacheKey].usedTimes--,ve.usedTimes===0&&q(_)),C.__cacheKey=ye,C.__webglTexture=j[ye].texture}return k}function Te(C,_,k){return Math.floor(Math.floor(C/k)/_)}function Re(C,_,k,W){const ye=C.updateRanges;if(ye.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,k,W,_.data);else{ye.sort((Le,Oe)=>Le.start-Oe.start);let ve=0;for(let Le=1;Le<ye.length;Le++){const Oe=ye[ve],Ue=ye[Le],We=Oe.start+Oe.count,Ye=Te(Ue.start,_.width,4),nt=Te(Oe.start,_.width,4);Ue.start<=We+1&&Ye===nt&&Te(Ue.start+Ue.count-1,_.width,4)===Ye?Oe.count=Math.max(Oe.count,Ue.start+Ue.count-Oe.start):(++ve,ye[ve]=Ue)}ye.length=ve+1;const ie=n.getParameter(a.UNPACK_ROW_LENGTH),re=n.getParameter(a.UNPACK_SKIP_PIXELS),Se=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Le=0,Oe=ye.length;Le<Oe;Le++){const Ue=ye[Le],We=Math.floor(Ue.start/4),Ye=Math.ceil(Ue.count/4),nt=We%_.width,Y=Math.floor(We/_.width),Pe=Ye,R=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,nt,Y,Pe,R,k,W,_.data)}C.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ie),n.pixelStorei(a.UNPACK_SKIP_PIXELS,re),n.pixelStorei(a.UNPACK_SKIP_ROWS,Se)}}function Ce(C,_,k){let W=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=a.TEXTURE_3D);const j=se(C,_),ye=_.source;n.bindTexture(W,C.__webglTexture,a.TEXTURE0+k);const ve=r.get(ye);if(ye.version!==ve.__version||j===!0){if(n.activeTexture(a.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const R=Ut.getPrimaries(Ut.workingColorSpace),Z=_.colorSpace===xs?null:Ut.getPrimaries(_.colorSpace),be=_.colorSpace===xs||R===Z?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment);let re=g(_.image,!1,o.maxTextureSize);re=Ct(_,re);const Se=c.convert(_.format,_.colorSpace),Le=c.convert(_.type);let Oe=U(_.internalFormat,Se,Le,_.normalized,_.colorSpace,_.isVideoTexture);ze(W,_);let Ue;const We=_.mipmaps,Ye=_.isVideoTexture!==!0,nt=ve.__version===void 0||j===!0,Y=ye.dataReady,Pe=L(_,re);if(_.isDepthTexture)Oe=I(_.format===nr,_.type),nt&&(Ye?n.texStorage2D(a.TEXTURE_2D,1,Oe,re.width,re.height):n.texImage2D(a.TEXTURE_2D,0,Oe,re.width,re.height,0,Se,Le,null));else if(_.isDataTexture)if(We.length>0){Ye&&nt&&n.texStorage2D(a.TEXTURE_2D,Pe,Oe,We[0].width,We[0].height);for(let R=0,Z=We.length;R<Z;R++)Ue=We[R],Ye?Y&&n.texSubImage2D(a.TEXTURE_2D,R,0,0,Ue.width,Ue.height,Se,Le,Ue.data):n.texImage2D(a.TEXTURE_2D,R,Oe,Ue.width,Ue.height,0,Se,Le,Ue.data);_.generateMipmaps=!1}else Ye?(nt&&n.texStorage2D(a.TEXTURE_2D,Pe,Oe,re.width,re.height),Y&&Re(_,re,Se,Le)):n.texImage2D(a.TEXTURE_2D,0,Oe,re.width,re.height,0,Se,Le,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Oe,We[0].width,We[0].height,re.depth);for(let R=0,Z=We.length;R<Z;R++)if(Ue=We[R],_.format!==Xi)if(Se!==null)if(Ye){if(Y)if(_.layerUpdates.size>0){const be=Gv(Ue.width,Ue.height,_.format,_.type);for(const ge of _.layerUpdates){const Fe=Ue.data.subarray(ge*be/Ue.data.BYTES_PER_ELEMENT,(ge+1)*be/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,R,0,0,ge,Ue.width,Ue.height,1,Se,Fe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,R,0,0,0,Ue.width,Ue.height,re.depth,Se,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,R,Oe,Ue.width,Ue.height,re.depth,0,Ue.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?Y&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,R,0,0,0,Ue.width,Ue.height,re.depth,Se,Le,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,R,Oe,Ue.width,Ue.height,re.depth,0,Se,Le,Ue.data)}else{Ye&&nt&&n.texStorage2D(a.TEXTURE_2D,Pe,Oe,We[0].width,We[0].height);for(let R=0,Z=We.length;R<Z;R++)Ue=We[R],_.format!==Xi?Se!==null?Ye?Y&&n.compressedTexSubImage2D(a.TEXTURE_2D,R,0,0,Ue.width,Ue.height,Se,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,R,Oe,Ue.width,Ue.height,0,Ue.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Y&&n.texSubImage2D(a.TEXTURE_2D,R,0,0,Ue.width,Ue.height,Se,Le,Ue.data):n.texImage2D(a.TEXTURE_2D,R,Oe,Ue.width,Ue.height,0,Se,Le,Ue.data)}else if(_.isDataArrayTexture)if(Ye){if(nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Oe,re.width,re.height,re.depth),Y)if(_.layerUpdates.size>0){const R=Gv(re.width,re.height,_.format,_.type);for(const Z of _.layerUpdates){const be=re.data.subarray(Z*R/re.data.BYTES_PER_ELEMENT,(Z+1)*R/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,Se,Le,be)}_.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Le,re.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,Se,Le,re.data);else if(_.isData3DTexture)Ye?(nt&&n.texStorage3D(a.TEXTURE_3D,Pe,Oe,re.width,re.height,re.depth),Y&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Le,re.data)):n.texImage3D(a.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,Se,Le,re.data);else if(_.isFramebufferTexture){if(nt)if(Ye)n.texStorage2D(a.TEXTURE_2D,Pe,Oe,re.width,re.height);else{let R=re.width,Z=re.height;for(let be=0;be<Pe;be++)n.texImage2D(a.TEXTURE_2D,be,Oe,R,Z,0,Se,Le,null),R>>=1,Z>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in a){const R=a.canvas;if(R.hasAttribute("layoutsubtree")||R.setAttribute("layoutsubtree","true"),re.parentNode!==R){R.appendChild(re),M.add(_),R.onpaint=Z=>{const be=Z.changedElements;for(const ge of M)be.includes(ge.image)&&(ge.needsUpdate=!0)},R.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,re);else{const be=a.RGBA,ge=a.RGBA,Fe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,be,ge,Fe,re)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ye&&nt){const R=_e(We[0]);n.texStorage2D(a.TEXTURE_2D,Pe,Oe,R.width,R.height)}for(let R=0,Z=We.length;R<Z;R++)Ue=We[R],Ye?Y&&n.texSubImage2D(a.TEXTURE_2D,R,0,0,Se,Le,Ue):n.texImage2D(a.TEXTURE_2D,R,Oe,Se,Le,Ue);_.generateMipmaps=!1}else if(Ye){if(nt){const R=_e(re);n.texStorage2D(a.TEXTURE_2D,Pe,Oe,R.width,R.height)}Y&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Se,Le,re)}else n.texImage2D(a.TEXTURE_2D,0,Oe,Se,Le,re);y(_)&&z(W),ve.__version=ye.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Xe(C,_,k){if(_.image.length!==6)return;const W=se(C,_),j=_.source;n.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+k);const ye=r.get(j);if(j.version!==ye.__version||W===!0){n.activeTexture(a.TEXTURE0+k);const ve=Ut.getPrimaries(Ut.workingColorSpace),ie=_.colorSpace===xs?null:Ut.getPrimaries(_.colorSpace),re=_.colorSpace===xs||ve===ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Le=_.image[0]&&_.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!Se&&!Le?Oe[ge]=g(_.image[ge],!0,o.maxCubemapSize):Oe[ge]=Le?_.image[ge].image:_.image[ge],Oe[ge]=Ct(_,Oe[ge]);const Ue=Oe[0],We=c.convert(_.format,_.colorSpace),Ye=c.convert(_.type),nt=U(_.internalFormat,We,Ye,_.normalized,_.colorSpace),Y=_.isVideoTexture!==!0,Pe=ye.__version===void 0||W===!0,R=j.dataReady;let Z=L(_,Ue);ze(a.TEXTURE_CUBE_MAP,_);let be;if(Se){Y&&Pe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Z,nt,Ue.width,Ue.height);for(let ge=0;ge<6;ge++){be=Oe[ge].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const Be=be[Fe];_.format!==Xi?We!==null?Y?R&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Be.width,Be.height,We,Be.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,Be.width,Be.height,0,Be.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?R&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Be.width,Be.height,We,Ye,Be.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,Be.width,Be.height,0,We,Ye,Be.data)}}}else{if(be=_.mipmaps,Y&&Pe){be.length>0&&Z++;const ge=_e(Oe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Z,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Le){Y?R&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,We,Ye,Oe[ge].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Oe[ge].width,Oe[ge].height,0,We,Ye,Oe[ge].data);for(let Fe=0;Fe<be.length;Fe++){const Tt=be[Fe].image[ge].image;Y?R&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Tt.width,Tt.height,We,Ye,Tt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,Tt.width,Tt.height,0,We,Ye,Tt.data)}}else{Y?R&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,We,Ye,Oe[ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,We,Ye,Oe[ge]);for(let Fe=0;Fe<be.length;Fe++){const Be=be[Fe];Y?R&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,We,Ye,Be.image[ge]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,We,Ye,Be.image[ge])}}}y(_)&&z(a.TEXTURE_CUBE_MAP),ye.__version=j.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function je(C,_,k,W,j,ye){const ve=c.convert(k.format,k.colorSpace),ie=c.convert(k.type),re=U(k.internalFormat,ve,ie,k.normalized,k.colorSpace),Se=r.get(_),Le=r.get(k);if(Le.__renderTarget=_,!Se.__hasExternalTextures){const Oe=Math.max(1,_.width>>ye),Ue=Math.max(1,_.height>>ye);j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?n.texImage3D(j,ye,re,Oe,Ue,_.depth,0,ve,ie,null):n.texImage2D(j,ye,re,Oe,Ue,0,ve,ie,null)}n.bindFramebuffer(a.FRAMEBUFFER,C),Bt(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,W,j,Le.__webglTexture,0,zt(_)):(j===a.TEXTURE_2D||j>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,W,j,Le.__webglTexture,ye),n.bindFramebuffer(a.FRAMEBUFFER,null)}function It(C,_,k){if(a.bindRenderbuffer(a.RENDERBUFFER,C),_.depthBuffer){const W=_.depthTexture,j=W&&W.isDepthTexture?W.type:null,ye=I(_.stencilBuffer,j),ve=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Bt(_)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,zt(_),ye,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,zt(_),ye,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ye,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,C)}else{const W=_.textures;for(let j=0;j<W.length;j++){const ye=W[j],ve=c.convert(ye.format,ye.colorSpace),ie=c.convert(ye.type),re=U(ye.internalFormat,ve,ie,ye.normalized,ye.colorSpace);Bt(_)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,zt(_),re,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,zt(_),re,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,re,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ct(C,_,k){const W=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=r.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",H)),j.__webglTexture===void 0){j.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),ze(a.TEXTURE_CUBE_MAP,_.depthTexture);const Se=c.convert(_.depthTexture.format),Le=c.convert(_.depthTexture.type);let Oe;_.depthTexture.format===Fa?Oe=a.DEPTH_COMPONENT24:_.depthTexture.format===nr&&(Oe=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Oe,_.width,_.height,0,Se,Le,null)}}else le(_.depthTexture,0);const ye=j.__webglTexture,ve=zt(_),ie=W?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,re=_.depthTexture.format===nr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fa)Bt(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,ie,ye,0,ve):a.framebufferTexture2D(a.FRAMEBUFFER,re,ie,ye,0);else if(_.depthTexture.format===nr)Bt(_)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,ie,ye,0,ve):a.framebufferTexture2D(a.FRAMEBUFFER,re,ie,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(C){const _=r.get(C),k=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=W}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ct(_.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?ct(_.__webglFramebuffer[0],C,0):ct(_.__webglFramebuffer,C,0)}else if(k){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=a.createRenderbuffer(),It(_.__webglDepthbuffer[W],C,!1);else{const j=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer[W];a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,j,a.RENDERBUFFER,ye)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),It(_.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,j,a.RENDERBUFFER,ye)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function lt(C,_,k){const W=r.get(C);_!==void 0&&je(W.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&_t(C)}function ut(C){const _=C.texture,k=r.get(C),W=r.get(_);C.addEventListener("dispose",T);const j=C.textures,ye=C.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=a.createTexture()),W.__version=_.version,f.memory.textures++),ye){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let re=0;re<_.mipmaps.length;re++)k.__webglFramebuffer[ie][re]=a.createFramebuffer()}else k.__webglFramebuffer[ie]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)k.__webglFramebuffer[ie]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(ve)for(let ie=0,re=j.length;ie<re;ie++){const Se=r.get(j[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=a.createTexture(),f.memory.textures++)}if(C.samples>0&&Bt(C)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const re=j[ie];k.__webglColorRenderbuffer[ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const Se=c.convert(re.format,re.colorSpace),Le=c.convert(re.type),Oe=U(re.internalFormat,Se,Le,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),Ue=zt(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Oe,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ie,a.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),It(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ye){n.bindTexture(a.TEXTURE_CUBE_MAP,W.__webglTexture),ze(a.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)je(k.__webglFramebuffer[ie][re],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else je(k.__webglFramebuffer[ie],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);y(_)&&z(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ie=0,re=j.length;ie<re;ie++){const Se=j[ie],Le=r.get(Se);let Oe=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Oe=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Le.__webglTexture),ze(Oe,Se),je(k.__webglFramebuffer,C,Se,a.COLOR_ATTACHMENT0+ie,Oe,0),y(Se)&&z(Oe)}n.unbindTexture()}else{let ie=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ie,W.__webglTexture),ze(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)je(k.__webglFramebuffer[re],C,_,a.COLOR_ATTACHMENT0,ie,re);else je(k.__webglFramebuffer,C,_,a.COLOR_ATTACHMENT0,ie,0);y(_)&&z(ie),n.unbindTexture()}C.depthBuffer&&_t(C)}function Qt(C){const _=C.textures;for(let k=0,W=_.length;k<W;k++){const j=_[k];if(y(j)){const ye=B(C),ve=r.get(j).__webglTexture;n.bindTexture(ye,ve),z(ye),n.unbindTexture()}}}const tt=[],ht=[];function Jt(C){if(C.samples>0){if(Bt(C)===!1){const _=C.textures,k=C.width,W=C.height;let j=a.COLOR_BUFFER_BIT;const ye=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ve=r.get(C),ie=_.length>1;if(ie)for(let Se=0;Se<_.length;Se++)n.bindFramebuffer(a.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Se,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Se,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const re=C.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=a.STENCIL_BUFFER_BIT)),ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);const Le=r.get(_[Se]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Le,0)}a.blitFramebuffer(0,0,k,W,0,0,k,W,j,a.NEAREST),p===!0&&(tt.length=0,ht.length=0,tt.push(a.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(ye),ht.push(ye),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ht)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<_.length;Se++){n.bindFramebuffer(a.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Se,a.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);const Le=r.get(_[Se]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Se,a.TEXTURE_2D,Le,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const _=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function zt(C){return Math.min(o.maxSamples,C.samples)}function Bt(C){const _=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(C){const _=f.render.frame;v.get(C)!==_&&(v.set(C,_),C.update())}function Ct(C,_){const k=C.colorSpace,W=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==wu&&k!==xs&&(Ut.getTransfer(k)===Zt?(W!==Xi||j!==xi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",k)),_}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=me,this.getTextureUnits=de,this.setTextureUnits=ee,this.setTexture2D=le,this.setTexture2DArray=Me,this.setTexture3D=Ne,this.setTextureCube=P,this.rebindTextures=lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yR(a,e){function n(r,o=xs){let c;const f=Ut.getTransfer(o);if(r===xi)return a.UNSIGNED_BYTE;if(r===Xp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===wy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Dy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ry)return a.BYTE;if(r===Cy)return a.SHORT;if(r===Ro)return a.UNSIGNED_SHORT;if(r===Vp)return a.INT;if(r===ra)return a.UNSIGNED_INT;if(r===na)return a.FLOAT;if(r===Ba)return a.HALF_FLOAT;if(r===Ny)return a.ALPHA;if(r===Uy)return a.RGB;if(r===Xi)return a.RGBA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===nr)return a.DEPTH_STENCIL;if(r===Ly)return a.RED;if(r===Yp)return a.RED_INTEGER;if(r===sr)return a.RG;if(r===qp)return a.RG_INTEGER;if(r===Zp)return a.RGBA_INTEGER;if(r===xu||r===Su||r===Mu||r===Eu)if(f===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qh||r===Zh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===jh||r===$h||r===ep||r===tp||r===Ru||r===np)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jh||r===jh)return f===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===$h)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ep)return c.COMPRESSED_R11_EAC;if(r===tp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ru)return c.COMPRESSED_RG11_EAC;if(r===np)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ip||r===ap||r===sp||r===rp||r===lp||r===op||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ip)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ap)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===op)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===up)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gp)return f===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_p||r===vp||r===yp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===_p)return f===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xp||r===Sp||r===Cu||r===Mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const xR=`
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

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new ky(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new la({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new ir(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Cs{constructor(e,n){super();const r=this;let o=null,c=1,f=null,m="local-floor",p=1,h=null,v=null,M=null,x=null,E=null,A=null;const N=typeof XRWebGLBinding<"u",g=new MR,y={},z=n.getContextAttributes();let B=null,U=null;const I=[],L=[],H=new st;let T=null;const O=new Li;O.viewport=new dn;const q=new Li;q.viewport=new dn;const G=[O,q],Q=new Nb;let me=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getGripSpace()},this.getHand=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getHandSpace()};function ee(se){const Te=L.indexOf(se.inputSource);if(Te===-1)return;const Re=I[Te];Re!==void 0&&(Re.update(se.inputSource,se.frame,h||f),Re.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",X);for(let se=0;se<I.length;se++){const Te=L[se];Te!==null&&(L[se]=null,I[se].disconnect(Te))}me=null,de=null,g.reset();for(const se in y)delete y[se];e.setRenderTarget(B),E=null,x=null,M=null,o=null,U=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){m=se,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return M===null&&N&&(M=new XRWebGLBinding(o,n)),M},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",F),o.addEventListener("inputsourceschange",X),z.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(H),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ce=null,Xe=null;z.depth&&(Xe=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=z.stencil?nr:Fa,Ce=z.stencil?Co:ra);const je={colorFormat:n.RGBA8,depthFormat:Xe,scaleFactor:c};M=this.getBinding(),x=M.createProjectionLayer(je),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new sa(x.textureWidth,x.textureHeight,{format:Xi,type:xi,depthTexture:new hl(x.textureWidth,x.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new sa(E.framebufferWidth,E.framebufferHeight,{format:Xi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await o.requestReferenceSpace(m),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(se){for(let Te=0;Te<se.removed.length;Te++){const Re=se.removed[Te],Ce=L.indexOf(Re);Ce>=0&&(L[Ce]=null,I[Ce].disconnect(Re))}for(let Te=0;Te<se.added.length;Te++){const Re=se.added[Te];let Ce=L.indexOf(Re);if(Ce===-1){for(let je=0;je<I.length;je++)if(je>=L.length){L.push(Re),Ce=je;break}else if(L[je]===null){L[je]=Re,Ce=je;break}if(Ce===-1)break}const Xe=I[Ce];Xe&&Xe.connect(Re)}}const le=new te,Me=new te;function Ne(se,Te,Re){le.setFromMatrixPosition(Te.matrixWorld),Me.setFromMatrixPosition(Re.matrixWorld);const Ce=le.distanceTo(Me),Xe=Te.projectionMatrix.elements,je=Re.projectionMatrix.elements,It=Xe[14]/(Xe[10]-1),ct=Xe[14]/(Xe[10]+1),_t=(Xe[9]+1)/Xe[5],lt=(Xe[9]-1)/Xe[5],ut=(Xe[8]-1)/Xe[0],Qt=(je[8]+1)/je[0],tt=It*ut,ht=It*Qt,Jt=Ce/(-ut+Qt),zt=Jt*-ut;if(Te.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(zt),se.translateZ(Jt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Xe[10]===-1)se.projectionMatrix.copy(Te.projectionMatrix),se.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Bt=It+Jt,J=ct+Jt,Ct=tt-zt,_e=ht+(Ce-zt),C=_t*ct/J*Bt,_=lt*ct/J*Bt;se.projectionMatrix.makePerspective(Ct,_e,C,_,Bt,J),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function P(se,Te){Te===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Te.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Te=se.near,Re=se.far;g.texture!==null&&(g.depthNear>0&&(Te=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),Q.near=q.near=O.near=Te,Q.far=q.far=O.far=Re,(me!==Q.near||de!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),me=Q.near,de=Q.far),Q.layers.mask=se.layers.mask|6,O.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const Ce=se.parent,Xe=Q.cameras;P(Q,Ce);for(let je=0;je<Xe.length;je++)P(Xe[je],Ce);Xe.length===2?Ne(Q,O,q):Q.projectionMatrix.copy(O.projectionMatrix),ne(se,Q,Ce)};function ne(se,Te,Re){Re===null?se.matrix.copy(Te.matrixWorld):(se.matrix.copy(Re.matrixWorld),se.matrix.invert(),se.matrix.multiply(Te.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Te.projectionMatrix),se.projectionMatrixInverse.copy(Te.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Do*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(se){p=se,x!==null&&(x.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Q)},this.getCameraTexture=function(se){return y[se]};let De=null;function Ie(se,Te){if(v=Te.getViewerPose(h||f),A=Te,v!==null){const Re=v.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Ce=!1;Re.length!==Q.cameras.length&&(Q.cameras.length=0,Ce=!0);for(let ct=0;ct<Re.length;ct++){const _t=Re[ct];let lt=null;if(E!==null)lt=E.getViewport(_t);else{const Qt=M.getViewSubImage(x,_t);lt=Qt.viewport,ct===0&&(e.setRenderTargetTextures(U,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(U))}let ut=G[ct];ut===void 0&&(ut=new Li,ut.layers.enable(ct),ut.viewport=new dn,G[ct]=ut),ut.matrix.fromArray(_t.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(_t.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(lt.x,lt.y,lt.width,lt.height),ct===0&&(Q.matrix.copy(ut.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ce===!0&&Q.cameras.push(ut)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){M=r.getBinding();const ct=M.getDepthInformation(Re[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,o.renderState)}if(Xe&&Xe.includes("camera-access")&&N){e.state.unbindTexture(),M=r.getBinding();for(let ct=0;ct<Re.length;ct++){const _t=Re[ct].camera;if(_t){let lt=y[_t];lt||(lt=new ky,y[_t]=lt);const ut=M.getCameraImage(_t);lt.sourceTexture=ut}}}}for(let Re=0;Re<I.length;Re++){const Ce=L[Re],Xe=I[Re];Ce!==null&&Xe!==void 0&&Xe.update(Ce,Te,h||f)}De&&De(se,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),A=null}const ze=new Yy;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(se){De=se},this.dispose=function(){}}}const bR=new fn,$y=new dt;$y.set(-1,0,0,0,1,0,0,0,1);function TR(a,e){function n(g,y){g.matrixAutoUpdate===!0&&g.updateMatrix(),y.value.copy(g.matrix)}function r(g,y){y.color.getRGB(g.fogColor.value,Vy(a)),y.isFog?(g.fogNear.value=y.near,g.fogFar.value=y.far):y.isFogExp2&&(g.fogDensity.value=y.density)}function o(g,y,z,B,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(g,y):y.isMeshLambertMaterial?(c(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(g,y),M(g,y)):y.isMeshPhongMaterial?(c(g,y),v(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(g,y),x(g,y),y.isMeshPhysicalMaterial&&E(g,y,U)):y.isMeshMatcapMaterial?(c(g,y),A(g,y)):y.isMeshDepthMaterial?c(g,y):y.isMeshDistanceMaterial?(c(g,y),N(g,y)):y.isMeshNormalMaterial?c(g,y):y.isLineBasicMaterial?(f(g,y),y.isLineDashedMaterial&&m(g,y)):y.isPointsMaterial?p(g,y,z,B):y.isSpriteMaterial?h(g,y):y.isShadowMaterial?(g.color.value.copy(y.color),g.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(g,y){g.opacity.value=y.opacity,y.color&&g.diffuse.value.copy(y.color),y.emissive&&g.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(g.map.value=y.map,n(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,n(y.alphaMap,g.alphaMapTransform)),y.bumpMap&&(g.bumpMap.value=y.bumpMap,n(y.bumpMap,g.bumpMapTransform),g.bumpScale.value=y.bumpScale,y.side===li&&(g.bumpScale.value*=-1)),y.normalMap&&(g.normalMap.value=y.normalMap,n(y.normalMap,g.normalMapTransform),g.normalScale.value.copy(y.normalScale),y.side===li&&g.normalScale.value.negate()),y.displacementMap&&(g.displacementMap.value=y.displacementMap,n(y.displacementMap,g.displacementMapTransform),g.displacementScale.value=y.displacementScale,g.displacementBias.value=y.displacementBias),y.emissiveMap&&(g.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,g.emissiveMapTransform)),y.specularMap&&(g.specularMap.value=y.specularMap,n(y.specularMap,g.specularMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest);const z=e.get(y),B=z.envMap,U=z.envMapRotation;B&&(g.envMap.value=B,g.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(U)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($y),g.reflectivity.value=y.reflectivity,g.ior.value=y.ior,g.refractionRatio.value=y.refractionRatio),y.lightMap&&(g.lightMap.value=y.lightMap,g.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,g.lightMapTransform)),y.aoMap&&(g.aoMap.value=y.aoMap,g.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,g.aoMapTransform))}function f(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,y.map&&(g.map.value=y.map,n(y.map,g.mapTransform))}function m(g,y){g.dashSize.value=y.dashSize,g.totalSize.value=y.dashSize+y.gapSize,g.scale.value=y.scale}function p(g,y,z,B){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.size.value=y.size*z,g.scale.value=B*.5,y.map&&(g.map.value=y.map,n(y.map,g.uvTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,n(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function h(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.rotation.value=y.rotation,y.map&&(g.map.value=y.map,n(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,n(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function v(g,y){g.specular.value.copy(y.specular),g.shininess.value=Math.max(y.shininess,1e-4)}function M(g,y){y.gradientMap&&(g.gradientMap.value=y.gradientMap)}function x(g,y){g.metalness.value=y.metalness,y.metalnessMap&&(g.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,g.metalnessMapTransform)),g.roughness.value=y.roughness,y.roughnessMap&&(g.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,g.roughnessMapTransform)),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)}function E(g,y,z){g.ior.value=y.ior,y.sheen>0&&(g.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),g.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(g.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,g.sheenColorMapTransform)),y.sheenRoughnessMap&&(g.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,g.sheenRoughnessMapTransform))),y.clearcoat>0&&(g.clearcoat.value=y.clearcoat,g.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(g.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,g.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(g.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&g.clearcoatNormalScale.value.negate())),y.dispersion>0&&(g.dispersion.value=y.dispersion),y.iridescence>0&&(g.iridescence.value=y.iridescence,g.iridescenceIOR.value=y.iridescenceIOR,g.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(g.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,g.iridescenceMapTransform)),y.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),y.transmission>0&&(g.transmission.value=y.transmission,g.transmissionSamplerMap.value=z.texture,g.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(g.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,g.transmissionMapTransform)),g.thickness.value=y.thickness,y.thicknessMap&&(g.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=y.attenuationDistance,g.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(g.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(g.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=y.specularIntensity,g.specularColor.value.copy(y.specularColor),y.specularColorMap&&(g.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,g.specularColorMapTransform)),y.specularIntensityMap&&(g.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,g.specularIntensityMapTransform))}function A(g,y){y.matcap&&(g.matcap.value=y.matcap)}function N(g,y){const z=e.get(y).light;g.referencePosition.value.setFromMatrixPosition(z.matrixWorld),g.nearDistance.value=z.shadow.camera.near,g.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AR(a,e,n,r){let o={},c={},f=[];const m=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,I){const L=I.program;r.uniformBlockBinding(U,L)}function h(U,I){let L=o[U.id];L===void 0&&(g(U),L=v(U),o[U.id]=L,U.addEventListener("dispose",z));const H=I.program;r.updateUBOMapping(U,H);const T=e.render.frame;c[U.id]!==T&&(x(U),c[U.id]=T)}function v(U){const I=M();U.__bindingPointIndex=I;const L=a.createBuffer(),H=U.__size,T=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,H,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,L),L}function M(){for(let U=0;U<m;U++)if(f.indexOf(U)===-1)return f.push(U),U;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const I=o[U.id],L=U.uniforms,H=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let T=0,O=L.length;T<O;T++){const q=L[T];if(Array.isArray(q))for(let G=0,Q=q.length;G<Q;G++)E(q[G],T,G,H);else E(q,T,0,H)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function E(U,I,L,H){if(N(U,I,L,H)===!0){const T=U.__offset,O=U.value;if(Array.isArray(O)){let q=0;for(let G=0;G<O.length;G++){const Q=O[G],me=y(Q);A(Q,U.__data,q),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(q+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,U.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,U.__data)}}function A(U,I,L){typeof U=="number"||typeof U=="boolean"?I[0]=U:U.isMatrix3?(I[0]=U.elements[0],I[1]=U.elements[1],I[2]=U.elements[2],I[3]=0,I[4]=U.elements[3],I[5]=U.elements[4],I[6]=U.elements[5],I[7]=0,I[8]=U.elements[6],I[9]=U.elements[7],I[10]=U.elements[8],I[11]=0):ArrayBuffer.isView(U)?I.set(new U.constructor(U.buffer,U.byteOffset,I.length)):U.toArray(I,L)}function N(U,I,L,H){const T=U.value,O=I+"_"+L;if(H[O]===void 0)return typeof T=="number"||typeof T=="boolean"?H[O]=T:ArrayBuffer.isView(T)?H[O]=T.slice():H[O]=T.clone(),!0;{const q=H[O];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return H[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function g(U){const I=U.uniforms;let L=0;const H=16;for(let O=0,q=I.length;O<q;O++){const G=Array.isArray(I[O])?I[O]:[I[O]];for(let Q=0,me=G.length;Q<me;Q++){const de=G[Q],ee=Array.isArray(de.value)?de.value:[de.value];for(let F=0,X=ee.length;F<X;F++){const le=ee[F],Me=y(le),Ne=L%H,P=Ne%Me.boundary,ne=Ne+P;L+=P,ne!==0&&H-ne<Me.storage&&(L+=H-ne),de.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=L,L+=Me.storage}}}const T=L%H;return T>0&&(L+=H-T),U.__size=L,U.__cache={},this}function y(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(U)?(I.boundary=16,I.storage=U.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",U),I}function z(U){const I=U.target;I.removeEventListener("dispose",z);const L=f.indexOf(I.__bindingPointIndex);f.splice(L,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function B(){for(const U in o)a.deleteBuffer(o[U]);f=[],o={},c={}}return{bind:p,update:h,dispose:B}}const RR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function CR(){return $i===null&&($i=new hb(RR,16,16,sr,Ba),$i.name="DFG_LUT",$i.minFilter=Un,$i.magFilter=Un,$i.wrapS=Oa,$i.wrapT=Oa,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class wR{constructor(e={}){const{canvas:n=RE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:x=!1,outputBufferType:E=xi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=f;const N=E,g=new Set([Zp,qp,Yp]),y=new Set([xi,ra,Ro,Co,Xp,Wp]),z=new Uint32Array(4),B=new Int32Array(4),U=new te;let I=null,L=null;const H=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,Q=null,me=null,de=null,ee=null;this._outputColorSpace=ri;let F=0,X=0,le=null,Me=-1,Ne=null;const P=new dn,ne=new dn;let De=null;const Ie=new bt(0);let ze=0,se=n.width,Te=n.height,Re=1,Ce=null,Xe=null;const je=new dn(0,0,se,Te),It=new dn(0,0,se,Te);let ct=!1;const _t=new im;let lt=!1,ut=!1;const Qt=new fn,tt=new te,ht=new dn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Bt(){return le===null?Re:1}let J=r;function Ct(w,$){return n.getContext(w,$)}try{const w={alpha:!0,depth:o,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gp}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",Vn,!1),J===null){const $="webgl2";if(J=Ct($,w),J===null)throw Ct($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Nt("WebGLRenderer: "+w.message),w}let _e,C,_,k,W,j,ye,ve,ie,re,Se,Le,Oe,Ue,We,Ye,nt,Y,Pe,R,Z,be,ge;function Fe(){_e=new CA(J),_e.init(),Z=new yR(J,_e),C=new xA(J,_e,e,Z),_=new _R(J,_e),C.reversedDepthBuffer&&x&&_.buffers.depth.setReversed(!0),me=J.createFramebuffer(),de=J.createFramebuffer(),ee=J.createFramebuffer(),k=new NA(J),W=new iR,j=new vR(J,_e,_,W,C,Z,k),ye=new RA(q),ve=new Pb(J),be=new vA(J,ve),ie=new wA(J,ve,k,be),re=new LA(J,ie,ve,be,k),Y=new UA(J,C,j),We=new SA(W),Se=new nR(q,ye,_e,C,be,We),Le=new TR(q,W),Oe=new sR,Ue=new fR(_e),nt=new _A(q,ye,_,re,A,p),Ye=new gR(q,re,C),ge=new AR(J,k,C,_),Pe=new yA(J,_e,k),R=new DA(J,_e,k),k.programs=Se.programs,q.capabilities=C,q.extensions=_e,q.properties=W,q.renderLists=Oe,q.shadowMap=Ye,q.state=_,q.info=k}Fe(),N!==xi&&(O=new PA(N,n.width,n.height,m,o,c));const Be=new ER(q,J);this.xr=Be,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(w){w!==void 0&&(Re=w,this.setSize(se,Te,!1))},this.getSize=function(w){return w.set(se,Te)},this.setSize=function(w,$,he=!0){if(Be.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,Te=$,n.width=Math.floor(w*Re),n.height=Math.floor($*Re),he===!0&&(n.style.width=w+"px",n.style.height=$+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(se*Re,Te*Re).floor()},this.setDrawingBufferSize=function(w,$,he){se=w,Te=$,Re=he,n.width=Math.floor(w*he),n.height=Math.floor($*he),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(N===xi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(je)},this.setViewport=function(w,$,he,ue){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,$,he,ue),_.viewport(P.copy(je).multiplyScalar(Re).round())},this.getScissor=function(w){return w.copy(It)},this.setScissor=function(w,$,he,ue){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,$,he,ue),_.scissor(ne.copy(It).multiplyScalar(Re).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){_.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,he=!0){let ue=0;if(w){let fe=!1;if(le!==null){const Ge=le.texture.format;fe=g.has(Ge)}if(fe){const Ge=le.texture.type,qe=y.has(Ge),He=nt.getClearColor(),Qe=nt.getClearAlpha(),Ze=He.r,it=He.g,pt=He.b;qe?(z[0]=Ze,z[1]=it,z[2]=pt,z[3]=Qe,J.clearBufferuiv(J.COLOR,0,z)):(B[0]=Ze,B[1]=it,B[2]=pt,B[3]=Qe,J.clearBufferiv(J.COLOR,0,B))}else ue|=J.COLOR_BUFFER_BIT}$&&(ue|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&J.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Q=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),nt.dispose(),Oe.dispose(),Ue.dispose(),W.dispose(),ye.dispose(),re.dispose(),be.dispose(),ge.dispose(),Se.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",_n),Be.removeEventListener("sessionend",Pn),jn.stop()};function Tt(w){w.preventDefault(),Uu("WebGLRenderer: Context Lost."),G=!0}function wt(){Uu("WebGLRenderer: Context Restored."),G=!1;const w=k.autoReset,$=Ye.enabled,he=Ye.autoUpdate,ue=Ye.needsUpdate,fe=Ye.type;Fe(),k.autoReset=w,Ye.enabled=$,Ye.autoUpdate=he,Ye.needsUpdate=ue,Ye.type=fe}function Vn(w){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oi(w){const $=w.target;$.removeEventListener("dispose",oi),vl($)}function vl(w){yl(w),W.remove(w)}function yl(w){const $=W.get(w).programs;$!==void 0&&($.forEach(function(he){Se.releaseProgram(he)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,he,ue,fe,Ge){$===null&&($=Jt);const qe=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,He=ka(w,$,he,ue,fe);_.setMaterial(ue,qe);let Qe=he.index,Ze=1;if(ue.wireframe===!0){if(Qe=ie.getWireframeAttribute(he),Qe===void 0)return;Ze=2}const it=he.drawRange,pt=he.attributes.position;let et=it.start*Ze,Lt=(it.start+it.count)*Ze;Ge!==null&&(et=Math.max(et,Ge.start*Ze),Lt=Math.min(Lt,(Ge.start+Ge.count)*Ze)),Qe!==null?(et=Math.max(et,0),Lt=Math.min(Lt,Qe.count)):pt!=null&&(et=Math.max(et,0),Lt=Math.min(Lt,pt.count));const on=Lt-et;if(on<0||on===1/0)return;be.setup(fe,ue,He,he,Qe);let nn,Vt=Pe;if(Qe!==null&&(nn=ve.get(Qe),Vt=R,Vt.setIndex(nn)),fe.isMesh)ue.wireframe===!0?(_.setLineWidth(ue.wireframeLinewidth*Bt()),Vt.setMode(J.LINES)):Vt.setMode(J.TRIANGLES);else if(fe.isLine){let Xt=ue.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*Bt()),fe.isLineSegments?Vt.setMode(J.LINES):fe.isLineLoop?Vt.setMode(J.LINE_LOOP):Vt.setMode(J.LINE_STRIP)}else fe.isPoints?Vt.setMode(J.POINTS):fe.isSprite&&Vt.setMode(J.TRIANGLES);if(fe.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Vt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Xt=fe._multiDrawStarts,Ve=fe._multiDrawCounts,Xn=fe._multiDrawCount,St=Qe?ve.get(Qe).bytesPerElement:1,Tn=W.get(ue).currentProgram.getUniforms();for(let ci=0;ci<Xn;ci++)Tn.setValue(J,"_gl_DrawID",ci),Vt.render(Xt[ci]/St,Ve[ci])}else if(fe.isInstancedMesh)Vt.renderInstances(et,on,fe.count);else if(he.isInstancedBufferGeometry){const Xt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ve=Math.min(he.instanceCount,Xt);Vt.renderInstances(et,on,Ve)}else Vt.render(et,on)};function xl(w,$,he){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=li,w.needsUpdate=!0,Ga(w,$,he),w.side=Es,w.needsUpdate=!0,Ga(w,$,he),w.side=ta):Ga(w,$,he)}this.compile=function(w,$,he=null){he===null&&(he=w),L=Ue.get(he),L.init($),T.push(L),he.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(L.pushLight(fe),fe.castShadow&&L.pushShadow(fe))}),w!==he&&w.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(L.pushLight(fe),fe.castShadow&&L.pushShadow(fe))}),L.setupLights();const ue=new Set;return w.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let qe=0;qe<Ge.length;qe++){const He=Ge[qe];xl(He,he,fe),ue.add(He)}else xl(Ge,he,fe),ue.add(Ge)}),L=T.pop(),ue},this.compileAsync=function(w,$,he=null){const ue=this.compile(w,$,he);return new Promise(fe=>{function Ge(){if(ue.forEach(function(qe){W.get(qe).currentProgram.isReady()&&ue.delete(qe)}),ue.size===0){fe(w);return}setTimeout(Ge,10)}_e.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let rr=null;function Yi(w){rr&&rr(w)}function _n(){jn.stop()}function Pn(){jn.start()}const jn=new Yy;jn.setAnimationLoop(Yi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){rr=w,Be.setAnimationLoop(w),w===null?jn.stop():jn.start()},Be.addEventListener("sessionstart",_n),Be.addEventListener("sessionend",Pn),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(w,$);const he=Be.enabled===!0&&Be.isPresenting===!0,ue=O!==null&&(le===null||he)&&O.begin(q,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera($),$=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(q,w,$,le),L=Ue.get(w,T.length),L.init($),L.state.textureUnits=j.getTextureUnits(),T.push(L),Qt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_t.setFromProjectionMatrix(Qt,ia,$.reversedDepth),ut=this.localClippingEnabled,lt=We.init(this.clippingPlanes,ut),I=Oe.get(w,H.length),I.init(),H.push(I),Be.enabled===!0&&Be.isPresenting===!0){const qe=q.xr.getDepthSensingMesh();qe!==null&&ws(qe,$,-1/0,q.sortObjects)}ws(w,$,0,q.sortObjects),I.finish(),q.sortObjects===!0&&I.sort(Ce,Xe,$.reversedDepth),zt=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,zt&&nt.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&We.beginShadows();const fe=L.state.shadowsArray;if(Ye.render(fe,w,$),lt===!0&&We.endShadows(),(ue&&O.hasRenderPass())===!1){const qe=I.opaque,He=I.transmissive;if(L.setupLights(),$.isArrayCamera){const Qe=$.cameras;if(He.length>0)for(let Ze=0,it=Qe.length;Ze<it;Ze++){const pt=Qe[Ze];Po(qe,He,w,pt)}zt&&nt.render(w);for(let Ze=0,it=Qe.length;Ze<it;Ze++){const pt=Qe[Ze];Oo(I,w,pt,pt.viewport)}}else He.length>0&&Po(qe,He,w,$),zt&&nt.render(w),Oo(I,w,$)}le!==null&&X===0&&(j.updateMultisampleRenderTarget(le),j.updateRenderTargetMipmap(le)),ue&&O.end(q),w.isScene===!0&&w.onAfterRender(q,w,$),be.resetDefaultState(),Me=-1,Ne=null,T.pop(),T.length>0?(L=T[T.length-1],j.setTextureUnits(L.state.textureUnits),lt===!0&&We.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,H.pop(),H.length>0?I=H[H.length-1]:I=null,Q!==null&&Q.renderEnd()};function ws(w,$,he,ue){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_t.intersectsSprite(w)){ue&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);const qe=re.update(w),He=w.material;He.visible&&I.push(w,qe,He,he,ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_t.intersectsObject(w))){const qe=re.update(w),He=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ht.copy(qe.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(He)){const Qe=qe.groups;for(let Ze=0,it=Qe.length;Ze<it;Ze++){const pt=Qe[Ze],et=He[pt.materialIndex];et&&et.visible&&I.push(w,qe,et,he,ht.z,pt)}}else He.visible&&I.push(w,qe,He,he,ht.z,null)}}const Ge=w.children;for(let qe=0,He=Ge.length;qe<He;qe++)ws(Ge[qe],$,he,ue)}function Oo(w,$,he,ue){const{opaque:fe,transmissive:Ge,transparent:qe}=w;L.setupLightsView(he),lt===!0&&We.setGlobalState(q.clippingPlanes,he),ue&&_.viewport(P.copy(ue)),fe.length>0&&Ds(fe,$,he),Ge.length>0&&Ds(Ge,$,he),qe.length>0&&Ds(qe,$,he),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Po(w,$,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ue.id]===void 0){const et=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ue.id]=new sa(1,1,{generateMipmaps:!0,type:et?Ba:xi,minFilter:tr,samples:Math.max(4,C.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Ge=L.state.transmissionRenderTarget[ue.id],qe=ue.viewport||P;Ge.setSize(qe.z*q.transmissionResolutionScale,qe.w*q.transmissionResolutionScale);const He=q.getRenderTarget(),Qe=q.getActiveCubeFace(),Ze=q.getActiveMipmapLevel();q.setRenderTarget(Ge),q.getClearColor(Ie),ze=q.getClearAlpha(),ze<1&&q.setClearColor(16777215,.5),q.clear(),zt&&nt.render(he);const it=q.toneMapping;q.toneMapping=aa;const pt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),L.setupLightsView(ue),lt===!0&&We.setGlobalState(q.clippingPlanes,ue),Ds(w,he,ue),j.updateMultisampleRenderTarget(Ge),j.updateRenderTargetMipmap(Ge),_e.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Lt=0,on=$.length;Lt<on;Lt++){const nn=$[Lt],{object:Vt,geometry:Xt,material:Ve,group:Xn}=nn;if(Ve.side===ta&&Vt.layers.test(ue.layers)){const St=Ve.side;Ve.side=li,Ve.needsUpdate=!0,Ha(Vt,he,ue,Xt,Ve,Xn),Ve.side=St,Ve.needsUpdate=!0,et=!0}}et===!0&&(j.updateMultisampleRenderTarget(Ge),j.updateRenderTargetMipmap(Ge))}q.setRenderTarget(He,Qe,Ze),q.setClearColor(Ie,ze),pt!==void 0&&(ue.viewport=pt),q.toneMapping=it}function Ds(w,$,he){const ue=$.isScene===!0?$.overrideMaterial:null;for(let fe=0,Ge=w.length;fe<Ge;fe++){const qe=w[fe],{object:He,geometry:Qe,group:Ze}=qe;let it=qe.material;it.allowOverride===!0&&ue!==null&&(it=ue),He.layers.test(he.layers)&&Ha(He,$,he,Qe,it,Ze)}}function Ha(w,$,he,ue,fe,Ge){w.onBeforeRender(q,$,he,ue,fe,Ge),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),fe.onBeforeRender(q,$,he,ue,w,Ge),fe.transparent===!0&&fe.side===ta&&fe.forceSinglePass===!1?(fe.side=li,fe.needsUpdate=!0,q.renderBufferDirect(he,$,ue,fe,w,Ge),fe.side=Es,fe.needsUpdate=!0,q.renderBufferDirect(he,$,ue,fe,w,Ge),fe.side=ta):q.renderBufferDirect(he,$,ue,fe,w,Ge),w.onAfterRender(q,$,he,ue,fe,Ge)}function Ga(w,$,he){$.isScene!==!0&&($=Jt);const ue=W.get(w),fe=L.state.lights,Ge=L.state.shadowsArray,qe=fe.state.version,He=Se.getParameters(w,fe.state,Ge,$,he,L.state.lightProbeGridArray),Qe=Se.getProgramCacheKey(He);let Ze=ue.programs;ue.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,ue.fog=$.fog;const it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ue.envMap=ye.get(w.envMap||ue.environment,it),ue.envMapRotation=ue.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",oi),Ze=new Map,ue.programs=Ze);let pt=Ze.get(Qe);if(pt!==void 0){if(ue.currentProgram===pt&&ue.lightsStateVersion===qe)return ca(w,He),pt}else He.uniforms=Se.getUniforms(w),Q!==null&&w.isNodeMaterial&&Q.build(w,he,He),w.onBeforeCompile(He,q),pt=Se.acquireProgram(He,Qe),Ze.set(Qe,pt),ue.uniforms=He.uniforms;const et=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=We.uniform),ca(w,He),ue.needsLights=Io(w),ue.lightsStateVersion=qe,ue.needsLights&&(et.ambientLightColor.value=fe.state.ambient,et.lightProbe.value=fe.state.probe,et.directionalLights.value=fe.state.directional,et.directionalLightShadows.value=fe.state.directionalShadow,et.spotLights.value=fe.state.spot,et.spotLightShadows.value=fe.state.spotShadow,et.rectAreaLights.value=fe.state.rectArea,et.ltc_1.value=fe.state.rectAreaLTC1,et.ltc_2.value=fe.state.rectAreaLTC2,et.pointLights.value=fe.state.point,et.pointLightShadows.value=fe.state.pointShadow,et.hemisphereLights.value=fe.state.hemi,et.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,et.spotLightMatrix.value=fe.state.spotLightMatrix,et.spotLightMap.value=fe.state.spotLightMap,et.pointShadowMatrix.value=fe.state.pointShadowMatrix),ue.lightProbeGrid=L.state.lightProbeGridArray.length>0,ue.currentProgram=pt,ue.uniformsList=null,pt}function oa(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function ca(w,$){const he=W.get(w);he.outputColorSpace=$.outputColorSpace,he.batching=$.batching,he.batchingColor=$.batchingColor,he.instancing=$.instancing,he.instancingColor=$.instancingColor,he.instancingMorph=$.instancingMorph,he.skinning=$.skinning,he.morphTargets=$.morphTargets,he.morphNormals=$.morphNormals,he.morphColors=$.morphColors,he.morphTargetsCount=$.morphTargetsCount,he.numClippingPlanes=$.numClippingPlanes,he.numIntersection=$.numClipIntersection,he.vertexAlphas=$.vertexAlphas,he.vertexTangents=$.vertexTangents,he.toneMapping=$.toneMapping}function Ns(w,$){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;U.setFromMatrixPosition($.matrixWorld);for(let he=0,ue=w.length;he<ue;he++){const fe=w[he];if(fe.texture!==null&&fe.boundingBox.containsPoint(U))return fe}return null}function ka(w,$,he,ue,fe){$.isScene!==!0&&($=Jt),j.resetTextureUnits();const Ge=$.fog,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?$.environment:null,He=le===null?q.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ut.workingColorSpace,Qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ze=ye.get(ue.envMap||qe,Qe),it=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!he.morphAttributes.position,Lt=!!he.morphAttributes.normal,on=!!he.morphAttributes.color;let nn=aa;ue.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(nn=q.toneMapping);const Vt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Xt=Vt!==void 0?Vt.length:0,Ve=W.get(ue),Xn=L.state.lights;if(lt===!0&&(ut===!0||w!==Ne)){const kt=w===Ne&&ue.id===Me;We.setState(ue,w,kt)}let St=!1;ue.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Xn.state.version||Ve.outputColorSpace!==He||fe.isBatchedMesh&&Ve.batching===!1||!fe.isBatchedMesh&&Ve.batching===!0||fe.isBatchedMesh&&Ve.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&Ve.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&Ve.instancing===!1||!fe.isInstancedMesh&&Ve.instancing===!0||fe.isSkinnedMesh&&Ve.skinning===!1||!fe.isSkinnedMesh&&Ve.skinning===!0||fe.isInstancedMesh&&Ve.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ve.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Ve.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Ve.instancingMorph===!1&&fe.morphTexture!==null||Ve.envMap!==Ze||ue.fog===!0&&Ve.fog!==Ge||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==We.numPlanes||Ve.numIntersection!==We.numIntersection)||Ve.vertexAlphas!==it||Ve.vertexTangents!==pt||Ve.morphTargets!==et||Ve.morphNormals!==Lt||Ve.morphColors!==on||Ve.toneMapping!==nn||Ve.morphTargetsCount!==Xt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ve.__version=ue.version);let Tn=Ve.currentProgram;St===!0&&(Tn=Ga(ue,$,fe),Q&&ue.isNodeMaterial&&Q.onUpdateProgram(ue,Tn,Ve));let ci=!1,Pi=!1,ui=!1;const Wt=Tn.getUniforms(),cn=Ve.uniforms;if(_.useProgram(Tn.program)&&(ci=!0,Pi=!0,ui=!0),ue.id!==Me&&(Me=ue.id,Pi=!0),Ve.needsLights){const kt=Ns(L.state.lightProbeGridArray,fe);Ve.lightProbeGrid!==kt&&(Ve.lightProbeGrid=kt,Pi=!0)}if(ci||Ne!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Wt.setValue(J,"projectionMatrix",w.projectionMatrix),Wt.setValue(J,"viewMatrix",w.matrixWorldInverse);const qi=Wt.map.cameraPosition;qi!==void 0&&qi.setValue(J,tt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Wt.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Wt.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),Ne!==w&&(Ne=w,Pi=!0,ui=!0)}if(Ve.needsLights&&(Xn.state.directionalShadowMap.length>0&&Wt.setValue(J,"directionalShadowMap",Xn.state.directionalShadowMap,j),Xn.state.spotShadowMap.length>0&&Wt.setValue(J,"spotShadowMap",Xn.state.spotShadowMap,j),Xn.state.pointShadowMap.length>0&&Wt.setValue(J,"pointShadowMap",Xn.state.pointShadowMap,j)),fe.isSkinnedMesh){Wt.setOptional(J,fe,"bindMatrix"),Wt.setOptional(J,fe,"bindMatrixInverse");const kt=fe.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Wt.setValue(J,"boneTexture",kt.boneTexture,j))}fe.isBatchedMesh&&(Wt.setOptional(J,fe,"batchingTexture"),Wt.setValue(J,"batchingTexture",fe._matricesTexture,j),Wt.setOptional(J,fe,"batchingIdTexture"),Wt.setValue(J,"batchingIdTexture",fe._indirectTexture,j),Wt.setOptional(J,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Wt.setValue(J,"batchingColorTexture",fe._colorsTexture,j));const Ii=he.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Y.update(fe,he,Tn),(Pi||Ve.receiveShadow!==fe.receiveShadow)&&(Ve.receiveShadow=fe.receiveShadow,Wt.setValue(J,"receiveShadow",fe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&$.environment!==null&&(cn.envMapIntensity.value=$.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=CR()),Pi){if(Wt.setValue(J,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&vn(cn,ui),Ge&&ue.fog===!0&&Le.refreshFogUniforms(cn,Ge),Le.refreshMaterialUniforms(cn,ue,Re,Te,L.state.transmissionRenderTarget[w.id]),Ve.needsLights&&Ve.lightProbeGrid){const kt=Ve.lightProbeGrid;cn.probesSH.value=kt.texture,cn.probesMin.value.copy(kt.boundingBox.min),cn.probesMax.value.copy(kt.boundingBox.max),cn.probesResolution.value.copy(kt.resolution)}bu.upload(J,oa(Ve),cn,j)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(bu.upload(J,oa(Ve),cn,j),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Wt.setValue(J,"center",fe.center),Wt.setValue(J,"modelViewMatrix",fe.modelViewMatrix),Wt.setValue(J,"normalMatrix",fe.normalMatrix),Wt.setValue(J,"modelMatrix",fe.matrixWorld),ue.uniformsGroups!==void 0){const kt=ue.uniformsGroups;for(let qi=0,Va=kt.length;qi<Va;qi++){const Us=kt[qi];ge.update(Us,Tn),ge.bind(Us,Tn)}}return Tn}function vn(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,$,he){const ue=W.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=$,W.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const he=W.get(w);he.__webglFramebuffer=$,he.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,he=0){le=w,F=$,X=he;let ue=null,fe=!1,Ge=!1;if(w){const He=W.get(w);if(He.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(J.FRAMEBUFFER,He.__webglFramebuffer),P.copy(w.viewport),ne.copy(w.scissor),De=w.scissorTest,_.viewport(P),_.scissor(ne),_.setScissorTest(De),Me=-1;return}else if(He.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(He.__hasExternalTextures)j.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(He.__boundDepthTexture!==it){if(it!==null&&W.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ge=!0);const Ze=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?ue=Ze[$][he]:ue=Ze[$],fe=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?ue=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?ue=Ze[he]:ue=Ze,P.copy(w.viewport),ne.copy(w.scissor),De=w.scissorTest}else P.copy(je).multiplyScalar(Re).floor(),ne.copy(It).multiplyScalar(Re).floor(),De=ct;if(he!==0&&(ue=me),_.bindFramebuffer(J.FRAMEBUFFER,ue)&&_.drawBuffers(w,ue),_.viewport(P),_.scissor(ne),_.setScissorTest(De),fe){const He=W.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,He.__webglTexture,he)}else if(Ge){const He=$;for(let Qe=0;Qe<w.textures.length;Qe++){const Ze=W.get(w.textures[Qe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Qe,Ze.__webglTexture,he,He)}}else if(w!==null&&he!==0){const He=W.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,He.__webglTexture,he)}Me=-1},this.readRenderTargetPixels=function(w,$,he,ue,fe,Ge,qe,He=0){if(!(w&&w.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){_.bindFramebuffer(J.FRAMEBUFFER,Qe);try{const Ze=w.textures[He],it=Ze.format,pt=Ze.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+He),!C.textureFormatReadable(it)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ue&&he>=0&&he<=w.height-fe&&J.readPixels($,he,ue,fe,Z.convert(it),Z.convert(pt),Ge)}finally{const Ze=le!==null?W.get(le).__webglFramebuffer:null;_.bindFramebuffer(J.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,$,he,ue,fe,Ge,qe,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe)if($>=0&&$<=w.width-ue&&he>=0&&he<=w.height-fe){_.bindFramebuffer(J.FRAMEBUFFER,Qe);const Ze=w.textures[He],it=Ze.format,pt=Ze.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+He),!C.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,et),J.bufferData(J.PIXEL_PACK_BUFFER,Ge.byteLength,J.STREAM_READ),J.readPixels($,he,ue,fe,Z.convert(it),Z.convert(pt),0);const Lt=le!==null?W.get(le).__webglFramebuffer:null;_.bindFramebuffer(J.FRAMEBUFFER,Lt);const on=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await CE(J,on,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,et),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ge),J.deleteBuffer(et),J.deleteSync(on),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,he=0){const ue=Math.pow(2,-he),fe=Math.floor(w.image.width*ue),Ge=Math.floor(w.image.height*ue),qe=$!==null?$.x:0,He=$!==null?$.y:0;j.setTexture2D(w,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,qe,He,fe,Ge),_.unbindTexture()},this.copyTextureToTexture=function(w,$,he=null,ue=null,fe=0,Ge=0){let qe,He,Qe,Ze,it,pt,et,Lt,on;const nn=w.isCompressedTexture?w.mipmaps[Ge]:w.image;if(he!==null)qe=he.max.x-he.min.x,He=he.max.y-he.min.y,Qe=he.isBox3?he.max.z-he.min.z:1,Ze=he.min.x,it=he.min.y,pt=he.isBox3?he.min.z:0;else{const cn=Math.pow(2,-fe);qe=Math.floor(nn.width*cn),He=Math.floor(nn.height*cn),w.isDataArrayTexture?Qe=nn.depth:w.isData3DTexture?Qe=Math.floor(nn.depth*cn):Qe=1,Ze=0,it=0,pt=0}ue!==null?(et=ue.x,Lt=ue.y,on=ue.z):(et=0,Lt=0,on=0);const Vt=Z.convert($.format),Xt=Z.convert($.type);let Ve;$.isData3DTexture?(j.setTexture3D($,0),Ve=J.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(j.setTexture2DArray($,0),Ve=J.TEXTURE_2D_ARRAY):(j.setTexture2D($,0),Ve=J.TEXTURE_2D),_.activeTexture(J.TEXTURE0),_.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment);const Xn=_.getParameter(J.UNPACK_ROW_LENGTH),St=_.getParameter(J.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(J.UNPACK_SKIP_PIXELS),ci=_.getParameter(J.UNPACK_SKIP_ROWS),Pi=_.getParameter(J.UNPACK_SKIP_IMAGES);_.pixelStorei(J.UNPACK_ROW_LENGTH,nn.width),_.pixelStorei(J.UNPACK_IMAGE_HEIGHT,nn.height),_.pixelStorei(J.UNPACK_SKIP_PIXELS,Ze),_.pixelStorei(J.UNPACK_SKIP_ROWS,it),_.pixelStorei(J.UNPACK_SKIP_IMAGES,pt);const ui=w.isDataArrayTexture||w.isData3DTexture,Wt=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const cn=W.get(w),Ii=W.get($),kt=W.get(cn.__renderTarget),qi=W.get(Ii.__renderTarget);_.bindFramebuffer(J.READ_FRAMEBUFFER,kt.__webglFramebuffer),_.bindFramebuffer(J.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Va=0;Va<Qe;Va++)ui&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,W.get(w).__webglTexture,fe,pt+Va),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,W.get($).__webglTexture,Ge,on+Va)),J.blitFramebuffer(Ze,it,qe,He,et,Lt,qe,He,J.DEPTH_BUFFER_BIT,J.NEAREST);_.bindFramebuffer(J.READ_FRAMEBUFFER,null),_.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(fe!==0||w.isRenderTargetTexture||W.has(w)){const cn=W.get(w),Ii=W.get($);_.bindFramebuffer(J.READ_FRAMEBUFFER,de),_.bindFramebuffer(J.DRAW_FRAMEBUFFER,ee);for(let kt=0;kt<Qe;kt++)ui?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,cn.__webglTexture,fe,pt+kt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,cn.__webglTexture,fe),Wt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ii.__webglTexture,Ge,on+kt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ii.__webglTexture,Ge),fe!==0?J.blitFramebuffer(Ze,it,qe,He,et,Lt,qe,He,J.COLOR_BUFFER_BIT,J.NEAREST):Wt?J.copyTexSubImage3D(Ve,Ge,et,Lt,on+kt,Ze,it,qe,He):J.copyTexSubImage2D(Ve,Ge,et,Lt,Ze,it,qe,He);_.bindFramebuffer(J.READ_FRAMEBUFFER,null),_.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Wt?w.isDataTexture||w.isData3DTexture?J.texSubImage3D(Ve,Ge,et,Lt,on,qe,He,Qe,Vt,Xt,nn.data):$.isCompressedArrayTexture?J.compressedTexSubImage3D(Ve,Ge,et,Lt,on,qe,He,Qe,Vt,nn.data):J.texSubImage3D(Ve,Ge,et,Lt,on,qe,He,Qe,Vt,Xt,nn):w.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ge,et,Lt,qe,He,Vt,Xt,nn.data):w.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ge,et,Lt,nn.width,nn.height,Vt,nn.data):J.texSubImage2D(J.TEXTURE_2D,Ge,et,Lt,qe,He,Vt,Xt,nn);_.pixelStorei(J.UNPACK_ROW_LENGTH,Xn),_.pixelStorei(J.UNPACK_IMAGE_HEIGHT,St),_.pixelStorei(J.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(J.UNPACK_SKIP_ROWS,ci),_.pixelStorei(J.UNPACK_SKIP_IMAGES,Pi),Ge===0&&$.generateMipmaps&&J.generateMipmap(Ve),_.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){F=0,X=0,le=null,_.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}const fy={type:"change"},lm={type:"start"},ex={type:"end"},_u=new nm,dy=new ys,DR=Math.cos(70*Tp.DEG2RAD),Rn=new te,si=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class NR extends Lb{constructor(e,n=null){super(e,n),this.state=tn.NONE,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rl.ROTATE,MIDDLE:rl.DOLLY,RIGHT:rl.PAN},this.touches={ONE:il.ROTATE,TWO:il.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new bs,this._lastTargetPosition=new te,this._quat=new bs().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fv,this._sphericalDelta=new Fv,this._scale=1,this._panOffset=new te,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new te,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LR.bind(this),this._onPointerDown=UR.bind(this),this._onPointerUp=OR.bind(this),this._onContextMenu=GR.bind(this),this._onMouseWheel=zR.bind(this),this._onKeyDown=BR.bind(this),this._onTouchStart=FR.bind(this),this._onTouchMove=HR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=IR.bind(this),this._interceptControlDown=kR.bind(this),this._interceptControlUp=VR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fy),this.update(),this.state=tn.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Rn.copy(n).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=si:r>Math.PI&&(r-=si),o<-Math.PI?o+=si:o>Math.PI&&(o-=si),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const m=Rn.length();f=this._clampDistance(m*this._scale);const p=m-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const m=new te(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const h=new te(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(m),this.object.updateMatrixWorld(),f=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(_u.origin.copy(this.object.position),_u.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_u.direction))<DR?this.object.lookAt(this.target):(dy.setFromNormalAndCoplanarPoint(this.object.up,this.target),_u.intersectPlane(dy,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(fy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?si/60*this.autoRotateSpeed*e:si/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rn.setFromMatrixColumn(n,0),Rn.multiplyScalar(-e),this._panOffset.add(Rn)}_panUp(e,n){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(n,1):(Rn.setFromMatrixColumn(n,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(e),this._panOffset.add(Rn)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Rn.copy(o).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=n-r.top,f=r.width,m=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,m=(e.pageY+n.y)*.5;this._updateZoomParameters(f,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new st,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function UR(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function LR(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function OR(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ex),this.state=tn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function PR(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=tn.DOLLY;break;case rl.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}break;case rl.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(lm)}function IR(a){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function zR(a){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(a.preventDefault(),this.dispatchEvent(lm),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(ex))}function BR(a){this.enabled!==!1&&this._handleKeyDown(a)}function FR(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case il.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=tn.TOUCH_ROTATE;break;case il.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case il.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=tn.TOUCH_DOLLY_PAN;break;case il.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(lm)}function HR(a){switch(this._trackPointer(a),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=tn.NONE}}function GR(a){this.enabled!==!1&&a.preventDefault()}function kR(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VR(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yo=new te;function Ui(a,e,n,r,o,c){const f=2*Math.PI*o/4,m=Math.max(c-2*o,0),p=Math.PI/4;yo.copy(e),yo[r]=0,yo.normalize();const h=.5*f/(f+m),v=1-yo.angleTo(a)/p;return Math.sign(yo[n])===1?v*h:m/(f+m)+h+h*(1-v)}class om extends As{constructor(e=1,n=1,r=1,o=2,c=.1){const f=o*2+1;if(c=Math.min(e/2,n/2,r/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:r,segments:o,radius:c},f===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const p=new te,h=new te,v=new te(e,n,r).divideScalar(2).subScalar(c),M=this.attributes.position.array,x=this.attributes.normal.array,E=this.attributes.uv.array,A=M.length/6,N=new te,g=.5/f;for(let y=0,z=0;y<M.length;y+=3,z+=2)switch(p.fromArray(M,y),h.copy(p),h.x-=Math.sign(h.x)*g,h.y-=Math.sign(h.y)*g,h.z-=Math.sign(h.z)*g,h.normalize(),M[y+0]=v.x*Math.sign(p.x)+h.x*c,M[y+1]=v.y*Math.sign(p.y)+h.y*c,M[y+2]=v.z*Math.sign(p.z)+h.z*c,x[y+0]=h.x,x[y+1]=h.y,x[y+2]=h.z,Math.floor(y/A)){case 0:N.set(1,0,0),E[z+0]=Ui(N,h,"z","y",c,r),E[z+1]=1-Ui(N,h,"y","z",c,n);break;case 1:N.set(-1,0,0),E[z+0]=1-Ui(N,h,"z","y",c,r),E[z+1]=1-Ui(N,h,"y","z",c,n);break;case 2:N.set(0,1,0),E[z+0]=1-Ui(N,h,"x","z",c,e),E[z+1]=Ui(N,h,"z","x",c,r);break;case 3:N.set(0,-1,0),E[z+0]=1-Ui(N,h,"x","z",c,e),E[z+1]=1-Ui(N,h,"z","x",c,r);break;case 4:N.set(0,0,1),E[z+0]=1-Ui(N,h,"x","y",c,e),E[z+1]=1-Ui(N,h,"y","x",c,n);break;case 5:N.set(0,0,-1),E[z+0]=Ui(N,h,"x","y",c,e),E[z+1]=1-Ui(N,h,"y","x",c,n);break}}static fromJSON(e){return new om(e.width,e.height,e.depth,e.segments,e.radius)}}const No="city-tycoon-v1",wp="city-tycoon-manual-v1",tx=720*60*60*1e3,XR=a=>a===void 0||Array.isArray(a)&&a.length<=13&&a.every(e=>typeof e=="string"),WR=(a,e)=>a==null||a&&Number.isInteger(a.sourceId)&&a.sourceId>=0&&a.sourceId<e&&Number.isInteger(a.targetId)&&a.targetId>=0&&a.targetId<e&&typeof a.cardId=="string"&&(a.targetPosition===null||a.targetPosition===void 0||Number.isInteger(a.targetPosition)),YR=(a,e,n)=>a&&a.id===e&&typeof a.name=="string"&&Number.isFinite(a.cash)&&a.cash>=0&&Number.isInteger(a.pos)&&a.pos>=0&&a.pos<32&&[0,1].includes(a.jail)&&typeof a.bankrupt=="boolean"&&(a.diceCount===void 0||[1,2].includes(a.diceCount))&&XR(a.skillHand)&&(a.skillUsedThisTurn===void 0||typeof a.skillUsedThisTurn=="boolean")&&(a.slowTurns===void 0||Number.isInteger(a.slowTurns)&&a.slowTurns>=0)&&(a.rentShield===void 0||a.rentShield===0||a.rentShield===1)&&(a.rentMultiplier===void 0||a.rentMultiplier===1||a.rentMultiplier===2),qR=(a,e)=>a&&typeof a=="object"&&!Array.isArray(a)&&Object.entries(a).every(([n,r])=>Number.isInteger(+n)&&+n>0&&+n<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+n)&&r&&Number.isInteger(r.owner)&&r.owner>=0&&r.owner<e&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5);function ku(a){var e;return!((a==null?void 0:a.version)===1&&Array.isArray(a.players)&&a.players.length>=2&&a.players.length<=4&&a.players.every((n,r)=>YR(n,r,a.players.length)))||!qR(a.lots,a.players.length)||!Number.isInteger(a.turn)||a.turn<0||a.turn>=a.players.length||!Number.isInteger(a.round)||a.round<1||!(a.maxRounds===void 0||a.maxRounds===null||Number.isInteger(a.maxRounds)&&a.maxRounds>=1)||!(a.maxRounds===void 0||a.maxRounds===null||a.round<=a.maxRounds+1)||!(a.inflationRate===void 0||Number.isInteger(a.inflationRate)&&a.inflationRate>=0&&a.inflationRate<=10)||!(a.priceIndex===void 0||Number.isFinite(a.priceIndex)&&a.priceIndex>=1&&a.priceIndex<=10)||!["ready","moving","decision","end","finished"].includes(a.stage)||!Array.isArray(a.dice)||![1,2].includes(a.dice.length)||!a.dice.every(n=>Number.isInteger(n)&&n>=1&&n<=6)||!Number.isInteger(a.remaining)||a.remaining<0||a.remaining>12||a.stage==="moving"&&!(a.remaining>0&&Number.isInteger(a.eventIndex)&&a.eventIndex>=0&&a.eventIndex<8)||!Array.isArray(a.log)||!a.log.every(n=>n&&typeof n.text=="string"&&typeof n.kind=="string")||typeof a.notice!="string"||!(a.event===null||a.event&&typeof a.event.title=="string"&&(a.event.amount===void 0||Number.isFinite(a.event.amount)))||!(a.skillDeck===void 0||Array.isArray(a.skillDeck)&&a.skillDeck.every(n=>typeof n=="string"))||!(a.skillDiscard===void 0||Array.isArray(a.skillDiscard)&&a.skillDiscard.every(n=>typeof n=="string"))||a.skillOverflow!==void 0&&!(a.skillOverflow===null||Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)&&a.skillOverflow.playerId>=0&&a.skillOverflow.playerId<a.players.length)||!WR(a.pendingSkill,a.players.length)||a.limitBuildings!==void 0&&typeof a.limitBuildings!="boolean"||a.stage==="finished"&&!(Number.isInteger(a.winner)&&a.winner>=0&&a.winner<a.players.length)||a.bank!==void 0&&!(Number.isInteger(a.bank.houses)&&a.bank.houses>=0&&Number.isInteger(a.bank.hotels)&&a.bank.hotels>=0)?!1:(a.buildAvailable===void 0||typeof a.buildAvailable=="boolean")&&(a.buildUsed===void 0||typeof a.buildUsed=="boolean")}const Dp=(a,e)=>a&&Number.isFinite(a.savedAt)&&a.savedAt<=e&&e-a.savedAt<tx&&ku(a.game);function Uo(a=localStorage,e=Date.now()){const n=a.getItem(wp),r=n?JSON.parse(n):[];if(!Array.isArray(r))throw new Error("存檔清單格式損壞。");const o=r.filter(f=>Dp(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,m)=>m.savedAt-f.savedAt).slice(0,10);JSON.stringify(o)!==n&&a.setItem(wp,JSON.stringify(o));const c=a.getItem(No);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!Dp(f,e))&&a.removeItem(No)}return o}function ZR(a,e,n=!1,r=localStorage,o=Date.now()){if(!ku(a))throw new Error("遊戲狀態無法儲存。");const c=Uo(r,o);if(c.length>=10&&!n)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const m=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${a.round}`,savedAt:o,game:structuredClone(a)},...c].slice(0,10);return r.setItem(wp,JSON.stringify(m)),m}function KR(a,e=localStorage,n=Date.now()){const r=Uo(e,n).find(o=>o.id===a);if(!r)throw new Error("存檔已過期或不存在。");return structuredClone(r.game)}function Np(a,e=localStorage,n=Date.now()){e.setItem(No,JSON.stringify({savedAt:n,game:a}))}function QR(a=localStorage,e=Date.now()){const n=a.getItem(No);if(!n)return null;const r=JSON.parse(n);return ku(r)?(Np(r,a,e),r):Dp(r,e)?r.game:(a.removeItem(No),null)}const Lh={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]},skillUse:{mood:"proud",label:"出牌",emoji:"✨",priority:50,messages:["技能卡啟動！","這張牌用得正是時候！","城市局勢，照我的計畫走！","效果準備生效！","漂亮的一手牌！"]},skillTarget:{mood:"surprised",label:"中招",emoji:"⚡",priority:55,messages:["等等，這張牌是對我的？","局勢突然變了！","這招來得太快了吧！","我的計畫被打亂了！","需要想辦法應對！"]},skillCounter:{mood:"proud",label:"反制",emoji:"🛡️",priority:65,messages:["擋下來了！","這張反制卡沒有浪費！","想算計我，還早得很！","護盾成功！","漂亮化解危機！"]},skillReflect:{mood:"proud",label:"反彈",emoji:"↩️",priority:70,messages:["原路奉還！","這招現在回到你身上！","反彈成功！","攻擊者變成自己了！","這就是出牌時機！"]}};function Si(a,{category:e,summary:n,participants:r}){const o=Lh[e];if(!o||!(r!=null&&r.length))return;a.emotionSequence=(a.emotionSequence||0)+1;const c=a.emotionSequence,f=r.map(({playerId:m,amountDelta:p,category:h})=>{const v=Lh[h]||o;return{playerId:m,mood:v.mood,moodLabel:v.label,emoji:v.emoji,amountDelta:p,message:v.messages[(c+m)%v.messages.length]}});a.emotionEvents||(a.emotionEvents=[]),a.emotionEvents.push({id:c,category:e,summary:n,priority:Math.max(o.priority,...r.map(({category:m})=>{var p;return((p=Lh[m])==null?void 0:p.priority)||0})),players:f})}const Hn=["#61ac78","#62a6da","#e7b942","#de809a"],JR=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],jR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],Gt=jR.map((a,e)=>{const n={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},r=Math.floor(e/4);return{id:e,name:a,type:n[e]||"property",group:r,color:JR[r],price:1e3+r*300+e%4*100}}),yt=a=>"$"+a.toLocaleString("en-US"),cm=1,nx=5,$R=10,ix=10,Gn=(a,e,n=Math.round)=>n(e*((a==null?void 0:a.priceIndex)??1)),al=(a,e)=>Gn(a,e.price),ml=(a,e)=>Gn(e,a.price*.6),e3=40,Ou=3,sl=[{id:"trap",name:"陷害卡",type:"control",timing:"active",icon:"⛓️",summary:"指定玩家進入監獄",target:"player"},{id:"slow",name:"龜速卡",type:"control",timing:"active",icon:"🐌",summary:"目標 3 回合最多走 1 格",target:"player"},{id:"teleport",name:"傳送卡",type:"movement",timing:"active",icon:"✦",summary:"將玩家移到合法位置",target:"player"},{id:"get-out",name:"出獄卡",type:"utility",timing:"active",icon:"🔓",summary:"解除自己的監獄狀態"},{id:"rent-shield",name:"免租卡",type:"defense",timing:"active",icon:"🛡️",summary:"下一次租金免除"},{id:"rent-double",name:"租金加倍卡",type:"money",timing:"active",icon:"×2",summary:"下一次收租提高為 2 倍"},{id:"position-swap",name:"位置交換卡",type:"movement",timing:"active",icon:"⇄",summary:"交換兩名玩家位置",target:"player"},{id:"birthday",name:"生日派對卡",type:"money",timing:"active",icon:"🎂",summary:"其他玩家各支付一筆錢"},{id:"subsidy",name:"城市補助卡",type:"money",timing:"active",icon:"🪙",summary:"從銀行獲得小額補助"},{id:"counter",name:"反制卡",type:"defense",timing:"reaction",icon:"✋",summary:"取消作用在自己的技能"},{id:"reflect",name:"反彈卡",type:"defense",timing:"reaction",icon:"↩",summary:"將單一指定技能反彈"},{id:"redraw",name:"幸運重抽卡",type:"utility",timing:"active",icon:"⟳",summary:"放棄手牌並重新抽卡"},{id:"land-swap",name:"換地卡",type:"control",timing:"active",icon:"🏠",summary:"交換兩塊地產所有權",target:"land"}],Ms=sl.map(a=>a.id),Vu=a=>sl.find(e=>e.id===a)||null,Tu=Gt.filter(a=>a.type!=="gojail").map(a=>a.id),ax=a=>a===null?null:Number.isInteger(Number(a))&&Number(a)>=1?Number(a):e3,um=a=>Math.max(0,Math.min($R,Number.isFinite(Number(a))?Math.round(Number(a)):cm)),t3=a=>Math.min(nx,um(a)),sx=a=>a!==!1,Pu={houses:32,hotels:12},fm=a=>{const e=[...a];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},n3=a=>{let e=0,n=0;for(const r of Object.values(a.lots||{}))r.level===5?n++:e+=Math.max(0,Math.min(4,r.level||0));return{houses:Math.max(0,Pu.houses-e),hotels:Math.max(0,Pu.hotels-n)}},Rs=a=>a.bank&&Number.isInteger(a.bank.houses)&&Number.isInteger(a.bank.hotels)?a.bank:n3(a),i3=a=>Array.isArray(a)?a.filter(e=>Ms.includes(e)).slice(0,Ms.length):[],a3=a=>a&&Number.isInteger(a.sourceId)&&Number.isInteger(a.targetId)&&Ms.includes(a.cardId)?{sourceId:a.sourceId,targetId:a.targetId,cardId:a.cardId,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null}:null,rx=a=>{var e;return{...a,limitBuildings:sx(a.limitBuildings),maxRounds:ax(a.maxRounds),inflationRate:um(a.inflationRate??0),priceIndex:Math.max(1,Math.min(ix,Number.isFinite(a.priceIndex)?a.priceIndex:1)),players:a.players.map((n,r)=>({...n,diceCount:n.diceCount??2,color:n.color||Hn[r],human:n.human===void 0?r===0:!!n.human,skillHand:i3(n.skillHand),skillUsedThisTurn:n.skillUsedThisTurn===!0,slowTurns:Number.isInteger(n.slowTurns)&&n.slowTurns>0?n.slowTurns:0,rentShield:n.rentShield===1?1:0,rentMultiplier:n.rentMultiplier===2?2:1})),skillDeck:Array.isArray(a.skillDeck)?a.skillDeck.filter(n=>Ms.includes(n)):fm(Ms),skillDiscard:Array.isArray(a.skillDiscard)?a.skillDiscard.filter(n=>Ms.includes(n)):[],skillOverflow:Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)?{playerId:a.skillOverflow.playerId}:null,pendingSkill:a3(a.pendingSkill),bank:{...Rs(a)},buildAvailable:a.buildAvailable===!0,buildUsed:a.buildUsed===!0,emotionEvents:[],emotionSequence:Number.isInteger(a.emotionSequence)?a.emotionSequence:0}},s3=[["你",Hn[0],!0],["艾米",Hn[1],!1],["小傑",Hn[2],!1],["喵喵",Hn[3],!1]];function Up(a={}){const e=Math.min(4,Math.max(2,Number(a.count)||4)),n=s3.slice(0,e).map(([o,c,f],m)=>{var h;const p=((h=a.players)==null?void 0:h[m])||{};return{id:m,diceCount:2,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():o,color:p.color||c,human:p.human===void 0?f:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1,skillHand:[],skillUsedThisTurn:!1,slowTurns:0,rentShield:0,rentMultiplier:1}}),r=t3(a.inflationRate??cm);return{version:1,players:n,lots:{},skillDeck:fm(Ms),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...Pu},limitBuildings:sx(a.limitBuildings),turn:0,round:1,maxRounds:ax(a.maxRounds),inflationRate:r,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${r}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const Ht=(a,e,n="info")=>{a.notice=e,a.log.unshift({text:e,kind:n}),a.log=a.log.slice(0,40)},Ua=(a,e)=>Gt.filter(n=>{var r;return((r=a.lots[n.id])==null?void 0:r.owner)===e}),r3=(a,e,n)=>Gt.filter(r=>r.type==="property"&&r.group===e.group).every(r=>{var o;return((o=a.lots[r.id])==null?void 0:o.owner)===n}),Lp=(a,e)=>{let n=a.lots[e.id];return n?Gn(a,Math.round(e.price*.18)*(n.level?[1,3,6,10,15,22][n.level]:r3(a,e,n.owner)?2:1)):0},ul=(a,e)=>a.players[e].cash+Ua(a,e).reduce((n,r)=>n+Gn(a,r.price+(a.lots[r.id].level||0)*Math.round(r.price*.6)),0),Op=(a,e,n=a.turn)=>{const r=Gt[e],o=a.lots[e],c=Rs(a);return!r||r.type!=="property"||!o||o.owner!==n||a.turn!==n||a.stage!=="end"||a.selected!==e||!a.buildAvailable||a.buildUsed||o.level>=5||a.players[n].cash<ml(r,a)?!1:a.limitBuildings===!1||(o.level<4?c.houses>0:c.hotels>0)};function lx(a,e){const n=a.bank||Rs(a);e.level===5?n.hotels++:n.houses+=Math.max(0,Math.min(4,e.level||0)),a.bank=n}function ox(a){const e=a.players.filter(n=>!n.bankrupt);e.length===1&&(a.winner=e[0].id,a.stage="finished",Ht(a,`${e[0].name}成為城市大亨！`))}const Pp=new Set(["trap","slow","teleport","get-out","rent-shield","rent-double","position-swap","birthday","subsidy","redraw","land-swap"]);function cx(a,e,n="事件中，"){const r=a.players[e];if(!r||r.skillHand.length>=Ms.length)return null;!a.skillDeck.length&&a.skillDiscard.length&&(a.skillDeck=fm(a.skillDiscard),a.skillDiscard=[]);const o=a.skillDeck.shift();if(!o)return null;r.skillHand.push(o);const c=Vu(o);return r.skillHand.length>Ou&&(a.skillOverflow={playerId:e}),Ht(a,`${r.name}${n}獲得技能卡「${c.name}」。`,"skill"),c}function Iu(a,e,n){const r=e.skillHand.indexOf(n);return r<0?!1:(e.skillHand.splice(r,1),a.skillDiscard.push(n),!0)}function Ip(a,e){return Number.isInteger(e)&&e>=0&&e<a.players.length&&!a.players[e].bankrupt}function l3(a,e){return{counter:e.skillHand.includes("counter"),reflect:e.skillHand.includes("reflect")}}function zp(a,e,n,r,o,{reflected:c=!1}={}){if(e.id==="trap"&&(r.pos=8,r.jail=1),e.id==="slow"&&(r.slowTurns=3),e.id==="teleport"){const p=r.pos;r.pos=o.targetPosition,ux(a,r.pos,{playerId:r.id,flow:!1,drawSkill:!1}),Ht(a,`${r.name}由${n.name}使用傳送卡，從${Gt[p].name}移動至${Gt[r.pos].name}。`,"skill")}if(e.id==="get-out"&&(n.jail=0),e.id==="rent-shield"&&(n.rentShield=1),e.id==="rent-double"&&(n.rentMultiplier=2),e.id==="position-swap"&&([n.pos,r.pos]=[r.pos,n.pos]),e.id==="birthday"){const p=Gn(a,300);for(const h of a.players)h.id!==n.id&&!h.bankrupt&&Au(a,h.id,p,n.id,"skill")}if(e.id==="subsidy"){const p=Gn(a,800);n.cash+=p,Si(a,{category:"windfall",summary:`${n.name}使用城市補助卡，獲得 ${yt(p)}。`,participants:[{playerId:n.id,amountDelta:p}]})}const f=e.target==="player"?`，目標為${r.name}`:e.target==="land"?`，交換${Gt[o.ownLotId].name}與${Gt[o.targetLotId].name}`:"",m=`${c?"反彈後，":""}${n.name}使用${e.name}${f}。`;if(Ht(a,m,"skill"),!c){const p=[{playerId:n.id,category:"skillUse"}];e.target==="player"&&r.id!==n.id&&p.push({playerId:r.id,category:"skillTarget"}),Si(a,{category:"skillUse",summary:m,participants:p})}e.id==="land-swap"&&Ht(a,`${Gt[o.ownLotId].name}與${Gt[o.targetLotId].name}的所有權已交換。`,"skill")}function o3(a,e="pass"){const n=a.pendingSkill;if(!n)return!1;const r=a.players[n.sourceId],o=a.players[n.targetId],c=Vu(n.cardId);if(!r||!o||!c)return a.pendingSkill=null,!1;if(e==="counter"&&Iu(a,o,"counter")){a.pendingSkill=null;const f=`${o.name}使用反制卡，取消${r.name}的${c.name}。`;return Ht(a,f,"skill"),Si(a,{category:"skillCounter",summary:f,participants:[{playerId:o.id,category:"skillCounter"},{playerId:r.id,category:"skillTarget"}]}),!0}if(e==="reflect"&&c.target==="player"&&Iu(a,o,"reflect")&&Ip(a,r.id)){a.pendingSkill=null,zp(a,c,r,r,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId},{reflected:!0});const f=`${o.name}使用反彈卡，將${c.name}反彈給${r.name}。`;return Ht(a,f,"skill"),Si(a,{category:"skillReflect",summary:f,participants:[{playerId:o.id,category:"skillReflect"},{playerId:r.id,category:"skillTarget"}]}),!0}return e!=="pass"?!1:(a.pendingSkill=null,zp(a,c,r,o,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId}),!0)}function c3(a,e){var m,p;const n=a.players[a.turn],r=e.overflowUse===!0&&((m=a.skillOverflow)==null?void 0:m.playerId)===a.turn&&a.stage!=="finished";if(!(a.stage==="ready"&&!a.skillOverflow||r)||!(n!=null&&n.human)&&!n||n.bankrupt||n.skillUsedThisTurn||a.pendingSkill)return!1;const c=Vu(e.cardId);if(!c||c.timing!=="active"||!Pp.has(c.id)||!n.skillHand.includes(c.id))return!1;const f=Ip(a,e.targetId)?a.players[e.targetId]:null;if(c.target==="player"&&(!f||f.id===n.id)||c.id==="slow"&&f.slowTurns>0||c.id==="get-out"&&n.jail===0||c.id==="teleport"&&(!Number.isInteger(e.targetPosition)||!Tu.includes(e.targetPosition)))return!1;if(c.id==="land-swap"){const h=a.lots[e.ownLotId],v=a.lots[e.targetLotId];if(!h||!v||h.owner!==n.id||v.owner===n.id||!Gt[e.ownLotId]||!Gt[e.targetLotId]||Gt[e.ownLotId].type!=="property"||Gt[e.targetLotId].type!=="property"||!Ip(a,v.owner))return!1;[h.owner,v.owner]=[v.owner,h.owner]}if(Iu(a,n,c.id),n.skillUsedThisTurn=!0,((p=a.skillOverflow)==null?void 0:p.playerId)===n.id&&n.skillHand.length<=Ou&&(a.skillOverflow=null),c.target==="player"){const h=l3(a,f);if(h.counter||h.reflect)return a.pendingSkill={sourceId:n.id,targetId:f.id,cardId:c.id,targetPosition:Number.isInteger(e.targetPosition)?e.targetPosition:null,ownLotId:e.ownLotId,targetLotId:e.targetLotId},Ht(a,`${n.name}使用${c.name}，等待${f.name}回應。`,"skill"),!0}return zp(a,c,n,f||n,e),!0}function u3(a,e){var o,c;const n=(o=a.skillOverflow)==null?void 0:o.playerId;if(!Number.isInteger(n)||n<0||n>=a.players.length)return!1;const r=a.players[n];return r.skillHand.length<=Ou||!Iu(a,r,e.cardId)?!1:(r.skillHand.length<=Ou&&(a.skillOverflow=null),Ht(a,`${r.name}放棄技能卡「${((c=Vu(e.cardId))==null?void 0:c.name)||e.cardId}」。`,"skill"),!0)}function Au(a,e,n,r=null,o="tax"){let c=a.players[e],f=0;for(const p of Ua(a,e).sort((h,v)=>h.price-v.price)){if(c.cash>=n)break;const h=Gn(a,p.price+a.lots[p.id].level*Math.round(p.price*.6),v=>Math.floor(v*.5));c.cash+=h,f+=h,lx(a,a.lots[p.id]),delete a.lots[p.id],Ht(a,`${c.name}變賣${p.name}，回收 ${yt(h)}。`,"sell")}f>0&&Si(a,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${yt(f)}。`,participants:[{playerId:e,amountDelta:f}]});const m=Math.min(c.cash,n);if(c.cash-=m,r!==null&&(a.players[r].cash+=m),m>0)if(r!==null){const p=a.players[r];Si(a,{category:"rentPaid",summary:`${c.name}支付 ${yt(m)} 給${p.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-m},{playerId:r,category:"rentReceived",amountDelta:m}]})}else Si(a,{category:o==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${yt(m)}。`,participants:[{playerId:e,amountDelta:-m}]});if(m<n){c.bankrupt=!0;const p=n-m;Ht(a,`${c.name}資金不足，宣告破產。`,"bankrupt"),Si(a,{category:"bankruptcy",summary:`${c.name}無法支付 ${yt(p)}，宣告破產。`,participants:[{playerId:e,amountDelta:-p}]}),ox(a)}}function ux(a,e,n={}){const r=n.playerId??a.turn,o=n.flow!==!1,c=a.players[r],f=Gt[c.pos];if(o&&(a.selected=f.id,a.stage="end",a.buildAvailable=!1,a.buildUsed=!1),f.type==="property"){const m=a.lots[f.id];if(m)if(m.owner!==c.id){let p=Lp(a,f);const h=a.players[m.owner];h.rentMultiplier===2&&(p*=2,h.rentMultiplier=1),c.rentShield===1?(c.rentShield=0,Ht(a,`${c.name}使用免租卡，免除${f.name}的 ${yt(p)} 租金。`,"skill")):(Ht(a,`${c.name}在${f.name}支付 ${yt(p)} 租金給${h.name}。`,"rent"),Au(a,c.id,p,m.owner,"rent"))}else{a.buildAvailable=!0;const p=m.level===5?"已有旅館。":m.level===4?Rs(a).hotels?"可以升級為旅館。":"銀行旅館已用完。":Rs(a).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";Ht(a,`${c.name}回到自己的${f.name}，${p}`)}else{const p=al(a,f);o&&(a.stage=c.cash>=p?"decision":"end"),Ht(a,o?`${c.name}抵達${f.name}，${c.cash>=p?"可以購買這塊地產。":"現金不足以購買。"}`:`${c.name}抵達${f.name}，未進行購買。`)}}else if(f.type==="tax"){const m=Gn(a,f.id===6?1200:1800);Ht(a,`${c.name}支付${f.name} ${yt(m)}。`,"tax"),Au(a,c.id,m,null,"tax")}else if(f.type==="gojail")c.pos=8,c.jail=1,Ht(a,`${c.name}前往監獄，下次回合暫停一次。`,"jail");else if(f.type==="chance"||f.type==="fund"){const m=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[p,h,v,M]=m[Math.abs(e||0)%m.length];if(M){const E=a.inflationRate;a.inflationRate=um(E+M);const A=a.inflationRate-E,N=A===0?`通膨率維持 ${a.inflationRate}%（已達上限或下限）`:`通膨率${A>0?"提高":"降低"}至 ${a.inflationRate}%`;a.event={title:p,body:h,amount:0,kind:"inflation",inflationDelta:A,inflationRate:a.inflationRate},Ht(a,`${c.name}抽到「${p}」：${N}，新通膨率於下一輪影響物價。`,"inflation")}else{const E=Gn(a,v);a.event={title:p,body:h,amount:E},Ht(a,`${c.name}抽到「${p}」：${E>0?"獲得":"支付"} ${yt(Math.abs(E))}。`,"chance"),E>0?(c.cash+=E,Si(a,{category:"windfall",summary:`${c.name}獲得 ${yt(E)}。`,participants:[{playerId:c.id,amountDelta:E}]})):Au(a,c.id,-E,null,"chance")}const x=n.drawSkill===!1?null:f.type==="chance"?cx(a,c.id,"機會事件中，"):null;x&&(a.event={...a.event,skillCardId:x.id,skillCardName:x.name})}else Ht(a,f.type==="start"?`${c.name}抵達起點。`:f.type==="park"?`${c.name}在城市公園休息，享受片刻悠閒。`:`${c.name}只是探訪監獄，自由通行。`);ox(a)}function f3(a,e){var o;if(e.type==="NEW")return Up(e.config);if(e.type==="LOAD")return ku(e.game)?rx(structuredClone(e.game)):a;const n=structuredClone(a),r=n.players[n.turn];switch(n.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(n.stage!=="ready"||!r.human||r.bankrupt||r.jail||![1,2].includes(e.count))return a;r.diceCount=e.count;break;case"ROLL":if(n.stage!=="ready"||r.bankrupt||n.pendingSkill)return a;if(r.jail){r.jail--,n.stage="end",Ht(n,`${r.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(r.diceCount??2)||!e.dice.every(p=>Number.isInteger(p)&&p>=1&&p<=6))return a;n.dice=[...e.dice];const c=e.dice.reduce((p,h)=>p+h,0),f=r.slowTurns>0;r.slowTurns=Math.max(0,r.slowTurns-(f?1:0)),n.remaining=f?Math.min(1,c):c,n.event=null,n.stage="moving",n.eventIndex=e.eventIndex,Ht(n,`${r.name}擲出 ${e.dice.join(" + ")}，前進 ${n.remaining} 格。${f?"龜速效果生效，本回合最多前進 1 格。":""}`,"dice");break;case"STEP":if(n.stage!=="moving")return a;if(r.pos=(r.pos+1)%32,r.pos===0){const p=Gn(n,2e3);r.cash+=p,Ht(n,`${r.name}通過起點，領取 ${yt(p)}。`,"salary"),Si(n,{category:"salary",summary:`${r.name}經過起點，獲得 ${yt(p)}。`,participants:[{playerId:r.id,amountDelta:p}]})}n.remaining--;const m=Gt[r.pos].type==="fund"?cx(n,r.id,n.remaining===0?"抵達城市基金格，":"經過城市基金格，"):null;n.remaining===0&&(ux(n,n.eventIndex),m&&n.event&&(n.event={...n.event,skillCardId:m.id,skillCardName:m.name}));break;case"BUY":{if(n.stage!=="decision")return a;const p=Gt[r.pos],h=al(n,p);if(n.lots[p.id]||r.cash<h)return a;r.cash-=h,n.lots[p.id]={owner:r.id,level:0},n.stage="end",Ht(n,`${r.name}購買了${p.name}，支付 ${yt(h)}。`,"buy"),Si(n,{category:"purchase",summary:`${r.name}購買${p.name}，支付 ${yt(h)}。`,participants:[{playerId:r.id,amountDelta:-h}]});break}case"SKIP":if(n.stage!=="decision")return a;n.stage="end",Ht(n,`${r.name}暫不購買${Gt[r.pos].name}。`);break;case"BUILD":{if(!Op(n,e.id))return a;const p=Gt[e.id],h=n.lots[e.id],v=ml(p,n);n.bank=n.bank||Rs(n),r.cash-=v,h.level<4?(n.bank.houses--,h.level++,Ht(n,`${r.name}在${p.name}加蓋第 ${h.level} 間房屋，支付 ${yt(v)}。`,"build")):(n.bank.houses+=4,n.bank.hotels--,h.level=5,Ht(n,`${r.name}將${p.name}的 4 間房屋升級為旅館，支付 ${yt(v)}。`,"build")),Si(n,{category:"construction",summary:`${r.name}支付 ${yt(v)} 建設地產。`,participants:[{playerId:r.id,amountDelta:-v}]}),n.buildAvailable=!1,n.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(n.stage)||((o=n.lots[e.id])==null?void 0:o.owner)!==r.id)return a;const p=Gt[e.id],h=n.lots[e.id],v=Gn(n,p.price+h.level*Math.round(p.price*.6),M=>Math.floor(M*.5));lx(n,h),r.cash+=v,delete n.lots[e.id],n.buildAvailable=!1,Ht(n,`${r.name}變賣${p.name}，回收 ${yt(v)}。`,"sell"),Si(n,{category:"sale",summary:`${r.name}變賣${p.name}，回收 ${yt(v)}。`,participants:[{playerId:r.id,amountDelta:v}]});break}case"USE_SKILL_CARD":if(!c3(n,e))return a;break;case"RESPOND_SKILL":if(!n.pendingSkill||e.playerId!==n.pendingSkill.targetId||!["counter","reflect","pass"].includes(e.response)||!o3(n,e.response))return a;break;case"RESOLVE_SKILL_OVERFLOW":if(!u3(n,e))return a;break;case"NEXT":if(n.stage!=="end"||n.skillOverflow||n.pendingSkill)return a;{let p=n.turn;do if(p=(p+1)%n.players.length,p===0){n.round++;const h=n.priceIndex;n.priceIndex=Math.min(ix,n.priceIndex*(1+n.inflationRate/100)),n.priceIndex>h&&Ht(n,`新的一輪開始，物價指數升至 ${n.priceIndex.toFixed(2)}×。`,"inflation")}while(n.players[p].bankrupt);n.turn=p,n.players[p].skillUsedThisTurn=!1,n.event=null,n.stage="ready",n.selected=null,n.buildAvailable=!1,n.buildUsed=!1,n.maxRounds!==null&&n.round>n.maxRounds?(n.winner=n.players.filter(h=>!h.bankrupt).sort((h,v)=>ul(n,v.id)-ul(n,h.id))[0].id,n.stage="finished",Ht(n,`${n.maxRounds} 回合結束！${n.players[n.winner].name}以最高總資產獲勝。`)):Ht(n,`輪到${n.players[p].name}，準備擲骰子。`);break}default:return a}return n.limitBuildings===!1&&(n.bank={...Pu}),n}function d3(){try{const a=QR();return a?rx(a):Up()}catch{return Up()}}function vu(a){return a<=8?[-8+a*2,8]:a<=16?[8,8-(a-8)*2]:a<=24?[8-(a-16)*2,-8]:[-8,-8+(a-24)*2]}const h3=Ke.forwardRef(function({game:e,onSelect:n,onError:r,emotionAnchorRefs:o,emotionMoods:c,children:f},m){const p=Ke.useRef(),h=Ke.useRef(),v=Ke.useRef(e),M=Ke.useRef(n),x=Ke.useRef({});return v.current=e,M.current=n,x.current=c||{},Ke.useImperativeHandle(m,()=>({reset(){var E;(E=h.current)==null||E.reset()},zoom(E){const A=h.current;A&&(A.camera.position.sub(A.controls.target).multiplyScalar(E).clampLength(13,80).add(A.controls.target),A.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const E=h.current;E&&(E.camera.position.set(0,29,.01),E.controls.update())}}),[]),Ke.useEffect(()=>{let E=!1,A=()=>{};return(async()=>{var Ct;try{await Promise.race([((Ct=document.fonts)==null?void 0:Ct.ready)||Promise.resolve(),new Promise(_e=>setTimeout(_e,2e3))])}catch{}if(E)return;const g='"Noto Sans TC", "Microsoft JhengHei", sans-serif',y=p.current;let z;try{z=new wR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{r==null||r("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.shadowMap.enabled=!0,z.shadowMap.type=Mo,z.outputColorSpace=ri,z.toneMapping=kp,z.toneMappingExposure=.9,y.appendChild(z.domElement),z.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const B=new sb;B.background=new bt("#eaf0e5"),B.fog=new em("#eaf0e5",48,90);const U=new Li(39,1,.1,120),I=new NR(U,z.domElement);I.enableDamping=!0,I.dampingFactor=.07,I.minDistance=13,I.maxDistance=80,I.maxPolarAngle=Math.PI*.485,I.minPolarAngle=.01,I.target.set(0,0,0),I.autoRotateSpeed=.65,I.enablePan=!0;const L=()=>{U.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/U.aspect)),I.target.set(0,0,0),I.autoRotate=!1,I.update()};L(),h.current={camera:U,controls:I,reset:L},B.add(new Ab("#fff9e9","#86967e",2.4));const H=new wb("#fff5df",3.2);H.position.set(-12,25,8),H.castShadow=!0,H.shadow.mapSize.set(2048,2048),Object.assign(H.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),H.shadow.normalBias=.04,H.shadow.bias=-2e-4,H.shadow.radius=4,B.add(H);const T=new Map,O=_e=>(T.has(_e)||T.set(_e,new Uv({color:_e,roughness:.82})),T.get(_e)),q=new Map,G=(_e,C,_,k,W,j=0,ye=0,ve=0,ie=0)=>{const re=[C,_,k,ie].join(",");q.has(re)||q.set(re,ie?new om(C,_,k,2,ie):new As(C,_,k));const Se=new bn(q.get(re),O(W));return Se.position.set(j,ye,ve),Se.castShadow=!0,Se.receiveShadow=!0,_e.add(Se),Se},Q=new sm(1,14,10),me=(_e,C,_,k,W,j,ye=j,ve=j)=>{const ie=new bn(Q,O(C));return ie.position.set(_,k,W),ie.scale.set(j,ye,ve),ie.castShadow=!0,ie.receiveShadow=!0,_e.add(ie),ie},de=(_e,C,_,k,W,j,ye,ve,ie=24)=>{const re=new bn(new Fu(C,_,k,ie),O(W));return re.position.set(j,ye,ve),re.castShadow=!0,re.receiveShadow=!0,_e.add(re),re},ee=new bn(new ir(200,200),O("#eaf0e5"));ee.rotation.x=-Math.PI/2,ee.position.y=-.67,ee.receiveShadow=!0,B.add(ee),de(B,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),de(B,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),G(B,18.55,.65,18.55,"#405d50",0,-.03,0,.2),G(B,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),G(B,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const F=[];function X(_e,C=512,_=512){const k=document.createElement("canvas");k.width=C,k.height=_;const W=k.getContext("2d");_e(W,C,_);const j=new _b(k);return j.colorSpace=ri,j.minFilter=Un,j.magFilter=Un,j.anisotropy=z.capabilities.getMaxAnisotropy(),F.push(j),j}const le={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},Me=[],Ne=[],P=[],ne=[],De=new Map;function Ie(_e,C){const _=`${_e}:${C}`;if(!De.has(_)){const k=X((W,j,ye)=>{W.clearRect(0,0,j,ye),W.fillStyle=C,W.beginPath(),W.roundRect(8,8,j-16,ye-16,24),W.fill(),W.strokeStyle="#fffaf0",W.lineWidth=8,W.stroke(),W.fillStyle="#fffaf0",W.beginPath(),W.arc(j/2,ye/2,43,0,Math.PI*2),W.fill(),W.fillStyle="#294237",W.textAlign="center",W.textBaseline="middle",W.font="bold 72px Arial",W.fillText(String(_e+1),j/2,ye/2+3)},192,144);De.set(_,new Fy({map:k,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return De.get(_)}for(const _e of Gt){const[C,_]=vu(_e.id),k=new La;k.position.set(C,.44,_),B.add(k);const W=G(k,1.94,.14,1.94,"#fffaf0",0,0,0,.035);W.userData.tile=_e.id,Me.push(W),Ne[_e.id]=W;const j=v.current.priceIndex||1,ye=(Se,Le,Oe,Ue)=>{Se.fillStyle="#fcf9f0",Se.fillRect(0,0,Le,Oe),_e.type==="property"&&(Se.fillStyle=_e.color,Se.fillRect(0,0,Le,82)),Se.fillStyle="#294237",Se.textAlign="center",Se.font=`bold 76px ${g}`,Se.fillText(_e.name,Le/2,_e.type==="property"?180:140),_e.type==="property"?(Se.font="60px Arial",Se.fillText(yt(Math.round(_e.price*Ue)),Le/2,290),Se.fillStyle="#8c998e",Se.font="26px sans-serif",Se.fillText("CITY PROPERTY",Le/2,410)):(Se.font="bold 135px Arial",Se.fillStyle=_e.type==="chance"?"#ba9270":"#648473",Se.fillText(le[_e.type],Le/2,320),Se.fillStyle="#728375",Se.font=`30px ${g}`,Se.fillText(_e.type==="start"?`+ ${yt(Math.round(2e3*Ue))}`:_e.type==="tax"?"城市稅收":_e.type==="park"?"歇一會兒":_e.type==="chance"?"好運降臨":_e.type==="fund"?"城市生活":"JUST VISITING",Le/2,420))},ve=X((Se,Le,Oe)=>ye(Se,Le,Oe,j));(_e.type==="property"||_e.type==="start")&&ne.push(Se=>{const Le=ve.image.getContext("2d");ye(Le,ve.image.width,ve.image.height,Se),ve.needsUpdate=!0});const ie=new bn(new ir(1.89,1.89),new To({map:ve,toneMapped:!1}));ie.rotation.x=-Math.PI/2,ie.rotation.z=_e.id<8?0:_e.id<16?Math.PI/2:_e.id<24?Math.PI:-Math.PI/2,ie.position.y=.076,k.add(ie);const re=new La;re.position.set(C,.58,_),re.rotation.y=_e.id<8?0:_e.id<16?Math.PI/2:_e.id<24?Math.PI:-Math.PI/2,B.add(re),P[_e.id]=re}for(const _e of[-4.4,4.4]){G(B,.8,.025,13,"#d3d2bb",_e,.525,0),G(B,1.15,.018,13,"#f6f1df",_e,.513,0);for(let C=-6;C<=6;C+=.75)G(B,.035,.008,.29,"#faf6e8",_e,.543,C)}for(const _e of[-3.2,3.2]){G(B,13,.025,.8,"#d3d2bb",0,.525,_e),G(B,13,.018,1.15,"#f6f1df",0,.513,_e);for(let C=-6;C<=6;C+=.75)G(B,.29,.008,.035,"#faf6e8",C,.543,_e)}function ze(_e,C,_=1){const k=new La;k.position.set(_e,.52,C),k.scale.setScalar(_),B.add(k),de(k,.045,.075,.55,"#94785c",0,.28,0,7),me(k,"#8db578",0,.83,0,.29,.44,.29),me(k,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function se(_e,C,_,k,W,j,ye=!1){const ve=new La;ve.position.set(_e,.53,C),B.add(ve),G(ve,_+.18,.12,k+.18,"#ede9d5",0,.06,0,.04),G(ve,_,W,k,j,0,W/2+.1,0,.035),G(ve,_+.1,.1,k+.1,"#fff4df",0,W+.12,0,.02);for(let ie=.45;ie<W-.1;ie+=.42){for(let re=-_/2+.22;re<_/2-.08;re+=.32)G(ve,.17,.23,.018,"#6d9097",re,ie,k/2+.01),G(ve,.17,.23,.018,"#6d9097",re,ie,-k/2-.01);for(let re=-k/2+.22;re<k/2-.08;re+=.32)G(ve,.018,.23,.17,"#6d9097",_/2+.01,ie,re);G(ve,_+.025,.045,k+.025,"#ede9d8",0,ie+.17,0)}if(G(ve,.24,.36,.024,"#496d68",0,.28,k/2+.02),ye){const ie=new bn(new Ao(_*.81,.55,4),O("#c98468"));ie.rotation.y=Math.PI/4,ie.scale.z=k/_,ie.position.y=W+.42,ie.castShadow=!0,ve.add(ie)}else G(ve,_*.7,.08,k*.7,"#a5b7ae",0,W+.21,0),G(ve,.23,.2,.25,"#e9e4d2",_*.18,W+.34,0)}se(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),se(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),se(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),se(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),se(5.6,-5,1.1,1.5,2.3,"#aac5bc"),se(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),se(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),se(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),se(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),se(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),se(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[_e,C]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])ze(_e,C,1.05);for(let _e=0;_e<24;_e++){const C=_e*Math.PI*2/24;_e%3!==0&&ze(Math.cos(C)*12.5,Math.sin(C)*12.5,.85+_e%3*.12)}G(B,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Te=X((_e,C,_)=>{_e.clearRect(0,0,C,_),_e.textAlign="center",_e.fillStyle="#3d6850",_e.font="900 152px Arial",_e.fillText("CITY",C/2,148),_e.fillText("TYCOON",C/2,265),_e.font=`25px ${g}`,_e.fillStyle="#6d8468",_e.fillText("每一步，都是新可能。",C/2,338)},1024,420),Re=new bn(new ir(6.2,2.54),new Uv({map:Te,transparent:!0,depthWrite:!1}));Re.rotation.x=-Math.PI/2,Re.position.set(0,.58,0),B.add(Re),de(B,.75,.82,.12,"#ede7cf",0,.59,4.3),de(B,.62,.62,.05,"#91c8ce",0,.675,4.3),de(B,.18,.28,.5,"#dfebdf",0,.95,4.3),me(B,"#9fcfd2",0,1.3,4.3,.14),de(B,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Ce=[];for(let _e=0;_e<4;_e++){const C=new La;B.add(C),de(C,.26,.3,.12,Hn[_e],0,.08,0),me(C,Hn[_e],0,.53,0,.23,.32,.18),me(C,"#f1d5b0",0,1,0,.225),me(C,Hn[_e],0,1.12,-.015,.24,.14,.235),G(C,.44,.05,.15,Hn[_e],0,1.1,.16,.025);for(const W of[-.09,.09])me(C,"#273e34",W,1.015,.198,.025),G(C,.13,.2,.19,"#3c5349",W,.22,.025,.035),me(C,"#f1d5b0",W*2.8,.51,0,.075,.15,.075);G(C,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),C.scale.setScalar(.95);const[_,k]=vu(0);C.position.set(_+(_e%2-.5)*.62,.59,k+(Math.floor(_e/2)-.5)*.62),C.traverse(W=>{W.material===O(Hn[_e])&&(W.userData.playerTint=!0)}),Ce.push(C)}const Xe=new bn(new am(.42,.5,40),new To({color:"#f4c65b",side:ta}));Xe.rotation.x=-Math.PI/2,B.add(Xe);const je=new bn(new As(1.98,.045,1.98),new To({color:"#edc768",transparent:!0,opacity:.6}));B.add(je),je.visible=!1;let It="",ct=Number.NaN,_t,lt=0,ut=performance.now();const Qt=()=>{const _e=y.clientWidth,C=y.clientHeight;z.setSize(_e,C),U.aspect=_e/C,U.updateProjectionMatrix(),L()},tt=new ResizeObserver(Qt);tt.observe(y),Qt();let ht;const Jt=_e=>{ht=[_e.clientX,_e.clientY]},zt=_e=>{if(!ht||Math.hypot(_e.clientX-ht[0],_e.clientY-ht[1])>6)return;const C=y.getBoundingClientRect(),_=new Ub;_.setFromCamera(new st((_e.clientX-C.left)/C.width*2-1,-(_e.clientY-C.top)/C.height*2+1),U);const k=_.intersectObjects(Me)[0];k&&M.current(k.object.userData.tile)};y.addEventListener("pointerdown",Jt),y.addEventListener("pointerup",zt);function Bt(){const _e=o==null?void 0:o.current;if(!(_e!=null&&_e.size))return;const C=y.getBoundingClientRect(),_={left:12,top:72,right:C.width-12,bottom:C.height-82},k=[...y.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map(j=>{const ye=j.getBoundingClientRect();return{left:ye.left-C.left,top:ye.top-C.top,right:ye.right-C.left,bottom:ye.bottom-C.top}}),W=[];for(const[j,ye]of[..._e.entries()].sort(([ve],[ie])=>ve-ie)){const ve=Ce[j];if(!(ye!=null&&ye.isConnected)||!ve||!ye.offsetWidth||!ye.offsetHeight)continue;const ie=ve.position.clone().add(new te(0,1.45,0)).project(U),re=(ie.x*.5+.5)*C.width,Se=(-ie.y*.5+.5)*C.height,Le=ye.offsetWidth,Oe=ye.offsetHeight,Ue={left:re-Le/2,top:Se-Oe-20},We=[Ue,{left:Ue.left-Le*.62-18,top:Ue.top},{left:Ue.left+Le*.62+18,top:Ue.top},{left:Ue.left-Le*.42-14,top:Ue.top-42},{left:Ue.left+Le*.42+14,top:Ue.top-42},{left:Ue.left,top:Ue.top-58}].map(Y=>({left:Math.max(_.left,Math.min(_.right-Le,Y.left)),top:Math.max(_.top,Math.min(_.bottom-Oe,Y.top))}));let Ye=We[0],nt=1/0;for(const Y of We){const Pe={...Y,right:Y.left+Le,bottom:Y.top+Oe};let R=Math.hypot(Y.left-Ue.left,Y.top-Ue.top);for(const Z of[...W,...k]){const be=Math.max(0,Math.min(Pe.right,Z.right)-Math.max(Pe.left,Z.left)),ge=Math.max(0,Math.min(Pe.bottom,Z.bottom)-Math.max(Pe.top,Z.top));R+=be*ge*100}R<nt&&(nt=R,Ye=Y)}ye.style.left=`${Ye.left}px`,ye.style.top=`${Ye.top}px`,ye.style.setProperty("--tail-x",`${Math.max(18,Math.min(Le-18,re-Ye.left))}px`),W.push({...Ye,right:Ye.left+Le,bottom:Ye.top+Oe})}}function J(){var W;_t=requestAnimationFrame(J);const _e=performance.now(),C=Math.min((_e-ut)/1e3,.05);ut=_e,lt+=C;const _=v.current;for(let j=0;j<Ce.length;j++)Ce[j].visible=!!_.players[j]&&!_.players[j].bankrupt;for(let j=0;j<_.players.length;j++){const ye=_.players[j],ve=Ce[j],[ie,re]=vu(ye.pos),Se=x.current[j];ve.traverse(nt=>{nt.userData.playerTint&&(nt.material=O(ye.color||Hn[j]))});const Le=ie+(j%2-.5)*.62,Oe=re+(Math.floor(j/2)-.5)*.62,Ue=Math.hypot(Le-ve.position.x,Oe-ve.position.z);ve.userData.baseRotationY=Math.atan2(Le-ve.position.x,Oe-ve.position.z),Ue>.04&&(ve.position.x=Tp.damp(ve.position.x,Le,13,C),ve.position.z=Tp.damp(ve.position.z,Oe,13,C));const We=Ue>.04?Math.abs(Math.sin(lt*17))*.18:0,Ye=Se==="happy"?Math.abs(Math.sin(lt*10))*.1:Se==="sad"?-.1:Se==="surprised"?Math.sin(lt*12)*.045:Se==="relieved"?Math.sin(lt*5)*.025:0;ve.position.y=.59+We+Ye,ve.rotation.y=(ve.userData.baseRotationY||0)+(Se==="proud"?Math.sin(lt*8)*.12:0),ve.rotation.z=Se==="anxious"?Math.sin(lt*32)*.045:0,ve.position.x+=Se==="anxious"?Math.sin(lt*34)*.035:0,ve.scale.setScalar(.95*(Se==="surprised"?1+Math.max(0,Math.sin(lt*12))*.09:1)),ve.visible=!ye.bankrupt}if(_.priceIndex!==ct&&(ct=_.priceIndex,ne.forEach(j=>j(ct))),Xe.position.copy(Ce[_.turn].position),Xe.position.y=.595,Xe.scale.setScalar(1+Math.sin(lt*3)*.06),_.selected!==null){const[j,ye]=vu(_.selected);je.position.set(j,.536,ye),je.visible=!0}else je.visible=!1;const k=JSON.stringify([_.lots,_.players.map(j=>j.color)]);if(It!==k){It=k;for(const j of Gt){const ye=P[j.id];for(;ye.children.length;){const re=ye.children[0];re.userData.disposableGeometry&&re.geometry.dispose(),ye.remove(re)}const ve=_.lots[j.id],ie=ve?((W=_.players[ve.owner])==null?void 0:W.color)||Hn[ve.owner]:null;if(Ne[j.id].material=O(ie||"#fffaf0"),ve){G(ye,.045,.72,.045,"#647568",.67,.36,.7,.01);const re=new fb(Ie(ve.owner,ie));if(re.position.set(.67,.86,.7),re.scale.set(.62,.465,1),re.renderOrder=5,ye.add(re),G(ye,1.75,.055,.13,ie,0,0,.84,.015),ve.level===5){G(ye,.62,.72,.58,ie,0,.36,-.18,.04),G(ye,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const Se=new bn(new Ao(.43,.28,4),O("#d2a451"));Se.position.set(0,.96,-.18),Se.userData.disposableGeometry=!0,Se.rotation.y=Math.PI/4,Se.castShadow=!0,ye.add(Se),G(ye,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const Se=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Le=0;Le<ve.level;Le++){const[Oe,Ue]=Se[Le];G(ye,.33,.32,.34,ie,Oe,.2,Ue,.02);const We=new bn(new Ao(.3,.19,4),O("#faf0d7"));We.position.set(Oe,.45,Ue),We.userData.disposableGeometry=!0,We.rotation.y=Math.PI/4,We.castShadow=!0,ye.add(We)}}}}}I.update(),Bt(),z.render(B,U)}J(),A=()=>{cancelAnimationFrame(_t),tt.disconnect(),y.removeEventListener("pointerdown",Jt),y.removeEventListener("pointerup",zt),I.dispose();const _e=new Set,C=new Set;B.traverse(_=>{_.geometry&&_e.add(_.geometry),_.material&&C.add(_.material)}),_e.forEach(_=>_.dispose()),q.forEach(_=>_.dispose()),C.forEach(_=>_.dispose()),T.forEach(_=>_.dispose()),De.forEach(_=>_.dispose()),F.forEach(_=>_.dispose()),z.dispose(),z.domElement.parentNode===y&&y.removeChild(z.domElement),h.current=null}})(),()=>{E=!0,A()}},[]),b.createElement("div",{className:"board-canvas",ref:p},f)});function p3({game:a,onLoad:e}){const[n,r]=Ke.useState([]),[o,c]=Ke.useState(""),[f,m]=Ke.useState(""),[p,h]=Ke.useState(null),v=()=>{try{r(Uo())}catch{m("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};Ke.useEffect(()=>{v();const E=setInterval(v,6e4);return window.addEventListener("storage",v),()=>{clearInterval(E),window.removeEventListener("storage",v)}},[]);function M(E=!1){try{const A=Uo();if(r(A),A.length===10&&!E){h({type:"replace"});return}r(ZR(a,o,E)),c(""),h(null),m("已儲存，可保留 30 天。")}catch(A){h(null),m(`儲存失敗：${A.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function x(){try{const E=KR(p.id);e(E)}catch(E){h(null),m(E.message),v()}}return b.createElement("div",{className:"save-manager"},b.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",n.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),b.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),b.createElement("input",{id:"save-name",maxLength:60,value:o,onChange:E=>c(E.target.value),placeholder:`回合 ${a.round}`}),b.createElement("button",{className:"primary",onClick:()=>M()},"儲存目前進度"),b.createElement("p",{role:"status"},f),p?b.createElement("section",{className:"save-confirm"},b.createElement("p",null,p.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),b.createElement("button",{className:"primary",onClick:()=>p.type==="replace"?M(!0):x()},"確認",p.type==="replace"?"取代並儲存":"讀取"),b.createElement("button",{className:"secondary full",onClick:()=>h(null)},"取消")):null,!n.length&&b.createElement("p",null,"尚無手動存檔。"),n.map(E=>b.createElement("article",{className:"save-entry",key:E.id},b.createElement("div",null,b.createElement("strong",null,E.name),b.createElement("small",null,new Date(E.savedAt).toLocaleString("zh-TW")),b.createElement("small",null,"回合 ",E.game.round," · 你的總資產 ",yt(ul(E.game,0))),b.createElement("small",null,"到期：",new Date(E.savedAt+tx).toLocaleString("zh-TW"))),b.createElement("button",{className:"secondary",onClick:()=>h({type:"load",id:E.id})},"讀取"))))}const m3=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,fx="city-tycoon:background-music:v1";function g3(){try{const a=JSON.parse(localStorage.getItem(fx));return{enabled:(a==null?void 0:a.enabled)===!0,volume:typeof(a==null?void 0:a.volume)=="number"&&Number.isFinite(a.volume)?Math.max(0,Math.min(100,a.volume)):50}}catch{return{enabled:!1,volume:50}}}function _3(){const[a,e]=Ke.useState(g3),[n,r]=Ke.useState(!1),[o,c]=Ke.useState(""),f=Ke.useRef(null),m=Ke.useRef(0);function p(){const v=++m.current;c(""),f.current.play().catch(M=>{v===m.current&&c(M.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}Ke.useEffect(()=>{const v=f.current;return v.volume=a.volume/100,a.enabled&&p(),()=>{m.current++,v.pause()}},[]),Ke.useEffect(()=>{f.current.volume=a.volume/100;try{localStorage.setItem(fx,JSON.stringify(a))}catch{}},[a]);function h(){f.current.paused?(e(v=>({...v,enabled:!0})),p()):(m.current++,f.current.pause(),c(""),e(v=>({...v,enabled:!1})))}return b.createElement("div",{className:"background-music"},b.createElement("audio",{ref:f,src:m3,loop:!0,preload:"none",onPlaying:()=>r(!0),onPause:()=>r(!1),onError:()=>{r(!1),c("音樂無法載入，請重新整理")}}),b.createElement("button",{className:"music-toggle","aria-label":n?"關閉背景音樂":"開啟背景音樂","aria-pressed":n,onClick:h,title:o||"Velvet Afternoon"},b.createElement(zM,{size:16}),b.createElement("span",null,"背景音樂"),n?b.createElement(BM,{size:14}):b.createElement(FM,{size:14})),b.createElement("label",{className:"music-volume"},b.createElement("span",{className:"music-volume-label"},"音量"),b.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:a.volume,onChange:v=>e(M=>({...M,volume:Number(v.target.value)}))}),b.createElement("output",null,a.volume,"%")),o&&b.createElement("span",{className:"music-message",role:"status"},o))}function dx(a){return Number.isFinite(a)?`${a>0?"+":"−"}${yt(Math.abs(a))}`:""}const v3={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function hx({message:a,player:e,anchorRefs:n,mobile:r=!1,animated:o=!0,paused:c=!1}){if(!e)return null;const f=dx(a.amountDelta),m=`emotion-${a.mood}`,p=e.color||"#61ac78";return b.createElement("div",{ref:r?void 0:h=>{n&&(h?n.current.set(e.id,h):n.current.delete(e.id))},className:`emotion-bubble ${m}${o?"":" motion-off"}${c?" is-paused":""}${r?" emotion-mobile-entry":""}`,style:{"--player":p},"aria-hidden":"true"},b.createElement("div",{className:"emotion-card"},b.createElement("div",{className:"emotion-bubble-heading"},b.createElement("span",{className:"emotion-player-dot"}),b.createElement("strong",null,e.name),b.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},a.emoji),b.createElement("span",{className:"emotion-mood-label"},a.moodLabel),b.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},v3[a.mood]),b.createElement("b",{className:"emotion-amount"},f)),b.createElement("p",null,a.message)))}function y3({event:a,players:e,anchorRefs:n,animated:r,paused:o=!1}){if(!a)return null;const c=new Map(e.map(m=>[m.id,m])),f=`${a.summary} ${a.players.map(m=>{const p=c.get(m.playerId);return`${(p==null?void 0:p.name)||"玩家"}，${m.moodLabel}，${dx(m.amountDelta)}，${m.message}`}).join(" ")}`;return b.createElement(b.Fragment,null,b.createElement("div",{className:"emotion-layer","aria-hidden":"true"},a.players.map(m=>b.createElement(hx,{key:`${a.id}-${m.playerId}`,message:m,player:c.get(m.playerId),anchorRefs:n,animated:r,paused:o}))),b.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},f))}function x3({event:a,players:e,animated:n,paused:r=!1}){if(!a)return null;const o=new Map(e.map(c=>[c.id,c]));return b.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},a.players.map(c=>b.createElement(hx,{key:`${a.id}-${c.playerId}`,message:c,player:o.get(c.playerId),mobile:!0,animated:n,paused:r})))}function S3({value:a,rolling:e}){const n={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return b.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${a} 點`},Array.from({length:9},(r,o)=>b.createElement("i",{key:o,className:n[a].includes(o+1)?"pip":""})))}function Bp(a){return(a==null?void 0:a.color)||Hn[(a==null?void 0:a.id)||0]}function hy({id:a,small:e=!1,player:n}){return b.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Bp(n||{id:a})}},b.createElement("span",{className:"avatar-head"}),b.createElement("span",{className:"avatar-body"}),b.createElement("span",{className:"avatar-cap"}),b.createElement("span",{className:"owner-number"},a+1))}function M3({player:a}){const e=[];return a.jail&&e.push(b.createElement("span",{key:"jail",className:"status-badge jail"},"監獄")),a.slowTurns&&e.push(b.createElement("span",{key:"slow",className:"status-badge slow"},"龜速 ",a.slowTurns)),a.rentShield&&e.push(b.createElement("span",{key:"shield",className:"status-badge shield"},"免租")),a.rentMultiplier===2&&e.push(b.createElement("span",{key:"double",className:"status-badge double"},"收租×2")),e.length?b.createElement("div",{className:"player-status-badges"},e):null}function E3({game:a}){const e=Rs(a);return b.createElement("section",{className:"building-inventory","aria-label":"建築物剩餘數量"},b.createElement("div",{className:"building-inventory-heading"},b.createElement("strong",null,"建築物庫存"),b.createElement("span",null,a.limitBuildings?"有限量":"不限量")),a.limitBuildings?b.createElement("div",{className:"building-inventory-values"},b.createElement("span",null,b.createElement("b",null,e.houses),b.createElement("small",null,"房屋可購買")),b.createElement("span",null,b.createElement("b",null,e.hotels),b.createElement("small",null,"旅館可購買"))):b.createElement("p",null,"房屋與旅館皆不受銀行數量限制。"))}function b3({card:a,count:e,disabled:n,selected:r,onClick:o}){return b.createElement("button",{type:"button",className:`skill-card-tile skill-${a.type}${r?" selected":""}`,onClick:o,"aria-disabled":n,"aria-pressed":r,"aria-label":`${a.name}：${a.summary}`},b.createElement("span",{className:"skill-card-icon","aria-hidden":"true"},a.icon),b.createElement("span",{className:"skill-card-copy"},b.createElement("strong",null,a.name),b.createElement("small",null,a.summary)),e>1&&b.createElement("b",{className:"skill-card-count"},e))}function T3(a){return a===5?"旅館":a?`${a} 間房屋`:"未開發地產"}function A3(a){return a===5?"旅館":"房屋 "+(a||0)+" / 4"}function R3(a,e,n){if(a.limitBuildings===!1)return n.level===5?"這塊土地已有旅館。":n.level===4?"你剛走到這塊土地，可以升級為旅館。":"你剛走到這塊土地，可以加蓋一間房屋。";if(a.selected!==e.id||a.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(a.buildUsed)return"本次落地已完成建造。";if(n.level===5)return"這塊土地已有旅館。";const r=Rs(a);return n.level===4?r.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":r.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function C3(a,e,n){return n.level===5?"已達最高等級":a.buildUsed&&a.selected===e.id?"本次落地已建造":n.level===4?`升級旅館 · ${yt(ml(e,a))}`:`建造房屋 · ${yt(ml(e,a))}`}function nl({title:a,onClose:e,children:n,wide:r=!1}){const o=Ke.useRef();return Ke.useEffect(()=>{var m;const c=document.activeElement;(m=o.current)==null||m.focus();function f(p){if(p.key==="Escape"&&(e==null||e()),p.key==="Tab"){const h=[...o.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!h.length){p.preventDefault();return}p.shiftKey&&document.activeElement===h[0]?(p.preventDefault(),h.at(-1).focus()):!p.shiftKey&&document.activeElement===h.at(-1)&&(p.preventDefault(),h[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),b.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},b.createElement("section",{ref:o,tabIndex:-1,className:"modal "+(r?"wide":""),role:"dialog","aria-modal":"true","aria-label":a},b.createElement("div",{className:"modal-heading"},b.createElement("h2",null,a),e&&b.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},b.createElement(vy,{size:20}))),n))}const Fp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Fp.splice(0,Fp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function w3(a){if(a.roundOption==="unlimited")return null;if(a.roundOption==="custom"){const e=Number(a.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(a.roundOption)}const py="city-tycoon:activity-visible:v1",px="city-tycoon:glass-opacity:v1",mx="city-tycoon:emotion-animation:v1",gx="city-tycoon:skill-animation:v1",Oh=72,_x=a=>Math.min(95,Math.max(5,Number(a)));function D3(){try{const a=localStorage.getItem(px);if(a===null)return Oh;const e=Number(a);return Number.isFinite(e)?_x(e):Oh}catch{return Oh}}function N3(){try{return localStorage.getItem(mx)!=="false"}catch{return!0}}function U3(){try{return localStorage.getItem(gx)!=="false"}catch{return!0}}function my({entries:a}){return a.map((e,n)=>b.createElement("div",{className:"activity-item",key:n},b.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?b.createElement(yu,{size:16}):e.kind==="dice"?b.createElement(_y,{size:16}):e.kind==="tax"?b.createElement(PM,{size:16}):b.createElement(Ph,{size:16})),b.createElement("p",null,e.text,b.createElement("small",null,n===0?"剛剛":"本局紀錄"))))}function L3(){var Ue,We,Ye,nt,Y,Pe;const[a,e]=Ke.useState(()=>{try{return localStorage.getItem(py)!=="false"}catch{return!0}}),[n,r]=Ke.useState(D3),[o,c]=Ke.useState(N3),[f,m]=Ke.useState(U3),[p,h]=Ke.useState(!1),[v,M]=Ke.useState(()=>{var R;return typeof window<"u"&&((R=window.matchMedia)==null?void 0:R.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[x,E]=Ke.useState([]),[A,N]=Ke.useState(null),[g,y]=Ke.useReducer(f3,void 0,d3),z=Ke.useRef(new Map),B=Ke.useRef(0),U=Ke.useRef(""),I=x[0]||null,L=I&&o&&!v?Object.fromEntries(I.players.map(R=>[R.playerId,R.mood])):{},H=Ke.useRef();Ke.useEffect(()=>{try{localStorage.setItem(py,String(a))}catch{}},[a]),Ke.useEffect(()=>{try{localStorage.setItem(mx,String(o))}catch{}},[o]),Ke.useEffect(()=>{try{localStorage.setItem(gx,String(f))}catch{}},[f]),Ke.useEffect(()=>{var be,ge;const R=(be=window.matchMedia)==null?void 0:be.call(window,"(prefers-reduced-motion: reduce)");if(!R)return;const Z=Fe=>M(Fe.matches);return(ge=R.addEventListener)==null||ge.call(R,"change",Z),()=>{var Fe;return(Fe=R.removeEventListener)==null?void 0:Fe.call(R,"change",Z)}},[]),Ke.useEffect(()=>{const R=(g.emotionEvents||[]).filter(Z=>Z.id>B.current);R.length&&(B.current=Math.max(B.current,...R.map(Z=>Z.id)),E(Z=>[...Z,...R].sort((be,ge)=>ge.priority-be.priority||be.id-ge.id).slice(0,3)))},[g.emotionEvents]),Ke.useEffect(()=>{if(!I||A||g.stage==="moving"&&I.priority<90)return;const R=I.id,Z=setTimeout(()=>E(be=>{var ge;return((ge=be[0])==null?void 0:ge.id)===R?be.slice(1):be.filter(Fe=>Fe.id!==R)}),2400);return()=>clearTimeout(Z)},[I==null?void 0:I.id,g.stage,A]),Ke.useEffect(()=>{const R=g.log[0];if((R==null?void 0:R.kind)!=="skill"){U.current=(R==null?void 0:R.text)||"";return}if(R.text===U.current||(U.current=R.text,!f||v))return;h(!0);const Z=setTimeout(()=>h(!1),720);return()=>clearTimeout(Z)},[g.log,f,v]);const T=R=>{const Z=_x(Number(R.currentTarget.value));r(Z);try{localStorage.setItem(px,String(Z))}catch{}},[O,q]=Ke.useState(null),[G,Q]=Ke.useState("players"),[me,de]=Ke.useState(null),[ee,F]=Ke.useState(null),[X,le]=Ke.useState(!1),[Me,Ne]=Ke.useState(!1),[P,ne]=Ke.useState(""),[De,Ie]=Ke.useState(!1),[ze,se]=Ke.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:cm,limitBuildings:!0,players:[{name:"你",color:Hn[0],human:!0},{name:"艾米",color:Hn[1],human:!1},{name:"小傑",color:Hn[2],human:!1},{name:"喵喵",color:Hn[3],human:!1}]}),Te=Ke.useRef(),Re=Ke.useRef(),Ce=g.players[g.turn],Xe=!!(Ce!=null&&Ce.human)&&!(Ce!=null&&Ce.bankrupt),je=Xe&&["ready","end"].includes(g.stage),It=()=>{y({type:"ROLL",dice:Array.from({length:Ce.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})},ct=()=>{if(!Ce||Ce.skillUsedThisTurn||g.pendingSkill||g.skillOverflow)return null;const R=g.players.filter(Tt=>Tt.id!==Ce.id&&!Tt.bankrupt),Z=R[0],be=Ua(g,Ce.id),ge=Gt.find(Tt=>{var wt,Vn;return Tt.type==="property"&&((wt=g.lots[Tt.id])==null?void 0:wt.owner)!==void 0&&g.lots[Tt.id].owner!==Ce.id&&!((Vn=g.players[g.lots[Tt.id].owner])!=null&&Vn.bankrupt)}),Fe=Ce.skillHand,Be=Tt=>Fe.includes(Tt);if(Ce.cash<7e3&&Be("subsidy"))return{type:"USE_SKILL_CARD",cardId:"subsidy"};if(Ce.cash<9e3&&Be("rent-shield"))return{type:"USE_SKILL_CARD",cardId:"rent-shield"};if(Ce.jail&&Be("get-out"))return{type:"USE_SKILL_CARD",cardId:"get-out"};if(R.length&&Be("slow"))return{type:"USE_SKILL_CARD",cardId:"slow",targetId:Z.id};if(R.length&&Be("trap"))return{type:"USE_SKILL_CARD",cardId:"trap",targetId:Z.id};if(R.length&&Be("teleport")){const Tt=Tu.find(wt=>wt!==Z.pos&&Gt[wt].type==="property")??0;return{type:"USE_SKILL_CARD",cardId:"teleport",targetId:Z.id,targetPosition:Tt}}return R.length&&Be("position-swap")?{type:"USE_SKILL_CARD",cardId:"position-swap",targetId:Z.id}:be.length&&Be("rent-double")?{type:"USE_SKILL_CARD",cardId:"rent-double"}:be.length&&ge&&Be("land-swap")?{type:"USE_SKILL_CARD",cardId:"land-swap",ownLotId:be[0].id,targetLotId:ge.id}:Be("birthday")&&R.length?{type:"USE_SKILL_CARD",cardId:"birthday"}:null};Ke.useEffect(()=>{try{Uo()}catch{Ie(!0)}},[]),Ke.useEffect(()=>{if(g.stage!=="moving")try{Np(g),Ie(!1)}catch{Ie(!0)}},[g]),Ke.useEffect(()=>{if(g.stage==="moving"&&A!=="saves"){const R=setTimeout(()=>y({type:"STEP"}),330);return()=>clearTimeout(R)}},[g,A]),Ke.useEffect(()=>{const R=g.selected,Z=R===null?null:Gt[R],be=R===null?null:g.lots[R],ge=Xe&&g.stage==="decision"&&(Z==null?void 0:Z.type)==="property"&&!be,Fe=Xe&&g.stage==="end"&&g.buildAvailable&&(be==null?void 0:be.owner)===g.turn;(ge||Fe)&&(q(R),N("property"))},[g,Xe]),Ke.useEffect(()=>{if(Xe||g.stage==="finished"||g.pendingSkill||A==="new"||A==="rules"||A==="saves")return;const R=setTimeout(()=>{if(g.stage==="ready"){const Z=ct();Z?y(Z):It()}else if(g.stage==="decision")y({type:Ce.cash>al(g,Gt[Ce.pos])+Gn(g,1800)?"BUY":"SKIP"});else if(g.stage==="end"){const Z=Ua(g,g.turn).find(be=>Op(g,be.id)&&Ce.cash>ml(be,g)+Gn(g,2500));y(Z?{type:"BUILD",id:Z.id}:{type:"NEXT"})}},g.stage==="decision"?1300:1100);return()=>clearTimeout(R)},[g,Xe,A]),Ke.useEffect(()=>{var Fe;const R=g.skillOverflow;if(!R)return;const Z=g.players[R.playerId];if(Z!=null&&Z.human||!((Fe=Z==null?void 0:Z.skillHand)!=null&&Fe.length))return;const be=Z.skillHand.at(-1),ge=setTimeout(()=>y({type:"RESOLVE_SKILL_OVERFLOW",cardId:be}),350);return()=>clearTimeout(ge)},[(Ue=g.skillOverflow)==null?void 0:Ue.playerId,g.players,g.skillOverflow]),Ke.useEffect(()=>{const R=g.pendingSkill;if(!R)return;const Z=g.players[R.targetId];if(Z!=null&&Z.human)return;const be=Z!=null&&Z.skillHand.includes("counter")?"counter":Z!=null&&Z.skillHand.includes("reflect")?"reflect":"pass",ge=setTimeout(()=>y({type:"RESPOND_SKILL",playerId:R.targetId,response:be}),520);return()=>clearTimeout(ge)},[(We=g.pendingSkill)==null?void 0:We.sourceId,(Ye=g.pendingSkill)==null?void 0:Ye.targetId,(nt=g.pendingSkill)==null?void 0:nt.cardId,g.players]),Ke.useEffect(()=>{if(!(!X||!Re.current))try{const R=Re.current,Z=R.createOscillator(),be=R.createGain();Z.connect(be),be.connect(R.destination),Z.type="sine",Z.frequency.setValueAtTime(g.stage==="moving"?380:620,R.currentTime),be.gain.setValueAtTime(.035,R.currentTime),be.gain.exponentialRampToValueAtTime(.001,R.currentTime+.13),Z.start(),Z.stop(R.currentTime+.15)}catch{}},[g.remaining,g.stage,X]);const _t=()=>{if(!X){const R=window.AudioContext||window.webkitAudioContext;R&&(Re.current||(Re.current=new R),Re.current.resume())}le(!X)},lt=R=>{q(R),N("property")},ut=w3(ze),Qt=()=>{var R;ze.roundOption==="custom"&&!ut||(E([]),B.current=0,y({type:"NEW",config:{...ze,maxRounds:ut,inflationRate:Number(ze.inflationRate)}}),N(null),Q("players"),(R=Te.current)==null||R.reset(),Ne(!1))},tt=O!==null?Gt[O]:null,ht=tt?g.lots[tt.id]:null,Jt=Gt[Ce.pos],zt=!!tt&&tt.type==="property"&&!ht&&g.stage==="decision"&&Xe&&Jt.id===tt.id,Bt=((Ce==null?void 0:Ce.skillHand)||[]).map(R=>sl.find(Z=>Z.id===R)).filter(Boolean),J=Bt.reduce((R,Z)=>({...R,[Z.id]:(R[Z.id]||0)+1}),{}),Ct=g.players.filter(R=>R.id!==(Ce==null?void 0:Ce.id)&&!R.bankrupt),_e=Ua(g,g.turn),C=Gt.filter(R=>{var Z;return R.type==="property"&&g.lots[R.id]&&g.lots[R.id].owner!==g.turn&&!((Z=g.players[g.lots[R.id].owner])!=null&&Z.bankrupt)}),_=sl.find(R=>R.id===me)||null,k=g.skillOverflow?g.players[g.skillOverflow.playerId]:null,W=g.pendingSkill?g.players[g.pendingSkill.targetId]:null,j=g.pendingSkill?g.players[g.pendingSkill.sourceId]:null,ye=Xe&&g.stage==="ready"&&!g.skillOverflow&&!g.pendingSkill&&!Ce.skillUsedThisTurn,ve=R=>!ye||R.timing!=="active"||!Pp.has(R.id)||R.id==="get-out"&&!Ce.jail,ie=R=>{var Z;return!(k!=null&&k.human)||((Z=g.skillOverflow)==null?void 0:Z.playerId)!==g.turn||g.pendingSkill||Ce.skillUsedThisTurn||R.timing!=="active"||!Pp.has(R.id)||R.id==="get-out"&&!Ce.jail||R.target==="player"&&!Ct.length||R.target==="land"&&(!_e.length||!C.length)},re=(R,Z=!1)=>{var ge,Fe;if(Z?ie(R):ve(R))return;const be=Z?{overflowUse:!0}:{};if(de(R.id),R.target==="player"){const Be=Ct[0];F({cardId:R.id,targetId:(Be==null?void 0:Be.id)??"",...R.id==="teleport"?{targetPosition:(Be==null?void 0:Be.pos)??0}:{},...be});return}if(R.target==="land"){F({cardId:R.id,ownLotId:((ge=_e[0])==null?void 0:ge.id)??"",targetLotId:((Fe=C[0])==null?void 0:Fe.id)??"",...be});return}y({type:"USE_SKILL_CARD",cardId:R.id,...be}),de(null)},Se=R=>{de(R.id),F(null)},Le=()=>{_&&re(_)},Oe=()=>{ee&&(y({type:"USE_SKILL_CARD",...ee}),F(null),de(null))};return b.createElement("div",{className:"app-shell"},b.createElement("header",{className:"header"},b.createElement("a",{className:"brand",href:"./","aria-label":"城市大亨首頁"},b.createElement("span",{className:"brand-icon"},b.createElement(av,{size:33,strokeWidth:1.8})),b.createElement("span",null,b.createElement("strong",null,"城市大亨"),b.createElement("small",null,"CITY TYCOON"))),b.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),b.createElement("nav",null,b.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>N("rules")},b.createElement(iv,{size:18}),b.createElement("span",null,"遊戲規則")),b.createElement("span",{className:"nav-divider"}),b.createElement("button",{className:"outline-button",onClick:()=>N("new")},b.createElement(sv,{size:18}),b.createElement("span",null,"新遊戲")))),b.createElement("button",{className:"save-launch secondary",onClick:()=>N("saves")},"儲存／讀取"),A==="saves"&&b.createElement(nl,{title:"存檔管理",wide:!0,onClose:()=>N(null)},b.createElement(p3,{game:g,onLoad:R=>{E([]),B.current=0,y({type:"LOAD",game:R});try{Np(R),Ie(!1)}catch{Ie(!0)}q(null),Q("players"),N(null)}})),b.createElement("main",{className:"game-layout"},b.createElement("section",{className:"world","aria-label":"遊戲棋盤"},b.createElement(h3,{game:g,emotionAnchorRefs:z,emotionMoods:L,onSelect:lt,onError:ne,ref:Te},b.createElement(y3,{event:I,players:g.players,anchorRefs:z,animated:o&&!v,paused:g.stage==="moving"||A!==null})),b.createElement("div",{className:"world-heading"},b.createElement("span",{className:"live-dot"}),"經典城市 ",b.createElement("span",{className:"world-heading-divider"},"/"),b.createElement("span",null,g.players.length," 人對局"),b.createElement("button",{ref:H,className:"activity-toggle","aria-expanded":a,"aria-controls":"glass-city-activity",onClick:()=>e(R=>!R)},b.createElement(iv,{size:16}),"城市動態",b.createElement("span",null,a?"收起":"展開"))),b.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-n/100},"aria-labelledby":"glass-activity-title",hidden:!a},b.createElement("div",{className:"glass-activity-heading"},b.createElement("h2",{id:"glass-activity-title"},"城市動態"),b.createElement("label",{className:"glass-opacity-control"},b.createElement("span",null,"透明度"),b.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:n,"aria-label":"玻璃面板透明度",onChange:R=>r(Number(R.target.value)),onPointerUp:T,onBlur:T}),b.createElement("output",null,n,"%")),b.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var R;e(!1),(R=H.current)==null||R.focus()}},b.createElement(vy,{size:20}))),b.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},b.createElement(my,{entries:g.log})),b.createElement("button",{className:"glass-activity-all",onClick:()=>N("log")},"全部紀錄 ",b.createElement(Ph,{size:16}))),b.createElement("div",{className:"world-top-right"},b.createElement("span",{className:"saved"},b.createElement(UM,{size:13}),De?"此瀏覽器無法存檔":"自動儲存"),b.createElement(_3,null),b.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":o,onClick:()=>c(R=>!R)},b.createElement("span",{className:"emotion-toggle-indicator"}),o?"情緒動畫 開":"情緒動畫 關"),b.createElement("button",{className:"emotion-animation-toggle skill-animation-toggle",type:"button","aria-pressed":f,onClick:()=>m(R=>!R)},b.createElement("span",{className:"emotion-toggle-indicator"}),f?"技能動畫 開":"技能動畫 關"),b.createElement("button",{className:"icon-button sound","aria-label":X?"關閉音效":"開啟音效",onClick:_t},X?b.createElement(XM,{size:18}):b.createElement(WM,{size:18}))),P&&b.createElement("div",{className:"webgl-error"},P),b.createElement("div",{className:"board-foot"},b.createElement("div",{className:"camera-toolbar"},b.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:Me?"selected":"",onClick:()=>{var R;(R=Te.current)==null||R.rotate(),Ne(!Me)}},b.createElement(HM,{size:20}),b.createElement("span",null,"旋轉視角")),b.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var R;(R=Te.current)==null||R.reset(),Ne(!1)}},b.createElement(GM,{size:18})),b.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var R;return(R=Te.current)==null?void 0:R.top()}},b.createElement(kM,{size:18})),b.createElement("i",null),b.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var R;return(R=Te.current)==null?void 0:R.zoom(1.15)}},b.createElement(qM,{size:20})),b.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var R;return(R=Te.current)==null?void 0:R.zoom(.87)}},b.createElement(YM,{size:20}))),b.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),b.createElement(x3,{event:I,players:g.players,animated:o&&!v,paused:g.stage==="moving"||A!==null}),b.createElement("aside",{className:"sidebar"},b.createElement("div",{className:"round-heading"},b.createElement("div",null,b.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),b.createElement("h1",null,"回合 ",b.createElement("b",null,String(g.round).padStart(2,"0")),b.createElement("span",null,"/ ",g.maxRounds===null?"∞":g.maxRounds)),b.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${g.inflationRate}%，物價指數 ${g.priceIndex.toFixed(2)} 倍`},b.createElement("span",{className:"inflation-rate-badge"},b.createElement(VM,{size:14,"aria-hidden":"true"}),"通膨率 ",b.createElement("b",null,g.inflationRate,"%")),b.createElement("span",{className:"inflation-index"},"物價指數 ",b.createElement("b",null,g.priceIndex.toFixed(2),"×")))),b.createElement("span",{className:"round-icon"},b.createElement(OM,{size:21}))),b.createElement("div",{className:"tabs"},b.createElement("button",{className:G==="players"?"active":"",onClick:()=>Q("players")},"玩家概況"),b.createElement("button",{className:G==="properties"?"active":"",onClick:()=>Q("properties")},"我的地產 ",b.createElement("span",null,Ua(g,0).length))),b.createElement(E3,{game:g}),b.createElement("div",{className:"overview"},G==="players"?g.players.map(R=>b.createElement("div",{key:R.id,className:"player-row "+(g.turn===R.id?"current ":"")+(R.bankrupt?"bankrupt":""),style:{"--player":Bp(R)}},b.createElement(hy,{id:R.id,player:R}),b.createElement("div",{className:"player-info"},b.createElement("strong",null,R.name,R.id===0?b.createElement("em",null,"玩家"):b.createElement("span",{className:"ai"},"電腦")),b.createElement("small",null,R.bankrupt?"已破產":`${Ua(g,R.id).length} 塊地產${R.jail?" · 監獄中":""}`),b.createElement(M3,{player:R})),b.createElement("div",{className:"player-cash"},b.createElement("b",null,yt(R.cash)),g.turn===R.id&&b.createElement("small",null,b.createElement("span",null)," 目前回合")))):b.createElement("div",{className:"property-list"},Ua(g,0).length?Ua(g,0).map(R=>b.createElement("button",{key:R.id,onClick:()=>lt(R.id)},b.createElement("i",{style:{background:R.color}}),b.createElement("span",null,b.createElement("strong",null,R.name),b.createElement("small",null,T3(g.lots[R.id].level)," · 租金 ",yt(Lp(g,R)))),b.createElement(LM,{size:16}))):b.createElement("div",{className:"empty-properties"},b.createElement(yu,{size:28}),b.createElement("strong",null,"你的第一塊地產，正在等你"),b.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),b.createElement("section",{className:"turn-panel","aria-live":"polite"},b.createElement("div",{className:"turn-title"},b.createElement("span",{className:"live-dot",style:{background:Bp(Ce)}}),b.createElement("h2",null,g.stage==="finished"?"本局已結束":Xe?"你的回合":`${Ce.name}的回合`),b.createElement("span",null,g.stage==="moving"?"移動中":g.stage==="decision"?"購地時刻":Xe?"準備出發":"電腦玩家")),b.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(R=>b.createElement("button",{key:R,"aria-pressed":(Ce.diceCount??2)===R,disabled:!Xe||g.stage!=="ready"||!!Ce.jail||!!g.pendingSkill,onClick:()=>y({type:"SET_DICE_COUNT",count:R})},R," 顆骰子"))),b.createElement("div",{className:"dice-row"},(g.stage==="ready"?Array.from({length:Ce.diceCount??2},()=>1):g.dice).map((R,Z)=>b.createElement(S3,{key:Z,value:R,rolling:g.stage==="moving"}))),b.createElement("section",{className:`skill-panel${p?" skill-pulse":""}`,"aria-label":"技能卡手牌"},b.createElement("div",{className:"skill-panel-heading"},b.createElement("h3",null,b.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),b.createElement("span",null,Ce.human?`${Bt.length} / 3`:`${Bt.length} 張`)),Ce.human?Bt.length?b.createElement("div",{className:"skill-card-list"},Bt.map(R=>b.createElement(b3,{key:R.id,card:R,count:J[R.id],disabled:ve(R),selected:(_==null?void 0:_.id)===R.id,onClick:()=>Se(R)}))):b.createElement("p",{className:"skill-empty"},"抵達機會格，或經過／抵達城市基金格，有機會取得技能卡。"):b.createElement("p",{className:"skill-ai-count"},"電腦玩家持有 ",Bt.length," 張技能卡"),_&&!ee&&b.createElement("div",{className:"skill-detail"},b.createElement("div",{className:"skill-detail-heading"},b.createElement("span",{className:"skill-detail-icon"},_.icon),b.createElement("div",null,b.createElement("strong",null,_.name),b.createElement("span",null,_.summary),b.createElement("small",null,_.timing==="active"?"主動卡 · 可在自己回合使用":"反應卡 · 需等待符合條件的事件"))),b.createElement("div",{className:"skill-detail-actions"},b.createElement("button",{type:"button",className:"secondary",onClick:()=>de(null)},"關閉說明"),b.createElement("button",{type:"button",className:"primary",disabled:ve(_),onClick:Le},"使用"))),_&&ee&&b.createElement("div",{className:"skill-target-picker"},b.createElement("div",null,b.createElement("strong",null,_.name),b.createElement("span",null,_.summary)),_.target==="player"&&b.createElement("label",null,"選擇目標",b.createElement("select",{value:ee.targetId,onChange:R=>F(Z=>({...Z,targetId:Number(R.target.value)}))},Ct.map(R=>b.createElement("option",{key:R.id,value:R.id},R.name,R.jail?" · 監獄中":"")))),_.id==="teleport"&&b.createElement("label",null,"選擇合法位置",b.createElement("select",{value:ee.targetPosition,onChange:R=>F(Z=>({...Z,targetPosition:Number(R.target.value)}))},Tu.map(R=>b.createElement("option",{key:R,value:R},Gt[R].name,Gt[R].type==="property"?" · 地產":"")))),_.target==="land"&&b.createElement("div",{className:"skill-land-pickers"},b.createElement("label",null,"你的土地",b.createElement("select",{value:ee.ownLotId,onChange:R=>F(Z=>({...Z,ownLotId:Number(R.target.value)}))},_e.map(R=>b.createElement("option",{key:R.id,value:R.id},R.name)))),b.createElement("label",null,"交換土地",b.createElement("select",{value:ee.targetLotId,onChange:R=>F(Z=>({...Z,targetLotId:Number(R.target.value)}))},C.map(R=>{var Z;return b.createElement("option",{key:R.id,value:R.id},R.name," · ",(Z=g.players[g.lots[R.id].owner])==null?void 0:Z.name)})))),b.createElement("div",{className:"skill-target-actions"},b.createElement("button",{type:"button",className:"secondary",onClick:()=>{F(null),de(null)}},"取消"),b.createElement("button",{type:"button",className:"primary",disabled:_.id==="teleport"?!ee.targetId&&ee.targetId!==0||!Tu.includes(ee.targetPosition):_.target==="player"?!ee.targetId:!ee.ownLotId||!ee.targetLotId,onClick:Oe},"確認使用")))),(W==null?void 0:W.human)&&b.createElement("section",{className:"skill-reaction-prompt","aria-live":"assertive"},b.createElement("strong",null,j==null?void 0:j.name,"正在對你使用",((Y=sl.find(R=>R.id===g.pendingSkill.cardId))==null?void 0:Y.name)||"技能卡"),b.createElement("span",null,"效果尚未結算，請選擇是否回應。"),b.createElement("div",null,b.createElement("button",{type:"button",disabled:!W.skillHand.includes("counter"),onClick:()=>y({type:"RESPOND_SKILL",playerId:W.id,response:"counter"})},"使用反制卡"),b.createElement("button",{type:"button",disabled:!W.skillHand.includes("reflect"),onClick:()=>y({type:"RESPOND_SKILL",playerId:W.id,response:"reflect"})},"使用反彈卡"),b.createElement("button",{type:"button",className:"secondary",onClick:()=>y({type:"RESPOND_SKILL",playerId:W.id,response:"pass"})},"不回應"))),(k==null?void 0:k.human)&&b.createElement("section",{className:"skill-overflow","aria-live":"polite"},b.createElement("strong",null,"手牌已達上限"),b.createElement("span",null,"剛抽到第 4 張技能卡，請選擇立即使用或放棄其中一張。"),b.createElement("div",{className:"skill-overflow-list"},(k.skillHand||[]).map((R,Z)=>{const be=sl.find(ge=>ge.id===R);return be?b.createElement("div",{className:"skill-overflow-card",key:`${R}-${Z}`},b.createElement("span",{className:"skill-overflow-card-icon"},be.icon),b.createElement("strong",null,be.name),b.createElement("button",{type:"button",disabled:ie(be),onClick:()=>re(be,!0)},"使用"),b.createElement("button",{type:"button",onClick:()=>y({type:"RESOLVE_SKILL_OVERFLOW",cardId:R})},"放棄")):null}))),g.stage==="finished"?b.createElement("button",{className:"primary",onClick:()=>N("result")},b.createElement(rv,{size:19}),"查看結算"):Xe&&g.stage==="decision"?b.createElement("div",{className:"buy-actions"},b.createElement("div",{className:"buy-summary"},b.createElement("strong",null,Jt.name),b.createElement("b",null,yt(al(g,Jt)))),b.createElement("button",{className:"primary",disabled:!!k||!!g.pendingSkill,onClick:()=>y({type:"BUY"})},b.createElement(yu,{size:18}),"購買地產"),b.createElement("button",{className:"skip-button",disabled:!!k||!!g.pendingSkill,onClick:()=>y({type:"SKIP"})},"暫不購買，保留現金 ",b.createElement(Wc,{size:14}))):b.createElement("button",{className:"primary",disabled:!Xe||g.stage==="moving"||!!ee||!!k||!!g.pendingSkill,onClick:()=>g.stage==="end"?y({type:"NEXT"}):It()},g.stage==="moving"?b.createElement(b.Fragment,null,"前進中 · 還有 ",g.remaining," 格"):Xe?g.stage==="end"?b.createElement(b.Fragment,null,"結束回合 ",b.createElement(Wc,{size:19})):b.createElement(b.Fragment,null,b.createElement(_y,{size:21}),"擲骰子"):b.createElement(b.Fragment,null,"電腦思考中",b.createElement("span",{className:"thinking"},"…"))),b.createElement("p",{className:"turn-hint"},g.stage==="ready"?Xe?"好運從這一步開始。":"下一段城市冒險，即將展開。":g.notice),g.event&&b.createElement("div",{className:"event-note"},b.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),b.createElement("div",null,b.createElement("strong",null,g.event.title),b.createElement("span",null,g.event.kind==="inflation"?g.event.inflationDelta===0?`通膨率維持 ${g.inflationRate}%（已達上下限）`:`通膨率 ${g.event.inflationDelta>0?"+":""}${g.event.inflationDelta}% · 目前 ${g.inflationRate}%`:`${g.event.amount>0?"+":"−"} ${yt(Math.abs(g.event.amount))}`),g.event.skillCardName&&b.createElement("em",null,"獲得技能卡 · ",g.event.skillCardName)))),b.createElement("section",{className:"activity"},b.createElement("div",{className:"activity-heading"},b.createElement("h2",null,"城市動態"),b.createElement("button",{onClick:()=>N("log")},"全部紀錄 ",b.createElement(Ph,{size:14}))),b.createElement("div",{className:"activity-list"},b.createElement(my,{entries:g.log.slice(0,3)}))),b.createElement("footer",{className:"sidebar-footer"},b.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),A==="rules"&&b.createElement(nl,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>N(null)},b.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),b.createElement("div",{className:"rules-list"},Fp.map(([R,Z],be)=>b.createElement("div",{key:R},b.createElement("span",null,String(be+1).padStart(2,"0")),b.createElement("section",null,b.createElement("h3",null,R),b.createElement("p",null,Z))))),b.createElement("button",{className:"primary",onClick:()=>N(null)},"知道了，回到城市 ",b.createElement(Wc,{size:18}))),A==="new"&&b.createElement(nl,{title:"開啟一段全新的城市故事",onClose:()=>N(null)},b.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),b.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),b.createElement("label",{className:"setup-count"},"玩家人數 ",b.createElement("select",{value:ze.count,onChange:R=>se(Z=>({...Z,count:Number(R.target.value)}))},[2,3,4].map(R=>b.createElement("option",{key:R,value:R},R," 人")))),b.createElement("label",{className:"setup-count"},"最多回合 ",b.createElement("select",{"aria-label":"最多回合",value:ze.roundOption,onChange:R=>se(Z=>({...Z,roundOption:R.target.value}))},b.createElement("option",{value:"40"},"40 回合"),b.createElement("option",{value:"80"},"80 回合"),b.createElement("option",{value:"custom"},"自訂"),b.createElement("option",{value:"unlimited"},"無限制"))),b.createElement("label",{className:"setup-count"},"初始通膨率 ",b.createElement("select",{"aria-label":"初始通膨率",value:ze.inflationRate,onChange:R=>se(Z=>({...Z,inflationRate:Number(R.target.value)}))},Array.from({length:nx+1},(R,Z)=>b.createElement("option",{key:Z,value:Z},Z,"%")))),b.createElement("label",{className:"setup-count"},"建築數量限制 ",b.createElement("select",{"aria-label":"建築數量限制",value:ze.limitBuildings?"limited":"unlimited",onChange:R=>se(Z=>({...Z,limitBuildings:R.target.value==="limited"}))},b.createElement("option",{value:"limited"},"限制（房屋 32、旅館 12）"),b.createElement("option",{value:"unlimited"},"不限數量"))),ze.roundOption==="custom"&&b.createElement("label",{className:"round-limit-custom"},"自訂回合數",b.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:ze.customRounds,onChange:R=>se(Z=>({...Z,customRounds:R.target.value}))})),b.createElement("div",{className:"player-setup"},ze.players.slice(0,ze.count).map((R,Z)=>b.createElement("div",{className:"player-setup-row",key:Z},b.createElement("input",{"aria-label":`玩家 ${Z+1} 名稱`,value:R.name,onChange:be=>se(ge=>({...ge,players:ge.players.map((Fe,Be)=>Be===Z?{...Fe,name:be.target.value}:Fe)}))}),b.createElement("input",{"aria-label":`玩家 ${Z+1} 顏色`,type:"color",value:R.color,onChange:be=>se(ge=>({...ge,players:ge.players.map((Fe,Be)=>Be===Z?{...Fe,color:be.target.value}:Fe)}))}),b.createElement("select",{value:R.human?"human":"ai",onChange:be=>se(ge=>({...ge,players:ge.players.map((Fe,Be)=>Be===Z?{...Fe,human:be.target.value==="human"}:Fe)}))},b.createElement("option",{value:"human"},"真人"),b.createElement("option",{value:"ai"},"電腦"))))),b.createElement("button",{className:"primary",disabled:ze.roundOption==="custom"&&!ut,onClick:Qt},b.createElement(sv,{size:18}),"開始新遊戲"),b.createElement("button",{className:"secondary full",onClick:()=>N(null)},"繼續目前遊戲")),A==="property"&&tt&&b.createElement(nl,{title:"地產手冊",onClose:()=>N(null)},b.createElement("div",{className:"property-card",style:{"--lot":tt.color}},b.createElement("div",{className:"property-banner"},tt.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),b.createElement(IM,{size:24}),b.createElement("h3",null,tt.name),b.createElement("p",null,tt.type==="property"?`街區 ${tt.group+1} · ${ht?`${g.players[ht.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),tt.type==="property"?b.createElement(b.Fragment,null,b.createElement("div",{className:"property-stats"},b.createElement("div",null,b.createElement("span",null,"地產價格"),b.createElement("b",null,yt(al(g,tt)))),b.createElement("div",null,b.createElement("span",null,"目前租金"),b.createElement("b",null,yt(ht?Lp(g,tt):Gn(g,Math.round(tt.price*.18))))),b.createElement("div",null,b.createElement("span",null,"建築等級"),b.createElement("b",null,A3(ht==null?void 0:ht.level))),b.createElement("div",null,b.createElement("span",null,"建造費"),b.createElement("b",null,yt(ml(tt,g))))),(ht==null?void 0:ht.owner)===Ce.id?b.createElement(b.Fragment,null,b.createElement("p",{className:"property-help"},R3(g,tt,ht)),b.createElement("button",{className:"primary",disabled:!je||!Op(g,tt.id,Ce.id),onClick:()=>y({type:"BUILD",id:tt.id})},b.createElement(av,{size:18}),C3(g,tt,ht)),b.createElement("button",{className:"secondary full",disabled:!je,onClick:()=>{y({type:"SELL",id:tt.id}),N(null)}},"變賣地產 · ",yt(Gn(g,tt.price+ht.level*Math.round(tt.price*.6),R=>Math.floor(R*.5))))):zt?b.createElement(b.Fragment,null,b.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),b.createElement("button",{className:"primary",onClick:()=>y({type:"BUY"})},b.createElement(yu,{size:18}),"購買地產 · ",yt(al(g,tt))),b.createElement("button",{className:"secondary full",onClick:()=>{y({type:"SKIP"}),N(null)}},"暫不購買，保留現金")):b.createElement("p",{className:"property-help"},ht?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):b.createElement("p",{className:"property-help"},tt.type==="start"?`每次經過起點，領取 ${yt(Gn(g,2e3))}。`:tt.type==="chance"||tt.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":tt.type==="gojail"?"前往監獄並暫停下一回合。":tt.type==="tax"?`停在這裡支付 ${yt(Gn(g,tt.id===6?1200:1800))} 稅金。`:tt.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),A==="log"&&b.createElement(nl,{title:"本局城市紀錄",onClose:()=>N(null)},b.createElement("div",{className:"full-log"},g.log.map((R,Z)=>b.createElement("p",{key:Z},b.createElement("span",null,String(g.log.length-Z).padStart(2,"0")),R.text)))),(A==="result"||g.stage==="finished"&&A===null)&&b.createElement(nl,{title:"這座城市，有了新的大亨",onClose:()=>N("closedResult")},b.createElement("div",{className:"winner"},b.createElement(rv,{size:42}),b.createElement("h3",null,(Pe=g.players[g.winner])==null?void 0:Pe.name,"獲勝！"),b.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),b.createElement("div",{className:"rankings"},[...g.players].sort((R,Z)=>ul(g,Z.id)-ul(g,R.id)).map((R,Z)=>b.createElement("div",{key:R.id},b.createElement("b",null,Z+1),b.createElement(hy,{id:R.id,player:R,small:!0}),b.createElement("strong",null,R.name),b.createElement("span",null,R.bankrupt?"已破產":yt(ul(g,R.id)))))),b.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),b.createElement("button",{className:"primary",onClick:Qt},"再玩一場 ",b.createElement(Wc,{size:18}))))}CM.createRoot(document.getElementById("root")).render(b.createElement(L3,null));
