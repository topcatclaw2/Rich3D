(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function GS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ih={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function VS(){if(D_)return dt;D_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,E={};function v(L,J,Ee){this.props=L,this.context=J,this.refs=E,this.updater=Ee||T}v.prototype.isReactComponent={},v.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=v.prototype;function H(L,J,Ee){this.props=L,this.context=J,this.refs=E,this.updater=Ee||T}var D=H.prototype=new I;D.constructor=H,C(D,v.prototype),D.isPureReactComponent=!0;var z=Array.isArray;function P(){}var N={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(L,J,Ee){var Re=Ee.ref;return{$$typeof:r,type:L,key:J,ref:Re!==void 0?Re:null,props:Ee}}function W(L,J){return O(L.type,J,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function k(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ee){return J[Ee]})}var oe=/\/+/g;function pe(L,J){return typeof L=="object"&&L!==null&&L.key!=null?k(""+L.key):J.toString(36)}function ee(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function F(L,J,Ee,Re,Oe){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(ne){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case e:Me=!0;break;case y:return Me=L._init,F(Me(L._payload),J,Ee,Re,Oe)}}if(Me)return Oe=Oe(L),Me=Re===""?"."+pe(L,0):Re,z(Oe)?(Ee="",Me!=null&&(Ee=Me.replace(oe,"$&/")+"/"),F(Oe,J,Ee,"",function(lt){return lt})):Oe!=null&&(X(Oe)&&(Oe=W(Oe,Ee+(Oe.key==null||L&&L.key===Oe.key?"":(""+Oe.key).replace(oe,"$&/")+"/")+Me)),J.push(Oe)),1;Me=0;var be=Re===""?".":Re+":";if(z(L))for(var ke=0;ke<L.length;ke++)Re=L[ke],ne=be+pe(Re,ke),Me+=F(Re,J,Ee,ne,Oe);else if(ke=M(L),typeof ke=="function")for(L=ke.call(L),ke=0;!(Re=L.next()).done;)Re=Re.value,ne=be+pe(Re,ke++),Me+=F(Re,J,Ee,ne,Oe);else if(ne==="object"){if(typeof L.then=="function")return F(ee(L),J,Ee,Re,Oe);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function U(L,J,Ee){if(L==null)return L;var Re=[],Oe=0;return F(L,Re,"","",function(ne){return J.call(Ee,ne,Oe++)}),Re}function q(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(Ee){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ee)},function(Ee){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ee)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var ue=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xe={map:U,forEach:function(L,J,Ee){U(L,function(){J.apply(this,arguments)},Ee)},count:function(L){var J=0;return U(L,function(){J++}),J},toArray:function(L){return U(L,function(J){return J})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return dt.Activity=x,dt.Children=xe,dt.Component=v,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=H,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,dt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return N.H.useMemoCache(L)}},dt.cache=function(L){return function(){return L.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(L,J,Ee){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Re=C({},L.props),Oe=L.key;if(J!=null)for(ne in J.key!==void 0&&(Oe=""+J.key),J)!b.call(J,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&J.ref===void 0||(Re[ne]=J[ne]);var ne=arguments.length-2;if(ne===1)Re.children=Ee;else if(1<ne){for(var Me=Array(ne),be=0;be<ne;be++)Me[be]=arguments[be+2];Re.children=Me}return O(L.type,Oe,Re)},dt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},dt.createElement=function(L,J,Ee){var Re,Oe={},ne=null;if(J!=null)for(Re in J.key!==void 0&&(ne=""+J.key),J)b.call(J,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Oe[Re]=J[Re]);var Me=arguments.length-2;if(Me===1)Oe.children=Ee;else if(1<Me){for(var be=Array(Me),ke=0;ke<Me;ke++)be[ke]=arguments[ke+2];Oe.children=be}if(L&&L.defaultProps)for(Re in Me=L.defaultProps,Me)Oe[Re]===void 0&&(Oe[Re]=Me[Re]);return O(L,ne,Oe)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(L){return{$$typeof:p,render:L}},dt.isValidElement=X,dt.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:q}},dt.memo=function(L,J){return{$$typeof:d,type:L,compare:J===void 0?null:J}},dt.startTransition=function(L){var J=N.T,Ee={};N.T=Ee;try{var Re=L(),Oe=N.S;Oe!==null&&Oe(Ee,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(P,ue)}catch(ne){ue(ne)}finally{J!==null&&Ee.types!==null&&(J.types=Ee.types),N.T=J}},dt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},dt.use=function(L){return N.H.use(L)},dt.useActionState=function(L,J,Ee){return N.H.useActionState(L,J,Ee)},dt.useCallback=function(L,J){return N.H.useCallback(L,J)},dt.useContext=function(L){return N.H.useContext(L)},dt.useDebugValue=function(){},dt.useDeferredValue=function(L,J){return N.H.useDeferredValue(L,J)},dt.useEffect=function(L,J){return N.H.useEffect(L,J)},dt.useEffectEvent=function(L){return N.H.useEffectEvent(L)},dt.useId=function(){return N.H.useId()},dt.useImperativeHandle=function(L,J,Ee){return N.H.useImperativeHandle(L,J,Ee)},dt.useInsertionEffect=function(L,J){return N.H.useInsertionEffect(L,J)},dt.useLayoutEffect=function(L,J){return N.H.useLayoutEffect(L,J)},dt.useMemo=function(L,J){return N.H.useMemo(L,J)},dt.useOptimistic=function(L,J){return N.H.useOptimistic(L,J)},dt.useReducer=function(L,J,Ee){return N.H.useReducer(L,J,Ee)},dt.useRef=function(L){return N.H.useRef(L)},dt.useState=function(L){return N.H.useState(L)},dt.useSyncExternalStore=function(L,J,Ee){return N.H.useSyncExternalStore(L,J,Ee)},dt.useTransition=function(){return N.H.useTransition()},dt.version="19.2.8",dt}var U_;function bp(){return U_||(U_=1,Ih.exports=VS()),Ih.exports}var At=bp();const B=GS(At);var Bh={exports:{}},al={},Fh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function kS(){return N_||(N_=1,(function(r){function e(F,U){var q=F.length;F.push(U);e:for(;0<q;){var ue=q-1>>>1,xe=F[ue];if(0<l(xe,U))F[ue]=U,F[q]=xe,q=ue;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var U=F[0],q=F.pop();if(q!==U){F[0]=q;e:for(var ue=0,xe=F.length,L=xe>>>1;ue<L;){var J=2*(ue+1)-1,Ee=F[J],Re=J+1,Oe=F[Re];if(0>l(Ee,q))Re<xe&&0>l(Oe,Ee)?(F[ue]=Oe,F[Re]=q,ue=Re):(F[ue]=Ee,F[J]=q,ue=J);else if(Re<xe&&0>l(Oe,q))F[ue]=Oe,F[Re]=q,ue=Re;else break e}}return U}function l(F,U){var q=F.sortIndex-U.sortIndex;return q!==0?q:F.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],y=1,x=null,g=3,M=!1,T=!1,C=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var U=i(d);U!==null;){if(U.callback===null)s(d);else if(U.startTime<=F)s(d),U.sortIndex=U.expirationTime,e(m,U);else break;U=i(d)}}function z(F){if(C=!1,D(F),!T)if(i(m)!==null)T=!0,P||(P=!0,k());else{var U=i(d);U!==null&&ee(z,U.startTime-F)}}var P=!1,N=-1,b=5,O=-1;function W(){return E?!0:!(r.unstable_now()-O<b)}function X(){if(E=!1,P){var F=r.unstable_now();O=F;var U=!0;try{e:{T=!1,C&&(C=!1,I(N),N=-1),M=!0;var q=g;try{t:{for(D(F),x=i(m);x!==null&&!(x.expirationTime>F&&W());){var ue=x.callback;if(typeof ue=="function"){x.callback=null,g=x.priorityLevel;var xe=ue(x.expirationTime<=F);if(F=r.unstable_now(),typeof xe=="function"){x.callback=xe,D(F),U=!0;break t}x===i(m)&&s(m),D(F)}else s(m);x=i(m)}if(x!==null)U=!0;else{var L=i(d);L!==null&&ee(z,L.startTime-F),U=!1}}break e}finally{x=null,g=q,M=!1}U=void 0}}finally{U?k():P=!1}}}var k;if(typeof H=="function")k=function(){H(X)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,pe=oe.port2;oe.port1.onmessage=X,k=function(){pe.postMessage(null)}}else k=function(){v(X,0)};function ee(F,U){N=v(function(){F(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(F){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var q=g;g=U;try{return F()}finally{g=q}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=g;g=F;try{return U()}finally{g=q}},r.unstable_scheduleCallback=function(F,U,q){var ue=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=q+xe,F={id:y++,callback:U,priorityLevel:F,startTime:q,expirationTime:xe,sortIndex:-1},q>ue?(F.sortIndex=q,e(d,F),i(m)===null&&F===i(d)&&(C?(I(N),N=-1):C=!0,ee(z,q-ue))):(F.sortIndex=xe,e(m,F),T||M||(T=!0,P||(P=!0,k()))),F},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(F){var U=g;return function(){var q=g;g=U;try{return F.apply(this,arguments)}finally{g=q}}}})(Hh)),Hh}var L_;function XS(){return L_||(L_=1,Fh.exports=kS()),Fh.exports}var Gh={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function WS(){if(O_)return Vn;O_=1;var r=bp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:y}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(m,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,y)},Vn.flushSync=function(m){var d=h.T,y=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=y,s.d.f()}},Vn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Vn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Vn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):y==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Vn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Vn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin);s.d.L(m,y,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Vn.preloadModule=function(m,d){if(typeof m=="string")if(d){var y=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Vn.requestFormReset=function(m){s.d.r(m)},Vn.unstable_batchedUpdates=function(m,d){return m(d)},Vn.useFormState=function(m,d,y){return h.H.useFormState(m,d,y)},Vn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Vn.version="19.2.8",Vn}var P_;function YS(){if(P_)return Gh.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=WS(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function qS(){if(z_)return al;z_=1;var r=XS(),e=bp(),i=YS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ee=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ue=[],xe=-1;function L(t){return{current:t}}function J(t){0>xe||(t.current=ue[xe],ue[xe]=null,xe--)}function Ee(t,n){xe++,ue[xe]=t.current,t.current=n}var Re=L(null),Oe=L(null),ne=L(null),Me=L(null);function be(t,n){switch(Ee(ne,n),Ee(Oe,t),Ee(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=e_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Re),Ee(Re,t)}function ke(){J(Re),J(Oe),J(ne)}function lt(t){t.memoizedState!==null&&Ee(Me,t);var n=Re.current,a=e_(n,t.type);n!==a&&(Ee(Oe,t),Ee(Re,a))}function tt(t){Oe.current===t&&(J(Re),J(Oe)),Me.current===t&&(J(Me),el._currentValue=q)}var Yt,ht;function xt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ht}var St=!1;function vt(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(fe){var ce=fe}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(fe){ce=fe}t.call(Se.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var V=_.split(`
`),ae=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ae.length)for(o=V.length-1,u=ae.length-1;1<=o&&0<=u&&V[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ae[u]){var ge=`
`+V[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return vt(t.type,!1);case 11:return vt(t.type.render,!1);case 1:return vt(t.type,!0);case 31:return xt("Activity");default:return""}}function ve(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,we=r.unstable_scheduleCallback,Ve=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,G=r.unstable_requestPaint,qe=r.unstable_now,Ie=r.unstable_getCurrentPriorityLevel,w=r.unstable_ImmediatePriority,S=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,te=r.unstable_LowPriority,he=r.unstable_IdlePriority,Ae=r.log,Ue=r.unstable_setDisableYieldValue,de=null,me=null;function Ne(t){if(typeof Ae=="function"&&Ue(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(de,t)}catch{}}var Xe=Math.clz32?Math.clz32:it,Be=Math.log,Pe=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Be(t)/Pe|0)|0}var at=256,ft=262144,Z=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=De(o):(_&=R,_!==0?u=De(_):a||(a=R&~t,a!==0&&(u=De(a))))):(R=o&~f,R!==0?u=De(R):_!==0?u=De(_):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-Xe(a),Se=1<<ge;R[ge]=0,V[ge]=-1;var ce=ae[ge];if(ce!==null)for(ae[ge]=null,ge=0;ge<ce.length;ge++){var fe=ce[ge];fe!==null&&(fe.lane&=-536870913)}a&=~Se}o!==0&&Bt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Bt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ri(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function oi(t,n){var a=n&-n;return a=(a&42)!==0?1:po(a),(a&(t.suspendedLanes|n))!==0?0:a}function po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function go(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:E_(t.type))}function ir(t,n){var a=U.p;try{return U.p=t,n()}finally{U.p=a}}var Xi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Xi,On="__reactProps$"+Xi,Kn="__reactContainer$"+Xi,bs="__reactEvents$"+Xi,wl="__reactListeners$"+Xi,Dl="__reactHandles$"+Xi,Ts="__reactResources$"+Xi,Ia="__reactMarker$"+Xi;function Ba(t){delete t[mn],delete t[On],delete t[bs],delete t[wl],delete t[Dl]}function ra(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Kn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=o_(t);t!==null;){if(a=t[mn])return a;t=o_(t)}return n}t=a,a=t.parentNode}return null}function oa(t){if(t=t[mn]||t[Kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function As(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Fa(t){var n=t[Ts];return n||(n=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ia]=!0}var Ul=new Set,A={};function Q(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(A[t]=n,t=0;t<n.length;t++)Ul.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function Ze(t){return Ce.call(Fe,t)?!0:Ce.call(re,t)?!1:se.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function ze(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lt(t){if(!t._valueTracker){var n=mt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Ht(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Et(t,_,st(n)):a!=null?Et(t,_,st(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+st(R):t.removeAttribute("name")}function Gn(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Lt(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Lt(t)}function Et(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function li(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Li(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ee(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Lt(t)}function ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Oi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&sn(t,f,n[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return Ha.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var Lu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function jp(t){var n=oa(t);if(n&&(t=n.stateNode)){var a=t[On]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[On]||null;if(!u)throw Error(s(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":li(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var Pu=!1;function $p(t,n,a){if(Pu)return t(n,a);Pu=!0;try{var o=t(n);return o}finally{if(Pu=!1,(ar!==null||sr!==null)&&(vc(),ar&&(n=ar,t=sr,sr=ar=null,jp(n),t)))for(n=0;n<t.length;n++)jp(t[n])}}function _o(t,n){var a=t.stateNode;if(a===null)return null;var o=a[On]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(ca)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){zu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{zu=!1}var Ga=null,Iu=null,Nl=null;function em(){if(Nl)return Nl;var t,n=Iu,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return Nl=u.slice(t,1<o?1-o:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function tm(){return!1}function Qn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ol:tm,this.isPropagationStopped=tm,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Qn(Cs),yo=x({},Cs,{view:0,detail:0}),Fy=Qn(yo),Bu,Fu,xo,zl=x({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Bu=t.screenX-xo.screenX,Fu=t.screenY-xo.screenY):Fu=Bu=0,xo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),nm=Qn(zl),Hy=x({},zl,{dataTransfer:0}),Gy=Qn(Hy),Vy=x({},yo,{relatedTarget:0}),Hu=Qn(Vy),ky=x({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=Qn(ky),Wy=x({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yy=Qn(Wy),qy=x({},Cs,{data:0}),im=Qn(qy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qy[t])?!!n[t]:!1}function Gu(){return Jy}var jy=x({},yo,{key:function(t){if(t.key){var n=Zy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=Qn(jy),ex=x({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=Qn(ex),tx=x({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),nx=Qn(tx),ix=x({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Qn(ix),sx=x({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=Qn(sx),ox=x({},Cs,{newState:0,oldState:0}),lx=Qn(ox),cx=[9,13,27,32],Vu=ca&&"CompositionEvent"in window,So=null;ca&&"documentMode"in document&&(So=document.documentMode);var ux=ca&&"TextEvent"in window&&!So,sm=ca&&(!Vu||So&&8<So&&11>=So),rm=" ",om=!1;function lm(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function fx(t,n){switch(t){case"compositionend":return cm(n);case"keypress":return n.which!==32?null:(om=!0,rm);case"textInput":return t=n.data,t===rm&&om?null:t;default:return null}}function hx(t,n){if(rr)return t==="compositionend"||!Vu&&lm(t,n)?(t=em(),Nl=Iu=Ga=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sm&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function fm(t,n,a,o){ar?sr?sr.push(o):sr=[o]:ar=o,n=Tc(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Mo=null,Eo=null;function px(t){qg(t,0)}function Il(t){var n=As(t);if(an(n))return t}function hm(t,n){if(t==="change")return n}var dm=!1;if(ca){var ku;if(ca){var Xu="oninput"in document;if(!Xu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Xu=typeof pm.oninput=="function"}ku=Xu}else ku=!1;dm=ku&&(!document.documentMode||9<document.documentMode)}function mm(){Mo&&(Mo.detachEvent("onpropertychange",gm),Eo=Mo=null)}function gm(t){if(t.propertyName==="value"&&Il(Eo)){var n=[];fm(n,Eo,t,Ou(t)),$p(px,n)}}function mx(t,n,a){t==="focusin"?(mm(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",gm)):t==="focusout"&&mm()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Eo)}function _x(t,n){if(t==="click")return Il(n)}function vx(t,n){if(t==="input"||t==="change")return Il(n)}function yx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:yx;function bo(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!ui(t[u],n[u]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,n){var a=_m(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_m(a)}}function ym(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ym(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xx=ca&&"documentMode"in document&&11>=document.documentMode,or=null,Yu=null,To=null,qu=!1;function Sm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||or==null||or!==Jt(o)||(o=or,"selectionStart"in o&&Wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),To&&bo(To,o)||(To=o,o=Tc(Yu,"onSelect"),0<o.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=or)))}function ws(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var lr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Zu={},Mm={};ca&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Ds(t){if(Zu[t])return Zu[t];if(!lr[t])return t;var n=lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mm)return Zu[t]=n[a];return t}var Em=Ds("animationend"),bm=Ds("animationiteration"),Tm=Ds("animationstart"),Sx=Ds("transitionrun"),Mx=Ds("transitionstart"),Ex=Ds("transitioncancel"),Am=Ds("transitionend"),Rm=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Pi(t,n){Rm.set(t,n),Q(n,[t])}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],cr=0,Qu=0;function Fl(){for(var t=cr,n=Qu=cr=0;n<t;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var f=Si[n];if(Si[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Cm(a,u,f)}}function Hl(t,n,a,o){Si[cr++]=t,Si[cr++]=n,Si[cr++]=a,Si[cr++]=o,Qu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ju(t,n,a,o){return Hl(t,n,a,o),Gl(t)}function Us(t,n){return Hl(t,null,null,n),Gl(t)}function Cm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Gl(t){if(50<qo)throw qo=0,oh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function bx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,n,a,o){return new bx(t,n,a,o)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=fi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")ju(t)&&(_=1);else if(typeof t=="string")_=wS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=fi(31,a,n,u),t.elementType=O,t.lanes=f,t;case C:return Ns(a.children,u,f,n);case E:_=8,u|=24;break;case v:return t=fi(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case z:return t=fi(13,a,n,u),t.elementType=z,t.lanes=f,t;case P:return t=fi(19,a,n,u),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case I:_=9;break e;case D:_=11;break e;case N:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=fi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ns(t,n,a,o){return t=fi(7,t,o,n),t.lanes=a,t}function $u(t,n,a){return t=fi(6,t,null,n),t.lanes=a,t}function Dm(t){var n=fi(18,null,null,0);return n.stateNode=t,n}function ef(t,n,a){return n=fi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Um=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=Um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ve(n)},Um.set(t,n),n)}return{value:t,source:n,stack:ve(n)}}var fr=[],hr=0,kl=null,Ao=0,Ei=[],bi=0,Va=null,Yi=1,qi="";function fa(t,n){fr[hr++]=Ao,fr[hr++]=kl,kl=t,Ao=n}function Nm(t,n,a){Ei[bi++]=Yi,Ei[bi++]=qi,Ei[bi++]=Va,Va=t;var o=Yi;t=qi;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var f=32-Xe(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Yi=1<<32-Xe(n)+u|a<<u|o,qi=f+t}else Yi=1<<f|a<<u|o,qi=t}function tf(t){t.return!==null&&(fa(t,1),Nm(t,1,0))}function nf(t){for(;t===kl;)kl=fr[--hr],fr[hr]=null,Ao=fr[--hr],fr[hr]=null;for(;t===Va;)Va=Ei[--bi],Ei[bi]=null,qi=Ei[--bi],Ei[bi]=null,Yi=Ei[--bi],Ei[bi]=null}function Lm(t,n){Ei[bi++]=Yi,Ei[bi++]=qi,Ei[bi++]=Va,Yi=n.id,qi=n.overflow,Va=t}var Pn=null,en=null,Dt=!1,ka=null,Ti=!1,af=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(Mi(n,t)),af}function Om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[On]=o,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Tt(Ko[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),Li(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Jg(n.textContent,a)?(o.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),o.onScroll!=null&&Tt("scroll",n),o.onScrollEnd!=null&&Tt("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||Xa(t,!0)}function Pm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Pn=Pn.return}}function dr(t){if(t!==Pn)return!1;if(!Dt)return Pm(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mh(t.type,t.memoizedProps)),a=!a),a&&en&&Xa(t),Pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=r_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=r_(t)}else n===27?(n=en,as(t.type)?(t=Rh,Rh=null,en=t):en=n):en=Pn?Ri(t.stateNode.nextSibling):null;return!0}function Ls(){en=Pn=null,Dt=!1}function sf(){var t=ka;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),ka=null),t}function Ro(t){ka===null?ka=[t]:ka.push(t)}var rf=L(null),Os=null,ha=null;function Wa(t,n,a){Ee(rf,n._currentValue),n._currentValue=a}function da(t){t._currentValue=rf.current,J(rf)}function of(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function lf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),of(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),of(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function pr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ui(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(el):t=[el])}u=u.return}t!==null&&lf(n,t,a,o),n.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ps(t){Os=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return zm(Os,t)}function Wl(t,n){return Os===null&&Ps(t),zm(t,n)}function zm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(t===null)throw Error(s(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=r.unstable_scheduleCallback,Rx=r.unstable_NormalPriority,_n={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new Tx,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&Ax(Rx,function(){t.controller.abort()})}var wo=null,uf=0,mr=0,gr=null;function Cx(t,n){if(wo===null){var a=wo=[];uf=0,mr=dh(),gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uf++,n.then(Im,Im),n}function Im(){if(--uf===0&&wo!==null){gr!==null&&(gr.status="fulfilled");var t=wo;wo=null,mr=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Bm=F.S;F.S=function(t,n){Sg=qe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cx(t,n),Bm!==null&&Bm(t,n)};var zs=L(null);function ff(){var t=zs.current;return t!==null?t:jt.pooledCache}function Yl(t,n){n===null?Ee(zs,zs.current):Ee(zs,n.pool)}function Fm(){var t=ff();return t===null?null:{parent:_n._currentValue,pool:t}}var _r=Error(s(460)),hf=Error(s(474)),ql=Error(s(542)),Zl={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,km(t),t;default:if(typeof n.status=="string")n.then(la,la);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,km(t),t}throw Bs=n,_r}}function Is(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bs=a,_r):a}}var Bs=null;function Vm(){if(Bs===null)throw Error(s(459));var t=Bs;return Bs=null,t}function km(t){if(t===_r||t===ql)throw Error(s(483))}var vr=null,Do=0;function Kl(t){var n=Do;return Do+=1,vr===null&&(vr=[]),Gm(vr,t,n)}function Uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xm(t){function n($,Y){if(t){var ie=$.deletions;ie===null?($.deletions=[Y],$.flags|=16):ie.push(Y)}}function a($,Y){if(!t)return null;for(;Y!==null;)n($,Y),Y=Y.sibling;return null}function o($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function u($,Y){return $=ua($,Y),$.index=0,$.sibling=null,$}function f($,Y,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<Y?($.flags|=67108866,Y):ie):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function _($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,Y,ie,ye){return Y===null||Y.tag!==6?(Y=$u(ie,$.mode,ye),Y.return=$,Y):(Y=u(Y,ie),Y.return=$,Y)}function V($,Y,ie,ye){var rt=ie.type;return rt===C?ge($,Y,ie.props.children,ye,ie.key):Y!==null&&(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&Is(rt)===Y.type)?(Y=u(Y,ie.props),Uo(Y,ie),Y.return=$,Y):(Y=Vl(ie.type,ie.key,ie.props,null,$.mode,ye),Uo(Y,ie),Y.return=$,Y)}function ae($,Y,ie,ye){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=ef(ie,$.mode,ye),Y.return=$,Y):(Y=u(Y,ie.children||[]),Y.return=$,Y)}function ge($,Y,ie,ye,rt){return Y===null||Y.tag!==7?(Y=Ns(ie,$.mode,ye,rt),Y.return=$,Y):(Y=u(Y,ie),Y.return=$,Y)}function Se($,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=$u(""+Y,$.mode,ie),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return ie=Vl(Y.type,Y.key,Y.props,null,$.mode,ie),Uo(ie,Y),ie.return=$,ie;case T:return Y=ef(Y,$.mode,ie),Y.return=$,Y;case b:return Y=Is(Y),Se($,Y,ie)}if(ee(Y)||k(Y))return Y=Ns(Y,$.mode,ie,null),Y.return=$,Y;if(typeof Y.then=="function")return Se($,Kl(Y),ie);if(Y.$$typeof===H)return Se($,Wl($,Y),ie);Ql($,Y)}return null}function ce($,Y,ie,ye){var rt=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return rt!==null?null:R($,Y,""+ie,ye);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===rt?V($,Y,ie,ye):null;case T:return ie.key===rt?ae($,Y,ie,ye):null;case b:return ie=Is(ie),ce($,Y,ie,ye)}if(ee(ie)||k(ie))return rt!==null?null:ge($,Y,ie,ye,null);if(typeof ie.then=="function")return ce($,Y,Kl(ie),ye);if(ie.$$typeof===H)return ce($,Y,Wl($,ie),ye);Ql($,ie)}return null}function fe($,Y,ie,ye,rt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return $=$.get(ie)||null,R(Y,$,""+ye,rt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case M:return $=$.get(ye.key===null?ie:ye.key)||null,V(Y,$,ye,rt);case T:return $=$.get(ye.key===null?ie:ye.key)||null,ae(Y,$,ye,rt);case b:return ye=Is(ye),fe($,Y,ie,ye,rt)}if(ee(ye)||k(ye))return $=$.get(ie)||null,ge(Y,$,ye,rt,null);if(typeof ye.then=="function")return fe($,Y,ie,Kl(ye),rt);if(ye.$$typeof===H)return fe($,Y,ie,Wl(Y,ye),rt);Ql(Y,ye)}return null}function je($,Y,ie,ye){for(var rt=null,Ot=null,et=Y,_t=Y=0,wt=null;et!==null&&_t<ie.length;_t++){et.index>_t?(wt=et,et=null):wt=et.sibling;var Pt=ce($,et,ie[_t],ye);if(Pt===null){et===null&&(et=wt);break}t&&et&&Pt.alternate===null&&n($,et),Y=f(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt,et=wt}if(_t===ie.length)return a($,et),Dt&&fa($,_t),rt;if(et===null){for(;_t<ie.length;_t++)et=Se($,ie[_t],ye),et!==null&&(Y=f(et,Y,_t),Ot===null?rt=et:Ot.sibling=et,Ot=et);return Dt&&fa($,_t),rt}for(et=o(et);_t<ie.length;_t++)wt=fe(et,$,_t,ie[_t],ye),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?_t:wt.key),Y=f(wt,Y,_t),Ot===null?rt=wt:Ot.sibling=wt,Ot=wt);return t&&et.forEach(function(cs){return n($,cs)}),Dt&&fa($,_t),rt}function ct($,Y,ie,ye){if(ie==null)throw Error(s(151));for(var rt=null,Ot=null,et=Y,_t=Y=0,wt=null,Pt=ie.next();et!==null&&!Pt.done;_t++,Pt=ie.next()){et.index>_t?(wt=et,et=null):wt=et.sibling;var cs=ce($,et,Pt.value,ye);if(cs===null){et===null&&(et=wt);break}t&&et&&cs.alternate===null&&n($,et),Y=f(cs,Y,_t),Ot===null?rt=cs:Ot.sibling=cs,Ot=cs,et=wt}if(Pt.done)return a($,et),Dt&&fa($,_t),rt;if(et===null){for(;!Pt.done;_t++,Pt=ie.next())Pt=Se($,Pt.value,ye),Pt!==null&&(Y=f(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt);return Dt&&fa($,_t),rt}for(et=o(et);!Pt.done;_t++,Pt=ie.next())Pt=fe(et,$,_t,Pt.value,ye),Pt!==null&&(t&&Pt.alternate!==null&&et.delete(Pt.key===null?_t:Pt.key),Y=f(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&et.forEach(function(HS){return n($,HS)}),Dt&&fa($,_t),rt}function Kt($,Y,ie,ye){if(typeof ie=="object"&&ie!==null&&ie.type===C&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var rt=ie.key;Y!==null;){if(Y.key===rt){if(rt=ie.type,rt===C){if(Y.tag===7){a($,Y.sibling),ye=u(Y,ie.props.children),ye.return=$,$=ye;break e}}else if(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&Is(rt)===Y.type){a($,Y.sibling),ye=u(Y,ie.props),Uo(ye,ie),ye.return=$,$=ye;break e}a($,Y);break}else n($,Y);Y=Y.sibling}ie.type===C?(ye=Ns(ie.props.children,$.mode,ye,ie.key),ye.return=$,$=ye):(ye=Vl(ie.type,ie.key,ie.props,null,$.mode,ye),Uo(ye,ie),ye.return=$,$=ye)}return _($);case T:e:{for(rt=ie.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a($,Y.sibling),ye=u(Y,ie.children||[]),ye.return=$,$=ye;break e}else{a($,Y);break}else n($,Y);Y=Y.sibling}ye=ef(ie,$.mode,ye),ye.return=$,$=ye}return _($);case b:return ie=Is(ie),Kt($,Y,ie,ye)}if(ee(ie))return je($,Y,ie,ye);if(k(ie)){if(rt=k(ie),typeof rt!="function")throw Error(s(150));return ie=rt.call(ie),ct($,Y,ie,ye)}if(typeof ie.then=="function")return Kt($,Y,Kl(ie),ye);if(ie.$$typeof===H)return Kt($,Y,Wl($,ie),ye);Ql($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Y!==null&&Y.tag===6?(a($,Y.sibling),ye=u(Y,ie),ye.return=$,$=ye):(a($,Y),ye=$u(ie,$.mode,ye),ye.return=$,$=ye),_($)):a($,Y)}return function($,Y,ie,ye){try{Do=0;var rt=Kt($,Y,ie,ye);return vr=null,rt}catch(et){if(et===_r||et===ql)throw et;var Ot=fi(29,et,null,$.mode);return Ot.lanes=ye,Ot.return=$,Ot}finally{}}}var Fs=Xm(!0),Wm=Xm(!1),Ya=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Gl(t),Cm(t,null,a),n}return Hl(t,o,n,a),Gl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ri(t,a)}}function mf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gf=!1;function Lo(){if(gf){var t=gr;if(t!==null)throw t}}function Oo(t,n,a,o){gf=!1;var u=t.updateQueue;Ya=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,ae=V.next;V.next=null,_===null?f=ae:_.next=ae,_=V;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==_&&(R===null?ge.firstBaseUpdate=ae:R.next=ae,ge.lastBaseUpdate=V))}if(f!==null){var Se=u.baseState;_=0,ge=ae=V=null,R=f;do{var ce=R.lane&-536870913,fe=ce!==R.lane;if(fe?(Ct&ce)===ce:(o&ce)===ce){ce!==0&&ce===mr&&(gf=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=t,ct=R;ce=n;var Kt=a;switch(ct.tag){case 1:if(je=ct.payload,typeof je=="function"){Se=je.call(Kt,Se,ce);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ct.payload,ce=typeof je=="function"?je.call(Kt,Se,ce):je,ce==null)break e;Se=x({},Se,ce);break e;case 2:Ya=!0}}ce=R.callback,ce!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ae=ge=fe,V=Se):ge=ge.next=fe,_|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);ge===null&&(V=Se),u.baseState=V,u.firstBaseUpdate=ae,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),$a|=_,t.lanes=_,t.memoizedState=Se}}function Ym(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function qm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ym(a[t],n)}var yr=L(null),Jl=L(0);function Zm(t,n){t=Ma,Ee(Jl,t),Ee(yr,n),Ma=t|n.baseLanes}function _f(){Ee(Jl,Ma),Ee(yr,yr.current)}function vf(){Ma=Jl.current,J(yr),J(Jl)}var hi=L(null),Ai=null;function Ka(t){var n=t.alternate;Ee(hn,hn.current&1),Ee(hi,t),Ai===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(Ai=t)}function yf(t){Ee(hn,hn.current),Ee(hi,t),Ai===null&&(Ai=t)}function Km(t){t.tag===22?(Ee(hn,hn.current),Ee(hi,t),Ai===null&&(Ai=t)):Qa()}function Qa(){Ee(hn,hn.current),Ee(hi,hi.current)}function di(t){J(hi),Ai===t&&(Ai=null),J(hn)}var hn=L(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||Ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,gt=null,qt=null,vn=null,$l=!1,xr=!1,Hs=!1,ec=0,Po=0,Sr=null,Dx=0;function cn(){throw Error(s(321))}function xf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ui(t[a],n[a]))return!1;return!0}function Sf(t,n,a,o,u,f){return pa=f,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?N0:zf,Hs=!1,f=a(o,u),Hs=!1,xr&&(f=Jm(n,a,o,u)),Qm(t),f}function Qm(t){F.H=Bo;var n=qt!==null&&qt.next!==null;if(pa=0,vn=qt=gt=null,$l=!1,Po=0,Sr=null,n)throw Error(s(300));t===null||yn||(t=t.dependencies,t!==null&&Xl(t)&&(yn=!0))}function Jm(t,n,a,o){gt=t;var u=0;do{if(xr&&(Sr=null),Po=0,xr=!1,25<=u)throw Error(s(301));if(u+=1,vn=qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=L0,f=n(a,o)}while(xr);return f}function Ux(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?zo(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(gt.flags|=1024),n}function Mf(){var t=ec!==0;return ec=0,t}function Ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bf(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}pa=0,vn=qt=gt=null,xr=!1,Po=ec=0,Sr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?gt.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(qt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=vn===null?gt.memoizedState:vn.next;if(n!==null)vn=n,qt=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},vn===null?gt.memoizedState=vn=t:vn=vn.next=t}return vn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var n=Po;return Po+=1,Sr===null&&(Sr=[]),t=Gm(Sr,t,n),n=gt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?N0:zf),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===H)return zn(t)}throw Error(s(438,String(t)))}function Tf(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=W;return n.index++,a}function ma(t,n){return typeof n=="function"?n(t):n}function ic(t){var n=dn();return Af(n,qt,t)}function Af(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,V=null,ae=n,ge=!1;do{var Se=ae.lane&-536870913;if(Se!==ae.lane?(Ct&Se)===Se:(pa&Se)===Se){var ce=ae.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Se===mr&&(ge=!0);else if((pa&ce)===ce){ae=ae.next,ce===mr&&(ge=!0);continue}else Se={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=Se,_=f):V=V.next=Se,gt.lanes|=ce,$a|=ce;Se=ae.action,Hs&&a(f,Se),f=ae.hasEagerState?ae.eagerState:a(f,Se)}else ce={lane:Se,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=ce,_=f):V=V.next=ce,gt.lanes|=Se,$a|=Se;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?_=f:V.next=R,!ui(f,t.memoizedState)&&(yn=!0,ge&&(a=gr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Rf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ui(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function jm(t,n,a){var o=gt,u=dn(),f=Dt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ui((qt||u).memoizedState,a);if(_&&(u.memoizedState=a,yn=!0),u=u.queue,Df(t0.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,Mr(9,{destroy:void 0},e0.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(pa&127)!==0||$m(o,n,a)}return a}function $m(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=tc(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function e0(t,n,a,o){n.value=a,n.getSnapshot=o,n0(n)&&i0(t)}function t0(t,n,a){return a(function(){n0(n)&&i0(t)})}function n0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ui(t,a)}catch{return!0}}function i0(t){var n=Us(t,2);n!==null&&ti(n,t,2)}function Cf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Hs){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function a0(t,n,a,o){return t.baseState=a,Af(t,qt,typeof o=="function"?o:ma)}function Nx(t,n,a,o,u){if(rc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,s0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function s0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var R=a(u,o),V=F.S;V!==null&&V(_,R),r0(t,n,R)}catch(ae){wf(t,n,ae)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(u,o),r0(t,n,f)}catch(ae){wf(t,n,ae)}}function r0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){o0(t,n,o)},function(o){return wf(t,n,o)}):o0(t,n,a)}function o0(t,n,a){n.status="fulfilled",n.value=a,l0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,s0(t,a)))}function wf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,l0(n),n=n.next;while(n!==o)}t.action=null}function l0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function c0(t,n){return n}function u0(t,n){if(Dt){var a=jt.formState;if(a!==null){e:{var o=gt;if(Dt){if(en){t:{for(var u=en,f=Ti;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ri(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){en=Ri(u.nextSibling),o=u.data==="F!";break e}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:n},a.queue=o,a=w0.bind(null,gt,o),o.dispatch=a,o=Cf(!1),f=Pf.bind(null,gt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Nx.bind(null,gt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function f0(t){var n=dn();return h0(n,qt,t)}function h0(t,n,a){if(n=Af(t,n,c0)[0],t=ic(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=zo(n)}catch(_){throw _===_r?ql:_}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,Mr(9,{destroy:void 0},Lx.bind(null,u,a),null)),[o,f,t]}function Lx(t,n){t.action=n}function d0(t){var n=dn(),a=qt;if(a!==null)return h0(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Mr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=tc(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function p0(){return dn().memoizedState}function ac(t,n,a,o){var u=Yn();gt.flags|=t,u.memoizedState=Mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function sc(t,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;qt!==null&&o!==null&&xf(o,qt.memoizedState.deps)?u.memoizedState=Mr(n,f,a,o):(gt.flags|=t,u.memoizedState=Mr(1|n,f,a,o))}function m0(t,n){ac(8390656,8,t,n)}function Df(t,n){sc(2048,8,t,n)}function Ox(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=tc(),gt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function g0(t){var n=dn().memoizedState;return Ox({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _0(t,n){return sc(4,2,t,n)}function v0(t,n){return sc(4,4,t,n)}function y0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function x0(t,n,a){a=a!=null?a.concat([t]):null,sc(4,4,y0.bind(null,n,t),a)}function Uf(){}function S0(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&xf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function M0(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&xf(n,o[1]))return o[0];if(o=t(),Hs){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o}function Nf(t,n,a){return a===void 0||(pa&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Eg(),gt.lanes|=t,$a|=t,a)}function E0(t,n,a,o){return ui(a,n)?a:yr.current!==null?(t=Nf(t,a,o),ui(t,n)||(yn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(Ct&261930)===0?(yn=!0,t.memoizedState=a):(t=Eg(),gt.lanes|=t,$a|=t,n)}function b0(t,n,a,o,u){var f=U.p;U.p=f!==0&&8>f?f:8;var _=F.T,R={};F.T=R,Pf(t,!1,n,a);try{var V=u(),ae=F.S;if(ae!==null&&ae(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=wx(V,o);Io(t,n,ge,gi(t))}else Io(t,n,o,gi(t))}catch(Se){Io(t,n,{then:function(){},status:"rejected",reason:Se},gi())}finally{U.p=f,_!==null&&R.types!==null&&(_.types=R.types),F.T=_}}function Px(){}function Lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=T0(t).queue;b0(t,u,n,q,a===null?Px:function(){return A0(t),a(o)})}function T0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function A0(t){var n=T0(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},gi())}function Of(){return zn(el)}function R0(){return dn().memoizedState}function C0(){return dn().memoizedState}function zx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=qa(a);var o=Za(n,t,a);o!==null&&(ti(o,n,a),No(o,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function Ix(t,n,a){var o=gi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(t)?D0(n,a):(a=Ju(t,n,a,o),a!==null&&(ti(a,t,o),U0(a,n,o)))}function w0(t,n,a){var o=gi();Io(t,n,a,o)}function Io(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(t))D0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ui(R,_))return Hl(t,n,u,0),jt===null&&Fl(),!1}catch{}finally{}if(a=Ju(t,n,u,o),a!==null)return ti(a,t,o),U0(a,n,o),!0}return!1}function Pf(t,n,a,o){if(o={lane:2,revertLane:dh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(n)throw Error(s(479))}else n=Ju(t,a,o,2),n!==null&&ti(n,t,2)}function rc(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function D0(t,n){xr=$l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function U0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ri(t,a)}}var Bo={readContext:zn,use:nc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Bo.useEffectEvent=cn;var N0={readContext:zn,use:nc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:m0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ac(4194308,4,y0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ac(4194308,4,t,n)},useInsertionEffect:function(t,n){ac(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(Hs){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(Hs){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ix.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,a=w0.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(t,n){var a=Yn();return Nf(a,t,n)},useTransition:function(){var t=Cf(!1);return t=b0.bind(null,gt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=gt,u=Yn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(Ct&127)!==0||$m(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,m0(t0.bind(null,o,f,t),[t]),o.flags|=2048,Mr(9,{destroy:void 0},e0.bind(null,o,f,a,n),null),a},useId:function(){var t=Yn(),n=jt.identifierPrefix;if(Dt){var a=qi,o=Yi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:u0,useActionState:u0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pf.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return Yn().memoizedState=zx.bind(null,gt)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},zf={readContext:zn,use:nc,useCallback:S0,useContext:zn,useEffect:Df,useImperativeHandle:x0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:ic,useRef:p0,useState:function(){return ic(ma)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=dn();return E0(a,qt.memoizedState,t,n)},useTransition:function(){var t=ic(ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:jm,useId:R0,useHostTransitionStatus:Of,useFormState:f0,useActionState:f0,useOptimistic:function(t,n){var a=dn();return a0(a,qt,t,n)},useMemoCache:Tf,useCacheRefresh:C0};zf.useEffectEvent=g0;var L0={readContext:zn,use:nc,useCallback:S0,useContext:zn,useEffect:Df,useImperativeHandle:x0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:Rf,useRef:p0,useState:function(){return Rf(ma)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=dn();return qt===null?Nf(a,t,n):E0(a,qt.memoizedState,t,n)},useTransition:function(){var t=Rf(ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:jm,useId:R0,useHostTransitionStatus:Of,useFormState:d0,useActionState:d0,useOptimistic:function(t,n){var a=dn();return qt!==null?a0(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:C0};L0.useEffectEvent=g0;function If(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=gi(),u=qa(o);u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(ti(n,t,o),No(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=gi(),u=qa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(ti(n,t,o),No(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),o=qa(a);o.tag=2,n!=null&&(o.callback=n),n=Za(t,o,a),n!==null&&(ti(n,t,a),No(n,t,a))}};function O0(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,o)||!bo(u,f):!0}function P0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Bf.enqueueReplaceState(n,n.state,null)}function Gs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function z0(t){Bl(t)}function I0(t){console.error(t)}function B0(t){Bl(t)}function oc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function F0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ff(t,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(t,n)},a}function H0(t){return t=qa(t),t.tag=3,t}function G0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){F0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){F0(n,a,o),typeof u!="function"&&(es===null?es=new Set([this]):es.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Bx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&pr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?yc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),uh(t,o,u)),!1;case 22:return a.flags|=65536,o===Zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),uh(t,o,u)),!1}throw Error(s(435,a.tag))}return uh(t,o,u),yc(),!1}if(Dt)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==af&&(t=Error(s(422),{cause:o}),Ro(Mi(t,a)))):(o!==af&&(n=Error(s(423),{cause:o}),Ro(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Mi(o,a),u=Ff(t.stateNode,o,u),mf(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:o});if(f=Mi(f,a),Yo===null?Yo=[f]:Yo.push(f),un!==4&&(un=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ff(a.stateNode,o,t),mf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(es===null||!es.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=H0(u),G0(u,t,a,o),mf(a,u),!1}a=a.return}while(a!==null);return!1}var Hf=Error(s(461)),yn=!1;function In(t,n,a,o){n.child=t===null?Wm(n,null,a,o):Fs(n,t.child,a,o)}function V0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ps(n),o=Sf(t,n,a,_,f,u),R=Mf(),t!==null&&!yn?(Ef(t,n,u),ga(t,n,u)):(Dt&&R&&tf(n),n.flags|=1,In(t,n,o,u),n.child)}function k0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!ju(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,X0(t,n,f,o,u)):(t=Vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,o)&&t.ref===n.ref)return ga(t,n,u)}return n.flags|=1,t=ua(f,o),t.ref=n.ref,t.return=n,n.child=t}function X0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(bo(f,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=f,Zf(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,ga(t,n,u)}return Gf(t,n,a,o,u)}function W0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Y0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,f!==null?f.cachePool:null),f!==null?Zm(n,f):_f(),Km(n);else return o=n.lanes=536870912,Y0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Yl(n,f.cachePool),Zm(n,f),Qa(),n.memoizedState=null):(t!==null&&Yl(n,null),_f(),Qa());return In(t,n,u,a),n.child}function Fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Y0(t,n,a,o,u){var f=ff();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Yl(n,null),_f(),Km(n),t!==null&&pr(t,n,o,!0),n.childLanes=u,null}function lc(t,n){return n=uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function q0(t,n,a){return Fs(n,t.child,null,a),t=lc(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function Fx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=lc(n,o),n.lanes=536870912,Fo(null,t);if(yf(n),(t=en)?(t=s_(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return lc(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=q0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||pr(t,n,a,!1),u=(a&t.childLanes)!==0,yn||u){if(o=jt,o!==null&&(_=oi(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Us(t,_),ti(o,t,_),Hf;yc(),n=q0(t,n,a)}else t=f.treeContext,en=Ri(_.nextSibling),Pn=n,Dt=!0,ka=null,Ti=!1,t!==null&&Lm(n,t),n=lc(n,o),n.flags|=4096;return n}return t=ua(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function cc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gf(t,n,a,o,u){return Ps(n),a=Sf(t,n,a,o,void 0,u),o=Mf(),t!==null&&!yn?(Ef(t,n,u),ga(t,n,u)):(Dt&&o&&tf(n),n.flags|=1,In(t,n,a,u),n.child)}function Z0(t,n,a,o,u,f){return Ps(n),n.updateQueue=null,a=Jm(n,o,a,u),Qm(t),o=Mf(),t!==null&&!yn?(Ef(t,n,f),ga(t,n,f)):(Dt&&o&&tf(n),n.flags|=1,In(t,n,a,f),n.child)}function K0(t,n,a,o,u){if(Ps(n),n.stateNode===null){var f=ur,_=a.contextType;typeof _=="object"&&_!==null&&(f=zn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},df(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?zn(_):ur,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(If(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Bf.enqueueReplaceState(f,f.state,null),Oo(n,o,f,u),Lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,V=Gs(a,R);f.props=V;var ae=f.context,ge=a.contextType;_=ur,typeof ge=="object"&&ge!==null&&(_=zn(ge));var Se=a.getDerivedStateFromProps;ge=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ae!==_)&&P0(n,f,o,_),Ya=!1;var ce=n.memoizedState;f.state=ce,Oo(n,o,f,u),Lo(),ae=n.memoizedState,R||ce!==ae||Ya?(typeof Se=="function"&&(If(n,a,Se,o),ae=n.memoizedState),(V=Ya||O0(n,a,V,o,ce,ae,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=_,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,pf(t,n),_=n.memoizedProps,ge=Gs(a,_),f.props=ge,Se=n.pendingProps,ce=f.context,ae=a.contextType,V=ur,typeof ae=="object"&&ae!==null&&(V=zn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Se||ce!==V)&&P0(n,f,o,V),Ya=!1,ce=n.memoizedState,f.state=ce,Oo(n,o,f,u),Lo();var fe=n.memoizedState;_!==Se||ce!==fe||Ya||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof R=="function"&&(If(n,a,R,o),fe=n.memoizedState),(ge=Ya||O0(n,a,ge,o,ce,fe,V)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=V,o=ge):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,cc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Fs(n,t.child,null,u),n.child=Fs(n,null,a,u)):In(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ga(t,n,u),t}function Q0(t,n,a,o){return Ls(),n.flags|=256,In(t,n,a,o),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(t){return{baseLanes:t,cachePool:Fm()}}function Xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function J0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?Ka(n):Qa(),(t=en)?(t=s_(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw Xa(n);return Ah(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Qa(),u=n.mode,R=uc({mode:"hidden",children:R},u),o=Ns(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,_,a),n.memoizedState=Vf,Fo(null,o)):(Ka(n),Wf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(Ka(n),n.flags&=-257,n=Yf(t,n,a)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,n=null):(Qa(),R=o.fallback,u=n.mode,o=uc({mode:"visible",children:o.children},u),R=Ns(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Fs(n,t.child,null,a),o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,_,a),n.memoizedState=Vf,n=Fo(null,o));else if(Ka(n),Ah(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ae=_.dgst;_=ae,o=Error(s(419)),o.stack="",o.digest=_,Ro({value:o,source:null,stack:null}),n=Yf(t,n,a)}else if(yn||pr(t,n,a,!1),_=(a&t.childLanes)!==0,yn||_){if(_=jt,_!==null&&(o=oi(_,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Us(t,o),ti(_,t,o),Hf;Th(R)||yc(),n=Yf(t,n,a)}else Th(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,en=Ri(R.nextSibling),Pn=n,Dt=!0,ka=null,Ti=!1,t!==null&&Lm(n,t),n=Wf(n,o.children),n.flags|=4096);return n}return u?(Qa(),R=o.fallback,u=n.mode,V=t.child,ae=V.sibling,o=ua(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ae!==null?R=ua(ae,R):(R=Ns(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Fo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=kf(a):(u=R.cachePool,u!==null?(V=_n._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Fm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Xf(t,_,a),n.memoizedState=Vf,Fo(t.child,o)):(Ka(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Wf(t,n){return n=uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uc(t,n){return t=fi(22,t,null,n),t.lanes=0,t}function Yf(t,n,a){return Fs(n,t.child,null,a),t=Wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function j0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),of(t.return,n,a)}function qf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function $0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=hn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Ee(hn,_),In(t,n,o,a),o=Dt?Ao:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j0(t,a,n);else if(t.tag===19)j0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),qf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}qf(n,!0,a,null,f,o);break;case"together":qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function Hx(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Wa(n,_n,t.memoizedState.cache),Ls();break;case 27:case 5:lt(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?J0(t,n,a):(Ka(n),t=ga(t,n,a),t!==null?t.sibling:null);Ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(pr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return $0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(hn,hn.current),o)break;return null;case 22:return n.lanes=0,W0(t,n,a,n.pendingProps);case 24:Wa(n,_n,t.memoizedState.cache)}return ga(t,n,a)}function eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return yn=!1,Hx(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Dt&&(n.flags&1048576)!==0&&Nm(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Is(n.elementType),n.type=t,typeof t=="function")ju(t)?(o=Gs(t,o),n.tag=1,n=K0(null,n,t,o,a)):(n.tag=0,n=Gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=V0(null,n,t,o,a);break e}else if(u===N){n.tag=14,n=k0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return Gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Gs(o,n.pendingProps),K0(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,pf(t,n),Oo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Wa(n,_n,o),o!==f.cache&&lf(n,[_n],a,!0),Lo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Q0(t,n,o,a);break e}else if(o!==u){u=Mi(Error(s(424)),n),Ro(u),n=Q0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ri(t.firstChild),Pn=n,Dt=!0,ka=null,Ti=!0,a=Wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),o===u){n=ga(t,n,a);break e}In(t,n,o,a)}n=n.child}return n;case 26:return cc(t,n),t===null?(a=f_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=Ac(ne.current).createElement(a),o[mn]=n,o[On]=t,Bn(o,a,t),gn(o),n.stateNode=o):n.memoizedState=f_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return lt(n),t===null&&Dt&&(o=n.stateNode=l_(n.type,n.pendingProps,ne.current),Pn=n,Ti=!0,u=en,as(n.type)?(Rh=u,en=Ri(o.firstChild)):en=u),In(t,n,n.pendingProps.children,a),cc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=o=en)&&(o=gS(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Pn=n,en=Ri(o.firstChild),Ti=!1,u=!0):u=!1),u||Xa(n)),lt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Mh(u,f)?o=null:_!==null&&Mh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Sf(t,n,Ux,null,null,a),el._currentValue=u),cc(t,n),In(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=en)&&(a=_S(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Pn=n,en=null,t=!0):t=!1),t||Xa(n)),null;case 13:return J0(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Fs(n,null,o,a):In(t,n,o,a),n.child;case 11:return V0(t,n,n.type,n.pendingProps,a);case 7:return In(t,n,n.pendingProps,a),n.child;case 8:return In(t,n,n.pendingProps.children,a),n.child;case 12:return In(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Wa(n,n.type,o.value),In(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ps(n),u=zn(u),o=o(u),n.flags|=1,In(t,n,o,a),n.child;case 14:return k0(t,n,n.type,n.pendingProps,a);case 15:return X0(t,n,n.type,n.pendingProps,a);case 19:return $0(t,n,a);case 31:return Fx(t,n,a);case 22:return W0(t,n,a,n.pendingProps);case 24:return Ps(n),o=zn(_n),t===null?(u=ff(),u===null&&(u=jt,f=cf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},df(n),Wa(n,_n,u)):((t.lanes&a)!==0&&(pf(t,n),Oo(n,null,null,a),Lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,_n,o)):(o=f.cache,Wa(n,_n,o),o!==u.cache&&lf(n,[_n],a,!0))),In(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function _a(t){t.flags|=4}function Kf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Rg())t.flags|=8192;else throw Bs=Zl,hf}else t.flags&=-16777217}function tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g_(n))if(Rg())t.flags|=8192;else throw Bs=Zl,hf}function fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Ar|=n)}function Ho(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Gx(t,n,a){var o=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(_n),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(dr(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sf())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(_a(n),f!==null?(tn(n),tg(n,f)):(tn(n),Kf(n,u,null,o,a))):f?f!==t.memoizedState?(_a(n),tn(n),tg(n,f)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(n),tn(n),Kf(n,u,t,o,a)),null;case 27:if(tt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=Re.current,dr(n)?Om(n):(t=l_(u,o,a),n.stateNode=t,_a(n))}return tn(n),null;case 5:if(tt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(f=Re.current,dr(n))Om(n);else{var _=Ac(ne.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[mn]=n,f[On]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(n)}}return tn(n),Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,dr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Jg(t.nodeValue,a)),t||Xa(n,!0)}else t=Ac(t).createTextNode(o),t[mn]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=dr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=dr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),fc(n,n.updateQueue),tn(n),null);case 4:return ke(),t===null&&_h(n.stateNode.containerInfo),tn(n),null;case 10:return da(n.type),tn(n),null;case 19:if(J(hn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ho(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=jl(t),f!==null){for(n.flags|=128,Ho(o,!1),t=f.updateQueue,n.updateQueue=t,fc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wm(a,t),a=a.sibling;return Ee(hn,hn.current&1|2),Dt&&fa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&qe()>gc&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304)}else{if(!u)if(t=jl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,fc(n,t),Ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Dt)return tn(n),null}else 2*qe()-o.renderingStartTime>gc&&a!==536870912&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=qe(),t.sibling=null,a=hn.current,Ee(hn,u?a&1|2:a&1),Dt&&fa(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return di(n),vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&fc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(zs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(_n),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Vx(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(_n),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(hn),null;case 4:return ke(),null;case 10:return da(n.type),null;case 22:case 23:return di(n),vf(),t!==null&&J(zs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(_n),null;case 25:return null;default:return null}}function ng(t,n){switch(nf(n),n.tag){case 3:da(_n),ke();break;case 26:case 27:case 5:tt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:J(hn);break;case 10:da(n.type);break;case 22:case 23:di(n),vf(),t!==null&&J(zs);break;case 24:da(_n)}}function Go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var V=a,ae=R;try{ae()}catch(ge){kt(u,V,ge)}}}o=o.next}while(o!==f)}}catch(ge){kt(n,n.return,ge)}}function ig(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qm(n,a)}catch(o){kt(t,t.return,o)}}}function ag(t,n,a){a.props=Gs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function sg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Qf(t,n,a){try{var o=t.stateNode;uS(o,t.type,a,n),o[On]=n}catch(u){kt(t,t.return,u)}}function rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&as(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&as(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&as(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(jf(t,n,a),t=t.sibling;t!==null;)jf(t,n,a),t=t.sibling}function hc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&as(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(hc(t,n,a),t=t.sibling;t!==null;)hc(t,n,a),t=t.sibling}function og(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[mn]=t,n[On]=a}catch(f){kt(t,t.return,f)}}var va=!1,xn=!1,$f=!1,lg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function kx(t,n){if(t=t.containerInfo,xh=Lc,t=xm(t),Wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,V=-1,ae=0,ge=0,Se=t,ce=null;t:for(;;){for(var fe;Se!==a||u!==0&&Se.nodeType!==3||(R=_+u),Se!==f||o!==0&&Se.nodeType!==3||(V=_+o),Se.nodeType===3&&(_+=Se.nodeValue.length),(fe=Se.firstChild)!==null;)ce=Se,Se=fe;for(;;){if(Se===t)break t;if(ce===a&&++ae===u&&(R=_),ce===f&&++ge===o&&(V=_),(fe=Se.nextSibling)!==null)break;Se=ce,ce=Se.parentNode}Se=fe}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sh={focusedElem:t,selectionRange:a},Lc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var je=Gs(a.type,u);t=o.getSnapshotBeforeUpdate(je,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){kt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function cg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),o&4&&Go(5,a);break;case 1:if(xa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){kt(a,a.return,_)}else{var u=Gs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){kt(a,a.return,_)}}o&64&&ig(a),o&512&&Vo(a,a.return);break;case 3:if(xa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qm(t,n)}catch(_){kt(a,a.return,_)}}break;case 27:n===null&&o&4&&og(a);case 26:case 5:xa(t,a),n===null&&o&4&&sg(a),o&512&&Vo(a,a.return);break;case 12:xa(t,a);break;case 31:xa(t,a),o&4&&hg(t,a);break;case 13:xa(t,a),o&4&&dg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jx.bind(null,a),vS(t,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||xn,u=va;var f=xn;va=o,(xn=n)&&!f?Sa(t,a,(a.subtreeFlags&8772)!==0):xa(t,a),va=u,xn=f}break;case 30:break;default:xa(t,a)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ba(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Jn=!1;function ya(t,n,a){for(a=a.child;a!==null;)fg(t,n,a),a=a.sibling}function fg(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:xn||Zi(a,n),ya(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Zi(a,n);var o=rn,u=Jn;as(a.type)&&(rn=a.stateNode,Jn=!1),ya(t,n,a),Jo(a.stateNode),rn=o,Jn=u;break;case 5:xn||Zi(a,n);case 6:if(o=rn,u=Jn,rn=null,ya(t,n,a),rn=o,Jn=u,rn!==null)if(Jn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:rn!==null&&(Jn?(t=rn,i_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Or(t)):i_(rn,a.stateNode));break;case 4:o=rn,u=Jn,rn=a.stateNode.containerInfo,Jn=!0,ya(t,n,a),rn=o,Jn=u;break;case 0:case 11:case 14:case 15:Ja(2,a,n),xn||Ja(4,a,n),ya(t,n,a);break;case 1:xn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ag(a,n,o)),ya(t,n,a);break;case 21:ya(t,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,ya(t,n,a),xn=o;break;default:ya(t,n,a)}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Or(t)}catch(a){kt(n,n.return,a)}}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Or(t)}catch(a){kt(n,n.return,a)}}function Xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lg),n;default:throw Error(s(435,t.tag))}}function dc(t,n){var a=Xx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=$x.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(as(R.type)){rn=R.stateNode,Jn=!1;break e}break;case 5:rn=R.stateNode,Jn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Jn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));fg(f,_,u),rn=null,Jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t),n=n.sibling}var zi=null;function pg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),$n(t),o&4&&(Ja(3,t,t.return),Go(3,t),Ja(5,t,t.return));break;case 1:jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),o&64&&va&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=zi;if(jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ia]||f[mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Bn(f,o,a),f[mn]=t,gn(f),o=f;break e;case"link":var _=p_("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=p_("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[mn]=t,gn(f),o=f}t.stateNode=o}else m_(u,t.type,t.stateNode);else t.stateNode=d_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?m_(u,t.type,t.stateNode):d_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),a!==null&&o&4&&Qf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),t.flags&32){u=t.stateNode;try{ci(u,"")}catch(je){kt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Qf(t,u,a!==null?a.memoizedProps:u)),o&1024&&($f=!0);break;case 6:if(jn(n,t),$n(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){kt(t,t.return,je)}}break;case 3:if(wc=null,u=zi,zi=Rc(n.containerInfo),jn(n,t),zi=u,$n(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(je){kt(t,t.return,je)}$f&&($f=!1,mg(t));break;case 4:o=zi,zi=Rc(t.stateNode.containerInfo),jn(n,t),$n(t),zi=o;break;case 12:jn(n,t),$n(t);break;case 31:jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 13:jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mc=qe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ae=va,ge=xn;if(va=ae||u,xn=ge||V,jn(n,t),xn=ge,va=ae,$n(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||va||xn||Vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=V.stateNode;var Se=V.memoizedProps.style,ce=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(je){kt(V,V.return,je)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(je){kt(V,V.return,je)}}}else if(n.tag===18){if(a===null){V=n;try{var fe=V.stateNode;u?a_(fe,!0):a_(V.stateNode,!1)}catch(je){kt(V,V.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,dc(t,a))));break;case 19:jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 30:break;case 21:break;default:jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(rg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Jf(t);hc(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ci(_,""),a.flags&=-33);var R=Jf(t);hc(t,R,_);break;case 3:case 4:var V=a.stateNode.containerInfo,ae=Jf(t);jf(t,ae,V);break;default:throw Error(s(161))}}catch(ge){kt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function Vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Vs(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),Vs(n);break;case 27:Jo(n.stateNode);case 26:case 5:Zi(n,n.return),Vs(n);break;case 22:n.memoizedState===null&&Vs(n);break;case 30:Vs(n);break;default:Vs(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),Go(4,f);break;case 1:if(Sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){kt(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Ym(V[u],R)}catch(ae){kt(o,o.return,ae)}}a&&_&64&&ig(f),Vo(f,f.return);break;case 27:og(f);case 26:case 5:Sa(u,f,a),a&&o===null&&_&4&&sg(f),Vo(f,f.return);break;case 12:Sa(u,f,a);break;case 31:Sa(u,f,a),a&&_&4&&hg(u,f);break;case 13:Sa(u,f,a),a&&_&4&&dg(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),Vo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function eh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Co(a))}function th(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t))}function Ii(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(t,n,a,o),n=n.sibling}function gg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,a,o),u&2048&&Go(9,n);break;case 1:Ii(t,n,a,o);break;case 3:Ii(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t)));break;case 12:if(u&2048){Ii(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(n,n.return,V)}}else Ii(t,n,a,o);break;case 31:Ii(t,n,a,o);break;case 13:Ii(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ii(t,n,a,o):ko(t,n):f._visibility&2?Ii(t,n,a,o):(f._visibility|=2,Er(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&eh(_,n);break;case 24:Ii(t,n,a,o),u&2048&&th(n.alternate,n);break;default:Ii(t,n,a,o)}}function Er(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,V=o,ae=_.flags;switch(_.tag){case 0:case 11:case 15:Er(f,_,R,V,u),Go(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?Er(f,_,R,V,u):ko(f,_):(ge._visibility|=2,Er(f,_,R,V,u)),u&&ae&2048&&eh(_.alternate,_);break;case 24:Er(f,_,R,V,u),u&&ae&2048&&th(_.alternate,_);break;default:Er(f,_,R,V,u)}n=n.sibling}}function ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:ko(a,o),u&2048&&eh(o.alternate,o);break;case 24:ko(a,o),u&2048&&th(o.alternate,o);break;default:ko(a,o)}n=n.sibling}}var Xo=8192;function br(t,n,a){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)_g(t,n,a),t=t.sibling}function _g(t,n,a){switch(t.tag){case 26:br(t,n,a),t.flags&Xo&&t.memoizedState!==null&&DS(a,zi,t.memoizedState,t.memoizedProps);break;case 5:br(t,n,a);break;case 3:case 4:var o=zi;zi=Rc(t.stateNode.containerInfo),br(t,n,a),zi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Xo,Xo=16777216,br(t,n,a),Xo=o):br(t,n,a));break;default:br(t,n,a)}}function vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,xg(o,t)}vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pc(t)):Wo(t);break;default:Wo(t)}}function pc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,xg(o,t)}vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),pc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,pc(n));break;default:pc(n)}t=t.sibling}}function xg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,f=o.return;if(ug(o),o===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var Wx={getCacheForType:function(t){var n=zn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(_n).controller.signal}},Yx=typeof WeakMap=="function"?WeakMap:Map,zt=0,jt=null,bt=null,Ct=0,Vt=0,pi=null,ja=!1,Tr=!1,nh=!1,Ma=0,un=0,$a=0,ks=0,ih=0,mi=0,Ar=0,Yo=null,ei=null,ah=!1,mc=0,Sg=0,gc=1/0,_c=null,es=null,Tn=0,ts=null,Rr=null,Ea=0,sh=0,rh=null,Mg=null,qo=0,oh=null;function gi(){return(zt&2)!==0&&Ct!==0?Ct&-Ct:F.T!==null?dh():go()}function Eg(){if(mi===0)if((Ct&536870912)===0||Dt){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),mi=t}else mi=536870912;return t=hi.current,t!==null&&(t.flags|=32),mi}function ti(t,n,a){(t===jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),ns(t,Ct,mi,!1)),Ke(t,a),((zt&2)===0||t!==jt)&&(t===jt&&((zt&2)===0&&(ks|=a),un===4&&ns(t,Ct,mi,!1)),Ki(t))}function bg(t,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?Kx(t,n):ch(t,n,!0),f=o;do{if(u===0){Tr&&!o&&ns(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qx(a)){u=ch(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Yo;var V=R.current.memoizedState.isDehydrated;if(V&&(Cr(R,_).flags|=256),_=ch(R,_,!1),_!==2){if(nh&&!V){R.errorRecoveryDisabledLanes|=f,ks|=f,u=4;break e}f=ei,ei=u,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Cr(t,0),ns(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ns(o,n,mi,!ja);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=mc+300-qe(),10<u)){if(ns(o,n,mi,!ja),_e(o,0,!0)!==0)break e;Ea=n,o.timeoutHandle=t_(Tg.bind(null,o,a,ei,_c,ah,n,mi,ks,Ar,ja,f,"Throttled",-0,0),u);break e}Tg(o,a,ei,_c,ah,n,mi,ks,Ar,ja,f,null,-0,0)}}break}while(!0);Ki(t)}function Tg(t,n,a,o,u,f,_,R,V,ae,ge,Se,ce,fe){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},_g(n,f,Se);var je=(f&62914560)===f?mc-qe():(f&4194048)===f?Sg-qe():0;if(je=US(Se,je),je!==null){Ea=f,t.cancelPendingCommit=je(Lg.bind(null,t,n,f,a,o,u,_,R,V,ge,Se,null,ce,fe)),ns(t,f,_,!ae);return}}Lg(t,n,f,a,o,u,_,R,V)}function qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ui(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ns(t,n,a,o){n&=~ih,n&=~ks,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Xe(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Bt(t,a,n)}function vc(){return(zt&6)===0?(Zo(0),!1):!0}function lh(){if(bt!==null){if(Vt===0)var t=bt.return;else t=bt,ha=Os=null,bf(t),vr=null,Do=0,t=bt;for(;t!==null;)ng(t.alternate,t),t=t.return;bt=null}}function Cr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ea=0,lh(),jt=t,bt=a=ua(t.current,null),Ct=n,Vt=0,pi=null,ja=!1,Tr=Le(t,n),nh=!1,Ar=mi=ih=ks=$a=un=0,ei=Yo=null,ah=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),f=1<<u;n|=t[u],o&=~f}return Ma=n,Fl(),a}function Ag(t,n){gt=null,F.H=Bo,n===_r||n===ql?(n=Vm(),Vt=3):n===hf?(n=Vm(),Vt=4):Vt=n===Hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,bt===null&&(un=1,oc(t,Mi(n,t.current)))}function Rg(){var t=hi.current;return t===null?!0:(Ct&4194048)===Ct?Ai===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Ai:!1}function Cg(){var t=F.H;return F.H=Bo,t===null?Bo:t}function wg(){var t=F.A;return F.A=Wx,t}function yc(){un=4,ja||(Ct&4194048)!==Ct&&hi.current!==null||(Tr=!0),($a&134217727)===0&&(ks&134217727)===0||jt===null||ns(jt,Ct,mi,!1)}function ch(t,n,a){var o=zt;zt|=2;var u=Cg(),f=wg();(jt!==t||Ct!==n)&&(_c=null,Cr(t,n)),n=!1;var _=un;e:do try{if(Vt!==0&&bt!==null){var R=bt,V=pi;switch(Vt){case 8:lh(),_=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var ae=Vt;if(Vt=0,pi=null,wr(t,R,V,ae),a&&Tr){_=0;break e}break;default:ae=Vt,Vt=0,pi=null,wr(t,R,V,ae)}}Zx(),_=un;break}catch(ge){Ag(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ha=Os=null,zt=o,F.H=u,F.A=f,bt===null&&(jt=null,Ct=0,Fl()),_}function Zx(){for(;bt!==null;)Dg(bt)}function Kx(t,n){var a=zt;zt|=2;var o=Cg(),u=wg();jt!==t||Ct!==n?(_c=null,gc=qe()+500,Cr(t,n)):Tr=Le(t,n);e:do try{if(Vt!==0&&bt!==null){n=bt;var f=pi;t:switch(Vt){case 1:Vt=0,pi=null,wr(t,n,f,1);break;case 2:case 9:if(Hm(f)){Vt=0,pi=null,Ug(n);break}n=function(){Vt!==2&&Vt!==9||jt!==t||(Vt=7),Ki(t)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Hm(f)?(Vt=0,pi=null,Ug(n)):(Vt=0,pi=null,wr(t,n,f,7));break;case 5:var _=null;switch(bt.tag){case 26:_=bt.memoizedState;case 5:case 27:var R=bt;if(_?g_(_):R.stateNode.complete){Vt=0,pi=null;var V=R.sibling;if(V!==null)bt=V;else{var ae=R.return;ae!==null?(bt=ae,xc(ae)):bt=null}break t}}Vt=0,pi=null,wr(t,n,f,5);break;case 6:Vt=0,pi=null,wr(t,n,f,6);break;case 8:lh(),un=6;break e;default:throw Error(s(462))}}Qx();break}catch(ge){Ag(t,ge)}while(!0);return ha=Os=null,F.H=o,F.A=u,zt=a,bt!==null?0:(jt=null,Ct=0,Fl(),un)}function Qx(){for(;bt!==null&&!Ye();)Dg(bt)}function Dg(t){var n=eg(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?xc(t):bt=n}function Ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Z0(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=Z0(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:bf(n);default:ng(a,n),n=bt=wm(n,Ma),n=eg(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?xc(t):bt=n}function wr(t,n,a,o){ha=Os=null,bf(n),vr=null,Do=0;var u=n.return;try{if(Bx(t,u,n,a,Ct)){un=1,oc(t,Mi(a,t.current)),bt=null;return}}catch(f){if(u!==null)throw bt=u,f;un=1,oc(t,Mi(a,t.current)),bt=null;return}n.flags&32768?(Dt||o===1?t=!0:Tr||(Ct&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ng(n,t)):xc(n)}function xc(t){var n=t;do{if((n.flags&32768)!==0){Ng(n,ja);return}t=n.return;var a=Gx(n.alternate,n,Ma);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);un===0&&(un=5)}function Ng(t,n){do{var a=Vx(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);un=6,bt=null}function Lg(t,n,a,o,u,f,_,R,V){t.cancelPendingCommit=null;do Sc();while(Tn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Qu,nn(t,a,f,_,R,V),t===jt&&(bt=jt=null,Ct=0),Rr=n,ts=t,Ea=a,sh=f,rh=u,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,eS(K,function(){return Bg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=U.p,U.p=2,_=zt,zt|=4;try{kx(t,n,a)}finally{zt=_,U.p=u,F.T=o}}Tn=1,Og(),Pg(),zg()}}function Og(){if(Tn===1){Tn=0;var t=ts,n=Rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=U.p;U.p=2;var u=zt;zt|=4;try{pg(n,t);var f=Sh,_=xm(t.containerInfo),R=f.focusedElem,V=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&ym(R.ownerDocument.documentElement,R)){if(V!==null&&Wu(R)){var ae=V.start,ge=V.end;if(ge===void 0&&(ge=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,ce=Se&&Se.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),je=R.textContent.length,ct=Math.min(V.start,je),Kt=V.end===void 0?ct:Math.min(V.end,je);!fe.extend&&ct>Kt&&(_=Kt,Kt=ct,ct=_);var $=vm(R,ct),Y=vm(R,Kt);if($&&Y&&(fe.rangeCount!==1||fe.anchorNode!==$.node||fe.anchorOffset!==$.offset||fe.focusNode!==Y.node||fe.focusOffset!==Y.offset)){var ie=Se.createRange();ie.setStart($.node,$.offset),fe.removeAllRanges(),ct>Kt?(fe.addRange(ie),fe.extend(Y.node,Y.offset)):(ie.setEnd(Y.node,Y.offset),fe.addRange(ie))}}}}for(Se=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Se.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ye=Se[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Lc=!!xh,Sh=xh=null}finally{zt=u,U.p=o,F.T=a}}t.current=n,Tn=2}}function Pg(){if(Tn===2){Tn=0;var t=ts,n=Rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=U.p;U.p=2;var u=zt;zt|=4;try{cg(t,n.alternate,n)}finally{zt=u,U.p=o,F.T=a}}Tn=3}}function zg(){if(Tn===4||Tn===3){Tn=0,G();var t=ts,n=Rr,a=Ea,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Rr=ts=null,Ig(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(es=null),mo(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=U.p,U.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{F.T=n,U.p=u}}(Ea&3)!==0&&Sc(),Ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===oh?qo++:(qo=0,oh=t):qo=0,Zo(0)}}function Ig(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Co(n)))}function Sc(){return Og(),Pg(),zg(),Bg()}function Bg(){if(Tn!==5)return!1;var t=ts,n=sh;sh=0;var a=mo(Ea),o=F.T,u=U.p;try{U.p=32>a?32:a,F.T=null,a=rh,rh=null;var f=ts,_=Ea;if(Tn=0,Rr=ts=null,Ea=0,(zt&6)!==0)throw Error(s(331));var R=zt;if(zt|=4,yg(f.current),gg(f,f.current,_,a),zt=R,Zo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{U.p=u,F.T=o,Ig(t,n)}}function Fg(t,n,a){n=Mi(a,n),n=Ff(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(Ke(t,2),Ki(t))}function kt(t,n,a){if(t.tag===3)Fg(t,t,a);else for(;n!==null;){if(n.tag===3){Fg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(es===null||!es.has(o))){t=Mi(a,t),a=H0(2),o=Za(n,a,2),o!==null&&(G0(a,o,n,t),Ke(o,2),Ki(o));break}}n=n.return}}function uh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Yx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(nh=!0,u.add(a),t=Jx.bind(null,t,n,a),n.then(t,t))}function Jx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Ct&a)===a&&(un===4||un===3&&(Ct&62914560)===Ct&&300>qe()-mc?(zt&2)===0&&Cr(t,0):ih|=a,Ar===Ct&&(Ar=0)),Ki(t)}function Hg(t,n){n===0&&(n=Te()),t=Us(t,n),t!==null&&(Ke(t,n),Ki(t))}function jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Hg(t,a)}function $x(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Hg(t,a)}function eS(t,n){return we(t,n)}var Mc=null,Dr=null,fh=!1,Ec=!1,hh=!1,is=0;function Ki(t){t!==Dr&&t.next===null&&(Dr===null?Mc=Dr=t:Dr=Dr.next=t),Ec=!0,fh||(fh=!0,nS())}function Zo(t,n){if(!hh&&Ec){hh=!0;do for(var a=!1,o=Mc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Xe(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Xg(o,f))}else f=Ct,f=_e(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Le(o,f)||(a=!0,Xg(o,f));o=o.next}while(a);hh=!1}}function tS(){Gg()}function Gg(){Ec=fh=!1;var t=0;is!==0&&hS()&&(t=is);for(var n=qe(),a=null,o=Mc;o!==null;){var u=o.next,f=Vg(o,n);f===0?(o.next=null,a===null?Mc=u:a.next=u,u===null&&(Dr=a)):(a=o,(t!==0||(f&3)!==0)&&(Ec=!0)),o=u}Tn!==0&&Tn!==5||Zo(t),is!==0&&(is=0)}function Vg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Xe(f),R=1<<_,V=u[_];V===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Ge(R,n)):V<=n&&(t.expiredLanes|=R),f&=~R}if(n=jt,a=Ct,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ve(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ve(o),mo(a)){case 2:case 8:a=S;break;case 32:a=K;break;case 268435456:a=he;break;default:a=K}return o=kg.bind(null,t),a=we(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ve(o),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sc()&&t.callbackNode!==a)return null;var o=Ct;return o=_e(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(bg(t,o,n),Vg(t,qe()),t.callbackNode!=null&&t.callbackNode===a?kg.bind(null,t):null)}function Xg(t,n){if(Sc())return null;bg(t,n,!0)}function nS(){pS(function(){(zt&6)!==0?we(w,tS):Gg()})}function dh(){if(is===0){var t=mr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),is=t}return is}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function Yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Wg((u[On]||null).action),_=o.submitter;_&&(n=(n=_[On]||null)?Wg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new Pl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(is!==0){var V=_?Yg(u,_):new FormData(u);Lf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=_?Yg(u,_):new FormData(u),Lf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var ph=0;ph<Ku.length;ph++){var mh=Ku[ph],aS=mh.toLowerCase(),sS=mh[0].toUpperCase()+mh.slice(1);Pi(aS,"on"+sS)}Pi(Em,"onAnimationEnd"),Pi(bm,"onAnimationIteration"),Pi(Tm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Sx,"onTransitionRun"),Pi(Mx,"onTransitionStart"),Pi(Ex,"onTransitionCancel"),Pi(Am,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],V=R.instance,ae=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(ge){Bl(ge)}u.currentTarget=null,f=V}else for(_=0;_<o.length;_++){if(R=o[_],V=R.instance,ae=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(ge){Bl(ge)}u.currentTarget=null,f=V}}}}function Tt(t,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var o=t+"__bubble";a.has(o)||(Zg(n,t,2,!1),a.add(o))}function gh(t,n,a){var o=0;n&&(o|=4),Zg(a,t,o,n)}var bc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[bc]){t[bc]=!0,Ul.forEach(function(a){a!=="selectionchange"&&(rS.has(a)||gh(a,!1,t),gh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bc]||(n[bc]=!0,gh("selectionchange",!1,n))}}function Zg(t,n,a,o){switch(E_(n)){case 2:var u=OS;break;case 8:u=PS;break;default:u=Nh}a=u.bind(null,n,a,t),u=void 0,!zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function vh(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ra(R),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){o=f=_;continue e}R=R.parentNode}}o=o.return}$p(function(){var ae=f,ge=Ou(a),Se=[];e:{var ce=Rm.get(t);if(ce!==void 0){var fe=Pl,je=t;switch(t){case"keypress":if(Ll(a)===0)break e;case"keydown":case"keyup":fe=$y;break;case"focusin":je="focus",fe=Hu;break;case"focusout":je="blur",fe=Hu;break;case"beforeblur":case"afterblur":fe=Hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=nx;break;case Em:case bm:case Tm:fe=Xy;break;case Am:fe=ax;break;case"scroll":case"scrollend":fe=Fy;break;case"wheel":fe=rx;break;case"copy":case"cut":case"paste":fe=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=am;break;case"toggle":case"beforetoggle":fe=lx}var ct=(n&4)!==0,Kt=!ct&&(t==="scroll"||t==="scrollend"),$=ct?ce!==null?ce+"Capture":null:ce;ct=[];for(var Y=ae,ie;Y!==null;){var ye=Y;if(ie=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ie===null||$===null||(ye=_o(Y,$),ye!=null&&ct.push(Qo(Y,ye,ie))),Kt)break;Y=Y.return}0<ct.length&&(ce=new fe(ce,je,null,a,ge),Se.push({event:ce,listeners:ct}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ce&&a!==Lu&&(je=a.relatedTarget||a.fromElement)&&(ra(je)||je[Kn]))break e;if((fe||ce)&&(ce=ge.window===ge?ge:(ce=ge.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(je=a.relatedTarget||a.toElement,fe=ae,je=je?ra(je):null,je!==null&&(Kt=c(je),ct=je.tag,je!==Kt||ct!==5&&ct!==27&&ct!==6)&&(je=null)):(fe=null,je=ae),fe!==je)){if(ct=nm,ye="onMouseLeave",$="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ct=am,ye="onPointerLeave",$="onPointerEnter",Y="pointer"),Kt=fe==null?ce:As(fe),ie=je==null?ce:As(je),ce=new ct(ye,Y+"leave",fe,a,ge),ce.target=Kt,ce.relatedTarget=ie,ye=null,ra(ge)===ae&&(ct=new ct($,Y+"enter",je,a,ge),ct.target=ie,ct.relatedTarget=Kt,ye=ct),Kt=ye,fe&&je)t:{for(ct=oS,$=fe,Y=je,ie=0,ye=$;ye;ye=ct(ye))ie++;ye=0;for(var rt=Y;rt;rt=ct(rt))ye++;for(;0<ie-ye;)$=ct($),ie--;for(;0<ye-ie;)Y=ct(Y),ye--;for(;ie--;){if($===Y||Y!==null&&$===Y.alternate){ct=$;break t}$=ct($),Y=ct(Y)}ct=null}else ct=null;fe!==null&&Kg(Se,ce,fe,ct,!1),je!==null&&Kt!==null&&Kg(Se,Kt,je,ct,!0)}}e:{if(ce=ae?As(ae):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var Ot=hm;else if(um(ce))if(dm)Ot=vx;else{Ot=gx;var et=mx}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ae&&It(ae.elementType)&&(Ot=hm):Ot=_x;if(Ot&&(Ot=Ot(t,ae))){fm(Se,Ot,a,ge);break e}et&&et(t,ce,ae),t==="focusout"&&ae&&ce.type==="number"&&ae.memoizedProps.value!=null&&Et(ce,"number",ce.value)}switch(et=ae?As(ae):window,t){case"focusin":(um(et)||et.contentEditable==="true")&&(or=et,Yu=ae,To=null);break;case"focusout":To=Yu=or=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Sm(Se,a,ge);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":Sm(Se,a,ge)}var _t;if(Vu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else rr?lm(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(sm&&a.locale!=="ko"&&(rr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&rr&&(_t=em()):(Ga=ge,Iu="value"in Ga?Ga.value:Ga.textContent,rr=!0)),et=Tc(ae,wt),0<et.length&&(wt=new im(wt,t,null,a,ge),Se.push({event:wt,listeners:et}),_t?wt.data=_t:(_t=cm(a),_t!==null&&(wt.data=_t)))),(_t=ux?fx(t,a):hx(t,a))&&(wt=Tc(ae,"onBeforeInput"),0<wt.length&&(et=new im("onBeforeInput","beforeinput",null,a,ge),Se.push({event:et,listeners:wt}),et.data=_t)),iS(Se,t,ae,a,ge)}qg(Se,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=_o(t,a),u!=null&&o.unshift(Qo(t,u,f)),u=_o(t,n),u!=null&&o.push(Qo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function oS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kg(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,V=R.alternate,ae=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||ae===null||(V=ae,u?(ae=_o(a,f),ae!=null&&_.unshift(Qo(a,ae,V))):u||(ae=_o(a,f),ae!=null&&_.push(Qo(a,ae,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function Jg(t,n){return n=Qg(n),Qg(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ci(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":Oi(t,o,f);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=la);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Rs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wi.get(a)||a,ze(t,a,o))}}function yh(t,n,a,o,u,f){switch(a){case"style":Oi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ci(t,o):(typeof o=="number"||typeof o=="bigint")&&ci(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[On]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var R=f=_=u=null,V=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":_=ge;break;case"checked":V=ge;break;case"defaultChecked":ae=ge;break;case"value":f=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Zt(t,n,o,ge,a,null)}}Gn(t,f,R,V,ae,_,u,!1);return;case"select":Tt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Zt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":Tt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Zt(t,n,_,R,a,null)}Li(t,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,V,o,a,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<Ko.length;o++)Tt(Ko[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,ae,o,a,null)}return;default:if(It(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&yh(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Zt(t,n,R,o,a,null))}function uS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,V=null,ae=null,ge=null;for(fe in a){var Se=a[fe];if(a.hasOwnProperty(fe)&&Se!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=Se;default:o.hasOwnProperty(fe)||Zt(t,n,fe,null,o,Se)}}for(var ce in o){var fe=o[ce];if(Se=a[ce],o.hasOwnProperty(ce)&&(fe!=null||Se!=null))switch(ce){case"type":f=fe;break;case"name":u=fe;break;case"checked":ae=fe;break;case"defaultChecked":ge=fe;break;case"value":_=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Se&&Zt(t,n,ce,fe,o,Se)}}We(t,_,R,V,ae,ge,f,u);return;case"select":fe=_=R=ce=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":fe=V;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ce=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==V&&Zt(t,n,u,f,o,V)}n=R,a=_,o=fe,ce!=null?bn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":fe=ce=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,_,u,o,f)}li(t,ce,fe);return;case"option":for(var je in a)if(ce=a[je],a.hasOwnProperty(je)&&ce!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:Zt(t,n,je,null,o,ce)}for(V in o)if(ce=o[V],fe=a[V],o.hasOwnProperty(V)&&ce!==fe&&(ce!=null||fe!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,n,V,ce,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ce=a[ct],a.hasOwnProperty(ct)&&ce!=null&&!o.hasOwnProperty(ct)&&Zt(t,n,ct,null,o,ce);for(ae in o)if(ce=o[ae],fe=a[ae],o.hasOwnProperty(ae)&&ce!==fe&&(ce!=null||fe!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Zt(t,n,ae,ce,o,fe)}return;default:if(It(n)){for(var Kt in a)ce=a[Kt],a.hasOwnProperty(Kt)&&ce!==void 0&&!o.hasOwnProperty(Kt)&&yh(t,n,Kt,void 0,o,ce);for(ge in o)ce=o[ge],fe=a[ge],!o.hasOwnProperty(ge)||ce===fe||ce===void 0&&fe===void 0||yh(t,n,ge,ce,o,fe);return}}for(var $ in a)ce=a[$],a.hasOwnProperty($)&&ce!=null&&!o.hasOwnProperty($)&&Zt(t,n,$,null,o,ce);for(Se in o)ce=o[Se],fe=a[Se],!o.hasOwnProperty(Se)||ce===fe||ce==null&&fe==null||Zt(t,n,Se,ce,o,fe)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&jg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ae=V.startTime;if(ae>R)break;var ge=V.transferSize,Se=V.initiatorType;ge&&jg(Se)&&(V=V.responseEnd,_+=ge*(V<R?1:(R-ae)/(V-ae)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xh=null,Sh=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eh=null;function hS(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(t){return n_.resolve(null).then(t).catch(mS)}:t_;function mS(t){setTimeout(function(){throw t})}function as(t){return t==="head"}function i_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Or(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Jo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ia]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Jo(t.ownerDocument.body);a=u}while(a);Or(n)}function a_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function bh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bh(a),Ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ia])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function _S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function s_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rh=null;function r_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function o_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function l_(t,n,a){switch(n=Ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Jo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ba(t)}var Ci=new Map,c_=new Set;function Rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ba=U.d;U.d={f:yS,r:xS,D:SS,C:MS,L:ES,m:bS,X:AS,S:TS,M:RS};function yS(){var t=ba.f(),n=vc();return t||n}function xS(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?A0(n):ba.r(t)}var Ur=typeof document>"u"?null:document;function u_(t,n,a){var o=Ur;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c_.has(u)||(c_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function SS(t){ba.D(t),u_("dns-prefetch",t,null)}function MS(t,n){ba.C(t,n),u_("preconnect",t,n)}function ES(t,n,a){ba.L(t,n,a);var o=Ur;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=Nr(t);break;case"script":f=Lr(t)}Ci.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(jo(f))||n==="script"&&o.querySelector($o(f))||(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function bS(t,n){ba.m(t,n);var a=Ur;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Lr(t)}if(!Ci.has(f)&&(t=x({rel:"modulepreload",href:t},n),Ci.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(f)))return}o=a.createElement("link"),Bn(o,"link",t),gn(o),a.head.appendChild(o)}}}function TS(t,n,a){ba.S(t,n,a);var o=Ur;if(o&&t){var u=Fa(o).hoistableStyles,f=Nr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(jo(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(f))&&Ch(t,a);var V=_=o.createElement("link");gn(V),Bn(V,"link",t),V._p=new Promise(function(ae,ge){V.onload=ae,V.onerror=ge}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Cc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function AS(t,n){ba.X(t,n);var a=Ur;if(a&&t){var o=Fa(a).hoistableScripts,u=Lr(t),f=o.get(u);f||(f=a.querySelector($o(u)),f||(t=x({src:t,async:!0},n),(n=Ci.get(u))&&wh(t,n),f=a.createElement("script"),gn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function RS(t,n){ba.M(t,n);var a=Ur;if(a&&t){var o=Fa(a).hoistableScripts,u=Lr(t),f=o.get(u);f||(f=a.querySelector($o(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=Ci.get(u))&&wh(t,n),f=a.createElement("script"),gn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function f_(t,n,a,o){var u=(u=ne.current)?Rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Nr(a.href),a=Fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var f=Fa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(jo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,a),f||CS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Lr(a),a=Fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Nr(t){return'href="'+Ht(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function h_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function CS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),gn(n),t.head.appendChild(n))}function Lr(t){return'[src="'+Ht(t)+'"]'}function $o(t){return"script[async]"+t}function d_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Bn(o,"style",u),Cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Nr(a.href);var f=t.querySelector(jo(u));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;o=h_(a),(u=Ci.get(u))&&Ch(o,u),f=(t.ownerDocument||t).createElement("link"),gn(f);var _=f;return _._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Bn(f,"link",o),n.state.loading|=4,Cc(f,a.precedence,t),n.instance=f;case"script":return f=Lr(a.src),(u=t.querySelector($o(f)))?(n.instance=u,gn(u),u):(o=a,(u=Ci.get(f))&&(o=x({},a),wh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,a.precedence,t));return n.instance}function Cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wc=null;function p_(t,n,a){if(wc===null){var o=new Map,u=wc=new Map;u.set(a,o)}else u=wc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ia]||f[mn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function m_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function DS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Nr(o.href),f=n.querySelector(jo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,o=h_(o),(u=Ci.get(u))&&Ch(o,u),f=f.createElement("link"),gn(f);var _=f;_._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Dh=0;function US(t,n){return t.stylesheets&&t.count===0&&Nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Dh===0&&(Dh=62500*fS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,n.forEach(NS,t),Uc=null,Dc.call(t))}function NS(t,n){if(!(n.state.loading&4)){var a=Uc.get(t);if(a)var o=a.get(null);else{a=new Map,Uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var el={$$typeof:H,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function LS(t,n,a,o,u,f,_,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function __(t,n,a,o,u,f,_,R,V,ae,ge,Se){return t=new LS(t,n,a,_,V,ae,ge,Se,R),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),t.current=f,f.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},df(f),t}function v_(t){return t?(t=ur,t):ur}function y_(t,n,a,o,u,f){u=v_(u),o.context===null?o.context=u:o.pendingContext=u,o=qa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Za(t,o,n),a!==null&&(ti(a,t,n),No(a,t,n))}function x_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uh(t,n){x_(t,n),(t=t.alternate)&&x_(t,n)}function S_(t){if(t.tag===13||t.tag===31){var n=Us(t,67108864);n!==null&&ti(n,t,67108864),Uh(t,67108864)}}function M_(t){if(t.tag===13||t.tag===31){var n=gi();n=po(n);var a=Us(t,n);a!==null&&ti(a,t,n),Uh(t,n)}}var Lc=!0;function OS(t,n,a,o){var u=F.T;F.T=null;var f=U.p;try{U.p=2,Nh(t,n,a,o)}finally{U.p=f,F.T=u}}function PS(t,n,a,o){var u=F.T;F.T=null;var f=U.p;try{U.p=8,Nh(t,n,a,o)}finally{U.p=f,F.T=u}}function Nh(t,n,a,o){if(Lc){var u=Lh(o);if(u===null)vh(t,n,o,Oc,a),b_(t,o);else if(IS(u,t,n,a,o))o.stopPropagation();else if(b_(t,o),n&4&&-1<zS.indexOf(t)){for(;u!==null;){var f=oa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=De(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var V=1<<31-Xe(_);R.entanglements[1]|=V,_&=~V}Ki(f),(zt&6)===0&&(gc=qe()+500,Zo(0))}}break;case 31:case 13:R=Us(f,2),R!==null&&ti(R,f,2),vc(),Uh(f,2)}if(f=Lh(o),f===null&&vh(t,n,o,Oc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else vh(t,n,o,null,a)}}function Lh(t){return t=Ou(t),Oh(t)}var Oc=null;function Oh(t){if(Oc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Oc=t,null}function E_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case w:return 2;case S:return 8;case K:case te:return 32;case he:return 268435456;default:return 32}default:return 32}}var Ph=!1,ss=null,rs=null,os=null,tl=new Map,nl=new Map,ls=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(t,n){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&S_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function IS(t,n,a,o,u){switch(n){case"focusin":return ss=il(ss,t,n,a,o,u),!0;case"dragenter":return rs=il(rs,t,n,a,o,u),!0;case"mouseover":return os=il(os,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return tl.set(f,il(tl.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,nl.set(f,il(nl.get(f)||null,t,n,a,o,u)),!0}return!1}function T_(t){var n=ra(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ir(t.priority,function(){M_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,ir(t.priority,function(){M_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Lu=o,a.target.dispatchEvent(o),Lu=null}else return n=oa(a),n!==null&&S_(n),t.blockedOn=a,!1;n.shift()}return!0}function A_(t,n,a){Pc(t)&&a.delete(n)}function BS(){Ph=!1,ss!==null&&Pc(ss)&&(ss=null),rs!==null&&Pc(rs)&&(rs=null),os!==null&&Pc(os)&&(os=null),tl.forEach(A_),nl.forEach(A_)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ph||(Ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,BS)))}var Ic=null;function R_(t){Ic!==t&&(Ic=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ic===t&&(Ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Oh(o||a)===null)continue;break}var f=oa(a);f!==null&&(t.splice(n,3),n-=3,Lf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Or(t){function n(V){return zc(V,t)}ss!==null&&zc(ss,t),rs!==null&&zc(rs,t),os!==null&&zc(os,t),tl.forEach(n),nl.forEach(n);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)T_(a),a.blockedOn===null&&ls.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[On]||null;if(typeof f=="function")_||R_(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[On]||null)R=_.formAction;else if(Oh(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),R_(a)}}}function C_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function zh(t){this._internalRoot=t}Bc.prototype.render=zh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=gi();y_(a,o,t,n,null,null)},Bc.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y_(t.current,2,null,t,null,null),vc(),n[Kn]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=go();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ls.length&&n!==0&&n<ls[a].priority;a++);ls.splice(a,0,t),a===0&&T_(t)}};var w_=e.version;if(w_!=="19.2.8")throw Error(s(527,w_,"19.2.8"));U.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var FS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{de=Fc.inject(FS),me=Fc}catch{}}return al.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=z0,f=I0,_=B0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=__(t,1,!1,null,null,a,o,null,u,f,_,C_),t[Kn]=n.current,_h(t),new zh(n)},al.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=z0,_=I0,R=B0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=__(t,1,!0,n,a??null,o,u,V,f,_,R,C_),n.context=v_(null),a=n.current,o=gi(),o=po(o),u=qa(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,Ke(n,a),Ki(n),t[Kn]=n.current,_h(t),new Bc(n)},al.version="19.2.8",al}var I_;function ZS(){if(I_)return Bh.exports;I_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bh.exports=qS(),Bh.exports}var KS=ZS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=At.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>At.createElement("svg",{ref:m,...JS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Jv("lucide",l),...p},[...h.map(([d,y])=>At.createElement(d,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(r,e)=>{const i=At.forwardRef(({className:s,...l},c)=>At.createElement(jS,{ref:c,iconNode:e,className:Jv(`lucide-${QS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=pn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=pn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=pn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=pn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=pn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=pn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=pn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=pn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=pn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=pn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=pn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=pn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=pn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=pn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=pn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=pn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=pn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=pn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=pn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=pn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="185",to={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dM=0,k_=1,pM=2,_l=1,mM=2,ml=3,ys=0,si=1,$i=2,Na=0,no=1,X_=2,W_=3,Y_=4,gM=5,Zs=100,_M=101,vM=102,yM=103,xM=104,SM=200,MM=201,EM=202,bM=203,Ed=204,bd=205,TM=206,AM=207,RM=208,CM=209,wM=210,DM=211,UM=212,NM=213,LM=214,Td=0,Ad=1,Rd=2,ro=3,Cd=4,wd=5,Dd=6,Ud=7,jv=0,OM=1,PM=2,na=0,$v=1,ey=2,ty=3,Ap=4,ny=5,iy=6,ay=7,sy=300,er=301,oo=302,Vh=303,kh=304,Cu=306,Nd=1e3,Ua=1001,Ld=1002,Hn=1003,zM=1004,Vc=1005,Un=1006,Xh=1007,Js=1008,yi=1009,ry=1010,oy=1011,Ml=1012,Rp=1013,aa=1014,ea=1015,Pa=1016,Cp=1017,wp=1018,El=1020,ly=35902,cy=35899,uy=1021,fy=1022,Vi=1023,za=1026,js=1027,hy=1028,Dp=1029,tr=1030,Up=1031,Np=1033,mu=33776,gu=33777,_u=33778,vu=33779,Od=35840,Pd=35841,zd=35842,Id=35843,Bd=36196,Fd=37492,Hd=37496,Gd=37488,Vd=37489,xu=37490,kd=37491,Xd=37808,Wd=37809,Yd=37810,qd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,jd=37816,$d=37817,ep=37818,tp=37819,np=37820,ip=37821,ap=36492,sp=36494,rp=36495,op=36283,lp=36284,Su=36285,cp=36286,IM=3200,up=0,BM=1,_s="",ii="srgb",Mu="srgb-linear",Eu="linear",Xt="srgb",Pr=7680,q_=519,FM=512,HM=513,GM=514,Lp=515,VM=516,kM=517,Op=518,XM=519,fp=35044,Z_="300 es",ta=2e3,bl=2001;function WM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function YM(){const r=bu("canvas");return r.style.display="block",r}const K_={};function Tu(...r){const e="THREE."+r.shift();console.log(e,...r)}function dy(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=dy(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ut(...r){r=dy(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function io(...r){const e=r.join(" ");e in K_||(K_[e]=!0,ut(...r))}function qM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ZM={[Td]:Ad,[Rd]:Dd,[Cd]:Ud,[ro]:wd,[Ad]:Td,[Dd]:Rd,[Ud]:Cd,[wd]:ro};class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Q_=1234567;const vl=Math.PI/180,Tl=180/Math.PI;function La(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function Mt(r,e,i){return Math.max(e,Math.min(i,r))}function Pp(r,e){return(r%e+e)%e}function KM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function QM(r,e,i){return r!==e?(i-r)/(e-r):0}function yl(r,e,i){return(1-i)*r+i*e}function JM(r,e,i,s){return yl(r,e,1-Math.exp(-i*s))}function jM(r,e=1){return e-Math.abs(Pp(r,e*2)-e)}function $M(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function eE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function tE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function nE(r,e){return r+Math.random()*(e-r)}function iE(r){return r*(.5-Math.random())}function aE(r){r!==void 0&&(Q_=r);let e=Q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sE(r){return r*vl}function rE(r){return r*Tl}function oE(r){return(r&r-1)===0&&r!==0}function lE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uE(r,e,i,s,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+s)/2),y=h((e+s)/2),x=c((e-s)/2),g=h((e-s)/2),M=c((s-e)/2),T=h((s-e)/2);switch(l){case"XYX":r.set(p*y,m*x,m*g,p*d);break;case"YZY":r.set(m*g,p*y,m*x,p*d);break;case"ZXZ":r.set(m*x,m*g,p*y,p*d);break;case"XZX":r.set(p*y,m*T,m*M,p*d);break;case"YXY":r.set(m*M,p*y,m*T,p*d);break;case"ZYZ":r.set(m*T,m*M,p*y,p*d);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hp={DEG2RAD:vl,RAD2DEG:Tl,generateUUID:La,clamp:Mt,euclideanModulo:Pp,mapLinear:KM,inverseLerp:QM,lerp:yl,damp:JM,pingpong:jM,smoothstep:$M,smootherstep:eE,randInt:tE,randFloat:nE,randFloatSpread:iE,seededRandom:aE,degToRad:sE,radToDeg:rE,isPowerOfTwo:oE,ceilPowerOfTwo:lE,floorPowerOfTwo:cE,setQuaternionFromProperEuler:uE,normalize:Wt,denormalize:Gi},qp=class qp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qp.prototype.isVector2=!0;let ot=qp;class xs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],y=s[l+2],x=s[l+3],g=c[h+0],M=c[h+1],T=c[h+2],C=c[h+3];if(x!==C||m!==g||d!==M||y!==T){let E=m*g+d*M+y*T+x*C;E<0&&(g=-g,M=-M,T=-T,C=-C,E=-E);let v=1-p;if(E<.9995){const I=Math.acos(E),H=Math.sin(I);v=Math.sin(v*I)/H,p=Math.sin(p*I)/H,m=m*v+g*p,d=d*v+M*p,y=y*v+T*p,x=x*v+C*p}else{m=m*v+g*p,d=d*v+M*p,y=y*v+T*p,x=x*v+C*p;const I=1/Math.sqrt(m*m+d*d+y*y+x*x);m*=I,d*=I,y*=I,x*=I}}e[i]=m,e[i+1]=d,e[i+2]=y,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],y=s[l+3],x=c[h],g=c[h+1],M=c[h+2],T=c[h+3];return e[i]=p*T+y*x+m*M-d*g,e[i+1]=m*T+y*g+d*x-p*M,e[i+2]=d*T+y*M+p*g-m*x,e[i+3]=y*T-p*x-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),y=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"YXZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"ZXY":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"ZYX":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"YZX":this._x=g*y*x+d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x-g*M*T;break;case"XZY":this._x=g*y*x-d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x+g*M*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],y=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(y-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,y=i._w;return this._x=s*y+h*p+l*d-c*m,this._y=l*y+h*m+c*p-s*d,this._z=c*y+h*d+s*m-l*p,this._w=h*y-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),y=Math.sin(d);m=Math.sin(m*d)/y,i=Math.sin(i*d)/y,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),y=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*y,this.y=s+m*y+p*d-c*x,this.z=l+m*x+c*y-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let j=Zp;const Wh=new j,J_=new xs,Kp=class Kp{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=h,y[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],y=s[4],x=s[7],g=s[2],M=s[5],T=s[8],C=l[0],E=l[3],v=l[6],I=l[1],H=l[4],D=l[7],z=l[2],P=l[5],N=l[8];return c[0]=h*C+p*I+m*z,c[3]=h*E+p*H+m*P,c[6]=h*v+p*D+m*N,c[1]=d*C+y*I+x*z,c[4]=d*E+y*H+x*P,c[7]=d*v+y*D+x*N,c[2]=g*C+M*I+T*z,c[5]=g*E+M*H+T*P,c[8]=g*v+M*D+T*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8];return i*h*y-i*p*d-s*c*y+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=y*h-p*d,g=p*m-y*c,M=d*c-h*m,T=i*x+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*d-y*s)*C,e[2]=(p*s-l*h)*C,e[3]=g*C,e[4]=(y*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-d*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,i)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;let pt=Kp;const Yh=new pt,j_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const r={enabled:!0,workingColorSpace:Mu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xt&&(l.r=ao(l.r),l.g=ao(l.g),l.b=ao(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?Eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Mu]:{primaries:e,whitePoint:s,transfer:Eu,toXYZ:j_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:j_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),r}const Nt=fE();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class hE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zr===void 0&&(zr=bu("canvas")),zr.width=e.width,zr.height=e.height;const l=zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=zr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Oa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dE=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(qh(l[h].image)):c.push(qh(l[h]))}else c=qh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let pE=0;const Zh=new j;class Wn extends Es{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ua,l=Ua,c=Un,h=Js,p=Vi,m=yi,d=Wn.DEFAULT_ANISOTROPY,y=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=La(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=sy;Wn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],y=m[4],x=m[8],g=m[1],M=m[5],T=m[9],C=m[2],E=m[6],v=m[10];if(Math.abs(y-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-E)<.01){if(Math.abs(y+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+E)<.1&&Math.abs(d+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,D=(M+1)/2,z=(v+1)/2,P=(y+g)/4,N=(x+C)/4,b=(T+E)/4;return H>D&&H>z?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=P/s,c=N/s):D>z?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=P/l,c=b/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=N/c,l=b/c),this.set(s,l,c,i),this}let I=Math.sqrt((E-T)*(E-T)+(x-C)*(x-C)+(g-y)*(g-y));return Math.abs(I)<.001&&(I=1),this.x=(E-T)/I,this.y=(x-C)/I,this.z=(g-y)/I,this.w=Math.acos((d+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let ln=Qp;class mE extends Es{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Wn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends mE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class py extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=class Ru{constructor(e,i,s,l,c,h,p,m,d,y,x,g,M,T,C,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,y,x,g,M,T,C,E)}set(e,i,s,l,c,h,p,m,d,y,x,g,M,T,C,E){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=y,v[10]=x,v[14]=g,v[3]=M,v[7]=T,v[11]=C,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ir.setFromMatrixColumn(e,0).length(),c=1/Ir.setFromMatrixColumn(e,1).length(),h=1/Ir.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),y=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*y,M=h*x,T=p*y,C=p*x;i[0]=m*y,i[4]=-m*x,i[8]=d,i[1]=M+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+M*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g+C*p,i[4]=T*p-M,i[8]=h*d,i[1]=h*x,i[5]=h*y,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g-C*p,i[4]=-h*x,i[8]=T+M*p,i[1]=M+T*p,i[5]=h*y,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*y,M=h*x,T=p*y,C=p*x;i[0]=m*y,i[4]=T*d-M,i[8]=g*d+C,i[1]=m*x,i[5]=C*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*y,i[4]=C-g*x,i[8]=T*x+M,i[1]=x,i[5]=h*y,i[9]=-p*y,i[2]=-d*y,i[6]=M*x+T,i[10]=g-C*x}else if(e.order==="XZY"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*y,i[4]=-x,i[8]=d*y,i[1]=g*x+C,i[5]=h*y,i[9]=M*x-T,i[2]=T*x-M,i[6]=p*y,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,i,s){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),us.crossVectors(s,_i),us.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),us.crossVectors(s,_i)),us.normalize(),kc.crossVectors(_i,us),l[0]=us.x,l[4]=kc.x,l[8]=_i.x,l[1]=us.y,l[5]=kc.y,l[9]=_i.y,l[2]=us.z,l[6]=kc.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],y=s[1],x=s[5],g=s[9],M=s[13],T=s[2],C=s[6],E=s[10],v=s[14],I=s[3],H=s[7],D=s[11],z=s[15],P=l[0],N=l[4],b=l[8],O=l[12],W=l[1],X=l[5],k=l[9],oe=l[13],pe=l[2],ee=l[6],F=l[10],U=l[14],q=l[3],ue=l[7],xe=l[11],L=l[15];return c[0]=h*P+p*W+m*pe+d*q,c[4]=h*N+p*X+m*ee+d*ue,c[8]=h*b+p*k+m*F+d*xe,c[12]=h*O+p*oe+m*U+d*L,c[1]=y*P+x*W+g*pe+M*q,c[5]=y*N+x*X+g*ee+M*ue,c[9]=y*b+x*k+g*F+M*xe,c[13]=y*O+x*oe+g*U+M*L,c[2]=T*P+C*W+E*pe+v*q,c[6]=T*N+C*X+E*ee+v*ue,c[10]=T*b+C*k+E*F+v*xe,c[14]=T*O+C*oe+E*U+v*L,c[3]=I*P+H*W+D*pe+z*q,c[7]=I*N+H*X+D*ee+z*ue,c[11]=I*b+H*k+D*F+z*xe,c[15]=I*O+H*oe+D*U+z*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],y=e[2],x=e[6],g=e[10],M=e[14],T=e[3],C=e[7],E=e[11],v=e[15],I=m*M-d*g,H=p*M-d*x,D=p*g-m*x,z=h*M-d*y,P=h*g-m*y,N=h*x-p*y;return i*(C*I-E*H+v*D)-s*(T*I-E*z+v*P)+l*(T*H-C*z+v*N)-c*(T*D-C*P+E*N)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],y=e[10];return i*(h*y-p*d)-s*(c*y-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=e[9],g=e[10],M=e[11],T=e[12],C=e[13],E=e[14],v=e[15],I=i*p-s*h,H=i*m-l*h,D=i*d-c*h,z=s*m-l*p,P=s*d-c*p,N=l*d-c*m,b=y*C-x*T,O=y*E-g*T,W=y*v-M*T,X=x*E-g*C,k=x*v-M*C,oe=g*v-M*E,pe=I*oe-H*k+D*X+z*W-P*O+N*b;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/pe;return e[0]=(p*oe-m*k+d*X)*ee,e[1]=(l*k-s*oe-c*X)*ee,e[2]=(C*N-E*P+v*z)*ee,e[3]=(g*P-x*N-M*z)*ee,e[4]=(m*W-h*oe-d*O)*ee,e[5]=(i*oe-l*W+c*O)*ee,e[6]=(E*D-T*N-v*H)*ee,e[7]=(y*N-g*D+M*H)*ee,e[8]=(h*k-p*W+d*b)*ee,e[9]=(s*W-i*k-c*b)*ee,e[10]=(T*P-C*D+v*I)*ee,e[11]=(x*D-y*P-M*I)*ee,e[12]=(p*O-h*X-m*b)*ee,e[13]=(i*X-s*O+l*b)*ee,e[14]=(C*H-T*z-E*I)*ee,e[15]=(y*z-x*H+g*I)*ee,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,y=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,y*p+s,y*m-l*h,0,d*m-l*p,y*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,y=h+h,x=p+p,g=c*d,M=c*y,T=c*x,C=h*y,E=h*x,v=p*x,I=m*d,H=m*y,D=m*x,z=s.x,P=s.y,N=s.z;return l[0]=(1-(C+v))*z,l[1]=(M+D)*z,l[2]=(T-H)*z,l[3]=0,l[4]=(M-D)*P,l[5]=(1-(g+v))*P,l[6]=(E+I)*P,l[7]=0,l[8]=(T+H)*N,l[9]=(E-I)*N,l[10]=(1-(g+C))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ir.set(l[0],l[1],l[2]).length();const p=Ir.set(l[4],l[5],l[6]).length(),m=Ir.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Bi.copy(this);const d=1/h,y=1/p,x=1/m;return Bi.elements[0]*=d,Bi.elements[1]*=d,Bi.elements[2]*=d,Bi.elements[4]*=y,Bi.elements[5]*=y,Bi.elements[6]*=y,Bi.elements[8]*=x,Bi.elements[9]*=x,Bi.elements[10]*=x,i.setFromRotationMatrix(Bi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=ta,m=!1){const d=this.elements,y=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(p===ta)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===bl)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=ta,m=!1){const d=this.elements,y=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(p===ta)T=-2/(h-c),C=-(h+c)/(h-c);else if(p===bl)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Ru.prototype.isMatrix4=!0;let on=Ru;const Ir=new j,Bi=new on,_E=new j(0,0,0),vE=new j(1,1,1),us=new j,kc=new j,_i=new j,ev=new on,tv=new xs;class Ss{constructor(e=0,i=0,s=0,l=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],y=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ev,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return tv.setFromEuler(this),this.setFromQuaternion(tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yE=0;const nv=new j,Br=new xs,Ta=new on,Xc=new j,sl=new j,xE=new j,SE=new xs,iv=new j(1,0,0),av=new j(0,1,0),sv=new j(0,0,1),rv={type:"added"},ME={type:"removed"},Fr={type:"childadded",child:null},Kh={type:"childremoved",child:null};class Nn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new j,i=new Ss,s=new xs,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new pt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(iv,e)}rotateY(e){return this.rotateOnAxis(av,e)}rotateZ(e){return this.rotateOnAxis(sv,e)}translateOnAxis(e,i){return nv.copy(e).applyQuaternion(this.quaternion),this.position.add(nv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(iv,e)}translateY(e){return this.translateOnAxis(av,e)}translateZ(e){return this.translateOnAxis(sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Xc.copy(e):Xc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(sl,Xc,this.up):Ta.lookAt(Xc,sl,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Br.setFromRotationMatrix(Ta),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ME),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,SE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,y=m.length;d<y;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),y=h(e.images),x=h(e.shapes),g=h(e.skeletons),M=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),y.length>0&&(s.images=y),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const y=p[d];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new j(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const E=i.getJointPose(C,s),v=this._getHandJoint(d,C);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const y=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=y.position.distanceTo(x.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Da;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const my={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Jh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Rt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Nt.workingColorSpace){if(e=Pp(e,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Jh(h,c,e+1/3),this.g=Jh(h,c,e),this.b=Jh(h,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const s=my[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Nt.workingToColorSpace(Xn.copy(this),e),Math.round(Mt(Xn.r*255,0,255))*65536+Math.round(Mt(Xn.g*255,0,255))*256+Math.round(Mt(Xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const y=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=y<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=y,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ii){Nt.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+i,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fs),e.getHSL(Wc);const s=yl(fs.h,Wc.h,i),l=yl(fs.s,Wc.s,i),c=yl(fs.l,Wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Rt;Rt.NAMES=my;class Bp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=i,this.far=s}clone(){return new Bp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new j,Aa=new j,jh=new j,Ra=new j,Hr=new j,Gr=new j,ov=new j,$h=new j,ed=new j,td=new j,nd=new ln,id=new ln,ad=new ln;class Ni{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Aa.subVectors(s,i),jh.subVectors(e,i);const h=Fi.dot(Fi),p=Fi.dot(Aa),m=Fi.dot(jh),d=Aa.dot(Aa),y=Aa.dot(jh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*y)*g,T=(h*y-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(h,Ra.y),m.addScaledVector(p,Ra.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return nd.setScalar(0),id.setScalar(0),ad.setScalar(0),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,s),ad.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(nd,c.x),h.addScaledVector(id,c.y),h.addScaledVector(ad,c.z),h}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Aa.subVectors(e,i),Fi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Hr.subVectors(l,s),Gr.subVectors(c,s),$h.subVectors(e,s);const m=Hr.dot($h),d=Gr.dot($h);if(m<=0&&d<=0)return i.copy(s);ed.subVectors(e,l);const y=Hr.dot(ed),x=Gr.dot(ed);if(y>=0&&x<=y)return i.copy(l);const g=m*x-y*d;if(g<=0&&m>=0&&y<=0)return h=m/(m-y),i.copy(s).addScaledVector(Hr,h);td.subVectors(e,c);const M=Hr.dot(td),T=Gr.dot(td);if(T>=0&&M<=T)return i.copy(c);const C=M*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Gr,p);const E=y*T-M*x;if(E<=0&&x-y>=0&&M-T>=0)return ov.subVectors(c,l),p=(x-y)/(x-y+(M-T)),i.copy(l).addScaledVector(ov,p);const v=1/(E+C+g);return h=C*v,p=g*v,i.copy(s).addScaledVector(Hr,h).addScaledVector(Gr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cl{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Hi):Hi.fromBufferAttribute(c,h),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yc.copy(s.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),qc.subVectors(this.max,rl),Vr.subVectors(e.a,rl),kr.subVectors(e.b,rl),Xr.subVectors(e.c,rl),hs.subVectors(kr,Vr),ds.subVectors(Xr,kr),Xs.subVectors(Vr,Xr);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Xs.z,Xs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Xs.z,0,-Xs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Xs.y,Xs.x,0];return!sd(i,Vr,kr,Xr,qc)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,Vr,kr,Xr,qc))?!1:(Zc.crossVectors(hs,ds),i=[Zc.x,Zc.y,Zc.z],sd(i,Vr,kr,Xr,qc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new j,new j,new j,new j,new j,new j,new j,new j],Hi=new j,Yc=new Cl,Vr=new j,kr=new j,Xr=new j,hs=new j,ds=new j,Xs=new j,rl=new j,qc=new j,Zc=new j,Ws=new j;function sd(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ws.fromArray(r,c);const p=l.x*Math.abs(Ws.x)+l.y*Math.abs(Ws.y)+l.z*Math.abs(Ws.z),m=e.dot(Ws),d=i.dot(Ws),y=s.dot(Ws);if(Math.max(-Math.max(m,d,y),Math.min(m,d,y))>p)return!1}return!0}const Sn=new j,Kc=new ot;let TE=0;class ki extends Es{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=fp,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Kc.fromBufferAttribute(this,i),Kc.applyMatrix3(e),this.setXY(i,Kc.x,Kc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gy extends ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class _y extends ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}const AE=new Cl,ol=new j,rd=new j;class Fp{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):AE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ol,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(rd)),this.expandByPoint(ol.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const wi=new on,od=new Nn,Wr=new j,vi=new Cl,ll=new Cl,Dn=new j;class xi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WM(e)?_y:gy)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];ll.setFromBufferAttribute(p),this.morphTargetsRelative?(Dn.addVectors(vi.min,ll.min),vi.expandByPoint(Dn),Dn.addVectors(vi.max,ll.max),vi.expandByPoint(Dn)):(vi.expandByPoint(ll.min),vi.expandByPoint(ll.max))}vi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,y=p.count;d<y;d++)Dn.fromBufferAttribute(p,d),m&&(Wr.fromBufferAttribute(e,d),Dn.add(Wr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new ki(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new j,m[b]=new j;const d=new j,y=new j,x=new j,g=new ot,M=new ot,T=new ot,C=new j,E=new j;function v(b,O,W){d.fromBufferAttribute(s,b),y.fromBufferAttribute(s,O),x.fromBufferAttribute(s,W),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,O),T.fromBufferAttribute(c,W),y.sub(d),x.sub(d),M.sub(g),T.sub(g);const X=1/(M.x*T.y-T.x*M.y);isFinite(X)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(X),E.copy(x).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(X),p[b].add(C),p[O].add(C),p[W].add(C),m[b].add(E),m[O].add(E),m[W].add(E))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let b=0,O=I.length;b<O;++b){const W=I[b],X=W.start,k=W.count;for(let oe=X,pe=X+k;oe<pe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const H=new j,D=new j,z=new j,P=new j;function N(b){z.fromBufferAttribute(l,b),P.copy(z);const O=p[b];H.copy(O),H.sub(z.multiplyScalar(z.dot(O))).normalize(),D.crossVectors(P,O);const X=D.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,X)}for(let b=0,O=I.length;b<O;++b){const W=I[b],X=W.start,k=W.count;for(let oe=X,pe=X+k;oe<pe;oe+=3)N(e.getX(oe+0)),N(e.getX(oe+1)),N(e.getX(oe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,h=new j,p=new j,m=new j,d=new j,y=new j,x=new j;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),y.subVectors(h,c),x.subVectors(l,c),y.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,E),p.add(y),m.add(y),d.add(y),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(E,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),y.subVectors(h,c),x.subVectors(l,c),y.cross(x),s.setXYZ(g+0,y.x,y.y,y.z),s.setXYZ(g+1,y.x,y.y,y.z),s.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(p,m){const d=p.array,y=p.itemSize,x=p.normalized,g=new d.constructor(m.length*y);let M=0,T=0;for(let C=0,E=m.length;C<E;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*y;for(let v=0;v<y;v++)g[T++]=d[M++]}return new ki(g,y,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let y=0,x=d.length;y<x;y++){const g=d[y],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],y=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];y.push(M.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const y=l[d];this.setAttribute(d,y.clone(i))}const c=e.morphAttributes;for(const d in c){const y=[],x=c[d];for(let g=0,M=x.length;g<M;g++)y.push(x[g].clone(i));this.morphAttributes[d]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,y=h.length;d<y;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class CE{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=fp,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new j;class Au{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ki(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let wE=0;class fo extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=La(),this.name="",this.type="Material",this.blending=no,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=bd,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==bd&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vy extends fo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yr;const cl=new j,qr=new j,Zr=new j,Kr=new ot,ul=new ot,yy=new on,Qc=new j,fl=new j,Jc=new j,lv=new ot,ld=new ot,cv=new ot;class DE extends Nn{constructor(e=new vy){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new xi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new CE(i,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new Au(s,3,0,!1)),Yr.setAttribute("uv",new Au(s,2,3,!1))}this.geometry=Yr,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),yy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;jc(Qc.set(-.5,-.5,0),Zr,h,qr,l,c),jc(fl.set(.5,-.5,0),Zr,h,qr,l,c),jc(Jc.set(.5,.5,0),Zr,h,qr,l,c),lv.set(0,0),ld.set(1,0),cv.set(1,1);let p=e.ray.intersectTriangle(Qc,fl,Jc,!1,cl);if(p===null&&(jc(fl.set(-.5,.5,0),Zr,h,qr,l,c),ld.set(0,1),p=e.ray.intersectTriangle(Qc,Jc,fl,!1,cl),p===null))return;const m=e.ray.origin.distanceTo(cl);m<e.near||m>e.far||i.push({distance:m,point:cl.clone(),uv:Ni.getInterpolation(cl,Qc,fl,Jc,lv,ld,cv,new ot),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jc(r,e,i,s,l,c){Kr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ul.x=c*Kr.x-l*Kr.y,ul.y=l*Kr.x+c*Kr.y):ul.copy(Kr),r.copy(e),r.x+=ul.x,r.y+=ul.y,r.applyMatrix4(yy)}const wa=new j,cd=new j,$c=new j,ps=new j,ud=new j,eu=new j,fd=new j;class Hp{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){cd.copy(e).add(i).multiplyScalar(.5),$c.copy(i).sub(e).normalize(),ps.copy(this.origin).sub(cd);const c=e.distanceTo(i)*.5,h=-this.direction.dot($c),p=ps.dot(this.direction),m=-ps.dot($c),d=ps.lengthSq(),y=Math.abs(1-h*h);let x,g,M,T;if(y>0)if(x=h*m-p,g=h*p-m,T=c*y,x>=0)if(g>=-T)if(g<=T){const C=1/y;x*=C,g*=C,M=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(cd).addScaledVector($c,g),M}intersectSphere(e,i){wa.subVectors(e.center,this.origin);const s=wa.dot(this.direction),l=wa.dot(wa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),y>=0?(c=(e.min.y-g.y)*y,h=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,h=(e.min.y-g.y)*y),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,s,l,c){ud.subVectors(i,e),eu.subVectors(s,e),fd.crossVectors(ud,eu);let h=this.direction.dot(fd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ps.subVectors(this.origin,e);const m=p*this.direction.dot(eu.crossVectors(ps,eu));if(m<0)return null;const d=p*this.direction.dot(ud.cross(ps));if(d<0||m+d>h)return null;const y=-p*ps.dot(fd);return y<0?null:this.at(y/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xl extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uv=new on,Ys=new Hp,tu=new Fp,fv=new j,nu=new j,iu=new j,au=new j,hd=new j,su=new j,hv=new j,ru=new j;class Mn extends Nn{constructor(e=new xi,i=new xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){su.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const y=p[m],x=c[m];y!==0&&(hd.fromBufferAttribute(x,e),h?su.addScaledVector(hd,y):su.addScaledVector(hd.sub(i),y))}i.add(su)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(c),Ys.copy(e.ray).recast(e.near),!(tu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(tu,fv)===null||Ys.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(uv.copy(c).invert(),Ys.copy(e.ray).applyMatrix4(uv),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ys)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,y=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const E=g[T],v=h[E.materialIndex],I=Math.max(E.start,M.start),H=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let D=I,z=H;D<z;D+=3){const P=p.getX(D),N=p.getX(D+1),b=p.getX(D+2);l=ou(this,v,e,s,d,y,x,P,N,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let E=T,v=C;E<v;E+=3){const I=p.getX(E),H=p.getX(E+1),D=p.getX(E+2);l=ou(this,h,e,s,d,y,x,I,H,D),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const E=g[T],v=h[E.materialIndex],I=Math.max(E.start,M.start),H=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let D=I,z=H;D<z;D+=3){const P=D,N=D+1,b=D+2;l=ou(this,v,e,s,d,y,x,P,N,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let E=T,v=C;E<v;E+=3){const I=E,H=E+1,D=E+2;l=ou(this,h,e,s,d,y,x,I,H,D),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function UE(r,e,i,s,l,c,h,p){let m;if(e.side===si?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===ys,p),m===null)return null;ru.copy(p),ru.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(ru);return d<i.near||d>i.far?null:{distance:d,point:ru.clone(),object:r}}function ou(r,e,i,s,l,c,h,p,m,d){r.getVertexPosition(p,nu),r.getVertexPosition(m,iu),r.getVertexPosition(d,au);const y=UE(r,e,i,s,nu,iu,au,hv);if(y){const x=new j;Ni.getBarycoord(hv,nu,iu,au,x),l&&(y.uv=Ni.getInterpolatedAttribute(l,p,m,d,x,new ot)),c&&(y.uv1=Ni.getInterpolatedAttribute(c,p,m,d,x,new ot)),h&&(y.normal=Ni.getInterpolatedAttribute(h,p,m,d,x,new j),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Ni.getNormal(nu,iu,au,g.normal),y.face=g,y.barycoord=x}return y}class NE extends Wn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=Hn,y=Hn,x,g){super(null,h,p,m,d,y,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new j,LE=new j,OE=new pt;class gs{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=dd.subVectors(s,i).cross(LE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(dd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||OE.getNormalMatrix(e),l=this.coplanarPoint(dd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Fp,PE=new ot(.5,.5),lu=new j;class Gp{constructor(e=new gs,i=new gs,s=new gs,l=new gs,c=new gs,h=new gs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],y=c[4],x=c[5],g=c[6],M=c[7],T=c[8],C=c[9],E=c[10],v=c[11],I=c[12],H=c[13],D=c[14],z=c[15];if(l[0].setComponents(d-h,M-y,v-T,z-I).normalize(),l[1].setComponents(d+h,M+y,v+T,z+I).normalize(),l[2].setComponents(d+p,M+x,v+C,z+H).normalize(),l[3].setComponents(d-p,M-x,v-C,z-H).normalize(),s)l[4].setComponents(m,g,E,D).normalize(),l[5].setComponents(d-m,M-g,v-E,z-D).normalize();else if(l[4].setComponents(d-m,M-g,v-E,z-D).normalize(),i===ta)l[5].setComponents(d+m,M+g,v+E,z+D).normalize();else if(i===bl)l[5].setComponents(m,g,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=PE.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(lu.x=l.normal.x>0?e.max.x:e.min.x,lu.y=l.normal.y>0?e.max.y:e.min.y,lu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xy extends Wn{constructor(e=[],i=er,s,l,c,h,p,m,d,y){super(e,i,s,l,c,h,p,m,d,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends Wn{constructor(e,i,s,l,c,h,p,m,d){super(e,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends Wn{constructor(e,i,s=aa,l,c,h,p=Hn,m=Hn,d,y=za,x=1){if(y!==za&&y!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,y,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class IE extends lo{constructor(e,i=aa,s=er,l,c,h=Hn,p=Hn,m,d=za){const y={width:e,height:e,depth:1},x=[y,y,y,y,y,y];super(e,e,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends xi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],y=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(x,2));function T(C,E,v,I,H,D,z,P,N,b,O){const W=D/N,X=z/b,k=D/2,oe=z/2,pe=P/2,ee=N+1,F=b+1;let U=0,q=0;const ue=new j;for(let xe=0;xe<F;xe++){const L=xe*X-oe;for(let J=0;J<ee;J++){const Ee=J*W-k;ue[C]=Ee*I,ue[E]=L*H,ue[v]=pe,d.push(ue.x,ue.y,ue.z),ue[C]=0,ue[E]=0,ue[v]=P>0?1:-1,y.push(ue.x,ue.y,ue.z),x.push(J/N),x.push(1-xe/b),U+=1}}for(let xe=0;xe<b;xe++)for(let L=0;L<N;L++){const J=g+L+ee*xe,Ee=g+L+ee*(xe+1),Re=g+(L+1)+ee*(xe+1),Oe=g+(L+1)+ee*xe;m.push(J,Ee,Oe),m.push(Ee,Re,Oe),q+=6}p.addGroup(M,q,O),M+=q,g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wu extends xi{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const y=[],x=[],g=[],M=[];let T=0;const C=[],E=s/2;let v=0;I(),h===!1&&(e>0&&H(!0),i>0&&H(!1)),this.setIndex(y),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(M,2));function I(){const D=new j,z=new j;let P=0;const N=(i-e)/s;for(let b=0;b<=c;b++){const O=[],W=b/c,X=W*(i-e)+e;for(let k=0;k<=l;k++){const oe=k/l,pe=oe*m+p,ee=Math.sin(pe),F=Math.cos(pe);z.x=X*ee,z.y=-W*s+E,z.z=X*F,x.push(z.x,z.y,z.z),D.set(ee,N,F).normalize(),g.push(D.x,D.y,D.z),M.push(oe,1-W),O.push(T++)}C.push(O)}for(let b=0;b<l;b++)for(let O=0;O<c;O++){const W=C[O][b],X=C[O+1][b],k=C[O+1][b+1],oe=C[O][b+1];(e>0||O!==0)&&(y.push(W,X,oe),P+=3),(i>0||O!==c-1)&&(y.push(X,k,oe),P+=3)}d.addGroup(v,P,0),v+=P}function H(D){const z=T,P=new ot,N=new j;let b=0;const O=D===!0?e:i,W=D===!0?1:-1;for(let k=1;k<=l;k++)x.push(0,E*W,0),g.push(0,W,0),M.push(.5,.5),T++;const X=T;for(let k=0;k<=l;k++){const pe=k/l*m+p,ee=Math.cos(pe),F=Math.sin(pe);N.x=O*F,N.y=E*W,N.z=O*ee,x.push(N.x,N.y,N.z),g.push(0,W,0),P.x=ee*.5+.5,P.y=F*.5*W+.5,M.push(P.x,P.y),T++}for(let k=0;k<l;k++){const oe=z+k,pe=X+k;D===!0?y.push(pe,pe+1,oe):y.push(pe+1,pe,oe),b+=3}d.addGroup(v,b,D===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends wu{constructor(e=1,i=1,s=32,l=1,c=!1,h=0,p=Math.PI*2){super(0,e,i,s,l,c,h,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p}}static fromJSON(e){return new Sl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends xi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,y=m+1,x=e/p,g=i/m,M=[],T=[],C=[],E=[];for(let v=0;v<y;v++){const I=v*g-h;for(let H=0;H<d;H++){const D=H*x-c;T.push(D,-I,0),C.push(0,0,1),E.push(H/p),E.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<p;I++){const H=I+d*v,D=I+d*(v+1),z=I+1+d*(v+1),P=I+1+d*v;M.push(H,D,P),M.push(D,z,P)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vp extends xi{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],y=[];let x=e;const g=(i-e)/l,M=new j,T=new ot;for(let C=0;C<=l;C++){for(let E=0;E<=s;E++){const v=c+E/s*h;M.x=x*Math.cos(v),M.y=x*Math.sin(v),m.push(M.x,M.y,M.z),d.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,y.push(T.x,T.y)}x+=g}for(let C=0;C<l;C++){const E=C*(s+1);for(let v=0;v<s;v++){const I=v+E,H=I,D=I+s+1,z=I+s+2,P=I+1;p.push(H,D,P),p.push(D,z,P)}}this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kp extends xi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const y=[],x=new j,g=new j,M=[],T=[],C=[],E=[];for(let v=0;v<=s;v++){const I=[],H=v/s,D=h+H*p,z=e*Math.cos(D),P=Math.sqrt(e*e-z*z);let N=0;v===0&&h===0?N=.5/i:v===s&&m===Math.PI&&(N=-.5/i);for(let b=0;b<=i;b++){const O=b/i,W=l+O*c;x.x=-P*Math.cos(W),x.y=z,x.z=P*Math.sin(W),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),E.push(O+N,1-H),I.push(d++)}y.push(I)}for(let v=0;v<s;v++)for(let I=0;I<i;I++){const H=y[v][I+1],D=y[v][I],z=y[v+1][I],P=y[v+1][I+1];(v!==0||h>0)&&M.push(H,D,P),(v!==s-1||m<Math.PI)&&M.push(D,z,P)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function co(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(dv(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(dv(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Zn(r){const e={};for(let i=0;i<r.length;i++){const s=co(r[i]);for(const l in s)e[l]=s[l]}return e}function dv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function BE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function My(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const FE={clone:co,merge:Zn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Rt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VE extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pv extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kE extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XE extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ey extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class WE extends Ey{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const pd=new on,mv=new j,gv=new j;class YE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;mv.setFromMatrixPosition(e.matrixWorld),i.position.copy(mv),gv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(gv),i.updateMatrixWorld(),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===bl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cu=new j,uu=new xs,Qi=new j;class by extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cu,uu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(cu,uu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new j,_v=new ot,vv=new ot;class Ui extends by{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,i){return this.getViewBounds(e,_v,vv),i.subVectors(vv,_v)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Xp extends by{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qE extends YE{constructor(){super(new Xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZE extends Ey{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new qE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Qr=-90,Jr=1;class KE extends Nn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(Qr,Jr,e,i);c.layers=this.layers,this.add(c);const h=new Ui(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const p=new Ui(Qr,Jr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(Qr,Jr,e,i);m.layers=this.layers,this.add(m);const d=new Ui(Qr,Jr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,y]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(x,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class QE extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yv=new on;class JE{constructor(e,i,s=0,l=1/0){this.ray=new Hp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ut("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return yv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yv),this}intersectObject(e,i=!0,s=[]){return dp(e,this,s,i),s.sort(xv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)dp(e[l],this,s,i);return s.sort(xv),s}}function xv(r,e){return r.distance-e.distance}function dp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)dp(c[h],e,i,!0)}}class Sv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Mt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jp=class Jp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Jp.prototype.isMatrix2=!0;let Mv=Jp;class jE extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ev(r,e,i,s){const l=$E(s);switch(i){case uy:return r*e;case hy:return r*e/l.components*l.byteLength;case Dp:return r*e/l.components*l.byteLength;case tr:return r*e*2/l.components*l.byteLength;case Up:return r*e*2/l.components*l.byteLength;case fy:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Np:return r*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Id:return Math.max(r,16)*Math.max(e,8)/4;case Od:case zd:return Math.max(r,8)*Math.max(e,8)/2;case Bd:case Fd:case Gd:case Vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hd:case xu:case kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ap:case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Su:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $E(r){switch(r){case yi:case ry:return{byteLength:1,components:1};case Ml:case oy:case Pa:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case aa:case Rp:case ea:return{byteLength:4,components:1};case ly:case cy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ty(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function eb(r){const e=new WeakMap;function i(p,m){const d=p.array,y=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,y),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const y=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,y);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];r.bufferSubData(d,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
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
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
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
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bb=`#define PI 3.141592653589793
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
} // validated`,Tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ab=`vec3 transformedNormal = objectNormal;
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
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,$b=`uniform sampler2D dfgLUT;
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
}`,e1=`
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nT=`uniform sampler2D t2D;
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
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
}`,lT=`#if DEPTH_PACKING == 3200
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
}`,cT=`#define DISTANCE
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
}`,uT=`#define DISTANCE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#include <common>
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,ST=`#define NORMAL
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
}`,MT=`#define NORMAL
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
}`,ET=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,TT=`#define STANDARD
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
}`,AT=`#define STANDARD
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
}`,RT=`#define TOON
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
}`,CT=`#define TOON
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
}`,wT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,OT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:tb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:ab,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ob,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:fb,beginnormal_vertex:hb,bsdfs:db,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:vb,clipping_planes_vertex:yb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:Mb,color_vertex:Eb,common:bb,cube_uv_reflection_fragment:Tb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Rb,displacementmap_vertex:Cb,emissivemap_fragment:wb,emissivemap_pars_fragment:Db,colorspace_fragment:Ub,colorspace_pars_fragment:Nb,envmap_fragment:Lb,envmap_common_pars_fragment:Ob,envmap_pars_fragment:Pb,envmap_pars_vertex:zb,envmap_physical_pars_fragment:qb,envmap_vertex:Ib,fog_vertex:Bb,fog_pars_vertex:Fb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:kb,lights_lambert_fragment:Xb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Yb,lights_toon_fragment:Zb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Qb,lights_phong_pars_fragment:Jb,lights_physical_fragment:jb,lights_physical_pars_fragment:$b,lights_fragment_begin:e1,lights_fragment_maps:t1,lights_fragment_end:n1,lightprobes_pars_fragment:i1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:y1,normal_fragment_maps:x1,normal_pars_fragment:S1,normal_pars_vertex:M1,normal_vertex:E1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:C1,opaque_fragment:w1,packing:D1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:L1,dithering_pars_fragment:O1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:B1,shadowmap_vertex:F1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:k1,skinnormal_vertex:X1,specularmap_fragment:W1,specularmap_pars_fragment:Y1,tonemapping_fragment:q1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:j1,uv_vertex:$1,worldpos_vertex:eT,background_vert:tT,background_frag:nT,backgroundCube_vert:iT,backgroundCube_frag:aT,cube_vert:sT,cube_frag:rT,depth_vert:oT,depth_frag:lT,distance_vert:cT,distance_frag:uT,equirect_vert:fT,equirect_frag:hT,linedashed_vert:dT,linedashed_frag:pT,meshbasic_vert:mT,meshbasic_frag:gT,meshlambert_vert:_T,meshlambert_frag:vT,meshmatcap_vert:yT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:MT,meshphong_vert:ET,meshphong_frag:bT,meshphysical_vert:TT,meshphysical_frag:AT,meshtoon_vert:RT,meshtoon_frag:CT,points_vert:wT,points_frag:DT,shadow_vert:UT,shadow_frag:NT,sprite_vert:LT,sprite_frag:OT},He={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ji={basic:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Zn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Zn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Rt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Zn([He.points,He.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Zn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Zn([He.common,He.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Zn([He.sprite,He.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Zn([He.common,He.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Zn([He.lights,He.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ji.physical={uniforms:Zn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const fu={r:0,b:0,g:0},PT=new on,Ay=new pt;Ay.set(-1,0,0,0,1,0,0,0,1);function zT(r,e,i,s,l,c){const h=new Rt(0);let p=l===!0?0:1,m,d,y=null,x=0,g=null;function M(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const D=I.backgroundBlurriness>0;H=e.get(H,D)}return H}function T(I){let H=!1;const D=M(I);D===null?E(h,p):D&&D.isColor&&(E(D,1),H=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(I,H){const D=M(H);D&&(D.isCubeTexture||D.mapping===Cu)?(d===void 0&&(d=new Mn(new Ms(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:co(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(H.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ay),d.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Xt,(y!==D||x!==D.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,y=D,x=D.version,g=r.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Mn(new $s(2,2),new sa({name:"BackgroundMaterial",uniforms:co(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function E(I,H){I.getRGB(fu,My(r)),i.buffers.color.setClear(fu.r,fu.g,fu.b,H,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,H=1){h.set(I),p=H,E(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,E(h,p)},render:T,addToRenderList:C,dispose:v}}function IT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(X,k,oe,pe,ee){let F=!1;const U=x(X,pe,oe,k);c!==U&&(c=U,d(c.object)),F=M(X,pe,oe,ee),F&&T(X,pe,oe,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,D(X,k,oe,pe),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return r.createVertexArray()}function d(X){return r.bindVertexArray(X)}function y(X){return r.deleteVertexArray(X)}function x(X,k,oe,pe){const ee=pe.wireframe===!0;let F=s[k.id];F===void 0&&(F={},s[k.id]=F);const U=X.isInstancedMesh===!0?X.id:0;let q=F[U];q===void 0&&(q={},F[U]=q);let ue=q[oe.id];ue===void 0&&(ue={},q[oe.id]=ue);let xe=ue[ee];return xe===void 0&&(xe=g(m()),ue[ee]=xe),xe}function g(X){const k=[],oe=[],pe=[];for(let ee=0;ee<i;ee++)k[ee]=0,oe[ee]=0,pe[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:pe,object:X,attributes:{},index:null}}function M(X,k,oe,pe){const ee=c.attributes,F=k.attributes;let U=0;const q=oe.getAttributes();for(const ue in q)if(q[ue].location>=0){const L=ee[ue];let J=F[ue];if(J===void 0&&(ue==="instanceMatrix"&&X.instanceMatrix&&(J=X.instanceMatrix),ue==="instanceColor"&&X.instanceColor&&(J=X.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;U++}return c.attributesNum!==U||c.index!==pe}function T(X,k,oe,pe){const ee={},F=k.attributes;let U=0;const q=oe.getAttributes();for(const ue in q)if(q[ue].location>=0){let L=F[ue];L===void 0&&(ue==="instanceMatrix"&&X.instanceMatrix&&(L=X.instanceMatrix),ue==="instanceColor"&&X.instanceColor&&(L=X.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),ee[ue]=J,U++}c.attributes=ee,c.attributesNum=U,c.index=pe}function C(){const X=c.newAttributes;for(let k=0,oe=X.length;k<oe;k++)X[k]=0}function E(X){v(X,0)}function v(X,k){const oe=c.newAttributes,pe=c.enabledAttributes,ee=c.attributeDivisors;oe[X]=1,pe[X]===0&&(r.enableVertexAttribArray(X),pe[X]=1),ee[X]!==k&&(r.vertexAttribDivisor(X,k),ee[X]=k)}function I(){const X=c.newAttributes,k=c.enabledAttributes;for(let oe=0,pe=k.length;oe<pe;oe++)k[oe]!==X[oe]&&(r.disableVertexAttribArray(oe),k[oe]=0)}function H(X,k,oe,pe,ee,F,U){U===!0?r.vertexAttribIPointer(X,k,oe,ee,F):r.vertexAttribPointer(X,k,oe,pe,ee,F)}function D(X,k,oe,pe){C();const ee=pe.attributes,F=oe.getAttributes(),U=k.defaultAttributeValues;for(const q in F){const ue=F[q];if(ue.location>=0){let xe=ee[q];if(xe===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(xe=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(xe=X.instanceColor)),xe!==void 0){const L=xe.normalized,J=xe.itemSize,Ee=e.get(xe);if(Ee===void 0)continue;const Re=Ee.buffer,Oe=Ee.type,ne=Ee.bytesPerElement,Me=Oe===r.INT||Oe===r.UNSIGNED_INT||xe.gpuType===Rp;if(xe.isInterleavedBufferAttribute){const be=xe.data,ke=be.stride,lt=xe.offset;if(be.isInstancedInterleavedBuffer){for(let tt=0;tt<ue.locationSize;tt++)v(ue.location+tt,be.meshPerAttribute);X.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let tt=0;tt<ue.locationSize;tt++)E(ue.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let tt=0;tt<ue.locationSize;tt++)H(ue.location+tt,J/ue.locationSize,Oe,L,ke*ne,(lt+J/ue.locationSize*tt)*ne,Me)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<ue.locationSize;be++)v(ue.location+be,xe.meshPerAttribute);X.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<ue.locationSize;be++)E(ue.location+be);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let be=0;be<ue.locationSize;be++)H(ue.location+be,J/ue.locationSize,Oe,L,J*ne,J/ue.locationSize*be*ne,Me)}}else if(U!==void 0){const L=U[q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(ue.location,L);break;case 3:r.vertexAttrib3fv(ue.location,L);break;case 4:r.vertexAttrib4fv(ue.location,L);break;default:r.vertexAttrib1fv(ue.location,L)}}}}I()}function z(){O();for(const X in s){const k=s[X];for(const oe in k){const pe=k[oe];for(const ee in pe){const F=pe[ee];for(const U in F)y(F[U].object),delete F[U];delete pe[ee]}}delete s[X]}}function P(X){if(s[X.id]===void 0)return;const k=s[X.id];for(const oe in k){const pe=k[oe];for(const ee in pe){const F=pe[ee];for(const U in F)y(F[U].object),delete F[U];delete pe[ee]}}delete s[X.id]}function N(X){for(const k in s){const oe=s[k];for(const pe in oe){const ee=oe[pe];if(ee[X.id]===void 0)continue;const F=ee[X.id];for(const U in F)y(F[U].object),delete F[U];delete ee[X.id]}}}function b(X){for(const k in s){const oe=s[k],pe=X.isInstancedMesh===!0?X.id:0,ee=oe[pe];if(ee!==void 0){for(const F in ee){const U=ee[F];for(const q in U)y(U[q].object),delete U[q];delete ee[F]}delete oe[pe],Object.keys(oe).length===0&&delete s[k]}}}function O(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:E,disableUnusedAttributes:I}}function BT(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,y){y!==0&&(r.drawArraysInstanced(s,m,d,y),i.update(d,s,y))}function p(m,d,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,y);let g=0;for(let M=0;M<y;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function FT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Vi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(N){const b=N===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==yi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ea&&!b)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const y=m(d);y!==d&&(ut("WebGLRenderer:",d,"not supported, using",y,"instead."),d=y);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),H=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:D,maxSamples:z,samples:P}}function HT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new gs,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=y(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,C=x.clipIntersection,E=x.clipShadows,v=r.get(x);if(!l||T===null||T.length===0||c&&!E)c?y(null):d();else{const I=c?0:s,H=I*4;let D=v.clippingState||null;m.value=D,D=y(T,g,H,M);for(let z=0;z!==H;++z)D[z]=i[z];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(x,g,M,T){const C=x!==null?x.length:0;let E=null;if(C!==0){if(E=m.value,T!==!0||E===null){const v=M+C*4,I=g.matrixWorldInverse;p.getNormalMatrix(I),(E===null||E.length<v)&&(E=new Float32Array(v));for(let H=0,D=M;H!==C;++H,D+=4)h.copy(x[H]).applyMatrix4(I,p),h.normal.toArray(E,D),E[D+3]=h.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}const vs=4,bv=[.125,.215,.35,.446,.526,.582],Ks=20,GT=256,hl=new Xp,Tv=new Rt;let md=null,gd=0,_d=0,vd=!1;const VT=new j;class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=VT}=c;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===er||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pa,format:Vi,colorSpace:Mu,depthBuffer:!1},l=Rv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kT(c)),this._blurMaterial=WT(c,e,i),this._ggxMaterial=XT(c,e,i)}return l}_compileMaterial(e){const i=new Mn(new xi,e);this._renderer.compile(i,hl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),d=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Tv),x.toneMapping=na,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Ms,new xl({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,E=C.material;let v=!1;const I=e.background;I?I.isColor&&(E.color.copy(I),e.background=null,v=!0):(E.color.copy(Tv),v=!0);for(let H=0;H<6;H++){const D=H%3;D===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[H],c.y,c.z)):D===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[H]));const z=this._cubeSize;jr(l,D*z,H>2?z:0,z,z),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===er||e.mapping===oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,hl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-y*y),g=0+d*1.25,M=x*g,{_lodMax:T}=this,C=this._sizeLods[s],E=3*C*(s>T-vs?s-T+vs:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,jr(c,E,v,3*C,2*C),l.setRenderTarget(c),l.render(p,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,jr(e,E,v,3*C,2*C),l.setRenderTarget(e),l.render(p,hl)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const y=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ks-1),C=c/T,E=isFinite(c)?1+Math.floor(y*C):Ks;E>Ks&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ks}`);const v=[];let I=0;for(let N=0;N<Ks;++N){const b=N/C,O=Math.exp(-b*b/2);v.push(O),N===0?I+=O:N<E&&(I+=2*O)}for(let N=0;N<v.length;N++)v[N]=v[N]/I;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const D=this._sizeLods[l],z=3*D*(l>H-vs?l-H+vs:0),P=4*(this._cubeSize-D);jr(i,z,P,3*D,2*D),m.setRenderTarget(i),m.render(x,hl)}}function kT(r){const e=[],i=[],s=[];let l=r;const c=r-vs+1+bv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>r-vs?m=bv[h-r+vs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),y=-d,x=1+d,g=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,T=6,C=3,E=2,v=1,I=new Float32Array(C*T*M),H=new Float32Array(E*T*M),D=new Float32Array(v*T*M);for(let P=0;P<M;P++){const N=P%3*2/3-1,b=P>2?0:-1,O=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];I.set(O,C*T*P),H.set(g,E*T*P);const W=[P,P,P,P,P,P];D.set(W,v*T*P)}const z=new xi;z.setAttribute("position",new ki(I,C)),z.setAttribute("uv",new ki(H,E)),z.setAttribute("faceIndex",new ki(D,v)),s.push(new Mn(z,null)),l>vs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Rv(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function jr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function XT(r,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function WT(r,e,i){const s=new Float32Array(Ks),l=new j(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Cv(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function wv(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}class Ry extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new xy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ms(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:Na});c.uniforms.tEquirect.value=i;const h=new Mn(l,c),p=i.minFilter;return i.minFilter===Js&&(i.minFilter=Un),new KE(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function YT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Vh||M===kh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Ry(T.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,T=M===Vh||M===kh,C=M===er||M===oo;if(T||C){let E=i.get(g);const v=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Av(r)),E=T?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const I=g.image;return T&&I&&I.height>0||C&&I&&m(I)?(s===null&&(s=new Av(r)),E=T?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",y),E.texture):null}}}return g}function p(g,M){return M===Vh?g.mapping=er:M===kh&&(g.mapping=oo),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function y(g){const M=g.target;M.removeEventListener("dispose",y);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function qT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&io("WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,e,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const I=M.array;C=M.version;for(let H=0,D=I.length;H<D;H+=3){const z=I[H+0],P=I[H+1],N=I[H+2];g.push(z,P,P,N,N,z)}}else{const I=T.array;C=T.version;for(let H=0,D=I.length/3-1;H<D;H+=3){const z=H+0,P=H+1,N=H+2;g.push(z,P,P,N,N,z)}}const E=new(T.count>=65535?_y:gy)(g,1);E.version=C;const v=c.get(x);v&&e.remove(v),c.set(x,E)}function y(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:y}}function KT(r,e,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function d(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*h,M),i.update(g,s,M))}function y(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let C=0;for(let E=0;E<M;E++)C+=g[E];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=y}function QT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(r,e,i){const s=new WeakMap,l=new ln;function c(h,p,m){const d=h.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=y!==void 0?y.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let W=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",W)};var M=W;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),E===!0&&(D=3);let z=p.attributes.position.count*D,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const N=new Float32Array(z*P*4*x),b=new py(N,z,P,x);b.type=ea,b.needsUpdate=!0;const O=D*4;for(let X=0;X<x;X++){const k=v[X],oe=I[X],pe=H[X],ee=z*P*4*X;for(let F=0;F<k.count;F++){const U=F*O;T===!0&&(l.fromBufferAttribute(k,F),N[ee+U+0]=l.x,N[ee+U+1]=l.y,N[ee+U+2]=l.z,N[ee+U+3]=0),C===!0&&(l.fromBufferAttribute(oe,F),N[ee+U+4]=l.x,N[ee+U+5]=l.y,N[ee+U+6]=l.z,N[ee+U+7]=0),E===!0&&(l.fromBufferAttribute(pe,F),N[ee+U+8]=l.x,N[ee+U+9]=l.y,N[ee+U+10]=l.z,N[ee+U+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new ot(z,P)},s.set(p,g),p.addEventListener("dispose",W)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let E=0;E<d.length;E++)T+=d[E];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function jT(r,e,i,s,l){let c=new WeakMap;function h(d){const y=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==y&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,y))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return g}function p(){c=new WeakMap}function m(d){const y=d.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:p}}const $T={[$v]:"LINEAR_TONE_MAPPING",[ey]:"REINHARD_TONE_MAPPING",[ty]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[iy]:"AGX_TONE_MAPPING",[ay]:"NEUTRAL_TONE_MAPPING",[ny]:"CUSTOM_TONE_MAPPING"};function eA(r,e,i,s,l,c){const h=new ia(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new lo(e,i):void 0}),p=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new xi;m.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const d=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Mn(m,d),x=new Xp(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,E=null,v=[],I=!1;this.setSize=function(H,D){h.setSize(H,D),p.setSize(H,D);for(let z=0;z<v.length;z++){const P=v[z];P.setSize&&P.setSize(H,D)}},this.setEffects=function(H){v=H,I=v.length>0&&v[0].isRenderPass===!0;const D=h.width,z=h.height;for(let P=0;P<v.length;P++){const N=v[P];N.setSize&&N.setSize(D,z)}},this.begin=function(H,D){if(T||H.toneMapping===na&&v.length===0)return!1;if(E=D,D!==null){const z=D.width,P=D.height;(h.width!==z||h.height!==P)&&this.setSize(z,P)}return I===!1&&H.setRenderTarget(h),C=H.toneMapping,H.toneMapping=na,!0},this.hasRenderPass=function(){return I},this.end=function(H,D){H.toneMapping=C,T=!0;let z=h,P=p;for(let N=0;N<v.length;N++){const b=v[N];if(b.enabled!==!1&&(b.render(H,P,z,D),b.needsSwap!==!1)){const O=z;z=P,P=O}}if(g!==H.outputColorSpace||M!==H.toneMapping){g=H.outputColorSpace,M=H.toneMapping,d.defines={},Nt.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const N=$T[M];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=z.texture,H.setRenderTarget(E),H.render(y,x),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Cy=new Wn,pp=new lo(1,1),wy=new py,Dy=new gE,Uy=new xy,Dv=[],Uv=[],Nv=new Float32Array(16),Lv=new Float32Array(9),Ov=new Float32Array(4);function ho(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Dv[l];if(c===void 0&&(c=new Float32Array(l),Dv[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,r[h].toArray(c,p)}return c}function Rn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Cn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Uu(r,e){let i=Uv[e];i===void 0&&(i=new Int32Array(e),Uv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function tA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function nA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2fv(this.addr,e),Cn(i,e)}}function iA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;r.uniform3fv(this.addr,e),Cn(i,e)}}function aA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4fv(this.addr,e),Cn(i,e)}}function sA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Ov.set(s),r.uniformMatrix2fv(this.addr,!1,Ov),Cn(i,s)}}function rA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Lv.set(s),r.uniformMatrix3fv(this.addr,!1,Lv),Cn(i,s)}}function oA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Nv.set(s),r.uniformMatrix4fv(this.addr,!1,Nv),Cn(i,s)}}function lA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function cA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2iv(this.addr,e),Cn(i,e)}}function uA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3iv(this.addr,e),Cn(i,e)}}function fA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4iv(this.addr,e),Cn(i,e)}}function hA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function dA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2uiv(this.addr,e),Cn(i,e)}}function pA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3uiv(this.addr,e),Cn(i,e)}}function mA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4uiv(this.addr,e),Cn(i,e)}}function gA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(pp.compareFunction=i.isReversedDepthBuffer()?Op:Lp,c=pp):c=Cy,i.setTexture2D(e||c,l)}function _A(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Dy,l)}function vA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Uy,l)}function yA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||wy,l)}function xA(r){switch(r){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return yA}}function SA(r,e){r.uniform1fv(this.addr,e)}function MA(r,e){const i=ho(e,this.size,2);r.uniform2fv(this.addr,i)}function EA(r,e){const i=ho(e,this.size,3);r.uniform3fv(this.addr,i)}function bA(r,e){const i=ho(e,this.size,4);r.uniform4fv(this.addr,i)}function TA(r,e){const i=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function AA(r,e){const i=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function RA(r,e){const i=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function CA(r,e){r.uniform1iv(this.addr,e)}function wA(r,e){r.uniform2iv(this.addr,e)}function DA(r,e){r.uniform3iv(this.addr,e)}function UA(r,e){r.uniform4iv(this.addr,e)}function NA(r,e){r.uniform1uiv(this.addr,e)}function LA(r,e){r.uniform2uiv(this.addr,e)}function OA(r,e){r.uniform3uiv(this.addr,e)}function PA(r,e){r.uniform4uiv(this.addr,e)}function zA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=pp:h=Cy;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function IA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Dy,c[h])}function BA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Uy,c[h])}function FA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||wy,c[h])}function HA(r){switch(r){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return bA;case 35674:return TA;case 35675:return AA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return wA;case 35668:case 35672:return DA;case 35669:case 35673:return UA;case 5125:return NA;case 36294:return LA;case 36295:return OA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return FA}}class GA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xA(i.type)}}class VA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=HA(i.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Pv(r,e){r.seq.push(e),r.map[e.id]=e}function XA(r,e,i){const s=r.name,l=s.length;for(yd.lastIndex=0;;){const c=yd.exec(s),h=yd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){Pv(i,d===void 0?new GA(p,r,e):new VA(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new kA(p),Pv(i,x)),i=x}}}class yu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);XA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function zv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const WA=37297;let YA=0;function qA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const Iv=new pt;function ZA(r){Nt._getMatrix(Iv,Nt.workingColorSpace,r);const e=`mat3( ${Iv.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(r)){case Eu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+qA(r.getShaderSource(e),p)}else return c}function KA(r,e){const i=ZA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QA={[$v]:"Linear",[ey]:"Reinhard",[ty]:"Cineon",[Ap]:"ACESFilmic",[iy]:"AgX",[ay]:"Neutral",[ny]:"Custom"};function JA(r,e){const i=QA[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hu=new j;function jA(){Nt.getLuminanceCoefficients(hu);const r=hu.x.toFixed(4),e=hu.y.toFixed(4),i=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function e2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function t2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:p}}return i}function gl(r){return r!==""}function Fv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(r){return r.replace(n2,a2)}const i2=new Map;function a2(r,e){let i=yt[e];if(i===void 0){const s=i2.get(e);if(s!==void 0)i=yt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mp(i)}const s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(r){return r.replace(s2,r2)}function r2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const o2={[_l]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function l2(r){return o2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c2={[er]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function u2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":c2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const f2={[oo]:"ENVMAP_MODE_REFRACTION"};function h2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":f2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d2={[jv]:"ENVMAP_BLENDING_MULTIPLY",[OM]:"ENVMAP_BLENDING_MIX",[PM]:"ENVMAP_BLENDING_ADD"};function p2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":d2[r.combine]||"ENVMAP_BLENDING_NONE"}function m2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function g2(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=l2(i),d=u2(i),y=h2(i),x=p2(i),g=m2(i),M=$A(i),T=e2(c),C=l.createProgram();let E,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(gl).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(gl).join(`
`),v.length>0&&(v+=`
`)):(E=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),v=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?yt.tonemapping_pars_fragment:"",i.toneMapping!==na?JA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,KA("linearToOutputTexel",i.outputColorSpace),jA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),h=mp(h),h=Fv(h,i),h=Hv(h,i),p=mp(p),p=Fv(p,i),p=Hv(p,i),h=Gv(h),p=Gv(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const H=I+E+h,D=I+v+p,z=zv(l,l.VERTEX_SHADER,H),P=zv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,z),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(X){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(C)||"",oe=l.getShaderInfoLog(z)||"",pe=l.getShaderInfoLog(P)||"",ee=k.trim(),F=oe.trim(),U=pe.trim();let q=!0,ue=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,z,P);else{const xe=Bv(l,z,"vertex"),L=Bv(l,P,"fragment");Ut("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ee+`
`+xe+`
`+L)}else ee!==""?ut("WebGLProgram: Program Info Log:",ee):(F===""||U==="")&&(ue=!1);ue&&(X.diagnostics={runnable:q,programLog:ee,vertexShader:{log:F,prefix:E},fragmentShader:{log:U,prefix:v}})}l.deleteShader(z),l.deleteShader(P),b=new yu(l,C),O=t2(l,C)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let O;this.getAttributes=function(){return O===void 0&&N(this),O};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(C,WA)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=P,this}let _2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new y2(e),i.set(e,s)),s}}class y2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function x2(r){return r===tr||r===xu||r===Su}function S2(r,e,i,s,l,c){const h=new Ip,p=new v2,m=new Set,d=[],y=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,O,W,X,k,oe){const pe=X.fog,ee=k.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,q=e.get(b.envMap||F,U),ue=q&&q.mapping===Cu?q.image.height:null,xe=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const L=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,J=L!==void 0?L.length:0;let Ee=0;ee.morphAttributes.position!==void 0&&(Ee=1),ee.morphAttributes.normal!==void 0&&(Ee=2),ee.morphAttributes.color!==void 0&&(Ee=3);let Re,Oe,ne,Me;if(xe){const Ke=ji[xe];Re=Ke.vertexShader,Oe=Ke.fragmentShader}else{Re=b.vertexShader,Oe=b.fragmentShader;const Ke=p.getVertexShaderStage(b),nn=p.getFragmentShaderStage(b);p.update(b,Ke,nn),ne=Ke.id,Me=nn.id}const be=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),lt=k.isInstancedMesh===!0,tt=k.isBatchedMesh===!0,Yt=!!b.map,ht=!!b.matcap,xt=!!q,St=!!b.aoMap,vt=!!b.lightMap,$t=!!b.bumpMap&&b.wireframe===!1,ve=!!b.normalMap,Ce=!!b.displacementMap,we=!!b.emissiveMap,Ve=!!b.metalnessMap,Ye=!!b.roughnessMap,G=b.anisotropy>0,qe=b.clearcoat>0,Ie=b.dispersion>0,w=b.iridescence>0,S=b.sheen>0,K=b.transmission>0,te=G&&!!b.anisotropyMap,he=qe&&!!b.clearcoatMap,Ae=qe&&!!b.clearcoatNormalMap,Ue=qe&&!!b.clearcoatRoughnessMap,de=w&&!!b.iridescenceMap,me=w&&!!b.iridescenceThicknessMap,Ne=S&&!!b.sheenColorMap,Xe=S&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Pe=!!b.specularColorMap,it=!!b.specularIntensityMap,at=K&&!!b.transmissionMap,ft=K&&!!b.thicknessMap,Z=!!b.gradientMap,De=!!b.alphaMap,_e=b.alphaTest>0,Le=!!b.alphaHash,Ge=!!b.extensions;let Te=na;b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Te=r.toneMapping);const $e={shaderID:xe,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Oe,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:tt,batchingColor:tt&&k._colorsTexture!==null,instancing:lt,instancingColor:lt&&k.instanceColor!==null,instancingMorph:lt&&k.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:ht,envMap:xt,envMapMode:xt&&q.mapping,envMapCubeUVHeight:ue,aoMap:St,lightMap:vt,bumpMap:$t,normalMap:ve,displacementMap:Ce,emissiveMap:we,normalMapObjectSpace:ve&&b.normalMapType===BM,normalMapTangentSpace:ve&&b.normalMapType===up,packedNormalMap:ve&&b.normalMapType===up&&x2(b.normalMap.format),metalnessMap:Ve,roughnessMap:Ye,anisotropy:G,anisotropyMap:te,clearcoat:qe,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:Ie,iridescence:w,iridescenceMap:de,iridescenceThicknessMap:me,sheen:S,sheenColorMap:Ne,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:Pe,specularIntensityMap:it,transmission:K,transmissionMap:at,thicknessMap:ft,gradientMap:Z,opaque:b.transparent===!1&&b.blending===no&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:Le,combine:b.combine,mapUv:Yt&&T(b.map.channel),aoMapUv:St&&T(b.aoMap.channel),lightMapUv:vt&&T(b.lightMap.channel),bumpMapUv:$t&&T(b.bumpMap.channel),normalMapUv:ve&&T(b.normalMap.channel),displacementMapUv:Ce&&T(b.displacementMap.channel),emissiveMapUv:we&&T(b.emissiveMap.channel),metalnessMapUv:Ve&&T(b.metalnessMap.channel),roughnessMapUv:Ye&&T(b.roughnessMap.channel),anisotropyMapUv:te&&T(b.anisotropyMap.channel),clearcoatMapUv:he&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(b.sheenRoughnessMap.channel),specularMapUv:Be&&T(b.specularMap.channel),specularColorMapUv:Pe&&T(b.specularColorMap.channel),specularIntensityMapUv:it&&T(b.specularIntensityMap.channel),transmissionMapUv:at&&T(b.transmissionMap.channel),thicknessMapUv:ft&&T(b.thicknessMap.channel),alphaMapUv:De&&T(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ve||G),vertexNormals:!!ee.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Yt||De),fog:!!pe,useFog:b.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ee.attributes.normal===void 0&&ve===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ke,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ee,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$i,flipSided:b.side===si,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function E(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)O.push(W),O.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(v(O,b),I(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function v(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function I(b,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const O=M[b.type];let W;if(O){const X=ji[O];W=FE.clone(X.uniforms)}else W=b.uniforms;return W}function D(b,O){let W=y.get(O);return W!==void 0?++W.usedTimes:(W=new g2(r,O,b,l),d.push(W),y.set(O,W)),W}function z(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),y.delete(b.cacheKey),b.destroy()}}function P(b){p.remove(b)}function N(){p.dispose()}return{getParameters:C,getProgramCacheKey:E,getUniforms:H,acquireProgram:D,releaseProgram:z,releaseShaderCache:P,programs:d,dispose:N}}function M2(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function E2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,E,v){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:E,group:v},r[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=T,I.materialVariant=h(g),I.groupOrder=C,I.renderOrder=g.renderOrder,I.z=E,I.group=v),e++,I}function m(g,M,T,C,E,v){const I=p(g,M,T,C,E,v);T.transmission>0?s.push(I):T.transparent===!0?l.push(I):i.push(I)}function d(g,M,T,C,E,v){const I=p(g,M,T,C,E,v);T.transmission>0?s.unshift(I):T.transparent===!0?l.unshift(I):i.unshift(I)}function y(g,M,T){i.length>1&&i.sort(g||E2),s.length>1&&s.sort(M||kv),l.length>1&&l.sort(M||kv),T&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:y}}function b2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new Xv,r.set(s,[h])):l>=c.length?(h=new Xv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function T2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new Rt};break;case"SpotLight":i={position:new j,direction:new j,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=i,i}}}function A2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let R2=0;function C2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w2(r){const e=new T2,i=A2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new on,h=new on;function p(d){let y=0,x=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,T=0,C=0,E=0,v=0,I=0,H=0,D=0,z=0,P=0,N=0;d.sort(C2);for(let O=0,W=d.length;O<W;O++){const X=d[O],k=X.color,oe=X.intensity,pe=X.distance;let ee=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===tr?ee=X.shadow.map.texture:ee=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)y+=k.r*oe,x+=k.g*oe,g+=k.b*oe;else if(X.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(X.sh.coefficients[F],oe);N++}else if(X.isDirectionalLight){const F=e.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const U=X.shadow,q=i.get(X);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=ee,s.directionalShadowMatrix[M]=X.shadow.matrix,I++}s.directional[M]=F,M++}else if(X.isSpotLight){const F=e.get(X);F.position.setFromMatrixPosition(X.matrixWorld),F.color.copy(k).multiplyScalar(oe),F.distance=pe,F.coneCos=Math.cos(X.angle),F.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),F.decay=X.decay,s.spot[C]=F;const U=X.shadow;if(X.map&&(s.spotLightMap[z]=X.map,z++,U.updateMatrices(X),X.castShadow&&P++),s.spotLightMatrix[C]=U.matrix,X.castShadow){const q=i.get(X);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,s.spotShadow[C]=q,s.spotShadowMap[C]=ee,D++}C++}else if(X.isRectAreaLight){const F=e.get(X);F.color.copy(k).multiplyScalar(oe),F.halfWidth.set(X.width*.5,0,0),F.halfHeight.set(0,X.height*.5,0),s.rectArea[E]=F,E++}else if(X.isPointLight){const F=e.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),F.distance=X.distance,F.decay=X.decay,X.castShadow){const U=X.shadow,q=i.get(X);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,q.shadowCameraNear=U.camera.near,q.shadowCameraFar=U.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=ee,s.pointShadowMatrix[T]=X.shadow.matrix,H++}s.point[T]=F,T++}else if(X.isHemisphereLight){const F=e.get(X);F.skyColor.copy(X.color).multiplyScalar(oe),F.groundColor.copy(X.groundColor).multiplyScalar(oe),s.hemi[v]=F,v++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==E||b.hemiLength!==v||b.numDirectionalShadows!==I||b.numPointShadows!==H||b.numSpotShadows!==D||b.numSpotMaps!==z||b.numLightProbes!==N)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=E,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=D+z-P,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=N,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=E,b.hemiLength=v,b.numDirectionalShadows=I,b.numPointShadows=H,b.numSpotShadows=D,b.numSpotMaps=z,b.numLightProbes=N,s.version=R2++)}function m(d,y){let x=0,g=0,M=0,T=0,C=0;const E=y.matrixWorldInverse;for(let v=0,I=d.length;v<I;v++){const H=d[v];if(H.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(E),x++}else if(H.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(E),D.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(E),M++}else if(H.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(E),h.identity(),c.copy(H.matrixWorld),c.premultiply(E),h.extractRotation(c),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(H.matrixWorld),D.position.applyMatrix4(E),g++}else if(H.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(H.matrixWorld),D.direction.transformDirection(E),C++}}}return{setup:p,setupView:m,state:s}}function Wv(r){const e=new w2(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function y(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:y,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function D2(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new Wv(r),e.set(l,[p])):c>=h.length?(p=new Wv(r),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const U2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N2=`uniform sampler2D shadow_pass;
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
}`,L2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],O2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Yv=new on,dl=new j,xd=new j;function P2(r,e,i){let s=new Gp;const l=new ot,c=new ot,h=new ln,p=new kE,m=new XE,d={},y=i.maxTextureSize,x={[ys]:si,[si]:ys,[$i]:$i},g=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:U2,fragmentShader:N2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new xi;T.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mn(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let v=this.type;this.render=function(P,N,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;this.type===mM&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_l);const O=r.getRenderTarget(),W=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Na),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const oe=v!==this.type;oe&&N.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ee=>ee.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ee=P.length;pe<ee;pe++){const F=P[pe],U=F.shadow;if(U===void 0){ut("WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;l.copy(U.mapSize);const q=U.getFrameExtents();l.multiply(q),c.copy(U.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/q.x),l.x=c.x*q.x,U.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/q.y),l.y=c.y*q.y,U.mapSize.y=c.y));const ue=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ue,U.map===null||oe===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ml){if(F.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ia(l.x,l.y,{format:tr,type:Pa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),U.map.texture.name=F.name+".shadowMap",U.map.depthTexture=new lo(l.x,l.y,ea),U.map.depthTexture.name=F.name+".shadowMapDepth",U.map.depthTexture.format=za,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Hn,U.map.depthTexture.magFilter=Hn}else F.isPointLight?(U.map=new Ry(l.x),U.map.depthTexture=new IE(l.x,aa)):(U.map=new ia(l.x,l.y),U.map.depthTexture=new lo(l.x,l.y,aa)),U.map.depthTexture.name=F.name+".shadowMap",U.map.depthTexture.format=za,this.type===_l?(U.map.depthTexture.compareFunction=ue?Op:Lp,U.map.depthTexture.minFilter=Un,U.map.depthTexture.magFilter=Un):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Hn,U.map.depthTexture.magFilter=Hn);U.camera.updateProjectionMatrix()}const xe=U.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<xe;L++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,L),r.clear();else{L===0&&(r.setRenderTarget(U.map),r.clear());const J=U.getViewport(L);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),k.viewport(h)}if(F.isPointLight){const J=U.camera,Ee=U.matrix,Re=F.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),dl.setFromMatrixPosition(F.matrixWorld),J.position.copy(dl),xd.copy(J.position),xd.add(L2[L]),J.up.copy(O2[L]),J.lookAt(xd),J.updateMatrixWorld(),Ee.makeTranslation(-dl.x,-dl.y,-dl.z),Yv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Yv,J.coordinateSystem,J.reversedDepth)}else U.updateMatrices(F);s=U.getFrustum(),D(N,b,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===ml&&I(U,b),U.needsUpdate=!1}v=this.type,E.needsUpdate=!1,r.setRenderTarget(O,W,X)};function I(P,N){const b=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ia(l.x,l.y,{format:tr,type:Pa})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(N,null,b,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(N,null,b,M,C,null)}function H(P,N,b,O){let W=null;const X=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)W=X;else if(W=b.isPointLight===!0?m:p,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const k=W.uuid,oe=N.uuid;let pe=d[k];pe===void 0&&(pe={},d[k]=pe);let ee=pe[oe];ee===void 0&&(ee=W.clone(),pe[oe]=ee,N.addEventListener("dispose",z)),W=ee}if(W.visible=N.visible,W.wireframe=N.wireframe,O===ml?W.side=N.shadowSide!==null?N.shadowSide:N.side:W.side=N.shadowSide!==null?N.shadowSide:x[N.side],W.alphaMap=N.alphaMap,W.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,W.map=N.map,W.clipShadows=N.clipShadows,W.clippingPlanes=N.clippingPlanes,W.clipIntersection=N.clipIntersection,W.displacementMap=N.displacementMap,W.displacementScale=N.displacementScale,W.displacementBias=N.displacementBias,W.wireframeLinewidth=N.wireframeLinewidth,W.linewidth=N.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const k=r.properties.get(W);k.light=b}return W}function D(P,N,b,O,W){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===ml)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const oe=e.update(P),pe=P.material;if(Array.isArray(pe)){const ee=oe.groups;for(let F=0,U=ee.length;F<U;F++){const q=ee[F],ue=pe[q.materialIndex];if(ue&&ue.visible){const xe=H(P,ue,O,W);P.onBeforeShadow(r,P,N,b,oe,xe,q),r.renderBufferDirect(b,null,oe,xe,P,q),P.onAfterShadow(r,P,N,b,oe,xe,q)}}}else if(pe.visible){const ee=H(P,pe,O,W);P.onBeforeShadow(r,P,N,b,oe,ee,null),r.renderBufferDirect(b,null,oe,ee,P,null),P.onAfterShadow(r,P,N,b,oe,ee,null)}}const k=P.children;for(let oe=0,pe=k.length;oe<pe;oe++)D(k[oe],N,b,O,W)}function z(P){P.target.removeEventListener("dispose",z);for(const b in d){const O=d[b],W=P.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function z2(r,e){function i(){let Z=!1;const De=new ln;let _e=null;const Le=new ln(0,0,0,0);return{setMask:function(Ge){_e!==Ge&&!Z&&(r.colorMask(Ge,Ge,Ge,Ge),_e=Ge)},setLocked:function(Ge){Z=Ge},setClear:function(Ge,Te,$e,Ke,nn){nn===!0&&(Ge*=Ke,Te*=Ke,$e*=Ke),De.set(Ge,Te,$e,Ke),Le.equals(De)===!1&&(r.clearColor(Ge,Te,$e,Ke),Le.copy(De))},reset:function(){Z=!1,_e=null,Le.set(-1,0,0,0)}}}function s(){let Z=!1,De=!1,_e=null,Le=null,Ge=null;return{setReversed:function(Te){if(De!==Te){const $e=e.get("EXT_clip_control");Te?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),De=Te;const Ke=Ge;Ge=null,this.setClear(Ke)}},getReversed:function(){return De},setTest:function(Te){Te?be(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!Z&&(r.depthMask(Te),_e=Te)},setFunc:function(Te){if(De&&(Te=ZM[Te]),Le!==Te){switch(Te){case Td:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Rd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Cd:r.depthFunc(r.EQUAL);break;case wd:r.depthFunc(r.GEQUAL);break;case Dd:r.depthFunc(r.GREATER);break;case Ud:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=Te}},setLocked:function(Te){Z=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,De&&(Te=1-Te),r.clearDepth(Te))},reset:function(){Z=!1,_e=null,Le=null,Ge=null,De=!1}}}function l(){let Z=!1,De=null,_e=null,Le=null,Ge=null,Te=null,$e=null,Ke=null,nn=null;return{setTest:function(Bt){Z||(Bt?be(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Bt){De!==Bt&&!Z&&(r.stencilMask(Bt),De=Bt)},setFunc:function(Bt,ri,oi){(_e!==Bt||Le!==ri||Ge!==oi)&&(r.stencilFunc(Bt,ri,oi),_e=Bt,Le=ri,Ge=oi)},setOp:function(Bt,ri,oi){(Te!==Bt||$e!==ri||Ke!==oi)&&(r.stencilOp(Bt,ri,oi),Te=Bt,$e=ri,Ke=oi)},setLocked:function(Bt){Z=Bt},setClear:function(Bt){nn!==Bt&&(r.clearStencil(Bt),nn=Bt)},reset:function(){Z=!1,De=null,_e=null,Le=null,Ge=null,Te=null,$e=null,Ke=null,nn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let y={},x={},g={},M=new WeakMap,T=[],C=null,E=!1,v=null,I=null,H=null,D=null,z=null,P=null,N=null,b=new Rt(0,0,0),O=0,W=!1,X=null,k=null,oe=null,pe=null,ee=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,q=0;const ue=r.getParameter(r.VERSION);ue.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ue)[1]),U=q>=1):ue.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),U=q>=2);let xe=null,L={};const J=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Re=new ln().fromArray(J),Oe=new ln().fromArray(Ee);function ne(Z,De,_e,Le){const Ge=new Uint8Array(4),Te=r.createTexture();r.bindTexture(Z,Te),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<_e;$e++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(De+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Te}const Me={};Me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),be(r.DEPTH_TEST),h.setFunc(ro),$t(!1),ve(k_),be(r.CULL_FACE),St(Na);function be(Z){y[Z]!==!0&&(r.enable(Z),y[Z]=!0)}function ke(Z){y[Z]!==!1&&(r.disable(Z),y[Z]=!1)}function lt(Z,De){return g[Z]!==De?(r.bindFramebuffer(Z,De),g[Z]=De,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function tt(Z,De){let _e=T,Le=!1;if(Z){_e=M.get(De),_e===void 0&&(_e=[],M.set(De,_e));const Ge=Z.textures;if(_e.length!==Ge.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,$e=Ge.length;Te<$e;Te++)_e[Te]=r.COLOR_ATTACHMENT0+Te;_e.length=Ge.length,Le=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Le=!0);Le&&r.drawBuffers(_e)}function Yt(Z){return C!==Z?(r.useProgram(Z),C=Z,!0):!1}const ht={[Zs]:r.FUNC_ADD,[_M]:r.FUNC_SUBTRACT,[vM]:r.FUNC_REVERSE_SUBTRACT};ht[yM]=r.MIN,ht[xM]=r.MAX;const xt={[SM]:r.ZERO,[MM]:r.ONE,[EM]:r.SRC_COLOR,[Ed]:r.SRC_ALPHA,[wM]:r.SRC_ALPHA_SATURATE,[RM]:r.DST_COLOR,[TM]:r.DST_ALPHA,[bM]:r.ONE_MINUS_SRC_COLOR,[bd]:r.ONE_MINUS_SRC_ALPHA,[CM]:r.ONE_MINUS_DST_COLOR,[AM]:r.ONE_MINUS_DST_ALPHA,[DM]:r.CONSTANT_COLOR,[UM]:r.ONE_MINUS_CONSTANT_COLOR,[NM]:r.CONSTANT_ALPHA,[LM]:r.ONE_MINUS_CONSTANT_ALPHA};function St(Z,De,_e,Le,Ge,Te,$e,Ke,nn,Bt){if(Z===Na){E===!0&&(ke(r.BLEND),E=!1);return}if(E===!1&&(be(r.BLEND),E=!0),Z!==gM){if(Z!==v||Bt!==W){if((I!==Zs||z!==Zs)&&(r.blendEquation(r.FUNC_ADD),I=Zs,z=Zs),Bt)switch(Z){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case X_:r.blendFunc(r.ONE,r.ONE);break;case W_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Y_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",Z);break}else switch(Z){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case X_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case W_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Z);break}H=null,D=null,P=null,N=null,b.set(0,0,0),O=0,v=Z,W=Bt}return}Ge=Ge||De,Te=Te||_e,$e=$e||Le,(De!==I||Ge!==z)&&(r.blendEquationSeparate(ht[De],ht[Ge]),I=De,z=Ge),(_e!==H||Le!==D||Te!==P||$e!==N)&&(r.blendFuncSeparate(xt[_e],xt[Le],xt[Te],xt[$e]),H=_e,D=Le,P=Te,N=$e),(Ke.equals(b)===!1||nn!==O)&&(r.blendColor(Ke.r,Ke.g,Ke.b,nn),b.copy(Ke),O=nn),v=Z,W=!1}function vt(Z,De){Z.side===$i?ke(r.CULL_FACE):be(r.CULL_FACE);let _e=Z.side===si;De&&(_e=!_e),$t(_e),Z.blending===no&&Z.transparent===!1?St(Na):St(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Le=Z.stencilWrite;p.setTest(Le),Le&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),we(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(Z){X!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),X=Z)}function ve(Z){Z!==dM?(be(r.CULL_FACE),Z!==k&&(Z===k_?r.cullFace(r.BACK):Z===pM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),k=Z}function Ce(Z){Z!==oe&&(U&&r.lineWidth(Z),oe=Z)}function we(Z,De,_e){Z?(be(r.POLYGON_OFFSET_FILL),(pe!==De||ee!==_e)&&(pe=De,ee=_e,h.getReversed()&&(De=-De),r.polygonOffset(De,_e))):ke(r.POLYGON_OFFSET_FILL)}function Ve(Z){Z?be(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function Ye(Z){Z===void 0&&(Z=r.TEXTURE0+F-1),xe!==Z&&(r.activeTexture(Z),xe=Z)}function G(Z,De,_e){_e===void 0&&(xe===null?_e=r.TEXTURE0+F-1:_e=xe);let Le=L[_e];Le===void 0&&(Le={type:void 0,texture:void 0},L[_e]=Le),(Le.type!==Z||Le.texture!==De)&&(xe!==_e&&(r.activeTexture(_e),xe=_e),r.bindTexture(Z,De||Me[Z]),Le.type=Z,Le.texture=De)}function qe(){const Z=L[xe];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ie(){try{r.compressedTexImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function S(){try{r.texSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function K(){try{r.texSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function te(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ae(){try{r.texStorage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ue(){try{r.texStorage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function de(){try{r.texImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function me(){try{r.texImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ne(Z){return x[Z]!==void 0?x[Z]:r.getParameter(Z)}function Xe(Z,De){x[Z]!==De&&(r.pixelStorei(Z,De),x[Z]=De)}function Be(Z){Re.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function Pe(Z){Oe.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Oe.copy(Z))}function it(Z,De){let _e=d.get(De);_e===void 0&&(_e=new WeakMap,d.set(De,_e));let Le=_e.get(Z);Le===void 0&&(Le=r.getUniformBlockIndex(De,Z.name),_e.set(Z,Le))}function at(Z,De){const Le=d.get(De).get(Z);m.get(De)!==Le&&(r.uniformBlockBinding(De,Le,Z.__bindingPointIndex),m.set(De,Le))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},x={},xe=null,L={},g={},M=new WeakMap,T=[],C=null,E=!1,v=null,I=null,H=null,D=null,z=null,P=null,N=null,b=new Rt(0,0,0),O=0,W=!1,X=null,k=null,oe=null,pe=null,ee=null,Re.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:be,disable:ke,bindFramebuffer:lt,drawBuffers:tt,useProgram:Yt,setBlending:St,setMaterial:vt,setFlipSided:$t,setCullFace:ve,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Ve,activeTexture:Ye,bindTexture:G,unbindTexture:qe,compressedTexImage2D:Ie,compressedTexImage3D:w,texImage2D:de,texImage3D:me,pixelStorei:Xe,getParameter:Ne,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:S,texSubImage3D:K,compressedTexSubImage2D:te,compressedTexSubImage3D:he,scissor:Be,viewport:Pe,reset:ft}}function I2(r,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,y=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,S){return T?new OffscreenCanvas(w,S):bu("canvas")}function E(w,S,K){let te=1;const he=Ie(w);if((he.width>K||he.height>K)&&(te=K/Math.max(he.width,he.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Ae=Math.floor(te*he.width),Ue=Math.floor(te*he.height);g===void 0&&(g=C(Ae,Ue));const de=S?C(Ae,Ue):g;return de.width=Ae,de.height=Ue,de.getContext("2d").drawImage(w,0,0,Ae,Ue),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Ue+")."),de}else return"data"in w&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),w;return w}function v(w){return w.generateMipmaps}function I(w){r.generateMipmap(w)}function H(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(w,S,K,te,he,Ae=!1){if(w!==null){if(r[w]!==void 0)return r[w];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ue;te&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=S;if(S===r.RED&&(K===r.FLOAT&&(de=r.R32F),K===r.HALF_FLOAT&&(de=r.R16F),K===r.UNSIGNED_BYTE&&(de=r.R8),K===r.UNSIGNED_SHORT&&Ue&&(de=Ue.R16_EXT),K===r.SHORT&&Ue&&(de=Ue.R16_SNORM_EXT)),S===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.R8UI),K===r.UNSIGNED_SHORT&&(de=r.R16UI),K===r.UNSIGNED_INT&&(de=r.R32UI),K===r.BYTE&&(de=r.R8I),K===r.SHORT&&(de=r.R16I),K===r.INT&&(de=r.R32I)),S===r.RG&&(K===r.FLOAT&&(de=r.RG32F),K===r.HALF_FLOAT&&(de=r.RG16F),K===r.UNSIGNED_BYTE&&(de=r.RG8),K===r.UNSIGNED_SHORT&&Ue&&(de=Ue.RG16_EXT),K===r.SHORT&&Ue&&(de=Ue.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RG8UI),K===r.UNSIGNED_SHORT&&(de=r.RG16UI),K===r.UNSIGNED_INT&&(de=r.RG32UI),K===r.BYTE&&(de=r.RG8I),K===r.SHORT&&(de=r.RG16I),K===r.INT&&(de=r.RG32I)),S===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGB8UI),K===r.UNSIGNED_SHORT&&(de=r.RGB16UI),K===r.UNSIGNED_INT&&(de=r.RGB32UI),K===r.BYTE&&(de=r.RGB8I),K===r.SHORT&&(de=r.RGB16I),K===r.INT&&(de=r.RGB32I)),S===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),K===r.UNSIGNED_INT&&(de=r.RGBA32UI),K===r.BYTE&&(de=r.RGBA8I),K===r.SHORT&&(de=r.RGBA16I),K===r.INT&&(de=r.RGBA32I)),S===r.RGB&&(K===r.UNSIGNED_SHORT&&Ue&&(de=Ue.RGB16_EXT),K===r.SHORT&&Ue&&(de=Ue.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),S===r.RGBA){const me=Ae?Eu:Nt.getTransfer(he);K===r.FLOAT&&(de=r.RGBA32F),K===r.HALF_FLOAT&&(de=r.RGBA16F),K===r.UNSIGNED_BYTE&&(de=me===Xt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Ue&&(de=Ue.RGBA16_EXT),K===r.SHORT&&Ue&&(de=Ue.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function z(w,S){let K;return w?S===null||S===aa||S===El?K=r.DEPTH24_STENCIL8:S===ea?K=r.DEPTH32F_STENCIL8:S===Ml&&(K=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===aa||S===El?K=r.DEPTH_COMPONENT24:S===ea?K=r.DEPTH_COMPONENT32F:S===Ml&&(K=r.DEPTH_COMPONENT16),K}function P(w,S){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Hn&&w.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function N(w){const S=w.target;S.removeEventListener("dispose",N),O(S),S.isVideoTexture&&y.delete(S),S.isHTMLTexture&&x.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),X(S)}function O(w){const S=s.get(w);if(S.__webglInit===void 0)return;const K=w.source,te=M.get(K);if(te){const he=te[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&W(w),Object.keys(te).length===0&&M.delete(K)}s.remove(w)}function W(w){const S=s.get(w);r.deleteTexture(S.__webglTexture);const K=w.source,te=M.get(K);delete te[S.__cacheKey],h.memory.textures--}function X(w){const S=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let he=0;he<S.__webglFramebuffer[te].length;he++)r.deleteFramebuffer(S.__webglFramebuffer[te][he]);else r.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)r.deleteFramebuffer(S.__webglFramebuffer[te]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=w.textures;for(let te=0,he=K.length;te<he;te++){const Ae=s.get(K[te]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),h.memory.textures--),s.remove(K[te])}s.remove(w)}let k=0;function oe(){k=0}function pe(){return k}function ee(w){k=w}function F(){const w=k;return w>=l.maxTextures&&ut("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),k+=1,w}function U(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function q(w,S){const K=s.get(w);if(w.isVideoTexture&&G(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const te=w.image;if(te===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(K,w,S);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+S)}function ue(w,S){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){ke(K,w,S);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+S)}function xe(w,S){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){ke(K,w,S);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+S)}function L(w,S){const K=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&K.__version!==w.version){lt(K,w,S);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+S)}const J={[Nd]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[Ld]:r.MIRRORED_REPEAT},Ee={[Hn]:r.NEAREST,[zM]:r.NEAREST_MIPMAP_NEAREST,[Vc]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[Js]:r.LINEAR_MIPMAP_LINEAR},Re={[FM]:r.NEVER,[XM]:r.ALWAYS,[HM]:r.LESS,[Lp]:r.LEQUAL,[GM]:r.EQUAL,[Op]:r.GEQUAL,[VM]:r.GREATER,[kM]:r.NOTEQUAL};function Oe(w,S){if(S.type===ea&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Xh||S.magFilter===Vc||S.magFilter===Js||S.minFilter===Un||S.minFilter===Xh||S.minFilter===Vc||S.minFilter===Js)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,J[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,J[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,J[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Ee[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==Vc&&S.minFilter!==Js||S.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",N));const te=S.source;let he=M.get(te);he===void 0&&(he={},M.set(te,he));const Ae=U(S);if(Ae!==w.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,K=!0),he[Ae].usedTimes++;const Ue=he[w.__cacheKey];Ue!==void 0&&(he[w.__cacheKey].usedTimes--,Ue.usedTimes===0&&W(S)),w.__cacheKey=Ae,w.__webglTexture=he[Ae].texture}return K}function Me(w,S,K){return Math.floor(Math.floor(w/K)/S)}function be(w,S,K,te){const Ae=w.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,K,te,S.data);else{Ae.sort((Xe,Be)=>Xe.start-Be.start);let Ue=0;for(let Xe=1;Xe<Ae.length;Xe++){const Be=Ae[Ue],Pe=Ae[Xe],it=Be.start+Be.count,at=Me(Pe.start,S.width,4),ft=Me(Be.start,S.width,4);Pe.start<=it+1&&at===ft&&Me(Pe.start+Pe.count-1,S.width,4)===at?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++Ue,Ae[Ue]=Pe)}Ae.length=Ue+1;const de=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Ne=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Xe=0,Be=Ae.length;Xe<Be;Xe++){const Pe=Ae[Xe],it=Math.floor(Pe.start/4),at=Math.ceil(Pe.count/4),ft=it%S.width,Z=Math.floor(it/S.width),De=at,_e=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ft,Z,De,_e,K,te,S.data)}w.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,de),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function ke(w,S,K){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);const he=ne(w,S),Ae=S.source;i.bindTexture(te,w.__webglTexture,r.TEXTURE0+K);const Ue=s.get(Ae);if(Ae.version!==Ue.__version||he===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const _e=Nt.getPrimaries(Nt.workingColorSpace),Le=S.colorSpace===_s?null:Nt.getPrimaries(S.colorSpace),Ge=S.colorSpace===_s||_e===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let me=E(S.image,!1,l.maxTextureSize);me=qe(S,me);const Ne=c.convert(S.format,S.colorSpace),Xe=c.convert(S.type);let Be=D(S.internalFormat,Ne,Xe,S.normalized,S.colorSpace,S.isVideoTexture);Oe(te,S);let Pe;const it=S.mipmaps,at=S.isVideoTexture!==!0,ft=Ue.__version===void 0||he===!0,Z=Ae.dataReady,De=P(S,me);if(S.isDepthTexture)Be=z(S.format===js,S.type),ft&&(at?i.texStorage2D(r.TEXTURE_2D,1,Be,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Be,me.width,me.height,0,Ne,Xe,null));else if(S.isDataTexture)if(it.length>0){at&&ft&&i.texStorage2D(r.TEXTURE_2D,De,Be,it[0].width,it[0].height);for(let _e=0,Le=it.length;_e<Le;_e++)Pe=it[_e],at?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,Ne,Xe,Pe.data);S.generateMipmaps=!1}else at?(ft&&i.texStorage2D(r.TEXTURE_2D,De,Be,me.width,me.height),Z&&be(S,me,Ne,Xe)):i.texImage2D(r.TEXTURE_2D,0,Be,me.width,me.height,0,Ne,Xe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Be,it[0].width,it[0].height,me.depth);for(let _e=0,Le=it.length;_e<Le;_e++)if(Pe=it[_e],S.format!==Vi)if(Ne!==null)if(at){if(Z)if(S.layerUpdates.size>0){const Ge=Ev(Pe.width,Pe.height,S.format,S.type);for(const Te of S.layerUpdates){const $e=Pe.data.subarray(Te*Ge/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,Te,Pe.width,Pe.height,1,Ne,$e)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,me.depth,Ne,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Be,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,me.depth,Ne,Xe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_e,Be,Pe.width,Pe.height,me.depth,0,Ne,Xe,Pe.data)}else{at&&ft&&i.texStorage2D(r.TEXTURE_2D,De,Be,it[0].width,it[0].height);for(let _e=0,Le=it.length;_e<Le;_e++)Pe=it[_e],S.format!==Vi?Ne!==null?at?Z&&i.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,Pe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ne,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,Ne,Xe,Pe.data)}else if(S.isDataArrayTexture)if(at){if(ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Be,me.width,me.height,me.depth),Z)if(S.layerUpdates.size>0){const _e=Ev(me.width,me.height,S.format,S.type);for(const Le of S.layerUpdates){const Ge=me.data.subarray(Le*_e/me.data.BYTES_PER_ELEMENT,(Le+1)*_e/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,me.width,me.height,1,Ne,Xe,Ge)}S.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,Xe,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Ne,Xe,me.data);else if(S.isData3DTexture)at?(ft&&i.texStorage3D(r.TEXTURE_3D,De,Be,me.width,me.height,me.depth),Z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,Xe,me.data)):i.texImage3D(r.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Ne,Xe,me.data);else if(S.isFramebufferTexture){if(ft)if(at)i.texStorage2D(r.TEXTURE_2D,De,Be,me.width,me.height);else{let _e=me.width,Le=me.height;for(let Ge=0;Ge<De;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,Be,_e,Le,0,Ne,Xe,null),_e>>=1,Le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),me.parentNode!==_e){_e.appendChild(me),x.add(S),_e.onpaint=Le=>{const Ge=Le.changedElements;for(const Te of x)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const Ge=r.RGBA,Te=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Te,$e,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&ft){const _e=Ie(it[0]);i.texStorage2D(r.TEXTURE_2D,De,Be,_e.width,_e.height)}for(let _e=0,Le=it.length;_e<Le;_e++)Pe=it[_e],at?Z&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ne,Xe,Pe):i.texImage2D(r.TEXTURE_2D,_e,Be,Ne,Xe,Pe);S.generateMipmaps=!1}else if(at){if(ft){const _e=Ie(me);i.texStorage2D(r.TEXTURE_2D,De,Be,_e.width,_e.height)}Z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Xe,me)}else i.texImage2D(r.TEXTURE_2D,0,Be,Ne,Xe,me);v(S)&&I(te),Ue.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function lt(w,S,K){if(S.image.length!==6)return;const te=ne(w,S),he=S.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+K);const Ae=s.get(he);if(he.version!==Ae.__version||te===!0){i.activeTexture(r.TEXTURE0+K);const Ue=Nt.getPrimaries(Nt.workingColorSpace),de=S.colorSpace===_s?null:Nt.getPrimaries(S.colorSpace),me=S.colorSpace===_s||Ue===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,Be=[];for(let Te=0;Te<6;Te++)!Ne&&!Xe?Be[Te]=E(S.image[Te],!0,l.maxCubemapSize):Be[Te]=Xe?S.image[Te].image:S.image[Te],Be[Te]=qe(S,Be[Te]);const Pe=Be[0],it=c.convert(S.format,S.colorSpace),at=c.convert(S.type),ft=D(S.internalFormat,it,at,S.normalized,S.colorSpace),Z=S.isVideoTexture!==!0,De=Ae.__version===void 0||te===!0,_e=he.dataReady;let Le=P(S,Pe);Oe(r.TEXTURE_CUBE_MAP,S);let Ge;if(Ne){Z&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ft,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){Ge=Be[Te].mipmaps;for(let $e=0;$e<Ge.length;$e++){const Ke=Ge[$e];S.format!==Vi?it!==null?Z?_e&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,0,0,Ke.width,Ke.height,it,Ke.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,ft,Ke.width,Ke.height,0,Ke.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,0,0,Ke.width,Ke.height,it,at,Ke.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e,ft,Ke.width,Ke.height,0,it,at,Ke.data)}}}else{if(Ge=S.mipmaps,Z&&De){Ge.length>0&&Le++;const Te=Ie(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ft,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Xe){Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be[Te].width,Be[Te].height,it,at,Be[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ft,Be[Te].width,Be[Te].height,0,it,at,Be[Te].data);for(let $e=0;$e<Ge.length;$e++){const nn=Ge[$e].image[Te].image;Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,0,0,nn.width,nn.height,it,at,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,ft,nn.width,nn.height,0,it,at,nn.data)}}else{Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,it,at,Be[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ft,it,at,Be[Te]);for(let $e=0;$e<Ge.length;$e++){const Ke=Ge[$e];Z?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,0,0,it,at,Ke.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,$e+1,ft,it,at,Ke.image[Te])}}}v(S)&&I(r.TEXTURE_CUBE_MAP),Ae.__version=he.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function tt(w,S,K,te,he,Ae){const Ue=c.convert(K.format,K.colorSpace),de=c.convert(K.type),me=D(K.internalFormat,Ue,de,K.normalized,K.colorSpace),Ne=s.get(S),Xe=s.get(K);if(Xe.__renderTarget=S,!Ne.__hasExternalTextures){const Be=Math.max(1,S.width>>Ae),Pe=Math.max(1,S.height>>Ae);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,me,Be,Pe,S.depth,0,Ue,de,null):i.texImage2D(he,Ae,me,Be,Pe,0,Ue,de,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,he,Xe.__webglTexture,0,Ve(S)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,he,Xe.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(w,S,K){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const te=S.depthTexture,he=te&&te.isDepthTexture?te.type:null,Ae=z(S.stencilBuffer,he),Ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ye(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(S),Ae,S.width,S.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(S),Ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,w)}else{const te=S.textures;for(let he=0;he<te.length;he++){const Ae=te[he],Ue=c.convert(Ae.format,Ae.colorSpace),de=c.convert(Ae.type),me=D(Ae.internalFormat,Ue,de,Ae.normalized,Ae.colorSpace);Ye(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(S),me,S.width,S.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(S),me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(w,S,K){const te=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(S.depthTexture);if(he.__renderTarget=S,(!he.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te){if(he.__webglInit===void 0&&(he.__webglInit=!0,S.depthTexture.addEventListener("dispose",N)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,S.depthTexture);const Ne=c.convert(S.depthTexture.format),Xe=c.convert(S.depthTexture.type);let Be;S.depthTexture.format===za?Be=r.DEPTH_COMPONENT24:S.depthTexture.format===js&&(Be=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,S.width,S.height,0,Ne,Xe,null)}}else q(S.depthTexture,0);const Ae=he.__webglTexture,Ue=Ve(S),de=te?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,me=S.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===za)Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,de,Ae,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,me,de,Ae,0);else if(S.depthTexture.format===js)Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,de,Ae,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,me,de,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(w){const S=s.get(w),K=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",he)};te.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=te}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(K)for(let te=0;te<6;te++)ht(S.__webglFramebuffer[te],w,te);else{const te=w.texture.mipmaps;te&&te.length>0?ht(S.__webglFramebuffer[0],w,0):ht(S.__webglFramebuffer,w,0)}else if(K){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=r.createRenderbuffer(),Yt(S.__webglDepthbuffer[te],w,!1);else{const he=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}else{const te=w.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Yt(S.__webglDepthbuffer,w,!1);else{const he=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function St(w,S,K){const te=s.get(w);S!==void 0&&tt(te.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&xt(w)}function vt(w){const S=w.texture,K=s.get(w),te=s.get(S);w.addEventListener("dispose",b);const he=w.textures,Ae=w.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,h.memory.textures++),Ae){K.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[de]=[];for(let me=0;me<S.mipmaps.length;me++)K.__webglFramebuffer[de][me]=r.createFramebuffer()}else K.__webglFramebuffer[de]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)K.__webglFramebuffer[de]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let de=0,me=he.length;de<me;de++){const Ne=s.get(he[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),h.memory.textures++)}if(w.samples>0&&Ye(w)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const me=he[de];K.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[de]);const Ne=c.convert(me.format,me.colorSpace),Xe=c.convert(me.type),Be=D(me.internalFormat,Ne,Xe,me.normalized,me.colorSpace,w.isXRRenderTarget===!0),Pe=Ve(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Be,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,K.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)tt(K.__webglFramebuffer[de][me],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else tt(K.__webglFramebuffer[de],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(S)&&I(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let de=0,me=he.length;de<me;de++){const Ne=he[de],Xe=s.get(Ne);let Be=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Be=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,Xe.__webglTexture),Oe(Be,Ne),tt(K.__webglFramebuffer,w,Ne,r.COLOR_ATTACHMENT0+de,Be,0),v(Ne)&&I(Be)}i.unbindTexture()}else{let de=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(de,te.__webglTexture),Oe(de,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)tt(K.__webglFramebuffer[me],w,S,r.COLOR_ATTACHMENT0,de,me);else tt(K.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,de,0);v(S)&&I(de),i.unbindTexture()}w.depthBuffer&&xt(w)}function $t(w){const S=w.textures;for(let K=0,te=S.length;K<te;K++){const he=S[K];if(v(he)){const Ae=H(w),Ue=s.get(he).__webglTexture;i.bindTexture(Ae,Ue),I(Ae),i.unbindTexture()}}}const ve=[],Ce=[];function we(w){if(w.samples>0){if(Ye(w)===!1){const S=w.textures,K=w.width,te=w.height;let he=r.COLOR_BUFFER_BIT;const Ae=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(w),de=S.length>1;if(de)for(let Ne=0;Ne<S.length;Ne++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const me=w.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const Xe=s.get(S[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,K,te,0,0,K,te,he,r.NEAREST),m===!0&&(ve.length=0,Ce.length=0,ve.push(r.COLOR_ATTACHMENT0+Ne),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ve.push(Ae),Ce.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ne=0;Ne<S.length;Ne++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const Xe=s.get(S[Ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Xe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ve(w){return Math.min(l.maxSamples,w.samples)}function Ye(w){const S=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(w){const S=h.render.frame;y.get(w)!==S&&(y.set(w,S),w.update())}function qe(w,S){const K=w.colorSpace,te=w.format,he=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==Mu&&K!==_s&&(Nt.getTransfer(K)===Xt?(te!==Vi||he!==yi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",K)),S}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=oe,this.getTextureUnits=pe,this.setTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=ue,this.setTexture3D=xe,this.setTextureCube=L,this.rebindTextures=St,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function B2(r,e){function i(s,l=_s){let c;const h=Nt.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===Cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ly)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===cy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ry)return r.BYTE;if(s===oy)return r.SHORT;if(s===Ml)return r.UNSIGNED_SHORT;if(s===Rp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Pa)return r.HALF_FLOAT;if(s===uy)return r.ALPHA;if(s===fy)return r.RGB;if(s===Vi)return r.RGBA;if(s===za)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===hy)return r.RED;if(s===Dp)return r.RED_INTEGER;if(s===tr)return r.RG;if(s===Up)return r.RG_INTEGER;if(s===Np)return r.RGBA_INTEGER;if(s===mu||s===gu||s===_u||s===vu)if(h===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Od||s===Pd||s===zd||s===Id)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===xu||s===kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Bd||s===Fd)return h===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Hd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Gd)return c.COMPRESSED_R11_EAC;if(s===Vd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===xu)return c.COMPRESSED_RG11_EAC;if(s===kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Xd||s===Wd||s===Yd||s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===jd||s===$d||s===ep||s===tp||s===np||s===ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Xd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$d)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ep)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tp)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===np)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ip)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ap||s===sp||s===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===ap)return h===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===op||s===lp||s===Su||s===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===op)return c.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===El?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const F2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H2=`
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

}`;class G2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Sy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new sa({vertexShader:F2,fragmentShader:H2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new $s(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V2 extends Es{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,y=null,x=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",E=new G2,v={},I=i.getContextAttributes();let H=null,D=null;const z=[],P=[],N=new ot;let b=null;const O=new Ui;O.viewport=new ln;const W=new Ui;W.viewport=new ln;const X=[O,W],k=new QE;let oe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Me=z[ne];return Me===void 0&&(Me=new Qh,z[ne]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ne){let Me=z[ne];return Me===void 0&&(Me=new Qh,z[ne]=Me),Me.getGripSpace()},this.getHand=function(ne){let Me=z[ne];return Me===void 0&&(Me=new Qh,z[ne]=Me),Me.getHandSpace()};function ee(ne){const Me=P.indexOf(ne.inputSource);if(Me===-1)return;const be=z[Me];be!==void 0&&(be.update(ne.inputSource,ne.frame,d||h),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",U);for(let ne=0;ne<z.length;ne++){const Me=P[ne];Me!==null&&(P[ne]=null,z[ne].disconnect(Me))}oe=null,pe=null,E.reset();for(const ne in v)delete v[ne];e.setRenderTarget(H),M=null,g=null,x=null,l=null,D=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",F),l.addEventListener("inputsourceschange",U),I.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ke=null,lt=null;I.depth&&(lt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=I.stencil?js:za,ke=I.stencil?El:aa);const tt={colorFormat:i.RGBA8,depthFormat:lt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(tt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new ia(g.textureWidth,g.textureHeight,{format:Vi,type:yi,depthTexture:new lo(g.textureWidth,g.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ia(M.framebufferWidth,M.framebufferHeight,{format:Vi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function U(ne){for(let Me=0;Me<ne.removed.length;Me++){const be=ne.removed[Me],ke=P.indexOf(be);ke>=0&&(P[ke]=null,z[ke].disconnect(be))}for(let Me=0;Me<ne.added.length;Me++){const be=ne.added[Me];let ke=P.indexOf(be);if(ke===-1){for(let tt=0;tt<z.length;tt++)if(tt>=P.length){P.push(be),ke=tt;break}else if(P[tt]===null){P[tt]=be,ke=tt;break}if(ke===-1)break}const lt=z[ke];lt&&lt.connect(be)}}const q=new j,ue=new j;function xe(ne,Me,be){q.setFromMatrixPosition(Me.matrixWorld),ue.setFromMatrixPosition(be.matrixWorld);const ke=q.distanceTo(ue),lt=Me.projectionMatrix.elements,tt=be.projectionMatrix.elements,Yt=lt[14]/(lt[10]-1),ht=lt[14]/(lt[10]+1),xt=(lt[9]+1)/lt[5],St=(lt[9]-1)/lt[5],vt=(lt[8]-1)/lt[0],$t=(tt[8]+1)/tt[0],ve=Yt*vt,Ce=Yt*$t,we=ke/(-vt+$t),Ve=we*-vt;if(Me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ve),ne.translateZ(we),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),lt[10]===-1)ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ye=Yt+we,G=ht+we,qe=ve-Ve,Ie=Ce+(ke-Ve),w=xt*ht/G*Ye,S=St*ht/G*Ye;ne.projectionMatrix.makePerspective(qe,Ie,w,S,Ye,G),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,Me){Me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Me=ne.near,be=ne.far;E.texture!==null&&(E.depthNear>0&&(Me=E.depthNear),E.depthFar>0&&(be=E.depthFar)),k.near=W.near=O.near=Me,k.far=W.far=O.far=be,(oe!==k.near||pe!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),oe=k.near,pe=k.far),k.layers.mask=ne.layers.mask|6,O.layers.mask=k.layers.mask&-5,W.layers.mask=k.layers.mask&-3;const ke=ne.parent,lt=k.cameras;L(k,ke);for(let tt=0;tt<lt.length;tt++)L(lt[tt],ke);lt.length===2?xe(k,O,W):k.projectionMatrix.copy(O.projectionMatrix),J(ne,k,ke)};function J(ne,Me,be){be===null?ne.matrix.copy(Me.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Tl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(k)},this.getCameraTexture=function(ne){return v[ne]};let Ee=null;function Re(ne,Me){if(y=Me.getViewerPose(d||h),T=Me,y!==null){const be=y.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let ke=!1;be.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let ht=0;ht<be.length;ht++){const xt=be[ht];let St=null;if(M!==null)St=M.getViewport(xt);else{const $t=x.getViewSubImage(g,xt);St=$t.viewport,ht===0&&(e.setRenderTargetTextures(D,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(D))}let vt=X[ht];vt===void 0&&(vt=new Ui,vt.layers.enable(ht),vt.viewport=new ln,X[ht]=vt),vt.matrix.fromArray(xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(St.x,St.y,St.width,St.height),ht===0&&(k.matrix.copy(vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(vt)}const lt=l.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ht=x.getDepthInformation(be[0]);ht&&ht.isValid&&ht.texture&&E.init(ht,l.renderState)}if(lt&&lt.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let ht=0;ht<be.length;ht++){const xt=be[ht].camera;if(xt){let St=v[xt];St||(St=new Sy,v[xt]=St);const vt=x.getCameraImage(xt);St.sourceTexture=vt}}}}for(let be=0;be<z.length;be++){const ke=P[be],lt=z[be];ke!==null&&lt!==void 0&&lt.update(ke,Me,d||h)}Ee&&Ee(ne,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Oe=new Ty;Oe.setAnimationLoop(Re),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}}const k2=new on,Ny=new pt;Ny.set(-1,0,0,0,1,0,0,0,1);function X2(r,e){function i(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function s(E,v){v.color.getRGB(E.fogColor.value,My(r)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function l(E,v,I,H,D){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(E,v):v.isMeshLambertMaterial?(c(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(E,v),x(E,v)):v.isMeshPhongMaterial?(c(E,v),y(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(E,v),g(E,v),v.isMeshPhysicalMaterial&&M(E,v,D)):v.isMeshMatcapMaterial?(c(E,v),T(E,v)):v.isMeshDepthMaterial?c(E,v):v.isMeshDistanceMaterial?(c(E,v),C(E,v)):v.isMeshNormalMaterial?c(E,v):v.isLineBasicMaterial?(h(E,v),v.isLineDashedMaterial&&p(E,v)):v.isPointsMaterial?m(E,v,I,H):v.isSpriteMaterial?d(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,i(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===si&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,i(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===si&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,i(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,i(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const I=e.get(v),H=I.envMap,D=I.envMapRotation;H&&(E.envMap.value=H,E.envMapRotation.value.setFromMatrix4(k2.makeRotationFromEuler(D)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(Ny),E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,E.aoMapTransform))}function h(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform))}function p(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function m(E,v,I,H){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*I,E.scale.value=H*.5,v.map&&(E.map.value=v.map,i(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function d(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function y(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function x(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function g(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function M(E,v,I){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===si&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=I.texture,E.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function C(E,v){const I=e.get(v).light;E.referencePosition.value.setFromMatrixPosition(I.matrixWorld),E.nearDistance.value=I.shadow.camera.near,E.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function W2(r,e,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,z){const P=z.program;s.uniformBlockBinding(D,P)}function d(D,z){let P=l[D.id];P===void 0&&(E(D),P=y(D),l[D.id]=P,D.addEventListener("dispose",I));const N=z.program;s.updateUBOMapping(D,N);const b=e.render.frame;c[D.id]!==b&&(g(D),c[D.id]=b)}function y(D){const z=x();D.__bindingPointIndex=z;const P=r.createBuffer(),N=D.__size,b=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,N,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,P),P}function x(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const z=l[D.id],P=D.uniforms,N=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let b=0,O=P.length;b<O;b++){const W=P[b];if(Array.isArray(W))for(let X=0,k=W.length;X<k;X++)M(W[X],b,X,N);else M(W,b,0,N)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,z,P,N){if(C(D,z,P,N)===!0){const b=D.__offset,O=D.value;if(Array.isArray(O)){let W=0;for(let X=0;X<O.length;X++){const k=O[X],oe=v(k);T(k,D.__data,W),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(O,D.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,D.__data)}}function T(D,z,P){typeof D=="number"||typeof D=="boolean"?z[0]=D:D.isMatrix3?(z[0]=D.elements[0],z[1]=D.elements[1],z[2]=D.elements[2],z[3]=0,z[4]=D.elements[3],z[5]=D.elements[4],z[6]=D.elements[5],z[7]=0,z[8]=D.elements[6],z[9]=D.elements[7],z[10]=D.elements[8],z[11]=0):ArrayBuffer.isView(D)?z.set(new D.constructor(D.buffer,D.byteOffset,z.length)):D.toArray(z,P)}function C(D,z,P,N){const b=D.value,O=z+"_"+P;if(N[O]===void 0)return typeof b=="number"||typeof b=="boolean"?N[O]=b:ArrayBuffer.isView(b)?N[O]=b.slice():N[O]=b.clone(),!0;{const W=N[O];if(typeof b=="number"||typeof b=="boolean"){if(W!==b)return N[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(W.equals(b)===!1)return W.copy(b),!0}}return!1}function E(D){const z=D.uniforms;let P=0;const N=16;for(let O=0,W=z.length;O<W;O++){const X=Array.isArray(z[O])?z[O]:[z[O]];for(let k=0,oe=X.length;k<oe;k++){const pe=X[k],ee=Array.isArray(pe.value)?pe.value:[pe.value];for(let F=0,U=ee.length;F<U;F++){const q=ee[F],ue=v(q),xe=P%N,L=xe%ue.boundary,J=xe+L;P+=L,J!==0&&N-J<ue.storage&&(P+=N-J),pe.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=ue.storage}}}const b=P%N;return b>0&&(P+=N-b),D.__size=P,D.__cache={},this}function v(D){const z={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(z.boundary=4,z.storage=4):D.isVector2?(z.boundary=8,z.storage=8):D.isVector3||D.isColor?(z.boundary=16,z.storage=12):D.isVector4?(z.boundary=16,z.storage=16):D.isMatrix3?(z.boundary=48,z.storage=48):D.isMatrix4?(z.boundary=64,z.storage=64):D.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(z.boundary=16,z.storage=D.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",D),z}function I(D){const z=D.target;z.removeEventListener("dispose",I);const P=h.indexOf(z.__bindingPointIndex);h.splice(P,1),r.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function H(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const Y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function q2(){return Ji===null&&(Ji=new NE(Y2,16,16,tr,Pa),Ji.name="DFG_LUT",Ji.minFilter=Un,Ji.magFilter=Un,Ji.wrapS=Ua,Ji.wrapT=Ua,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class Z2{constructor(e={}){const{canvas:i=YM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=yi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=M,E=new Set([Np,Up,Dp]),v=new Set([yi,aa,Ml,El,Cp,wp]),I=new Uint32Array(4),H=new Int32Array(4),D=new j;let z=null,P=null;const N=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let X=!1,k=null,oe=null,pe=null,ee=null;this._outputColorSpace=ii;let F=0,U=0,q=null,ue=-1,xe=null;const L=new ln,J=new ln;let Ee=null;const Re=new Rt(0);let Oe=0,ne=i.width,Me=i.height,be=1,ke=null,lt=null;const tt=new ln(0,0,ne,Me),Yt=new ln(0,0,ne,Me);let ht=!1;const xt=new Gp;let St=!1,vt=!1;const $t=new on,ve=new j,Ce=new ln,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ye(){return q===null?be:1}let G=s;function qe(A,Q){return i.getContext(A,Q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",ri,!1),G===null){const Q="webgl2";if(G=qe(Q,A),G===null)throw qe(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let Ie,w,S,K,te,he,Ae,Ue,de,me,Ne,Xe,Be,Pe,it,at,ft,Z,De,_e,Le,Ge,Te;function $e(){Ie=new qT(G),Ie.init(),Le=new B2(G,Ie),w=new FT(G,Ie,e,Le),S=new z2(G,Ie),w.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),oe=G.createFramebuffer(),pe=G.createFramebuffer(),ee=G.createFramebuffer(),K=new QT(G),te=new M2,he=new I2(G,Ie,S,te,w,Le,K),Ae=new YT(W),Ue=new eb(G),Ge=new IT(G,Ue),de=new ZT(G,Ue,K,Ge),me=new jT(G,de,Ue,Ge,K),Z=new JT(G,w,he),it=new HT(te),Ne=new S2(W,Ae,Ie,w,Ge,it),Xe=new X2(W,te),Be=new b2,Pe=new D2(Ie),ft=new zT(W,Ae,S,me,T,m),at=new P2(W,me,w),Te=new W2(G,K,w,S),De=new BT(G,Ie,K),_e=new KT(G,Ie,K),K.programs=Ne.programs,W.capabilities=w,W.extensions=Ie,W.properties=te,W.renderLists=Be,W.shadowMap=at,W.state=S,W.info=K}$e(),C!==yi&&(O=new eA(C,i.width,i.height,p,l,c));const Ke=new V2(W,G);this.xr=Ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(ne,Me,!1))},this.getSize=function(A){return A.set(ne,Me)},this.setSize=function(A,Q,le=!0){if(Ke.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,Me=Q,i.width=Math.floor(A*be),i.height=Math.floor(Q*be),le===!0&&(i.style.width=A+"px",i.style.height=Q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(ne*be,Me*be).floor()},this.setDrawingBufferSize=function(A,Q,le){ne=A,Me=Q,be=le,i.width=Math.floor(A*le),i.height=Math.floor(Q*le),this.setViewport(0,0,A,Q)},this.setEffects=function(A){if(C===yi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Q=0;Q<A.length;Q++)if(A[Q].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,Q,le,se){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,Q,le,se),S.viewport(L.copy(tt).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,Q,le,se){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,Q,le,se),S.scissor(J.copy(Yt).multiplyScalar(be).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){S.setScissorTest(ht=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,le=!0){let se=0;if(A){let re=!1;if(q!==null){const Fe=q.texture.format;re=E.has(Fe)}if(re){const Fe=q.texture.type,Ze=v.has(Fe),ze=ft.getClearColor(),Je=ft.getClearAlpha(),Qe=ze.r,st=ze.g,mt=ze.b;Ze?(I[0]=Qe,I[1]=st,I[2]=mt,I[3]=Je,G.clearBufferuiv(G.COLOR,0,I)):(H[0]=Qe,H[1]=st,H[2]=mt,H[3]=Je,G.clearBufferiv(G.COLOR,0,H))}else se|=G.COLOR_BUFFER_BIT}Q&&(se|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),ft.dispose(),Be.dispose(),Pe.dispose(),te.dispose(),Ae.dispose(),me.dispose(),Ge.dispose(),Te.dispose(),Ne.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",mn),Ke.removeEventListener("sessionend",On),Kn.stop()};function nn(A){A.preventDefault(),Tu("WebGLRenderer: Context Lost."),X=!0}function Bt(){Tu("WebGLRenderer: Context Restored."),X=!1;const A=K.autoReset,Q=at.enabled,le=at.autoUpdate,se=at.needsUpdate,re=at.type;$e(),K.autoReset=A,at.enabled=Q,at.autoUpdate=le,at.needsUpdate=se,at.type=re}function ri(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){const Q=A.target;Q.removeEventListener("dispose",oi),po(Q)}function po(A){mo(A),te.remove(A)}function mo(A){const Q=te.get(A).programs;Q!==void 0&&(Q.forEach(function(le){Ne.releaseProgram(le)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,le,se,re,Fe){Q===null&&(Q=we);const Ze=re.isMesh&&re.matrixWorld.determinantAffine()<0,ze=Fa(A,Q,le,se,re);S.setMaterial(se,Ze);let Je=le.index,Qe=1;if(se.wireframe===!0){if(Je=de.getWireframeAttribute(le),Je===void 0)return;Qe=2}const st=le.drawRange,mt=le.attributes.position;let nt=st.start*Qe,Lt=(st.start+st.count)*Qe;Fe!==null&&(nt=Math.max(nt,Fe.start*Qe),Lt=Math.min(Lt,(Fe.start+Fe.count)*Qe)),Je!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Je.count)):mt!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,mt.count));const an=Lt-nt;if(an<0||an===1/0)return;Ge.setup(re,se,ze,le,Je);let Jt,Ft=De;if(Je!==null&&(Jt=Ue.get(Je),Ft=_e,Ft.setIndex(Jt)),re.isMesh)se.wireframe===!0?(S.setLineWidth(se.wireframeLinewidth*Ye()),Ft.setMode(G.LINES)):Ft.setMode(G.TRIANGLES);else if(re.isLine){let Ht=se.linewidth;Ht===void 0&&(Ht=1),S.setLineWidth(Ht*Ye()),re.isLineSegments?Ft.setMode(G.LINES):re.isLineLoop?Ft.setMode(G.LINE_LOOP):Ft.setMode(G.LINE_STRIP)}else re.isPoints?Ft.setMode(G.POINTS):re.isSprite&&Ft.setMode(G.TRIANGLES);if(re.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ht=re._multiDrawStarts,We=re._multiDrawCounts,Gn=re._multiDrawCount,Et=Je?Ue.get(Je).bytesPerElement:1,bn=te.get(se).currentProgram.getUniforms();for(let li=0;li<Gn;li++)bn.setValue(G,"_gl_DrawID",li),Ft.render(Ht[li]/Et,We[li])}else if(re.isInstancedMesh)Ft.renderInstances(nt,an,re.count);else if(le.isInstancedBufferGeometry){const Ht=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,We=Math.min(le.instanceCount,Ht);Ft.renderInstances(nt,an,We)}else Ft.render(nt,an)};function go(A,Q,le){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Ba(A,Q,le),A.side=ys,A.needsUpdate=!0,Ba(A,Q,le),A.side=$i):Ba(A,Q,le)}this.compile=function(A,Q,le=null){le===null&&(le=A),P=Pe.get(le),P.init(Q),b.push(P),le.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),A!==le&&A.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),P.setupLights();const se=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let Ze=0;Ze<Fe.length;Ze++){const ze=Fe[Ze];go(ze,le,re),se.add(ze)}else go(Fe,le,re),se.add(Fe)}),P=b.pop(),se},this.compileAsync=function(A,Q,le=null){const se=this.compile(A,Q,le);return new Promise(re=>{function Fe(){if(se.forEach(function(Ze){te.get(Ze).currentProgram.isReady()&&se.delete(Ze)}),se.size===0){re(A);return}setTimeout(Fe,10)}Ie.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ir=null;function Xi(A){ir&&ir(A)}function mn(){Kn.stop()}function On(){Kn.start()}const Kn=new Ty;Kn.setAnimationLoop(Xi),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(A){ir=A,Ke.setAnimationLoop(A),A===null?Kn.stop():Kn.start()},Ke.addEventListener("sessionstart",mn),Ke.addEventListener("sessionend",On),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;k!==null&&k.renderStart(A,Q);const le=Ke.enabled===!0&&Ke.isPresenting===!0,se=O!==null&&(q===null||le)&&O.begin(W,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(Q),Q=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,Q,q),P=Pe.get(A,b.length),P.init(Q),P.state.textureUnits=he.getTextureUnits(),b.push(P),$t.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),xt.setFromProjectionMatrix($t,ta,Q.reversedDepth),vt=this.localClippingEnabled,St=it.init(this.clippingPlanes,vt),z=Be.get(A,N.length),z.init(),N.push(z),Ke.enabled===!0&&Ke.isPresenting===!0){const Ze=W.xr.getDepthSensingMesh();Ze!==null&&bs(Ze,Q,-1/0,W.sortObjects)}bs(A,Q,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(ke,lt,Q.reversedDepth),Ve=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Ve&&ft.addToRenderList(z,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&it.beginShadows();const re=P.state.shadowsArray;if(at.render(re,A,Q),St===!0&&it.endShadows(),(se&&O.hasRenderPass())===!1){const Ze=z.opaque,ze=z.transmissive;if(P.setupLights(),Q.isArrayCamera){const Je=Q.cameras;if(ze.length>0)for(let Qe=0,st=Je.length;Qe<st;Qe++){const mt=Je[Qe];Dl(Ze,ze,A,mt)}Ve&&ft.render(A);for(let Qe=0,st=Je.length;Qe<st;Qe++){const mt=Je[Qe];wl(z,A,mt,mt.viewport)}}else ze.length>0&&Dl(Ze,ze,A,Q),Ve&&ft.render(A),wl(z,A,Q)}q!==null&&U===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),se&&O.end(W),A.isScene===!0&&A.onAfterRender(W,A,Q),Ge.resetDefaultState(),ue=-1,xe=null,b.pop(),b.length>0?(P=b[b.length-1],he.setTextureUnits(P.state.textureUnits),St===!0&&it.setGlobalState(W.clippingPlanes,P.state.camera)):P=null,N.pop(),N.length>0?z=N[N.length-1]:z=null,k!==null&&k.renderEnd()};function bs(A,Q,le,se){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){se&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const Ze=me.update(A),ze=A.material;ze.visible&&z.push(A,Ze,ze,le,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ze=me.update(A),ze=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Ce.copy(Ze.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(ze)){const Je=Ze.groups;for(let Qe=0,st=Je.length;Qe<st;Qe++){const mt=Je[Qe],nt=ze[mt.materialIndex];nt&&nt.visible&&z.push(A,Ze,nt,le,Ce.z,mt)}}else ze.visible&&z.push(A,Ze,ze,le,Ce.z,null)}}const Fe=A.children;for(let Ze=0,ze=Fe.length;Ze<ze;Ze++)bs(Fe[Ze],Q,le,se)}function wl(A,Q,le,se){const{opaque:re,transmissive:Fe,transparent:Ze}=A;P.setupLightsView(le),St===!0&&it.setGlobalState(W.clippingPlanes,le),se&&S.viewport(L.copy(se)),re.length>0&&Ts(re,Q,le),Fe.length>0&&Ts(Fe,Q,le),Ze.length>0&&Ts(Ze,Q,le),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Dl(A,Q,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[se.id]===void 0){const nt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[se.id]=new ia(1,1,{generateMipmaps:!0,type:nt?Pa:yi,minFilter:Js,samples:Math.max(4,w.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=P.state.transmissionRenderTarget[se.id],Ze=se.viewport||L;Fe.setSize(Ze.z*W.transmissionResolutionScale,Ze.w*W.transmissionResolutionScale);const ze=W.getRenderTarget(),Je=W.getActiveCubeFace(),Qe=W.getActiveMipmapLevel();W.setRenderTarget(Fe),W.getClearColor(Re),Oe=W.getClearAlpha(),Oe<1&&W.setClearColor(16777215,.5),W.clear(),Ve&&ft.render(le);const st=W.toneMapping;W.toneMapping=na;const mt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),P.setupLightsView(se),St===!0&&it.setGlobalState(W.clippingPlanes,se),Ts(A,le,se),he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Lt=0,an=Q.length;Lt<an;Lt++){const Jt=Q[Lt],{object:Ft,geometry:Ht,material:We,group:Gn}=Jt;if(We.side===$i&&Ft.layers.test(se.layers)){const Et=We.side;We.side=si,We.needsUpdate=!0,Ia(Ft,le,se,Ht,We,Gn),We.side=Et,We.needsUpdate=!0,nt=!0}}nt===!0&&(he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe))}W.setRenderTarget(ze,Je,Qe),W.setClearColor(Re,Oe),mt!==void 0&&(se.viewport=mt),W.toneMapping=st}function Ts(A,Q,le){const se=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Fe=A.length;re<Fe;re++){const Ze=A[re],{object:ze,geometry:Je,group:Qe}=Ze;let st=Ze.material;st.allowOverride===!0&&se!==null&&(st=se),ze.layers.test(le.layers)&&Ia(ze,Q,le,Je,st,Qe)}}function Ia(A,Q,le,se,re,Fe){A.onBeforeRender(W,Q,le,se,re,Fe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(W,Q,le,se,A,Fe),re.transparent===!0&&re.side===$i&&re.forceSinglePass===!1?(re.side=si,re.needsUpdate=!0,W.renderBufferDirect(le,Q,se,re,A,Fe),re.side=ys,re.needsUpdate=!0,W.renderBufferDirect(le,Q,se,re,A,Fe),re.side=$i):W.renderBufferDirect(le,Q,se,re,A,Fe),A.onAfterRender(W,Q,le,se,re,Fe)}function Ba(A,Q,le){Q.isScene!==!0&&(Q=we);const se=te.get(A),re=P.state.lights,Fe=P.state.shadowsArray,Ze=re.state.version,ze=Ne.getParameters(A,re.state,Fe,Q,le,P.state.lightProbeGridArray),Je=Ne.getProgramCacheKey(ze);let Qe=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Q.environment:null,se.fog=Q.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=Ae.get(A.envMap||se.environment,st),se.envMapRotation=se.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",oi),Qe=new Map,se.programs=Qe);let mt=Qe.get(Je);if(mt!==void 0){if(se.currentProgram===mt&&se.lightsStateVersion===Ze)return oa(A,ze),mt}else ze.uniforms=Ne.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,le,ze),A.onBeforeCompile(ze,W),mt=Ne.acquireProgram(ze,Je),Qe.set(Je,mt),se.uniforms=ze.uniforms;const nt=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=it.uniform),oa(A,ze),se.needsLights=Ul(A),se.lightsStateVersion=Ze,se.needsLights&&(nt.ambientLightColor.value=re.state.ambient,nt.lightProbe.value=re.state.probe,nt.directionalLights.value=re.state.directional,nt.directionalLightShadows.value=re.state.directionalShadow,nt.spotLights.value=re.state.spot,nt.spotLightShadows.value=re.state.spotShadow,nt.rectAreaLights.value=re.state.rectArea,nt.ltc_1.value=re.state.rectAreaLTC1,nt.ltc_2.value=re.state.rectAreaLTC2,nt.pointLights.value=re.state.point,nt.pointLightShadows.value=re.state.pointShadow,nt.hemisphereLights.value=re.state.hemi,nt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,nt.spotLightMatrix.value=re.state.spotLightMatrix,nt.spotLightMap.value=re.state.spotLightMap,nt.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=P.state.lightProbeGridArray.length>0,se.currentProgram=mt,se.uniformsList=null,mt}function ra(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=yu.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function oa(A,Q){const le=te.get(A);le.outputColorSpace=Q.outputColorSpace,le.batching=Q.batching,le.batchingColor=Q.batchingColor,le.instancing=Q.instancing,le.instancingColor=Q.instancingColor,le.instancingMorph=Q.instancingMorph,le.skinning=Q.skinning,le.morphTargets=Q.morphTargets,le.morphNormals=Q.morphNormals,le.morphColors=Q.morphColors,le.morphTargetsCount=Q.morphTargetsCount,le.numClippingPlanes=Q.numClippingPlanes,le.numIntersection=Q.numClipIntersection,le.vertexAlphas=Q.vertexAlphas,le.vertexTangents=Q.vertexTangents,le.toneMapping=Q.toneMapping}function As(A,Q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(Q.matrixWorld);for(let le=0,se=A.length;le<se;le++){const re=A[le];if(re.texture!==null&&re.boundingBox.containsPoint(D))return re}return null}function Fa(A,Q,le,se,re){Q.isScene!==!0&&(Q=we),he.resetTextureUnits();const Fe=Q.fog,Ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Q.environment:null,ze=q===null?W.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nt.workingColorSpace,Je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Qe=Ae.get(se.envMap||Ze,Je),st=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),nt=!!le.morphAttributes.position,Lt=!!le.morphAttributes.normal,an=!!le.morphAttributes.color;let Jt=na;se.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Jt=W.toneMapping);const Ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0,We=te.get(se),Gn=P.state.lights;if(St===!0&&(vt===!0||A!==xe)){const It=A===xe&&se.id===ue;it.setState(se,A,It)}let Et=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Gn.state.version||We.outputColorSpace!==ze||re.isBatchedMesh&&We.batching===!1||!re.isBatchedMesh&&We.batching===!0||re.isBatchedMesh&&We.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&We.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&We.instancing===!1||!re.isInstancedMesh&&We.instancing===!0||re.isSkinnedMesh&&We.skinning===!1||!re.isSkinnedMesh&&We.skinning===!0||re.isInstancedMesh&&We.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&We.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&We.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&We.instancingMorph===!1&&re.morphTexture!==null||We.envMap!==Qe||se.fog===!0&&We.fog!==Fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==it.numPlanes||We.numIntersection!==it.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==mt||We.morphTargets!==nt||We.morphNormals!==Lt||We.morphColors!==an||We.toneMapping!==Jt||We.morphTargetsCount!==Ht||!!We.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,We.__version=se.version);let bn=We.currentProgram;Et===!0&&(bn=Ba(se,Q,re),k&&se.isNodeMaterial&&k.onUpdateProgram(se,bn,We));let li=!1,Li=!1,ci=!1;const Gt=bn.getUniforms(),sn=We.uniforms;if(S.useProgram(bn.program)&&(li=!0,Li=!0,ci=!0),se.id!==ue&&(ue=se.id,Li=!0),We.needsLights){const It=As(P.state.lightProbeGridArray,re);We.lightProbeGrid!==It&&(We.lightProbeGrid=It,Li=!0)}if(li||xe!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(G,"projectionMatrix",A.projectionMatrix),Gt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Wi=Gt.map.cameraPosition;Wi!==void 0&&Wi.setValue(G,ve.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Gt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,Li=!0,ci=!0)}if(We.needsLights&&(Gn.state.directionalShadowMap.length>0&&Gt.setValue(G,"directionalShadowMap",Gn.state.directionalShadowMap,he),Gn.state.spotShadowMap.length>0&&Gt.setValue(G,"spotShadowMap",Gn.state.spotShadowMap,he),Gn.state.pointShadowMap.length>0&&Gt.setValue(G,"pointShadowMap",Gn.state.pointShadowMap,he)),re.isSkinnedMesh){Gt.setOptional(G,re,"bindMatrix"),Gt.setOptional(G,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Gt.setValue(G,"boneTexture",It.boneTexture,he))}re.isBatchedMesh&&(Gt.setOptional(G,re,"batchingTexture"),Gt.setValue(G,"batchingTexture",re._matricesTexture,he),Gt.setOptional(G,re,"batchingIdTexture"),Gt.setValue(G,"batchingIdTexture",re._indirectTexture,he),Gt.setOptional(G,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(G,"batchingColorTexture",re._colorsTexture,he));const Oi=le.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Z.update(re,le,bn),(Li||We.receiveShadow!==re.receiveShadow)&&(We.receiveShadow=re.receiveShadow,Gt.setValue(G,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Q.environment!==null&&(sn.envMapIntensity.value=Q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=q2()),Li){if(Gt.setValue(G,"toneMappingExposure",W.toneMappingExposure),We.needsLights&&gn(sn,ci),Fe&&se.fog===!0&&Xe.refreshFogUniforms(sn,Fe),Xe.refreshMaterialUniforms(sn,se,be,Me,P.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const It=We.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}yu.upload(G,ra(We),sn,he)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(yu.upload(G,ra(We),sn,he),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(G,"center",re.center),Gt.setValue(G,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(G,"normalMatrix",re.normalMatrix),Gt.setValue(G,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const It=se.uniformsGroups;for(let Wi=0,Ha=It.length;Wi<Ha;Wi++){const Rs=It[Wi];Te.update(Rs,bn),Te.bind(Rs,bn)}}return bn}function gn(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function Ul(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Q,le){const se=te.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=Q,te.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const le=te.get(A);le.__webglFramebuffer=Q,le.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(A,Q=0,le=0){q=A,F=Q,U=le;let se=null,re=!1,Fe=!1;if(A){const ze=te.get(A);if(ze.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,ze.__webglFramebuffer),L.copy(A.viewport),J.copy(A.scissor),Ee=A.scissorTest,S.viewport(L),S.scissor(J),S.setScissorTest(Ee),ue=-1;return}else if(ze.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(ze.__hasExternalTextures)he.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(ze.__boundDepthTexture!==st){if(st!==null&&te.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);const Qe=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[Q])?se=Qe[Q][le]:se=Qe[Q],re=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?se=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?se=Qe[le]:se=Qe,L.copy(A.viewport),J.copy(A.scissor),Ee=A.scissorTest}else L.copy(tt).multiplyScalar(be).floor(),J.copy(Yt).multiplyScalar(be).floor(),Ee=ht;if(le!==0&&(se=oe),S.bindFramebuffer(G.FRAMEBUFFER,se)&&S.drawBuffers(A,se),S.viewport(L),S.scissor(J),S.setScissorTest(Ee),re){const ze=te.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ze.__webglTexture,le)}else if(Fe){const ze=Q;for(let Je=0;Je<A.textures.length;Je++){const Qe=te.get(A.textures[Je]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,le,ze)}}else if(A!==null&&le!==0){const ze=te.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,le)}ue=-1},this.readRenderTargetPixels=function(A,Q,le,se,re,Fe,Ze,ze=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je){S.bindFramebuffer(G.FRAMEBUFFER,Je);try{const Qe=A.textures[ze],st=Qe.format,mt=Qe.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),!w.textureFormatReadable(st)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(mt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-se&&le>=0&&le<=A.height-re&&G.readPixels(Q,le,se,re,Le.convert(st),Le.convert(mt),Fe)}finally{const Qe=q!==null?te.get(q).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,Q,le,se,re,Fe,Ze,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je)if(Q>=0&&Q<=A.width-se&&le>=0&&le<=A.height-re){S.bindFramebuffer(G.FRAMEBUFFER,Je);const Qe=A.textures[ze],st=Qe.format,mt=Qe.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),!w.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.bufferData(G.PIXEL_PACK_BUFFER,Fe.byteLength,G.STREAM_READ),G.readPixels(Q,le,se,re,Le.convert(st),Le.convert(mt),0);const Lt=q!==null?te.get(q).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Lt);const an=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await qM(G,an,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Fe),G.deleteBuffer(nt),G.deleteSync(an),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,le=0){const se=Math.pow(2,-le),re=Math.floor(A.image.width*se),Fe=Math.floor(A.image.height*se),Ze=Q!==null?Q.x:0,ze=Q!==null?Q.y:0;he.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Ze,ze,re,Fe),S.unbindTexture()},this.copyTextureToTexture=function(A,Q,le=null,se=null,re=0,Fe=0){let Ze,ze,Je,Qe,st,mt,nt,Lt,an;const Jt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(le!==null)Ze=le.max.x-le.min.x,ze=le.max.y-le.min.y,Je=le.isBox3?le.max.z-le.min.z:1,Qe=le.min.x,st=le.min.y,mt=le.isBox3?le.min.z:0;else{const sn=Math.pow(2,-re);Ze=Math.floor(Jt.width*sn),ze=Math.floor(Jt.height*sn),A.isDataArrayTexture?Je=Jt.depth:A.isData3DTexture?Je=Math.floor(Jt.depth*sn):Je=1,Qe=0,st=0,mt=0}se!==null?(nt=se.x,Lt=se.y,an=se.z):(nt=0,Lt=0,an=0);const Ft=Le.convert(Q.format),Ht=Le.convert(Q.type);let We;Q.isData3DTexture?(he.setTexture3D(Q,0),We=G.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(he.setTexture2DArray(Q,0),We=G.TEXTURE_2D_ARRAY):(he.setTexture2D(Q,0),We=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const Gn=S.getParameter(G.UNPACK_ROW_LENGTH),Et=S.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=S.getParameter(G.UNPACK_SKIP_PIXELS),li=S.getParameter(G.UNPACK_SKIP_ROWS),Li=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,Jt.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Jt.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),S.pixelStorei(G.UNPACK_SKIP_ROWS,st),S.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);const ci=A.isDataArrayTexture||A.isData3DTexture,Gt=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const sn=te.get(A),Oi=te.get(Q),It=te.get(sn.__renderTarget),Wi=te.get(Oi.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Ha=0;Ha<Je;Ha++)ci&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(A).__webglTexture,re,mt+Ha),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(Q).__webglTexture,Fe,an+Ha)),G.blitFramebuffer(Qe,st,Ze,ze,nt,Lt,Ze,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||te.has(A)){const sn=te.get(A),Oi=te.get(Q);S.bindFramebuffer(G.READ_FRAMEBUFFER,pe),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,ee);for(let It=0;It<Je;It++)ci?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,re,mt+It):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,re),Gt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oi.__webglTexture,Fe,an+It):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oi.__webglTexture,Fe),re!==0?G.blitFramebuffer(Qe,st,Ze,ze,nt,Lt,Ze,ze,G.COLOR_BUFFER_BIT,G.NEAREST):Gt?G.copyTexSubImage3D(We,Fe,nt,Lt,an+It,Qe,st,Ze,ze):G.copyTexSubImage2D(We,Fe,nt,Lt,Qe,st,Ze,ze);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(We,Fe,nt,Lt,an,Ze,ze,Je,Ft,Ht,Jt.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(We,Fe,nt,Lt,an,Ze,ze,Je,Ft,Jt.data):G.texSubImage3D(We,Fe,nt,Lt,an,Ze,ze,Je,Ft,Ht,Jt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Fe,nt,Lt,Ze,ze,Ft,Ht,Jt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Fe,nt,Lt,Jt.width,Jt.height,Ft,Jt.data):G.texSubImage2D(G.TEXTURE_2D,Fe,nt,Lt,Ze,ze,Ft,Ht,Jt);S.pixelStorei(G.UNPACK_ROW_LENGTH,Gn),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et),S.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),S.pixelStorei(G.UNPACK_SKIP_ROWS,li),S.pixelStorei(G.UNPACK_SKIP_IMAGES,Li),Fe===0&&Q.generateMipmaps&&G.generateMipmap(We),S.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){F=0,U=0,q=null,S.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const qv={type:"change"},Wp={type:"start"},Ly={type:"end"},du=new Hp,Zv=new gs,K2=Math.cos(70*hp.DEG2RAD),An=new j,ni=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6;class Q2 extends jE{constructor(e,i=null){super(e,i),this.state=Qt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new xs,this._lastTargetPosition=new j,this._quat=new xs().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sv,this._sphericalDelta=new Sv,this._scale=1,this._panOffset=new j,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new j,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j2.bind(this),this._onPointerDown=J2.bind(this),this._onPointerUp=$2.bind(this),this._onContextMenu=rR.bind(this),this._onMouseWheel=nR.bind(this),this._onKeyDown=iR.bind(this),this._onTouchStart=aR.bind(this),this._onTouchMove=sR.bind(this),this._onMouseDown=eR.bind(this),this._onMouseMove=tR.bind(this),this._interceptControlDown=oR.bind(this),this._interceptControlUp=lR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qv),this.update(),this.state=Qt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;An.copy(i).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),i.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=An.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<K2?this.object.lookAt(this.target):(Zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(Zv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(qv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){An.setFromMatrixColumn(i,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,i){this.screenSpacePanning===!0?An.setFromMatrixColumn(i,1):(An.setFromMatrixColumn(i,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;An.copy(l).sub(this.target);let c=An.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ot,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function J2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function j2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function $2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ly),this.state=Qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function eR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Qt.DOLLY;break;case to.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}break;case to.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Wp)}function tR(r){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function nR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(r.preventDefault(),this.dispatchEvent(Wp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ly))}function iR(r){this.enabled!==!1&&this._handleKeyDown(r)}function aR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Qt.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Qt.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Wp)}function sR(r){switch(this._trackPointer(r),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Qt.NONE}}function rR(r){this.enabled!==!1&&r.preventDefault()}function oR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pl=new j;function Di(r,e,i,s,l,c){const h=2*Math.PI*l/4,p=Math.max(c-2*l,0),m=Math.PI/4;pl.copy(e),pl[s]=0,pl.normalize();const d=.5*h/(h+p),y=1-pl.angleTo(r)/m;return Math.sign(pl[i])===1?y*d:p/(h+p)+d+d*(1-y)}class Yp extends Ms{constructor(e=1,i=1,s=1,l=2,c=.1){const h=l*2+1;if(c=Math.min(e/2,i/2,s/2,c),super(1,1,1,h,h,h),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:s,segments:l,radius:c},h===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new j,d=new j,y=new j(e,i,s).divideScalar(2).subScalar(c),x=this.attributes.position.array,g=this.attributes.normal.array,M=this.attributes.uv.array,T=x.length/6,C=new j,E=.5/h;for(let v=0,I=0;v<x.length;v+=3,I+=2)switch(m.fromArray(x,v),d.copy(m),d.x-=Math.sign(d.x)*E,d.y-=Math.sign(d.y)*E,d.z-=Math.sign(d.z)*E,d.normalize(),x[v+0]=y.x*Math.sign(m.x)+d.x*c,x[v+1]=y.y*Math.sign(m.y)+d.y*c,x[v+2]=y.z*Math.sign(m.z)+d.z*c,g[v+0]=d.x,g[v+1]=d.y,g[v+2]=d.z,Math.floor(v/T)){case 0:C.set(1,0,0),M[I+0]=Di(C,d,"z","y",c,s),M[I+1]=1-Di(C,d,"y","z",c,i);break;case 1:C.set(-1,0,0),M[I+0]=1-Di(C,d,"z","y",c,s),M[I+1]=1-Di(C,d,"y","z",c,i);break;case 2:C.set(0,1,0),M[I+0]=1-Di(C,d,"x","z",c,e),M[I+1]=Di(C,d,"z","x",c,s);break;case 3:C.set(0,-1,0),M[I+0]=1-Di(C,d,"x","z",c,e),M[I+1]=1-Di(C,d,"z","x",c,s);break;case 4:C.set(0,0,1),M[I+0]=1-Di(C,d,"x","y",c,e),M[I+1]=1-Di(C,d,"y","x",c,i);break;case 5:C.set(0,0,-1),M[I+0]=Di(C,d,"x","y",c,e),M[I+1]=1-Di(C,d,"y","x",c,i);break}}static fromJSON(e){return new Yp(e.width,e.height,e.depth,e.segments,e.radius)}}const Al="city-tycoon-v1",gp="city-tycoon-manual-v1",Oy=720*60*60*1e3;function Nu(r){return!!((r==null?void 0:r.version)===1&&Array.isArray(r.players)&&r.players.length>=2&&r.players.length<=4&&r.players.every((e,i)=>e.id===i&&typeof e.name=="string"&&Number.isFinite(e.cash)&&e.cash>=0&&Number.isInteger(e.pos)&&e.pos>=0&&e.pos<32&&[0,1].includes(e.jail)&&typeof e.bankrupt=="boolean")&&r.lots&&typeof r.lots=="object"&&!Array.isArray(r.lots)&&Object.entries(r.lots).every(([e,i])=>Number.isInteger(+e)&&+e>0&&+e<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+e)&&i&&Number.isInteger(i.owner)&&i.owner>=0&&i.owner<r.players.length&&Number.isInteger(i.level)&&i.level>=0&&i.level<=5)&&Number.isInteger(r.turn)&&r.turn>=0&&r.turn<r.players.length&&Number.isInteger(r.round)&&r.round>=1&&(r.maxRounds===void 0||r.maxRounds===null||Number.isInteger(r.maxRounds)&&r.maxRounds>=1)&&(r.maxRounds===void 0||r.maxRounds===null||r.round<=r.maxRounds+1)&&["ready","moving","decision","end","finished"].includes(r.stage)&&Array.isArray(r.dice)&&r.dice.length===2&&r.dice.every(e=>Number.isInteger(e)&&e>=1&&e<=6)&&Number.isInteger(r.remaining)&&r.remaining>=0&&r.remaining<=12&&(r.stage!=="moving"||r.remaining>0&&Number.isInteger(r.eventIndex)&&r.eventIndex>=0&&r.eventIndex<6)&&Array.isArray(r.log)&&r.log.every(e=>e&&typeof e.text=="string"&&typeof e.kind=="string")&&typeof r.notice=="string"&&(r.event===null||r.event&&typeof r.event.title=="string"&&Number.isFinite(r.event.amount))&&(r.stage!=="finished"||Number.isInteger(r.winner)&&r.winner>=0&&r.winner<r.players.length)&&(r.bank===void 0||Number.isInteger(r.bank.houses)&&r.bank.houses>=0&&Number.isInteger(r.bank.hotels)&&r.bank.hotels>=0)&&(r.buildAvailable===void 0||typeof r.buildAvailable=="boolean")&&(r.buildUsed===void 0||typeof r.buildUsed=="boolean"))}const _p=(r,e)=>r&&Number.isFinite(r.savedAt)&&r.savedAt<=e&&e-r.savedAt<Oy&&Nu(r.game);function Rl(r=localStorage,e=Date.now()){const i=r.getItem(gp),s=i?JSON.parse(i):[];if(!Array.isArray(s))throw new Error("存檔清單格式損壞。");const l=s.filter(h=>_p(h,e)&&typeof h.id=="string"&&typeof h.name=="string").sort((h,p)=>p.savedAt-h.savedAt).slice(0,10);JSON.stringify(l)!==i&&r.setItem(gp,JSON.stringify(l));const c=r.getItem(Al);if(c){let h;try{h=JSON.parse(c)}catch{}(!h||h.savedAt!==void 0&&!_p(h,e))&&r.removeItem(Al)}return l}function cR(r,e,i=!1,s=localStorage,l=Date.now()){if(!Nu(r))throw new Error("遊戲狀態無法儲存。");const c=Rl(s,l);if(c.length>=10&&!i)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const p=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${r.round}`,savedAt:l,game:structuredClone(r)},...c].slice(0,10);return s.setItem(gp,JSON.stringify(p)),p}function uR(r,e=localStorage,i=Date.now()){const s=Rl(e,i).find(l=>l.id===r);if(!s)throw new Error("存檔已過期或不存在。");return structuredClone(s.game)}function vp(r,e=localStorage,i=Date.now()){e.setItem(Al,JSON.stringify({savedAt:i,game:r}))}function fR(r=localStorage,e=Date.now()){const i=r.getItem(Al);if(!i)return null;const s=JSON.parse(i);return Nu(s)?(vp(s,r,e),s):_p(s,e)?s.game:(r.removeItem(Al),null)}const Fn=["#61ac78","#62a6da","#e7b942","#de809a"],hR=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],dR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],ai=dR.map((r,e)=>{const i={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},s=Math.floor(e/4);return{id:e,name:r,type:i[e]||"property",group:s,color:hR[s],price:1e3+s*300+e%4*100}}),fn=r=>"$"+r.toLocaleString("en-US"),uo=r=>Math.round(r.price*.6),pR=40,Py=r=>r===null?null:Number.isInteger(Number(r))&&Number(r)>=1?Number(r):pR,yp={houses:32,hotels:12},mR=r=>{let e=0,i=0;for(const s of Object.values(r.lots||{}))s.level===5?i++:e+=Math.max(0,Math.min(4,s.level||0));return{houses:Math.max(0,yp.houses-e),hotels:Math.max(0,yp.hotels-i)}},nr=r=>r.bank&&Number.isInteger(r.bank.houses)&&Number.isInteger(r.bank.hotels)?r.bank:mR(r),zy=r=>({...r,maxRounds:Py(r.maxRounds),players:r.players.map((e,i)=>({...e,color:e.color||Fn[i],human:e.human===void 0?i===0:!!e.human})),bank:{...nr(r)},buildAvailable:r.buildAvailable===!0,buildUsed:r.buildUsed===!0}),gR=[["你",Fn[0],!0],["艾米",Fn[1],!1],["小傑",Fn[2],!1],["喵喵",Fn[3],!1]];function xp(r={}){const e=Math.min(4,Math.max(2,Number(r.count)||4));return{version:1,players:gR.slice(0,e).map(([s,l,c],h)=>{var m;const p=((m=r.players)==null?void 0:m[h])||{};return{id:h,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():s,color:p.color||l,human:p.human===void 0?c:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1}}),lots:{},bank:{...yp},turn:0,round:1,maxRounds:Py(r.maxRounds),stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const En=(r,e,i="info")=>{r.notice=e,r.log.unshift({text:e,kind:i}),r.log=r.log.slice(0,40)},Qs=(r,e)=>ai.filter(i=>{var s;return((s=r.lots[i.id])==null?void 0:s.owner)===e}),_R=(r,e,i)=>ai.filter(s=>s.type==="property"&&s.group===e.group).every(s=>{var l;return((l=r.lots[s.id])==null?void 0:l.owner)===i}),Sp=(r,e)=>{let i=r.lots[e.id];return i?Math.round(e.price*.18)*(i.level?[1,3,6,10,15,22][i.level]:_R(r,e,i.owner)?2:1):0},so=(r,e)=>r.players[e].cash+Qs(r,e).reduce((i,s)=>i+s.price+(r.lots[s.id].level||0)*Math.round(s.price*.6),0),Mp=(r,e,i=r.turn)=>{const s=ai[e],l=r.lots[e],c=nr(r);return!s||s.type!=="property"||!l||l.owner!==i||r.turn!==i||r.stage!=="end"||r.selected!==e||!r.buildAvailable||r.buildUsed||l.level>=5||r.players[i].cash<uo(s)?!1:l.level<4?c.houses>0:c.hotels>0};function Iy(r,e){const i=r.bank||nr(r);e.level===5?i.hotels++:i.houses+=Math.max(0,Math.min(4,e.level||0)),r.bank=i}function By(r){const e=r.players.filter(i=>!i.bankrupt);e.length===1&&(r.winner=e[0].id,r.stage="finished",En(r,`${e[0].name}成為城市大亨！`))}function Md(r,e,i,s=null){let l=r.players[e];for(const h of Qs(r,e).sort((p,m)=>p.price-m.price)){if(l.cash>=i)break;const p=Math.floor((h.price+r.lots[h.id].level*Math.round(h.price*.6))*.5);l.cash+=p,Iy(r,r.lots[h.id]),delete r.lots[h.id],En(r,`${l.name}變賣${h.name}，回收 ${fn(p)}。`,"sell")}const c=Math.min(l.cash,i);l.cash-=c,s!==null&&(r.players[s].cash+=c),c<i&&(l.bankrupt=!0,En(r,`${l.name}資金不足，宣告破產。`,"bankrupt"),By(r))}function vR(r,e){const i=r.players[r.turn],s=ai[i.pos];if(r.selected=s.id,r.stage="end",r.buildAvailable=!1,r.buildUsed=!1,s.type==="property"){const l=r.lots[s.id];if(!l)r.stage=i.cash>=s.price?"decision":"end",En(r,`${i.name}抵達${s.name}，${i.cash>=s.price?"可以購買這塊地產。":"現金不足以購買。"}`);else if(l.owner!==i.id){const c=Sp(r,s);En(r,`${i.name}在${s.name}支付 ${fn(c)} 租金給${r.players[l.owner].name}。`,"rent"),Md(r,i.id,c,l.owner)}else{r.buildAvailable=!0;const c=l.level===5?"已有旅館。":l.level===4?nr(r).hotels?"可以升級為旅館。":"銀行旅館已用完。":nr(r).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";En(r,`${i.name}回到自己的${s.name}，${c}`)}}else if(s.type==="tax"){let l=s.id===6?1200:1800;En(r,`${i.name}支付${s.name} ${fn(l)}。`,"tax"),Md(r,i.id,l)}else if(s.type==="gojail")i.pos=8,i.jail=1,En(r,`${i.name}前往監獄，下次回合暫停一次。`,"jail");else if(s.type==="chance"||s.type==="fund"){const l=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800]],[c,h,p]=l[Math.abs(e||0)%l.length];r.event={title:c,body:h,amount:p},En(r,`${i.name}抽到「${c}」：${p>0?"獲得":"支付"} ${fn(Math.abs(p))}。`,"chance"),p>0?i.cash+=p:Md(r,i.id,-p)}else En(r,s.type==="start"?`${i.name}抵達起點。`:s.type==="park"?`${i.name}在城市公園休息，享受片刻悠閒。`:`${i.name}只是探訪監獄，自由通行。`);By(r)}function yR(r,e){var l;if(e.type==="NEW")return xp(e.config);if(e.type==="LOAD")return Nu(e.game)?zy(structuredClone(e.game)):r;const i=structuredClone(r),s=i.players[i.turn];switch(e.type){case"ROLL":if(i.stage!=="ready"||s.bankrupt)return r;if(s.jail){s.jail--,i.stage="end",En(i,`${s.name}在監獄休息一回合，下回合恢復行動。`);break}i.dice=e.dice,i.remaining=e.dice[0]+e.dice[1],i.event=null,i.stage="moving",i.eventIndex=e.eventIndex,En(i,`${s.name}擲出 ${e.dice[0]} + ${e.dice[1]}，前進 ${i.remaining} 格。`,"dice");break;case"STEP":if(i.stage!=="moving")return r;s.pos=(s.pos+1)%32,s.pos===0&&(s.cash+=2e3,En(i,`${s.name}通過起點，領取 $2,000。`,"salary")),i.remaining--,i.remaining===0&&vR(i,i.eventIndex);break;case"BUY":{if(i.stage!=="decision")return r;const c=ai[s.pos];if(i.lots[c.id]||s.cash<c.price)return r;s.cash-=c.price,i.lots[c.id]={owner:s.id,level:0},i.stage="end",En(i,`${s.name}購買了${c.name}，支付 ${fn(c.price)}。`,"buy");break}case"SKIP":if(i.stage!=="decision")return r;i.stage="end",En(i,`${s.name}暫不購買${ai[s.pos].name}。`);break;case"BUILD":{if(!Mp(i,e.id))return r;const c=ai[e.id],h=i.lots[e.id],p=uo(c);i.bank=i.bank||nr(i),s.cash-=p,h.level<4?(i.bank.houses--,h.level++,En(i,`${s.name}在${c.name}加蓋第 ${h.level} 間房屋，支付 ${fn(p)}。`,"build")):(i.bank.houses+=4,i.bank.hotels--,h.level=5,En(i,`${s.name}將${c.name}的 4 間房屋升級為旅館，支付 ${fn(p)}。`,"build")),i.buildAvailable=!1,i.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(i.stage)||((l=i.lots[e.id])==null?void 0:l.owner)!==s.id)return r;const c=ai[e.id],h=i.lots[e.id],p=Math.floor((c.price+h.level*Math.round(c.price*.6))*.5);Iy(i,h),s.cash+=p,delete i.lots[e.id],i.buildAvailable=!1,En(i,`${s.name}變賣${c.name}，回收 ${fn(p)}。`,"sell");break}case"NEXT":if(i.stage!=="end")return r;{let c=i.turn;do c=(c+1)%i.players.length,c===0&&i.round++;while(i.players[c].bankrupt);i.turn=c,i.event=null,i.stage="ready",i.selected=null,i.buildAvailable=!1,i.buildUsed=!1,i.maxRounds!==null&&i.round>i.maxRounds?(i.winner=i.players.filter(h=>!h.bankrupt).sort((h,p)=>so(i,p.id)-so(i,h.id))[0].id,i.stage="finished",En(i,`${i.maxRounds} 回合結束！${i.players[i.winner].name}以最高總資產獲勝。`)):En(i,`輪到${i.players[c].name}，準備擲骰子。`);break}default:return r}return i}function xR(){try{const r=fR();return r?zy(r):xp()}catch{return xp()}}function pu(r){return r<=8?[-8+r*2,8]:r<=16?[8,8-(r-8)*2]:r<=24?[8-(r-16)*2,-8]:[-8,-8+(r-24)*2]}const SR=At.forwardRef(function({game:e,onSelect:i,onError:s},l){const c=At.useRef(),h=At.useRef(),p=At.useRef(e),m=At.useRef(i);return p.current=e,m.current=i,At.useImperativeHandle(l,()=>({reset(){var d;(d=h.current)==null||d.reset()},zoom(d){const y=h.current;y&&(y.camera.position.sub(y.controls.target).multiplyScalar(d).clampLength(13,80).add(y.controls.target),y.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const d=h.current;d&&(d.camera.position.set(0,29,.01),d.controls.update())}}),[]),At.useEffect(()=>{let d=!1,y=()=>{};return(async()=>{var $t;try{await Promise.race([(($t=document.fonts)==null?void 0:$t.ready)||Promise.resolve(),new Promise(ve=>setTimeout(ve,2e3))])}catch{}if(d)return;const g='"Noto Sans TC", "Microsoft JhengHei", sans-serif',M=c.current;let T;try{T=new Z2({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{s==null||s("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=_l,T.outputColorSpace=ii,T.toneMapping=Ap,T.toneMappingExposure=.9,M.appendChild(T.domElement),T.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const C=new bE;C.background=new Rt("#eaf0e5"),C.fog=new Bp("#eaf0e5",48,90);const E=new Ui(39,1,.1,120),v=new Q2(E,T.domElement);v.enableDamping=!0,v.dampingFactor=.07,v.minDistance=13,v.maxDistance=80,v.maxPolarAngle=Math.PI*.485,v.minPolarAngle=.01,v.target.set(0,0,0),v.autoRotateSpeed=.65,v.enablePan=!0;const I=()=>{E.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/E.aspect)),v.target.set(0,0,0),v.autoRotate=!1,v.update()};I(),h.current={camera:E,controls:v,reset:I},C.add(new WE("#fff9e9","#86967e",2.4));const H=new ZE("#fff5df",3.2);H.position.set(-12,25,8),H.castShadow=!0,H.shadow.mapSize.set(2048,2048),Object.assign(H.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),H.shadow.normalBias=.04,H.shadow.bias=-2e-4,H.shadow.radius=4,C.add(H);const D=new Map,z=ve=>(D.has(ve)||D.set(ve,new pv({color:ve,roughness:.82})),D.get(ve)),P=new Map,N=(ve,Ce,we,Ve,Ye,G=0,qe=0,Ie=0,w=0)=>{const S=[Ce,we,Ve,w].join(",");P.has(S)||P.set(S,w?new Yp(Ce,we,Ve,2,w):new Ms(Ce,we,Ve));const K=new Mn(P.get(S),z(Ye));return K.position.set(G,qe,Ie),K.castShadow=!0,K.receiveShadow=!0,ve.add(K),K},b=new kp(1,14,10),O=(ve,Ce,we,Ve,Ye,G,qe=G,Ie=G)=>{const w=new Mn(b,z(Ce));return w.position.set(we,Ve,Ye),w.scale.set(G,qe,Ie),w.castShadow=!0,w.receiveShadow=!0,ve.add(w),w},W=(ve,Ce,we,Ve,Ye,G,qe,Ie,w=24)=>{const S=new Mn(new wu(Ce,we,Ve,w),z(Ye));return S.position.set(G,qe,Ie),S.castShadow=!0,S.receiveShadow=!0,ve.add(S),S},X=new Mn(new $s(200,200),z("#eaf0e5"));X.rotation.x=-Math.PI/2,X.position.y=-.67,X.receiveShadow=!0,C.add(X),W(C,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),W(C,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),N(C,18.55,.65,18.55,"#405d50",0,-.03,0,.2),N(C,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),N(C,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const k=[];function oe(ve,Ce=512,we=512){const Ve=document.createElement("canvas");Ve.width=Ce,Ve.height=we;const Ye=Ve.getContext("2d");ve(Ye,Ce,we);const G=new zE(Ve);return G.colorSpace=ii,G.minFilter=Un,G.magFilter=Un,G.anisotropy=T.capabilities.getMaxAnisotropy(),k.push(G),G}const pe={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},ee=[],F=[],U=[],q=new Map;function ue(ve,Ce){const we=`${ve}:${Ce}`;if(!q.has(we)){const Ve=oe((Ye,G,qe)=>{Ye.clearRect(0,0,G,qe),Ye.fillStyle=Ce,Ye.beginPath(),Ye.roundRect(8,8,G-16,qe-16,24),Ye.fill(),Ye.strokeStyle="#fffaf0",Ye.lineWidth=8,Ye.stroke(),Ye.fillStyle="#fffaf0",Ye.beginPath(),Ye.arc(G/2,qe/2,43,0,Math.PI*2),Ye.fill(),Ye.fillStyle="#294237",Ye.textAlign="center",Ye.textBaseline="middle",Ye.font="bold 72px Arial",Ye.fillText(String(ve+1),G/2,qe/2+3)},192,144);q.set(we,new vy({map:Ve,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return q.get(we)}for(const ve of ai){const[Ce,we]=pu(ve.id),Ve=new Da;Ve.position.set(Ce,.44,we),C.add(Ve);const Ye=N(Ve,1.94,.14,1.94,"#fffaf0",0,0,0,.035);Ye.userData.tile=ve.id,ee.push(Ye),F[ve.id]=Ye;const G=oe((w,S,K)=>{w.fillStyle="#fcf9f0",w.fillRect(0,0,S,K),ve.type==="property"&&(w.fillStyle=ve.color,w.fillRect(0,0,S,82)),w.fillStyle="#294237",w.textAlign="center",w.font=`bold 76px ${g}`,w.fillText(ve.name,S/2,ve.type==="property"?180:140),ve.type==="property"?(w.font="60px Arial",w.fillText(fn(ve.price),S/2,290),w.fillStyle="#8c998e",w.font="26px sans-serif",w.fillText("CITY PROPERTY",S/2,410)):(w.font="bold 135px Arial",w.fillStyle=ve.type==="chance"?"#ba9270":"#648473",w.fillText(pe[ve.type],S/2,320),w.fillStyle="#728375",w.font=`30px ${g}`,w.fillText(ve.type==="start"?"+ $2,000":ve.type==="tax"?"城市稅收":ve.type==="park"?"歇一會兒":ve.type==="chance"?"好運降臨":ve.type==="fund"?"城市生活":"JUST VISITING",S/2,420))}),qe=new Mn(new $s(1.89,1.89),new xl({map:G,toneMapped:!1}));qe.rotation.x=-Math.PI/2,qe.rotation.z=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,qe.position.y=.076,Ve.add(qe);const Ie=new Da;Ie.position.set(Ce,.58,we),Ie.rotation.y=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,C.add(Ie),U[ve.id]=Ie}for(const ve of[-4.4,4.4]){N(C,.8,.025,13,"#d3d2bb",ve,.525,0),N(C,1.15,.018,13,"#f6f1df",ve,.513,0);for(let Ce=-6;Ce<=6;Ce+=.75)N(C,.035,.008,.29,"#faf6e8",ve,.543,Ce)}for(const ve of[-3.2,3.2]){N(C,13,.025,.8,"#d3d2bb",0,.525,ve),N(C,13,.018,1.15,"#f6f1df",0,.513,ve);for(let Ce=-6;Ce<=6;Ce+=.75)N(C,.29,.008,.035,"#faf6e8",Ce,.543,ve)}function xe(ve,Ce,we=1){const Ve=new Da;Ve.position.set(ve,.52,Ce),Ve.scale.setScalar(we),C.add(Ve),W(Ve,.045,.075,.55,"#94785c",0,.28,0,7),O(Ve,"#8db578",0,.83,0,.29,.44,.29),O(Ve,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function L(ve,Ce,we,Ve,Ye,G,qe=!1){const Ie=new Da;Ie.position.set(ve,.53,Ce),C.add(Ie),N(Ie,we+.18,.12,Ve+.18,"#ede9d5",0,.06,0,.04),N(Ie,we,Ye,Ve,G,0,Ye/2+.1,0,.035),N(Ie,we+.1,.1,Ve+.1,"#fff4df",0,Ye+.12,0,.02);for(let w=.45;w<Ye-.1;w+=.42){for(let S=-we/2+.22;S<we/2-.08;S+=.32)N(Ie,.17,.23,.018,"#6d9097",S,w,Ve/2+.01),N(Ie,.17,.23,.018,"#6d9097",S,w,-Ve/2-.01);for(let S=-Ve/2+.22;S<Ve/2-.08;S+=.32)N(Ie,.018,.23,.17,"#6d9097",we/2+.01,w,S);N(Ie,we+.025,.045,Ve+.025,"#ede9d8",0,w+.17,0)}if(N(Ie,.24,.36,.024,"#496d68",0,.28,Ve/2+.02),qe){const w=new Mn(new Sl(we*.81,.55,4),z("#c98468"));w.rotation.y=Math.PI/4,w.scale.z=Ve/we,w.position.y=Ye+.42,w.castShadow=!0,Ie.add(w)}else N(Ie,we*.7,.08,Ve*.7,"#a5b7ae",0,Ye+.21,0),N(Ie,.23,.2,.25,"#e9e4d2",we*.18,Ye+.34,0)}L(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),L(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),L(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),L(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),L(5.6,-5,1.1,1.5,2.3,"#aac5bc"),L(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),L(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),L(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),L(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),L(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),L(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[ve,Ce]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])xe(ve,Ce,1.05);for(let ve=0;ve<24;ve++){const Ce=ve*Math.PI*2/24;ve%3!==0&&xe(Math.cos(Ce)*12.5,Math.sin(Ce)*12.5,.85+ve%3*.12)}N(C,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const J=oe((ve,Ce,we)=>{ve.clearRect(0,0,Ce,we),ve.textAlign="center",ve.fillStyle="#3d6850",ve.font="900 152px Arial",ve.fillText("CITY",Ce/2,148),ve.fillText("TYCOON",Ce/2,265),ve.font=`25px ${g}`,ve.fillStyle="#6d8468",ve.fillText("每一步，都是新可能。",Ce/2,338)},1024,420),Ee=new Mn(new $s(6.2,2.54),new pv({map:J,transparent:!0,depthWrite:!1}));Ee.rotation.x=-Math.PI/2,Ee.position.set(0,.58,0),C.add(Ee),W(C,.75,.82,.12,"#ede7cf",0,.59,4.3),W(C,.62,.62,.05,"#91c8ce",0,.675,4.3),W(C,.18,.28,.5,"#dfebdf",0,.95,4.3),O(C,"#9fcfd2",0,1.3,4.3,.14),W(C,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Re=[];for(let ve=0;ve<4;ve++){const Ce=new Da;C.add(Ce),W(Ce,.26,.3,.12,Fn[ve],0,.08,0),O(Ce,Fn[ve],0,.53,0,.23,.32,.18),O(Ce,"#f1d5b0",0,1,0,.225),O(Ce,Fn[ve],0,1.12,-.015,.24,.14,.235),N(Ce,.44,.05,.15,Fn[ve],0,1.1,.16,.025);for(const Ye of[-.09,.09])O(Ce,"#273e34",Ye,1.015,.198,.025),N(Ce,.13,.2,.19,"#3c5349",Ye,.22,.025,.035),O(Ce,"#f1d5b0",Ye*2.8,.51,0,.075,.15,.075);N(Ce,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),Ce.scale.setScalar(.95);const[we,Ve]=pu(0);Ce.position.set(we+(ve%2-.5)*.62,.59,Ve+(Math.floor(ve/2)-.5)*.62),Ce.traverse(Ye=>{Ye.material===z(Fn[ve])&&(Ye.userData.playerTint=!0)}),Re.push(Ce)}const Oe=new Mn(new Vp(.42,.5,40),new xl({color:"#f4c65b",side:$i}));Oe.rotation.x=-Math.PI/2,C.add(Oe);const ne=new Mn(new Ms(1.98,.045,1.98),new xl({color:"#edc768",transparent:!0,opacity:.6}));C.add(ne),ne.visible=!1;let Me="",be,ke=0,lt=performance.now();const tt=()=>{const ve=M.clientWidth,Ce=M.clientHeight;T.setSize(ve,Ce),E.aspect=ve/Ce,E.updateProjectionMatrix(),I()},Yt=new ResizeObserver(tt);Yt.observe(M),tt();let ht;const xt=ve=>{ht=[ve.clientX,ve.clientY]},St=ve=>{if(!ht||Math.hypot(ve.clientX-ht[0],ve.clientY-ht[1])>6)return;const Ce=M.getBoundingClientRect(),we=new JE;we.setFromCamera(new ot((ve.clientX-Ce.left)/Ce.width*2-1,-(ve.clientY-Ce.top)/Ce.height*2+1),E);const Ve=we.intersectObjects(ee)[0];Ve&&m.current(Ve.object.userData.tile)};M.addEventListener("pointerdown",xt),M.addEventListener("pointerup",St);function vt(){var Ye;be=requestAnimationFrame(vt);const ve=performance.now(),Ce=Math.min((ve-lt)/1e3,.05);lt=ve,ke+=Ce;const we=p.current;for(let G=0;G<Re.length;G++)Re[G].visible=!!we.players[G]&&!we.players[G].bankrupt;for(let G=0;G<we.players.length;G++){const qe=we.players[G],Ie=Re[G],[w,S]=pu(qe.pos);Ie.traverse(Ae=>{Ae.userData.playerTint&&(Ae.material=z(qe.color||Fn[G]))});const K=w+(G%2-.5)*.62,te=S+(Math.floor(G/2)-.5)*.62;Math.hypot(K-Ie.position.x,te-Ie.position.z)>.04?(Ie.rotation.y=Math.atan2(K-Ie.position.x,te-Ie.position.z),Ie.position.x=hp.damp(Ie.position.x,K,13,Ce),Ie.position.z=hp.damp(Ie.position.z,te,13,Ce),Ie.position.y=.59+Math.abs(Math.sin(ke*17))*.18):Ie.position.y=.59,Ie.visible=!qe.bankrupt}if(Oe.position.copy(Re[we.turn].position),Oe.position.y=.595,Oe.scale.setScalar(1+Math.sin(ke*3)*.06),we.selected!==null){const[G,qe]=pu(we.selected);ne.position.set(G,.536,qe),ne.visible=!0}else ne.visible=!1;const Ve=JSON.stringify([we.lots,we.players.map(G=>G.color)]);if(Me!==Ve){Me=Ve;for(const G of ai){const qe=U[G.id];for(;qe.children.length;){const S=qe.children[0];S.userData.disposableGeometry&&S.geometry.dispose(),qe.remove(S)}const Ie=we.lots[G.id],w=Ie?((Ye=we.players[Ie.owner])==null?void 0:Ye.color)||Fn[Ie.owner]:null;if(F[G.id].material=z(w||"#fffaf0"),Ie){N(qe,.045,.72,.045,"#647568",.67,.36,.7,.01);const S=new DE(ue(Ie.owner,w));if(S.position.set(.67,.86,.7),S.scale.set(.62,.465,1),S.renderOrder=5,qe.add(S),N(qe,1.82,.07,.1,w,0,.1,.89,.02),N(qe,1.82,.07,.1,w,0,.1,-.89,.02),N(qe,.1,.07,1.62,w,.86,.1,0,.02),N(qe,.1,.07,1.62,w,-.86,.1,0,.02),N(qe,1.75,.055,.13,w,0,0,.84,.015),Ie.level===5){N(qe,.62,.72,.58,w,0,.36,-.18,.04),N(qe,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const K=new Mn(new Sl(.43,.28,4),z("#d2a451"));K.position.set(0,.96,-.18),K.userData.disposableGeometry=!0,K.rotation.y=Math.PI/4,K.castShadow=!0,qe.add(K),N(qe,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const K=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let te=0;te<Ie.level;te++){const[he,Ae]=K[te];N(qe,.33,.32,.34,w,he,.2,Ae,.02);const Ue=new Mn(new Sl(.3,.19,4),z("#faf0d7"));Ue.position.set(he,.45,Ae),Ue.userData.disposableGeometry=!0,Ue.rotation.y=Math.PI/4,Ue.castShadow=!0,qe.add(Ue)}}}}}v.update(),T.render(C,E)}vt(),y=()=>{cancelAnimationFrame(be),Yt.disconnect(),M.removeEventListener("pointerdown",xt),M.removeEventListener("pointerup",St),v.dispose();const ve=new Set,Ce=new Set;C.traverse(we=>{we.geometry&&ve.add(we.geometry),we.material&&Ce.add(we.material)}),ve.forEach(we=>we.dispose()),P.forEach(we=>we.dispose()),Ce.forEach(we=>we.dispose()),D.forEach(we=>we.dispose()),q.forEach(we=>we.dispose()),k.forEach(we=>we.dispose()),T.dispose(),T.domElement.parentNode===M&&M.removeChild(T.domElement),h.current=null}})(),()=>{d=!0,y()}},[]),B.createElement("div",{className:"board-canvas",ref:c})});function MR({game:r,onLoad:e}){const[i,s]=At.useState([]),[l,c]=At.useState(""),[h,p]=At.useState(""),[m,d]=At.useState(null),y=()=>{try{s(Rl())}catch{p("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};At.useEffect(()=>{y();const M=setInterval(y,6e4);return window.addEventListener("storage",y),()=>{clearInterval(M),window.removeEventListener("storage",y)}},[]);function x(M=!1){try{const T=Rl();if(s(T),T.length===10&&!M){d({type:"replace"});return}s(cR(r,l,M)),c(""),d(null),p("已儲存，可保留 30 天。")}catch(T){d(null),p(`儲存失敗：${T.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function g(){try{const M=uR(m.id);e(M)}catch(M){d(null),p(M.message),y()}}return B.createElement("div",{className:"save-manager"},B.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",i.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),B.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),B.createElement("input",{id:"save-name",maxLength:60,value:l,onChange:M=>c(M.target.value),placeholder:`回合 ${r.round}`}),B.createElement("button",{className:"primary",onClick:()=>x()},"儲存目前進度"),B.createElement("p",{role:"status"},h),m?B.createElement("section",{className:"save-confirm"},B.createElement("p",null,m.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),B.createElement("button",{className:"primary",onClick:()=>m.type==="replace"?x(!0):g()},"確認",m.type==="replace"?"取代並儲存":"讀取"),B.createElement("button",{className:"secondary full",onClick:()=>d(null)},"取消")):null,!i.length&&B.createElement("p",null,"尚無手動存檔。"),i.map(M=>B.createElement("article",{className:"save-entry",key:M.id},B.createElement("div",null,B.createElement("strong",null,M.name),B.createElement("small",null,new Date(M.savedAt).toLocaleString("zh-TW")),B.createElement("small",null,"回合 ",M.game.round," · 你的總資產 ",fn(so(M.game,0))),B.createElement("small",null,"到期：",new Date(M.savedAt+Oy).toLocaleString("zh-TW"))),B.createElement("button",{className:"secondary",onClick:()=>d({type:"load",id:M.id})},"讀取"))))}function Kv({value:r,rolling:e}){const i={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return B.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${r} 點`},Array.from({length:9},(s,l)=>B.createElement("i",{key:l,className:i[r].includes(l+1)?"pip":""})))}function Ep(r){return(r==null?void 0:r.color)||Fn[(r==null?void 0:r.id)||0]}function Qv({id:r,small:e=!1,player:i}){return B.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Ep(i||{id:r})}},B.createElement("span",{className:"avatar-head"}),B.createElement("span",{className:"avatar-body"}),B.createElement("span",{className:"avatar-cap"}),B.createElement("span",{className:"owner-number"},r+1))}function ER(r){return r===5?"旅館":r?`${r} 間房屋`:"未開發地產"}function bR(r){return r===5?"旅館":"房屋 "+(r||0)+" / 4"}function TR(r,e,i){if(r.selected!==e.id||r.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(r.buildUsed)return"本次落地已完成建造。";if(i.level===5)return"這塊土地已有旅館。";const s=nr(r);return i.level===4?s.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":s.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function AR(r,e,i){return i.level===5?"已達最高等級":r.buildUsed&&r.selected===e.id?"本次落地已建造":i.level===4?`升級旅館 · ${fn(uo(e))}`:`建造房屋 · ${fn(uo(e))}`}function $r({title:r,onClose:e,children:i,wide:s=!1}){const l=At.useRef();return At.useEffect(()=>{var p;const c=document.activeElement;(p=l.current)==null||p.focus();function h(m){if(m.key==="Escape"&&(e==null||e()),m.key==="Tab"){const d=[...l.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!d.length){m.preventDefault();return}m.shiftKey&&document.activeElement===d[0]?(m.preventDefault(),d.at(-1).focus()):!m.shiftKey&&document.activeElement===d.at(-1)&&(m.preventDefault(),d[0].focus())}}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h),c==null||c.focus()}},[]),B.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},B.createElement("section",{ref:l,tabIndex:-1,className:"modal "+(s?"wide":""),role:"dialog","aria-modal":"true","aria-label":r},B.createElement("div",{className:"modal-heading"},B.createElement("h2",null,r),e&&B.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},B.createElement(uM,{size:20}))),i))}const RR=[["擲骰與移動","你與 3 位電腦輪流擲兩顆骰子，3D 棋子按點數前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];function CR(r){if(r.roundOption==="unlimited")return null;if(r.roundOption==="custom"){const e=Number(r.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(r.roundOption)}function wR(){var F;const[r,e]=At.useReducer(yR,void 0,xR),[i,s]=At.useState(null),[l,c]=At.useState(null),[h,p]=At.useState("players"),[m,d]=At.useState(!1),[y,x]=At.useState(!1),[g,M]=At.useState(""),[T,C]=At.useState(!1),[E,v]=At.useState({count:4,roundOption:"40",customRounds:"100",players:[{name:"你",color:Fn[0],human:!0},{name:"艾米",color:Fn[1],human:!1},{name:"小傑",color:Fn[2],human:!1},{name:"喵喵",color:Fn[3],human:!1}]}),I=At.useRef(),H=At.useRef(),D=r.players[r.turn],z=!!(D!=null&&D.human)&&!(D!=null&&D.bankrupt),P=z&&["ready","end"].includes(r.stage),N=()=>{e({type:"ROLL",dice:[1+Math.floor(Math.random()*6),1+Math.floor(Math.random()*6)],eventIndex:Math.floor(Math.random()*6)})};At.useEffect(()=>{try{Rl()}catch{C(!0)}},[]),At.useEffect(()=>{if(r.stage!=="moving")try{vp(r),C(!1)}catch{C(!0)}},[r]),At.useEffect(()=>{if(r.stage==="moving"&&i!=="saves"){const U=setTimeout(()=>e({type:"STEP"}),330);return()=>clearTimeout(U)}},[r,i]),At.useEffect(()=>{const U=r.selected,q=U===null?null:ai[U],ue=U===null?null:r.lots[U],xe=z&&r.stage==="decision"&&(q==null?void 0:q.type)==="property"&&!ue,L=z&&r.stage==="end"&&r.buildAvailable&&(ue==null?void 0:ue.owner)===r.turn;(xe||L)&&(c(U),s("property"))},[r,z]),At.useEffect(()=>{if(z||r.stage==="finished"||i==="new"||i==="rules"||i==="saves")return;const U=setTimeout(()=>{if(r.stage==="ready")N();else if(r.stage==="decision")e({type:D.cash>ai[D.pos].price+1800?"BUY":"SKIP"});else if(r.stage==="end"){const q=Qs(r,r.turn).find(ue=>Mp(r,ue.id)&&D.cash>Math.round(ue.price*.6)+2500);e(q?{type:"BUILD",id:q.id}:{type:"NEXT"})}},r.stage==="decision"?1300:1100);return()=>clearTimeout(U)},[r,z,i]),At.useEffect(()=>{if(!(!m||!H.current))try{const U=H.current,q=U.createOscillator(),ue=U.createGain();q.connect(ue),ue.connect(U.destination),q.type="sine",q.frequency.setValueAtTime(r.stage==="moving"?380:620,U.currentTime),ue.gain.setValueAtTime(.035,U.currentTime),ue.gain.exponentialRampToValueAtTime(.001,U.currentTime+.13),q.start(),q.stop(U.currentTime+.15)}catch{}},[r.remaining,r.stage,m]);const b=()=>{if(!m){const U=window.AudioContext||window.webkitAudioContext;U&&(H.current||(H.current=new U),H.current.resume())}d(!m)},O=U=>{c(U),s("property")},W=CR(E),X=()=>{var U;E.roundOption==="custom"&&!W||(e({type:"NEW",config:{...E,maxRounds:W}}),s(null),p("players"),(U=I.current)==null||U.reset(),x(!1))},k=l!==null?ai[l]:null,oe=k?r.lots[k.id]:null,pe=ai[D.pos],ee=!!k&&k.type==="property"&&!oe&&r.stage==="decision"&&z&&pe.id===k.id;return B.createElement("div",{className:"app-shell"},B.createElement("header",{className:"header"},B.createElement("a",{className:"brand",href:"./","aria-label":"城市大亨首頁"},B.createElement("span",{className:"brand-icon"},B.createElement(F_,{size:33,strokeWidth:1.8})),B.createElement("span",null,B.createElement("strong",null,"城市大亨"),B.createElement("small",null,"CITY TYCOON"))),B.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),B.createElement("nav",null,B.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>s("rules")},B.createElement($S,{size:18}),B.createElement("span",null,"遊戲規則")),B.createElement("span",{className:"nav-divider"}),B.createElement("button",{className:"outline-button",onClick:()=>s("new")},B.createElement(H_,{size:18}),B.createElement("span",null,"新遊戲")))),B.createElement("button",{className:"save-launch secondary",onClick:()=>s("saves")},"儲存／讀取"),i==="saves"&&B.createElement($r,{title:"存檔管理",wide:!0,onClose:()=>s(null)},B.createElement(MR,{game:r,onLoad:U=>{e({type:"LOAD",game:U});try{vp(U),C(!1)}catch{C(!0)}c(null),p("players"),s(null)}})),B.createElement("main",{className:"game-layout"},B.createElement("section",{className:"world","aria-label":"遊戲棋盤"},B.createElement(SR,{game:r,onSelect:O,onError:M,ref:I}),B.createElement("div",{className:"world-heading"},B.createElement("span",{className:"live-dot"}),"經典城市 ",B.createElement("span",{className:"world-heading-divider"},"/"),B.createElement("span",null,"4 人對局")),B.createElement("div",{className:"world-top-right"},B.createElement("span",{className:"saved"},B.createElement(eM,{size:13}),T?"此瀏覽器無法存檔":"自動儲存"),B.createElement("button",{className:"icon-button sound","aria-label":m?"關閉音效":"開啟音效",onClick:b},m?B.createElement(lM,{size:18}):B.createElement(cM,{size:18}))),g&&B.createElement("div",{className:"webgl-error"},g),B.createElement("div",{className:"board-foot"},B.createElement("div",{className:"camera-toolbar"},B.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:y?"selected":"",onClick:()=>{var U;(U=I.current)==null||U.rotate(),x(!y)}},B.createElement(sM,{size:20}),B.createElement("span",null,"旋轉視角")),B.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var U;(U=I.current)==null||U.reset(),x(!1)}},B.createElement(rM,{size:18})),B.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var U;return(U=I.current)==null?void 0:U.top()}},B.createElement(oM,{size:18})),B.createElement("i",null),B.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var U;return(U=I.current)==null?void 0:U.zoom(1.15)}},B.createElement(hM,{size:20})),B.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var U;return(U=I.current)==null?void 0:U.zoom(.87)}},B.createElement(fM,{size:20}))),B.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),B.createElement("aside",{className:"sidebar"},B.createElement("div",{className:"round-heading"},B.createElement("div",null,B.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),B.createElement("h1",null,"回合 ",B.createElement("b",null,String(r.round).padStart(2,"0")),B.createElement("span",null,"/ ",r.maxRounds===null?"∞":r.maxRounds))),B.createElement("span",{className:"round-icon"},B.createElement(nM,{size:21}))),B.createElement("div",{className:"tabs"},B.createElement("button",{className:h==="players"?"active":"",onClick:()=>p("players")},"玩家概況"),B.createElement("button",{className:h==="properties"?"active":"",onClick:()=>p("properties")},"我的地產 ",B.createElement("span",null,Qs(r,0).length))),B.createElement("div",{className:"overview"},h==="players"?r.players.map(U=>B.createElement("div",{key:U.id,className:"player-row "+(r.turn===U.id?"current ":"")+(U.bankrupt?"bankrupt":""),style:{"--player":Ep(U)}},B.createElement(Qv,{id:U.id,player:U}),B.createElement("div",{className:"player-info"},B.createElement("strong",null,U.name,U.id===0?B.createElement("em",null,"玩家"):B.createElement("span",{className:"ai"},"電腦")),B.createElement("small",null,U.bankrupt?"已破產":`${Qs(r,U.id).length} 塊地產${U.jail?" · 監獄中":""}`)),B.createElement("div",{className:"player-cash"},B.createElement("b",null,fn(U.cash)),r.turn===U.id&&B.createElement("small",null,B.createElement("span",null)," 目前回合")))):B.createElement("div",{className:"property-list"},Qs(r,0).length?Qs(r,0).map(U=>B.createElement("button",{key:U.id,onClick:()=>O(U.id)},B.createElement("i",{style:{background:U.color}}),B.createElement("span",null,B.createElement("strong",null,U.name),B.createElement("small",null,ER(r.lots[U.id].level)," · 租金 ",fn(Sp(r,U)))),B.createElement(tM,{size:16}))):B.createElement("div",{className:"empty-properties"},B.createElement(Gc,{size:28}),B.createElement("strong",null,"你的第一塊地產，正在等你"),B.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),B.createElement("section",{className:"turn-panel","aria-live":"polite"},B.createElement("div",{className:"turn-title"},B.createElement("span",{className:"live-dot",style:{background:Ep(D)}}),B.createElement("h2",null,r.stage==="finished"?"本局已結束":z?"你的回合":`${D.name}的回合`),B.createElement("span",null,r.stage==="moving"?"移動中":r.stage==="decision"?"購地時刻":z?"準備出發":"電腦玩家")),B.createElement("div",{className:"dice-row"},B.createElement(Kv,{value:r.dice[0],rolling:r.stage==="moving"}),B.createElement(Kv,{value:r.dice[1],rolling:r.stage==="moving"})),r.stage==="finished"?B.createElement("button",{className:"primary",onClick:()=>s("result")},B.createElement(V_,{size:19}),"查看結算"):z&&r.stage==="decision"?B.createElement("div",{className:"buy-actions"},B.createElement("div",{className:"buy-summary"},B.createElement("strong",null,pe.name),B.createElement("b",null,fn(pe.price))),B.createElement("button",{className:"primary",onClick:()=>e({type:"BUY"})},B.createElement(Gc,{size:18}),"購買地產"),B.createElement("button",{className:"skip-button",onClick:()=>e({type:"SKIP"})},"暫不購買，保留現金 ",B.createElement(Hc,{size:14}))):B.createElement("button",{className:"primary",disabled:!z||r.stage==="moving",onClick:()=>r.stage==="end"?e({type:"NEXT"}):N()},r.stage==="moving"?B.createElement(B.Fragment,null,"前進中 · 還有 ",r.remaining," 格"):z?r.stage==="end"?B.createElement(B.Fragment,null,"結束回合 ",B.createElement(Hc,{size:19})):B.createElement(B.Fragment,null,B.createElement(G_,{size:21}),"擲骰子"):B.createElement(B.Fragment,null,"電腦思考中",B.createElement("span",{className:"thinking"},"…"))),B.createElement("p",{className:"turn-hint"},r.stage==="ready"?z?"好運從這一步開始。":"下一段城市冒險，即將展開。":r.notice),r.event&&B.createElement("div",{className:"event-note"},B.createElement("img",{src:"/chance.png",alt:"城市機會卡"}),B.createElement("div",null,B.createElement("strong",null,r.event.title),B.createElement("span",null,r.event.amount>0?"+":"−"," ",fn(Math.abs(r.event.amount)))))),B.createElement("section",{className:"activity"},B.createElement("div",{className:"activity-heading"},B.createElement("h2",null,"城市動態"),B.createElement("button",{onClick:()=>s("log")},"全部紀錄 ",B.createElement(B_,{size:14}))),B.createElement("div",{className:"activity-list"},r.log.slice(0,3).map((U,q)=>B.createElement("div",{className:"activity-item",key:q},B.createElement("span",{className:"event-icon "+U.kind},U.kind==="buy"?B.createElement(Gc,{size:16}):U.kind==="dice"?B.createElement(G_,{size:16}):U.kind==="tax"?B.createElement(iM,{size:16}):B.createElement(B_,{size:16})),B.createElement("p",null,U.text,B.createElement("small",null,q===0?"剛剛":"本局紀錄")))))),B.createElement("footer",{className:"sidebar-footer"},B.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),i==="rules"&&B.createElement($r,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>s(null)},B.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),B.createElement("div",{className:"rules-list"},RR.map(([U,q],ue)=>B.createElement("div",{key:U},B.createElement("span",null,String(ue+1).padStart(2,"0")),B.createElement("section",null,B.createElement("h3",null,U),B.createElement("p",null,q))))),B.createElement("button",{className:"primary",onClick:()=>s(null)},"知道了，回到城市 ",B.createElement(Hc,{size:18}))),i==="new"&&B.createElement($r,{title:"開啟一段全新的城市故事",onClose:()=>s(null)},B.createElement("img",{className:"modal-art",src:"/chance.png",alt:"微縮城市與機會信封"}),B.createElement("p",{className:"modal-lead"},"設定參與玩家與遊戲長度後開始新遊戲。每位玩家各帶著 $15,000 出發。"),B.createElement("label",{className:"setup-count"},"玩家人數 ",B.createElement("select",{value:E.count,onChange:U=>v(q=>({...q,count:Number(U.target.value)}))},[2,3,4].map(U=>B.createElement("option",{key:U,value:U},U," 人")))),B.createElement("label",{className:"setup-count"},"最多回合 ",B.createElement("select",{"aria-label":"最多回合",value:E.roundOption,onChange:U=>v(q=>({...q,roundOption:U.target.value}))},B.createElement("option",{value:"40"},"40 回合"),B.createElement("option",{value:"80"},"80 回合"),B.createElement("option",{value:"custom"},"自訂"),B.createElement("option",{value:"unlimited"},"無限制"))),E.roundOption==="custom"&&B.createElement("label",{className:"round-limit-custom"},"自訂回合數",B.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:E.customRounds,onChange:U=>v(q=>({...q,customRounds:U.target.value}))})),B.createElement("div",{className:"player-setup"},E.players.slice(0,E.count).map((U,q)=>B.createElement("div",{className:"player-setup-row",key:q},B.createElement("input",{"aria-label":`玩家 ${q+1} 名稱`,value:U.name,onChange:ue=>v(xe=>({...xe,players:xe.players.map((L,J)=>J===q?{...L,name:ue.target.value}:L)}))}),B.createElement("input",{"aria-label":`玩家 ${q+1} 顏色`,type:"color",value:U.color,onChange:ue=>v(xe=>({...xe,players:xe.players.map((L,J)=>J===q?{...L,color:ue.target.value}:L)}))}),B.createElement("select",{value:U.human?"human":"ai",onChange:ue=>v(xe=>({...xe,players:xe.players.map((L,J)=>J===q?{...L,human:ue.target.value==="human"}:L)}))},B.createElement("option",{value:"human"},"真人"),B.createElement("option",{value:"ai"},"電腦"))))),B.createElement("button",{className:"primary",disabled:E.roundOption==="custom"&&!W,onClick:X},B.createElement(H_,{size:18}),"開始新遊戲"),B.createElement("button",{className:"secondary full",onClick:()=>s(null)},"繼續目前遊戲")),i==="property"&&k&&B.createElement($r,{title:"地產手冊",onClose:()=>s(null)},B.createElement("div",{className:"property-card",style:{"--lot":k.color}},B.createElement("div",{className:"property-banner"},k.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),B.createElement(aM,{size:24}),B.createElement("h3",null,k.name),B.createElement("p",null,k.type==="property"?`街區 ${k.group+1} · ${oe?`${r.players[oe.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),k.type==="property"?B.createElement(B.Fragment,null,B.createElement("div",{className:"property-stats"},B.createElement("div",null,B.createElement("span",null,"地產價格"),B.createElement("b",null,fn(k.price))),B.createElement("div",null,B.createElement("span",null,"目前租金"),B.createElement("b",null,fn(oe?Sp(r,k):Math.round(k.price*.18)))),B.createElement("div",null,B.createElement("span",null,"建築等級"),B.createElement("b",null,bR(oe==null?void 0:oe.level))),B.createElement("div",null,B.createElement("span",null,"建造費"),B.createElement("b",null,fn(uo(k))))),(oe==null?void 0:oe.owner)===D.id?B.createElement(B.Fragment,null,B.createElement("p",{className:"property-help"},TR(r,k,oe)),B.createElement("button",{className:"primary",disabled:!P||!Mp(r,k.id,D.id),onClick:()=>e({type:"BUILD",id:k.id})},B.createElement(F_,{size:18}),AR(r,k,oe)),B.createElement("button",{className:"secondary full",disabled:!P,onClick:()=>{e({type:"SELL",id:k.id}),s(null)}},"變賣地產 · ",fn(Math.floor((k.price+oe.level*uo(k))*.5)))):ee?B.createElement(B.Fragment,null,B.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),B.createElement("button",{className:"primary",onClick:()=>e({type:"BUY"})},B.createElement(Gc,{size:18}),"購買地產 · ",fn(k.price)),B.createElement("button",{className:"secondary full",onClick:()=>{e({type:"SKIP"}),s(null)}},"暫不購買，保留現金")):B.createElement("p",{className:"property-help"},oe?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):B.createElement("p",{className:"property-help"},k.type==="start"?"每次經過起點，領取 $2,000。":k.type==="chance"||k.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":k.type==="gojail"?"前往監獄並暫停下一回合。":k.type==="tax"?`停在這裡支付 ${k.id===6?"$1,200":"$1,800"} 稅金。`:k.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),i==="log"&&B.createElement($r,{title:"本局城市紀錄",onClose:()=>s(null)},B.createElement("div",{className:"full-log"},r.log.map((U,q)=>B.createElement("p",{key:q},B.createElement("span",null,String(r.log.length-q).padStart(2,"0")),U.text)))),(i==="result"||r.stage==="finished"&&i===null)&&B.createElement($r,{title:"這座城市，有了新的大亨",onClose:()=>s("closedResult")},B.createElement("div",{className:"winner"},B.createElement(V_,{size:42}),B.createElement("h3",null,(F=r.players[r.winner])==null?void 0:F.name,"獲勝！"),B.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),B.createElement("div",{className:"rankings"},[...r.players].sort((U,q)=>so(r,q.id)-so(r,U.id)).map((U,q)=>B.createElement("div",{key:U.id},B.createElement("b",null,q+1),B.createElement(Qv,{id:U.id,player:U,small:!0}),B.createElement("strong",null,U.name),B.createElement("span",null,U.bankrupt?"已破產":fn(so(r,U.id)))))),B.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),B.createElement("button",{className:"primary",onClick:X},"再玩一場 ",B.createElement(Hc,{size:18}))))}KS.createRoot(document.getElementById("root")).render(B.createElement(wR,null));
